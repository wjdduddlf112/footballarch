#!/usr/bin/env python3
"""Bundesliga 2012-13 historical DRAFT structural checks ONLY, not a three-year qualitative certification."""
import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/"data/bundesliga-2012-13.json"
ARCHIVE=ROOT/"data/bundesliga-standings-verified-1999-2026.json"
CLUBS={"bayern","dortmund","leverkusen","schalke","freiburg","frankfurt","stuttgart"}
POS=("GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST")
TIERS=("S","A+","A","A-","B+","B","B-","C+","C","C-","D")
GRADE_MAP={"A":"A0","B":"B0","C":"C0"}
STATUS={"verified","partially_verified","evidence_pending","conflicting_sources"}
EXPECTED_XI={"GK":1,"CB":2,"LB":1,"RB":1,"DM":1,"CM":1,"CAM":1,"LW":1,"RW":1,"ST":1}

def check():
    d=json.loads(DATA.read_text(encoding="utf-8"))
    src=json.loads(ARCHIVE.read_text(encoding="utf-8"))["seasons"]["2012-13"]
    err=[]
    ps=d.get("players",[])
    meta=d.get("meta",{})
    quals=d.get("qualifiers",[])
    xi=d.get("bestXi",[])
    def ok(v,msg):
        if not v: err.append(msg)
    ok(meta.get("leagueId")=="bundesliga" and meta.get("season")=="2012-13" and meta.get("status")=="draft","incorrect DRAFT metadata")
    ok(meta.get("dataStatus")=="draft_unapproved" and meta.get("bestXiReview",{}).get("status")=="proposed_unapproved","incorrect approval status")
    ok(set(q["club"] for q in quals)==CLUBS and len(quals)==7,"actual 2013-14 UEFA clubs (Stuttgart is cup finalist)")
    ok({p["club"] for p in ps}==CLUBS,"player club coverage")
    ok(d.get("standings")==src["standings"],"verified league table not preserved")
    ok(len(ps)==meta.get("candidateCount"),"candidate count mismatch")
    ids=set(); groups=defaultdict(list); backups=Counter(); tcount=Counter()
    for p in ps:
        ident=p.get("id","?")
        ok(ident not in ids,"duplicate id "+ident);ids.add(ident)
        ok(p.get("season")=="2012-13" and p.get("club") in CLUBS,"season/club "+ident)
        ok(p.get("position") in POS,"position "+ident)
        ok(p.get("role") in {"starter","backup"},"role "+ident)
        ok(p.get("review")=="draft_unapproved","individual approval "+ident)
        ok(p.get("verificationStatus") in STATUS,"verification status "+ident)
        ok(bool(p.get("nameOriginal") and p.get("nameKo") and p.get("clubNameOriginal")),"identity "+ident)
        born=p.get("born")
        ok(born is None or (isinstance(born,str) and len(born)==10 and born[4]=="-" and born[7]=="-"),"birth date "+ident)
        if p.get("role")=="backup":backups[(p["club"],p["position"])]+=1
        apps, starts, mins=(p.get("leagueAppearances"),p.get("leagueStarts"),p.get("leagueMinutes"))
        ok(all(type(x)==int and x>=0 for x in (apps,starts,mins)) and starts<=apps and mins<=apps*90+120,"2012-13 minutes/starts "+ident)
        records=p.get("threeSeasonReview",{}).get("records",{})
        ok(set(records)=={"2010-11","2011-12","2012-13"},"three-season window "+ident)
        ok(bool(records.get("2012-13",{}).get("source")),"missing actual season source "+ident)
        if p.get("verificationStatus")=="verified":
            ok(all(records[x].get("verification") not in {"evidence_pending","reused_old_draft_not_independently_reverified"} for x in records),"falsely verified three season history "+ident)
        ok(p.get("tier") is None or p.get("tier") in TIERS,"grade "+ident)
        if p.get("tier") in TIERS:tcount[p["tier"]]+=1
        if p.get("position") in POS:groups[p["position"]].append(p)
    for (c,z),n in backups.items():ok(n<=1,f"{c}/{z}: too many backups")
    # Explicitly NO imposed starter-count cap. Multiple actual starters per position are permissible.
    for z in POS:
        grp=sorted(groups[z],key=lambda p:p.get("rank") or 10**9)
        ok([p.get("rank") for p in grp]==list(range(1,len(grp)+1)),f"{z}: rank sequence")
        grades=[TIERS.index(p["tier"]) if p.get("tier") in TIERS else len(TIERS) for p in grp]
        ok(grades==sorted(grades),f"{z}: rank contradicts grade")
    for t in TIERS:ok(meta.get("tierSummary",{}).get(GRADE_MAP.get(t,t),0)==tcount[t],f"tier count {t}")
    ok(meta.get("worldClassCount")==tcount["S"]+tcount["A+"],"worldclass count")
    ok(meta.get("leagueTopClassCount")==sum(tcount[x] for x in ("S","A+","A","A-")),"league top count")
    byid={p["id"]:p for p in ps}
    ok(len(xi)==11 and len(set(x.get("playerId") for x in xi))==11,"Best XI size/unique")
    ok(dict(Counter(x.get("position") for x in xi))==EXPECTED_XI,"Best XI 4-2-3-1 shape")
    for x in xi:
        p=byid.get(x.get("playerId"))
        ok(p is not None and p["position"]==x["position"],"XI eligibility "+str(x.get("playerId")))
        ok(x.get("status")=="proposed_unapproved","XI improperly approved")
    return err,len(ps),dict(Counter(p["club"] for p in ps)),tcount

if __name__=="__main__":
    problems,n,clubs,grades=check()
    if problems:
        for x in problems: print("FAIL:",x)
        raise SystemExit(1)
    print(f"PASS: 2012-13 DRAFT structural checks ({n} players, {len(clubs)} UEFA clubs, 11 Best XI)")
    print("Note: historical 3-season qualitative verification and live browser checks are NOT covered.")
