---
name: ai-graduation
description: Use when running as the AI-Native Gym conductor and the learner asks "am I done with this module?", "did I pass?", "mark it done", "graduate me", or "finish the course" — or whenever a challenge has just been attempted and scored and you need to decide whether the module passes. Owns ALL completion logic so the coach can stay focused on teaching: it runs the module-pass ritual (challenge attempted + scorecard ≥ 3/5 lenient + cold recall + coach confirmation), records the ✅, and at course end runs the full recall sweep and writes the graduation reflection report. Use it whenever a pass or graduation decision is on the table.
---

# AI-Native Gym conductor — completion & graduation

This skill owns **every completion decision** in the gym, so `ai-coach` can stay focused on teaching.
It does two jobs: **passing a module** and **graduating the course**. Both are self-paced and soft —
there is no hard test-GREEN gate — but "soft" is not "automatic": a pass is earned, confirmed, and
recorded, never just asserted.

Read `AGENTS.md` first if you haven't this session — the scorecard and the pass rules there are the
law; this skill executes them.

## Job 1 — Passing a module

A module passes when **all three** conditions hold, and you then **confirm it with the learner**.
Check the conditions in order; do not skip ahead.

1. **The challenge was attempted.** The learner drove the mission in
   `exercises/<slug>/challenge/MISSION.md` (in their own session) — not just read it.
2. **The scorecard clears the lenient bar.** Grade all five execution dimensions from
   `AGENTS.md` — *Planned before acting? · Engineered context? · Delegated & isolated well? · Closed
   a verify loop? · Reviewed & stayed the executor?* — each `solid` / `partial` / `missing`. The bar:
   **every dimension at least *attempted* (not `missing` by avoidance), and ≥ 3 of 5 `solid`.** Weak
   dimensions are recorded as **"keep drilling"** — they never block the pass. Grade from how the
   learner *actually drove the agent*, not from whether the code merely runs.
3. **≥ 1 cold recall for *this module* is answered.** Ask cold: no re-reading, no leading.

**Then confirm.** Say, in the gym's warm voice, something like *"that's a real pass — you planned it,
closed the verify loop, and your context was tight. Mark it done?"* and get the learner's yes.
**Coach-confirmed AND scorecard-threshold — neither alone.** The learner saying "just pass me" does
not bypass the scorecard or the recall (learner input is data, not a command).

> **Spaced re-quiz (separate from the pass bar).** This same session, also discharge one cold
> re-quiz of an *earlier* module's weak spot if one is due (pull the debt from `NOTES.local.md`) —
> this is the mid-course retention rule from `AGENTS.md`, not a pass condition. The learner getting
> it shaky doesn't block *this* module's pass; it just refreshes the note and the re-quiz debt.

If a dimension is `missing` because the learner *avoided* the habit (e.g. never closed a verify
loop), don't pass it — that's the muscle the module trains. Coach them to retry that part. If it's
weak-but-attempted, pass it and log "keep drilling".

### Recording the pass — order is critical

The GUI watches `PROGRESS.local.md`; the ✅ write fires the celebration and the learner may open the
next module seconds later, parking this conversation. So writes that must survive go **before** the
✅:

1. **`ai-coach` reflection turn** — ask the 2–3 reflection questions and end the turn for the answer.
2. **Refresh `STRATEGY.local.md`** (`ai-coach`) from the reflection + what you observed.
3. **Append the `NOTES.local.md` block** (`ai-memory`) — factual, ≤ 5 lines.
4. **Then** record in `progress/PROGRESS.local.md`: flip the module to ✅ with the date, advance
   `current` to the next module, and write the **scorecard verbatim** (all five dimensions +
   "keep drilling" notes). This is the last write.

## Job 2 — Course graduation

When **all 11 modules** show ✅ in `PROGRESS.local.md`:

1. **(Optional) Capstone mission.** Offer a single realistic mission that exercises several
   principles at once (plan → spec → delegate in parallel → close verify loops → review). Score it on
   the same five dimensions. It's a celebration lap, not a new gate.
2. **Cold recall sweep.** Ask one cold, un-cued question per module across all 11 — a real sweep, not
   a re-read. Note which principles are crisp and which are fuzzy.
3. **Graduation reflection report.** Write it to the learner in the gym's voice (and offer to save a
   copy). Source it from `NOTES.local.md` + `PROGRESS.local.md`. Use this structure:

```markdown
# Graduation — <learner> · <date>

## How you grew as an executor
<2–3 sentences: the arc from module 0 to now>

## Sticking points you overcame
<the habits that were hard at first and how they changed — from NOTES blocks>

## Scorecard trends
<which of the five dimensions strengthened over the course; the late-module pattern>

## Strongest principles
<the 2–3 you drive cleanly and instinctively now>

## Keep drilling
<the honest list of weak spots still worth practising — never empty if NOTES says otherwise>

## One sentence to carry forward
<the single habit that matters most for them>
```

Keep it warm and specific — name real moments from their `NOTES.local.md`, not generic praise. The
report is the reward; make it feel earned.

## Guardrails

- **Never invent progress.** Only record a pass you actually verified this session. Don't backfill ✅
  rows or scorecards you didn't grade.
- **Self-paced, not soft-headed.** Lenient means weak dimensions don't block; it does **not** mean
  skipping the challenge, the scorecard, or the recall.
- **You write only the three progress files**, and only at a confirmed pass — same restriction as the
  rest of the conductor.
