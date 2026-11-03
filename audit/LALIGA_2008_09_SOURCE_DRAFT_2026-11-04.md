# La Liga 2008-09 — Source-led DRAFT audit (2026-11-04)

> This is **not historical verification complete**. No user has approved rankings or Best XI.

## Scope and qualifying teams

2009-10 UEFA official lists confirm 4 UCL (Barcelona, Real Madrid, Sevilla, Atlético Madrid) and 3 UEL (Villarreal, Valencia, Athletic Club). Athletic qualified as Copa del Rey losing finalist behind UCL-qualified Barcelona. Deportivo (7th in league) is excluded. No 2009 UEFA Intertoto Cup was held.

- https://www.uefa.com/uefachampionsleague/history/seasons/2010/clubs/
- https://www.uefa.com/uefaeuropaleague/history/seasons/2010/clubs/
- https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/Publications/01/44/79/55/1447955_DOWNLOAD.pdf

## Data counts

- Eligible clubs: **7**
- Candidate players: **129**; nominal starters: **77**; backup: **52**
- Proposed tiers: **129**, NOT independently 3-season validated
- World Class S/A+: **13**; League Top S/A+/A/A-: **37**
- ISO birthdays **129/129 populated** after 41 newly researched and 88 prior archive values; 16 club/independent historical squad agree, 3 other public-source pairs agree, 3 conflicts, 35 one-source, 72 older archive-only. Full DOB evidence audit in `audit/LALIGA_2008_09_BIRTHDATE_EVIDENCE_2026-11-04.md`.
- Previous season history: non-independent references from 2006-07 and 2007-08 archive, or null where missing. DO NOT read archive reuse as source cross-check.
- Best XI: proposed only; 4-4-2 is an era hypothesis, not a 380-match census.
- Position ranks: tied to provisional tiers with appearances/starts sorting; same-tier qualitative review is incomplete.

## Source per club

- barca: https://www.bdfutbol.com/en/t/t2008-091.html
- madrid: https://www.bdfutbol.com/en/t/t2008-092.html
- sevilla: https://www.bdfutbol.com/en/t/t2008-0933.html
- atleti: https://www.bdfutbol.com/en/t/t2008-097.html
- villarreal: https://www.bdfutbol.com/en/t/t2008-0938.html
- valencia: https://www.bdfutbol.com/en/t/t2008-0936.html
- athletic: https://www.bdfutbol.com/en/t/t2008-096.html

## Verification checklist

| Gate | Status | Detail |
|---|---|---|
| UEFA 2009-10 actual club participation | checked against UEFA | 7 clubs |
| BDFutbol season appearances/starts at nominated clubs | copied pending independent confirmation | 129 entries |
| DOB two independent sources | partial | 16 Barça official+independent roster, 3 other public pairs, 3 conflicts, 107 lacking full two-source confirmation |
| 2006-07 and 2007-08 independent historical performances | incomplete | prior archive refs are not independent evidence |
| Predominant actual position (match by match) | incomplete | cross-position warnings above |
| Tier / ranking judgement | DRAFT proposal | no user approval |
| Leaguewide modal formation | incomplete | 4-4-2 hypothesis only |
| Site browser test | branch CI passing in earlier run; latest recheck pending | Local Chromium success on previous SHA; production not yet tested |

## Priority conflicts

1. **Real Madrid**: Lassana Diarra 19 league games, all starts after January; his nominal backup slot under 4-4-2 does not imply bench-only performance. Compare Gago's changing midfield role.
2. **Barcelona**: Márquez 23 starts, Piqué 25 starts, Puyol 26 starts. A simplified 2-CB starter pair hides genuine starter-level rotation.
3. **Athletic**: David López 26 starts versus Ion Vélez 17; tactical base 4-4-2 requires role verification before nominal starters are certified.
4. **Valencia**: Renan 19 starts, César 18. Goalkeeping starter label is marginal and split-season transfer/usage needs review.
5. **Sevilla**: Renato (25 starts), Romaric (30), Duscher (25), and various fullback/wing roles require per-match reconstruction.
6. Barcelona DOB source conflicts (Dani Alves May 5/6; Pinto Nov 8/15; Éric Abidal July 11/September 11) documented; 2006-07/07-08 individual performance and primary playing positions still need independent cross-check.

## Change-control

This branch introduces a new 2008-09 player season file; it preserves the original 2007-08 player file and unchanged 20-team archive standings, clubs, crests and UI. Deployment as **visible DRAFT** is permitted after automated tests; do NOT equate deploying with user approval or historical verification. Final player evaluation remains unapproved.
