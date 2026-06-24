export declare const schema: import("convex/server").SchemaDefinition<{
    apiKeys: import("convex/server").TableDefinition<import("convex/values").VObject<{
        name?: string | undefined;
    }, {
        name: import("convex/values").VString<string | undefined, "optional">;
    }, "required", "name">, {
        name: ["name", "_creationTime"];
    }, {}, {}>;
    embeddings_128: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_256: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_512: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_768: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_1024: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_1408: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_1536: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_2048: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_3072: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    embeddings_4096: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: string | undefined;
        userId?: string | undefined;
        model_table_userId?: string[] | undefined;
        model_table_threadId?: string[] | undefined;
        model: string;
        table: string;
        vector: number[];
    }, {
        model: import("convex/values").VString<string, "required">;
        table: import("convex/values").VString<string, "required">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VString<string | undefined, "optional">;
        model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
        vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
    }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
        model_table_threadId: ["model", "table", "threadId", "_creationTime"];
    }, import("convex/server").GenericTableSearchIndexes, {
        vector: {
            vectorField: "vector";
            dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
            filterFields: "model_table_userId" | "model_table_threadId";
        };
    }>;
    threads: import("convex/server").TableDefinition<import("convex/values").VObject<{
        title?: string | undefined;
        userId?: string | undefined;
        order?: number | undefined;
        summary?: string | undefined;
        defaultSystemPrompt?: string | undefined;
        parentThreadIds?: import("convex/values").GenericId<"threads">[] | undefined;
        status: "active" | "archived";
    }, {
        userId: import("convex/values").VString<string | undefined, "optional">;
        title: import("convex/values").VString<string | undefined, "optional">;
        summary: import("convex/values").VString<string | undefined, "optional">;
        status: import("convex/values").VUnion<"active" | "archived", [import("convex/values").VLiteral<"active", "required">, import("convex/values").VLiteral<"archived", "required">], "required", never>;
        defaultSystemPrompt: import("convex/values").VString<string | undefined, "optional">;
        parentThreadIds: import("convex/values").VArray<import("convex/values").GenericId<"threads">[] | undefined, import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">, "optional">;
        order: import("convex/values").VFloat64<number | undefined, "optional">;
    }, "required", "title" | "userId" | "order" | "status" | "summary" | "defaultSystemPrompt" | "parentThreadIds">, {
        userId: ["userId", "_creationTime"];
    }, {
        title: {
            searchField: "title";
            filterFields: "userId";
        };
    }, {}>;
    messages: import("convex/server").TableDefinition<import("convex/values").VObject<{
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
    }, {
        userId: import("convex/values").VString<string | undefined, "optional">;
        threadId: import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">;
        order: import("convex/values").VFloat64<number, "required">;
        stepOrder: import("convex/values").VFloat64<number, "required">;
        embeddingId: import("convex/values").VUnion<import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined, import("convex/values").VId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096", "required">[], "optional", never>;
        fileIds: import("convex/values").VArray<import("convex/values").GenericId<"files">[] | undefined, import("convex/values").VId<import("convex/values").GenericId<"files">, "required">, "optional">;
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
        parentMessageId: import("convex/values").VId<import("convex/values").GenericId<"messages"> | undefined, "optional">;
        stepId: import("convex/values").VString<string | undefined, "optional">;
        files: import("convex/values").VArray<any[] | undefined, import("convex/values").VAny<any, "required", string>, "optional">;
    }, "required", "id" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "reasoning" | "tool" | "threadId" | "userId" | "agentName" | "order" | "stepOrder" | "embeddingId" | "fileIds" | "error" | "status" | "model" | "provider" | "message" | "usage" | "sources" | "warnings" | "finishReason" | "reasoningDetails" | "message.role" | "message.providerOptions" | `message.providerOptions.${string}` | "message.content" | "usage.promptTokens" | "usage.completionTokens" | "usage.totalTokens" | "usage.reasoningTokens" | "usage.cachedInputTokens" | "files" | "parentMessageId" | "stepId">, {
        threadId_status_tool_order_stepOrder: ["threadId", "status", "tool", "order", "stepOrder", "_creationTime"];
        embeddingId_threadId: ["embeddingId", "threadId", "_creationTime"];
    }, {
        text_search: {
            searchField: "text";
            filterFields: "threadId" | "userId";
        };
    }, {}>;
    streamingMessages: import("convex/server").TableDefinition<import("convex/values").VObject<{
        providerOptions?: Record<string, Record<string, any>> | undefined;
        userId?: string | undefined;
        agentName?: string | undefined;
        model?: string | undefined;
        provider?: string | undefined;
        format?: "UIMessageChunk" | "TextStreamPart" | undefined;
        threadId: import("convex/values").GenericId<"threads">;
        order: number;
        stepOrder: number;
        state: {
            timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
            kind: "streaming";
            lastHeartbeat: number;
        } | {
            cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
            kind: "finished";
            endedAt: number;
        } | {
            reason: string;
            kind: "aborted";
        };
    }, {
        userId: import("convex/values").VString<string | undefined, "optional">;
        agentName: import("convex/values").VString<string | undefined, "optional">;
        model: import("convex/values").VString<string | undefined, "optional">;
        provider: import("convex/values").VString<string | undefined, "optional">;
        providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
        format: import("convex/values").VUnion<"UIMessageChunk" | "TextStreamPart" | undefined, [import("convex/values").VLiteral<"UIMessageChunk", "required">, import("convex/values").VLiteral<"TextStreamPart", "required">], "optional", never>;
        threadId: import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">;
        order: import("convex/values").VFloat64<number, "required">;
        /**
         * The step order of the first message in the stream.
         * If the stream ends up with both a tool call and a tool result,
         * the stepOrder of the result will be +1 of the tool call.
         */
        stepOrder: import("convex/values").VFloat64<number, "required">;
        state: import("convex/values").VUnion<{
            timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
            kind: "streaming";
            lastHeartbeat: number;
        } | {
            cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
            kind: "finished";
            endedAt: number;
        } | {
            reason: string;
            kind: "aborted";
        }, [import("convex/values").VObject<{
            timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
            kind: "streaming";
            lastHeartbeat: number;
        }, {
            kind: import("convex/values").VLiteral<"streaming", "required">;
            lastHeartbeat: import("convex/values").VFloat64<number, "required">;
            timeoutFnId: import("convex/values").VId<import("convex/values").GenericId<"_scheduled_functions"> | undefined, "optional">;
        }, "required", "kind" | "lastHeartbeat" | "timeoutFnId">, import("convex/values").VObject<{
            cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
            kind: "finished";
            endedAt: number;
        }, {
            kind: import("convex/values").VLiteral<"finished", "required">;
            endedAt: import("convex/values").VFloat64<number, "required">;
            cleanupFnId: import("convex/values").VId<import("convex/values").GenericId<"_scheduled_functions"> | undefined, "optional">;
        }, "required", "kind" | "endedAt" | "cleanupFnId">, import("convex/values").VObject<{
            reason: string;
            kind: "aborted";
        }, {
            kind: import("convex/values").VLiteral<"aborted", "required">;
            reason: import("convex/values").VString<string, "required">;
        }, "required", "reason" | "kind">], "required", "reason" | "kind" | "lastHeartbeat" | "timeoutFnId" | "endedAt" | "cleanupFnId">;
    }, "required", "providerOptions" | `providerOptions.${string}` | "threadId" | "userId" | "agentName" | "order" | "stepOrder" | "model" | "provider" | "format" | "state" | "state.reason" | "state.kind" | "state.lastHeartbeat" | "state.timeoutFnId" | "state.endedAt" | "state.cleanupFnId">, {
        threadId_state_order_stepOrder: ["threadId", "state.kind", "order", "stepOrder", "_creationTime"];
    }, {}, {}>;
    streamDeltas: import("convex/server").TableDefinition<import("convex/values").VObject<{
        streamId: import("convex/values").GenericId<"streamingMessages">;
        start: number;
        end: number;
        parts: any[];
    }, {
        streamId: import("convex/values").VId<import("convex/values").GenericId<"streamingMessages">, "required">;
        start: import("convex/values").VFloat64<number, "required">;
        end: import("convex/values").VFloat64<number, "required">;
        parts: import("convex/values").VArray<any[], import("convex/values").VAny<any, "required", string>, "required">;
    }, "required", "streamId" | "start" | "end" | "parts">, {
        streamId_start_end: ["streamId", "start", "end", "_creationTime"];
    }, {}, {}>;
    memories: import("convex/server").TableDefinition<import("convex/values").VObject<{
        threadId?: import("convex/values").GenericId<"threads"> | undefined;
        userId?: string | undefined;
        embeddingId?: import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined;
        memory: string;
    }, {
        threadId: import("convex/values").VId<import("convex/values").GenericId<"threads"> | undefined, "optional">;
        userId: import("convex/values").VString<string | undefined, "optional">;
        memory: import("convex/values").VString<string, "required">;
        embeddingId: import("convex/values").VUnion<import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined, import("convex/values").VId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096", "required">[], "optional", never>;
    }, "required", "threadId" | "userId" | "embeddingId" | "memory">, {
        threadId: ["threadId", "_creationTime"];
        userId: ["userId", "_creationTime"];
        embeddingId: ["embeddingId", "_creationTime"];
    }, {}, {}>;
    files: import("convex/server").TableDefinition<import("convex/values").VObject<{
        mediaType?: string | undefined;
        mimeType?: string | undefined;
        filename?: string | undefined;
        storageId: string;
        hash: string;
        refcount: number;
        lastTouchedAt: number;
    }, {
        storageId: import("convex/values").VString<string, "required">;
        mediaType: import("convex/values").VString<string | undefined, "optional">;
        /** @deprecated Use `mediaType` instead. */
        mimeType: import("convex/values").VString<string | undefined, "optional">;
        filename: import("convex/values").VString<string | undefined, "optional">;
        hash: import("convex/values").VString<string, "required">;
        refcount: import("convex/values").VFloat64<number, "required">;
        lastTouchedAt: import("convex/values").VFloat64<number, "required">;
    }, "required", "mediaType" | "mimeType" | "filename" | "storageId" | "hash" | "refcount" | "lastTouchedAt">, {
        hash: ["hash", "_creationTime"];
        refcount: ["refcount", "_creationTime"];
    }, {}, {}>;
}, true>;
export declare const vv: Omit<{
    id: <TableName extends string>(tableName: TableName) => import("convex/values").VId<import("convex/values").GenericId<TableName>, "required">;
    null: () => import("convex/values").VNull<null, "required">;
    number: () => import("convex/values").VFloat64<number, "required">;
    float64: () => import("convex/values").VFloat64<number, "required">;
    bigint: () => import("convex/values").VInt64<bigint, "required">;
    int64: () => import("convex/values").VInt64<bigint, "required">;
    boolean: () => import("convex/values").VBoolean<boolean, "required">;
    string: () => import("convex/values").VString<string, "required">;
    bytes: () => import("convex/values").VBytes<ArrayBuffer, "required">;
    literal: <T extends string | number | bigint | boolean>(literal: T) => import("convex/values").VLiteral<T, "required">;
    array: <T_1 extends import("convex/values").Validator<any, "required", any>>(element: T_1) => import("convex/values").VArray<T_1["type"][], T_1, "required">;
    object: <T_2 extends import("convex/values").PropertyValidators>(fields: T_2) => import("convex/values").VObject<import("convex/server").Expand<{ [Property in { [Property_1 in keyof T_2]: T_2[Property_1]["isOptional"] extends "optional" ? Property_1 : never; }[keyof T_2]]?: Exclude<import("convex/values").Infer<T_2[Property]>, undefined>; } & { [Property_1 in Exclude<keyof T_2, { [Property in keyof T_2]: T_2[Property]["isOptional"] extends "optional" ? Property : never; }[keyof T_2]>]: import("convex/values").Infer<T_2[Property_1]>; }>, T_2, "required", { [Property_2 in keyof T_2]: Property_2 | `${Property_2 & string}.${T_2[Property_2]["fieldPaths"]}`; }[keyof T_2] & string>;
    record: <Key extends import("convex/values").Validator<string, "required", any>, Value extends import("convex/values").Validator<any, "required", any>>(keys: Key, values: Value) => import("convex/values").VRecord<Record<import("convex/values").Infer<Key>, Value["type"]>, Key, Value, "required", string>;
    union: <T_3 extends import("convex/values").Validator<any, "required", any>[]>(...members: T_3) => import("convex/values").VUnion<T_3[number]["type"], T_3, "required", T_3[number]["fieldPaths"]>;
    any: () => import("convex/values").VAny<any, "required", string>;
    optional: <T_4 extends import("convex/values").GenericValidator>(value: T_4) => import("convex/values").VOptional<T_4>;
    nullable: <T_5 extends import("convex/values").Validator<any, "required", any>>(value: T_5) => import("convex/values").VUnion<(T_5 | import("convex/values").VNull<null, "required">)["type"], [T_5, import("convex/values").VNull<null, "required">], "required", (T_5 | import("convex/values").VNull<null, "required">)["fieldPaths"]>;
}, "id"> & {
    id: <TableName extends import("convex/server").TableNamesInDataModel<{
        messages: {
            document: {
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
            };
            fieldPaths: "_id" | ("id" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "reasoning" | "tool" | "threadId" | "userId" | "agentName" | "_creationTime" | "order" | "stepOrder" | "embeddingId" | "fileIds" | "error" | "status" | "model" | "provider" | "message" | "usage" | "sources" | "warnings" | "finishReason" | "reasoningDetails" | "message.role" | "message.providerOptions" | `message.providerOptions.${string}` | "message.content" | "usage.promptTokens" | "usage.completionTokens" | "usage.totalTokens" | "usage.reasoningTokens" | "usage.cachedInputTokens" | "files" | "parentMessageId" | "stepId");
            indexes: {
                threadId_status_tool_order_stepOrder: ["threadId", "status", "tool", "order", "stepOrder", "_creationTime"];
                embeddingId_threadId: ["embeddingId", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {
                text_search: {
                    searchField: "text";
                    filterFields: "threadId" | "userId";
                };
            };
            vectorIndexes: {};
        };
        files: {
            document: {
                _id: import("convex/values").GenericId<"files">;
                _creationTime: number;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                storageId: string;
                hash: string;
                refcount: number;
                lastTouchedAt: number;
            };
            fieldPaths: "_id" | ("mediaType" | "mimeType" | "filename" | "_creationTime" | "storageId" | "hash" | "refcount" | "lastTouchedAt");
            indexes: {
                hash: ["hash", "_creationTime"];
                refcount: ["refcount", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        threads: {
            document: {
                _id: import("convex/values").GenericId<"threads">;
                _creationTime: number;
                title?: string | undefined;
                userId?: string | undefined;
                order?: number | undefined;
                summary?: string | undefined;
                defaultSystemPrompt?: string | undefined;
                parentThreadIds?: import("convex/values").GenericId<"threads">[] | undefined;
                status: "active" | "archived";
            };
            fieldPaths: "_id" | ("title" | "userId" | "_creationTime" | "order" | "status" | "summary" | "defaultSystemPrompt" | "parentThreadIds");
            indexes: {
                userId: ["userId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {
                title: {
                    searchField: "title";
                    filterFields: "userId";
                };
            };
            vectorIndexes: {};
        };
        embeddings_128: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_128">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_256: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_256">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_512: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_512">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_768: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_768">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_1024: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_1024">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_1408: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_1408">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_1536: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_1536">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_2048: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_2048">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_3072: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_3072">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_4096: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_4096">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        streamingMessages: {
            document: {
                _id: import("convex/values").GenericId<"streamingMessages">;
                _creationTime: number;
                providerOptions?: Record<string, Record<string, any>> | undefined;
                userId?: string | undefined;
                agentName?: string | undefined;
                model?: string | undefined;
                provider?: string | undefined;
                format?: "UIMessageChunk" | "TextStreamPart" | undefined;
                threadId: import("convex/values").GenericId<"threads">;
                order: number;
                stepOrder: number;
                state: {
                    timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                    kind: "streaming";
                    lastHeartbeat: number;
                } | {
                    cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                    kind: "finished";
                    endedAt: number;
                } | {
                    reason: string;
                    kind: "aborted";
                };
            };
            fieldPaths: "_id" | ("providerOptions" | `providerOptions.${string}` | "threadId" | "userId" | "agentName" | "_creationTime" | "order" | "stepOrder" | "model" | "provider" | "format" | "state" | "state.reason" | "state.kind" | "state.lastHeartbeat" | "state.timeoutFnId" | "state.endedAt" | "state.cleanupFnId");
            indexes: {
                threadId_state_order_stepOrder: ["threadId", "state.kind", "order", "stepOrder", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        streamDeltas: {
            document: {
                _id: import("convex/values").GenericId<"streamDeltas">;
                _creationTime: number;
                streamId: import("convex/values").GenericId<"streamingMessages">;
                start: number;
                end: number;
                parts: any[];
            };
            fieldPaths: "_id" | ("_creationTime" | "streamId" | "start" | "end" | "parts");
            indexes: {
                streamId_start_end: ["streamId", "start", "end", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        memories: {
            document: {
                _id: import("convex/values").GenericId<"memories">;
                _creationTime: number;
                threadId?: import("convex/values").GenericId<"threads"> | undefined;
                userId?: string | undefined;
                embeddingId?: import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined;
                memory: string;
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "embeddingId" | "memory");
            indexes: {
                threadId: ["threadId", "_creationTime"];
                userId: ["userId", "_creationTime"];
                embeddingId: ["embeddingId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        apiKeys: {
            document: {
                _id: import("convex/values").GenericId<"apiKeys">;
                _creationTime: number;
                name?: string | undefined;
            };
            fieldPaths: "_id" | ("_creationTime" | "name");
            indexes: {
                name: ["name", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
    }>>(tableName: TableName) => import("convex/values").VId<import("convex/values").GenericId<TableName>, "required">;
    doc: <TableName extends import("convex/server").TableNamesInDataModel<{
        messages: {
            document: {
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
            };
            fieldPaths: "_id" | ("id" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "reasoning" | "tool" | "threadId" | "userId" | "agentName" | "_creationTime" | "order" | "stepOrder" | "embeddingId" | "fileIds" | "error" | "status" | "model" | "provider" | "message" | "usage" | "sources" | "warnings" | "finishReason" | "reasoningDetails" | "message.role" | "message.providerOptions" | `message.providerOptions.${string}` | "message.content" | "usage.promptTokens" | "usage.completionTokens" | "usage.totalTokens" | "usage.reasoningTokens" | "usage.cachedInputTokens" | "files" | "parentMessageId" | "stepId");
            indexes: {
                threadId_status_tool_order_stepOrder: ["threadId", "status", "tool", "order", "stepOrder", "_creationTime"];
                embeddingId_threadId: ["embeddingId", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {
                text_search: {
                    searchField: "text";
                    filterFields: "threadId" | "userId";
                };
            };
            vectorIndexes: {};
        };
        files: {
            document: {
                _id: import("convex/values").GenericId<"files">;
                _creationTime: number;
                mediaType?: string | undefined;
                mimeType?: string | undefined;
                filename?: string | undefined;
                storageId: string;
                hash: string;
                refcount: number;
                lastTouchedAt: number;
            };
            fieldPaths: "_id" | ("mediaType" | "mimeType" | "filename" | "_creationTime" | "storageId" | "hash" | "refcount" | "lastTouchedAt");
            indexes: {
                hash: ["hash", "_creationTime"];
                refcount: ["refcount", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        threads: {
            document: {
                _id: import("convex/values").GenericId<"threads">;
                _creationTime: number;
                title?: string | undefined;
                userId?: string | undefined;
                order?: number | undefined;
                summary?: string | undefined;
                defaultSystemPrompt?: string | undefined;
                parentThreadIds?: import("convex/values").GenericId<"threads">[] | undefined;
                status: "active" | "archived";
            };
            fieldPaths: "_id" | ("title" | "userId" | "_creationTime" | "order" | "status" | "summary" | "defaultSystemPrompt" | "parentThreadIds");
            indexes: {
                userId: ["userId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {
                title: {
                    searchField: "title";
                    filterFields: "userId";
                };
            };
            vectorIndexes: {};
        };
        embeddings_128: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_128">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_256: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_256">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_512: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_512">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_768: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_768">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_1024: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_1024">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_1408: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_1408">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_1536: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_1536">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_2048: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_2048">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_3072: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_3072">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        embeddings_4096: {
            document: {
                _id: import("convex/values").GenericId<"embeddings_4096">;
                _creationTime: number;
                threadId?: string | undefined;
                userId?: string | undefined;
                model_table_userId?: string[] | undefined;
                model_table_threadId?: string[] | undefined;
                model: string;
                table: string;
                vector: number[];
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector");
            indexes: {
                model_table_threadId: ["model", "table", "threadId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: import("convex/server").GenericTableSearchIndexes;
            vectorIndexes: {
                vector: {
                    vectorField: "vector";
                    dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                    filterFields: "model_table_userId" | "model_table_threadId";
                };
            };
        };
        streamingMessages: {
            document: {
                _id: import("convex/values").GenericId<"streamingMessages">;
                _creationTime: number;
                providerOptions?: Record<string, Record<string, any>> | undefined;
                userId?: string | undefined;
                agentName?: string | undefined;
                model?: string | undefined;
                provider?: string | undefined;
                format?: "UIMessageChunk" | "TextStreamPart" | undefined;
                threadId: import("convex/values").GenericId<"threads">;
                order: number;
                stepOrder: number;
                state: {
                    timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                    kind: "streaming";
                    lastHeartbeat: number;
                } | {
                    cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                    kind: "finished";
                    endedAt: number;
                } | {
                    reason: string;
                    kind: "aborted";
                };
            };
            fieldPaths: "_id" | ("providerOptions" | `providerOptions.${string}` | "threadId" | "userId" | "agentName" | "_creationTime" | "order" | "stepOrder" | "model" | "provider" | "format" | "state" | "state.reason" | "state.kind" | "state.lastHeartbeat" | "state.timeoutFnId" | "state.endedAt" | "state.cleanupFnId");
            indexes: {
                threadId_state_order_stepOrder: ["threadId", "state.kind", "order", "stepOrder", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        streamDeltas: {
            document: {
                _id: import("convex/values").GenericId<"streamDeltas">;
                _creationTime: number;
                streamId: import("convex/values").GenericId<"streamingMessages">;
                start: number;
                end: number;
                parts: any[];
            };
            fieldPaths: "_id" | ("_creationTime" | "streamId" | "start" | "end" | "parts");
            indexes: {
                streamId_start_end: ["streamId", "start", "end", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        memories: {
            document: {
                _id: import("convex/values").GenericId<"memories">;
                _creationTime: number;
                threadId?: import("convex/values").GenericId<"threads"> | undefined;
                userId?: string | undefined;
                embeddingId?: import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined;
                memory: string;
            };
            fieldPaths: "_id" | ("threadId" | "userId" | "_creationTime" | "embeddingId" | "memory");
            indexes: {
                threadId: ["threadId", "_creationTime"];
                userId: ["userId", "_creationTime"];
                embeddingId: ["embeddingId", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
        apiKeys: {
            document: {
                _id: import("convex/values").GenericId<"apiKeys">;
                _creationTime: number;
                name?: string | undefined;
            };
            fieldPaths: "_id" | ("_creationTime" | "name");
            indexes: {
                name: ["name", "_creationTime"];
                by_id: ["_id"];
                by_creation_time: ["_creationTime"];
            };
            searchIndexes: {};
            vectorIndexes: {};
        };
    }>>(tableName: TableName) => import("convex-helpers/validators").AddFieldsToValidator<{
        apiKeys: import("convex/server").TableDefinition<import("convex/values").VObject<{
            name?: string | undefined;
        }, {
            name: import("convex/values").VString<string | undefined, "optional">;
        }, "required", "name">, {
            name: ["name", "_creationTime"];
        }, {}, {}>;
        embeddings_128: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_256: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_512: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_768: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_1024: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_1408: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_1536: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_2048: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_3072: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        embeddings_4096: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: string | undefined;
            userId?: string | undefined;
            model_table_userId?: string[] | undefined;
            model_table_threadId?: string[] | undefined;
            model: string;
            table: string;
            vector: number[];
        }, {
            model: import("convex/values").VString<string, "required">;
            table: import("convex/values").VString<string, "required">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VString<string | undefined, "optional">;
            model_table_userId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            model_table_threadId: import("convex/values").VArray<string[] | undefined, import("convex/values").VString<string, "required">, "optional">;
            vector: import("convex/values").VArray<number[], import("convex/values").VFloat64<number, "required">, "required">;
        }, "required", "threadId" | "userId" | "model" | "table" | "model_table_userId" | "model_table_threadId" | "vector">, {
            model_table_threadId: ["model", "table", "threadId", "_creationTime"];
        }, import("convex/server").GenericTableSearchIndexes, {
            vector: {
                vectorField: "vector";
                dimensions: 128 | 256 | 512 | 768 | 1024 | 1408 | 1536 | 2048 | 3072 | 4096;
                filterFields: "model_table_userId" | "model_table_threadId";
            };
        }>;
        threads: import("convex/server").TableDefinition<import("convex/values").VObject<{
            title?: string | undefined;
            userId?: string | undefined;
            order?: number | undefined;
            summary?: string | undefined;
            defaultSystemPrompt?: string | undefined;
            parentThreadIds?: import("convex/values").GenericId<"threads">[] | undefined;
            status: "active" | "archived";
        }, {
            userId: import("convex/values").VString<string | undefined, "optional">;
            title: import("convex/values").VString<string | undefined, "optional">;
            summary: import("convex/values").VString<string | undefined, "optional">;
            status: import("convex/values").VUnion<"active" | "archived", [import("convex/values").VLiteral<"active", "required">, import("convex/values").VLiteral<"archived", "required">], "required", never>;
            defaultSystemPrompt: import("convex/values").VString<string | undefined, "optional">;
            parentThreadIds: import("convex/values").VArray<import("convex/values").GenericId<"threads">[] | undefined, import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">, "optional">;
            order: import("convex/values").VFloat64<number | undefined, "optional">;
        }, "required", "title" | "userId" | "order" | "status" | "summary" | "defaultSystemPrompt" | "parentThreadIds">, {
            userId: ["userId", "_creationTime"];
        }, {
            title: {
                searchField: "title";
                filterFields: "userId";
            };
        }, {}>;
        messages: import("convex/server").TableDefinition<import("convex/values").VObject<{
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
        }, {
            userId: import("convex/values").VString<string | undefined, "optional">;
            threadId: import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">;
            order: import("convex/values").VFloat64<number, "required">;
            stepOrder: import("convex/values").VFloat64<number, "required">;
            embeddingId: import("convex/values").VUnion<import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined, import("convex/values").VId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096", "required">[], "optional", never>;
            fileIds: import("convex/values").VArray<import("convex/values").GenericId<"files">[] | undefined, import("convex/values").VId<import("convex/values").GenericId<"files">, "required">, "optional">;
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
            parentMessageId: import("convex/values").VId<import("convex/values").GenericId<"messages"> | undefined, "optional">;
            stepId: import("convex/values").VString<string | undefined, "optional">;
            files: import("convex/values").VArray<any[] | undefined, import("convex/values").VAny<any, "required", string>, "optional">;
        }, "required", "id" | "text" | "providerOptions" | "providerMetadata" | `providerOptions.${string}` | `providerMetadata.${string}` | "reasoning" | "tool" | "threadId" | "userId" | "agentName" | "order" | "stepOrder" | "embeddingId" | "fileIds" | "error" | "status" | "model" | "provider" | "message" | "usage" | "sources" | "warnings" | "finishReason" | "reasoningDetails" | "message.role" | "message.providerOptions" | `message.providerOptions.${string}` | "message.content" | "usage.promptTokens" | "usage.completionTokens" | "usage.totalTokens" | "usage.reasoningTokens" | "usage.cachedInputTokens" | "files" | "parentMessageId" | "stepId">, {
            threadId_status_tool_order_stepOrder: ["threadId", "status", "tool", "order", "stepOrder", "_creationTime"];
            embeddingId_threadId: ["embeddingId", "threadId", "_creationTime"];
        }, {
            text_search: {
                searchField: "text";
                filterFields: "threadId" | "userId";
            };
        }, {}>;
        streamingMessages: import("convex/server").TableDefinition<import("convex/values").VObject<{
            providerOptions?: Record<string, Record<string, any>> | undefined;
            userId?: string | undefined;
            agentName?: string | undefined;
            model?: string | undefined;
            provider?: string | undefined;
            format?: "UIMessageChunk" | "TextStreamPart" | undefined;
            threadId: import("convex/values").GenericId<"threads">;
            order: number;
            stepOrder: number;
            state: {
                timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                kind: "streaming";
                lastHeartbeat: number;
            } | {
                cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                kind: "finished";
                endedAt: number;
            } | {
                reason: string;
                kind: "aborted";
            };
        }, {
            userId: import("convex/values").VString<string | undefined, "optional">;
            agentName: import("convex/values").VString<string | undefined, "optional">;
            model: import("convex/values").VString<string | undefined, "optional">;
            provider: import("convex/values").VString<string | undefined, "optional">;
            providerOptions: import("convex/values").VRecord<Record<string, Record<string, any>> | undefined, import("convex/values").VString<string, "required">, import("convex/values").VRecord<Record<string, any>, import("convex/values").VString<string, "required">, import("convex/values").VAny<any, "required", string>, "required", string>, "optional", string>;
            format: import("convex/values").VUnion<"UIMessageChunk" | "TextStreamPart" | undefined, [import("convex/values").VLiteral<"UIMessageChunk", "required">, import("convex/values").VLiteral<"TextStreamPart", "required">], "optional", never>;
            threadId: import("convex/values").VId<import("convex/values").GenericId<"threads">, "required">;
            order: import("convex/values").VFloat64<number, "required">;
            /**
             * The step order of the first message in the stream.
             * If the stream ends up with both a tool call and a tool result,
             * the stepOrder of the result will be +1 of the tool call.
             */
            stepOrder: import("convex/values").VFloat64<number, "required">;
            state: import("convex/values").VUnion<{
                timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                kind: "streaming";
                lastHeartbeat: number;
            } | {
                cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                kind: "finished";
                endedAt: number;
            } | {
                reason: string;
                kind: "aborted";
            }, [import("convex/values").VObject<{
                timeoutFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                kind: "streaming";
                lastHeartbeat: number;
            }, {
                kind: import("convex/values").VLiteral<"streaming", "required">;
                lastHeartbeat: import("convex/values").VFloat64<number, "required">;
                timeoutFnId: import("convex/values").VId<import("convex/values").GenericId<"_scheduled_functions"> | undefined, "optional">;
            }, "required", "kind" | "lastHeartbeat" | "timeoutFnId">, import("convex/values").VObject<{
                cleanupFnId?: import("convex/values").GenericId<"_scheduled_functions"> | undefined;
                kind: "finished";
                endedAt: number;
            }, {
                kind: import("convex/values").VLiteral<"finished", "required">;
                endedAt: import("convex/values").VFloat64<number, "required">;
                cleanupFnId: import("convex/values").VId<import("convex/values").GenericId<"_scheduled_functions"> | undefined, "optional">;
            }, "required", "kind" | "endedAt" | "cleanupFnId">, import("convex/values").VObject<{
                reason: string;
                kind: "aborted";
            }, {
                kind: import("convex/values").VLiteral<"aborted", "required">;
                reason: import("convex/values").VString<string, "required">;
            }, "required", "reason" | "kind">], "required", "reason" | "kind" | "lastHeartbeat" | "timeoutFnId" | "endedAt" | "cleanupFnId">;
        }, "required", "providerOptions" | `providerOptions.${string}` | "threadId" | "userId" | "agentName" | "order" | "stepOrder" | "model" | "provider" | "format" | "state" | "state.reason" | "state.kind" | "state.lastHeartbeat" | "state.timeoutFnId" | "state.endedAt" | "state.cleanupFnId">, {
            threadId_state_order_stepOrder: ["threadId", "state.kind", "order", "stepOrder", "_creationTime"];
        }, {}, {}>;
        streamDeltas: import("convex/server").TableDefinition<import("convex/values").VObject<{
            streamId: import("convex/values").GenericId<"streamingMessages">;
            start: number;
            end: number;
            parts: any[];
        }, {
            streamId: import("convex/values").VId<import("convex/values").GenericId<"streamingMessages">, "required">;
            start: import("convex/values").VFloat64<number, "required">;
            end: import("convex/values").VFloat64<number, "required">;
            parts: import("convex/values").VArray<any[], import("convex/values").VAny<any, "required", string>, "required">;
        }, "required", "streamId" | "start" | "end" | "parts">, {
            streamId_start_end: ["streamId", "start", "end", "_creationTime"];
        }, {}, {}>;
        memories: import("convex/server").TableDefinition<import("convex/values").VObject<{
            threadId?: import("convex/values").GenericId<"threads"> | undefined;
            userId?: string | undefined;
            embeddingId?: import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined;
            memory: string;
        }, {
            threadId: import("convex/values").VId<import("convex/values").GenericId<"threads"> | undefined, "optional">;
            userId: import("convex/values").VString<string | undefined, "optional">;
            memory: import("convex/values").VString<string, "required">;
            embeddingId: import("convex/values").VUnion<import("convex/values").GenericId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096"> | undefined, import("convex/values").VId<"embeddings_128" | "embeddings_256" | "embeddings_512" | "embeddings_768" | "embeddings_1024" | "embeddings_1408" | "embeddings_1536" | "embeddings_2048" | "embeddings_3072" | "embeddings_4096", "required">[], "optional", never>;
        }, "required", "threadId" | "userId" | "embeddingId" | "memory">, {
            threadId: ["threadId", "_creationTime"];
            userId: ["userId", "_creationTime"];
            embeddingId: ["embeddingId", "_creationTime"];
        }, {}, {}>;
        files: import("convex/server").TableDefinition<import("convex/values").VObject<{
            mediaType?: string | undefined;
            mimeType?: string | undefined;
            filename?: string | undefined;
            storageId: string;
            hash: string;
            refcount: number;
            lastTouchedAt: number;
        }, {
            storageId: import("convex/values").VString<string, "required">;
            mediaType: import("convex/values").VString<string | undefined, "optional">;
            /** @deprecated Use `mediaType` instead. */
            mimeType: import("convex/values").VString<string | undefined, "optional">;
            filename: import("convex/values").VString<string | undefined, "optional">;
            hash: import("convex/values").VString<string, "required">;
            refcount: import("convex/values").VFloat64<number, "required">;
            lastTouchedAt: import("convex/values").VFloat64<number, "required">;
        }, "required", "mediaType" | "mimeType" | "filename" | "storageId" | "hash" | "refcount" | "lastTouchedAt">, {
            hash: ["hash", "_creationTime"];
            refcount: ["refcount", "_creationTime"];
        }, {}, {}>;
    }[TableName]["validator"], {
        _id: import("convex/values").VId<import("convex/values").GenericId<TableName>, "required">;
        _creationTime: import("convex/values").VFloat64<number, "required">;
    }>;
};
export { vv as v };
export default schema;
//# sourceMappingURL=schema.d.ts.map