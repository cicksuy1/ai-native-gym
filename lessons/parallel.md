# Module 10 — Parallelism & Isolation

> **You are here:** you can delegate one side-task cleanly (Module 9). Now we run *many* agents at
> once — which only works if they can't trip over each other. The primitive that makes it safe is the
> git worktree.

## Why this matters

The dream of parallel agents — five features built at once — dies fast if they're all editing the
same working directory. They overwrite each other's files, produce merge conflicts mid-flight, and
leave you with a tangle no one can reconstruct. So the first lesson of parallelism isn't "spawn more
agents." It's **isolation**: give each agent its own sandbox *before* you scale.

That's why this module leads with the primitive, not the parallelism. Get isolation right and
parallelism is safe and boring. Get it wrong and parallelism is a fast way to corrupt your repo.

## The big idea: git worktrees are the isolation primitive

A git worktree is a separate checkout of the same repo, in its own directory, on its own branch. The
research is clear that worktrees are the **standard isolation mechanism**: each agent gets its own
checkout, so parallel sessions *never edit the same files and never produce merge conflicts while
working* (`RESEARCH.md`, Pillar 4). Reach for isolation *before* parallelism — it's principle #6 of
the whole course.

Claude Code builds on this directly:

- **`claude --worktree`** launches a session in its own worktree (the "Parallel Claude" pattern).
- **Agent view** dispatches background sessions and **moves each into its own worktree
  automatically** (`RESEARCH.md`, Pillar 4).
- **`/batch`** splits one large change into **5–30 worktree-isolated subagents, each opening a
  separate PR** (`RESEARCH.md`, Pillar 4).

Anthropic documents running **5–10 sessions in parallel** (≈5 local on a laptop), with a practical
rhythm of 3–4 instances on different tasks, cycling through to check progress (`RESEARCH.md`,
Pillar 4). The common thread: every parallel worker is *isolated* first.

## The principle: isolate first — and know when parallel actually pays off

Two halves to the skill.

**Isolate before you parallelize.** If two agents might touch the same files, they each need a
worktree. No exceptions — this is the cheap insurance that makes the whole thing safe.

**Know when parallel is worth it.** Parallelism has real coordination and token cost, and it does
*not* always pay. The research is explicit that multi-agent is a **poor fit for tightly-coupled
coding** — "running a single Claude Code session is best suited for developing a single feature"
(`RESEARCH.md`, Open Debates). Parallelism shines on **independent, parallelizable** work:

| Parallel pays off | Parallel hurts |
|---|---|
| Several *independent* features/files | One tightly-coupled feature split across agents |
| A wide audit or 500-file migration (`/batch`) | Work where step B needs step A's result |
| Exploring 3 approaches to compare | Anything needing constant cross-agent coordination |

The honest rule: *most coding tasks are one feature and want one session.* Parallelism is for when
the work is genuinely independent — then isolation makes it safe and it's a real multiplier.

> **Note:** worktrees are *recommended* isolation, not a hard requirement (one of the claims the
> research explicitly walked back — `RESEARCH.md`, Appendix). You *can* parallelize without them; you
> just take on the risk of conflicts. The point stands: when parallel agents share files, isolate.

## Watch it done well

*Transcript 8-1: three independent tasks, each isolated.*

```
You:    Three unrelated chores: (a) bump the linter config, (b) add a CONTRIBUTING
        file, (c) fix the typo'd error in payments.ts. These don't touch each
        other — run them in parallel, each in its own worktree.

        [claude --worktree for each, or /batch]

Claude: [worktree-1: linter] [worktree-2: docs] [worktree-3: payments]
        Three branches, three PRs, zero shared files, zero conflicts.

You:    [reviews three clean PRs independently, merges each on its own merits]
```

The tasks were genuinely independent, so parallelism was a real speedup — and because each ran in its
own worktree, there was never a moment where two agents fought over a file.

*Anti-pattern 8-2: parallel on coupled work, no isolation.*

```
You:    build the new checkout flow — spin up 3 agents to go faster

Claude: [agent-1 edits cart.ts, agent-2 ALSO edits cart.ts, agent-3 rewrites the
         types they both depend on — all in the same working dir]
        [merge conflicts mid-flight; agent-2 overwrites agent-1; the types
         change breaks both]
You:    this is slower and more broken than one agent would have been
```

One coupled feature, force-split across three agents sharing one checkout. The "parallelism" created
conflicts, rework, and a feature that's *worse* than a single session would have produced. Wrong
tool, no isolation.

## 🧠 Active recall

No peeking:

1. What is a git worktree, and what problem does it solve for parallel agents?
2. Give two kinds of work where parallelism pays off, and one where a single session is better.
3. What does "isolate before you parallelize" mean in practice?

## 🔍 In the wild

Open the Claude Code **agents** docs (`RESEARCH.md`, Pillar 4) and find the four parallelization
mechanisms and how agent view auto-creates worktrees. Try **`claude --worktree`** once on a throwaway
task to feel the isolated checkout. Then read the Open-Debates note in `RESEARCH.md` on when
multi-agent is a poor fit for coding — and be honest about how often your work is *actually*
parallelizable.

## What you learned + what's next

You now isolate with git worktrees before you parallelize, you know Claude Code's parallel mechanisms
(`--worktree`, agent view, `/batch`), and you can tell genuinely-parallel work from coupled work that
wants one session. **The one sentence to remember:** *isolate first with worktrees, and only
parallelize work that's actually independent.*

Next, **Module 11 — Skills, Hooks & MCP**: the three ways to *extend* the harness — reusable
workflows, deterministic automation, and external state — and the context cost of each.
