# Drill 2 — The plan-vs-act reflex

> **Goal of this drill:** make the plan-vs-act decision *fast and conscious*, and practice forcing a
> read-only plan before code. You do these in your own session; the coach checks them.

## Rep 1 — Sort the tasks

Here are five tasks. For each, say **skip the plan** or **plan first**, and why (one phrase):

1. Fix a misspelled word in a log message.
2. Add caching to the data layer so repeated queries don't hit the DB.
3. Rename a local variable inside one function.
4. Add OAuth login alongside the existing password login.
5. Add a `--dry-run` flag to an existing CLI command.

- **Pass signal:** your calls match the heuristic (1, 3, 5 → skip; 2, 4 → plan), and your reasons
  invoke "one-sentence diff" vs. "multi-file / unfamiliar / uncertain approach." (5 is the
  interesting one — defensible either way; what matters is your *reasoning*.)

## Rep 2 — Force a plan

Pick a real task from your work that genuinely spans more than one file. In **plan** mode, instruct
the agent to read the relevant files, **think hard**, and produce a plan **without writing code**.

- **Pass signal:** you got a written, multi-step plan; zero edits were made; you can point to the
  moment you told it "do not code yet."

## Rep 3 — Improve the plan before approving

Read the plan from Rep 2 critically. Find at least one thing to change — a wrong assumption, a missing
step, a risky ordering — and send that correction *before* approving.

- **Pass signal:** you changed the plan with a sentence, and the change landed before any code was
  written. You felt how cheap it is to fix a design in the plan vs. in a diff.

## Rep 4 — Demand the verify step

Look back at your plan. Does it say *how the result will be checked*? If not, ask the agent to add a
verification step to the plan.

- **Pass signal:** the plan now ends with a concrete pass/fail check (a test, a command, a thing to
  run). This is the Module 4 spine, planted early.

## When you're done

Tell the coach your Rep 1 calls and reasoning, and walk them through the plan you shaped. The coach
will press on any task where your *reasoning* was fuzzy, even if the answer was right.
