# Challenge 4 — Make the loop close itself

> **The mission:** take a real task and drive it so the *agent* does the verifying — you supply a
> runnable pass/fail signal up front, and the agent iterates to green on its own. This is the central
> skill of the course; the coach grades the verify loop hardest.

## Scenario

Pick a task with a checkable behavior — something where "right" and "wrong" are decidable by running
something. Good candidates: a pure function with edge cases (parsing, formatting, math), a bug fix
where you can write a failing test that reproduces it, a small endpoint you can hit and assert the
response, or a CLI whose output you can diff against a fixture.

## Your constraints (these are the point)

1. **Define the signal first.** *Before* the agent generates the implementation, establish the
   runnable pass/fail check — write the test, the assertion, or the fixture-diff command. Make it
   assert *behavior*, not just "it compiles."
2. **Hand the agent the signal and the task**, and instruct it to **run the check itself and iterate
   until it passes** — without weakening or editing the check.
3. **Let the loop close on its own.** Resist hand-debugging. Watch the agent run → read failure →
   fix → rerun. Only step in if it's truly stuck (then coach it, don't fix it for it).
4. **Review the verified result.** Confirm the check actually proves what you wanted (not a tautology
   that always passes), then approve from a clean git state.

## What to bring back to the coach

- The task, and the **exact runnable signal** you defined up front.
- Evidence the agent closed the loop itself (a failure it read and corrected, ending green).
- One weak signal you *rejected* (e.g. "it compiles") and why your signal is stronger.
- One sentence: how did supplying the signal first change how much you had to babysit?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted overwhelmingly on **Closed a verify loop** — a
`solid` here means you supplied a real, behavior-asserting signal up front and the agent iterated to
green against it on its own. This is the dimension the whole course is built around; earn it.
