# UCL Best XI — Independent repair and audit, 2026-11-14

## Purpose and approval
- Historical competition: UEFA Champions League.
- Scope inspected: all **22 UCL seasons, 1999-00 to 2020-21**, available in `data/ucl-*.json`.
- Every selected XI is **DRAFT / proposed_unapproved**. Do not imply final user approval, full match-by-match independent evidence, or UEFA official Team of the Season.
- Preserve full source player pools, club rosters, and UCL competition/group/match records.
- Corrections below address **proved data errors** and **clearly justifiable selection defects**. The rest require a proper three-season player-vs-player assessment, not mechanical choice of cup winner, finalists, or database tier.

## Verified structural findings
- All 22 season files contain an 11-player `bestXi` proposal.
- 2012-13 had a direct position conflict: Thomas Müller displayed at CAM, whereas the roster classified him as RW.
- In 2005-06 and 2006-07, a bulk Korean-name propagation error assigned the team's goalkeeper name to numerous other field players; 248 and 278 player records respectively were at risk.
- 1999-00 to 2004-05 were restored in a separate 2026-11-14 process. Its original audit expressly states that independent 3-season weighted evaluation and all historical primary positions are not yet validated. 1999-00 has only 28 and 2000-01 only 40 candidates: these cannot be considered comprehensive.

## Changes made on main

| Season | Object | Old | New | Commit |
|---|---|---|---|---|
| 2005-06 | `players[].nameKo` | 141 incorrect/misassigned names | Cross-season and same-season domestic comparisons + provisional manual transliterations | `3495c6e` |
| 2006-07 | `players[].nameKo` | 150 incorrect/misassigned names | Cross-season and same-season domestic comparisons + provisional manual transliterations | `e21a62b` |
| 2009-10 | LW Best XI | Goran Pandev | Cristiano Ronaldo | `3a8db18` |
| 2012-13 | CM Best XI | İlkay Gündoğan | Bastian Schweinsteiger | `0e9e1aa` |
| 2012-13 | CAM Best XI | Thomas Müller | Mario Götze | `0e9e1aa` |
| 2014-15 | GK Best XI | Marc-André ter Stegen | Gianluigi Buffon | `a8f81b1` |
| 2017-18 | CB Best XI | Virgil van Dijk | Raphaël Varane | `cbc0cee` |
| All UCL seasons | Validator | Early-era only primary-position assertion | Mandatory position vs primary roster slot and suspicious duplicate Korean name assertion for every UCL season | `b486b1b` |

### Reasons for selection changes
- **2009-10 LW:** Data had Goran Pandev B+ (provisional positional rank 12) in Best XI, but Cristiano Ronaldo S (rank 1) in the same LW role and seven UCL goals. That was inconsistent with individual-performance-first methodology. Inter winning the trophy is not an independent player-selection criterion.
- **2012-13 CAM:** Müller was listed as RW in the player pool, yet selected at CAM. Götze is an actual CAM at Dortmund with considerable competition impact. His selection avoids the direct position contradiction.
- **2017-18 CB:** UEFA included both Van Dijk and Varane in its technical squad. Van Dijk joined Liverpool in January 2018. Varane's sustained full-season and prior seasons' role, plus the archive's own A+ rank 2 vs Van Dijk A- rank 4, better fits the requested three-season weighted method. A competitive alternative decision remains reviewable.
- **2014-15 GK:** Both Buffon and ter Stegen played all 1,170 UCL minutes and were selected in UEFA's contemporaneous technical squad. However, the existing independent DRAFT goalkeeper evaluation ranked Buffon A+, first, and ter Stegen A, third. A weighted prior-3-season assessment also favors Buffon's established performance. Draft replacement does not itself settle the head-to-head statistically.
- **2012-13 CM:** Schweinsteiger was central to Bayern's midfield role over the season and acknowledged in UEFA's contemporary technical selection. Comparing Schweinsteiger and Gündoğan remains a nuanced historical decision; this is a DRAFT recommendation rather than a conclusively proven superiority.

### References
- https://www.uefa.com/uefachampionsleague/news/0253-0d8222ae4584-fc81fa8bf4d6-1000--uefa-champions-league-squad-of-the-season/?lang=en
- https://www.uefa.com/uefachampionsleague/history/seasons/2010/statistics/
- https://www.uefa.com/uefachampionsleague/history/seasons/2015/statistics/players/
- https://www.uefa.com/uefachampionsleague/news/0253-0d802a501f23-68765bf409b3-1000--uefa-champions-league-squad-of-the-season/
- https://www.uefa.com/MultimediaFiles/Download/TechnicalReport/competitions/UCL/01/99/10/79/1991079_DOWNLOAD.pdf
- `audit/UCL_1999_2005_BEST_XI_RESTORATION_2026_11_14.md`

## Initial season-by-season challenge queue

| Season | Priority | Audit point |
|---|---|---|
| 1999-00 | High | Very small pool (28); Mendieta's seasonal positional role; side-back and midfield comparator verification |
| 2000-01 | High | Very small pool (40); 4-3-3 claimed historical prevalence unverified |
| 2001-02 | High | 131 candidates; role-specific 4-3-1-2, midfield alternatives |
| 2002-03 | Medium | Defensive roles of Maldini and Pirlo; Nedvěd CAM vs wide-left field role |
| 2003-04 | Medium | Heavily Porto/Monaco 10 of 11; compare best individuals of other teams, not final participation |
| 2004-05 | Medium | Right-wing Luis García vs Figo and other RW; 4-3-3 validity |
| 2005-06 | High | Name propagation fixed; assess why 4-4-2 XI was preferred in context of FC Barcelona 4-3-3 and Arsenal |
| 2006-07 | High | Name propagation fixed; nominal 4-4-1-1 and 2006-07 UCL real positions |
| 2007-08 | High | Ryan Babel as LW rank 1, comparison to Giggs, Henry, Robinho, and contemporary evidence |
| 2008-09 | Medium | Barcelona-heavy selection, assess individual contribution rather than team sweep |
| 2009-10 | High | Initial 9 Inter players corrected by LW Ronaldo; further defender/CM comparison e.g. Chivu and Xavi |
| 2010-11 | Medium | Nani RW vs Messi as wide/central season role, midfield shape |
| 2011-12 | Medium | 4-2-3-1 and Messi ST historical role |
| 2012-13 | High | Position conflict fixed; nearly all tiers null; 3-year impact evaluations remain pending |
| 2013-14 | High | Atlético/Real-only XI; Neuer, Robben, and striker comparators; Bale's tier null |
| 2014-15 | High | 9 Barcelona out of 11; Čech/ter Stegen/Buffon and non-finalists individual comparison |
| 2015-16 | Medium | Real/Atlético/Barcelona concentration; individual vs results comparison |
| 2016-17 | Medium | Real-heavy 7/11; UEFA recognition and individual impact audit |
| 2017-18 | Medium | Van Dijk -> Varane DRAFT revision made; verify head-to-head after independent 3-season UCL review |
| 2018-19 | High | Sissoko A- CM selection against other candidate CMs; ungraded significant players |
| 2019-20 | High | Kimmich's season modal role (RB vs DM), and Bayern-heavy 8/11; evidence-led positional audit |
| 2020-21 | High | Chilwell and Walker compared against other highly-rated LB/RB; goalkeeper and midfield choices |

**Important:** A DRAFT tier/rank is not proof of real-world superiority; opponents with `tier: null` remain legitimate comparisons.

## Integrity audit

Repository inspection after revisions (22 files):
- 22/22: exactly 11 XI entries.
- 22/22: no selected XI entry assigned to a different position than its roster's recorded `position`.
- 22/22: no Korean name assigned to four or more differently named field players in any one season.
- This audit is file-content inspection, **not** independently executed GitHub Actions CI or actual deployed-browser smoke testing.
- **Still open**: verifying roster's real-life dominant seasonal position, match-level contribution and three-season weighted relative ranking for all selections; verifying manually transliterated names against player-specific authoritative records; confirming site deployment.

## Next stage
Re-evaluate each season's 11 roles **from the full eligible pool**, consulting UEFA records and contemporary match data, score **current season > previous > two seasons prior**, and record rejected alternatives by role. No famous-player role-shifting and no cup-win bonus. Keep Best XI `proposed_unapproved` until user approval.


## Contemporary evidence caveats (cross-checked)
- UEFA Technical Study Group's 2013-14 18-player **squad**, not a fixed XI, included **both Thibaut Courtois and Manuel Neuer** at GK. Therefore either selection must be argued on sustained player performance and 3-season weighting, rather than assuming Courtois was obviously erroneous.
  - https://www.uefa.com/uefachampionsleague/news/0252-0ce44643bfcd-c32e4b484ab1-1000--uefa-champions-league-squad-of-the-season/
- UEFA Technical Observers' 2018-19 **20-player squad** included Moussa Sissoko, and contemporary 2018-19 UEFA midfield position awards ranked **Jordan Henderson above Sissoko**. This creates a legitimate multi-candidate evaluation, *not* proof that Sissoko had no place in a squad.
  - https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/?lang=en
  - https://www.uefa.com/uefachampionsleague/news/0254-0e99d2a5caed-1a4f7686212d-1000--champions-league-positional-awards-meet-the-nominees/
- UEFA's 2017-18 technical squad explicitly acknowledged that Van Dijk joined Liverpool in January but distinguished his knock-out-round impact. Under current-season priority this is a relevant argument **for** retaining him, while historical sustained 3-season consistency remains a counterweight.
  - https://www.uefa.com/uefachampionsleague/news/0253-0d8222ae4584-fc81fa8bf4d6-1000--uefa-champions-league-squad-of-the-season/?lang=en


## 2026-11-14 independent follow-up: direct historical evidence challenges

Following a fresh inspection of all 22 `data/ucl-*.json` entries, five more *DRAFT* Best XI substitutions were applied to `main`. Each substitution retains exactly 11 players, uses the nominee's recorded positional slot, preserves the full player pool, and retains `proposed_unapproved`. This is **not a complete 22-season independent 3-year audit**.

| Season | Slot | Removed | New DRAFT pick | Rationale |
|---|---|---|---|---|
| 2007-08 | LW | Ryan Babel (Liverpool) | Robinho (Real Madrid) | UEFA records show Robinho with 4 goals and 4 assists in six tournament matches, against Babel's five goals in eleven. Different minutes and earlier seasons still require detailed comparison; this is a current-year individual impact judgment, not a team-result adjustment. |
| 2009-10 | CM | Bastian Schweinsteiger (Bayern) | Xavi Hernández (Barcelona) | Both appeared in contemporary UEFA technical season recognition; Xavi's sustained individual midfield impact across the weighting window is preferred. Strong alternative: Schweinsteiger, whose 2009-10 positional transition and performance warrant further check. |
| 2013-14 | RW | Gareth Bale (Real Madrid) | Arjen Robben (Bayern) | Robben is on UEFA's contemporary 18-player technical selection and is graded A+, position rank 1; Bale was not on that list and was ungraded in the archive. Bale's contributions, including the final, remain important but are not automatically a criterion. |
| 2013-14 | ST | Karim Benzema (Real Madrid) | Zlatan Ibrahimović (PSG) | 10 goals (second-best in tournament), technical season squad, 2011-14 individual consistency; Benzema has five UEFA assists and remains a credible alternative. |
| 2018-19 | CM | Moussa Sissoko (Tottenham) | Jordan Henderson (Liverpool) | UEFA's official midfielder award placed Henderson third (59 pts) vs Sissoko sixth (22 pts), with Henderson playing 11 matches, 799 minutes, two assists. Both remain valid season squad contenders. Henderson was subsequently assigned a **provisional A+** tier and CM rank 2, explicitly pending independent 2016-17 / 2017-18 source-level assessment. |

### Evidence links for these changes
- 2007-08 season statistics: https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/
- 2009-10 season statistics: https://www.uefa.com/uefachampionsleague/history/seasons/2010/statistics/
- 2013-14 UEFA technical squad (18 players, **not official XI**): https://www.uefa.com/uefachampionsleague/news/0252-0ce44643bfcd-c32e4b484ab1-1000--uefa-champions-league-squad-of-the-season/
- 2013-14 UEFA season statistics: https://www.uefa.com/uefachampionsleague/history/seasons/2014/statistics/
- 2018-19 UEFA coach/journalist midfielder award voting: https://www.uefa.com/uefachampionsleague/news/0254-0e99ddf91193-3a1ed0d12675-1000--frenkie-de-jong-champions-league-midfielder-of-the-season/
- 2018-19 UEFA official observations: https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/?lang=en

### Further important findings; **do not silently correct these from flawed ranks**
- UCL 2020-21: João Cancelo is nominally the #1 RB in the roster, but a match-log source explicitly places him at **LB** for multiple knockout games (vs Gladbach, Dortmund and PSG); Kyle Walker is the confirmed RB at the final. A full all-match majority-position count is required before changing either the roster role or XI. Relevant URLs: https://fbref.com/en/players/bd6351cd/matchlogs/2020-2021/c8/Joao-Cancelo-Match-Logs and https://www.uefa.com/uefachampionsleague/news/0269-123dcf8aa21b-86a3b64061cd-1000--final-preview-city-vs-chelsea/
- UCL 2020-21: Ben Chilwell is a genuine Chelsea **left wing-back**, not necessarily the nominal left-back in a flat four. UEFA's 2020-21 technical 23-player squad included Chilwell. A candidate rank of 6 from an unrelated provisional tier calculation does not alone disqualify him: https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--uefa-champions-league-squad-of-the-season/
- UCL 2009-10: the seemingly stronger tiered LB Ashley Cole suffered a February ankle fracture and missed Chelsea's Inter knockout matches. Do not automatically replace Inter's Chivu with Cole based on the archive's league-wide draft rank: https://www.uefa.com/uefachampionsleague/news/01e2-0e73c3327d5c-9a5863bc277e-1000--ashley-cole-out-for-three-months/
- UCL 2018-19: Kevin De Bruyne is provisionally listed as #2 CM despite only four UCL appearances in the current season; his three-year prestige must not mechanically beat a player contributing throughout the current tournament. A proper per-match review remains required.
- UCL 1999-00 and 2000-01 player pools of 28 and 40 are **structurally inadequate for comprehensive 16-club all-position comparisons**. Any XI is provisional until missing candidates are recruited and verified.

### Remaining status
- All 22 existing season proposals still require position-by-position player-vs-player analysis using current tournament season first, previous season second and two seasons prior third.
- Official UEFA technical **squads** and calendar-year fan teams are secondary reference material; neither constitutes an official season-specific 11.
- No title/finalist bonus, no forced 4-3-3, no cross-positional reassignment without match evidence.
- No final user approval given. All changes on `main` are draft data amendments, not final publication approvals.

### 2026-11-14 internal ranking consistency follow-up
- 2007-08 LW: Robinho A / #1, Ryan Babel A / #2 (draft swap).
- 2009-10 CM: Xavi S / #1, Frank Lampard S / #2 (draft swap); Bastian Schweinsteiger stays A+ / #4.
- 2018-19 CM: Georginio Wijnaldum A+ / #1, Jordan Henderson **provisional A+ / #2**, Moussa Sissoko A- / #3, Tanguy Ndombele A- / #4, Kevin De Bruyne A- / #5. De Bruyne's four current-year UCL appearances require independent review against the stronger two earlier seasons.
- Ranking changes are provisional relative judgments and **not** a statement that the independent three-season assessment is fully completed.

### Source-count correction and CI recovery (same day)
- Henderson is additionally verified by UEFA's positional award player statistics: 2018-19 UCL **11 appearances, 799 minutes, 2 assists**. Since the 2018-19 technical observer `squad` did not list him, a distinct category is necessary: **20 technical squad players + 1 UEFA positional award nominee = 21 independently confirmed rated players**.
- `data/ucl-2018-19.json` and `scripts/verify-uefa-2018-19-draft.mjs` were updated together; prior CI failures resulted from hard-coded 20-player expectations after adding Henderson. The 2018-19 Draft/Live GitHub Actions workflow passed on commit `805d79cf`. The GitHub Pages deployment workflow also succeeded for that commit.
- UEFA original source: https://www.uefa.com/uefachampionsleague/news/0254-0e99d2b5ab3f-637f7ec2d60d-1000--champions-league-positional-awards-facts-and-figures/
- These CI successes confirm script/browser checks, **not** independent completion of all 3-season player performance evaluations or manual inspection of the deployed site.
