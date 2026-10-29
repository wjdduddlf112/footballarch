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
