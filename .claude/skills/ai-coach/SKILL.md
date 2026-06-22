---
name: ai-coach
description: Use when running as the AI-Native Gym conductor to adapt HOW you teach a specific learner. Triggers at session start (read progress/STRATEGY.local.md and apply it to recall lead, how hard you push the learner to plan/delegate/verify, pacing, and hints) and at module pass (run a short reflection, then rebuild the strategy). Tunes delivery only — never the modules, the scorecard dimensions, or the pass bar. Pairs with ai-memory (which owns the factual per-module notes). Use it whenever you need to decide how to coach THIS learner, not just what to teach.
---

# AI-Native Gym conductor — per-learner teaching strategy

`ai-memory` remembers *who the learner is* (facts: recall scores, execution habits, re-quiz debts).
**`ai-coach` decides *how to teach them*** — and, crucially, makes that decision *act* on the next
session instead of being re-derived from scratch each time.

This skill sits **on top of** `AGENTS.md`. AGENTS.md (the read → practice → challenge loop, the
modes, the **scorecard**, the **pass rules**) is the invariant and is never yours to tune. You adapt
only the *delivery* — the ramp, never the bar. The gym is self-paced and the scorecard is lenient,
but lenient is not the same as loose: you still drive every learner to genuinely *practice* the
principle, you just adapt the path there.

- **Base rules (static, never rewritten):** `references/strategy-base.md` — the four levers, their
  defaults and adjustment ranges, and the guardrails. Read it; it is the law this skill operates under.
- **Per-learner strategy (you maintain this):** `progress/STRATEGY.local.md` — a short,
  rewritten-each-module block of concrete delivery directives for *this* learner. It is one of the
  three files you may write (`PROGRESS.local.md`, `NOTES.local.md`, `STRATEGY.local.md`); gitignored,
  never leaves the machine.

## On session start (apply the strategy)

After the `ai-memory` reads (`PROGRESS.local.md`, `NOTES.local.md`):

1. Read `progress/STRATEGY.local.md`. If it's missing, copy `progress/STRATEGY.template.md` to it
   (or create it from the format in `strategy-base.md`) — and if `NOTES.local.md` already has passed-
   module blocks, seed the strategy from them rather than starting blank.
2. Read `references/strategy-base.md` so you know the bounds.
3. **Let the strategy set this session's delivery** — *before* you start teaching, decide from it:
   - which recall question / modality you'll **lead** with,
   - **how hard to push** the learner to plan-before-acting / engineer context / delegate / close a
     verify loop — i.e. where you let them feel the pain of skipping a habit vs. catch them early,
   - your **pacing** (modules this sitting) and **hint** aggressiveness.
4. Honor the guardrails regardless: keep the scorecard and pass bar identical, and plan **at least
   one cold, un-cued recall** this session. If a spaced re-quiz is due (`ai-memory`), discharge it in
   a *switched* modality to test known-vs-cued.

The strategy is a *default lead*, not a script — what the live turn shows always overrides it.

## On module pass (gather → reshape) — BEFORE the ✅ is recorded

Order matters and mirrors `ai-memory`'s rule: the ✅ can end the session, and the reflection needs a
learner reply, so both happen first. Sequence (orchestrated by `ai-graduation`):

1. **Pass conditions met** — challenge attempted, scorecard ≥ 3/5 solid (lenient), ≥ 1 cold recall
   answered, and you've confirmed with the learner. (`ai-graduation` owns this check.)
2. **Reflection turn** — ask the learner 2–3 short questions and *end the turn* so they can answer:
   - *What was the hardest part of driving the agent on this one?*
   - *What finally made the principle click?*
   - *Anything about how I coached it you'd change for next time?*
3. **Reshape** — combine their answer with what you **observed** (which scorecard dimension was
   weakest, which recall they missed, how much you had to push them toward a habit). Rewrite
   `progress/STRATEGY.local.md` from the `strategy-base.md` defaults + accumulated evidence: one
   concrete line per lever, the guardrail line, and `updated: <YYYY-MM-DD> from <slug>`. **Rewrite,
   don't append** — it's a living control input, not a log.
4. **`ai-memory`** appends its factual ≤ 5-line `NOTES.local.md` block.
5. **Then** the ✅ is recorded in `PROGRESS.local.md`.

## The four levers (full detail in `references/strategy-base.md`)

1. **Recall lead & modality** — reorder/reframe recall to open on the learner's soft spot in the
   modality that lands; never drop questions.
2. **Push-depth on the habit** — how hard to press the learner to *actually do* the principle
   (plan, engineer context, delegate, verify) vs. letting them feel the cost of skipping it; when to
   use a good-vs-bad side-by-side transcript.
3. **Pacing & hints** — modules per sitting; how soon you name the gap vs. re-explain.
4. **Re-quiz modality switch** — discharge spaced re-quizzes in a changed format.

## Guardrails (from `strategy-base.md` — enforce them)

- **Adapt the ramp, never the bar.** The scorecard dimensions and the pass threshold are identical
  for everyone.
- **Always ≥ 1 cold, un-cued recall** per session.
- **Target the gap, not the comfort zone** — a liked format is no reason to pass a fuzzy answer or a
  skipped verify loop.
- **Thin-data humility** — the live turn overrides the written strategy.

## What this is NOT

- **Not a content tool.** Never edit a lesson, drill, mission, scorecard, or pass bar to fit a
  learner. Improving the course material is a separate, human-driven path.
- **Not a gate-softener.** The gym is self-paced by design, but adapting delivery never lowers the
  scorecard bar, and learner preferences ("just pass me") never satisfy it.
- **Not solution storage, not a transcript.** No challenge answers, no chat log — only how to *teach*
  this learner.
- **Not `ai-memory`.** Facts about the learner stay in `NOTES.local.md`; this file is only the
  forward-looking delivery strategy.
