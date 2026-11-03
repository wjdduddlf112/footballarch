# La Liga 2009-10 historical source audit — 2026-11-04

> Historical player full verification is not complete. Do not infer this from JSON validity, source URLs, or browser rendering.

## Scope

- Season 2009-10, 2010-11 actual UEFA entrants 7; 2007-08 and 2008-09 personal weighted history; 2009-10 strongest.
- Source-led roster manually transcribed from seven direct BDFutbol 2009-10 club-season league tables, not blindly adopted from older Football Archive pool.
- 2010-11 UEFA: Barcelona, Real Madrid, Valencia UCL groups; Sevilla UCL qualifying then UEL group; Getafe, Villarreal and Atlético UEL. Mallorca rank 5 denied licence; Villarreal rank 7 replaced it; Atlético rank 9 UEL titleholder.

## Candidate audit statistics

{
  "candidates": 129,
  "clubs": 7,
  "starters": 77,
  "backups": 52,
  "ranked": 129,
  "births": 129,
  "independentThreeSeason": 0,
  "matchByMatchPositions": 0
}

- S/A+ World Class: 15; S/A+/A/A- League Top Class: 35.
- 11 nominal tactical starting slots per club, 52 viable backups; 8 starter-equivalent high-start backup flags.
- Birthdate ISO 129 of 129 populated. **This is not 129 independent biographies checked twice**: 102 from historic FootballSquads squad pages; 10 from selected targeted named reliable public sources; 16 older DRAFT only; 1 mismatch flagged. Because source pools overlap categories, do not naively sum without checking individual audit status.
- Current playing position is nominal/tactical and needs per-game check; 4-4-2 league XI is a time-appropriate hypothesis not league modal proof.

## Historical club-season primary source URLs

- barca: https://www.bdfutbol.com/en/t/t2009-101.html
- madrid: https://www.bdfutbol.com/en/t/t2009-102.html
- valencia: https://www.bdfutbol.com/en/t/t2009-1036.html
- sevilla: https://www.bdfutbol.com/en/t/t2009-1033.html
- getafe: https://www.bdfutbol.com/en/t/t2009-1016.html
- villarreal: https://www.bdfutbol.com/en/t/t2009-1038.html
- atleti: https://www.bdfutbol.com/en/t/t2009-107.html

## DOB source links

- barca: https://www.footballsquads.co.uk/spain/2009-2010/laliga/barce.htm
- madrid: https://www.footballsquads.co.uk/spain/2009-2010/laliga/rmadrid.htm
- valencia: https://www.footballsquads.co.uk/spain/2009-2010/laliga/valencia.htm
- sevilla: https://www.footballsquads.co.uk/spain/2010-2011/laliga/sevilla.htm
- atleti: https://www.footballsquads.co.uk/spain/2009-2010/laliga/amadrid.htm
- getafe: https://www.footballsquads.co.uk/spain/2008-2009/laliga/getafe.htm

- Original conflict: Éric Abidal archived birthday 1979-09-11, FootballSquads 2009/10 lists 1979-07-11. Retain previous date and unresolved conflict; compare club official original yearbooks and independent identity references.
- New player identity pairs and provenance stored on each JSON record.

## Individually known conflicts for review

1. Barcelona Keita 23 starts vs Iniesta 20: 4-3-3 eleven-slot choice treats Keita nominal starter; Iniesta remains A+ individual top, is a starter-equivalent candidate.
2. Real Madrid Marcelo 34 starts labelled nominal LW backup to Ronaldo 28; he also operated at LB/LM and must not be deemed bench-only. Check most-frequent role before assigning positions or XI.
3. Sevilla Luiz Fabiano 15 goals in 23 games / 18 starts vs Negredo 35 games/25 starts and Kanouté 27/20; 4-4-2 starter slot is based on seasonal deployment, not automatic tier.
4. Atlético Jurado 38 games 29 starts treated nominal CM in 4-4-2, but may have been CAM or left-internal midfielder. Independent match position check required.
5. Valencia Bruno 25 starts / Miguel 20 at RB, plus 14-start Mathieu and 12-start Jordi Alba at left.
6. Villarreal Cazorla 16 starts, Pires 13, Cani 27 and David Fuster 11 have diverse midfield/wing roles.
7. Getafe Dani Parejo more central playmaker CM/CAM than profile generic CM; verify actual majority usage.

## Separate completion gates

| Gate | Current status |
|---|---|
| 2010-11 actual UEFA entrant clubs | verified via UEFA and RTVE / Spanish match reports |
| Historical 20-team standings / crest list preserved | identical to current main archive |
| All candidate present-season BDFutbol records | 129 single-source records entered; independent cross-check pending |
| 129 ISO DOB dates | entered, but 16 prior-draft only, conflict 1, and other second-source checks pending |
| Independent 2007-08 & 2008-09 individual form | NOT COMPLETED |
| Match-by-match predominant position | NOT COMPLETED |
| Club-specific tactical structures | draft review only |
| Leaguewide modal formation | NOT COMPLETED |
| Provisional tiers + ranks + Best XI | entered DRAFT, not user-approved |
| Node structural and local browser | CI to run; do not claim result until log verified |
| Production GitHub Pages Chromium | to verify after deployment, not done yet |

## Source responsibility

Single scraped page, biography carryover from old DRAFT and a successful CI status cannot independently corroborate a historical player record. Conflicts are recorded rather than silently resolved. 2008-09 and other seasons are preserved unchanged. Stop after 2009-10 and await user instruction before starting 2010-11.
