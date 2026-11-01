# Football Archive — Premier League 2008-09 audit checkpoint

Date: **2026-11-01**. Branch: `main`. Status: **DRAFT, no user approval**.

## European eligibility check

2009-10 actual UEFA participants from 2008-09 PL: Manchester United, Liverpool, Chelsea and Arsenal UCL; Everton, Aston Villa and Fulham UEL. Seven only, all from that season; no 2009 Intertoto event. Competitors matched with the existing qualification ledger `data/premierleague-europe-qualification-1999-2026.json`, independently updated to verified.

## Candidate coverage

- **122 players** in **7** clubs, with **77** nominal starters (11 per club). Club counts: ManU 19; Liverpool 17; Chelsea 18; Arsenal 20; Everton 17; Villa 16; Fulham 15.
- Position cap per team: GK 2; CB 3; LB 2; RB 2; DM 2; CM 3; CAM 2; LW 2; RW 2; ST 3. No duplicate unique-season IDs.
- **122/122 current 2008-09 league appearances/starts/goals** populated based on club- and season-scoped historic tables (Statbunker and FBref) and individual row cross-checks. No pending current-season starts. Individual multi-source corroboration remains partial, not complete for every stat.
- Assists are entered where sources were consulted and otherwise null (never interpret null as zero). Provider discrepancies are documented: Clichy goals FBref 0 vs Statbunker 1, and other minor provider differences.
- **11/11 Best XI** athletes' 2006-07 + 2007-08 PL or appropriate other domestic league starts populated, including Bosingwa at Porto, Torres at Atlético Madrid, Young's Watford-to-Villa move and Anelka's Bolton+Chelsea 2007-08 aggregate.
- **90/122** athletes still lack at least one previous-season (2006-07 or 2007-08) domestic-league starting figure. Prior season databases only contained earlier shortlisted clubs, so those missing values must not be interpreted as zero.
- **0/122** primary season positions verified via match-by-match formation sheets. Overall inferred role is provisional, and DOB two-independent-source check incomplete.
- Tiers S 5; A+ 20; A 6; A- 26; B+ 43; B 16; B- 6; C+ 0. World Class **25**, League Top Class **57**.

## Best XI philosophy and selection

**Best XI quality outweighs rigid field position matching.** Gerrard remains CAM in individual positional ranks but occupies a 4-4-2 field CM position with Frank Lampard, who is an underlying CM. Display labels both show CM, enabled by the existing `assets/app.js` `displayPosition` handling.

4-4-2 XI: van der Sar (GK); Vidić, Ferdinand (CB); Evra (LB), Bosingwa (RB); Lampard (CM), Gerrard (CAM as CM), Ashley Young (LW), Cristiano Ronaldo (RW); Nicolas Anelka, Fernando Torres (ST).

Potential alternatives: ineligible Portsmouth Glen Johnson may not be selected regardless of PFA honors; Giggs's strong 2008-09 season acknowledged but central production of Lampard/Gerrard is favored for two middle XI slots. Likewise Torres's lower availability in 2008-09 acknowledged compared with Wayne Rooney and Robin van Persie; his high goals-per-start and prior weighted seasons used as justification. XI is not a transcription of the PFA contemporary award list.

## Distinct verification gates

1. Data-structure script via GitHub connector: **passed** unique IDs, eligible clubs, cap, complete starts/goals, continuous positional ranks, 11 distinct XI references and player-position-vs-field-position mapping.
2. Source research: **all 122 current-year basic league stat lines entered**; **11 XI past seasons** populated; remaining prior-year and match-position gaps explicitly recorded. Overall evaluations still qualitative draft.
3. Project Node CLI `scripts/verify-player-integration.mjs`: **not executed**.
4. Deployed site browser interaction, image/crest and layout check: **not independently tested**.
5. User approval: **pending**.

## Files

- `data/premierleague-2008-09.json` full 122 player data, sources, notes, XI.
- `data/premierleague-europe-qualification-1999-2026.json` source-checked seven entrants.
- `audit/player-research/premierleague-2008-09-research.md` consolidated index of all 7 club tables, 2 ranking tables and XI.
- `audit/player-research/premierleague-2008-09-{manutd,liverpool,chelsea,arsenal,everton,astonvilla,fulham}.md` club-level evidence and tier tables.
- `audit/player-research/premierleague-2008-09-ranks-{1,2}.md` combined league positional ranks.
- `audit/PLAYER_INTEGRATION_PROGRESS.md` aggregate checkpoint update follows.

**No PL 2009-10 work authorized. Stop at PL 2008-09 and solicit user review.**
