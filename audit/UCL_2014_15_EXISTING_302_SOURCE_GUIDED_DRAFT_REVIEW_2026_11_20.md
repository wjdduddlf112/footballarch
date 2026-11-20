# Football Archive — UCL 2014-15 source-guided evaluation and 302-player browser audit (2026-11-20)

**DRAFT, 사용자 승인 전.** 기존 후보 302명을 보존하며 이미 존재한 잠정 티어를 독립적인 검증 완료값으로 오인하지 않는다.

## 평가·보존 요약

| 항목 | 결과 |
|---|---:|
| 기존 후보 / 현재 후보 | 302 / 302 |
| 기존 티어 및 순위 입력 | 246 / 302 |
| 기존 미평가 선수의 신규 UCL 근거 기반 티어 부여 | 50명 |
| 기존 티어 수정 | 6명 (Jackson Martínez, Claudio Bravo, Marc-André ter Stegen, Eden Hazard, Arjen Robben, Zlatan Ibrahimović) |
| 현재 티어/순위 있음 | 295 / 302 |
| 본선 0출전 확인으로 평가 미부여 | 7명 |
| 누락 생년월일 56건 보완 및 서로 다른 선수/원본 오류 2건 정정 | 58건 |
| 동일 선수 ID 유지 | 302 / 302 |
| 구단 및 대진/경기 데이터 보존 | 원본 동일 |
| 전술적 역할 중심 포지션 수정 | 3건 |
| 대표 포메이션 | 4-3-3 → 4-2-3-1 |
| Best XI | 11명, 기존 선수 1명 교체 제안 |
| 2012-13~2014-15 전 선수 개별 경기별 독립 검증 | 미완료 |
| GitHub Pages 실제 사용성·화면 검증 | 미실시 |

**2014-15 > 2013-14 > 2012-13** 최근 시즌 기량 우선 평가. 국내 리그 티어는 UCL 평가 근거로 자동 전용하지 않는다. 팀 우승이나 토너먼트 성적은 개인 등급에 기계적으로 가산하지 않는다.

## 원전과 기록 범위

- [UEFA 2014-15 기술보고서 (정식 18인, 팀별 출전표·전술·개인 기록)](https://www.uefa.com/MultimediaFiles/Download/uefaorg/General/02/27/33/33/2273333_DOWNLOAD.pdf)
- [UEFA 2014-15 공식 기술진 선정 시즌 18인](https://www.uefa.com/uefachampionsleague/news/0253-0d802a501f23-68765bf409b3-1000--uefa-champions-league-squad-of-the-season/)
- [UEFA 2014-15 공식 개인 통계](https://www.uefa.com/uefachampionsleague/history/seasons/2015/statistics/)
- [FBref 2014-15 FC Porto UCL 본선 출전·득점·선발·출전 시간](https://fbref.com/en/squads/5e876ee6/2014-2015/c8/Porto-Stats-Champions-League)
- [FC Porto 2014-15 선수 생년월일 및 신원](https://www.footballsquads.co.uk/portugal/2014-2015/primeira/porto.htm)
- [Basel 2014 roster birth dates](https://www.national-football-teams.com/club/2460/2014/Fc_Basel.html)
- [Shakhtar 2014 birth dates](https://www.statscrew.com/worldfootball/roster/t-SHADO262/y-2014)

공식 UEFA 2014-15 기술보고서는 32개 참가팀 가운데 14팀이 4-2-3-1을, 10팀이 4-4-2를, 8팀이 4-3-3을 일반적으로 사용했다고 서술한다. 따라서 사이트 대표 포메이션은 4-2-3-1로 기록하되, 바르셀로나의 실제 4-3-3 전술을 해당 구단 데이터에서 그대로 유지했다.

## 2014-15 대표 Best XI 검토용 DRAFT (4-2-3-1)

| 자리 | 한글명 | 원어명 | 구단 원어명 | 생년월일 | 티어 | 동일 포지션 순위 |
|---|---|---|---|---|---|---:|
| GK | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | A+ | 1 |
| RB | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | A+ | 1 |
| CB | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | A+ | 1 |
| CB | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 | A+ | 2 |
| LB | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | A+ | 1 |
| DM | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | A+ | 1 |
| CM | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | A+ | 1 |
| CAM | 하비에르 파스토레 | Javier Pastore | Paris Saint-Germain FC | 1989-06-20 | A+ | 1 |
| LW | 네이마르 | Neymar | FC Barcelona | 1992-02-05 | S | 1 |
| RW | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | S | 1 |
| ST | 루이스 수아레스 | Luis Suárez | FC Barcelona | 1987-01-24 | S | 1 |

- 변경 전 4-3-3의 CM 이반 라키티치 → 4-2-3-1 CAM 하비에르 파스토레. 이는 **당시 최다 사용된 대표 포메이션**과 기존 해당 포지션 잠정 순위에 따른 선택이다. **파스토레가 2014-15 UCL 경기의 최빈 CAM이라는 독립 검증은 완료되지 않아** 최종 확정 전에 추가 대조해야 한다.
- 부폰 vs 테어 슈테겐: UEFA 기술진이 모두 공식 18인에 포함했으며 양 선수 모두 13경기 1,170분을 소화했다. 부폰을 근소 우위로 잠정 유지한다.
- 피케·마스체라노 vs 키엘리니·보누치: 현재 포지션 내 기존 잠정 상위 순위를 유지. UEFA 기술진은 피케·마스체라노·키엘리니를 뽑았고, 다른 CB의 우열은 추가 개별 비교가 필요하다.
- 다니 아우베스: 공식 18인에서 제외되지만 UCL 4도움 기록 및 RB 역할을 근거로 유지. 이바노비치와 추가 상대비교 여지 존재.
- 공격 삼각편대: 메시·네이마르 2014-15 각각 10골 공동 득점왕, 수아레스 7골 및 주요 토너먼트 기여를 근거로 유지. 호날두 역시 10골로 동일 LW 자리에 강력한 대안이다.
- 포메이션을 더 중시하는 재구성으로 인해 기존 전술 그대로의 4-3-3 바르셀로나 중원 라키티치가 제외됐다는 선택 비용을 명시한다. 우승팀 편중 자체는 자동 우대 근거가 아니다.

## 개별 확인이 필요한 문제와 실제 정정

- **Maicon (FC Porto):** 기존 DOB `1981-07-26`은 인테르의 Maicon Douglas Sisenando 생년월일이고, FC Porto의 중앙수비수는 **Maicon Pereira Roque (1988-09-14)**. 원본 ID를 유지하면서 교정했다.
- **Cristian Tello:** 본 시즌 생년월일 `1991-08-11`을 공식 클럽 프로필 기준으로 정정했다. 일부 2차 명단과 날짜가 일치하지 않아 신원 출처를 별도 보존한다.
- **Claudio Bravo:** 바르셀로나에서는 국내 리그 주전이지만 UCL 주전은 테어 슈테겐. Bravo의 기존 A+는 UCL 당해 시즌 출전 근거가 없으므로 티어·순위 제거하고 후보 ID만 보존.
- **Ter Stegen:** UEFA 18인 골키퍼, 13경기 1,170분. A0 → A+.
- **Robben, Hazard, Ibrahimović:** 국내 리그 활약이나 지난 시즌 명성이 당해 UCL S를 자동 정당화하지 않는다. 개인 UCL 가용성·득점과 앞선 두 시즌 맥락을 반영해 S → A+.
- **Jackson Martínez:** 해당 UCL 본선 8경기 7골. A0 → A+.
- **Luiz Adriano:** UCL 7경기 9골이지만 대부분이 BATE 상대 두 경기에서 나왔음을 함께 감안해 A0 유지. 기록 전체를 모든 상대에 균등한 기여로 오해하지 않는다.
- **Fabian Frei:** Basel에서 UEFA 기술보고서가 말하는 홀딩 역할을 반영해 CM → DM.
- **Mohamed Elneny:** Basel에서 Frei보다 전진한 역할을 고려해 DM → CM.
- **Óliver Torres:** Porto 4-3-3의 중앙 미드필더 역할(카세미루가 단독 수비형)을 반영해 CAM → CM.

### 본선 무출전 근거로 등급·순위를 부여하지 않은 7명

- 게르마노 바일라티 (Germano Vailati, FC Basel 1893) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음
- 엘통 (Helton, FC Porto) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음
- 호세 앙헬 (José Ángel, FC Porto) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음
- 안톤 카니볼로츠키 (Anton Kanibolotskiy, FC Shakhtar Donetsk) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음
- 빅토르 코발렌코 (Viktor Kovalenko, FC Shakhtar Donetsk) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음
- 에두아르두 (Eduardo da Silva, FC Shakhtar Donetsk) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음
- 클라우디오 브라보 (Claudio Bravo, FC Barcelona) — 2014-15 UCL 출전 근거 없음; 후보 ID 유지, 등급·순위 없음

## 등급별 분포

| 티어 | 현재 인원 |
|---|---:|
| S | 4 |
| A+ | 43 |
| A0 | 23 |
| A- | 60 |
| B+ | 75 |
| B0 | 46 |
| B- | 31 |
| C+ | 12 |
| C- | 1 |
| **합계 (잠정 등급)** | **295** |
| 미평가 | 7 |

- **World Class (S/A+)**: 47명
- **Competition Top Class (S/A+/A0/A-)**: 130명

## World Class 전체 명단

**S — 4명:** 네이마르 (LW 1위) · 크리스티아누 호날두 (LW 2위) · 리오넬 메시 (RW 1위) · 루이스 수아레스 (ST 1위)
**A+ — 43명:** 잔루이지 부폰 (GK 1위) · 마누엘 노이어 (GK 2위) · 티보 쿠르투아 (GK 3위) · 마르크안드레 테어 슈테겐 (GK 4위) · 제라르 피케 (CB 1위) · 하비에르 마스체라노 (CB 2위) · 조르조 키엘리니 (CB 3위) · 디에고 고딘 (CB 4위) · 레오나르도 보누치 (CB 5위) · 세르히오 라모스 (CB 6위) · 치아구 실바 (CB 7위) · 제롬 보아텡 (CB 8위) · 존 테리 (CB 9위) · 로랑 코시엘니 (CB 10위) · 조르디 알바 (LB 1위) · 마르셀루 (LB 2위) · 후안 베르나트 (LB 3위) · 세사르 아스필리쿠에타 (LB 4위) · 다니 아우베스 (RB 1위) · 필리프 람 (RB 2위) · 세르히오 부스케츠 (DM 1위) · 토니 크로스 (DM 2위) · 네마냐 마티치 (DM 3위) · 다비드 알라바 (DM 4위) · 안드레스 이니에스타 (CM 1위) · 이반 라키티치 (CM 2위) · 클라우디오 마르키시오 (CM 3위) · 마르코 베라티 (CM 4위) · 블레즈 마튀디 (CM 5위) · 폴 포그바 (CM 6위) · 산티 카솔라 (CM 7위) · 하비에르 파스토레 (CAM 1위) · 하메스 로드리게스 (CAM 2위) · 다비드 실바 (CAM 3위) · 에덴 아자르 (LW 3위) · 알렉시스 산체스 (LW 4위) · 아르연 로번 (RW 2위) · 즐라탄 이브라히모비치 (ST 2위) · 카를로스 테베스 (ST 3위) · 로베르트 레반도프스키 (ST 4위) · 피에르에메리크 오바메양 (ST 5위) · 디에고 코스타 (ST 6위) · 잭슨 마르티네스 (ST 7위)

## Competition Top Class 중 A0·A- 명단 (S/A+는 위 명단과 합산)

**A0 — 23명:** 다니옐 수바시치 (GK 5위) · 살바토레 시리구 (GK 6위) · 막스웰 (LB 5위) · 브라니슬라프 이바노비치 (RB 3위) · 슈테판 리히트슈타이너 (RB 4위) · 안드레아 피를로 (DM 5위) · 제레미 툴랄랑 (DM 6위) · 사비 알론소 (DM 7위) · 엑토르 에레라 (CM 8위) · 세스크 파브레가스 (CM 9위) · 주앙 모티뉴 (CAM 4위) · 하칸 찰하놀루 (CAM 5위) · 마리오 괴체 (CAM 6위) · 아르투로 비달 (CAM 7위) · 메수트 외질 (CAM 8위) · 야신 브라히미 (LW 5위) · 코케 (LW 6위) · 손흥민 (LW 7위) · 카림 벨라라비 (RW 3위) · 루이스 아드리아누 (ST 8위) · 세르히오 아궤로 (ST 9위) · 에딘손 카바니 (ST 10위) · 카림 벤제마 (ST 11위)
**A- — 60명:** 파비아누 (GK 7위) · 조 하트 (GK 8위) · 베른트 레노 (GK 9위) · 얀 오블라크 (GK 10위) · 페트르 체흐 (GK 11위) · 라파엘 바란 (CB 11위) · 베네딕트 회베데스 (CB 12위) · 외메르 토프라크 (CB 13위) · 다비드 루이스 (CB 14위) · 페페 (CB 15위) · 마츠 후멜스 (CB 16위) · 미란다 (CB 17위) · 히카르두 카르발류 (CB 18위) · 게리 케이힐 (CB 19위) · 페어 메르테자커 (CB 20위) · 뱅상 콤파니 (CB 21위) · 마르키뉴스 (CB 22위) · 알렉스 산드루 (LB 6위) · 레뱅 퀴르자와 (LB 7위) · 파트리스 에브라 (LB 8위) · 나초 몬레알 (LB 9위) · 다닐루 (RB 5위) · 다리요 스르나 (RB 6위) · 파비뉴 (RB 7위) · 후안프란 (RB 8위) · 다니 카르바할 (RB 9위) · 우카시 피슈체크 (RB 10위) · 파블로 사발레타 (RB 11위) · 파비안 프라이 (DM 8위) · 카세미루 (DM 9위) · 티아구 멘데스 (DM 10위) · 티아구 모타 (DM 11위) · 페르난지뉴 (DM 12위) · 프랑시스 코클랭 (DM 13위) · 바스티안 슈바인슈타이거 (CM 10위) · 가비 (CM 11위) · 이스코 (CM 12위) · 라르스 벤더 (CM 13위) · 조프레 콘도그비아 (CM 14위) · 일카이 귄도안 (CM 15위) · 야야 투레 (CM 16위) · 사비 에르난데스 (CM 17위) · 루카 모드리치 (CM 18위) · 애런 램지 (CM 19위) · 알렉스 테이셰이라 (CAM 9위) · 오스카르 (CAM 10위) · 마르코 로이스 (LW 8위) · 야니크 페레이라 카라스코 (LW 9위) · 프랑크 리베리 (LW 10위) · 데를리스 곤살레스 (RW 4위) · 히카르두 콰레스마 (RW 5위) · 가레스 베일 (RW 6위) · 아르다 투란 (RW 7위) · 베르나르두 실바 (RW 8위) · 윌리안 (RW 9위) · 알바로 모라타 (ST 12위) · 앙투안 그리즈만 (ST 13위) · 마리오 만주키치 (ST 14위) · 올리비에 지루 (ST 15위) · 앙토니 마르시알 (ST 16위)

## 전 302명 — 구단별 후보 · 포지션 · 주전/후보 · 티어 · 순위

아래 표는 UCL 2014-15 기존 구단과 후보를 임의 삭제하지 않고 **주전 + 백업** 전체를 구단별로 열람할 수 있도록 편성했다. UCL 주전/후보 역할은 원본 등록을 그대로 보존하며, 실제 최빈 선발 위치와 일치하는지 개인별 전경기 재검증이 추가로 필요하다.

### Club Atlético de Madrid — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 15 | 미겔 앙헬 모야 | Miguel Ángel Moyá | Club Atlético de Madrid | 1984-04-02 | 주전 | B+ | — | — | — |
| GK | 10 | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | 1993-01-07 | 후보 | A- | — | — | — |
| CB | 4 | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 | 주전 | A+ | — | — | — |
| CB | 17 | 미란다 | Miranda | Club Atlético de Madrid | 1984-09-07 | 주전 | A- | — | — | — |
| CB | 36 | 호세 마리아 히메네스 | José María Giménez | Club Atlético de Madrid | 1995-01-20 | 후보 | B+ | — | — | — |
| LB | 12 | 길례르미 시케이라 | Guilherme Siqueira | Club Atlético de Madrid | 1986-04-28 | 주전 | B+ | — | — | — |
| LB | 27 | 크리스티안 안살디 | Cristian Ansaldi | Club Atlético de Madrid | 1986-09-20 | 후보 | B- | — | — | — |
| RB | 8 | 후안프란 | Juanfran | Club Atlético de Madrid | 1985-01-09 | 주전 | A- | — | — | — |
| RB | 20 | 헤수스 가메스 | Jesús Gámez | Club Atlético de Madrid | 1985-04-10 | 후보 | B0 | — | — | — |
| DM | 10 | 티아구 멘데스 | Tiago Mendes | Club Atlético de Madrid | 1981-05-02 | 주전 | A- | — | — | — |
| DM | 22 | 마리오 수아레스 | Mario Suárez | Club Atlético de Madrid | 1987-02-24 | 후보 | B0 | — | — | — |
| CM | 11 | 가비 | Gabi | Club Atlético de Madrid | 1983-07-10 | 주전 | A- | — | — | — |
| CM | 25 | 사울 니게스 | Saúl Ñíguez | Club Atlético de Madrid | 1994-11-21 | 후보 | B+ | — | — | — |
| CAM | 15 | 라울 가르시아 | Raúl García | Club Atlético de Madrid | 1986-07-11 | 후보 | B+ | — | — | — |
| LW | 6 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | 주전 | A0 | — | — | 4 |
| RW | 7 | 아르다 투란 | Arda Turan | Club Atlético de Madrid | 1987-01-30 | 주전 | A- | — | — | — |
| ST | 13 | 앙투안 그리즈만 | Antoine Griezmann | Club Atlético de Madrid | 1991-03-21 | 주전 | A- | — | — | — |
| ST | 14 | 마리오 만주키치 | Mario Mandžukić | Club Atlético de Madrid | 1986-05-21 | 주전 | A- | — | — | — |
| ST | 26 | 페르난도 토레스 | Fernando Torres | Club Atlético de Madrid | 1984-03-20 | 후보 | B0 | — | — | — |

### Juventus FC — 18명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 1 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | 주전 | A+ | 13 | — | — |
| GK | 23 | 마르코 스토라리 | Marco Storari | Juventus FC | 1977-01-07 | 후보 | B- | — | — | — |
| CB | 3 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 | 주전 | A+ | — | — | — |
| CB | 5 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | 주전 | A+ | — | — | — |
| CB | 40 | 안젤로 오그본나 | Angelo Ogbonna | Juventus FC | 1988-05-23 | 후보 | B0 | — | — | — |
| LB | 8 | 파트리스 에브라 | Patrice Evra | Juventus FC | 1981-05-15 | 주전 | A- | — | — | — |
| LB | 22 | 시모네 파도인 | Simone Padoin | Juventus FC | 1984-03-18 | 후보 | B0 | — | — | — |
| RB | 4 | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus FC | 1984-01-16 | 주전 | A0 | 13 | — | — |
| RB | 22 | 마르틴 카세레스 | Martín Cáceres | Juventus FC | 1987-04-07 | 후보 | B0 | — | — | — |
| DM | 5 | 안드레아 피를로 | Andrea Pirlo | Juventus FC | 1979-05-19 | 주전 | A0 | — | — | — |
| CM | 3 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus FC | 1986-01-19 | 주전 | A+ | — | — | — |
| CM | 6 | 폴 포그바 | Paul Pogba | Juventus FC | 1993-03-15 | 주전 | A+ | — | — | — |
| CM | 29 | 스테파노 스투라로 | Stefano Sturaro | Juventus FC | 1993-03-09 | 후보 | B0 | — | — | — |
| CAM | 7 | 아르투로 비달 | Arturo Vidal | Juventus FC | 1987-05-22 | 주전 | A0 | — | — | — |
| CAM | 14 | 로베르토 페레이라 | Roberto Pereyra | Juventus FC | 1991-01-07 | 후보 | B+ | — | — | — |
| ST | 3 | 카를로스 테베스 | Carlos Tevez | Juventus FC | 1984-02-05 | 주전 | A+ | 13 | 7 | — |
| ST | 12 | 알바로 모라타 | Álvaro Morata | Juventus FC | 1992-10-23 | 주전 | A- | — | — | — |
| ST | 22 | 페르난도 요렌테 | Fernando Llorente | Juventus FC | 1985-02-26 | 후보 | B+ | — | — | — |

### Real Madrid CF — 18명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 14 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | 주전 | B+ | — | — | — |
| GK | 21 | 케일로르 나바스 | Keylor Navas | Real Madrid CF | 1986-12-15 | 후보 | B0 | — | — | — |
| CB | 6 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | 주전 | A+ | — | — | — |
| CB | 15 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | 주전 | A- | — | — | — |
| CB | 11 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 | 후보 | A- | — | — | — |
| LB | 2 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | 주전 | A+ | — | — | — |
| LB | 29 | 파비우 코엔트랑 | Fábio Coentrão | Real Madrid CF | 1988-03-11 | 후보 | B- | — | — | — |
| RB | 9 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | 주전 | A- | — | — | — |
| RB | 19 | 알바로 아르벨로아 | Álvaro Arbeloa | Real Madrid CF | 1983-01-17 | 후보 | B0 | — | — | — |
| DM | 2 | 토니 크로스 | Toni Kroos | Real Madrid CF | 1990-01-04 | 주전 | A+ | — | — | — |
| DM | 23 | 아시에르 이야라멘디 | Asier Illarramendi | Real Madrid CF | 1990-03-08 | 후보 | B0 | — | — | — |
| CM | 12 | 이스코 | Isco | Real Madrid CF | 1992-04-21 | 주전 | A- | — | — | — |
| CM | 18 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | 후보 | A- | — | — | — |
| CAM | 2 | 하메스 로드리게스 | James Rodríguez | Real Madrid CF | 1991-07-12 | 주전 | A+ | — | — | — |
| LW | 2 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | 주전 | S | — | 10 | 4 |
| RW | 6 | 가레스 베일 | Gareth Bale | Real Madrid CF | 1989-07-16 | 주전 | A- | — | — | — |
| ST | 11 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | 주전 | A0 | — | — | — |
| ST | 23 | 하비에르 에르난데스 | Javier Hernández | Real Madrid CF | 1988-06-01 | 후보 | B+ | — | — | — |

### FC Basel 1893 — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 12 | 토마시 바츨리크 | Tomáš Vaclík | FC Basel 1893 | 1989-03-29 | 주전 | B+ | 8 | 0 | 0 |
| GK | — | 게르마노 바일라티 | Germano Vailati | FC Basel 1893 | 1980-08-30 | 후보 | 미평가 | 0 | — | — |
| CB | 23 | 마렉 수히 | Marek Suchý | FC Basel 1893 | 1988-03-29 | 주전 | B+ | 8 | 1 | 0 |
| CB | 44 | 발터 사무엘 | Walter Samuel | FC Basel 1893 | 1978-03-23 | 주전 | B- | 4 | 0 | 0 |
| CB | 28 | 파비안 셰어 | Fabian Schär | FC Basel 1893 | 1991-12-20 | 후보 | B+ | 7 | 0 | 0 |
| LB | 19 | 베흐랑 사파리 | Behrang Safari | FC Basel 1893 | 1985-02-09 | 주전 | B0 | 7 | 0 | 0 |
| LB | 30 | 나세르 알리이 | Naser Aliji | FC Basel 1893 | 1993-12-27 | 후보 | C+ | 1 | 0 | 0 |
| RB | 12 | 타울란트 자카 | Taulant Xhaka | FC Basel 1893 | 1991-03-28 | 주전 | B+ | 7 | 0 | 0 |
| RB | 29 | 필리프 데겐 | Philipp Degen | FC Basel 1893 | 1983-02-15 | 후보 | C+ | 1 | 0 | 0 |
| DM | 8 | 파비안 프라이 | Fabian Frei | FC Basel 1893 | 1989-01-08 | 주전 | A- | 8 | 1 | 3 |
| DM | 30 | 세레이 디에 | Geoffroy Serey Dié | FC Basel 1893 | 1984-11-07 | 후보 | C+ | 2 | 0 | 0 |
| CM | 20 | 모하메드 엘네니 | Mohamed Elneny | FC Basel 1893 | 1992-07-11 | 주전 | B+ | 8 | 0 | 0 |
| CAM | 11 | 루카 추피 | Luca Zuffi | FC Basel 1893 | 1990-03-27 | 주전 | B+ | 7 | 0 | 2 |
| CAM | 20 | 마티아스 델가도 | Matías Delgado | FC Basel 1893 | 1982-12-15 | 후보 | C+ | 2 | 0 | 0 |
| LW | 17 | 슈켈젠 가시 | Shkelzen Gashi | FC Basel 1893 | 1988-07-15 | 주전 | B0 | 5 | 1 | 0 |
| LW | 23 | 다비데 칼라 | Davide Callà | FC Basel 1893 | 1984-10-06 | 후보 | C+ | 5 | 0 | 0 |
| RW | 4 | 데를리스 곤살레스 | Derlis González | FC Basel 1893 | 1994-03-20 | 주전 | A- | 8 | 3 | 0 |
| ST | 25 | 마르코 슈트렐러 | Marco Streller | FC Basel 1893 | 1981-06-18 | 주전 | B0 | 5 | 1 | 0 |
| ST | 18 | 브릴 엠볼로 | Breel Embolo | FC Basel 1893 | 1997-02-14 | 후보 | B+ | 8 | 1 | 1 |

### AS Monaco FC — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 5 | 다니옐 수바시치 | Danijel Subašić | AS Monaco FC | 1984-10-27 | 주전 | A0 | — | — | — |
| GK | 27 | 마르턴 스테켈렌뷔르흐 | Maarten Stekelenburg | AS Monaco FC | 1982-09-22 | 후보 | C- | — | — | — |
| CB | 18 | 히카르두 카르발류 | Ricardo Carvalho | AS Monaco FC | 1978-05-18 | 주전 | A- | — | — | — |
| CB | 30 | 안드레아 라지 | Andrea Raggi | AS Monaco FC | 1984-06-24 | 주전 | B+ | — | — | — |
| CB | 37 | 아이멘 압덴누르 | Aymen Abdennour | AS Monaco FC | 1989-08-06 | 후보 | B+ | — | — | — |
| LB | 7 | 레뱅 퀴르자와 | Layvin Kurzawa | AS Monaco FC | 1992-09-04 | 주전 | A- | — | — | — |
| LB | 24 | 엘데르송 | Elderson Echiejile | AS Monaco FC | 1988-01-20 | 후보 | B0 | — | — | — |
| RB | 7 | 파비뉴 | Fabinho | AS Monaco FC | 1993-10-23 | 주전 | A- | — | — | — |
| RB | 30 | 알마미 투레 | Almamy Touré | AS Monaco FC | 1996-04-28 | 후보 | C+ | — | — | — |
| DM | 6 | 제레미 툴랄랑 | Jérémy Toulalan | AS Monaco FC | 1983-09-10 | 주전 | A0 | — | — | — |
| DM | 27 | 티에무에 바카요코 | Tiémoué Bakayoko | AS Monaco FC | 1994-08-17 | 후보 | B- | — | — | — |
| CM | 14 | 조프레 콘도그비아 | Geoffrey Kondogbia | AS Monaco FC | 1993-02-15 | 주전 | A- | — | — | — |
| CAM | 4 | 주앙 모티뉴 | João Moutinho | AS Monaco FC | 1986-09-08 | 주전 | A0 | — | — | — |
| LW | 9 | 야니크 페레이라 카라스코 | Yannick Ferreira Carrasco | AS Monaco FC | 1993-09-04 | 주전 | A- | — | — | — |
| LW | 20 | 뤼카 오캄포스 | Lucas Ocampos | AS Monaco FC | 1994-07-11 | 후보 | B- | — | — | — |
| RW | 8 | 베르나르두 실바 | Bernardo Silva | AS Monaco FC | 1994-08-10 | 주전 | A- | — | — | — |
| RW | 19 | 나빌 디라르 | Nabil Dirar | AS Monaco FC | 1986-02-25 | 후보 | B0 | — | — | — |
| ST | 21 | 디미터르 베르바토프 | Dimitar Berbatov | AS Monaco FC | 1981-01-30 | 주전 | B+ | — | — | — |
| ST | 16 | 앙토니 마르시알 | Anthony Martial | AS Monaco FC | 1995-12-05 | 후보 | A- | — | — | — |

### Bayer 04 Leverkusen — 18명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 9 | 베른트 레노 | Bernd Leno | Bayer 04 Leverkusen | 1992-03-04 | 주전 | A- | — | — | — |
| CB | 13 | 외메르 토프라크 | Ömer Toprak | Bayer 04 Leverkusen | 1989-07-21 | 주전 | A- | — | — | — |
| CB | 29 | 에미르 스파히치 | Emir Spahić | Bayer 04 Leverkusen | 1980-08-18 | 주전 | B+ | — | — | — |
| CB | 41 | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | Bayer 04 Leverkusen | 1992-02-23 | 후보 | B0 | — | — | — |
| LB | 11 | 웬델 | Wendell | Bayer 04 Leverkusen | 1993-07-20 | 주전 | B+ | — | — | — |
| LB | 26 | 제바스티안 뵈니슈 | Sebastian Boenisch | Bayer 04 Leverkusen | 1987-02-01 | 후보 | B- | — | — | — |
| RB | 14 | 로베르토 힐베르트 | Roberto Hilbert | Bayer 04 Leverkusen | 1984-10-16 | 주전 | B+ | — | — | — |
| RB | 28 | 줄리오 도나티 | Giulio Donati | Bayer 04 Leverkusen | 1990-02-05 | 후보 | B- | — | — | — |
| DM | 17 | 지몬 롤페스 | Simon Rolfes | Bayer 04 Leverkusen | 1982-01-21 | 주전 | B+ | — | — | — |
| DM | 24 | 슈테판 라이나르츠 | Stefan Reinartz | Bayer 04 Leverkusen | 1989-01-01 | 후보 | B0 | — | — | — |
| CM | 13 | 라르스 벤더 | Lars Bender | Bayer 04 Leverkusen | 1989-04-27 | 주전 | A- | — | — | — |
| CM | 23 | 곤살로 카스트로 | Gonzalo Castro | Bayer 04 Leverkusen | 1987-06-11 | 후보 | B+ | — | — | — |
| CAM | 5 | 하칸 찰하놀루 | Hakan Çalhanoğlu | Bayer 04 Leverkusen | 1994-02-08 | 주전 | A0 | — | — | — |
| LW | 7 | 손흥민 | Son Heung-min | Bayer 04 Leverkusen | 1992-07-08 | 주전 | A0 | — | — | — |
| LW | 16 | 율리안 브란트 | Julian Brandt | Bayer 04 Leverkusen | 1996-05-02 | 후보 | B+ | — | — | — |
| RW | 3 | 카림 벨라라비 | Karim Bellarabi | Bayer 04 Leverkusen | 1990-04-08 | 주전 | A0 | — | — | — |
| ST | 19 | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 | 주전 | B+ | — | — | — |
| ST | 27 | 요시프 드르미치 | Josip Drmić | Bayer 04 Leverkusen | 1992-08-08 | 후보 | B0 | — | — | — |

### Borussia Dortmund — 20명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 17 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 | 주전 | B+ | — | — | — |
| GK | 20 | 미첼 랑게라크 | Mitchell Langerak | Borussia Dortmund | 1988-08-22 | 후보 | B0 | — | — | — |
| CB | 16 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 | 주전 | A- | — | — | — |
| CB | 31 | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | 1988-12-10 | 주전 | B+ | — | — | — |
| CB | 42 | 마티아스 긴터 | Matthias Ginter | Borussia Dortmund | 1994-01-19 | 후보 | B0 | — | — | — |
| LB | 13 | 마르첼 슈멜처 | Marcel Schmelzer | Borussia Dortmund | 1988-01-22 | 주전 | B+ | — | — | — |
| LB | 20 | 에리크 두름 | Erik Durm | Borussia Dortmund | 1992-05-12 | 후보 | B0 | — | — | — |
| RB | 10 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 | 주전 | A- | — | — | — |
| RB | 26 | 케빈 그로스크로이츠 | Kevin Großkreutz | Borussia Dortmund | 1988-07-19 | 후보 | B- | — | — | — |
| DM | 16 | 제바스티안 켈 | Sebastian Kehl | Borussia Dortmund | 1980-02-13 | 주전 | B+ | — | — | — |
| DM | 20 | 스벤 벤더 | Sven Bender | Borussia Dortmund | 1989-04-27 | 후보 | B0 | — | — | — |
| CM | 15 | 일카이 귄도안 | İlkay Gündoğan | Borussia Dortmund | 1990-10-24 | 주전 | A- | — | — | — |
| CM | 32 | 누리 샤힌 | Nuri Şahin | Borussia Dortmund | 1988-09-05 | 후보 | B- | — | — | — |
| CAM | 12 | 가가와 신지 | Shinji Kagawa | Borussia Dortmund | 1989-03-17 | 주전 | B+ | — | — | — |
| CAM | 19 | 케빈 캄플 | Kevin Kampl | Borussia Dortmund | 1990-10-09 | 후보 | B- | — | — | — |
| LW | 8 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 | 주전 | A- | — | — | — |
| RW | 12 | 헨리크 미키타리안 | Henrikh Mkhitaryan | Borussia Dortmund | 1989-01-21 | 주전 | B+ | — | — | — |
| RW | 22 | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | Borussia Dortmund | 1985-12-14 | 후보 | B- | — | — | — |
| ST | 5 | 피에르에메리크 오바메양 | Pierre-Emerick Aubameyang | Borussia Dortmund | 1989-06-18 | 주전 | A+ | — | — | — |
| ST | 29 | 치로 임모빌레 | Ciro Immobile | Borussia Dortmund | 1990-02-20 | 후보 | B- | — | — | — |

### Arsenal FC — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 19 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 | 주전 | B0 | — | — | — |
| GK | 18 | 다비드 오스피나 | David Ospina | Arsenal FC | 1988-08-31 | 후보 | B+ | — | — | — |
| CB | 10 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 | 주전 | A+ | — | — | — |
| CB | 20 | 페어 메르테자커 | Per Mertesacker | Arsenal FC | 1984-09-29 | 주전 | A- | — | — | — |
| LB | 9 | 나초 몬레알 | Nacho Monreal | Arsenal FC | 1986-02-26 | 주전 | A- | — | — | — |
| LB | 18 | 키런 깁스 | Kieran Gibbs | Arsenal FC | 1989-09-26 | 후보 | B+ | — | — | — |
| RB | 16 | 엑토르 베예린 | Héctor Bellerín | Arsenal FC | 1995-03-19 | 주전 | B+ | — | — | — |
| RB | 24 | 마티외 드뷔시 | Mathieu Debuchy | Arsenal FC | 1985-07-28 | 후보 | B0 | — | — | — |
| DM | 13 | 프랑시스 코클랭 | Francis Coquelin | Arsenal FC | 1991-05-13 | 주전 | A- | — | — | — |
| DM | 29 | 마티외 플라미니 | Mathieu Flamini | Arsenal FC | 1984-03-07 | 후보 | B- | — | — | — |
| CM | 7 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 | 주전 | A+ | — | — | — |
| CM | 19 | 애런 램지 | Aaron Ramsey | Arsenal FC | 1990-12-26 | 후보 | A- | — | — | — |
| CAM | 8 | 메수트 외질 | Mesut Özil | Arsenal FC | 1988-10-15 | 주전 | A0 | — | — | — |
| CAM | 17 | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | 후보 | B0 | — | — | — |
| LW | 4 | 알렉시스 산체스 | Alexis Sánchez | Arsenal FC | 1988-12-19 | 주전 | A+ | — | — | — |
| RW | 13 | 앨릭스 옥슬레이드체임벌린 | Alex Oxlade-Chamberlain | Arsenal FC | 1993-08-15 | 주전 | B+ | — | — | — |
| RW | 20 | 시오 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 | 후보 | B0 | — | — | — |
| ST | 15 | 올리비에 지루 | Olivier Giroud | Arsenal FC | 1986-09-30 | 주전 | A- | — | — | — |
| ST | 28 | 대니 웰벡 | Danny Welbeck | Arsenal FC | 1990-11-26 | 후보 | B0 | — | — | — |

### FC Bayern München — 20명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 2 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | 주전 | A+ | — | — | — |
| GK | 24 | 페페 레이나 | Pepe Reina | FC Bayern München | 1982-08-31 | 후보 | B- | — | — | — |
| CB | 8 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | 주전 | A+ | — | — | — |
| CB | 33 | 메디 베나티아 | Medhi Benatia | FC Bayern München | 1987-04-17 | 주전 | B+ | — | — | — |
| CB | 45 | 홀거 바트슈투버 | Holger Badstuber | FC Bayern München | 1989-03-13 | 후보 | B- | — | — | — |
| LB | 3 | 후안 베르나트 | Juan Bernat | FC Bayern München | 1993-03-01 | 주전 | A+ | — | — | — |
| RB | 2 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | 주전 | A+ | — | — | — |
| RB | 17 | 하피냐 | Rafinha | FC Bayern München | 1985-09-07 | 후보 | B+ | — | — | — |
| DM | 7 | 사비 알론소 | Xabi Alonso | FC Bayern München | 1981-11-25 | 주전 | A0 | — | — | — |
| DM | 4 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | 후보 | A+ | — | — | — |
| CM | 10 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | 주전 | A- | — | — | 4 |
| CM | 28 | 제바스티안 로데 | Sebastian Rode | FC Bayern München | 1990-10-11 | 후보 | B0 | — | — | — |
| CAM | 6 | 마리오 괴체 | Mario Götze | FC Bayern München | 1992-06-03 | 주전 | A0 | — | — | — |
| CAM | 21 | 잔루카 가우디노 | Gianluca Gaudino | FC Bayern München | 1996-11-11 | 후보 | C+ | — | — | — |
| LW | 10 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | 주전 | A- | — | — | — |
| LW | 21 | 제르단 샤키리 | Xherdan Shaqiri | FC Bayern München | 1991-10-10 | 후보 | B- | — | — | — |
| RW | 2 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | 주전 | A+ | 7 | 2 | — |
| RW | 21 | 미첼 바이저 | Mitchell Weiser | FC Bayern München | 1994-04-21 | 후보 | B- | — | — | — |
| ST | 4 | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | 1988-08-21 | 주전 | A+ | — | — | — |
| ST | 32 | 클라우디오 피사로 | Claudio Pizarro | FC Bayern München | 1978-10-03 | 후보 | C+ | — | — | — |

### Manchester City FC — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 8 | 조 하트 | Joe Hart | Manchester City FC | 1987-04-19 | 주전 | A- | — | — | — |
| GK | 26 | 윌리 카바예로 | Willy Caballero | Manchester City FC | 1981-09-28 | 후보 | C+ | — | — | — |
| CB | 21 | 뱅상 콤파니 | Vincent Kompany | Manchester City FC | 1986-04-10 | 주전 | A- | — | — | — |
| CB | 34 | 마르틴 데미첼리스 | Martín Demichelis | Manchester City FC | 1980-12-20 | 주전 | B+ | — | — | — |
| CB | 46 | 엘리아킴 망갈라 | Eliaquim Mangala | Manchester City FC | 1991-02-13 | 후보 | B- | — | — | — |
| LB | 15 | 가엘 클리시 | Gaël Clichy | Manchester City FC | 1985-07-26 | 주전 | B+ | — | — | — |
| LB | 16 | 알렉산다르 콜라로프 | Aleksandar Kolarov | Manchester City FC | 1985-11-10 | 후보 | B+ | — | — | — |
| RB | 11 | 파블로 사발레타 | Pablo Zabaleta | Manchester City FC | 1985-01-16 | 주전 | A- | — | — | — |
| RB | 23 | 바카리 사냐 | Bacary Sagna | Manchester City FC | 1983-02-14 | 후보 | B0 | — | — | — |
| DM | 12 | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | 주전 | A- | — | — | — |
| DM | 25 | 페르난두 | Fernando | Manchester City FC | 1987-07-25 | 후보 | B0 | — | — | — |
| CM | 16 | 야야 투레 | Yaya Touré | Manchester City FC | 1983-05-13 | 주전 | A- | — | — | — |
| CM | 26 | 프랭크 램퍼드 | Frank Lampard | Manchester City FC | 1978-06-20 | 후보 | B+ | — | — | — |
| CAM | 3 | 다비드 실바 | David Silva | Manchester City FC | 1986-01-08 | 주전 | A+ | — | — | — |
| LW | 13 | 제임스 밀너 | James Milner | Manchester City FC | 1986-01-04 | 주전 | B+ | — | — | — |
| LW | 19 | 사미르 나스리 | Samir Nasri | Manchester City FC | 1987-06-26 | 후보 | B0 | — | — | — |
| RW | 18 | 헤수스 나바스 | Jesús Navas | Manchester City FC | 1985-11-21 | 주전 | B0 | — | — | — |
| ST | 9 | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | 1988-06-02 | 주전 | A0 | — | — | — |
| ST | 30 | 에딘 제코 | Edin Džeko | Manchester City FC | 1986-03-17 | 후보 | B- | — | — | — |

### FC Barcelona — 17명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 4 | 마르크안드레 테어 슈테겐 | Marc-André ter Stegen | FC Barcelona | 1992-04-30 | 주전 | A+ | 13 | 0 | — |
| GK | — | 클라우디오 브라보 | Claudio Bravo | FC Barcelona | 1983-04-13 | 후보 | 미평가 | 0 | 0 | — |
| CB | 1 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | 주전 | A+ | 11 | — | — |
| CB | 2 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 | 주전 | A+ | 12 | — | — |
| CB | 35 | 제레미 마티외 | Jérémy Mathieu | FC Barcelona | 1983-10-29 | 후보 | B+ | — | — | — |
| LB | 1 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | 주전 | A+ | — | — | — |
| LB | 23 | 아드리아누 코헤이아 | Adriano Correia | FC Barcelona | 1984-10-26 | 후보 | B0 | — | — | — |
| RB | 1 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | 주전 | A+ | — | — | 4 |
| RB | 27 | 마르틴 몬토야 | Martín Montoya | FC Barcelona | 1991-04-14 | 후보 | B- | — | — | — |
| DM | 1 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | 주전 | A+ | — | — | — |
| CM | 1 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | 주전 | A+ | — | — | 5 |
| CM | 2 | 이반 라키티치 | Ivan Rakitić | FC Barcelona | 1988-03-10 | 주전 | A+ | — | — | — |
| CM | 17 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | 후보 | A- | — | — | — |
| LW | 1 | 네이마르 | Neymar | FC Barcelona | 1992-02-05 | 주전 | S | — | 10 | — |
| RW | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | 주전 | S | 13 | 10 | 6 |
| RW | 15 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 | 후보 | B+ | — | — | — |
| ST | 1 | 루이스 수아레스 | Luis Suárez | FC Barcelona | 1987-01-24 | 주전 | S | — | — | — |

### Paris Saint-Germain FC — 20명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 6 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 | 주전 | A0 | — | — | — |
| GK | 25 | 니콜라 두셰 | Nicolas Douchez | Paris Saint-Germain FC | 1980-04-22 | 후보 | C+ | — | — | — |
| CB | 7 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 | 주전 | A+ | — | — | — |
| CB | 14 | 다비드 루이스 | David Luiz | Paris Saint-Germain FC | 1987-04-22 | 주전 | A- | — | — | — |
| CB | 22 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | 후보 | A- | — | — | — |
| LB | 5 | 막스웰 | Maxwell | Paris Saint-Germain FC | 1981-08-27 | 주전 | A0 | — | — | — |
| LB | 21 | 뤼카 디뉴 | Lucas Digne | Paris Saint-Germain FC | 1993-07-20 | 후보 | B0 | — | — | — |
| RB | 13 | 그레고리 판데르빌 | Gregory van der Wiel | Paris Saint-Germain FC | 1988-02-03 | 주전 | B+ | — | — | — |
| RB | 18 | 세르주 오리에 | Serge Aurier | Paris Saint-Germain FC | 1992-12-24 | 후보 | B+ | — | — | — |
| DM | 11 | 티아구 모타 | Thiago Motta | Paris Saint-Germain FC | 1982-08-28 | 주전 | A- | — | — | — |
| DM | 21 | 요앙 카바예 | Yohan Cabaye | Paris Saint-Germain FC | 1986-01-14 | 후보 | B0 | — | — | — |
| CM | 4 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | 주전 | A+ | — | — | — |
| CM | 5 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 | 주전 | A+ | — | — | — |
| CM | 24 | 아드리앙 라비오 | Adrien Rabiot | Paris Saint-Germain FC | 1995-04-03 | 후보 | B+ | — | — | — |
| CAM | 1 | 하비에르 파스토레 | Javier Pastore | Paris Saint-Germain FC | 1989-06-20 | 주전 | A+ | — | — | — |
| LW | 15 | 에세키엘 라베시 | Ezequiel Lavezzi | Paris Saint-Germain FC | 1985-05-03 | 후보 | B+ | — | — | — |
| RW | 14 | 루카스 모우라 | Lucas Moura | Paris Saint-Germain FC | 1992-08-13 | 후보 | B+ | — | — | — |
| ST | 2 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 | 주전 | A+ | 6 | 2 | — |
| ST | 10 | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | 1987-02-14 | 주전 | A0 | — | — | — |
| ST | 31 | 장크리스토프 바에베크 | Jean-Christophe Bahebeck | Paris Saint-Germain FC | 1993-05-01 | 후보 | C+ | — | — | — |

### Chelsea FC — 18명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 3 | 티보 쿠르투아 | Thibaut Courtois | Chelsea FC | 1992-05-11 | 주전 | A+ | — | — | — |
| GK | 11 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | 후보 | A- | — | — | — |
| CB | 9 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | 주전 | A+ | — | — | — |
| CB | 19 | 게리 케이힐 | Gary Cahill | Chelsea FC | 1985-12-19 | 주전 | A- | — | — | — |
| CB | 43 | 커트 주마 | Kurt Zouma | Chelsea FC | 1994-10-27 | 후보 | B0 | — | — | — |
| LB | 4 | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 | 주전 | A+ | — | — | — |
| LB | 17 | 필리페 루이스 | Filipe Luís | Chelsea FC | 1985-08-09 | 후보 | B+ | — | — | — |
| RB | 3 | 브라니슬라프 이바노비치 | Branislav Ivanović | Chelsea FC | 1984-02-22 | 주전 | A0 | — | — | — |
| DM | 3 | 네마냐 마티치 | Nemanja Matić | Chelsea FC | 1988-08-01 | 주전 | A+ | — | — | — |
| DM | 28 | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | 후보 | B- | — | — | — |
| CM | 9 | 세스크 파브레가스 | Cesc Fàbregas | Chelsea FC | 1987-05-04 | 주전 | A0 | — | — | 4 |
| CM | 30 | 하미레스 | Ramires | Chelsea FC | 1987-03-24 | 후보 | B0 | — | — | — |
| CAM | 10 | 오스카르 | Oscar | Chelsea FC | 1991-09-09 | 주전 | A- | — | — | — |
| LW | 3 | 에덴 아자르 | Eden Hazard | Chelsea FC | 1991-01-07 | 주전 | A+ | 7 | 3 | — |
| LW | 22 | 안드레 쉬를레 | André Schürrle | Chelsea FC | 1990-11-06 | 후보 | B- | — | — | — |
| RW | 9 | 윌리안 | Willian | Chelsea FC | 1988-08-09 | 주전 | A- | — | — | — |
| ST | 6 | 디에고 코스타 | Diego Costa | Chelsea FC | 1988-10-07 | 주전 | A+ | — | — | — |
| ST | 24 | 로익 레미 | Loïc Rémy | Chelsea FC | 1987-01-02 | 후보 | B+ | — | — | — |

### FC Schalke 04 — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 16 | 랄프 페어만 | Ralf Fährmann | FC Schalke 04 | 1988-09-27 | 주전 | B+ | — | — | — |
| GK | 22 | 티몬 벨렌로이터 | Timon Wellenreuther | FC Schalke 04 | 1995-12-03 | 후보 | B- | — | — | — |
| CB | 12 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | 주전 | A- | — | — | — |
| CB | 32 | 조엘 마티프 | Joël Matip | FC Schalke 04 | 1991-08-08 | 주전 | B+ | — | — | — |
| CB | 38 | 마티야 나스타시치 | Matija Nastasić | FC Schalke 04 | 1993-03-28 | 후보 | B+ | — | — | — |
| LB | 14 | 크리스티안 푹스 | Christian Fuchs | FC Schalke 04 | 1986-04-07 | 주전 | B+ | — | — | — |
| LB | 28 | 세아드 콜라시나츠 | Sead Kolašinac | FC Schalke 04 | 1993-06-20 | 후보 | B- | — | — | — |
| RB | 15 | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | 주전 | B+ | — | — | — |
| RB | 21 | 칸 아이한 | Kaan Ayhan | FC Schalke 04 | 1994-11-10 | 후보 | B0 | — | — | — |
| DM | 15 | 로만 노이슈테터 | Roman Neustädter | FC Schalke 04 | 1988-02-18 | 주전 | B+ | — | — | — |
| DM | 26 | 얀 키르히호프 | Jan Kirchhoff | FC Schalke 04 | 1990-10-01 | 후보 | B- | — | — | — |
| CM | 22 | 마르코 회거 | Marco Höger | FC Schalke 04 | 1989-09-16 | 주전 | B+ | — | — | — |
| CAM | 13 | 막스 마이어 | Max Meyer | FC Schalke 04 | 1995-09-18 | 주전 | B+ | — | — | — |
| CAM | 16 | 케빈프린스 보아텡 | Kevin-Prince Boateng | FC Schalke 04 | 1987-03-06 | 후보 | B0 | — | — | — |
| LW | 12 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | 주전 | B+ | — | — | — |
| LW | 14 | 에리크 막심 추포모팅 | Eric Maxim Choupo-Moting | FC Schalke 04 | 1989-03-23 | 후보 | B+ | — | — | — |
| RW | 17 | 트란퀼로 바르네타 | Tranquillo Barnetta | FC Schalke 04 | 1985-05-22 | 주전 | B0 | — | — | — |
| RW | 23 | 헤페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | 후보 | B- | — | — | — |
| ST | 20 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | 주전 | B+ | — | — | — |

### FC Porto — 20명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 7 | 파비아누 | Fabiano Ribeiro | FC Porto | 1988-02-29 | 주전 | A- | 9 | 0 | 0 |
| GK | — | 엘통 | Helton | FC Porto | 1978-05-18 | 후보 | 미평가 | 0 | — | — |
| CB | 24 | 마이콩 | Maicon | FC Porto | 1988-09-14 | 주전 | B+ | 9 | 0 | 0 |
| CB | 26 | 이반 마르카노 | Iván Marcano | FC Porto | 1987-06-23 | 주전 | B+ | 6 | 0 | 0 |
| CB | 27 | 브루노 마르틴스 인디 | Bruno Martins Indi | FC Porto | 1992-02-08 | 후보 | B+ | 9 | 0 | 0 |
| LB | 6 | 알렉스 산드루 | Alex Sandro | FC Porto | 1991-01-26 | 주전 | A- | 9 | 0 | 1 |
| LB | — | 호세 앙헬 | José Ángel | FC Porto | 1989-09-05 | 후보 | 미평가 | 0 | — | — |
| RB | 5 | 다닐루 | Danilo | FC Porto | 1991-07-15 | 주전 | A- | 8 | 1 | 1 |
| RB | 25 | 히카르두 페레이라 | Ricardo Pereira | FC Porto | 1993-10-06 | 후보 | B- | 2 | 0 | 0 |
| DM | 9 | 카세미루 | Casemiro | FC Porto | 1992-02-23 | 주전 | A- | 8 | 1 | 1 |
| DM | 19 | 루벤 네베스 | Rúben Neves | FC Porto | 1997-03-13 | 후보 | B0 | 7 | 0 | 0 |
| CM | 8 | 엑토르 에레라 | Héctor Herrera | FC Porto | 1990-04-19 | 주전 | A0 | 9 | 3 | 3 |
| CM | 21 | 올리베르 토레스 | Óliver Torres | FC Porto | 1994-11-10 | 주전 | B+ | 8 | 0 | 0 |
| CM | 31 | 에반드루 | Evandro | FC Porto | 1986-08-23 | 후보 | B- | 5 | 0 | 0 |
| CAM | 18 | 후안 페르난도 킨테로 | Juan Fernando Quintero | FC Porto | 1993-01-18 | 후보 | B- | 5 | 0 | 1 |
| LW | 5 | 야신 브라히미 | Yacine Brahimi | FC Porto | 1990-02-08 | 주전 | A0 | 9 | 5 | 3 |
| RW | 10 | 크리스티안 테요 | Cristian Tello | FC Porto | 1991-08-11 | 주전 | B+ | 7 | 1 | 2 |
| RW | 5 | 히카르두 콰레스마 | Ricardo Quaresma | FC Porto | 1983-09-26 | 후보 | A- | 9 | 3 | 0 |
| ST | 7 | 잭슨 마르티네스 | Jackson Martínez | FC Porto | 1986-10-03 | 주전 | A+ | 8 | 7 | 0 |
| ST | 17 | 뱅상 아부바카르 | Vincent Aboubakar | FC Porto | 1992-01-22 | 후보 | B+ | 4 | 3 | 0 |

### FC Shakhtar Donetsk — 19명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 구분 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 13 | 안드리 퍄토우 | Andriy Pyatov | FC Shakhtar Donetsk | 1984-06-28 | 주전 | B+ | 7 | 0 | 0 |
| GK | — | 안톤 카니볼로츠키 | Anton Kanibolotskiy | FC Shakhtar Donetsk | 1988-05-16 | 후보 | 미평가 | 0 | — | — |
| CB | 25 | 야로슬라우 라키츠키 | Yaroslav Rakitskiy | FC Shakhtar Donetsk | 1989-08-03 | 주전 | B+ | 8 | 0 | 0 |
| CB | 39 | 올렉산드르 쿠체르 | Oleksandr Kucher | FC Shakhtar Donetsk | 1982-10-22 | 주전 | B0 | 6 | 1 | 0 |
| CB | 47 | 이반 오르데츠 | Ivan Ordets | FC Shakhtar Donetsk | 1992-07-08 | 후보 | C+ | 1 | 1 | 0 |
| LB | 10 | 비야체슬라우 셰우추크 | Vyacheslav Shevchuk | FC Shakhtar Donetsk | 1979-05-13 | 주전 | B+ | 7 | 2 | 0 |
| LB | 25 | 마르시우 아제베두 | Márcio Azevedo | FC Shakhtar Donetsk | 1986-02-05 | 후보 | B- | 2 | 0 | 0 |
| RB | 6 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk | 1982-05-01 | 주전 | A- | 7 | 1 | 1 |
| DM | 14 | 타라스 스테파넨코 | Taras Stepanenko | FC Shakhtar Donetsk | 1989-08-08 | 주전 | B+ | 7 | 1 | 0 |
| DM | 18 | 페르난두 | Fernando Lucas Martins | FC Shakhtar Donetsk | 1992-03-03 | 후보 | B0 | 7 | 0 | 0 |
| CM | 27 | 프레드 | Fred | FC Shakhtar Donetsk | 1993-03-05 | 주전 | B0 | 7 | 0 | 0 |
| CAM | 9 | 알렉스 테이셰이라 | Alex Teixeira | FC Shakhtar Donetsk | 1990-01-06 | 주전 | A- | 8 | 3 | 0 |
| CAM | — | 빅토르 코발렌코 | Viktor Kovalenko | FC Shakhtar Donetsk | 1996-02-14 | 후보 | 미평가 | 0 | — | — |
| LW | 11 | 타이송 | Taison | FC Shakhtar Donetsk | 1988-01-13 | 주전 | B+ | 8 | 0 | 2 |
| LW | 18 | 베르나르드 | Bernard | FC Shakhtar Donetsk | 1992-09-08 | 후보 | B0 | 5 | 0 | 2 |
| RW | 11 | 더글라스 코스타 | Douglas Costa | FC Shakhtar Donetsk | 1990-09-14 | 주전 | B+ | 8 | 1 | 1 |
| RW | 16 | 마를루스 | Marlos | FC Shakhtar Donetsk | 1988-06-07 | 후보 | B0 | 6 | 0 | 0 |
| ST | 8 | 루이스 아드리아누 | Luiz Adriano | FC Shakhtar Donetsk | 1987-04-12 | 주전 | A0 | 7 | 9 | 1 |
| ST | — | 에두아르두 | Eduardo da Silva | FC Shakhtar Donetsk | 1983-02-25 | 후보 | 미평가 | 0 | — | — |

## 전 302명 — UCL 전체 포지션별 상대 순위 통합표

미평가 7명은 각 포지션의 맨 아래에 별도 표시하되 **임의 확정 순위를 부여하지 않는다.**

### GK — 31명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| GK | 1 | 잔루이지 부폰 | Gianluigi Buffon | Juventus FC | 1978-01-28 | 주전 | A+ | 13 | — | — |
| GK | 2 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | 주전 | A+ | — | — | — |
| GK | 3 | 티보 쿠르투아 | Thibaut Courtois | Chelsea FC | 1992-05-11 | 주전 | A+ | — | — | — |
| GK | 4 | 마르크안드레 테어 슈테겐 | Marc-André ter Stegen | FC Barcelona | 1992-04-30 | 주전 | A+ | 13 | 0 | — |
| GK | 5 | 다니옐 수바시치 | Danijel Subašić | AS Monaco FC | 1984-10-27 | 주전 | A0 | — | — | — |
| GK | 6 | 살바토레 시리구 | Salvatore Sirigu | Paris Saint-Germain FC | 1987-01-12 | 주전 | A0 | — | — | — |
| GK | 7 | 파비아누 | Fabiano Ribeiro | FC Porto | 1988-02-29 | 주전 | A- | 9 | 0 | 0 |
| GK | 8 | 조 하트 | Joe Hart | Manchester City FC | 1987-04-19 | 주전 | A- | — | — | — |
| GK | 9 | 베른트 레노 | Bernd Leno | Bayer 04 Leverkusen | 1992-03-04 | 주전 | A- | — | — | — |
| GK | 10 | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | 1993-01-07 | 후보 | A- | — | — | — |
| GK | 11 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | 후보 | A- | — | — | — |
| GK | 12 | 토마시 바츨리크 | Tomáš Vaclík | FC Basel 1893 | 1989-03-29 | 주전 | B+ | 8 | 0 | 0 |
| GK | 13 | 안드리 퍄토우 | Andriy Pyatov | FC Shakhtar Donetsk | 1984-06-28 | 주전 | B+ | 7 | 0 | 0 |
| GK | 14 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | 주전 | B+ | — | — | — |
| GK | 15 | 미겔 앙헬 모야 | Miguel Ángel Moyá | Club Atlético de Madrid | 1984-04-02 | 주전 | B+ | — | — | — |
| GK | 16 | 랄프 페어만 | Ralf Fährmann | FC Schalke 04 | 1988-09-27 | 주전 | B+ | — | — | — |
| GK | 17 | 로만 바이덴펠러 | Roman Weidenfeller | Borussia Dortmund | 1980-08-06 | 주전 | B+ | — | — | — |
| GK | 18 | 다비드 오스피나 | David Ospina | Arsenal FC | 1988-08-31 | 후보 | B+ | — | — | — |
| GK | 19 | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Arsenal FC | 1990-04-18 | 주전 | B0 | — | — | — |
| GK | 20 | 미첼 랑게라크 | Mitchell Langerak | Borussia Dortmund | 1988-08-22 | 후보 | B0 | — | — | — |
| GK | 21 | 케일로르 나바스 | Keylor Navas | Real Madrid CF | 1986-12-15 | 후보 | B0 | — | — | — |
| GK | 22 | 티몬 벨렌로이터 | Timon Wellenreuther | FC Schalke 04 | 1995-12-03 | 후보 | B- | — | — | — |
| GK | 23 | 마르코 스토라리 | Marco Storari | Juventus FC | 1977-01-07 | 후보 | B- | — | — | — |
| GK | 24 | 페페 레이나 | Pepe Reina | FC Bayern München | 1982-08-31 | 후보 | B- | — | — | — |
| GK | 25 | 니콜라 두셰 | Nicolas Douchez | Paris Saint-Germain FC | 1980-04-22 | 후보 | C+ | — | — | — |
| GK | 26 | 윌리 카바예로 | Willy Caballero | Manchester City FC | 1981-09-28 | 후보 | C+ | — | — | — |
| GK | 27 | 마르턴 스테켈렌뷔르흐 | Maarten Stekelenburg | AS Monaco FC | 1982-09-22 | 후보 | C- | — | — | — |
| GK | — | 게르마노 바일라티 | Germano Vailati | FC Basel 1893 | 1980-08-30 | 후보 | 미평가 | 0 | — | — |
| GK | — | 안톤 카니볼로츠키 | Anton Kanibolotskiy | FC Shakhtar Donetsk | 1988-05-16 | 후보 | 미평가 | 0 | — | — |
| GK | — | 엘통 | Helton | FC Porto | 1978-05-18 | 후보 | 미평가 | 0 | — | — |
| GK | — | 클라우디오 브라보 | Claudio Bravo | FC Barcelona | 1983-04-13 | 후보 | 미평가 | 0 | 0 | — |

### CB — 47명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| CB | 1 | 제라르 피케 | Gerard Piqué | FC Barcelona | 1987-02-02 | 주전 | A+ | 11 | — | — |
| CB | 2 | 하비에르 마스체라노 | Javier Mascherano | FC Barcelona | 1984-06-08 | 주전 | A+ | 12 | — | — |
| CB | 3 | 조르조 키엘리니 | Giorgio Chiellini | Juventus FC | 1984-08-14 | 주전 | A+ | — | — | — |
| CB | 4 | 디에고 고딘 | Diego Godín | Club Atlético de Madrid | 1986-02-16 | 주전 | A+ | — | — | — |
| CB | 5 | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | 주전 | A+ | — | — | — |
| CB | 6 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | 주전 | A+ | — | — | — |
| CB | 7 | 치아구 실바 | Thiago Silva | Paris Saint-Germain FC | 1984-09-22 | 주전 | A+ | — | — | — |
| CB | 8 | 제롬 보아텡 | Jérôme Boateng | FC Bayern München | 1988-09-03 | 주전 | A+ | — | — | — |
| CB | 9 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | 주전 | A+ | — | — | — |
| CB | 10 | 로랑 코시엘니 | Laurent Koscielny | Arsenal FC | 1985-09-10 | 주전 | A+ | — | — | — |
| CB | 11 | 라파엘 바란 | Raphaël Varane | Real Madrid CF | 1993-04-25 | 후보 | A- | — | — | — |
| CB | 12 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | 주전 | A- | — | — | — |
| CB | 13 | 외메르 토프라크 | Ömer Toprak | Bayer 04 Leverkusen | 1989-07-21 | 주전 | A- | — | — | — |
| CB | 14 | 다비드 루이스 | David Luiz | Paris Saint-Germain FC | 1987-04-22 | 주전 | A- | — | — | — |
| CB | 15 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | 주전 | A- | — | — | — |
| CB | 16 | 마츠 후멜스 | Mats Hummels | Borussia Dortmund | 1988-12-16 | 주전 | A- | — | — | — |
| CB | 17 | 미란다 | Miranda | Club Atlético de Madrid | 1984-09-07 | 주전 | A- | — | — | — |
| CB | 18 | 히카르두 카르발류 | Ricardo Carvalho | AS Monaco FC | 1978-05-18 | 주전 | A- | — | — | — |
| CB | 19 | 게리 케이힐 | Gary Cahill | Chelsea FC | 1985-12-19 | 주전 | A- | — | — | — |
| CB | 20 | 페어 메르테자커 | Per Mertesacker | Arsenal FC | 1984-09-29 | 주전 | A- | — | — | — |
| CB | 21 | 뱅상 콤파니 | Vincent Kompany | Manchester City FC | 1986-04-10 | 주전 | A- | — | — | — |
| CB | 22 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | 후보 | A- | — | — | — |
| CB | 23 | 마렉 수히 | Marek Suchý | FC Basel 1893 | 1988-03-29 | 주전 | B+ | 8 | 1 | 0 |
| CB | 24 | 마이콩 | Maicon | FC Porto | 1988-09-14 | 주전 | B+ | 9 | 0 | 0 |
| CB | 25 | 야로슬라우 라키츠키 | Yaroslav Rakitskiy | FC Shakhtar Donetsk | 1989-08-03 | 주전 | B+ | 8 | 0 | 0 |
| CB | 26 | 이반 마르카노 | Iván Marcano | FC Porto | 1987-06-23 | 주전 | B+ | 6 | 0 | 0 |
| CB | 27 | 브루노 마르틴스 인디 | Bruno Martins Indi | FC Porto | 1992-02-08 | 후보 | B+ | 9 | 0 | 0 |
| CB | 28 | 파비안 셰어 | Fabian Schär | FC Basel 1893 | 1991-12-20 | 후보 | B+ | 7 | 0 | 0 |
| CB | 29 | 에미르 스파히치 | Emir Spahić | Bayer 04 Leverkusen | 1980-08-18 | 주전 | B+ | — | — | — |
| CB | 30 | 안드레아 라지 | Andrea Raggi | AS Monaco FC | 1984-06-24 | 주전 | B+ | — | — | — |
| CB | 31 | 네벤 수보티치 | Neven Subotić | Borussia Dortmund | 1988-12-10 | 주전 | B+ | — | — | — |
| CB | 32 | 조엘 마티프 | Joël Matip | FC Schalke 04 | 1991-08-08 | 주전 | B+ | — | — | — |
| CB | 33 | 메디 베나티아 | Medhi Benatia | FC Bayern München | 1987-04-17 | 주전 | B+ | — | — | — |
| CB | 34 | 마르틴 데미첼리스 | Martín Demichelis | Manchester City FC | 1980-12-20 | 주전 | B+ | — | — | — |
| CB | 35 | 제레미 마티외 | Jérémy Mathieu | FC Barcelona | 1983-10-29 | 후보 | B+ | — | — | — |
| CB | 36 | 호세 마리아 히메네스 | José María Giménez | Club Atlético de Madrid | 1995-01-20 | 후보 | B+ | — | — | — |
| CB | 37 | 아이멘 압덴누르 | Aymen Abdennour | AS Monaco FC | 1989-08-06 | 후보 | B+ | — | — | — |
| CB | 38 | 마티야 나스타시치 | Matija Nastasić | FC Schalke 04 | 1993-03-28 | 후보 | B+ | — | — | — |
| CB | 39 | 올렉산드르 쿠체르 | Oleksandr Kucher | FC Shakhtar Donetsk | 1982-10-22 | 주전 | B0 | 6 | 1 | 0 |
| CB | 40 | 안젤로 오그본나 | Angelo Ogbonna | Juventus FC | 1988-05-23 | 후보 | B0 | — | — | — |
| CB | 41 | 키리아코스 파파도풀로스 | Kyriakos Papadopoulos | Bayer 04 Leverkusen | 1992-02-23 | 후보 | B0 | — | — | — |
| CB | 42 | 마티아스 긴터 | Matthias Ginter | Borussia Dortmund | 1994-01-19 | 후보 | B0 | — | — | — |
| CB | 43 | 커트 주마 | Kurt Zouma | Chelsea FC | 1994-10-27 | 후보 | B0 | — | — | — |
| CB | 44 | 발터 사무엘 | Walter Samuel | FC Basel 1893 | 1978-03-23 | 주전 | B- | 4 | 0 | 0 |
| CB | 45 | 홀거 바트슈투버 | Holger Badstuber | FC Bayern München | 1989-03-13 | 후보 | B- | — | — | — |
| CB | 46 | 엘리아킴 망갈라 | Eliaquim Mangala | Manchester City FC | 1991-02-13 | 후보 | B- | — | — | — |
| CB | 47 | 이반 오르데츠 | Ivan Ordets | FC Shakhtar Donetsk | 1992-07-08 | 후보 | C+ | 1 | 1 | 0 |

### LB — 31명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| LB | 1 | 조르디 알바 | Jordi Alba | FC Barcelona | 1989-03-21 | 주전 | A+ | — | — | — |
| LB | 2 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | 주전 | A+ | — | — | — |
| LB | 3 | 후안 베르나트 | Juan Bernat | FC Bayern München | 1993-03-01 | 주전 | A+ | — | — | — |
| LB | 4 | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 | 주전 | A+ | — | — | — |
| LB | 5 | 막스웰 | Maxwell | Paris Saint-Germain FC | 1981-08-27 | 주전 | A0 | — | — | — |
| LB | 6 | 알렉스 산드루 | Alex Sandro | FC Porto | 1991-01-26 | 주전 | A- | 9 | 0 | 1 |
| LB | 7 | 레뱅 퀴르자와 | Layvin Kurzawa | AS Monaco FC | 1992-09-04 | 주전 | A- | — | — | — |
| LB | 8 | 파트리스 에브라 | Patrice Evra | Juventus FC | 1981-05-15 | 주전 | A- | — | — | — |
| LB | 9 | 나초 몬레알 | Nacho Monreal | Arsenal FC | 1986-02-26 | 주전 | A- | — | — | — |
| LB | 10 | 비야체슬라우 셰우추크 | Vyacheslav Shevchuk | FC Shakhtar Donetsk | 1979-05-13 | 주전 | B+ | 7 | 2 | 0 |
| LB | 11 | 웬델 | Wendell | Bayer 04 Leverkusen | 1993-07-20 | 주전 | B+ | — | — | — |
| LB | 12 | 길례르미 시케이라 | Guilherme Siqueira | Club Atlético de Madrid | 1986-04-28 | 주전 | B+ | — | — | — |
| LB | 13 | 마르첼 슈멜처 | Marcel Schmelzer | Borussia Dortmund | 1988-01-22 | 주전 | B+ | — | — | — |
| LB | 14 | 크리스티안 푹스 | Christian Fuchs | FC Schalke 04 | 1986-04-07 | 주전 | B+ | — | — | — |
| LB | 15 | 가엘 클리시 | Gaël Clichy | Manchester City FC | 1985-07-26 | 주전 | B+ | — | — | — |
| LB | 16 | 알렉산다르 콜라로프 | Aleksandar Kolarov | Manchester City FC | 1985-11-10 | 후보 | B+ | — | — | — |
| LB | 17 | 필리페 루이스 | Filipe Luís | Chelsea FC | 1985-08-09 | 후보 | B+ | — | — | — |
| LB | 18 | 키런 깁스 | Kieran Gibbs | Arsenal FC | 1989-09-26 | 후보 | B+ | — | — | — |
| LB | 19 | 베흐랑 사파리 | Behrang Safari | FC Basel 1893 | 1985-02-09 | 주전 | B0 | 7 | 0 | 0 |
| LB | 20 | 에리크 두름 | Erik Durm | Borussia Dortmund | 1992-05-12 | 후보 | B0 | — | — | — |
| LB | 21 | 뤼카 디뉴 | Lucas Digne | Paris Saint-Germain FC | 1993-07-20 | 후보 | B0 | — | — | — |
| LB | 22 | 시모네 파도인 | Simone Padoin | Juventus FC | 1984-03-18 | 후보 | B0 | — | — | — |
| LB | 23 | 아드리아누 코헤이아 | Adriano Correia | FC Barcelona | 1984-10-26 | 후보 | B0 | — | — | — |
| LB | 24 | 엘데르송 | Elderson Echiejile | AS Monaco FC | 1988-01-20 | 후보 | B0 | — | — | — |
| LB | 25 | 마르시우 아제베두 | Márcio Azevedo | FC Shakhtar Donetsk | 1986-02-05 | 후보 | B- | 2 | 0 | 0 |
| LB | 26 | 제바스티안 뵈니슈 | Sebastian Boenisch | Bayer 04 Leverkusen | 1987-02-01 | 후보 | B- | — | — | — |
| LB | 27 | 크리스티안 안살디 | Cristian Ansaldi | Club Atlético de Madrid | 1986-09-20 | 후보 | B- | — | — | — |
| LB | 28 | 세아드 콜라시나츠 | Sead Kolašinac | FC Schalke 04 | 1993-06-20 | 후보 | B- | — | — | — |
| LB | 29 | 파비우 코엔트랑 | Fábio Coentrão | Real Madrid CF | 1988-03-11 | 후보 | B- | — | — | — |
| LB | 30 | 나세르 알리이 | Naser Aliji | FC Basel 1893 | 1993-12-27 | 후보 | C+ | 1 | 0 | 0 |
| LB | — | 호세 앙헬 | José Ángel | FC Porto | 1989-09-05 | 후보 | 미평가 | 0 | — | — |

### RB — 30명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| RB | 1 | 다니 아우베스 | Dani Alves | FC Barcelona | 1983-05-06 | 주전 | A+ | — | — | 4 |
| RB | 2 | 필리프 람 | Philipp Lahm | FC Bayern München | 1983-11-11 | 주전 | A+ | — | — | — |
| RB | 3 | 브라니슬라프 이바노비치 | Branislav Ivanović | Chelsea FC | 1984-02-22 | 주전 | A0 | — | — | — |
| RB | 4 | 슈테판 리히트슈타이너 | Stephan Lichtsteiner | Juventus FC | 1984-01-16 | 주전 | A0 | 13 | — | — |
| RB | 5 | 다닐루 | Danilo | FC Porto | 1991-07-15 | 주전 | A- | 8 | 1 | 1 |
| RB | 6 | 다리요 스르나 | Darijo Srna | FC Shakhtar Donetsk | 1982-05-01 | 주전 | A- | 7 | 1 | 1 |
| RB | 7 | 파비뉴 | Fabinho | AS Monaco FC | 1993-10-23 | 주전 | A- | — | — | — |
| RB | 8 | 후안프란 | Juanfran | Club Atlético de Madrid | 1985-01-09 | 주전 | A- | — | — | — |
| RB | 9 | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | 주전 | A- | — | — | — |
| RB | 10 | 우카시 피슈체크 | Łukasz Piszczek | Borussia Dortmund | 1985-06-03 | 주전 | A- | — | — | — |
| RB | 11 | 파블로 사발레타 | Pablo Zabaleta | Manchester City FC | 1985-01-16 | 주전 | A- | — | — | — |
| RB | 12 | 타울란트 자카 | Taulant Xhaka | FC Basel 1893 | 1991-03-28 | 주전 | B+ | 7 | 0 | 0 |
| RB | 13 | 그레고리 판데르빌 | Gregory van der Wiel | Paris Saint-Germain FC | 1988-02-03 | 주전 | B+ | — | — | — |
| RB | 14 | 로베르토 힐베르트 | Roberto Hilbert | Bayer 04 Leverkusen | 1984-10-16 | 주전 | B+ | — | — | — |
| RB | 15 | 우치다 아쓰토 | Atsuto Uchida | FC Schalke 04 | 1988-03-27 | 주전 | B+ | — | — | — |
| RB | 16 | 엑토르 베예린 | Héctor Bellerín | Arsenal FC | 1995-03-19 | 주전 | B+ | — | — | — |
| RB | 17 | 하피냐 | Rafinha | FC Bayern München | 1985-09-07 | 후보 | B+ | — | — | — |
| RB | 18 | 세르주 오리에 | Serge Aurier | Paris Saint-Germain FC | 1992-12-24 | 후보 | B+ | — | — | — |
| RB | 19 | 알바로 아르벨로아 | Álvaro Arbeloa | Real Madrid CF | 1983-01-17 | 후보 | B0 | — | — | — |
| RB | 20 | 헤수스 가메스 | Jesús Gámez | Club Atlético de Madrid | 1985-04-10 | 후보 | B0 | — | — | — |
| RB | 21 | 칸 아이한 | Kaan Ayhan | FC Schalke 04 | 1994-11-10 | 후보 | B0 | — | — | — |
| RB | 22 | 마르틴 카세레스 | Martín Cáceres | Juventus FC | 1987-04-07 | 후보 | B0 | — | — | — |
| RB | 23 | 바카리 사냐 | Bacary Sagna | Manchester City FC | 1983-02-14 | 후보 | B0 | — | — | — |
| RB | 24 | 마티외 드뷔시 | Mathieu Debuchy | Arsenal FC | 1985-07-28 | 후보 | B0 | — | — | — |
| RB | 25 | 히카르두 페레이라 | Ricardo Pereira | FC Porto | 1993-10-06 | 후보 | B- | 2 | 0 | 0 |
| RB | 26 | 케빈 그로스크로이츠 | Kevin Großkreutz | Borussia Dortmund | 1988-07-19 | 후보 | B- | — | — | — |
| RB | 27 | 마르틴 몬토야 | Martín Montoya | FC Barcelona | 1991-04-14 | 후보 | B- | — | — | — |
| RB | 28 | 줄리오 도나티 | Giulio Donati | Bayer 04 Leverkusen | 1990-02-05 | 후보 | B- | — | — | — |
| RB | 29 | 필리프 데겐 | Philipp Degen | FC Basel 1893 | 1983-02-15 | 후보 | C+ | 1 | 0 | 0 |
| RB | 30 | 알마미 투레 | Almamy Touré | AS Monaco FC | 1996-04-28 | 후보 | C+ | — | — | — |

### DM — 30명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| DM | 1 | 세르히오 부스케츠 | Sergio Busquets | FC Barcelona | 1988-07-16 | 주전 | A+ | — | — | — |
| DM | 2 | 토니 크로스 | Toni Kroos | Real Madrid CF | 1990-01-04 | 주전 | A+ | — | — | — |
| DM | 3 | 네마냐 마티치 | Nemanja Matić | Chelsea FC | 1988-08-01 | 주전 | A+ | — | — | — |
| DM | 4 | 다비드 알라바 | David Alaba | FC Bayern München | 1992-06-24 | 후보 | A+ | — | — | — |
| DM | 5 | 안드레아 피를로 | Andrea Pirlo | Juventus FC | 1979-05-19 | 주전 | A0 | — | — | — |
| DM | 6 | 제레미 툴랄랑 | Jérémy Toulalan | AS Monaco FC | 1983-09-10 | 주전 | A0 | — | — | — |
| DM | 7 | 사비 알론소 | Xabi Alonso | FC Bayern München | 1981-11-25 | 주전 | A0 | — | — | — |
| DM | 8 | 파비안 프라이 | Fabian Frei | FC Basel 1893 | 1989-01-08 | 주전 | A- | 8 | 1 | 3 |
| DM | 9 | 카세미루 | Casemiro | FC Porto | 1992-02-23 | 주전 | A- | 8 | 1 | 1 |
| DM | 10 | 티아구 멘데스 | Tiago Mendes | Club Atlético de Madrid | 1981-05-02 | 주전 | A- | — | — | — |
| DM | 11 | 티아구 모타 | Thiago Motta | Paris Saint-Germain FC | 1982-08-28 | 주전 | A- | — | — | — |
| DM | 12 | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | 주전 | A- | — | — | — |
| DM | 13 | 프랑시스 코클랭 | Francis Coquelin | Arsenal FC | 1991-05-13 | 주전 | A- | — | — | — |
| DM | 14 | 타라스 스테파넨코 | Taras Stepanenko | FC Shakhtar Donetsk | 1989-08-08 | 주전 | B+ | 7 | 1 | 0 |
| DM | 15 | 로만 노이슈테터 | Roman Neustädter | FC Schalke 04 | 1988-02-18 | 주전 | B+ | — | — | — |
| DM | 16 | 제바스티안 켈 | Sebastian Kehl | Borussia Dortmund | 1980-02-13 | 주전 | B+ | — | — | — |
| DM | 17 | 지몬 롤페스 | Simon Rolfes | Bayer 04 Leverkusen | 1982-01-21 | 주전 | B+ | — | — | — |
| DM | 18 | 페르난두 | Fernando Lucas Martins | FC Shakhtar Donetsk | 1992-03-03 | 후보 | B0 | 7 | 0 | 0 |
| DM | 19 | 루벤 네베스 | Rúben Neves | FC Porto | 1997-03-13 | 후보 | B0 | 7 | 0 | 0 |
| DM | 20 | 스벤 벤더 | Sven Bender | Borussia Dortmund | 1989-04-27 | 후보 | B0 | — | — | — |
| DM | 21 | 요앙 카바예 | Yohan Cabaye | Paris Saint-Germain FC | 1986-01-14 | 후보 | B0 | — | — | — |
| DM | 22 | 마리오 수아레스 | Mario Suárez | Club Atlético de Madrid | 1987-02-24 | 후보 | B0 | — | — | — |
| DM | 23 | 아시에르 이야라멘디 | Asier Illarramendi | Real Madrid CF | 1990-03-08 | 후보 | B0 | — | — | — |
| DM | 24 | 슈테판 라이나르츠 | Stefan Reinartz | Bayer 04 Leverkusen | 1989-01-01 | 후보 | B0 | — | — | — |
| DM | 25 | 페르난두 | Fernando | Manchester City FC | 1987-07-25 | 후보 | B0 | — | — | — |
| DM | 26 | 얀 키르히호프 | Jan Kirchhoff | FC Schalke 04 | 1990-10-01 | 후보 | B- | — | — | — |
| DM | 27 | 티에무에 바카요코 | Tiémoué Bakayoko | AS Monaco FC | 1994-08-17 | 후보 | B- | — | — | — |
| DM | 28 | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | 후보 | B- | — | — | — |
| DM | 29 | 마티외 플라미니 | Mathieu Flamini | Arsenal FC | 1984-03-07 | 후보 | B- | — | — | — |
| DM | 30 | 세레이 디에 | Geoffroy Serey Dié | FC Basel 1893 | 1984-11-07 | 후보 | C+ | 2 | 0 | 0 |

### CM — 32명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| CM | 1 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | 주전 | A+ | — | — | 5 |
| CM | 2 | 이반 라키티치 | Ivan Rakitić | FC Barcelona | 1988-03-10 | 주전 | A+ | — | — | — |
| CM | 3 | 클라우디오 마르키시오 | Claudio Marchisio | Juventus FC | 1986-01-19 | 주전 | A+ | — | — | — |
| CM | 4 | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | 주전 | A+ | — | — | — |
| CM | 5 | 블레즈 마튀디 | Blaise Matuidi | Paris Saint-Germain FC | 1987-04-09 | 주전 | A+ | — | — | — |
| CM | 6 | 폴 포그바 | Paul Pogba | Juventus FC | 1993-03-15 | 주전 | A+ | — | — | — |
| CM | 7 | 산티 카솔라 | Santi Cazorla | Arsenal FC | 1984-12-13 | 주전 | A+ | — | — | — |
| CM | 8 | 엑토르 에레라 | Héctor Herrera | FC Porto | 1990-04-19 | 주전 | A0 | 9 | 3 | 3 |
| CM | 9 | 세스크 파브레가스 | Cesc Fàbregas | Chelsea FC | 1987-05-04 | 주전 | A0 | — | — | 4 |
| CM | 10 | 바스티안 슈바인슈타이거 | Bastian Schweinsteiger | FC Bayern München | 1984-08-01 | 주전 | A- | — | — | 4 |
| CM | 11 | 가비 | Gabi | Club Atlético de Madrid | 1983-07-10 | 주전 | A- | — | — | — |
| CM | 12 | 이스코 | Isco | Real Madrid CF | 1992-04-21 | 주전 | A- | — | — | — |
| CM | 13 | 라르스 벤더 | Lars Bender | Bayer 04 Leverkusen | 1989-04-27 | 주전 | A- | — | — | — |
| CM | 14 | 조프레 콘도그비아 | Geoffrey Kondogbia | AS Monaco FC | 1993-02-15 | 주전 | A- | — | — | — |
| CM | 15 | 일카이 귄도안 | İlkay Gündoğan | Borussia Dortmund | 1990-10-24 | 주전 | A- | — | — | — |
| CM | 16 | 야야 투레 | Yaya Touré | Manchester City FC | 1983-05-13 | 주전 | A- | — | — | — |
| CM | 17 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | 후보 | A- | — | — | — |
| CM | 18 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | 후보 | A- | — | — | — |
| CM | 19 | 애런 램지 | Aaron Ramsey | Arsenal FC | 1990-12-26 | 후보 | A- | — | — | — |
| CM | 20 | 모하메드 엘네니 | Mohamed Elneny | FC Basel 1893 | 1992-07-11 | 주전 | B+ | 8 | 0 | 0 |
| CM | 21 | 올리베르 토레스 | Óliver Torres | FC Porto | 1994-11-10 | 주전 | B+ | 8 | 0 | 0 |
| CM | 22 | 마르코 회거 | Marco Höger | FC Schalke 04 | 1989-09-16 | 주전 | B+ | — | — | — |
| CM | 23 | 곤살로 카스트로 | Gonzalo Castro | Bayer 04 Leverkusen | 1987-06-11 | 후보 | B+ | — | — | — |
| CM | 24 | 아드리앙 라비오 | Adrien Rabiot | Paris Saint-Germain FC | 1995-04-03 | 후보 | B+ | — | — | — |
| CM | 25 | 사울 니게스 | Saúl Ñíguez | Club Atlético de Madrid | 1994-11-21 | 후보 | B+ | — | — | — |
| CM | 26 | 프랭크 램퍼드 | Frank Lampard | Manchester City FC | 1978-06-20 | 후보 | B+ | — | — | — |
| CM | 27 | 프레드 | Fred | FC Shakhtar Donetsk | 1993-03-05 | 주전 | B0 | 7 | 0 | 0 |
| CM | 28 | 제바스티안 로데 | Sebastian Rode | FC Bayern München | 1990-10-11 | 후보 | B0 | — | — | — |
| CM | 29 | 스테파노 스투라로 | Stefano Sturaro | Juventus FC | 1993-03-09 | 후보 | B0 | — | — | — |
| CM | 30 | 하미레스 | Ramires | Chelsea FC | 1987-03-24 | 후보 | B0 | — | — | — |
| CM | 31 | 에반드루 | Evandro | FC Porto | 1986-08-23 | 후보 | B- | 5 | 0 | 0 |
| CM | 32 | 누리 샤힌 | Nuri Şahin | Borussia Dortmund | 1988-09-05 | 후보 | B- | — | — | — |

### CAM — 22명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| CAM | 1 | 하비에르 파스토레 | Javier Pastore | Paris Saint-Germain FC | 1989-06-20 | 주전 | A+ | — | — | — |
| CAM | 2 | 하메스 로드리게스 | James Rodríguez | Real Madrid CF | 1991-07-12 | 주전 | A+ | — | — | — |
| CAM | 3 | 다비드 실바 | David Silva | Manchester City FC | 1986-01-08 | 주전 | A+ | — | — | — |
| CAM | 4 | 주앙 모티뉴 | João Moutinho | AS Monaco FC | 1986-09-08 | 주전 | A0 | — | — | — |
| CAM | 5 | 하칸 찰하놀루 | Hakan Çalhanoğlu | Bayer 04 Leverkusen | 1994-02-08 | 주전 | A0 | — | — | — |
| CAM | 6 | 마리오 괴체 | Mario Götze | FC Bayern München | 1992-06-03 | 주전 | A0 | — | — | — |
| CAM | 7 | 아르투로 비달 | Arturo Vidal | Juventus FC | 1987-05-22 | 주전 | A0 | — | — | — |
| CAM | 8 | 메수트 외질 | Mesut Özil | Arsenal FC | 1988-10-15 | 주전 | A0 | — | — | — |
| CAM | 9 | 알렉스 테이셰이라 | Alex Teixeira | FC Shakhtar Donetsk | 1990-01-06 | 주전 | A- | 8 | 3 | 0 |
| CAM | 10 | 오스카르 | Oscar | Chelsea FC | 1991-09-09 | 주전 | A- | — | — | — |
| CAM | 11 | 루카 추피 | Luca Zuffi | FC Basel 1893 | 1990-03-27 | 주전 | B+ | 7 | 0 | 2 |
| CAM | 12 | 가가와 신지 | Shinji Kagawa | Borussia Dortmund | 1989-03-17 | 주전 | B+ | — | — | — |
| CAM | 13 | 막스 마이어 | Max Meyer | FC Schalke 04 | 1995-09-18 | 주전 | B+ | — | — | — |
| CAM | 14 | 로베르토 페레이라 | Roberto Pereyra | Juventus FC | 1991-01-07 | 후보 | B+ | — | — | — |
| CAM | 15 | 라울 가르시아 | Raúl García | Club Atlético de Madrid | 1986-07-11 | 후보 | B+ | — | — | — |
| CAM | 16 | 케빈프린스 보아텡 | Kevin-Prince Boateng | FC Schalke 04 | 1987-03-06 | 후보 | B0 | — | — | — |
| CAM | 17 | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | 후보 | B0 | — | — | — |
| CAM | 18 | 후안 페르난도 킨테로 | Juan Fernando Quintero | FC Porto | 1993-01-18 | 후보 | B- | 5 | 0 | 1 |
| CAM | 19 | 케빈 캄플 | Kevin Kampl | Borussia Dortmund | 1990-10-09 | 후보 | B- | — | — | — |
| CAM | 20 | 마티아스 델가도 | Matías Delgado | FC Basel 1893 | 1982-12-15 | 후보 | C+ | 2 | 0 | 0 |
| CAM | 21 | 잔루카 가우디노 | Gianluca Gaudino | FC Bayern München | 1996-11-11 | 후보 | C+ | — | — | — |
| CAM | — | 빅토르 코발렌코 | Viktor Kovalenko | FC Shakhtar Donetsk | 1996-02-14 | 후보 | 미평가 | 0 | — | — |

### LW — 23명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| LW | 1 | 네이마르 | Neymar | FC Barcelona | 1992-02-05 | 주전 | S | — | 10 | — |
| LW | 2 | 크리스티아누 호날두 | Cristiano Ronaldo | Real Madrid CF | 1985-02-05 | 주전 | S | — | 10 | 4 |
| LW | 3 | 에덴 아자르 | Eden Hazard | Chelsea FC | 1991-01-07 | 주전 | A+ | 7 | 3 | — |
| LW | 4 | 알렉시스 산체스 | Alexis Sánchez | Arsenal FC | 1988-12-19 | 주전 | A+ | — | — | — |
| LW | 5 | 야신 브라히미 | Yacine Brahimi | FC Porto | 1990-02-08 | 주전 | A0 | 9 | 5 | 3 |
| LW | 6 | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | 주전 | A0 | — | — | 4 |
| LW | 7 | 손흥민 | Son Heung-min | Bayer 04 Leverkusen | 1992-07-08 | 주전 | A0 | — | — | — |
| LW | 8 | 마르코 로이스 | Marco Reus | Borussia Dortmund | 1989-05-31 | 주전 | A- | — | — | — |
| LW | 9 | 야니크 페레이라 카라스코 | Yannick Ferreira Carrasco | AS Monaco FC | 1993-09-04 | 주전 | A- | — | — | — |
| LW | 10 | 프랑크 리베리 | Franck Ribéry | FC Bayern München | 1983-04-07 | 주전 | A- | — | — | — |
| LW | 11 | 타이송 | Taison | FC Shakhtar Donetsk | 1988-01-13 | 주전 | B+ | 8 | 0 | 2 |
| LW | 12 | 율리안 드락슬러 | Julian Draxler | FC Schalke 04 | 1993-09-20 | 주전 | B+ | — | — | — |
| LW | 13 | 제임스 밀너 | James Milner | Manchester City FC | 1986-01-04 | 주전 | B+ | — | — | — |
| LW | 14 | 에리크 막심 추포모팅 | Eric Maxim Choupo-Moting | FC Schalke 04 | 1989-03-23 | 후보 | B+ | — | — | — |
| LW | 15 | 에세키엘 라베시 | Ezequiel Lavezzi | Paris Saint-Germain FC | 1985-05-03 | 후보 | B+ | — | — | — |
| LW | 16 | 율리안 브란트 | Julian Brandt | Bayer 04 Leverkusen | 1996-05-02 | 후보 | B+ | — | — | — |
| LW | 17 | 슈켈젠 가시 | Shkelzen Gashi | FC Basel 1893 | 1988-07-15 | 주전 | B0 | 5 | 1 | 0 |
| LW | 18 | 베르나르드 | Bernard | FC Shakhtar Donetsk | 1992-09-08 | 후보 | B0 | 5 | 0 | 2 |
| LW | 19 | 사미르 나스리 | Samir Nasri | Manchester City FC | 1987-06-26 | 후보 | B0 | — | — | — |
| LW | 20 | 뤼카 오캄포스 | Lucas Ocampos | AS Monaco FC | 1994-07-11 | 후보 | B- | — | — | — |
| LW | 21 | 제르단 샤키리 | Xherdan Shaqiri | FC Bayern München | 1991-10-10 | 후보 | B- | — | — | — |
| LW | 22 | 안드레 쉬를레 | André Schürrle | Chelsea FC | 1990-11-06 | 후보 | B- | — | — | — |
| LW | 23 | 다비데 칼라 | Davide Callà | FC Basel 1893 | 1984-10-06 | 후보 | C+ | 5 | 0 | 0 |

### RW — 23명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| RW | 1 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | 주전 | S | 13 | 10 | 6 |
| RW | 2 | 아르연 로번 | Arjen Robben | FC Bayern München | 1984-01-23 | 주전 | A+ | 7 | 2 | — |
| RW | 3 | 카림 벨라라비 | Karim Bellarabi | Bayer 04 Leverkusen | 1990-04-08 | 주전 | A0 | — | — | — |
| RW | 4 | 데를리스 곤살레스 | Derlis González | FC Basel 1893 | 1994-03-20 | 주전 | A- | 8 | 3 | 0 |
| RW | 5 | 히카르두 콰레스마 | Ricardo Quaresma | FC Porto | 1983-09-26 | 후보 | A- | 9 | 3 | 0 |
| RW | 6 | 가레스 베일 | Gareth Bale | Real Madrid CF | 1989-07-16 | 주전 | A- | — | — | — |
| RW | 7 | 아르다 투란 | Arda Turan | Club Atlético de Madrid | 1987-01-30 | 주전 | A- | — | — | — |
| RW | 8 | 베르나르두 실바 | Bernardo Silva | AS Monaco FC | 1994-08-10 | 주전 | A- | — | — | — |
| RW | 9 | 윌리안 | Willian | Chelsea FC | 1988-08-09 | 주전 | A- | — | — | — |
| RW | 10 | 크리스티안 테요 | Cristian Tello | FC Porto | 1991-08-11 | 주전 | B+ | 7 | 1 | 2 |
| RW | 11 | 더글라스 코스타 | Douglas Costa | FC Shakhtar Donetsk | 1990-09-14 | 주전 | B+ | 8 | 1 | 1 |
| RW | 12 | 헨리크 미키타리안 | Henrikh Mkhitaryan | Borussia Dortmund | 1989-01-21 | 주전 | B+ | — | — | — |
| RW | 13 | 앨릭스 옥슬레이드체임벌린 | Alex Oxlade-Chamberlain | Arsenal FC | 1993-08-15 | 주전 | B+ | — | — | — |
| RW | 14 | 루카스 모우라 | Lucas Moura | Paris Saint-Germain FC | 1992-08-13 | 후보 | B+ | — | — | — |
| RW | 15 | 페드로 로드리게스 | Pedro Rodríguez | FC Barcelona | 1987-07-28 | 후보 | B+ | — | — | — |
| RW | 16 | 마를루스 | Marlos | FC Shakhtar Donetsk | 1988-06-07 | 후보 | B0 | 6 | 0 | 0 |
| RW | 17 | 트란퀼로 바르네타 | Tranquillo Barnetta | FC Schalke 04 | 1985-05-22 | 주전 | B0 | — | — | — |
| RW | 18 | 헤수스 나바스 | Jesús Navas | Manchester City FC | 1985-11-21 | 주전 | B0 | — | — | — |
| RW | 19 | 나빌 디라르 | Nabil Dirar | AS Monaco FC | 1986-02-25 | 후보 | B0 | — | — | — |
| RW | 20 | 시오 월컷 | Theo Walcott | Arsenal FC | 1989-03-16 | 후보 | B0 | — | — | — |
| RW | 21 | 미첼 바이저 | Mitchell Weiser | FC Bayern München | 1994-04-21 | 후보 | B- | — | — | — |
| RW | 22 | 야쿠프 브와슈치코프스키 | Jakub Błaszczykowski | Borussia Dortmund | 1985-12-14 | 후보 | B- | — | — | — |
| RW | 23 | 헤페르손 파르판 | Jefferson Farfán | FC Schalke 04 | 1984-10-26 | 후보 | B- | — | — | — |

### ST — 33명

| 포지션 | 포지션 순위 | 한글명 | 원어명 | 소속 구단(원어) | 생년월일 | 주전/후보 | 티어 | UCL 경기 | 골 | 도움 |
|---|---:|---|---|---|---|---|---|---:|---:|---:|
| ST | 1 | 루이스 수아레스 | Luis Suárez | FC Barcelona | 1987-01-24 | 주전 | S | — | — | — |
| ST | 2 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | Paris Saint-Germain FC | 1981-10-03 | 주전 | A+ | 6 | 2 | — |
| ST | 3 | 카를로스 테베스 | Carlos Tevez | Juventus FC | 1984-02-05 | 주전 | A+ | 13 | 7 | — |
| ST | 4 | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | 1988-08-21 | 주전 | A+ | — | — | — |
| ST | 5 | 피에르에메리크 오바메양 | Pierre-Emerick Aubameyang | Borussia Dortmund | 1989-06-18 | 주전 | A+ | — | — | — |
| ST | 6 | 디에고 코스타 | Diego Costa | Chelsea FC | 1988-10-07 | 주전 | A+ | — | — | — |
| ST | 7 | 잭슨 마르티네스 | Jackson Martínez | FC Porto | 1986-10-03 | 주전 | A+ | 8 | 7 | 0 |
| ST | 8 | 루이스 아드리아누 | Luiz Adriano | FC Shakhtar Donetsk | 1987-04-12 | 주전 | A0 | 7 | 9 | 1 |
| ST | 9 | 세르히오 아궤로 | Sergio Agüero | Manchester City FC | 1988-06-02 | 주전 | A0 | — | — | — |
| ST | 10 | 에딘손 카바니 | Edinson Cavani | Paris Saint-Germain FC | 1987-02-14 | 주전 | A0 | — | — | — |
| ST | 11 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | 주전 | A0 | — | — | — |
| ST | 12 | 알바로 모라타 | Álvaro Morata | Juventus FC | 1992-10-23 | 주전 | A- | — | — | — |
| ST | 13 | 앙투안 그리즈만 | Antoine Griezmann | Club Atlético de Madrid | 1991-03-21 | 주전 | A- | — | — | — |
| ST | 14 | 마리오 만주키치 | Mario Mandžukić | Club Atlético de Madrid | 1986-05-21 | 주전 | A- | — | — | — |
| ST | 15 | 올리비에 지루 | Olivier Giroud | Arsenal FC | 1986-09-30 | 주전 | A- | — | — | — |
| ST | 16 | 앙토니 마르시알 | Anthony Martial | AS Monaco FC | 1995-12-05 | 후보 | A- | — | — | — |
| ST | 17 | 뱅상 아부바카르 | Vincent Aboubakar | FC Porto | 1992-01-22 | 후보 | B+ | 4 | 3 | 0 |
| ST | 18 | 브릴 엠볼로 | Breel Embolo | FC Basel 1893 | 1997-02-14 | 후보 | B+ | 8 | 1 | 1 |
| ST | 19 | 슈테판 키슬링 | Stefan Kießling | Bayer 04 Leverkusen | 1984-01-25 | 주전 | B+ | — | — | — |
| ST | 20 | 클라스얀 휜텔라르 | Klaas-Jan Huntelaar | FC Schalke 04 | 1983-08-12 | 주전 | B+ | — | — | — |
| ST | 21 | 디미터르 베르바토프 | Dimitar Berbatov | AS Monaco FC | 1981-01-30 | 주전 | B+ | — | — | — |
| ST | 22 | 페르난도 요렌테 | Fernando Llorente | Juventus FC | 1985-02-26 | 후보 | B+ | — | — | — |
| ST | 23 | 하비에르 에르난데스 | Javier Hernández | Real Madrid CF | 1988-06-01 | 후보 | B+ | — | — | — |
| ST | 24 | 로익 레미 | Loïc Rémy | Chelsea FC | 1987-01-02 | 후보 | B+ | — | — | — |
| ST | 25 | 마르코 슈트렐러 | Marco Streller | FC Basel 1893 | 1981-06-18 | 주전 | B0 | 5 | 1 | 0 |
| ST | 26 | 페르난도 토레스 | Fernando Torres | Club Atlético de Madrid | 1984-03-20 | 후보 | B0 | — | — | — |
| ST | 27 | 요시프 드르미치 | Josip Drmić | Bayer 04 Leverkusen | 1992-08-08 | 후보 | B0 | — | — | — |
| ST | 28 | 대니 웰벡 | Danny Welbeck | Arsenal FC | 1990-11-26 | 후보 | B0 | — | — | — |
| ST | 29 | 치로 임모빌레 | Ciro Immobile | Borussia Dortmund | 1990-02-20 | 후보 | B- | — | — | — |
| ST | 30 | 에딘 제코 | Edin Džeko | Manchester City FC | 1986-03-17 | 후보 | B- | — | — | — |
| ST | 31 | 장크리스토프 바에베크 | Jean-Christophe Bahebeck | Paris Saint-Germain FC | 1993-05-01 | 후보 | C+ | — | — | — |
| ST | 32 | 클라우디오 피사로 | Claudio Pizarro | FC Bayern München | 1978-10-03 | 후보 | C+ | — | — | — |
| ST | — | 에두아르두 | Eduardo da Silva | FC Shakhtar Donetsk | 1983-02-25 | 후보 | 미평가 | 0 | — | — |

## 최종 데이터 검증 결과

| 조건 | 결과 |
|---|---|
| 후보 / 고유 ID | 302 / 302 |
| 구단 수 | 16 |
| 생년월일 입력 | 302 / 302 |
| 유효 티어 / 순위 | 295 / 295 |
| Best XI | 11명, ID 중복 0건 |
| 팀·경기 원본 조작 | 없음 (GitHub 수정 후 이전 커밋과 비교 검증 별도 수행) |
| 2012-13~2014-15 전체 선수 전 경기 독립 평가 | **미완료, DRAFT** |
| 실제 GitHub Pages 화면 테스트 | **미실시** |

### 현재까지 확인한 한계

출전·기여 기록의 직접 검증이 집중된 범위는 이번에 재조사한 Basel·Porto·Shakhtar 일부 및 주요 XI 경쟁 선수이다. 나머지 많은 이전 등급은 국내 리그에서 가져온 조건부 잠정 평가였으며, UCL 자체 기록으로 전원 검증된 것이 아니다. 최근 3시즌을 고려하는 원칙은 적용했지만 302명 전원의 경기별 비교를 끝낸 것으로 표시하지 않는다.
포지션 재조정은 UEFA 전술 설명을 활용한 정성 검증이며 시즌 모든 경기의 최빈 위치 계산이 완료되지 않았다. 최종 사용자가 승인하기 전까지 `draft_unapproved` 유지.

**데이터 수정 커밋:** [db821e920e33262b7fb506d721089f2902a7e8e0](https://github.com/wjdduddlf112/footballarch/commit/db821e920e33262b7fb506d721089f2902a7e8e0), [abc902c73ad9b114272964b606cb7c5e47be1079](https://github.com/wjdduddlf112/footballarch/commit/abc902c73ad9b114272964b606cb7c5e47be1079)
