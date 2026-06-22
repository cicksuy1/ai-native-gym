# Drill 9 — Pick the right extension

> **Goal of this drill:** build the reflex of matching a need to skill / hook / MCP by its *nature*.
> You do these in your own session; the coach checks them.

## Rep 1 — Match the mechanism

For each need, pick **skill**, **hook**, or **MCP**, and say why:

1. "Guarantee the agent never pushes to `main` directly."
2. "Reuse our standard incident-postmortem write-up format."
3. "Let the agent read live rows from our staging database."
4. "Always run the formatter after any file edit."
5. "Teach the agent our multi-step release checklist."

- **Pass signal:** 1 and 4 → hook (guarantees), 2 and 5 → skill (reusable workflows), 3 → MCP
  (external state); your reasons invoke deterministic-vs-probabilistic and context cost.

## Rep 2 — Write a hook for a guarantee

Pick a real "this must always/never happen" rule from your work. Sketch a **PreToolUse** or
**PostToolUse** hook that enforces it deterministically (you don't have to fully implement it —
describe the trigger and the block/action).

- **Pass signal:** you can state the lifecycle event, the condition, and why a CLAUDE.md rule would
  *not* guarantee it.

## Rep 3 — Sketch a skill

Take a workflow you repeat. Describe it as a skill: a name, a one-line description (the ~30–50 token
trigger), and what its body would contain. Note that the body loads only on demand.

- **Pass signal:** the description is a real trigger phrase; you can explain the progressive-
  disclosure context savings vs. putting it in CLAUDE.md.

## Rep 4 — Count the MCP cost

Look at your MCP setup (or imagine adding 3 servers). Estimate/recall the context cost and decide
which servers actually earn their rent.

- **Pass signal:** you can name the context-before-conversation cost concern and a sane default
  (~2–3 servers).

## When you're done

Show the coach your Rep 1 matches and your Rep 2 hook sketch. The coach will press hardest on any case
where you used a *hope* (rule/skill) where you needed a *guarantee* (hook).
