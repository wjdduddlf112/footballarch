# Football Archive — Serie A 2017-18 DRAFT: 7개 UEFA 참가 구단, 전체 123명 평가

> **승인 상태**: `draft_unapproved`, Best XI `proposed_unapproved`; **미확정**. 2015-16(가중치 가장 낮음) → 2016-17(중간) → **2017-18(가중치 가장 높음)**. 해당 구단의 우승·리그 순위 자체를 선수 개인 등급에 가산하지 않는다.

> **검증 구분**: 2017-18 세리에 A 실제 구단 소속 선수들의 개인 정규리그 출전·선발·분·골은 각 구단 BDFutbol 시즌 출전표에서 전사(일부 득점/도움 별도 자료 대조). **123명의 전 3시즌 개별 독립 퍼포먼스 평가 완료 인원 0명**이며, 각 수치에 대한 다른 통계기관 전원 행별 이중 대조와 38경기 포지션 빈도 통계 역시 미완료. 등급·순위·Best XI는 1차 연구 DRAFT다.

## 1. 2018-19 UEFA 대회에 실제 참가한 이탈리아 구단 7팀

| 순위 | 구단 원어명 | 2018-19 참가 대회 | 실제 경로 |
|---:|---|---|---|
| 1 | Juventus Football Club | UCL | Rank 1: direct 2018-19 UCL group stage |
| 2 | Società Sportiva Calcio Napoli | UCL | Rank 2: direct 2018-19 UCL group stage |
| 3 | Associazione Sportiva Roma | UCL | Rank 3: direct 2018-19 UCL group stage |
| 4 | Football Club Internazionale Milano | UCL | Rank 4: direct 2018-19 UCL group stage, new Italy top-four automatic rule |
| 5 | Società Sportiva Lazio | UEL | Rank 5: 2018-19 UEL group stage |
| 6 | Associazione Calcio Milan | UEL | Rank 6: 2018-19 UEL group; provisional UEFA FFP ban overturned on July 20 2018 by CAS |
| 7 | Atalanta Bergamasca Calcio | UEL | Rank 7: 2018-19 UEL preliminary rounds, lost to Copenhagen in playoff, still actual UEFA participant |

*검증 예외 1*: 2018-19 시즌에 이탈리아 4위 Inter까지 챔피언스리그 본선 직행으로 개편됐다. *검증 예외 2*: Atalanta는 2018-19 UEL 플레이오프에서 FC Copenhagen에 탈락했어도 UEFA 예선에 실제 참가한 구단이므로 7위도 포함한다. *검증 예외 3*: Milan의 2018년 최초 FFP 규정 위반 UEFA 배제 결정은 2018-07-20 CAS 심리 뒤 원상 복귀해 실제 UEL 조별리그에 참가했다. 8위 Fiorentina는 제외.

## 2. 당시 대표 구단 전술 및 실질 포지션

| 팀 | 대표 전술 | 역사적 구분 사항 |
|---|---|---|
| Juventus Football Club | 4-2-3-1 | Allegri 4-2-3-1, Dybala central CAM, Mandzukic defensive LW, Douglas Costa RW |
| Società Sportiva Calcio Napoli | 4-3-3 | Sarri 4-3-3, Jorginho regista, Allan and Hamsik mezzale, Mertens central |
| Associazione Sportiva Roma | 4-3-3 | Di Francesco 4-3-3, Alisson first GK, Under right winger, El Shaarawy/Perotti left |
| Football Club Internazionale Milano | 4-2-3-1 | Spalletti 4-2-3-1, Cancelo RB and D'Ambrosio LB, Brozovic deeper and Rafinha CAM second half |
| Società Sportiva Lazio | 3-5-1-1 | Inzaghi 3-5-1-1 with Lulic LWB, Marusic RWB, Alberto supporting Immobile and 3 CB |
| Associazione Calcio Milan | 4-3-3 | Montella first 14 rounds mixed 3-back, Gattuso last 24 primarily 4-3-3 |
| Atalanta Bergamasca Calcio | 3-4-2-1 | Gasperini 3-4-2-1, 3 CB, two wingbacks, Gomez/Ilicic wide inside forwards; Cristante advanced CM, Freuler rotation |

*해석 한계*: 모든 팀이 시즌 내내 동일한 전술을 쓴 것은 아니다. 밀란은 Montella에서 Gattuso로 바뀌었고, 라치오 3-5-1-1과 아탈란타 3-4-2-1은 풀백이 아닌 윙백을 썼다. 사이트는 역사적 윙백을 LB/RB 필드에 대응시키고 원 전술 역할은 `originalTacticalRole`로 보존한다. 사이트의 10개 기본 포지션에 선수가 한 번만 등장하며 좌·우 포지션은 분리한다. 리그 380경기 실제 가장 많이 쓰인 포메이션에 대한 통계는 미확인. 대표 Best XI는 비교 가능한 4-3-3으로 임시 편성.

## 3. 7개 구단별 주전 및 후보(123명 전원)

각 구단의 11명 대표 선발 역할과 해당 포지션 후보 최대 1명. P/S/Min/G = **2017-18 세리에 A 리그 소속 구단만**의 출전·선발·출전 분·골. 컵이나 UCL/UEL 성적은 합산하지 않았다. 도움 기록이 독립 검증되지 않은 선수는 `null`로 유지(0 도움을 뜻하지 않음). 리그 0출전 선수가 후보에 포함되지 않도록 했다.

### Juventus Football Club: 18명 (주전 11명 / 후보 7명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 1978-01-28 | GK | 주전 | 21/21/1863/0 | A+ | 4 |
| GK | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus Football Club | 1990-04-18 | GK | 후보 | 17/17/1530/0 | A0 | 6 |
| CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 1984-08-14 | CB | 주전 | 26/25/2163/0 | A+ | 2 |
| CB | 메흐디 베나티아 | Medhi Benatia | Juventus Football Club | 1987-04-17 | CB | 후보 | 20/19/1754/2 | A0 | 12 |
| CB | 다니엘레 루가니 | Daniele Rugani | Juventus Football Club | 1994-07-29 | CB | 주전 | 22/22/1936/2 | B+ | 17 |
| LB | 알렉스 산드루 | Alex Sandro | Juventus Football Club | 1991-01-26 | LB | 주전 | 26/23/2115/4 | A0 | 2 |
| LB | 콰드워 아사모아 | Kwadwo Asamoah | Juventus Football Club | 1988-12-09 | LB | 후보 | 19/18/1571/0 | B+ | 9 |
| RB | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus Football Club | 1984-01-16 | RB | 주전 | 27/21/1716/0 | B+ | 7 |
| RB | 마티아 데 실리오 | Mattia De Sciglio | Juventus Football Club | 1992-10-20 | RB | 후보 | 12/10/967/1 | B0 | 10 |
| DM | 미랄렘 피아니치 | Miralem Pjanić | Juventus Football Club | 1990-04-02 | DM | 주전 | 31/28/2488/5 | A+ | 3 |
| DM | 클라우디오 마르키시오 | Claudio Marchisio | Juventus Football Club | 1986-01-19 | DM | 후보 | 15/9/818/0 | B0 | 11 |
| CM | 사미 케디라 | Sami Khedira | Juventus Football Club | 1987-04-04 | CM | 주전 | 26/24/1922/9 | A0 | 7 |
| CM | 블레즈 마튀디 | Blaise Matuidi | Juventus Football Club | 1987-04-09 | CM | 후보 | 32/27/2355/3 | A0 | 9 |
| CAM | 파울로 디발라 | Paulo Dybala | Juventus Football Club | 1993-11-15 | CAM/second striker | 주전 | 33/26/2357/22 | S | 1 |
| LW | 마리오 만주키치 | Mario Mandžukić | Juventus Football Club | 1986-05-21 | LW defensive wide target | 주전 | 32/27/2326/5 | A0 | 4 |
| RW | 도글라스 코스타 | Douglas Costa | Juventus Football Club | 1990-09-14 | RW/inside wide attacker | 주전 | 31/18/1791/4 | A+ | 1 |
| RW | 후안 콰드라도 | Juan Cuadrado | Juventus Football Club | 1988-05-26 | RW | 후보 | 21/15/1358/4 | B+ | 7 |
| ST | 곤살로 이과인 | Gonzalo Higuaín | Juventus Football Club | 1987-12-10 | central striker | 주전 | 35/32/2818/16 | A+ | 4 |

### Società Sportiva Calcio Napoli: 18명 (주전 11명 / 후보 7명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 페페 레이나 | Pepe Reina | Società Sportiva Calcio Napoli | 1982-08-31 | GK | 주전 | 37/37/3330/0 | A0 | 5 |
| GK | 루이지 세페 | Luigi Sepe | Società Sportiva Calcio Napoli | 1991-05-08 | GK | 후보 | 1/1/90/0 | C0 | 11 |
| CB | 칼리두 쿨리발리 | Kalidou Koulibaly | Società Sportiva Calcio Napoli | 1991-06-20 | CB | 주전 | 35/35/3066/5 | A+ | 1 |
| CB | 라울 알비올 | Raúl Albiol | Società Sportiva Calcio Napoli | 1985-09-04 | CB | 주전 | 31/30/2742/3 | A0 | 9 |
| CB | 블라드 키리케슈 | Vlad Chiricheș | Società Sportiva Calcio Napoli | 1989-11-14 | CB | 후보 | 7/7/583/0 | B- | 23 |
| LB | 마리우 후이 | Mário Rui | Società Sportiva Calcio Napoli | 1991-05-27 | LB after Ghoulam injury | 주전 | 25/24/2088/2 | A- | 3 |
| LB | 파우지 굴람 | Faouzi Ghoulam | Società Sportiva Calcio Napoli | 1991-02-01 | LB | 후보 | 11/11/987/2 | A- | 4 |
| RB | 엘세이드 히사이 | Elseid Hysaj | Società Sportiva Calcio Napoli | 1994-02-02 | RB | 주전 | 35/35/3125/0 | A0 | 1 |
| RB | 크리스티안 마조 | Christian Maggio | Società Sportiva Calcio Napoli | 1982-02-11 | RB | 후보 | 13/6/636/0 | B- | 13 |
| DM | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli | 1991-12-20 | DM | 주전 | 33/33/2665/2 | A+ | 1 |
| DM | 아마두 디아와라 | Amadou Diawara | Società Sportiva Calcio Napoli | 1997-07-17 | DM | 후보 | 18/5/643/1 | B0 | 12 |
| CM | 알란 | Allan Marques Loureiro | Società Sportiva Calcio Napoli | 1991-01-08 | CM | 주전 | 38/32/2857/4 | A+ | 2 |
| CM | 마레크 함식 | Marek Hamšík | Società Sportiva Calcio Napoli | 1987-07-27 | CM | 주전 | 38/32/2395/7 | A0 | 5 |
| CM | 피오트르 지엘린스키 | Piotr Zieliński | Società Sportiva Calcio Napoli | 1994-05-20 | CM | 후보 | 36/14/1658/4 | B+ | 16 |
| LW | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli | 1991-06-04 | LW | 주전 | 37/36/3104/8 | A+ | 1 |
| RW | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli | 1987-02-11 | RW | 주전 | 38/38/3247/10 | A0 | 3 |
| ST | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli | 1987-05-06 | ST | 주전 | 38/35/3013/18 | A+ | 3 |
| ST | 아르카디우시 밀리크 | Arkadiusz Milik | Società Sportiva Calcio Napoli | 1994-02-28 | ST | 후보 | 15/3/439/5 | B+ | 8 |

### Associazione Sportiva Roma: 19명 (주전 11명 / 후보 8명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 알리송 베케르 | Alisson Becker | Associazione Sportiva Roma | 1992-10-02 | GK | 주전 | 37/37/3330/0 | S | 1 |
| GK | 우카시 스코룹스키 | Łukasz Skorupski | Associazione Sportiva Roma | 1991-05-05 | GK | 후보 | 1/1/90/0 | C+ | 10 |
| CB | 페데리코 파시오 | Federico Fazio | Associazione Sportiva Roma | 1987-03-17 | CB | 주전 | 34/32/2920/2 | A0 | 5 |
| CB | 코스타스 마놀라스 | Kostas Manolas | Associazione Sportiva Roma | 1991-06-14 | CB | 주전 | 29/27/2342/2 | A0 | 6 |
| CB | 주앙 제주스 | Juan Jesus | Associazione Sportiva Roma | 1991-06-10 | CB | 후보 | 22/18/1655/0 | B+ | 19 |
| LB | 알렉산다르 콜라로프 | Aleksandar Kolarov | Associazione Sportiva Roma | 1985-11-10 | LB | 주전 | 35/34/3061/2 | A+ | 1 |
| RB | 알레산드로 플로렌치 | Alessandro Florenzi | Associazione Sportiva Roma | 1991-03-11 | RB | 주전 | 32/26/2385/1 | B+ | 4 |
| RB | 브루누 페레스 | Bruno Peres | Associazione Sportiva Roma | 1990-03-01 | RB | 후보 | 18/13/1155/0 | B0 | 11 |
| DM | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 1983-07-24 | DM | 주전 | 22/21/1835/1 | B+ | 5 |
| DM | 막심 고날롱 | Maxime Gonalons | Associazione Sportiva Roma | 1989-03-10 | DM | 후보 | 16/12/1092/0 | B0 | 10 |
| CM | 라자 나잉골란 | Radja Nainggolan | Associazione Sportiva Roma | 1988-05-04 | CM | 주전 | 31/31/2620/4 | A0 | 8 |
| CM | 로렌초 펠레그리니 | Lorenzo Pellegrini | Associazione Sportiva Roma | 1996-06-19 | CM | 후보 | 28/22/1810/3 | B+ | 14 |
| CM | 케빈 스트로트만 | Kevin Strootman | Associazione Sportiva Roma | 1990-02-13 | CM | 주전 | 32/26/2258/1 | B+ | 15 |
| LW | 스테판 엘샤라위 | Stephan El Shaarawy | Associazione Sportiva Roma | 1992-10-27 | LW | 주전 | 33/25/2162/7 | B+ | 6 |
| LW | 디에고 페로티 | Diego Perotti | Associazione Sportiva Roma | 1988-07-26 | LW | 후보 | 25/17/1606/5 | B+ | 7 |
| RW | 젱기즈 윈데르 | Cengiz Ünder | Associazione Sportiva Roma | 1997-07-14 | RW left-footed inside forward | 주전 | 26/15/1256/7 | A- | 5 |
| RW | 파트리크 시크 | Patrik Schick | Associazione Sportiva Roma | 1996-01-24 | RW/central striker rotation | 후보 | 22/10/984/2 | B0 | 8 |
| ST | 에딘 제코 | Edin Džeko | Associazione Sportiva Roma | 1986-03-17 | ST | 주전 | 36/33/3019/16 | A0 | 5 |
| ST | 그레구아르 데프렐 | Grégoire Defrel | Associazione Sportiva Roma | 1991-06-17 | ST | 후보 | 15/5/480/1 | B- | 13 |

### Football Club Internazionale Milano: 17명 (주전 11명 / 후보 6명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano | 1984-07-14 | GK | 주전 | 38/38/3420/0 | A+ | 2 |
| CB | 밀란 슈크리니아르 | Milan Škriniar | Football Club Internazionale Milano | 1995-02-11 | CB | 주전 | 38/38/3420/4 | A+ | 3 |
| CB | 주앙 미란다 | João Miranda | Football Club Internazionale Milano | 1984-09-07 | CB | 주전 | 31/31/2729/0 | A0 | 11 |
| CB | 안드레아 라노키아 | Andrea Ranocchia | Football Club Internazionale Milano | 1988-02-16 | CB | 후보 | 11/7/626/2 | B0 | 20 |
| LB | 다닐로 담브로시오 | Danilo D'Ambrosio | Football Club Internazionale Milano | 1988-09-09 | LB/right-footed fullback | 주전 | 34/34/2986/2 | B+ | 6 |
| LB | 다비데 산톤 | Davide Santon | Football Club Internazionale Milano | 1991-01-02 | LB | 후보 | 15/9/836/0 | B- | 12 |
| RB | 주앙 칸셀루 | João Cancelo | Football Club Internazionale Milano | 1994-05-27 | RB attack-driving inverted creator | 주전 | 26/20/1845/1 | A- | 2 |
| DM | 마티아스 베시노 | Matías Vecino | Football Club Internazionale Milano | 1991-08-24 | CM/DM double pivot | 주전 | 29/25/2137/3 | B+ | 7 |
| DM | 로베르토 갈리아르디니 | Roberto Gagliardini | Football Club Internazionale Milano | 1994-04-07 | DM | 후보 | 30/23/1986/0 | B+ | 8 |
| CM | 마르첼로 브로조비치 | Marcelo Brozović | Football Club Internazionale Milano | 1992-11-16 | regista/CM | 주전 | 31/21/1923/4 | A- | 11 |
| CM | 보르하 발레로 | Borja Valero | Football Club Internazionale Milano | 1985-01-12 | CM | 후보 | 36/29/2572/2 | B+ | 13 |
| CAM | 하피냐 | Rafinha Alcântara | Football Club Internazionale Milano | 1993-02-12 | CAM after January loan | 주전 | 17/12/1048/2 | B+ | 3 |
| LW | 이반 페리시치 | Ivan Perišić | Football Club Internazionale Milano | 1989-02-02 | LW | 주전 | 37/37/3316/11 | A+ | 2 |
| RW | 안토니오 칸드레바 | Antonio Candreva | Football Club Internazionale Milano | 1987-02-28 | RW | 주전 | 36/33/2563/0 | B+ | 6 |
| RW | 얀 카라모 | Yann Karamoh | Football Club Internazionale Milano | 1998-07-08 | RW | 후보 | 16/4/481/1 | B- | 9 |
| ST | 마우로 이카르디 | Mauro Icardi | Football Club Internazionale Milano | 1993-02-19 | ST | 주전 | 34/34/2971/29 | S | 2 |
| ST | 에데르 | Éder Citadin Martins | Football Club Internazionale Milano | 1986-11-15 | ST | 후보 | 29/4/774/3 | B0 | 11 |

### Società Sportiva Lazio: 17명 (주전 11명 / 후보 6명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 토마스 스트라코샤 | Thomas Strakosha | Società Sportiva Lazio | 1995-03-19 | GK | 주전 | 38/38/3420/0 | B+ | 7 |
| CB | 스테판 더 프레이 | Stefan de Vrij | Società Sportiva Lazio | 1992-02-05 | CB | 주전 | 36/36/3042/6 | A+ | 4 |
| CB | 슈테판 라두 | Ștefan Radu | Società Sportiva Lazio | 1986-10-22 | LCB in Lazio three-back | 주전 | 31/31/2599/0 | B+ | 15 |
| CB | 바스토스 | Bastos Quissanga | Società Sportiva Lazio | 1994-10-14 | right/left CB in Lazio three-back | 주전 | 21/16/1406/4 | B+ | 16 |
| CB | 루이스 펠리피 | Luiz Felipe | Società Sportiva Lazio | 1997-03-22 | RCB in Lazio three-back | 후보 | 18/12/1162/0 | B0 | 21 |
| LB | 세나드 룰리치 | Senad Lulić | Società Sportiva Lazio | 1986-01-18 | LWB / captain | 주전 | 35/30/2438/3 | B+ | 7 |
| LB | 조르당 루카쿠 | Jordan Lukaku | Società Sportiva Lazio | 1994-07-25 | LWB | 후보 | 30/10/1340/1 | B0 | 11 |
| RB | 아담 마루시치 | Adam Marušić | Società Sportiva Lazio | 1992-10-17 | RWB | 주전 | 32/28/2526/3 | B+ | 5 |
| RB | 두샨 바스타 | Dušan Basta | Società Sportiva Lazio | 1984-08-18 | RWB/RB | 후보 | 11/9/777/0 | B- | 12 |
| DM | 루카스 레이바 | Lucas Leiva | Società Sportiva Lazio | 1987-01-09 | DM | 주전 | 36/35/2894/2 | A+ | 2 |
| CM | 세르게이 밀린코비치사비치 | Sergej Milinković-Savić | Società Sportiva Lazio | 1995-02-27 | CM | 주전 | 35/33/2850/12 | A+ | 1 |
| CM | 마르코 파롤로 | Marco Parolo | Società Sportiva Lazio | 1985-01-25 | CM | 주전 | 31/30/2613/4 | B+ | 12 |
| CM | 알레산드로 무르자 | Alessandro Murgia | Società Sportiva Lazio | 1996-08-09 | CM | 후보 | 16/9/776/0 | B0 | 17 |
| CAM | 루이스 알베르토 | Luis Alberto | Società Sportiva Lazio | 1992-09-28 | CAM / second striker in 3-5-1-1 | 주전 | 34/32/2679/11 | A+ | 2 |
| CAM | 펠리피 안데르송 | Felipe Anderson | Società Sportiva Lazio | 1993-04-15 | second-striker / attacking midfielder (CAM/RW) | 후보 | 21/9/1151/4 | B+ | 4 |
| ST | 치로 임모빌레 | Ciro Immobile | Società Sportiva Lazio | 1990-02-20 | ST | 주전 | 33/33/2697/29 | S | 1 |
| ST | 펠리페 카이세도 | Felipe Caicedo | Società Sportiva Lazio | 1988-09-05 | ST | 후보 | 22/4/699/3 | B0 | 12 |

### Associazione Calcio Milan: 17명 (주전 11명 / 후보 6명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 잔루이지 돈나룸마 | Gianluigi Donnarumma | Associazione Calcio Milan | 1999-02-25 | GK | 주전 | 38/38/3420/0 | A+ | 3 |
| CB | 레오나르도 보누치 | Leonardo Bonucci | Associazione Calcio Milan | 1987-05-01 | CB | 주전 | 35/35/3085/2 | A0 | 7 |
| CB | 알레시오 로마뇰리 | Alessio Romagnoli | Associazione Calcio Milan | 1995-01-12 | CB | 주전 | 28/27/2355/2 | B+ | 14 |
| CB | 마테오 무사키오 | Mateo Musacchio | Associazione Calcio Milan | 1990-08-26 | CB | 후보 | 15/12/1198/0 | B0 | 22 |
| LB | 리카르도 로드리게스 | Ricardo Rodríguez | Associazione Calcio Milan | 1992-08-25 | LB | 주전 | 34/34/3006/1 | B+ | 5 |
| RB | 다비데 칼라브리아 | Davide Calabria | Associazione Calcio Milan | 1996-12-06 | RB | 주전 | 21/18/1562/1 | B+ | 3 |
| RB | 이냐치오 아바테 | Ignazio Abate | Associazione Calcio Milan | 1986-11-12 | RB | 후보 | 17/11/1056/1 | B0 | 9 |
| DM | 루카스 비글리아 | Lucas Biglia | Associazione Calcio Milan | 1986-01-30 | DM | 주전 | 28/24/2043/1 | B+ | 4 |
| DM | 리카르도 몬톨리보 | Riccardo Montolivo | Associazione Calcio Milan | 1985-01-18 | DM | 후보 | 18/12/1089/1 | B0 | 9 |
| CM | 자코모 보나벤투라 | Giacomo Bonaventura | Associazione Calcio Milan | 1989-08-22 | CM | 주전 | 33/30/2552/8 | A0 | 4 |
| CM | 프랑크 케시에 | Franck Kessié | Associazione Calcio Milan | 1996-12-19 | CM right mezzala | 주전 | 37/37/3270/5 | A- | 10 |
| CM | 마누엘 로카텔리 | Manuel Locatelli | Associazione Calcio Milan | 1998-01-08 | CM | 후보 | 21/5/667/0 | B0 | 18 |
| LW | 하칸 찰하놀루 | Hakan Çalhanoğlu | Associazione Calcio Milan | 1994-02-08 | LW/left attacking creator | 주전 | 31/25/2174/6 | A- | 5 |
| LW | 파비오 보리니 | Fabio Borini | Associazione Calcio Milan | 1991-03-29 | LW/wingback cover | 후보 | 29/19/1612/2 | B0 | 8 |
| RW | 수소 | Suso | Associazione Calcio Milan | 1993-11-19 | RW | 주전 | 35/33/2847/6 | A0 | 4 |
| ST | 파트리크 쿠트로네 | Patrick Cutrone | Associazione Calcio Milan | 1998-01-03 | ST | 주전 | 28/17/1509/10 | B+ | 6 |
| ST | 니콜라 칼리니치 | Nikola Kalinić | Associazione Calcio Milan | 1988-01-05 | ST | 후보 | 31/20/1813/6 | B0 | 9 |

### Atalanta Bergamasca Calcio: 17명 (주전 11명 / 후보 6명)

| 포지션 | 한글이름 | 원어명 | 구단 소속(원어) | 생년월일 | 실제 전술 역할 | 주전/후보 | 2017-18 P/S/Min/G | 티어 | 위치 순위 |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 에트리트 베리샤 | Etrit Berisha | Atalanta Bergamasca Calcio | 1989-03-10 | GK | 주전 | 31/31/2790/0 | B+ | 8 |
| GK | 피에를루이지 골리니 | Pierluigi Gollini | Atalanta Bergamasca Calcio | 1995-03-18 | GK | 후보 | 7/7/623/0 | B0 | 9 |
| CB | 안드레아 마시엘로 | Andrea Masiello | Atalanta Bergamasca Calcio | 1986-02-05 | CB | 주전 | 31/30/2707/4 | A0 | 8 |
| CB | 하파에우 톨로이 | Rafael Tolói | Atalanta Bergamasca Calcio | 1990-10-10 | CB | 주전 | 31/29/2449/1 | A0 | 10 |
| CB | 마티아 칼다라 | Mattia Caldara | Atalanta Bergamasca Calcio | 1994-05-05 | CB | 주전 | 24/24/2160/3 | A- | 13 |
| CB | 호세 루이스 팔로미노 | José Luis Palomino | Atalanta Bergamasca Calcio | 1990-01-05 | CB | 후보 | 26/22/1978/1 | B+ | 18 |
| LB | 로빈 고젠스 | Robin Gosens | Atalanta Bergamasca Calcio | 1994-07-05 | LWB | 후보 | 21/17/1451/1 | B+ | 8 |
| LB | 레오나르도 스피나촐라 | Leonardo Spinazzola | Atalanta Bergamasca Calcio | 1993-03-25 | LWB | 주전 | 18/17/1507/0 | B+ | 10 |
| RB | 한스 하테부르 | Hans Hateboer | Atalanta Bergamasca Calcio | 1994-01-09 | RWB | 주전 | 33/26/2396/0 | B+ | 6 |
| RB | 티모시 카스타뉴 | Timothy Castagne | Atalanta Bergamasca Calcio | 1995-12-05 | RWB | 후보 | 20/17/1502/0 | B+ | 8 |
| DM | 마르턴 더 론 | Marten de Roon | Atalanta Bergamasca Calcio | 1991-03-29 | DM/CM ballwinner | 주전 | 34/29/2570/3 | B+ | 6 |
| CM | 브리안 크리스탄테 | Bryan Cristante | Atalanta Bergamasca Calcio | 1995-03-03 | CM/advanced attacking midfielder hybrid (mapped CM) | 주전 | 36/33/2835/9 | A+ | 3 |
| CM | 레모 프로일러 | Remo Freuler | Atalanta Bergamasca Calcio | 1992-04-15 | CM/box-to-box | 후보 | 35/33/3005/5 | A0 | 6 |
| LW | 파푸 고메스 | Alejandro Gómez | Atalanta Bergamasca Calcio | 1988-02-15 | left inside forward/second-striker, mapped LW | 주전 | 33/31/2757/6 | A0 | 3 |
| RW | 요시프 일리치치 | Josip Iličić | Atalanta Bergamasca Calcio | 1988-01-29 | right inside forward/second-striker, mapped RW | 주전 | 31/21/2003/11 | A+ | 2 |
| ST | 안드레아 페타냐 | Andrea Petagna | Atalanta Bergamasca Calcio | 1995-06-30 | central target forward | 주전 | 29/22/1631/4 | B+ | 7 |
| ST | 안드레아스 코르넬리우스 | Andreas Cornelius | Atalanta Bergamasca Calcio | 1993-03-16 | ST | 후보 | 23/8/925/3 | B0 | 10 |

## 4. 포지션별 통합 순위 — 10개 포지션, 123명 전원

구단별 대표 XI 선정 후 **GK → CB → LB → RB → DM → CM → CAM → LW → RW → ST** 순으로 통합. 등급 내 순위까지 1위부터 N위까지 부여했다. 개인 기여/후보로서 역할·지속성을 평가하되 과거 2개 시즌의 불완전한 정보 때문에 순위는 사용자 수정이 필요한 연구 가안이다.

### GK — 전체 11명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | S | 알리송 베케르 | Alisson Becker | Associazione Sportiva Roma | 37/37/0 |
| 2 | A+ | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano | 38/38/0 |
| 3 | A+ | 잔루이지 돈나룸마 | Gianluigi Donnarumma | Associazione Calcio Milan | 38/38/0 |
| 4 | A+ | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 21/21/0 |
| 5 | A0 | 페페 레이나 | Pepe Reina | Società Sportiva Calcio Napoli | 37/37/0 |
| 6 | A0 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus Football Club | 17/17/0 |
| 7 | B+ | 토마스 스트라코샤 | Thomas Strakosha | Società Sportiva Lazio | 38/38/0 |
| 8 | B+ | 에트리트 베리샤 | Etrit Berisha | Atalanta Bergamasca Calcio | 31/31/0 |
| 9 | B0 | 피에를루이지 골리니 | Pierluigi Gollini | Atalanta Bergamasca Calcio | 7/7/0 |
| 10 | C+ | 우카시 스코룹스키 | Łukasz Skorupski | Associazione Sportiva Roma | 1/1/0 |
| 11 | C0 | 루이지 세페 | Luigi Sepe | Società Sportiva Calcio Napoli | 1/1/0 |

### CB — 전체 23명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A+ | 칼리두 쿨리발리 | Kalidou Koulibaly | Società Sportiva Calcio Napoli | 35/35/5 |
| 2 | A+ | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 26/25/0 |
| 3 | A+ | 밀란 슈크리니아르 | Milan Škriniar | Football Club Internazionale Milano | 38/38/4 |
| 4 | A+ | 스테판 더 프레이 | Stefan de Vrij | Società Sportiva Lazio | 36/36/6 |
| 5 | A0 | 페데리코 파시오 | Federico Fazio | Associazione Sportiva Roma | 34/32/2 |
| 6 | A0 | 코스타스 마놀라스 | Kostas Manolas | Associazione Sportiva Roma | 29/27/2 |
| 7 | A0 | 레오나르도 보누치 | Leonardo Bonucci | Associazione Calcio Milan | 35/35/2 |
| 8 | A0 | 안드레아 마시엘로 | Andrea Masiello | Atalanta Bergamasca Calcio | 31/30/4 |
| 9 | A0 | 라울 알비올 | Raúl Albiol | Società Sportiva Calcio Napoli | 31/30/3 |
| 10 | A0 | 하파에우 톨로이 | Rafael Tolói | Atalanta Bergamasca Calcio | 31/29/1 |
| 11 | A0 | 주앙 미란다 | João Miranda | Football Club Internazionale Milano | 31/31/0 |
| 12 | A0 | 메흐디 베나티아 | Medhi Benatia | Juventus Football Club | 20/19/2 |
| 13 | A- | 마티아 칼다라 | Mattia Caldara | Atalanta Bergamasca Calcio | 24/24/3 |
| 14 | B+ | 알레시오 로마뇰리 | Alessio Romagnoli | Associazione Calcio Milan | 28/27/2 |
| 15 | B+ | 슈테판 라두 | Ștefan Radu | Società Sportiva Lazio | 31/31/0 |
| 16 | B+ | 바스토스 | Bastos Quissanga | Società Sportiva Lazio | 21/16/4 |
| 17 | B+ | 다니엘레 루가니 | Daniele Rugani | Juventus Football Club | 22/22/2 |
| 18 | B+ | 호세 루이스 팔로미노 | José Luis Palomino | Atalanta Bergamasca Calcio | 26/22/1 |
| 19 | B+ | 주앙 제주스 | Juan Jesus | Associazione Sportiva Roma | 22/18/0 |
| 20 | B0 | 안드레아 라노키아 | Andrea Ranocchia | Football Club Internazionale Milano | 11/7/2 |
| 21 | B0 | 루이스 펠리피 | Luiz Felipe | Società Sportiva Lazio | 18/12/0 |
| 22 | B0 | 마테오 무사키오 | Mateo Musacchio | Associazione Calcio Milan | 15/12/0 |
| 23 | B- | 블라드 키리케슈 | Vlad Chiricheș | Società Sportiva Calcio Napoli | 7/7/0 |

### LB — 전체 12명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A+ | 알렉산다르 콜라로프 | Aleksandar Kolarov | Associazione Sportiva Roma | 35/34/2 |
| 2 | A0 | 알렉스 산드루 | Alex Sandro | Juventus Football Club | 26/23/4 |
| 3 | A- | 마리우 후이 | Mário Rui | Società Sportiva Calcio Napoli | 25/24/2 |
| 4 | A- | 파우지 굴람 | Faouzi Ghoulam | Società Sportiva Calcio Napoli | 11/11/2 |
| 5 | B+ | 리카르도 로드리게스 | Ricardo Rodríguez | Associazione Calcio Milan | 34/34/1 |
| 6 | B+ | 다닐로 담브로시오 | Danilo D'Ambrosio | Football Club Internazionale Milano | 34/34/2 |
| 7 | B+ | 세나드 룰리치 | Senad Lulić | Società Sportiva Lazio | 35/30/3 |
| 8 | B+ | 로빈 고젠스 | Robin Gosens | Atalanta Bergamasca Calcio | 21/17/1 |
| 9 | B+ | 콰드워 아사모아 | Kwadwo Asamoah | Juventus Football Club | 19/18/0 |
| 10 | B+ | 레오나르도 스피나촐라 | Leonardo Spinazzola | Atalanta Bergamasca Calcio | 18/17/0 |
| 11 | B0 | 조르당 루카쿠 | Jordan Lukaku | Società Sportiva Lazio | 30/10/1 |
| 12 | B- | 다비데 산톤 | Davide Santon | Football Club Internazionale Milano | 15/9/0 |

### RB — 전체 13명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A0 | 엘세이드 히사이 | Elseid Hysaj | Società Sportiva Calcio Napoli | 35/35/0 |
| 2 | A- | 주앙 칸셀루 | João Cancelo | Football Club Internazionale Milano | 26/20/1 |
| 3 | B+ | 다비데 칼라브리아 | Davide Calabria | Associazione Calcio Milan | 21/18/1 |
| 4 | B+ | 알레산드로 플로렌치 | Alessandro Florenzi | Associazione Sportiva Roma | 32/26/1 |
| 5 | B+ | 아담 마루시치 | Adam Marušić | Società Sportiva Lazio | 32/28/3 |
| 6 | B+ | 한스 하테부르 | Hans Hateboer | Atalanta Bergamasca Calcio | 33/26/0 |
| 7 | B+ | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus Football Club | 27/21/0 |
| 8 | B+ | 티모시 카스타뉴 | Timothy Castagne | Atalanta Bergamasca Calcio | 20/17/0 |
| 9 | B0 | 이냐치오 아바테 | Ignazio Abate | Associazione Calcio Milan | 17/11/1 |
| 10 | B0 | 마티아 데 실리오 | Mattia De Sciglio | Juventus Football Club | 12/10/1 |
| 11 | B0 | 브루누 페레스 | Bruno Peres | Associazione Sportiva Roma | 18/13/0 |
| 12 | B- | 두샨 바스타 | Dušan Basta | Società Sportiva Lazio | 11/9/0 |
| 13 | B- | 크리스티안 마조 | Christian Maggio | Società Sportiva Calcio Napoli | 13/6/0 |

### DM — 전체 12명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A+ | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli | 33/33/2 |
| 2 | A+ | 루카스 레이바 | Lucas Leiva | Società Sportiva Lazio | 36/35/2 |
| 3 | A+ | 미랄렘 피아니치 | Miralem Pjanić | Juventus Football Club | 31/28/5 |
| 4 | B+ | 루카스 비글리아 | Lucas Biglia | Associazione Calcio Milan | 28/24/1 |
| 5 | B+ | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 22/21/1 |
| 6 | B+ | 마르턴 더 론 | Marten de Roon | Atalanta Bergamasca Calcio | 34/29/3 |
| 7 | B+ | 마티아스 베시노 | Matías Vecino | Football Club Internazionale Milano | 29/25/3 |
| 8 | B+ | 로베르토 갈리아르디니 | Roberto Gagliardini | Football Club Internazionale Milano | 30/23/0 |
| 9 | B0 | 리카르도 몬톨리보 | Riccardo Montolivo | Associazione Calcio Milan | 18/12/1 |
| 10 | B0 | 막심 고날롱 | Maxime Gonalons | Associazione Sportiva Roma | 16/12/0 |
| 11 | B0 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus Football Club | 15/9/0 |
| 12 | B0 | 아마두 디아와라 | Amadou Diawara | Società Sportiva Calcio Napoli | 18/5/1 |

### CM — 전체 18명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A+ | 세르게이 밀린코비치사비치 | Sergej Milinković-Savić | Società Sportiva Lazio | 35/33/12 |
| 2 | A+ | 알란 | Allan Marques Loureiro | Società Sportiva Calcio Napoli | 38/32/4 |
| 3 | A+ | 브리안 크리스탄테 | Bryan Cristante | Atalanta Bergamasca Calcio | 36/33/9 |
| 4 | A0 | 자코모 보나벤투라 | Giacomo Bonaventura | Associazione Calcio Milan | 33/30/8 |
| 5 | A0 | 마레크 함식 | Marek Hamšík | Società Sportiva Calcio Napoli | 38/32/7 |
| 6 | A0 | 레모 프로일러 | Remo Freuler | Atalanta Bergamasca Calcio | 35/33/5 |
| 7 | A0 | 사미 케디라 | Sami Khedira | Juventus Football Club | 26/24/9 |
| 8 | A0 | 라자 나잉골란 | Radja Nainggolan | Associazione Sportiva Roma | 31/31/4 |
| 9 | A0 | 블레즈 마튀디 | Blaise Matuidi | Juventus Football Club | 32/27/3 |
| 10 | A- | 프랑크 케시에 | Franck Kessié | Associazione Calcio Milan | 37/37/5 |
| 11 | A- | 마르첼로 브로조비치 | Marcelo Brozović | Football Club Internazionale Milano | 31/21/4 |
| 12 | B+ | 마르코 파롤로 | Marco Parolo | Società Sportiva Lazio | 31/30/4 |
| 13 | B+ | 보르하 발레로 | Borja Valero | Football Club Internazionale Milano | 36/29/2 |
| 14 | B+ | 로렌초 펠레그리니 | Lorenzo Pellegrini | Associazione Sportiva Roma | 28/22/3 |
| 15 | B+ | 케빈 스트로트만 | Kevin Strootman | Associazione Sportiva Roma | 32/26/1 |
| 16 | B+ | 피오트르 지엘린스키 | Piotr Zieliński | Società Sportiva Calcio Napoli | 36/14/4 |
| 17 | B0 | 알레산드로 무르자 | Alessandro Murgia | Società Sportiva Lazio | 16/9/0 |
| 18 | B0 | 마누엘 로카텔리 | Manuel Locatelli | Associazione Calcio Milan | 21/5/0 |

### CAM — 전체 4명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | S | 파울로 디발라 | Paulo Dybala | Juventus Football Club | 33/26/22 |
| 2 | A+ | 루이스 알베르토 | Luis Alberto | Società Sportiva Lazio | 34/32/11 |
| 3 | B+ | 하피냐 | Rafinha Alcântara | Football Club Internazionale Milano | 17/12/2 |
| 4 | B+ | 펠리피 안데르송 | Felipe Anderson | Società Sportiva Lazio | 21/9/4 |

### LW — 전체 8명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A+ | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli | 37/36/8 |
| 2 | A+ | 이반 페리시치 | Ivan Perišić | Football Club Internazionale Milano | 37/37/11 |
| 3 | A0 | 파푸 고메스 | Alejandro Gómez | Atalanta Bergamasca Calcio | 33/31/6 |
| 4 | A0 | 마리오 만주키치 | Mario Mandžukić | Juventus Football Club | 32/27/5 |
| 5 | A- | 하칸 찰하놀루 | Hakan Çalhanoğlu | Associazione Calcio Milan | 31/25/6 |
| 6 | B+ | 스테판 엘샤라위 | Stephan El Shaarawy | Associazione Sportiva Roma | 33/25/7 |
| 7 | B+ | 디에고 페로티 | Diego Perotti | Associazione Sportiva Roma | 25/17/5 |
| 8 | B0 | 파비오 보리니 | Fabio Borini | Associazione Calcio Milan | 29/19/2 |

### RW — 전체 9명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | A+ | 도글라스 코스타 | Douglas Costa | Juventus Football Club | 31/18/4 |
| 2 | A+ | 요시프 일리치치 | Josip Iličić | Atalanta Bergamasca Calcio | 31/21/11 |
| 3 | A0 | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli | 38/38/10 |
| 4 | A0 | 수소 | Suso | Associazione Calcio Milan | 35/33/6 |
| 5 | A- | 젱기즈 윈데르 | Cengiz Ünder | Associazione Sportiva Roma | 26/15/7 |
| 6 | B+ | 안토니오 칸드레바 | Antonio Candreva | Football Club Internazionale Milano | 36/33/0 |
| 7 | B+ | 후안 콰드라도 | Juan Cuadrado | Juventus Football Club | 21/15/4 |
| 8 | B0 | 파트리크 시크 | Patrik Schick | Associazione Sportiva Roma | 22/10/2 |
| 9 | B- | 얀 카라모 | Yann Karamoh | Football Club Internazionale Milano | 16/4/1 |

### ST — 전체 13명

| 순위 | 티어 | 한글이름 | 원어명 | 소속 구단 원어 | 2017-18 P/S/G |
|---:|---|---|---|---|---|
| 1 | S | 치로 임모빌레 | Ciro Immobile | Società Sportiva Lazio | 33/33/29 |
| 2 | S | 마우로 이카르디 | Mauro Icardi | Football Club Internazionale Milano | 34/34/29 |
| 3 | A+ | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli | 38/35/18 |
| 4 | A+ | 곤살로 이과인 | Gonzalo Higuaín | Juventus Football Club | 35/32/16 |
| 5 | A0 | 에딘 제코 | Edin Džeko | Associazione Sportiva Roma | 36/33/16 |
| 6 | B+ | 파트리크 쿠트로네 | Patrick Cutrone | Associazione Calcio Milan | 28/17/10 |
| 7 | B+ | 안드레아 페타냐 | Andrea Petagna | Atalanta Bergamasca Calcio | 29/22/4 |
| 8 | B+ | 아르카디우시 밀리크 | Arkadiusz Milik | Società Sportiva Calcio Napoli | 15/3/5 |
| 9 | B0 | 니콜라 칼리니치 | Nikola Kalinić | Associazione Calcio Milan | 31/20/6 |
| 10 | B0 | 안드레아스 코르넬리우스 | Andreas Cornelius | Atalanta Bergamasca Calcio | 23/8/3 |
| 11 | B0 | 에데르 | Éder Citadin Martins | Football Club Internazionale Milano | 29/4/3 |
| 12 | B0 | 펠리페 카이세도 | Felipe Caicedo | Società Sportiva Lazio | 22/4/3 |
| 13 | B- | 그레구아르 데프렐 | Grégoire Defrel | Associazione Sportiva Roma | 15/5/1 |

## 5. S~D 전체 티어 분포 / World Class / League Top Class

| 티어 | 선수 수 |
|---|---:|
| S | 4 |
| A+ | 21 |
| A0 | 23 |
| A- | 8 |
| B+ | 39 |
| B0 | 20 |
| B- | 6 |
| C+ | 1 |
| C0 | 1 |
| C- | 0 |
| D | 0 |

최종 **123명**, World Class(S/A+) **25명**, League Top Class(S/A+/A0/A-) **56명**. League Top Class는 World Class 포함이다.

### World Class — 25명

| 티어 | 포지션 | 한글 이름 | 원어명 | 구단(원어) | 2017-18 경기·득점 |
|---|---|---|---|---|---|
| S | GK | 알리송 베케르 | Alisson Becker | Associazione Sportiva Roma | 37 / 0 |
| S | CAM | 파울로 디발라 | Paulo Dybala | Juventus Football Club | 33 / 22 |
| S | ST | 치로 임모빌레 | Ciro Immobile | Società Sportiva Lazio | 33 / 29 |
| S | ST | 마우로 이카르디 | Mauro Icardi | Football Club Internazionale Milano | 34 / 29 |
| A+ | GK | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano | 38 / 0 |
| A+ | GK | 잔루이지 돈나룸마 | Gianluigi Donnarumma | Associazione Calcio Milan | 38 / 0 |
| A+ | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 21 / 0 |
| A+ | CB | 칼리두 쿨리발리 | Kalidou Koulibaly | Società Sportiva Calcio Napoli | 35 / 5 |
| A+ | CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club | 26 / 0 |
| A+ | CB | 밀란 슈크리니아르 | Milan Škriniar | Football Club Internazionale Milano | 38 / 4 |
| A+ | CB | 스테판 더 프레이 | Stefan de Vrij | Società Sportiva Lazio | 36 / 6 |
| A+ | LB | 알렉산다르 콜라로프 | Aleksandar Kolarov | Associazione Sportiva Roma | 35 / 2 |
| A+ | DM | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli | 33 / 2 |
| A+ | DM | 루카스 레이바 | Lucas Leiva | Società Sportiva Lazio | 36 / 2 |
| A+ | DM | 미랄렘 피아니치 | Miralem Pjanić | Juventus Football Club | 31 / 5 |
| A+ | CM | 세르게이 밀린코비치사비치 | Sergej Milinković-Savić | Società Sportiva Lazio | 35 / 12 |
| A+ | CM | 알란 | Allan Marques Loureiro | Società Sportiva Calcio Napoli | 38 / 4 |
| A+ | CM | 브리안 크리스탄테 | Bryan Cristante | Atalanta Bergamasca Calcio | 36 / 9 |
| A+ | CAM | 루이스 알베르토 | Luis Alberto | Società Sportiva Lazio | 34 / 11 |
| A+ | LW | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli | 37 / 8 |
| A+ | LW | 이반 페리시치 | Ivan Perišić | Football Club Internazionale Milano | 37 / 11 |
| A+ | RW | 도글라스 코스타 | Douglas Costa | Juventus Football Club | 31 / 4 |
| A+ | RW | 요시프 일리치치 | Josip Iličić | Atalanta Bergamasca Calcio | 31 / 11 |
| A+ | ST | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli | 38 / 18 |
| A+ | ST | 곤살로 이과인 | Gonzalo Higuaín | Juventus Football Club | 35 / 16 |

### League Top Class — 56명

| 티어 | 포지션 | 한국어 이름 | 원어명 | 구단 원어명 |
|---|---|---|---|---|
| S | GK | 알리송 베케르 | Alisson Becker | Associazione Sportiva Roma |
| S | CAM | 파울로 디발라 | Paulo Dybala | Juventus Football Club |
| S | ST | 치로 임모빌레 | Ciro Immobile | Società Sportiva Lazio |
| S | ST | 마우로 이카르디 | Mauro Icardi | Football Club Internazionale Milano |
| A+ | GK | 사미르 한다노비치 | Samir Handanović | Football Club Internazionale Milano |
| A+ | GK | 잔루이지 돈나룸마 | Gianluigi Donnarumma | Associazione Calcio Milan |
| A+ | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club |
| A+ | CB | 칼리두 쿨리발리 | Kalidou Koulibaly | Società Sportiva Calcio Napoli |
| A+ | CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus Football Club |
| A+ | CB | 밀란 슈크리니아르 | Milan Škriniar | Football Club Internazionale Milano |
| A+ | CB | 스테판 더 프레이 | Stefan de Vrij | Società Sportiva Lazio |
| A+ | LB | 알렉산다르 콜라로프 | Aleksandar Kolarov | Associazione Sportiva Roma |
| A+ | DM | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli |
| A+ | DM | 루카스 레이바 | Lucas Leiva | Società Sportiva Lazio |
| A+ | DM | 미랄렘 피아니치 | Miralem Pjanić | Juventus Football Club |
| A+ | CM | 세르게이 밀린코비치사비치 | Sergej Milinković-Savić | Società Sportiva Lazio |
| A+ | CM | 알란 | Allan Marques Loureiro | Società Sportiva Calcio Napoli |
| A+ | CM | 브리안 크리스탄테 | Bryan Cristante | Atalanta Bergamasca Calcio |
| A+ | CAM | 루이스 알베르토 | Luis Alberto | Società Sportiva Lazio |
| A+ | LW | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli |
| A+ | LW | 이반 페리시치 | Ivan Perišić | Football Club Internazionale Milano |
| A+ | RW | 도글라스 코스타 | Douglas Costa | Juventus Football Club |
| A+ | RW | 요시프 일리치치 | Josip Iličić | Atalanta Bergamasca Calcio |
| A+ | ST | 드리스 메르턴스 | Dries Mertens | Società Sportiva Calcio Napoli |
| A+ | ST | 곤살로 이과인 | Gonzalo Higuaín | Juventus Football Club |
| A0 | GK | 페페 레이나 | Pepe Reina | Società Sportiva Calcio Napoli |
| A0 | GK | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus Football Club |
| A0 | CB | 페데리코 파시오 | Federico Fazio | Associazione Sportiva Roma |
| A0 | CB | 코스타스 마놀라스 | Kostas Manolas | Associazione Sportiva Roma |
| A0 | CB | 레오나르도 보누치 | Leonardo Bonucci | Associazione Calcio Milan |
| A0 | CB | 안드레아 마시엘로 | Andrea Masiello | Atalanta Bergamasca Calcio |
| A0 | CB | 라울 알비올 | Raúl Albiol | Società Sportiva Calcio Napoli |
| A0 | CB | 하파에우 톨로이 | Rafael Tolói | Atalanta Bergamasca Calcio |
| A0 | CB | 주앙 미란다 | João Miranda | Football Club Internazionale Milano |
| A0 | CB | 메흐디 베나티아 | Medhi Benatia | Juventus Football Club |
| A0 | LB | 알렉스 산드루 | Alex Sandro | Juventus Football Club |
| A0 | RB | 엘세이드 히사이 | Elseid Hysaj | Società Sportiva Calcio Napoli |
| A0 | CM | 자코모 보나벤투라 | Giacomo Bonaventura | Associazione Calcio Milan |
| A0 | CM | 마레크 함식 | Marek Hamšík | Società Sportiva Calcio Napoli |
| A0 | CM | 레모 프로일러 | Remo Freuler | Atalanta Bergamasca Calcio |
| A0 | CM | 사미 케디라 | Sami Khedira | Juventus Football Club |
| A0 | CM | 라자 나잉골란 | Radja Nainggolan | Associazione Sportiva Roma |
| A0 | CM | 블레즈 마튀디 | Blaise Matuidi | Juventus Football Club |
| A0 | LW | 파푸 고메스 | Alejandro Gómez | Atalanta Bergamasca Calcio |
| A0 | LW | 마리오 만주키치 | Mario Mandžukić | Juventus Football Club |
| A0 | RW | 호세 카예혼 | José Callejón | Società Sportiva Calcio Napoli |
| A0 | RW | 수소 | Suso | Associazione Calcio Milan |
| A0 | ST | 에딘 제코 | Edin Džeko | Associazione Sportiva Roma |
| A- | CB | 마티아 칼다라 | Mattia Caldara | Atalanta Bergamasca Calcio |
| A- | LB | 마리우 후이 | Mário Rui | Società Sportiva Calcio Napoli |
| A- | LB | 파우지 굴람 | Faouzi Ghoulam | Società Sportiva Calcio Napoli |
| A- | RB | 주앙 칸셀루 | João Cancelo | Football Club Internazionale Milano |
| A- | CM | 프랑크 케시에 | Franck Kessié | Associazione Calcio Milan |
| A- | CM | 마르첼로 브로조비치 | Marcelo Brozović | Football Club Internazionale Milano |
| A- | LW | 하칸 찰하놀루 | Hakan Çalhanoğlu | Associazione Calcio Milan |
| A- | RW | 젱기즈 윈데르 | Cengiz Ünder | Associazione Sportiva Roma |

## 6. 56명 상위 선수(S~A-) 개별 개인 활약·3시즌 가중 정성 평가

다음은 모든 선수를 동일하게 '몇 경기 출전'만으로 점수 매긴 것이 아니라 선수별 실제 전술역할·창출·볼 운반·수비·가용성과 직전 두 시즌의 연결 여부를 구별한 서술이다. 각 선수의 마지막 2개 시즌에서 이미 작성한 DRAFT 수치는 독립 사실 확정이 아니고 데이터가 없으면 `null`(0경기라고 단정하면 안 됨).

| 티어 | 위치 | 선수 | 개별 현재 시즌·이전 시즌 평가 근거 |
|---|---|---|---|
| S | GK | 알리송 베케르 (Alisson Becker) | 37경기 모두 선발·리그 17클린시트. 박스 안 반사 선방과 빌드업·거리 조절에서 리그 최고 수준의 시즌. 2016-17 로마에서는 세리에 A 0경기였지만 2017-18 실질적 대체 불가능 수준의 개인 성능을 크게 평가해 S; 2015-16 Internacional 경력 비교는 추가 조사. **판정 S (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| S | CAM | 파울로 디발라 (Paulo Dybala) | 33경기 22골. CAM/세컨드 스트라이커 역할로 좁은 공간에서 왼발 마무리·전진 패스·박스 앞 득점을 동시에 생산. 2015-16 19골→2016-17 11골→2017-18 22골로 공격 중심 기여를 회복·확대해 S 잠정. **판정 S (미승인)**. 3시즌 출전 연결 상태: 2015-16 34경기·19골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 31경기·11골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| S | ST | 치로 임모빌레 (Ciro Immobile) | 33경기 모두 선발·29골, Icardi와 공동 득점왕. 측면에서 안으로 파고드는 움직임·수비 뒤 출발 시점과 마무리 완성도가 압도적. 2016-17 Lazio 23골 이후 재상승하며 현재 시즌 리그 최우수 공격수 후보 S. **판정 S (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 36경기·23골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| S | ST | 마우로 이카르디 (Mauro Icardi) | 34경기 모두 선발·29골 공동 득점왕. 박스 내 움직임·결정력·수비수 밀집 지점 장악이 극도로 효율적. 2015-16 16골에서 이번 시즌 급증했고 2016-17 리그 24골의 독립 검증이 추가로 필요하지만 현재 시즌의 대체불가 마무리로 S. **판정 S (미승인)**. 3시즌 출전 연결 상태: 2015-16 33경기·16골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | GK | 사미르 한다노비치 (Samir Handanović) | 38경기 전 경기 풀타임. 1대1 대응·페널티 지역 반사신경과 수비라인 조율에서 높은 개인 기여. 2015-16도 36경기 주전이었고 2016-17은 미승인 데이터 연결이 없어 추가 평가가 필요하지만 당해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 36경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | GK | 잔루이지 돈나룸마 (Gianluigi Donnarumma) | 38경기 전 경기 풀타임. 젊은 정규리그 주전으로 반사 선방·근거리 대처와 승부처 개입이 매우 높음. 2015-16 데뷔 기량과 2016-17 38경기 주전의 지속성을 고려해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 38경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | GK | 잔루이지 부폰 (Gianluigi Buffon) | 유벤투스 리그 21경기·21선발. 높은 박스 지휘와 위치 선정·경험에 기반한 수비 안정은 여전히 최상위지만 시즌 출전 분담이 커짐. 2015-16의 974분 연속 무실점과 2016-17 정상급 기량을 참고하되 2017-18의 21경기 가용성을 비중 있게 반영. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 35경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 30경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CB | 칼리두 쿨리발리 (Kalidou Koulibaly) | 35경기 5골. 압박이 강한 점유 전술의 광범위 공간을 홀로 커버하면서 후방 전진 패스·대인 저지·세트피스 공격까지 기여. 2015-16·2016-17에도 성장했으며 이번 시즌 완성도가 한 단계 올라 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 33경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 28경기·2골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CB | 조르조 키엘리니 (Giorgio Chiellini) | 26경기 25선발로 1대1 대결, 공중 경합과 넓은 공간 커버에서 매우 높게 평가. 직전 두 시즌 결장이 잦았음에도 현재 수비라인의 중심 역할이 선명하며 보누치 이적 뒤 가치가 두드러짐. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 24경기·1골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 21경기·2골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CB | 밀란 슈크리니아르 (Milan Škriniar) | 38경기 전 경기 풀타임·4골. 새로 합류한 센터백이 안정적인 대인 수비·패스 빌드업과 세트피스 공격에 모두 기여. 2015-16·2016-17 Sampdoria 발전기에서의 급성장으로 당해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CB | 스테판 더 프레이 (Stefan de Vrij) | 36경기 모두 선발·6골. 라치오 3백 중앙의 공중볼·라인 조율과 세트피스 기여가 탁월. 2015-16 부상 결장 시기와 2016-17 27경기 복귀 추세를 감안할 때 올해 기량·지속성이 가장 높아 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 27경기·2골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | LB | 알렉산다르 콜라로프 (Aleksandar Kolarov) | 35경기 34선발·2골. 왼쪽 풀백에서 80회의 찬스 창출이 동시대 보도될 만큼 중장거리 전진 패스·세트피스·오버래핑이 뛰어남. 직전 두 Manchester City 시즌 성과는 별도 조사 필요하나 당해 영향력 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | DM | 조르지뉴 (Jorginho) | 33경기 33선발·2골. 높은 빈도의 짧은 패스로 후방에서 전방으로 템포를 조절하고 상대 압박을 탈출. 2015-16 35경기·2016-17 27경기 때부터 연속된 레지스타 기량을 이번 시즌에 더 높게 평가해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 35경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 27경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | DM | 루카스 레이바 (Lucas Leiva) | 36경기 35선발·2골. 후방 인터셉트·측면 커버 및 안정된 롱/숏 패스로 Lazio 3-5-1-1을 지탱. 2015-16/2016-17 Liverpool 시절의 역할과 비교해야 하나 첫 Serie A 시즌에서 높은 개인 영향으로 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | DM | 미랄렘 피아니치 (Miralem Pjanić) | 31경기·5골. 레지스타 성향의 더블 피벗에서 정교한 배급·상대 압박 회피·세트피스 제공이 핵심. 2015-16 로마 창조성에 이어 2016-17 유벤투스 적응을 거쳐, 이번에도 동포지션 정상급 연속성을 유지. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 33경기·10골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 30경기·5골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CM | 세르게이 밀린코비치사비치 (Sergej Milinković-Savić) | 35경기 33선발·12골. 높은 신체 능력에 기술적 볼 보호·장거리 전진·오프볼 페널티 지역 진입을 결합. 2016-17 4골에서 생산성이 크게 상승했고 2015-16 적응기 기량까지 고려해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 34경기·4골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CM | 알란 (Allan Marques Loureiro) | 38경기 32선발·4골. 우측 메짤라로 강한 압박·볼 회수·전진 운반과 수비 전환 가속의 핵심. 2015-16 35경기·2016-17 29경기부터 이어온 연속적 최정상 공수 기여로 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 35경기·3골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 29경기·1골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CM | 브리안 크리스탄테 (Bryan Cristante) | 36경기 33선발·9골. 중앙/전진 미드필더로 수비 전환과 박스 침투, 하프스페이스 결정력에 확실한 존재감. 2016-17 Atalanta 겨울 합류 12경기 3골에서 한 시즌에 크게 성장해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 12경기·3골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | CAM | 루이스 알베르토 (Luis Alberto) | 34경기 32선발·11골에 2017-18 리그 도움 1위(통계 제공기관별 최대 14회). 중앙 공격형 미드필더/세컨드 스트라이커로 최종 패스·세트피스·리턴 연계가 압도적. 2015-16 Deportivo와 2016-17 Lazio 저출전 시기를 넘어 이번 시즌에 최고 수준으로 도약해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | LW | 로렌초 인시녜 (Lorenzo Insigne) | 37경기 36선발·8골. 왼쪽 윙에서 높은 찬스 창출(동시대 보도 103회)·수비 뒤 통로 개방·공격 전개에 기여. 2015-16 12골, 2016-17 18골에 비해 득점은 감소했어도 패스 창조의 질을 반영해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 37경기·12골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 37경기·18골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | LW | 이반 페리시치 (Ivan Perišić) | 37경기 37선발·11골. 왼쪽 측면에서 반복적 득점 지원·크로스·뒷공간 침투, 수비 복귀까지 높은 가용성을 보유. 2015-16 7골과 2016-17 공격 생산성을 감안해 상위권 LW A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 34경기·7골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | RW | 도글라스 코스타 (Douglas Costa) | 31경기 18선발·4골. 시즌 후반 양측 드리블과 기회 창출에서 강한 폭발력; 전문 통계 기준 12도움(제공기관별 차이 존재). 2015-16/2016-17 바이에른 활약과 별도 비교가 필요하지만 2017-18 동리그 RW 창조성의 상위 평가를 정당화. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | RW | 요시프 일리치치 (Josip Iličić) | 31경기 21선발·11골. 오른쪽 안쪽 포워드로 왼발 킥·세컨드 스트라이커 움직임과 좁은 공간 최종 패스가 뛰어남. Fiorentina 2015-16 13골과 2016-17의 제한된 생산성 뒤 Atalanta에서 재도약한 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 30경기·13골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | ST | 드리스 메르턴스 (Dries Mertens) | 38경기 35선발·18골. 리그 원톱/가짜9번으로 좁은 공간에서 연계·마무리·기동성을 제공. 2016-17 28골에서 감소했지만 2015-16 윙어 5골에서 중앙 공격수로 바뀐 2년 연속 뛰어난 개인 기여를 반영해 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 33경기·5골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 35경기·28골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A+ | ST | 곤살로 이과인 (Gonzalo Higuaín) | 35경기 32선발·16골. 중앙 지역 마무리·수비수 고정·공격 연결에 기여. 2015-16 36골의 폭발력과 2016-17 24골 연속성이 있으나 현재 직접 득점이 줄어 S 대신 A+. **판정 A+ (미승인)**. 3시즌 출전 연결 상태: 2015-16 35경기·36골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 38경기·24골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | GK | 페페 레이나 (Pepe Reina) | 37경기 연속 선발. Sarri 체제 후방 빌드업과 높은 수비라인 뒷공간 관리에서 침착함. 2015-16, 2016-17 모두 주전인 지속성도 있으나 리그 내 최정상 개인 선방급보다 보수적인 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 37경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 37경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | GK | 보이치에흐 슈쳉스니 (Wojciech Szczęsny) | 17경기를 17선발로 치르며 부폰과 함께 안정된 선방을 제공. 직전 두 시즌 로마에서 정규리그 주전 경험을 쌓은 만큼 단순 세컨드 GK로 저평가하지 않되, 현재 부폰과의 시즌 표본 분할을 감안. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 34경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 38경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 페데리코 파시오 (Federico Fazio) | 34경기 32선발·2골. 센터백의 제공권과 포지셔닝, 롱패스 전개가 강점이지만 속도 대응에는 한계. 2016-17 로마의 높은 활동 뒤 2017-18 기량을 감안하여 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 37경기·2골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 코스타스 마놀라스 (Kostas Manolas) | 29경기 27선발·2골. Roma 수비에서 빠른 뒷공간 커버·라인 이동·대인 수비가 강점. 2015-16 37경기·2016-17 33경기 수준의 압도적 가용성 대비 줄어든 출전량을 반영해 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 37경기·2골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 33경기·1골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 레오나르도 보누치 (Leonardo Bonucci) | 35경기 35선발·2골. Juventus에서 Milan으로 이적한 시즌 CB로 전진 패스·라인 조직을 담당했으나 수비 실책과 적응기 기복이 있었음. 직전 2015-16 36경기·2016-17 29경기의 최상위 기량을 고려하되 이번 시즌에는 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 36경기·3골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 29경기·3골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 안드레아 마시엘로 (Andrea Masiello) | 31경기 30선발·4골. Gasperini 3백 왼쪽 커버와 공격 시 빌드업·세트피스 제공권에서 핵심. 2016-17 35경기 경험의 지속성을 감안해 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 35경기·3골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 라울 알비올 (Raúl Albiol) | 31경기 30선발·3골. 센터백의 부정확한 압박을 줄이고 수비 간격 조절·후방 패스 안정성을 제공. 앞선 2015-16 36경기·2016-17 26경기와의 기용 지속성을 감안한 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 36경기·1골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 26경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 하파에우 톨로이 (Rafael Tolói) | 31경기 29선발·1골. 3백의 넓은 RCB 전진·측면 커버·볼 탈취를 성공적으로 수행. 2016-17 32경기 수비 주전 지속성을 반영해 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 32경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 주앙 미란다 (João Miranda) | 31경기 31선발. 경험과 적절한 인터셉트·후방 지휘로 젊은 Škriniar의 위험 부담을 줄임. 2015-16 Inter 첫해와 2016-17 Inter 경력을 고려하면 안정적 상위권 CB로 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 32경기·1골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CB | 메흐디 베나티아 (Medhi Benatia) | 20경기 19선발·2골. 보누치 이적 뒤 CB 로테이션에서 역할이 확대됐고 공중볼·대인 방어가 강점. 2015-16 뮌헨·2016-17 유벤투스 활동과 비교할 때 장기 연속 주전 증거는 보완이 필요하여 최상위 A+보다는 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | LB | 알렉스 산드루 (Alex Sandro) | 26경기 4골. 왼쪽 풀백으로 전진·공격 지원은 계속 우수했으나 수비 집중력과 경기 지속성에서는 2016-17보다 다소 기복. 2015-16 22경기와 2016-17 27경기의 상승기에서 2017-18을 한 단계 보수적으로 평가. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 22경기·2골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 27경기·3골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | RB | 엘세이드 히사이 (Elseid Hysaj) | 35경기 모두 선발. 오른쪽 측면 수비 라인의 반복적인 위치 유지·상대 측면 전환 대응과 공격수 지원. 직전 2015-16/2016-17 각각 37·35경기라는 연속 가용성으로 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 37경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 35경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CM | 자코모 보나벤투라 (Giacomo Bonaventura) | 33경기 30선발·8골. 좌측 메짤라의 압박 탈출·전방 볼 운반과 중원에서 공격 2선 연결이 뛰어남. 2016-17 19경기 부상기보다 강하게 반등했고 2015-16 이전 연속 기량을 고려해 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 19경기·3골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CM | 마레크 함식 (Marek Hamšík) | 38경기·7골. 좌측 메짤라의 공간 창출·박스 침투·연결 기여가 높지만 2016-17 12골에서 득점 감소. 2015-16~2016-17 연속 A+ 수준과 비교해 당해 활용 시간과 공격 생산성의 상대적 하락을 감안하여 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 38경기·6골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 38경기·12골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CM | 레모 프로일러 (Remo Freuler) | 35경기 33선발·5골. 박스투박스 주행·상대 전환 차단·패스 연결과 고정적인 리그 출전 가용성이 탁월. 2016-17 33경기 5골에 이어 강력한 지속성을 보이며 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 33경기·5골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CM | 사미 케디라 (Sami Khedira) | 26경기 9골. 중앙 박스 침투·세컨드볼 회수에서 고효율 득점이 인상적이었지만 부상과 24선발이라는 출전 제약을 반영. 2015-16 5골·2016-17 5골보다 전진 마무리가 상승. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 20경기·5골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 31경기·5골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CM | 라자 나잉골란 (Radja Nainggolan) | 31경기 31선발·4골. 중앙에서 압박·볼 탈취·수비와 공격 연결의 높은 운동능력을 유지했으나 2016-17 11골과 더 공격적인 CAM 역할에서 후퇴. 2015-16 6골의 상위 기량까지 고려해 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 35경기·6골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 37경기·11골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | CM | 블레즈 마튀디 (Blaise Matuidi) | 32경기 27선발·3골. 여름 이적 뒤 넓은 활동량·전방 압박 커버·좌측 중원 수비 밸런스를 제공. 앞선 PSG 두 시즌도 중원 활동량 검증 필요하며 이번 시즌의 득점보다 공수 간격 유지 기여로 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | LW | 파푸 고메스 (Alejandro Gómez) | 33경기 31선발·6골. 넓은 공간 드리블·중앙과 좌측 연결·동료 결정 찬스 창출에서 압도적 비중(동시대 Sky 95회 기회 창출). 2016-17 16골보다 득점이 줄었지만 창출·연계 가치로 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 37경기·16골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | LW | 마리오 만주키치 (Mario Mandžukić) | 32경기 27선발·5골. 왼쪽 측면의 수비적 압박, 공중볼, 공격 중심 이동 시 연결 역할 등 득점 외 기여가 큼. 2015-16 원톱·2016-17 LW 전환 경험을 반영하며 순수 리그 득점 감소 때문에 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 27경기·10골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 34경기·7골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | RW | 호세 카예혼 (José Callejón) | 38경기 모두 선발·10골. 오른쪽 채널 침투·상대 뒷공간 활용과 팀 압박 가담의 꾸준함. 2015-16 7골·2016-17 14골로 공격성은 유지됐으나 탑급 RW의 개인 돌파·찬스 창출 대비 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 38경기·7골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 37경기·14골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | RW | 수소 (Suso) | 35경기 33선발·6골. 오른쪽 인사이드 포워드의 왼발 컷인·크로스·리턴 패스로 Milan 공격의 중심. 2016-17 7골의 개인 전술 기여와 비슷하지만 상대를 압도할 만한 장기 최고 기량 측면에서 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 34경기·7골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A0 | ST | 에딘 제코 (Edin Džeko) | 36경기 33선발·16골. 제공권과 포스트 연계, 2선 득점 기회 제공은 우수. 2016-17 리그 29골 득점왕 시즌보다 골은 줄었으나 2015-16 로마 적응기 이후 3시즌 상위 주전 지속성으로 A0. **판정 A0 (미승인)**. 3시즌 출전 연결 상태: 2015-16 31경기·8골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 37경기·29골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | CB | 마티아 칼다라 (Mattia Caldara) | 24경기 모두 선발·3골. 뒷공간 대응과 센터백 박스 침투에서 강점, 다만 2016-17 30경기 7골보다 출전·득점이 감소. 이전 Cesena 임대 기록과 함께 높은 평가의 지속성은 남아 있지만 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 30경기·7골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | LB | 마리우 후이 (Mário Rui) | 25경기 24선발·2골. 굴람의 무릎 부상 뒤 왼쪽 풀백의 높은 패스 가용성과 압박 전진을 소화. Roma 시기 2016-17 제한된 표본에서 Naples 핵심 역할로 확대됐지만 리그 탑급 장기 지속성은 부족해 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | LB | 파우지 굴람 (Faouzi Ghoulam) | 부상 전 11경기 모두 선발·2골, 전진 크로스·하프스페이스 공급이 매우 인상적. 2015-16 34경기·2016-17 29경기 기량은 인정하지만 2017-18 장기 결장으로 최신 시즌 지속성에 분명한 제한이 있어 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 34경기·0골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 29경기·0골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | RB | 주앙 칸셀루 (João Cancelo) | 26경기 20선발·1골. RB의 바깥쪽 폭과 압박 탈출 드리블, 중앙-측면 패스 기여가 새롭고 강력했음. 2015-16/2016-17 Valencia에서의 측면 기량이 이번 Serie A에서 드러났지만 리그 상위권 장기 지속성은 짧아 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | CM | 프랑크 케시에 (Franck Kessié) | 37경기 모두 선발·5골. Atalanta에서 Milan으로 이적한 후 높은 왕복 활동량·전방 압박과 수비 전환을 분담. 2016-17 Atalanta 6골의 성장기와 비교하면 충분히 뛰어나지만 동포지션 상위권과의 기술·창의성 격차를 반영해 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 30경기·6골(기존 미승인 아카이브, 제2출처 재검증 전). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | CM | 마르첼로 브로조비치 (Marcelo Brozović) | 31경기 21선발·4골. Spalletti 시즌 후반에 후방 레지스타 성향으로 볼 전개·방향 전환, 세트피스 지원이 개선. 2015-16 Inter와 2016-17 자료 비교 시 시즌 전반 고정 선발이 아니었던 점을 반영하여 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 32경기·4골(기존 미승인 아카이브, 제2출처 재검증 전); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | LW | 하칸 찰하놀루 (Hakan Çalhanoğlu) | 31경기 25선발·6골. 좌측 윙어로 장거리 킥·전진 패스·박스 바깥 위협을 제공하고 시즌 후반 비중이 확대. 2015-16 Leverkusen과 2016-17 독일 정지 기간을 포함하여 지속성 비교가 어려워 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |
| A- | RW | 젱기즈 윈데르 (Cengiz Ünder) | 26경기 15선발·7골. 우측에서 왼발 컷인·수비 사이 침투·원거리 슈팅으로 활력을 제공. 2015-16·2016-17 터키 리그 수준의 지속성은 직접 비교가 필요해 최근의 돌파 활약을 높게 평가하되 A-. **판정 A- (미승인)**. 3시즌 출전 연결 상태: 2015-16 개인 기록 미연결(실제 0경기 뜻 아님); 2016-17 개인 기록 미연결(실제 0경기 뜻 아님). 모든 경기별 실제 최빈 위치·독립 동포지션 통계 비교는 추가 확인 필요. |

## 7. Best XI 제안 (미승인) — 4-3-3

후보 조건: 각 선수의 현재 시즌 소속과 주 포지션을 준수하고, 같은 선수를 중복 배치하지 않는다. 본 선정안은 2017-18 개인 퍼포먼스에 가장 높은 가중치를 부여하여 1 DM·2 CM 배치를 사용한다.

| 위치 | 선수 한글이름 | 원어명 | 당시 소속 원어명 | 생년월일 | 등급 | 2017-18 실제 리그 기록 |
|---|---|---|---|---|---|---|
| GK | 알리송 베케르 | Alisson Becker | Associazione Sportiva Roma | 1992-10-02 | S | 37경기, 0골 |
| CB | 칼리두 쿨리발리 | Kalidou Koulibaly | Società Sportiva Calcio Napoli | 1991-06-20 | A+ | 35경기, 5골 |
| CB | 밀란 슈크리니아르 | Milan Škriniar | Football Club Internazionale Milano | 1995-02-11 | A+ | 38경기, 4골 |
| LB | 알렉산다르 콜라로프 | Aleksandar Kolarov | Associazione Sportiva Roma | 1985-11-10 | A+ | 35경기, 2골 |
| RB | 주앙 칸셀루 | João Cancelo | Football Club Internazionale Milano | 1994-05-27 | A- | 26경기, 1골 |
| DM | 조르지뉴 | Jorginho | Società Sportiva Calcio Napoli | 1991-12-20 | A+ | 33경기, 2골 |
| CM | 세르게이 밀린코비치사비치 | Sergej Milinković-Savić | Società Sportiva Lazio | 1995-02-27 | A+ | 35경기, 12골 |
| CM | 알란 | Allan Marques Loureiro | Società Sportiva Calcio Napoli | 1991-01-08 | A+ | 38경기, 4골 |
| LW | 로렌초 인시녜 | Lorenzo Insigne | Società Sportiva Calcio Napoli | 1991-06-04 | A+ | 37경기, 8골 |
| RW | 도글라스 코스타 | Douglas Costa | Juventus Football Club | 1990-09-14 | A+ | 31경기, 4골 |
| ST | 치로 임모빌레 | Ciro Immobile | Società Sportiva Lazio | 1990-02-20 | S | 33경기, 29골 |

**Best XI 경쟁군**: GK Handanović(38경기) vs Alisson(37경기); CB Chiellini/Koulibaly/Škriniar/de Vrij; LB Kolarov/Alex Sandro; RB Cancelo/Hysaj; CM Milinković-Savić/Allan/Cristante; LW Insigne/Perišić; RW Douglas Costa/Iličić; ST Immobile/Icardi. Icardi(34경기 29골)와 Immobile(33경기 29골)은 공동 득점왕이지만, Lazio 전술에서 연결·공간 침투·슈팅·동료 창출을 모두 담당한 Immobile를 잠정 XI에 선정. 이 판단은 3시즌 독립 비교 후 변경할 수 있다.

## 8. 역사·등록·이적·용어 검증상 특수사항

- 2018-19 top four Italy UCL qualification introduced: Juventus Napoli Roma Inter entered group stage.
- Milan 2018-19 exclusion due UEFA FFP overturned by July 20 2018 CAS ruling; actually played UEFA Europa League group stage.
- Atalanta played 2018-19 UEL qualifiers and lost to Copenhagen in play-off, must count as actual UEFA participation even without group.
- 2017-18 Serie A top scorers Immobile 29 Lazio and Icardi 29 Inter; Dybala Juventus 22 goals. No club league points title bonus.
- Roma Alisson had 0 domestic Serie A minutes 2016-17 but 37 starts 2017-18; explicitly include this season.
- Lazio Luis Alberto CAM/second striker with 11 goals and league-best 14 assists by FBref; assists from separate verified league report not copied as player stat column without individual audit.
- Lazio 3-5-1-1 includes three CB and two wingbacks (site LB/RB mapped), Luis Alberto CAM behind Immobile.
- Atalanta wingbacks Gosens/Spinazzola LWB and Hateboer/Castagne RWB, mappings stored in originalTacticalRole.
- 2017-18 Milan Bonucci plays for Milan not Juventus; Franck Kessie plays for Milan not Atalanta; Andrea Conti Milan had only two Serie A matches due ACL injury.
- 2017-18 current-season goalkeeper negative goals at BDFutbol are goals conceded, not player scoring; goalkeeper scored goals correctly encoded zero.
- No player repeated between qualified teams even if a transfer happened during this or previous years.
- Fiorentina 8위는 UEFA 참가하지 않았으므로 선수 평가 팀에서 제외. 단 2015-16, 2016-17 이전 선수 자료를 비교할 때 당시 소속을 확인하는 것은 허용.
- 2017-18 유벤투스의 Leonardo Bonucci는 Milan 소속으로 이적했고 AC Milan의 Franck Kessié는 Atalanta에서 이적한 시즌이다. 이런 시즌간 클럽 경력 구분을 최우선 적용.
- 2017-18 Inter GK Padelli 0경기, Roma Lobonț 0경기, Milan Antonio Donnarumma 0경기, Lazio Vargić 0경기 등은 구단 명단에서 제외. 후보 GK 없는 팀은 빈 슬롯으로 남길 수 있다.
- Lazio의 Luis Alberto 14어시스트 및 Douglas Costa 12어시스트는 리그 보도/FBref 등의 정의로 확인되지만, 나머지 선수 123명의 어시스트를 한 기관·정의로 검증한 후 전원 칼럼 채우기 전까지 JSON 선수 스탯 필드는 null 유지.

## 9. 검증 상태와 남아 있는 자료 감사

- 참가 구단 실제 2018-19 UEFA 대회 확인: 7/7.
- 2017-18 BDFutbol 리그 실제 정규리그 양수 출전 선별: 123/123.
- 유일한 선수 ID 123, 주전 슬롯 각 팀 11명×7 = 77명, 후보 46명.
- 위 123명 모두 생년월일과 한국어/원어명 필드 기입. 그러나 123명 전원의 출생일을 서로 다른 두 독립 인명 자료와 일일이 대조하지는 않음.
- 기존 2015-16, 2016-17 **미승인 DRAFT** 선수 시즌 수치의 연결 119건. 독립 재검증 완료 건수가 아니다.
- 3개 시즌에 걸친 선수별 완전한 동포지션 독립 영상·경기력 감사 완료 **0/123**.
- 상위 56명의 개별 전술 영향·시즌 맥락 평가 이유는 각자 작성. 그 외 67명은 현재 출전/역할 기반 1차 사유 작성.
- 모든 선수의 정확한 시즌 최빈 경기 위치, 팀 전술 변형과 리그 전체 380경기 포메이션 최빈 빈도는 수작업 전수 감사 미완료.
- 2017-18 리그 도움 숫자는 123명 전체 'null', 검증 전 임의의 0 입력 금지.
- 본 단계는 GitHub 배포 완료 여부와 실브라우저 검증(별도 audit/SERIEA_2017-18_VALIDATION_RESULTS.md) 결과를 따로 관리한다.
- 사용자 검토와 승인은 아직 없으므로 DRAFT. 다음 시즌 자동 진행 금지.

## 10. 기록 출처(실제 선수 명단/UEFA/평가 맥락)

- juventus 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183004.html
- napoli 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183003.html
- roma 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183009.html
- inter 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183008.html
- lazio 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183018.html
- milan 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183015.html
- atalanta 2017-18 Serie A BDFutbol: https://www.bdfutbol.com/en/t/t2017-183017.html
- https://www.uefa.com/uefachampionsleague/history/seasons/2019/clubs/
- https://www.uefa.com/uefaeuropaleague/history/seasons/2019/clubs/
- https://www.uefa.com/news-media/news/0252-0f8e6d467114-cbab964fe094-1000--cfcb-adjudicatory-chamber-confirms-exclusion-of-ac-milan-/
- https://www.rsssf.org/tablesi/ital2018.html
- FBref 2017-18 세리에 A 골·도움 팀 통계: https://fbref.com/en/comps/11/2017-2018/stats/2017-2018-Serie-A-Stats
- 2017-18 개인 팀 오브 더 시즌 당시 스포츠매체: https://www.sport360.com/article/football/serie_a/282971/a-trio-of-juventus-and-inter-milan-players-make-our-201718-serie-a-team-of-the-season
- Sky Sport Italia 2017-18 찬스 창출 및 도움 비교: https://sport.sky.it/calcio/serie-a/2018/05/23/migliori-assist-man-serie-a-2017-2018
- EA Sports FIFA 18 2017-18 시즌 선정 명단(보조적 독립 맥락일 뿐 절대 기준 아님): https://www.easports.com/fifa/ultimate-team/news/2018/fifa-18-team-of-the-season-calcio-a

**상태: `draft_unapproved`. 차기 Serie A 2018-19 선수 평가 자동 시작 금지.**
