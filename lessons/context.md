# Module 1 — Context Management

> **You are here:** you can steer the harness loop (Module 0). Now we tackle the constraint that sits
> underneath almost every other best practice in this course: the context window, and how to feed it
> the *right* tokens rather than the most.

## Why this matters

Almost every "best practice" you'll hear about AI coding is really a workaround for one fact: *the
context window fills up fast, and the agent's performance degrades as it fills* (`RESEARCH.md`,
Pillar 3). Anthropic says it plainly — "Most best practices are based on one constraint." So if you
learn *why* the window matters and how to manage it, a hundred downstream tips stop being magic
incantations and start being obvious.

And here's the counterintuitive part that trips people up: **more context is not better.** Stuffing
the window with "just in case" files doesn't make the agent smarter — irrelevant data *actively
worsens hallucinations* (`RESEARCH.md`, Pillar 3). The goal, in Anthropic's words, is "the smallest
possible set of high-signal tokens. Not: the most tokens. The right tokens."

## The big idea: the right tokens, not the most

Picture the context window as the agent's working memory — a desk, not a warehouse. A cluttered desk
doesn't help you work; it buries the one page you need. Models hit a real performance ceiling around
**1 million tokens** and degrade past it regardless of the advertised window size (`RESEARCH.md`,
Pillar 3). Your job as executor is to keep the desk clear: bring in what the current task needs, push
out what it doesn't.

That reframes "context management" from a chore into a *skill*: every token you add either raises
signal or adds noise. The pro habit is to constantly ask, "does the agent need this *right now*?" —
and if not, keep it out, or get it out.

## The principle: clear, compact, and the three strategies

You have three distinct levers, each for a different kind of context bloat (`RESEARCH.md`,
Pillar 3):

| Lever | What it does | When to reach for it |
|---|---|---|
| **`/clear`** | wipes the window entirely | switching to an **unrelated** task — reset and start fresh |
| **`/compact <focus>`** | summarizes the conversation, keeping what you point it at | mid-task, window filling, but you still need the thread's gist |
| **memory (CLAUDE.md)** | persists rules across sessions | things that should be true *every* session |

Run **`/clear` frequently between unrelated tasks** — it's the cheapest, highest-impact habit. For
targeted control, **`/compact Focus on the API changes`** keeps the summary pointed at what matters
(`RESEARCH.md`, Pillar 3). Under the hood Anthropic distinguishes three engineering strategies:
**compaction** (whole-transcript lossy summary), **tool-result clearing** (surgically dropping old
tool outputs losslessly), and **memory** (cross-session persistence).

A few rules that follow directly:

- **CLAUDE.md: keep it under ~200 lines.** A bloated CLAUDE.md "causes Claude to ignore your actual
  instructions" (`RESEARCH.md`, Pillar 3). It loads *every* session, so every line is rent.
- **Sometimes-relevant knowledge belongs in skills or path-scoped rules**, loaded on demand — not in
  the always-on CLAUDE.md (`RESEARCH.md`, Pillars 3 & 5).
- **Just-in-time retrieval beats upfront loading.** Let the agent pull files when it needs them via
  tools, rather than pre-dumping the whole codebase (`RESEARCH.md`, Pillar 3).

> **Note:** compaction is **lossy by design** — detailed early instructions can be dropped. That's
> exactly why persistent rules belong in CLAUDE.md (which is re-injected after `/compact`), not
> buried in a long conversation that may get summarized away.

## Watch it done well

*Transcript 1-1: a developer resets between tasks and steers a compaction instead of drowning.*

```
You:    [just finished a long debugging session on the auth module]
        /clear
        Now: add pagination to the /users endpoint. Read users.controller.ts
        and the existing /orders pagination for the pattern.

Claude: [fresh window — only the two relevant files in context, no auth noise]
        [implements pagination matching the /orders pattern]

        ...later, deep in a big refactor, the window is filling...
You:    /compact Focus on the repository-layer changes and the failing test.
Claude: [summary keeps the refactor's state + the test; drops resolved tangents]
```

The `/clear` meant the pagination task started on a clean desk — none of the auth debugging was
sitting there raising the noise floor. And the *focused* `/compact` kept the thread alive without
keeping the clutter.

*Anti-pattern 1-2: one infinite conversation.*

```
You:    [50 messages deep — auth bug, then pagination, then a CSS tweak, then
         a DB migration, all in one session, never cleared]
        why does it keep editing the wrong file?
```

The window is now a junk drawer: four unrelated tasks' worth of files, errors, and dead ends, all
competing for the agent's attention. It edits the wrong file because the *right* signal is buried
under 49 messages of noise. Nothing was wrong with the model — the desk was never cleared.

## 🧠 Active recall

No peeking:

1. Complete the principle: "the smallest set of high-signal tokens — not the most tokens, the ___."
2. You finish a bug fix and start an unrelated feature. Which command do you run, and why?
3. Why should CLAUDE.md stay under ~200 lines — what goes wrong when it bloats?

## 🔍 In the wild

Open the Claude Code **memory** docs and the **best-practices** page (both cited in `RESEARCH.md`,
Pillar 3). Find the CLAUDE.md guidance and the `/clear` / `/compact` advice in Anthropic's own words.
Then look at your *own* CLAUDE.md (or `~/.claude/CLAUDE.md`) and count the lines — is every line
earning its rent in *every* session, or does some of it belong in an on-demand skill?

## What you learned + what's next

You now treat the context window as a desk to keep clear, you reach for `/clear` between unrelated
tasks and `/compact <focus>` to steer a summary, and you know why CLAUDE.md stays lean. **The one
sentence to remember:** *the right tokens, not the most — and `/clear` is free.*

Next, **Module 2 — Planning & Plan-vs-Act**: now that you can keep the agent's context clean, we'll
decide when to make it plan before acting — and when planning is just ceremony.
