# Drill 5 — Red before green

> **Goal of this drill:** wire in the tests-first, confirm-red, don't-touch-the-tests reflex. You do
> these in your own session; the coach checks them.

## Rep 1 — Tests first, no peeking at an implementation

Pick a small pure function. Ask the agent to write tests for it — including at least one edge case —
**before** any implementation exists.

- **Pass signal:** you have a test file and *no* implementation yet; the tests name the behavior, not
  the internals.

## Rep 2 — Confirm red for the right reason

Run the tests. Confirm they fail — and check *why* they fail (should be "function not defined" or a
real assertion miss, not a typo/import error).

- **Pass signal:** you saw red, and you can state that they failed for the right reason (the behavior
  is genuinely unimplemented), not because the test itself is broken.

## Rep 3 — Commit, then code to green

Commit the tests. Then ask the agent to implement to pass them, with an explicit instruction: **do
not edit the test file.** Watch it iterate to green.

- **Pass signal:** the suite went green, and `git diff` shows the test file unchanged — only the
  implementation moved.

## Rep 4 — Catch the goalpost move

Deliberately give the agent a task where the obvious implementation is subtly wrong (e.g. a rounding
or off-by-one case), with a test that catches it. If the agent tries to "fix" by weakening the test,
stop it.

- **Pass signal:** you can describe how an editable test would have hidden the bug, and you kept the
  test fixed so the bug surfaced.

## When you're done

Tell the coach what failed-for-the-right-reason looked like in Rep 2, and show that your Rep 3 diff
left the tests alone. The coach will press on whether you actually *watched* red before trusting
green.
