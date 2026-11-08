# Serie A 2013-14 — 전체 6개 구단 106명·10개 포지션·티어·Best XI 평가 보고서 (DRAFT)

> **상태**: `draft_unapproved`, Best XI `proposed_unapproved`. 현재 2013-14 개인 리그 경기·선발·분·골은 BDFutbol 실제 구단 출전표 원자료에서 106명 전원 입력했다. 그러나 **전체 3시즌 개인 경기력 독립 전수 질적 감사 0/106**이고 2011-12·2012-13 상당수 기록과 모든 도움의 최종 교차 검증이 미완료임을 명시한다. 보고서·티어·순위는 사용자가 승인하기 전까지 잠정이다.

## 0. 시즌 원칙 및 통계 범위

- 해당 시즌 **Serie A 2013-14**만 작업. 최근 가중 **2011-12 < 2012-13 < 2013-14**. 특정 선수의 다른 시즌 명성, 이후 전성기, 구단의 우승·리그 순위 자체는 평가 가산 금지.
- 2014-15 유럽대항전 **실제 참가**한 세리에 A 소속 **Juventus, Roma, Napoli, Fiorentina, Inter, Torino**만 포함. 파르마는 라이선스 발급 실패로 제외, 토리노는 대체 출전으로 포함.
- 구단당 대표 XI 정확히 11명, 동일 구단·동일 포지션 후보 1명 이내. 오른쪽/왼쪽 윙어·풀백 및 윙백 각각 분리, 각 선수 포지션 하나씩 등록. 실제 전경기 최빈 출전 역할은 대조 추가 필요.
- 구단별 현재 시즌 선수 **PM(출전), SM(선발), Min(시간), G(골)** BDFutbol 2013-14 **Liga / Serie A** 표를 사용. 골키퍼 BDFutbol 음수 G는 **실점**, 선수 득점 0으로 기록. `leagueAssists`는 모두 `null`이며, 제공기관·날짜별 도움 정의가 다른 수치를 억지로 단일 출처 전수 통계라 하지 않음.
- 참고: 2013-14 시즌 실제 팀 포메이션 Juventus 3-5-2, Roma 4-3-3, Napoli 4-2-3-1, Fiorentina 4-3-3, Inter 3-5-2, Torino 3-5-2의 **대표 시대 전술 모델**. 시즌 각 라운드의 최빈 포메이션은 별도 검증 전.

## 1. 2014-15 UEFA 실제 참가 구단과 라이선스 예외

| 2013-14 리그 순위 | 구단 원어명 | 실제 2014-15 대회 | 경로 |
|---:|---|---|---|
| 1 | Juventus Football Club | UEFA Champions League | 2013-14 Serie A first (102 points), 2014-15 UCL actual group-stage |
| 2 | Associazione Sportiva Roma | UEFA Champions League | 2013-14 Serie A second, 2014-15 UCL actual group-stage |
| 3 | Società Sportiva Calcio Napoli | UEFA Champions League | 2013-14 Serie A third, 2014-15 UCL playoff and 2014-15 UEL group-stage after losing playoff; also 2013-14 Coppa Italia winner |
| 4 | Associazione Calcio Fiorentina | UEFA Europa League | 2013-14 Serie A fourth, 2014-15 UEL actual group-stage |
| 5 | Football Club Internazionale Milano | UEFA Europa League | 2013-14 Serie A fifth, 2014-15 UEL actual playoff/group-stage |
| 7 | Torino Football Club | UEFA Europa League | 2013-14 Serie A seventh, entered 2014-15 UEL third qualifying round after Parma sixth denied UEFA club licence and lost appeal |

**특례 검증**: 2013-14 Parma FC가 6위(58점)였으나 미납 소득세 관련 UEFA club licence 심사에서 발급 거절, 항소도 기각돼 **2014-15 UEFA Europa League 실제 참가 불가**. 7위 Torino FC(57점)가 2014-15 UEL 3차 예선부터 실제 참가. Napoli는 2014-15 UCL 플레이오프에 출전한 뒤 UEL로 이동하므로 UEFA 출전 구단에 포함. Milan(8위)과 Lazio(9위), Udinese(13위) 미참가로 제외. 유럽 Intertoto 대회 폐지 상태.

- [Court of Arbitration for Sport Parma vs FIGC/Torino, CAS 2014/A/3629](https://jurisprudence.tas-cas.org/Shared%20Documents/3629.pdf)
- [Sky Sports 2014-05-29 Parma licence appeal rejected](https://www.skysports.com/football/news/9330931/parma-will-not-compete-in-the-europa-league-next-season-after-losing-an-appeal)
- [UEFA Europa League 2014-15 actual clubs](https://www.uefa.com/uefaeuropaleague/history/seasons/2015/clubs/)
- [RSSSF 2013-14 table](https://www.rsssf.org/tablesi/ital2014.html)

## 2. 구단별 대표 XI·후보 106명 전체 명단

표: 포지션 GK → CB → LB → RB → DM → CM → CAM → LW → RW → ST 순서, 역할=대표 선발 11명/후보 최대 1명. **선발 출전 수와 명목상 3-5-2/4-3-3 대표 XI 차이**는 별도로 기록하므로 17선발 선수라도 후보로 평가되는 경우 포메이션 적합성 때문일 수 있다.

### Juventus Football Club — 3-5-2 · 17명

| 포지션 | 한글 이름 | 원어명 | 당시 소속팀 원어명 | 생년월일 | 대표 역할 | 티어 | 리그 포지션 순위 | 2013-14 출장 | 선발 | 시간 | 골 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---:|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 1978-01-28 | 주전 | A+ | 2 | 33 | 33 | 2867 | 0 |
| GK | 마르코 스토라리 | Marco Storari | Juventus Football Club | 1977-01-07 | 후보 | B0 | 7 | 6 | 5 | 515 | 0 |
| CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 1984-08-14 | 주전 | A+ | 2 | 31 | 31 | 2774 | 3 |
| CB | 레오나르도 보누치 | Leonardo Bonucci | Juventus Football Club | 1987-05-01 | 주전 | A+ | 3 | 29 | 28 | 2537 | 2 |
| CB | 안드레아 바르찰리 | Andrea Barzagli | Juventus Football Club | 1981-05-08 | 주전 | A0 | 5 | 26 | 26 | 2289 | 0 |
| CB | 안젤로 오그본나 | Angelo Ogbonna | Juventus Football Club | 1988-05-23 | 후보 | B+ | 17 | 16 | 14 | 1260 | 0 |
| LB | 콰드워 아사모아 | Kwadwo Asamoah | Juventus Football Club | 1988-12-09 | 주전 | A+ | 1 | 34 | 32 | 2756 | 2 |
| LB | 시모네 파도인 | Simone Padoin | Juventus Football Club | 1984-03-18 | 후보 | B0 | 9 | 21 | 8 | 731 | 1 |
| RB | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus Football Club | 1984-01-16 | 주전 | A0 | 2 | 27 | 24 | 2117 | 2 |
| RB | 마우리시오 이슬라 | Mauricio Isla | Juventus Football Club | 1988-06-12 | 후보 | B0 | 9 | 18 | 10 | 963 | 0 |
| DM | 안드레아 피를로 | Andrea Pirlo | Juventus Football Club | 1979-05-19 | 주전 | A+ | 1 | 30 | 29 | 2466 | 4 |
| CM | 아르투로 비달 | Arturo Vidal | Juventus Football Club | 1987-05-22 | 주전 | S | 1 | 32 | 28 | 2441 | 11 |
| CM | 폴 포그바 | Paul Pogba | Juventus Football Club | 1993-03-15 | 주전 | A+ | 2 | 36 | 33 | 3066 | 7 |
| CM | 클라우디오 마르키시오 | Claudio Marchisio | Juventus Football Club | 1986-01-19 | 후보 | A0 | 6 | 29 | 21 | 1986 | 4 |
| ST | 카를로스 테베스 | Carlos Tévez | Juventus Football Club | 1984-02-05 | 주전 | S | 2 | 34 | 30 | 2600 | 19 |
| ST | 페르난도 요렌테 | Fernando Llorente | Juventus Football Club | 1985-02-26 | 주전 | A0 | 6 | 34 | 29 | 2498 | 16 |
| ST | 세바스티안 조빈코 | Sebastian Giovinco | Juventus Football Club | 1987-01-26 | 후보 | B0 | 14 | 17 | 6 | 567 | 2 |

전술 주석: Three nominal starting centrebacks and LWB/RWB separately preserved via LB/RB website position. Player full fixture-by-fixture dominant role needs independent auditing. [해당 구단 2013-14 실제 Serie A 개인 출전·선발·시간·골 기록](https://www.bdfutbol.com/en/t/t2013-143004.html).

### Associazione Sportiva Roma — 4-3-3 · 18명

| 포지션 | 한글 이름 | 원어명 | 당시 소속팀 원어명 | 생년월일 | 대표 역할 | 티어 | 리그 포지션 순위 | 2013-14 출장 | 선발 | 시간 | 골 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---:|
| GK | 모르간 데 산크티스 | Morgan De Sanctis | Associazione Sportiva Roma | 1977-03-26 | 주전 | A+ | 1 | 36 | 36 | 3240 | 0 |
| GK | 우카시 스코룹스키 | Łukasz Skorupski | Associazione Sportiva Roma | 1991-05-05 | 후보 | B- | 11 | 2 | 2 | 180 | 0 |
| CB | 메흐디 베나티아 | Medhi Benatia | Associazione Sportiva Roma | 1987-04-17 | 주전 | A+ | 1 | 33 | 32 | 2860 | 5 |
| CB | 레안드루 카스탕 | Leandro Castán | Associazione Sportiva Roma | 1986-11-05 | 주전 | A0 | 4 | 36 | 36 | 3147 | 0 |
| CB | 알레시오 로마뇰리 | Alessio Romagnoli | Associazione Sportiva Roma | 1995-01-12 | 후보 | B0 | 21 | 11 | 8 | 703 | 0 |
| LB | 도두 | Dodô | Associazione Sportiva Roma | 1992-02-06 | 주전 | B0 | 6 | 19 | 15 | 1359 | 0 |
| LB | 페데리코 발차레티 | Federico Balzaretti | Associazione Sportiva Roma | 1981-12-06 | 후보 | B- | 10 | 11 | 10 | 914 | 1 |
| RB | 마이콘 | Maicon | Associazione Sportiva Roma | 1981-07-26 | 주전 | A0 | 3 | 28 | 28 | 2327 | 2 |
| RB | 바실리스 토로시디스 | Vasilis Torosidis | Associazione Sportiva Roma | 1985-06-10 | 후보 | B0 | 8 | 18 | 12 | 1236 | 1 |
| DM | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 1983-07-24 | 주전 | A+ | 2 | 32 | 31 | 2724 | 1 |
| CM | 미랄렘 피아니치 | Miralem Pjanić | Associazione Sportiva Roma | 1990-04-02 | 주전 | A+ | 3 | 35 | 32 | 2700 | 6 |
| CM | 케빈 스트로트만 | Kevin Strootman | Associazione Sportiva Roma | 1990-02-13 | 주전 | A+ | 4 | 25 | 24 | 2005 | 5 |
| CM | 라자 나잉골란 | Radja Nainggolan | Associazione Sportiva Roma | 1988-05-04 | 후보 | B+ | 12 | 17 | 16 | 1415 | 2 |
| LW | 제르비뉴 | Gervinho | Associazione Sportiva Roma | 1987-05-27 | 주전 | A0 | 1 | 33 | 30 | 2729 | 9 |
| LW | 아뎀 랴이치 | Adem Ljajić | Associazione Sportiva Roma | 1991-09-29 | 후보 | B+ | 3 | 28 | 17 | 1622 | 6 |
| RW | 알레산드로 플로렌치 | Alessandro Florenzi | Associazione Sportiva Roma | 1991-03-11 | 주전 | B+ | 3 | 37 | 23 | 1912 | 6 |
| ST | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | 1976-09-27 | 주전 | A0 | 8 | 26 | 20 | 1672 | 8 |
| ST | 마티아 데스트로 | Mattia Destro | Associazione Sportiva Roma | 1991-03-20 | 후보 | A0 | 9 | 20 | 14 | 1228 | 13 |

전술 주석: Contemporary representative 4-back system; within-season substitutions and formation changes require match-by-match verification. [해당 구단 2013-14 실제 Serie A 개인 출전·선발·시간·골 기록](https://www.bdfutbol.com/en/t/t2013-143009.html).

### Società Sportiva Calcio Napoli — 4-2-3-1 · 20명

| 포지션 | 한글 이름 | 원어명 | 당시 소속팀 원어명 | 생년월일 | 대표 역할 | 티어 | 리그 포지션 순위 | 2013-14 출장 | 선발 | 시간 | 골 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---:|
| GK | 페페 레이나 | Pepe Reina | Società Sportiva Calcio Napoli | 1982-08-31 | 주전 | A0 | 4 | 30 | 30 | 2601 | 0 |
| GK | 라파엘 카브라우 | Rafael Cabral | Società Sportiva Calcio Napoli | 1990-05-20 | 후보 | B- | 8 | 8 | 7 | 673 | 0 |
| CB | 라울 알비올 | Raúl Albiol | Società Sportiva Calcio Napoli | 1985-09-04 | 주전 | A0 | 6 | 32 | 30 | 2644 | 1 |
| CB | 페데리코 페르난데스 | Federico Fernández | Società Sportiva Calcio Napoli | 1989-02-21 | 주전 | B+ | 13 | 26 | 25 | 2293 | 0 |
| CB | 미겔 브리토스 | Miguel Britos | Società Sportiva Calcio Napoli | 1985-07-17 | 후보 | B0 | 19 | 16 | 15 | 1315 | 1 |
| LB | 파우지 굴람 | Faouzi Ghoulam | Società Sportiva Calcio Napoli | 1991-02-01 | 주전 | B+ | 4 | 15 | 14 | 1221 | 0 |
| LB | 파블로 아르메로 | Pablo Armero | Società Sportiva Calcio Napoli | 1986-11-02 | 후보 | B0 | 8 | 14 | 9 | 879 | 0 |
| RB | 크리스티안 마조 | Christian Maggio | Società Sportiva Calcio Napoli | 1982-02-11 | 주전 | B+ | 5 | 22 | 22 | 1959 | 0 |
| RB | 앙토니 레베예르 | Anthony Réveillère | Società Sportiva Calcio Napoli | 1979-11-10 | 후보 | B0 | 7 | 13 | 13 | 1089 | 0 |
| DM | 괴칸 인러 | Gökhan Inler | Società Sportiva Calcio Napoli | 1984-06-27 | 주전 | B+ | 3 | 32 | 30 | 2632 | 2 |
| DM | 발론 베라미 | Valon Behrami | Società Sportiva Calcio Napoli | 1985-04-19 | 후보 | B0 | 8 | 21 | 16 | 1462 | 0 |
| CM | 블레림 제마일리 | Blerim Džemaili | Società Sportiva Calcio Napoli | 1986-04-12 | 주전 | B+ | 11 | 24 | 18 | 1549 | 6 |
| CM | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli | 1991-12-20 | 후보 | B0 | 17 | 15 | 12 | 1121 | 0 |
| CAM | 마레크 함시크 | Marek Hamšík | Società Sportiva Calcio Napoli | 1987-07-27 | 주전 | A0 | 1 | 28 | 23 | 1977 | 7 |
| CAM | 고란 판데프 | Goran Pandev | Società Sportiva Calcio Napoli | 1983-07-27 | 후보 | B0 | 3 | 29 | 17 | 1386 | 7 |
| LW | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli | 1991-06-04 | 주전 | B+ | 4 | 36 | 25 | 2394 | 3 |
| LW | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli | 1987-05-06 | 후보 | A0 | 2 | 33 | 21 | 1913 | 11 |
| RW | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli | 1987-02-11 | 주전 | A+ | 2 | 37 | 32 | 2850 | 15 |
| ST | 곤살로 이과인 | Gonzalo Higuaín | Società Sportiva Calcio Napoli | 1987-12-10 | 주전 | A+ | 5 | 32 | 28 | 2420 | 17 |
| ST | 두반 사파타 | Duván Zapata | Società Sportiva Calcio Napoli | 1991-04-01 | 후보 | B0 | 13 | 16 | 6 | 569 | 5 |

전술 주석: Contemporary representative 4-back system; within-season substitutions and formation changes require match-by-match verification. [해당 구단 2013-14 실제 Serie A 개인 출전·선발·시간·골 기록](https://www.bdfutbol.com/en/t/t2013-143003.html).

### Associazione Calcio Fiorentina — 4-3-3 · 18명

| 포지션 | 한글 이름 | 원어명 | 당시 소속팀 원어명 | 생년월일 | 대표 역할 | 티어 | 리그 포지션 순위 | 2013-14 출장 | 선발 | 시간 | 골 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---:|
| GK | 네투 | Neto | Associazione Calcio Fiorentina | 1989-07-19 | 주전 | A0 | 5 | 35 | 35 | 3150 | 0 |
| GK | 안토니오 로사티 | Antonio Rosati | Associazione Calcio Fiorentina | 1983-06-26 | 후보 | B- | 9 | 3 | 3 | 270 | 0 |
| CB | 곤살로 로드리게스 | Gonzalo Rodríguez | Associazione Calcio Fiorentina | 1984-04-10 | 주전 | A0 | 8 | 33 | 33 | 2942 | 4 |
| CB | 스테판 사비치 | Stefan Savić | Associazione Calcio Fiorentina | 1991-01-08 | 주전 | A0 | 9 | 31 | 31 | 2790 | 0 |
| CB | 파쿤도 론카글리아 | Facundo Roncaglia | Associazione Calcio Fiorentina | 1987-02-10 | 후보 | B0 | 20 | 13 | 11 | 1070 | 0 |
| LB | 마누엘 파스콸 | Manuel Pasqual | Associazione Calcio Fiorentina | 1982-03-13 | 주전 | B+ | 3 | 26 | 26 | 2181 | 0 |
| RB | 네나드 토모비치 | Nenad Tomović | Associazione Calcio Fiorentina | 1987-08-30 | 주전 | B+ | 6 | 25 | 23 | 2024 | 0 |
| DM | 다비드 피사로 | David Pizarro | Associazione Calcio Fiorentina | 1979-09-11 | 주전 | B+ | 5 | 28 | 24 | 2204 | 1 |
| DM | 마시모 암브로시니 | Massimo Ambrosini | Associazione Calcio Fiorentina | 1977-05-29 | 후보 | B0 | 7 | 21 | 16 | 1317 | 0 |
| CM | 보르하 발레로 | Borja Valero | Associazione Calcio Fiorentina | 1985-01-12 | 주전 | A+ | 5 | 32 | 31 | 2753 | 6 |
| CM | 알베르토 아퀼라니 | Alberto Aquilani | Associazione Calcio Fiorentina | 1984-07-07 | 주전 | B+ | 8 | 31 | 31 | 2599 | 6 |
| CM | 마티아스 페르난데스 | Matías Fernández | Associazione Calcio Fiorentina | 1986-05-15 | 후보 | B+ | 14 | 23 | 12 | 1310 | 3 |
| LW | 후안 마누엘 바르가스 | Juan Manuel Vargas | Associazione Calcio Fiorentina | 1983-10-05 | 주전 | B+ | 5 | 24 | 14 | 1448 | 4 |
| LW | 요시프 일리치치 | Josip Iličić | Associazione Calcio Fiorentina | 1988-01-29 | 후보 | B0 | 6 | 21 | 13 | 1104 | 3 |
| RW | 후안 콰드라도 | Juan Cuadrado | Associazione Calcio Fiorentina | 1988-05-26 | 주전 | A+ | 1 | 32 | 31 | 2701 | 11 |
| RW | 호아킨 | Joaquín | Associazione Calcio Fiorentina | 1981-07-21 | 후보 | B0 | 4 | 26 | 15 | 1418 | 2 |
| ST | 주세페 로시 | Giuseppe Rossi | Associazione Calcio Fiorentina | 1987-02-01 | 주전 | A0 | 7 | 21 | 19 | 1527 | 16 |
| ST | 알레산드로 마트리 | Alessandro Matri | Associazione Calcio Fiorentina | 1984-08-19 | 후보 | B0 | 11 | 15 | 10 | 854 | 4 |

전술 주석: Contemporary representative 4-back system; within-season substitutions and formation changes require match-by-match verification. [해당 구단 2013-14 실제 Serie A 개인 출전·선발·시간·골 기록](https://www.bdfutbol.com/en/t/t2013-143014.html).

### Football Club Internazionale Milano — 3-5-2 · 17명

| 포지션 | 한글 이름 | 원어명 | 당시 소속팀 원어명 | 생년월일 | 대표 역할 | 티어 | 리그 포지션 순위 | 2013-14 출장 | 선발 | 시간 | 골 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---:|
| GK | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano | 1984-07-14 | 주전 | A0 | 3 | 36 | 36 | 3111 | 0 |
| GK | 후안 파블로 카리소 | Juan Pablo Carrizo | Football Club Internazionale Milano | 1984-05-06 | 후보 | B- | 10 | 4 | 2 | 308 | 0 |
| CB | 호날두 | Rolando | Football Club Internazionale Milano | 1985-08-31 | 주전 | B+ | 10 | 29 | 28 | 2573 | 4 |
| CB | 주앙 제주스 | Juan Jesus | Football Club Internazionale Milano | 1991-06-10 | 주전 | B+ | 12 | 27 | 27 | 2353 | 0 |
| CB | 안드레아 라노키아 | Andrea Ranocchia | Football Club Internazionale Milano | 1988-02-16 | 주전 | B+ | 14 | 24 | 23 | 2097 | 1 |
| CB | 우고 캄파냐로 | Hugo Campagnaro | Football Club Internazionale Milano | 1980-06-27 | 후보 | B+ | 15 | 21 | 20 | 1728 | 0 |
| LB | 나가토모 유토 | Yuto Nagatomo | Football Club Internazionale Milano | 1986-09-12 | 주전 | A0 | 2 | 34 | 32 | 2846 | 5 |
| RB | 조나탕 | Jonathan | Football Club Internazionale Milano | 1986-02-27 | 주전 | B+ | 4 | 31 | 31 | 2602 | 3 |
| DM | 에스테반 캄비아소 | Esteban Cambiasso | Football Club Internazionale Milano | 1980-08-18 | 주전 | B+ | 4 | 32 | 32 | 2713 | 4 |
| DM | 즈드라브코 쿠즈마노비치 | Zdravko Kuzmanović | Football Club Internazionale Milano | 1987-09-22 | 후보 | B0 | 10 | 15 | 11 | 835 | 0 |
| CM | 프레디 과린 | Fredy Guarín | Football Club Internazionale Milano | 1986-06-30 | 주전 | B+ | 7 | 32 | 26 | 2208 | 4 |
| CM | 리키 알바레스 | Ricky Álvarez | Football Club Internazionale Milano | 1988-04-12 | 주전 | B+ | 10 | 29 | 25 | 2115 | 4 |
| CM | 마테오 코바치치 | Mateo Kovačić | Football Club Internazionale Milano | 1994-05-06 | 후보 | B+ | 13 | 32 | 14 | 1604 | 0 |
| CAM | 에르나네스 | Hernanes | Football Club Internazionale Milano | 1985-05-29 | 후보 | B+ | 2 | 14 | 13 | 1141 | 2 |
| ST | 로드리고 팔라시오 | Rodrigo Palacio | Football Club Internazionale Milano | 1982-02-05 | 주전 | A+ | 4 | 37 | 36 | 3169 | 17 |
| ST | 마우로 이카르디 | Mauro Icardi | Football Club Internazionale Milano | 1993-02-19 | 주전 | B+ | 10 | 22 | 12 | 1304 | 9 |
| ST | 디에고 밀리토 | Diego Milito | Football Club Internazionale Milano | 1979-06-12 | 후보 | B- | 15 | 17 | 6 | 629 | 2 |

전술 주석: Three nominal starting centrebacks and LWB/RWB separately preserved via LB/RB website position. Player full fixture-by-fixture dominant role needs independent auditing. [해당 구단 2013-14 실제 Serie A 개인 출전·선발·시간·골 기록](https://www.bdfutbol.com/en/t/t2013-143008.html).

### Torino Football Club — 3-5-2 · 16명

| 포지션 | 한글 이름 | 원어명 | 당시 소속팀 원어명 | 생년월일 | 대표 역할 | 티어 | 리그 포지션 순위 | 2013-14 출장 | 선발 | 시간 | 골 |
|---|---|---|---|---|---|---|---:|---:|---:|---:|---:|
| GK | 다니엘레 파델리 | Daniele Padelli | Torino Football Club | 1985-10-25 | 주전 | B+ | 6 | 38 | 38 | 3381 | 0 |
| CB | 카밀 글리크 | Kamil Glik | Torino Football Club | 1988-02-03 | 주전 | A0 | 7 | 34 | 33 | 2965 | 2 |
| CB | 에밀리아노 모레티 | Emiliano Moretti | Torino Football Club | 1981-06-11 | 주전 | B+ | 11 | 36 | 36 | 3229 | 1 |
| CB | 니콜라 막시모비치 | Nikola Maksimović | Torino Football Club | 1991-11-25 | 주전 | B+ | 16 | 23 | 20 | 1807 | 0 |
| CB | 체사레 보보 | Cesare Bovo | Torino Football Club | 1983-01-14 | 후보 | B0 | 18 | 20 | 20 | 1673 | 0 |
| LB | 다닐로 담브로시오 | Danilo D'Ambrosio | Torino Football Club | 1988-09-09 | 주전 | B+ | 5 | 14 | 14 | 1214 | 2 |
| LB | 조반니 파스콸레 | Giovanni Pasquale | Torino Football Club | 1982-01-05 | 후보 | B0 | 7 | 12 | 9 | 909 | 0 |
| RB | 마테오 다르미안 | Matteo Darmian | Torino Football Club | 1989-12-02 | 주전 | A+ | 1 | 37 | 37 | 3286 | 0 |
| DM | 주세페 비베스 | Giuseppe Vives | Torino Football Club | 1980-07-14 | 주전 | B+ | 6 | 33 | 33 | 2824 | 1 |
| DM | 미그옌 바샤 | Migjen Basha | Torino Football Club | 1987-01-05 | 후보 | B0 | 9 | 24 | 13 | 1313 | 0 |
| CM | 오마르 엘 카두리 | Omar El Kaddouri | Torino Football Club | 1990-08-21 | 주전 | B+ | 9 | 29 | 25 | 2110 | 5 |
| CM | 알렉산데르 파르네루드 | Alexander Farnerud | Torino Football Club | 1984-05-01 | 주전 | B0 | 15 | 23 | 15 | 1166 | 4 |
| CM | 야스민 쿠르티치 | Jasmin Kurtić | Torino Football Club | 1989-01-10 | 후보 | B0 | 16 | 16 | 14 | 1198 | 2 |
| ST | 치로 임모빌레 | Ciro Immobile | Torino Football Club | 1990-02-20 | 주전 | S | 1 | 33 | 29 | 2590 | 22 |
| ST | 알레시오 체르치 | Alessio Cerci | Torino Football Club | 1987-07-23 | 주전 | S | 3 | 37 | 35 | 3017 | 13 |
| ST | 리카르도 메조리니 | Riccardo Meggiorini | Torino Football Club | 1985-09-04 | 후보 | B0 | 12 | 34 | 7 | 937 | 0 |

전술 주석: Three nominal starting centrebacks and LWB/RWB separately preserved via LB/RB website position. Player full fixture-by-fixture dominant role needs independent auditing. [해당 구단 2013-14 실제 Serie A 개인 출전·선발·시간·골 기록](https://www.bdfutbol.com/en/t/t2013-143019.html).

## 3. 전체 통합 포지션별 순위 — 10개 포지션 DRAFT

### GK — 11명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A+ | 모르간 데 산크티스 | Morgan De Sanctis | Associazione Sportiva Roma | 주전 | 36 | 36 | 0 |
| 2 | A+ | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 주전 | 33 | 33 | 0 |
| 3 | A0 | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano | 주전 | 36 | 36 | 0 |
| 4 | A0 | 페페 레이나 | Pepe Reina | Società Sportiva Calcio Napoli | 주전 | 30 | 30 | 0 |
| 5 | A0 | 네투 | Neto | Associazione Calcio Fiorentina | 주전 | 35 | 35 | 0 |
| 6 | B+ | 다니엘레 파델리 | Daniele Padelli | Torino Football Club | 주전 | 38 | 38 | 0 |
| 7 | B0 | 마르코 스토라리 | Marco Storari | Juventus Football Club | 후보 | 6 | 5 | 0 |
| 8 | B- | 라파엘 카브라우 | Rafael Cabral | Società Sportiva Calcio Napoli | 후보 | 8 | 7 | 0 |
| 9 | B- | 안토니오 로사티 | Antonio Rosati | Associazione Calcio Fiorentina | 후보 | 3 | 3 | 0 |
| 10 | B- | 후안 파블로 카리소 | Juan Pablo Carrizo | Football Club Internazionale Milano | 후보 | 4 | 2 | 0 |
| 11 | B- | 우카시 스코룹스키 | Łukasz Skorupski | Associazione Sportiva Roma | 후보 | 2 | 2 | 0 |

### CB — 21명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A+ | 메흐디 베나티아 | Medhi Benatia | Associazione Sportiva Roma | 주전 | 33 | 32 | 5 |
| 2 | A+ | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 주전 | 31 | 31 | 3 |
| 3 | A+ | 레오나르도 보누치 | Leonardo Bonucci | Juventus Football Club | 주전 | 29 | 28 | 2 |
| 4 | A0 | 레안드루 카스탕 | Leandro Castán | Associazione Sportiva Roma | 주전 | 36 | 36 | 0 |
| 5 | A0 | 안드레아 바르찰리 | Andrea Barzagli | Juventus Football Club | 주전 | 26 | 26 | 0 |
| 6 | A0 | 라울 알비올 | Raúl Albiol | Società Sportiva Calcio Napoli | 주전 | 32 | 30 | 1 |
| 7 | A0 | 카밀 글리크 | Kamil Glik | Torino Football Club | 주전 | 34 | 33 | 2 |
| 8 | A0 | 곤살로 로드리게스 | Gonzalo Rodríguez | Associazione Calcio Fiorentina | 주전 | 33 | 33 | 4 |
| 9 | A0 | 스테판 사비치 | Stefan Savić | Associazione Calcio Fiorentina | 주전 | 31 | 31 | 0 |
| 10 | B+ | 호날두 | Rolando | Football Club Internazionale Milano | 주전 | 29 | 28 | 4 |
| 11 | B+ | 에밀리아노 모레티 | Emiliano Moretti | Torino Football Club | 주전 | 36 | 36 | 1 |
| 12 | B+ | 주앙 제주스 | Juan Jesus | Football Club Internazionale Milano | 주전 | 27 | 27 | 0 |
| 13 | B+ | 페데리코 페르난데스 | Federico Fernández | Società Sportiva Calcio Napoli | 주전 | 26 | 25 | 0 |
| 14 | B+ | 안드레아 라노키아 | Andrea Ranocchia | Football Club Internazionale Milano | 주전 | 24 | 23 | 1 |
| 15 | B+ | 우고 캄파냐로 | Hugo Campagnaro | Football Club Internazionale Milano | 후보 | 21 | 20 | 0 |
| 16 | B+ | 니콜라 막시모비치 | Nikola Maksimović | Torino Football Club | 주전 | 23 | 20 | 0 |
| 17 | B+ | 안젤로 오그본나 | Angelo Ogbonna | Juventus Football Club | 후보 | 16 | 14 | 0 |
| 18 | B0 | 체사레 보보 | Cesare Bovo | Torino Football Club | 후보 | 20 | 20 | 0 |
| 19 | B0 | 미겔 브리토스 | Miguel Britos | Società Sportiva Calcio Napoli | 후보 | 16 | 15 | 1 |
| 20 | B0 | 파쿤도 론카글리아 | Facundo Roncaglia | Associazione Calcio Fiorentina | 후보 | 13 | 11 | 0 |
| 21 | B0 | 알레시오 로마뇰리 | Alessio Romagnoli | Associazione Sportiva Roma | 후보 | 11 | 8 | 0 |

### LB — 10명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A+ | 콰드워 아사모아 | Kwadwo Asamoah | Juventus Football Club | 주전 | 34 | 32 | 2 |
| 2 | A0 | 나가토모 유토 | Yuto Nagatomo | Football Club Internazionale Milano | 주전 | 34 | 32 | 5 |
| 3 | B+ | 마누엘 파스콸 | Manuel Pasqual | Associazione Calcio Fiorentina | 주전 | 26 | 26 | 0 |
| 4 | B+ | 파우지 굴람 | Faouzi Ghoulam | Società Sportiva Calcio Napoli | 주전 | 15 | 14 | 0 |
| 5 | B+ | 다닐로 담브로시오 | Danilo D'Ambrosio | Torino Football Club | 주전 | 14 | 14 | 2 |
| 6 | B0 | 도두 | Dodô | Associazione Sportiva Roma | 주전 | 19 | 15 | 0 |
| 7 | B0 | 조반니 파스콸레 | Giovanni Pasquale | Torino Football Club | 후보 | 12 | 9 | 0 |
| 8 | B0 | 파블로 아르메로 | Pablo Armero | Società Sportiva Calcio Napoli | 후보 | 14 | 9 | 0 |
| 9 | B0 | 시모네 파도인 | Simone Padoin | Juventus Football Club | 후보 | 21 | 8 | 1 |
| 10 | B- | 페데리코 발차레티 | Federico Balzaretti | Associazione Sportiva Roma | 후보 | 11 | 10 | 1 |

### RB — 9명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A+ | 마테오 다르미안 | Matteo Darmian | Torino Football Club | 주전 | 37 | 37 | 0 |
| 2 | A0 | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus Football Club | 주전 | 27 | 24 | 2 |
| 3 | A0 | 마이콘 | Maicon | Associazione Sportiva Roma | 주전 | 28 | 28 | 2 |
| 4 | B+ | 조나탕 | Jonathan | Football Club Internazionale Milano | 주전 | 31 | 31 | 3 |
| 5 | B+ | 크리스티안 마조 | Christian Maggio | Società Sportiva Calcio Napoli | 주전 | 22 | 22 | 0 |
| 6 | B+ | 네나드 토모비치 | Nenad Tomović | Associazione Calcio Fiorentina | 주전 | 25 | 23 | 0 |
| 7 | B0 | 앙토니 레베예르 | Anthony Réveillère | Società Sportiva Calcio Napoli | 후보 | 13 | 13 | 0 |
| 8 | B0 | 바실리스 토로시디스 | Vasilis Torosidis | Associazione Sportiva Roma | 후보 | 18 | 12 | 1 |
| 9 | B0 | 마우리시오 이슬라 | Mauricio Isla | Juventus Football Club | 후보 | 18 | 10 | 0 |

### DM — 10명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A+ | 안드레아 피를로 | Andrea Pirlo | Juventus Football Club | 주전 | 30 | 29 | 4 |
| 2 | A+ | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 주전 | 32 | 31 | 1 |
| 3 | B+ | 괴칸 인러 | Gökhan Inler | Società Sportiva Calcio Napoli | 주전 | 32 | 30 | 2 |
| 4 | B+ | 에스테반 캄비아소 | Esteban Cambiasso | Football Club Internazionale Milano | 주전 | 32 | 32 | 4 |
| 5 | B+ | 다비드 피사로 | David Pizarro | Associazione Calcio Fiorentina | 주전 | 28 | 24 | 1 |
| 6 | B+ | 주세페 비베스 | Giuseppe Vives | Torino Football Club | 주전 | 33 | 33 | 1 |
| 7 | B0 | 마시모 암브로시니 | Massimo Ambrosini | Associazione Calcio Fiorentina | 후보 | 21 | 16 | 0 |
| 8 | B0 | 발론 베라미 | Valon Behrami | Società Sportiva Calcio Napoli | 후보 | 21 | 16 | 0 |
| 9 | B0 | 미그옌 바샤 | Migjen Basha | Torino Football Club | 후보 | 24 | 13 | 0 |
| 10 | B0 | 즈드라브코 쿠즈마노비치 | Zdravko Kuzmanović | Football Club Internazionale Milano | 후보 | 15 | 11 | 0 |

### CM — 17명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | S | 아르투로 비달 | Arturo Vidal | Juventus Football Club | 주전 | 32 | 28 | 11 |
| 2 | A+ | 폴 포그바 | Paul Pogba | Juventus Football Club | 주전 | 36 | 33 | 7 |
| 3 | A+ | 미랄렘 피아니치 | Miralem Pjanić | Associazione Sportiva Roma | 주전 | 35 | 32 | 6 |
| 4 | A+ | 케빈 스트로트만 | Kevin Strootman | Associazione Sportiva Roma | 주전 | 25 | 24 | 5 |
| 5 | A+ | 보르하 발레로 | Borja Valero | Associazione Calcio Fiorentina | 주전 | 32 | 31 | 6 |
| 6 | A0 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus Football Club | 후보 | 29 | 21 | 4 |
| 7 | B+ | 프레디 과린 | Fredy Guarín | Football Club Internazionale Milano | 주전 | 32 | 26 | 4 |
| 8 | B+ | 알베르토 아퀼라니 | Alberto Aquilani | Associazione Calcio Fiorentina | 주전 | 31 | 31 | 6 |
| 9 | B+ | 오마르 엘 카두리 | Omar El Kaddouri | Torino Football Club | 주전 | 29 | 25 | 5 |
| 10 | B+ | 리키 알바레스 | Ricky Álvarez | Football Club Internazionale Milano | 주전 | 29 | 25 | 4 |
| 11 | B+ | 블레림 제마일리 | Blerim Džemaili | Società Sportiva Calcio Napoli | 주전 | 24 | 18 | 6 |
| 12 | B+ | 라자 나잉골란 | Radja Nainggolan | Associazione Sportiva Roma | 후보 | 17 | 16 | 2 |
| 13 | B+ | 마테오 코바치치 | Mateo Kovačić | Football Club Internazionale Milano | 후보 | 32 | 14 | 0 |
| 14 | B+ | 마티아스 페르난데스 | Matías Fernández | Associazione Calcio Fiorentina | 후보 | 23 | 12 | 3 |
| 15 | B0 | 알렉산데르 파르네루드 | Alexander Farnerud | Torino Football Club | 주전 | 23 | 15 | 4 |
| 16 | B0 | 야스민 쿠르티치 | Jasmin Kurtić | Torino Football Club | 후보 | 16 | 14 | 2 |
| 17 | B0 | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli | 후보 | 15 | 12 | 0 |

### CAM — 3명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A0 | 마레크 함시크 | Marek Hamšík | Società Sportiva Calcio Napoli | 주전 | 28 | 23 | 7 |
| 2 | B+ | 에르나네스 | Hernanes | Football Club Internazionale Milano | 후보 | 14 | 13 | 2 |
| 3 | B0 | 고란 판데프 | Goran Pandev | Società Sportiva Calcio Napoli | 후보 | 29 | 17 | 7 |

### LW — 6명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A0 | 제르비뉴 | Gervinho | Associazione Sportiva Roma | 주전 | 33 | 30 | 9 |
| 2 | A0 | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli | 후보 | 33 | 21 | 11 |
| 3 | B+ | 아뎀 랴이치 | Adem Ljajić | Associazione Sportiva Roma | 후보 | 28 | 17 | 6 |
| 4 | B+ | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli | 주전 | 36 | 25 | 3 |
| 5 | B+ | 후안 마누엘 바르가스 | Juan Manuel Vargas | Associazione Calcio Fiorentina | 주전 | 24 | 14 | 4 |
| 6 | B0 | 요시프 일리치치 | Josip Iličić | Associazione Calcio Fiorentina | 후보 | 21 | 13 | 3 |

### RW — 4명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | A+ | 후안 콰드라도 | Juan Cuadrado | Associazione Calcio Fiorentina | 주전 | 32 | 31 | 11 |
| 2 | A+ | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli | 주전 | 37 | 32 | 15 |
| 3 | B+ | 알레산드로 플로렌치 | Alessandro Florenzi | Associazione Sportiva Roma | 주전 | 37 | 23 | 6 |
| 4 | B0 | 호아킨 | Joaquín | Associazione Calcio Fiorentina | 후보 | 26 | 15 | 2 |

### ST — 15명

| 순위 | 티어 | 한글 이름 | 원어명 | 소속 원어명 | 구단 내 역할 | 리그 출장 | 선발 | 득점 |
|---:|---|---|---|---|---|---:|---:|---:|
| 1 | S | 치로 임모빌레 | Ciro Immobile | Torino Football Club | 주전 | 33 | 29 | 22 |
| 2 | S | 카를로스 테베스 | Carlos Tévez | Juventus Football Club | 주전 | 34 | 30 | 19 |
| 3 | S | 알레시오 체르치 | Alessio Cerci | Torino Football Club | 주전 | 37 | 35 | 13 |
| 4 | A+ | 로드리고 팔라시오 | Rodrigo Palacio | Football Club Internazionale Milano | 주전 | 37 | 36 | 17 |
| 5 | A+ | 곤살로 이과인 | Gonzalo Higuaín | Società Sportiva Calcio Napoli | 주전 | 32 | 28 | 17 |
| 6 | A0 | 페르난도 요렌테 | Fernando Llorente | Juventus Football Club | 주전 | 34 | 29 | 16 |
| 7 | A0 | 주세페 로시 | Giuseppe Rossi | Associazione Calcio Fiorentina | 주전 | 21 | 19 | 16 |
| 8 | A0 | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | 주전 | 26 | 20 | 8 |
| 9 | A0 | 마티아 데스트로 | Mattia Destro | Associazione Sportiva Roma | 후보 | 20 | 14 | 13 |
| 10 | B+ | 마우로 이카르디 | Mauro Icardi | Football Club Internazionale Milano | 주전 | 22 | 12 | 9 |
| 11 | B0 | 알레산드로 마트리 | Alessandro Matri | Associazione Calcio Fiorentina | 후보 | 15 | 10 | 4 |
| 12 | B0 | 리카르도 메조리니 | Riccardo Meggiorini | Torino Football Club | 후보 | 34 | 7 | 0 |
| 13 | B0 | 두반 사파타 | Duván Zapata | Società Sportiva Calcio Napoli | 후보 | 16 | 6 | 5 |
| 14 | B0 | 세바스티안 조빈코 | Sebastian Giovinco | Juventus Football Club | 후보 | 17 | 6 | 2 |
| 15 | B- | 디에고 밀리토 | Diego Milito | Football Club Internazionale Milano | 후보 | 17 | 6 | 2 |

## 4. 잠정 등급 인원

| 티어 | 인원 | 이번 프로젝트 정의 |
|---|---:|---|
| S | 4 | 해당 시기의 대체 불가능한 시즌 기여 |
| A+ | 17 | 리그 내 대체 불가능한 영향력 |
| A0 | 20 | 리그 탑 클래스 |
| A- | 0 | 리그 탑에 준하는 기여 |
| B+ | 33 | 주전 고정에 가까우며 리그 상위권에 근접 |
| B0 | 26 | 팀 내 주전급 선수 |
| B- | 6 | 팀내 주전급이나 당해 기여 제한 |
| C+ | 0 | 제한된 기여, 주전 상당성 재확인 필요 |
| C0 | 0 | 기준 미달 |
| C- | 0 | 기준 미달 |
| D | 0 | 기준 미달 |
| **합계** | **106** | 전원 `draft_unapproved` |

## 5. World Class (S+A+) — 21명

| 티어 | 포지션 | 한글 이름 | 원어명 | 당시 소속팀(원어명) | 생년월일 | 순위 |
|---|---|---|---|---|---|---:|
| S | CM | 아르투로 비달 | Arturo Vidal | Juventus Football Club | 1987-05-22 | 1 |
| S | ST | 치로 임모빌레 | Ciro Immobile | Torino Football Club | 1990-02-20 | 1 |
| S | ST | 카를로스 테베스 | Carlos Tévez | Juventus Football Club | 1984-02-05 | 2 |
| S | ST | 알레시오 체르치 | Alessio Cerci | Torino Football Club | 1987-07-23 | 3 |
| A+ | GK | 모르간 데 산크티스 | Morgan De Sanctis | Associazione Sportiva Roma | 1977-03-26 | 1 |
| A+ | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 1978-01-28 | 2 |
| A+ | CB | 메흐디 베나티아 | Medhi Benatia | Associazione Sportiva Roma | 1987-04-17 | 1 |
| A+ | CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 1984-08-14 | 2 |
| A+ | CB | 레오나르도 보누치 | Leonardo Bonucci | Juventus Football Club | 1987-05-01 | 3 |
| A+ | LB | 콰드워 아사모아 | Kwadwo Asamoah | Juventus Football Club | 1988-12-09 | 1 |
| A+ | RB | 마테오 다르미안 | Matteo Darmian | Torino Football Club | 1989-12-02 | 1 |
| A+ | DM | 안드레아 피를로 | Andrea Pirlo | Juventus Football Club | 1979-05-19 | 1 |
| A+ | DM | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 1983-07-24 | 2 |
| A+ | CM | 폴 포그바 | Paul Pogba | Juventus Football Club | 1993-03-15 | 2 |
| A+ | CM | 미랄렘 피아니치 | Miralem Pjanić | Associazione Sportiva Roma | 1990-04-02 | 3 |
| A+ | CM | 케빈 스트로트만 | Kevin Strootman | Associazione Sportiva Roma | 1990-02-13 | 4 |
| A+ | CM | 보르하 발레로 | Borja Valero | Associazione Calcio Fiorentina | 1985-01-12 | 5 |
| A+ | RW | 후안 콰드라도 | Juan Cuadrado | Associazione Calcio Fiorentina | 1988-05-26 | 1 |
| A+ | RW | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli | 1987-02-11 | 2 |
| A+ | ST | 로드리고 팔라시오 | Rodrigo Palacio | Football Club Internazionale Milano | 1982-02-05 | 4 |
| A+ | ST | 곤살로 이과인 | Gonzalo Higuaín | Società Sportiva Calcio Napoli | 1987-12-10 | 5 |

## 6. League Top Class (S+A++A0+A-) — 41명

| 티어 | 포지션 | 한글 이름 | 원어명 | 당시 소속팀(원어명) | 생년월일 | 순위 |
|---|---|---|---|---|---|---:|
| S | CM | 아르투로 비달 | Arturo Vidal | Juventus Football Club | 1987-05-22 | 1 |
| S | ST | 치로 임모빌레 | Ciro Immobile | Torino Football Club | 1990-02-20 | 1 |
| S | ST | 카를로스 테베스 | Carlos Tévez | Juventus Football Club | 1984-02-05 | 2 |
| S | ST | 알레시오 체르치 | Alessio Cerci | Torino Football Club | 1987-07-23 | 3 |
| A+ | GK | 모르간 데 산크티스 | Morgan De Sanctis | Associazione Sportiva Roma | 1977-03-26 | 1 |
| A+ | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 1978-01-28 | 2 |
| A+ | CB | 메흐디 베나티아 | Medhi Benatia | Associazione Sportiva Roma | 1987-04-17 | 1 |
| A+ | CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 1984-08-14 | 2 |
| A+ | CB | 레오나르도 보누치 | Leonardo Bonucci | Juventus Football Club | 1987-05-01 | 3 |
| A+ | LB | 콰드워 아사모아 | Kwadwo Asamoah | Juventus Football Club | 1988-12-09 | 1 |
| A+ | RB | 마테오 다르미안 | Matteo Darmian | Torino Football Club | 1989-12-02 | 1 |
| A+ | DM | 안드레아 피를로 | Andrea Pirlo | Juventus Football Club | 1979-05-19 | 1 |
| A+ | DM | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 1983-07-24 | 2 |
| A+ | CM | 폴 포그바 | Paul Pogba | Juventus Football Club | 1993-03-15 | 2 |
| A+ | CM | 미랄렘 피아니치 | Miralem Pjanić | Associazione Sportiva Roma | 1990-04-02 | 3 |
| A+ | CM | 케빈 스트로트만 | Kevin Strootman | Associazione Sportiva Roma | 1990-02-13 | 4 |
| A+ | CM | 보르하 발레로 | Borja Valero | Associazione Calcio Fiorentina | 1985-01-12 | 5 |
| A+ | RW | 후안 콰드라도 | Juan Cuadrado | Associazione Calcio Fiorentina | 1988-05-26 | 1 |
| A+ | RW | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli | 1987-02-11 | 2 |
| A+ | ST | 로드리고 팔라시오 | Rodrigo Palacio | Football Club Internazionale Milano | 1982-02-05 | 4 |
| A+ | ST | 곤살로 이과인 | Gonzalo Higuaín | Società Sportiva Calcio Napoli | 1987-12-10 | 5 |
| A0 | GK | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano | 1984-07-14 | 3 |
| A0 | GK | 페페 레이나 | Pepe Reina | Società Sportiva Calcio Napoli | 1982-08-31 | 4 |
| A0 | GK | 네투 | Neto | Associazione Calcio Fiorentina | 1989-07-19 | 5 |
| A0 | CB | 레안드루 카스탕 | Leandro Castán | Associazione Sportiva Roma | 1986-11-05 | 4 |
| A0 | CB | 안드레아 바르찰리 | Andrea Barzagli | Juventus Football Club | 1981-05-08 | 5 |
| A0 | CB | 라울 알비올 | Raúl Albiol | Società Sportiva Calcio Napoli | 1985-09-04 | 6 |
| A0 | CB | 카밀 글리크 | Kamil Glik | Torino Football Club | 1988-02-03 | 7 |
| A0 | CB | 곤살로 로드리게스 | Gonzalo Rodríguez | Associazione Calcio Fiorentina | 1984-04-10 | 8 |
| A0 | CB | 스테판 사비치 | Stefan Savić | Associazione Calcio Fiorentina | 1991-01-08 | 9 |
| A0 | LB | 나가토모 유토 | Yuto Nagatomo | Football Club Internazionale Milano | 1986-09-12 | 2 |
| A0 | RB | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus Football Club | 1984-01-16 | 2 |
| A0 | RB | 마이콘 | Maicon | Associazione Sportiva Roma | 1981-07-26 | 3 |
| A0 | CM | 클라우디오 마르키시오 | Claudio Marchisio | Juventus Football Club | 1986-01-19 | 6 |
| A0 | CAM | 마레크 함시크 | Marek Hamšík | Società Sportiva Calcio Napoli | 1987-07-27 | 1 |
| A0 | LW | 제르비뉴 | Gervinho | Associazione Sportiva Roma | 1987-05-27 | 1 |
| A0 | LW | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli | 1987-05-06 | 2 |
| A0 | ST | 페르난도 요렌테 | Fernando Llorente | Juventus Football Club | 1985-02-26 | 6 |
| A0 | ST | 주세페 로시 | Giuseppe Rossi | Associazione Calcio Fiorentina | 1987-02-01 | 7 |
| A0 | ST | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | 1976-09-27 | 8 |
| A0 | ST | 마티아 데스트로 | Mattia Destro | Associazione Sportiva Roma | 1991-03-20 | 9 |

## 7. Best XI — 3-5-2 (추천 초안 / 사용자 미승인)

전술은 2013-14 당대 유벤투스·인테르·토리노의 높은 사용 비중을 반영한 **대표적 3-5-2 모델**. 수학적으로 해당 세리에 A **380개 경기에서 최다 채택 포메이션**이라는 독립 확인은 아직 수행하지 못했다. S 선수라도 포메이션상 같은 포지션이 아닌 경우 베스트 XI에 누락될 수 있다. 우승/최종 순위 직접 점수 반영 없음.

| 전술 위치 | 한글·원어명 | 소속(원어명) | 티어 | 2013-14 출장·선발·골 | 근거 |
|---|---|---|---|---|---|
| GK | 모르간 데 산크티스 / Morgan De Sanctis | Associazione Sportiva Roma | A+ | 36경기·36선발·0골 | FBref 21 클린시트 리그 1위, BDFutbol 36경기 36선발 23실점. 경쟁 부폰은 33경기 20실점으로 우수하지만 최근 시즌 선방 가능성과 클린시트/실전 가용성을 De Sanctis 우선으로 잠정 가정. |
| CB | 메흐디 베나티아 / Medhi Benatia | Associazione Sportiva Roma | A+ | 33경기·32선발·5골 | 로마 33경기 32선발 5골, 우디네세 시기 2시즌 수비 안정성과 2013-14 대인/라인 커버를 더해 선발. 카스탕·키엘리니·바르찰리와 경쟁. |
| CB | 조르조 키엘리니 / Giorgio Chiellini | Juventus Football Club | A+ | 31경기·31선발·3골 | 31경기 선발 3골, 3백의 왼쪽 CB 커버 범위·대인 전투력. 카스탕·곧잘 뛰던 곤살로 로드리게스와 비교. |
| CB | 레오나르도 보누치 / Leonardo Bonucci | Juventus Football Club | A+ | 29경기·28선발·2골 | 29경기 28선발 2골, 3백 중앙 전방 패스/수비지휘, 바르찰리 및 알비올과 비교. 본 구단 102점 우승은 직접 점수 없음. |
| LWB | 콰드워 아사모아 / Kwadwo Asamoah | Juventus Football Club | A+ | 34경기·32선발·2골 | 좌측 LWB 34경기 32선발 2골, 지속적 공격 폭 제공과 위치 복원. 나가토모·파스콸과 비교. |
| RWB | 마테오 다르미안 / Matteo Darmian | Torino Football Club | A+ | 37경기·37선발·0골 | 오른쪽 RWB 37경기 전 선발 3286분, 리히트슈타이너 27경기24선발과 비교해서도 실전수비·활동 범위·양발 왕복을 우선. 2011-12 Serie B도 평가에 분리 반영. |
| DM | 안드레아 피를로 / Andrea Pirlo | Juventus Football Club | A+ | 30경기·29선발·4골 | 30경기 29선발, 2011-12 및 2012-13 리그 최고급 레지스타로 이어진 2013-14 공간·템포 통제. 데 로시·캄비아소와 경쟁. |
| CM | 아르투로 비달 / Arturo Vidal | Juventus Football Club | S | 32경기·28선발·11골 | 32경기 28선발 11골, 전방 압박·후방 수비적 기여와 세컨드볼 회수. CM 동포지션 포그바·피아니치·보르하 발레로 상대로 S 우위 잠정. |
| CM | 폴 포그바 / Paul Pogba | Juventus Football Club | A+ | 36경기·33선발·7골 | 36경기 33선발 7골, 강한 볼 운반·탈압박·중거리 득점. 피아니치와 스토로트만·보르하 발레로에 비해 해당 포지션 개인 영향 잠정 우선. |
| ST | 치로 임모빌레 / Ciro Immobile | Torino Football Club | S | 33경기·29선발·22골 | 토리노 33경기 29선발 22골로 득점왕, 경기당 영향력. 2011-12 페스카라 Serie B 28골, 2012-13 제노아 Serie A 5골 포함 최근 가중치에서 최고점. |
| ST | 카를로스 테베스 / Carlos Tévez | Juventus Football Club | S | 34경기·30선발·19골 | 유벤투스 34경기 30선발 19골, FBref 7도움, 후방·측면 압박 참여와 공격 전개의 연결. 토리노 세르치, 나폴리 이과인, 인테르 팔라시오도 강력 경쟁. |

검증 대상 후보 중 우열 결정이 어려운 지점: GK 데 산크티스/부폰/한다노비치; CB 베나티아/키엘리니/보누치/카스탕; RWB 다르미안/리히트슈타이너; CM 포그바/피아니치/스토로트만/보르하 발레로; ST 임모빌레/테베스/체르치/팔라시오/이과인.

## 8. 리그 탑급 선수 41명 — 2011-12·2012-13·2013-14 가중 평가 근거

- **아르투로 비달 / Arturo Vidal — CM, S, Juventus Football Club**: 2013-14 Juventus 32/28 starts 11 goals, 2012-13 Juventus 10g and 2011-12 Juventus 7g, defensive ball-winning plus box arrivals. S as unusual complete CM, league championship not point bonus. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 33경기·7골 [Juventus Football Club]; **2012-13**: 31경기·10골 [Juventus Football Club]; **2013-14**: 32경기·11골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **치로 임모빌레 / Ciro Immobile — ST, S, Torino Football Club**: 2011-12 Pescara Serie B 37 appearances28 goals, 2012-13 Genoa Serie A 33apps5 goals, 2013-14 Torino 33apps29starts22g, Serie A Golden Boot; S for 2013-14 impact but previous three-year top-flight consistency is limited, thus subject to S/A+ debate. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 37경기·28골 [Delfino Pescara 1936]; **2012-13**: 33경기·5골 [Genoa Cricket and Football Club]; **2013-14**: 33경기·22골 [Torino Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **카를로스 테베스 / Carlos Tévez — ST, S, Juventus Football Club**: 2011-12 Manchester City PL13apps4g, 2012-13 Man City PL34apps11g, 2013-14 Juventus34apps30starts19g 7assists FBref. S strong supporting second striker creative link, recency weighted and no team-title bonus. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 13경기·4골 [Manchester City Football Club]; **2012-13**: 34경기·11골 [Manchester City Football Club]; **2013-14**: 34경기·19골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **알레시오 체르치 / Alessio Cerci — ST, S, Torino Football Club**: 2011-12 Fiorentina 22 Serie A games5g, 2012-13 Torino 35apps8g, 2013-14 Torino 37apps35starts 13g and FBref co-leader 10assists. S for irreplaceable creation+goal threat, playing second striker/inside forward, not RW in Ventura's 3-5-2. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 22경기·5골 [Associazione Calcio Fiorentina]; **2012-13**: 35경기·8골 [Torino Football Club]; **2013-14**: 37경기·13골 [Torino Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **모르간 데 산크티스 / Morgan De Sanctis — GK, A+, Associazione Sportiva Roma**: 2013-14 Roma 36/36 league starts, 21 clean sheets (FBref league best), conceded 23 goals while playing. Prior 2011-12/2012-13 Napoli starter seasons; positional stability and shot management A+; trophy/club place not an individual bonus. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 37경기·0골 [Società Sportiva Calcio Napoli]; **2012-13**: 34경기·0골 [Società Sportiva Calcio Napoli]; **2013-14**: 36경기·0골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **잔루이지 부폰 / Gianluigi Buffon — GK, A+, Juventus Football Club**: 2013-14 Juventus 33 apps/33 starts, 20 goals conceded while on pitch; active command and shot selection among leading GK. 2011-12/2012-13 good repeat form; 2013-14 no title-score premium, A+ versus De Sanctis's 21 cleansheets. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 35경기·0골 [Juventus Football Club]; **2012-13**: 32경기·0골 [Juventus Football Club]; **2013-14**: 33경기·0골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **메흐디 베나티아 / Medhi Benatia — CB, A+, Associazione Sportiva Roma**: 2011-12 and 2012-13 Udinese defensive mainstay, 2013-14 Roma 33 games/32 starts 5 goals, coverage and aggressive line protection; A+ top defender (Roma final table place excluded). (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 27경기·1골 [Udinese Calcio]; **2012-13**: 19경기·2골 [Udinese Calcio]; **2013-14**: 33경기·5골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **조르조 키엘리니 / Giorgio Chiellini — CB, A+, Juventus Football Club**: 2013-14 Juventus 31/31 starts, three league goals; elite duel intensity + progression after 2011-12/2012-13 upper-level CB play, A+ independently of title. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 34경기·2골 [Juventus Football Club]; **2012-13**: 24경기·1골 [Juventus Football Club]; **2013-14**: 31경기·3골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **레오나르도 보누치 / Leonardo Bonucci — CB, A+, Juventus Football Club**: 2011-12 and 2012-13 Juventus central CB in 3back, 2013-14 29/28 starts 2g with pass progression, A+ for individual organization and deep build up. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 32경기·2골 [Juventus Football Club]; **2012-13**: 33경기·0골 [Juventus Football Club]; **2013-14**: 29경기·2골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **콰드워 아사모아 / Kwadwo Asamoah — LB, A+, Juventus Football Club**: 2013-14 LB 34 league appearances, 32 starts, 2756 minutes and 2 goals in Juventus Football Club. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding. LWB, natural left mid adapted to wingback **2011-12**: 31경기·3골 [Udinese Calcio]; **2012-13**: 27경기·2골 [Juventus Football Club]; **2013-14**: 34경기·2골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **마테오 다르미안 / Matteo Darmian — RB, A+, Torino Football Club**: 2011-12 Torino Serie B, 2012-13 Torino developing RWB, 2013-14 37/37 starts and 3286 minutes all-round flank defender; A+ top Italian WB, three-year growth. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 37경기·0골 [Torino Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **안드레아 피를로 / Andrea Pirlo — DM, A+, Juventus Football Club**: 2011-12 Juventus S peak, 2012-13 Juventus S, 2013-14 Juventus 30 apps29 starts 4g and tempo control. Relative to De Rossi/Cambiasso 3-season reliability A+ provisional. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 37경기·3골 [Juventus Football Club]; **2012-13**: 32경기·5골 [Juventus Football Club]; **2013-14**: 30경기·4골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **다니엘레 데 로시 / Daniele De Rossi — DM, A+, Associazione Sportiva Roma**: 2011-12 and 2012-13 Roma league starting DM, 2013-14 32/31 starts 2724mins, 1g but crucial cover/build-up for Roma strong defence. A+ based on individual positioning not table. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 32경기·1골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **폴 포그바 / Paul Pogba — CM, A+, Juventus Football Club**: 2011-12 Manchester United youth/first senior, 2012-13 Juventus 27apps18 starts5g, 2013-14 36apps33 starts7g, progressive ball-carrying and decisive distant shooting. A+ with sustained S level not yet clear. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 27경기·5골 [Juventus Football Club]; **2013-14**: 36경기·7골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **미랄렘 피아니치 / Miralem Pjanić — CM, A+, Associazione Sportiva Roma**: 2011-12/12-13 Roma midfield creation, 2013-14 35apps32starts 6 goals and high chance creation; A+ direct Pogba/Vidal CM peers. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 35경기·6골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **케빈 스트로트만 / Kevin Strootman — CM, A+, Associazione Sportiva Roma**: 2011-12 and 2012-13 PSV midfield organizer, 2013-14 Roma 25 appearances/24 starts, 5 goals, knee injury March 2014 cuts season; A+ peak quality but 2013-14 availability makes grade review priority. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 25경기·5골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **보르하 발레로 / Borja Valero — CM, A+, Associazione Calcio Fiorentina**: 2011-12 Villarreal ball-carry creator, 2012-13 Fiorentina37starts1g but many assists, 2013-14 Fiorentina32apps31starts6g; A+ tempo/forward passing. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 37경기·1골 [Associazione Calcio Fiorentina]; **2013-14**: 32경기·6골 [Associazione Calcio Fiorentina]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **후안 콰드라도 / Juan Cuadrado — RW, A+, Associazione Calcio Fiorentina**: 2011-12 Lecce wide, 2012-13 Fiorentina36apps5g, 2013-14 Fiorentina32apps31starts11g, role RW/inside forward. A+ first-team key 3-year progression. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 36경기·5골 [Associazione Calcio Fiorentina]; **2013-14**: 32경기·11골 [Associazione Calcio Fiorentina]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **호세 카예혼 / José Callejón — RW, A+, Società Sportiva Calcio Napoli**: 2011-12/2012-13 Real Madrid 6g/3g La Liga periods, 2013-14 Napoli37apps32starts15g via forward running from right, A+ in role with exceptional current form. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 37경기·15골 [Società Sportiva Calcio Napoli]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **로드리고 팔라시오 / Rodrigo Palacio — ST, A+, Football Club Internazionale Milano**: 2011-12 Genoa 19g, 2012-13 Inter 12g, 2013-14 Inter37apps36starts17g; high availability and finishing S? A+ due individual sustained Inter offense though second-striker role. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 37경기·17골 [Football Club Internazionale Milano]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **곤살로 이과인 / Gonzalo Higuaín — ST, A+, Società Sportiva Calcio Napoli**: 2011-12 Real Madrid22g, 2012-13 Real Madrid16g, 2013-14 Napoli32apps28starts17g. A+ consistent high-level finishing/attacking support in first Italy season. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 32경기·17골 [Società Sportiva Calcio Napoli]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **사미르 한다노비치 / Samir Handanović — GK, A0, Football Club Internazionale Milano**: 2011-12 Udinese full 38 starts, 2012-13 Inter strong GK, 2013-14 Inter36/36 starts, conceded32 while on pitch; reliable save-range, A0/A+ contender. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 38경기·0골 [Udinese Calcio]; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 36경기·0골 [Football Club Internazionale Milano]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **페페 레이나 / Pepe Reina — GK, A0, Società Sportiva Calcio Napoli**: 2013-14 GK 30 league appearances, 30 starts, 2601 minutes and 0 goals in Società Sportiva Calcio Napoli. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding.  **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 30경기·0골 [Società Sportiva Calcio Napoli]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **네투 / Neto — GK, A0, Associazione Calcio Fiorentina**: 2013-14 GK 35 league appearances, 35 starts, 3150 minutes and 0 goals in Associazione Calcio Fiorentina. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding. Norberto Murara Neto **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 6경기·0골 [Associazione Calcio Fiorentina]; **2013-14**: 35경기·0골 [Associazione Calcio Fiorentina]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **레안드루 카스탕 / Leandro Castán — CB, A0, Associazione Sportiva Roma**: 2013-14 Roma 36/36 starts, 3147 BDFutbol league minutes; position sense and deep block cover gave strong consistency. A0 vs Chiellini/Benatia. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 36경기·0골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **안드레아 바르찰리 / Andrea Barzagli — CB, A0, Juventus Football Club**: 2013-14 CB 26 league appearances, 26 starts, 2289 minutes and 0 goals in Juventus Football Club. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding. right centre-back **2011-12**: 35경기·1골 [Juventus Football Club]; **2012-13**: 34경기·0골 [Juventus Football Club]; **2013-14**: 26경기·0골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **라울 알비올 / Raúl Albiol — CB, A0, Società Sportiva Calcio Napoli**: 2013-14 CB 32 league appearances, 30 starts, 2644 minutes and 1 goals in Società Sportiva Calcio Napoli. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding.  **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 32경기·1골 [Società Sportiva Calcio Napoli]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **카밀 글리크 / Kamil Glik — CB, A0, Torino Football Club**: 2013-14 CB 34 league appearances, 33 starts, 2965 minutes and 2 goals in Torino Football Club. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding. central CB and aerial leader **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 34경기·2골 [Torino Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **곤살로 로드리게스 / Gonzalo Rodríguez — CB, A0, Associazione Calcio Fiorentina**: 2013-14 CB 33 league appearances, 33 starts, 2942 minutes and 4 goals in Associazione Calcio Fiorentina. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding.  **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 35경기·6골 [Associazione Calcio Fiorentina]; **2013-14**: 33경기·4골 [Associazione Calcio Fiorentina]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **스테판 사비치 / Stefan Savić — CB, A0, Associazione Calcio Fiorentina**: 2013-14 CB 31 league appearances, 31 starts, 2790 minutes and 0 goals in Associazione Calcio Fiorentina. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding.  **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 26경기·2골 [Associazione Calcio Fiorentina]; **2013-14**: 31경기·0골 [Associazione Calcio Fiorentina]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **나가토모 유토 / Yuto Nagatomo — LB, A0, Football Club Internazionale Milano**: 2011-12/2012-13 Inter recurring left-sided starter, 2013-14 34 matches32 starts5 goals R/L wingback; A0 significant high engine flank. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 35경기·2골 [Football Club Internazionale Milano]; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 34경기·5골 [Football Club Internazionale Milano]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **슈테판 리히트슈타이너 / Stephan Lichtsteiner — RB, A0, Juventus Football Club**: 2013-14 RB 27 league appearances, 24 starts, 2117 minutes and 2 goals in Juventus Football Club. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding. RWB **2011-12**: 35경기·2골 [Juventus Football Club]; **2012-13**: 28경기·4골 [Juventus Football Club]; **2013-14**: 27경기·2골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **마이콘 / Maicon — RB, A0, Associazione Sportiva Roma**: 2013-14 RB 28 league appearances, 28 starts, 2327 minutes and 2 goals in Associazione Sportiva Roma. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding.  **2011-12**: 24경기·2골 [Football Club Internazionale Milano]; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 28경기·2골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **클라우디오 마르키시오 / Claudio Marchisio — CM, A0, Juventus Football Club**: 2013-14 CM 29 league appearances, 21 starts, 1986 minutes and 4 goals in Juventus Football Club. Personal positional influence, finish, playmaking and availability used for provisional qualitative tier; older two years weighted lower and individual independent competitive video/source audit outstanding. starter-equivalent CM rotation **2011-12**: 36경기·9골 [Juventus Football Club]; **2012-13**: 29경기·6골 [Juventus Football Club]; **2013-14**: 29경기·4골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **마레크 함시크 / Marek Hamšík — CAM, A0, Società Sportiva Calcio Napoli**: 2011-12 Napoli9g, 2012-13 Napoli11g, 2013-14 Napoli28 apps23 starts7g with injury. A0 because high 2013-14 weight penalizes reduced role and chances vs 2012-13 elite. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 37경기·9골 [Società Sportiva Calcio Napoli]; **2012-13**: 38경기·11골 [Società Sportiva Calcio Napoli]; **2013-14**: 28경기·7골 [Società Sportiva Calcio Napoli]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **제르비뉴 / Gervinho — LW, A0, Associazione Sportiva Roma**: 2011-12 Arsenal28apps4g, 2012-13 Arsenal18apps5g, 2013-14 Roma33apps30starts9g10assists FBref. A0 upper tier; earlier two years variable and one-year elite Serie A output. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 28경기·4골 [Arsenal Football Club]; **2012-13**: 18경기·5골 [Arsenal Football Club]; **2013-14**: 33경기·9골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **드리스 메르턴스 / Dries Mertens — LW, A0, Società Sportiva Calcio Napoli**: 2011-12/2012-13 PSV strong finishing, 2013-14 Napoli33apps21starts11g. A0 as super-sub/outlet with limited starts vs Insigne25 starts. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 33경기·11골 [Società Sportiva Calcio Napoli]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **페르난도 요렌테 / Fernando Llorente — ST, A0, Juventus Football Club**: 2011-12 Athletic Bilbao league17 goals, 2012-13 Bilbao limited league games after contract situation, 2013-14 Juventus34apps29starts16g. A0 for current aerial/link play with prior year volatility. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 34경기·16골 [Juventus Football Club]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **주세페 로시 / Giuseppe Rossi — ST, A0, Associazione Calcio Fiorentina**: 2011-12 and 2012-13 serious knee layoffs for Villarreal/Fiorentina, 2013-14 Fiorentina 21 apps19 starts16 goals. Current finishing A0 but no S due long gaps. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 21경기·16골 [Associazione Calcio Fiorentina]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **프란체스코 토티 / Francesco Totti — ST, A0, Associazione Sportiva Roma**: 2011-12 Roma8g, 2012-13 Roma12g, 2013-14 Roma26apps20starts8g, FBref 10 assists, central false-9 high playmaking but reduced playing time. A0 proviso. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 26경기·8골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.
- **마티아 데스트로 / Mattia Destro — ST, A0, Associazione Sportiva Roma**: 2011-12 Siena12 Serie A goals, 2012-13 Roma6g after injury, 2013-14 Roma20apps14starts13g (1228 minutes) clinical penalty-box finishing A0 limited minutes. (All tiers/ranks provisional pending independent 3-year peer video audit.) **2011-12**: 이전 시즌 개인 수치 미확인; **2012-13**: 이전 시즌 개인 수치 미확인; **2013-14**: 20경기·13골 [Associazione Sportiva Roma]. 옛 미승인 DRAFT의 이전 숫자는 개별 외부 원자료로 독립 재검증을 완료한 것으로 보지 않는다.

## 9. 시즌 이적·실전 역할·역사적 예외

- Parma finished 2013-14 Serie A sixth but had 2014-15 UEFA club licence refused and CONI appeal lost, so did NOT actually enter 2014-15 UEL. Seventh Torino entered instead. Parma EXCLUDED; Torino INCLUDED. European entry must use actual competition not hypothetical earned slot.
- 2013-14 Napoli third played 2014-15 UCL playoff, lost to Athletic Club and then UEL group; UCL actual entry counts. Roma second UCL group; Juventus first UCL group. Fiorentina/Inter/Torino actually played UEL.
- Torino 3-5-2 Ventura official 2013-09-01 starting 11 placed Darmian right wingback and Danilo D'Ambrosio left; D'Ambrosio transfer to Inter January, 14 Torino starts vs 8 Inter starts. Candidate nominated Torino ONLY; never double-ranked in Inter.
- Juventus 2013 summer brought Tevez from Manchester City and Llorente from Athletic Bilbao; previous 2011-12 and 2012-13 Tevez City PL records independently FBref. Pirlo, Vidal and Pogba remained in Juventus; do not count Juventus title bonus.
- Roma 2013 summer got Benatia from Udinese, Gervinho from Arsenal, Strootman from PSV, De Sanctis from Napoli, Maicon from Manchester City. Kevin Strootman 2014 March knee injury reduced 2013-14 to 25 Roma league appearances.
- Napoli 2013 summer transferred Cavani to PSG (excluded Napoli), bought Higuaín from Real Madrid, Callejón from Real Madrid and Mertens from PSV, signed Pepe Reina from Liverpool. 2014 winter signed Jorginho from Verona and Ghoulam from St Etienne; only their Napoli club appearances recorded.
- Fiorentina 2013-14 Giuseppe Rossi 21 matches 16 goals due repeated knee injury; 2011-12 and 2012-13 serious prolonged absence means three-season availability not assumed. Mario Gomez 9 matches 5 starts means not considered guaranteed starting attacker.
- Fiorentina Cuadrado 2013-14 played most in right attacking wing, not forced into RB although sometimes wing-back; this season registered RW. Torino Cerci played second striker with Immobile in Ventura 3-5-2, not forced to RW even though an inside right tendency.
- 2013-14 BDFutbol GK negative G means conceded goals; their scored goals are 0. Apps/starts/minutes/goals sourced only for specific club and Serie A league; BDFutbol and FBref minute totals sometimes differ by a few mins.
- League assists stay null until a consistent individual quantitative lookup for all nominees. FBref leaders Cerci/Gervinho 10 assists independently checked for tier context only, not silently inserted into stats.
- No 2014-15 UEFA Intertoto tournament.
- All grades rankings and best XI provisional. Full 2011-12, 2012-13, 2013-14 every player quality and positional peer-auditing pending independent fixture-level and match-specific comparison.

## 10. 신뢰할 수 있는 외부 수치 원자료 / 출처

- **Juventus Football Club**: [BDFutbol 2013-14 Serie A 1군 명단·시즌 경기/선발/분/득점](https://www.bdfutbol.com/en/t/t2013-143004.html)
- **Associazione Sportiva Roma**: [BDFutbol 2013-14 Serie A 1군 명단·시즌 경기/선발/분/득점](https://www.bdfutbol.com/en/t/t2013-143009.html)
- **Società Sportiva Calcio Napoli**: [BDFutbol 2013-14 Serie A 1군 명단·시즌 경기/선발/분/득점](https://www.bdfutbol.com/en/t/t2013-143003.html)
- **Associazione Calcio Fiorentina**: [BDFutbol 2013-14 Serie A 1군 명단·시즌 경기/선발/분/득점](https://www.bdfutbol.com/en/t/t2013-143014.html)
- **Football Club Internazionale Milano**: [BDFutbol 2013-14 Serie A 1군 명단·시즌 경기/선발/분/득점](https://www.bdfutbol.com/en/t/t2013-143008.html)
- **Torino Football Club**: [BDFutbol 2013-14 Serie A 1군 명단·시즌 경기/선발/분/득점](https://www.bdfutbol.com/en/t/t2013-143019.html)
- [FBref 2013-14 Serie A 전체 통계](https://fbref.com/en/comps/11/2013-2014/2013-2014-Serie-A-Stats)
- [Torino FC Cerci official profile, 2011-12/2012-13/2013-14](https://www.torinofc.it/prima-squadra/2013-2014/Centrocampisti/cerci-alessio)
- [Opta Analyst Immobile career record with Pescara / Genoa / Torino](https://theanalyst.com/players/6445/ciro-immobile/career)
- [FBref Carlos Tevez past two EPL seasons](https://fbref.com/en/players/c1a26d43/Carlos-Tevez)
- [FBref Gervinho past two EPL seasons](https://fbref.com/en/players/e468c053/Gervinho)
- [Torino FC September 2013 official 3-5-2 lineup, left D'Ambrosio / right Darmian](https://www.torinofc.it/news/01/09/2013/atalanta-torino-le-formazioni-ufficiali_3098)
- [UEFA 2014-15 Europa League participating clubs](https://www.uefa.com/uefaeuropaleague/history/seasons/2015/clubs/)
- [Parma 2014 licence appeal rejection, Sky Sports](https://www.skysports.com/football/news/9330931/parma-will-not-compete-in-the-europa-league-next-season-after-losing-an-appeal)

## 11. 최종 실행 상태 구분

| 항목 | 현재 증빙/남은 항목 |
|---|---|
| 구단 선정 | 2014-15 실제 6팀 UEFA 참가, Parma 제외 Torino 포함 |
| 선수 후보 | 106명 전원 실전 출장 선별, 6팀×대표 11명+포지션 후보 ≤1 |
| 리그 경기/선발/출전 시간/득점 | 2013-14 106/106 BDFutbol 시즌 개인 기록표로 채움 |
| 선수 이름/원어 구단/생년월일 | 106/106 기록, 두 출처별 전원 독립 출생자료 감사 미완 |
| 도움 전체 현재 시즌 | 106/106 null (일부 상위 선수 FBref 도움 수치만 정성 검토) |
| 3시즌 전체 선수 질적 동 포지션 비교 | 0/106 독립 전수 완료 |
| 티어·상대 순위 | 106/106 잠정 |
| World Class / League Top | 21 / 41명 잠정 |
| Best XI | 3-5-2 11명 잠정 |
| GitHub Actions CI | 별도 workflow 결과를 보고서/대화에서 기록 |
| GitHub Pages 웹사이트 | 실제 CI/배포와 독립 브라우저 UI 검사를 별도로 기록 |
| 최종 승인 | 미승인 |

이번 작업은 **Serie A 2013-14 ONLY**. 사용자 명시적 지시 전 다음 시즌 2014-15을 평가하지 않으며 기존 시즌 DRAFT를 자동 승인하지 않는다.
