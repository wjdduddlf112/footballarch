# Premier League 1999-00 through 2024-25 — archive data audit

Date: 2026-10-29

## Scope
Exactly 26 PL seasons, 1999-00 to 2024-25. Historical league tables and actual entry into the **following** European campaign are in `data/premierleague-YYYY-YY.json` for every season. Player candidates, provisional tiers and Best XI are not changed or approved.

## Data result

| Data set | Recorded | Local consistency check |
| --- | ---: | --- |
| Final league tables | 26 seasons | PASS |
| Club-season standings rows | 520 | PASS |
| Independent RSSSF 20-team final table references | 520 | 520/520 equal in rank, P, W, D, L, GF, GA, points |
| Subsequent European entrant club-season records | 195 | 195/195 mapped to that season's PL clubs and same season `NEXT SEASON` labels |
| Missing crest URLs across all included season club profiles | 0 | URL presence, **not** browser-load validation |
| Known disciplinary deductions | 3 club-season cases | Portsmouth 2009-10 -9; Everton 2023-24 -8; Nottingham Forest 2023-24 -4 |

Reference source copies:
- `audit/premierleague-rsssf-1999-2011.json`: 260 independent RSSSF rows
- `audit/premierleague-rsssf-2012-2024.json`: 260 independent RSSSF rows
- `data/premierleague-europe-qualification-1999-2025.json`: 26 season-by-season European entrant lists, individual sources and exceptions
- `scripts/premierleague-match-builder.js`: reproducible match-level table constructor from openfootball/england, 2000-01 to 2024-25
- `scripts/verify-premierleague.mjs`: repeatable check, run `node scripts/verify-premierleague.mjs` from repository root

## European entrant audit
- Early period includes UEFA Cup (through 2008-09 league season), UEFA Intertoto Cup (last held 2008), fair-play teams, cup winners and finalists.
- 2004-05: Liverpool included in 2005-06 UCL as defending European champion, although fifth in PL.
- 2010-11: Birmingham City (relegated; League Cup winner), Stoke City (FA Cup finalist) and Fulham (fair play) included in 2011-12 UEL.
- 2011-12: Chelsea qualified for UCL as previous-season UCL champion and sixth-placed team. Tottenham fourth allocated UEL.
- 2012-13: FA Cup-winning Wigan included even after league relegation.
- 2016-17: Manchester United UEL winners included in UCL despite finishing sixth.
- 2022-23: West Ham UEFA Conference League winners included in UEL despite finishing 14th.
- 2024-25: six EPL-associated entrants entered 2025-26 Champions League (Tottenham UEL winner despite finishing 17th). Crystal Palace was demoted from 2025-26 UEL to UECL by UEFA multi-club ownership decision; Forest replaced Palace in UEL.
- 14 consecutive UCL entrant sets, 2012-13 through 2025-26 competition seasons, independently match openfootball/champions-league archived English participants (14/14).
- 2021-22 through 2024-25 Europa League/Conference English participants match archived competition entry sets. Beware teams may appear in both competition season files after transfer between competitions; initial entry is categorized once.

## Important distinction
- RSSSF is an **independent historical statistical archive**, not the Premier League's official publisher. 2024-25 table also spot-checked against the official Premier League site: https://www.premierleague.com/en/tables/premier-league/2024-25/matchweek-38
- Actual European entrant sets have sources and are entered into JSON; individual historic UEFA competition-by-competition source checks for some older seasons remain open. They are kept `status: review` and `meta.europeanQualificationVerified: false` while pending final external verification. This **does not** mean no entrant data exists. It means not every era has received full independent UEFA sign-off.
- All PL crests have sourced image URLs; many are current-era reference logos. Correct historical badge variant and successful browser image loading are **not** yet certified. The incorrect Bolton Wanderers crest ID 68 (Norwich City) was deliberately removed and replaced with a club-specific source.
- Live GitHub Pages browser rendering and 26-season click/navigation review have not been completed. JSON and JavaScript inspection is not a browser UI test.
- The site uses minimal presentation: table data, European competition badges only for actual entrants, relegation markers; no `미진출` explanations.
- No new site or UI redesign. No changes to existing player assessment workflow.

## Key authoritative references
- Official Premier League 2024-25 final standings: https://www.premierleague.com/en/tables/premier-league/2024-25/matchweek-38
- Official PL Crystal Palace 2025 UEFA competition appeal outcome: https://www.premierleague.com/en/news/4373298/crystal-palaces-appeal-to-play-in-europa-league-rejected-by-cas
- UEFA Crystal Palace multi-club ruling: https://www.uefa.com/news-media/news/029b-1e361573fefc-94aa466245fc-1000--the-cfcb-first-chamber-renders-decision-on-crystal-palace-an/
- UEFA 2001 Intertoto Newcastle allocation: https://www.uefa.com/newsfiles/3387.pdf
- RSSSF 2002 Intertoto Fulham and Aston Villa: https://www.rsssf.org/tablesu/uic02.html

## Handoff
The 1999-00 through 2024-25 PL **data entry** is complete. The remaining gates are historical UEFA exception review on selected years, club crest render/era audit, all-season live browser display validation, and eventual user approval of any separate player tier work.
