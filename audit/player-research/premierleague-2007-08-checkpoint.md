# Premier League 2007-08 checkpoint — 2026-11-01

Status: **DRAFT; user review pending**. One next season advanced from Premier League 2006-07, which had already been rated and reconciled with its Best XI. No PL 2008-09 player work undertaken.

## Scope

- **9** actual 2008-09 Europe-entering clubs: Man Utd, Chelsea, Arsenal, Liverpool UCL; Everton UEFA Cup, Aston Villa 2008 Intertoto (then UEFA Cup), Portsmouth UEFA Cup (FA Cup), Manchester City UEFA Cup (Fair Play), Tottenham UEFA Cup (League Cup).
- **172 candidate players**, **99 nominal starters** (11 per eligible club), **172 provisional grades**, **172 complete continuous within-position ranks**.
- Grades: S 4, A+ 27, A 6, A- 30, B+ 53, B 28, B- 21, C+ 3. World Class (S+A+) **31**. League Top Class (S+A++A+A-) **67**.
- Proposed formation **4-4-2**. Historical Guardian May 2008 survey (cited in University of Brighton thesis) gives **12/20** PL clubs using 4-4-2, with UEFA technical report supporting simultaneous 4-2-3-1 transition among leading teams. Club-specific formations preserved.
- 2005-06 and 2006-07 individual historical DRAFT data used only as 3-year context; **never copied old candidates to new eligible shortlist**.

## Validation

- GitHub-side JavaScript structural validation **PASS, zero errors**: eligible club match to 2008-09 qualifier ledger, unique IDs, 11/club starter allocation, candidate limits per position, DOB ISO syntax, contiguous ordinal ranks, Best XI 11 distinct valid IDs and site-supported 4-4-2 slots.
- Most importantly after prior user correction, **every Best XI player is rank #1 in one-slot role, and for CB/ST exactly #1 and #2**. 2007-08 XI: David James; Ferdinand / Vidić; Clichy / Sagna; Flamini / Fàbregas; Young / Ronaldo; Torres / Adebayor.
- League starts recorded **17/172**, missing **155** (left null rather than fabricated). 2007-08 goals recorded **46/172**. **147** players missing archived start values in at least one of 2005-06/2006-07, often because earlier European-only club shortlist was incomplete. Position-majority verification **0/172** pending; dates filled 172/172, not dual-source individually verified.
- **Node CLI validator NOT EXECUTED. Browser/actual deployed UI NOT independently inspected. User final approval NOT GIVEN.** User previously confirmed site displays through 2005-06.

## Repository files

- Main DRAFT source: `data/premierleague-2007-08.json`
- Historical European ledger: `data/premierleague-europe-qualification-1999-2026.json`
- Short research navigation: `audit/player-research/premierleague-2007-08-research.md`
- Complete 9 club files: `audit/player-research/premierleague-2007-08-{manutd,chelsea,arsenal,liverpool,everton,astonvilla,portsmouth,mancity,tottenham}.md`
- Combined position ranks: `audit/player-research/premierleague-2007-08-ranks-{1,2}.md`
- This checkpoint supplements the main aggregate log `audit/PLAYER_INTEGRATION_PROGRESS.md` (the older log's global counters have NOT yet been recalculated to include 2007-08). Updated aggregate should eventually show 23 tracked season datasets, 3102 total candidates, 1562 proposed tiers, 1540 unrated, 11 Best XI drafts.

## Stop

No 2008-09 evaluation authorized; wait for explicit user next-season instruction. Keep pre-existing site, crests, champion markers and all prior season data unchanged.
