import type { Doc, Id } from "./_generated/dataModel.js";
import { type MutationCtx, type QueryCtx } from "./_generated/server.js";
export declare function deleteMessage(ctx: MutationCtx, messageDoc: Doc<"messages">): Promise<void>;
export declare const deleteByIds: import("convex/server").RegisteredMutation<"public", {
    messageIds: import("convex/values").GenericId<"messages">[];
}, Promise<import("convex/values").GenericId<"messages">[]>>;
export declare const messageStatuses: ("pending" | "success" | "failed")[];
export declare const deleteByOrder: import("convex/server").RegisteredMutation<"public", {
    startStepOrder?: number | undefined;
    endStepOrder?: number | undefined;
    threadId: import("convex/values").GenericId<"threads">;
    startOrder: number;
    endOrder: number;
}, Promise<{
    isDone: boolean;
    lastOrder?: number;
    lastStepOrder?: number;
}>>;
export declare const addMessages: import("convex/server").RegisteredMutation<"public", {
    userId?: string | undefined;
    agentName?: string | undefined;
    promptMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    embeddings?: {
        model: string;
        dimension: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
        vectors: (number[] | null)[];
    } | undefined;
    failPendingSteps?: boolean | undefined;
    pendingMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    hideFromUserIdSearch?: boolean | undefined;
    finishStreamId?: import("convex/values").GenericId<"streamingMessages"> | undefined;
    threadId: import("convex/values").GenericId<"threads">;
    messages: {
        text?: string | undefined;
        providerMetadata?: Record<string, Record<string, any>> | undefined;
        reasoning?: string | undefined;
        fileIds?: import("convex/values").GenericId<"files">[] | undefined;
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
    messages: {
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
}>>;
export declare function getMaxMessage(ctx: QueryCtx, threadId: Id<"threads">, order?: number): Promise<{
    _id: import("convex/values").GenericId<"messages">;
    _creationTime: number;
    id?: string | undefined;
    text?: string | undefined;
    providerOptions?: Record<string, Record<string, any>> | undefined;
    providerMetadata?: Record<string, Record<string, any>> | undefined;
    reasoning?: string | undefined;
    userId?: string | undefined;
    agentName?: string | undefined;
    embeddingId?: import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined;
    fileIds?: import("convex/values").GenericId<"files">[] | undefined;
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
    files?: any[] | undefined;
    parentMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    stepId?: string | undefined;
    tool: boolean;
    threadId: import("convex/values").GenericId<"threads">;
    order: number;
    stepOrder: number;
    status: "pending" | "success" | "failed";
} | null>;
export declare const finalizeMessage: import("convex/server").RegisteredMutation<"public", {
    result: {
        status: "success";
    } | {
        error: string;
        status: "failed";
    };
    messageId: import("convex/values").GenericId<"messages">;
}, Promise<void>>;
export declare const updateMessage: import("convex/server").RegisteredMutation<"public", {
    messageId: import("convex/values").GenericId<"messages">;
    patch: {
        providerOptions?: Record<string, Record<string, any>> | undefined;
        fileIds?: import("convex/values").GenericId<"files">[] | undefined;
        error?: string | undefined;
        status?: "pending" | "success" | "failed" | undefined;
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
        finishReason?: "length" | "error" | "other" | "stop" | "content-filter" | "tool-calls" | "unknown" | undefined;
    };
}, Promise<{
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
}>>;
export declare const cloneMessageBatch: import("convex/server").RegisteredMutation<"internal", {
    statuses?: ("pending" | "success" | "failed")[] | undefined;
    copyUserIdForVectorSearch?: boolean | undefined;
    excludeToolMessages?: boolean | undefined;
    upToAndIncludingMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    insertAtOrder?: number | undefined;
    paginationOpts: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    };
    sourceThreadId: import("convex/values").GenericId<"threads">;
    targetThreadId: import("convex/values").GenericId<"threads">;
}, Promise<{
    numCopied: number;
    continueCursor: string;
    isDone: boolean;
}>>;
export declare const cloneThread: import("convex/server").RegisteredAction<"public", {
    statuses?: ("pending" | "success" | "failed")[] | undefined;
    copyUserIdForVectorSearch?: boolean | undefined;
    excludeToolMessages?: boolean | undefined;
    upToAndIncludingMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    insertAtOrder?: number | undefined;
    batchSize?: number | undefined;
    limit?: number | undefined;
    sourceThreadId: import("convex/values").GenericId<"threads">;
    targetThreadId: import("convex/values").GenericId<"threads">;
}, Promise<number>>;
export declare const listMessagesByThreadIdArgs: {
    threadId: import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">;
    excludeToolMessages: import("convex/values").VBoolean<boolean | undefined, "optional">;
    /** What order to sort the messages in. To get the latest, use "desc". */
    order: import("convex/values").VUnion<"asc" | "desc", [import("convex/values").VLiteral<"asc", "required">, import("convex/values").VLiteral<"desc", "required">], "required", never>;
    paginationOpts: import("convex/values").VObject<{
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    } | undefined, {
        numItems: import("convex/values").VFloat64<number, "required">;
        cursor: import("convex/values").VUnion<string | null, [import("convex/values").VString<string, "required">, import("convex/values").VNull<null, "required">], "required", never>;
        endCursor: import("convex/values").VUnion<string | null | undefined, [import("convex/values").VString<string, "required">, import("convex/values").VNull<null, "required">], "optional", never>;
        id: import("convex/values").VFloat64<number | undefined, "optional">;
        maximumRowsRead: import("convex/values").VFloat64<number | undefined, "optional">;
        maximumBytesRead: import("convex/values").VFloat64<number | undefined, "optional">;
    }, "optional", "id" | "cursor" | "numItems" | "endCursor" | "maximumRowsRead" | "maximumBytesRead">;
    statuses: import("convex/values").VArray<("pending" | "success" | "failed")[] | undefined, import("convex/values").VUnion<"pending" | "success" | "failed", [import("convex/values").VLiteral<"pending", "required">, import("convex/values").VLiteral<"success", "required">, import("convex/values").VLiteral<"failed", "required">], "required", never>, "optional">;
    upToAndIncludingMessageId: import("convex/values").VId<import("convex/values").GenericId<"messages"> | undefined, "optional">;
};
export declare const listMessagesByThreadId: import("convex/server").RegisteredQuery<"public", {
    statuses?: ("pending" | "success" | "failed")[] | undefined;
    paginationOpts?: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    } | undefined;
    excludeToolMessages?: boolean | undefined;
    upToAndIncludingMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    threadId: import("convex/values").GenericId<"threads">;
    order: "asc" | "desc";
}, Promise<{
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
    isDone: boolean;
    continueCursor: import("convex/server").Cursor;
    splitCursor?: import("convex/server").Cursor | null;
    pageStatus?: "SplitRecommended" | "SplitRequired" | null;
}>>;
export declare const getMessagesByIds: import("convex/server").RegisteredQuery<"public", {
    messageIds: import("convex/values").GenericId<"messages">[];
}, Promise<({
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
} | null)[]>>;
export declare const searchMessages: import("convex/server").RegisteredAction<"public", {
    text?: string | undefined;
    threadId?: import("convex/values").GenericId<"threads"> | undefined;
    embeddingModel?: string | undefined;
    vectorSearch?: boolean | undefined;
    textSearch?: boolean | undefined;
    searchAllMessagesForUserId?: string | undefined;
    targetMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    embedding?: number[] | undefined;
    vectorScoreThreshold?: number | undefined;
    messageRange?: {
        before: number;
        after: number;
    } | undefined;
    limit: number;
}, Promise<{
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
}[]>>;
export declare const _fetchSearchMessages: import("convex/server").RegisteredQuery<"internal", {
    threadId?: import("convex/values").GenericId<"threads"> | undefined;
    searchAllMessagesForUserId?: string | undefined;
    textSearchMessages?: {
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
    }[] | undefined;
    beforeMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    limit: number;
    messageRange: {
        before: number;
        after: number;
    };
    embeddingIds: import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096">[];
}, Promise<{
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
}[]>>;
export declare const textSearch: import("convex/server").RegisteredQuery<"public", {
    text?: string | undefined;
    threadId?: import("convex/values").GenericId<"threads"> | undefined;
    searchAllMessagesForUserId?: string | undefined;
    targetMessageId?: import("convex/values").GenericId<"messages"> | undefined;
    limit: number;
}, Promise<{
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
}[]>>;
export declare const getMessageSearchFields: import("convex/server").RegisteredQuery<"public", {
    messageId: import("convex/values").GenericId<"messages">;
}, Promise<{
    text?: string | undefined;
    embedding?: number[] | undefined;
    embeddingModel?: string | undefined;
}>>;
//# sourceMappingURL=messages.d.ts.map