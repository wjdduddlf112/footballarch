# Serie A 2003-04 — historical candidate registry, grades, rankings, XI and audit (DRAFT)

> Status: **draft_unapproved**. All 118 provisional footballers have candidate role, 2003-04 regular-league individual current-season stats, tier, positional rank and source fields. None are user-approved final. Full independent personal three-year performance analysis and complete 34-match tactical position frequency audit **remain unfinished**.

## 1. Evaluation window and actual eligible clubs

- Three years: **2001-02 lowest weight; 2002-03 middle; 2003-04 highest**. Compare players' individual goals, assists, minutes, defensive qualities, contemporary tactics and form, NOT winning a title or team's final league position.
- Eligible ONLY actual participants from Serie A 2003-04 in continental UEFA **2004-05 UCL/UEFA Cup**; no actual Italian participant in 2004 UEFA Intertoto, according to RSSSF 2004 bracket. League standings and actual participation are distinct concepts.
- Starter/backup label means a defensible period representative nominal XI at that site position and a maximum of one alternate per position. This is not an assertion that all 11 always started together. For Roma and Udinese 3CB + 1 other CB candidate is permitted under period 3-back use; 2-starting-strikers + 1 alternate in applicable sides.
- Position order GK, CB, LB, RB, DM, CM, CAM, LW, RW, ST; left and right wide players are not collapsed. `A`/`B`/`C` in JSON render A0/B0/C0 in this report.

| Original club name | 2003-04 rank | 2004-05 actual UEFA entry | Historical participation note |
|---|---:|---|---|
| Associazione Calcio Milan | 1 | UCL | Serie A champion and 2004-05 Champions League actual |
| Associazione Sportiva Roma | 2 | UCL | Serie A runner-up and 2004-05 Champions League actual |
| Juventus Football Club | 3 | UCL | 3rd Serie A 2004-05 Champions League qualification actual |
| Football Club Internazionale Milano | 4 | UCL | 4th Serie A 2004-05 Champions League qualification actual |
| Parma Associazione Calcio | 5 | UEFA Cup | 5th Serie A actual 2004-05 UEFA Cup |
| Società Sportiva Lazio | 6 | UEFA Cup | 6th Serie A and 2003-04 Coppa Italia champion, actual 2004-05 UEFA Cup |
| Udinese Calcio | 7 | UEFA Cup | 7th Serie A actual 2004-05 UEFA Cup |

**No 2004 Italian Intertoto entrant.** Reference: https://www.rsssf.org/tablesu/uic04.html . Italian domestic table: https://www.rsssf.org/tablesi/ital04.html . UEFA Europa/UEFA Cup 2004/05 clubs: https://www.uefa.com/uefaeuropaleague/history/seasons/2004/clubs/ .

## 2. Creation and data provenance safeguards

- `data/seriea-2003-04.json` **did not exist before this turn**, newly generated for 7 eligible clubs. Historical squad names crosschecked to FootballSquads original period 2003/04 clubs and current-year league player rows on FBref.
- Initial **118** nominated candidates, 14 unconfirmed 2003-04 appearance/start/minute triplets stored as null, **all 14 subsequently individually verified** using FBref/independent team 2003-04 league sources; 118/118 current season apps/starts/minute fields now numeric. This is a structural / source-reconciliation check, NOT a complete 3-year qualitative audit.
- First 2003-04 Inter nominee list included Julio Ricardo Cruz (22 league games/17 starts/7 goals/3 assists); after comparing **Obafemi Martins** (FBref 24/11/7 goals/6 assists), nominated Martins as third striker alternative based goal contributions, despite Cruz's more starts. Cruz's strong first-team contribution is explicitly preserved as a shortlist exclusion for review.
- 2003-04 Martins source conflict: **FBref Serie A 24 games / 7 goals**, Inter official career archive counts **25 / 7**. Kept FBref 24, 11 starts, 1291 min and 6 assists with dispute flagged, no invented tie-break. FBref: https://fbref.com/en/players/70849fc2/Obafemi-Martins ; Inter official: https://www.inter.it/en/archivio_giocatore/G0745/obafemi-martins .
- 2003-04 dual registration rules: **Adriano** 9 matches/8 goals at Parma, then 16 games/9 at Inter: one nominee under Inter (more league minutes), other club preserved in `sameSeasonOtherClub`, total 25/17. **Dejan Stanković** 15 games at Lazio/14 at Inter, one nominee Lazio under marginally greater time; other club record retained, aggregate 29 games/6 goals. Neither is double counted.
- 2001-02 and 2002-03 historical numeric fields linked only by strict original-Latin-name matching from **previous unapproved DRAFT** or a separately researched personal source. An unknown earlier match is NULL, never automatically zero or mistaken cross-person. Any previous non-Serie-A season remains to be independently investigated.
- Players with BOTH preceding seasons numeric appearance rows attached: **56/118**. Many source rows copied from archived draft, NOT independent full three-year verification. All-player full three-year player-by-player performance signoff: **0/118**.

### Data disputes and candidate cap exclusions

| Club | Nominee or excluded player | Issue | Resolution in current JSON |
|---|---|---|---|
| Inter | Obafemi Martins | 2003-04 Serie A appearances: FBref 24 vs Inter 25 | Unresolved; current FBref 24 kept and original dispute flagged |
| Inter | Julio Ricardo Cruz | 2003-04 Inter 22 games, 17 starts, 7 goals, 3 assists vs Obafemi Martins 24 games, 11 starts, 7 goals and 6 assists. Select latter third ST option due higher individual goal contribution despite fewer starts. Cruz was important regular and merits a re-evaluation if user weights starts more. | Excluded under max 3 ST slots while preserving rationale |

## 3. Candidate coverage, tier overview

| Original club | Total nominees | Provisional XI starters | Position alternates | Missing one or both previous-year apps |
|---|---:|---:|---:|---:|
| Associazione Calcio Milan | 18 | 11 | 7 | 6 |
| Associazione Sportiva Roma | 17 | 11 | 6 | 8 |
| Juventus Football Club | 17 | 11 | 6 | 6 |
| Football Club Internazionale Milano | 17 | 11 | 6 | 9 |
| Parma Associazione Calcio | 14 | 11 | 3 | 11 |
| Società Sportiva Lazio | 19 | 11 | 8 | 7 |
| Udinese Calcio | 16 | 11 | 5 | 15 |

### Tier counts

| S | A+ | A0 | A- | B+ | B0 | B- | C+ | C0 | C- | D | Unrated |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 5 | 14 | 19 | 24 | 25 | 20 | 9 | 2 | 0 | 0 | 0 | 0 |

- World Class (S/A+): **19**.
- League Top Class (S/A+/A0/A-): **62**. Both use current provisional tier only; neither is finalized.

## 4. Full 118-player candidate tables, each club once (GK to ST)

Current games/start/min = 2003-04 **Serie A** only. Unknown older values are not included in current table. Tier S/A+/A0/etc provisional. A `후보` can still be a real historical co-starter under a different setup or different match; site nomination uses a single representative XI.

### Associazione Calcio Milan — 18 people · representative 4-3-1-2

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 지다 | Dida | Associazione Calcio Milan | 1973-10-07 | 주전 | 32/32/2880 | 0/0 | S | 1 |
| GK | 크리스티안 아비아티 | Christian Abbiati | Associazione Calcio Milan | 1977-07-08 | 후보 | 2/2/180 | 0/0 | B- | 12 |
| CB | 파올로 말디니 | Paolo Maldini | Associazione Calcio Milan | 1968-06-26 | 주전 | 30/30/2639 | 0/0 | A+ | 2 |
| CB | 알레산드로 네스타 | Alessandro Nesta | Associazione Calcio Milan | 1976-03-19 | 주전 | 26/26/2248 | 0/1 | A+ | 3 |
| CB | 알레산드로 코스타쿠르타 | Alessandro Costacurta | Associazione Calcio Milan | 1966-04-24 | 후보 | 22/18/1727 | 0/1 | B+ | 18 |
| LB | 주세페 판카로 | Giuseppe Pancaro | Associazione Calcio Milan | 1971-08-26 | 주전 | 21/17/1564 | 1/3 | A- | 5 |
| LB | 카하 칼라제 | Kakha Kaladze | Associazione Calcio Milan | 1978-02-27 | 후보 | 6/5/441 | 0/1 | B- | 12 |
| RB | 카푸 | Cafú | Associazione Calcio Milan | 1970-06-07 | 주전 | 28/26/2256 | 1/5 | A+ | 3 |
| RB | 다리오 시미치 | Dario Šimić | Associazione Calcio Milan | 1975-11-12 | 후보 | 10/6/576 | 0/0 | B0 | 11 |
| DM | 안드레아 피를로 | Andrea Pirlo | Associazione Calcio Milan | 1979-05-19 | 주전 | 32/31/2698 | 6/7 | S | 1 |
| CM | 클라렌스 세이도르프 | Clarence Seedorf | Associazione Calcio Milan | 1976-04-01 | 주전 | 29/26/2087 | 3/6 | A+ | 1 |
| CM | 젠나로 가투소 | Gennaro Gattuso | Associazione Calcio Milan | 1978-01-09 | 주전 | 33/29/2566 | 1/2 | A0 | 3 |
| CM | 마시모 암브로시니 | Massimo Ambrosini | Associazione Calcio Milan | 1977-05-29 | 후보 | 20/9/985 | 1/0 | B+ | 13 |
| CAM | 카카 | Kaká | Associazione Calcio Milan | 1982-04-22 | 주전 | 30/25/2244 | 10/5 | A+ | 2 |
| CAM | 후이 코스타 | Rui Costa | Associazione Calcio Milan | 1972-03-29 | 후보 | 27/19/1590 | 3/7 | A- | 3 |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | Associazione Calcio Milan | 1976-09-29 | 주전 | 32/30/2683 | 24/3 | S | 1 |
| ST | 욘 달 토마손 | Jon Dahl Tomasson | Associazione Calcio Milan | 1976-08-29 | 주전 | 26/17/1539 | 12/5 | A- | 11 |
| ST | 필리포 인자기 | Filippo Inzaghi | Associazione Calcio Milan | 1973-08-09 | 후보 | 14/11/951 | 3/1 | B0 | 17 |

### Associazione Sportiva Roma — 17 people · representative 3-4-1-2

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 이반 펠리촐리 | Ivan Pelizzoli | Associazione Sportiva Roma | 1980-11-18 | 주전 | 31/31/2790 | 0/0 | A+ | 3 |
| GK | 카를로 조티 | Carlo Zotti | Associazione Sportiva Roma | 1982-09-03 | 후보 | 3/3/270 | 0/0 | B- | 9 |
| CB | 왈테르 사무엘 | Walter Samuel | Associazione Sportiva Roma | 1978-03-23 | 주전 | 30/30/2698 | 1/0 | S | 1 |
| CB | 크리스티안 파누치 | Christian Panucci | Associazione Sportiva Roma | 1973-04-12 | 주전 | 24/24/2086 | 2/2 | A0 | 6 |
| CB | 조나탕 제비나 | Jonathan Zebina | Associazione Sportiva Roma | 1978-07-19 | 주전 | 23/22/1837 | 1/0 | A- | 13 |
| CB | 트라이아노스 델라스 | Traianos Dellas | Associazione Sportiva Roma | 1976-01-31 | 후보 | 14/7/843 | 0/1 | B0 | 22 |
| LB | 크리스티안 키부 | Cristian Chivu | Associazione Sportiva Roma | 1980-10-26 | 주전 | 22/22/1925 | 2/0 | A0 | 3 |
| LB | 뱅상 캉델라 | Vincent Candela | Associazione Sportiva Roma | 1973-10-24 | 후보 | 12/8/708 | 0/0 | B0 | 11 |
| RB | 아만치누 만시니 | Mancini | Associazione Sportiva Roma | 1980-08-01 | 주전 | 33/33/2968 | 8/10 | A+ | 2 |
| DM | 에메르송 | Emerson | Associazione Sportiva Roma | 1976-04-04 | 주전 | 33/33/2966 | 3/1 | A+ | 2 |
| DM | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | 1983-07-24 | 후보 | 17/4/519 | 0/0 | B- | 11 |
| CM | 올리비에 다쿠르 | Olivier Dacourt | Associazione Sportiva Roma | 1974-09-29 | 후보 | 27/27/2283 | 1/2 | A- | 4 |
| CM | 프란시스쿠 리마 | Francisco Lima | Associazione Sportiva Roma | 1971-04-17 | 주전 | 32/32/2737 | 0/0 | B+ | 7 |
| CAM | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | 1976-09-27 | 주전 | 31/31/2769 | 20/7 | S | 1 |
| ST | 안토니오 카사노 | Antonio Cassano | Associazione Sportiva Roma | 1982-07-12 | 주전 | 33/33/2690 | 14/8 | A+ | 2 |
| ST | 욘 카레우 | John Carew | Associazione Sportiva Roma | 1979-09-05 | 주전 | 19/10/871 | 6/1 | B+ | 14 |
| ST | 빈첸초 몬텔라 | Vincenzo Montella | Associazione Sportiva Roma | 1974-06-18 | 후보 | 11/5/494 | 5/0 | B- | 19 |

### Juventus Football Club — 17 people · representative 4-4-2

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 1978-01-28 | 주전 | 32/32/2880 | 0/0 | A+ | 2 |
| GK | 안토니오 키멘티 | Antonio Chimenti | Juventus Football Club | 1970-06-30 | 후보 | 2/2/180 | 0/0 | B- | 11 |
| CB | 니콜라 레그로탈리에 | Nicola Legrottaglie | Juventus Football Club | 1976-10-20 | 주전 | 21/21/1749 | 2/0 | B+ | 15 |
| CB | 파올로 몬테로 | Paolo Montero | Juventus Football Club | 1971-09-03 | 주전 | 19/17/1449 | 1/0 | B+ | 19 |
| CB | 치로 페라라 | Ciro Ferrara | Juventus Football Club | 1967-02-11 | 후보 | 17/15/1325 | 1/0 | B+ | 20 |
| LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus Football Club | 1977-02-19 | 주전 | 30/29/2586 | 1/6 | A+ | 1 |
| LB | 잔루카 페소토 | Gianluca Pessotto | Juventus Football Club | 1970-08-11 | 후보 | 18/9/807 | 0/0 | B0 | 10 |
| RB | 릴리앙 튀랑 | Lilian Thuram | Juventus Football Club | 1972-01-01 | 주전 | 23/23/2013 | 0/1 | A0 | 4 |
| RB | 알레산드로 비린델리 | Alessandro Birindelli | Juventus Football Club | 1974-11-12 | 후보 | 19/14/1312 | 0/1 | B0 | 9 |
| DM | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus Football Club | 1975-07-23 | 주전 | 24/22/1917 | 0/5 | A0 | 4 |
| CM | 스티븐 아피아 | Stephen Appiah | Juventus Football Club | 1980-12-24 | 주전 | 30/25/2251 | 1/1 | A- | 6 |
| CM | 엔초 마레스카 | Enzo Maresca | Juventus Football Club | 1980-02-10 | 후보 | 20/13/1131 | 3/4 | B+ | 12 |
| LW | 파벨 네드베트 | Pavel Nedvěd | Juventus Football Club | 1972-08-30 | 주전 | 30/28/2445 | 6/8 | A+ | 1 |
| RW | 마우로 카모라네시 | Mauro Camoranesi | Juventus Football Club | 1976-10-04 | 주전 | 26/22/1771 | 3/5 | A- | 3 |
| ST | 다비드 트레제게 | David Trezeguet | Juventus Football Club | 1977-10-15 | 주전 | 25/23/2012 | 16/4 | A0 | 4 |
| ST | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus Football Club | 1974-11-09 | 주전 | 22/18/1469 | 8/4 | A- | 10 |
| ST | 마르코 디 바이오 | Marco Di Vaio | Juventus Football Club | 1976-07-15 | 후보 | 29/15/1510 | 11/2 | B+ | 12 |

### Football Club Internazionale Milano — 17 people · representative 4-4-2

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 프란체스코 톨도 | Francesco Toldo | Football Club Internazionale Milano | 1971-12-02 | 주전 | 32/32/2880 | 0/0 | A0 | 6 |
| GK | 알베르토 폰타나 | Alberto Fontana | Football Club Internazionale Milano | 1967-01-23 | 후보 | 2/2/180 | 0/0 | B- | 10 |
| CB | 이반 코르도바 | Iván Córdoba | Football Club Internazionale Milano | 1976-08-11 | 주전 | 31/30/2665 | 1/1 | A0 | 4 |
| CB | 파비오 칸나바로 | Fabio Cannavaro | Football Club Internazionale Milano | 1973-09-13 | 주전 | 22/22/1927 | 2/1 | A- | 12 |
| CB | 다니엘레 아다니 | Daniele Adani | Football Club Internazionale Milano | 1974-07-10 | 후보 | 23/20/1785 | 1/0 | B+ | 16 |
| LB | 조반니 파스콸레 | Giovanni Pasquale | Football Club Internazionale Milano | 1982-01-05 | 주전 | 14/11/988 | 0/— | B0 | 8 |
| RB | 하비에르 사네티 | Javier Zanetti | Football Club Internazionale Milano | 1973-08-10 | 주전 | 34/34/3034 | 0/3 | A+ | 1 |
| RB | 토마스 헬베그 | Thomas Helveg | Football Club Internazionale Milano | 1971-06-24 | 후보 | 22/13/1276 | 0/1 | B+ | 8 |
| DM | 크리스티아노 사네티 | Cristiano Zanetti | Football Club Internazionale Milano | 1977-04-10 | 주전 | 19/19/1580 | 1/1 | B+ | 6 |
| CM | 엠레 벨뢰졸루 | Emre Belözoğlu | Football Club Internazionale Milano | 1980-09-07 | 주전 | 21/15/1367 | 0/3 | B+ | 11 |
| CM | 요르고스 카라구니스 | Giorgos Karagounis | Football Club Internazionale Milano | 1977-03-06 | 후보 | 9/2/329 | 0/0 | C+ | 15 |
| CAM | 알바로 레코바 | Álvaro Recoba | Football Club Internazionale Milano | 1976-03-17 | 후보 | 19/12/921 | 8/5 | A- | 5 |
| LW | 킬리 곤살레스 | Kily González | Football Club Internazionale Milano | 1974-08-04 | 주전 | 21/17/1481 | 0/3 | B+ | 3 |
| RW | 앤디 판데르메이더 | Andy van der Meyde | Football Club Internazionale Milano | 1979-09-30 | 주전 | 14/11/758 | 0/— | B+ | 5 |
| ST | 아드리아누 | Adriano | Football Club Internazionale Milano | 1982-02-17 | 주전 | 16/13/1187 | 9/— | A0 | 5 |
| ST | 크리스티안 비에리 | Christian Vieri | Football Club Internazionale Milano | 1973-07-12 | 주전 | 22/18/1651 | 13/1 | A- | 9 |
| ST | 오바페미 마르틴스 | Obafemi Martins | Football Club Internazionale Milano | 1984-10-28 | 후보 | 24/11/1291 | 7/6 | B+ | 13 |

### Parma Associazione Calcio — 14 people · representative 4-2-3-1

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 세바스티앵 프레이 | Sébastien Frey | Parma Associazione Calcio | 1980-03-18 | 주전 | 33/33/2970 | 0/0 | A0 | 5 |
| CB | 마테오 페라리 | Matteo Ferrari | Parma Associazione Calcio | 1979-12-05 | 주전 | 33/33/2970 | 1/0 | A- | 7 |
| CB | 마르첼로 카스텔리니 | Marcello Castellini | Parma Associazione Calcio | 1973-01-02 | 주전 | 32/32/2857 | 0/1 | A- | 8 |
| CB | 파올로 칸나바로 | Paolo Cannavaro | Parma Associazione Calcio | 1981-06-26 | 후보 | 16/14/1330 | 0/0 | B+ | 21 |
| LB | 안토니 셰리치 | Anthony Šerić | Parma Associazione Calcio | 1979-01-15 | 주전 | 16/12/998 | 0/1 | B0 | 7 |
| RB | 다니엘레 보네라 | Daniele Bonera | Parma Associazione Calcio | 1981-05-31 | 주전 | 24/24/2059 | 0/0 | A- | 5 |
| DM | 시모네 바로네 | Simone Barone | Parma Associazione Calcio | 1978-04-30 | 주전 | 33/33/2926 | 3/1 | A0 | 3 |
| DM | 마누엘레 블라시 | Manuele Blasi | Parma Associazione Calcio | 1980-08-17 | 후보 | 12/12/1058 | 0/0 | B0 | 10 |
| CM | 마르코 도나델 | Marco Donadel | Parma Associazione Calcio | 1983-04-21 | 주전 | 23/19/1733 | 0/1 | B+ | 8 |
| CAM | 도메니코 모르페오 | Domenico Morfeo | Parma Associazione Calcio | 1976-01-16 | 주전 | 23/16/1483 | 4/6 | A- | 4 |
| LW | 마크 브레시아노 | Mark Bresciano | Parma Associazione Calcio | 1980-02-11 | 주전 | 33/32/2425 | 8/5 | A0 | 2 |
| RW | 마르코 마르키오니 | Marco Marchionni | Parma Associazione Calcio | 1980-07-22 | 주전 | 32/30/2499 | 5/8 | A0 | 2 |
| ST | 알베르토 질라르디노 | Alberto Gilardino | Parma Associazione Calcio | 1982-07-05 | 주전 | 34/27/2491 | 23/4 | A+ | 3 |
| ST | 베니토 카르보네 | Benito Carbone | Parma Associazione Calcio | 1971-08-14 | 후보 | 19/12/1043 | 4/5 | B0 | 16 |

### Società Sportiva Lazio — 19 people · representative 4-4-2

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 안젤로 페루치 | Angelo Peruzzi | Società Sportiva Lazio | 1970-02-16 | 주전 | 27/27/2350 | 0/0 | A0 | 7 |
| GK | 마테오 세레니 | Matteo Sereni | Società Sportiva Lazio | 1975-02-11 | 후보 | 9/7/710 | 0/0 | B- | 8 |
| CB | 야프 스탐 | Jaap Stam | Società Sportiva Lazio | 1972-07-17 | 주전 | 29/29/2459 | 2/0 | A0 | 5 |
| CB | 시니샤 미하일로비치 | Siniša Mihajlović | Società Sportiva Lazio | 1969-02-20 | 주전 | 25/25/2095 | 1/3 | A- | 11 |
| CB | 페르난두 쿠투 | Fernando Couto | Società Sportiva Lazio | 1969-08-02 | 후보 | 22/19/1598 | 3/— | B+ | 17 |
| LB | 주세페 파발리 | Giuseppe Favalli | Società Sportiva Lazio | 1972-01-08 | 주전 | 29/28/2334 | 0/1 | A- | 4 |
| LB | 루차노 자우리 | Luciano Zauri | Società Sportiva Lazio | 1978-01-20 | 후보 | 19/12/1291 | 3/— | B0 | 6 |
| RB | 마시모 오도 | Massimo Oddo | Società Sportiva Lazio | 1976-06-14 | 주전 | 31/22/2312 | 1/3 | A- | 6 |
| RB | 파올로 네그로 | Paolo Negro | Società Sportiva Lazio | 1972-04-16 | 후보 | 13/7/806 | 0/— | B0 | 10 |
| DM | 파비오 리베라니 | Fabio Liverani | Società Sportiva Lazio | 1976-04-29 | 주전 | 26/21/1983 | 2/0 | B+ | 5 |
| DM | 줄리아노 잔니케다 | Giuliano Giannichedda | Società Sportiva Lazio | 1974-09-21 | 후보 | 21/17/1540 | 1/— | B0 | 7 |
| CM | 우스만 다보 | Ousmane Dabo | Società Sportiva Lazio | 1977-02-08 | 주전 | 19/17/1319 | 0/— | B+ | 10 |
| CM | 데메트리오 알베르티니 | Demetrio Albertini | Società Sportiva Lazio | 1971-08-23 | 후보 | 23/15/1235 | 2/— | B0 | 14 |
| LW | 세자르 | César | Società Sportiva Lazio | 1974-10-24 | 주전 | 14/11/969 | —/— | B0 | 4 |
| RW | 스테파노 피오레 | Stefano Fiore | Società Sportiva Lazio | 1975-04-17 | 주전 | 32/30/2704 | 8/5 | A0 | 1 |
| RW | 데얀 스탄코비치 | Dejan Stanković | Società Sportiva Lazio | 1978-09-11 | 후보 | 15/15/1309 | 2/— | B+ | 4 |
| ST | 베르나르도 코라디 | Bernardo Corradi | Società Sportiva Lazio | 1976-03-30 | 주전 | 32/27/2546 | 9/6 | A- | 6 |
| ST | 클라우디오 로페스 | Claudio López | Società Sportiva Lazio | 1974-07-17 | 주전 | 27/21/1740 | 4/— | B0 | 15 |
| ST | 시모네 인차기 | Simone Inzaghi | Società Sportiva Lazio | 1976-04-05 | 후보 | 24/9/1019 | —/— | B0 | 18 |

### Udinese Calcio — 16 people · representative 3-5-2

| Position | 한글명 | 원어명 | 소속 구단 원어명 | DOB | 주전/후보 | Apps/starts/min | G/A | Tier | Pos rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio | 1977-03-26 | 주전 | 34/34/3060 | 0/0 | A0 | 4 |
| CB | 페르 크뢸드루프 | Per Krøldrup | Udinese Calcio | 1979-07-31 | 주전 | 30/30/2698 | 2/0 | A- | 9 |
| CB | 발레리오 베르토토 | Valerio Bertotto | Udinese Calcio | 1973-01-15 | 주전 | 29/29/2570 | 0/1 | A- | 10 |
| CB | 로베르토 센시니 | Roberto Sensini | Udinese Calcio | 1966-10-12 | 주전 | 25/25/2199 | 2/2 | B+ | 14 |
| CB | 알레산드로 피에리니 | Alessandro Pierini | Udinese Calcio | 1973-03-22 | 후보 | 19/9/966 | 0/0 | B- | 23 |
| LB | 마레크 얀쿨로프스키 | Marek Jankulovski | Udinese Calcio | 1977-05-09 | 주전 | 32/32/2838 | 6/5 | A0 | 2 |
| LB | 미르코 피에리 | Mirko Pieri | Udinese Calcio | 1978-07-24 | 후보 | 13/9/872 | 0/1 | B0 | 9 |
| RB | 알베르투 발렌칭 | Alberto Valentim | Udinese Calcio | 1975-03-22 | 주전 | 21/17/1346 | 0/1 | B+ | 7 |
| DM | 미켈레 파치엔차 | Michele Pazienza | Udinese Calcio | 1982-08-05 | 후보 | 26/16/1402 | 0/0 | B0 | 8 |
| DM | 다비드 피사로 | David Pizarro | Udinese Calcio | 1979-09-09 | 주전 | 13/13/1124 | 3/3 | B0 | 9 |
| CM | 마르틴 예르겐센 | Martin Jørgensen | Udinese Calcio | 1975-10-06 | 주전 | 34/33/2965 | 3/9 | A0 | 2 |
| CM | 잠피에로 핀치 | Giampiero Pinzi | Udinese Calcio | 1981-03-11 | 주전 | 27/27/2248 | 2/2 | A- | 5 |
| CM | 설리 문타리 | Sulley Muntari | Udinese Calcio | 1984-07-27 | 후보 | 23/17/1476 | 0/0 | B+ | 9 |
| ST | 디노 파바 | Dino Fava | Udinese Calcio | 1977-03-16 | 주전 | 31/26/2345 | 12/3 | A- | 7 |
| ST | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Udinese Calcio | 1979-11-21 | 주전 | 29/22/1910 | 10/4 | A- | 8 |
| ST | 카르스텐 양커 | Carsten Jancker | Udinese Calcio | 1974-08-28 | 후보 | 15/2/302 | 1/0 | C+ | 20 |

## 5. Integrated all-7-club position rankings

Rank = 1..N for each site position. Tiers form the primary ordering; current starts/playing time is a secondary draft tiebreak. This numerical comparison is **NOT independent 3-season finalized qualitative peer ranking**; every tier and rank can change after primary game evidence is reviewed.

### GK: 12 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 지다 | Dida | Associazione Calcio Milan | S | 32/32 |
| 2 | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | A+ | 32/32 |
| 3 | 이반 펠리촐리 | Ivan Pelizzoli | Associazione Sportiva Roma | A+ | 31/31 |
| 4 | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio | A0 | 34/34 |
| 5 | 세바스티앵 프레이 | Sébastien Frey | Parma Associazione Calcio | A0 | 33/33 |
| 6 | 프란체스코 톨도 | Francesco Toldo | Football Club Internazionale Milano | A0 | 32/32 |
| 7 | 안젤로 페루치 | Angelo Peruzzi | Società Sportiva Lazio | A0 | 27/27 |
| 8 | 마테오 세레니 | Matteo Sereni | Società Sportiva Lazio | B- | 9/7 |
| 9 | 카를로 조티 | Carlo Zotti | Associazione Sportiva Roma | B- | 3/3 |
| 10 | 알베르토 폰타나 | Alberto Fontana | Football Club Internazionale Milano | B- | 2/2 |
| 11 | 안토니오 키멘티 | Antonio Chimenti | Juventus Football Club | B- | 2/2 |
| 12 | 크리스티안 아비아티 | Christian Abbiati | Associazione Calcio Milan | B- | 2/2 |

### CB: 23 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 왈테르 사무엘 | Walter Samuel | Associazione Sportiva Roma | S | 30/30 |
| 2 | 파올로 말디니 | Paolo Maldini | Associazione Calcio Milan | A+ | 30/30 |
| 3 | 알레산드로 네스타 | Alessandro Nesta | Associazione Calcio Milan | A+ | 26/26 |
| 4 | 이반 코르도바 | Iván Córdoba | Football Club Internazionale Milano | A0 | 31/30 |
| 5 | 야프 스탐 | Jaap Stam | Società Sportiva Lazio | A0 | 29/29 |
| 6 | 크리스티안 파누치 | Christian Panucci | Associazione Sportiva Roma | A0 | 24/24 |
| 7 | 마테오 페라리 | Matteo Ferrari | Parma Associazione Calcio | A- | 33/33 |
| 8 | 마르첼로 카스텔리니 | Marcello Castellini | Parma Associazione Calcio | A- | 32/32 |
| 9 | 페르 크뢸드루프 | Per Krøldrup | Udinese Calcio | A- | 30/30 |
| 10 | 발레리오 베르토토 | Valerio Bertotto | Udinese Calcio | A- | 29/29 |
| 11 | 시니샤 미하일로비치 | Siniša Mihajlović | Società Sportiva Lazio | A- | 25/25 |
| 12 | 파비오 칸나바로 | Fabio Cannavaro | Football Club Internazionale Milano | A- | 22/22 |
| 13 | 조나탕 제비나 | Jonathan Zebina | Associazione Sportiva Roma | A- | 23/22 |
| 14 | 로베르토 센시니 | Roberto Sensini | Udinese Calcio | B+ | 25/25 |
| 15 | 니콜라 레그로탈리에 | Nicola Legrottaglie | Juventus Football Club | B+ | 21/21 |
| 16 | 다니엘레 아다니 | Daniele Adani | Football Club Internazionale Milano | B+ | 23/20 |
| 17 | 페르난두 쿠투 | Fernando Couto | Società Sportiva Lazio | B+ | 22/19 |
| 18 | 알레산드로 코스타쿠르타 | Alessandro Costacurta | Associazione Calcio Milan | B+ | 22/18 |
| 19 | 파올로 몬테로 | Paolo Montero | Juventus Football Club | B+ | 19/17 |
| 20 | 치로 페라라 | Ciro Ferrara | Juventus Football Club | B+ | 17/15 |
| 21 | 파올로 칸나바로 | Paolo Cannavaro | Parma Associazione Calcio | B+ | 16/14 |
| 22 | 트라이아노스 델라스 | Traianos Dellas | Associazione Sportiva Roma | B0 | 14/7 |
| 23 | 알레산드로 피에리니 | Alessandro Pierini | Udinese Calcio | B- | 19/9 |

### LB: 12 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus Football Club | A+ | 30/29 |
| 2 | 마레크 얀쿨로프스키 | Marek Jankulovski | Udinese Calcio | A0 | 32/32 |
| 3 | 크리스티안 키부 | Cristian Chivu | Associazione Sportiva Roma | A0 | 22/22 |
| 4 | 주세페 파발리 | Giuseppe Favalli | Società Sportiva Lazio | A- | 29/28 |
| 5 | 주세페 판카로 | Giuseppe Pancaro | Associazione Calcio Milan | A- | 21/17 |
| 6 | 루차노 자우리 | Luciano Zauri | Società Sportiva Lazio | B0 | 19/12 |
| 7 | 안토니 셰리치 | Anthony Šerić | Parma Associazione Calcio | B0 | 16/12 |
| 8 | 조반니 파스콸레 | Giovanni Pasquale | Football Club Internazionale Milano | B0 | 14/11 |
| 9 | 미르코 피에리 | Mirko Pieri | Udinese Calcio | B0 | 13/9 |
| 10 | 잔루카 페소토 | Gianluca Pessotto | Juventus Football Club | B0 | 18/9 |
| 11 | 뱅상 캉델라 | Vincent Candela | Associazione Sportiva Roma | B0 | 12/8 |
| 12 | 카하 칼라제 | Kakha Kaladze | Associazione Calcio Milan | B- | 6/5 |

### RB: 11 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 하비에르 사네티 | Javier Zanetti | Football Club Internazionale Milano | A+ | 34/34 |
| 2 | 아만치누 만시니 | Mancini | Associazione Sportiva Roma | A+ | 33/33 |
| 3 | 카푸 | Cafú | Associazione Calcio Milan | A+ | 28/26 |
| 4 | 릴리앙 튀랑 | Lilian Thuram | Juventus Football Club | A0 | 23/23 |
| 5 | 다니엘레 보네라 | Daniele Bonera | Parma Associazione Calcio | A- | 24/24 |
| 6 | 마시모 오도 | Massimo Oddo | Società Sportiva Lazio | A- | 31/22 |
| 7 | 알베르투 발렌칭 | Alberto Valentim | Udinese Calcio | B+ | 21/17 |
| 8 | 토마스 헬베그 | Thomas Helveg | Football Club Internazionale Milano | B+ | 22/13 |
| 9 | 알레산드로 비린델리 | Alessandro Birindelli | Juventus Football Club | B0 | 19/14 |
| 10 | 파올로 네그로 | Paolo Negro | Società Sportiva Lazio | B0 | 13/7 |
| 11 | 다리오 시미치 | Dario Šimić | Associazione Calcio Milan | B0 | 10/6 |

### DM: 11 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 안드레아 피를로 | Andrea Pirlo | Associazione Calcio Milan | S | 32/31 |
| 2 | 에메르송 | Emerson | Associazione Sportiva Roma | A+ | 33/33 |
| 3 | 시모네 바로네 | Simone Barone | Parma Associazione Calcio | A0 | 33/33 |
| 4 | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus Football Club | A0 | 24/22 |
| 5 | 파비오 리베라니 | Fabio Liverani | Società Sportiva Lazio | B+ | 26/21 |
| 6 | 크리스티아노 사네티 | Cristiano Zanetti | Football Club Internazionale Milano | B+ | 19/19 |
| 7 | 줄리아노 잔니케다 | Giuliano Giannichedda | Società Sportiva Lazio | B0 | 21/17 |
| 8 | 미켈레 파치엔차 | Michele Pazienza | Udinese Calcio | B0 | 26/16 |
| 9 | 다비드 피사로 | David Pizarro | Udinese Calcio | B0 | 13/13 |
| 10 | 마누엘레 블라시 | Manuele Blasi | Parma Associazione Calcio | B0 | 12/12 |
| 11 | 다니엘레 데 로시 | Daniele De Rossi | Associazione Sportiva Roma | B- | 17/4 |

### CM: 15 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 클라렌스 세이도르프 | Clarence Seedorf | Associazione Calcio Milan | A+ | 29/26 |
| 2 | 마르틴 예르겐센 | Martin Jørgensen | Udinese Calcio | A0 | 34/33 |
| 3 | 젠나로 가투소 | Gennaro Gattuso | Associazione Calcio Milan | A0 | 33/29 |
| 4 | 올리비에 다쿠르 | Olivier Dacourt | Associazione Sportiva Roma | A- | 27/27 |
| 5 | 잠피에로 핀치 | Giampiero Pinzi | Udinese Calcio | A- | 27/27 |
| 6 | 스티븐 아피아 | Stephen Appiah | Juventus Football Club | A- | 30/25 |
| 7 | 프란시스쿠 리마 | Francisco Lima | Associazione Sportiva Roma | B+ | 32/32 |
| 8 | 마르코 도나델 | Marco Donadel | Parma Associazione Calcio | B+ | 23/19 |
| 9 | 설리 문타리 | Sulley Muntari | Udinese Calcio | B+ | 23/17 |
| 10 | 우스만 다보 | Ousmane Dabo | Società Sportiva Lazio | B+ | 19/17 |
| 11 | 엠레 벨뢰졸루 | Emre Belözoğlu | Football Club Internazionale Milano | B+ | 21/15 |
| 12 | 엔초 마레스카 | Enzo Maresca | Juventus Football Club | B+ | 20/13 |
| 13 | 마시모 암브로시니 | Massimo Ambrosini | Associazione Calcio Milan | B+ | 20/9 |
| 14 | 데메트리오 알베르티니 | Demetrio Albertini | Società Sportiva Lazio | B0 | 23/15 |
| 15 | 요르고스 카라구니스 | Giorgos Karagounis | Football Club Internazionale Milano | C+ | 9/2 |

### CAM: 5 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | S | 31/31 |
| 2 | 카카 | Kaká | Associazione Calcio Milan | A+ | 30/25 |
| 3 | 후이 코스타 | Rui Costa | Associazione Calcio Milan | A- | 27/19 |
| 4 | 도메니코 모르페오 | Domenico Morfeo | Parma Associazione Calcio | A- | 23/16 |
| 5 | 알바로 레코바 | Álvaro Recoba | Football Club Internazionale Milano | A- | 19/12 |

### LW: 4 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 파벨 네드베트 | Pavel Nedvěd | Juventus Football Club | A+ | 30/28 |
| 2 | 마크 브레시아노 | Mark Bresciano | Parma Associazione Calcio | A0 | 33/32 |
| 3 | 킬리 곤살레스 | Kily González | Football Club Internazionale Milano | B+ | 21/17 |
| 4 | 세자르 | César | Società Sportiva Lazio | B0 | 14/11 |

### RW: 5 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 스테파노 피오레 | Stefano Fiore | Società Sportiva Lazio | A0 | 32/30 |
| 2 | 마르코 마르키오니 | Marco Marchionni | Parma Associazione Calcio | A0 | 32/30 |
| 3 | 마우로 카모라네시 | Mauro Camoranesi | Juventus Football Club | A- | 26/22 |
| 4 | 데얀 스탄코비치 | Dejan Stanković | Società Sportiva Lazio | B+ | 15/15 |
| 5 | 앤디 판데르메이더 | Andy van der Meyde | Football Club Internazionale Milano | B+ | 14/11 |

### ST: 20 nominated players

| Rank | 한글 이름 | Original | Club | Tier | 2003-04 apps / starts |
|---:|---|---|---|---|---|
| 1 | 안드리 셰우첸코 | Andriy Shevchenko | Associazione Calcio Milan | S | 32/30 |
| 2 | 안토니오 카사노 | Antonio Cassano | Associazione Sportiva Roma | A+ | 33/33 |
| 3 | 알베르토 질라르디노 | Alberto Gilardino | Parma Associazione Calcio | A+ | 34/27 |
| 4 | 다비드 트레제게 | David Trezeguet | Juventus Football Club | A0 | 25/23 |
| 5 | 아드리아누 | Adriano | Football Club Internazionale Milano | A0 | 16/13 |
| 6 | 베르나르도 코라디 | Bernardo Corradi | Società Sportiva Lazio | A- | 32/27 |
| 7 | 디노 파바 | Dino Fava | Udinese Calcio | A- | 31/26 |
| 8 | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Udinese Calcio | A- | 29/22 |
| 9 | 크리스티안 비에리 | Christian Vieri | Football Club Internazionale Milano | A- | 22/18 |
| 10 | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus Football Club | A- | 22/18 |
| 11 | 욘 달 토마손 | Jon Dahl Tomasson | Associazione Calcio Milan | A- | 26/17 |
| 12 | 마르코 디 바이오 | Marco Di Vaio | Juventus Football Club | B+ | 29/15 |
| 13 | 오바페미 마르틴스 | Obafemi Martins | Football Club Internazionale Milano | B+ | 24/11 |
| 14 | 욘 카레우 | John Carew | Associazione Sportiva Roma | B+ | 19/10 |
| 15 | 클라우디오 로페스 | Claudio López | Società Sportiva Lazio | B0 | 27/21 |
| 16 | 베니토 카르보네 | Benito Carbone | Parma Associazione Calcio | B0 | 19/12 |
| 17 | 필리포 인자기 | Filippo Inzaghi | Associazione Calcio Milan | B0 | 14/11 |
| 18 | 시모네 인차기 | Simone Inzaghi | Società Sportiva Lazio | B0 | 24/9 |
| 19 | 빈첸초 몬텔라 | Vincenzo Montella | Associazione Sportiva Roma | B- | 11/5 |
| 20 | 카르스텐 양커 | Carsten Jancker | Udinese Calcio | C+ | 15/2 |

## 6. World Class — S and A+ (complete 19 nominees)

| Grade | Position | Korean name | Original | Original team | Born | 2003-04 apps / goals / assists |
|---|---|---|---|---|---|---|
| S | GK | 지다 | Dida | Associazione Calcio Milan | 1973-10-07 | 32/0/0 |
| S | CB | 왈테르 사무엘 | Walter Samuel | Associazione Sportiva Roma | 1978-03-23 | 30/1/0 |
| S | DM | 안드레아 피를로 | Andrea Pirlo | Associazione Calcio Milan | 1979-05-19 | 32/6/7 |
| S | CAM | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | 1976-09-27 | 31/20/7 |
| S | ST | 안드리 셰우첸코 | Andriy Shevchenko | Associazione Calcio Milan | 1976-09-29 | 32/24/3 |
| A+ | GK | 이반 펠리촐리 | Ivan Pelizzoli | Associazione Sportiva Roma | 1980-11-18 | 31/0/0 |
| A+ | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club | 1978-01-28 | 32/0/0 |
| A+ | CB | 파올로 말디니 | Paolo Maldini | Associazione Calcio Milan | 1968-06-26 | 30/0/0 |
| A+ | CB | 알레산드로 네스타 | Alessandro Nesta | Associazione Calcio Milan | 1976-03-19 | 26/0/1 |
| A+ | LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus Football Club | 1977-02-19 | 30/1/6 |
| A+ | RB | 카푸 | Cafú | Associazione Calcio Milan | 1970-06-07 | 28/1/5 |
| A+ | RB | 아만치누 만시니 | Mancini | Associazione Sportiva Roma | 1980-08-01 | 33/8/10 |
| A+ | RB | 하비에르 사네티 | Javier Zanetti | Football Club Internazionale Milano | 1973-08-10 | 34/0/3 |
| A+ | DM | 에메르송 | Emerson | Associazione Sportiva Roma | 1976-04-04 | 33/3/1 |
| A+ | CM | 클라렌스 세이도르프 | Clarence Seedorf | Associazione Calcio Milan | 1976-04-01 | 29/3/6 |
| A+ | CAM | 카카 | Kaká | Associazione Calcio Milan | 1982-04-22 | 30/10/5 |
| A+ | LW | 파벨 네드베트 | Pavel Nedvěd | Juventus Football Club | 1972-08-30 | 30/6/8 |
| A+ | ST | 안토니오 카사노 | Antonio Cassano | Associazione Sportiva Roma | 1982-07-12 | 33/14/8 |
| A+ | ST | 알베르토 질라르디노 | Alberto Gilardino | Parma Associazione Calcio | 1982-07-05 | 34/23/4 |

## 7. League Top Class — S to A- (complete 62 nominees)

| Grade | Pos | Korean name | Original name | Original team |
|---|---|---|---|---|
| S | GK | 지다 | Dida | Associazione Calcio Milan |
| S | CB | 왈테르 사무엘 | Walter Samuel | Associazione Sportiva Roma |
| S | DM | 안드레아 피를로 | Andrea Pirlo | Associazione Calcio Milan |
| S | CAM | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma |
| S | ST | 안드리 셰우첸코 | Andriy Shevchenko | Associazione Calcio Milan |
| A+ | GK | 이반 펠리촐리 | Ivan Pelizzoli | Associazione Sportiva Roma |
| A+ | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus Football Club |
| A+ | CB | 파올로 말디니 | Paolo Maldini | Associazione Calcio Milan |
| A+ | CB | 알레산드로 네스타 | Alessandro Nesta | Associazione Calcio Milan |
| A+ | LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus Football Club |
| A+ | RB | 카푸 | Cafú | Associazione Calcio Milan |
| A+ | RB | 아만치누 만시니 | Mancini | Associazione Sportiva Roma |
| A+ | RB | 하비에르 사네티 | Javier Zanetti | Football Club Internazionale Milano |
| A+ | DM | 에메르송 | Emerson | Associazione Sportiva Roma |
| A+ | CM | 클라렌스 세이도르프 | Clarence Seedorf | Associazione Calcio Milan |
| A+ | CAM | 카카 | Kaká | Associazione Calcio Milan |
| A+ | LW | 파벨 네드베트 | Pavel Nedvěd | Juventus Football Club |
| A+ | ST | 안토니오 카사노 | Antonio Cassano | Associazione Sportiva Roma |
| A+ | ST | 알베르토 질라르디노 | Alberto Gilardino | Parma Associazione Calcio |
| A0 | GK | 프란체스코 톨도 | Francesco Toldo | Football Club Internazionale Milano |
| A0 | GK | 세바스티앵 프레이 | Sébastien Frey | Parma Associazione Calcio |
| A0 | GK | 안젤로 페루치 | Angelo Peruzzi | Società Sportiva Lazio |
| A0 | GK | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio |
| A0 | CB | 크리스티안 파누치 | Christian Panucci | Associazione Sportiva Roma |
| A0 | CB | 이반 코르도바 | Iván Córdoba | Football Club Internazionale Milano |
| A0 | CB | 야프 스탐 | Jaap Stam | Società Sportiva Lazio |
| A0 | LB | 크리스티안 키부 | Cristian Chivu | Associazione Sportiva Roma |
| A0 | LB | 마레크 얀쿨로프스키 | Marek Jankulovski | Udinese Calcio |
| A0 | RB | 릴리앙 튀랑 | Lilian Thuram | Juventus Football Club |
| A0 | DM | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus Football Club |
| A0 | DM | 시모네 바로네 | Simone Barone | Parma Associazione Calcio |
| A0 | CM | 젠나로 가투소 | Gennaro Gattuso | Associazione Calcio Milan |
| A0 | CM | 마르틴 예르겐센 | Martin Jørgensen | Udinese Calcio |
| A0 | LW | 마크 브레시아노 | Mark Bresciano | Parma Associazione Calcio |
| A0 | RW | 마르코 마르키오니 | Marco Marchionni | Parma Associazione Calcio |
| A0 | RW | 스테파노 피오레 | Stefano Fiore | Società Sportiva Lazio |
| A0 | ST | 다비드 트레제게 | David Trezeguet | Juventus Football Club |
| A0 | ST | 아드리아누 | Adriano | Football Club Internazionale Milano |
| A- | CB | 조나탕 제비나 | Jonathan Zebina | Associazione Sportiva Roma |
| A- | CB | 파비오 칸나바로 | Fabio Cannavaro | Football Club Internazionale Milano |
| A- | CB | 마테오 페라리 | Matteo Ferrari | Parma Associazione Calcio |
| A- | CB | 마르첼로 카스텔리니 | Marcello Castellini | Parma Associazione Calcio |
| A- | CB | 시니샤 미하일로비치 | Siniša Mihajlović | Società Sportiva Lazio |
| A- | CB | 페르 크뢸드루프 | Per Krøldrup | Udinese Calcio |
| A- | CB | 발레리오 베르토토 | Valerio Bertotto | Udinese Calcio |
| A- | LB | 주세페 판카로 | Giuseppe Pancaro | Associazione Calcio Milan |
| A- | LB | 주세페 파발리 | Giuseppe Favalli | Società Sportiva Lazio |
| A- | RB | 다니엘레 보네라 | Daniele Bonera | Parma Associazione Calcio |
| A- | RB | 마시모 오도 | Massimo Oddo | Società Sportiva Lazio |
| A- | CM | 올리비에 다쿠르 | Olivier Dacourt | Associazione Sportiva Roma |
| A- | CM | 스티븐 아피아 | Stephen Appiah | Juventus Football Club |
| A- | CM | 잠피에로 핀치 | Giampiero Pinzi | Udinese Calcio |
| A- | CAM | 후이 코스타 | Rui Costa | Associazione Calcio Milan |
| A- | CAM | 알바로 레코바 | Álvaro Recoba | Football Club Internazionale Milano |
| A- | CAM | 도메니코 모르페오 | Domenico Morfeo | Parma Associazione Calcio |
| A- | RW | 마우로 카모라네시 | Mauro Camoranesi | Juventus Football Club |
| A- | ST | 욘 달 토마손 | Jon Dahl Tomasson | Associazione Calcio Milan |
| A- | ST | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus Football Club |
| A- | ST | 크리스티안 비에리 | Christian Vieri | Football Club Internazionale Milano |
| A- | ST | 베르나르도 코라디 | Bernardo Corradi | Società Sportiva Lazio |
| A- | ST | 디노 파바 | Dino Fava | Udinese Calcio |
| A- | ST | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Udinese Calcio |

## 8. Best XI — period 4-3-1-2, PROPOSED / user unapproved

2003-04 Carlo Ancelotti Milan 4-3-1-2 is an evidenced **period representative** and supported in existing `assets/app.js` `slots4312` UI. The actual **most-used formation across all clubs' 306 league matches has not been quantitatively determined**. No team-trophy weight.

| Slot | Korean | Original | Club | Grade | Individual selection rationale |
|---|---|---|---|---|---|
| GK | 지다 | Dida | Associazione Calcio Milan | S | Current-year 2003-04 32 league starts, 84.0% saves on 125 shots on target, 15 clean sheets; high individual save quality, only 2002-03 continuous senior starts with Milan. Ratings omit title bonus. |
| CB | 왈테르 사무엘 | Walter Samuel | Associazione Sportiva Roma | S | Roma 2003-04 30 league starts and consistent central defensive organizer in low-concession three-back; preceding 2001-02 30 starts and 2002-03 31 starts; current defending and three-year reliability, not team table position. |
| CB | 알레산드로 네스타 | Alessandro Nesta | Associazione Calcio Milan | A+ | Milan 2003-04 centre back 26 starts, powerful cover and defensive interventions; 2002-03 29 Milan starts and Lazio 2001-02 25 starts, sustained individually elite, current fewer games than Samuel/Maldini. |
| LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus Football Club | A+ | 2003-04 league 30 appearances/29 starts/2586 minutes, 1 goals, 6 assists in LB, individual role/availability/current year weighted highest; previous two seasons linked only when name-and-record matches; full qualitative peer comparison pending and no team/trophy tier bonus. |
| RB | 카푸 | Cafú | Associazione Calcio Milan | A+ | Milan 2003-04 right-back 28 apps/26 starts, 1 goal and 5 assists for overlap/creation; prior 2001-02 27 Roma apps and 2002-03 26, established two-way wingback now fullback. |
| DM | 안드레아 피를로 | Andrea Pirlo | Associazione Calcio Milan | S | Deep-lying playmaker 2003-04 32 Serie A apps/31 starts, 6 goals/7 assists; 2002-03 27/9g6a and 2001-02 19/2g3a as CAM. Transformation now sustained two seasons as elite creator, no club Scudetto bonus. |
| CM | 클라렌스 세이도르프 | Clarence Seedorf | Associazione Calcio Milan | A+ | 2003-04 Milan 29 apps/26 starts, 3 goals and 6 assists as a left/central inside midfield playmaker; 2002-03 28/23 and 2001-02 Inter 20/17; sustained tactical midfield adaptability. |
| CM | 젠나로 가투소 | Gennaro Gattuso | Associazione Calcio Milan | A0 | 2003-04 league 33 appearances/29 starts/2566 minutes, 1 goals, 2 assists in CM, individual role/availability/current year weighted highest; previous two seasons linked only when name-and-record matches; full qualitative peer comparison pending and no team/trophy tier bonus. |
| CAM | 프란체스코 토티 | Francesco Totti | Associazione Sportiva Roma | S | 2003-04 31 Serie A league appearances and 20 goals plus 7 assists as Roma trequartista; 2002-03 24/14g6a, 2001-02 24/8g5a; sustained exceptional chance creation and scoring without 2nd-place bonus. |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | Associazione Calcio Milan | S | Current 2003-04 32 Serie A matches 24 goals and 3 assists, league Golden Boot; previous 2001-02 29 games and 2002-03 23 games lower goal yield with injury spells; decisive own finishing as current season highest weight, no title bonus. |
| ST | 알베르토 질라르디노 | Alberto Gilardino | Parma Associazione Calcio | A+ | Parma striker 2003-04 all 34 matches and 23 league goals with 4 assists, exceptional finishing breakout from 2002-03 24 apps/4g and 2001-02 Brescia youth; A+ rather than S because high-level tenure short. |

### Same-position rivals requiring final comparison

- **GK Dida** 32 starts 15 clean sheets and 84% save rate over **Ivan Pelizzoli** Roma 31 starts 19 clean sheets (Roma overall 19 conceded, but not equal to player-only defensive contribution), **Buffon** 32, **Frey** 33. Dida current save quality drives nomination; save/source context must be reconciled.
- **CB Samuel & Nesta** 30 and 26 starts versus Maldini 30 and other defenders. Milan/AS Roma trophies or table rank are NOT individual bonuses. League dominant position check needed for 3-back vs four-back match roles.
- **Fullbacks Zambrotta LB, Cafú RB** chosen for side-specific historical roles, comparing Chivu, Mancini right wingback (33 games, 8g10a), Oddo and Jankulovski left 6g5a. Site mapping fullback/wingback remains tactical-provisional.
- **Midfield Pirlo DM**, **Seedorf and Gattuso CM** chosen to form a historically coherent 4-3-1-2. Emerson (33 Roma DM), Jørgensen (34 Udinese CM, 9 assists), Fiore and Appiah serious performance rivals; compare own defensive/creative actions without club success.
- **CAM Totti** 31/20g7a versus young Milan Kaká 30/10g5a and Rui Costa, Recoba. Previous three-year Totti role sustains the selected draft, not Roma's finishing place.
- **ST Shevchenko** 32/24g and **Gilardino** 34/23g4a, current high goal production, over 2003-04 Cassano33/14g8a, Trezeguet25/16g4a, Inter Adriano combined 25 apps17g across Parma/Inter, etc. Gilardino's breakout 2002-03 24 league games 4 goals means shorter elite sample, thus A+ rather than automatic S.

## 9. S–A- players' 3-season evidence links & numeric holes

Personal historical **club / league games / league goals** for 2001-02, 2002-03 and 2003-04. NULL shown as — and means not verified, never zero. Previously archived DRAFT stats are weaker than independent primary match proof. All 62 tiers must undergo individual three-year qualitative performance review.

| Tier | Player | 2001-02 club / apps / goals | 2002-03 club / apps / goals | 2003-04 club / apps / goals | Both previous seasons numeric? |
|---|---|---|---|---|---|
| S | 지다 | — / — / — | AC Milan / 30 / 0 | Associazione Calcio Milan / 32 / 0 | No |
| S | 왈테르 사무엘 | AS Roma / 30 / — | AS Roma / 31 / 2 | Associazione Sportiva Roma / 30 / 1 | Yes; historical audit still open |
| S | 안드레아 피를로 | AC Milan / 19 / 2 | AC Milan / 27 / 9 | Associazione Calcio Milan / 32 / 6 | Yes; historical audit still open |
| S | 프란체스코 토티 | AS Roma / 24 / 8 | AS Roma / 24 / 14 | Associazione Sportiva Roma / 31 / 20 | Yes; historical audit still open |
| S | 안드리 셰우첸코 | AC Milan / 29 / — | AC Milan / 23 / 5 | Associazione Calcio Milan / 32 / 24 | Yes; historical audit still open |
| A+ | 이반 펠리촐리 | AS Roma / 5 / — | AS Roma / 19 / 0 | Associazione Sportiva Roma / 31 / 0 | Yes; historical audit still open |
| A+ | 잔루이지 부폰 | Juventus FC / 34 / — | Juventus FC / 32 / 0 | Juventus Football Club / 32 / 0 | Yes; historical audit still open |
| A+ | 파올로 말디니 | AC Milan / 15 / — | AC Milan / 28 / 2 | Associazione Calcio Milan / 30 / 0 | Yes; historical audit still open |
| A+ | 알레산드로 네스타 | SS Lazio / 25 / — | AC Milan / 29 / 1 | Associazione Calcio Milan / 26 / 0 | Yes; historical audit still open |
| A+ | 잔루카 잠브로타 | Juventus FC / 32 / — | Juventus FC / 25 / 0 | Juventus Football Club / 30 / 1 | Yes; historical audit still open |
| A+ | 카푸 | AS Roma / 27 / — | AS Roma / 26 / 0 | Associazione Calcio Milan / 28 / 1 | Yes; historical audit still open |
| A+ | 아만치누 만시니 | — / — / — | — / — / — | Associazione Sportiva Roma / 33 / 8 | No |
| A+ | 하비에르 사네티 | FC Internazionale Milano / 32 / — | FC Internazionale Milano / 34 / 1 | Football Club Internazionale Milano / 34 / 0 | Yes; historical audit still open |
| A+ | 에메르송 | AS Roma / 28 / — | AS Roma / 31 / 2 | Associazione Sportiva Roma / 33 / 3 | Yes; historical audit still open |
| A+ | 클라렌스 세이도르프 | FC Internazionale Milano / 20 / — | AC Milan / 28 / 3 | Associazione Calcio Milan / 29 / 3 | Yes; historical audit still open |
| A+ | 카카 | — / — / — | — / — / — | Associazione Calcio Milan / 30 / 10 | No |
| A+ | 파벨 네드베트 | Juventus FC / 32 / — | Juventus FC / 29 / 8 | Juventus Football Club / 30 / 6 | Yes; historical audit still open |
| A+ | 안토니오 카사노 | — / — / — | AS Roma / 27 / 9 | Associazione Sportiva Roma / 33 / 14 | No |
| A+ | 알베르토 질라르디노 | — / — / — | Parma Associazione Calcio / 24 / 4 | Parma Associazione Calcio / 34 / 23 | No |
| A0 | 프란체스코 톨도 | FC Internazionale Milano / 33 / — | FC Internazionale Milano / 32 / 1 | Football Club Internazionale Milano / 32 / 0 | Yes; historical audit still open |
| A0 | 세바스티앵 프레이 | Parma Associazione Calcio / 29 / — | Parma Associazione Calcio / 34 / 0 | Parma Associazione Calcio / 33 / 0 | Yes; historical audit still open |
| A0 | 안젤로 페루치 | SS Lazio / 27 / — | SS Lazio / 30 / 0 | Società Sportiva Lazio / 27 / 0 | Yes; historical audit still open |
| A0 | 모르간 데 산크티스 | — / — / — | Udinese Calcio / 34 / 0 | Udinese Calcio / 34 / 0 | No |
| A0 | 크리스티안 파누치 | AS Roma / 31 / — | AS Roma / 29 / 1 | Associazione Sportiva Roma / 24 / 2 | Yes; historical audit still open |
| A0 | 이반 코르도바 | FC Internazionale Milano / 30 / — | FC Internazionale Milano / 28 / 1 | Football Club Internazionale Milano / 31 / 1 | Yes; historical audit still open |
| A0 | 야프 스탐 | SS Lazio / 13 / — | SS Lazio / 28 / 0 | Società Sportiva Lazio / 29 / 2 | Yes; historical audit still open |
| A0 | 크리스티안 키부 | — / — / — | — / — / — | Associazione Sportiva Roma / 22 / 2 | No |
| A0 | 마레크 얀쿨로프스키 | — / — / — | Udinese Calcio / 26 / 5 | Udinese Calcio / 32 / 6 | No |
| A0 | 릴리앙 튀랑 | Juventus FC / 30 / — | Juventus FC / 27 / 1 | Juventus Football Club / 23 / 0 | Yes; historical audit still open |
| A0 | 알레시오 타키나르디 | Juventus FC / 28 / — | Juventus FC / 27 / 2 | Juventus Football Club / 24 / 0 | Yes; historical audit still open |
| A0 | 시모네 바로네 | — / — / — | Parma Associazione Calcio / 29 / 1 | Parma Associazione Calcio / 33 / 3 | No |
| A0 | 젠나로 가투소 | AC Milan / 32 / — | AC Milan / 25 / 0 | Associazione Calcio Milan / 33 / 1 | Yes; historical audit still open |
| A0 | 마르틴 예르겐센 | — / — / — | Udinese Calcio / 27 / 4 | Udinese Calcio / 34 / 3 | No |
| A0 | 마크 브레시아노 | — / — / — | — / — / — | Parma Associazione Calcio / 33 / 8 | No |
| A0 | 마르코 마르키오니 | — / — / — | — / — / — | Parma Associazione Calcio / 32 / 5 | No |
| A0 | 스테파노 피오레 | SS Lazio / 30 / — | SS Lazio / 33 / 6 | Società Sportiva Lazio / 32 / 8 | Yes; historical audit still open |
| A0 | 다비드 트레제게 | Juventus FC / 34 / 24 | Juventus FC / 17 / 9 | Juventus Football Club / 25 / 16 | Yes; historical audit still open |
| A0 | 아드리아누 | — / — / — | Parma Associazione Calcio / 28 / 16 | Football Club Internazionale Milano / 16 / 9 | No |
| A- | 조나탕 제비나 | AS Roma / 24 / — | AS Roma / 19 / 0 | Associazione Sportiva Roma / 23 / 1 | Yes; historical audit still open |
| A- | 파비오 칸나바로 | Parma Associazione Calcio / 26 / — | FC Internazionale Milano / 28 / 0 | Football Club Internazionale Milano / 22 / 2 | Yes; historical audit still open |
| A- | 마테오 페라리 | Parma Associazione Calcio / 16 / — | Parma Associazione Calcio / 32 / 2 | Parma Associazione Calcio / 33 / 1 | Yes; historical audit still open |
| A- | 마르첼로 카스텔리니 | Bologna FC / 30 / — | — / — / — | Parma Associazione Calcio / 32 / 0 | No |
| A- | 시니샤 미하일로비치 | — / — / — | SS Lazio / 21 / 1 | Società Sportiva Lazio / 25 / 1 | No |
| A- | 페르 크뢸드루프 | — / — / — | Udinese Calcio / 25 / 0 | Udinese Calcio / 30 / 2 | No |
| A- | 발레리오 베르토토 | — / — / — | Udinese Calcio / 25 / 0 | Udinese Calcio / 29 / 0 | No |
| A- | 주세페 판카로 | SS Lazio / 23 / — | — / — / — | Associazione Calcio Milan / 21 / 1 | No |
| A- | 주세페 파발리 | SS Lazio / 20 / — | SS Lazio / 26 / 0 | Società Sportiva Lazio / 29 / 0 | Yes; historical audit still open |
| A- | 다니엘레 보네라 | — / — / — | Parma Associazione Calcio / 32 / 1 | Parma Associazione Calcio / 24 / 0 | No |
| A- | 마시모 오도 | — / — / — | SS Lazio / 19 / 0 | Società Sportiva Lazio / 31 / 1 | No |
| A- | 올리비에 다쿠르 | — / — / — | AS Roma / 18 / 0 | Associazione Sportiva Roma / 27 / 1 | No |
| A- | 스티븐 아피아 | — / — / — | Brescia Calcio / 31 / 7 | Juventus Football Club / 30 / 1 | No |
| A- | 잠피에로 핀치 | — / — / — | Udinese Calcio / 28 / 3 | Udinese Calcio / 27 / 2 | No |
| A- | 후이 코스타 | AC Milan / 22 / — | AC Milan / 24 / 0 | Associazione Calcio Milan / 27 / 3 | Yes; historical audit still open |
| A- | 알바로 레코바 | FC Internazionale Milano / 18 / 6 | FC Internazionale Milano / 27 / 9 | Football Club Internazionale Milano / 19 / 8 | Yes; historical audit still open |
| A- | 도메니코 모르페오 | — / — / — | FC Internazionale Milano / 17 / 1 | Parma Associazione Calcio / 23 / 4 | No |
| A- | 마우로 카모라네시 | — / — / — | Juventus FC / 30 / 4 | Juventus Football Club / 26 / 3 | No |
| A- | 욘 달 토마손 | — / — / — | AC Milan / 18 / — | Associazione Calcio Milan / 26 / 12 | No |
| A- | 알레산드로 델 피에로 | Juventus FC / 32 / 16 | Juventus FC / 24 / 16 | Juventus Football Club / 22 / 8 | Yes; historical audit still open |
| A- | 크리스티안 비에리 | FC Internazionale Milano / 25 / 22 | FC Internazionale Milano / 23 / 24 | Football Club Internazionale Milano / 22 / 13 | Yes; historical audit still open |
| A- | 베르나르도 코라디 | AC ChievoVerona / 32 / — | SS Lazio / 32 / 10 | Società Sportiva Lazio / 32 / 9 | Yes; historical audit still open |
| A- | 디노 파바 | — / — / — | — / — / — | Udinese Calcio / 31 / 12 | No |
| A- | 빈첸초 이아퀸타 | — / — / — | Udinese Calcio / 25 / 7 | Udinese Calcio / 29 / 10 | No |

## 10. Primary source register & verification boundaries

### Source register

- League 2003-04 regular stats: https://fbref.com/en/comps/11/2003-2004/2003-2004-Serie-A-Stats ; individual 7 club 2003-04 league stat URLs saved per player.
- Original player names and DOB and 2003-04 roster: https://www.footballsquads.co.uk/italy/2003-2004/seriea/ .
- Final league standings: https://www.rsssf.org/tablesi/ital04.html .
- UEFA/Intertoto eligibility: https://www.rsssf.org/tablesu/uic04.html ; https://www.uefa.com/uefaeuropaleague/history/seasons/2004/clubs/ .
- Milan GK Dida current season 15 clean sheets and 84% saves: https://fbref.com/en/squads/dc56fe14/2003-2004/Milan-Stats .
- Juventus missing 2003-04 candidate stats filled from https://fbref.com/en/squads/e0652b02/2003-2004/Juventus-Stats and https://www.myjuve.it/season-2003-04-juventus/serie_a-players-SerA-108.aspx .
- Udinese prior missing Pierini/Pieri/Jancker stats https://fbref.com/en/squads/04eea015/2003-2004/Udinese-Stats .
- Inter Fontana and goalkeeping https://fbref.com/en/squads/d609edc0/2003-2004/Internazionale-Stats ; Karagounis https://fbref.com/en/players/ed2192d0/Giorgos-Karagounis .
- Obafemi conflicting FBref vs official Inter: https://fbref.com/en/players/70849fc2/Obafemi-Martins and https://www.inter.it/en/archivio_giocatore/G0745/obafemi-martins .

### Technical and historical status

| Check | Status |
|---|---|
| Actual following UEFA/Intertoto qualifying clubs | 7 verified; no 2004 Italian Intertoto participant |
| Original/current player identity, original team, DOB | 118 present; uniqueness structural validator PASS |
| Current 2003-04 Serie A appearances/starts/minutes | 118/118 source-backed numerics |
| Seven club starter-equivalent rosters exactly 11 each | 7/7 structural PASS |
| Position alternate cap | PASS, at most one backup per position for nominated club |
| Tier and uninterrupted rank | 118/118 provisional, structural PASS |
| 4-3-1-2 XI 11 correct current player position slots | PASS, provisional and not approved |
| Numeric appearance entries for both 2001-02 and 2002-03 | 56/118; past DRAFT not independent signoff |
| Fully independently historical 3-season personal quality audits | 0/118 |
| Full match-by-match 34-week player position modal and league-wide formation frequency | Not done |
| Currently unresolved individual statistical conflict | Obafemi Martins 24 FBref vs 25 official Inter archive 2003-04 league appearances |
| Repeatable source validator | scripts/verify-seriea-2003-04-players.mjs committed; validator body executed in JS, Node CLI not run separately |
| GitHub Pages deployment | To verify via Actions after final HEAD |
| Actually navigating and clicking live website tabs or filtering | Not performed; do NOT assert browser DOM/interactive proof |
| User acceptance | Not approved — `draft_unapproved` |

## 11. Outstanding work and hard stop

- Independently verify earlier 2001-02 and 2002-03 individual league contribution, including non-Serie-A seasons and historical injuries, for each of 118 nominees. At least **62** lack both previous seasons' numeric appearance fields; all 118 lack full independent qualitative signoff.
- Match-by-match primary position/left-right actual most common side vs site classification, especially Roma Mancini RWB, Milan Pirlo DM/Seedorf CM, Udinese Jankulovski LWB and Parma wing usage.
- Independent 2003-04 league-modal formation count across all teams is required before declaring 4-3-1-2 'statistically most popular'; until then only 'period representative'.
- Resolve Martins official count, repeat validator after historical edits. Player tier, exact same-tier order, Best XI remain unapproved provisional.
- 2004-05 Serie A **NOT STARTED**; next season only on new explicit user “다음”.

**End of report — Serie A 2003-04 historical DRAFT only.**
