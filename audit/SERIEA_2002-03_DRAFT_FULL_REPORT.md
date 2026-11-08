# Serie A 2002-03 — all 145 player evaluations: provisional historical audit

> **STATE: draft_unapproved, user approval NOT granted.** 2002-03 player statistics nominated from 2002-03 archived club performance tables. Exactly 9 clubs who actually participated in UEFA 2003-04 or Intertoto 2003 are used. 145 nominated players, each with a provisional tier and positional rank. **Independent 3-season full player form review, league-wide modal tactical formation counts, and live interactive browser validation are NOT complete.**

## 1. Scope, team eligibility and evaluation periods

- Evaluate **2000-01 (low weight), 2001-02 (medium), 2002-03 (highest)**. Individual performances, role function, productivity, ability and availability weighted highest current; team league/European achievements are **only** inputs for club eligibility, not individual tier bonus.
- Eligible club must play 2002-03 Serie A AND have actually played in **2003-04 UCL/UEFA Cup or 2003 UEFA Intertoto**. This yields Juventus, Inter, Milan, Lazio, Parma, Udinese, Roma, Brescia and Perugia.
- **Exceptions:** Roma finished eighth, Coppa Italia losing finalists against Milan already in UCL; qualified UEFA Cup. Brescia 9th and Perugia 10th actually entered 2003 Intertoto, with Perugia tournament winner then 2003-04 UEFA Cup. Seventh Chievo did NOT participate and is excluded.
- Source base: https://www.rsssf.org/tablesi/ital03.html ; https://www.rsssf.org/tablesu/uic03.html ; https://www.uefa.com/news-media/news/0192-0e6a6357df24-ecf9313397b5-1000--first-round-takes-shape/ . Per-club UEFA original match list signoff remains pending.

| Club original name | League place | Actual 2003-04 competition | Actual qualification evidence and route |
|---|---:|---|---|
| Juventus FC | 1 | UCL | Serie A winner (league position) and actual 2003-04 UCL |
| FC Internazionale Milano | 2 | UCL | 2nd Serie A, actual 2003-04 UCL |
| AC Milan | 3 | UCL | 3rd Serie A and 2002-03 UCL winner, actual 2003-04 UCL |
| SS Lazio | 4 | UCL | 4th Serie A; played 2003-04 UCL third qualifying |
| Parma FC | 5 | UEFA Cup | 5th Serie A, 2003-04 UEFA Cup |
| Udinese Calcio | 6 | UEFA Cup | 6th Serie A, 2003-04 UEFA Cup |
| AS Roma | 8 | UEFA Cup | 8th Serie A, Italian Cup losing finalist because Coppa winner AC Milan already qualified UCL; actual 2003-04 UEFA Cup |
| Brescia Calcio | 9 | Intertoto Cup | 9th Serie A, actually played 2003 UEFA Intertoto vs Villarreal |
| AC Perugia | 10 | Intertoto Cup | 10th Serie A, won 2003 UEFA Intertoto vs Wolfsburg and entered 2003-04 UEFA Cup |

## 2. Newly created source file & audit findings

- The original repository did not have `data/seriea-2002-03.json`; this season was **newly authored from scratch**, not based on a pre-existing 2002-03 Football Archive player draft.
- Initially **148** candidates were recorded from 2002-03 historical source lists; missing current-year numeric stats were subsequently sourced from individual 2002-03 FBref lines. All selected 145 candidate rows now have current season **Serie A apps, starts, minutes**. No null/zero substitution for undetermined figures.
- A serious early provenance/identifier bug was discovered and fixed: empty Korean-to-Latin normalized names had accidentally matched unrelated first prior player records for all 148 rows. ALL prior-year references were discarded and rebuilt with **exact normalized original Latin names**, or separately independently researched individual seasonal profiles. Current archive does NOT retain those incorrect cross-player year records. No silent filling from coincidentally empty Korean names.
- Both earlier seasons have numerical appearances for **64/145** nominees; **81** nominees are missing at least one previous year, and some attached earlier records are only unapproved past season draft values. Full independently signed-off three-year form histories: **0/145**.
- The current-season league stats are aligned to FBref as the uniform baseline; historical contradictions from RSSSF/Transfermarkt/L'Équipe/StatMuse are **explicit unresolved source conflicts**, not mysteriously 'corrected'.
- Player roles are historical period tactical interpretations (e.g. Milan Pirlo as DM regista, Juventus Zambrotta as LB after position transition), full 34-fixture dominant-role frequency remains unverified.

### Seasonal league statistical source conflicts — must be reconciled by match logs

| Player | Disputed field | FBref current chosen | Other record | Audit action |
|---|---|---|---|---|
| Adrian Mutu | 2002-03 Serie A goals | 17 | 18 (https://www.rsssf.org/players/mutudata.html); 18 (https://www.transfermarkt.com/serie-a/torschuetzenliste/wettbewerb/IT1/saison_id/2002); 17 (https://www.lequipe.fr/Football/championnat-d-italie/saison-2002-2003/page-classement-individuel/buteurs) | Pending source-by-match reconciliation |
| Adriano | 2002-03 Serie A goals | 16 | 15 (https://www.rsssf.org/tablesi/ital03.html); 15 (https://www.transfermarkt.com/serie-a/torschuetzenliste/wettbewerb/IT1/saison_id/2002) | Pending source-by-match reconciliation |
| Pavel Nedvěd | 2002-03 Serie A goals | 8 | 9 (https://www.lequipe.fr/Football/championnat-d-italie/saison-2002-2003/page-classement-individuel/buteurs) | Pending source-by-match reconciliation |
| Gianluigi Buffon | 2002-03 Serie A clean sheets | 14 | 15 (https://www.statmuse.com/fc/ask/most-clean-sheets-in-2003?l=seriea) | Pending source-by-match reconciliation |

### Shortlist adjustments made during eligibility review

| Club | Player | Action | 2002-03 evidence | Reason |
|---|---|---|---|---|
| lazio | Giuseppe Pancaro | Excluded | — apps / — starts | In 2002-03 RB competition Negro 19/18 and Oddo 19/16 more started than Pancaro 16/10; only 2 RB eligible for provisional four-back system. Position cap, not nonmembership. |
| milan | Thomas Helveg | Excluded | — apps / — starts | 8 Serie A matches/2 starts; lacks season regular-starter qualification compared with Šimić 28/28. Single RB candidate rather than adding little-used alternate. |
| lazio | Paolo Negro | Added | 19 apps / 18 starts | Contemporary Lazio right-back (also occasional CB); 19 games 18 starts this season, over previous RB Pancaro 16/10. |
| brescia | Marco Pisano | Added | 17 apps / 12 starts | Left-back rotation 17 games 12 starts, also direct 2002-03 Brescia documented in La Gazzetta. |
| parma | Mark Bresciano | Excluded | 24 apps / 7 starts | 24 league appearances but only 7 starts, while CM Lamouchi 28, Filippini 29 and Brighi 13 starts already cover allowed two CM roles + one alternate. First season at Parma, not absent. |
| roma | Damiano Tommasi | Excluded | 19 apps / 14 starts | 19 league appearances and 14 starts, while Lima 27 starts and midseason Dacourt 18 starts form the two CM candidates under a 3-4-1-2 with one CM starter+one alternate. Previous 2000-02 excellence recognized but current role reduced; revisit versus Dacourt. |
| brescia | Markus Schopp | Excluded | 22 apps / 12 starts | 22 league appearances/12 starts vs Jonathan Bachini 18/17 in sole RW alternate/side role of a 3-4-1-2. Position cap, not historical nonparticipation. |

**Not automatically qualified for final shortlist:** Paolo Cannavaro (Parma 14 league appearances/9 starts) as Parma's 4-back CB group already includes Ferrari/Bonera plus Cardone; Bologna and Chievo did not qualify as clubs. Any omission is a provisional role/cap decision, not a claim the player was absent.

## 3. Candidate and grade coverage by club

| Club | Nominated candidates | Starter-equivalent roles | Backup candidates | Past years with numeric gaps |
|---|---:|---:|---:|---:|
| Juventus FC | 17 | 11 | 6 | 3 |
| FC Internazionale Milano | 18 | 11 | 7 | 6 |
| AC Milan | 17 | 11 | 6 | 5 |
| SS Lazio | 18 | 11 | 7 | 11 |
| Parma FC | 14 | 11 | 3 | 8 |
| Udinese Calcio | 15 | 11 | 4 | 12 |
| AS Roma | 15 | 11 | 4 | 5 |
| Brescia Calcio | 16 | 11 | 5 | 16 |
| AC Perugia | 15 | 11 | 4 | 15 |

### Tier distribution

| S | A+ | A0 | A- | B+ | B0 | B- | C+ | C0 | C- | D | Ungraded |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 7 | 10 | 16 | 22 | 50 | 24 | 14 | 2 | 0 | 0 | 0 | 0 |

- Provisional World Class (S, A+): **17** nominees.
- Provisional League Top Class (S, A+, A0, A-): **55** nominees.

## 4. Whole 145-player candidate registry, club-by-club

Column originalName/clubNameOriginal are period original forms. A0/B0/C0 are JSON A/B/C. Role denotes a single **nominal starter-equivalent XI** or **candidate alternate** under club's period formation, not a claim that every XI appeared in the same real match.

### Juventus FC — 17 players, 4-4-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | 주전 | 32/32/2827 | 0/0 | S | 1 |
| GK | 안토니오 키멘티 | Antonio Chimenti | Juventus FC | 1970-06-30 | 후보 | 4/2/223 | 0/0 | B- | 16 |
| CB | 치로 페라라 | Ciro Ferrara | Juventus FC | 1967-02-11 | 주전 | 25/24/2108 | 0/1 | A- | 8 |
| CB | 파올로 몬테로 | Paolo Montero | Juventus FC | 1971-09-03 | 주전 | 21/19/1784 | 0/0 | A- | 10 |
| CB | 마르크 이울리아노 | Mark Iuliano | Juventus FC | 1973-08-12 | 후보 | 21/19/1682 | 1/0 | B+ | 22 |
| LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus FC | 1977-02-19 | 주전 | 25/21/1903 | 0/5 | A0 | 1 |
| LB | 잔루카 페소토 | Gianluca Pessotto | Juventus FC | 1970-08-11 | 후보 | 17/9/864 | 0/1 | B0 | 12 |
| RB | 릴리앙 튀랑 | Lilian Thuram | Juventus FC | 1972-01-01 | 주전 | 27/26/2307 | 1/1 | A0 | 3 |
| RB | 알레산드로 비린델리 | Alessandro Birindelli | Juventus FC | 1974-11-12 | 후보 | 17/14/1187 | 0/0 | B0 | 11 |
| DM | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus FC | 1975-07-23 | 주전 | 27/22/2027 | 2/1 | A- | 4 |
| CM | 에드가 다비즈 | Edgar Davids | Juventus FC | 1973-03-13 | 주전 | 26/25/2118 | 1/0 | A+ | 1 |
| CM | 안토니오 콘테 | Antonio Conte | Juventus FC | 1969-07-31 | 후보 | 18/12/1085 | 1/0 | B+ | 16 |
| LW | 파벨 네드베트 | Pavel Nedvěd | Juventus FC | 1972-08-30 | 주전 | 29/27/2290 | 8/11 | S | 1 |
| RW | 마우로 카모라네시 | Mauro Camoranesi | Juventus FC | 1976-10-04 | 주전 | 30/24/2127 | 4/4 | A- | 2 |
| ST | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus FC | 1974-11-09 | 주전 | 24/20/1886 | 16/8 | A+ | 6 |
| ST | 다비드 트레제게 | David Trezeguet | Juventus FC | 1977-10-15 | 주전 | 17/14/1163 | 9/2 | A- | 10 |
| ST | 마르코 디 바이오 | Marco Di Vaio | Juventus FC | 1976-07-15 | 후보 | 26/18/1552 | 7/2 | B0 | 19 |

### FC Internazionale Milano — 18 players, 4-3-1-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 프란체스코 톨도 | Francesco Toldo | FC Internazionale Milano | 1971-12-02 | 주전 | 32/32/2880 | 1/0 | A0 | 4 |
| GK | 알베르토 폰타나 | Alberto Fontana | FC Internazionale Milano | 1967-01-23 | 후보 | 2/2/180 | 0/0 | B0 | 12 |
| CB | 파비오 칸나바로 | Fabio Cannavaro | FC Internazionale Milano | 1973-09-13 | 주전 | 28/27/2425 | 0/2 | A0 | 5 |
| CB | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano | 1976-08-11 | 주전 | 28/27/2426 | 1/1 | A0 | 6 |
| CB | 마르코 마테라치 | Marco Materazzi | FC Internazionale Milano | 1973-08-19 | 후보 | 20/18/1492 | 1/1 | B+ | 24 |
| LB | 프란체스코 코코 | Francesco Coco | FC Internazionale Milano | 1977-01-08 | 주전 | 19/16/1309 | 0/0 | B+ | 9 |
| LB | 조반니 파스콸레 | Giovanni Pasquale | FC Internazionale Milano | 1982-01-05 | 후보 | 18/13/1268 | 0/0 | B0 | 11 |
| RB | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | 주전 | 34/32/2968 | 1/3 | A+ | 1 |
| DM | 루이지 디 비아조 | Luigi Di Biagio | FC Internazionale Milano | 1971-06-03 | 주전 | 25/21/1699 | 4/2 | B+ | 8 |
| CM | 엠레 벨뢰졸루 | Emre Belözoğlu | FC Internazionale Milano | 1980-09-07 | 주전 | 25/22/1968 | 3/2 | B+ | 11 |
| CM | 크리스티아노 사네티 | Cristiano Zanetti | FC Internazionale Milano | 1977-04-10 | 주전 | 17/14/1215 | 0/2 | B+ | 15 |
| CM | 마티아스 알메이다 | Matías Almeyda | FC Internazionale Milano | 1973-12-21 | 후보 | 16/13/1098 | 0/0 | B0 | 19 |
| CAM | 알바로 레코바 | Álvaro Recoba | FC Internazionale Milano | 1976-03-17 | 주전 | 27/23/2086 | 9/9 | A0 | 3 |
| CAM | 도메니코 모르페오 | Domenico Morfeo | FC Internazionale Milano | 1976-01-16 | 후보 | 17/11/925 | 1/3 | B- | 7 |
| RW | 세르지우 콘세이상 | Sérgio Conceição | FC Internazionale Milano | 1974-11-15 | 후보 | 19/14/1251 | 0/2 | B+ | 3 |
| ST | 크리스티안 비에리 | Christian Vieri | FC Internazionale Milano | 1973-07-12 | 주전 | 23/22/1877 | 24/0 | S | 3 |
| ST | 에르난 크레스포 | Hernán Crespo | FC Internazionale Milano | 1975-07-05 | 주전 | 18/14/1211 | 7/6 | A0 | 7 |
| ST | 가브리엘 바티스투타 | Gabriel Batistuta | FC Internazionale Milano | 1969-02-01 | 후보 | 12/9/820 | 2/2 | B- | 24 |

### AC Milan — 17 players, 4-3-1-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 지다 | Dida | AC Milan | 1973-10-07 | 주전 | 30/30/2700 | 0/0 | A+ | 2 |
| GK | 크리스티안 아비아티 | Christian Abbiati | AC Milan | 1977-07-08 | 후보 | 3/3/270 | 0/0 | B- | 15 |
| CB | 알레산드로 네스타 | Alessandro Nesta | AC Milan | 1976-03-19 | 주전 | 29/29/2510 | 1/0 | S | 1 |
| CB | 파올로 말디니 | Paolo Maldini | AC Milan | 1968-06-26 | 주전 | 28/27/2424 | 2/1 | A+ | 3 |
| CB | 알레산드로 코스타쿠르타 | Alessandro Costacurta | AC Milan | 1966-04-24 | 후보 | 17/12/1183 | 0/0 | B0 | 28 |
| LB | 카하 칼라제 | Kakha Kaladze | AC Milan | 1978-02-27 | 주전 | 25/24/1959 | 0/3 | A- | 4 |
| RB | 다리오 시미치 | Dario Šimić | AC Milan | 1975-11-12 | 주전 | 28/28/2303 | 1/0 | A- | 4 |
| DM | 안드레아 피를로 | Andrea Pirlo | AC Milan | 1979-05-19 | 주전 | 27/21/1889 | 9/6 | A0 | 3 |
| CM | 클라렌스 세이도르프 | Clarence Seedorf | AC Milan | 1976-04-01 | 주전 | 28/23/2197 | 3/2 | A0 | 3 |
| CM | 젠나로 가투소 | Gennaro Gattuso | AC Milan | 1978-01-09 | 주전 | 25/23/1782 | 0/1 | B0 | 17 |
| CM | 마시모 암브로시니 | Massimo Ambrosini | AC Milan | 1977-05-29 | 후보 | 21/17/1554 | 1/3 | B- | 21 |
| CAM | 후이 코스타 | Rui Costa | AC Milan | 1972-03-29 | 주전 | 24/23/1838 | 0/4 | A- | 5 |
| CAM | 히바우두 | Rivaldo | AC Milan | 1972-04-19 | 후보 | 22/16/1508 | 5/6 | B+ | 6 |
| LW | 세르지뉴 | Serginho | AC Milan | 1971-06-27 | 후보 | 20/10/925 | —/— | B+ | 2 |
| ST | 필리포 인자기 | Filippo Inzaghi | AC Milan | 1973-08-09 | 주전 | 29/26/2341 | 16/5 | A+ | 5 |
| ST | 안드리 셰우첸코 | Andriy Shevchenko | AC Milan | 1976-09-29 | 주전 | 23/18/1572 | 5/1 | B+ | 16 |
| ST | 욘 달 토마손 | Jon Dahl Tomasson | AC Milan | 1976-08-29 | 후보 | 18/7/776 | —/— | B+ | 18 |

### SS Lazio — 18 players, 4-4-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 안젤로 페루치 | Angelo Peruzzi | SS Lazio | 1970-02-16 | 주전 | 30/30/2528 | 0/0 | A0 | 5 |
| GK | 루카 마르케자니 | Luca Marchegiani | SS Lazio | 1966-02-22 | 후보 | 6/4/431 | 0/0 | B- | 14 |
| CB | 야프 스탐 | Jaap Stam | SS Lazio | 1972-07-17 | 주전 | 28/28/2520 | 0/0 | A0 | 4 |
| CB | 시니샤 미하일로비치 | Siniša Mihajlović | SS Lazio | 1969-02-20 | 주전 | 21/21/1758 | 1/6 | A- | 9 |
| CB | 페르난두 쿠투 | Fernando Couto | SS Lazio | 1969-08-02 | 후보 | 15/15/1350 | 0/0 | B0 | 26 |
| LB | 주세페 파발리 | Giuseppe Favalli | SS Lazio | 1972-01-08 | 주전 | 26/25/2209 | 0/1 | A- | 3 |
| RB | 마시모 오도 | Massimo Oddo | SS Lazio | 1976-06-14 | 주전 | 19/16/1416 | 0/3 | A- | 6 |
| RB | 파올로 네그로 | Paolo Negro | SS Lazio | 1972-04-16 | 후보 | 19/18/1570 | 1/0 | B0 | 9 |
| DM | 줄리아노 잔니케다 | Giuliano Giannichedda | SS Lazio | 1974-09-21 | 주전 | 25/18/1623 | —/— | B+ | 9 |
| DM | 파비오 리베라니 | Fabio Liverani | SS Lazio | 1976-04-29 | 후보 | 21/9/863 | 0/0 | B+ | 10 |
| CM | 스테파노 피오레 | Stefano Fiore | SS Lazio | 1975-04-17 | 주전 | 33/28/2403 | 6/4 | A0 | 2 |
| CM | 디에고 시메오네 | Diego Simeone | SS Lazio | 1970-04-28 | 후보 | 24/18/1603 | 7/2 | B+ | 13 |
| LW | 세자르 | César | SS Lazio | 1974-10-24 | 주전 | 26/25/2166 | 3/4 | B0 | 3 |
| RW | 데얀 스탄코비치 | Dejan Stanković | SS Lazio | 1978-09-11 | 주전 | 29/29/2524 | 6/6 | A0 | 1 |
| RW | 루카스 카스트로만 | Lucas Castromán | SS Lazio | 1980-10-02 | 후보 | 16/4/498 | 1/0 | C+ | 5 |
| ST | 클라우디오 로페스 | Claudio López | SS Lazio | 1974-07-17 | 주전 | 34/30/2799 | 15/13 | S | 2 |
| ST | 베르나르도 코라디 | Bernardo Corradi | SS Lazio | 1976-03-30 | 주전 | 32/29/2638 | 10/1 | B+ | 11 |
| ST | 시모네 인차기 | Simone Inzaghi | SS Lazio | 1976-04-05 | 후보 | 18/5/530 | 4/1 | B- | 25 |

### Parma FC — 14 players, 4-3-1-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 세바스티앵 프레이 | Sébastien Frey | Parma FC | 1980-03-18 | 주전 | 34/34/3060 | 0/0 | A0 | 3 |
| CB | 다니엘레 보네라 | Daniele Bonera | Parma FC | 1981-05-31 | 주전 | 32/32/2780 | 1/0 | B+ | 12 |
| CB | 마테오 페라리 | Matteo Ferrari | Parma FC | 1979-12-05 | 주전 | 32/32/2811 | 2/1 | B+ | 14 |
| CB | 주세페 카르도네 | Giuseppe Cardone | Parma FC | 1974-03-03 | 후보 | 13/13/1061 | 1/0 | B0 | 27 |
| LB | 주니오르 | Júnior | Parma FC | 1973-06-20 | 주전 | 27/27/2309 | 0/1 | B+ | 8 |
| RB | 안토니오 베나리보 | Antonio Benarrivo | Parma FC | 1968-08-21 | 주전 | 19/16/1445 | 0/0 | B0 | 10 |
| DM | 시모네 바로네 | Simone Barone | Parma FC | 1978-04-30 | 주전 | 29/26/2256 | 1/2 | B+ | 7 |
| CM | 에마누엘레 필리피니 | Emanuele Filippini | Parma FC | 1973-07-03 | 주전 | 30/29/2465 | 2/3 | B+ | 6 |
| CM | 사브리 라무시 | Sabri Lamouchi | Parma FC | 1971-11-09 | 주전 | 30/28/2454 | 2/3 | B+ | 7 |
| CM | 마테오 브리기 | Matteo Brighi | Parma FC | 1981-02-14 | 후보 | 22/13/1240 | 1/1 | B0 | 20 |
| CAM | 나카타 히데토시 | Hidetoshi Nakata | Parma FC | 1977-01-22 | 주전 | 31/29/2386 | 4/6 | A- | 4 |
| ST | 아드리안 무투 | Adrian Mutu | Parma FC | 1979-01-08 | 주전 | 31/31/2628 | 17/12 | S | 1 |
| ST | 아드리아누 | Adriano | Parma FC | 1982-02-17 | 주전 | 28/26/2215 | 16/3 | A+ | 4 |
| ST | 알베르토 질라르디노 | Alberto Gilardino | Parma FC | 1982-07-05 | 후보 | 24/4/617 | 4/0 | C+ | 26 |

### Udinese Calcio — 15 players, 3-5-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio | 1977-03-26 | 주전 | 34/34/3060 | 0/0 | A- | 6 |
| CB | 로베르토 센시니 | Roberto Sensini | Udinese Calcio | 1966-10-12 | 주전 | 30/30/2625 | 3/0 | A- | 7 |
| CB | 페르 크뢸드루프 | Per Krøldrup | Udinese Calcio | 1979-07-31 | 주전 | 25/25/2178 | 0/1 | B+ | 18 |
| CB | 발레리오 베르토토 | Valerio Bertotto | Udinese Calcio | 1973-01-15 | 주전 | 25/21/1860 | 0/0 | B+ | 20 |
| CB | 토마스 만프레디니 | Thomas Manfredini | Udinese Calcio | 1980-05-27 | 후보 | 21/20/1623 | 0/0 | B+ | 21 |
| LB | 마레크 얀쿨로프스키 | Marek Jankulovski | Udinese Calcio | 1977-05-09 | 주전 | 26/22/1993 | 5/2 | A- | 6 |
| LB | 미르코 피에리 | Mirko Pieri | Udinese Calcio | 1978-07-24 | 후보 | 22/20/1610 | 0/1 | B0 | 10 |
| RB | 알베르투 발렌칭 | Alberto Valentim | Udinese Calcio | 1975-03-22 | 주전 | 20/20/1663 | 1/1 | B0 | 8 |
| DM | 다비드 피사로 | David Pizarro | Udinese Calcio | 1979-09-09 | 주전 | 32/32/2880 | 7/5 | A0 | 2 |
| CM | 잠피에로 핀치 | Giampiero Pinzi | Udinese Calcio | 1981-03-11 | 주전 | 28/28/2381 | 3/1 | A- | 5 |
| CM | 마르틴 예르겐센 | Martin Jørgensen | Udinese Calcio | 1975-10-06 | 주전 | 27/24/2063 | 4/2 | B+ | 10 |
| LW | 주세페 제미티 | Giuseppe Gemiti | Udinese Calcio | 1981-05-03 | 후보 | 25/11/1370 | 0/0 | B- | 4 |
| ST | 로베르토 무치 | Roberto Muzzi | Udinese Calcio | 1971-09-21 | 주전 | 27/26/2289 | 5/5 | B+ | 12 |
| ST | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Udinese Calcio | 1979-11-21 | 주전 | 25/16/1509 | 7/0 | B+ | 17 |
| ST | 카르스텐 양커 | Carsten Jancker | Udinese Calcio | 1974-08-28 | 후보 | 20/12/983 | 1/1 | B0 | 21 |

### AS Roma — 15 players, 3-4-1-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 이반 펠리촐리 | Ivan Pelizzoli | AS Roma | 1980-11-18 | 주전 | 19/18/1648 | 0/0 | B+ | 9 |
| GK | 프란체스코 안토니올리 | Francesco Antonioli | AS Roma | 1969-09-14 | 후보 | 16/16/1387 | 0/0 | B+ | 10 |
| CB | 왈테르 사무엘 | Walter Samuel | AS Roma | 1978-03-23 | 주전 | 31/31/2790 | 2/0 | A+ | 2 |
| CB | 크리스티안 파누치 | Christian Panucci | AS Roma | 1973-04-12 | 주전 | 29/29/2467 | 1/2 | B+ | 17 |
| CB | 조나탕 제비나 | Jonathan Zebina | AS Roma | 1978-07-19 | 주전 | 19/18/1606 | 0/0 | B+ | 23 |
| CB | 알다이르 | Aldair | AS Roma | 1965-11-30 | 후보 | 17/15/1349 | 0/1 | B- | 30 |
| LB | 뱅상 캉델라 | Vincent Candela | AS Roma | 1973-10-24 | 주전 | 23/23/1840 | 1/4 | A- | 5 |
| RB | 카푸 | Cafú | AS Roma | 1970-06-07 | 주전 | 26/25/2138 | 0/1 | A- | 5 |
| DM | 에메르송 | Emerson | AS Roma | 1976-04-04 | 주전 | 31/31/2674 | 2/4 | A+ | 1 |
| CM | 프란시스쿠 리마 | Francisco Lima | AS Roma | 1971-04-17 | 주전 | 28/27/2445 | 0/4 | B+ | 8 |
| CM | 올리비에 다쿠르 | Olivier Dacourt | AS Roma | 1974-09-29 | 후보 | 18/18/1508 | 0/0 | B+ | 14 |
| CAM | 프란체스코 토티 | Francesco Totti | AS Roma | 1976-09-27 | 주전 | 24/23/1933 | 14/6 | S | 1 |
| ST | 안토니오 카사노 | Antonio Cassano | AS Roma | 1982-07-12 | 주전 | 27/15/1346 | 9/4 | A- | 9 |
| ST | 빈첸초 몬텔라 | Vincenzo Montella | AS Roma | 1974-06-18 | 주전 | 29/22/1791 | 9/3 | B+ | 14 |
| ST | 마르코 델베키오 | Marco Delvecchio | AS Roma | 1973-04-07 | 후보 | 16/13/1102 | 4/2 | B0 | 20 |

### Brescia Calcio — 16 players, 3-4-1-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 마테오 세레니 | Matteo Sereni | Brescia Calcio | 1975-02-11 | 주전 | 23/23/2053 | 0/0 | B+ | 7 |
| GK | 다비데 미칠로 | Davide Micillo | Brescia Calcio | 1971-04-17 | 후보 | 8/7/621 | 0/0 | B- | 13 |
| CB | 질베르토 마르티네스 | Gilberto Martínez | Brescia Calcio | 1979-10-01 | 주전 | 34/34/3050 | 0/0 | B+ | 11 |
| CB | 파비오 페트루치 | Fabio Petruzzi | Brescia Calcio | 1970-10-24 | 주전 | 31/31/2775 | 2/1 | B+ | 15 |
| CB | 다리오 다이넬리 | Dario Dainelli | Brescia Calcio | 1979-06-09 | 주전 | 24/24/2070 | 0/0 | B+ | 19 |
| CB | 파비우 빌리카 | Fábio Bilica | Brescia Calcio | 1979-01-04 | 후보 | 11/9/849 | 0/0 | B- | 31 |
| LB | 안토니 셰리치 | Anthony Šerić | Brescia Calcio | 1979-01-15 | 주전 | 30/28/2385 | 1/1 | B+ | 7 |
| LB | 마르코 피사노 | Marco Pisano | Brescia Calcio | 1981-08-13 | 후보 | 17/12/1021 | 0/1 | B- | 13 |
| RB | 안토니오 필리피니 | Antonio Filippini | Brescia Calcio | 1973-07-03 | 주전 | 28/21/1925 | 1/0 | B+ | 7 |
| DM | 마투잘렝 | Matuzalém | Brescia Calcio | 1980-06-10 | 주전 | 29/29/2462 | 0/2 | B+ | 5 |
| CM | 스티븐 아피아 | Stephen Appiah | Brescia Calcio | 1980-12-24 | 주전 | 31/31/2722 | 7/2 | A- | 4 |
| CM | 펩 과르디올라 | Pep Guardiola | Brescia Calcio | 1971-01-18 | 후보 | 16/15/1305 | 1/0 | B0 | 18 |
| CAM | 로베르토 바조 | Roberto Baggio | Brescia Calcio | 1967-02-18 | 주전 | 32/32/2872 | 12/9 | A+ | 2 |
| RW | 조너선 바키니 | Jonathan Bachini | Brescia Calcio | 1975-06-05 | 후보 | 18/17/1485 | 1/2 | B0 | 4 |
| ST | 이글리 타레 | Igli Tare | Brescia Calcio | 1973-07-25 | 주전 | 33/20/1927 | 6/2 | B+ | 15 |
| ST | 루카 토니 | Luca Toni | Brescia Calcio | 1977-05-26 | 주전 | 16/15/1197 | 2/2 | B- | 23 |

### AC Perugia — 15 players, 3-5-2 provisional

| Position | 한국어 이름 | Original name | Original club | Born | Status | Serie A apps/starts/min | Goals/assists | Tier | Position rank |
|---|---|---|---|---|---|---|---|---|---:|
| GK | 젤코 칼라치 | Željko Kalac | AC Perugia | 1972-12-16 | 주전 | 22/21/1775 | 0/0 | B+ | 8 |
| GK | 세바스티아노 로시 | Sebastiano Rossi | AC Perugia | 1964-07-20 | 후보 | 12/12/1077 | 0/0 | B0 | 11 |
| CB | 마르코 디 로레토 | Marco Di Loreto | AC Perugia | 1974-09-28 | 주전 | 32/32/2836 | 2/2 | B+ | 13 |
| CB | 마우로 밀라네세 | Mauro Milanese | AC Perugia | 1971-09-17 | 주전 | 31/31/2746 | 1/2 | B+ | 16 |
| CB | 션 솔리아노 | Sean Sogliano | AC Perugia | 1971-02-28 | 주전 | 20/19/1639 | 0/0 | B0 | 25 |
| CB | 라흐만 레자에이 | Rahman Rezaei | AC Perugia | 1975-02-20 | 후보 | 13/12/953 | 3/0 | B0 | 29 |
| LB | 파비오 그로소 | Fabio Grosso | AC Perugia | 1977-11-28 | 주전 | 30/30/2752 | 4/4 | A- | 2 |
| RB | 제 마리아 | Zé Maria | AC Perugia | 1973-07-12 | 주전 | 34/34/3060 | 6/7 | A0 | 2 |
| DM | 마누엘레 블라시 | Manuele Blasi | AC Perugia | 1980-08-17 | 주전 | 27/27/2293 | 0/0 | B+ | 6 |
| CM | 조반니 테데스코 | Giovanni Tedesco | AC Perugia | 1972-05-13 | 주전 | 27/26/2190 | 3/0 | B+ | 9 |
| CM | 크리스티안 오보도 | Christian Obodo | AC Perugia | 1984-05-11 | 주전 | 30/21/1851 | 1/0 | B+ | 12 |
| CM | 마시밀리아노 푸사니 | Massimiliano Fusani | AC Perugia | 1979-07-17 | 후보 | 19/14/1332 | 3/1 | B- | 22 |
| ST | 파브리치오 미콜리 | Fabrizio Miccoli | AC Perugia | 1979-06-27 | 주전 | 34/33/2827 | 9/6 | A- | 8 |
| ST | 지시스 브리자스 | Zisis Vryzas | AC Perugia | 1973-11-09 | 주전 | 30/23/1882 | 5/0 | B+ | 13 |
| ST | 안드레아 카라촐로 | Andrea Caracciolo | AC Perugia | 1981-09-18 | 후보 | 22/9/936 | 2/1 | B0 | 22 |

## 5. Combined all-clubs position ranking (temporary until individual 3-season audit)

The exact ordinal among same-tier nominees is a tiebreak using current Serie A starts and is NOT a complete individual defensive/quality evidence rank. All rank entries can change at user review.

### GK — 16 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | S | 32/32 |
| 2 | 지다 | Dida | AC Milan | A+ | 30/30 |
| 3 | 세바스티앵 프레이 | Sébastien Frey | Parma FC | A0 | 34/34 |
| 4 | 프란체스코 톨도 | Francesco Toldo | FC Internazionale Milano | A0 | 32/32 |
| 5 | 안젤로 페루치 | Angelo Peruzzi | SS Lazio | A0 | 30/30 |
| 6 | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio | A- | 34/34 |
| 7 | 마테오 세레니 | Matteo Sereni | Brescia Calcio | B+ | 23/23 |
| 8 | 젤코 칼라치 | Željko Kalac | AC Perugia | B+ | 22/21 |
| 9 | 이반 펠리촐리 | Ivan Pelizzoli | AS Roma | B+ | 19/18 |
| 10 | 프란체스코 안토니올리 | Francesco Antonioli | AS Roma | B+ | 16/16 |
| 11 | 세바스티아노 로시 | Sebastiano Rossi | AC Perugia | B0 | 12/12 |
| 12 | 알베르토 폰타나 | Alberto Fontana | FC Internazionale Milano | B0 | 2/2 |
| 13 | 다비데 미칠로 | Davide Micillo | Brescia Calcio | B- | 8/7 |
| 14 | 루카 마르케자니 | Luca Marchegiani | SS Lazio | B- | 6/4 |
| 15 | 크리스티안 아비아티 | Christian Abbiati | AC Milan | B- | 3/3 |
| 16 | 안토니오 키멘티 | Antonio Chimenti | Juventus FC | B- | 4/2 |

### CB — 31 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 알레산드로 네스타 | Alessandro Nesta | AC Milan | S | 29/29 |
| 2 | 왈테르 사무엘 | Walter Samuel | AS Roma | A+ | 31/31 |
| 3 | 파올로 말디니 | Paolo Maldini | AC Milan | A+ | 28/27 |
| 4 | 야프 스탐 | Jaap Stam | SS Lazio | A0 | 28/28 |
| 5 | 파비오 칸나바로 | Fabio Cannavaro | FC Internazionale Milano | A0 | 28/27 |
| 6 | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano | A0 | 28/27 |
| 7 | 로베르토 센시니 | Roberto Sensini | Udinese Calcio | A- | 30/30 |
| 8 | 치로 페라라 | Ciro Ferrara | Juventus FC | A- | 25/24 |
| 9 | 시니샤 미하일로비치 | Siniša Mihajlović | SS Lazio | A- | 21/21 |
| 10 | 파올로 몬테로 | Paolo Montero | Juventus FC | A- | 21/19 |
| 11 | 질베르토 마르티네스 | Gilberto Martínez | Brescia Calcio | B+ | 34/34 |
| 12 | 다니엘레 보네라 | Daniele Bonera | Parma FC | B+ | 32/32 |
| 13 | 마르코 디 로레토 | Marco Di Loreto | AC Perugia | B+ | 32/32 |
| 14 | 마테오 페라리 | Matteo Ferrari | Parma FC | B+ | 32/32 |
| 15 | 파비오 페트루치 | Fabio Petruzzi | Brescia Calcio | B+ | 31/31 |
| 16 | 마우로 밀라네세 | Mauro Milanese | AC Perugia | B+ | 31/31 |
| 17 | 크리스티안 파누치 | Christian Panucci | AS Roma | B+ | 29/29 |
| 18 | 페르 크뢸드루프 | Per Krøldrup | Udinese Calcio | B+ | 25/25 |
| 19 | 다리오 다이넬리 | Dario Dainelli | Brescia Calcio | B+ | 24/24 |
| 20 | 발레리오 베르토토 | Valerio Bertotto | Udinese Calcio | B+ | 25/21 |
| 21 | 토마스 만프레디니 | Thomas Manfredini | Udinese Calcio | B+ | 21/20 |
| 22 | 마르크 이울리아노 | Mark Iuliano | Juventus FC | B+ | 21/19 |
| 23 | 조나탕 제비나 | Jonathan Zebina | AS Roma | B+ | 19/18 |
| 24 | 마르코 마테라치 | Marco Materazzi | FC Internazionale Milano | B+ | 20/18 |
| 25 | 션 솔리아노 | Sean Sogliano | AC Perugia | B0 | 20/19 |
| 26 | 페르난두 쿠투 | Fernando Couto | SS Lazio | B0 | 15/15 |
| 27 | 주세페 카르도네 | Giuseppe Cardone | Parma FC | B0 | 13/13 |
| 28 | 알레산드로 코스타쿠르타 | Alessandro Costacurta | AC Milan | B0 | 17/12 |
| 29 | 라흐만 레자에이 | Rahman Rezaei | AC Perugia | B0 | 13/12 |
| 30 | 알다이르 | Aldair | AS Roma | B- | 17/15 |
| 31 | 파비우 빌리카 | Fábio Bilica | Brescia Calcio | B- | 11/9 |

### LB — 13 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus FC | A0 | 25/21 |
| 2 | 파비오 그로소 | Fabio Grosso | AC Perugia | A- | 30/30 |
| 3 | 주세페 파발리 | Giuseppe Favalli | SS Lazio | A- | 26/25 |
| 4 | 카하 칼라제 | Kakha Kaladze | AC Milan | A- | 25/24 |
| 5 | 뱅상 캉델라 | Vincent Candela | AS Roma | A- | 23/23 |
| 6 | 마레크 얀쿨로프스키 | Marek Jankulovski | Udinese Calcio | A- | 26/22 |
| 7 | 안토니 셰리치 | Anthony Šerić | Brescia Calcio | B+ | 30/28 |
| 8 | 주니오르 | Júnior | Parma FC | B+ | 27/27 |
| 9 | 프란체스코 코코 | Francesco Coco | FC Internazionale Milano | B+ | 19/16 |
| 10 | 미르코 피에리 | Mirko Pieri | Udinese Calcio | B0 | 22/20 |
| 11 | 조반니 파스콸레 | Giovanni Pasquale | FC Internazionale Milano | B0 | 18/13 |
| 12 | 잔루카 페소토 | Gianluca Pessotto | Juventus FC | B0 | 17/9 |
| 13 | 마르코 피사노 | Marco Pisano | Brescia Calcio | B- | 17/12 |

### RB — 11 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | A+ | 34/32 |
| 2 | 제 마리아 | Zé Maria | AC Perugia | A0 | 34/34 |
| 3 | 릴리앙 튀랑 | Lilian Thuram | Juventus FC | A0 | 27/26 |
| 4 | 다리오 시미치 | Dario Šimić | AC Milan | A- | 28/28 |
| 5 | 카푸 | Cafú | AS Roma | A- | 26/25 |
| 6 | 마시모 오도 | Massimo Oddo | SS Lazio | A- | 19/16 |
| 7 | 안토니오 필리피니 | Antonio Filippini | Brescia Calcio | B+ | 28/21 |
| 8 | 알베르투 발렌칭 | Alberto Valentim | Udinese Calcio | B0 | 20/20 |
| 9 | 파올로 네그로 | Paolo Negro | SS Lazio | B0 | 19/18 |
| 10 | 안토니오 베나리보 | Antonio Benarrivo | Parma FC | B0 | 19/16 |
| 11 | 알레산드로 비린델리 | Alessandro Birindelli | Juventus FC | B0 | 17/14 |

### DM — 10 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 에메르송 | Emerson | AS Roma | A+ | 31/31 |
| 2 | 다비드 피사로 | David Pizarro | Udinese Calcio | A0 | 32/32 |
| 3 | 안드레아 피를로 | Andrea Pirlo | AC Milan | A0 | 27/21 |
| 4 | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus FC | A- | 27/22 |
| 5 | 마투잘렝 | Matuzalém | Brescia Calcio | B+ | 29/29 |
| 6 | 마누엘레 블라시 | Manuele Blasi | AC Perugia | B+ | 27/27 |
| 7 | 시모네 바로네 | Simone Barone | Parma FC | B+ | 29/26 |
| 8 | 루이지 디 비아조 | Luigi Di Biagio | FC Internazionale Milano | B+ | 25/21 |
| 9 | 줄리아노 잔니케다 | Giuliano Giannichedda | SS Lazio | B+ | 25/18 |
| 10 | 파비오 리베라니 | Fabio Liverani | SS Lazio | B+ | 21/9 |

### CM — 22 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 에드가 다비즈 | Edgar Davids | Juventus FC | A+ | 26/25 |
| 2 | 스테파노 피오레 | Stefano Fiore | SS Lazio | A0 | 33/28 |
| 3 | 클라렌스 세이도르프 | Clarence Seedorf | AC Milan | A0 | 28/23 |
| 4 | 스티븐 아피아 | Stephen Appiah | Brescia Calcio | A- | 31/31 |
| 5 | 잠피에로 핀치 | Giampiero Pinzi | Udinese Calcio | A- | 28/28 |
| 6 | 에마누엘레 필리피니 | Emanuele Filippini | Parma FC | B+ | 30/29 |
| 7 | 사브리 라무시 | Sabri Lamouchi | Parma FC | B+ | 30/28 |
| 8 | 프란시스쿠 리마 | Francisco Lima | AS Roma | B+ | 28/27 |
| 9 | 조반니 테데스코 | Giovanni Tedesco | AC Perugia | B+ | 27/26 |
| 10 | 마르틴 예르겐센 | Martin Jørgensen | Udinese Calcio | B+ | 27/24 |
| 11 | 엠레 벨뢰졸루 | Emre Belözoğlu | FC Internazionale Milano | B+ | 25/22 |
| 12 | 크리스티안 오보도 | Christian Obodo | AC Perugia | B+ | 30/21 |
| 13 | 디에고 시메오네 | Diego Simeone | SS Lazio | B+ | 24/18 |
| 14 | 올리비에 다쿠르 | Olivier Dacourt | AS Roma | B+ | 18/18 |
| 15 | 크리스티아노 사네티 | Cristiano Zanetti | FC Internazionale Milano | B+ | 17/14 |
| 16 | 안토니오 콘테 | Antonio Conte | Juventus FC | B+ | 18/12 |
| 17 | 젠나로 가투소 | Gennaro Gattuso | AC Milan | B0 | 25/23 |
| 18 | 펩 과르디올라 | Pep Guardiola | Brescia Calcio | B0 | 16/15 |
| 19 | 마티아스 알메이다 | Matías Almeyda | FC Internazionale Milano | B0 | 16/13 |
| 20 | 마테오 브리기 | Matteo Brighi | Parma FC | B0 | 22/13 |
| 21 | 마시모 암브로시니 | Massimo Ambrosini | AC Milan | B- | 21/17 |
| 22 | 마시밀리아노 푸사니 | Massimiliano Fusani | AC Perugia | B- | 19/14 |

### CAM — 7 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 프란체스코 토티 | Francesco Totti | AS Roma | S | 24/23 |
| 2 | 로베르토 바조 | Roberto Baggio | Brescia Calcio | A+ | 32/32 |
| 3 | 알바로 레코바 | Álvaro Recoba | FC Internazionale Milano | A0 | 27/23 |
| 4 | 나카타 히데토시 | Hidetoshi Nakata | Parma FC | A- | 31/29 |
| 5 | 후이 코스타 | Rui Costa | AC Milan | A- | 24/23 |
| 6 | 히바우두 | Rivaldo | AC Milan | B+ | 22/16 |
| 7 | 도메니코 모르페오 | Domenico Morfeo | FC Internazionale Milano | B- | 17/11 |

### LW — 4 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 파벨 네드베트 | Pavel Nedvěd | Juventus FC | S | 29/27 |
| 2 | 세르지뉴 | Serginho | AC Milan | B+ | 20/10 |
| 3 | 세자르 | César | SS Lazio | B0 | 26/25 |
| 4 | 주세페 제미티 | Giuseppe Gemiti | Udinese Calcio | B- | 25/11 |

### RW — 5 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 데얀 스탄코비치 | Dejan Stanković | SS Lazio | A0 | 29/29 |
| 2 | 마우로 카모라네시 | Mauro Camoranesi | Juventus FC | A- | 30/24 |
| 3 | 세르지우 콘세이상 | Sérgio Conceição | FC Internazionale Milano | B+ | 19/14 |
| 4 | 조너선 바키니 | Jonathan Bachini | Brescia Calcio | B0 | 18/17 |
| 5 | 루카스 카스트로만 | Lucas Castromán | SS Lazio | C+ | 16/4 |

### ST — 26 people

| Pos rank | Korean | Original | Club original name | Tier | Current season apps/starts |
|---:|---|---|---|---|---|
| 1 | 아드리안 무투 | Adrian Mutu | Parma FC | S | 31/31 |
| 2 | 클라우디오 로페스 | Claudio López | SS Lazio | S | 34/30 |
| 3 | 크리스티안 비에리 | Christian Vieri | FC Internazionale Milano | S | 23/22 |
| 4 | 아드리아누 | Adriano | Parma FC | A+ | 28/26 |
| 5 | 필리포 인자기 | Filippo Inzaghi | AC Milan | A+ | 29/26 |
| 6 | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus FC | A+ | 24/20 |
| 7 | 에르난 크레스포 | Hernán Crespo | FC Internazionale Milano | A0 | 18/14 |
| 8 | 파브리치오 미콜리 | Fabrizio Miccoli | AC Perugia | A- | 34/33 |
| 9 | 안토니오 카사노 | Antonio Cassano | AS Roma | A- | 27/15 |
| 10 | 다비드 트레제게 | David Trezeguet | Juventus FC | A- | 17/14 |
| 11 | 베르나르도 코라디 | Bernardo Corradi | SS Lazio | B+ | 32/29 |
| 12 | 로베르토 무치 | Roberto Muzzi | Udinese Calcio | B+ | 27/26 |
| 13 | 지시스 브리자스 | Zisis Vryzas | AC Perugia | B+ | 30/23 |
| 14 | 빈첸초 몬텔라 | Vincenzo Montella | AS Roma | B+ | 29/22 |
| 15 | 이글리 타레 | Igli Tare | Brescia Calcio | B+ | 33/20 |
| 16 | 안드리 셰우첸코 | Andriy Shevchenko | AC Milan | B+ | 23/18 |
| 17 | 빈첸초 이아퀸타 | Vincenzo Iaquinta | Udinese Calcio | B+ | 25/16 |
| 18 | 욘 달 토마손 | Jon Dahl Tomasson | AC Milan | B+ | 18/7 |
| 19 | 마르코 디 바이오 | Marco Di Vaio | Juventus FC | B0 | 26/18 |
| 20 | 마르코 델베키오 | Marco Delvecchio | AS Roma | B0 | 16/13 |
| 21 | 카르스텐 양커 | Carsten Jancker | Udinese Calcio | B0 | 20/12 |
| 22 | 안드레아 카라촐로 | Andrea Caracciolo | AC Perugia | B0 | 22/9 |
| 23 | 루카 토니 | Luca Toni | Brescia Calcio | B- | 16/15 |
| 24 | 가브리엘 바티스투타 | Gabriel Batistuta | FC Internazionale Milano | B- | 12/9 |
| 25 | 시모네 인차기 | Simone Inzaghi | SS Lazio | B- | 18/5 |
| 26 | 알베르토 질라르디노 | Alberto Gilardino | Parma FC | C+ | 24/4 |

## 6. World Class complete 17-player list

| Grade | Pos | Korean | Original | Original club | DOB | Current league G/A |
|---|---|---|---|---|---|---|
| S | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | 0/0 |
| S | CB | 알레산드로 네스타 | Alessandro Nesta | AC Milan | 1976-03-19 | 1/0 |
| S | CAM | 프란체스코 토티 | Francesco Totti | AS Roma | 1976-09-27 | 14/6 |
| S | LW | 파벨 네드베트 | Pavel Nedvěd | Juventus FC | 1972-08-30 | 8/11 |
| S | ST | 크리스티안 비에리 | Christian Vieri | FC Internazionale Milano | 1973-07-12 | 24/0 |
| S | ST | 클라우디오 로페스 | Claudio López | SS Lazio | 1974-07-17 | 15/13 |
| S | ST | 아드리안 무투 | Adrian Mutu | Parma FC | 1979-01-08 | 17/12 |
| A+ | GK | 지다 | Dida | AC Milan | 1973-10-07 | 0/0 |
| A+ | CB | 파올로 말디니 | Paolo Maldini | AC Milan | 1968-06-26 | 2/1 |
| A+ | CB | 왈테르 사무엘 | Walter Samuel | AS Roma | 1978-03-23 | 2/0 |
| A+ | RB | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | 1/3 |
| A+ | DM | 에메르송 | Emerson | AS Roma | 1976-04-04 | 2/4 |
| A+ | CM | 에드가 다비즈 | Edgar Davids | Juventus FC | 1973-03-13 | 1/0 |
| A+ | CAM | 로베르토 바조 | Roberto Baggio | Brescia Calcio | 1967-02-18 | 12/9 |
| A+ | ST | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus FC | 1974-11-09 | 16/8 |
| A+ | ST | 필리포 인자기 | Filippo Inzaghi | AC Milan | 1973-08-09 | 16/5 |
| A+ | ST | 아드리아누 | Adriano | Parma FC | 1982-02-17 | 16/3 |

## 7. League Top Class complete 55-player provisional list

| Grade | Pos | Korean | Original | Original club |
|---|---|---|---|---|
| S | GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC |
| S | CB | 알레산드로 네스타 | Alessandro Nesta | AC Milan |
| S | CAM | 프란체스코 토티 | Francesco Totti | AS Roma |
| S | LW | 파벨 네드베트 | Pavel Nedvěd | Juventus FC |
| S | ST | 크리스티안 비에리 | Christian Vieri | FC Internazionale Milano |
| S | ST | 클라우디오 로페스 | Claudio López | SS Lazio |
| S | ST | 아드리안 무투 | Adrian Mutu | Parma FC |
| A+ | GK | 지다 | Dida | AC Milan |
| A+ | CB | 파올로 말디니 | Paolo Maldini | AC Milan |
| A+ | CB | 왈테르 사무엘 | Walter Samuel | AS Roma |
| A+ | RB | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano |
| A+ | DM | 에메르송 | Emerson | AS Roma |
| A+ | CM | 에드가 다비즈 | Edgar Davids | Juventus FC |
| A+ | CAM | 로베르토 바조 | Roberto Baggio | Brescia Calcio |
| A+ | ST | 알레산드로 델 피에로 | Alessandro Del Piero | Juventus FC |
| A+ | ST | 필리포 인자기 | Filippo Inzaghi | AC Milan |
| A+ | ST | 아드리아누 | Adriano | Parma FC |
| A0 | GK | 프란체스코 톨도 | Francesco Toldo | FC Internazionale Milano |
| A0 | GK | 안젤로 페루치 | Angelo Peruzzi | SS Lazio |
| A0 | GK | 세바스티앵 프레이 | Sébastien Frey | Parma FC |
| A0 | CB | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano |
| A0 | CB | 파비오 칸나바로 | Fabio Cannavaro | FC Internazionale Milano |
| A0 | CB | 야프 스탐 | Jaap Stam | SS Lazio |
| A0 | LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus FC |
| A0 | RB | 릴리앙 튀랑 | Lilian Thuram | Juventus FC |
| A0 | RB | 제 마리아 | Zé Maria | AC Perugia |
| A0 | DM | 안드레아 피를로 | Andrea Pirlo | AC Milan |
| A0 | DM | 다비드 피사로 | David Pizarro | Udinese Calcio |
| A0 | CM | 클라렌스 세이도르프 | Clarence Seedorf | AC Milan |
| A0 | CM | 스테파노 피오레 | Stefano Fiore | SS Lazio |
| A0 | CAM | 알바로 레코바 | Álvaro Recoba | FC Internazionale Milano |
| A0 | RW | 데얀 스탄코비치 | Dejan Stanković | SS Lazio |
| A0 | ST | 에르난 크레스포 | Hernán Crespo | FC Internazionale Milano |
| A- | GK | 모르간 데 산크티스 | Morgan De Sanctis | Udinese Calcio |
| A- | CB | 치로 페라라 | Ciro Ferrara | Juventus FC |
| A- | CB | 파올로 몬테로 | Paolo Montero | Juventus FC |
| A- | CB | 시니샤 미하일로비치 | Siniša Mihajlović | SS Lazio |
| A- | CB | 로베르토 센시니 | Roberto Sensini | Udinese Calcio |
| A- | LB | 카하 칼라제 | Kakha Kaladze | AC Milan |
| A- | LB | 주세페 파발리 | Giuseppe Favalli | SS Lazio |
| A- | LB | 마레크 얀쿨로프스키 | Marek Jankulovski | Udinese Calcio |
| A- | LB | 뱅상 캉델라 | Vincent Candela | AS Roma |
| A- | LB | 파비오 그로소 | Fabio Grosso | AC Perugia |
| A- | RB | 다리오 시미치 | Dario Šimić | AC Milan |
| A- | RB | 마시모 오도 | Massimo Oddo | SS Lazio |
| A- | RB | 카푸 | Cafú | AS Roma |
| A- | DM | 알레시오 타키나르디 | Alessio Tacchinardi | Juventus FC |
| A- | CM | 잠피에로 핀치 | Giampiero Pinzi | Udinese Calcio |
| A- | CM | 스티븐 아피아 | Stephen Appiah | Brescia Calcio |
| A- | CAM | 후이 코스타 | Rui Costa | AC Milan |
| A- | CAM | 나카타 히데토시 | Hidetoshi Nakata | Parma FC |
| A- | RW | 마우로 카모라네시 | Mauro Camoranesi | Juventus FC |
| A- | ST | 다비드 트레제게 | David Trezeguet | Juventus FC |
| A- | ST | 안토니오 카사노 | Antonio Cassano | AS Roma |
| A- | ST | 파브리치오 미콜리 | Fabrizio Miccoli | AC Perugia |

## 8. Best XI — contemporary 4-4-2 PROPOSED

> The Juventus/Lippi 4-4-2 of 2002-03 is historically representative and `assets/app.js` already supports the exact 4-4-2 two-CB/two fullbacks/LM CM DM RM/two-ST slot view. The exact **most frequently used whole-league formation was NOT statistically counted**. Avoid claiming 4-4-2 as proven mode. No team-trophy preference.

| Position | Korean | Original name | Club | Tier | Evidence/competitive reasoning |
|---|---|---|---|---|---|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | S | Serie A 2002-03 32 starts / 2827 minutes, FBref 14 clean sheets (StatMuse 15; source conflict). 2000-01 Parma 34/34, 2001-02 Juventus 34/34. Individually consistent goalkeeper, not rewarded for Scudetto. |
| CB | 알레산드로 네스타 | Alessandro Nesta | AC Milan | S | 2002-03 29 Serie A appearances/29 starts after Lazio 2000-01 29 and 2001-02 25, Milan elite CB leadership and defensive intervention; no credit for Milan UCL victory itself. |
| CB | 파올로 말디니 | Paolo Maldini | AC Milan | A+ | 2002-03 28 regular Serie A matches / 27 starts / 2424 minutes, 2 goals; provisional individual form and tactical responsibilities within registered CB role. Prior two years weighted less and many not fully independently documented. Trophy/team finish NOT a tier bonus. |
| LB | 잔루카 잠브로타 | Gianluca Zambrotta | Juventus FC | A0 | 2002-03 25 regular Serie A matches / 21 starts / 1903 minutes, 0 goals; provisional individual form and tactical responsibilities within registered LB role. Prior two years weighted less and many not fully independently documented. Trophy/team finish NOT a tier bonus. |
| RB | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | A+ | 2002-03 34 regular Serie A matches / 32 starts / 2968 minutes, 1 goals; provisional individual form and tactical responsibilities within registered RB role. Prior two years weighted less and many not fully independently documented. Trophy/team finish NOT a tier bonus. |
| DM | 안드레아 피를로 | Andrea Pirlo | AC Milan | A0 | 2002-03 Milan 27 league games/21 starts/9 goals/6 assists as deep-lying regista after 2001-02 mostly CAM; new elite role high current impact but short sustained sample, rated A0 instead of career hindsight S. |
| CM | 에드가 다비즈 | Edgar Davids | Juventus FC | A+ | 2002-03 26 regular Serie A matches / 25 starts / 2118 minutes, 1 goals; provisional individual form and tactical responsibilities within registered CM role. Prior two years weighted less and many not fully independently documented. Trophy/team finish NOT a tier bonus. |
| LW | 파벨 네드베트 | Pavel Nedvěd | Juventus FC | S | 2002-03 29 games 8 FBref goals and 11 assists, 2001-02 32 games 4g11a, 2000-01 Lazio 31 games 8g6a. High chance creation and versatility; 9-goal records in other sources flagged separately. |
| RW | 데얀 스탄코비치 | Dejan Stanković | SS Lazio | A0 | 2002-03 29 regular Serie A matches / 29 starts / 2524 minutes, 6 goals; provisional individual form and tactical responsibilities within registered RW role. Prior two years weighted less and many not fully independently documented. Trophy/team finish NOT a tier bonus. |
| ST | 크리스티안 비에리 | Christian Vieri | FC Internazionale Milano | S | 2002-03 23 Serie A games, 24 goals, 1.04 goals per game; prior 2001-02 Inter 25/22 and 2000-01 27/18. Long-term elite production despite availability; no club results premium. |
| ST | 아드리안 무투 | Adrian Mutu | Parma FC | S | 2002-03 Parma 31 Serie A matches, FBref 17 goals and 12 assists (RSSSF/Transfermarkt 18 goals unresolved). At Verona 2000-01 25/4, 2001-02 32/12; dual scorer/creator as first-choice second striker. |

### Primary competitive judgments and limitations

- GK **Buffon** 32 starts/14 FBref clean sheets (source conflict of 15 vs StatMuse) versus **Dida** 30 starts/13 clean sheets and **Frey** 34 starts/12 clean sheets. Buffon's high personal three-year consistency and recent impact tentatively place him first, without league-title bonus.
- CB **Nesta/Maldini**, two real 2002-03 Milan CBs; **Walter Samuel**, **Fabio Cannavaro**, **Jaap Stam** serious same-role competitors. UEFA win is not a direct grade bonus. Historic positioning and own 2002-03 quality should determine their relative ranks.
- LB **Zambrotta** transitioned from winger in earlier seasons to left-back during 2002-03; **Candela**, **Kaladze**, **Jankulovski** in contention. Site 2002-03 primary LB provisional given season transition.
- RB **Javier Zanetti** 34 games/32 starts versus **Thuram** 27/26 and **Zé Maria** with 34 games 6g7a as Perugia right wingback. Tactical defensive function and direct creative impact need closer comparison.
- DM **Pirlo** 27 league games 9 goals 6 assists, deep playmaker role that began in 2002/03 at Milan; **Pizarro** (Udinese 32/7g5a), **Emerson** (Roma 31/2g4a), **Tacchinardi** strong alternatives. A0 Pirlo because newly elite in this role for a single recent season.
- CM **Davids** pressing/ball-winning transition over 3 years vs Milan **Seedorf** and Lazio **Fiore**. Their role differences mean automatic same-formation choice remains open.
- LW **Nedvěd** 29 games 8 FBref goals/11 assists, extremely high recent creation and supporting 2000-01/2001-02 track record.
- RW **Dejan Stanković** Lazio 29 games/6g6a over Juve **Camoranesi** 30/4g4a and Inter **Sérgio Conceição** 19/0g2a. Extra width vs chance creation must be fairly compared.
- ST **Vieri** 23/24 goals and **Mutu** 31/(17 FBref, 18 RSSSF)/12 assists, versus **Claudio López** 34/15g13a (S), **Adriano** 28/16g3a FBref, **Filippo Inzaghi** 29/16g5a and **Del Piero** 24/16g8a. Mutu and Vieri reflect peak current year scoring contribution plus previous seasons. Both remain draft competition winners; scheme fit not final.

## 9. Top-class player three-season source matrix (not full independent audits)

Each column lists **team / domestic apps / domestic goals**. League histories exclude cups and European games. Source `prior FootballArchive DRAFT` remains weaker than independently checked player rows; unknown values remain `—` rather than false zero.

| Grade | Player | 2000-01: club/apps/goals | 2001-02: club/apps/goals | 2002-03: club/apps/goals | Both earlier seasons numeric? |
|---|---|---|---|---|---|
| S | 잔루이지 부폰 | Parma Associazione Calcio / 34 / — | Juventus FC / 34 / — | Juventus FC / 32 / 0 | Yes, not fully verified |
| S | 알레산드로 네스타 | SS Lazio / 29 / 0 | SS Lazio / 25 / — | AC Milan / 29 / 1 | Yes, not fully verified |
| S | 프란체스코 토티 | AS Roma / 30 / 13 | AS Roma / 24 / 8 | AS Roma / 24 / 14 | Yes, not fully verified |
| S | 파벨 네드베트 | SS Lazio / 31 / 8 | Juventus FC / 32 / 4 | Juventus FC / 29 / 8 | Yes, not fully verified |
| S | 크리스티안 비에리 | FC Internazionale Milano / 27 / 18 | FC Internazionale Milano / 25 / 22 | FC Internazionale Milano / 23 / 24 | Yes, not fully verified |
| S | 클라우디오 로페스 | SS Lazio / 16 / 0 | SS Lazio / 29 / 10 | SS Lazio / 34 / 15 | Yes, not fully verified |
| S | 아드리안 무투 | Hellas Verona FC / 25 / 4 | Hellas Verona FC / 32 / 12 | Parma FC / 31 / 17 | Yes, not fully verified |
| A+ | 지다 | — / — / — | — / — / — | AC Milan / 30 / 0 | No |
| A+ | 파올로 말디니 | AC Milan / 31 / — | AC Milan / 15 / — | AC Milan / 28 / 2 | Yes, not fully verified |
| A+ | 왈테르 사무엘 | AS Roma / 31 / — | AS Roma / 30 / — | AS Roma / 31 / 2 | Yes, not fully verified |
| A+ | 하비에르 사네티 | FC Internazionale Milano / 29 / — | FC Internazionale Milano / 32 / — | FC Internazionale Milano / 34 / 1 | Yes, not fully verified |
| A+ | 에메르송 | AS Roma / 13 / — | AS Roma / 28 / — | AS Roma / 31 / 2 | Yes, not fully verified |
| A+ | 에드가 다비즈 | Juventus FC / 26 / — | Juventus FC / 28 / — | Juventus FC / 26 / 1 | Yes, not fully verified |
| A+ | 로베르토 바조 | Brescia Calcio / 24 / 10 | — / — / — | Brescia Calcio / 32 / 12 | No |
| A+ | 알레산드로 델 피에로 | Juventus FC / 25 / — | Juventus FC / 32 / 16 | Juventus FC / 24 / 16 | Yes, not fully verified |
| A+ | 필리포 인자기 | Juventus FC / 28 / 11 | AC Milan / 20 / — | AC Milan / 29 / 16 | Yes, not fully verified |
| A+ | 아드리아누 | — / — / — | — / — / — | Parma FC / 28 / 16 | No |
| A0 | 프란체스코 톨도 | ACF Fiorentina / 32 / — | FC Internazionale Milano / 33 / — | FC Internazionale Milano / 32 / 1 | Yes, not fully verified |
| A0 | 안젤로 페루치 | SS Lazio / 29 / — | SS Lazio / 27 / — | SS Lazio / 30 / 0 | Yes, not fully verified |
| A0 | 세바스티앵 프레이 | FC Internazionale Milano / 28 / — | Parma Associazione Calcio / 29 / — | Parma FC / 34 / 0 | Yes, not fully verified |
| A0 | 이반 코르도바 | FC Internazionale Milano / 23 / — | FC Internazionale Milano / 30 / — | FC Internazionale Milano / 28 / 1 | Yes, not fully verified |
| A0 | 파비오 칸나바로 | Parma Associazione Calcio / 29 / — | Parma Associazione Calcio / 26 / — | FC Internazionale Milano / 28 / 0 | Yes, not fully verified |
| A0 | 야프 스탐 | — / — / — | SS Lazio / 13 / — | SS Lazio / 28 / 0 | No |
| A0 | 잔루카 잠브로타 | Juventus FC / 29 / — | Juventus FC / 32 / — | Juventus FC / 25 / 0 | Yes, not fully verified |
| A0 | 릴리앙 튀랑 | Parma Associazione Calcio / 30 / — | Juventus FC / 30 / — | Juventus FC / 27 / 1 | Yes, not fully verified |
| A0 | 제 마리아 | — / — / — | AC Perugia / 34 / — | AC Perugia / 34 / 6 | No |
| A0 | 안드레아 피를로 | FC Internazionale / Brescia Calcio / 14 / 0 | AC Milan / 19 / 2 | AC Milan / 27 / 9 | Yes, not fully verified |
| A0 | 다비드 피사로 | — / — / — | — / — / — | Udinese Calcio / 32 / 7 | No |
| A0 | 클라렌스 세이도르프 | FC Internazionale Milano / 24 / — | FC Internazionale Milano / 20 / — | AC Milan / 28 / 3 | Yes, not fully verified |
| A0 | 스테파노 피오레 | — / — / — | SS Lazio / 30 / — | SS Lazio / 33 / 6 | No |
| A0 | 알바로 레코바 | FC Internazionale Milano / 29 / 9 | FC Internazionale Milano / 18 / 6 | FC Internazionale Milano / 27 / 9 | Yes, not fully verified |
| A0 | 데얀 스탄코비치 | SS Lazio / 21 / — | SS Lazio / 27 / — | SS Lazio / 29 / 6 | Yes, not fully verified |
| A0 | 에르난 크레스포 | SS Lazio / 32 / 26 | SS Lazio / 22 / — | FC Internazionale Milano / 18 / 7 | Yes, not fully verified |
| A- | 모르간 데 산크티스 | — / — / — | — / — / — | Udinese Calcio / 34 / 0 | No |
| A- | 치로 페라라 | Juventus FC / 23 / 1 | Juventus FC / 22 / — | Juventus FC / 25 / 0 | Yes, not fully verified |
| A- | 파올로 몬테로 | Juventus FC / 23 / — | Juventus FC / 16 / — | Juventus FC / 21 / 0 | Yes, not fully verified |
| A- | 시니샤 미하일로비치 | SS Lazio / 18 / — | — / — / — | SS Lazio / 21 / 1 | No |
| A- | 로베르토 센시니 | Parma AC / 19 / 0 | Parma AC / 16 / 0 | Udinese Calcio / 30 / 3 | Yes, not fully verified |
| A- | 카하 칼라제 | AC Milan / 17 / — | AC Milan / 30 / — | AC Milan / 25 / 0 | Yes, not fully verified |
| A- | 주세페 파발리 | SS Lazio / 27 / — | SS Lazio / 20 / — | SS Lazio / 26 / 0 | Yes, not fully verified |
| A- | 마레크 얀쿨로프스키 | — / — / — | — / — / — | Udinese Calcio / 26 / 5 | No |
| A- | 뱅상 캉델라 | AS Roma / 33 / — | AS Roma / 31 / — | AS Roma / 23 / 1 | Yes, not fully verified |
| A- | 파비오 그로소 | — / — / — | AC Perugia / 24 / — | AC Perugia / 30 / 4 | No |
| A- | 다리오 시미치 | — / — / — | — / — / — | AC Milan / 28 / 1 | No |
| A- | 마시모 오도 | — / — / — | — / — / — | SS Lazio / 19 / 0 | No |
| A- | 카푸 | AS Roma / 31 / — | AS Roma / 27 / — | AS Roma / 26 / 0 | Yes, not fully verified |
| A- | 알레시오 타키나르디 | Juventus FC / 31 / — | Juventus FC / 28 / — | Juventus FC / 27 / 2 | Yes, not fully verified |
| A- | 잠피에로 핀치 | — / — / — | — / — / — | Udinese Calcio / 28 / 3 | No |
| A- | 스티븐 아피아 | Parma AC / 15 / 0 | — / — / — | Brescia Calcio / 31 / 7 | No |
| A- | 후이 코스타 | ACF Fiorentina / 29 / 6 | AC Milan / 22 / — | AC Milan / 24 / 0 | Yes, not fully verified |
| A- | 나카타 히데토시 | AS Roma / 15 / 2 | Parma Associazione Calcio / 24 / — | Parma FC / 31 / 4 | Yes, not fully verified |
| A- | 마우로 카모라네시 | — / — / — | — / — / — | Juventus FC / 30 / 4 | No |
| A- | 다비드 트레제게 | Juventus FC / 25 / 14 | Juventus FC / 34 / 24 | Juventus FC / 17 / 9 | Yes, not fully verified |
| A- | 안토니오 카사노 | — / — / — | — / — / — | AS Roma / 27 / 9 | No |
| A- | 파브리치오 미콜리 | — / — / — | — / — / — | AC Perugia / 34 / 9 | No |

## 10. Sources and technical QA

### Primary research sources

- FBref 2002-03 league main page: https://fbref.com/en/comps/11/2002-2003/2002-2003-Serie-A-Stats ; separates Serie A from Cup/Europe.
- Juventus: https://fbref.com/en/squads/e0652b02/2002-2003/Juventus-Stats .
- Internazionale: https://fbref.com/en/squads/d609edc0/2002-2003/Internazionale-Stats .
- AC Milan: https://fbref.com/en/squads/dc56fe14/2002-2003/Milan-Stats .
- SS Lazio: https://fbref.com/en/squads/7213da33/2002-2003/Lazio-Stats .
- Parma: https://fbref.com/en/squads/eab4234c/2002-2003/Parma-Stats .
- Udinese: https://fbref.com/en/squads/04eea015/2002-2003/Udinese-Stats .
- AS Roma: https://fbref.com/en/squads/cf74a709/2002-2003/Roma-Stats .
- Brescia: https://fbref.com/en/squads/4ef57aeb/2002-2003/Brescia-Stats .
- Perugia: https://fbref.com/en/squads/37cba288/2002-2003/Perugia-Stats .
- Milan official 2002-03 squad: https://www.acmilan.com/en/roster-archive/men-first-team-archive/acmilan-2002-roster .
- Player and DOB historical rosters: https://www.footballsquads.co.uk/italy/2002-2003/seriea/ .
- Historical exact-year individual profile Mutu: https://www.rsssf.org/players/mutudata.html ; Pirlo: https://www.rsssf.org/players/pirlodata.html .
- Period Camoranesi DOB 1976-10-04: https://www.figc.it/en/fans/news/happy-birthday-to-mauro-camoranesi-as-he-turns-45-nggb2gdw .
- Buffon historical FBref vs StatMuse clean sheet discrepancy https://www.statmuse.com/fc/ask/most-clean-sheets-in-2003?l=seriea .

### Source limitations, signoff statuses

| Check | Observed result |
|---|---|
| Nine next-season actual participant club names | 9 |
| Nominees from correct 2002-03 club only | 145, structural pass |
| All identity fields incl Korean original name original club DOB | 145/145 |
| All nominated current league games, starts, minutes | 145/145 |
| Exactly 11 starter-equivalent slots per team | 9/9 |
| At most 1 alternate per club-pos bucket | Yes, structural pass |
| Provisional tier and contiguous position rank | 145/145 |
| Best XI uniqueness, 4-4-2 11 correct positions | PASS with structural JavaScript equivalence |
| Earlier two-season apps both numeric | 64/145 |
| Fully independently completed 3-year player-by-player qualitative verification | 0 / 145 |
| Whole league dominant 2002-03 formation statistically counted | NO, 4-4-2 provisional |
| Matchwise first-team positional frequency across all 34 league matches for all nine clubs | NO |
| Four historical league statistics discrepancies | Open, recorded in meta.statDiscrepancies |
| Repeatable local validator | scripts/verify-seriea-2002-03-players.mjs; equivalent code executed in GitHub connector JavaScript; node CLI NOT run |
| GitHub Pages deployment verification | Check GitHub Actions separately after final commit |
| Actual deployed browser DOM and filters clicked | NOT tested |
| User historical tier/Best XI approval | NOT granted (draft_unapproved) |

## 11. Remaining review and procedural stop

- Resolve goals discrepancy Mutu, Adriano, Nedvěd using official match reports and league logs, and Buffon clean sheets methodology. No fabricated certainty from the easier source.
- Finish 2000-01 and 2001-02 personal form for at least **81** nominees missing one or both earlier seasons; for players with linked years, verify those copied old draft figures against new original data.
- Check full 34-fixture modal position each player, flank side, team representative formations, and count league-wide 4-4-2 vs 4-3-1-2 etc before 'most fashionable formation' historical signoff.
- Current 145 tiers, same-tier order and XI are provisional, not user-final. Do not move to next 2003-04 season before a new explicit next command.

**End of scope: Serie A 2002-03 only. All results remain DRAFT.**
