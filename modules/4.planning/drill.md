# Warm-up 4 — The plan-vs-act reflex

> **Ungraded warm-up** — quick reps to make the plan-vs-act decision *fast and conscious*, and to
> practice forcing a read-only plan before code. Do them in your own session on the practice sandbox
> (**`sandbox/`**). This warm-up doesn't hit the proof-of-work floor — only the challenge does. The
> coach checks them; it never does them for you.

## Rep 1 — Sort the tasks

For each task below, say **skip the plan** or **plan first**, and why (one phrase):

1. Fix the misspelled "querry" in the `find` no-match message in `cli.py`.
2. Add `persistence` so notes survive across runs (touches `notes.py` + `cli.py`).
3. Rename a local variable inside one function in `notes.py`.
4. Add `tags` to notes — filter, display, and store them.
5. Add a `--version` flag using the existing `VERSION` in `cli.py`.

- **Pass signal:** your calls match the heuristic (1, 3, 5 → skip; 2, 4 → plan), and your reasons
  invoke "one-sentence diff" vs. "multi-file / unfamiliar / uncertain approach." (5 is the
  interesting one — defensible either way; what matters is your *reasoning*.)

## Rep 2 — Force a plan (on the sandbox)

In `sandbox/`, pick the `persistence` feature from `BACKLOG.md`. In **plan** mode, tell the agent to
read `notes.py` and `cli.py`, **think hard**, and produce a multi-step plan **without writing code**.

- **Pass signal:** you got a written, multi-step plan; zero edits were made (`git -C sandbox status`
  is clean); you can point to the moment you told it "do not code yet."

## Rep 3 — Improve the plan before approving (on the sandbox)

Read that plan critically. Find at least one thing to change — a wrong assumption, a missing step (a
corrupt or missing file on first run?), a risky ordering — and send that correction *before*
approving.

- **Pass signal:** you changed the plan with a sentence, and the change landed before any code was
  written. You felt how cheap it is to fix a design in the plan vs. in a diff.

## Rep 4 — Demand the verify step (on the sandbox)

Look back at your plan. Does it say *how the result will be checked*? If not, ask the agent to add a
verification step — for persistence, the natural one is *add a note, then a fresh `list` shows it.*

- **Pass signal:** the plan now ends with a concrete pass/fail check (a command to run, an observable
  result). This is the module 4 spine, planted early.

## When you're done

Tell the coach your Rep 1 calls and reasoning, and walk them through the plan you shaped. The coach
will press on any task where your *reasoning* was fuzzy, even if the answer was right.
