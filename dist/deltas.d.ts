import { type UIMessageChunk } from "ai";
import { type UIMessage } from "./UIMessages.js";
import { type MessageStatus, type StreamDelta, type StreamMessage } from "./validators.js";
export declare function blankUIMessage<METADATA = unknown>(streamMessage: StreamMessage & {
    metadata?: METADATA;
}, threadId: string): UIMessage<METADATA>;
export declare function statusFromStreamStatus(status: StreamMessage["status"]): MessageStatus | "streaming";
export declare function updateFromUIMessageChunks(uiMessage: UIMessage, parts: UIMessageChunk[]): Promise<UIMessage>;
export type IncrementalStreamState = {
    activeText: Record<string, number>;
    activeReasoning: Record<string, number>;
    toolInputText: Record<string, string>;
};
export declare function emptyIncrementalStreamState(): IncrementalStreamState;
/**
 * Apply a batch of new UIMessageChunks to an existing UIMessage without
 * replaying prior chunks. `prev` carries the ephemeral stream state that the
 * UIMessage itself can't hold (which text/reasoning parts are still streaming,
 * and the raw accumulated tool input text). Parts are append-only, so part
 * indices stay stable across the structuredClone between batches. Behavior
 * mirrors the AI SDK's processUIMessageStream.
 */
export declare function applyUIMessageChunksIncremental(uiMessage: UIMessage, newParts: UIMessageChunk[], prev: IncrementalStreamState): {
    message: UIMessage;
    streamState: IncrementalStreamState;
};
export declare function deriveUIMessagesFromDeltas(threadId: string, streamMessages: StreamMessage[], allDeltas: StreamDelta[]): Promise<UIMessage[]>;
export declare function getParts<T extends StreamDelta["parts"][number]>(deltas: StreamDelta[], fromCursor?: number): {
    parts: T[];
    cursor: number;
};
//# sourceMappingURL=deltas.d.ts.map