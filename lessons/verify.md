# Module 3 — Verification Loops ⭐

> **You are here:** right after Context — and this is the spine of the whole course, placed early on
> purpose because every module after it loops back here. If you internalize one principle from the
> AI-Native Gym, make it this one.

## Why this matters

In 2026, generating code is cheap. The agent will happily produce a thousand lines in a minute. The
expensive, scarce, bottleneck activity is **knowing whether those lines are right**. Across both
Anthropic's docs and independent practitioners, the consensus is unambiguous: *the bottleneck has
shifted from code generation to verification of agent output* (`RESEARCH.md`, Executive Summary &
Pillar 5).

Sit with that, because it inverts the instinct most engineers bring in. The job is no longer "get
the AI to write the code." The AI can do that. The job is **"give the AI a way to check its own
work, so it closes the loop without you."** Master that and the agent can run longer, catch its own
mistakes, and hand you something already verified. Miss it and you become a human test-runner,
manually eyeballing every diff — the exact bottleneck the whole field is trying to escape.

## The big idea: hand the agent a runnable pass/fail signal

Here's the move, in one sentence from Anthropic's best-practices docs: give Claude a **runnable
pass/fail signal** — a test suite, a build exit code, a linter, a script that diffs output against a
fixture, a browser screenshot compared to a design — so that *"the loop closes on its own. Claude
does the work, runs the check, reads the result, and iterates until the check passes"*
(`RESEARCH.md`, Pillar 5).

That's it. That's the spine. The agent's gather → act → **verify** loop (Module 0) only truly closes
when phase 3 has something *real* to check against. Your job as executor is to **supply that
signal** — and to supply it *before* the agent starts generating, so every iteration is measured
against it.

A good verification signal is:

- **Runnable** — a command exits 0 or non-zero; no human judgment needed mid-loop.
- **Specific** — it fails for the *right* reason (a test that asserts the behavior, not just "it
  compiles").
- **Fast enough to loop on** — the agent can run it repeatedly and converge.

> **Note:** "it compiles" and "it ran without error" are the weakest possible signals — they catch
> syntax, not correctness. A loop that only checks "does it crash?" will happily converge on
> confidently-wrong code. Push for a signal that asserts *the behavior you actually want.*

## The principle: no verify signal, no autonomy

Here's the rule that ties verification to everything else: **the strength of the verification signal
is what determines how much autonomy you can safely grant.** Self-sufficient verification loops
(auto-running builds, tests, lints) are exactly what let the agent work longer on its own and catch
its own mistakes (`RESEARCH.md`, Pillar 5). No signal → you must review every step → low autonomy.
Strong signal → the agent self-corrects to green → you review the *result*.

This is why verification is the spine: planning (Module 4) should *name* the verify step, TDD
(Module 7) is verification taken to its logical extreme (write the signal first), review (Module 8)
is verification by a fresh pair of eyes, and orchestration (Module 12) is impossible without it
because you can't supervise twenty agents by hand. Every one of those loops back to: *what's the
pass/fail signal?*

## Watch it done well

*Transcript 4-1: closing a verify loop — the agent runs the test, reads the failure, and fixes it
without being told.*

```
You:    Implement parseDuration("1h30m") → 5400 (seconds). Here's a test file
        with 6 cases including edge cases. Make `npm test duration` pass. Don't
        edit the tests.

Claude: [writes parseDuration, runs `npm test duration`]
        4/6 pass. Failing: "90m" → expected 5400, got NaN; "" → expected error.
        [reads its own regex, sees it doesn't handle minutes-only input]
        [fixes the regex, reruns]
        6/6 pass. ✅

You:    [reads the diff — it's clean, and the tests prove the behavior] Approved.
```

The human supplied the signal (the test file) *up front* and said "don't edit the tests." The agent
then closed the loop **by itself**: ran → read the failure → fixed → reran → green. The human's
review was of a *verified* result, not a hopeful one.

*Anti-pattern 4-2: the same task with no signal.*

```
You:    write a parseDuration function that handles hours and minutes

Claude: [writes a plausible-looking function] Done! This handles formats like
        "1h30m" and converts to seconds.
You:    does it handle "90m"? what about empty string?
Claude: Good question — let me check… [it didn't; you're now the test suite]
```

Same function, no pass/fail signal. The agent had nothing to iterate against, so it stopped at
"looks done." Now *you're* doing the verification by hand, one edge case at a time — the bottleneck,
in person.

## 🧠 Active recall

No peeking:

1. What single thing has become the bottleneck in AI coding as of 2026 — generation or verification?
2. Describe a "runnable pass/fail signal" and give two concrete examples that aren't "it compiles."
3. *Why* does a stronger verification signal let you grant the agent more autonomy safely?

## 🔍 In the wild

Open Anthropic's **best-practices** docs and find the passage about closing the loop ("Claude does
the work, runs the check, reads the result, and iterates until the check passes" — `RESEARCH.md`,
Pillar 5). Notice it lists *non-test* signals too: a script diffing output against a fixture, a
screenshot compared to a design. The lesson: a verify signal isn't only "unit tests" — it's
*anything runnable that fails for the right reason.* Find one task in your own work and ask: what
would the runnable signal be?

## What you learned + what's next

You now know the central truth of AI-native development: **verification, not generation, is the
job** — and your highest-leverage act is handing the agent a runnable pass/fail signal so the loop
closes itself. **The one sentence to remember:** *generation is cheap; the executor's job is to make
"is it right?" a question the agent can answer on its own.*

Next, **Module 4 — Planning & Plan-vs-Act**: now that you know what makes work *checkable*, we decide
*when* to plan before acting — and every plan you make from here will name its own verify signal.
