# Premier League 2007-08 — evidence-based checkpoint (2026-11-01)

**DRAFT, not user approved.** This revises the initial 2007-08 172-player draft after user feedback that real verification and BEST XI quality must precede rigid positional matching.

## Eligible clubs / coverage

Nine actual 2008-09 UEFA entrants (UCL: Manchester United, Chelsea, Arsenal, Liverpool; UEFA Cup: Everton, Portsmouth, Manchester City, Tottenham; Intertoto: Aston Villa). Exactly **170 candidates**: Manchester United 20, Chelsea 21, Arsenal 19, Liverpool 19, Everton 17, Aston Villa 18, Portsmouth 18, Manchester City 20, Tottenham 18. **99 nominal starters** (11/team).

Grades: S 4, A+ 27, A 6, A- 30, B+ 53, B 28, B- 20, C+ 2. World Class S/A+ = **31**. League Top Class S/A+/A/A- = **67**.

## Evidence checks performed

- **170/170 PL league matches, starts and goals populated from individual 2007-08 league-only team rows.** Nine clubs separately checked against Statbunker, FBref and Everton Encyclopedia. This is single-source complete and partially second-source corroborated, **not** an independent 2-source certification of every individual record.
- Ineligible or unsuitable players: Liverpool goalkeeper Charles Itandje had 0 league appearances and was removed; Benayoun 30 league apps/15 starts added; Tottenham Ledley King only four PL starts, so Younes Kaboul (19 starts) included; Aston Villa Patrick Berger 0 starts removed. Liverpool Pennant marginal 14 starts replaced by Benayoun 15 in right-side backup limit.
- **Best XI 11/11 previous 2005-06 and 2006-07 starts recorded.** FBref domestic-year lookup added for David James (Man City / Portsmouth), Nemanja Vidić (Man United), Gaël Clichy (Arsenal), Bacary Sagna (Auxerre Ligue 1), Ashley Young (Watford Championship then Watford/Aston Villa PL), Fernando Torres (Atlético Madrid La Liga), Steven Gerrard (Liverpool). Others already available in archived draft season datasets.
- **139/170 other candidates still lack at least one previous year league-start value**; their previous performance needs additional independent research. Previous league/club entries are never substituted with zeros.
- Current 2007-08 170/170 majority playing positions remain **not match-by-match audited**. Current original birthdays 170/170 filled but two-source verification unfinished.
- Ashley Young: 9 goals on FBref / 11v11 versus Statbunker 8. Use 9 and document the difference. Gerrard: FBref 8 assists versus BeSoccer 9; use 8. Different source scoring conventions are not silently merged.

## BEST XI outranks tactical slot rigidity

User explicitly instructed that a high-quality CAM may play CM in a four-four-two best XI while remaining a CAM in player rankings. The chosen XI is exactly contemporary 2007-08 PFA XI:

David James; Rio Ferdinand, Nemanja Vidić, Gaël Clichy, Bacary Sagna; Steven Gerrard (underlying **CAM**, field **CM**), Cesc Fàbregas (underlying **CM**, other field **CM**), Ashley Young, Cristiano Ronaldo; Fernando Torres, Emmanuel Adebayor.

Changes: `data/premierleague-2007-08.json` includes `bestXi.position` (pitch layout) and optional `bestXi.displayPosition` (shown label), while `players[].position` retains original season classification. `assets/app.js` updated to show displayPosition and open original ranked position on slot click. Ranking order is no longer distorted to force it to match an inflexible holding midfield position.

Contemporary PFA source: https://www.uefa.com/news-media/news/01cc-0e6f54e2f9d2-92ba0828a91e-1000--ronaldo-receives-english-acclaim/

## Audit gates / limits

- **GitHub connector-side JavaScript structured audit passed**, zero errors: 9 actual UEFA entrants, unique IDs, valid birth dates, allowed ranks/tiers, 11 nominal starters per club, position caps, continuous position rankings, all 170 starts/apps/goals valid, 11 unique Best XI IDs and all mapped tactical 4-4-2 slots. Exact PFA XI names cross-checked.
- **Node CLI script NOT executed**, live deployed site click/tab/crest **NOT independently browser-tested**. The repo CSS, standings and crests unchanged. User had previously confirmed the site through PL 2005-06.
- Season assessment remains DRAFT; no final approval, do not start PL 2008-09.

## Artifacts

- Season JSON `data/premierleague-2007-08.json`
- All 9 revised tables `audit/player-research/premierleague-2007-08-{manutd,chelsea,arsenal,liverpool,everton,astonvilla,portsmouth,mancity,tottenham}.md`
- League rankings `audit/player-research/premierleague-2007-08-ranks-{1,2}.md`
- Navigation and consolidated XI `audit/player-research/premierleague-2007-08-research.md`
