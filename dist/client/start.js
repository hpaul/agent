import { stepCountIs, } from "ai";
import { serializeResponseMessages, serializeObjectResult, } from "../mapping.js";
import { embedMessages, fetchContextWithPrompt } from "./search.js";
import { DEFAULT_COMPACTION_RECENT_MESSAGES, DEFAULT_COMPACTION_TRIGGER_TOKENS, getModelName, getProviderName, } from "../shared.js";
import { wrapTools } from "./createTool.js";
import { assert, omit } from "convex-helpers";
import { saveInputMessages } from "./saveInputMessages.js";
/**
 * Merge an Anthropic `compact_20260112` context-management edit into the
 * existing provider options without clobbering other providers, other anthropic
 * keys, or an already-present compact edit.
 */
export function withCompaction(providerOptions, compaction) {
    const triggerTokens = compaction.triggerTokens ?? DEFAULT_COMPACTION_TRIGGER_TOKENS;
    // compact_20260112 requires an integer trigger of at least 50_000.
    if (!Number.isInteger(triggerTokens)) {
        throw new Error(`compaction.triggerTokens must be an integer, got ${triggerTokens}`);
    }
    if (triggerTokens < DEFAULT_COMPACTION_TRIGGER_TOKENS) {
        throw new Error(`compaction.triggerTokens must be at least ${DEFAULT_COMPACTION_TRIGGER_TOKENS}, got ${triggerTokens}`);
    }
    const anthropic = { ...(providerOptions?.anthropic ?? {}) };
    const contextManagement = {
        ...(anthropic.contextManagement ?? {}),
    };
    const existingEdits = Array.isArray(contextManagement.edits)
        ? contextManagement.edits
        : [];
    const hasCompact = existingEdits.some((e) => e?.type === "compact_20260112");
    const edits = hasCompact
        ? existingEdits
        : [
            ...existingEdits,
            {
                type: "compact_20260112",
                trigger: { type: "input_tokens", value: triggerTokens },
                ...(compaction.instructions
                    ? { instructions: compaction.instructions }
                    : {}),
            },
        ];
    return {
        ...providerOptions,
        anthropic: { ...anthropic, contextManagement: { ...contextManagement, edits } },
    };
}
export async function startGeneration(ctx, component, 
/**
 * These are the arguments you'll pass to the LLM call such as
 * `generateText` or `streamText`. This function will look up the context
 * and provide functions to save the steps, abort the generation, and more.
 * The type of the arguments returned infers from the type of the arguments
 * you pass here.
 */
args, { threadId, ...opts }) {
    const userId = opts.userId ??
        (threadId &&
            (await ctx.runQuery(component.threads.getThread, { threadId }))
                ?.userId) ??
        undefined;
    // Compaction widens the recent-message window so history can reach the
    // trigger — but only for Anthropic models, since the feature is Anthropic-only
    // and a non-Anthropic run shouldn't pay for the larger reads.
    const resolvedModel = args.model ?? opts.languageModel;
    const providerName = typeof resolvedModel === "string"
        ? resolvedModel.split("/").at(0)
        : resolvedModel?.provider;
    const useCompactionWindow = !!opts.contextOptions?.compaction &&
        !!providerName?.startsWith("anthropic") &&
        opts.contextOptions?.recentMessages === undefined;
    const contextOptions = useCompactionWindow
        ? { ...opts.contextOptions, recentMessages: DEFAULT_COMPACTION_RECENT_MESSAGES }
        : opts.contextOptions;
    const context = await fetchContextWithPrompt(ctx, component, {
        ...opts,
        contextOptions,
        userId,
        threadId,
        messages: args.messages,
        prompt: args.prompt,
        promptMessageId: args.promptMessageId,
    });
    const saveMessages = opts.storageOptions?.saveMessages ?? "promptAndOutput";
    const { promptMessageId, pendingMessage, savedMessages } = threadId && saveMessages !== "none"
        ? await saveInputMessages(ctx, component, {
            ...opts,
            userId,
            threadId,
            prompt: args.prompt,
            messages: args.messages,
            promptMessageId: args.promptMessageId,
            storageOptions: { saveMessages },
        })
        : {
            promptMessageId: args.promptMessageId,
            pendingMessage: undefined,
            savedMessages: [],
        };
    const order = pendingMessage?.order ?? context.order;
    const stepOrder = pendingMessage?.stepOrder ?? context.stepOrder;
    let pendingMessageId = pendingMessage?._id;
    const model = args.model ?? opts.languageModel;
    assert(model, "model is required");
    let activeModel = model;
    const fail = async (reason) => {
        if (pendingMessageId) {
            await ctx.runMutation(component.messages.finalizeMessage, {
                messageId: pendingMessageId,
                result: { status: "failed", error: reason },
            });
        }
    };
    if (args.abortSignal) {
        const abortSignal = args.abortSignal;
        abortSignal.addEventListener("abort", async () => {
            await fail(abortSignal.reason?.toString() ?? "abortSignal");
        }, { once: true });
    }
    const toolCtx = {
        ...ctx,
        userId,
        threadId,
        promptMessageId,
        agent: opts.agentForToolCtx,
    };
    const tools = wrapTools(toolCtx, args.tools);
    const baseProviderOptions = args.providerOptions ??
        opts.providerOptions;
    const compaction = opts.contextOptions?.compaction;
    const providerOptions = compaction
        ? withCompaction(baseProviderOptions, compaction)
        : baseProviderOptions;
    const aiArgs = {
        ...opts.callSettings,
        ...omit(args, ["promptMessageId", "messages", "prompt"]),
        providerOptions,
        model,
        messages: context.messages,
        stopWhen: args.stopWhen ?? (opts.maxSteps ? stepCountIs(opts.maxSteps) : undefined),
        tools,
    };
    // NOTE: We intentionally do NOT override _internal.generateId here.
    // The AI SDK uses generateId() for many internal IDs (approval IDs,
    // tool execution IDs, message IDs, etc.) and they must be unique.
    // The pending message is linked via the explicit `pendingMessageId`
    // parameter passed to addMessages in the save closure.
    // Track how many response messages we've already saved across steps.
    // step.response.messages is cumulative — each step appends to it.
    // We need to know which messages are new in each step to serialize
    // only the new ones (important for tool approval flows where the SDK
    // may add extra messages like approval tool-results).
    let previousResponseMessageCount = 0;
    return {
        args: aiArgs,
        order: order ?? 0,
        stepOrder: stepOrder ?? 0,
        userId,
        promptMessageId,
        getSavedMessages: () => savedMessages,
        updateModel: (model) => {
            if (model) {
                activeModel = model;
            }
        },
        fail,
        save: async (toSave, createPendingMessage, 
        /**
         * If provided, finish this stream atomically with the message save.
         * This prevents UI flickering from separate mutations (issue #181).
         */
        finishStreamId) => {
            if (threadId && saveMessages !== "none") {
                let serialized;
                if ("object" in toSave) {
                    serialized = await serializeObjectResult(ctx, component, toSave.object, activeModel);
                }
                else {
                    const allResponseMessages = toSave.step.response.messages;
                    const newResponseMessages = allResponseMessages.slice(previousResponseMessageCount);
                    previousResponseMessageCount = allResponseMessages.length;
                    serialized = await serializeResponseMessages(ctx, component, toSave.step, activeModel, newResponseMessages);
                }
                const embeddings = await embedMessages(ctx, { threadId, ...opts, userId }, serialized.messages.map((m) => m.message));
                if (createPendingMessage) {
                    serialized.messages.push({
                        message: { role: "assistant", content: [] },
                        status: "pending",
                    });
                    embeddings?.vectors.push(null);
                }
                const saved = await ctx.runMutation(component.messages.addMessages, {
                    userId,
                    threadId,
                    agentName: opts.agentName,
                    promptMessageId,
                    pendingMessageId,
                    messages: serialized.messages,
                    embeddings,
                    failPendingSteps: false,
                    finishStreamId,
                });
                const lastMessage = saved.messages.at(-1);
                if (createPendingMessage) {
                    if (lastMessage.status === "failed") {
                        pendingMessageId = undefined;
                        savedMessages.push(...saved.messages);
                        await fail(lastMessage.error ??
                            "Aborting - the pending message was marked as failed");
                    }
                    else {
                        pendingMessageId = lastMessage._id;
                        savedMessages.push(...saved.messages.slice(0, -1));
                    }
                }
                else {
                    pendingMessageId = undefined;
                    savedMessages.push(...saved.messages);
                }
            }
            const output = "object" in toSave ? toSave.object : toSave.step;
            if (opts.rawRequestResponseHandler) {
                await opts.rawRequestResponseHandler(ctx, {
                    userId,
                    threadId,
                    agentName: opts.agentName,
                    request: output.request,
                    response: output.response,
                });
            }
            if (opts.usageHandler && output.usage) {
                await opts.usageHandler(ctx, {
                    userId,
                    threadId,
                    agentName: opts.agentName,
                    model: getModelName(activeModel),
                    provider: getProviderName(activeModel),
                    usage: output.usage,
                    providerMetadata: output.providerMetadata,
                });
            }
        },
    };
}
//# sourceMappingURL=start.js.map