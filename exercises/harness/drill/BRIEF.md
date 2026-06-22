# Drill 0 — Feel the gears

> **Goal of this drill:** build muscle memory for switching harness modes *on purpose* and for
> seeing the gather → act → verify loop happen in front of you. Small reps, each with a clear pass
> signal. You do these in your **own** Claude Code session — the coach checks them, never does them
> for you.

A drill is practice, not performance. Nobody's grading elegance here; you're wiring in a reflex.
Do the reps in order — each one is quick.

## Rep 1 — Cycle the gears and read them

In a real Claude Code session, press **Shift+Tab** slowly and watch the mode indicator change.

- **Pass signal:** you can state, from what you saw, the order Shift+Tab cycles through, and name one
  thing the agent *cannot* do in `plan` mode.

## Rep 2 — Explore without touching

Pick any unfamiliar file in a repo you have handy. Switch to **plan** mode. Ask the agent to explain
what one function does and where it's called from. Confirm it made **zero edits**.

- **Pass signal:** you got a useful explanation, and `git status` (or the file's timestamps) confirms
  nothing changed. You felt the difference between "asking" and "doing."

## Rep 3 — Name the loop as it runs

Give the agent a tiny, one-sentence task in **default** mode (e.g. "add a comment above the
`main` function explaining what it does"). As it works, narrate the three phases out loud: *now it's
gathering context… now it's taking the action… now it's verifying.*

- **Pass signal:** you can point to where each of the three loop phases happened in the transcript,
  and you approved the edit deliberately (not reflexively).

## Rep 4 — Make a deliberate gear choice

Think of a change you could describe in one sentence. Decide *before* you start which mode fits and
why, then do it in that mode.

- **Pass signal:** you can justify your mode choice in one sentence ("it was a trivial, safe edit so
  I used acceptEdits" / "I wasn't sure of the approach so I planned first").

## When you're done

Tell the coach which reps you completed and what surprised you. The coach will ask you to put the
loop and the modes into your own words — that's the bridge to the challenge.
