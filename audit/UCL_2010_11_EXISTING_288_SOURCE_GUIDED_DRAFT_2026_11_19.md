# UCL 2010-11 — source-guided audit of 288 existing candidates (2026-11-19)

> **USER-UNAPPROVED DRAFT.** The existing 288 players' tier/rank entries are retained or source-guidedly revised. **0 / 288** have a completed independent *three-season full individual matchwise audit*. Do not confuse filled tiers/ranks with completed historical player validation.

## Scope and method
- Main branch data: [ucl-2010-11.json](../data/ucl-2010-11.json). Original blob SHA: `8649ba1766f035ab4f1b714c99823d09053d547c`.
- Scope: existing 288 nominees in 16 previously evaluated clubs, with existing stable IDs and club affiliations preserved. No addition or removal.
- Three-season recency-weighted evaluation: **2010-11 highest**, 2009-10 second, 2008-09 third. Direct UCL individual contribution prioritized (UEFA team of season, goals, assists, midfield recovery, goalkeeper saves, role). Previous domestic league DRAFT tiers are NOT automatically copied.
- Team trophy and progression not themselves scored as an individual performance bonus. Previous individual European experience is considered, but the full audit is still pending.

## Overview
| Measure | Result |
|---|---:|
| Existing candidate count / preserved ID count | 288 / 288 |
| Existing tiers / ranks (before) | 288 / 288 |
| Provisional tiers / ranks (after) | 288 / 288 |
| Date of births populated | 288 |
| Amended tier records | 26 |
| Corrected primary positions | 3 |
| Checked individual UEFA 2010-11 goal counts | 37 |
| Matched UEFA technical-team selections | 21 |
| Direct UEFA 2010-11 assists | 5 |
| Direct UEFA 2010-11 recovered balls | 6 |
| Direct UEFA 2010-11 goalkeeper saves | 5 |
| Unverified/null individual UCL starts (before → after) | 277 → 274 |
| Three-season independently validated players | **0** |
| Actual website browser view / CI | **NOT tested** |

## Tier distribution
| Tier | Candidates |
|---|---:|
| S | 9 |
| A+ | 36 |
| A0 | 32 |
| A- | 31 |
| B+ | 89 |
| B0 | 61 |
| B- | 17 |
| C+ | 8 |
| C0 | 5 |
World Class S/A+: **45**. Competition Top Class S/A+/A0/A-: **108**.

## Position distribution
| Position | Candidates |
|---|---:|
| GK | 26 |
| CB | 47 |
| LB | 30 |
| RB | 27 |
| DM | 27 |
| CM | 36 |
| CAM | 17 |
| LW | 19 |
| RW | 23 |
| ST | 36 |

## Primary evidence and limits
- [Official UEFA technical report (2010-11)](https://www.uefa.com/MultimediaFiles/Download/TechnicalReport/competitions/UCL/01/68/34/73/1683473_DOWNLOAD.pdf) — 21 outstanding players, club match lists, goals, major tactical roles.
- [UEFA 2010-11 official individual statistics](https://www.uefa.com/uefachampionsleague/history/seasons/2011/statistics/) — assists, recovered balls, saves.
- [UEFA 2010-11 scorers](https://www.uefa.com/uefachampionsleague/news/0250-0c50f817cbec-aabf3c53695a-1000--top-scorer-messi-matches-van-nistelrooy-mark/) — Messi 12, Eto'o and Gomez 8, Anelka 7, Ronaldo/Benzema/Soldado 6, etc.
- [UEFA Eto'o back to central attack](https://www.uefa.com/uefachampionsleague/news/01ea-0ea1a29aca45-eea856ebb722-1000--eto-o-returns-to-centre-stage-for-inter/), [UEFA Eduardo at Shakhtar](https://www.uefa.com/uefachampionsleague/news/01e7-0e74ec3b350d-ff3a48915814-1000--shakhtar-swoop-for-arsenal-s-eduardo/), [UEFA Anelka front role](https://www.uefa.com/uefachampionsleague/news/01ee-0e7738058bd4-6ce048afd79c-1000--anelka-class-tells-for-chelsea-at-kobenhavn/).
- [FBref Manchester United UCL for Nani](https://fbref.com/en/squads/19538871/2010-2011/c8/Manchester-United-Stats-Champions-League) (12 apps/9 starts/751 mins/1 goal); UEFA technical report for Kaká 3 apps/98 mins.
- [UEFA Adebayor Madrid performance](https://www.uefa.com/uefachampionsleague/news/01f0-0e77b84d72bd-5201d3ba82a3-1000--adebayor-delighted-by-slick-madrid-display/) — absent from nominated 288 despite UCL appearances and 2 goals. Not added.
- **Caveat:** For some providers, assists are defined differently. Here Iniesta gets the **UEFA** record of 5 assists, rather than another provider's 6. Individual historical Tier/position comparisons remain provisional.

## Changed individual tiers (old -> new, evidence limited)
| Player | Club | Pos | Before | Proposed | Player-specific reason |
|---|---|---|---|---|---|
| Thiago Silva | milan | CB | S | A0 | Milan exited the 2010-11 UCL in the round of 16 and had not qualified for the 2008-09 main tournament. His exceptional domestic form does not independently establish three-season UCL S-level contributions. |
| Marcelo | realmadrid | LB | A0 | A+ | UEFA technical observers selected Marcelo in the six outstanding defenders, with two UCL goals and excellent attacking left-back contributions for Madrid. |
| Andrés Iniesta | barcelona | CM | A+ | S | UEFA selected Iniesta among the best midfielders and credits five official assists; decisive creativity and long-term 2008-09/2010-11 elite UCL influence justify S within three-season weighting. |
| Michael Carrick | manutd | DM | A- | A+ | UEFA lists Carrick with a tournament-high 96 recovered balls. The 2010-11 final run and 2008-09 experience support his consistent defensive midfield impact, independent of team placing. |
| Darijo Srna | shakhtar | RB | A0 | A+ | UEFA officially credits five assists (joint second among UCL 2010-11 leaders); superb right-flank creation and 2008-09 continental experience support A+. |
| Ryan Giggs | manutd | CM | A0 | A+ | UEFA named Giggs in its standout midfielders and credits five UCL assists, with key creative contributions through the knockouts and previous European continuity. |
| Pedro Rodríguez | barcelona | RW | A0 | A+ | Five UCL goals including the 2011 Wembley final opener and UEFA technical team inclusion; the old RW #7 A0 undervalued his direct impact. |
| Nani | manutd | RW | A+ | A0 | FBref records 12 UCL appearances, nine starts, 751 minutes and one goal in 2010-11. Strong domestic play should not override Pedro's five UCL goals, final performance and UEFA selection; complete individual assist comparison still pending. |
| Aaron Lennon | tottenham | RW | A- | A0 | UEFA credits five UCL assists (joint second), reflecting sustained creation in Tottenham's first UCL campaign; A- understated that production. |
| Arjen Robben | bayern | RW | A+ | A0 | Outstanding prior 2009-10 UCL run counts in three-season assessment, but his more interrupted 2010-11 participation and Bayern's last-16 individual output make A0 more supportable than A+. |
| Samir Nasri | arsenal | RW | A+ | A0 | Strong domestic form in 2010-11 but an early UCL knockout and less substantial three-season European personal impact warrant A0 instead of A+. |
| Karim Benzema | realmadrid | ST | A0 | A+ | Six 2010-11 UCL goals, with goal production and continuity from prior Lyon/Real European seasons; the existing A0 understated attacking productivity. |
| Javier Hernández | manutd | ST | A- | A0 | Four UCL goals and decisive knockout-stage finishing during his first Champions League campaign. A0 rewards this season while not fabricating prior European achievements. |
| Peter Crouch | tottenham | ST | B+ | A- | Four UCL goals and strong central hold-up role for Tottenham; his Real Madrid dismissal and lack of elite sustained prior UCL output limit tier to A-. |
| Marco Borriello | roma | ST | B+ | A- | UEFA Roma match table credits four UCL goals in 2010-11, significantly stronger direct scoring than his prior B+ ranking suggested. |
| Luiz Adriano | shakhtar | ST | B+ | A- | Four UCL goals in ten appearances with original Shakhtar UCL data confirming ten starts and 811 minutes. Individual attacking output supports A-. |
| Eduardo da Silva | shakhtar | ST | B+ | A- | Four UCL goals despite many substitute appearances as Shakhtar centre-forward, strong finishing efficiency; A- balances production against restricted minutes. |
| Kaká | realmadrid | CAM | B+ | C+ | UEFA Madrid player log confirms only three UCL appearances (13, 25, 60 minutes; 98 total) and no goal in 2010-11; past reputation alone does not justify B+. |
| Yaroslav Rakitskiy | shakhtar | CB | A- | A0 | UEFA credits 81 recovered balls (top five); Shakhtar logs show 10 complete matches and a goal, making A0 more defensible than A-. |
| Andriy Pyatov | shakhtar | GK | A- | A0 | UEFA credits 41 goalkeeper saves, third among leaders, while existing player record shows 10 complete UCL matches: stronger evidence than A-. |
| Răzvan Raț | shakhtar | LB | B+ | A- | Shakhtar's verified UCL roster gives nine full matches and one goal at left back; sustained important role warrants A- from B+. |
| Cesc Fàbregas | arsenal | CAM | A+ | A0 | Strong previous-season UCL contributions are weighted, but his injury-related 2010-11 interruptions and modest direct UCL knockout impact do not clearly establish A+. |
| Rafael van der Vaart | tottenham | CAM | A+ | A0 | Important creative influence for Tottenham in 2010-11, but less comparable three-season continuous top-tier UCL impact than the A+ contenders. |
| Thomas Müller | bayern | CAM | A+ | A0 | Bayern's 2009-10 final run remains relevant, but a round-of-16 2010-11 campaign and limited 2008-09 personal UCL output fit A0 rather than A+. |
| Francesco Totti | roma | ST | A0 | A- | UEFA Roma 2010-11 team record shows two goals; his previous UCL standing is acknowledged but current-season performance is not A0 top class. |
| Robinho | milan | ST | A0 | B+ | Milan's round-of-16 2010-11 UCL and sparse UCL contributions in the two earlier seasons do not support league-form-driven A0 in a UCL-specific rating. |

## Principal role corrections
| Player | Club | Before | After | Rationale |
|---|---|---|---|---|
| Nicolas Anelka | chelsea | RW | ST | 2010-11 UCL 7 goals; UEFA club analysis describes a central striker or supporting forward, not an RW. |
| Samuel Eto'o | inter | LW | ST | UEFA notes Eto'o's return to a central attacking role in 2010-11 after 2009-10 wide usage; Inter UEFA roster lists all 10 matches and 8 goals. Some wide deployments remain and primary share still requires matchwise audit. |
| Eduardo da Silva | shakhtar | LW | ST | UEFA technical report describes Shakhtar's Eduardo as centre-forward/substitute for Luiz Adriano; he contributed 4 goals. Existing LW label is not the reported principal attacking role. |

## Best XI 4-2-3-1 (proposed DRAFT)
| Slot | Korean | Original name | Club (original) | Tier |
|---|---|---|---|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 | S |
| RB | 다니 아우베스 | Dani Alves | FC Barcelona | S |
| CB | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | S |
| CB | 제라르 피케 | Gerard Piqué | FC Barcelona | S |
| LB | 마르셀루 | Marcelo | Real Madrid CF | A+ |
| DM | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | A+ |
| CM | 사비 에르난데스 | Xavi Hernández | FC Barcelona | S |
| CAM | 메수트 외질 | Mesut Özil | Real Madrid CF | A+ |
| LW | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | S |
| RW | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | A+ |
| ST | 리오넬 메시 | Lionel Messi | FC Barcelona | S |

### Best XI adjustments
- **LB** Éric Abidal -> Marcelo: UEFA technical observers selected Marcelo and recorded two UCL goals. His direct attacking left-back influence is stronger for this edition; Abidal remains A+ despite partial-season absence.
- **RW** Nani -> Pedro Rodríguez: Pedro's five UCL goals, UEFA technical selection and 2011 Wembley final opener outweigh Nani's one UCL goal, despite Nani's stronger domestic 2010-11 output.

## World Class S/A+ (complete names)
| Tier | Position | Rank | Korean | Original | Club |
|---|---|---:|---|---|---|
| S | GK | 1 | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 |
| S | CB | 1 | 제라르 피케 | Gerard Piqué | FC Barcelona |
| S | CB | 2 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC |
| S | RB | 1 | 다니 아우베스 | Dani Alves | FC Barcelona |
| S | CM | 1 | 사비 에르난데스 | Xavi Hernández | FC Barcelona |
| S | CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona |
| S | LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF |
| S | ST | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona |
| S | ST | 2 | 사뮈엘 에투 | Samuel Eto'o | FC Internazionale Milano |
| A+ | GK | 2 | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC |
| A+ | GK | 3 | 빅토르 발데스 | Víctor Valdés | FC Barcelona |
| A+ | GK | 4 | 이케르 카시야스 | Iker Casillas | Real Madrid CF |
| A+ | GK | 5 | 위고 요리스 | Hugo Lloris | Olympique Lyonnais |
| A+ | GK | 6 | 페트르 체흐 | Petr Čech | Chelsea FC |
| A+ | GK | 7 | 스티브 망당다 | Steve Mandanda | Olympique de Marseille |
| A+ | CB | 3 | 카를레스 푸욜 | Carles Puyol | FC Barcelona |
| A+ | CB | 4 | 존 테리 | John Terry | Chelsea FC |
| A+ | CB | 5 | 루시우 | Lúcio | FC Internazionale Milano |
| A+ | LB | 1 | 마르셀루 | Marcelo | Real Madrid CF |
| A+ | LB | 2 | 에리크 아비달 | Éric Abidal | FC Barcelona |
| A+ | LB | 3 | 애슐리 콜 | Ashley Cole | Chelsea FC |
| A+ | RB | 2 | 필리프 람 | Philipp Lahm | FC Bayern München |
| A+ | RB | 3 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk |
| A+ | RB | 4 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF |
| A+ | RB | 5 | 바카리 사냐 | Bacary Sagna | Arsenal FC |
| A+ | DM | 1 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona |
| A+ | DM | 2 | 마이클 캐릭 | Michael Carrick | Manchester United FC |
| A+ | DM | 3 | 사비 알론소 | Xabi Alonso | Real Madrid CF |
| A+ | DM | 4 | 에스테반 캄비아소 | Esteban Cambiasso | FC Internazionale Milano |
| A+ | CM | 3 | 루카 모드리치 | Luka Modrić | Tottenham Hotspur FC |
| A+ | CM | 4 | 라이언 긱스 | Ryan Giggs | Manchester United FC |
| A+ | CM | 5 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München |
| A+ | CAM | 1 | 메수트 외질 | Mesut Özil | Real Madrid CF |
| A+ | CAM | 2 | 웨인 루니 | Wayne Rooney | Manchester United FC |
| A+ | CAM | 3 | 베슬레이 스네이더 | Wesley Sneijder | FC Internazionale Milano |
| A+ | LW | 2 | 다비드 비야 | David Villa | FC Barcelona |
| A+ | LW | 3 | 개러스 베일 | Gareth Bale | Tottenham Hotspur FC |
| A+ | LW | 4 | 프랑크 리베리 | Franck Ribéry | FC Bayern München |
| A+ | RW | 1 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona |
| A+ | RW | 2 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF |
| A+ | ST | 3 | 마리오 고메스 | Mario Gómez | FC Bayern München |
| A+ | ST | 4 | 라울 곤살레스 | Raúl González | FC Schalke 04 |
| A+ | ST | 5 | 카림 벤제마 | Karim Benzema | Real Madrid CF |
| A+ | ST | 6 | 로빈 판페르시 | Robin van Persie | Arsenal FC |
| A+ | ST | 7 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | AC Milan |

## Competition Top Class S/A+/A0/A- (complete names)
| Tier | Position | Rank | Korean | Original | Club |
|---|---|---:|---|---|---|
| S | GK | 1 | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 |
| S | CB | 1 | 제라르 피케 | Gerard Piqué | FC Barcelona |
| S | CB | 2 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC |
| S | RB | 1 | 다니 아우베스 | Dani Alves | FC Barcelona |
| S | CM | 1 | 사비 에르난데스 | Xavi Hernández | FC Barcelona |
| S | CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona |
| S | LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF |
| S | ST | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona |
| S | ST | 2 | 사뮈엘 에투 | Samuel Eto'o | FC Internazionale Milano |
| A+ | GK | 2 | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC |
| A+ | GK | 3 | 빅토르 발데스 | Víctor Valdés | FC Barcelona |
| A+ | GK | 4 | 이케르 카시야스 | Iker Casillas | Real Madrid CF |
| A+ | GK | 5 | 위고 요리스 | Hugo Lloris | Olympique Lyonnais |
| A+ | GK | 6 | 페트르 체흐 | Petr Čech | Chelsea FC |
| A+ | GK | 7 | 스티브 망당다 | Steve Mandanda | Olympique de Marseille |
| A+ | CB | 3 | 카를레스 푸욜 | Carles Puyol | FC Barcelona |
| A+ | CB | 4 | 존 테리 | John Terry | Chelsea FC |
| A+ | CB | 5 | 루시우 | Lúcio | FC Internazionale Milano |
| A+ | LB | 1 | 마르셀루 | Marcelo | Real Madrid CF |
| A+ | LB | 2 | 에리크 아비달 | Éric Abidal | FC Barcelona |
| A+ | LB | 3 | 애슐리 콜 | Ashley Cole | Chelsea FC |
| A+ | RB | 2 | 필리프 람 | Philipp Lahm | FC Bayern München |
| A+ | RB | 3 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk |
| A+ | RB | 4 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF |
| A+ | RB | 5 | 바카리 사냐 | Bacary Sagna | Arsenal FC |
| A+ | DM | 1 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona |
| A+ | DM | 2 | 마이클 캐릭 | Michael Carrick | Manchester United FC |
| A+ | DM | 3 | 사비 알론소 | Xabi Alonso | Real Madrid CF |
| A+ | DM | 4 | 에스테반 캄비아소 | Esteban Cambiasso | FC Internazionale Milano |
| A+ | CM | 3 | 루카 모드리치 | Luka Modrić | Tottenham Hotspur FC |
| A+ | CM | 4 | 라이언 긱스 | Ryan Giggs | Manchester United FC |
| A+ | CM | 5 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München |
| A+ | CAM | 1 | 메수트 외질 | Mesut Özil | Real Madrid CF |
| A+ | CAM | 2 | 웨인 루니 | Wayne Rooney | Manchester United FC |
| A+ | CAM | 3 | 베슬레이 스네이더 | Wesley Sneijder | FC Internazionale Milano |
| A+ | LW | 2 | 다비드 비야 | David Villa | FC Barcelona |
| A+ | LW | 3 | 개러스 베일 | Gareth Bale | Tottenham Hotspur FC |
| A+ | LW | 4 | 프랑크 리베리 | Franck Ribéry | FC Bayern München |
| A+ | RW | 1 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona |
| A+ | RW | 2 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF |
| A+ | ST | 3 | 마리오 고메스 | Mario Gómez | FC Bayern München |
| A+ | ST | 4 | 라울 곤살레스 | Raúl González | FC Schalke 04 |
| A+ | ST | 5 | 카림 벤제마 | Karim Benzema | Real Madrid CF |
| A+ | ST | 6 | 로빈 판페르시 | Robin van Persie | Arsenal FC |
| A+ | ST | 7 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | AC Milan |
| A0 | GK | 8 | 안드리 피아토우 | Andriy Pyatov | FC Shakhtar Donetsk |
| A0 | GK | 9 | 크리스티안 아비아티 | Christian Abbiati | AC Milan |
| A0 | GK | 10 | 줄리우 세자르 | Júlio César | FC Internazionale Milano |
| A0 | CB | 6 | 치아구 시우바 | Thiago Silva | AC Milan |
| A0 | CB | 7 | 히카르두 카르발류 | Ricardo Carvalho | Real Madrid CF |
| A0 | CB | 8 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC |
| A0 | CB | 9 | 페페 | Pepe | Real Madrid CF |
| A0 | CB | 10 | 알레산드로 네스타 | Alessandro Nesta | AC Milan |
| A0 | CB | 11 | 야로슬라우 라키츠키 | Yaroslav Rakitskiy | FC Shakhtar Donetsk |
| A0 | LB | 4 | 파트리스 에브라 | Patrice Evra | Manchester United FC |
| A0 | RB | 6 | 브라니슬라프 이바노비치 | Branislav Ivanović | Chelsea FC |
| A0 | DM | 5 | 다니엘레 데 로시 | Daniele De Rossi | AS Roma |
| A0 | CM | 6 | 잭 윌셔 | Jack Wilshere | Arsenal FC |
| A0 | CM | 7 | 프랭크 램퍼드 | Frank Lampard | Chelsea FC |
| A0 | CM | 8 | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano |
| A0 | CAM | 4 | 세스크 파브레가스 | Cesc Fàbregas | Arsenal FC |
| A0 | CAM | 5 | 라파엘 판데르파르트 | Rafael van der Vaart | Tottenham Hotspur FC |
| A0 | CAM | 6 | 토마스 뮐러 | Thomas Müller | FC Bayern München |
| A0 | LW | 5 | 앙드레 아예우 | André Ayew | Olympique de Marseille |
| A0 | LW | 6 | 플로랑 말루다 | Florent Malouda | Chelsea FC |
| A0 | LW | 7 | 후안 마타 | Juan Mata | Valencia CF |
| A0 | LW | 8 | 윌리안 | Willian | FC Shakhtar Donetsk |
| A0 | RW | 3 | 제페르손 파르판 | Jefferson Farfán | FC Schalke 04 |
| A0 | RW | 4 | 나니 | Nani | Manchester United FC |
| A0 | RW | 5 | 사미르 나스리 | Samir Nasri | Arsenal FC |
| A0 | RW | 6 | 아르연 로번 | Arjen Robben | FC Bayern München |
| A0 | RW | 7 | 애런 레넌 | Aaron Lennon | Tottenham Hotspur FC |
| A0 | ST | 8 | 니콜라 아넬카 | Nicolas Anelka | Chelsea FC |
| A0 | ST | 9 | 디디에 드로그바 | Didier Drogba | Chelsea FC |
| A0 | ST | 10 | 리산드로 로페스 | Lisandro López | Olympique Lyonnais |
| A0 | ST | 11 | 로베르토 솔다도 | Roberto Soldado | Valencia CF |
| A0 | ST | 12 | 하비에르 에르난데스 | Javier Hernández | Manchester United FC |
| A- | CB | 12 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 |
| A- | CB | 13 | 술레만 디아와라 | Souleymane Diawara | Olympique de Marseille |
| A- | CB | 14 | 스테판 음비아 | Stéphane Mbia | Olympique de Marseille |
| A- | CB | 15 | 윌리암 갈라스 | William Gallas | Tottenham Hotspur FC |
| A- | LB | 5 | 가엘 클리시 | Gaël Clichy | Arsenal FC |
| A- | LB | 6 | 타예 타이워 | Taye Taiwo | Olympique de Marseille |
| A- | LB | 7 | 라즈반 라츠 | Răzvan Raț | FC Shakhtar Donetsk |
| A- | RB | 7 | 앙토니 레베예르 | Anthony Réveillère | Olympique Lyonnais |
| A- | RB | 8 | 이냐치오 아바테 | Ignazio Abate | AC Milan |
| A- | RB | 9 | 마이콘 | Maicon | FC Internazionale Milano |
| A- | DM | 6 | 알렉상드르 송 | Alexandre Song | Arsenal FC |
| A- | DM | 7 | 제레미 툴랄랑 | Jérémy Toulalan | Olympique Lyonnais |
| A- | DM | 8 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona |
| A- | CM | 9 | 브누아 셰루 | Benoît Cheyrou | Olympique de Marseille |
| A- | CM | 10 | 에베르 바네가 | Éver Banega | Valencia CF |
| A- | CM | 11 | 루초 곤살레스 | Lucho González | Olympique de Marseille |
| A- | CM | 12 | 마이클 에시엔 | Michael Essien | Chelsea FC |
| A- | CAM | 7 | 자드송 | Jádson | FC Shakhtar Donetsk |
| A- | LW | 9 | 미셸 바스토스 | Michel Bastos | Olympique Lyonnais |
| A- | LW | 10 | 미르코 부치니치 | Mirko Vučinić | AS Roma |
| A- | RW | 8 | 도글라스 코스타 | Douglas Costa | FC Shakhtar Donetsk |
| A- | RW | 9 | 마티외 발뷔에나 | Mathieu Valbuena | Olympique de Marseille |
| A- | ST | 13 | 피터 크라우치 | Peter Crouch | Tottenham Hotspur FC |
| A- | ST | 14 | 프란체스코 토티 | Francesco Totti | AS Roma |
| A- | ST | 15 | 에두아르두 다 시우바 | Eduardo da Silva | FC Shakhtar Donetsk |
| A- | ST | 16 | 루이스 아드리아누 | Luiz Adriano | FC Shakhtar Donetsk |
| A- | ST | 17 | 마르코 보리엘로 | Marco Borriello | AS Roma |
| A- | ST | 18 | 알레샨드리 파투 | Alexandre Pato | AC Milan |
| A- | ST | 19 | 다메 은도예 | Dame N'Doye | FC København |
| A- | ST | 20 | 로이크 레미 | Loïc Rémy | Olympique de Marseille |
| A- | ST | 21 | 디미터르 베르바토프 | Dimitar Berbatov | Manchester United FC |

## All 288 candidates: rank and grading table
> ★ UEFA 2010-11 technical selection; † goal figure checked from an individual official UEFA record (Nani: FBref secondary record). Unmarked grades remain inherited provisional values and are **not** independently verified.

| Pos | Rank | Korean name | Original name | Original club name | Born | Tier | Verified UCL goals | Verified UCL appearances | Evidence level |
|---|---:|---|---|---|---|---|---:|---:|---|
| GK | 1 | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 | 1986-03-27 | S | — | — | source_verified_2010_11_fact_only |
| GK | 2 | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC | 1970-10-29 | A+★ | — | — | source_verified_2010_11_fact_only |
| GK | 3 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 | A+★ | — | — | source_verified_2010_11_fact_only |
| GK | 4 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | A+★ | — | — | source_verified_2010_11_fact_only |
| GK | 5 | 위고 요리스 | Hugo Lloris | Olympique Lyonnais | 1986-12-26 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 6 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | A+ | — | — | source_verified_2010_11_fact_only |
| GK | 7 | 스티브 망당다 | Steve Mandanda | Olympique de Marseille | 1985-03-28 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 8 | 안드리 피아토우 | Andriy Pyatov | FC Shakhtar Donetsk | 1984-06-28 | A0 | — | — | source_guided_individual_tier_review |
| GK | 9 | 크리스티안 아비아티 | Christian Abbiati | AC Milan | 1977-07-08 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 10 | 줄리우 세자르 | Júlio César | FC Internazionale Milano | 1979-09-03 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 11 | 한스외르크 부트 | Hans-Jörg Butt | FC Bayern München | 1974-05-28 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 12 | 에우렐류 고메스 | Heurelho Gomes | Tottenham Hotspur FC | 1981-02-15 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 13 | 요한 빌란드 | Johan Wiland | FC København | 1981-01-24 | B+ | — | — | source_verified_2010_11_fact_only |
| GK | 14 | 비센테 과이타 | Vicente Guaita | Valencia CF | 1987-02-18 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 15 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 16 | 줄리우 세르지우 | Júlio Sérgio | AS Roma | 1978-11-08 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 17 | 우카시 파비안스키 | Łukasz Fabiański | Arsenal FC | 1985-04-18 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 18 | 세사르 산체스 | César Sánchez | Valencia CF | 1971-09-02 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 19 | 도니 | Doni | AS Roma | 1979-10-22 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 20 | 루카 카스텔라치 | Luca Castellazzi | FC Internazionale Milano | 1975-07-19 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 21 | 토마스 크라프트 | Thomas Kraft | FC Bayern München | 1988-07-22 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 22 | 마르코 아멜리아 | Marco Amelia | AC Milan | 1982-04-02 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 23 | 카를로 쿠디치니 | Carlo Cudicini | Tottenham Hotspur FC | 1973-09-06 | C+ | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 24 | 안토니오 아단 | Antonio Adán | Real Madrid CF | 1987-05-13 | C0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 25 | 레미 베르쿠트르 | Rémy Vercoutre | Olympique Lyonnais | 1980-06-26 | C0 | — | — | legacy_provisional_tier_not_independently_verified |
| GK | 26 | 토마시 쿠슈차크 | Tomasz Kuszczak | Manchester United FC | 1982-03-20 | C0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 1 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | S★ | — | — | source_verified_2010_11_fact_only |
| CB | 2 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | 1981-10-21 | S★ | — | — | source_verified_2010_11_fact_only |
| CB | 3 | 카를레스 푸욜 | Carles Puyol | FC Barcelona | 1978-04-13 | A+★ | — | — | source_verified_2010_11_fact_only |
| CB | 4 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | A+★ | — | — | source_verified_2010_11_fact_only |
| CB | 5 | 루시우 | Lúcio | FC Internazionale Milano | 1978-05-08 | A+ | — | — | source_verified_2010_11_fact_only |
| CB | 6 | 치아구 시우바 | Thiago Silva | AC Milan | 1984-09-22 | A0 | — | — | source_guided_individual_tier_review |
| CB | 7 | 히카르두 카르발류 | Ricardo Carvalho | Real Madrid CF | 1978-05-18 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 8 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 9 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 10 | 알레산드로 네스타 | Alessandro Nesta | AC Milan | 1976-03-19 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 11 | 야로슬라우 라키츠키 | Yaroslav Rakitskiy | FC Shakhtar Donetsk | 1989-08-03 | A0 | — | — | source_guided_individual_tier_review |
| CB | 12 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 13 | 술레만 디아와라 | Souleymane Diawara | Olympique de Marseille | 1978-12-24 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 14 | 스테판 음비아 | Stéphane Mbia | Olympique de Marseille | 1986-05-20 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 15 | 윌리암 갈라스 | William Gallas | Tottenham Hotspur FC | 1977-08-17 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 16 | 알레스 | Alex | Chelsea FC | 1982-06-17 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 17 | 안드레아 라노키아 | Andrea Ranocchia | FC Internazionale Milano | 1988-02-16 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 18 | 크리스토프 메첼더 | Christoph Metzelder | FC Schalke 04 | 1980-11-05 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 19 | 크리스 | Cris | Olympique Lyonnais | 1977-06-03 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 20 | 드미트로 치그린스키 | Dmytro Chygrynskiy | FC Shakhtar Donetsk | 1986-11-07 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 21 | 홀거 바트슈투버 | Holger Badstuber | FC Bayern München | 1989-03-13 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 22 | 요한 주루 | Johan Djourou | Arsenal FC | 1987-01-18 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 23 | 주앙 | Juan | AS Roma | 1979-02-01 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 24 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 25 | 마이클 도슨 | Michael Dawson | Tottenham Hotspur FC | 1983-11-18 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 26 | 미카엘 안톤손 | Mikael Antonsson | FC København | 1981-05-31 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 27 | 니콜라스 부르디소 | Nicolás Burdisso | AS Roma | 1981-04-12 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 28 | 히카르두 코스타 | Ricardo Costa | Valencia CF | 1981-05-16 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 29 | 아나톨리 티모슈크 | Anatoliy Tymoshchuk | FC Bayern München | 1979-03-30 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 30 | 데얀 로브렌 | Dejan Lovren | Olympique Lyonnais | 1989-07-05 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 31 | 가브리엘 에인세 | Gabriel Heinze | Olympique de Marseille | 1978-04-19 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 32 | 필리프 멕세스 | Philippe Mexès | AS Roma | 1982-03-30 | B+† | 1 | — | source_verified_2010_11_fact_only |
| CB | 33 | 라울 알비올 | Raúl Albiol | Real Madrid CF | 1985-09-04 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 34 | 다니엘 판 바위턴 | Daniel van Buyten | FC Bayern München | 1978-02-07 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 35 | 마리우스 스탄케비치우스 | Marius Stankevičius | Valencia CF | 1981-07-15 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 36 | 마티아스 잔카 예르겐센 | Mathias Zanka Jørgensen | FC København | 1990-04-23 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 37 | 파프 디아카테 | Pape Diakhaté | Olympique Lyonnais | 1984-06-21 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 38 | 크리스 스몰링 | Chris Smalling | Manchester United FC | 1989-11-22 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 39 | 다비드 나바로 | David Navarro | Valencia CF | 1980-05-25 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 40 | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano | 1976-08-11 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 41 | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | FC Schalke 04 | 1992-02-23 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 42 | 마리오 예페스 | Mario Yepes | AC Milan | 1976-01-13 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 43 | 올렉산드르 쿠체르 | Oleksandr Kucher | FC Shakhtar Donetsk | 1982-10-22 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 44 | 세바스티앵 바송 | Sébastien Bassong | Tottenham Hotspur FC | 1986-07-09 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 45 | 쇨비 오테센 | Sölvi Ottesen | FC København | 1984-02-18 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 46 | 가브리엘 밀리토 | Gabriel Milito | FC Barcelona | 1980-09-07 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| CB | 47 | 세바스티앙 스킬라치 | Sébastien Squillaci | Arsenal FC | 1980-08-11 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 1 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | A+★† | 2 | — | source_guided_individual_tier_review |
| LB | 2 | 에리크 아비달 | Éric Abidal | FC Barcelona | 1979-09-11 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 3 | 애슐리 콜 | Ashley Cole | Chelsea FC | 1980-12-20 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 4 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 5 | 가엘 클리시 | Gaël Clichy | Arsenal FC | 1985-07-26 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 6 | 타예 타이워 | Taye Taiwo | Olympique de Marseille | 1985-04-16 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 7 | 라즈반 라츠 | Răzvan Raț | FC Shakhtar Donetsk | 1981-05-26 | A- | — | — | source_guided_individual_tier_review |
| LB | 8 | 알리 시소코 | Aly Cissokho | Olympique Lyonnais | 1987-09-15 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 9 | 브누아 아수에코토 | Benoît Assou-Ekotto | Tottenham Hotspur FC | 1984-03-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 10 | 크리스티안 키부 | Cristian Chivu | FC Internazionale Milano | 1980-10-26 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 11 | 제레미 마티외 | Jérémy Mathieu | Valencia CF | 1983-10-29 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 12 | 욘 아르네 리세 | John Arne Riise | AS Roma | 1980-09-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 13 | 오스카르 벤트 | Oscar Wendt | FC København | 1985-10-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 14 | 알바로 아르벨로아 | Álvaro Arbeloa | Real Madrid CF | 1983-01-17 | B+† | 1 | — | source_verified_2010_11_fact_only |
| LB | 15 | 호르디 알바 | Jordi Alba | Valencia CF | 1989-03-21 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 16 | 나가토모 유토 | Yuto Nagatomo | FC Internazionale Milano | 1986-09-12 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 17 | 다니엘 프라니치 | Danijel Pranjić | FC Bayern München | 1981-12-02 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 18 | 한스 사르페이 | Hans Sarpei | FC Schalke 04 | 1976-06-28 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 19 | 루카 안토니니 | Luca Antonini | AC Milan | 1982-02-04 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 20 | 디에고 콘텐토 | Diego Contento | FC Bayern München | 1990-05-01 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 21 | 잔루카 잠브로타 | Gianluca Zambrotta | AC Milan | 1977-02-19 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 22 | 루카스 슈미츠 | Lukas Schmitz | FC Schalke 04 | 1988-10-13 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 23 | 막스웰 | Maxwell | FC Barcelona | 1981-08-27 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 24 | 뱌체슬라우 셰우추크 | Vyacheslav Shevchuk | FC Shakhtar Donetsk | 1979-05-13 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 25 | 유리 지르코프 | Yuriy Zhirkov | Chelsea FC | 1983-08-20 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 26 | 파비우 | Fábio | Manchester United FC | 1990-07-09 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 27 | 파올로 카스텔리니 | Paolo Castellini | AS Roma | 1979-01-02 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 28 | 피에르 벵트손 | Pierre Bengtsson | FC København | 1988-04-12 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 29 | 키런 깁스 | Kieran Gibbs | Arsenal FC | 1989-09-26 | C+ | — | — | legacy_provisional_tier_not_independently_verified |
| LB | 30 | 티모테 콜로지에차크 | Timothée Kolodziejczak | Olympique Lyonnais | 1991-10-01 | C0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 1 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | S★ | — | — | source_verified_2010_11_fact_only |
| RB | 2 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 3 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk | 1982-05-01 | A+ | — | — | source_guided_individual_tier_review |
| RB | 4 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 5 | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 6 | 브라니슬라프 이바노비치 | Branislav Ivanović | Chelsea FC | 1984-02-22 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 7 | 앙토니 레베예르 | Anthony Réveillère | Olympique Lyonnais | 1979-11-10 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 8 | 이냐치오 아바테 | Ignazio Abate | AC Milan | 1986-11-12 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 9 | 마이콘 | Maicon | FC Internazionale Milano | 1981-07-26 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 10 | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 11 | 세사르 아스필리쿠에타 | César Azpilicueta | Olympique de Marseille | 1989-08-28 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 12 | 존 오셰이 | John O'Shea | Manchester United FC | 1981-04-30 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 13 | 베드란 촐루카 | Vedran Ćorluka | Tottenham Hotspur FC | 1986-02-05 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 14 | 즈데네크 포스피에흐 | Zdeněk Pospěch | FC København | 1978-12-14 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 15 | 하파엘 | Rafael | Manchester United FC | 1990-07-09 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 16 | 로드 파니 | Rod Fanni | Olympique de Marseille | 1981-12-06 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 17 | 마르코 카세티 | Marco Cassetti | AS Roma | 1977-05-29 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 18 | 미겔 몬테이루 | Miguel Monteiro | Valencia CF | 1980-01-04 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 19 | 아드리아누 코헤이아 | Adriano Correia | FC Barcelona | 1984-10-26 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 20 | 앨런 허턴 | Alan Hutton | Tottenham Hotspur FC | 1984-11-30 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 21 | 브루노 살토르 | Bruno Saltor | Valencia CF | 1980-10-01 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 22 | 다니엘레 보네라 | Daniele Bonera | AC Milan | 1981-05-31 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 23 | 에마뉘엘 에부에 | Emmanuel Eboué | Arsenal FC | 1983-06-04 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 24 | 주제 보싱와 | José Bosingwa | Chelsea FC | 1982-08-24 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 25 | 알레안드로 로시 | Aleandro Rosi | AS Roma | 1987-05-17 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 26 | 다비데 산톤 | Davide Santon | FC Internazionale Milano | 1991-01-02 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| RB | 27 | 라민 가사마 | Lamine Gassama | Olympique Lyonnais | 1989-10-20 | C0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 1 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 2 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 | A+ | — | — | source_guided_individual_tier_review |
| DM | 3 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 4 | 에스테반 캄비아소 | Esteban Cambiasso | FC Internazionale Milano | 1980-08-18 | A+† | 1 | — | source_verified_2010_11_fact_only |
| DM | 5 | 다니엘레 데 로시 | Daniele De Rossi | AS Roma | 1983-07-24 | A0† | 1 | — | source_verified_2010_11_fact_only |
| DM | 6 | 알렉상드르 송 | Alexandre Song | Arsenal FC | 1987-09-09 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 7 | 제레미 툴랄랑 | Jérémy Toulalan | Olympique Lyonnais | 1983-09-10 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 8 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 9 | 젠나로 가투소 | Gennaro Gattuso | AC Milan | 1978-01-09 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 10 | 조엘 마티프 | Joel Matip | FC Schalke 04 | 1991-08-08 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 11 | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 12 | 마르크 판 보멀 | Mark van Bommel | FC Bayern München | 1977-04-22 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 13 | 메흐메트 토팔 | Mehmet Topal | Valencia CF | 1986-03-03 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 14 | 산드루 | Sandro | Tottenham Hotspur FC | 1989-03-15 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 15 | 토마시 휘브슈만 | Tomáš Hübschman | FC Shakhtar Donetsk | 1981-09-04 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 16 | 윌리암 크비스트 | William Kvist | FC København | 1985-02-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 17 | 대런 플레처 | Darren Fletcher | Manchester United FC | 1984-02-01 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 18 | 라사나 디아라 | Lassana Diarra | Real Madrid CF | 1985-03-10 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 19 | 티아구 모타 | Thiago Motta | FC Internazionale Milano | 1982-08-28 | B+† | 1 | — | source_verified_2010_11_fact_only |
| DM | 20 | 에두아르 시세 | Édouard Cissé | Olympique de Marseille | 1978-03-30 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 21 | 안드레아스 오틀 | Andreas Ottl | FC Bayern München | 1985-03-01 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 22 | 샤를 카보레 | Charles Kaboré | Olympique de Marseille | 1988-02-09 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 23 | 다비드 알벨다 | David Albelda | Valencia CF | 1977-09-01 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 24 | 막심 고날롱 | Maxime Gonalons | Olympique Lyonnais | 1989-03-10 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 25 | 타라스 스테파넨코 | Taras Stepanenko | FC Shakhtar Donetsk | 1989-08-08 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 26 | 윌손 팔라시오스 | Wilson Palacios | Tottenham Hotspur FC | 1984-07-29 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| DM | 27 | 데닐손 | Denílson | Arsenal FC | 1988-02-16 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 1 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | S★ | — | — | source_verified_2010_11_fact_only |
| CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | S★ | — | — | source_guided_individual_tier_review |
| CM | 3 | 루카 모드리치 | Luka Modrić | Tottenham Hotspur FC | 1985-09-09 | A+★ | — | — | source_verified_2010_11_fact_only |
| CM | 4 | 라이언 긱스 | Ryan Giggs | Manchester United FC | 1973-11-29 | A+★ | — | — | source_guided_individual_tier_review |
| CM | 5 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 6 | 잭 윌셔 | Jack Wilshere | Arsenal FC | 1992-01-01 | A0★ | — | — | source_verified_2010_11_fact_only |
| CM | 7 | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | 1978-06-20 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 8 | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | A0† | 1 | — | source_verified_2010_11_fact_only |
| CM | 9 | 브누아 셰루 | Benoît Cheyrou | Olympique de Marseille | 1981-05-03 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 10 | 에베르 바네가 | Éver Banega | Valencia CF | 1988-06-29 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 11 | 루초 곤살레스 | Lucho González | Olympique de Marseille | 1981-01-19 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 12 | 마이클 에시엔 | Michael Essien | Chelsea FC | 1982-12-03 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 13 | 안드레아 피를로 | Andrea Pirlo | AC Milan | 1979-05-19 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 14 | 클라렌스 세이도르프 | Clarence Seedorf | AC Milan | 1976-04-01 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 15 | 클라우데미르 | Claudemir | FC København | 1988-03-27 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 16 | 다비드 피사로 | David Pizarro | AS Roma | 1979-09-11 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 17 | 헨리크 미키타리안 | Henrikh Mkhitaryan | FC Shakhtar Donetsk | 1989-01-21 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 18 | 킴 셸스트룀 | Kim Källström | Olympique Lyonnais | 1982-08-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 19 | 사미 케디라 | Sami Khedira | Real Madrid CF | 1987-04-04 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 20 | 데얀 스탄코비치 | Dejan Stanković | FC Internazionale Milano | 1978-09-11 | B+† | 2 | — | source_verified_2010_11_fact_only |
| CM | 21 | 이반 라키티치 | Ivan Rakitić | FC Schalke 04 | 1988-03-10 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 22 | 미랄렘 퍄니치 | Miralem Pjanić | Olympique Lyonnais | 1990-04-02 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 23 | 폴 스콜스 | Paul Scholes | Manchester United FC | 1974-11-16 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 24 | 하미레스 | Ramires | Chelsea FC | 1987-03-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 25 | 세이두 케이타 | Seydou Keita | FC Barcelona | 1980-01-16 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 26 | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 27 | 페어 클루게 | Peer Kluge | FC Schalke 04 | 1980-11-22 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 28 | 아부 디아비 | Abou Diaby | Arsenal FC | 1986-05-11 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 29 | 에스테반 그라네로 | Esteban Granero | Real Madrid CF | 1987-07-02 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 30 | 페르난지뉴 | Fernandinho | FC Shakhtar Donetsk | 1985-05-04 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 31 | 헤드비허스 마두로 | Hedwiges Maduro | Valencia CF | 1985-02-13 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 32 | 얄테 뇌레고르 | Hjalte Nørregaard | FC København | 1981-04-08 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 33 | 저메인 제나스 | Jermaine Jenas | Tottenham Hotspur FC | 1983-02-18 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 34 | 마티외 플라미니 | Mathieu Flamini | AC Milan | 1984-03-07 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 35 | 마테오 브리기 | Matteo Brighi | AS Roma | 1981-02-14 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CM | 36 | 파브리스 아브리엘 | Fabrice Abriel | Olympique de Marseille | 1979-07-06 | C+ | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 1 | 메수트 외질 | Mesut Özil | Real Madrid CF | 1988-10-15 | A+† | 2 | — | source_verified_2010_11_fact_only |
| CAM | 2 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | A+★† | 4 | — | source_verified_2010_11_fact_only |
| CAM | 3 | 베슬레이 스네이더 | Wesley Sneijder | FC Internazionale Milano | 1984-06-09 | A+† | 3 | — | source_verified_2010_11_fact_only |
| CAM | 4 | 세스크 파브레가스 | Cesc Fàbregas | Arsenal FC | 1987-05-04 | A0 | — | — | source_guided_individual_tier_review |
| CAM | 5 | 라파엘 판데르파르트 | Rafael van der Vaart | Tottenham Hotspur FC | 1983-02-11 | A0 | — | — | source_guided_individual_tier_review |
| CAM | 6 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | A0 | — | — | source_guided_individual_tier_review |
| CAM | 7 | 자드송 | Jádson | FC Shakhtar Donetsk | 1983-10-05 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 8 | 예스페르 그뢴키에르 | Jesper Grønkjær | FC København | 1977-08-12 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 9 | 케빈프린스 보아텡 | Kevin-Prince Boateng | AC Milan | 1987-03-06 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 10 | 티노 코스타 | Tino Costa | Valencia CF | 1985-01-09 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 11 | 요안 구르퀴프 | Yoann Gourcuff | Olympique Lyonnais | 1986-07-11 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 12 | 알렉스 테이셰이라 | Alex Teixeira | FC Shakhtar Donetsk | 1990-01-06 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 13 | 시모네 페로타 | Simone Perrotta | AS Roma | 1977-09-17 | B0† | 1 | — | source_verified_2010_11_fact_only |
| CAM | 14 | 파비우 심플리시우 | Fábio Simplício | AS Roma | 1979-09-23 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 15 | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 16 | 필리피 쿠티뉴 | Philippe Coutinho | FC Internazionale Milano | 1992-06-12 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| CAM | 17 | 카카 | Kaká | Real Madrid CF | 1982-04-22 | C+ | — | 3 | source_guided_individual_tier_review |
| LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | S★† | 6 | — | source_verified_2010_11_fact_only |
| LW | 2 | 다비드 비야 | David Villa | FC Barcelona | 1981-12-03 | A+★† | 4 | — | source_verified_2010_11_fact_only |
| LW | 3 | 개러스 베일 | Gareth Bale | Tottenham Hotspur FC | 1989-07-16 | A+★† | 4 | — | source_verified_2010_11_fact_only |
| LW | 4 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 5 | 앙드레 아예우 | André Ayew | Olympique de Marseille | 1989-12-17 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 6 | 플로랑 말루다 | Florent Malouda | Chelsea FC | 1980-06-13 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 7 | 후안 마타 | Juan Mata | Valencia CF | 1988-04-28 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 8 | 윌리안 | Willian | FC Shakhtar Donetsk | 1988-08-09 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 9 | 미셸 바스토스 | Michel Bastos | Olympique Lyonnais | 1983-08-02 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 10 | 미르코 부치니치 | Mirko Vučinić | AS Roma | 1983-10-01 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 11 | 안드레이 아르샤빈 | Andrey Arshavin | Arsenal FC | 1981-05-29 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 12 | 호세 마누엘 후라도 | José Manuel Jurado | FC Schalke 04 | 1986-06-29 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 13 | 마르틴 빙고르 | Martin Vingaard | FC København | 1985-03-20 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 14 | 박지성 | Park Ji-Sung | Manchester United FC | 1981-02-25 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 15 | 살로몽 칼루 | Salomon Kalou | Chelsea FC | 1985-08-05 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 16 | 앙드레피에르 지냐크 | André-Pierre Gignac | Olympique de Marseille | 1985-12-05 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 17 | 세사르 델가도 | César Delgado | Olympique Lyonnais | 1981-08-18 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 18 | 니코 크란차르 | Niko Kranjčar | Tottenham Hotspur FC | 1984-08-13 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| LW | 19 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | C+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 1 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 | A+★† | 5 | — | source_guided_individual_tier_review |
| RW | 2 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 | A+† | 3 | — | source_verified_2010_11_fact_only |
| RW | 3 | 제페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | A0† | 4 | — | source_verified_2010_11_fact_only |
| RW | 4 | 나니 | Nani | Manchester United FC | 1986-11-17 | A0† | 1 | 12 | source_guided_individual_tier_review |
| RW | 5 | 사미르 나스리 | Samir Nasri | Arsenal FC | 1987-06-26 | A0 | — | — | source_guided_individual_tier_review |
| RW | 6 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | A0 | — | — | source_guided_individual_tier_review |
| RW | 7 | 애런 레넌 | Aaron Lennon | Tottenham Hotspur FC | 1987-04-16 | A0 | — | — | source_guided_individual_tier_review |
| RW | 8 | 도글라스 코스타 | Douglas Costa | FC Shakhtar Donetsk | 1990-09-14 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 9 | 마티외 발뷔에나 | Mathieu Valbuena | Olympique de Marseille | 1984-09-28 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 10 | 제레미 메네즈 | Jérémy Ménez | AS Roma | 1987-05-07 | B+† | 2 | — | source_verified_2010_11_fact_only |
| RW | 11 | 지미 브리앙 | Jimmy Briand | Olympique Lyonnais | 1985-08-02 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 12 | 호아킨 산체스 | Joaquín | Valencia CF | 1981-07-21 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 13 | 안토니오 발렌시아 | Antonio Valencia | Manchester United FC | 1985-08-04 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 14 | 파블로 에르난데스 | Pablo Hernández | Valencia CF | 1985-04-11 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 15 | 시어 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 16 | 크리스티안 볼라뇨스 | Christian Bolaños | FC København | 1984-05-17 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 17 | 고란 판데프 | Goran Pandev | FC Internazionale Milano | 1983-07-27 | B0† | 1 | — | source_verified_2010_11_fact_only |
| RW | 18 | 하미트 알튼토프 | Hamit Altıntop | FC Bayern München | 1982-12-08 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 19 | 토마스 크리스텐센 | Thomas Kristensen | FC København | 1983-04-17 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 20 | 이브라힘 아펠라이 | Ibrahim Afellay | FC Barcelona | 1986-04-02 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 21 | 호드리구 타데이 | Rodrigo Taddei | AS Roma | 1980-03-06 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 22 | 제레미 피에 | Jérémy Pied | Olympique Lyonnais | 1989-02-23 | C+ | — | — | legacy_provisional_tier_not_independently_verified |
| RW | 23 | 조르당 아예우 | Jordan Ayew | Olympique de Marseille | 1991-09-11 | C+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | S★† | 12 | 13 | source_verified_2010_11_fact_only |
| ST | 2 | 사뮈엘 에투 | Samuel Eto'o | FC Internazionale Milano | 1981-03-10 | S★† | 8 | 10 | source_verified_2010_11_fact_only |
| ST | 3 | 마리오 고메스 | Mario Gómez | FC Bayern München | 1985-07-10 | A+† | 8 | — | source_verified_2010_11_fact_only |
| ST | 4 | 라울 곤살레스 | Raúl González | FC Schalke 04 | 1977-06-27 | A+† | 5 | — | source_verified_2010_11_fact_only |
| ST | 5 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | A+† | 6 | — | source_guided_individual_tier_review |
| ST | 6 | 로빈 판페르시 | Robin van Persie | Arsenal FC | 1983-08-06 | A+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 7 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | AC Milan | 1981-10-03 | A+† | 4 | — | source_verified_2010_11_fact_only |
| ST | 8 | 니콜라 아넬카 | Nicolas Anelka | Chelsea FC | 1979-03-14 | A0† | 7 | — | source_verified_2010_11_fact_only |
| ST | 9 | 디디에 드로그바 | Didier Drogba | Chelsea FC | 1978-03-11 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 10 | 리산드로 로페스 | Lisandro López | Olympique Lyonnais | 1983-03-02 | A0 | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 11 | 로베르토 솔다도 | Roberto Soldado | Valencia CF | 1985-05-27 | A0† | 6 | — | source_verified_2010_11_fact_only |
| ST | 12 | 하비에르 에르난데스 | Javier Hernández | Manchester United FC | 1988-06-01 | A0† | 4 | — | source_guided_individual_tier_review |
| ST | 13 | 피터 크라우치 | Peter Crouch | Tottenham Hotspur FC | 1981-01-30 | A-† | 4 | — | source_guided_individual_tier_review |
| ST | 14 | 프란체스코 토티 | Francesco Totti | AS Roma | 1976-09-27 | A-† | 2 | — | source_guided_individual_tier_review |
| ST | 15 | 에두아르두 다 시우바 | Eduardo da Silva | FC Shakhtar Donetsk | 1983-02-25 | A-† | 4 | — | source_guided_individual_tier_review |
| ST | 16 | 루이스 아드리아누 | Luiz Adriano | FC Shakhtar Donetsk | 1987-04-12 | A-† | 4 | — | source_guided_individual_tier_review |
| ST | 17 | 마르코 보리엘로 | Marco Borriello | AS Roma | 1982-06-18 | A-† | 4 | — | source_guided_individual_tier_review |
| ST | 18 | 알레샨드리 파투 | Alexandre Pato | AC Milan | 1989-09-02 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 19 | 다메 은도예 | Dame N'Doye | FC København | 1985-02-21 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 20 | 로이크 레미 | Loïc Rémy | Olympique de Marseille | 1987-01-02 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 21 | 디미터르 베르바토프 | Dimitar Berbatov | Manchester United FC | 1981-01-30 | A- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 22 | 호비뉴 | Robinho | AC Milan | 1984-01-25 | B+ | — | — | source_guided_individual_tier_review |
| ST | 23 | 디에고 밀리토 | Diego Milito | FC Internazionale Milano | 1979-06-12 | B+† | 1 | — | source_verified_2010_11_fact_only |
| ST | 24 | 에두 | Edu | FC Schalke 04 | 1981-11-30 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 25 | 아리츠 아두리스 | Aritz Aduriz | Valencia CF | 1981-02-11 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 26 | 바페팀비 고미스 | Bafétimbi Gomis | Olympique Lyonnais | 1985-08-06 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 27 | 세자르 산틴 | César Santin | FC København | 1981-02-24 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 28 | 곤살로 이과인 | Gonzalo Higuaín | Real Madrid CF | 1987-12-10 | B+† | 2 | — | source_verified_2010_11_fact_only |
| ST | 29 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 30 | 마루안 샤마크 | Marouane Chamakh | Arsenal FC | 1984-01-10 | B+ | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 31 | 로만 파블류첸코 | Roman Pavlyuchenko | Tottenham Hotspur FC | 1981-12-15 | B0 | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 32 | 보얀 크르키치 | Bojan Krkić | FC Barcelona | 1990-08-28 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 33 | 브란당 | Brandão | Olympique de Marseille | 1980-06-16 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 34 | 페르난도 토레스 | Fernando Torres | Chelsea FC | 1984-03-20 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 35 | 미로슬라프 클로제 | Miroslav Klose | FC Bayern München | 1978-06-09 | B- | — | — | legacy_provisional_tier_not_independently_verified |
| ST | 36 | 마르셀로 모레노 | Marcelo Moreno | FC Shakhtar Donetsk | 1987-06-18 | C+ | — | — | legacy_provisional_tier_not_independently_verified |

## Crucial verified 2010-11 UEFA individual stats
- Messi: 12 UCL goals; Eto'o and Mario Gomez: 8, Anelka: 7; Ronaldo/Benzema/Soldado: 6. UEFA scorer report/technical tables.
- UEFA assists: Özil 6, Lennon, Iniesta, Srna and Giggs 5. UEFA recovered-ball leaders: Carrick 96, Vidic 95, Pique 93, Alves 87, Rakitskiy 81, Lucio 76. Saves: Neuer 45, Van der Sar 42, Pyatov 41, Cech 39, Wiland 35.
- Technical panel outstanding 21 players matched individually to existing player IDs. Only confirmed, directly supported stats were filled; unverified fields remain null.

## Omissions and limitations
- Emmanuel Adebayor (Real Madrid): scored two UCL goals in 2010-11 and is missing from the incumbent nominees. **No addition made** under candidate preservation rule. Completeness of nominated pool unverified.
- Still 274 UCL start figures unset. Do not interpret null as zero or a low tier; only source-confirmed fields were filled.
- Existing source references on other nominees are generic. Three-season per-player matchwise attendance and direct personal performance comparison NOT complete for 288 players, so their existing tiers/ranks remain provisional. Review must continue before final historical approval.
- Formation 4-2-3-1 is tournament period trend per technical report, while Barcelona played 4-3-3; no claim that every team followed 4-2-3-1.
- Actual GitHub Pages browser click testing, CI execution and user approval NOT performed.

## Pre-commit data-integrity checks
- 288 stable IDs, 16 club identifiers, all IDs unique, valid tier vocabulary.
- Every position has contiguous ranks 1..N, no duplicate, no tier-rank inversion.
- Best XI contains 11 unique original nominees, and selected players match nominal slot positions.
- No changes to clubs, groups, tables, knockout, match scores, qualifiers, originally stored competition sources.

## Source-guided data commit
- JSON commit SHA: b32fbb2b7ee56206727bfa4bed4215493369c846
- Audit document commit SHA is reported externally, not embedded recursively.
