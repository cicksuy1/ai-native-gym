# Challenge 6 — Ship a real feature, all four habits visible

> **The mission (Project):** take one realistic, multi-file feature from nothing to a reviewed,
> committed diff — with planning, spec, context, and verification all moving together. This is an
> integration project, so there's **no separate drill**: the mission *is* the rep.

## Scenario

Ship the **`reject-empty`** feature on the practice sandbox (**`sandbox/`**), in your own Claude Code
session. Today `NoteStore.add()` happily accepts an empty or whitespace-only title — a real seeded
rough edge. Make `add()` refuse an empty/whitespace title (raise `NoteError`), surface a clear
message at the CLI in `cli.py`, and lock the behavior in with a **new passing test**. It genuinely
touches **two or three files** (`notes.py`, `tests/`, and the CLI layer) and carries an implicit
requirement worth pinning down: what exactly counts as "empty" — `""`, `"   "`, a tab? Decide it in
your spec, not on the fly.

Run from the repo root with `python -m sandbox <cmd>`; run the suite with
`cd sandbox && python -m unittest`. (`BACKLOG.md` lists `reject-empty` as a feature.)

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

## Done when (the proof-of-work floor)

Objective checks the coach can run on your sandbox:

- `cd sandbox && python -m unittest` is **green**, *including* a new test that asserts `add()`
  rejects an empty/whitespace title (raises `NoteError`) and still accepts a normal one.
- `git -C sandbox diff` shows the change spanning **`notes.py` plus a test file** (and `cli.py` for
  the user-facing message) — not a one-file edit.

This floor is the minimum; the grade is still *how you drove* (below). Because this is a verify-heavy
module (n ≥ 3), **dimension 4 — Closed a verify loop — must be `solid` to pass:** the new test must
be a real behavior check the agent ran and reached green against, not "it imported fine."

## What to bring back to the coach

- `reject-empty` in one line, and why it earned a plan (not a skip).
- The contract/spec, highlighting the implicit requirement you made explicit (what counts as "empty").
- How you kept execution context clean (fresh session? which sandbox files did you point at?).
- The new test, the `python -m unittest` green signal, and that the agent reached it on its own.
- One sentence: which of the four habits was hardest to hold together, and why?

## How you're graded

On all five dimensions in `scorecard.md`, weighted across the integration — this project wants
**P, C, V, and R all `solid` together**, not one brilliant move and three skipped. A collapsed habit
here tells you exactly which earlier module to re-drill.
