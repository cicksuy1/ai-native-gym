"""Core notes store for the practice sandbox — a tiny in-memory task list.

The functions here are deliberately small and call into one another, so exploring
in plan mode ("what does `find` do, and where is it called from?") is meaningful.
"""


class NoteError(Exception):
    """Raised when a note operation is invalid (e.g. completing a missing note)."""


class NoteStore:
    """An in-memory collection of notes, each a dict: id, title, done."""

    def __init__(self):
        self._notes = []
        self._next_id = 1

    def add(self, title):
        """Add a note with the given title and return it."""
        note = {"id": self._next_id, "title": title, "done": False}
        self._notes.append(note)
        self._next_id += 1
        return note

    def list(self):
        """Return all notes in insertion order."""
        return list(self._notes)

    def find(self, query):
        """Return notes whose title contains `query` (case-insensitive)."""
        needle = query.lower()
        return [note for note in self._notes if needle in note["title"].lower()]

    def complete(self, note_id):
        """Mark the note with `note_id` as done; raise NoteError if it is missing."""
        for note in self._notes:
            if note["id"] == note_id:
                note["done"] = True
                return note
        raise NoteError("no note with id {}".format(note_id))


def format_note(note):
    """Render a single note as a one-line string: '[x] 3 ship it'."""
    mark = "x" if note["done"] else " "
    return "[{}] {} {}".format(mark, note["id"], note["title"])
