# Challenge 5 — Turn a wish into a contract

> **The mission:** take the underspecified **"search history"** feature from the sandbox's
> `BACKLOG.md` through interview → `SPEC.md`. This is a *spec-only* challenge — no implementation
> required. The coach grades how well you turned a vague wish into a contract a fresh agent could
> build from without guessing.

## Scenario

In `sandbox/`, `BACKLOG.md` lists a feature called **"search history"** with almost nothing behind
it. That vagueness is the point: a naive one-liner would make the agent guess everything — does it
remember past `find` queries? how many? where are they stored? can you re-run or clear them? does it
survive across runs? Your job is to do the senior-engineer thinking *up front* and write it down as a
contract, so those guesses never happen.

You are **not** implementing the feature. You are producing the spec.

## Your constraints (these are the point)

1. **Interview first.** In plan mode, have the agent interview you (or interview yourself in writing)
   to surface what "search history" actually means: the events, the inputs, the edge cases, the
   failure behavior, and what's explicitly out of scope for v1.
2. **Write a self-contained `sandbox/SPEC.md`** — scope, the contract details, a **graduated
   boundaries** block (always / ask-first / never), and an **acceptance / verification** section
   naming how "done" would be checked once someone builds it.
3. **Make it buildable cold.** A fresh agent with only `SPEC.md` and the sandbox should be able to
   implement it without coming back to ask you what you meant.
4. **Stay the executor.** Review the spec the agent drafts against what you actually decided in the
   interview; if it invented a requirement you didn't agree to, point it back to your answers.

## Done when (the proof-of-work floor)

- **`sandbox/SPEC.md` exists** with a **boundaries/acceptance section** — a self-contained contract
  for "search history" including a graduated-boundaries block and an acceptance/verification section.
  Check with `git -C sandbox status` / `git -C sandbox diff`.

This is an artifact floor: the proof is the `SPEC.md` file existing in the sandbox, not your
description of it. No implementation is required to pass.

## What to bring back to the coach

- The `SPEC.md` you wrote (or its outline), highlighting one assumption the interview surfaced that a
  one-liner would have left the agent guessing.
- Your graduated-boundaries block.
- One sentence: which gap in the spec, if left implicit, would have produced a wrong implementation?

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Planned before acting** (the spec
*is* the plan, matured into a contract) and **Engineered context** (the interview-then-write handoff
that keeps the contract clean). This is module 5, so **dimension 4 (Closed a verify loop) must be
solid to pass** — here that means your spec names a concrete acceptance check, even though you don't
run it.
