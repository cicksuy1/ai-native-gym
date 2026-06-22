# Challenge 8 — Run independent work in parallel, safely isolated

> **The mission:** take genuinely independent work, run it across isolated worktrees in parallel, and
> show you'd have *kept it a single session* if it were coupled. The coach grades the isolation
> discipline and the parallel-vs-single judgment.

## Scenario

Find (or construct) **two or three genuinely independent** tasks in a codebase — chores or small
features that don't share files or depend on each other's output. Good candidates: a docs update + a
dependency bump + an isolated bug fix. The independence is the whole point.

## Your constraints (these are the point)

1. **Justify the parallelism.** State why these tasks are independent enough to parallelize (no shared
   files, no ordering dependency) — and contrast with one coupled task you'd deliberately *not*
   split.
2. **Isolate each worker.** Run each task in its own worktree (`claude --worktree`, agent view, or
   `/batch`). No two agents share a checkout.
3. **Verify no collisions.** Confirm the parallel work produced separate branches/changes with no
   shared-file conflicts.
4. **Review each independently** and merge on its own merits, from a clean state.
5. **Stay the executor.** You decide what merges and in what order.

## What to bring back to the coach

- The independent tasks, and *why* they were safe to parallelize.
- How you isolated each (the mechanism you used).
- Confirmation of no shared-file conflicts.
- One sentence: the coupled task you would *not* have parallelized, and why it wants one session.

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Delegated & isolated well** — a
`solid` means correct parallel-vs-single judgment, real worktree isolation per worker, and no
collisions, with you deciding what merges.
