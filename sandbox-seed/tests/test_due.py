"""Tests for due-date support. These FAIL at baseline — make them green in `due.py`
WITHOUT editing this file. This is the Verification-module corner of the sandbox.
"""
import unittest

from due import parse_due, is_overdue


class ParseDueTests(unittest.TestCase):
    def test_extracts_due_date(self):
        self.assertEqual(parse_due("ship it due:2026-07-01"), "2026-07-01")

    def test_returns_none_without_token(self):
        self.assertIsNone(parse_due("no due here"))


class IsOverdueTests(unittest.TestCase):
    def test_past_due_is_overdue(self):
        self.assertTrue(is_overdue("2026-06-01", "2026-06-23"))

    def test_future_due_is_not_overdue(self):
        self.assertFalse(is_overdue("2026-07-01", "2026-06-23"))


if __name__ == "__main__":
    unittest.main()
