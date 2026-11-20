# UCL 2018-19 — Existing 264 Candidates: Individual UEFA Assessment, Position Ranks, Best XI (DRAFT)

> **DRAFT, not approved by the user.** Current 2018-19 official-season player report aggregates have been mapped to all 264 pre-existing candidates. This is **not an independent full 2016-17 through 2018-19 three-season match-by-match historical certification**.

**Data JSON commit SHA:** `ae6edeb0cf83948db74af407fc19acdd9c1d18dc`

## Scope and baseline
- Current season: UEFA Champions League **2018-19**. Conceptual three-season weighting **2018-19 > 2017-18 > 2016-17**. Later achievements cannot be back-applied.
- Main repository file: https://github.com/wjdduddlf112/footballarch/blob/main/data/ucl-2018-19.json. Before editing: 264 existing players, 214 grades/ranks, 50 ungraded.
- After DRAFT assessment: **264/264 graded** and **264/264 ranked**; **50** previously ungraded new grades; **82** old-grade changes.
- Actual existing evaluated clubs: barcelona, tottenham, psg, liverpool, porto, schalke, bayern, ajax, mancity, lyon, realmadrid, roma, juventus, manutd, atleti, dortmund. These are 16 knockout-stage representatives, not all 32 group-stage participants.
- The existing candidate set, stable IDs, original names, clubs, positions and pre-existing source links were retained in existing original order. No candidates were inserted or removed.
- UEFA official 2018/19 technical report player squad tables: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- UEFA 2018/19 Technical Observers season squad: https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- Earlier technical reports (partial contextual reference only): https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf and https://www.uefa.com/MultimediaFiles/Download/uefaorg/General/02/49/98/04/2499804_DOWNLOAD.pdf
- Team titles and final standings are not graded as individual bonuses; goal events, assists, distribution, defensive influence, availability and decisive match performances are assessed according to position.

## Verification outcomes
- Mechanically verified against exact GitHub original blob: IDs unique and unchanged (264/264), original club, position, original-language name and DOB strings unchanged, club tables, all 125 fixture records, knockout and sources unchanged, Best XI valid and 11 distinct members, stored formation 4-3-3.
- Current-season official aggregate of games, minutes, goals and assists reviewed/mapped to each of the 264 existing candidates; blanks in a raw technical-report line treated as zero only if that player's line and field were confirmed, not as proof of historical inactivity.
- All graded player's relative position ranks contiguous 1–N and tier-congruent (higher tier not ranked beneath lower).
- Original all 264 DOB values were present but official identity/DOB independent primary-source audit was not rerun; validity and historical correctness are not asserted.
- **Incomplete / explicitly NOT verified**: player-by-player 2016-17 and 2017-18 historical all-match individual minutes / major actions for every candidate, 2018-19 match-by-match predominant positions (multi-role, lateral), CI workflow, live GitHub Pages browser behavior or deployment.
- Thus **0/264** complete independent three-season individual historical audits; **264/264 historical follow-up reviews pending**, even where current 2018-19 tier/rank is populated.

## Changed pre-existing tiers (82 players)

| Position | Korean name | Original name | Club (original name) | Old tier | New tier | UCL 18/19 apps | Minutes | Goals | Assists |
|---|---|---|---|---|---|---:|---:|---:|---:|
| GK | 로만 뷔르키 | Roman Bürki | Borussia Dortmund | A0 | B+ | 7 | 630 | 0 | 0 |
| LB | 아슈라프 하키미 | Achraf Hakimi | Borussia Dortmund | B+ | A- | 5 | 370 | 0 | 3 |
| DM | 악셀 비첼 | Axel Witsel | Borussia Dortmund | A+ | A- | 7 | 629 | 1 | 0 |
| CAM | 마르코 로이스 | Marco Reus | Borussia Dortmund | S | A- | 6 | 524 | 1 | 1 |
| RW | 제이든 산초 | Jadon Sancho | Borussia Dortmund | A+ | A- | 7 | 438 | 1 | 1 |
| ST | 파코 알카세르 | Paco Alcácer | Borussia Dortmund | A- | B+ | 5 | 356 | 1 | 1 |
| LB | 하파엘 게헤이루 | Raphaël Guerreiro | Borussia Dortmund | B+ | A- | 6 | 284 | 4 | 0 |
| CB | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | A+ | A- | 6 | 540 | 1 | 0 |
| LB | 필리피 루이스 | Filipe Luís | Club Atlético de Madrid | A- | B+ | 5 | 405 | 0 | 1 |
| LW | 토마 르마르 | Thomas Lemar | Club Atlético de Madrid | B+ | B0 | 7 | 410 | 0 | 1 |
| ST | 루이스 수아레스 | Luis Suárez | FC Barcelona | A+ | A0 | 10 | 900 | 1 | 5 |
| CB | 사뮈엘 움티티 | Samuel Umtiti | FC Barcelona | B+ | C+ | 1 | 79 | 0 | 0 |
| RW | 말콤 | Malcom | FC Barcelona | B- | C+ | 3 | 39 | 1 | 0 |
| GK | 위고 요리스 | Hugo Lloris | Tottenham Hotspur FC | A- | A+ | 11 | 979 | 0 | 0 |
| CB | 토비 알데르베이럴트 | Toby Alderweireld | Tottenham Hotspur FC | A0 | A+ | 12 | 1080 | 0 | 0 |
| CB | 얀 베르통언 | Jan Vertonghen | Tottenham Hotspur FC | A0 | A+ | 10 | 849 | 1 | 1 |
| DM | 해리 윙크스 | Harry Winks | Tottenham Hotspur FC | B+ | A- | 10 | 676 | 0 | 0 |
| CM | 무사 시소코 | Moussa Sissoko | Tottenham Hotspur FC | A- | A+ | 10 | 730 | 0 | 1 |
| CAM | 크리스티안 에릭센 | Christian Eriksen | Tottenham Hotspur FC | A0 | A+ | 12 | 1003 | 2 | 3 |
| LW | 손흥민 | Son Heung-min | Tottenham Hotspur FC | A0 | A+ | 12 | 906 | 4 | 1 |
| RW | 루카스 모우라 | Lucas Moura | Tottenham Hotspur FC | A0 | A+ | 12 | 725 | 5 | 0 |
| LW | 에릭 라멜라 | Erik Lamela | Tottenham Hotspur FC | B- | B0 | 9 | 333 | 1 | 1 |
| GK | 잔루이지 부폰 | Gianluigi Buffon | Paris Saint-Germain FC | B+ | B- | 5 | 450 | 0 | 0 |
| CB | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | A+ | A- | 7 | 616 | 0 | 0 |
| CB | 프레스넬 킴펨베 | Presnel Kimpembe | Paris Saint-Germain FC | A- | B+ | 8 | 647 | 1 | 0 |
| LB | 후안 베르나트 | Juan Bernat | Paris Saint-Germain FC | A- | A0 | 8 | 675 | 3 | 0 |
| DM | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | A+ | A- | 7 | 630 | 0 | 1 |
| CM | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | A+ | A- | 7 | 601 | 0 | 0 |
| CM | 율리안 드락슬러 | Julian Draxler | Paris Saint-Germain FC | B+ | B0 | 7 | 284 | 0 | 1 |
| LW | 네이마르 | Neymar | Paris Saint-Germain FC | S | A+ | 6 | 532 | 5 | 1 |
| RW | 앙헬 디마리아 | Ángel Di María | Paris Saint-Germain FC | A+ | A0 | 8 | 661 | 2 | 3 |
| ST | 킬리안 음바페 | Kylian Mbappé | Paris Saint-Germain FC | S | A+ | 8 | 701 | 4 | 4 |
| GK | 알퐁스 아레올라 | Alphonse Areola | Paris Saint-Germain FC | A- | B+ | 3 | 270 | 0 | 0 |
| LW | 무사 디아비 | Moussa Diaby | Paris Saint-Germain FC | B0 | C- | 1 | 7 | 0 | 0 |
| ST | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | A+ | B+ | 7 | 415 | 2 | 0 |
| GK | 알리송 베케르 | Alisson Becker | Liverpool FC | A+ | S | 13 | 1170 | 0 | 0 |
| CB | 조엘 마티프 | Joël Matip | Liverpool FC | A- | A0 | 8 | 720 | 0 | 1 |
| DM | 파비뉴 | Fabinho | Liverpool FC | A- | A+ | 11 | 727 | 0 | 0 |
| LW | 사디오 마네 | Sadio Mané | Liverpool FC | S | A+ | 13 | 1152 | 4 | 1 |
| RW | 모하메드 살라 | Mohamed Salah | Liverpool FC | S | A+ | 12 | 1058 | 5 | 2 |
| ST | 호베르투 피르미누 | Roberto Firmino | Liverpool FC | A- | A0 | 12 | 749 | 4 | 1 |
| DM | 제임스 밀너 | James Milner | Liverpool FC | B+ | A- | 12 | 901 | 2 | 2 |
| GK | 마누엘 노이어 | Manuel Neuer | FC Bayern München | A0 | A- | 8 | 720 | 0 | 0 |
| CB | 니클라스 쥘레 | Niklas Süle | FC Bayern München | A+ | A- | 6 | 451 | 0 | 0 |
| CB | 마츠 훔멜스 | Mats Hummels | FC Bayern München | A0 | A- | 6 | 539 | 1 | 0 |
| DM | 티아고 알칸타라 | Thiago Alcântara | FC Bayern München | A+ | A0 | 5 | 388 | 0 | 1 |
| CAM | 하메스 로드리게스 | James Rodríguez | FC Bayern München | A- | B+ | 5 | 336 | 0 | 1 |
| LW | 킹슬리 코망 | Kingsley Coman | FC Bayern München | B+ | B- | 3 | 129 | 1 | 0 |
| RW | 세르주 그나브리 | Serge Gnabry | FC Bayern München | A- | B+ | 7 | 446 | 0 | 2 |
| ST | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | S | A+ | 8 | 713 | 8 | 0 |
| DM | 프렝키 더 용 | Frenkie de Jong | AFC Ajax | A+ | S | 11 | 986 | 0 | 0 |
| GK | 에데르송 | Ederson | Manchester City FC | A+ | A0 | 10 | 900 | 0 | 1 |
| LW | 르로이 사네 | Leroy Sané | Manchester City FC | A- | A+ | 8 | 395 | 4 | 5 |
| LB | 페를랑 멘디 | Ferland Mendy | Olympique Lyonnais | A+ | A0 | 8 | 707 | 0 | 1 |
| CM | 탕기 은돔벨레 | Tanguy Ndombele | Olympique Lyonnais | A- | A+ | 8 | 637 | 2 | 0 |
| CAM | 나빌 페키르 | Nabil Fekir | Olympique Lyonnais | A- | A0 | 6 | 506 | 3 | 2 |
| LW | 멤피스 데파이 | Memphis Depay | Olympique Lyonnais | A+ | A0 | 8 | 618 | 1 | 3 |
| CB | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | A0 | A- | 5 | 419 | 0 | 0 |
| CB | 라파엘 바란 | Raphaël Varane | Real Madrid CF | A- | B+ | 4 | 360 | 0 | 0 |
| DM | 카세미루 | Casemiro | Real Madrid CF | A0 | A- | 6 | 505 | 1 | 0 |
| CM | 루카 모드리치 | Luka Modrić | Real Madrid CF | A0 | B+ | 6 | 467 | 0 | 1 |
| CM | 토니 크로스 | Toni Kroos | Real Madrid CF | A0 | A- | 8 | 645 | 1 | 1 |
| RW | 가레스 베일 | Gareth Bale | Real Madrid CF | B+ | A- | 7 | 489 | 3 | 2 |
| ST | 카림 벤제마 | Karim Benzema | Real Madrid CF | A+ | A0 | 8 | 587 | 4 | 2 |
| LB | 세르히오 레길론 | Sergio Reguilón | Real Madrid CF | B+ | A- | 4 | 360 | 0 | 1 |
| CB | 코스타스 마놀라스 | Kostas Manolas | AS Roma | A0 | A- | 7 | 660 | 1 | 0 |
| LB | 알렉산다르 콜라로프 | Aleksandar Kolarov | AS Roma | A+ | A- | 8 | 661 | 0 | 1 |
| CAM | 로렌초 펠레그리니 | Lorenzo Pellegrini | AS Roma | B+ | A- | 6 | 395 | 1 | 3 |
| LW | 스테판 엘샤라위 | Stephan El Shaarawy | AS Roma | A0 | B- | 4 | 263 | 0 | 1 |
| RW | 젱기즈 윈데르 | Cengiz Ünder | AS Roma | B+ | A- | 6 | 437 | 3 | 2 |
| ST | 에딘 제코 | Edin Džeko | AS Roma | A- | A+ | 6 | 570 | 5 | 4 |
| GK | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus FC | A+ | A0 | 10 | 900 | 0 | 0 |
| CB | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | A0 | A- | 10 | 900 | 0 | 2 |
| CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | A+ | A0 | 6 | 540 | 0 | 0 |
| RB | 주앙 칸셀루 | João Cancelo | Juventus FC | A+ | A- | 7 | 479 | 0 | 2 |
| DM | 미랄렘 피아니치 | Miralem Pjanić | Juventus FC | A+ | A0 | 10 | 813 | 2 | 1 |
| LW | 마리오 만주키치 | Mario Mandžukić | Juventus FC | A- | B0 | 8 | 579 | 1 | 0 |
| LW | 도글라스 코스타 | Douglas Costa | Juventus FC | B0 | C+ | 5 | 157 | 0 | 0 |
| ST | 파울로 디발라 | Paulo Dybala | Juventus FC | B+ | A- | 9 | 518 | 5 | 0 |
| GK | 다비드 데 헤아 | David de Gea | Manchester United FC | A- | B+ | 9 | 810 | 0 | 0 |
| CM | 안데르 에레라 | Ander Herrera | Manchester United FC | B+ | B- | 2 | 169 | 0 | 0 |
| CM | 폴 포그바 | Paul Pogba | Manchester United FC | A0 | A- | 9 | 729 | 2 | 1 |

## Newly graded (50 players)

| Position | Korean name | Original name | Club (original name) | Old tier | New tier | UCL apps | Minutes | Goals | Assists |
|---|---|---|---|---|---|---:|---:|---:|---:|
| RB | 틸로 케러 | Thilo Kehrer | Paris Saint-Germain FC | none | B+ | 7 | 488 | 0 | 0 |
| ST | 디보크 오리기 | Divock Origi | Liverpool FC | none | B+ | 8 | 217 | 3 | 0 |
| GK | 이케르 카시야스 | Iker Casillas | FC Porto | none | B+ | 10 | 930 | 0 | 0 |
| CB | 펠리피 | Felipe | FC Porto | none | A- | 10 | 930 | 1 | 0 |
| CB | 에데르 밀리탕 | Éder Militão | FC Porto | none | A0 | 9 | 823 | 2 | 0 |
| LB | 알렉스 텔리스 | Alex Telles | FC Porto | none | A0 | 10 | 930 | 1 | 3 |
| RB | 막시 페레이라 | Maxi Pereira | FC Porto | none | B0 | 8 | 634 | 0 | 0 |
| DM | 다닐루 페레이라 | Danilo Pereira | FC Porto | none | A- | 10 | 930 | 0 | 0 |
| CM | 엑토르 에레라 | Héctor Herrera | FC Porto | none | A- | 9 | 834 | 2 | 1 |
| CM | 오타비우 | Otávio | FC Porto | none | B+ | 8 | 516 | 2 | 1 |
| LW | 야신 브라히미 | Yacine Brahimi | FC Porto | none | B+ | 9 | 624 | 0 | 2 |
| RW | 헤수스 코로나 | Jesús Corona | FC Porto | none | A- | 8 | 561 | 3 | 2 |
| ST | 무사 마레가 | Moussa Marega | FC Porto | none | A+ | 9 | 840 | 6 | 2 |
| CB | 페페 | Pepe | FC Porto | none | B+ | 3 | 300 | 0 | 0 |
| CM | 올리베르 토레스 | Óliver Torres | FC Porto | none | B0 | 5 | 351 | 0 | 2 |
| RW | 에르나니 | Hernâni | FC Porto | none | C+ | 6 | 124 | 0 | 1 |
| ST | 티키뉴 소아레스 | Tiquinho Soares | FC Porto | none | B0 | 4 | 275 | 1 | 1 |
| GK | 랄프 페어만 | Ralf Fährmann | FC Schalke 04 | none | B0 | 6 | 540 | 0 | 0 |
| CB | 살리프 사네 | Salif Sané | FC Schalke 04 | none | B+ | 6 | 540 | 0 | 0 |
| CB | 마티야 나스타시치 | Matija Nastasić | FC Schalke 04 | none | B0 | 6 | 540 | 0 | 0 |
| CB | 뱅자맹 스탐불리 | Benjamin Stambouli | FC Schalke 04 | none | B+ | 5 | 431 | 0 | 0 |
| LB | 바스티안 오치프카 | Bastian Oczipka | FC Schalke 04 | none | C+ | 2 | 180 | 0 | 0 |
| RB | 다니엘 칼리주리 | Daniel Caligiuri | FC Schalke 04 | none | B+ | 6 | 512 | 0 | 0 |
| DM | 나빌 벤탈렙 | Nabil Bentaleb | FC Schalke 04 | none | A- | 6 | 422 | 3 | 0 |
| CM | 웨스턴 맥케니 | Weston McKennie | FC Schalke 04 | none | B+ | 6 | 373 | 1 | 1 |
| CAM | 아민 하리트 | Amine Harit | FC Schalke 04 | none | C+ | 5 | 140 | 0 | 0 |
| ST | 귀도 부르크슈탈러 | Guido Burgstaller | FC Schalke 04 | none | C+ | 6 | 231 | 1 | 1 |
| ST | 마르크 우트 | Mark Uth | FC Schalke 04 | none | B- | 5 | 395 | 1 | 0 |
| GK | 알렉산더 뉘벨 | Alexander Nübel | FC Schalke 04 | none | B- | 2 | 180 | 0 | 0 |
| CB | 제프리 브루마 | Jeffrey Bruma | FC Schalke 04 | none | C+ | 2 | 180 | 0 | 0 |
| DM | 제바스티안 루디 | Sebastian Rudy | FC Schalke 04 | none | C+ | 4 | 240 | 0 | 0 |
| CM | 주아트 세르다르 | Suat Serdar | FC Schalke 04 | none | B0 | 7 | 503 | 0 | 1 |
| ST | 브릴 엠볼로 | Breel Embolo | FC Schalke 04 | none | B- | 5 | 385 | 0 | 1 |
| GK | 안드레 오나나 | André Onana | AFC Ajax | none | A+ | 12 | 1080 | 0 | 0 |
| CB | 데일리 블린트 | Daley Blind | AFC Ajax | none | A+ | 12 | 1080 | 0 | 0 |
| LB | 니콜라스 탈리아피코 | Nicolás Tagliafico | AFC Ajax | none | A+ | 10 | 900 | 3 | 0 |
| RB | 누사이르 마즈라위 | Noussair Mazraoui | AFC Ajax | none | A- | 11 | 827 | 0 | 2 |
| CM | 라세 쇠네 | Lasse Schöne | AFC Ajax | none | A0 | 11 | 886 | 1 | 2 |
| CAM | 도니 판더베이크 | Donny van de Beek | AFC Ajax | none | A+ | 12 | 985 | 3 | 2 |
| CB | 요엘 펠트만 | Joël Veltman | AFC Ajax | none | B0 | 5 | 310 | 0 | 0 |
| RB | 라스무스 크리스텐센 | Rasmus Nissen Kristensen | AFC Ajax | none | C- | 1 | 9 | 0 | 0 |
| CM | 카렐 에이팅 | Carel Eiting | AFC Ajax | none | C+ | 1 | 90 | 0 | 1 |
| CAM | 자카리아 라비아드 | Zakaria Labyad | AFC Ajax | none | C- | 1 | 4 | 0 | 0 |
| ST | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | AFC Ajax | none | C+ | 5 | 96 | 0 | 2 |
| CB | 니콜라스 오타멘디 | Nicolás Otamendi | Manchester City FC | none | B0 | 5 | 402 | 0 | 0 |
| RB | 하파엘 다 시우바 | Rafael | Olympique Lyonnais | none | B- | 3 | 240 | 0 | 0 |
| LB | 마르셀루 | Marcelo | Real Madrid CF | none | B+ | 4 | 344 | 1 | 1 |
| CAM | 하비에르 파스토레 | Javier Pastore | AS Roma | none | C+ | 1 | 59 | 0 | 0 |
| CB | 에리크 바이 | Eric Bailly | Manchester United FC | none | B- | 4 | 306 | 0 | 0 |
| DM | 스콧 맥토미니 | Scott McTominay | Manchester United FC | none | B0 | 3 | 270 | 0 | 0 |

## World Class (S / A+)
- **47** total.
- S: 버질 판데이크 (Virgil van Dijk) — Liverpool FC, CB #1
- S: 프렝키 더 용 (Frenkie de Jong) — AFC Ajax, DM #1
- S: 알리송 베케르 (Alisson Becker) — Liverpool FC, GK #1
- S: 리오넬 메시 (Lionel Messi) — FC Barcelona, RW #1
- S: 두샨 타디치 (Dušan Tadić) — AFC Ajax, ST #1
- A+: 도니 판더베이크 (Donny van de Beek) — AFC Ajax, CAM #1
- A+: 크리스티안 에릭센 (Christian Eriksen) — Tottenham Hotspur FC, CAM #2
- A+: 마테이스 더리흐트 (Matthijs de Ligt) — AFC Ajax, CB #2
- A+: 얀 베르통언 (Jan Vertonghen) — Tottenham Hotspur FC, CB #3
- A+: 토비 알데르베이럴트 (Toby Alderweireld) — Tottenham Hotspur FC, CB #4
- A+: 데일리 블린트 (Daley Blind) — AFC Ajax, CB #5
- A+: 제라르 피케 (Gerard Piqué) — FC Barcelona, CB #6
- A+: 에므리크 라포르트 (Aymeric Laporte) — Manchester City FC, CB #7
- A+: 조르지니오 베이날뒴 (Georginio Wijnaldum) — Liverpool FC, CM #1
- A+: 조던 헨더슨 (Jordan Henderson) — Liverpool FC, CM #2
- A+: 탕기 은돔벨레 (Tanguy Ndombele) — Olympique Lyonnais, CM #3
- A+: 무사 시소코 (Moussa Sissoko) — Tottenham Hotspur FC, CM #4
- A+: 베르나르두 실바 (Bernardo Silva) — Manchester City FC, CM #5
- A+: 다비드 실바 (David Silva) — Manchester City FC, CM #6
- A+: 파비뉴 (Fabinho) — Liverpool FC, DM #2
- A+: 세르히오 부스케츠 (Sergio Busquets) — FC Barcelona, DM #3
- A+: 페르난지뉴 (Fernandinho) — Manchester City FC, DM #4
- A+: 안드레 오나나 (André Onana) — AFC Ajax, GK #2
- A+: 마르크안드레 테어 슈테겐 (Marc-André ter Stegen) — FC Barcelona, GK #3
- A+: 위고 요리스 (Hugo Lloris) — Tottenham Hotspur FC, GK #4
- A+: 얀 오블라크 (Jan Oblak) — Club Atlético de Madrid, GK #5
- A+: 앤드루 로버트슨 (Andy Robertson) — Liverpool FC, LB #1
- A+: 조르디 알바 (Jordi Alba) — FC Barcelona, LB #2
- A+: 니콜라스 탈리아피코 (Nicolás Tagliafico) — AFC Ajax, LB #3
- A+: 사디오 마네 (Sadio Mané) — Liverpool FC, LW #1
- A+: 네이마르 (Neymar) — Paris Saint-Germain FC, LW #2
- A+: 손흥민 (Son Heung-min) — Tottenham Hotspur FC, LW #3
- A+: 르로이 사네 (Leroy Sané) — Manchester City FC, LW #4
- A+: 트렌트 알렉산더아널드 (Trent Alexander-Arnold) — Liverpool FC, RB #1
- A+: 요주아 키미히 (Joshua Kimmich) — FC Bayern München, RB #2
- A+: 모하메드 살라 (Mohamed Salah) — Liverpool FC, RW #2
- A+: 라힘 스털링 (Raheem Sterling) — Manchester City FC, RW #3
- A+: 하킴 지예시 (Hakim Ziyech) — AFC Ajax, RW #4
- A+: 루카스 모우라 (Lucas Moura) — Tottenham Hotspur FC, RW #5
- A+: 로베르트 레반도프스키 (Robert Lewandowski) — FC Bayern München, ST #2
- A+: 크리스티아누 호날두 (Cristiano Ronaldo) — Juventus FC, ST #3
- A+: 무사 마레가 (Moussa Marega) — FC Porto, ST #4
- A+: 에딘 제코 (Edin Džeko) — AS Roma, ST #5
- A+: 세르히오 아궤로 (Sergio Agüero) — Manchester City FC, ST #6
- A+: 킬리안 음바페 (Kylian Mbappé) — Paris Saint-Germain FC, ST #7
- A+: 해리 케인 (Harry Kane) — Tottenham Hotspur FC, ST #8
- A+: 앙투안 그리즈만 (Antoine Griezmann) — Club Atlético de Madrid, ST #9

## Competition Top Class (S / A+ / A0 / A-)
- **119** total.
- S: 버질 판데이크 (Virgil van Dijk) — Liverpool FC, CB #1
- S: 프렝키 더 용 (Frenkie de Jong) — AFC Ajax, DM #1
- S: 알리송 베케르 (Alisson Becker) — Liverpool FC, GK #1
- S: 리오넬 메시 (Lionel Messi) — FC Barcelona, RW #1
- S: 두샨 타디치 (Dušan Tadić) — AFC Ajax, ST #1
- A+: 도니 판더베이크 (Donny van de Beek) — AFC Ajax, CAM #1
- A+: 크리스티안 에릭센 (Christian Eriksen) — Tottenham Hotspur FC, CAM #2
- A+: 마테이스 더리흐트 (Matthijs de Ligt) — AFC Ajax, CB #2
- A+: 얀 베르통언 (Jan Vertonghen) — Tottenham Hotspur FC, CB #3
- A+: 토비 알데르베이럴트 (Toby Alderweireld) — Tottenham Hotspur FC, CB #4
- A+: 데일리 블린트 (Daley Blind) — AFC Ajax, CB #5
- A+: 제라르 피케 (Gerard Piqué) — FC Barcelona, CB #6
- A+: 에므리크 라포르트 (Aymeric Laporte) — Manchester City FC, CB #7
- A+: 조르지니오 베이날뒴 (Georginio Wijnaldum) — Liverpool FC, CM #1
- A+: 조던 헨더슨 (Jordan Henderson) — Liverpool FC, CM #2
- A+: 탕기 은돔벨레 (Tanguy Ndombele) — Olympique Lyonnais, CM #3
- A+: 무사 시소코 (Moussa Sissoko) — Tottenham Hotspur FC, CM #4
- A+: 베르나르두 실바 (Bernardo Silva) — Manchester City FC, CM #5
- A+: 다비드 실바 (David Silva) — Manchester City FC, CM #6
- A+: 파비뉴 (Fabinho) — Liverpool FC, DM #2
- A+: 세르히오 부스케츠 (Sergio Busquets) — FC Barcelona, DM #3
- A+: 페르난지뉴 (Fernandinho) — Manchester City FC, DM #4
- A+: 안드레 오나나 (André Onana) — AFC Ajax, GK #2
- A+: 마르크안드레 테어 슈테겐 (Marc-André ter Stegen) — FC Barcelona, GK #3
- A+: 위고 요리스 (Hugo Lloris) — Tottenham Hotspur FC, GK #4
- A+: 얀 오블라크 (Jan Oblak) — Club Atlético de Madrid, GK #5
- A+: 앤드루 로버트슨 (Andy Robertson) — Liverpool FC, LB #1
- A+: 조르디 알바 (Jordi Alba) — FC Barcelona, LB #2
- A+: 니콜라스 탈리아피코 (Nicolás Tagliafico) — AFC Ajax, LB #3
- A+: 사디오 마네 (Sadio Mané) — Liverpool FC, LW #1
- A+: 네이마르 (Neymar) — Paris Saint-Germain FC, LW #2
- A+: 손흥민 (Son Heung-min) — Tottenham Hotspur FC, LW #3
- A+: 르로이 사네 (Leroy Sané) — Manchester City FC, LW #4
- A+: 트렌트 알렉산더아널드 (Trent Alexander-Arnold) — Liverpool FC, RB #1
- A+: 요주아 키미히 (Joshua Kimmich) — FC Bayern München, RB #2
- A+: 모하메드 살라 (Mohamed Salah) — Liverpool FC, RW #2
- A+: 라힘 스털링 (Raheem Sterling) — Manchester City FC, RW #3
- A+: 하킴 지예시 (Hakim Ziyech) — AFC Ajax, RW #4
- A+: 루카스 모우라 (Lucas Moura) — Tottenham Hotspur FC, RW #5
- A+: 로베르트 레반도프스키 (Robert Lewandowski) — FC Bayern München, ST #2
- A+: 크리스티아누 호날두 (Cristiano Ronaldo) — Juventus FC, ST #3
- A+: 무사 마레가 (Moussa Marega) — FC Porto, ST #4
- A+: 에딘 제코 (Edin Džeko) — AS Roma, ST #5
- A+: 세르히오 아궤로 (Sergio Agüero) — Manchester City FC, ST #6
- A+: 킬리안 음바페 (Kylian Mbappé) — Paris Saint-Germain FC, ST #7
- A+: 해리 케인 (Harry Kane) — Tottenham Hotspur FC, ST #8
- A+: 앙투안 그리즈만 (Antoine Griezmann) — Club Atlético de Madrid, ST #9
- A0: 나빌 페키르 (Nabil Fekir) — Olympique Lyonnais, CAM #3
- A0: 에데르 밀리탕 (Éder Militão) — FC Porto, CB #8
- A0: 조엘 마티프 (Joël Matip) — Liverpool FC, CB #9
- A0: 조르조 키엘리니 (Giorgio Chiellini) — Juventus FC, CB #10
- A0: 이반 라키티치 (Ivan Rakitić) — FC Barcelona, CM #7
- A0: 라세 쇠네 (Lasse Schöne) — AFC Ajax, CM #8
- A0: 블레즈 마튀디 (Blaise Matuidi) — Juventus FC, CM #9
- A0: 사울 니게스 (Saúl Ñíguez) — Club Atlético de Madrid, CM #10
- A0: 레온 고레츠카 (Leon Goretzka) — FC Bayern München, CM #11
- A0: 미랄렘 피아니치 (Miralem Pjanić) — Juventus FC, DM #5
- A0: 우셈 아우아르 (Houssem Aouar) — Olympique Lyonnais, DM #6
- A0: 로드리 (Rodri) — Club Atlético de Madrid, DM #7
- A0: 티아고 알칸타라 (Thiago Alcântara) — FC Bayern München, DM #8
- A0: 에데르송 (Ederson) — Manchester City FC, GK #6
- A0: 보이치에흐 슈쳉스니 (Wojciech Szczęsny) — Juventus FC, GK #7
- A0: 알렉스 텔리스 (Alex Telles) — FC Porto, LB #4
- A0: 후안 베르나트 (Juan Bernat) — Paris Saint-Germain FC, LB #5
- A0: 페를랑 멘디 (Ferland Mendy) — Olympique Lyonnais, LB #6
- A0: 알렉스 산드루 (Alex Sandro) — Juventus FC, LB #7
- A0: 다비드 알라바 (David Alaba) — FC Bayern München, LB #8
- A0: 멤피스 데파이 (Memphis Depay) — Olympique Lyonnais, LW #5
- A0: 앙헬 디마리아 (Ángel Di María) — Paris Saint-Germain FC, RW #6
- A0: 코케 (Koke) — Club Atlético de Madrid, RW #7
- A0: 카림 벤제마 (Karim Benzema) — Real Madrid CF, ST #10
- A0: 루이스 수아레스 (Luis Suárez) — FC Barcelona, ST #11
- A0: 호베르투 피르미누 (Roberto Firmino) — Liverpool FC, ST #12
- A-: 로렌초 펠레그리니 (Lorenzo Pellegrini) — AS Roma, CAM #4
- A-: 마르코 로이스 (Marco Reus) — Borussia Dortmund, CAM #5
- A-: 토마스 뮐러 (Thomas Müller) — FC Bayern München, CAM #6
- A-: 클레망 랑글레 (Clément Lenglet) — FC Barcelona, CB #11
- A-: 펠리피 (Felipe) — FC Porto, CB #12
- A-: 레오나르도 보누치 (Leonardo Bonucci) — Juventus FC, CB #13
- A-: 코스타스 마놀라스 (Kostas Manolas) — AS Roma, CB #14
- A-: 제이슨 데나이어 (Jason Denayer) — Olympique Lyonnais, CB #15
- A-: 치아구 실바 (Thiago Silva) — Paris Saint-Germain FC, CB #16
- A-: 디에고 고딘 (Diego Godín) — Club Atlético de Madrid, CB #17
- A-: 마츠 훔멜스 (Mats Hummels) — FC Bayern München, CB #18
- A-: 호세 마리아 히메네스 (José María Giménez) — Club Atlético de Madrid, CB #19
- A-: 니클라스 쥘레 (Niklas Süle) — FC Bayern München, CB #20
- A-: 세르히오 라모스 (Sergio Ramos) — Real Madrid CF, CB #21
- A-: 케빈 더브라위너 (Kevin De Bruyne) — Manchester City FC, CM #12
- A-: 엑토르 에레라 (Héctor Herrera) — FC Porto, CM #13
- A-: 폴 포그바 (Paul Pogba) — Manchester United FC, CM #14
- A-: 토니 크로스 (Toni Kroos) — Real Madrid CF, CM #15
- A-: 마르코 베라티 (Marco Verratti) — Paris Saint-Germain FC, CM #16
- A-: 제임스 밀너 (James Milner) — Liverpool FC, DM #9
- A-: 다닐루 페레이라 (Danilo Pereira) — FC Porto, DM #10
- A-: 나빌 벤탈렙 (Nabil Bentaleb) — FC Schalke 04, DM #11
- A-: 악셀 비첼 (Axel Witsel) — Borussia Dortmund, DM #12
- A-: 해리 윙크스 (Harry Winks) — Tottenham Hotspur FC, DM #13
- A-: 마르키뉴스 (Marquinhos) — Paris Saint-Germain FC, DM #14
- A-: 일카이 귄도안 (İlkay Gündoğan) — Manchester City FC, DM #15
- A-: 카세미루 (Casemiro) — Real Madrid CF, DM #16
- A-: 마누엘 노이어 (Manuel Neuer) — FC Bayern München, GK #8
- A-: 안토니 로페스 (Anthony Lopes) — Olympique Lyonnais, GK #9
- A-: 하파엘 게헤이루 (Raphaël Guerreiro) — Borussia Dortmund, LB #9
- A-: 알렉산다르 콜라로프 (Aleksandar Kolarov) — AS Roma, LB #10
- A-: 아슈라프 하키미 (Achraf Hakimi) — Borussia Dortmund, LB #11
- A-: 세르히오 레길론 (Sergio Reguilón) — Real Madrid CF, LB #12
- A-: 다비드 네리스 (David Neres) — AFC Ajax, LW #6
- A-: 우스만 뎀벨레 (Ousmane Dembélé) — FC Barcelona, LW #7
- A-: 누사이르 마즈라위 (Noussair Mazraoui) — AFC Ajax, RB #3
- A-: 카일 워커 (Kyle Walker) — Manchester City FC, RB #4
- A-: 세르지 로베르토 (Sergi Roberto) — FC Barcelona, RB #5
- A-: 주앙 칸셀루 (João Cancelo) — Juventus FC, RB #6
- A-: 다니 카르바할 (Dani Carvajal) — Real Madrid CF, RB #7
- A-: 젱기즈 윈데르 (Cengiz Ünder) — AS Roma, RW #8
- A-: 가레스 베일 (Gareth Bale) — Real Madrid CF, RW #9
- A-: 헤수스 코로나 (Jesús Corona) — FC Porto, RW #10
- A-: 제이든 산초 (Jadon Sancho) — Borussia Dortmund, RW #11
- A-: 파울로 디발라 (Paulo Dybala) — Juventus FC, ST #13
- A-: 무사 뎀벨레 (Moussa Dembélé) — Olympique Lyonnais, ST #14

## Best XI — same 4-3-3 (no changes)

| Pos | Korean name | Original name | Club | Tier | Rank |
|---|---|---|---|---|---:|
| GK | 알리송 베케르 | Alisson Becker | Liverpool FC | S | 1 |
| RB | 트렌트 알렉산더아널드 | Trent Alexander-Arnold | Liverpool FC | A+ | 1 |
| CB | 버질 판데이크 | Virgil van Dijk | Liverpool FC | S | 1 |
| CB | 마테이스 더리흐트 | Matthijs de Ligt | AFC Ajax | A+ | 2 |
| LB | 앤드루 로버트슨 | Andy Robertson | Liverpool FC | A+ | 1 |
| DM | 프렝키 더 용 | Frenkie de Jong | AFC Ajax | S | 1 |
| CM | 조르지니오 베이날뒴 | Georginio Wijnaldum | Liverpool FC | A+ | 1 |
| CM | 조던 헨더슨 | Jordan Henderson | Liverpool FC | A+ | 2 |
| LW | 사디오 마네 | Sadio Mané | Liverpool FC | A+ | 1 |
| RW | 리오넬 메시 | Lionel Messi | FC Barcelona | S | 1 |
| ST | 두샨 타디치 | Dušan Tadić | AFC Ajax | S | 1 |

- Previous vs new: same eleven IDs, same 4-3-3. Alisson > Ter Stegen for highest GK (13 UCL games with decisive saves and 2018/19 UEFA award); Tadić as ST > Lewandowski given attack-building and 6 goals, 5 assists compared with 8 goals in 8 games; Mané as LW > Neymar given 13 games vs injury-limited 6 and top-level prior-season production; Messi at RW > Salah based on 12 goals and three assists vs five goals and two assists.
- This XI is not final approved, and subject to historic continuity/source audit. No unapproved formation change.

## ALL ORIGINAL 264 — browser-readable position ranks, names, clubs, dates and tiers

| Position | Rank | Korean name | Original name | Club (original name) | Birth date | Tier | 18/19 Apps | Minutes | Goals | Assists | Review |
|---|---:|---|---|---|---|---|---:|---:|---:|---:|---|
| CAM | 1 | 도니 판더베이크 | Donny van de Beek | AFC Ajax | 1997-04-18 | A+ | 12 | 985 | 3 | 2 | draft_unapproved |
| CAM | 2 | 크리스티안 에릭센 | Christian Eriksen | Tottenham Hotspur FC | 1992-02-14 | A+ | 12 | 1003 | 2 | 3 | draft_unapproved |
| CAM | 3 | 나빌 페키르 | Nabil Fekir | Olympique Lyonnais | 1993-07-18 | A0 | 6 | 506 | 3 | 2 | draft_unapproved |
| CAM | 4 | 로렌초 펠레그리니 | Lorenzo Pellegrini | AS Roma | 1996-06-19 | A- | 6 | 395 | 1 | 3 | draft_unapproved |
| CAM | 5 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 | A- | 6 | 524 | 1 | 1 | draft_unapproved |
| CAM | 6 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | A- | 6 | 353 | 0 | 0 | draft_unapproved |
| CAM | 7 | 델레 알리 | Dele Alli | Tottenham Hotspur FC | 1996-04-11 | B+ | 8 | 708 | 0 | 3 | draft_unapproved |
| CAM | 8 | 하메스 로드리게스 | James Rodríguez | FC Bayern München | 1991-07-12 | B+ | 5 | 336 | 0 | 1 | draft_unapproved |
| CAM | 9 | 마리오 괴체 | Mario Götze | Borussia Dortmund | 1992-06-03 | B+ | 6 | 437 | 0 | 0 | draft_unapproved |
| CAM | 10 | 아민 하리트 | Amine Harit | FC Schalke 04 | 1997-06-18 | C+ | 5 | 140 | 0 | 0 | draft_unapproved |
| CAM | 11 | 하비에르 파스토레 | Javier Pastore | AS Roma | 1989-06-20 | C+ | 1 | 59 | 0 | 0 | draft_unapproved |
| CAM | 12 | 자카리아 라비아드 | Zakaria Labyad | AFC Ajax | 1993-03-09 | C- | 1 | 4 | 0 | 0 | draft_unapproved |
| CB | 1 | 버질 판데이크 | Virgil van Dijk | Liverpool FC | 1991-07-08 | S | 12 | 1080 | 2 | 1 | draft_unapproved |
| CB | 2 | 마테이스 더리흐트 | Matthijs de Ligt | AFC Ajax | 1999-08-12 | A+ | 11 | 990 | 2 | 0 | draft_unapproved |
| CB | 3 | 얀 베르통언 | Jan Vertonghen | Tottenham Hotspur FC | 1987-04-24 | A+ | 10 | 849 | 1 | 1 | draft_unapproved |
| CB | 4 | 토비 알데르베이럴트 | Toby Alderweireld | Tottenham Hotspur FC | 1989-03-02 | A+ | 12 | 1080 | 0 | 0 | draft_unapproved |
| CB | 5 | 데일리 블린트 | Daley Blind | AFC Ajax | 1990-03-09 | A+ | 12 | 1080 | 0 | 0 | draft_unapproved |
| CB | 6 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | A+ | 11 | 990 | 2 | 0 | draft_unapproved |
| CB | 7 | 에므리크 라포르트 | Aymeric Laporte | Manchester City FC | 1994-05-27 | A+ | 10 | 882 | 0 | 2 | draft_unapproved |
| CB | 8 | 에데르 밀리탕 | Éder Militão | FC Porto | 1998-01-18 | A0 | 9 | 823 | 2 | 0 | draft_unapproved |
| CB | 9 | 조엘 마티프 | Joël Matip | Liverpool FC | 1991-08-08 | A0 | 8 | 720 | 0 | 1 | draft_unapproved |
| CB | 10 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 | A0 | 6 | 540 | 0 | 0 | draft_unapproved |
| CB | 11 | 클레망 랑글레 | Clément Lenglet | FC Barcelona | 1995-06-17 | A- | 12 | 1000 | 0 | 0 | draft_unapproved |
| CB | 12 | 펠리피 | Felipe | FC Porto | 1989-05-16 | A- | 10 | 930 | 1 | 0 | draft_unapproved |
| CB | 13 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | A- | 10 | 900 | 0 | 2 | draft_unapproved |
| CB | 14 | 코스타스 마놀라스 | Kostas Manolas | AS Roma | 1991-06-14 | A- | 7 | 660 | 1 | 0 | draft_unapproved |
| CB | 15 | 제이슨 데나이어 | Jason Denayer | Olympique Lyonnais | 1995-06-28 | A- | 8 | 720 | 0 | 0 | draft_unapproved |
| CB | 16 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 | A- | 7 | 616 | 0 | 0 | draft_unapproved |
| CB | 17 | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 | A- | 6 | 540 | 1 | 0 | draft_unapproved |
| CB | 18 | 마츠 훔멜스 | Mats Hummels | FC Bayern München | 1988-12-16 | A- | 6 | 539 | 1 | 0 | draft_unapproved |
| CB | 19 | 호세 마리아 히메네스 | José María Giménez | Club Atlético de Madrid | 1995-01-20 | A- | 5 | 360 | 2 | 0 | draft_unapproved |
| CB | 20 | 니클라스 쥘레 | Niklas Süle | FC Bayern München | 1995-09-03 | A- | 6 | 451 | 0 | 0 | draft_unapproved |
| CB | 21 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | A- | 5 | 419 | 0 | 0 | draft_unapproved |
| CB | 22 | 마르셀루 | Marcelo | Olympique Lyonnais | 1987-05-20 | B+ | 8 | 720 | 0 | 0 | draft_unapproved |
| CB | 23 | 프레스넬 킴펨베 | Presnel Kimpembe | Paris Saint-Germain FC | 1995-08-13 | B+ | 8 | 647 | 1 | 0 | draft_unapproved |
| CB | 24 | 다빈손 산체스 | Davinson Sánchez | Tottenham Hotspur FC | 1996-06-12 | B+ | 8 | 631 | 0 | 0 | draft_unapproved |
| CB | 25 | 빅토르 린델뢰프 | Victor Lindelöf | Manchester United FC | 1994-07-17 | B+ | 7 | 630 | 0 | 0 | draft_unapproved |
| CB | 26 | 압두 디알로 | Abdou Diallo | Borussia Dortmund | 1996-05-04 | B+ | 7 | 620 | 0 | 0 | draft_unapproved |
| CB | 27 | 페데리코 파시오 | Federico Fazio | AS Roma | 1987-03-17 | B+ | 6 | 540 | 0 | 0 | draft_unapproved |
| CB | 28 | 살리프 사네 | Salif Sané | FC Schalke 04 | 1990-08-25 | B+ | 6 | 540 | 0 | 0 | draft_unapproved |
| CB | 29 | 조 고메즈 | Joe Gomez | Liverpool FC | 1997-05-23 | B+ | 9 | 525 | 0 | 0 | draft_unapproved |
| CB | 30 | 마누엘 아칸지 | Manuel Akanji | Borussia Dortmund | 1995-07-19 | B+ | 5 | 450 | 0 | 0 | draft_unapproved |
| CB | 31 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | B+ | 5 | 450 | 0 | 0 | draft_unapproved |
| CB | 32 | 뱅자맹 스탐불리 | Benjamin Stambouli | FC Schalke 04 | 1990-08-13 | B+ | 5 | 431 | 0 | 0 | draft_unapproved |
| CB | 33 | 존 스톤스 | John Stones | Manchester City FC | 1994-05-28 | B+ | 6 | 421 | 0 | 0 | draft_unapproved |
| CB | 34 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 | B+ | 4 | 360 | 0 | 0 | draft_unapproved |
| CB | 35 | 페페 | Pepe | FC Porto | 1983-02-26 | B+ | 3 | 300 | 0 | 0 | draft_unapproved |
| CB | 36 | 스테판 사비치 | Stefan Savić | Club Atlético de Madrid | 1991-01-08 | B+ | 1 | 82 | 0 | 0 | draft_unapproved |
| CB | 37 | 크리스 스몰링 | Chris Smalling | Manchester United FC | 1989-11-22 | B0 | 8 | 720 | 0 | 0 | draft_unapproved |
| CB | 38 | 마티야 나스타시치 | Matija Nastasić | FC Schalke 04 | 1993-03-28 | B0 | 6 | 540 | 0 | 0 | draft_unapproved |
| CB | 39 | 나초 페르난데스 | Nacho Fernández | Real Madrid CF | 1990-01-18 | B0 | 5 | 450 | 0 | 0 | draft_unapproved |
| CB | 40 | 니콜라스 오타멘디 | Nicolás Otamendi | Manchester City FC | 1988-02-12 | B0 | 5 | 402 | 0 | 0 | draft_unapproved |
| CB | 41 | 단악셀 자가두 | Dan-Axel Zagadou | Borussia Dortmund | 1999-06-03 | B0 | 4 | 347 | 0 | 0 | draft_unapproved |
| CB | 42 | 요엘 펠트만 | Joël Veltman | AFC Ajax | 1992-01-15 | B0 | 5 | 310 | 0 | 0 | draft_unapproved |
| CB | 43 | 다니엘레 루가니 | Daniele Rugani | Juventus FC | 1994-07-29 | B0 | 4 | 271 | 0 | 0 | draft_unapproved |
| CB | 44 | 주앙 제주스 | Juan Jesus | AS Roma | 1991-06-10 | B0 | 3 | 212 | 0 | 0 | draft_unapproved |
| CB | 45 | 제레미 모렐 | Jérémy Morel | Olympique Lyonnais | 1984-04-02 | B0 | 1 | 90 | 0 | 0 | draft_unapproved |
| CB | 46 | 에리크 바이 | Eric Bailly | Manchester United FC | 1994-04-12 | B- | 4 | 306 | 0 | 0 | draft_unapproved |
| CB | 47 | 제프리 브루마 | Jeffrey Bruma | FC Schalke 04 | 1991-11-13 | C+ | 2 | 180 | 0 | 0 | draft_unapproved |
| CB | 48 | 사뮈엘 움티티 | Samuel Umtiti | FC Barcelona | 1993-11-14 | C+ | 1 | 79 | 0 | 0 | draft_unapproved |
| CM | 1 | 조르지니오 베이날뒴 | Georginio Wijnaldum | Liverpool FC | 1990-11-11 | A+ | 12 | 971 | 2 | 0 | draft_unapproved |
| CM | 2 | 조던 헨더슨 | Jordan Henderson | Liverpool FC | 1990-06-17 | A+ | 11 | 799 | 0 | 2 | draft_unapproved |
| CM | 3 | 탕기 은돔벨레 | Tanguy Ndombele | Olympique Lyonnais | 1996-12-28 | A+ | 8 | 637 | 2 | 0 | draft_unapproved |
| CM | 4 | 무사 시소코 | Moussa Sissoko | Tottenham Hotspur FC | 1989-08-16 | A+ | 10 | 730 | 0 | 1 | draft_unapproved |
| CM | 5 | 베르나르두 실바 | Bernardo Silva | Manchester City FC | 1994-08-10 | A+ | 8 | 578 | 4 | 1 | draft_unapproved |
| CM | 6 | 다비드 실바 | David Silva | Manchester City FC | 1986-01-08 | A+ | 9 | 719 | 3 | 1 | draft_unapproved |
| CM | 7 | 이반 라키티치 | Ivan Rakitić | FC Barcelona | 1988-03-10 | A0 | 12 | 1020 | 1 | 2 | draft_unapproved |
| CM | 8 | 라세 쇠네 | Lasse Schöne | AFC Ajax | 1986-05-27 | A0 | 11 | 886 | 1 | 2 | draft_unapproved |
| CM | 9 | 블레즈 마튀디 | Blaise Matuidi | Juventus FC | 1987-04-09 | A0 | 9 | 683 | 0 | 1 | draft_unapproved |
| CM | 10 | 사울 니게스 | Saúl Ñíguez | Club Atlético de Madrid | 1994-11-21 | A0 | 8 | 631 | 1 | 0 | draft_unapproved |
| CM | 11 | 레온 고레츠카 | Leon Goretzka | FC Bayern München | 1995-02-06 | A0 | 6 | 326 | 0 | 0 | draft_unapproved |
| CM | 12 | 케빈 더브라위너 | Kevin De Bruyne | Manchester City FC | 1991-06-28 | A- | 4 | 247 | 0 | 4 | draft_unapproved |
| CM | 13 | 엑토르 에레라 | Héctor Herrera | FC Porto | 1990-04-19 | A- | 9 | 834 | 2 | 1 | draft_unapproved |
| CM | 14 | 폴 포그바 | Paul Pogba | Manchester United FC | 1993-03-15 | A- | 9 | 729 | 2 | 1 | draft_unapproved |
| CM | 15 | 토니 크로스 | Toni Kroos | Real Madrid CF | 1990-01-04 | A- | 8 | 645 | 1 | 1 | draft_unapproved |
| CM | 16 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | A- | 7 | 601 | 0 | 0 | draft_unapproved |
| CM | 17 | 오타비우 | Otávio | FC Porto | 1995-02-09 | B+ | 8 | 516 | 2 | 1 | draft_unapproved |
| CM | 18 | 웨스턴 맥케니 | Weston McKennie | FC Schalke 04 | 1998-08-28 | B+ | 6 | 373 | 1 | 1 | draft_unapproved |
| CM | 19 | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 | B+ | 6 | 520 | 1 | 0 | draft_unapproved |
| CM | 20 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | B+ | 6 | 467 | 0 | 1 | draft_unapproved |
| CM | 21 | 다니엘레 데 로시 | Daniele De Rossi | AS Roma | 1983-07-24 | B+ | 4 | 305 | 1 | 0 | draft_unapproved |
| CM | 22 | 아르투르 멜루 | Arthur Melo | FC Barcelona | 1996-08-12 | B+ | 9 | 566 | 0 | 0 | draft_unapproved |
| CM | 23 | 토마스 파르티 | Thomas Partey | Club Atlético de Madrid | 1993-06-13 | B+ | 6 | 418 | 0 | 1 | draft_unapproved |
| CM | 24 | 로드리고 벤탄쿠르 | Rodrigo Bentancur | Juventus FC | 1997-06-25 | B+ | 7 | 550 | 0 | 0 | draft_unapproved |
| CM | 25 | 브리안 크리스탄테 | Bryan Cristante | AS Roma | 1995-03-03 | B+ | 7 | 515 | 0 | 0 | draft_unapproved |
| CM | 26 | 아르투로 비달 | Arturo Vidal | FC Barcelona | 1987-05-22 | B+ | 11 | 356 | 0 | 0 | draft_unapproved |
| CM | 27 | 엠레 잔 | Emre Can | Juventus FC | 1994-01-12 | B+ | 6 | 335 | 0 | 0 | draft_unapproved |
| CM | 28 | 토마스 델라니 | Thomas Delaney | Borussia Dortmund | 1991-09-03 | B+ | 6 | 297 | 0 | 0 | draft_unapproved |
| CM | 29 | 올리베르 토레스 | Óliver Torres | FC Porto | 1994-11-10 | B0 | 5 | 351 | 0 | 2 | draft_unapproved |
| CM | 30 | 주아트 세르다르 | Suat Serdar | FC Schalke 04 | 1997-04-11 | B0 | 7 | 503 | 0 | 1 | draft_unapproved |
| CM | 31 | 나비 케이타 | Naby Keïta | Liverpool FC | 1995-02-10 | B0 | 6 | 244 | 1 | 0 | draft_unapproved |
| CM | 32 | 율리안 드락슬러 | Julian Draxler | Paris Saint-Germain FC | 1993-09-20 | B0 | 7 | 284 | 0 | 1 | draft_unapproved |
| CM | 33 | 아드리앵 라비오 | Adrien Rabiot | Paris Saint-Germain FC | 1995-04-03 | B0 | 5 | 282 | 0 | 0 | draft_unapproved |
| CM | 34 | 다니 세바요스 | Dani Ceballos | Real Madrid CF | 1996-08-07 | B0 | 3 | 185 | 0 | 0 | draft_unapproved |
| CM | 35 | 프레드 | Fred | Manchester United FC | 1993-03-05 | B- | 6 | 461 | 0 | 0 | draft_unapproved |
| CM | 36 | 안데르 에레라 | Ander Herrera | Manchester United FC | 1989-08-14 | B- | 2 | 169 | 0 | 0 | draft_unapproved |
| CM | 37 | 카렐 에이팅 | Carel Eiting | AFC Ajax | 1998-02-11 | C+ | 1 | 90 | 0 | 1 | draft_unapproved |
| DM | 1 | 프렝키 더 용 | Frenkie de Jong | AFC Ajax | 1997-05-12 | S | 11 | 986 | 0 | 0 | draft_unapproved |
| DM | 2 | 파비뉴 | Fabinho | Liverpool FC | 1993-10-23 | A+ | 11 | 727 | 0 | 0 | draft_unapproved |
| DM | 3 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | A+ | 12 | 1033 | 0 | 0 | draft_unapproved |
| DM | 4 | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | A+ | 8 | 643 | 0 | 0 | draft_unapproved |
| DM | 5 | 미랄렘 피아니치 | Miralem Pjanić | Juventus FC | 1990-04-02 | A0 | 10 | 813 | 2 | 1 | draft_unapproved |
| DM | 6 | 우셈 아우아르 | Houssem Aouar | Olympique Lyonnais | 1998-06-30 | A0 | 7 | 630 | 0 | 1 | draft_unapproved |
| DM | 7 | 로드리 | Rodri | Club Atlético de Madrid | 1996-06-22 | A0 | 8 | 606 | 0 | 0 | draft_unapproved |
| DM | 8 | 티아고 알칸타라 | Thiago Alcântara | FC Bayern München | 1991-04-11 | A0 | 5 | 388 | 0 | 1 | draft_unapproved |
| DM | 9 | 제임스 밀너 | James Milner | Liverpool FC | 1986-01-04 | A- | 12 | 901 | 2 | 2 | draft_unapproved |
| DM | 10 | 다닐루 페레이라 | Danilo Pereira | FC Porto | 1991-09-09 | A- | 10 | 930 | 0 | 0 | draft_unapproved |
| DM | 11 | 나빌 벤탈렙 | Nabil Bentaleb | FC Schalke 04 | 1994-11-24 | A- | 6 | 422 | 3 | 0 | draft_unapproved |
| DM | 12 | 악셀 비첼 | Axel Witsel | Borussia Dortmund | 1989-01-12 | A- | 7 | 629 | 1 | 0 | draft_unapproved |
| DM | 13 | 해리 윙크스 | Harry Winks | Tottenham Hotspur FC | 1996-02-02 | A- | 10 | 676 | 0 | 0 | draft_unapproved |
| DM | 14 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | A- | 7 | 630 | 0 | 1 | draft_unapproved |
| DM | 15 | 일카이 귄도안 | İlkay Gündoğan | Manchester City FC | 1990-10-24 | A- | 8 | 590 | 0 | 1 | draft_unapproved |
| DM | 16 | 카세미루 | Casemiro | Real Madrid CF | 1986-12-15 | A- | 6 | 505 | 1 | 0 | draft_unapproved |
| DM | 17 | 스티븐 은존지 | Steven Nzonzi | AS Roma | 1988-12-15 | B+ | 8 | 610 | 0 | 0 | draft_unapproved |
| DM | 18 | 뤼카 투사르 | Lucas Tousart | Olympique Lyonnais | 1997-04-29 | B+ | 7 | 482 | 1 | 0 | draft_unapproved |
| DM | 19 | 네마냐 마티치 | Nemanja Matić | Manchester United FC | 1988-08-01 | B0 | 6 | 540 | 0 | 0 | draft_unapproved |
| DM | 20 | 율리안 바이글 | Julian Weigl | Borussia Dortmund | 1995-09-08 | B0 | 4 | 289 | 0 | 0 | draft_unapproved |
| DM | 21 | 스콧 맥토미니 | Scott McTominay | Manchester United FC | 1996-12-08 | B0 | 3 | 270 | 0 | 0 | draft_unapproved |
| DM | 22 | 에릭 다이어 | Eric Dier | Tottenham Hotspur FC | 1994-01-15 | B- | 6 | 267 | 0 | 0 | draft_unapproved |
| DM | 23 | 제바스티안 루디 | Sebastian Rudy | FC Schalke 04 | 1990-02-28 | C+ | 4 | 240 | 0 | 0 | draft_unapproved |
| GK | 1 | 알리송 베케르 | Alisson Becker | Liverpool FC | 1992-10-02 | S | 13 | 1170 | 0 | 0 | draft_unapproved |
| GK | 2 | 안드레 오나나 | André Onana | AFC Ajax | 1996-04-02 | A+ | 12 | 1080 | 0 | 0 | draft_unapproved |
| GK | 3 | 마르크안드레 테어 슈테겐 | Marc-André ter Stegen | FC Barcelona | 1992-04-30 | A+ | 11 | 990 | 0 | 0 | draft_unapproved |
| GK | 4 | 위고 요리스 | Hugo Lloris | Tottenham Hotspur FC | 1986-12-26 | A+ | 11 | 979 | 0 | 0 | draft_unapproved |
| GK | 5 | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | 1993-01-07 | A+ | 8 | 720 | 0 | 0 | draft_unapproved |
| GK | 6 | 에데르송 | Ederson | Manchester City FC | 1993-08-17 | A0 | 10 | 900 | 0 | 1 | draft_unapproved |
| GK | 7 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus FC | 1990-04-18 | A0 | 10 | 900 | 0 | 0 | draft_unapproved |
| GK | 8 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | A- | 8 | 720 | 0 | 0 | draft_unapproved |
| GK | 9 | 안토니 로페스 | Anthony Lopes | Olympique Lyonnais | 1990-10-01 | A- | 8 | 664 | 0 | 0 | draft_unapproved |
| GK | 10 | 이케르 카시야스 | Iker Casillas | FC Porto | 1981-05-20 | B+ | 10 | 930 | 0 | 0 | draft_unapproved |
| GK | 11 | 다비드 데 헤아 | David de Gea | Manchester United FC | 1990-11-07 | B+ | 9 | 810 | 0 | 0 | draft_unapproved |
| GK | 12 | 로만 뷔르키 | Roman Bürki | Borussia Dortmund | 1990-11-14 | B+ | 7 | 630 | 0 | 0 | draft_unapproved |
| GK | 13 | 티보 쿠르투아 | Thibaut Courtois | Real Madrid CF | 1992-05-11 | B+ | 5 | 450 | 0 | 0 | draft_unapproved |
| GK | 14 | 알퐁스 아레올라 | Alphonse Areola | Paris Saint-Germain FC | 1993-02-27 | B+ | 3 | 270 | 0 | 0 | draft_unapproved |
| GK | 15 | 랄프 페어만 | Ralf Fährmann | FC Schalke 04 | 1988-09-27 | B0 | 6 | 540 | 0 | 0 | draft_unapproved |
| GK | 16 | 케일로르 나바스 | Keylor Navas | Real Madrid CF | 1986-12-15 | B0 | 3 | 270 | 0 | 0 | draft_unapproved |
| GK | 17 | 로빈 올센 | Robin Olsen | AS Roma | 1990-01-08 | B- | 6 | 570 | 0 | 0 | draft_unapproved |
| GK | 18 | 잔루이지 부폰 | Gianluigi Buffon | Paris Saint-Germain FC | 1978-01-28 | B- | 5 | 450 | 0 | 0 | draft_unapproved |
| GK | 19 | 알렉산더 뉘벨 | Alexander Nübel | FC Schalke 04 | 1996-09-30 | B- | 2 | 180 | 0 | 0 | draft_unapproved |
| LB | 1 | 앤드루 로버트슨 | Andy Robertson | Liverpool FC | 1994-03-11 | A+ | 12 | 1008 | 0 | 2 | draft_unapproved |
| LB | 2 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | A+ | 11 | 990 | 1 | 5 | draft_unapproved |
| LB | 3 | 니콜라스 탈리아피코 | Nicolás Tagliafico | AFC Ajax | 1992-08-31 | A+ | 10 | 900 | 3 | 0 | draft_unapproved |
| LB | 4 | 알렉스 텔리스 | Alex Telles | FC Porto | 1992-12-15 | A0 | 10 | 930 | 1 | 3 | draft_unapproved |
| LB | 5 | 후안 베르나트 | Juan Bernat | Paris Saint-Germain FC | 1993-03-01 | A0 | 8 | 675 | 3 | 0 | draft_unapproved |
| LB | 6 | 페를랑 멘디 | Ferland Mendy | Olympique Lyonnais | 1995-06-08 | A0 | 8 | 707 | 0 | 1 | draft_unapproved |
| LB | 7 | 알렉스 산드루 | Alex Sandro | Juventus FC | 1991-01-26 | A0 | 9 | 742 | 0 | 0 | draft_unapproved |
| LB | 8 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | A0 | 7 | 630 | 0 | 2 | draft_unapproved |
| LB | 9 | 하파엘 게헤이루 | Raphaël Guerreiro | Borussia Dortmund | 1993-12-22 | A- | 6 | 284 | 4 | 0 | draft_unapproved |
| LB | 10 | 알렉산다르 콜라로프 | Aleksandar Kolarov | AS Roma | 1985-11-10 | A- | 8 | 661 | 0 | 1 | draft_unapproved |
| LB | 11 | 아슈라프 하키미 | Achraf Hakimi | Borussia Dortmund | 1998-11-04 | A- | 5 | 370 | 0 | 3 | draft_unapproved |
| LB | 12 | 세르히오 레길론 | Sergio Reguilón | Real Madrid CF | 1996-12-16 | A- | 4 | 360 | 0 | 1 | draft_unapproved |
| LB | 13 | 루크 쇼 | Luke Shaw | Manchester United FC | 1995-07-12 | B+ | 8 | 720 | 0 | 0 | draft_unapproved |
| LB | 14 | 마르셀루 | Marcelo | Real Madrid CF | 1986-12-15 | B+ | 4 | 344 | 1 | 1 | draft_unapproved |
| LB | 15 | 대니 로즈 | Danny Rose | Tottenham Hotspur FC | 1990-07-02 | B+ | 8 | 529 | 0 | 0 | draft_unapproved |
| LB | 16 | 필리피 루이스 | Filipe Luís | Club Atlético de Madrid | 1985-08-09 | B+ | 5 | 405 | 0 | 1 | draft_unapproved |
| LB | 17 | 뤼카 에르난데스 | Lucas Hernández | Club Atlético de Madrid | 1996-02-14 | B+ | 5 | 450 | 0 | 0 | draft_unapproved |
| LB | 18 | 올렉산드르 진첸코 | Oleksandr Zinchenko | Manchester City FC | 1996-12-15 | B+ | 5 | 337 | 0 | 1 | draft_unapproved |
| LB | 19 | 벤 데이비스 | Ben Davies | Tottenham Hotspur FC | 1993-04-24 | B0 | 9 | 567 | 0 | 1 | draft_unapproved |
| LB | 20 | 바스티안 오치프카 | Bastian Oczipka | FC Schalke 04 | 1989-01-12 | C+ | 2 | 180 | 0 | 0 | draft_unapproved |
| LW | 1 | 사디오 마네 | Sadio Mané | Liverpool FC | 1992-04-10 | A+ | 13 | 1152 | 4 | 1 | draft_unapproved |
| LW | 2 | 네이마르 | Neymar | Paris Saint-Germain FC | 1992-02-05 | A+ | 6 | 532 | 5 | 1 | draft_unapproved |
| LW | 3 | 손흥민 | Son Heung-min | Tottenham Hotspur FC | 1992-07-08 | A+ | 12 | 906 | 4 | 1 | draft_unapproved |
| LW | 4 | 르로이 사네 | Leroy Sané | Manchester City FC | 1996-01-11 | A+ | 8 | 395 | 4 | 5 | draft_unapproved |
| LW | 5 | 멤피스 데파이 | Memphis Depay | Olympique Lyonnais | 1994-02-13 | A0 | 8 | 618 | 1 | 3 | draft_unapproved |
| LW | 6 | 다비드 네리스 | David Neres | AFC Ajax | 1997-03-03 | A- | 11 | 852 | 2 | 2 | draft_unapproved |
| LW | 7 | 우스만 뎀벨레 | Ousmane Dembélé | FC Barcelona | 1997-05-15 | A- | 8 | 417 | 3 | 1 | draft_unapproved |
| LW | 8 | 필리피 쿠티뉴 | Philippe Coutinho | FC Barcelona | 1992-06-12 | B+ | 12 | 860 | 3 | 2 | draft_unapproved |
| LW | 9 | 야신 브라히미 | Yacine Brahimi | FC Porto | 1990-02-08 | B+ | 9 | 624 | 0 | 2 | draft_unapproved |
| LW | 10 | 앙토니 마르시알 | Anthony Martial | Manchester United FC | 1995-12-05 | B+ | 8 | 506 | 1 | 0 | draft_unapproved |
| LW | 11 | 야코브 브룬 라르센 | Jacob Bruun Larsen | Borussia Dortmund | 1998-09-19 | B0 | 5 | 150 | 1 | 1 | draft_unapproved |
| LW | 12 | 마르코 아센시오 | Marco Asensio | Real Madrid CF | 1996-01-21 | B0 | 7 | 301 | 2 | 0 | draft_unapproved |
| LW | 13 | 에릭 라멜라 | Erik Lamela | Tottenham Hotspur FC | 1992-03-25 | B0 | 9 | 333 | 1 | 1 | draft_unapproved |
| LW | 14 | 마리오 만주키치 | Mario Mandžukić | Juventus FC | 1986-05-21 | B0 | 8 | 579 | 1 | 0 | draft_unapproved |
| LW | 15 | 비니시우스 주니오르 | Vinícius Júnior | Real Madrid CF | 2000-07-12 | B0 | 4 | 234 | 0 | 2 | draft_unapproved |
| LW | 16 | 크리스천 풀리식 | Christian Pulisic | Borussia Dortmund | 1998-09-18 | B0 | 7 | 454 | 1 | 0 | draft_unapproved |
| LW | 17 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | B0 | 7 | 440 | 1 | 0 | draft_unapproved |
| LW | 18 | 저스틴 클라위버르트 | Justin Kluivert | AS Roma | 1999-05-05 | B0 | 5 | 319 | 1 | 0 | draft_unapproved |
| LW | 19 | 토마 르마르 | Thomas Lemar | Club Atlético de Madrid | 1995-11-12 | B0 | 7 | 410 | 0 | 1 | draft_unapproved |
| LW | 20 | 킹슬리 코망 | Kingsley Coman | FC Bayern München | 1996-06-13 | B- | 3 | 129 | 1 | 0 | draft_unapproved |
| LW | 21 | 스테판 엘샤라위 | Stephan El Shaarawy | AS Roma | 1992-10-27 | B- | 4 | 263 | 0 | 1 | draft_unapproved |
| LW | 22 | 알렉시스 산체스 | Alexis Sánchez | Manchester United FC | 1988-12-19 | C+ | 4 | 211 | 0 | 0 | draft_unapproved |
| LW | 23 | 도글라스 코스타 | Douglas Costa | Juventus FC | 1990-09-14 | C+ | 5 | 157 | 0 | 0 | draft_unapproved |
| LW | 24 | 무사 디아비 | Moussa Diaby | Paris Saint-Germain FC | 1999-07-07 | C- | 1 | 7 | 0 | 0 | draft_unapproved |
| RB | 1 | 트렌트 알렉산더아널드 | Trent Alexander-Arnold | Liverpool FC | 1998-10-07 | A+ | 11 | 921 | 0 | 4 | draft_unapproved |
| RB | 2 | 요주아 키미히 | Joshua Kimmich | FC Bayern München | 1995-02-08 | A+ | 7 | 630 | 0 | 2 | draft_unapproved |
| RB | 3 | 누사이르 마즈라위 | Noussair Mazraoui | AFC Ajax | 1997-11-14 | A- | 11 | 827 | 0 | 2 | draft_unapproved |
| RB | 4 | 카일 워커 | Kyle Walker | Manchester City FC | 1990-05-28 | A- | 10 | 746 | 0 | 0 | draft_unapproved |
| RB | 5 | 세르지 로베르토 | Sergi Roberto | FC Barcelona | 1992-02-07 | A- | 9 | 709 | 0 | 0 | draft_unapproved |
| RB | 6 | 주앙 칸셀루 | João Cancelo | Juventus FC | 1994-05-27 | A- | 7 | 479 | 0 | 2 | draft_unapproved |
| RB | 7 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | A- | 6 | 419 | 0 | 1 | draft_unapproved |
| RB | 8 | 알레산드로 플로렌치 | Alessandro Florenzi | AS Roma | 1991-03-11 | B+ | 8 | 618 | 0 | 1 | draft_unapproved |
| RB | 9 | 넬송 세메두 | Nélson Semedo | FC Barcelona | 1993-11-16 | B+ | 10 | 554 | 0 | 0 | draft_unapproved |
| RB | 10 | 다니엘 칼리주리 | Daniel Caligiuri | FC Schalke 04 | 1988-01-15 | B+ | 6 | 512 | 0 | 0 | draft_unapproved |
| RB | 11 | 틸로 케러 | Thilo Kehrer | Paris Saint-Germain FC | 1996-09-21 | B+ | 7 | 488 | 0 | 0 | draft_unapproved |
| RB | 12 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 | B+ | 5 | 450 | 0 | 0 | draft_unapproved |
| RB | 13 | 레오 뒤부아 | Léo Dubois | Olympique Lyonnais | 1994-09-14 | B+ | 5 | 285 | 1 | 0 | draft_unapproved |
| RB | 14 | 산티아고 아리아스 | Santiago Arias | Club Atlético de Madrid | 1992-01-13 | B+ | 4 | 347 | 0 | 0 | draft_unapproved |
| RB | 15 | 마티아 데 실리오 | Mattia De Sciglio | Juventus FC | 1992-10-20 | B+ | 4 | 309 | 0 | 0 | draft_unapproved |
| RB | 16 | 다니 아우베스 | Dani Alves | Paris Saint-Germain FC | 1983-05-06 | B+ | 3 | 204 | 0 | 0 | draft_unapproved |
| RB | 17 | 키런 트리피어 | Kieran Trippier | Tottenham Hotspur FC | 1990-09-19 | B0 | 8 | 626 | 0 | 2 | draft_unapproved |
| RB | 18 | 막시 페레이라 | Maxi Pereira | FC Porto | 1984-06-08 | B0 | 8 | 634 | 0 | 0 | draft_unapproved |
| RB | 19 | 후안프란 | Juanfran | Club Atlético de Madrid | 1985-01-09 | B0 | 5 | 450 | 0 | 0 | draft_unapproved |
| RB | 20 | 하피냐 | Rafinha | FC Bayern München | 1985-09-07 | B0 | 6 | 367 | 0 | 1 | draft_unapproved |
| RB | 21 | 다비데 산톤 | Davide Santon | AS Roma | 1991-01-02 | B0 | 4 | 258 | 0 | 1 | draft_unapproved |
| RB | 22 | 다닐루 | Danilo | Manchester City FC | 1991-07-15 | B0 | 2 | 119 | 0 | 0 | draft_unapproved |
| RB | 23 | 애슐리 영 | Ashley Young | Manchester United FC | 1985-07-09 | B- | 7 | 582 | 0 | 1 | draft_unapproved |
| RB | 24 | 세르주 오리에 | Serge Aurier | Tottenham Hotspur FC | 1992-12-24 | B- | 5 | 435 | 0 | 1 | draft_unapproved |
| RB | 25 | 디오구 달로 | Diogo Dalot | Manchester United FC | 1999-03-18 | B- | 4 | 243 | 0 | 0 | draft_unapproved |
| RB | 26 | 하파엘 다 시우바 | Rafael | Olympique Lyonnais | 1990-07-09 | B- | 3 | 240 | 0 | 0 | draft_unapproved |
| RB | 27 | 라스무스 크리스텐센 | Rasmus Nissen Kristensen | AFC Ajax | 1997-07-11 | C- | 1 | 9 | 0 | 0 | draft_unapproved |
| RW | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | S | 10 | 837 | 12 | 3 | draft_unapproved |
| RW | 2 | 모하메드 살라 | Mohamed Salah | Liverpool FC | 1992-06-15 | A+ | 12 | 1058 | 5 | 2 | draft_unapproved |
| RW | 3 | 라힘 스털링 | Raheem Sterling | Manchester City FC | 1994-12-08 | A+ | 10 | 871 | 5 | 2 | draft_unapproved |
| RW | 4 | 하킴 지예시 | Hakim Ziyech | AFC Ajax | 1993-03-19 | A+ | 11 | 985 | 3 | 3 | draft_unapproved |
| RW | 5 | 루카스 모우라 | Lucas Moura | Tottenham Hotspur FC | 1992-08-13 | A+ | 12 | 725 | 5 | 0 | draft_unapproved |
| RW | 6 | 앙헬 디마리아 | Ángel Di María | Paris Saint-Germain FC | 1988-02-14 | A0 | 8 | 661 | 2 | 3 | draft_unapproved |
| RW | 7 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | A0 | 7 | 562 | 2 | 1 | draft_unapproved |
| RW | 8 | 젱기즈 윈데르 | Cengiz Ünder | AS Roma | 1997-07-14 | A- | 6 | 437 | 3 | 2 | draft_unapproved |
| RW | 9 | 가레스 베일 | Gareth Bale | Real Madrid CF | 1989-07-16 | A- | 7 | 489 | 3 | 2 | draft_unapproved |
| RW | 10 | 헤수스 코로나 | Jesús Corona | FC Porto | 1993-01-06 | A- | 8 | 561 | 3 | 2 | draft_unapproved |
| RW | 11 | 제이든 산초 | Jadon Sancho | Borussia Dortmund | 2000-03-25 | A- | 7 | 438 | 1 | 1 | draft_unapproved |
| RW | 12 | 막스웰 코르네 | Maxwel Cornet | Olympique Lyonnais | 1996-09-27 | B+ | 5 | 214 | 3 | 0 | draft_unapproved |
| RW | 13 | 리야드 마레즈 | Riyad Mahrez | Manchester City FC | 1991-02-21 | B+ | 6 | 388 | 1 | 4 | draft_unapproved |
| RW | 14 | 마커스 래시퍼드 | Marcus Rashford | Manchester United FC | 1997-10-31 | B+ | 10 | 724 | 2 | 1 | draft_unapproved |
| RW | 15 | 제르단 샤키리 | Xherdan Shaqiri | Liverpool FC | 1991-10-10 | B+ | 4 | 176 | 0 | 2 | draft_unapproved |
| RW | 16 | 베르트랑 트라오레 | Bertrand Traoré | Olympique Lyonnais | 1995-09-06 | B+ | 8 | 320 | 1 | 1 | draft_unapproved |
| RW | 17 | 세르주 그나브리 | Serge Gnabry | FC Bayern München | 1995-07-14 | B+ | 7 | 446 | 0 | 2 | draft_unapproved |
| RW | 18 | 페데리코 베르나르데스키 | Federico Bernardeschi | Juventus FC | 1994-02-16 | B+ | 8 | 552 | 0 | 1 | draft_unapproved |
| RW | 19 | 앙헬 코레아 | Ángel Correa | Club Atlético de Madrid | 1995-03-09 | B+ | 8 | 353 | 0 | 1 | draft_unapproved |
| RW | 20 | 루카스 바스케스 | Lucas Vázquez | Real Madrid CF | 1991-07-01 | B0 | 6 | 386 | 1 | 1 | draft_unapproved |
| RW | 21 | 제시 린가드 | Jesse Lingard | Manchester United FC | 1992-12-15 | B0 | 6 | 296 | 0 | 0 | draft_unapproved |
| RW | 22 | 말콤 | Malcom | FC Barcelona | 1997-02-26 | C+ | 3 | 39 | 1 | 0 | draft_unapproved |
| RW | 23 | 에르나니 | Hernâni | FC Porto | 1991-08-20 | C+ | 6 | 124 | 0 | 1 | draft_unapproved |
| ST | 1 | 두샨 타디치 | Dušan Tadić | AFC Ajax | 1988-11-20 | S | 12 | 1080 | 6 | 5 | draft_unapproved |
| ST | 2 | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | 1988-08-21 | A+ | 8 | 713 | 8 | 0 | draft_unapproved |
| ST | 3 | 크리스티아누 호날두 | Cristiano Ronaldo | Juventus FC | 1985-02-05 | A+ | 9 | 749 | 6 | 2 | draft_unapproved |
| ST | 4 | 무사 마레가 | Moussa Marega | FC Porto | 1991-04-14 | A+ | 9 | 840 | 6 | 2 | draft_unapproved |
| ST | 5 | 에딘 제코 | Edin Džeko | AS Roma | 1986-03-17 | A+ | 6 | 570 | 5 | 4 | draft_unapproved |
| ST | 6 | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | 1988-06-02 | A+ | 7 | 510 | 6 | 1 | draft_unapproved |
| ST | 7 | 킬리안 음바페 | Kylian Mbappé | Paris Saint-Germain FC | 1998-12-20 | A+ | 8 | 701 | 4 | 4 | draft_unapproved |
| ST | 8 | 해리 케인 | Harry Kane | Tottenham Hotspur FC | 1993-07-28 | A+ | 9 | 778 | 5 | 1 | draft_unapproved |
| ST | 9 | 앙투안 그리즈만 | Antoine Griezmann | Club Atlético de Madrid | 1991-03-21 | A+ | 8 | 720 | 4 | 2 | draft_unapproved |
| ST | 10 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | A0 | 8 | 587 | 4 | 2 | draft_unapproved |
| ST | 11 | 루이스 수아레스 | Luis Suárez | FC Barcelona | 1987-01-24 | A0 | 10 | 900 | 1 | 5 | draft_unapproved |
| ST | 12 | 호베르투 피르미누 | Roberto Firmino | Liverpool FC | 1991-10-02 | A0 | 12 | 749 | 4 | 1 | draft_unapproved |
| ST | 13 | 파울로 디발라 | Paulo Dybala | Juventus FC | 1993-11-15 | A- | 9 | 518 | 5 | 0 | draft_unapproved |
| ST | 14 | 무사 뎀벨레 | Moussa Dembélé | Olympique Lyonnais | 1996-07-12 | A- | 6 | 296 | 1 | 0 | draft_unapproved |
| ST | 15 | 디보크 오리기 | Divock Origi | Liverpool FC | 1995-04-18 | B+ | 8 | 217 | 3 | 0 | draft_unapproved |
| ST | 16 | 가브리에우 제주스 | Gabriel Jesus | Manchester City FC | 1997-04-03 | B+ | 6 | 375 | 4 | 0 | draft_unapproved |
| ST | 17 | 로멜루 루카쿠 | Romelu Lukaku | Manchester United FC | 1993-05-13 | B+ | 9 | 546 | 2 | 1 | draft_unapproved |
| ST | 18 | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | 1987-02-14 | B+ | 7 | 415 | 2 | 0 | draft_unapproved |
| ST | 19 | 파코 알카세르 | Paco Alcácer | Borussia Dortmund | 1993-08-30 | B+ | 5 | 356 | 1 | 1 | draft_unapproved |
| ST | 20 | 마르탱 테리에 | Martin Terrier | Olympique Lyonnais | 1997-03-04 | B+ | 3 | 159 | 0 | 0 | draft_unapproved |
| ST | 21 | 알바로 모라타 | Álvaro Morata | Club Atlético de Madrid | 1992-10-23 | B+ | 2 | 122 | 0 | 0 | draft_unapproved |
| ST | 22 | 티키뉴 소아레스 | Tiquinho Soares | FC Porto | 1991-01-17 | B0 | 4 | 275 | 1 | 1 | draft_unapproved |
| ST | 23 | 디에고 코스타 | Diego Costa | Club Atlético de Madrid | 1988-10-07 | B0 | 4 | 307 | 1 | 1 | draft_unapproved |
| ST | 24 | 파트리크 시크 | Patrik Schick | AS Roma | 1996-01-24 | B0 | 6 | 250 | 0 | 0 | draft_unapproved |
| ST | 25 | 페르난도 요렌테 | Fernando Llorente | Tottenham Hotspur FC | 1985-02-26 | B- | 9 | 235 | 2 | 1 | draft_unapproved |
| ST | 26 | 마르크 우트 | Mark Uth | FC Schalke 04 | 1991-08-24 | B- | 5 | 395 | 1 | 0 | draft_unapproved |
| ST | 27 | 브릴 엠볼로 | Breel Embolo | FC Schalke 04 | 1997-02-14 | B- | 5 | 385 | 0 | 1 | draft_unapproved |
| ST | 28 | 막시밀리안 필리프 | Maximilian Philipp | Borussia Dortmund | 1994-03-01 | B- | 2 | 86 | 0 | 1 | draft_unapproved |
| ST | 29 | 귀도 부르크슈탈러 | Guido Burgstaller | FC Schalke 04 | 1989-04-24 | C+ | 6 | 231 | 1 | 1 | draft_unapproved |
| ST | 30 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | AFC Ajax | 1983-08-12 | C+ | 5 | 96 | 0 | 2 | draft_unapproved |
| ST | 31 | 마리아노 디아스 | Mariano Díaz | Real Madrid CF | 1993-08-01 | C+ | 5 | 73 | 1 | 0 | draft_unapproved |

## Individual evidence and tier rationales for all 264 players

- **CAM #1 — 도니 판더베이크 (Donny van de Beek; AFC Ajax) — A+**: UEFA 2018/19: 12경기 985분, 3골 2도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://datencenter.dfb.de/champions-league/2018-2019/mannschaft/ajax-amsterdam
- **CAM #2 — 크리스티안 에릭센 (Christian Eriksen; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 12경기 1003분, 2골 3도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CAM #3 — 나빌 페키르 (Nabil Fekir; Olympique Lyonnais) — A0**: UEFA 2018/19: 6경기 506분, 3골 2도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **CAM #4 — 로렌초 펠레그리니 (Lorenzo Pellegrini; AS Roma) — A-**: UEFA 2018/19: 6경기 395분, 1골 3도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CAM #5 — 마르코 로이스 (Marco Reus; Borussia Dortmund) — A-**: UEFA 2018/19: 6경기 524분, 1골 1도움. 공격 2선에서 창출·전진·볼 운반 기여 평가. 국내 리그 S와 달리 UCL 6경기 1골 1도움에 그친 점을 반영. 개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **CAM #6 — 토마스 뮐러 (Thomas Müller; FC Bayern München) — A-**: UEFA 2018/19: 6경기 353분, 0골 0도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CAM #7 — 델레 알리 (Dele Alli; Tottenham Hotspur FC) — B+**: UEFA 2018/19: 8경기 708분, 0골 3도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CAM #8 — 하메스 로드리게스 (James Rodríguez; FC Bayern München) — B+**: UEFA 2018/19: 5경기 336분, 0골 1도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CAM #9 — 마리오 괴체 (Mario Götze; Borussia Dortmund) — B+**: UEFA 2018/19: 6경기 437분, 0골 0도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **CAM #10 — 아민 하리트 (Amine Harit; FC Schalke 04) — C+**: UEFA 2018/19: 5경기 140분, 0골 0도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CAM #11 — 하비에르 파스토레 (Javier Pastore; AS Roma) — C+**: UEFA 2018/19: 1경기 59분, 0골 0도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CAM #12 — 자카리아 라비아드 (Zakaria Labyad; AFC Ajax) — C-**: UEFA 2018/19: 1경기 4분, 0골 0도움. 공격 2선에서 창출·전진·볼 운반 기여 평가.  개인 기여 중심 C- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CB #1 — 버질 판데이크 (Virgil van Dijk; Liverpool FC) — S**: UEFA 2018/19: 12경기 1080분, 2골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교. UEFA 기술위원 시즌 대표 20인 선정. 12경기 1080분, 핵심 수비 활약과 UEFA 시즌 최고 수비수 수상. 개인 기여 중심 S 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **CB #2 — 마테이스 더리흐트 (Matthijs de Ligt; AFC Ajax) — A+**: UEFA 2018/19: 11경기 990분, 2골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://www.uefa.com/uefaeuropaleague/news/0253-0d8227a747d5-c25ebf5c91c9-1000--uefa-europa-league-squad-of-the-2016-17-season/
- **CB #3 — 얀 베르통언 (Jan Vertonghen; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 10경기 849분, 1골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **CB #4 — 토비 알데르베이럴트 (Toby Alderweireld; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 12경기 1080분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #5 — 데일리 블린트 (Daley Blind; AFC Ajax) — A+**: UEFA 2018/19: 12경기 1080분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114b6d0-6d7423022ce8-1000--uefa-europa-league-final-team-news/; https://www.footballsquads.co.uk/eng/2016-2017/faprem/manutd.htm
- **CB #6 — 제라르 피케 (Gerard Piqué; FC Barcelona) — A+**: UEFA 2018/19: 11경기 990분, 2골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CB #7 — 에므리크 라포르트 (Aymeric Laporte; Manchester City FC) — A+**: UEFA 2018/19: 10경기 882분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #8 — 에데르 밀리탕 (Éder Militão; FC Porto) — A0**: UEFA 2018/19: 9경기 823분, 2골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CB #9 — 조엘 마티프 (Joël Matip; Liverpool FC) — A0**: UEFA 2018/19: 8경기 720분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #10 — 조르조 키엘리니 (Giorgio Chiellini; Juventus FC) — A0**: UEFA 2018/19: 6경기 540분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CB #11 — 클레망 랑글레 (Clément Lenglet; FC Barcelona) — A-**: UEFA 2018/19: 12경기 1000분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CB #12 — 펠리피 (Felipe; FC Porto) — A-**: UEFA 2018/19: 10경기 930분, 1골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **CB #13 — 레오나르도 보누치 (Leonardo Bonucci; Juventus FC) — A-**: UEFA 2018/19: 10경기 900분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CB #14 — 코스타스 마놀라스 (Kostas Manolas; AS Roma) — A-**: UEFA 2018/19: 7경기 660분, 1골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CB #15 — 제이슨 데나이어 (Jason Denayer; Olympique Lyonnais) — A-**: UEFA 2018/19: 8경기 720분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **CB #16 — 치아구 실바 (Thiago Silva; Paris Saint-Germain FC) — A-**: UEFA 2018/19: 7경기 616분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **CB #17 — 디에고 고딘 (Diego Godín; Club Atlético de Madrid) — A-**: UEFA 2018/19: 6경기 540분, 1골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CB #18 — 마츠 훔멜스 (Mats Hummels; FC Bayern München) — A-**: UEFA 2018/19: 6경기 539분, 1골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CB #19 — 호세 마리아 히메네스 (José María Giménez; Club Atlético de Madrid) — A-**: UEFA 2018/19: 5경기 360분, 2골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CB #20 — 니클라스 쥘레 (Niklas Süle; FC Bayern München) — A-**: UEFA 2018/19: 6경기 451분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CB #21 — 세르히오 라모스 (Sergio Ramos; Real Madrid CF) — A-**: UEFA 2018/19: 5경기 419분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CB #22 — 마르셀루 (Marcelo; Olympique Lyonnais) — B+**: UEFA 2018/19: 8경기 720분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **CB #23 — 프레스넬 킴펨베 (Presnel Kimpembe; Paris Saint-Germain FC) — B+**: UEFA 2018/19: 8경기 647분, 1골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **CB #24 — 다빈손 산체스 (Davinson Sánchez; Tottenham Hotspur FC) — B+**: UEFA 2018/19: 8경기 631분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #25 — 빅토르 린델뢰프 (Victor Lindelöf; Manchester United FC) — B+**: UEFA 2018/19: 7경기 630분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #26 — 압두 디알로 (Abdou Diallo; Borussia Dortmund) — B+**: UEFA 2018/19: 7경기 620분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **CB #27 — 페데리코 파시오 (Federico Fazio; AS Roma) — B+**: UEFA 2018/19: 6경기 540분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CB #28 — 살리프 사네 (Salif Sané; FC Schalke 04) — B+**: UEFA 2018/19: 6경기 540분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CB #29 — 조 고메즈 (Joe Gomez; Liverpool FC) — B+**: UEFA 2018/19: 9경기 525분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #30 — 마누엘 아칸지 (Manuel Akanji; Borussia Dortmund) — B+**: UEFA 2018/19: 5경기 450분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **CB #31 — 제롬 보아텡 (Jérôme Boateng; FC Bayern München) — B+**: UEFA 2018/19: 5경기 450분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CB #32 — 뱅자맹 스탐불리 (Benjamin Stambouli; FC Schalke 04) — B+**: UEFA 2018/19: 5경기 431분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://github.com/wjdduddlf112/footballarch/blob/main/data/ligue1-2015-16.json
- **CB #33 — 존 스톤스 (John Stones; Manchester City FC) — B+**: UEFA 2018/19: 6경기 421분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #34 — 라파엘 바란 (Raphaël Varane; Real Madrid CF) — B+**: UEFA 2018/19: 4경기 360분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CB #35 — 페페 (Pepe; FC Porto) — B+**: UEFA 2018/19: 3경기 300분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://datencenter.dfb.de/champions-league/2018-2019/mannschaft/fc-porto
- **CB #36 — 스테판 사비치 (Stefan Savić; Club Atlético de Madrid) — B+**: UEFA 2018/19: 1경기 82분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CB #37 — 크리스 스몰링 (Chris Smalling; Manchester United FC) — B0**: UEFA 2018/19: 8경기 720분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CB #38 — 마티야 나스타시치 (Matija Nastasić; FC Schalke 04) — B0**: UEFA 2018/19: 6경기 540분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://datencenter.dfb.de/competitions/champions-league/seasons/2018-2019/teams/fc-schalke-04
- **CB #39 — 나초 페르난데스 (Nacho Fernández; Real Madrid CF) — B0**: UEFA 2018/19: 5경기 450분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CB #40 — 니콜라스 오타멘디 (Nicolás Otamendi; Manchester City FC) — B0**: UEFA 2018/19: 5경기 402분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2017-2018/faprem/mancity.htm
- **CB #41 — 단악셀 자가두 (Dan-Axel Zagadou; Borussia Dortmund) — B0**: UEFA 2018/19: 4경기 347분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **CB #42 — 요엘 펠트만 (Joël Veltman; AFC Ajax) — B0**: UEFA 2018/19: 5경기 310분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://datencenter.dfb.de/champions-league/2018-2019/mannschaft/ajax-amsterdam
- **CB #43 — 다니엘레 루가니 (Daniele Rugani; Juventus FC) — B0**: UEFA 2018/19: 4경기 271분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CB #44 — 주앙 제주스 (Juan Jesus; AS Roma) — B0**: UEFA 2018/19: 3경기 212분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CB #45 — 제레미 모렐 (Jérémy Morel; Olympique Lyonnais) — B0**: UEFA 2018/19: 1경기 90분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **CB #46 — 에리크 바이 (Eric Bailly; Manchester United FC) — B-**: UEFA 2018/19: 4경기 306분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2017-2018/faprem/manutd.htm
- **CB #47 — 제프리 브루마 (Jeffrey Bruma; FC Schalke 04) — C+**: UEFA 2018/19: 2경기 180분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CB #48 — 사뮈엘 움티티 (Samuel Umtiti; FC Barcelona) — C+**: UEFA 2018/19: 1경기 79분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CM #1 — 조르지니오 베이날뒴 (Georginio Wijnaldum; Liverpool FC) — A+**: UEFA 2018/19: 12경기 971분, 2골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **CM #2 — 조던 헨더슨 (Jordan Henderson; Liverpool FC) — A+**: UEFA 2018/19: 11경기 799분, 0골 2도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://www.uefa.com/uefachampionsleague/news/0254-0e99ddf91193-3a1ed0d12675-1000--frenkie-de-jong-champions-league-midfielder-of-the-season/
- **CM #3 — 탕기 은돔벨레 (Tanguy Ndombele; Olympique Lyonnais) — A+**: UEFA 2018/19: 8경기 637분, 2골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **CM #4 — 무사 시소코 (Moussa Sissoko; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 10경기 730분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **CM #5 — 베르나르두 실바 (Bernardo Silva; Manchester City FC) — A+**: UEFA 2018/19: 8경기 578분, 4골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CM #6 — 다비드 실바 (David Silva; Manchester City FC) — A+**: UEFA 2018/19: 9경기 719분, 3골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CM #7 — 이반 라키티치 (Ivan Rakitić; FC Barcelona) — A0**: UEFA 2018/19: 12경기 1020분, 1골 2도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CM #8 — 라세 쇠네 (Lasse Schöne; AFC Ajax) — A0**: UEFA 2018/19: 11경기 886분, 1골 2도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://datencenter.dfb.de/champions-league/2018-2019/mannschaft/ajax-amsterdam
- **CM #9 — 블레즈 마튀디 (Blaise Matuidi; Juventus FC) — A0**: UEFA 2018/19: 9경기 683분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CM #10 — 사울 니게스 (Saúl Ñíguez; Club Atlético de Madrid) — A0**: UEFA 2018/19: 8경기 631분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CM #11 — 레온 고레츠카 (Leon Goretzka; FC Bayern München) — A0**: UEFA 2018/19: 6경기 326분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CM #12 — 케빈 더브라위너 (Kevin De Bruyne; Manchester City FC) — A-**: UEFA 2018/19: 4경기 247분, 0골 4도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **CM #13 — 엑토르 에레라 (Héctor Herrera; FC Porto) — A-**: UEFA 2018/19: 9경기 834분, 2골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **CM #14 — 폴 포그바 (Paul Pogba; Manchester United FC) — A-**: UEFA 2018/19: 9경기 729분, 2골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CM #15 — 토니 크로스 (Toni Kroos; Real Madrid CF) — A-**: UEFA 2018/19: 8경기 645분, 1골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CM #16 — 마르코 베라티 (Marco Verratti; Paris Saint-Germain FC) — A-**: UEFA 2018/19: 7경기 601분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **CM #17 — 오타비우 (Otávio; FC Porto) — B+**: UEFA 2018/19: 8경기 516분, 2골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/; https://www.goal.com/es/noticias/la-plantilla-del-porto-201819-jugadores-y-cuerpo-tecnico-del-equipo-de-casillas/3vitkmwhii9u1jz7ncqcpf50p
- **CM #18 — 웨스턴 맥케니 (Weston McKennie; FC Schalke 04) — B+**: UEFA 2018/19: 6경기 373분, 1골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CM #19 — 하비 마르티네스 (Javi Martínez; FC Bayern München) — B+**: UEFA 2018/19: 6경기 520분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **CM #20 — 루카 모드리치 (Luka Modrić; Real Madrid CF) — B+**: UEFA 2018/19: 6경기 467분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **CM #21 — 다니엘레 데 로시 (Daniele De Rossi; AS Roma) — B+**: UEFA 2018/19: 4경기 305분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CM #22 — 아르투르 멜루 (Arthur Melo; FC Barcelona) — B+**: UEFA 2018/19: 9경기 566분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CM #23 — 토마스 파르티 (Thomas Partey; Club Atlético de Madrid) — B+**: UEFA 2018/19: 6경기 418분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CM #24 — 로드리고 벤탄쿠르 (Rodrigo Bentancur; Juventus FC) — B+**: UEFA 2018/19: 7경기 550분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CM #25 — 브리안 크리스탄테 (Bryan Cristante; AS Roma) — B+**: UEFA 2018/19: 7경기 515분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CM #26 — 아르투로 비달 (Arturo Vidal; FC Barcelona) — B+**: UEFA 2018/19: 11경기 356분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CM #27 — 엠레 잔 (Emre Can; Juventus FC) — B+**: UEFA 2018/19: 6경기 335분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **CM #28 — 토마스 델라니 (Thomas Delaney; Borussia Dortmund) — B+**: UEFA 2018/19: 6경기 297분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **CM #29 — 올리베르 토레스 (Óliver Torres; FC Porto) — B0**: UEFA 2018/19: 5경기 351분, 0골 2도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2015-16.json
- **CM #30 — 주아트 세르다르 (Suat Serdar; FC Schalke 04) — B0**: UEFA 2018/19: 7경기 503분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **CM #31 — 나비 케이타 (Naby Keïta; Liverpool FC) — B0**: UEFA 2018/19: 6경기 244분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CM #32 — 율리안 드락슬러 (Julian Draxler; Paris Saint-Germain FC) — B0**: UEFA 2018/19: 7경기 284분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **CM #33 — 아드리앵 라비오 (Adrien Rabiot; Paris Saint-Germain FC) — B0**: UEFA 2018/19: 5경기 282분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **CM #34 — 다니 세바요스 (Dani Ceballos; Real Madrid CF) — B0**: UEFA 2018/19: 3경기 185분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-192.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **CM #35 — 프레드 (Fred; Manchester United FC) — B-**: UEFA 2018/19: 6경기 461분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CM #36 — 안데르 에레라 (Ander Herrera; Manchester United FC) — B-**: UEFA 2018/19: 2경기 169분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **CM #37 — 카렐 에이팅 (Carel Eiting; AFC Ajax) — C+**: UEFA 2018/19: 1경기 90분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **DM #1 — 프렝키 더 용 (Frenkie de Jong; AFC Ajax) — S**: UEFA 2018/19: 11경기 986분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교. UEFA 기술위원 시즌 대표 20인 선정. 중원 전개와 압박 탈출을 지배하고 UEFA 시즌 최고 미드필더 수상. 개인 기여 중심 S 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **DM #2 — 파비뉴 (Fabinho; Liverpool FC) — A+**: UEFA 2018/19: 11경기 727분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #3 — 세르히오 부스케츠 (Sergio Busquets; FC Barcelona) — A+**: UEFA 2018/19: 12경기 1033분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **DM #4 — 페르난지뉴 (Fernandinho; Manchester City FC) — A+**: UEFA 2018/19: 8경기 643분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #5 — 미랄렘 피아니치 (Miralem Pjanić; Juventus FC) — A0**: UEFA 2018/19: 10경기 813분, 2골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **DM #6 — 우셈 아우아르 (Houssem Aouar; Olympique Lyonnais) — A0**: UEFA 2018/19: 7경기 630분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **DM #7 — 로드리 (Rodri; Club Atlético de Madrid) — A0**: UEFA 2018/19: 8경기 606분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **DM #8 — 티아고 알칸타라 (Thiago Alcântara; FC Bayern München) — A0**: UEFA 2018/19: 5경기 388분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **DM #9 — 제임스 밀너 (James Milner; Liverpool FC) — A-**: UEFA 2018/19: 12경기 901분, 2골 2도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #10 — 다닐루 페레이라 (Danilo Pereira; FC Porto) — A-**: UEFA 2018/19: 10경기 930분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **DM #11 — 나빌 벤탈렙 (Nabil Bentaleb; FC Schalke 04) — A-**: UEFA 2018/19: 6경기 422분, 3골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2015-16.json
- **DM #12 — 악셀 비첼 (Axel Witsel; Borussia Dortmund) — A-**: UEFA 2018/19: 7경기 629분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **DM #13 — 해리 윙크스 (Harry Winks; Tottenham Hotspur FC) — A-**: UEFA 2018/19: 10경기 676분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #14 — 마르키뉴스 (Marquinhos; Paris Saint-Germain FC) — A-**: UEFA 2018/19: 7경기 630분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **DM #15 — 일카이 귄도안 (İlkay Gündoğan; Manchester City FC) — A-**: UEFA 2018/19: 8경기 590분, 0골 1도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #16 — 카세미루 (Casemiro; Real Madrid CF) — A-**: UEFA 2018/19: 6경기 505분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **DM #17 — 스티븐 은존지 (Steven Nzonzi; AS Roma) — B+**: UEFA 2018/19: 8경기 610분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **DM #18 — 뤼카 투사르 (Lucas Tousart; Olympique Lyonnais) — B+**: UEFA 2018/19: 7경기 482분, 1골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **DM #19 — 네마냐 마티치 (Nemanja Matić; Manchester United FC) — B0**: UEFA 2018/19: 6경기 540분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #20 — 율리안 바이글 (Julian Weigl; Borussia Dortmund) — B0**: UEFA 2018/19: 4경기 289분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **DM #21 — 스콧 맥토미니 (Scott McTominay; Manchester United FC) — B0**: UEFA 2018/19: 3경기 270분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **DM #22 — 에릭 다이어 (Eric Dier; Tottenham Hotspur FC) — B-**: UEFA 2018/19: 6경기 267분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **DM #23 — 제바스티안 루디 (Sebastian Rudy; FC Schalke 04) — C+**: UEFA 2018/19: 4경기 240분, 0골 0도움. 중원 압박·전진 패스·공수 균형; 동포지션 비교.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2017-181016.html
- **GK #1 — 알리송 베케르 (Alisson Becker; Liverpool FC) — S**: UEFA 2018/19: 13경기 1170분, 0골 0도움. 선방 기여와 가용성; GK 간 비교. UEFA 기술위원 시즌 대표 20인 선정. 13경기 1170분, 핵심 선방과 2018/19 골키퍼 개인상. 개인 기여 중심 S 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **GK #2 — 안드레 오나나 (André Onana; AFC Ajax) — A+**: UEFA 2018/19: 12경기 1080분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://www.uefa.com/uefaeuropaleague/history/seasons/2017/statistics/
- **GK #3 — 마르크안드레 테어 슈테겐 (Marc-André ter Stegen; FC Barcelona) — A+**: UEFA 2018/19: 11경기 990분, 0골 0도움. 선방 기여와 가용성; GK 간 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **GK #4 — 위고 요리스 (Hugo Lloris; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 11경기 979분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **GK #5 — 얀 오블라크 (Jan Oblak; Club Atlético de Madrid) — A+**: UEFA 2018/19: 8경기 720분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **GK #6 — 에데르송 (Ederson; Manchester City FC) — A0**: UEFA 2018/19: 10경기 900분, 0골 1도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **GK #7 — 보이치에흐 슈쳉스니 (Wojciech Szczęsny; Juventus FC) — A0**: UEFA 2018/19: 10경기 900분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **GK #8 — 마누엘 노이어 (Manuel Neuer; FC Bayern München) — A-**: UEFA 2018/19: 8경기 720분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **GK #9 — 안토니 로페스 (Anthony Lopes; Olympique Lyonnais) — A-**: UEFA 2018/19: 8경기 664분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **GK #10 — 이케르 카시야스 (Iker Casillas; FC Porto) — B+**: UEFA 2018/19: 10경기 930분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **GK #11 — 다비드 데 헤아 (David de Gea; Manchester United FC) — B+**: UEFA 2018/19: 9경기 810분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **GK #12 — 로만 뷔르키 (Roman Bürki; Borussia Dortmund) — B+**: UEFA 2018/19: 7경기 630분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **GK #13 — 티보 쿠르투아 (Thibaut Courtois; Real Madrid CF) — B+**: UEFA 2018/19: 5경기 450분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-192.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **GK #14 — 알퐁스 아레올라 (Alphonse Areola; Paris Saint-Germain FC) — B+**: UEFA 2018/19: 3경기 270분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **GK #15 — 랄프 페어만 (Ralf Fährmann; FC Schalke 04) — B0**: UEFA 2018/19: 6경기 540분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://github.com/wjdduddlf112/footballarch/blob/main/data/bundesliga-2015-16.json
- **GK #16 — 케일로르 나바스 (Keylor Navas; Real Madrid CF) — B0**: UEFA 2018/19: 3경기 270분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **GK #17 — 로빈 올센 (Robin Olsen; AS Roma) — B-**: UEFA 2018/19: 6경기 570분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **GK #18 — 잔루이지 부폰 (Gianluigi Buffon; Paris Saint-Germain FC) — B-**: UEFA 2018/19: 5경기 450분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **GK #19 — 알렉산더 뉘벨 (Alexander Nübel; FC Schalke 04) — B-**: UEFA 2018/19: 2경기 180분, 0골 0도움. 선방 기여와 가용성; GK 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **LB #1 — 앤드루 로버트슨 (Andy Robertson; Liverpool FC) — A+**: UEFA 2018/19: 12경기 1008분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **LB #2 — 조르디 알바 (Jordi Alba; FC Barcelona) — A+**: UEFA 2018/19: 11경기 990분, 1골 5도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **LB #3 — 니콜라스 탈리아피코 (Nicolás Tagliafico; AFC Ajax) — A+**: UEFA 2018/19: 10경기 900분, 3골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **LB #4 — 알렉스 텔리스 (Alex Telles; FC Porto) — A0**: UEFA 2018/19: 10경기 930분, 1골 3도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **LB #5 — 후안 베르나트 (Juan Bernat; Paris Saint-Germain FC) — A0**: UEFA 2018/19: 8경기 675분, 3골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **LB #6 — 페를랑 멘디 (Ferland Mendy; Olympique Lyonnais) — A0**: UEFA 2018/19: 8경기 707분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **LB #7 — 알렉스 산드루 (Alex Sandro; Juventus FC) — A0**: UEFA 2018/19: 9경기 742분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **LB #8 — 다비드 알라바 (David Alaba; FC Bayern München) — A0**: UEFA 2018/19: 7경기 630분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **LB #9 — 하파엘 게헤이루 (Raphaël Guerreiro; Borussia Dortmund) — A-**: UEFA 2018/19: 6경기 284분, 4골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **LB #10 — 알렉산다르 콜라로프 (Aleksandar Kolarov; AS Roma) — A-**: UEFA 2018/19: 8경기 661분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **LB #11 — 아슈라프 하키미 (Achraf Hakimi; Borussia Dortmund) — A-**: UEFA 2018/19: 5경기 370분, 0골 3도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **LB #12 — 세르히오 레길론 (Sergio Reguilón; Real Madrid CF) — A-**: UEFA 2018/19: 4경기 360분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-192.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LB #13 — 루크 쇼 (Luke Shaw; Manchester United FC) — B+**: UEFA 2018/19: 8경기 720분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LB #14 — 마르셀루 (Marcelo; Real Madrid CF) — B+**: UEFA 2018/19: 4경기 344분, 1골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **LB #15 — 대니 로즈 (Danny Rose; Tottenham Hotspur FC) — B+**: UEFA 2018/19: 8경기 529분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LB #16 — 필리피 루이스 (Filipe Luís; Club Atlético de Madrid) — B+**: UEFA 2018/19: 5경기 405분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LB #17 — 뤼카 에르난데스 (Lucas Hernández; Club Atlético de Madrid) — B+**: UEFA 2018/19: 5경기 450분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LB #18 — 올렉산드르 진첸코 (Oleksandr Zinchenko; Manchester City FC) — B+**: UEFA 2018/19: 5경기 337분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LB #19 — 벤 데이비스 (Ben Davies; Tottenham Hotspur FC) — B0**: UEFA 2018/19: 9경기 567분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LB #20 — 바스티안 오치프카 (Bastian Oczipka; FC Schalke 04) — C+**: UEFA 2018/19: 2경기 180분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **LW #1 — 사디오 마네 (Sadio Mané; Liverpool FC) — A+**: UEFA 2018/19: 13경기 1152분, 4골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정. 이전 2017/18 10골에 이어 UCL 2018/19 4골, 출전 지속성 평가. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **LW #2 — 네이마르 (Neymar; Paris Saint-Germain FC) — A+**: UEFA 2018/19: 6경기 532분, 5골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. 6경기 5골이나 맨유와의 16강 부상 결장으로 가용성 제한. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **LW #3 — 손흥민 (Son Heung-min; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 12경기 906분, 4골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LW #4 — 르로이 사네 (Leroy Sané; Manchester City FC) — A+**: UEFA 2018/19: 8경기 395분, 4골 5도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LW #5 — 멤피스 데파이 (Memphis Depay; Olympique Lyonnais) — A0**: UEFA 2018/19: 8경기 618분, 1골 3도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **LW #6 — 다비드 네리스 (David Neres; AFC Ajax) — A-**: UEFA 2018/19: 11경기 852분, 2골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://datencenter.dfb.de/champions-league/2018-2019/mannschaft/ajax-amsterdam
- **LW #7 — 우스만 뎀벨레 (Ousmane Dembélé; FC Barcelona) — A-**: UEFA 2018/19: 8경기 417분, 3골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LW #8 — 필리피 쿠티뉴 (Philippe Coutinho; FC Barcelona) — B+**: UEFA 2018/19: 12경기 860분, 3골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LW #9 — 야신 브라히미 (Yacine Brahimi; FC Porto) — B+**: UEFA 2018/19: 9경기 624분, 0골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **LW #10 — 앙토니 마르시알 (Anthony Martial; Manchester United FC) — B+**: UEFA 2018/19: 8경기 506분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LW #11 — 야코브 브룬 라르센 (Jacob Bruun Larsen; Borussia Dortmund) — B0**: UEFA 2018/19: 5경기 150분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **LW #12 — 마르코 아센시오 (Marco Asensio; Real Madrid CF) — B0**: UEFA 2018/19: 7경기 301분, 2골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **LW #13 — 에릭 라멜라 (Erik Lamela; Tottenham Hotspur FC) — B0**: UEFA 2018/19: 9경기 333분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LW #14 — 마리오 만주키치 (Mario Mandžukić; Juventus FC) — B0**: UEFA 2018/19: 8경기 579분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **LW #15 — 비니시우스 주니오르 (Vinícius Júnior; Real Madrid CF) — B0**: UEFA 2018/19: 4경기 234분, 0골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-192.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LW #16 — 크리스천 풀리식 (Christian Pulisic; Borussia Dortmund) — B0**: UEFA 2018/19: 7경기 454분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **LW #17 — 프랑크 리베리 (Franck Ribéry; FC Bayern München) — B0**: UEFA 2018/19: 7경기 440분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **LW #18 — 저스틴 클라위버르트 (Justin Kluivert; AS Roma) — B0**: UEFA 2018/19: 5경기 319분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **LW #19 — 토마 르마르 (Thomas Lemar; Club Atlético de Madrid) — B0**: UEFA 2018/19: 7경기 410분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **LW #20 — 킹슬리 코망 (Kingsley Coman; FC Bayern München) — B-**: UEFA 2018/19: 3경기 129분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **LW #21 — 스테판 엘샤라위 (Stephan El Shaarawy; AS Roma) — B-**: UEFA 2018/19: 4경기 263분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **LW #22 — 알렉시스 산체스 (Alexis Sánchez; Manchester United FC) — C+**: UEFA 2018/19: 4경기 211분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **LW #23 — 도글라스 코스타 (Douglas Costa; Juventus FC) — C+**: UEFA 2018/19: 5경기 157분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **LW #24 — 무사 디아비 (Moussa Diaby; Paris Saint-Germain FC) — C-**: UEFA 2018/19: 1경기 7분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **RB #1 — 트렌트 알렉산더아널드 (Trent Alexander-Arnold; Liverpool FC) — A+**: UEFA 2018/19: 11경기 921분, 0골 4도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **RB #2 — 요주아 키미히 (Joshua Kimmich; FC Bayern München) — A+**: UEFA 2018/19: 7경기 630분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **RB #3 — 누사이르 마즈라위 (Noussair Mazraoui; AFC Ajax) — A-**: UEFA 2018/19: 11경기 827분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **RB #4 — 카일 워커 (Kyle Walker; Manchester City FC) — A-**: UEFA 2018/19: 10경기 746분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RB #5 — 세르지 로베르토 (Sergi Roberto; FC Barcelona) — A-**: UEFA 2018/19: 9경기 709분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **RB #6 — 주앙 칸셀루 (João Cancelo; Juventus FC) — A-**: UEFA 2018/19: 7경기 479분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **RB #7 — 다니 카르바할 (Dani Carvajal; Real Madrid CF) — A-**: UEFA 2018/19: 6경기 419분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **RB #8 — 알레산드로 플로렌치 (Alessandro Florenzi; AS Roma) — B+**: UEFA 2018/19: 8경기 618분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **RB #9 — 넬송 세메두 (Nélson Semedo; FC Barcelona) — B+**: UEFA 2018/19: 10경기 554분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **RB #10 — 다니엘 칼리주리 (Daniel Caligiuri; FC Schalke 04) — B+**: UEFA 2018/19: 6경기 512분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://github.com/wjdduddlf112/footballarch/blob/main/data/ucl-2015-16.json
- **RB #11 — 틸로 케러 (Thilo Kehrer; Paris Saint-Germain FC) — B+**: UEFA 2018/19: 7경기 488분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://datencenter.dfb.de/competitions/champions-league/seasons/2018-2019/teams/fc-schalke-04
- **RB #12 — 우카시 피슈체크 (Łukasz Piszczek; Borussia Dortmund) — B+**: UEFA 2018/19: 5경기 450분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **RB #13 — 레오 뒤부아 (Léo Dubois; Olympique Lyonnais) — B+**: UEFA 2018/19: 5경기 285분, 1골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **RB #14 — 산티아고 아리아스 (Santiago Arias; Club Atlético de Madrid) — B+**: UEFA 2018/19: 4경기 347분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **RB #15 — 마티아 데 실리오 (Mattia De Sciglio; Juventus FC) — B+**: UEFA 2018/19: 4경기 309분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **RB #16 — 다니 아우베스 (Dani Alves; Paris Saint-Germain FC) — B+**: UEFA 2018/19: 3경기 204분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **RB #17 — 키런 트리피어 (Kieran Trippier; Tottenham Hotspur FC) — B0**: UEFA 2018/19: 8경기 626분, 0골 2도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RB #18 — 막시 페레이라 (Maxi Pereira; FC Porto) — B0**: UEFA 2018/19: 8경기 634분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **RB #19 — 후안프란 (Juanfran; Club Atlético de Madrid) — B0**: UEFA 2018/19: 5경기 450분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **RB #20 — 하피냐 (Rafinha; FC Bayern München) — B0**: UEFA 2018/19: 6경기 367분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **RB #21 — 다비데 산톤 (Davide Santon; AS Roma) — B0**: UEFA 2018/19: 4경기 258분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **RB #22 — 다닐루 (Danilo; Manchester City FC) — B0**: UEFA 2018/19: 2경기 119분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RB #23 — 애슐리 영 (Ashley Young; Manchester United FC) — B-**: UEFA 2018/19: 7경기 582분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RB #24 — 세르주 오리에 (Serge Aurier; Tottenham Hotspur FC) — B-**: UEFA 2018/19: 5경기 435분, 0골 1도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RB #25 — 디오구 달로 (Diogo Dalot; Manchester United FC) — B-**: UEFA 2018/19: 4경기 243분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RB #26 — 하파엘 다 시우바 (Rafael; Olympique Lyonnais) — B-**: UEFA 2018/19: 3경기 240분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **RB #27 — 라스무스 크리스텐센 (Rasmus Nissen Kristensen; AFC Ajax) — C-**: UEFA 2018/19: 1경기 9분, 0골 0도움. 수비 가용성·전술적 역할·공수 전환; 수비수 간 비교.  개인 기여 중심 C- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **RW #1 — 리오넬 메시 (Lionel Messi; FC Barcelona) — S**: UEFA 2018/19: 10경기 837분, 12골 3도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정. 2018/19 대회 최다 12골 3도움 및 최근 3시즌의 지속적 최고 수준 경기력을 반영. 개인 기여 중심 S 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **RW #2 — 모하메드 살라 (Mohamed Salah; Liverpool FC) — A+**: UEFA 2018/19: 12경기 1058분, 5골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. 전 시즌 10골과 이번 시즌 5골·2도움 가중 평가. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RW #3 — 라힘 스털링 (Raheem Sterling; Manchester City FC) — A+**: UEFA 2018/19: 10경기 871분, 5골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **RW #4 — 하킴 지예시 (Hakim Ziyech; AFC Ajax) — A+**: UEFA 2018/19: 11경기 985분, 3골 3도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefaeuropaleague/news/0239-0e971114bdef-13a9f3920754-1000--europa-league-final-preview-ajax-v-manchester-united/; https://datencenter.dfb.de/champions-league/2018-2019/mannschaft/ajax-amsterdam
- **RW #5 — 루카스 모우라 (Lucas Moura; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 12경기 725분, 5골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정. 아약스 준결승 역전 해트트릭은 핵심 경기 개인 활약으로 반영. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **RW #6 — 앙헬 디마리아 (Ángel Di María; Paris Saint-Germain FC) — A0**: UEFA 2018/19: 8경기 661분, 2골 3도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **RW #7 — 코케 (Koke; Club Atlético de Madrid) — A0**: UEFA 2018/19: 7경기 562분, 2골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **RW #8 — 젱기즈 윈데르 (Cengiz Ünder; AS Roma) — A-**: UEFA 2018/19: 6경기 437분, 3골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **RW #9 — 가레스 베일 (Gareth Bale; Real Madrid CF) — A-**: UEFA 2018/19: 7경기 489분, 3골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **RW #10 — 헤수스 코로나 (Jesús Corona; FC Porto) — A-**: UEFA 2018/19: 8경기 561분, 3골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/
- **RW #11 — 제이든 산초 (Jadon Sancho; Borussia Dortmund) — A-**: UEFA 2018/19: 7경기 438분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **RW #12 — 막스웰 코르네 (Maxwel Cornet; Olympique Lyonnais) — B+**: UEFA 2018/19: 5경기 214분, 3골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **RW #13 — 리야드 마레즈 (Riyad Mahrez; Manchester City FC) — B+**: UEFA 2018/19: 6경기 388분, 1골 4도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RW #14 — 마커스 래시퍼드 (Marcus Rashford; Manchester United FC) — B+**: UEFA 2018/19: 10경기 724분, 2골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RW #15 — 제르단 샤키리 (Xherdan Shaqiri; Liverpool FC) — B+**: UEFA 2018/19: 4경기 176분, 0골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RW #16 — 베르트랑 트라오레 (Bertrand Traoré; Olympique Lyonnais) — B+**: UEFA 2018/19: 8경기 320분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **RW #17 — 세르주 그나브리 (Serge Gnabry; FC Bayern München) — B+**: UEFA 2018/19: 7경기 446분, 0골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **RW #18 — 페데리코 베르나르데스키 (Federico Bernardeschi; Juventus FC) — B+**: UEFA 2018/19: 8경기 552분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **RW #19 — 앙헬 코레아 (Ángel Correa; Club Atlético de Madrid) — B+**: UEFA 2018/19: 8경기 353분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **RW #20 — 루카스 바스케스 (Lucas Vázquez; Real Madrid CF) — B0**: UEFA 2018/19: 6경기 386분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/; https://www.bdfutbol.com/en/t/t2016-172.html
- **RW #21 — 제시 린가드 (Jesse Lingard; Manchester United FC) — B0**: UEFA 2018/19: 6경기 296분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **RW #22 — 말콤 (Malcom; FC Barcelona) — C+**: UEFA 2018/19: 3경기 39분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **RW #23 — 에르나니 (Hernâni; FC Porto) — C+**: UEFA 2018/19: 6경기 124분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **ST #1 — 두샨 타디치 (Dušan Tadić; AFC Ajax) — S**: UEFA 2018/19: 12경기 1080분, 6골 5도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정. 레알 마드리드·유벤투스전 직접 창출과 6골 5도움의 합산 기여. 개인 기여 중심 S 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0252-0e99c3f9c0f4-c762bb0ec7f4-1000--uefa-champions-league-squad-of-the-season/
- **ST #2 — 로베르트 레반도프스키 (Robert Lewandowski; FC Bayern München) — A+**: UEFA 2018/19: 8경기 713분, 8골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. 8경기 8골, 최근 2016/17 및 2017/18의 UCL 공격 생산성 보조. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191016.html; https://datencenter.dfb.de/bundesliga/2018-2019/mannschaft/bayern-muenchen
- **ST #3 — 크리스티아누 호날두 (Cristiano Ronaldo; Juventus FC) — A+**: UEFA 2018/19: 9경기 749분, 6골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. UEFA 기술위원 시즌 대표 20인 선정. 아틀레티코전 해트트릭 등 큰 경기 활약 및 직전 2년 최고 수준 득점력. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **ST #4 — 무사 마레가 (Moussa Marega; FC Porto) — A+**: UEFA 2018/19: 9경기 840분, 6골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. 포르투 공격 핵심으로 9경기 6골 2도움. 개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.goal.com/es/noticias/la-plantilla-del-porto-201819-jugadores-y-cuerpo-tecnico-del-equipo-de-casillas/3vitkmwhii9u1jz7ncqcpf50p
- **ST #5 — 에딘 제코 (Edin Džeko; AS Roma) — A+**: UEFA 2018/19: 6경기 570분, 5골 4도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **ST #6 — 세르히오 아궤로 (Sergio Agüero; Manchester City FC) — A+**: UEFA 2018/19: 7경기 510분, 6골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **ST #7 — 킬리안 음바페 (Kylian Mbappé; Paris Saint-Germain FC) — A+**: UEFA 2018/19: 8경기 701분, 4골 4도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **ST #8 — 해리 케인 (Harry Kane; Tottenham Hotspur FC) — A+**: UEFA 2018/19: 9경기 778분, 5골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **ST #9 — 앙투안 그리즈만 (Antoine Griezmann; Club Atlético de Madrid) — A+**: UEFA 2018/19: 8경기 720분, 4골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **ST #10 — 카림 벤제마 (Karim Benzema; Real Madrid CF) — A0**: UEFA 2018/19: 8경기 587분, 4골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **ST #11 — 루이스 수아레스 (Luis Suárez; FC Barcelona) — A0**: UEFA 2018/19: 10경기 900분, 1골 5도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/56/86/48/2568648_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/history/seasons/2017/statistics/
- **ST #12 — 호베르투 피르미누 (Roberto Firmino; Liverpool FC) — A0**: UEFA 2018/19: 12경기 749분, 4골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/liverpool.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **ST #13 — 파울로 디발라 (Paulo Dybala; Juventus FC) — A-**: UEFA 2018/19: 9경기 518분, 5골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193004.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **ST #14 — 무사 뎀벨레 (Moussa Dembélé; Olympique Lyonnais) — A-**: UEFA 2018/19: 6경기 296분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 A- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **ST #15 — 디보크 오리기 (Divock Origi; Liverpool FC) — B+**: UEFA 2018/19: 8경기 217분, 3골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가. 바르셀로나 4강 2골과 결승 추가골, 다만 총 217분으로 제한적 출전. 개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **ST #16 — 가브리에우 제주스 (Gabriel Jesus; Manchester City FC) — B+**: UEFA 2018/19: 6경기 375분, 4골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/mancity.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **ST #17 — 로멜루 루카쿠 (Romelu Lukaku; Manchester United FC) — B+**: UEFA 2018/19: 9경기 546분, 2골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/manutd.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **ST #18 — 에딘손 카바니 (Edinson Cavani; Paris Saint-Germain FC) — B+**: UEFA 2018/19: 7경기 415분, 2골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194002.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/psg.htm
- **ST #19 — 파코 알카세르 (Paco Alcácer; Borussia Dortmund) — B+**: UEFA 2018/19: 5경기 356분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **ST #20 — 마르탱 테리에 (Martin Terrier; Olympique Lyonnais) — B+**: UEFA 2018/19: 3경기 159분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-194017.html; https://www.footballsquads.co.uk/france/2018-2019/ligue1/lyon.htm
- **ST #21 — 알바로 모라타 (Álvaro Morata; Club Atlético de Madrid) — B+**: UEFA 2018/19: 2경기 122분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **ST #22 — 티키뉴 소아레스 (Tiquinho Soares; FC Porto) — B0**: UEFA 2018/19: 4경기 275분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.uefa.com/uefachampionsleague/news/0236-0e964c50bf02-e5beb0f76fae-1000--porto-v-juventus-line-ups-where-to-watch-form-guide/; https://www.goal.com/es/noticias/la-plantilla-del-porto-201819-jugadores-y-cuerpo-tecnico-del-equipo-de-casillas/3vitkmwhii9u1jz7ncqcpf50p
- **ST #23 — 디에고 코스타 (Diego Costa; Club Atlético de Madrid) — B0**: UEFA 2018/19: 4경기 307분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-197.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json
- **ST #24 — 파트리크 시크 (Patrik Schick; AS Roma) — B0**: UEFA 2018/19: 6경기 250분, 0골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B0 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-193009.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2018-19.json
- **ST #25 — 페르난도 요렌테 (Fernando Llorente; Tottenham Hotspur FC) — B-**: UEFA 2018/19: 9경기 235분, 2골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.footballsquads.co.uk/eng/2018-2019/engprem/tottenha.htm; https://github.com/wjdduddlf112/footballarch/blob/main/data/premierleague-2018-19.json
- **ST #26 — 마르크 우트 (Mark Uth; FC Schalke 04) — B-**: UEFA 2018/19: 5경기 395분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **ST #27 — 브릴 엠볼로 (Breel Embolo; FC Schalke 04) — B-**: UEFA 2018/19: 5경기 385분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
- **ST #28 — 막시밀리안 필리프 (Maximilian Philipp; Borussia Dortmund) — B-**: UEFA 2018/19: 2경기 86분, 0골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 B- 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-191003.html; https://datencenter.dfb.de/competitions/bundesliga/seasons/2018-2019/teams/borussia-dortmund
- **ST #29 — 귀도 부르크슈탈러 (Guido Burgstaller; FC Schalke 04) — C+**: UEFA 2018/19: 6경기 231분, 1골 1도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://datencenter.dfb.de/competitions/champions-league/seasons/2018-2019/teams/fc-schalke-04
- **ST #30 — 클라스얀 휜텔라르 (Klaas-Jan Huntelaar; AFC Ajax) — C+**: UEFA 2018/19: 5경기 96분, 0골 2도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://schalke04.de/verein/tradition/alle-spiele-alle-tore/europapokal/europa-league-20162017/; https://github.com/wjdduddlf112/footballarch/blob/main/data/bundesliga-2015-16.json
- **ST #31 — 마리아노 디아스 (Mariano Díaz; Real Madrid CF) — C+**: UEFA 2018/19: 5경기 73분, 1골 0도움. 공격수의 득점 생산성과 도움, 큰 경기 개인 영향력 평가.  개인 기여 중심 C+ 잠정 판정. 최신 2018/19 중점, 2017/18·2016/17 보조; 이전 2시즌 전수 검증 미완료, DRAFT. Sources: https://www.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf; https://www.bdfutbol.com/en/t/t2018-192.html; https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2018-19.json

## Known concerns and additional verification required
- Existing candidate pool has only 16 knockout-stage clubs out of 32 UEFA group-stage participants; roster completeness was not reassessed.
- Pre-existing player positions preserved even where wing-back or hybrid centre-forward/winger roles merit game-by-game rechecking. No extra candidates or double-position registration.
- 2016/17 and 2017/18 full individual history remains to be reviewed. This limits the claim of independent three-season weighting. Earlier career reputation and subsequent career honors not retrospectively applied.
- Potentially ambiguous table extraction: Ajax De Ligt two 2018/19 tournament goals and Tagliafico three goals must be reconciled against match-by-match UEFA or club match sources when certifying, rather than silently shifting score columns.
- The current report does not claim full in-browser functional verification of the published website, CI execution, or newly deployed page.

## GitHub provenance
- Original data blob: `2cbf90d58a0342112a4d01800e00a421ae849d91`.
- Updated player data JSON: `ae6edeb0cf83948db74af407fc19acdd9c1d18dc`.
- Audit document SHA: see the commit which writes this file (appended to final user report).
