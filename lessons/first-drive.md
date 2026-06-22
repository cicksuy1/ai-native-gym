# Module 1 — Your First Drive

> **You are here:** you can operate the harness (Module 0). Now, before we slow down and master each
> skill, you'll watch **one real task driven end to end** — explore → plan → act → verify → review —
> so you feel the *whole arc* once. This is a guided tour, not a deep dive: every stop forward-links
> to the module that teaches it properly.

## Why this matters

You could learn to drive by studying the clutch for a week before ever touching the road. Nobody does
that — you take a slow lap first, feel how the pieces connect, *then* practice each one. This module
is your slow lap. The point isn't mastery of any single move; it's to install the **shape of a good
drive** in your head, so that when we go deep on planning or verification later, you already know
where that piece sits in the whole.

The whole arc, in one line: *understand before you change, decide whether to plan, make the change
checkable, and stay the one in command.* Watch it happen once.

## The task

A small, real change with a checkable outcome:

> Add a `--version` flag to a small CLI so that running it with `--version` prints the version from
> `package.json` and exits 0.

Small enough to follow in one read; real enough to touch exploration, a plan call, a verify signal,
and a review. Here's the whole drive.

## The drive, phase by phase

*Transcript 1-1: one task, the full loop. Each phase names the module that owns it.*

**① Explore (read-only first).** → *deep in Module 0's modes + Module 2's context*

```
You:    [plan mode] Where does this CLI parse flags, and where's the version defined?
        Read the entry file and package.json. Don't change anything yet.
Claude: [reads cli.ts, package.json — no edits]
        Flags are parsed in cli.ts:14 with a hand-rolled switch; version "1.4.0"
        lives in package.json. No --version case exists yet.
```

You started in `plan` mode so exploration couldn't accidentally edit anything, and you pointed it at
*the right two files* instead of the whole repo. That "right tokens, not the most" instinct is
**Module 2 (Context)**.

**② Decide: plan, or just act?** → *deep in Module 4 (Planning)*

This change fits in one sentence ("add a `--version` case that reads package.json and exits"). The
heuristic you'll learn in Module 4 is *"if you could describe the diff in one sentence, skip the
plan."* So we skip the formal plan — but we do *not* skip the next step, which is the one that
matters most.

**③ Make it checkable — set the verify signal *before* coding.** → *deep in Module 3 (Verification) ⭐*

```
You:    Before you implement: the success check is `cli --version` prints the
        package.json version and exits 0. Add a tiny test for that, run it, watch
        it fail, then implement until it passes.
Claude: [writes a test, runs it] Fails: no --version handling. ✅ red, as expected.
        [implements the flag, reruns] Passes: prints 1.4.0, exit 0. ✅
```

This is the heart of the whole course, and you'll notice it got the most care even in a trivial task:
**you handed the agent a runnable pass/fail signal up front, so the loop closed itself** — it coded,
ran the check, read the result, and iterated to green without you hand-testing. That's **Module 3**,
the spine everything else leans on.

**④ Review, and stay the executor.** → *deep in Module 8 (Reviewing)*

```
You:    [reads the diff] One file, the test asserts the real behavior, exit code
        handled. [from a clean git start] Approved — commit it.
```

You read the *diff*, not just the green check; confirmed the test proved the right thing; and *you*
decided it ships. Letting the agent run but keeping your hands on the wheel is **Module 8**.

## The same task, driven badly

*Anti-pattern 1-2: no gear choice, no signal, no review.*

```
You:    add a version flag   [in acceptEdits, no exploration]
Claude: [guesses the flag-parsing spot, hardcodes "1.0.0" in a second place,
         edits two files, auto-accepted] Done!
You:    [merges without reading] ...later: it prints the wrong version, in two
        places, and there's no test to catch it.
```

Same five-minute task. No explore phase (it guessed the wrong spot), no verify signal (the wrong
version shipped), no review (you never saw the diff). The arc wasn't *slow* in the good version — it
was maybe ninety seconds longer — but it was *shaped*, and shape is what separates shipping from
thrashing.

## What you just saw (the arc, named)

Five beats, and each is a whole module:

| Beat | What you did | Owned by |
|---|---|---|
| Explore | read-only, right files first | Module 0 modes + Module 2 context |
| Plan-or-act | one-sentence diff → skip the plan | Module 4 |
| **Verify** | signal *before* code, loop to green | **Module 3 ⭐** |
| Review | read the diff, decide to ship | Module 8 |
| Stay executor | clean git, you approve | Module 8 |

Notice verification got the most attention even here — that's not an accident, it's the thesis of the
whole gym. Everything from Module 2 on is us slowing down to master one of these beats.

## 🧠 Active recall

No peeking — these are about the **arc**, not the details:

1. List the five beats of a good drive, in order.
2. Which single beat did the good drive spend the most care on, and why is that the right instinct?
3. In the bad drive, name two beats that were skipped and the concrete failure each one caused.

## 🔍 In the wild

Skim Anthropic's "Claude Code best practices" (cited in `RESEARCH.md`). Notice the recurring shape:
explore → plan → code → commit, with a verify signal closing the loop. The arc you just watched isn't
ours — it's the industry's. Pick one small task you'd do this week and, in your head, name its five
beats before you touch the keyboard.

## What you learned + what's next

You've now felt the whole drive once: explore → (plan?) → **verify** → review, staying in command.
**The one sentence to remember:** *a good drive has a shape — understand, decide, make it checkable,
review — and verification is its center of gravity.*

Now we slow down. **Module 2 — Context Management** starts the deep work: keeping the agent fed the
*right* tokens, the constraint that sits under every beat you just watched.
