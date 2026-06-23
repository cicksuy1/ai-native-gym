# Warm-up 9 — Scope a delegation

> **Ungraded warm-up** — quick reps to wire the delegation reflex before the challenge. Reps 2–3 use
> the practice sandbox (**`sandbox/`**). The coach checks them; this warm-up doesn't hit the
> proof-of-work floor — only the challenge does.

## Rep 1 — Destination or journey?

For each task, say whether you'd **delegate to a subagent** or **do it inline**, and why:

1. "What's the value of `VERSION` in the sandbox's `cli.py`?" (one value)
2. "Find every rough edge across `notes.py` and `cli.py` — missing flags, weak input handling,
   confusing messages."
3. "Rename one variable in the file I'm looking at."
4. "Summarize how `NoteStore` is used across the whole sandbox."

- **Pass signal:** you delegate 2 and 4 (big, summarizable side-tasks), do 1 and 3 inline (trivial,
  faster yourself), and your reasoning turns on "do I need the journey or just the destination?"

## Rep 2 — Write the four-part brief (for the sandbox)

Take task 2 or 4 above and write a full subagent brief with all four elements: **objective, output
format, tools/sources, boundaries** (e.g. read-only, stay inside `sandbox/`).

- **Pass signal:** all four elements are present and specific; the format is a concrete shape (table,
  list, verdict), not "tell me about it."

## Rep 3 — Run it and check the return (on the sandbox)

Actually spawn the subagent with your brief against `sandbox/`. Confirm what comes back is a
**summary in your format**, not a transcript dump.

- **Pass signal:** the return matched the format you asked for and kept the search's mess out of your
  main window; you can state how much context you saved vs. doing it inline.

## Rep 4 — Catch the cost

Think of a sandbox task where spawning a subagent would cost *more* than it saves (too small, ~4×
token overhead not worth it). Name it and why.

- **Pass signal:** you can give a concrete example where inline beats delegation, citing the overhead.

## When you're done

Show the coach your Rep 1 calls and your Rep 2 brief. The coach will press on any brief element that's
vague and any delegate/inline call whose *reasoning* was fuzzy.
