# Challenge 10 — Orchestrate the right work, and refuse the wrong work

> **The mission (capstone):** make a real orchestration call at scale — either run a scoped
> fan-out→reduce→synthesize on genuinely parallel, high-value work, *or* deliberately decline to
> orchestrate a task that doesn't earn it and do it the right way instead. The coach grades the
> judgment most of all.

## Scenario

Choose one of two paths (or do both):

- **Path A — orchestrate:** find work that's genuinely parallel and high-value (a repo-wide audit, a
  many-file migration, a multi-angle research/analysis question). Run a scoped orchestration.
- **Path B — refuse:** take a task someone might over-orchestrate (a coupled feature, a fuzzy
  "improve the code") and deliberately do it as one good session or a few worktrees — and articulate
  *why* orchestration would have been wrong.

## Your constraints (these are the point)

1. **Diagnose scale and coupling first** — is this parallel and high-value enough to orchestrate, or
   coupled/small enough that one session wins? State the call and the reasoning.
2. **If orchestrating:** scope and **test the prompt on a small sample** before fanning out; use a
   **fan-out → reduce → synthesize** shape with a **verify step** (e.g. adversarial verify); keep your
   own context seeing only the synthesis.
3. **Budget for cost** — acknowledge the ~15× token multiplier and confirm the value justifies it.
4. **If refusing:** show what one good session / a few worktrees produced, and name the conflicts or
   waste orchestration would have caused.
5. **Stay the executor** — checkpoints throughout; you own the final synthesis or the final review.

## What to bring back to the coach

- Your orchestrate-vs-not call and the reasoning (coupling, scale, value, cost).
- If you orchestrated: the four-stage design, your small-sample scoping step, and the verify pattern.
- If you refused: what you did instead and the waste you avoided.
- One sentence: how did this capstone pull together earlier modules (planning, context, verify,
  delegate, parallel)?

## How you're graded

On the five dimensions in `SCORECARD.md`, but this capstone weighs **judgment across all of them** —
especially **Planned before acting** (orchestrate-vs-not + scoping) and **Closed a verify loop**
(verify panels / verified result). The mark of graduation: knowing when one good session beats an
orchestra.
