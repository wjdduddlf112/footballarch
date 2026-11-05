#!/usr/bin/env python3
"""Football Archive Bundesliga 2010-11 structural validation (NOT historical verification)."""
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FILE = ROOT / "data" / "bundesliga-2010-11.json"
POSITIONS = ("GK", "CB", "LB", "RB", "DM", "CM", "CAM", "LW", "RW", "ST")
GRADES = ("S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D")
CLUBS = {"dortmund", "leverkusen", "bayern", "hannover", "mainz", "schalke"}
STATES = {"verified", "partially_verified", "evidence_pending", "conflicting_sources"}

def run():
    errors = []
    try:
        data = json.loads(FILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        return [f"Cannot parse file: {exc}"]
    meta = data.get("meta", {})
    ps = data.get("players", [])
    qualifiers = data.get("qualifiers", [])
    standings = data.get("standings", [])
    xi = data.get("bestXi", [])
    if meta.get("leagueId") != "bundesliga" or meta.get("season") != "2010-11":
        errors.append("Incorrect league/season")
    if meta.get("status") != "draft":
        errors.append("Unapproved season must be DRAFT")
    if len(ps) != meta.get("candidateCount"):
        errors.append("Candidate total mismatch")
    if len(qualifiers) != 6 or {q["club"] for q in qualifiers} != CLUBS:
        errors.append("Wrong UEFA-qualified clubs (Schalke must be included; Nürnberg excluded)")
    if {p["club"] for p in ps} != CLUBS:
        errors.append("Player club selection does not match actual UEFA clubs")
    if len(standings) != 18 or {row["rank"] for row in standings} != set(range(1,19)):
        errors.append("Standings incomplete")
    ids = [p.get("id") for p in ps]
    if len(ids) != len(set(ids)):
        errors.append("Duplicate player ID")
    positions = defaultdict(list)
    backups = Counter()
    tiers = Counter()
    for p in ps:
        id_ = p.get("id")
        pos = p.get("position")
        if pos not in POSITIONS:
            errors.append(f"{id_}: invalid position")
            continue
        if p.get("club") not in CLUBS:
            errors.append(f"{id_}: non-qualifying club")
        if p.get("role") not in ("starter", "backup"):
            errors.append(f"{id_}: invalid role")
        if p.get("role") == "backup":
            backups[(p["club"], pos)] += 1
        if not all(p.get(k) for k in ("nameKo", "nameOriginal", "born", "clubNameOriginal")):
            errors.append(f"{id_}: missing core identity")
        if p.get("verificationStatus") not in STATES:
            errors.append(f"{id_}: invalid verification state")
        if p.get("review") != "draft_unapproved":
            errors.append(f"{id_}: must remain DRAFT")
        grade = p.get("tier")
        if grade is not None and grade not in GRADES:
            errors.append(f"{id_}: invalid tier {grade}")
        if grade is not None:
            tiers[grade] += 1
        if p.get("season") != "2010-11":
            errors.append(f"{id_}: wrong season")
        apps, starts, mins = [p.get(x) for x in ("leagueAppearances","leagueStarts","leagueMinutes")]
        if any(not isinstance(x, int) or x < 0 for x in (apps, starts, mins)) or starts > apps or mins > apps*90 + 120:
            errors.append(f"{id_}: inconsistent appearances/starts/minutes")
        records = p.get("threeSeasonReview",{}).get("records",{})
        if set(records) != {"2008-09","2009-10","2010-11"}:
            errors.append(f"{id_}: incorrect 3-season evaluation window")
        if p.get("verificationStatus") == "verified" and any(
            records.get(season,{}).get("verification","evidence_pending") in
            {"evidence_pending","archived_prior_DRAFT_not_independently_revalidated"}
            for season in ("2008-09","2009-10","2010-11")
        ):
            errors.append(f"{id_}: historical verification falsely complete")
        positions[pos].append(p)
    for (club,pos),number in backups.items():
        if number > 1:
            errors.append(f"{club}/{pos}: more than one reserve")
    # No arbitrary limit on starting players by club, role or formation.
    for pos in POSITIONS:
        group = sorted(positions[pos],key=lambda p:p.get("rank") or 10**9)
        if [p.get("rank") for p in group] != list(range(1,len(group)+1)):
            errors.append(f"{pos}: ranks not unique and contiguous")
        indexes = [GRADES.index(p["tier"]) if p.get("tier") in GRADES else len(GRADES) for p in group]
        if indexes != sorted(indexes):
            errors.append(f"{pos}: tier-rank order conflict")
    counts = meta.get("tierSummary",{})
    for t in GRADES:
        alias = {"A":"A0","B":"B0","C":"C0"}.get(t,t)
        if counts.get(alias,0) != tiers[t]:
            errors.append(f"{t}: tier total mismatch")
    if meta.get("worldClassCount") != tiers["S"] + tiers["A+"]:
        errors.append("World Class count mismatch")
    if meta.get("leagueTopClassCount") != sum(tiers[t] for t in ("S","A+","A","A-")):
        errors.append("League Top Class count mismatch")
    if len(xi) != 11 or len({row.get("playerId") for row in xi}) != 11:
        errors.append("Best XI must be 11 distinct players")
    by_id = {p["id"]:p for p in ps}
    for row in xi:
        p = by_id.get(row.get("playerId"))
        if p is None or p.get("position") != row.get("position"):
            errors.append(f"Best XI invalid slot {row}")
        if row.get("status") != "proposed_unapproved":
            errors.append("Best XI approved without user approval")
    return errors

if __name__ == "__main__":
    problems = run()
    if problems:
        for item in problems: print("FAIL:",item,file=sys.stderr)
        raise SystemExit(1)
    print("PASS: Bundesliga 2010-11 data structural integrity")
    print("NOTE: structural check is not a historical or browser audit.")
