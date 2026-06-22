# Challenge 2 — Plan a real multi-file feature, then drive it

> **The mission:** take a feature that genuinely spans multiple files through Explore → Plan → Code →
> Commit. The win condition is a *plan you improved before any code was written*, and an
> implementation that followed it. The coach grades how you drove — especially the planning.

## Scenario

Choose a real feature in a codebase you have, big enough to touch **at least two or three files** and
where you're not 100% sure of the approach. Examples: add a new endpoint with validation; add a
config option that several modules read; add a small feature flag and gate behavior on it. If you
don't have a codebase handy, clone a small open-source project and add a genuinely useful small
feature.

## Your constraints (these are the point)

1. **Explore in `plan` mode first.** Tell the agent which files to read, tell it to **think hard**,
   and tell it **not to write code yet**. Get a written, multi-step plan.
2. **Improve the plan before approving.** Find at least one real thing to change in it — a wrong
   assumption, a missing edge case, a risky step ordering — and correct it with a sentence.
3. **Make the plan name its own verification.** Before you approve, ensure the plan ends with a
   concrete pass/fail check.
4. **Then implement**, following the approved plan, and **commit from a clean git state** so the work
   is checkpointed.
5. **Stay the executor** — review the diff against the plan; if the agent drifted, say so.

## What to bring back to the coach

- The task, and *why* it earned a plan (not a skip).
- The plan, and the specific improvement you made to it before approving.
- The verification step you required, and its result.
- One sentence: where would skipping the plan here have cost you?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Planned before acting** (a real
explore-then-plan, improved before code) and with **Closed a verify loop** now mattering for real —
your plan should have made verification part of the work, not an afterthought.
