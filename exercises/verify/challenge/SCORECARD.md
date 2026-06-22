# Scorecard — Module 4 (`verify`) ⭐

This is the spine module. The coach grades **how you drove the agent**, with the verify dimension
carrying the most weight. Five dimensions, each `solid` / `partial` / `missing`. Pass bar: every
dimension *attempted*, **≥ 3/5 solid**, plus a cold-recall answer — and for this module, **dimension
4 must be `solid` to pass**, because closing a verify loop *is* the lesson.

| # | Dimension | What `solid` looks like *here* |
|---|---|---|
| 1 | **Planned before acting** | Decided how to verify *before* generating; scoped the task so a runnable signal was possible. |
| 2 | **Engineered context** | Gave the agent the signal + the relevant code, not a vague wish; kept the loop's context tight. |
| 3 | **Delegated & isolated well** | `attempted` = recognized whether a fresh-context check/subagent helped (often not needed solo) and said why. |
| 4 | **Closed a verify loop** ⭐ **(must be solid)** | Supplied a real, *behavior-asserting* runnable signal up front; the agent ran it, read failures, and iterated to green on its own; you didn't hand-debug. |
| 5 | **Reviewed & stayed the executor** | Confirmed the signal proves the right thing (not a tautology); reviewed the verified result; committed from a clean state. |

## Coach notes (filled at grading)

- Scorecard: P __ · C __ · D __ · **V __** · R __  ← V must be solid
- Cold recall asked: __________ → __________
- Spaced re-quiz (earlier module): __________ → __________
- Keep drilling: __________
- Verdict: ⬜ pass (V solid, ≥3/5 solid overall, recall answered, coach-confirmed) / ⬜ another rep
