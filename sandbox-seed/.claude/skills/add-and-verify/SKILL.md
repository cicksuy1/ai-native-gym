---
name: add-and-verify
description: Example skill — add a note, then run the tests to confirm nothing broke. A pattern to copy; Module 11 has you build your own.
---

# add-and-verify (example)

A tiny example of a reusable workflow skill — the kind of thing you'd reach for when a multi-step
chore comes up again and again. Steps:

1. Run `python -m sandbox add "<text>"`.
2. Run `python -m unittest` and confirm it's green.

This is just a pattern to copy. In **Module 11 — Extend** you'll build a skill (or a hook, or an MCP
server) for a real friction point of your own — and justify why that mechanism fits.
