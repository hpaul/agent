import type { FilePart, ImagePart, ReasoningPart, ToolCallPart, ToolResultPart, ToolApprovalRequest } from "@ai-sdk/provider-utils";
import type { ModelMessage, TextPart, UIDataTypes, UIMessagePart, UITools } from "ai";
import type { Message, MessageContentParts } from "./validators.js";
export declare const DEFAULT_RECENT_MESSAGES = 100;
/** Default input-token trigger for Anthropic compaction (documented minimum). */
export declare const DEFAULT_COMPACTION_TRIGGER_TOKENS = 50000;
/**
 * Recent-message window used when compaction is enabled but `recentMessages` is
 * left unset: large enough for the full history to reach the compaction trigger
 * and to retain the stored compaction summary on later turns.
 */
export declare const DEFAULT_COMPACTION_RECENT_MESSAGES = 1000;
export declare function isTool(message: Message | ModelMessage): boolean;
export declare function extractText(message: Message | ModelMessage): string | undefined;
export declare function joinText(parts: (UIMessagePart<UIDataTypes, UITools> | TextPart | ImagePart | FilePart | ReasoningPart | ToolCallPart | ToolResultPart | MessageContentParts | ToolApprovalRequest)[]): string;
export declare function extractReasoning(message: Message | ModelMessage): string | undefined;
export declare const DEFAULT_MESSAGE_RANGE: {
    before: number;
    after: number;
};
export declare function sorted<T extends {
    order: number;
    stepOrder: number;
}>(messages: T[], order?: "asc" | "desc"): T[];
export type ModelOrMetadata = string | ({
    provider: string;
} & ({
    modelId: string;
} | {
    model: string;
}));
export declare function getModelName(embeddingModel: ModelOrMetadata): string;
export declare function getProviderName(embeddingModel: ModelOrMetadata): string;
//# sourceMappingURL=shared.d.ts.map