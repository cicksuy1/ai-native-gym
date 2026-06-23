# Challenge 11 — Extend the harness with the right mechanism

> **The mission:** build **one real extension** under the sandbox's `.claude/` and **show it firing** —
> proving you can tell a guarantee (hook) from a workflow (skill) from external state (MCP), and that
> you can wire the chosen mechanism for real. The coach grades the matching judgment and the evidence.

## Scenario

Work on the practice **sandbox** (`sandbox/`). The sandbox already ships a *ready-to-wire* example:
`sandbox/.claude/hooks/run-tests.sh` re-runs the test suite, but `sandbox/.claude/settings.json` has
an empty `"hooks": {}` — so it never fires. Build **one** real extension:

- **Option A (hook):** wire `run-tests.sh` into `settings.json` as a **PostToolUse** hook so the suite
  runs automatically after an edit — the deterministic guarantee that you never leave the suite red
  silently. (There's an `add-and-verify` skill to model on, and the `run-tests.sh` header tells you
  where it plugs in.)
- **Option B (skill):** create a **new skill** under `sandbox/.claude/skills/` — a reusable workflow
  with an on-demand description and a body — for a real sandbox chore you repeat.

Pick **one** and make it actually fire.

## Your constraints (these are the point)

1. **Diagnose the nature of the need** — is it a *guarantee*, a *reusable workflow*, or *external
   state*? State it explicitly before choosing a tool. (A guarantee → hook; a workflow → skill.)
2. **Build the right mechanism** under `sandbox/.claude/`:
   - Hook → edit `settings.json` to register `run-tests.sh` on the right lifecycle event.
   - Skill → add a `skills/<name>/SKILL.md` (or skill file) with a real trigger description + body.
3. **Verify it fires** — for the hook, make an edit and show the test output appearing automatically;
   for the skill, show it triggering on the right phrase.
4. **Account for context cost** — confirm you didn't bloat `CLAUDE.md` or over-add MCP servers.
5. **Stay the executor** — you chose the mechanism deliberately, not by habit.

## Done when (the proof-of-work floor)

- **The new/wired extension exists under `sandbox/.claude/`** — either `settings.json`'s `"hooks"`
  now registers `run-tests.sh` on a lifecycle event, or a new skill exists under
  `sandbox/.claude/skills/`.
- **You show evidence it ran** — the hook firing (test output appearing after an edit) or the skill
  triggering on its description phrase.
- Show it: `git -C sandbox diff` shows the wired `settings.json` (or the new skill files), and you can
  point to a session moment where it fired.

To pass, **dimension 4 (Closed a verify loop) must be solid** — you must show the mechanism actually
fired, not just that it's configured.

## What to bring back to the coach

- The friction, and your diagnosis of its *nature* (guarantee / workflow / external state).
- The mechanism you built and why it (not the others) fits.
- Evidence it works (the hook fired after an edit / the skill triggered on its phrase).
- One sentence: where would a `CLAUDE.md` rule have been a false guarantee here?

## How you're graded

On the five dimensions in `scorecard.md`, weighted on **Reviewed & stayed the executor** (deliberate
mechanism choice) and **Engineered context** (you respected the context cost of each extension). The
core skill: matching the mechanism to whether you needed a *guarantee* — and proving it fires.
