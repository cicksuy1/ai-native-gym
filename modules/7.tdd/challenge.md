# Challenge 7 — Drive a feature test-first

> **The mission:** implement the `priorities` feature on the sandbox strictly test-first — agent
> writes a new `tests/test_priority.py`, you confirm red, commit, then the agent codes to green
> without touching the tests. The coach grades the discipline of the loop.

## Scenario

Implement the **`priorities`** feature on the practice sandbox (**`sandbox/`**), in your own Claude
Code session. Give notes a priority (e.g. a `priority` field on `add()` — low/normal/high — with a
sensible default), and decide the interesting edge cases up front: an invalid priority, the default
when none is given, ordering or filtering by priority. The behavior is checkable, so it's a clean
test-first target. (`BACKLOG.md` lists `priorities` as a feature.)

Run from the repo root with `python -m sandbox <cmd>`; run the suite with
`cd sandbox && python -m unittest`.

## Your constraints (these are the point)

1. **Tests first.** The agent writes a new **`tests/test_priority.py`** from the requirements, before
   any implementation. Include the edge cases that matter (invalid priority, the default, ordering).
2. **Confirm red — for the right reason.** Run them, see them fail, and verify they fail because the
   behavior is unimplemented, not because a test is broken.
3. **Commit the tests** as a fixed target before implementing.
4. **Code to green, tests untouched.** Instruct the agent not to edit the tests; let it iterate
   run → read failure → fix → rerun until green. Confirm via `git diff` that only the implementation
   changed.
5. **Stay the executor.** Review the green result; make sure the tests actually assert the behavior
   (not a tautology).

## Done when (the proof-of-work floor)

Objective checks the coach can run on your sandbox:

- A new **`sandbox/tests/test_priority.py`** exists, was **committed before the implementation**, and
  `cd sandbox && python -m unittest` is now **green** (the priority behavior is implemented).
- `git -C sandbox diff` / the commit history shows the **tests were written before the impl** and the
  test file was **not edited** on the way to green — the implementation bent to the tests, not the
  reverse.

This floor is the minimum; the grade is still *how you drove* (below). Because this is a verify-heavy
module (n ≥ 3), **dimension 4 — Closed a verify loop — must be `solid` to pass:** the tests were
written first, confirmed **red for the right reason**, committed, and the agent reached green with the
tests untouched.

## What to bring back to the coach

- `tests/test_priority.py`, and what "red for the right reason" looked like.
- Confirmation the test file was committed before implementation.
- A `git -C sandbox diff` summary showing the tests were not edited on the way to green.
- One sentence: how did having a failing test up front change how autonomously the agent could work?

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Closed a verify loop** — here a
`solid` means the test was written and confirmed-red *first*, committed, and the agent reached green
without moving the goalposts.
