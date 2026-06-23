# Warm-up 5 — From wish to contract

> **Ungraded warm-up** — quick reps to practice surfacing implicit requirements and writing graduated
> boundaries. Do them in your own session on the practice sandbox (**`sandbox/`**). This warm-up
> doesn't hit the proof-of-work floor — only the challenge does. The coach checks them; it never does
> them for you.

## Rep 1 — Spot the gaps

Take the wish straight from the sandbox's `BACKLOG.md`: *"search history."* Without writing code or a
spec, list at least **five** implicit decisions an agent would otherwise guess (e.g. does it record
past `find` queries? how many are kept? where are they stored? can you re-run or clear them? do they
survive across runs?).

- **Pass signal:** you surfaced 5+ real gaps — the kinds of things that, left unstated, produce a
  confidently-wrong implementation.

## Rep 2 — Run the interview (on the sandbox)

In `sandbox/`, in **plan** mode, ask the agent to **interview you** about "search history" — events,
inputs, edge cases, out-of-scope — before writing anything. Answer its questions.

- **Pass signal:** the agent asked you questions that surfaced something you hadn't stated, and you
  can name one assumption the interview caught (and `git -C sandbox status` is still clean — no code
  was written).

## Rep 3 — Write graduated boundaries

For "search history," write a three-tier boundaries block: **always do / ask first / never do.**
Include at least one "never" that protects the sandbox (e.g. "never delete existing notes," "never
touch `cli.py`'s existing commands").

- **Pass signal:** you have three tiers populated, and each line is a real rail, not filler.

## Rep 4 — Name the acceptance check

A spec isn't done until it says how "done" is checked. For "search history," write one concrete
acceptance line a fresh agent could verify against (e.g. *run two `find` queries, then `history`
lists both, newest first*).

- **Pass signal:** you can state a concrete pass/fail check the spec would carry — behavioral, not
  "it runs." This is the module 5 spine, planted early.

## When you're done

Show the coach your gap list (Rep 1) and your boundaries block (Rep 3). The coach will press on any
gap you missed and any boundary that's vague.
