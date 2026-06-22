# Challenge 9 — Extend the harness with the right mechanism

> **The mission:** take a real friction point in your workflow and fix it with the *correct*
> extension mechanism — proving you can tell a guarantee (hook) from a workflow (skill) from external
> state (MCP). The coach grades the matching judgment.

## Scenario

Find a real recurring friction in how you (or your team) drive the agent. Examples: "it sometimes
commits broken code" (guarantee → hook), "we keep re-explaining a multi-step process" (workflow →
skill), "it can't see our issue tracker / DB" (external state → MCP). Pick at least one; ideally one
of each kind if you have the appetite.

## Your constraints (these are the point)

1. **Diagnose the nature of the need** — is it a *guarantee*, a *reusable workflow*, or *external
   state*? State it explicitly before choosing a tool.
2. **Build the right mechanism:**
   - For a guarantee → a **hook** (PreToolUse to hard-block, or PostToolUse to automate). Implement
     or fully sketch it.
   - For a workflow → a **skill** with an on-demand description and a body.
   - For external state → identify the **MCP** server and justify its context cost.
3. **Verify it works** — for a hook, confirm it actually blocks/fires; for a skill, confirm it
   triggers on the right phrase.
4. **Account for context cost** — confirm you didn't bloat CLAUDE.md or over-add MCP servers.
5. **Stay the executor** — you chose the mechanism deliberately, not by habit.

## What to bring back to the coach

- The friction, and your diagnosis of its *nature*.
- The mechanism you built and why it (not the others) fits.
- Evidence it works (the hook fired / the skill triggered / the MCP server connected).
- One sentence: where would a CLAUDE.md rule have been a false guarantee here?

## How you're graded

On the five dimensions in `SCORECARD.md`, weighted on **Reviewed & stayed the executor** (deliberate
mechanism choice) and **Engineered context** (you respected the context cost of each extension). The
core skill: matching the mechanism to whether you needed a *guarantee*.
