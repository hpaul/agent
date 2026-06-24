import { tool } from "ai";
const MIGRATION_URL = "node_modules/@convex-dev/agent/MIGRATION.md";
const warnedDeprecations = new Set();
function warnDeprecation(key, message) {
    if (!warnedDeprecations.has(key)) {
        warnedDeprecations.add(key);
        console.warn(`[@convex-dev/agent] ${message}\n  See: ${MIGRATION_URL}`);
    }
}
/**
 * This is a wrapper around the ai.tool function that adds extra context to the
 * tool call, including the action context, userId, threadId, and messageId.
 * @param tool The tool. See https://sdk.vercel.ai/docs/ai-sdk-core/tools-and-tool-calling
 * Currently contains deprecated parameters `args` and `handler` to maintain backwards compatibility
 * but these will be removed in the future. Use `inputSchema` and `execute` instead, respectively.
 *
 * @returns A tool to be used with the AI SDK.
 */
export function createTool(def) {
    // Runtime backwards compat - types will show errors but runtime still works
    const inputSchema = def.inputSchema ?? def.args;
    if (!inputSchema)
        throw new Error("To use a Convex tool, you must provide an `inputSchema`");
    if (def.args && !def.inputSchema) {
        warnDeprecation("createTool.args", "createTool: 'args' is deprecated. Use 'inputSchema' instead.");
    }
    if (def.handler && !def.execute) {
        warnDeprecation("createTool.handler", "createTool: 'handler' is deprecated. Use 'execute' instead.");
    }
    const executeHandler = def.execute ?? def.handler;
    if (!executeHandler && !def.outputSchema)
        throw new Error("To use a Convex tool, you must either provide an execute" +
            " handler function, define an outputSchema, or both");
    const t = tool({
        type: "function",
        __acceptsCtx: true,
        ctx: def.ctx,
        description: def.description,
        title: def.title,
        providerOptions: def.providerOptions,
        inputSchema,
        inputExamples: def.inputExamples,
        needsApproval(input, options) {
            const needsApproval = def.needsApproval;
            if (!needsApproval || typeof needsApproval === "boolean")
                return Boolean(needsApproval);
            if (!getCtx(this)) {
                throw new Error("To use a Convex tool, you must either provide the ctx" +
                    " at definition time (dynamically in an action), or use the Agent to" +
                    " call it (which injects the ctx, userId and threadId)");
            }
            return needsApproval(getCtx(this), input, options);
        },
        strict: def.strict,
        ...(executeHandler
            ? {
                execute(input, options) {
                    if (!getCtx(this)) {
                        throw new Error("To use a Convex tool, you must either provide the ctx" +
                            " at definition time (dynamically in an action), or use the Agent to" +
                            " call it (which injects the ctx, userId and threadId)");
                    }
                    return executeHandler(getCtx(this), input, options);
                },
            }
            : {}),
        outputSchema: def.outputSchema,
    });
    if (def.onInputStart) {
        const origOnInputStart = def.onInputStart;
        t.onInputStart = function (options) {
            return origOnInputStart.call(this, getCtx(this), options);
        };
    }
    if (def.onInputDelta) {
        const origOnInputDelta = def.onInputDelta;
        t.onInputDelta = function (options) {
            return origOnInputDelta.call(this, getCtx(this), options);
        };
    }
    if (def.onInputAvailable) {
        const origOnInputAvailable = def.onInputAvailable;
        t.onInputAvailable = function (options) {
            return origOnInputAvailable.call(this, getCtx(this), options);
        };
    }
    if (def.toModelOutput) {
        const origToModelOutput = def.toModelOutput;
        t.toModelOutput = function (options) {
            return origToModelOutput.call(this, getCtx(this), options);
        };
    }
    return t;
}
function getCtx(tool) {
    return tool.ctx;
}
export function wrapTools(ctx, ...toolSets) {
    const output = {};
    for (const toolSet of toolSets) {
        if (!toolSet) {
            continue;
        }
        for (const [name, tool] of Object.entries(toolSet)) {
            if (tool && !tool.__acceptsCtx) {
                output[name] = tool;
            }
            else {
                const out = { ...tool, ctx };
                output[name] = out;
            }
        }
    }
    return output;
}
//# sourceMappingURL=createTool.js.map