# Football Archive — Player integration checkpoint

Date: 2026-10-30  
Repository: `wjdduddlf112/footballarch`, branch `main`  
Deployment target: https://wjdduddlf112.github.io/footballarch/  
Status: **17/17 season datasets; 303/2240 provisional tier proposals; 1937 tier reviews outstanding after fresh PL 1999-00 DRAFT rebuild.**

## Scope and method

- Selectively imported only candidate `players` and their retained source/review details from five historical branches. Did **not** merge branches wholesale or replace modern main league tables, emblems, UI design, title/champion labels, or archived European participants.
- Where a standalone season file was absent, created it with **active main standings archive** values, league club IDs and European entrant mappings. For existing files, preserved main's `clubs`, `qualifiers`, `standings` and `bestXi`.
- Preserved La Liga 1999-00 (148) and 2000-01 (132) provisional tier + positional rank selections. The old La Liga 2000-01 branch contained 120 candidates and was intentionally not used over main.
- All imported players are pending approval; unset tier/rank remains `null`. Do not interpret an imported candidate as an individually verified starter or official positional classification.
- 2022-23 La Liga demonstration roster is outside this evaluation scope.

## Season checkpoint

| League | Season | Candidates | Tiers | Positional ranks | Missing DOB | Missing league starts | Best XI | Render checked |
|---|---|---:|---:|---:|---:|---:|---:|---|
| La Liga | 1999-00 | 148 | 148 | 148 | 0 | 1 | 11 proposed | No |
| La Liga | 2000-01 | 132 | 132 | 132 | 0 | 0 | 11 proposed | No |
| La Liga | 2001-02 | 135 | 0 | 0 | 82 | 0 | Not selected | No |
| La Liga | 2002-03 | 128 | 0 | 0 | 96 | 0 | Not selected | No |
| La Liga | 2003-04 | 138 | 0 | 0 | 106 | 0 | Not selected | No |
| Premier League | 1999-00 | 125 | 23 | 13 | 0 | 86 | 11 proposed (unapproved) | No |
| Premier League | 2000-01 | 134 | 0 | 0 | 131 | 73 | Not selected | No |
| Premier League | 2001-02 | 161 | 0 | 0 | 158 | 66 | Not selected | No |
| Serie A | 1999-00 | 119 | 0 | 0 | 1 | 0 | Not selected | No |
| Serie A | 2000-01 | 109 | 0 | 0 | 7 | 0 | Not selected | No |
| Serie A | 2001-02 | 137 | 0 | 0 | 0 | 0 | Not selected | No |
| Bundesliga | 1999-00 | 118 | 0 | 0 | 50 | 108 | Not selected | No |
| Bundesliga | 2000-01 | 132 | 0 | 0 | 95 | 130 | Not selected | No |
| Bundesliga | 2001-02 | 138 | 0 | 0 | 85 | 99 | Not selected | No |
| Ligue 1 | 1999-00 | 111 | 0 | 0 | 3 | 19 | Not selected | No |
| Ligue 1 | 2000-01 | 141 | 0 | 0 | 15 | 20 | Not selected | No |
| Ligue 1 | 2001-02 | 134 | 0 | 0 | 11 | 6 | Not selected | No |
| **Total** | **17 seasons** | **2240** | **303** | **293** | **840** | **608** | **3 provisional** | **0/17** |

Tier distribution for the 280 existing La Liga provisional grades: S=9; A+=17; A=24; A-=47. All other tier grades are carried from previously approved-as-draft work and are **not** upgraded to final.

## Verified participant corrections during integration

1. **Bundesliga 1999-00 → 2000 Intertoto:** restored **VfL Wolfsburg**, whose real 2000 Intertoto appearance is documented by the Deutsche Fußball Liga in *Bundesliga Report 2008*, Intertoto participation table. `data/bundesliga-standings-verified-1999-2026.json` now includes Wolfsburg as the ninth qualified club; table points/ranks were not changed. Source: https://media.dfl.de/sites/2/2018/11/BL_Report_2008.pdf . Commit `443f0570bad40a6c7b96d9c3e6cb9305346de974`.
2. **Premier League 2001-02 → 2002-03 UEFA Cup:** restored **Ipswich Town**, relegated but entered via UEFA Fair Play draw. UEFA published confirmation on 28 May 2002. `data/premierleague-europe-qualification-1999-2026.json` and `data/premierleague-2001-02.json` synchronized to ten clubs; numerical table unchanged. Source: https://www.uefa.com/uefaeuropaleague/news/0185-0e6a457d7fe2-6cc5f81db13d-1000--uefa-cup-bonus-for-ipswich-and-sigma/ . Commits `0317bbb2c5643b6131bb91e08aa53780fdf3680d` and `2bf14c70463444b618ce927af5e5b2d83d9b6fda`.
3. The 1999-00 PL candidates still contain 4 ST positions exceeding the two-per-club cap: Manchester United (4), Arsenal (3), Aston Villa (3), Bradford City (4). Do not silently remove historically meaningful starters; manually resolve against season lineup starts. Further issues exist in 2000-01 and 2001-02 PL and 1999-2002 Bundesliga.

## Validation gates — independent status

| Gate | Status | Meaning |
|---|---|---|
| GitHub file read / valid JSON | **PASS 17/17** | All 17 season JSONs fetched from `main` and parsed after update |
| Candidate count | **PASS 2245** | Exact previously recorded roster total retained |
| Player ID uniqueness | **PASS 17/17** | No duplicate within season |
| Eligible-club membership | **PASS 17/17** | No candidate club outside the season's active qualifier set |
| Position enum / birth date format / tier values | **PASS** | No structural errors found in examined records |
| Positional rank collision / Best XI player references | **PASS** | Two pre-existing La Liga proposals are internally linked; 15 seasons have no rank/XI yet |
| Starter/backup position slot caps | **OPEN** | 17 over-limit club-position groups (mainly ST) |
| DOB coverage | **OPEN** | 948 blank |
| League starts coverage | **OPEN** | 573 blank (`starts` or `leagueStarts`) |
| Individual current season / historical 3-season evidence | **OPEN** | 1999-00 La Liga had 21/148 explicitly corroborated in its previous audit; full denominator evidence cannot currently be claimed |
| Historical Europe actual-entry review | **OPEN** | Some existing `europeanQualificationVerified:false` remain; correction of two specific omissions does not sign off all seasons |
| Node CLI validator run | **NOT RUN** | Added `scripts/verify-player-integration.mjs`; connector-side validation executed separately |
| GitHub Pages browser UI and crest rendering | **NOT VERIFIED** | JSON available on main is not evidence that five page tabs render correctly |

## Commit/checkpoint details

- PL candidate import: `d7e4bf9205544fee18a3187ba798cbe93a732bc6`, `48a759f3c36f76210449f663a9c8ee1b76da7896`, `ffdb93590d52531c76b24e097b74c049a7421e9a`.
- La Liga new files: `a1f757174f32e4a046f4e9eb31b7831d20810969`, `c89df8ea94c67542f80bf39f5cee822b460ac8d5`, `cd428f2ded205df9acc861594603125956649a1b`.
- Serie A new files: `0d1c629ce985f7159487b2cfa921f01f1c14d986`, `a69d96cdef6bea3414a326d5d475500780a2b015`, `c3d3da3d95018dda6d4913ec0262cb1518387fad`.
- Bundesliga new files: `06f36d8814aec37e0ae745eb87ad2bcaeea4aa72`, `55a2ad9dac2baf791d679aba62e85756e0531fdb`, `7c4dfbc9241552ba85b9e1007737b92712dbefe9`.
- Ligue 1 import: `aa4fa288a106ecb7c63b707aec23bccaf8d8d410`, `efc7f8d2d78dedb88c0b9b4971cb9232f3d0ebb4`, `8cf61ad0fc5e3d8327e3835fe9aab699886487b6`.
- Validator creation: `f9b0a20c4873128f7e63d0a1176c7608a48db99b`.
- Machine-readable snapshot: `audit/player-integration-audit-2026-10-30.json` (`c9c7fe3d8b80552d3979eaed274533eb22ebaa09`).

## Resume instructions

1. Fetch `main` fresh and run `node scripts/verify-player-integration.mjs`, plus all prior standings validators. Keep these CLI tests distinguished from the already completed connector-side subset.
2. Work **Premier League 1999-00 first**: resolve four over-cap ST groups, confirm club-season role and season primary position, populate DOB / starts with sources. Reevaluate one club/position at a time; do not invent exact player statistics.
3. Evaluate each candidate with 1997-98, 1998-99, 1999-00 (then sliding three-season windows). Source, individual performance narrative, explicit tier rationale and within-position ordering. Do not assign arbitrary tiers.
4. Record team-by-team verification and user feedback without resetting La Liga's existing 280 preliminary tier records.
5. Add Best XI only after position ranking and formation research. Keep `proposed_unapproved`.
6. Independently confirm remaining UEFA entrants and browser-test Overview, Best XI, Top Class, League Table, Statistics. Do not mark visual validation complete until actually inspected.


## First individual tier assessment — Premier League 1999-00, Manchester United (2026-10-30)

The initial integration was **not the end of tier grading**. Actual 3-season comparison and grading has now started. 17 Manchester United candidates have independent period-squad birth dates filled and 3 missing 1999-00 league starts/appearances have been recovered. 15 players now have **proposed, user-unapproved tiers** with individual Korean rationale and historical source links; Solskjær and Sheringham remain eligible-audit records with null tiers because 4 ST candidates exceed the requested two-player club quota. Yorke (29 starts, 20 league goals) and Cole (23 starts, 19 goals) currently hold the two graded ST slots; extras are retained for reconciliation, not silently dropped.

| Grade | Manchester United first pass |
|---|---|
| S | Roy Keane, Jaap Stam |
| A+ | David Beckham, Ryan Giggs, Dwight Yorke, Andrew Cole |
| A | Paul Scholes |
| A- | Denis Irwin, Gary Neville |
| B+ | Mikaël Silvestre, Phil Neville, Nicky Butt |
| B | Mark Bosnich, Henning Berg |
| C+ | Raimond van der Gouw |
| Not graded (over-cap ST) | Ole Gunnar Solskjær, Teddy Sheringham |

The ratings are explicitly qualitative and provisional. Independent full 1997-98 league figures for Jaap Stam (PSV) and Mikaël Silvestre (non-Manchester seasons) remain incomplete. Position majority of Phil Neville and several outfield defenders must be audited before final role confirmation. No rank has yet been assigned: PL ranks require all eight qualified teams for each position. Team achievements were not used as direct grade bonuses.

Sources: https://footballsquads.co.uk/eng/1999-2000/faprem/manutd.htm ; https://www.rsssf.org/players/manutd-postwarchamps.html ; https://www.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=8 ; https://www.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=7 ; https://www.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=3 ; https://fbref.com/en/awards/pfa_poy/PFA-Players-Player-of-the-Year .

Candidate grading commit: `2b67fd45f79f3300a16aea88627dfb5fb0180956`. Full machine-readable current totals: `audit/player-integration-audit-2026-10-30.json`.

### Updated totals after first club evaluation

- Candidate registrations: **2,245**, unchanged.
- Provisional tiers: **295** (former La Liga 280, new PL 15).
- Missing tiers: **1,950**.
- New top-class additions: S 2, A+ 4, A 1, A- 2. Overall counts: S 11, A+ 21, A 25, A- 49.
- Missing DOB: **948**; missing recorded starts: **573**.
- Completed league-wide ranks unchanged at 280 provisional La Liga ranks, 0 new PL ranks.
- Browser verification still outstanding and no existing UI files modified.

---

## Independent player rebuild checkpoint — Premier League 1999-00, 2026-10-30

This appended record is on branch `draft/pl-1999-00-fresh-verification-20261030` only. The earlier 130 imported Premier League 1999-00 candidates and their 15 old tentative ratings on `main` are retained for forensic comparison; **they are not the source of the new independent nominations**.

### New research artifacts

| Artifact | Count | Verification | Evaluation |
|---|---:|---|---|
| `audit/player-research/premierleague-1999-00-gk-fresh-draft.json` | 15 GK | 15/15 season appearances, starts and DOB checked against individual season sources | 15 provisional tiers/ranks; prior two years incomplete |
| `audit/player-research/premierleague-1999-00-cb-fresh-shortlist.json` | 20 CB | 18/20 league starts checked; season-majority positions still open | 20 tier/rank null |
| `audit/player-research/premierleague-1999-00-outfield-research-pool.json` | 90 provisional nomination seeds (LB/RB/DM/CM/CAM/LW/RW/ST) | Season-wide majority-position and league-start validation **not finished** | 90 tier/rank null |
| `audit/player-research/premierleague-1999-00-three-season-tier-proposals.json` | 5 graded stars drawn from those 90 | 1997-98, 1998-99, 1999-00 PL starts individually checked; 1999-00 contemporary PFA/FWA recognition | Roy Keane S, Patrick Vieira A+, David Beckham A+, Harry Kewell A+, Andy Cole A; all DRAFT |

**Research scope: 125 distinct player nomination seeds (15 GK + 20 CB + 90 other), not 125 individually approved season candidates.** There are five additional three-season tier proposals linked to the 90 seeds; do not double count. GK scores remain partial three-season assessments. Team counts: Manchester United 17; Arsenal 17; Leeds 16; Liverpool 16; Chelsea 15; Leicester 13; Aston Villa 15; Bradford 16.

### Verification executed in connected Github session

- **PASS local in-memory source-file structural check**: all four branch research files read and parsed after writing, 125 distinct club/name keys, 125 correctly formatted/real calendar DOB values, no duplicate GK rank, exactly 8 GK starters and 7 GK backups, no club-position exceeding the archival cap (CB <=3, ST <=3, rest <=2 except CM <=3).
- **PASS link integrity** of the five three-season tier proposals: all five named candidates exist in the independently compiled outfield research pool.
- **OPEN**: At least 92 outfield seed candidates (90 non-CB, 2 CB) lack independently verified 1999-00 league starts; all 110 outfield seeds require season-majority positional verification and individualized three-season performance review (five have preliminary starts/grades, not full positional audit).
- **OPEN**: Three-season histories for all 15 GKs; all 125 candidates final individual reviews; cross-club rankings except provisional GK; Best XI; world-class/top-class complete classification.
- **NOT RUN**: existing Node CLI validator. **NOT VERIFIED**: live GitHub Pages tabs, crests and player detail cards. **NOT DEPLOYED**: main site unchanged.
- **IMPORTANT** 3-5-2 Aston Villa and Leicester have three actual centre-back tactical starters; 2+1 archive nomination categories are an artificial storage constraint and must not imply the third back was always benched.
- Historical mismatch (legacy `main` GK removal): independent 1999-00 seasonal league sources show Liverpool Brad Friedel 2 starts, Chelsea Carlo Cudicini 1 start, Aston Villa Peter Enckelman 9 starts.
- **Do not mark season finished, do not merge this branch as final, and do not advance to Premier League 2000-01 without instruction.**

Existing standings, European participant records, historic C marker/stripped-title marker and UI source files have NOT been altered in this branch.


## 2026-10-30: PL 1999-00 deployable DRAFT (newer record, supersedes old PL 130 candidates)

- New 8-club independent pool: **125 candidate seeds**, with **23 proposed tiers**, **13 provisional goalkeeper ranks**, **102 unrated**. Five PFA-supported additional defender/forward tiers plus five 3-season outfield proposals and 13 goalkeeper proposals. Sources and individual qualification notes embedded in player records.
- **Best XI now proposed**, not approved: 4-4-2; Nigel Martyn; Ian Harte, Jaap Stam, Sami Hyypiä, Gary Kelly; Harry Kewell, Patrick Vieira, Roy Keane, David Beckham; Andy Cole, Dwight Yorke. Ten 1999-00 PFA XI members from eligible eight teams; Sunderland forward Kevin Phillips ineligible for archive scope, Yorke selected using 1997-98 to 1999-00 goals/starts.
- Retains old final standings, eight UEFA/Intertoto entrants, crest URLs and champion rendering, and all other seasons. Old 130 candidates archived in Git history only; no pre-existing player candidate imported into new selection source.
- **Evidence pending**: 102 zero-grade candidates; 86 incomplete individual league starts; all outfield season-majority positions; many preceding two seasons; non-GK position ranking; GK preceding two seasons. These are published as DRAFT research, **not signed-off ratings**.
- Made browser presentation minimal improvements: Korean + original name, starting status, league starts, rank, player detail evidence, and separate World Class / League Top Class counts. No redesign.
- Static JSON structural tests in connected session: **PASS** (125 unique club-player keys and IDs, 20 league rows unchanged, eight qualifiers unchanged, 11 valid Best XI refs, 13 nonconflicting goalkeeper ranks, no individual position cap errors, valid DOB formats, correct tier-review flags).
- App JS: V8 syntax parsing **PASS**. Reproducible CLI script created at `scripts/verify-pl-1999-00-draft.mjs` (CLI execution and real browser check remain separate gates).
- Publication: source-branch-to-main merge and Pages availability must be verified separately; do not confuse GitHub commit with live screen validation.
