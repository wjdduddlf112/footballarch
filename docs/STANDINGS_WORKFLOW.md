# Football Archive — domestic-league standings workflow

Updated: 2026-10-29. This document governs **standings and next-season European participation only**, not historical player tiers/Best XI.

## Working unit

- **One league at a time**, **one season at a time** within it.
- Order: La Liga → Premier League → Serie A → Bundesliga → Ligue 1.
- Within each league: 1999-00 through 2024-25, in order.
- In general, finish one league before the next. A user-directed change of league priority is an explicit exception; record open audits rather than falsely claiming full approval.
- Commit small, independently checkable data changes. Keep source citations and documented exceptions.
- Never recreate the website or change `index.html`, `assets/app.js`, or CSS as part of routine data ingestion.

## Required gates for each season

1. **Table**: exactly 20 unique clubs with ranks 1–20, complete played/wins/draws/losses/goals/points; independent historical source. Account for disciplinary point deductions and administrative demotion separately.
2. **Actual next-season UEFA entry**: identify participants in the following European season, not just domestic league rank. Include Champions League, UEFA Cup/Europa League, Conference League, Intertoto (through 2008), domestic cup slots, fair-play entries, titleholders, exclusions and replacements. Do not conflate a prospective slot with actual participation.
3. **Source-backed club assets**: all 20 crests present, with reference/source links and period-correct verification separately noted. A plausible logo URL alone does not pass the image-display gate.
4. **JSON parity**: season-specific `qualifiers` (if present), unified `seasons[season].europeanParticipation`, and the standings table all describe the same clubs and competition; missing entrant means **no entry** only where source verification is complete.
5. **Browser display**: directly inspect that season's deployed `?league=...&season=...&view=table` page, every European label, non-entry status, relegation tag, icon display and season navigation. JSON existence is not evidence of browser success.
6. **Completion log**: record source date/references, exceptions, JSON commit SHA and display-review outcome. Declare a league complete only after all gates for all seasons pass.

## Baseline on 2026-10-29

### La Liga
- Unified archive: `data/laliga-standings-verified-1999-2025.json`, 26 seasons × 20 clubs (520 rows), 42 distinct club identities.
- 26 seasons now contain explicit `europeanParticipation` entrant maps (1999-00 and 2000-01 merged from previously standalone data).
- **1999-00**: 10 entrants checked against Spanish season and UEFA history references; 4 UCL, 4 UEFA Cup, 2 Intertoto. Dedicated season JSON and archive entrant list synchronized.
- **2000-01**: 7 entrants checked against contemporary season/competition history; 4 UCL, 3 UEFA Cup. Zaragoza entered via Copa del Rey despite 17th league finish; withdrawn Intertoto slots are not counted.
- **2001-02 through 2024-25**: 24 years were previously marked `verified_next_season_uefa_entrant_list` in the repository. The label reflects prior research; these 24 seasons have **not** been source-by-source independently re-audited during the present 2026-10-29 integration.
- Basic archive-wide integrity rechecked on 2026-10-29: 26 × 20 rows, unique club IDs/ranks, each 38 matches, wins equal losses and goals scored equal conceded across a season, point/difference formulas. **No unexpected structural failures**. The 2003-04 Racing Santander one-point deduction is an identified exception.
- **Outstanding**: season-by-season web-rendered UI audit, 42 club crest loading/period matching, and targeted independent spot checks for 2001-02 to 2024-25. Never call the whole league completed until these pass.

### Other domestic leagues
- **Premier League 1999-00 through 2024-25**: 26 season JSON files now contain 520 club-season rows, 195 next-season European entrant records, and source-linked team crest URLs. All 520 numeric records and ranks independently match RSSSF; all 26 qualifier lists match their season table labels. Correct point deductions: Portsmouth 2009-10 (-9), Everton 2023-24 (-8), Nottingham Forest 2023-24 (-4).
- Premier League historical European lists are documented in `data/premierleague-europe-qualification-1999-2025.json`; historical exceptions include UCL/UEL titleholders, FA/League Cup, Intertoto, fair play, and UEFA licensing decisions. Individual full UEFA competition-participant re-audits remain open for some older seasons; those qualifier flags stay `review`.
- Full Premier League audit log: `audit/PREMIERLEAGUE_AUDIT_STATUS_2026-10-29.md`. JSON presence/logic checks are not live browser image/display proof.
- The user explicitly approved beginning PL before completing La Liga's remaining browser/crest checks; those open La Liga checks are preserved. No changes to player evaluation status.

## Sources used for La Liga 1999-00 and 2000-01 special-year reconciliation
- https://www.soccer-spain.com/ssdocs/history/1999-2000.php
- https://www.rsssf.org/tabless/span00.html
- https://www.futbol-regional.es/competicion.php?com=10068
- https://www.rsssf.org/miscellaneous/uefa.html
- https://www.rsssf.org/tabless/span01.html
- https://coeffarchive.com/country/spain/2001-2002/
- https://www.realzaragoza.com/la-gesta-ante-los-galacticos

## Separate player workflow
Player nomination/position/tiers/ranks are a different, user-reviewed workflow. Do not approve provisional 1999-00 and 2000-01 players or sample 2022-23 tiers by adding or verifying league standings. Do not advance a player-position stage without the user's instruction.
