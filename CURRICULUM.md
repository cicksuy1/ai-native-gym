# Curriculum — AI-Native Gym

The single source of truth for module order, slugs, and status. Each module teaches **one core
principle** of AI-native development, is **language-agnostic** (you practice *how you drive the
agent*, not a specific stack), and is **self-paced**. Principles and citations come from
[`RESEARCH.md`](./RESEARCH.md).

## How a module works — read → practice → challenge

1. **Read** the module's `lessons/<slug>.md` (in the web UI or your editor).
2. **Practice** the structured drill in `exercises/<slug>/drill/` — small reps, each with a clear pass signal.
3. **Challenge** the mission in `exercises/<slug>/challenge/` — a realistic task graded by a **scorecard** on *how you drove the agent*.

See [`AGENTS.md`](./AGENTS.md) for the teaching loop and the exact pass rules.

## Modules

| # | Module | slug | Core principle | Status |
|---|--------|------|----------------|--------|
| 0 | Setup & Harness Fluency | `harness` | The harness is the agent loop (gather context → act → verify). Know your modes (plan/accept/auto/default), permissions, and tool surface. | ⬜ to write |
| 1 | Context Management | `context` | "The right tokens, not the most." `/clear` & `/compact`, compaction vs. tool-clearing vs. memory, CLAUDE.md < 200 lines, path-scoped rules, progressive disclosure. | ⬜ to write |
| 2 | Planning & Plan-vs-Act | `planning` | Explore → Plan → Code → Commit. "If you could describe the diff in one sentence, skip the plan." | ⬜ to write |
| 3 | Spec-Driven Development | `spec` | Hand the agent a contract, not a wish. SPEC.md, interview-then-execute-in-a-fresh-session, graduated boundaries. | ⬜ to write |
| 4 | **Verification Loops** ⭐ | `verify` | Verification is the 2026 bottleneck. Give the agent a runnable pass/fail signal so the loop closes itself. | ⬜ to write |
| 5 | TDD with Agents | `tdd` | Tests first, confirm they fail, commit them, write code to pass — without editing the tests. | ⬜ to write |
| 6 | Reviewing AI Output & Staying the Executor | `review` | Fresh-context reviewer; let it run to ~80% then review; clean git + checkpoints; you keep judgment. | ⬜ to write |
| 7 | Subagent Delegation | `delegate` | Each subagent needs an objective, output format, tools, and boundaries; return summaries, not transcripts. | ⬜ to write |
| 8 | Parallelism & Isolation | `parallel` | Worktrees are the safe-parallelism primitive (`claude --worktree`, agent view, `/batch`); know when parallel actually pays off. | ⬜ to write |
| 9 | Skills, Hooks & MCP | `extend` | Reusable workflows (progressive disclosure), deterministic automation (hooks / PreToolUse hard-blocks), external state (MCP) and its context cost. | ⬜ to write |
| 10 | Orchestration at Scale & Knowing When *Not* To | `orchestrate` | Dynamic workflows, judge/verify panels; autonomy isn't a ranking; budget for ~15× token cost. | ⬜ to write |

⭐ Module 4 (Verification) is the spine of the course — every later module loops back to it.

## Passing a module

A module flips to ✅ when (self-paced, soft — not a hard gate):

- the **challenge** mission was attempted,
- its **scorecard** clears the lenient bar (every dimension attempted + **≥ 3/5 solid**; weak dimensions are recorded as "keep drilling", never blocking),
- and you answered **≥ 1 cold recall** question for this module (plus one cold re-quiz of an earlier module's weak spot).

The `ai-graduation` skill confirms with you, then records the ✅ + date + scorecard in `progress/PROGRESS.local.md`.

## Course graduation

When all 11 modules are passed: a **cold recall sweep** across all modules, then a **graduation
reflection report** — your sticking points, what you overcame, scorecard trends, strongest and
weakest principles, and a "keep drilling" list — generated from `progress/NOTES.local.md` and
`progress/PROGRESS.local.md`. An optional capstone mission can precede it.
