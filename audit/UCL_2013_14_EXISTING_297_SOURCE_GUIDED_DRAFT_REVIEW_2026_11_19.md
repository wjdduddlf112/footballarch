# UCL 2013-14 — 297-player source-guided DRAFT archive and verification audit (2026-11-19)

**UNAPPROVED DRAFT: 0/297 players independently matchwise audited for the complete 2011-12/2012-13/2013-14 period.** This file contains the original candidate pool's **provisional** 297 tiers and positional rankings; individual UEFA 2013/14 records directly sourced for a subset. Unverified data is not represented as a verified zero.

## Competition and evaluation scope
- GitHub repository `wjdduddlf112/footballarch`, `main`, [season JSON](../data/ucl-2013-14.json); data blob SHA after tier/role revision: `ab345e13bf79d1c924e9d22a2f2c6d9a8cfcbf90`.
- Original **16 round-of-16 clubs**, original **297 candidate IDs**, and all existing names/club IDs preserved. No club, player, match result or fixture added or deleted.
- Recency-weighted comparison: **2013-14 > 2012-13 > 2011-12**. The most recent personal UEFA performances take priority; previous two seasons provide context. Domestic-league tier is *not* accepted as independent evidence of UEFA personal form.
- Team win/trophy and league finishing positions are **not** used as individual grade bonuses. Direct goals/assists, defence/recoveries, shot-stopping, tactical roles and repeat contributions guide provisional assessment.
- Most common tournament era shape **4-2-3-1**: UEFA 2013-14 technical report says **19/32 teams** used it *at some stage*; 4-3-3 used by six and 4-4-2 by six. Old `meta.formation` 4-3-3 brought into line with representative 4-2-3-1.
- Ratings stored as `S`, `A+`, `A`, `A-`, `B+`, `B`, `B-`, `C+`, `C`, `C-`, `D`; in this table `A`, `B`, `C` are labelled **A0**, **B0**, **C0**. S indispensable, A+ competition-near-indispensable, A0 UCL top class, A- near top, B+ near top club regular, B0 regular, B- underperforming regular; lower grades for weaker/depth-only candidates.

## Evidence audit ledger
| Coverage category | Source checked or DRAFT |
|---|---:|
| Original candidates | 297 / 297 preserved |
| Club IDs / preexisting evaluated teams | 16 / 16 preserved |
| Birth dates before -> after | 237 -> 297 |
| First-time candidate DOB fills | 60 |
| Provisional grades before -> after | 209 -> 297 |
| Initial 88 formerly ungraded provisional grades | 88 |
| Revised previously filled tiers | 19 |
| Prior tiers explicitly rechecked and unchanged | 2 |
| Positional ranks before -> after | 209 -> 297 |
| 2013-14 UEFA technical selection names cross-checked | 18 |
| Individually sourced 2013-14 goals | 26 |
| Individually sourced 2013-14 appearances | 30 |
| Individually sourced 2013-14 minutes | 27 |
| Independently populated 2013-14 starts | 1 |
| UEFA historically defined assists entered | 6 |
| UEFA historically defined balls recovered entered | 6 |
| UEFA historically defined saves entered | 4 |
| Completed independent individual three-season audit | **0/297** |
| Live GitHub Pages / browser / CI validation | **Not performed** |

## Primary historical sources and definitions
- [UEFA 2013/14 18-player Technical Study Group selection](https://www.uefa.com/uefachampionsleague/news/0252-0ce44643bfcd-c32e4b484ab1-1000--uefa-champions-league-squad-of-the-season/): two GKs, five defenders, six midfielders, five attackers. **Not an official single Best XI**, no modern-style Team of the Year.
- [UEFA 2013/14 technical season review](https://www.uefa.com/MultimediaFiles/Download/uefaorg/General/02/16/11/83/2161183_DOWNLOAD.pdf): tournament tactics, 19/32 used 4-2-3-1 at some point, 32-club profiles.
- [UEFA official 2013/14 individual competition leaderboard](https://www.uefa.com/uefachampionsleague/history/seasons/2014/statistics/): individual goals, assists, balls recovered, keeper saves.
- [UEFA May 24, 2014 top scorer and historical goalscoring context](https://www.uefa.com/uefachampionsleague/news/0252-0cdc68c5ee7f-854c7d82fcc8-1000--record-breaking-ronaldo-takes-scoring-honours/): Ronaldo 17, Ibrahimović 10, Diego Costa/Messi 8, Lewandowski/Agüero 6.
- [TNT Sports 2013/14 direct scorer/player appearance listing](https://www.tntsports.co.uk/football/champions-league/2013-2014/topscorer.shtml): per-player goals, apps and minutes (26 existing candidates matched). Provider assists **differ** from UEFA official definitions, so UCL assists in JSON come from UEFA.
- [DFB Manchester United historical squad](https://datencenter.dfb.de/champions-league/2013-2014/mannschaft/1268); [DFB Galatasaray historical squad](https://datencenter.dfb.de/en/competitions/champions-league/seasons/2013-2014/teams/galatasaray-sk); [Olympiacos historical announced UCL squad](https://www.olympiacos.org/en/2013/09/04/olympiacos-champions-league-squad-2/); [BDFutbol Olympiacos individual stats](https://www.bdfutbol.com/en/t/t2013-1410026.html); [DFB Zenit historical squad](https://datencenter.dfb.de/en/competitions/champions-league/seasons/2013-2014/teams/zenit-st-petersburg); [AC Milan own historical roster](https://www.acmilan.com/en/roster-archive/men-first-team-archive/acmilan-2013-roster).
- [UEFA contemporary transfer report: Kostas Mitroglou to Fulham on 31 January 2014](https://www.uefa.com/news-media/news/0211-0ea1070fb115-2e2c4b7e6edb-1000--fulham-strengthen-with-mitroglou-and-holtby/).

## Historical complications, explicitly documented
- **UEFA selected only 18 players**, with 7 from Real Madrid. Official article says no dedicated starting XI. The footballarch Best XI below is an **independent project proposal** and deliberately differs on individual criteria.
- **UEFA vs TNT assists definitions**: UEFA records Wayne Rooney 8, Ángel Di María 6, Ronaldo 5. TNT's source lists fewer for Di María and Ronaldo. We use UEFA consistently; no mixing definitions in the displayed `assists` field.
- **UCL GK independent vs domestic:** Iker Casillas played UCL matches rather than all La Liga matches in 2013-14. UEFA records **44 saves, highest in the UCL**, so the previous B+ grade imported from league context was an error.
- **Kostas Mitroglou** was a valid Olympiacos main-stage UCL player during the autumn (Anderlecht hat-trick), before moving to Fulham on **2014-01-31**. Do not mistakenly remove him for January transfer or assign post-transfer club UCL minutes to Olympiacos.
- **Real Madrid midfielder Di María** was mainly an *advanced left central midfielder* after Ancelotti adopted 4-3-3, not a conventional CAM. Even in a representative 4-2-3-1 XI, Di María occupies **CM**; Rooney is chosen as **CAM** due to eight official assists.
- **Raúl García** played a hybrid forward and right/central midfield role in Atlético's 4-4-2; current `ST` is left provisional until match-by-match predominant-position audit and should not be asserted fully established.
- **A player being nominated and given a tier is not proof of actual 2013-14 UCL main-stage minutes**. Several backups (including injured/short-minute players) need candidate eligibility and role verification.
- **No direct bonus for Real Madrid title or Atlético final placing**: individual competition facts drive grades. The chosen XI may differ from the UEFA 18-man observer selection.

## Initial provisional tiers for 88 previously ungraded players (club by club)
| Club original | Position | Korean name | Original name | DOB | Proposed tier | Individual, provisional reason |
|---|---|---|---|---|---|---|
| Olympiacos FC | GK | 로베르토 | Roberto Jiménez | 1986-02-10 | A+ | Eight full 2013/14 UEFA main-stage games and several crucial saves against Benfica and Manchester United, including UEFA highlighted solo goalkeeping. |
| Manchester United FC | GK | 다비드 데헤아 | David de Gea | 1990-11-07 | A0 | Regular United goalkeeper in 2013/14 UCL knockout matches; prior 2011/12 and 2012/13 European experience, no official current top-two save ranking. |
| FC Zenit Saint Petersburg | GK | 유리 로디긴 | Yuri Lodygin | 1990-05-26 | A0 | UEFA individual saves tally 35, tied fifth on official 2013/14 leaderboard, evidence for UCL shot-stopping quality. |
| AC Milan | GK | 크리스티안 아비아티 | Christian Abbiati | 1977-07-08 | B+ | AC Milan European goalkeeper in group and last-16 games, behind higher-output shot-stoppers. |
| Galatasaray AŞ | GK | 페르난도 무슬레라 | Fernando Muslera | 1986-06-16 | B+ | Regular Galatasaray goalkeeper through UCL group and last 16; no UEFA individual saves top rank. |
| Manchester United FC | GK | 안데르스 린데고르 | Anders Lindegaard | 1984-04-13 | C+ | United secondary goalkeeper; no source-confirmed 2013/14 UCL main-stage appearance, tier does not claim playing minutes. |
| Olympiacos FC | GK | 발라즈 메제리 | Balázs Megyeri | 1990-03-31 | C+ | Olympiacos backup goalkeeper with no source-confirmed meaningful 2013/14 UCL workload. |
| Galatasaray AŞ | GK | 에라이 이쉬잔 | Eray İşcan | 1991-07-19 | C+ | Reserve goalkeeper; independent 2013/14 UEFA main-stage appearance not established. |
| AC Milan | GK | 마르코 아멜리아 | Marco Amelia | 1982-04-02 | C+ | Milan substitute goalkeeper, no large current UEFA goalkeeper record. |
| FC Zenit Saint Petersburg | GK | 뱌체슬라프 말라페예프 | Vyacheslav Malafeev | 1979-03-04 | C+ | Backup veteran goalkeeper; main-phase appearances not independently established. |
| Galatasaray AŞ | CB | 오렐리앙 셰주 | Aurélien Chedjou | 1985-06-20 | A0 | UEFA 2013/14 recorded 75 recovered balls (fifth in competition), standout central defensive workload. |
| Olympiacos FC | CB | 코스타스 마놀라스 | Kostas Manolas | 1991-06-14 | A0 | Regular centre-back and scorer of the Olympiacos winner against Benfica, with growing UCL physical/aerial contribution. |
| AC Milan | CB | 크리스티안 사파타 | Cristián Zapata | 1986-09-30 | B+ | Centre-back rotation and starting use for Milan, but no source-confirmed tournament-elite defensive numbers. |
| FC Zenit Saint Petersburg | CB | 루이스 네투 | Luís Neto | 1988-05-26 | B+ | Regular Zenit centre-back during 2013/14 European group and last 16. |
| Manchester United FC | CB | 네마냐 비디치 | Nemanja Vidić | 1981-10-21 | B+ | Experienced starter in United's UCL last-eight season; 2013/14 age and availability reduce standing relative to 2011/12 peak. |
| FC Zenit Saint Petersburg | CB | 니콜라스 롬바르츠 | Nicolas Lombaerts | 1985-03-20 | B+ | Experienced centre-back and aerial organiser through Zenit's European fixtures. |
| AC Milan | CB | 필리프 멕세스 | Philippe Mexès | 1982-03-30 | B+ | Experienced starter centre-back with a shorter UEFA knockout run. |
| Manchester United FC | CB | 리오 퍼디난드 | Rio Ferdinand | 1978-11-07 | B+ | Played centre-back for United in his final 2013/14 season; past European elite status is contextual, not a fresh S-level performance. |
| Galatasaray AŞ | CB | 세미흐 카야 | Semih Kaya | 1991-02-24 | B+ | Young first-choice centre-back, developing European-level role and defensive experience. |
| AC Milan | CB | 다니엘레 보네라 | Daniele Bonera | 1981-05-31 | B0 | Experienced defensive cover/occasional CB starter, individual UCL minutes limited. |
| Olympiacos FC | CB | 이반 마르카노 | Iván Marcano | 1987-06-23 | B0 | January loan arrival; defender in knockout phase but far less than full-season UEFA minutes. |
| Manchester United FC | CB | 조니 에번스 | Jonny Evans | 1988-01-02 | B0 | Defensive rotation and occasional first-choice centre-back; UEFA 2013/14 involvement less pivotal than Ferdinand/Vidić. |
| FC Zenit Saint Petersburg | CB | 토마시 후보찬 | Tomáš Hubočan | 1985-09-17 | B0 | Defensive rotation and cover in Zenit European fixtures. |
| Olympiacos FC | CB | 아브람 파파도풀로스 | Avraam Papadopoulos | 1984-12-03 | B- | Experienced defender but injury/competition restricted 2013/14 UCL participation, so avoid treating as first-choice tournament stalwart. |
| Galatasaray AŞ | CB | 괴칸 잔 | Gökhan Zan | 1981-09-07 | B- | Experienced centre-back bench/rotation depth, limited main-phase time. |
| Manchester United FC | LB | 파트리스 에브라 | Patrice Evra | 1981-05-15 | A- | Consistent United left-back and scored against Bayern in UCL quarter-final second leg; previous 2 seasons of UCL use. |
| FC Zenit Saint Petersburg | LB | 도메니코 크리시토 | Domenico Criscito | 1986-12-30 | B+ | Zenit first-team left-back with recovery and wide defensive role, limited top-tier UCL production. |
| Olympiacos FC | LB | 호세 홀레바스 | José Holebas | 1984-06-27 | B+ | First-choice Olympiacos left-back, aggressive overlaps and full European defensive duties. |
| AC Milan | LB | 우르비 에마누엘손 | Urby Emanuelson | 1986-06-16 | B+ | Left-back/left-midfield versatility, often deployed as Milan's left-back under transitional coaches. |
| AC Milan | LB | 마티아 데 실리오 | Mattia De Sciglio | 1992-10-20 | B+ | Young full-back rotated between LB/RB in 2013/14; user-visible primary LB remains provisional. |
| Galatasaray AŞ | LB | 하칸 발타 | Hakan Balta | 1983-03-23 | B0 | Left-sided defender and rotation starter, limited elite attacking production. |
| Galatasaray AŞ | LB | 알렉스 텔리스 | Alex Telles | 1992-12-15 | B0 | January arrival to the Galatasaray left flank, little group-stage UEFA time by transfer date. |
| Manchester United FC | LB | 알렉산더 뷔트너 | Alexander Büttner | 1989-02-11 | B0 | Left-back alternative who played in European knockouts when Evra unavailable, limited full-season usage. |
| Olympiacos FC | LB | 가에탕 봉 | Gaëtan Bong | 1988-04-25 | B0 | Left-back rotation after joining from France, less UEFA involvement than Holebas. |
| Manchester United FC | RB | 하파엘 | Rafael | 1990-07-09 | B+ | Starting-calibre right-back with injury interruptions and limited knockout playing time. |
| Galatasaray AŞ | RB | 에마뉘엘 에부에 | Emmanuel Eboué | 1983-06-04 | B+ | Experienced right-back involved in Galatasaray group and knockout play, with earlier Arsenal European history. |
| AC Milan | RB | 이냐치오 아바테 | Ignazio Abate | 1986-11-12 | B+ | Right-back regular in 2013/14, providing defensive wide cover and recovery runs. |
| FC Zenit Saint Petersburg | RB | 이고르 스몰니코프 | Igor Smolnikov | 1988-08-08 | B+ | First-choice right-back after summer 2013 arrival; forward runs but no direct UEFA elite metrics. |
| Olympiacos FC | RB | 레안드루 살리누 | Leandro Salino | 1985-04-22 | B+ | Regular right-back with 6 UCL appearances; supported by club UEFA squad and BDFutbol match data. |
| Manchester United FC | RB | 크리스 스몰링 | Chris Smalling | 1989-11-22 | B+ | Central/right defensive utility player; 2013/14 UCL nominal RB/CB time split pending independent match audit. |
| FC Zenit Saint Petersburg | RB | 알렉산드르 아뉴코프 | Aleksandr Anyukov | 1982-09-28 | B0 | Experienced right-back cover rather than league-elite UEFA personal season. |
| Galatasaray AŞ | RB | 사브리 사리오을루 | Sabri Sarıoğlu | 1984-07-26 | B0 | Right-back rotation and some UCL minutes, ranked below established European elite. |
| Manchester United FC | DM | 마이클 캐릭 | Michael Carrick | 1981-07-28 | A0 | Held United's midfield base, with previous 2011/12 and 2012/13 UCL involvement and defensive circulation. |
| FC Zenit Saint Petersburg | DM | 악셀 비첼 | Axel Witsel | 1989-01-12 | A0 | Leading central holding midfielder and ball-progressing lynchpin, with prior Benfica/Zenit European seasons. |
| Olympiacos FC | DM | 안드레아스 사마리스 | Andreas Samaris | 1989-06-13 | A- | Central ball-winning/passing contributor, regularly used in group matches and key Olympiacos tactical stability. |
| Galatasaray AŞ | DM | 펠리페 멜루 | Felipe Melo | 1983-06-26 | A- | Ball-winning midfielder with extensive 2013/14 central defensive-duel duties. |
| AC Milan | DM | 나이젤 더 용 | Nigel de Jong | 1984-11-30 | B+ | Central midfield ball-winner, personally effective at screening without a high club UEFA tournament ceiling. |
| Olympiacos FC | DM | 델빈 은딩가 | Delvin N'Dinga | 1988-03-14 | B+ | Midfield screening rotation in European fixtures, with defensive presence rather than creative output. |
| Olympiacos FC | CM | 야니스 마니아티스 | Giannis Maniatis | 1986-10-12 | A- | Consistent defensive/central midfield presence, leadership and coverage in Olympiacos last-16 season. |
| Galatasaray AŞ | CM | 셀추크 이난 | Selçuk İnan | 1985-02-10 | A- | Midfield distributor and set-play organiser during the 2013/14 UEFA group and knockout campaign. |
| AC Milan | CM | 리카르도 몬톨리보 | Riccardo Montolivo | 1985-01-18 | B+ | Central midfield possession and progression under Milan's changing 2013/14 tactics. |
| Manchester United FC | CM | 라이언 긱스 | Ryan Giggs | 1973-11-29 | B+ | Veteran United midfield controller and match participant but shorter 2013/14 UCL minutes. |
| FC Zenit Saint Petersburg | CM | 빅토르 파이줄린 | Viktor Fayzulin | 1986-04-22 | B+ | Regular box-to-box central midfielder with earlier Zenit UEFA appearances. |
| FC Zenit Saint Petersburg | CM | 올레크 샤토프 | Oleg Shatov | 1990-07-29 | B+ | Attacking central midfield contributor after summer signing, uneven European starts. |
| AC Milan | CM | 설리 문타리 | Sulley Muntari | 1984-08-27 | B+ | Box-to-box midfield role and ball-winning, modest UEFA direct impact. |
| Galatasaray AŞ | CM | 예크타 쿠르툴루시 | Yekta Kurtuluş | 1985-12-11 | B- | Secondary central midfield option; fewer decisive UEFA minutes than core midfielders. |
| Galatasaray AŞ | CM | 하밋 알튼톱 | Hamit Altıntop | 1982-12-08 | B- | Injury-hit midfield campaign with limited UCL playing time. |
| Manchester United FC | CM | 마루안 펠라이니 | Marouane Fellaini | 1987-11-22 | B- | First United season after transfer offered inconsistent midfield impact and very limited positive UCL evidence. |
| Galatasaray AŞ | CAM | 베슬레이 스네이더 | Wesley Sneijder | 1984-06-09 | A- | Creative attacking midfielder and goal-scorer in decisive Juventus group match, prior 2011/12 Inter and 2012/13 Galatasaray European history. |
| AC Milan | CAM | 카카 | Kaká | 1982-04-22 | A- | Returning Milan playmaker and senior creator in the 2013/14 UEFA group stage, with elite earlier career now weighted less. |
| Olympiacos FC | CAM | 알레한드로 도밍게스 | Alejandro Domínguez | 1981-06-10 | A- | Creative No.10 for Olympiacos, involved in key group attacks and transition passes. |
| FC Zenit Saint Petersburg | CAM | 로만 시로코프 | Roman Shirokov | 1981-07-06 | A- | Creative midfield role during UCL group stage before late-season club change, sustained European involvement from 2011/12. |
| Manchester United FC | CAM | 카가와 신지 | Shinji Kagawa | 1989-03-17 | B+ | Creative attacking midfielder in United European rotation; limited decisive output. |
| FC Zenit Saint Petersburg | LW | 다니 | Danny | 1983-08-07 | A- | Club captain-like advanced winger, key Zenit link play with earlier 2011/12 UCL contributions. |
| Manchester United FC | LW | 대니 웰벡 | Danny Welbeck | 1990-11-26 | B+ | Wide forward used to stretch play in Manchester United's 2013/14 UCL matches, not comparable to elite scorers. |
| Olympiacos FC | LW | 다비드 푸스테르 | David Fuster | 1982-02-03 | B+ | Midfield forward press and link-up use in Olympiacos match plans, below UEFA tournament elite. |
| AC Milan | LW | 호비뉴 | Robinho | 1984-01-25 | B0 | Attacking rotation rather than consistently decisive Milan Champions League winger. |
| FC Zenit Saint Petersburg | LW | 안드레이 아르샤빈 | Andrey Arshavin | 1981-05-29 | B0 | Veteran left-side attacker returning to Zenit, no strong contemporary UCL individual output. |
| Manchester United FC | LW | 애슐리 영 | Ashley Young | 1985-07-09 | B- | Backup wide attacker, significantly smaller UCL contribution than regular flank players. |
| Galatasaray AŞ | LW | 브루마 | Bruma | 1994-10-24 | B- | Promising wide player but injury and age limited UCL 2013/14 impact. |
| AC Milan | LW | 스테판 엘 샤라위 | Stephan El Shaarawy | 1992-10-27 | B- | Injuries severely limited Milan 2013/14 Champions League minutes despite domestic reputation. |
| FC Zenit Saint Petersburg | RW | 헐크 | Hulk | 1986-07-25 | A0 | Four UEFA 2013/14 UCL goals and heavy attacking responsibility; prior 2011/12 Porto and 2012/13 Zenit experience. |
| Olympiacos FC | RW | 조엘 캠벨 | Joel Campbell | 1992-06-26 | A0 | Important right-wing outlet; impressive individual goal and performance against Manchester United in the round of 16. |
| Manchester United FC | RW | 안토니오 발렌시아 | Antonio Valencia | 1985-08-04 | B+ | Frequently used right-wing transition outlet and senior UCL player, below competition-leading creators. |
| Olympiacos FC | RW | 블라디미르 바이스 | Vladimír Weiss | 1989-11-30 | B+ | Wide attacking substitute/rotation and occasional starter, signed in summer 2013; independent total minutes pending. |
| AC Milan | RW | 발테르 비르사 | Valter Birsa | 1986-08-07 | B- | Rotational right attacking midfield option; UCL impact smaller than other Milan front players. |
| Manchester United FC | RW | 나니 | Nani | 1986-11-17 | B- | Wing rotation limited by fitness and selection, no 2013/14 individual UEFA top statistical recognition. |
| Manchester United FC | ST | 로빈 판 페르시 | Robin van Persie | 1983-08-06 | A0 | Four UCL goals including a last-16 second-leg hat-trick against Olympiacos. Strong direct impact, but season disrupted by fitness. |
| Olympiacos FC | ST | 코스타스 미트로글루 | Kostas Mitroglou | 1988-03-12 | A- | UEFA-confirmed hat-trick against Anderlecht; subsequently injured and transferred to Fulham January 2014 before UCL knockouts. |
| Galatasaray AŞ | ST | 디디에 드로그바 | Didier Drogba | 1978-03-11 | A- | Important striker in Galatasaray squad with 2011/12 Chelsea peak included, but 2013/14 direct knockout scoring below historical maximum. |
| FC Zenit Saint Petersburg | ST | 알렉산드르 케르자코프 | Aleksandr Kerzhakov | 1982-11-27 | B+ | Target-forward/striker option during UCL campaign with previous 2011/12 Zenit European involvement. |
| Galatasaray AŞ | ST | 부라크 이을마즈 | Burak Yılmaz | 1985-07-15 | B+ | Follows UCL eight-goal 2012/13 season but much more modest 2013/14 attacking production; direct prior year counts. |
| Olympiacos FC | ST | 하비에르 사비올라 | Javier Saviola | 1981-12-11 | B+ | Veteran striker joining Olympiacos in 2013/14, some UCL goals with shorter individual playing-time sample. |
| AC Milan | ST | 마리오 발로텔리 | Mario Balotelli | 1990-08-12 | B+ | First Milan UCL campaign with intermittent goal threat and set-play duties, behind top-tier European forwards. |
| Manchester United FC | ST | 하비에르 에르난데스 | Javier Hernández | 1988-06-01 | B+ | Reserve centre-forward, specific European minutes/finishing to be rechecked before higher grade. |
| FC Zenit Saint Petersburg | ST | 살로몬 론돈 | Salomón Rondón | 1989-09-16 | B0 | Winter arrival and short Zenit 2013/14 knockout sample, not a full-season UCL starting striker. |
| Galatasaray AŞ | ST | 우무트 불루트 | Umut Bulut | 1983-03-15 | B0 | Striker rotation behind regular scoring options, partial European minutes. |
| AC Milan | ST | 잠파올로 파치니 | Giampaolo Pazzini | 1984-08-02 | B- | Injury-hit Milan striking option with a small tournament sample. |

## 19 revised previously entered tier values
| Pos | Korean | Original | Original team | Before | After | UEFA source-guided personal rationale |
|---|---|---|---|---|---|---|
| GK | 이케르 카시야스 | Iker Casillas | Real Madrid CF | B+ | A+ | UEFA official 2013-14 leaderboard credits 44 saves (most in the competition), despite domestic job-sharing. Prior 2011-12 and 2012-13 UCL contributions give strong continuity. |
| GK | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | A+ | A0 | Reliable PSG European goalkeeper with significant 2012-13/2013-14 role; imported A+ league rating was not matched by UEFA technical selection or standout saves statistics. |
| CB | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | A+ | S | UEFA technical team selection, 96 recovered balls (second), three verified UCL goals including critical final equalizer, plus repeated elite 2011-12 and 2012-13 UCL defensive performances. |
| RB | 다니 카르바할 | Dani Carvajal | Real Madrid CF | A0 | A+ | UEFA technical observers chose Carvajal among five standout 2013-14 defenders; first-choice right-back with high individual output across Real's 2013-14 campaign. First elite UCL year tempers ranking confidence. |
| RB | 다니 아우베스 | Dani Alves | FC Barcelona | A- | A0 | Barcelona's right-back still influential in 2013-14 creative play, with technical recognition in the preceding two UEFA campaigns; current A- imported tier underrates sustained competition pedigree. |
| DM | 사비 알론소 | Xabi Alonso | Real Madrid CF | A0 | A+ | UEFA technical observers chose him among six midfielders for screening and distribution, with 2011-12 and 2012-13 high-level UCL continuity. Suspension prevented his final participation, no trophy bonus. |
| CM | 야야 투레 | Yaya Touré | Manchester City FC | S | A0 | Manchester City's outstanding 2013-14 Premier League production does not itself prove UCL S-level personal impact: City exited the Champions League at the round of 16 and UEFA did not select Touré among 18 top players. |
| CAM | 웨인 루니 | Wayne Rooney | Manchester United FC | A0 | A+ | UEFA official 2013-14 leaderboard records eight assists, competition best. No team-ranking bonus; his chance creation and prior UCL offensive history outweigh A0 import. |
| CAM | 다비드 실바 | David Silva | Manchester City FC | A+ | A0 | Creative attacking midfielder with useful UCL output for City, but A+ previously inherited from domestic league recognition is not sufficiently corroborated by 2013-14 direct UEFA individual honors. |
| CM | 이스코 | Isco | Real Madrid CF | B+ | A- | Three verified UCL goals in 12 appearances and 649 minutes from TNT, partly substitute creative midfielder in Real's 2013-14 campaign; good current-season contribution, shorter UCL peer longevity. |
| ST | 라울 가르시아 | Raúl García | Club Atlético de Madrid | B+ | A0 | Four UCL goals, 12 appearances and 854 minutes in 2013-14, with advanced midfield/second-striker work. Old B+ misrepresents substantive direct individual UEFA scoring; primary role ST retained pending gamewise audit. |
| ST | 카림 벤제마 | Karim Benzema | Real Madrid CF | A0 | A+ | Five Champions League goals and five official UEFA assists in 2013-14, complemented by earlier 2011-12 and 2012-13 European scoring contribution. |
| ST | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | A0 | A+ | Six 2013-14 UEFA goals in six matches (429 minutes by TNT) reflect unusually high per-minute striker finishing despite injury and team-level first knockout exit. |
| ST | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | A+ | S | Ten UCL goals in eight appearances in 2013-14, second in official competition, plus goal impact in 2011-12 and 2012-13. Premier domestic reputation is not counted as direct evidence. |
| ST | 리오넬 메시 | Lionel Messi | FC Barcelona | A+ | S | Eight 2013-14 UCL goals in seven appearances, after fourteen in 2011-12 and eight in 2012-13; exceptionally sustained three-year individual European goalscoring despite 2013-14 UEFA technical squad omission. |
| LW | 네이마르 | Neymar | FC Barcelona | A- | A0 | Four UCL goals and three TNT assists in ten 2013-14 appearances; first Barça Champions League season means rank remains below 3-year established competition elites. |
| CB | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | B+ | A- | Three UCL goals in eight 2013-14 appearances despite playing at central defence, valuable direct current-year impact; shorter European career prevents A+. |
| ST | 마리오 만주키치 | Mario Mandžukić | FC Bayern München | A+ | A0 | Three 2013-14 UCL goals in ten matches after three-goal 2012-13 run, useful pressing/hold-up centre-forward role without current season top-tier scorer productivity. |
| LW | 아르다 투란 | Arda Turan | Club Atlético de Madrid | A- | A0 | Four goals in nine UCL matches and key left-sided creation/running, notably in knockout games. Previous tier A- understated 2013-14 individual offensive impact. |

## Position notes / current DRAFT Best XI 4-2-3-1
- The original stored `meta.formation` was `4-3-3`, even though `meta.bestXiReview.formation` said `4-2-3-1`. Both now use **4-2-3-1**.
- With only one representative CM slot, **Di María** is selected over Luka Modrić due to direct six official assists, three goals and exceptional 2013/14 individual performances. Modrić stays an S-ranked midfield candidate outside the 11.
- **Dani Carvajal** replaces Juanfran as RB: UEFA selected Carvajal as one of 2013/14's five standout defenders; Juanfran remains close in rank.
- **Wayne Rooney** enters CAM at the expense of the second CM slot (Modrić), supported by competition-leading eight official UEFA assists; he is not falsely awarded for the team's final standing.

| Position | Korean | Original name | Club original | Date of birth | Tier |
|---|---|---|---|---|---|
| GK | 티보 쿠르투아 | Thibaut Courtois | Club Atlético de Madrid | 1992-05-11 | S |
| CB | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | S |
| CB | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 | A+ |
| LB | 필리페 루이스 | Filipe Luís | Club Atlético de Madrid | 1985-08-09 | A+ |
| RB | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | A+ |
| DM | 가비 | Gabi | Club Atlético de Madrid | 1983-07-10 | S |
| CM | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 | S |
| CAM | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | A+ |
| LW | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | S |
| RW | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | A+ |
| ST | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 | S |

## World Class (S / A+) all players
| Tier | Position | Rank | Korean | Original | Original club | DOB |
|---|---|---:|---|---|---|---|
| S | GK | 1 | 티보 쿠르투아 | Thibaut Courtois | Club Atlético de Madrid | 1992-05-11 |
| S | GK | 2 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 |
| S | CB | 1 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 |
| S | DM | 1 | 가비 | Gabi | Club Atlético de Madrid | 1983-07-10 |
| S | DM | 2 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 |
| S | CM | 1 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 |
| S | CM | 2 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 |
| S | LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 |
| S | ST | 1 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 |
| S | ST | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 |
| A+ | GK | 3 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 |
| A+ | GK | 4 | 로베르토 | Roberto Jiménez | Olympiacos FC | 1986-02-10 |
| A+ | GK | 5 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 |
| A+ | GK | 6 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 |
| A+ | CB | 2 | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 |
| A+ | CB | 3 | 페페 | Pepe | Real Madrid CF | 1983-02-26 |
| A+ | CB | 4 | 미란다 | Miranda | Club Atlético de Madrid | 1984-09-07 |
| A+ | CB | 5 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 |
| A+ | CB | 6 | 게리 케이힐 | Gary Cahill | Chelsea FC | 1985-12-19 |
| A+ | CB | 7 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 |
| A+ | CB | 8 | 단테 | Dante | FC Bayern München | 1983-10-18 |
| A+ | CB | 9 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 |
| A+ | CB | 10 | 뱅상 콤파니 | Vincent Kompany | Manchester City FC | 1986-04-10 |
| A+ | LB | 1 | 필리페 루이스 | Filipe Luís | Club Atlético de Madrid | 1985-08-09 |
| A+ | LB | 2 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 |
| A+ | LB | 3 | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 |
| A+ | RB | 1 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 |
| A+ | RB | 2 | 후안프란 | Juanfran | Club Atlético de Madrid | 1985-01-09 |
| A+ | RB | 3 | 파블로 사발레타 | Pablo Zabaleta | Manchester City FC | 1985-01-16 |
| A+ | DM | 3 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 |
| A+ | DM | 4 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 |
| A+ | DM | 5 | 티아구 모타 | Thiago Motta | Paris Saint-Germain FC | 1982-08-28 |
| A+ | CM | 3 | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 |
| A+ | CM | 4 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 |
| A+ | CM | 5 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 |
| A+ | CM | 6 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 |
| A+ | CM | 7 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 |
| A+ | CM | 8 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 |
| A+ | CM | 9 | 애런 램지 | Aaron Ramsey | Arsenal FC | 1990-12-26 |
| A+ | CAM | 1 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 |
| A+ | LW | 2 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 |
| A+ | LW | 3 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 |
| A+ | LW | 4 | 에덴 아자르 | Eden Hazard | Chelsea FC | 1991-01-07 |
| A+ | RW | 1 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 |
| A+ | RW | 2 | 가레스 베일 | Gareth Bale | Real Madrid CF | 1989-07-16 |
| A+ | RW | 3 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 |
| A+ | RW | 4 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 |
| A+ | RW | 5 | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | 1987-02-14 |
| A+ | ST | 3 | 디에고 코스타 | Diego Costa | Club Atlético de Madrid | 1988-10-07 |
| A+ | ST | 4 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 |
| A+ | ST | 5 | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | 1988-06-02 |
| A+ | ST | 6 | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 |

## Competition Top Class (S / A+ / A0 / A-) all players
| Tier | Position | Rank | Korean | Original | Original club | DOB |
|---|---|---:|---|---|---|---|
| S | GK | 1 | 티보 쿠르투아 | Thibaut Courtois | Club Atlético de Madrid | 1992-05-11 |
| S | GK | 2 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 |
| S | CB | 1 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 |
| S | DM | 1 | 가비 | Gabi | Club Atlético de Madrid | 1983-07-10 |
| S | DM | 2 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 |
| S | CM | 1 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 |
| S | CM | 2 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 |
| S | LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 |
| S | ST | 1 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 |
| S | ST | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 |
| A+ | GK | 3 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 |
| A+ | GK | 4 | 로베르토 | Roberto Jiménez | Olympiacos FC | 1986-02-10 |
| A+ | GK | 5 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 |
| A+ | GK | 6 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 |
| A+ | CB | 2 | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 |
| A+ | CB | 3 | 페페 | Pepe | Real Madrid CF | 1983-02-26 |
| A+ | CB | 4 | 미란다 | Miranda | Club Atlético de Madrid | 1984-09-07 |
| A+ | CB | 5 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 |
| A+ | CB | 6 | 게리 케이힐 | Gary Cahill | Chelsea FC | 1985-12-19 |
| A+ | CB | 7 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 |
| A+ | CB | 8 | 단테 | Dante | FC Bayern München | 1983-10-18 |
| A+ | CB | 9 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 |
| A+ | CB | 10 | 뱅상 콤파니 | Vincent Kompany | Manchester City FC | 1986-04-10 |
| A+ | LB | 1 | 필리페 루이스 | Filipe Luís | Club Atlético de Madrid | 1985-08-09 |
| A+ | LB | 2 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 |
| A+ | LB | 3 | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 |
| A+ | RB | 1 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 |
| A+ | RB | 2 | 후안프란 | Juanfran | Club Atlético de Madrid | 1985-01-09 |
| A+ | RB | 3 | 파블로 사발레타 | Pablo Zabaleta | Manchester City FC | 1985-01-16 |
| A+ | DM | 3 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 |
| A+ | DM | 4 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 |
| A+ | DM | 5 | 티아구 모타 | Thiago Motta | Paris Saint-Germain FC | 1982-08-28 |
| A+ | CM | 3 | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 |
| A+ | CM | 4 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 |
| A+ | CM | 5 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 |
| A+ | CM | 6 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 |
| A+ | CM | 7 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 |
| A+ | CM | 8 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 |
| A+ | CM | 9 | 애런 램지 | Aaron Ramsey | Arsenal FC | 1990-12-26 |
| A+ | CAM | 1 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 |
| A+ | LW | 2 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 |
| A+ | LW | 3 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 |
| A+ | LW | 4 | 에덴 아자르 | Eden Hazard | Chelsea FC | 1991-01-07 |
| A+ | RW | 1 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 |
| A+ | RW | 2 | 가레스 베일 | Gareth Bale | Real Madrid CF | 1989-07-16 |
| A+ | RW | 3 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 |
| A+ | RW | 4 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 |
| A+ | RW | 5 | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | 1987-02-14 |
| A+ | ST | 3 | 디에고 코스타 | Diego Costa | Club Atlético de Madrid | 1988-10-07 |
| A+ | ST | 4 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 |
| A+ | ST | 5 | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | 1988-06-02 |
| A+ | ST | 6 | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 |
| A0 | GK | 7 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 |
| A0 | GK | 8 | 다비드 데헤아 | David de Gea | Manchester United FC | 1990-11-07 |
| A0 | GK | 9 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 |
| A0 | GK | 10 | 유리 로디긴 | Yuri Lodygin | FC Zenit Saint Petersburg | 1990-05-26 |
| A0 | CB | 11 | 오렐리앙 셰주 | Aurélien Chedjou | Galatasaray AŞ | 1985-06-20 |
| A0 | CB | 12 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 |
| A0 | CB | 13 | 소크라티스 파파스타토풀로스 | Sokratis Papastathopoulos | Borussia Dortmund | 1988-06-09 |
| A0 | CB | 14 | 코스타스 마놀라스 | Kostas Manolas | Olympiacos FC | 1991-06-14 |
| A0 | RB | 4 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 |
| A0 | DM | 6 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 |
| A0 | DM | 7 | 악셀 비첼 | Axel Witsel | FC Zenit Saint Petersburg | 1989-01-12 |
| A0 | CM | 10 | 야야 투레 | Yaya Touré | Manchester City FC | 1983-05-13 |
| A0 | CAM | 2 | 다비드 실바 | David Silva | Manchester City FC | 1986-01-08 |
| A0 | CAM | 3 | 마리오 괴체 | Mario Götze | FC Bayern München | 1992-06-03 |
| A0 | LW | 5 | 네이마르 | Neymar | FC Barcelona | 1992-02-05 |
| A0 | LW | 6 | 아르다 투란 | Arda Turan | Club Atlético de Madrid | 1987-01-30 |
| A0 | RW | 6 | 헐크 | Hulk | FC Zenit Saint Petersburg | 1986-07-25 |
| A0 | RW | 7 | 조엘 캠벨 | Joel Campbell | Olympiacos FC | 1992-06-26 |
| A0 | RW | 8 | 피에르에메리크 오바메양 | Pierre-Emerick Aubameyang | Borussia Dortmund | 1989-06-18 |
| A0 | ST | 7 | 로빈 판 페르시 | Robin van Persie | Manchester United FC | 1983-08-06 |
| A0 | ST | 8 | 마리오 만주키치 | Mario Mandžukić | FC Bayern München | 1986-05-21 |
| A0 | ST | 9 | 라울 가르시아 | Raúl García | Club Atlético de Madrid | 1986-07-11 |
| A- | GK | 11 | 베른트 레노 | Bernd Leno | Bayer 04 Leverkusen | 1992-03-04 |
| A- | GK | 12 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 |
| A- | GK | 13 | 조 하트 | Joe Hart | Manchester City FC | 1987-04-19 |
| A- | GK | 14 | 디에고 로페스 | Diego López | Real Madrid CF | 1981-11-03 |
| A- | CB | 15 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 |
| A- | CB | 16 | 조엘 마티프 | Joël Matip | FC Schalke 04 | 1991-08-08 |
| A- | CB | 17 | 알렉스 | Alex | Paris Saint-Germain FC | 1982-06-17 |
| A- | CB | 18 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 |
| A- | CB | 19 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 |
| A- | CB | 20 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 |
| A- | CB | 21 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 |
| A- | CB | 22 | 페어 메르테자커 | Per Mertesacker | Arsenal FC | 1984-09-29 |
| A- | LB | 4 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 |
| A- | LB | 5 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 |
| A- | LB | 6 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 |
| A- | LB | 7 | 막스웰 | Maxwell | Paris Saint-Germain FC | 1981-08-27 |
| A- | RB | 5 | 브라니슬라프 이바노비치 | Branislav Ivanović | Chelsea FC | 1984-02-22 |
| A- | RB | 6 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 |
| A- | RB | 7 | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 |
| A- | DM | 8 | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 |
| A- | DM | 9 | 미켈 아르테타 | Mikel Arteta | Arsenal FC | 1982-03-26 |
| A- | DM | 10 | 안드레아스 사마리스 | Andreas Samaris | Olympiacos FC | 1989-06-13 |
| A- | DM | 11 | 펠리페 멜루 | Felipe Melo | Galatasaray AŞ | 1983-06-26 |
| A- | CM | 11 | 이스코 | Isco | Real Madrid CF | 1992-04-21 |
| A- | CM | 12 | 누리 샤힌 | Nuri Şahin | Borussia Dortmund | 1988-09-05 |
| A- | CM | 13 | 라르스 벤더 | Lars Bender | Bayer 04 Leverkusen | 1989-04-27 |
| A- | CM | 14 | 세스크 파브레가스 | Cesc Fàbregas | FC Barcelona | 1987-05-04 |
| A- | CM | 15 | 야니스 마니아티스 | Giannis Maniatis | Olympiacos FC | 1986-10-12 |
| A- | CM | 16 | 셀추크 이난 | Selçuk İnan | Galatasaray AŞ | 1985-02-10 |
| A- | CAM | 4 | 베슬레이 스네이더 | Wesley Sneijder | Galatasaray AŞ | 1984-06-09 |
| A- | CAM | 5 | 오스카르 | Oscar | Chelsea FC | 1991-09-09 |
| A- | CAM | 6 | 카카 | Kaká | AC Milan | 1982-04-22 |
| A- | CAM | 7 | 헨리크 미키타리안 | Henrikh Mkhitaryan | Borussia Dortmund | 1989-01-21 |
| A- | CAM | 8 | 케빈프린스 보아텡 | Kevin-Prince Boateng | FC Schalke 04 | 1987-03-06 |
| A- | CAM | 9 | 메수트 외질 | Mesut Özil | Arsenal FC | 1988-10-15 |
| A- | CAM | 10 | 알레한드로 도밍게스 | Alejandro Domínguez | Olympiacos FC | 1981-06-10 |
| A- | CAM | 11 | 로만 시로코프 | Roman Shirokov | FC Zenit Saint Petersburg | 1981-07-06 |
| A- | LW | 7 | 다니 | Danny | FC Zenit Saint Petersburg | 1983-08-07 |
| A- | LW | 8 | 사미르 나스리 | Samir Nasri | Manchester City FC | 1987-06-26 |
| A- | LW | 9 | 손흥민 | Son Heung-min | Bayer 04 Leverkusen | 1992-07-08 |
| A- | LW | 10 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 |
| A- | LW | 11 | 에세키엘 라베시 | Ezequiel Lavezzi | Paris Saint-Germain FC | 1985-05-03 |
| A- | LW | 12 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 |
| A- | RW | 9 | 알렉시스 산체스 | Alexis Sánchez | FC Barcelona | 1988-12-19 |
| A- | RW | 10 | 헤페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 |
| A- | RW | 11 | 시드니 샘 | Sidney Sam | Bayer 04 Leverkusen | 1988-01-31 |
| A- | RW | 12 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 |
| A- | ST | 10 | 코스타스 미트로글루 | Kostas Mitroglou | Olympiacos FC | 1988-03-12 |
| A- | ST | 11 | 다비드 비야 | David Villa | Club Atlético de Madrid | 1981-12-03 |
| A- | ST | 12 | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 |
| A- | ST | 13 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 |
| A- | ST | 14 | 올리비에 지루 | Olivier Giroud | Arsenal FC | 1986-09-30 |
| A- | ST | 15 | 에딘 제코 | Edin Džeko | Manchester City FC | 1986-03-17 |
| A- | ST | 16 | 디디에 드로그바 | Didier Drogba | Galatasaray AŞ | 1978-03-11 |

## COMPLETE BROWSER TABLE: all 297 candidates in position rank order
> `★`: named in **2013-14 UEFA Technical Study Group's 18-player squad**. `†`: individually verified 2013-14 UCL goals and appearances from UEFA/TNT. No marker means unverified, **not poor/no participation**. `—` means data missing (`null`), **not zero**. Every tier is preliminary and can change upon complete 2011-12–2013-14 audit.

| Pos | Rank | Korean name | Original name | Original club | DOB | Tier | Checked UCL goals | Checked UCL apps | Checked UCL minutes | Tier evidence level |
|---|---:|---|---|---|---|---|---:|---:|---:|---|
| GK | 1 | 티보 쿠르투아 | Thibaut Courtois | Club Atlético de Madrid | 1992-05-11 | S★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| GK | 2 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | S★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| GK | 3 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | A+ | — | 13 | — | source_guided_individual_tier_review |
| GK | 4 | 로베르토 | Roberto Jiménez | Olympiacos FC | 1986-02-10 | A+ | — | 8 | 720 | new_provisional_tier_only |
| GK | 5 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 6 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 7 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 | A0 | — | — | — | source_guided_individual_tier_review |
| GK | 8 | 다비드 데헤아 | David de Gea | Manchester United FC | 1990-11-07 | A0 | — | — | — | new_provisional_tier_only |
| GK | 9 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 | A0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 10 | 유리 로디긴 | Yuri Lodygin | FC Zenit Saint Petersburg | 1990-05-26 | A0 | — | — | — | new_provisional_tier_only |
| GK | 11 | 베른트 레노 | Bernd Leno | Bayer 04 Leverkusen | 1992-03-04 | A- | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| GK | 12 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 13 | 조 하트 | Joe Hart | Manchester City FC | 1987-04-19 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 14 | 디에고 로페스 | Diego López | Real Madrid CF | 1981-11-03 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 15 | 랄프 페어만 | Ralf Fährmann | FC Schalke 04 | 1988-09-27 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 16 | 크리스티안 아비아티 | Christian Abbiati | AC Milan | 1977-07-08 | B+ | — | — | — | new_provisional_tier_only |
| GK | 17 | 페르난도 무슬레라 | Fernando Muslera | Galatasaray AŞ | 1986-06-16 | B+ | — | — | — | new_provisional_tier_only |
| GK | 18 | 호세 마누엘 핀토 | José Manuel Pinto | FC Barcelona | 1975-11-15 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 19 | 티모 힐데브란트 | Timo Hildebrand | FC Schalke 04 | 1979-04-05 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 20 | 코스텔 판틸리몬 | Costel Pantilimon | Manchester City FC | 1987-02-01 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 21 | 우카시 파비안스키 | Łukasz Fabiański | Arsenal FC | 1985-04-18 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 22 | 미첼 랑게라크 | Mitchell Langerak | Borussia Dortmund | 1988-08-22 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 23 | 마크 슈워처 | Mark Schwarzer | Chelsea FC | 1972-10-06 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 24 | 톰 슈타르케 | Tom Starke | FC Bayern München | 1981-03-18 | C+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 25 | 안데르스 린데고르 | Anders Lindegaard | Manchester United FC | 1984-04-13 | C+ | — | — | — | new_provisional_tier_only |
| GK | 26 | 발라즈 메제리 | Balázs Megyeri | Olympiacos FC | 1990-03-31 | C+ | — | — | — | new_provisional_tier_only |
| GK | 27 | 에라이 이쉬잔 | Eray İşcan | Galatasaray AŞ | 1991-07-19 | C+ | — | — | — | new_provisional_tier_only |
| GK | 28 | 마르코 아멜리아 | Marco Amelia | AC Milan | 1982-04-02 | C+ | — | — | — | new_provisional_tier_only |
| GK | 29 | 뱌체슬라프 말라페예프 | Vyacheslav Malafeev | FC Zenit Saint Petersburg | 1979-03-04 | C+ | — | — | — | new_provisional_tier_only |
| GK | 30 | 다니엘 아란수비아 | Daniel Aranzubia | Club Atlético de Madrid | 1979-09-18 | C0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| GK | 31 | 니콜라 두셰 | Nicolas Douchez | Paris Saint-Germain FC | 1980-04-22 | C- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 1 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | S★† | 3 | 11 | 921 | source_guided_individual_tier_review |
| CB | 2 | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 | A+★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| CB | 3 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | A+★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| CB | 4 | 미란다 | Miranda | Club Atlético de Madrid | 1984-09-07 | A+ | — | 13 | — | individual_2013_14_fact_checked_else_tier_imported |
| CB | 5 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 6 | 게리 케이힐 | Gary Cahill | Chelsea FC | 1985-12-19 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 7 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 8 | 단테 | Dante | FC Bayern München | 1983-10-18 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 9 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 10 | 뱅상 콤파니 | Vincent Kompany | Manchester City FC | 1986-04-10 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 11 | 오렐리앙 셰주 | Aurélien Chedjou | Galatasaray AŞ | 1985-06-20 | A0 | — | — | — | new_provisional_tier_only |
| CB | 12 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | A0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 13 | 소크라티스 파파스타토풀로스 | Sokratis Papastathopoulos | Borussia Dortmund | 1988-06-09 | A0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 14 | 코스타스 마놀라스 | Kostas Manolas | Olympiacos FC | 1991-06-14 | A0 | — | — | — | new_provisional_tier_only |
| CB | 15 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | A-† | 3 | 8 | 531 | source_guided_individual_tier_review |
| CB | 16 | 조엘 마티프 | Joël Matip | FC Schalke 04 | 1991-08-08 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 17 | 알렉스 | Alex | Paris Saint-Germain FC | 1982-06-17 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 18 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 19 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 20 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 21 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 22 | 페어 메르테자커 | Per Mertesacker | Arsenal FC | 1984-09-29 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 23 | 외메르 토프라크 | Ömer Toprak | Bayer 04 Leverkusen | 1989-07-21 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 24 | 에미르 스파히치 | Emir Spahić | Bayer 04 Leverkusen | 1980-08-18 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 25 | 마르틴 데미첼리스 | Martín Demichelis | Manchester City FC | 1980-12-20 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 26 | 마르크 바르트라 | Marc Bartra | FC Barcelona | 1991-01-15 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 27 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 28 | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | 1988-12-10 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 29 | 다비드 루이스 | David Luiz | Chelsea FC | 1987-04-22 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 30 | 크리스티안 사파타 | Cristián Zapata | AC Milan | 1986-09-30 | B+ | — | — | — | new_provisional_tier_only |
| CB | 31 | 루이스 네투 | Luís Neto | FC Zenit Saint Petersburg | 1988-05-26 | B+ | — | — | — | new_provisional_tier_only |
| CB | 32 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | 1981-10-21 | B+ | — | — | — | new_provisional_tier_only |
| CB | 33 | 니콜라스 롬바르츠 | Nicolas Lombaerts | FC Zenit Saint Petersburg | 1985-03-20 | B+ | — | — | — | new_provisional_tier_only |
| CB | 34 | 필리프 멕세스 | Philippe Mexès | AC Milan | 1982-03-30 | B+ | — | — | — | new_provisional_tier_only |
| CB | 35 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | B+ | — | — | — | new_provisional_tier_only |
| CB | 36 | 세미흐 카야 | Semih Kaya | Galatasaray AŞ | 1991-02-24 | B+ | — | — | — | new_provisional_tier_only |
| CB | 37 | 펠리페 산타나 | Felipe Santana | FC Schalke 04 | 1986-03-17 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 38 | 필리프 볼샤이트 | Philipp Wollscheid | Bayer 04 Leverkusen | 1989-03-06 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 39 | 다니엘 판바이턴 | Daniel van Buyten | FC Bayern München | 1978-02-07 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 40 | 토비 알데르베이럴트 | Toby Alderweireld | Club Atlético de Madrid | 1989-03-02 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 41 | 다니엘레 보네라 | Daniele Bonera | AC Milan | 1981-05-31 | B0 | — | — | — | new_provisional_tier_only |
| CB | 42 | 이반 마르카노 | Iván Marcano | Olympiacos FC | 1987-06-23 | B0 | — | — | — | new_provisional_tier_only |
| CB | 43 | 조니 에번스 | Jonny Evans | Manchester United FC | 1988-01-02 | B0 | — | — | — | new_provisional_tier_only |
| CB | 44 | 토마시 후보찬 | Tomáš Hubočan | FC Zenit Saint Petersburg | 1985-09-17 | B0 | — | — | — | new_provisional_tier_only |
| CB | 45 | 마티야 나스타시치 | Matija Nastasić | Manchester City FC | 1993-03-28 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 46 | 토마스 페르마엘런 | Thomas Vermaelen | Arsenal FC | 1985-11-14 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CB | 47 | 아브람 파파도풀로스 | Avraam Papadopoulos | Olympiacos FC | 1984-12-03 | B- | — | — | — | new_provisional_tier_only |
| CB | 48 | 괴칸 잔 | Gökhan Zan | Galatasaray AŞ | 1981-09-07 | B- | — | — | — | new_provisional_tier_only |
| LB | 1 | 필리페 루이스 | Filipe Luís | Club Atlético de Madrid | 1985-08-09 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 2 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 3 | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 4 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 5 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 6 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 | A- | — | — | — | new_provisional_tier_only |
| LB | 7 | 막스웰 | Maxwell | Paris Saint-Germain FC | 1981-08-27 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 8 | 제바스티안 뵈니슈 | Sebastian Boenisch | Bayer 04 Leverkusen | 1987-02-01 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 9 | 세아드 콜라시나츠 | Sead Kolašinac | FC Schalke 04 | 1993-06-20 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 10 | 마르첼 슈멜처 | Marcel Schmelzer | Borussia Dortmund | 1988-01-22 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 11 | 알렉산다르 콜라로프 | Aleksandar Kolarov | Manchester City FC | 1985-11-10 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 12 | 키런 깁스 | Kieran Gibbs | Arsenal FC | 1989-09-26 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 13 | 아드리아누 코헤이아 | Adriano Correia | FC Barcelona | 1984-10-26 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 14 | 에리크 두름 | Erik Durm | Borussia Dortmund | 1992-05-12 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 15 | 애슐리 콜 | Ashley Cole | Chelsea FC | 1980-12-20 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 16 | 가엘 클리시 | Gaël Clichy | Manchester City FC | 1985-07-26 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 17 | 나초 몬레알 | Nacho Monreal | Arsenal FC | 1986-02-26 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 18 | 도메니코 크리시토 | Domenico Criscito | FC Zenit Saint Petersburg | 1986-12-30 | B+ | — | — | — | new_provisional_tier_only |
| LB | 19 | 호세 홀레바스 | José Holebas | Olympiacos FC | 1984-06-27 | B+ | — | — | — | new_provisional_tier_only |
| LB | 20 | 우르비 에마누엘손 | Urby Emanuelson | AC Milan | 1986-06-16 | B+ | — | — | — | new_provisional_tier_only |
| LB | 21 | 마티아 데 실리오 | Mattia De Sciglio | AC Milan | 1992-10-20 | B+ | — | — | — | new_provisional_tier_only |
| LB | 22 | 뤼카 디뉴 | Lucas Digne | Paris Saint-Germain FC | 1993-07-20 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 23 | 데니스 아오고 | Dennis Aogo | FC Schalke 04 | 1987-01-14 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 24 | 파비우 코엔트랑 | Fábio Coentrão | Real Madrid CF | 1988-03-11 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 25 | 하칸 발타 | Hakan Balta | Galatasaray AŞ | 1983-03-23 | B0 | — | — | — | new_provisional_tier_only |
| LB | 26 | 알렉스 텔리스 | Alex Telles | Galatasaray AŞ | 1992-12-15 | B0 | — | — | — | new_provisional_tier_only |
| LB | 27 | 알렉산더 뷔트너 | Alexander Büttner | Manchester United FC | 1989-02-11 | B0 | — | — | — | new_provisional_tier_only |
| LB | 28 | 가에탕 봉 | Gaëtan Bong | Olympiacos FC | 1988-04-25 | B0 | — | — | — | new_provisional_tier_only |
| LB | 29 | 디에고 콘텐토 | Diego Contento | FC Bayern München | 1990-05-01 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LB | 30 | 에밀리아노 인수아 | Emiliano Insúa | Club Atlético de Madrid | 1989-01-07 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 1 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | A+★ | — | — | — | source_guided_individual_tier_review |
| RB | 2 | 후안프란 | Juanfran | Club Atlético de Madrid | 1985-01-09 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 3 | 파블로 사발레타 | Pablo Zabaleta | Manchester City FC | 1985-01-16 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 4 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | A0 | — | — | — | source_guided_individual_tier_review |
| RB | 5 | 브라니슬라프 이바노비치 | Branislav Ivanović | Chelsea FC | 1984-02-22 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 6 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 7 | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 8 | 하파엘 | Rafael | Manchester United FC | 1990-07-09 | B+ | — | — | — | new_provisional_tier_only |
| RB | 9 | 하피냐 | Rafinha | FC Bayern München | 1985-09-07 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 10 | 그레고리 판데르빌 | Gregory van der Wiel | Paris Saint-Germain FC | 1988-02-03 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 11 | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 12 | 케빈 그로스크로이츠 | Kevin Großkreutz | Borussia Dortmund | 1988-07-19 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 13 | 크리스토프 잘레 | Christophe Jallet | Paris Saint-Germain FC | 1983-10-31 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 14 | 에마뉘엘 에부에 | Emmanuel Eboué | Galatasaray AŞ | 1983-06-04 | B+ | — | — | — | new_provisional_tier_only |
| RB | 15 | 이냐치오 아바테 | Ignazio Abate | AC Milan | 1986-11-12 | B+ | — | — | — | new_provisional_tier_only |
| RB | 16 | 이고르 스몰니코프 | Igor Smolnikov | FC Zenit Saint Petersburg | 1988-08-08 | B+ | — | — | — | new_provisional_tier_only |
| RB | 17 | 레안드루 살리누 | Leandro Salino | Olympiacos FC | 1985-04-22 | B+ | — | — | — | new_provisional_tier_only |
| RB | 18 | 크리스 스몰링 | Chris Smalling | Manchester United FC | 1989-11-22 | B+ | — | — | — | new_provisional_tier_only |
| RB | 19 | 줄리오 도나티 | Giulio Donati | Bayer 04 Leverkusen | 1990-02-05 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 20 | 로베르토 힐베르트 | Roberto Hilbert | Bayer 04 Leverkusen | 1984-10-16 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 21 | 팀 호흘란트 | Tim Hoogland | FC Schalke 04 | 1985-06-11 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 22 | 알바로 아르벨로아 | Álvaro Arbeloa | Real Madrid CF | 1983-01-17 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 23 | 마르틴 몬토야 | Martín Montoya | FC Barcelona | 1991-04-14 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 24 | 알렉산드르 아뉴코프 | Aleksandr Anyukov | FC Zenit Saint Petersburg | 1982-09-28 | B0 | — | — | — | new_provisional_tier_only |
| RB | 25 | 사브리 사리오을루 | Sabri Sarıoğlu | Galatasaray AŞ | 1984-07-26 | B0 | — | — | — | new_provisional_tier_only |
| RB | 26 | 칼 젠킨슨 | Carl Jenkinson | Arsenal FC | 1992-02-08 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 27 | 하비 만키요 | Javi Manquillo | Club Atlético de Madrid | 1994-05-05 | C+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RB | 28 | 마이카 리처즈 | Micah Richards | Manchester City FC | 1988-06-24 | C+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 1 | 가비 | Gabi | Club Atlético de Madrid | 1983-07-10 | S★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| DM | 2 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | S★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| DM | 3 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 | A+★ | — | — | — | source_guided_individual_tier_review |
| DM | 4 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 5 | 티아구 모타 | Thiago Motta | Paris Saint-Germain FC | 1982-08-28 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 6 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 | A0 | — | — | — | new_provisional_tier_only |
| DM | 7 | 악셀 비첼 | Axel Witsel | FC Zenit Saint Petersburg | 1989-01-12 | A0 | — | — | — | new_provisional_tier_only |
| DM | 8 | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 9 | 미켈 아르테타 | Mikel Arteta | Arsenal FC | 1982-03-26 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 10 | 안드레아스 사마리스 | Andreas Samaris | Olympiacos FC | 1989-06-13 | A- | — | — | — | new_provisional_tier_only |
| DM | 11 | 펠리페 멜루 | Felipe Melo | Galatasaray AŞ | 1983-06-26 | A- | — | — | — | new_provisional_tier_only |
| DM | 12 | 로만 노이슈테터 | Roman Neustädter | FC Schalke 04 | 1988-02-18 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 13 | 지몬 롤페스 | Simon Rolfes | Bayer 04 Leverkusen | 1982-01-21 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 14 | 스벤 벤더 | Sven Bender | Borussia Dortmund | 1989-04-27 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 15 | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 16 | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 17 | 제바스티안 켈 | Sebastian Kehl | Borussia Dortmund | 1980-02-13 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 18 | 마티외 플라미니 | Mathieu Flamini | Arsenal FC | 1984-03-07 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 19 | 나이젤 더 용 | Nigel de Jong | AC Milan | 1984-11-30 | B+ | — | — | — | new_provisional_tier_only |
| DM | 20 | 델빈 은딩가 | Delvin N'Dinga | Olympiacos FC | 1988-03-14 | B+ | — | — | — | new_provisional_tier_only |
| DM | 21 | 마리오 수아레스 | Mario Suárez | Club Atlético de Madrid | 1987-02-24 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 22 | 아시에르 이야라멘디 | Asier Illarramendi | Real Madrid CF | 1990-03-08 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 23 | 슈테판 라이나르츠 | Stefan Reinartz | Bayer 04 Leverkusen | 1989-01-01 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 24 | 알렉스 송 | Alex Song | FC Barcelona | 1987-09-09 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 25 | 하비 가르시아 | Javi García | Manchester City FC | 1987-02-08 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| DM | 26 | 마르코 회거 | Marco Höger | FC Schalke 04 | 1989-09-16 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 1 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 | S★† | 3 | 11 | 824 | individual_2013_14_fact_checked_else_tier_imported |
| CM | 2 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | S★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| CM | 3 | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 | A+★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| CM | 4 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | A+★ | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| CM | 5 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 6 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 7 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 8 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 9 | 애런 램지 | Aaron Ramsey | Arsenal FC | 1990-12-26 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 10 | 야야 투레 | Yaya Touré | Manchester City FC | 1983-05-13 | A0 | — | — | — | source_guided_individual_tier_review |
| CM | 11 | 이스코 | Isco | Real Madrid CF | 1992-04-21 | A-† | 3 | 12 | 649 | source_guided_individual_tier_review |
| CM | 12 | 누리 샤힌 | Nuri Şahin | Borussia Dortmund | 1988-09-05 | A- | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| CM | 13 | 라르스 벤더 | Lars Bender | Bayer 04 Leverkusen | 1989-04-27 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 14 | 세스크 파브레가스 | Cesc Fàbregas | FC Barcelona | 1987-05-04 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 15 | 야니스 마니아티스 | Giannis Maniatis | Olympiacos FC | 1986-10-12 | A- | — | — | — | new_provisional_tier_only |
| CM | 16 | 셀추크 이난 | Selçuk İnan | Galatasaray AŞ | 1985-02-10 | A- | — | — | — | new_provisional_tier_only |
| CM | 17 | 곤살로 카스트로 | Gonzalo Castro | Bayer 04 Leverkusen | 1987-06-11 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 18 | 티아구 멘데스 | Tiago Mendes | Club Atlético de Madrid | 1981-05-02 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 19 | 레온 고레츠카 | Leon Goretzka | FC Schalke 04 | 1995-02-06 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 20 | 하미레스 | Ramires | Chelsea FC | 1987-03-24 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 21 | 엠레 잔 | Emre Can | Bayer 04 Leverkusen | 1994-01-12 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 22 | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | 1978-06-20 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 23 | 잭 윌셔 | Jack Wilshere | Arsenal FC | 1992-01-01 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 24 | 리카르도 몬톨리보 | Riccardo Montolivo | AC Milan | 1985-01-18 | B+ | — | — | — | new_provisional_tier_only |
| CM | 25 | 라이언 긱스 | Ryan Giggs | Manchester United FC | 1973-11-29 | B+ | — | — | — | new_provisional_tier_only |
| CM | 26 | 빅토르 파이줄린 | Viktor Fayzulin | FC Zenit Saint Petersburg | 1986-04-22 | B+ | — | — | — | new_provisional_tier_only |
| CM | 27 | 올레크 샤토프 | Oleg Shatov | FC Zenit Saint Petersburg | 1990-07-29 | B+ | — | — | — | new_provisional_tier_only |
| CM | 28 | 설리 문타리 | Sulley Muntari | AC Milan | 1984-08-27 | B+ | — | — | — | new_provisional_tier_only |
| CM | 29 | 아드리앵 라비오 | Adrien Rabiot | Paris Saint-Germain FC | 1995-04-03 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 30 | 저메인 존스 | Jermaine Jones | FC Schalke 04 | 1981-11-03 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CM | 31 | 예크타 쿠르툴루시 | Yekta Kurtuluş | Galatasaray AŞ | 1985-12-11 | B- | — | — | — | new_provisional_tier_only |
| CM | 32 | 하밋 알튼톱 | Hamit Altıntop | Galatasaray AŞ | 1982-12-08 | B- | — | — | — | new_provisional_tier_only |
| CM | 33 | 마루안 펠라이니 | Marouane Fellaini | Manchester United FC | 1987-11-22 | B- | — | — | — | new_provisional_tier_only |
| CAM | 1 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | A+ | — | — | — | source_guided_individual_tier_review |
| CAM | 2 | 다비드 실바 | David Silva | Manchester City FC | 1986-01-08 | A0 | — | — | — | source_guided_individual_tier_review |
| CAM | 3 | 마리오 괴체 | Mario Götze | FC Bayern München | 1992-06-03 | A0† | 3 | 11 | 533 | individual_2013_14_fact_checked_else_tier_imported |
| CAM | 4 | 베슬레이 스네이더 | Wesley Sneijder | Galatasaray AŞ | 1984-06-09 | A- | — | — | — | new_provisional_tier_only |
| CAM | 5 | 오스카르 | Oscar | Chelsea FC | 1991-09-09 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 6 | 카카 | Kaká | AC Milan | 1982-04-22 | A- | — | — | — | new_provisional_tier_only |
| CAM | 7 | 헨리크 미키타리안 | Henrikh Mkhitaryan | Borussia Dortmund | 1989-01-21 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 8 | 케빈프린스 보아텡 | Kevin-Prince Boateng | FC Schalke 04 | 1987-03-06 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 9 | 메수트 외질 | Mesut Özil | Arsenal FC | 1988-10-15 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 10 | 알레한드로 도밍게스 | Alejandro Domínguez | Olympiacos FC | 1981-06-10 | A- | — | — | — | new_provisional_tier_only |
| CAM | 11 | 로만 시로코프 | Roman Shirokov | FC Zenit Saint Petersburg | 1981-07-06 | A- | — | — | — | new_provisional_tier_only |
| CAM | 12 | 막스 마이어 | Max Meyer | FC Schalke 04 | 1995-09-18 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 13 | 하비에르 파스토레 | Javier Pastore | Paris Saint-Germain FC | 1989-06-20 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 14 | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 15 | 카가와 신지 | Shinji Kagawa | Manchester United FC | 1989-03-17 | B+ | — | — | — | new_provisional_tier_only |
| CAM | 16 | 지에구 히바스 | Diego Ribas | Club Atlético de Madrid | 1985-02-28 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| CAM | 17 | 밀로시 요이치 | Miloš Jojić | Borussia Dortmund | 1992-03-19 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | S★† | 17 | 11 | 993 | individual_2013_14_fact_checked_else_tier_imported |
| LW | 2 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 | A+★† | 5 | 9 | 769 | individual_2013_14_fact_checked_else_tier_imported |
| LW | 3 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | A+† | 3 | 10 | 831 | source_guided_individual_tier_review |
| LW | 4 | 에덴 아자르 | Eden Hazard | Chelsea FC | 1991-01-07 | A+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 5 | 네이마르 | Neymar | FC Barcelona | 1992-02-05 | A0† | 4 | 10 | 777 | source_guided_individual_tier_review |
| LW | 6 | 아르다 투란 | Arda Turan | Club Atlético de Madrid | 1987-01-30 | A0† | 4 | 9 | 638 | source_guided_individual_tier_review |
| LW | 7 | 다니 | Danny | FC Zenit Saint Petersburg | 1983-08-07 | A- | — | — | — | new_provisional_tier_only |
| LW | 8 | 사미르 나스리 | Samir Nasri | Manchester City FC | 1987-06-26 | A- | — | — | — | individual_2013_14_fact_checked_else_tier_imported |
| LW | 9 | 손흥민 | Son Heung-min | Bayer 04 Leverkusen | 1992-07-08 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 10 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | A-† | 3 | 8 | 595 | individual_2013_14_fact_checked_else_tier_imported |
| LW | 11 | 에세키엘 라베시 | Ezequiel Lavezzi | Paris Saint-Germain FC | 1985-05-03 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 12 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 13 | 제르단 샤키리 | Xherdan Shaqiri | FC Bayern München | 1991-10-10 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 14 | 루카스 포돌스키 | Lukas Podolski | Arsenal FC | 1985-06-04 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 15 | 대니 웰벡 | Danny Welbeck | Manchester United FC | 1990-11-26 | B+ | — | — | — | new_provisional_tier_only |
| LW | 16 | 다비드 푸스테르 | David Fuster | Olympiacos FC | 1982-02-03 | B+ | — | — | — | new_provisional_tier_only |
| LW | 17 | 헤세 로드리게스 | Jesé Rodríguez | Real Madrid CF | 1993-02-26 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 18 | 호비뉴 | Robinho | AC Milan | 1984-01-25 | B0 | — | — | — | new_provisional_tier_only |
| LW | 19 | 안드레이 아르샤빈 | Andrey Arshavin | FC Zenit Saint Petersburg | 1981-05-29 | B0 | — | — | — | new_provisional_tier_only |
| LW | 20 | 크리스티안 클레멘스 | Christian Clemens | FC Schalke 04 | 1991-08-04 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 21 | 율리안 브란트 | Julian Brandt | Bayer 04 Leverkusen | 1996-05-02 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 22 | 크리스티안 테요 | Cristian Tello | FC Barcelona | 1991-08-19 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| LW | 23 | 애슐리 영 | Ashley Young | Manchester United FC | 1985-07-09 | B- | — | — | — | new_provisional_tier_only |
| LW | 24 | 브루마 | Bruma | Galatasaray AŞ | 1994-10-24 | B- | — | — | — | new_provisional_tier_only |
| LW | 25 | 스테판 엘 샤라위 | Stephan El Shaarawy | AC Milan | 1992-10-27 | B- | — | — | — | new_provisional_tier_only |
| LW | 26 | 크리스티안 로드리게스 | Cristian Rodríguez | Club Atlético de Madrid | 1985-09-30 | C+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 1 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | A+★† | 4 | 10 | 877 | source_guided_individual_tier_review |
| RW | 2 | 가레스 베일 | Gareth Bale | Real Madrid CF | 1989-07-16 | A+† | 6 | 12 | 877 | individual_2013_14_fact_checked_else_tier_imported |
| RW | 3 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | A+ | — | 13 | — | legacy_domestic_proxy_unverified_UCL |
| RW | 4 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | A+† | 5 | 12 | 712 | individual_2013_14_fact_checked_else_tier_imported |
| RW | 5 | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | 1987-02-14 | A+† | 4 | 8 | 686 | individual_2013_14_fact_checked_else_tier_imported |
| RW | 6 | 헐크 | Hulk | FC Zenit Saint Petersburg | 1986-07-25 | A0† | 4 | 8 | 715 | new_provisional_tier_only |
| RW | 7 | 조엘 캠벨 | Joel Campbell | Olympiacos FC | 1992-06-26 | A0 | — | — | — | new_provisional_tier_only |
| RW | 8 | 피에르에메리크 오바메양 | Pierre-Emerick Aubameyang | Borussia Dortmund | 1989-06-18 | A0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 9 | 알렉시스 산체스 | Alexis Sánchez | FC Barcelona | 1988-12-19 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 10 | 헤페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 11 | 시드니 샘 | Sidney Sam | Bayer 04 Leverkusen | 1988-01-31 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 12 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 13 | 헤수스 나바스 | Jesús Navas | Manchester City FC | 1985-11-21 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 14 | 윌리안 | Willian | Chelsea FC | 1988-08-09 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 15 | 루카스 모우라 | Lucas Moura | Paris Saint-Germain FC | 1992-08-13 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 16 | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | Borussia Dortmund | 1985-12-14 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 17 | 안드레 쉬를레 | André Schürrle | Chelsea FC | 1990-11-06 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 18 | 제임스 밀너 | James Milner | Manchester City FC | 1986-01-04 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 19 | 시오 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 20 | 안토니오 발렌시아 | Antonio Valencia | Manchester United FC | 1985-08-04 | B+ | — | — | — | new_provisional_tier_only |
| RW | 21 | 블라디미르 바이스 | Vladimír Weiss | Olympiacos FC | 1989-11-30 | B+ | — | — | — | new_provisional_tier_only |
| RW | 22 | 앨릭스 옥슬레이드체임벌린 | Alex Oxlade-Chamberlain | Arsenal FC | 1993-08-15 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 23 | 치네두 오바시 | Chinedu Obasi | FC Schalke 04 | 1986-06-01 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 24 | 아드리안 로페스 | Adrián López | Club Atlético de Madrid | 1988-01-08 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 25 | 로비 크루즈 | Robbie Kruse | Bayer 04 Leverkusen | 1988-10-05 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| RW | 26 | 발테르 비르사 | Valter Birsa | AC Milan | 1986-08-07 | B- | — | — | — | new_provisional_tier_only |
| RW | 27 | 나니 | Nani | Manchester United FC | 1986-11-17 | B- | — | — | — | new_provisional_tier_only |
| ST | 1 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 | S★† | 10 | 8 | 669 | source_guided_individual_tier_review |
| ST | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | S† | 8 | 7 | 630 | source_guided_individual_tier_review |
| ST | 3 | 디에고 코스타 | Diego Costa | Club Atlético de Madrid | 1988-10-07 | A+★† | 8 | 9 | 580 | individual_2013_14_fact_checked_else_tier_imported |
| ST | 4 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | A+† | 5 | 11 | 913 | source_guided_individual_tier_review |
| ST | 5 | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | 1988-06-02 | A+† | 6 | 6 | 429 | source_guided_individual_tier_review |
| ST | 6 | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 | A+† | 6 | 9 | 809 | individual_2013_14_fact_checked_else_tier_imported |
| ST | 7 | 로빈 판 페르시 | Robin van Persie | Manchester United FC | 1983-08-06 | A0† | 4 | 6 | 416 | new_provisional_tier_only |
| ST | 8 | 마리오 만주키치 | Mario Mandžukić | FC Bayern München | 1986-05-21 | A0† | 3 | 10 | 653 | source_guided_individual_tier_review |
| ST | 9 | 라울 가르시아 | Raúl García | Club Atlético de Madrid | 1986-07-11 | A0† | 4 | 12 | 854 | source_guided_individual_tier_review |
| ST | 10 | 코스타스 미트로글루 | Kostas Mitroglou | Olympiacos FC | 1988-03-12 | A- | — | — | — | new_provisional_tier_only |
| ST | 11 | 다비드 비야 | David Villa | Club Atlético de Madrid | 1981-12-03 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 12 | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 13 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 14 | 올리비에 지루 | Olivier Giroud | Arsenal FC | 1986-09-30 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 15 | 에딘 제코 | Edin Džeko | Manchester City FC | 1986-03-17 | A- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 16 | 디디에 드로그바 | Didier Drogba | Galatasaray AŞ | 1978-03-11 | A- | — | — | — | new_provisional_tier_only |
| ST | 17 | 사뮈엘 에토 | Samuel Eto'o | Chelsea FC | 1981-03-10 | B+† | 3 | 9 | 527 | individual_2013_14_fact_checked_else_tier_imported |
| ST | 18 | 아담 설러이 | Ádám Szalai | FC Schalke 04 | 1987-12-09 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 19 | 클라우디오 피사로 | Claudio Pizarro | FC Bayern München | 1978-10-03 | B+ | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 20 | 알렉산드르 케르자코프 | Aleksandr Kerzhakov | FC Zenit Saint Petersburg | 1982-11-27 | B+ | — | — | — | new_provisional_tier_only |
| ST | 21 | 부라크 이을마즈 | Burak Yılmaz | Galatasaray AŞ | 1985-07-15 | B+ | — | — | — | new_provisional_tier_only |
| ST | 22 | 하비에르 사비올라 | Javier Saviola | Olympiacos FC | 1981-12-11 | B+ | — | — | — | new_provisional_tier_only |
| ST | 23 | 마리오 발로텔리 | Mario Balotelli | AC Milan | 1990-08-12 | B+ | — | — | — | new_provisional_tier_only |
| ST | 24 | 하비에르 에르난데스 | Javier Hernández | Manchester United FC | 1988-06-01 | B+ | — | — | — | new_provisional_tier_only |
| ST | 25 | 알바로 모라타 | Álvaro Morata | Real Madrid CF | 1992-10-23 | B0 | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 26 | 살로몬 론돈 | Salomón Rondón | FC Zenit Saint Petersburg | 1989-09-16 | B0 | — | — | — | new_provisional_tier_only |
| ST | 27 | 우무트 불루트 | Umut Bulut | Galatasaray AŞ | 1983-03-15 | B0 | — | — | — | new_provisional_tier_only |
| ST | 28 | 에렌 데르디요크 | Eren Derdiyok | Bayer 04 Leverkusen | 1988-06-12 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 29 | 뎀바 바 | Demba Ba | Chelsea FC | 1985-05-25 | B- | — | — | — | legacy_domestic_proxy_unverified_UCL |
| ST | 30 | 잠파올로 파치니 | Giampaolo Pazzini | AC Milan | 1984-08-02 | B- | — | — | — | new_provisional_tier_only |
| ST | 31 | 니클라스 벤트너 | Nicklas Bendtner | Arsenal FC | 1988-01-16 | C+ | — | — | — | legacy_domestic_proxy_unverified_UCL |

## Provisional tier distribution
| Tier | Players |
|---|---:|
| S | 10 |
| A+ | 42 |
| A0 | 22 |
| A- | 54 |
| B+ | 88 |
| B0 | 41 |
| B- | 28 |
| C+ | 10 |
| C0 | 1 |
| C- | 1 |
**World Class (S/A+) 52 players; Top Class (S/A+/A0/A-) 128 players.**

## Nominee position distribution
| Role | Number |
|---|---:|
| GK | 31 |
| CB | 48 |
| LB | 30 |
| RB | 28 |
| DM | 26 |
| CM | 33 |
| CAM | 17 |
| LW | 26 |
| RW | 27 |
| ST | 31 |

## Outstanding work (not concealed)
- The original 297 nominees remain unapproved. A complete independent **297-player x three-season matchwise audit has NOT been done** (0/297 fully checked).
- Most per-player UEFA minutes, starts, all scoring/assists beyond selected leaders, and positional modality remain unknown. Complete UEFA 2011-12, 2012-13, 2013-14 personal logs and relative peer comparisons.
- Some original nominees may have zero 2013-14 UCL main-stage minutes; do not remove or assert as regular until independently verified; dataset preserves prior IDs.
- Audit current domestic imports: previous DRAFT tiers were based on league archiving and are not direct UEFA 2013-14 evidence.
- Actual GitHub Pages browser rendering, CI build/Actions checks, user historical approval have NOT been completed.

## Structural assertions (pre-commit)
- All **297 original IDs** unique and retained; evaluated 16 original clubs unchanged; all original groups/matches/knockout/qualifiers untouched.
- All **297 DOB**, **297 provisional tiers** and **297 positional ranks** populated; no rank gaps/duplicates/tier inversions.
- Best XI consists of 11 distinct valid original candidates, correct assigned primary role for the 4-2-3-1 slot, with left/right sides separated.

## Commit linkage
- Season data commit `5c2d415d140bb334130a6b9357da242882a29467`
- Report's own creation commit shared in ChatGPT response.
