"""Entry point so `python -m sandbox ...` works from the gym repo root."""
import os
import sys

# Let the flat modules (cli, notes, due) import each other by bare name whether
# this folder is run as `python -m sandbox` from the parent, or its files are
# imported directly from inside it.
sys.path.insert(0, os.path.dirname(__file__))

from cli import run  # noqa: E402

if __name__ == "__main__":
    raise SystemExit(run(sys.argv[1:]))
