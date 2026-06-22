// Tool permission policy for the conductor conversation (see CONTRACT.md).
// Pure + synchronous so the test suite drives it directly without an SDK session.
// In this gym there is NO test-GREEN gate and NO solution files: the conductor
// teaches and scores the learner's *driving*; the learner runs their own reps in
// their own session. So the policy is tight: read-only tools + Skill are fine,
// Edit/Write are restricted to the three progress files, everything else (Bash,
// WebFetch, …) is denied.
import path from "node:path";
import { resolveInRepo } from "./files.ts";

export type ToolDecision =
  | { behavior: "allow"; updatedInput: Record<string, unknown> }
  | { behavior: "deny"; message: string };

const READ_ONLY = new Set(["Read", "Glob", "Grep", "Skill"]);
const EDIT_TOOLS = new Set(["Edit", "Write", "NotebookEdit"]);

/** The only paths the conductor may write — the three private progress files. */
function writableTargets(): string[] {
  return [
    resolveInRepo("progress/PROGRESS.local.md"),
    resolveInRepo("progress/NOTES.local.md"),
    resolveInRepo("progress/STRATEGY.local.md"),
  ];
}

function samePath(a: string, b: string): boolean {
  return process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b;
}

/**
 * Decide whether the conductor may use a tool.
 * @param toolName the tool the conductor wants to use
 * @param input the tool's input object
 */
export function evaluateToolUse(
  toolName: string,
  input: Record<string, unknown> | null | undefined,
): ToolDecision {
  const safeInput = input ?? {};

  if (READ_ONLY.has(toolName)) {
    return { behavior: "allow", updatedInput: safeInput };
  }

  if (EDIT_TOOLS.has(toolName)) {
    return evaluateEdit(safeInput);
  }

  // Bash, WebFetch, and anything else have no place in this conductor — it does
  // not run tests or shell out; the learner drives their own reps elsewhere.
  return {
    behavior: "deny",
    message: `Tool ${toolName} is not allowed for the conductor; it only reads content and writes the progress files.`,
  };
}

function evaluateEdit(input: Record<string, unknown>): ToolDecision {
  const filePath = typeof input.file_path === "string" ? input.file_path : "";
  if (!filePath) {
    return {
      behavior: "deny",
      message: "the conductor may only write PROGRESS.local.md, NOTES.local.md, or STRATEGY.local.md",
    };
  }
  const resolved = path.resolve(resolveInRepo("."), filePath);
  if (!writableTargets().some((target) => samePath(resolved, target))) {
    return {
      behavior: "deny",
      message: "the conductor may only write PROGRESS.local.md, NOTES.local.md, or STRATEGY.local.md",
    };
  }
  return { behavior: "allow", updatedInput: input };
}
