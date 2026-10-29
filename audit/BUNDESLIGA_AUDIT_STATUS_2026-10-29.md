# Bundesliga 1999-00 through 2025-26 — audit status

Recorded 2026-10-29.

## Scope
- **27 Bundesliga seasons**, each 18 teams / 34 matches, for **486 club-season final records**.
- 40 historical club identities with alias normalization (historic spelling/renaming recorded separately).
- **181 mapped European-club season entries** currently stored. **Only 2025-26 → 2026-27 entrants are fully checked against an official recent Bundesliga publication**. Earlier entrants are explicitly marked preliminary. DO NOT use provisional historic entrant lists for final historical player shortlisting until verified.
- **21 club crest URLs**, 19 club profiles using initials fallback pending valid sourced crests, actual image loading and era-correctness.

## Final league table validation
Three independent historical sources: `audit/bundesliga-rsssf-1999-2007.json`, `audit/bundesliga-rsssf-2008-2016.json`, `audit/bundesliga-rsssf-2017-2025.json`. Their original full season references are `https://rsssf.org/tablesd/duit00.html` etc. They provide official-format final standings and independent historical records, though RSSSF itself is not the Bundesliga organization.

Verified for each of 486 rows:
- Exact final source rank, club, 34 matches, W/D/L, GF/GA, points;
- Full league sums W=L, goals for=goals against; explicit known deductions included;
- 1999-00 Eintracht Frankfurt **-2 points**, 2003-04 1. FC Kaiserslautern **-3 points**;
- Before 2008-09, bottom three were relegated. Since 2008-09, ranks 17-18 relegated and rank 16 determined by promotion/relegation play-off and subsequent season Bundesliga participation, rather than automatically marked relegated;
- 2025-26 VfL Wolfsburg relegated in promotion/relegation play-off vs SC Paderborn; Heidenheim and St. Pauli 17th/18th also relegated.

Reproducible check: `node scripts/verify-bundesliga.mjs`. Result **PASS / 27 seasons / 486 rows / 0 arithmetic or cross-reference failures**.

## Most recent 2025-26 confirmed European entrants

Official source: [Bundesliga 2026-27 German participants](https://www.bundesliga.com/en/bundesliga/news/2026-27-champions-league-europa-draw-fixtures-results-bayern-dortmund-38801/) and [Bundesliga league allocation](https://www.bundesliga.com/en/bundesliga/news/european-qualification-2025-26-permutations-bayern-dortmund-leverkusen-leipzig-stuttgart-35915).

- Champions League (4): FC Bayern München, Borussia Dortmund, RB Leipzig, VfB Stuttgart.
- Europa League (2): TSG Hoffenheim, Bayer 04 Leverkusen.
- Conference League (1): SC Freiburg.
- 2025-26 champions: FC Bayern München, **89 points**.
- 2025-26 DFB-Pokal winner: FC Bayern München (official [DFB winners archive](https://www.dfb.de/maenner/wettbewerbe/dfb-pokal/statistik/bisherige-sieger)); the cup was won by an already UCL-qualified team.

## Pending German UEFA audits: historical seasons
- **1999-00–2007-08**: original source labels for CL, UEFA Cup and Intertoto transcribed, plus corrected 2001-02 UCL club list using official [UEFA history 2002-03](https://www.uefa.com/uefachampionsleague/history/seasons/2002/clubs/), etc. These still do not necessarily include every cup, Intertoto, titleholder, fair play or exceptional entrant.
- **2008-09–2024-25**: entries inferred from contemporary league placement, cup winners and changing European slot structures. These are **not yet certified as actual UEFA/Intertoto participation** and might omit licensing, qualifying-round elimination or special entries. They should be independently audited against UEFA competition histories before being marked verified or applied to user-approved player shortlists.
- The website preserves its minimal archival layout with `NEXT SEASON` badges mapped from the source record; backend `europeanParticipationStatus` accurately exposes whether a season is provisional or verified.
- No player positions, nominations, approved grades or Best XI changed.

## UI & champion badges
- Five domestic league home cards display native league logo sources in a consistent, neutral light backing plate; prior overlapping monogram background removed for cards with badges. Does not alter European competition cards.
- Official champions receive compact gold **C** in League Table and Overview, including Bundesliga champions.
- Juventus 2004-05 and 2005-06 historical title sanctions in Serie A are rendered distinctly with **박탈**. 2004-05 officially vacated (no C); 2005-06 Inter champion (C), Juventus stripped.
- Programmatic render tests pass for Bundesliga 1999-00, 2008-09, 2025-26, both views and La Liga/PL/Serie A regressions. This is **not** an in-browser image/network/render test.

## Open completion gates
1. Historical UEFA participations: source-by-source for 1999-00 through 2024-25.
2. 19 missing Bundesliga club crests, plus other linked crest availability and historical versions.
3. Live GitHub Pages loading, mobile typography and badge screenshots in actual browser.
4. Player evaluations: only after user review/approval.

Data file: `data/bundesliga-standings-verified-1999-2026.json`
Alias profiles: `data/bundesliga-clubs-1999-2026.json`


## Continuation audit — 2026-10-29 (committed)

**Source material reused:** the three existing `audit/bundesliga-rsssf-1999-2007.json`, `2008-2016.json`, and `2017-2025.json` full-table captures, plus `data/bundesliga-clubs-1999-2026.json` aliases; none were regenerated.

### Actual next-season European participant corrections

- **1999-00:** add VfB Stuttgart (2000 Intertoto).
- **2001-02:** add Hertha BSC, Schalke 04 and Werder Bremen (2002-03 UEFA Cup); Kaiserslautern, Stuttgart and 1860 München (2002 Intertoto).
- **2002-03:** add Bremen, Schalke and Wolfsburg (2003 Intertoto).
- **2003-04:** add Borussia Dortmund, Schalke, HSV and Wolfsburg (2004 Intertoto).
- **2004-05:** add Mainz 05 (2005-06 UEFA Cup through UEFA Fair Play).
- **2007-08:** add Hertha BSC (2008-09 UEFA Cup, Fair Play) and VfB Stuttgart (2008 Intertoto).
- **2012-13:** replace Hamburg SV (not qualified) with VfB Stuttgart (DFB-Pokal runner-up, 2013-14 Europa League).
- **2020-21:** correct Union Berlin from UEL to inaugural 2021-22 UECL.
- **2021-22:** add Eintracht Frankfurt to 2022-23 UCL (2021-22 Europa League titleholder, finishing 11th in the domestic league).

21 club-season field corrections across 9 seasons; historical mapped European entries increase **181 → 201**. Source references and per-club route notes attached to the corresponding season records. Evidence: [RSSSF actual German European Cup participants](https://www.rsssf.org/tablesd/duit-ec85.html), [RSSSF Intertoto competition records](https://www.rsssf.org/tablesi/intertoto.html), individual RSSSF domestic season pages and UEFA titleholder records. These are targeted evidence-based corrections, not an unconditional certification of every 1999-00 to 2024-25 entrant list. The **26 historical years remain flagged for full season-by-season review**, whereas 2025-26 retains its separate official confirmation.

### Clubs and crests

16 formerly missing club crest image links added from documented Wikimedia Commons file pages, with explicit `crestSource` and `crestHistoricalStatus`. **37/40 profiles now have a source-linked crest URL**. Remaining without linked crest: **SpVgg Unterhaching, Eintracht Braunschweig, FC Ingolstadt 04** (initials fallback intact). Some new logos are modern versions inappropriate to earlier Bundesliga participation (notably Rostock, Duisburg, Bielefeld, Hannover, Aachen, Fürth and Paderborn); do not mark their period-specific crest audit as passed. Wikimedia redirect URLs and previously linked crest URLs still need actual browser/network image verification.

### Fresh data validation (post-change)

- GitHub connector read the final archive, three stored RSSSF full-table references and club alias list; independent in-memory JS parity check (matching `verify-bundesliga.mjs` integrity criteria) returned **PASS / 27 seasons / 486 rows / 0 errors**, 201 mapped European records.
- **18 promotion-relegation play-off outcomes** in 2008-09 through 2025-26 checked against next season's source-listed first-division membership: **14 retained / 4 relegated** (2025-26 Wolfsburg handled by recorded special outcome).
- Verified rank 1-18, W/D/L, GF/GA, points, points deductions, league totals, club IDs, Europe map/standing row parity, automatic relegations.
- **Not run as a Node CLI:** `node scripts/verify-bundesliga.mjs` (connector-side equivalent check used); this distinction must be preserved.

### Commit / deployment / UI gates

- Data correction commit: [a43aa1b](https://github.com/wjdduddlf112/footballarch/commit/a43aa1b1afc2fb3e1d6aee5323b7e9b4a47761c6)
- Crest reference commit: [a85cb54](https://github.com/wjdduddlf112/footballarch/commit/a85cb54ecf10777ebea01a3ab59ee5d0ff66c1e9)
- No changes to `index.html`, `assets/app.js`, CSS, player evaluation, champion C badges, or stripped-title badges.
- **Data integrity gate PASSED** for 27×18 rows and promotion-relegation membership; historical UEFA full actual-entrant gate NOT COMPLETE; crest-URL coverage 37/40 but logo display/period correctness NOT COMPLETE.
- **Actual GitHub Pages browser rendering gate NOT TESTED**: no deployed-browser screenshot, client network response, fallback, mobile or badge inspection performed. Existing programmatic champion-badge tests are historical only, not a new live screen review.
- Bundesliga therefore **not declared fully completed**; priority now moves to Ligue 1 on user instruction with these open gates documented.

