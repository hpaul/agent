import type { StepResult, StopCondition } from "ai";
/**
 * A stop condition that only matches tool calls which completed
 * successfully (i.e. produced a `tool-result`, not a `tool-error`).
 *
 * Use this instead of the AI SDK's `hasToolCall` when you want the
 * agent to retry on argument validation failures rather than stopping.
 */
export declare function hasSuccessfulToolCall(toolName: string): StopCondition<any>;
export declare function willContinue(steps: StepResult<any>[], stopWhen: StopCondition<any> | Array<StopCondition<any>> | undefined): Promise<boolean>;
export declare function errorToString(error: unknown): string;
//# sourceMappingURL=utils.d.ts.map