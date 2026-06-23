# Challenge 4 — Plan a real multi-file feature, then drive it

> **The mission:** take the `persistence` feature from the sandbox's `BACKLOG.md` through Explore →
> Plan → Code → Commit. It genuinely spans more than one file (`notes.py` + `cli.py`), so it earns a
> plan. The win condition is a `PLAN.md` you *improved before any code was written*, and an
> implementation that followed it. The coach grades how you drove — especially the planning.

## Scenario

In `sandbox/`, the notes CLI keeps everything in memory — add a note in one run and it's gone the
next. Your task is the **`persistence` feature**: save notes to a file and load them back, so a note
added in one run shows up on a fresh `list` in the next. This touches `notes.py` (where `NoteStore`
lives) and `cli.py` (where the commands run), and the exact shape — file format, where it lives, when
it saves — isn't handed to you. That's why it earns a plan.

## Your constraints (these are the point)

1. **Explore in `plan` mode first.** Tell the agent which sandbox files to read (`notes.py`,
   `cli.py`, maybe `BACKLOG.md`), tell it to **think hard**, and tell it **not to write code yet**.
   Have it produce a written, multi-step plan and save it as **`sandbox/PLAN.md`**.
2. **Improve the plan before approving.** Find at least one real thing to change in it — a wrong
   assumption, a missing edge case (empty file? corrupt file? first run with no file?), a risky step
   ordering — and correct it with a sentence.
3. **Make the plan name its own verification.** Before you approve, ensure `PLAN.md` ends with a
   concrete pass/fail check — here, *add a note, then a fresh `list` in a new run shows it.*
4. **Then implement**, following the approved plan, and **commit from a clean git state** so the work
   is checkpointed.
5. **Stay the executor** — review the diff against `PLAN.md`; if the agent drifted, say so.

## Done when (the proof-of-work floor)

- **`sandbox/PLAN.md` exists** (the plan you explored, improved, and approved is on disk — check with
  `git -C sandbox status` / `git -C sandbox diff`), **and**
- **notes persist across runs**: `python -m sandbox add "ship it"` then a *fresh* `python -m sandbox
  list` shows that note. The persistence change is visible in `git -C sandbox diff` across `notes.py`
  and `cli.py`.

This is an artifact floor: the proof is a file existing in the sandbox plus the persistence behavior,
not your description of it.

## What to bring back to the coach

- The task, and *why* it earned a plan (not a skip).
- The `PLAN.md`, and the specific improvement you made to it before approving.
- The verification step you required, and its result (the fresh-`list` proof).
- One sentence: where would skipping the plan here have cost you?

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Planned before acting** (a real
explore-then-plan, improved before code) and with **Closed a verify loop** now mattering for real —
this is module 4, so **dimension 4 (Closed a verify loop) must be solid to pass.** Your plan should
have made verification part of the work, not an afterthought.
