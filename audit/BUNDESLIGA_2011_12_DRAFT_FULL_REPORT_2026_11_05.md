# Football Archive — Bundesliga 2011-12 FULL DRAFT & Historical Audit

**작성일:** 2026-11-05 · **리그:** Bundesliga · **시즌:** 2011-12 · **평가 대상 3시즌:** 2009-10 / 2010-11 / 2011-12
**저장 위치:** `wjdduddlf112/footballarch` / `main` · **승인 상태:** `draft_unapproved`, Best XI `proposed_unapproved`

> **역사적 검증 상태:** 2011-12 실제 7개 구단의 출전 명단과 시즌 선수 기록을 출처별로 확인해 **126명의 잠정 후보·티어·10개 포지션 순위·11명 Best XI**를 저장했다. 그러나 직전 두 시즌의 출전·득점에 대해 DFB 개인 원출처로 별도 교차 확인한 선수는 **10명**이며, 모든 선수의 3시즌 정성적 개인 기량·경기별 주 포지션을 전수 독립 검증한 인원은 **0명**이다. 수치 연결을 역사적 평가 완전 검증으로 간주하지 않는다. 확인되지 않은 수치는 `null`로 유지한다.

## 1. 2012-13 유럽대항전 실제 참가 구단 확정

| 2011-12 리그 순위 | 구단 원어명 | 2012-13 실제 참가 | 참가 경로 | 해당 시즌 선수 수 |
|---:|---|---|---|---:|
| 1 | BV 09 Borussia Dortmund | UCL | Bundesliga champions, group stage | 20 |
| 2 | FC Bayern München | UCL | Bundesliga runners-up, group stage | 17 |
| 3 | FC Schalke 04 | UCL | Bundesliga third, group stage | 20 |
| 4 | VfL Borussia Mönchengladbach | UCL → UEL | Bundesliga fourth, Champions League play-off (played Dynamo Kyiv) | 16 |
| 5 | Bayer 04 Leverkusen | UEL | Bundesliga fifth, Europa League group stage after cup-slot reallocation | 18 |
| 6 | VfB Stuttgart | UEL | Bundesliga sixth; cup winner Borussia Dortmund and finalist Bayern both UCL-qualified; Europa group stage | 18 |
| 7 | Hannover 96 | UEL | Bundesliga seventh; national cup slot passdown, Europa League qualifying | 17 |

**검증:** UEFA 2012-13 [Champions League 참가](https://www.uefa.com/uefachampionsleague/history/seasons/2013/clubs/) · [Europa League 참가](https://www.uefa.com/uefaeuropaleague/history/seasons/2013/clubs/) · [RSSSF 독일 2011-12](https://www.rsssf.org/tablesd/duit2012.html) · [2011-12 DFB-포칼 결승](https://datencenter.dfb.de/competitions/dfb-pokal/seasons/2011-2012).
- Mönchengladbach는 다음 시즌 UCL 플레이오프에 실제 출전했으므로 UCL 참가 구단으로 선정. 이후 플레이오프 탈락으로 UEL로 이동하여 양쪽 역사적 참가를 저장.
- Dortmund와 Bayern이 컵 결승에 진출했으며 둘 다 이미 UCL 진출권 확보. 이로 인해 Stuttgart(6위), Hannover(7위)의 UEL 참가가 성립. 컵대회 성적을 선수 개인 티어 가산점으로 사용하지 않음.

## 2. 후보·티어 선정 규칙

- 포지션 순서: **GK → CB → LB → RB → DM → CM → CAM → LW → RW → ST**.
- 팀별 **주전급 인원 상한 없음**. 포지션별 추가 후보는 각 팀 최대 한 명. 강제로 대표 선발 11명에 맞추지 않음.
- 2011-12 활약에 최대 가중치, 2010-11 중간, 2009-10 보조. 개인 기량 및 팀 기여를 중심으로 판단, 팀 최종 순위·우승·컵 우승 자체를 가산하지 않음.
- A0/B0/C0는 사이트 저장 스키마 `A`/`B`/`C`로 인코딩. 미평가 티어는 `tier:null`, 근거 부족은 성적 부진으로 간주하지 않음.
- 포지션은 당시 역할 기준 잠정 한 포지션. LM/RM 또는 처진 ST의 실전 위치와 시즌 중 전술 변경은 경기별 전수 검증 대기.
- **BDFutbol PM(출전), SM(선발), Min(분), G(골)을 선수별로 기록**. 골키퍼 G 음수는 개인 득점이 아니라 실점이므로 본 데이터의 개인 골은 0으로 표기.

## 3. 구단별 주전·후보 및 전체 티어 분포

| 구단 | 주전급 | 후보 | 합계 |
|---|---:|---:|---:|
| BV 09 Borussia Dortmund | 13 | 7 | 20 |
| FC Bayern München | 15 | 2 | 17 |
| FC Schalke 04 | 16 | 4 | 20 |
| VfL Borussia Mönchengladbach | 13 | 3 | 16 |
| Bayer 04 Leverkusen | 16 | 2 | 18 |
| VfB Stuttgart | 17 | 1 | 18 |
| Hannover 96 | 16 | 1 | 17 |
| **전체** | **106** | **20** | **126** |

| 티어 | 선수 수 |
|---|---:|
| S | 2 |
| A+ | 15 |
| A0 | 7 |
| A- | 14 |
| B+ | 51 |
| B0 | 19 |
| B- | 8 |
| C+ | 10 |
| C0 | 0 |
| C- | 0 |
| D | 0 |
| 미평가 | 0 |
| **합계** | **126** |

**World Class(S/A+): 17명 · League Top Class(S/A+/A0/A-): 38명**

### 포지션별 인원 수

| 포지션 | 인원 |
|---|---:|
| GK | 10 |
| CB | 22 |
| LB | 13 |
| RB | 12 |
| DM | 13 |
| CM | 11 |
| CAM | 8 |
| LW | 10 |
| RW | 9 |
| ST | 18 |

## 4. 전체 7개 구단 선수 명단 (주전급·후보)

포지션별 구분 및 좌우 배치는 현재 시즌의 실제 역할을 기준으로 한 **잠정 분류**다. 구단명·생년월일·티어·포지션 순위를 모두 표시하며 검증 상태는 독립적으로 기록한다.

### BV 09 Borussia Dortmund (20명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121003.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 로만 바이덴펠러 | Roman Weidenfeller | BV 09 Borussia Dortmund | 1980-08-06 | 주전급 | 32 | 32 | 2880 | 0 | A0 | 3 | partially_verified |
| GK | 미첼 랑게라크 | Mitchell Langerak | BV 09 Borussia Dortmund | 1988-08-22 | 후보 | 2 | 2 | 180 | 0 | C+ | 10 | partially_verified |
| CB | 마츠 훔멜스 | Mats Hummels | BV 09 Borussia Dortmund | 1988-12-16 | 주전급 | 33 | 33 | 2950 | 1 | A+ | 2 | partially_verified |
| CB | 네벤 수보티치 | Neven Subotić | BV 09 Borussia Dortmund | 1988-12-10 | 주전급 | 25 | 25 | 2206 | 0 | A0 | 4 | partially_verified |
| CB | 펠리피 산타나 | Felipe Santana | BV 09 Borussia Dortmund | 1986-03-17 | 후보 | 13 | 10 | 945 | 1 | B0 | 22 | partially_verified |
| LB | 마르첼 슈멜처 | Marcel Schmelzer | BV 09 Borussia Dortmund | 1988-01-22 | 주전급 | 28 | 28 | 2435 | 1 | A0 | 3 | partially_verified |
| LB | 크리스 뢰베 | Chris Löwe | BV 09 Borussia Dortmund | 1989-04-16 | 후보 | 7 | 6 | 569 | 0 | C+ | 12 | partially_verified |
| RB | 우카시 피슈체크 | Łukasz Piszczek | BV 09 Borussia Dortmund | 1985-06-03 | 주전급 | 32 | 32 | 2800 | 4 | A+ | 1 | partially_verified |
| RB | 파트리크 오보모옐라 | Patrick Owomoyela | BV 09 Borussia Dortmund | 1979-11-05 | 후보 | 11 | 2 | 274 | 1 | C+ | 12 | partially_verified |
| DM | 제바스티안 켈 | Sebastian Kehl | BV 09 Borussia Dortmund | 1980-02-13 | 주전급 | 27 | 21 | 1951 | 3 | B+ | 7 | partially_verified |
| DM | 스벤 벤더 | Sven Bender | BV 09 Borussia Dortmund | 1989-04-27 | 주전급 | 24 | 21 | 1586 | 1 | B+ | 8 | partially_verified |
| CM | 일카이 귄도안 | İlkay Gündoğan | BV 09 Borussia Dortmund | 1990-10-24 | 주전급 | 28 | 22 | 1908 | 3 | A- | 3 | partially_verified |
| CM | 모리츠 라이트너 | Moritz Leitner | BV 09 Borussia Dortmund | 1992-12-08 | 후보 | 17 | 2 | 466 | 0 | C+ | 11 | partially_verified |
| CAM | 가가와 신지 | Shinji Kagawa | BV 09 Borussia Dortmund | 1989-03-17 | 주전급 | 31 | 29 | 2418 | 13 | A+ | 2 | partially_verified |
| CAM | 마리오 괴체 | Mario Götze | BV 09 Borussia Dortmund | 1992-06-03 | 주전급 | 17 | 14 | 1183 | 6 | A- | 4 | partially_verified |
| LW | 케빈 그로스크로이츠 | Kevin Großkreutz | BV 09 Borussia Dortmund | 1988-07-19 | 주전급 | 31 | 26 | 2331 | 7 | B+ | 4 | partially_verified |
| LW | 이반 페리시치 | Ivan Perišić | BV 09 Borussia Dortmund | 1989-02-02 | 후보 | 28 | 8 | 961 | 7 | B+ | 7 | partially_verified |
| RW | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | BV 09 Borussia Dortmund | 1985-12-14 | 주전급 | 29 | 22 | 1978 | 6 | A- | 3 | partially_verified |
| ST | 로베르트 레반도프스키 | Robert Lewandowski | BV 09 Borussia Dortmund | 1988-08-21 | 주전급 | 34 | 34 | 2877 | 22 | A+ | 1 | partially_verified |
| ST | 루카스 바리오스 | Lucas Barrios | BV 09 Borussia Dortmund | 1984-11-13 | 후보 | 18 | 3 | 426 | 4 | B- | 18 | partially_verified |

### FC Bayern München (17명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121016.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | 주전급 | 33 | 33 | 2970 | 0 | A+ | 2 | partially_verified |
| CB | 홀거 바트슈투버 | Holger Badstuber | FC Bayern München | 1989-03-13 | 주전급 | 33 | 32 | 2896 | 0 | A+ | 3 | partially_verified |
| CB | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | 주전급 | 27 | 26 | 2179 | 0 | B+ | 12 | partially_verified |
| CB | 다니엘 판 바위턴 | Daniel van Buyten | FC Bayern München | 1978-02-07 | 주전급 | 13 | 12 | 1052 | 4 | B0 | 20 | partially_verified |
| LB | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | 주전급 | 31 | 31 | 2751 | 0 | A+ | 1 | partially_verified |
| LB | 다비트 알라바 | David Alaba | FC Bayern München | 1992-06-24 | 주전급 | 30 | 14 | 1533 | 2 | A- | 4 | partially_verified |
| LB | 디에고 콘텐토 | Diego Contento | FC Bayern München | 1990-05-01 | 후보 | 11 | 5 | 493 | 0 | C+ | 13 | partially_verified |
| RB | 하피냐 | Rafinha | FC Bayern München | 1985-09-07 | 주전급 | 24 | 20 | 1779 | 0 | B+ | 4 | partially_verified |
| DM | 루이스 구스타부 | Luiz Gustavo | FC Bayern München | 1987-07-23 | 주전급 | 28 | 18 | 1693 | 1 | B+ | 9 | partially_verified |
| DM | 아나톨리 티모슈크 | Anatoliy Tymoshchuk | FC Bayern München | 1979-03-30 | 주전급 | 23 | 17 | 1557 | 0 | B+ | 11 | partially_verified |
| CM | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 | 주전급 | 31 | 27 | 2351 | 4 | A0 | 1 | partially_verified |
| CM | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | 주전급 | 22 | 18 | 1724 | 3 | A- | 4 | partially_verified |
| CAM | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | 주전급 | 34 | 33 | 2700 | 7 | A0 | 3 | partially_verified |
| LW | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | 주전급 | 32 | 27 | 2386 | 12 | S | 1 | partially_verified |
| RW | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | 주전급 | 24 | 18 | 1704 | 12 | A+ | 1 | partially_verified |
| ST | 마리오 고메스 | Mario Gómez | FC Bayern München | 1985-07-10 | 주전급 | 33 | 30 | 2481 | 26 | A+ | 4 | partially_verified |
| ST | 이비차 올리치 | Ivica Olić | FC Bayern München | 1979-09-14 | 후보 | 20 | 4 | 553 | 2 | B- | 17 | partially_verified |

### FC Schalke 04 (20명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121006.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 라르스 우너슈탈 | Lars Unnerstall | FC Schalke 04 | 1990-07-20 | 주전급 | 21 | 20 | 1816 | 0 | B0 | 7 | partially_verified |
| GK | 랄프 페어만 | Ralf Fährmann | FC Schalke 04 | 1988-09-27 | 주전급 | 9 | 9 | 748 | 0 | B- | 8 | partially_verified |
| GK | 티모 힐데브란트 | Timo Hildebrand | FC Schalke 04 | 1979-04-05 | 후보 | 6 | 5 | 494 | 0 | C+ | 9 | partially_verified |
| CB | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | FC Schalke 04 | 1992-02-23 | 주전급 | 29 | 28 | 2549 | 2 | A- | 5 | partially_verified |
| CB | 조엘 마티프 | Joel Matip | FC Schalke 04 | 1991-08-08 | 주전급 | 30 | 30 | 2631 | 3 | B+ | 6 | partially_verified |
| CB | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | 주전급 | 22 | 21 | 1812 | 1 | B+ | 14 | partially_verified |
| CB | 크리스토프 메첼더 | Christoph Metzelder | FC Schalke 04 | 1980-11-05 | 주전급 | 16 | 11 | 1011 | 1 | B0 | 21 | partially_verified |
| LB | 크리스티안 푹스 | Christian Fuchs | FC Schalke 04 | 1986-04-07 | 주전급 | 29 | 29 | 2610 | 2 | A0 | 2 | partially_verified |
| RB | 마르코 회거 | Marco Höger | FC Schalke 04 | 1989-09-16 | 주전급 | 27 | 19 | 1721 | 1 | B+ | 5 | partially_verified |
| RB | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | 주전급 | 18 | 17 | 1446 | 0 | B0 | 9 | partially_verified |
| DM | 저메인 존스 | Jermaine Jones | FC Schalke 04 | 1981-11-03 | 주전급 | 20 | 18 | 1651 | 0 | B+ | 10 | partially_verified |
| DM | 크리스토프 모리츠 | Christoph Moritz | FC Schalke 04 | 1990-01-27 | 후보 | 8 | 4 | 363 | 0 | C+ | 13 | partially_verified |
| CM | 루이스 홀트비 | Lewis Holtby | FC Schalke 04 | 1990-09-18 | 주전급 | 27 | 22 | 1935 | 6 | B+ | 7 | partially_verified |
| CAM | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | 주전급 | 30 | 21 | 1772 | 2 | B+ | 7 | partially_verified |
| LW | 호세 마누엘 후라도 | José Manuel Jurado | FC Schalke 04 | 1986-06-29 | 주전급 | 18 | 10 | 986 | 0 | B- | 8 | partially_verified |
| RW | 제페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | 주전급 | 23 | 19 | 1745 | 4 | A- | 5 | partially_verified |
| RW | 치네두 오바시 | Chinedu Obasi | FC Schalke 04 | 1986-06-01 | 후보 | 10 | 6 | 604 | 1 | C+ | 8 | partially_verified |
| ST | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | 주전급 | 32 | 32 | 2803 | 29 | A+ | 2 | partially_verified |
| ST | 라울 곤살레스 | Raúl González | FC Schalke 04 | 1977-06-27 | 주전급 | 32 | 32 | 2799 | 15 | A+ | 3 | partially_verified |
| ST | 테무 푸키 | Teemu Pukki | FC Schalke 04 | 1990-03-29 | 후보 | 19 | 5 | 604 | 5 | B0 | 15 | partially_verified |

### VfL Borussia Mönchengladbach (16명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121018.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 마르크안드레 테어 슈테겐 | Marc-André ter Stegen | VfL Borussia Mönchengladbach | 1992-04-30 | 주전급 | 34 | 34 | 3060 | 0 | A+ | 1 | partially_verified |
| CB | 단테 | Dante | VfL Borussia Mönchengladbach | 1983-10-18 | 주전급 | 33 | 33 | 2970 | 0 | A+ | 1 | partially_verified |
| CB | 마르틴 슈트란츨 | Martin Stranzl | VfL Borussia Mönchengladbach | 1980-06-16 | 주전급 | 22 | 21 | 1783 | 0 | B+ | 15 | partially_verified |
| CB | 로엘 브라우어스 | Roel Brouwers | VfL Borussia Mönchengladbach | 1981-11-28 | 주전급 | 21 | 17 | 1630 | 0 | B+ | 16 | partially_verified |
| LB | 필리프 담스 | Filip Daems | VfL Borussia Mönchengladbach | 1978-10-30 | 주전급 | 31 | 31 | 2790 | 3 | B+ | 5 | partially_verified |
| LB | 오스카르 벤트 | Oscar Wendt | VfL Borussia Mönchengladbach | 1985-12-17 | 후보 | 14 | 5 | 525 | 0 | B0 | 11 | partially_verified |
| RB | 토니 얀츠케 | Tony Jantschke | VfL Borussia Mönchengladbach | 1990-04-07 | 주전급 | 32 | 31 | 2822 | 1 | B+ | 2 | partially_verified |
| DM | 로만 노이슈테터 | Roman Neustädter | VfL Borussia Mönchengladbach | 1988-02-18 | 주전급 | 33 | 33 | 2889 | 0 | A- | 2 | partially_verified |
| DM | 호바르 노르트베이트 | Håvard Nordtveit | VfL Borussia Mönchengladbach | 1990-06-21 | 주전급 | 31 | 27 | 2394 | 1 | B+ | 5 | partially_verified |
| DM | 토르벤 마르크스 | Thorben Marx | VfL Borussia Mönchengladbach | 1981-07-27 | 후보 | 19 | 7 | 639 | 0 | B- | 12 | partially_verified |
| CAM | 마르코 로이스 | Marco Reus | VfL Borussia Mönchengladbach | 1989-05-31 | 주전급 | 32 | 32 | 2781 | 18 | S | 1 | partially_verified |
| LW | 후안 아랑고 | Juan Arango | VfL Borussia Mönchengladbach | 1980-05-16 | 주전급 | 34 | 34 | 3028 | 6 | A+ | 2 | partially_verified |
| RW | 파트리크 헤어만 | Patrick Herrmann | VfL Borussia Mönchengladbach | 1991-02-12 | 주전급 | 27 | 22 | 1738 | 6 | A- | 4 | partially_verified |
| ST | 마이크 한케 | Mike Hanke | VfL Borussia Mönchengladbach | 1983-11-05 | 주전급 | 31 | 29 | 2338 | 8 | B+ | 7 | partially_verified |
| ST | 이고르 지 카마르구 | Igor de Camargo | VfL Borussia Mönchengladbach | 1983-05-12 | 주전급 | 25 | 11 | 1226 | 5 | B+ | 11 | partially_verified |
| ST | 라울 보바디야 | Raúl Bobadilla | VfL Borussia Mönchengladbach | 1987-06-18 | 후보 | 15 | 5 | 525 | 1 | B- | 16 | partially_verified |

### Bayer 04 Leverkusen (18명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121014.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 베른트 레노 | Bernd Leno | Bayer 04 Leverkusen | 1992-03-04 | 주전급 | 33 | 33 | 2970 | 0 | A- | 5 | partially_verified |
| CB | 슈테판 라이나르츠 | Stefan Reinartz | Bayer 04 Leverkusen | 1989-01-01 | 주전급 | 30 | 26 | 2347 | 3 | B+ | 9 | partially_verified |
| CB | 외메르 토프라크 | Ömer Toprak | Bayer 04 Leverkusen | 1989-07-21 | 주전급 | 27 | 26 | 2281 | 0 | B+ | 11 | partially_verified |
| CB | 마누엘 프리드리히 | Manuel Friedrich | Bayer 04 Leverkusen | 1979-09-13 | 주전급 | 24 | 20 | 1736 | 1 | B0 | 17 | partially_verified |
| LB | 미할 카들레츠 | Michal Kadlec | Bayer 04 Leverkusen | 1984-12-13 | 주전급 | 29 | 29 | 2457 | 1 | B+ | 6 | partially_verified |
| RB | 다니엘 슈바프 | Daniel Schwaab | Bayer 04 Leverkusen | 1988-08-23 | 주전급 | 23 | 21 | 1907 | 0 | B0 | 7 | partially_verified |
| RB | 베드란 초를루카 | Vedran Ćorluka | Bayer 04 Leverkusen | 1986-02-05 | 주전급 | 7 | 7 | 598 | 0 | B0 | 11 | partially_verified |
| DM | 라르스 벤더 | Lars Bender | Bayer 04 Leverkusen | 1989-04-27 | 주전급 | 28 | 28 | 2385 | 4 | A+ | 1 | partially_verified |
| DM | 지몬 롤페스 | Simon Rolfes | Bayer 04 Leverkusen | 1982-01-21 | 주전급 | 31 | 22 | 1824 | 3 | B+ | 6 | partially_verified |
| CM | 곤살로 카스트로 | Gonzalo Castro | Bayer 04 Leverkusen | 1987-06-11 | 주전급 | 31 | 30 | 2714 | 2 | A- | 2 | partially_verified |
| CM | 미하엘 발라크 | Michael Ballack | Bayer 04 Leverkusen | 1976-09-26 | 주전급 | 18 | 15 | 1215 | 2 | B0 | 10 | partially_verified |
| CAM | 헤나투 아우구스투 | Renato Augusto | Bayer 04 Leverkusen | 1988-02-08 | 주전급 | 18 | 16 | 1345 | 0 | B0 | 8 | partially_verified |
| LW | 안드레 쉬를레 | André Schürrle | Bayer 04 Leverkusen | 1990-11-06 | 주전급 | 31 | 30 | 2627 | 7 | B+ | 3 | partially_verified |
| LW | 트란퀼로 바르네타 | Tranquillo Barnetta | Bayer 04 Leverkusen | 1985-05-22 | 후보 | 7 | 3 | 351 | 0 | B- | 9 | partially_verified |
| RW | 시드니 샘 | Sidney Sam | Bayer 04 Leverkusen | 1988-01-31 | 주전급 | 18 | 16 | 1410 | 4 | B+ | 6 | partially_verified |
| RW | 카림 벨라라비 | Karim Bellarabi | Bayer 04 Leverkusen | 1990-04-08 | 후보 | 10 | 0 | 170 | 1 | C+ | 9 | partially_verified |
| ST | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 | 주전급 | 34 | 28 | 2621 | 16 | A- | 5 | partially_verified |
| ST | 에렌 데르디요크 | Eren Derdiyok | Bayer 04 Leverkusen | 1988-06-12 | 주전급 | 25 | 11 | 1213 | 7 | B+ | 12 | partially_verified |

### VfB Stuttgart (18명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121002.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 스벤 울라이히 | Sven Ulreich | VfB Stuttgart | 1988-08-03 | 주전급 | 34 | 34 | 3060 | 0 | B+ | 6 | partially_verified |
| CB | 세르다르 타스치 | Serdar Taşçı | VfB Stuttgart | 1987-04-24 | 주전급 | 28 | 28 | 2512 | 3 | B+ | 7 | partially_verified |
| CB | 프란시스코 하비에르 로드리게스 | Francisco Javier Rodríguez | VfB Stuttgart | 1981-10-20 | 주전급 | 26 | 24 | 2192 | 2 | B+ | 13 | partially_verified |
| CB | 게오르크 니더마이어 | Georg Niedermeier | VfB Stuttgart | 1986-02-26 | 주전급 | 17 | 15 | 1333 | 0 | B0 | 18 | partially_verified |
| LB | 크리스티안 몰리나로 | Cristian Molinaro | VfB Stuttgart | 1983-07-30 | 주전급 | 23 | 19 | 1734 | 0 | B0 | 9 | partially_verified |
| LB | 아르튀르 보카 | Arthur Boka | VfB Stuttgart | 1983-04-02 | 주전급 | 13 | 10 | 850 | 0 | B0 | 10 | partially_verified |
| RB | 사카이 고토쿠 | Gotoku Sakai | VfB Stuttgart | 1991-03-14 | 주전급 | 14 | 14 | 1260 | 0 | B+ | 6 | partially_verified |
| RB | 할리트 불라루즈 | Khalid Boulahrouz | VfB Stuttgart | 1981-12-28 | 주전급 | 21 | 21 | 1839 | 2 | B0 | 8 | partially_verified |
| DM | 윌리암 크비스트 | William Kvist | VfB Stuttgart | 1985-02-24 | 주전급 | 33 | 33 | 2858 | 0 | B+ | 3 | partially_verified |
| CM | 즈드라브코 쿠즈마노비치 | Zdravko Kuzmanović | VfB Stuttgart | 1987-09-22 | 주전급 | 26 | 22 | 1808 | 5 | B+ | 8 | partially_verified |
| CM | 크리스티안 겐트너 | Christian Gentner | VfB Stuttgart | 1985-08-14 | 주전급 | 28 | 16 | 1450 | 5 | B+ | 9 | partially_verified |
| CAM | 터마시 허이널 | Tamás Hajnal | VfB Stuttgart | 1981-03-15 | 주전급 | 33 | 30 | 2483 | 1 | B+ | 5 | partially_verified |
| LW | 오카자키 신지 | Shinji Okazaki | VfB Stuttgart | 1986-04-16 | 주전급 | 26 | 18 | 1566 | 7 | B+ | 6 | partially_verified |
| LW | 이브라히마 트라오레 | Ibrahima Traoré | VfB Stuttgart | 1988-04-21 | 후보 | 12 | 1 | 250 | 1 | C+ | 10 | partially_verified |
| RW | 마르틴 하르니크 | Martin Harnik | VfB Stuttgart | 1987-06-10 | 주전급 | 34 | 33 | 2783 | 17 | A0 | 2 | partially_verified |
| ST | 베다드 이비셰비치 | Vedad Ibišević | VfB Stuttgart | 1984-08-06 | 주전급 | 15 | 15 | 1350 | 8 | A- | 6 | partially_verified |
| ST | 카카우 | Cacau | VfB Stuttgart | 1981-03-27 | 주전급 | 33 | 20 | 2052 | 8 | B+ | 9 | partially_verified |
| ST | 율리안 시버 | Julian Schieber | VfB Stuttgart | 1989-02-13 | 주전급 | 18 | 10 | 964 | 3 | B0 | 14 | partially_verified |

### Hannover 96 (17명)

- 시즌 출전 자료: [BDFutbol 2011-12 구단 기록](https://www.bdfutbol.com/en/t/t2011-121012.html)

| POS | 한글 이름 | 원어명 | 소속 구단 (원어명) | 생년월일 | 주전/후보 | 출전 | 선발 | 출전 분 | 골 | 티어 | 전체 POS 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 론로베르트 칠러 | Ron-Robert Zieler | Hannover 96 | 1989-02-12 | 주전급 | 34 | 34 | 3060 | 0 | A- | 4 | partially_verified |
| CB | 에마누엘 포가테츠 | Emanuel Pogatetz | Hannover 96 | 1983-01-16 | 주전급 | 29 | 28 | 2467 | 1 | B+ | 8 | partially_verified |
| CB | 카림 하귀 | Karim Haggui | Hannover 96 | 1984-01-20 | 주전급 | 27 | 26 | 2341 | 3 | B+ | 10 | partially_verified |
| CB | 마리오 에기만 | Mario Eggimann | Hannover 96 | 1981-01-24 | 주전급 | 16 | 13 | 1174 | 0 | B0 | 19 | partially_verified |
| LB | 크리스티안 슐츠 | Christian Schulz | Hannover 96 | 1983-04-01 | 주전급 | 27 | 24 | 2014 | 1 | B+ | 7 | partially_verified |
| LB | 크리스티안 판더 | Christian Pander | Hannover 96 | 1983-08-28 | 주전급 | 29 | 22 | 1944 | 2 | B+ | 8 | partially_verified |
| RB | 스티븐 체룬돌로 | Steven Cherundolo | Hannover 96 | 1979-02-19 | 주전급 | 22 | 22 | 1953 | 0 | B+ | 3 | partially_verified |
| RB | 소피안 샤헤트 | Sofian Chahed | Hannover 96 | 1983-04-18 | 주전급 | 16 | 12 | 1121 | 0 | B0 | 10 | partially_verified |
| DM | 마누엘 슈미데바흐 | Manuel Schmiedebach | Hannover 96 | 1988-12-05 | 주전급 | 30 | 28 | 2378 | 0 | B+ | 4 | partially_verified |
| CM | 세르지우 핀투 | Sérgio Pinto | Hannover 96 | 1980-10-16 | 주전급 | 30 | 29 | 2510 | 1 | B+ | 5 | partially_verified |
| CM | 라르스 슈틴들 | Lars Stindl | Hannover 96 | 1988-08-26 | 주전급 | 28 | 28 | 2497 | 2 | B+ | 6 | partially_verified |
| CAM | 얀 슐라우드라프 | Jan Schlaudraff | Hannover 96 | 1983-07-18 | 주전급 | 31 | 29 | 2385 | 3 | B+ | 6 | partially_verified |
| LW | 콘스탄틴 라우슈 | Konstantin Rausch | Hannover 96 | 1990-03-15 | 주전급 | 33 | 21 | 2063 | 1 | B+ | 5 | partially_verified |
| RW | 모리츠 슈토펠캄프 | Moritz Stoppelkamp | Hannover 96 | 1986-12-11 | 후보 | 21 | 4 | 557 | 0 | B- | 7 | partially_verified |
| ST | 모하메드 압델라웨 | Mohammed Abdellaoue | Hannover 96 | 1985-10-23 | 주전급 | 28 | 27 | 2007 | 11 | B+ | 8 | partially_verified |
| ST | 디디에 야 코난 | Didier Ya Konan | Hannover 96 | 1984-05-22 | 주전급 | 28 | 16 | 1744 | 6 | B+ | 10 | partially_verified |
| ST | 마메 비람 디우프 | Mame Biram Diouf | Hannover 96 | 1987-12-16 | 주전급 | 10 | 8 | 778 | 6 | B+ | 13 | partially_verified |

## 5. 리그 전체 포지션별 통합 순위 (전원)

10개 포지션의 모든 선수를 티어 우선·해당 시즌 기량·최근 3시즌 지속성 참고 기준으로 정렬했다. 동티어 내부 순위도 잠정이다.

### GK (10명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 마르크안드레 테어 슈테겐 / Marc-André ter Stegen | VfL Borussia Mönchengladbach | A+ | 주전급 | 34 / 34 | 0 |
| 2 | 마누엘 노이어 / Manuel Neuer | FC Bayern München | A+ | 주전급 | 33 / 33 | 0 |
| 3 | 로만 바이덴펠러 / Roman Weidenfeller | BV 09 Borussia Dortmund | A0 | 주전급 | 32 / 32 | 0 |
| 4 | 론로베르트 칠러 / Ron-Robert Zieler | Hannover 96 | A- | 주전급 | 34 / 34 | 0 |
| 5 | 베른트 레노 / Bernd Leno | Bayer 04 Leverkusen | A- | 주전급 | 33 / 33 | 0 |
| 6 | 스벤 울라이히 / Sven Ulreich | VfB Stuttgart | B+ | 주전급 | 34 / 34 | 0 |
| 7 | 라르스 우너슈탈 / Lars Unnerstall | FC Schalke 04 | B0 | 주전급 | 21 / 20 | 0 |
| 8 | 랄프 페어만 / Ralf Fährmann | FC Schalke 04 | B- | 주전급 | 9 / 9 | 0 |
| 9 | 티모 힐데브란트 / Timo Hildebrand | FC Schalke 04 | C+ | 후보 | 6 / 5 | 0 |
| 10 | 미첼 랑게라크 / Mitchell Langerak | BV 09 Borussia Dortmund | C+ | 후보 | 2 / 2 | 0 |

### CB (22명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 단테 / Dante | VfL Borussia Mönchengladbach | A+ | 주전급 | 33 / 33 | 0 |
| 2 | 마츠 훔멜스 / Mats Hummels | BV 09 Borussia Dortmund | A+ | 주전급 | 33 / 33 | 1 |
| 3 | 홀거 바트슈투버 / Holger Badstuber | FC Bayern München | A+ | 주전급 | 33 / 32 | 0 |
| 4 | 네벤 수보티치 / Neven Subotić | BV 09 Borussia Dortmund | A0 | 주전급 | 25 / 25 | 0 |
| 5 | 키리아코스 파파도풀로스 / Kyriakos Papadopoulos | FC Schalke 04 | A- | 주전급 | 29 / 28 | 2 |
| 6 | 조엘 마티프 / Joel Matip | FC Schalke 04 | B+ | 주전급 | 30 / 30 | 3 |
| 7 | 세르다르 타스치 / Serdar Taşçı | VfB Stuttgart | B+ | 주전급 | 28 / 28 | 3 |
| 8 | 에마누엘 포가테츠 / Emanuel Pogatetz | Hannover 96 | B+ | 주전급 | 29 / 28 | 1 |
| 9 | 슈테판 라이나르츠 / Stefan Reinartz | Bayer 04 Leverkusen | B+ | 주전급 | 30 / 26 | 3 |
| 10 | 카림 하귀 / Karim Haggui | Hannover 96 | B+ | 주전급 | 27 / 26 | 3 |
| 11 | 외메르 토프라크 / Ömer Toprak | Bayer 04 Leverkusen | B+ | 주전급 | 27 / 26 | 0 |
| 12 | 제롬 보아텡 / Jérôme Boateng | FC Bayern München | B+ | 주전급 | 27 / 26 | 0 |
| 13 | 프란시스코 하비에르 로드리게스 / Francisco Javier Rodríguez | VfB Stuttgart | B+ | 주전급 | 26 / 24 | 2 |
| 14 | 베네딕트 회베데스 / Benedikt Höwedes | FC Schalke 04 | B+ | 주전급 | 22 / 21 | 1 |
| 15 | 마르틴 슈트란츨 / Martin Stranzl | VfL Borussia Mönchengladbach | B+ | 주전급 | 22 / 21 | 0 |
| 16 | 로엘 브라우어스 / Roel Brouwers | VfL Borussia Mönchengladbach | B+ | 주전급 | 21 / 17 | 0 |
| 17 | 마누엘 프리드리히 / Manuel Friedrich | Bayer 04 Leverkusen | B0 | 주전급 | 24 / 20 | 1 |
| 18 | 게오르크 니더마이어 / Georg Niedermeier | VfB Stuttgart | B0 | 주전급 | 17 / 15 | 0 |
| 19 | 마리오 에기만 / Mario Eggimann | Hannover 96 | B0 | 주전급 | 16 / 13 | 0 |
| 20 | 다니엘 판 바위턴 / Daniel van Buyten | FC Bayern München | B0 | 주전급 | 13 / 12 | 4 |
| 21 | 크리스토프 메첼더 / Christoph Metzelder | FC Schalke 04 | B0 | 주전급 | 16 / 11 | 1 |
| 22 | 펠리피 산타나 / Felipe Santana | BV 09 Borussia Dortmund | B0 | 후보 | 13 / 10 | 1 |

### LB (13명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 필리프 람 / Philipp Lahm | FC Bayern München | A+ | 주전급 | 31 / 31 | 0 |
| 2 | 크리스티안 푹스 / Christian Fuchs | FC Schalke 04 | A0 | 주전급 | 29 / 29 | 2 |
| 3 | 마르첼 슈멜처 / Marcel Schmelzer | BV 09 Borussia Dortmund | A0 | 주전급 | 28 / 28 | 1 |
| 4 | 다비트 알라바 / David Alaba | FC Bayern München | A- | 주전급 | 30 / 14 | 2 |
| 5 | 필리프 담스 / Filip Daems | VfL Borussia Mönchengladbach | B+ | 주전급 | 31 / 31 | 3 |
| 6 | 미할 카들레츠 / Michal Kadlec | Bayer 04 Leverkusen | B+ | 주전급 | 29 / 29 | 1 |
| 7 | 크리스티안 슐츠 / Christian Schulz | Hannover 96 | B+ | 주전급 | 27 / 24 | 1 |
| 8 | 크리스티안 판더 / Christian Pander | Hannover 96 | B+ | 주전급 | 29 / 22 | 2 |
| 9 | 크리스티안 몰리나로 / Cristian Molinaro | VfB Stuttgart | B0 | 주전급 | 23 / 19 | 0 |
| 10 | 아르튀르 보카 / Arthur Boka | VfB Stuttgart | B0 | 주전급 | 13 / 10 | 0 |
| 11 | 오스카르 벤트 / Oscar Wendt | VfL Borussia Mönchengladbach | B0 | 후보 | 14 / 5 | 0 |
| 12 | 크리스 뢰베 / Chris Löwe | BV 09 Borussia Dortmund | C+ | 후보 | 7 / 6 | 0 |
| 13 | 디에고 콘텐토 / Diego Contento | FC Bayern München | C+ | 후보 | 11 / 5 | 0 |

### RB (12명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 우카시 피슈체크 / Łukasz Piszczek | BV 09 Borussia Dortmund | A+ | 주전급 | 32 / 32 | 4 |
| 2 | 토니 얀츠케 / Tony Jantschke | VfL Borussia Mönchengladbach | B+ | 주전급 | 32 / 31 | 1 |
| 3 | 스티븐 체룬돌로 / Steven Cherundolo | Hannover 96 | B+ | 주전급 | 22 / 22 | 0 |
| 4 | 하피냐 / Rafinha | FC Bayern München | B+ | 주전급 | 24 / 20 | 0 |
| 5 | 마르코 회거 / Marco Höger | FC Schalke 04 | B+ | 주전급 | 27 / 19 | 1 |
| 6 | 사카이 고토쿠 / Gotoku Sakai | VfB Stuttgart | B+ | 주전급 | 14 / 14 | 0 |
| 7 | 다니엘 슈바프 / Daniel Schwaab | Bayer 04 Leverkusen | B0 | 주전급 | 23 / 21 | 0 |
| 8 | 할리트 불라루즈 / Khalid Boulahrouz | VfB Stuttgart | B0 | 주전급 | 21 / 21 | 2 |
| 9 | 우치다 아쓰토 / Atsuto Uchida | FC Schalke 04 | B0 | 주전급 | 18 / 17 | 0 |
| 10 | 소피안 샤헤트 / Sofian Chahed | Hannover 96 | B0 | 주전급 | 16 / 12 | 0 |
| 11 | 베드란 초를루카 / Vedran Ćorluka | Bayer 04 Leverkusen | B0 | 주전급 | 7 / 7 | 0 |
| 12 | 파트리크 오보모옐라 / Patrick Owomoyela | BV 09 Borussia Dortmund | C+ | 후보 | 11 / 2 | 1 |

### DM (13명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 라르스 벤더 / Lars Bender | Bayer 04 Leverkusen | A+ | 주전급 | 28 / 28 | 4 |
| 2 | 로만 노이슈테터 / Roman Neustädter | VfL Borussia Mönchengladbach | A- | 주전급 | 33 / 33 | 0 |
| 3 | 윌리암 크비스트 / William Kvist | VfB Stuttgart | B+ | 주전급 | 33 / 33 | 0 |
| 4 | 마누엘 슈미데바흐 / Manuel Schmiedebach | Hannover 96 | B+ | 주전급 | 30 / 28 | 0 |
| 5 | 호바르 노르트베이트 / Håvard Nordtveit | VfL Borussia Mönchengladbach | B+ | 주전급 | 31 / 27 | 1 |
| 6 | 지몬 롤페스 / Simon Rolfes | Bayer 04 Leverkusen | B+ | 주전급 | 31 / 22 | 3 |
| 7 | 제바스티안 켈 / Sebastian Kehl | BV 09 Borussia Dortmund | B+ | 주전급 | 27 / 21 | 3 |
| 8 | 스벤 벤더 / Sven Bender | BV 09 Borussia Dortmund | B+ | 주전급 | 24 / 21 | 1 |
| 9 | 루이스 구스타부 / Luiz Gustavo | FC Bayern München | B+ | 주전급 | 28 / 18 | 1 |
| 10 | 저메인 존스 / Jermaine Jones | FC Schalke 04 | B+ | 주전급 | 20 / 18 | 0 |
| 11 | 아나톨리 티모슈크 / Anatoliy Tymoshchuk | FC Bayern München | B+ | 주전급 | 23 / 17 | 0 |
| 12 | 토르벤 마르크스 / Thorben Marx | VfL Borussia Mönchengladbach | B- | 후보 | 19 / 7 | 0 |
| 13 | 크리스토프 모리츠 / Christoph Moritz | FC Schalke 04 | C+ | 후보 | 8 / 4 | 0 |

### CM (11명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 토니 크로스 / Toni Kroos | FC Bayern München | A0 | 주전급 | 31 / 27 | 4 |
| 2 | 곤살로 카스트로 / Gonzalo Castro | Bayer 04 Leverkusen | A- | 주전급 | 31 / 30 | 2 |
| 3 | 일카이 귄도안 / İlkay Gündoğan | BV 09 Borussia Dortmund | A- | 주전급 | 28 / 22 | 3 |
| 4 | 바스티안 슈바인슈타이거 / Bastian Schweinsteiger | FC Bayern München | A- | 주전급 | 22 / 18 | 3 |
| 5 | 세르지우 핀투 / Sérgio Pinto | Hannover 96 | B+ | 주전급 | 30 / 29 | 1 |
| 6 | 라르스 슈틴들 / Lars Stindl | Hannover 96 | B+ | 주전급 | 28 / 28 | 2 |
| 7 | 루이스 홀트비 / Lewis Holtby | FC Schalke 04 | B+ | 주전급 | 27 / 22 | 6 |
| 8 | 즈드라브코 쿠즈마노비치 / Zdravko Kuzmanović | VfB Stuttgart | B+ | 주전급 | 26 / 22 | 5 |
| 9 | 크리스티안 겐트너 / Christian Gentner | VfB Stuttgart | B+ | 주전급 | 28 / 16 | 5 |
| 10 | 미하엘 발라크 / Michael Ballack | Bayer 04 Leverkusen | B0 | 주전급 | 18 / 15 | 2 |
| 11 | 모리츠 라이트너 / Moritz Leitner | BV 09 Borussia Dortmund | C+ | 후보 | 17 / 2 | 0 |

### CAM (8명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 마르코 로이스 / Marco Reus | VfL Borussia Mönchengladbach | S | 주전급 | 32 / 32 | 18 |
| 2 | 가가와 신지 / Shinji Kagawa | BV 09 Borussia Dortmund | A+ | 주전급 | 31 / 29 | 13 |
| 3 | 토마스 뮐러 / Thomas Müller | FC Bayern München | A0 | 주전급 | 34 / 33 | 7 |
| 4 | 마리오 괴체 / Mario Götze | BV 09 Borussia Dortmund | A- | 주전급 | 17 / 14 | 6 |
| 5 | 터마시 허이널 / Tamás Hajnal | VfB Stuttgart | B+ | 주전급 | 33 / 30 | 1 |
| 6 | 얀 슐라우드라프 / Jan Schlaudraff | Hannover 96 | B+ | 주전급 | 31 / 29 | 3 |
| 7 | 율리안 드락슬러 / Julian Draxler | FC Schalke 04 | B+ | 주전급 | 30 / 21 | 2 |
| 8 | 헤나투 아우구스투 / Renato Augusto | Bayer 04 Leverkusen | B0 | 주전급 | 18 / 16 | 0 |

### LW (10명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 프랑크 리베리 / Franck Ribéry | FC Bayern München | S | 주전급 | 32 / 27 | 12 |
| 2 | 후안 아랑고 / Juan Arango | VfL Borussia Mönchengladbach | A+ | 주전급 | 34 / 34 | 6 |
| 3 | 안드레 쉬를레 / André Schürrle | Bayer 04 Leverkusen | B+ | 주전급 | 31 / 30 | 7 |
| 4 | 케빈 그로스크로이츠 / Kevin Großkreutz | BV 09 Borussia Dortmund | B+ | 주전급 | 31 / 26 | 7 |
| 5 | 콘스탄틴 라우슈 / Konstantin Rausch | Hannover 96 | B+ | 주전급 | 33 / 21 | 1 |
| 6 | 오카자키 신지 / Shinji Okazaki | VfB Stuttgart | B+ | 주전급 | 26 / 18 | 7 |
| 7 | 이반 페리시치 / Ivan Perišić | BV 09 Borussia Dortmund | B+ | 후보 | 28 / 8 | 7 |
| 8 | 호세 마누엘 후라도 / José Manuel Jurado | FC Schalke 04 | B- | 주전급 | 18 / 10 | 0 |
| 9 | 트란퀼로 바르네타 / Tranquillo Barnetta | Bayer 04 Leverkusen | B- | 후보 | 7 / 3 | 0 |
| 10 | 이브라히마 트라오레 / Ibrahima Traoré | VfB Stuttgart | C+ | 후보 | 12 / 1 | 1 |

### RW (9명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 아르연 로번 / Arjen Robben | FC Bayern München | A+ | 주전급 | 24 / 18 | 12 |
| 2 | 마르틴 하르니크 / Martin Harnik | VfB Stuttgart | A0 | 주전급 | 34 / 33 | 17 |
| 3 | 야쿠프 브와슈치코프스키 / Jakub Błaszczykowski | BV 09 Borussia Dortmund | A- | 주전급 | 29 / 22 | 6 |
| 4 | 파트리크 헤어만 / Patrick Herrmann | VfL Borussia Mönchengladbach | A- | 주전급 | 27 / 22 | 6 |
| 5 | 제페르손 파르판 / Jefferson Farfán | FC Schalke 04 | A- | 주전급 | 23 / 19 | 4 |
| 6 | 시드니 샘 / Sidney Sam | Bayer 04 Leverkusen | B+ | 주전급 | 18 / 16 | 4 |
| 7 | 모리츠 슈토펠캄프 / Moritz Stoppelkamp | Hannover 96 | B- | 후보 | 21 / 4 | 0 |
| 8 | 치네두 오바시 / Chinedu Obasi | FC Schalke 04 | C+ | 후보 | 10 / 6 | 1 |
| 9 | 카림 벨라라비 / Karim Bellarabi | Bayer 04 Leverkusen | C+ | 후보 | 10 / 0 | 1 |

### ST (18명)

| 순위 | 선수 한글명 / 원어명 | 구단 | 티어 | 구분 | 출전·선발 | 2011-12 골 |
|---:|---|---|---|---|---|---:|
| 1 | 로베르트 레반도프스키 / Robert Lewandowski | BV 09 Borussia Dortmund | A+ | 주전급 | 34 / 34 | 22 |
| 2 | 클라스얀 휜텔라르 / Klaas-Jan Huntelaar | FC Schalke 04 | A+ | 주전급 | 32 / 32 | 29 |
| 3 | 라울 곤살레스 / Raúl González | FC Schalke 04 | A+ | 주전급 | 32 / 32 | 15 |
| 4 | 마리오 고메스 / Mario Gómez | FC Bayern München | A+ | 주전급 | 33 / 30 | 26 |
| 5 | 슈테판 키슬링 / Stefan Kießling | Bayer 04 Leverkusen | A- | 주전급 | 34 / 28 | 16 |
| 6 | 베다드 이비셰비치 / Vedad Ibišević | VfB Stuttgart | A- | 주전급 | 15 / 15 | 8 |
| 7 | 마이크 한케 / Mike Hanke | VfL Borussia Mönchengladbach | B+ | 주전급 | 31 / 29 | 8 |
| 8 | 모하메드 압델라웨 / Mohammed Abdellaoue | Hannover 96 | B+ | 주전급 | 28 / 27 | 11 |
| 9 | 카카우 / Cacau | VfB Stuttgart | B+ | 주전급 | 33 / 20 | 8 |
| 10 | 디디에 야 코난 / Didier Ya Konan | Hannover 96 | B+ | 주전급 | 28 / 16 | 6 |
| 11 | 이고르 지 카마르구 / Igor de Camargo | VfL Borussia Mönchengladbach | B+ | 주전급 | 25 / 11 | 5 |
| 12 | 에렌 데르디요크 / Eren Derdiyok | Bayer 04 Leverkusen | B+ | 주전급 | 25 / 11 | 7 |
| 13 | 마메 비람 디우프 / Mame Biram Diouf | Hannover 96 | B+ | 주전급 | 10 / 8 | 6 |
| 14 | 율리안 시버 / Julian Schieber | VfB Stuttgart | B0 | 주전급 | 18 / 10 | 3 |
| 15 | 테무 푸키 / Teemu Pukki | FC Schalke 04 | B0 | 후보 | 19 / 5 | 5 |
| 16 | 라울 보바디야 / Raúl Bobadilla | VfL Borussia Mönchengladbach | B- | 후보 | 15 / 5 | 1 |
| 17 | 이비차 올리치 / Ivica Olić | FC Bayern München | B- | 후보 | 20 / 4 | 2 |
| 18 | 루카스 바리오스 / Lucas Barrios | BV 09 Borussia Dortmund | B- | 후보 | 18 / 3 | 4 |

## 6. World Class (S/A+) 및 League Top Class (S/A+/A0/A-) 전체 명단

### World Class 전체

| POS | 선수 한글명 / 원어명 | 구단 원어명 | 티어 | 포지션 순위 |
|---|---|---|---|---:|
| GK | 마르크안드레 테어 슈테겐 / Marc-André ter Stegen | VfL Borussia Mönchengladbach | A+ | 1 |
| GK | 마누엘 노이어 / Manuel Neuer | FC Bayern München | A+ | 2 |
| CB | 단테 / Dante | VfL Borussia Mönchengladbach | A+ | 1 |
| CB | 마츠 훔멜스 / Mats Hummels | BV 09 Borussia Dortmund | A+ | 2 |
| CB | 홀거 바트슈투버 / Holger Badstuber | FC Bayern München | A+ | 3 |
| LB | 필리프 람 / Philipp Lahm | FC Bayern München | A+ | 1 |
| RB | 우카시 피슈체크 / Łukasz Piszczek | BV 09 Borussia Dortmund | A+ | 1 |
| DM | 라르스 벤더 / Lars Bender | Bayer 04 Leverkusen | A+ | 1 |
| CAM | 마르코 로이스 / Marco Reus | VfL Borussia Mönchengladbach | S | 1 |
| CAM | 가가와 신지 / Shinji Kagawa | BV 09 Borussia Dortmund | A+ | 2 |
| LW | 프랑크 리베리 / Franck Ribéry | FC Bayern München | S | 1 |
| LW | 후안 아랑고 / Juan Arango | VfL Borussia Mönchengladbach | A+ | 2 |
| RW | 아르연 로번 / Arjen Robben | FC Bayern München | A+ | 1 |
| ST | 로베르트 레반도프스키 / Robert Lewandowski | BV 09 Borussia Dortmund | A+ | 1 |
| ST | 클라스얀 휜텔라르 / Klaas-Jan Huntelaar | FC Schalke 04 | A+ | 2 |
| ST | 라울 곤살레스 / Raúl González | FC Schalke 04 | A+ | 3 |
| ST | 마리오 고메스 / Mario Gómez | FC Bayern München | A+ | 4 |

### League Top Class 전체

| POS | 선수 한글명 / 원어명 | 구단 원어명 | 티어 | 포지션 순위 |
|---|---|---|---|---:|
| GK | 마르크안드레 테어 슈테겐 / Marc-André ter Stegen | VfL Borussia Mönchengladbach | A+ | 1 |
| GK | 마누엘 노이어 / Manuel Neuer | FC Bayern München | A+ | 2 |
| GK | 로만 바이덴펠러 / Roman Weidenfeller | BV 09 Borussia Dortmund | A0 | 3 |
| GK | 론로베르트 칠러 / Ron-Robert Zieler | Hannover 96 | A- | 4 |
| GK | 베른트 레노 / Bernd Leno | Bayer 04 Leverkusen | A- | 5 |
| CB | 단테 / Dante | VfL Borussia Mönchengladbach | A+ | 1 |
| CB | 마츠 훔멜스 / Mats Hummels | BV 09 Borussia Dortmund | A+ | 2 |
| CB | 홀거 바트슈투버 / Holger Badstuber | FC Bayern München | A+ | 3 |
| CB | 네벤 수보티치 / Neven Subotić | BV 09 Borussia Dortmund | A0 | 4 |
| CB | 키리아코스 파파도풀로스 / Kyriakos Papadopoulos | FC Schalke 04 | A- | 5 |
| LB | 필리프 람 / Philipp Lahm | FC Bayern München | A+ | 1 |
| LB | 크리스티안 푹스 / Christian Fuchs | FC Schalke 04 | A0 | 2 |
| LB | 마르첼 슈멜처 / Marcel Schmelzer | BV 09 Borussia Dortmund | A0 | 3 |
| LB | 다비트 알라바 / David Alaba | FC Bayern München | A- | 4 |
| RB | 우카시 피슈체크 / Łukasz Piszczek | BV 09 Borussia Dortmund | A+ | 1 |
| DM | 라르스 벤더 / Lars Bender | Bayer 04 Leverkusen | A+ | 1 |
| DM | 로만 노이슈테터 / Roman Neustädter | VfL Borussia Mönchengladbach | A- | 2 |
| CM | 토니 크로스 / Toni Kroos | FC Bayern München | A0 | 1 |
| CM | 곤살로 카스트로 / Gonzalo Castro | Bayer 04 Leverkusen | A- | 2 |
| CM | 일카이 귄도안 / İlkay Gündoğan | BV 09 Borussia Dortmund | A- | 3 |
| CM | 바스티안 슈바인슈타이거 / Bastian Schweinsteiger | FC Bayern München | A- | 4 |
| CAM | 마르코 로이스 / Marco Reus | VfL Borussia Mönchengladbach | S | 1 |
| CAM | 가가와 신지 / Shinji Kagawa | BV 09 Borussia Dortmund | A+ | 2 |
| CAM | 토마스 뮐러 / Thomas Müller | FC Bayern München | A0 | 3 |
| CAM | 마리오 괴체 / Mario Götze | BV 09 Borussia Dortmund | A- | 4 |
| LW | 프랑크 리베리 / Franck Ribéry | FC Bayern München | S | 1 |
| LW | 후안 아랑고 / Juan Arango | VfL Borussia Mönchengladbach | A+ | 2 |
| RW | 아르연 로번 / Arjen Robben | FC Bayern München | A+ | 1 |
| RW | 마르틴 하르니크 / Martin Harnik | VfB Stuttgart | A0 | 2 |
| RW | 야쿠프 브와슈치코프스키 / Jakub Błaszczykowski | BV 09 Borussia Dortmund | A- | 3 |
| RW | 파트리크 헤어만 / Patrick Herrmann | VfL Borussia Mönchengladbach | A- | 4 |
| RW | 제페르손 파르판 / Jefferson Farfán | FC Schalke 04 | A- | 5 |
| ST | 로베르트 레반도프스키 / Robert Lewandowski | BV 09 Borussia Dortmund | A+ | 1 |
| ST | 클라스얀 휜텔라르 / Klaas-Jan Huntelaar | FC Schalke 04 | A+ | 2 |
| ST | 라울 곤살레스 / Raúl González | FC Schalke 04 | A+ | 3 |
| ST | 마리오 고메스 / Mario Gómez | FC Bayern München | A+ | 4 |
| ST | 슈테판 키슬링 / Stefan Kießling | Bayer 04 Leverkusen | A- | 5 |
| ST | 베다드 이비셰비치 / Vedad Ibišević | VfB Stuttgart | A- | 6 |

## 7. 대표 포메이션과 Best XI (11명, 미승인)

- **전술 대표형 4-2-3-1 잠정.** 2011-12 리그 전체 포메이션 사용 빈도를 경기별로 집계한 최빈값이라고 단정하지 않는다.
- 주요 선수 선정은 [2011/12 VDV 선수 투표(UEFA 2012-07-04)](https://www.uefa.com/news-media/news/01ff-0e7e56b7e42e-9b05f8109ed4-1000--reus-named-bundesliga-player-of-2011-12/)와 시즌 개인 활약 출전 근거로 보강했다. VDV 당시 베스트 XI는 2명 ST를 넣은 형태이며, 본 4-2-3-1과 배치가 달라 동일한 명단을 강제로 복제하지 않는다.
- 2011-12의 Marco Reus 및 Dante는 Gladbach 소속으로 저장. 2012년 여름 이후 Dortmund/Bayern 소속을 소급 적용하지 않는다.

| 전술 위치 | 선수 (한글 / 원어명) | 당시 구단 | 개인 티어 | 실제 주 포지션 | 2011-12 기여 및 경쟁 우위 (잠정) |
|---|---|---|---|---|---|
| GK | 마르크안드레 테어 슈테겐 / Marc-André ter Stegen | VfL Borussia Mönchengladbach | A+ | GK | VDV Team of the Season goalkeeper, 34 matches/3060 min, 24 conceded (BDF goalkeeper G semantic). DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| CB | 마츠 훔멜스 / Mats Hummels | BV 09 Borussia Dortmund | A+ | CB | 2011/12 VDV Bundesliga XI CB, 33 starts, individual build-up and anticipation. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| CB | 단테 / Dante | VfL Borussia Mönchengladbach | A+ | CB | VDV team of season CB while at Gladbach; transferred to Bayern in summer 2012, no backdating. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| LB | 필리프 람 / Philipp Lahm | FC Bayern München | A+ | LB | VDV season XI defender; primarily left fullback in 2011-12 with Rafinha RB. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| RB | 우카시 피슈체크 / Łukasz Piszczek | BV 09 Borussia Dortmund | A+ | RB | VDV season XI right-back, Dortmund 32 starts 4 goals, high two-way fullback impact. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| DM | 라르스 벤더 / Lars Bender | Bayer 04 Leverkusen | A+ | DM | 2011-12 28 appearances, 28 starts, 2385 minutes, 4 goals; current-season playing time and on-ball/off-ball contribution provisional comparison; 2009-10 and 2010-11 quality weighting pending independent confirmation. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| CM | 토니 크로스 / Toni Kroos | FC Bayern München | A0 | CM | 2011-12 31 appearances, 27 starts, 2351 minutes, 4 goals; current-season playing time and on-ball/off-ball contribution provisional comparison; 2009-10 and 2010-11 quality weighting pending independent confirmation. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| CAM | 마르코 로이스 / Marco Reus | VfL Borussia Mönchengladbach | S | CAM | VDV 2011/12 MVP 30% vote, 18 league goals; peak form, 2012 summer Dortmund transfer not backdated. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| LW | 프랑크 리베리 / Franck Ribéry | FC Bayern München | S | LW | VDV player of year second 16.3%, 32 apps 12 league goals; elite sustained wing creation. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| RW | 아르연 로번 / Arjen Robben | FC Bayern München | A+ | RW | 2011-12 24 appearances, 18 starts, 1704 minutes, 12 goals; current-season playing time and on-ball/off-ball contribution provisional comparison; 2009-10 and 2010-11 quality weighting pending independent confirmation. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |
| ST | 클라스얀 휜텔라르 / Klaas-Jan Huntelaar | FC Schalke 04 | A+ | ST | 29 Bundesliga goals golden boot, VDV third 12.5%; 2010-11 8 goals lower, breakout 2011/12. DRAFT 4-2-3-1 position fit and individual-form assessment; comparison with teammate/league rivals remains provisional. |

### Best XI 상위 경쟁 선수 판단 보류 사항
- **CAM**: VDV 시즌 MVP Marco Reus를 2선 중앙/처진 ST 역할의 우세로 잠정 채택. Shinji Kagawa는 31경기 13골의 동포지션 최상위 경쟁자로 남음. 양 선수 비교는 경기별 실제 위치·창조성 대조 대기.
- **ST**: 득점왕 Huntelaar(29골)을 선택. Mario Gómez(26골), Robert Lewandowski(22골)는 출전/득점력·연속성 상 강력한 대체 후보. 단순 우승 경력은 반영하지 않음.
- **GK**: Marc-André ter Stegen(34경기 3060분)과 Manuel Neuer(33경기 2970분)는 개인 경기력 비교 미완료. VDV 팀 선정에 근거해 Ter Stegen을 우선하되 최종 확정 아님.
- **LB/RB**: Philipp Lahm은 2011-12 주로 좌측 풀백으로 분류했고 Łukasz Piszczek을 우측에 선정. 시즌별 포지션 빈도 경기 단위 감사는 별도 필요.
- **DM/CM**: Lars Bender, Toni Kroos를 4-2-3-1의 중원 조합으로 잠정 배치. 마르크 판 보멀은 시즌 전 이미 이탈했으며 2011-12 바이에른 후보가 아님.

## 8. 3시즌 개인 기록·검증 전수표

각 선수의 2009-10/2010-11/2011-12 자료, 미검증 영역, 분류를 선수별로 기록. 당해 시즌은 BDFutbol 시즌 출전표를 확인했으나 **직전 두 시즌과 개인기량 전수 독립 검증은 다르다**.

| 포지션·선수 | 구단 | 2009-10 | 2010-11 | 2011-12 (출전/선발/분/골) | 개인 티어 | 검증 상태 | 남은 근거 |
|---|---|---|---|---|---|---|---|
| GK 로만 바이덴펠러 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 30경기 0골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 33경기 0골 (독립 재검증 전) | 32/32/2880/0 | A0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 미첼 랑게라크 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 기존 DRAFT: BV 09 Borussia Dortmund, 1경기 0골 (독립 재검증 전) | 2/2/180/0 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 마츠 훔멜스 | BV 09 Borussia Dortmund | **DFB 직접 확인**: Borussia Dortmund, 30경기 5골 | **DFB 직접 확인**: Borussia Dortmund, 32경기 5골 | 33/33/2950/1 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| CB 네벤 수보티치 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 34경기 3골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 31경기 1골 (독립 재검증 전) | 25/25/2206/0 | A0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 펠리피 산타나 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 25경기 0골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 13경기 0골 (독립 재검증 전) | 13/10/945/1 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 마르첼 슈멜처 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 28경기 0골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 34경기 0골 (독립 재검증 전) | 28/28/2435/1 | A0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 크리스 뢰베 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 확인 안 됨 (null) | 7/6/569/0 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 우카시 피슈체크 | BV 09 Borussia Dortmund | **DFB 직접 확인**: Hertha BSC, 31경기 2골 | **DFB 직접 확인**: Borussia Dortmund, 33경기 0골 | 32/32/2800/4 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| RB 파트리크 오보모옐라 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 33경기 1골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 6경기 0골 (독립 재검증 전) | 11/2/274/1 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 제바스티안 켈 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 6경기 1골 (독립 재검증 전) | 확인 안 됨 (null) | 27/21/1951/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 스벤 벤더 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 19경기 0골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 31경기 1골 (독립 재검증 전) | 24/21/1586/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 일카이 귄도안 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 확인 안 됨 (null) | 28/22/1908/3 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 모리츠 라이트너 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 확인 안 됨 (null) | 17/2/466/0 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 가가와 신지 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 기존 DRAFT: BV 09 Borussia Dortmund, 18경기 8골 (독립 재검증 전) | 31/29/2418/13 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 마리오 괴체 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 기존 DRAFT: BV 09 Borussia Dortmund, 33경기 6골 (독립 재검증 전) | 17/14/1183/6 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 케빈 그로스크로이츠 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 32경기 5골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 34경기 8골 (독립 재검증 전) | 31/26/2331/7 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 이반 페리시치 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 확인 안 됨 (null) | 28/8/961/7 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 야쿠프 브와슈치코프스키 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 32경기 1골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 29경기 3골 (독립 재검증 전) | 29/22/1978/6 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 로베르트 레반도프스키 | BV 09 Borussia Dortmund | 확인 안 됨 (null) | 기존 DRAFT: BV 09 Borussia Dortmund, 33경기 8골 (독립 재검증 전) | 34/34/2877/22 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 루카스 바리오스 | BV 09 Borussia Dortmund | 기존 DRAFT: BV 09 Borussia Dortmund, 33경기 19골 (독립 재검증 전) | 기존 DRAFT: BV 09 Borussia Dortmund, 32경기 16골 (독립 재검증 전) | 18/3/426/4 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 마누엘 노이어 | FC Bayern München | **DFB 직접 확인**: FC Schalke 04, 34경기 0골 | **DFB 직접 확인**: FC Schalke 04, 34경기 0골 | 33/33/2970/0 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| CB 홀거 바트슈투버 | FC Bayern München | 기존 DRAFT: FC Bayern München, 33경기 1골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 23경기 0골 (독립 재검증 전) | 33/32/2896/0 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 제롬 보아텡 | FC Bayern München | 확인 안 됨 (null) | 확인 안 됨 (null) | 27/26/2179/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 다니엘 판 바위턴 | FC Bayern München | 기존 DRAFT: FC Bayern München, 31경기 6골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 21경기 2골 (독립 재검증 전) | 13/12/1052/4 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 필리프 람 | FC Bayern München | **DFB 직접 확인**: FC Bayern München, 34경기 0골 | **DFB 직접 확인**: FC Bayern München, 34경기 3골 | 31/31/2751/0 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| LB 다비트 알라바 | FC Bayern München | 확인 안 됨 (null) | 확인 안 됨 (null) | 30/14/1533/2 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 디에고 콘텐토 | FC Bayern München | 기존 DRAFT: FC Bayern München, 9경기 0골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 14경기 0골 (독립 재검증 전) | 11/5/493/0 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 하피냐 | FC Bayern München | 기존 DRAFT: FC Schalke 04, 31경기 1골 (독립 재검증 전) | 확인 안 됨 (null) | 24/20/1779/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 루이스 구스타부 | FC Bayern München | 확인 안 됨 (null) | 기존 DRAFT: FC Bayern München, 14경기 1골 (독립 재검증 전) | 28/18/1693/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 아나톨리 티모슈크 | FC Bayern München | 기존 DRAFT: FC Bayern München, 21경기 0골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 26경기 3골 (독립 재검증 전) | 23/17/1557/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 토니 크로스 | FC Bayern München | **DFB 직접 확인**: Bayer 04 Leverkusen, 33경기 9골 | **DFB 직접 확인**: FC Bayern München, 27경기 1골 | 31/27/2351/4 | A0 (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| CM 바스티안 슈바인슈타이거 | FC Bayern München | 기존 DRAFT: FC Bayern München, 33경기 2골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 32경기 4골 (독립 재검증 전) | 22/18/1724/3 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 토마스 뮐러 | FC Bayern München | 기존 DRAFT: FC Bayern München, 34경기 13골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 34경기 12골 (독립 재검증 전) | 34/33/2700/7 | A0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 프랑크 리베리 | FC Bayern München | **DFB 직접 확인**: FC Bayern München, 19경기 4골 | **DFB 직접 확인**: FC Bayern München, 25경기 7골 | 32/27/2386/12 | S (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| RW 아르연 로번 | FC Bayern München | 기존 DRAFT: FC Bayern München, 24경기 16골 (독립 재검증 전) | 기존 DRAFT: FC Bayern München, 14경기 12골 (독립 재검증 전) | 24/18/1704/12 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 마리오 고메스 | FC Bayern München | **DFB 직접 확인**: FC Bayern München, 29경기 10골 | **DFB 직접 확인**: FC Bayern München, 32경기 28골 | 33/30/2481/26 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| ST 이비차 올리치 | FC Bayern München | 기존 DRAFT: FC Bayern München, 29경기 11골 (독립 재검증 전) | 확인 안 됨 (null) | 20/4/553/2 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 라르스 우너슈탈 | FC Schalke 04 | 확인 안 됨 (null) | 확인 안 됨 (null) | 21/20/1816/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 랄프 페어만 | FC Schalke 04 | 확인 안 됨 (null) | 확인 안 됨 (null) | 9/9/748/0 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 티모 힐데브란트 | FC Schalke 04 | 확인 안 됨 (null) | 확인 안 됨 (null) | 6/5/494/0 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 키리아코스 파파도풀로스 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 18경기 0골 (독립 재검증 전) | 29/28/2549/2 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 조엘 마티프 | FC Schalke 04 | 기존 DRAFT: FC Schalke 04, 20경기 3골 (독립 재검증 전) | 기존 DRAFT: FC Schalke 04, 26경기 0골 (독립 재검증 전) | 30/30/2631/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 베네딕트 회베데스 | FC Schalke 04 | 기존 DRAFT: FC Schalke 04, 33경기 3골 (독립 재검증 전) | 기존 DRAFT: FC Schalke 04, 30경기 1골 (독립 재검증 전) | 22/21/1812/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 크리스토프 메첼더 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 32경기 1골 (독립 재검증 전) | 16/11/1011/1 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 크리스티안 푹스 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: 1.FSV Mainz 05, 31경기 0골 (독립 재검증 전) | 29/29/2610/2 | A0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 마르코 회거 | FC Schalke 04 | 확인 안 됨 (null) | 확인 안 됨 (null) | 27/19/1721/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 우치다 아쓰토 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 26경기 0골 (독립 재검증 전) | 18/17/1446/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 저메인 존스 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 10경기 1골 (독립 재검증 전) | 20/18/1651/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 크리스토프 모리츠 | FC Schalke 04 | 기존 DRAFT: FC Schalke 04, 28경기 1골 (독립 재검증 전) | 기존 DRAFT: FC Schalke 04, 12경기 0골 (독립 재검증 전) | 8/4/363/0 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 루이스 홀트비 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: 1.FSV Mainz 05, 30경기 4골 (독립 재검증 전) | 27/22/1935/6 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 율리안 드락슬러 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 15경기 1골 (독립 재검증 전) | 30/21/1772/2 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 호세 마누엘 후라도 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 28경기 3골 (독립 재검증 전) | 18/10/986/0 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 제페르손 파르판 | FC Schalke 04 | 기존 DRAFT: FC Schalke 04, 33경기 8골 (독립 재검증 전) | 기존 DRAFT: FC Schalke 04, 28경기 3골 (독립 재검증 전) | 23/19/1745/4 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 치네두 오바시 | FC Schalke 04 | 확인 안 됨 (null) | 확인 안 됨 (null) | 10/6/604/1 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 클라스얀 휜텔라르 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 24경기 8골 (독립 재검증 전) | 32/32/2803/29 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 라울 곤살레스 | FC Schalke 04 | 확인 안 됨 (null) | 기존 DRAFT: FC Schalke 04, 34경기 13골 (독립 재검증 전) | 32/32/2799/15 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 테무 푸키 | FC Schalke 04 | 확인 안 됨 (null) | 확인 안 됨 (null) | 19/5/604/5 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 마르크안드레 테어 슈테겐 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 34/34/3060/0 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 단테 | VfL Borussia Mönchengladbach | **DFB 직접 확인**: Borussia Mönchengladbach, 32경기 3골 | **DFB 직접 확인**: Borussia Mönchengladbach, 18경기 2골 | 33/33/2970/0 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| CB 마르틴 슈트란츨 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 22/21/1783/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 로엘 브라우어스 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 21/17/1630/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 필리프 담스 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 31/31/2790/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 오스카르 벤트 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 14/5/525/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 토니 얀츠케 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 32/31/2822/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 로만 노이슈테터 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 33/33/2889/0 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 호바르 노르트베이트 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 31/27/2394/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 토르벤 마르크스 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 19/7/639/0 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 마르코 로이스 | VfL Borussia Mönchengladbach | **DFB 직접 확인**: Borussia Mönchengladbach, 33경기 8골 | **DFB 직접 확인**: Borussia Mönchengladbach, 32경기 10골 | 32/32/2781/18 | S (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| LW 후안 아랑고 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 34/34/3028/6 | A+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 파트리크 헤어만 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 27/22/1738/6 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 마이크 한케 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 31/29/2338/8 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 이고르 지 카마르구 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 25/11/1226/5 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 라울 보바디야 | VfL Borussia Mönchengladbach | 확인 안 됨 (null) | 확인 안 됨 (null) | 15/5/525/1 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 베른트 레노 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 확인 안 됨 (null) | 33/33/2970/0 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 슈테판 라이나르츠 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 27경기 2골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 31경기 2골 (독립 재검증 전) | 30/26/2347/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 외메르 토프라크 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 확인 안 됨 (null) | 27/26/2281/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 마누엘 프리드리히 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 31경기 3골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 19경기 0골 (독립 재검증 전) | 24/20/1736/1 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 미할 카들레츠 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 23경기 1골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 32경기 2골 (독립 재검증 전) | 29/29/2457/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 다니엘 슈바프 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 27경기 0골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 30경기 0골 (독립 재검증 전) | 23/21/1907/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 베드란 초를루카 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 확인 안 됨 (null) | 7/7/598/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 라르스 벤더 | Bayer 04 Leverkusen | **DFB 직접 확인**: Bayer 04 Leverkusen, 20경기 1골 | **DFB 직접 확인**: Bayer 04 Leverkusen, 27경기 3골 | 28/28/2385/4 | A+ (잠정) | partially_verified | individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions · historical_2009_10_2010_11_independently_checked_appearances_goals_but_further_quality_review_pending |
| DM 지몬 롤페스 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 11경기 4골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 28경기 5골 (독립 재검증 전) | 31/22/1824/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 곤살로 카스트로 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 29경기 1골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 23경기 3골 (독립 재검증 전) | 31/30/2714/2 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 미하엘 발라크 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 기존 DRAFT: Bayer 04 Leverkusen, 17경기 0골 (독립 재검증 전) | 18/15/1215/2 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 헤나투 아우구스투 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 17경기 0골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 27경기 7골 (독립 재검증 전) | 18/16/1345/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 안드레 쉬를레 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 기존 DRAFT: 1.FSV Mainz 05, 33경기 15골 (독립 재검증 전) | 31/30/2627/7 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 트란퀼로 바르네타 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 32경기 4골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 24경기 2골 (독립 재검증 전) | 7/3/351/0 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 시드니 샘 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 기존 DRAFT: Bayer 04 Leverkusen, 30경기 7골 (독립 재검증 전) | 18/16/1410/4 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 카림 벨라라비 | Bayer 04 Leverkusen | 확인 안 됨 (null) | 확인 안 됨 (null) | 10/0/170/1 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 슈테판 키슬링 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 33경기 21골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 22경기 7골 (독립 재검증 전) | 34/28/2621/16 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 에렌 데르디요크 | Bayer 04 Leverkusen | 기존 DRAFT: Bayer 04 Leverkusen, 33경기 12골 (독립 재검증 전) | 기존 DRAFT: Bayer 04 Leverkusen, 32경기 6골 (독립 재검증 전) | 25/11/1213/7 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 스벤 울라이히 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 4경기 0골 (독립 재검증 전) | 확인 안 됨 (null) | 34/34/3060/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 세르다르 타스치 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 27경기 2골 (독립 재검증 전) | 확인 안 됨 (null) | 28/28/2512/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 프란시스코 하비에르 로드리게스 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 26/24/2192/2 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 게오르크 니더마이어 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 12경기 1골 (독립 재검증 전) | 확인 안 됨 (null) | 17/15/1333/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 크리스티안 몰리나로 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 17경기 0골 (독립 재검증 전) | 확인 안 됨 (null) | 23/19/1734/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 아르튀르 보카 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 14경기 0골 (독립 재검증 전) | 확인 안 됨 (null) | 13/10/850/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 사카이 고토쿠 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 14/14/1260/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 할리트 불라루즈 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 21/21/1839/2 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 윌리암 크비스트 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 33/33/2858/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 즈드라브코 쿠즈마노비치 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 26경기 3골 (독립 재검증 전) | 확인 안 됨 (null) | 26/22/1808/5 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 크리스티안 겐트너 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 28/16/1450/5 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 터마시 허이널 | VfB Stuttgart | 기존 DRAFT: BV 09 Borussia Dortmund, 21경기 0골 (독립 재검증 전) | 확인 안 됨 (null) | 33/30/2483/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 오카자키 신지 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 26/18/1566/7 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 이브라히마 트라오레 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 12/1/250/1 | C+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 마르틴 하르니크 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 34/33/2783/17 | A0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 베다드 이비셰비치 | VfB Stuttgart | 확인 안 됨 (null) | 확인 안 됨 (null) | 15/15/1350/8 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 카카우 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 25경기 13골 (독립 재검증 전) | 확인 안 됨 (null) | 33/20/2052/8 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 율리안 시버 | VfB Stuttgart | 기존 DRAFT: VfB Stuttgart, 19경기 3골 (독립 재검증 전) | 확인 안 됨 (null) | 18/10/964/3 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| GK 론로베르트 칠러 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 15경기 0골 (독립 재검증 전) | 34/34/3060/0 | A- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 에마누엘 포가테츠 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 28경기 0골 (독립 재검증 전) | 29/28/2467/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 카림 하귀 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 25경기 1골 (독립 재검증 전) | 27/26/2341/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CB 마리오 에기만 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 12경기 0골 (독립 재검증 전) | 16/13/1174/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 크리스티안 슐츠 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 33경기 4골 (독립 재검증 전) | 27/24/2014/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LB 크리스티안 판더 | Hannover 96 | 확인 안 됨 (null) | 확인 안 됨 (null) | 29/22/1944/2 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 스티븐 체룬돌로 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 33경기 0골 (독립 재검증 전) | 22/22/1953/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RB 소피안 샤헤트 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 18경기 0골 (독립 재검증 전) | 16/12/1121/0 | B0 (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| DM 마누엘 슈미데바흐 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 32경기 0골 (독립 재검증 전) | 30/28/2378/0 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 세르지우 핀투 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 31경기 5골 (독립 재검증 전) | 30/29/2510/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CM 라르스 슈틴들 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 33경기 2골 (독립 재검증 전) | 28/28/2497/2 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| CAM 얀 슐라우드라프 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 21경기 4골 (독립 재검증 전) | 31/29/2385/3 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| LW 콘스탄틴 라우슈 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 34경기 5골 (독립 재검증 전) | 33/21/2063/1 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| RW 모리츠 슈토펠캄프 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 23경기 0골 (독립 재검증 전) | 21/4/557/0 | B- (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 모하메드 압델라웨 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 26경기 10골 (독립 재검증 전) | 28/27/2007/11 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 디디에 야 코난 | Hannover 96 | 확인 안 됨 (null) | 기존 DRAFT: Hannover 96, 28경기 14골 (독립 재검증 전) | 28/16/1744/6 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |
| ST 마메 비람 디우프 | Hannover 96 | 확인 안 됨 (null) | 확인 안 됨 (null) | 10/8/778/6 | B+ (잠정) | partially_verified | prior_two_seasons_independent_quantitative_and_quality_verification · individual_matchwise_main_role_frequency · independent_birthdate_profile_check · goals_assists_and_defensive_creative_provider_definitions |

### 최근 2시즌 외부 원출처(DFB) 독립 확인한 10명

| 선수 | 근거 | 검증 범위 |
|---|---|---|
| Marco Reus | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/people/marco-reus/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Franck Ribéry | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/data-center/people/franck-ribery/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Manuel Neuer | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/people/manuel-neuer/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Lars Bender | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/data-center/people/lars-bender/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Philipp Lahm | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/people/philipp-lahm/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Mats Hummels | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/data-center/people/mats-hummels/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Mario Gómez | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/datencenter/personen/mario-gomez/spieler) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Dante | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/data-center/people/dante/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Łukasz Piszczek | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/en/data-center/people/lukasz-piszczek/player) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |
| Toni Kroos | [DFB 선수별 공식 출전 기록](https://datencenter.dfb.de/datencenter/personen/toni-kroos/spieler) | **2009-10, 2010-11 개인 출전·득점** (종합 기량/경기별 포지션 별개) |

### 검증 인원 및 출처 수준 집계

| 항목 | 상태 또는 인원 |
|---|---:|
| 2011-12 시즌 직접 출전표 연결 | 126명 |
| 2009-10 이전 아카이브 DRAFT 참고 | 51명 |
| 2010-11 이전 아카이브 DRAFT 참고 | 72명 |
| 2개 직전 시즌 DFB 개인 출전·득점 직접 교차검증 | **10명** |
| DFB 독립 개별 신원·생년월일 확인 | **5명** |
| 128명 전체 3시즌 개인 기량 질적 검증 완료? | **아니오: 현재 126명 중 0명** |
| 경기별 최빈 포지션 독립 전수검증 | **0명** |
| 잠정 티어 입력 | 126명 |
| 사용자 최종 승인 | **미승인** |

## 9. 역사적 교정 및 검증 공백

### 실질적으로 수정한 항목
- **참가팀 기준:** 2012-13 실제 UCL/U​​EL 출전 7팀. Gladbach UCL 플레이오프+UEL 이중 참가 분리. Stuttgart/Hannover 컵대회 출전권 승계 경로 명시.
- **2012 여름 이적:** Reus·Dante를 2011-12 Gladbach로 유지. Neuer는 2011-12 Bayern, Kagawa는 2011-12 Dortmund.
- **구단별 주전 고정 11명 제한 없음:** 여러 포지션에서 2명 이상의 주전 인정, 후보 포지션별 최대 1명.
- **의미 없는 후보 제외:** Bayer GK Fabian Giefer는 리그 1경기 90분으로 제외. Schalke 세 번째 ST Ciprian Marica는 21회 출전/3선발/383분으로 주전급이 아니며, ST 후보 Teemu Pukki 우선 선정에 따라 제외.
- **주전·후보 오류 수정:** Dortmund Ivan Perišić는 리그 28경기 출전에도 선발 8경기·961분인 교체 중심 선수이므로 LW `starter`에서 `backup`으로 수정.
- **개인 원출처 보강:** Marco Reus, Franck Ribéry, Manuel Neuer, Lars Bender, Philipp Lahm, Mats Hummels, Mario Gómez, Dante, Łukasz Piszczek, Toni Kroos의 2009-10/2010-11 출전·골을 DFB 공식 선수 프로필로 재확인해 JSON을 직접 수정. 당시 타 구단 기록(예: Piszczek 2009-10 Hertha, Kroos 2009-10 Leverkusen)을 보존.
- **골키퍼 골수:** BDF의 골키퍼 음수 G를 득점으로 기록하지 않음. 골키퍼 G는 conceded 의미이며 개인 득점 0으로 처리.

### 미검증 영역
- 2011-12 리그 출전·득점 확인은 **모든 선수의 골·도움·수비 기여·전술 영향력 객관 평가를 완료했다는 뜻이 아님**.
- 10명 이외 선수의 이전 두 시즌 기록은 기존 아카이브 DRAFT를 연결했거나 null로 남김.
- 신규 선수의 생년월일은 일부 이전 시즌 아카이브와 일치하지만 독립 DFB 신원 프로필 전수 재확인은 미실시. `birthVerification`으로 구별.
- 4-2-3-1은 당시 전술을 대표하는 잠정형이지 분데스리가의 **독립 측정된 최빈 포메이션**은 아님.
- 동티어 포지션 순위는 2011-12 수치 및 동시대 평가로 구성한 **잠정** 비교. 미래 커리어는 평가에 소급 적용하지 않음.
- 어떠한 전수 확인이 안 됐어도 평가 인원을 인위적으로 맞추거나 근거 부족을 D 티어로 변환하지 않음.

## 10. GitHub 소스/구조 검사/역사 검증/홈페이지 검사 분리

| 검사 항목 | 기준/실행 | 현재 기록 |
|---|---|---|
| 시즌 JSON | 신규 7팀 후보·포지션 순위·3시즌 평가·Best XI | [`data/bundesliga-2011-12.json`](../data/bundesliga-2011-12.json) `main` 커밋 |
| JSON 무결성 | 중복 ID/주전 인원 상한 금지/후보 최대 1명/10개 위치/11명 XI | 검증 스크립트 저장. 실제 검사 결과 별도 로그 확인 |
| 구조 검증 스크립트 | Python | [`scripts/validate_bundesliga_2011_12.py`](../scripts/validate_bundesliga_2011_12.py) |
| 페이지 브라우저 검사 스크립트 | LIVE GitHub Pages URL 접속, 126명·7팀·XI·상세·이전 시즌 회귀 | [`scripts/browser_smoke_bundesliga_2011_12.cjs`](../scripts/browser_smoke_bundesliga_2011_12.cjs) 저장, 실브라우저 성공 기록 별도 확인 필요 |
| GitHub Actions | 구조 → LIVE 브라우저 테스트 | [`.github/workflows/validate-bundesliga-2011-12.yml`](../.github/workflows/validate-bundesliga-2011-12.yml) 반영. 실제 run 성공 별도 확인 |
| 홈페이지 JS | All Tiers 2011-12 활성화 | [`assets/app.js`](../assets/app.js) 반영 |
| 개인 역사적 검증 | 직전 2시즌 DFB 10명 직접 확인, 126명 전체 3시즌 경기력 검증 0명 | **부분 완료** |
| 기존 2010-11 회귀 | 기존 JSON 112명 유지와 라이브 UI 회귀 | 데이터는 이전 파일 보존. 라이브 UI 테스트 성공은 별도 확인 |
| 최종 승인 | 사용자의 명시적 승인 | **미승인** |

### 이번 시즌 파일 및 GitHub 커밋
- [최초 시즌 JSON 커밋 `b27678844f3e`](https://github.com/wjdduddlf112/footballarch/commit/b27678844f3eaaa0e6b6792d35ddd8741718b2fb)
- [선수 선발·DFB 기록 수정 커밋 `68d7fddb2862`](https://github.com/wjdduddlf112/footballarch/commit/68d7fddb286237add69ac9d3292af3cec2f64355)
- [구조 검증 스크립트 `6f22e736919d`](https://github.com/wjdduddlf112/footballarch/commit/6f22e736919dd6dfe0881c6205e28eb97fa409a8)
- [실브라우저 테스트 스크립트 `0f94ff6fd8d2`](https://github.com/wjdduddlf112/footballarch/commit/0f94ff6fd8d249f065fd382c3100823212112b4d)
- [GitHub Actions 워크플로 `e1f94ad08272`](https://github.com/wjdduddlf112/footballarch/commit/e1f94ad082729211eda90577a0dbe0aa4208ebef)
- [All Tiers UI 적용 `e260ea54ecdd`](https://github.com/wjdduddlf112/footballarch/commit/e260ea54ecdd70cfede42718f27075658a41cee7)

**사이트:** [Football Archive Bundesliga 2011-12](https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=2011-12&view=tiers)

## 11. 작업 완료 판정

| 단계 | 판정 |
|---|---|
| 다음 시즌 UEFA 실참가 7개 구단 확정 | 완료 |
| 구단별 새 시즌 선수 후보 선정(주전 제한 없음) | 잠정 완료(126명) |
| 2011-12 리그 출전 수치 연결 | 완료, 시즌 경기별 세부 자료 재검증 가능 |
| 실제 주 포지션 경기별 전수 확인 | 미완료 |
| 2009-10·2010-11 3시즌 개인 평가 | 기본 연결 및 10명 DFB 직접 대조, **전수 미완료** |
| 티어·10개 포지션 순위·WC/LTC | DRAFT 잠정 완료 |
| 4-2-3-1 / Best XI 11명 | `proposed_unapproved` |
| GitHub 실데이터·보고서 커밋 | 완료 |
| 구조 무결성 검사 | GitHub 최신 파일 재조회/검증 후 별도 기록 |
| GitHub Actions/홈페이지 실제 브라우저 테스트 | 성공 확인 전까지 미완료 |
| 최종 사용자 승인 | 미승인 |

**시즌 경계:** Bundesliga 2011-12만 처리했으며 Bundesliga 2012-13 자동 진행 금지. 사용자가 다음 시즌을 명시적으로 지시하기 전까지 진행하지 않는다.

### 2011-12 시즌 주요 7개 팀 통계 출처
- BV 09 Borussia Dortmund: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121003.html)
- FC Bayern München: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121016.html)
- FC Schalke 04: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121006.html)
- VfL Borussia Mönchengladbach: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121018.html)
- Bayer 04 Leverkusen: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121014.html)
- VfB Stuttgart: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121002.html)
- Hannover 96: [BDFutbol 2011-12](https://www.bdfutbol.com/en/t/t2011-121012.html)

### 동시대 선수 평가 · 공식 출처
- [UEFA (2012-07-04): Reus 선수협회 올해의 선수 및 2011-12 베스트 XI](https://www.uefa.com/news-media/news/01ff-0e7e56b7e42e-9b05f8109ed4-1000--reus-named-bundesliga-player-of-2011-12/)
- [DFB 2011-12 최종 리그/DFB-포칼 기록](https://datencenter.dfb.de/competitions/dfb-pokal/seasons/2011-2012)
- [RSSSF 2011-12 독일 최종표](https://rsssf.org/tablesd/duit2012.html)
