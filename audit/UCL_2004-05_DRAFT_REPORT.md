# UEFA Champions League 2004-05 — Competition and Player Research (DRAFT)

**Updated 2026-11-12 · user approval NOT granted · partial player investigation.**

**Three-season assessment period:** 2002-03 (lowest weight) → 2003-04 → 2004-05 (highest weight). All individual tiers prioritize 2004-05 UEFA Champions League contributions and recurring player-level form; **club tournament finish is not itself a player grade**.

## 1. Audit status

| Field | Stored / verified | Limitations |
|---|---|---|
| Entrants | 32 clubs | Group-stage entrants only; qualifying rounds not included |
| Group-stage tables | 8 groups / 32 rows | 96 match scores recomputed, group W/D/L/GF/GA/GD/PTS reconciled |
| Qualification cohort | 16 round-of-16 clubs | All 16 contain source-linked players |
| Final tournament games | 96 groups + 16 R16 + 8 QF + 4 SF + 1 final = 125 | Most venue fields unknown |
| UEFA goals scored on field | **331** | 2 abandoned matches credited based on score when stopped |
| Official adjudicated match score sum | **335** | 0-1 changed to 0-3 for both abandoned fixtures, +4 score-table goals |
| Player research pool | 246 unique candidates | This is NOT a finalized eligible starter+reserve selection |
| Source-confirmed individual starting match | 192 candidates | 16×11 opening fixtures + later confirmed starts, not season-long role |
| Other confirmed substitutions / participation | 54 | Verify exact starts/role minutes for all candidates |
| Official final starting XI | 22 (11 each) | 2005 final XI is not representative for whole season |
| Used final substitutes | 6 | Three from each final club |
| Birth dates | 206 populated | Most reused from existing Football Archive domestic league datasets, themselves DRAFT; two-source DOB audit incomplete |
| 2004-05 domestic league cross-links | 195 | Domestic 2004-05 starts are **NOT UCL starts** |
| Current UCL detailed starts/minutes | 1 / 1 | Do not infer from domestic match starts |
| 3-season qualitative provisional tiers | 96 graded / 150 unrated | Provisional, all user-unapproved |
| Overall positional rankings | 0 | No independently verified seasonal relative rankings |
| Best XI | 0 | Empty until full roster/formation and peer review |
| Public GitHub Pages/browser | NOT VERIFIED | Repository writes and JavaScript parse checks do not establish Pages deployment |

## 2. Why UEFA 331 goals vs finalized game scores 335 goals?

The 2004-05 UEFA statistics archive reports **331 goals**. The sum of **administratively decided results** is **335**:

- **AS Roma 0–3 FC Dynamo Kyiv, 2004-09-15:** The match was abandoned at half-time when Dynamo led **1–0**. UEFA then awarded Dynamo a 3–0 decision, adding two *administrative* goals relative to the score when abandoned.
- **FC Internazionale Milano 0–3 AC Milan, 2005-04-12:** The second leg was abandoned when Milan led **1–0**, and officially awarded as **0–3**, adding two more administratively recorded goals.
- 331 + (3−1) + (3−1) = **335**. Both match objects record `awardedResult:true`, their `scoreAtAbandonment`, and the officially adjudicated `homeGoals/awayGoals`; the UI Goals card correctly uses 331.

Sources: [UEFA 2004-05 stats](https://www.uefa.com/uefachampionsleague/history/seasons/2004/statistics/), [RSSSF detailed competition results](https://www.rsssf.org/ec/ec200405.html), [UEFA historical abandoned-match reports](https://www.uefa.com/MultimediaFiles/Download/EuroExperience/uefaorg/Publications/01/53/55/84/1535584_DOWNLOAD.pdf).

## 3. All 32 clubs, qualifying positions and standings

### Group A

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | AS Monaco FC | 6 | 4 | 0 | 2 | 10 | 4 | 6 | 12 | round_of_16 |
| 2 | Liverpool FC | 6 | 3 | 1 | 2 | 6 | 3 | 3 | 10 | round_of_16 |
| 3 | Olympiacos FC | 6 | 3 | 1 | 2 | 5 | 5 | 0 | 10 | uefa_cup |
| 4 | RC Deportivo de La Coruña | 6 | 0 | 2 | 4 | 0 | 9 | -9 | 2 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-15 | Liverpool FC | 2–0 | AS Monaco FC | — |
| 2004-09-15 | RC Deportivo de La Coruña | 0–0 | Olympiacos FC | — |
| 2004-09-28 | AS Monaco FC | 2–0 | RC Deportivo de La Coruña | — |
| 2004-09-28 | Olympiacos FC | 1–0 | Liverpool FC | — |
| 2004-10-19 | Liverpool FC | 0–0 | RC Deportivo de La Coruña | — |
| 2004-10-19 | AS Monaco FC | 2–1 | Olympiacos FC | — |
| 2004-11-03 | RC Deportivo de La Coruña | 0–1 | Liverpool FC | — |
| 2004-11-03 | Olympiacos FC | 1–0 | AS Monaco FC | — |
| 2004-11-23 | AS Monaco FC | 1–0 | Liverpool FC | — |
| 2004-11-23 | Olympiacos FC | 1–0 | RC Deportivo de La Coruña | — |
| 2004-12-08 | RC Deportivo de La Coruña | 0–5 | AS Monaco FC | — |
| 2004-12-08 | Liverpool FC | 3–1 | Olympiacos FC | — |

### Group B

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Bayer 04 Leverkusen | 6 | 3 | 2 | 1 | 13 | 7 | 6 | 11 | round_of_16 |
| 2 | Real Madrid CF | 6 | 3 | 2 | 1 | 11 | 8 | 3 | 11 | round_of_16 |
| 3 | FC Dynamo Kyiv | 6 | 3 | 1 | 2 | 11 | 8 | 3 | 10 | uefa_cup |
| 4 | AS Roma | 6 | 0 | 1 | 5 | 4 | 16 | -12 | 1 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-15 | Bayer 04 Leverkusen | 3–0 | Real Madrid CF | — |
| 2004-09-15 | AS Roma | 0–3 | FC Dynamo Kyiv | 0–1 at abandonment → 0–3 |
| 2004-09-28 | FC Dynamo Kyiv | 4–2 | Bayer 04 Leverkusen | — |
| 2004-09-28 | Real Madrid CF | 4–2 | AS Roma | — |
| 2004-10-19 | Real Madrid CF | 1–0 | FC Dynamo Kyiv | — |
| 2004-10-19 | Bayer 04 Leverkusen | 3–1 | AS Roma | — |
| 2004-11-03 | FC Dynamo Kyiv | 2–2 | Real Madrid CF | — |
| 2004-11-03 | AS Roma | 1–1 | Bayer 04 Leverkusen | — |
| 2004-11-23 | Real Madrid CF | 1–1 | Bayer 04 Leverkusen | — |
| 2004-11-23 | FC Dynamo Kyiv | 2–0 | AS Roma | — |
| 2004-12-08 | Bayer 04 Leverkusen | 3–0 | FC Dynamo Kyiv | — |
| 2004-12-08 | AS Roma | 0–3 | Real Madrid CF | — |

### Group C

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Juventus FC | 6 | 5 | 1 | 0 | 6 | 1 | 5 | 16 | round_of_16 |
| 2 | FC Bayern München | 6 | 3 | 1 | 2 | 12 | 5 | 7 | 10 | round_of_16 |
| 3 | AFC Ajax | 6 | 1 | 1 | 4 | 6 | 10 | -4 | 4 | uefa_cup |
| 4 | Maccabi Tel-Aviv FC | 6 | 1 | 1 | 4 | 4 | 12 | -8 | 4 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-15 | AFC Ajax | 0–1 | Juventus FC | — |
| 2004-09-15 | Maccabi Tel-Aviv FC | 0–1 | FC Bayern München | — |
| 2004-09-28 | FC Bayern München | 4–0 | AFC Ajax | — |
| 2004-09-28 | Juventus FC | 1–0 | Maccabi Tel-Aviv FC | — |
| 2004-10-19 | Juventus FC | 1–0 | FC Bayern München | — |
| 2004-10-19 | AFC Ajax | 3–0 | Maccabi Tel-Aviv FC | — |
| 2004-11-03 | FC Bayern München | 0–1 | Juventus FC | — |
| 2004-11-03 | Maccabi Tel-Aviv FC | 2–1 | AFC Ajax | — |
| 2004-11-23 | Juventus FC | 1–0 | AFC Ajax | — |
| 2004-11-23 | FC Bayern München | 5–1 | Maccabi Tel-Aviv FC | — |
| 2004-12-08 | AFC Ajax | 2–2 | FC Bayern München | — |
| 2004-12-08 | Maccabi Tel-Aviv FC | 1–1 | Juventus FC | — |

### Group D

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Olympique Lyonnais | 6 | 4 | 1 | 1 | 17 | 8 | 9 | 13 | round_of_16 |
| 2 | Manchester United FC | 6 | 3 | 2 | 1 | 14 | 9 | 5 | 11 | round_of_16 |
| 3 | Fenerbahçe SK | 6 | 3 | 0 | 3 | 10 | 13 | -3 | 9 | uefa_cup |
| 4 | AC Sparta Praha | 6 | 0 | 1 | 5 | 2 | 13 | -11 | 1 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-15 | Fenerbahçe SK | 1–0 | AC Sparta Praha | — |
| 2004-09-15 | Olympique Lyonnais | 2–2 | Manchester United FC | — |
| 2004-09-28 | Manchester United FC | 6–2 | Fenerbahçe SK | — |
| 2004-09-28 | AC Sparta Praha | 1–2 | Olympique Lyonnais | — |
| 2004-10-19 | AC Sparta Praha | 0–0 | Manchester United FC | — |
| 2004-10-19 | Fenerbahçe SK | 1–3 | Olympique Lyonnais | — |
| 2004-11-03 | Manchester United FC | 4–1 | AC Sparta Praha | — |
| 2004-11-03 | Olympique Lyonnais | 4–2 | Fenerbahçe SK | — |
| 2004-11-23 | AC Sparta Praha | 0–1 | Fenerbahçe SK | — |
| 2004-11-23 | Manchester United FC | 2–1 | Olympique Lyonnais | — |
| 2004-12-08 | Fenerbahçe SK | 3–0 | Manchester United FC | — |
| 2004-12-08 | Olympique Lyonnais | 5–0 | AC Sparta Praha | — |

### Group E

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Arsenal FC | 6 | 2 | 4 | 0 | 11 | 6 | 5 | 10 | round_of_16 |
| 2 | PSV Eindhoven | 6 | 3 | 1 | 2 | 6 | 7 | -1 | 10 | round_of_16 |
| 3 | Panathinaikos FC | 6 | 2 | 3 | 1 | 11 | 8 | 3 | 9 | uefa_cup |
| 4 | Rosenborg BK | 6 | 0 | 2 | 4 | 6 | 13 | -7 | 2 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-14 | Panathinaikos FC | 2–1 | Rosenborg BK | — |
| 2004-09-14 | Arsenal FC | 1–0 | PSV Eindhoven | — |
| 2004-09-29 | PSV Eindhoven | 1–0 | Panathinaikos FC | — |
| 2004-09-29 | Rosenborg BK | 1–1 | Arsenal FC | — |
| 2004-10-20 | Rosenborg BK | 1–2 | PSV Eindhoven | — |
| 2004-10-20 | Panathinaikos FC | 2–2 | Arsenal FC | — |
| 2004-11-02 | PSV Eindhoven | 1–0 | Rosenborg BK | — |
| 2004-11-02 | Arsenal FC | 1–1 | Panathinaikos FC | — |
| 2004-11-24 | Rosenborg BK | 2–2 | Panathinaikos FC | — |
| 2004-11-24 | PSV Eindhoven | 1–1 | Arsenal FC | — |
| 2004-12-07 | Panathinaikos FC | 4–1 | PSV Eindhoven | — |
| 2004-12-07 | Arsenal FC | 5–1 | Rosenborg BK | — |

### Group F

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | AC Milan | 6 | 4 | 1 | 1 | 10 | 3 | 7 | 13 | round_of_16 |
| 2 | FC Barcelona | 6 | 3 | 1 | 2 | 9 | 6 | 3 | 10 | round_of_16 |
| 3 | FC Shakhtar Donetsk | 6 | 2 | 0 | 4 | 5 | 9 | -4 | 6 | uefa_cup |
| 4 | Celtic FC | 6 | 1 | 2 | 3 | 4 | 10 | -6 | 5 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-14 | Celtic FC | 1–3 | FC Barcelona | — |
| 2004-09-14 | FC Shakhtar Donetsk | 0–1 | AC Milan | — |
| 2004-09-29 | FC Barcelona | 3–0 | FC Shakhtar Donetsk | — |
| 2004-09-29 | AC Milan | 3–1 | Celtic FC | — |
| 2004-10-20 | AC Milan | 1–0 | FC Barcelona | — |
| 2004-10-20 | FC Shakhtar Donetsk | 3–0 | Celtic FC | — |
| 2004-11-02 | FC Barcelona | 2–1 | AC Milan | — |
| 2004-11-02 | Celtic FC | 1–0 | FC Shakhtar Donetsk | — |
| 2004-11-24 | AC Milan | 4–0 | FC Shakhtar Donetsk | — |
| 2004-11-24 | FC Barcelona | 1–1 | Celtic FC | — |
| 2004-12-07 | FC Shakhtar Donetsk | 2–0 | FC Barcelona | — |
| 2004-12-07 | Celtic FC | 0–0 | AC Milan | — |

### Group G

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | FC Internazionale Milano | 6 | 4 | 2 | 0 | 14 | 3 | 11 | 14 | round_of_16 |
| 2 | SV Werder Bremen | 6 | 4 | 1 | 1 | 12 | 6 | 6 | 13 | round_of_16 |
| 3 | Valencia CF | 6 | 2 | 1 | 3 | 6 | 10 | -4 | 7 | uefa_cup |
| 4 | RSC Anderlecht | 6 | 0 | 0 | 6 | 4 | 17 | -13 | 0 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-14 | Valencia CF | 2–0 | RSC Anderlecht | — |
| 2004-09-14 | FC Internazionale Milano | 2–0 | SV Werder Bremen | — |
| 2004-09-29 | SV Werder Bremen | 2–1 | Valencia CF | — |
| 2004-09-29 | RSC Anderlecht | 1–3 | FC Internazionale Milano | — |
| 2004-10-20 | RSC Anderlecht | 1–2 | SV Werder Bremen | — |
| 2004-10-20 | Valencia CF | 1–5 | FC Internazionale Milano | — |
| 2004-11-02 | SV Werder Bremen | 5–1 | RSC Anderlecht | — |
| 2004-11-02 | FC Internazionale Milano | 0–0 | Valencia CF | — |
| 2004-11-24 | RSC Anderlecht | 1–2 | Valencia CF | — |
| 2004-11-24 | SV Werder Bremen | 1–1 | FC Internazionale Milano | — |
| 2004-12-07 | Valencia CF | 0–2 | SV Werder Bremen | — |
| 2004-12-07 | FC Internazionale Milano | 3–0 | RSC Anderlecht | — |

### Group H

| Rank | Club | P | W | D | L | GF | GA | GD | Pts | Outcome |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Chelsea FC | 6 | 4 | 1 | 1 | 10 | 3 | 7 | 13 | round_of_16 |
| 2 | FC Porto | 6 | 2 | 2 | 2 | 4 | 6 | -2 | 8 | round_of_16 |
| 3 | PFC CSKA Moskva | 6 | 2 | 1 | 3 | 5 | 5 | 0 | 7 | uefa_cup |
| 4 | Paris Saint-Germain FC | 6 | 1 | 2 | 3 | 3 | 8 | -5 | 5 | eliminated |

| Date | Home | Score (decided) | Away | Administrative result |
|---|---|---:|---|---|
| 2004-09-14 | Paris Saint-Germain FC | 0–3 | Chelsea FC | — |
| 2004-09-14 | FC Porto | 0–0 | PFC CSKA Moskva | — |
| 2004-09-29 | PFC CSKA Moskva | 2–0 | Paris Saint-Germain FC | — |
| 2004-09-29 | Chelsea FC | 3–1 | FC Porto | — |
| 2004-10-20 | Chelsea FC | 2–0 | PFC CSKA Moskva | — |
| 2004-10-20 | Paris Saint-Germain FC | 2–0 | FC Porto | — |
| 2004-11-02 | PFC CSKA Moskva | 0–1 | Chelsea FC | — |
| 2004-11-02 | FC Porto | 0–0 | Paris Saint-Germain FC | — |
| 2004-11-24 | PFC CSKA Moskva | 0–1 | FC Porto | — |
| 2004-11-24 | Chelsea FC | 0–0 | Paris Saint-Germain FC | — |
| 2004-12-07 | Paris Saint-Germain FC | 1–3 | PFC CSKA Moskva | — |
| 2004-12-07 | FC Porto | 2–1 | Chelsea FC | — |

## 4. All knockout fixtures and the 2005 final

### round_of_16

| First club | Second club | Combined score | Advance | First leg | Second leg | Special resolution |
|---|---|---:|---|---|---|---|
| Real Madrid CF | Juventus FC | 1–2 | Juventus FC | 2005-02-22 1–0 | 2005-03-09 2–0 | AET |
| FC Porto | FC Internazionale Milano | 2–4 | FC Internazionale Milano | 2005-02-23 1–1 | 2005-03-15 3–1 | — |
| FC Barcelona | Chelsea FC | 4–5 | Chelsea FC | 2005-02-23 2–1 | 2005-03-08 4–2 | — |
| SV Werder Bremen | Olympique Lyonnais | 2–10 | Olympique Lyonnais | 2005-02-23 0–3 | 2005-03-08 7–2 | — |
| Liverpool FC | Bayer 04 Leverkusen | 6–2 | Liverpool FC | 2005-02-22 3–1 | 2005-03-09 1–3 | — |
| PSV Eindhoven | AS Monaco FC | 3–0 | PSV Eindhoven | 2005-02-22 1–0 | 2005-03-09 0–2 | — |
| Manchester United FC | AC Milan | 0–2 | AC Milan | 2005-02-23 0–1 | 2005-03-08 1–0 | — |
| FC Bayern München | Arsenal FC | 3–2 | FC Bayern München | 2005-02-22 3–1 | 2005-03-09 1–0 | — |

### quarter_final

| First club | Second club | Combined score | Advance | First leg | Second leg | Special resolution |
|---|---|---:|---|---|---|---|
| Liverpool FC | Juventus FC | 2–1 | Liverpool FC | 2005-04-05 2–1 | 2005-04-13 0–0 | — |
| AC Milan | FC Internazionale Milano | 5–0 | AC Milan | 2005-04-06 2–0 | 2005-04-12 0–3 | 2nd leg 0–1 abandoned, awarded 0–3 |
| Olympique Lyonnais | PSV Eindhoven | 2–2 | PSV Eindhoven | 2005-04-05 1–1 | 2005-04-13 1–1 | penalties 2–4 |
| Chelsea FC | FC Bayern München | 6–5 | Chelsea FC | 2005-04-06 4–2 | 2005-04-12 3–2 | — |

### semi_final

| First club | Second club | Combined score | Advance | First leg | Second leg | Special resolution |
|---|---|---:|---|---|---|---|
| Chelsea FC | Liverpool FC | 0–1 | Liverpool FC | 2005-04-27 0–0 | 2005-05-03 1–0 | — |
| AC Milan | PSV Eindhoven | 3–3 | AC Milan | 2005-04-26 2–0 | 2005-05-04 3–1 | away goals |

### final

2005-05-25: Liverpool FC 3–3 AC Milan after extra time; penalties 3–2, champion Liverpool FC. Atatürk Olympic Stadium, Istanbul.

## 5. Evaluated clubs: full player research pool (NOT final XI + backups)

**Qualification:** Top 2 teams from each of eight groups. **Registration rule:** The `players` list includes players tied to a specific 2004-05 match lineup or substitute appearance; it is not a final season-long XI+one-backup-per-position selection. `role` describes the type of historical evidence, not tier or reserve nomination. **Positions left/right separated, but dominant 2004-05 UCL role pending**.

### AS Monaco FC — 17 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 플라비오 로마 | Flavio Roma | 1974-06-21 | One-match starter | 34 | — | — | — | — | — |
| CB | 가엘 지베 | Gaël Givet | 1981-10-09 | One-match starter | 33 | — | — | — | — | — |
| CB | 하산 엘 파키리 | Hassan El-Fakiri | — | Substitute verified | — | — | — | — | — | — |
| CB | 쥘리앵 로드리게스 | Julien Rodriguez | 1978-06-11 | One-match starter | 16 | — | — | — | — | — |
| CB | 세바스티앵 스킬라치 | Sébastien Squillaci | 1980-08-11 | One-match starter | 28 | — | — | — | — | B+ |
| LB | 파트리스 에브라 | Patrice Evra | 1981-05-15 | One-match starter | 35 | — | — | — | — | A0 |
| RB | 마이콘 | Maicon | 1981-07-26 | One-match starter | 30 | — | — | — | — | — |
| DM | 아키스 지코스 | Akis Zikos | 1974-06-01 | One-match starter | 31 | — | — | — | — | B+ |
| DM | 디에고 페레스 | Diego Pérez | 1980-05-18 | One-match starter | 20 | — | — | — | — | — |
| DM | 루카스 베르나르디 | Lucas Bernardi | 1977-09-27 | One-match starter | 23 | — | — | — | — | — |
| CM | 지미 후안 | Jimmy Juan | — | Substitute verified | — | — | — | — | — | — |
| CM | 폰투스 파르네루드 | Pontus Farnerud | 1980-06-04 | One-match starter | 12 | — | — | — | — | — |
| ST | 에마뉘엘 아데바요르 | Emmanuel Adebayor | 1984-02-26 | One-match starter | 29 | — | — | — | — | — |
| ST | 에르네스토 체반톤 | Ernesto Chevantón | 1980-08-12 | Substitute verified | 23 | — | — | — | — | — |
| ST | 하비에르 사비올라 | Javier Saviola | 1981-12-11 | One-match starter | 27 | — | — | — | — | B+ |
| ST | 모하메드 칼론 | Mohamed Kallon | 1979-10-06 | One-match starter | 27 | — | — | — | — | — |
| ST | 술레만 카마라 | Souleymane Camara | — | Substitute verified | — | — | — | — | — | — |

### Liverpool FC — 17 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 예지 두데크 | Jerzy Dudek | 1973-03-23 | Final starter | 24 | 8 | — | — | — | A0 |
| CB | 제이미 캐러거 | Jamie Carragher | 1978-01-28 | Final starter | 38 | 13 | — | — | — | A+ |
| CB | 사미 휘피애 | Sami Hyypiä | 1973-10-07 | Final starter | 32 | 13 | — | — | — | A0 |
| LB | 지미 트라오레 | Djimi Traoré | 1980-03-01 | Final starter | 18 | 10 | — | — | — | — |
| LB | 욘 아르네 리세 | John Arne Riise | 1980-09-24 | Final starter | 34 | 13 | — | — | — | — |
| RB | 호세미 | Josemi | 1979-11-15 | One-match starter | 11 | 6 | — | — | — | — |
| RB | 스티브 피넌 | Steve Finnan | 1976-04-20 | Final starter | 29 | 13 | — | — | — | B+ |
| DM | 디트마어 하만 | Dietmar Hamann | 1973-08-27 | Final sub | 23 | 8 | — | — | — | — |
| DM | 이고르 비슈찬 | Igor Bišćan | 1978-05-04 | Substitute verified | 8 | 9 | — | — | — | — |
| CM | 스티븐 제라드 | Steven Gerrard | 1980-05-30 | Final starter | 28 | 8 | 8 | 2 | 1 | S |
| CM | 사비 알론소 | Xabi Alonso | 1981-11-25 | Final starter | 20 | 8 | — | — | — | A0 |
| LW | 해리 큐얼 | Harry Kewell | 1978-09-22 | Final starter | 15 | 10 | — | — | — | — |
| LW | 스티븐 워녹 | Stephen Warnock | 1981-12-12 | Substitute verified | 11 | — | — | — | — | — |
| RW | 루이스 가르시아 | Luis García | 1978-06-24 | Final starter | 26 | 12 | — | 5 | — | A0 |
| RW | 블라디미르 슈미체르 | Vladimír Šmicer | 1973-05-24 | Final sub | — | 6 | — | — | — | — |
| ST | 지브릴 시세 | Djibril Cissé | 1981-08-12 | Final sub | 10 | 7 | — | — | — | — |
| ST | 밀란 바로시 | Milan Baroš | 1981-10-28 | Final starter | 22 | 12 | — | — | — | — |

### Bayer 04 Leverkusen — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 한스외르크 부트 | Hans-Jörg Butt | 1974-05-28 | One-match starter | 34 | — | — | — | — | B+ |
| CB | 주앙 | Juan | 1979-02-01 | One-match starter | — | — | — | — | — | B+ |
| CB | 호케 주니오르 | Roque Júnior | 1976-08-31 | One-match starter | — | — | — | — | — | — |
| LB | 디에고 플라센테 | Diego Placente | 1977-04-24 | One-match starter | — | — | — | — | — | — |
| RB | 베른트 슈나이더 | Bernd Schneider | 1973-11-17 | One-match starter | 33 | — | — | — | — | A- |
| DM | 카르스텐 라멜로프 | Carsten Ramelow | 1974-03-20 | One-match starter | 31 | — | — | — | — | — |
| CM | 다니엘 비어로프카 | Daniel Bierofka | 1979-02-07 | Substitute verified | — | — | — | — | — | — |
| CM | 한노 발리치 | Hanno Balitsch | 1981-01-02 | Substitute verified | 12 | — | — | — | — | — |
| CAM | 호브손 폰치 | Robson Ponte | 1976-11-06 | One-match starter | — | — | — | — | — | — |
| LW | 야체크 크르지노베크 | Jacek Krzynówek | 1976-05-15 | One-match starter | 30 | — | — | — | — | — |
| LW | 마르코 바비치 | Marko Babić | 1981-01-21 | Substitute verified | — | — | — | — | — | — |
| RW | 파울 프라이어 | Paul Freier | 1979-07-26 | One-match starter | — | — | — | — | — | — |
| ST | 안드리 보로닌 | Andriy Voronin | 1979-07-21 | Substitute verified | — | — | — | — | — | — |
| ST | 디미타르 베르바토프 | Dimitar Berbatov | 1981-01-30 | One-match starter | 33 | — | — | — | — | A- |
| ST | 프랑사 | França | 1976-03-02 | One-match starter | — | — | — | — | — | — |

### Real Madrid CF — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 이케르 카시야스 | Iker Casillas | 1981-05-20 | One-match starter | 37 | — | — | — | — | A+ |
| CB | 프란시스코 파본 | Francisco Pavón | 1980-01-09 | One-match starter | 14 | — | — | — | — | — |
| CB | 왈테르 사무엘 | Walter Samuel | 1978-03-23 | One-match starter | 30 | — | — | — | — | — |
| LB | 호베르투 카를루스 | Roberto Carlos | 1973-04-10 | One-match starter | 33 | — | — | — | — | A+ |
| RB | 미첼 살가도 | Míchel Salgado | 1975-10-22 | One-match starter | 30 | — | — | — | — | — |
| DM | 이반 엘게라 | Iván Helguera | 1975-03-28 | One-match starter | 33 | — | — | — | — | — |
| CM | 알베르트 셀라데스 | Albert Celades | 1975-09-29 | Substitute verified | 9 | — | — | — | — | — |
| CM | 데이비드 베컴 | David Beckham | 1975-05-02 | One-match starter | 29 | — | — | — | — | — |
| CAM | 지네딘 지단 | Zinédine Zidane | 1972-06-23 | One-match starter | 28 | — | — | — | — | A+ |
| LW | 산티아고 솔라리 | Santiago Solari | — | Substitute verified | — | — | — | — | — | — |
| RW | 루이스 피구 | Luís Figo | 1972-11-04 | One-match starter | 26 | — | — | — | 5 | A+ |
| ST | 페르난도 모리엔테스 | Fernando Morientes | 1976-04-05 | Substitute verified | 12 | — | — | — | — | — |
| ST | 마이클 오언 | Michael Owen | 1979-12-14 | One-match starter | 20 | — | — | — | — | — |
| ST | 라울 곤살레스 | Raúl González Blanco | 1977-06-27 | One-match starter | — | — | — | — | — | A0 |
| ST | 호나우두 | Ronaldo Nazário | 1976-09-22 | One-match starter | — | — | — | — | — | A+ |

### Juventus FC — 16 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 잔루이지 부폰 | Gianluigi Buffon | 1978-01-28 | One-match starter | 37 | — | — | — | — | A+ |
| CB | 파비오 칸나바로 | Fabio Cannavaro | 1973-09-13 | One-match starter | 38 | — | — | — | — | A+ |
| CB | 릴리앙 튀랑 | Lilian Thuram | 1972-01-01 | One-match starter | 37 | — | — | — | — | — |
| LB | 잔루카 잠브로타 | Gianluca Zambrotta | 1977-02-19 | One-match starter | — | — | — | — | — | A+ |
| RB | 알레산드로 비린델리 | Alessandro Birindelli | 1974-11-12 | One-match starter | — | — | — | — | — | — |
| RB | 잔루카 페소토 | Gianluca Pessotto | 1970-08-11 | Substitute verified | 13 | — | — | — | — | — |
| DM | 마누엘레 블라시 | Manuele Blasi | 1980-08-17 | One-match starter | — | — | — | — | — | — |
| CM | 에메르송 | Emerson | 1976-04-04 | One-match starter | — | — | — | — | — | A+ |
| CM | 루벤 올리베라 | Rubén Olivera | 1983-05-04 | Substitute verified | 6 | — | — | — | — | — |
| CM | 스티븐 아피아 | Stephen Appiah | 1980-12-24 | Substitute verified | — | — | — | — | — | — |
| LW | 파벨 네드베트 | Pavel Nedvěd | 1972-08-30 | One-match starter | — | — | — | — | — | A+ |
| RW | 마우로 카모라네시 | Mauro Camoranesi | 1976-10-04 | One-match starter | — | — | — | — | — | — |
| ST | 알레산드로 델 피에로 | Alessandro Del Piero | 1974-11-09 | One-match starter | — | — | — | — | — | — |
| ST | 다비드 트레제게 | David Trezeguet | 1977-10-15 | Appearance verified | 14 | — | — | — | — | — |
| ST | 마르셀로 살라예타 | Marcelo Zalayeta | — | Appearance verified | — | — | — | — | — | — |
| ST | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | 1981-10-03 | One-match starter | 31 | — | — | — | — | A0 |

### FC Bayern München — 14 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 올리버 칸 | Oliver Kahn | 1969-06-15 | One-match starter | — | — | — | — | — | A+ |
| CB | 루시우 | Lúcio | 1978-05-08 | One-match starter | — | — | — | — | — | A+ |
| CB | 로베르트 코바치 | Robert Kovač | 1974-04-06 | Substitute verified | — | — | — | — | — | — |
| CB | 토마스 링케 | Thomas Linke | — | One-match starter | — | — | — | — | — | — |
| LB | 토비아스 라우 | Tobias Rau | 1981-12-31 | One-match starter | — | — | — | — | — | — |
| RB | 하산 살리하미지치 | Hasan Salihamidžić | 1977-01-01 | One-match starter | — | — | — | — | — | — |
| CM | 오언 하그리브스 | Owen Hargreaves | 1981-01-20 | One-match starter | — | — | — | — | — | — |
| CM | 토르스텐 프링스 | Torsten Frings | 1976-11-22 | One-match starter | — | — | — | — | — | — |
| CAM | 미하엘 발라크 | Michael Ballack | 1976-09-26 | One-match starter | — | — | — | — | — | A+ |
| LW | 제 호베르투 | Zé Roberto | 1974-07-06 | One-match starter | — | — | — | — | — | A0 |
| RW | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | 1984-08-01 | Substitute verified | — | — | — | — | — | — |
| RW | 제바스티안 다이슬러 | Sebastian Deisler | 1980-01-05 | One-match starter | — | — | — | — | — | — |
| ST | 클라우디오 피사로 | Claudio Pizarro | 1978-10-03 | Appearance verified | — | — | — | — | — | — |
| ST | 로이 마카이 | Roy Makaay | 1975-03-09 | One-match starter | — | — | — | 7 | — | A+ |

### Olympique Lyonnais — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 그레고리 쿠페 | Grégory Coupet | 1972-12-31 | One-match starter | 31 | — | — | — | — | A0 |
| CB | 클라우지우 카사파 | Cláudio Caçapa | 1976-05-29 | One-match starter | 20 | — | — | — | — | — |
| CB | 크리스 | Cris | 1977-06-03 | One-match starter | 33 | — | — | — | — | A0 |
| LB | 에리크 아비달 | Éric Abidal | 1979-09-11 | One-match starter | 29 | — | — | — | — | — |
| RB | 앙토니 레베예르 | Anthony Réveillère | 1979-11-10 | One-match starter | 33 | — | — | — | — | — |
| DM | 마하마두 디아라 | Mahamadou Diarra | 1981-05-18 | One-match starter | 33 | — | — | — | — | — |
| CM | 제레미 클레망 | Jérémy Clément | 1984-09-26 | Substitute verified | 4 | — | — | — | — | — |
| CM | 마이클 에시엔 | Michael Essien | 1982-12-03 | One-match starter | 36 | — | — | 5 | — | A+ |
| CAM | 주니뉴 페르남부카누 | Juninho Pernambucano | 1975-01-30 | One-match starter | 32 | — | — | — | — | A+ |
| LW | 플로랑 말루다 | Florent Malouda | 1980-06-13 | One-match starter | 34 | — | — | — | — | — |
| LW | 하템 벤 아르파 | Hatem Ben Arfa | — | Substitute verified | — | — | — | — | — | — |
| RW | 시드니 고부 | Sidney Govou | 1979-07-27 | One-match starter | 33 | — | — | — | 5 | A0 |
| ST | 니우마르 | Nilmar | — | Substitute verified | — | — | — | — | — | — |
| ST | 피에르알랭 프라우 | Pierre-Alain Frau | 1980-04-15 | One-match starter | 21 | — | — | — | — | — |
| ST | 실뱅 윌토르 | Sylvain Wiltord | 1974-05-10 | One-match starter | 22 | — | — | 6 | 5 | A0 |

### Manchester United FC — 17 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 로이 캐럴 | Roy Carroll | 1977-09-30 | One-match starter | 26 | — | — | — | — | — |
| GK | 팀 하워드 | Tim Howard | 1979-03-06 | One-match starter | 12 | — | — | — | — | — |
| CB | 미카엘 실베스트르 | Mikaël Silvestre | 1977-08-09 | One-match starter | 33 | — | — | — | — | — |
| CB | 리오 퍼디난드 | Rio Ferdinand | 1978-11-07 | One-match starter | 31 | — | — | — | — | A0 |
| CB | 웨스 브라운 | Wes Brown | 1979-10-13 | One-match starter | 18 | — | — | — | — | — |
| LB | 가브리엘 에인세 | Gabriel Heinze | 1978-04-19 | One-match starter | 26 | — | — | — | — | — |
| RB | 게리 네빌 | Gary Neville | 1975-02-18 | One-match starter | 22 | — | — | — | — | — |
| RB | 존 오셰이 | John O'Shea | 1981-04-30 | One-match starter | 16 | — | — | — | — | — |
| RB | 필 네빌 | Phil Neville | 1977-01-21 | Substitute verified | 12 | — | — | — | — | — |
| DM | 로이 킨 | Roy Keane | 1971-08-10 | One-match starter | 28 | — | — | — | — | A0 |
| CM | 에리크 젬바젬바 | Eric Djemba-Djemba | — | One-match starter | — | — | — | — | — | — |
| CAM | 폴 스콜스 | Paul Scholes | 1974-11-16 | One-match starter | 29 | — | — | — | — | — |
| LW | 라이언 긱스 | Ryan Giggs | 1973-11-29 | One-match starter | 26 | — | — | — | — | A0 |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | 1985-02-05 | One-match starter | 25 | — | — | — | — | A0 |
| ST | 앨런 스미스 | Alan Smith | 1980-10-28 | Substitute verified | 22 | — | — | — | — | — |
| ST | 뤼트 판 니스텔로이 | Ruud van Nistelrooy | 1976-07-01 | One-match starter | 16 | — | — | 8 | — | A+ |
| ST | 웨인 루니 | Wayne Rooney | 1985-10-24 | One-match starter | 24 | — | — | — | — | A+ |

### Arsenal FC — 14 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 옌스 레만 | Jens Lehmann | 1969-11-10 | One-match starter | 28 | — | — | — | — | — |
| CB | 콜로 투레 | Kolo Touré | 1981-03-19 | One-match starter | 35 | — | — | — | — | A0 |
| CB | 파스칼 시강 | Pascal Cygan | — | One-match starter | — | — | — | — | — | — |
| LB | 애슐리 콜 | Ashley Cole | 1980-12-20 | One-match starter | 35 | — | — | — | — | A+ |
| RB | 로랑 | Lauren | 1977-01-19 | One-match starter | 32 | — | — | — | — | — |
| DM | 지우베르투 시우바 | Gilberto Silva | 1976-10-07 | One-match starter | 13 | — | — | — | — | — |
| CM | 에두 | Edu | 1979-01-10 | Substitute verified | 32 | — | — | — | — | — |
| CM | 파트리크 비에이라 | Patrick Vieira | 1976-06-23 | One-match starter | 32 | — | — | — | — | A+ |
| CAM | 세스크 파브레가스 | Cesc Fàbregas | 1987-05-04 | Appearance verified | 24 | — | — | — | — | — |
| CAM | 데니스 베르캄프 | Dennis Bergkamp | 1969-05-18 | One-match starter | 20 | — | — | — | — | — |
| LW | 로베르 피레스 | Robert Pirès | 1973-10-29 | One-match starter | — | — | — | — | — | A0 |
| RW | 호세 안토니오 레예스 | José Antonio Reyes | 1983-09-01 | One-match starter | 25 | — | — | — | — | — |
| ST | 로빈 판페르시 | Robin van Persie | 1983-08-06 | Appearance verified | 12 | — | — | — | — | — |
| ST | 티에리 앙리 | Thierry Henry | 1977-08-17 | One-match starter | 31 | — | — | 5 | — | S |

### PSV Eindhoven — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 에드빈 주테비어 | Edwin Zoetebier | — | One-match starter | — | — | — | — | — | — |
| GK | 에우렐류 고메스 | Heurelho Gomes | 1981-02-15 | One-match starter | — | — | — | — | — | A0 |
| CB | 알렉스 | Alex | — | One-match starter | — | — | — | — | — | A0 |
| CB | 빌프레트 바우마 | Wilfred Bouma | — | One-match starter | — | — | — | — | — | — |
| LB | 이영표 | Lee Young-pyo | 1977-04-23 | One-match starter | — | — | — | — | — | A0 |
| RB | 안드레 오이에르 | André Ooijer | — | One-match starter | — | — | — | — | — | — |
| DM | 요한 포겔 | Johann Vogel | — | One-match starter | — | — | — | — | — | — |
| CM | 마르크 판보멀 | Mark van Bommel | — | One-match starter | — | — | — | — | — | A+ |
| CM | 필립 코쿠 | Phillip Cocu | — | One-match starter | — | — | — | — | — | A0 |
| CAM | 욘 더 용 | John de Jong | — | Substitute verified | — | — | — | — | — | — |
| LW | 다마커스 비즐리 | DaMarcus Beasley | — | One-match starter | — | — | — | — | — | — |
| RW | 박지성 | Park Ji-sung | 1981-02-25 | One-match starter | — | — | — | — | — | A0 |
| ST | 헤랄트 시본 | Gerald Sibon | — | One-match starter | — | — | — | — | — | — |
| ST | 얀 페네호르 오프 헤셀링크 | Jan Vennegoor of Hesselink | — | Substitute verified | — | — | — | — | — | — |
| ST | 헤페르손 파르판 | Jefferson Farfán | — | Substitute verified | — | — | — | — | — | — |

### AC Milan — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 지다 | Dida | 1973-10-07 | Final starter | 36 | — | — | — | — | A+ |
| CB | 알레산드로 네스타 | Alessandro Nesta | 1976-03-19 | Final starter | — | — | — | — | — | A+ |
| CB | 야프 스탐 | Jaap Stam | 1972-07-17 | Final starter | — | — | — | — | — | — |
| LB | 파올로 말디니 | Paolo Maldini | 1968-06-26 | Final starter | — | — | — | — | — | A+ |
| RB | 카푸 | Cafu | 1970-06-07 | Final starter | — | — | — | — | — | A+ |
| DM | 안드레아 피를로 | Andrea Pirlo | 1979-05-19 | Final starter | — | — | — | — | 4 | A+ |
| DM | 젠나로 가투소 | Gennaro Gattuso | 1978-01-09 | Final starter | — | — | — | — | — | A0 |
| CM | 클라렌스 세도르프 | Clarence Seedorf | 1976-04-01 | Final starter | — | — | — | — | — | A0 |
| CM | 비카시 도라수 | Vikash Dhorasoo | — | Substitute verified | — | — | — | — | — | — |
| CAM | 카카 | Kaká | 1982-04-22 | Final starter | 33 | — | — | — | 5 | S |
| CAM | 후이 코스타 | Rui Costa | 1972-03-29 | Final sub | — | — | — | — | — | — |
| LW | 세르지뉴 | Serginho | — | Final sub | — | — | — | — | — | — |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | 1976-09-29 | Final starter | — | — | — | 6 | — | S |
| ST | 에르난 크레스포 | Hernán Crespo | 1975-07-05 | Final starter | — | — | — | 6 | — | A+ |
| ST | 욘 달 토마손 | Jon Dahl Tomasson | 1976-08-29 | Final sub | — | — | — | — | — | — |

### FC Barcelona — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 빅토르 발데스 | Víctor Valdés | 1982-01-14 | One-match starter | 35 | — | — | — | — | — |
| CB | 카를레스 푸욜 | Carles Puyol | 1978-04-13 | One-match starter | 36 | — | — | — | — | A+ |
| CB | 올레게르 | Oleguer | — | Substitute verified | — | — | — | — | — | — |
| CB | 라파엘 마르케스 | Rafael Márquez | 1979-02-13 | One-match starter | 33 | — | — | — | — | A0 |
| LB | 지오바니 판브롱크호르스트 | Giovanni van Bronckhorst | 1975-02-05 | One-match starter | 27 | — | — | — | — | — |
| RB | 줄리아누 벨레치 | Juliano Belletti | 1976-06-20 | One-match starter | 29 | — | — | — | — | — |
| DM | 에드미우송 | Edmílson | 1976-07-10 | One-match starter | 4 | — | — | — | — | — |
| CM | 안드레스 이니에스타 | Andrés Iniesta | 1984-05-11 | Substitute verified | 12 | — | — | — | — | — |
| CM | 제라르 로페스 | Gerard López | — | One-match starter | — | — | — | — | — | — |
| CM | 사비 에르난데스 | Xavi Hernández | 1980-01-25 | One-match starter | 36 | — | — | — | — | A+ |
| CAM | 데쿠 | Deco | 1977-08-27 | One-match starter | 35 | — | — | — | — | A+ |
| LW | 호나우지뉴 | Ronaldinho | 1980-03-21 | One-match starter | 35 | — | — | — | — | S |
| RW | 뤼도비크 지울리 | Ludovic Giuly | 1976-07-10 | One-match starter | 29 | — | — | — | — | A0 |
| ST | 헨리크 라르손 | Henrik Larsson | 1971-09-20 | Substitute verified | 6 | — | — | — | — | — |
| ST | 사뮈엘 에토 | Samuel Eto'o | 1981-03-10 | One-match starter | 37 | — | — | — | — | A+ |

### FC Internazionale Milano — 15 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 프란체스코 톨도 | Francesco Toldo | 1971-12-02 | One-match starter | — | — | — | — | — | — |
| CB | 이반 코르도바 | Iván Córdoba | 1976-08-11 | One-match starter | — | — | — | — | — | — |
| CB | 마르코 마테라치 | Marco Materazzi | 1973-08-19 | One-match starter | — | — | — | — | — | — |
| LB | 주세페 파발리 | Giuseppe Favalli | 1972-01-08 | One-match starter | — | — | — | — | — | — |
| RB | 하비에르 사네티 | Javier Zanetti | 1973-08-10 | One-match starter | 32 | — | — | — | — | A+ |
| DM | 에스테반 캄비아소 | Esteban Cambiasso | 1980-08-18 | Substitute verified | — | — | — | — | — | A0 |
| CM | 엠레 벨뢰졸루 | Emre Belözoğlu | 1980-09-07 | One-match starter | — | — | — | — | — | — |
| CM | 후안 세바스티안 베론 | Juan Sebastián Verón | 1975-03-09 | One-match starter | — | — | — | — | — | A0 |
| CAM | 알바로 레코바 | Álvaro Recoba | 1976-03-17 | Substitute verified | — | — | — | — | — | — |
| LW | 데얀 스탄코비치 | Dejan Stanković | 1978-09-11 | One-match starter | — | — | — | — | — | — |
| RW | 앤디 판데르메이데 | Andy van der Meyde | 1979-09-30 | One-match starter | — | — | — | — | — | — |
| RW | 제 마리아 | Zé Maria | 1973-07-25 | Substitute verified | — | — | — | — | — | — |
| ST | 아드리아누 | Adriano | 1982-02-17 | One-match starter | 26 | — | — | 7 | — | A+ |
| ST | 크리스티안 비에리 | Christian Vieri | 1973-07-12 | One-match starter | — | — | — | — | — | — |
| ST | 오바페미 마르틴스 | Obafemi Martins | 1984-10-28 | Appearance verified | — | — | — | 5 | — | A- |

### SV Werder Bremen — 14 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 안드레아스 라인케 | Andreas Reinke | 1969-01-10 | One-match starter | 34 | — | — | — | — | — |
| CB | 프랑크 파렌호르스트 | Frank Fahrenhorst | 1977-09-24 | One-match starter | — | — | — | — | — | — |
| CB | 발레리앵 이스마엘 | Valérien Ismaël | 1975-09-28 | One-match starter | 32 | — | — | — | — | — |
| LB | 뤼도비크 마냉 | Ludovic Magnin | 1979-04-20 | Substitute verified | — | — | — | — | — | — |
| LB | 폴 스탈테리 | Paul Stalteri | 1977-10-18 | One-match starter | — | — | — | — | — | — |
| RB | 페트리 파사넨 | Petri Pasanen | 1980-09-24 | One-match starter | — | — | — | — | — | — |
| DM | 프랑크 바우만 | Frank Baumann | 1975-10-29 | One-match starter | — | — | — | — | — | — |
| CM | 파비안 에른스트 | Fabian Ernst | 1979-05-30 | One-match starter | 33 | — | — | — | — | — |
| CM | 팀 보로프스키 | Tim Borowski | 1980-05-02 | One-match starter | 30 | — | — | — | — | B+ |
| CAM | 요안 미쿠 | Johan Micoud | 1973-07-24 | One-match starter | 33 | — | — | — | — | A0 |
| ST | 앙겔로스 하리스테아스 | Angelos Charisteas | — | Substitute verified | — | — | — | — | — | — |
| ST | 이반 클라스니치 | Ivan Klasnić | 1980-01-29 | One-match starter | — | — | — | 5 | — | A0 |
| ST | 미로슬라프 클로제 | Miroslav Klose | 1978-06-09 | Substitute verified | — | — | — | — | — | A0 |
| ST | 넬손 발데스 | Nelson Valdez | 1983-11-28 | One-match starter | — | — | — | — | — | — |

### Chelsea FC — 16 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 페트르 체흐 | Petr Čech | 1982-05-20 | One-match starter | 35 | — | — | — | — | S |
| CB | 존 테리 | John Terry | 1980-12-07 | One-match starter | 36 | — | — | — | — | S |
| CB | 히카르두 카르발류 | Ricardo Carvalho | 1978-05-18 | One-match starter | 22 | — | — | — | — | A+ |
| LB | 웨인 브리지 | Wayne Bridge | 1980-08-05 | One-match starter | 12 | — | — | — | — | — |
| RB | 파울루 페헤이라 | Paulo Ferreira | 1979-01-18 | One-match starter | 29 | — | — | — | — | — |
| RB | 윌리암 갈라스 | William Gallas | 1977-08-17 | One-match starter | 28 | — | — | — | — | A+ |
| DM | 클로드 마켈렐레 | Claude Makélélé | 1973-02-18 | One-match starter | 36 | — | — | — | — | A+ |
| CM | 프랭크 램퍼드 | Frank Lampard | 1978-06-20 | One-match starter | 38 | — | — | — | — | S |
| CM | 티아구 멘데스 | Tiago Mendes | 1981-05-02 | One-match starter | 21 | — | — | — | — | — |
| CAM | 조 콜 | Joe Cole | 1981-11-08 | One-match starter | 19 | — | — | — | — | A0 |
| LW | 아르연 로번 | Arjen Robben | 1984-01-23 | Appearance verified | 14 | — | — | — | — | A+ |
| LW | 데이미언 더프 | Damien Duff | 1979-03-02 | Substitute verified | 28 | — | — | — | 5 | A+ |
| RW | 제레미 | Geremi | 1978-12-20 | Substitute verified | 6 | — | — | — | — | — |
| ST | 디디에 드로그바 | Didier Drogba | 1978-03-11 | One-match starter | 18 | — | — | 5 | — | A0 |
| ST | 에이뒤르 그뷔드욘센 | Eiður Guðjohnsen | 1978-09-15 | One-match starter | 30 | — | — | — | — | — |
| ST | 마테야 케즈만 | Mateja Kežman | — | Substitute verified | — | — | — | — | — | — |

### FC Porto — 16 player research entries

| Pos* | 한글명 | 원어명 | DOB | UCL participation evidence | 2004-05 domestic league starts† | UCL apps | UCL starts | Goals | Assists | Draft tier |
|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| GK | 비토르 바이아 | Vítor Baía | 1969-10-15 | One-match starter | — | — | — | — | — | A0 |
| CB | 조르즈 코스타 | Jorge Costa | 1971-10-14 | One-match starter | — | — | — | — | — | B+ |
| CB | 페페 | Pepe | — | One-match starter | — | — | — | — | — | — |
| LB | 아레이아스 | Areias | — | One-match starter | — | — | — | — | — | — |
| RB | 요르카스 세이타리디스 | Giourkas Seitaridis | — | One-match starter | — | — | — | — | — | — |
| RB | 조제 보싱와 | José Bosingwa | — | One-match starter | — | — | — | — | — | — |
| DM | 코스티냐 | Costinha | 1974-12-01 | One-match starter | — | — | — | — | — | A0 |
| CM | 우구 레알 | Hugo Leal | — | Substitute verified | — | — | — | — | — | — |
| CM | 마니시 | Maniche | 1977-11-11 | One-match starter | — | — | — | — | — | A0 |
| CAM | 디에구 | Diego | — | One-match starter | — | — | — | — | — | — |
| RW | 카를루스 알베르투 | Carlos Alberto | — | One-match starter | — | — | — | — | — | — |
| RW | 히카르두 콰레스마 | Ricardo Quaresma | — | One-match starter | — | — | — | — | — | B+ |
| ST | 베니 매카시 | Benni McCarthy | — | Substitute verified | — | — | — | — | — | — |
| ST | 데를레이 | Derlei | — | One-match starter | — | — | — | — | — | — |
| ST | 엘데르 포스티가 | Hélder Postiga | — | One-match starter | — | — | — | — | — | — |
| ST | 루이스 파비아누 | Luís Fabiano | — | Substitute verified | — | — | — | — | — | — |

† Domestic starts cover the separate Premier League / La Liga / Serie A / Bundesliga / Ligue 1 competition. They must never be merged into the Champions League starts column.

## 6. Provisional cross-team top-tier ratings (S, A+, A0, A-, B+) 

**These are only qualitative grade proposals, not a complete ranking.** No automatic upgrade for winning a club competition. A0 displays as `A` internally.

| Pos* | 한글명 | 원어명 | 소속 원어명 | DOB | Tier | Weighted three-season personal reasoning |
|---|---|---|---|---|---|---|
| GK | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | S | 2002-03·2003-04 렌에서의 성장과 2004-05 첼시 주전 첫 시즌 UCL 46세이브, UEFA 올해의 골키퍼상으로 개인 기량 입증 |
| CB | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | S | 2002-03·2003-04 첼시 중앙 수비에서 성장, 2004-05 주전 수비 운영과 UEFA 올해의 수비수상으로 대체하기 어려운 개인 기여 |
| CM | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | 1978-06-20 | S | 2002-03·2003-04 꾸준한 득점형 중원 기여 뒤 2004-05 첼시의 중앙 공격 전개·활동량·득점 관여가 유럽 최고 수준으로 상승 |
| CM | 스티븐 제라드 | Steven Gerrard | Liverpool FC | 1980-05-30 | S | 2002-03부터 중원 중심 역할을 수행하고 2004-05 UCL에서 경기 전환력·결정적 득점·UEFA MVP로 개인 최고점 입증 |
| CAM | 카카 | Kaká | AC Milan | 1982-04-22 | S | 2003-04 유럽 데뷔에서의 창조성과 2004-05 UCL 5도움·UEFA 올해의 미드필더상으로 최고급 공격형 미드필더 영향력 입증 |
| LW | 호나우지뉴 | Ronaldinho | FC Barcelona | 1980-03-21 | S | 2002-03 PSG, 2003-04·2004-05 바르셀로나에서 창조성과 경기 결정력이 지속적으로 상승, 2005 FIFA 올해의 선수·발롱도르 기록도 참고 |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | AC Milan | 1976-09-29 | S | 2002-03 UCL 우승 과정 공격 기여, 2003-04 세리에 A 득점왕·2004 발롱도르, 2004-05 UCL 6골의 높은 결정력을 지속 |
| ST | 티에리 앙리 | Thierry Henry | Arsenal FC | 1977-08-17 | S | 2002-03·2003-04 프리미어리그와 UCL 공격 기여를 누적, 2004-05 UCL 5골과 리그 고득점을 기록한 대체하기 어려운 공격수 |
| GK | 지다 | Dida | AC Milan | 1973-10-07 | A+ | 2002-03 밀란 UCL 주전 경험과 2003-04·2004-05 높은 선방 수준을 이어 2004-05 UCL 52세이브 기록 |
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | A+ | 2002-03 UEFA MVP·골키퍼상 이후 2003-04·2004-05 주전 선방 수준을 유지하며 2004-05 UCL 32세이브 |
| GK | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | A+ | 2002-03·2003-04·2004-05 레알 마드리드의 골문에서 높은 출전 가동률과 개인 선방 능력이 지속됨 |
| GK | 올리버 칸 | Oliver Kahn | FC Bayern München | 1969-06-15 | A+ | 2002-03·2003-04 최고 수준 선방과 2004-05 UCL 31세이브 등 지속적인 주전 경기 영향력 |
| CB | 알레산드로 네스타 | Alessandro Nesta | AC Milan | 1976-03-19 | A+ | 2002-03·2003-04·2004-05 밀란 중앙 수비의 대인 방어·라인 조율을 지속 |
| CB | 카를레스 푸욜 | Carles Puyol | FC Barcelona | 1978-04-13 | A+ | 2002-03~2004-05 바르셀로나 중앙 수비의 대인 방어와 조직화 역할을 지속 |
| CB | 파비오 칸나바로 | Fabio Cannavaro | Juventus FC | 1973-09-13 | A+ | 2002-03·2003-04 인테르 중앙 수비와 2004-05 유벤투스 수비 조율의 수준을 비교 |
| CB | 제이미 캐러거 | Jamie Carragher | Liverpool FC | 1978-01-28 | A+ | 2002-03·2003-04의 안정적인 주전 경험에 2004-05 토너먼트의 일대일 수비·집중력과 13경기 출전을 더해 평가 |
| CB | 루시우 | Lúcio | FC Bayern München | 1978-05-08 | A+ | 2002-03~2004-05 독일 무대 중앙 수비에서 적극적인 전진과 대인 수비, 2004-05 바이에른 이적 후 지속 |
| CB | 히카르두 카르발류 | Ricardo Carvalho | Chelsea FC | 1978-05-18 | A+ | 2002-03·2003-04 포르투 수비 핵심, 2004-05 첼시 중앙 수비에서 꾸준한 대인 방어·조율 유지 |
| LB | 애슐리 콜 | Ashley Cole | Arsenal FC | 1980-12-20 | A+ | 2002-03~2004-05 아스널 왼쪽 풀백 수비·공격 전환의 핵심, 당해 UCL 수비 상대 수준과 역할을 중시 |
| LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus FC | 1977-02-19 | A+ | 2002-03~2004-05 좌우 풀백 기량과 경기 가동률을 지속해 당해 시즌 수비·공격 전환의 중심으로 활약 |
| LB | 파올로 말디니 | Paolo Maldini | AC Milan | 1968-06-26 | A+ | 2002-03부터 2004-05까지 밀란의 수비 조직과 위치 선정 핵심, 결승 직접 득점은 부차적으로 반영 |
| LB | 호베르투 카를루스 | Roberto Carlos | Real Madrid CF | 1973-04-10 | A+ | 2002-03 최우수 수비수 수준에서 2004-05까지 높은 왼쪽 풀백 공격 참여·후방 복귀를 지속 |
| RB | 카푸 | Cafu | AC Milan | 1970-06-07 | A+ | 2002-03 로마 후방에서 2003-04·2004-05 밀란 오른쪽 풀백 공격·복귀 능력의 지속성 |
| RB | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | A+ | 2002-03~2004-05 인테르 수비·중원 전술에서 지속적으로 높은 주전 가동률과 공수 연결 수행 |
| RB | 윌리암 갈라스 | William Gallas | Chelsea FC | 1977-08-17 | A+ | 2002-03~2004-05 첼시의 중앙·측면 수비에서 다양한 역할과 대인 수비 수준 지속 |
| DM | 안드레아 피를로 | Andrea Pirlo | AC Milan | 1979-05-19 | A+ | 2002-03부터 2004-05 밀란의 레지스타 역할에서 경기 조율과 2004-05 UCL 4도움을 입증 |
| DM | 클로드 마켈렐레 | Claude Makélélé | Chelsea FC | 1973-02-18 | A+ | 2002-03 레알 마드리드 중원 스크린 이후 2003-04·2004-05 첼시 수비형 중원에서 지속적인 전술적 대체 난이도 |
| CM | 에메르송 | Emerson | Juventus FC | 1976-04-04 | A+ | 2002-03·2003-04 로마에서의 공수 균형과 2004-05 유벤투스 중앙의 전환 차단·경기 조율을 연결 |
| CM | 마르크 판보멀 | Mark van Bommel | PSV Eindhoven | — | A+ | 2002-03·2003-04 PSV 중앙의 공격적 경기 조율이 2004-05 UCL 강팀 상대 압박과 전개까지 이어짐 |
| CM | 마이클 에시엔 | Michael Essien | Olympique Lyonnais | 1982-12-03 | A+ | 2002-03 바스티아 시기 이후 2003-04·2004-05 리옹에서 볼 회수·운반·UCL 5골로 중원 영향력 급상승 |
| CM | 파트리크 비에이라 | Patrick Vieira | Arsenal FC | 1976-06-23 | A+ | 2002-03~2004-05 아스널 중원 볼 회수·전진 운반 및 위치 선정에서 최고 수준의 개인 기여 지속 |
| CM | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | A+ | 2002-03~2004-05 바르셀로나 중원 패스 조율의 핵심 가동률과 창조성을 평가 |
| CAM | 데쿠 | Deco | FC Barcelona | 1977-08-27 | A+ | 2002-03 UEFA컵 포르투, 2003-04 UCL MVP, 2004-05 바르셀로나의 중원 창조성과 전진 전개를 이어감 |
| CAM | 주니뉴 페르남부카누 | Juninho Pernambucano | Olympique Lyonnais | 1975-01-30 | A+ | 2002-03부터 지속된 리옹의 창조적인 전진 패스와 세트피스 위력이 2004-05 유럽 무대에서도 핵심 |
| CAM | 미하엘 발라크 | Michael Ballack | FC Bayern München | 1976-09-26 | A+ | 2002-03·2003-04·2004-05 바이에른 중원의 득점 관여·전진 활동량과 개인 공격 기여 유지 |
| CAM | 지네딘 지단 | Zinédine Zidane | Real Madrid CF | 1972-06-23 | A+ | 2002-03부터 유지한 전진 패스·창조성과 2004-05의 레알 공격 전개 기여를 함께 비교 |
| LW | 아르연 로번 | Arjen Robben | Chelsea FC | 1984-01-23 | A+ | 2002-03·2003-04 PSV 드리블 성장 뒤 2004-05 첼시의 왼쪽 측면 침투·창조성에 강한 기여; 부상 가동률 제한 반영 |
| LW | 데이미언 더프 | Damien Duff | Chelsea FC | 1979-03-02 | A+ | 2002-03 블랙번에서의 전진 운반, 2003-04 첼시와 2004-05 UCL 5도움으로 높은 측면 찬스 생산성 유지 |
| LW | 파벨 네드베트 | Pavel Nedvěd | Juventus FC | 1972-08-30 | A+ | 2002-03 UEFA 올해의 미드필더·2003-04 높은 기량이 2004-05에도 왼쪽 공격 전개에 기여했으나 당해 가동률을 감안 |
| RW | 루이스 피구 | Luís Figo | Real Madrid CF | 1972-11-04 | A+ | 2002-03·2003-04 최상급 오른쪽 측면 창조성을 2004-05 UCL 5도움으로 직접 확인 |
| ST | 아드리아누 | Adriano | FC Internazionale Milano | 1982-02-17 | A+ | 2002-03 파르마 공격 성장, 2003-04 인테르 득점 가속, 2004-05 UCL 7골로 폭발적 전방 마무리 수준 입증 |
| ST | 에르난 크레스포 | Hernán Crespo | AC Milan | 1975-07-05 | A+ | 2002-03 인테르 UCL 9골, 2003-04 첼시 적응기를 거쳐 2004-05 밀란 UCL 6골과 결승 2득점으로 반등 |
| ST | 호나우두 | Ronaldo Nazário | Real Madrid CF | 1976-09-22 | A+ | 2002-03·2003-04의 최상급 결정력과 2004-05 전방 득점 영향력을 비교하며 부상·가동률 변동도 고려 |
| ST | 로이 마카이 | Roy Makaay | FC Bayern München | 1975-03-09 | A+ | 2002-03 데포르티보 고득점 이후 2003-04·2004-05 바이에른에서도 UCL 7골 등 높은 마무리 수준 지속 |
| ST | 뤼트 판 니스텔로이 | Ruud van Nistelrooy | Manchester United FC | 1976-07-01 | A+ | 2002-03 UCL 득점왕을 포함해 2004-05 UCL 8골 득점왕을 기록하며 박스 결정력은 지속, 부상으로 인한 가동률 제약 별도 고려 |
| ST | 사뮈엘 에토 | Samuel Eto'o | FC Barcelona | 1981-03-10 | A+ | 2002-03·2003-04 마요르카의 득점력에서 2004-05 바르셀로나 최전방 주전으로 이적해 높은 득점·연계 기여 |
| ST | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | A+ | 2002-03·2003-04 에버턴 시기에서 성장, 2004-05 맨유 UCL 데뷔 해트트릭 등 전방 전개·결정력의 급성장 |
| GK | 그레고리 쿠페 | Grégory Coupet | Olympique Lyonnais | 1972-12-31 | A0 | 2002-03~2004-05 리옹의 골문에서 꾸준한 선방과 수비진 조율 |
| GK | 에우렐류 고메스 | Heurelho Gomes | PSV Eindhoven | 1981-02-15 | A0 | 2004-05 PSV의 선발 골키퍼로 유럽 상위 토너먼트까지 높은 선방 기여; 유럽 무대 이전 2시즌 경험은 제한적 |
| GK | 예지 두데크 | Jerzy Dudek | Liverpool FC | 1973-03-23 | A0 | 2004-05 결승 연속 선방 및 승부차기 기여에 가중하되 앞선 시즌의 경기력 기복과 주전 경쟁도 반영 |
| GK | 비토르 바이아 | Vítor Baía | FC Porto | 1969-10-15 | A0 | 2002-03 UEFA컵·2003-04 UCL 골키퍼 개인상의 높은 수준 뒤 2004-05에도 포르투 골문을 지켰으나 최고점보다 기량·가동률 변화 반영 |
| CB | 알렉스 | Alex | PSV Eindhoven | — | A0 | 2004-05 PSV 중앙 수비 주전으로 대인 방어와 공중볼 처리에 기여; 직전 유럽 대항전 2시즌 실적은 제한적 |
| CB | 크리스 | Cris | Olympique Lyonnais | 1977-06-03 | A0 | 2004-05 합류 후 리옹 중앙 수비에서 경기 지배력·대인 방어 수행, 앞선 2시즌 유럽 무대 지속성은 상대적으로 짧음 |
| CB | 콜로 투레 | Kolo Touré | Arsenal FC | 1981-03-19 | A0 | 2003-04부터 안정적으로 성장한 중앙 수비 대인 능력과 2004-05 주전 역할을 평가 |
| CB | 라파엘 마르케스 | Rafael Márquez | FC Barcelona | 1979-02-13 | A0 | 2003-04부터 바르셀로나 수비와 수미를 연결한 빌드업 및 2004-05 후방 역할 유지 |
| CB | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | A0 | 2002-03 맨유 수비의 핵심에서 2003-04 징계 공백을 거쳐 2004-05 중앙 수비 안정성 회복을 평가 |
| CB | 사미 휘피애 | Sami Hyypiä | Liverpool FC | 1973-10-07 | A0 | 2002-03~2004-05 중앙 수비 제공권과 경기 관리의 연속성을 중시하고 2004-05 UCL 13경기 소화에 가중 |
| LB | 이영표 | Lee Young-pyo | PSV Eindhoven | 1977-04-23 | A0 | 2002-03~2004-05 PSV 왼쪽 풀백의 전술적 수비 안정과 전진 참여, UCL 상위 라운드 개인 역할 반영 |
| LB | 파트리스 에브라 | Patrice Evra | AS Monaco FC | 1981-05-15 | A0 | 2003-04 UCL 결승 시즌의 왼쪽 풀백 공격 기여 뒤 2004-05에도 주전으로 활약; 2002-03부터의 성장과 당해 기량을 비교 |
| DM | 코스티냐 | Costinha | FC Porto | 1974-12-01 | A0 | 2002-03~2004-05 포르투 수비형 중원의 압박·차단 기능과 지속적인 역할을 평가 |
| DM | 에스테반 캄비아소 | Esteban Cambiasso | FC Internazionale Milano | 1980-08-18 | A0 | 2002-03·2003-04 레알 이후 2004-05 인테르에서 수비형 중원 핵심 가담을 보인 성장 시즌 |
| DM | 젠나로 가투소 | Gennaro Gattuso | AC Milan | 1978-01-09 | A0 | 2002-03~2004-05 밀란 중앙 수비 지원·압박에서 주전으로 꾸준한 기여 |
| DM | 로이 킨 | Roy Keane | Manchester United FC | 1971-08-10 | A0 | 2002-03~2004-05 중원 압박·볼 회수·리더십의 주전 기여를 평가하며 당시 출전 가동률 변화 반영 |
| CM | 클라렌스 세도르프 | Clarence Seedorf | AC Milan | 1976-04-01 | A0 | 2002-03~2004-05 밀란 중원 볼 운반·전환 공격의 지속적인 개인 기여 |
| CM | 후안 세바스티안 베론 | Juan Sebastián Verón | FC Internazionale Milano | 1975-03-09 | A0 | 2002-03 맨유, 2003-04 첼시와 2004-05 인테르 사이 출전 편차를 반영하되 당해 중원 패스 능력 평가 |
| CM | 마니시 | Maniche | FC Porto | 1977-11-11 | A0 | 2002-03 UEFA컵, 2003-04 UCL의 강한 중원 득점 기여를 이어 2004-05에도 포르투 전진형 미드필더 기능 유지 |
| CM | 필립 코쿠 | Phillip Cocu | PSV Eindhoven | — | A0 | 2002-03·2003-04 바르셀로나에서의 경기 운영 능력을 2004-05 PSV 중앙 수비·중원 역할로 연결 |
| CM | 사비 알론소 | Xabi Alonso | Liverpool FC | 1981-11-25 | A0 | 2002-03·2003-04 소시에다드 경기 조율 경험에 2004-05 리버풀 중원 전개와 결승 득점 기여를 반영 |
| CAM | 조 콜 | Joe Cole | Chelsea FC | 1981-11-08 | A0 | 2002-03 웨스트햄, 2003-04 첼시 적응에서 2004-05 공격적 중원 기술·찬스 창출 핵심으로 성장 |
| CAM | 요안 미쿠 | Johan Micoud | SV Werder Bremen | 1973-07-24 | A0 | 2002-03·2003-04 베르더 중원 창조성 유지에 2004-05 UCL 전진 패스와 공격 전개 역할 반영 |
| LW | 로베르 피레스 | Robert Pirès | Arsenal FC | 1973-10-29 | A0 | 2002-03·2003-04의 창조적 측면 공격력이 2004-05에도 득점·찬스 창출로 이어진 주전 |
| LW | 라이언 긱스 | Ryan Giggs | Manchester United FC | 1973-11-29 | A0 | 2002-03~2004-05 왼쪽 측면의 전진 운반과 공격 전개에서 꾸준한 역할을 수행 |
| LW | 제 호베르투 | Zé Roberto | FC Bayern München | 1974-07-06 | A0 | 2002-03~2004-05 바이에른 왼쪽 측면 볼 운반과 공격 기회 창출에서 꾸준한 주전 기여 |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | 1985-02-05 | A0 | 2003-04 맨유 첫 시즌 이후 2004-05 오른쪽 측면의 드리블·기회 창출 기여가 상승하나 후대의 득점왕 명성은 소급하지 않음 |
| RW | 뤼도비크 지울리 | Ludovic Giuly | FC Barcelona | 1976-07-10 | A0 | 2003-04 모나코 오른쪽 공격 핵심에서 2004-05 바르셀로나 측면 공격으로 개인 전환과 기여 지속 |
| RW | 루이스 가르시아 | Luis García | Liverpool FC | 1978-06-24 | A0 | 2004-05 UCL 12경기 5골의 직접 공격 기여가 탁월하나 2002-03·2003-04 대비 이 시즌의 유럽 무대 고점 비중이 높음 |
| RW | 박지성 | Park Ji-sung | PSV Eindhoven | 1981-02-25 | A0 | 2002-03 PSV 적응기, 2003-04 성장기 이후 2004-05 UCL 왕성한 활동량과 토너먼트 측면 압박에서 핵심 기여 |
| RW | 시드니 고부 | Sidney Govou | Olympique Lyonnais | 1979-07-27 | A0 | 2004-05 UCL 5도움으로 측면 창조성과 2002-03·2003-04 리옹 공격 참여의 지속성을 확인 |
| ST | 디디에 드로그바 | Didier Drogba | Chelsea FC | 1978-03-11 | A0 | 2002-03 갱강, 2003-04 마르세유의 유럽 공격력에서 2004-05 첼시 UCL 5골과 전방 연계로 기여 |
| ST | 이반 클라스니치 | Ivan Klasnić | SV Werder Bremen | 1980-01-29 | A0 | 2003-04 분데스리가 공격 기여 이후 2004-05 UCL 5골의 실질적 스트라이커 생산력 |
| ST | 미로슬라프 클로제 | Miroslav Klose | SV Werder Bremen | 1978-06-09 | A0 | 2002-03·2003-04 카이저슬라우테른에서의 득점력과 2004-05 베르더의 전방 역할을 비교해 결정력 평가 |
| ST | 라울 곤살레스 | Raúl González Blanco | Real Madrid CF | 1977-06-27 | A0 | 2002-03 최정상급 득점 기여와 2003-04·2004-05의 전술적 연계·득점 변화를 함께 반영 |
| ST | 실뱅 윌토르 | Sylvain Wiltord | Olympique Lyonnais | 1974-05-10 | A0 | 2004-05 UCL 6골·5도움으로 높은 직접 기여를 보였고 2002-03·2003-04 아스널 시기 득점 경험과 연결 |
| ST | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Juventus FC | 1981-10-03 | A0 | 2002-03·2003-04 아약스에서 성장한 기량이 2004-05 유벤투스의 득점·연계 전방 주전으로 이어짐 |
| RB | 베른트 슈나이더 | Bernd Schneider | Bayer 04 Leverkusen | 1973-11-17 | A- | 2002-03·2003-04에서 이어온 오른쪽 전개·크로스 기여가 2004-05 유럽 무대에서도 유지 |
| ST | 디미타르 베르바토프 | Dimitar Berbatov | Bayer 04 Leverkusen | 1981-01-30 | A- | 2002-03부터 성장한 볼 간수·연계·결정력이 2004-05 UCL 스트라이커 역할에서 뚜렷해짐 |
| ST | 오바페미 마르틴스 | Obafemi Martins | FC Internazionale Milano | 1984-10-28 | A- | 2002-03·2003-04 빠른 전진형 공격수 성장과 2004-05 UCL 5골로 개인 기여 확대 |
| GK | 한스외르크 부트 | Hans-Jörg Butt | Bayer 04 Leverkusen | 1974-05-28 | B+ | 2002-03~2004-05 레버쿠젠의 골키퍼 주전 역할과 안정적인 선방, 팀 전체 결과와 별개로 평가 |
| CB | 조르즈 코스타 | Jorge Costa | FC Porto | 1971-10-14 | B+ | 2002-03~2004-05 포르투 중앙 수비 주전 경험과 라인 통제 지속, 당해 유럽 상위권 개인 기여는 제한적 |
| CB | 주앙 | Juan | Bayer 04 Leverkusen | 1979-02-01 | B+ | 2004-05 레버쿠젠 후방의 중앙 수비 주전 기능을 수행했으나 2002-03·2003-04 유럽 정상급 지속성은 미확인 |
| CB | 세바스티앵 스킬라치 | Sébastien Squillaci | AS Monaco FC | 1980-08-11 | B+ | 2003-04와 2004-05의 중앙 수비 주전 역할 및 대인 수비 안정성; 유럽 정상급 개인 실적은 추가 검증 |
| RB | 스티브 피넌 | Steve Finnan | Liverpool FC | 1976-04-20 | B+ | 2003-04와 2004-05 오른쪽 풀백의 꾸준한 가동률·수비 밸런스, UCL 13경기 출전을 고려 |
| DM | 아키스 지코스 | Akis Zikos | AS Monaco FC | 1974-06-01 | B+ | 모나코 수비형 중원의 위치 선정과 전환 차단을 2003-04에서 2004-05까지 이어감 |
| CM | 팀 보로프스키 | Tim Borowski | SV Werder Bremen | 1980-05-02 | B+ | 2002-03~2004-05 베르더 중앙의 공격 연결과 활동량에서 꾸준한 주전 기여 |
| RW | 히카르두 콰레스마 | Ricardo Quaresma | FC Porto | — | B+ | 2002-03 스포르팅 성장 이후 2003-04 바르셀로나 제한된 기용을 거쳐 2004-05 포르투 오른쪽 측면에서 재기 |
| ST | 하비에르 사비올라 | Javier Saviola | AS Monaco FC | 1981-12-11 | B+ | 2002-03 바르셀로나 전방 활약과 2004-05 모나코에서의 골문 앞 움직임을 비교; 꾸준한 정상급 여부 유보 |

### Individual source provenance

- Official [UEFA 2004-05 UCL player stats](https://www.uefa.com/uefachampionsleague/history/seasons/2004/statistics/) for scored goals, assists, and saves.
- [UEFA 2005 club awards](https://www.uefa.com/uefasupercup/news/0250-0c50f2685494-fcd8fe2dcb5b-1000--gerrard-gains-european-acclaim/): Steven Gerrard MVP, Petr Čech goalkeeper, John Terry defender, Kaká midfielder, Ronaldinho forward.
- [UEFA 2005 finalist starting XI document](https://www.uefa.com/newsfiles/UCL/2004/1086988_LU.pdf); [UEFA final report](https://www.uefa.com/uefachampionsleague/match/80813--liverpool-vs-milan/).
- [UEFA official historical appendix](https://www.uefa.com/MultimediaFiles/Download/EuroExperience/uefaorg/Publications/01/53/55/84/1535584_DOWNLOAD.pdf) for 2004-05 Liverpool individual appearances.
- Historical player DOBs / league starts link to **existing in-project** 2004-05 domestic season JSON files, not treated as independently certified:
  `data/premierleague-2004-05.json`, `data/laliga-2004-05.json`, `data/seriea-2004-05.json`, `data/bundesliga-2004-05.json`, `data/ligue1-2004-05.json`. Each crosslink preserves league-only scope.

## 7. Explicit source discrepancy discovered in domestic archive

Robert Pirès appears as **1973-01-29** in a prior Premier League 2004-05 DRAFT archive, but the correct DOB is **1973-10-29**, established by [Sky Sports](https://www.skysports.com/football/player/23439/robert-pires) and [Transfermarkt](https://www.transfermarkt.co.uk/robert-pires/profil/spieler/3185). This UCL record retains **1973-10-29**; **prior domestic records remain unmodified**, awaiting explicit review.

## 8. Unfinished certification gates

1. Reconstruct **16 club season-long representative XI** from all matches, individual starts, minutes and actual tactical usage; one match's 11 players do not establish season-long starter status.
2. Determine up to **one eligible starter-level alternate by each relevant position**, keeping CB left/right and winger left/right separately when supported. Avoid filling nonexistent slots and excluding legitimate UCL starters.
3. Cross-verify dates of birth against at least two sources; resolve name spellings, unconfirmed starts/minutes, injury and transfer scope, and player participation during the actual 2004-05 UCL main draw.
4. Evaluate every eligible player individually across 2002-03, 2003-04 and 2004-05 with recency weighting; do not treat UEFA team awards or club titles as sole grade evidence.
5. Conduct true **cross-club positional peer grading** and sequence GK→CB→LB→RB→DM→CM→CAM→LW→RW→ST. Provisional `tier` values require user approval before final rankings.
6. Confirm historically prevalent formation, then propose and independently audit exactly 11 Best XI. The current `bestXi: []` is an intentional research hold.
7. Validate GitHub Actions workflow success and real GitHub Pages display in browser. GitHub API write/read success alone is insufficient.

## 9. Original historical sources

- [RSSSF — 2004/05 European Cups](https://www.rsssf.org/ec/ec200405.html)
- [RSSSF — Champions League match lineups](https://www.rsssf.org/ec/ec200405det.html)
- [UEFA — season results and stats](https://www.uefa.com/uefachampionsleague/history/seasons/2004/statistics/)
- [UEFA — 2005 awards](https://www.uefa.com/uefasupercup/news/0250-0c50f2685494-fcd8fe2dcb5b-1000--gerrard-gains-european-acclaim/)
- [UEFA — official 2005 final XI](https://www.uefa.com/newsfiles/UCL/2004/1086988_LU.pdf)
- [UEFA — 2004/05 competition appendix](https://www.uefa.com/MultimediaFiles/Download/EuroExperience/uefaorg/Publications/01/53/55/84/1535584_DOWNLOAD.pdf)
