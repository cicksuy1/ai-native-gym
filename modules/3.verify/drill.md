# Warm-up 3 — Build the signal first

> **Ungraded warm-up** — quick reps to wire the verify-loop reflex before the challenge. Do them in
> your own session; Reps 2–3 use the practice sandbox (**`sandbox/`**). The coach checks them; this
> warm-up doesn't hit the proof-of-work floor — only the challenge does.

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

## Rep 2 — Read a real failing signal (on the sandbox)

In `sandbox/`, run `python -m unittest`. Read the `due.py` failures: for one failing test, name the
exact behavior it demands.

- **Pass signal:** you can state, for one failing test, the behavior it asserts and why that's a
  *strong* (behavioral) check — not "it compiles."

## Rep 3 — Watch the loop close (on the sandbox)

Hand the agent **one** failing `due.py` test as the signal and tell it to iterate until that test
passes — running `python -m unittest` itself each time — **without editing the test**. Watch it run →
read failure → fix → rerun.

- **Pass signal:** the agent closed the loop on its own (you can point to where it read a failure and
  corrected), ending green, with no hand-debugging from you.

## Rep 4 — Name a weak signal you'd reject

Think of a wrong implementation of `is_overdue` that "it runs without crashing" would happily pass.
State the one assertion-level check that would catch it.

- **Pass signal:** you can name a wrong implementation your weak signal passes but your assertion
  catches.

## When you're done

Walk the coach through the loop closing in Rep 3. The coach pushes hardest on whether your signals
assert *behavior* — not just absence of crashes.
