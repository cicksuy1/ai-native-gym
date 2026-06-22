# Challenge 1 — Drive two tasks on a clean desk

> **The mission:** complete two genuinely unrelated tasks in one sitting while keeping the agent's
> context deliberately clean between and within them. The coach grades how you *managed the window*,
> not the code.

## Scenario

Pick **two unrelated** small tasks in a codebase you have — e.g. fix a bug in module A, then add a
small feature in an unrelated module B. The whole point is that they don't share context, so carrying
A's clutter into B is pure noise.

## Your constraints (these are the point)

1. **Start each task on a clean desk.** Use `/clear` when moving from task A to task B so B begins
   with only its relevant context.
2. **Feed the right tokens, not the most.** For each task, point the agent at the specific files it
   needs (or let it retrieve them just-in-time) rather than dumping the whole repo.
3. **Steer a compaction if a task runs long.** If either task fills the window, use
   `/compact <focus>` with an explicit focus rather than letting it auto-summarize blindly.
4. **Notice the memory layer.** If you hit a rule the agent kept forgetting, identify whether it
   belongs in CLAUDE.md (always-on) or an on-demand skill — and say which.

## What to bring back to the coach

- The two tasks and confirmation you `/clear`ed between them.
- For each, how you scoped the context (which files, or just-in-time retrieval).
- Any `/compact` you steered and what focus you gave it.
- One sentence: what would have gone wrong if you'd run both tasks in one un-cleared conversation?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted hardest on **Engineered context** — a `solid`
means you kept each task's window high-signal: cleared between unrelated work, scoped files
deliberately, and steered any compaction instead of drowning.
