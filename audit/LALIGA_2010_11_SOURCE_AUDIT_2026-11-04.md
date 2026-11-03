# La Liga 2010-11 source and verification audit (2026-11-04)

## 2011-12 next-season UEFA entrants

- UEFA Champions League: Barcelona, Real Madrid, Valencia, Villarreal.
- UEFA Europa League: Sevilla, Athletic Club, Atlético de Madrid.
- Source: https://www.uefa.com/uefachampionsleague/history/seasons/2012/clubs/ and https://www.uefa.com/uefaeuropaleague/history/seasons/2012/clubs/ . 2010-11 league standings: https://www.bdfutbol.com/en/t/t2010-11.html .
- Classification source in archive `data/laliga-standings-verified-1999-2026.json`, entry `2010-11`, preserves 20 team positions.
- 2010-11 Copa del Rey won by Real Madrid against Barcelona. Both are UCL entrants; the seventh league-placed Atlético qualifies for Europe. Do not accidentally select Getafe (2010-11 league 16th), who participated in Europa League **the preceding season**, not 2011-12.

## Source-verified candidate table transcription

BDFutbol column semantics **PM = played**, **SM = starts**, **G = league goals** (for goalkeepers, negative G = conceded). No player's minutes or assists fabricated.

- FC Barcelona: https://www.bdfutbol.com/en/t/t2010-111.html
- Real Madrid CF: https://www.bdfutbol.com/en/t/t2010-112.html
- Valencia CF: https://www.bdfutbol.com/en/t/t2010-1136.html
- Villarreal CF: https://www.bdfutbol.com/en/t/t2010-1138.html
- Sevilla FC: https://www.bdfutbol.com/en/t/t2010-1133.html
- Athletic Club: https://www.bdfutbol.com/en/t/t2010-116.html
- Club Atlético de Madrid: https://www.bdfutbol.com/en/t/t2010-117.html

- Nominees: 127; eleven nominal tactical starters per team (77), 50 backups.
- 4-2-3-1 preliminary Best XI and within-position ranks only, **not empirically validated league-modal formation**.
- Sources for contemporary 4-2-3-1 *trend*, not specific La Liga 2010-11 modal claim: https://www.uefa.com/news-media/news/0254-0d7d296d908a-f37008ae461d-1000--2010-11-technical-report-examines-state-of-play/ . The published systematic La Liga formation study https://pmc.ncbi.nlm.nih.gov/articles/PMC10407311/ starts **2012-13**, therefore cannot prove 2010-11.

## Biographical cross-check

- All 127 birthdates entered ISO. 35 newly sourced from FootballSquads 2010-11 historical lineups or specific publicly named player biographies; 90 older Football Archive previous-year DRAFT transfers, **not independently checked**, 2 recorded conflicts.
- Historical 2010-11 squad roster references:
  - FC Barcelona: https://www.footballsquads.co.uk/spain/2010-2011/laliga/barce.htm
  - Real Madrid CF: https://www.footballsquads.co.uk/spain/2010-2011/laliga/rmadrid.htm
  - Valencia CF: https://www.footballsquads.co.uk/spain/2010-2011/laliga/valencia.htm
  - Villarreal CF: https://www.footballsquads.co.uk/spain/2010-2011/laliga/villar.htm
  - Sevilla FC: https://www.footballsquads.co.uk/spain/2010-2011/laliga/sevilla.htm
  - Athletic Club: https://www.footballsquads.co.uk/spain/2010-2011/laliga/abilbao.htm
  - Club Atlético de Madrid: https://www.footballsquads.co.uk/spain/2010-2011/laliga/amadrid.htm
- **Eric Abidal**: official FC Barcelona https://www.fcbarcelona.com/en/football/barca-legends/jugadores/1053733/abidal and club historical 2009-10 book indicate **1979-09-11**, but FootballSquads 2010-11 indicates **1979-07-11**. Keep ISO 1979-09-11 as archival official value with **explicit unresolved source disagreement**.
- **Adriano Correia**: Barcelona club 2012-13 annual https://media4.fcbarcelona.com/media/asset_publics/resources/000/069/797/original/MEMORIA_CLUB_12_13_CASTELLANO_baixa.v1381154186.pdf says **1984-10-20**; FootballSquads 2010-11 lists **1984-10-26**. Current earlier-archive inherited ISO **1984-10-26** is explicitly source-disputed. Do not silently label correct.
- Other birthdates from past DRAFT still need independent biographical second source.

## Crucial qualitative and position limits

1. Historical review period 2008-09, 2009-10 and 2010-11 with recency weighting, but 127 older two-season individual qualitative career reviews are **not independently verified**. Earlier archived values are non-independent pointers.
2. Player's 2010-11 **most played** position, especially Messi false-nine ST, Villa LW, Di María RW, Marcelo LB, Mascherano DM/CB, Valencia Tino Costa and Athletic Toquero ST/wing, needs actual game-by-game counts before certification.
3. BDFutbol tab "Lineup" approximates a tactical shape; it expressly says its automatically generated formation does not necessarily reflect actual real formation.
4. Current playing-form tiers and tie-breaks are provisional human qualitative nomination and starts/appearances sorting, **not independently weighted 3-season quantitative grades**.
5. There is no identified evidence for a 2010-11 league-wide modal formation census. 4-2-3-1 is an era-compatible working hypothesis, not a proven season winner.
6. Backup definition meets one per team/position. Real Madrid Antonio Adán played 3 league matches (two starts), a keeper understudy without starter-level volume; candidacy should be checked against user starter-equivalent criterion. Likewise Barcelona Afellay seven starts and Atlético Fran Mérida six are subject to eligibility review.
7. Player records selected from actual 2010-11 club squads, not inferred from 2011-12 rosters or recent fame. Multiple player cross-club transfers independently disambiguated (David Villa, Ángel Di María, Javier Mascherano, Mesut Özil, Borja Valero, Diego Godín).

## Audit gate state

| Gate | Status |
|---|---|
| 2011-12 seven actual UEFA club eligibility | Verified |
| 2010-11 seven club BDFutbol source PM/SM/G | Recorded, source linked, not independently cross-validated all 127 |
| 20 original standings / clubs | Original archived |
| 127 original/Korean player name and ISO DOB values | Entered; biography independent cross-check incomplete |
| Most-played role by game | NOT COMPLETE |
| Weighted 2008-09/2009-10 form quality | NOT COMPLETE |
| 2010-11 empirically most popular formation | NOT COMPLETE |
| All tiers, ranks and Best XI | PROVISIONAL unapproved |
| Structural CI / local Chromium | NOT YET reported: await actual run logs |
| Real GitHub Pages public Chromium | NOT YET reported: await deployment/run logs |
| User approval | NOT received |

Stop at 2010-11. No 2011-12 player evaluations without explicit instruction.
