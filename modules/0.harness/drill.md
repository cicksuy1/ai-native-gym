# Warm-up 0 — Feel the controls

> **This is an ungraded warm-up** — quick reps to wire a reflex before the challenge. Nothing here
> hits the proof-of-work floor; just do them in your own Claude Code session on the practice sandbox
> (**`sandbox/`** — set it up once with `task setup-sandbox`). The coach checks them, never does them
> for you.

The harness has three controls: the **gearbox** (permission modes), the **pedals** (the tool
surface), and the **configuration** (settings). One quick rep each — then one to feel the loop run.

## Rep 1 — Cycle the gears (control 1: modes)

In a real Claude Code session, press **Shift+Tab** slowly and watch the mode indicator change.

- **Pass signal:** you can state the order Shift+Tab cycles through, and name one thing the agent
  *cannot* do in `plan` mode.

## Rep 2 — Read the tool surface (control 2: tools)

In `plan` mode, ask the agent: *"List the tools you currently have available and one line on what
each does."* Skim which are read-only (Read, Grep, Glob) vs. which act on the world (Edit, Bash).

- **Pass signal:** you can name two read-only tools and two that change things — you inventoried your
  pedals.

## Rep 3 — Find the configuration (control 3: settings)

Locate your settings: a project `.claude/settings.json` and your user `~/.claude/settings.json`. Open
one and find (or imagine adding) `defaultMode`.

- **Pass signal:** you can say where your harness is configured and one thing `settings.json`
  controls.

## Rep 4 — Explore the sandbox without touching it (the loop, gather-only)

Point the agent at the sandbox in **plan** mode: *"In `sandbox/`, what does `find` in `notes.py` do,
and where is it called from?"* Then confirm it changed nothing — `git -C sandbox status` is clean.

- **Pass signal:** you got a useful answer **and** the sandbox is unchanged. You felt the difference
  between "asking" and "doing" — the gather phase of the loop with zero edit risk.

## When you're done

Tell the coach which reps you did and what surprised you. The coach will ask you to put the loop and
the three controls into your own words — that's the bridge to the challenge.
