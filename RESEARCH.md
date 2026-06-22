# Core AI Coding Workflows for the AI-Native Developer (as of June 2026)

> **What this is.** The research foundation for the AI-Native Gym — a training program for becoming a
> better *executor* of AI coding tools. It surveys the five pillars of agentic coding as of mid-2026.
>
> **How it was produced.** Fan-out web research (Anthropic official docs + engineering blog + Claude
> Code docs, plus reputable 2026 practitioner sources) → 27 sources fetched → **135 falsifiable claims**
> extracted with supporting quotes → single-skeptic adversarial verification (**127 survived, 8
> refuted** — see appendix) → synthesis. Generated 2026-06-22.
>
> **How to read confidence.** Claims sourced to `code.claude.com`, `platform.claude.com`,
> `claude.com/blog`, and `anthropic.com` are **primary**. Practitioner blogs are **secondary** — useful
> for patterns and field reality, weaker for hard numbers. Lower-confidence items are marked inline.

---

## Executive Summary

As of mid-2026, agentic coding has matured into a discipline organized around five interlocking pillars: the harness that turns a model into an agent, disciplined planning, aggressive context management, subagent delegation, and a set of recurring operational patterns. The consensus across primary Anthropic documentation and independent practitioners is that the bottleneck has shifted from code generation to *verification* of agent output (source: https://addyosmani.com/blog/code-agent-orchestra/; source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026). The dominant failure mode is not the model being "wrong" but the model lacking context the developer assumed was obvious, which is precisely what specs, memory files, and plan mode exist to fix (source: https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html). The human role has shifted toward steering, reviewing, and architectural judgment rather than typing code (source: https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/). Notably, even Anthropic's own engineers maintain active oversight on 80–100% of tasks, and "higher autonomy is not always better" (source: https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/). The teachable throughline is that the smallest set of high-signal tokens, plus a runnable verification signal, plus a human who stays the executor, beats raw autonomy and raw context volume.

---

## Pillar 1 — The Harness

The "agentic harness" is the software wrapper that turns a language model into a coding agent. Anthropic defines Claude Code explicitly this way: "Claude Code serves as the agentic harness around Claude: it provides the tools, context management, and execution environment that turn a language model into a capable coding agent," operating via a three-phase loop of **gather context → take action → verify results** (source: https://code.claude.com/docs/en/how-claude-code-works). Independent analysis reinforces that the harness's value comes from fitting real development loops — terminal access, filesystem integration, persistent project memory, error recovery — rather than from abstract model reasoning capability: "the winning product is the one that fits real development loops" (source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026).

### Permission / operating modes

Permission modes are the primary safety and convenience dial. There is a documentation discrepancy worth teaching as a "know your version" lesson: one Anthropic page lists **four** modes cycled with Shift+Tab — Default, Auto-accept edits, Plan, and Auto (research preview) (source: https://code.claude.com/docs/en/how-claude-code-works) — while the dedicated permission-modes reference lists **six**: `default` (reads only), `acceptEdits` (reads + file edits + common filesystem commands), `plan` (reads only, for exploration), `auto` (everything, with background safety checks), `dontAsk` (only pre-approved tools, for locked-down CI), and `bypassPermissions` (everything; isolated containers/VMs only) (source: https://code.claude.com/docs/en/permission-modes). In the CLI, **Shift+Tab cycles default → acceptEdits → plan**; modes can also be set at startup via `--permission-mode` or persistently via `defaultMode` in `settings.json`. VS Code, Desktop, and web/mobile expose a selector instead (source: https://code.claude.com/docs/en/permission-modes).

**Auto mode** (research preview, requires v2.1.83+) is positioned as "a middle ground between manual review and no guardrails," motivated by the finding that users approve **93%** of permission prompts in default mode (source: https://www.anthropic.com/engineering/claude-code-auto-mode). It uses a two-layer defense: a server-side prompt-injection probe scans tool outputs *before* they enter context (input layer), and a transcript classifier running on **Sonnet 4.6** evaluates each action before execution (output layer) (source: https://www.anthropic.com/engineering/claude-code-auto-mode). Actions are tiered: Tier-1 (read-only/safelisted) and Tier-2 (in-project file operations) proceed without review; **Tier-3** (shell commands, external tools, out-of-project filesystem operations) reach the classifier (source: https://www.anthropic.com/engineering/claude-code-auto-mode). It pauses and resumes prompting after 3 consecutive or 20 total blocks (source: https://code.claude.com/docs/en/permission-modes). Critically for a curriculum: **auto mode is not foolproof** — on 52 real overeager actions the full pipeline had a **17% false-negative rate** (source: https://www.anthropic.com/engineering/claude-code-auto-mode). For subagents under auto mode, the classifier checks at three points (before spawn, during each action, at finish) and **any `permissionMode` in a subagent's frontmatter is ignored** (source: https://code.claude.com/docs/en/permission-modes).

### Tool surface

Tools are described as "a new kind of software which reflects a contract between deterministic systems and non-deterministic agents" and must be designed to anticipate unpredictable or hallucinated calls (source: https://www.anthropic.com/engineering/writing-tools-for-agents). Because agent context is scarce (unlike cheap computer memory), tools should **return only high-signal, filtered information**, **consolidate multiple operations** under the hood (e.g., a single `schedule_event` rather than many granular calls), and use **namespacing** (e.g., `asana_search`) to help the agent delineate boundaries when many tools are present (source: https://www.anthropic.com/engineering/writing-tools-for-agents). Agents can even analyze evaluation transcripts and refactor their own tools (source: https://www.anthropic.com/engineering/writing-tools-for-agents).

### Surfaces and the multi-tool landscape

By 2026 developers use specialized tools for different tasks (exploration, iterative editing, long sessions, browser/infrastructure work), and this fragmentation is read as **market maturity, not confusion** (source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026).

---

## Pillar 2 — Planning & Spec-Driven Development

### Plan mode and the four-phase loop

The single most repeated workflow across primary sources is **Explore → Plan → Code/Implement → Commit**, using plan mode to separate read-only exploration from execution so the agent doesn't "solve the wrong problem" (source: https://code.claude.com/docs/en/best-practices; source: https://www.anthropic.com/engineering/claude-code-best-practices). Anthropic's engineering position is blunt: "Planning is essential. Agents should plan, then act. This goes a long way towards maintaining coherence" — with the practice of explicitly telling Claude to read files and **NOT code yet**, then produce a plan (using "think hard" for extended thinking) documented in markdown before implementation (source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/). Plan mode lets Claude read and explore but **not edit source**; when ready it offers approval paths: approve-and-start-in-auto-mode, approve-and-accept-edits, approve-and-review-each-edit, keep-planning, or refine with Ultraplan. It is entered via Shift+Tab or by prefixing `/plan` (source: https://code.claude.com/docs/en/permission-modes).

### When to plan vs. act

A concrete, teachable heuristic: **"If you could describe the diff in one sentence, skip the plan."** Skip planning for typos, log lines, and renames; plan when uncertain about approach, when the change spans multiple files, or when unfamiliar with the code (source: https://code.claude.com/docs/en/best-practices). The "prompt and pray" approach is explicitly acceptable for small, self-contained tasks, boilerplate, quick scripts, and greenfield prototypes — but not for larger work (source: https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html). Full upfront specs are "probably overkill" for small improvements but should be the **default for larger or multi-developer projects** (source: https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/).

### Spec-driven development (SDD)

SDD is "the disciplined alternative to vibe coding": write a clear markdown spec defining what to build before implementation (source: https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents). At its core it is "a discipline for making the implicit explicit before the agent ever sees a task… the difference is whether you hand an AI agent a wish or a contract" (source: https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html). This directly targets the dominant failure mode — the model being wrong "because it didn't know something the developer assumed was obvious" (source: same).

Multiple sources converge on a **four-phase gated workflow**:
- GitHub Spec Kit: **Specify → Plan → Tasks → Implement**, with human verification gating each phase (source: https://addyosmani.com/blog/good-spec/).
- The general SDD workflow likewise runs four sequential phases where "each phase must be completed and reviewed before the next begins" (source: https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html).
- The DeepLearning.AI/JetBrains course (taught by Paul Everitt) frames it as an iterative **plan-implement-verify** loop: create a project constitution (mission, tech stack, roadmap), write feature specs, implement with agent guidance, validate, and replan between features (source: https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents).

Anthropic's own variant: for larger features have Claude **interview** the user via the `AskUserQuestion` tool, write a self-contained `SPEC.md`, then **start a fresh session to execute the spec with clean context** (source: https://code.claude.com/docs/en/best-practices). A complementary practice is brainstorming/planning in Claude.ai, summarizing into a step-by-step implementation prompt, then moving to Claude Code and instructing it to work step-by-step rather than dumping everything at once (source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf).

### Spec craftsmanship

- **The spec is the leverage point**: well-defined requirements multiply across parallel agents; vague specs produce proportional errors (source: https://addyosmani.com/blog/code-agent-orchestra/). Writing the spec is "the senior engineering contribution. The agent implements; the experienced developer thinks" (source: https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html).
- **Combat the "curse of instructions"**: split large specs into focused sections and give the agent one focused task at a time (source: https://addyosmani.com/blog/good-spec/).
- **Graduated boundaries** beat flat restriction lists — a three-tier "always do / ask first / never do" structure, with "Never commit secrets" being the most common helpful constraint (source: https://addyosmani.com/blog/good-spec/).
- Plan first in read-only mode; Claude Code's Plan Mode enforces this by restricting agents to analysis until specs are validated (source: https://addyosmani.com/blog/good-spec/).
- SDD's payoff: it **preserves context across sessions and across different agents**, aligns humans and agents around non-negotiables, reduces cognitive debt, and improves intent fidelity (source: https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/; source: https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents). Vibe coding, by contrast, does not scale across shared codebases due to missing shared conventions and untracked decisions (source: https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/).

---

## Pillar 3 — Context Management

Context management is repeatedly identified as **the central constraint** behind most best practices: "Most best practices are based on one constraint: Claude's context window fills up fast, and performance degrades as it fills" (source: https://www.anthropic.com/engineering/claude-code-best-practices). Empirically, models hit a performance ceiling around **1 million tokens**, degrading past that regardless of advertised window size (source: https://www.morphllm.com/context-engineering). Crucially, more context is not better: irrelevant data **actively worsens hallucinations** (source: https://www.morphllm.com/context-engineering). The goal is "the smallest possible set of high-signal tokens… Not: the most tokens. The right tokens" (source: https://www.morphllm.com/context-engineering).

### Compaction

Compaction extends effective context by automatically summarizing older content as a conversation approaches its limit (source: https://platform.claude.com/docs/en/build-with-claude/compaction). Claude Code auto-compacts by **first clearing older tool outputs, then summarizing the conversation**; requests and key code snippets are preserved, but **detailed early instructions may be lost** — hence persistent rules belong in CLAUDE.md (source: https://code.claude.com/docs/en/how-claude-code-works; source: https://code.claude.com/docs/en/best-practices). Server-side compaction triggers when input tokens exceed a configurable threshold (default 150,000; minimum 50,000), generates a summary, creates a `compaction` block, and drops prior message blocks on subsequent requests (source: https://platform.claude.com/docs/en/build-with-claude/compaction). It is "not just about staying under a token cap" — it improves model focus, since models struggle to maintain focus across long histories (source: https://platform.claude.com/docs/en/build-with-claude/compaction). It is **lossy by design** (source: https://platform.claude.com/cookbook/tool-use-context-engineering-context-engineering-tools). Known limitations (beta, header `compact-2026-01-12`): it uses the same non-cheaper model, adds a billed sampling step, and **may fail when tools are defined** because the model can call a tool instead of summarizing (source: https://platform.claude.com/docs/en/build-with-claude/compaction).

Anthropic identifies **three context-engineering strategies**, each targeting a different kind of context growth: **compaction** (whole-transcript, lossy summary), **tool-result clearing** (a lossless sub-transcript operation that surgically replaces old `tool_result` blocks while leaving the record the call happened, so data can be re-fetched), and **memory** (cross-session persistence) (source: https://platform.claude.com/cookbook/tool-use-context-engineering-context-engineering-tools). Claude Code uses compaction plus two memory systems in production (source: same).

### /clear and /compact

Run **`/clear` frequently between unrelated tasks** to reset the window entirely; for targeted control use **`/compact <instructions>`**, e.g. `/compact Focus on the API changes` (source: https://code.claude.com/docs/en/best-practices; source: https://www.anthropic.com/engineering/claude-code-best-practices).

### CLAUDE.md / memory

Claude Code has **two complementary memory systems** loaded at the start of every conversation: user-authored CLAUDE.md (instructions/rules) and Claude-authored auto memory (learnings/patterns). Both are treated as **context, not enforced configuration** — to hard-block an action regardless of what Claude decides, use a **PreToolUse hook** instead (source: https://code.claude.com/docs/en/memory). CLAUDE.md exists at four scopes loaded broadest-to-most-specific: managed policy, user (`~/.claude/CLAUDE.md`), project (`./CLAUDE.md`), and local (`./CLAUDE.local.md`); Claude **walks up the directory tree** and **concatenates** all discovered files from filesystem root down to the working directory (source: https://code.claude.com/docs/en/memory; source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf).

Key rules:
- **Keep it short — target under 200 lines.** Bloated CLAUDE.md files "cause Claude to ignore your actual instructions" and reduce adherence (source: https://www.anthropic.com/engineering/claude-code-best-practices; source: https://code.claude.com/docs/en/memory; source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf).
- **Sometimes-relevant knowledge belongs in skills (on-demand), not CLAUDE.md** (source: https://code.claude.com/docs/en/best-practices).
- For large instruction sets, use **path-scoped rules in `.claude/rules/`** that load only when Claude works with matching files (via a `paths` frontmatter field) — this directly addresses CLAUDE.md context pollution (source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf; source: https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more; source: https://code.claude.com/docs/en/memory).
- `@path` imports aid organization (recursive, max depth four hops) but **do not reduce context**, since imported files load at launch (source: https://code.claude.com/docs/en/memory).
- **Project-root CLAUDE.md survives compaction** (re-read and re-injected after `/compact`), but nested subdirectory files and conversation-only instructions do not automatically persist (source: https://code.claude.com/docs/en/memory).
- Generated via `/init`; project-specific reusable instructions (AGENTS.md/CLAUDE.md) are "becoming more valuable than one-off prompting" (source: https://www.anthropic.com/engineering/claude-code-best-practices; source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026). A practical example: instructing CLAUDE.md to "run pytest not run and don't cd unnecessarily — just use the right path" significantly improved consistency (source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf).

### Progressive disclosure and just-in-time retrieval

The unifying principle is **just-in-time retrieval, not upfront loading** (source: https://www.morphllm.com/context-engineering; source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/). Concrete mechanisms: **Skills load on demand** — only name and description (~30–50 tokens each) are visible at session start, with the full body loading only when invoked (source: https://www.morphllm.com/claude-code-git-worktree; source: https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more; source: https://code.claude.com/docs/en/how-claude-code-works). **Subagents** get fresh isolated context and return only a summary, keeping side-task detail out of the main window (source: https://code.claude.com/docs/en/how-claude-code-works). Additional patterns: hierarchical CLAUDE.md, a `.claudeignore` exclusion file, and combining compaction with **git checkpoints and progress files** for lossless recovery once context limits are reached (source: https://www.morphllm.com/context-engineering). Anthropic favors just-in-time context loading via tools over pre-inference RAG / pre-embedding entire codebases (source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/).

---

## Pillar 4 — Subagent Delegation & Orchestration

### Why subagents

Subagents are "delegated workers inside one session that do a side task in their own context and return a summary" — used to avoid flooding the main conversation with search results, logs, or file contents (source: https://code.claude.com/docs/en/agents). They run in **separate context windows**, returning only a final message plus metadata, which is why they aid long sessions and serve as the primary tool for investigation/verification (source: https://code.claude.com/docs/en/how-claude-code-works; source: https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more; source: https://www.anthropic.com/engineering/claude-code-best-practices). They are defined as markdown files in `.claude/agents/` (source: https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more).

### The four parallelization mechanisms

Claude Code documents four distinct approaches, chosen by whether you want to stay in each conversation, hand off and check back, or have Claude coordinate workers (source: https://code.claude.com/docs/en/agents):
1. **Subagents** — delegated workers inside one session.
2. **Agent view** — background sessions monitored via `claude agents`; each dispatched session is **moved into its own worktree automatically** (source: https://code.claude.com/docs/en/agents).
3. **Agent teams** — coordinated sessions with a shared task list (experimental/disabled by default, research preview) (source: https://code.claude.com/docs/en/agents; source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf).
4. **Dynamic workflows** — a script running many subagents that cross-check results, for jobs "too big to coordinate one turn at a time": codebase-wide audits, 500-file migrations, cross-checked research, plans drafted from several angles (source: https://code.claude.com/docs/en/agents).

A related taxonomy from Anthropic's advanced-patterns deck names **Parallel Claude** (multiple terminal instances, each with its own context and git worktree via `claude --worktree`), **Subagents**, and **Agent Teams** (source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf).

### Git worktrees as the isolation primitive

Git worktrees are the **standard isolation mechanism**: each agent gets its own checkout, so parallel sessions never edit the same files and never produce merge conflicts while working (source: https://addyosmani.com/blog/code-agent-orchestra/; source: https://code.claude.com/docs/en/agents; source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/). Anthropic documents running **5–10 sessions in parallel** (5 local on a MacBook, 5–10 on the website); a recommended pattern is 3–4 instances on different tasks, cycling through to check progress (source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/). The `/batch` skill splits one large change into **5–30 worktree-isolated subagents, each opening a separate PR** (source: https://code.claude.com/docs/en/agents). In dynamic workflows, an `isolation: "worktree"` option runs agents in separate worktrees when parallel file-writing would conflict (source: https://alexop.dev/posts/claude-code-workflows-deterministic-orchestration/).

### Deterministic orchestration (workflows-as-code)

A 2026 pattern **inverts traditional agent control flow**: the developer writes deterministic control flow as plain code (JavaScript) and delegates each step to a fresh subagent, rather than Claude deciding turn-by-turn (source: https://alexop.dev/posts/claude-code-workflows-deterministic-orchestration/). The core scaling pattern is **fan out → reduce → synthesize**, where "the script holds the loop, the branching, and the intermediate results, so Claude's context only ever sees the final answer" — itself a context-management technique for coordinating dozens to hundreds of agents (source: same). Concurrency primitives: `parallel()` is a synchronization barrier (all tasks finish before proceeding) while `pipeline()` streams items without barriers; **default to `pipeline()`**, reserving `parallel()` only when a stage needs all prior results at once (source: same).

### Judge / verify panels

Reusable verification patterns replace ad hoc spawning: **adversarial verify** (multiple skeptics refute findings), **perspective-diverse verify**, **judge panels with scoring**, and **loop-until-dry discovery**. A production `/deep-research` example runs: scope → 5 parallel searches → fetch & dedupe → adversarial verify (3-vote per claim) → synthesize cited report (source: https://alexop.dev/posts/claude-code-workflows-deterministic-orchestration/). *(This very report was produced with a leaner single-vote variant of that pattern.)*

### Effective delegation

Each subagent needs **an objective, an output format, tool/source guidance, and clear task boundaries** (source: https://www.anthropic.com/engineering/multi-agent-research-system; source: https://www.flowhunt.io/blog/multi-agent-ai-system/). Best practice is a dedicated subagent system prompt plus a structured task brief delivered as the first user message; vague short instructions cause subagents to misinterpret tasks (source: https://www.flowhunt.io/blog/multi-agent-ai-system/). Subagents facilitate **context compression and separation of concerns** by operating in parallel with their own windows, reducing path dependency, while the lead agent persists its plan to Memory to survive context limits (source: https://www.anthropic.com/engineering/multi-agent-research-system).

### Architectural convergence

Major vendors (Anthropic, Cognition, OpenAI, Microsoft Agent Framework/AutoGen, LangChain) have converged on an **orchestrator-plus-isolated-subagents** architecture; peer-collaborating "GroupChat" designs where workers talk directly to each other "have quietly lost ground" (source: https://www.flowhunt.io/blog/multi-agent-ai-system/). *(Lower confidence: secondary source.)* Anti-patterns to avoid: sharing system prompts between orchestrator and subagents, returning full transcripts instead of summaries, replaying entire history on every wakeup, and using multi-agent on sequential/shared-state tasks (source: same). A contrasting practitioner view holds that custom subagents "only report back to the main agent and don't scale well for sophisticated workflows," favoring teammate models with direct agent-to-agent messaging (e.g., Agent Teams) (source: https://shipyard.build/blog/claude-code-multi-agent/). *(This tension is captured in the debates section below.)*

---

## Pillar 5 — Common Patterns

### TDD with agents

TDD is repeatedly singled out as especially effective: ask Claude to generate tests before code, confirm they fail, commit the tests, then write code to pass **without modifying the tests** (source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/; source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf). Tests give the agent something concrete to verify against, enabling longer autonomous runs.

### Verification loops (closing the agentic loop)

The highest-leverage pattern is giving Claude a **runnable pass/fail signal** — a test suite, build exit code, linter, a script diffing output against a fixture, or a browser screenshot compared against a design — so "the loop closes on its own. Claude does the work, runs the check, reads the result, and iterates until the check passes" (source: https://www.anthropic.com/engineering/claude-code-best-practices). Self-sufficient verification loops (auto-running builds, tests, lints) let Claude work longer autonomously and catch its own mistakes (source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf). This matters because **verification, not generation, is now the bottleneck** (source: https://addyosmani.com/blog/code-agent-orchestra/; source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026), demanding stronger conventions, explicit tests, smaller diffs, and narrower scopes.

### Reviewing AI output

A **reviewer in a fresh subagent context** sees only the diff and the criteria — not the reasoning that produced the change — so it evaluates the result on its own terms (source: https://www.anthropic.com/engineering/claude-code-best-practices). The **Writer/Reviewer pattern** uses one Claude to write and another to review with context cleared between; **Plan/Execute separation** uses a more powerful model (Opus) for planning and a faster one (Haiku) for execution; and CLAUDE.md becomes a ledger where "every mistake becomes a rule." Notably, ~90% of Claude Code is written by Claude Code itself under this rigorous process (source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/). *(Lower confidence: the "90%" and Opus/Haiku specifics are practitioner-reported.)*

### Skills

Skills (in `.claude/skills/`) teach Claude how to perform tasks via **progressive disclosure**, costing ~30–50 tokens each until invoked (source: https://www.morphllm.com/claude-code-git-worktree; source: https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more). Slash commands are merged into the Skills system (source: https://www.morphllm.com/claude-code-git-worktree).

### Hooks

Hooks are automated shell commands triggered at lifecycle moments such as **PreToolUse** and **PostToolUse** (source: https://www.morphllm.com/claude-code-git-worktree). Their distinguishing property is **deterministic control** — "anything that should happen deterministically: running linters after edits, posting to Slack on completion" — as opposed to probabilistic instruction-following (source: https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more; source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf). A PreToolUse hook is the recommended mechanism to **hard-block** an action regardless of what the model decides (source: https://code.claude.com/docs/en/memory).

### MCP

MCP is a standard protocol for giving Claude access to external systems (databases, ticket trackers, browsers, internal APIs), with servers added via `mcp add <server-name>`; its ideal use is when Claude must reason over external state without copy-paste (source: https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf). The cost is context: a five-server setup with 58 tools can consume **55,000+ tokens before any conversation starts**, though Tool Search reduces this by ~85% (source: https://www.morphllm.com/claude-code-git-worktree). Claude Code exposes **five extension mechanisms** — Skills, MCP, Plugins, Hooks, Slash Commands — and a sensible default for most developers is **2–3 MCP servers (GitHub, Filesystem, one domain-specific) plus a few custom Skills** (source: https://www.morphllm.com/claude-code-git-worktree).

### Staying the human executor

The developer's role shifts toward **steering, reviewing, and architectural decisions** rather than writing code or specs directly (source: https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/). A concrete autonomous-prototyping workflow: enable auto-accept, set up an autonomous write-test-iterate loop, give Claude abstract problems, then **review the ~80%-complete solution before final refinements** — always starting from a clean git state and committing checkpoints so incorrect changes can be reverted if Claude goes off track (source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf). Teams also break complex work into specialized subagents (e.g., separate headline and description generators), reporting easier debugging and better output (source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf).

---

## Where Guidance Conflicts / Open Debates

1. **Does multi-agent help for *coding*?** A headline result: an orchestrator-worker system (Opus 4 lead + Sonnet 4 subagents) beat single-agent Opus 4 by **90.2%** on Anthropic's internal *research* eval (source: https://www.anthropic.com/engineering/multi-agent-research-system), and a practitioner claims "three focused agents consistently outperform one generalist working three times as long" (source: https://addyosmani.com/blog/code-agent-orchestra/). But the *same* Anthropic source warns that multi-agent is a **poor fit for most coding tasks**, because coding has fewer truly parallelizable subtasks than research and "LLM agents are not yet great at coordinating and delegating to other agents in real time" (source: https://www.anthropic.com/engineering/multi-agent-research-system). The reconciliation: multi-agent shines on heavily parallel, information-saturated work (research, audits, migrations), less so on tightly coupled coding.

2. **Token-constant / cost findings.** Multi-agent systems use roughly **15× the tokens of a chat** (agents ~4×), making them economical only for high-value tasks (source: https://www.anthropic.com/engineering/multi-agent-research-system). A secondary source adds that **token usage alone explains ~80% of the variance in BrowseComp performance** (source: https://www.flowhunt.io/blog/multi-agent-ai-system/) — implying much of multi-agent's edge is "more tokens spent," not architecture per se. This sits in tension with single-agent advocates who note multi-agent orchestration is "expensive, experimental… can waste hours of compute" if initial prompts aren't perfected (source: https://shipyard.build/blog/claude-code-multi-agent/).

3. **Single feature vs. multiple branches.** "Running a single Claude Code session is best suited for developing a single feature"; multi-agent setups are what enable simultaneous work across branches (source: https://shipyard.build/blog/claude-code-multi-agent/). The open question is when the parallelism payoff exceeds coordination/token cost.

4. **Subagent reporting vs. peer communication.** One view: custom subagents "only report back to the main agent and don't scale well," favoring teammate models with direct agent-to-agent messaging (source: https://shipyard.build/blog/claude-code-multi-agent/). The opposing, vendor-converged view: peer "GroupChat" designs "have quietly lost ground" and orchestrator-plus-isolated-subagents won, with returning summaries (not transcripts) being best practice (source: https://www.flowhunt.io/blog/multi-agent-ai-system/). *(Both are blog-level sources; treat as an unresolved design debate.)*

5. **Autonomy is not a ranking — higher is not always better.** The five-level autonomy taxonomy (Assistive, Conversational, Task Agent, Autonomous Teammate, Agentic Avalanche) is explicitly "not a ranking" — picking the right level for the task matters more than maximizing it (source: https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/). Higher autonomy can **increase** human workload by shifting effort into review (source: same), and "the most credible path to production value is not full autonomy… it is coherent orchestration with clear task boundaries" and human checkpoints (source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026). Even Anthropic's engineers keep active oversight on **80–100%** of tasks, and Level-3 hand-offs should be avoided when tasks are ambiguous, need deep context, or the CI pipeline isn't solid (source: https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/).

---

## Implications for Training an AI-Native Executor

Concrete, teachable principles distilled from the claims above:

1. **Treat verification, not generation, as the job.** The 2026 bottleneck is verification capacity (source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026; source: https://addyosmani.com/blog/code-agent-orchestra/). Always give the agent a runnable pass/fail signal (tests, build exit code, linter, screenshot diff) so the loop closes itself (source: https://www.anthropic.com/engineering/claude-code-best-practices).

2. **Default to plan-then-act, but know when to skip it.** Use Explore → Plan → Code → Commit; "if you could describe the diff in one sentence, skip the plan" (source: https://code.claude.com/docs/en/best-practices). Plan when uncertain, multi-file, or unfamiliar.

3. **Write the contract, not the wish.** SDD is the senior contribution; making implicit requirements explicit before the agent starts is what prevents the dominant failure mode (source: https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html). Use graduated boundaries (always/ask-first/never) and one focused task at a time (source: https://addyosmani.com/blog/good-spec/).

4. **Engineer context for signal, not volume.** "The right tokens, not the most tokens" (source: https://www.morphllm.com/context-engineering). Practice `/clear` between tasks, `/compact <focus>` for control, keep CLAUDE.md under 200 lines, push sometimes-relevant knowledge into on-demand skills and path-scoped rules, and use just-in-time retrieval over upfront RAG (source: https://code.claude.com/docs/en/best-practices; source: https://code.claude.com/docs/en/memory; source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/).

5. **Use the right memory layer for the job.** CLAUDE.md/memory is *context, not enforcement* — to truly block an action, use a **PreToolUse hook** (source: https://code.claude.com/docs/en/memory). "Every mistake becomes a rule" (source: https://mikemason.ca/writing/ai-coding-agents-jan-2026/).

6. **Reach for isolation before parallelism.** Git worktrees are the standard safe-parallelism primitive; learn `claude --worktree`, agent view's auto-worktrees, and `/batch` before attempting full multi-agent teams (source: https://code.claude.com/docs/en/agents; source: https://addyosmani.com/blog/code-agent-orchestra/).

7. **Delegate with structure.** Every subagent needs objective, output format, tool/source guidance, and boundaries; return summaries, not transcripts; don't share orchestrator and subagent system prompts (source: https://www.anthropic.com/engineering/multi-agent-research-system; source: https://www.flowhunt.io/blog/multi-agent-ai-system/).

8. **Match autonomy to the task, and stay the executor.** Higher autonomy is not better; it can multiply review burden (source: https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/). Anchor on coherent orchestration with human checkpoints (source: https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026). Start from a clean git state, commit checkpoints, let it run to ~80%, then review and refine (source: https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf).

9. **Respect the safety limits of automation.** Auto mode is a guardrailed middle ground but has a **17% false-negative rate** on real overeager actions — never equate it with "safe to ignore" (source: https://www.anthropic.com/engineering/claude-code-auto-mode). Reserve `bypassPermissions` for isolated containers/VMs only (source: https://code.claude.com/docs/en/permission-modes).

10. **Budget for cost.** Multi-agent costs ~15× a chat in tokens; reserve it for high-value, parallelizable, information-saturated work, and perfect the initial prompt first to avoid wasting compute (source: https://www.anthropic.com/engineering/multi-agent-research-system; source: https://shipyard.build/blog/claude-code-multi-agent/).

---

## Sources

**Primary — Anthropic / Claude Code (official)**
- How Claude Code works — https://code.claude.com/docs/en/how-claude-code-works
- Choose a permission mode — https://code.claude.com/docs/en/permission-modes
- Run agents in parallel — https://code.claude.com/docs/en/agents
- Best practices for Claude Code (docs) — https://code.claude.com/docs/en/best-practices
- CLAUDE.md memory — https://code.claude.com/docs/en/memory
- Best practices for Claude Code (Engineering) — https://www.anthropic.com/engineering/claude-code-best-practices
- How we built Claude Code auto mode (2026-03-25) — https://www.anthropic.com/engineering/claude-code-auto-mode
- How we built our multi-agent research system (2025-06-13) — https://www.anthropic.com/engineering/multi-agent-research-system
- Writing effective tools for AI agents (2025-09-11) — https://www.anthropic.com/engineering/writing-tools-for-agents
- Compaction (platform docs) — https://platform.claude.com/docs/en/build-with-claude/compaction
- Context engineering: memory, compaction, tool clearing (Cookbook, 2026-03-20) — https://platform.claude.com/cookbook/tool-use-context-engineering-context-engineering-tools
- Steering Claude Code: skills, hooks, rules, subagents (2026-06-18) — https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more
- Claude Code Advanced Patterns: Subagents, MCP, Scaling (PDF, 2026-03-24) — https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents,%20MCP,%20and%20Scaling%20to%20Real%20Codebases.pdf
- How Anthropic teams use Claude Code (PDF, 2025-06-03) — https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf

**Secondary — practitioner & methodology (2026)**
- How to write a good spec for AI agents (2026-01-13) — https://addyosmani.com/blog/good-spec/
- The Code Agent Orchestra (2026-03-26) — https://addyosmani.com/blog/code-agent-orchestra/
- Claude Code Workflows: Deterministic Multi-Agent Orchestration (2026-05-28) — https://alexop.dev/posts/claude-code-workflows-deterministic-orchestration/
- Claude Code Git Worktree (2026-01-23) — https://www.morphllm.com/claude-code-git-worktree
- Context Engineering: Why More Tokens Makes Agents Worse (2026-02-15) — https://www.morphllm.com/context-engineering
- Multi-agent orchestration for Claude Code (2026-03-18) — https://shipyard.build/blog/claude-code-multi-agent/
- Spec-Driven Development with AI Coding Agents (2026-03) — https://www.javacodegeeks.com/2026/03/spec-driven-developmentwith-ai-coding-agents-the-workflow-replacingprompt-and-pray.html
- From Vibe Coding to Spec-Driven Development (2026-05-12) — https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/
- Spec-Driven Development with Coding Agents (DeepLearning.AI/JetBrains course, 2026) — https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents
- What Hacker News Gets Right About AI Coding Agents in 2026 (2026-04, upd 06-07) — https://www.developersdigest.tech/blog/what-hacker-news-gets-right-about-ai-coding-agents-2026
- Five Levels of AI Coding Agent Autonomy (2026-03-19) — https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/
- AI Coding Agents in 2026: Coherence Through Orchestration (2026-01-22) — https://mikemason.ca/writing/ai-coding-agents-jan-2026/
- Multi-Agent AI Systems in 2026: What the Research Actually Says — https://www.flowhunt.io/blog/multi-agent-ai-system/

---

## Appendix — Claims refuted in verification (transparency)

Of 135 extracted claims, 8 were dropped by the skeptic pass — almost all for **embellishment beyond what the source quote supported** (a useful lesson in itself: even good sources get over-summarized).

| Refuted claim (truncated) | Why dropped |
|---|---|
| "you *must* configure a git worktree" for multi-agent work | Overstated — worktrees are recommended isolation, not a hard requirement. |
| Spec must cover six areas, per analysis of 2,500+ agent files | Quote only mentions putting commands early; the "2,500+ files" + six-area list unsupported. |
| AGENTS.md human-curated beats machine ~4% | Read/update-every-session is supported; the ~4% statistic is not in the quote. |
| SDD "constitution" = three docs (Mission/Tech Stack/Roadmap) | Quote supports only "resolve ambiguities early," not the three-document detail. |
| Cursor "20 agents slowed to 2–3"; FastRender specifics | Planner/Worker/Judge roles supported; the named-system specifics read as fabricated. |
| Single-agent matches multi when reasoning tokens held constant — Tran & Kiela/Stanford | Generic finding supported; the specific academic attributions are unsupported. |
| CLAUDE.md "under 200 lines" attributed to this source | "Every line loads" is supported; the 200-line figure is not in *this* quote (it IS supported elsewhere). |
| Memory tool is "client-side" | Just-in-time persistence supported; "strictly client-side" overstates it. |

*Note: several refutations are about a specific quote not supporting a specific number — the underlying idea is often corroborated by another source in this report (e.g. the 200-line CLAUDE.md guidance is well-supported by the official memory docs and best-practices pages).*
