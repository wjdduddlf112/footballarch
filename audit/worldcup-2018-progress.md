# 2018 FIFA World Cup — DRAFT audit

- 2017-18 season, 32 participants, 16 evaluated, 64 matches, 169 goals. All 64 scorelines and shootouts matched after normalizing 0/null non-shootout fields. Group table results recomputed; Group H fair-play tie-break Japan -4, Senegal -6 checked against FIFA.
- 308 appeared players considered, 268 selected, 40 omitted. Messi moved to ST based on actual 180 CF / 90 RF / 90 AM minutes; Aguero backup, Higuain omitted on single-striker quota. Loftus-Cheek replaces Delph in England CM candidate allocation. Back-three CB slot exceptions documented for Belgium and England.
- Birth dates 268/268 cross-dataset matching. Club values 268/268 linked to DW squad data; 26 name/transliteration exceptions reviewed. Official FIFA PDF screenshot timed out; direct official full independent per-row audit not completed.
- Independent openfootball match-by-match appearance and starting lineup agreement 268/268; 0 unmatched cases remain documented. Nominal minutes computed from source substitutions and dismissals, not independently cross-checked in full.
- 61 tactical mapping exceptions, 15 generic-only cases; player ratings editorial draft; not an independent match-by-match rating audit. FIFA awards used as supplementary evidence, FIFA fantasy rankings not equivalent to official Best XI.
- Tier counts {"S":5,"A+":28,"A":29,"A-":43,"B+":54,"B":66,"B-":17,"C+":20,"C":4,"C-":2,"D":0}; 4-2-3-1, XI positions/ranks checked. Structural checks {"matches":true,"groupMatches":true,"goals":true,"participants":true,"evaluatedClubs":true,"groupTables":true,"uniqueIds":true,"uniqueExternalIds":true,"xi":true,"xiPositionRanks":true,"quota":true,"starterCounts":true,"rank":true,"births":true,"clubs":true,"positions":true,"pool":true,"matchScoreCrosscheck":true}.
- Added 2018 selector; existing season JSONs untouched. Actual deployed browser interaction not verified.
- Status: draft_unapproved.

- Final readback: corrected Messi evidence text team duration to 360 minutes; public GitHub Pages HTML and JSON access attempts failed, real deployment unverified.
