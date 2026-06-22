# Challenge 5 — Drive a feature test-first

> **The mission:** build a small feature or fix a bug strictly test-first — agent writes tests,
> you confirm red, commit, then the agent codes to green without touching the tests. The coach grades
> the discipline of the loop.

## Scenario

Pick something with checkable behavior and at least one interesting edge case: a pure function
(money splitting, date math, parsing), or a bug you can reproduce with a failing test first. If
fixing a bug, the test that reproduces it is your starting red.

## Your constraints (these are the point)

1. **Tests first.** The agent writes the tests from the requirements, before any implementation.
   Include the edge cases that matter.
2. **Confirm red — for the right reason.** Run them, see them fail, and verify they fail because the
   behavior is unimplemented, not because a test is broken.
3. **Commit the tests** as a fixed target before implementing.
4. **Code to green, tests untouched.** Instruct the agent not to edit the tests; let it iterate
   run → read failure → fix → rerun until green. Confirm via `git diff` that only the implementation
   changed.
5. **Stay the executor.** Review the green result; make sure the tests actually assert the behavior
   (not a tautology).

## What to bring back to the coach

- The tests, and what "red for the right reason" looked like.
- Confirmation the tests were committed before implementation.
- A `git diff` summary showing the tests were not edited on the way to green.
- One sentence: how did having a failing test up front change how autonomously the agent could work?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Closed a verify loop** — here a
`solid` means the test was written and confirmed-red *first*, committed, and the agent reached green
without moving the goalposts.
