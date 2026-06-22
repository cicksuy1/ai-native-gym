# Challenge 3 — Ship a feature from a contract

> **The mission:** take a feature big enough to warrant a spec through interview → `SPEC.md` →
> fresh-session implementation. The coach grades how well you turned a wish into a contract and
> handed it off cleanly.

## Scenario

Choose a feature that genuinely has implicit requirements — something where a naive one-liner would
make the agent guess. Examples: an export/import feature, a notification system, a new
auth-protected resource, a configurable background job. If you lack a codebase, clone a small project
and add such a feature.

## Your constraints (these are the point)

1. **Interview first.** In plan mode, have the agent interview you (or interview yourself in writing)
   to surface events, inputs, edge cases, failure behavior, and explicit out-of-scope.
2. **Write a self-contained `SPEC.md`** — scope, the contract details, a **graduated boundaries**
   block (always / ask-first / never), and a **verification** section naming how "done" is checked.
3. **Hand off in a fresh session.** `/clear`, then implement from `SPEC.md` **one section at a
   time** — don't dump the whole spec as a single instruction.
4. **Stay the executor.** Review each section's output against the spec; if the agent drifted from
   the contract, point to the spec, not your memory.

## What to bring back to the coach

- The `SPEC.md` you wrote (or its outline), highlighting one assumption the interview surfaced.
- Your graduated-boundaries block.
- Confirmation you implemented from a *fresh session*, section by section.
- One sentence: which gap in the spec, if left implicit, would have produced a wrong implementation?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Planned before acting** (the spec
*is* the plan, matured into a contract) and **Engineered context** (the fresh-session, one-section-
at-a-time handoff). **Closed a verify loop** matters too — your spec should have named the check.
