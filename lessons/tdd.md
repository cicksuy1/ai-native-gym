# Module 7 — TDD with Agents

> **You are here:** verification is the spine (Module 3), and you've already shipped a feature that
> closed its loop (Module 6). TDD is verification taken to its sharpest edge — you write the pass/fail
> signal *first*, then let the agent code to green.

## Why this matters

In Module 3 you learned to hand the agent a runnable signal. TDD asks: what if the signal comes
*before* the code even exists? That flips the agent's whole loop. Instead of "write code, then maybe
check it," the agent has a concrete, failing target from the first second — and it can run, read the
failure, fix, and rerun until green, **autonomously**.

This is why TDD is singled out across the research as *especially* effective with agents: tests give
the agent "something concrete to verify against, enabling longer autonomous runs" (`RESEARCH.md`,
Pillar 5). It's not a virtue you tolerate — it's the highest-leverage way to let an agent work on its
own without going off the rails.

## The big idea: the test is the spec the agent can run

A spec (Module 5) is a contract the agent reads. A *test* is a contract the agent can **execute** —
it fails loudly and specifically until the behavior is right. That's the magic: a failing test turns
"is this correct?" from a judgment call into a command that exits non-zero. The agent doesn't need
your eyes mid-loop; it has the test's verdict.

So TDD with an agent isn't really about testing discipline for its own sake. It's about giving the
agent the *tightest possible* verify loop — one that exists before generation and that the agent
can't fool without you noticing.

## The principle: tests first, confirm they fail, commit them, code to green — don't touch the tests

The canonical agent-TDD sequence, straight from the research (`RESEARCH.md`, Pillar 5):

1. **Ask the agent to write the tests first** — from the requirements, before any implementation.
2. **Confirm they fail.** Run them. Red. This proves the tests actually exercise the behavior (a test
   that passes against no implementation is testing nothing).
3. **Commit the tests.** Now they're a fixed target, checkpointed.
4. **Write code to pass them** — and **without modifying the tests.**

That last rule is the load-bearing one. If the agent can edit the tests, it will "pass" them by
weakening them — and you're back to confidently-wrong code. The tests are the contract; the
implementation bends to *them*, never the reverse.

> **Note:** step 2 is the step people skip, and it's the one that matters most. A test you never
> watched fail might be asserting nothing (a typo'd assertion, a wrong import, a test that exits 0 on
> an empty function). *Confirm red before you trust green.* Watching it fail for the right reason is
> what makes the eventual green mean something.

## Watch it done well

*Transcript 5-1: red → commit → green, tests untouched.*

```
You:    We need a function splitInvoice(total, n) that splits a total into n
        parts where cents never go missing (remainder distributed to the first
        parts). FIRST write tests for: even split, uneven split (100/3),
        n=1, and total=0. Do NOT implement yet.

Claude: [writes invoice.test.ts with 4 cases, runs it]
        All 4 fail (splitInvoice is not defined). ✅ red, as expected.

You:    Good — these tests look right. Commit them.
Claude: [commits "test: splitInvoice cases"]
You:    Now implement splitInvoice to pass them. Do not edit the test file.

Claude: [writes splitInvoice, runs tests] 3/4 pass. 100/3 fails: got
        [33.33, 33.33, 33.33], lost a cent. [fixes remainder distribution,
        reruns] 4/4 green. ✅
You:    [diff touches only invoice.ts, tests unchanged] Approved.
```

The tests were red first (proving they bite), committed (fixed target), and the agent drove itself to
green without touching them. The human reviewed a result the *tests already proved*.

*Anti-pattern 5-2: tests after, or tests editable.*

```
You:    write splitInvoice and some tests for it

Claude: [writes the function AND tests together; the tests happen to assert
         exactly what the (buggy) code does — including the lost cent]
        Done! All tests pass. ✅
You:    ...the tests pass because they were written to match the bug
```

When tests are written *to fit* the implementation (or are editable mid-loop), green means nothing —
it just means the code agrees with itself. The lost cent ships, with a passing test suite blessing
it.

## 🧠 Active recall

No peeking:

1. List the four steps of agent-TDD in order.
2. Why must you *confirm the tests fail* before implementing — what does skipping that step risk?
3. Why is "don't let the agent edit the tests" the load-bearing rule?

## 🔍 In the wild

Find the TDD passage in "How Anthropic teams use Claude Code" and the practitioner write-up cited in
`RESEARCH.md`, Pillar 5 ("confirm they fail, commit the tests, then write code to pass without
modifying the tests"). Notice it's framed as enabling *longer autonomous runs* — connect that to
Module 3's principle that a stronger signal buys more safe autonomy.

## What you learned + what's next

You can now drive agent-TDD: tests first, confirm red, commit, code to green, tests untouched — the
tightest verify loop there is. **The one sentence to remember:** *write the failing test first, watch
it fail, and never let the agent move the goalposts.*

Next, **Module 8 — Reviewing AI Output & Staying the Executor**: TDD proves behavior; review with
fresh eyes catches everything a test can't, and keeps you in command.
