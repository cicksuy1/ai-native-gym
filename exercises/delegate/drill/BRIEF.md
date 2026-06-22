# Drill 7 — Scope a delegation

> **Goal of this drill:** practice writing a real subagent brief and recognizing when delegation pays
> off. You do these in your own session; the coach checks them.

## Rep 1 — Destination or journey?

For each task, say whether you'd **delegate to a subagent** or **do it inline**, and why:

1. "What's the capital of the auth config file's `timeout` setting?" (one value)
2. "Find every place we construct a SQL query by string concatenation across the repo."
3. "Rename this variable in the file I'm looking at."
4. "Summarize how error handling works across the whole service layer."

- **Pass signal:** you delegate 2 and 4 (big, summarizable side-tasks), do 1 and 3 inline (trivial,
  faster yourself), and your reasoning turns on "do I need the journey or just the destination?"

## Rep 2 — Write the four-part brief

Take task 2 or 4 above and write a full subagent brief with all four elements: **objective, output
format, tools/sources, boundaries.**

- **Pass signal:** all four elements are present and specific; the format is a concrete shape (table,
  list, verdict), not "tell me about it."

## Rep 3 — Run it and check the return

Actually spawn the subagent with your brief. Confirm what comes back is a **summary in your format**,
not a transcript dump.

- **Pass signal:** the return matched the format you asked for and kept the search's mess out of your
  main window; you can state how much context you saved vs. doing it inline.

## Rep 4 — Catch the cost

Think of a task where spawning a subagent would cost *more* than it saves (too small, ~4× token
overhead not worth it). Name it and why.

- **Pass signal:** you can give a concrete example where inline beats delegation, citing the overhead.

## When you're done

Show the coach your Rep 1 calls and your Rep 2 brief. The coach will press on any brief element that's
vague and any delegate/inline call whose *reasoning* was fuzzy.
