# Drill 6 — Review like an executor

> **Goal of this drill:** practice fresh-context review, clean-git checkpointing, and turning catches
> into rules. You do these in your own session; the coach checks them.

## Rep 1 — Diff, not story

Have the agent make a small change. Before reading its explanation, read the **diff** yourself and
form your own opinion of what it does. Then compare to its summary.

- **Pass signal:** you assessed the change from the diff first; you can name one thing the diff showed
  that the agent's summary glossed or oversold.

## Rep 2 — Fresh-context reviewer

Take a change the agent wrote and have a **separate** reviewer (a subagent, or a cleared session that
didn't write it) review the diff against the requirements — explicitly told it did not write the code.

- **Pass signal:** the fresh reviewer raised at least one issue, and you can explain why seeing the
  diff *cold* helped it catch that.

## Rep 3 — Clean git + checkpoint

Start a task from a clean git state. Have the agent run to a working draft, then **commit a
checkpoint** before you review/refine.

- **Pass signal:** there's a checkpoint commit you could revert to; you can state why a clean starting
  state made the work safe to let run.

## Rep 4 — Mistake → rule

Find a recurring kind of mistake the agent makes (in this task or a past one). Write it as a rule in
CLAUDE.md so it won't recur.

- **Pass signal:** there's a concrete new rule in CLAUDE.md tied to a real mistake you observed.

## When you're done

Show the coach the issue your fresh reviewer caught (Rep 2) and the rule you added (Rep 4). The coach
will press on whether you reviewed the *diff* with judgment or just trusted the green check.
