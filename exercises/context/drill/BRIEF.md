# Drill 1 — Keep the desk clear

> **Goal of this drill:** build the reflex of resetting and steering context instead of letting one
> conversation sprawl. You do these in your own session; the coach checks them.

## Rep 1 — Clear between tasks

Finish any small task, then switch to an unrelated one — but run **`/clear`** first. Then do the same
switch *without* clearing in a separate session and notice the difference in how focused the agent
stays.

- **Pass signal:** you can describe one concrete difference you observed between the cleared and
  un-cleared start (e.g. it referenced the old task, edited a stale file, or stayed sharply on-task).

## Rep 2 — Steer a compaction

Get into a longer session, then run **`/compact`** with an explicit focus instruction (e.g.
`/compact Focus on the parser changes and the failing test`). Read the summary it produces.

- **Pass signal:** the summary kept what you pointed at and dropped resolved tangents; you can name
  one thing it preserved and one it let go.

## Rep 3 — Audit a CLAUDE.md

Open a real CLAUDE.md (project or `~/.claude/CLAUDE.md`). Count the lines. Find one block that is
only *sometimes* relevant — something that would be better as an on-demand skill or a path-scoped
rule than as always-on context.

- **Pass signal:** you can point to a specific block and explain why it's paying rent it doesn't earn
  every session.

## Rep 4 — Pull, don't dump

Give the agent a task and, instead of pasting five files, point it at *where* to look and let it
retrieve what it needs. Compare how much context that consumed vs. dumping everything.

- **Pass signal:** the task succeeded with the agent pulling files just-in-time, and you can state
  why that kept the window cleaner than a pre-dump.

## When you're done

Tell the coach what you observed in Reps 1 and 2, and which CLAUDE.md block you'd move. The coach will
press on *why* each move raises signal or lowers noise.
