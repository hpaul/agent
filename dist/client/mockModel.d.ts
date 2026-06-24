import type { LanguageModelV3, LanguageModelV3Content } from "@ai-sdk/provider";
import { type ProviderMetadata } from "ai";
export declare const DEFAULT_TEXT = "\nA A A A A A A A A A A A A A A\nB B B B B B B B B B B B B B B\nC C C C C C C C C C C C C C C\nD D D D D D D D D D D D D D D\n";
export type MockModelArgs = {
    provider?: LanguageModelV3["provider"];
    modelId?: LanguageModelV3["modelId"];
    supportedUrls?: LanguageModelV3["supportedUrls"] | (() => LanguageModelV3["supportedUrls"]);
    chunkDelayInMs?: number;
    initialDelayInMs?: number;
    /** A list of the responses for multiple steps.
     * For tool calls, the first list would include a tool call part,
     * then the next list would be after the tool response or another tool call.
     * Tool responses come from actual tool calls!
     */
    contentSteps?: LanguageModelV3Content[][];
    /** A single list of content responded from each step.
     * Provide contentSteps instead if you want to do multi-step responses with
     * tool calls.
     */
    content?: LanguageModelV3Content[];
    doGenerate?: LanguageModelV3["doGenerate"];
    doStream?: LanguageModelV3["doStream"];
    providerMetadata?: ProviderMetadata;
    fail?: boolean | {
        probability?: number;
        error?: string;
    };
};
export declare function mockModel(args?: MockModelArgs): LanguageModelV3;
export declare class MockLanguageModel implements LanguageModelV3 {
    readonly specificationVersion = "v3";
    private _supportedUrls;
    readonly provider: LanguageModelV3["provider"];
    readonly modelId: LanguageModelV3["modelId"];
    doGenerate: LanguageModelV3["doGenerate"];
    doStream: LanguageModelV3["doStream"];
    doGenerateCalls: Parameters<LanguageModelV3["doGenerate"]>[0][];
    doStreamCalls: Parameters<LanguageModelV3["doStream"]>[0][];
    constructor(args: MockModelArgs);
    get supportedUrls(): Record<string, RegExp[]> | PromiseLike<Record<string, RegExp[]>>;
}
//# sourceMappingURL=mockModel.d.ts.map