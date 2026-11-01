# Premier League 2007-08 — Arsenal FC

**DRAFT · user approval pending.** 19 season-eligible candidates. 11 nominal starters. Main playing position is the individual season role; Best XI can place e.g. CAM in a CM field slot without changing the registered position.

Sources: season-specific club league table https://www.statbunker.com/competitions/SeasonAppearances?club_id=5&comp_id=200 and FootballSquads club roster. Starts and appearances are separate; individual season goals are recorded, although source disagreements are explicitly flagged in the JSON.

| 포지션 | 한글 이름 | 원어 이름 | 해당 구단(원어명) | 생년월일 | 구분 | PL 출전 | PL 선발 | PL 골 | 티어 | 포지션 순위 |
|---|---|---|---|---|---|---:|---:|---:|---|---:|
| GK | 마누엘 알무니아 | Manuel Almunia | Arsenal FC | 1977-05-19 | 주전 | 29 | 29 | 0 | A- | 6 |
| GK | 옌스 레만 | Jens Lehmann | Arsenal FC | 1969-11-10 | 후보 | 7 | 6 | 0 | B- | 15 |
| CB | 윌리암 갈라스 | William Gallas | Arsenal FC | 1977-08-17 | 주전 | 31 | 31 | 4 | A+ | 5 |
| CB | 콜로 투레 | Kolo Touré | Arsenal FC | 1981-03-19 | 주전 | 30 | 29 | 2 | A+ | 7 |
| CB | 필리프 센데로스 | Philippe Senderos | Arsenal FC | 1985-02-14 | 후보 | 17 | 14 | 2 | B+ | 19 |
| LB | 가엘 클리시 | Gaël Clichy | Arsenal FC | 1985-07-26 | 주전 | 38 | 37 | 0 | A+ | 1 |
| RB | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 | 주전 | 29 | 29 | 1 | A+ | 1 |
| RB | 저스틴 호이트 | Justin Hoyte | Arsenal FC | 1984-11-20 | 후보 | 5 | 2 | 0 | B- | 16 |
| DM | 마티외 플라미니 | Mathieu Flamini | Arsenal FC | 1984-03-07 | 주전 | 30 | 30 | 3 | A+ | 1 |
| DM | 지우베르투 시우바 | Gilberto Silva | Arsenal FC | 1976-10-07 | 후보 | 23 | 12 | 1 | B | 16 |
| CM | 세스크 파브레가스 | Cesc Fàbregas | Arsenal FC | 1987-05-04 | 주전 | 32 | 32 | 7 | S | 1 |
| CM | 데니우송 | Denílson | Arsenal FC | 1988-02-16 | 후보 | 13 | 4 | 0 | B- | 17 |
| LW | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | 주전 | 18 | 15 | 6 | A- | 6 |
| LW | 아부 디아비 | Abou Diaby | Arsenal FC | 1986-05-11 | 후보 | 15 | 9 | 1 | B | 12 |
| RW | 알략산드르 흘레프 | Aliaksandr Hleb | Arsenal FC | 1981-05-01 | 주전 | 31 | 29 | 2 | A | 3 |
| RW | 에마뉘엘 에부에 | Emmanuel Eboué | Arsenal FC | 1983-06-04 | 후보 | 23 | 20 | 0 | B+ | 8 |
| ST | 에마뉘엘 아데바요르 | Emmanuel Adebayor | Arsenal FC | 1984-02-26 | 주전 | 36 | 32 | 24 | A+ | 2 |
| ST | 로빈 판페르시 | Robin van Persie | Arsenal FC | 1983-08-06 | 주전 | 15 | 13 | 7 | A- | 10 |
| ST | 니클라스 벤트네르 | Nicklas Bendtner | Arsenal FC | 1988-01-16 | 후보 | 27 | 7 | 5 | B+ | 15 |

### Evaluation and validation

- 2007-08 current-season league starts and goals obtained from season-specific appearance tables. Match-by-match **most played position** remains pending; roster positional classification provisional.
- 2005-06 and 2006-07 source evidence weighted below 2007-08; overseas seasons and transfers are not assumed to be Premier League matches.
- Best XI: strongest players preferred. Real primary position is stored in `players[].position` and tactical XI slot in `bestXi[].position`. Liverpool Gerrard CAM→CM field mapping is deliberately allowed.
- Detailed individual rationale and historical-year source information are in `data/premierleague-2007-08.json`.
