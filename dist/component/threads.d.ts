export declare const getThread: import("convex/server").RegisteredQuery<"public", {
    threadId: import("convex/values").GenericId<"threads">;
}, Promise<{
    title?: string | undefined;
    userId?: string | undefined;
    summary?: string | undefined;
    _id: string;
    _creationTime: number;
    status: "active" | "archived";
} | null>>;
export declare const listThreadsByUserId: import("convex/server").RegisteredQuery<"public", {
    userId?: string | undefined;
    order?: "asc" | "desc" | undefined;
    paginationOpts?: {
        id?: number;
        endCursor?: string | null;
        maximumRowsRead?: number;
        maximumBytesRead?: number;
        numItems: number;
        cursor: string | null;
    } | undefined;
}, Promise<{
    page: {
        title?: string | undefined;
        userId?: string | undefined;
        summary?: string | undefined;
        _id: string;
        _creationTime: number;
        status: "active" | "archived";
    }[];
    isDone: boolean;
    continueCursor: import("convex/server").Cursor;
    splitCursor?: import("convex/server").Cursor | null;
    pageStatus?: "SplitRecommended" | "SplitRequired" | null;
}>>;
export declare const createThread: import("convex/server").RegisteredMutation<"public", {
    title?: string | undefined;
    userId?: string | undefined;
    summary?: string | undefined;
    defaultSystemPrompt?: string | undefined;
    parentThreadIds?: import("convex/values").GenericId<"threads">[] | undefined;
}, Promise<{
    title?: string | undefined;
    userId?: string | undefined;
    summary?: string | undefined;
    _id: string;
    _creationTime: number;
    status: "active" | "archived";
}>>;
export declare const threadFieldsSupportingPatch: ("title" | "userId" | "status" | "summary")[];
export declare const updateThread: import("convex/server").RegisteredMutation<"public", {
    threadId: import("convex/values").GenericId<"threads">;
    patch: {
        title?: string | undefined;
        userId?: string | undefined;
        status?: "active" | "archived" | undefined;
        summary?: string | undefined;
    };
}, Promise<{
    title?: string | undefined;
    userId?: string | undefined;
    summary?: string | undefined;
    _id: string;
    _creationTime: number;
    status: "active" | "archived";
}>>;
export declare const searchThreadTitles: import("convex/server").RegisteredQuery<"public", {
    userId?: string | null | undefined;
    query: string;
    limit: number;
}, Promise<{
    title?: string | undefined;
    userId?: string | undefined;
    summary?: string | undefined;
    _id: string;
    _creationTime: number;
    status: "active" | "archived";
}[]>>;
/**
 * Use this to delete a thread and everything it contains.
 * It will try to delete all pages synchronously.
 * If it times out or fails, you'll have to run it again.
 */
export declare const deleteAllForThreadIdSync: import("convex/server").RegisteredAction<"public", {
    limit?: number | undefined;
    threadId: import("convex/values").GenericId<"threads">;
}, Promise<void>>;
export declare const _deletePageForThreadId: import("convex/server").RegisteredMutation<"internal", {
    cursor?: string | undefined;
    limit?: number | undefined;
    messagesDone?: boolean | undefined;
    streamsDone?: boolean | undefined;
    streamOrder?: number | undefined;
    deltaCursor?: string | undefined;
    threadId: import("convex/values").GenericId<"threads">;
}, Promise<{
    cursor: string;
    isDone: boolean;
}>>;
/**
 * Use this to delete a thread and everything it contains.
 * It will continue deleting pages asynchronously.
 */
export declare const deleteAllForThreadIdAsync: import("convex/server").RegisteredMutation<"public", {
    cursor?: string | undefined;
    limit?: number | undefined;
    messagesDone?: boolean | undefined;
    streamsDone?: boolean | undefined;
    streamOrder?: number | undefined;
    deltaCursor?: string | undefined;
    threadId: import("convex/values").GenericId<"threads">;
}, Promise<{
    isDone: boolean;
}>>;
//# sourceMappingURL=threads.d.ts.map