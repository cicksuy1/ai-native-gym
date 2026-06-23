# Backlog — things people have asked for

Real-ish feature requests for the notes CLI. Later gym modules will have you pick some of these up;
for now they're here as context (and as candidates when a challenge asks for "a small useful change").

- **A `--version` flag.** `cli.py` knows its version (`VERSION`) but doesn't expose it on the command
  line yet.
- **Reject empty notes.** `add` currently accepts a blank title; it should refuse one with a clear
  message.
- **Due dates.** Let a note carry a due date (`due:2026-07-01`) and flag overdue ones. *(Started in
  `due.py` — not finished.)*
- **Tags.** Allow `#tags` in a title and a `--tag` filter on `list`.
- **Persistence.** Save notes to a file so they survive between runs.
- **Priorities.** A `!` / `!!` / `!!!` marker on a note and a way to sort by it.
- **Search history.** "I'd like to see my past searches." *(That's the whole request — no more detail
  has been given. Someone will need to pin down what it actually means.)*
