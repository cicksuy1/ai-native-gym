# Module 8 — Reviewing AI Output & Staying the Executor

> **You are here:** tests prove behavior (Modules 3 & 7). But tests can't catch everything — bad
> abstractions, security holes, "works but wrong." This module is about reviewing with judgment, and
> keeping *you* in command of the loop.

## Why this matters

Here's the trap of getting good at the earlier modules: the agent starts producing a *lot* of
working code, fast, and it's tempting to wave it through because the tests are green. But green tests
prove the behaviors you thought to test — not that the design is sound, the security is right, or the
agent didn't quietly do something clever and wrong. As the field puts it, the human role has shifted
toward *steering, reviewing, and architectural judgment* rather than typing code (`RESEARCH.md`,
Pillar 5). Review *is* the job now.

And it's not optional caution — it's where the 2026 bottleneck actually lives. Higher autonomy
doesn't remove work; it *shifts* effort into review (`RESEARCH.md`, Open Debates). Even Anthropic's
own engineers keep active oversight on **80–100%** of tasks (`RESEARCH.md`, Executive Summary). The
executor who reviews well is the one who can safely let the agent run.

## The big idea: review with fresh eyes, stay on a clean git state

Two moves carry this module.

**First: review in a fresh context.** A reviewer that sees only the *diff and the criteria* — not the
reasoning that produced the change — evaluates the result on its own terms (`RESEARCH.md`, Pillar 5).
The agent that wrote the code is the worst judge of it; it's invested in its own reasoning. So spin
up a **fresh-context reviewer** (a subagent, or a cleared session) that sees the change cold. This is
the **Writer/Reviewer pattern**: one Claude writes, another reviews with context cleared between
(`RESEARCH.md`, Pillar 5).

**Second: stay on a clean git state with checkpoints.** Anthropic's autonomous-prototyping workflow
is the template: start from a **clean git state**, let the agent run to about **80% complete**, then
**review and refine** — committing checkpoints so that if it goes off track you can revert instead of
untangling (`RESEARCH.md`, Pillar 5). Clean git is what makes "let it run" safe: you can always get
back.

## The principle: let it run to ~80%, then review — and you keep judgment

Don't review every keystroke (that's just slow manual coding) and don't review nothing (that's
hoping). The sweet spot: give the agent enough rope to get to ~80%, *then* bring judgment to bear on
the result. And bring it as a reviewer would:

- **Read the diff, not the agent's story.** What changed, not why it says it changed it.
- **Check what tests can't:** is the abstraction right? any security smell (Module 11's hooks help
  here)? does it do *only* what was asked? did it touch files it shouldn't have?
- **Make every recurring mistake a rule.** When you catch a class of error, write it into CLAUDE.md
  so it doesn't recur — "every mistake becomes a rule" (`RESEARCH.md`, Pillar 5). Your review
  compounds into the agent's standing context.

The throughline: **autonomy is not a ranking — higher is not always better** (`RESEARCH.md`, Open
Debates). You match the leash to the task and stay the one holding it.

## Watch it done well

*Transcript 6-1: fresh-context review + clean git + a mistake becomes a rule.*

```
You:    [clean git state] Build the CSV export per SPEC.md. Run to a working
        draft, commit a checkpoint, then stop — I'll review.

Claude: [implements, tests green, commits "wip: csv export"] Draft ready.

You:    [spawns a reviewer subagent] Review this diff against SPEC.md. You did
        NOT write it. Flag design, security, and anything out of scope.
Reviewer: Two flags: (1) export streams the whole table into memory — will OOM
          on large accounts; use a cursor. (2) it added a new dependency not in
          the spec. Tests pass but don't cover the large-export path.

You:    [agrees] Fix the streaming; drop the dep. And — [edits CLAUDE.md] adding
        a rule: "exports must stream, never buffer full tables."
```

The reviewer caught what the green tests didn't, *because* it saw the diff cold. The clean checkpoint
meant fixing was cheap. And the OOM lesson became a permanent rule instead of a one-time catch.

*Anti-pattern 6-2: rubber-stamping.*

```
You:    [no checkpoint, dirty git] add the export
Claude: [works across 6 files] Done, tests pass!
You:    great 👍 [merges without reading the diff]
        [next week: production OOMs on a big export; the change is tangled
         with three unrelated edits and can't be cleanly reverted]
```

Green tests, a thumbs-up, no fresh-eyes review, no clean checkpoint. The bug the tests didn't cover
shipped, and the dirty git state means you can't even revert it cleanly. That's the executor asleep
at the wheel.

## 🧠 Active recall

No peeking:

1. Why is a *fresh-context* reviewer better at catching problems than the agent that wrote the code?
2. Describe the clean-git / ~80% / review-and-refine workflow — why does the clean git state matter?
3. What does "every mistake becomes a rule" mean in practice, and where does the rule go?

## 🔍 In the wild

Find the reviewer-in-fresh-context passage in Anthropic's best-practices docs and the
clean-git/80%/review workflow in "How Anthropic teams use Claude Code" (`RESEARCH.md`, Pillar 5).
Note the Writer/Reviewer pattern and "every mistake becomes a rule." Then ask: on your last AI-built
change, did anyone review the *diff* — or just the green checkmark?

## What you learned + what's next

You can now review AI output like an executor: fresh eyes on the diff, clean git with checkpoints,
let it run to ~80% then judge, and feed recurring mistakes back as rules. **The one sentence to
remember:** *green tests aren't a merge button — review the diff with fresh eyes and keep your hand
on the wheel.*

Next, **Module 9 — Subagent Delegation**: that fresh-context reviewer was your first subagent. Now
we learn to delegate side-work properly — with an objective, a format, tools, and boundaries.
