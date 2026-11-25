# 2002 FIFA World Cup — expanded research and validation checkpoint

Status: DRAFT / user approval pending. Not a claim of complete independent tactical or live deployment verification.

## Data coverage
- 32 participating countries, 8 groups, 48 group matches, 16 knockout matches, 161 goals; 16 eligible teams.
- 299 players appeared across eligible teams; 253 retained under editorial position/role candidate rules; 46 omitted. Candidate lists are not full tournament squads.
- Birth dates: 253 compared against FIFA-derived and Fjelstul data; 248 exact matches; 5 disagreements recorded in JSON with both values.
- Club-at-tournament fields: 253 checked against squad references. Gary Breen marked unattached based on pre-tournament contract departure.
- Appearances and starts: 253 matched across independent lineups and Fjelstul match appearance records. Minutes are nominal match minutes without stoppage time.
- Positions: match-position codes and minutes retained per player; 21 changes from initial 252-player expansion; 26 generic-only position records require inferred role, 33 tactical mappings (e.g. wing-back, holding midfielder). No claim of tracking-data verification.
- All candidates have position ranks and draft tiers. 15 Elite (S/A+), 94 Top Class (S through A-).
- 4-4-2 Best XI: 올리버 칸, 카푸, 리오 퍼디낸드, 홍명보, 호베르투 카를루스, 헤라르도 토라도, 파파 부바 디오프, 데이비드 베컴, 히바우두, 호나우두, 크리스티안 비에리. FIFA technical report supports prevalence of the 4-4-2 family, not a separately counted exact modal formation.
- Cross-competition stable archive ID linkage not separately audited.

## Verification
- participants: PASS
- groups: PASS
- matches: PASS
- goals: PASS
- countries: PASS
- uniqueIds: PASS
- uniqueExternalIds: PASS
- allBirth: PASS
- allClub: PASS
- allMatchCounts: PASS
- allRanks: PASS
- xi: PASS
- elite: PASS
- top: PASS
- JavaScript simulated DOM: seven views passed, country/position/search filters and player detail dialog passed.
- Live deployment: NOT VERIFIED. Public GitHub Pages URL not accessible to current web tool. Local render smoke tests do not prove browser deployment.
- User review: pending.

## Source links
- https://github.com/openfootball/worldcup.json/blob/master/2002/worldcup-full.json
- https://github.com/stiles/world-cup/blob/main/data/processed/2002/players.json
- https://www.rsssf.org/tables/2002f.html
- https://www.rsssf.org/tables/2002full.html
- https://www.ussoccerhistory.org/wp-content/uploads/2025/01/bw96axitsmtrojpaeugz-compressed.pdf
- https://www.planetworldcup.com/CUPS/2002/wc02statistics.html
- https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/squads.csv
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/players.csv
- https://www.planetworldcup.com/CUPS/2002/squad_ger02.html
- https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads#Turkey
- https://www.planetworldcup.com/CUPS/2002/squad_usa02.html
- https://www.planetworldcup.com/CUPS/2002/squad_kor02.html
- https://www.planetworldcup.com/CUPS/2002/squad_sen02.html
- https://www.planetworldcup.com/CUPS/2002/squad_ita02.html
- https://www.planetworldcup.com/CUPS/2002/squad_spa02.html
- https://www.planetworldcup.com/CUPS/2002/squad_bra02.html
- https://www.planetworldcup.com/CUPS/2002/squad_mex02.html
- https://www.planetworldcup.com/CUPS/2002/squad_ire02.html
- https://www.planetworldcup.com/CUPS/2002/squad_eng02.html
- https://www.planetworldcup.com/CUPS/2002/squad_jpn02.html
- https://www.planetworldcup.com/CUPS/2002/squad_den02.html
- https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads#Belgium
- https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads#Sweden
- https://www.planetworldcup.com/CUPS/2002/squad_par02.html
- https://github.com/jfjelstul/worldcup/blob/master/data-csv/player_appearances.csv

## Commits
- Data position/ranking update: a4f7bb32a3c40bcfcf606092f15c30813dd0d1bd
- UI verification display: e89d7b80f6b511e2a7eb7de3b9e5df7d62b3e5cd
- HTML status: 34b383a0b57d741e75b1d911dd7364ecc66c84a8
- Data invariant log: 5166473ad394f563b623d17cad444749dd9ce669
