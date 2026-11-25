# 2014 FIFA World Cup — DRAFT audit

- 2013-14 season, 32 participants, 16 evaluated, 64 matches, 171 goals; group tables recomputed and matched. All 64 scorelines and shootouts matched; CIV-JPN UTC/local date exception documented.
- 309 appeared players reviewed, 258 selected; 51 omitted by quota or role. Algeria's Bougherra omitted at CB quota; editorial selection warrants review. For four back-three teams the third CB is recorded separately in the candidate slot (user 2+1 cap), not an invented 11th starter.
- DOB: 257 resolved, 1 conflicting actual date (Godfrey Oboabona, FIFA registration 1990-09-16 vs other 1990-08-16). Glykos corrected to 1986-10-10 by FIFA and DFB. Scrape errors recorded.
- Club references: 258/258 FIFA squad-derived CSV matches (country+birth); USA club name truncations corrected by joining the USA team label. Direct official PDF text verified for two exceptions, not for every player. Club name normalization and independent full direct official review pending. PDF screenshots failed due cache miss.
- Nominal minutes independently compared to DW data for 258, 229 exact; discrepancies are preserved (DW source has known erroneous minutes). Starts and appearances independent per-match cross-check not complete.
- Positions: 47 editorial mapping exceptions and 16 generic-only cases. Lahm DM rather than RB; Robben and Müller ST; James and Messi CAM. All rankings editorial; individual match-by-match evaluation not independently verified for the whole pool.
- Tiers {"S":10,"A+":20,"A":32,"A-":50,"B+":63,"B":51,"B-":11,"C+":15,"C":5,"C-":1,"D":0}. Best XI 4-2-3-1, eleven unique IDs, position ranks consistent. No reshuffling to fit star players.
- Structural checks {"matches":true,"groupMatches":true,"goals":true,"participants":true,"evaluatedClubs":true,"groupTables":true,"uniqueIds":true,"uniqueExternalIds":true,"xi":true,"xiPositionRanks":true,"quota":true,"starterCounts":true,"rank":true,"births":true,"clubs":true,"positions":true,"pool":true,"starterCountsRule":"11 nominal slots, or 10 plus documented third CB in 2+1 candidate slot; detailed tactical roles remain editorial","allClubReferencesPresent":true,"matchScoreCrosscheck":true}.
- Added 2014 year to existing World Cup UI; existing data preserved. Real deployed page interaction not verified.
- Status draft_unapproved.
