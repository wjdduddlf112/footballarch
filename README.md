# Football Archive

Historical football league and European competition archive.

## Design
- Static site hosted by GitHub Pages.
- No build step, backend, database, or API keys.
- Historical data and evaluations are maintained as separate JSON files.
- Ratings are **never published as final** until user review and approval.

## Coverage
Five domestic leagues (La Liga, Premier League, Serie A, Bundesliga, Ligue 1) and three UEFA competitions (UCL, UEL, UECL), 1999-00 through 2024-25.

## Data workflow
1. Confirm candidate clubs from *next-season* UEFA competition entries. Intertoto Cup is eligible in years when it was played.
2. Compile regular starters and starter-equivalent backups by club and position.
3. Review player tiers and positional rankings using current season and two preceding seasons (recency-weighted).
4. Human review before publication. Do not advance positions without approval.
5. Publish only approved records, keeping provisional candidates separately.

## Files
- `index.html` — static responsive site, no build dependencies
- `data/laliga-1999-00.json` — candidate clubs and preliminary GK pool (no ratings)
- `data/laliga-2022-23.json` — demonstration-only ratings and rankings

## Deploy
GitHub repository Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save.
The site URL will then be https://wjdduddlf112.github.io/footballarch/ .

## Data model
`meta`: league, season, status and review notes.
`clubs`: club key, original name, crest URL.
`qualifiers`: club ID, target competition, qualification route.
`players`: stable ID, name, birth date, club, position, draft role, tier (null until reviewed), rank (null until reviewed).
`bestXi`: ordered player IDs, only after final review.
`standings`: 20 clubs' exact final results, once verified.

## Disclaimer
This is a work-in-progress historical research project. Provisional candidate inclusion and demonstration-only ratings are not final conclusions.
