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
