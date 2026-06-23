# STYLE — how every lesson, the README, and the coach must read

This is the writing & teaching style for the whole gym. Every `modules/<n>.<slug>/lesson.md`, the `README.md`,
and the live coach (`ai-coach` / `ai-ui` skills) follow it. It is distilled directly from
**"The Rust Programming Language"** book — the gold standard for warm, example-first technical
teaching — and adapted for our subject (driving an AI agent, not learning a language).

The litmus test: *a sharp engineer from a different stack should feel personally guided, never
lectured, and should be able to do the thing by the end of the page.*

---

## KEEP — the Rust-Book teaching DNA

**1. Warm, conversational second person.**
Write "you" and "we'll" and "let's". Address the reader directly and invite experimentation.
> Rust: *"Give Rust a try, and see if its choices work for you."* · *"Let's jump in by working through a hands-on project together!"*
Our register: a senior peer pairing with you, not a manual.

**2. Written for a capable peer from another background.**
Assume real engineering experience; assume **nothing** about which stack or which AI tool they've
used. Never condescend, never pad. Define our jargon (harness, context window, subagent) the first
time it appears, briefly.

**3. Why before how.**
Open every idea with the *goal and the mental model*, then the mechanics. Never lead with a
settings table or a flag list. The reader should know *why this matters* before *which button*.

**4. Learn-by-doing arc.**
Within a section: **show a small working thing → explain why each part exists → run it / show the
output → add one increment of complexity.** Momentum first, completeness later.

**5. Progressive disclosure (spiral).**
Tell the reader, explicitly, when they don't need to understand something yet — and forward-link it.
> Rust: *"You don't need to know a lot of those details to finish this program. For now, all you need to know is…"*
Use the same move: *"For now, all you need is X; we go deep on this in Module N."*

**6. Captioned example transcripts (our version of Rust's numbered Listings).**
Rust shows numbered `Listing 2-1` code blocks and the real `cargo run` output. Our "runnable
example" is an **annotated transcript of a real Claude Code session** doing the workflow — show the
prompt, the agent's moves, and the **actual output/verify signal**, with a short caption:
> *Transcript 4-1: closing a verify loop — the agent runs the test, reads the failure, and fixes it without being told.*
Always pair the good transcript with a short **anti-pattern** ("here's the same task driven badly").

**7. "Note:" callouts** for traps, gotchas, and optional depth — short asides, never walls of text.
> *Note: auto mode is not a free pass — on real overeager actions it still missed ~17%. Treat it as a seatbelt, not a chauffeur.*

**8. Feedback is the teacher.**
Rust frames *reading compiler errors* as the core skill. Our equivalent: reading the **agent's
output, the verify signal, and the review** is the skill. Teach the reader to treat that feedback as
guidance, not noise — that mindset is half the course.

**9. End every lesson with a recap + forward link.**
> Rust: *"This project was a hands-on way to introduce you to … In the next chapter…"*
Close with: what you can now do, the one sentence to remember, and what the next module unlocks.

**10. Rhythm.** Short paragraphs. One idea at a time. Concrete over abstract. Prefer a vivid example
to a definition.

---

## DROP — patterns from go-gym / the Rust Book that are NOT for us

- **Language-feature progression** (variables → loops → ownership → traits). Our spine is
  **workflow principles**, not language features.
- **Compiled-code Listings + `cargo run` / `go test` output as the medium.** Our examples are
  **agent/terminal workflow transcripts** (plan → delegate → verify), not compiler output.
- **Build-tag stub/solution mechanics, `go test` GREEN hard gates, graduation "bars."** We are
  self-paced with a scorecard (see `AGENTS.md`).
- **A published static book (mdBook).** Lessons render **inside the web UI**; markdown is the single
  source of truth.
- **"Real code in the wild = stdlib."** Our **🔍 In the wild** sections point at real
  **Anthropic / Claude Code docs and practices** instead (cite `RESEARCH.md`).

> **Reclaim — we drop Rust's language *content*, not its *structure*.** An earlier version of this
> guide threw the structural baby out with the language-feature bathwater. We keep Rust's
> **architecture**: start by *doing*, give the whole arc in an **early end-to-end exemplar** (the
> "Guessing Game"), let each concept chapter **own one idea deeply**, and **integrate with projects**
> — not just a final capstone. That architecture lives in the lesson types below and in
> `CURRICULUM.md`.

---

## Lesson types — not every lesson has the same shape

The Rust Book doesn't force one template on every chapter: *Getting Started*, the *Guessing Game*
project, *Common Concepts*, and *Ownership* each have a different shape fitted to their job. We do the
same. A lesson declares its **type** in `CURRICULUM.md`, and the type sets its anatomy. The voice
(everything under KEEP) is identical across all four — only the structure differs.

**1. Orientation** — *e.g. M0 `harness`.* Get the learner *operating the machine*, hands-on.
Anatomy: Hook → the mental model (one diagram-in-words) → **the control surface in depth** (the
actual knobs they operate) → **do-this-now reps inline** → cold recall → what's next.
*Rule:* this is the most hands-on lesson in the course, **not** the most abstract — and it **owns its
idea**; it does not forward-defer its substance to later modules.

**2. First-Drive / Exemplar** — *e.g. M1 `first-drive`.* Show the **whole arc in miniature** before
any single piece is taught deeply — the "Guessing Game." Anatomy: the task → drive it **phase by
phase**, each a short beat that **forward-links** to the deep module that owns it ("we go deep on
this in Module N") → a contrasting *driven-badly* pass → "what you just saw" (the arc named) → recall
about the **arc**, not the pieces. *Rule:* breadth over depth is correct here, and the forward-links
are the point — this is the **one** lesson type that legitimately defers depth.

**3. Principle** — *most modules.* Teach one idea deeply. Anatomy: the seven beats — Hook → big idea
→ principle & mechanics → worked transcript + anti-pattern → 🧠 recall → 🔍 in the wild → recap.
*Rule:* a Principle lesson **owns its idea** — it must not hand its core substance to a later module.
Forward-links are for genuinely separate topics, never for "the real explanation is in Module N."

**4. Integration / Project** — *e.g. M6 `ship-feature`, M12 `orchestrate` capstone.* Force the
learner to combine **≥ 3 principles** on one realistic task. Anatomy: a short framing of what's being
integrated and why now → the mission (mostly in `modules/<n>.<slug>/challenge.md`) → a scorecard that
**spans the integrated principles** → reflection. *Rule:* less reading, more doing; a project may
skip the separate practice drill (the mission *is* the rep).

---

## Quick checklist before a lesson ships

- [ ] Opens with *why this matters*, not mechanics.
- [ ] Has at least one captioned **transcript** of the workflow done well + a contrasting anti-pattern.
- [ ] Says "you"/"we'll"; reads like a peer, not a manual.
- [ ] **Matches its declared lesson type's anatomy** (Orientation / Exemplar / Principle / Project).
- [ ] **Owns its idea** — unless it's an Exemplar, it does *not* defer its core substance to a later
      module. (Forward-links are for separate topics, or the whole point in an Exemplar.)
- [ ] Ends with a recap + the one sentence to remember + what's next.
- [ ] Claims are grounded in `RESEARCH.md` (link the source).
