# Module 10 — Orchestration at Scale & Knowing When *Not* To

> **You are here:** the finale. You've learned every individual move — now we put them together at
> scale, and learn the hardest judgment of all: when *not* to. This module loops back to every one
> before it.

## Why this matters

By now you can delegate (7), isolate and parallelize (8), and extend the harness (9). Orchestration
is the top of that ladder: coordinating *dozens to hundreds* of agents on work too big for one
conversation — codebase-wide audits, 500-file migrations, research cross-checked from many angles.
Done right, it's a genuine superpower.

But here's the lesson that separates an executor from a button-masher: **more orchestration is not
more better.** The research is emphatic — autonomy is *not a ranking*, higher is not always better,
and the most credible path to production value "is not full autonomy… it is coherent orchestration
with clear task boundaries" and human checkpoints (`RESEARCH.md`, Open Debates). The final skill is
knowing when the task earns an orchestra, and when it just wants one good player.

## The big idea: fan out → reduce → synthesize, with the script holding the loop

The 2026 orchestration pattern *inverts* traditional agent control flow: instead of the model
deciding turn-by-turn, **you write deterministic control flow as plain code** and delegate each step
to a fresh subagent (`RESEARCH.md`, Pillar 4). The core shape is **fan out → reduce → synthesize**,
and its genius is a context-management trick (Module 1 again): *"the script holds the loop, the
branching, and the intermediate results, so Claude's context only ever sees the final answer."*

On top of that sit reusable **verification patterns** — the spine of the course, scaled up:
**adversarial verify** (multiple skeptics try to refute a finding), **judge panels with scoring**,
and **loop-until-dry discovery** (`RESEARCH.md`, Pillar 4). A production `/deep-research` workflow
runs: scope → parallel searches → fetch & dedupe → adversarial verify → synthesize a cited report.
*(This very gym's `RESEARCH.md` was produced with a leaner single-vote version of exactly that
pattern.)*

## The principle: orchestrate only what's parallelizable and high-value — and budget for ~15×

Two judgments make or break orchestration.

**Is the work actually orchestratable?** Multi-agent shines on **parallel, information-saturated**
work (research, audits, migrations) and is a **poor fit for tightly-coupled coding** (`RESEARCH.md`,
Open Debates). The reconciliation across the whole field: orchestration multiplies *independent*
work; it actively *harms* coupled work where agents must coordinate in real time.

**Is it worth the cost?** Multi-agent systems use roughly **15× the tokens of a chat** (`RESEARCH.md`,
Open Debates & Pillar 10-principle). That's not a reason to never do it — it's a reason to reserve it
for high-value work and to **perfect the initial prompt first**, because a bad orchestration "can
waste hours of compute." (This gym learned that the expensive way — re-running a research workflow
that had already done its job.)

So the decision tree for the executor:

| The work is… | Do this |
|---|---|
| One coupled feature | One session (Module 2/6) — **don't orchestrate** |
| A few independent tasks | Parallel worktrees (Module 8) |
| Huge, parallel, high-value (audit, migration, research) | Orchestrate: fan out → reduce → synthesize, with verify panels |
| Anything you haven't scoped | Scope it first — never fan out on a fuzzy prompt |

> **Note:** "knowing when *not* to" is the actual graduation skill. Reaching for an orchestra on a
> one-feature task is the most expensive beginner mistake there is. Match the autonomy to the task;
> stay the executor with checkpoints. Higher autonomy can *increase* your workload by dumping it all
> into review (`RESEARCH.md`, Open Debates).

## Watch it done well

*Transcript 10-1: the right tool at each scale — including choosing not to orchestrate.*

```
Task: "rename a function and fix its 3 callers."
You:  one session. [Coupled, tiny. No orchestra.]

Task: "audit all 400 API handlers for missing auth checks."
You:  [parallel, info-saturated, high-value → orchestrate]
      Workflow: fan out 1 reader per handler-group → each returns findings →
      reduce/dedupe → adversarial verify each finding (3 skeptics) → synthesize
      a report. Script holds the loop; my context sees only the final report.
      [scopes + tests the prompt on 5 handlers FIRST, then fans out]

Task: "build the new billing flow."
You:  one session, spec-driven. [Coupled. Orchestration would just create
      conflicts and burn 15× tokens for a worse result.]
```

Three tasks, three *different* answers — and two of them were "don't orchestrate." The audit earned
the orchestra (parallel, high-value), and even then the prompt was scoped and tested on 5 before
fanning out to 400.

*Anti-pattern 10-2: the orchestra for everything.*

```
You:  [fires a 50-agent workflow at "improve the codebase" with no scoping]

Result: agents trip over coupled files, half the findings are noise, the
        verify panel can't converge on a fuzzy objective, and the run burns
        ~15× the tokens of just... doing the three things that mattered.
You:  [hours of compute, a pile of low-signal output to review]
```

An unscoped fuzzy prompt, fanned out massively, on work that wasn't cleanly parallel. Maximum
autonomy, minimum value — the exact failure the whole course has been inoculating you against.

## 🧠 Active recall

No peeking:

1. Describe the fan out → reduce → synthesize pattern — and why "the script holds the loop" is a
   context-management win.
2. What kinds of work earn orchestration, and what kind should stay a single session?
3. Roughly what token multiplier does multi-agent cost, and what should you do *before* fanning out?

## 🔍 In the wild

Open the "Claude Code Workflows: Deterministic Orchestration" write-up and the multi-agent research
system post (`RESEARCH.md`, Pillar 4 & Open Debates). Find fan-out→reduce→synthesize, the verify
patterns, and the "15× tokens" / "poor fit for most coding" cautions. Then look at this gym's own
`RESEARCH.md` provenance note — a real fan-out→verify→synthesize run, and a real lesson in *not*
re-running one.

## What you learned + what's next

You can now orchestrate at scale — fan out → reduce → synthesize with verify panels — *and*, more
importantly, you know when **not** to: coupled work wants one session, fuzzy prompts get scoped
first, and every orchestra costs ~15×. **The one sentence to remember:** *orchestration is a
multiplier for independent, high-value work — and the executor's mark is knowing when one good
session beats an orchestra.*

**This is the last module.** When you've passed it, ask the coach to **graduate you**: a cold recall
sweep across all eleven principles and a reflection on how you grew as an executor. You came in
driving AI tools by reflex. You're leaving driving them on purpose.
