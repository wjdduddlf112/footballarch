# La Liga 1999-00 — independent re-selection audit (DRAFT, 2026-11-02)

## Principle

This is a **new source-first candidate pool** for the 10 clubs that **actually played** 2000-01 UEFA / Intertoto competition, not a copy of the previous 148-player list. BDFutbol 1999-00 team lineup/rotation sources were gathered, formation and positions are hypotheses, and the one-backup-per-slot limits were applied. Only **after** the independent selection, prior stored exact-name/alias identities were used to assist DOB matching and perform a difference audit.

All player evaluations/ranks in this new audit remain **null / evidence_pending**. The existing published preliminary main dataset is preserved unchanged; its old S–D tiers and Best XI are **not** inherited or re-approved.

## Actual European-qualified clubs

UCL: Deportivo de La Coruña, Barcelona, Valencia, Real Madrid (title holder).
UEFA Cup direct: Zaragoza, Alavés, Rayo Vallecano (fair play), Espanyol (Copa del Rey).
Intertoto: Celta (went on to UEFA Cup), Mallorca (entered but did not win).

Sources:
- https://www.rsssf.org/tabless/span00.html
- https://www.soccer-spain.com/ssdocs/history/1999-2000.php
- https://www.rsssf.org/tablesu/uic00.html

## Independent shortlisting

- New broad independent BDFutbol source pool: **200** player entries across 10 clubs, 110 representative XI names and 90 other league starters.
- New role-capped DRAFT candidates: **167**, consisting of **110 prospective starters** + **57 prospective backups**.
- **151/167** DOB non-null. Of those, **9** specifically source-checked or corrected this pass; many of the remainder were drawn from previously stored biography and require independent checking. **16 DOB** remain missing.
- **0/167** fresh independent recency-weighted 3-season tier decisions; **0/167** new positional ranks; **new Best XI not selected**.
- The 10 suggested club formations are working tactical models, **not match-frequency-confirmed 1999-00 team formation records**. Same applies to left/right and hybrid positions.

| Club | Formation | Starter hypotheses | Backup hypotheses | Total |
|---|---|---:|---:|---:|
| RC Deportivo de La Coruña | 4-2-3-1 (가설) | 11 | 6 | 17 |
| FC Barcelona | 4-3-3 (가설) | 11 | 8 | 19 |
| Valencia CF | 4-4-2 (가설) | 11 | 7 | 18 |
| Real Zaragoza | 4-4-2 (가설) | 11 | 5 | 16 |
| Real Madrid CF | 4-4-2 (가설) | 11 | 5 | 16 |
| Deportivo Alavés | 4-4-2 (가설) | 11 | 6 | 17 |
| RC Celta de Vigo | 4-2-3-1 (가설) | 11 | 6 | 17 |
| Rayo Vallecano | 4-4-2 (가설) | 11 | 6 | 17 |
| RCD Mallorca | 4-4-2 (가설) | 11 | 5 | 16 |
| RCD Espanyol | 4-4-2 (가설) | 11 | 3 | 14 |
| **TOTAL** | | **110** | **57** | **167** |

The raw data with per-player original name, matched Korean name (if available), DOB, source, club, 1999-00 total league starts, position hypothesis, role and missing-tier status is in:
- `audit/laliga-1999-00-independent-source-pool-2026-11-02.json` (200 source entries)
- `audit/laliga-1999-00-independent-role-capped-draft-2026-11-02.json` (167 role-capped entries)

## Delta vs prior 148-player preliminary draft

**143** stable player records matched by exact name or explicit alias *after* new candidate selection. **24** players appeared in newly assembled draft but not in old draft; **5** old entries were not retained in this working shortlist. This is a **review trigger**, not confirmation that a previously selected player was wrong.

### 24 independent new entries

- deportivo — Petr Kouba (GK, 2 league starts)
- deportivo — Manel Martínez (RB, 1 league starts)
- deportivo — Lionel Scaloni (RW, 4 league starts)
- barca — Frédéric Déhu (CB, 9 league starts)
- barca — Gabri García (CM, 10 league starts)
- valencia — Fabio Fagiani (LB, 5 league starts)
- valencia — Gerardo García (RB, 5 league starts)
- valencia — Adrian Ilie (ST, 15 league starts)
- zaragoza — Iñaki Láinez (GK, 1 league starts)
- zaragoza — Carlos Cuartero (CB, 10 league starts)
- zaragoza — Yordi González (ST, 9 league starts)
- madrid — Nicolas Anelka (ST, 12 league starts)
- alaves — Dan Eggen (CB, 8 league starts)
- alaves — Berruet (RB, 3 league starts)
- alaves — Julio Salinas (ST, 6 league starts)
- celta — Martín Vivas (RB, 9 league starts)
- celta — Turdó (ST, 12 league starts)
- rayo — Amaya (CB, 15 league starts)
- rayo — Eduardo Estíbariz (RB, 20 league starts)
- rayo — Van den Bergh (LW, 1 league starts)
- mallorca — Armando (RB, 9 league starts)
- mallorca — Lluís Carreras (LW, 9 league starts)
- mallorca — Samuel Eto'o (ST, 9 league starts)
- espanyol — Serrano (ST, 6 league starts)

### Five previous entries omitted in new hypothesis

- espanyol — Juan Luis Mora (GK)
- valencia — Luis Milla (CM)
- madrid — Christian Karembeu (CM)
- zaragoza — Jesús Solana (LB)
- mallorca — Ariel Ibagaza (CM)

### 13 primary position mismatches needing 1999-00 appearance-by-position audit

- barca: Winston Bogarde — previous CB, new hypothesis LB
- valencia: David Albelda — previous DM, new hypothesis CM
- zaragoza: Gary Sundgren — previous CB, new hypothesis RB
- zaragoza: Marcos Vales — previous RW, new hypothesis CM
- zaragoza: Ander Garitano — previous CM, new hypothesis RW
- madrid: Iván Helguera — previous DM, new hypothesis CM
- alaves: Ibon Begoña — previous DM, new hypothesis LB
- alaves: Magno Mocelin — previous RW, new hypothesis LW
- alaves: Nan Ribera — previous LW, new hypothesis RW
- celta: Haim Revivo — previous LW, new hypothesis CAM
- rayo: Pablo Sanz — previous CB, new hypothesis CM
- rayo: Jordi Ferrón — previous RB, new hypothesis RW
- espanyol: Roger García — previous CM, new hypothesis LB

## Independently spotted biography issues

- Valencia **Francisco Javier Farinós Zapata**, not pre-existing `Francisco Joaquín Farinós` full name. Spanish football federation: https://rfef.es/es/selecciones/jugadores/farinos
- Valencia **Juan Sánchez** is reported DOB **1972-05-15** by BDFutbol and Transfermarkt's footballer profile, whereas pre-existing dataset carries 1972-02-15 (and a Transfermarkt coaching profile also differs). See https://www.transfermarkt.es/juan-sanchez/profil/spieler/7585. Identity/DOB conflict should be acknowledged rather than silently overwritten in main.

## Contemporary formation evidence

- Deportivo and Celta 4-2-3-1 mentioned contemporaneously: https://elpais.com/diario/1999/11/30/deportes/943916401_850215.html
- 1999-00 Valencia midfield 4-4-2 patterns: https://elpais.com/diario/2000/05/02/deportes/957218405_850215.html and https://elpais.com/diario/1999/10/24/deportes/940716003_850215.html
- Zaragoza/Rayo contemporary match roles: https://elpais.com/diario/2000/02/14/deportes/950482841_850215.html and https://www.rsssf.org/tabless/span00ext.html
- BDFutbol's displayed representative XI and formation graphic are approximate, not exact played-position rates.

## Validation / completion gates

| Gate | Status |
|---|---|
| Eligible clubs actual 2000-01 participation | VERIFIED from standing project and external sources |
| Fresh 200-person independent 1999-00 source pool | COMPLETED, source-led preliminary |
| New 167-person role-capped squad | DRAFT only, all 10 clubs × 11 starters, position cap checked |
| Each player 1999-00 primary position verified match-by-match | OPEN |
| Individual 1997-98 / 1998-99 / 1999-00 corroboration | OPEN |
| DOB verification | 151 filled, 16 missing, many secondary cache hits not independently checked |
| Korean + original name independent verification | OPEN |
| New S–D tiers | 0 complete; null != D |
| New intra-position ranks | 0 complete |
| New season Best XI / League Top / World Class | OPEN |
| `data/laliga-1999-00.json` overwritten | **NO**, original preliminary data protected |
| CLI `node` script validators | NOT RUN in connector-only audit |
| Live GitHub Pages browser UI | NOT CHECKED |
| Final user approval | NOT RECEIVED |

## Next necessary research

Independently verify historical year-by-year individual performance for 167 candidates, correct exact 1999-00 primary positions (especially hybrid and marginal lineup roles), obtain 16 DOBs, calculate new ranked tiers and representative Best XI, then replace preliminary site data **only when supported**; run CLI and live browser tests. Do not advance to La Liga 2000-01 automatically.
