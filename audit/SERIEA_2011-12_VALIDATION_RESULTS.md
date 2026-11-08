# Serie A 2011-12 — executed validation and outstanding historical evidence (DRAFT)

Date: 2026-11-08 / Season 2011-12 (three-season lookback 2009-10 / 2010-11 / 2011-12)

## 1. Live CI / deployment outcomes checked against GitHub API

| Test | Outcome | Proof |
|---|---|---|
| Initial seasonal GitHub Actions Node verifier | **Failure: validator-only bug** | https://github.com/wjdduddlf112/footballarch/actions/runs/42485904229 |
| Corrected Node verifier after script fix at `14ec4aaee0d27838bd897207a1b872992e997ed3` | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42485978508 |
| GitHub Pages build + deployment of same corrected source commit | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42485977836 |
| Actual browser opening website / filtering positions / reading player details | **NOT PERFORMED / could not load from external browsing** | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2011-12 |

The first failed CI log explicitly says `ReferenceError: t is not defined` at validator `counts[t]`. Script changed to `counts[tier]`, commit `14ec4aaee0d27838bd897207a1b872992e997ed3`; actual successful rerun followed. This was **not** a player-data validation failure. Tests operate on actual checked-out repository in GitHub Actions.

## 2. Structural and syntactic checks

Retrieved saved `data/seriea-2011-12.json` again through authenticated GitHub connection and independently executed in-session JS checks (0 structural errors). Actual fixed Node validation on GitHub Actions also passed. Checked:

- Correct metadata season 2011-12, qualification 2012-13, `draft_unapproved`.
- Exactly 6 Italian teams who played 2012-13 UEFA UCL or UEL (Juventus, Milan, Udinese, Lazio, Napoli, Inter). Roma not selected.
- Exactly 109 candidate player IDs, names Korean+original, club assignments, stored DOB yyyy-mm-dd. No duplicate player IDs, no zero-app nominees.
- 109/109 2011-12 Serie A league games/starts/minutes/goals values sourced in each player record from relevant BDFutbol club season page; all apps positive, starts <= apps, minutes plausible.
- 11 nominal representative starter roles per club = 66, max one backup for each club and registered position.
- 3-back clubs Juventus, Udinese, Napoli each show three starting CBs. Original LWB/RWB role retained while site LB/RB classification used.
- Valid S–D grades and continuous 1..N ranks for all GK CB LB RB DM CM CAM LW RW ST groups, tier/rank monotonic.
- Tier distribution: S5, A+13, A0 15, A-3, B+33, B0 22, B-17, C+1, C0/C-/D 0. 18 World Class, 36 League Top Class.
- 11 distinct `proposed_unapproved` Best XI slots fitting 3-5-2 (GK1 CB3 LWB1 RWB1 DM1 CM2 ST2).
- New website `assets/app.js` has `slots352` with inclusion in supported formation list and selection, preserving all pre-existing layouts.

## 3. Evidence and user approval limitations

- Historical **full independent three-season personal quality, tactical and peer-ranking audit: 0/109**. Existing prior-season numeric entries were linked by verified person identity from old DRAFT, not independently reverified. Their provenance explicitly indicates previous unapproved evidence.
- Current 2011-12 assists all null; no artificial zero.
- All DOB fields populated but the 109 DOB source records were **not** each separately verified against two distinct sources.
- Current BDFutbol minutes/starts/goals were transcribed from club lineup tables, **not** all reconciled per fixture against independent season event logs/FBref.
- The actual 38-game modal tactical role per player and mathematical 380-game Serie A most common formation are not established; the 3-5-2 choice is a period-context working model.
- All tiers, ordinal relative ranks, World/League Top categories and Best XI remain **provisional**, without user final approval.
- GitHub Actions green and Pages build green **cannot be equated with functional front-end browser testing**. Attempts to open the live `github.io` site and JSON returned inaccessible in tool environment.

## 4. Data files and pages

- [Season JSON](https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2011-12.json)
- [All 109 player report (6 clubs, 10 positional rankings, 36 League Top and Best XI)](https://github.com/wjdduddlf112/footballarch/blob/main/audit/SERIEA_2011-12_DRAFT_FULL_REPORT.md)
- [Actual CI Node verifier script](https://github.com/wjdduddlf112/footballarch/blob/main/scripts/verify-seriea-2011-12.mjs)
- [CI workflow](https://github.com/wjdduddlf112/footballarch/blob/main/.github/workflows/verify-seriea-2011-12.yml)
- [CI run success](https://github.com/wjdduddlf112/footballarch/actions/runs/42485978508)
- [GitHub Pages successful build/deploy](https://github.com/wjdduddlf112/footballarch/actions/runs/42485977836)
- [Season homepage (actual visual UI unverified)](https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2011-12)

Work only on 2011-12 and stop. Neither this nor previous seasons is approved merely by moving to next season.
