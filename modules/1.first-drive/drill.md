# Warm-up 1 — A guided first drive

> **This is an ungraded warm-up** — quick reps to wire the *shape of a good drive* before the
> challenge. Do them in your own Claude Code session on the practice sandbox (**`sandbox/`** — set it
> up once with `task setup-sandbox`). Nothing here hits the proof-of-work floor; only the challenge
> does. The coach checks your reps, never does them for you.

Pick a tiny, checkable warm-up on the sandbox — improving the empty-`list` message in `cli.py` is a
good one (small, real, runnable). Then drive it through the beats **in order**, narrating each.

## Rep 1 — Explore (read-only)

Switch to `plan` mode. Point the agent at the *specific* spot — *"In `sandbox/`, where does `list`
print its empty message, and what does it say?"* Confirm zero edits with `git -C sandbox status`.

- **Pass signal:** you understood where the change goes *before* changing anything, and nothing was
  edited.

## Rep 2 — Plan-or-act call

Say out loud whether this task earns a plan or not, using the one-sentence-diff heuristic.

- **Pass signal:** you made the call *consciously* and can justify it in a sentence.

## Rep 3 — Set the verify signal first (on the sandbox)

*Before* implementing, state the runnable check that proves success — e.g. `python -m sandbox list`
on an empty store prints your new wording. Have the agent confirm the current state, then implement to
the signal.

- **Pass signal:** the check existed *before* the code, you ran it to confirm the change, and you
  didn't just eyeball it.

## Rep 4 — Review & ship (on the sandbox)

Read the diff yourself with `git -C sandbox diff` (not just the runnable check). Confirm it does only
what you asked, from a clean git state.

- **Pass signal:** you read the diff, caught anything off, and *you* decided it ships.

## When you're done

Tell the coach the five beats as they happened, and which one felt least natural. That weak beat is
the module to lean into when we get there.
