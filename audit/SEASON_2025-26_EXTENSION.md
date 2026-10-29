# Football Archive: 2025-26 season addition

Recorded: 2026-10-29. **Effective scope: 1999-00 through 2025-26, 27 complete domestic seasons.**

## La Liga 2025-26

- Final table: 20 clubs, 38 matches each. Champion Barcelona: 94 points. Relegated Mallorca (18th), Girona (19th), Real Oviedo (20th).
- Next season 2026-27 **actual UEFA entrants**:
  - Champions League: Barcelona, Real Madrid, Villarreal, Atlético de Madrid, Real Betis.
  - Europa League: Real Sociedad (Copa del Rey winners), RC Celta.
  - Conference League: Getafe.
- Published in `data/laliga-standings-verified-1999-2026.json`, retaining the first 26 season records.
- Historical reference `audit/laliga-rsssf-2025-26.json`.
- Sources: https://rsssf.org/tabless/span2026.html ; https://www.laliga.com/noticias/hansi-flick-mejor-entrenador-de-laliga-ea-sports-2025-2026 ; https://www.laliga.com/noticias/equipos-que-bajan-a-segunda .

## Premier League 2025-26

- Final table: 20 clubs, 38 matches each. Champion Arsenal: 85 points. Relegated West Ham (18th), Burnley (19th), Wolves (20th).
- Next season 2026-27 **actual UEFA entrants**:
  - Champions League: Arsenal, Manchester City, Manchester United, Aston Villa, Liverpool.
  - Europa League: Bournemouth, Sunderland, Crystal Palace (2025-26 Conference League winners; 15th in Premier League).
  - Conference League: Brighton & Hove Albion.
- Published in `data/premierleague-2025-26.json`, and the extended participant summary `data/premierleague-europe-qualification-1999-2026.json`.
- Official source: https://www.premierleague.com/en/tables/premier-league/2025-26 ; https://www.premierleague.com/en/news/4668605/everything-thats-been-decided-in-202526-league
- Independent reference `audit/premierleague-rsssf-2025.json` records the same 20 final table rows.

## UEFA next-season entrant cross-checks

- Champions League 2026-27: https://www.uefa.com/uefachampionsleague/news/02a6-20d57cfcd03e-407c22a7f465-1000--2026-27-champions-league-teams-draws-format-final/
- Europa League 2026-27: https://www.uefa.com/uefaeuropaleague/news/02a8-217364fd42e6-7e49801d8daf-1000--2026-27-europa-league-meet-the-league-phase-teams/
- Conference League 2026-27: https://www.uefa.com/uefaconferenceleague/news/02a8-21737138dae7-37bfb18d9aa7-1000--2026-27-conference-league-meet-the-teams/

## Display and verification

- Website season selector increased 26 → 27; masthead date range 1999–2026; La Liga data URL points to the new 27-season archive.
- Programmatic rendering tests (without a live browser) passed for 2025-26 League Table and Overview in both leagues, plus 2024-25 regression cases. Each new table shows 20 rows and expected UEFA badges/relegation; both overview screens show the correct number of European clubs.
- Both 2025-26 final tables match 20 independent source row references, with the official Premier League table and Spanish federation/LaLiga winner/relegation facts cross-checked.
- Updated `scripts/verify-laliga.mjs` and `scripts/verify-premierleague.mjs` to 27 seasons / 540 rows.
- **Still outstanding:** actual deployed GitHub Pages browser and crest image load checks; selected historical (pre-2025-26) UEFA qualification source audits. This addition is **not** a player nomination, tier approval or Best XI.
- Legacy 26-season archival data files remain in the repository for compatibility, but the active website and verification scripts read the extended 27-season versions.
