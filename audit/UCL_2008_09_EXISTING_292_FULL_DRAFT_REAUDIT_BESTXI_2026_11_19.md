# UCL 2008-09 — 기존 292명 전원 DRAFT 재감사·포지션 순위·Best XI

> 작성일 **2026-11-19** · **DRAFT 작성 및 재감사 완료, 사용자 미승인**.
> 기존 GitHub 명단은 처음부터 292/292명 티어 및 포지션 순위가 기입돼 있었다. 이 실행에서 **티어 변경 0명, 순위 변경 0명, Best XI 변경 0명**, 공식 UEFA 개별 근거 **17건** 추가 교차 검증. 3시즌 전수 경기 실측 검증은 아직 완료하지 않았다.

## 1. 평가 범위 및 기존 명단 보호

- 시즌: **2008-09 UEFA Champions League**.
- 3시즌 가중치: **2008-09 > 2007-08 > 2006-07**.
- 평가 대상: 원래 JSON의 16개 선택 구단, 선수 292명. 원본 ID·당시 소속·한글 이름·원어명·포지션·경기수·출전시간·득점·도움 및 경기를 보존.
- 개인 경기력·전술적 개인 영향력에 중점. 우승, 결승, 4강 등 팀 성적은 자동 가산점으로 사용하지 않음.
- 선수별 `appearances`와 `minutes`는 기존 UE​FA 2008-09 기술보고서 연결값을 보존. `starts` null 값은 자국 리그 기록으로 대체하지 않음.
- 왼쪽/오른쪽 측면을 구분. GK, CB, LB, RB, DM, CM, CAM, LW, RW, ST 순서로 상대 순위.
- 티어 `A`, `B`, `C`는 표에서 A0/B0/C0로 표시하며 S~C- 스케일 유지.
- 출전 기록과 티어의 완성 여부는 선수별 3시즌 검증 '승인 완료'와 다른 개념.

## 2. 작업 전후 대조

| 내용 | 작업 전 | 이번 저장 후 |
|---|---:|---:|
| 구단 | 16 | 16 |
| 기존 후보 | 292 | **292** |
| 티어 입력 | 292 | **292 / 292** |
| 포지션 순위 | 292 | **292 / 292** |
| 티어·순위 누락 | 0 | **0** |
| 기존 2008-09 UCL 출장수 등록 | 292 | **292 / 292** |
| 기존 2008-09 UCL 출전시간 등록 | 292 | **292 / 292** |
| 생년월일 등록 | 210 | 210 (누락 82) |
| 이번 등급·순위 변경 | — | **0** |
| 새로운 2008-09 동시대 확인 근거 | — | **17명** |
| 월드클래스 S/A+ | — | **45명** |
| 탑클래스 S/A+/A0/A- | — | **109명** |
| Best XI | 4-3-3 / 11명 | **4-3-3 / 11명 유지** |
| 승인 | 미승인 | 미승인 |

## 3. 4-3-3 전형 공식 근거 — 공동 최빈

- 2008-09 UEFA 기술 보고서는 해당 시즌 16강 진출 16팀 중 **6팀이 4-3-3, 또 다른 6팀이 4-2-3-1**을 주로 사용한 것으로 분석했다.
- **따라서 4-3-3은 단독 최빈이 아닌 공동 최빈 전형**. 이 시즌의 4-3-3은 바르셀로나의 일반적인 1DM/2CM/2윙/1ST 역할을 자연스럽게 반영하므로 현 Best XI 전형을 유지한다.
- 예외적으로 바르셀로나는 결승전 메시와 에토의 역할 교환, 투레의 중앙수비 이동이 있었으나 선수 본선 최빈 주 포지션을 바꾸는 직접 근거로 사용하지 않는다.

## 4. UEFA 2009 동시대 개인상·공식 개인기록

- UEFA Club Footballer of the Year, Best Forward: **Lionel Messi (FC Barcelona)**.
- Best Goalkeeper: **Edwin van der Sar (Manchester United FC)**.
- Best Defender: **John Terry (Chelsea FC)**.
- Best Midfielder: **Xavi Hernández (FC Barcelona)**.
- 대회 최다 득점: Messi 9골, Klose·Gerrard 각 7골, Lisandro López 6골.
- UEFA 사이트 최다 도움: Xavi 7개, Ribéry 6개, Messi/Fàbregas/Lampard 각 5개.
- UEFA 개인 선방 상위권: Rensing 39, Diego López·Júlio César·van der Sar 등 각 34.
- **통계 제공자 차이**: Xavi의 2008-09 도움은 UEFA 7개 대 FBref 6개. 이 감사에서는 UEFA 공식 수치를 인용하면서 다른 기관의 정의/수정 문제를 `sourceDisagreements`에 기록했다.

## 5. 티어 분포

| 티어 | 인원 |
|---|---:|
| S | 8 |
| A+ | 37 |
| A0 | 24 |
| A- | 40 |
| B+ | 79 |
| B0 | 64 |
| B- | 30 |
| C+ | 8 |
| C0 | 2 |
| **World Class S/A+** | **45** |
| **Top Class S/A+/A0/A-** | **109** |
| **전체 후보** | **292** |

## 6. 전체 292명 포지션별 순위·티어

| 포지션 | 순위 | 한글 이름 | 원어명 | 당시 소속 구단 (원어명) | 생년월일 | UCL 출장 | UCL 출전시간(분) | 티어 |
|---|---:|---|---|---|---|---:|---:|---|
| GK | 1 | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC | 1970-10-29 | 10 | 943 | A+ |
| GK | 2 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | 12 | 1139 | A+ |
| GK | 3 | 페페 레이나 | Pepe Reina | Liverpool FC | 1982-08-31 | 9 | 852 | A+ |
| GK | 4 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | 7 | 665 | A+ |
| GK | 5 | 줄리우 세자르 | Júlio César | FC Internazionale Milano | 1979-09-03 | 7 | 663 | A+ |
| GK | 6 | 잔루이지 부폰 | Gianluigi Buffon | Juventus | 1978-01-28 | 3 | 284 | A+ |
| GK | 7 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 | 12 | 1141 | A0 |
| GK | 8 | 디에고 로페스 | Diego López | Villarreal CF | 1981-11-03 | 9 | 851 | A0 |
| GK | 9 | 위고 요리스 | Hugo Lloris | Olympique Lyonnais | 미검증 | 8 | 757 | A0 |
| GK | 10 | 마누엘 알무니아 | Manuel Almunia | Arsenal FC | 1977-05-19 | 10 | 905 | B+ |
| GK | 11 | 에우통 | Helton | FC Porto | 미검증 | 9 | 853 | B+ |
| GK | 12 | 도니 | Doni | AS Roma | 1979-10-22 | 8 | 786 | B+ |
| GK | 13 | 후이 파트리시우 | Rui Patrício | Sporting Clube de Portugal | 미검증 | 6 | 540 | B+ |
| GK | 14 | 알렉산더 만닝거 | Alexander Manninger | Juventus | 1977-06-04 | 5 | 477 | B+ |
| GK | 15 | 미하엘 렌징 | Michael Rensing | FC Bayern München | 1984-05-14 | 7 | 662 | B0 |
| GK | 16 | 마리오 갈리노비치 | Mario Galinović | Panathinaikos FC | 미검증 | 7 | 661 | B0 |
| GK | 17 | 레오 프랑코 | Leo Franco | Club Atlético de Madrid | 1977-05-20 | 6 | 572 | B0 |
| GK | 18 | 한스외르크 부트 | Hans-Jörg Butt | FC Bayern München | 1974-05-28 | 3 | 281 | B0 |
| GK | 19 | 우카시 파비안스키 | Łukasz Fabiański | Arsenal FC | 1985-04-18 | 3 | 259 | B- |
| GK | 20 | 그레고리 쿠페 | Grégory Coupet | Club Atlético de Madrid | 1972-12-31 | 2 | 189 | B- |
| GK | 21 | 토마시 쿠슈차크 | Tomasz Kuszczak | Manchester United FC | 1982-03-20 | 2 | 188 | B- |
| GK | 22 | 디에구 카발리에리 | Diego Cavalieri | Liverpool FC | 미검증 | 1 | 95 | B- |
| GK | 23 | 프란체스코 톨도 | Francesco Toldo | FC Internazionale Milano | 1971-12-02 | 1 | 94 | B- |
| GK | 24 | 예지 두데크 | Jerzy Dudek | Real Madrid CF | 미검증 | 1 | 94 | B- |
| GK | 25 | 세바스티안 비에라 | Sebastián Viera | Villarreal CF | 미검증 | 1 | 94 | B- |
| GK | 26 | 티아구 | Tiago | Sporting Clube de Portugal | 미검증 | 3 | 210 | C+ |
| GK | 27 | 알렉산드로스 초르바스 | Alexandros Tzorvas | Panathinaikos FC | 미검증 | 1 | 100 | C+ |
| GK | 28 | 알베르트 조르케라 | Albert Jorquera | FC Barcelona | 미검증 | 1 | 96 | C0 |
| CB | 1 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | 11 | 1045 | A+ |
| CB | 2 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | 11 | 1027 | A+ |
| CB | 3 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | 12 | 1144 | A+ |
| CB | 4 | 제이미 캐러거 | Jamie Carragher | Liverpool FC | 1978-01-28 | 10 | 936 | A+ |
| CB | 5 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | 1981-10-21 | 9 | 847 | A+ |
| CB | 6 | 카를레스 푸욜 | Carles Puyol | FC Barcelona | 1978-04-13 | 9 | 794 | A+ |
| CB | 7 | 루시우 | Lúcio | FC Bayern München | 1978-05-08 | 8 | 672 | A+ |
| CB | 8 | 조르조 키엘리니 | Giorgio Chiellini | Juventus | 1984-08-14 | 7 | 644 | A+ |
| CB | 9 | 브루누 알베스 | Bruno Alves | FC Porto | 미검증 | 10 | 949 | A0 |
| CB | 10 | 마르틴 데미첼리스 | Martín Demichelis | FC Bayern München | 1980-12-20 | 8 | 756 | A0 |
| CB | 11 | 크리스 | Cris | Olympique Lyonnais | 1977-06-03 | 6 | 566 | A0 |
| CB | 12 | 콜로 투레 | Kolo Touré | Arsenal FC | 1981-03-19 | 9 | 881 | A- |
| CB | 13 | 알렉스 | Alex | Chelsea FC | 1982-06-17 | 9 | 853 | A- |
| CB | 14 | 라파엘 마르케스 | Rafael Márquez | FC Barcelona | 1979-02-13 | 9 | 772 | A- |
| CB | 15 | 디에고 고딘 | Diego Godín | Villarreal CF | 1986-02-16 | 7 | 664 | A- |
| CB | 16 | 윌리암 갈라스 | William Gallas | Arsenal FC | 1977-08-17 | 7 | 637 | A- |
| CB | 17 | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano | 1976-08-11 | 7 | 615 | A- |
| CB | 18 | 필리프 멕세스 | Philippe Mexès | AS Roma | 1982-03-30 | 6 | 565 | A- |
| CB | 19 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | 5 | 474 | A- |
| CB | 20 | 니콜라 레그로탈리에 | Nicola Legrottaglie | Juventus | 1976-10-20 | 6 | 442 | A- |
| CB | 21 | 브라니슬라브 이바노비치 | Branislav Ivanović | Chelsea FC | 1984-02-22 | 4 | 379 | A- |
| CB | 22 | 호날두 | Rolando | FC Porto | 미검증 | 10 | 949 | B+ |
| CB | 23 | 곤살로 로드리게스 | Gonzalo Rodríguez | Villarreal CF | 1984-04-10 | 8 | 756 | B+ |
| CB | 24 | 안데르손 폴가 | Anderson Polga | Sporting Clube de Portugal | 미검증 | 8 | 751 | B+ |
| CB | 25 | 장알랭 붐송 | Jean-Alain Boumsong | Olympique Lyonnais | 미검증 | 8 | 670 | B+ |
| CB | 26 | 파비오 칸나바로 | Fabio Cannavaro | Real Madrid CF | 1973-09-13 | 7 | 633 | B+ |
| CB | 27 | 마르틴 슈크르텔 | Martin Škrtel | Liverpool FC | 1984-12-15 | 6 | 565 | B+ |
| CB | 28 | 조니 에번스 | Jonny Evans | Manchester United FC | 1988-01-03 | 7 | 550 | B+ |
| CB | 29 | 올로프 멜베리 | Olof Mellberg | Juventus | 1977-09-03 | 6 | 522 | B+ |
| CB | 30 | 요한 주루 | Johan Djourou | Arsenal FC | 1987-01-18 | 6 | 441 | B+ |
| CB | 31 | 크리스티안 파누치 | Christian Panucci | AS Roma | 1973-04-12 | 5 | 422 | B+ |
| CB | 32 | 다니엘 판 바위턴 | Daniel van Buyten | FC Bayern München | 1978-02-07 | 5 | 394 | B+ |
| CB | 33 | 다니엘 아게르 | Daniel Agger | Liverpool FC | 1984-12-12 | 4 | 382 | B+ |
| CB | 34 | 욘 헤이팅아 | John Heitinga | Club Atlético de Madrid | 1983-11-15 | 4 | 338 | B+ |
| CB | 35 | 주앙 | Juan | AS Roma | 1979-02-01 | 4 | 307 | B+ |
| CB | 36 | 호세 사리에기 | José Sarriegi | Panathinaikos FC | 미검증 | 7 | 667 | B0 |
| CB | 37 | 루이스 아마란토 페레아 | Luis Amaranto Perea | Club Atlético de Madrid | 1979-01-30 | 6 | 569 | B0 |
| CB | 38 | 파브리시오 푸엔테스 | Fabricio Fuentes | Villarreal CF | 1976-10-13 | 5 | 470 | B0 |
| CB | 39 | 토넬 | Tonel | Sporting Clube de Portugal | 미검증 | 5 | 468 | B0 |
| CB | 40 | 야니스 구마스 | Giannis Goumas | Panathinaikos FC | 미검증 | 6 | 440 | B0 |
| CB | 41 | 존 멘사 | John Mensah | Olympique Lyonnais | 미검증 | 4 | 377 | B0 |
| CB | 42 | 마르코 마테라치 | Marco Materazzi | FC Internazionale Milano | 미검증 | 5 | 352 | B0 |
| CB | 43 | 파블로 이바녜스 | Pablo Ibáñez | Club Atlético de Madrid | 1981-08-03 | 4 | 328 | B0 |
| CB | 44 | 페드루 이마누엘 | Pedro Emanuel | FC Porto | 미검증 | 4 | 285 | B0 |
| CB | 45 | 니콜라스 부르디소 | Nicolás Burdisso | FC Internazionale Milano | 미검증 | 4 | 241 | B0 |
| CB | 46 | 크리스토프 메첼더 | Christoph Metzelder | Real Madrid CF | 1980-11-05 | 1 | 47 | B- |
| CB | 47 | 다니엘 카리수 | Daniel Carriço | Sporting Clube de Portugal | 미검증 | 2 | 189 | C+ |
| LB | 1 | 애슐리 콜 | Ashley Cole | Chelsea FC | 1980-12-20 | 8 | 763 | A+ |
| LB | 2 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 | 11 | 940 | A+ |
| LB | 3 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | 8 | 705 | A+ |
| LB | 4 | 호안 카프데빌라 | Joan Capdevila | Villarreal CF | 1978-02-03 | 8 | 743 | A0 |
| LB | 5 | 가엘 클리시 | Gaël Clichy | Arsenal FC | 1985-07-26 | 8 | 787 | A- |
| LB | 6 | 에리크 아비달 | Éric Abidal | FC Barcelona | 1979-09-11 | 3 | 256 | A- |
| LB | 7 | 크리스티안 몰리나로 | Cristian Molinaro | Juventus | 1983-07-30 | 7 | 627 | B+ |
| LB | 8 | 파비우 아우렐리우 | Fábio Aurélio | Liverpool FC | 1979-09-24 | 7 | 597 | B+ |
| LB | 9 | 파비오 그로소 | Fabio Grosso | Olympique Lyonnais | 미검증 | 6 | 567 | B+ |
| LB | 10 | 욘 아르네 리세 | John Arne Riise | AS Roma | 1980-09-24 | 8 | 556 | B+ |
| LB | 11 | 시우비뉴 | Sylvinho | FC Barcelona | 1974-04-12 | 7 | 481 | B+ |
| LB | 12 | 알리 시소코 | Aly Cissokho | FC Porto | 미검증 | 4 | 383 | B+ |
| LB | 13 | 막스웰 | Maxwell | FC Internazionale Milano | 1981-08-27 | 4 | 254 | B+ |
| LB | 14 | 다비데 산톤 | Davide Santon | FC Internazionale Milano | 1991-01-02 | 2 | 186 | B+ |
| LB | 15 | 가브리엘 에인세 | Gabriel Heinze | Real Madrid CF | 1978-04-19 | 7 | 653 | B0 |
| LB | 16 | 안토니오 로페스 | Antonio López | Club Atlético de Madrid | 1981-09-13 | 6 | 572 | B0 |
| LB | 17 | 미카엘 닐손 | Mikael Nilsson | Panathinaikos FC | 미검증 | 6 | 550 | B0 |
| LB | 18 | 니코스 스피로풀로스 | Nikos Spiropoulos | Panathinaikos FC | 미검증 | 6 | 523 | B0 |
| LB | 19 | 마르쿠 카네이라 | Marco Caneira | Sporting Clube de Portugal | 미검증 | 6 | 474 | B0 |
| LB | 20 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | 5 | 378 | B0 |
| LB | 21 | 안드레아 도세나 | Andrea Dossena | Liverpool FC | 미검증 | 6 | 361 | B0 |
| LB | 22 | 막스 토네토 | Max Tonetto | AS Roma | 1974-11-18 | 4 | 319 | B0 |
| LB | 23 | 웨인 브리지 | Wayne Bridge | Chelsea FC | 미검증 | 4 | 287 | B0 |
| LB | 24 | 파올로 데 첼리에 | Paolo De Ceglie | Juventus | 1986-09-17 | 4 | 229 | B0 |
| LB | 25 | 레안드로 그리미 | Leandro Grimi | Sporting Clube de Portugal | 미검증 | 4 | 302 | B- |
| LB | 26 | 마리아노 페르니아 | Mariano Pernía | Club Atlético de Madrid | 1977-05-04 | 3 | 286 | B- |
| LB | 27 | 키런 깁스 | Kieran Gibbs | Arsenal FC | 1989-09-26 | 4 | 269 | B- |
| LB | 28 | 리누 | Lino | FC Porto | 미검증 | 3 | 115 | B- |
| RB | 1 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | 10 | 952 | S |
| RB | 2 | 마이콩 | Maicon | FC Internazionale Milano | 1981-07-26 | 8 | 757 | A+ |
| RB | 3 | 조제 보싱와 | José Bosingwa | Chelsea FC | 1982-08-24 | 10 | 920 | A0 |
| RB | 4 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | 8 | 760 | A0 |
| RB | 5 | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 | 7 | 676 | A0 |
| RB | 6 | 알바로 아르벨로아 | Álvaro Arbeloa | Liverpool FC | 1983-01-17 | 10 | 914 | A- |
| RB | 7 | 존 오셰이 | John O'Shea | Manchester United FC | 1981-04-30 | 12 | 1130 | B+ |
| RB | 8 | 루카스 빈트라 | Loukas Vyntra | Panathinaikos FC | 미검증 | 8 | 761 | B+ |
| RB | 9 | 크리스티안 서푸나루 | Cristian Săpunaru | FC Porto | 미검증 | 8 | 693 | B+ |
| RB | 10 | 앙헬 로페스 | Ángel López | Villarreal CF | 1981-03-10 | 8 | 692 | B+ |
| RB | 11 | 즈데네크 그리게라 | Zdeněk Grygera | Juventus | 1980-05-14 | 6 | 571 | B+ |
| RB | 12 | 토마시 우이팔루시 | Tomáš Ujfaluši | Club Atlético de Madrid | 1978-03-24 | 5 | 475 | B+ |
| RB | 13 | 앙토니 레베예르 | Anthony Réveillère | Olympique Lyonnais | 1979-11-10 | 4 | 377 | B+ |
| RB | 14 | 마시모 오도 | Massimo Oddo | FC Bayern München | 1976-06-14 | 7 | 635 | B0 |
| RB | 15 | 아벨 | Abel | Sporting Clube de Portugal | 미검증 | 7 | 536 | B0 |
| RB | 16 | 크리스티안 렐 | Christian Lell | FC Bayern München | 1984-08-29 | 6 | 450 | B0 |
| RB | 17 | 시시뉴 | Cicinho | AS Roma | 1980-06-24 | 5 | 388 | B0 |
| RB | 18 | 요르고스 세이타리디스 | Georgios Seitaridis | Club Atlético de Madrid | 1981-06-04 | 4 | 380 | B0 |
| RB | 19 | 하비 벤타 | Javi Venta | Villarreal CF | 1975-12-13 | 3 | 253 | B0 |
| RB | 20 | 호르헤 푸실레 | Jorge Fucile | FC Porto | 미검증 | 2 | 189 | B0 |
| RB | 21 | 마르코 카세티 | Marco Cassetti | AS Roma | 미검증 | 2 | 187 | B0 |
| RB | 22 | 하파엘 다 실바 | Rafael da Silva | Manchester United FC | 1990-07-09 | 4 | 180 | B0 |
| RB | 23 | 브라이스 문 | Bryce Moon | Panathinaikos FC | 미검증 | 3 | 167 | B- |
| RB | 24 | 프랑수아 클레르 | François Clerc | Olympique Lyonnais | 미검증 | 1 | 46 | B- |
| RB | 25 | 파울루 페헤이라 | Paulo Ferreira | Chelsea FC | 미검증 | 2 | 9 | B- |
| RB | 26 | 미첼 살가도 | Míchel Salgado | Real Madrid CF | 1975-10-22 | 1 | 94 | C+ |
| RB | 27 | 페드루 시우바 | Pedro Silva | Sporting Clube de Portugal | 미검증 | 1 | 92 | C0 |
| DM | 1 | 야야 투레 | Yaya Touré | FC Barcelona | 1983-05-13 | 10 | 849 | A+ |
| DM | 2 | 제레미 툴랄랑 | Jérémy Toulalan | Olympique Lyonnais | 미검증 | 8 | 757 | A+ |
| DM | 3 | 에스테반 캄비아소 | Esteban Cambiasso | FC Internazionale Milano | 1980-08-18 | 8 | 747 | A+ |
| DM | 4 | 마르코스 세나 | Marcos Senna | Villarreal CF | 1976-07-17 | 8 | 661 | A+ |
| DM | 5 | 다니엘레 데 로시 | Daniele De Rossi | AS Roma | 1983-07-24 | 7 | 659 | A+ |
| DM | 6 | 마르크 판 보멀 | Mark van Bommel | FC Bayern München | 1977-04-22 | 9 | 849 | A0 |
| DM | 7 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 | 9 | 839 | A0 |
| DM | 8 | 하비에르 마스체라노 | Javier Mascherano | Liverpool FC | 1984-06-08 | 8 | 714 | A0 |
| DM | 9 | 마이클 에시엔 | Michael Essien | Chelsea FC | 1982-12-03 | 5 | 453 | A0 |
| DM | 10 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | 8 | 650 | A- |
| DM | 11 | 모하메드 시소코 | Mohamed Sissoko | Juventus | 1985-01-22 | 6 | 564 | A- |
| DM | 12 | 데니우송 | Denílson | Arsenal FC | 1988-02-16 | 10 | 898 | B+ |
| DM | 13 | 페르난두 | Fernando | FC Porto | 미검증 | 10 | 856 | B+ |
| DM | 14 | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | 9 | 843 | B+ |
| DM | 15 | 알렉상드르 송 | Alexandre Song | Arsenal FC | 1987-09-09 | 10 | 761 | B+ |
| DM | 16 | 지우베르투 시우바 | Gilberto Silva | Panathinaikos FC | 미검증 | 8 | 747 | B+ |
| DM | 17 | 파울루 아순상 | Paulo Assunção | Club Atlético de Madrid | 1980-01-25 | 6 | 491 | B+ |
| DM | 18 | 라사나 디아라 | Lassana Diarra | Real Madrid CF | 1985-03-10 | 2 | 188 | B+ |
| DM | 19 | 안데르송 | Anderson | Manchester United FC | 1988-04-13 | 9 | 592 | B0 |
| DM | 20 | 파비우 호셈바크 | Fábio Rochemback | Sporting Clube de Portugal | 미검증 | 6 | 497 | B0 |
| DM | 21 | 페르난도 가고 | Fernando Gago | Real Madrid CF | 1986-04-10 | 6 | 493 | B0 |
| DM | 22 | 루카스 레이바 | Lucas Leiva | Liverpool FC | 1987-01-09 | 10 | 464 | B0 |
| DM | 23 | 브루노 소리아노 | Bruno Soriano | Villarreal CF | 1984-06-12 | 7 | 361 | B0 |
| DM | 24 | 안드레아스 오틀 | Andreas Ottl | FC Bayern München | 1985-03-01 | 6 | 282 | B- |
| DM | 25 | 알렉산드로스 치올리스 | Alexandros Tziolis | Panathinaikos FC | 미검증 | 4 | 212 | B- |
| DM | 26 | 에베르 바네가 | Éver Banega | Club Atlético de Madrid | 1988-06-29 | 3 | 133 | B- |
| DM | 27 | 크리스티안 폴센 | Christian Poulsen | Juventus | 1980-02-28 | 1 | 93 | B- |
| DM | 28 | 아드리앙 실바 | Adrien Silva | Sporting Clube de Portugal | 미검증 | 2 | 122 | C+ |
| CM | 1 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | 12 | 1026 | S |
| CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | 9 | 815 | S |
| CM | 3 | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | 1978-06-20 | 11 | 1011 | S |
| CM | 4 | 세스크 파브레가스 | Cesc Fàbregas | Arsenal FC | 1987-05-04 | 9 | 847 | A+ |
| CM | 5 | 사비 알론소 | Xabi Alonso | Liverpool FC | 1981-11-25 | 8 | 706 | A+ |
| CM | 6 | 라이언 긱스 | Ryan Giggs | Manchester United FC | 1973-11-29 | 11 | 684 | A+ |
| CM | 7 | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | 8 | 757 | A0 |
| CM | 8 | 제 호베르투 | Zé Roberto | FC Bayern München | 1974-07-06 | 9 | 751 | A0 |
| CM | 9 | 루초 곤살레스 | Lucho González | FC Porto | 미검증 | 9 | 728 | A0 |
| CM | 10 | 대런 플레처 | Darren Fletcher | Manchester United FC | 1984-02-01 | 8 | 721 | A0 |
| CM | 11 | 미하엘 발라크 | Michael Ballack | Chelsea FC | 1976-09-26 | 10 | 878 | A- |
| CM | 12 | 하울 메이렐르스 | Raul Meireles | FC Porto | 미검증 | 10 | 877 | A- |
| CM | 13 | 주앙 모티뉴 | João Moutinho | Sporting Clube de Portugal | 미검증 | 8 | 751 | A- |
| CM | 14 | 장 2세 마쿤 | Jean II Makoun | Olympique Lyonnais | 미검증 | 8 | 723 | A- |
| CM | 15 | 주니뉴 페르남부카누 | Juninho Pernambucano | Olympique Lyonnais | 1975-01-30 | 7 | 630 | A- |
| CM | 16 | 마테오 브리기 | Matteo Brighi | AS Roma | 1981-02-14 | 7 | 566 | A- |
| CM | 17 | 세이두 케이타 | Seydou Keita | FC Barcelona | 1980-01-16 | 10 | 562 | A- |
| CM | 18 | 폴 스콜스 | Paul Scholes | Manchester United FC | 1974-11-16 | 6 | 239 | A- |
| CM | 19 | 세바스티안 에구렌 | Sebastián Eguren | Villarreal CF | 1981-01-08 | 7 | 601 | B+ |
| CM | 20 | 라울 가르시아 | Raúl García | Club Atlético de Madrid | 1986-07-11 | 8 | 562 | B+ |
| CM | 21 | 미겔 벨로주 | Miguel Veloso | Sporting Clube de Portugal | 미검증 | 7 | 470 | B+ |
| CM | 22 | 설리 문타리 | Sulley Muntari | FC Internazionale Milano | 1984-08-27 | 7 | 463 | B+ |
| CM | 23 | 마니시 | Maniche | Club Atlético de Madrid | 1977-11-11 | 8 | 460 | B+ |
| CM | 24 | 아리엘 이바가사 | Ariel Ibagaza | Villarreal CF | 1976-10-27 | 8 | 455 | B+ |
| CM | 25 | 구티 | Guti | Real Madrid CF | 미검증 | 6 | 363 | B+ |
| CM | 26 | 데쿠 | Deco | Chelsea FC | 1977-08-27 | 4 | 331 | B+ |
| CM | 27 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus | 1986-01-19 | 5 | 309 | B+ |
| CM | 28 | 다비드 피사로 | David Pizarro | AS Roma | 1979-09-09 | 5 | 264 | B+ |
| CM | 29 | 킴 셸스트룀 | Kim Källström | Olympique Lyonnais | 1982-08-24 | 6 | 203 | B+ |
| CM | 30 | 시망 마테 주니오르 | Simão Mate Junior | Panathinaikos FC | 미검증 | 7 | 666 | B0 |
| CM | 31 | 아부 디아비 | Abou Diaby | Arsenal FC | 1986-05-11 | 7 | 470 | B0 |
| CM | 32 | 브루누 페레이라냐 | Bruno Pereirinha | Sporting Clube de Portugal | 미검증 | 8 | 268 | B0 |
| CM | 33 | 팀 보로프스키 | Tim Borowski | FC Bayern München | 1980-05-02 | 7 | 264 | B0 |
| CM | 34 | 토마스 코스타 | Tomás Costa | FC Porto | 미검증 | 9 | 262 | B0 |
| CM | 35 | 티아구 | Tiago | Juventus | 1981-05-02 | 3 | 253 | B0 |
| CM | 36 | 파트리크 비에이라 | Patrick Vieira | FC Internazionale Milano | 1976-06-23 | 3 | 145 | B0 |
| CM | 37 | 루벤 데 라 레드 | Rubén de la Red | Real Madrid CF | 미검증 | 1 | 94 | B0 |
| CM | 38 | 클레이통 | Cleyton | Panathinaikos FC | 미검증 | 4 | 279 | B- |
| CAM | 1 | 스티븐 제라드 | Steven Gerrard | Liverpool FC | 1980-05-30 | 8 | 580 | S |
| CAM | 2 | 줄리우 바프티스타 | Júlio Baptista | AS Roma | 1981-10-01 | 7 | 537 | A- |
| CAM | 3 | 시모네 페로타 | Simone Perrotta | AS Roma | 1977-09-17 | 6 | 476 | B+ |
| CAM | 4 | 마라트 이즈마일로프 | Marat Izmailov | Sporting Clube de Portugal | 미검증 | 6 | 464 | B+ |
| CAM | 5 | 데얀 스탄코비치 | Dejan Stanković | FC Internazionale Milano | 1978-09-11 | 5 | 378 | B+ |
| CAM | 6 | 베슬레이 스네이더르 | Wesley Sneijder | Real Madrid CF | 1984-06-09 | 4 | 353 | B+ |
| CAM | 7 | 레안드로 로마뇰리 | Leandro Romagnoli | Sporting Clube de Portugal | 미검증 | 5 | 359 | B0 |
| CAM | 8 | 라파엘 판데르파르트 | Rafael van der Vaart | Real Madrid CF | 1983-02-11 | 7 | 339 | B0 |
| CAM | 9 | 루이스 피구 | Luís Figo | FC Internazionale Milano | 1972-11-04 | 3 | 127 | B- |
| LW | 1 | 티에리 앙리 | Thierry Henry | FC Barcelona | 1977-08-17 | 10 | 717 | A+ |
| LW | 2 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | 8 | 743 | A+ |
| LW | 3 | 미르코 부치니치 | Mirko Vučinić | AS Roma | 1983-10-01 | 8 | 518 | A0 |
| LW | 4 | 사미르 나스리 | Samir Nasri | Arsenal FC | 1987-06-26 | 9 | 857 | A- |
| LW | 5 | 플로랑 말루다 | Florent Malouda | Chelsea FC | 1980-06-13 | 10 | 751 | A- |
| LW | 6 | 파벨 네드베드 | Pavel Nedvěd | Juventus | 1972-08-30 | 8 | 676 | A- |
| LW | 7 | 시망 사브로자 | Simão Sabrosa | Club Atlético de Madrid | 1979-10-31 | 6 | 566 | A- |
| LW | 8 | 요르고스 카라구니스 | Giorgos Karagounis | Panathinaikos FC | 미검증 | 7 | 524 | A- |
| LW | 9 | 크리스티안 로드리게스 | Cristian Rodríguez | FC Porto | 미검증 | 10 | 824 | B+ |
| LW | 10 | 알베르트 리에라 | Albert Riera | Liverpool FC | 1982-04-15 | 9 | 577 | B+ |
| LW | 11 | 에데르송 | Ederson | Olympique Lyonnais | 미검증 | 8 | 500 | B+ |
| LW | 12 | 로베르 피레스 | Robert Pirès | Villarreal CF | 1973-01-29 | 8 | 461 | B+ |
| LW | 13 | 박지성 | Park Ji-sung | Manchester United FC | 1981-02-25 | 9 | 443 | B+ |
| LW | 14 | 조 콜 | Joe Cole | Chelsea FC | 1981-11-08 | 4 | 281 | B+ |
| LW | 15 | 세바스티안 조빈코 | Sebastian Giovinco | Juventus | 1987-01-26 | 4 | 235 | B+ |
| LW | 16 | 나니 | Nani | Manchester United FC | 1986-11-17 | 7 | 533 | B0 |
| LW | 17 | 라이언 바벌 | Ryan Babel | Liverpool FC | 1986-12-19 | 9 | 421 | B0 |
| LW | 18 | 마리아노 곤살레스 | Mariano González | FC Porto | 미검증 | 7 | 251 | B0 |
| LW | 19 | 제레미 메네즈 | Jérémy Ménez | AS Roma | 1987-05-07 | 3 | 146 | B0 |
| LW | 20 | 안드레아스 이반시츠 | Andreas Ivanschitz | Panathinaikos FC | 미검증 | 4 | 132 | B0 |
| LW | 21 | 하미트 알튼톱 | Hamit Altıntop | FC Bayern München | 미검증 | 4 | 90 | B0 |
| LW | 22 | 알렉산드르 흘레프 | Alexander Hleb | FC Barcelona | 1981-05-01 | 7 | 403 | B- |
| LW | 23 | 카를로스 벨라 | Carlos Vela | Arsenal FC | 미검증 | 8 | 286 | B- |
| LW | 24 | 로이스턴 드렌테 | Royston Drenthe | Real Madrid CF | 1987-04-08 | 5 | 255 | B- |
| LW | 25 | 루이스 가르시아 | Luis García | Club Atlético de Madrid | 1978-06-24 | 5 | 236 | B- |
| LW | 26 | 앙토니 무니에 | Anthony Mounier | Olympique Lyonnais | 미검증 | 4 | 101 | B- |
| RW | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | 12 | 982 | S |
| RW | 2 | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | 1985-02-05 | 12 | 1055 | S |
| RW | 3 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | 9 | 750 | A0 |
| RW | 4 | 디르크 카위트 | Dirk Kuyt | Liverpool FC | 1980-07-22 | 9 | 781 | A- |
| RW | 5 | 산티 카솔라 | Santi Cazorla | Villarreal CF | 1984-12-13 | 8 | 642 | A- |
| RW | 6 | 아르연 로번 | Arjen Robben | Real Madrid CF | 1984-01-23 | 6 | 419 | A- |
| RW | 7 | 마우로 카모라네시 | Mauro Camoranesi | Juventus | 1976-10-04 | 4 | 217 | A- |
| RW | 8 | 헐크 | Hulk | FC Porto | 미검증 | 10 | 702 | B+ |
| RW | 9 | 시어 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 | 8 | 593 | B+ |
| RW | 10 | 막시 로드리게스 | Maxi Rodríguez | Club Atlético de Madrid | 1981-01-02 | 6 | 475 | B+ |
| RW | 11 | 살로몽 칼루 | Salomon Kalou | Chelsea FC | 1985-08-05 | 8 | 432 | B+ |
| RW | 12 | 요시 베나윤 | Yossi Benayoun | Liverpool FC | 1980-05-05 | 7 | 387 | B+ |
| RW | 13 | 마르코 마르키오니 | Marco Marchionni | Juventus | 1980-07-22 | 5 | 336 | B+ |
| RW | 14 | 카니 | Cani | Villarreal CF | 1981-08-03 | 7 | 322 | B+ |
| RW | 15 | 호드리구 타데이 | Rodrigo Taddei | AS Roma | 1980-03-06 | 7 | 559 | B0 |
| RW | 16 | 에마뉘엘 에부에 | Emmanuel Eboué | Arsenal FC | 1983-06-04 | 9 | 547 | B0 |
| RW | 17 | 가브리엘 | Gabriel | Panathinaikos FC | 미검증 | 5 | 383 | B0 |
| RW | 18 | 압둘 카데르 케이타 | Abdul Kader Keïta | Olympique Lyonnais | 미검증 | 5 | 318 | B0 |
| RW | 19 | 시드네 고부 | Sidney Govou | Olympique Lyonnais | 1979-07-27 | 4 | 315 | B0 |
| RW | 20 | 라자로스 흐리스토둘로풀로스 | Lazaros Christodoulopoulos | Panathinaikos FC | 미검증 | 3 | 112 | B- |
| RW | 21 | 타리크 세크티우이 | Tarik Sektioui | FC Porto | 미검증 | 3 | 84 | B- |
| RW | 22 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 | 4 | 134 | C+ |
| ST | 1 | 사뮈엘 에토 | Samuel Eto'o | FC Barcelona | 1981-03-10 | 10 | 810 | S |
| ST | 2 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | 13 | 999 | A+ |
| ST | 3 | 카림 벤제마 | Karim Benzema | Olympique Lyonnais | 미검증 | 8 | 731 | A+ |
| ST | 4 | 로빈 판페르시 | Robin van Persie | Arsenal FC | 1983-08-06 | 8 | 716 | A+ |
| ST | 5 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | FC Internazionale Milano | 1981-10-03 | 8 | 710 | A+ |
| ST | 6 | 디디에 드로그바 | Didier Drogba | Chelsea FC | 1978-03-11 | 10 | 702 | A+ |
| ST | 7 | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus | 1974-11-09 | 8 | 688 | A+ |
| ST | 8 | 미로슬라프 클로제 | Miroslav Klose | FC Bayern München | 1978-06-09 | 8 | 680 | A+ |
| ST | 9 | 프란체스코 토티 | Francesco Totti | AS Roma | 1976-09-27 | 7 | 590 | A+ |
| ST | 10 | 페르난도 토레스 | Fernando Torres | Liverpool FC | 1984-03-20 | 7 | 576 | A+ |
| ST | 11 | 리산드로 로페스 | Lisandro López | FC Porto | 미검증 | 10 | 943 | A0 |
| ST | 12 | 디미타르 베르바토프 | Dimitar Berbatov | Manchester United FC | 1981-01-30 | 9 | 540 | A0 |
| ST | 13 | 세르히오 아궤로 | Sergio Agüero | Club Atlético de Madrid | 1988-06-02 | 8 | 509 | A0 |
| ST | 14 | 디에고 포를란 | Diego Forlán | Club Atlético de Madrid | 1979-05-19 | 7 | 466 | A0 |
| ST | 15 | 니콜라 아넬카 | Nicolas Anelka | Chelsea FC | 1979-03-14 | 12 | 850 | A- |
| ST | 16 | 루카 토니 | Luca Toni | FC Bayern München | 1977-05-26 | 8 | 709 | A- |
| ST | 17 | 주세페 로시 | Giuseppe Rossi | Villarreal CF | 1987-02-01 | 8 | 694 | A- |
| ST | 18 | 에마뉘엘 아데바요르 | Emmanuel Adebayor | Arsenal FC | 1984-02-26 | 7 | 627 | A- |
| ST | 19 | 라울 곤살레스 | Raúl González | Real Madrid CF | 1977-06-27 | 7 | 624 | A- |
| ST | 20 | 뤼트 판니스텔로이 | Ruud van Nistelrooy | Real Madrid CF | 미검증 | 4 | 368 | A- |
| ST | 21 | 리에드송 | Liedson | Sporting Clube de Portugal | 미검증 | 4 | 359 | A- |
| ST | 22 | 반겔리스 만치오스 | Vangelis Mantzios | Panathinaikos FC | 미검증 | 6 | 540 | B+ |
| ST | 23 | 디미트리스 살핑기디스 | Dimitris Salpingidis | Panathinaikos FC | 미검증 | 8 | 458 | B+ |
| ST | 24 | 니클라스 벤트네르 | Nicklas Bendtner | Arsenal FC | 1988-01-16 | 10 | 448 | B+ |
| ST | 25 | 호세바 요렌테 | Joseba Llorente | Villarreal CF | 1979-11-24 | 7 | 436 | B+ |
| ST | 26 | 아마우리 | Amauri | Juventus | 1980-06-03 | 8 | 358 | B+ |
| ST | 27 | 마리오 발로텔리 | Mario Balotelli | FC Internazionale Milano | 1990-08-12 | 6 | 323 | B+ |
| ST | 28 | 로비 킨 | Robbie Keane | Liverpool FC | 1980-07-08 | 5 | 304 | B+ |
| ST | 29 | 루카스 포돌스키 | Lukas Podolski | FC Bayern München | 1985-06-04 | 4 | 266 | B+ |
| ST | 30 | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Juventus | 1979-11-21 | 5 | 261 | B+ |
| ST | 31 | 데를레이 | Derlei | Sporting Clube de Portugal | 미검증 | 8 | 609 | B0 |
| ST | 32 | 플로랑 시나마퐁골 | Florent Sinama-Pongolle | Club Atlético de Madrid | 1984-10-20 | 7 | 446 | B0 |
| ST | 33 | 아드리아누 | Adriano | FC Internazionale Milano | 1982-02-17 | 7 | 428 | B0 |
| ST | 34 | 야니크 잘루 | Yannick Djaló | Sporting Clube de Portugal | 미검증 | 6 | 365 | B0 |
| ST | 35 | 보얀 크르키치 | Bojan Krkić | FC Barcelona | 1990-08-28 | 9 | 359 | B0 |
| ST | 36 | 프레드 | Fred | Olympique Lyonnais | 1983-10-03 | 4 | 198 | B- |
| ST | 37 | 니하트 카흐베지 | Nihat Kahveci | Villarreal CF | 1979-11-23 | 4 | 157 | B- |
| ST | 38 | 안테 루카비나 | Ante Rukavina | Panathinaikos FC | 미검증 | 5 | 34 | C+ |
| ST | 39 | 에르네스토 파리아스 | Ernesto Farías | FC Porto | 미검증 | 2 | 31 | C+ |

## 7. 구단별 전체 292명 (16개 구단)

### Chelsea FC — 18명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 페트르 체흐 | Petr Čech | starter | A+ | 2 | 12 | 1139 |
| CB | 존 테리 | John Terry | starter | A+ | 1 | 11 | 1045 |
| CB | 알렉스 | Alex | starter | A- | 13 | 9 | 853 |
| CB | 브라니슬라브 이바노비치 | Branislav Ivanović | backup | A- | 21 | 4 | 379 |
| LB | 애슐리 콜 | Ashley Cole | starter | A+ | 1 | 8 | 763 |
| LB | 웨인 브리지 | Wayne Bridge | backup | B0 | 23 | 4 | 287 |
| RB | 조제 보싱와 | José Bosingwa | starter | A0 | 3 | 10 | 920 |
| RB | 파울루 페헤이라 | Paulo Ferreira | backup | B- | 25 | 2 | 9 |
| DM | 마이클 에시엔 | Michael Essien | backup | A0 | 9 | 5 | 453 |
| DM | 존 오비 미켈 | John Obi Mikel | starter | B+ | 14 | 9 | 843 |
| CM | 프랭크 램퍼드 | Frank Lampard | starter | S | 3 | 11 | 1011 |
| CM | 미하엘 발라크 | Michael Ballack | starter | A- | 11 | 10 | 878 |
| CM | 데쿠 | Deco | backup | B+ | 26 | 4 | 331 |
| LW | 플로랑 말루다 | Florent Malouda | starter | A- | 5 | 10 | 751 |
| LW | 조 콜 | Joe Cole | backup | B+ | 14 | 4 | 281 |
| RW | 살로몽 칼루 | Salomon Kalou | starter | B+ | 11 | 8 | 432 |
| ST | 디디에 드로그바 | Didier Drogba | starter | A+ | 6 | 10 | 702 |
| ST | 니콜라 아넬카 | Nicolas Anelka | backup | A- | 15 | 12 | 850 |

### AS Roma — 17명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 도니 | Doni | starter | B+ | 12 | 8 | 786 |
| CB | 필리프 멕세스 | Philippe Mexès | starter | A- | 18 | 6 | 565 |
| CB | 크리스티안 파누치 | Christian Panucci | backup | B+ | 31 | 5 | 422 |
| CB | 주앙 | Juan | starter | B+ | 35 | 4 | 307 |
| LB | 욘 아르네 리세 | John Arne Riise | starter | B+ | 10 | 8 | 556 |
| LB | 막스 토네토 | Max Tonetto | backup | B0 | 22 | 4 | 319 |
| RB | 시시뉴 | Cicinho | starter | B0 | 17 | 5 | 388 |
| RB | 마르코 카세티 | Marco Cassetti | backup | B0 | 21 | 2 | 187 |
| DM | 다니엘레 데 로시 | Daniele De Rossi | starter | A+ | 5 | 7 | 659 |
| CM | 마테오 브리기 | Matteo Brighi | starter | A- | 16 | 7 | 566 |
| CM | 다비드 피사로 | David Pizarro | backup | B+ | 28 | 5 | 264 |
| CAM | 줄리우 바프티스타 | Júlio Baptista | starter | A- | 2 | 7 | 537 |
| CAM | 시모네 페로타 | Simone Perrotta | backup | B+ | 3 | 6 | 476 |
| LW | 미르코 부치니치 | Mirko Vučinić | starter | A0 | 3 | 8 | 518 |
| LW | 제레미 메네즈 | Jérémy Ménez | backup | B0 | 19 | 3 | 146 |
| RW | 호드리구 타데이 | Rodrigo Taddei | starter | B0 | 15 | 7 | 559 |
| ST | 프란체스코 토티 | Francesco Totti | starter | A+ | 9 | 7 | 590 |

### Panathinaikos FC — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 마리오 갈리노비치 | Mario Galinović | starter | B0 | 16 | 7 | 661 |
| GK | 알렉산드로스 초르바스 | Alexandros Tzorvas | backup | C+ | 27 | 1 | 100 |
| CB | 호세 사리에기 | José Sarriegi | starter | B0 | 36 | 7 | 667 |
| CB | 야니스 구마스 | Giannis Goumas | starter | B0 | 40 | 6 | 440 |
| LB | 미카엘 닐손 | Mikael Nilsson | backup | B0 | 17 | 6 | 550 |
| LB | 니코스 스피로풀로스 | Nikos Spiropoulos | starter | B0 | 18 | 6 | 523 |
| RB | 루카스 빈트라 | Loukas Vyntra | starter | B+ | 8 | 8 | 761 |
| RB | 브라이스 문 | Bryce Moon | backup | B- | 23 | 3 | 167 |
| DM | 지우베르투 시우바 | Gilberto Silva | starter | B+ | 16 | 8 | 747 |
| DM | 알렉산드로스 치올리스 | Alexandros Tziolis | backup | B- | 25 | 4 | 212 |
| CM | 시망 마테 주니오르 | Simão Mate Junior | starter | B0 | 30 | 7 | 666 |
| CM | 클레이통 | Cleyton | backup | B- | 38 | 4 | 279 |
| LW | 요르고스 카라구니스 | Giorgos Karagounis | starter | A- | 8 | 7 | 524 |
| LW | 안드레아스 이반시츠 | Andreas Ivanschitz | backup | B0 | 20 | 4 | 132 |
| RW | 가브리엘 | Gabriel | starter | B0 | 17 | 5 | 383 |
| RW | 라자로스 흐리스토둘로풀로스 | Lazaros Christodoulopoulos | backup | B- | 20 | 3 | 112 |
| ST | 반겔리스 만치오스 | Vangelis Mantzios | starter | B+ | 22 | 6 | 540 |
| ST | 디미트리스 살핑기디스 | Dimitris Salpingidis | starter | B+ | 23 | 8 | 458 |
| ST | 안테 루카비나 | Ante Rukavina | backup | C+ | 38 | 5 | 34 |

### FC Internazionale Milano — 17명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 줄리우 세자르 | Júlio César | starter | A+ | 5 | 7 | 663 |
| GK | 프란체스코 톨도 | Francesco Toldo | backup | B- | 23 | 1 | 94 |
| CB | 이반 코르도바 | Iván Córdoba | starter | A- | 17 | 7 | 615 |
| CB | 마르코 마테라치 | Marco Materazzi | starter | B0 | 42 | 5 | 352 |
| CB | 니콜라스 부르디소 | Nicolás Burdisso | backup | B0 | 45 | 4 | 241 |
| LB | 막스웰 | Maxwell | starter | B+ | 13 | 4 | 254 |
| LB | 다비데 산톤 | Davide Santon | backup | B+ | 14 | 2 | 186 |
| RB | 마이콩 | Maicon | starter | A+ | 2 | 8 | 757 |
| DM | 에스테반 캄비아소 | Esteban Cambiasso | starter | A+ | 3 | 8 | 747 |
| CM | 하비에르 사네티 | Javier Zanetti | starter | A0 | 7 | 8 | 757 |
| CM | 설리 문타리 | Sulley Muntari | starter | B+ | 22 | 7 | 463 |
| CM | 파트리크 비에이라 | Patrick Vieira | backup | B0 | 36 | 3 | 145 |
| CAM | 데얀 스탄코비치 | Dejan Stanković | starter | B+ | 5 | 5 | 378 |
| CAM | 루이스 피구 | Luís Figo | backup | B- | 9 | 3 | 127 |
| ST | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | starter | A+ | 5 | 8 | 710 |
| ST | 마리오 발로텔리 | Mario Balotelli | backup | B+ | 27 | 6 | 323 |
| ST | 아드리아누 | Adriano | starter | B0 | 33 | 7 | 428 |

### FC Barcelona — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 빅토르 발데스 | Víctor Valdés | starter | A0 | 7 | 12 | 1141 |
| GK | 알베르트 조르케라 | Albert Jorquera | backup | C0 | 28 | 1 | 96 |
| CB | 제라르 피케 | Gerard Piqué | starter | A+ | 3 | 12 | 1144 |
| CB | 카를레스 푸욜 | Carles Puyol | starter | A+ | 6 | 9 | 794 |
| CB | 라파엘 마르케스 | Rafael Márquez | backup | A- | 14 | 9 | 772 |
| LB | 에리크 아비달 | Éric Abidal | backup | A- | 6 | 3 | 256 |
| LB | 시우비뉴 | Sylvinho | starter | B+ | 11 | 7 | 481 |
| RB | 다니 아우베스 | Dani Alves | starter | S | 1 | 10 | 952 |
| DM | 야야 투레 | Yaya Touré | starter | A+ | 1 | 10 | 849 |
| DM | 세르히오 부스케츠 | Sergio Busquets | backup | A- | 10 | 8 | 650 |
| CM | 사비 에르난데스 | Xavi Hernández | starter | S | 1 | 12 | 1026 |
| CM | 안드레스 이니에스타 | Andrés Iniesta | starter | S | 2 | 9 | 815 |
| CM | 세이두 케이타 | Seydou Keita | backup | A- | 17 | 10 | 562 |
| LW | 티에리 앙리 | Thierry Henry | starter | A+ | 1 | 10 | 717 |
| LW | 알렉산드르 흘레프 | Alexander Hleb | backup | B- | 22 | 7 | 403 |
| RW | 리오넬 메시 | Lionel Messi | starter | S | 1 | 12 | 982 |
| RW | 페드로 로드리게스 | Pedro Rodríguez | backup | C+ | 22 | 4 | 134 |
| ST | 사뮈엘 에토 | Samuel Eto'o | starter | S | 1 | 10 | 810 |
| ST | 보얀 크르키치 | Bojan Krkić | backup | B0 | 35 | 9 | 359 |

### Sporting Clube de Portugal — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 후이 파트리시우 | Rui Patrício | starter | B+ | 13 | 6 | 540 |
| GK | 티아구 | Tiago | backup | C+ | 26 | 3 | 210 |
| CB | 안데르손 폴가 | Anderson Polga | starter | B+ | 24 | 8 | 751 |
| CB | 토넬 | Tonel | starter | B0 | 39 | 5 | 468 |
| CB | 다니엘 카리수 | Daniel Carriço | backup | C+ | 47 | 2 | 189 |
| LB | 마르쿠 카네이라 | Marco Caneira | starter | B0 | 19 | 6 | 474 |
| LB | 레안드로 그리미 | Leandro Grimi | backup | B- | 25 | 4 | 302 |
| RB | 아벨 | Abel | starter | B0 | 15 | 7 | 536 |
| RB | 페드루 시우바 | Pedro Silva | backup | C0 | 27 | 1 | 92 |
| DM | 파비우 호셈바크 | Fábio Rochemback | starter | B0 | 20 | 6 | 497 |
| DM | 아드리앙 실바 | Adrien Silva | backup | C+ | 28 | 2 | 122 |
| CM | 주앙 모티뉴 | João Moutinho | starter | A- | 13 | 8 | 751 |
| CM | 미겔 벨로주 | Miguel Veloso | starter | B+ | 21 | 7 | 470 |
| CM | 브루누 페레이라냐 | Bruno Pereirinha | backup | B0 | 32 | 8 | 268 |
| CAM | 마라트 이즈마일로프 | Marat Izmailov | starter | B+ | 4 | 6 | 464 |
| CAM | 레안드로 로마뇰리 | Leandro Romagnoli | backup | B0 | 7 | 5 | 359 |
| ST | 리에드송 | Liedson | starter | A- | 21 | 4 | 359 |
| ST | 데를레이 | Derlei | starter | B0 | 31 | 8 | 609 |
| ST | 야니크 잘루 | Yannick Djaló | backup | B0 | 34 | 6 | 365 |

### Liverpool FC — 18명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 페페 레이나 | Pepe Reina | starter | A+ | 3 | 9 | 852 |
| GK | 디에구 카발리에리 | Diego Cavalieri | backup | B- | 22 | 1 | 95 |
| CB | 제이미 캐러거 | Jamie Carragher | starter | A+ | 4 | 10 | 936 |
| CB | 마르틴 슈크르텔 | Martin Škrtel | starter | B+ | 27 | 6 | 565 |
| CB | 다니엘 아게르 | Daniel Agger | backup | B+ | 33 | 4 | 382 |
| LB | 파비우 아우렐리우 | Fábio Aurélio | starter | B+ | 8 | 7 | 597 |
| LB | 안드레아 도세나 | Andrea Dossena | backup | B0 | 21 | 6 | 361 |
| RB | 알바로 아르벨로아 | Álvaro Arbeloa | starter | A- | 6 | 10 | 914 |
| DM | 하비에르 마스체라노 | Javier Mascherano | starter | A0 | 8 | 8 | 714 |
| DM | 루카스 레이바 | Lucas Leiva | backup | B0 | 22 | 10 | 464 |
| CM | 사비 알론소 | Xabi Alonso | starter | A+ | 5 | 8 | 706 |
| CAM | 스티븐 제라드 | Steven Gerrard | starter | S | 1 | 8 | 580 |
| LW | 알베르트 리에라 | Albert Riera | starter | B+ | 10 | 9 | 577 |
| LW | 라이언 바벌 | Ryan Babel | backup | B0 | 17 | 9 | 421 |
| RW | 디르크 카위트 | Dirk Kuyt | starter | A- | 4 | 9 | 781 |
| RW | 요시 베나윤 | Yossi Benayoun | backup | B+ | 12 | 7 | 387 |
| ST | 페르난도 토레스 | Fernando Torres | starter | A+ | 10 | 7 | 576 |
| ST | 로비 킨 | Robbie Keane | backup | B+ | 28 | 5 | 304 |

### Club Atlético de Madrid — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 레오 프랑코 | Leo Franco | starter | B0 | 17 | 6 | 572 |
| GK | 그레고리 쿠페 | Grégory Coupet | backup | B- | 20 | 2 | 189 |
| CB | 욘 헤이팅아 | John Heitinga | starter | B+ | 34 | 4 | 338 |
| CB | 루이스 아마란토 페레아 | Luis Amaranto Perea | starter | B0 | 37 | 6 | 569 |
| CB | 파블로 이바녜스 | Pablo Ibáñez | backup | B0 | 43 | 4 | 328 |
| LB | 안토니오 로페스 | Antonio López | starter | B0 | 16 | 6 | 572 |
| LB | 마리아노 페르니아 | Mariano Pernía | backup | B- | 26 | 3 | 286 |
| RB | 토마시 우이팔루시 | Tomáš Ujfaluši | starter | B+ | 12 | 5 | 475 |
| RB | 요르고스 세이타리디스 | Georgios Seitaridis | backup | B0 | 18 | 4 | 380 |
| DM | 파울루 아순상 | Paulo Assunção | starter | B+ | 17 | 6 | 491 |
| DM | 에베르 바네가 | Éver Banega | backup | B- | 26 | 3 | 133 |
| CM | 라울 가르시아 | Raúl García | starter | B+ | 20 | 8 | 562 |
| CM | 마니시 | Maniche | backup | B+ | 23 | 8 | 460 |
| LW | 시망 사브로자 | Simão Sabrosa | starter | A- | 7 | 6 | 566 |
| LW | 루이스 가르시아 | Luis García | backup | B- | 25 | 5 | 236 |
| RW | 막시 로드리게스 | Maxi Rodríguez | starter | B+ | 10 | 6 | 475 |
| ST | 세르히오 아궤로 | Sergio Agüero | starter | A0 | 13 | 8 | 509 |
| ST | 디에고 포를란 | Diego Forlán | starter | A0 | 14 | 7 | 466 |
| ST | 플로랑 시나마퐁골 | Florent Sinama-Pongolle | backup | B0 | 32 | 7 | 446 |

### Manchester United FC — 18명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 에드빈 판데르사르 | Edwin van der Sar | starter | A+ | 1 | 10 | 943 |
| GK | 토마시 쿠슈차크 | Tomasz Kuszczak | backup | B- | 21 | 2 | 188 |
| CB | 리오 퍼디난드 | Rio Ferdinand | starter | A+ | 2 | 11 | 1027 |
| CB | 네마냐 비디치 | Nemanja Vidić | starter | A+ | 5 | 9 | 847 |
| CB | 조니 에번스 | Jonny Evans | backup | B+ | 28 | 7 | 550 |
| LB | 파트리스 에브라 | Patrice Evra | starter | A+ | 2 | 11 | 940 |
| RB | 존 오셰이 | John O'Shea | starter | B+ | 7 | 12 | 1130 |
| RB | 하파엘 다 실바 | Rafael da Silva | backup | B0 | 22 | 4 | 180 |
| DM | 마이클 캐릭 | Michael Carrick | starter | A0 | 7 | 9 | 839 |
| DM | 안데르송 | Anderson | backup | B0 | 19 | 9 | 592 |
| CM | 라이언 긱스 | Ryan Giggs | starter | A+ | 6 | 11 | 684 |
| CM | 대런 플레처 | Darren Fletcher | starter | A0 | 10 | 8 | 721 |
| CM | 폴 스콜스 | Paul Scholes | backup | A- | 18 | 6 | 239 |
| LW | 박지성 | Park Ji-sung | starter | B+ | 13 | 9 | 443 |
| LW | 나니 | Nani | backup | B0 | 16 | 7 | 533 |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | starter | S | 2 | 12 | 1055 |
| ST | 웨인 루니 | Wayne Rooney | starter | A+ | 2 | 13 | 999 |
| ST | 디미타르 베르바토프 | Dimitar Berbatov | backup | A0 | 12 | 9 | 540 |

### Villarreal CF — 18명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 디에고 로페스 | Diego López | starter | A0 | 8 | 9 | 851 |
| GK | 세바스티안 비에라 | Sebastián Viera | backup | B- | 25 | 1 | 94 |
| CB | 디에고 고딘 | Diego Godín | starter | A- | 15 | 7 | 664 |
| CB | 곤살로 로드리게스 | Gonzalo Rodríguez | starter | B+ | 23 | 8 | 756 |
| CB | 파브리시오 푸엔테스 | Fabricio Fuentes | backup | B0 | 38 | 5 | 470 |
| LB | 호안 카프데빌라 | Joan Capdevila | starter | A0 | 4 | 8 | 743 |
| RB | 앙헬 로페스 | Ángel López | starter | B+ | 10 | 8 | 692 |
| RB | 하비 벤타 | Javi Venta | backup | B0 | 19 | 3 | 253 |
| DM | 마르코스 세나 | Marcos Senna | starter | A+ | 4 | 8 | 661 |
| DM | 브루노 소리아노 | Bruno Soriano | backup | B0 | 23 | 7 | 361 |
| CM | 세바스티안 에구렌 | Sebastián Eguren | starter | B+ | 19 | 7 | 601 |
| CM | 아리엘 이바가사 | Ariel Ibagaza | backup | B+ | 24 | 8 | 455 |
| LW | 로베르 피레스 | Robert Pirès | starter | B+ | 12 | 8 | 461 |
| RW | 산티 카솔라 | Santi Cazorla | starter | A- | 5 | 8 | 642 |
| RW | 카니 | Cani | backup | B+ | 14 | 7 | 322 |
| ST | 주세페 로시 | Giuseppe Rossi | starter | A- | 17 | 8 | 694 |
| ST | 호세바 요렌테 | Joseba Llorente | starter | B+ | 25 | 7 | 436 |
| ST | 니하트 카흐베지 | Nihat Kahveci | backup | B- | 37 | 4 | 157 |

### FC Bayern München — 18명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 미하엘 렌징 | Michael Rensing | starter | B0 | 15 | 7 | 662 |
| GK | 한스외르크 부트 | Hans-Jörg Butt | backup | B0 | 18 | 3 | 281 |
| CB | 루시우 | Lúcio | starter | A+ | 7 | 8 | 672 |
| CB | 마르틴 데미첼리스 | Martín Demichelis | starter | A0 | 10 | 8 | 756 |
| CB | 다니엘 판 바위턴 | Daniel van Buyten | backup | B+ | 32 | 5 | 394 |
| LB | 필리프 람 | Philipp Lahm | starter | A+ | 3 | 8 | 705 |
| RB | 마시모 오도 | Massimo Oddo | starter | B0 | 14 | 7 | 635 |
| RB | 크리스티안 렐 | Christian Lell | backup | B0 | 16 | 6 | 450 |
| DM | 마르크 판 보멀 | Mark van Bommel | starter | A0 | 6 | 9 | 849 |
| DM | 안드레아스 오틀 | Andreas Ottl | backup | B- | 24 | 6 | 282 |
| CM | 제 호베르투 | Zé Roberto | starter | A0 | 8 | 9 | 751 |
| CM | 팀 보로프스키 | Tim Borowski | backup | B0 | 33 | 7 | 264 |
| LW | 프랑크 리베리 | Franck Ribéry | starter | A+ | 2 | 8 | 743 |
| LW | 하미트 알튼톱 | Hamit Altıntop | backup | B0 | 21 | 4 | 90 |
| RW | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | starter | A0 | 3 | 9 | 750 |
| ST | 미로슬라프 클로제 | Miroslav Klose | starter | A+ | 8 | 8 | 680 |
| ST | 루카 토니 | Luca Toni | starter | A- | 16 | 8 | 709 |
| ST | 루카스 포돌스키 | Lukas Podolski | backup | B+ | 29 | 4 | 266 |

### Olympique Lyonnais — 17명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 위고 요리스 | Hugo Lloris | starter | A0 | 9 | 8 | 757 |
| CB | 크리스 | Cris | starter | A0 | 11 | 6 | 566 |
| CB | 장알랭 붐송 | Jean-Alain Boumsong | starter | B+ | 25 | 8 | 670 |
| CB | 존 멘사 | John Mensah | backup | B0 | 41 | 4 | 377 |
| LB | 파비오 그로소 | Fabio Grosso | starter | B+ | 9 | 6 | 567 |
| RB | 앙토니 레베예르 | Anthony Réveillère | starter | B+ | 13 | 4 | 377 |
| RB | 프랑수아 클레르 | François Clerc | backup | B- | 24 | 1 | 46 |
| DM | 제레미 툴랄랑 | Jérémy Toulalan | starter | A+ | 2 | 8 | 757 |
| CM | 장 2세 마쿤 | Jean II Makoun | starter | A- | 14 | 8 | 723 |
| CM | 주니뉴 페르남부카누 | Juninho Pernambucano | starter | A- | 15 | 7 | 630 |
| CM | 킴 셸스트룀 | Kim Källström | backup | B+ | 29 | 6 | 203 |
| LW | 에데르송 | Ederson | starter | B+ | 11 | 8 | 500 |
| LW | 앙토니 무니에 | Anthony Mounier | backup | B- | 26 | 4 | 101 |
| RW | 압둘 카데르 케이타 | Abdul Kader Keïta | starter | B0 | 18 | 5 | 318 |
| RW | 시드네 고부 | Sidney Govou | backup | B0 | 19 | 4 | 315 |
| ST | 카림 벤제마 | Karim Benzema | starter | A+ | 3 | 8 | 731 |
| ST | 프레드 | Fred | backup | B- | 36 | 4 | 198 |

### FC Porto — 18명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 에우통 | Helton | starter | B+ | 11 | 9 | 853 |
| CB | 브루누 알베스 | Bruno Alves | starter | A0 | 9 | 10 | 949 |
| CB | 호날두 | Rolando | starter | B+ | 22 | 10 | 949 |
| CB | 페드루 이마누엘 | Pedro Emanuel | backup | B0 | 44 | 4 | 285 |
| LB | 알리 시소코 | Aly Cissokho | starter | B+ | 12 | 4 | 383 |
| LB | 리누 | Lino | backup | B- | 28 | 3 | 115 |
| RB | 크리스티안 서푸나루 | Cristian Săpunaru | starter | B+ | 9 | 8 | 693 |
| RB | 호르헤 푸실레 | Jorge Fucile | backup | B0 | 20 | 2 | 189 |
| DM | 페르난두 | Fernando | starter | B+ | 13 | 10 | 856 |
| CM | 루초 곤살레스 | Lucho González | starter | A0 | 9 | 9 | 728 |
| CM | 하울 메이렐르스 | Raul Meireles | starter | A- | 12 | 10 | 877 |
| CM | 토마스 코스타 | Tomás Costa | backup | B0 | 34 | 9 | 262 |
| LW | 크리스티안 로드리게스 | Cristian Rodríguez | starter | B+ | 9 | 10 | 824 |
| LW | 마리아노 곤살레스 | Mariano González | backup | B0 | 18 | 7 | 251 |
| RW | 헐크 | Hulk | starter | B+ | 8 | 10 | 702 |
| RW | 타리크 세크티우이 | Tarik Sektioui | backup | B- | 21 | 3 | 84 |
| ST | 리산드로 로페스 | Lisandro López | starter | A0 | 11 | 10 | 943 |
| ST | 에르네스토 파리아스 | Ernesto Farías | backup | C+ | 39 | 2 | 31 |

### Arsenal FC — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 마누엘 알무니아 | Manuel Almunia | starter | B+ | 10 | 10 | 905 |
| GK | 우카시 파비안스키 | Łukasz Fabiański | backup | B- | 19 | 3 | 259 |
| CB | 콜로 투레 | Kolo Touré | starter | A- | 12 | 9 | 881 |
| CB | 윌리암 갈라스 | William Gallas | starter | A- | 16 | 7 | 637 |
| CB | 요한 주루 | Johan Djourou | backup | B+ | 30 | 6 | 441 |
| LB | 가엘 클리시 | Gaël Clichy | starter | A- | 5 | 8 | 787 |
| LB | 키런 깁스 | Kieran Gibbs | backup | B- | 27 | 4 | 269 |
| RB | 바카리 사냐 | Bacary Sagna | starter | A0 | 5 | 7 | 676 |
| DM | 데니우송 | Denílson | starter | B+ | 12 | 10 | 898 |
| DM | 알렉상드르 송 | Alexandre Song | backup | B+ | 15 | 10 | 761 |
| CM | 세스크 파브레가스 | Cesc Fàbregas | starter | A+ | 4 | 9 | 847 |
| CM | 아부 디아비 | Abou Diaby | backup | B0 | 31 | 7 | 470 |
| LW | 사미르 나스리 | Samir Nasri | starter | A- | 4 | 9 | 857 |
| LW | 카를로스 벨라 | Carlos Vela | backup | B- | 23 | 8 | 286 |
| RW | 시어 월컷 | Theo Walcott | starter | B+ | 9 | 8 | 593 |
| RW | 에마뉘엘 에부에 | Emmanuel Eboué | backup | B0 | 16 | 9 | 547 |
| ST | 로빈 판페르시 | Robin van Persie | starter | A+ | 4 | 8 | 716 |
| ST | 에마뉘엘 아데바요르 | Emmanuel Adebayor | starter | A- | 18 | 7 | 627 |
| ST | 니클라스 벤트네르 | Nicklas Bendtner | backup | B+ | 24 | 10 | 448 |

### Juventus — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 잔루이지 부폰 | Gianluigi Buffon | backup | A+ | 6 | 3 | 284 |
| GK | 알렉산더 만닝거 | Alexander Manninger | starter | B+ | 14 | 5 | 477 |
| CB | 조르조 키엘리니 | Giorgio Chiellini | starter | A+ | 8 | 7 | 644 |
| CB | 니콜라 레그로탈리에 | Nicola Legrottaglie | backup | A- | 20 | 6 | 442 |
| CB | 올로프 멜베리 | Olof Mellberg | starter | B+ | 29 | 6 | 522 |
| LB | 크리스티안 몰리나로 | Cristian Molinaro | starter | B+ | 7 | 7 | 627 |
| LB | 파올로 데 첼리에 | Paolo De Ceglie | backup | B0 | 24 | 4 | 229 |
| RB | 즈데네크 그리게라 | Zdeněk Grygera | starter | B+ | 11 | 6 | 571 |
| DM | 모하메드 시소코 | Mohamed Sissoko | starter | A- | 11 | 6 | 564 |
| DM | 크리스티안 폴센 | Christian Poulsen | backup | B- | 27 | 1 | 93 |
| CM | 클라우디오 마르키시오 | Claudio Marchisio | starter | B+ | 27 | 5 | 309 |
| CM | 티아구 | Tiago | backup | B0 | 35 | 3 | 253 |
| LW | 파벨 네드베드 | Pavel Nedvěd | starter | A- | 6 | 8 | 676 |
| LW | 세바스티안 조빈코 | Sebastian Giovinco | backup | B+ | 15 | 4 | 235 |
| RW | 마우로 카모라네시 | Mauro Camoranesi | backup | A- | 7 | 4 | 217 |
| RW | 마르코 마르키오니 | Marco Marchionni | starter | B+ | 13 | 5 | 336 |
| ST | 알레산드로 델 피에로 | Alessandro Del Piero | starter | A+ | 7 | 8 | 688 |
| ST | 아마우리 | Amauri | starter | B+ | 26 | 8 | 358 |
| ST | 빈첸초 이아퀸타 | Vincenzo Iaquinta | backup | B+ | 30 | 5 | 261 |

### Real Madrid CF — 19명

| 포지션 | 한글 이름 | 원어명 | 기존 주전/후보 | 티어 | 포지션 순위 | 본선 경기 | 출전분 |
|---|---|---|---|---|---:|---:|---:|
| GK | 이케르 카시야스 | Iker Casillas | starter | A+ | 4 | 7 | 665 |
| GK | 예지 두데크 | Jerzy Dudek | backup | B- | 24 | 1 | 94 |
| CB | 페페 | Pepe | starter | A- | 19 | 5 | 474 |
| CB | 파비오 칸나바로 | Fabio Cannavaro | starter | B+ | 26 | 7 | 633 |
| CB | 크리스토프 메첼더 | Christoph Metzelder | backup | B- | 46 | 1 | 47 |
| LB | 가브리엘 에인세 | Gabriel Heinze | starter | B0 | 15 | 7 | 653 |
| LB | 마르셀루 | Marcelo | backup | B0 | 20 | 5 | 378 |
| RB | 세르히오 라모스 | Sergio Ramos | starter | A0 | 4 | 8 | 760 |
| RB | 미첼 살가도 | Míchel Salgado | backup | C+ | 26 | 1 | 94 |
| DM | 라사나 디아라 | Lassana Diarra | backup | B+ | 18 | 2 | 188 |
| DM | 페르난도 가고 | Fernando Gago | starter | B0 | 21 | 6 | 493 |
| CM | 구티 | Guti | starter | B+ | 25 | 6 | 363 |
| CM | 루벤 데 라 레드 | Rubén de la Red | backup | B0 | 37 | 1 | 94 |
| CAM | 베슬레이 스네이더르 | Wesley Sneijder | starter | B+ | 6 | 4 | 353 |
| CAM | 라파엘 판데르파르트 | Rafael van der Vaart | backup | B0 | 8 | 7 | 339 |
| LW | 로이스턴 드렌테 | Royston Drenthe | starter | B- | 24 | 5 | 255 |
| RW | 아르연 로번 | Arjen Robben | starter | A- | 6 | 6 | 419 |
| ST | 라울 곤살레스 | Raúl González | starter | A- | 19 | 7 | 624 |
| ST | 뤼트 판니스텔로이 | Ruud van Nistelrooy | backup | A- | 20 | 4 | 368 |

## 8. 포지션별 상위 3명

| 포지션 | 1위 | 2위 | 3위 |
|---|---|---|---|
| GK | 에드빈 판데르사르 (A+) | 페트르 체흐 (A+) | 페페 레이나 (A+) |
| CB | 존 테리 (A+) | 리오 퍼디난드 (A+) | 제라르 피케 (A+) |
| LB | 애슐리 콜 (A+) | 파트리스 에브라 (A+) | 필리프 람 (A+) |
| RB | 다니 아우베스 (S) | 마이콩 (A+) | 조제 보싱와 (A0) |
| DM | 야야 투레 (A+) | 제레미 툴랄랑 (A+) | 에스테반 캄비아소 (A+) |
| CM | 사비 에르난데스 (S) | 안드레스 이니에스타 (S) | 프랭크 램퍼드 (S) |
| CAM | 스티븐 제라드 (S) | 줄리우 바프티스타 (A-) | 시모네 페로타 (B+) |
| LW | 티에리 앙리 (A+) | 프랑크 리베리 (A+) | 미르코 부치니치 (A0) |
| RW | 리오넬 메시 (S) | 크리스티아누 호날두 (S) | 바스티안 슈바인슈타이거 (A0) |
| ST | 사뮈엘 에토 (S) | 웨인 루니 (A+) | 카림 벤제마 (A+) |

## 9. World Class (S / A+)

| 포지션 | 순위 | 이름 | 구단 | 티어 |
|---|---:|---|---|---|
| GK | 1 | 에드빈 판데르사르 | Manchester United FC | A+ |
| GK | 2 | 페트르 체흐 | Chelsea FC | A+ |
| GK | 3 | 페페 레이나 | Liverpool FC | A+ |
| GK | 4 | 이케르 카시야스 | Real Madrid CF | A+ |
| GK | 5 | 줄리우 세자르 | FC Internazionale Milano | A+ |
| GK | 6 | 잔루이지 부폰 | Juventus | A+ |
| CB | 1 | 존 테리 | Chelsea FC | A+ |
| CB | 2 | 리오 퍼디난드 | Manchester United FC | A+ |
| CB | 3 | 제라르 피케 | FC Barcelona | A+ |
| CB | 4 | 제이미 캐러거 | Liverpool FC | A+ |
| CB | 5 | 네마냐 비디치 | Manchester United FC | A+ |
| CB | 6 | 카를레스 푸욜 | FC Barcelona | A+ |
| CB | 7 | 루시우 | FC Bayern München | A+ |
| CB | 8 | 조르조 키엘리니 | Juventus | A+ |
| LB | 1 | 애슐리 콜 | Chelsea FC | A+ |
| LB | 2 | 파트리스 에브라 | Manchester United FC | A+ |
| LB | 3 | 필리프 람 | FC Bayern München | A+ |
| RB | 1 | 다니 아우베스 | FC Barcelona | S |
| RB | 2 | 마이콩 | FC Internazionale Milano | A+ |
| DM | 1 | 야야 투레 | FC Barcelona | A+ |
| DM | 2 | 제레미 툴랄랑 | Olympique Lyonnais | A+ |
| DM | 3 | 에스테반 캄비아소 | FC Internazionale Milano | A+ |
| DM | 4 | 마르코스 세나 | Villarreal CF | A+ |
| DM | 5 | 다니엘레 데 로시 | AS Roma | A+ |
| CM | 1 | 사비 에르난데스 | FC Barcelona | S |
| CM | 2 | 안드레스 이니에스타 | FC Barcelona | S |
| CM | 3 | 프랭크 램퍼드 | Chelsea FC | S |
| CM | 4 | 세스크 파브레가스 | Arsenal FC | A+ |
| CM | 5 | 사비 알론소 | Liverpool FC | A+ |
| CM | 6 | 라이언 긱스 | Manchester United FC | A+ |
| CAM | 1 | 스티븐 제라드 | Liverpool FC | S |
| LW | 1 | 티에리 앙리 | FC Barcelona | A+ |
| LW | 2 | 프랑크 리베리 | FC Bayern München | A+ |
| RW | 1 | 리오넬 메시 | FC Barcelona | S |
| RW | 2 | 크리스티아누 호날두 | Manchester United FC | S |
| ST | 1 | 사뮈엘 에토 | FC Barcelona | S |
| ST | 2 | 웨인 루니 | Manchester United FC | A+ |
| ST | 3 | 카림 벤제마 | Olympique Lyonnais | A+ |
| ST | 4 | 로빈 판페르시 | Arsenal FC | A+ |
| ST | 5 | 즐라탄 이브라히모비치 | FC Internazionale Milano | A+ |
| ST | 6 | 디디에 드로그바 | Chelsea FC | A+ |
| ST | 7 | 알레산드로 델 피에로 | Juventus | A+ |
| ST | 8 | 미로슬라프 클로제 | FC Bayern München | A+ |
| ST | 9 | 프란체스코 토티 | AS Roma | A+ |
| ST | 10 | 페르난도 토레스 | Liverpool FC | A+ |

## 10. Top Class (S / A+ / A0 / A-, 월드클래스 포함)

| 포지션 | 순위 | 이름 | 구단 | 티어 |
|---|---:|---|---|---|
| GK | 1 | 에드빈 판데르사르 | Manchester United FC | A+ |
| GK | 2 | 페트르 체흐 | Chelsea FC | A+ |
| GK | 3 | 페페 레이나 | Liverpool FC | A+ |
| GK | 4 | 이케르 카시야스 | Real Madrid CF | A+ |
| GK | 5 | 줄리우 세자르 | FC Internazionale Milano | A+ |
| GK | 6 | 잔루이지 부폰 | Juventus | A+ |
| GK | 7 | 빅토르 발데스 | FC Barcelona | A0 |
| GK | 8 | 디에고 로페스 | Villarreal CF | A0 |
| GK | 9 | 위고 요리스 | Olympique Lyonnais | A0 |
| CB | 1 | 존 테리 | Chelsea FC | A+ |
| CB | 2 | 리오 퍼디난드 | Manchester United FC | A+ |
| CB | 3 | 제라르 피케 | FC Barcelona | A+ |
| CB | 4 | 제이미 캐러거 | Liverpool FC | A+ |
| CB | 5 | 네마냐 비디치 | Manchester United FC | A+ |
| CB | 6 | 카를레스 푸욜 | FC Barcelona | A+ |
| CB | 7 | 루시우 | FC Bayern München | A+ |
| CB | 8 | 조르조 키엘리니 | Juventus | A+ |
| CB | 9 | 브루누 알베스 | FC Porto | A0 |
| CB | 10 | 마르틴 데미첼리스 | FC Bayern München | A0 |
| CB | 11 | 크리스 | Olympique Lyonnais | A0 |
| CB | 12 | 콜로 투레 | Arsenal FC | A- |
| CB | 13 | 알렉스 | Chelsea FC | A- |
| CB | 14 | 라파엘 마르케스 | FC Barcelona | A- |
| CB | 15 | 디에고 고딘 | Villarreal CF | A- |
| CB | 16 | 윌리암 갈라스 | Arsenal FC | A- |
| CB | 17 | 이반 코르도바 | FC Internazionale Milano | A- |
| CB | 18 | 필리프 멕세스 | AS Roma | A- |
| CB | 19 | 페페 | Real Madrid CF | A- |
| CB | 20 | 니콜라 레그로탈리에 | Juventus | A- |
| CB | 21 | 브라니슬라브 이바노비치 | Chelsea FC | A- |
| LB | 1 | 애슐리 콜 | Chelsea FC | A+ |
| LB | 2 | 파트리스 에브라 | Manchester United FC | A+ |
| LB | 3 | 필리프 람 | FC Bayern München | A+ |
| LB | 4 | 호안 카프데빌라 | Villarreal CF | A0 |
| LB | 5 | 가엘 클리시 | Arsenal FC | A- |
| LB | 6 | 에리크 아비달 | FC Barcelona | A- |
| RB | 1 | 다니 아우베스 | FC Barcelona | S |
| RB | 2 | 마이콩 | FC Internazionale Milano | A+ |
| RB | 3 | 조제 보싱와 | Chelsea FC | A0 |
| RB | 4 | 세르히오 라모스 | Real Madrid CF | A0 |
| RB | 5 | 바카리 사냐 | Arsenal FC | A0 |
| RB | 6 | 알바로 아르벨로아 | Liverpool FC | A- |
| DM | 1 | 야야 투레 | FC Barcelona | A+ |
| DM | 2 | 제레미 툴랄랑 | Olympique Lyonnais | A+ |
| DM | 3 | 에스테반 캄비아소 | FC Internazionale Milano | A+ |
| DM | 4 | 마르코스 세나 | Villarreal CF | A+ |
| DM | 5 | 다니엘레 데 로시 | AS Roma | A+ |
| DM | 6 | 마르크 판 보멀 | FC Bayern München | A0 |
| DM | 7 | 마이클 캐릭 | Manchester United FC | A0 |
| DM | 8 | 하비에르 마스체라노 | Liverpool FC | A0 |
| DM | 9 | 마이클 에시엔 | Chelsea FC | A0 |
| DM | 10 | 세르히오 부스케츠 | FC Barcelona | A- |
| DM | 11 | 모하메드 시소코 | Juventus | A- |
| CM | 1 | 사비 에르난데스 | FC Barcelona | S |
| CM | 2 | 안드레스 이니에스타 | FC Barcelona | S |
| CM | 3 | 프랭크 램퍼드 | Chelsea FC | S |
| CM | 4 | 세스크 파브레가스 | Arsenal FC | A+ |
| CM | 5 | 사비 알론소 | Liverpool FC | A+ |
| CM | 6 | 라이언 긱스 | Manchester United FC | A+ |
| CM | 7 | 하비에르 사네티 | FC Internazionale Milano | A0 |
| CM | 8 | 제 호베르투 | FC Bayern München | A0 |
| CM | 9 | 루초 곤살레스 | FC Porto | A0 |
| CM | 10 | 대런 플레처 | Manchester United FC | A0 |
| CM | 11 | 미하엘 발라크 | Chelsea FC | A- |
| CM | 12 | 하울 메이렐르스 | FC Porto | A- |
| CM | 13 | 주앙 모티뉴 | Sporting Clube de Portugal | A- |
| CM | 14 | 장 2세 마쿤 | Olympique Lyonnais | A- |
| CM | 15 | 주니뉴 페르남부카누 | Olympique Lyonnais | A- |
| CM | 16 | 마테오 브리기 | AS Roma | A- |
| CM | 17 | 세이두 케이타 | FC Barcelona | A- |
| CM | 18 | 폴 스콜스 | Manchester United FC | A- |
| CAM | 1 | 스티븐 제라드 | Liverpool FC | S |
| CAM | 2 | 줄리우 바프티스타 | AS Roma | A- |
| LW | 1 | 티에리 앙리 | FC Barcelona | A+ |
| LW | 2 | 프랑크 리베리 | FC Bayern München | A+ |
| LW | 3 | 미르코 부치니치 | AS Roma | A0 |
| LW | 4 | 사미르 나스리 | Arsenal FC | A- |
| LW | 5 | 플로랑 말루다 | Chelsea FC | A- |
| LW | 6 | 파벨 네드베드 | Juventus | A- |
| LW | 7 | 시망 사브로자 | Club Atlético de Madrid | A- |
| LW | 8 | 요르고스 카라구니스 | Panathinaikos FC | A- |
| RW | 1 | 리오넬 메시 | FC Barcelona | S |
| RW | 2 | 크리스티아누 호날두 | Manchester United FC | S |
| RW | 3 | 바스티안 슈바인슈타이거 | FC Bayern München | A0 |
| RW | 4 | 디르크 카위트 | Liverpool FC | A- |
| RW | 5 | 산티 카솔라 | Villarreal CF | A- |
| RW | 6 | 아르연 로번 | Real Madrid CF | A- |
| RW | 7 | 마우로 카모라네시 | Juventus | A- |
| ST | 1 | 사뮈엘 에토 | FC Barcelona | S |
| ST | 2 | 웨인 루니 | Manchester United FC | A+ |
| ST | 3 | 카림 벤제마 | Olympique Lyonnais | A+ |
| ST | 4 | 로빈 판페르시 | Arsenal FC | A+ |
| ST | 5 | 즐라탄 이브라히모비치 | FC Internazionale Milano | A+ |
| ST | 6 | 디디에 드로그바 | Chelsea FC | A+ |
| ST | 7 | 알레산드로 델 피에로 | Juventus | A+ |
| ST | 8 | 미로슬라프 클로제 | FC Bayern München | A+ |
| ST | 9 | 프란체스코 토티 | AS Roma | A+ |
| ST | 10 | 페르난도 토레스 | Liverpool FC | A+ |
| ST | 11 | 리산드로 로페스 | FC Porto | A0 |
| ST | 12 | 디미타르 베르바토프 | Manchester United FC | A0 |
| ST | 13 | 세르히오 아궤로 | Club Atlético de Madrid | A0 |
| ST | 14 | 디에고 포를란 | Club Atlético de Madrid | A0 |
| ST | 15 | 니콜라 아넬카 | Chelsea FC | A- |
| ST | 16 | 루카 토니 | FC Bayern München | A- |
| ST | 17 | 주세페 로시 | Villarreal CF | A- |
| ST | 18 | 에마뉘엘 아데바요르 | Arsenal FC | A- |
| ST | 19 | 라울 곤살레스 | Real Madrid CF | A- |
| ST | 20 | 뤼트 판니스텔로이 | Real Madrid CF | A- |
| ST | 21 | 리에드송 | Sporting Clube de Portugal | A- |

## 11. Best XI 4-3-3 — 기존 11명 유지

| 포지션 | 선수 | 원어명 | 당시 구단 | 티어 | 포지션 순위 | 해당 UCL 출장 | 득점 |
|---|---|---|---|---|---:|---:|---:|
| GK | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC | A+ | 1 | 10 | 기록 미기입 |
| RB | 다니 아우베스 | Dani Alves | FC Barcelona | S | 1 | 10 | 기록 미기입 |
| CB | 존 테리 | John Terry | Chelsea FC | A+ | 1 | 11 | 기록 미기입 |
| CB | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | A+ | 2 | 11 | 기록 미기입 |
| LB | 애슐리 콜 | Ashley Cole | Chelsea FC | A+ | 1 | 8 | 기록 미기입 |
| DM | 야야 투레 | Yaya Touré | FC Barcelona | A+ | 1 | 10 | 기록 미기입 |
| CM | 사비 에르난데스 | Xavi Hernández | FC Barcelona | S | 1 | 12 | 2 |
| CM | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | S | 2 | 9 | 1 |
| LW | 티에리 앙리 | Thierry Henry | FC Barcelona | A+ | 1 | 10 | 5 |
| RW | 리오넬 메시 | Lionel Messi | FC Barcelona | S | 1 | 12 | 9 |
| ST | 사뮈엘 에토 | Samuel Eto'o | FC Barcelona | S | 1 | 10 | 4 |

### Best XI 주요 위치 경쟁

| 자리 | 기존 Best XI | 비교 후보 | 이번 평가 근거/정밀 검증 쟁점 |
|---|---|---|---|
| GK | 에드빈 판데르사르 | 페트르 체흐, 페페 레이나, 이케르 카시야스 | 2009 UEFA 최우수 골키퍼 판데르사르. 원본 10경기·943분, 대회 34선방(공동 2위). |
| RB | 다니 아우베스 | 마이콩, 조제 보싱와, 세르히오 라모스 | 바르셀로나의 전진·측면 지원 및 UEFA 기술보고서에서 강조한 오른쪽 풀백의 오버래핑. 원본 10경기·952분. |
| CB | 존 테리·리오 퍼디난드 | 제라르 피케, 카를레스 푸욜, 네마냐 비디치 | 테리 2009 UEFA 최우수 수비수. 퍼디난드 맨유의 주요 센터백, 단기 팀 우승 여부보다 3시즌 개인 가용성을 반영. |
| LB | 애슐리 콜 | 파트리스 에브라, 필리프 람 | 2008-09 첼시 좌측 측면의 개인 기여를 우선, 다른 정상급 풀백과 최종 직접 비교 필요. |
| DM | 야야 투레 | 제레미 툴랄랑, 에스테반 캄비아소, 마르코스 세나 | 바르셀로나 후방 중원·중앙 수비의 대체 활용성을 반영하되 시즌 실제 주 포지션 검증 필요. |
| CM 1 | 사비 에르난데스 | 프랭크 램퍼드, 세스크 파브레가스 | 2009 UEFA 최우수 미드필더 및 UEFA 공식 도움 7개. 기회 생산과 경기 조율. |
| CM 2 | 안드레스 이니에스타 | 프랭크 램퍼드, 라이언 긱스, 사비 알론소 | 바르셀로나 중원 드리블·탈압박, 첼시전 극적 결승 골과 2009 결승 전진·역습 연결. 팀 우승 자체는 평가 제외. |
| LW | 티에리 앙리 | 프랑크 리베리, 미르코 부치니치 | 원본 본선 10경기·717분·5골, 당시 바르셀로나 좌측 윙에서 유의미한 공격 생산. |
| RW | 리오넬 메시 | 크리스티아누 호날두 | 2009 UEFA 클럽 올해의 선수와 UCL 득점왕 9골. 호날두는 2006-07/2007-08 포함 3시즌 지속성을 강하게 비교. |
| ST | 사뮈엘 에토 | 웨인 루니, 카림 벤제마, 즐라탄 이브라히모비치, 드로그바 | 결승 선제골과 전방 기동성·압박·공격 조합 기여, 대회 총 4골만으로 S를 확정한 것이 아니므로 재검토 여지. |

## 12. UEFA 공식 동시대 기록과 개인 전술근거 17명

| 선수 | 당시 구단 | 위치 | 티어 | 공식 기록과 기술 보고서 확인 |
|---|---|---|---|---|
| 에드빈 판데르사르 | Manchester United FC | GK | A+ | UEFA 2009 최우수 골키퍼·UCL 시즌 선방 34개(공동 2위) |
| 존 테리 | Chelsea FC | CB | A+ | UEFA 2009 최우수 수비수, 대회 11경기·1045분은 기존 UEFA 기술보고서에 기록 |
| 리오 퍼디난드 | Manchester United FC | CB | A+ | UEFA 기술보고서에서 비디치와의 중앙수비 조합을 맨유 수비 핵심으로 기술. 11경기·1027분(기존 데이터) |
| 애슐리 콜 | Chelsea FC | LB | A+ | 첼시 왼쪽 풀백, 본선 8경기·763분(기존 UEFA 출전 기록). 포지션별 A+ 재평가 초안 유지 |
| 다니 아우베스 | FC Barcelona | RB | S | UEFA 바르셀로나 기술보고서가 4-3-3 우측 풀백의 공격 지원 역할을 기술. 본선 10경기·952분(기존 데이터) |
| 야야 투레 | FC Barcelona | DM | A+ | UEFA 결승에서 중앙수비도 소화했으므로 기존 DM 분류와 시즌 실제 최빈 포지션 구별 필요. 10경기·849분 |
| 사비 에르난데스 | FC Barcelona | CM | S | UEFA 2009 최우수 미드필더. UEFA 현행 시즌 통계 7도움(1위), FBref 소급 통계 6도움으로 집계원 차이 |
| 안드레스 이니에스타 | FC Barcelona | CM | S | UEFA 결승 보고서에서 2선 중앙 전개·에토 득점의 전환 패스와 창의성 언급. 본선 9경기·815분(기존 데이터) |
| 프랭크 램퍼드 | Chelsea FC | CM | S | UEFA 시즌 공식 도움 5개(공동 3위). 2009 수상은 Xavi였으며 Lampard는 2008 UEFA 수상자로 구별 |
| 세스크 파브레가스 | Arsenal FC | CM | A+ | UEFA 시즌 공식 도움 5개(공동 3위). 4-3-3/4-2-3-1 중원 플레이메이커 전술 수행 |
| 스티븐 제라드 | Liverpool FC | CAM | S | UEFA 2008-09 본선 7득점(공동 2위). 리버풀의 4-2-3-1 공격형 중앙 미드필더 |
| 티에리 앙리 | FC Barcelona | LW | A+ | UEFA 기술보고서 4-3-3 왼쪽 윙 기용. 본선 10경기·717분·5골(기존 데이터) |
| 프랑크 리베리 | FC Bayern München | LW | A+ | UEFA 시즌 공식 도움 6개(2위), 챔피언스리그에서 측면 돌파·크로스 핵심 |
| 리오넬 메시 | FC Barcelona | RW | S | UEFA 클럽 올해의 선수·공격수상, UCL 9골(최다)·5도움 |
| 사뮈엘 에토 | FC Barcelona | ST | S | UEFA 바르셀로나 기술보고서에서 주 전형 최전방 ST. 결승 선제골; 10경기·810분·4골(기존 데이터) |
| 미로슬라프 클로제 | FC Bayern München | ST | A+ | UEFA 본선 7득점(공동 2위), 8경기·680분(기존 데이터) |
| 리산드로 로페스 | FC Porto | ST | A0 | UEFA 본선 6득점, 원래 UCL 후보 데이터의 공격수 구분 유지 |

## 13. 전체 292명의 개별 평가 문구 및 확인 범위

원본 `tierRationale`/`threeSeasonAssessment` 문구를 중심으로 당시 UCL 개인 기여의 잠정 평가를 수록한다. 해당 시즌의 출장·출전시간은 기술 보고서 기반으로 등록돼 있으나 전원의 2006-07/2007-08/2008-09 실제 경기당 활약과 시즌 주 포지션을 독립 검증한 것은 아니다.

- **GK 1위 에드빈 판데르사르 (Edwin van der Sar) | A+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 10경기·943분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 943분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 2009 최우수 골키퍼·UCL 시즌 선방 34개(공동 2위). https://www.uefa.com/uefasupercup/news/0250-0c50f2408efc-250d73ed16cf-1000--messi-recognised-as-europe-s-finest/ / https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/
- **GK 2위 페트르 체흐 (Petr Čech) | A+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 12경기·1139분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 1139분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 3위 페페 레이나 (Pepe Reina) | A+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 9경기·852분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 852분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 4위 이케르 카시야스 (Iker Casillas) | A+ | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 7경기·665분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 665분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 5위 줄리우 세자르 (Júlio César) | A+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 7경기·663분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 663분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 6위 잔루이지 부폰 (Gianluigi Buffon) | A+ | Juventus**: 2008-09 UEFA 챔피언스리그 3경기·284분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 284분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 7위 빅토르 발데스 (Víctor Valdés) | A0 | FC Barcelona**: 2008-09 UEFA 챔피언스리그 12경기·1141분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 1141분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 8위 디에고 로페스 (Diego López) | A0 | Villarreal CF**: 2008-09 UEFA 챔피언스리그 9경기·851분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 851분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 9위 위고 요리스 (Hugo Lloris) | A0 | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 8경기·757분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 757분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 10위 마누엘 알무니아 (Manuel Almunia) | B+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 10경기·905분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 905분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 11위 에우통 (Helton) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 9경기·853분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 853분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 12위 도니 (Doni) | B+ | AS Roma**: 2008-09 UEFA 챔피언스리그 8경기·786분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 786분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 13위 후이 파트리시우 (Rui Patrício) | B+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 6경기·540분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 540분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 14위 알렉산더 만닝거 (Alexander Manninger) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 5경기·477분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 477분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 15위 미하엘 렌징 (Michael Rensing) | B0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 7경기·662분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 662분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 16위 마리오 갈리노비치 (Mario Galinović) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 7경기·661분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 661분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 17위 레오 프랑코 (Leo Franco) | B0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 6경기·572분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 572분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 18위 한스외르크 부트 (Hans-Jörg Butt) | B0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 3경기·281분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 281분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 19위 우카시 파비안스키 (Łukasz Fabiański) | B- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 3경기·259분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 259분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 20위 그레고리 쿠페 (Grégory Coupet) | B- | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 2경기·189분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 189분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 21위 토마시 쿠슈차크 (Tomasz Kuszczak) | B- | Manchester United FC**: 2008-09 UEFA 챔피언스리그 2경기·188분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 188분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 22위 디에구 카발리에리 (Diego Cavalieri) | B- | Liverpool FC**: 2008-09 UEFA 챔피언스리그 1경기·95분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 95분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 23위 프란체스코 톨도 (Francesco Toldo) | B- | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 1경기·94분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 94분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 24위 예지 두데크 (Jerzy Dudek) | B- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 1경기·94분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 94분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 25위 세바스티안 비에라 (Sebastián Viera) | B- | Villarreal CF**: 2008-09 UEFA 챔피언스리그 1경기·94분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 94분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 26위 티아구 (Tiago) | C+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 3경기·210분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 210분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 27위 알렉산드로스 초르바스 (Alexandros Tzorvas) | C+ | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 1경기·100분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 100분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **GK 28위 알베르트 조르케라 (Albert Jorquera) | C0 | FC Barcelona**: 2008-09 UEFA 챔피언스리그 1경기·96분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 96분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 1위 존 테리 (John Terry) | A+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 11경기·1045분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 11경기, 1045분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 2009 최우수 수비수, 대회 11경기·1045분은 기존 UEFA 기술보고서에 기록. https://www.uefa.com/uefasupercup/news/0250-0c50f2408efc-250d73ed16cf-1000--messi-recognised-as-europe-s-finest/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **CB 2위 리오 퍼디난드 (Rio Ferdinand) | A+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 11경기·1027분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 11경기, 1027분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 기술보고서에서 비디치와의 중앙수비 조합을 맨유 수비 핵심으로 기술. 11경기·1027분(기존 데이터). https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **CB 3위 제라르 피케 (Gerard Piqué) | A+ | FC Barcelona**: 2008-09 UEFA 챔피언스리그 12경기·1144분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 1144분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 4위 제이미 캐러거 (Jamie Carragher) | A+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 10경기·936분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 936분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 5위 네마냐 비디치 (Nemanja Vidić) | A+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 9경기·847분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 847분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 6위 카를레스 푸욜 (Carles Puyol) | A+ | FC Barcelona**: 2008-09 UEFA 챔피언스리그 9경기·794분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 794분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 7위 루시우 (Lúcio) | A+ | FC Bayern München**: 2008-09 UEFA 챔피언스리그 8경기·672분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 672분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 8위 조르조 키엘리니 (Giorgio Chiellini) | A+ | Juventus**: 2008-09 UEFA 챔피언스리그 7경기·644분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 644분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 9위 브루누 알베스 (Bruno Alves) | A0 | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·949분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 949분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 10위 마르틴 데미첼리스 (Martín Demichelis) | A0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 8경기·756분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 756분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 11위 크리스 (Cris) | A0 | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 6경기·566분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 566분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 12위 콜로 투레 (Kolo Touré) | A- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 9경기·881분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 881분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 13위 알렉스 (Alex) | A- | Chelsea FC**: 2008-09 UEFA 챔피언스리그 9경기·853분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 853분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 14위 라파엘 마르케스 (Rafael Márquez) | A- | FC Barcelona**: 2008-09 UEFA 챔피언스리그 9경기·772분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 772분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 15위 디에고 고딘 (Diego Godín) | A- | Villarreal CF**: 2008-09 UEFA 챔피언스리그 7경기·664분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 664분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 16위 윌리암 갈라스 (William Gallas) | A- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 7경기·637분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 637분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 17위 이반 코르도바 (Iván Córdoba) | A- | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 7경기·615분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 615분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 18위 필리프 멕세스 (Philippe Mexès) | A- | AS Roma**: 2008-09 UEFA 챔피언스리그 6경기·565분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 565분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 19위 페페 (Pepe) | A- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 5경기·474분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 474분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 20위 니콜라 레그로탈리에 (Nicola Legrottaglie) | A- | Juventus**: 2008-09 UEFA 챔피언스리그 6경기·442분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 442분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 21위 브라니슬라브 이바노비치 (Branislav Ivanović) | A- | Chelsea FC**: 2008-09 UEFA 챔피언스리그 4경기·379분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 379분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 22위 호날두 (Rolando) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·949분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 949분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 23위 곤살로 로드리게스 (Gonzalo Rodríguez) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·756분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 756분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 24위 안데르손 폴가 (Anderson Polga) | B+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 8경기·751분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 751분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 25위 장알랭 붐송 (Jean-Alain Boumsong) | B+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 8경기·670분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 670분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 26위 파비오 칸나바로 (Fabio Cannavaro) | B+ | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 7경기·633분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 633분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 27위 마르틴 슈크르텔 (Martin Škrtel) | B+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 6경기·565분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 565분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 28위 조니 에번스 (Jonny Evans) | B+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 7경기·550분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 550분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 29위 올로프 멜베리 (Olof Mellberg) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 6경기·522분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 522분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 30위 요한 주루 (Johan Djourou) | B+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 6경기·441분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 441분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 31위 크리스티안 파누치 (Christian Panucci) | B+ | AS Roma**: 2008-09 UEFA 챔피언스리그 5경기·422분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 422분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 32위 다니엘 판 바위턴 (Daniel van Buyten) | B+ | FC Bayern München**: 2008-09 UEFA 챔피언스리그 5경기·394분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 394분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 33위 다니엘 아게르 (Daniel Agger) | B+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 4경기·382분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 382분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 34위 욘 헤이팅아 (John Heitinga) | B+ | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 4경기·338분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 338분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 35위 주앙 (Juan) | B+ | AS Roma**: 2008-09 UEFA 챔피언스리그 4경기·307분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 307분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 36위 호세 사리에기 (José Sarriegi) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 7경기·667분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 667분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 37위 루이스 아마란토 페레아 (Luis Amaranto Perea) | B0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 6경기·569분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 569분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 38위 파브리시오 푸엔테스 (Fabricio Fuentes) | B0 | Villarreal CF**: 2008-09 UEFA 챔피언스리그 5경기·470분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 470분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 39위 토넬 (Tonel) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 5경기·468분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 468분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 40위 야니스 구마스 (Giannis Goumas) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 6경기·440분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 440분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 41위 존 멘사 (John Mensah) | B0 | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 4경기·377분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 377분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 42위 마르코 마테라치 (Marco Materazzi) | B0 | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 5경기·352분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 352분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 43위 파블로 이바녜스 (Pablo Ibáñez) | B0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 4경기·328분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 328분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 44위 페드루 이마누엘 (Pedro Emanuel) | B0 | FC Porto**: 2008-09 UEFA 챔피언스리그 4경기·285분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 285분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 45위 니콜라스 부르디소 (Nicolás Burdisso) | B0 | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 4경기·241분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 241분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 46위 크리스토프 메첼더 (Christoph Metzelder) | B- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 1경기·47분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 47분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CB 47위 다니엘 카리수 (Daniel Carriço) | C+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 2경기·189분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 189분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 1위 애슐리 콜 (Ashley Cole) | A+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 8경기·763분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 763분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** 첼시 왼쪽 풀백, 본선 8경기·763분(기존 UEFA 출전 기록). 포지션별 A+ 재평가 초안 유지. https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **LB 2위 파트리스 에브라 (Patrice Evra) | A+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 11경기·940분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 11경기, 940분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 3위 필리프 람 (Philipp Lahm) | A+ | FC Bayern München**: 2008-09 UEFA 챔피언스리그 8경기·705분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 705분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 4위 호안 카프데빌라 (Joan Capdevila) | A0 | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·743분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 743분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 5위 가엘 클리시 (Gaël Clichy) | A- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 8경기·787분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 787분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 6위 에리크 아비달 (Éric Abidal) | A- | FC Barcelona**: 2008-09 UEFA 챔피언스리그 3경기·256분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 256분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 7위 크리스티안 몰리나로 (Cristian Molinaro) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 7경기·627분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 627분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 8위 파비우 아우렐리우 (Fábio Aurélio) | B+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 7경기·597분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 597분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 9위 파비오 그로소 (Fabio Grosso) | B+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 6경기·567분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 567분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 10위 욘 아르네 리세 (John Arne Riise) | B+ | AS Roma**: 2008-09 UEFA 챔피언스리그 8경기·556분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 556분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 11위 시우비뉴 (Sylvinho) | B+ | FC Barcelona**: 2008-09 UEFA 챔피언스리그 7경기·481분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 481분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 12위 알리 시소코 (Aly Cissokho) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 4경기·383분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 383분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 13위 막스웰 (Maxwell) | B+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 4경기·254분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 254분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 14위 다비데 산톤 (Davide Santon) | B+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 2경기·186분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 186분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 15위 가브리엘 에인세 (Gabriel Heinze) | B0 | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 7경기·653분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 653분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 16위 안토니오 로페스 (Antonio López) | B0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 6경기·572분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 572분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 17위 미카엘 닐손 (Mikael Nilsson) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 6경기·550분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 550분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 18위 니코스 스피로풀로스 (Nikos Spiropoulos) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 6경기·523분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 523분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 19위 마르쿠 카네이라 (Marco Caneira) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 6경기·474분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 474분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 20위 마르셀루 (Marcelo) | B0 | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 5경기·378분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 378분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 21위 안드레아 도세나 (Andrea Dossena) | B0 | Liverpool FC**: 2008-09 UEFA 챔피언스리그 6경기·361분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 361분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 22위 막스 토네토 (Max Tonetto) | B0 | AS Roma**: 2008-09 UEFA 챔피언스리그 4경기·319분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 319분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 23위 웨인 브리지 (Wayne Bridge) | B0 | Chelsea FC**: 2008-09 UEFA 챔피언스리그 4경기·287분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 287분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 24위 파올로 데 첼리에 (Paolo De Ceglie) | B0 | Juventus**: 2008-09 UEFA 챔피언스리그 4경기·229분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 229분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 25위 레안드로 그리미 (Leandro Grimi) | B- | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 4경기·302분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 302분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 26위 마리아노 페르니아 (Mariano Pernía) | B- | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 3경기·286분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 286분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 27위 키런 깁스 (Kieran Gibbs) | B- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 4경기·269분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 269분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LB 28위 리누 (Lino) | B- | FC Porto**: 2008-09 UEFA 챔피언스리그 3경기·115분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 115분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 1위 다니 아우베스 (Dani Alves) | S | FC Barcelona**: 2008-09 UEFA 챔피언스리그 10경기·952분. 풀백 오버래핑과 우측 전개에 큰 영향. UEFA 10경기 952분 출전. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 952분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 바르셀로나 기술보고서가 4-3-3 우측 풀백의 공격 지원 역할을 기술. 본선 10경기·952분(기존 데이터). https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **RB 2위 마이콩 (Maicon) | A+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 8경기·757분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 757분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 3위 조제 보싱와 (José Bosingwa) | A0 | Chelsea FC**: 2008-09 UEFA 챔피언스리그 10경기·920분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 920분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 4위 세르히오 라모스 (Sergio Ramos) | A0 | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 8경기·760분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 760분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 5위 바카리 사냐 (Bacary Sagna) | A0 | Arsenal FC**: 2008-09 UEFA 챔피언스리그 7경기·676분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 676분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 6위 알바로 아르벨로아 (Álvaro Arbeloa) | A- | Liverpool FC**: 2008-09 UEFA 챔피언스리그 10경기·914분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 914분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 7위 존 오셰이 (John O'Shea) | B+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 12경기·1130분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 1130분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 8위 루카스 빈트라 (Loukas Vyntra) | B+ | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 8경기·761분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 761분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 9위 크리스티안 서푸나루 (Cristian Săpunaru) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 8경기·693분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 693분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 10위 앙헬 로페스 (Ángel López) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·692분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 692분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 11위 즈데네크 그리게라 (Zdeněk Grygera) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 6경기·571분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 571분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 12위 토마시 우이팔루시 (Tomáš Ujfaluši) | B+ | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 5경기·475분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 475분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 13위 앙토니 레베예르 (Anthony Réveillère) | B+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 4경기·377분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 377분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 14위 마시모 오도 (Massimo Oddo) | B0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 7경기·635분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 635분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 15위 아벨 (Abel) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 7경기·536분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 536분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 16위 크리스티안 렐 (Christian Lell) | B0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 6경기·450분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 450분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 17위 시시뉴 (Cicinho) | B0 | AS Roma**: 2008-09 UEFA 챔피언스리그 5경기·388분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 388분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 18위 요르고스 세이타리디스 (Georgios Seitaridis) | B0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 4경기·380분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 380분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 19위 하비 벤타 (Javi Venta) | B0 | Villarreal CF**: 2008-09 UEFA 챔피언스리그 3경기·253분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 253분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 20위 호르헤 푸실레 (Jorge Fucile) | B0 | FC Porto**: 2008-09 UEFA 챔피언스리그 2경기·189분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 189분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 21위 마르코 카세티 (Marco Cassetti) | B0 | AS Roma**: 2008-09 UEFA 챔피언스리그 2경기·187분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 187분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 22위 하파엘 다 실바 (Rafael da Silva) | B0 | Manchester United FC**: 2008-09 UEFA 챔피언스리그 4경기·180분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 180분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 23위 브라이스 문 (Bryce Moon) | B- | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 3경기·167분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 167분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 24위 프랑수아 클레르 (François Clerc) | B- | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 1경기·46분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 46분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 25위 파울루 페헤이라 (Paulo Ferreira) | B- | Chelsea FC**: 2008-09 UEFA 챔피언스리그 2경기·9분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 9분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 26위 미첼 살가도 (Míchel Salgado) | C+ | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 1경기·94분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 94분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RB 27위 페드루 시우바 (Pedro Silva) | C0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 1경기·92분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 92분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 1위 야야 투레 (Yaya Touré) | A+ | FC Barcelona**: 2008-09 UEFA 챔피언스리그 10경기·849분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 849분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 결승에서 중앙수비도 소화했으므로 기존 DM 분류와 시즌 실제 최빈 포지션 구별 필요. 10경기·849분. https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **DM 2위 제레미 툴랄랑 (Jérémy Toulalan) | A+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 8경기·757분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 757분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 3위 에스테반 캄비아소 (Esteban Cambiasso) | A+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 8경기·747분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 747분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 4위 마르코스 세나 (Marcos Senna) | A+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·661분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 661분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 5위 다니엘레 데 로시 (Daniele De Rossi) | A+ | AS Roma**: 2008-09 UEFA 챔피언스리그 7경기·659분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 659분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 6위 마르크 판 보멀 (Mark van Bommel) | A0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 9경기·849분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 849분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 7위 마이클 캐릭 (Michael Carrick) | A0 | Manchester United FC**: 2008-09 UEFA 챔피언스리그 9경기·839분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 839분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 8위 하비에르 마스체라노 (Javier Mascherano) | A0 | Liverpool FC**: 2008-09 UEFA 챔피언스리그 8경기·714분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 714분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 9위 마이클 에시엔 (Michael Essien) | A0 | Chelsea FC**: 2008-09 UEFA 챔피언스리그 5경기·453분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 453분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 10위 세르히오 부스케츠 (Sergio Busquets) | A- | FC Barcelona**: 2008-09 UEFA 챔피언스리그 8경기·650분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 650분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 11위 모하메드 시소코 (Mohamed Sissoko) | A- | Juventus**: 2008-09 UEFA 챔피언스리그 6경기·564분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 564분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 12위 데니우송 (Denílson) | B+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 10경기·898분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 898분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 13위 페르난두 (Fernando) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·856분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 856분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 14위 존 오비 미켈 (John Obi Mikel) | B+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 9경기·843분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 843분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 15위 알렉상드르 송 (Alexandre Song) | B+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 10경기·761분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 761분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 16위 지우베르투 시우바 (Gilberto Silva) | B+ | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 8경기·747분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 747분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 17위 파울루 아순상 (Paulo Assunção) | B+ | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 6경기·491분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 491분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 18위 라사나 디아라 (Lassana Diarra) | B+ | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 2경기·188분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 188분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 19위 안데르송 (Anderson) | B0 | Manchester United FC**: 2008-09 UEFA 챔피언스리그 9경기·592분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 592분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 20위 파비우 호셈바크 (Fábio Rochemback) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 6경기·497분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 497분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 21위 페르난도 가고 (Fernando Gago) | B0 | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 6경기·493분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 493분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 22위 루카스 레이바 (Lucas Leiva) | B0 | Liverpool FC**: 2008-09 UEFA 챔피언스리그 10경기·464분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 464분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 23위 브루노 소리아노 (Bruno Soriano) | B0 | Villarreal CF**: 2008-09 UEFA 챔피언스리그 7경기·361분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 361분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 24위 안드레아스 오틀 (Andreas Ottl) | B- | FC Bayern München**: 2008-09 UEFA 챔피언스리그 6경기·282분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 282분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 25위 알렉산드로스 치올리스 (Alexandros Tziolis) | B- | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 4경기·212분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 212분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 26위 에베르 바네가 (Éver Banega) | B- | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 3경기·133분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 133분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 27위 크리스티안 폴센 (Christian Poulsen) | B- | Juventus**: 2008-09 UEFA 챔피언스리그 1경기·93분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 93분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **DM 28위 아드리앙 실바 (Adrien Silva) | C+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 2경기·122분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 122분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 1위 사비 에르난데스 (Xavi Hernández) | S | FC Barcelona**: 2008-09 UEFA 챔피언스리그 12경기·1026분·2골. UEFA 기술보고서가 볼 순환과 리듬 통제의 중심으로 명시. 결승전 메시 득점 크로스 포함. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 1026분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 2009 최우수 미드필더. UEFA 현행 시즌 통계 7도움(1위), FBref 소급 통계 6도움으로 집계원 차이. https://www.uefa.com/uefasupercup/news/0250-0c50f2408efc-250d73ed16cf-1000--messi-recognised-as-europe-s-finest/ / https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://fbref.com/en/comps/8/2008-2009/2008-2009-Champions-League-Stats
- **CM 2위 안드레스 이니에스타 (Andrés Iniesta) | S | FC Barcelona**: 2008-09 UEFA 챔피언스리그 9경기·815분·1골. 중앙에서 압박 탈출·전진 연결을 주도했고 첼시와의 4강에서 결정적인 득점 기록. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 815분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 결승 보고서에서 2선 중앙 전개·에토 득점의 전환 패스와 창의성 언급. 본선 9경기·815분(기존 데이터). https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **CM 3위 프랭크 램퍼드 (Frank Lampard) | S | Chelsea FC**: 2008-09 UEFA 챔피언스리그 11경기·1011분·3골. UEFA 11경기 1,011분 3골. 중원 득점력·박스 침투·전진 패스. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 11경기, 1011분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 시즌 공식 도움 5개(공동 3위). 2009 수상은 Xavi였으며 Lampard는 2008 UEFA 수상자로 구별. https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/uefasupercup/news/0250-0c50f2408efc-250d73ed16cf-1000--messi-recognised-as-europe-s-finest/
- **CM 4위 세스크 파브레가스 (Cesc Fàbregas) | A+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 9경기·847분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 847분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 시즌 공식 도움 5개(공동 3위). 4-3-3/4-2-3-1 중원 플레이메이커 전술 수행. https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **CM 5위 사비 알론소 (Xabi Alonso) | A+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 8경기·706분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 706분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 6위 라이언 긱스 (Ryan Giggs) | A+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 11경기·684분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 11경기, 684분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 7위 하비에르 사네티 (Javier Zanetti) | A0 | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 8경기·757분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 757분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 8위 제 호베르투 (Zé Roberto) | A0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 9경기·751분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 751분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 9위 루초 곤살레스 (Lucho González) | A0 | FC Porto**: 2008-09 UEFA 챔피언스리그 9경기·728분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 728분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 10위 대런 플레처 (Darren Fletcher) | A0 | Manchester United FC**: 2008-09 UEFA 챔피언스리그 8경기·721분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 721분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 11위 미하엘 발라크 (Michael Ballack) | A- | Chelsea FC**: 2008-09 UEFA 챔피언스리그 10경기·878분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 878분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 12위 하울 메이렐르스 (Raul Meireles) | A- | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·877분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 877분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 13위 주앙 모티뉴 (João Moutinho) | A- | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 8경기·751분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 751분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 14위 장 2세 마쿤 (Jean II Makoun) | A- | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 8경기·723분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 723분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 15위 주니뉴 페르남부카누 (Juninho Pernambucano) | A- | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 7경기·630분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 630분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 16위 마테오 브리기 (Matteo Brighi) | A- | AS Roma**: 2008-09 UEFA 챔피언스리그 7경기·566분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 566분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 17위 세이두 케이타 (Seydou Keita) | A- | FC Barcelona**: 2008-09 UEFA 챔피언스리그 10경기·562분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 562분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 18위 폴 스콜스 (Paul Scholes) | A- | Manchester United FC**: 2008-09 UEFA 챔피언스리그 6경기·239분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 239분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 19위 세바스티안 에구렌 (Sebastián Eguren) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 7경기·601분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 601분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 20위 라울 가르시아 (Raúl García) | B+ | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 8경기·562분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 562분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 21위 미겔 벨로주 (Miguel Veloso) | B+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 7경기·470분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 470분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 22위 설리 문타리 (Sulley Muntari) | B+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 7경기·463분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 463분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 23위 마니시 (Maniche) | B+ | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 8경기·460분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 460분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 24위 아리엘 이바가사 (Ariel Ibagaza) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·455분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 455분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 25위 구티 (Guti) | B+ | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 6경기·363분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 363분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 26위 데쿠 (Deco) | B+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 4경기·331분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 331분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 27위 클라우디오 마르키시오 (Claudio Marchisio) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 5경기·309분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 309분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 28위 다비드 피사로 (David Pizarro) | B+ | AS Roma**: 2008-09 UEFA 챔피언스리그 5경기·264분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 264분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 29위 킴 셸스트룀 (Kim Källström) | B+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 6경기·203분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 203분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 30위 시망 마테 주니오르 (Simão Mate Junior) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 7경기·666분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 666분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 31위 아부 디아비 (Abou Diaby) | B0 | Arsenal FC**: 2008-09 UEFA 챔피언스리그 7경기·470분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 470분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 32위 브루누 페레이라냐 (Bruno Pereirinha) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 8경기·268분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 268분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 33위 팀 보로프스키 (Tim Borowski) | B0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 7경기·264분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 264분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 34위 토마스 코스타 (Tomás Costa) | B0 | FC Porto**: 2008-09 UEFA 챔피언스리그 9경기·262분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 262분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 35위 티아구 (Tiago) | B0 | Juventus**: 2008-09 UEFA 챔피언스리그 3경기·253분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 253분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 36위 파트리크 비에이라 (Patrick Vieira) | B0 | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 3경기·145분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 145분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 37위 루벤 데 라 레드 (Rubén de la Red) | B0 | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 1경기·94분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 1경기, 94분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CM 38위 클레이통 (Cleyton) | B- | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 4경기·279분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 279분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 1위 스티븐 제라드 (Steven Gerrard) | S | Liverpool FC**: 2008-09 UEFA 챔피언스리그 8경기·580분·7골. UEFA 8경기 580분 7골. 중원에서 공격 방향 전환과 세트피스·박스 침투에 큰 기여. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 580분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 2008-09 본선 7득점(공동 2위). 리버풀의 4-2-3-1 공격형 중앙 미드필더. https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **CAM 2위 줄리우 바프티스타 (Júlio Baptista) | A- | AS Roma**: 2008-09 UEFA 챔피언스리그 7경기·537분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 537분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 3위 시모네 페로타 (Simone Perrotta) | B+ | AS Roma**: 2008-09 UEFA 챔피언스리그 6경기·476분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 476분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 4위 마라트 이즈마일로프 (Marat Izmailov) | B+ | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 6경기·464분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 464분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 5위 데얀 스탄코비치 (Dejan Stanković) | B+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 5경기·378분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 378분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 6위 베슬레이 스네이더르 (Wesley Sneijder) | B+ | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 4경기·353분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 353분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 7위 레안드로 로마뇰리 (Leandro Romagnoli) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 5경기·359분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 359분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 8위 라파엘 판데르파르트 (Rafael van der Vaart) | B0 | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 7경기·339분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 339분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **CAM 9위 루이스 피구 (Luís Figo) | B- | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 3경기·127분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 127분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 1위 티에리 앙리 (Thierry Henry) | A+ | FC Barcelona**: 2008-09 UEFA 챔피언스리그 10경기·717분·5골. UEFA 10경기 717분 5골, 왼쪽에서의 침투와 공격 연결. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 717분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 기술보고서 4-3-3 왼쪽 윙 기용. 본선 10경기·717분·5골(기존 데이터). https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **LW 2위 프랑크 리베리 (Franck Ribéry) | A+ | FC Bayern München**: 2008-09 UEFA 챔피언스리그 8경기·743분·4골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 743분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 시즌 공식 도움 6개(2위), 챔피언스리그에서 측면 돌파·크로스 핵심. https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **LW 3위 미르코 부치니치 (Mirko Vučinić) | A0 | AS Roma**: 2008-09 UEFA 챔피언스리그 8경기·518분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 518분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 4위 사미르 나스리 (Samir Nasri) | A- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 9경기·857분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 857분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 5위 플로랑 말루다 (Florent Malouda) | A- | Chelsea FC**: 2008-09 UEFA 챔피언스리그 10경기·751분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 751분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 6위 파벨 네드베드 (Pavel Nedvěd) | A- | Juventus**: 2008-09 UEFA 챔피언스리그 8경기·676분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 676분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 7위 시망 사브로자 (Simão Sabrosa) | A- | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 6경기·566분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 566분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 8위 요르고스 카라구니스 (Giorgos Karagounis) | A- | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 7경기·524분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 524분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 9위 크리스티안 로드리게스 (Cristian Rodríguez) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·824분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 824분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 10위 알베르트 리에라 (Albert Riera) | B+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 9경기·577분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 577분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 11위 에데르송 (Ederson) | B+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 8경기·500분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 500분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 12위 로베르 피레스 (Robert Pirès) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·461분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 461분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 13위 박지성 (Park Ji-sung) | B+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 9경기·443분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 443분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 14위 조 콜 (Joe Cole) | B+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 4경기·281분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 281분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 15위 세바스티안 조빈코 (Sebastian Giovinco) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 4경기·235분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 235분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 16위 나니 (Nani) | B0 | Manchester United FC**: 2008-09 UEFA 챔피언스리그 7경기·533분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 533분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 17위 라이언 바벌 (Ryan Babel) | B0 | Liverpool FC**: 2008-09 UEFA 챔피언스리그 9경기·421분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 421분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 18위 마리아노 곤살레스 (Mariano González) | B0 | FC Porto**: 2008-09 UEFA 챔피언스리그 7경기·251분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 251분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 19위 제레미 메네즈 (Jérémy Ménez) | B0 | AS Roma**: 2008-09 UEFA 챔피언스리그 3경기·146분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 146분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 20위 안드레아스 이반시츠 (Andreas Ivanschitz) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 4경기·132분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 132분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 21위 하미트 알튼톱 (Hamit Altıntop) | B0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 4경기·90분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 90분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 22위 알렉산드르 흘레프 (Alexander Hleb) | B- | FC Barcelona**: 2008-09 UEFA 챔피언스리그 7경기·403분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 403분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 23위 카를로스 벨라 (Carlos Vela) | B- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 8경기·286분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 286분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 24위 로이스턴 드렌테 (Royston Drenthe) | B- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 5경기·255분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 255분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 25위 루이스 가르시아 (Luis García) | B- | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 5경기·236분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 236분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **LW 26위 앙토니 무니에 (Anthony Mounier) | B- | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 4경기·101분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 101분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 1위 리오넬 메시 (Lionel Messi) | S | FC Barcelona**: 2008-09 UEFA 챔피언스리그 12경기·982분·9골. UEFA 득점왕(9골). 전방 오른쪽에서 안쪽으로 침투하며 공격의 결정적 차이를 창출. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 982분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 클럽 올해의 선수·공격수상, UCL 9골(최다)·5도움. https://www.uefa.com/uefasupercup/news/0250-0c50f2408efc-250d73ed16cf-1000--messi-recognised-as-europe-s-finest/ / https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/uefachampionsleague/news/01d9-0e723fa0bf50-a11f10e8b995-1000--messi-sweeps-up-goalscoring-honours/
- **RW 2위 크리스티아누 호날두 (Cristiano Ronaldo) | S | Manchester United FC**: 2008-09 UEFA 챔피언스리그 12경기·1055분·4골. UEFA 12경기 1,055분 4골. 강팀 상대 원거리 슛과 측면 파괴력. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 1055분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 3위 바스티안 슈바인슈타이거 (Bastian Schweinsteiger) | A0 | FC Bayern München**: 2008-09 UEFA 챔피언스리그 9경기·750분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 750분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 4위 디르크 카위트 (Dirk Kuyt) | A- | Liverpool FC**: 2008-09 UEFA 챔피언스리그 9경기·781분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 781분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 5위 산티 카솔라 (Santi Cazorla) | A- | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·642분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 642분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 6위 아르연 로번 (Arjen Robben) | A- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 6경기·419분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 419분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 7위 마우로 카모라네시 (Mauro Camoranesi) | A- | Juventus**: 2008-09 UEFA 챔피언스리그 4경기·217분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 217분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 8위 헐크 (Hulk) | B+ | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·702분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 702분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 9위 시어 월컷 (Theo Walcott) | B+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 8경기·593분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 593분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 10위 막시 로드리게스 (Maxi Rodríguez) | B+ | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 6경기·475분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 475분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 11위 살로몽 칼루 (Salomon Kalou) | B+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 8경기·432분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 432분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 12위 요시 베나윤 (Yossi Benayoun) | B+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 7경기·387분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 387분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 13위 마르코 마르키오니 (Marco Marchionni) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 5경기·336분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 336분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 14위 카니 (Cani) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 7경기·322분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 322분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 15위 호드리구 타데이 (Rodrigo Taddei) | B0 | AS Roma**: 2008-09 UEFA 챔피언스리그 7경기·559분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 559분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 16위 에마뉘엘 에부에 (Emmanuel Eboué) | B0 | Arsenal FC**: 2008-09 UEFA 챔피언스리그 9경기·547분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 547분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 17위 가브리엘 (Gabriel) | B0 | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 5경기·383분. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 383분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 18위 압둘 카데르 케이타 (Abdul Kader Keïta) | B0 | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 5경기·318분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 318분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 19위 시드네 고부 (Sidney Govou) | B0 | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 4경기·315분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 315분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 20위 라자로스 흐리스토둘로풀로스 (Lazaros Christodoulopoulos) | B- | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 3경기·112분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 112분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 21위 타리크 세크티우이 (Tarik Sektioui) | B- | FC Porto**: 2008-09 UEFA 챔피언스리그 3경기·84분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 3경기, 84분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **RW 22위 페드로 로드리게스 (Pedro Rodríguez) | C+ | FC Barcelona**: 2008-09 UEFA 챔피언스리그 4경기·134분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 134분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 1위 사뮈엘 에토 (Samuel Eto'o) | S | FC Barcelona**: 2008-09 UEFA 챔피언스리그 10경기·810분·4골. 결승전 선제골을 포함해 UEFA 대회 4득점. 최전방 침투와 전방 압박. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. S티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 810분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 바르셀로나 기술보고서에서 주 전형 최전방 ST. 결승 선제골; 10경기·810분·4골(기존 데이터). https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **ST 2위 웨인 루니 (Wayne Rooney) | A+ | Manchester United FC**: 2008-09 UEFA 챔피언스리그 13경기·999분·4골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 13경기, 999분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 3위 카림 벤제마 (Karim Benzema) | A+ | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 8경기·731분·5골. UEFA 8경기 731분 5골, 리옹 최전방의 핵심 득점원. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 731분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 4위 로빈 판페르시 (Robin van Persie) | A+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 8경기·716분·5골. UEFA 8경기 716분 5골, 아스널의 전방 기술과 마무리. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 716분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 5위 즐라탄 이브라히모비치 (Zlatan Ibrahimović) | A+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 8경기·710분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 710분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 6위 디디에 드로그바 (Didier Drogba) | A+ | Chelsea FC**: 2008-09 UEFA 챔피언스리그 10경기·702분·5골. UEFA 10경기 702분 5골, 전방의 제공권·연계와 득점. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 702분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 7위 알레산드로 델 피에로 (Alessandro Del Piero) | A+ | Juventus**: 2008-09 UEFA 챔피언스리그 8경기·688분·5골. UEFA 8경기 688분 5골, 세트피스와 전방 마무리 역할. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 688분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 8위 미로슬라프 클로제 (Miroslav Klose) | A+ | FC Bayern München**: 2008-09 UEFA 챔피언스리그 8경기·680분·7골. UEFA 8경기 680분 7골로 대회 공동 득점 2위. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 680분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. **이번 공식 근거:** UEFA 본선 7득점(공동 2위), 8경기·680분(기존 데이터). https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **ST 9위 프란체스코 토티 (Francesco Totti) | A+ | AS Roma**: 2008-09 UEFA 챔피언스리그 7경기·590분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 590분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 10위 페르난도 토레스 (Fernando Torres) | A+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 7경기·576분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 576분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 11위 리산드로 로페스 (Lisandro López) | A0 | FC Porto**: 2008-09 UEFA 챔피언스리그 10경기·943분·6골. UEFA 10경기 943분 6골로 포르투 공격의 마무리 역할. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 943분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. **이번 공식 근거:** UEFA 본선 6득점, 원래 UCL 후보 데이터의 공격수 구분 유지. https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- **ST 12위 디미타르 베르바토프 (Dimitar Berbatov) | A0 | Manchester United FC**: 2008-09 UEFA 챔피언스리그 9경기·540분·4골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 540분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 13위 세르히오 아궤로 (Sergio Agüero) | A0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 8경기·509분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 509분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 14위 디에고 포를란 (Diego Forlán) | A0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 7경기·466분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 466분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 15위 니콜라 아넬카 (Nicolas Anelka) | A- | Chelsea FC**: 2008-09 UEFA 챔피언스리그 12경기·850분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 12경기, 850분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 16위 루카 토니 (Luca Toni) | A- | FC Bayern München**: 2008-09 UEFA 챔피언스리그 8경기·709분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 709분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 17위 주세페 로시 (Giuseppe Rossi) | A- | Villarreal CF**: 2008-09 UEFA 챔피언스리그 8경기·694분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 694분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 18위 에마뉘엘 아데바요르 (Emmanuel Adebayor) | A- | Arsenal FC**: 2008-09 UEFA 챔피언스리그 7경기·627분·5골. UEFA 7경기 627분 5골, 최전방 공중전과 득점. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 627분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 19위 라울 곤살레스 (Raúl González) | A- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 7경기·624분·3골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 624분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 20위 뤼트 판니스텔로이 (Ruud van Nistelrooy) | A- | Real Madrid CF**: 2008-09 UEFA 챔피언스리그 4경기·368분·3골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 368분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 21위 리에드송 (Liedson) | A- | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 4경기·359분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. A-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 359분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 22위 반겔리스 만치오스 (Vangelis Mantzios) | B+ | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 6경기·540분·4골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 540분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 23위 디미트리스 살핑기디스 (Dimitris Salpingidis) | B+ | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 8경기·458분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 458분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 24위 니클라스 벤트네르 (Nicklas Bendtner) | B+ | Arsenal FC**: 2008-09 UEFA 챔피언스리그 10경기·448분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 10경기, 448분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 25위 호세바 요렌테 (Joseba Llorente) | B+ | Villarreal CF**: 2008-09 UEFA 챔피언스리그 7경기·436분·4골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 436분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 26위 아마우리 (Amauri) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 8경기·358분·1골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 358분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 27위 마리오 발로텔리 (Mario Balotelli) | B+ | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 6경기·323분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 323분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 28위 로비 킨 (Robbie Keane) | B+ | Liverpool FC**: 2008-09 UEFA 챔피언스리그 5경기·304분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 304분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 29위 루카스 포돌스키 (Lukas Podolski) | B+ | FC Bayern München**: 2008-09 UEFA 챔피언스리그 4경기·266분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 266분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 30위 빈첸초 이아퀸타 (Vincenzo Iaquinta) | B+ | Juventus**: 2008-09 UEFA 챔피언스리그 5경기·261분·3골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 261분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 31위 데를레이 (Derlei) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 8경기·609분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 8경기, 609분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 32위 플로랑 시나마퐁골 (Florent Sinama-Pongolle) | B0 | Club Atlético de Madrid**: 2008-09 UEFA 챔피언스리그 7경기·446분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 446분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 33위 아드리아누 (Adriano) | B0 | FC Internazionale Milano**: 2008-09 UEFA 챔피언스리그 7경기·428분·2골. 당시 팀 전술 내 해당 포지션 주전급 역할과 개인 기여도를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 7경기, 428분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 34위 야니크 잘루 (Yannick Djaló) | B0 | Sporting Clube de Portugal**: 2008-09 UEFA 챔피언스리그 6경기·365분·1골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 6경기, 365분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 35위 보얀 크르키치 (Bojan Krkić) | B0 | FC Barcelona**: 2008-09 UEFA 챔피언스리그 9경기·359분·3골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B티어 임시 제안, 사용자 미승인. 본선 출장: 9경기, 359분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 36위 프레드 (Fred) | B- | Olympique Lyonnais**: 2008-09 UEFA 챔피언스리그 4경기·198분·2골. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 198분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 37위 니하트 카흐베지 (Nihat Kahveci) | B- | Villarreal CF**: 2008-09 UEFA 챔피언스리그 4경기·157분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 2007-08, 2006-07 국내리그 DRAFT 기록을 지속성 참고자료로 연결했으나 독립적인 경기력 교차 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. B-티어 임시 제안, 사용자 미승인. 본선 출장: 4경기, 157분. 해당 3시즌 독립 검증: `domestic_reference_review_pending_independent_quality_reassessment`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 38위 안테 루카비나 (Ante Rukavina) | C+ | Panathinaikos FC**: 2008-09 UEFA 챔피언스리그 5경기·34분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 5경기, 34분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.
- **ST 39위 에르네스토 파리아스 (Ernesto Farías) | C+ | FC Porto**: 2008-09 UEFA 챔피언스리그 2경기·31분. UEFA 본선 출전 빈도와 대체·교체 임무를 기준으로 평가. 직전 두 시즌 개인활약 원자료의 추가 검증 필요. 팀의 최종 성적 자체는 가산하지 않음. C+티어 임시 제안, 사용자 미승인. 본선 출장: 2경기, 31분. 해당 3시즌 독립 검증: `prior_two_season_player_evidence_pending`. 원래 후보 등록 및 UEFA 2008-09 기술보고서 외 개별 3시즌 검증 필요.

## 14. 데이터 오류·미확인·추가 검토 사항

- **4-3-3과 4-2-3-1 공동 최다**: UEFA 기술 보고서는 16강 16팀 중 6팀 4-3-3, 다른 6팀 4-2-3-1을 주로 사용한 것으로 기술. 4-3-3이 유일한 최빈 포메이션은 아님. 실제 최종 4-3-3은 Barcelona 당시 전형 및 1DM·2CM·LW/RW/ST 구성을 따름.
- **RW/ST 경기중 포지션 스위치**: 2009 결승전 Eto'o가 메시와 경기 초반 역할을 맞바꾸면서 오른쪽으로 움직인 순간이 있지만, 선수 시즌 전체 위치를 기준으로 한 원본 RW Messi·ST Eto'o 분류를 이 경기 장면 하나로 바꾸지 않음.
- **Yaya Touré 시즌 위치**: 결승전에 CB로 배치됐으나 기존 본선 주 포지션 DM 등록을 유지하고 경기별 중앙 수비·수비형 중원 기용률을 추가 검증해야 함.
- **Xavi 도움 집계 기관차**: UEFA 공식 현재 시즌 기록 7개, FBref 2008-09 소급 기록 6개. 현재 JSON은 도움 숫자를 임의 변경하지 않았으며, 기관별 정의·배포 갱신 차이인지 경기별 대조 전까지 어느 하나를 유일한 보편 기록으로 단정하지 않음.
- **82명 생년월일 미입력**: 원본 210명만 생년월일이 기입돼 있으며 나머지 82명은 보고서에서 `미검증` 처리. 잘못된 생년월일 생성 금지.
- **2006-07~2008-09 3시즌 검증 경계**: 292명 전원 UCL 2008-09 경기·분 자료는 기존 기술 보고서에 연결돼 있으나 직전 2006-07 및 2007-08 개별 경기·분·실제 주 포지션 전수 독립 검증은 미완료.
- **Best XI 후보 경합**: CB 존 테리/리오 퍼디난드 대 피케/푸욜/비디치, LB 애슐리 콜 대 에브라/람, DM 야야 투레 대 툴랄랑/캄비아소/세나, CM 이니에스타 대 램퍼드/파브레가스, RW 메시 대 호날두, ST 에토 대 루니/벤제마 등은 팀 성적 대신 당해 개인 기여와 3시즌 기량 지속성을 더 대조할 필요.
- **개인상의 용도**: 2009 UEFA 최우수 GK 판데르사르, 수비수 존 테리, 미드필더 사비, 공격수/올해의 선수 메시는 당시 평가를 보조하는 직접 근거. 수상 사실 하나로 그 밖의 선수의 등급을 자동 강등하지 않음.
- **웹사이트 테스트**: 원본 메타데이터에 2026-11-12 Playwright GitHub Pages 테스트 통과 기록이 있지만, 2026-11-19 이번 변경 이후 새로운 브라우저 테스트는 진행하지 않았으므로 과거 성공으로 구분.

## 15. 자동 데이터 정합성 테스트 결과

- **PASS** — 기존 선수 292명과 ID 중복 없음
- **PASS** — 16개 평가 구단에 선수 전원 소속
- **PASS** — 292명 티어 모두 유효
- **PASS** — 292명 순위 전부 등록
- **PASS** — 포지션 내 순위 1..N 연속
- **PASS** — 동일 포지션 내 티어 역전 없음
- **PASS** — 292명의 UCL 본선 출전 횟수·분 입력
- **PASS** — 생년월일 누락 82건 (원본 그대로)
- **PASS** — 해당 시즌 UEFA 단일 시즌 근거 17명 연결
- **PASS** — 기존 Best XI 11명 실제 동일 후보·주 포지션
- **PASS** — 사용자 승인 전 상태
- PASS — 기존 기록의 경기수·출전분·득점·도움·생년월일·ID·팀·포지션·tier·rank 변동 0. 이번에는 17명의 단일시즌 근거를 비파괴 필드에 추가.
- PENDING — 선수별 2006-07/2007-08/2008-09 경기별 영향력 전체 분석과 생년월일 누락 82명 검증.
- PENDING — 이번 GitHub 커밋 이후 새로운 GitHub Pages 브라우저 UI 테스트. 기존 2026-11-12 통과 이력을 이번 확인으로 재해석하지 않음.

## 16. 참고 자료 및 GitHub 저장

- UEFA 2008-09 공식 선수 통계: https://www.uefa.com/uefachampionsleague/history/seasons/2009/statistics/
- 2009년 UEFA Club Football Awards 수상 발표: https://www.uefa.com/uefasupercup/news/0250-0c50f2408efc-250d73ed16cf-1000--messi-recognised-as-europe-s-finest/
- 2008-09 UEFA Champions League 기술 보고서: https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/88/42/23/884223_DOWNLOAD.pdf
- 2008-09 UCL 득점왕 메시 관련 동시대 보도: https://www.uefa.com/uefachampionsleague/news/01d9-0e723fa0bf50-a11f10e8b995-1000--messi-sweeps-up-goalscoring-honours/
- FBref 2008-09 Champions League 통계: 집계 차이 확인: https://fbref.com/en/comps/8/2008-2009/2008-2009-Champions-League-Stats
- 2009 FC Barcelona 2-0 Manchester United 경기 보고: https://www.uefa.com/uefachampionsleague/news/01f3-0e78cf0b1cde-767a3469b6c3-1000--2008-09-fc-barcelona-2-0-manchester-united-fc-report/
- 데이터 기존 DRAFT+UEFA 17건 근거 추가 및 메타데이터 커밋: `f3d22ebe9686c38006c3434bd0e041b2ec3b8697`.
- 전체 감사 보고서 커밋은 이 문서를 보유한 `audit/` 파일의 GitHub 수정 이력에서 확인.
- 사이트 직접 동작 검증 여부와 GitHub 데이터 저장 여부를 엄격하게 구분.
- 완료 상태: `draft_unapproved`; 다음 시즌으로 자동 이동하지 않음.
