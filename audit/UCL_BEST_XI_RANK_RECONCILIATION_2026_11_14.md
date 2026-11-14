# UCL 1999-00–2020-21 — Best XI / position rank reconciliation audit (2026-11-14)

## Scope and result
- Scope: the 22 existing UCL season JSON files (`data/ucl-1999-00.json` … `data/ucl-2020-21.json`), with 11 candidate Best XI players per season.
- Pre-change finding: 77 XI *slots* (68 distinct season+position combinations across 16 seasons) used a candidate other than the archived #1 for that role. This was an inconsistency between a separately selected Best XI and provisional player ranks, **not proof that the old #1 was the better UEFA Champions League performer**.
- Result of this intervention: no unselected rank #1 for any occupied role, and no excluded top-2 rank for positions with two XI seats, under the updated automated validator.
- Main-branch commits:
  - `60e1c517b228ba308b0b715ad234fa32eb56366d` — 2005-06 to 2008-09 initial role/rank reconciliation
  - `eb06f7a4ac917b16c4609b529f1a39bb6a5b683a` — 2009-10 to 2012-13, two central-defender choices challenged
  - `54a91ba49d54959d784c9947ddda0ab18463b00b` — 2013-14 to 2016-17
  - `000931b13333db146db3d9e2f09d90d8cae8a557` — 2017-18 to 2018-19
  - `26c67aad69952b65ac1f1265b196581d5f05dc9a` — 2019-20 to 2020-21
  - `d12f372b71bc316fb28ddff84d03da6571a0e896` — 2006-07, 2007-08, 2010-11 second CB rank slot
  - `353635a64f3fc3ffb14e201f2b5edfae1851c608` — 2011-12, 2014-15 second CB selection
  - `9417469e9bb56bfce0da902fb65863ef8e6d5c23` — 2008-09 second CM role correction
  - `744a6d63d361011609c6b5c53a00183f86ee1ec0` — adds top-N rank vs Best XI integrity test
- Exactly 5 changes to XI identity during this intervention:
  1. 2009-10 CB: Walter Samuel → Gerard Piqué (2010 UEFA Defender of the Year nominee and prior UCL performance).
  2. 2010-11 CB: Thiago Silva → Nemanja Vidić (2010/11 UEFA Technical Report, finalist and sustained recent UCL contribution).
  3. 2011-12 CB: Sergio Ramos → Carles Puyol (sustained 2009–12 UCL record, already archived #2 in the same position).
  4. 2014-15 CB: Giorgio Chiellini → Javier Mascherano (main-stage CB role and 2015 final starting XI; Chiellini missed final through injury).
  5. 2014-15 CM: Claudio Marchisio → Andrés Iniesta (UEFA 2015 observer list plus direct midseason UCL contribution; both were viable alternatives).
- Provisional grade adjustments were used alongside rank ordering where the retained XI player had a lower archived tier. These are **UCL-context DRAFT hypotheses**, not retrospective claims that every player has passed a full personal 3-season match-by-match audit. Previous domestic-source fields remain preserved; any explicit UCL tier-source override is separately tagged.
- Current best XI proposals remain `proposed_unapproved`. Existing game results, group/match data and other competitions were not intentionally altered.

## Discrepancy audit by season
| Season | Distinct roles formerly excluding #1 | Notes |
|---|---:|---|
| 1999-00 | 0 | Existing 11-person draft restored earlier, tiny 28-player candidate pool |
| 2000-01 | 0 | Existing 11-person draft restored earlier, tiny 40-player candidate pool |
| 2001-02 | 0 | Earlier XI restoration; independent historical validation incomplete |
| 2002-03 | 0 | Earlier XI restoration; historical modal roles still require audit |
| 2003-04 | 0 | Earlier XI restoration; finalist/club concentration requires audit |
| 2004-05 | 0 | Earlier XI restoration; 2004-05 RW competitors require audit |
| 2005-06 | 5 | GK Lehmann award; RW Giuly; RB Eboué 2006 defensive nomination; ST candidate comparison |
| 2006-07 | 4 | GK Čech 2007 award; double-CB Maldini position corrected |
| 2007-08 | 4 | GK Čech 2008 award; CM Lampard 2008 award; double-CB Terry rank corrected |
| 2008-09 | 5 | GK Van der Sar 2009 award; RW Messi 2009 award; Xavi+Iniesta now CM top two |
| 2009-10 | 5 | 2010 UEFA awards César, Maicon, Milito; CB Samuel → Piqué |
| 2010-11 | 4 | CB Silva → Vidić, Vidić+Piqué now top two |
| 2011-12 | 5 | ST Messi 14 UCL goals; CB Ramos → Puyol |
| 2012-13 | 6 | Bayern UCL midfield and Lewandowski knockout goals, ranks provisional |
| 2013-14 | 4 | UEFA technical observer list supports Courtois, Gabi, Modrić, Di María roles |
| 2014-15 | 1 | CB Chiellini → Mascherano, CM Marchisio → Iniesta; Suarez current-season UCL contribution |
| 2015-16 | 5 | Retained selected XI; domestic-grade conflict re-evaluated provisionally |
| 2016-17 | 1 | Lewandowski–Cavani comparison, rankings still DRAFT |
| 2017-18 | 4 | Salah/Mane direct UCL production; UCL sources used |
| 2018-19 | 2 | Mane and Tadić recognized in UEFA contemporary observer selection |
| 2019-20 | 4 | Neuer and Gnabry, UEFA 2020 technical observers and 9 UCL goals |
| 2020-21 | 7 | Mendy UEFA goalkeeping award and Haaland UEFA forward award; Walker/Cancelo modal position requires separate check |
| **Total** | **68** | **All occupied-position #1 conflicts eliminated on stored provisional ranks** |

## Ongoing hard limits — do not misrepresent as completed research
1. This is **completed archive ranking-vs-XI reconciliation**, not a complete independent UEFA Champions League performance reassessment for all ~6,000 nominated players or their preceding two seasons. Full match-by-match and 3-season evidence is still missing for many cases.
2. The source-linked 2012-13–2018-19 conditional domestic rating imports and 519 originally unrated nominees remain subject to independent UCL verification. A domestic-league provisional tier is *not* equivalent to a validated UCL three-season individual tier.
3. The 1999-00 and 2000-01 candidate pools (28 and 40) are incomplete relative to the intended full qualifying-team nomination process; top-N consistency for a small pool is not proof that the XI is historically exhaustive.
4. Complex positional roles (e.g. Lahm 2013-14 RB/DM; Cancelo 2020-21 LB/RB, Chilwell LWB/LB) must not be automatically converted without a modal-match role audit.
5. Award nominations and UEFA technical squads are contemporary corroboration, **not official UEFA Best XI positional rankings**. Titles and finalist status were not automatically counted as individual merit.

## Reproducible guardrail and test
- `scripts/verify-uefa-best-xi-completeness.mjs` now asserts every occupied UCL role has the best N **ranked and graded** candidates in its Best XI selections (N=1 for most roles, N=2 for duplicate CB/CM/ST roles). No position may silently have a #1 excluded or a #2 excluded when two places exist.
- All entries retain draft status. The guardrail enforces **internal consistency**, while the external historical-evidence audit remains independent.
- GitHub Actions job: `Verify UEFA Best XI completeness and early UCL browser`, workflow `.github/workflows/verify-uefa-bestxi-completeness.yml`.
- The initially updated guardrail exposed a further 2008-09 CM inconsistency (Xavi #1, Lampard #2, Iniesta selected); this was corrected to Xavi #1 / Iniesta #2 in commit `9417469` on the basis of the 2009 UEFA midfielder award/nomination context.
- Final Actions completion should be checked against the exact head SHA; a successful JSON completeness check must not be relabeled as a completed independent historical review or as a confirmed live browser test.

## Primary contemporaneous sources
- UEFA historical club individual awards: https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/
- 2005/06 UEFA award nominations: https://www.uefa.com/newsfiles/444708.pdf
- 2008/09 UEFA midfielder nominees: https://www.uefa.com/uefachampionsleague/news/01dc-0e72b1443b6a-fc1c2ad226e5-1000--club-football-awards-nominees-in-line/
- 2010/11 UEFA technical report: https://www.uefa.com/MultimediaFiles/Download/TechnicalReport/competitions/UCL/01/68/34/73/1683473_DOWNLOAD.pdf
- 2011/12 UEFA stats: https://www.uefa.com/uefachampionsleague/history/seasons/2012/statistics/
- 2013/14 UEFA technical squad: https://www.uefa.com/uefachampionsleague/news/0252-0ce44643bfcd-c32e4b484ab1-1000--uefa-champions-league-squad-of-the-season/
- 2014/15 UEFA technical report: https://www.uefa.com/MultimediaFiles/Download/uefaorg/General/02/27/33/33/2273333_DOWNLOAD.pdf
- 2018/19 UEFA technical squad: https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- 2019/20 UEFA technical squad: https://www.uefa.com/uefachampionsleague/news/0260-103d6b6179e6-7a1932c7a58c-1000--uefa-champions-league-squad-of-the-season/
- 2020/21 UEFA technical squad: https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--uefa-champions-league-squad-of-the-season/
- Mendy 2020/21 GK award: https://www.uefa.com/uefachampionsleague/news/026c-1317b1d16759-056f2e78eadd-1000--goalkeeper-of-the-season-mendy/
- Haaland 2020/21 forward award: https://www.uefa.com/uefachampionsleague/news/026c-1317bed66b10-0c90556ae125-1000--champions-league-forward-of-the-season-erling-haaland/
