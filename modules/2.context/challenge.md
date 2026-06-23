# Challenge 2 — Drive two tasks on a clean desk

> **The mission:** complete two genuinely unrelated tasks on the practice sandbox in one sitting,
> keeping the agent's context deliberately clean between them. The coach grades how you *managed the
> window*, not the code.

## Scenario

Work on the practice sandbox at **`sandbox/`** (the tiny notes CLI). Do **two unrelated** cosmetic
edits in a single session, with a hard reset between them:

- **(a)** Improve the **empty-list message** in `cli.py` — what `list` prints when there are no notes.
- **(b)** Clarify a **docstring** in `notes.py`.

They touch different files and share no context, so carrying (a)'s clutter into (b) is pure noise —
which is exactly the point. Run the CLI with `python -m sandbox <cmd>` from the repo root.

## Your constraints (these are the point)

1. **Start each task on a clean desk.** Use `/clear` when moving from task (a) to task (b) so (b)
   begins with only its relevant context.
2. **Feed the right tokens, not the most.** For each task, point the agent at the specific file it
   needs (`cli.py` for (a), `notes.py` for (b)) rather than dumping the whole sandbox.
3. **Steer a compaction if a task runs long.** If either task fills the window, use
   `/compact <focus>` with an explicit focus rather than letting it auto-summarize blindly.
4. **Notice the memory layer.** If you hit a rule the agent kept forgetting, identify whether it
   belongs in CLAUDE.md (always-on) or an on-demand skill — and say which.

## Done when (the proof-of-work floor)

- `git -C sandbox diff` shows **both** edits — the improved empty-list message in `cli.py` **and** the
  clarified docstring in `notes.py`.
- You can show the coach you **`/clear`ed between** the two tasks (the desk was reset, not carried
  over).

## What to bring back to the coach

- The two edits and confirmation you `/clear`ed between them.
- For each, how you scoped the context (which file, or just-in-time retrieval).
- Any `/compact` you steered and what focus you gave it.
- One sentence: what would have gone wrong if you'd run both tasks in one un-cleared conversation?

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Engineered context** — a `solid`
means you kept each task's window high-signal: cleared between the unrelated edits, scoped the file
deliberately, and steered any compaction instead of drowning.
