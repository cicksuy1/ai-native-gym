# Challenge 0 — Drive a small change, gears and all

> **The mission:** take one real, small task through the full harness loop, making every mode choice
> deliberately. This isn't about the code being impressive — it's about *how you drove*. The coach
> watches your driving, not your diff.

## Scenario

Work on the practice sandbox (**`sandbox/`** — set it up once with `task setup-sandbox`). Your task:
**fix the typo'd "querry" in the `find` no-match message in `cli.py`.** Right now `find` with no
matches prints `No notes match that querry.` — correct the spelling. It's one word; the point isn't
the diff, it's *how you drive it* through the full harness loop.

## Done when (the proof-of-work floor)

- `git -C sandbox diff` shows the corrected word (`querry` → `query`) in `cli.py`.
- `python -m sandbox find zzz` prints the message spelled right.

## Your constraints (these are the point)

1. **Start in `plan` mode.** Explore the relevant code and confirm your understanding *before* any
   edit. Make zero edits in this phase.
2. **Choose your execution gear out loud.** Before you act, tell the coach which mode you're
   switching to and *why* it fits this task.
3. **Take the action**, then **close the loop**: state how you verified the change did what you
   intended (ran `python -m sandbox find zzz`? read the `git -C sandbox diff`? reran a command?) —
   even if the verification is just "I read the one-line diff and it's correct."
4. **Stay the executor.** You approve the change knowingly. No blind auto-accept.

## What to bring back to the coach

- A one-line description of the task.
- Which mode you used for each phase, and your reason for the execution-gear choice.
- How you verified the result.
- One sentence on what driving deliberately felt like vs. how you'd normally have done it.

## How you're graded

On the five execution dimensions in `scorecard.md` — most heavily on **Planned before acting**
(did you explore in plan mode first?) and **Reviewed & stayed the executor** (did you approve
knowingly and verify?). A clean pass here is small but real: you drove the loop on purpose.
