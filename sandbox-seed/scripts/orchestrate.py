"""Example orchestration scaffold — fan-out -> reduce -> synthesize.

The SCRIPT holds the loop; each worker does one scoped unit and returns a summary.
Module 12 (the capstone) has you adapt this to a real, genuinely-parallel task — or
decide NOT to orchestrate and write a DECISION.md saying why. Budget for ~15x tokens.
"""


def workers():
    """The independent units to fan out over. Keep them genuinely parallel."""
    return ["audit-validation", "audit-error-messages", "audit-tests"]


def run_worker(unit):
    """Run one unit and return its summary (a real run dispatches a scoped subagent)."""
    # TODO: dispatch a scoped subagent for `unit` and return its short summary.
    raise NotImplementedError


def synthesize(summaries):
    """Reduce the per-worker summaries into one verified result."""
    # TODO: merge, de-dupe, and verify before trusting any single summary.
    raise NotImplementedError


if __name__ == "__main__":
    results = [run_worker(unit) for unit in workers()]
    print(synthesize(results))
