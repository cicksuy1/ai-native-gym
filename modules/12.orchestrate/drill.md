# Warm-up 12 — Orchestrate, or don't

> **This is an ungraded warm-up** — quick reps to wire the orchestrate-vs-not judgment before the
> capstone challenge. Nothing here hits the proof-of-work floor; just do them in your own Claude Code
> session on the practice sandbox (**`sandbox/`**). The coach checks them, never does them for you.

The graduation-level skill is knowing when scale earns an orchestra and when one good session wins.
A few quick reps on the sandbox to build that reflex — then sketch the shape on real BACKLOG work.

## Rep 1 — Orchestrate or single session?

For each, say **orchestrate**, **parallel worktrees**, or **single session**, and why:

1. Rename `format_note` in `notes.py` and fix its callers.
2. Audit 300 files for a deprecated API call and report every site.
3. Build the coupled `persistence` feature that touches `notes.py` and `cli.py` together.
4. Generate and compare 4 independent design approaches to the "search history" feature.
5. Fix three unrelated rough edges (the `querry` typo, missing `--version`, empty-title bug).

- **Pass signal:** 1 and 3 → single session (coupled); 2 and 4 → orchestrate (parallel, high-value);
  5 → parallel worktrees; your reasoning turns on independence, scale, value, and the ~15× cost.

## Rep 2 — Design a fan-out → reduce → synthesize on the sandbox

Open `sandbox/scripts/orchestrate.py` and `BACKLOG.md`. Pick 2–3 independent BACKLOG features and
sketch the orchestration: what each fanned-out agent does (one feature each), how the summaries are
reduced/deduped, what the verify step is (e.g. adversarial verify), and what the final synthesis is.

- **Pass signal:** your sketch has all four stages, maps onto the `workers()` / `run_worker()` /
  `synthesize()` stubs, and you can explain why "the script holds the loop" keeps your own context
  clean.

## Rep 3 — Scope before you fan out

Take your Rep 2 design and describe how you'd **test the prompt on a small sample first** — e.g. run
`run_worker` against **one** feature and read its summary before fanning out to all three.

- **Pass signal:** you have a concrete small-scale dry-run step, and you can say what a bad unscoped
  fan-out over the whole backlog would have cost (~15×).

## Rep 4 — The "don't" case on the sandbox

Name a sandbox task someone would be tempted to orchestrate but shouldn't — e.g. the coupled
`persistence` feature, or a fuzzy "improve the notes CLI". Explain what one good session would do
better, and what conflicts/waste an orchestra would have caused.

- **Pass signal:** you can articulate the coupled/fuzzy nature that makes orchestration the wrong
  call here, and the ~15× waste it would have incurred.

## When you're done

Show the coach your Rep 1 calls and your Rep 2 design. The coach will press hardest on the "don't"
judgment — knowing when *not* to orchestrate is the graduation-level skill.
