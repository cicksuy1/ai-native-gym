# Module 0 — Getting Started & Harness Fluency

> **You are here:** the very first module. This one is **hands-on** — by the end you won't just *know*
> what the harness is, you'll have operated its controls: switched every mode on purpose, inspected
> the tool surface the agent acts through, and found where its settings live. Fluency, not theory.

## Why this matters

Sharp engineers trip on the same thing when they start driving an AI coding agent: they think they're
talking to "the model." They're not. They're operating a **harness** — a loop of software wrapped
around the model that gathers context, takes actions through real tools, and checks results. The
model is the engine; the harness is the whole car, with a gearbox, pedals, and dashboard you control.
You can be brilliant at prompting and still crash, because you never learned where the controls are.

So we start at the controls. This module isn't a syllabus for the rest of the course — it's the one
where you learn to *operate the machine* you'll drive for the next twelve modules. Everything else
(planning, context, verification) is a way of driving this loop well; here we learn the loop's
actual knobs.

## The big idea: the agent is a loop, and the controls are yours

Anthropic defines Claude Code in exactly these terms: it "serves as the agentic harness around
Claude... the tools, context management, and execution environment that turn a language model into a
capable coding agent," running a three-phase loop — **gather context → take action → verify
results** (`RESEARCH.md`, Pillar 1).

```
        ┌─────────────────────────────────────────────┐
        │                                               ▼
   gather context  ───►  take action  ───►  verify results
   (read, search)       (edit, run,         (test, build,
                         call tools)          read output) ──► done? ──► loop
```

Every turn the agent runs this loop. Three knobs decide *how* it runs, and all three are yours:

- **Permission mode** — how far it may act before stopping to ask you (the gearbox).
- **The tool surface** — *what* actions it can take at all (the pedals and levers).
- **Settings & memory** — the standing defaults that shape every loop (the car's configuration).

We'll operate all three, in that order.

## Control 1: permission modes — the gearbox

The permission mode is how much the agent does before it stops for your approval. Here's a wrinkle
worth meeting on day one, because it *is* the lesson: Anthropic's docs describe modes **two different
ways** — one page lists **four** modes cycled with Shift+Tab; the dedicated permission-modes
reference lists **six** (`RESEARCH.md`, Pillar 1). Don't memorize a count — learn the spectrum, from
tightest leash to loosest:

| Mode | What the agent may do | When you reach for it |
|---|---|---|
| **`plan`** | read & explore only — **cannot edit** | thinking through an approach before any change (Module 4) |
| **`default`** | reads freely; **asks** before each edit / command | normal work — you stay in the loop on every change |
| **`acceptEdits`** | reads + edits + common filesystem commands, no asking | a well-scoped change you've already reasoned about |
| **`auto`** *(preview)* | nearly everything, with background safety checks | longer autonomous runs you're *supervising* |
| **`dontAsk`** | only pre-approved tools, nothing else | locked-down CI / non-interactive runs |
| **`bypassPermissions`** | everything, no checks | **isolated containers/VMs only** — never your real machine |

In the CLI, **Shift+Tab cycles `default → acceptEdits → plan`** (the three you'll live in). You can
also launch with `--permission-mode <name>`, or set a persistent `defaultMode` in `settings.json`. In
VS Code, Desktop, and web, a selector replaces the keypress (`RESEARCH.md`, Pillar 1). Picking the
mode is you deciding *how tight to hold the leash* — and making that choice deliberately, per task, is
most of what "driving well" means.

> **▶ Do this now (Rep A).** Open a real Claude Code session and press **Shift+Tab** slowly three
> times, watching the mode indicator. Say out loud the order it cycles and one thing the agent
> *cannot* do in `plan`. That reflex — knowing your current gear without looking — is the foundation.

### Auto mode is a seatbelt, not a chauffeur

`auto` mode deserves a closer look because it's the one people misuse. It's a research preview
(v2.1.83+) built as "a middle ground between manual review and no guardrails," motivated by a real
finding: in `default` mode, users approve **93%** of permission prompts anyway (`RESEARCH.md`,
Pillar 1). So auto mode tries to skip the rubber-stamping *safely*, with a **two-layer defense**:

1. **Input layer** — a server-side prompt-injection probe scans tool *outputs* before they enter the
   agent's context (catching "ignore your instructions" payloads hidden in files/web pages).
2. **Output layer** — a transcript classifier (running on Sonnet 4.6) evaluates each action *before*
   it executes.

Actions are **tiered**: Tier-1 (read-only / safelisted) and Tier-2 (in-project file edits) proceed
without review; only **Tier-3** (shell commands, external tools, out-of-project filesystem writes)
reach the classifier. It pauses and re-prompts you after 3 consecutive or 20 total blocks
(`RESEARCH.md`, Pillar 1).

Here's the number that keeps you honest: on 52 real overeager actions, that full pipeline still had a
**17% false-negative rate** (`RESEARCH.md`, Pillar 1). So auto mode lets you work faster *while
supervising* — it is never permission to stop watching. And `bypassPermissions` removes the
guardrails entirely: reserve it for throwaway containers/VMs, never your real repo.

> **Note:** for subagents (Module 9), the classifier checks at three points — before spawn, during
> each action, at finish — and any `permissionMode` set in a subagent's own frontmatter is **ignored**
> (`RESEARCH.md`, Pillar 1). The orchestrator's policy wins.

## Control 2: the tool surface — the pedals and levers

The agent never touches your machine directly; it acts through **tools** (Read, Edit, Bash, Glob,
Grep, Skill, …). Anthropic frames a tool as "a new kind of software which reflects a contract between
deterministic systems and non-deterministic agents" — designed to anticipate unpredictable or even
hallucinated calls (`RESEARCH.md`, Pillar 1). That contract framing matters to you as a driver:
**the set of tools available, and what each returns, shapes what the agent can and will do.**

Two properties of a *good* tool surface are worth knowing now, because they recur all course:

- **High-signal returns, not high-volume.** Agent context is scarce (Module 2's whole subject), so
  well-built tools return *filtered* information, not raw dumps. A tool that returns 500 lines of log
  poisons the loop; one that returns the 3 relevant lines sharpens it.
- **Consolidation and namespacing.** Good surfaces collapse many fiddly operations into one
  meaningful action (a single `schedule_event` rather than ten calls) and namespace related tools
  (`asana_search`) so the agent can tell boundaries apart (`RESEARCH.md`, Pillar 1).

You don't build tools yet — but you *read* the surface, because it tells you what the agent is even
capable of this session, and a bloated surface is a real cost (you'll meet that sharply with MCP in
Module 11).

> **▶ Do this now (Rep B).** Point a session at the practice sandbox (**`sandbox/`**) and, in `plan`
> mode, ask your agent: *"List the tools you currently have available and one line on what each
> does."* Read the surface. Notice which are read-only (safe to let run) vs. which act on the world
> (Bash, Edit). You just inventoried your pedals.

## Control 3: settings & memory — the standing configuration

Modes and tools are per-session; **settings** are the defaults that shape *every* session. The one to
know on day zero is `settings.json` (`defaultMode`, allowed tools, env), which sits alongside the
memory file `CLAUDE.md` that loads at the start of every conversation. We go deep on memory in
Module 2 — for now, all you need is: *there is a file that configures your harness, and you should
know where it lives.*

### The harness has extension points — and packs that fill them

Settings are just the start. The harness exposes a whole set of **extension points** you can wire up:
**subagents** (delegate work to a fresh context), **skills** (reusable procedures), **slash commands**
(saved prompts you trigger by name), **hooks** (scripts that fire on events), **rules** (standing
instructions like `CLAUDE.md`), **MCP** (servers that add new tools), and **settings** themselves.
Each is a socket; you don't have to fill any of them, but every one you do shapes how the loop runs.

A **configuration/extension pack** is just a curated bundle that fills those sockets for you — a set
of subagents, skills, commands, hooks, and rules shipped together so you don't assemble them one by
one. **"Everything Claude Code" (ECC) is one such pack — there are many.** Treat ECC as *one example*
of a pack, never as the definition of what a pack is; the extension points are the harness's, and any
number of packs (or your own hand-rolled config) can fill them.

> **▶ Do this now (Rep C).** Locate your settings: check for a project `.claude/settings.json` and
> your user `~/.claude/settings.json`. Open one and find (or imagine adding) `defaultMode`. You've now
> seen where the car's configuration lives — we'll tune it in later modules.

## Watch it done well

*Transcript 0-1: a developer chooses the gear first, reads the surface, then acts deliberately.*

```
You:    [Shift+Tab → plan]  In sandbox/, how does `find` report when no notes match?
Claude: [reads cli.py, notes.py — makes no edits]
        The `find` command calls store.find(query); on no matches cli.py prints
        "No notes match that querry." — note the misspelled "querry". [summary]
You:    Good. [Shift+Tab → default]  Fix that typo to "query".
Claude: [proposes a one-line edit to the message string, waits for approval]
You:    [reads the one-line diff] Approved.
```

They entered `plan` to explore with zero edit-risk, dropped to `default` for one reviewable change,
and approved knowingly. The mode was a *choice*, matched to the phase of work.

*Anti-pattern 0-2: same task, driven blind.*

```
You:    fix the notes typo   [in acceptEdits, no exploration]
Claude: [greps for "querry", also "fixes" an unrelated string in notes.py, edits
         two files — all auto-accepted]
You:    wait — what did you just change?
```

Loose leash *and* no gather-context phase: the agent acted across two files before the human
understood the problem. Not the model failing — the harness driven in the wrong gear.

## 🧠 Active recall

No peeking:

1. Name the three phases of the harness loop, in order — and the three controls *you* hold over it.
2. You want to ask about unfamiliar code with **zero** risk of an edit. Which mode, and how do you get there?
3. Auto mode has a 17% false-negative rate on overeager actions. In one sentence: what does that mean for how you use it?
4. Name three of the harness's extension points, and say in one sentence what a configuration pack does (with ECC as *one example*, not the definition).

## 🔍 In the wild

Open the real **"How Claude Code works"** and **permission-modes** docs (cited in `RESEARCH.md`,
Pillar 1). Find the gather → act → verify description in Anthropic's words, then count how many modes
*your* version exposes (four? six?). You just did the "know your version" check this module is really
about — the docs are the source of truth, not any single tutorial.

## What you learned + what's next

You can now operate the harness: name the loop, hold its three controls, switch every mode on purpose,
read the tool surface, and find your settings. **The one sentence to remember:** *you're not prompting
a model, you're operating a loop — and the gearbox, the pedals, and the configuration are all yours.*

Next up, **Module 1 — Your First Drive**: you'll take one real task through the entire loop end to
end, so you've felt the whole arc *once* before we slow down and master each piece.
