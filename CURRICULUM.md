# Curriculum — AI-Native Gym

The single source of truth for module order, slugs, **lesson type**, and status. Each module teaches
**one core principle** of AI-native development, is **language-agnostic** (you practice *how you drive
the agent*, not a specific stack), and is **self-paced**. Principles and citations come from
[`RESEARCH.md`](./RESEARCH.md); the teaching architecture comes from [`STYLE.md`](./STYLE.md).

## How the course is shaped (the learning architecture)

`RESEARCH.md` is a *survey* — organized for coverage. A *course* must be organized for acquisition,
so the curriculum is built like *The Rust Programming Language*: **start by doing**, hand you the
**whole arc in miniature early**, then teach each idea deeply, and **consolidate with projects**. That
means lessons are **not** all the same shape — each has a **type** (see [`STYLE.md`](./STYLE.md),
"Lesson types"):

- **Orientation** — operate the machine, hands-on.
- **First-Drive / Exemplar** — the whole loop end-to-end, shallow, with forward-links (the "Guessing Game").
- **Principle** — one idea, taught deeply; owns its substance.
- **Integration / Project** — combine ≥ 3 principles on one realistic task.

## How a module works — read → practice → challenge

1. **Read** the module's `lessons/<slug>.md` (in the web UI or your editor).
2. **Practice** the structured drill in `exercises/<slug>/drill/` — small reps, each with a clear pass signal. *(Project modules skip the separate drill — the mission is the rep.)*
3. **Challenge** the mission in `exercises/<slug>/challenge/` — a realistic task graded by a **scorecard** on *how you drove the agent*.

See [`AGENTS.md`](./AGENTS.md) for the teaching loop and the exact pass rules.

## Modules (13, across four parts)

### Part I — Getting Started

| # | Module | slug | Type | Core idea | Status |
|---|--------|------|------|-----------|--------|
| 0 | Getting Started & Harness Fluency | `harness` | Orientation | The harness is the agent loop (gather → act → verify). Operate it: modes, the tool surface, permissions, settings. | ⬜ to write |
| 1 | Your First Drive | `first-drive` | Exemplar | Take one real task end-to-end — explore → plan → verify → review — *shallow*, with forward-links. The whole arc in miniature. | ⬜ to write |

### Part II — The Core Loop

| # | Module | slug | Type | Core principle | Status |
|---|--------|------|------|----------------|--------|
| 2 | Context Management | `context` | Principle | "The right tokens, not the most." `/clear` & `/compact`, compaction vs. tool-clearing vs. memory, CLAUDE.md < 200 lines, path-scoped rules. | ⬜ to write |
| 3 | **Verification Loops** ⭐ | `verify` | Principle | Verification is the 2026 bottleneck. Give the agent a runnable pass/fail signal so the loop closes itself. **The distinctive idea every later module leans on.** | ⬜ to write |
| 4 | Planning & Plan-vs-Act | `planning` | Principle | Explore → Plan → Code → Commit. "If you could describe the diff in one sentence, skip the plan." The plan names its verify signal. | ⬜ to write |
| 5 | Spec-Driven Development | `spec` | Principle | Hand the agent a contract, not a wish. SPEC.md, interview-then-execute-in-a-fresh-session, graduated boundaries. | ⬜ to write |
| 6 | Project: Ship a Feature | `ship-feature` | Project | Integrate Modules 2–5 — plan a multi-file feature, keep context tight, close a real verify loop, review and stay the executor. | ⬜ to write |

### Part III — Working at Scale & Staying in Command

| # | Module | slug | Type | Core principle | Status |
|---|--------|------|------|----------------|--------|
| 7 | TDD with Agents | `tdd` | Principle | Tests first, confirm they fail, commit them, write code to pass — without editing the tests. Verification at its sharpest. | ⬜ to write |
| 8 | Reviewing AI Output & Staying the Executor | `review` | Principle | Fresh-context reviewer; let it run to ~80% then review; clean git + checkpoints; you keep judgment. | ⬜ to write |
| 9 | Subagent Delegation | `delegate` | Principle | Each subagent needs an objective, output format, tools, and boundaries; return summaries, not transcripts. | ⬜ to write |
| 10 | Parallelism & Isolation | `parallel` | Principle | Worktrees are the safe-parallelism primitive (`claude --worktree`, agent view, `/batch`); know when parallel actually pays off. | ⬜ to write |
| 11 | Skills, Hooks & MCP | `extend` | Principle | Reusable workflows (progressive disclosure), deterministic automation (hooks / PreToolUse hard-blocks), external state (MCP) and its context cost. | ⬜ to write |

### Part IV — Orchestration & Judgment

| # | Module | slug | Type | Core principle | Status |
|---|--------|------|------|----------------|--------|
| 12 | Capstone: Orchestration at Scale & Knowing When *Not* To | `orchestrate` | Project | Dynamic workflows, judge/verify panels; autonomy isn't a ranking; budget for ~15× token cost. Integrates the whole course. | ⬜ to write |

⭐ Module 3 (Verification) is the spine of the course — every later module loops back to it. It is
placed **early**, right after Context, so that Planning and Spec (which name their own verify signal)
reference it as something you already know, not a forward promise.

## Passing a module

A module flips to ✅ when (self-paced, soft — not a hard gate):

- the **challenge** mission was attempted,
- its **scorecard** clears the lenient bar (every dimension attempted + **≥ 3/5 solid**; weak dimensions are recorded as "keep drilling", never blocking),
- and you answered **≥ 1 cold recall** question for this module (plus one cold re-quiz of an earlier module's weak spot).

The `ai-graduation` skill confirms with you, then records the ✅ + date + scorecard in `progress/PROGRESS.local.md`.

The five scorecard dimensions are identical for every module: **P**lanned before acting · engineered
**C**ontext · **D**elegated & isolated · closed a **V**erify loop · **R**eviewed & stayed the
executor. Project modules weight several at once.

## Course graduation

When all 13 modules are passed: a **cold recall sweep** across all modules, then a **graduation
reflection report** — your sticking points, what you overcame, scorecard trends, strongest and
weakest principles, and a "keep drilling" list — generated from `progress/NOTES.local.md` and
`progress/PROGRESS.local.md`. The Module 12 capstone serves as the final integration before it.
