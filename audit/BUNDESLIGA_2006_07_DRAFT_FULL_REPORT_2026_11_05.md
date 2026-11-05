# Football Archive — Bundesliga 2006-07 DRAFT FULL REPORT — 2026-11-05 Historical Corrections

Repository: https://github.com/wjdduddlf112/footballarch ; branch `main`.
Live preview target: https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=2006-07
**STATUS: DRAFT / proposed_unapproved. The historical full-audit gate is NOT COMPLETE and this report does NOT certify all players.**

## 1. European qualification (actual 2007-08 participants)

| 2006-07 rank | Original club | Competition actually played | Qualification path |
|---:|---|---|---|
| 1 | VfB Stuttgart | UCL | 2006-07 Bundesliga champions, 2007-08 Champions League |
| 2 | FC Schalke 04 | UCL | 2006-07 Bundesliga runners-up, 2007-08 Champions League |
| 3 | SV Werder Bremen | UCL | 2006-07 Bundesliga third place, 2007-08 Champions League qualifying |
| 4 | FC Bayern München | UEFA Cup | 2006-07 Bundesliga fourth place, 2007-08 UEFA Cup |
| 5 | Bayer 04 Leverkusen | UEFA Cup | 2006-07 Bundesliga fifth place, 2007-08 UEFA Cup |
| 6 | 1.FC Nürnberg | UEFA Cup | 2006-07 DFB-Pokal champions, 2007-08 UEFA Cup |
| 7 | Hamburger SV | Intertoto Cup | Actual 2007 UEFA Intertoto Cup match participation, progressed to 2007-08 UEFA Cup |

Sources: https://rsssf.org/tablesd/duit07.html ; https://www.uefa.com/uefaeuropaleague/news/025a-0ea9e6e9f04b-1337e3137926-1000--bundesliga-rivals-to-learn-uefa-cup-fate/ ; HSV actually played Intertoto: https://www.uefa.com/uefaeuropaleague/news/01ca-0e6f0a438b8f-80cc008132db-1000--german-flavour-to-round-of-16/ . Nürnberg entered via DFB-Pokal. No inferred extra qualifying clubs.

## 2. Historical correction log (actual JSON changes)

1. **Markus Rosenberg, Bremen ST:** Was coded `starter` despite 14 league games, only 4 starts, 572 minutes, and 8 goals. Independently checked against DFB + FBref; corrected role to `backup`. Kept B+ as provisional impact-sub assessment; 2004-05/05-06 foreign records remain unverified.
2. **Ivan Klasnić, Bremen ST:** Former `backup` nomination (12 appearances, 4 starts, 1 goal) was removed from the *selected* list because the team/position may carry at most one backup and Rosenberg demonstrated substantially greater 2006-07 impact. Historical Werder participation is explicitly preserved in candidateAudit.excludedAfterVerification. His documented January 2007 kidney transplant is an availability explanation, not a judgment of intrinsic football ability.
3. **Frank Rost, Schalke → HSV GK:** Retained two club-stint rows because both qualify as genuine 2006-07 club participation, but annotated them as ONE person (126 distinct people in 127 candidate rows). The 2004-05 season 31 apps/31 starts, 2005-06 32/32, and 2006-07 Schalke 7/7 + HSV 17/17 were independently checked and written into both club-stint JSON records. The two GK positional ranks refer to different club spells and must not be interpreted as two humans.
4. **Historical verification remains partial:** Player-specific club-season starts/goals/positions still need independent evidence and qualitative comparison, beyond the five limited three-season appearances/goals cases. All 127 nominees keep `partially_verified`, not `verified`. Missing values remain `null`.

Independent sources:
- https://www.uefa.com/news-media/news/01bd-0f84abcafc97-fa98a1a06777-1000--hamburg-sign-rost-from-schalke/
- https://datencenter.dfb.de/datencenter/personen/frank-rost/spieler
- https://www.rsssf.org/players/rostdata.html
- https://fbref.com/en/squads/c539e393/2004-2005/Schalke-04-Stats
- https://fbref.com/en/squads/c539e393/2005-2006/Schalke-04-Stats
- https://fbref.com/en/squads/c539e393/2006-2007/Schalke-04-Stats
- https://fbref.com/en/squads/26790c6a/2006-2007/Hamburger-SV-Stats
- https://datencenter.dfb.de/personen/markus-rosenberg/spieler/spiele-in-saison/bundesliga/2006-2007/werder-bremen
- https://fbref.com/en/squads/62add3bf/2006-2007/Werder-Bremen-Stats
- https://www.uefa.com/uefaeuropaleague/news/01bd-0e6e21c115b2-881c2ba005de-1000--klasnic-set-for-kidney-transplant/

## 3. Complete clubwise nominations

Total nominated club-stints: **127**; unique people: **126**. Starters: **102**, backups: **25**. Qualifying clubs: 7. A substitute is optional but at most one per club+position. No arbitrary starter count limit.

### VfB Stuttgart — 17 selected (14 starter-equivalent; 3 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 티모 힐데브란트 | Timo Hildebrand | VfB Stuttgart | 1979-04-05 | starter | 33/33/0 | A+ | 1 | partially_verified |
| GK | 미하엘 랑거 | Michael Langer | VfB Stuttgart | 1985-01-06 | backup | 1/1/0 | C- | 14 | partially_verified |
| CB | 마티외 델피에르 | Matthieu Delpierre | VfB Stuttgart | 1981-04-26 | starter | 33/33/0 | A0 | 3 | partially_verified |
| CB | 페르난두 메이라 | Fernando Meira | VfB Stuttgart | 1978-06-05 | starter | 20/19/3 | A- | 10 | partially_verified |
| CB | 세르다르 타슈치 | Serdar Taşçı | VfB Stuttgart | 1987-04-24 | starter | 26/22/2 | B+ | 13 | partially_verified |
| LB | 루도비크 마냉 | Ludovic Magnin | VfB Stuttgart | 1979-04-20 | starter | 22/19/1 | B+ | 7 | partially_verified |
| LB | 아르튀르 보카 | Arthur Boka | VfB Stuttgart | 1983-04-02 | starter | 19/16/1 | B0 | 10 | partially_verified |
| RB | 리카르도 오소리오 | Ricardo Osorio | VfB Stuttgart | 1980-03-30 | starter | 27/26/1 | A- | 3 | partially_verified |
| DM | 파벨 파르도 | Pável Pardo | VfB Stuttgart | 1976-07-26 | starter | 33/33/1 | A0 | 2 | partially_verified |
| CM | 토마스 히츨슈페르거 | Thomas Hitzlsperger | VfB Stuttgart | 1982-04-05 | starter | 30/25/7 | A0 | 2 | partially_verified |
| CM | 사미 케디라 | Sami Khedira | VfB Stuttgart | 1987-04-04 | starter | 22/16/4 | B+ | 8 | partially_verified |
| CM | 크리스티안 겐트너 | Christian Gentner | VfB Stuttgart | 1985-08-14 | backup | 15/3/0 | C+ | 14 | partially_verified |
| CAM | 안토니우 다 시우바 | Antônio da Silva | VfB Stuttgart | 1978-06-13 | starter | 28/20/0 | B+ | 4 | partially_verified |
| RW | 로베르토 힐베르트 | Roberto Hilbert | VfB Stuttgart | 1984-10-16 | starter | 34/31/7 | A0 | 1 | partially_verified |
| ST | 마리오 고메스 | Mario Gómez | VfB Stuttgart | 1985-07-10 | starter | 25/22/14 | A+ | 4 | partially_verified |
| ST | 카카우 | Cacau | VfB Stuttgart | 1981-03-27 | starter | 32/31/13 | A0 | 5 | partially_verified |
| ST | 마르코 슈트렐러 | Marco Streller | VfB Stuttgart | 1981-06-18 | backup | 27/7/5 | B- | 21 | partially_verified |

Tactics: 4-4-2 (provisional). Pardo holding; Hitzlsperger, da Silva, Hilbert midfield, Gómez–Cacau forwards. Lineup variants require matchwise frequency analysis.

### FC Schalke 04 — 18 selected (14 starter-equivalent; 4 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 | 1986-03-27 | starter | 27/27/0 | A- | 5 | partially_verified |
| GK | 프랑크 로스트 | Frank Rost | FC Schalke 04 | 1973-06-30 | backup | 7/7/0 | B0 | 9 | partially_verified |
| CB | 마르셀루 보르동 | Marcelo Bordon | FC Schalke 04 | 1976-01-07 | starter | 28/28/3 | A+ | 2 | partially_verified |
| CB | 믈라덴 크르스타이치 | Mladen Krstajić | FC Schalke 04 | 1974-03-04 | starter | 27/27/1 | A- | 9 | partially_verified |
| LB | 다리오 로드리게스 | Darío Rodríguez | FC Schalke 04 | 1974-09-17 | starter | 26/24/1 | B+ | 4 | partially_verified |
| LB | 크리스티안 판더 | Christian Pander | FC Schalke 04 | 1983-08-28 | starter | 16/15/2 | B+ | 9 | partially_verified |
| RB | 하피냐 | Rafinha | FC Schalke 04 | 1985-09-07 | starter | 31/31/2 | A0 | 1 | partially_verified |
| DM | 즐라탄 바이람오비치 | Zlatan Bajramović | FC Schalke 04 | 1979-08-12 | starter | 27/22/2 | B+ | 6 | partially_verified |
| CM | 레반 코비아슈빌리 | Levan Kobiashvili | FC Schalke 04 | 1977-07-10 | starter | 29/24/3 | A- | 3 | partially_verified |
| CM | 파비안 에른스트 | Fabian Ernst | FC Schalke 04 | 1979-05-30 | starter | 26/24/0 | A- | 4 | partially_verified |
| CAM | 링콘 | Lincoln | FC Schalke 04 | 1979-01-22 | starter | 23/20/3 | A- | 3 | partially_verified |
| CAM | 메수트 외질 | Mesut Özil | FC Schalke 04 | 1988-10-15 | backup | 19/7/0 | B- | 7 | partially_verified |
| LW | 페테르 뢰벤크란스 | Peter Løvenkrands | FC Schalke 04 | 1980-01-29 | starter | 24/19/6 | B+ | 4 | partially_verified |
| RW | 하미트 알튼토프 | Hamit Altıntop | FC Schalke 04 | 1982-12-08 | starter | 31/17/2 | B+ | 7 | partially_verified |
| RW | 구스타보 바렐라 | Gustavo Varela | FC Schalke 04 | 1978-05-14 | backup | 18/13/2 | B0 | 8 | partially_verified |
| ST | 케빈 쿠라니 | Kevin Kurányi | FC Schalke 04 | 1982-03-02 | starter | 34/33/15 | A+ | 1 | partially_verified |
| ST | 할릴 알튼토프 | Halil Altıntop | FC Schalke 04 | 1982-12-08 | starter | 34/25/6 | B+ | 10 | partially_verified |
| ST | 게랄트 아사모아 | Gerald Asamoah | FC Schalke 04 | 1978-10-03 | backup | 13/7/2 | B- | 22 | partially_verified |

Tactics: 4-3-1-2 (provisional). Neuer/Rost rotation in goal; Rafinha/Bordon/Krstajić core, Ernst–Bajramović behind Lincoln, Kurányi–Halil Altıntop forwards.

### SV Werder Bremen — 19 selected (14 starter-equivalent; 5 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 팀 비제 | Tim Wiese | SV Werder Bremen | 1981-12-17 | starter | 31/31/0 | A- | 4 | partially_verified |
| GK | 안드레아스 라인케 | Andreas Reinke | SV Werder Bremen | 1969-01-10 | backup | 3/3/0 | C+ | 12 | partially_verified |
| CB | 나우두 | Naldo | SV Werder Bremen | 1982-09-10 | starter | 32/32/6 | A+ | 1 | partially_verified |
| CB | 페어 메르테자커 | Per Mertesacker | SV Werder Bremen | 1984-09-29 | starter | 25/24/2 | A0 | 6 | partially_verified |
| CB | 페트리 파사넨 | Petri Pasanen | SV Werder Bremen | 1980-09-24 | backup | 17/12/0 | B0 | 18 | partially_verified |
| LB | 피에르 워메 | Pierre Womé | SV Werder Bremen | 1979-03-26 | starter | 28/27/2 | B+ | 3 | partially_verified |
| LB | 크리스티안 슐츠 | Christian Schulz | SV Werder Bremen | 1983-04-01 | backup | 19/10/2 | B0 | 11 | partially_verified |
| RB | 클레멘스 프리츠 | Clemens Fritz | SV Werder Bremen | 1980-12-07 | starter | 32/32/1 | A- | 2 | partially_verified |
| RB | 파트리크 오보모옐라 | Patrick Owomoyela | SV Werder Bremen | 1979-11-05 | backup | 9/5/0 | C+ | 10 | partially_verified |
| DM | 토르스텐 프링스 | Torsten Frings | SV Werder Bremen | 1976-11-22 | starter | 33/33/1 | A+ | 1 | partially_verified |
| DM | 프랑크 바우만 | Frank Baumann | SV Werder Bremen | 1975-10-29 | starter | 17/15/0 | B+ | 10 | partially_verified |
| CM | 팀 보로프스키 | Tim Borowski | SV Werder Bremen | 1980-05-02 | starter | 17/16/2 | A- | 5 | partially_verified |
| CM | 유리차 브라녜시 | Jurica Vranješ | SV Werder Bremen | 1980-01-30 | starter | 25/15/4 | B+ | 9 | partially_verified |
| CM | 다니엘 옌센 | Daniel Jensen | SV Werder Bremen | 1979-06-25 | starter | 23/14/4 | B+ | 10 | partially_verified |
| CAM | 지에구 | Diego | SV Werder Bremen | 1985-02-28 | starter | 33/33/13 | S | 1 | partially_verified |
| LW | 아론 훈트 | Aaron Hunt | SV Werder Bremen | 1986-09-04 | starter | 28/18/9 | A- | 3 | partially_verified |
| ST | 미로슬라프 클로제 | Miroslav Klose | SV Werder Bremen | 1978-06-09 | starter | 31/31/13 | A+ | 3 | partially_verified |
| ST | 우구 알메이다 | Hugo Almeida | SV Werder Bremen | 1984-05-23 | starter | 28/11/5 | B+ | 14 | partially_verified |
| ST | 마르쿠스 로센베리 | Markus Rosenberg | SV Werder Bremen | 1982-09-27 | backup | 14/4/8 | B+ | 15 | partially_verified |

Tactics: 4-3-1-2 (provisional). Diego 10; Frings controlling midfield, Frings/Borowski/Jensen roles vary, Klose with Almeida/Klasnić/Rosenberg rotating.

### FC Bayern München — 18 selected (14 starter-equivalent; 4 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 올리버 칸 | Oliver Kahn | FC Bayern München | 1969-06-15 | starter | 32/32/0 | A+ | 2 | partially_verified |
| GK | 미하엘 렌징 | Michael Rensing | FC Bayern München | 1984-05-14 | backup | 1/1/0 | C+ | 13 | partially_verified |
| CB | 루시우 | Lúcio | FC Bayern München | 1978-05-08 | starter | 26/25/0 | A0 | 5 | partially_verified |
| CB | 다니엘 판 바위턴 | Daniel van Buyten | FC Bayern München | 1978-02-07 | starter | 31/31/3 | A- | 8 | partially_verified |
| LB | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | starter | 34/34/1 | A+ | 1 | partially_verified |
| RB | 윌리 사뇰 | Willy Sagnol | FC Bayern München | 1977-03-18 | starter | 23/23/1 | A- | 4 | partially_verified |
| RB | 크리스티안 렐 | Christian Lell | FC Bayern München | 1984-08-29 | backup | 12/8/0 | B- | 8 | partially_verified |
| DM | 안드레아스 오틀 | Andreas Ottl | FC Bayern München | 1985-03-01 | starter | 24/23/1 | B+ | 5 | partially_verified |
| DM | 마르틴 데미첼리스 | Martin Demichelis | FC Bayern München | 1980-12-20 | starter | 26/18/3 | B+ | 8 | partially_verified |
| DM | 오언 하그리브스 | Owen Hargreaves | FC Bayern München | 1981-01-20 | backup | 9/9/0 | B0 | 12 | partially_verified |
| CM | 마르크 판 보멀 | Mark van Bommel | FC Bayern München | 1977-04-22 | starter | 29/29/6 | A0 | 1 | partially_verified |
| CAM | 알리 카리미 | Ali Karimi | FC Bayern München | 1978-11-08 | backup | 13/7/1 | B- | 6 | partially_verified |
| LW | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | starter | 27/26/4 | A- | 1 | partially_verified |
| RW | 하산 살리하미지치 | Hasan Salihamidžić | FC Bayern München | 1977-01-01 | starter | 29/25/4 | A- | 4 | partially_verified |
| ST | 로이 마카이 | Roy Makaay | FC Bayern München | 1975-03-09 | starter | 33/31/16 | A+ | 2 | partially_verified |
| ST | 클라우디오 피사로 | Claudio Pizarro | FC Bayern München | 1978-10-03 | starter | 33/23/8 | A- | 7 | partially_verified |
| ST | 로케 산타크루스 | Roque Santa Cruz | FC Bayern München | 1981-08-16 | starter | 26/12/2 | B0 | 18 | partially_verified |
| ST | 루카스 포돌스키 | Lukas Podolski | FC Bayern München | 1985-06-04 | starter | 22/11/4 | B0 | 19 | partially_verified |

Tactics: 4-4-2 (provisional). Lahm–Lucio–van Buyten–Sagnol; van Bommel, Ottl, Schweinsteiger, Salihamidžić; Makaay/Pizarro/Podolski rotation.

### Bayer 04 Leverkusen — 18 selected (16 starter-equivalent; 2 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 레네 아들러 | René Adler | Bayer 04 Leverkusen | 1985-01-15 | starter | 11/11/0 | A- | 7 | partially_verified |
| GK | 한스외르크 부트 | Hans-Jörg Butt | Bayer 04 Leverkusen | 1974-05-28 | starter | 22/22/0 | B+ | 8 | partially_verified |
| CB | 주앙 | Juan | Bayer 04 Leverkusen | 1979-02-01 | starter | 28/28/2 | A0 | 4 | partially_verified |
| CB | 카림 하기 | Karim Haggui | Bayer 04 Leverkusen | 1984-01-20 | starter | 24/22/0 | B+ | 14 | partially_verified |
| CB | 아흐메드 마두니 | Ahmed Madouni | Bayer 04 Leverkusen | 1980-10-04 | starter | 15/13/2 | B0 | 17 | partially_verified |
| CB | 얀잉베르 칼젠브라커 | Jan-Ingwer Callsen-Bracker | Bayer 04 Leverkusen | 1984-09-23 | backup | 15/10/1 | B- | 19 | partially_verified |
| LB | 마르코 바비치 | Marko Babić | Bayer 04 Leverkusen | 1981-01-21 | starter | 25/20/2 | B+ | 5 | partially_verified |
| LB | 프레드리크 스텐만 | Fredrik Stenman | Bayer 04 Leverkusen | 1983-06-02 | backup | 13/9/0 | B- | 13 | partially_verified |
| RB | 곤살로 카스트로 | Gonzalo Castro | Bayer 04 Leverkusen | 1987-06-11 | starter | 26/26/3 | B+ | 6 | partially_verified |
| DM | 지몬 롤페스 | Simon Rolfes | Bayer 04 Leverkusen | 1982-01-21 | starter | 34/33/3 | A- | 3 | partially_verified |
| DM | 카르스텐 라멜로프 | Carsten Ramelow | Bayer 04 Leverkusen | 1974-03-20 | starter | 13/13/2 | B0 | 11 | partially_verified |
| CM | 피르민 슈베글러 | Pirmin Schwegler | Bayer 04 Leverkusen | 1987-03-09 | starter | 21/13/0 | B0 | 12 | partially_verified |
| LW | 트란퀼로 바르네타 | Tranquillo Barnetta | Bayer 04 Leverkusen | 1985-05-22 | starter | 30/26/1 | A- | 2 | partially_verified |
| RW | 베른트 슈나이더 | Bernd Schneider | Bayer 04 Leverkusen | 1973-11-17 | starter | 31/31/6 | A0 | 2 | partially_verified |
| RW | 파울 프라이어 | Paul Freier | Bayer 04 Leverkusen | 1979-07-26 | starter | 31/21/3 | B+ | 6 | partially_verified |
| ST | 세르게이 바르바레즈 | Sergej Barbarez | Bayer 04 Leverkusen | 1971-09-17 | starter | 32/30/7 | A- | 6 | partially_verified |
| ST | 안드리 보로닌 | Andriy Voronin | Bayer 04 Leverkusen | 1979-07-21 | starter | 31/21/10 | A- | 8 | partially_verified |
| ST | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 | starter | 32/19/8 | B+ | 12 | partially_verified |

Tactics: 4-4-2 (provisional). Castro–Juan–Haggui–Babić; Rolfes controlling and Schneider/Barnetta wide; Barbarez–Voronin–Kießling forward rotation.

### 1.FC Nürnberg — 17 selected (13 starter-equivalent; 4 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 라파엘 셰퍼 | Raphael Schäfer | 1.FC Nürnberg | 1979-01-30 | starter | 34/34/0 | A- | 3 | partially_verified |
| CB | 안드레아스 볼프 | Andreas Wolf | 1.FC Nürnberg | 1982-06-12 | starter | 32/32/1 | A- | 7 | partially_verified |
| CB | 글라우베르 | Gláuber | 1.FC Nürnberg | 1983-08-05 | starter | 20/18/0 | B+ | 15 | partially_verified |
| CB | 마이클 보챔프 | Michael Beauchamp | 1.FC Nürnberg | 1981-03-08 | starter | 18/16/1 | B0 | 16 | partially_verified |
| LB | 하비에르 피놀라 | Javier Pinola | 1.FC Nürnberg | 1983-02-24 | starter | 32/31/1 | A- | 2 | partially_verified |
| LB | 브라티슬라프 그레슈코 | Vratislav Greško | 1.FC Nürnberg | 1977-07-24 | backup | 15/10/1 | B0 | 12 | partially_verified |
| RB | 도미니크 라인하르트 | Dominik Reinhardt | 1.FC Nürnberg | 1984-12-19 | starter | 30/29/0 | B+ | 5 | partially_verified |
| DM | 토마시 갈라세크 | Tomáš Galásek | 1.FC Nürnberg | 1973-01-15 | starter | 32/32/2 | A- | 4 | partially_verified |
| DM | 자우하르 음나리 | Jawhar Mnari | 1.FC Nürnberg | 1976-11-08 | starter | 23/21/3 | B+ | 7 | partially_verified |
| CM | 얀 폴라크 | Jan Polák | 1.FC Nürnberg | 1981-03-14 | starter | 30/20/3 | B+ | 7 | partially_verified |
| CM | 이비차 바노비치 | Ivica Banović | 1.FC Nürnberg | 1980-08-02 | backup | 25/8/5 | B0 | 13 | partially_verified |
| CAM | 마레크 민탈 | Marek Mintál | 1.FC Nürnberg | 1977-09-02 | backup | 13/8/1 | B- | 5 | partially_verified |
| LW | 얀 크리스티안센 | Jan Kristiansen | 1.FC Nürnberg | 1981-08-04 | starter | 20/13/0 | B0 | 6 | partially_verified |
| RW | 이반 사옌코 | Ivan Saenko | 1.FC Nürnberg | 1983-10-17 | starter | 32/30/9 | A- | 3 | partially_verified |
| ST | 마르쿠스 슈로트 | Markus Schroth | 1.FC Nürnberg | 1975-01-25 | starter | 31/30/6 | B+ | 9 | partially_verified |
| ST | 로베르트 비테크 | Róbert Vittek | 1.FC Nürnberg | 1982-04-01 | starter | 24/24/4 | B+ | 11 | partially_verified |
| ST | 춘리 파겐부르크 | Chhunly Pagenburg | 1.FC Nürnberg | 1986-11-10 | backup | 10/3/1 | C+ | 23 | partially_verified |

Tactics: 4-4-2 (provisional). Pinola–Wolf–Gláuber/Beauchamp–Reinhardt, Galásek and Mnari midfield; Saenko, Schroth, Vittek attack.

### Hamburger SV — 20 selected (17 starter-equivalent; 3 backup)

| Position | Korean | Original | Club original | DOB | Role | Apps / starts / goals | Tier | Rank | Historical status |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 프랑크 로스트 | Frank Rost | Hamburger SV | 1973-06-30 | starter | 17/17/0 | A- | 6 | partially_verified |
| GK | 자샤 키르슈슈타인 | Sascha Kirschstein | Hamburger SV | 1980-06-09 | starter | 9/9/0 | B- | 10 | partially_verified |
| GK | 슈테판 베히터 | Stefan Wächter | Hamburger SV | 1978-04-20 | starter | 9/8/0 | B- | 11 | partially_verified |
| CB | 요리스 마테이선 | Joris Mathijsen | Hamburger SV | 1980-04-05 | starter | 32/31/0 | B+ | 11 | partially_verified |
| CB | 바스티안 라인하르트 | Bastian Reinhardt | Hamburger SV | 1975-11-19 | starter | 25/25/1 | B+ | 12 | partially_verified |
| LB | 티모테 아투바 | Thimothée Atouba | Hamburger SV | 1982-02-17 | starter | 21/20/0 | B+ | 6 | partially_verified |
| LB | 후안 소린 | Juan Sorín | Hamburger SV | 1976-05-05 | starter | 19/17/4 | B+ | 8 | partially_verified |
| RB | 콜린 벤저민 | Collin Benjamin | Hamburger SV | 1978-08-03 | starter | 21/21/2 | B0 | 7 | partially_verified |
| RB | 기 드멜 | Guy Demel | Hamburger SV | 1981-06-13 | backup | 8/8/0 | B- | 9 | partially_verified |
| DM | 나이절 더용 | Nigel de Jong | Hamburger SV | 1984-11-30 | starter | 18/16/0 | B+ | 9 | partially_verified |
| DM | 라파엘 비키 | Raphaël Wicky | Hamburger SV | 1977-04-26 | backup | 14/10/0 | B- | 13 | partially_verified |
| CM | 다비트 야롤림 | David Jarolím | Hamburger SV | 1979-05-17 | starter | 30/30/2 | B+ | 6 | partially_verified |
| CM | 알렉산더 라스 | Alexander Laas | Hamburger SV | 1984-05-05 | starter | 21/15/1 | B0 | 11 | partially_verified |
| CAM | 라파엘 판데르파르트 | Rafael van der Vaart | Hamburger SV | 1983-02-11 | starter | 26/26/8 | A+ | 2 | partially_verified |
| LW | 표트르 트로호프스키 | Piotr Trochowski | Hamburger SV | 1984-03-22 | starter | 26/16/2 | B+ | 5 | partially_verified |
| RW | 메흐디 마다비키아 | Mehdi Mahdavikia | Hamburger SV | 1977-07-24 | starter | 27/20/2 | A- | 5 | partially_verified |
| ST | 이비차 올리치 | Ivica Olić | Hamburger SV | 1979-09-14 | starter | 15/13/5 | B+ | 13 | partially_verified |
| ST | 부바카르 사노고 | Boubacar Sanogo | Hamburger SV | 1982-12-17 | starter | 31/19/4 | B0 | 16 | partially_verified |
| ST | 다니엘 류보야 | Danijel Ljuboja | Hamburger SV | 1978-09-04 | starter | 16/12/5 | B0 | 17 | partially_verified |
| ST | 파올로 게레로 | Paolo Guerrero | Hamburger SV | 1984-01-01 | backup | 20/7/5 | B0 | 20 | partially_verified |

Tactics: 4-2-3-1 (provisional). Rost joined in winter after Kirschstein/Wächter starts; van der Vaart 10, Trochowski/Mahdavikia wide, Sanogo/Olić/Ljuboja/Guerrero up front.

## 4. Tier distribution

| Tier | Count |
|---|---:|
| S | 1 |
| A+ | 11 |
| A0 | 11 |
| A- | 28 |
| B+ | 38 |
| B0 | 20 |
| B- | 12 |
| C+ | 5 |
| C0 | 0 |
| C- | 1 |
| D | 0 |
| 미평가 | 0 |

World Class (S/A+): **12**; League Top Class (S/A+/A0/A-): **51**.

## 5. Integrated positional rankings (club-stint rows, provisional)

### GK

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 티모 힐데브란트 (Timo Hildebrand) | VfB Stuttgart | A+ | starter |
| 2 | 올리버 칸 (Oliver Kahn) | FC Bayern München | A+ | starter |
| 3 | 라파엘 셰퍼 (Raphael Schäfer) | 1.FC Nürnberg | A- | starter |
| 4 | 팀 비제 (Tim Wiese) | SV Werder Bremen | A- | starter |
| 5 | 마누엘 노이어 (Manuel Neuer) | FC Schalke 04 | A- | starter |
| 6 | 프랑크 로스트 (Frank Rost) | Hamburger SV | A- | starter |
| 7 | 레네 아들러 (René Adler) | Bayer 04 Leverkusen | A- | starter |
| 8 | 한스외르크 부트 (Hans-Jörg Butt) | Bayer 04 Leverkusen | B+ | starter |
| 9 | 프랑크 로스트 (Frank Rost) | FC Schalke 04 | B0 | backup |
| 10 | 자샤 키르슈슈타인 (Sascha Kirschstein) | Hamburger SV | B- | starter |
| 11 | 슈테판 베히터 (Stefan Wächter) | Hamburger SV | B- | starter |
| 12 | 안드레아스 라인케 (Andreas Reinke) | SV Werder Bremen | C+ | backup |
| 13 | 미하엘 렌징 (Michael Rensing) | FC Bayern München | C+ | backup |
| 14 | 미하엘 랑거 (Michael Langer) | VfB Stuttgart | C- | backup |

### CB

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 나우두 (Naldo) | SV Werder Bremen | A+ | starter |
| 2 | 마르셀루 보르동 (Marcelo Bordon) | FC Schalke 04 | A+ | starter |
| 3 | 마티외 델피에르 (Matthieu Delpierre) | VfB Stuttgart | A0 | starter |
| 4 | 주앙 (Juan) | Bayer 04 Leverkusen | A0 | starter |
| 5 | 루시우 (Lúcio) | FC Bayern München | A0 | starter |
| 6 | 페어 메르테자커 (Per Mertesacker) | SV Werder Bremen | A0 | starter |
| 7 | 안드레아스 볼프 (Andreas Wolf) | 1.FC Nürnberg | A- | starter |
| 8 | 다니엘 판 바위턴 (Daniel van Buyten) | FC Bayern München | A- | starter |
| 9 | 믈라덴 크르스타이치 (Mladen Krstajić) | FC Schalke 04 | A- | starter |
| 10 | 페르난두 메이라 (Fernando Meira) | VfB Stuttgart | A- | starter |
| 11 | 요리스 마테이선 (Joris Mathijsen) | Hamburger SV | B+ | starter |
| 12 | 바스티안 라인하르트 (Bastian Reinhardt) | Hamburger SV | B+ | starter |
| 13 | 세르다르 타슈치 (Serdar Taşçı) | VfB Stuttgart | B+ | starter |
| 14 | 카림 하기 (Karim Haggui) | Bayer 04 Leverkusen | B+ | starter |
| 15 | 글라우베르 (Gláuber) | 1.FC Nürnberg | B+ | starter |
| 16 | 마이클 보챔프 (Michael Beauchamp) | 1.FC Nürnberg | B0 | starter |
| 17 | 아흐메드 마두니 (Ahmed Madouni) | Bayer 04 Leverkusen | B0 | starter |
| 18 | 페트리 파사넨 (Petri Pasanen) | SV Werder Bremen | B0 | backup |
| 19 | 얀잉베르 칼젠브라커 (Jan-Ingwer Callsen-Bracker) | Bayer 04 Leverkusen | B- | backup |

### LB

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 필리프 람 (Philipp Lahm) | FC Bayern München | A+ | starter |
| 2 | 하비에르 피놀라 (Javier Pinola) | 1.FC Nürnberg | A- | starter |
| 3 | 피에르 워메 (Pierre Womé) | SV Werder Bremen | B+ | starter |
| 4 | 다리오 로드리게스 (Darío Rodríguez) | FC Schalke 04 | B+ | starter |
| 5 | 마르코 바비치 (Marko Babić) | Bayer 04 Leverkusen | B+ | starter |
| 6 | 티모테 아투바 (Thimothée Atouba) | Hamburger SV | B+ | starter |
| 7 | 루도비크 마냉 (Ludovic Magnin) | VfB Stuttgart | B+ | starter |
| 8 | 후안 소린 (Juan Sorín) | Hamburger SV | B+ | starter |
| 9 | 크리스티안 판더 (Christian Pander) | FC Schalke 04 | B+ | starter |
| 10 | 아르튀르 보카 (Arthur Boka) | VfB Stuttgart | B0 | starter |
| 11 | 크리스티안 슐츠 (Christian Schulz) | SV Werder Bremen | B0 | backup |
| 12 | 브라티슬라프 그레슈코 (Vratislav Greško) | 1.FC Nürnberg | B0 | backup |
| 13 | 프레드리크 스텐만 (Fredrik Stenman) | Bayer 04 Leverkusen | B- | backup |

### RB

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 하피냐 (Rafinha) | FC Schalke 04 | A0 | starter |
| 2 | 클레멘스 프리츠 (Clemens Fritz) | SV Werder Bremen | A- | starter |
| 3 | 리카르도 오소리오 (Ricardo Osorio) | VfB Stuttgart | A- | starter |
| 4 | 윌리 사뇰 (Willy Sagnol) | FC Bayern München | A- | starter |
| 5 | 도미니크 라인하르트 (Dominik Reinhardt) | 1.FC Nürnberg | B+ | starter |
| 6 | 곤살로 카스트로 (Gonzalo Castro) | Bayer 04 Leverkusen | B+ | starter |
| 7 | 콜린 벤저민 (Collin Benjamin) | Hamburger SV | B0 | starter |
| 8 | 크리스티안 렐 (Christian Lell) | FC Bayern München | B- | backup |
| 9 | 기 드멜 (Guy Demel) | Hamburger SV | B- | backup |
| 10 | 파트리크 오보모옐라 (Patrick Owomoyela) | SV Werder Bremen | C+ | backup |

### DM

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 토르스텐 프링스 (Torsten Frings) | SV Werder Bremen | A+ | starter |
| 2 | 파벨 파르도 (Pável Pardo) | VfB Stuttgart | A0 | starter |
| 3 | 지몬 롤페스 (Simon Rolfes) | Bayer 04 Leverkusen | A- | starter |
| 4 | 토마시 갈라세크 (Tomáš Galásek) | 1.FC Nürnberg | A- | starter |
| 5 | 안드레아스 오틀 (Andreas Ottl) | FC Bayern München | B+ | starter |
| 6 | 즐라탄 바이람오비치 (Zlatan Bajramović) | FC Schalke 04 | B+ | starter |
| 7 | 자우하르 음나리 (Jawhar Mnari) | 1.FC Nürnberg | B+ | starter |
| 8 | 마르틴 데미첼리스 (Martin Demichelis) | FC Bayern München | B+ | starter |
| 9 | 나이절 더용 (Nigel de Jong) | Hamburger SV | B+ | starter |
| 10 | 프랑크 바우만 (Frank Baumann) | SV Werder Bremen | B+ | starter |
| 11 | 카르스텐 라멜로프 (Carsten Ramelow) | Bayer 04 Leverkusen | B0 | starter |
| 12 | 오언 하그리브스 (Owen Hargreaves) | FC Bayern München | B0 | backup |
| 13 | 라파엘 비키 (Raphaël Wicky) | Hamburger SV | B- | backup |

### CM

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 마르크 판 보멀 (Mark van Bommel) | FC Bayern München | A0 | starter |
| 2 | 토마스 히츨슈페르거 (Thomas Hitzlsperger) | VfB Stuttgart | A0 | starter |
| 3 | 레반 코비아슈빌리 (Levan Kobiashvili) | FC Schalke 04 | A- | starter |
| 4 | 파비안 에른스트 (Fabian Ernst) | FC Schalke 04 | A- | starter |
| 5 | 팀 보로프스키 (Tim Borowski) | SV Werder Bremen | A- | starter |
| 6 | 다비트 야롤림 (David Jarolím) | Hamburger SV | B+ | starter |
| 7 | 얀 폴라크 (Jan Polák) | 1.FC Nürnberg | B+ | starter |
| 8 | 사미 케디라 (Sami Khedira) | VfB Stuttgart | B+ | starter |
| 9 | 유리차 브라녜시 (Jurica Vranješ) | SV Werder Bremen | B+ | starter |
| 10 | 다니엘 옌센 (Daniel Jensen) | SV Werder Bremen | B+ | starter |
| 11 | 알렉산더 라스 (Alexander Laas) | Hamburger SV | B0 | starter |
| 12 | 피르민 슈베글러 (Pirmin Schwegler) | Bayer 04 Leverkusen | B0 | starter |
| 13 | 이비차 바노비치 (Ivica Banović) | 1.FC Nürnberg | B0 | backup |
| 14 | 크리스티안 겐트너 (Christian Gentner) | VfB Stuttgart | C+ | backup |

### CAM

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 지에구 (Diego) | SV Werder Bremen | S | starter |
| 2 | 라파엘 판데르파르트 (Rafael van der Vaart) | Hamburger SV | A+ | starter |
| 3 | 링콘 (Lincoln) | FC Schalke 04 | A- | starter |
| 4 | 안토니우 다 시우바 (Antônio da Silva) | VfB Stuttgart | B+ | starter |
| 5 | 마레크 민탈 (Marek Mintál) | 1.FC Nürnberg | B- | backup |
| 6 | 알리 카리미 (Ali Karimi) | FC Bayern München | B- | backup |
| 7 | 메수트 외질 (Mesut Özil) | FC Schalke 04 | B- | backup |

### LW

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 바스티안 슈바인슈타이거 (Bastian Schweinsteiger) | FC Bayern München | A- | starter |
| 2 | 트란퀼로 바르네타 (Tranquillo Barnetta) | Bayer 04 Leverkusen | A- | starter |
| 3 | 아론 훈트 (Aaron Hunt) | SV Werder Bremen | A- | starter |
| 4 | 페테르 뢰벤크란스 (Peter Løvenkrands) | FC Schalke 04 | B+ | starter |
| 5 | 표트르 트로호프스키 (Piotr Trochowski) | Hamburger SV | B+ | starter |
| 6 | 얀 크리스티안센 (Jan Kristiansen) | 1.FC Nürnberg | B0 | starter |

### RW

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 로베르토 힐베르트 (Roberto Hilbert) | VfB Stuttgart | A0 | starter |
| 2 | 베른트 슈나이더 (Bernd Schneider) | Bayer 04 Leverkusen | A0 | starter |
| 3 | 이반 사옌코 (Ivan Saenko) | 1.FC Nürnberg | A- | starter |
| 4 | 하산 살리하미지치 (Hasan Salihamidžić) | FC Bayern München | A- | starter |
| 5 | 메흐디 마다비키아 (Mehdi Mahdavikia) | Hamburger SV | A- | starter |
| 6 | 파울 프라이어 (Paul Freier) | Bayer 04 Leverkusen | B+ | starter |
| 7 | 하미트 알튼토프 (Hamit Altıntop) | FC Schalke 04 | B+ | starter |
| 8 | 구스타보 바렐라 (Gustavo Varela) | FC Schalke 04 | B0 | backup |

### ST

| Pos rank | Player (original) | Club | Tier | Role |
|---:|---|---|---|---|
| 1 | 케빈 쿠라니 (Kevin Kurányi) | FC Schalke 04 | A+ | starter |
| 2 | 로이 마카이 (Roy Makaay) | FC Bayern München | A+ | starter |
| 3 | 미로슬라프 클로제 (Miroslav Klose) | SV Werder Bremen | A+ | starter |
| 4 | 마리오 고메스 (Mario Gómez) | VfB Stuttgart | A+ | starter |
| 5 | 카카우 (Cacau) | VfB Stuttgart | A0 | starter |
| 6 | 세르게이 바르바레즈 (Sergej Barbarez) | Bayer 04 Leverkusen | A- | starter |
| 7 | 클라우디오 피사로 (Claudio Pizarro) | FC Bayern München | A- | starter |
| 8 | 안드리 보로닌 (Andriy Voronin) | Bayer 04 Leverkusen | A- | starter |
| 9 | 마르쿠스 슈로트 (Markus Schroth) | 1.FC Nürnberg | B+ | starter |
| 10 | 할릴 알튼토프 (Halil Altıntop) | FC Schalke 04 | B+ | starter |
| 11 | 로베르트 비테크 (Róbert Vittek) | 1.FC Nürnberg | B+ | starter |
| 12 | 슈테판 키슬링 (Stefan Kießling) | Bayer 04 Leverkusen | B+ | starter |
| 13 | 이비차 올리치 (Ivica Olić) | Hamburger SV | B+ | starter |
| 14 | 우구 알메이다 (Hugo Almeida) | SV Werder Bremen | B+ | starter |
| 15 | 마르쿠스 로센베리 (Markus Rosenberg) | SV Werder Bremen | B+ | backup |
| 16 | 부바카르 사노고 (Boubacar Sanogo) | Hamburger SV | B0 | starter |
| 17 | 다니엘 류보야 (Danijel Ljuboja) | Hamburger SV | B0 | starter |
| 18 | 로케 산타크루스 (Roque Santa Cruz) | FC Bayern München | B0 | starter |
| 19 | 루카스 포돌스키 (Lukas Podolski) | FC Bayern München | B0 | starter |
| 20 | 파올로 게레로 (Paolo Guerrero) | Hamburger SV | B0 | backup |
| 21 | 마르코 슈트렐러 (Marco Streller) | VfB Stuttgart | B- | backup |
| 22 | 게랄트 아사모아 (Gerald Asamoah) | FC Schalke 04 | B- | backup |
| 23 | 춘리 파겐부르크 (Chhunly Pagenburg) | 1.FC Nürnberg | C+ | backup |

## 6. World Class / League Top Class

| Classification | Players |
|---|---|
| World Class (S/A+) | 티모 힐데브란트 (VfB Stuttgart, GK, A+); 마리오 고메스 (VfB Stuttgart, ST, A+); 마르셀루 보르동 (FC Schalke 04, CB, A+); 케빈 쿠라니 (FC Schalke 04, ST, A+); 나우두 (SV Werder Bremen, CB, A+); 토르스텐 프링스 (SV Werder Bremen, DM, A+); 지에구 (SV Werder Bremen, CAM, S); 미로슬라프 클로제 (SV Werder Bremen, ST, A+); 올리버 칸 (FC Bayern München, GK, A+); 필리프 람 (FC Bayern München, LB, A+); 로이 마카이 (FC Bayern München, ST, A+); 라파엘 판데르파르트 (Hamburger SV, CAM, A+) |
| League Top Class additional A0/A- | 마티외 델피에르 (VfB Stuttgart, CB, A0); 페르난두 메이라 (VfB Stuttgart, CB, A-); 리카르도 오소리오 (VfB Stuttgart, RB, A-); 파벨 파르도 (VfB Stuttgart, DM, A0); 토마스 히츨슈페르거 (VfB Stuttgart, CM, A0); 로베르토 힐베르트 (VfB Stuttgart, RW, A0); 카카우 (VfB Stuttgart, ST, A0); 마누엘 노이어 (FC Schalke 04, GK, A-); 믈라덴 크르스타이치 (FC Schalke 04, CB, A-); 하피냐 (FC Schalke 04, RB, A0); 파비안 에른스트 (FC Schalke 04, CM, A-); 레반 코비아슈빌리 (FC Schalke 04, CM, A-); 링콘 (FC Schalke 04, CAM, A-); 팀 비제 (SV Werder Bremen, GK, A-); 페어 메르테자커 (SV Werder Bremen, CB, A0); 클레멘스 프리츠 (SV Werder Bremen, RB, A-); 팀 보로프스키 (SV Werder Bremen, CM, A-); 아론 훈트 (SV Werder Bremen, LW, A-); 루시우 (FC Bayern München, CB, A0); 다니엘 판 바위턴 (FC Bayern München, CB, A-); 윌리 사뇰 (FC Bayern München, RB, A-); 마르크 판 보멀 (FC Bayern München, CM, A0); 바스티안 슈바인슈타이거 (FC Bayern München, LW, A-); 하산 살리하미지치 (FC Bayern München, RW, A-); 클라우디오 피사로 (FC Bayern München, ST, A-); 레네 아들러 (Bayer 04 Leverkusen, GK, A-); 주앙 (Bayer 04 Leverkusen, CB, A0); 지몬 롤페스 (Bayer 04 Leverkusen, DM, A-); 트란퀼로 바르네타 (Bayer 04 Leverkusen, LW, A-); 베른트 슈나이더 (Bayer 04 Leverkusen, RW, A0); 세르게이 바르바레즈 (Bayer 04 Leverkusen, ST, A-); 안드리 보로닌 (Bayer 04 Leverkusen, ST, A-); 라파엘 셰퍼 (1.FC Nürnberg, GK, A-); 안드레아스 볼프 (1.FC Nürnberg, CB, A-); 하비에르 피놀라 (1.FC Nürnberg, LB, A-); 토마시 갈라세크 (1.FC Nürnberg, DM, A-); 이반 사옌코 (1.FC Nürnberg, RW, A-); 프랑크 로스트 (Hamburger SV, GK, A-); 메흐디 마다비키아 (Hamburger SV, RW, A-) |

## 7. Period representative formation and Best XI

Formation: **4-4-2 with diamond (4-3-1-2 roles)** displayed as supported **4-4-2** diamond. Frequency ranking across all Bundesliga 2006-07 line-ups is not independently established, hence *provisional* not proven league modal formation.

| Position | Player | Club | Tier | Rationale |
|---|---|---|---|---|
| GK | 티모 힐데브란트 (Timo Hildebrand) | VfB Stuttgart | A+ | Full-season top-level reliability (33 league starts) |
| CB | 마르셀루 보르동 (Marcelo Bordon) | FC Schalke 04 | A+ | Elite high-usage centre-back and defensive organisation |
| CB | 나우두 (Naldo) | SV Werder Bremen | A+ | 32 starts and six goals with outstanding centre-back contribution |
| LB | 필리프 람 (Philipp Lahm) | FC Bayern München | A+ | 34 fullback starts and high two-way consistency |
| RB | 하피냐 (Rafinha) | FC Schalke 04 | A0 | 31 starts, impactful attacking fullback |
| DM | 토르스텐 프링스 (Torsten Frings) | SV Werder Bremen | A+ | 33 starts, deep-midfield control and ball recovery |
| CM | 토마스 히츨슈페르거 (Thomas Hitzlsperger) | VfB Stuttgart | A0 | 2006-07 30 league appearances, 25 starts, seven goals and active central midfield distribution. Unlike Pardo he occupies a genuine CM slot; the strongest DM Frings remains at DM. Individual historical comparison pending. |
| CM | 마르크 판 보멀 (Mark van Bommel) | FC Bayern München | A0 | 29 starts and six goals with central passing/press resistance |
| CAM | 지에구 (Diego) | SV Werder Bremen | S | 33 starts and 13 goals, primary attacking orchestration |
| ST | 마리오 고메스 (Mario Gómez) | VfB Stuttgart | A+ | 14 goals in 25 games as leading young striker |
| ST | 케빈 쿠라니 (Kevin Kurányi) | FC Schalke 04 | A+ | 15 goals from 34 games and year-long centre-forward role |

Status: `proposed_unapproved`, strictly 11 unique selected players. No trophy-based bonus.

## 8. EVERY player 3-season personal evidence matrix

Season cell format: Club appearances/starts/goals. `?` means actual evidence missing, not zero. An independent appearances check alone does **not** verify personal skill/position/quality.

| Current club | Position | Player | 2004-05 | 2005-06 | 2006-07 | Tier | Verification |
|---|---|---|---|---|---|---|---|
| VfB Stuttgart | GK | Timo Hildebrand | VfB Stuttgart 34/34/0 (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 33/33/0 (추가검증 필요) | A+ | partially_verified |
| VfB Stuttgart | GK | Michael Langer | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 1/1/0 (추가검증 필요) | C- | partially_verified |
| VfB Stuttgart | CB | Matthieu Delpierre | VfB Stuttgart ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 33/33/0 (추가검증 필요) | A0 | partially_verified |
| VfB Stuttgart | CB | Fernando Meira | VfB Stuttgart ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 20/19/3 (추가검증 필요) | A- | partially_verified |
| VfB Stuttgart | CB | Serdar Taşçı | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 26/22/2 (추가검증 필요) | B+ | partially_verified |
| VfB Stuttgart | LB | Ludovic Magnin | SV Werder Bremen ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 22/19/1 (추가검증 필요) | B+ | partially_verified |
| VfB Stuttgart | LB | Arthur Boka | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 19/16/1 (추가검증 필요) | B0 | partially_verified |
| VfB Stuttgart | RB | Ricardo Osorio | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 27/26/1 (추가검증 필요) | A- | partially_verified |
| VfB Stuttgart | DM | Pável Pardo | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 33/33/1 (추가검증 필요) | A0 | partially_verified |
| VfB Stuttgart | CM | Thomas Hitzlsperger | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 30/25/7 (추가검증 필요) | A0 | partially_verified |
| VfB Stuttgart | CM | Sami Khedira | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 22/16/4 (추가검증 필요) | B+ | partially_verified |
| VfB Stuttgart | CM | Christian Gentner | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 15/3/0 (추가검증 필요) | C+ | partially_verified |
| VfB Stuttgart | CAM | Antônio da Silva | 1.FSV Mainz 05 32/31/5 (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 28/20/0 (추가검증 필요) | B+ | partially_verified |
| VfB Stuttgart | RW | Roberto Hilbert | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 34/31/7 (추가검증 필요) | A0 | partially_verified |
| VfB Stuttgart | ST | Mario Gómez | VfB Stuttgart 8/?/0 (추가검증 필요) | VfB Stuttgart 30/?/6 (추가검증 필요) | VfB Stuttgart 25/22/14 (추가검증 필요) | A+ | partially_verified |
| VfB Stuttgart | ST | Cacau | VfB Stuttgart 32/31/12 (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 32/31/13 (추가검증 필요) | A0 | partially_verified |
| VfB Stuttgart | ST | Marco Streller | VfB Stuttgart ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | VfB Stuttgart 27/7/5 (추가검증 필요) | B- | partially_verified |
| FC Schalke 04 | GK | Manuel Neuer | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 27/27/0 (추가검증 필요) | A- | partially_verified |
| FC Schalke 04 | GK | Frank Rost | FC Schalke 04 31/31/0 (독립 출전기록 확인) | FC Schalke 04 32/32/0 (독립 출전기록 확인) | FC Schalke 04 7/7/0 (독립 출전기록 확인) | B0 | partially_verified |
| FC Schalke 04 | CB | Marcelo Bordon | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 28/28/3 (추가검증 필요) | A+ | partially_verified |
| FC Schalke 04 | CB | Mladen Krstajić | FC Schalke 04 28/28/1 (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 27/27/1 (추가검증 필요) | A- | partially_verified |
| FC Schalke 04 | LB | Darío Rodríguez | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 26/24/1 (추가검증 필요) | B+ | partially_verified |
| FC Schalke 04 | LB | Christian Pander | FC Schalke 04 ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 16/15/2 (추가검증 필요) | B+ | partially_verified |
| FC Schalke 04 | RB | Rafinha | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 31/31/2 (추가검증 필요) | A0 | partially_verified |
| FC Schalke 04 | DM | Zlatan Bajramović | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 27/22/2 (추가검증 필요) | B+ | partially_verified |
| FC Schalke 04 | CM | Levan Kobiashvili | FC Schalke 04 32/32/3 (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 29/24/3 (추가검증 필요) | A- | partially_verified |
| FC Schalke 04 | CM | Fabian Ernst | SV Werder Bremen 33/33/2 (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 26/24/0 (추가검증 필요) | A- | partially_verified |
| FC Schalke 04 | CAM | Lincoln | FC Schalke 04 31/?/12 (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 23/20/3 (추가검증 필요) | A- | partially_verified |
| FC Schalke 04 | CAM | Mesut Özil | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 19/7/0 (추가검증 필요) | B- | partially_verified |
| FC Schalke 04 | LW | Peter Løvenkrands | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 24/19/6 (추가검증 필요) | B+ | partially_verified |
| FC Schalke 04 | RW | Hamit Altıntop | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 31/17/2 (추가검증 필요) | B+ | partially_verified |
| FC Schalke 04 | RW | Gustavo Varela | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 18/13/2 (추가검증 필요) | B0 | partially_verified |
| FC Schalke 04 | ST | Kevin Kurányi | VfB Stuttgart 29/?/13 (추가검증 필요) | FC Schalke 04 30/?/10 (추가검증 필요) | FC Schalke 04 34/33/15 (추가검증 필요) | A+ | partially_verified |
| FC Schalke 04 | ST | Halil Altıntop | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Schalke 04 34/25/6 (추가검증 필요) | B+ | partially_verified |
| FC Schalke 04 | ST | Gerald Asamoah | FC Schalke 04 31/31/8 (독립 출전기록 확인) | FC Schalke 04 ?/?/? (독립 출전기록 확인) | FC Schalke 04 13/7/2 (추가검증 필요) | B- | partially_verified |
| SV Werder Bremen | GK | Tim Wiese | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 31/31/0 (추가검증 필요) | A- | partially_verified |
| SV Werder Bremen | GK | Andreas Reinke | SV Werder Bremen 34/34/0 (독립 출전기록 확인) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 3/3/0 (추가검증 필요) | C+ | partially_verified |
| SV Werder Bremen | CB | Naldo | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 32/32/2 (독립 출전기록 확인) | SV Werder Bremen 32/32/6 (추가검증 필요) | A+ | partially_verified |
| SV Werder Bremen | CB | Per Mertesacker | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 25/24/2 (추가검증 필요) | A0 | partially_verified |
| SV Werder Bremen | CB | Petri Pasanen | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 17/12/0 (추가검증 필요) | B0 | partially_verified |
| SV Werder Bremen | LB | Pierre Womé | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 28/27/2 (추가검증 필요) | B+ | partially_verified |
| SV Werder Bremen | LB | Christian Schulz | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 30/29/0 (독립 출전기록 확인) | SV Werder Bremen 19/10/2 (추가검증 필요) | B0 | partially_verified |
| SV Werder Bremen | RB | Clemens Fritz | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 32/32/1 (추가검증 필요) | A- | partially_verified |
| SV Werder Bremen | RB | Patrick Owomoyela | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 32/27/0 (독립 출전기록 확인) | SV Werder Bremen 9/5/0 (추가검증 필요) | C+ | partially_verified |
| SV Werder Bremen | DM | Torsten Frings | FC Bayern München 29/?/3 (추가검증 필요) | Werder Bremen 28/28/3 (추가검증 필요) | Werder Bremen 33/33/1 (추가검증 필요) | A+ | partially_verified |
| SV Werder Bremen | DM | Frank Baumann | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 17/15/0 (추가검증 필요) | B+ | partially_verified |
| SV Werder Bremen | CM | Tim Borowski | SV Werder Bremen 31/30/7 (독립 출전기록 확인) | SV Werder Bremen 31/31/10 (독립 출전기록 확인) | SV Werder Bremen 17/16/2 (추가검증 필요) | A- | partially_verified |
| SV Werder Bremen | CM | Jurica Vranješ | VfB Stuttgart ?/?/? (독립 출전기록 확인) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 25/15/4 (추가검증 필요) | B+ | partially_verified |
| SV Werder Bremen | CM | Daniel Jensen | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 23/14/4 (추가검증 필요) | B+ | partially_verified |
| SV Werder Bremen | CAM | Diego | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 33/33/13 (추가검증 필요) | S | partially_verified |
| SV Werder Bremen | LW | Aaron Hunt | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen ?/?/? (독립 출전기록 확인) | SV Werder Bremen 28/18/9 (추가검증 필요) | A- | partially_verified |
| SV Werder Bremen | ST | Miroslav Klose | Werder Bremen 32/?/15 (추가검증 필요) | Werder Bremen 26/25/25 (추가검증 필요) | Werder Bremen 31/31/13 (추가검증 필요) | A+ | partially_verified |
| SV Werder Bremen | ST | Hugo Almeida | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 28/11/5 (추가검증 필요) | B+ | partially_verified |
| SV Werder Bremen | ST | Markus Rosenberg | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | SV Werder Bremen 14/4/8 (독립 출전기록 확인) | B+ | partially_verified |
| FC Bayern München | GK | Oliver Kahn | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 31/31/0 (독립 출전기록 확인) | FC Bayern München 32/32/0 (추가검증 필요) | A+ | partially_verified |
| FC Bayern München | GK | Michael Rensing | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 1/1/0 (추가검증 필요) | C+ | partially_verified |
| FC Bayern München | CB | Lúcio | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 30/30/2 (독립 출전기록 확인) | FC Bayern München 26/25/0 (추가검증 필요) | A0 | partially_verified |
| FC Bayern München | CB | Daniel van Buyten | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV ?/?/? (독립 출전기록 확인) | FC Bayern München 31/31/3 (추가검증 필요) | A- | partially_verified |
| FC Bayern München | LB | Philipp Lahm | VfB Stuttgart ?/?/? (독립 출전기록 확인) | FC Bayern München 20/12/0 (독립 출전기록 확인) | FC Bayern München 34/34/1 (추가검증 필요) | A+ | partially_verified |
| FC Bayern München | RB | Willy Sagnol | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 31/31/1 (독립 출전기록 확인) | FC Bayern München 23/23/1 (추가검증 필요) | A- | partially_verified |
| FC Bayern München | RB | Christian Lell | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Bayern München 12/8/0 (추가검증 필요) | B- | partially_verified |
| FC Bayern München | DM | Andreas Ottl | 구단 미확인 ?/?/? (추가검증 필요) | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 24/23/1 (추가검증 필요) | B+ | partially_verified |
| FC Bayern München | DM | Martin Demichelis | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 27/27/1 (독립 출전기록 확인) | FC Bayern München 26/18/3 (추가검증 필요) | B+ | partially_verified |
| FC Bayern München | DM | Owen Hargreaves | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 16/14/1 (독립 출전기록 확인) | FC Bayern München 9/9/0 (추가검증 필요) | B0 | partially_verified |
| FC Bayern München | CM | Mark van Bommel | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Bayern München 29/29/6 (추가검증 필요) | A0 | partially_verified |
| FC Bayern München | CAM | Ali Karimi | 구단 미확인 ?/?/? (추가검증 필요) | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 13/7/1 (추가검증 필요) | B- | partially_verified |
| FC Bayern München | LW | Bastian Schweinsteiger | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 30/20/3 (독립 출전기록 확인) | FC Bayern München 27/26/4 (추가검증 필요) | A- | partially_verified |
| FC Bayern München | RW | Hasan Salihamidžić | FC Bayern München ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | FC Bayern München 29/25/4 (추가검증 필요) | A- | partially_verified |
| FC Bayern München | ST | Roy Makaay | FC Bayern München 33/?/22 (독립 출전기록 확인) | FC Bayern München 31/29/17 (독립 출전기록 확인) | FC Bayern München 33/31/16 (추가검증 필요) | A+ | partially_verified |
| FC Bayern München | ST | Claudio Pizarro | FC Bayern München 23/?/11 (독립 출전기록 확인) | FC Bayern München 26/23/11 (독립 출전기록 확인) | FC Bayern München 33/23/8 (추가검증 필요) | A- | partially_verified |
| FC Bayern München | ST | Roque Santa Cruz | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München 26/12/2 (추가검증 필요) | B0 | partially_verified |
| FC Bayern München | ST | Lukas Podolski | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | FC Bayern München 22/11/4 (추가검증 필요) | B0 | partially_verified |
| Bayer 04 Leverkusen | GK | René Adler | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 11/11/0 (추가검증 필요) | A- | partially_verified |
| Bayer 04 Leverkusen | GK | Hans-Jörg Butt | Bayer 04 Leverkusen 34/34/1 (독립 출전기록 확인) | Bayer 04 Leverkusen 34/34/1 (독립 출전기록 확인) | Bayer 04 Leverkusen 22/22/0 (추가검증 필요) | B+ | partially_verified |
| Bayer 04 Leverkusen | CB | Juan | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen 30/30/3 (독립 출전기록 확인) | Bayer 04 Leverkusen 28/28/2 (추가검증 필요) | A0 | partially_verified |
| Bayer 04 Leverkusen | CB | Karim Haggui | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 24/22/0 (추가검증 필요) | B+ | partially_verified |
| Bayer 04 Leverkusen | CB | Ahmed Madouni | BV 09 Borussia Dortmund ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen 15/13/2 (추가검증 필요) | B0 | partially_verified |
| Bayer 04 Leverkusen | CB | Jan-Ingwer Callsen-Bracker | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 15/10/1 (추가검증 필요) | B- | partially_verified |
| Bayer 04 Leverkusen | LB | Marko Babić | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 25/20/2 (추가검증 필요) | B+ | partially_verified |
| Bayer 04 Leverkusen | LB | Fredrik Stenman | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen 13/9/0 (추가검증 필요) | B- | partially_verified |
| Bayer 04 Leverkusen | RB | Gonzalo Castro | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen 26/26/3 (추가검증 필요) | B+ | partially_verified |
| Bayer 04 Leverkusen | DM | Simon Rolfes | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 32/29/7 (독립 출전기록 확인) | Bayer 04 Leverkusen 34/33/3 (추가검증 필요) | A- | partially_verified |
| Bayer 04 Leverkusen | DM | Carsten Ramelow | Bayer 04 Leverkusen 31/31/1 (독립 출전기록 확인) | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen 13/13/2 (추가검증 필요) | B0 | partially_verified |
| Bayer 04 Leverkusen | CM | Pirmin Schwegler | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 21/13/0 (추가검증 필요) | B0 | partially_verified |
| Bayer 04 Leverkusen | LW | Tranquillo Barnetta | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen ?/?/6 (독립 출전기록 확인) | Bayer 04 Leverkusen 30/26/1 (추가검증 필요) | A- | partially_verified |
| Bayer 04 Leverkusen | RW | Bernd Schneider | Bayer 04 Leverkusen 33/33/3 (독립 출전기록 확인) | Bayer 04 Leverkusen 29/29/4 (독립 출전기록 확인) | Bayer 04 Leverkusen 31/31/6 (추가검증 필요) | A0 | partially_verified |
| Bayer 04 Leverkusen | RW | Paul Freier | Bayer 04 Leverkusen ?/?/? (독립 출전기록 확인) | Bayer 04 Leverkusen ?/?/6 (독립 출전기록 확인) | Bayer 04 Leverkusen 31/21/3 (추가검증 필요) | B+ | partially_verified |
| Bayer 04 Leverkusen | ST | Sergej Barbarez | Hamburger SV 30/?/11 (독립 출전기록 확인) | Hamburger SV 33/?/10 (독립 출전기록 확인) | Bayer 04 Leverkusen 32/30/7 (추가검증 필요) | A- | partially_verified |
| Bayer 04 Leverkusen | ST | Andriy Voronin | Bayer 04 Leverkusen 32/?/15 (독립 출전기록 확인) | Bayer 04 Leverkusen ?/?/7 (독립 출전기록 확인) | Bayer 04 Leverkusen 31/21/10 (추가검증 필요) | A- | partially_verified |
| Bayer 04 Leverkusen | ST | Stefan Kießling | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Bayer 04 Leverkusen 32/19/8 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | GK | Raphael Schäfer | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 34/34/0 (추가검증 필요) | A- | partially_verified |
| 1.FC Nürnberg | CB | Andreas Wolf | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 32/32/1 (추가검증 필요) | A- | partially_verified |
| 1.FC Nürnberg | CB | Gláuber | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 20/18/0 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | CB | Michael Beauchamp | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 18/16/1 (추가검증 필요) | B0 | partially_verified |
| 1.FC Nürnberg | LB | Javier Pinola | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 32/31/1 (추가검증 필요) | A- | partially_verified |
| 1.FC Nürnberg | LB | Vratislav Greško | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 15/10/1 (추가검증 필요) | B0 | partially_verified |
| 1.FC Nürnberg | RB | Dominik Reinhardt | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 30/29/0 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | DM | Tomáš Galásek | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 32/32/2 (추가검증 필요) | A- | partially_verified |
| 1.FC Nürnberg | DM | Jawhar Mnari | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 23/21/3 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | CM | Jan Polák | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 30/20/3 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | CM | Ivica Banović | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 25/8/5 (추가검증 필요) | B0 | partially_verified |
| 1.FC Nürnberg | CAM | Marek Mintál | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 13/8/1 (추가검증 필요) | B- | partially_verified |
| 1.FC Nürnberg | LW | Jan Kristiansen | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 20/13/0 (추가검증 필요) | B0 | partially_verified |
| 1.FC Nürnberg | RW | Ivan Saenko | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 32/30/9 (추가검증 필요) | A- | partially_verified |
| 1.FC Nürnberg | ST | Markus Schroth | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 31/30/6 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | ST | Róbert Vittek | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 24/24/4 (추가검증 필요) | B+ | partially_verified |
| 1.FC Nürnberg | ST | Chhunly Pagenburg | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | 1.FC Nürnberg 10/3/1 (추가검증 필요) | C+ | partially_verified |
| Hamburger SV | GK | Frank Rost | FC Schalke 04 31/31/0 (독립 출전기록 확인) | FC Schalke 04 32/32/0 (독립 출전기록 확인) | Hamburger SV 17/17/0 (독립 출전기록 확인) | A- | partially_verified |
| Hamburger SV | GK | Sascha Kirschstein | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 14/14/0 (독립 출전기록 확인) | Hamburger SV 9/9/0 (추가검증 필요) | B- | partially_verified |
| Hamburger SV | GK | Stefan Wächter | Hamburger SV 11/11/0 (독립 출전기록 확인) | Hamburger SV 20/20/0 (독립 출전기록 확인) | Hamburger SV 9/8/0 (추가검증 필요) | B- | partially_verified |
| Hamburger SV | CB | Joris Mathijsen | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 32/31/0 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | CB | Bastian Reinhardt | Hamburger SV 19/13/0 (독립 출전기록 확인) | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV 25/25/1 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | LB | Thimothée Atouba | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV 21/20/0 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | LB | Juan Sorín | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 19/17/4 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | RB | Collin Benjamin | Hamburger SV 26/15/? (독립 출전기록 확인) | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV 21/21/2 (추가검증 필요) | B0 | partially_verified |
| Hamburger SV | RB | Guy Demel | BV 09 Borussia Dortmund ?/?/? (독립 출전기록 확인) | Hamburger SV 22/20/1 (독립 출전기록 확인) | Hamburger SV 8/8/0 (추가검증 필요) | B- | partially_verified |
| Hamburger SV | DM | Nigel de Jong | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 12/12/1 (독립 출전기록 확인) | Hamburger SV 18/16/0 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | DM | Raphaël Wicky | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV 18/17/1 (독립 출전기록 확인) | Hamburger SV 14/10/0 (추가검증 필요) | B- | partially_verified |
| Hamburger SV | CM | David Jarolím | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV 30/30/2 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | CM | Alexander Laas | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 21/15/1 (추가검증 필요) | B0 | partially_verified |
| Hamburger SV | CAM | Rafael van der Vaart | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 19/18/8 (독립 출전기록 확인) | Hamburger SV 26/26/8 (추가검증 필요) | A+ | partially_verified |
| Hamburger SV | LW | Piotr Trochowski | Hamburger SV ?/?/? (독립 출전기록 확인) | Hamburger SV 32/24/5 (독립 출전기록 확인) | Hamburger SV 26/16/2 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | RW | Mehdi Mahdavikia | Hamburger SV 26/9/? (독립 출전기록 확인) | Hamburger SV ?/?/5 (독립 출전기록 확인) | Hamburger SV 27/20/2 (추가검증 필요) | A- | partially_verified |
| Hamburger SV | ST | Ivica Olić | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 15/13/5 (추가검증 필요) | B+ | partially_verified |
| Hamburger SV | ST | Boubacar Sanogo | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 31/19/4 (추가검증 필요) | B0 | partially_verified |
| Hamburger SV | ST | Danijel Ljuboja | 구단 미확인 ?/?/? (추가검증 필요) | 구단 미확인 ?/?/? (추가검증 필요) | Hamburger SV 16/12/5 (추가검증 필요) | B0 | partially_verified |
| Hamburger SV | ST | Paolo Guerrero | FC Bayern München ?/?/? (독립 출전기록 확인) | FC Bayern München ?/?/? (독립 출전기록 확인) | Hamburger SV 20/7/5 (추가검증 필요) | B0 | partially_verified |

## 9. Individual current-season performance assessments and pending verification

| Player / club | Position | Preliminary assessment | Outstanding evidence |
|---|---|---|---|
| Timo Hildebrand / VfB Stuttgart | GK | 2006-07 VfB Stuttgart에서 리그 33경기·선발 33회·0골; GK 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Michael Langer / VfB Stuttgart | GK | 2006-07 VfB Stuttgart에서 리그 1경기·선발 1회·0골; GK 후보 역할 근거의 C- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Matthieu Delpierre / VfB Stuttgart | CB | 2006-07 VfB Stuttgart에서 리그 33경기·선발 33회·0골; CB 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Fernando Meira / VfB Stuttgart | CB | 2006-07 VfB Stuttgart에서 리그 20경기·선발 19회·3골; CB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Serdar Taşçı / VfB Stuttgart | CB | 2006-07 VfB Stuttgart에서 리그 26경기·선발 22회·2골; CB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ludovic Magnin / VfB Stuttgart | LB | 2006-07 VfB Stuttgart에서 리그 22경기·선발 19회·1골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Arthur Boka / VfB Stuttgart | LB | 2006-07 VfB Stuttgart에서 리그 19경기·선발 16회·1골; LB 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ricardo Osorio / VfB Stuttgart | RB | 2006-07 VfB Stuttgart에서 리그 27경기·선발 26회·1골; RB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Pável Pardo / VfB Stuttgart | DM | 2006-07 VfB Stuttgart에서 리그 33경기·선발 33회·1골; DM 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Thomas Hitzlsperger / VfB Stuttgart | CM | 2006-07 VfB Stuttgart에서 리그 30경기·선발 25회·7골; CM 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Sami Khedira / VfB Stuttgart | CM | 2006-07 VfB Stuttgart에서 리그 22경기·선발 16회·4골; CM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Christian Gentner / VfB Stuttgart | CM | 2006-07 VfB Stuttgart에서 리그 15경기·선발 3회·0골; CM 후보 역할 근거의 C+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Antônio da Silva / VfB Stuttgart | CAM | 2006-07 VfB Stuttgart에서 리그 28경기·선발 20회·0골; CAM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Roberto Hilbert / VfB Stuttgart | RW | 2006-07 VfB Stuttgart에서 리그 34경기·선발 31회·7골; RW 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Mario Gómez / VfB Stuttgart | ST | DFB 개인기록 확인: 2004-05 8경기/0골(VfB Stuttgart), 2005-06 30경기/6골(VfB Stuttgart), 2006-07 25경기/14골(VfB Stuttgart). 최근 시즌 비중 최상위로 A+ 잠정 평가. 선발·실제 포지션별 경기 및 정성적 경기력은 추가 검증 필요. | three_season_qualitative_impact_and_starts_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Cacau / VfB Stuttgart | ST | 2006-07 VfB Stuttgart에서 리그 32경기·선발 31회·13골; ST 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Marco Streller / VfB Stuttgart | ST | 2006-07 VfB Stuttgart에서 리그 27경기·선발 7회·5골; ST 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Manuel Neuer / FC Schalke 04 | GK | 2006-07 FC Schalke 04에서 리그 27경기·선발 27회·0골; GK 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Frank Rost / FC Schalke 04 | GK | 2006-07 FC Schalke 04에서 리그 7경기·선발 7회·0골; GK 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. 추가 검증: 2004-05 샬케 31선발, 2005-06 샬케 32선발, 2006-07 샬케 7선발 + 함부르크 17선발(시즌 합산 24); 동시즌 이적자이므로 구단별 기록은 각각 별도 표시하며, 한 선수의 시즌 전체 출전을 두 번 더하지 않음. | matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending; matchwise_goalkeeping_quality_analysis_pending |
| Marcelo Bordon / FC Schalke 04 | CB | 2006-07 FC Schalke 04에서 리그 28경기·선발 28회·3골; CB 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Mladen Krstajić / FC Schalke 04 | CB | 2006-07 FC Schalke 04에서 리그 27경기·선발 27회·1골; CB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Darío Rodríguez / FC Schalke 04 | LB | 2006-07 FC Schalke 04에서 리그 26경기·선발 24회·1골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Christian Pander / FC Schalke 04 | LB | 2006-07 FC Schalke 04에서 리그 16경기·선발 15회·2골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Rafinha / FC Schalke 04 | RB | 2006-07 FC Schalke 04에서 리그 31경기·선발 31회·2골; RB 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Zlatan Bajramović / FC Schalke 04 | DM | 2006-07 FC Schalke 04에서 리그 27경기·선발 22회·2골; DM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Levan Kobiashvili / FC Schalke 04 | CM | 2006-07 FC Schalke 04에서 리그 29경기·선발 24회·3골; CM 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Fabian Ernst / FC Schalke 04 | CM | 2006-07 FC Schalke 04에서 리그 26경기·선발 24회·0골; CM 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Lincoln / FC Schalke 04 | CAM | 2006-07 FC Schalke 04에서 리그 23경기·선발 20회·3골; CAM 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Mesut Özil / FC Schalke 04 | CAM | 2006-07 FC Schalke 04에서 리그 19경기·선발 7회·0골; CAM 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Peter Løvenkrands / FC Schalke 04 | LW | 2006-07 FC Schalke 04에서 리그 24경기·선발 19회·6골; LW 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Hamit Altıntop / FC Schalke 04 | RW | 2006-07 FC Schalke 04에서 리그 31경기·선발 17회·2골; RW 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Gustavo Varela / FC Schalke 04 | RW | 2006-07 FC Schalke 04에서 리그 18경기·선발 13회·2골; RW 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Kevin Kurányi / FC Schalke 04 | ST | DFB 개인기록 확인: 2004-05 29경기/13골(VfB Stuttgart), 2005-06 30경기/10골(FC Schalke 04), 2006-07 34경기/15골(FC Schalke 04). 최근 시즌 비중 최상위로 A+ 잠정 평가. 선발·실제 포지션별 경기 및 정성적 경기력은 추가 검증 필요. | three_season_qualitative_impact_and_starts_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Halil Altıntop / FC Schalke 04 | ST | 2006-07 FC Schalke 04에서 리그 34경기·선발 25회·6골; ST 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Gerald Asamoah / FC Schalke 04 | ST | 2006-07 FC Schalke 04에서 리그 13경기·선발 7회·2골; ST 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Tim Wiese / SV Werder Bremen | GK | 2006-07 SV Werder Bremen에서 리그 31경기·선발 31회·0골; GK 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Andreas Reinke / SV Werder Bremen | GK | 2006-07 SV Werder Bremen에서 리그 3경기·선발 3회·0골; GK 후보 역할 근거의 C+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Naldo / SV Werder Bremen | CB | 2006-07 SV Werder Bremen에서 리그 32경기·선발 32회·6골; CB 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Per Mertesacker / SV Werder Bremen | CB | 2006-07 SV Werder Bremen에서 리그 25경기·선발 24회·2골; CB 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Petri Pasanen / SV Werder Bremen | CB | 2006-07 SV Werder Bremen에서 리그 17경기·선발 12회·0골; CB 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Pierre Womé / SV Werder Bremen | LB | 2006-07 SV Werder Bremen에서 리그 28경기·선발 27회·2골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Christian Schulz / SV Werder Bremen | LB | 2006-07 SV Werder Bremen에서 리그 19경기·선발 10회·2골; LB 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Clemens Fritz / SV Werder Bremen | RB | 2006-07 SV Werder Bremen에서 리그 32경기·선발 32회·1골; RB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Patrick Owomoyela / SV Werder Bremen | RB | 2006-07 SV Werder Bremen에서 리그 9경기·선발 5회·0골; RB 후보 역할 근거의 C+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Torsten Frings / SV Werder Bremen | DM | DFB 개인기록 확인: 2004-05 29경기/3골(FC Bayern München), 2005-06 28경기/3골(Werder Bremen), 2006-07 33경기/1골(Werder Bremen). 최근 시즌 비중 최상위로 A+ 잠정 평가. 선발·실제 포지션별 경기 및 정성적 경기력은 추가 검증 필요. | three_season_qualitative_impact_and_starts_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Frank Baumann / SV Werder Bremen | DM | 2006-07 SV Werder Bremen에서 리그 17경기·선발 15회·0골; DM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Tim Borowski / SV Werder Bremen | CM | 2006-07 SV Werder Bremen에서 리그 17경기·선발 16회·2골; CM 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Jurica Vranješ / SV Werder Bremen | CM | 2006-07 SV Werder Bremen에서 리그 25경기·선발 15회·4골; CM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Daniel Jensen / SV Werder Bremen | CM | 2006-07 SV Werder Bremen에서 리그 23경기·선발 14회·4골; CM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Diego / SV Werder Bremen | CAM | 2006-07 SV Werder Bremen에서 리그 33경기·선발 33회·13골; CAM 실질적 주전/교대 주전 역할 근거의 S 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Aaron Hunt / SV Werder Bremen | LW | 2006-07 SV Werder Bremen에서 리그 28경기·선발 18회·9골; LW 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Miroslav Klose / SV Werder Bremen | ST | DFB 개인기록 확인: 2004-05 32경기/15골(Werder Bremen), 2005-06 26경기/25골(Werder Bremen), 2006-07 31경기/13골(Werder Bremen). 최근 시즌 비중 최상위로 A+ 잠정 평가. 선발·실제 포지션별 경기 및 정성적 경기력은 추가 검증 필요. | three_season_qualitative_impact_and_starts_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Hugo Almeida / SV Werder Bremen | ST | 2006-07 SV Werder Bremen에서 리그 28경기·선발 11회·5골; ST 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Markus Rosenberg / SV Werder Bremen | ST | 2006-07 시즌 1월 아약스에서 합류하여 리그 14경기(4선발) 572분 8골. DFB와 FBref 기록 및 동시대 회고 자료상 고효율 조커로 분류하며, 고정 선발 주전으로 분류하지 않는다. 현재 시즌의 골 생산성과 영향력에 B+ 잠정 평가를 유지하되 2004-05/2005-06 해외 리그 활약 독립 검증 및 분당 영향력 상대 비교는 남아 있다. 구단 성적 자체는 평가 가산점으로 쓰지 않는다. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Oliver Kahn / FC Bayern München | GK | 2006-07 FC Bayern München에서 리그 32경기·선발 32회·0골; GK 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Michael Rensing / FC Bayern München | GK | 2006-07 FC Bayern München에서 리그 1경기·선발 1회·0골; GK 후보 역할 근거의 C+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Lúcio / FC Bayern München | CB | 2006-07 FC Bayern München에서 리그 26경기·선발 25회·0골; CB 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Daniel van Buyten / FC Bayern München | CB | 2006-07 FC Bayern München에서 리그 31경기·선발 31회·3골; CB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Philipp Lahm / FC Bayern München | LB | 2006-07 FC Bayern München에서 리그 34경기·선발 34회·1골; LB 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Willy Sagnol / FC Bayern München | RB | 2006-07 FC Bayern München에서 리그 23경기·선발 23회·1골; RB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Christian Lell / FC Bayern München | RB | 2006-07 FC Bayern München에서 리그 12경기·선발 8회·0골; RB 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Andreas Ottl / FC Bayern München | DM | 2006-07 FC Bayern München에서 리그 24경기·선발 23회·1골; DM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Martin Demichelis / FC Bayern München | DM | 2006-07 FC Bayern München에서 리그 26경기·선발 18회·3골; DM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Owen Hargreaves / FC Bayern München | DM | 2006-07 FC Bayern München에서 리그 9경기·선발 9회·0골; DM 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Mark van Bommel / FC Bayern München | CM | 2006-07 FC Bayern München에서 리그 29경기·선발 29회·6골; CM 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ali Karimi / FC Bayern München | CAM | 2006-07 FC Bayern München에서 리그 13경기·선발 7회·1골; CAM 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Bastian Schweinsteiger / FC Bayern München | LW | 2006-07 FC Bayern München에서 리그 27경기·선발 26회·4골; LW 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Hasan Salihamidžić / FC Bayern München | RW | 2006-07 FC Bayern München에서 리그 29경기·선발 25회·4골; RW 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Roy Makaay / FC Bayern München | ST | 2006-07 FC Bayern München에서 리그 33경기·선발 31회·16골; ST 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Claudio Pizarro / FC Bayern München | ST | 2006-07 FC Bayern München에서 리그 33경기·선발 23회·8골; ST 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Roque Santa Cruz / FC Bayern München | ST | 2006-07 FC Bayern München에서 리그 26경기·선발 12회·2골; ST 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Lukas Podolski / FC Bayern München | ST | 2006-07 FC Bayern München에서 리그 22경기·선발 11회·4골; ST 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| René Adler / Bayer 04 Leverkusen | GK | 2006-07 Bayer 04 Leverkusen에서 리그 11경기·선발 11회·0골; GK 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Hans-Jörg Butt / Bayer 04 Leverkusen | GK | 2006-07 Bayer 04 Leverkusen에서 리그 22경기·선발 22회·0골; GK 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Juan / Bayer 04 Leverkusen | CB | 2006-07 Bayer 04 Leverkusen에서 리그 28경기·선발 28회·2골; CB 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Karim Haggui / Bayer 04 Leverkusen | CB | 2006-07 Bayer 04 Leverkusen에서 리그 24경기·선발 22회·0골; CB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ahmed Madouni / Bayer 04 Leverkusen | CB | 2006-07 Bayer 04 Leverkusen에서 리그 15경기·선발 13회·2골; CB 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Jan-Ingwer Callsen-Bracker / Bayer 04 Leverkusen | CB | 2006-07 Bayer 04 Leverkusen에서 리그 15경기·선발 10회·1골; CB 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Marko Babić / Bayer 04 Leverkusen | LB | 2006-07 Bayer 04 Leverkusen에서 리그 25경기·선발 20회·2골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Fredrik Stenman / Bayer 04 Leverkusen | LB | 2006-07 Bayer 04 Leverkusen에서 리그 13경기·선발 9회·0골; LB 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Gonzalo Castro / Bayer 04 Leverkusen | RB | 2006-07 Bayer 04 Leverkusen에서 리그 26경기·선발 26회·3골; RB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Simon Rolfes / Bayer 04 Leverkusen | DM | 2006-07 Bayer 04 Leverkusen에서 리그 34경기·선발 33회·3골; DM 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Carsten Ramelow / Bayer 04 Leverkusen | DM | 2006-07 Bayer 04 Leverkusen에서 리그 13경기·선발 13회·2골; DM 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Pirmin Schwegler / Bayer 04 Leverkusen | CM | 2006-07 Bayer 04 Leverkusen에서 리그 21경기·선발 13회·0골; CM 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Tranquillo Barnetta / Bayer 04 Leverkusen | LW | 2006-07 Bayer 04 Leverkusen에서 리그 30경기·선발 26회·1골; LW 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Bernd Schneider / Bayer 04 Leverkusen | RW | 2006-07 Bayer 04 Leverkusen에서 리그 31경기·선발 31회·6골; RW 실질적 주전/교대 주전 역할 근거의 A 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Paul Freier / Bayer 04 Leverkusen | RW | 2006-07 Bayer 04 Leverkusen에서 리그 31경기·선발 21회·3골; RW 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Sergej Barbarez / Bayer 04 Leverkusen | ST | 2006-07 Bayer 04 Leverkusen에서 리그 32경기·선발 30회·7골; ST 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Andriy Voronin / Bayer 04 Leverkusen | ST | 2006-07 Bayer 04 Leverkusen에서 리그 31경기·선발 21회·10골; ST 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Stefan Kießling / Bayer 04 Leverkusen | ST | 2006-07 Bayer 04 Leverkusen에서 리그 32경기·선발 19회·8골; ST 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Raphael Schäfer / 1.FC Nürnberg | GK | 2006-07 1.FC Nürnberg에서 리그 34경기·선발 34회·0골; GK 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Andreas Wolf / 1.FC Nürnberg | CB | 2006-07 1.FC Nürnberg에서 리그 32경기·선발 32회·1골; CB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Gláuber / 1.FC Nürnberg | CB | 2006-07 1.FC Nürnberg에서 리그 20경기·선발 18회·0골; CB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Michael Beauchamp / 1.FC Nürnberg | CB | 2006-07 1.FC Nürnberg에서 리그 18경기·선발 16회·1골; CB 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Javier Pinola / 1.FC Nürnberg | LB | 2006-07 1.FC Nürnberg에서 리그 32경기·선발 31회·1골; LB 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Vratislav Greško / 1.FC Nürnberg | LB | 2006-07 1.FC Nürnberg에서 리그 15경기·선발 10회·1골; LB 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Dominik Reinhardt / 1.FC Nürnberg | RB | 2006-07 1.FC Nürnberg에서 리그 30경기·선발 29회·0골; RB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Tomáš Galásek / 1.FC Nürnberg | DM | 2006-07 1.FC Nürnberg에서 리그 32경기·선발 32회·2골; DM 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Jawhar Mnari / 1.FC Nürnberg | DM | 2006-07 1.FC Nürnberg에서 리그 23경기·선발 21회·3골; DM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Jan Polák / 1.FC Nürnberg | CM | 2006-07 1.FC Nürnberg에서 리그 30경기·선발 20회·3골; CM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ivica Banović / 1.FC Nürnberg | CM | 2006-07 1.FC Nürnberg에서 리그 25경기·선발 8회·5골; CM 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Marek Mintál / 1.FC Nürnberg | CAM | 2006-07 1.FC Nürnberg에서 리그 13경기·선발 8회·1골; CAM 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Jan Kristiansen / 1.FC Nürnberg | LW | 2006-07 1.FC Nürnberg에서 리그 20경기·선발 13회·0골; LW 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ivan Saenko / 1.FC Nürnberg | RW | 2006-07 1.FC Nürnberg에서 리그 32경기·선발 30회·9골; RW 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Markus Schroth / 1.FC Nürnberg | ST | 2006-07 1.FC Nürnberg에서 리그 31경기·선발 30회·6골; ST 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Róbert Vittek / 1.FC Nürnberg | ST | 2006-07 1.FC Nürnberg에서 리그 24경기·선발 24회·4골; ST 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Chhunly Pagenburg / 1.FC Nürnberg | ST | 2006-07 1.FC Nürnberg에서 리그 10경기·선발 3회·1골; ST 후보 역할 근거의 C+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Frank Rost / Hamburger SV | GK | 2006-07 Hamburger SV에서 리그 17경기·선발 17회·0골; GK 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. 추가 검증: 2004-05 샬케 31선발, 2005-06 샬케 32선발, 2006-07 샬케 7선발 + 함부르크 17선발(시즌 합산 24); 동시즌 이적자이므로 구단별 기록은 각각 별도 표시하며, 한 선수의 시즌 전체 출전을 두 번 더하지 않음. | matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending; matchwise_goalkeeping_quality_analysis_pending |
| Sascha Kirschstein / Hamburger SV | GK | 2006-07 Hamburger SV에서 리그 9경기·선발 9회·0골; GK 실질적 주전/교대 주전 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Stefan Wächter / Hamburger SV | GK | 2006-07 Hamburger SV에서 리그 9경기·선발 8회·0골; GK 실질적 주전/교대 주전 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Joris Mathijsen / Hamburger SV | CB | 2006-07 Hamburger SV에서 리그 32경기·선발 31회·0골; CB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Bastian Reinhardt / Hamburger SV | CB | 2006-07 Hamburger SV에서 리그 25경기·선발 25회·1골; CB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Thimothée Atouba / Hamburger SV | LB | 2006-07 Hamburger SV에서 리그 21경기·선발 20회·0골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Juan Sorín / Hamburger SV | LB | 2006-07 Hamburger SV에서 리그 19경기·선발 17회·4골; LB 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Collin Benjamin / Hamburger SV | RB | 2006-07 Hamburger SV에서 리그 21경기·선발 21회·2골; RB 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Guy Demel / Hamburger SV | RB | 2006-07 Hamburger SV에서 리그 8경기·선발 8회·0골; RB 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Nigel de Jong / Hamburger SV | DM | 2006-07 Hamburger SV에서 리그 18경기·선발 16회·0골; DM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Raphaël Wicky / Hamburger SV | DM | 2006-07 Hamburger SV에서 리그 14경기·선발 10회·0골; DM 후보 역할 근거의 B- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| David Jarolím / Hamburger SV | CM | 2006-07 Hamburger SV에서 리그 30경기·선발 30회·2골; CM 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Alexander Laas / Hamburger SV | CM | 2006-07 Hamburger SV에서 리그 21경기·선발 15회·1골; CM 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Rafael van der Vaart / Hamburger SV | CAM | 2006-07 Hamburger SV에서 리그 26경기·선발 26회·8골; CAM 실질적 주전/교대 주전 역할 근거의 A+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Piotr Trochowski / Hamburger SV | LW | 2006-07 Hamburger SV에서 리그 26경기·선발 16회·2골; LW 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Mehdi Mahdavikia / Hamburger SV | RW | 2006-07 Hamburger SV에서 리그 27경기·선발 20회·2골; RW 실질적 주전/교대 주전 역할 근거의 A- 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Ivica Olić / Hamburger SV | ST | 2006-07 Hamburger SV에서 리그 15경기·선발 13회·5골; ST 실질적 주전/교대 주전 역할 근거의 B+ 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Boubacar Sanogo / Hamburger SV | ST | 2006-07 Hamburger SV에서 리그 31경기·선발 19회·4골; ST 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Danijel Ljuboja / Hamburger SV | ST | 2006-07 Hamburger SV에서 리그 16경기·선발 12회·5골; ST 실질적 주전/교대 주전 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |
| Paolo Guerrero / Hamburger SV | ST | 2006-07 Hamburger SV에서 리그 20경기·선발 7회·5골; ST 후보 역할 근거의 B 잠정 티어. 2006-07 활약을 가장 크게 고려하며 2005-06·2004-05 개인 기록은 과거 아카이브의 미독립검증 자료와 비교해 보완 중. 팀 최종 순위 자체는 점수 가산하지 않음. | 2004_05_2005_06_independent_player_performance_verification_pending; matchwise_main_position_share_pending; independent_biographical_crosscheck_pending; assist_and_defensive_advanced_stats_pending |

## 10. Actual validation gates: DO NOT conflate

| Gate | Result represented by this report |
|---|---|
| Qualified clubs | 7 historically crosschecked |
| Candidate nominations | 127 player-club stints; 126 unique people; one backup per club-position at most |
| Actual current season apps/starts/goals | 127 rows linked to DFB roster/BDFutbol team seasonal stats; selected individual crosschecks above |
| Independent 3-season appearance/goal subset | 5 people (including Frank Rost); **not** full individual evaluation certification |
| Full historic individual form/position verification | **0 / 127** full claims; not passed |
| Tier entries | 127 / 127 **provisional only** |
| Positional ranks | 127 / 127 **provisional**; two club-stint entries for Frank Rost |
| Best XI | 11 / 11 proposed, NOT approved |
| In-memory structure test | Rebuilt and checked before the GitHub commit; formal CI script run needs separate workflow evidence |
| Actual GitHub Actions execution | **not independently observed in this report** |
| Actual GitHub Pages browser test | **not independently observed in this report**; Playwright script/workflow exist but a real PASS log is required |
| Final user approval | NOT GIVEN |

Unverified individual prior-season stats often originate from older Football Archive DRAFT JSON. Such copied figures are explicitly labelled unverified, never counted as independent historic proof. Qualitative comparisons by position and minutes/assists/defensive contributions remain unfinished for many.

**Stop after 2006-07; do not automatically evaluate 2007-08.**
