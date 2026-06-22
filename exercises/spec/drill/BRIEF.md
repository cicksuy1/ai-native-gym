# Drill 3 — From wish to contract

> **Goal of this drill:** practice surfacing implicit requirements and writing graduated boundaries.
> You do these in your own session; the coach checks them.

## Rep 1 — Spot the gaps

Take this wish: *"add a CSV export to the reports page."* Without writing code, list at least **five**
implicit decisions the agent would otherwise guess (e.g. which columns? date format? huge-export
handling? filename? what encoding?).

- **Pass signal:** you surfaced 5+ real gaps — the kinds of things that, left unstated, produce a
  confidently-wrong implementation.

## Rep 2 — Run the interview

Pick a real feature. In plan mode, ask the agent to **interview you** about it (events, inputs,
edge cases, out-of-scope) before writing anything. Answer its questions.

- **Pass signal:** the agent asked you questions that surfaced something you hadn't stated, and you
  can name one assumption the interview caught.

## Rep 3 — Write graduated boundaries

For that feature, write a three-tier boundaries block: **always do / ask first / never do.** Include
at least one "never" that protects you (e.g. "never commit secrets," "never touch the auth module").

- **Pass signal:** you have three tiers populated, and each line is a real rail, not filler.

## Rep 4 — Fresh-session handoff

Have the agent write the requirements into a self-contained `SPEC.md`. Then **`/clear`** and start a
new session whose only instruction is "implement SPEC.md, one section at a time."

- **Pass signal:** the implementation session started clean (no interview clutter) and worked from the
  spec; you can explain why the fresh session is a context-management win.

## When you're done

Show the coach your gap list (Rep 1) and your boundaries block (Rep 3). The coach will press on any
gap you missed and any boundary that's vague.
