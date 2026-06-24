import {} from "ai";
import { vMessageWithMetadata, vToolResultOutput, vToolApprovalRequest, vToolApprovalResponse, } from "./validators.js";
import { MAX_FILE_SIZE, storeFile } from "./client/files.js";
import { convertUint8ArrayToBase64, } from "@ai-sdk/provider-utils";
import { parse, validate } from "convex-helpers/validators";
import { getModelName, getProviderName, } from "./shared.js";
export async function serializeMessage(ctx, component, message) {
    const { content, fileIds } = await serializeContent(ctx, component, message.content);
    return {
        message: {
            role: message.role,
            content,
            ...(message.providerOptions
                ? { providerOptions: message.providerOptions }
                : {}),
        },
        fileIds,
    };
}
// Similar to serializeMessage, but doesn't save any files and is looser
// For use on the frontend / in synchronous environments.
export function fromModelMessage(message) {
    const content = fromModelMessageContent(message.content);
    return {
        role: message.role,
        content,
        ...(message.providerOptions
            ? { providerOptions: message.providerOptions }
            : {}),
    };
}
export async function serializeOrThrow(message) {
    const { content } = await serializeContent({}, {}, message.content);
    return {
        role: message.role,
        content,
        ...(message.providerOptions
            ? { providerOptions: message.providerOptions }
            : {}),
    };
}
export function toModelMessage(message) {
    return {
        ...message,
        content: toModelMessageContent(message.content),
    };
}
export function docsToModelMessages(messages) {
    return messages
        .map((m) => m.message)
        .filter((m) => !!m)
        .filter((m) => !!m.content.length)
        .map(toModelMessage);
}
/**
 * Scan messages for unresolved `tool-approval-request` parts and inject
 * synthetic `tool-approval-response` denials so that the AI SDK receives
 * a complete history (every tool-call has a corresponding result or denial).
 *
 * This handles the case where a user sends a new message instead of
 * resolving pending approvals — the old approvals are auto-denied rather
 * than silently dropped.
 */
export function autoDenyUnresolvedApprovals(messages) {
    // Collect all approval requests: approvalId → { toolCallId, messageIndex }
    const requests = new Map();
    // Collect all resolved approval IDs
    const resolvedIds = new Set();
    for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        if (!Array.isArray(msg.content))
            continue;
        for (const part of msg.content) {
            if (part.type === "tool-approval-request") {
                requests.set(part.approvalId, {
                    toolCallId: part.toolCallId,
                    messageIndex: i,
                });
            }
            else if (part.type === "tool-approval-response") {
                resolvedIds.add(part.approvalId);
            }
        }
    }
    // Find unresolved approvals
    const unresolved = [];
    for (const [approvalId, info] of requests) {
        if (!resolvedIds.has(approvalId)) {
            unresolved.push({ approvalId, ...info });
        }
    }
    if (unresolved.length === 0) {
        return messages;
    }
    // Group unresolved approvals by the assistant message index they came from
    const byMessageIndex = new Map();
    for (const entry of unresolved) {
        console.warn(`Auto-denying unresolved tool approval ${entry.approvalId} ` +
            `(toolCallId: ${entry.toolCallId}): new generation started`);
        let group = byMessageIndex.get(entry.messageIndex);
        if (!group) {
            group = [];
            byMessageIndex.set(entry.messageIndex, group);
        }
        group.push(entry);
    }
    // Build result by inserting synthetic denial messages after each relevant
    // assistant message
    const result = [];
    for (let i = 0; i < messages.length; i++) {
        result.push(messages[i]);
        const group = byMessageIndex.get(i);
        if (group) {
            result.push({
                role: "tool",
                content: group.map((entry) => ({
                    type: "tool-approval-response",
                    approvalId: entry.approvalId,
                    approved: false,
                    reason: "auto-denied: new generation started",
                })),
            });
        }
    }
    return result;
}
export function serializeUsage(usage) {
    return {
        promptTokens: usage.inputTokens ?? 0,
        completionTokens: usage.outputTokens ?? 0,
        totalTokens: usage.totalTokens ?? 0,
        reasoningTokens: usage.reasoningTokens,
        cachedInputTokens: usage.cachedInputTokens,
    };
}
export function toModelMessageUsage(usage) {
    return {
        inputTokens: usage.promptTokens,
        outputTokens: usage.completionTokens,
        totalTokens: usage.totalTokens,
        reasoningTokens: usage.reasoningTokens,
        cachedInputTokens: usage.cachedInputTokens,
        // These detail fields are required by LanguageModelUsage type but we don't
        // have the granular data, so we provide empty objects with undefined values.
        inputTokenDetails: {
            cacheReadTokens: undefined,
            cacheWriteTokens: undefined,
            noCacheTokens: undefined,
        },
        outputTokenDetails: {
            textTokens: undefined,
            reasoningTokens: undefined,
        },
    };
}
export function serializeWarnings(warnings) {
    if (!warnings) {
        return undefined;
    }
    return warnings.map((warning) => {
        if (warning.type === "compatibility") {
            return {
                type: "unsupported-setting",
                setting: warning.feature,
                details: warning.details,
            };
        }
        return warning;
    });
}
export function toModelMessageWarnings(warnings) {
    if (!warnings) {
        return undefined;
    }
    return warnings.map((warning) => {
        if (warning.type === "unsupported-setting") {
            return {
                type: "compatibility",
                feature: warning.setting,
                details: warning.details,
            };
        }
        return warning;
    });
}
/**
 * Serialize explicitly provided response messages for a step.
 * Used by the streaming/generation loop where the caller tracks which
 * messages are new via slicing.
 */
export async function serializeResponseMessages(ctx, component, step, model, responseMessages) {
    return serializeStepMessages(ctx, component, step, model, responseMessages);
}
/**
 * Serialize the new response messages produced by this step.
 *
 * `step.response.messages` is cumulative across steps in AI SDK v6 — each
 * step's array contains all messages from prior steps too. Pass
 * `previousResponseMessageCount` (the prior step's `response.messages.length`,
 * or `0` for the first step) so we slice only the new tail. The parameter is
 * required: defaulting it would silently duplicate every prior message on
 * every multi-step save.
 */
export async function serializeNewMessagesInStep(ctx, component, step, model, previousResponseMessageCount) {
    const newMessages = step.response.messages.slice(previousResponseMessageCount);
    // Keep at least one message in the output so the step still anchors an
    // order slot — downstream `addMessages` relies on each step contributing a
    // row even when AI SDK produced no response messages.
    const messagesToSerialize = newMessages.length > 0
        ? newMessages
        : [{ role: "assistant", content: [] }];
    return serializeStepMessages(ctx, component, step, model, messagesToSerialize);
}
async function serializeStepMessages(ctx, component, step, model, messagesToSerialize) {
    // If there are tool results, there's another message with the tool results
    // ref: https://github.com/vercel/ai/blob/main/packages/ai/src/generate-text/to-response-messages.ts#L120
    const hasToolMessage = step.response.messages.at(-1)?.role === "tool";
    const assistantFields = {
        model: model ? getModelName(model) : undefined,
        provider: model ? getProviderName(model) : undefined,
        providerMetadata: step.providerMetadata,
        reasoning: step.reasoningText,
        reasoningDetails: step.reasoning,
        usage: serializeUsage(step.usage),
        warnings: serializeWarnings(step.warnings),
        finishReason: step.finishReason,
        // Only store the sources on one message
        sources: hasToolMessage ? undefined : step.sources,
    };
    const toolFields = { sources: step.sources };
    const messages = await Promise.all(messagesToSerialize.map(async (msg) => {
        const { message, fileIds } = await serializeMessage(ctx, component, msg);
        return parse(vMessageWithMetadata, {
            message,
            ...(message.role === "tool" ? toolFields : assistantFields),
            text: step.text,
            fileIds,
        });
    }));
    // TODO: capture step.files separately?
    return { messages };
}
export async function serializeObjectResult(ctx, component, result, model) {
    const text = JSON.stringify(result.object);
    const { message, fileIds } = await serializeMessage(ctx, component, {
        role: "assistant",
        content: text,
    });
    return {
        messages: [
            {
                message,
                model: model ? getModelName(model) : undefined,
                provider: model ? getProviderName(model) : undefined,
                providerMetadata: result.providerMetadata,
                finishReason: result.finishReason,
                text,
                usage: serializeUsage(result.usage),
                warnings: serializeWarnings(result.warnings),
                fileIds,
            },
        ],
    };
}
function getMimeOrMediaType(part) {
    if ("mediaType" in part) {
        return part.mediaType;
    }
    if ("mimeType" in part) {
        return part.mimeType;
    }
    return undefined;
}
export async function serializeContent(ctx, component, content) {
    if (typeof content === "string") {
        return { content };
    }
    const fileIds = [];
    const serialized = await Promise.all(content.map(async (part) => {
        const metadata = {};
        if ("providerOptions" in part) {
            metadata.providerOptions = part.providerOptions;
        }
        if ("providerMetadata" in part) {
            metadata.providerMetadata = part.providerMetadata;
        }
        switch (part.type) {
            case "text": {
                return {
                    type: part.type,
                    text: part.text,
                    ...metadata,
                };
            }
            case "image": {
                let image = serializeDataOrUrl(part.image);
                if (image instanceof ArrayBuffer &&
                    image.byteLength > MAX_FILE_SIZE) {
                    const { file } = await storeFile(ctx, component, new Blob([image], {
                        type: getMimeOrMediaType(part) || guessMimeType(image),
                    }));
                    image = file.url;
                    fileIds.push(file.fileId);
                }
                return {
                    type: part.type,
                    mediaType: getMimeOrMediaType(part),
                    ...metadata,
                    image,
                };
            }
            case "file": {
                let data = serializeDataOrUrl(part.data);
                if (data instanceof ArrayBuffer && data.byteLength > MAX_FILE_SIZE) {
                    const { file } = await storeFile(ctx, component, new Blob([data], { type: getMimeOrMediaType(part) }));
                    data = file.url;
                    fileIds.push(file.fileId);
                }
                return {
                    type: part.type,
                    data,
                    filename: part.filename,
                    mediaType: getMimeOrMediaType(part),
                    ...metadata,
                };
            }
            case "tool-call": {
                // Handle legacy data where only args field exists
                const input = part.input ?? part?.args ?? {};
                return {
                    type: part.type,
                    input,
                    /** @deprecated Use `input` instead. */
                    args: input,
                    toolCallId: part.toolCallId,
                    toolName: part.toolName,
                    providerExecuted: part.providerExecuted,
                    ...metadata,
                };
            }
            case "tool-result": {
                return normalizeToolResult(part, metadata);
            }
            case "reasoning": {
                return {
                    type: part.type,
                    text: part.text,
                    ...metadata,
                };
            }
            // Not in current generation output, but could be in historical messages
            case "redacted-reasoning": {
                return {
                    type: part.type,
                    data: part.data,
                    ...metadata,
                };
            }
            case "source": {
                return part;
            }
            case "tool-approval-request": {
                return {
                    type: part.type,
                    approvalId: part.approvalId,
                    toolCallId: part.toolCallId,
                    ...metadata,
                };
            }
            case "tool-approval-response": {
                return {
                    type: part.type,
                    approvalId: part.approvalId,
                    approved: part.approved,
                    reason: part.reason,
                    providerExecuted: part.providerExecuted,
                    ...metadata,
                };
            }
            default:
                return null;
        }
    }));
    return {
        content: serialized.filter((p) => p !== null),
        fileIds: fileIds.length > 0 ? fileIds : undefined,
    };
}
export function fromModelMessageContent(content) {
    if (typeof content === "string") {
        return content;
    }
    return content
        .map((part) => {
        const metadata = {};
        if ("providerOptions" in part) {
            metadata.providerOptions = part.providerOptions;
        }
        if ("providerMetadata" in part) {
            metadata.providerMetadata = part.providerMetadata;
        }
        switch (part.type) {
            case "text":
                return part;
            case "image":
                return {
                    type: part.type,
                    mediaType: getMimeOrMediaType(part),
                    ...metadata,
                    image: serializeDataOrUrl(part.image),
                };
            case "file":
                return {
                    type: part.type,
                    data: serializeDataOrUrl(part.data),
                    filename: part.filename,
                    mediaType: getMimeOrMediaType(part),
                    ...metadata,
                };
            case "tool-call":
                // Handle legacy data where only args field exists
                return {
                    type: part.type,
                    input: part.input ?? part?.args ?? {},
                    /** @deprecated Use `input` instead. */
                    args: part.input ?? part?.args ?? {},
                    toolCallId: part.toolCallId,
                    toolName: part.toolName,
                    providerExecuted: part.providerExecuted,
                    ...metadata,
                };
            case "tool-result":
                return normalizeToolResult(part, metadata);
            case "reasoning":
                return {
                    type: part.type,
                    text: part.text,
                    ...metadata,
                };
            case "tool-approval-request":
                return {
                    type: part.type,
                    approvalId: part.approvalId,
                    toolCallId: part.toolCallId,
                    ...metadata,
                };
            case "tool-approval-response":
                return {
                    type: part.type,
                    approvalId: part.approvalId,
                    approved: part.approved,
                    reason: part.reason,
                    providerExecuted: part.providerExecuted,
                    ...metadata,
                };
            // Not in current generation output, but could be in historical messages
            default:
                return null;
        }
    })
        .filter((p) => p !== null);
}
export function toModelMessageContent(content) {
    if (typeof content === "string") {
        return content;
    }
    return content
        .map((part) => {
        const metadata = {};
        if ("providerOptions" in part) {
            metadata.providerOptions = part.providerOptions;
        }
        if ("providerMetadata" in part) {
            metadata.providerMetadata = part.providerMetadata;
        }
        switch (part.type) {
            case "text":
                return {
                    type: part.type,
                    text: part.text,
                    ...metadata,
                };
            case "image":
                return {
                    type: part.type,
                    image: toModelMessageDataOrUrl(part.image),
                    mediaType: getMimeOrMediaType(part),
                    ...metadata,
                };
            case "file":
                return {
                    type: part.type,
                    data: toModelMessageDataOrUrl(part.data),
                    filename: part.filename,
                    mediaType: getMimeOrMediaType(part),
                    ...metadata,
                };
            case "tool-call": {
                // Handle legacy data where only args field exists
                const input = part.input ?? part?.args ?? {};
                return {
                    type: part.type,
                    input,
                    toolCallId: part.toolCallId,
                    toolName: part.toolName,
                    providerExecuted: part.providerExecuted,
                    ...metadata,
                };
            }
            case "tool-result": {
                return normalizeToolResult(part, metadata);
            }
            case "reasoning":
                return {
                    type: part.type,
                    text: part.text,
                    ...metadata,
                };
            case "redacted-reasoning":
                // TODO: should we just drop this?
                return {
                    type: "reasoning",
                    text: "",
                    ...metadata,
                    providerOptions: metadata.providerOptions
                        ? {
                            ...Object.fromEntries(Object.entries(metadata.providerOptions ?? {}).map(([key, value]) => [
                                key,
                                { ...value, redactedData: part.data },
                            ])),
                        }
                        : undefined,
                };
            case "source":
                return part;
            case "tool-approval-request":
                return {
                    type: part.type,
                    approvalId: part.approvalId,
                    toolCallId: part.toolCallId,
                    ...metadata,
                };
            case "tool-approval-response":
                return {
                    type: part.type,
                    approvalId: part.approvalId,
                    approved: part.approved,
                    reason: part.reason,
                    providerExecuted: part.providerExecuted,
                    ...metadata,
                };
            default:
                return null;
        }
    })
        .filter((p) => p !== null);
}
export function normalizeToolOutput(result) {
    if (typeof result === "string") {
        return {
            type: "text",
            value: result,
        };
    }
    if (validate(vToolResultOutput, result)) {
        return result;
    }
    return {
        type: "json",
        value: result ?? null,
    };
}
function normalizeToolResult(part, metadata) {
    return {
        type: part.type,
        output: part.output
            ? validate(vToolResultOutput, part.output)
                ? part.output
                : normalizeToolOutput(JSON.stringify(part.output))
            : normalizeToolOutput("result" in part ? part.result : undefined),
        toolCallId: part.toolCallId,
        toolName: part.toolName,
        // Preserve isError flag for error reporting
        ...("isError" in part && part.isError ? { isError: true } : {}),
        ...metadata,
    };
}
/**
 * Return a best-guess MIME type based on the magic-number signature
 * found at the start of an ArrayBuffer.
 *
 * @param buf – the source ArrayBuffer
 * @returns the detected MIME type, or `"application/octet-stream"` if unknown
 */
export function guessMimeType(buf) {
    if (typeof buf === "string") {
        if (buf.match(/^data:\w+\/\w+;base64/)) {
            return buf.split(";")[0].split(":")[1];
        }
        return "text/plain";
    }
    if (buf.byteLength < 4)
        return "application/octet-stream";
    // Read the first 12 bytes (enough for all signatures below)
    const bytes = new Uint8Array(buf.slice(0, 12));
    const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
    // Helper so we can look at only the needed prefix
    const startsWith = (sig) => hex.startsWith(sig.toLowerCase());
    // --- image formats ---
    if (startsWith("89504e47"))
        return "image/png"; // PNG  - 89 50 4E 47
    if (startsWith("ffd8ffdb") ||
        startsWith("ffd8ffe0") ||
        startsWith("ffd8ffee") ||
        startsWith("ffd8ffe1"))
        return "image/jpeg"; // JPEG
    if (startsWith("47494638"))
        return "image/gif"; // GIF
    if (startsWith("424d"))
        return "image/bmp"; // BMP
    if (startsWith("52494646") && hex.substr(16, 8) === "57454250")
        return "image/webp"; // WEBP (RIFF....WEBP)
    if (startsWith("49492a00"))
        return "image/tiff"; // TIFF
    // <svg in hex is 3c 3f 78 6d 6c
    if (startsWith("3c737667"))
        return "image/svg+xml"; // <svg
    if (startsWith("3c3f786d"))
        return "image/svg+xml"; // <?xm
    // --- audio/video ---
    if (startsWith("494433"))
        return "audio/mpeg"; // MP3 (ID3)
    if (startsWith("000001ba") || startsWith("000001b3"))
        return "video/mpeg"; // MPEG container
    if (startsWith("1a45dfa3"))
        return "video/webm"; // WEBM / Matroska
    if (startsWith("00000018") && hex.substr(16, 8) === "66747970")
        return "video/mp4"; // MP4
    if (startsWith("4f676753"))
        return "audio/ogg"; // OGG / Opus
    // --- documents & archives ---
    if (startsWith("25504446"))
        return "application/pdf"; // PDF
    if (startsWith("504b0304") ||
        startsWith("504b0506") ||
        startsWith("504b0708"))
        return "application/zip"; // ZIP / DOCX / PPTX / XLSX / EPUB
    if (startsWith("52617221"))
        return "application/x-rar-compressed"; // RAR
    if (startsWith("7f454c46"))
        return "application/x-elf"; // ELF binaries
    if (startsWith("1f8b08"))
        return "application/gzip"; // GZIP
    if (startsWith("425a68"))
        return "application/x-bzip2"; // BZIP2
    if (startsWith("3c3f786d6c"))
        return "application/xml"; // XML
    // Plain text, JSON and others are trickier—fallback:
    return "application/octet-stream";
}
/**
 * Serialize an AI SDK `DataContent` or `URL` to a Convex-serializable format.
 * @param dataOrUrl - The data or URL to serialize.
 * @returns The serialized data as an ArrayBuffer or the URL as a string.
 */
export function serializeDataOrUrl(dataOrUrl) {
    if (typeof dataOrUrl === "string") {
        return dataOrUrl;
    }
    if (dataOrUrl instanceof ArrayBuffer) {
        return dataOrUrl; // Already an ArrayBuffer
    }
    if (dataOrUrl instanceof URL) {
        return dataOrUrl.toString();
    }
    return dataOrUrl.buffer.slice(dataOrUrl.byteOffset, dataOrUrl.byteOffset + dataOrUrl.byteLength);
}
export function toModelMessageDataOrUrl(urlOrString) {
    if (urlOrString instanceof URL) {
        return urlOrString;
    }
    if (typeof urlOrString === "string") {
        if (urlOrString.startsWith("http://") ||
            urlOrString.startsWith("https://")) {
            return new URL(urlOrString);
        }
        return urlOrString;
    }
    return urlOrString;
}
export function toUIFilePart(part) {
    const dataOrUrl = part.type === "image" ? part.image : part.data;
    const url = dataOrUrl instanceof ArrayBuffer
        ? convertUint8ArrayToBase64(new Uint8Array(dataOrUrl))
        : dataOrUrl.toString();
    return {
        type: "file",
        mediaType: part.mediaType,
        filename: part.type === "file" ? part.filename : undefined,
        url,
        providerMetadata: part.providerOptions,
    };
}
// Currently unused
// export function toModelMessages(args: {
//   messages?: ModelMessage[] | AIMessageWithoutId[];
// }): ModelMessage[] {
//   const messages: ModelMessage[] = [];
//   if (args.messages) {
//     if (
//       args.messages.every(
//         (m) => typeof m === "object" && m !== null && "parts" in m,
//       )
//     ) {
//       messages.push(...convertToModelMessages(args.messages));
//     } else {
//       messages.push(...modelMessageSchema.array().parse(args.messages));
//     }
//   }
//   return messages;
// }
//# sourceMappingURL=mapping.js.map