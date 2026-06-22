# Drill 10 — Orchestrate, or don't

> **Goal of this drill:** build the judgment for when scale earns an orchestra vs. when one session
> wins — and practice the fan-out→reduce→synthesize shape. You do these in your own session; the
> coach checks them.

## Rep 1 — Orchestrate or single session?

For each, say **orchestrate**, **parallel worktrees**, or **single session**, and why:

1. Rename a function and fix its 3 callers.
2. Audit 300 files for a deprecated API call and report every site.
3. Build a new billing flow that touches cart, payments, and shared types.
4. Generate and compare 4 independent design approaches to one problem.
5. Fix three unrelated bugs in three unrelated modules.

- **Pass signal:** 1 and 3 → single session (coupled); 2 and 4 → orchestrate (parallel, high-value);
  5 → parallel worktrees; reasoning turns on independence, scale, value, and the ~15× cost.

## Rep 2 — Design a fan-out→reduce→synthesize

For task 2 or 4 above, sketch the orchestration: what each fanned-out agent does, how results are
reduced/deduped, what the verify step is (e.g. adversarial verify), and what the final synthesis is.

- **Pass signal:** your sketch has all four stages, and you can explain why "the script holds the
  loop" keeps your own context clean.

## Rep 3 — Scope before you fan out

Take your Rep 2 design and describe how you'd **test the prompt on a small sample first** (e.g. 5
items) before fanning out to all of them.

- **Pass signal:** you have a concrete small-scale dry-run step, and you can say what a bad unscoped
  fan-out would have cost.

## Rep 4 — The "don't" case

Name a task you've seen (or could imagine) where someone would be tempted to orchestrate but
shouldn't. Explain what one good session would do better.

- **Pass signal:** you can articulate the coupled/fuzzy nature that makes orchestration the wrong
  call, and the ~15× waste it would have incurred.

## When you're done

Show the coach your Rep 1 calls and your Rep 2 design. The coach will press hardest on the "don't"
judgment — knowing when *not* to orchestrate is the graduation-level skill.
