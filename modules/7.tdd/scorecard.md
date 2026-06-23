# Scorecard — Module 7 (`tdd`)

The coach grades **the discipline of the test-first loop**, not whether the feature merely works.
Five dimensions, each `solid` / `partial` / `missing`. Pass bar: every dimension *attempted*,
**≥ 3/5 solid**, plus a cold-recall answer. Weak dimensions are logged as "keep drilling".

Emphasis this module: **Closed a verify loop** (tests-first is the loop in its sharpest form).
Because this is a verify-heavy module (n ≥ 3), **dimension 4 (Closed a verify loop) is
required-solid to pass** — a `partial` or `missing` there blocks the pass regardless of the rest.

| # | Dimension | What `solid` looks like *here* |
|---|---|---|
| 1 | **Planned before acting** | Decided the behaviors and edge cases the tests must cover before writing them. |
| 2 | **Engineered context** | Gave the agent the requirements + test file, kept the loop's context tight. |
| 3 | **Delegated & isolated well** | `attempted` = considered whether a separate writer/reviewer split helped, and reasoned about it. |
| 4 | **Closed a verify loop** ⭐ | Tests written **first**, confirmed **red for the right reason**, committed, then code driven to green **with tests untouched** (`git diff` proves it). |
| 5 | **Reviewed & stayed the executor** | Confirmed the tests assert real behavior (not tautologies); reviewed the green result knowingly. |

## Coach notes (filled at grading)

- Scorecard: P __ · C __ · D __ · **V __** · R __
- Cold recall asked: __________ → __________
- Spaced re-quiz (earlier module): __________ → __________
- Keep drilling: __________
- Verdict: ⬜ pass (≥3/5 solid, recall answered, coach-confirmed) / ⬜ another rep
