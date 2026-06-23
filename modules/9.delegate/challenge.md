# Challenge 9 — Delegate a real side-task cleanly

> **The mission:** use a subagent to audit the notes CLI on the practice sandbox, with a proper
> four-part brief, so your main context stays clean and you get back a usable summary. The coach
> grades the delegation, not the finding.

## Scenario

Work in the practice sandbox (**`sandbox/`** — the tiny notes CLI). Your corner task: **delegate an
audit** of the notes CLI to a subagent — "find the rough edges across `notes.py` and `cli.py`"
(missing flags, confusing messages, weak input handling, etc.). It's big enough to flood your main
window if done inline, so it genuinely benefits from happening in a *separate* context. The subagent
returns a **summary** that you save as **`sandbox/AUDIT.md`**.

## Your constraints (these are the point)

1. **Decide it's worth delegating** — confirm you need the destination, not the journey, and that
   it's big enough to justify the ~4× overhead.
2. **Write a four-part brief:** objective, output format, tools/sources, boundaries (including what
   it must *not* do — e.g. no edits, read-only).
3. **Spawn the subagent** and have it work in its own context.
4. **Verify the return is a summary, not a transcript** — in the format you specified — and that your
   main context wasn't flooded with raw output.
5. **Stay the executor.** Use the summary to make the actual call yourself; don't let the subagent's
   conclusion go unread.

## Done when (the proof-of-work floor)

- **`sandbox/AUDIT.md` exists** and is a **summary** (a scoped findings doc in your format), **not a
  raw transcript** of the subagent's search.
- You can **show the four-part brief** you gave the subagent.
- **Dimension 4 (Closed a verify loop) must be `solid` to pass** — you checked the summary was
  actually usable/correct, not taken on faith.

## What to bring back to the coach

- The task and why it was worth delegating (destination vs. journey; size vs. overhead).
- Your four-part brief.
- `sandbox/AUDIT.md`, and confirmation it was a scoped summary in your format.
- One sentence: how much main-context mess did delegating keep out?

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Delegated & isolated well** — a
`solid` means a correct delegate-vs-inline call, a complete four-part brief, and a return that was a
clean summary which protected (not polluted) your main context.
