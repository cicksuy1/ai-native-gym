# Challenge 8 — Let it run, then review with judgment

> **The mission:** from a clean checkpoint, let the agent build the `tags` feature to ~80% on the
> practice sandbox, then review the result with fresh eyes and refine. The coach grades how you
> reviewed and stayed in command — not the feature.

## Scenario

Work in the practice sandbox (**`sandbox/`** — the tiny notes CLI). Your corner task: have the agent
implement **`tags`** for notes (let a note carry one or more tags, and let `list`/`find` work with
them) to about **~80%** autonomously, then bring judgment to the result. It's meaty enough to span a
few moving parts across `notes.py` and `cli.py` — give it rope, then review.

## Your constraints (these are the point)

1. **Start from a clean git state.** Confirm `git -C sandbox status` is clean before you begin.
2. **Let it run to ~80%**, then have it commit a **checkpoint** and stop for review. Don't
   micromanage every edit.
3. **Review with fresh eyes.** Use a separate reviewer (subagent or cleared session that didn't write
   it) to evaluate the **diff against the criteria** — design, security, scope creep, files it
   shouldn't have touched. Read the diff yourself too.
4. **Refine, then capture a rule.** Fix what review surfaced; turn at least one recurring issue into a
   new rule in **`sandbox/CLAUDE.md`**.
5. **Stay the executor.** You decide what merges. Green tests are not a merge button.

## Done when (the proof-of-work floor)

- There's a **checkpoint commit** in the sandbox you could revert to (visible in `git -C sandbox log`).
- `git -C sandbox diff` shows the **`tags`** change to the notes CLI.
- `sandbox/CLAUDE.md` has **one new rule bullet** tied to a real catch from your review.
- **Dimension 4 (Closed a verify loop) must be `solid` to pass** — review confirmed the result beyond
  what green proved.

## What to bring back to the coach

- Confirmation of the clean-git start and the checkpoint commit.
- What your fresh-context review caught that the tests/green didn't.
- The rule you added to `sandbox/CLAUDE.md`.
- One sentence: where were you tempted to rubber-stamp, and what made you look closer?

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Reviewed & stayed the executor** — a
`solid` means clean git + checkpoint, a genuine fresh-eyes review of the diff, and a refine-and-
capture loop, with you (not the green check) deciding what ships.
