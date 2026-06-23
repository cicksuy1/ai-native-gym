# Module 5 — Spec-Driven Development

> **You are here:** you can plan before acting (Module 4). Now we handle the work that's too big even
> for a plan — where you stop handing the agent a *wish* and start handing it a *contract*.

## Why this matters

Remember the dominant failure mode of AI agents: not being dumb, but being *confidently wrong because
they didn't know something you assumed was obvious* (`RESEARCH.md`, Pillar 2). A plan helps for one
sitting. But for a real feature — multi-file, multi-session, maybe multi-developer — the implicit
assumptions pile up faster than any single plan can hold, and the agent fills the gaps with guesses.

Spec-Driven Development (SDD) is the fix: *"a discipline for making the implicit explicit before the
agent ever sees a task… the difference is whether you hand an AI agent a wish or a contract"*
(`RESEARCH.md`, Pillar 2). The spec is where you do your senior-engineer thinking *up front*, so the
agent has nothing important left to guess.

## The big idea: write the contract, not the wish

A wish is "add user notifications." A contract says *which* events notify, *which* channels, what the
payload looks like, what happens on failure, and what's explicitly out of scope. The wish makes the
agent guess five times; the contract makes it implement. As the research puts it bluntly: writing the
spec is *"the senior engineering contribution. The agent implements; the experienced developer
thinks"* (`RESEARCH.md`, Pillar 2).

This is why SDD scales where "vibe coding" doesn't. A spec **preserves context across sessions and
across different agents**, aligns everyone on the non-negotiables, and means a well-defined
requirement *multiplies* across however many agents implement it — while a vague spec produces
proportionally vague errors (`RESEARCH.md`, Pillar 2). The spec is the leverage point.

## The principle: a gated workflow + graduated boundaries

Multiple sources converge on a **four-phase, human-gated** shape — GitHub Spec Kit's
**Specify → Plan → Tasks → Implement**, where each phase is reviewed before the next begins
(`RESEARCH.md`, Pillar 2). Anthropic's own variant is worth memorizing because it's so practical:

> For a larger feature, have the agent **interview you** (via the `AskUserQuestion` tool) to surface
> the implicit requirements, write a self-contained **`SPEC.md`**, then **start a fresh session to
> execute the spec with clean context** (`RESEARCH.md`, Pillar 2).

Notice the context-management move baked in (Module 2): you *interview-then-execute-in-a-fresh-
session*, so the implementation starts with a clean window holding only the finished contract — not
the messy back-and-forth that produced it.

Two craft rules make specs actually work:

- **Graduated boundaries beat flat rule-lists.** Structure constraints as three tiers —
  **always do / ask first / never do** — rather than a wall of "don'ts." ("Never commit secrets" is
  the single most common helpful constraint.) (`RESEARCH.md`, Pillar 2)
- **Beat the "curse of instructions."** Split a large spec into focused sections and give the agent
  **one focused task at a time** — a giant spec dumped whole degrades adherence (`RESEARCH.md`,
  Pillar 2).

And know when *not* to: full upfront specs are "probably overkill" for small improvements but should
be the **default for larger or multi-developer projects** (`RESEARCH.md`, Pillar 2). SDD is the top
of the plan-vs-act dial from Module 4, not a replacement for it.

## Watch it done well

*Transcript 5-1: interview → SPEC.md → fresh session, on the notes CLI.*

```
You:    [plan mode] In sandbox/, we need the "search history" feature from
        BACKLOG.md. Before any code, interview me — ask about what's recorded,
        how much is kept, storage, and what's out of scope. Then write SPEC.md.

Claude: [uses AskUserQuestion]
        - Which actions get recorded? (every `find` query? only matches?)
        - How many entries are kept, and do they survive across runs?
        - Out of scope for v1? (re-running a past query? clearing history?)
You:    [answers — record every find query, keep last 20, persist, clearing in v2]

Claude: [writes SPEC.md: scope, what's recorded, storage shape, the cap,
         a "never / ask-first / always" boundaries block, and a verify section]

You:    [reads SPEC.md, fixes one wrong assumption] Approved.
        /clear
        Implement SPEC.md, one section at a time. Start with recording a query.
```

The interview dragged the implicit (what's recorded? how many? persist? scope?) into the open
*before* a line was written. The `/clear` + "implement SPEC.md" started execution on a clean desk
holding only the contract. The boundaries block told the agent where the rails are.

*Anti-pattern 5-2: the wish.*

```
You:    add search history to the notes app

Claude: [guesses: records every command not just finds, keeps them only in
         memory, invents a storage format, no cap] Done!
You:    that's not what we need — and now I have to reverse-engineer what it
        assumed before I can even tell you what's wrong
```

Same feature, handed as a wish. Every gap the spec would have closed became a guess, and the review
burden ballooned — you're now reverse-engineering the agent's assumptions instead of checking work
against a contract.

## 🧠 Active recall

No peeking:

1. In one line: what's the difference between a "wish" and a "contract" for an agent?
2. Describe Anthropic's interview → SPEC.md → fresh-session workflow — and why the *fresh session*
   matters (tie it to Module 2).
3. What are the three tiers of "graduated boundaries," and why beat a flat list of don'ts?

## 🔍 In the wild

Open the Claude Code **best-practices** docs and find the `AskUserQuestion` interview → `SPEC.md`
pattern (`RESEARCH.md`, Pillar 2). Then skim "How to write a good spec for AI agents" (same pillar)
for the graduated-boundaries idea. Ask yourself: on your last feature, what did the agent guess that
a one-paragraph spec would have nailed down?

## What you learned + what's next

You can now tell when a task has outgrown a plan and needs a contract, run an interview → `SPEC.md` →
fresh-session loop, and write graduated boundaries instead of rule-walls. **The one sentence to
remember:** *hand the agent a contract, not a wish — and do your senior thinking in the spec.*

Next, **Module 6 — Project: Ship a Feature**: time to put Part II together. You'll plan a real
multi-file feature, keep its context tight, and close the verify loop you learned in Module 3 — your
first end-to-end integration of everything so far.
