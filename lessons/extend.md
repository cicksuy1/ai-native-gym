# Module 11 — Skills, Hooks & MCP

> **You are here:** you can drive, delegate, and parallelize the harness. Now we *extend* it — three
> mechanisms to teach it new workflows, automate it deterministically, and connect it to the outside
> world. The skill is picking the right one for the job.

## Why this matters

Out of the box, the harness is general. The leverage comes from shaping it to *your* work — but each
way of extending it has a different nature and a different cost, and using the wrong one is a classic
mistake. People stuff probabilistic instructions where they need a hard guarantee, or bolt on
external integrations that silently eat half their context window before a conversation even starts.

So this module isn't "here are three features." It's "here's how to *choose*": when you want a
reusable workflow, when you want a deterministic guarantee, and when you want external state — and
what each one costs you in context.

## The big idea: three mechanisms, three jobs

| Mechanism | What it is | Its nature |
|---|---|---|
| **Skills** | reusable workflows the agent loads on demand | *probabilistic* — guidance the model chooses to follow |
| **Hooks** | shell commands fired at lifecycle moments | *deterministic* — they run regardless of what the model decides |
| **MCP** | a protocol connecting the agent to external systems | *integration* — external state, at a context cost |

(Claude Code actually exposes five extension points — Skills, MCP, Plugins, Hooks, Slash Commands —
but these three carry the concepts; `RESEARCH.md`, Pillar 5.) The key distinction to burn in:
**skills are probabilistic, hooks are deterministic.** That single difference decides which one you
reach for.

## The principle: match the mechanism to whether you need a *guarantee*

**Skills — reusable workflows, loaded on demand.** A skill teaches the agent how to do a task, via
**progressive disclosure**: only its name + description (~30–50 tokens) sit in context until it's
invoked, then the full body loads (`RESEARCH.md`, Pillars 3 & 5). That's the Module 2 principle made
concrete — sometimes-relevant knowledge lives in a skill, not in always-on CLAUDE.md. Reach for a
skill when you have a *workflow* you repeat and want the agent to follow when relevant.

**Hooks — deterministic automation.** A hook is a shell command fired at a lifecycle moment like
**PreToolUse** or **PostToolUse** (`RESEARCH.md`, Pillar 5). Its defining property is **determinism**
— "anything that should happen deterministically: running linters after edits, posting to Slack on
completion." Crucially: to **hard-block** an action *regardless of what the model decides*, a
**PreToolUse hook is the recommended mechanism** — not a CLAUDE.md rule (`RESEARCH.md`, Pillars 3 &
5). This is the punchline of Module 2's "memory is context, not enforcement": if you need a
*guarantee*, you need a hook.

**MCP — external state, at a cost.** MCP is a standard protocol giving the agent access to external
systems (databases, trackers, browsers, internal APIs); its ideal use is when the agent must reason
over external state *without copy-paste* (`RESEARCH.md`, Pillar 5). But the cost is **context**: a
five-server, 58-tool setup can consume **55,000+ tokens before any conversation starts**
(`RESEARCH.md`, Pillar 5). A sensible default is **2–3 MCP servers plus a few custom skills** — and
Tool Search can cut that token cost by ~85%.

> **Note:** the deterministic-vs-probabilistic split is the whole module. "Please always run the
> linter" in CLAUDE.md is a *hope*; a PostToolUse hook that runs it is a *fact*. When the cost of the
> agent forgetting is real, don't write a rule — write a hook.

## Watch it done well

*Transcript 9-1: the right mechanism for each need.*

```
Need: "the agent keeps committing without running tests."
You:  [that needs a GUARANTEE] → PreToolUse hook on git commit that blocks
      unless the test suite passed. Deterministic; the model can't skip it.

Need: "I keep re-explaining our PR-description format."
You:  [that's a reusable WORKFLOW] → a skill "write-pr-desc" that loads on
      demand. ~40 tokens until used; full template loads when invoked.

Need: "the agent needs to read live ticket status from our tracker."
You:  [that's EXTERNAL STATE] → one MCP server for the tracker. Accept the
      context cost for the one integration that earns it; skip the other four.
```

Each need was matched to its mechanism by *nature*: a guarantee → hook, a workflow → skill, external
state → MCP (and only the server that pays for its context).

*Anti-pattern 9-2: wrong mechanism, hidden cost.*

```
You:  [adds "NEVER commit without tests" as line 1 of a 400-line CLAUDE.md]
      [also installs 5 MCP servers "to be safe"]

Result: the agent commits without tests anyway (CLAUDE.md is context, not
        enforcement — and the file's so long it ignores instructions), and
        55k tokens are gone before you type a word.
```

The guarantee was written as a probabilistic hope (should've been a hook), the CLAUDE.md was bloated
(Module 2), and MCP servers were added without counting their context rent. Three mechanism
mismatches in one setup.

## 🧠 Active recall

No peeking:

1. Skills vs. hooks: which is probabilistic and which is deterministic — and why does that decide
   which you use?
2. You need to *guarantee* an action never happens unless a condition holds. What do you reach for,
   and *not* reach for?
3. What's the hidden cost of MCP servers, and what's a sane default number?

## 🔍 In the wild

Open the "Steering Claude Code: skills, hooks, rules, subagents" blog post and the memory docs
(`RESEARCH.md`, Pillars 3 & 5). Find the deterministic-control framing of hooks and the "PreToolUse
hook to hard-block" line. Then check your own setup: how many MCP servers are loaded, and roughly
what context do they cost before you've said anything?

## What you learned + what's next

You can now choose among the harness's extension mechanisms by *nature*: skills for reusable
workflows (cheap, on-demand), hooks for deterministic guarantees, MCP for external state (watch the
context cost). **The one sentence to remember:** *if you need a guarantee, write a hook — a CLAUDE.md
rule is only a hope.*

Next, the finale — **Module 12 — Orchestration at Scale & Knowing When *Not* To**: putting it all
together across many agents, and the judgment to *not* when the task doesn't earn it.
