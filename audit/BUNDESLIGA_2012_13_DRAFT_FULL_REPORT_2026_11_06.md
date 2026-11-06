# Football Archive — Bundesliga 2012-13 DRAFT full player integration and audit

- Created: 2026-11-06
- Assessment window: 2010-11 / 2011-12 / 2012-13; most recent has highest weight.
- Qualifying European season: 2013-14, **actual participation**, not just league rank.
- Current JSON: `data/bundesliga-2012-13.json` (status `draft_unapproved`).
- Evaluation: all nominal tiers and ranks **PROVISIONAL**, not accepted by user and NOT independently historically verified in full.
- Matchwise position frequency and historical 3-year individual qualitative audit: **not completed**, do not infer from structural tests.
- **No arbitrary cap on number of starters per club**. At most one backup per team/position.

## 1. Eligible UEFA teams (seven)
| League rank | Club | 2013-14 actual UEFA | Route | Players |
|---:|---|---|---|---:|
| 1 | FC Bayern München | UCL | Bundesliga rank 1, actually entered UEFA UCL 2013-14 | 22 |
| 2 | BV 09 Borussia Dortmund | UCL | Bundesliga rank 2, actually entered UEFA UCL 2013-14 | 19 |
| 3 | Bayer 04 Leverkusen | UCL | Bundesliga rank 3, actually entered UEFA UCL 2013-14 | 17 |
| 4 | FC Schalke 04 | UCL | Bundesliga rank 4, actually entered UEFA UCL 2013-14 | 20 |
| 5 | SC Freiburg | UEL | Bundesliga rank 5, actually entered UEFA UEL 2013-14 | 17 |
| 6 | SG Eintracht Frankfurt | UEL | Bundesliga rank 6, actually entered UEFA UEL 2013-14 | 17 |
| 12 | VfB Stuttgart | UEL | DFB-Pokal finalist (Bayern won cup and had Champions League place); 2013-14 UEL played | 18 |

## 2. All seven club nominees
Columns `apps/starts/minutes` are **Bundesliga 2012-13 only**. Subjective tiers and position ranking are unfinished historical judgments.

### FC Bayern München (22 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 마누엘 노이어 | Manuel Neuer | 1986-03-27 | 주전급 | 31/31/2790 | S | 1 | partially_verified |
| GK | 톰 슈타르케 | Tom Starke | 1981-03-18 | 후보 | 3/3/270 | C+ | 11 | partially_verified |
| CB | 단테 | Dante | 1983-10-18 | 주전급 | 29/29/2610 | A+ | 1 | partially_verified |
| CB | 제롬 보아텡 | Jérôme Boateng | 1988-09-03 | 주전급 | 26/25/2245 | A0 | 3 | partially_verified |
| CB | 홀거 바트슈투버 | Holger Badstuber | 1989-03-13 | 주전급 | 12/12/983 | B+ | 15 | partially_verified |
| CB | 다니엘 판바이턴 | Daniel van Buyten | 1978-02-07 | 후보 | 13/11/1065 | B0 | 18 | partially_verified |
| LB | 다비드 알라바 | David Alaba | 1992-06-24 | 주전급 | 23/22/1993 | A+ | 1 | partially_verified |
| LB | 디에고 콘텐토 | Diego Contento | 1990-05-01 | 후보 | 5/4/377 | C+ | 11 | partially_verified |
| RB | 필리프 람 | Philipp Lahm | 1983-11-11 | 주전급 | 29/28/2502 | S | 1 | partially_verified |
| RB | 하피냐 | Rafinha | 1985-09-07 | 후보 | 13/6/568 | B0 | 12 | partially_verified |
| DM | 하비 마르티네스 | Javi Martínez | 1988-09-02 | 주전급 | 27/19/1757 | A+ | 1 | partially_verified |
| DM | 루이스 구스타부 | Luiz Gustavo | 1987-07-23 | 후보 | 22/16/1454 | B+ | 7 | partially_verified |
| CM | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | 1984-08-01 | 주전급 | 28/27/2358 | A+ | 1 | partially_verified |
| CM | 아나톨리 티모슈크 | Anatoliy Tymoshchuk | 1979-03-30 | 후보 | 16/5/580 | B- | 16 | partially_verified |
| CAM | 토니 크로스 | Toni Kroos | 1990-01-04 | 주전급 | 24/23/1925 | A0 | 2 | partially_verified |
| LW | 프랑크 리베리 | Franck Ribéry | 1983-04-07 | 주전급 | 27/24/2115 | S | 1 | partially_verified |
| RW | 토마스 뮐러 | Thomas Müller | 1989-09-13 | 주전급 | 28/25/2095 | A+ | 1 | partially_verified |
| RW | 아르연 로번 | Arjen Robben | 1984-01-23 | 주전급 | 16/11/983 | A0 | 3 | partially_verified |
| RW | 제르단 샤키리 | Xherdan Shaqiri | 1991-10-10 | 후보 | 26/13/1370 | B+ | 8 | partially_verified |
| ST | 마리오 만주키치 | Mario Mandžukić | 1986-05-21 | 주전급 | 24/22/1741 | A+ | 3 | partially_verified |
| ST | 마리오 고메스 | Mario Gómez | 1985-07-10 | 주전급 | 21/9/877 | A0 | 4 | partially_verified |
| ST | 클라우디오 피사로 | Claudio Pizarro | 1978-10-03 | 후보 | 20/7/744 | B0 | 10 | partially_verified |

### BV 09 Borussia Dortmund (19 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 로만 바이덴펠러 | Roman Weidenfeller | 1980-08-06 | 주전급 | 31/31/2780 | A0 | 2 | partially_verified |
| GK | 미첼 랑게라크 | Mitchell Langerak | 1988-08-22 | 후보 | 3/3/270 | B- | 10 | partially_verified |
| CB | 마츠 후멜스 | Mats Hummels | 1988-12-16 | 주전급 | 28/28/2375 | A+ | 2 | partially_verified |
| CB | 네벤 수보티치 | Neven Subotić | 1988-12-10 | 주전급 | 25/25/2242 | A0 | 4 | partially_verified |
| CB | 펠리페 산타나 | Felipe Santana | 1986-03-17 | 후보 | 21/15/1454 | B+ | 14 | partially_verified |
| LB | 마르첼 슈멜처 | Marcel Schmelzer | 1988-01-22 | 주전급 | 29/29/2489 | A- | 2 | partially_verified |
| RB | 우카시 피슈체크 | Łukasz Piszczek | 1985-06-03 | 주전급 | 29/28/2533 | A+ | 2 | partially_verified |
| DM | 제바스티안 켈 | Sebastian Kehl | 1980-02-13 | 주전급 | 22/19/1495 | B+ | 6 | partially_verified |
| DM | 스벤 벤더 | Sven Bender | 1989-04-27 | 주전급 | 20/15/1323 | B+ | 8 | partially_verified |
| CM | 일카이 귄도안 | İlkay Gündoğan | 1990-10-24 | 주전급 | 28/26/2122 | A+ | 2 | partially_verified |
| CM | 모리츠 라이트너 | Moritz Leitner | 1992-12-08 | 후보 | 25/8/981 | B- | 14 | partially_verified |
| CAM | 마리오 괴체 | Mario Götze | 1992-06-03 | 주전급 | 28/23/2027 | A+ | 1 | partially_verified |
| CAM | 누리 샤힌 | Nuri Şahin | 1988-09-05 | 후보 | 15/9/892 | B0 | 7 | partially_verified |
| LW | 마르코 로이스 | Marco Reus | 1989-05-31 | 주전급 | 32/27/2346 | A+ | 2 | partially_verified |
| LW | 케빈 그로스크로이츠 | Kevin Großkreutz | 1988-07-19 | 후보 | 29/19/1743 | B+ | 7 | partially_verified |
| RW | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | 1985-12-14 | 주전급 | 27/23/1937 | A0 | 2 | partially_verified |
| RW | 이반 페리시치 | Ivan Perišić | 1989-02-02 | 후보 | 14/5/505 | B- | 11 | partially_verified |
| ST | 로베르트 레반도프스키 | Robert Lewandowski | 1988-08-21 | 주전급 | 31/29/2594 | S | 1 | partially_verified |
| ST | 율리안 쉬버 | Julian Schieber | 1989-02-13 | 후보 | 23/6/787 | B- | 13 | partially_verified |

### Bayer 04 Leverkusen (17 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 베른트 레노 | Bernd Leno | 1992-03-04 | 주전급 | 32/32/2880 | A- | 4 | partially_verified |
| GK | 미하엘 렌징 | Michael Rensing | 1984-05-14 | 후보 | 2/2/180 | C+ | 12 | partially_verified |
| CB | 필리프 볼샤이트 | Philipp Wollscheid | 1989-03-06 | 주전급 | 31/31/2790 | A- | 6 | partially_verified |
| CB | 외메르 토프라크 | Ömer Toprak | 1989-07-21 | 주전급 | 26/26/2233 | B+ | 11 | partially_verified |
| CB | 마누엘 프리드리히 | Manuel Friedrich | 1979-09-13 | 후보 | 11/5/455 | B- | 22 | partially_verified |
| LB | 미할 카들레츠 | Michal Kadlec | 1984-12-13 | 주전급 | 14/14/1204 | B0 | 8 | partially_verified |
| LB | 제바스티안 뵈니슈 | Sebastian Boenisch | 1987-02-01 | 주전급 | 15/12/1135 | B0 | 9 | partially_verified |
| RB | 다니 카르바할 | Dani Carvajal | 1992-01-11 | 주전급 | 32/31/2780 | A- | 3 | partially_verified |
| RB | 다니엘 슈바브 | Daniel Schwaab | 1988-08-23 | 후보 | 16/8/796 | B0 | 10 | partially_verified |
| DM | 슈테판 라이나르츠 | Stefan Reinartz | 1989-01-01 | 주전급 | 29/29/2445 | B+ | 4 | partially_verified |
| CM | 라르스 벤더 | Lars Bender | 1989-04-27 | 주전급 | 33/32/2790 | A0 | 3 | partially_verified |
| CM | 곤살로 카스트로 | Gonzalo Castro | 1987-06-11 | 주전급 | 31/29/2520 | A- | 4 | partially_verified |
| CM | 지몬 롤페스 | Simon Rolfes | 1982-01-21 | 주전급 | 30/26/2312 | B+ | 7 | partially_verified |
| CM | 옌스 헤겔러 | Jens Hegeler | 1988-01-22 | 후보 | 27/5/792 | B- | 15 | partially_verified |
| LW | 안드레 쉬를레 | André Schürrle | 1990-11-06 | 주전급 | 34/34/2830 | A- | 3 | partially_verified |
| RW | 시드니 샘 | Sidney Sam | 1988-01-31 | 주전급 | 22/10/948 | B+ | 9 | partially_verified |
| ST | 슈테판 키슬링 | Stefan Kießling | 1984-01-25 | 주전급 | 34/34/3019 | A+ | 2 | partially_verified |

### FC Schalke 04 (20 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 티모 힐데브란트 | Timo Hildebrand | 1979-04-05 | 주전급 | 21/21/1890 | B+ | 7 | partially_verified |
| GK | 라르스 운너슈탈 | Lars Unnerstall | 1990-07-20 | 주전급 | 13/13/1170 | B0 | 8 | partially_verified |
| CB | 베네딕트 회베데스 | Benedikt Höwedes | 1988-02-29 | 주전급 | 32/32/2880 | A- | 5 | partially_verified |
| CB | 조엘 마티프 | Joël Matip | 1991-08-08 | 주전급 | 32/32/2873 | B+ | 7 | partially_verified |
| CB | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | 1992-02-23 | 후보 | 10/9/809 | B0 | 19 | partially_verified |
| LB | 크리스티안 푹스 | Christian Fuchs | 1986-04-07 | 주전급 | 29/23/2132 | B+ | 5 | partially_verified |
| LB | 세아드 콜라시나츠 | Sead Kolašinac | 1993-06-20 | 주전급 | 16/12/1103 | B0 | 10 | partially_verified |
| RB | 우치다 아쓰토 | Atsuto Uchida | 1988-03-27 | 주전급 | 24/24/2036 | B+ | 6 | partially_verified |
| RB | 마르코 회거 | Marco Höger | 1989-09-16 | 주전급 | 22/15/1373 | B+ | 7 | partially_verified |
| DM | 로만 노이슈테터 | Roman Neustädter | 1988-02-18 | 주전급 | 31/31/2672 | B+ | 3 | partially_verified |
| CM | 저메인 존스 | Jermaine Jones | 1981-11-03 | 주전급 | 25/23/2014 | B+ | 9 | partially_verified |
| CM | 루이스 홀트비 | Lewis Holtby | 1990-09-18 | 주전급 | 19/18/1459 | B+ | 10 | partially_verified |
| CAM | 율리안 드락슬러 | Julian Draxler | 1993-09-20 | 주전급 | 30/24/2139 | A- | 5 | partially_verified |
| CAM | 하파에우 | Raffael | 1985-03-28 | 후보 | 16/7/792 | B0 | 9 | partially_verified |
| LW | 미셰우 바스토스 | Michel Bastos | 1983-08-02 | 주전급 | 14/14/1079 | B+ | 8 | partially_verified |
| LW | 이브라힘 아펠라이 | Ibrahim Afellay | 1986-04-02 | 주전급 | 10/8/627 | B0 | 9 | partially_verified |
| RW | 헤페르손 파르판 | Jefferson Farfán | 1984-10-26 | 주전급 | 27/25/2173 | A- | 5 | partially_verified |
| RW | 트란퀼로 바르네타 | Tranquillo Barnetta | 1985-05-22 | 후보 | 21/2/441 | B- | 12 | partially_verified |
| ST | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | 1983-08-12 | 주전급 | 26/26/2232 | B+ | 6 | partially_verified |
| ST | 치프리안 마리카 | Ciprian Marica | 1985-10-02 | 후보 | 13/8/711 | B- | 12 | partially_verified |

### SC Freiburg (17 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 올리버 바우만 | Oliver Baumann | 1990-06-02 | 주전급 | 34/34/3060 | A- | 3 | partially_verified |
| CB | 팔루 디아녜 | Fallou Diagné | 1989-08-14 | 주전급 | 30/29/2446 | B+ | 9 | partially_verified |
| CB | 마티아스 긴터 | Matthias Ginter | 1994-01-19 | 주전급 | 23/21/1947 | B+ | 13 | partially_verified |
| CB | 파벨 크르마슈 | Pavel Krmaš | 1980-03-03 | 후보 | 17/16/1335 | B0 | 17 | partially_verified |
| LB | 올리버 조르크 | Oliver Sorg | 1990-05-29 | 주전급 | 32/32/2868 | B+ | 4 | partially_verified |
| LB | 크리스티안 귄터 | Christian Günter | 1993-02-28 | 후보 | 7/3/319 | C+ | 12 | partially_verified |
| RB | 멘수르 무이자 | Mensur Mujdža | 1984-03-28 | 주전급 | 23/21/1868 | B0 | 8 | partially_verified |
| RB | 베가르 에겐 헤덴스타드 | Vegar Eggen Hedenstad | 1991-06-26 | 후보 | 16/9/794 | B- | 13 | partially_verified |
| DM | 율리안 슈스터 | Julian Schuster | 1985-04-15 | 주전급 | 31/31/2688 | B+ | 2 | partially_verified |
| CM | 세드리크 마키아디 | Cédric Makiadi | 1984-02-23 | 주전급 | 29/26/2268 | B+ | 8 | partially_verified |
| CM | 요하네스 플룸 | Johannes Flum | 1987-12-14 | 후보 | 26/10/1151 | B0 | 12 | partially_verified |
| CAM | 막스 크루제 | Max Kruse | 1988-03-19 | 주전급 | 34/33/2948 | A- | 3 | partially_verified |
| CAM | 얀 로젠탈 | Jan Rosenthal | 1986-04-07 | 후보 | 20/18/1475 | B+ | 6 | partially_verified |
| LW | 다니엘 칼리주리 | Daniel Caligiuri | 1988-01-15 | 주전급 | 29/27/2447 | B+ | 5 | partially_verified |
| RW | 조나탕 슈미트 | Jonathan Schmid | 1990-06-26 | 주전급 | 33/33/2900 | A- | 4 | partially_verified |
| ST | 카림 게데 | Karim Guédé | 1985-01-07 | 주전급 | 21/12/975 | B0 | 8 | partially_verified |
| ST | 제바스티안 프라이스 | Sebastian Freis | 1985-04-23 | 후보 | 12/6/509 | B- | 14 | partially_verified |

### SG Eintracht Frankfurt (17 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 케빈 트라프 | Kevin Trapp | 1990-07-08 | 주전급 | 26/26/2340 | A- | 5 | partially_verified |
| GK | 오카 니콜로프 | Oka Nikolov | 1974-05-25 | 후보 | 8/8/696 | B- | 9 | partially_verified |
| CB | 카를로스 삼브라노 | Carlos Zambrano | 1989-07-10 | 주전급 | 30/30/2646 | B+ | 8 | partially_verified |
| CB | 밤바 안데르손 | Bamba Anderson | 1988-01-10 | 주전급 | 28/28/2491 | B+ | 10 | partially_verified |
| CB | 마르코 루스 | Marco Russ | 1985-08-04 | 후보 | 10/7/618 | B- | 21 | partially_verified |
| LB | 바스티안 오치프카 | Bastian Oczipka | 1989-01-12 | 주전급 | 33/33/2890 | B+ | 3 | partially_verified |
| RB | 제바스티안 융 | Sebastian Jung | 1990-06-22 | 주전급 | 32/32/2839 | B+ | 4 | partially_verified |
| RB | 스테파노 첼로치 | Stefano Celozzi | 1988-11-02 | 후보 | 27/6/993 | B0 | 11 | partially_verified |
| DM | 피르민 슈베글러 | Pirmin Schwegler | 1987-03-09 | 주전급 | 27/25/2209 | B+ | 5 | partially_verified |
| CM | 제바스티안 로데 | Sebastian Rode | 1990-10-11 | 주전급 | 33/33/2915 | B+ | 6 | partially_verified |
| CM | 마르틴 라니히 | Martin Lanig | 1984-07-11 | 후보 | 19/4/356 | B- | 17 | partially_verified |
| CAM | 알렉산더 마이어 | Alexander Meier | 1983-01-17 | 주전급 | 31/31/2725 | A- | 4 | partially_verified |
| LW | 이누이 다카시 | Takashi Inui | 1988-06-02 | 주전급 | 33/33/2647 | B+ | 4 | partially_verified |
| RW | 슈테판 아이그너 | Stefan Aigner | 1987-08-20 | 주전급 | 34/34/2834 | B+ | 6 | partially_verified |
| ST | 카림 마트무르 | Karim Matmour | 1985-06-25 | 후보 | 24/12/1199 | B0 | 7 | partially_verified |
| ST | 스르잔 라키치 | Srđan Lakić | 1983-10-02 | 주전급 | 14/9/753 | B0 | 9 | partially_verified |
| ST | 올리비에 오세앙 | Olivier Occéan | 1981-10-23 | 주전급 | 18/10/990 | B- | 11 | partially_verified |

### VfB Stuttgart (18 players)

| Position | Korean name | Original name | Born | Role | Apps/Starts/Minutes | Tier | Position rank | Verification |
|---|---|---|---|---|---|---|---:|---|
| GK | 스벤 울라이히 | Sven Ulreich | 1988-08-03 | 주전급 | 34/34/3060 | B+ | 6 | partially_verified |
| CB | 제르다르 타스치 | Serdar Taşçı | 1987-04-24 | 주전급 | 25/25/2169 | B+ | 12 | partially_verified |
| CB | 게오르크 니더마이어 | Georg Niedermeier | 1986-02-26 | 주전급 | 27/25/2240 | B0 | 16 | partially_verified |
| CB | 프란시스코 로드리게스 | Francisco Rodríguez | 1981-10-20 | 후보 | 14/9/893 | B- | 20 | partially_verified |
| LB | 아르튀르 보카 | Arthur Boka | 1983-04-02 | 주전급 | 25/23/2014 | B0 | 6 | partially_verified |
| LB | 크리스티안 몰리나로 | Cristian Molinaro | 1983-07-30 | 주전급 | 25/19/1758 | B0 | 7 | partially_verified |
| RB | 사카이 고토쿠 | Gōtoku Sakai | 1991-03-14 | 주전급 | 27/27/2404 | B+ | 5 | partially_verified |
| RB | 안토니오 뤼디거 | Antonio Rüdiger | 1993-03-03 | 후보 | 16/11/999 | B0 | 9 | partially_verified |
| DM | 윌리암 크비스트 | William Kvist | 1985-02-24 | 주전급 | 23/21/1861 | B0 | 9 | partially_verified |
| CM | 크리스티안 겐트너 | Christian Gentner | 1985-08-14 | 주전급 | 34/34/3033 | B+ | 5 | partially_verified |
| CM | 라파엘 홀츠하우저 | Raphael Holzhauser | 1993-02-16 | 주전급 | 21/14/1153 | B0 | 11 | partially_verified |
| CM | 즈드라브코 쿠즈마노비치 | Zdravko Kuzmanović | 1987-09-22 | 주전급 | 12/7/737 | B0 | 13 | partially_verified |
| CAM | 알렉산드루 막심 | Alexandru Maxim | 1990-07-08 | 주전급 | 11/8/676 | B0 | 8 | partially_verified |
| CAM | 터마시 허이널 | Tamás Hajnal | 1981-03-15 | 주전급 | 13/7/473 | B- | 10 | partially_verified |
| LW | 이브라히마 트라오레 | Ibrahima Traoré | 1988-04-21 | 주전급 | 32/27/2327 | B+ | 6 | partially_verified |
| RW | 마르틴 하르니크 | Martin Harnik | 1987-06-10 | 주전급 | 30/29/2509 | B+ | 7 | partially_verified |
| RW | 오카자키 신지 | Shinji Okazaki | 1986-04-16 | 후보 | 25/11/1007 | B- | 10 | partially_verified |
| ST | 베다드 이비셰비치 | Vedad Ibišević | 1984-08-06 | 주전급 | 30/30/2665 | B+ | 5 | partially_verified |

## 3. Combined position ranking

| Position | League-wide rank | Name | Club | Tier | Starts/Minutes |
|---|---:|---|---|---|---|
| GK | 1 | 마누엘 노이어 (Manuel Neuer) | FC Bayern München | S | 31/2790 |
| GK | 2 | 로만 바이덴펠러 (Roman Weidenfeller) | BV 09 Borussia Dortmund | A0 | 31/2780 |
| GK | 3 | 올리버 바우만 (Oliver Baumann) | SC Freiburg | A- | 34/3060 |
| GK | 4 | 베른트 레노 (Bernd Leno) | Bayer 04 Leverkusen | A- | 32/2880 |
| GK | 5 | 케빈 트라프 (Kevin Trapp) | SG Eintracht Frankfurt | A- | 26/2340 |
| GK | 6 | 스벤 울라이히 (Sven Ulreich) | VfB Stuttgart | B+ | 34/3060 |
| GK | 7 | 티모 힐데브란트 (Timo Hildebrand) | FC Schalke 04 | B+ | 21/1890 |
| GK | 8 | 라르스 운너슈탈 (Lars Unnerstall) | FC Schalke 04 | B0 | 13/1170 |
| GK | 9 | 오카 니콜로프 (Oka Nikolov) | SG Eintracht Frankfurt | B- | 8/696 |
| GK | 10 | 미첼 랑게라크 (Mitchell Langerak) | BV 09 Borussia Dortmund | B- | 3/270 |
| GK | 11 | 톰 슈타르케 (Tom Starke) | FC Bayern München | C+ | 3/270 |
| GK | 12 | 미하엘 렌징 (Michael Rensing) | Bayer 04 Leverkusen | C+ | 2/180 |
| CB | 1 | 단테 (Dante) | FC Bayern München | A+ | 29/2610 |
| CB | 2 | 마츠 후멜스 (Mats Hummels) | BV 09 Borussia Dortmund | A+ | 28/2375 |
| CB | 3 | 제롬 보아텡 (Jérôme Boateng) | FC Bayern München | A0 | 25/2245 |
| CB | 4 | 네벤 수보티치 (Neven Subotić) | BV 09 Borussia Dortmund | A0 | 25/2242 |
| CB | 5 | 베네딕트 회베데스 (Benedikt Höwedes) | FC Schalke 04 | A- | 32/2880 |
| CB | 6 | 필리프 볼샤이트 (Philipp Wollscheid) | Bayer 04 Leverkusen | A- | 31/2790 |
| CB | 7 | 조엘 마티프 (Joël Matip) | FC Schalke 04 | B+ | 32/2873 |
| CB | 8 | 카를로스 삼브라노 (Carlos Zambrano) | SG Eintracht Frankfurt | B+ | 30/2646 |
| CB | 9 | 팔루 디아녜 (Fallou Diagné) | SC Freiburg | B+ | 29/2446 |
| CB | 10 | 밤바 안데르손 (Bamba Anderson) | SG Eintracht Frankfurt | B+ | 28/2491 |
| CB | 11 | 외메르 토프라크 (Ömer Toprak) | Bayer 04 Leverkusen | B+ | 26/2233 |
| CB | 12 | 제르다르 타스치 (Serdar Taşçı) | VfB Stuttgart | B+ | 25/2169 |
| CB | 13 | 마티아스 긴터 (Matthias Ginter) | SC Freiburg | B+ | 21/1947 |
| CB | 14 | 펠리페 산타나 (Felipe Santana) | BV 09 Borussia Dortmund | B+ | 15/1454 |
| CB | 15 | 홀거 바트슈투버 (Holger Badstuber) | FC Bayern München | B+ | 12/983 |
| CB | 16 | 게오르크 니더마이어 (Georg Niedermeier) | VfB Stuttgart | B0 | 25/2240 |
| CB | 17 | 파벨 크르마슈 (Pavel Krmaš) | SC Freiburg | B0 | 16/1335 |
| CB | 18 | 다니엘 판바이턴 (Daniel van Buyten) | FC Bayern München | B0 | 11/1065 |
| CB | 19 | 키리아코스 파파도풀로스 (Kyriakos Papadopoulos) | FC Schalke 04 | B0 | 9/809 |
| CB | 20 | 프란시스코 로드리게스 (Francisco Rodríguez) | VfB Stuttgart | B- | 9/893 |
| CB | 21 | 마르코 루스 (Marco Russ) | SG Eintracht Frankfurt | B- | 7/618 |
| CB | 22 | 마누엘 프리드리히 (Manuel Friedrich) | Bayer 04 Leverkusen | B- | 5/455 |
| LB | 1 | 다비드 알라바 (David Alaba) | FC Bayern München | A+ | 22/1993 |
| LB | 2 | 마르첼 슈멜처 (Marcel Schmelzer) | BV 09 Borussia Dortmund | A- | 29/2489 |
| LB | 3 | 바스티안 오치프카 (Bastian Oczipka) | SG Eintracht Frankfurt | B+ | 33/2890 |
| LB | 4 | 올리버 조르크 (Oliver Sorg) | SC Freiburg | B+ | 32/2868 |
| LB | 5 | 크리스티안 푹스 (Christian Fuchs) | FC Schalke 04 | B+ | 23/2132 |
| LB | 6 | 아르튀르 보카 (Arthur Boka) | VfB Stuttgart | B0 | 23/2014 |
| LB | 7 | 크리스티안 몰리나로 (Cristian Molinaro) | VfB Stuttgart | B0 | 19/1758 |
| LB | 8 | 미할 카들레츠 (Michal Kadlec) | Bayer 04 Leverkusen | B0 | 14/1204 |
| LB | 9 | 제바스티안 뵈니슈 (Sebastian Boenisch) | Bayer 04 Leverkusen | B0 | 12/1135 |
| LB | 10 | 세아드 콜라시나츠 (Sead Kolašinac) | FC Schalke 04 | B0 | 12/1103 |
| LB | 11 | 디에고 콘텐토 (Diego Contento) | FC Bayern München | C+ | 4/377 |
| LB | 12 | 크리스티안 귄터 (Christian Günter) | SC Freiburg | C+ | 3/319 |
| RB | 1 | 필리프 람 (Philipp Lahm) | FC Bayern München | S | 28/2502 |
| RB | 2 | 우카시 피슈체크 (Łukasz Piszczek) | BV 09 Borussia Dortmund | A+ | 28/2533 |
| RB | 3 | 다니 카르바할 (Dani Carvajal) | Bayer 04 Leverkusen | A- | 31/2780 |
| RB | 4 | 제바스티안 융 (Sebastian Jung) | SG Eintracht Frankfurt | B+ | 32/2839 |
| RB | 5 | 사카이 고토쿠 (Gōtoku Sakai) | VfB Stuttgart | B+ | 27/2404 |
| RB | 6 | 우치다 아쓰토 (Atsuto Uchida) | FC Schalke 04 | B+ | 24/2036 |
| RB | 7 | 마르코 회거 (Marco Höger) | FC Schalke 04 | B+ | 15/1373 |
| RB | 8 | 멘수르 무이자 (Mensur Mujdža) | SC Freiburg | B0 | 21/1868 |
| RB | 9 | 안토니오 뤼디거 (Antonio Rüdiger) | VfB Stuttgart | B0 | 11/999 |
| RB | 10 | 다니엘 슈바브 (Daniel Schwaab) | Bayer 04 Leverkusen | B0 | 8/796 |
| RB | 11 | 스테파노 첼로치 (Stefano Celozzi) | SG Eintracht Frankfurt | B0 | 6/993 |
| RB | 12 | 하피냐 (Rafinha) | FC Bayern München | B0 | 6/568 |
| RB | 13 | 베가르 에겐 헤덴스타드 (Vegar Eggen Hedenstad) | SC Freiburg | B- | 9/794 |
| DM | 1 | 하비 마르티네스 (Javi Martínez) | FC Bayern München | A+ | 19/1757 |
| DM | 2 | 율리안 슈스터 (Julian Schuster) | SC Freiburg | B+ | 31/2688 |
| DM | 3 | 로만 노이슈테터 (Roman Neustädter) | FC Schalke 04 | B+ | 31/2672 |
| DM | 4 | 슈테판 라이나르츠 (Stefan Reinartz) | Bayer 04 Leverkusen | B+ | 29/2445 |
| DM | 5 | 피르민 슈베글러 (Pirmin Schwegler) | SG Eintracht Frankfurt | B+ | 25/2209 |
| DM | 6 | 제바스티안 켈 (Sebastian Kehl) | BV 09 Borussia Dortmund | B+ | 19/1495 |
| DM | 7 | 루이스 구스타부 (Luiz Gustavo) | FC Bayern München | B+ | 16/1454 |
| DM | 8 | 스벤 벤더 (Sven Bender) | BV 09 Borussia Dortmund | B+ | 15/1323 |
| DM | 9 | 윌리암 크비스트 (William Kvist) | VfB Stuttgart | B0 | 21/1861 |
| CM | 1 | 바스티안 슈바인슈타이거 (Bastian Schweinsteiger) | FC Bayern München | A+ | 27/2358 |
| CM | 2 | 일카이 귄도안 (İlkay Gündoğan) | BV 09 Borussia Dortmund | A+ | 26/2122 |
| CM | 3 | 라르스 벤더 (Lars Bender) | Bayer 04 Leverkusen | A0 | 32/2790 |
| CM | 4 | 곤살로 카스트로 (Gonzalo Castro) | Bayer 04 Leverkusen | A- | 29/2520 |
| CM | 5 | 크리스티안 겐트너 (Christian Gentner) | VfB Stuttgart | B+ | 34/3033 |
| CM | 6 | 제바스티안 로데 (Sebastian Rode) | SG Eintracht Frankfurt | B+ | 33/2915 |
| CM | 7 | 지몬 롤페스 (Simon Rolfes) | Bayer 04 Leverkusen | B+ | 26/2312 |
| CM | 8 | 세드리크 마키아디 (Cédric Makiadi) | SC Freiburg | B+ | 26/2268 |
| CM | 9 | 저메인 존스 (Jermaine Jones) | FC Schalke 04 | B+ | 23/2014 |
| CM | 10 | 루이스 홀트비 (Lewis Holtby) | FC Schalke 04 | B+ | 18/1459 |
| CM | 11 | 라파엘 홀츠하우저 (Raphael Holzhauser) | VfB Stuttgart | B0 | 14/1153 |
| CM | 12 | 요하네스 플룸 (Johannes Flum) | SC Freiburg | B0 | 10/1151 |
| CM | 13 | 즈드라브코 쿠즈마노비치 (Zdravko Kuzmanović) | VfB Stuttgart | B0 | 7/737 |
| CM | 14 | 모리츠 라이트너 (Moritz Leitner) | BV 09 Borussia Dortmund | B- | 8/981 |
| CM | 15 | 옌스 헤겔러 (Jens Hegeler) | Bayer 04 Leverkusen | B- | 5/792 |
| CM | 16 | 아나톨리 티모슈크 (Anatoliy Tymoshchuk) | FC Bayern München | B- | 5/580 |
| CM | 17 | 마르틴 라니히 (Martin Lanig) | SG Eintracht Frankfurt | B- | 4/356 |
| CAM | 1 | 마리오 괴체 (Mario Götze) | BV 09 Borussia Dortmund | A+ | 23/2027 |
| CAM | 2 | 토니 크로스 (Toni Kroos) | FC Bayern München | A0 | 23/1925 |
| CAM | 3 | 막스 크루제 (Max Kruse) | SC Freiburg | A- | 33/2948 |
| CAM | 4 | 알렉산더 마이어 (Alexander Meier) | SG Eintracht Frankfurt | A- | 31/2725 |
| CAM | 5 | 율리안 드락슬러 (Julian Draxler) | FC Schalke 04 | A- | 24/2139 |
| CAM | 6 | 얀 로젠탈 (Jan Rosenthal) | SC Freiburg | B+ | 18/1475 |
| CAM | 7 | 누리 샤힌 (Nuri Şahin) | BV 09 Borussia Dortmund | B0 | 9/892 |
| CAM | 8 | 알렉산드루 막심 (Alexandru Maxim) | VfB Stuttgart | B0 | 8/676 |
| CAM | 9 | 하파에우 (Raffael) | FC Schalke 04 | B0 | 7/792 |
| CAM | 10 | 터마시 허이널 (Tamás Hajnal) | VfB Stuttgart | B- | 7/473 |
| LW | 1 | 프랑크 리베리 (Franck Ribéry) | FC Bayern München | S | 24/2115 |
| LW | 2 | 마르코 로이스 (Marco Reus) | BV 09 Borussia Dortmund | A+ | 27/2346 |
| LW | 3 | 안드레 쉬를레 (André Schürrle) | Bayer 04 Leverkusen | A- | 34/2830 |
| LW | 4 | 이누이 다카시 (Takashi Inui) | SG Eintracht Frankfurt | B+ | 33/2647 |
| LW | 5 | 다니엘 칼리주리 (Daniel Caligiuri) | SC Freiburg | B+ | 27/2447 |
| LW | 6 | 이브라히마 트라오레 (Ibrahima Traoré) | VfB Stuttgart | B+ | 27/2327 |
| LW | 7 | 케빈 그로스크로이츠 (Kevin Großkreutz) | BV 09 Borussia Dortmund | B+ | 19/1743 |
| LW | 8 | 미셰우 바스토스 (Michel Bastos) | FC Schalke 04 | B+ | 14/1079 |
| LW | 9 | 이브라힘 아펠라이 (Ibrahim Afellay) | FC Schalke 04 | B0 | 8/627 |
| RW | 1 | 토마스 뮐러 (Thomas Müller) | FC Bayern München | A+ | 25/2095 |
| RW | 2 | 야쿠프 브와슈치코프스키 (Jakub Błaszczykowski) | BV 09 Borussia Dortmund | A0 | 23/1937 |
| RW | 3 | 아르연 로번 (Arjen Robben) | FC Bayern München | A0 | 11/983 |
| RW | 4 | 조나탕 슈미트 (Jonathan Schmid) | SC Freiburg | A- | 33/2900 |
| RW | 5 | 헤페르손 파르판 (Jefferson Farfán) | FC Schalke 04 | A- | 25/2173 |
| RW | 6 | 슈테판 아이그너 (Stefan Aigner) | SG Eintracht Frankfurt | B+ | 34/2834 |
| RW | 7 | 마르틴 하르니크 (Martin Harnik) | VfB Stuttgart | B+ | 29/2509 |
| RW | 8 | 제르단 샤키리 (Xherdan Shaqiri) | FC Bayern München | B+ | 13/1370 |
| RW | 9 | 시드니 샘 (Sidney Sam) | Bayer 04 Leverkusen | B+ | 10/948 |
| RW | 10 | 오카자키 신지 (Shinji Okazaki) | VfB Stuttgart | B- | 11/1007 |
| RW | 11 | 이반 페리시치 (Ivan Perišić) | BV 09 Borussia Dortmund | B- | 5/505 |
| RW | 12 | 트란퀼로 바르네타 (Tranquillo Barnetta) | FC Schalke 04 | B- | 2/441 |
| ST | 1 | 로베르트 레반도프스키 (Robert Lewandowski) | BV 09 Borussia Dortmund | S | 29/2594 |
| ST | 2 | 슈테판 키슬링 (Stefan Kießling) | Bayer 04 Leverkusen | A+ | 34/3019 |
| ST | 3 | 마리오 만주키치 (Mario Mandžukić) | FC Bayern München | A+ | 22/1741 |
| ST | 4 | 마리오 고메스 (Mario Gómez) | FC Bayern München | A0 | 9/877 |
| ST | 5 | 베다드 이비셰비치 (Vedad Ibišević) | VfB Stuttgart | B+ | 30/2665 |
| ST | 6 | 클라스얀 휜텔라르 (Klaas-Jan Huntelaar) | FC Schalke 04 | B+ | 26/2232 |
| ST | 7 | 카림 마트무르 (Karim Matmour) | SG Eintracht Frankfurt | B0 | 12/1199 |
| ST | 8 | 카림 게데 (Karim Guédé) | SC Freiburg | B0 | 12/975 |
| ST | 9 | 스르잔 라키치 (Srđan Lakić) | SG Eintracht Frankfurt | B0 | 9/753 |
| ST | 10 | 클라우디오 피사로 (Claudio Pizarro) | FC Bayern München | B0 | 7/744 |
| ST | 11 | 올리비에 오세앙 (Olivier Occéan) | SG Eintracht Frankfurt | B- | 10/990 |
| ST | 12 | 치프리안 마리카 (Ciprian Marica) | FC Schalke 04 | B- | 8/711 |
| ST | 13 | 율리안 쉬버 (Julian Schieber) | BV 09 Borussia Dortmund | B- | 6/787 |
| ST | 14 | 제바스티안 프라이스 (Sebastian Freis) | SC Freiburg | B- | 6/509 |

## 4. Tier distribution

| Tier | Count |
|---|---:|
| S | 4 |
| A+ | 12 |
| A0 | 8 |
| A- | 14 |
| B+ | 43 |
| B0 | 27 |
| B- | 18 |
| C+ | 4 |
| C0 | 0 |
| C- | 0 |
| D | 0 |
| **Total** | **130** |

World Class: **16** (S/A+). League Top Class: **38** (S/A+/A0/A-).
No tier quotas imposed. Tier assignments are provisional current-season-weighted judgments, not evidence that all three years were independently studied.

## 5. 4-2-3-1 Best XI — proposed_unapproved

| Position | Player | Club | Season contribution | Tier |
|---|---|---|---|---|
| GK | 마누엘 노이어 (Manuel Neuer) | FC Bayern München | 31 apps / 31 starts / 2790 min | S |
| CB | 단테 (Dante) | FC Bayern München | 29 apps / 29 starts / 2610 min | A+ |
| CB | 마츠 후멜스 (Mats Hummels) | BV 09 Borussia Dortmund | 28 apps / 28 starts / 2375 min | A+ |
| LB | 다비드 알라바 (David Alaba) | FC Bayern München | 23 apps / 22 starts / 1993 min | A+ |
| RB | 필리프 람 (Philipp Lahm) | FC Bayern München | 29 apps / 28 starts / 2502 min | S |
| DM | 하비 마르티네스 (Javi Martínez) | FC Bayern München | 27 apps / 19 starts / 1757 min | A+ |
| CM | 바스티안 슈바인슈타이거 (Bastian Schweinsteiger) | FC Bayern München | 28 apps / 27 starts / 2358 min | A+ |
| CAM | 마리오 괴체 (Mario Götze) | BV 09 Borussia Dortmund | 28 apps / 23 starts / 2027 min | A+ |
| LW | 프랑크 리베리 (Franck Ribéry) | FC Bayern München | 27 apps / 24 starts / 2115 min | S |
| RW | 토마스 뮐러 (Thomas Müller) | FC Bayern München | 28 apps / 25 starts / 2095 min | A+ |
| ST | 로베르트 레반도프스키 (Robert Lewandowski) | BV 09 Borussia Dortmund | 31 apps / 29 starts / 2594 min | S |

Representative formation: `4-2-3-1` (working representative, NOT verified as leaguewide most common).

## 6. Source-linked three-season evidence status

| Year | Players with source URL or inherited source reference | Verified independently with full individual qualitative assessment |
|---|---:|---:|
| 2010-11 | 49 | 0 |
| 2011-12 | 76 | 0 |
| 2012-13 | 130 | 0 |

2012-13 BDFutbol per-club roster tables are the direct source of apps/starts/minutes/goals. 
DFB club rosters support DOB and registered squad identity; initial one-source recording is **not** independent dual verification.
2010-11 / 2011-12 values are sourced from older draft only when matched; these are marked `reused_old_draft_not_independently_reverified`.
Missing earlier years use `null` and `evidence_pending` (not zero). No unsupported assist totals were manufactured.
No known player-level data has `verified` status.

## 7. Selected recent-season individual rationale and historical limitations

- **마누엘 노이어** (GK, FC Bayern München): 2012-13: 31 league appearances, 31 starts, 2790 minutes, 0 goals. Provisional peer-relative GK grade S; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=34 appearances, old DRAFT only; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **톰 슈타르케** (GK, FC Bayern München): 2012-13: 3 league appearances, 3 starts, 270 minutes, 0 goals. Provisional peer-relative GK grade C+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **단테** (CB, FC Bayern München): 2012-13: 29 league appearances, 29 starts, 2610 minutes, 1 goals. Provisional peer-relative CB grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=18 appearances, old DRAFT only; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **제롬 보아텡** (CB, FC Bayern München): 2012-13: 26 league appearances, 25 starts, 2245 minutes, 2 goals. Provisional peer-relative CB grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=27 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **홀거 바트슈투버** (CB, FC Bayern München): 2012-13: 12 league appearances, 12 starts, 983 minutes, 0 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=23 appearances, old DRAFT only; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **다니엘 판바이턴** (CB, FC Bayern München): 2012-13: 13 league appearances, 11 starts, 1065 minutes, 0 goals. Provisional peer-relative CB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=21 appearances, old DRAFT only; 2011-12=13 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **다비드 알라바** (LB, FC Bayern München): 2012-13: 23 league appearances, 22 starts, 1993 minutes, 3 goals. Provisional peer-relative LB grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=30 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **디에고 콘텐토** (LB, FC Bayern München): 2012-13: 5 league appearances, 4 starts, 377 minutes, 0 goals. Provisional peer-relative LB grade C+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=14 appearances, old DRAFT only; 2011-12=11 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **필리프 람** (RB, FC Bayern München): 2012-13: 29 league appearances, 28 starts, 2502 minutes, 0 goals. Provisional peer-relative RB grade S; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=34 appearances, old DRAFT only; 2011-12=31 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **하피냐** (RB, FC Bayern München): 2012-13: 13 league appearances, 6 starts, 568 minutes, 2 goals. Provisional peer-relative RB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=24 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **하비 마르티네스** (DM, FC Bayern München): 2012-13: 27 league appearances, 19 starts, 1757 minutes, 3 goals. Provisional peer-relative DM grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **루이스 구스타부** (DM, FC Bayern München): 2012-13: 22 league appearances, 16 starts, 1454 minutes, 4 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=14 appearances, old DRAFT only; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **바스티안 슈바인슈타이거** (CM, FC Bayern München): 2012-13: 28 league appearances, 27 starts, 2358 minutes, 7 goals. Provisional peer-relative CM grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=32 appearances, old DRAFT only; 2011-12=22 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **아나톨리 티모슈크** (CM, FC Bayern München): 2012-13: 16 league appearances, 5 starts, 580 minutes, 1 goals. Provisional peer-relative CM grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=26 appearances, old DRAFT only; 2011-12=23 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **토니 크로스** (CAM, FC Bayern München): 2012-13: 24 league appearances, 23 starts, 1925 minutes, 6 goals. Provisional peer-relative CAM grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=27 appearances, old DRAFT only; 2011-12=31 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **프랑크 리베리** (LW, FC Bayern München): 2012-13: 27 league appearances, 24 starts, 2115 minutes, 10 goals. Provisional peer-relative LW grade S; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=25 appearances, old DRAFT only; 2011-12=32 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **토마스 뮐러** (RW, FC Bayern München): 2012-13: 28 league appearances, 25 starts, 2095 minutes, 13 goals. Provisional peer-relative RW grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=34 appearances, old DRAFT only; 2011-12=34 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **아르연 로번** (RW, FC Bayern München): 2012-13: 16 league appearances, 11 starts, 983 minutes, 5 goals. Provisional peer-relative RW grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=14 appearances, old DRAFT only; 2011-12=24 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **제르단 샤키리** (RW, FC Bayern München): 2012-13: 26 league appearances, 13 starts, 1370 minutes, 4 goals. Provisional peer-relative RW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **마리오 만주키치** (ST, FC Bayern München): 2012-13: 24 league appearances, 22 starts, 1741 minutes, 15 goals. Provisional peer-relative ST grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **마리오 고메스** (ST, FC Bayern München): 2012-13: 21 league appearances, 9 starts, 877 minutes, 11 goals. Provisional peer-relative ST grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=32 appearances, old DRAFT only; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **클라우디오 피사로** (ST, FC Bayern München): 2012-13: 20 league appearances, 7 starts, 744 minutes, 6 goals. Provisional peer-relative ST grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131016.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen).
- **로만 바이덴펠러** (GK, BV 09 Borussia Dortmund): 2012-13: 31 league appearances, 31 starts, 2780 minutes, 0 goals. Provisional peer-relative GK grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=33 appearances, old DRAFT only; 2011-12=32 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **미첼 랑게라크** (GK, BV 09 Borussia Dortmund): 2012-13: 3 league appearances, 3 starts, 270 minutes, 0 goals. Provisional peer-relative GK grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=1 appearances, old DRAFT only; 2011-12=2 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **마츠 후멜스** (CB, BV 09 Borussia Dortmund): 2012-13: 28 league appearances, 28 starts, 2375 minutes, 1 goals. Provisional peer-relative CB grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=32 appearances, old DRAFT only; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **네벤 수보티치** (CB, BV 09 Borussia Dortmund): 2012-13: 25 league appearances, 25 starts, 2242 minutes, 3 goals. Provisional peer-relative CB grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=31 appearances, old DRAFT only; 2011-12=25 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **펠리페 산타나** (CB, BV 09 Borussia Dortmund): 2012-13: 21 league appearances, 15 starts, 1454 minutes, 1 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=13 appearances, old DRAFT only; 2011-12=13 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **마르첼 슈멜처** (LB, BV 09 Borussia Dortmund): 2012-13: 29 league appearances, 29 starts, 2489 minutes, 0 goals. Provisional peer-relative LB grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=34 appearances, old DRAFT only; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **우카시 피슈체크** (RB, BV 09 Borussia Dortmund): 2012-13: 29 league appearances, 28 starts, 2533 minutes, 2 goals. Provisional peer-relative RB grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=33 appearances, old DRAFT only; 2011-12=32 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **제바스티안 켈** (DM, BV 09 Borussia Dortmund): 2012-13: 22 league appearances, 19 starts, 1495 minutes, 0 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=27 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **스벤 벤더** (DM, BV 09 Borussia Dortmund): 2012-13: 20 league appearances, 15 starts, 1323 minutes, 1 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=31 appearances, old DRAFT only; 2011-12=24 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **일카이 귄도안** (CM, BV 09 Borussia Dortmund): 2012-13: 28 league appearances, 26 starts, 2122 minutes, 3 goals. Provisional peer-relative CM grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **모리츠 라이트너** (CM, BV 09 Borussia Dortmund): 2012-13: 25 league appearances, 8 starts, 981 minutes, 0 goals. Provisional peer-relative CM grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=17 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **마리오 괴체** (CAM, BV 09 Borussia Dortmund): 2012-13: 28 league appearances, 23 starts, 2027 minutes, 10 goals. Provisional peer-relative CAM grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=33 appearances, old DRAFT only; 2011-12=17 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **누리 샤힌** (CAM, BV 09 Borussia Dortmund): 2012-13: 15 league appearances, 9 starts, 892 minutes, 3 goals. Provisional peer-relative CAM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=30 appearances, old DRAFT only; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **마르코 로이스** (LW, BV 09 Borussia Dortmund): 2012-13: 32 league appearances, 27 starts, 2346 minutes, 14 goals. Provisional peer-relative LW grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=32 appearances, old DRAFT only; 2011-12=32 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **케빈 그로스크로이츠** (LW, BV 09 Borussia Dortmund): 2012-13: 29 league appearances, 19 starts, 1743 minutes, 2 goals. Provisional peer-relative LW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=34 appearances, old DRAFT only; 2011-12=31 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **야쿠프 브와슈치코프스키** (RW, BV 09 Borussia Dortmund): 2012-13: 27 league appearances, 23 starts, 1937 minutes, 11 goals. Provisional peer-relative RW grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=29 appearances, old DRAFT only; 2011-12=29 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **이반 페리시치** (RW, BV 09 Borussia Dortmund): 2012-13: 14 league appearances, 5 starts, 505 minutes, 2 goals. Provisional peer-relative RW grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **로베르트 레반도프스키** (ST, BV 09 Borussia Dortmund): 2012-13: 31 league appearances, 29 starts, 2594 minutes, 24 goals. Provisional peer-relative ST grade S; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=33 appearances, old DRAFT only; 2011-12=34 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **율리안 쉬버** (ST, BV 09 Borussia Dortmund): 2012-13: 23 league appearances, 6 starts, 787 minutes, 3 goals. Provisional peer-relative ST grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=18 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131003.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258).
- **베른트 레노** (GK, Bayer 04 Leverkusen): 2012-13: 32 league appearances, 32 starts, 2880 minutes, 0 goals. Provisional peer-relative GK grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **미하엘 렌징** (GK, Bayer 04 Leverkusen): 2012-13: 2 league appearances, 2 starts, 180 minutes, 0 goals. Provisional peer-relative GK grade C+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **필리프 볼샤이트** (CB, Bayer 04 Leverkusen): 2012-13: 31 league appearances, 31 starts, 2790 minutes, 2 goals. Provisional peer-relative CB grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **외메르 토프라크** (CB, Bayer 04 Leverkusen): 2012-13: 26 league appearances, 26 starts, 2233 minutes, 1 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=27 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **마누엘 프리드리히** (CB, Bayer 04 Leverkusen): 2012-13: 11 league appearances, 5 starts, 455 minutes, 0 goals. Provisional peer-relative CB grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=19 appearances, old DRAFT only; 2011-12=24 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **미할 카들레츠** (LB, Bayer 04 Leverkusen): 2012-13: 14 league appearances, 14 starts, 1204 minutes, 1 goals. Provisional peer-relative LB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=32 appearances, old DRAFT only; 2011-12=29 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **제바스티안 뵈니슈** (LB, Bayer 04 Leverkusen): 2012-13: 15 league appearances, 12 starts, 1135 minutes, 1 goals. Provisional peer-relative LB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **다니 카르바할** (RB, Bayer 04 Leverkusen): 2012-13: 32 league appearances, 31 starts, 2780 minutes, 1 goals. Provisional peer-relative RB grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **다니엘 슈바브** (RB, Bayer 04 Leverkusen): 2012-13: 16 league appearances, 8 starts, 796 minutes, 0 goals. Provisional peer-relative RB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=30 appearances, old DRAFT only; 2011-12=23 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **슈테판 라이나르츠** (DM, Bayer 04 Leverkusen): 2012-13: 29 league appearances, 29 starts, 2445 minutes, 3 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=31 appearances, old DRAFT only; 2011-12=30 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **라르스 벤더** (CM, Bayer 04 Leverkusen): 2012-13: 33 league appearances, 32 starts, 2790 minutes, 3 goals. Provisional peer-relative CM grade A; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=27 appearances, old DRAFT only; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **곤살로 카스트로** (CM, Bayer 04 Leverkusen): 2012-13: 31 league appearances, 29 starts, 2520 minutes, 6 goals. Provisional peer-relative CM grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=23 appearances, old DRAFT only; 2011-12=31 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **지몬 롤페스** (CM, Bayer 04 Leverkusen): 2012-13: 30 league appearances, 26 starts, 2312 minutes, 3 goals. Provisional peer-relative CM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=28 appearances, old DRAFT only; 2011-12=31 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **옌스 헤겔러** (CM, Bayer 04 Leverkusen): 2012-13: 27 league appearances, 5 starts, 792 minutes, 3 goals. Provisional peer-relative CM grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **안드레 쉬를레** (LW, Bayer 04 Leverkusen): 2012-13: 34 league appearances, 34 starts, 2830 minutes, 11 goals. Provisional peer-relative LW grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=33 appearances, old DRAFT only; 2011-12=31 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **시드니 샘** (RW, Bayer 04 Leverkusen): 2012-13: 22 league appearances, 10 starts, 948 minutes, 5 goals. Provisional peer-relative RW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=30 appearances, old DRAFT only; 2011-12=18 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **슈테판 키슬링** (ST, Bayer 04 Leverkusen): 2012-13: 34 league appearances, 34 starts, 3019 minutes, 25 goals. Provisional peer-relative ST grade A+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=22 appearances, old DRAFT only; 2011-12=34 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131014.html) / [DFB DOB](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen).
- **티모 힐데브란트** (GK, FC Schalke 04): 2012-13: 21 league appearances, 21 starts, 1890 minutes, 0 goals. Provisional peer-relative GK grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=6 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **라르스 운너슈탈** (GK, FC Schalke 04): 2012-13: 13 league appearances, 13 starts, 1170 minutes, 0 goals. Provisional peer-relative GK grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=21 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **베네딕트 회베데스** (CB, FC Schalke 04): 2012-13: 32 league appearances, 32 starts, 2880 minutes, 0 goals. Provisional peer-relative CB grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=30 appearances, old DRAFT only; 2011-12=22 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **조엘 마티프** (CB, FC Schalke 04): 2012-13: 32 league appearances, 32 starts, 2873 minutes, 3 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=26 appearances, old DRAFT only; 2011-12=30 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **키리아코스 파파도풀로스** (CB, FC Schalke 04): 2012-13: 10 league appearances, 9 starts, 809 minutes, 1 goals. Provisional peer-relative CB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=18 appearances, old DRAFT only; 2011-12=29 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **크리스티안 푹스** (LB, FC Schalke 04): 2012-13: 29 league appearances, 23 starts, 2132 minutes, 0 goals. Provisional peer-relative LB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=31 appearances, old DRAFT only; 2011-12=29 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **세아드 콜라시나츠** (LB, FC Schalke 04): 2012-13: 16 league appearances, 12 starts, 1103 minutes, 0 goals. Provisional peer-relative LB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **우치다 아쓰토** (RB, FC Schalke 04): 2012-13: 24 league appearances, 24 starts, 2036 minutes, 1 goals. Provisional peer-relative RB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=26 appearances, old DRAFT only; 2011-12=18 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **마르코 회거** (RB, FC Schalke 04): 2012-13: 22 league appearances, 15 starts, 1373 minutes, 3 goals. Provisional peer-relative RB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=27 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **로만 노이슈테터** (DM, FC Schalke 04): 2012-13: 31 league appearances, 31 starts, 2672 minutes, 3 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **저메인 존스** (CM, FC Schalke 04): 2012-13: 25 league appearances, 23 starts, 2014 minutes, 1 goals. Provisional peer-relative CM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=10 appearances, old DRAFT only; 2011-12=20 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **루이스 홀트비** (CM, FC Schalke 04): 2012-13: 19 league appearances, 18 starts, 1459 minutes, 4 goals. Provisional peer-relative CM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=30 appearances, old DRAFT only; 2011-12=27 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **율리안 드락슬러** (CAM, FC Schalke 04): 2012-13: 30 league appearances, 24 starts, 2139 minutes, 10 goals. Provisional peer-relative CAM grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=15 appearances, old DRAFT only; 2011-12=30 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **하파에우** (CAM, FC Schalke 04): 2012-13: 16 league appearances, 7 starts, 792 minutes, 2 goals. Provisional peer-relative CAM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **미셰우 바스토스** (LW, FC Schalke 04): 2012-13: 14 league appearances, 14 starts, 1079 minutes, 4 goals. Provisional peer-relative LW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **이브라힘 아펠라이** (LW, FC Schalke 04): 2012-13: 10 league appearances, 8 starts, 627 minutes, 2 goals. Provisional peer-relative LW grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **헤페르손 파르판** (RW, FC Schalke 04): 2012-13: 27 league appearances, 25 starts, 2173 minutes, 6 goals. Provisional peer-relative RW grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=28 appearances, old DRAFT only; 2011-12=23 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **트란퀼로 바르네타** (RW, FC Schalke 04): 2012-13: 21 league appearances, 2 starts, 441 minutes, 0 goals. Provisional peer-relative RW grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=24 appearances, old DRAFT only; 2011-12=7 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **클라스얀 휜텔라르** (ST, FC Schalke 04): 2012-13: 26 league appearances, 26 starts, 2232 minutes, 10 goals. Provisional peer-relative ST grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=24 appearances, old DRAFT only; 2011-12=32 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **치프리안 마리카** (ST, FC Schalke 04): 2012-13: 13 league appearances, 8 starts, 711 minutes, 3 goals. Provisional peer-relative ST grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131006.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04).
- **올리버 바우만** (GK, SC Freiburg): 2012-13: 34 league appearances, 34 starts, 3060 minutes, 0 goals. Provisional peer-relative GK grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **팔루 디아녜** (CB, SC Freiburg): 2012-13: 30 league appearances, 29 starts, 2446 minutes, 1 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **마티아스 긴터** (CB, SC Freiburg): 2012-13: 23 league appearances, 21 starts, 1947 minutes, 1 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **파벨 크르마슈** (CB, SC Freiburg): 2012-13: 17 league appearances, 16 starts, 1335 minutes, 2 goals. Provisional peer-relative CB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **올리버 조르크** (LB, SC Freiburg): 2012-13: 32 league appearances, 32 starts, 2868 minutes, 0 goals. Provisional peer-relative LB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **크리스티안 귄터** (LB, SC Freiburg): 2012-13: 7 league appearances, 3 starts, 319 minutes, 0 goals. Provisional peer-relative LB grade C+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **멘수르 무이자** (RB, SC Freiburg): 2012-13: 23 league appearances, 21 starts, 1868 minutes, 0 goals. Provisional peer-relative RB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **베가르 에겐 헤덴스타드** (RB, SC Freiburg): 2012-13: 16 league appearances, 9 starts, 794 minutes, 0 goals. Provisional peer-relative RB grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **율리안 슈스터** (DM, SC Freiburg): 2012-13: 31 league appearances, 31 starts, 2688 minutes, 1 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **세드리크 마키아디** (CM, SC Freiburg): 2012-13: 29 league appearances, 26 starts, 2268 minutes, 3 goals. Provisional peer-relative CM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **요하네스 플룸** (CM, SC Freiburg): 2012-13: 26 league appearances, 10 starts, 1151 minutes, 1 goals. Provisional peer-relative CM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **막스 크루제** (CAM, SC Freiburg): 2012-13: 34 league appearances, 33 starts, 2948 minutes, 11 goals. Provisional peer-relative CAM grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **얀 로젠탈** (CAM, SC Freiburg): 2012-13: 20 league appearances, 18 starts, 1475 minutes, 4 goals. Provisional peer-relative CAM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **다니엘 칼리주리** (LW, SC Freiburg): 2012-13: 29 league appearances, 27 starts, 2447 minutes, 5 goals. Provisional peer-relative LW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **조나탕 슈미트** (RW, SC Freiburg): 2012-13: 33 league appearances, 33 starts, 2900 minutes, 11 goals. Provisional peer-relative RW grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **카림 게데** (ST, SC Freiburg): 2012-13: 21 league appearances, 12 starts, 975 minutes, 1 goals. Provisional peer-relative ST grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **제바스티안 프라이스** (ST, SC Freiburg): 2012-13: 12 league appearances, 6 starts, 509 minutes, 1 goals. Provisional peer-relative ST grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131007.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg).
- **케빈 트라프** (GK, SG Eintracht Frankfurt): 2012-13: 26 league appearances, 26 starts, 2340 minutes, 0 goals. Provisional peer-relative GK grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **오카 니콜로프** (GK, SG Eintracht Frankfurt): 2012-13: 8 league appearances, 8 starts, 696 minutes, 0 goals. Provisional peer-relative GK grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **카를로스 삼브라노** (CB, SG Eintracht Frankfurt): 2012-13: 30 league appearances, 30 starts, 2646 minutes, 0 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **밤바 안데르손** (CB, SG Eintracht Frankfurt): 2012-13: 28 league appearances, 28 starts, 2491 minutes, 1 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **마르코 루스** (CB, SG Eintracht Frankfurt): 2012-13: 10 league appearances, 7 starts, 618 minutes, 1 goals. Provisional peer-relative CB grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **바스티안 오치프카** (LB, SG Eintracht Frankfurt): 2012-13: 33 league appearances, 33 starts, 2890 minutes, 0 goals. Provisional peer-relative LB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **제바스티안 융** (RB, SG Eintracht Frankfurt): 2012-13: 32 league appearances, 32 starts, 2839 minutes, 1 goals. Provisional peer-relative RB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **스테파노 첼로치** (RB, SG Eintracht Frankfurt): 2012-13: 27 league appearances, 6 starts, 993 minutes, 0 goals. Provisional peer-relative RB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **피르민 슈베글러** (DM, SG Eintracht Frankfurt): 2012-13: 27 league appearances, 25 starts, 2209 minutes, 2 goals. Provisional peer-relative DM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **제바스티안 로데** (CM, SG Eintracht Frankfurt): 2012-13: 33 league appearances, 33 starts, 2915 minutes, 0 goals. Provisional peer-relative CM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **마르틴 라니히** (CM, SG Eintracht Frankfurt): 2012-13: 19 league appearances, 4 starts, 356 minutes, 3 goals. Provisional peer-relative CM grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **알렉산더 마이어** (CAM, SG Eintracht Frankfurt): 2012-13: 31 league appearances, 31 starts, 2725 minutes, 16 goals. Provisional peer-relative CAM grade A-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **이누이 다카시** (LW, SG Eintracht Frankfurt): 2012-13: 33 league appearances, 33 starts, 2647 minutes, 6 goals. Provisional peer-relative LW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **슈테판 아이그너** (RW, SG Eintracht Frankfurt): 2012-13: 34 league appearances, 34 starts, 2834 minutes, 9 goals. Provisional peer-relative RW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **올리비에 오세앙** (ST, SG Eintracht Frankfurt): 2012-13: 18 league appearances, 10 starts, 990 minutes, 1 goals. Provisional peer-relative ST grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **스르잔 라키치** (ST, SG Eintracht Frankfurt): 2012-13: 14 league appearances, 9 starts, 753 minutes, 4 goals. Provisional peer-relative ST grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **카림 마트무르** (ST, SG Eintracht Frankfurt): 2012-13: 24 league appearances, 12 starts, 1199 minutes, 1 goals. Provisional peer-relative ST grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131010.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt).
- **스벤 울라이히** (GK, VfB Stuttgart): 2012-13: 34 league appearances, 34 starts, 3060 minutes, 0 goals. Provisional peer-relative GK grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=34 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **게오르크 니더마이어** (CB, VfB Stuttgart): 2012-13: 27 league appearances, 25 starts, 2240 minutes, 1 goals. Provisional peer-relative CB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=17 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **제르다르 타스치** (CB, VfB Stuttgart): 2012-13: 25 league appearances, 25 starts, 2169 minutes, 0 goals. Provisional peer-relative CB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **프란시스코 로드리게스** (CB, VfB Stuttgart): 2012-13: 14 league appearances, 9 starts, 893 minutes, 0 goals. Provisional peer-relative CB grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **아르튀르 보카** (LB, VfB Stuttgart): 2012-13: 25 league appearances, 23 starts, 2014 minutes, 1 goals. Provisional peer-relative LB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=13 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **크리스티안 몰리나로** (LB, VfB Stuttgart): 2012-13: 25 league appearances, 19 starts, 1758 minutes, 0 goals. Provisional peer-relative LB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=23 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **사카이 고토쿠** (RB, VfB Stuttgart): 2012-13: 27 league appearances, 27 starts, 2404 minutes, 0 goals. Provisional peer-relative RB grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=14 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **안토니오 뤼디거** (RB, VfB Stuttgart): 2012-13: 16 league appearances, 11 starts, 999 minutes, 0 goals. Provisional peer-relative RB grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **윌리암 크비스트** (DM, VfB Stuttgart): 2012-13: 23 league appearances, 21 starts, 1861 minutes, 0 goals. Provisional peer-relative DM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **크리스티안 겐트너** (CM, VfB Stuttgart): 2012-13: 34 league appearances, 34 starts, 3033 minutes, 5 goals. Provisional peer-relative CM grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=28 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **라파엘 홀츠하우저** (CM, VfB Stuttgart): 2012-13: 21 league appearances, 14 starts, 1153 minutes, 0 goals. Provisional peer-relative CM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **즈드라브코 쿠즈마노비치** (CM, VfB Stuttgart): 2012-13: 12 league appearances, 7 starts, 737 minutes, 0 goals. Provisional peer-relative CM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=26 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **터마시 허이널** (CAM, VfB Stuttgart): 2012-13: 13 league appearances, 7 starts, 473 minutes, 0 goals. Provisional peer-relative CAM grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=33 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **알렉산드루 막심** (CAM, VfB Stuttgart): 2012-13: 11 league appearances, 8 starts, 676 minutes, 1 goals. Provisional peer-relative CAM grade B; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=pending. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **이브라히마 트라오레** (LW, VfB Stuttgart): 2012-13: 32 league appearances, 27 starts, 2327 minutes, 3 goals. Provisional peer-relative LW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=12 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **마르틴 하르니크** (RW, VfB Stuttgart): 2012-13: 30 league appearances, 29 starts, 2509 minutes, 5 goals. Provisional peer-relative RW grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=34 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **오카자키 신지** (RW, VfB Stuttgart): 2012-13: 25 league appearances, 11 starts, 1007 minutes, 1 goals. Provisional peer-relative RW grade B-; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=26 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).
- **베다드 이비셰비치** (ST, VfB Stuttgart): 2012-13: 30 league appearances, 30 starts, 2665 minutes, 15 goals. Provisional peer-relative ST grade B+; previous two seasons and full qualitative contributions await independent validation. Previous seasons: 2010-11=pending; 2011-12=15 appearances, old DRAFT only. [Current 2012-13 roster](https://www.bdfutbol.com/en/t/t2012-131002.html) / [DFB DOB](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart).

## 8. Contemporary award evidence

The 2012-13 VDV players' vote (documented by Borussia Dortmund) elected Robert Lewandowski as players' player of the season (31.6% vote), followed by Ribéry and Schweinsteiger. Its XI includes Neuer, Lahm, Dante, Hummels, Alaba, Götze, Schweinsteiger, Gündoğan, Ribéry, Lewandowski, Mandžukić. This is an independently published *current-season recognition input*, not a substitute for all players' full three-year evaluations.

Source: https://www.bvb.de/de/de/aktuelles/news/news.html/News/Uebersicht/Robert-Lewandowski-zum-VDV-Spieler-der-Saison-gewaehlt.html

## 9. Structural and independent historical verification

- Newly selected 2012-13 BDFutbol nominees: **130**, across 7 eligible clubs.
- Position rankings entered: **130**, all **provisional**.
- Grade entries: **130**, all **provisional**.
- All unique IDs, one position per player, valid team IDs, no more than one `backup` per club/position.
- No 11-starter limit; long-term injury and winter recruitment allowed for multiple starter-equivalent players.
- Current season DFB squad DOB source linked: **130**; independent profile-level double verification: **0**.
- Full independent 3-season personal quality audit: **0**.
- Match-by-match majority positional verification: **0**.
- Known historical disagreements corrected through independent dual-source audit: **0**, no claim of complete audit.
- CI structural workflow outcome and full live-browser interaction outcome: **pending at report creation**.
- Best XI: **11**, `proposed_unapproved`.
- Player verification status: {"verified":0,"partially_verified":129,"evidence_pending":0,"conflicting_sources":1}.

## 10. Reference URLs
- FC Bayern München: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131016.html); [DFB player identities and birthdates](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/bayern-muenchen)
- BV 09 Borussia Dortmund: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131003.html); [DFB player identities and birthdates](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/258)
- Bayer 04 Leverkusen: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131014.html); [DFB player identities and birthdates](https://datencenter.dfb.de/competitions/bundesliga/seasons/2012-2013/teams/bayer-leverkusen)
- FC Schalke 04: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131006.html); [DFB player identities and birthdates](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/fc-schalke-04)
- SC Freiburg: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131007.html); [DFB player identities and birthdates](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/sc-freiburg)
- SG Eintracht Frankfurt: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131010.html); [DFB player identities and birthdates](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/eintracht-frankfurt)
- VfB Stuttgart: [Bundesliga appearances](https://www.bdfutbol.com/en/t/t2012-131002.html); [DFB player identities and birthdates](https://datencenter.dfb.de/bundesliga/2012-2013/mannschaft/vfb-stuttgart)
- [2012-13 Bundesliga classification](https://www.bdfutbol.com/en/t/tger2012-13.html)
- [RSSSF 2012-13 final table](https://www.rsssf.org/tablesd/duit2013.html)
- [2013-14 Champions League entrants](https://www.uefa.com/uefachampionsleague/history/seasons/2014/clubs/)
- [2013-14 Europa League entrants](https://www.uefa.com/uefaeuropaleague/history/seasons/2014/clubs/)

## 10A. Corrected historical evidence conflict (Martin Harnik, VfB Stuttgart)

**Actual JSON updated; not merely recorded in this report.**
- DFB official player's Bundesliga 2012-13 entry: 30 appearances, 5 goals; [DFB data center](https://datencenter.dfb.de/personen/martin-harnik/spieler).
- [BDFutbol's 2012-13 Stuttgart Bundesliga squad table](https://www.bdfutbol.com/en/t/t2012-131002.html) records 30 appearances, 29 starts, 2,509 minutes, **5 goals**.
- [FBref 2012-13 Bundesliga player statistics](https://fbref.com/en/players/99b7584f/Martin-Harnik) records 30 appearances, 29 starts, 2,500 minutes, **6 goals**, as does an additional historical guide. This cannot be dismissed as rounding, and the 9-minute difference also requires review.
- JSON preserves provider-specific `goals2012:5` from DFB/BDF but updates player `verificationStatus` to `conflicting_sources`, adds URLs and the explicit 5-vs-6 conflict; player is **not marked verified**.
- DFB independent Bundesliga checks of previous seasons: 2010-11 **32 appearances/9 goals**, 2011-12 **34 appearances/17 goals**. Those records' appearance/goal/source fields were corrected in JSON. Starts, minutes, assists, and 3-year qualitative assessment remain unverified.
- Reconciliation requires all 30 2012-13 Bundesliga match logs from official and comparative sources; until then no single goal total should be represented as definitively harmonized.

## 11. Outstanding work and auto-next gating
1. Independently verify 2010-11 and 2011-12 appearances and individual impact for **all 130 players**, including earlier clubs/leagues.
2. Check match-by-match primary positions and roles, especially two-position/late-transfer cases.
3. Reassess all provisional grades, positions, ranks, Best XI against historical evidence and contemporaneous coverage. Update this JSON, not just the report.
4. Execute CI structural validation and real-world website browser checks; classify outcomes separately.
5. Continue 2013-14 and beyond under user's **AUTO_NEXT_SEASON=yes**; next seasons must never be called complete before their own research/commits and checks.
