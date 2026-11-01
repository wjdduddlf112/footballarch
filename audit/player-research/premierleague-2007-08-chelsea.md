# Premier League 2007-08 — Chelsea FC

**DRAFT · user approval pending.** 21 season-eligible candidates. 11 nominal starters. Main playing position is the individual season role; Best XI can place e.g. CAM in a CM field slot without changing the registered position.

Sources: season-specific club league table https://www.statbunker.com/competitions/SeasonAppearances?club_id=8&comp_id=200 and FootballSquads club roster. Starts and appearances are separate; individual season goals are recorded, although source disagreements are explicitly flagged in the JSON.

| 포지션 | 한글 이름 | 원어 이름 | 해당 구단(원어명) | 생년월일 | 구분 | PL 출전 | PL 선발 | PL 골 | 티어 | 포지션 순위 |
|---|---|---|---|---|---|---:|---:|---:|---|---:|
| GK | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | 주전 | 26 | 26 | 0 | A+ | 4 |
| GK | 카를로 쿠디치니 | Carlo Cudicini | Chelsea FC | 1973-09-06 | 후보 | 10 | 10 | 0 | B | 9 |
| CB | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | 주전 | 23 | 23 | 1 | A+ | 3 |
| CB | 히카르두 카르발류 | Ricardo Carvalho | Chelsea FC | 1978-05-18 | 주전 | 21 | 21 | 1 | A+ | 4 |
| CB | 알렉스 | Alex | Chelsea FC | 1982-06-17 | 후보 | 28 | 22 | 2 | B+ | 16 |
| LB | 애슐리 콜 | Ashley Cole | Chelsea FC | 1980-12-20 | 주전 | 27 | 27 | 1 | A | 4 |
| LB | 웨인 브리지 | Wayne Bridge | Chelsea FC | 1980-08-05 | 후보 | 11 | 9 | 0 | B | 12 |
| RB | 줄리아누 벨레치 | Juliano Belletti | Chelsea FC | 1976-06-20 | 주전 | 23 | 20 | 2 | B+ | 8 |
| RB | 파울루 페헤이라 | Paulo Ferreira | Chelsea FC | 1979-01-18 | 후보 | 18 | 15 | 0 | B+ | 11 |
| DM | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | 주전 | 29 | 21 | 0 | A- | 5 |
| DM | 클로드 마켈렐레 | Claude Makélélé | Chelsea FC | 1973-02-18 | 후보 | 18 | 15 | 0 | A- | 4 |
| CM | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | 1978-06-20 | 주전 | 24 | 23 | 10 | A+ | 3 |
| CM | 마이클 에시엔 | Michael Essien | Chelsea FC | 1982-12-03 | 후보 | 27 | 23 | 6 | A | 4 |
| CAM | 미하엘 발라크 | Michael Ballack | Chelsea FC | 1976-09-26 | 주전 | 18 | 16 | 7 | A- | 2 |
| LW | 살로몽 칼루 | Salomon Kalou | Chelsea FC | 1985-08-05 | 주전 | 30 | 24 | 7 | B+ | 7 |
| LW | 플로랑 말루다 | Florent Malouda | Chelsea FC | 1980-06-13 | 후보 | 21 | 16 | 2 | B+ | 8 |
| RW | 조 콜 | Joe Cole | Chelsea FC | 1981-11-08 | 주전 | 33 | 28 | 7 | A+ | 2 |
| RW | 숀 라이트필립스 | Shaun Wright-Phillips | Chelsea FC | 1981-10-25 | 후보 | 27 | 20 | 2 | B | 13 |
| ST | 디디에 드로그바 | Didier Drogba | Chelsea FC | 1978-03-11 | 주전 | 19 | 17 | 8 | A- | 9 |
| ST | 니콜라 아넬카 | Nicolas Anelka | Chelsea FC | 1979-03-14 | 후보 | 14 | 10 | 1 | B+ | 16 |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | Chelsea FC | 1976-09-29 | 후보 | 17 | 8 | 5 | B- | 22 |

### Evaluation and validation

- 2007-08 current-season league starts and goals obtained from season-specific appearance tables. Match-by-match **most played position** remains pending; roster positional classification provisional.
- 2005-06 and 2006-07 source evidence weighted below 2007-08; overseas seasons and transfers are not assumed to be Premier League matches.
- Best XI: strongest players preferred. Real primary position is stored in `players[].position` and tactical XI slot in `bestXi[].position`. Liverpool Gerrard CAM→CM field mapping is deliberately allowed.
- Detailed individual rationale and historical-year source information are in `data/premierleague-2007-08.json`.
