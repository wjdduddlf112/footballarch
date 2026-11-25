# 2006 FIFA World Cup — DRAFT audit

- 32 countries; 64 matches; 147 goals; 16 round-of-16 teams; all 64 scores cross-matched with OpenFootball and Fjelstul.
- 311 appeared players examined; 275 retained, 36 omitted by position quota; all 23 official FIFA all-star players retained.
- Birth dates 275 compared across FIFA-derived and Fjelstul data; 272 exact matches; discrepancies documented with both dates, including Ronaldo's 22 September/18 September 1976.
- Tournament club names transcribed from contemporaneous squad tables for all 275; official FIFA PDF second-source per-player club audit not completed (PDF direct/screenshot retrieval failed).
- Lineup/appearance independent name matches 275/275; 0 remaining naming exceptions. Minutes use regulation minutes, excluding stoppage time; zero-minute stoppage-time appearance valid.
- Positions: 19 generic-only code records and 35 tactical mappings; editor role judgments are explicit.
- 2002 identity links via Fjelstul ID: 44; cross-domestic/UEFA stable ID linkage not fully audited.
- Tiers 275; Elite 28; Top Class 99; ratings are editorial drafts supported by appearance/goal/role data and awards, not independently audited individual match grades.
- FIFA technical presentation supports 19 teams using 4-4-2; selected 4-4-2 diamond variant to represent the CAM role. Best XI: 잔루이지 부폰, 잔루카 잠브로타, 파비오 칸나바로, 릴리앙 튀랑, 파비오 그로소, 안드레아 피를로, 파트리크 비에라, 미하엘 발락, 지네딘 지단, 미로슬라프 클로제, 티에리 앙리.
- User approval pending.

## Invariants
- participants: PASS
- groups: PASS
- groupMatches: PASS
- matches: PASS
- goals: PASS
- qualified: PASS
- uniqueIds: PASS
- uniqueExternalIds: PASS
- births: PASS
- clubs: PASS
- matchesAndMinutes: PASS
- ranks: PASS
- xi: PASS
- elite: PASS
- top: PASS
- pool: PASS

## Simulated DOM tests
- 2002 overview PASS
- 2002 groups PASS
- 2002 knockout PASS
- 2002 best PASS
- 2002 top PASS
- 2002 players PASS
- 2002 stats PASS
- 2006 overview PASS
- 2006 groups PASS
- 2006 knockout PASS
- 2006 best PASS
- 2006 top PASS
- 2006 players PASS
- 2006 stats PASS
- Player detail, filters and year switch passed. Real deployed browser and visual verification remain pending.

## Sources
- https://github.com/openfootball/worldcup.json/blob/master/2006/worldcup-full.json
- https://github.com/stiles/world-cup/blob/main/data/processed/2006/players.json
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/player_appearances.csv
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/players.csv
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/squads.csv
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/substitutions.csv
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/goals.csv
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/bookings.csv
- https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads
- https://www.fifadata.com/document/fwc/2006/PDF/FWC_2006_SquadLists.pdf
- https://en.wikipedia.org/wiki/2006_FIFA_World_Cup#All-star_team
- https://www.slideserve.com/Mia_John/2006-fifa-world-cup-germany
- https://www.rsssf.org/tables/2006full.html

## Commits
- Data: 68ff1d34437de84397b8504e138bac69c8ee29c0
- JS: 14b703fc6e0dce42420a21060102a8190b9020c0
- HTML: fcdc56c486c23914a085ae6778eacf8fc666ba1b
