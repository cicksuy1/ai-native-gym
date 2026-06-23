# Challenge 12 — Orchestrate the right work, and refuse the wrong work

> **The mission (capstone):** make a real orchestration call on the sandbox — either run a scoped
> fan-out → reduce → synthesize across a few genuinely-parallel `BACKLOG.md` features, *or*
> deliberately decline to orchestrate and do the right thing instead, writing down *why*. This is the
> **capstone**: it pulls together every module before it — planning (4), context (2), verify (3),
> delegate (9), and parallel isolation (10) — on one realistic task. The coach grades the **judgment**
> most of all.

## Scenario

You're working in the practice sandbox (**`sandbox/`**). The `scripts/orchestrate.py` scaffold is
sitting there — a fan-out → reduce → synthesize skeleton with `workers()`, `run_worker()`, and
`synthesize()` stubs. `BACKLOG.md` lists candidate features (`--version`, reject-empty, due dates,
tags, persistence, priorities, "search history"). Choose **one** path (doing both is fine):

- **Path A — orchestrate:** pick **2–3 genuinely independent** BACKLOG features (e.g. an audit of how
  each would land, or a multi-angle analysis of each), **adapt `scripts/orchestrate.py`** to fan a
  scoped subagent over them, reduce/verify the summaries, and synthesize one result your own context
  sees.
- **Path B — refuse:** look hard at the work and decide it doesn't earn an orchestra (the features are
  coupled, too small, or the multiplier isn't worth it). Do it the right way instead, then write
  `sandbox/DECISION.md` explaining the call.

## Your constraints (these are the point)

1. **Diagnose scale and coupling first** — are these features parallel and high-value enough to
   orchestrate, or coupled/small enough that one session wins? State the call and the reasoning.
2. **If orchestrating:** scope and **test the prompt on a small sample** before fanning out; use a
   **fan-out → reduce → synthesize** shape with a **verify step** (e.g. adversarial verify); keep your
   own context seeing only the synthesis.
3. **Budget for cost** — acknowledge the ~15× token multiplier and confirm the value justifies it.
4. **If refusing:** show what one good session / a few worktrees produced, and name the conflicts or
   waste orchestration would have caused — capture it in `sandbox/DECISION.md`.
5. **Stay the executor** — checkpoints throughout; you own the final synthesis or the final review.
6. **Closed a verify loop is required to pass.** As the capstone, dimension 4 (Closed a verify loop)
   must be **solid** — a real verify pattern on the fan-out, or a verified result on the refuse path.

## Done when (the proof-of-work floor)

One of the two artifacts exists in the sandbox and is checkable:

- **Path A:** your adapted `scripts/orchestrate.py` ran a scoped fan-out over 2–3 BACKLOG features and
  produced a **synthesized result** (a reduced, verified summary — not raw per-agent dumps). Show the
  adapted script in `git -C sandbox diff` and the synthesized output.
- **Path B:** `sandbox/DECISION.md` exists with the reasoning (coupling/scale/value/cost) for *not*
  orchestrating, plus what you did instead. Check: `git -C sandbox status` shows `DECISION.md`.

Either artifact passes — the "done when" is whichever one results from your call.

## What to bring back to the coach

- Your orchestrate-vs-not call and the reasoning (coupling, scale, value, cost).
- If you orchestrated: the four-stage design, your small-sample scoping step, and the verify pattern.
- If you refused: what you did instead and the waste you avoided (your `DECISION.md`).
- One sentence: how did this capstone pull together earlier modules (planning, context, verify,
  delegate, parallel)?

## How you're graded

On the five dimensions in `scorecard.md`, but this capstone weighs **judgment across all of them** —
especially **Planned before acting** (orchestrate-vs-not + scoping) and **Closed a verify loop**
(verify panels / verified result), which **must be solid to pass**. The mark of graduation: knowing
when one good session beats an orchestra.
