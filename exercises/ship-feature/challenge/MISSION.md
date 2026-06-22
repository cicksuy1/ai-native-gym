# Challenge 6 — Ship a real feature, all four habits visible

> **The mission (Project):** take one realistic, multi-file feature from nothing to a reviewed,
> committed diff — with planning, spec, context, and verification all moving together. This is an
> integration project, so there's **no separate drill**: the mission *is* the rep.

## Scenario

Pick a feature in a codebase you have that genuinely touches **two or three files** and has at least
one implicit requirement worth pinning down. Good candidates: a new API endpoint with input
validation; a configurable option several modules read; a small feature flag that gates behavior; an
export/import with edge cases. If you lack a codebase, clone a small open-source project.

## Your constraints (these are the point — each maps to a Part-II module)

1. **Plan first (M4).** Explore read-only in `plan` mode; get an approved, multi-step plan before any
   edit. Improve the plan before approving it.
2. **Write the contract (M5).** Capture the implicit requirements — a short `SPEC.md` or a tight
   written contract with graduated boundaries (always / ask-first / never).
3. **Engineer context (M2).** Execute in a *fresh* session that holds the plan/spec, not the
   exploration mess. Point at the right files; `/compact <focus>` if it runs long.
4. **Close a verify loop (M3) ⭐.** The plan/spec must name a **runnable** pass/fail check; the agent
   runs it and iterates to green on its own. "It compiled" does not count.
5. **Stay the executor (M8 preview).** Start from a clean git state, checkpoint, review the *diff*
   against the plan, and *you* decide it ships.

## What to bring back to the coach

- The feature in one line, and why it earned a plan (not a skip).
- The contract/spec, highlighting one implicit requirement you made explicit.
- How you kept execution context clean (fresh session? what did you point at?).
- The runnable verify signal and that the agent reached green against it.
- One sentence: which of the four habits was hardest to hold together, and why?

## How you're graded

On all five dimensions in `SCORECARD.md`, weighted across the integration — this project wants
**P, C, V, and R all `solid` together**, not one brilliant move and three skipped. A collapsed habit
here tells you exactly which earlier module to re-drill.
