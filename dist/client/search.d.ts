import { type EmbeddingModel, type ModelMessage } from "ai";
import type { MessageDoc } from "../validators.js";
import { type VectorDimension } from "../component/vector/tables.js";
import type { Message } from "../validators.js";
import type { AgentComponent, Config, ContextOptions, Options, QueryCtx, MutationCtx, ActionCtx } from "./types.js";
export type GetEmbedding = (text: string) => Promise<{
    embedding: number[];
    /** @deprecated Use embeddingModel instead. */
    textEmbeddingModel: string | EmbeddingModel;
    embeddingModel?: string | EmbeddingModel;
} | {
    embedding: number[];
    /** @deprecated Use embeddingModel instead. */
    textEmbeddingModel?: string | EmbeddingModel;
    embeddingModel: string | EmbeddingModel;
}>;
/**
 * Fetch the context messages for a thread.
 * @param ctx Either a query, mutation, or action ctx.
 *   If it is not an action context, you can't do text or
 *   vector search.
 * @param args The associated thread, user, message
 * @returns
 */
export declare function fetchContextMessages(ctx: QueryCtx | MutationCtx | ActionCtx, component: AgentComponent, args: {
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
    contextOptions: ContextOptions;
    getEmbedding?: GetEmbedding;
}): Promise<MessageDoc[]>;
export declare function fetchRecentAndSearchMessages(ctx: QueryCtx | MutationCtx | ActionCtx, component: AgentComponent, args: {
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
    contextOptions: ContextOptions;
    getEmbedding?: GetEmbedding;
}): Promise<{
    recentMessages: MessageDoc[];
    searchMessages: MessageDoc[];
}>;
/**
 * Filter out tool messages that don't have both a tool call and response.
 * For the approval workflow, tool calls with approval responses (but no tool-results yet)
 * should also be kept.
 * @param docs The messages to filter.
 * @returns The filtered messages.
 */
export declare function filterOutOrphanedToolMessages(docs: MessageDoc[]): {
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
/**
 * Embed a list of messages, including calling any usage handler.
 * This will not save the embeddings to the database.
 */
export declare function embedMessages(ctx: ActionCtx, { userId, threadId, ...options }: {
    userId: string | undefined;
    threadId: string | undefined;
    agentName?: string;
} & Pick<Config, "usageHandler" | "textEmbeddingModel" | "embeddingModel" | "callSettings">, messages: (ModelMessage | Message)[]): Promise<{
    vectors: (number[] | null)[];
    dimension: VectorDimension;
    model: string;
} | undefined>;
/**
 * Embeds many strings, calling any usage handler.
 * @param ctx The ctx parameter to an action.
 * @param args Arguments to AI SDK's embedMany, and context for the embedding,
 *   passed to the usage handler.
 * @returns The embeddings for the strings, matching the order of the values.
 */
export declare function embedMany(ctx: ActionCtx, args: {
    userId: string | undefined;
    threadId: string | undefined;
    values: string[];
    abortSignal?: AbortSignal;
    headers?: Record<string, string>;
    agentName?: string;
} & Pick<Config, "usageHandler" | "textEmbeddingModel" | "embeddingModel" | "callSettings">): Promise<{
    embeddings: number[][];
}>;
/**
 * Embed a list of messages, and save the embeddings to the database.
 * @param ctx The ctx parameter to an action.
 * @param component The agent component, usually components.agent.
 * @param args The context for the embedding, passed to the usage handler.
 * @param messages The messages to embed, in the Agent MessageDoc format.
 */
export declare function generateAndSaveEmbeddings(ctx: ActionCtx, component: AgentComponent, args: {
    threadId: string | undefined;
    userId: string | undefined;
    agentName?: string;
    /**
     * @deprecated Use embeddingModel instead.
     */
    textEmbeddingModel?: EmbeddingModel;
    embeddingModel?: EmbeddingModel;
} & Pick<Config, "usageHandler" | "callSettings">, messages: MessageDoc[]): Promise<void>;
/**
 * Similar to fetchContextMessages, but also combines the input messages,
 * with search context, recent messages, input messages, then prompt messages.
 * If there is a promptMessageId and prompt message(s) provided, it will splice
 * the prompt messages into the history to replace the promptMessageId message,
 * but still be followed by any existing messages that were in response to the
 * promptMessageId message.
 */
export declare function fetchContextWithPrompt(ctx: ActionCtx, component: AgentComponent, args: {
    prompt: string | (ModelMessage | Message)[] | undefined;
    messages: (ModelMessage | Message)[] | undefined;
    promptMessageId: string | undefined;
    userId: string | undefined;
    threadId: string | undefined;
    agentName?: string;
} & Options & Config): Promise<{
    messages: ModelMessage[];
    order: number | undefined;
    stepOrder: number | undefined;
}>;
export declare function getPromptArray(prompt: string | (ModelMessage | Message)[] | undefined): (ModelMessage | Message)[];
//# sourceMappingURL=search.d.ts.map