#!/bin/sh
# Gym infrastructure (NOT a Module-11 exercise): on every turn-stop, mirror this session's
# transcript to a fixed in-repo path (.claude/last-session.jsonl) so the coach's ai-verify can
# read your *driving* without hunting through ~/.claude/projects. The file is gitignored, so it
# never dirties your proof-of-work diff. Module 11 still has you wire your OWN hook for a real
# friction point — this one is plumbing.
#
# The Stop-hook JSON arrives on stdin and carries "transcript_path"; copy that file verbatim.
python -c 'import json,sys,shutil,os; d=json.load(sys.stdin); tp=d.get("transcript_path"); dst=os.path.join(os.environ.get("CLAUDE_PROJECT_DIR","."),".claude","last-session.jsonl"); (tp and os.path.exists(tp) and shutil.copyfile(tp,dst))'
