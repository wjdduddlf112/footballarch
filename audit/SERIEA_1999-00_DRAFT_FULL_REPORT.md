# Serie A 1999-00 — DRAFT partial research and historical audit

> **WORK IN PROGRESS · draft_unapproved.** This is not a completed independent 3-season audit, not a verified 132-player nomination, and not user-approved. The original 119 candidates are retained pending full independent reselection. 13 directly researched missing players were added.

## Scope and historical participant qualification

- Season: **1999-00**; player evidence window: 1997-98 / 1998-99 / 1999-00, latest weighted highest.
- Clubs must have played in **2000-01 UEFA competitions**, including 2000 UEFA Intertoto, while playing in 1999-00 Serie A.
- The six-season/history caveat: original archive standings and the other domestic leagues remain unchanged.

| Club (original) | 1999-00 rank | 2000-01 European competition(s) | Qualification path / verification |
|---|---:|---|---|
| SS Lazio | 1 | UCL | Champion of 1999-00 Serie A; actual 2000-01 UEFA Champions League entrant · historical_competition_entry_crosschecked_user_approval_pending |
| Juventus FC | 2 | UCL | 1999-00 Serie A second; actual 2000-01 UEFA Champions League entrant · historical_competition_entry_crosschecked_user_approval_pending |
| AC Milan | 3 | UCL | 1999-00 Serie A third; entered 2000-01 Champions League qualifying · historical_competition_entry_crosschecked_user_approval_pending |
| FC Internazionale Milano | 4 | UCL → UEFA Cup | Fourth-place decider against Parma; 2000-01 UCL qualifying then UEFA Cup after Helsingborg elimination · historical_competition_entry_crosschecked_user_approval_pending |
| Parma Calcio 1913 | 5 | UEFA Cup | Lost UCL fourth-place play-off to Inter; actual 2000-01 UEFA Cup entrant · historical_competition_entry_crosschecked_user_approval_pending |
| AS Roma | 6 | UEFA Cup | 1999-00 Serie A sixth; actual 2000-01 UEFA Cup entrant · historical_competition_entry_crosschecked_user_approval_pending |
| ACF Fiorentina | 7 | UEFA Cup | 1999-00 Serie A seventh; actual 2000-01 UEFA Cup entrant · historical_competition_entry_crosschecked_user_approval_pending |
| Udinese Calcio | 8 | Intertoto Cup → UEFA Cup | Competed in 2000 Intertoto Cup, won path to 2000-01 UEFA Cup · historical_competition_entry_crosschecked_user_approval_pending |
| AC Perugia | 10 | Intertoto Cup | Actually competed in 2000 Intertoto Cup, including second-round fixture vs Standard Liège despite tenth league position · historical_competition_entry_crosschecked_user_approval_pending |

Historical references: https://www.rsssf.org/tablesi/ital00.html ; https://www.rsssf.org/tablesu/uic00.html ; https://www.rsssf.org/tablesi/ital-ec.html . The initial qualifiers match the current archive; actual UEFA match and competition official documentation remains to be signed off player/club-wise.

## Integrity and coverage at current commit

- Player candidates in JSON: **132** (original 119 + **13** documented additions).
- Graded provisional: **76**; deliberately ungraded: **56**.
- World Class S and A+: **14**; League Top Class S/A+/A0/A-: **38**.
- Position provisional ranks assigned to graded subset only: **76**. All ungraded players have null rank.
- Players with historical numerical league appearance records recorded for both prior seasons: **13**. These are NOT all independently signed-off full individual/qualitative verification.
- Verified, independently complete three-season personal-performance audits: **0 / 132**.
- Ranking, season-modal formation, team by team complete new nomination and end-user approval: **incomplete**.

### Tier distribution

| S | A+ | A0 | A- | B+ | B0 | B- | C+ | C0 | C- | D | Unrated |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 5 | 9 | 14 | 10 | 29 | 8 | 1 | 0 | 0 | 0 | 0 | 56 |

## Corrections and important historical exceptions

1. **Alvaro Recoba**, previously absent; 1999-00 regular league FBref 27 appearances, 17 starts, 1,594 minutes, 10 goals/6 assists, while Inter official counts 28/10 by including the Inter-Parma fourth-place/Champions League berth play-off. The club-scope number is not an extra regular league match.
2. **Roberto Baggio**, previously absent; FBref and RSSSF regular league 18 matches/4 goals. Inter official 19/6 includes the extra 2000 Inter-Parma play-off (1 match, 2 goals). Keep competition scopes separate: https://www.rsssf.org/players/baggiodata.html ; https://www.inter.it/en/archivio_giocatore/G0028 ; https://fbref.com/en/players/2bd30258/Roberto-Baggio .
3. **Simone Inzaghi**, previously absent; 1999-00 Lazio 22 league appearances / 7 goals, and separate 9 Champions League goals. League and UEFA goals are never summed into Serie A scoring: https://www.laziostories.com/post/1999-00-complete-player-statistics .
4. **Angelo Di Livio** reassigned provisional site CM → RW to represent 1999 Fiorentina's right-sided wide midfielder/wing-back (3-4-1-2 in sampled match). Match-frequency confirmation still required: https://www.transfermarkt.co.uk/ac-fiorentina_ac-parma/index/spielbericht/2211334 .
5. **Hidetoshi Nakata** appeared in 1999-00 for BOTH Perugia and Roma. Perugia 15 league starts/1,334 minutes; Roma 15 starts/1,102 minutes. Preserved as one archive player id registered under higher-minute Perugia stint, with Roma spell in `sameSeasonOtherClub`; this single-club-per-season presentation choice remains reviewable. Identity: https://nakata.net/profile/ .
6. **Milan Rapaić** birth date was null in old seed. Confirmed 1973-08-16 from Croatian Football Federation: https://hns.team/en/players/158865/milan-rapaic/ .
7. **1999-00 Milan** three-centre-back scheme under Zaccheroni supported by club contemporary historical roster; sample role of Maldini as centre-back remains subject to matchwise check: https://www.acmilan.com/en/news/articles/internationals/acmilan-1999-roster .
8. The original Serie A final standings 18-club, 34 fixtures, champions/points and administrative notes were deliberately preserved. No claims of fresh independent cross-verification of every standings field.

## New historical candidate additions

| Team | Position | Player | Born | Apps | Starts | Minutes | League goals | Tier proposal |
|---|---|---|---|---:|---:|---:|---:|---|
| SS Lazio | ST | 시모네 인차기 (Simone Inzaghi) | 1976-04-05 | 22 | 10 | 870 | 7 | B+ |
| FC Internazionale Milano | ST | 알바로 레코바 (Álvaro Recoba) | 1976-03-17 | 27 | 17 | 1594 | 10 | A0 |
| FC Internazionale Milano | CAM | 로베르토 바조 (Roberto Baggio) | 1967-02-18 | 18 | 7 | 767 | 4 | B+ |
| AC Milan | CAM | 레오나르두 (Leonardo Nascimento de Araújo) | 1969-09-05 | 20 | 11 | 936 | 4 | B+ |
| AS Roma | CM | 마르쿠스 아순상 (Marcos Assunção) | 1976-07-25 | 21 | 20 | 1767 | 1 | B+ |
| AS Roma | CB | 알레산드로 리날디 (Alessandro Rinaldi) | 1974-11-23 | 23 | 18 | 1753 | 0 | B0 |
| ACF Fiorentina | ST | 프레드라그 미야토비치 (Predrag Mijatović) | 1969-01-19 | 16 | 12 | 1117 | 2 | B0 |
| ACF Fiorentina | CM | 크리스티안 아모로소 (Christian Amoroso) | 1976-09-22 | 23 | 15 | 1331 | 0 | B0 |
| ACF Fiorentina | CB | 알도 피리카노 (Aldo Firicano) | 1967-03-12 | 20 | 19 | 1665 | 1 | B0 |
| AC Perugia | CAM | 나카타 히데토시 (Hidetoshi Nakata) | 1977-01-22 | 15 | 15 | 1334 | 2 | A- |
| AC Perugia | ST | 알레산드로 멜리 (Alessandro Melli) | 1969-12-11 | 25 | 17 | 1406 | 1 | B- |
| AC Perugia | RW | 마시밀리아노 에스포지토 (Massimiliano Esposito) | 1972-05-27 | 27 | 19 | 1772 | 1 | B0 |
| AC Perugia | CB | 로베르토 리파 (Roberto Ripa) | 1967-10-29 | 22 | 19 | 1687 | 1 | B0 |

## All clubs — full existing and newly added candidate review tables

Position sequence: GK → CB → LB → RB → DM → CM → CAM → LW → RW → ST. Role labels are candidate starter/backup proposals, NOT a proof of full 34-match individual tactical slot frequency.

### SS Lazio — 18 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 루카 마르케자니 | Luca Marchegiani | SS Lazio | 1966-02-22 | starter | 28/28 | A0 | 4 | partially_verified |
| GK | 마르코 발로타 | Marco Ballotta | SS Lazio | 1964-04-03 | backup | 9/6 | — | — | evidence_pending |
| CB | 알레산드로 네스타 | Alessandro Nesta | SS Lazio | 1976-03-19 | starter | 28/28 | S | 2 | partially_verified |
| CB | 시니샤 미하일로비치 | Siniša Mihajlović | SS Lazio | 1969-02-20 | starter | 26/26 | A0 | 7 | partially_verified |
| CB | 페르난두 쿠투 | Fernando Couto | SS Lazio | 1969-08-02 | backup | 14/10 | — | — | evidence_pending |
| LB | 주세페 판카로 | Giuseppe Pancaro | SS Lazio | 1971-08-26 | starter | 28/26 | A- | 1 | partially_verified |
| LB | 주세페 파발리 | Giuseppe Favalli | SS Lazio | 1972-01-08 | backup | 18/16 | — | — | evidence_pending |
| RB | 파올로 네그로 | Paolo Negro | SS Lazio | 1972-04-16 | starter | 26/25 | B+ | 2 | partially_verified |
| DM | 로베르토 센시니 | Roberto Sensini | SS Lazio | 1966-10-12 | starter | 23/15 | B+ | 7 | partially_verified |
| DM | 마티아스 알메이다 | Matías Almeyda | SS Lazio | 1973-12-21 | backup | 19/15 | — | — | evidence_pending |
| CM | 후안 세바스티안 베론 | Juan Sebastián Verón | SS Lazio | 1975-03-09 | starter | 31/31 | S | 1 | partially_verified |
| CM | 디에고 시메오네 | Diego Simeone | SS Lazio | 1970-04-28 | starter | 28/15 | A- | 4 | partially_verified |
| LW | 파벨 네드베트 | Pavel Nedvěd | SS Lazio | 1972-08-30 | starter | 28/28 | A0 | 1 | partially_verified |
| RW | 세르지우 콘세이상 | Sérgio Conceição | SS Lazio | 1974-11-15 | starter | 30/22 | B+ | 5 | partially_verified |
| RW | 데얀 스탄코비치 | Dejan Stanković | SS Lazio | 1978-09-11 | backup | 16/12 | — | — | evidence_pending |
| ST | 마르셀로 살라스 | Marcelo Salas | SS Lazio | 1974-12-24 | starter | 28/26 | A0 | 7 | partially_verified |
| ST | 알렌 복시치 | Alen Bokšić | SS Lazio | 1970-01-21 | backup | 19/15 | A- | 11 | partially_verified |
| ST | 시모네 인차기 | Simone Inzaghi | SS Lazio | 1976-04-05 | backup | 22/10 | B+ | 16 | partially_verified |

### Juventus FC — 13 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 에드빈 판데르사르 | Edwin van der Sar | Juventus FC | 1970-10-29 | starter | 32/32 | A0 | 3 | partially_verified |
| GK | 미켈란젤로 람풀라 | Michelangelo Rampulla | Juventus FC | 1962-08-10 | backup | 3/2 | — | — | evidence_pending |
| CB | 파올로 몬테로 | Paolo Montero | Juventus FC | 1971-09-03 | backup | 28/28 | A0 | 6 | partially_verified |
| CB | 치로 페라라 | Ciro Ferrara | Juventus FC | 1967-02-11 | starter | 31/31 | — | — | evidence_pending |
| CB | 마르크 이울리아노 | Mark Iuliano | Juventus FC | 1973-08-12 | starter | 32/32 | — | — | evidence_pending |
| LB | 잔루카 페소토 | Gianluca Pessotto | Juventus FC | 1970-08-11 | starter | 30/25 | — | — | evidence_pending |
| DM | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus FC | 1975-07-23 | starter | 30/27 | A- | 1 | partially_verified |
| CM | 에드가 다비즈 | Edgar Davids | Juventus FC | 1973-03-13 | starter | 27/27 | A+ | 2 | partially_verified |
| CM | 안토니오 콘테 | Antonio Conte | Juventus FC | 1969-07-31 | starter | 28/28 | B+ | 5 | partially_verified |
| CAM | 지네딘 지단 | Zinédine Zidane | Juventus FC | 1972-06-23 | starter | 32/32 | A0 | 3 | partially_verified |
| RW | 잔루카 참브로타 | Gianluca Zambrotta | Juventus FC | 1977-02-19 | starter | 32/24 | B+ | 4 | partially_verified |
| ST | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus FC | 1974-11-09 | starter | 34/34 | A0 | 4 | partially_verified |
| ST | 필리포 인자기 | Filippo Inzaghi | Juventus FC | 1973-08-09 | backup | 33/32 | A0 | 5 | partially_verified |

### AC Milan — 15 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 크리스티안 아비아티 | Christian Abbiati | AC Milan | 1977-07-08 | starter | 29/29 | — | — | evidence_pending |
| GK | 세바스티아노 로시 | Sebastiano Rossi | AC Milan | 1964-07-20 | backup | 5/5 | — | — | evidence_pending |
| CB | 파올로 말디니 | Paolo Maldini | AC Milan | 1968-06-26 | starter | 27/27 | A+ | 4 | partially_verified |
| CB | 알레산드로 코스타쿠르타 | Alessandro Costacurta | AC Milan | 1966-04-24 | starter | 27/27 | — | — | evidence_pending |
| CB | 루이지 살라 | Luigi Sala | AC Milan | 1974-02-21 | backup | 20/16 | — | — | evidence_pending |
| RB | 토마스 헬베그 | Thomas Helveg | AC Milan | 1971-06-24 | starter | 27/17 | — | — | evidence_pending |
| DM | 젠나로 가투소 | Gennaro Gattuso | AC Milan | 1978-01-09 | backup | 22/16 | B+ | 6 | partially_verified |
| DM | 데메트리오 알베르티니 | Demetrio Albertini | AC Milan | 1971-08-23 | starter | 26/23 | — | — | evidence_pending |
| CM | 마시모 암브로시니 | Massimo Ambrosini | AC Milan | 1977-05-29 | starter | 29/25 | B+ | 6 | partially_verified |
| CAM | 레오나르두 | Leonardo Nascimento de Araújo | AC Milan | 1969-09-05 | backup | 20/11 | B+ | 6 | partially_verified |
| CAM | 즈보니미르 보반 | Zvonimir Boban | AC Milan | 1968-10-08 | starter | 17/11 | — | — | evidence_pending |
| LW | 세르지뉴 | Serginho | AC Milan | 1971-06-27 | starter | 24/18 | — | — | evidence_pending |
| RW | 안드레스 굴리엘민피에트로 | Andrés Guglielminpietro | AC Milan | 1974-04-14 | starter | 23/19 | — | — | evidence_pending |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | AC Milan | 1976-09-29 | starter | 32/30 | S | 1 | partially_verified |
| ST | 올리버 비어호프 | Oliver Bierhoff | AC Milan | 1968-05-01 | backup | 30/28 | B+ | 12 | partially_verified |

### FC Internazionale Milano — 16 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 안젤로 페루치 | Angelo Peruzzi | FC Internazionale Milano | 1970-02-16 | starter | 33/33 | A- | 5 | partially_verified |
| GK | 파브리치오 페론 | Fabrizio Ferron | FC Internazionale Milano | 1965-09-05 | backup | 4/1 | — | — | evidence_pending |
| CB | 로랑 블랑 | Laurent Blanc | FC Internazionale Milano | 1965-11-19 | starter | 34/34 | A0 | 5 | partially_verified |
| CB | 다리오 시미치 | Dario Šimić | FC Internazionale Milano | 1975-11-12 | backup | 19/19 | — | — | evidence_pending |
| CB | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano | 1976-08-11 | starter | 19/19 | — | — | evidence_pending |
| LB | 그리골리스 게오르가토스 | Grigoris Georgatos | FC Internazionale Milano | 1972-10-31 | starter | 28/24 | B+ | 3 | partially_verified |
| RB | 크리스티안 파누치 | Christian Panucci | FC Internazionale Milano | 1973-04-12 | starter | 26/26 | — | — | evidence_pending |
| DM | 루이지 디 비아조 | Luigi Di Biagio | FC Internazionale Milano | 1971-06-03 | starter | 29/23 | B+ | 5 | partially_verified |
| CM | 브누아 코에 | Benoît Cauet | FC Internazionale Milano | 1969-05-02 | starter | 29/20 | — | — | evidence_pending |
| CM | 클라렌서 세이도르프 | Clarence Seedorf | FC Internazionale Milano | 1976-04-01 | starter | 20/19 | — | — | evidence_pending |
| CAM | 로베르토 바조 | Roberto Baggio | FC Internazionale Milano | 1967-02-18 | backup | 18/7 | B+ | 7 | partially_verified |
| RW | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | starter | 34/34 | A0 | 1 | partially_verified |
| RW | 프란체스코 모리에로 | Francesco Moriero | FC Internazionale Milano | 1969-03-31 | backup | 17/10 | — | — | evidence_pending |
| ST | 알바로 레코바 | Álvaro Recoba | FC Internazionale Milano | 1976-03-17 | backup | 27/17 | A0 | 8 | partially_verified |
| ST | 크리스티안 비에리 | Christian Vieri | FC Internazionale Milano | 1973-07-12 | backup | 19/16 | A- | 10 | partially_verified |
| ST | 이반 사모라노 | Iván Zamorano | FC Internazionale Milano | 1967-01-18 | starter | 30/22 | B+ | 13 | partially_verified |

### Parma Calcio 1913 — 15 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Parma Associazione Calcio | 1978-01-28 | starter | 32/32 | A+ | 2 | partially_verified |
| GK | 마테오 과르달벤 | Matteo Guardalben | Parma Associazione Calcio | 1974-06-05 | backup | 1/1 | — | — | evidence_pending |
| CB | 릴리앙 튀랑 | Lilian Thuram | Parma Associazione Calcio | 1972-01-01 | starter | 33/33 | S | 1 | partially_verified |
| CB | 파비오 칸나바로 | Fabio Cannavaro | Parma Associazione Calcio | 1973-09-13 | starter | 31/31 | A+ | 3 | partially_verified |
| CB | 살리우 라시시 | Saliou Lassissi | Parma Associazione Calcio | 1978-08-15 | backup | 14/11 | — | — | evidence_pending |
| LB | 안토니오 베나리보 | Antonio Benarrivo | Parma Associazione Calcio | 1968-08-21 | backup | 18/16 | — | — | evidence_pending |
| LB | 파올로 바놀리 | Paolo Vanoli | Parma Associazione Calcio | 1972-08-12 | starter | 29/24 | — | — | evidence_pending |
| RB | 루이지 사르토르 | Luigi Sartor | Parma Associazione Calcio | 1975-01-30 | starter | 16/15 | — | — | evidence_pending |
| DM | 디노 바조 | Dino Baggio | Parma Associazione Calcio | 1971-07-24 | starter | 24/23 | B+ | 4 | partially_verified |
| CM | 알랭 보거시앙 | Alain Boghossian | Parma Associazione Calcio | 1970-10-27 | starter | 11/11 | — | — | evidence_pending |
| CAM | 아리엘 오르테가 | Ariel Ortega | Parma Associazione Calcio | 1974-03-04 | starter | 18/16 | B+ | 5 | partially_verified |
| LW | 마리오 스타니치 | Mario Stanić | Parma Associazione Calcio | 1972-04-10 | starter | 23/11 | — | — | evidence_pending |
| RW | 디에고 푸제르 | Diego Fuser | Parma Associazione Calcio | 1968-11-11 | starter | 28/28 | B+ | 3 | partially_verified |
| ST | 에르난 크레스포 | Hernán Crespo | Parma Associazione Calcio | 1975-07-05 | starter | 34/34 | A+ | 3 | partially_verified |
| ST | 마르코 디 바이오 | Marco Di Vaio | Parma Associazione Calcio | 1976-07-15 | backup | 23/12 | B+ | 15 | partially_verified |

### AS Roma — 15 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 프란체스코 안토니올리 | Francesco Antonioli | AS Roma | 1969-09-14 | starter | 30/30 | B+ | 6 | partially_verified |
| GK | 크리스티아노 루파텔리 | Cristiano Lupatelli | AS Roma | 1978-06-21 | backup | 4/4 | — | — | evidence_pending |
| CB | 알레산드로 리날디 | Alessandro Rinaldi | AS Roma | 1974-11-23 | backup | 23/18 | B0 | 13 | partially_verified |
| CB | 알다이르 | Aldair | AS Roma | 1965-11-30 | starter | 34/34 | — | — | evidence_pending |
| CB | 아메데오 망고네 | Amedeo Mangone | AS Roma | 1968-07-12 | backup | 25/25 | — | — | evidence_pending |
| CB | 안토니우 카를루스 자구 | Antônio Carlos Zago | AS Roma | 1969-05-18 | starter | 27/25 | — | — | evidence_pending |
| LB | 뱅상 캉델라 | Vincent Candela | AS Roma | 1973-10-24 | starter | 26/26 | A- | 2 | partially_verified |
| RB | 카푸 | Cafú | AS Roma | 1970-06-07 | starter | 28/28 | A+ | 1 | partially_verified |
| DM | 다미아노 톰마시 | Damiano Tommasi | AS Roma | 1974-05-17 | starter | 33/25 | B+ | 3 | partially_verified |
| CM | 에우세비오 디 프란체스코 | Eusebio Di Francesco | AS Roma | 1969-09-08 | starter | 30/24 | B+ | 7 | partially_verified |
| CM | 마르쿠스 아순상 | Marcos Assunção | AS Roma | 1976-07-25 | starter | 21/20 | B+ | 8 | partially_verified |
| CM | 크리스티아노 차네티 | Cristiano Zanetti | AS Roma | 1977-04-10 | starter | 11/6 | — | — | evidence_pending |
| CAM | 프란체스코 토티 | Francesco Totti | AS Roma | 1976-09-27 | starter | 27/27 | A+ | 2 | partially_verified |
| ST | 빈첸초 몬텔라 | Vincenzo Montella | AS Roma | 1974-06-18 | starter | 31/30 | A0 | 6 | partially_verified |
| ST | 마르코 델베키오 | Marco Delvecchio | AS Roma | 1973-04-07 | backup | 28/27 | — | — | evidence_pending |

### ACF Fiorentina — 14 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 프란체스코 톨도 | Francesco Toldo | ACF Fiorentina | 1971-12-02 | starter | 34/34 | A+ | 1 | partially_verified |
| CB | 알도 피리카노 | Aldo Firicano | ACF Fiorentina | 1967-03-12 | backup | 20/19 | B0 | 11 | partially_verified |
| CB | 알레산드로 피에리니 | Alessandro Pierini | ACF Fiorentina | 1973-03-22 | starter | 28/26 | — | — | evidence_pending |
| CB | 다니엘레 아다니 | Daniele Adani | ACF Fiorentina | 1974-07-10 | backup | 27/23 | — | — | evidence_pending |
| CB | 토마시 레프카 | Tomáš Řepka | ACF Fiorentina | 1974-01-02 | starter | 29/26 | — | — | evidence_pending |
| LB | 외르크 하인리히 | Jörg Heinrich | ACF Fiorentina | 1969-12-06 | starter | 24/24 | B+ | 4 | partially_verified |
| RB | 모레노 토리첼리 | Moreno Torricelli | ACF Fiorentina | 1970-01-23 | starter | 15/14 | — | — | evidence_pending |
| DM | 산드로 코이스 | Sandro Cois | ACF Fiorentina | 1972-06-09 | starter | 23/20 | — | — | evidence_pending |
| CM | 크리스티안 아모로소 | Christian Amoroso | ACF Fiorentina | 1976-09-22 | starter | 23/15 | B0 | 9 | partially_verified |
| CAM | 후이 코스타 | Rui Costa | ACF Fiorentina | 1972-03-29 | starter | 30/29 | A+ | 1 | partially_verified |
| RW | 안젤로 디 리비오 | Angelo Di Livio | ACF Fiorentina | 1966-07-26 | starter | 30/30 | A- | 2 | partially_verified |
| ST | 가브리엘 바티스투타 | Gabriel Batistuta | ACF Fiorentina | 1969-02-01 | starter | 30/30 | S | 2 | partially_verified |
| ST | 프레드라그 미야토비치 | Predrag Mijatović | ACF Fiorentina | 1969-01-19 | backup | 16/12 | B0 | 17 | partially_verified |
| ST | 엔리코 키에사 | Enrico Chiesa | ACF Fiorentina | 1970-12-29 | backup | 24/24 | — | — | evidence_pending |

### Udinese Calcio — 13 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 루이지 투르치 | Luigi Turci | Udinese Calcio | 1970-01-27 | starter | 28/28 | — | — | evidence_pending |
| GK | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio | 1977-03-26 | backup | 7/6 | — | — | evidence_pending |
| CB | 발레리오 베르토토 | Valerio Bertotto | Udinese Calcio | 1973-01-15 | starter | 30/30 | B+ | 9 | partially_verified |
| CB | 안드레아 소틸 | Andrea Sottil | Udinese Calcio | 1974-01-04 | starter | 29/29 | — | — | evidence_pending |
| CB | 마르코 잔키 | Marco Zanchi | Udinese Calcio | 1977-04-15 | backup | 23/21 | — | — | evidence_pending |
| RB | 레지스 제노 | Régis Genaux | Udinese Calcio | 1973-08-31 | starter | 17/15 | — | — | evidence_pending |
| DM | 줄리아노 잔니케다 | Giuliano Giannichedda | Udinese Calcio | 1974-09-21 | starter | 29/29 | B+ | 2 | partially_verified |
| CM | 스테파노 피오레 | Stefano Fiore | Udinese Calcio | 1975-04-17 | starter | 33/33 | A0 | 3 | partially_verified |
| CM | 토마소 로카텔리 | Tomas Locatelli | Udinese Calcio | 1976-06-09 | starter | 23/15 | — | — | evidence_pending |
| LW | 마르틴 예르겐센 | Martin Jørgensen | Udinese Calcio | 1975-10-06 | starter | 30/26 | B+ | 2 | partially_verified |
| RW | 모르텐 비스고르 | Morten Bisgaard | Udinese Calcio | 1974-06-25 | starter | 20/14 | — | — | evidence_pending |
| ST | 로베르토 무치 | Roberto Muzzi | Udinese Calcio | 1971-09-21 | starter | 29/27 | A- | 9 | partially_verified |
| ST | 로베르토 소사 | Roberto Sosa | Udinese Calcio | 1975-01-24 | backup | 30/21 | — | — | evidence_pending |

### AC Perugia — 13 players

| Pos | 한글 이름 | Original name | Club (original) | DOB | Role | Apps/Starts | Tier | Rank | Source verification |
|---|---|---|---|---|---|---|---|---:|---|
| GK | 안드레아 마찬티니 | Andrea Mazzantini | AC Perugia | 1968-07-11 | starter | 33/33 | B0 | 7 | partially_verified |
| CB | 알레산드로 칼로리 | Alessandro Calori | AC Perugia | 1966-08-29 | starter | 33/33 | B+ | 8 | partially_verified |
| CB | 마르코 마테라치 | Marco Materazzi | AC Perugia | 1973-08-19 | starter | 21/21 | B0 | 10 | partially_verified |
| CB | 로베르토 리파 | Roberto Ripa | AC Perugia | 1967-10-29 | starter | 22/19 | B0 | 12 | partially_verified |
| LB | 마우로 밀라네세 | Mauro Milanese | AC Perugia | 1971-09-17 | starter | 25/25 | — | — | evidence_pending |
| DM | 피에르파올로 비솔리 | Pierpaolo Bisoli | AC Perugia | 1966-11-20 | starter | 32/21 | — | — | evidence_pending |
| CM | 조반니 테데스코 | Giovanni Tedesco | AC Perugia | 1972-05-13 | starter | 26/22 | — | — | evidence_pending |
| CM | 레나토 올리베 | Renato Olive | AC Perugia | 1971-02-24 | starter | 28/27 | — | — | evidence_pending |
| CAM | 나카타 히데토시 | Hidetoshi Nakata | AC Perugia | 1977-01-22 | starter | 15/15 | A- | 4 | partially_verified |
| LW | 밀란 라파이치 | Milan Rapaić | AC Perugia | 1973-08-16 | starter | 28/25 | B+ | 3 | partially_verified |
| RW | 마시밀리아노 에스포지토 | Massimiliano Esposito | AC Perugia | 1972-05-27 | starter | 27/19 | B0 | 6 | partially_verified |
| ST | 니콜라 아모루소 | Nicola Amoruso | AC Perugia | 1974-08-29 | starter | 25/22 | B+ | 14 | partially_verified |
| ST | 알레산드로 멜리 | Alessandro Melli | AC Perugia | 1969-12-11 | starter | 25/17 | B- | 18 | partially_verified |

## Position-wide provisional ranks (graded subset only)

> These are **partial**, with ungraded players outside the ranking. They are NOT complete all-player positional orderings.

### GK

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 프란체스코 톨도 (Francesco Toldo) | ACF Fiorentina | A+ | prior-year independent review pending |
| 2 | 잔루이지 부폰 (Gianluigi Buffon) | Parma Associazione Calcio | A+ | prior years numeric linked; qualitative still pending |
| 3 | 에드빈 판데르사르 (Edwin van der Sar) | Juventus FC | A0 | prior-year independent review pending |
| 4 | 루카 마르케자니 (Luca Marchegiani) | SS Lazio | A0 | prior-year independent review pending |
| 5 | 안젤로 페루치 (Angelo Peruzzi) | FC Internazionale Milano | A- | prior-year independent review pending |
| 6 | 프란체스코 안토니올리 (Francesco Antonioli) | AS Roma | B+ | prior-year independent review pending |
| 7 | 안드레아 마찬티니 (Andrea Mazzantini) | AC Perugia | B0 | prior-year independent review pending |

### CB

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 릴리앙 튀랑 (Lilian Thuram) | Parma Associazione Calcio | S | prior years numeric linked; qualitative still pending |
| 2 | 알레산드로 네스타 (Alessandro Nesta) | SS Lazio | S | prior years numeric linked; qualitative still pending |
| 3 | 파비오 칸나바로 (Fabio Cannavaro) | Parma Associazione Calcio | A+ | prior years numeric linked; qualitative still pending |
| 4 | 파올로 말디니 (Paolo Maldini) | AC Milan | A+ | prior-year independent review pending |
| 5 | 로랑 블랑 (Laurent Blanc) | FC Internazionale Milano | A0 | prior-year independent review pending |
| 6 | 파올로 몬테로 (Paolo Montero) | Juventus FC | A0 | prior-year independent review pending |
| 7 | 시니샤 미하일로비치 (Siniša Mihajlović) | SS Lazio | A0 | prior-year independent review pending |
| 8 | 알레산드로 칼로리 (Alessandro Calori) | AC Perugia | B+ | prior-year independent review pending |
| 9 | 발레리오 베르토토 (Valerio Bertotto) | Udinese Calcio | B+ | prior-year independent review pending |
| 10 | 마르코 마테라치 (Marco Materazzi) | AC Perugia | B0 | prior-year independent review pending |
| 11 | 알도 피리카노 (Aldo Firicano) | ACF Fiorentina | B0 | prior-year independent review pending |
| 12 | 로베르토 리파 (Roberto Ripa) | AC Perugia | B0 | prior-year independent review pending |
| 13 | 알레산드로 리날디 (Alessandro Rinaldi) | AS Roma | B0 | prior-year independent review pending |

### LB

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 주세페 판카로 (Giuseppe Pancaro) | SS Lazio | A- | prior-year independent review pending |
| 2 | 뱅상 캉델라 (Vincent Candela) | AS Roma | A- | prior-year independent review pending |
| 3 | 그리골리스 게오르가토스 (Grigoris Georgatos) | FC Internazionale Milano | B+ | prior-year independent review pending |
| 4 | 외르크 하인리히 (Jörg Heinrich) | ACF Fiorentina | B+ | prior-year independent review pending |

### RB

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 카푸 (Cafú) | AS Roma | A+ | prior-year independent review pending |
| 2 | 파올로 네그로 (Paolo Negro) | SS Lazio | B+ | prior-year independent review pending |

### DM

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 알레시오 타키나르디 (Alessio Tacchinardi) | Juventus FC | A- | prior-year independent review pending |
| 2 | 줄리아노 잔니케다 (Giuliano Giannichedda) | Udinese Calcio | B+ | prior-year independent review pending |
| 3 | 다미아노 톰마시 (Damiano Tommasi) | AS Roma | B+ | prior-year independent review pending |
| 4 | 디노 바조 (Dino Baggio) | Parma Associazione Calcio | B+ | prior-year independent review pending |
| 5 | 루이지 디 비아조 (Luigi Di Biagio) | FC Internazionale Milano | B+ | prior-year independent review pending |
| 6 | 젠나로 가투소 (Gennaro Gattuso) | AC Milan | B+ | prior-year independent review pending |
| 7 | 로베르토 센시니 (Roberto Sensini) | SS Lazio | B+ | prior-year independent review pending |

### CM

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 후안 세바스티안 베론 (Juan Sebastián Verón) | SS Lazio | S | prior years numeric linked; qualitative still pending |
| 2 | 에드가 다비즈 (Edgar Davids) | Juventus FC | A+ | prior-year independent review pending |
| 3 | 스테파노 피오레 (Stefano Fiore) | Udinese Calcio | A0 | prior-year independent review pending |
| 4 | 디에고 시메오네 (Diego Simeone) | SS Lazio | A- | prior-year independent review pending |
| 5 | 안토니오 콘테 (Antonio Conte) | Juventus FC | B+ | prior-year independent review pending |
| 6 | 마시모 암브로시니 (Massimo Ambrosini) | AC Milan | B+ | prior-year independent review pending |
| 7 | 에우세비오 디 프란체스코 (Eusebio Di Francesco) | AS Roma | B+ | prior-year independent review pending |
| 8 | 마르쿠스 아순상 (Marcos Assunção) | AS Roma | B+ | prior-year independent review pending |
| 9 | 크리스티안 아모로소 (Christian Amoroso) | ACF Fiorentina | B0 | prior years numeric linked; qualitative still pending |

### CAM

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 후이 코스타 (Rui Costa) | ACF Fiorentina | A+ | prior-year independent review pending |
| 2 | 프란체스코 토티 (Francesco Totti) | AS Roma | A+ | prior-year independent review pending |
| 3 | 지네딘 지단 (Zinédine Zidane) | Juventus FC | A0 | prior years numeric linked; qualitative still pending |
| 4 | 나카타 히데토시 (Hidetoshi Nakata) | AC Perugia | A- | prior-year independent review pending |
| 5 | 아리엘 오르테가 (Ariel Ortega) | Parma Associazione Calcio | B+ | prior-year independent review pending |
| 6 | 레오나르두 (Leonardo Nascimento de Araújo) | AC Milan | B+ | prior-year independent review pending |
| 7 | 로베르토 바조 (Roberto Baggio) | FC Internazionale Milano | B+ | prior years numeric linked; qualitative still pending |

### LW

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 파벨 네드베트 (Pavel Nedvěd) | SS Lazio | A0 | prior years numeric linked; qualitative still pending |
| 2 | 마르틴 예르겐센 (Martin Jørgensen) | Udinese Calcio | B+ | prior-year independent review pending |
| 3 | 밀란 라파이치 (Milan Rapaić) | AC Perugia | B+ | prior-year independent review pending |

### RW

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 하비에르 사네티 (Javier Zanetti) | FC Internazionale Milano | A0 | prior-year independent review pending |
| 2 | 안젤로 디 리비오 (Angelo Di Livio) | ACF Fiorentina | A- | prior-year independent review pending |
| 3 | 디에고 푸제르 (Diego Fuser) | Parma Associazione Calcio | B+ | prior-year independent review pending |
| 4 | 잔루카 참브로타 (Gianluca Zambrotta) | Juventus FC | B+ | prior-year independent review pending |
| 5 | 세르지우 콘세이상 (Sérgio Conceição) | SS Lazio | B+ | prior-year independent review pending |
| 6 | 마시밀리아노 에스포지토 (Massimiliano Esposito) | AC Perugia | B0 | prior-year independent review pending |

### ST

| Pos rank | Player | Original club | Tier | Evidence limitations |
|---:|---|---|---|---|
| 1 | 안드리 셰우첸코 (Andriy Shevchenko) | AC Milan | S | prior years numeric linked; qualitative still pending |
| 2 | 가브리엘 바티스투타 (Gabriel Batistuta) | ACF Fiorentina | S | prior years numeric linked; qualitative still pending |
| 3 | 에르난 크레스포 (Hernán Crespo) | Parma Associazione Calcio | A+ | prior years numeric linked; qualitative still pending |
| 4 | 알레산드로 델 피에로 (Alessandro Del Piero) | Juventus FC | A0 | prior-year independent review pending |
| 5 | 필리포 인자기 (Filippo Inzaghi) | Juventus FC | A0 | prior-year independent review pending |
| 6 | 빈첸초 몬텔라 (Vincenzo Montella) | AS Roma | A0 | prior-year independent review pending |
| 7 | 마르셀로 살라스 (Marcelo Salas) | SS Lazio | A0 | prior-year independent review pending |
| 8 | 알바로 레코바 (Álvaro Recoba) | FC Internazionale Milano | A0 | prior years numeric linked; qualitative still pending |
| 9 | 로베르토 무치 (Roberto Muzzi) | Udinese Calcio | A- | prior-year independent review pending |
| 10 | 크리스티안 비에리 (Christian Vieri) | FC Internazionale Milano | A- | prior-year independent review pending |
| 11 | 알렌 복시치 (Alen Bokšić) | SS Lazio | A- | prior-year independent review pending |
| 12 | 올리버 비어호프 (Oliver Bierhoff) | AC Milan | B+ | prior-year independent review pending |
| 13 | 이반 사모라노 (Iván Zamorano) | FC Internazionale Milano | B+ | prior-year independent review pending |
| 14 | 니콜라 아모루소 (Nicola Amoruso) | AC Perugia | B+ | prior-year independent review pending |
| 15 | 마르코 디 바이오 (Marco Di Vaio) | Parma Associazione Calcio | B+ | prior-year independent review pending |
| 16 | 시모네 인차기 (Simone Inzaghi) | SS Lazio | B+ | prior-year independent review pending |
| 17 | 프레드라그 미야토비치 (Predrag Mijatović) | ACF Fiorentina | B0 | prior-year independent review pending |
| 18 | 알레산드로 멜리 (Alessandro Melli) | AC Perugia | B- | prior-year independent review pending |

## World Class (provisional)

- 알레산드로 네스타 (Alessandro Nesta) — SS Lazio, CB, S
- 후안 세바스티안 베론 (Juan Sebastián Verón) — SS Lazio, CM, S
- 에드가 다비즈 (Edgar Davids) — Juventus FC, CM, A+
- 파올로 말디니 (Paolo Maldini) — AC Milan, CB, A+
- 안드리 셰우첸코 (Andriy Shevchenko) — AC Milan, ST, S
- 잔루이지 부폰 (Gianluigi Buffon) — Parma Associazione Calcio, GK, A+
- 파비오 칸나바로 (Fabio Cannavaro) — Parma Associazione Calcio, CB, A+
- 릴리앙 튀랑 (Lilian Thuram) — Parma Associazione Calcio, CB, S
- 에르난 크레스포 (Hernán Crespo) — Parma Associazione Calcio, ST, A+
- 카푸 (Cafú) — AS Roma, RB, A+
- 프란체스코 토티 (Francesco Totti) — AS Roma, CAM, A+
- 프란체스코 톨도 (Francesco Toldo) — ACF Fiorentina, GK, A+
- 후이 코스타 (Rui Costa) — ACF Fiorentina, CAM, A+
- 가브리엘 바티스투타 (Gabriel Batistuta) — ACF Fiorentina, ST, S

## League Top Class (provisional)

- 알레산드로 네스타 (Alessandro Nesta) — SS Lazio, CB, S
- 후안 세바스티안 베론 (Juan Sebastián Verón) — SS Lazio, CM, S
- 안드리 셰우첸코 (Andriy Shevchenko) — AC Milan, ST, S
- 릴리앙 튀랑 (Lilian Thuram) — Parma Associazione Calcio, CB, S
- 가브리엘 바티스투타 (Gabriel Batistuta) — ACF Fiorentina, ST, S
- 에드가 다비즈 (Edgar Davids) — Juventus FC, CM, A+
- 파올로 말디니 (Paolo Maldini) — AC Milan, CB, A+
- 잔루이지 부폰 (Gianluigi Buffon) — Parma Associazione Calcio, GK, A+
- 파비오 칸나바로 (Fabio Cannavaro) — Parma Associazione Calcio, CB, A+
- 에르난 크레스포 (Hernán Crespo) — Parma Associazione Calcio, ST, A+
- 카푸 (Cafú) — AS Roma, RB, A+
- 프란체스코 토티 (Francesco Totti) — AS Roma, CAM, A+
- 프란체스코 톨도 (Francesco Toldo) — ACF Fiorentina, GK, A+
- 후이 코스타 (Rui Costa) — ACF Fiorentina, CAM, A+
- 루카 마르케자니 (Luca Marchegiani) — SS Lazio, GK, A0
- 시니샤 미하일로비치 (Siniša Mihajlović) — SS Lazio, CB, A0
- 파벨 네드베트 (Pavel Nedvěd) — SS Lazio, LW, A0
- 마르셀로 살라스 (Marcelo Salas) — SS Lazio, ST, A0
- 에드빈 판데르사르 (Edwin van der Sar) — Juventus FC, GK, A0
- 파올로 몬테로 (Paolo Montero) — Juventus FC, CB, A0
- 지네딘 지단 (Zinédine Zidane) — Juventus FC, CAM, A0
- 알레산드로 델 피에로 (Alessandro Del Piero) — Juventus FC, ST, A0
- 필리포 인자기 (Filippo Inzaghi) — Juventus FC, ST, A0
- 로랑 블랑 (Laurent Blanc) — FC Internazionale Milano, CB, A0
- 하비에르 사네티 (Javier Zanetti) — FC Internazionale Milano, RW, A0
- 빈첸초 몬텔라 (Vincenzo Montella) — AS Roma, ST, A0
- 스테파노 피오레 (Stefano Fiore) — Udinese Calcio, CM, A0
- 알바로 레코바 (Álvaro Recoba) — FC Internazionale Milano, ST, A0
- 주세페 판카로 (Giuseppe Pancaro) — SS Lazio, LB, A-
- 디에고 시메오네 (Diego Simeone) — SS Lazio, CM, A-
- 알렌 복시치 (Alen Bokšić) — SS Lazio, ST, A-
- 알레시오 타키나르디 (Alessio Tacchinardi) — Juventus FC, DM, A-
- 안젤로 페루치 (Angelo Peruzzi) — FC Internazionale Milano, GK, A-
- 크리스티안 비에리 (Christian Vieri) — FC Internazionale Milano, ST, A-
- 뱅상 캉델라 (Vincent Candela) — AS Roma, LB, A-
- 안젤로 디 리비오 (Angelo Di Livio) — ACF Fiorentina, RW, A-
- 로베르토 무치 (Roberto Muzzi) — Udinese Calcio, ST, A-
- 나카타 히데토시 (Hidetoshi Nakata) — AC Perugia, CAM, A-

## Best XI — provisional 4-3-1-2

> Exact 11-position draft proposal. All players maintain registered current primary positional role; representative formation is not a measured modal season formation.

| Slot | Player | Club | Reason / competing options pending |
|---|---|---|---|
| GK | 잔루이지 부폰 (Gianluigi Buffon) | Parma Associazione Calcio | Parma first-choice keeper: 32 league starts in 1999-00 after 32/34 in preceding two seasons; strong reflex saves and command of area. |
| CB | 알레산드로 네스타 (Alessandro Nesta) | SS Lazio | 1999-00 28 starts in Lazio defense; 1997-98 30 and 1998-99 20 league appearances. Anticipation, recovery defense and organization. |
| CB | 릴리앙 튀랑 (Lilian Thuram) | Parma Associazione Calcio | Parma CB/RCB starter with 33 league starts in 1999-00; strong 32/34 appearance continuity in prior two seasons and elite athletic coverage. |
| LB | 주세페 판카로 (Giuseppe Pancaro) | SS Lazio | 1999-00 league 28 appearances / 26 starts, interpreted with contemporary tactical duties and established player quality. The preceding two individual seasons still require independent full audit; tier remains a user-unapproved proposal. |
| RB | 카푸 (Cafú) | AS Roma | 1999-00 league 28 appearances / 28 starts, interpreted with contemporary tactical duties and established player quality. The preceding two individual seasons still require independent full audit; tier remains a user-unapproved proposal. |
| DM | 알레시오 타키나르디 (Alessio Tacchinardi) | Juventus FC | 1999-00 league 30 appearances / 27 starts, interpreted with contemporary tactical duties and established player quality. The preceding two individual seasons still require independent full audit; tier remains a user-unapproved proposal. |
| CM | 후안 세바스티안 베론 (Juan Sebastián Verón) | SS Lazio | 1999-00 31 appearances/8 goals and elite creative distribution for Lazio; previous years at Sampdoria and Parma separately assessed. Central on-ball impact and chance creation. |
| CM | 에드가 다비즈 (Edgar Davids) | Juventus FC | 1999-00 league 27 appearances / 27 starts, interpreted with contemporary tactical duties and established player quality. The preceding two individual seasons still require independent full audit; tier remains a user-unapproved proposal. |
| CAM | 후이 코스타 (Rui Costa) | ACF Fiorentina | 1999-00 league 30 appearances / 29 starts, interpreted with contemporary tactical duties and established player quality. The preceding two individual seasons still require independent full audit; tier remains a user-unapproved proposal. |
| ST | 안드리 셰우첸코 (Andriy Shevchenko) | AC Milan | 1999-00 32 Serie A appearances, league-leading 24 goals; previous Ukrainian league seasons recorded 19 and 18 goals. Top-level immediate adaptation and elite goal threat. |
| ST | 가브리엘 바티스투타 (Gabriel Batistuta) | ACF Fiorentina | 1999-00 30 appearances/23 league goals, following consecutive Serie A 21-goal seasons. Three-season sustained outstanding shot conversion and central attacking responsibility. |

## Source register and independent review methodology

1. Official league and historical club records: UEFA/RSSSF official match listings and named club histories, e.g. Inter official Recoba/Baggio, Croatian football federation DOB.
2. FBref seasonal team and player pages supply 1999-00 Serie A **league-only** appearances/starts/minutes and where available goals/assists; verify official match numbering before accepting fully.
3. Transfermarkt historical 1999 lineups sample historical positional deployment but **do not establish season-wide modal formation**.
4. The current season weighs highest, then 1998-99, then 1997-98. Team titles or rank are never points towards tier. Unknown numeric values are null, not zero.
5. Incomplete independent review deliberately leaves 56 players without a tier and those without ranks. No extrapolation from surname fame or later achievements.

## Remaining and unverified items

- **Full fresh candidate nomination / season-wide starter-slot positional matchwise audit for all nine clubs**, including possible missing rotation players, is not complete. The old 119-player seed was preserved as an audit baseline only; it is NOT independent candidate verification.
- **All 132 personal 3-season performance evidence checks** (especially independent starts/minutes and position consistency) remain incomplete; only 13 have both earlier seasonal league appearances numerically attached.
- **56 players not graded**, and positional ranking is incomplete until they are researched or explicitly excluded with evidence.
- League-wide most common formation must still be quantified or remain provisional; club formation proposals must be checked with match lineups.
- Individual rank ordering, S/A+ evaluation, Best XI competitor comparisons remain unapproved and provisional.
- Actual deployment and DOM interactions require browser-based verification separately from GitHub Actions success or HTML reachability.
- All prior files and approved other leagues are preserved. User final approval = **NO**.

## State checkpoints

| Check | Result |
|---|---|
| Candidate rows JSON | 132 (13 additions; still independent review pending) |
| Provisional tiers and position ranks | 76 |
| Unevaluated rows | 56 |
| Best XI | 11 proposed_unapproved |
| JSON basic integrity | Checked separately during mutation; standalone verifier required for repeatable test |
| Full historical independent verification | NOT COMPLETE |
| GitHub Pages interactive verification | NOT COMPLETE pending follow-up browser test |
| User approval | NOT APPROVED |

---
Data: `data/seriea-1999-00.json` · UI: `assets/app.js` · Last edited 2026-11-08.
