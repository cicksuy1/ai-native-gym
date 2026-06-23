# Warm-up 10 — Isolate, then parallelize

> **Ungraded warm-up** — quick reps to wire the "isolate first" reflex before the challenge. Do them
> in your own session; Reps 2–4 use the practice sandbox (**`sandbox/`**). The coach checks them; this
> warm-up doesn't hit the proof-of-work floor — only the challenge does.

## Rep 1 — Parallel or single session?

For each, say **parallelize** or **one session**, and why:

1. Add a `count` subcommand to `cli.py`, and add a docstring to `notes.py` — two unrelated chores.
2. Build a persistence feature that touches `notes.py`, `cli.py`, and a new storage module together.
3. Run the same lint-fix across many independent files.
4. Add a `--version` flag and then update the help text that mentions it.

- **Pass signal:** you parallelize 1 and 3 (independent), keep 2 and 4 single-session (coupled), and
  your reasoning turns on independence vs. shared state.

## Rep 2 — Launch an isolated checkout (on the sandbox)

In `sandbox/`, create a worktree on its own branch — `git -C sandbox worktree add ../sb-count -b chore-count`
(or `claude --worktree`). Confirm it's a separate checkout/branch from your main sandbox directory.

- **Pass signal:** you can show the chore ran in its own worktree, isolated from the main `sandbox/`
  checkout.

## Rep 3 — Two isolated chores at once (on the sandbox)

Run the two independent chores in parallel, each isolated: branch `chore-count` adds the `count`
subcommand to `cli.py`; branch `chore-docstring` adds a docstring to `notes.py`. Confirm neither
touched the other's file.

- **Pass signal:** two branches, disjoint commits, no shared-file conflicts; you can state how
  isolation prevented a collision.

## Rep 4 — Spot the coupling trap (on the sandbox)

Name a sandbox feature you might be tempted to "parallelize for speed" but that's actually coupled —
e.g. persistence, where `cli.py` and `notes.py` change together. Explain why splitting it across
workers would create conflicts or rework.

- **Pass signal:** you can name the shared files/dependencies that make it a single-session job.

## When you're done

Show the coach your Rep 1 calls and what isolation looked like in Reps 2–3. The coach will press on any
case where you'd parallelize coupled work.
