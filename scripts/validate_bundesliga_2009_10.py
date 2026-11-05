#!/usr/bin/env python3
"""Validate Football Archive Bundesliga 2009-10 data integrity.

This is a structural validator, NOT a historical source verification.
"""
from __future__ import annotations

import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "bundesliga-2009-10.json"
POSITIONS = ["GK", "CB", "LB", "RB", "DM", "CM", "CAM", "LW", "RW", "ST"]
TIERS = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D"]
QUALIFIED = {"bayern", "schalke", "bremen", "leverkusen", "dortmund", "stuttgart"}
VERIFICATIONS = {"verified", "partially_verified", "evidence_pending", "conflicting_sources"}


def validate() -> list[str]:
    errors = []
    try:
        doc = json.loads(DATA.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        return [f"Cannot load season JSON: {e}"]

    meta = doc.get("meta", {})
    players = doc.get("players", [])
    clubs = doc.get("clubs", [])
    standings = doc.get("standings", [])
    qualifiers = doc.get("qualifiers", [])
    best = doc.get("bestXi", [])

    if meta.get("season") != "2009-10" or meta.get("leagueId") != "bundesliga":
        errors.append("Incorrect league/season metadata")
    if meta.get("status") != "draft":
        errors.append("Unapproved evaluation must remain draft")
    club_ids = {c.get("id") for c in clubs}
    if len(club_ids) != len(clubs):
        errors.append("Duplicate club IDs")
    qualified = {q.get("club") for q in qualifiers}
    if qualified != QUALIFIED or len(qualifiers) != 6:
        errors.append(f"Unexpected actual UEFA qualifying clubs: {qualified}")
    if any(q.get("club") not in club_ids for q in qualifiers):
        errors.append("Qualifier club absent from club catalog")
    if len(standings) != 18 or {r.get("rank") for r in standings} != set(range(1, 19)):
        errors.append("League standings should have 18 distinct positions")
    ids = [p.get("id") for p in players]
    if len(ids) != len(set(ids)):
        errors.append("Duplicate player IDs")
    if meta.get("candidateCount") != len(players):
        errors.append("candidateCount metadata differs from player total")
    if not players:
        errors.append("No players")
    if {p.get("club") for p in players} != QUALIFIED:
        errors.append("Player clubs differ from qualified clubs")
    per_position = defaultdict(list)
    reserve_counts = Counter()
    tier_counts = Counter()

    for p in players:
        who = p.get("id")
        club = p.get("club")
        position = p.get("position")
        tier = p.get("tier")
        if club not in QUALIFIED:
            errors.append(f"{who}: ineligible club")
        if position not in POSITIONS:
            errors.append(f"{who}: invalid position")
        if p.get("role") not in {"starter", "backup"}:
            errors.append(f"{who}: role not starter/backup")
        if p.get("role") == "backup":
            reserve_counts[(club, position)] += 1
        if tier is not None and tier not in TIERS:
            errors.append(f"{who}: tier {tier} invalid")
        if tier is not None:
            tier_counts[tier] += 1
        if p.get("verificationStatus") not in VERIFICATIONS:
            errors.append(f"{who}: unsupported historical verification state")
        for field in ("nameKo", "nameOriginal", "born", "clubNameOriginal"):
            if not p.get(field):
                errors.append(f"{who}: missing {field}")
        stats = (p.get("leagueAppearances"), p.get("leagueStarts"), p.get("leagueMinutes"))
        if any(not isinstance(x, int) or x < 0 for x in stats):
            errors.append(f"{who}: missing or negative league appearance/start/minutes")
        elif stats[1] > stats[0] or stats[2] > stats[0] * 90 + 120:
            errors.append(f"{who}: impossible league starts/minutes")
        review = p.get("threeSeasonReview", {})
        recs = review.get("records", {})
        if set(recs) != {"2007-08", "2008-09", "2009-10"}:
            errors.append(f"{who}: incorrect 3-season evaluation period")
        if p.get("verificationStatus") == "verified":
            if any(recs.get(y, {}).get("verification") == "evidence_pending" for y in ("2007-08", "2008-09", "2009-10")):
                errors.append(f"{who}: wrongly marked verified despite pending evidence")
        if p.get("review") != "draft_unapproved":
            errors.append(f"{who}: not in DRAFT")
        if p.get("season") != "2009-10":
            errors.append(f"{who}: incorrect season")
        per_position[position].append(p)
    for (club, position), count in reserve_counts.items():
        if count > 1:
            errors.append(f"{club}/{position}: {count} backup players; max 1")
    # Intentionally NO maximum starter count per team or position.
    for position in POSITIONS:
        group = per_position[position]
        expected_ranks = set(range(1, len(group) + 1))
        if {p.get("rank") for p in group} != expected_ranks:
            errors.append(f"{position}: ranks not unique and contiguous")
        ranked = sorted(group, key=lambda p: p.get("rank") or 999)
        if any(TIERS.index(ranked[i]["tier"]) > TIERS.index(ranked[i+1]["tier"]) for i in range(len(ranked) - 1) if ranked[i]["tier"] in TIERS and ranked[i+1]["tier"] in TIERS):
            errors.append(f"{position}: player tiers conflict with ranked order")
    mt = meta.get("tierSummary", {})
    for t in TIERS:
        label = {"A": "A0", "B": "B0", "C": "C0"}.get(t, t)
        if mt.get(label, 0) != tier_counts.get(t, 0):
            errors.append(f"{t}: metadata tier count mismatch")
    if meta.get("worldClassCount") != tier_counts["S"] + tier_counts["A+"]:
        errors.append("World Class count mismatch")
    if meta.get("leagueTopClassCount") != sum(tier_counts[t] for t in ("S", "A+", "A", "A-")):
        errors.append("League Top Class count mismatch")
    if len(best) != 11 or len({x.get("playerId") for x in best}) != 11:
        errors.append("Best XI not exactly 11 distinct players")
    by_id = {p["id"]: p for p in players}
    for item in best:
        p = by_id.get(item.get("playerId"))
        if not p:
            errors.append(f"Invalid Best XI player: {item.get('playerId')}")
        elif item.get("position") != p.get("position"):
            errors.append(f"Best XI player in unrelated position: {p['id']}")
        if item.get("status") != "proposed_unapproved":
            errors.append("Unapproved Best XI marked approved")
    return errors


if __name__ == "__main__":
    problems = validate()
    if problems:
        for err in problems:
            print("FAIL:", err, file=sys.stderr)
        sys.exit(1)
    print("PASS: Bundesliga 2009-10 JSON structural validation")
    print("NOTE: historical source/three-season verification is separate and remains pending.")
