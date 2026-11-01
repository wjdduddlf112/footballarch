# Premier League 2007-08 — Manchester United FC

**DRAFT · user approval pending.** 20 season-eligible candidates. 11 nominal starters. Main playing position is the individual season role; Best XI can place e.g. CAM in a CM field slot without changing the registered position.

Sources: season-specific club league table https://blog.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=200 and FootballSquads club roster. Starts and appearances are separate; individual season goals are recorded, although source disagreements are explicitly flagged in the JSON.

| 포지션 | 한글 이름 | 원어 이름 | 해당 구단(원어명) | 생년월일 | 구분 | PL 출전 | PL 선발 | PL 골 | 티어 | 포지션 순위 |
|---|---|---|---|---|---|---:|---:|---:|---|---:|
| GK | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC | 1970-10-29 | 주전 | 29 | 29 | 0 | A+ | 3 |
| GK | 토마시 쿠슈차크 | Tomasz Kuszczak | Manchester United FC | 1982-03-20 | 후보 | 9 | 8 | 0 | B | 13 |
| CB | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | 주전 | 35 | 35 | 2 | S | 1 |
| CB | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | 1981-10-21 | 주전 | 32 | 32 | 1 | A+ | 2 |
| CB | 제라르 피케 | Gerard Piqué | Manchester United FC | 1987-02-02 | 후보 | 8 | 5 | 0 | B- | 27 |
| LB | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 | 주전 | 33 | 33 | 0 | A+ | 2 |
| LB | 미카엘 실베스트르 | Mikaël Silvestre | Manchester United FC | 1977-08-09 | 후보 | 3 | 3 | 0 | B- | 15 |
| RB | 웨스 브라운 | Wes Brown | Manchester United FC | 1979-10-13 | 주전 | 36 | 34 | 1 | A- | 2 |
| RB | 존 오셰이 | John O'Shea | Manchester United FC | 1981-04-30 | 후보 | 28 | 10 | 0 | B+ | 7 |
| DM | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 | 주전 | 31 | 24 | 2 | A | 3 |
| DM | 오언 하그리브스 | Owen Hargreaves | Manchester United FC | 1981-01-20 | 후보 | 23 | 16 | 2 | A- | 7 |
| CM | 폴 스콜스 | Paul Scholes | Manchester United FC | 1974-11-16 | 주전 | 24 | 22 | 1 | A- | 6 |
| CM | 안데르송 | Anderson | Manchester United FC | 1988-04-13 | 후보 | 24 | 16 | 0 | B+ | 9 |
| LW | 라이언 긱스 | Ryan Giggs | Manchester United FC | 1973-11-29 | 주전 | 31 | 26 | 3 | A- | 3 |
| LW | 나니 | Nani | Manchester United FC | 1986-11-17 | 후보 | 26 | 16 | 3 | B+ | 9 |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | 1985-02-05 | 주전 | 34 | 31 | 31 | S | 1 |
| RW | 박지성 | Park Ji-sung | Manchester United FC | 1981-02-25 | 후보 | 12 | 8 | 1 | B+ | 10 |
| ST | 카를로스 테베스 | Carlos Tévez | Manchester United FC | 1984-02-05 | 주전 | 34 | 31 | 14 | A+ | 4 |
| ST | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | 주전 | 27 | 25 | 12 | A+ | 6 |
| ST | 루이 사하 | Louis Saha | Manchester United FC | 1978-08-08 | 후보 | 17 | 6 | 5 | B+ | 14 |

### Evaluation and validation

- 2007-08 current-season league starts and goals obtained from season-specific appearance tables. Match-by-match **most played position** remains pending; roster positional classification provisional.
- 2005-06 and 2006-07 source evidence weighted below 2007-08; overseas seasons and transfers are not assumed to be Premier League matches.
- Best XI: strongest players preferred. Real primary position is stored in `players[].position` and tactical XI slot in `bestXi[].position`. Liverpool Gerrard CAM→CM field mapping is deliberately allowed.
- Detailed individual rationale and historical-year source information are in `data/premierleague-2007-08.json`.
