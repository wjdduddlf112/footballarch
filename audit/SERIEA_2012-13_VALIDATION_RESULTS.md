# Serie A 2012-13 — 검증 실행 결과 / 역사적 검증 공백 (DRAFT)

- 작업 날짜: 2026-11-08 (Asia/Seoul)
- 평가 대상: **Serie A 2012-13** 1개 시즌만. 최근 3시즌 가중 2010-11 < 2011-12 < 2012-13.
- 2013-14 실제 UEFA 참가 구단: **Juventus, Napoli, Milan, Fiorentina, Udinese, Lazio** 6구단.
- Roma(2012-13 리그 6위)는 2013-14 유럽대항전 출전하지 않아 제외. Lazio(7위)는 2013-05-26 Coppa Italia 결승에서 Roma에 1-0 승리해 UEL 진출.
- 미승인 상태: `meta.status=draft_unapproved`, `bestXiReview.status=proposed_unapproved`.

## 1. 실제 GitHub Actions·Pages 실행 기록

| 실제 실행 항목 | 결과 | URL |
|---|---|---|
| Node.js 22 / `node scripts/verify-seriea-2012-13.mjs` | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42487965236 |
| GitHub Pages build/deploy, 동일 커밋 `3fd79f0091d4a90fbe65409f7a1bdb55283e71b0` | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42487964769 |
| 실제 GitHub Pages HTML/JSON 브라우저 열기 | **미검증 (외부 웹 조회 접근 실패)** | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2012-13 |

2026-11-08 전용 GitHub Actions와 Pages가 최신 시즌 평가 및 독립 스크립트 생성 커밋까지 **성공**. 다만 Actions 성공은 **해당 시즌 선수 수치 내용의 역사적 독립 검증**, **웹 브라우저 시각 렌더링**, **필터 UI 클릭 테스트**를 의미하지 않는다.

## 2. 소스에서 읽어 검증한 현재 2012-13 선수 기록

BDFutbol 2012-13 각 6개 구단의 **Serie A (Liga)** 구단 시즌 선수별 표를 사용. 전체 시즌 합산(유럽대항전 포함) 데이터와 분리.

| 항목 | 완성도 |
|---|---|
| 2013-14 UEFA 실제 참가 구단 | 6개 출전 확인 |
| 전체 신규 선수 후보 | **102명**, Juventus 17 / Napoli 16 / Milan 18 / Fiorentina 16 / Udinese 18 / Lazio 17 |
| 2012-13 개별 리그 출장 | **102/102** 입력 |
| 2012-13 개별 리그 선발 | **102/102** 입력 |
| 2012-13 개별 리그 출전 시간 | **102/102** 입력 |
| 2012-13 개별 리그 득점 | **102/102** 입력 |
| 2012-13 선수별 도움 | **0/102** 독립 검증, 전원 `null` |
| 한국어/원어 이름·생년월일·당시 소속 | 102/102 기입, 모든 DOB 2-source 교차확인 미완료 |
| 주전/후보 11명당 팀 | 6 × 11 = **66명** 대표 전술상 주전, 각 구단·포지션 후보 최대 1명 |
| 3백 구단 Juventus/Napoli/Fiorentina/Udinese | 대표 11명 내 CB 3명, LB/RB 원래 LWB/RWB 역할 보존 |
| 포지션 10개 | GK CB LB RB DM CM CAM LW RW ST, 각각 1…N 연속 순위 |
| 잠정 티어 인원 | S5, A+11, A0 22, A-3, B+32, B0 23, B-6, C+ 0, 나머지 0 |
| 월드클래스 | S+A+ **16명** |
| 리그 탑급 | S+A+ + A0+A- **41명** |
| Best XI | 3-5-2 제안 11명, 중복/포지션 충돌 없음 |

기록 출처: BDFutbol Juventus `https://www.bdfutbol.com/en/t/t2012-133004.html`, Napoli `...3003.html`, Milan `...3015.html`, Fiorentina `...3014.html`, Udinese `...3005.html`, Lazio `...3018.html`. 구단별 URL은 각 선수 `sources`에 저장.

BDFutbol에서는 골키퍼 G열 음수를 실점으로 나타내므로 개인 득점을 **0**으로 표기하였다. 출전분은 BDFutbol 값으로 통일하며 FBref와 1~10분 차이 가능; 정밀 단위 일치까지 검증한 것이 아니다.

## 3. 아직 독립적으로 끝내지 못한 역사적 검증

- **개별 선수 총 102명 모두의 2010-11, 2011-12, 2012-13 세 시즌 독립 수치·전술적 역할·동포지션 질적 비교 전체 완료: 0/102.** 98개 이전 시즌 개인 경기 수치 셀이 옛 미승인 DRAFT에 연결되어 있지만 해당 연결만으로 독립 검증으로 보지 않는다.
- 2010-11, 2011-12 시즌 이적 전 클럽 소속, 개인 경기 시간/골/도움 등을 선수별 2개 이상 신뢰할 자료로 완전 재조사하지 못했다. 미상 항목은 null.
- 생년월일 102명 yyyy-mm-dd 값 기입, 각 개인의 출생 자료를 서로 다른 두 독립 원문 출처로 모두 대조하지 않았다.
- 구단별 실제 38경기의 선수 최빈 출전 위치·좌/우 분담과 **Serie A 전체 380경기 최빈 전술**은 수학적으로 확인되지 않았다. 3-5-2는 2012-13 주요 이탈리아 감독들의 전술 흐름에 맞춘 대표 가설.
- 모든 **S–D 등급, World/League Top 등급, 포지션 1..N 순위, Best XI는 사용자 확인 전의 분석 초안**. 팀 순위/우승 자체를 선수 점수에 가산하지 않았으나 실제 세 시즌 모든 포지션 동급 경쟁자에 대한 경기별 품질 우열은 재검토가 필요.
- 해당 구단 2012-13 실제 출장·선발·분·골은 BDFutbol 원시 표의 개별 행을 기준으로 입력했으나 **102/102 각각 외부 FBref/선수 경기 로그와 독립 이중 대조 완료라고 주장하지 않는다**.
- **GitHub Pages 배포는 성공, 실제 공개 홈페이지 브라우저 시각화는 검증 불가**: 공개 사이트 `github.io` HTML과 `/data/seriea-2012-13.json` 요청이 웹 조회 도구에서 모두 접근 불가. GitHub 연동으로 최종 파일 존재를 확인했고 기존 브라우저 앱의 JSON 로딩 패턴과 3-5-2 지원 코드만 확인했다.

## 4. 주요 역사적 주의 사례

- 2012-13 Juventus: Asamoah와 Isla는 Udinese에서 2012 여름 영입. Pirlo는 이미 2011 여름 Milan에서 Juventus로 갔다. Juventus S-grade Pirlo 2012-13 AIC 시즌 선수상 확인. 시즌 이후 성과 소급 금지.
- Napoli Cavani 2012-13 리그 29골, Hamsik 14 도움, 2013 여름 Cavani PSG 이적 이전 Napoli 재적 상태로 평가.
- Milan Ibrahimović, Thiago Silva는 2012 여름 PSG 이적 후 Milan 2012-13 평가에 포함하지 않음. Balotelli는 2013년 1월 City에서 Milan 도착, Milan 2012-13 **13경기 12골**만 현재 구단 2012-13 성적으로 기록.
- Fiorentina Borja Valero·Gonzalo Rodriguez는 Villarreal에서 2012 여름 이적, Ljajic/Jovetic 선발과 출전 변화를 현재 시즌만으로 분리. Fiorentina 2012-13 최종 리그 4위여도 팀 순위 자체는 등급 가산 안 함.
- Udinese Muriel(11골 22경기) 2012-13 복귀, Di Natale(23골 33경기) 3시즌 지속 득점. Armero는 Udinese/나폴리 겨울 이동으로 두 팀 경기 수를 하나로 합치지 않음.
- Lazio 2013년 5월 26일 우승컵을 통해 유로파리그 실제 출전권 획득. 2012-13 Coppa Italia 상대 Roma 2013-14 출전으로 잘못 포함하지 않음.

## 5. 코드와 보고서

- [시즌 JSON](https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2012-13.json)
- [전체 102명·6구단·10개 포지션·Best XI 보고서](https://github.com/wjdduddlf112/footballarch/blob/main/audit/SERIEA_2012-13_DRAFT_FULL_REPORT.md)
- [검증 Node.js 스크립트](https://github.com/wjdduddlf112/footballarch/blob/main/scripts/verify-seriea-2012-13.mjs)
- [실제 실행 GitHub Actions 워크플로](https://github.com/wjdduddlf112/footballarch/blob/main/.github/workflows/verify-seriea-2012-13.yml)
- [Actions 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/42487965236)
- [Pages 배포 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/42487964769)

**2012-13 평가만 반영. 사용자 최종 승인 없음. 2013-14 시즌의 선수평가는 아직 시작하지 않음.**
