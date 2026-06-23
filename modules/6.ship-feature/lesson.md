# Module 6 — Project: Ship a Feature

> **You are here:** the end of Part II, and your first **project**. No new principle this time —
> instead you'll combine the four you just learned into one real piece of work. This is where the
> separate skills fuse into a single way of driving.

## Why a project, here

In Module 1 you watched a whole drive end-to-end, shallow. Since then you've gone deep on four
pieces: **context** (Module 2), **verification** (Module 3 ⭐), **planning** (Module 4), and
**spec-driven work** (Module 5). Each one you practiced in isolation. But real work doesn't arrive in
isolation — it arrives as "ship this feature," and the skill that matters is making the four move
*together*, under your hand, on one task.

That's what a project module is for. The Rust Book does the same thing — after a run of concept
chapters it drops you into building a real program (a grep, a web server) because **integration is
its own skill**, separate from knowing each piece. Knowing the clutch, the gears, and the mirrors
isn't the same as merging onto a highway. Today you merge.

## What you're integrating

One realistic, multi-file feature, driven through the whole loop with every Part-II habit visible:

| Habit | From | What it looks like in this project |
|---|---|---|
| **Plan-vs-act** | Module 4 | The feature is multi-file → you explore read-only and get an approved plan first. |
| **Spec the contract** | Module 5 | Implicit requirements made explicit before code (a `SPEC.md` or a tight written contract). |
| **Engineer context** | Module 2 | Fresh session for execution; point at the right files; `/compact` if it runs long. |
| **Close a verify loop** ⭐ | Module 3 | The plan/spec names a runnable check; the agent iterates to green on its own. |
| **Stay the executor** | (Module 8 preview) | Clean git, checkpoints, you review the diff and decide it ships. |

Notice this is exactly the arc from Module 1 — but now each beat is done *deliberately and well*,
not just witnessed. The mission in `modules/6.ship-feature/challenge.md` gives you the
constraints; the scorecard grades how the four moved together.

## How to approach it

Don't overthink the feature — it's already picked and bounded: ship `reject-empty` on the sandbox
(`add()` refuses an empty/whitespace title, with a clear CLI message and a new passing test). The
grade isn't the code; it's whether
**planning fed a clean context, the plan named a real verify signal, and you stayed in command** from
a clean git state to a reviewed diff. If any single habit collapses — you skip the plan, or "verify"
is just "it compiled," or you rubber-stamp the diff — that's the signal for which earlier module to
re-drill.

## 🧠 Active recall

No peeking — these are about *integration*:

1. You're about to ship a three-file feature. In what order do the four Part-II habits come into play?
2. Where does the verify signal get *decided* — during planning/spec, or after the code exists? Why does that order matter?
3. Which habit, if you dropped it on this project, would do the most damage — and what would the failure look like?

## 🔍 In the wild

This is how Anthropic's own teams are described working in `RESEARCH.md`: plan in read-only, hand off
a contract to a fresh session, let an auto-verifying loop run, then review the ~80%-done result from
a clean git state. You're not doing a toy exercise — you're rehearsing the actual 2026 workflow on a
small enough surface to get every beat right.

## What you learned + what's next

You've now shipped a real feature with planning, context, verification, and review moving as one —
the first time the course's pieces fused. **The one sentence to remember:** *real work is
integration; a good ship is plan → contract → clean-context execution → closed verify loop →
reviewed diff, every time.*

Part III begins with **Module 7 — TDD with Agents**: verification sharpened to its finest point —
write the test *first*, watch it fail, and let the agent code to green without touching it.
