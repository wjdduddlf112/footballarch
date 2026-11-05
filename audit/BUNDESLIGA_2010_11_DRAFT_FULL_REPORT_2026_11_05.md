# Bundesliga 2010-11 — DRAFT FULL REPORT & Historical Verification Audit

**Report created:** 2026-11-05
**Repo/branch:** `wjdduddlf112/footballarch` / `main`
**Published website (live verification separately required):** https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=2010-11&view=tiers
**Evaluation period:** 2008-09 / 2009-10 / **2010-11** (highest weight)
**Approval:** `draft_unapproved` — Best XI `proposed_unapproved`

> **검증 한계:** 112명 전원 2010-11 리그 출전/선발/분/골 기록을 시즌별 구단 자료와 연결했으나, 두 이전 시즌 독립 기량 평가와 매 경기 포지션 빈도를 **전수 검증한 것은 아니다**. 이 기록은 잠정 티어·순위이며 출처 연결 100%를 역사적 평가 검증 100%로 오인하면 안 된다. 구조 검사와 실제 GitHub Pages 브라우저 검사는 별도 절차다.

## A. 2011-12 유럽대항전 실제 참가 구단

| 2010-11 리그 순위 | 구단 원어명 | 2011-12 실제 참가 | 진출 경로 | 선정 인원 |
|---:|---|---|---|---:|
| 1 | BV 09 Borussia Dortmund | UCL | Bundesliga 2010-11 champion (group stage) | 17 |
| 2 | Bayer 04 Leverkusen | UCL | Bundesliga second (group stage) | 19 |
| 3 | FC Bayern München | UCL | Bundesliga third (play-off) | 20 |
| 4 | Hannover 96 | UEL | Bundesliga fourth (play-off) | 17 |
| 5 | 1.FSV Mainz 05 | UEL | Bundesliga fifth (third qualifying round) | 20 |
| 14 | FC Schalke 04 | UEL | 2010-11 DFB-Pokal winner, not league finish (play-off) | 19 |

**예외:** FC Schalke 04는 리그 14위지만 2010-11 DFB-Pokal 우승으로 2011-12 Europa League에 실제 참가. 리그 6위 FC Nürnberg는 참가하지 않아 제외.
**출처:** [UEFA 2011-12 참가 명단](https://www.uefa.com/uefaeuropaleague/news/01f2-0e78a92bc11b-6610b928c079-1000--2011-12-list-of-participants/), [RSSSF Bundesliga 2010-11](https://www.rsssf.org/tablesd/duit2011.html) 및 기존 저장소 순위 검증 JSON.

## B. 조사·평가 규칙

- 포지션 순서: **GK → CB → LB → RB → DM → CM → CAM → LW → RW → ST**.
- 구단별 주전 인원 **제한 없음**. 시즌 도중 주전 경쟁·변경이 있었다면 복수의 주전 인정; 포지션별 추가 백업은 구단당 최대 1명.
- 실제 주 포지션은 현대 기준이나 미래 커리어가 아니라 2010-11 기용에 근거하여 한 자리만 등록. 세부 포지션 빈도는 추가 검증 중.
- 2010-11 개인 경기력 최대 가중치, 2009-10 중간, 2008-09 낮음. 팀 우승·최종 순위 자체는 티어 가산점 제외.
- 자료 없는 항목은 임의로 0 또는 선수 불이익 티어로 채우지 않고 `null`/`evidence_pending`. 이전 Football Archive DRAFT는 독립 검증으로 승격하지 않음.
- A0/B0/C0 UI 표시, A/B/C JSON 저장. World Class = S+A+, League Top Class = S+A++A0+A-.

## C. 후보 전체 개요

| 구단 | 주전급 | 후보 | 합계 |
|---|---:|---:|---:|
| BV 09 Borussia Dortmund | 13 | 4 | 17 |
| Bayer 04 Leverkusen | 16 | 3 | 19 |
| FC Bayern München | 17 | 3 | 20 |
| Hannover 96 | 14 | 3 | 17 |
| 1.FSV Mainz 05 | 17 | 3 | 20 |
| FC Schalke 04 | 16 | 3 | 19 |
| **합계** | **93** | **19** | **112** |

### 티어별 전수 분포

| 티어 | 인원 |
|---|---:|
| S | 3 |
| A+ | 9 |
| A0 | 11 |
| A- | 5 |
| B+ | 38 |
| B0 | 34 |
| B- | 7 |
| C+ | 5 |
| C0 | 0 |
| C- | 0 |
| D | 0 |
| 미평가 | 0 |
| **총합** | **112** |

World Class **12명**, League Top Class **28명**.

### 포지션별 인원

| 포지션 | 선수 수 |
|---|---:|
| GK | 11 |
| CB | 20 |
| LB | 10 |
| RB | 9 |
| DM | 15 |
| CM | 10 |
| CAM | 6 |
| LW | 7 |
| RW | 9 |
| ST | 15 |

## D. 구단별 주전급·후보 전원 명단

각 구단 선수는 시즌별 BDFutbol 구단명단과 DFB 구단 기록을 우선 활용. **선수별 시즌 기록의 존재와 정성적 경기력 검증 완료는 구분**한다.

### BV 09 Borussia Dortmund (17명)

- [2010-11 BDFutbol 리그 명단](https://www.bdfutbol.com/en/t/t2010-111003.html) · [2010-11 DFB 구단 기록](https://datencenter.dfb.de/en/bundesliga/2010-2011/team/borussia-dortmund)

| POS | 한글 이름 | 원어명 | 당시 구단 원어명 | 생년월일 | 주전/후보 | 경기 | 선발 | 분 | 골 | 티어 | 포지션 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 로만 바이덴펠러 | Roman Weidenfeller | BV 09 Borussia Dortmund | 1980-08-06 | 주전급 | 33 | 33 | 2970 | 0 | A0 | 2 | partially_verified |
| GK | 미첼 랑게라크 | Mitchell Langerak | BV 09 Borussia Dortmund | 1988-08-22 | 후보 | 1 | 1 | 90 | 0 | C+ | 11 | partially_verified |
| CB | 마츠 훔멜스 | Mats Hummels | BV 09 Borussia Dortmund | 1988-12-16 | 주전급 | 32 | 32 | 2834 | 5 | A+ | 1 | partially_verified |
| CB | 네벤 수보티치 | Neven Subotić | BV 09 Borussia Dortmund | 1988-12-10 | 주전급 | 31 | 31 | 2773 | 1 | A0 | 2 | partially_verified |
| CB | 펠리피 산타나 | Felipe Santana | BV 09 Borussia Dortmund | 1986-03-17 | 후보 | 13 | 5 | 523 | 0 | B0 | 19 | partially_verified |
| LB | 마르첼 슈멜처 | Marcel Schmelzer | BV 09 Borussia Dortmund | 1988-01-22 | 주전급 | 34 | 34 | 3060 | 0 | A0 | 1 | partially_verified |
| RB | 우카시 피슈체크 | Łukasz Piszczek | BV 09 Borussia Dortmund | 1985-06-03 | 주전급 | 33 | 29 | 2662 | 0 | A0 | 2 | partially_verified |
| RB | 파트리크 오보모옐라 | Patrick Owomoyela | BV 09 Borussia Dortmund | 1979-11-05 | 후보 | 6 | 5 | 447 | 0 | C+ | 8 | partially_verified |
| DM | 누리 샤힌 | Nuri Şahin | BV 09 Borussia Dortmund | 1988-09-05 | 주전급 | 30 | 30 | 2595 | 6 | S | 1 | partially_verified |
| DM | 스벤 벤더 | Sven Bender | BV 09 Borussia Dortmund | 1989-04-27 | 주전급 | 31 | 29 | 2442 | 1 | A0 | 2 | partially_verified |
| CM | 안토니우 다 시우바 | Antonio da Silva | BV 09 Borussia Dortmund | 1978-06-13 | 후보 | 22 | 5 | 745 | 1 | B- | 10 | partially_verified |
| CAM | 마리오 괴체 | Mario Götze | BV 09 Borussia Dortmund | 1992-06-03 | 주전급 | 33 | 29 | 2541 | 6 | A+ | 2 | partially_verified |
| CAM | 가가와 신지 | Shinji Kagawa | BV 09 Borussia Dortmund | 1989-03-17 | 주전급 | 18 | 17 | 1371 | 8 | A0 | 4 | partially_verified |
| LW | 케빈 그로스크로이츠 | Kevin Großkreutz | BV 09 Borussia Dortmund | 1988-07-19 | 주전급 | 34 | 32 | 2603 | 8 | B+ | 4 | partially_verified |
| RW | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | BV 09 Borussia Dortmund | 1985-12-14 | 주전급 | 29 | 15 | 1525 | 3 | B+ | 5 | partially_verified |
| ST | 루카스 바리오스 | Lucas Barrios | BV 09 Borussia Dortmund | 1984-11-13 | 주전급 | 32 | 29 | 2477 | 16 | A+ | 2 | partially_verified |
| ST | 로베르트 레반도프스키 | Robert Lewandowski | BV 09 Borussia Dortmund | 1988-08-21 | 주전급 | 33 | 15 | 1582 | 8 | B+ | 9 | partially_verified |

### Bayer 04 Leverkusen (19명)

- [2010-11 BDFutbol 리그 명단](https://www.bdfutbol.com/en/t/t2010-111014.html) · [2010-11 DFB 구단 기록](https://datencenter.dfb.de/en/competitions/bundesliga/seasons/2010-2011/teams/bayer-leverkusen)

| POS | 한글 이름 | 원어명 | 당시 구단 원어명 | 생년월일 | 주전/후보 | 경기 | 선발 | 분 | 골 | 티어 | 포지션 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 레네 아들러 | René Adler | Bayer 04 Leverkusen | 1985-01-15 | 주전급 | 32 | 32 | 2880 | 0 | A0 | 3 | partially_verified |
| GK | 파비안 기퍼 | Fabian Giefer | Bayer 04 Leverkusen | 1990-05-17 | 후보 | 2 | 2 | 180 | 0 | C+ | 10 | partially_verified |
| CB | 슈테판 라이나르츠 | Stefan Reinartz | Bayer 04 Leverkusen | 1989-01-01 | 주전급 | 31 | 29 | 2637 | 2 | B+ | 6 | partially_verified |
| CB | 사미 휘피애 | Sami Hyypiä | Bayer 04 Leverkusen | 1973-10-07 | 주전급 | 21 | 20 | 1668 | 1 | B+ | 12 | partially_verified |
| CB | 마누엘 프리드리히 | Manuel Friedrich | Bayer 04 Leverkusen | 1979-09-13 | 주전급 | 19 | 17 | 1457 | 0 | B+ | 13 | partially_verified |
| LB | 미할 카들레츠 | Michal Kadlec | Bayer 04 Leverkusen | 1984-12-13 | 주전급 | 32 | 30 | 2647 | 2 | B+ | 4 | partially_verified |
| RB | 곤살로 카스트로 | Gonzalo Castro | Bayer 04 Leverkusen | 1987-06-11 | 주전급 | 23 | 19 | 1712 | 3 | A- | 3 | partially_verified |
| RB | 다니엘 슈바프 | Daniel Schwaab | Bayer 04 Leverkusen | 1988-08-23 | 주전급 | 30 | 28 | 2453 | 0 | B+ | 5 | partially_verified |
| DM | 지몬 롤페스 | Simon Rolfes | Bayer 04 Leverkusen | 1982-01-21 | 주전급 | 28 | 21 | 1899 | 5 | B+ | 5 | partially_verified |
| DM | 하노 발리치 | Hanno Balitsch | Bayer 04 Leverkusen | 1981-01-02 | 후보 | 24 | 9 | 897 | 3 | B0 | 12 | partially_verified |
| CM | 아르투로 비달 | Arturo Vidal | Bayer 04 Leverkusen | 1987-05-22 | 주전급 | 33 | 31 | 2708 | 10 | A+ | 2 | partially_verified |
| CM | 라르스 벤더 | Lars Bender | Bayer 04 Leverkusen | 1989-04-27 | 주전급 | 27 | 10 | 1201 | 3 | B+ | 7 | partially_verified |
| CM | 미하엘 발라크 | Michael Ballack | Bayer 04 Leverkusen | 1976-09-26 | 주전급 | 17 | 13 | 1174 | 0 | B0 | 9 | partially_verified |
| CAM | 헤나투 아우구스투 | Renato Augusto | Bayer 04 Leverkusen | 1988-02-08 | 주전급 | 27 | 26 | 2219 | 7 | A0 | 3 | partially_verified |
| LW | 트란퀼로 바르네타 | Tranquillo Barnetta | Bayer 04 Leverkusen | 1985-05-22 | 주전급 | 24 | 19 | 1514 | 2 | B+ | 5 | partially_verified |
| RW | 시드니 샘 | Sidney Sam | Bayer 04 Leverkusen | 1988-01-31 | 주전급 | 30 | 26 | 2167 | 7 | B+ | 3 | partially_verified |
| ST | 에렌 데르디요크 | Eren Derdiyok | Bayer 04 Leverkusen | 1988-06-12 | 주전급 | 32 | 18 | 1950 | 6 | B+ | 7 | partially_verified |
| ST | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 | 주전급 | 22 | 15 | 1344 | 7 | B+ | 10 | partially_verified |
| ST | 파트리크 헬메스 | Patrick Helmes | Bayer 04 Leverkusen | 1984-03-01 | 후보 | 11 | 8 | 700 | 5 | B0 | 14 | partially_verified |

### FC Bayern München (20명)

- [2010-11 BDFutbol 리그 명단](https://www.bdfutbol.com/en/t/t2010-111016.html) · [2010-11 DFB 구단 기록](https://datencenter.dfb.de/en/bundesliga/2010-2011/team/bayern-munich)

| POS | 한글 이름 | 원어명 | 당시 구단 원어명 | 생년월일 | 주전/후보 | 경기 | 선발 | 분 | 골 | 티어 | 포지션 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 한스외르크 부트 | Hans-Jörg Butt | FC Bayern München | 1974-05-28 | 주전급 | 23 | 22 | 2024 | 0 | B0 | 6 | partially_verified |
| GK | 토마스 크라프트 | Thomas Kraft | FC Bayern München | 1988-07-22 | 주전급 | 12 | 12 | 1036 | 0 | B0 | 8 | partially_verified |
| CB | 아나톨리 티모슈크 | Anatoliy Tymoshchuk | FC Bayern München | 1979-03-30 | 주전급 | 26 | 23 | 1994 | 3 | B+ | 10 | partially_verified |
| CB | 홀거 바트슈투버 | Holger Badstuber | FC Bayern München | 1989-03-13 | 주전급 | 23 | 21 | 1846 | 0 | B+ | 11 | partially_verified |
| CB | 다니엘 판 바위턴 | Daniel van Buyten | FC Bayern München | 1978-02-07 | 주전급 | 21 | 18 | 1603 | 2 | B0 | 15 | partially_verified |
| CB | 브레누 | Breno | FC Bayern München | 1989-10-13 | 후보 | 13 | 7 | 731 | 0 | B- | 20 | partially_verified |
| LB | 다니엘 프라니치 | Danijel Pranjić | FC Bayern München | 1981-12-02 | 주전급 | 28 | 22 | 1995 | 0 | B0 | 5 | partially_verified |
| LB | 디에고 콘텐토 | Diego Contento | FC Bayern München | 1990-05-01 | 주전급 | 14 | 12 | 1110 | 0 | B0 | 8 | partially_verified |
| RB | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | 주전급 | 34 | 34 | 3060 | 3 | A+ | 1 | partially_verified |
| DM | 루이스 구스타부 | Luiz Gustavo | FC Bayern München | 1987-07-23 | 주전급 | 14 | 13 | 1077 | 1 | B+ | 6 | partially_verified |
| DM | 마르크 판 보멀 | Mark van Bommel | FC Bayern München | 1977-04-22 | 주전급 | 13 | 12 | 1089 | 0 | B+ | 7 | partially_verified |
| DM | 안드레아스 오틀 | Andreas Ottl | FC Bayern München | 1985-03-01 | 주전급 | 15 | 9 | 913 | 0 | B0 | 11 | partially_verified |
| CM | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | 주전급 | 32 | 31 | 2728 | 4 | A+ | 1 | partially_verified |
| CM | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 | 주전급 | 27 | 19 | 1727 | 1 | B+ | 5 | partially_verified |
| CAM | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | 주전급 | 34 | 32 | 2795 | 12 | A+ | 1 | partially_verified |
| LW | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | 주전급 | 25 | 22 | 1964 | 7 | A+ | 1 | partially_verified |
| RW | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | 주전급 | 14 | 13 | 1133 | 12 | A+ | 1 | partially_verified |
| RW | 하미트 알튼토프 | Hamit Altıntop | FC Bayern München | 1982-12-08 | 후보 | 14 | 8 | 729 | 2 | B0 | 8 | partially_verified |
| ST | 마리오 고메스 | Mario Gómez | FC Bayern München | 1985-07-10 | 주전급 | 32 | 27 | 2444 | 28 | S | 1 | partially_verified |
| ST | 미로슬라프 클로제 | Miroslav Klose | FC Bayern München | 1978-06-09 | 후보 | 20 | 9 | 873 | 1 | B- | 15 | partially_verified |

### Hannover 96 (17명)

- [2010-11 BDFutbol 리그 명단](https://www.bdfutbol.com/en/t/t2010-111012.html) · [2010-11 DFB 구단 기록](https://datencenter.dfb.de/competitions/bundesliga/seasons/2010-2011/teams/hannover-96)

| POS | 한글 이름 | 원어명 | 당시 구단 원어명 | 생년월일 | 주전/후보 | 경기 | 선발 | 분 | 골 | 티어 | 포지션 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 론로베르트 칠러 | Ron-Robert Zieler | Hannover 96 | 1989-02-12 | 주전급 | 15 | 15 | 1312 | 0 | B+ | 4 | partially_verified |
| GK | 플로리안 프롬로비츠 | Florian Fromlowitz | Hannover 96 | 1986-07-02 | 주전급 | 20 | 19 | 1748 | 0 | B0 | 7 | partially_verified |
| CB | 에마누엘 포가테츠 | Emanuel Pogatetz | Hannover 96 | 1983-01-16 | 주전급 | 28 | 28 | 2435 | 0 | B+ | 7 | partially_verified |
| CB | 카림 하귀 | Karim Haggui | Hannover 96 | 1984-01-20 | 주전급 | 25 | 25 | 2227 | 1 | B+ | 9 | partially_verified |
| CB | 마리오 에기만 | Mario Eggimann | Hannover 96 | 1981-01-24 | 후보 | 12 | 7 | 639 | 0 | B0 | 18 | partially_verified |
| LB | 크리스티안 슐츠 | Christian Schulz | Hannover 96 | 1983-04-01 | 주전급 | 33 | 33 | 2941 | 4 | B+ | 3 | partially_verified |
| LB | 콩스탕 자크파 | Constant Djakpa | Hannover 96 | 1986-10-17 | 후보 | 14 | 5 | 605 | 0 | B- | 10 | partially_verified |
| RB | 스티븐 체룬돌로 | Steven Cherundolo | Hannover 96 | 1979-02-19 | 주전급 | 33 | 33 | 2875 | 0 | B+ | 4 | partially_verified |
| RB | 소피안 샤헤트 | Sofian Chahed | Hannover 96 | 1983-04-18 | 후보 | 18 | 2 | 421 | 0 | C+ | 9 | partially_verified |
| DM | 마누엘 슈미데바흐 | Manuel Schmiedebach | Hannover 96 | 1988-12-05 | 주전급 | 32 | 31 | 2648 | 0 | B+ | 3 | partially_verified |
| CM | 세르지우 핀투 | Sérgio Pinto | Hannover 96 | 1980-10-16 | 주전급 | 31 | 31 | 2619 | 5 | B+ | 3 | partially_verified |
| LW | 콘스탄틴 라우슈 | Konstantin Rausch | Hannover 96 | 1990-03-15 | 주전급 | 34 | 34 | 2843 | 5 | B+ | 3 | partially_verified |
| RW | 라르스 슈틴들 | Lars Stindl | Hannover 96 | 1988-08-26 | 주전급 | 33 | 23 | 2229 | 2 | B+ | 4 | partially_verified |
| RW | 모리츠 슈토펠캄프 | Moritz Stoppelkamp | Hannover 96 | 1986-12-11 | 주전급 | 23 | 10 | 1028 | 0 | B0 | 7 | partially_verified |
| ST | 디디에 야 코난 | Didier Ya Konan | Hannover 96 | 1984-05-22 | 주전급 | 28 | 28 | 2461 | 14 | A- | 4 | partially_verified |
| ST | 모하메드 압델라웨 | Mohammed Abdellaoue | Hannover 96 | 1985-10-23 | 주전급 | 26 | 26 | 2098 | 10 | B+ | 5 | partially_verified |
| ST | 얀 슐라우드라프 | Jan Schlaudraff | Hannover 96 | 1983-07-18 | 주전급 | 21 | 16 | 1369 | 4 | B0 | 11 | partially_verified |

### 1.FSV Mainz 05 (20명)

- [2010-11 BDFutbol 리그 명단](https://www.bdfutbol.com/en/t/t2010-111013.html) · [2010-11 DFB 구단 기록](https://datencenter.dfb.de/en/competitions/bundesliga/seasons/2010-2011/teams/1-fsv-mainz-05)

| POS | 한글 이름 | 원어명 | 당시 구단 원어명 | 생년월일 | 주전/후보 | 경기 | 선발 | 분 | 골 | 티어 | 포지션 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 크리스티안 베트클로 | Christian Wetklo | 1.FSV Mainz 05 | 1980-01-11 | 주전급 | 24 | 24 | 2095 | 0 | B0 | 5 | partially_verified |
| GK | 하인츠 뮐러 | Heinz Müller | 1.FSV Mainz 05 | 1978-05-30 | 주전급 | 10 | 10 | 900 | 0 | B0 | 9 | partially_verified |
| CB | 니콜체 노베스키 | Nikolče Noveski | 1.FSV Mainz 05 | 1979-04-28 | 주전급 | 32 | 32 | 2788 | 2 | B+ | 4 | partially_verified |
| CB | 니코 붕게르트 | Niko Bungert | 1.FSV Mainz 05 | 1986-10-24 | 주전급 | 28 | 26 | 2275 | 1 | B+ | 8 | partially_verified |
| CB | 보 스벤손 | Bo Svensson | 1.FSV Mainz 05 | 1979-08-04 | 주전급 | 19 | 19 | 1684 | 0 | B0 | 14 | partially_verified |
| CB | 얀 키르히호프 | Jan Kirchhoff | 1.FSV Mainz 05 | 1990-10-01 | 후보 | 10 | 8 | 760 | 0 | B0 | 17 | partially_verified |
| LB | 크리스티안 푹스 | Christian Fuchs | 1.FSV Mainz 05 | 1986-04-07 | 주전급 | 31 | 30 | 2647 | 0 | A0 | 2 | partially_verified |
| LB | 말리크 파티 | Malik Fathi | 1.FSV Mainz 05 | 1983-10-29 | 주전급 | 19 | 17 | 1407 | 0 | B0 | 7 | partially_verified |
| RB | 라도슬라프 자바브니크 | Radoslav Zabavník | 1.FSV Mainz 05 | 1980-09-16 | 주전급 | 20 | 18 | 1627 | 0 | B0 | 7 | partially_verified |
| DM | 오이겐 폴란스키 | Eugen Polanski | 1.FSV Mainz 05 | 1986-03-17 | 주전급 | 28 | 25 | 2212 | 0 | B+ | 4 | partially_verified |
| DM | 미로슬라프 카르한 | Miroslav Karhan | 1.FSV Mainz 05 | 1976-06-21 | 후보 | 13 | 9 | 826 | 0 | B0 | 13 | partially_verified |
| CM | 엘킨 소토 | Elkin Soto | 1.FSV Mainz 05 | 1980-08-04 | 주전급 | 26 | 21 | 1904 | 4 | B+ | 4 | partially_verified |
| CM | 마르코 칼리주리 | Marco Caligiuri | 1.FSV Mainz 05 | 1984-04-14 | 주전급 | 22 | 17 | 1618 | 1 | B0 | 8 | partially_verified |
| CAM | 루이스 홀트비 | Lewis Holtby | 1.FSV Mainz 05 | 1990-09-18 | 주전급 | 30 | 23 | 2024 | 4 | A- | 5 | partially_verified |
| CAM | 안드레아스 이반시츠 | Andreas Ivanschitz | 1.FSV Mainz 05 | 1983-10-15 | 주전급 | 20 | 13 | 1020 | 3 | B0 | 6 | partially_verified |
| LW | 안드레 쉬를레 | André Schürrle | 1.FSV Mainz 05 | 1990-11-06 | 주전급 | 33 | 26 | 2479 | 15 | A0 | 2 | partially_verified |
| RW | 마르첼 리세 | Marcel Risse | 1.FSV Mainz 05 | 1989-12-17 | 주전급 | 25 | 12 | 1282 | 2 | B0 | 6 | partially_verified |
| RW | 플로리안 헬러 | Florian Heller | 1.FSV Mainz 05 | 1982-03-10 | 후보 | 19 | 7 | 643 | 1 | B- | 9 | partially_verified |
| ST | 사미 알라기 | Sami Allagui | 1.FSV Mainz 05 | 1986-05-28 | 주전급 | 28 | 18 | 1570 | 10 | B+ | 8 | partially_verified |
| ST | 아담 설러이 | Ádám Szalai | 1.FSV Mainz 05 | 1987-12-09 | 주전급 | 20 | 14 | 1280 | 4 | B0 | 13 | partially_verified |

### FC Schalke 04 (19명)

- [2010-11 BDFutbol 리그 명단](https://www.bdfutbol.com/en/t/t2010-111006.html) · [2010-11 DFB 구단 기록](https://datencenter.dfb.de/en/bundesliga/2010-2011/team/fc-schalke-04)

| POS | 한글 이름 | 원어명 | 당시 구단 원어명 | 생년월일 | 주전/후보 | 경기 | 선발 | 분 | 골 | 티어 | 포지션 순위 | 검증 상태 |
|---|---|---|---|---|---|---:|---:|---:|---:|---|---:|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 | 1986-03-27 | 주전급 | 34 | 34 | 3060 | 0 | S | 1 | partially_verified |
| CB | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | 주전급 | 30 | 30 | 2594 | 1 | A- | 3 | partially_verified |
| CB | 크리스토프 메첼더 | Christoph Metzelder | FC Schalke 04 | 1980-11-05 | 주전급 | 32 | 32 | 2690 | 1 | B+ | 5 | partially_verified |
| CB | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | FC Schalke 04 | 1992-02-23 | 주전급 | 18 | 10 | 980 | 0 | B0 | 16 | partially_verified |
| LB | 루카스 슈미츠 | Lukas Schmitz | FC Schalke 04 | 1988-10-13 | 주전급 | 23 | 21 | 1865 | 0 | B0 | 6 | partially_verified |
| LB | 한스 사르페이 | Hans Sarpei | FC Schalke 04 | 1976-06-28 | 후보 | 9 | 6 | 565 | 0 | B- | 9 | partially_verified |
| RB | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | 주전급 | 26 | 24 | 2149 | 0 | B+ | 6 | partially_verified |
| DM | 페어 클루게 | Peer Kluge | FC Schalke 04 | 1980-11-22 | 주전급 | 22 | 18 | 1558 | 1 | B0 | 8 | partially_verified |
| DM | 조엘 마티프 | Joel Matip | FC Schalke 04 | 1991-08-08 | 주전급 | 26 | 14 | 1481 | 0 | B0 | 9 | partially_verified |
| DM | 저메인 존스 | Jermaine Jones | FC Schalke 04 | 1981-11-03 | 주전급 | 10 | 10 | 743 | 1 | B0 | 10 | partially_verified |
| DM | 앤서니 아난 | Anthony Annan | FC Schalke 04 | 1986-07-21 | 주전급 | 9 | 8 | 694 | 0 | B0 | 14 | partially_verified |
| DM | 크리스토프 모리츠 | Christoph Moritz | FC Schalke 04 | 1990-01-27 | 후보 | 12 | 8 | 728 | 0 | B- | 15 | partially_verified |
| CM | 이반 라키티치 | Ivan Rakitić | FC Schalke 04 | 1988-03-10 | 주전급 | 16 | 14 | 1213 | 1 | B+ | 6 | partially_verified |
| LW | 호세 마누엘 후라도 | José Manuel Jurado | FC Schalke 04 | 1986-06-29 | 주전급 | 28 | 21 | 1791 | 3 | B0 | 6 | partially_verified |
| LW | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | 후보 | 15 | 3 | 501 | 1 | C+ | 7 | partially_verified |
| RW | 제페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | 주전급 | 28 | 26 | 2338 | 3 | A- | 2 | partially_verified |
| ST | 라울 곤살레스 | Raúl González | FC Schalke 04 | 1977-06-27 | 주전급 | 34 | 34 | 2895 | 13 | A0 | 3 | partially_verified |
| ST | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | 주전급 | 24 | 22 | 1988 | 8 | B+ | 6 | partially_verified |
| ST | 에두 | Edu | FC Schalke 04 | 1981-11-30 | 주전급 | 28 | 15 | 1449 | 3 | B0 | 12 | partially_verified |

## E. 전 포지션 통합 순위

모든 구단의 선수들을 포지션별로 합쳤다. 동일 티어 내 순위도 존재하지만 3시즌 경기력·실전 역할 전수 확인 전까지 **잠정**이다.

### GK — 11명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 마누엘 노이어 / Manuel Neuer | FC Schalke 04 | 주전 | S | 34 | 0 |
| 2 | 로만 바이덴펠러 / Roman Weidenfeller | BV 09 Borussia Dortmund | 주전 | A0 | 33 | 0 |
| 3 | 레네 아들러 / René Adler | Bayer 04 Leverkusen | 주전 | A0 | 32 | 0 |
| 4 | 론로베르트 칠러 / Ron-Robert Zieler | Hannover 96 | 주전 | B+ | 15 | 0 |
| 5 | 크리스티안 베트클로 / Christian Wetklo | 1.FSV Mainz 05 | 주전 | B0 | 24 | 0 |
| 6 | 한스외르크 부트 / Hans-Jörg Butt | FC Bayern München | 주전 | B0 | 23 | 0 |
| 7 | 플로리안 프롬로비츠 / Florian Fromlowitz | Hannover 96 | 주전 | B0 | 20 | 0 |
| 8 | 토마스 크라프트 / Thomas Kraft | FC Bayern München | 주전 | B0 | 12 | 0 |
| 9 | 하인츠 뮐러 / Heinz Müller | 1.FSV Mainz 05 | 주전 | B0 | 10 | 0 |
| 10 | 파비안 기퍼 / Fabian Giefer | Bayer 04 Leverkusen | 후보 | C+ | 2 | 0 |
| 11 | 미첼 랑게라크 / Mitchell Langerak | BV 09 Borussia Dortmund | 후보 | C+ | 1 | 0 |

### CB — 20명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 마츠 훔멜스 / Mats Hummels | BV 09 Borussia Dortmund | 주전 | A+ | 32 | 5 |
| 2 | 네벤 수보티치 / Neven Subotić | BV 09 Borussia Dortmund | 주전 | A0 | 31 | 1 |
| 3 | 베네딕트 회베데스 / Benedikt Höwedes | FC Schalke 04 | 주전 | A- | 30 | 1 |
| 4 | 니콜체 노베스키 / Nikolče Noveski | 1.FSV Mainz 05 | 주전 | B+ | 32 | 2 |
| 5 | 크리스토프 메첼더 / Christoph Metzelder | FC Schalke 04 | 주전 | B+ | 32 | 1 |
| 6 | 슈테판 라이나르츠 / Stefan Reinartz | Bayer 04 Leverkusen | 주전 | B+ | 31 | 2 |
| 7 | 에마누엘 포가테츠 / Emanuel Pogatetz | Hannover 96 | 주전 | B+ | 28 | 0 |
| 8 | 니코 붕게르트 / Niko Bungert | 1.FSV Mainz 05 | 주전 | B+ | 28 | 1 |
| 9 | 카림 하귀 / Karim Haggui | Hannover 96 | 주전 | B+ | 25 | 1 |
| 10 | 아나톨리 티모슈크 / Anatoliy Tymoshchuk | FC Bayern München | 주전 | B+ | 26 | 3 |
| 11 | 홀거 바트슈투버 / Holger Badstuber | FC Bayern München | 주전 | B+ | 23 | 0 |
| 12 | 사미 휘피애 / Sami Hyypiä | Bayer 04 Leverkusen | 주전 | B+ | 21 | 1 |
| 13 | 마누엘 프리드리히 / Manuel Friedrich | Bayer 04 Leverkusen | 주전 | B+ | 19 | 0 |
| 14 | 보 스벤손 / Bo Svensson | 1.FSV Mainz 05 | 주전 | B0 | 19 | 0 |
| 15 | 다니엘 판 바위턴 / Daniel van Buyten | FC Bayern München | 주전 | B0 | 21 | 2 |
| 16 | 키리아코스 파파도풀로스 / Kyriakos Papadopoulos | FC Schalke 04 | 주전 | B0 | 18 | 0 |
| 17 | 얀 키르히호프 / Jan Kirchhoff | 1.FSV Mainz 05 | 후보 | B0 | 10 | 0 |
| 18 | 마리오 에기만 / Mario Eggimann | Hannover 96 | 후보 | B0 | 12 | 0 |
| 19 | 펠리피 산타나 / Felipe Santana | BV 09 Borussia Dortmund | 후보 | B0 | 13 | 0 |
| 20 | 브레누 / Breno | FC Bayern München | 후보 | B- | 13 | 0 |

### LB — 10명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 마르첼 슈멜처 / Marcel Schmelzer | BV 09 Borussia Dortmund | 주전 | A0 | 34 | 0 |
| 2 | 크리스티안 푹스 / Christian Fuchs | 1.FSV Mainz 05 | 주전 | A0 | 31 | 0 |
| 3 | 크리스티안 슐츠 / Christian Schulz | Hannover 96 | 주전 | B+ | 33 | 4 |
| 4 | 미할 카들레츠 / Michal Kadlec | Bayer 04 Leverkusen | 주전 | B+ | 32 | 2 |
| 5 | 다니엘 프라니치 / Danijel Pranjić | FC Bayern München | 주전 | B0 | 28 | 0 |
| 6 | 루카스 슈미츠 / Lukas Schmitz | FC Schalke 04 | 주전 | B0 | 23 | 0 |
| 7 | 말리크 파티 / Malik Fathi | 1.FSV Mainz 05 | 주전 | B0 | 19 | 0 |
| 8 | 디에고 콘텐토 / Diego Contento | FC Bayern München | 주전 | B0 | 14 | 0 |
| 9 | 한스 사르페이 / Hans Sarpei | FC Schalke 04 | 후보 | B- | 9 | 0 |
| 10 | 콩스탕 자크파 / Constant Djakpa | Hannover 96 | 후보 | B- | 14 | 0 |

### RB — 9명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 필리프 람 / Philipp Lahm | FC Bayern München | 주전 | A+ | 34 | 3 |
| 2 | 우카시 피슈체크 / Łukasz Piszczek | BV 09 Borussia Dortmund | 주전 | A0 | 33 | 0 |
| 3 | 곤살로 카스트로 / Gonzalo Castro | Bayer 04 Leverkusen | 주전 | A- | 23 | 3 |
| 4 | 스티븐 체룬돌로 / Steven Cherundolo | Hannover 96 | 주전 | B+ | 33 | 0 |
| 5 | 다니엘 슈바프 / Daniel Schwaab | Bayer 04 Leverkusen | 주전 | B+ | 30 | 0 |
| 6 | 우치다 아쓰토 / Atsuto Uchida | FC Schalke 04 | 주전 | B+ | 26 | 0 |
| 7 | 라도슬라프 자바브니크 / Radoslav Zabavník | 1.FSV Mainz 05 | 주전 | B0 | 20 | 0 |
| 8 | 파트리크 오보모옐라 / Patrick Owomoyela | BV 09 Borussia Dortmund | 후보 | C+ | 6 | 0 |
| 9 | 소피안 샤헤트 / Sofian Chahed | Hannover 96 | 후보 | C+ | 18 | 0 |

### DM — 15명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 누리 샤힌 / Nuri Şahin | BV 09 Borussia Dortmund | 주전 | S | 30 | 6 |
| 2 | 스벤 벤더 / Sven Bender | BV 09 Borussia Dortmund | 주전 | A0 | 31 | 1 |
| 3 | 마누엘 슈미데바흐 / Manuel Schmiedebach | Hannover 96 | 주전 | B+ | 32 | 0 |
| 4 | 오이겐 폴란스키 / Eugen Polanski | 1.FSV Mainz 05 | 주전 | B+ | 28 | 0 |
| 5 | 지몬 롤페스 / Simon Rolfes | Bayer 04 Leverkusen | 주전 | B+ | 28 | 5 |
| 6 | 루이스 구스타부 / Luiz Gustavo | FC Bayern München | 주전 | B+ | 14 | 1 |
| 7 | 마르크 판 보멀 / Mark van Bommel | FC Bayern München | 주전 | B+ | 13 | 0 |
| 8 | 페어 클루게 / Peer Kluge | FC Schalke 04 | 주전 | B0 | 22 | 1 |
| 9 | 조엘 마티프 / Joel Matip | FC Schalke 04 | 주전 | B0 | 26 | 0 |
| 10 | 저메인 존스 / Jermaine Jones | FC Schalke 04 | 주전 | B0 | 10 | 1 |
| 11 | 안드레아스 오틀 / Andreas Ottl | FC Bayern München | 주전 | B0 | 15 | 0 |
| 12 | 하노 발리치 / Hanno Balitsch | Bayer 04 Leverkusen | 후보 | B0 | 24 | 3 |
| 13 | 미로슬라프 카르한 / Miroslav Karhan | 1.FSV Mainz 05 | 후보 | B0 | 13 | 0 |
| 14 | 앤서니 아난 / Anthony Annan | FC Schalke 04 | 주전 | B0 | 9 | 0 |
| 15 | 크리스토프 모리츠 / Christoph Moritz | FC Schalke 04 | 후보 | B- | 12 | 0 |

### CM — 10명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 바스티안 슈바인슈타이거 / Bastian Schweinsteiger | FC Bayern München | 주전 | A+ | 32 | 4 |
| 2 | 아르투로 비달 / Arturo Vidal | Bayer 04 Leverkusen | 주전 | A+ | 33 | 10 |
| 3 | 세르지우 핀투 / Sérgio Pinto | Hannover 96 | 주전 | B+ | 31 | 5 |
| 4 | 엘킨 소토 / Elkin Soto | 1.FSV Mainz 05 | 주전 | B+ | 26 | 4 |
| 5 | 토니 크로스 / Toni Kroos | FC Bayern München | 주전 | B+ | 27 | 1 |
| 6 | 이반 라키티치 / Ivan Rakitić | FC Schalke 04 | 주전 | B+ | 16 | 1 |
| 7 | 라르스 벤더 / Lars Bender | Bayer 04 Leverkusen | 주전 | B+ | 27 | 3 |
| 8 | 마르코 칼리주리 / Marco Caligiuri | 1.FSV Mainz 05 | 주전 | B0 | 22 | 1 |
| 9 | 미하엘 발라크 / Michael Ballack | Bayer 04 Leverkusen | 주전 | B0 | 17 | 0 |
| 10 | 안토니우 다 시우바 / Antonio da Silva | BV 09 Borussia Dortmund | 후보 | B- | 22 | 1 |

### CAM — 6명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 토마스 뮐러 / Thomas Müller | FC Bayern München | 주전 | A+ | 34 | 12 |
| 2 | 마리오 괴체 / Mario Götze | BV 09 Borussia Dortmund | 주전 | A+ | 33 | 6 |
| 3 | 헤나투 아우구스투 / Renato Augusto | Bayer 04 Leverkusen | 주전 | A0 | 27 | 7 |
| 4 | 가가와 신지 / Shinji Kagawa | BV 09 Borussia Dortmund | 주전 | A0 | 18 | 8 |
| 5 | 루이스 홀트비 / Lewis Holtby | 1.FSV Mainz 05 | 주전 | A- | 30 | 4 |
| 6 | 안드레아스 이반시츠 / Andreas Ivanschitz | 1.FSV Mainz 05 | 주전 | B0 | 20 | 3 |

### LW — 7명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 프랑크 리베리 / Franck Ribéry | FC Bayern München | 주전 | A+ | 25 | 7 |
| 2 | 안드레 쉬를레 / André Schürrle | 1.FSV Mainz 05 | 주전 | A0 | 33 | 15 |
| 3 | 콘스탄틴 라우슈 / Konstantin Rausch | Hannover 96 | 주전 | B+ | 34 | 5 |
| 4 | 케빈 그로스크로이츠 / Kevin Großkreutz | BV 09 Borussia Dortmund | 주전 | B+ | 34 | 8 |
| 5 | 트란퀼로 바르네타 / Tranquillo Barnetta | Bayer 04 Leverkusen | 주전 | B+ | 24 | 2 |
| 6 | 호세 마누엘 후라도 / José Manuel Jurado | FC Schalke 04 | 주전 | B0 | 28 | 3 |
| 7 | 율리안 드락슬러 / Julian Draxler | FC Schalke 04 | 후보 | C+ | 15 | 1 |

### RW — 9명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 아르연 로번 / Arjen Robben | FC Bayern München | 주전 | A+ | 14 | 12 |
| 2 | 제페르손 파르판 / Jefferson Farfán | FC Schalke 04 | 주전 | A- | 28 | 3 |
| 3 | 시드니 샘 / Sidney Sam | Bayer 04 Leverkusen | 주전 | B+ | 30 | 7 |
| 4 | 라르스 슈틴들 / Lars Stindl | Hannover 96 | 주전 | B+ | 33 | 2 |
| 5 | 야쿠프 브와슈치코프스키 / Jakub Błaszczykowski | BV 09 Borussia Dortmund | 주전 | B+ | 29 | 3 |
| 6 | 마르첼 리세 / Marcel Risse | 1.FSV Mainz 05 | 주전 | B0 | 25 | 2 |
| 7 | 모리츠 슈토펠캄프 / Moritz Stoppelkamp | Hannover 96 | 주전 | B0 | 23 | 0 |
| 8 | 하미트 알튼토프 / Hamit Altıntop | FC Bayern München | 후보 | B0 | 14 | 2 |
| 9 | 플로리안 헬러 / Florian Heller | 1.FSV Mainz 05 | 후보 | B- | 19 | 1 |

### ST — 15명

| 순위 | 한글명 / 원어명 | 소속 원어명 | 주전/후보 | 티어 | 출전 | 골 |
|---:|---|---|---|---|---:|---:|
| 1 | 마리오 고메스 / Mario Gómez | FC Bayern München | 주전 | S | 32 | 28 |
| 2 | 루카스 바리오스 / Lucas Barrios | BV 09 Borussia Dortmund | 주전 | A+ | 32 | 16 |
| 3 | 라울 곤살레스 / Raúl González | FC Schalke 04 | 주전 | A0 | 34 | 13 |
| 4 | 디디에 야 코난 / Didier Ya Konan | Hannover 96 | 주전 | A- | 28 | 14 |
| 5 | 모하메드 압델라웨 / Mohammed Abdellaoue | Hannover 96 | 주전 | B+ | 26 | 10 |
| 6 | 클라스얀 휜텔라르 / Klaas-Jan Huntelaar | FC Schalke 04 | 주전 | B+ | 24 | 8 |
| 7 | 에렌 데르디요크 / Eren Derdiyok | Bayer 04 Leverkusen | 주전 | B+ | 32 | 6 |
| 8 | 사미 알라기 / Sami Allagui | 1.FSV Mainz 05 | 주전 | B+ | 28 | 10 |
| 9 | 로베르트 레반도프스키 / Robert Lewandowski | BV 09 Borussia Dortmund | 주전 | B+ | 33 | 8 |
| 10 | 슈테판 키슬링 / Stefan Kießling | Bayer 04 Leverkusen | 주전 | B+ | 22 | 7 |
| 11 | 얀 슐라우드라프 / Jan Schlaudraff | Hannover 96 | 주전 | B0 | 21 | 4 |
| 12 | 에두 / Edu | FC Schalke 04 | 주전 | B0 | 28 | 3 |
| 13 | 아담 설러이 / Ádám Szalai | 1.FSV Mainz 05 | 주전 | B0 | 20 | 4 |
| 14 | 파트리크 헬메스 / Patrick Helmes | Bayer 04 Leverkusen | 후보 | B0 | 11 | 5 |
| 15 | 미로슬라프 클로제 / Miroslav Klose | FC Bayern München | 후보 | B- | 20 | 1 |

## F. World Class (S/A+) 및 League Top Class (S/A+/A0/A-)

### World Class 전체

| POS | 선수 | 구단 | 티어 | 포지션 순위 |
|---|---|---|---|---:|
| GK | 마누엘 노이어 (Manuel Neuer) | FC Schalke 04 | S | 1 |
| CB | 마츠 훔멜스 (Mats Hummels) | BV 09 Borussia Dortmund | A+ | 1 |
| RB | 필리프 람 (Philipp Lahm) | FC Bayern München | A+ | 1 |
| DM | 누리 샤힌 (Nuri Şahin) | BV 09 Borussia Dortmund | S | 1 |
| CM | 바스티안 슈바인슈타이거 (Bastian Schweinsteiger) | FC Bayern München | A+ | 1 |
| CM | 아르투로 비달 (Arturo Vidal) | Bayer 04 Leverkusen | A+ | 2 |
| CAM | 토마스 뮐러 (Thomas Müller) | FC Bayern München | A+ | 1 |
| CAM | 마리오 괴체 (Mario Götze) | BV 09 Borussia Dortmund | A+ | 2 |
| LW | 프랑크 리베리 (Franck Ribéry) | FC Bayern München | A+ | 1 |
| RW | 아르연 로번 (Arjen Robben) | FC Bayern München | A+ | 1 |
| ST | 마리오 고메스 (Mario Gómez) | FC Bayern München | S | 1 |
| ST | 루카스 바리오스 (Lucas Barrios) | BV 09 Borussia Dortmund | A+ | 2 |

### League Top Class 전체

| POS | 선수 | 구단 | 티어 | 포지션 순위 |
|---|---|---|---|---:|
| GK | 마누엘 노이어 (Manuel Neuer) | FC Schalke 04 | S | 1 |
| GK | 로만 바이덴펠러 (Roman Weidenfeller) | BV 09 Borussia Dortmund | A0 | 2 |
| GK | 레네 아들러 (René Adler) | Bayer 04 Leverkusen | A0 | 3 |
| CB | 마츠 훔멜스 (Mats Hummels) | BV 09 Borussia Dortmund | A+ | 1 |
| CB | 네벤 수보티치 (Neven Subotić) | BV 09 Borussia Dortmund | A0 | 2 |
| CB | 베네딕트 회베데스 (Benedikt Höwedes) | FC Schalke 04 | A- | 3 |
| LB | 마르첼 슈멜처 (Marcel Schmelzer) | BV 09 Borussia Dortmund | A0 | 1 |
| LB | 크리스티안 푹스 (Christian Fuchs) | 1.FSV Mainz 05 | A0 | 2 |
| RB | 필리프 람 (Philipp Lahm) | FC Bayern München | A+ | 1 |
| RB | 우카시 피슈체크 (Łukasz Piszczek) | BV 09 Borussia Dortmund | A0 | 2 |
| RB | 곤살로 카스트로 (Gonzalo Castro) | Bayer 04 Leverkusen | A- | 3 |
| DM | 누리 샤힌 (Nuri Şahin) | BV 09 Borussia Dortmund | S | 1 |
| DM | 스벤 벤더 (Sven Bender) | BV 09 Borussia Dortmund | A0 | 2 |
| CM | 바스티안 슈바인슈타이거 (Bastian Schweinsteiger) | FC Bayern München | A+ | 1 |
| CM | 아르투로 비달 (Arturo Vidal) | Bayer 04 Leverkusen | A+ | 2 |
| CAM | 토마스 뮐러 (Thomas Müller) | FC Bayern München | A+ | 1 |
| CAM | 마리오 괴체 (Mario Götze) | BV 09 Borussia Dortmund | A+ | 2 |
| CAM | 헤나투 아우구스투 (Renato Augusto) | Bayer 04 Leverkusen | A0 | 3 |
| CAM | 가가와 신지 (Shinji Kagawa) | BV 09 Borussia Dortmund | A0 | 4 |
| CAM | 루이스 홀트비 (Lewis Holtby) | 1.FSV Mainz 05 | A- | 5 |
| LW | 프랑크 리베리 (Franck Ribéry) | FC Bayern München | A+ | 1 |
| LW | 안드레 쉬를레 (André Schürrle) | 1.FSV Mainz 05 | A0 | 2 |
| RW | 아르연 로번 (Arjen Robben) | FC Bayern München | A+ | 1 |
| RW | 제페르손 파르판 (Jefferson Farfán) | FC Schalke 04 | A- | 2 |
| ST | 마리오 고메스 (Mario Gómez) | FC Bayern München | S | 1 |
| ST | 루카스 바리오스 (Lucas Barrios) | BV 09 Borussia Dortmund | A+ | 2 |
| ST | 라울 곤살레스 (Raúl González) | FC Schalke 04 | A0 | 3 |
| ST | 디디에 야 코난 (Didier Ya Konan) | Hannover 96 | A- | 4 |

## G. 리그 Best XI — 대표 4-2-3-1

**잠정 대표 포메이션:** `4-2-3-1`. 2010-11 분데스리가 전체 구단 최빈 포메이션 사용 빈도를 독립적으로 통계 확정하지 못해 대표형으로 표기한다.

| 전술 위치 | 선수 한글명 | 선수 원어명 | 구단 | 티어 | 실제 등록 포지션 | 개인 선정 근거(잠정) |
|---|---|---|---|---|---|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 | S | GK | 34경기 전 경기 선발(3060분). Kicker 기자단 선정 2011 독일 올해의 축구 선수(210점). 소속팀 리그 순위 대신 선방·빌드업 개인 기여로 S 잠정. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| RB | 필리프 람 | Philipp Lahm | FC Bayern München | A+ | RB | 2010-11 Bundesliga 34경기 34선발 3060분 3골. 현재 시즌 우선 잠정 A+ 평가; 이전 2008-09와 2009-10 개인기량 전수 독립 검증 대기. 팀 순위·우승 가산점 없음. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| CB | 마츠 훔멜스 | Mats Hummels | BV 09 Borussia Dortmund | A+ | CB | 32경기 32선발 5골, 센터백 빌드업과 수비 조율의 리그 최고 수준 개인 기여 잠정 A+. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| CB | 네벤 수보티치 | Neven Subotić | BV 09 Borussia Dortmund | A0 | CB | 2010-11 Bundesliga 31경기 31선발 2773분 1골. 현재 시즌 우선 잠정 A0 평가; 이전 2008-09와 2009-10 개인기량 전수 독립 검증 대기. 팀 순위·우승 가산점 없음. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| LB | 크리스티안 푹스 | Christian Fuchs | 1.FSV Mainz 05 | A0 | LB | 31경기 30선발, FBref 기준 도움 7개. 왼쪽 수비수의 공격 전개·크로스 기여가 높음. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| DM | 누리 샤힌 | Nuri Şahin | BV 09 Borussia Dortmund | S | DM | VDV 2010-11 올해의 선수(30.3% 득표). 30경기 30선발 6골 8도움, 깊은 더블 피벗의 플레이메이킹과 템포 조절. 최근 시즌 최우선 S 잠정; CM/DM 경기별 역할 빈도 재검증 필요. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| CM | 아르투로 비달 | Arturo Vidal | Bayer 04 Leverkusen | A+ | CM | 33경기 31선발 10골 9도움, 중앙 미드필더의 공수 왕복·공격 기여. 2008-09/2009-10 품질 재확인 대기. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| LW | 프랑크 리베리 | Franck Ribéry | FC Bayern München | A+ | LW | 2010-11 Bundesliga 25경기 22선발 1964분 7골. 현재 시즌 우선 잠정 A+ 평가; 이전 2008-09와 2009-10 개인기량 전수 독립 검증 대기. 팀 순위·우승 가산점 없음. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| CAM | 토마스 뮐러 | Thomas Müller | FC Bayern München | A+ | CAM | 34경기 32선발 12골 12도움, 직전 시즌 13골과 연결되는 공격 생산성. CAM/세컨드 스트라이커 역할 중심 잠정 A+. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| RW | 아르연 로번 | Arjen Robben | FC Bayern München | A+ | RW | 14경기 13선발 1133분에도 12골 9도움. 2009-10 16골을 보조 근거로 하되 2010-11 가동률 제한 때문에 A+ 잠정. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |
| ST | 마리오 고메스 | Mario Gómez | FC Bayern München | S | ST | 2010-11 32경기 27선발 28골, DFB 공식 득점왕. 2009-10 10골에서 크게 개선, 박스 안 마무리 가치로 S 잠정. 동포지션 개인 활약·전술 적합성에 기반한 잠정 비교. |

### 동시대 개인 평가와 교차 검증

- [VDV 2011 시즌 MVP 및 신인](https://www.focus.de/sport/fussball/bundesliga1/vdv-profis-waehlen-sahin-zum-spieler-der-saison-bundesliga_id_2147799.html): Nuri Şahin 30.3%, Mario Götze MVP 2위 및 신인 83.6%, Mario Gómez MVP 3위.
- [Kicker 독일 올해의 선수 2011 (UEFA)](https://www.uefa.com/news-media/news/01f3-0f863a2c828b-a0e89789baa0-1000--neuer-recognised-as-germany-s-best-player/): Manuel Neuer 210점, Mario Gómez 190점, Nuri Şahin 142점.
- [당시 Guardian Bundesliga 2011 Best XI](https://www.theguardian.com/football/blog/2011/jun/01/bundesliga-season-review-borussia-dortmund): Neuer, Hummels, Subotić, Fuchs, Robben, Şahin, Vidal, Gómez 등이 실전 시즌 베스트 선정에 등장. 11명 모두 소속 자격 검토 후 등록.
- [DFB 2010-11 득점왕](https://datencenter.dfb.de/en/people/mario-gomez/player/matches-in-season/bundesliga/2010-2011/bayern-munich): Mario Gómez 28골.
- 동시대 자료는 선수의 능력을 보강하는 자료이며, 3시즌 개인별 출전·포지션·경기력을 모두 직접 확인했다는 뜻이 아니다. 동일 포지션의 다른 경쟁 선수 대비 정성 평가 확정도 보류.

## H. 선수별 3시즌 근거 및 미검증 전수 목록

이 표의 '이전 DRAFT'는 기존 아카이브 기록을 연결한 것이지 **독립적인 검증 완료가 아니다**. 원출처를 직접 대조하지 않은 기록은 `verified`로 변경하지 않는다.

| 선수 (포지션) | 구단 | 2008-09 정보 | 2009-10 정보 | 2010-11 경기/선발/분/골 | 3시즌 평가 상태 | 미검증 사항 |
|---|---|---|---|---|---|---|
| 로만 바이덴펠러 (GK) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 30경기/0골 (독립 검증 전) | 33/33/2970/0 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 미첼 랑게라크 (GK) | BV 09 Borussia Dortmund | 미확인 (null) | 미확인 (null) | 1/1/90/0 | partially_verified / C+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마츠 훔멜스 (CB) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 30경기/5골 (독립 검증 전) | 32/32/2834/5 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 네벤 수보티치 (CB) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 34경기/3골 (독립 검증 전) | 31/31/2773/1 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 펠리피 산타나 (CB) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 25경기/0골 (독립 검증 전) | 13/5/523/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마르첼 슈멜처 (LB) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 28경기/0골 (독립 검증 전) | 34/34/3060/0 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 우카시 피슈체크 (RB) | BV 09 Borussia Dortmund | 아카이브 DRAFT 13경기/0골 (독립 검증 전) | 미확인 (null) | 33/29/2662/0 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 파트리크 오보모옐라 (RB) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 33경기/1골 (독립 검증 전) | 6/5/447/0 | partially_verified / C+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 누리 샤힌 (DM) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 33경기/4골 (독립 검증 전) | 30/30/2595/6 | partially_verified / S 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 스벤 벤더 (DM) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 19경기/0골 (독립 검증 전) | 31/29/2442/1 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 안토니우 다 시우바 (CM) | BV 09 Borussia Dortmund | 미확인 (null) | 미확인 (null) | 22/5/745/1 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마리오 괴체 (CAM) | BV 09 Borussia Dortmund | 미확인 (null) | 미확인 (null) | 33/29/2541/6 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 가가와 신지 (CAM) | BV 09 Borussia Dortmund | 미확인 (null) | 미확인 (null) | 18/17/1371/8 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 케빈 그로스크로이츠 (LW) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 32경기/5골 (독립 검증 전) | 34/32/2603/8 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 야쿠프 브와슈치코프스키 (RW) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 32경기/1골 (독립 검증 전) | 29/15/1525/3 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 루카스 바리오스 (ST) | BV 09 Borussia Dortmund | 미확인 (null) | 아카이브 DRAFT 33경기/19골 (독립 검증 전) | 32/29/2477/16 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 로베르트 레반도프스키 (ST) | BV 09 Borussia Dortmund | 미확인 (null) | 미확인 (null) | 33/15/1582/8 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 레네 아들러 (GK) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 31경기/0골 (독립 검증 전) | 32/32/2880/0 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 파비안 기퍼 (GK) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 3경기/0골 (독립 검증 전) | 2/2/180/0 | partially_verified / C+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 슈테판 라이나르츠 (CB) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 27경기/2골 (독립 검증 전) | 31/29/2637/2 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 사미 휘피애 (CB) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 32경기/2골 (독립 검증 전) | 21/20/1668/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마누엘 프리드리히 (CB) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 31경기/3골 (독립 검증 전) | 19/17/1457/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 미할 카들레츠 (LB) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 23경기/1골 (독립 검증 전) | 32/30/2647/2 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 곤살로 카스트로 (RB) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 29경기/1골 (독립 검증 전) | 23/19/1712/3 | partially_verified / A- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 다니엘 슈바프 (RB) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 27경기/0골 (독립 검증 전) | 30/28/2453/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 지몬 롤페스 (DM) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 11경기/4골 (독립 검증 전) | 28/21/1899/5 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 하노 발리치 (DM) | Bayer 04 Leverkusen | 미확인 (null) | 미확인 (null) | 24/9/897/3 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 아르투로 비달 (CM) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 31경기/1골 (독립 검증 전) | 33/31/2708/10 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 라르스 벤더 (CM) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 20경기/1골 (독립 검증 전) | 27/10/1201/3 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 미하엘 발라크 (CM) | Bayer 04 Leverkusen | 미확인 (null) | 미확인 (null) | 17/13/1174/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 헤나투 아우구스투 (CAM) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 17경기/0골 (독립 검증 전) | 27/26/2219/7 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 트란퀼로 바르네타 (LW) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 32경기/4골 (독립 검증 전) | 24/19/1514/2 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 시드니 샘 (RW) | Bayer 04 Leverkusen | 미확인 (null) | 미확인 (null) | 30/26/2167/7 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 에렌 데르디요크 (ST) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 33경기/12골 (독립 검증 전) | 32/18/1950/6 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 슈테판 키슬링 (ST) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 33경기/21골 (독립 검증 전) | 22/15/1344/7 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 파트리크 헬메스 (ST) | Bayer 04 Leverkusen | 미확인 (null) | 아카이브 DRAFT 12경기/2골 (독립 검증 전) | 11/8/700/5 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 한스외르크 부트 (GK) | FC Bayern München | 아카이브 DRAFT 8경기/0골 (독립 검증 전) | 아카이브 DRAFT 31경기/0골 (독립 검증 전) | 23/22/2024/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 토마스 크라프트 (GK) | FC Bayern München | 미확인 (null) | 미확인 (null) | 12/12/1036/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 아나톨리 티모슈크 (CB) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 21경기/0골 (독립 검증 전) | 26/23/1994/3 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 홀거 바트슈투버 (CB) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 33경기/1골 (독립 검증 전) | 23/21/1846/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 다니엘 판 바위턴 (CB) | FC Bayern München | 아카이브 DRAFT 18경기/3골 (독립 검증 전) | 아카이브 DRAFT 31경기/6골 (독립 검증 전) | 21/18/1603/2 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 브레누 (CB) | FC Bayern München | 미확인 (null) | 미확인 (null) | 13/7/731/0 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 다니엘 프라니치 (LB) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 20경기/1골 (독립 검증 전) | 28/22/1995/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 디에고 콘텐토 (LB) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 9경기/0골 (독립 검증 전) | 14/12/1110/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 필리프 람 (RB) | FC Bayern München | 아카이브 DRAFT 28경기/3골 (독립 검증 전) | 아카이브 DRAFT 34경기/0골 (독립 검증 전) | 34/34/3060/3 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 루이스 구스타부 (DM) | FC Bayern München | 미확인 (null) | 미확인 (null) | 14/13/1077/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마르크 판 보멀 (DM) | FC Bayern München | 아카이브 DRAFT 29경기/2골 (독립 검증 전) | 아카이브 DRAFT 25경기/1골 (독립 검증 전) | 13/12/1089/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 안드레아스 오틀 (DM) | FC Bayern München | 아카이브 DRAFT 22경기/0골 (독립 검증 전) | 미확인 (null) | 15/9/913/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 바스티안 슈바인슈타이거 (CM) | FC Bayern München | 아카이브 DRAFT 31경기/5골 (독립 검증 전) | 아카이브 DRAFT 33경기/2골 (독립 검증 전) | 32/31/2728/4 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 토니 크로스 (CM) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 33경기/9골 (독립 검증 전) | 27/19/1727/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 토마스 뮐러 (CAM) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 34경기/13골 (독립 검증 전) | 34/32/2795/12 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 프랑크 리베리 (LW) | FC Bayern München | 아카이브 DRAFT 25경기/9골 (독립 검증 전) | 아카이브 DRAFT 19경기/4골 (독립 검증 전) | 25/22/1964/7 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 아르연 로번 (RW) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 24경기/16골 (독립 검증 전) | 14/13/1133/12 | partially_verified / A+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 하미트 알튼토프 (RW) | FC Bayern München | 미확인 (null) | 아카이브 DRAFT 15경기/0골 (독립 검증 전) | 14/8/729/2 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마리오 고메스 (ST) | FC Bayern München | 아카이브 DRAFT 32경기/24골 (독립 검증 전) | 아카이브 DRAFT 29경기/10골 (독립 검증 전) | 32/27/2444/28 | partially_verified / S 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 미로슬라프 클로제 (ST) | FC Bayern München | 아카이브 DRAFT 26경기/10골 (독립 검증 전) | 아카이브 DRAFT 25경기/3골 (독립 검증 전) | 20/9/873/1 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 론로베르트 칠러 (GK) | Hannover 96 | 미확인 (null) | 미확인 (null) | 15/15/1312/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 플로리안 프롬로비츠 (GK) | Hannover 96 | 미확인 (null) | 미확인 (null) | 20/19/1748/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 에마누엘 포가테츠 (CB) | Hannover 96 | 미확인 (null) | 미확인 (null) | 28/28/2435/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 카림 하귀 (CB) | Hannover 96 | 미확인 (null) | 미확인 (null) | 25/25/2227/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마리오 에기만 (CB) | Hannover 96 | 미확인 (null) | 미확인 (null) | 12/7/639/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 크리스티안 슐츠 (LB) | Hannover 96 | 미확인 (null) | 미확인 (null) | 33/33/2941/4 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 콩스탕 자크파 (LB) | Hannover 96 | 미확인 (null) | 미확인 (null) | 14/5/605/0 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 스티븐 체룬돌로 (RB) | Hannover 96 | 미확인 (null) | 미확인 (null) | 33/33/2875/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 소피안 샤헤트 (RB) | Hannover 96 | 아카이브 DRAFT 13경기/0골 (독립 검증 전) | 미확인 (null) | 18/2/421/0 | partially_verified / C+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마누엘 슈미데바흐 (DM) | Hannover 96 | 미확인 (null) | 미확인 (null) | 32/31/2648/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 세르지우 핀투 (CM) | Hannover 96 | 미확인 (null) | 미확인 (null) | 31/31/2619/5 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 콘스탄틴 라우슈 (LW) | Hannover 96 | 미확인 (null) | 미확인 (null) | 34/34/2843/5 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 라르스 슈틴들 (RW) | Hannover 96 | 미확인 (null) | 미확인 (null) | 33/23/2229/2 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 모리츠 슈토펠캄프 (RW) | Hannover 96 | 미확인 (null) | 미확인 (null) | 23/10/1028/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 디디에 야 코난 (ST) | Hannover 96 | 미확인 (null) | 미확인 (null) | 28/28/2461/14 | partially_verified / A- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 모하메드 압델라웨 (ST) | Hannover 96 | 미확인 (null) | 미확인 (null) | 26/26/2098/10 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 얀 슐라우드라프 (ST) | Hannover 96 | 미확인 (null) | 미확인 (null) | 21/16/1369/4 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 크리스티안 베트클로 (GK) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 24/24/2095/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 하인츠 뮐러 (GK) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 10/10/900/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 니콜체 노베스키 (CB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 32/32/2788/2 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 니코 붕게르트 (CB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 28/26/2275/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 보 스벤손 (CB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 19/19/1684/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 얀 키르히호프 (CB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 10/8/760/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 크리스티안 푹스 (LB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 31/30/2647/0 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 말리크 파티 (LB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 19/17/1407/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 라도슬라프 자바브니크 (RB) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 20/18/1627/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 오이겐 폴란스키 (DM) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 28/25/2212/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 미로슬라프 카르한 (DM) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 13/9/826/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 엘킨 소토 (CM) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 26/21/1904/4 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마르코 칼리주리 (CM) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 22/17/1618/1 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 루이스 홀트비 (CAM) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 30/23/2024/4 | partially_verified / A- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 안드레아스 이반시츠 (CAM) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 20/13/1020/3 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 안드레 쉬를레 (LW) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 33/26/2479/15 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마르첼 리세 (RW) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 25/12/1282/2 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 플로리안 헬러 (RW) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 19/7/643/1 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 사미 알라기 (ST) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 28/18/1570/10 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 아담 설러이 (ST) | 1.FSV Mainz 05 | 미확인 (null) | 미확인 (null) | 20/14/1280/4 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 마누엘 노이어 (GK) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 34경기/0골 (독립 검증 전) | 34/34/3060/0 | partially_verified / S 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 베네딕트 회베데스 (CB) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 33경기/3골 (독립 검증 전) | 30/30/2594/1 | partially_verified / A- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 크리스토프 메첼더 (CB) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 32/32/2690/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 키리아코스 파파도풀로스 (CB) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 18/10/980/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 루카스 슈미츠 (LB) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 29경기/2골 (독립 검증 전) | 23/21/1865/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 한스 사르페이 (LB) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 9/6/565/0 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 우치다 아쓰토 (RB) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 26/24/2149/0 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 페어 클루게 (DM) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 13경기/0골 (독립 검증 전) | 22/18/1558/1 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 조엘 마티프 (DM) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 20경기/3골 (독립 검증 전) | 26/14/1481/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 저메인 존스 (DM) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 10/10/743/1 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 앤서니 아난 (DM) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 9/8/694/0 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 크리스토프 모리츠 (DM) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 28경기/1골 (독립 검증 전) | 12/8/728/0 | partially_verified / B- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 이반 라키티치 (CM) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 29경기/7골 (독립 검증 전) | 16/14/1213/1 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 호세 마누엘 후라도 (LW) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 28/21/1791/3 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 율리안 드락슬러 (LW) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 15/3/501/1 | partially_verified / C+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 제페르손 파르판 (RW) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 33경기/8골 (독립 검증 전) | 28/26/2338/3 | partially_verified / A- 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 라울 곤살레스 (ST) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 34/34/2895/13 | partially_verified / A0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 클라스얀 휜텔라르 (ST) | FC Schalke 04 | 미확인 (null) | 미확인 (null) | 24/22/1988/8 | partially_verified / B+ 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |
| 에두 (ST) | FC Schalke 04 | 미확인 (null) | 아카이브 DRAFT 13경기/2골 (독립 검증 전) | 28/15/1449/3 | partially_verified / B0 잠정 | matchwise_primary_position_2010_11; individual_2008_09_2009_10_independent_full_review; defensive_creative_game_impact; individual_DOB_crosscheck |

## I. 실질적인 역사적 오류 수정, 위험과 검증 상태

### 발견·정정한 구단 역사 오류

- **Schalke 04 리그 14위 선정:** DFB-Pokal 우승과 다음 시즌 UEFA 출전 실적을 확인하므로 포함. 단순 리그 6위까지만 고르는 오분류를 배제하고 FC Nürnberg는 제외.
- **BDFutbol GK G 컬럼:** 음수 표기는 실점(goals conceded)이므로 골키퍼 개인 득점으로 음수를 저장하지 않았다.
- **시즌 중 주전 교체:** Bayern GK Hans-Jörg Butt / Thomas Kraft, Hannover GK Florian Fromlowitz / Ron-Robert Zieler, Mainz GK Christian Wetklo / Heinz Müller 모두 복수 주전급 인정. 11명 고정 주전 제한 금지.
- **이적 및 다중 포지션:** Nuri Şahin (CM/DM), Mario Götze (CAM/RW), José Manuel Jurado (CAM/LW), Anatoliy Tymoshchuk (DM/CB) 등 경계선은 세부 경기 출장 위치 전수 검증 이전의 잠정 배정. 라울은 처진 공격 역할을 수행해도 실전 최전방/ST로 평가.

### 검증 집계

| 항목 | 현황 |
|---|---:|
| 2010-11 리그 출전·선발 기본 기록 연결 | 112 |
| 2008-09 Football Archive DRAFT 후보 연결 | 11 |
| 2009-10 Football Archive DRAFT 후보 연결 | 52 |
| 전 선수 3시즌 개인 경기력 독립 전수 검증 | **0명** |
| 개별 선수 경기별 주 포지션 전수 검증 완료 | **0명** |
| 전체 선수 개별 공식 인물 프로필 DOB 독립 대조 | **0명** |
| 잠정 티어·포지션 순위 기록 | **112명** |
| 선수 최종 사용자 승인 | **미승인** |

**주의:** '113명'은 이전 Bundesliga 2009-10 시즌 기록이며, 이 2010-11 신규 시즌은 112명이다. 등록 누락 및 포지션 분류 오류가 추가 발견될 수 있으므로 112명은 DRAFT 후보 집계다.

## J. GitHub 코드 반영 및 테스트 판정

| 항목 | 상태 | 경로 / 상세 |
|---|---|---|
| 시즌 JSON | **GitHub 반영** | [`data/bundesliga-2010-11.json`](../data/bundesliga-2010-11.json) |
| 구조 검증 스크립트 | **GitHub 반영** | [`scripts/validate_bundesliga_2010_11.py`](../scripts/validate_bundesliga_2010_11.py) |
| 실사이트 Playwright 테스트 | **GitHub 반영, 실행 결과 별도 확인** | [`scripts/browser_smoke_bundesliga_2010_11.cjs`](../scripts/browser_smoke_bundesliga_2010_11.cjs) |
| 자동화 워크플로 | **GitHub 반영, 실행 결과 별도 확인** | [`.github/workflows/validate-bundesliga-2010-11.yml`](../.github/workflows/validate-bundesliga-2010-11.yml) |
| 프런트엔드 | **GitHub 반영** | [`assets/app.js`](../assets/app.js), All Tiers 조건에 2010-11 포함 |
| JSON 핵심 구조 검사 | **커밋 당시 경량 코드 검사** | 중복 player ID 0, 후보 초과 0, 18팀 순위 기록, 10개 포지션, 11 Best XI |
| Python 전체 구조 검증 | **스크립트 저장 (CI/로컬 실행 확인 별도)** | 실제 검사 결과를 성공으로 주장하기 전 실행 필요 |
| 역사적 전수 검증 | **미완료** | 원출처와 경기별 활약을 선수마다 직접 교차 검증 필요 |
| GitHub Pages 실제 브라우저 검사 | **미검증** | URL은 하단. CI 브라우저 테스트가 실제 성공한 뒤만 검증 성공 처리 |
| 기존 2009-10 시즌 회귀 검사 | **CI 테스트 추가, 실행 확인 필요** | 이전 113명·기능 유지 |
| 사용자 승인 | **미승인** | Best XI `proposed_unapproved` |

### 주요 소스

- BV 09 Borussia Dortmund 2010-11 [BDFutbol 선수별 출전 테이블](https://www.bdfutbol.com/en/t/t2010-111003.html), [DFB 팀 시즌 데이터](https://datencenter.dfb.de/en/bundesliga/2010-2011/team/borussia-dortmund)
- Bayer 04 Leverkusen 2010-11 [BDFutbol 선수별 출전 테이블](https://www.bdfutbol.com/en/t/t2010-111014.html), [DFB 팀 시즌 데이터](https://datencenter.dfb.de/en/competitions/bundesliga/seasons/2010-2011/teams/bayer-leverkusen)
- FC Bayern München 2010-11 [BDFutbol 선수별 출전 테이블](https://www.bdfutbol.com/en/t/t2010-111016.html), [DFB 팀 시즌 데이터](https://datencenter.dfb.de/en/bundesliga/2010-2011/team/bayern-munich)
- Hannover 96 2010-11 [BDFutbol 선수별 출전 테이블](https://www.bdfutbol.com/en/t/t2010-111012.html), [DFB 팀 시즌 데이터](https://datencenter.dfb.de/competitions/bundesliga/seasons/2010-2011/teams/hannover-96)
- 1.FSV Mainz 05 2010-11 [BDFutbol 선수별 출전 테이블](https://www.bdfutbol.com/en/t/t2010-111013.html), [DFB 팀 시즌 데이터](https://datencenter.dfb.de/en/competitions/bundesliga/seasons/2010-2011/teams/1-fsv-mainz-05)
- FC Schalke 04 2010-11 [BDFutbol 선수별 출전 테이블](https://www.bdfutbol.com/en/t/t2010-111006.html), [DFB 팀 시즌 데이터](https://datencenter.dfb.de/en/bundesliga/2010-2011/team/fc-schalke-04)

## K. 주요 GitHub 커밋 및 다음 단계 중단

- [`6c972274f2f2`](https://github.com/wjdduddlf112/footballarch/commit/6c972274f2f2be67ff427dcf5de14451a5491b0e): 2010-11 112명 DRAFT JSON 저장.
- [`c3bf1957172b`](https://github.com/wjdduddlf112/footballarch/commit/c3bf1957172be4d2775ee40631e16fbab6cf027a): All Tiers 2010-11 노출.
- [`7f1e075e4753`](https://github.com/wjdduddlf112/footballarch/commit/7f1e075e475366fca31e5e4c0d1368daa89cae5c): JSON 구조 검사 스크립트.
- [`43affc2f58d3`](https://github.com/wjdduddlf112/footballarch/commit/43affc2f58d3b7adf5e689b038d3dcae8808f0ad): 실제 사이트 브라우저 테스트 및 2009-10 회귀 검사.
- [`d06bb0283cfd`](https://github.com/wjdduddlf112/footballarch/commit/d06bb0283cfde1031e9488108f639ab7bef42786): GitHub Actions 자동 검사 구성.

**현재 시즌 Bundesliga 2010-11만 실행한다. Bundesliga 2011-12로 자동 이동하지 않는다. 사용자가 명시적으로 다음 시즌을 승인하지 않으면 중단한다.**
