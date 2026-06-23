# Scorecard — Module 6 (`ship-feature`) — integration project

A **project** scorecard: it spans the Part-II principles and wants them *all working together*. Each
dimension `solid` / `partial` / `missing`. Pass bar: every dimension *attempted*, **≥ 3/5 solid**,
plus a cold-recall answer about integration. Unlike a single-principle module, here a string of
`solid`s across P·C·V·R is the real target — one brilliant move with three skipped is *not* a pass-
quality drive (though it still passes leniently if ≥ 3/5; the coach flags the gaps as "keep drilling").
Because this is a verify-heavy module (n ≥ 3), **dimension 4 (Closed a verify loop) is required-solid
to pass** — a `partial` or `missing` there blocks the pass regardless of the other four.

| # | Dimension | What `solid` looks like *here* |
|---|---|---|
| 1 | **Planned before acting** ⭐ | Explored read-only; approved multi-step plan; wrote a real contract/spec with graduated boundaries before code. |
| 2 | **Engineered context** ⭐ | Executed in a *fresh* session holding the plan/spec, not the exploration mess; pointed at the right files; compacted if needed. |
| 3 | **Delegated & isolated well** | `attempted` = judged whether any part warranted a subagent/worktree (often not for one feature) and said why. |
| 4 | **Closed a verify loop** ⭐ | Plan/spec named a runnable, behavior-asserting check; the agent iterated to green on its own. |
| 5 | **Reviewed & stayed the executor** ⭐ | Clean git + checkpoints; reviewed the diff against the plan; you decided it ships. |

## Coach notes (filled at grading)

- Scorecard: **P __** · **C __** · D __ · **V __** · **R __**
- Cold recall asked (integration): __________ → __________
- Spaced re-quiz (earlier module): __________ → __________
- Weakest habit under integration → module to re-drill: __________
- Verdict: ⬜ pass (≥3/5 solid, recall answered, coach-confirmed) / ⬜ another rep
