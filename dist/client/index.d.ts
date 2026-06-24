import type { JSONValue } from "@ai-sdk/provider";
import type { FlexibleSchema, IdGenerator, InferSchema } from "@ai-sdk/provider-utils";
import type { CallSettings, GenerateObjectResult, GenerateTextResult, LanguageModel, ModelMessage, StepResult, StopCondition, StreamTextResult, ToolSet } from "ai";
import { streamObject } from "ai";
import { type GenericDataModel, type PaginationOptions, type PaginationResult } from "convex/server";
import type { threadFieldsSupportingPatch } from "../component/threads.js";
import { type VectorDimension } from "../component/vector/tables.js";
import { type Message, type MessageDoc, type MessageStatus, type MessageWithMetadata, type ProviderMetadata, type StreamArgs, type ThreadDoc } from "../validators.js";
import { type SaveMessageArgs, type SaveMessagesArgs } from "./messages.js";
import { type StreamingOptions } from "./streaming.js";
import type { ActionCtx, AgentComponent, Config, ContextOptions, GenerateObjectArgs, GenerationOutputMetadata, MaybeCustomCtx, ObjectMode, Options, RawRequestResponseHandler, MutationCtx, StorageOptions, StreamingTextArgs, StreamObjectArgs, SyncStreamsReturnValue, TextArgs, Thread, UsageHandler, QueryCtx, AgentPrompt, Output } from "./types.js";
import { hasSuccessfulToolCall } from "./utils.js";
export { stepCountIs } from "ai";
export { hasSuccessfulToolCall };
export { docsToModelMessages, toModelMessage, toModelMessage as deserializeMessage, guessMimeType, serializeDataOrUrl, serializeMessage, toUIFilePart, } from "../mapping.js";
export { extractText, isTool, sorted } from "../shared.js";
export { vAssistantMessage, vContent, vContextOptions, vMessage, vMessageDoc, vPaginationResult, vProviderMetadata, vSource, vStorageOptions, vStreamArgs, vSystemMessage, vThreadDoc, vToolMessage, vUsage, vUserMessage, type Message, type MessageDoc, type SourcePart, type ThreadDoc, type Usage, } from "../validators.js";
export { createTool, type ToolCtx } from "./createTool.js";
export { definePlaygroundAPI, type AgentsFn, type PlaygroundAPI, } from "./definePlaygroundAPI.js";
export { getFile, storeFile } from "./files.js";
export { listMessages, listUIMessages, saveMessage, saveMessages, type SaveMessageArgs, type SaveMessagesArgs, } from "./messages.js";
export { mockModel } from "./mockModel.js";
export { fetchContextMessages, filterOutOrphanedToolMessages, fetchContextWithPrompt, generateAndSaveEmbeddings, embedMessages, embedMany, } from "./search.js";
export { startGeneration } from "./start.js";
export { DEFAULT_STREAMING_OPTIONS, DeltaStreamer, abortStream, compressUIMessageChunks, listStreams, syncStreams, vStreamMessagesReturnValue, } from "./streaming.js";
export { createThread, getThreadMetadata, searchThreadTitles, updateThreadMetadata, } from "./threads.js";
export type { ContextHandler } from "./types.js";
export { toUIMessages, fromUIMessages, type UIMessage } from "../UIMessages.js";
export type { AgentComponent, Config, ContextOptions, ProviderMetadata, RawRequestResponseHandler, StorageOptions, StreamArgs, SyncStreamsReturnValue, Thread, UsageHandler, };
export declare class Agent<
/**
 * You can require that all `ctx` args to generateText & streamText
 * have a certain shape by passing a type here.
 * e.g.
 * ```ts
 * const myAgent = new Agent<{ orgId: string }>(...);
 * ```
 * This is useful if you want to share that type in `createTool`
 * e.g.
 * ```ts
 * type MyCtx = ToolCtx & { orgId: string };
 * const myTool = createTool({
 *   args: z.object({...}),
 *   description: "...",
 *   handler: async (ctx: MyCtx, args) => {
 *     // use ctx.orgId
 *   },
 * });
 */
CustomCtx extends object = object, AgentTools extends ToolSet = any> {
    component: AgentComponent;
    options: Config & {
        /**
         * The name for the agent. This will be attributed on each message
         * created by this agent.
         */
        name: string;
        /**
         * The LLM model to use for generating / streaming text and objects.
         * e.g.
         * import { openai } from "@ai-sdk/openai"
         * const myAgent = new Agent(components.agent, {
         *   languageModel: openai.chat("gpt-4o-mini"),
         */
        languageModel: LanguageModel;
        /**
         * The default system prompt to put in each request.
         * Override per-prompt by passing the "system" parameter.
         */
        instructions?: string;
        /**
         * Tools that the agent can call out to and get responses from.
         * They can be AI SDK tools (import {tool} from "ai")
         * or tools that have Convex context
         * (import { createTool } from "@convex-dev/agent")
         */
        tools?: AgentTools;
        /**
         * When generating or streaming text with tools available, this
         * determines when to stop. Defaults to the AI SDK default.
         */
        stopWhen?: StopCondition<NoInfer<AgentTools>> | Array<StopCondition<NoInfer<AgentTools>>>;
    };
    constructor(component: AgentComponent, options: Config & {
        /**
         * The name for the agent. This will be attributed on each message
         * created by this agent.
         */
        name: string;
        /**
         * The LLM model to use for generating / streaming text and objects.
         * e.g.
         * import { openai } from "@ai-sdk/openai"
         * const myAgent = new Agent(components.agent, {
         *   languageModel: openai.chat("gpt-4o-mini"),
         */
        languageModel: LanguageModel;
        /**
         * The default system prompt to put in each request.
         * Override per-prompt by passing the "system" parameter.
         */
        instructions?: string;
        /**
         * Tools that the agent can call out to and get responses from.
         * They can be AI SDK tools (import {tool} from "ai")
         * or tools that have Convex context
         * (import { createTool } from "@convex-dev/agent")
         */
        tools?: AgentTools;
        /**
         * When generating or streaming text with tools available, this
         * determines when to stop. Defaults to the AI SDK default.
         */
        stopWhen?: StopCondition<NoInfer<AgentTools>> | Array<StopCondition<NoInfer<AgentTools>>>;
    });
    /**
     * Get the embedding model, prioritizing embeddingModel over textEmbeddingModel.
     * @private
     */
    private getEmbeddingModel;
    /**
     * Start a new thread with the agent. This will have a fresh history, though if
     * you pass in a userId you can have it search across other threads for relevant
     * messages as context for the LLM calls.
     * @param ctx The context of the Convex function. From an action, you can thread
     *   with the agent. From a mutation, you can start a thread and save the threadId
     *   to pass to continueThread later.
     * @param args The thread metadata.
     * @returns The threadId of the new thread and the thread object.
     */
    createThread(ctx: ActionCtx & CustomCtx, args?: {
        /**
         * The userId to associate with the thread. If not provided, the thread will be
         * anonymous.
         */
        userId?: string | null;
        /**
         * The title of the thread. Not currently used for anything.
         */
        title?: string;
        /**
         * The summary of the thread. Not currently used for anything.
         */
        summary?: string;
    }): Promise<{
        threadId: string;
        thread: Thread<AgentTools>;
    }>;
    /**
     * Start a new thread with the agent. This will have a fresh history, though if
     * you pass in a userId you can have it search across other threads for relevant
     * messages as context for the LLM calls.
     * @param ctx The context of the Convex function. From a mutation, you can
     * start a thread and save the threadId to pass to continueThread later.
     * @param args The thread metadata.
     * @returns The threadId of the new thread.
     */
    createThread(ctx: MutationCtx, args?: {
        /**
         * The userId to associate with the thread. If not provided, the thread will be
         * anonymous.
         */
        userId?: string | null;
        /**
         * The title of the thread. Not currently used for anything.
         */
        title?: string;
        /**
         * The summary of the thread. Not currently used for anything.
         */
        summary?: string;
    }): Promise<{
        threadId: string;
    }>;
    /**
     * Continues a thread using this agent. Note: threads can be continued
     * by different agents. This is a convenience around calling the various
     * generate and stream functions with explicit userId and threadId parameters.
     * @param ctx The ctx object passed to the action handler
     * @param { threadId, userId }: the thread and user to associate the messages with.
     * @returns Functions bound to the userId and threadId on a `{thread}` object.
     */
    continueThread(ctx: ActionCtx & CustomCtx, args: {
        /**
         * The associated thread created by {@link createThread}
         */
        threadId: string;
        /**
         * If supplied, the userId can be used to search across other threads for
         * relevant messages from the same user as context for the LLM calls.
         */
        userId?: string | null;
    }): Promise<{
        thread: Thread<AgentTools>;
    }>;
    start<TOOLS extends ToolSet | undefined, T extends {
        _internal?: {
            generateId?: IdGenerator;
        };
    }>(ctx: ActionCtx & CustomCtx, 
    /**
     * These are the arguments you'll pass to the LLM call such as
     * `generateText` or `streamText`. This function will look up the context
     * and provide functions to save the steps, abort the generation, and more.
     * The type of the arguments returned infers from the type of the arguments
     * you pass here.
     */
    args: T & AgentPrompt & {
        /**
         * The tools to use for the tool calls. This will override tools specified
         * in the Agent constructor or createThread / continueThread.
         */
        tools?: TOOLS;
        /**
         * The abort signal to be passed to the LLM call. If triggered, it will
         * mark the pending message as failed. If the generation is asynchronously
         * aborted, it will trigger this signal when detected.
         */
        abortSignal?: AbortSignal;
        stopWhen?: StopCondition<TOOLS extends undefined ? AgentTools : TOOLS> | Array<StopCondition<TOOLS extends undefined ? AgentTools : TOOLS>>;
    }, options?: Options & {
        userId?: string | null;
        threadId?: string;
    }): Promise<{
        args: T & {
            system?: string;
            model: LanguageModel;
            prompt?: never;
            messages: ModelMessage[];
            tools?: TOOLS extends undefined ? AgentTools : TOOLS;
        } & CallSettings;
        order: number;
        stepOrder: number;
        userId: string | undefined;
        promptMessageId: string | undefined;
        updateModel: (model: LanguageModel | undefined) => void;
        save: <TOOLS extends ToolSet>(toSave: {
            step: StepResult<TOOLS>;
        } | {
            object: GenerateObjectResult<unknown>;
        }, createPendingMessage?: boolean) => Promise<void>;
        fail: (reason: string) => Promise<void>;
        getSavedMessages: () => MessageDoc[];
    }>;
    /**
     * This behaves like {@link generateText} from the "ai" package except that
     * it add context based on the userId and threadId and saves the input and
     * resulting messages to the thread, if specified.
     * Use {@link continueThread} to get a version of this function already scoped
     * to a thread (and optionally userId).
     * @param ctx The context passed from the action function calling this.
     * @param scope: The user and thread to associate the message with
     * @param generateTextArgs The arguments to the generateText function, along
     * with {@link AgentPrompt} options, such as promptMessageId.
     * @param options Extra controls for the {@link ContextOptions} and {@link StorageOptions}.
     * @returns The result of the generateText function.
     */
    generateText<TOOLS extends ToolSet | undefined = undefined, OUTPUT extends Output<any, any, any> = never>(ctx: ActionCtx & CustomCtx, threadOpts: {
        userId?: string | null;
        threadId?: string;
    }, 
    /**
     * The arguments to the generateText function, similar to the ai sdk's
     * {@link generateText} function, along with Agent prompt options.
     */
    generateTextArgs: AgentPrompt & TextArgs<AgentTools, TOOLS, OUTPUT>, options?: Options): Promise<GenerateTextResult<TOOLS extends undefined ? AgentTools : TOOLS, OUTPUT> & GenerationOutputMetadata>;
    /**
     * This behaves like {@link streamText} from the "ai" package except that
     * it add context based on the userId and threadId and saves the input and
     * resulting messages to the thread, if specified.
     * Use {@link continueThread} to get a version of this function already scoped
     * to a thread (and optionally userId).
     */
    streamText<TOOLS extends ToolSet | undefined = undefined, OUTPUT extends Output<any, any, any> = never>(ctx: ActionCtx & CustomCtx, threadOpts: {
        userId?: string | null;
        threadId?: string;
    }, 
    /**
     * The arguments to the streamText function, similar to the ai sdk's
     * {@link streamText} function, along with Agent prompt options.
     */
    streamTextArgs: AgentPrompt & StreamingTextArgs<AgentTools, TOOLS, OUTPUT>, 
    /**
     * The {@link ContextOptions} and {@link StorageOptions}
     * options to use for fetching contextual messages and saving input/output messages.
     */
    options?: Options & {
        /**
         * Whether to save incremental data (deltas) from streaming responses.
         * Defaults to false.
         * If false, it will not save any deltas to the database.
         * If true, it will save deltas with {@link DEFAULT_STREAMING_OPTIONS}.
         *
         * Regardless of this option, when streaming you are able to use this
         * `streamText` function as you would with the "ai" package's version:
         * iterating over the text, streaming it over HTTP, etc.
         */
        saveStreamDeltas?: boolean | StreamingOptions;
    }): Promise<StreamTextResult<TOOLS extends undefined ? AgentTools : TOOLS, OUTPUT> & GenerationOutputMetadata>;
    /**
     * This behaves like {@link generateObject} from the "ai" package except that
     * it add context based on the userId and threadId and saves the input and
     * resulting messages to the thread, if specified.
     * Use {@link continueThread} to get a version of this function already scoped
     * to a thread (and optionally userId).
     */
    generateObject<SCHEMA extends FlexibleSchema<unknown> = FlexibleSchema<JSONValue>, OUTPUT extends ObjectMode = InferSchema<SCHEMA> extends string ? "enum" : "object", RESULT = OUTPUT extends "array" ? Array<InferSchema<SCHEMA>> : InferSchema<SCHEMA>>(ctx: ActionCtx & CustomCtx, threadOpts: {
        userId?: string | null;
        threadId?: string;
    }, 
    /**
     * The arguments to the generateObject function, similar to the ai sdk's
     * {@link generateObject} function, along with Agent prompt options.
     */
    generateObjectArgs: AgentPrompt & GenerateObjectArgs<SCHEMA, OUTPUT, RESULT>, 
    /**
     * The {@link ContextOptions} and {@link StorageOptions}
     * options to use for fetching contextual messages and saving input/output messages.
     */
    options?: Options): Promise<GenerateObjectResult<RESULT> & GenerationOutputMetadata>;
    /**
     * This behaves like `streamObject` from the "ai" package except that
     * it add context based on the userId and threadId and saves the input and
     * resulting messages to the thread, if specified.
     * Use {@link continueThread} to get a version of this function already scoped
     * to a thread (and optionally userId).
     */
    streamObject<SCHEMA extends FlexibleSchema<unknown> = FlexibleSchema<JSONValue>, OUTPUT extends ObjectMode = InferSchema<SCHEMA> extends string ? "enum" : "object", RESULT = OUTPUT extends "array" ? Array<InferSchema<SCHEMA>> : InferSchema<SCHEMA>>(ctx: ActionCtx & CustomCtx, threadOpts: {
        userId?: string | null;
        threadId?: string;
    }, 
    /**
     * The arguments to the streamObject function, similar to the ai sdk's
     * {@link streamObject} function, along with Agent prompt options.
     */
    streamObjectArgs: AgentPrompt & StreamObjectArgs<SCHEMA, OUTPUT, RESULT>, 
    /**
     * The {@link ContextOptions} and {@link StorageOptions}
     * options to use for fetching contextual messages and saving input/output messages.
     */
    options?: Options): Promise<ReturnType<typeof streamObject<SCHEMA, OUTPUT, RESULT>> & GenerationOutputMetadata>;
    /**
     * Save a message to the thread.
     * @param ctx A ctx object from a mutation or action.
     * @param args The message and what to associate it with (user / thread)
     * You can pass extra metadata alongside the message, e.g. associated fileIds.
     * @returns The messageId of the saved message.
     */
    saveMessage(ctx: MutationCtx | ActionCtx, args: SaveMessageArgs & {
        /**
         * If true, it will not generate embeddings for the message.
         * Useful if you're saving messages in a mutation where you can't run `fetch`.
         * You can generate them asynchronously by using the scheduler to run an
         * action later that calls `agent.generateAndSaveEmbeddings`.
         */
        skipEmbeddings?: boolean;
    }): Promise<{
        messageId: string;
        message: {
            id?: string | undefined;
            text?: string | undefined;
            providerOptions?: Record<string, Record<string, any>> | undefined;
            providerMetadata?: Record<string, Record<string, any>> | undefined;
            reasoning?: string | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            embeddingId?: string | undefined;
            fileIds?: string[] | undefined;
            error?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            message?: {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "user";
                content: string | ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    mediaType?: string | undefined;
                    mimeType?: string | undefined;
                    type: "image";
                    image: string | ArrayBuffer;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    mediaType?: string | undefined;
                    mimeType?: string | undefined;
                    filename?: string | undefined;
                    type: "file";
                    data: string | ArrayBuffer;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "assistant";
                content: string | ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    mediaType?: string | undefined;
                    mimeType?: string | undefined;
                    filename?: string | undefined;
                    type: "file";
                    data: string | ArrayBuffer;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    signature?: string | undefined;
                    type: "reasoning";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "redacted-reasoning";
                    data: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    providerExecuted?: boolean | undefined;
                    type: "tool-call";
                    toolCallId: string;
                    toolName: string;
                    input: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    input?: any;
                    providerExecuted?: boolean | undefined;
                    type: "tool-call";
                    toolCallId: string;
                    toolName: string;
                    args: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    providerExecuted?: boolean | undefined;
                    output?: {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        reason?: string | undefined;
                        type: "execution-denied";
                    } | {
                        type: "content";
                        value: ({
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "text";
                            text: string;
                        } | {
                            type: "media";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            filename?: string | undefined;
                            type: "file-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "custom";
                        })[];
                    } | undefined;
                    result?: any;
                    isError?: boolean | undefined;
                    experimental_content?: ({
                        type: "text";
                        text: string;
                    } | {
                        mimeType?: string | undefined;
                        type: "image";
                        data: string;
                    })[] | undefined;
                    type: "tool-result";
                    toolCallId: string;
                    toolName: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    title?: string | undefined;
                    type: "source";
                    id: string;
                    url: string;
                    sourceType: "url";
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    filename?: string | undefined;
                    type: "source";
                    id: string;
                    mediaType: string;
                    sourceType: "document";
                    title: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "tool-approval-request";
                    toolCallId: string;
                    approvalId: string;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "tool";
                content: ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    providerExecuted?: boolean | undefined;
                    output?: {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        reason?: string | undefined;
                        type: "execution-denied";
                    } | {
                        type: "content";
                        value: ({
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "text";
                            text: string;
                        } | {
                            type: "media";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            filename?: string | undefined;
                            type: "file-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "custom";
                        })[];
                    } | undefined;
                    result?: any;
                    isError?: boolean | undefined;
                    experimental_content?: ({
                        type: "text";
                        text: string;
                    } | {
                        mimeType?: string | undefined;
                        type: "image";
                        data: string;
                    })[] | undefined;
                    type: "tool-result";
                    toolCallId: string;
                    toolName: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    providerExecuted?: boolean | undefined;
                    reason?: string | undefined;
                    type: "tool-approval-response";
                    approvalId: string;
                    approved: boolean;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "system";
                content: string;
            } | undefined;
            usage?: {
                reasoningTokens?: number | undefined;
                cachedInputTokens?: number | undefined;
                promptTokens: number;
                completionTokens: number;
                totalTokens: number;
            } | undefined;
            sources?: ({
                type?: "source" | undefined;
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                title?: string | undefined;
                id: string;
                url: string;
                sourceType: "url";
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                filename?: string | undefined;
                type: "source";
                id: string;
                mediaType: string;
                sourceType: "document";
                title: string;
            })[] | undefined;
            warnings?: ({
                details?: string | undefined;
                type: "unsupported-setting";
                setting: string;
            } | {
                details?: string | undefined;
                type: "unsupported-tool";
                tool: any;
            } | {
                type: "other";
                message: string;
            })[] | undefined;
            finishReason?: "length" | "error" | "other" | "stop" | "content-filter" | "tool-calls" | "unknown" | undefined;
            reasoningDetails?: ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                signature?: string | undefined;
                type: "reasoning";
                text: string;
            } | {
                signature?: string | undefined;
                type: "text";
                text: string;
            } | {
                type: "redacted";
                data: string;
            })[] | undefined;
            tool: boolean;
            threadId: string;
            _id: string;
            _creationTime: number;
            order: number;
            stepOrder: number;
            status: "pending" | "success" | "failed";
        };
    }>;
    /**
     * Explicitly save messages associated with the thread (& user if provided)
     * If you have an embedding model set, it will also generate embeddings for
     * the messages.
     * @param ctx The ctx parameter to a mutation or action.
     * @param args The messages and context to save
     * @returns
     */
    saveMessages(ctx: MutationCtx | ActionCtx, args: SaveMessagesArgs & {
        /**
         * Skip generating embeddings for the messages. Useful if you're
         * saving messages in a mutation where you can't run `fetch`.
         * You can generate them asynchronously by using the scheduler to run an
         * action later that calls `agent.generateAndSaveEmbeddings`.
         */
        skipEmbeddings?: boolean;
    }): Promise<{
        messages: MessageDoc[];
    }>;
    /**
     * List messages from a thread.
     * @param ctx A ctx object from a query, mutation, or action.
     * @param args.threadId The thread to list messages from.
     * @param args.paginationOpts Pagination options (e.g. via usePaginatedQuery).
     * @param args.excludeToolMessages Whether to exclude tool messages.
     *   False by default.
     * @param args.statuses What statuses to include. All by default.
     * @returns The MessageDoc's in a format compatible with usePaginatedQuery.
     */
    listMessages(ctx: QueryCtx | MutationCtx | ActionCtx, args: {
        threadId: string;
        paginationOpts: PaginationOptions;
        excludeToolMessages?: boolean;
        statuses?: MessageStatus[];
    }): Promise<PaginationResult<MessageDoc>>;
    /**
     * A function that handles fetching stream deltas, used with the React hooks
     * `useThreadMessages` or `useStreamingThreadMessages`.
     * @param ctx A ctx object from a query, mutation, or action.
     * @param args.threadId The thread to sync streams for.
     * @param args.streamArgs The stream arguments with per-stream cursors.
     * @returns The deltas for each stream from their existing cursor.
     */
    syncStreams(ctx: QueryCtx | MutationCtx | ActionCtx, args: {
        threadId: string;
        streamArgs: StreamArgs | undefined;
        includeStatuses?: ("streaming" | "finished" | "aborted")[];
    }): Promise<SyncStreamsReturnValue | undefined>;
    /**
     * Fetch the context messages for a thread.
     * @param ctx Either a query, mutation, or action ctx.
     *   If it is not an action context, you can't do text or
     *   vector search.
     * @param args The associated thread, user, message
     * @returns
     */
    fetchContextMessages(ctx: QueryCtx | MutationCtx | ActionCtx, args: {
        userId: string | undefined;
        threadId: string | undefined;
        /**
         * If targetMessageId is not provided, this text will be used
         * for text and vector search
         */
        searchText?: string;
        /**
         * If provided, it will use this message for text/vector search (if enabled)
         * and will only fetch messages up to (and including) this message's "order"
         */
        targetMessageId?: string;
        /**
         * @deprecated use searchText and targetMessageId instead
         */
        messages?: (ModelMessage | Message)[];
        /**
         * @deprecated use targetMessageId instead
         */
        upToAndIncludingMessageId?: string;
        contextOptions: ContextOptions | undefined;
    }): Promise<MessageDoc[]>;
    /**
     * Get the metadata for a thread.
     * @param ctx A ctx object from a query, mutation, or action.
     * @param args.threadId The thread to get the metadata for.
     * @returns The metadata for the thread.
     */
    getThreadMetadata(ctx: QueryCtx | MutationCtx | ActionCtx, args: {
        threadId: string;
    }): Promise<ThreadDoc>;
    /**
     * Update the metadata for a thread.
     * @param ctx A ctx object from a mutation or action.
     * @param args.threadId The thread to update the metadata for.
     * @param args.patch The patch to apply to the thread.
     * @returns The updated thread metadata.
     */
    updateThreadMetadata(ctx: MutationCtx | ActionCtx, args: {
        threadId: string;
        patch: Partial<Pick<ThreadDoc, (typeof threadFieldsSupportingPatch)[number]>>;
    }): Promise<ThreadDoc>;
    /**
     * Get the embeddings for a set of messages.
     * @param messages The messages to get the embeddings for.
     * @returns The embeddings for the messages.
     */
    generateEmbeddings(ctx: ActionCtx, args: {
        userId: string | undefined;
        threadId: string | undefined;
    }, messages: (ModelMessage | Message)[]): Promise<{
        vectors: (number[] | null)[];
        dimension: VectorDimension;
        model: string;
    } | undefined>;
    /**
     * Generate embeddings for a set of messages, and save them to the database.
     * It will not generate or save embeddings for messages that already have an
     * embedding.
     * @param ctx The ctx parameter to an action.
     * @param args The messageIds to generate embeddings for.
     */
    generateAndSaveEmbeddings(ctx: ActionCtx, args: {
        messageIds: string[];
    }): Promise<void>;
    /**
     * Approve a tool call that requires human approval.
     * Saves a `tool-approval-response` message to the thread.
     * After calling this, call `agent.streamText` or `agent.generateText`
     * with `promptMessageId` set to the returned `messageId` to continue
     * generation — the AI SDK will automatically execute the approved tool.
     *
     * The approval response is attached to the same generation order as the
     * original approval request, preserving tool_call/tool_result adjacency in
     * the continuation context even if newer thread messages exist.
     *
     * @param ctx A ctx object from a mutation.
     * @param args.threadId The thread containing the tool call.
     * @param args.approvalId The approval ID from the tool-approval-request part.
     * @param args.reason Optional reason for approval.
     * @returns The messageId of the saved approval response message.
     */
    approveToolCall(ctx: MutationCtx, args: {
        threadId: string;
        approvalId: string;
        reason?: string;
    }): Promise<{
        messageId: string;
    }>;
    /**
     * Deny a tool call that requires human approval.
     * Saves a `tool-approval-response` message to the thread.
     * After calling this, call `agent.streamText` or `agent.generateText`
     * with `promptMessageId` set to the returned `messageId` to continue
     * generation — the AI SDK will automatically create an `execution-denied`
     * result and let the model respond accordingly.
     *
     * @param ctx A ctx object from a mutation.
     * @param args.threadId The thread containing the tool call.
     * @param args.approvalId The approval ID from the tool-approval-request part.
     * @param args.reason Optional reason for denial.
     * @returns The messageId of the saved denial response message.
     */
    denyToolCall(ctx: MutationCtx, args: {
        threadId: string;
        approvalId: string;
        reason?: string;
    }): Promise<{
        messageId: string;
    }>;
    private respondToToolCallApproval;
    private findApprovalContext;
    /**
     * Explicitly save a "step" created by the AI SDK. For multi-step generation
     * loops, pass `previousStep` so we save only the new response messages —
     * see the arg JSDoc for why.
     * @param ctx The ctx argument to a mutation or action.
     * @param args The Step generated by the AI SDK.
     */
    saveStep<TOOLS extends ToolSet>(ctx: ActionCtx, args: {
        userId?: string;
        threadId: string;
        /**
         * The message this step is in response to.
         */
        promptMessageId: string;
        /**
         * The step to save, possibly including multiple tool calls.
         */
        step: StepResult<TOOLS>;
        /**
         * The previous step in the same generation loop, if any. Pass it so we
         * can compute how many of `step.response.messages` are already saved.
         * Omit for the first step. AI SDK v6's `step.response.messages` is
         * cumulative across steps; without this, multi-step callers duplicate
         * every prior message on every save — the exact failure mode this fix
         * addresses, just at the public-API layer.
         */
        previousStep?: StepResult<TOOLS>;
        /**
         * The model used to generate the step.
         * Defaults to the chat model for the Agent.
         */
        model?: string;
        /**
         * The provider of the model used to generate the step.
         * Defaults to the chat provider for the Agent.
         */
        provider?: string;
    }): Promise<{
        messages: MessageDoc[];
    }>;
    /**
     * Manually save the result of a generateObject call to the thread.
     * This happens automatically when using {@link generateObject} or {@link streamObject}
     * from the `thread` object created by {@link continueThread} or {@link createThread}.
     * @param ctx The context passed from the mutation or action function calling this.
     * @param args The arguments to the saveObject function.
     */
    saveObject(ctx: ActionCtx, args: {
        userId: string | undefined;
        threadId: string;
        promptMessageId: string;
        model: string | undefined;
        provider: string | undefined;
        result: GenerateObjectResult<unknown>;
        metadata?: Omit<MessageWithMetadata, "message">;
    }): Promise<{
        messages: MessageDoc[];
    }>;
    /**
     * Commit or rollback a message that was pending.
     * This is done automatically when saving messages by default.
     * If creating pending messages, you can call this when the full "transaction" is done.
     * @param ctx The ctx argument to your mutation or action.
     * @param args What message to save. Generally the parent message sent into
     *   the generateText call.
     */
    finalizeMessage(ctx: MutationCtx | ActionCtx, args: {
        messageId: string;
        result: {
            status: "failed";
            error: string;
        } | {
            status: "success";
        };
    }): Promise<void>;
    /**
     * Update a message by its id.
     * @param ctx The ctx argument to your mutation or action.
     * @param args The message fields to update.
     */
    updateMessage(ctx: MutationCtx | ActionCtx, args: {
        /** The id of the message to update. */
        messageId: string;
        patch: {
            /** The message to replace the existing message. */
            message: ModelMessage | Message;
            /** The status to set on the message. */
            status: "success" | "error";
            /** The error message to set on the message. */
            error?: string;
            /**
             * These will override the fileIds in the message.
             * To remove all existing files, pass an empty array.
             * If passing in a new message, pass in the fileIds you explicitly want to keep
             * from the previous message, as the new files generated from the new message
             * will be added to the list.
             * If you pass undefined, it will not change the fileIds unless new
             * files are generated from the message. In that case, the new fileIds
             * will replace the old fileIds.
             */
            fileIds?: string[];
        };
    }): Promise<void>;
    /**
     * Delete multiple messages by their ids, including their embeddings
     * and reduce the refcount of any files they reference.
     * @param ctx The ctx argument to your mutation or action.
     * @param args The ids of the messages to delete.
     */
    deleteMessages(ctx: MutationCtx | ActionCtx, args: {
        messageIds: string[];
    }): Promise<void>;
    /**
     * Delete a single message by its id, including its embedding
     * and reduce the refcount of any files it references.
     * @param ctx The ctx argument to your mutation or action.
     * @param args The id of the message to delete.
     */
    deleteMessage(ctx: MutationCtx | ActionCtx, args: {
        messageId: string;
    }): Promise<void>;
    /**
     * Delete a range of messages by their order and step order.
     * Each "order" is a set of associated messages in response to the message
     * at stepOrder 0.
     * The (startOrder, startStepOrder) is inclusive
     * and the (endOrder, endStepOrder) is exclusive.
     * To delete all messages at "order" 1, you can pass:
     * `{ startOrder: 1, endOrder: 2 }`
     * To delete a message at step (order=1, stepOrder=1), you can pass:
     * `{ startOrder: 1, startStepOrder: 1, endOrder: 1, endStepOrder: 2 }`
     * To delete all messages between (1, 1) up to and including (3, 5), you can pass:
     * `{ startOrder: 1, startStepOrder: 1, endOrder: 3, endStepOrder: 6 }`
     *
     * If it cannot do it in one transaction, it returns information you can use
     * to resume the deletion.
     * e.g.
     * ```ts
     * let isDone = false;
     * let lastOrder = args.startOrder;
     * let lastStepOrder = args.startStepOrder ?? 0;
     * while (!isDone) {
     *   // eslint-disable-next-line @typescript-eslint/no-explicit-any
     *   ({ isDone, lastOrder, lastStepOrder } = await agent.deleteMessageRange(
     *     ctx,
     *     {
     *       threadId: args.threadId,
     *       startOrder: lastOrder,
     *       startStepOrder: lastStepOrder,
     *       endOrder: args.endOrder,
     *       endStepOrder: args.endStepOrder,
     *     }
     *   ));
     * }
     * ```
     * @param ctx The ctx argument to your mutation or action.
     * @param args The range of messages to delete.
     */
    deleteMessageRange(ctx: MutationCtx | ActionCtx, args: {
        threadId: string;
        startOrder: number;
        startStepOrder?: number;
        endOrder: number;
        endStepOrder?: number;
    }): Promise<{
        isDone: boolean;
        lastOrder?: number;
        lastStepOrder?: number;
    }>;
    /**
     * Delete a thread and all its messages and streams asynchronously (in batches)
     * This uses a mutation to that processes one page and recursively queues the
     * next page for deletion.
     * @param ctx The ctx argument to your mutation or action.
     * @param args The id of the thread to delete and optionally the page size to use for the delete.
     */
    deleteThreadAsync(ctx: MutationCtx | ActionCtx, args: {
        threadId: string;
        pageSize?: number;
    }): Promise<void>;
    /**
     * Delete a thread and all its messages and streams synchronously.
     * This uses an action to iterate through all pages. If the action fails
     * partway, it will not automatically restart.
     * @param ctx The ctx argument to your action.
     * @param args The id of the thread to delete and optionally the page size to use for the delete.
     */
    deleteThreadSync(ctx: ActionCtx, args: {
        threadId: string;
        pageSize?: number;
    }): Promise<void>;
    /**
     * WORKFLOW UTILITIES
     */
    /**
     * Create a mutation that creates a thread so you can call it from a Workflow.
     * e.g.
     * ```ts
     * // in convex/foo.ts
     * export const createThread = weatherAgent.createThreadMutation();
     *
     * const workflow = new WorkflowManager(components.workflow);
     * export const myWorkflow = workflow.define({
     *   args: {},
     *   handler: async (step) => {
     *     const { threadId } = await step.runMutation(internal.foo.createThread);
     *     // use the threadId to generate text, object, etc.
     *   },
     * });
     * ```
     * @returns A mutation that creates a thread.
     */
    createThreadMutation(): import("convex/server").RegisteredMutation<"internal", {
        title?: string | undefined;
        userId?: string | undefined;
        summary?: string | undefined;
    }, Promise<{
        threadId: string;
    }>>;
    /**
     * Create an action out of this agent so you can call it from workflows or other actions
     * without a wrapping function.
     * @param spec Configuration for the agent acting as an action, including
     *   {@link ContextOptions}, {@link StorageOptions}, and {@link stopWhen}.
     */
    asTextAction<DataModel extends GenericDataModel>(spec: MaybeCustomCtx<CustomCtx, DataModel, AgentTools> & {
        /**
         * Whether to stream the text.
         * If false, it will generate the text in a single call. (default)
         * If true or {@link StreamingOptions}, it will stream the text from the LLM
         * and save the chunks to the database with the options you specify, or the
         * defaults if you pass true.
         */
        stream?: boolean | StreamingOptions;
        /**
         * When to stop generating text.
         * Defaults to the {@link Agent["options"].stopWhen} option.
         */
        stopWhen?: StopCondition<AgentTools> | Array<StopCondition<AgentTools>>;
    } & Options, overrides?: CallSettings): import("convex/server").RegisteredAction<"internal", {
        providerOptions?: Record<string, Record<string, any>> | undefined;
        system?: string | undefined;
        threadId?: string | undefined;
        contextOptions?: {
            excludeToolMessages?: boolean | undefined;
            recentMessages?: number | undefined;
            searchOptions?: {
                vectorSearch?: boolean | undefined;
                textSearch?: boolean | undefined;
                vectorScoreThreshold?: number | undefined;
                messageRange?: {
                    before: number;
                    after: number;
                } | undefined;
                limit: number;
            } | undefined;
            searchOtherThreads?: boolean | undefined;
        } | undefined;
        storageOptions?: {
            saveMessages?: "all" | "none" | "promptAndOutput" | undefined;
        } | undefined;
        callSettings?: {
            maxOutputTokens?: number | undefined;
            temperature?: number | undefined;
            topP?: number | undefined;
            topK?: number | undefined;
            presencePenalty?: number | undefined;
            frequencyPenalty?: number | undefined;
            stopSequences?: string[] | undefined;
            seed?: number | undefined;
            maxRetries?: number | undefined;
            headers?: Record<string, string> | undefined;
        } | undefined;
        maxSteps?: number | undefined;
        userId?: string | undefined;
        promptMessageId?: string | undefined;
        messages?: ({
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "user";
            content: string | ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "text";
                text: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                type: "image";
                image: string | ArrayBuffer;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                type: "file";
                data: string | ArrayBuffer;
            })[];
        } | {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "assistant";
            content: string | ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "text";
                text: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                type: "file";
                data: string | ArrayBuffer;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                signature?: string | undefined;
                type: "reasoning";
                text: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "redacted-reasoning";
                data: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                type: "tool-call";
                toolCallId: string;
                toolName: string;
                input: any;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                input?: any;
                providerExecuted?: boolean | undefined;
                type: "tool-call";
                toolCallId: string;
                toolName: string;
                args: any;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                output?: {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    reason?: string | undefined;
                    type: "execution-denied";
                } | {
                    type: "content";
                    value: ({
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        text: string;
                    } | {
                        type: "media";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        filename?: string | undefined;
                        type: "file-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "custom";
                    })[];
                } | undefined;
                result?: any;
                isError?: boolean | undefined;
                experimental_content?: ({
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                })[] | undefined;
                type: "tool-result";
                toolCallId: string;
                toolName: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                title?: string | undefined;
                type: "source";
                id: string;
                url: string;
                sourceType: "url";
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                filename?: string | undefined;
                type: "source";
                id: string;
                mediaType: string;
                sourceType: "document";
                title: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "tool-approval-request";
                toolCallId: string;
                approvalId: string;
            })[];
        } | {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "tool";
            content: ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                output?: {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    reason?: string | undefined;
                    type: "execution-denied";
                } | {
                    type: "content";
                    value: ({
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        text: string;
                    } | {
                        type: "media";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        filename?: string | undefined;
                        type: "file-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "custom";
                    })[];
                } | undefined;
                result?: any;
                isError?: boolean | undefined;
                experimental_content?: ({
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                })[] | undefined;
                type: "tool-result";
                toolCallId: string;
                toolName: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                providerExecuted?: boolean | undefined;
                reason?: string | undefined;
                type: "tool-approval-response";
                approvalId: string;
                approved: boolean;
            })[];
        } | {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "system";
            content: string;
        })[] | undefined;
        prompt?: string | undefined;
        toolChoice?: "required" | "none" | "auto" | {
            type: "tool";
            toolName: string;
        } | undefined;
        stream?: boolean | undefined;
        experimental_continueSteps?: boolean | undefined;
    }, Promise<{
        text: string;
        promptMessageId: string | undefined;
        order: number | undefined;
        finishReason: import("ai").FinishReason;
        warnings: import("@ai-sdk/provider").SharedV3Warning[] | undefined;
        savedMessageIds: string[];
    }>>;
    /**
     * Create an action that generates an object out of this agent so you can call
     * it from workflows or other actions without a wrapping function.
     * @param spec Configuration for the agent acting as an action, including
     * the normal parameters to {@link generateObject}, plus {@link ContextOptions}
     * and stopWhen.
     */
    asObjectAction<T, DataModel extends GenericDataModel>(objectArgs: GenerateObjectArgs<FlexibleSchema<T>> & Partial<AgentPrompt>, options?: Options & MaybeCustomCtx<CustomCtx, DataModel, AgentTools>): import("convex/server").RegisteredAction<"internal", {
        providerOptions?: Record<string, Record<string, any>> | undefined;
        system?: string | undefined;
        threadId?: string | undefined;
        contextOptions?: {
            excludeToolMessages?: boolean | undefined;
            recentMessages?: number | undefined;
            searchOptions?: {
                vectorSearch?: boolean | undefined;
                textSearch?: boolean | undefined;
                vectorScoreThreshold?: number | undefined;
                messageRange?: {
                    before: number;
                    after: number;
                } | undefined;
                limit: number;
            } | undefined;
            searchOtherThreads?: boolean | undefined;
        } | undefined;
        storageOptions?: {
            saveMessages?: "all" | "none" | "promptAndOutput" | undefined;
        } | undefined;
        callSettings?: {
            maxOutputTokens?: number | undefined;
            temperature?: number | undefined;
            topP?: number | undefined;
            topK?: number | undefined;
            presencePenalty?: number | undefined;
            frequencyPenalty?: number | undefined;
            stopSequences?: string[] | undefined;
            seed?: number | undefined;
            maxRetries?: number | undefined;
            headers?: Record<string, string> | undefined;
        } | undefined;
        userId?: string | undefined;
        promptMessageId?: string | undefined;
        messages?: ({
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "user";
            content: string | ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "text";
                text: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                type: "image";
                image: string | ArrayBuffer;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                type: "file";
                data: string | ArrayBuffer;
            })[];
        } | {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "assistant";
            content: string | ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "text";
                text: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                type: "file";
                data: string | ArrayBuffer;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                signature?: string | undefined;
                type: "reasoning";
                text: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "redacted-reasoning";
                data: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                type: "tool-call";
                toolCallId: string;
                toolName: string;
                input: any;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                input?: any;
                providerExecuted?: boolean | undefined;
                type: "tool-call";
                toolCallId: string;
                toolName: string;
                args: any;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                output?: {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    reason?: string | undefined;
                    type: "execution-denied";
                } | {
                    type: "content";
                    value: ({
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        text: string;
                    } | {
                        type: "media";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        filename?: string | undefined;
                        type: "file-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "custom";
                    })[];
                } | undefined;
                result?: any;
                isError?: boolean | undefined;
                experimental_content?: ({
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                })[] | undefined;
                type: "tool-result";
                toolCallId: string;
                toolName: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                title?: string | undefined;
                type: "source";
                id: string;
                url: string;
                sourceType: "url";
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                filename?: string | undefined;
                type: "source";
                id: string;
                mediaType: string;
                sourceType: "document";
                title: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "tool-approval-request";
                toolCallId: string;
                approvalId: string;
            })[];
        } | {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "tool";
            content: ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                output?: {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-text";
                    value: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-json";
                    value: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    reason?: string | undefined;
                    type: "execution-denied";
                } | {
                    type: "content";
                    value: ({
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        text: string;
                    } | {
                        type: "media";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        filename?: string | undefined;
                        type: "file-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-data";
                        mediaType: string;
                        data: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-url";
                        url: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-file-id";
                        fileId: string | Record<string, string>;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "custom";
                    })[];
                } | undefined;
                result?: any;
                isError?: boolean | undefined;
                experimental_content?: ({
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                })[] | undefined;
                type: "tool-result";
                toolCallId: string;
                toolName: string;
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                providerExecuted?: boolean | undefined;
                reason?: string | undefined;
                type: "tool-approval-response";
                approvalId: string;
                approved: boolean;
            })[];
        } | {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "system";
            content: string;
        })[] | undefined;
        prompt?: string | undefined;
    }, Promise<{
        object: T;
        promptMessageId: string | undefined;
        order: number | undefined;
        finishReason: import("ai").FinishReason;
        warnings: import("@ai-sdk/provider").SharedV3Warning[] | undefined;
        savedMessageIds: string[];
    }>>;
    /**
     * @deprecated Use {@link saveMessages} directly instead.
     */
    asSaveMessagesMutation(): import("convex/server").RegisteredMutation<"internal", {
        userId?: string | undefined;
        promptMessageId?: string | undefined;
        embeddings?: {
            model: string;
            vectors: (number[] | null)[];
        } | undefined;
        failPendingSteps?: boolean | undefined;
        threadId: string;
        messages: {
            text?: string | undefined;
            providerMetadata?: Record<string, Record<string, any>> | undefined;
            reasoning?: string | undefined;
            fileIds?: string[] | undefined;
            error?: string | undefined;
            status?: "pending" | "success" | "failed" | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            usage?: {
                reasoningTokens?: number | undefined;
                cachedInputTokens?: number | undefined;
                promptTokens: number;
                completionTokens: number;
                totalTokens: number;
            } | undefined;
            sources?: ({
                type?: "source" | undefined;
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                title?: string | undefined;
                id: string;
                url: string;
                sourceType: "url";
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                filename?: string | undefined;
                type: "source";
                id: string;
                mediaType: string;
                sourceType: "document";
                title: string;
            })[] | undefined;
            warnings?: ({
                details?: string | undefined;
                type: "unsupported-setting";
                setting: string;
            } | {
                details?: string | undefined;
                type: "unsupported-tool";
                tool: any;
            } | {
                type: "other";
                message: string;
            })[] | undefined;
            finishReason?: "length" | "error" | "other" | "stop" | "content-filter" | "tool-calls" | "unknown" | undefined;
            reasoningDetails?: ({
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                signature?: string | undefined;
                type: "reasoning";
                text: string;
            } | {
                signature?: string | undefined;
                type: "text";
                text: string;
            } | {
                type: "redacted";
                data: string;
            })[] | undefined;
            message: {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "user";
                content: string | ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    mediaType?: string | undefined;
                    mimeType?: string | undefined;
                    type: "image";
                    image: string | ArrayBuffer;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    mediaType?: string | undefined;
                    mimeType?: string | undefined;
                    filename?: string | undefined;
                    type: "file";
                    data: string | ArrayBuffer;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "assistant";
                content: string | ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    mediaType?: string | undefined;
                    mimeType?: string | undefined;
                    filename?: string | undefined;
                    type: "file";
                    data: string | ArrayBuffer;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    signature?: string | undefined;
                    type: "reasoning";
                    text: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "redacted-reasoning";
                    data: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    providerExecuted?: boolean | undefined;
                    type: "tool-call";
                    toolCallId: string;
                    toolName: string;
                    input: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    input?: any;
                    providerExecuted?: boolean | undefined;
                    type: "tool-call";
                    toolCallId: string;
                    toolName: string;
                    args: any;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    providerExecuted?: boolean | undefined;
                    output?: {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        reason?: string | undefined;
                        type: "execution-denied";
                    } | {
                        type: "content";
                        value: ({
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "text";
                            text: string;
                        } | {
                            type: "media";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            filename?: string | undefined;
                            type: "file-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "custom";
                        })[];
                    } | undefined;
                    result?: any;
                    isError?: boolean | undefined;
                    experimental_content?: ({
                        type: "text";
                        text: string;
                    } | {
                        mimeType?: string | undefined;
                        type: "image";
                        data: string;
                    })[] | undefined;
                    type: "tool-result";
                    toolCallId: string;
                    toolName: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    title?: string | undefined;
                    type: "source";
                    id: string;
                    url: string;
                    sourceType: "url";
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    filename?: string | undefined;
                    type: "source";
                    id: string;
                    mediaType: string;
                    sourceType: "document";
                    title: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    type: "tool-approval-request";
                    toolCallId: string;
                    approvalId: string;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "tool";
                content: ({
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    args?: any;
                    providerExecuted?: boolean | undefined;
                    output?: {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-text";
                        value: string;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "error-json";
                        value: any;
                    } | {
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        reason?: string | undefined;
                        type: "execution-denied";
                    } | {
                        type: "content";
                        value: ({
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "text";
                            text: string;
                        } | {
                            type: "media";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            filename?: string | undefined;
                            type: "file-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-data";
                            mediaType: string;
                            data: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-url";
                            url: string;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "image-file-id";
                            fileId: string | Record<string, string>;
                        } | {
                            providerOptions?: Record<string, Record<string, any>> | undefined;
                            type: "custom";
                        })[];
                    } | undefined;
                    result?: any;
                    isError?: boolean | undefined;
                    experimental_content?: ({
                        type: "text";
                        text: string;
                    } | {
                        mimeType?: string | undefined;
                        type: "image";
                        data: string;
                    })[] | undefined;
                    type: "tool-result";
                    toolCallId: string;
                    toolName: string;
                } | {
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    providerMetadata?: Record<string, Record<string, any>> | undefined;
                    providerExecuted?: boolean | undefined;
                    reason?: string | undefined;
                    type: "tool-approval-response";
                    approvalId: string;
                    approved: boolean;
                })[];
            } | {
                providerOptions?: Record<string, Record<string, any>> | undefined;
                role: "system";
                content: string;
            };
        }[];
    }, Promise<{
        lastMessageId: string;
        messages: {
            _id: string;
            order: number;
            stepOrder: number;
        }[];
    }>>;
}
//# sourceMappingURL=index.d.ts.map