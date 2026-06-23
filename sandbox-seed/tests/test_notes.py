"""Tests for the notes store. These PASS at baseline."""
import unittest

from notes import NoteStore, NoteError, format_note


class NoteStoreTests(unittest.TestCase):
    def test_add_returns_note_with_incrementing_ids(self):
        store = NoteStore()
        first = store.add("buy milk")
        second = store.add("walk dog")
        self.assertEqual(first["id"], 1)
        self.assertEqual(second["id"], 2)

    def test_find_is_case_insensitive(self):
        store = NoteStore()
        store.add("Buy Milk")
        self.assertEqual(len(store.find("milk")), 1)

    def test_complete_marks_done(self):
        store = NoteStore()
        note = store.add("buy milk")
        store.complete(note["id"])
        self.assertTrue(store.list()[0]["done"])

    def test_complete_missing_raises(self):
        store = NoteStore()
        with self.assertRaises(NoteError):
            store.complete(999)

    def test_format_note_renders_checkbox(self):
        self.assertEqual(format_note({"id": 1, "title": "x", "done": False}), "[ ] 1 x")


if __name__ == "__main__":
    unittest.main()
