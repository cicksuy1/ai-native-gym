#!/bin/sh
# Example PostToolUse hook: re-run the sandbox tests after an edit, surfacing the
# last few lines. Wire it into .claude/settings.json under "hooks" to make it fire.
# (Module 11 — Extend — has you build your OWN hook/skill for a real friction point.)
python -m unittest 2>&1 | tail -3
