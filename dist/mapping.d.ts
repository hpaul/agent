import { type UIMessage as AIMessage, type AssistantContent, type ModelMessage, type DataContent, type FilePart, type GenerateObjectResult, type ImagePart, type StepResult, type ToolContent, type ToolSet, type UserContent, type FileUIPart, type LanguageModelUsage, type CallWarning, type ToolResultPart, type JSONValue } from "ai";
import { type Message, type MessageWithMetadata, type Usage, type MessageDoc } from "./validators.js";
import type { ActionCtx, AgentComponent } from "./client/types.js";
import type { MutationCtx } from "./client/types.js";
import { type ModelOrMetadata } from "./shared.js";
export type AIMessageWithoutId = Omit<AIMessage, "id">;
export type SerializeUrlsAndUint8Arrays<T> = T extends URL ? string : T extends Uint8Array | ArrayBufferLike ? ArrayBuffer : T extends Array<infer Inner> ? Array<SerializeUrlsAndUint8Arrays<Inner>> : T extends Record<string, any> ? {
    [K in keyof T]: SerializeUrlsAndUint8Arrays<T[K]>;
} : T;
export type Content = UserContent | AssistantContent | ToolContent;
export type SerializedContent = Message["content"];
export type SerializedMessage = Message;
export declare function serializeMessage(ctx: ActionCtx | MutationCtx, component: AgentComponent, message: ModelMessage | Message): Promise<{
    message: SerializedMessage;
    fileIds?: string[];
}>;
export declare function fromModelMessage(message: ModelMessage): Message;
export declare function serializeOrThrow(message: ModelMessage | Message): Promise<SerializedMessage>;
export declare function toModelMessage(message: SerializedMessage | ModelMessage): ModelMessage;
export declare function docsToModelMessages(messages: MessageDoc[]): ModelMessage[];
/**
 * Scan messages for unresolved `tool-approval-request` parts and inject
 * synthetic `tool-approval-response` denials so that the AI SDK receives
 * a complete history (every tool-call has a corresponding result or denial).
 *
 * This handles the case where a user sends a new message instead of
 * resolving pending approvals — the old approvals are auto-denied rather
 * than silently dropped.
 */
export declare function autoDenyUnresolvedApprovals(messages: ModelMessage[]): ModelMessage[];
export declare function serializeUsage(usage: LanguageModelUsage): Usage;
export declare function toModelMessageUsage(usage: Usage): LanguageModelUsage;
export declare function serializeWarnings(warnings: CallWarning[] | undefined): MessageWithMetadata["warnings"];
export declare function toModelMessageWarnings(warnings: MessageWithMetadata["warnings"]): CallWarning[] | undefined;
/**
 * Serialize explicitly provided response messages for a step.
 * Used by the streaming/generation loop where the caller tracks which
 * messages are new via slicing.
 */
export declare function serializeResponseMessages<TOOLS extends ToolSet>(ctx: ActionCtx, component: AgentComponent, step: StepResult<TOOLS>, model: ModelOrMetadata | undefined, responseMessages: ModelMessage[]): Promise<{
    messages: MessageWithMetadata[];
}>;
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
export declare function serializeNewMessagesInStep<TOOLS extends ToolSet>(ctx: ActionCtx, component: AgentComponent, step: StepResult<TOOLS>, model: ModelOrMetadata | undefined, previousResponseMessageCount: number): Promise<{
    messages: MessageWithMetadata[];
}>;
export declare function serializeObjectResult(ctx: ActionCtx, component: AgentComponent, result: GenerateObjectResult<unknown>, model: ModelOrMetadata | undefined): Promise<{
    messages: MessageWithMetadata[];
}>;
export declare function serializeContent(ctx: ActionCtx | MutationCtx, component: AgentComponent, content: Content | Message["content"]): Promise<{
    content: SerializedContent;
    fileIds?: string[];
}>;
export declare function fromModelMessageContent(content: Content): Message["content"];
export declare function toModelMessageContent(content: SerializedContent | ModelMessage["content"]): Content;
export declare function normalizeToolOutput(result: string | JSONValue | undefined): ToolResultPart["output"];
/**
 * Return a best-guess MIME type based on the magic-number signature
 * found at the start of an ArrayBuffer.
 *
 * @param buf – the source ArrayBuffer
 * @returns the detected MIME type, or `"application/octet-stream"` if unknown
 */
export declare function guessMimeType(buf: ArrayBuffer | string): string;
/**
 * Serialize an AI SDK `DataContent` or `URL` to a Convex-serializable format.
 * @param dataOrUrl - The data or URL to serialize.
 * @returns The serialized data as an ArrayBuffer or the URL as a string.
 */
export declare function serializeDataOrUrl(dataOrUrl: DataContent | URL): ArrayBuffer | string;
export declare function toModelMessageDataOrUrl(urlOrString: string | ArrayBuffer | URL | DataContent): URL | DataContent;
export declare function toUIFilePart(part: ImagePart | FilePart): FileUIPart;
//# sourceMappingURL=mapping.d.ts.map