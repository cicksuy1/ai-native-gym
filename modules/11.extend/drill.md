# Warm-up 11 — Pick the right extension

> **Ungraded warm-up** — quick reps to wire the "match the mechanism to its nature" reflex before the
> challenge. Do them in your own session; Reps 2–4 use the practice sandbox (**`sandbox/`**). The coach
> checks them; this warm-up doesn't hit the proof-of-work floor — only the challenge does.

## Rep 1 — Match the mechanism

For each need, pick **skill**, **hook**, or **MCP**, and say why:

1. "Guarantee the sandbox suite runs after every edit."
2. "Reuse our standard add-a-note-then-verify routine."
3. "Let the agent read live rows from a staging database."
4. "Always reject an empty note title, no matter what."
5. "Teach the agent our multi-step release checklist."

- **Pass signal:** 1 and 4 → hook (guarantees), 2 and 5 → skill (reusable workflows), 3 → MCP
  (external state); your reasons invoke deterministic-vs-probabilistic and context cost.

## Rep 2 — Read the ready-to-wire hook (on the sandbox)

In `sandbox/`, open `.claude/hooks/run-tests.sh` and `.claude/settings.json`. Notice the script exists
but `"hooks": {}` is empty, so it never fires. Name the lifecycle event you'd register it on and why.

- **Pass signal:** you can state that it's a **PostToolUse** guarantee, point to the empty `"hooks"`
  block, and say why a `CLAUDE.md` rule ("please run the tests") would *not* guarantee it.

## Rep 3 — Read the example skill (on the sandbox)

In `sandbox/`, open `.claude/skills/add-and-verify`. Identify its **description** (the on-demand
trigger) and its **body**. Say one sandbox workflow you'd turn into your own skill.

- **Pass signal:** you can point to the trigger description vs. the body, and explain the
  progressive-disclosure context savings vs. putting the workflow in `CLAUDE.md`.

## Rep 4 — Count the cost (on the sandbox)

The sandbox `CLAUDE.md` is deliberately tiny. Imagine bolting on 3 MCP servers "to be safe" — estimate
the context cost and decide which (if any) earn their rent here.

- **Pass signal:** you can name the context-before-conversation cost concern and a sane default
  (~2–3 servers), and note this sandbox needs none of them.

## When you're done

Show the coach your Rep 1 matches and what you read in Reps 2–3. The coach will press hardest on any
case where you'd use a *hope* (rule/skill) where you needed a *guarantee* (hook).
