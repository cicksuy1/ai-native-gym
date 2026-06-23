# Warm-up 8 — Review like an executor

> **Ungraded warm-up** — quick reps to wire the fresh-context review reflex before the challenge. Do
> them in your own session on the practice sandbox (**`sandbox/`**). The coach checks them; this
> warm-up doesn't hit the proof-of-work floor — only the challenge does.

## Rep 1 — Diff, not story (on the sandbox)

In `sandbox/`, have the agent make a small change (e.g. improve the empty-list message in `cli.py`).
Before reading its explanation, run `git -C sandbox diff` and form your own opinion of what it does.
Then compare to its summary.

- **Pass signal:** you assessed the change from the diff first; you can name one thing the diff showed
  that the agent's summary glossed or oversold.

## Rep 2 — Fresh-context reviewer (on the sandbox)

Take that change and have a **separate** reviewer (a subagent, or a cleared session that didn't write
it) review the `sandbox/` diff against the intent — explicitly told it did not write the code.

- **Pass signal:** the fresh reviewer raised at least one issue, and you can explain why seeing the
  diff *cold* helped it catch that.

## Rep 3 — Clean git + checkpoint (on the sandbox)

Confirm `git -C sandbox status` is clean, then have the agent run to a small working draft and
**commit a checkpoint** in the sandbox before you review/refine.

- **Pass signal:** there's a checkpoint commit in `git -C sandbox log` you could revert to; you can
  state why a clean starting state made the work safe to let run.

## Rep 4 — Mistake → rule

Find a recurring kind of mistake the agent makes (in this task or a past one). Write it as a rule in
**`sandbox/CLAUDE.md`** so it won't recur.

- **Pass signal:** there's a concrete new rule in `sandbox/CLAUDE.md` tied to a real mistake you
  observed.

## When you're done

Show the coach the issue your fresh reviewer caught (Rep 2) and the rule you added (Rep 4). The coach
will press on whether you reviewed the *diff* with judgment or just trusted the green check.
