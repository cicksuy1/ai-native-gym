# Warm-up 2 — Keep the desk clear

> **This is an ungraded warm-up** — quick reps to wire the context-management reflex before the
> challenge. Do them in your own Claude Code session on the practice sandbox (**`sandbox/`**). Nothing
> here hits the proof-of-work floor; only the challenge does. The coach checks them, never does them
> for you.

## Rep 1 — Clear between tasks (on the sandbox)

In `sandbox/`, do any tiny task (e.g. ask the agent to summarize what `cli.py` does), then switch to
an unrelated one — but run **`/clear`** first. In a separate session, make the same switch *without*
clearing and notice the difference in how focused the agent stays.

- **Pass signal:** you can describe one concrete difference between the cleared and un-cleared start
  (e.g. it referenced the old task, reached for a stale file, or stayed sharply on-task).

## Rep 2 — Steer a compaction

Get into a longer session, then run **`/compact`** with an explicit focus instruction (e.g.
`/compact Focus on the cli.py edit and ignore the earlier exploration`). Read the summary it produces.

- **Pass signal:** the summary kept what you pointed at and dropped resolved tangents; you can name
  one thing it preserved and one it let go.

## Rep 3 — Audit the sandbox CLAUDE.md

Open `sandbox/CLAUDE.md` (it has 2 rules) and `~/.claude/CLAUDE.md` if you have one. Count the lines.
Find one block that is only *sometimes* relevant — something that would be better as an on-demand
skill or a path-scoped rule than as always-on context.

- **Pass signal:** you can point to a specific block and explain why it's paying rent it doesn't earn
  every session.

## Rep 4 — Pull, don't dump (on the sandbox)

Give the agent a task in `sandbox/` and, instead of pasting the files, point it at *where* to look
(e.g. "the `find` path in `notes.py`") and let it retrieve what it needs. Compare how much context
that consumed vs. dumping everything.

- **Pass signal:** the task succeeded with the agent pulling files just-in-time, and you can state
  why that kept the window cleaner than a pre-dump.

## When you're done

Tell the coach what you observed in Reps 1 and 2, and which CLAUDE.md block you'd move. The coach will
press on *why* each move raises signal or lowers noise.
