# Module 2 — Planning & Plan-vs-Act

> **You are here:** you can steer the harness loop (Module 0) and feed it the right context
> (Module 1). Now we add the highest-leverage habit in the whole course after verification: deciding
> *whether to plan*, and planning well when you should.

## Why this matters

The most expensive mistake an AI agent makes isn't a typo — it's confidently solving the *wrong
problem*. It builds the feature you didn't ask for, refactors the module you didn't mean, and does it
fast, across ten files, while you watch. The fix is almost embarrassingly simple: make it *plan
first*, and approve the plan, before it writes a line.

But — and this is the part people miss — planning everything is its own failure. Plan a one-line log
fix and you've added ceremony to a task that needed none. The skill isn't "always plan." It's
*knowing which tasks need a plan and which don't.* That judgment is what this module trains.

## The big idea: Explore → Plan → Code → Commit

The single most repeated workflow across Anthropic's primary docs is a four-phase loop:
**Explore → Plan → Code → Commit** (`RESEARCH.md`, Pillar 2). The point of separating *explore* and
*plan* from *code* is to keep the agent read-only while it's still figuring out the approach — so it
can't "solve the wrong problem" with edits you have to unwind. Anthropic's engineering position is
blunt: *"Planning is essential. Agents should plan, then act. This goes a long way towards
maintaining coherence"* (`RESEARCH.md`, Pillar 2).

In practice that means: explicitly tell the agent to **read the relevant files and NOT code yet**,
produce a plan (asking it to "think hard" buys deeper reasoning), and write that plan down — often in
markdown — *before* implementation. `plan` mode (Module 0) enforces this for you: the agent can read
and explore but cannot edit source until you approve.

## The principle: if you could describe the diff in one sentence, skip the plan

Here's the heuristic worth tattooing on the inside of your eyelids, straight from the docs:

> **"If you could describe the diff in one sentence, skip the plan."** (`RESEARCH.md`, Pillar 2)

Skip planning for typos, log lines, renames — small, self-contained changes where "prompt and pray"
is genuinely fine. **Plan** when you're uncertain about the approach, when the change spans multiple
files, or when you're unfamiliar with the code (`RESEARCH.md`, Pillar 2). Full upfront specs are
overkill for small improvements but should be the default for larger, multi-developer work — that's
Module 3's territory.

Think of it as a dial, not a switch:

| The task… | Plan-vs-act call |
|---|---|
| One-sentence diff, you know exactly where it goes | **Skip the plan** — just do it |
| Spans several files, or you're unsure of the approach | **Plan first** — explore read-only, get a plan, approve it |
| Large / multi-session / shared codebase | **Spec it** (Module 3) |

The wrong move in *either* direction costs you: skipping a plan on a tangled change buys a wrong-
problem mess; planning a trivial change buys wasted turns. Calling it right *is* the skill.

## Watch it done well

*Transcript 2-1: a developer forces exploration before code on a multi-file change.*

```
You:    [plan mode] We need rate limiting on the public API. Read the routing
        layer, the existing middleware, and how config is loaded. Think hard,
        then give me a plan. Do NOT write code yet.

Claude: [reads routes.ts, middleware/, config.ts — no edits]
        Plan:
        1. Add a tokenBucket middleware in middleware/rateLimit.ts
        2. Wire it in routes.ts ONLY for /public/* paths
        3. Read limits from config.ts (new RATE_LIMITS block)
        4. Verify with a test that fires 11 requests and asserts the 11th 429s
        Risks: the existing CORS middleware order matters — must run after it.

You:    Good, but limits belong in env vars, not config.ts. Otherwise approved.

Claude: [updates plan, then — on approval — implements step by step]
```

The human caught a design issue **in the plan**, where it costs one sentence to fix — not in a diff
across four files. And notice step 4: the plan already names how it'll be *verified*. That's the
spine of the course showing up early.

*Anti-pattern 2-2: the same task, no plan.*

```
You:    add rate limiting to the public api

Claude: [immediately edits 5 files, invents a config format, puts the middleware
         before CORS so it breaks preflight requests]
You:    this is wrong in three ways and I have to read all five files to find them
```

Same request. Without the explore-and-plan gate, the wrong-problem mess landed as code, and now the
review burden is *higher* than if you'd planned. Speed that creates rework isn't speed.

## 🧠 Active recall

No peeking:

1. Name the four phases of the core workflow, in order.
2. Give the one-sentence heuristic for when to **skip** planning — and name two task traits that say
   "plan first" instead.
3. *Why* does keeping the agent read-only during exploration prevent the "wrong problem" failure?

## 🔍 In the wild

Open the Claude Code **best-practices** docs (cited in `RESEARCH.md`, Pillar 2) and find the
Explore → Plan → Code → Commit section in Anthropic's own words. Then look at how `plan` mode's
approval options work (approve-and-auto, approve-and-accept-edits, approve-and-review-each-edit,
keep-planning). Each option is a different answer to "how tight do I hold the leash *after* the plan
is good?" — connect that back to Module 0's gears.

## What you learned + what's next

You can now run Explore → Plan → Code → Commit, and — more importantly — you can *decide* when a task
earns a plan and when it doesn't. **The one sentence to remember:** *make the agent plan before it
acts on anything you couldn't describe in a single sentence.*

Next, **Module 3 — Spec-Driven Development**: when a task is too big even for a plan, you hand the
agent a *contract* instead of a wish. That's where planning grows up.
