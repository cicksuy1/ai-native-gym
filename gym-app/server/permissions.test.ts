import { test, expect, describe, afterEach } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { evaluateToolUse } from "./permissions.ts";

// Pin the repo root so writable-path checks resolve deterministically.
const created: string[] = [];
function pinRoot(): string {
  const root = mkdtempSync(path.join(tmpdir(), "gym-perm-"));
  created.push(root);
  process.env.GYM_REPO_ROOT = root;
  return root;
}
afterEach(() => {
  delete process.env.GYM_REPO_ROOT;
  for (const dir of created.splice(0)) {
    try {
      rmSync(dir, { recursive: true, force: true });
    } catch {
      /* best effort */
    }
  }
});

describe("read-only tools", () => {
  test.each(["Read", "Glob", "Grep", "Skill"])("allows %s", (tool) => {
    pinRoot();
    const d = evaluateToolUse(tool, { pattern: "x" });
    expect(d.behavior).toBe("allow");
  });
});

describe("Edit/Write restriction", () => {
  test("allows writing PROGRESS.local.md", () => {
    pinRoot();
    const d = evaluateToolUse("Write", { file_path: "progress/PROGRESS.local.md" });
    expect(d.behavior).toBe("allow");
  });

  test("allows writing NOTES and STRATEGY", () => {
    pinRoot();
    expect(evaluateToolUse("Edit", { file_path: "progress/NOTES.local.md" }).behavior).toBe("allow");
    expect(evaluateToolUse("Edit", { file_path: "progress/STRATEGY.local.md" }).behavior).toBe(
      "allow",
    );
  });

  test("denies writing a lesson file", () => {
    pinRoot();
    const d = evaluateToolUse("Write", { file_path: "lessons/harness.md" });
    expect(d.behavior).toBe("deny");
  });

  test("denies writing the learner's own code outside the repo guard", () => {
    pinRoot();
    const d = evaluateToolUse("Edit", { file_path: "../somewhere/secrets.txt" });
    expect(d.behavior).toBe("deny");
  });

  test("denies an Edit with no file_path", () => {
    pinRoot();
    expect(evaluateToolUse("Write", {}).behavior).toBe("deny");
  });

  test("denies a path-traversal disguised progress write", () => {
    pinRoot();
    const d = evaluateToolUse("Write", { file_path: "progress/../../etc/PROGRESS.local.md" });
    expect(d.behavior).toBe("deny");
  });
});

describe("everything else is denied", () => {
  test.each(["Bash", "WebFetch", "WebSearch", "Task"])("denies %s", (tool) => {
    pinRoot();
    const d = evaluateToolUse(tool, { command: "go test ./..." });
    expect(d.behavior).toBe("deny");
  });

  test("tolerates null input", () => {
    pinRoot();
    expect(evaluateToolUse("Bash", null).behavior).toBe("deny");
  });
});
