"""Command-line interface for the notes sandbox.

Run it from the gym repo root:  python -m sandbox add "buy milk"
"""
import argparse
import sys

from notes import NoteStore, NoteError, format_note

VERSION = "0.1.0"


def build_parser():
    """Build the argument parser for the notes CLI."""
    parser = argparse.ArgumentParser(prog="sandbox", description="A tiny notes CLI.")
    sub = parser.add_subparsers(dest="command")

    add_p = sub.add_parser("add", help="add a note")
    add_p.add_argument("title", nargs="*", help="the note text")

    sub.add_parser("list", help="list all notes")

    find_p = sub.add_parser("find", help="find notes by text")
    find_p.add_argument("query", help="text to search for")

    return parser


def run(argv, store=None):
    """Run one CLI invocation. `store` lets tests pass a shared NoteStore."""
    parser = build_parser()
    args = parser.parse_args(argv)
    store = store if store is not None else NoteStore()

    if args.command == "add":
        title = " ".join(args.title)
        note = store.add(title)
        print(format_note(note))
        return 0

    if args.command == "list":
        notes = store.list()
        if not notes:
            print("No notes yet. Add one with: add <text>")
            return 0
        for note in notes:
            print(format_note(note))
        return 0

    if args.command == "find":
        matches = store.find(args.query)
        if not matches:
            print("No notes match that querry.")
            return 0
        for note in matches:
            print(format_note(note))
        return 0

    parser.print_help()
    return 1
