# Module 0 — Setup & Harness Fluency

> **You are here:** the very first rep. By the end of this page you'll know what the *harness* is,
> why it — not the model — is what you're actually driving, and how to switch its modes on purpose
> instead of by accident.

## Why this matters

Here's a thing that trips up sharp engineers when they start driving an AI coding agent: they think
they're talking to "the model." They're not. They're operating a **harness** — a loop of software
wrapped around the model that gathers context, takes actions with real tools, and checks the
results. The model is the engine; the harness is the whole car. You can be brilliant at prompting
and still crash, because you never learned where the gears are.

So we start here. Not with clever prompts — with the machine you're sitting in. Get fluent with the
harness and everything else in this course gets easier, because every later principle (planning,
context, verification) is really just *a way of driving this loop well*.

## The big idea: the agent is a loop, and you steer it

Anthropic describes Claude Code in exactly these terms: it "serves as the agentic harness around
Claude... the tools, context management, and execution environment that turn a language model into a
capable coding agent," running a three-phase loop — **gather context → take action → verify
results** (`RESEARCH.md`, Pillar 1). Read that loop again, because it's the spine of the whole
course:

1. **Gather context** — the agent reads files, runs searches, pulls in what it needs to understand.
2. **Take action** — it edits files, runs commands, calls tools.
3. **Verify results** — it checks whether the action worked, and loops back if not.

Your job as the executor is to *shape each phase*: feed the right context (Module 1), decide whether
to plan first (Module 2), and make sure step 3 has a real signal to check against (Module 4). For
now, just hold the loop in your head. Everything hangs off it.

## The principle: modes are your gearbox

The single most practical lever on the harness is the **permission mode** — how much the agent can
do before it stops to ask you. There's a wrinkle worth knowing up front, because it's a great lesson
in *knowing your version*: Anthropic's docs describe this two different ways. One page lists **four**
modes you cycle with Shift+Tab; the dedicated permission-modes reference lists **six**
(`RESEARCH.md`, Pillar 1). Don't memorize a number — learn the *shape*:

| Mode | What the agent may do | When you'd pick it |
|---|---|---|
| **default** | reads freely; **asks** before edits/commands | normal work — you stay in the loop on every change |
| **plan** | reads and explores only — **cannot edit** | thinking through an approach before touching code (Module 2) |
| **acceptEdits** | reads + makes file edits + common fs commands without asking | a well-scoped change you've already reasoned about |
| **auto** *(preview)* | nearly everything, with background safety checks | longer autonomous runs you're supervising |

In the CLI, **Shift+Tab cycles default → acceptEdits → plan**; you can also launch with
`--permission-mode` or set a `defaultMode` in `settings.json` (`RESEARCH.md`, Pillar 1). The reason
this is the first thing to master: picking the mode is you deciding *how tight to hold the leash* —
and that decision, made deliberately, is most of what "driving well" means.

> **Note:** `auto` mode is a seatbelt, not a chauffeur. It's a guardrailed middle ground (built
> because users approve ~93% of prompts anyway), but on 52 real overeager actions its safety pipeline
> still had a **17% false-negative rate** (`RESEARCH.md`, Pillar 1). Use it to work faster while
> *supervising* — never as permission to stop watching. And `bypassPermissions` is for isolated
> containers/VMs only.

## Watch it done well

*Transcript 0-1: a developer starts a small task by choosing the gear first, not by firing a prompt.*

```
You:    [presses Shift+Tab until the mode reads "plan"]
        How does our auth middleware decide which routes are public?

Claude: [reads router.ts, auth.ts, the middleware config — makes no edits]
        Public routes are whitelisted in PUBLIC_PATHS in auth.ts:12; everything
        else hits requireSession(). Here's the flow… [summary]

You:    Good. [Shift+Tab back to default] Add /health to the public list.

Claude: [proposes a one-line edit to PUBLIC_PATHS, waits for approval]
```

Notice what happened: they entered **plan** mode to explore safely (no accidental edits while just
asking a question), got their bearings, then dropped back to **default** for a deliberate, reviewable
change. The mode was a *choice*, matched to the phase of work.

*Anti-pattern 0-2: the same task, driven blind.*

```
You:    fix the auth thing so health checks work   [in acceptEdits, no exploration]

Claude: [edits auth.ts, middleware.ts, and a config file — all auto-accepted]
You:    wait, what did you just change?
```

Same goal, but the leash was loose *and* there was no gather-context phase. The agent acted across
three files before the human understood the problem. That's not the model failing — that's the
harness being driven in the wrong gear.

## 🧠 Active recall

No peeking — answer these out loud or in writing:

1. What are the three phases of the harness loop, in order?
2. You want to ask the agent a question about unfamiliar code *without any risk* of it editing
   anything. Which mode do you switch to, and how?
3. Why is "auto mode is enabled" **not** the same as "I can stop reviewing"?

## 🔍 In the wild

Open the real Claude Code docs page **"How Claude Code works"** (cited in `RESEARCH.md`, Pillar 1).
Find the gather → act → verify description in Anthropic's own words, then open the permission-modes
reference and count how many modes *your* version exposes. You just did the "know your version" check
that this lesson is really about — the docs are the source of truth, not any single tutorial.

## What you learned + what's next

You can now name the harness loop, you know modes are your gearbox, and you've switched them on
purpose. **The one sentence to remember:** *you're not prompting a model, you're driving a loop —
and choosing the gear is most of the job.*

Next up, **Module 1 — Context Management**: now that you can steer the loop, we'll make sure it's
fed the *right* tokens, not the most. That's the constraint behind almost every other best practice
in this course.
