# AI-Native Gym 🏋️

**A trainer that makes you a better *executor* of AI coding tools.**

Most of us picked up AI coding by osmosis — we got fast, but not deliberate. The AI-Native Gym is a
self-paced course that drills the core 2026 workflows (planning, context management, spec-driven
work, **verification loops**, delegation, staying in command) the way you actually learn them:
**by driving a real agent and getting coached on how you drove.**

> **Read this file first.** It's the front door and your orientation. Then start a session and the
> coach takes it from there.

> 🚧 **Status:** in active development. The curriculum, ruleset, and teaching style are in place;
> the lessons, drills, and web UI are being built module by module (seed modules: Harness, Planning,
> Verification).

---

## Why "AI-native"?

The research is blunt about where 2026 went (see [`RESEARCH.md`](./RESEARCH.md), fully cited): the
bottleneck is no longer *generating* code — it's *verifying* it, and *driving* the agent well. The
dominant failure isn't the model being dumb; it's the model missing context you assumed was obvious.

So "AI-native" isn't about typing faster. It's a handful of habits:

1. **Treat verification, not generation, as the job** — always give the agent a runnable pass/fail signal.
2. **Plan before you act** — but skip the plan when the diff fits in one sentence.
3. **Write the contract, not the wish** — make the implicit explicit before the agent starts.
4. **Engineer context for signal, not volume** — the *right* tokens, not the most.
5. **Delegate with structure, isolate with worktrees** — and know when *not* to.
6. **Match autonomy to the task, and stay the executor** — review with judgment; keep checkpoints.

The gym turns each of these into a module you *practice*, not just read.

---

## How it works — read → practice → challenge

Every module follows the same loop:

1. **Read** a short lesson (warm, example-first — see [`STYLE.md`](./STYLE.md)).
2. **Practice** a structured drill — small reps, each with a clear pass signal.
3. **Challenge** a realistic mission, graded by a **scorecard** on *how you drove the agent*:
   *did you plan? engineer context? delegate well? close a verify loop? stay the executor?*

It's **self-paced**. A module is "passed" when you've attempted the challenge, your scorecard clears
a lenient bar (≥ 3/5 solid; weak spots are logged as "keep drilling", never blocking), and you've
answered a cold recall question. The coach confirms it with you, then marks it done. Finish all
modules and you get a **graduation reflection** on how you grew and what to keep drilling.

The full rules live in [`AGENTS.md`](./AGENTS.md); the module list in [`CURRICULUM.md`](./CURRICULUM.md).

---

## The curriculum (13 modules, four parts)

Built like a book — **start by doing**, the whole arc in an early exemplar, deep single-idea chapters,
and integration projects:

- **Part I — Getting Started:** `harness` · `first-drive`
- **Part II — The Core Loop:** `context` · **`verify`** ⭐ · `planning` · `spec` · `ship-feature` *(project)*
- **Part III — At Scale & In Command:** `tdd` · `review` · `delegate` · `parallel` · `extend`
- **Part IV — Orchestration & Judgment:** `orchestrate` *(capstone)*

Module 3 (Verification) is the spine — placed early because every later module loops back to it. See
[`CURRICULUM.md`](./CURRICULUM.md) for the principle and lesson **type** behind each.

---

## Quickstart

**Prerequisites:** [Claude Code](https://claude.com/claude-code), [Bun](https://bun.sh) (for the
web UI), and `git`.

**Terminal (works today):**

```bash
git clone <your-fork-url> ai-native-gym
cd ai-native-gym
# open the folder in Claude Code, then say:
#   "start the AI gym"
```

The `/ai-gym` skill places you at Module 0 and the coach runs the loop.

**Web UI (Bun):**

```bash
bun install        # or: task setup
bun run app        # or: task app   → http://localhost:4600
```

The UI is a *tunnel* to a real Claude Agent SDK conversation — it renders the lesson, the challenge,
and your scorecard, and streams the coach. It does no grading itself; the coach runs the course.

---

## Repo layout

```
ai-native-gym/
├── README.md          ← you are here
├── RESEARCH.md        ← the cited research foundation
├── AGENTS.md          ← the authoritative teaching ruleset
├── STYLE.md           ← lesson/voice style guide (Rust-Book-derived)
├── CURRICULUM.md      ← module order + principles
├── .claude/skills/    ← ai-gym, ai-coach, ai-memory, ai-ui, ai-graduation
├── lessons/           ← one lesson per module (rendered in the UI)
├── exercises/         ← per module: drill/ + challenge/ (+ scorecard)
├── progress/          ← your private state (gitignored)
└── gym-app/           ← Bun + Agent SDK server, React/Vite/Tailwind UI
```

---

## Credits

Inspired by the cognitive-tutoring structure of the "Go Gym" and the teaching voice of
*The Rust Programming Language*. Built with Claude Code.

Licensed under the [MIT License](./LICENSE).
