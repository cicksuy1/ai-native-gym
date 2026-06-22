# Challenge 7 — Delegate a real side-task cleanly

> **The mission:** use a subagent to do a genuine investigation or verification side-task, with a
> proper brief, so your main context stays clean and you get back a usable summary. The coach grades
> the delegation, not the finding.

## Scenario

Pick a side-task in a real codebase that's big enough to flood your main window if done inline:
an audit ("find all X across the repo"), a cross-cutting summary ("how does Y work across these
modules"), or a verification ("check whether this change broke any callers"). The task should
genuinely benefit from happening in a *separate* window.

## Your constraints (these are the point)

1. **Decide it's worth delegating** — confirm you need the destination, not the journey, and that
   it's big enough to justify the ~4× overhead.
2. **Write a four-part brief:** objective, output format, tools/sources, boundaries (including what
   it must *not* do — e.g. no edits, no node_modules).
3. **Spawn the subagent** and have it work in its own context.
4. **Verify the return is a summary, not a transcript** — in the format you specified — and that your
   main context wasn't flooded with raw output.
5. **Stay the executor.** Use the summary to make the actual decision yourself; don't let the
   subagent's conclusion go unread.

## What to bring back to the coach

- The task and why it was worth delegating (destination vs. journey; size vs. overhead).
- Your four-part brief.
- What came back, and confirmation it was a scoped summary in your format.
- One sentence: how much main-context mess did delegating keep out?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Delegated & isolated well** — a
`solid` means a correct delegate-vs-inline call, a complete four-part brief, and a return that was a
clean summary which protected (not polluted) your main context.
