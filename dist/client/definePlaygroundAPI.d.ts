import { type ApiFromModules, type GenericActionCtx, type GenericDataModel, type GenericQueryCtx } from "convex/server";
import { type Agent, type AgentComponent } from "./index.js";
export type PlaygroundAPI = ApiFromModules<{
    playground: ReturnType<typeof definePlaygroundAPI>;
}>["playground"];
export type AgentsFn<DataModel extends GenericDataModel> = (ctx: GenericActionCtx<DataModel> | GenericQueryCtx<DataModel>, args: {
    userId: string | undefined;
    threadId: string | undefined;
}) => Agent[] | Promise<Agent[]>;
export declare function definePlaygroundAPI<DataModel extends GenericDataModel>(component: AgentComponent, { agents: agentsOrFn, userNameLookup, }: {
    agents: Agent[] | AgentsFn<DataModel>;
    userNameLookup?: (ctx: GenericQueryCtx<DataModel>, userId: string) => string | Promise<string>;
}): {
    isApiKeyValid: import("convex/server").RegisteredQuery<"public", {
        apiKey: string;
    }, Promise<boolean>>;
    listUsers: import("convex/server").RegisteredQuery<"public", {
        paginationOpts: {
            id?: number;
            endCursor?: string | null;
            maximumRowsRead?: number;
            maximumBytesRead?: number;
            numItems: number;
            cursor: string | null;
        };
        apiKey: string;
    }, Promise<{
        page: {
            _id: string;
            name: string;
        }[];
        continueCursor: string;
        isDone: boolean;
        pageStatus?: "SplitRecommended" | "SplitRequired" | null;
        splitCursor?: string | null;
    }>>;
    listThreads: import("convex/server").RegisteredQuery<"public", {
        userId?: string | undefined;
        paginationOpts: {
            id?: number;
            endCursor?: string | null;
            maximumRowsRead?: number;
            maximumBytesRead?: number;
            numItems: number;
            cursor: string | null;
        };
        apiKey: string;
    }, Promise<{
        page: {
            lastAgentName: string | undefined;
            latestMessage: string | undefined;
            lastMessageAt: number;
            _creationTime: number;
            _id: string;
            status: "active" | "archived";
            summary?: string;
            title?: string;
            userId?: string;
        }[];
        continueCursor: string;
        isDone: boolean;
        pageStatus?: "SplitRecommended" | "SplitRequired" | null;
        splitCursor?: string | null;
    }>>;
    listMessages: import("convex/server").RegisteredQuery<"public", {
        streamArgs?: {
            startOrder?: number | undefined;
            kind: "list";
        } | {
            kind: "deltas";
            cursors: {
                streamId: string;
                cursor: number;
            }[];
        } | undefined;
        threadId: string;
        paginationOpts: {
            id?: number;
            endCursor?: string | null;
            maximumRowsRead?: number;
            maximumBytesRead?: number;
            numItems: number;
            cursor: string | null;
        };
        apiKey: string;
    }, Promise<{
        streams: import("./types.js").SyncStreamsReturnValue;
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
    listAgents: import("convex/server").RegisteredQuery<"public", {
        threadId?: string | undefined;
        userId?: string | undefined;
        apiKey: string;
    }, Promise<{
        name: string;
        instructions: string | undefined;
        contextOptions: import("./types.js").ContextOptions | undefined;
        storageOptions: import("./types.js").StorageOptions | undefined;
        maxRetries: number | undefined;
        tools: string[];
    }[]>>;
    createThread: import("convex/server").RegisteredMutation<"public", {
        title?: string | undefined;
        agentName?: string | undefined;
        summary?: string | undefined;
        userId: string;
        apiKey: string;
    }, Promise<{
        threadId: string;
    }>>;
    generateText: import("convex/server").RegisteredAction<"public", {
        system?: string | undefined;
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
        threadId: string;
        userId: string;
        agentName: string;
        apiKey: string;
    }, Promise<{
        text: string;
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
    fetchPromptContext: import("convex/server").RegisteredAction<"public", {
        threadId?: string | undefined;
        userId?: string | undefined;
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
        targetMessageId?: string | undefined;
        beforeMessageId?: string | undefined;
        searchText?: string | undefined;
        contextOptions: {
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
        };
        agentName: string;
        apiKey: string;
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
};
//# sourceMappingURL=definePlaygroundAPI.d.ts.map