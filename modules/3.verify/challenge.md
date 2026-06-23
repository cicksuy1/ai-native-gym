# Challenge 3 — Make the loop close itself

> **The mission:** drive a real task on the practice sandbox so the *agent* does the verifying — you
> hand it a runnable pass/fail signal up front, and it iterates to green on its own. This is the
> central skill of the course; the coach grades the verify loop hardest.

## Scenario

The practice sandbox at **`sandbox/`** ships with a half-built `due.py` whose tests
(`tests/test_due.py`) are **failing on purpose** — your verify corner. Your task: **make those failing
`due.py` tests pass WITHOUT editing the tests.** The tests already encode the behavior you want, so
they *are* your runnable signal. Run them with `cd sandbox && python -m unittest`.

This is the ideal verify task: "right" and "wrong" are decidable by running one command, and the
agent can loop on it until green.

## Your constraints (these are the point)

1. **Define the signal first.** Read the failing `due.py` tests *before* the agent generates anything,
   and name the exact behavior each one asserts. The signal is `python -m unittest` going green — and
   it asserts *behavior*, not just "it compiles."
2. **Hand the agent the signal and the task**, and instruct it to **run the check itself and iterate
   until it passes** — without weakening or editing `tests/test_due.py`.
3. **Let the loop close on its own.** Resist hand-debugging. Watch the agent run → read failure → fix
   `due.py` → rerun. Only step in if it's truly stuck (then coach it, don't fix it for it).
4. **Review the verified result.** Confirm the tests prove what you wanted (not a tautology that
   always passes), then approve from a clean git state.

## Done when (the proof-of-work floor)

- `cd sandbox && python -m unittest` runs **green** — the previously failing `due.py` tests now pass.
- `git -C sandbox diff` shows the change touches **only `due.py`** — `tests/test_due.py` is untouched.

## What to bring back to the coach

- The task, and the **exact runnable signal** you defined up front (`python -m unittest` on `due.py`).
- Evidence the agent closed the loop itself (a failure it read and corrected, ending green).
- One weak signal you *rejected* (e.g. "it compiles") and why your signal is stronger.
- One sentence: how did supplying the signal first change how much you had to babysit?

## How you're graded

On the five dimensions in `scorecard.md`, weighted overwhelmingly on **Closed a verify loop** — a
`solid` here means you supplied a real, behavior-asserting signal up front and the agent iterated to
green against it on its own. **Dimension 4 (Closed a verify loop) must be `solid` to pass this
module** — it is the dimension the whole course is built around; earn it.
