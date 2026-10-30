# Premier League 1999-00 — fresh player-research checkpoint
Date: 2026-10-30  
State: **DRAFT / incomplete season**. Independent source-led work; not an endorsement of previous candidate imports or their 15 graded Manchester United players.

## Target clubs — actual 2000-01 European entrants
- UEFA Champions League: Manchester United, Arsenal, Leeds United.
- UEFA Cup: Liverpool, Chelsea, Leicester City.
- 2000 Intertoto Cup: Aston Villa, Bradford City.
- Eligibility based on real following-season competition participation, not simply league place.
- Historical cross-check: [UEFA 2000-01 UCL](https://www.uefa.com/uefachampionsleague/history/seasons/2000/clubs/), [UEFA 2000-01 UEFA Cup](https://www.uefa.com/uefaeuropaleague/history/seasons/2000/clubs/), [RSSSF 2000 Intertoto](https://www.rsssf.org/tablesu/uic00.html), [RSSSF England 1999-00](https://www.rsssf.org/tablese/eng00.html).
- The existing data file still has `meta.europeanQualificationVerified:false`; this independently supported eight-club subset does not change the status of other years.

## Seasonal formation evidence (sample match lineups; majority across the whole season not yet proven)
| Club | Working 1999-00 shape | Contemporary lineup evidence | Remaining question |
|---|---|---|---|
| Manchester United | 4-4-2 | [Guardian, 2000-04-05](https://www.theguardian.com/football/2000/apr/05/championsleague.sport2); [West Ham match, 2000-04-01](https://www.mufcinfo.com/manupag/match_data/match_sql.php?my_match_date=2000-04-01) | Some rotation midfielders also played full-back or on either flank |
| Arsenal | 4-4-2 | [Guardian, 1999-11-26](https://www.theguardian.com/football/1999/nov/26/newsstory.sport) | Kanu/Henry/Bergkamp striker-slot prioritization; full-season left-back split |
| Leeds United | 4-4-2 with occasional back-three variants | [Everton v Leeds, 1999-10-24](https://www.evertonresults.com/match24101999.html); [season team sheets](https://leedsunitedteamsheet.altervista.org/2000s/199900.htm) | In some matches Kewell was a wide player, other matches near attack; actual majority needed |
| Liverpool | 4-4-2 | [Liverpool Daily Post match report, 1999](https://lfchistory.net/articles/1520) | Some full-back and attacking roles vary by game; Heskey late-season arrival |
| Chelsea | 4-4-2 plus some narrower variations | [FA Cup semifinal v Newcastle, April 2000](https://www.nufc.com/html/1999-00html/chelsea-semi.html); [1999-00 match system log](https://www.transfermarkt.com/chelsea-fc/spielplan/verein/631/saison_id/1999/plus/1) | Wide-midfield labels for actual narrow midfield structure |
| Leicester City | 3-5-2 | [Independent lineup v Liverpool, 1999](https://www.the-independent.com/sport/football-o-neill-shows-his-worth-to-leicester-1120619.html) | Wing-back position mapping. Third centre-back not automatically nominated as third regular in two-plus-one rule |
| Aston Villa | 3-5-2 | [Everton v Aston Villa, 2000-02-20](https://www.evertonresults.com/match20022000.html); [Villa v Everton, 1999](https://www.toffeeweb.com/season/99-00/reports/aston-villa_a.htm) | Carbone/Merson withdrawal CAM versus forward; central three-back treatment |
| Bradford City | 4-4-2 | [2000 Intertoto Bradford v RKC](https://www.theguardian.com/football/2000/jul/17/newsstory.bradford) | July 2000 is after evaluation season, so verify with 1999-00 league lineup before assigning certified season majority |

The league Best XI **working historical formation is 4-4-2**, pending complete position nomination. This is not a league-wide frequency audit, merely a reasonable convention supported by contemporary lineups.

## Newly researched and recorded goalkeeper candidates
Data: [1999-00 GK fresh draft](./premierleague-1999-00-gk-fresh-draft.json)

- 8 teams / **15 players**; 8 starter, 7 backup (Leeds: one goalkeeper played all 38 PL matches).
- 15/15 current-year league appearances and starts supported by season-specific FBref club goalkeeper statistics.
- 15/15 dates of birth supported by FootballSquads contemporary-season roster pages, with the Bradford Matt Clarke DOB additionally corroborated by Soccerbase.
- The 1997-98 and 1998-99 **individual full-performance audit is not complete**; all 15 grades/ranks are provisional quantitative-plus-qualitative suggestions, not approved complete three-year comparisons.
- The old imported main audit recorded removals for Liverpool **Brad Friedel** (1999-00 PL 2 starts), Chelsea **Carlo Cudicini** (1 start), Aston Villa **Peter Enckelman** (9 starts). Those removals **contradict** newly checked season-specific goalkeeper tables; fresh GK file includes all three. Old `main` candidate JSON was deliberately not used as the selection source.
- Leicester Arphexad (9 starts), Bradford Walsh (11) included as real rotation. Bradford Davison (5 starts) and Southall (1 start) excluded due to two-goalkeeper cap. Manchester United Massimo Taibi (4 starts) excluded due to the same cap.

## Independent GK statistics and squad source links
- [Man Utd PL goalkeeping](https://fbref.com/en/squads/19538871/1999-2000/Manchester-United-Stats) / [1999-00 roster/DOB](https://footballsquads.co.uk/eng/1999-2000/faprem/manutd.htm)
- [Arsenal](https://fbref.com/en/squads/18bb7c10/1999-2000/Arsenal-Stats) / [roster](https://www.footballsquads.co.uk/eng/1999-2000/faprem/arsenal.htm)
- [Leeds](https://fbref.com/en/squads/5bfb9659/1999-2000/Leeds-United-Stats) / [roster](https://www.footballsquads.co.uk/eng/1999-2000/faprem/leeds.htm)
- [Liverpool](https://fbref.com/en/squads/822bd0ba/1999-2000/Liverpool-Stats) / [roster](https://footballsquads.co.uk/eng/1999-2000/faprem/liverpool.htm)
- [Chelsea](https://fbref.com/en/squads/cff3d9bb/1999-2000/Chelsea-Stats) / [roster](https://www.footballsquads.co.uk/eng/1999-2000/faprem/chelsea.htm)
- [Leicester](https://fbref.com/en/squads/a2d435b3/1999-2000/Leicester-City-Stats) / [roster](https://www.footballsquads.co.uk/eng/1999-2000/faprem/leicester.htm)
- [Aston Villa](https://fbref.com/en/squads/8602292d/1999-2000/Aston-Villa-Stats) / [roster](https://www.footballsquads.co.uk/eng/1999-2000/faprem/avilla.htm)
- [Bradford](https://fbref.com/en/squads/3148d79f/1999-2000/Bradford-City-Stats) / [roster](https://www.footballsquads.co.uk/eng/1999-2000/faprem/bradford.htm)
- [PFA Team of the Year 1999-00](https://en.wikipedia.org/wiki/1999%E2%80%932000_FA_Premier_League) — Nigel Martyn as goalkeeper. Contemporary award evidence supports upper-tier candidacy; never apply blanket team title bonus.

## Outstanding season tasks
- Full fresh outfield nomination CB, LB, RB, DM, CM, CAM, LW, RW, ST across all eight clubs with independent season-by-season league starts and exact positions. **Not finished**.
- Individual 1997-98 and 1998-99 full checks for all selected players. **Not finished**.
- Year-specific per-player tiers, complete cross-club position ranks, World Class/League Top Class groupings and Best XI. **Not finished**.
- Main season JSON **not overwritten or published** to avoid destructive replacement with incomplete research. All prior 130 imported draft candidates preserved.
- No Node CLI validator or live GitHub Pages browser test was executed. Front-end HTML, standings, champions' C badges and crests were not changed.
- This checkpoint is a new branch for review. No main commit; no publication; no user approval asserted.
