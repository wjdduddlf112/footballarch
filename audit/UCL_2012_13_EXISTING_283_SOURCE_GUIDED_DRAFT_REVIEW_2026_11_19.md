# UCL 2012-13 — All 283 existing nominees: UEFA source-guided historical audit (2026-11-19)

> **NOT APPROVED / NOT A COMPLETE THREE-SEASON HISTORICAL REVIEW.** All 283 original candidate IDs are retained and have provisional tiers, DOBs and position ranks. Independently completed full 2010-11, 2011-12, 2012-13 matchwise three-season audits: **0/283**.

## Evaluation remit
- Existing 16 selected clubs only. Original 283 candidate IDs retained; no one added or deleted, historical matches/standings and evaluated club entries unchanged.
- Recency-weighted UCL individual performance: 2012-13 highest, 2011-12 second, 2010-11 third. Individual goals, assists, defensive ball recovery, shot-stopping, position and tactical responsibility matter. Domestic record is supporting context, not an automatic UEFA tier.
- Typical UCL 2012-13 tournament formation: 4-2-3-1 (UEFA report says 18/32 group-stage teams). RW/LW and RB/LB are separate positions.
- S = exceptionally irreplaceable; A+ = near-irreplaceable; A0 = competition elite; A- = near elite; B+ = consistent starter near top; B0 = team regular; B- = below top regular. C-tier and D-tier are below these categories, with D used here to flag cup-tied ineligibility of an incumbent nomination.
- Current JSON: [data/ucl-2012-13.json](../data/ucl-2012-13.json); last directly retrieved blob SHA: `1a8db94e4b80ea59f2d908bed76967cfd7ef92d4`.

## Verified coverage, and what remains provisional
| Measure | Result |
|---|---:|
| Original nominees / stable IDs | 283 / 283 |
| Evaluated clubs | 16 |
| Birthdates: before -> after | 212 -> 283 |
| Tiers: before -> after | 215 -> 283 (DRAFT) |
| Positional ranks: before -> after | 215 -> 283 (DRAFT) |
| First-time tier assignments among originally blank candidates | 68 |
| Revised old-tier values | 14 |
| Official UCL goals verified by direct named source | 18 |
| UEFA selected names matched against published table | 21 |
| Individual UEFA assists / balls recovered / saves checked | 6 / 6 / 3 |
| Player UCL apps recorded with individual source | 4 |
| Unfilled UCL apps / starts / minutes | 279 / 281 / 280 |
| Fully independently completed three-year player audits | **0 / 283** |
| Real production UI browser and CI checks | Not executed |

## Official and era-specific evidence
- [UEFA official 2012-13 technical report](https://www.uefa.com/MultimediaFiles/Download/TechnicalReport/competitions/UCL/01/99/10/79/1991079_DOWNLOAD.pdf) — formation, club profiles, named technical squad.
- [UEFA season 2013 statistics](https://www.uefa.com/uefachampionsleague/history/seasons/2013/statistics/) — assists, recovered balls, saves, etc.
- [UEFA Ronaldo topscorer report](https://www.uefa.com/uefachampionsleague/news/0252-0cd39b053557-acfa005535b1-1000--ronaldo-ends-messi-s-scoring-monopoly/) — Ronaldo 12, Lewandowski 10, Messi/Müller/Burak 8.
- [Celtic 2012-13 club roster](https://www.footballsquads.co.uk/scots/2012-2013/scotprm/celtic.htm), [Porto 2012-13 DFB UCL roster](https://datencenter.dfb.de/competitions/19/seasons/2012-2013/teams/686), [Málaga 2012-13 DFB UCL roster](https://datencenter.dfb.de/en/competitions/champions-league/seasons/2012-2013/teams/malaga-cf?datacenter_name=data-center), [Galatasaray 2012-13 DFB UCL roster](https://datencenter.dfb.de/en/competitions/champions-league/seasons/2012-2013/teams/galatasaray-sk?datacenter_name=data-center) — DOB and period memberships.
- [TFF Porto Maicon CB biography](https://www.tff.org/Default.aspx?kisiID=2017533&pageId=526); [Monreal Arsenal cup-tied evidence](https://www.bbc.co.uk/sport/football/21279814); [Monreal Málaga appearances](https://www.malagacf.com/en/news/malaga-cf-and-arsenal-fc-reach-agreement-for-transfer-of-monreal).

## Contested/exception records to preserve transparently
- UEFA 2012-13 technical report **says 23** players were selected in prose, but published named table actually lists **21** (3 goalkeepers, six defenders, six midfielders, six attackers). This audit flags only those **21 named players**, not two invented additions.
- Porto central defender **Maicon Pereira Roque** DOB **1988-09-14**, distinct from Inter right-back Maicon Douglas Sisenando DOB **1981-07-26**. A separate **2014-15 Porto** archive contains a likely mismatched birthdate, not modified in this season's job.
- **Nacho Monreal** retains two existing club IDs. He played **four 2012-13 UCL matches for Málaga**, but was **cup-tied at Arsenal**, with no eligible Arsenal UCL minutes; Arsenal record gets D and 0 apps, while Málaga remains valid and B+.
- **Claudio Pizarro** (Bayern) was an absent original candidate, despite 4 UCL goals. Preserve original 283-ID pool; do not silently add him.
- **Lucho González** Porto primary role changed CAM->CM provisionally from Porto 4-3-3 tactical role. Full matchwise majority still pending.
- `null` in player stats is an unverified number, never the same as a verified zero.

## First-time DRAFT tiers, 68 previously unrated nominees
| Club original | Position | Korean name | Original name | DOB | Tier | Specific provisional reasoning |
|---|---|---|---|---|---|---|
| Málaga CF | GK | 윌리 카바예로 | Willy Caballero | 1981-09-28 | A+ | UEFA third-highest individual saves, 39, and Málaga five club clean sheets. |
| FC Porto | GK | 헬통 | Helton | 1978-05-18 | A0 | Porto regular goalkeeper, five club clean sheets; team-level metric does not prove individual saves. |
| Celtic FC | GK | 프레이저 포스터 | Fraser Forster | 1988-03-17 | A0 | Strong shot-stopping in Celtic's group success versus Barcelona, first leading UCL season. |
| Galatasaray AŞ | GK | 페르난도 무슬레라 | Fernando Muslera | 1986-06-16 | A0 | 10 full UEFA UCL main-stage goalkeeper games and overall consistent goalkeeping. |
| FC Shakhtar Donetsk | GK | 안드리 피아토우 | Andriy Pyatov | 1984-06-28 | A- | Key Shakhtar goalkeeper, with 2010-11 UCL quarter-final context. |
| Málaga CF | CB | 마르틴 데미첼리스 | Martín Demichelis | 1980-12-20 | A0 | Defensive leader with prior Bayern European history and deep 2012-13 campaign. |
| FC Porto | CB | 니콜라스 오타멘디 | Nicolás Otamendi | 1988-02-12 | A- | Porto regular central defender with group and last-16 defensive contribution. |
| Galatasaray AŞ | CB | 다니 눈케우 | Dany Nounkeu | 1986-04-11 | A- | UEFA records 83 recovered balls, fifth highest in the tournament. |
| FC Shakhtar Donetsk | CB | 야로슬라프 라키츠키 | Yaroslav Rakitskiy | 1989-08-03 | A- | Starting ball-progressing central defender, previously top-ten UEFA recoveries in 2010-11. |
| Celtic FC | CB | 에페 암브로스 | Efe Ambrose | 1988-10-18 | B+ | Group-stage CB with important contribution but uneven last-16 defense. |
| FC Porto | CB | 엘리아킴 망갈라 | Eliaquim Mangala | 1991-02-13 | B+ | Starting defensive option, still developing three-season UCL track record. |
| Celtic FC | CB | 켈빈 윌슨 | Kelvin Wilson | 1985-09-03 | B+ | Regular CB during Celtic's deep defending at UCL group stage. |
| FC Shakhtar Donetsk | CB | 올렉산드르 쿠체르 | Oleksandr Kucher | 1982-10-22 | B+ | First-choice Shakhtar centre-back in the UCL group campaign. |
| Galatasaray AŞ | CB | 세미흐 카야 | Semih Kaya | 1991-02-24 | B+ | Regular emerging Galatasaray centre-back in 2012-13 knockout season. |
| Málaga CF | CB | 웰리통 | Weligton | 1979-08-26 | B+ | Central defender with important defensive role in Málaga debut UCL. |
| Galatasaray AŞ | CB | 괴칸 잔 | Gökhan Zan | 1981-09-07 | B0 | CB backup, lower 2012-13 UCL usage than first-choice center-backs. |
| FC Porto | LB | 알렉스 산드루 | Alex Sandro | 1991-01-26 | A- | Regular attacking left-back, meaningful UCL flank contribution. |
| Galatasaray AŞ | LB | 알베르트 리에라 | Albert Riera | 1982-04-15 | B+ | Left-back role at Galatasaray despite earlier career as winger. |
| Celtic FC | LB | 에밀리오 이사기레 | Emilio Izaguirre | 1986-05-10 | B+ | First-choice Celtic left-back, sustained wide defensive duties. |
| FC Shakhtar Donetsk | LB | 러즈반 라츠 | Răzvan Raț | 1981-05-26 | B+ | Experienced UCL left-back and major wide defensive contributor. |
| Celtic FC | LB | 찰리 멀그루 | Charlie Mulgrew | 1986-03-06 | B+ | Versatile left-back/left midfield defender, strong Celtic squad contribution. |
| Málaga CF | LB | 비토리누 안투네스 | Antunes | 1987-04-01 | B0 | Four Champions League appearances at left-back following winter arrival. |
| FC Shakhtar Donetsk | RB | 다리요 스르나 | Darijo Srna | 1982-05-01 | A0 | Creative right-back with UEFA 2010-11 five assists and continuing important UCL role. |
| Galatasaray AŞ | RB | 에마뉘엘 에부에 | Emmanuel Eboué | 1983-06-04 | B+ | Experienced attacking full-back with prior Arsenal UCL history. |
| Málaga CF | RB | 헤수스 가메스 | Jesús Gámez | 1985-04-10 | B+ | Málaga first-choice right-back with consistent flank duties. |
| Celtic FC | RB | 미카엘 루스티그 | Mikael Lustig | 1986-12-13 | B+ | Celtic right-back in group-stage rotations and defensive structure. |
| Celtic FC | RB | 애덤 매슈스 | Adam Matthews | 1992-01-13 | B0 | Rotational right-back with narrower UCL minutes than first-choice starters. |
| Málaga CF | DM | 헤레미 툴랄랑 | Jérémy Toulalan | 1983-09-10 | A0 | UEFA describes Málaga's midfield ball-winning controller, with earlier Lyon UCL experience. |
| Celtic FC | DM | 빅터 완야마 | Victor Wanyama | 1991-06-25 | A- | Scored against Barcelona in Celtic 2-1 win and added midfield pressing presence. |
| FC Porto | DM | 페르난두 | Fernando | 1987-07-25 | A- | Porto screening midfielder integral to the club's 4-3-3 passing build-up. |
| Galatasaray AŞ | DM | 펠리페 멜루 | Felipe Melo | 1983-06-26 | B+ | Galatasaray defensive midfield ball-winner, no top UCL individual record confirmed. |
| FC Shakhtar Donetsk | DM | 타라스 스테파넨코 | Taras Stepanenko | 1989-08-08 | B+ | Defensive midfield player within Shakhtar's rotating two-man base. |
| Celtic FC | DM | 스콧 브라운 | Scott Brown | 1985-06-26 | B+ | Experienced defensive midfield engine, limited Champions League longevity. |
| FC Shakhtar Donetsk | DM | 토마시 휘프슈만 | Tomáš Hübschman | 1981-09-04 | B+ | Established midfield screening veteran with earlier Shakhtar UCL experience. |
| FC Porto | CM | 주앙 모티뉴 | João Moutinho | 1986-09-08 | A0 | Central playmaker in Porto's 2012-13 UCL build-up and possession control. |
| FC Shakhtar Donetsk | CM | 페르난지뉴 | Fernandinho | 1985-05-04 | A0 | Ball-progression and pressing hub with prior 2010-11 UCL involvement. |
| FC Porto | CM | 루초 곤살레스 | Lucho González | 1981-01-19 | A- | Experienced advanced central midfielder returning after Marseille UCL involvement. |
| Galatasaray AŞ | CM | 셀추크 이난 | Selçuk İnan | 1985-02-10 | A- | Passing and set-play controller with extensive Galatasaray starting responsibility. |
| Málaga CF | CM | 이그나시오 카마초 | Ignacio Camacho | 1990-05-04 | B+ | Midfield cover and balance in Pellegrini's formation, first sustained UCL campaign. |
| Celtic FC | CM | 조 레들리 | Joe Ledley | 1987-01-23 | B+ | Midfield ball circulation and group-stage defensive running. |
| Málaga CF | CM | 마누엘 이투라 | Manuel Iturra | 1984-06-23 | B+ | Midfield screening and running during the Málaga knockout campaign. |
| FC Porto | CM | 스테번 데푸르 | Steven Defour | 1988-04-15 | B+ | Porto central midfield rotation and starting cover. |
| Málaga CF | CAM | 이스코 | Isco | 1992-04-21 | A+ | Three goals and eight main-stage UCL appearances, exceptionally creative debut. |
| FC Shakhtar Donetsk | CAM | 헨리흐 므히타랸 | Henrikh Mkhitaryan | 1989-01-21 | A- | Shakhtar creator and forward midfield transition player; domestic goals not copied as UEFA goals. |
| Galatasaray AŞ | CAM | 베슬레이 스네이더 | Wesley Sneijder | 1984-06-09 | A- | Winter arrival, UEFA knockout contribution and earlier Inter UCL playoff-making. |
| Celtic FC | CAM | 크리스 커먼스 | Kris Commons | 1983-08-30 | B+ | Chance creation and set-piece attacking role, without proven tournament-best production. |
| FC Shakhtar Donetsk | LW | 윌리안 | Willian | 1988-08-09 | A0 | Four UEFA UCL goals including decisive performances against Chelsea. |
| Málaga CF | LW | 엘리세우 | Eliseu | 1983-10-01 | A0 | Four Champions League goals, direct wing attacking contribution. |
| Celtic FC | LW | 요르고스 사마라스 | Georgios Samaras | 1985-02-21 | A- | Scored against Barcelona and provided key left-sided counterattack outlet. |
| Galatasaray AŞ | LW | 노르딘 암라바트 | Nordin Amrabat | 1987-03-31 | B+ | Starting wide ball-carrier with meaningful transition contribution. |
| FC Porto | LW | 실베스트르 바렐라 | Silvestre Varela | 1985-02-02 | B+ | Porto left-sided wing regular, individual UCL elite contribution not established. |
| FC Porto | LW | 크리스티안 아추 | Christian Atsu | 1992-01-10 | B0 | Porto wide attack rotation, limited European sample. |
| FC Shakhtar Donetsk | LW | 타이송 | Taison | 1988-01-17 | B- | Winter arrival, two Round-of-16 matches vs Dortmund, limited UCL minutes. |
| Málaga CF | RW | 호아킨 | Joaquín | 1981-07-21 | A0 | Central creative role from the right flank, with prior Valencia Champions League history. |
| FC Porto | RW | 하메스 로드리게스 | James Rodríguez | 1991-07-12 | A- | Important Porto wide creator, injury-affected UCL season; A+ continuity unproven. |
| FC Shakhtar Donetsk | RW | 도글라스 코스타 | Douglas Costa | 1990-09-14 | B+ | Wide attacking contributor, no official 2012-13 scorer leader recognition. |
| Galatasaray AŞ | RW | 하밋 알튼톱 | Hamit Altıntop | 1982-12-08 | B+ | Experienced right midfielder, reduced verified 2012-13 direct goals. |
| Celtic FC | RW | 제임스 포레스트 | James Forrest | 1991-07-07 | B+ | Right wing starting role in Celtic's European group campaign. |
| Málaga CF | RW | 프란시스코 포르티요 | Francisco Portillo | 1990-06-13 | B- | Secondary right attacking option and incomplete main-stage playing-time record. |
| Galatasaray AŞ | ST | 부라크 이을마즈 | Burak Yılmaz | 1985-07-15 | A+ | Eight 2012-13 UCL goals, tied for third in competition. |
| Galatasaray AŞ | ST | 디디에 드로그바 | Didier Drogba | 1978-03-11 | A0 | Winter arrival and knockout striker, one scoring action against Real Madrid; 2011-12 Chelsea peak weighted. |
| FC Porto | ST | 잭슨 마르티네스 | Jackson Martínez | 1986-10-03 | A- | Three goals in eight 2012-13 UCL appearances; no prior equivalent UCL campaigns. |
| FC Shakhtar Donetsk | ST | 루이스 아드리아누 | Luiz Adriano | 1987-04-12 | A- | UCL striker, 2012-13 hat-trick and 2010-11 European direct scoring. |
| Málaga CF | ST | 하비에르 사비올라 | Javier Saviola | 1981-12-11 | A- | Málaga central striker with earlier European experience, but not elite UCL goals. |
| Celtic FC | ST | 게리 후퍼 | Gary Hooper | 1988-01-26 | B+ | Main central striker with some UCL contribution, goal figure pending match checks. |
| Galatasaray AŞ | ST | 우무트 불루트 | Umut Bulut | 1983-03-15 | B+ | Centre-forward rotation and partnered attacks behind primary scorer Burak. |
| Málaga CF | ST | 로케 산타크루스 | Roque Santa Cruz | 1981-08-16 | B+ | Striker rotation and vital quarter-final goal vs Dortmund. |
| FC Shakhtar Donetsk | ST | 에두아르두 다 시우바 | Eduardo da Silva | 1983-02-25 | B0 | Backup centre-forward, prior 2010-11 UCL scoring weighted but not repeated. |

## Fourteen amended old tier values
| Position | Korean name | Original name | Club original | Before | After | UEFA-focused rationale |
|---|---|---|---|---|---|---|
| GK | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | A0 | A+ | UEFA 2012-13 goalkeeper team selection and competition-leading 48 saves establish a standout individual performance. |
| GK | 디에고 로페스 | Diego López | Real Madrid CF | B+ | A0 | UEFA technical observers selected López among the season's outstanding goalkeepers after his January arrival. This season's excellent knockout goalkeeping is credited, but the shorter tournament sample limits grade to A0. |
| RB | 다니 아우베스 | Dani Alves | FC Barcelona | A- | A+ | Named in UEFA 2012-13 standout defenders; his high quality at right-back remained consistent after 2010-11 and 2011-12 Champions League performances. |
| CB | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | A0 | A+ | UEFA officially registered 99 balls recovered, second to Hummels. His personal defensive work, not club placing, supports A+. |
| CB | 라파엘 바란 | Raphaël Varane | Real Madrid CF | A- | A0 | UEFA registered 87 recovered balls, third in tournament, and he emerged as an excellent Madrid central defender; still limited prior UCL continuity. |
| LB | 막스웰 | Maxwell | Paris Saint-Germain FC | A+ | A0 | A very capable PSG left-back, but A+ imported from domestic form lacks sufficient personal 2010-11 to 2012-13 UCL evidence. |
| DM | 하비 마르티네스 | Javi Martínez | FC Bayern München | S | A+ | Elite 2012-13 screening and ball-winning in Bayern's midfield; UEFA report confirms major individual role. Earlier two seasons at Athletic Bilbao lacked UCL appearances, so S-level three-season continuity is unproven. |
| DM | 안드레아 피를로 | Andrea Pirlo | Juventus FC | S | A+ | UEFA named Pirlo in outstanding 2012-13 midfield selection. Juventus had no Champions League participation in 2011-12; 2012-13 quality merits A+ without projecting three-season UCL S. |
| CM | 아르투로 비달 | Arturo Vidal | Juventus FC | S | A+ | Elite Juventus dynamic midfield contribution in 2012-13, but absence of Juventus UCL in 2011-12 and limited comparative 2010-11 UCL evidence argue against S in this three-season context. |
| CM | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | A+ | S | UEFA 2012-13 selected Iniesta in midfield, following sustained top-end individual control and creativity in 2010-11 and 2011-12 UCL. S is based on European performance continuity rather than club progression. |
| ST | 로빈 판페르시 | Robin van Persie | Manchester United FC | S | A+ | Outstanding league goalscoring alone is not S-level UCL evidence in 2012-13; meaningful prior Arsenal UCL attacking role weighted without overriding the more recent season. |
| CB | 마이콩 | Maicon Pereira Roque | FC Porto | C+ | B+ | Correctly identified FC Porto central defender Maicon Pereira Roque (1988-09-14); earlier C+ was undermined by possible same-name mismatch with FC Internazionale's Maicon (1981-07-26). His Porto UCL starting CB role warrants B+. |
| LB | 나초 몬레알 | Nacho Monreal | Arsenal FC | B0 | D | Arsenal January arrival was cup-tied after UCL participation for Málaga and had zero eligible UCL appearances for Arsenal; retain original ID only under explicit preservation rule. |
| LB | 나초 몬레알 | Nacho Monreal | Málaga CF | B0 | B+ | Had four UEFA Champions League appearances for Málaga prior to his winter transfer, so remains a valid 2012-13 UCL candidate for this club. |

## Revised Best XI, 4-2-3-1
| Position | Korean | Original name | Original club | Birth date | Tier |
|---|---|---|---|---|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | S |
| RB | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | S |
| CB | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 | A+ |
| CB | 단테 | Dante | FC Bayern München | 1983-10-18 | A+ |
| LB | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | A+ |
| DM | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 | A+ |
| CM | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | S |
| CAM | 마리오 괴체 | Mario Götze | Borussia Dortmund | 1992-06-03 | A+ |
| LW | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | S |
| RW | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | A+ |
| ST | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 | S |

**Best XI adjustment:** CB Thiago Silva (Paris Saint-Germain FC) → Dante (FC Bayern München). Both chosen in UEFA published standout defender table; Dante's personal 2012-13 positioning/organizing contribution is weighted highly without direct team-trophy bonus. Full historical peer comparison remains incomplete.

## World Class — all S and A+ nominees
| Tier | Position | Rank | Korean name | Original name | Club original | DOB |
|---|---|---:|---|---|---|---|
| S | GK | 1 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 |
| S | RB | 1 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 |
| S | CM | 1 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 |
| S | CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 |
| S | LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 |
| S | LW | 2 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 |
| S | ST | 1 | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 |
| S | ST | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 |
| S | ST | 3 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 |
| A+ | GK | 2 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 |
| A+ | GK | 3 | 윌리 카바예로 | Willy Caballero | Málaga CF | 1981-09-28 |
| A+ | GK | 4 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 |
| A+ | GK | 5 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 |
| A+ | GK | 6 | 다비드 데헤아 | David de Gea | Manchester United FC | 1990-11-07 |
| A+ | CB | 1 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 |
| A+ | CB | 2 | 단테 | Dante | FC Bayern München | 1983-10-18 |
| A+ | CB | 3 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 |
| A+ | CB | 4 | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | 1988-12-10 |
| A+ | CB | 5 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 |
| A+ | CB | 6 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 |
| A+ | CB | 7 | 안드레아 바르찰리 | Andrea Barzagli | Juventus FC | 1981-05-08 |
| A+ | CB | 8 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 |
| A+ | CB | 9 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 |
| A+ | LB | 1 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 |
| A+ | LB | 2 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 |
| A+ | RB | 2 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 |
| A+ | RB | 3 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 |
| A+ | DM | 1 | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 |
| A+ | DM | 2 | 안드레아 피를로 | Andrea Pirlo | Juventus FC | 1979-05-19 |
| A+ | DM | 3 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 |
| A+ | DM | 4 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 |
| A+ | DM | 5 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 |
| A+ | DM | 6 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 |
| A+ | CM | 3 | 일카이 귄도안 | İlkay Gündoğan | Borussia Dortmund | 1990-10-24 |
| A+ | CM | 4 | 아르투로 비달 | Arturo Vidal | Juventus FC | 1987-05-22 |
| A+ | CM | 5 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 |
| A+ | CM | 6 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus FC | 1986-01-19 |
| A+ | CAM | 1 | 마리오 괴체 | Mario Götze | Borussia Dortmund | 1992-06-03 |
| A+ | CAM | 2 | 이스코 | Isco | Málaga CF | 1992-04-21 |
| A+ | CAM | 3 | 메수트 외질 | Mesut Özil | Real Madrid CF | 1988-10-15 |
| A+ | CAM | 4 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 |
| A+ | LW | 3 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 |
| A+ | RW | 1 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 |
| A+ | RW | 2 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 |
| A+ | ST | 4 | 부라크 이을마즈 | Burak Yılmaz | Galatasaray AŞ | 1985-07-15 |
| A+ | ST | 5 | 로빈 판페르시 | Robin van Persie | Manchester United FC | 1983-08-06 |
| A+ | ST | 6 | 마리오 만주키치 | Mario Mandžukić | FC Bayern München | 1986-05-21 |
| A+ | ST | 7 | 로베르토 솔다도 | Roberto Soldado | Valencia CF | 1985-05-27 |

## UCL Top Class — all S/A+/A0/A- nominees
| Tier | Position | Rank | Korean name | Original name | Club original | DOB |
|---|---|---:|---|---|---|---|
| S | GK | 1 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 |
| S | RB | 1 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 |
| S | CM | 1 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 |
| S | CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 |
| S | LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 |
| S | LW | 2 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 |
| S | ST | 1 | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 |
| S | ST | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 |
| S | ST | 3 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 |
| A+ | GK | 2 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 |
| A+ | GK | 3 | 윌리 카바예로 | Willy Caballero | Málaga CF | 1981-09-28 |
| A+ | GK | 4 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 |
| A+ | GK | 5 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 |
| A+ | GK | 6 | 다비드 데헤아 | David de Gea | Manchester United FC | 1990-11-07 |
| A+ | CB | 1 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 |
| A+ | CB | 2 | 단테 | Dante | FC Bayern München | 1983-10-18 |
| A+ | CB | 3 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 |
| A+ | CB | 4 | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | 1988-12-10 |
| A+ | CB | 5 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 |
| A+ | CB | 6 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 |
| A+ | CB | 7 | 안드레아 바르찰리 | Andrea Barzagli | Juventus FC | 1981-05-08 |
| A+ | CB | 8 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 |
| A+ | CB | 9 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 |
| A+ | LB | 1 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 |
| A+ | LB | 2 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 |
| A+ | RB | 2 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 |
| A+ | RB | 3 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 |
| A+ | DM | 1 | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 |
| A+ | DM | 2 | 안드레아 피를로 | Andrea Pirlo | Juventus FC | 1979-05-19 |
| A+ | DM | 3 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 |
| A+ | DM | 4 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 |
| A+ | DM | 5 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 |
| A+ | DM | 6 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 |
| A+ | CM | 3 | 일카이 귄도안 | İlkay Gündoğan | Borussia Dortmund | 1990-10-24 |
| A+ | CM | 4 | 아르투로 비달 | Arturo Vidal | Juventus FC | 1987-05-22 |
| A+ | CM | 5 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 |
| A+ | CM | 6 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus FC | 1986-01-19 |
| A+ | CAM | 1 | 마리오 괴체 | Mario Götze | Borussia Dortmund | 1992-06-03 |
| A+ | CAM | 2 | 이스코 | Isco | Málaga CF | 1992-04-21 |
| A+ | CAM | 3 | 메수트 외질 | Mesut Özil | Real Madrid CF | 1988-10-15 |
| A+ | CAM | 4 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 |
| A+ | LW | 3 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 |
| A+ | RW | 1 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 |
| A+ | RW | 2 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 |
| A+ | ST | 4 | 부라크 이을마즈 | Burak Yılmaz | Galatasaray AŞ | 1985-07-15 |
| A+ | ST | 5 | 로빈 판페르시 | Robin van Persie | Manchester United FC | 1983-08-06 |
| A+ | ST | 6 | 마리오 만주키치 | Mario Mandžukić | FC Bayern München | 1986-05-21 |
| A+ | ST | 7 | 로베르토 솔다도 | Roberto Soldado | Valencia CF | 1985-05-27 |
| A0 | GK | 7 | 디에고 로페스 | Diego López | Real Madrid CF | 1981-11-03 |
| A0 | GK | 8 | 헬통 | Helton | FC Porto | 1978-05-18 |
| A0 | GK | 9 | 프레이저 포스터 | Fraser Forster | Celtic FC | 1988-03-17 |
| A0 | GK | 10 | 페르난도 무슬레라 | Fernando Muslera | Galatasaray AŞ | 1986-06-16 |
| A0 | GK | 11 | 크리스티안 아비아티 | Christian Abbiati | AC Milan | 1977-07-08 |
| A0 | CB | 10 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 |
| A0 | CB | 11 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 |
| A0 | CB | 12 | 마르틴 데미첼리스 | Martín Demichelis | Málaga CF | 1980-12-20 |
| A0 | LB | 3 | 막스웰 | Maxwell | Paris Saint-Germain FC | 1981-08-27 |
| A0 | LB | 4 | 콰드워 아사모아 | Kwadwo Asamoah | Juventus FC | 1988-12-09 |
| A0 | RB | 4 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk | 1982-05-01 |
| A0 | RB | 5 | 다닐루 | Danilo | FC Porto | 1991-07-15 |
| A0 | RB | 6 | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus FC | 1984-01-16 |
| A0 | RB | 7 | 마티아 데 실리오 | Mattia De Sciglio | AC Milan | 1992-10-20 |
| A0 | RB | 8 | 크리스토프 잘레 | Christophe Jallet | Paris Saint-Germain FC | 1983-10-31 |
| A0 | DM | 7 | 헤레미 툴랄랑 | Jérémy Toulalan | Málaga CF | 1983-09-10 |
| A0 | DM | 8 | 리카르도 몬톨리보 | Riccardo Montolivo | AC Milan | 1985-01-18 |
| A0 | CM | 7 | 주앙 모티뉴 | João Moutinho | FC Porto | 1986-09-08 |
| A0 | CM | 8 | 페르난지뉴 | Fernandinho | FC Shakhtar Donetsk | 1985-05-04 |
| A0 | CM | 9 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 |
| A0 | CAM | 5 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 |
| A0 | CAM | 6 | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 |
| A0 | LW | 4 | 윌리안 | Willian | FC Shakhtar Donetsk | 1988-08-09 |
| A0 | LW | 5 | 스테판 엘 샤라위 | Stephan El Shaarawy | AC Milan | 1992-10-27 |
| A0 | LW | 6 | 엘리세우 | Eliseu | Málaga CF | 1983-10-01 |
| A0 | RW | 3 | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | Borussia Dortmund | 1985-12-14 |
| A0 | RW | 4 | 호아킨 | Joaquín | Málaga CF | 1981-07-21 |
| A0 | ST | 8 | 디디에 드로그바 | Didier Drogba | Galatasaray AŞ | 1978-03-11 |
| A0 | ST | 9 | 잠파올로 파치니 | Giampaolo Pazzini | AC Milan | 1984-08-02 |
| A0 | ST | 10 | 마리오 고메스 | Mario Gómez | FC Bayern München | 1985-07-10 |
| A- | GK | 12 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 |
| A- | GK | 13 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 |
| A- | GK | 14 | 안드리 피아토우 | Andriy Pyatov | FC Shakhtar Donetsk | 1984-06-28 |
| A- | CB | 13 | 니콜라스 오타멘디 | Nicolás Otamendi | FC Porto | 1988-02-12 |
| A- | CB | 14 | 다니 눈케우 | Dany Nounkeu | Galatasaray AŞ | 1986-04-11 |
| A- | CB | 15 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 |
| A- | CB | 16 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 |
| A- | CB | 17 | 페페 | Pepe | Real Madrid CF | 1983-02-26 |
| A- | CB | 18 | 알렉스 | Alex | Paris Saint-Germain FC | 1982-06-17 |
| A- | CB | 19 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 |
| A- | CB | 20 | 페어 메르테자커 | Per Mertesacker | Arsenal FC | 1984-09-29 |
| A- | CB | 21 | 마마두 사코 | Mamadou Sakho | Paris Saint-Germain FC | 1990-02-13 |
| A- | CB | 22 | 야로슬라프 라키츠키 | Yaroslav Rakitskiy | FC Shakhtar Donetsk | 1989-08-03 |
| A- | LB | 5 | 마르첼 슈멜처 | Marcel Schmelzer | Borussia Dortmund | 1988-01-22 |
| A- | LB | 6 | 알렉스 산드루 | Alex Sandro | FC Porto | 1991-01-26 |
| A- | LB | 7 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 |
| A- | RB | 9 | 하파엘 | Rafael | Manchester United FC | 1990-07-09 |
| A- | DM | 9 | 빅터 완야마 | Victor Wanyama | Celtic FC | 1991-06-25 |
| A- | DM | 10 | 페르난두 | Fernando | FC Porto | 1987-07-25 |
| A- | DM | 11 | 미켈 아르테타 | Mikel Arteta | Arsenal FC | 1982-03-26 |
| A- | CM | 10 | 루초 곤살레스 | Lucho González | FC Porto | 1981-01-19 |
| A- | CM | 11 | 에베르 바네가 | Éver Banega | Valencia CF | 1988-06-29 |
| A- | CM | 12 | 세스크 파브레가스 | Cesc Fàbregas | FC Barcelona | 1987-05-04 |
| A- | CM | 13 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 |
| A- | CM | 14 | 셀추크 이난 | Selçuk İnan | Galatasaray AŞ | 1985-02-10 |
| A- | CAM | 7 | 헨리흐 므히타랸 | Henrikh Mkhitaryan | FC Shakhtar Donetsk | 1989-01-21 |
| A- | CAM | 8 | 하비에르 파스토레 | Javier Pastore | Paris Saint-Germain FC | 1989-06-20 |
| A- | CAM | 9 | 조나스 곤사우베스 | Jonas Gonçalves | Valencia CF | 1984-04-01 |
| A- | CAM | 10 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 |
| A- | CAM | 11 | 베슬레이 스네이더 | Wesley Sneijder | Galatasaray AŞ | 1984-06-09 |
| A- | LW | 7 | 요르고스 사마라스 | Georgios Samaras | Celtic FC | 1985-02-21 |
| A- | RW | 5 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 |
| A- | RW | 6 | 하메스 로드리게스 | James Rodríguez | FC Porto | 1991-07-12 |
| A- | RW | 7 | 헤페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 |
| A- | RW | 8 | 제레미 메네즈 | Jérémy Ménez | Paris Saint-Germain FC | 1987-05-07 |
| A- | RW | 9 | 시오 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 |
| A- | ST | 11 | 잭슨 마르티네스 | Jackson Martínez | FC Porto | 1986-10-03 |
| A- | ST | 12 | 루이스 아드리아누 | Luiz Adriano | FC Shakhtar Donetsk | 1987-04-12 |
| A- | ST | 13 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 |
| A- | ST | 14 | 곤살로 이과인 | Gonzalo Higuaín | Real Madrid CF | 1987-12-10 |
| A- | ST | 15 | 하비에르 사비올라 | Javier Saviola | Málaga CF | 1981-12-11 |

## COMPLETE 283 PLAYER RANKS — browser Markdown table
> **★** = UEFA named technical-team player; **†** = verified current season goals. Both are fact-specific checks, not full 3-year validation. Absent goals/apps shown as `—` are unknown, not zero. Arsenal Nacho Monreal has a separately verified zero due to cup-tied eligibility.

| Pos | Rank | Korean name | Original name | Club (original) | DOB | Tier | UCL goals verified | UCL apps verified | Source audit status |
|---|---:|---|---|---|---|---|---:|---:|---|
| GK | 1 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | S★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| GK | 2 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 | A+★ | — | — | source_guided_tier_not_full_three_season_review |
| GK | 3 | 윌리 카바예로 | Willy Caballero | Málaga CF | 1981-09-28 | A+ | — | — | source_guided_tier_not_full_three_season_review |
| GK | 4 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | A+ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| GK | 5 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 6 | 다비드 데헤아 | David de Gea | Manchester United FC | 1990-11-07 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 7 | 디에고 로페스 | Diego López | Real Madrid CF | 1981-11-03 | A0★ | — | — | source_guided_tier_not_full_three_season_review |
| GK | 8 | 헬통 | Helton | FC Porto | 1978-05-18 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| GK | 9 | 프레이저 포스터 | Fraser Forster | Celtic FC | 1988-03-17 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| GK | 10 | 페르난도 무슬레라 | Fernando Muslera | Galatasaray AŞ | 1986-06-16 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| GK | 11 | 크리스티안 아비아티 | Christian Abbiati | AC Milan | 1977-07-08 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 12 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 13 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 14 | 안드리 피아토우 | Andriy Pyatov | FC Shakhtar Donetsk | 1984-06-28 | A- | — | — | source_guided_tier_not_full_three_season_review |
| GK | 15 | 지에구 아우베스 | Diego Alves | Valencia CF | 1985-06-24 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 16 | 티모 힐데브란트 | Timo Hildebrand | FC Schalke 04 | 1979-04-05 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 17 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 18 | 비센테 과이타 | Vicente Guaita | Valencia CF | 1987-02-18 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 19 | 라르스 운너슈탈 | Lars Unnerstall | FC Schalke 04 | 1990-07-20 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 20 | 마르코 아멜리아 | Marco Amelia | AC Milan | 1982-04-02 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 21 | 마르코 스토라리 | Marco Storari | Juventus FC | 1977-01-07 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 22 | 미첼 랑게라크 | Mitchell Langerak | Borussia Dortmund | 1988-08-22 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 23 | 비토 마노네 | Vito Mannone | Arsenal FC | 1988-03-02 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 24 | 니콜라 두셰 | Nicolas Douchez | Paris Saint-Germain FC | 1980-04-22 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 25 | 톰 슈타르케 | Tom Starke | FC Bayern München | 1981-03-18 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 26 | 안데르스 린데고르 | Anders Lindegaard | Manchester United FC | 1984-04-13 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| GK | 27 | 호세 마누엘 핀토 | José Manuel Pinto | FC Barcelona | 1975-11-15 | C0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 1 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 | A+ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CB | 2 | 단테 | Dante | FC Bayern München | 1983-10-18 | A+★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CB | 3 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 | A+★ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 4 | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | 1988-12-10 | A+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 5 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | A+★ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 6 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | A+★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CB | 7 | 안드레아 바르찰리 | Andrea Barzagli | Juventus FC | 1981-05-08 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 8 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 9 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 10 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| CB | 11 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 12 | 마르틴 데미첼리스 | Martín Demichelis | Málaga CF | 1980-12-20 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| CB | 13 | 니콜라스 오타멘디 | Nicolás Otamendi | FC Porto | 1988-02-12 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CB | 14 | 다니 눈케우 | Dany Nounkeu | Galatasaray AŞ | 1986-04-11 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CB | 15 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 16 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 17 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 18 | 알렉스 | Alex | Paris Saint-Germain FC | 1982-06-17 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 19 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 20 | 페어 메르테자커 | Per Mertesacker | Arsenal FC | 1984-09-29 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 21 | 마마두 사코 | Mamadou Sakho | Paris Saint-Germain FC | 1990-02-13 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 22 | 야로슬라프 라키츠키 | Yaroslav Rakitskiy | FC Shakhtar Donetsk | 1989-08-03 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CB | 23 | 조엘 마티프 | Joël Matip | FC Schalke 04 | 1991-08-08 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 24 | 필리프 멕세스 | Philippe Mexès | AC Milan | 1982-03-30 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 25 | 히카르두 코스타 | Ricardo Costa | Valencia CF | 1981-05-16 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 26 | 아딜 라미 | Adil Rami | Valencia CF | 1985-12-27 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 27 | 크리스티안 사파타 | Cristián Zapata | AC Milan | 1986-09-30 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 28 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 29 | 조니 에번스 | Jonny Evans | Manchester United FC | 1988-01-02 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 30 | 펠리페 산타나 | Felipe Santana | Borussia Dortmund | 1986-03-17 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 31 | 홀거 바트슈투버 | Holger Badstuber | FC Bayern München | 1989-03-13 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 32 | 마르틴 카세레스 | Martín Cáceres | Juventus FC | 1987-04-07 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 33 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | 1981-10-21 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 34 | 마이콩 | Maicon Pereira Roque | FC Porto | 1988-09-14 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 35 | 에페 암브로스 | Efe Ambrose | Celtic FC | 1988-10-18 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 36 | 엘리아킴 망갈라 | Eliaquim Mangala | FC Porto | 1991-02-13 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 37 | 켈빈 윌슨 | Kelvin Wilson | Celtic FC | 1985-09-03 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 38 | 올렉산드르 쿠체르 | Oleksandr Kucher | FC Shakhtar Donetsk | 1982-10-22 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 39 | 세미흐 카야 | Semih Kaya | Galatasaray AŞ | 1991-02-24 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 40 | 웰리통 | Weligton | Málaga CF | 1979-08-26 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CB | 41 | 빅토르 루이스 | Víctor Ruiz | Valencia CF | 1989-01-25 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 42 | 마리오 예페스 | Mario Yepes | AC Milan | 1976-01-13 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 43 | 카를레스 푸욜 | Carles Puyol | FC Barcelona | 1978-04-13 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 44 | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | FC Schalke 04 | 1992-02-23 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 45 | 토마스 페르마엘런 | Thomas Vermaelen | Arsenal FC | 1985-11-14 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CB | 46 | 괴칸 잔 | Gökhan Zan | Galatasaray AŞ | 1981-09-07 | B0 | — | — | source_guided_tier_not_full_three_season_review |
| LB | 1 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 2 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 3 | 막스웰 | Maxwell | Paris Saint-Germain FC | 1981-08-27 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| LB | 4 | 콰드워 아사모아 | Kwadwo Asamoah | Juventus FC | 1988-12-09 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 5 | 마르첼 슈멜처 | Marcel Schmelzer | Borussia Dortmund | 1988-01-22 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 6 | 알렉스 산드루 | Alex Sandro | FC Porto | 1991-01-26 | A- | — | — | source_guided_tier_not_full_three_season_review |
| LB | 7 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 8 | 크리스티안 푹스 | Christian Fuchs | FC Schalke 04 | 1986-04-07 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 9 | 케빈 콘스탕 | Kevin Constant | AC Milan | 1987-05-15 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 10 | 파비우 코엔트랑 | Fábio Coentrão | Real Madrid CF | 1988-03-11 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 11 | 키런 깁스 | Kieran Gibbs | Arsenal FC | 1989-09-26 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 12 | 아드리아누 코헤이아 | Adriano Correia | FC Barcelona | 1984-10-26 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 13 | 제레미 마티외 | Jérémy Mathieu | Valencia CF | 1983-10-29 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 14 | 나초 몬레알 | Nacho Monreal | Málaga CF | 1986-02-26 | B+ | — | 4 | source_guided_tier_not_full_three_season_review |
| LB | 15 | 알베르트 리에라 | Albert Riera | Galatasaray AŞ | 1982-04-15 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| LB | 16 | 에밀리오 이사기레 | Emilio Izaguirre | Celtic FC | 1986-05-10 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| LB | 17 | 러즈반 라츠 | Răzvan Raț | FC Shakhtar Donetsk | 1981-05-26 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| LB | 18 | 찰리 멀그루 | Charlie Mulgrew | Celtic FC | 1986-03-06 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| LB | 19 | 알리 시소코 | Aly Cissokho | Valencia CF | 1987-09-15 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 20 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 21 | 세아드 콜라시나츠 | Sead Kolašinac | FC Schalke 04 | 1993-06-20 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 22 | 실뱅 아르망 | Sylvain Armand | Paris Saint-Germain FC | 1980-08-01 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 23 | 비토리누 안투네스 | Antunes | Málaga CF | 1987-04-01 | B0 | — | — | source_guided_tier_not_full_three_season_review |
| LB | 24 | 파올로 데 첼리에 | Paolo De Ceglie | Juventus FC | 1986-09-17 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 25 | 디에고 콘텐토 | Diego Contento | FC Bayern München | 1990-05-01 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 26 | 알렉산더 뷔트너 | Alexander Büttner | Manchester United FC | 1989-02-11 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LB | 27 | 나초 몬레알 | Nacho Monreal | Arsenal FC | 1986-02-26 | D | — | 0 | source_guided_tier_not_full_three_season_review |
| RB | 1 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | S★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| RB | 2 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 3 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | A+★ | — | — | source_guided_tier_not_full_three_season_review |
| RB | 4 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk | 1982-05-01 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| RB | 5 | 다닐루 | Danilo | FC Porto | 1991-07-15 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 6 | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus FC | 1984-01-16 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 7 | 마티아 데 실리오 | Mattia De Sciglio | AC Milan | 1992-10-20 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 8 | 크리스토프 잘레 | Christophe Jallet | Paris Saint-Germain FC | 1983-10-31 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 9 | 하파엘 | Rafael | Manchester United FC | 1990-07-09 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 10 | 주앙 페레이라 | João Pereira | Valencia CF | 1984-02-25 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 11 | 알바로 아르벨로아 | Álvaro Arbeloa | Real Madrid CF | 1983-01-17 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 12 | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 13 | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 14 | 이냐치오 아바테 | Ignazio Abate | AC Milan | 1986-11-12 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 15 | 그레고리 판데르빌 | Gregory van der Wiel | Paris Saint-Germain FC | 1988-02-03 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 16 | 마르코 회거 | Marco Höger | FC Schalke 04 | 1989-09-16 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 17 | 에마뉘엘 에부에 | Emmanuel Eboué | Galatasaray AŞ | 1983-06-04 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| RB | 18 | 헤수스 가메스 | Jesús Gámez | Málaga CF | 1985-04-10 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| RB | 19 | 미카엘 루스티그 | Mikael Lustig | Celtic FC | 1986-12-13 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| RB | 20 | 마이클 에시앙 | Michael Essien | Real Madrid CF | 1982-12-03 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 21 | 마르틴 몬토야 | Martín Montoya | FC Barcelona | 1991-04-14 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 22 | 마우리시오 이슬라 | Mauricio Isla | Juventus FC | 1988-06-12 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 23 | 하피냐 | Rafinha | FC Bayern München | 1985-09-07 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 24 | 필 존스 | Phil Jones | Manchester United FC | 1992-02-21 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 25 | 애덤 매슈스 | Adam Matthews | Celtic FC | 1992-01-13 | B0 | — | — | source_guided_tier_not_full_three_season_review |
| RB | 26 | 안토니오 바라간 | Antonio Barragán | Valencia CF | 1987-06-12 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RB | 27 | 칼 젠킨슨 | Carl Jenkinson | Arsenal FC | 1992-02-08 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 1 | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 | A+ | — | — | source_guided_tier_not_full_three_season_review |
| DM | 2 | 안드레아 피를로 | Andrea Pirlo | Juventus FC | 1979-05-19 | A+★ | — | — | source_guided_tier_not_full_three_season_review |
| DM | 3 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 4 | 사비 알론소 | Xabi Alonso | Real Madrid CF | 1981-11-25 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 5 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 6 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 7 | 헤레미 툴랄랑 | Jérémy Toulalan | Málaga CF | 1983-09-10 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| DM | 8 | 리카르도 몬톨리보 | Riccardo Montolivo | AC Milan | 1985-01-18 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 9 | 빅터 완야마 | Victor Wanyama | Celtic FC | 1991-06-25 | A- | — | — | source_guided_tier_not_full_three_season_review |
| DM | 10 | 페르난두 | Fernando | FC Porto | 1987-07-25 | A- | — | — | source_guided_tier_not_full_three_season_review |
| DM | 11 | 미켈 아르테타 | Mikel Arteta | Arsenal FC | 1982-03-26 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 12 | 로만 노이슈테터 | Roman Neustädter | FC Schalke 04 | 1988-02-18 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 13 | 티노 코스타 | Tino Costa | Valencia CF | 1985-01-09 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 14 | 스벤 벤더 | Sven Bender | Borussia Dortmund | 1989-04-27 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 15 | 제바스티안 켈 | Sebastian Kehl | Borussia Dortmund | 1980-02-13 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 16 | 루이스 구스타부 | Luiz Gustavo | FC Bayern München | 1987-07-23 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 17 | 티아구 모타 | Thiago Motta | Paris Saint-Germain FC | 1982-08-28 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 18 | 펠리페 멜루 | Felipe Melo | Galatasaray AŞ | 1983-06-26 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| DM | 19 | 타라스 스테파넨코 | Taras Stepanenko | FC Shakhtar Donetsk | 1989-08-08 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| DM | 20 | 스콧 브라운 | Scott Brown | Celtic FC | 1985-06-26 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| DM | 21 | 토마시 휘프슈만 | Tomáš Hübschman | FC Shakhtar Donetsk | 1981-09-04 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| DM | 22 | 알렉스 송 | Alex Song | FC Barcelona | 1987-09-09 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 23 | 다비드 알벨다 | David Albelda | Valencia CF | 1977-09-01 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 24 | 마시모 암브로시니 | Massimo Ambrosini | AC Milan | 1977-05-29 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| DM | 25 | 프랑시스 코클랭 | Francis Coquelin | Arsenal FC | 1991-05-13 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 1 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | S★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CM | 2 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | S★ | — | — | source_guided_tier_not_full_three_season_review |
| CM | 3 | 일카이 귄도안 | İlkay Gündoğan | Borussia Dortmund | 1990-10-24 | A+★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CM | 4 | 아르투로 비달 | Arturo Vidal | Juventus FC | 1987-05-22 | A+ | — | — | source_guided_tier_not_full_three_season_review |
| CM | 5 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 6 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus FC | 1986-01-19 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 7 | 주앙 모티뉴 | João Moutinho | FC Porto | 1986-09-08 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| CM | 8 | 페르난지뉴 | Fernandinho | FC Shakhtar Donetsk | 1985-05-04 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| CM | 9 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 10 | 루초 곤살레스 | Lucho González | FC Porto | 1981-01-19 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CM | 11 | 에베르 바네가 | Éver Banega | Valencia CF | 1988-06-29 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 12 | 세스크 파브레가스 | Cesc Fàbregas | FC Barcelona | 1987-05-04 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 13 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 14 | 셀추크 이난 | Selçuk İnan | Galatasaray AŞ | 1985-02-10 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CM | 15 | 저메인 존스 | Jermaine Jones | FC Schalke 04 | 1981-11-03 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 16 | 사미 케디라 | Sami Khedira | Real Madrid CF | 1987-04-04 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 17 | 마티외 플라미니 | Mathieu Flamini | AC Milan | 1984-03-07 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 18 | 잭 윌셔 | Jack Wilshere | Arsenal FC | 1992-01-01 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 19 | 다니 파레호 | Dani Parejo | Valencia CF | 1989-04-16 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 20 | 루이스 홀트비 | Lewis Holtby | FC Schalke 04 | 1990-09-18 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 21 | 폴 포그바 | Paul Pogba | Juventus FC | 1993-03-15 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 22 | 애런 램지 | Aaron Ramsey | Arsenal FC | 1990-12-26 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 23 | 이그나시오 카마초 | Ignacio Camacho | Málaga CF | 1990-05-04 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CM | 24 | 조 레들리 | Joe Ledley | Celtic FC | 1987-01-23 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CM | 25 | 마누엘 이투라 | Manuel Iturra | Málaga CF | 1984-06-23 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CM | 26 | 스테번 데푸르 | Steven Defour | FC Porto | 1988-04-15 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CM | 27 | 안토니오 노체리노 | Antonio Nocerino | AC Milan | 1985-04-09 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 28 | 톰 클레벌리 | Tom Cleverley | Manchester United FC | 1989-08-12 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 29 | 클레망 샹톰 | Clément Chantôme | Paris Saint-Germain FC | 1987-09-11 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 30 | 설리 문타리 | Sulley Muntari | AC Milan | 1984-08-27 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 31 | 모리츠 라이트너 | Moritz Leitner | Borussia Dortmund | 1992-12-08 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 32 | 아나톨리 티모슈크 | Anatoliy Tymoshchuk | FC Bayern München | 1979-03-30 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CM | 33 | 폴 스콜스 | Paul Scholes | Manchester United FC | 1974-11-16 | C+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 1 | 마리오 괴체 | Mario Götze | Borussia Dortmund | 1992-06-03 | A+★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CAM | 2 | 이스코 | Isco | Málaga CF | 1992-04-21 | A+† | 3 | 8 | source_guided_tier_not_full_three_season_review |
| CAM | 3 | 메수트 외질 | Mesut Özil | Real Madrid CF | 1988-10-15 | A+ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CAM | 4 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 5 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 6 | 토니 크로스 | Toni Kroos | FC Bayern München | 1990-01-04 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 7 | 헨리흐 므히타랸 | Henrikh Mkhitaryan | FC Shakhtar Donetsk | 1989-01-21 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CAM | 8 | 하비에르 파스토레 | Javier Pastore | Paris Saint-Germain FC | 1989-06-20 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 9 | 조나스 곤사우베스 | Jonas Gonçalves | Valencia CF | 1984-04-01 | A-† | 5 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| CAM | 10 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 11 | 베슬레이 스네이더 | Wesley Sneijder | Galatasaray AŞ | 1984-06-09 | A- | — | — | source_guided_tier_not_full_three_season_review |
| CAM | 12 | 크리스 커먼스 | Kris Commons | Celtic FC | 1983-08-30 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| CAM | 13 | 카카 | Kaká | Real Madrid CF | 1982-04-22 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 14 | 누리 샤힌 | Nuri Şahin | Borussia Dortmund | 1988-09-05 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 15 | 하파에우 | Raffael | FC Schalke 04 | 1985-03-28 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 16 | 신지 카가와 | Shinji Kagawa | Manchester United FC | 1989-03-17 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 17 | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| CAM | 18 | 세르히오 카날레스 | Sergio Canales | Valencia CF | 1991-02-16 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | S★† | 12 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| LW | 2 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | S | — | — | source_guided_tier_not_full_three_season_review |
| LW | 3 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 | A+† | 4 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| LW | 4 | 윌리안 | Willian | FC Shakhtar Donetsk | 1988-08-09 | A0† | 4 | — | source_guided_tier_not_full_three_season_review |
| LW | 5 | 스테판 엘 샤라위 | Stephan El Shaarawy | AC Milan | 1992-10-27 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 6 | 엘리세우 | Eliseu | Málaga CF | 1983-10-01 | A0† | 4 | — | source_guided_tier_not_full_three_season_review |
| LW | 7 | 요르고스 사마라스 | Georgios Samaras | Celtic FC | 1985-02-21 | A- | — | — | source_guided_tier_not_full_three_season_review |
| LW | 8 | 안드레스 과르다도 | Andrés Guardado | Valencia CF | 1986-09-28 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 9 | 에세키엘 라베시 | Ezequiel Lavezzi | Paris Saint-Germain FC | 1985-05-03 | B+† | 5 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| LW | 10 | 다비드 비야 | David Villa | FC Barcelona | 1981-12-03 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 11 | 미셰우 바스토스 | Michel Bastos | FC Schalke 04 | 1983-08-02 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 12 | 루카스 포돌스키 | Lukas Podolski | Arsenal FC | 1985-06-04 | B+† | 4 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| LW | 13 | 케빈 그로스크로이츠 | Kevin Großkreutz | Borussia Dortmund | 1988-07-19 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 14 | 노르딘 암라바트 | Nordin Amrabat | Galatasaray AŞ | 1987-03-31 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| LW | 15 | 실베스트르 바렐라 | Silvestre Varela | FC Porto | 1985-02-02 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| LW | 16 | 크리스티안 테요 | Cristian Tello | FC Barcelona | 1991-08-19 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 17 | 호비뉴 | Robinho | AC Milan | 1984-01-25 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 18 | 이브라힘 아펠라이 | Ibrahim Afellay | FC Schalke 04 | 1986-04-02 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 19 | 네네 | Nenê | Paris Saint-Germain FC | 1981-07-19 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 20 | 크리스티안 아추 | Christian Atsu | FC Porto | 1992-01-10 | B0 | — | — | source_guided_tier_not_full_three_season_review |
| LW | 21 | 애슐리 영 | Ashley Young | Manchester United FC | 1985-07-09 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 22 | 파블로 피아티 | Pablo Piatti | Valencia CF | 1989-03-31 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 23 | 대니 웰벡 | Danny Welbeck | Manchester United FC | 1990-11-26 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 24 | 제르비뉴 | Gervinho | Arsenal FC | 1987-05-27 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| LW | 25 | 타이송 | Taison | FC Shakhtar Donetsk | 1988-01-17 | B- | — | — | source_guided_tier_not_full_three_season_review |
| RW | 1 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | A+★† | 4 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| RW | 2 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | A+★† | 8 | — | source_guided_tier_not_full_three_season_review |
| RW | 3 | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | Borussia Dortmund | 1985-12-14 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 4 | 호아킨 | Joaquín | Málaga CF | 1981-07-21 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| RW | 5 | 앙헬 디 마리아 | Ángel Di María | Real Madrid CF | 1988-02-14 | A- | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| RW | 6 | 하메스 로드리게스 | James Rodríguez | FC Porto | 1991-07-12 | A- | — | — | source_guided_tier_not_full_three_season_review |
| RW | 7 | 헤페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 8 | 제레미 메네즈 | Jérémy Ménez | Paris Saint-Germain FC | 1987-05-07 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 9 | 시오 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 10 | 케빈프린스 보아텡 | Kevin-Prince Boateng | AC Milan | 1987-03-06 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 11 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 12 | 소피앙 페굴리 | Sofiane Feghouli | Valencia CF | 1989-12-26 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 13 | 알렉시스 산체스 | Alexis Sánchez | FC Barcelona | 1988-12-19 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 14 | 제르단 샤키리 | Xherdan Shaqiri | FC Bayern München | 1991-10-10 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 15 | 도글라스 코스타 | Douglas Costa | FC Shakhtar Donetsk | 1990-09-14 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| RW | 16 | 하밋 알튼톱 | Hamit Altıntop | Galatasaray AŞ | 1982-12-08 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| RW | 17 | 제임스 포레스트 | James Forrest | Celtic FC | 1991-07-07 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| RW | 18 | 안토니오 발렌시아 | Antonio Valencia | Manchester United FC | 1985-08-04 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 19 | 호세 카예혼 | José Callejón | Real Madrid CF | 1987-02-11 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 20 | 루카스 모우라 | Lucas Moura | Paris Saint-Germain FC | 1992-08-13 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 21 | 호나탄 비에라 | Jonathan Viera | Valencia CF | 1989-10-21 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 22 | 이반 페리시치 | Ivan Perišić | Borussia Dortmund | 1989-02-02 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 23 | 트란퀼로 바르네타 | Tranquillo Barnetta | FC Schalke 04 | 1985-05-22 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 24 | 앨릭스 옥슬레이드체임벌린 | Alex Oxlade-Chamberlain | Arsenal FC | 1993-08-15 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 25 | 나니 | Nani | Manchester United FC | 1986-11-17 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| RW | 26 | 프란시스코 포르티요 | Francisco Portillo | Málaga CF | 1990-06-13 | B- | — | — | source_guided_tier_not_full_three_season_review |
| ST | 1 | 로베르트 레반도프스키 | Robert Lewandowski | Borussia Dortmund | 1988-08-21 | S★† | 10 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | S★† | 8 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 3 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 | S★ | — | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 4 | 부라크 이을마즈 | Burak Yılmaz | Galatasaray AŞ | 1985-07-15 | A+† | 8 | — | source_guided_tier_not_full_three_season_review |
| ST | 5 | 로빈 판페르시 | Robin van Persie | Manchester United FC | 1983-08-06 | A+★ | — | — | source_guided_tier_not_full_three_season_review |
| ST | 6 | 마리오 만주키치 | Mario Mandžukić | FC Bayern München | 1986-05-21 | A+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 7 | 로베르토 솔다도 | Roberto Soldado | Valencia CF | 1985-05-27 | A+† | 4 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 8 | 디디에 드로그바 | Didier Drogba | Galatasaray AŞ | 1978-03-11 | A0 | — | — | source_guided_tier_not_full_three_season_review |
| ST | 9 | 잠파올로 파치니 | Giampaolo Pazzini | AC Milan | 1984-08-02 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 10 | 마리오 고메스 | Mario Gómez | FC Bayern München | 1985-07-10 | A0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 11 | 잭슨 마르티네스 | Jackson Martínez | FC Porto | 1986-10-03 | A-† | 3 | 8 | source_guided_tier_not_full_three_season_review |
| ST | 12 | 루이스 아드리아누 | Luiz Adriano | FC Shakhtar Donetsk | 1987-04-12 | A- | — | — | source_guided_tier_not_full_three_season_review |
| ST | 13 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | A-† | 5 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 14 | 곤살로 이과인 | Gonzalo Higuaín | Real Madrid CF | 1987-12-10 | A- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 15 | 하비에르 사비올라 | Javier Saviola | Málaga CF | 1981-12-11 | A- | — | — | source_guided_tier_not_full_three_season_review |
| ST | 16 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | B+† | 4 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 17 | 미르코 부치니치 | Mirko Vučinić | Juventus FC | 1983-10-01 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 18 | 세바스티안 조빈코 | Sebastian Giovinco | Juventus FC | 1987-01-26 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 19 | 올리비에 지루 | Olivier Giroud | Arsenal FC | 1986-09-30 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 20 | 파비오 콸리아렐라 | Fabio Quagliarella | Juventus FC | 1983-01-31 | B+† | 4 | — | direct_2012_13_UCL_fact_not_full_three_season_review |
| ST | 21 | 하비에르 에르난데스 | Javier Hernández | Manchester United FC | 1988-06-01 | B+ | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 22 | 게리 후퍼 | Gary Hooper | Celtic FC | 1988-01-26 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| ST | 23 | 우무트 불루트 | Umut Bulut | Galatasaray AŞ | 1983-03-15 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| ST | 24 | 로케 산타크루스 | Roque Santa Cruz | Málaga CF | 1981-08-16 | B+ | — | — | source_guided_tier_not_full_three_season_review |
| ST | 25 | 케뱅 가메이로 | Kevin Gameiro | Paris Saint-Germain FC | 1987-04-09 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 26 | 넬손 발데스 | Nelson Valdez | Valencia CF | 1983-11-28 | B0 | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 27 | 에두아르두 다 시우바 | Eduardo da Silva | FC Shakhtar Donetsk | 1983-02-25 | B0 | — | — | source_guided_tier_not_full_three_season_review |
| ST | 28 | 치프리안 마리카 | Ciprian Marica | FC Schalke 04 | 1985-10-02 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |
| ST | 29 | 율리안 쉬버 | Julian Schieber | Borussia Dortmund | 1989-02-13 | B- | — | — | older_domestic_proxy_DRAFT_not_verified_UCL |

## Tier distribution
| Tier | Nominees |
|---|---:|
| S | 9 |
| A+ | 39 |
| A0 | 30 |
| A- | 41 |
| B+ | 91 |
| B0 | 43 |
| B- | 21 |
| C+ | 7 |
| C0 | 1 |
| D | 1 |
World Class (S/A+): **48**; League Top Class equivalents in UCL (S/A+/A0/A-): **119**.

## Position distribution
| Position | Nominees |
|---|---:|
| GK | 27 |
| CB | 46 |
| LB | 27 |
| RB | 27 |
| DM | 25 |
| CM | 33 |
| CAM | 18 |
| LW | 25 |
| RW | 26 |
| ST | 29 |

## Incomplete historical requirements
- Individual current and preceding 2 seasons matchwise UCL starts, minutes, goals/assists and match-role comparisons for 283 players have **not** been completed; all remain tentative candidates subject to user review.
- Eligible candidate pool completeness not established. Existing 283 candidates were deliberately preserved even when one was cup-tied and Pizarro was omitted.
- Original domestic league season grades are not sufficient for UCL player tiers, and legacy tier entries not individually revised remain provisional domestic-source proxies.
- No GitHub Pages real browser verification, CI build verification or user approval was performed.

## Structural assertions made
- All 283 incumbent IDs unique; unchanged original 16 clubs, groups, fixtures, knockout, match scores and qualifier records.
- 283 born, tiers, ranks filled; every position rank 1..N without duplication, arranged by descending tier and then within-tier source-guided peer rank.
- Eleven Best XI player IDs unique, original valid candidates, slot positions matching stored primary role.

## GitHub commit IDs
- Season data commit: `cc7780b16192218f70b18c2df11bd226c6cb2c73`
- Audit report commit published with user response (cannot include own hash recursively).
