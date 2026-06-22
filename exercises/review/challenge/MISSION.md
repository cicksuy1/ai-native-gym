# Challenge 6 — Let it run, then review with judgment

> **The mission:** let the agent build something to ~80% autonomously from a clean git state, then
> review the result with fresh eyes and refine. The coach grades how you reviewed and stayed in
> command — not the feature.

## Scenario

Pick a task meaty enough that the agent can run for a while on its own (a small feature with a few
moving parts, ideally with tests as a Module-4 signal). You'll deliberately give it rope, then bring
judgment to the result.

## Your constraints (these are the point)

1. **Start from a clean git state.** Confirm `git status` is clean before you begin.
2. **Let it run to ~80%**, then have it commit a **checkpoint** and stop for review. Don't
   micromanage every edit.
3. **Review with fresh eyes.** Use a separate reviewer (subagent or cleared session that didn't write
   it) to evaluate the **diff against the criteria** — design, security, scope creep, files it
   shouldn't have touched. Read the diff yourself too.
4. **Refine, then capture a rule.** Fix what review surfaced; turn at least one recurring issue into a
   CLAUDE.md rule.
5. **Stay the executor.** You decide what merges. Green tests are not a merge button.

## What to bring back to the coach

- Confirmation of the clean-git start and the checkpoint commit.
- What your fresh-context review caught that the tests/green didn't.
- The rule you added to CLAUDE.md.
- One sentence: where were you tempted to rubber-stamp, and what made you look closer?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Reviewed & stayed the executor** — a
`solid` means clean git + checkpoint, a genuine fresh-eyes review of the diff, and a refine-and-
capture loop, with you (not the green check) deciding what ships.
