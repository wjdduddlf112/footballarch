# La Liga 2023–26 recovery audit (2026-11-25)

Status: **research incomplete / draft_unapproved**. No canonical player season data published.

## Repository inspection
- On main, all 24 individual season files from 1999-00 to 2022-23 were found by individual GitHub contents requests; 2023-24, 2024-25 and 2025-26 returned 404 before this audit.
- The existing unified standings archive covers all 27 seasons; it must be preserved.
- No recovery candidate was found among the listed branches or the exact season commit searches. This is not an exhaustive proof that no unreachable commit exists.
- Existing progress audit ends La Liga player evaluation at 2022-23; 151 draft candidates, user approval false.
- No existing canonical data, UI, or other competition data modified.

## Eligible clubs (next-season actual UEFA entrants)
| Season | UCL | UEL | UECL |
|---|---|---|---|
| 2023-24 | Real Madrid, Barcelona, Girona, Atlético | Athletic Club, Real Sociedad | Real Betis |
| 2024-25 | Barcelona, Real Madrid, Atlético, Athletic Club, Villarreal | Real Betis, Celta | Rayo Vallecano |
| 2025-26 | Barcelona, Real Madrid, Villarreal, Atlético, Real Betis | Real Sociedad, Celta | Getafe |

Sources: [existing standings archive](../data/laliga-standings-verified-1999-2026.json); UEFA club history lists for [2024-25 UCL](https://www.uefa.com/uefachampionsleague/history/seasons/2025/clubs/), [UEL](https://www.uefa.com/uefaeuropaleague/history/seasons/2025/clubs/), [UECL](https://www.uefa.com/uefaconferenceleague/history/seasons/2025/clubs/); [2025-26 UCL](https://www.uefa.com/uefachampionsleague/history/seasons/2026/clubs/), [UEL](https://www.uefa.com/uefaeuropaleague/history/seasons/2026/clubs/), [UECL](https://www.uefa.com/uefaconferenceleague/history/seasons/2026/clubs/); [2026-27 UCL](https://www.uefa.com/uefachampionsleague/news/02a8-2171a88881a0-c70193b972c6-1000--meet-the-2026-27-champions-league-league-phase-teams/), [UEL](https://www.uefa.com/uefaeuropaleague/news/02a8-217364fd42e6-7e49801d8daf-1000--2026-27-europa-league-meet-the-league-phase-teams/), [Getafe UEFA](https://www.uefa.com/uefaconferenceleague/clubs/87960/).

## Saved source inventory
[Raw research-only data](./laliga-2023-26-player-source-inventory-2026-11-25.json) (commit 276b8585c00f0f52a31dc754eb076bd74ae0b450, verified by readback).

| Season | Raw player-club rows | Prior-season source links |
|---|---:|---:|
| 2023-24 | 118 | 143 |
| 2024-25 | 257 | 193 |
| 2025-26 | 285 | 249 |

Raw rows are not selected candidates and can include reserves/transfers. The external derived Opta snapshot is incomplete, especially 2023-24 Barcelona and Real Madrid. The raw inventory cannot be used as a verified candidate list or as a basis for automatic grades. Prior data is linked by Opta ID, not proof of three-season assessment. No birth dates, exact roles, ranking, or Best XI are certified from this inventory.

## Remaining gates
- Reconcile each club's complete season appearances and starts to original season tables/match logs; verify detailed positions, formations and birth dates.
- Select players using the project position limits and actual role evidence, then assess three seasons and select tiers, ranks and XI.
- Build and validate canonical season JSON only after the research gate. No empty placeholder season JSON.
- Run project validators and verify actual GitHub Pages rendering. Public page retrieval was unsuccessful; interactive browser QA has not been performed.
