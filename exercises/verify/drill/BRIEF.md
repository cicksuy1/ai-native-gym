# Drill 4 — Build the signal first

> **Goal of this drill:** train the reflex of *defining the pass/fail signal before the agent
> generates*, and of recognizing weak signals. You do these in your own session; the coach checks.

## Rep 1 — Rate the signals

For each "verification" below, say whether it's **strong** (asserts the behavior you want) or
**weak** (passes even when the code is wrong), and why:

1. `tsc` compiles with no errors.
2. A test asserting `parseDuration("90m") === 5400`.
3. "I read the code and it looks right."
4. A script that runs the CLI and diffs output against a saved fixture file.
5. The app starts without crashing.

- **Pass signal:** you tag 2 and 4 strong, 1/3/5 weak, and your reasons turn on "does it fail for the
  *right* reason / assert the actual behavior?"

## Rep 2 — Name the signal before coding

Pick a small function or change. **Before** asking the agent to write anything, write down the
runnable check that will tell you it's correct (a test, a command + expected output, a fixture diff).

- **Pass signal:** you have a concrete, runnable check on paper *before* any generation happened.

## Rep 3 — Hand over the signal and let the loop close

Give the agent the task **and** the signal from Rep 2, and instruct it to iterate until the check
passes — running the check itself each time. Watch it run → read failure → fix → rerun.

- **Pass signal:** the agent closed the loop on its own (you can point to where it read a failure and
  corrected), and it ended green without you hand-debugging.

## Rep 4 — Strengthen a weak loop

Take a task where your only check was "it compiles" or "it runs." Add **one** assertion-level check
that would catch a real behavioral bug, and rerun.

- **Pass signal:** you can name a wrong implementation that your old signal would have passed but
  your new signal now catches.

## When you're done

Tell the coach your Rep 1 ratings and walk them through the loop closing in Rep 3. The coach will
push hardest on whether your signals assert *behavior* — not just absence of crashes.
