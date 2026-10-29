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
