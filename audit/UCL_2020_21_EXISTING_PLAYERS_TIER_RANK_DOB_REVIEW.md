# UCL 2020-21 — 기존 288명 잠정 티어·포지션 순위·생년월일 검증 감사 보고서

**작성:** 2026-11-20 | **데이터 상태:** `draft_unapproved` | **Best XI:** `proposed_unapproved`
**JSON 데이터 커밋:** `6445cc3c9d289d2e5183b871b18c2d976be68c2b`
**대상 파일:** [data/ucl-2020-21.json](../data/ucl-2020-21.json)

## 1. 전원 감사 원칙과 검증 수준

기존 main의 players 288명을 모두 유지하고 ID, 원어명, 당시 소속 구단, 기존 `sources`, 경기/대진/참가팀 자료를 보존했다. 후보를 임의 추가·삭제하지 않았다. 구단 성적은 티어에 자동 가산하지 않으며, 2020-21 UCL을 최우선, 2019-20 두 번째, 2018-19 세 번째로 고려한다. 종전 국내 리그 DRAFT 티어는 참고에만 사용하며, UCL의 승수나 우승 여부를 개인 점수로 환산하지 않는다.

**중대한 한계:** 288명 전체에는 이전 작업에서 Statbunker의 UCL 출전·선발 수치가 저장돼 있다. 이번 실행에서는 이를 **보존/조건부 활용**했으나 288명의 선수별 Match Report를 새로 대조한 것은 아니다. UEFA 포지션별 수상 후보 12명에 대해서만 공식 개별 시즌 출전·분·공격/수비 기록을 독립 확인했고, 첼시 구단 공식 결산으로 해당 팀 17명의 출전/선발 구성도 교차 확인했다. 나머지는 기존 출전·선발 수치의 재검증이 필요하다.

**최근 두 시즌:** 2018-19/2019-20의 국내 리그 잠정 아카이브 기록을 선수별 기량 지속성에 참고했지만, 개별 UCL 전 경기 독립 감사는 수행하지 않았다. UCL 티어와 상대 순위는 명시적으로 **잠정·조건부** 평가다. `S~D` 등급은 가용 근거 기반 정성적 재평가이고 역사적 확정판이 아니다.

## 2. 작업 통계 및 무결성 검사

| 검사 항목 | 결과 |
| --- | --- |
| 기존 후보·ID 고유 인원 | 288 / 288 |
| 기존 티어·순위 입력 | 288 / 288 |
| 이번 실행에서 티어 변경 | 47 |
| 포지션 순위가 실제 바뀐 선수 | 97 |
| UEFA 2020/21 공식 시즌 상세 통계 교차 대조 | 12 |
| 첼시 공식 시즌 결산 출전·선발 기록 | 17 |
| 생년월일 verified_official | 78 |
| 생년월일 verified_secondary | 86 |
| 생년월일 corrected (근거 있는 수정) | 8 |
| 생년월일 verification_pending | 116 |
| Best XI 인원 | 11명, 중복 없음, 등록 포지션 일치 |
| UCL 전수 경기별 개인 출전 기록 | 미완료 |
| 2018-19 및 2019-20 UCL 선수별 독립 전경기 감사 | 미완료 |
| GitHub Actions CI / 실제 홈페이지 브라우저 확인 | 미실시 |

### 티어 분포
| 티어 | 변경 전 | 변경 후 |
| --- | --- | --- |
| S | 7 | 7 |
| A+ | 47 | 41 |
| A0 | 23 | 35 |
| A- | 46 | 45 |
| B+ | 100 | 90 |
| B0 | 43 | 41 |
| B- | 18 | 14 |
| C+ | 4 | 15 |
| C0 | 0 | 0 |
| C- | 0 | 0 |
| D | 0 | 0 |

### 포지션별 인원
| 포지션 | 선수 수 | 순위 중복/누락 |
| --- | --- | --- |
| GK | 26 | 없음 |
| CB | 51 | 없음 |
| LB | 27 | 없음 |
| RB | 26 | 없음 |
| DM | 24 | 없음 |
| CM | 39 | 없음 |
| CAM | 18 | 없음 |
| LW | 24 | 없음 |
| RW | 21 | 없음 |
| ST | 32 | 없음 |

## 3. 이번에 공식 확인한 개인 기록 (12명)

**출처:** [UEFA 2020/21 개인상 후보 통계](https://www.uefa.com/uefachampionsleague/news/026c-12fcfe8dc821-bf007e4b143d-1000--champions-league-positional-awards-why-they-were-nominated/). **주의:** 공격·수비 기여 지표에 해당하는 UEFA의 clean sheets와 goals conceded는 UEFA 페이지의 지표를 그대로 기록한 것이다. 출전·분·골·도움이 출처에 없는 항목은 0이 아니라 미확인으로 표시한다.

| 선수 | 구단 | 포지션 | UEFA 출전 | 분 | 골 | 도움 | CS | 실점 | 티어 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Robert Lewandowski | FC Bayern München | ST | 6 | 514 | 5 | 0 | 미확인 | 미확인 | S |
| Thibaut Courtois | Real Madrid CF | GK | 12 | 1080 | 미확인 | 미확인 | 4 | 14 | A+ |
| Ederson | Manchester City FC | GK | 12 | 1080 | 미확인 | 미확인 | 7 | 5 | A+ |
| Rúben Dias | Manchester City FC | CB | 11 | 970 | 미확인 | 미확인 | 6 | 5 | S |
| Kevin De Bruyne | Manchester City FC | CM | 8 | 669 | 3 | 4 | 미확인 | 미확인 | S |
| Édouard Mendy | Chelsea FC | GK | 12 | 1080 | 미확인 | 미확인 | 9 | 3 | S |
| César Azpilicueta | Chelsea FC | CB | 11 | 965 | 미확인 | 미확인 | 7 | 4 | A+ |
| Antonio Rüdiger | Chelsea FC | CB | 11 | 922 | 미확인 | 미확인 | 8 | 3 | A+ |
| Jorginho | Chelsea FC | DM | 12 | 1031 | 1 | 1 | 미확인 | 미확인 | A+ |
| N'Golo Kanté | Chelsea FC | DM | 13 | 709 | 0 | 0 | 미확인 | 미확인 | S |
| Erling Haaland | Borussia Dortmund | ST | 8 | 706 | 10 | 2 | 미확인 | 미확인 | S |
| Kylian Mbappé | Paris Saint-Germain FC | ST | 10 | 900 | 8 | 3 | 미확인 | 미확인 | S |

첼시 공식 [시즌 결산](https://www.chelseafc.com/en/news/article/chelsea-s-2020-21-champions-league-campaign-in-numbers)은 우승팀 13경기 출장 분포 및 개인 기록을 별도 제시한다. 조르지뉴 12선발, 멘디 12선발, 아스필리쿠에타 11선발, 뤼디거 10+1출전, 마운트 9+2출전 등 원본 데이터와의 교차 점검에 활용했다.

## 4. 기존 티어 변경 전원 (47명)

판단은 주요 [UEFA 기술진 23인 명단](https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--uefa-champions-league-squad-of-the-season/), [UEFA 포지션별 수상 결과](https://www.uefa.com/news-media/news/026c-1317cd5fc4fe-da499c3260cc-1000--uefa-awards-jorginho-putellas-triumph/), [UEFA 수상 후보 개인 기록](https://www.uefa.com/uefachampionsleague/news/026c-12fcfe8dc821-bf007e4b143d-1000--champions-league-positional-awards-why-they-were-nominated/), 구단 공식 자료와 기존 출전 데이터의 기여 대비를 바탕으로 한 **조건부 정성 평가**다.

| 포지션 | 한글 이름 | 원어명 | 소속 구단 | 기존 | 변경 | 변경 근거 |
| --- | --- | --- | --- | --- | --- | --- |
| GK | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | S | A+ | UCL 8경기, UEFA GK 2020/21 포지션 개인상 후보 3인에는 들지 못함. 기존 S는 개인상·대회 내 성과와 비교해 과중; A+로 조정. |
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | B0 | C+ | UCL 선발 1경기; 현재 시즌의 제한적 출전량을 반영. 과거 명성만으로 B0 유지하지 않음. |
| GK | 토마스 스트라코샤 | Thomas Strakosha | SS Lazio | B0 | C+ | UCL 선발 1경기; 시즌 영향력 제한. 자료 부재를 부진으로 평가하지 않음. |
| GK | 잭 스테픈 | Zack Steffen | Manchester City FC | B0 | C+ | UCL 선발 1경기; 골키퍼 주전 아닌 제한적인 사용. |
| GK | 디오구 코스타 | Diogo Costa | FC Porto | B- | C+ | UCL 선발 1경기; 미래 실력을 소급하지 않음. |
| GK | 케파 아리사발라가 | Kepa Arrizabalaga | Chelsea FC | B- | C+ | 첼시 공식 기록 UCL 1경기 출전. 교체 자원으로 시즌 기여 제한; B- 부진 평가 대신 C+. |
| CB | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | A- | A+ | UEFA 수비수상 득표 2위(115점), UCL 11경기 965분, 첼시 수비진 핵심. A-는 낮음. |
| CB | 프란체스코 아체르비 | Francesco Acerbi | SS Lazio | A+ | A0 | UCL 8경기 모두 선발했지만 대회 전체 수비수 최상위 명단에서 제외. A+의 대체불가능성 근거 부족, A0로 보정. |
| CB | 스테판 사비치 | Stefan Savić | Club Atlético de Madrid | A+ | A0 | UCL 8경기 선발의 안정성은 인정하되 A+를 뒷받침할 대회 최고 수비 임팩트는 부족. |
| CB | 샹셀 음벰바 | Chancel Mbemba | FC Porto | B+ | A- | UCL 10경기 전경기 선발, 포르투 수비의 지속성과 대인 방어 기여를 B+보다 높게 평가. |
| CB | 빌리 오르반 | Willi Orbán | RB Leipzig | A0 | B+ | UCL 6경기 중 선발 3회; A0 유지 근거 불충분, 수비 로테이션 및 개인 경기 영향 반영. |
| CB | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | B+ | B0 | UCL 선발 3경기. 높은 수비 능력을 감안하되 UCL 단기 출전 영향은 제한적. |
| CB | 루카스 클로스터만 | Lukas Klostermann | RB Leipzig | B+ | B0 | UCL 선발 2경기. B+ 확고한 주전 평가가 현 시즌 UCL 기여와 일치하지 않아 B0. |
| LB | 로빈 고젠스 | Robin Gosens | Atalanta BC | A+ | A0 | UCL 7경기 선발. 왼쪽 윙백의 전진 기여 인정하나 A+급 대회 수비수상 수준 근거 부족. |
| LB | 조르디 알바 | Jordi Alba | FC Barcelona | A+ | A0 | UCL 7경기 중 6선발. 팀 내 측면 공격 핵심이지만 이 시즌 UCL 최정상 차별성은 A0에 가깝다. |
| LB | 페를랑 멘디 | Ferland Mendy | Real Madrid CF | A- | A0 | UCL 11경기 선발, 적극적 측면 수비와 연결. 기존 A-에서 A0. |
| LB | 앤드루 로버트슨 | Andrew Robertson | Liverpool FC | A- | A0 | UCL 10경기 8선발, 공격 전개·왕복 움직임의 꾸준함, 직전 2시즌 UCL 활약 지속성 고려. |
| LB | 자이두 사누시 | Zaidu Sanusi | FC Porto | B+ | A- | UCL 10경기 선발의 대인 수비·측면 기여가 높은 편이며, B+보다 상향이 타당. |
| LB | 뤼카 에르난데스 | Lucas Hernández | FC Bayern München | B+ | A- | UCL 10경기 7선발, 여러 수비 역할 수행. B+보다 안정적 영향력. |
| LB | 마르셀루 | Marcelo | Real Madrid CF | B0 | C+ | UCL 2경기 선발, 장기 명성을 적용하지 않고 제한적 참여로 분류. |
| LB | 마르코스 알론소 | Marcos Alonso | Chelsea FC | B0 | C+ | UCL 2경기 선발. 이번 시즌 대회 기여 범위 제한. |
| LB | 벵자맹 멘디 | Benjamin Mendy | Manchester City FC | B- | C+ | UCL 1경기 선발로 제한적인 사용. B-는 실제 부진의 근거를 요구하므로 C+. |
| RB | 요아킴 멜레 | Joakim Mæhle | Atalanta BC | B+ | B0 | UCL 2경기 선발. B+ 붙박이 핵심 등급보다 B0가 현재 출전 위상에 부합. |
| DM | 조르지뉴 | Jorginho | Chelsea FC | A- | A+ | UEFA 올해의 UCL 미드필더 3위(149점), 12경기 1031분 1골 1도움. 첼시 후방 전개·위치 조율의 핵심. |
| DM | 이드리사 게예 | Idrissa Gueye | Paris Saint-Germain FC | A- | A0 | UCL 10경기 7선발, 중원 압박·전환 역할을 감안해 A-에서 A0로 잠정 상향. |
| DM | 하비 마르티네스 | Javi Martínez | FC Bayern München | B- | C+ | UCL 8경기지만 선발 단 1회. B- 부진보다는 제한적 교체 역할에 맞춰 분류. |
| CM | 케빈 더브라위너 | Kevin De Bruyne | Manchester City FC | A+ | S | UEFA 2020/21 UCL 미드필더 2위, 8경기 669분 3골 4도움; 2019/20 미드필더상 수상과 최근 3시즌 연속 창조성. S 잠정. |
| CM | 세르지우 올리베이라 | Sérgio Oliveira | FC Porto | A- | A+ | UEFA 기술진 23인 포함, UCL 8경기 7선발 5골, 유벤투스 상대 결정적 골 등 강한 개인 공격 기여. |
| CM | 루이스 알베르토 | Luis Alberto | SS Lazio | A+ | A0 | UCL 6경기 선발. A+ 대회 최상위 근거는 부족하나 핵심 창조성에 A0. |
| CM | 주드 벨링엄 | Jude Bellingham | Borussia Dortmund | B+ | A- | UCL 10경기 8선발, 맨시티와의 토너먼트에서 보여준 전진·압박 기여. B+보다 상향. |
| CAM | 카이 하베르츠 | Kai Havertz | Chelsea FC | A- | A0 | UCL 12경기 9선발, 결승 득점 포함 전방 압박·공간 연결; A-에서 A0. |
| CAM | 루슬란 말리노우스키 | Ruslan Malinovskyi | Atalanta BC | A+ | B0 | UCL 4경기 선발 1회. A+ 대체불가 핵심의 UCL 근거 부족, 개인 기술을 인정하되 B0. |
| LW | 티모 베르너 | Timo Werner | Chelsea FC | B+ | A0 | UCL 12경기 10선발 4골, 공간 침투와 전방 움직임은 득점 이상의 의미. B+에서 A0. |
| LW | 야니크 카라스코 | Yannick Carrasco | Club Atlético de Madrid | A0 | A- | UCL 5경기 선발의 측면 역습 기여는 인정하지만 A0 이상 꾸준한 대회 기여 근거는 제한적. |
| LW | 비니시우스 주니오르 | Vinícius Júnior | Real Madrid CF | B+ | A- | UCL 12경기 8선발, 리버풀과의 8강 경기 등 주목할 전진 드리블·득점 기여. B+에서 A-. |
| LW | 라힘 스털링 | Raheem Sterling | Manchester City FC | B+ | A- | UCL 11경기 7선발, 압박·드리블의 지속적 기여. B+보다 소폭 상향. |
| LW | 크리스천 풀리식 | Christian Pulisic | Chelsea FC | B0 | A- | UCL 10경기 4선발, 레알 마드리드 준결승 1차전 득점·2차전 도움 등 토너먼트 기여로 B0에서 A-. |
| RW | 마르코스 요렌테 | Marcos Llorente | Club Atlético de Madrid | A+ | A- | 리그에서의 높은 활약을 UCL로 자동 전이하지 않음. UCL 8경기 선발의 전방·중원 역할은 A- 수준. |
| RW | 파푸 고메스 | Papu Gómez | Sevilla FC | B+ | C+ | 겨울 이적 후 UCL 2경기 1선발. 이전 아탈란타 활약을 대회 2020/21 현재 소속 UCL 티어로 대체하지 않음. |
| RW | 파트리크 헤르만 | Patrick Herrmann | Borussia Mönchengladbach | B+ | C+ | UCL 4경기 전부 교체 출전. B+ 핵심 주전의 조건을 만족하지 않아 제한적 출전 C+. |
| ST | 두반 사파타 | Duván Zapata | Atalanta BC | A+ | A0 | UCL 8경기 6선발, 공격 포스트플레이와 압박 기여 인정하나 A+급 대회 최고 수준 근거는 제한적. |
| ST | 디오구 조타 | Diogo Jota | Liverpool FC | A- | A0 | UCL 9경기 6선발, 그룹 단계 포함 중요한 득점·침투. 직전 2시즌 상승 흐름 보조 고려. |
| ST | 알라산 플레아 | Alassane Pléa | Borussia Mönchengladbach | A- | A0 | UCL 8경기 6선발 5골, 역습·마무리의 개인 영향력을 근거로 A-에서 A0. |
| ST | 알바로 모라타 | Álvaro Morata | Juventus FC | A- | A0 | UCL 8경기 5선발 6골, 공격 생산성 우수해 A-에서 A0. |
| ST | 올리비에 지루 | Olivier Giroud | Chelsea FC | A- | A0 | UCL 8경기 2선발 6골. 세비야전 4골, 아틀레티코전 결정적 오버헤드킥 등 높은 효율; A0. |
| ST | 루이스 무리엘 | Luis Muriel | Atalanta BC | A+ | A- | UCL 7경기 5선발. 마무리 역량은 높지만 A+급 대회 내 지속적 지배력 입증은 불충분. |
| ST | 모이스 킨 | Moise Kean | Paris Saint-Germain FC | A0 | B+ | UCL 9경기 4선발. 효율적 로테이션 득점 기여 인정하나 A0급 붙박이 주전은 아님. |

## 5. World Class 및 Competition Top Class — 잠정 명단

**World Class (S + A+): 48명**

**S (7명):** 에두아르 멘디 (Édouard Mendy, Chelsea FC, GK 1위); 후벵 디아스 (Rúben Dias, Manchester City FC, CB 1위); 은골로 캉테 (N'Golo Kanté, Chelsea FC, DM 1위); 케빈 더브라위너 (Kevin De Bruyne, Manchester City FC, CM 1위); 엘링 홀란 (Erling Haaland, Borussia Dortmund, ST 1위); 킬리안 음바페 (Kylian Mbappé, Paris Saint-Germain FC, ST 2위); 로베르트 레반도프스키 (Robert Lewandowski, FC Bayern München, ST 3위)
**A+ (41명):** 에데르송 (Ederson, Manchester City FC, GK 2위); 티보 쿠르투아 (Thibaut Courtois, Real Madrid CF, GK 3위); 케일러 나바스 (Keylor Navas, Paris Saint-Germain FC, GK 4위); 얀 오블라크 (Jan Oblak, Club Atlético de Madrid, GK 5위); 마누엘 노이어 (Manuel Neuer, FC Bayern München, GK 6위); 세사르 아스필리쿠에타 (César Azpilicueta, Chelsea FC, CB 2위); 안토니오 뤼디거 (Antonio Rüdiger, Chelsea FC, CB 3위); 마르키뉴스 (Marquinhos, Paris Saint-Germain FC, CB 4위); 다비드 알라바 (David Alaba, FC Bayern München, CB 5위); 마츠 훔멜스 (Mats Hummels, Borussia Dortmund, CB 6위); 존 스톤스 (John Stones, Manchester City FC, CB 7위); 크리스티안 로메로 (Cristian Romero, Atalanta BC, CB 8위); 다요 우파메카노 (Dayot Upamecano, RB Leipzig, CB 9위); 벤 칠웰 (Ben Chilwell, Chelsea FC, LB 1위); 카일 워커 (Kyle Walker, Manchester City FC, RB 1위); 주앙 칸셀루 (João Cancelo, Manchester City FC, RB 2위); 후안 콰드라도 (Juan Cuadrado, Juventus FC, RB 3위); 조르지뉴 (Jorginho, Chelsea FC, DM 2위); 카세미루 (Casemiro, Real Madrid CF, DM 3위); 요주아 키미히 (Joshua Kimmich, FC Bayern München, DM 4위); 코케 (Koke, Club Atlético de Madrid, DM 5위); 일카이 귄도안 (İlkay Gündoğan, Manchester City FC, CM 2위); 루카 모드리치 (Luka Modrić, Real Madrid CF, CM 3위); 세르지우 올리베이라 (Sérgio Oliveira, FC Porto, CM 4위); 토니 크로스 (Toni Kroos, Real Madrid CF, CM 5위); 레온 고레츠카 (Leon Goretzka, FC Bayern München, CM 6위); 세르게이 밀린코비치사비치 (Sergej Milinković-Savić, SS Lazio, CM 7위); 프렝키 더 용 (Frenkie de Jong, FC Barcelona, CM 8위); 마르코 베라티 (Marco Verratti, Paris Saint-Germain FC, CM 9위); 메이슨 마운트 (Mason Mount, Chelsea FC, CAM 1위); 토마스 뮐러 (Thomas Müller, FC Bayern München, CAM 2위); 네이마르 (Neymar, Paris Saint-Germain FC, LW 1위); 필 포든 (Phil Foden, Manchester City FC, LW 2위); 페데리코 키에사 (Federico Chiesa, Juventus FC, LW 3위); 리야드 마레즈 (Riyad Mahrez, Manchester City FC, RW 1위); 리오넬 메시 (Lionel Messi, FC Barcelona, RW 2위); 모하메드 살라 (Mohamed Salah, Liverpool FC, RW 3위); 앙헬 디마리아 (Ángel Di María, Paris Saint-Germain FC, RW 4위); 카림 벤제마 (Karim Benzema, Real Madrid CF, ST 4위); 치로 임모빌레 (Ciro Immobile, SS Lazio, ST 5위); 크리스티아누 호날두 (Cristiano Ronaldo dos Santos Aveiro, Juventus FC, ST 6위)

**Competition Top Class (S + A+ + A0 + A-): 128명**

Competition Top Class에는 위 World Class 전체가 포함되며, 다음 A0 및 A- 선수를 추가한 명단이다.

**A0 (35명):** 페테르 굴라치 (Péter Gulácsi, RB Leipzig, GK 7위); 보이치에흐 슈쳉스니 (Wojciech Szczęsny, Juventus FC, GK 8위); 마르크안드레 테어 슈테겐 (Marc-André ter Stegen, FC Barcelona, GK 9위); 프란체스코 아체르비 (Francesco Acerbi, SS Lazio, CB 10위); 스테판 사비치 (Stefan Savić, Club Atlético de Madrid, CB 11위); 라파엘 바란 (Raphaël Varane, Real Madrid CF, CB 12위); 하파에우 톨로이 (Rafael Tolói, Atalanta BC, CB 13위); 쥘 쿤데 (Jules Koundé, Sevilla FC, CB 14위); 페페 (Pepe, FC Porto, CB 15위); 로빈 고젠스 (Robin Gosens, Atalanta BC, LB 2위); 조르디 알바 (Jordi Alba, FC Barcelona, LB 3위); 하파엘 게헤이루 (Raphaël Guerreiro, Borussia Dortmund, LB 4위); 앙헬리뇨 (Angeliño, RB Leipzig, LB 5위); 알폰소 데이비스 (Alphonso Davies, FC Bayern München, LB 6위); 페를랑 멘디 (Ferland Mendy, Real Madrid CF, LB 7위); 앤드루 로버트슨 (Andrew Robertson, Liverpool FC, LB 8위); 트렌트 알렉산더아널드 (Trent Alexander-Arnold, Liverpool FC, RB 4위); 키어런 트리피어 (Kieran Trippier, Club Atlético de Madrid, RB 5위); 헤수스 나바스 (Jesús Navas, Sevilla FC, RB 6위); 로드리 (Rodri, Manchester City FC, DM 6위); 세르히오 부스케츠 (Sergio Busquets, FC Barcelona, DM 7위); 이드리사 게예 (Idrissa Gueye, Paris Saint-Germain FC, DM 8위); 루이스 알베르토 (Luis Alberto, SS Lazio, CM 10위); 페드리 (Pedri, FC Barcelona, CM 11위); 마르코 로이스 (Marco Reus, Borussia Dortmund, CAM 3위); 다니 올모 (Dani Olmo, RB Leipzig, CAM 4위); 카이 하베르츠 (Kai Havertz, Chelsea FC, CAM 5위); 티모 베르너 (Timo Werner, Chelsea FC, LW 4위); 제이든 산초 (Jadon Sancho, Borussia Dortmund, RW 5위); 두반 사파타 (Duván Zapata, Atalanta BC, ST 7위); 유세프 엔네시리 (Youssef En-Nesyri, Sevilla FC, ST 8위); 디오구 조타 (Diogo Jota, Liverpool FC, ST 9위); 알라산 플레아 (Alassane Pléa, Borussia Mönchengladbach, ST 10위); 알바로 모라타 (Álvaro Morata, Juventus FC, ST 11위); 올리비에 지루 (Olivier Giroud, Chelsea FC, ST 12위)
**A- (45명):** 얀 조머 (Yann Sommer, Borussia Mönchengladbach, GK 10위); 알리송 베케르 (Alisson Becker, Liverpool FC, GK 11위); 야신 부누 (Yassine Bounou, Sevilla FC, GK 12위); 프레스넬 킴펨베 (Presnel Kimpembe, Paris Saint-Germain FC, CB 16위); 디에구 카를루스 (Diego Carlos, Sevilla FC, CB 17위); 마티아스 긴터 (Matthias Ginter, Borussia Mönchengladbach, CB 18위); 치아구 실바 (Thiago Silva, Chelsea FC, CB 19위); 레오나르도 보누치 (Leonardo Bonucci, Juventus FC, CB 20위); 세르히오 라모스 (Sergio Ramos, Real Madrid CF, CB 21위); 마테이스 더리흐트 (Matthijs de Ligt, Juventus FC, CB 22위); 마리오 에르모소 (Mario Hermoso, Club Atlético de Madrid, CB 23위); 샹셀 음벰바 (Chancel Mbemba, FC Porto, CB 24위); 아담 마루시치 (Adam Marušić, SS Lazio, LB 9위); 다닐루 (Danilo Luiz da Silva, Juventus FC, LB 10위); 라미 벤세바이니 (Ramy Bensebaini, Borussia Mönchengladbach, LB 11위); 마르코스 아쿠냐 (Marcos Acuña, Sevilla FC, LB 12위); 자이두 사누시 (Zaidu Sanusi, FC Porto, LB 13위); 뤼카 에르난데스 (Lucas Hernández, FC Bayern München, LB 14위); 루카스 바스케스 (Lucas Vázquez, Real Madrid CF, RB 7위); 슈테판 라이너 (Stefan Lainer, Borussia Mönchengladbach, RB 8위); 리스 제임스 (Reece James, Chelsea FC, RB 9위); 마누엘 라차리 (Manuel Lazzari, SS Lazio, RB 10위); 페르난두 (Fernando, Sevilla FC, DM 9위); 마르턴 더 론 (Marten de Roon, Atalanta BC, DM 10위); 데니스 자카리아 (Denis Zakaria, Borussia Mönchengladbach, DM 11위); 베르나르두 실바 (Bernardo Silva, Manchester City FC, CM 12위); 플로리안 노이하우스 (Florian Neuhaus, Borussia Mönchengladbach, CM 13위); 레모 프로일러 (Remo Freuler, Atalanta BC, CM 14위); 마르셀 자비처 (Marcel Sabitzer, RB Leipzig, CM 15위); 주드 벨링엄 (Jude Bellingham, Borussia Dortmund, CM 16위); 오타비우 (Otávio, FC Porto, CAM 6위); 야니크 카라스코 (Yannick Carrasco, Club Atlético de Madrid, LW 5위); 마르퀴스 튀람 (Marcus Thuram, Borussia Mönchengladbach, LW 6위); 킹슬리 코망 (Kingsley Coman, FC Bayern München, LW 7위); 루카스 오캄포스 (Lucas Ocampos, Sevilla FC, LW 8위); 비니시우스 주니오르 (Vinícius Júnior, Real Madrid CF, LW 9위); 라힘 스털링 (Raheem Sterling, Manchester City FC, LW 10위); 크리스천 풀리식 (Christian Pulisic, Chelsea FC, LW 11위); 마르코스 요렌테 (Marcos Llorente, Club Atlético de Madrid, RW 6위); 헤수스 코로나 (Jesús Corona, FC Porto, RW 7위); 세르주 그나브리 (Serge Gnabry, FC Bayern München, RW 8위); 요시프 일리치치 (Josip Iličić, Atalanta BC, RW 9위); 루이스 무리엘 (Luis Muriel, Atalanta BC, ST 13위); 앙투안 그리즈만 (Antoine Griezmann, FC Barcelona, ST 14위); 루이스 수아레스 (Luis Suárez, Club Atlético de Madrid, ST 15위)

## 6. Best XI 전후 비교

**포메이션 4-2-3-1, 11명 전체 유지.** 현재 UEFA 2020-21 포지션별 수상자(멘디·후벵 디아스·캉테·홀란)와 핵심 창조·공격 기여(더브라위너·마레즈·네이마르·마운트)를 고려하면 종전 XI 전체를 교체해야 할 충분한 확인 자료가 없다. 우승팀 선수라는 이유로 자동 유지한 것은 아니며, 3시즌 전 경기 독립 감사 전까지 확정하지 않는다.

| XI 포지션 | 기존 선수 | 재검토 선수 | 최신 티어 | 사유 |
| --- | --- | --- | --- | --- |
| GK | Édouard Mendy | Édouard Mendy | S | UEFA 올해의 UCL 골키퍼 286점, 12경기 9클린시트 |
| RB | Kyle Walker | Kyle Walker | A+ | 포지션·전술 적합성 및 당해 시즌 개인 역할, 기존 잠정 자료 |
| CB | Rúben Dias | Rúben Dias | S | UEFA UCL 수비수상 217점, 11경기 |
| CB | Antonio Rüdiger | Antonio Rüdiger | A+ | UEFA UCL 개인 기록 및 기술진 평가 |
| LB | Ben Chilwell | Ben Chilwell | A+ | 포지션·전술 적합성 및 당해 시즌 개인 역할, 기존 잠정 자료 |
| DM | N'Golo Kanté | N'Golo Kanté | S | UEFA UCL 미드필더상 263점, 13경기 |
| CM | Kevin De Bruyne | Kevin De Bruyne | S | UEFA UCL 개인 기록 및 기술진 평가 |
| CAM | Mason Mount | Mason Mount | A+ | 포지션·전술 적합성 및 당해 시즌 개인 역할, 기존 잠정 자료 |
| LW | Neymar | Neymar | A+ | 포지션·전술 적합성 및 당해 시즌 개인 역할, 기존 잠정 자료 |
| RW | Riyad Mahrez | Riyad Mahrez | A+ | 포지션·전술 적합성 및 당해 시즌 개인 역할, 기존 잠정 자료 |
| ST | Erling Haaland | Erling Haaland | S | UEFA UCL 공격수상 202점, 8경기 10골 |

**XI 전술 참고:** 실전 시즌의 첼시 3-4-2-1과 맨시티 4-3-3 등 구단 전술은 그대로 보존했으며, 통합 베스트 XI의 4-2-3-1 배열은 사이트의 표현 체계에 맞춘 잠정 제안이다. 기존 자료에서 아스필리쿠에타는 첼시 스리백의 우측 CB로 유지했고, 워커는 RB로 유지했다. 주 포지션 전 경기 검증은 미완료다.

## 7. 생년월일 외부 독립 검증

**출처 확인 규칙:** 원어명과 당시 구단을 대조한 실제 외부 선수 명부/프로필이 확인된 선수만 `verified_official` 혹은 `verified_secondary`로 기록한다. 원본의 born 필드가 정상 형식이라는 것만으로 VERIFIED 처리하지 않는다. 공식 구단·협회·DFB의 시즌 명단은 `verified_official`; FootballSquads 등 시즌 명단은 `verified_secondary`이다. 원본 값이 틀린 경우 `corrected`로 남기고 출처와 원래 값을 기록한다.

| 유형 | 명수 |
| --- | --- |
| verified_official | 78 |
| verified_secondary | 86 |
| corrected | 8 |
| verification_pending | 116 |
| 확인/정정 합계 | 172 |

### 생년월일 정정 8건
| 당시 구단 | 선수 | 정정 전 | 정정 후 | 정정 근거 |
| --- | --- | --- | --- | --- |
| FC Barcelona | Óscar Mingueza | 1992-04-30 | 1999-05-13 | [출처](https://www.fcbarcelona.com/en/news/1909470/oscar-mingueza-a-life-at-barca/amp) |
| Sevilla FC | Marcos Acuña | 1989-03-29 | 1991-10-28 | [출처](https://www.afa.com.ar/es/posts/marcos-acuna-cumple-35-anos-del-nacimiento-en-zapala-a-la-gloria-con-la-seleccion-argentina) |
| FC Barcelona | Sergiño Dest | 1992-04-30 | 2000-11-03 | [출처](https://www.fcbarcelona.com/en/football/first-team/news/2077553/present-and-future-dest) |
| FC Barcelona | Pedri | 1992-04-30 | 2002-11-25 | [출처](https://www.fcbarcelona.com/en/football/first-team/jugadores/70486/pedri) |
| FC Barcelona | Miralem Pjanić | 1992-04-30 | 1990-04-02 | [출처](https://www.fcbarcelona.com/en/football/first-team/news/1700297/fc-barcelona-sign-miralem-pjani) |
| Club Atlético de Madrid | Yannick Carrasco | 1993-01-07 | 1993-09-04 | [출처](https://www.atleticodemadrid.com/noticias/agreement-with-dalian-professional-fc-over-the-transfer-of-yannick-carrasco) |
| FC Barcelona | Francisco Trincão | 1992-04-30 | 1999-12-29 | [출처](https://www.fcbarcelona.com/en/news/1594758/agreement-with-sc-braga-for-the-transfer-of-trincao) |
| Sevilla FC | Papu Gómez | 1989-03-29 | 1988-02-15 | [출처](https://www.transfermarkt.com/papu-gomez/transfers/spieler/20005/transfer_id/3222299) |

**프로필 충돌 처리 1:** Chelsea FootballSquads 2020/21 명단에는 Jorginho를 1991-12-21로 표기하지만 [FIGC 공식 프로필](https://www.figc.it/it/full-html?path=%2Fnazionali%2Fazzurri%2Fnazionale-a-archiviato%2Fultimi-convocati%2Fjorginho)은 1991-12-20이다. 기존 1991-12-20을 공식 출처 기준 유지한다.
**프로필 충돌 처리 2:** Barcelona의 Francisco Trincão 현행 선수 프로필 일부에는 2000-12-29라는 불일치가 있지만, 구단의 2020년 [공식 영입 발표](https://www.fcbarcelona.com/en/news/1594758/agreement-with-sc-braga-for-the-transfer-of-trincao), [역사 기록](https://players.fcbarcelona.com/en/player/2774-trincao-francisco-antonio-machado-trincao)에는 1999-12-29다. 해당 시즌의 동시대 자료와 교차 증빙에 따라 1999년을 채택한다.

### 검증 보류 116명
요청한 전체 후보의 외부 확인을 시도했으나 해당 선수의 이름과 날짜를 직접 읽어 대조하지 못했거나 자료 접근에 실패한 경우 `verification_pending`이다. 확인했다고 간주하거나 출처 링크만 보고 VERIFIED 처리하지 않았다.

| 선수 | 구단 | 원본 생년월일 (미확정) | 접근 시도 자료 |
| --- | --- | --- | --- |
| Thibaut Courtois | Real Madrid CF | 1992-05-11 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Wojciech Szczęsny | Juventus FC | 1990-04-18 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Marc-André ter Stegen | FC Barcelona | 1992-04-30 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Alisson Becker | Liverpool FC | 1992-10-02 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Yassine Bounou | Sevilla FC | 1991-04-05 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Agustín Marchesín | FC Porto | 1988-03-16 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Marco Sportiello | Atalanta BC | 1992-05-10 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Pierluigi Gollini | Atalanta BC | 1995-03-18 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Neto | FC Barcelona | 1989-07-19 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Gianluigi Buffon | Juventus FC | 1978-01-28 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Diogo Costa | FC Porto | 1999-09-19 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Tomáš Vaclík | Sevilla FC | 1989-03-29 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Cristian Romero | Atalanta BC | 1998-04-27 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Raphaël Varane | Real Madrid CF | 1993-04-25 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Rafael Tolói | Atalanta BC | 1990-10-10 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Jules Koundé | Sevilla FC | 1998-11-12 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Pepe | FC Porto | 1983-02-26 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Diego Carlos | Sevilla FC | 1993-03-15 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Leonardo Bonucci | Juventus FC | 1987-05-01 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Sergio Ramos | Real Madrid CF | 1986-03-30 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Matthijs de Ligt | Juventus FC | 1999-08-12 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Chancel Mbemba | FC Porto | 1994-08-08 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Berat Djimsiti | Atalanta BC | 1993-02-19 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Nacho Fernández | Real Madrid CF | 1990-01-18 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Clément Lenglet | FC Barcelona | 1995-06-17 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Fabinho | Liverpool FC | 1993-10-23 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Gerard Piqué | FC Barcelona | 1987-02-02 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Nathaniel Phillips | Liverpool FC | 1997-03-21 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| José Luis Palomino | Atalanta BC | 1990-01-05 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Giorgio Chiellini | Juventus FC | 1984-08-14 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Malang Sarr | FC Porto | 1999-01-23 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Ozan Kabak | Liverpool FC | 2000-03-25 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Sergi Gómez | Sevilla FC | 1992-03-28 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Robin Gosens | Atalanta BC | 1994-07-05 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Jordi Alba | FC Barcelona | 1989-03-21 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Ferland Mendy | Real Madrid CF | 1995-06-08 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Andrew Robertson | Liverpool FC | 1994-03-11 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Danilo Luiz da Silva | Juventus FC | 1991-07-15 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Zaidu Sanusi | FC Porto | 1997-06-13 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Alex Sandro | Juventus FC | 1991-01-26 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Sergio Escudero | Sevilla FC | 1989-09-02 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Marcelo | Real Madrid CF | 1988-05-12 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Juan Cuadrado | Juventus FC | 1988-05-26 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Trent Alexander-Arnold | Liverpool FC | 1998-10-07 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Jesús Navas | Sevilla FC | 1985-11-21 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Lucas Vázquez | Real Madrid CF | 1991-07-01 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Wilson Manafá | FC Porto | 1994-07-23 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Hans Hateboer | Atalanta BC | 1994-01-09 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Joakim Mæhle | Atalanta BC | 1997-05-20 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Sergi Roberto | FC Barcelona | 1992-02-07 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Dani Carvajal | Real Madrid CF | 1992-01-11 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Neco Williams | Liverpool FC | 2001-04-13 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Nanú | FC Porto | 1994-05-17 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Casemiro | Real Madrid CF | 1992-02-23 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Sergio Busquets | FC Barcelona | 1988-07-16 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Fernando | Sevilla FC | 1987-07-25 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Marten de Roon | Atalanta BC | 1991-03-29 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Mateus Uribe | FC Porto | 1991-03-21 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Rodrigo Bentancur | Juventus FC | 1997-06-25 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Arthur Melo | Juventus FC | 1996-08-12 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Nemanja Gudelj | Sevilla FC | 1991-11-16 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Luka Modrić | Real Madrid CF | 1985-09-09 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Sérgio Oliveira | FC Porto | 1992-06-02 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Toni Kroos | Real Madrid CF | 1990-01-04 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Frenkie de Jong | FC Barcelona | 1997-05-12 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Remo Freuler | Atalanta BC | 1992-04-15 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Georginio Wijnaldum | Liverpool FC | 1990-11-11 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Ivan Rakitić | Sevilla FC | 1988-03-10 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Adrien Rabiot | Juventus FC | 1995-04-03 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Federico Valverde | Real Madrid CF | 1998-07-22 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Joan Jordán | Sevilla FC | 1994-07-06 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Weston McKennie | Juventus FC | 1998-08-28 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Jordan Henderson | Liverpool FC | 1990-06-17 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Mario Pašalić | Atalanta BC | 1995-02-09 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Óliver Torres | Sevilla FC | 1994-11-10 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Thiago Alcântara | Liverpool FC | 1991-04-11 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Curtis Jones | Liverpool FC | 2001-01-30 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Marko Grujić | FC Porto | 1996-04-13 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Otávio | FC Porto | 1995-02-09 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Matteo Pessina | Atalanta BC | 1997-04-21 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Ruslan Malinovskyi | Atalanta BC | 1993-05-04 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Aaron Ramsey | Juventus FC | 1990-12-26 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Fábio Vieira | FC Porto | 2000-05-30 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Federico Chiesa | Juventus FC | 1997-10-25 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Lucas Ocampos | Sevilla FC | 1994-07-11 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Vinícius Júnior | Real Madrid CF | 2000-07-12 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Sadio Mané | Liverpool FC | 1992-04-10 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Luis Díaz | FC Porto | 1997-01-13 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Ousmane Dembélé | FC Barcelona | 1997-05-15 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Munir El Haddadi | Sevilla FC | 1995-09-01 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Ansu Fati | FC Barcelona | 2002-10-31 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Eden Hazard | Real Madrid CF | 1991-01-07 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Federico Bernardeschi | Juventus FC | 1994-02-16 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Lionel Messi | FC Barcelona | 1987-06-24 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Mohamed Salah | Liverpool FC | 1992-06-15 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Jesús Corona | FC Porto | 1993-01-06 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Josip Iličić | Atalanta BC | 1988-01-29 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Marco Asensio | Real Madrid CF | 1996-01-21 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Suso | Sevilla FC | 1993-11-19 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Dejan Kulusevski | Juventus FC | 2000-04-25 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Rodrygo | Real Madrid CF | 2001-01-09 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Karim Benzema | Real Madrid CF | 1987-12-19 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |
| Cristiano Ronaldo dos Santos Aveiro | Juventus FC | 1985-02-05 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Duván Zapata | Atalanta BC | 1991-04-01 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Youssef En-Nesyri | Sevilla FC | 1997-06-01 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Diogo Jota | Liverpool FC | 1996-12-04 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Álvaro Morata | Juventus FC | 1992-10-23 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Luis Muriel | Atalanta BC | 1991-04-16 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/atalanta-bergamo) |
| Antoine Griezmann | FC Barcelona | 1991-03-21 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Moussa Marega | FC Porto | 1991-04-14 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Roberto Firmino | Liverpool FC | 1991-10-02 | [시도](https://www.footballsquads.co.uk/eng/2020-2021/engprem/liverpool.htm) |
| Paulo Dybala | Juventus FC | 1993-11-15 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/juventus-turin) |
| Mehdi Taremi | FC Porto | 1992-07-18 | [시도](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/fc-porto) |
| Luuk de Jong | Sevilla FC | 1990-08-27 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/sevilla.htm) |
| Martin Braithwaite | FC Barcelona | 1991-06-05 | [시도](https://footballsquads.co.uk/spain/2020-2021/laliga/barce.htm) |
| Mariano Díaz | Real Madrid CF | 1993-08-01 | [시도](https://www.footballsquads.co.uk/spain/2020-2021/laliga/rmadrid.htm) |

## 8. 288명 전체 포지션별 DRAFT 순위·생년월일·개인 평가 증빙

다음 288명은 실제 기존 후보를 생략하지 않고 표시한다. `UEFA 공식`=이번 실행에서 UEFA 개인 상세 수치 교차 확인, `첼시 공식`=공식 구단 시즌 출전·선발 자료 대조, `기존 Stats`=과거 Statbunker 저장 기록 재사용(이번 실행에서 독립 매치로그 미검증). 가용 자료상 미확인 공격 수치는 `미확인`으로 표시한다. 모든 선수는 기존 UCL 출전·선발 값, 해당 시즌 역할, 기존 두 시즌 국내리그 DRAFT 참고 기록, 기술진 선정 여부 등을 평가에 고려했지만 **3시즌 UCL 전 경기 독립 검증 미완료**이다.

### GK (26명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 에두아르 멘디 | Édouard Mendy | Chelsea FC | 1992-03-01 | S | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 12/12 | UEFA 공식 | UEFA 12경기·1080분. UCL 12경기·12선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 에데르송 | Ederson | Manchester City FC | 1993-08-17 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 12/12 | UEFA 공식 | UEFA 12경기·1080분. UCL 12경기·12선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 3 | 티보 쿠르투아 | Thibaut Courtois | Real Madrid CF | 1992-05-11 | A+ | 보류 | 12/12 | UEFA 공식 | UEFA 12경기·1080분. UCL 12경기·12선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 4 | 케일러 나바스 | Keylor Navas | Paris Saint-Germain FC | 1986-12-15 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 12/12 | 기존 Stats | UCL 12경기·12선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 5 | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | 1993-01-07 | A+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/8 | 기존 Stats | UCL 8경기, UEFA GK 2020/21 포지션 개인상 후보 3인에는 들지 못함. 기존 S는 개인상·대회 내 성과와 비교해 과중; A+로 조정. |
| 6 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 페테르 굴라치 | Péter Gulácsi | RB Leipzig | 1990-05-06 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus FC | 1990-04-18 | A0 | 보류 | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 마르크안드레 테어 슈테겐 | Marc-André ter Stegen | FC Barcelona | 1992-04-30 | A0 | 보류 | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 얀 조머 | Yann Sommer | Borussia Mönchengladbach | 1988-12-17 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 11 | 알리송 베케르 | Alisson Becker | Liverpool FC | 1992-10-02 | A- | 보류 | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 야신 부누 | Yassine Bounou | Sevilla FC | 1991-04-05 | A- | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 아구스틴 마르체신 | Agustín Marchesín | FC Porto | 1988-03-16 | B+ | 보류 | 9/9 | 기존 Stats | UCL 9경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 페페 레이나 | Pepe Reina | SS Lazio | 1982-08-31 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 마르코 스포르티엘로 | Marco Sportiello | Atalanta BC | 1992-05-10 | B+ | 보류 | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 피에를루이지 골리니 | Pierluigi Gollini | Atalanta BC | 1995-03-18 | B+ | 보류 | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 마르빈 히츠 | Marwin Hitz | Borussia Dortmund | 1987-09-18 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 로만 뷔르키 | Roman Bürki | Borussia Dortmund | 1990-11-14 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 4/4 | 기존 Stats | UCL 4경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 네투 | Neto | FC Barcelona | 1989-07-19 | B- | 보류 | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | C+ | 보류 | 1/1 | 기존 Stats | UCL 선발 1경기; 현재 시즌의 제한적 출전량을 반영. 과거 명성만으로 B0 유지하지 않음. |
| 21 | 토마스 스트라코샤 | Thomas Strakosha | SS Lazio | 1995-03-19 | C+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 1/1 | 기존 Stats | UCL 선발 1경기; 시즌 영향력 제한. 자료 부재를 부진으로 평가하지 않음. |
| 22 | 잭 스테픈 | Zack Steffen | Manchester City FC | 1995-04-02 | C+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 1/1 | 기존 Stats | UCL 선발 1경기; 골키퍼 주전 아닌 제한적인 사용. |
| 23 | 디오구 코스타 | Diogo Costa | FC Porto | 1999-09-19 | C+ | 보류 | 1/1 | 기존 Stats | UCL 선발 1경기; 미래 실력을 소급하지 않음. |
| 24 | 케파 아리사발라가 | Kepa Arrizabalaga | Chelsea FC | 1994-10-03 | C+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 1/1 | 첼시 공식 | 첼시 공식 기록 UCL 1경기 출전. 교체 자원으로 시즌 기여 제한; B- 부진 평가 대신 C+. |
| 25 | 알렉산더 뉘벨 | Alexander Nübel | FC Bayern München | 1996-09-30 | C+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 2/2 | 기존 Stats | UCL 2경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 26 | 토마시 바츨리크 | Tomáš Vaclík | Sevilla FC | 1989-03-29 | C+ | 보류 | 2/2 | 기존 Stats | UCL 2경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

### CB (51명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 후벵 디아스 | Rúben Dias | Manchester City FC | 1997-05-14 | S | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 11/11 | UEFA 공식 | UEFA 11경기·970분. UCL 11경기·11선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 11/11 | UEFA 공식 | UEFA 11경기·965분. UEFA 수비수상 득표 2위(115점), UCL 11경기 965분, 첼시 수비진 핵심. A-는 낮음. |
| 3 | 안토니오 뤼디거 | Antonio Rüdiger | Chelsea FC | 1993-03-03 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 11/10 | UEFA 공식 | UEFA 11경기·922분. UCL 11경기·10선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 4 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/10 | 기존 Stats | UCL 10경기·10선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 5 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 9/9 | 기존 Stats | UCL 9경기·9선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 6 | 마츠 훔멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 9/9 | 기존 Stats | UCL 9경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 존 스톤스 | John Stones | Manchester City FC | 1994-05-28 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 11/8 | 기존 Stats | UCL 11경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 크리스티안 로메로 | Cristian Romero | Atalanta BC | 1998-04-27 | A+ | 보류 | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 다요 우파메카노 | Dayot Upamecano | RB Leipzig | 1998-10-27 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 프란체스코 아체르비 | Francesco Acerbi | SS Lazio | 1988-02-10 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 8/8 | 기존 Stats | UCL 8경기 모두 선발했지만 대회 전체 수비수 최상위 명단에서 제외. A+의 대체불가능성 근거 부족, A0로 보정. |
| 11 | 스테판 사비치 | Stefan Savić | Club Atlético de Madrid | 1991-01-08 | A0 | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/8 | 기존 Stats | UCL 8경기 선발의 안정성은 인정하되 A+를 뒷받침할 대회 최고 수비 임팩트는 부족. |
| 12 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 | A0 | 보류 | 9/9 | 기존 Stats | UCL 9경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 하파에우 톨로이 | Rafael Tolói | Atalanta BC | 1990-10-10 | A0 | 보류 | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 쥘 쿤데 | Jules Koundé | Sevilla FC | 1998-11-12 | A0 | 보류 | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 페페 | Pepe | FC Porto | 1983-02-26 | A0 | 보류 | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 프레스넬 킴펨베 | Presnel Kimpembe | Paris Saint-Germain FC | 1995-08-13 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 11/11 | 기존 Stats | UCL 11경기·11선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 디에구 카를루스 | Diego Carlos | Sevilla FC | 1993-03-15 | A- | 보류 | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 마티아스 긴터 | Matthias Ginter | Borussia Mönchengladbach | 1994-01-19 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 치아구 실바 | Thiago Silva | Chelsea FC | 1984-09-22 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 8/7 | 첼시 공식 | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | A- | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | A- | 보류 | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 마테이스 더리흐트 | Matthijs de Ligt | Juventus FC | 1999-08-12 | A- | 보류 | 4/4 | 기존 Stats | UCL 4경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 마리오 에르모소 | Mario Hermoso | Club Atlético de Madrid | 1995-06-18 | A- | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 6/3 | 기존 Stats | UCL 6경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 샹셀 음벰바 | Chancel Mbemba | FC Porto | 1994-08-08 | A- | 보류 | 10/10 | 기존 Stats | UCL 10경기 전경기 선발, 포르투 수비의 지속성과 대인 방어 기여를 B+보다 높게 평가. |
| 25 | 빌리 오르반 | Willi Orbán | RB Leipzig | 1992-11-03 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 6/3 | 기존 Stats | UCL 6경기 중 선발 3회; A0 유지 근거 불충분, 수비 로테이션 및 개인 경기 영향 반영. |
| 26 | 베라트 짐시티 | Berat Djimsiti | Atalanta BC | 1993-02-19 | B+ | 보류 | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 27 | 나초 페르난데스 | Nacho Fernández | Real Madrid CF | 1990-01-18 | B+ | 보류 | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 28 | 클레망 랑글레 | Clément Lenglet | FC Barcelona | 1995-06-17 | B+ | 보류 | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 29 | 파비뉴 | Fabinho | Liverpool FC | 1993-10-23 | B+ | 보류 | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 30 | 마누엘 아칸지 | Manuel Akanji | Borussia Dortmund | 1995-07-19 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 31 | 니코 엘베디 | Nico Elvedi | Borussia Mönchengladbach | 1996-09-30 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 32 | 압두 디알로 | Abdou Diallo | Paris Saint-Germain FC | 1996-05-04 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 8/6 | 기존 Stats | UCL 8경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 33 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 34 | 니클라스 쥘레 | Niklas Süle | FC Bayern München | 1995-09-03 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 35 | 엠레 잔 | Emre Can | Borussia Dortmund | 1994-01-12 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 6/5 | 기존 Stats | UCL 6경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 36 | 호세 마리아 히메네스 | José María Giménez | Club Atlético de Madrid | 1995-01-20 | B+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 4/4 | 기존 Stats | UCL 4경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 37 | 오스카르 밍게사 | Óscar Mingueza | FC Barcelona | 1999-05-13 | B+ | 정정 [출처](https://www.fcbarcelona.com/en/news/1909470/oscar-mingueza-a-life-at-barca/amp) | 5/3 | 기존 Stats | UCL 5경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 38 | 에므리크 라포르트 | Aymeric Laporte | Manchester City FC | 1994-05-27 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 4/3 | 기존 Stats | UCL 4경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 39 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | B+ | 보류 | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 40 | 너새니얼 필립스 | Nathaniel Phillips | Liverpool FC | 1997-03-21 | B+ | 보류 | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 41 | 호세 루이스 팔로미노 | José Luis Palomino | Atalanta BC | 1990-01-05 | B+ | 보류 | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 42 | 루이스 펠리피 | Luiz Felipe | SS Lazio | 1997-03-22 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 4/2 | 기존 Stats | UCL 4경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 43 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 | B0 | 보류 | 3/3 | 기존 Stats | UCL 선발 3경기. 높은 수비 능력을 감안하되 UCL 단기 출전 영향은 제한적. |
| 44 | 루카스 클로스터만 | Lukas Klostermann | RB Leipzig | 1996-06-03 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 2/2 | 기존 Stats | UCL 선발 2경기. B+ 확고한 주전 평가가 현 시즌 UCL 기여와 일치하지 않아 B0. |
| 45 | 파트리크 가바론 | Patric Gabarrón | SS Lazio | 1993-04-17 | B0 | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 46 | 웨슬리 후트 | Wesley Hoedt | SS Lazio | 1994-03-06 | B0 | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 47 | 이브라히마 코나테 | Ibrahima Konaté | RB Leipzig | 1999-05-25 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 6/5 | 기존 Stats | UCL 6경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 48 | 말랑 사르 | Malang Sarr | FC Porto | 1999-01-23 | B0 | 보류 | 5/4 | 기존 Stats | UCL 5경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 49 | 토니 얀치케 | Tony Jantschke | Borussia Mönchengladbach | 1990-04-07 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 3/1 | 기존 Stats | UCL 3경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 50 | 오잔 카바크 | Ozan Kabak | Liverpool FC | 2000-03-25 | B- | 보류 | 4/4 | 기존 Stats | UCL 4경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 51 | 세르지 고메스 | Sergi Gómez | Sevilla FC | 1992-03-28 | B- | 보류 | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

### LB (27명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 벤 칠웰 | Ben Chilwell | Chelsea FC | 1996-12-21 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 10/9 | 첼시 공식 | UCL 10경기·9선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 로빈 고젠스 | Robin Gosens | Atalanta BC | 1994-07-05 | A0 | 보류 | 7/7 | 기존 Stats | UCL 7경기 선발. 왼쪽 윙백의 전진 기여 인정하나 A+급 대회 수비수상 수준 근거 부족. |
| 3 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | A0 | 보류 | 7/6 | 기존 Stats | UCL 7경기 중 6선발. 팀 내 측면 공격 핵심이지만 이 시즌 UCL 최정상 차별성은 A0에 가깝다. |
| 4 | 하파엘 게헤이루 | Raphaël Guerreiro | Borussia Dortmund | 1993-12-22 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 5 | 앙헬리뇨 | Angeliño | RB Leipzig | 1997-01-04 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 6 | 알폰소 데이비스 | Alphonso Davies | FC Bayern München | 2000-11-02 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 6/3 | 기존 Stats | UCL 6경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 페를랑 멘디 | Ferland Mendy | Real Madrid CF | 1995-06-08 | A0 | 보류 | 11/11 | 기존 Stats | UCL 11경기 선발, 적극적 측면 수비와 연결. 기존 A-에서 A0. |
| 8 | 앤드루 로버트슨 | Andrew Robertson | Liverpool FC | 1994-03-11 | A0 | 보류 | 10/8 | 기존 Stats | UCL 10경기 8선발, 공격 전개·왕복 움직임의 꾸준함, 직전 2시즌 UCL 활약 지속성 고려. |
| 9 | 아담 마루시치 | Adam Marušić | SS Lazio | 1992-10-17 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 다닐루 | Danilo Luiz da Silva | Juventus FC | 1991-07-15 | A- | 보류 | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 11 | 라미 벤세바이니 | Ramy Bensebaini | Borussia Mönchengladbach | 1995-04-16 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 마르코스 아쿠냐 | Marcos Acuña | Sevilla FC | 1991-10-28 | A- | 정정 [출처](https://www.afa.com.ar/es/posts/marcos-acuna-cumple-35-anos-del-nacimiento-en-zapala-a-la-gloria-con-la-seleccion-argentina) | 4/3 | 기존 Stats | UCL 4경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 자이두 사누시 | Zaidu Sanusi | FC Porto | 1997-06-13 | A- | 보류 | 10/10 | 기존 Stats | UCL 10경기 선발의 대인 수비·측면 기여가 높은 편이며, B+보다 상향이 타당. |
| 14 | 뤼카 에르난데스 | Lucas Hernández | FC Bayern München | 1996-02-14 | A- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 10/7 | 기존 Stats | UCL 10경기 7선발, 여러 수비 역할 수행. B+보다 안정적 영향력. |
| 15 | 올렉산드르 진첸코 | Oleksandr Zinchenko | Manchester City FC | 1996-12-15 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 9/6 | 기존 Stats | UCL 9경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 알렉스 산드루 | Alex Sandro | Juventus FC | 1991-01-26 | B+ | 보류 | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 미첼 바커르 | Mitchel Bakker | Paris Saint-Germain FC | 2000-06-20 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/3 | 기존 Stats | UCL 10경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 오스카 벤트 | Oscar Wendt | Borussia Mönchengladbach | 1985-10-24 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 4/3 | 기존 Stats | UCL 4경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 마르첼 할스텐베르크 | Marcel Halstenberg | RB Leipzig | 1991-09-27 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 3/2 | 기존 Stats | UCL 3경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 헤낭 로디 | Renan Lodi | Club Atlético de Madrid | 1998-04-08 | B0 | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/5 | 기존 Stats | UCL 8경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 레뱅 퀴르자와 | Layvin Kurzawa | Paris Saint-Germain FC | 1992-09-04 | B0 | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 모하메드 파레스 | Mohamed Fares | SS Lazio | 1996-02-15 | B- | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 6/5 | 기존 Stats | UCL 6경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 세르히오 에스쿠데로 | Sergio Escudero | Sevilla FC | 1989-09-02 | B- | 보류 | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 니코 슐츠 | Nico Schulz | Borussia Dortmund | 1993-04-01 | B- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 3/2 | 기존 Stats | UCL 3경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 25 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | C+ | 보류 | 2/2 | 기존 Stats | UCL 2경기 선발, 장기 명성을 적용하지 않고 제한적 참여로 분류. |
| 26 | 마르코스 알론소 | Marcos Alonso | Chelsea FC | 1990-12-28 | C+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 2/2 | 첼시 공식 | UCL 2경기 선발. 이번 시즌 대회 기여 범위 제한. |
| 27 | 벵자맹 멘디 | Benjamin Mendy | Manchester City FC | 1994-07-17 | C+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 1/1 | 기존 Stats | UCL 1경기 선발로 제한적인 사용. B-는 실제 부진의 근거를 요구하므로 C+. |

### RB (26명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 카일 워커 | Kyle Walker | Manchester City FC | 1990-05-28 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 11/11 | 기존 Stats | UCL 11경기·11선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 2 | 주앙 칸셀루 | João Cancelo | Manchester City FC | 1994-05-27 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 9/7 | 기존 Stats | UCL 9경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 3 | 후안 콰드라도 | Juan Cuadrado | Juventus FC | 1988-05-26 | A+ | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 4 | 트렌트 알렉산더아널드 | Trent Alexander-Arnold | Liverpool FC | 1998-10-07 | A0 | 보류 | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 5 | 키어런 트리피어 | Kieran Trippier | Club Atlético de Madrid | 1990-09-19 | A0 | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 6 | 헤수스 나바스 | Jesús Navas | Sevilla FC | 1985-11-21 | A0 | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 루카스 바스케스 | Lucas Vázquez | Real Madrid CF | 1991-07-01 | A- | 보류 | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 슈테판 라이너 | Stefan Lainer | Borussia Mönchengladbach | 1992-02-27 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 리스 제임스 | Reece James | Chelsea FC | 1999-12-08 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 10/6 | 첼시 공식 | UCL 10경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 마누엘 라차리 | Manuel Lazzari | SS Lazio | 1993-11-29 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 5/4 | 기존 Stats | UCL 5경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 11 | 알레산드로 플로렌치 | Alessandro Florenzi | Paris Saint-Germain FC | 1991-03-11 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/10 | 기존 Stats | UCL 10경기·10선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 윌송 마나파 | Wilson Manafá | FC Porto | 1994-07-23 | B+ | 보류 | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 벤자맹 파바르 | Benjamin Pavard | FC Bayern München | 1996-03-28 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 노르디 무키엘레 | Nordi Mukiele | RB Leipzig | 1997-11-01 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 세르지뇨 데스트 | Sergiño Dest | FC Barcelona | 2000-11-03 | B+ | 정정 [출처](https://www.fcbarcelona.com/en/football/first-team/news/2077553/present-and-future-dest) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 한스 하테부르 | Hans Hateboer | Atalanta BC | 1994-01-09 | B+ | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 요아킴 멜레 | Joakim Mæhle | Atalanta BC | 1997-05-20 | B0 | 보류 | 2/2 | 기존 Stats | UCL 2경기 선발. B+ 붙박이 핵심 등급보다 B0가 현재 출전 위상에 부합. |
| 18 | 마테우 모레이 | Mateu Morey | Borussia Dortmund | 2000-03-02 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 토마 뫼니에 | Thomas Meunier | Borussia Dortmund | 1991-09-12 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 콜랭 다그바 | Colin Dagba | Paris Saint-Germain FC | 1998-09-06 | B0 | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 5/2 | 기존 Stats | UCL 5경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 세르지 로베르토 | Sergi Roberto | FC Barcelona | 1992-02-07 | B0 | 보류 | 3/2 | 기존 Stats | UCL 3경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | B0 | 보류 | 2/2 | 기존 Stats | UCL 2경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 베냐민 헨릭스 | Benjamin Henrichs | RB Leipzig | 1997-02-23 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 3/1 | 기존 Stats | UCL 3경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 부나 사르 | Bouna Sarr | FC Bayern München | 1992-01-31 | B- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 5/2 | 기존 Stats | UCL 5경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 25 | 네코 윌리엄스 | Neco Williams | Liverpool FC | 2001-04-13 | B- | 보류 | 4/2 | 기존 Stats | UCL 4경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 26 | 나누 | Nanú | FC Porto | 1994-05-17 | C+ | 보류 | 4/1 | 기존 Stats | UCL 4경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

### DM (24명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 은골로 캉테 | N'Golo Kanté | Chelsea FC | 1991-03-29 | S | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 13/7 | UEFA 공식 | UEFA 13경기·709분·0골·0도움. UCL 13경기·7선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 조르지뉴 | Jorginho | Chelsea FC | 1991-12-20 | A+ | 공식 확인 [출처](https://www.figc.it/it/full-html?path=%2Fnazionali%2Fazzurri%2Fnazionale-a-archiviato%2Fultimi-convocati%2Fjorginho) | 12/12 | UEFA 공식 | UEFA 12경기·1031분·1골·1도움. UEFA 올해의 UCL 미드필더 3위(149점), 12경기 1031분 1골 1도움. 첼시 후방 전개·위치 조율의 핵심. |
| 3 | 카세미루 | Casemiro | Real Madrid CF | 1992-02-23 | A+ | 보류 | 10/9 | 기존 Stats | UCL 10경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 4 | 요주아 키미히 | Joshua Kimmich | FC Bayern München | 1995-02-08 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 5 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | A+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 6 | 로드리 | Rodri | Manchester City FC | 1996-06-22 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 10/9 | 기존 Stats | UCL 10경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | A0 | 보류 | 6/4 | 기존 Stats | UCL 6경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 이드리사 게예 | Idrissa Gueye | Paris Saint-Germain FC | 1989-09-26 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/7 | 기존 Stats | UCL 10경기 7선발, 중원 압박·전환 역할을 감안해 A-에서 A0로 잠정 상향. |
| 9 | 페르난두 | Fernando | Sevilla FC | 1987-07-25 | A- | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 마르턴 더 론 | Marten de Roon | Atalanta BC | 1991-03-29 | A- | 보류 | 6/5 | 기존 Stats | UCL 6경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 11 | 데니스 자카리아 | Denis Zakaria | Borussia Mönchengladbach | 1996-11-20 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 5/2 | 기존 Stats | UCL 5경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 다닐루 페레이라 | Danilo Pereira | Paris Saint-Germain FC | 1991-09-09 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 12/8 | 기존 Stats | UCL 12경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 마테우스 우리베 | Mateus Uribe | FC Porto | 1991-03-21 | B+ | 보류 | 9/8 | 기존 Stats | UCL 9경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 크리스토프 크라머 | Christoph Kramer | Borussia Mönchengladbach | 1991-02-19 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 로드리고 벤탄쿠르 | Rodrigo Bentancur | Juventus FC | 1997-06-25 | B+ | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 루카스 레이바 | Lucas Leiva | SS Lazio | 1987-01-09 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 아르투르 멜루 | Arthur Melo | Juventus FC | 1996-08-12 | B+ | 보류 | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 악셀 비첼 | Axel Witsel | Borussia Dortmund | 1989-01-12 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 5/4 | 기존 Stats | UCL 5경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 7/3 | 기존 Stats | UCL 7경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 타일러 애덤스 | Tyler Adams | RB Leipzig | 1999-02-14 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 네마냐 구델 | Nemanja Gudelj | Sevilla FC | 1991-11-16 | B0 | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 토마스 델라니 | Thomas Delaney | Borussia Dortmund | 1991-09-03 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 곤살로 에스칼란테 | Gonzalo Escalante | SS Lazio | 1993-03-27 | B0 | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 5/1 | 기존 Stats | UCL 5경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 하비 마르티네스 | Javi Martínez | FC Bayern München | 1988-09-02 | C+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 8/1 | 기존 Stats | UCL 8경기지만 선발 단 1회. B- 부진보다는 제한적 교체 역할에 맞춰 분류. |

### CM (39명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 케빈 더브라위너 | Kevin De Bruyne | Manchester City FC | 1991-06-28 | S | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 8/8 | UEFA 공식 | UEFA 8경기·669분·3골·4도움. UEFA 2020/21 UCL 미드필더 2위, 8경기 669분 3골 4도움; 2019/20 미드필더상 수상과 최근 3시즌 연속 창조성. S 잠정. |
| 2 | 일카이 귄도안 | İlkay Gündoğan | Manchester City FC | 1990-10-24 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 12/12 | 기존 Stats | UCL 12경기·12선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 3 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | A+ | 보류 | 12/10 | 기존 Stats | UCL 12경기·10선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 4 | 세르지우 올리베이라 | Sérgio Oliveira | FC Porto | 1992-06-02 | A+ | 보류 | 8/7 | 기존 Stats | UEFA 기술진 23인 포함, UCL 8경기 7선발 5골, 유벤투스 상대 결정적 골 등 강한 개인 공격 기여. |
| 5 | 토니 크로스 | Toni Kroos | Real Madrid CF | 1990-01-04 | A+ | 보류 | 12/11 | 기존 Stats | UCL 12경기·11선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 6 | 레온 고레츠카 | Leon Goretzka | FC Bayern München | 1995-02-06 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 세르게이 밀린코비치사비치 | Sergej Milinković-Savić | SS Lazio | 1995-02-27 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 프렝키 더 용 | Frenkie de Jong | FC Barcelona | 1997-05-12 | A+ | 보류 | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 루이스 알베르토 | Luis Alberto | SS Lazio | 1992-09-28 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 6/6 | 기존 Stats | UCL 6경기 선발. A+ 대회 최상위 근거는 부족하나 핵심 창조성에 A0. |
| 11 | 페드리 | Pedri | FC Barcelona | 2002-11-25 | A0 | 정정 [출처](https://www.fcbarcelona.com/en/football/first-team/jugadores/70486/pedri) | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 베르나르두 실바 | Bernardo Silva | Manchester City FC | 1994-08-10 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 13/11 | 기존 Stats | UCL 13경기·11선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 플로리안 노이하우스 | Florian Neuhaus | Borussia Mönchengladbach | 1997-03-16 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 레모 프로일러 | Remo Freuler | Atalanta BC | 1992-04-15 | A- | 보류 | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 마르셀 자비처 | Marcel Sabitzer | RB Leipzig | 1994-03-17 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 주드 벨링엄 | Jude Bellingham | Borussia Dortmund | 2003-06-29 | A- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 10/8 | 기존 Stats | UCL 10경기 8선발, 맨시티와의 토너먼트에서 보여준 전진·압박 기여. B+보다 상향. |
| 17 | 조르지니오 베이날뒴 | Georginio Wijnaldum | Liverpool FC | 1990-11-11 | B+ | 보류 | 9/8 | 기존 Stats | UCL 9경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 마테오 코바치치 | Mateo Kovačić | Chelsea FC | 1994-05-06 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 10/7 | 첼시 공식 | UCL 10경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 이반 라키티치 | Ivan Rakitić | Sevilla FC | 1988-03-10 | B+ | 보류 | 8/6 | 기존 Stats | UCL 8경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 케빈 캄플 | Kevin Kampl | RB Leipzig | 1990-10-09 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 마흐무드 다후드 | Mahmoud Dahoud | Borussia Dortmund | 1996-01-01 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 사울 니게스 | Saúl Ñíguez | Club Atlético de Madrid | 1994-11-21 | B+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 안데르 에레라 | Ander Herrera | Paris Saint-Germain FC | 1989-08-14 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/5 | 기존 Stats | UCL 10경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 아드리앵 라비오 | Adrien Rabiot | Juventus FC | 1995-04-03 | B+ | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 25 | 페데리코 발베르데 | Federico Valverde | Real Madrid CF | 1998-07-22 | B+ | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 26 | 아마두 아이다라 | Amadou Haidara | RB Leipzig | 1998-01-31 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 6/5 | 기존 Stats | UCL 6경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 27 | 호안 호르단 | Joan Jordán | Sevilla FC | 1994-07-06 | B+ | 보류 | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 28 | 웨스턴 맥케니 | Weston McKennie | Juventus FC | 1998-08-28 | B+ | 보류 | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 29 | 조던 헨더슨 | Jordan Henderson | Liverpool FC | 1990-06-17 | B+ | 보류 | 6/4 | 기존 Stats | UCL 6경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 30 | 마리오 파샬리치 | Mario Pašalić | Atalanta BC | 1995-02-09 | B+ | 보류 | 5/3 | 기존 Stats | UCL 5경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 31 | 올리베르 토레스 | Óliver Torres | Sevilla FC | 1994-11-10 | B+ | 보류 | 7/2 | 기존 Stats | UCL 7경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 32 | 티아고 알칸타라 | Thiago Alcântara | Liverpool FC | 1991-04-11 | B+ | 보류 | 4/2 | 기존 Stats | UCL 4경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 33 | 커티스 존스 | Curtis Jones | Liverpool FC | 2001-01-30 | B0 | 보류 | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 34 | 마르코 그루이치 | Marko Grujić | FC Porto | 1996-04-13 | B0 | 보류 | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 35 | 엑토르 에레라 | Héctor Herrera | Club Atlético de Madrid | 1990-04-19 | B0 | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 5/3 | 기존 Stats | UCL 5경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 36 | 코랑탱 톨리소 | Corentin Tolisso | FC Bayern München | 1994-08-03 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 3/3 | 기존 Stats | UCL 3경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 37 | 장다니엘 아크파 아크프로 | Jean-Daniel Akpa Akpro | SS Lazio | 1992-10-11 | B0 | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 8/2 | 기존 Stats | UCL 8경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 38 | 라슬로 베네스 | László Bénes | Borussia Mönchengladbach | 1997-09-09 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 2/0 | 기존 Stats | UCL 2경기·0선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 39 | 미랄렘 퍄니치 | Miralem Pjanić | FC Barcelona | 1990-04-02 | B- | 정정 [출처](https://www.fcbarcelona.com/en/football/first-team/news/1700297/fc-barcelona-sign-miralem-pjani) | 8/6 | 기존 Stats | UCL 8경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

### CAM (18명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 메이슨 마운트 | Mason Mount | Chelsea FC | 1999-01-10 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 11/9 | 첼시 공식 | UCL 11경기·9선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | A+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 9/8 | 기존 Stats | UCL 9경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 3 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 10/8 | 기존 Stats | UCL 10경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 4 | 다니 올모 | Dani Olmo | RB Leipzig | 1998-05-07 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 5 | 카이 하베르츠 | Kai Havertz | Chelsea FC | 1999-06-11 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 12/9 | 첼시 공식 | UCL 12경기 9선발, 결승 득점 포함 전방 압박·공간 연결; A-에서 A0. |
| 6 | 오타비우 | Otávio | FC Porto | 1995-02-09 | A- | 보류 | 9/9 | 기존 Stats | UCL 9경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 레안드로 파레데스 | Leandro Paredes | Paris Saint-Germain FC | 1994-06-29 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 라르스 슈틴들 | Lars Stindl | Borussia Mönchengladbach | 1988-08-26 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 크리스토퍼 은쿤쿠 | Christopher Nkunku | RB Leipzig | 1997-11-14 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 에밀 포르스베리 | Emil Forsberg | RB Leipzig | 1991-10-23 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 11 | 마테오 페시나 | Matteo Pessina | Atalanta BC | 1997-04-21 | B+ | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 하피냐 알칸타라 | Rafinha Alcântara | Paris Saint-Germain FC | 1993-02-12 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 8/1 | 기존 Stats | UCL 8경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 루슬란 말리노우스키 | Ruslan Malinovskyi | Atalanta BC | 1993-05-04 | B0 | 보류 | 4/1 | 기존 Stats | UCL 4경기 선발 1회. A+ 대체불가 핵심의 UCL 근거 부족, 개인 기술을 인정하되 B0. |
| 14 | 애런 램지 | Aaron Ramsey | Juventus FC | 1990-12-26 | B0 | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 율리안 브란트 | Julian Brandt | Borussia Dortmund | 1996-05-02 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 8/2 | 기존 Stats | UCL 8경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 파비우 비에이라 | Fábio Vieira | FC Porto | 2000-05-30 | B0 | 보류 | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 자말 무시알라 | Jamal Musiala | FC Bayern München | 2003-02-26 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 하네스 볼프 | Hannes Wolf | Borussia Mönchengladbach | 1999-04-16 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 7/0 | 기존 Stats | UCL 7경기·0선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

### LW (24명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 네이마르 | Neymar | Paris Saint-Germain FC | 1992-02-05 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 9/9 | 기존 Stats | UCL 9경기·9선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 필 포든 | Phil Foden | Manchester City FC | 2000-05-28 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 13/12 | 기존 Stats | UCL 13경기·12선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 3 | 페데리코 키에사 | Federico Chiesa | Juventus FC | 1997-10-25 | A+ | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 4 | 티모 베르너 | Timo Werner | Chelsea FC | 1996-03-06 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 12/10 | 첼시 공식 | UCL 12경기 10선발 4골, 공간 침투와 전방 움직임은 득점 이상의 의미. B+에서 A0. |
| 5 | 야니크 카라스코 | Yannick Carrasco | Club Atlético de Madrid | 1993-09-04 | A- | 정정 [출처](https://www.atleticodemadrid.com/noticias/agreement-with-dalian-professional-fc-over-the-transfer-of-yannick-carrasco) | 5/5 | 기존 Stats | UCL 5경기 선발의 측면 역습 기여는 인정하지만 A0 이상 꾸준한 대회 기여 근거는 제한적. |
| 6 | 마르퀴스 튀람 | Marcus Thuram | Borussia Mönchengladbach | 1997-08-06 | A- | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/7 | 기존 Stats | UCL 8경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 킹슬리 코망 | Kingsley Coman | FC Bayern München | 1996-06-13 | A- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/7 | 기존 Stats | UCL 7경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 루카스 오캄포스 | Lucas Ocampos | Sevilla FC | 1994-07-11 | A- | 보류 | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 비니시우스 주니오르 | Vinícius Júnior | Real Madrid CF | 2000-07-12 | A- | 보류 | 12/8 | 기존 Stats | UCL 12경기 8선발, 리버풀과의 8강 경기 등 주목할 전진 드리블·득점 기여. B+에서 A-. |
| 10 | 라힘 스털링 | Raheem Sterling | Manchester City FC | 1994-12-08 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 11/7 | 기존 Stats | UCL 11경기 7선발, 압박·드리블의 지속적 기여. B+보다 소폭 상향. |
| 11 | 크리스천 풀리식 | Christian Pulisic | Chelsea FC | 1998-09-18 | A- | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 10/4 | 첼시 공식 | UCL 10경기 4선발, 레알 마드리드 준결승 1차전 득점·2차전 도움 등 토너먼트 기여로 B0에서 A-. |
| 12 | 사디오 마네 | Sadio Mané | Liverpool FC | 1992-04-10 | B+ | 보류 | 10/8 | 기존 Stats | UCL 10경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 조반니 레이나 | Giovanni Reyna | Borussia Dortmund | 2002-11-13 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 8/4 | 기존 Stats | UCL 8경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 루이스 디아스 | Luis Díaz | FC Porto | 1997-01-13 | B+ | 보류 | 8/4 | 기존 Stats | UCL 8경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 우스만 뎀벨레 | Ousmane Dembélé | FC Barcelona | 1997-05-15 | B+ | 보류 | 6/4 | 기존 Stats | UCL 6경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 율리안 드락슬러 | Julian Draxler | Paris Saint-Germain FC | 1993-09-20 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 5/3 | 기존 Stats | UCL 5경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 토마 르마르 | Thomas Lemar | Club Atlético de Madrid | 1995-11-12 | B+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/1 | 기존 Stats | UCL 8경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 토르강 아자르 | Thorgan Hazard | Borussia Dortmund | 1993-03-29 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 7/5 | 기존 Stats | UCL 7경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 무니르 엘하다디 | Munir El Haddadi | Sevilla FC | 1995-09-01 | B0 | 보류 | 6/3 | 기존 Stats | UCL 6경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 안수 파티 | Ansu Fati | FC Barcelona | 2002-10-31 | B0 | 보류 | 3/2 | 기존 Stats | UCL 3경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 저스틴 클라위버르트 | Justin Kluivert | RB Leipzig | 1999-05-05 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 7/0 | 기존 Stats | UCL 7경기·0선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 에덴 아자르 | Eden Hazard | Real Madrid CF | 1991-01-07 | B- | 보류 | 5/3 | 기존 Stats | UCL 5경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 더글라스 코스타 | Douglas Costa | FC Bayern München | 1990-09-14 | B- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 페데리코 베르나르데스키 | Federico Bernardeschi | Juventus FC | 1994-02-16 | B- | 보류 | 7/1 | 기존 Stats | UCL 7경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

### RW (21명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 리야드 마레즈 | Riyad Mahrez | Manchester City FC | 1991-02-21 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 12/9 | 기존 Stats | UCL 12경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | A+ | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 3 | 모하메드 살라 | Mohamed Salah | Liverpool FC | 1992-06-15 | A+ | 보류 | 10/9 | 기존 Stats | UCL 10경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 4 | 앙헬 디마리아 | Ángel Di María | Paris Saint-Germain FC | 1988-02-14 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/8 | 기존 Stats | UCL 10경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 5 | 제이든 산초 | Jadon Sancho | Borussia Dortmund | 2000-03-25 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 6/4 | 기존 Stats | UCL 6경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 6 | 마르코스 요렌테 | Marcos Llorente | Club Atlético de Madrid | 1995-01-30 | A- | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/8 | 기존 Stats | 리그에서의 높은 활약을 UCL로 자동 전이하지 않음. UCL 8경기 선발의 전방·중원 역할은 A- 수준. |
| 7 | 헤수스 코로나 | Jesús Corona | FC Porto | 1993-01-06 | A- | 보류 | 10/9 | 기존 Stats | UCL 10경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 8 | 세르주 그나브리 | Serge Gnabry | FC Bayern München | 1995-07-14 | A- | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 6/3 | 기존 Stats | UCL 6경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 요시프 일리치치 | Josip Iličić | Atalanta BC | 1988-01-29 | A- | 보류 | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 10 | 마르코 아센시오 | Marco Asensio | Real Madrid CF | 1996-01-21 | B+ | 보류 | 11/7 | 기존 Stats | UCL 11경기·7선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 11 | 르로이 사네 | Leroy Sané | FC Bayern München | 1996-01-11 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 8/6 | 기존 Stats | UCL 8경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 12 | 요나스 호프만 | Jonas Hofmann | Borussia Mönchengladbach | 1992-07-14 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 13 | 페란 토레스 | Ferran Torres | Manchester City FC | 2000-02-29 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 6/4 | 기존 Stats | UCL 6경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 14 | 수소 | Suso | Sevilla FC | 1993-11-19 | B+ | 보류 | 4/4 | 기존 Stats | UCL 4경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 하킴 지예흐 | Hakim Ziyech | Chelsea FC | 1993-03-19 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 10/3 | 첼시 공식 | UCL 10경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 데얀 쿨루세브스키 | Dejan Kulusevski | Juventus FC | 2000-04-25 | B+ | 보류 | 6/3 | 기존 Stats | UCL 6경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 17 | 파블로 사라비아 | Pablo Sarabia | Paris Saint-Germain FC | 1992-05-11 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 4/1 | 기존 Stats | UCL 4경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 호드리구 | Rodrygo | Real Madrid CF | 2001-01-09 | B0 | 보류 | 11/3 | 기존 Stats | UCL 11경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 트린캉 | Francisco Trincão | FC Barcelona | 1999-12-29 | B- | 정정 [출처](https://www.fcbarcelona.com/en/news/1594758/agreement-with-sc-braga-for-the-transfer-of-trincao) | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 파푸 고메스 | Papu Gómez | Sevilla FC | 1988-02-15 | C+ | 정정 [출처](https://www.transfermarkt.com/papu-gomez/transfers/spieler/20005/transfer_id/3222299) | 2/1 | 기존 Stats | 겨울 이적 후 UCL 2경기 1선발. 이전 아탈란타 활약을 대회 2020/21 현재 소속 UCL 티어로 대체하지 않음. |
| 21 | 파트리크 헤르만 | Patrick Herrmann | Borussia Mönchengladbach | 1991-02-12 | C+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 4/0 | 기존 Stats | UCL 4경기 전부 교체 출전. B+ 핵심 주전의 조건을 만족하지 않아 제한적 출전 C+. |

### ST (32명)

| 순위 | 한글명 | 원어명 | 당시 구단 | 생년월일 | 티어 | 생년월일 검증 | 출전/선발 | 기록 검증 | 개인 평가 근거 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 엘링 홀란 | Erling Haaland | Borussia Dortmund | 2000-07-21 | S | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/borussia-dortmund) | 8/8 | UEFA 공식 | UEFA 8경기·706분·10골·2도움. UCL 8경기·8선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 2 | 킬리안 음바페 | Kylian Mbappé | Paris Saint-Germain FC | 1998-12-20 | S | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 10/10 | UEFA 공식 | UEFA 10경기·900분·8골·3도움. UCL 10경기·10선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 3 | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | 1988-08-21 | S | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 6/6 | UEFA 공식 | UEFA 6경기·514분·5골·0도움. UCL 6경기·6선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 4 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | A+ | 보류 | 10/9 | 기존 Stats | UCL 10경기·9선발; UEFA 기술진 시즌 23인에 포함. 개별 3시즌 UCL 감사 미완료. |
| 5 | 치로 임모빌레 | Ciro Immobile | SS Lazio | 1990-02-20 | A+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 5/5 | 기존 Stats | UCL 5경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 6 | 크리스티아누 호날두 | Cristiano Ronaldo dos Santos Aveiro | Juventus FC | 1985-02-05 | A+ | 보류 | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 7 | 두반 사파타 | Duván Zapata | Atalanta BC | 1991-04-01 | A0 | 보류 | 8/6 | 기존 Stats | UCL 8경기 6선발, 공격 포스트플레이와 압박 기여 인정하나 A+급 대회 최고 수준 근거는 제한적. |
| 8 | 유세프 엔네시리 | Youssef En-Nesyri | Sevilla FC | 1997-06-01 | A0 | 보류 | 8/4 | 기존 Stats | UCL 8경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 9 | 디오구 조타 | Diogo Jota | Liverpool FC | 1996-12-04 | A0 | 보류 | 9/6 | 기존 Stats | UCL 9경기 6선발, 그룹 단계 포함 중요한 득점·침투. 직전 2시즌 상승 흐름 보조 고려. |
| 10 | 알라산 플레아 | Alassane Pléa | Borussia Mönchengladbach | 1993-03-10 | A0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 8/6 | 기존 Stats | UCL 8경기 6선발 5골, 역습·마무리의 개인 영향력을 근거로 A-에서 A0. |
| 11 | 알바로 모라타 | Álvaro Morata | Juventus FC | 1992-10-23 | A0 | 보류 | 8/5 | 기존 Stats | UCL 8경기 5선발 6골, 공격 생산성 우수해 A-에서 A0. |
| 12 | 올리비에 지루 | Olivier Giroud | Chelsea FC | 1986-09-30 | A0 | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/chelsea.htm) | 8/2 | 첼시 공식 | UCL 8경기 2선발 6골. 세비야전 4골, 아틀레티코전 결정적 오버헤드킥 등 높은 효율; A0. |
| 13 | 루이스 무리엘 | Luis Muriel | Atalanta BC | 1991-04-16 | A- | 보류 | 7/5 | 기존 Stats | UCL 7경기 5선발. 마무리 역량은 높지만 A+급 대회 내 지속적 지배력 입증은 불충분. |
| 14 | 앙투안 그리즈만 | Antoine Griezmann | FC Barcelona | 1991-03-21 | A- | 보류 | 7/6 | 기존 Stats | UCL 7경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 15 | 루이스 수아레스 | Luis Suárez | Club Atlético de Madrid | 1987-01-24 | A- | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 6/6 | 기존 Stats | UCL 6경기·6선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 16 | 모이스 킨 | Moise Kean | Paris Saint-Germain FC | 2000-02-28 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/france/2020-2021/ligue1/psg.htm) | 9/4 | 기존 Stats | UCL 9경기 4선발. 효율적 로테이션 득점 기여 인정하나 A0급 붙박이 주전은 아님. |
| 17 | 무사 마레가 | Moussa Marega | FC Porto | 1991-04-14 | B+ | 보류 | 9/9 | 기존 Stats | UCL 9경기·9선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 18 | 주앙 펠릭스 | João Félix | Club Atlético de Madrid | 1999-11-10 | B+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 19 | 호아킨 코레아 | Joaquín Correa | SS Lazio | 1994-08-13 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 8/8 | 기존 Stats | UCL 8경기·8선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 20 | 앙헬 코레아 | Ángel Correa | Club Atlético de Madrid | 1995-03-09 | B+ | 보조 확인 [출처](https://footballsquads.co.uk/spain/2020-2021/laliga/amadrid.htm) | 8/5 | 기존 Stats | UCL 8경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 21 | 유수프 포울센 | Yussuf Poulsen | RB Leipzig | 1994-06-15 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 8/5 | 기존 Stats | UCL 8경기·5선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 22 | 브릴 엠볼로 | Breel Embolo | Borussia Mönchengladbach | 1997-02-14 | B+ | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/borussia-moenchengladbach) | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 23 | 호베르투 피르미누 | Roberto Firmino | Liverpool FC | 1991-10-02 | B+ | 보류 | 9/3 | 기존 Stats | UCL 9경기·3선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 24 | 가브리에우 제주스 | Gabriel Jesus | Manchester City FC | 1997-04-03 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/eng/2020-2021/engprem/mancity.htm) | 7/2 | 기존 Stats | UCL 7경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 25 | 파울로 디발라 | Paulo Dybala | Juventus FC | 1993-11-15 | B+ | 보류 | 5/2 | 기존 Stats | UCL 5경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 26 | 펠리페 카이세도 | Felipe Caicedo | SS Lazio | 1988-09-05 | B+ | 보조 확인 [출처](https://www.footballsquads.co.uk/italy/2020-2021/seriea/lazio.htm) | 5/1 | 기존 Stats | UCL 5경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 27 | 메흐디 타레미 | Mehdi Taremi | FC Porto | 1992-07-18 | B+ | 보류 | 5/1 | 기존 Stats | UCL 5경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 28 | 에릭 막심 추포모팅 | Eric Maxim Choupo-Moting | FC Bayern München | 1989-03-23 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/competitions/champions-league/seasons/2020-21/teams/bayern-muenchen) | 7/4 | 기존 Stats | UCL 7경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 29 | 뤼크 더 용 | Luuk de Jong | Sevilla FC | 1990-08-27 | B0 | 보류 | 6/4 | 기존 Stats | UCL 6경기·4선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 30 | 알렉산데르 쇠를로트 | Alexander Sørloth | RB Leipzig | 1995-12-05 | B0 | 공식 확인 [출처](https://datencenter.dfb.de/champions-league/2020-21/mannschaft/rb-leipzig) | 4/0 | 기존 Stats | UCL 4경기·0선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 31 | 마르틴 브레이스웨이트 | Martin Braithwaite | FC Barcelona | 1991-06-05 | B- | 보류 | 6/2 | 기존 Stats | UCL 6경기·2선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |
| 32 | 마리아노 디아스 | Mariano Díaz | Real Madrid CF | 1993-08-01 | C+ | 보류 | 4/1 | 기존 Stats | UCL 4경기·1선발; 기존 UCL 출전·포지션 기여 자료 활용. 개별 3시즌 UCL 감사 미완료. |

## 9. 외부 기록의 교차 검증 한계 및 후속 확인 목록

- 2020-21 UCL 기존 Statbunker 288명 출전·선발 수치의 **전 경기 UEFA 공식 Match Report 전수 독립 교차 검증 미완료**. UEFA 수상 후보 12명, 첼시 17명의 출전 기록 교차 대조를 별도 완료했다.
- 2018-19 및 2019-20 UCL 후보별 매치로그·포지션·기량 3시즌 독립 감사 미완료. 국내 리그 기존 DRAFT 티어를 이 대회의 완전한 개인 성과로 대체하지 않았다.
- 116명의 생년월일은 직접 대조할 수 있는 명부 본문 확보 실패 또는 신원별 직접 확인 불가로 pending. 기존 `born` 유지.
- 선수의 시즌 주 포지션은 원본 단일 포지션을 유지하되 실제 경기별 CB/LB/RB/CM/CAM/LW/RW/ST 구성과 일치하는지 전수 검증은 미완료.
- 기존 후보의 대회 실제 참가/주전 적격성, 누락 후보, 각 선수의 슈팅·패스·수비 기여 세부 수치에도 추가 감사 필요.
- GitHub Actions CI와 실제 GitHub Pages 브라우저 UI 검사는 실행하지 않았으므로 성공으로 표시하지 않는다.

## 10. 최종 로컬 정합성 검사

데이터 및 감사를 포함하는 출처 링크는 해당 선수별 출처 유형과 범위를 정확하게 구분해 저장했다. 선수의 명시적 tier와 rank는 동일 포지션에서 상위 티어가 하위 티어보다 뒤로 가지 않도록 재정렬했으며, 연속된 1~N 순위로 검사했다.

| 검사 | 결과 |
| --- | --- |
| 후보 288명, ID 중복/보존 | PASS |
| 구단·원어명·한글명·원본 단일 포지션·역할·출전/선발 값 보존 | PASS |
| 참가팀·대진·경기·토너먼트·클럽 원본 섹션 무변경 | PASS |
| 포지션별 1~N 연속 순위, 티어·순위 역전 및 중복 | PASS |
| 정정 생년월일 8건, 출처 기록 및 유효 날짜 | PASS |
| Best XI 11명 유효·중복 없음·등록 포지션 일치 | PASS |
| 독립 3시즌 선수별 UCL 전 경기 감사 | 미완료 |
| CI 실행·실제 웹사이트 브라우저 화면 | 미실시 |

보고서의 수치와 선수별 기록은 GitHub `main` JSON의 감사용 조건부 평가 현황이며, 사용자 최종 승인 전까지 `draft_unapproved`다.
