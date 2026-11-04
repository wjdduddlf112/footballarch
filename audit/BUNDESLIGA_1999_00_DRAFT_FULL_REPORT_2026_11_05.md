# Football Archive — Bundesliga 1999-00 전체 DRAFT 평가·검증 보고

작성일: 2026-11-05 (Asia/Seoul)

## 평가 범위와 신뢰 수준

- 대상: 1999-00 Bundesliga, 다음 시즌 2000-01 실제 유럽대항전 참가 9구단.
- 1999-00 활약 우선, 1998-99 다음, 1997-98 보조. 확인되지 않은 전년도 개인 수치는 생성하지 않았음.
- 저장 상태: `draft` / `proposed_unapproved`. 선수·티어·포지션·Best XI는 사용자 최종 승인 전 잠정 평가.
- **주의: 이는 종합 완료 보고서가 아니라 역사적 검증 부분 완료를 투명하게 보여 주는 DRAFT 평가 보고서임.** 출전 기록과 1999-00 선발 기록 일부는 독립 재확인되었으나, 선수별 이전 두 시즌·DOB 개별 원문·경기별 실제 주 포지션의 전수 검증은 아직 완료되지 않았다.
- 데이터 원본: `data/bundesliga-1999-00.json`. 기존 다른 시즌 데이터, 순위표, 웹 디자인은 유지.

## A. 다음 시즌 유럽대항전 출전 구단

| 1999-00 순위 | 구단 | 2000-01 대회 | 진출·참가 근거 | 판정 |
|---:|---|---|---|---|
| 1 | FC Bayern München | UCL | 1999-00 Bundesliga 1st; actual 2000-01 UCL entrant | 실제 참가 확인 |
| 2 | Bayer 04 Leverkusen | UCL | 1999-00 Bundesliga 2nd; actual 2000-01 UCL entrant | 실제 참가 확인 |
| 3 | Hamburger SV | UCL | 1999-00 Bundesliga 3rd; actual 2000-01 UCL qualifying entrant | 실제 참가 확인 |
| 4 | TSV 1860 München | UCL | 1999-00 Bundesliga 4th; actual 2000-01 UCL qualifying entrant | 실제 참가 확인 |
| 5 | 1.FC Kaiserslautern | UEFA Cup | 1999-00 Bundesliga 5th; actual 2000-01 UEFA Cup entrant | 실제 참가 확인 |
| 6 | Hertha BSC | UEFA Cup | 1999-00 Bundesliga 6th; actual 2000-01 UEFA Cup entrant | 실제 참가 확인 |
| 9 | SV Werder Bremen | UEFA Cup | DFB-Pokal finalist: cup winner Bayern UCL-qualified; actual 2000-01 UEFA Cup entrant | 실제 참가 확인 |
| 8 | VfB Stuttgart | Intertoto Cup, UEFA Cup | 2000 UEFA Intertoto Cup actual participant and winner; additionally qualified for 2000-01 UEFA Cup | 실제 참가 확인 |
| 7 | VfL Wolfsburg | Intertoto Cup | 2000 UEFA Intertoto Cup actual participant; semifinal versus Auxerre | 실제 참가 확인 |

참고: Bayern의 2000 DFB-Pokal 우승으로 Bremen의 컵 준우승 UEFA Cup 진출을 포함. Stuttgart와 Wolfsburg는 2000 Intertoto **실제 출전**을 확인하였고 Stuttgart는 우승 후 UEFA Cup에 진출.

유럽대항전 출전 근거: [RSSSF Bundesliga 1999-00](https://www.rsssf.org/tablesd/duit00.html), [RSSSF 2000 Intertoto](https://www.rsssf.org/tablesu/uic00.html), [2000 Intertoto results](https://en.wikipedia.org/wiki/2000_UEFA_Intertoto_Cup).

## B. 구단별 대표 전술과 후보 전체

1999-00 구단별 포메이션은 매 경기 고정된 단일 진형이 아니다. 윙백·리베로 등 현대 단순 포지션과 다른 역할은 `meta.clubTactics`, `originalTacticalRole`에 기록. 구단별 형태는 `provisional`이고 경기별 정량 사용 빈도는 미검증.

### FC Bayern München — 3-4-1-2
전술 메모: 3백·3-4-3 변형. 바벨 RCB/RB, 살리하미지치 우측 윙백 역할은 전술 기록에 따로 보존.
자료: [전술·출전 기록](https://www.transfermarkt.com/bayern-munich/spielplan/verein/27/saison_id/1999/plus/1) · [전술·출전 기록](https://fbref.com/en/squads/054efa67/1999-2000/c20/Bayern-Munich-Stats-Bundesliga)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 올리버 칸 | Oliver Kahn | FC Bayern München | 1969-06-15 | 주전 | 27 | 27 | S | 1 | DFB/개별 원문 확인 |
| GK | 베른트 드레어 | Bernd Dreher | FC Bayern München | 1966-11-02 | 후보 | 6 | — | C+ | 12 | 개별 출처 재확인 필요 |
| CB | 토마스 링케 | Thomas Linke | FC Bayern München | 1969-12-26 | 주전 | 27 | 26 | A0 | 4 | 개별 출처 재확인 필요 |
| CB | 사무엘 쿠포르 | Samuel Kuffour | FC Bayern München | 1976-09-03 | 주전 | 18 | 16 | A- | 6 | 개별 출처 재확인 필요 |
| CB | 파트리크 안데르손 | Patrik Andersson | FC Bayern München | 1971-08-18 | 후보 | 16 | — | B+ | 17 | 개별 출처 재확인 필요 |
| LB | 빅상트 리자라쥐 | Bixente Lizarazu | FC Bayern München | 1969-12-09 | 주전 | 22 | 20 | A+ | 1 | DFB/개별 원문 확인 |
| LB | 미하엘 타르나트 | Michael Tarnat | FC Bayern München | 1969-10-27 | 후보 | 26 | 19 | B+ | 2 | 개별 출처 재확인 필요 |
| RB | 마르쿠스 바벨 | Markus Babbel | FC Bayern München | 1972-09-08 | 주전 | 26 | 23 | A0 | 1 | 개별 출처 재확인 필요 |
| DM | 옌스 예레미스 | Jens Jeremies | FC Bayern München | 1974-03-05 | 주전 | 30 | 28 | A+ | 1 | DFB/개별 원문 확인 |
| DM | 토르스텐 핑크 | Thorsten Fink | FC Bayern München | 1967-10-29 | 후보 | 26 | 19 | B0 | 12 | 개별 출처 재확인 필요 |
| CM | 슈테판 에펜베르크 | Stefan Effenberg | FC Bayern München | 1968-08-02 | 주전 | 27 | 26 | S | 1 | DFB/개별 원문 확인 |
| CAM | 메메트 숄 | Mehmet Scholl | FC Bayern München | 1970-10-16 | 주전 | 25 | 18 | A0 | 2 | 개별 출처 재확인 필요 |
| RW | 하산 살리하미지치 | Hasan Salihamidžić | FC Bayern München | 1977-01-01 | 주전 | 30 | 27 | A- | 1 | 개별 출처 재확인 필요 |
| ST | 지오바니 에우베르 | Giovane Élber | FC Bayern München | 1972-07-23 | 주전 | 26 | 16 | A+ | 3 | DFB/개별 원문 확인 |
| ST | 파울루 세르지우 | Paulo Sérgio | FC Bayern München | 1969-06-02 | 주전 | 28 | 25 | A0 | 4 | 개별 출처 재확인 필요 |
| ST | 카르스텐 얀커 | Carsten Jancker | FC Bayern München | 1974-08-28 | 후보 | 23 | 20 | B+ | 12 | 개별 출처 재확인 필요 |


### Bayer 04 Leverkusen — 3-5-2
전술 메모: 라멜로우 수비형 미드필더/3백 커버, 측면에서 제 호베르투·슈나이더. 경기별 변형 가능.
자료: [전술·출전 기록](https://www.bayer04.de/de-de/page/historie/alle-spiele-alle-tore-bundesliga/saison-199900) · [전술·출전 기록](https://fbref.com/en/squads/c7a9f859/1999-2000/Leverkusen-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 아담 마티세크 | Adam Matysek | Bayer 04 Leverkusen | 1968-09-01 | 주전 | 29 | 29 | B+ | 6 | 개별 출처 재확인 필요 |
| GK | 프랭크 유리치 | Frank Juric | Bayer 04 Leverkusen | 1973-10-28 | 후보 | 4 | — | C0 | 14 | 개별 출처 재확인 필요 |
| CB | 옌스 노보트니 | Jens Nowotny | Bayer 04 Leverkusen | 1974-01-11 | 주전 | 33 | 33 | A+ | 1 | DFB/개별 원문 확인 |
| CB | 로베르트 코바치 | Robert Kovač | Bayer 04 Leverkusen | 1974-04-06 | 주전 | 27 | 27 | A0 | 3 | 개별 출처 재확인 필요 |
| CB | 보리스 지브코비치 | Boris Živković | Bayer 04 Leverkusen | 1975-11-15 | 후보 | 23 | 18 | B+ | 12 | 개별 출처 재확인 필요 |
| DM | 에메르송 | Emerson | Bayer 04 Leverkusen | 1976-04-04 | 주전 | 29 | 29 | A+ | 2 | DFB/개별 원문 확인 |
| DM | 카르스텐 라멜로 | Carsten Ramelow | Bayer 04 Leverkusen | 1974-03-20 | 주전 | 26 | 24 | A0 | 4 | 개별 출처 재확인 필요 |
| CM | 슈테판 바인리히 | Stefan Beinlich | Bayer 04 Leverkusen | 1972-01-13 | 주전 | 29 | 26 | A0 | 2 | 개별 출처 재확인 필요 |
| CM | 미하엘 발라크 | Michael Ballack | Bayer 04 Leverkusen | — | 주전 | 23 | 22 | B+ | 3 | 개별 출처 재확인 필요 |
| LW | 제 호베르투 | Zé Roberto | Bayer 04 Leverkusen | 1974-07-06 | 주전 | 27 | 26 | A0 | 2 | 개별 출처 재확인 필요 |
| RW | 베른트 슈나이더 | Bernd Schneider | Bayer 04 Leverkusen | — | 주전 | 32 | 20 | A- | 2 | 개별 출처 재확인 필요 |
| RW | 홉손 폰치 | Robson Ponte | Bayer 04 Leverkusen | — | 후보 | 24 | 11 | B0 | 7 | 개별 출처 재확인 필요 |
| ST | 울프 키르스텐 | Ulf Kirsten | Bayer 04 Leverkusen | 1965-12-04 | 주전 | 27 | 27 | A+ | 2 | DFB/개별 원문 확인 |
| ST | 올리버 뇌빌 | Oliver Neuville | Bayer 04 Leverkusen | — | 주전 | 33 | 31 | A0 | 10 | 개별 출처 재확인 필요 |
| ST | 파울루 링크 | Paulo Rink | Bayer 04 Leverkusen | 1973-02-21 | 후보 | 16 | 13 | A- | 11 | 개별 출처 확인 |


### Hamburger SV — 3-4-1-2
전술 메모: 3백·3-4-3 다이아몬드 변형. 마다비키아/홀러바흐 윙백, 카르도소 공격 2선.
자료: [전술·출전 기록](https://www.transfermarkt.com/hamburger-sv/spielplan/verein/41/saison_id/1999) · [전술·출전 기록](https://fbref.com/en/squads/26790c6a/1999-2000/Hamburger-SV-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 한스외르크 부트 | Hans-Jörg Butt | Hamburger SV | 1974-05-28 | 주전 | 34 | 34 | A+ | 2 | DFB/개별 원문 확인 |
| GK | 알렉산더 바데 | Alexander Bade | Hamburger SV | 1970-08-25 | 후보 | 1 | — | C- | 16 | 개별 출처 재확인 필요 |
| CB | 니코얀 호흐마 | Nico-Jan Hoogma | Hamburger SV | 1968-10-26 | 주전 | 31 | 31 | A0 | 2 | 개별 출처 재확인 필요 |
| CB | 잉고 헤르츠슈 | Ingo Hertzsch | Hamburger SV | 1977-07-22 | 주전 | 31 | 30 | B+ | 10 | 개별 출처 재확인 필요 |
| CB | 안드레이 파나디치 | Andrej Panadić | Hamburger SV | 1969-03-09 | 주전 | 29 | — | B+ | 13 | 개별 출처 재확인 필요 |
| LB | 베른트 홀러바흐 | Bernd Hollerbach | Hamburger SV | 1969-12-08 | 주전 | 21 | — | B0 | 6 | 개별 출처 재확인 필요 |
| RB | 메흐디 마다비키아 | Mehdi Mahdavikia | Hamburger SV | 1977-07-24 | 주전 | 29 | — | A- | 2 | 개별 출처 재확인 필요 |
| DM | 니코 코바치 | Niko Kovač | Hamburger SV | 1971-10-15 | 주전 | 30 | 30 | A- | 5 | 개별 출처 재확인 필요 |
| DM | 토마스 그라베센 | Thomas Gravesen | Hamburger SV | 1976-03-11 | 주전 | 26 | — | B+ | 10 | 개별 출처 재확인 필요 |
| CM | 파비안 에른스트 | Fabian Ernst | Hamburger SV | 1979-05-30 | 후보 | 19 | — | B0 | 14 | 개별 출처 재확인 필요 |
| CAM | 로돌포 카르도소 | Rodolfo Cardoso | Hamburger SV | 1968-10-17 | 주전 | 28 | — | B+ | 7 | 개별 출처 재확인 필요 |
| ST | 로이 프레거 | Roy Präger | Hamburger SV | 1971-09-22 | 주전 | 32 | 32 | A0 | 9 | 개별 출처 재확인 필요 |
| ST | 앤서니 예보아 | Anthony Yeboah | Hamburger SV | 1966-06-06 | 주전 | 24 | — | B+ | 16 | 개별 출처 재확인 필요 |


### TSV 1860 München — 3-5-2
전술 메모: 하슬러 중앙 플레이메이커, 체르니·보리미로프 측면, 파슬락 우측 수비/윙백.
자료: [전술·출전 기록](https://fbref.com/en/squads/2fbdf057/1999-2000/1860-Munich-Stats) · [전술·출전 기록](https://fbref.com/en/squads/2fbdf057/1999-2000/1860-Munich-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 다니엘 호프만 | Daniel Hoffmann | TSV 1860 München | — | 주전 | 33 | — | B+ | 7 | 개별 출처 재확인 필요 |
| GK | 미하엘 호프만 | Michael Hofmann | TSV 1860 München | — | 후보 | 2 | — | C0 | 15 | 개별 출처 재확인 필요 |
| CB | 마르코 쿠르츠 | Marco Kurz | TSV 1860 München | — | 주전 | 26 | — | B+ | 14 | 개별 출처 재확인 필요 |
| CB | 마르틴 슈트란츨 | Martin Stranzl | TSV 1860 München | — | 주전 | 22 | — | B0 | 22 | 개별 출처 재확인 필요 |
| CB | 홀거 그라일리히 | Holger Greilich | TSV 1860 München | — | 후보 | 20 | — | B0 | 24 | 개별 출처 재확인 필요 |
| RB | 슈테판 파슬라크 | Stephan Paßlack | TSV 1860 München | — | 주전 | 24 | — | B+ | 5 | 개별 출처 재확인 필요 |
| DM | 로만 티체 | Roman Týce | TSV 1860 München | — | 주전 | 25 | — | B+ | 11 | 개별 출처 재확인 필요 |
| CM | 필리프 타팔로비치 | Filip Tapalović | TSV 1860 München | — | 주전 | 22 | — | B0 | 12 | 개별 출처 재확인 필요 |
| CAM | 토마스 헤슬러 | Thomas Häßler | TSV 1860 München | — | 주전 | 33 | — | A0 | 3 | 개별 출처 재확인 필요 |
| LW | 다니엘 보리미로프 | Daniel Borimirow | TSV 1860 München | — | 주전 | 20 | — | B0 | 5 | 개별 출처 재확인 필요 |
| RW | 하랄트 체르니 | Harald Cerny | TSV 1860 München | — | 주전 | 32 | — | A- | 3 | 개별 출처 재확인 필요 |
| ST | 마르틴 막스 | Martin Max | TSV 1860 München | 1968-08-07 | 주전 | 32 | — | A+ | 1 | DFB 원문 확인 |
| ST | 베른하르트 빙클러 | Bernhard Winkler | TSV 1860 München | — | 주전 | 22 | — | B0 | 22 | 개별 출처 재확인 필요 |


### 1.FC Kaiserslautern — 3-5-2
전술 메모: 3백과 스포르차 후방 조율, 조르카예프 중앙 공격 2선.
자료: [전술·출전 기록](https://www.transfermarkt.com/1-fc-kaiserslautern/spielplan/verein/2/saison_id/1999) · [전술·출전 기록](https://fbref.com/en/squads/73a27a73/1999-2000/Kaiserslautern-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 안드레아스 라인케 | Andreas Reinke | 1.FC Kaiserslautern | — | 주전 | 18 | — | B0 | 9 | 개별 출처 재확인 필요 |
| GK | 게오르크 코흐 | Georg Koch | 1.FC Kaiserslautern | — | 후보 | 9 | — | C+ | 10 | 개별 출처 재확인 필요 |
| CB | 하리 코흐 | Harry Koch | 1.FC Kaiserslautern | — | 주전 | 30 | 29 | B+ | 7 | 개별 출처 재확인 필요 |
| CB | 제프 스트라서 | Jeff Strasser | 1.FC Kaiserslautern | 1974-10-05 | 주전 | 27 | 27 | B+ | 8 | 개별 출처 확인 |
| CB | 미하엘 쇤베르그 | Michael Schjønberg | 1.FC Kaiserslautern | — | 주전 | 32 | 32 | B+ | 9 | 개별 출처 재확인 필요 |
| DM | 치리아코 스포르차 | Ciriaco Sforza | 1.FC Kaiserslautern | — | 주전 | 27 | 27 | A0 | 3 | 개별 출처 재확인 필요 |
| CM | 안드레아스 부크 | Andreas Buck | 1.FC Kaiserslautern | — | 주전 | 26 | — | B0 | 11 | 개별 출처 재확인 필요 |
| CM | 마리안 흐리스토프 | Marian Hristov | 1.FC Kaiserslautern | — | 주전 | 22 | — | B0 | 13 | 개별 출처 재확인 필요 |
| CAM | 유리 조르카에프 | Youri Djorkaeff | 1.FC Kaiserslautern | — | 주전 | 25 | — | A0 | 1 | 개별 출처 재확인 필요 |
| RW | 마리오 바슬러 | Mario Basler | 1.FC Kaiserslautern | — | 주전 | 18 | — | B+ | 6 | 개별 출처 재확인 필요 |
| ST | 예르겐 페테르손 | Jörgen Pettersson | 1.FC Kaiserslautern | — | 주전 | 25 | — | B0 | 20 | 개별 출처 재확인 필요 |
| ST | 올라프 마르샬 | Olaf Marschall | 1.FC Kaiserslautern | — | 후보 | 25 | — | B0 | 21 | 개별 출처 재확인 필요 |
| ST | 이글리 타레 | Igli Tare | 1.FC Kaiserslautern | — | 주전 | 22 | — | B0 | 23 | 개별 출처 재확인 필요 |


### Hertha BSC — 3-5-2
전술 메모: 3백 기반, 보시 중앙 2선, 다이스러 측면·중앙 전환.
자료: [전술·출전 기록](https://www.transfermarkt.com/hertha-bsc/spielplan/verein/44/saison_id/1999) · [전술·출전 기록](https://fbref.com/en/squads/2818f8bc/1999-2000/Hertha-BSC-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 가보르 키라이 | Gábor Király | Hertha BSC | 1976-04-01 | 주전 | 27 | 27 | A0 | 3 | 개별 출처 재확인 필요 |
| GK | 크리스티안 피들러 | Christian Fiedler | Hertha BSC | 1975-03-27 | 후보 | 7 | — | C+ | 11 | 개별 출처 재확인 필요 |
| CB | 마르코 레머 | Marko Rehmer | Hertha BSC | 1972-04-29 | 주전 | 19 | 19 | B+ | 11 | 개별 출처 재확인 필요 |
| CB | 딕 판 뷔리크 | Dick van Burik | Hertha BSC | 1973-11-29 | 주전 | 25 | — | B+ | 15 | 개별 출처 재확인 필요 |
| RB | 헨드리크 헤르초크 | Hendrik Herzog | Hertha BSC | 1969-04-02 | 주전 | 20 | 15 | B0 | 6 | 개별 출처 재확인 필요 |
| DM | 에이욜푸르 스베리손 | Eyjólfur Sverrisson | Hertha BSC | 1968-08-03 | 주전 | 28 | 27 | B+ | 8 | 개별 출처 재확인 필요 |
| CM | 안드레아스 슈미트 | Andreas Schmidt | Hertha BSC | 1973-09-14 | 주전 | 32 | 27 | B+ | 6 | 개별 출처 재확인 필요 |
| CAM | 다리우시 보시 | Dariusz Wosz | Hertha BSC | 1969-06-08 | 주전 | 32 | 32 | A- | 6 | 개별 출처 재확인 필요 |
| LW | 미하엘 하르트만 | Michael Hartmann | Hertha BSC | 1974-07-11 | 주전 | 16 | 15 | B0 | 4 | 개별 출처 재확인 필요 |
| RW | 제바스티안 다이슬러 | Sebastian Deisler | Hertha BSC | 1980-01-05 | 주전 | 20 | 15 | B+ | 4 | 개별 출처 재확인 필요 |
| ST | 미하엘 프레츠 | Michael Preetz | Hertha BSC | 1967-08-17 | 주전 | 32 | 30 | A0 | 5 | 개별 출처 재확인 필요 |
| ST | 알렉스 아우베스 | Alex Alves | Hertha BSC | — | 후보 | 15 | 14 | B0 | 17 | 개별 출처 재확인 필요 |
| ST | 알리 다에이 | Ali Daei | Hertha BSC | 1969-03-21 | 주전 | 28 | 15 | B0 | 19 | 개별 출처 재확인 필요 |


### SV Werder Bremen — 4-4-2
전술 메모: 보데·프링스 측면, 아일통·피사로 투톱, 헤르초크 플레이메이커.
자료: [전술·출전 기록](https://www.transfermarkt.com/sv-werder-bremen/spielplan/verein/86/saison_id/1999) · [전술·출전 기록](https://fbref.com/en/squads/62add3bf/1999-2000/Werder-Bremen-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 프랑크 로스트 | Frank Rost | SV Werder Bremen | 1973-06-30 | 주전 | 34 | 34 | B+ | 5 | 개별 출처 재확인 필요 |
| CB | 프랑크 바우만 | Frank Baumann | SV Werder Bremen | 1975-10-29 | 주전 | 32 | 32 | A- | 5 | 개별 출처 재확인 필요 |
| CB | 베른하르트 트라레스 | Bernhard Trares | SV Werder Bremen | 1965-08-18 | 주전 | 20 | — | B0 | 23 | 개별 출처 재확인 필요 |
| RB | 안드레 비데너 | Andree Wiedener | SV Werder Bremen | 1970-03-14 | 주전 | 25 | — | B0 | 7 | 개별 출처 재확인 필요 |
| DM | 디터 아일츠 | Dieter Eilts | SV Werder Bremen | 1964-12-13 | 주전 | 29 | 28 | A- | 6 | 개별 출처 재확인 필요 |
| CM | 유리 막시모프 | Jurij Maximow | SV Werder Bremen | 1968-12-08 | 주전 | 29 | 15 | B0 | 8 | 개별 출처 재확인 필요 |
| CM | 크리스토프 다브로프스키 | Christoph Dabrowski | SV Werder Bremen | 1978-07-01 | 후보 | 28 | 10 | B0 | 10 | 개별 출처 재확인 필요 |
| CAM | 안드레아스 헤어초크 | Andreas Herzog | SV Werder Bremen | 1968-09-10 | 주전 | 27 | — | A0 | 5 | 개별 출처 재확인 필요 |
| LW | 마르코 보데 | Marco Bode | SV Werder Bremen | 1969-07-23 | 주전 | 27 | 27 | A0 | 1 | 개별 출처 재확인 필요 |
| RW | 토르스텐 프링스 | Torsten Frings | SV Werder Bremen | 1976-11-22 | 주전 | 33 | 31 | B+ | 5 | 개별 출처 재확인 필요 |
| ST | 아일통 | Aílton | SV Werder Bremen | 1973-07-19 | 주전 | 29 | — | A0 | 7 | 개별 출처 재확인 필요 |
| ST | 클라우디오 피사로 | Claudio Pizarro | SV Werder Bremen | 1978-10-03 | 주전 | 25 | — | B+ | 15 | 개별 출처 재확인 필요 |
| ST | 라데 보그다노비치 | Rade Bogdanović | SV Werder Bremen | — | 후보 | 22 | 10 | B0 | 18 | 개별 출처 재확인 필요 |


### VfB Stuttgart — 4-4-2
전술 메모: 당시 4-4-2 다이아몬드; 발라코프 CAM, 솔도 DM.
자료: [전술·출전 기록](https://www.transfermarkt.de/vfb-stuttgart/spielplan/verein/79/saison_id/1999/plus/1) · [전술·출전 기록](https://de.wikipedia.org/wiki/Kader_der_deutschen_Fu%C3%9Fball-Bundesliga_1999/2000)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 프란츠 볼파르트 | Franz Wohlfahrt | VfB Stuttgart | — | 주전 | 27 | — | B0 | 8 | 개별 출처 재확인 필요 |
| GK | 티모 힐데브란트 | Timo Hildebrand | VfB Stuttgart | — | 후보 | 6 | — | C+ | 13 | 개별 출처 재확인 필요 |
| CB | 마르셀루 보르동 | Marcelo Bordon | VfB Stuttgart | — | 주전 | 23 | — | B+ | 16 | 개별 출처 재확인 필요 |
| CB | 토마스 베르톨트 | Thomas Berthold | VfB Stuttgart | — | 주전 | 23 | — | B0 | 21 | 개별 출처 재확인 필요 |
| LB | 하이코 게르버 | Heiko Gerber | VfB Stuttgart | — | 주전 | 29 | — | B+ | 3 | 개별 출처 재확인 필요 |
| LB | 브래들리 카넬 | Bradley Carnell | VfB Stuttgart | — | 후보 | 24 | — | B0 | 5 | 개별 출처 재확인 필요 |
| RB | 옌스 켈러 | Jens Keller | VfB Stuttgart | — | 주전 | 24 | — | B0 | 8 | 개별 출처 재확인 필요 |
| DM | 즈보니미르 솔도 | Zvonimir Soldo | VfB Stuttgart | — | 주전 | 31 | — | A- | 7 | 개별 출처 재확인 필요 |
| DM | 파블로 티암 | Pablo Thiam | VfB Stuttgart | — | 후보 | 33 | — | B+ | 9 | 개별 출처 재확인 필요 |
| CM | 크리스티안 리스트슈 | Krisztián Lisztes | VfB Stuttgart | — | 주전 | 29 | — | B+ | 7 | 개별 출처 재확인 필요 |
| CAM | 크라시미르 발라코프 | Krassimir Balakow | VfB Stuttgart | — | 주전 | 30 | — | A0 | 4 | 개별 출처 재확인 필요 |
| RW | 호베르투 핀투 | Roberto Pinto | VfB Stuttgart | — | 주전 | 27 | — | B0 | 8 | 개별 출처 재확인 필요 |
| ST | 이오안 비오렐 가네아 | Ioan Viorel Ganea | VfB Stuttgart | — | 주전 | 29 | — | B+ | 13 | 개별 출처 재확인 필요 |
| ST | 숀 던디 | Sean Dundee | VfB Stuttgart | — | 주전 | 28 | — | B+ | 14 | 개별 출처 재확인 필요 |
| ST | 파벨 쿠카 | Pavel Kuka | VfB Stuttgart | — | 후보 | 20 | — | B0 | 24 | 개별 출처 재확인 필요 |


### VfL Wolfsburg — 3-5-2
전술 메모: 3백·윙백과 유스코비아크-악포보리에 투톱. 전술형태 경기별 변동.
자료: [전술·출전 기록](https://datencenter.dfb.de/datencenter/bundesliga/1999-2000/27-spieltag/vfl-wolfsburg-bayern-muenchen-177189) · [전술·출전 기록](https://fbref.com/en/squads/4eaa11d7/1999-2000/Wolfsburg-Stats)

| POS | 한글 이름 | Original name | 당시 구단 | 생년월일 | 구분 | 리그 출전 | 선발 | 잠정 티어 | 해당 포지션 순위 | DOB 확인 |
|---|---|---|---|---|---|---:|---:|---|---:|---|
| GK | 클라우스 라이트마이어 | Claus Reitmaier | VfL Wolfsburg | 1964-03-17 | 주전 | 34 | 34 | B+ | 4 | 개별 출처 재확인 필요 |
| CB | 클라우스 톰센 | Claus Thomsen | VfL Wolfsburg | 1970-05-31 | 주전 | 24 | 24 | B0 | 18 | 개별 출처 재확인 필요 |
| CB | 마리노 빌리슈코프 | Marino Biliškov | VfL Wolfsburg | 1976-03-17 | 주전 | 20 | 19 | B0 | 19 | 개별 출처 재확인 필요 |
| CB | 마르셀 말트리츠 | Marcel Maltritz | VfL Wolfsburg | — | 후보 | 23 | 11 | B0 | 20 | 개별 출처 재확인 필요 |
| LB | 발데마르 크리거 | Waldemar Kryger | VfL Wolfsburg | 1968-11-08 | 주전 | 31 | 31 | B0 | 4 | 개별 출처 재확인 필요 |
| RB | 졸탄 제베첸 | Zoltan Sebescen | VfL Wolfsburg | — | 후보 | 17 | 13 | B+ | 3 | 개별 출처 재확인 필요 |
| RB | 파트리크 바이저 | Patrick Weiser | VfL Wolfsburg | — | 주전 | 33 | 33 | B+ | 4 | 개별 출처 재확인 필요 |
| DM | 찰스 아코너 | Charles Akonnor | VfL Wolfsburg | — | 주전 | 25 | 17 | B0 | 13 | 개별 출처 재확인 필요 |
| CM | 크시슈토프 노바크 | Krzysztof Nowak | VfL Wolfsburg | — | 주전 | 33 | 32 | B+ | 4 | 개별 출처 재확인 필요 |
| CM | 프랑크 그라이너 | Frank Greiner | VfL Wolfsburg | — | 주전 | 29 | 28 | B+ | 5 | 개별 출처 재확인 필요 |
| CM | 브라이언 오닐 | Brian O'Neil | VfL Wolfsburg | 1972-09-06 | 후보 | 16 | 15 | B0 | 9 | 개별 출처 재확인 필요 |
| LW | 도리넬 문테아누 | Dorinel Munteanu | VfL Wolfsburg | — | 주전 | 22 | 22 | A- | 3 | 개별 출처 재확인 필요 |
| ST | 조너선 악포보리에 | Jonathan Akpoborie | VfL Wolfsburg | 1968-10-20 | 주전 | 19 | 17 | A0 | 6 | 개별 출처 확인 |
| ST | 안제이 유스코비아크 | Andrzej Juskowiak | VfL Wolfsburg | — | 주전 | 32 | 30 | A0 | 8 | 개별 출처 재확인 필요 |
| ST | 위르겐 리셰 | Jürgen Rische | VfL Wolfsburg | — | 후보 | 11 | 7 | C+ | 25 | 개별 출처 재확인 필요 |


## C. 포지션별 리그 통합 순위

순위는 시즌·리그·포지션 내부에서만 유효. 동률 티어의 순서는 기록·경기력·정성 비교에 의한 **잠정** 순위이고, 시작 경기 횟수가 없는 선수를 임의의 확정 정량 순위로 해석하지 말 것.

### GK

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 올리버 칸 (Oliver Kahn) | FC Bayern München | S | 27 | 27 |
| 2 | 한스외르크 부트 (Hans-Jörg Butt) | Hamburger SV | A+ | 34 | 34 |
| 3 | 가보르 키라이 (Gábor Király) | Hertha BSC | A0 | 27 | 27 |
| 4 | 클라우스 라이트마이어 (Claus Reitmaier) | VfL Wolfsburg | B+ | 34 | 34 |
| 5 | 프랑크 로스트 (Frank Rost) | SV Werder Bremen | B+ | 34 | 34 |
| 6 | 아담 마티세크 (Adam Matysek) | Bayer 04 Leverkusen | B+ | 29 | 29 |
| 7 | 다니엘 호프만 (Daniel Hoffmann) | TSV 1860 München | B+ | 33 | — |
| 8 | 프란츠 볼파르트 (Franz Wohlfahrt) | VfB Stuttgart | B0 | 27 | — |
| 9 | 안드레아스 라인케 (Andreas Reinke) | 1.FC Kaiserslautern | B0 | 18 | — |
| 10 | 게오르크 코흐 (Georg Koch) | 1.FC Kaiserslautern | C+ | 9 | — |
| 11 | 크리스티안 피들러 (Christian Fiedler) | Hertha BSC | C+ | 7 | — |
| 12 | 베른트 드레어 (Bernd Dreher) | FC Bayern München | C+ | 6 | — |
| 13 | 티모 힐데브란트 (Timo Hildebrand) | VfB Stuttgart | C+ | 6 | — |
| 14 | 프랭크 유리치 (Frank Juric) | Bayer 04 Leverkusen | C0 | 4 | — |
| 15 | 미하엘 호프만 (Michael Hofmann) | TSV 1860 München | C0 | 2 | — |
| 16 | 알렉산더 바데 (Alexander Bade) | Hamburger SV | C- | 1 | — |

### CB

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 옌스 노보트니 (Jens Nowotny) | Bayer 04 Leverkusen | A+ | 33 | 33 |
| 2 | 니코얀 호흐마 (Nico-Jan Hoogma) | Hamburger SV | A0 | 31 | 31 |
| 3 | 로베르트 코바치 (Robert Kovač) | Bayer 04 Leverkusen | A0 | 27 | 27 |
| 4 | 토마스 링케 (Thomas Linke) | FC Bayern München | A0 | 27 | 26 |
| 5 | 프랑크 바우만 (Frank Baumann) | SV Werder Bremen | A- | 32 | 32 |
| 6 | 사무엘 쿠포르 (Samuel Kuffour) | FC Bayern München | A- | 18 | 16 |
| 7 | 하리 코흐 (Harry Koch) | 1.FC Kaiserslautern | B+ | 30 | 29 |
| 8 | 제프 스트라서 (Jeff Strasser) | 1.FC Kaiserslautern | B+ | 27 | 27 |
| 9 | 미하엘 쇤베르그 (Michael Schjønberg) | 1.FC Kaiserslautern | B+ | 32 | 32 |
| 10 | 잉고 헤르츠슈 (Ingo Hertzsch) | Hamburger SV | B+ | 31 | 30 |
| 11 | 마르코 레머 (Marko Rehmer) | Hertha BSC | B+ | 19 | 19 |
| 12 | 보리스 지브코비치 (Boris Živković) | Bayer 04 Leverkusen | B+ | 23 | 18 |
| 13 | 안드레이 파나디치 (Andrej Panadić) | Hamburger SV | B+ | 29 | — |
| 14 | 마르코 쿠르츠 (Marco Kurz) | TSV 1860 München | B+ | 26 | — |
| 15 | 딕 판 뷔리크 (Dick van Burik) | Hertha BSC | B+ | 25 | — |
| 16 | 마르셀루 보르동 (Marcelo Bordon) | VfB Stuttgart | B+ | 23 | — |
| 17 | 파트리크 안데르손 (Patrik Andersson) | FC Bayern München | B+ | 16 | — |
| 18 | 클라우스 톰센 (Claus Thomsen) | VfL Wolfsburg | B0 | 24 | 24 |
| 19 | 마리노 빌리슈코프 (Marino Biliškov) | VfL Wolfsburg | B0 | 20 | 19 |
| 20 | 마르셀 말트리츠 (Marcel Maltritz) | VfL Wolfsburg | B0 | 23 | 11 |
| 21 | 토마스 베르톨트 (Thomas Berthold) | VfB Stuttgart | B0 | 23 | — |
| 22 | 마르틴 슈트란츨 (Martin Stranzl) | TSV 1860 München | B0 | 22 | — |
| 23 | 베른하르트 트라레스 (Bernhard Trares) | SV Werder Bremen | B0 | 20 | — |
| 24 | 홀거 그라일리히 (Holger Greilich) | TSV 1860 München | B0 | 20 | — |

### LB

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 빅상트 리자라쥐 (Bixente Lizarazu) | FC Bayern München | A+ | 22 | 20 |
| 2 | 미하엘 타르나트 (Michael Tarnat) | FC Bayern München | B+ | 26 | 19 |
| 3 | 하이코 게르버 (Heiko Gerber) | VfB Stuttgart | B+ | 29 | — |
| 4 | 발데마르 크리거 (Waldemar Kryger) | VfL Wolfsburg | B0 | 31 | 31 |
| 5 | 브래들리 카넬 (Bradley Carnell) | VfB Stuttgart | B0 | 24 | — |
| 6 | 베른트 홀러바흐 (Bernd Hollerbach) | Hamburger SV | B0 | 21 | — |

### RB

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 마르쿠스 바벨 (Markus Babbel) | FC Bayern München | A0 | 26 | 23 |
| 2 | 메흐디 마다비키아 (Mehdi Mahdavikia) | Hamburger SV | A- | 29 | — |
| 3 | 졸탄 제베첸 (Zoltan Sebescen) | VfL Wolfsburg | B+ | 17 | 13 |
| 4 | 파트리크 바이저 (Patrick Weiser) | VfL Wolfsburg | B+ | 33 | 33 |
| 5 | 슈테판 파슬라크 (Stephan Paßlack) | TSV 1860 München | B+ | 24 | — |
| 6 | 헨드리크 헤르초크 (Hendrik Herzog) | Hertha BSC | B0 | 20 | 15 |
| 7 | 안드레 비데너 (Andree Wiedener) | SV Werder Bremen | B0 | 25 | — |
| 8 | 옌스 켈러 (Jens Keller) | VfB Stuttgart | B0 | 24 | — |

### DM

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 옌스 예레미스 (Jens Jeremies) | FC Bayern München | A+ | 30 | 28 |
| 2 | 에메르송 (Emerson) | Bayer 04 Leverkusen | A+ | 29 | 29 |
| 3 | 치리아코 스포르차 (Ciriaco Sforza) | 1.FC Kaiserslautern | A0 | 27 | 27 |
| 4 | 카르스텐 라멜로 (Carsten Ramelow) | Bayer 04 Leverkusen | A0 | 26 | 24 |
| 5 | 니코 코바치 (Niko Kovač) | Hamburger SV | A- | 30 | 30 |
| 6 | 디터 아일츠 (Dieter Eilts) | SV Werder Bremen | A- | 29 | 28 |
| 7 | 즈보니미르 솔도 (Zvonimir Soldo) | VfB Stuttgart | A- | 31 | — |
| 8 | 에이욜푸르 스베리손 (Eyjólfur Sverrisson) | Hertha BSC | B+ | 28 | 27 |
| 9 | 파블로 티암 (Pablo Thiam) | VfB Stuttgart | B+ | 33 | — |
| 10 | 토마스 그라베센 (Thomas Gravesen) | Hamburger SV | B+ | 26 | — |
| 11 | 로만 티체 (Roman Týce) | TSV 1860 München | B+ | 25 | — |
| 12 | 토르스텐 핑크 (Thorsten Fink) | FC Bayern München | B0 | 26 | 19 |
| 13 | 찰스 아코너 (Charles Akonnor) | VfL Wolfsburg | B0 | 25 | 17 |

### CM

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 슈테판 에펜베르크 (Stefan Effenberg) | FC Bayern München | S | 27 | 26 |
| 2 | 슈테판 바인리히 (Stefan Beinlich) | Bayer 04 Leverkusen | A0 | 29 | 26 |
| 3 | 미하엘 발라크 (Michael Ballack) | Bayer 04 Leverkusen | B+ | 23 | 22 |
| 4 | 크시슈토프 노바크 (Krzysztof Nowak) | VfL Wolfsburg | B+ | 33 | 32 |
| 5 | 프랑크 그라이너 (Frank Greiner) | VfL Wolfsburg | B+ | 29 | 28 |
| 6 | 안드레아스 슈미트 (Andreas Schmidt) | Hertha BSC | B+ | 32 | 27 |
| 7 | 크리스티안 리스트슈 (Krisztián Lisztes) | VfB Stuttgart | B+ | 29 | — |
| 8 | 유리 막시모프 (Jurij Maximow) | SV Werder Bremen | B0 | 29 | 15 |
| 9 | 브라이언 오닐 (Brian O'Neil) | VfL Wolfsburg | B0 | 16 | 15 |
| 10 | 크리스토프 다브로프스키 (Christoph Dabrowski) | SV Werder Bremen | B0 | 28 | 10 |
| 11 | 안드레아스 부크 (Andreas Buck) | 1.FC Kaiserslautern | B0 | 26 | — |
| 12 | 필리프 타팔로비치 (Filip Tapalović) | TSV 1860 München | B0 | 22 | — |
| 13 | 마리안 흐리스토프 (Marian Hristov) | 1.FC Kaiserslautern | B0 | 22 | — |
| 14 | 파비안 에른스트 (Fabian Ernst) | Hamburger SV | B0 | 19 | — |

### CAM

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 유리 조르카에프 (Youri Djorkaeff) | 1.FC Kaiserslautern | A0 | 25 | — |
| 2 | 메메트 숄 (Mehmet Scholl) | FC Bayern München | A0 | 25 | 18 |
| 3 | 토마스 헤슬러 (Thomas Häßler) | TSV 1860 München | A0 | 33 | — |
| 4 | 크라시미르 발라코프 (Krassimir Balakow) | VfB Stuttgart | A0 | 30 | — |
| 5 | 안드레아스 헤어초크 (Andreas Herzog) | SV Werder Bremen | A0 | 27 | — |
| 6 | 다리우시 보시 (Dariusz Wosz) | Hertha BSC | A- | 32 | 32 |
| 7 | 로돌포 카르도소 (Rodolfo Cardoso) | Hamburger SV | B+ | 28 | — |

### LW

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 마르코 보데 (Marco Bode) | SV Werder Bremen | A0 | 27 | 27 |
| 2 | 제 호베르투 (Zé Roberto) | Bayer 04 Leverkusen | A0 | 27 | 26 |
| 3 | 도리넬 문테아누 (Dorinel Munteanu) | VfL Wolfsburg | A- | 22 | 22 |
| 4 | 미하엘 하르트만 (Michael Hartmann) | Hertha BSC | B0 | 16 | 15 |
| 5 | 다니엘 보리미로프 (Daniel Borimirow) | TSV 1860 München | B0 | 20 | — |

### RW

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 하산 살리하미지치 (Hasan Salihamidžić) | FC Bayern München | A- | 30 | 27 |
| 2 | 베른트 슈나이더 (Bernd Schneider) | Bayer 04 Leverkusen | A- | 32 | 20 |
| 3 | 하랄트 체르니 (Harald Cerny) | TSV 1860 München | A- | 32 | — |
| 4 | 제바스티안 다이슬러 (Sebastian Deisler) | Hertha BSC | B+ | 20 | 15 |
| 5 | 토르스텐 프링스 (Torsten Frings) | SV Werder Bremen | B+ | 33 | 31 |
| 6 | 마리오 바슬러 (Mario Basler) | 1.FC Kaiserslautern | B+ | 18 | — |
| 7 | 홉손 폰치 (Robson Ponte) | Bayer 04 Leverkusen | B0 | 24 | 11 |
| 8 | 호베르투 핀투 (Roberto Pinto) | VfB Stuttgart | B0 | 27 | — |

### ST

| 순위 | 선수 | 구단 | 티어 | 출전 | 선발 |
|---:|---|---|---|---:|---:|
| 1 | 마르틴 막스 (Martin Max) | TSV 1860 München | A+ | 32 | — |
| 2 | 울프 키르스텐 (Ulf Kirsten) | Bayer 04 Leverkusen | A+ | 27 | 27 |
| 3 | 지오바니 에우베르 (Giovane Élber) | FC Bayern München | A+ | 26 | 16 |
| 4 | 파울루 세르지우 (Paulo Sérgio) | FC Bayern München | A0 | 28 | 25 |
| 5 | 미하엘 프레츠 (Michael Preetz) | Hertha BSC | A0 | 32 | 30 |
| 6 | 조너선 악포보리에 (Jonathan Akpoborie) | VfL Wolfsburg | A0 | 19 | 17 |
| 7 | 아일통 (Aílton) | SV Werder Bremen | A0 | 29 | — |
| 8 | 안제이 유스코비아크 (Andrzej Juskowiak) | VfL Wolfsburg | A0 | 32 | 30 |
| 9 | 로이 프레거 (Roy Präger) | Hamburger SV | A0 | 32 | 32 |
| 10 | 올리버 뇌빌 (Oliver Neuville) | Bayer 04 Leverkusen | A0 | 33 | 31 |
| 11 | 파울루 링크 (Paulo Rink) | Bayer 04 Leverkusen | A- | 16 | 13 |
| 12 | 카르스텐 얀커 (Carsten Jancker) | FC Bayern München | B+ | 23 | 20 |
| 13 | 이오안 비오렐 가네아 (Ioan Viorel Ganea) | VfB Stuttgart | B+ | 29 | — |
| 14 | 숀 던디 (Sean Dundee) | VfB Stuttgart | B+ | 28 | — |
| 15 | 클라우디오 피사로 (Claudio Pizarro) | SV Werder Bremen | B+ | 25 | — |
| 16 | 앤서니 예보아 (Anthony Yeboah) | Hamburger SV | B+ | 24 | — |
| 17 | 알렉스 아우베스 (Alex Alves) | Hertha BSC | B0 | 15 | 14 |
| 18 | 라데 보그다노비치 (Rade Bogdanović) | SV Werder Bremen | B0 | 22 | 10 |
| 19 | 알리 다에이 (Ali Daei) | Hertha BSC | B0 | 28 | 15 |
| 20 | 예르겐 페테르손 (Jörgen Pettersson) | 1.FC Kaiserslautern | B0 | 25 | — |
| 21 | 올라프 마르샬 (Olaf Marschall) | 1.FC Kaiserslautern | B0 | 25 | — |
| 22 | 베른하르트 빙클러 (Bernhard Winkler) | TSV 1860 München | B0 | 22 | — |
| 23 | 이글리 타레 (Igli Tare) | 1.FC Kaiserslautern | B0 | 22 | — |
| 24 | 파벨 쿠카 (Pavel Kuka) | VfB Stuttgart | B0 | 20 | — |
| 25 | 위르겐 리셰 (Jürgen Rische) | VfL Wolfsburg | C+ | 11 | 7 |

## D. World Class 및 League Top Class

- World Class = S + A+
- League Top Class = S + A+ + A0 + A-

- World Class: **10명**
- League Top Class: **44명**

### S — 2명

올리버 칸 (GK, FC Bayern München) · 슈테판 에펜베르크 (CM, FC Bayern München)

### A+ — 8명

한스외르크 부트 (GK, Hamburger SV) · 옌스 노보트니 (CB, Bayer 04 Leverkusen) · 빅상트 리자라쥐 (LB, FC Bayern München) · 옌스 예레미스 (DM, FC Bayern München) · 에메르송 (DM, Bayer 04 Leverkusen) · 마르틴 막스 (ST, TSV 1860 München) · 울프 키르스텐 (ST, Bayer 04 Leverkusen) · 지오바니 에우베르 (ST, FC Bayern München)

### A0 — 22명

가보르 키라이 (GK, Hertha BSC) · 니코얀 호흐마 (CB, Hamburger SV) · 로베르트 코바치 (CB, Bayer 04 Leverkusen) · 토마스 링케 (CB, FC Bayern München) · 마르쿠스 바벨 (RB, FC Bayern München) · 치리아코 스포르차 (DM, 1.FC Kaiserslautern) · 카르스텐 라멜로 (DM, Bayer 04 Leverkusen) · 슈테판 바인리히 (CM, Bayer 04 Leverkusen) · 유리 조르카에프 (CAM, 1.FC Kaiserslautern) · 메메트 숄 (CAM, FC Bayern München) · 토마스 헤슬러 (CAM, TSV 1860 München) · 크라시미르 발라코프 (CAM, VfB Stuttgart) · 안드레아스 헤어초크 (CAM, SV Werder Bremen) · 마르코 보데 (LW, SV Werder Bremen) · 제 호베르투 (LW, Bayer 04 Leverkusen) · 파울루 세르지우 (ST, FC Bayern München) · 미하엘 프레츠 (ST, Hertha BSC) · 조너선 악포보리에 (ST, VfL Wolfsburg) · 아일통 (ST, SV Werder Bremen) · 안제이 유스코비아크 (ST, VfL Wolfsburg) · 로이 프레거 (ST, Hamburger SV) · 올리버 뇌빌 (ST, Bayer 04 Leverkusen)

### A- — 12명

프랑크 바우만 (CB, SV Werder Bremen) · 사무엘 쿠포르 (CB, FC Bayern München) · 메흐디 마다비키아 (RB, Hamburger SV) · 니코 코바치 (DM, Hamburger SV) · 디터 아일츠 (DM, SV Werder Bremen) · 즈보니미르 솔도 (DM, VfB Stuttgart) · 다리우시 보시 (CAM, Hertha BSC) · 도리넬 문테아누 (LW, VfL Wolfsburg) · 하산 살리하미지치 (RW, FC Bayern München) · 베른트 슈나이더 (RW, Bayer 04 Leverkusen) · 하랄트 체르니 (RW, TSV 1860 München) · 파울루 링크 (ST, Bayer 04 Leverkusen)

## E. Best XI — 3-4-1-2 (3-5-2 계열)

이 포메이션은 당시의 3백·윙백 구조를 대표하기 위한 잠정 선택으로서, 분데스리가 모든 경기의 전술 사용 횟수를 집계한 확정 최빈 포메이션이 아니다.

| 전술 위치 | 선수 | 구단 | 주 포지션 | 티어 | 근거 | 경합자 |
|---|---|---|---|---|---|---|
| GK | 올리버 칸 | FC Bayern München | GK | S | 선방과 수비 조율, 당시 개인 기량의 지속성을 종합. | Hans-Jörg Butt |
| CB | 옌스 노보트니 | Bayer 04 Leverkusen | CB | A+ | 33회 선발, 수비 조직의 핵심 역할. | Thomas Linke |
| CB | 토마스 링케 | FC Bayern München | CB | A0 | 26회 선발, 3백 중심 안정성과 대인 수비. | Nico-Jan Hoogma |
| CB | 로베르트 코바치 | Bayer 04 Leverkusen | CB | A0 | 27회 선발, 지속적인 중앙 수비 기여. | Nico-Jan Hoogma |
| LWB | 빅상트 리자라쥐 | FC Bayern München | LB | A+ | 당시 3백 구조에서 좌측 윙백의 전술 적합성. | Zé Roberto |
| RWB | 마르쿠스 바벨 | FC Bayern München | RB | A0 | 우측 수비 안정성과 RCB/RWB 복합 기용의 전술 적합성. | Mehdi Mahdavikia, Patrick Weiser |
| DM | 옌스 예레미스 | FC Bayern München | DM | A+ | 28회 선발, 수비 전환·중원 압박·커버 기여. | Emerson |
| CM | 슈테판 에펜베르크 | FC Bayern München | CM | S | 26회 선발·12도움, 경기 조율과 찬스 창출. | Emerson |
| CAM | 유리 조르카에프 | 1.FC Kaiserslautern | CAM | A0 | 25경기 11골, 공격 2선의 득점·연계 기여. | Thomas Häßler, Andreas Herzog |
| ST | 마르틴 막스 | TSV 1860 München | ST | A+ | 19골 득점왕의 1999-00 개인 생산성. | Giovane Élber |
| ST | 울프 키르스텐 | Bayer 04 Leverkusen | ST | A+ | 27회 선발·17골, 꾸준한 득점 기여. | Giovane Élber |

Best XI 상태: `proposed_unapproved` · 사용자 최종 검수 전.

## F. 기초 검증과 미검증 사항

| 항목 | 결과 |
|---|---:|
| 실제 유럽대항전 참가 대상 구단 | 9 |
| 평가 선수 수 | 126 |
| 대표 주전 수 | 99 |
| 후보·로테이션 수 | 27 |
| 리그 출전 값 기록 인원 | 126 |
| 개별 선발 수치 독립 대조 인원 | 62 |
| 생년월일 기재 인원 | 72 |
| 생년월일 이번 작업 개별 출처 확인 인원 | 13 |
| GK 주 포지션 확인 인원 | 16 |
| 경기별 좌우·주포지션 전수 확인 | 0 (미실시) |
| 3시즌 개인 기록을 명시적으로 연계 확인한 인원 | 11 (DFB 출전·득점 범위) |
| 잠정 티어 입력 인원 | 126 |
| 티어 null | 0 |
| 포지션별 순위 입력 | 126 |
| Best XI 선정 | 11 / 11 |
| World Class | 10 |
| League Top Class | 44 |

**검증 상태 구분:** 1999-00 출전/선발 수치 확인과 세 시즌 개인 기록·DOB·주포지션의 완전한 검증은 별개. 구조 검사를 통과해도 나머지 항목을 verified로 일괄 전환하지 않는다.

### 실제 수정 사항

1. 선수 후보 누락 9명 신규 추가: Paulo Rink, Jeff Strasser, Olaf Marschall, Alex Alves, Rade Bogdanović, Pavel Kuka, Jonathan Akpoborie, Marcel Maltritz, Jürgen Rische.
2. 포지션 최대 3CB 제한으로 Hany Ramzy를 현재 후보 3명에서 제외. 실생활에서 부적격 선수라는 뜻이 아님. 동료 후보들과의 비교가 필요한 논쟁적 슬롯.
3. 주요 CAM 재분류: Mehmet Scholl, Youri Djorkaeff, Thomas Häßler, Dariusz Wosz, Andreas Herzog, Rodolfo Cardoso, Krassimir Balakow.
4. Jens Keller RB, Brian O'Neil CM 등 실제 역할을 반영한 **잠정** 배정. 출전 경기별 세부 역할 근거의 완전한 검증은 미완료.
5. Bayer Leverkusen의 Oliver Neuville 31회 선발, HSV Ingo Hertzsch 30회 선발은 주전으로 재분류. Werder Christoph Dabrowski는 28경기 출전 중 10회 선발로 백업·로테이션 분류.
6. 바이언 Roque Santa Cruz(28경기)와 레버쿠젠 Thomas Brdarić(24경기)는 ST 후보 상한에서 제외된 경합자로 추후 심화 검수 필수.

### 역사적 검증 미완료

- 대다수 선수의 1997-98 및 1998-99 **선수별** 비교 자료·가중 정성 평가의 추가 근거 필요.
- 선수 중 54명은 생년월일 값이 없고, 생년월일 기재 72명 중 59명도 개별 원문 출처 검증 대기.
- GK 이외 선수 상당수의 우측/좌측·윙백·리베로 등 경기별 실제 주 포지션을 완전히 검증하지 못함.
- 대표 포메이션 3-4-1-2가 리그 전체 경기에서 엄밀하게 가장 높은 비중이었는지는 미확인.
- 참고 선수의 실제 출전은 리그 출전값·구단 기록 기준이며, 리그 일부 경기 선발과 컵대회 관련 독립 원자료 추가 검증 필요.
- 우승·리그 순위는 직접 티어 보너스가 아니며 S/A+ 등 상위 선수라도 사용자 최종 승인은 미완료.

## 근거 자료

- [DFB 1999-00 득점 기록](https://datencenter.dfb.de/en/competitions/bundesliga/seasons/1999-2000/top_scorer?datacenter_name=data-center)
- [1999-00 Bundesliga 선수별 출전·선발·공격 지표 (FBref)](https://fbref.com/en/comps/20/1999-2000/stats/1999-2000-Bundesliga-Stats)
- [Jonathan Akpoborie 3시즌 DFB 기록](https://datencenter.dfb.de/en/data-center/people/jonathan-akpoborie/player)
- [Bundesliga 1999-00 RSSSF](https://www.rsssf.org/tablesd/duit00.html)
- [UEFA Intertoto 2000 RSSSF](https://www.rsssf.org/tablesu/uic00.html)

## 추가 역사 자료 심화 검증 — DFB 공식 3시즌 리그 출전·득점

이번 작업 후속 검증으로 독일축구협회(DFB) 데이터센터에서 1997-98, 1998-99, 1999-00 **리그 출전·득점과 생년월일**을 직접 확인한 선수 범위를 확대하였다. 이 기록은 정량적 사실을 뒷받침하지만 세 시즌의 전체 전술·개인 영향력을 완전 검증했다는 뜻은 아니다.

| 선수 (원어명) | 1997-98 출전/골 | 1998-99 출전/골 | 1999-00 출전/골 | 공식 선수 기록 |
|---|---:|---:|---:|---|
| Bixente Lizarazu | 19경기/0골 | 19경기/2골 | 22경기/1골 | [DFB](https://datencenter.dfb.de/en/data-center/people/bixente-lizarazu/player) |
| Emerson | 25경기/1골 | 28경기/5골 | 29경기/5골 | [DFB](https://datencenter.dfb.de/en/data-center/people/emerson/player) |
| Giovane Élber | 28경기/11골 | 21경기/13골 | 26경기/14골 | [DFB](https://datencenter.dfb.de/en/people/giovane-elber/player/matches-in-season/bundesliga/1997-1998/bayern-munich) |
| Hans-Jörg Butt | 33경기/0골 | 34경기/7골 | 34경기/9골 | [DFB](https://datencenter.dfb.de/en/people/hans-jorg-butt/player) |
| Jens Jeremies | 22경기/0골 | 30경기/1골 | 30경기/3골 | [DFB](https://datencenter.dfb.de/en/data-center/people/jens-jeremies/player) |
| Jens Nowotny | 23경기/0골 | 33경기/1골 | 33경기/1골 | [DFB](https://datencenter.dfb.de/datencenter/personen/jens-nowotny/spieler) |
| Jonathan Akpoborie | 30경기/10골 | 28경기/11골 | 19경기/12골 | [DFB](https://datencenter.dfb.de/en/data-center/people/jonathan-akpoborie/player) |
| Martin Max | 19경기/4골 | 28경기/6골 | 32경기/19골 | [DFB](https://datencenter.dfb.de/datencenter/personen/martin-max/spieler) |
| Oliver Kahn | 34경기/0골 | 30경기/0골 | 27경기/0골 | [DFB](https://datencenter.dfb.de/en/people/oliver-kahn/player) |
| Stefan Effenberg | 28경기/8골 | 31경기/8골 | 27경기/2골 | [DFB](https://datencenter.dfb.de/en/people/stefan-effenberg/player) |
| Ulf Kirsten | 27경기/22골 | 31경기/19골 | 27경기/17골 | [DFB](https://datencenter.dfb.de/en/people/3158/player) |

- 3시즌 DFB 개인 리그 출전·득점 직접 확인: **11/126명**.
- 생년월일 개별 확인 출처 연결: **13/126명**.
- 나머지 **115명**의 3시즌 개인 실적과 일부 선수의 경기별 실제 포지션은 아직 추가 검증 대상.
- 기록이 없는 선수의 저평가를 방지하기 위해 자료 미확인을 낮은 경기력 등급의 근거로 사용하지 않는다.

## 배포·실제 브라우저 검사 결과 — 2026-11-05

- `main` GitHub Pages 배포 및 GitHub Actions Playwright 검증 완료: [실제 배포 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/41908476313), [브라우저 검사 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/41908475579).
- 실제 브라우저에서 Overview·Best XI·Top Class·League Table·Statistics·후보 126명·구단 필터 및 기존 시즌(PL 1999-00, La Liga 1999-00, Bundesliga 2000-01) 회귀 검사 성공.
- 후속 DFB 자료 보강 커밋 반영 후 최신 GitHub Pages 배포 확인은 별도로 수행한다.

## G. GitHub 반영 및 배포 상태

- 저장소: https://github.com/wjdduddlf112/footballarch
- 적용 브랜치: `main`
- 데이터 파일: `data/bundesliga-1999-00.json`
- 3백 렌더러·전술 UI: `assets/app.js`
- 전체 보고서: `audit/BUNDESLIGA_1999_00_DRAFT_FULL_REPORT_2026_11_05.md`
- 자동 구조 검사 스크립트: `scripts/verify-bundesliga-1999-00-draft.mjs`
- 홈페이지: https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=1999-00
- GitHub 원격 반영, Pages 배포, 실배포 브라우저 확인은 **서로 다른 검증 단계**임. 이 보고서 자체는 라이브 배포의 성공 증거가 아님.

---
이 시즌은 사용자 공식 승인 전까지 반드시 DRAFT 상태를 유지. 2000-01 시즌 자동 작업 금지.

---

## H. 필수 완료 조건 — S~D·미평가 전 선수 명단 (GitHub Pages 검증)

이번 확장 보고서는 기존 B절 **구단별 126명 전원**, C절 **포지션별 통합 126명 전원**과 연결되며, 아래 표에서 모든 선수의 티어와 포지션 순위를 중복 없이 확인할 수 있다. 선수 이름을 클릭해 세부 평가 근거를 확인하는 UI는 사이트 내 `All Tiers` 메뉴에 있다. `A/B/C`는 내부 JSON 저장값이며 화면에서는 각각 **A0/B0/C0**로 표기한다.

| 티어 | 인원 | 티어 | 인원 |
|---|---:|---|---:|
| S | 2 | B- | 0 |
| A+ | 8 | C+ | 5 |
| A0 | 22 | C0 | 2 |
| A- | 12 | C- | 1 |
| B+ | 38 | D | 0 |
| B0 | 36 | 미평가 | 0 |

- 전체 선수: **126명** / 티어 합계: **126명** / 미평가: **0명** / World Class: **10명** / League Top Class: **44명**.
- 이 표는 **잠정 티어 전체 명단**이다. 1997-98·1998-99·1999-00 세 시즌 정량·정성 근거가 126명 전원에 대해 검증되었다는 뜻이 아니다.

### S — 2명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 올리버 칸 | Oliver Kahn | FC Bayern München | 주전 | 1 |
| CM | 슈테판 에펜베르크 | Stefan Effenberg | FC Bayern München | 주전 | 1 |

### A+ — 8명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 한스외르크 부트 | Hans-Jörg Butt | Hamburger SV | 주전 | 2 |
| CB | 옌스 노보트니 | Jens Nowotny | Bayer 04 Leverkusen | 주전 | 1 |
| LB | 빅상트 리자라쥐 | Bixente Lizarazu | FC Bayern München | 주전 | 1 |
| DM | 옌스 예레미스 | Jens Jeremies | FC Bayern München | 주전 | 1 |
| DM | 에메르송 | Emerson | Bayer 04 Leverkusen | 주전 | 2 |
| ST | 마르틴 막스 | Martin Max | TSV 1860 München | 주전 | 1 |
| ST | 울프 키르스텐 | Ulf Kirsten | Bayer 04 Leverkusen | 주전 | 2 |
| ST | 지오바니 에우베르 | Giovane Élber | FC Bayern München | 주전 | 3 |

### A0 — 22명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 가보르 키라이 | Gábor Király | Hertha BSC | 주전 | 3 |
| CB | 니코얀 호흐마 | Nico-Jan Hoogma | Hamburger SV | 주전 | 2 |
| CB | 로베르트 코바치 | Robert Kovač | Bayer 04 Leverkusen | 주전 | 3 |
| CB | 토마스 링케 | Thomas Linke | FC Bayern München | 주전 | 4 |
| RB | 마르쿠스 바벨 | Markus Babbel | FC Bayern München | 주전 | 1 |
| DM | 치리아코 스포르차 | Ciriaco Sforza | 1.FC Kaiserslautern | 주전 | 3 |
| DM | 카르스텐 라멜로 | Carsten Ramelow | Bayer 04 Leverkusen | 주전 | 4 |
| CM | 슈테판 바인리히 | Stefan Beinlich | Bayer 04 Leverkusen | 주전 | 2 |
| CAM | 유리 조르카에프 | Youri Djorkaeff | 1.FC Kaiserslautern | 주전 | 1 |
| CAM | 메메트 숄 | Mehmet Scholl | FC Bayern München | 주전 | 2 |
| CAM | 토마스 헤슬러 | Thomas Häßler | TSV 1860 München | 주전 | 3 |
| CAM | 크라시미르 발라코프 | Krassimir Balakow | VfB Stuttgart | 주전 | 4 |
| CAM | 안드레아스 헤어초크 | Andreas Herzog | SV Werder Bremen | 주전 | 5 |
| LW | 마르코 보데 | Marco Bode | SV Werder Bremen | 주전 | 1 |
| LW | 제 호베르투 | Zé Roberto | Bayer 04 Leverkusen | 주전 | 2 |
| ST | 파울루 세르지우 | Paulo Sérgio | FC Bayern München | 주전 | 4 |
| ST | 미하엘 프레츠 | Michael Preetz | Hertha BSC | 주전 | 5 |
| ST | 조너선 악포보리에 | Jonathan Akpoborie | VfL Wolfsburg | 주전 | 6 |
| ST | 아일통 | Aílton | SV Werder Bremen | 주전 | 7 |
| ST | 안제이 유스코비아크 | Andrzej Juskowiak | VfL Wolfsburg | 주전 | 8 |
| ST | 로이 프레거 | Roy Präger | Hamburger SV | 주전 | 9 |
| ST | 올리버 뇌빌 | Oliver Neuville | Bayer 04 Leverkusen | 주전 | 10 |

### A- — 12명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| CB | 프랑크 바우만 | Frank Baumann | SV Werder Bremen | 주전 | 5 |
| CB | 사무엘 쿠포르 | Samuel Kuffour | FC Bayern München | 주전 | 6 |
| RB | 메흐디 마다비키아 | Mehdi Mahdavikia | Hamburger SV | 주전 | 2 |
| DM | 니코 코바치 | Niko Kovač | Hamburger SV | 주전 | 5 |
| DM | 디터 아일츠 | Dieter Eilts | SV Werder Bremen | 주전 | 6 |
| DM | 즈보니미르 솔도 | Zvonimir Soldo | VfB Stuttgart | 주전 | 7 |
| CAM | 다리우시 보시 | Dariusz Wosz | Hertha BSC | 주전 | 6 |
| LW | 도리넬 문테아누 | Dorinel Munteanu | VfL Wolfsburg | 주전 | 3 |
| RW | 하산 살리하미지치 | Hasan Salihamidžić | FC Bayern München | 주전 | 1 |
| RW | 베른트 슈나이더 | Bernd Schneider | Bayer 04 Leverkusen | 주전 | 2 |
| RW | 하랄트 체르니 | Harald Cerny | TSV 1860 München | 주전 | 3 |
| ST | 파울루 링크 | Paulo Rink | Bayer 04 Leverkusen | 후보 | 11 |

### B+ — 38명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 클라우스 라이트마이어 | Claus Reitmaier | VfL Wolfsburg | 주전 | 4 |
| GK | 프랑크 로스트 | Frank Rost | SV Werder Bremen | 주전 | 5 |
| GK | 아담 마티세크 | Adam Matysek | Bayer 04 Leverkusen | 주전 | 6 |
| GK | 다니엘 호프만 | Daniel Hoffmann | TSV 1860 München | 주전 | 7 |
| CB | 하리 코흐 | Harry Koch | 1.FC Kaiserslautern | 주전 | 7 |
| CB | 제프 스트라서 | Jeff Strasser | 1.FC Kaiserslautern | 주전 | 8 |
| CB | 미하엘 쇤베르그 | Michael Schjønberg | 1.FC Kaiserslautern | 주전 | 9 |
| CB | 잉고 헤르츠슈 | Ingo Hertzsch | Hamburger SV | 주전 | 10 |
| CB | 마르코 레머 | Marko Rehmer | Hertha BSC | 주전 | 11 |
| CB | 보리스 지브코비치 | Boris Živković | Bayer 04 Leverkusen | 후보 | 12 |
| CB | 안드레이 파나디치 | Andrej Panadić | Hamburger SV | 주전 | 13 |
| CB | 마르코 쿠르츠 | Marco Kurz | TSV 1860 München | 주전 | 14 |
| CB | 딕 판 뷔리크 | Dick van Burik | Hertha BSC | 주전 | 15 |
| CB | 마르셀루 보르동 | Marcelo Bordon | VfB Stuttgart | 주전 | 16 |
| CB | 파트리크 안데르손 | Patrik Andersson | FC Bayern München | 후보 | 17 |
| LB | 미하엘 타르나트 | Michael Tarnat | FC Bayern München | 후보 | 2 |
| LB | 하이코 게르버 | Heiko Gerber | VfB Stuttgart | 주전 | 3 |
| RB | 졸탄 제베첸 | Zoltan Sebescen | VfL Wolfsburg | 후보 | 3 |
| RB | 파트리크 바이저 | Patrick Weiser | VfL Wolfsburg | 주전 | 4 |
| RB | 슈테판 파슬라크 | Stephan Paßlack | TSV 1860 München | 주전 | 5 |
| DM | 에이욜푸르 스베리손 | Eyjólfur Sverrisson | Hertha BSC | 주전 | 8 |
| DM | 파블로 티암 | Pablo Thiam | VfB Stuttgart | 후보 | 9 |
| DM | 토마스 그라베센 | Thomas Gravesen | Hamburger SV | 주전 | 10 |
| DM | 로만 티체 | Roman Týce | TSV 1860 München | 주전 | 11 |
| CM | 미하엘 발라크 | Michael Ballack | Bayer 04 Leverkusen | 주전 | 3 |
| CM | 크시슈토프 노바크 | Krzysztof Nowak | VfL Wolfsburg | 주전 | 4 |
| CM | 프랑크 그라이너 | Frank Greiner | VfL Wolfsburg | 주전 | 5 |
| CM | 안드레아스 슈미트 | Andreas Schmidt | Hertha BSC | 주전 | 6 |
| CM | 크리스티안 리스트슈 | Krisztián Lisztes | VfB Stuttgart | 주전 | 7 |
| CAM | 로돌포 카르도소 | Rodolfo Cardoso | Hamburger SV | 주전 | 7 |
| RW | 제바스티안 다이슬러 | Sebastian Deisler | Hertha BSC | 주전 | 4 |
| RW | 토르스텐 프링스 | Torsten Frings | SV Werder Bremen | 주전 | 5 |
| RW | 마리오 바슬러 | Mario Basler | 1.FC Kaiserslautern | 주전 | 6 |
| ST | 카르스텐 얀커 | Carsten Jancker | FC Bayern München | 후보 | 12 |
| ST | 이오안 비오렐 가네아 | Ioan Viorel Ganea | VfB Stuttgart | 주전 | 13 |
| ST | 숀 던디 | Sean Dundee | VfB Stuttgart | 주전 | 14 |
| ST | 클라우디오 피사로 | Claudio Pizarro | SV Werder Bremen | 주전 | 15 |
| ST | 앤서니 예보아 | Anthony Yeboah | Hamburger SV | 주전 | 16 |

### B0 — 36명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 프란츠 볼파르트 | Franz Wohlfahrt | VfB Stuttgart | 주전 | 8 |
| GK | 안드레아스 라인케 | Andreas Reinke | 1.FC Kaiserslautern | 주전 | 9 |
| CB | 클라우스 톰센 | Claus Thomsen | VfL Wolfsburg | 주전 | 18 |
| CB | 마리노 빌리슈코프 | Marino Biliškov | VfL Wolfsburg | 주전 | 19 |
| CB | 마르셀 말트리츠 | Marcel Maltritz | VfL Wolfsburg | 후보 | 20 |
| CB | 토마스 베르톨트 | Thomas Berthold | VfB Stuttgart | 주전 | 21 |
| CB | 마르틴 슈트란츨 | Martin Stranzl | TSV 1860 München | 주전 | 22 |
| CB | 베른하르트 트라레스 | Bernhard Trares | SV Werder Bremen | 주전 | 23 |
| CB | 홀거 그라일리히 | Holger Greilich | TSV 1860 München | 후보 | 24 |
| LB | 발데마르 크리거 | Waldemar Kryger | VfL Wolfsburg | 주전 | 4 |
| LB | 브래들리 카넬 | Bradley Carnell | VfB Stuttgart | 후보 | 5 |
| LB | 베른트 홀러바흐 | Bernd Hollerbach | Hamburger SV | 주전 | 6 |
| RB | 헨드리크 헤르초크 | Hendrik Herzog | Hertha BSC | 주전 | 6 |
| RB | 안드레 비데너 | Andree Wiedener | SV Werder Bremen | 주전 | 7 |
| RB | 옌스 켈러 | Jens Keller | VfB Stuttgart | 주전 | 8 |
| DM | 토르스텐 핑크 | Thorsten Fink | FC Bayern München | 후보 | 12 |
| DM | 찰스 아코너 | Charles Akonnor | VfL Wolfsburg | 주전 | 13 |
| CM | 유리 막시모프 | Jurij Maximow | SV Werder Bremen | 주전 | 8 |
| CM | 브라이언 오닐 | Brian O'Neil | VfL Wolfsburg | 후보 | 9 |
| CM | 크리스토프 다브로프스키 | Christoph Dabrowski | SV Werder Bremen | 후보 | 10 |
| CM | 안드레아스 부크 | Andreas Buck | 1.FC Kaiserslautern | 주전 | 11 |
| CM | 필리프 타팔로비치 | Filip Tapalović | TSV 1860 München | 주전 | 12 |
| CM | 마리안 흐리스토프 | Marian Hristov | 1.FC Kaiserslautern | 주전 | 13 |
| CM | 파비안 에른스트 | Fabian Ernst | Hamburger SV | 후보 | 14 |
| LW | 미하엘 하르트만 | Michael Hartmann | Hertha BSC | 주전 | 4 |
| LW | 다니엘 보리미로프 | Daniel Borimirow | TSV 1860 München | 주전 | 5 |
| RW | 홉손 폰치 | Robson Ponte | Bayer 04 Leverkusen | 후보 | 7 |
| RW | 호베르투 핀투 | Roberto Pinto | VfB Stuttgart | 주전 | 8 |
| ST | 알렉스 아우베스 | Alex Alves | Hertha BSC | 후보 | 17 |
| ST | 라데 보그다노비치 | Rade Bogdanović | SV Werder Bremen | 후보 | 18 |
| ST | 알리 다에이 | Ali Daei | Hertha BSC | 주전 | 19 |
| ST | 예르겐 페테르손 | Jörgen Pettersson | 1.FC Kaiserslautern | 주전 | 20 |
| ST | 올라프 마르샬 | Olaf Marschall | 1.FC Kaiserslautern | 후보 | 21 |
| ST | 베른하르트 빙클러 | Bernhard Winkler | TSV 1860 München | 주전 | 22 |
| ST | 이글리 타레 | Igli Tare | 1.FC Kaiserslautern | 주전 | 23 |
| ST | 파벨 쿠카 | Pavel Kuka | VfB Stuttgart | 후보 | 24 |

### B- — 0명

해당 선수 없음.

### C+ — 5명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 게오르크 코흐 | Georg Koch | 1.FC Kaiserslautern | 후보 | 10 |
| GK | 크리스티안 피들러 | Christian Fiedler | Hertha BSC | 후보 | 11 |
| GK | 베른트 드레어 | Bernd Dreher | FC Bayern München | 후보 | 12 |
| GK | 티모 힐데브란트 | Timo Hildebrand | VfB Stuttgart | 후보 | 13 |
| ST | 위르겐 리셰 | Jürgen Rische | VfL Wolfsburg | 후보 | 25 |

### C0 — 2명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 프랭크 유리치 | Frank Juric | Bayer 04 Leverkusen | 후보 | 14 |
| GK | 미하엘 호프만 | Michael Hofmann | TSV 1860 München | 후보 | 15 |

### C- — 1명

| 포지션 | 한글 이름 | 원어명 | 소속 구단 원어명 | 구분 | 포지션 순위 |
|---|---|---|---|---|---:|
| GK | 알렉산더 바데 | Alexander Bade | Hamburger SV | 후보 | 16 |

### D — 0명

해당 선수 없음.

### 미평가 — 0명

해당 선수 없음.

### 실제 웹 화면·배포 검증

- 1999-00 전체 티어 디렉터리: https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=1999-00&view=tiers
- GitHub 커밋: [`bc2d1055eb358cdc59c8900bd997503675066ccd`](https://github.com/wjdduddlf112/footballarch/commit/bc2d1055eb358cdc59c8900bd997503675066ccd)
- GitHub Pages 배포: **SUCCESS**, [실행 #41925084258](https://github.com/wjdduddlf112/footballarch/actions/runs/41925084258)
- 실제 Chromium/Playwright 검사: **SUCCESS**, [실행 #41925086286](https://github.com/wjdduddlf112/footballarch/actions/runs/41925086286)
- 실제 화면에서 전체 구단 표 9개/126명, 전체 포지션 표 10개/126명, 티어 표 12개/126명, Best XI 티어 배지 11개 및 근거 11개를 검사해 모두 통과.
- 이전 시즌 표시 회귀 워크플로우들 역시 성공. 이는 **구조·화면 검증**이며 역사 기록의 완전한 사실 검증과는 구별한다.
- 역사적 미해결: 3시즌 출전/득점 독립 연계 확인 **11/126명**; 생년월일 누락 **54명**; 경기별 주 포지션 전수 검사 미완료. 기존 잠정 평가값은 사용자 최종 승인 전까지 DRAFT 유지.
- 2000-01 시즌 후보·평가 데이터에는 이번 작업으로 인한 변경 없음.

