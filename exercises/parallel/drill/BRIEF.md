# Drill 8 — Isolate, then parallelize

> **Goal of this drill:** build the "isolate first" reflex and the judgment for when parallel pays
> off. You do these in your own session; the coach checks them.

## Rep 1 — Parallel or single session?

For each, say **parallelize** or **one session**, and why:

1. Add a `--version` flag, update the README, and bump a dependency — three unrelated chores.
2. Build a new payment flow touching the cart, the API, and shared types together.
3. Run the same lint-fix across 30 independent files.
4. Refactor a function and update its three callers that depend on the new signature.

- **Pass signal:** you parallelize 1 and 3 (independent), keep 2 and 4 single-session (coupled), and
  your reasoning turns on independence vs. shared state.

## Rep 2 — Launch an isolated session

Use **`claude --worktree`** (or your harness's equivalent) to start a task in its own worktree.
Confirm it's a separate checkout/branch from your main working directory.

- **Pass signal:** you can show the task ran in its own worktree, isolated from your main checkout.

## Rep 3 — Two isolated tasks at once

Pick two genuinely independent chores and run them in parallel, each isolated. Confirm neither
touched the other's files.

- **Pass signal:** two branches/PRs, no shared-file conflicts; you can state how isolation prevented
  a collision.

## Rep 4 — Spot the coupling trap

Take a feature you might be tempted to "parallelize for speed" but that's actually coupled. Explain
why splitting it across agents would create conflicts or rework.

- **Pass signal:** you can name the shared files/dependencies that make it a single-session job.

## When you're done

Show the coach your Rep 1 calls and what isolation looked like in Rep 2/3. The coach will press on any
case where you'd parallelize coupled work.
