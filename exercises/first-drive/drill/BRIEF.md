# Drill 1 — A guided first drive

> **Goal of this drill:** walk one tiny task through all five beats *with the structure laid out for
> you*, so the arc becomes muscle before the open challenge. You do this in your own Claude Code
> session; the coach checks each beat.

Pick a genuinely tiny, checkable task in a repo you have — e.g. add a `--version` flag, fix a wrong
error message, add one log line. Then drive it through the beats **in order**, narrating each:

## Rep 1 — Explore (read-only)
Switch to `plan` mode. Point the agent at the *specific* file(s) involved and ask it to explain the
relevant spot. Confirm zero edits.
- **Pass signal:** you understood where the change goes *before* changing anything, and nothing was edited.

## Rep 2 — Plan-or-act call
Say out loud whether this task earns a plan or not, using the one-sentence-diff heuristic.
- **Pass signal:** you made the call *consciously* and can justify it in a sentence.

## Rep 3 — Set the verify signal first
*Before* implementing, state the runnable check that proves success (a test, a command + expected
output). Have the agent confirm it fails, then implement to green.
- **Pass signal:** the check existed *before* the code, you saw it go red→green, and you didn't hand-test.

## Rep 4 — Review & ship
Read the diff yourself (not just the green check). Confirm it does only what you asked, from a clean
git state.
- **Pass signal:** you read the diff, caught anything off, and *you* decided it ships.

## When you're done
Tell the coach the five beats as they happened, and which one felt least natural. That weak beat is
the module to lean into when we get there.
