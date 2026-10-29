# Ligue 1 (historically French Division 1) — work start / 2026-10-29

## Work unit and progress
- User-directed next league after the Bundesliga data checkpoint; Bundesliga remains subject to unresolved historical European participation, historical crests and live-browser audits.
- **First ingested season: 1999-00 only**. Published standalone season file: `data/ligue1-1999-00.json`. Remaining **26 seasons (2000-01 through 2025-26) not entered**; never call Ligue 1 completed.
- The competition was branded *Division 1* in 1999-00. Contemporary first division included **18 clubs and 34 matches per club**; do not assume 20 throughout this archive.
- 18 final rows match RSSSF and L'Équipe for rank, points, P/W/D/L, GF/GA. Arithmetic and season sums validated: 226 wins = 226 losses, 787 goals for = 787 against; 0 structural errors.
- **1999-00 champion: AS Monaco (65 points)**; relegated **AS Nancy-Lorraine, Le Havre AC, Montpellier HSC**.
- **Eight participating first-division clubs** in the next European season (2000-01): UCL Monaco, Paris Saint-Germain, Olympique Lyon; UEFA Cup Bordeaux and Nantes (Coupe de France route); 2000 Intertoto Lens, Sedan and Auxerre.
- **FC Gueugnon** also participated in the 2000-01 UEFA Cup via Coupe de la Ligue but played in the **second division** in 1999-00 and therefore does not enter the first-division candidate pool.
- Club crests: **0/18 externally source-linked** in this initial season file; names/abbreviations fallback supported by existing UI. Historical crest and actual browser loading not checked.
- No player nominees, positions, grades, Best XI or already published site CSS/JS/HTML modified.
- Actual Github Pages visual check of `?league=ligue1&season=1999-00&view=table` **NOT PERFORMED**; JSON and arithmetic checks do not constitute visual verification.

## Historical source links
- [RSSSF France 1999/2000 final table](https://www.rsssf.org/tablesf/fran00.html)
- [L'Équipe 1999-2000 classement](https://www.lequipe.fr/Football/d1/saison-1999-2000/page-classement-equipes/general)
- [French historical 1999-2000 European qualifications / cup routes](https://www.statfootballclubfrance.fr/championnat.php?id=63)
- [UEFA 2000-01 Champions League actual clubs](https://fr.uefa.com/uefachampionsleague/history/seasons/2000/clubs/)
- [2000-01 French UEFA Cup actual results](https://coeffarchive.com/country/france/2000-2001/)
- [RSSSF UEFA Intertoto history](https://www.rsssf.org/tablesi/intertoto.html)

## Future work
Proceed in season order: 2000-01 (18 clubs), 2001-02 (18 clubs), 2002-03 onward as applicable; check 2002 league expansion to 20 and 2023 league reduction to 18; 2025-26 participants into 2026-27. Verify actual next-season UEFA entrants, cup-titleholders, Intertoto, sanctions, promotion/relegation playoffs, clubs' source-backed crests, and actual browser display season by season.

## GitHub commit
- First season JSON: [f7448ab](https://github.com/wjdduddlf112/footballarch/commit/f7448ab0223af2ef3ac70ce605bbd569bc11ad2d)


## Full 27-season ingestion checkpoint (supersedes the first-season-only status above)

**Recorded 2026-10-29, user authorized continuation after Bundesliga.**

### Data scope and integrity

- Season JSONs: `data/ligue1-1999-00.json` through `data/ligue1-2025-26.json` (27 files).
- Format: **1999-00–2001-02: 3 × 18 teams, 34 fixtures each**; **2002-03–2022-23: 21 × 20 teams, normally 38 fixtures**; **2023-24–2025-26: 3 × 18 teams, 34 fixtures each**.
- **528 distinct final club-season rows**, **185 next-season European entrant-season links**. All 27 JSONs re-read through connected GitHub and subjected to fresh in-memory validation: **27/27 PASS**, exact ranks, nonduplicate clubs, W/D/L arithmetic, points deductions, goal differences, season W=L and GF=GA, European standings-vs-qualifiers parity, entrant in that league table. A matching repeatable audit script was added at `scripts/verify-ligue1.mjs`.
- Structural PASS does **not** constitute independent sign-off of all 528 RSSSF rows or 185 actual UEFA entrants. Historical source-by-source participant coverage is incomplete; `meta.europeanQualificationVerified` is set conservatively on seasons with additional checks and remains `false` in others. Some official final tables were independently spot-checked; fixture-derived rows from public openfootball and footballcsv data were reconciled with important RSSSF exceptions. Their raw calculation copies remain segregated under `audit/ligue1-match-derived-2005-2016.json` and `audit/ligue1-match-derived-2017-2025.json`.
- First season 1999-00 remains historically named Division 1; user-facing league grouping remains Ligue 1.

### Special historical cases reconciled in JSON

- 2000-01: Strasbourg French Cup winner qualified to UEFA Cup despite relegation; Toulouse administrative demotion; PSG among Intertoto entrants.
- 2001-02: Lorient French Cup winner qualified to UEFA Cup despite relegation; two automatic relegations during expansion to 20 clubs for 2002-03.
- 2002-03: Lens UEFA Fair Play route; Monaco original administrative relegation appeal reversed.
- 2004-05 to 2007-08: actual Intertoto entrants and cup winners; 2006-07 Toulouse/Nantes forfeit official final table W/D/L rather than unamended match-results feed; 2007-08 Rennes Intertoto and 16th PSG League Cup UEFA Cup.
- 2008-09: second-tier Guingamp French Cup winner excluded from 2008-09 Ligue 1 candidate pool even though they entered the following Europa League.
- 2011-12: Marseille in Europa League through League Cup despite tenth in the league.
- 2012-13: Ajaccio 2-point deduction, Bordeaux French Cup route, Saint-Étienne League Cup.
- 2013-14: Nantes 2-0 Bastia result adjudicated as forfeit for ineligible Abdoulaye Touré, with Nantes removed win/2 GF/3 points and Bastia credited win/2 fewer GA/3 points. Court: https://nantes.cour-administrative-appel.fr/decisions-de-justice/dernieres-decisions/affaires-fc-nantes-m.-toure ; club announcement https://www.fcnantes.com/articles/article2809.php?num=9525 . Guingamp UEFA Cup route from French Cup despite 16th finish.
- 2016-17 Lorient lost play-off to Troyes; Bastia financially administratively demoted after last-place finish.
- 2017-18 Toulouse survived promotion-relegation play-off; 2018-19 Dijon survived; 2020-21 Nantes survived; 2021-22 Saint-Étienne lost.
- 2019-20: early COVID termination with 279 matches, PPG-based official final order, Nice 5th ahead of Reims 6th on head-to-head; relegated Amiens and Toulouse, no play-off.
- 2021-22: OGC Nice and Lyon 1 point each deducted. Nantes qualified for 2022-23 UEL via French Cup from league ninth.
- 2022-23: four direct relegations due to 2023 18-team reduction; Toulouse 13th qualified for UEL via French Cup. Official [FFF 2022-23 competition report](https://media.fff.fr/uploads/documents/ra22-23_competitions-nationales.pdf).
- 2023-24: Montpellier -1 disciplinary point; Metz 16th above Lorient 17th on head-to-head despite equal pts/GD; Metz lost relegation play-off to Saint-Étienne. [RSSSF final table](https://www.rsssf.org/tablesf/fran2024.html).
- 2024-25: 16th Reims lost play-off to Metz and were relegated; UCL/UEL/UECL qualification lists checked via French sources.
- 2025-26: 16th Nice survived playoff vs Saint-Étienne; Nantes and Metz relegated. One Nantes–Toulouse match absent in OpenFootball feed treated as 0-0 adjudicated result in RSSSF final table, with one extra draw each. Lens Coupe de France title affects European berth cascade; actual 2026-27 entrants checked against UEFA and league sources.

### Crest asset coverage, design and browser gate

- Added `crestUrl` / `crestSource` for **473 of 528 club-season occurrences**, using **28 reference club IDs** linking to `crests.football-data.org`, while 55 occurrences retain initials fallback.
- All linked crests are marked **modern reference; historical era fidelity, club–image mapping and actual HTTP/browser loading NOT verified**. No guarantee that all source URLs are reachable or correct. Treat these as *provisional image links*, not completed visual-asset acceptance. As historical club logos can change, season-specific historical variants still require independent audit.
- Only `data/ligue1-*.json`, supporting audit files, and documentation/scripts changed. **No `index.html`, `assets/app.js`, stylesheet, existing club-page design, champion C, stripped champion icon, or player Best XI/rating code modified**.
- GitHub connector confirmed JSON writes. No headless/live browser was available. An attempt to open deployed Pages by static web fetch failed (not browser evidence). Therefore **actual GitHub Pages loading, image rendering, season navigation, champion C / Serie A stripped champion badges, mobile display remain NOT TESTED**. Never imply successful live UI.
- League status: **all 27 seasons ingested and all 528 JSON rows pass structural checks**; **historical UEFA/Intertoto list audits incomplete; image quality/loading not completed; deployed-browser gate not completed**. Accordingly *not declared fully approved* and player nomination/tiers remain user-gated.

### Source trail

- Historical full tables: `https://www.rsssf.org/tablesf/fran00.html` for 1999-00, through `https://www.rsssf.org/tablesf/fran2026.html`; L'Équipe and FFF reports for contested years.
- Historical match results: `footballcsv/cache.footballdata` repo `{season}/fr.1.csv` (through 2023-24), `openfootball/football.json` `{season}/fr.1.json` (2024-25, 2025-26). See per-season `meta.source`, `meta.relegation.notes`, `meta.europeanQualificationReview`, `qualifiers[].sources`.
- UEFA individual entrant lists: per-season URLs where available; retrospective entries flagged `review` unless independently confirmed.
