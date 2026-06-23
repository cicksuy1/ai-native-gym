# Challenge 1 — Your own first drive, unguided

> **The mission:** pick a small real task and drive it end-to-end through all five beats **on your
> own** — no checklist this time. The coach grades the *shape* of your drive, not the code.

## Scenario

Work on the practice sandbox (**`sandbox/`** — set it up once with `task setup-sandbox`). Your task:
**add a `--version` flag end-to-end.** The CLI already defines `VERSION` in `cli.py` but never wires
it up — make `python -m sandbox --version` print the version and exit 0. It's a small, real change
whose success you can *run* to confirm.

## Done when (the proof-of-work floor)

- `python -m sandbox --version` prints the version (the `VERSION` value from `cli.py`).
- The wiring shows up in `git -C sandbox diff`.

## Your constraints (these are the point)

1. **Explore first**, read-only, pointed at the right files — understand before you change.
2. **Make the plan-or-act call consciously** and say why.
3. **Set a runnable verify signal *before* implementing** (e.g. a test or `python -m sandbox
   --version` printing the version), and let the agent loop to green against it.
4. **Review the diff** (`git -C sandbox diff`) with your own eyes and **stay the executor** — clean
   git, you approve the ship.

## What to bring back to the coach

- The task in one line.
- The five beats as they actually happened (where each occurred).
- The verify signal you used and that you watched it go green.
- One sentence: which beat was weakest for you — the one to strengthen in its deep module later?

## How you're graded

On all five dimensions in `scorecard.md` — but leniently and *broadly*: this is the arc-in-miniature,
so the coach is checking that **every beat happened at all**, not that any one was masterful. Depth
comes later; shape comes now.
