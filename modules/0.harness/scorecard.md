# Scorecard — Module 0 (`harness`)

The coach grades **how you drove the agent**, not whether the code merely works. Five dimensions,
each `solid` / `partial` / `missing`. Pass bar: every dimension *attempted*, **≥ 3/5 solid**, plus a
cold-recall answer. Weak dimensions are logged as "keep drilling" — they never block the pass.

For this first module the emphasis is on **Planned before acting** and **Reviewed & stayed the
executor** — the other three you'll grow into over later modules, so a `partial` there is expected
and fine.

| # | Dimension | What `solid` looks like *here* |
|---|---|---|
| 1 | **Planned before acting** ⭐ | Explored in `plan` mode first; understood the code before any edit; made the plan-vs-act call consciously. |
| 2 | **Engineered context** | Pointed the agent at the relevant file(s) rather than dumping the whole repo or asking blind. (Light touch this early.) |
| 3 | **Delegated & isolated well** | N/A-to-light for a solo small change — `attempted` = you recognized no subagent/worktree was needed and said so. |
| 4 | **Closed a verify loop** | Checked the change did what you intended — ran it, reread the diff, or reran a command — instead of assuming. |
| 5 | **Reviewed & stayed the executor** ⭐ | Chose each mode deliberately; approved the edit knowingly; no blind auto-accept. |

## Coach notes (filled at grading)

- Scorecard: P __ · C __ · D __ · V __ · R __
- Cold recall asked: __________ → __________
- Keep drilling: __________
- Verdict: ⬜ pass (≥3/5 solid, recall answered, coach-confirmed) / ⬜ another rep
