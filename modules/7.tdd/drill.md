# Warm-up 7 — Red before green

> **Ungraded warm-up** — quick reps to wire the tests-first, confirm-red, don't-touch-the-tests
> reflex before the challenge. Do them in your own Claude Code session on the practice sandbox
> (**`sandbox/`**). The coach checks them; this warm-up doesn't hit the proof-of-work floor — only the
> challenge does.

## Rep 1 — Tests first, no peeking at an implementation (on the sandbox)

In `sandbox/`, ask the agent to write **one** test for a `priority` field on `NoteStore.add()` —
e.g. "a note added with no priority defaults to normal" — in a scratch test, **before** any
implementation exists. Don't let it touch `notes.py` yet.

- **Pass signal:** you have a test that names the *behavior* (the default priority), and `notes.py`
  is still unchanged — `git -C sandbox status` shows no edit to it.

## Rep 2 — Confirm red for the right reason (on the sandbox)

Run `cd sandbox && python -m unittest`. Confirm your new test fails — and check *why*: it should fail
because the priority behavior is genuinely unimplemented (`KeyError`/`AttributeError`/assertion
miss), not because of a typo or a bad import.

- **Pass signal:** you saw red, and you can state it failed for the right reason (the behavior isn't
  built yet), not because the test itself is broken.

## Rep 3 — Commit, then code to green (on the sandbox)

Commit the test as a fixed target. Then ask the agent to implement the priority field to pass it,
with an explicit instruction: **do not edit the test file.** Watch it iterate run → read failure →
fix → rerun until green.

- **Pass signal:** the suite went green, and `git -C sandbox diff` shows the test file unchanged —
  only `notes.py` moved.

## Rep 4 — Catch the goalpost move

Imagine a subtly-wrong priority implementation (e.g. an invalid priority silently stored instead of
rejected) and the one assertion that catches it. If an agent ever "passed" by weakening that
assertion, you'd ship the bug.

- **Pass signal:** you can describe how an editable test would have hidden the bug, and why keeping
  the test fixed is what surfaces it.

## When you're done

Tell the coach what failed-for-the-right-reason looked like in Rep 2, and show that your Rep 3 diff
left the test alone. The coach will press on whether you actually *watched* red before trusting green.
