import { type AsyncIterableStream, type ChunkDetector, type StreamTextTransform, type TextStreamPart, type ToolSet, type UIMessageChunk } from "ai";
import { type ProviderOptions, type StreamArgs, type StreamMessage } from "../validators.js";
import type { ActionCtx, AgentComponent, MutationCtx, QueryCtx, SyncStreamsReturnValue } from "./types.js";
export declare const vStreamMessagesReturnValue: import("convex/values").VObject<{
    streams?: {
        messages: {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            format?: "UIMessageChunk" | "TextStreamPart" | undefined;
            order: number;
            stepOrder: number;
            status: "aborted" | "streaming" | "finished";
            streamId: string;
        }[];
        kind: "list";
    } | {
        kind: "deltas";
        deltas: {
            streamId: string;
            start: number;
            end: number;
            parts: any[];
        }[];
    } | undefined;
    splitCursor?: string | null | undefined;
    pageStatus?: "SplitRecommended" | "SplitRequired" | null | undefined;
    isDone: boolean;
    page: {
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
    }[];
    continueCursor: string;
}, {
    streams: import("convex/values").VUnion<{
        messages: {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            format?: "UIMessageChunk" | "TextStreamPart" | undefined;
            order: number;
            stepOrder: number;
            status: "aborted" | "streaming" | "finished";
            streamId: string;
        }[];
        kind: "list";
    } | {
        kind: "deltas";
        deltas: {
            streamId: string;
            start: number;
            end: number;
            parts: any[];
        }[];
    } | undefined, [import("convex/values").VObject<{
        messages: {
            providerOptions?: Record<string, Record<string, any>> | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            format?: "UIMessageChunk" | "TextStreamPart" | undefined;
            order: number;
            stepOrder: number;
            status: "aborted" | "streaming" | "finished";
            streamId: string;
        }[];
        kind: "list";
    }, {
        kind: import("convex/values").VLiteral<"list", "required">;
        messages: import("convex/values").VArray<{
            providerOptions?: Record<string, Record<string, any>> | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            format?: "UIMessageChunk" | "TextStreamPart" | undefined;
            order: number;
            stepOrder: number;
            status: "aborted" | "streaming" | "finished";
            streamId: string;
        }[], import("convex/values").VObject<{
            providerOptions?: Record<string, Record<string, any>> | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            format?: "UIMessageChunk" | "TextStreamPart" | undefined;
            order: number;
            stepOrder: number;
            status: "aborted" | "streaming" | "finished";
            streamId: string;
        }, {
            streamId: import("convex/values").VString<string, "required">;
            status: import("convex/values").VUnion<"aborted" | "streaming" | "finished", [import("convex/values").VLiteral<"streaming", "required">, import("convex/values").VLiteral<"finished", "required">, import("convex/values").VLiteral<"aborted", "required">], "required", never>;
            format: import("convex/values").VUnion<"UIMessageChunk" | "TextStreamPart" | undefined, [import("convex/values").VLiteral<"UIMessageChunk", "required">, import("convex/values").VLiteral<"TextStreamPart", "required">], "optional", never>;
            order: import("convex/values").VFloat64<number, "required">;
            stepOrder: import("convex/values").VFloat64<number, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            agentName: import("convex/values").VString<string | undefined, "optional">;
            model: import("convex/values").VString<string | undefined, "optional">;
            provider: import("convex/values").VString<string | undefined, "optional">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "providerOptions" | `providerOptions.${string}` | "userId" | "agentName" | "order" | "stepOrder" | "status" | "model" | "provider" | "format" | "streamId">, "required">;
    }, "required", "messages" | "kind">, import("convex/values").VObject<{
        kind: "deltas";
        deltas: {
            streamId: string;
            start: number;
            end: number;
            parts: any[];
        }[];
    }, {
        kind: import("convex/values").VLiteral<"deltas", "required">;
        deltas: import("convex/values").VArray<{
            streamId: string;
            start: number;
            end: number;
            parts: any[];
        }[], import("convex/values").VObject<{
            streamId: string;
            start: number;
            end: number;
            parts: any[];
        }, {
            streamId: import("convex/values").VString<string, "required">;
            start: import("convex/values").VFloat64<number, "required">;
            end: import("convex/values").VFloat64<number, "required">;
            parts: import("convex/values").VArray<any[], import("convex/values").VAny<any, "required", string>, "required">;
        }, "required", "streamId" | "start" | "end" | "parts">, "required">;
    }, "required", "kind" | "deltas">], "optional", "messages" | "kind" | "deltas">;
    page: import("convex/values").VArray<{
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
    }[], import("convex/values").VObject<{
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
    }, {
        _id: import("convex/values").VString<string, "required">;
        _creationTime: import("convex/values").VFloat64<number, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string, "required">;
        order: import("convex/values").VFloat64<number, "required">;
        stepOrder: import("convex/values").VFloat64<number, "required">;
        embeddingId: import("convex/values").VString<string | undefined, "optional">;
        fileIds: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        error: import("convex/values").VString<string | undefined, "optional">;
        status: import("convex/values").VUnion<"pending" | "success" | "failed", [import("convex/values").VLiteral<"pending", "required">, import("convex/values").VLiteral<"success", "required">, import("convex/values").VLiteral<"failed", "required">], "required", never>;
        agentName: import("convex/values").VString<string | undefined, "optional">;
        model: import("convex/values").VString<string | undefined, "optional">;
        provider: import("convex/values").VString<string | undefined, "optional">;
        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        message: import("convex/values").VUnion<{
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
        } | undefined, [import("convex/values").VObject<{
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
        }, {
            role: import("convex/values").VLiteral<"user", "required">;
            content: import("convex/values").VUnion<string | ({
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
            })[], [import("convex/values").VString<string, "required">, import("convex/values").VArray<({
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
            })[], import("convex/values").VUnion<{
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
            }, [import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "text";
                text: string;
            }, {
                type: import("convex/values").VLiteral<"text", "required">;
                text: import("convex/values").VString<string, "required">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}`>, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                type: "image";
                image: string | ArrayBuffer;
            }, {
                type: import("convex/values").VLiteral<"image", "required">;
                image: import("convex/values").VUnion<string | ArrayBuffer, [import("convex/values").VString<string, "required">, import("convex/values").VBytes<ArrayBuffer, "required">], "required", never>;
                mediaType: import("convex/values").VString<string | undefined, "optional">;
                mimeType: import("convex/values").VString<string | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "image" | "mediaType" | "mimeType">, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                type: "file";
                data: string | ArrayBuffer;
            }, {
                type: import("convex/values").VLiteral<"file", "required">;
                data: import("convex/values").VUnion<string | ArrayBuffer, [import("convex/values").VString<string, "required">, import("convex/values").VBytes<ArrayBuffer, "required">], "required", never>;
                filename: import("convex/values").VString<string | undefined, "optional">;
                mediaType: import("convex/values").VString<string | undefined, "optional">;
                mimeType: import("convex/values").VString<string | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "mimeType" | "data" | "filename">], "required", "type" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "image" | "mediaType" | "mimeType" | "data" | "filename">, "required">], "required", never>;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "role" | "providerOptions" | `providerOptions.${string}` | "content">, import("convex/values").VObject<{
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
        }, {
            role: import("convex/values").VLiteral<"assistant", "required">;
            content: import("convex/values").VUnion<string | ({
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
            })[], [import("convex/values").VString<string, "required">, import("convex/values").VArray<({
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
            })[], import("convex/values").VUnion<{
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
            }, [import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "text";
                text: string;
            }, {
                type: import("convex/values").VLiteral<"text", "required">;
                text: import("convex/values").VString<string, "required">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}`>, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                type: "file";
                data: string | ArrayBuffer;
            }, {
                type: import("convex/values").VLiteral<"file", "required">;
                data: import("convex/values").VUnion<string | ArrayBuffer, [import("convex/values").VString<string, "required">, import("convex/values").VBytes<ArrayBuffer, "required">], "required", never>;
                filename: import("convex/values").VString<string | undefined, "optional">;
                mediaType: import("convex/values").VString<string | undefined, "optional">;
                mimeType: import("convex/values").VString<string | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "mimeType" | "data" | "filename">, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                signature?: string | undefined;
                type: "reasoning";
                text: string;
            }, {
                type: import("convex/values").VLiteral<"reasoning", "required">;
                text: import("convex/values").VString<string, "required">;
                signature: import("convex/values").VString<string | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "signature">, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "redacted-reasoning";
                data: string;
            }, {
                type: import("convex/values").VLiteral<"redacted-reasoning", "required">;
                data: import("convex/values").VString<string, "required">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "data">, import("convex/values").VUnion<{
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
            }, [import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                args?: any;
                providerExecuted?: boolean | undefined;
                type: "tool-call";
                toolCallId: string;
                toolName: string;
                input: any;
            }, {
                type: import("convex/values").VLiteral<"tool-call", "required">;
                toolCallId: import("convex/values").VString<string, "required">;
                toolName: import("convex/values").VString<string, "required">;
                input: import("convex/values").VAny<any, "required", string>;
                args: import("convex/values").VAny<any, "optional", string>;
                providerExecuted: import("convex/values").VBoolean<boolean | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "toolName" | "input" | "args" | "providerExecuted" | `input.${string}` | `args.${string}`>, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                input?: any;
                providerExecuted?: boolean | undefined;
                type: "tool-call";
                toolCallId: string;
                toolName: string;
                args: any;
            }, {
                type: import("convex/values").VLiteral<"tool-call", "required">;
                toolCallId: import("convex/values").VString<string, "required">;
                toolName: import("convex/values").VString<string, "required">;
                args: import("convex/values").VAny<any, "required", string>;
                input: import("convex/values").VAny<any, "optional", string>;
                providerExecuted: import("convex/values").VBoolean<boolean | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "toolName" | "input" | "args" | "providerExecuted" | `input.${string}` | `args.${string}`>], "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "toolName" | "input" | "args" | "providerExecuted" | `input.${string}` | `args.${string}`>, import("convex/values").VObject<{
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
            }, {
                type: import("convex/values").VLiteral<"tool-result", "required">;
                toolCallId: import("convex/values").VString<string, "required">;
                toolName: import("convex/values").VString<string, "required">;
                output: import("convex/values").VUnion<{
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
                } | undefined, [import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    value: string;
                }, {
                    type: import("convex/values").VLiteral<"text", "required">;
                    value: import("convex/values").VString<string, "required">;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value">, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "json";
                    value: any;
                }, {
                    type: import("convex/values").VLiteral<"json", "required">;
                    value: import("convex/values").VAny<any, "required", string>;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value" | `value.${string}`>, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-text";
                    value: string;
                }, {
                    type: import("convex/values").VLiteral<"error-text", "required">;
                    value: import("convex/values").VString<string, "required">;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value">, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-json";
                    value: any;
                }, {
                    type: import("convex/values").VLiteral<"error-json", "required">;
                    value: import("convex/values").VAny<any, "required", string>;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value" | `value.${string}`>, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    reason?: string | undefined;
                    type: "execution-denied";
                }, {
                    type: import("convex/values").VLiteral<"execution-denied", "required">;
                    reason: import("convex/values").VString<string | undefined, "optional">;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "reason">, import("convex/values").VObject<{
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
                }, {
                    type: import("convex/values").VLiteral<"content", "required">;
                    value: import("convex/values").VArray<({
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
                    })[], import("convex/values").VUnion<{
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
                    }, [import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        text: string;
                    }, {
                        type: import("convex/values").VLiteral<"text", "required">;
                        text: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "text" | "providerOptions" | `providerOptions.${string}`>, import("convex/values").VObject<{
                        type: "media";
                        mediaType: string;
                        data: string;
                    }, {
                        type: import("convex/values").VLiteral<"media", "required">;
                        data: import("convex/values").VString<string, "required">;
                        mediaType: import("convex/values").VString<string, "required">;
                    }, "required", "type" | "mediaType" | "data">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        filename?: string | undefined;
                        type: "file-data";
                        mediaType: string;
                        data: string;
                    }, {
                        type: import("convex/values").VLiteral<"file-data", "required">;
                        data: import("convex/values").VString<string, "required">;
                        mediaType: import("convex/values").VString<string, "required">;
                        filename: import("convex/values").VString<string | undefined, "optional">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "mediaType" | "data" | "filename">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-url";
                        url: string;
                    }, {
                        type: import("convex/values").VLiteral<"file-url", "required">;
                        url: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "url">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-id";
                        fileId: string | Record<string, string>;
                    }, {
                        type: import("convex/values").VLiteral<"file-id", "required">;
                        fileId: import("convex/values").VUnion<string | Record<string, string>, [import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, string>, import("convex/values").VString<string, "required">, import("convex/values").VString<string, "required">, "required", string>], "required", string>;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "fileId" | `fileId.${string}`>, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-data";
                        mediaType: string;
                        data: string;
                    }, {
                        type: import("convex/values").VLiteral<"image-data", "required">;
                        data: import("convex/values").VString<string, "required">;
                        mediaType: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "mediaType" | "data">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-url";
                        url: string;
                    }, {
                        type: import("convex/values").VLiteral<"image-url", "required">;
                        url: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "url">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-file-id";
                        fileId: string | Record<string, string>;
                    }, {
                        type: import("convex/values").VLiteral<"image-file-id", "required">;
                        fileId: import("convex/values").VUnion<string | Record<string, string>, [import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, string>, import("convex/values").VString<string, "required">, import("convex/values").VString<string, "required">, "required", string>], "required", string>;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "fileId" | `fileId.${string}`>, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "custom";
                    }, {
                        type: import("convex/values").VLiteral<"custom", "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}`>], "required", "type" | "text" | "providerOptions" | `providerOptions.${string}` | "mediaType" | "data" | "filename" | "url" | "fileId" | `fileId.${string}`>, "required">;
                }, "required", "type" | "value">], "optional", "type" | "providerOptions" | `providerOptions.${string}` | "value" | `value.${string}` | "reason">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerExecuted: import("convex/values").VBoolean<boolean | undefined, "optional">;
                result: import("convex/values").VAny<any, "optional", string>;
                isError: import("convex/values").VBoolean<boolean | undefined, "optional">;
                args: import("convex/values").VAny<any, "optional", string>;
                experimental_content: import("convex/values").VArray<({
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                })[] | undefined, import("convex/values").VUnion<{
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                }, [import("convex/values").VObject<{
                    type: "text";
                    text: string;
                }, {
                    type: import("convex/values").VLiteral<"text", "required">;
                    text: import("convex/values").VString<string, "required">;
                }, "required", "type" | "text">, import("convex/values").VObject<{
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                }, {
                    type: import("convex/values").VLiteral<"image", "required">;
                    data: import("convex/values").VString<string, "required">;
                    mimeType: import("convex/values").VString<string | undefined, "optional">;
                }, "required", "type" | "mimeType" | "data">], "required", "type" | "text" | "mimeType" | "data">, "optional">;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "toolName" | "args" | "providerExecuted" | `args.${string}` | "output" | "result" | "isError" | "experimental_content" | "output.type" | "output.providerOptions" | `output.providerOptions.${string}` | "output.value" | `output.value.${string}` | "output.reason" | `result.${string}`>, import("convex/values").VUnion<{
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
            }, [import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                title?: string | undefined;
                type: "source";
                id: string;
                url: string;
                sourceType: "url";
            }, {
                type: import("convex/values").VLiteral<"source", "required">;
                sourceType: import("convex/values").VLiteral<"url", "required">;
                id: import("convex/values").VString<string, "required">;
                url: import("convex/values").VString<string, "required">;
                title: import("convex/values").VString<string | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "id" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "url" | "sourceType" | "title">, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                filename?: string | undefined;
                type: "source";
                id: string;
                mediaType: string;
                sourceType: "document";
                title: string;
            }, {
                type: import("convex/values").VLiteral<"source", "required">;
                sourceType: import("convex/values").VLiteral<"document", "required">;
                id: import("convex/values").VString<string, "required">;
                mediaType: import("convex/values").VString<string, "required">;
                title: import("convex/values").VString<string, "required">;
                filename: import("convex/values").VString<string | undefined, "optional">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "id" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "filename" | "sourceType" | "title">], "required", "type" | "id" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "filename" | "url" | "sourceType" | "title">, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                type: "tool-approval-request";
                toolCallId: string;
                approvalId: string;
            }, {
                type: import("convex/values").VLiteral<"tool-approval-request", "required">;
                approvalId: import("convex/values").VString<string, "required">;
                toolCallId: import("convex/values").VString<string, "required">;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "approvalId">], "required", "type" | "id" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "mimeType" | "data" | "filename" | "signature" | "toolCallId" | "toolName" | "input" | "args" | "providerExecuted" | `input.${string}` | `args.${string}` | "output" | "url" | "result" | "isError" | "experimental_content" | "output.type" | "output.providerOptions" | `output.providerOptions.${string}` | "output.value" | `output.value.${string}` | "output.reason" | `result.${string}` | "sourceType" | "title" | "approvalId">, "required">], "required", never>;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "role" | "providerOptions" | `providerOptions.${string}` | "content">, import("convex/values").VObject<{
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
        }, {
            role: import("convex/values").VLiteral<"tool", "required">;
            content: import("convex/values").VArray<({
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
            })[], import("convex/values").VUnion<{
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
            }, [import("convex/values").VObject<{
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
            }, {
                type: import("convex/values").VLiteral<"tool-result", "required">;
                toolCallId: import("convex/values").VString<string, "required">;
                toolName: import("convex/values").VString<string, "required">;
                output: import("convex/values").VUnion<{
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
                } | undefined, [import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "text";
                    value: string;
                }, {
                    type: import("convex/values").VLiteral<"text", "required">;
                    value: import("convex/values").VString<string, "required">;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value">, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "json";
                    value: any;
                }, {
                    type: import("convex/values").VLiteral<"json", "required">;
                    value: import("convex/values").VAny<any, "required", string>;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value" | `value.${string}`>, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-text";
                    value: string;
                }, {
                    type: import("convex/values").VLiteral<"error-text", "required">;
                    value: import("convex/values").VString<string, "required">;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value">, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    type: "error-json";
                    value: any;
                }, {
                    type: import("convex/values").VLiteral<"error-json", "required">;
                    value: import("convex/values").VAny<any, "required", string>;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "value" | `value.${string}`>, import("convex/values").VObject<{
                    providerOptions?: Record<string, Record<string, any>> | undefined;
                    reason?: string | undefined;
                    type: "execution-denied";
                }, {
                    type: import("convex/values").VLiteral<"execution-denied", "required">;
                    reason: import("convex/values").VString<string | undefined, "optional">;
                    providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "reason">, import("convex/values").VObject<{
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
                }, {
                    type: import("convex/values").VLiteral<"content", "required">;
                    value: import("convex/values").VArray<({
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
                    })[], import("convex/values").VUnion<{
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
                    }, [import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "text";
                        text: string;
                    }, {
                        type: import("convex/values").VLiteral<"text", "required">;
                        text: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "text" | "providerOptions" | `providerOptions.${string}`>, import("convex/values").VObject<{
                        type: "media";
                        mediaType: string;
                        data: string;
                    }, {
                        type: import("convex/values").VLiteral<"media", "required">;
                        data: import("convex/values").VString<string, "required">;
                        mediaType: import("convex/values").VString<string, "required">;
                    }, "required", "type" | "mediaType" | "data">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        filename?: string | undefined;
                        type: "file-data";
                        mediaType: string;
                        data: string;
                    }, {
                        type: import("convex/values").VLiteral<"file-data", "required">;
                        data: import("convex/values").VString<string, "required">;
                        mediaType: import("convex/values").VString<string, "required">;
                        filename: import("convex/values").VString<string | undefined, "optional">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "mediaType" | "data" | "filename">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-url";
                        url: string;
                    }, {
                        type: import("convex/values").VLiteral<"file-url", "required">;
                        url: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "url">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "file-id";
                        fileId: string | Record<string, string>;
                    }, {
                        type: import("convex/values").VLiteral<"file-id", "required">;
                        fileId: import("convex/values").VUnion<string | Record<string, string>, [import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, string>, import("convex/values").VString<string, "required">, import("convex/values").VString<string, "required">, "required", string>], "required", string>;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "fileId" | `fileId.${string}`>, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-data";
                        mediaType: string;
                        data: string;
                    }, {
                        type: import("convex/values").VLiteral<"image-data", "required">;
                        data: import("convex/values").VString<string, "required">;
                        mediaType: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "mediaType" | "data">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-url";
                        url: string;
                    }, {
                        type: import("convex/values").VLiteral<"image-url", "required">;
                        url: import("convex/values").VString<string, "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "url">, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "image-file-id";
                        fileId: string | Record<string, string>;
                    }, {
                        type: import("convex/values").VLiteral<"image-file-id", "required">;
                        fileId: import("convex/values").VUnion<string | Record<string, string>, [import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, string>, import("convex/values").VString<string, "required">, import("convex/values").VString<string, "required">, "required", string>], "required", string>;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}` | "fileId" | `fileId.${string}`>, import("convex/values").VObject<{
                        providerOptions?: Record<string, Record<string, any>> | undefined;
                        type: "custom";
                    }, {
                        type: import("convex/values").VLiteral<"custom", "required">;
                        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                    }, "required", "type" | "providerOptions" | `providerOptions.${string}`>], "required", "type" | "text" | "providerOptions" | `providerOptions.${string}` | "mediaType" | "data" | "filename" | "url" | "fileId" | `fileId.${string}`>, "required">;
                }, "required", "type" | "value">], "optional", "type" | "providerOptions" | `providerOptions.${string}` | "value" | `value.${string}` | "reason">;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerExecuted: import("convex/values").VBoolean<boolean | undefined, "optional">;
                result: import("convex/values").VAny<any, "optional", string>;
                isError: import("convex/values").VBoolean<boolean | undefined, "optional">;
                args: import("convex/values").VAny<any, "optional", string>;
                experimental_content: import("convex/values").VArray<({
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                })[] | undefined, import("convex/values").VUnion<{
                    type: "text";
                    text: string;
                } | {
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                }, [import("convex/values").VObject<{
                    type: "text";
                    text: string;
                }, {
                    type: import("convex/values").VLiteral<"text", "required">;
                    text: import("convex/values").VString<string, "required">;
                }, "required", "type" | "text">, import("convex/values").VObject<{
                    mimeType?: string | undefined;
                    type: "image";
                    data: string;
                }, {
                    type: import("convex/values").VLiteral<"image", "required">;
                    data: import("convex/values").VString<string, "required">;
                    mimeType: import("convex/values").VString<string | undefined, "optional">;
                }, "required", "type" | "mimeType" | "data">], "required", "type" | "text" | "mimeType" | "data">, "optional">;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "toolName" | "args" | "providerExecuted" | `args.${string}` | "output" | "result" | "isError" | "experimental_content" | "output.type" | "output.providerOptions" | `output.providerOptions.${string}` | "output.value" | `output.value.${string}` | "output.reason" | `result.${string}`>, import("convex/values").VObject<{
                providerOptions?: Record<string, Record<string, any>> | undefined;
                providerMetadata?: Record<string, Record<string, any>> | undefined;
                providerExecuted?: boolean | undefined;
                reason?: string | undefined;
                type: "tool-approval-response";
                approvalId: string;
                approved: boolean;
            }, {
                type: import("convex/values").VLiteral<"tool-approval-response", "required">;
                approvalId: import("convex/values").VString<string, "required">;
                approved: import("convex/values").VBoolean<boolean, "required">;
                reason: import("convex/values").VString<string | undefined, "optional">;
                providerExecuted: import("convex/values").VBoolean<boolean | undefined, "optional">;
                providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
                providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            }, "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "providerExecuted" | "reason" | "approvalId" | "approved">], "required", "type" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "toolCallId" | "toolName" | "args" | "providerExecuted" | `args.${string}` | "output" | "reason" | "result" | "isError" | "experimental_content" | "output.type" | "output.providerOptions" | `output.providerOptions.${string}` | "output.value" | `output.value.${string}` | "output.reason" | `result.${string}` | "approvalId" | "approved">, "required">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "role" | "providerOptions" | `providerOptions.${string}` | "content">, import("convex/values").VObject<{
            providerOptions?: Record<string, Record<string, any>> | undefined;
            role: "system";
            content: string;
        }, {
            role: import("convex/values").VLiteral<"system", "required">;
            content: import("convex/values").VString<string, "required">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "role" | "providerOptions" | `providerOptions.${string}` | "content">], "optional", "role" | "providerOptions" | `providerOptions.${string}` | "content">;
        tool: import("convex/values").VBoolean<boolean, "required">;
        text: import("convex/values").VString<string | undefined, "optional">;
        usage: import("convex/values").VObject<{
            reasoningTokens?: number | undefined;
            cachedInputTokens?: number | undefined;
            promptTokens: number;
            completionTokens: number;
            totalTokens: number;
        } | undefined, {
            promptTokens: import("convex/values").VFloat64<number, "required">;
            completionTokens: import("convex/values").VFloat64<number, "required">;
            totalTokens: import("convex/values").VFloat64<number, "required">;
            reasoningTokens: import("convex/values").VFloat64<number | undefined, "optional">;
            cachedInputTokens: import("convex/values").VFloat64<number | undefined, "optional">;
        }, "optional", "promptTokens" | "completionTokens" | "totalTokens" | "reasoningTokens" | "cachedInputTokens">;
        providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        sources: import("convex/values").VArray<({
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
        })[] | undefined, import("convex/values").VUnion<{
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
        }, [import("convex/values").VObject<{
            type?: "source" | undefined;
            providerOptions?: Record<string, Record<string, any>> | undefined;
            providerMetadata?: Record<string, Record<string, any>> | undefined;
            title?: string | undefined;
            id: string;
            url: string;
            sourceType: "url";
        }, {
            type: import("convex/values").VLiteral<"source" | undefined, "optional">;
            sourceType: import("convex/values").VLiteral<"url", "required">;
            id: import("convex/values").VString<string, "required">;
            url: import("convex/values").VString<string, "required">;
            title: import("convex/values").VString<string | undefined, "optional">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "type" | "id" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "url" | "sourceType" | "title">, import("convex/values").VObject<{
            providerOptions?: Record<string, Record<string, any>> | undefined;
            providerMetadata?: Record<string, Record<string, any>> | undefined;
            filename?: string | undefined;
            type: "source";
            id: string;
            mediaType: string;
            sourceType: "document";
            title: string;
        }, {
            type: import("convex/values").VLiteral<"source", "required">;
            sourceType: import("convex/values").VLiteral<"document", "required">;
            id: import("convex/values").VString<string, "required">;
            mediaType: import("convex/values").VString<string, "required">;
            title: import("convex/values").VString<string, "required">;
            filename: import("convex/values").VString<string | undefined, "optional">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "type" | "id" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "filename" | "sourceType" | "title">], "required", "type" | "id" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "mediaType" | "filename" | "url" | "sourceType" | "title">, "optional">;
        warnings: import("convex/values").VArray<({
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
        })[] | undefined, import("convex/values").VUnion<{
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
        }, [import("convex/values").VObject<{
            details?: string | undefined;
            type: "unsupported-setting";
            setting: string;
        }, {
            type: import("convex/values").VLiteral<"unsupported-setting", "required">;
            setting: import("convex/values").VString<string, "required">;
            details: import("convex/values").VString<string | undefined, "optional">;
        }, "required", "type" | "setting" | "details">, import("convex/values").VObject<{
            details?: string | undefined;
            type: "unsupported-tool";
            tool: any;
        }, {
            type: import("convex/values").VLiteral<"unsupported-tool", "required">;
            tool: import("convex/values").VAny<any, "required", string>;
            details: import("convex/values").VString<string | undefined, "optional">;
        }, "required", "type" | "tool" | "details" | `tool.${string}`>, import("convex/values").VObject<{
            type: "other";
            message: string;
        }, {
            type: import("convex/values").VLiteral<"other", "required">;
            message: import("convex/values").VString<string, "required">;
        }, "required", "type" | "message">], "required", "type" | "tool" | "message" | "setting" | "details" | `tool.${string}`>, "optional">;
        finishReason: import("convex/values").VUnion<"length" | "error" | "other" | "stop" | "content-filter" | "tool-calls" | "unknown" | undefined, [import("convex/values").VLiteral<"stop", "required">, import("convex/values").VLiteral<"length", "required">, import("convex/values").VLiteral<"content-filter", "required">, import("convex/values").VLiteral<"tool-calls", "required">, import("convex/values").VLiteral<"error", "required">, import("convex/values").VLiteral<"other", "required">, import("convex/values").VLiteral<"unknown", "required">], "optional", never>;
        reasoning: import("convex/values").VString<string | undefined, "optional">;
        reasoningDetails: import("convex/values").VArray<({
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
        })[] | undefined, import("convex/values").VUnion<{
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
        }, [import("convex/values").VObject<{
            providerOptions?: Record<string, Record<string, any>> | undefined;
            providerMetadata?: Record<string, Record<string, any>> | undefined;
            signature?: string | undefined;
            type: "reasoning";
            text: string;
        }, {
            type: import("convex/values").VLiteral<"reasoning", "required">;
            text: import("convex/values").VString<string, "required">;
            signature: import("convex/values").VString<string | undefined, "optional">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            providerMetadata: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        }, "required", "type" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "signature">, import("convex/values").VObject<{
            signature?: string | undefined;
            type: "text";
            text: string;
        }, {
            type: import("convex/values").VLiteral<"text", "required">;
            text: import("convex/values").VString<string, "required">;
            signature: import("convex/values").VString<string | undefined, "optional">;
        }, "required", "type" | "text" | "signature">, import("convex/values").VObject<{
            type: "redacted";
            data: string;
        }, {
            type: import("convex/values").VLiteral<"redacted", "required">;
            data: import("convex/values").VString<string, "required">;
        }, "required", "type" | "data">], "required", "type" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "data" | "signature">, "optional">;
        id: import("convex/values").VString<string | undefined, "optional">;
    }, "required", "id" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "reasoning" | "tool" | "threadId" | "userId" | "agentName" | "_id" | "_creationTime" | "order" | "stepOrder" | "embeddingId" | "fileIds" | "error" | "status" | "model" | "provider" | "message" | "usage" | "sources" | "warnings" | "finishReason" | "reasoningDetails" | "message.role" | "message.providerOptions" | `message.providerOptions.${string}` | "message.content" | "usage.promptTokens" | "usage.completionTokens" | "usage.totalTokens" | "usage.reasoningTokens" | "usage.cachedInputTokens">, "required">;
    continueCursor: import("convex/values").VString<string, "required">;
    isDone: import("convex/values").VBoolean<boolean, "required">;
    splitCursor: import("convex/values").VUnion<string | null | undefined, [import("convex/values").VString<string, "required">, import("convex/values").VNull<null, "required">], "optional", never>;
    pageStatus: import("convex/values").VUnion<"SplitRecommended" | "SplitRequired" | null | undefined, [import("convex/values").VLiteral<"SplitRecommended", "required">, import("convex/values").VLiteral<"SplitRequired", "required">, import("convex/values").VNull<null, "required">], "optional", never>;
}, "required", "streams" | "isDone" | "page" | "continueCursor" | "splitCursor" | "pageStatus" | "streams.messages" | "streams.kind" | "streams.deltas">;
/**
 * A function that handles fetching stream deltas, used with the React hooks
 * `useThreadMessages` or `useStreamingThreadMessages`.
 * @param ctx A ctx object from a query, mutation, or action.
 * @param component The agent component, usually `components.agent`.
 * @param args.threadId The thread to sync streams for.
 * @param args.streamArgs The stream arguments with per-stream cursors.
 * @returns The deltas for each stream from their existing cursor.
 */
export declare function syncStreams(ctx: QueryCtx | MutationCtx | ActionCtx, component: AgentComponent, { threadId, streamArgs, includeStatuses, }: {
    threadId: string;
    streamArgs?: StreamArgs | undefined;
    includeStatuses?: ("streaming" | "finished" | "aborted")[];
}): Promise<SyncStreamsReturnValue | undefined>;
export declare function abortStream(ctx: MutationCtx | ActionCtx, component: AgentComponent, args: {
    reason: string;
} & ({
    streamId: string;
} | {
    threadId: string;
    order: number;
})): Promise<boolean>;
/**
 * List the streaming messages for a thread.
 * @param ctx A ctx object from a query, mutation, or action.
 * @param component The agent component, usually `components.agent`.
 * @param args.threadId The thread to list streams for.
 * @param args.startOrder The order of the messages in the thread to start listing from.
 * @param args.includeStatuses The statuses to include in the list.
 * @returns The streams for the thread.
 */
export declare function listStreams(ctx: QueryCtx | MutationCtx | ActionCtx, component: AgentComponent, { threadId, startOrder, includeStatuses, }: {
    threadId: string;
    startOrder?: number;
    includeStatuses?: ("streaming" | "finished" | "aborted")[];
}): Promise<StreamMessage[]>;
export type StreamingOptions = {
    /**
     * The minimum granularity of deltas to save.
     * Note: this is not a guarantee that every delta will be exactly one line.
     * E.g. if "line" is specified, it won't save any deltas until it encounters
     * a newline character.
     * Defaults to a regex that chunks by punctuation followed by whitespace.
     */
    chunking?: "word" | "line" | RegExp | ChunkDetector;
    /**
     * The minimum number of milliseconds to wait between saving deltas.
     * Defaults to 250.
     */
    throttleMs?: number;
    /**
     * If set to true, this will return immediately, as it would if you weren't
     * saving the deltas. Otherwise, the call will "consume" the stream with
     * .consumeStream(), which waits for the stream to finish before returning.
     *
     * When saving deltas, you're often not interactin with the stream otherwise.
     */
    returnImmediately?: boolean;
};
export declare const DEFAULT_STREAMING_OPTIONS: {
    chunking: RegExp;
    throttleMs: number;
    returnImmediately: false;
};
/**
 *
 * @param options The options passed to `agent.streamText` to decide whether to
 * save deltas while streaming.
 * @param existing The transforms passed to `agent.streamText` to merge with.
 * @returns The merged transforms to pass to the underlying `streamText` call.
 */
export declare function mergeTransforms<TOOLS extends ToolSet>(options: {
    chunking?: StreamingOptions["chunking"];
} | boolean | undefined, existing: StreamTextTransform<TOOLS> | Array<StreamTextTransform<TOOLS>> | undefined): StreamTextTransform<TOOLS> | StreamTextTransform<TOOLS>[] | undefined;
/**
 * DeltaStreamer can be used to save a stream of "parts" by writing
 * batches of them in "deltas" to the database so clients can subscribe
 * (using the syncStreams utility and client hooks) and re-hydrate the stream.
 * You can optionally compress the parts, e.g. concatenating text deltas, to
 * optimize the data in transit.
 */
export declare class DeltaStreamer<T> {
    #private;
    readonly component: AgentComponent;
    readonly ctx: MutationCtx | ActionCtx;
    readonly metadata: {
        threadId: string;
        userId?: string;
        order: number;
        stepOrder: number;
        agentName?: string;
        model?: string;
        provider?: string;
        providerOptions?: ProviderOptions;
        format: "UIMessageChunk" | "TextStreamPart" | undefined;
    };
    streamId: string | undefined;
    readonly config: {
        throttleMs: number;
        onAsyncAbort: (reason: string) => Promise<void>;
        compress: ((parts: T[]) => T[]) | null;
    };
    abortController: AbortController;
    constructor(component: AgentComponent, ctx: MutationCtx | ActionCtx, config: {
        throttleMs: number | undefined;
        onAsyncAbort: (reason: string) => Promise<void>;
        abortSignal: AbortSignal | undefined;
        compress: ((parts: T[]) => T[]) | null;
    }, metadata: {
        threadId: string;
        userId?: string;
        order: number;
        stepOrder: number;
        agentName?: string;
        model?: string;
        provider?: string;
        providerOptions?: ProviderOptions;
        format: "UIMessageChunk" | "TextStreamPart" | undefined;
    });
    getStreamId(): Promise<string>;
    addParts(parts: T[]): Promise<void>;
    consumeStream(stream: AsyncIterableStream<T>): Promise<void>;
    /**
     * Mark the stream as being finished externally (e.g., atomically via addMessages).
     * When called, consumeStream() will skip calling finish() since it will be
     * handled elsewhere in the same mutation as message saving.
     */
    markFinishedExternally(): void;
    /**
     * Get the stream ID, waiting for it to be created if necessary.
     * Useful for passing to addMessages for atomic finish.
     */
    getOrCreateStreamId(): Promise<string>;
    finish(): Promise<void>;
    fail(reason: string): Promise<void>;
}
/**
 * Compressing parts when streaming to save bandwidth in deltas.
 */
export declare function compressUIMessageChunks(parts: UIMessageChunk[]): UIMessageChunk[];
export declare function compressTextStreamParts(parts: TextStreamPart<ToolSet>[]): TextStreamPart<ToolSet>[];
//# sourceMappingURL=streaming.d.ts.map