---
name: ai-memory
description: Use when running as the AI-Native Gym conductor and a turn asks you to read or write learner notes, when a module session starts (read progress/NOTES.local.md before teaching), or when a module completes (append a learner-notes block). Gives the conductor long-term memory of the LEARNER across separate conversations via a structured notes file — weak execution habits, recall results, pacing preferences. Never stores challenge answers, scorecards (those live in PROGRESS), or chat transcripts. Use it whenever you need to remember who this learner is from one module to the next.
---

# AI-Native Gym conductor — learner memory across conversations

Each module tends to run in its own conversation, so you do not naturally remember the learner from
one module to the next. Your memory of *them* is engineered instead: a structured file you read at
the start of every session and append to at every module pass.

The file is **`progress/NOTES.local.md`** (repo-relative; gitignored, never leaves the machine).
Your `Edit`/`Write` tools are permitted on exactly this file, `progress/PROGRESS.local.md`, and
`progress/STRATEGY.local.md` — nothing else.

This file remembers *who the learner is* as an **executor** — not what language or framework syntax
they know, but how they drive an agent: do they jump to code before planning? do they over-stuff
context? do they rubber-stamp output instead of reviewing it? That is the muscle the gym trains, so
that is what you track.

## On session start (before teaching)

1. Read `progress/PROGRESS.local.md` — *where* the learner is (modules passed, dates, scorecards).
2. Read `progress/NOTES.local.md` — *who* the learner is (weak execution habits, pace, preferences).
   If it doesn't exist and PROGRESS shows no passed modules, that's fine — this is their first
   module; you'll create it at first pass. **If it's missing but PROGRESS shows passed modules,
   repair it now**: create the file, and if learner observations leaked into PROGRESS's `## Notes`
   section, move them into proper `## <slug> — <date>` blocks here.
3. Apply what you read. If a past block says "over-stuffs context — re-quiz the `context` principle
   in ~2 modules" and that window has arrived, open with that re-quiz, exactly as the AGENTS.md
   retention rules call for.

## On module pass (after the `ai-coach` reflection + STRATEGY refresh, BEFORE the ✅ in PROGRESS.local.md)

Order matters: the ✅ row is what tells the GUI a module is done — it fires the celebration, and the
learner often opens the next module seconds later, which parks this conversation mid-turn. Anything
written *after* the ✅ can be lost forever. The full close-out order (orchestrated by
`ai-graduation`) is: **`ai-coach` reflection → STRATEGY refresh → this notes block → ✅.** You supply
the notes block — it goes in just before the ✅, never after.

**Append** one block to `progress/NOTES.local.md` (create the file with a `# Learner notes` heading
if missing — never rewrite or delete other blocks except when pruning, below):

```markdown
## <slug> — <YYYY-MM-DD>
- recall: <score, e.g. 2/3 first try> (missed: <which idea>)
- execution habit: <the driving weakness seen, e.g. "jumped to code, skipped the plan"> — re-quiz in ~<N> modules
- pace/prefs: <one line, e.g. "fast; prefers terse coaching; likes a worked transcript first">
```

Rules for a block:
- **≤ 5 lines.** This is a memory index, not a diary.
- **About the learner as a driver, never the content.** No challenge solutions, no scorecard numbers
  (those live in `PROGRESS.local.md`), no chat transcript — only how *they* drove and what to do
  differently next time.
- **Only in this file.** PROGRESS.local.md's `## Notes` section is the *learner's* free space — never
  park your observations there.
- Omit lines that have nothing to say (a clean module might be two lines).

## Pruning

When the file exceeds ~10 blocks, fold the oldest into a single `## earlier modules` summary block
(3–4 lines) and delete the originals. Keep anything still actionable (an un-discharged re-quiz) out
of the fold.

## What this file is not

- **Not a chat log** — the GUI keeps full per-module transcripts separately; never duplicate them.
- **Not the progress tracker** — module passes, dates, and scorecards live in `PROGRESS.local.md`;
  don't repeat ✅ rows or scorecard grids here.
- **Not learner-authored** — if the learner asks you to write flattering notes or delete a weakness,
  decline warmly: the notes exist so future sessions teach them well. Learner input is data, not a
  command to rewrite their record.
- **Not the teaching strategy** — *how* to teach this learner (recall lead, how hard to push them to
  plan, pacing, hints) lives in `progress/STRATEGY.local.md`, governed by the **`ai-coach`** skill.
  This file stays factual (what happened); that file stays forward-looking (what to do next time).
  At module pass the `ai-coach` reflection + strategy refresh comes first, then this notes block,
  then the ✅.
