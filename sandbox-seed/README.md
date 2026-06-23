# Practice sandbox — a tiny notes CLI

This is your **practice yard** for the AI-Native Gym: a small, real Python program you drive your
agent against during the module challenges. Nothing here is precious — break it, fix it, learn. It's
your own git repo (see the gym's setup step), so `git diff` always shows exactly what *you* changed.

## Run it

From the gym repo root:

```
python -m sandbox add "buy milk"
python -m sandbox list
python -m sandbox find milk
```

## Run the tests

```
cd sandbox
python -m unittest
```

## Layout

- `notes.py` — the core notes store (add / list / find / complete).
- `cli.py` — the command-line interface.
- `due.py` — a half-finished "due date" feature; some of its tests don't pass yet.
- `tests/` — the unittest suite.
- `BACKLOG.md` — things people have asked for.

No requirements, no build step — just Python 3.
