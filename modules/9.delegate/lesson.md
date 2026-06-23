# Module 9 — Subagent Delegation

> **You are here:** you met your first subagent as a fresh-context reviewer (Module 8). Now we learn
> to delegate side-work *properly* — so it offloads from your main context instead of polluting it.

## Why this matters

Your main conversation is precious, finite context (Module 2). Every search result, log dump, and
file you pull into it raises the noise floor. Subagents are the escape hatch: *"delegated workers
inside one session that do a side task in their own context and return a summary"* (`RESEARCH.md`,
Pillar 4). The investigation happens somewhere else, and only the *conclusion* comes back.

That's the real point of delegation — not "more agents = more power," but **context separation**. A
subagent burns through fifty files and a thousand lines of logs in *its* window, then hands you three
sentences. Your main loop stays clean and focused. Delegation is a context-management tool wearing a
parallelism costume.

## The big idea: a subagent is a fresh window that returns a summary

Subagents run in **separate context windows**, returning only a final message plus metadata
(`RESEARCH.md`, Pillar 4). That single property is why they're the primary tool for investigation
and verification: the messy middle (the grep, the trace, the dead ends) never touches your main
conversation. They're defined as markdown files in `.claude/agents/`, and you reach for one whenever
a side-task would otherwise flood your window with detail you don't need to keep.

So the test for "should this be a subagent?" is: *do I need the journey, or just the destination?* If
you only need the destination — the answer, the verdict, the summary — delegate it.

## The principle: objective, format, tools, boundaries — and return summaries, not transcripts

A vague subagent is worse than no subagent: it misinterprets the task and hands back noise. Every
subagent needs four things in its brief (`RESEARCH.md`, Pillar 4):

| Brief element | The question it answers |
|---|---|
| **Objective** | What exactly is this subagent trying to achieve? |
| **Output format** | What shape should the answer come back in? (a list, a verdict, a table) |
| **Tools / sources** | What may it use, and where should it look? |
| **Boundaries** | What's out of scope? What must it *not* do? |

"Vague short instructions cause subagents to misinterpret tasks"; the fix is a dedicated subagent
system prompt plus a structured task brief as the first message (`RESEARCH.md`, Pillar 4). Two more
rules that the research is firm on:

- **Return summaries, not transcripts.** The whole benefit is context compression; a subagent that
  dumps its full transcript back into your window defeats its own purpose (`RESEARCH.md`, Pillars 4 &
  Open Debates).
- **Don't share the orchestrator's system prompt with the subagent.** They have different jobs; a
  shared prompt is a documented anti-pattern (`RESEARCH.md`, Open Debates).

> **Note:** delegation has a cost — an agent run uses roughly **4× the tokens** of a plain chat
> (`RESEARCH.md`, Open Debates). For a one-line lookup you'd do faster inline, skip the subagent. Use
> them when the side-task is genuinely big enough that *keeping its mess out of your main window* is
> worth the overhead.

## Watch it done well

*Transcript 9-1: a scoped subagent returns a destination, not a journey.*

```
You:    [main session — don't want to flood context with a whole-CLI audit]
        Spawn a subagent:
        OBJECTIVE: audit sandbox/ (notes.py + cli.py) for rough edges — missing
          flags, weak input handling, confusing messages.
        FORMAT: a table — file:line | issue | severity | suggested fix.
        TOOLS: grep/read only. Read-only, stay inside sandbox/.
        BOUNDARIES: do not edit anything; do not run the CLI; summary only.

Subagent: [reads notes.py + cli.py in ITS window, traces the argparse setup]
          Returns a 5-row table (missing --version, typo "querry" in the
          no-match message, add() accepts an empty title, ...). No edits.

You:    [your main context gained a 5-row table, not pages of file dumps]
        Good — I'll save this as sandbox/AUDIT.md and pick what to fix.
```

The objective was crisp, the format was specified, tools and boundaries were set — and what came
back was the *destination* (a table), leaving the search's mess in the subagent's window.

*Anti-pattern 9-2: the vague flood.*

```
You:    look at the sandbox and tell me about it

Subagent: [unclear what "about it" means — dumps the full contents of notes.py
           and cli.py, plus its reasoning, back into your main context]
You:    [main window now bloated with raw file dumps; I have to re-read it all
         to extract what I actually needed]
```

No objective, no format, no boundaries — so it guessed, over-returned, and *polluted the very
context the subagent was supposed to protect.* That's delegation that costs more than it saves.

## 🧠 Active recall

No peeking:

1. What's the *real* reason to use a subagent — and what property of subagents makes it work?
2. Name the four things every subagent brief needs.
3. Why "return summaries, not transcripts" — what does a transcript-dumping subagent break?

## 🔍 In the wild

Open the Claude Code **agents** docs and the **multi-agent research system** write-up (`RESEARCH.md`,
Pillar 4). Find "objective, output format, tool guidance, and clear task boundaries" and the
separate-context-window description. Then look at any subagent definition in a `.claude/agents/`
folder you have — does its brief actually specify all four elements?

## What you learned + what's next

You can now delegate a side-task to a subagent with a real brief — objective, format, tools,
boundaries — and get back a destination, not a journey, keeping your main context clean. **The one
sentence to remember:** *delegate when you need the answer but not the mess, and always scope the
brief.*

Next, **Module 10 — Parallelism & Isolation**: one subagent is delegation; *many* working at once
needs isolation. We'll meet git worktrees — the safe-parallelism primitive.
