# Challenge 10 — Run independent work in parallel, safely isolated

> **The mission:** take two genuinely independent chores on the sandbox, run each in its **own git
> worktree/branch** in parallel, and show you'd have *kept it a single session* if the work were
> coupled. The coach grades the isolation discipline and the parallel-vs-single judgment.

## Scenario

Work on the practice **sandbox** (`sandbox/`). Pick **two genuinely independent** chores — no shared
files, no ordering dependency. Good pair:

- **(a)** add a `count` subcommand to `cli.py` (prints how many notes exist), and
- **(b)** add a module-level docstring to `notes.py`.

These touch different files and neither needs the other's output — that independence is the whole
point. Run each in its own worktree/branch, in parallel, then review and merge each on its own merits.

## Your constraints (these are the point)

1. **Justify the parallelism.** State why these two chores are independent enough to parallelize (no
   shared files, no ordering dependency) — and contrast with one coupled task you'd deliberately
   *not* split.
2. **Isolate each worker.** Run each chore in its own git worktree/branch (`claude --worktree`, agent
   view, or `git worktree add`). No two workers share a checkout.
3. **Verify no collisions.** Confirm the parallel work produced separate branches with disjoint
   commits and no shared-file conflicts.
4. **Review each independently** and merge on its own merits, from a clean state.
5. **Stay the executor.** You decide what merges and in what order.

## Done when (the proof-of-work floor)

- **Two branches/worktrees exist with disjoint commits** — one branch carries the `count` subcommand
  (touching `cli.py`), the other carries the `notes.py` docstring — and they merge with **no conflict**
  because they share no files.
- Show it: `git -C sandbox branch` lists both branches; `git -C sandbox log --oneline --all` (or the
  per-branch diffs) shows the two commits touch disjoint files; merging both leaves a clean tree with
  no merge conflict.

To pass, **dimension 4 (Closed a verify loop) must be solid** — you independently verified each
result before merging, not just trusted it.

## What to bring back to the coach

- The two independent chores, and *why* they were safe to parallelize.
- How you isolated each (the worktree/branch mechanism you used).
- Confirmation of disjoint commits and no shared-file conflicts.
- One sentence: the coupled task you would *not* have parallelized, and why it wants one session.

## How you're graded

On the five dimensions in `scorecard.md`, weighted hardest on **Delegated & isolated well** — a
`solid` means correct parallel-vs-single judgment, real worktree isolation per worker, and no
collisions, with you deciding what merges.
