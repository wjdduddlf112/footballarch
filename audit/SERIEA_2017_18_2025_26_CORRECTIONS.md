# Serie A segment 3 correction audit

Base: e7ceebd9b5cda6bf3bedd40024c08bc5218f2200
Report: FOOTBALL_AUDIT_SERIEA_SEGMENT_3_CORRECTIONS.md (1505 lines). Main unchanged, no deployment. Report-backed updates, not a new exhaustive independent match-by-match review. Individual held rows and XI review reasons are stored per season under meta.segment3Audit.

| Season | Candidates after | DOB | GK conceded | Assists | Prior season groups | Prior club rows | Held report rows |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2017-18 | 123 | 1 | 11 | 0 | 67 | 70 | 6 |
| 2018-19 | 130 | 1 | 13 | 0 | 69 | 70 | 5 |
| 2019-20 | 133 | 0 | 13 | 0 | 48 | 49 | 5 |
| 2020-21 | 126 | 0 | 14 | 0 | 38 | 38 | 8 |
| 2021-22 | 133 | 0 | 13 | 0 | 63 | 69 | 4 |
| 2022-23 | 132 | 0 | 14 | 0 | 62 | 67 | 8 |
| 2023-24 | 151 | 0 | 16 | 111 | 82 | 84 | 4 |
| 2024-25 | 131 | 0 | 13 | 93 | 78 | 81 | 3 |
| 2025-26 | 130 | 0 | 12 | 98 | 70 | 72 | 5 |

- 2022-23: Bartosz Bereszyński name corrected; original ID retained.
- 2024-25 Sam Beukema Bologna goals 1→0; 2025-26 prior reference and stale current evaluation prose updated.
- 2025-26: removed ineligible Ibrahim Sulemana (0 Atalanta league appearances). Distinct Kamaldeen identity and club-specific figures retained in audit metadata, not a CM candidate. BDFutbol/Opta/FBref minutes differ (1002/1003/1011); no cross-provider overwrite. Atalanta CM reserve vacant because Musah's central role not sufficiently verified. CM ranks compacted and tier and candidate counts reconciled. Existing 2025-26 test expected 131; update to 130 and explicitly assert removal, separated identity, vacant slot.
- 2018-19: Fabián Ruiz → Zieliński (CM rank 1) on current availability and prior continuity.
- 2024-25: Kean → Lukaku (ST rank 2); Retegui already selected. Current 14 goals + 10 assists vs 19 + 3, stronger previous two years. Remaining 9 XI challenges held; reasons in season metadata. No tier changes; ranking for selected replacements already correct.
- All existing standings and qualifier membership preserved; 2021-22 Vlahović club-specific records remain distinct. Prior stats filled only when original values compatible, club-level records retained separately. 302 positive assists matched on season/player/club; missing assists not treated as zero.
- Structural checks before writing: unique player IDs, starts alias and starts <= appearances, eligible clubs, 11 distinct XI IDs/positions, unchanged standings, prior starts <= appearances. Existing native test runs tracked separately.
