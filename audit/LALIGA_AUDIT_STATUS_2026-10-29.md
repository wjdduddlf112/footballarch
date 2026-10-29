# La Liga standings & European participation — audit log

Date: 2026-10-29

## Scope and publication gate

26 domestic seasons, 1999-00 through 2024-25. This audit concerns standings, next-season European entrants, relegations, crest presentation and league table UI **only**. It does not approve any player candidate, tier or Best XI.

**Decision: DATA INTEGRITY GATE PASSED, OFFICIAL HISTORICAL COVERAGE + BROWSER RENDER GATES STILL OPEN. Do not mark the whole league fully audited or advance to the next league on this basis alone.**

## 1. Code/UI cleanup applied

- **Overview / League Table**: hide top explanatory subheading and warning/status badge, remove league-table verification banners, European qualification legend, standard relegation explanation, and redundant overview notes.
- Retain standings rows, competition tags, relegation/administrative indicators, candidate and player data, and existing page functionality.
- Non-La Liga seasons no longer display hard-coded `La Liga` in the standings-only overview heading.
- Changes made to `assets/app.js` and `index.html` asset cache identifiers. No league data overwritten.

## 2. Repeatable local checks — passed

Run: `node scripts/verify-laliga.mjs`

- Seasons: **26**
- Club-season table rows: **520**
- Distinct historical club IDs: **42**
- European entrant club-season rows: **199**
- Per-season: exact 20 clubs / ranks 1–20 / 38 games; wins/draws/losses and goals; points formula; win/loss and GF/GA totals; explicit participant lists; relegated club counts; club IDs.
- 1999-00 and 2000-01 standalone `qualifiers` and unified archive participant lists equal.
- All 42 club profiles have crest URLs; URL presence is **not** an image load test.
- Documented exception: **Racing Santander 2003-04 -1 disciplinary point**.
- Documented special cases: **2010-11 Levante 14th / Real Sociedad 15th** on head-to-head ordering; **2014-15 Elche administratively relegated from 13th, Eibar retained in 18th**.

## 3. Official external comparison — passed for completed sample

Independent complete 20-team rank, W/D/L, GF/GA, points comparisons against UEFA's **First Division Clubs in Europe** publications (which reproduce RFEF domestic competition summaries):

| Domestic season | Official source | Rows | Mismatches |
| --- | --- | ---: | ---: |
| 2014-15 | [UEFA 2015/16 directory](https://editorial.uefa.com/resources/0224-0f842ac9bf08-281f7e5c371c-1000/first_division_clubs_in_europe_2015_16.pdf) | 20 | 0 |
| 2022-23 | [UEFA 2023/24 directory](https://editorial.uefa.com/resources/0285-190255261841-9bf57d56cc0b-1000/uefa_first_division_clubs_2023-24.pdf) | 20 | 0 |
| 2023-24 | [UEFA 2024/25 directory](https://editorial.uefa.com/resources/0290-1bba67b46b87-fb69e389a4d7-1000/first_division_clubs_2024-25.pdf) | 20 | 0 |

Official 60-row snapshots are in `audit/laliga-uefa-reference.json`; the validation script reads them independently of the main dataset.

Other confirmed official evidence:
- [LaLiga historical league champions and runners-up](https://www.laliga.com/noticias/todos-los-campeones-de-la-historia-de-laliga) for historic leaders.
- [LaLiga's 2024-25 champion with 88 points](https://www.laliga.com/noticias/raphinha-mejor-jugador-de-laliga-ea-sports-2024-2025) for a later-season spot check.
- [UEFA 2023/24 UCL Spanish entrants](https://www.uefa.com/uefachampionsleague/news/0283-188394537406-c113ed18f2d0-1000--who-is-in-the-group-stage/) includes Sevilla via 2022-23 UEL title despite finishing 12th in La Liga.
- [UEFA 2011/12 directory](https://editorial.uefa.com/resources/01f4-0f8427457551-6576a9b12a0d-1000/2011_12_clubs_de_premiere_division_en_europe.pdf) is an additional historical source, but no 20-row comparison from this publication was completed in the present audit.

**Important**: The 60 rows above are official-reference cross-checks; 460 other rows have *not* been independently compared with an official 20-team final table in this pass. Other UEFA entrant seasons inherit prior source research, not a new 26-season UEFA competition-by-competition re-verification.

## 4. Open checks preventing full sign-off

1. Independently cross-check the **remaining 23 seasons (460 rows)** against official final-table sources; match all fields and official head-to-head rankings. Check special league cases in those years.
2. Individually verify next-season actual UEFA/Intertoto entry lists for the **remaining historical years** against UEFA's competition archives, including cup/winner/fair-play/titleholder rules. A JSON field named `verified` is insufficient evidence by itself.
3. Verify **42 crests render in a real browser**, use era-appropriate badges when verified, and check any broken URLs or backups.
4. Verify **all 26 deployed La Liga League Table / Overview pages** after the UI change, including navigation, club names, competition badges and relegation display. A static GitHub file inspection cannot establish the deployed browser result.
5. Preserve demonstration-only (2022-23) and unapproved player tiers as non-final even when the standings are audited.

## Next work boundary

**La Liga remains the active league. Premier League 1999-00 data created earlier is preserved but no further PL season expansion should occur until the La Liga official cross-reference and browser gates pass.** The next verification target is 1999-00 through 2013-14 and then 2015-16 through 2021-22 plus 2024-25, followed by end-to-end UI checks.
