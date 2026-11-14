# UCL 2012-13–2018-19 — source-linked provisional tier recovery (2026-11-14)

## Scope and user-facing correction

Seven UEFA Champions League seasons were shown in the Football Archive with 1,849 of 1,987 player nominees lacking `tier`. The user identified this incomplete coverage. Existing same-season Football Archive domestic-league DRAFT assessments were cross-referenced by Unicode-normalized original player name, and by matching club ID or original club name when possible. If multiple names were ambiguous, the player was not assigned a new grade.

The newly populated `tier` values are **conditional same-year domestic DRAFT previews**, **not** independently verified UEFA Champions League performance tiers. They were transferred only with an identifiable same-season same-person domestic archived source; **no role-based blanket B/C estimates were added**. Candidates without a suitable source remain `tier:null`, `rank:null`, `review:evidence_pending`.

| Season | Candidate nominees | Previous rated | New source-linked provisional | Total draft tiers | Still pending |
|---|---:|---:|---:|---:|---:|
| 2012-13 | 283 | 0 | 215 | 215 | 68 |
| 2013-14 | 297 | 26 | 183 | 209 | 88 |
| 2014-15 | 302 | 36 | 210 | 246 | 56 |
| 2015-16 | 290 | 18 | 153 | 171 | 119 |
| 2016-17 | 295 | 18 | 202 | 220 | 75 |
| 2017-18 | 256 | 19 | 174 | 193 | 63 |
| 2018-19 | 264 | 21 | 193 | 214 | 50 |
| **Total** | **1,987** | **138** | **1,330** | **1,468** | **519** |

### Rating and rank provenance

- Preserved pre-existing individually reviewed UEFA-related DRAFT grades when present (138 across seven seasons). Newly sourced grades are tagged `tierEvidenceStatus`, `tierSource`, `tierReview`, and include a per-player `tierRationale`. The same-year domestic archive `tier` is used **as-is** as a temporary proxy, not converted to confirmed UCL grade.
- Re-ranked rated nominees within their recorded current competition position. First key: displayed tier S through C-; within equal grades, pre-existing UEFA-supported graded entries precede imported domestic proxies, then original provisional ranking, confirmed UEFA appearance evidence, starter/backup usage and documented domestic league starts. Remaining ties use names for determinism. This provisional ordinal is **not** a validated same-position three-season comparison.
- No player received a synthetic UCL appearance, starts, minutes, goals or assists from a domestic archive. Domestic statistics are confined to `tierSource` and identified as domestic-only.
- The 1,330 new grades are explicitly subject to two missing independent audits: **UEFA match-level participation/modal historical position**, and **personal performance weighting current season > previous > two previous**. A similar caveat applies to many existing UEFA-linked grades.
- No championship/finalist bonus, no result-based grade override, no modifications to any Best XI player IDs, competition results, other UEFA league-season JSON, or approved user records.

### Known ineligible / pending source gaps

- Five major leagues' domestic archives cover only their own selected player pools, not necessarily all historical UCL knockout-round teams.
- Players at clubs from Portugal, Turkey, Scotland, Switzerland, Ukraine and elsewhere often lack an equivalent linked same-season domestic DRAFT assessment. Some five-league clubs are likewise absent from domestic Archive eligibility filters; those individuals remain ungraded rather than silently assigned a B/C tier.
- Apparent current-year domestic grading is not itself UCL evidence. Team registration and real main-stage appearance must still be individually established before approving nomination.

### Application and checks

- Data files: `data/ucl-2012-13.json` through `data/ucl-2018-19.json`.
- UI: `assets/app.js` now shows a prominent text note identifying how many rated nominees use **domestic DRAFT proxies** and how many remain ungraded, on the competition Overview, player candidate list, all tiers, Top Class and Best XI formation screens. The existing website layout is preserved.
- Validators: `scripts/verify-uefa-2012-13-draft.mjs` now allows explicitly sourced conditional UCL ratings instead of enforcing zero; `scripts/verify-uefa-2018-19-draft.mjs` separates 21 independently confirmed UCL appearance records from the larger conditional grade count and preserves the original 18-person UEL observer subset. `scripts/verify-uefa-best-xi-completeness.mjs` cross-checks all seven seasons for proper rank sequence, review state, archive provenance counts and unresolved candidates.
- **No final user approval**. All ratings and Best XIs remain `draft_unapproved` / `proposed_unapproved`. A completed structural or live-browser check must never be reported as completed independent historical player research.

### Primary season context (not direct evidence for every imported player's tier)
- 2012-13 UEFA technical report: https://www.uefa.com/MultimediaFiles/Download/TechnicalReport/competitions/UCL/01/99/10/79/1991079_DOWNLOAD.pdf
- 2016-17 technical observer squad: https://www.uefa.com/uefachampionsleague/news/0250-0c5117a9d99b-79a2efb59ef3-1000--uefa-champions-league-squad-of-the-season/
- 2017-18 technical observer squad: https://www.uefa.com/uefachampionsleague/news/0253-0d8222ae4584-fc81fa8bf4d6-1000--uefa-champions-league-squad-of-the-season/
- 2018-19 technical observer squad: https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/

## Remaining work, not marked complete

1. Source-check the 519 still-unrated players, including non-five-league and missing domestic eligibility seasons, while strictly verifying actual UCL participation.
2. Re-evaluate the 1,330 source-linked conditional ratings from their UCL individual match records and weighted three-season performance, correcting those whose domestic display tier is not appropriate for the tournament.
3. Reconcile historical positional role (including RW/LW, LB/RB) with season's actual match-frequency, independent awards and head-to-head player comparisons before approving position ranking or Best XI.

