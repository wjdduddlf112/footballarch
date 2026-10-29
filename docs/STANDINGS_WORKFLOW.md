# Football Archive — domestic-league standings workflow

Updated: 2026-10-29. This document governs **standings and next-season European participation only**, not historical player tiers/Best XI.

## Working unit

- **One league at a time**, **one season at a time** within it.
- Order: La Liga → Premier League → Serie A → Bundesliga → Ligue 1.
- Within each league: **1999-00 through 2025-26 (27 complete seasons)**, in order. Historical Europe qualification refers to the next season (2026-27 for the final 2025-26 domestic season).
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


## 2025-26 extension (added 2026-10-29)

**Current active data scope: 1999-00–2025-26, 27 seasons in both La Liga and Premier League.** The 26-season historical figures below describe the previous snapshot and are retained as an audit trail.

- La Liga active archive: `data/laliga-standings-verified-1999-2026.json` — 27 seasons × 20 clubs, 540 table rows. Original `data/laliga-standings-verified-1999-2025.json` is a legacy 26-season snapshot and is no longer fetched by the website.
- La Liga 2025-26: Barcelona 94 points, Real Madrid 86; relegated Mallorca, Girona and Real Oviedo. 2026-27 UEFA entrants: UCL Barcelona, Real Madrid, Villarreal, Atlético de Madrid, Real Betis; UEL Real Sociedad (Copa del Rey winners), Celta; UECL Getafe. Sources: [RSSSF Spain 2026](https://rsssf.org/tabless/span2026.html), [LaLiga champions](https://www.laliga.com/noticias/hansi-flick-mejor-entrenador-de-laliga-ea-sports-2025-2026), [LaLiga relegation](https://www.laliga.com/noticias/equipos-que-bajan-a-segunda), UEFA competition phase lists from October 2026. Dedicated independent row references: `audit/laliga-rsssf-2025-26.json`.
- Premier League 2025-26: `data/premierleague-2025-26.json` — official 20-team final standings and 2026-27 UEFA participation. Arsenal champions 85 points; relegated West Ham, Burnley and Wolves. Five UCL: Arsenal, Man City, Man United, Aston Villa, Liverpool. Three UEL: Bournemouth, Sunderland, Crystal Palace (UECL titleholder despite finishing 15th). One UECL: Brighton.
- Premier League current cross-season European archive: `data/premierleague-europe-qualification-1999-2026.json` — 27 seasons, 204 entrant-season records. Previous `...1999-2025.json` preserved as a 26-season historical snapshot.
- Official PL source: [2025-26 final standings](https://www.premierleague.com/en/tables/premier-league/2025-26), [PL 2025-26 season summary](https://www.premierleague.com/en/news/4668605/everything-thats-been-decided-in-202526-league). UEFA 2026-27 UCL/UEL/UECL league phase entrant publications provide a separate check. Independent reference: `audit/premierleague-rsssf-2025.json`.
- Website: season list, masthead and season-count indicators extended to 27; source path updated to the 1999-2026 La Liga archive. No player nominations, positions, grades or Best XI were modified.
- Validation: `node scripts/verify-laliga.mjs` and `node scripts/verify-premierleague.mjs` now span 27 seasons.
- Remaining historical limitations **unchanged**: some earlier next-season UEFA qualification source checks and full 27-season live-browser and historical badge tests have not been independently completed. An image URL is not proof a crest renders.

## Serie A stage (added 2026-10-29)

- Serie A is now the third league with completed **1999-00–2025-26 preliminary standings data**. File: `data/seriea-standings-verified-1999-2026.json`.
- Exact league format: 18 teams and 34 matches in 1999-00 through 2003-04, then 20 teams and 38 matches in 2004-05 through 2025-26.
- 27 complete league tables, 530 club-season final rank rows, 195 next-season European entrant **curated draft** links. Historical UEFA entrants (26 earlier seasons) are not independently UEFA-signed-off and must not trigger player nomination approval until reviewed. 2025-26 next-season entrants checked against official UEFA league phase publications.
- 50 club identities including historical name changes. 43 externally sourced crest URLs; 7 still use abbreviation fallback. Visual asset period correctness and browser loading are not yet checked.
- Exceptions: Juventus stripped of 2004-05 title; 2005-06 Juventus administrative relegation and Calciopoli -30 penalties for other clubs; Bologna 2004-05 lost relegation playoff despite Parma being ranked below; older points deductions documented with actual values. 1999-00 Milan/Roma source typos reconciled against independent final tables.
- Three archived full-table reference files and source notes under `audit/seriea-rsssf-*.json`. Repeatable integrity script: `node scripts/verify-seriea.mjs`. Detail: `audit/SERIEA_AUDIT_STATUS_2026-10-29.md`.
- Homepage league emblem assets (La Liga / PL / Serie A / Bundesliga / Ligue 1) linked directly, not AI-generated stadium art. Original card design retained. Browser image loads are not yet verified.
- Follow-up league order: Bundesliga, then Ligue 1. Player candidate/grade work remains separate and user-gated.

## Bundesliga stage (2026-10-29)

- Bundesliga is the **fourth** domestic league with all 27 final standings seasons entered: `data/bundesliga-standings-verified-1999-2026.json` (1999-00–2025-26).
- 27 × 18 = **486** source-checked club-season rows, 40 historical club identities. Bundesliga was 18 teams / 34 matches for this entire period.
- Play-off and discipline exceptions: 1999-00 Eintracht Frankfurt -2, 2003-04 Kaiserslautern -3, 2008-09 onwards rank 16 play-off outcomes checked with subsequent division membership; latest 2025-26 Wolfsburg rank 16 lost play-off.
- 2025-26 → 2026-27 European entrants **officially confirmed** (4 UCL, 2 UEL, 1 UECL). Previous 26 seasons' UEFA entries are provisional and require full actual-entrant audit before being used for user-approved player candidate teams.
- Automatic verification: `node scripts/verify-bundesliga.mjs` (PASS: 27/486). Full audit: `audit/BUNDESLIGA_AUDIT_STATUS_2026-10-29.md`.
- Homepage 5-league insignia alignment adjusted with shared neutral plates. Official league champions display gold C; stripped Juventus 2004-05 and 2005-06 title decisions display red 박탈, 2004-05 has no champion and 2005-06 Inter retains C.
- Next domestic data stage is Ligue 1. No provisional player grades approved.

## Baseline on 2026-10-29 (prior 26-season snapshot)

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
