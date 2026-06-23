"""Due-date support for notes — HALF BUILT.

`tests/test_due.py` already specifies how these two functions must behave, and
those tests currently FAIL. Your job in the Verification module is to implement
them so the suite goes green — without editing the tests.
"""


def parse_due(text):
    """Return the date in a `due:YYYY-MM-DD` token within `text`, or None.

    Examples:
        parse_due("ship it due:2026-07-01") -> "2026-07-01"
        parse_due("no due here")            -> None
    """
    # TODO: not implemented yet — see tests/test_due.py for the exact contract.
    raise NotImplementedError


def is_overdue(due, today):
    """Return True when `due` (YYYY-MM-DD) is strictly before `today` (YYYY-MM-DD)."""
    # TODO: not implemented yet — see tests/test_due.py for the exact contract.
    raise NotImplementedError
