# Serie A 2008-09–2016-17 audit corrections

Base: e7ceebd9b5cda6bf3bedd40024c08bc5218f2200
Source: FOOTBALL_AUDIT_SERIEA_SEGMENT_2_CORRECTIONS.md (1620 lines). All nine seasons reviewed against base player IDs and current values. Report-backed transcription, not new match-level verification. Non-null appearance/start/minute conflicts retained. Assists not invented. Prior clubRecords preserves individual club records; aggregate totals cover report-listed Serie A clubs only, not other leagues. GK conceded stored separately as leagueGoalsAgainst / goalsAgainst. No merge or deploy.

## Applied counts

| Season | Players | DOB | GK conceded | Prior season groups | Prior club rows | Multi-club groups | Held report rows |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2008-09 | 128 | 1 | 14 | 62 | 64 | 2 | 127 |
| 2009-10 | 123 | 4 | 12 | 105 | 109 | 4 | 14 |
| 2010-11 | 129 | 3 | 13 | 111 | 115 | 4 | 14 |
| 2011-12 | 109 | 3 | 11 | 80 | 86 | 6 | 1 |
| 2012-13 | 102 | 1 | 12 | 62 | 64 | 2 | 1 |
| 2013-14 | 106 | 0 | 11 | 72 | 76 | 4 | 3 |
| 2014-15 | 115 | 0 | 12 | 70 | 73 | 3 | 1 |
| 2015-16 | 116 | 1 | 12 | 69 | 73 | 4 | 9 |
| 2016-17 | 106 | 0 | 10 | 79 | 84 | 5 | 7 |

2009-10: 65 appearances, 67 starts (both aliases), 122 minutes, 73 missing goal fields and two goal corrections (Chiellini 3→4 and Felipe Melo 4→3); verified table and season table rank 14 Chievo, 15 Udinese, 16 Cagliari. Head-to-head points 8/6/1; preserved every club's original statistics. 2011-12: Chiellini 2009-10 prior goals 3→4. Martin Jørgensen DOB retained, as report recommends. No XI/rank/tier changes. Per-field changes inspectable in commit diff.

## Structural checks before write

Passed: player IDs, eligible club membership, starts/appearances and starts alias, 11 unique XI with matching positions, table ranks and original per-club statistics, agreement of corrected verified/season table. Existing repository scripts and GitHub Actions results are separate from these checks.

## Best XI review — held pending stronger evidence

- 2008-09 CM: Seedorf 33 matches, 6 goals, 5 assists vs Montolivo 34 matches, 4 goals, 6 assists. Central/advanced role and prior-year comparison insufficient. https://fbref.com/en/squads/dc56fe14/2008-2009/Milan-Stats https://fbref.com/en/players/b746d309/
- 2009-10 ST: Miccoli 35 matches, 19 goals vs Eto'o 32 matches, 12 goals. Miccoli's current-year output supports retention, but preceding Barcelona seasons and wider role of Eto'o require comparable evidence. https://www.rsssf.org/players/miccolidata.html https://www.besoccer.com/competition/rankings/serie_a/2010/top-scorers
- 2012-13 CB: Barzagli 34 starts, Bonucci 33, Chiellini 23. Retain Barzagli pending role-specific three-year comparison with Bonucci and Gonzalo Rodríguez. https://statbunker.com/competitions/SeasonAppearances?club_id=124&comp_id=414
- 2016-17 DM: Pjanic 31 appearances and multi-role midfield profile; Jorginho's deep pivot role requires comparable role and prior-year evidence. https://fbref.com/en/squads/e0652b02/2016-2017/roster/Juventus-Roster-Details

## Held report rows (177)

For source conflicts: match-level source/scope not sufficiently resolved. For positions and candidate eligibility: match role/rotation not independently resolved. DOB flagged as reconfirmation retained. No speculative changes.

- 2008-09 | 생년월일 | | 세바스티아노 시빌리아 | Sebastiano Siviglia | Società Sportiva Lazio | seriea-2008-09-lazio-sebastianosiviglia | 1973-03-29 | 재확인 · BDFutbol 1973-03-26 | [BDFutbol](https://www.bdfutbol.com/en/j/j96037.html) · [대조 출처](https://www.wlecce.it/page.php?action=calciatore&id_calciatore=414&pg=archivio) |
- 2008-09 | 생년월일 | | 파스콸레 포자 | Pasquale Foggia | Società Sportiva Lazio | seriea-2008-09-lazio-pasqualefoggia | 1983-06-03 | 재확인 · BDFutbol 1983-06-30 | [BDFutbol](https://www.bdfutbol.com/en/j/j96660.html) · [대조 출처](https://www.sofascore.com/football/player/pasquale-foggia/11620) |
- 2008-09 | 정규리그 출전·선발 대조 | | 욘 아르네 리세 | John Arne Riise | Associazione Sportiva Roma | seriea-2008-09-roma-johnarneriise | 선발 29 → 30 · 출전 30 → 31 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 정규리그 출전·선발 대조 | | 막스 토네토 | Max Tonetto | Associazione Sportiva Roma | seriea-2008-09-roma-maxtonetto | 선발 11 → 10 · 출전 15 → 14 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 정규리그 출전·선발 대조 | | 마테오 브리기 | Matteo Brighi | Associazione Sportiva Roma | seriea-2008-09-roma-matteobrighi | 선발 31 → 32 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 정규리그 출전·선발 대조 | | 줄리우 바프티스타 | Júlio Baptista | Associazione Sportiva Roma | seriea-2008-09-roma-juliobaptista | 선발 22 → 23 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 정규리그 출전·선발 대조 | | 제레미 메네즈 | Jérémy Ménez | Associazione Sportiva Roma | seriea-2008-09-roma-jeremymenez | 선발 13 → 12 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 정규리그 출전·선발 대조 | | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | seriea-2008-09-roma-francescototti | 선발 23 → 22 · 출전 24 → 23 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 줄리우 세자르 | Júlio César | Football Club Internazionale Milano | seriea-2008-09-inter-juliocesar | 3208 | 3210 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 프란체스코 톨도 | Francesco Toldo | Football Club Internazionale Milano | seriea-2008-09-inter-francescotoldo | 198 | 197 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 이반 코르도바 | Iván Córdoba | Football Club Internazionale Milano | seriea-2008-09-inter-ivancordoba | 2415 | 2414 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 키부 | Cristian Chivu | Football Club Internazionale Milano | seriea-2008-09-inter-cristianchivu | 1615 | 1622 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 왈테르 사무엘 | Walter Samuel | Football Club Internazionale Milano | seriea-2008-09-inter-waltersamuel | 1462 | 1464 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 다비데 산톤 | Davide Santon | Football Club Internazionale Milano | seriea-2008-09-inter-davidesanton | 1276 | 1278 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마이콩 | Maicon | Football Club Internazionale Milano | seriea-2008-09-inter-maicon | 2502 | 2500 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 에스테반 캄비아소 | Esteban Cambiasso | Football Club Internazionale Milano | seriea-2008-09-inter-estebancambiasso | 3013 | 3011 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 하비에르 사네티 | Javier Zanetti | Football Club Internazionale Milano | seriea-2008-09-inter-javierzanetti | 3375 | 3374 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 설리 문타리 | Sulley Muntari | Football Club Internazionale Milano | seriea-2008-09-inter-sulleymuntari | 2035 | 2049 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 파트리크 비에이라 | Patrick Vieira | Football Club Internazionale Milano | seriea-2008-09-inter-patrickvieira | 994 | 990 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 데얀 스탄코비치 | Dejan Stanković | Football Club Internazionale Milano | seriea-2008-09-inter-dejanstankovic | 2234 | 2242 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 루이스 피구 | Luís Figo | Football Club Internazionale Milano | seriea-2008-09-inter-luisfigo | 1053 | 1062 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Football Club Internazionale Milano | seriea-2008-09-inter-zlatanibrahimovic | 3133 | 3136 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마리오 발로텔리 | Mario Balotelli | Football Club Internazionale Milano | seriea-2008-09-inter-mariobalotelli | 1354 | 1355 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 아드리아누 | Adriano | Football Club Internazionale Milano | seriea-2008-09-inter-adriano | 805 | 807 | [근거](https://www.bdfutbol.com/en/t/t2008-093008.html) |
- 2008-09 | 출전 시간 출처 차이 | | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | seriea-2008-09-juventus-gianluigibuffon | 2025 | 2026 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 알렉산더 만닝거 | Alexander Manninger | Juventus Football Club | seriea-2008-09-juventus-alexandermanninger | 1395 | 1394 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | seriea-2008-09-juventus-giorgiochiellini | 2410 | 2411 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 니콜라 레그로탈리에 | Nicola Legrottaglie | Juventus Football Club | seriea-2008-09-juventus-nicolalegrottaglie | 2305 | 2307 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 올로프 멜베리 | Olof Mellberg | Juventus Football Club | seriea-2008-09-juventus-olofmellberg | 2099 | 2096 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 몰리나로 | Cristian Molinaro | Juventus Football Club | seriea-2008-09-juventus-cristianmolinaro | 2559 | 2560 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 파올로 데 첼리에 | Paolo De Ceglie | Juventus Football Club | seriea-2008-09-juventus-paolodeceglie | 1078 | 1076 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 즈데네크 그리게라 | Zdeněk Grygera | Juventus Football Club | seriea-2008-09-juventus-zdenekgrygera | 2438 | 2439 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 하산 살리하미지치 | Hasan Salihamidžić | Juventus Football Club | seriea-2008-09-juventus-hasansalihamidzic | 690 | 687 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 모하메드 시소코 | Mohamed Sissoko | Juventus Football Club | seriea-2008-09-juventus-mohamedsissoko | 1661 | 1619 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 폴센 | Christian Poulsen | Juventus Football Club | seriea-2008-09-juventus-christianpoulsen | 1358 | 1353 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 클라우디오 마르키시오 | Claudio Marchisio | Juventus Football Club | seriea-2008-09-juventus-claudiomarchisio | 1867 | 1869 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 티아구 | Tiago | Juventus Football Club | seriea-2008-09-juventus-tiago | 934 | 938 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 파벨 네드베드 | Pavel Nedvěd | Juventus Football Club | seriea-2008-09-juventus-pavelnedved | 2505 | 2504 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 세바스티안 조빈코 | Sebastian Giovinco | Juventus Football Club | seriea-2008-09-juventus-sebastiangiovinco | 897 | 895 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마우로 카모라네시 | Mauro Camoranesi | Juventus Football Club | seriea-2008-09-juventus-maurocamoranesi | 1196 | 1198 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus Football Club | seriea-2008-09-juventus-alessandrodelpiero | 2361 | 2369 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 아마우리 | Amauri | Juventus Football Club | seriea-2008-09-juventus-amauri | 2378 | 2387 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Juventus Football Club | seriea-2008-09-juventus-vincenzoiaquinta | 1638 | 1629 | [근거](https://www.bdfutbol.com/en/t/t2008-093004.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 아비아티 | Christian Abbiati | Associazione Calcio Milan | seriea-2008-09-milan-christianabbiati | 2441 | 2442 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 지다 | Dida | Associazione Calcio Milan | seriea-2008-09-milan-dida | 889 | 888 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 파올로 말디니 | Paolo Maldini | Associazione Calcio Milan | seriea-2008-09-milan-paolomaldini | 2630 | 2631 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 필리프 센데로스 | Philippe Senderos | Associazione Calcio Milan | seriea-2008-09-milan-philippesenderos | 762 | 755 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마레크 얀쿨롭스키 | Marek Jankulovski | Associazione Calcio Milan | seriea-2008-09-milan-marekjankulovski | 2678 | 2681 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 주세페 파발리 | Giuseppe Favalli | Associazione Calcio Milan | seriea-2008-09-milan-giuseppefavalli | 1917 | 1918 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 잔루카 참브로타 | Gianluca Zambrotta | Associazione Calcio Milan | seriea-2008-09-milan-gianlucazambrotta | 2946 | 2947 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 루카 안토니니 | Luca Antonini | Associazione Calcio Milan | seriea-2008-09-milan-lucaantonini | 372 | 369 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 안드레아 피를로 | Andrea Pirlo | Associazione Calcio Milan | seriea-2008-09-milan-andreapirlo | 2323 | 2324 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 젠나로 가투소 | Gennaro Gattuso | Associazione Calcio Milan | seriea-2008-09-milan-gennarogattuso | 961 | 965 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 클라렌스 세도르프 | Clarence Seedorf | Associazione Calcio Milan | seriea-2008-09-milan-clarenceseedorf | 2614 | 2621 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마시모 암브로시니 | Massimo Ambrosini | Associazione Calcio Milan | seriea-2008-09-milan-massimoambrosini | 2065 | 2068 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 데이비드 베컴 | David Beckham | Associazione Calcio Milan | seriea-2008-09-milan-davidbeckham | 1425 | 1437 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 카카 | Kaká | Associazione Calcio Milan | seriea-2008-09-milan-kaka | 2558 | 2562 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 호나우지뉴 | Ronaldinho | Associazione Calcio Milan | seriea-2008-09-milan-ronaldinho | 1612 | 1606 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 알레샨드리 파투 | Alexandre Pato | Associazione Calcio Milan | seriea-2008-09-milan-alexandrepato | 2274 | 2283 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 필리포 인차기 | Filippo Inzaghi | Associazione Calcio Milan | seriea-2008-09-milan-filippoinzaghi | 1408 | 1411 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2008-09 | 출전 시간 출처 차이 | | 다리오 다이넬리 | Dario Dainelli | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-dariodainelli | 1680 | 1726 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 페르 크뢸드루프 | Per Krøldrup | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-perkrldrup | 1695 | 1650 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 후안 마누엘 바르가스 | Juan Manuel Vargas | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-juanmanuelvargas | 2006 | 2012 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마누엘 파스콸 | Manuel Pasqual | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-manuelpasqual | 1418 | 1416 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 잔루카 코모토 | Gianluca Comotto | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-gianlucacomotto | 2250 | 2254 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 루차노 차우리 | Luciano Zauri | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-lucianozauri | 1216 | 1214 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 펠리피 멜루 | Felipe Melo | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-felipemelo | 2556 | 2551 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마르코 도나델 | Marco Donadel | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-marcodonadel | 1733 | 1734 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 리카르도 몬톨리보 | Riccardo Montolivo | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-riccardomontolivo | 2852 | 2855 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 즈드라브코 쿠즈마노비치 | Zdravko Kuzmanović | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-zdravkokuzmanovic | 2054 | 2059 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마르틴 예르겐센 | Martin Jørgensen | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-martinjrgensen | 498 | 494 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 아드리안 무투 | Adrian Mutu | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-adrianmutu | 1578 | 1588 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마리오 산타나 | Mario Santana | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-mariosantana | 1438 | 1443 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 프랑코 세미올리 | Franco Semioli | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-francosemioli | 1218 | 1216 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 알베르토 질라르디노 | Alberto Gilardino | Associazione Calcio Fiorentina | seriea-2008-09-fiorentina-albertogilardino | 2958 | 2965 | [근거](https://www.bdfutbol.com/en/t/t2008-093014.html) |
- 2008-09 | 출전 시간 출처 차이 | | 루비뉴 | Rubinho | Genoa Cricket and Football Club | seriea-2008-09-genoa-rubinho | 3301 | 3302 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 알레시오 스카르피 | Alessio Scarpi | Genoa Cricket and Football Club | seriea-2008-09-genoa-alessioscarpi | 119 | 118 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마테오 페라리 | Matteo Ferrari | Genoa Cricket and Football Club | seriea-2008-09-genoa-matteoferrari | 2887 | 2889 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 주세페 비아바 | Giuseppe Biava | Genoa Cricket and Football Club | seriea-2008-09-genoa-giuseppebiava | 2403 | 2450 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 살바토레 보케티 | Salvatore Bocchetti | Genoa Cricket and Football Club | seriea-2008-09-genoa-salvatorebocchetti | 2481 | 2483 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 소크라티스 파파스타토풀로스 | Sokratis Papastathopoulos | Genoa Cricket and Football Club | seriea-2008-09-genoa-sokratispapastathopoulos | 1191 | 1189 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 도메니코 크리시토 | Domenico Criscito | Genoa Cricket and Football Club | seriea-2008-09-genoa-domenicocriscito | 3090 | 3049 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 프란체스코 모데스토 | Francesco Modesto | Genoa Cricket and Football Club | seriea-2008-09-genoa-francescomodesto | 713 | 714 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마르코 로시 | Marco Rossi | Genoa Cricket and Football Club | seriea-2008-09-genoa-marcorossi | 2130 | 2098 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 잔도메니코 메스토 | Giandomenico Mesto | Genoa Cricket and Football Club | seriea-2008-09-genoa-giandomenicomesto | 1670 | 1680 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 이반 유리치 | Ivan Jurić | Genoa Cricket and Football Club | seriea-2008-09-genoa-ivanjuric | 2836 | 2838 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 오마르 밀라네토 | Omar Milanetto | Genoa Cricket and Football Club | seriea-2008-09-genoa-omarmilanetto | 1590 | 1589 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 티아구 모타 | Thiago Motta | Genoa Cricket and Football Club | seriea-2008-09-genoa-thiagomotta | 2254 | 2255 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 주세페 스쿨리 | Giuseppe Sculli | Genoa Cricket and Football Club | seriea-2008-09-genoa-giuseppesculli | 2309 | 2329 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 라파엘레 팔라디노 | Raffaele Palladino | Genoa Cricket and Football Club | seriea-2008-09-genoa-raffaelepalladino | 1624 | 1623 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 보슈코 얀코비치 | Boško Janković | Genoa Cricket and Football Club | seriea-2008-09-genoa-boskojankovic | 1505 | 1498 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 디에고 밀리토 | Diego Milito | Genoa Cricket and Football Club | seriea-2008-09-genoa-diegomilito | 2710 | 2712 | [근거](https://www.bdfutbol.com/en/t/t2008-093035.html) |
- 2008-09 | 출전 시간 출처 차이 | | 도니 | Doni | Associazione Sportiva Roma | seriea-2008-09-roma-doni | 2495 | 2496 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 아르투르 모라이스 | Artur Moraes | Associazione Sportiva Roma | seriea-2008-09-roma-arturmoraes | 925 | 924 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 필리프 멕세스 | Philippe Mexès | Associazione Sportiva Roma | seriea-2008-09-roma-philippemexes | 2535 | 2513 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 주앙 | Juan | Associazione Sportiva Roma | seriea-2008-09-roma-juan | 1680 | 1683 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 파누치 | Christian Panucci | Associazione Sportiva Roma | seriea-2008-09-roma-christianpanucci | 1862 | 1847 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 욘 아르네 리세 | John Arne Riise | Associazione Sportiva Roma | seriea-2008-09-roma-johnarneriise | 2641 | 2665 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 막스 토네토 | Max Tonetto | Associazione Sportiva Roma | seriea-2008-09-roma-maxtonetto | 951 | 943 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 시시뉴 | Cicinho | Associazione Sportiva Roma | seriea-2008-09-roma-cicinho | 1440 | 1439 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마르코 모타 | Marco Motta | Associazione Sportiva Roma | seriea-2008-09-roma-marcomotta | 1065 | 1064 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | seriea-2008-09-roma-danielederossi | 2894 | 2873 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마테오 브리기 | Matteo Brighi | Associazione Sportiva Roma | seriea-2008-09-roma-matteobrighi | 2886 | 2893 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 줄리우 바프티스타 | Júlio Baptista | Associazione Sportiva Roma | seriea-2008-09-roma-juliobaptista | 2077 | 2086 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 시모네 페로타 | Simone Perrotta | Associazione Sportiva Roma | seriea-2008-09-roma-simoneperrotta | 1834 | 1821 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 미르코 부치니치 | Mirko Vučinić | Associazione Sportiva Roma | seriea-2008-09-roma-mirkovucinic | 2082 | 2093 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 제레미 메네즈 | Jérémy Ménez | Associazione Sportiva Roma | seriea-2008-09-roma-jeremymenez | 1294 | 1285 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 호드리구 타데이 | Rodrigo Taddei | Associazione Sportiva Roma | seriea-2008-09-roma-rodrigotaddei | 1755 | 1764 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | seriea-2008-09-roma-francescototti | 1862 | 1867 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2008-09 | 출전 시간 출처 차이 | | 다비트 로제흐날 | David Rozehnal | Società Sportiva Lazio | seriea-2008-09-lazio-davidrozehnal | 2330 | 2329 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 알렉산다르 콜라로프 | Aleksandar Kolarov | Società Sportiva Lazio | seriea-2008-09-lazio-aleksandarkolarov | 1963 | 1962 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 슈테판 라두 | Ștefan Radu | Società Sportiva Lazio | seriea-2008-09-lazio-stefanradu | 1565 | 1567 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Società Sportiva Lazio | seriea-2008-09-lazio-stephanlichtsteiner | 2753 | 2756 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 로렌초 데 실베스트리 | Lorenzo De Silvestri | Società Sportiva Lazio | seriea-2008-09-lazio-lorenzodesilvestri | 1069 | 1061 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 레데스마 | Cristian Ledesma | Società Sportiva Lazio | seriea-2008-09-lazio-cristianledesma | 3035 | 3036 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 우스만 다보 | Ousmane Dabo | Società Sportiva Lazio | seriea-2008-09-lazio-ousmanedabo | 1109 | 1117 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 크리스티안 브로키 | Cristian Brocchi | Società Sportiva Lazio | seriea-2008-09-lazio-cristianbrocchi | 2175 | 2183 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마투잘렝 | Matuzalém | Società Sportiva Lazio | seriea-2008-09-lazio-matuzalem | 1113 | 1117 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 스테파노 마우리 | Stefano Mauri | Società Sportiva Lazio | seriea-2008-09-lazio-stefanomauri | 1592 | 1589 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 무라드 메그니 | Mourad Meghni | Società Sportiva Lazio | seriea-2008-09-lazio-mouradmeghni | 978 | 975 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 마우로 사라테 | Mauro Zárate | Società Sportiva Lazio | seriea-2008-09-lazio-maurozarate | 2811 | 2821 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 파스콸레 포자 | Pasquale Foggia | Società Sportiva Lazio | seriea-2008-09-lazio-pasqualefoggia | 1907 | 1902 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 고란 판데프 | Goran Pandev | Società Sportiva Lazio | seriea-2008-09-lazio-goranpandev | 2364 | 2374 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 출전 시간 출처 차이 | | 톰마소 로키 | Tommaso Rocchi | Società Sportiva Lazio | seriea-2008-09-lazio-tommasorocchi | 1700 | 1692 | [근거](https://www.bdfutbol.com/en/t/t2008-093018.html) |
- 2008-09 | 주 포지션 확인 | | 주세페 파발리 | Giuseppe Favalli | AC Milan | seriea-2008-09-milan-giuseppefavalli | LB | CB | 21 | [근거](https://www.bdfutbol.com/en/j/j96056.html) |
- 2008-09 | 주 포지션 확인 | | 루카 안토니니 | Luca Antonini | AC Milan | seriea-2008-09-milan-lucaantonini | RB | LB | 4 | [근거](https://www.bdfutbol.com/en/j/j96691.html) |
- 2008-09 | 후보 자격 확인 | | 루카 안토니니 | Luca Antonini | AC Milan | seriea-2008-09-milan-lucaantonini | RB | backup | 4 | 11 | [근거](https://www.bdfutbol.com/en/t/t2008-093015.html) |
- 2009-10 | 출전 시간 출처 차이 | | 마르코 모타 | Marco Motta | Associazione Sportiva Roma | seriea-2009-10-roma-marcomotta | 1095 | 1098 | [근거](https://www.bdfutbol.com/en/t/t2009-103009.html) |
- 2009-10 | 기존 이전 시즌 기록 대조 | | 욘 아르네 리세 | John Arne Riise | seriea-2009-10-roma-johnarneriise | 2008-09 | Roma | 선발 29 → 30 · 출전 30 → 31 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2009-10 | 기존 이전 시즌 기록 대조 | | 막스 토네토 | Max Tonetto | seriea-2009-10-roma-maxtonetto | 2008-09 | Roma | 선발 11 → 10 · 출전 15 → 14 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2009-10 | 기존 이전 시즌 기록 대조 | | 마테오 브리기 | Matteo Brighi | seriea-2009-10-roma-matteobrighi | 2008-09 | Roma | 선발 31 → 32 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2009-10 | 기존 이전 시즌 기록 대조 | | 줄리우 바프티스타 | Júlio Baptista | seriea-2009-10-roma-juliobaptista | 2008-09 | Roma | 선발 22 → 23 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2009-10 | 기존 이전 시즌 기록 대조 | | 제레미 메네즈 | Jérémy Ménez | seriea-2009-10-roma-jeremymenez | 2008-09 | Roma | 선발 13 → 12 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2009-10 | 기존 이전 시즌 기록 대조 | | 프란체스코 토티 | Francesco Totti | seriea-2009-10-roma-francescototti | 2008-09 | Roma | 선발 23 → 22 · 출전 24 → 23 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2009-10 | 주 포지션 확인 | | 마르코 파달리노 | Marco Padalino | UC Sampdoria | seriea-2009-10-sampdoria-marcopadalino | RW | RB | 6 | [근거](https://www.bdfutbol.com/en/j/j97334.html) |
- 2009-10 | 주 포지션 확인 | | 잔루카 그라바 | Gianluca Grava | SSC Napoli | seriea-2009-10-napoli-gianlucagrava | CB | RB | 22 | [근거](https://www.bdfutbol.com/en/j/j97251.html) |
- 2009-10 | 주 포지션 확인 | | 후안 카밀로 수니가 | Juan Camilo Zúñiga | SSC Napoli | seriea-2009-10-napoli-juancamilozuniga | RB | LB | 15 | [근거](https://www.bdfutbol.com/en/j/j97337.html) |
- 2009-10 | 후보 자격 확인 | | 막스 토네토 | Max Tonetto | AS Roma | seriea-2009-10-roma-maxtonetto | LB | backup | 0 | 4 | [근거](https://www.bdfutbol.com/en/t/t2009-103009.html) |
- 2009-10 | 후보 자격 확인 | | 줄리우 바프티스타 | Júlio Baptista | AS Roma | seriea-2009-10-roma-juliobaptista | CAM | backup | 4 | 23 | [근거](https://www.bdfutbol.com/en/t/t2009-103009.html) |
- 2009-10 | 후보 자격 확인 | | 파비아노 산타크로체 | Fabiano Santacroce | SSC Napoli | seriea-2009-10-napoli-fabianosantacroce | CB | backup | 4 | 4 | [근거](https://www.bdfutbol.com/en/t/t2009-103003.html) |
- 2009-10 | 후보 자격 확인 | | 안드레아 도세나 | Andrea Dossena | SSC Napoli | seriea-2009-10-napoli-andreadossena | LB | backup | 3 | 10 | [근거](https://www.bdfutbol.com/en/t/t2009-103003.html) |
- 2010-11 | 기존 이전 시즌 기록 대조 | | 욘 아르네 리세 | John Arne Riise | seriea-2010-11-roma-johnarneriise | 2008-09 | Roma | 선발 29 → 30 · 출전 30 → 31 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2010-11 | 기존 이전 시즌 기록 대조 | | 마테오 브리기 | Matteo Brighi | seriea-2010-11-roma-matteobrighi | 2008-09 | Roma | 선발 31 → 32 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2010-11 | 기존 이전 시즌 기록 대조 | | 제레미 메네즈 | Jérémy Ménez | seriea-2010-11-roma-jeremymenez | 2008-09 | Roma | 선발 13 → 12 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2010-11 | 기존 이전 시즌 기록 대조 | | 프란체스코 토티 | Francesco Totti | seriea-2010-11-roma-francescototti | 2008-09 | Roma | 선발 23 → 22 · 출전 24 → 23 | [근거](https://www.bdfutbol.com/en/t/t2008-093009.html) |
- 2010-11 | 주 포지션 확인 | | 잔루카 잠브로타 | Gianluca Zambrotta | AC Milan | seriea-2010-11-milan-gianlucazambrotta | LB | RB | 15 | [근거](https://www.bdfutbol.com/en/j/j961.html) |
- 2010-11 | 주 포지션 확인 | | 다니엘레 보네라 | Daniele Bonera | AC Milan | seriea-2010-11-milan-danielebonera | RB | CB | 15 | [근거](https://www.bdfutbol.com/en/j/j95874.html) |
- 2010-11 | 주 포지션 확인 | | 다비데 산톤 | Davide Santon | FC Internazionale Milano | seriea-2010-11-inter-davidesanton | RB | LB | 5 | [근거](https://www.bdfutbol.com/en/j/j95597.html) |
- 2010-11 | 주 포지션 확인 | | 산티아고 가르시아 | Santiago García | Palermo FC | seriea-2010-11-palermo-santiagogarcia | LB | CB | 2 | [근거](https://www.bdfutbol.com/en/j/j97675.html) |
- 2010-11 | 후보 자격 확인 | | 주세페 마스카라 | Giuseppe Mascara | SSC Napoli | seriea-2010-11-napoli-giuseppemascara | ST | backup | 4 | 14 | [근거](https://www.bdfutbol.com/en/t/t2010-113003.html) |
- 2010-11 | 후보 자격 확인 | | 후안 콰드라도 | Juan Cuadrado | Udinese Calcio | seriea-2010-11-udinese-juancuadrado | RB | backup | 3 | 9 | [근거](https://www.bdfutbol.com/en/t/t2010-113005.html) |
- 2010-11 | 후보 자격 확인 | | 에마누엘 아계망바두 | Emmanuel Agyemang-Badu | Udinese Calcio | seriea-2010-11-udinese-emmanuelagyemangbadu | DM | backup | 2 | 8 | [근거](https://www.bdfutbol.com/en/t/t2010-113005.html) |
- 2010-11 | 후보 자격 확인 | | 산티아고 가르시아 | Santiago García | Palermo FC | seriea-2010-11-palermo-santiagogarcia | LB | backup | 2 | 3 | [근거](https://www.bdfutbol.com/en/t/t2010-113030.html) |
- 2010-11 | 후보 자격 확인 | | 파비오 리베라니 | Fabio Liverani | Palermo FC | seriea-2010-11-palermo-fabioliverani | DM | backup | 4 | 12 | [근거](https://www.bdfutbol.com/en/t/t2010-113030.html) |
- 2010-11 | 후보 자격 확인 | | 파이팀 카사미 | Pajtim Kasami | Palermo FC | seriea-2010-11-palermo-pajtimkasami | CM | backup | 4 | 14 | [근거](https://www.bdfutbol.com/en/t/t2010-113030.html) |
- 2011-12 | 주 포지션 확인 | | 다미아노 페로네티 | Damiano Ferronetti | Udinese Calcio | seriea-2011-12-udinese-damianoferronetti | CB | RB | 11 | [근거](https://www.bdfutbol.com/en/j/j96565.html) |
- 2012-13 | 생년월일 | | 케빈 콘스탕 | Kevin Constant | Associazione Calcio Milan | seriea-2012-13-milan-kevinconstant | 1987-05-15 | 재확인 · BDFutbol 1987-05-10 | [BDFutbol](https://www.bdfutbol.com/en/j/j97633.html) · [대조 출처](https://www.bolognafc.it/rossoblu/kevin-constant/) |
- 2013-14 | 기존 이전 시즌 기록 대조 | | 알레시오 체르치 | Alessio Cerci | seriea-2013-14-torino-alessiocerci | 2011-12 | Fiorentina | 출전 22 → 23 | [근거](https://www.bdfutbol.com/en/t/t2011-123014.html) |
- 2013-14 | 주 포지션 확인 | | 앙토니 레베예르 | Anthony Réveillère | SSC Napoli | seriea-2013-14-napoli-anthonyreveillere | RB | LB | 13 | [근거](https://www.bdfutbol.com/en/j/j194.html) |
- 2013-14 | 주 포지션 확인 | | 후안 마누엘 바르가스 | Juan Manuel Vargas | ACF Fiorentina | seriea-2013-14-fiorentina-juanmanuelvargas | LW | LB | 14 | [근거](https://www.bdfutbol.com/en/j/j97104.html) |
- 2014-15 | 주 포지션 확인 | | 마르틴 카세레스 | Martín Cáceres | Juventus FC | seriea-2014-15-juventus-martincaceres | RB | CB | 10 | [근거](https://www.bdfutbol.com/en/j/j4073.html) |
- 2015-16 | 주 포지션 확인 | | 파쿤도 론칼리아 | Facundo Roncaglia | ACF Fiorentina | seriea-2015-16-fiorentina-facundoroncaglia | CB | RB | 26 | [근거](https://www.bdfutbol.com/en/j/j12479.html) |
- 2015-16 | 후보 자격 확인 | | 이반 스트리니치 | Ivan Strinić | SSC Napoli | seriea-2015-16-napoli-ivanstrinic | LB | backup | 3 | 5 | [근거](https://www.bdfutbol.com/en/t/t2015-163003.html) |
- 2015-16 | 후보 자격 확인 | | 크리스티안 마조 | Christian Maggio | SSC Napoli | seriea-2015-16-napoli-christianmaggio | RB | backup | 4 | 8 | [근거](https://www.bdfutbol.com/en/t/t2015-163003.html) |
- 2015-16 | 후보 자격 확인 | | 마놀로 가비아디니 | Manolo Gabbiadini | SSC Napoli | seriea-2015-16-napoli-manologabbiadini | ST | backup | 4 | 23 | [근거](https://www.bdfutbol.com/en/t/t2015-163003.html) |
- 2015-16 | 후보 자격 확인 | | 에메르송 팔미에리 | Emerson Palmieri | AS Roma | seriea-2015-16-roma-emersonpalmieri | LB | backup | 1 | 8 | [근거](https://www.bdfutbol.com/en/t/t2015-163009.html) |
- 2015-16 | 후보 자격 확인 | | 윌리암 뱅쾨르 | William Vainqueur | AS Roma | seriea-2015-16-roma-williamvainqueur | CM | backup | 4 | 16 | [근거](https://www.bdfutbol.com/en/t/t2015-163009.html) |
- 2015-16 | 후보 자격 확인 | | 루카 안테이 | Luca Antei | US Sassuolo | seriea-2015-16-sassuolo-lucaantei | CB | backup | 4 | 5 | [근거](https://www.bdfutbol.com/en/t/t2015-163040.html) |
- 2015-16 | 후보 자격 확인 | | 알레산드로 롱기 | Alessandro Longhi | US Sassuolo | seriea-2015-16-sassuolo-alessandrolonghi | LB | backup | 4 | 6 | [근거](https://www.bdfutbol.com/en/t/t2015-163040.html) |
- 2015-16 | 후보 자격 확인 | | 마르첼로 가촐라 | Marcello Gazzola | US Sassuolo | seriea-2015-16-sassuolo-marcellogazzola | RB | backup | 4 | 9 | [근거](https://www.bdfutbol.com/en/t/t2015-163040.html) |
- 2016-17 | 후보 자격 확인 | | 크리스티안 마조 | Christian Maggio | SSC Napoli | seriea-2016-17-napoli-christianmaggio | RB | backup | 4 | 7 | [근거](https://www.bdfutbol.com/en/t/t2016-173003.html) |
- 2016-17 | 후보 자격 확인 | | 아르카디우시 밀리크 | Arkadiusz Milik | SSC Napoli | seriea-2016-17-napoli-arkadiuszmilik | ST | backup | 4 | 17 | [근거](https://www.bdfutbol.com/en/t/t2016-173003.html) |
- 2016-17 | 후보 자격 확인 | | 알베르토 그라시 | Alberto Grassi | Atalanta BC | seriea-2016-17-atalanta-albertograssi | CM | backup | 4 | 18 | [근거](https://www.bdfutbol.com/en/t/t2016-173017.html) |
- 2016-17 | 후보 자격 확인 | | 알베르토 팔로스키 | Alberto Paloschi | Atalanta BC | seriea-2016-17-atalanta-albertopaloschi | ST | backup | 4 | 13 | [근거](https://www.bdfutbol.com/en/t/t2016-173017.html) |
- 2016-17 | 후보 자격 확인 | | 알레산드로 무르자 | Alessandro Murgia | SS Lazio | seriea-2016-17-lazio-alessandromurgia | CM | backup | 4 | 14 | [근거](https://www.bdfutbol.com/en/t/t2016-173018.html) |
- 2016-17 | 후보 자격 확인 | | 크리스티아노 롬바르디 | Cristiano Lombardi | SS Lazio | seriea-2016-17-lazio-cristianolombardi | RW | backup | 3 | 18 | [근거](https://www.bdfutbol.com/en/t/t2016-173018.html) |
- 2016-17 | 후보 자격 확인 | | 필리프 조르제비치 | Filip Đorđević | SS Lazio | seriea-2016-17-lazio-filiporevic | ST | backup | 4 | 17 | [근거](https://www.bdfutbol.com/en/t/t2016-173018.html) |

## Post-write verification

- Initial commit b9c252ea37acf7f87c9768f6cbed195dbf8f5dec: GitHub Actions season checks for 2009-10 through 2016-17 all completed successfully (8/8).
- 2008-09 has no push workflow. Executed existing verify-seriea-2008-09.mjs against the branch JSON in a JavaScript isolate, replacing only the Node filesystem import with the fetched file reader and capturing output; pass=true, errors=[], 128 candidates, 7 clubs. This is not a native Node execution.
- 2013-14 Torino and 2014-15 Sampdoria qualification routes already match the report; no change. Parma/Genoa licence exceptions preserved.
- Post-write re-read: Chiellini 2009-10 4 goals, Felipe Melo 2009-10 3 goals, Chiellini 2011-12's 2009-10 reference 4. No 2010-11 candidate records for either player, no 2011-12 Felipe Melo candidate. Corrected Chiellini's stale 2009-10 tier explanation from 3 to 4 goals without changing tier/rank. 
- Main unchanged; no deployment.

- Follow-up commit 4d210191e5f1c8e712c7e883d9043b05ff58a4c3: 2009-10 GitHub Actions rerun passed. Re-read confirmed 0 missing current appearances/starts/minutes/goals, and Chiellini explanation 4 goals. Updated stale current-appearance coverage metadata from 58 present / 65 pending to 123 present / 0 pending; 65 are report-backed fills, not newly independently match-audited. 
