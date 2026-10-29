# Serie A — historical league table audit (1999-00 through 2025-26)

Recorded: 2026-10-29

## Scope and publication

- **27 domestic seasons** from 1999-00 to 2025-26.
- **530 club-season standings rows** (5 seasons × 18 clubs + 22 seasons × 20 clubs).
- **195 curated subsequent-season European participant records**, including cup finalists, licensing substitutions, and Intertoto (until 2008).
- 50 distinct clubs; 43 club crest image URLs sourced, **7 pending** (Cesena, Carpi, Como, Messina, Piacenza, Reggina, Treviso). The website uses abbreviation fallback for unlinked clubs; existing URLs and original period emblems still need real-browser review.
- Source: [RSSSF Italy](https://www.rsssf.org/tablesi/), 27 final-table source documents copied to three archive references:
  - `audit/seriea-rsssf-1999-2007.json` (1999-00–2007-08, 170 rows);
  - `audit/seriea-rsssf-2008-2016.json` (2008-09–2016-17, 180 rows);
  - `audit/seriea-rsssf-2017-2025.json` (2017-18–2025-26, 180 rows).
- Official Italian champion history: [Lega Serie A Albo d'oro](https://www.legaseriea.it/serie-a/albo).

## Repository and site

- New unified file `data/seriea-standings-verified-1999-2026.json`.
- Existing `assets/app.js` now loads it for Serie A; supports 18-team / 34-match historical years; renders the normal Overview / League Table components without adding explanatory banners or “미진출” placeholders.
- No Best XI, candidate nominations, positional grades, or La Liga / Premier League player assessment altered.
- The homepage has its original five competition cards and linked league emblems (rather than generated concept imagery). Logo loading in live browsers has not been tested.
- Repeatable integrity script: `node scripts/verify-seriea.mjs`.
- JS-based rendering checks passed for 1999-00 (18 rows/9 European clubs), 2004-05 (20), 2005-06 (20), 2022-23 (20), 2025-26 (20/7 European clubs), and regression checks for La Liga / PL 2025-26.

## Integrity results

- 27 seasons / 530 rows / 195 European entries: **PASS**, structural errors 0.
- Rank sequence and club identity uniqueness for every domestic season: **PASS**.
- 34 or 38 matches, W/D/L, goals for/against, league totals and published points: **PASS**.
- Next-season European entries are attached to the same season's domestic club IDs and tables: **PASS**.
- Relegation counts and exceptions: **PASS**.

## Historical special cases

- **1999-00**: RSSSF source row typo corrected: Milan 61 points (16 wins and 13 draws), Roma 12 draws (not 10); [independent final table](https://www.laseriea.org/serie-a-1999-2000/classifica/) and Roma historical record support corrections.
- **2003-04**: Perugia 15th relegated via the play-off to allow expansion from 18 to 20 clubs next year, alongside Modena, Empoli and Ancona.
- **2004-05**: Bologna relegated from 17th via play-off against 18th Parma, who stayed up. Juventus originally placed first but were subsequently stripped of Scudetto; title was left vacant. [UEFA Parma/Bologna playoff](https://www.uefa.com/news-media/news/01aa-0f8ea5b76d24-d8fd09a714ca-1000--parma-prevail-in-relegation-play-off/).
- **2005-06**: Calciopoli administrative demotion of Juventus to twentieth and Serie B, with 91 match-earned points preserved. Inter awarded the title; Milan, Fiorentina and Lazio had -30 penalties. 
- **2006-07**: penalties affecting Lazio, Milan, Fiorentina, Reggina, Siena.
- **2010-11**: Bologna -3; **2011-12** Atalanta -6; **2012-13** Sampdoria -1, Atalanta -2, Torino -1, Siena -6; **2014-15** Parma -7; **2018-19** Chievo -3; **2022-23** Juventus -10.
- **2013-14** Parma UEFA licensing exclusion, Torino replaced.
- **2014-15** Genoa UEFA licensing exclusion, Sampdoria replaced.
- **2018-19** Milan UEFA exclusion, Torino replaced.
- **2022-23** Juventus UEFA suspension, Fiorentina entered Conference League.
- The 2000–2008 Italian Intertoto participation references include [RSSSF Intertoto histories](https://www.rsssf.org/tablesu/) and [Italian European cup records](https://www.rsssf.org/tablesi/ital-ec.html).

## Most recent full source-backed European entry

**2025-26 season → 2026-27 UEFA competition** (confirmed with UEFA league-phase lists)

- Champions League: Inter, Napoli, Roma, Como.
- Europa League: Milan, Juventus.
- Conference League: Atalanta.

Official:
- https://www.uefa.com/uefachampionsleague/news/02a8-2171a88881a0-c70193b972c6-1000--meet-the-2026-27-champions-league-league-phase-teams/
- https://www.uefa.com/uefaeuropaleague/news/02a8-217364fd42e6-7e49801d8daf-1000--2026-27-europa-league-meet-the-league-phase-teams/
- https://www.uefa.com/uefaconferenceleague/news/02a8-21737138dae7-37bfb18d9aa7-1000--2026-27-conference-league-meet-the-teams/

## Remaining sign-off gates

**The 27-season Serie A final TABLES are compiled and independently validated, but the entire league is not yet certified fully complete.**

1. For **1999-00 through 2024-25**, next-season European entrants are curated source-based drafts (`europeanParticipationStatus=curated_pending_full_uefa_source_audit`). Individual entries still need UEFA competition-by-competition participant verification before setting verified flags. Player shortlisting should rely only on verified team lists.
2. Seven historical club crests still need direct image URLs; all other emblem URLs and historical-period variants need real-browser checking.
3. Deployed GitHub Pages 27-season browser navigation and asset loading not independently tested. Rendering tests are code-level, not screenshot/browser interaction confirmation.
4. Specific treatment of 2004-05 and 2005-06 historical title sanctions is in the data, not additional visual explanatory copy.

The separate player-ranking workflow remains user-controlled: no position or nomination stage advanced.
