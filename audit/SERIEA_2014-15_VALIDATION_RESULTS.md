# Serie A 2014-15 — 실제 실행·검증 결과 (DRAFT)

- 조사일: 2026-11-08 (Asia/Seoul)
- 평가 시즌: 2014-15; 개인 평가 기간: 2012-13 / 2013-14 / 2014-15
- 상태: `draft_unapproved`; Best XI: `proposed_unapproved`; 사용자 승인 없음
- 경기 기록 근거: six BDFutbol club 2014-15 Serie A lineups
- 후보 전체: 115명 (Juventus 18, Roma 19, Lazio 20, Fiorentina 20, Napoli 20, Sampdoria 18)

## 1. 실제 GitHub Actions / Pages

| 실행 | 관측된 결과 | 증거 |
|---|---|---|
| 115명 DRAFT 구조 검증 (2026-11-08, initial workflow revision) | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42493272258 |
| 38명 리그 탑급 개별 평가 근거 JSON 보강 후 재검증 | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42493661217 |
| 38명 평가 근거 최신 JSON 포함한 GitHub Pages 배포 | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42493660515 |
| 감사 보고서의 38명 개별 근거 추가 커밋 직후 Pages | **실행 상태 별도 확인 필요** | https://github.com/wjdduddlf112/footballarch/actions/runs/42493702959 |
| 실제 브라우저 DOM으로 2014-15 시즌 전환·All Tiers·선수 상세·Best XI 시각 출력 확인 | **미수행 — 이 환경에서 github.io URL 접근 실패** | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2014-15 |

**중요:** Pages 배포 성공은 실제 브라우저 내 모든 버튼·필터·피치 배치까지 확인했다는 뜻이 아니다. `assets/app.js`는 기존 Serie A DRAFT All Tiers 활성화를 지원하고 있었으며, 이번에는 UI 소스를 수정하지 않았다.

## 2. 기계 검사 실제 성공 범위

- 올바른 리그와 시즌 2014-15, UEFA 참가 확인 시즌 2015-16, DRAFT 상태.
- 20개 구단 38경기 리그 순위, 출전권 포함 6개 구단 확인, 6위 Genoa UEFA 자격 없음·7위 Sampdoria 실제 UEL.
- 선수 후보 115명 고유 ID, 고유 생년월일+원어명, 적격 6개 구단만 포함.
- 115명 한국어명·원어명·생년월일 YYYY-MM-DD·원어 구단명 필드 존재.
- 115명 모두 당해 Serie A 1경기 이상 출전, 실제 선발 회수 <= 출전 수, 유효한 0 이상의 골·양수 출전 시간.
- 2014-15 개별 3시즌 기록의 최신 시즌 출전값은 상위 선수 필드와 동일.
- 6개 구단 각 11명 대표 선발 슬롯 = 66, 구단+포지션별 예비 자원 최대 1명.
- 10개 포지션 GK/CB/LB/RB/DM/CM/CAM/LW/RW/ST 각 순위는 1부터 끊김 없고, 티어 순서와 모순이 없음.
- DRAFT 티어 분포 1/9/13/15/35/27/13/1/1/0/0, 합계 115.
- World Class 10, League Top Class 38.
- Best XI 11명 고유 ID, 해당 후보 시즌 포지션 일치, 4-3-3 슬롯 분포 일치.
- 시즌 중 Sampdoria→Napoli 이적 Manolo Gabbiadini를 전체 통합 랭크에서 이중 계상하지 않음.

## 3. 독립 역사 연구에서 여전히 미검증

- 2012-13, 2013-14, 2014-15 **전원 3시즌을 서로 다른 독립 출처로 개별 질적 검증**한 인원: **0/115**. 두 이전 시즌 90개 출전 수치 연결은 앞선 미승인 DRAFT에서 참조한 것이며 새로운 독립 검증이 아님.
- 2014-15 출전·선발·분·골 115명은 BDFutbol 시즌 구단 단일 출처를 기준으로 옮김. 다른 독립 출처와 일괄 행별 수치 대조를 완료하지 않음.
- 출생일 115개 모두 기입. 그 중 미입력 5개(Lorik Cana, Lucas Biglia, Marco Parolo, Khouma Babacar, Mario Gómez)는 2014-15 당시 구단 기록·축구협회/선수 DB로 보완. 나머지 출생일 전체 이중 확인은 끝나지 않음.
- 모든 선수의 `leagueAssists`는 `null`; 자료 부족을 0으로 둔 경우 없음.
- Fiorentina Joaquín의 RM/RWB→RB 표시 대응, Roma Florenzi RB/RW 혼합, 이적 선수 Cuadrado/Salah/Gabbiadini의 가장 많이 뛴 포지션을 **각 경기별로 전수 산출하지 않음**.
- Fiorentina의 3-5-2와 4-3-3 혼용 등, 전체 380라운드의 리그 최빈 전술 자체에 대한 정량 검증은 하지 않음.
- 상위 38명은 개별 임시 평가 근거를 작성했으나 나머지 77명은 주로 출전 기록·선발/포지션 중심의 일반적 임시 판단; 전원 상대 기량 비교는 진행되지 않음.
- 티어와 순위는 정성적 잠정 판단이고, 팀 순위/우승을 직접 보너스로 반영하지 않음.
- 사용자 최종 승인 전에는 모든 기록을 DRAFT로 유지.

## 4. 저장 아티팩트

- data/seriea-2014-15.json
- audit/SERIEA_2014-15_DRAFT_FULL_REPORT.md — 6팀 전체 후보, 10포지션 순위, 38명 상위 개별 이유, 4-3-3 Best XI
- scripts/verify-seriea-2014-15.mjs
- .github/workflows/verify-seriea-2014-15.yml
- audit/PLAYER_INTEGRATION_PROGRESS.md

2015-16 시즌으로 **자동 진행하지 않는다**.
