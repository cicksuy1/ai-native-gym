# Scorecard — Module 4 (`planning`)

The coach grades **how you drove the agent**, not whether the feature merely works. Five dimensions,
each `solid` / `partial` / `missing`. Pass bar: every dimension *attempted*, **≥ 3/5 solid**, plus a
cold-recall answer. Weak dimensions are logged as "keep drilling" — they never block the pass.

Emphasis this module: **Planned before acting** (the whole point) and **Closed a verify loop** (your
plan should have built verification in). From module 3 on, **dimension 4 (Closed a verify loop) is
required-solid to pass** — a strong plan-vs-act call still fails if you never ran the check.

| # | Dimension | What `solid` looks like *here* |
|---|---|---|
| 1 | **Planned before acting** ⭐ | Explored read-only in `plan` mode; produced a written multi-step plan; **improved it before approving**; the plan-vs-act call was correct for the task's size. |
| 2 | **Engineered context** | Told the agent *which* files to read rather than dumping everything; kept the planning context focused. |
| 3 | **Delegated & isolated well** | `attempted` = recognized whether a subagent/worktree was warranted (usually not for one feature) and said why. |
| 4 | **Closed a verify loop** ⭐ | The plan named a concrete pass/fail check; you actually ran it and read the result. |
| 5 | **Reviewed & stayed the executor** | Reviewed the diff *against the plan*; caught/flagged any drift; committed from a clean state. |

## Coach notes (filled at grading)

- Scorecard: P __ · C __ · D __ · V __ · R __
- Cold recall asked: __________ → __________
- Spaced re-quiz (earlier module): __________ → __________
- Keep drilling: __________
- Verdict: ⬜ pass (≥3/5 solid, recall answered, coach-confirmed) / ⬜ another rep
