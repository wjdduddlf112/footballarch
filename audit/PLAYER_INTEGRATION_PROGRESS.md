## 2026-11-05 — Bundesliga 2006-07 DRAFT 128명 구성·개인 검증 상태 분리

- 2007-08 유럽대항전 실제 참가 7구단: VfB Stuttgart, FC Schalke 04, SV Werder Bremen (UCL), FC Bayern München, Bayer 04 Leverkusen, 1. FC Nürnberg (UEFA Cup; Nürnberg DFB-Pokal 우승), Hamburger SV (2007 Intertoto 실제 참가 후 UEFA Cup).
- 신규 `data/bundesliga-2006-07.json` 실제 main 생성, 7개 구단 전체 128명(주전급 103명, 후보 25명), 구단별 주전 인원 고정 11명 제한 없음, 같은 구단/포지션 후보 최대 1명. GK~ST 잠정 티어·순위·명단, 4-4-2 다이아몬드(4-3-1-2 역할) 11명 Best XI `proposed_unapproved`.
- S 1, A+ 11, A0 11, A- 28, B+ 38, B0 20, B- 13, C+ 5, C0 0, C- 1, D 0. World Class 12, League Top Class 51. 모든 선수 현재 시즌 BDFutbol 출전/선발/득점과 공식 DFB 시즌 구단명단 연결. 전원 `partially_verified`; 전체 3시즌 개인 기량 검증 완료 0명. DFB 선수별 2004-05/2005-06/2006-07 분데스리가 출전·득점 직접 대조 4명(클로제, 쿠라니, 프링스, 마리오 고메스); 나머지 124명 과거 두 시즌 독립 개인 검증 필요.
- 실제 JSON 수정: 렌더러 미지원 `4-3-1-2` 표시 값을 `4-4-2` 다이아몬드 호환으로 수정. DM인 파르도를 CM 자리에 배치했던 Best XI 포지션 오류를 실제 CM 히츨슈페르거로 교체. 프랑크 로스트 샬케/HSV 겨울 이적 출전 구분 유지.
- 감사 보고서 `audit/BUNDESLIGA_2006_07_DRAFT_FULL_REPORT_2026_11_05.md`, 구조 검사 `scripts/verify-bundesliga-2006-07-draft.mjs`, Playwright `scripts/verify-bundesliga-2006-07-live.mjs`, Actions `.github/workflows/verify-bundesliga-2006-07-draft-live.yml` 생성. 앱 기존 UI 최소 변경으로 선수 상세 3시즌 검증 근거/상태 표시.
- 연결된 GitHub 최신 선수 JSON 메모리상 독립 구조 검사 PASS(errors=[]), 128명/7구단/11명XI/전 포지션 순위/후보 제한/World Class/League Top/공유 스탠딩 일치. 단 **Actions 실행·GitHub Pages Chromium 실제 검증 결과는 확인 불가이며 미완료**, 성공으로 보고하지 않음. 전체 3시즌 역사 검증도 여전히 부분 검증. 다음 시즌 2007-08 자동 진행 금지, 사용자 승인 없음.

## 2026-11-05 — Bundesliga 2002-03 신규 DRAFT 163명 구축 / 실제 Pages·Chromium 검증 PASS

- "ㅇㅋ 다음" 지시에 따라 2001-02 다음 시즌인 **Bundesliga 2002-03만 신규 작업**, 2003-04 평가로 진행하지 않음. 2003-04 실제 대회 참가 9구단: FC Bayern München, VfB Stuttgart, Borussia Dortmund (UCL), Hamburger SV, Hertha BSC, 1.FC Kaiserslautern (UEFA Cup), SV Werder Bremen, FC Schalke 04, VfL Wolfsburg (실제 2003 Intertoto); 리그 14위 Kaiserslautern은 2002-03 DFB-Pokal 준우승이므로 예외 포함. DSFS 2002-03 시즌표, RSSSF 최종 순위·컵·Intertoto 실제 기록을 근거로 확정.
- 기존 `data/bundesliga-2002-03.json` 없어서 DFB 당시 각 구단 공식 시즌 소속·DOB 페이지와 출처가 명시된 FBref 선수별 리그 기록으로 파일 신규 생성. **9구단 163명, 각 구단 잠정 대표 주전 11명(합계 99명) / 후보 64명**. GK→CB→LB→RB→DM→CM→CAM→LW→RW→ST 포지션별 163명 순위, 전원 한글·원어 이름/당시 원어 소속/생년월일/잠정 티어. 시즌 2002-03 개인 활약 최우선, 2001-02 중간, 2000-01 가장 적게 가중. 팀 순위·우승 자체는 티어 가산점 아님.
- 잠정 티어 **S=3, A+=13, A0=19, A-=15, B+=62, B0=43, B-=3, C+=4, C0=0, C-=1, D=0**. World Class S/A+ **16**, League Top S/A+/A0/A- **50**. 4-4-2 대표 전술 잠정(리그 306경기 실제 최빈 통계 전수 조사 아님), 팀별 3백·4백 전술 변형과 주 포지션 확정 보류 명시.
- **Best XI (proposed_unapproved)** Oliver Kahn(GK), Marcelo Bordon / Christian Wörns(CB), Bixente Lizarazu(LB), Andreas Hinkel(RB), Jens Jeremies(DM), Michael Ballack(CM), Zé Roberto(LW), Mehdi Mahdavikia(RW), Giovane Élber / Jan Koller(ST). 상위 이름은 개인 시즌 기여와 최근 3시즌 평가 참고, 팀 성적 직접 보너스 배제.
- **자료 한계 엄격 표시:** DFB 2002-03 시즌 구단 등록·DOB 출처로 163명 생년월일 기재했으나 모든 날짜의 독립 두 기관 교차 검증은 미완료. 2002-03 개인 리그 출전 기록 **102/163명** 연결, 나머지 **61명은 `leagueAppearances:null`** 및 검증대기 플래그(구단 등록만으로 리그 출전을 단언하지 않음). 선발 횟수 **89/163명** 소스 연결. DFB 개인 프로필에서 2000-01~2002-03 3시즌 **개인 리그 출전/골만** 직접 대조한 5명: Oliver Kahn, Michael Ballack, Giovane Élber, Aílton, Mehdi Mahdavikia. 나머지 158명의 3시즌 심화 재확인과 GK 외 **146명 필드 선수의 전경기 최빈 포지션** 대기. 별도 검증 주석: Ballack DFB/Bayern 2002-03 10골 vs 일부 FBref 11골 차이, Jan Koller 긴급 GK 출전 표본은 주 포지션 ST에 영향 없음.
- **변경 파일**: 새 `data/bundesliga-2002-03.json`; 전체 후보/팀별 포지션 표·통합 순위·S~A-/Best XI·출처 범위 `audit/BUNDESLIGA_2002_03_DRAFT_FULL_REPORT_2026_11_05.md`; Node 구조 감사 `scripts/verify-bundesliga-2002-03-draft.mjs`, Playwright `scripts/verify-bundesliga-2002-03-live.mjs`, workflow `.github/workflows/verify-bundesliga-2002-03-draft-live.yml`, 본 진행 기록.
- 재현 가능 단독 Node 및 공통 구조 검사 **PASS, errors=[]**, 9개 구단×각 11 주전/163명 티어·순위/Best XI 4-4-2 슬롯 검증. **실제 GitHub Pages Chromium PASS_CORE_UI**, Overview/선수 목록·필터·선수 상세·Best XI 11·World Class/League Top 50·Table·Stats, crest **18/18** 로드·warning **0건**. 이전 PL 1999-00/LaLiga 1999-00/Bundesliga 1999-00·2000-01·2001-02 회귀 테스트 전부 PASS. 실검증: https://github.com/wjdduddlf112/footballarch/actions/runs/41919481438 (스크린샷 artifact 13366152084). 해당 코드 커밋 GitHub Pages 배포: https://github.com/wjdduddlf112/footballarch/actions/runs/41919479884 (success).
- 결과는 `draft` / `proposed_unapproved` 미승인 상태로 유지. 핵심 데이터·UI 배포 테스트 성공은 역사적 전원 3시즌 검증 완료를 뜻하지 않음. 사이트 https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=2002-03 . **2003-04 시즌 자동 진행 금지.**

## 2026-11-05 — Bundesliga 2001-02 DRAFT 139명 평가, main 실제 배포·브라우저 검증 PASS

- 사용자의 "ㅇㅋ 다음" 지시에 따라 **2001-02 Bundesliga만** 신규 선수 평가. 2002-03 UEFA 실제 참가 9구단: Dortmund, Leverkusen, Bayern(UCL), Hertha, Schalke, Bremen(UEFA Cup), Kaiserslautern, Stuttgart, TSV 1860(2002 Intertoto 실제 참가). Schalke 2002 DFB-Pokal 우승(Leverkusen 준우승), Bremen UEFA Cup 진출 반영. Stuttgart는 Intertoto 경유 UEFA Cup 출전.
- 기존 138명의 후보를 그대로 티어 복사하지 않고 2001-02 출전·선발 표본 및 공식 2002 Intertoto 실제 참가와 전술을 대조하여 Leverkusen Dimitar Berbatov (리그 24경기/8골) 신규 추가. 결과 **139명 / 시즌 대표 선발 99명 / 대안 후보 40명**, 포지션별 잠정 순위 139명, 티어 S 2 / A+ 14 / A0 27 / A- 16 / B+ 39 / B0 29 / B- 2 / C+ 7 / C0 2 / C- 1 / D 0; **World Class 16 / League Top Class 59**.
- Best XI **proposed_unapproved** 3-4-1-2: Oliver Kahn; Christian Wörns, Lúcio, Jens Nowotny; Dedê(LWB), Willy Sagnol(RWB); Carsten Ramelow(DM), Michael Ballack(CM), Tomáš Rosický(CAM); Márcio Amoroso, Giovane Élber. 3백·윙백 시대 전술 대리 구성일 뿐 리그 306경기의 *통계적 최빈* 포메이션을 확정한 것은 아님.
- 각 팀별 대표 전술 별도 기록: Dortmund 3-4-3, Leverkusen 3-5-2, Bayern 4-4-2, Hertha 4-4-2, Schalke 3-4-1-2, Bremen 4-5-1, Kaiserslautern 3-4-1-2, Stuttgart 3-4-2-1, TSV 1860 4-4-1-1 모두 **잠정**. Schalke/Kaiserslautern은 3백 수비 로테이션의 CB 4명 후보 인원 특별 예외를 명시; 조작된 LB/RB 분류를 피하고 원래 역할을 개별 메타데이터에 보존.
- **자료 수준 분리:** 139명 출전 수치 기재, 선발 횟수 값 기록 52명 중 개별 근거 링크 확인 49명. 생년월일 139명 기재되었지만 2001-02 DFB 명단 직접 개별 확인 34명, 이전 시즌 보존 데이터로 승계 52명, 기존 미재대조 아카이브 53명; **139명 독립 2자료 DOB 검수는 미완료**. DFB/RSSSF 선수별 1999-00/2000-01/2001-02 리그 출전·골 기록 직접 연결 8명(나머지 131명 보류). 필드 선수들의 *전경기 주 포지션 빈도* 독립 검증 0명. 불확실성을 D티어로 처리하지 않음. 모든 티어·순위·Best XI는 사용자 미승인 잠정 결정.
- 기존 다른 리그/시즌 JSON 미수정, 기존 사이트 UI 재설계 없음. 변경: `data/bundesliga-2001-02.json`; 전체 139명/10포지션 통합 순위 보고 `audit/BUNDESLIGA_2001_02_DRAFT_FULL_REPORT_2026_11_05.md`; 구조 검사 `scripts/verify-bundesliga-2001-02-draft.mjs`; 라이브 Playwright `scripts/verify-bundesliga-2001-02-live.mjs`; 전용 CI `.github/workflows/verify-bundesliga-2001-02-draft-live.yml`; 본 진행 기록.
- 자동 Node 구조·기존 공통 검증 **PASS/오류 0건**; 실제 Pages GitHub Actions Chromium **PASS_CORE_UI** (Overview/Players/필터/상세/Top/XI/Table/Stats, 139명 DRAFT, Best XI 11, League Top 59, 엠블럼 18/18, JS 경고 0, PL1999/LaLiga1999/Bundesliga1999/Bundesliga2000 회귀 성공): https://github.com/wjdduddlf112/footballarch/actions/runs/41915874451
- 2001-02 시즌 마지막 데이터 보강/검증 수정본 SHA `ecbe8fcdc3341f9140e30c3dad24b87af2af29ed`; **해당 SHA의 실제 GitHub Pages 배포 성공** https://github.com/wjdduddlf112/footballarch/actions/runs/41915874688 . 검사와 배포 성공 ≠ 역사적 전수 검증 완료. 사이트: https://wjdduddlf112.github.io/footballarch/?league=bundesliga&season=2001-02
- **2002-03 신규 시즌 자동 시작 금지**, 사용자 별도 "다음" 전까지 이번 평가 범위 종료. `draft` / `proposed_unapproved` 유지.

## 2026-11-05 — Bundesliga 2000-01 136명 DRAFT 완성 / 실배포·회귀 검사 PASS

- 사용자 "ㅇㅋ 다음" 명령에 따라 **2000-01 Bundesliga만** 평가. 2001-02 실제 UCL: Bayern, Schalke, Dortmund, Leverkusen; UEFA Cup: Hertha, Freiburg; 2001 Intertoto Cup 실제 참가: Bremen, Wolfsburg, TSV 1860. 2000-01 DFB-Pokal 준우승 Union Berlin은 1부 소속이 아니므로 1부 후보 범위에서 제외.
- 기존 132명 appearance 기반 초안은 정답 취급하지 않고, 구단 공식 DFB 명단·동시대 경기 선발(예: Schalke 전 경기 명단)·FBref 기록을 대조해 **136명, 9구단 주전 99명/후보 37명** 재구성. 기존 명단 외 4명 Sforza, Grodås, Alex Alves, Akpoborie 추가; 빠진 주전급 재분류. 선수별 original tactical role 보존. 구단 주전 XI는 각각 11명으로 검증.
- 선수 **136명 모두 잠정 tier, 포지션별 1..N rank**. 상위 tier S 1, A+ 13, A0 36, A- 14; World Class **14명**, League Top **64명**. 전술 3-4-1-2 (리그 전체 실제 최빈은 전수 통계 미확인), 각 구단 별 3-4-1-2/3-5-2/4-4-2 패턴 잠정 표시. Best XI 11명 proposed_unapproved.
- 리그 출전 수치 136명, 선발 수치 독립 대조 50명. 136명 생년월일 저장 및 **2000-01 DFB 구단 출처 링크** 연결(모든 원문 값을 추가 제2 독립출처로 재대조한 것은 아님). 1998-99/1999-00/2000-01 DFB 선수별 출전·득점 직접 연계 **12명**; 나머지 **124명**의 완전한 3시즌 독립 기록 감사 미완료. GK 14명 확인, 나머지 **122명** 실제 경기별 최빈 포지션 감사 필요. 추가 원자료 검토 플래그 **246건(124+122)**. 역사적 검증 미완료를 D티어 배정이나 허위 스탯으로 감추지 않음.
- 실제 변경 데이터: `data/bundesliga-2000-01.json`; 모든 명단·티어·순위·Best XI 보고: `audit/BUNDESLIGA_2000_01_DRAFT_FULL_REPORT_2026_11_05.md`; 시즌 전용 Node/Playwright 검사: `scripts/verify-bundesliga-2000-01-draft.mjs`, `scripts/verify-bundesliga-2000-01-live.mjs`; Actions `.github/workflows/verify-bundesliga-2000-01-draft-live.yml`.
- 발견한 UI·회귀 검사 오류: 구단별 전술 헤딩 1999-00 고정 문구와 이전 JS 캐시 키로 인해 초기 2000-01 브라우저 실패 → `assets/app.js`의 동적 시즌 제목 및 `index.html` cache-bust 변경. 기존 1999-00 검사의 옛 2000-01 132명 기대값 → 136명으로 교정(`scripts/verify-bundesliga-1999-00-live.mjs`). **수정 후 두 시즌 전체 브라우저 검사 재통과**.
- 본 시즌 Node 통합/단독 구조 검사: **PASS / 오류 0건**. 2000-01 실제 Pages Chromium Overview, 136명 후보 전체, GK/club filter, 한글·원어 선수 상세, Top Class(64명), Best XI 11명, League Table, Statistics, 리그 로고 17/17 및 기존 PL 1999-00/La Liga 1999-00/Bundesliga 1999-00 regression PASS. 경고 0건. [2000-01 실제 Pages Chromium 검증 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/41912840037), [1999-00 회귀 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/41912848580), [UI 수정 포함 Pages 배포 성공](https://github.com/wjdduddlf112/footballarch/actions/runs/41912848034).
- `main`에 반영; 기존 1999-00와 다른 리그·시즌 JSON 미수정. 평가 `status=draft`, Best XI `proposed_unapproved`, 승인 전. **2001-02 신규 평가 자동 시작 금지.**

## 2026-11-05 — Bundesliga 1999-00 DRAFT 126명 평가·배포·실제 화면 검증

- 사용자 지시에 따라 **1999-00 Bundesliga만** 신규 평가. 유럽대항전 2000-01 실제 참가 9구단(Bayern, Leverkusen, HSV, TSV 1860, Kaiserslautern, Hertha, Wolfsburg [Intertoto], VfB Stuttgart [Intertoto→UEFA Cup], Werder [DFB-Pokal 준우승 UEFA Cup]) 포함.
- 기존 출전 기록 기반 후보 118명을 신규 독립 대조하고, 9명 후보 추가/1명 제외, 3백-윙백/중앙 2선 역할 조정. 신규 126명(9구단×11명 주전 조합=99 starter slots; 후보 27); 티어·포지션별 순위 모두 **provisional**. World Class **10**, League Top **44**, Best XI 3-4-1-2 **11명** proposed_unapproved.
- 본 시즌 JSON `data/bundesliga-1999-00.json`, 소규모 3백·전술 UI `assets/app.js`, 전체 126인 및 전원 순위 보고 `audit/BUNDESLIGA_1999_00_DRAFT_FULL_REPORT_2026_11_05.md`, 본 시즌 전용 검증 `scripts/verify-bundesliga-1999-00-draft.mjs`, Playwright `scripts/verify-bundesliga-1999-00-live.mjs`, Actions `.github/workflows/verify-bundesliga-1999-00-draft-live.yml`.
- **데이터 독립 역사 검증 한계:** 126명 중 1999-00 출전 기록 기재 126명, 직접 대조한 선발 수치 62명, 생년월일 값 72명 중 13명 개별 공식/인적 출처 확인, DFB 공식 리그 출전·골 기록 1997-98 / 1998-99 / 1999-00 직접 연결 **11명**. 나머지 115명 3시즌 개인 자료, 54명 DOB 미기재, 경기별 실제 주포지션·좌우·당시 포메이션 최빈 빈도는 추가 검수 대상. 자료 부족을 D티어로 대체하지 않음.
- **구조 검증:** 본 시즌 Node 검증 PASS(0 오류, 290 unresolved evidence checks/flags), 기존 Bundesliga·player integration verifier PASS, JavaScript syntax PASS. 라이브 Chromium 검증에서 실제 Pages JSON, Overview/Players/club+position filter/modal, Top Class 44, Best XI 11, League Table, Statistics, 회귀 표본 PL 1999-00/La Liga 1999-00/Bundesliga 2000-01 모두 PASS.
- 실제 GitHub Pages 배포 성공(DFB 증거 보강 후): https://github.com/wjdduddlf112/footballarch/actions/runs/41909372551 , Bundesliga 본 시즌 실배포 Chrome 검증 PASS: https://github.com/wjdduddlf112/footballarch/actions/runs/41909279882 , 검증 산출물 screenshots/report.json Actions artifact.
- **구분:** Pages 배포 및 구조·실브라우저 검증 완료 ≠ 모든 역사적 출전·생년월일·3시즌 경기력 교차 검증 완료. 사용자 최종 승인은 별도: `status=draft`, `bestXiReview.status=proposed_unapproved`. 2000-01 신규 평가 시작하지 않음.

## 2026-11-04 — La Liga 2018-19 PR #49 merged, draft live validation

- User-requested 2018-19 La Liga: Barcelona, Atlético, Madrid, Valencia to 2019-20 UCL; Getafe, Sevilla, Espanyol to UEL, checked against UEFA 2019-20 actual participation.
- PR https://github.com/wjdduddlf112/footballarch/pull/49 merged main squash `645180a61dfa784aa15aa50b4ec7e60c6badaf3d`. 128 nominees, 77 primary tactical roles, 51 alternate roles, provisional World 11, League Top 44; all tiers and ranks user-unapproved.
- Node 13 structural + local Chromium **PASS** https://github.com/wjdduddlf112/footballarch/actions/runs/41778191731 . Actual Pages **SUCCESS** https://github.com/wjdduddlf112/footballarch/actions/runs/41778403074 . Production Chromium full 5 tabs and player detail **PASS** https://github.com/wjdduddlf112/footballarch/actions/runs/41778404306 .
- Initial PR Chromium failure caused stale 135 expected count, corrected to actual 128. First live workflow passed JSON and all five tabs, then failed wrong literal-modal-label assertion (the label does not exist in actual UI), fixed to verify the JSON meta.status=draft. Subsequent production Chromium passed. Do not confuse expected-string test changes with player history verification.
- Extra cross-check FBref on Getafe RB Damián Suárez confirms 2018-19 36/36 league and prior 2017-18 33/33; candidate provisional Best XI RB changed from Arias to Damián; still DRAFT.
- Full all-player and positional rankings report https://github.com/wjdduddlf112/footballarch/blob/main/audit/LALIGA_2018_19_RATED_SOURCE_DRAFT_2026-11-04.md ; page https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2018-19&view=overview .
- **Historical limitations:** 127 DOB not independently two-sourced, 2016-17/2017-18 all-player quality research unfinished, 2018-19 38-game primary positions and league 380-match modal formation unverified; some backups with only 1-4 league starts may not qualify under starter-equivalent criterion and need removal/replacement. No final approval; no 2019-20 season work.

## 2026-11-04 — La Liga 2018-19 provisional 128-player candidate audit

- User explicit "다음": only 2018-19 La Liga, no 2019-20 assessment. Actual 2019-20 UCL entrants: Barça, Atlético, Real Madrid, Valencia. UEL: Getafe, Sevilla, Espanyol. UEFA officially verified.
- New season data `data/laliga-2018-19.json`: 128 nominated, 77 XI tactical starter slots + 51 alternate candidates, 11 provisional World Class, 44 League Top, 4-3-3 proposed XI. `userApproved=false`, `historicalFactVerification=false`.
- Every team 2018-19 BDFutbol league squad source: individual appearances PM, starts SM, goals G; no global independent two-source transcription check. Seven teams newly nominated rather than copied from prior.
- All 128 ISO DOB fields populated but **only Daniel Wass DOB confirmed with DBU and Danish Lexicon**; other 127 have provisional dates, not two-source verified. 2016-17 and 2017-18 individual recency-weighted history independently unverified. Every player's matchwise primary position, tactical wing-back side and 380-game modal league formation unverified. High reserve count doesn't certify starter-equivalent status for 1-4 appearance players, reconsider in review.
- Valencia Daniel Wass listed only once at RB (32 appearances/26 starts), not duplicated as CM. Sevilla Promes once at LW, Espanyol Melendo once at RW. Sevilla 4-2-3-1 is display proxy, actual Machín side extensively used 3-5-2 and wingbacks.
- Complete report `audit/LALIGA_2018_19_RATED_SOURCE_DRAFT_2026-11-04.md`; specific structural and local/production Chromium scripts/workflows created. **Do not call tests PASS or production deployed until Actions confirms**. Preserve other seasons' records and original league table and club crests.

## 2026-11-04 — La Liga 2017-18 PR #48 merged; real production Chromium PASS

- PR #48: https://github.com/wjdduddlf112/footballarch/pull/48 ; squash main commit `9646362afeee76851aa6d643814edf9fa0b97e85`. 135 player candidates, 77 starter slots + 58 backups, 16 provisional World Class + 48 League Top, proposed 4-3-3 Best XI, DRAFT userApproved=false.
- Initial workflow test script failed after all 13 checks succeeded due a final summary variable typo, corrected, then PR Node structural/local Chromium both **PASS** https://github.com/wjdduddlf112/footballarch/actions/runs/41771298273 .
- Actual public GitHub Pages deployment **SUCCESS** https://github.com/wjdduddlf112/footballarch/actions/runs/41771435042 . Live production five-tab Chromium test **SUCCESS** https://github.com/wjdduddlf112/footballarch/actions/runs/41771435842 .
- Full candidate/rank/source report https://github.com/wjdduddlf112/footballarch/blob/main/audit/LALIGA_2017_18_RATED_SOURCE_DRAFT_2026-11-04.md . Actual site https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2017-18&view=overview .
- **Not historically complete:** 133 players birthday verification not completed against two independent sources, 2015-16 and 2016-17 full personal quality research unverified, all-player 2017-18 game-by-game dominant positions unverified, 380-match modal formation not proven. All grades, ranks and XI remain provisional/unapproved.
- Stop after season 2017-18. Do not initiate 2018-19 players until user requests next season.

## 2026-11-04 — La Liga 2017-18 135-person provisional source-led DRAFT

- User explicitly requested subsequent season after 2016-17. Only **2017-18 La Liga** player assessment created; no 2018-19 evaluation.
- 2018-19 actual entrants: 2017-18 La Liga top four Barcelona, Atlético, Real Madrid and Valencia UCL; Villarreal, Real Betis and Sevilla UEL. Cross-checked against UEFA season club lists and LaLiga 2018-19 Europa League report.
- Seven 2017-18 BDFutbol club team-season PM total appearances, SM starting lineups, G outfield goals. New `data/laliga-2017-18.json`: **135 nominees, 77 nominal tactical starter slots, 58 nominal backup/rotation slots**, tentative **World Class 16, League Top 48**, proposed 4-3-3 XI; userApproved=false and bestXiStatus=proposed_unapproved.
- All 135 ISO DOB fields populated; **2 individually independently 2-source checked**: Marcos Llorente from Real Madrid official & LaLiga, Clément Lenglet from FFF & LaLiga. Other **133 not independently double verified**. Date population must not be mistaken for all-player independent validation.
- Full independent 2015-16 and 2016-17 player performance and 2017-18 dominant position by 38-game lineup remains incomplete. 4-3-3 site representation is not proven seasonwide modal; Barcelona and Valencia often 4-4-2, Betis varying 3-back structure. All tier/ranks unapproved subjective drafts, no automatic title bonuses.
- Files: `audit/LALIGA_2017_18_RATED_SOURCE_DRAFT_2026-11-04.md` full 135 names, rankings, sources; dedicated structure + local Chromium + live GitHub Pages checks committed. **Do not claim tests or production deployment until confirmed in Actions**.
- Preserve 20-club standings, legacy player seasons, badges and UI. Stop before next season pending explicit user instruction.

## 2026-11-04 — La Liga 2016-17 DRAFT merged and actual public Pages Chromium PASS

- PR #47 merged into main commit `694e7e5cbf2537b1eada10f5c00e8e0c2bfa90a4`. Total **135 nominees / 77 starter slots / 58 backups; 17 provisional World Class / 50 League Top**; proposed 4-3-3 Best XI remains unapproved.
- Structural Node and local Chromium **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41769335054 . Actual GitHub Pages build and deployment **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41769445966 . Public site five-tab Chromium and player detail **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41769446919 .
- Complete full player + position report: https://github.com/wjdduddlf112/footballarch/blob/main/audit/LALIGA_2016_17_RATED_SOURCE_DRAFT_2026-11-04.md . Live browser: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2016-17&view=overview .
- **HISTORICAL VALIDATION IS NOT COMPLETE:** DOB presence (135) is not independent double-sourcing; player 2014-15/2015-16 individual form, 2016-17 matchwise role share and 380-match modal tactical formation not independently verified. Current season league stats are BDFutbol team-table 1-source. Scores and tiers remain provisional and userApproved=false.
- 2017-18 player assessment NOT started. Season 2016-17 stop after this batch pending user request.

## 2026-11-04 — La Liga 2016-17 source-led 135-player DRAFT, historical checks incomplete

- Season scope changed only on user's explicit “다음” request after 2015-16. Actual 2017-18 Europe participants: Madrid, Barça, Atlético, Sevilla UCL; Villarreal, Real Sociedad, Athletic UEL. UEFA UEFA/RFEF source references in `audit/LALIGA_2016_17_RATED_SOURCE_DRAFT_2026-11-04.md`.
- Separate branch `draft/laliga-2016-17-source-led-20261104`; new dataset `data/laliga-2016-17.json` and complete 135 player/team/position rank audit report. 77 tactical starters, 58 nominal backup candidates, 17 provisional World Class, 50 provisional League Top. Representative 4-3-3 Best XI proposed/unapproved.
- 2016-17 league apps/starts/goals transcribed from each of seven BDFutbol 2016-17 team pages; all 135 ISO birthday strings populated but **none should be read as completing an individual two-source verification claim**. Previous two seasons reference older DRAFT data; independent 3-season individual comparison is not complete. Game-by-game primary positions and seasonwide modal formation remain unverified; tier/rank provisional.
- Important correction: 2016-17 Sevilla CB Clément Lenglet not placed at LB artificially to fill backup, excluded by three CB cap; LB backup legitimately remains vacant. Sevilla 4-2-3-1 is display proxy due Sampaoli tactical variability. Matchwise review needed.
- This note precedes public test confirmation; actual GitHub Actions / Pages statuses recorded only after inspected. Historical facts **NOT certified**. Do not proceed to 2017-18 season without explicit request.

## 2026-11-04 — La Liga 2015-16 DRAFT production deployment + real Chromium verified

- PR #46 merged commit `2cf4fd45eebe68ea4972b1377ad94353525d2af7` into main. Dataset 135 / 77 starting slots / 58 backup slots; 16 provisional World Class / 45 League Top; 4-3-3 Best XI unapproved.
- PR 2015-16 structural / local Chromium workflow **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41767864736 .
- Actual GitHub Pages build/deploy **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41768016403 . Public production five-tab Chromium with player detail **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41768016256 .
- Historical fact verification **NOT COMPLETED** (135 three-season individual research, 135 matchwise dominant position, 135 independently double-source birthday checks, full 380-match modal formation census); candidate list and tier/ranks are provisional DRAFT. Gameiro DOB conflict retained with preferred FFF official 1987-05-09. Final user approval false.
- Data: https://github.com/wjdduddlf112/footballarch/blob/main/data/laliga-2015-16.json ; full all-player audit: https://github.com/wjdduddlf112/footballarch/blob/main/audit/LALIGA_2015_16_RATED_SOURCE_DRAFT_2026-11-04.md ; live: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2015-16&view=overview .

## 2026-11-04 — La Liga 2015-16 135-player source-led DRAFT (user approval NOT granted)

- Current changes: `data/laliga-2015-16.json`, `audit/LALIGA_2015_16_RATED_SOURCE_DRAFT_2026-11-04.md`, `scripts/verify-laliga-2015-16-{draft,browser,live}.mjs`, associated GitHub Actions workflows. Branch `draft/laliga-2015-16-source-led-20261104`.
- Actual 2016-17 Europe: FC Barcelona, Real Madrid, Atlético, Villarreal (UCL play-off before UEL), Sevilla (UEL titleholder -> UCL), Athletic and RC Celta. Existing 2015-16 twenty-team standings, crests, older-season player files, and app UI preserved.
- Current 2015-16 dataset: **135 candidates across 7 clubs** (77 nominal first XI tactical slots, 58 backup candidates), provisional **World Class 16**, **League Top 45**, proposal **4-3-3 XI**, all unapproved draft. Each player's 2015-16 league stats uses one BDFutbol club table and is **not** fully independently cross-checked. 2013-14 and 2014-15 older-season references are DRAFT records, not independent 3-season evaluation.
- **135 ISO birthdates entered, but independent two-source checks are incomplete.** Kévin Gameiro official FFF DOB 1987-05-09 versus historical FootballSquads 1987-04-09 explicitly documented with preferred official source. Specific Villarreal birthdays referenced with FFF/LaLiga/Villarreal/other sources.
- Main-position matchwise census **not completed** (135); per-match tactical leaguewide 380-fixture modal 4-3-3 **not verified**; positional role conflicts flagged. All tiers and positional ranks are provisional and do not equate to a verified historic appraisal. User final approval remains false.
- Structural Node and local Chromium tests prepared; production GitHub Pages and actual workflow statuses **must be checked separately**, not assumed from file commit alone. Do not start 2016-17 without explicit user request.

## 2026-11-04 — La Liga 2014-15 real production Pages Chromium PASS; DRAFT unapproved

- PR **#45** merged to main squash SHA `71c3a900e45b672284337f65f064965a1803d6a4`. Dataset `data/laliga-2014-15.json` still explicitly `status=draft`, `userApproved=false`, `bestXiStatus=proposed_unapproved`; candidate count **130** (77 nominal starter slots + 53 backup/cup-starter), provisional World Class **22** / League Top **50**.
- Actual 2015-16 UCL: Barcelona, Madrid, Atlético, Valencia, **Sevilla as 2014-15 Europa League winner**; UEL Villarreal, Athletic Club. League's 20-team full table and club/crest catalogue preserved.
- Structural Node and local Chromium PR verification **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41765515935 .
- Actual public production Pages Chromium **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41765638157 . Initial rollout GET 404 before new site; next GET **HTTP 200, 2014-15, 130 players, status draft**. All five Overview, 4-2-3-1 formation XI, World 22/League Top 50, 20-team standings, Stats tabs passed. Claudio Bravo player detail displayed Korean/official original name, club, DOB, 37 La Liga starts, tentative A+, pos rank 1; **zero JavaScript errors**. Five live screenshot artifacts saved.
- Public Pages deployment workflow linked: https://github.com/wjdduddlf112/footballarch/actions/runs/41765637374 . Check exact final conclusion independently; successful public 200/Chromium browser establishes production loading regardless of build job timing.
- Data/report: `data/laliga-2014-15.json` and `audit/LALIGA_2014_15_RATED_SOURCE_DRAFT_2026-11-04.md`. Cup-starter special case Barcelona ter Stegen **0 league starts / 0 league appearances, 13 UCL + 8 Copa** separately; no fake league starts.
- **Historical completeness NOT CERTIFIED**: 130 current-season stats single BDFutbol primary club lists without all-player independent second-source audit; ISO DOB 130 entered but all two-source birthdates not confirmed, two conflicts logged (Adriano, Gameiro); previous 2012-13/2013-14 personal quality not independently checked across all players; 2014-15 matchwise predominant roles and 380-game modal formation not fully confirmed. Ratings and positional ranks remain tentative user-unapproved, not proof of completed historic audit.
- Public URL: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2014-15&view=overview . **Stop after 2014-15, do not start 2015-16 without user request.**

## 2026-11-04 — La Liga 2014-15, 130-player source-led unapproved DRAFT

- User explicitly requested next season: **2014-15 La Liga** only. Seven actual 2015-16 UEFA participants: Barcelona, Real Madrid, Atlético, Valencia **plus Sevilla (UEL winner)** into UCL (5 UCL total); Villarreal and Athletic into UEL (2).
- New `data/laliga-2014-15.json` and complete `audit/LALIGA_2014_15_RATED_SOURCE_DRAFT_2026-11-04.md`: **130 players, 77 tactical starter slots + 53 backup/rotation**, 22 provisional World Class, 50 provisional League Top. Proposed 4-2-3-1 best XI; source-led 2014-15 BDFutbol PM/SM/G per eligible club.
- Special record: Barcelona goalkeeper **Marc-André ter Stegen 0/0 La Liga** but 13 Champions League + 8 Copa del Rey starts, first-choice cup goalkeeper. Kept separate non-league evidence instead of inventing league appearances. Messi was RW (43 league goals), Neymar LW (22), Suárez central striker (16), Claudio Bravo league keeper (37).
- All 130 ISO DOBs populated, full independent two-source confirmation **NOT complete**. Adriano Correia and Gameiro conflicting historical sources flagged. Previous 2012-13 and 2013-14 individual personal quality and other clubs/leagues **not independently all rechecked**, previous Football Archive entries are DRAFT pointers only.
- Predominant 2014-15 game-by-game positions, all-player 3-season personal comparison and season-specific most common formation across 380 La Liga matches remain **unverified**. Several dual-position candidates, starters labeled as backups due positional tactical cap, and 4-3-3 Barcelona versus 4-4-2 Atlético/Villarreal require full match census.
- All tiers/ranks and Best XI **proposed/unapproved**; no result/title bonus. 20-team original standings, club crests, other seasons and UI source preserved. Node structural and local/production Chromium workflows added to branch `draft/laliga-2014-15-source-led-20261104`. **Do not claim CI or public deployment until actual Actions pass**.
- Stop after 2014-15; do not automatically proceed to 2015-16.

## 2026-11-04 — La Liga 2013-14 DRAFT published and live GitHub Pages Chromium PASS

- PR #44 merged on main as squash commit `93137192d720eea6a5173cad8d5d913112ae6254`. `data/laliga-2013-14.json` retains `meta.status=draft`, `userApproved=false`, `bestXiStatus=proposed_unapproved`; **136 players / 77 nominal starters + 59 backups**, 21 provisional World Class / 51 League Top.
- 7 verified 2014-15 UEFA entrant clubs: Atlético, Barça, Madrid, Athletic (UCL); Sevilla, Villarreal, Sociedad (UEL); previous archive standings and crests preserved.
- PR branch structural Node test and local Chromium **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41763641902 .
- Actual GitHub Pages build & deployment **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41763778862 .
- Real *public* GitHub Pages Playwright Chromium **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41763779345 . JSON fetched HTTP 200 and showed 136 players, 2013-14 DRAFT. Overview, 4-2-3-1 DRAFT XI, Top Class (World 21 / League Top 51), 20-team League Table and Statistics rendered. Player details for Thibaut Courtois displayed Korean/original name, birthdate, Atlético original club, GK rank, league starts and unapproved tentative A+ grade. **Zero JS errors**, five live screenshots retained as Action artifact.
- Formation 4-2-3-1 supported by independent 2012-13–2016-17 La Liga multi-season tactics paper, **but 2013-14-only modal count not certified**. Historic accuracy is not established by the green structural or browser checks.
- **Still unfinished historically:** 136-player 2011-12 & 2012-13 independent individual form/quality, 2013-14 majority individual positions from game-by-game lineups, complete independent two-source DOB corroboration. Iago Herrerín official Athletic DOB correction, Adriano older Barça DOB document conflict, Gameiro official DOB vs FootballSquads discrepancy documented in full source audit: `audit/LALIGA_2013_14_RATED_SOURCE_DRAFT_2026-11-04.md`.
- Public site: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2013-14&view=overview . Stop after 2013-14; ratings remain DRAFT and unapproved.

## 2026-11-04 — La Liga 2013-14 (user requested next season) 136-player unapproved source-led DRAFT

- 2013-14 La Liga selection restricted to seven **actual** 2014-15 UEFA entrants: Atlético, Barcelona, Madrid, Athletic Club (Champions League); Sevilla, Villarreal, Real Sociedad (Europa League including actual playoff participants).
- New `data/laliga-2013-14.json`: **136** eligible club player nominees from each 2013-14 BDFutbol PM/SM/G team roster, nominal 77 tactical starters and 59 backups. Provisional grades 3 S / 18 A+ / 30 A- / 42 B+ / 27 B0 / 9 B- / 5 C+ / 2 C0, **World Class 21 / League Top 51**; all individual positions/grades/ranks and Best XI are **DRAFT, not user approved**.
- Complete team-by-team 136-person table and positional ranks at `audit/LALIGA_2013_14_RATED_SOURCE_DRAFT_2026-11-04.md`. 20-team table, club catalog/crests, all older seasons and static site UI preserved.
- Nominal era 4-2-3-1 XI supported by **independent multi-season La Liga tactical study** for 2012/13–2016/17 (https://pubmed.ncbi.nlm.nih.gov/37559775/) — **does not certify 2013-14 single-season 380-match modal formation**. Team Atletico 4-4-2, Barca/Madrid 4-3-3, Villarreal 4-4-2 are distinct.
- ISO DOB populated **136/136** but independent two-source confirmation of all 136 **NOT complete**. Verified Iago Herrerín 1988-01-25 using Athletic official plus historic FootballSquads (correcting old DRAFT 1988-03-13). Adriano 1984-10-26 retained with official current FC Barcelona support; older Barca source disagreement 1984-10-20 still documented. Kévin Gameiro 1987-05-09 supported by France FFF/Atlético official vs FootballSquads conflicting April 9; source preference logged.
- Full individual previous 2011-12/2012-13 personal form and 2013-14 match-by-match most-frequent position: **NOT independently completed** for all 136. Earlier Football Archive DRAFT pointers do not count as independent proof; no team title/rank bonuses to player grade. Goalkeepers' source negative G is goals conceded, not goals scored; dataset GK goals scored zero.
- GitHub working branch `draft/laliga-2013-14-source-led-20261104`; new Node structure validator, local and published Chromium scripts plus CI. **Do not assert CI, GitHub Pages or live Chromium PASS until actual workflow result.**
- **Stop after 2013-14**; preserve all unapproved statuses.

## 2026-11-04 — La Liga 2012-13 GitHub Pages publication and real Chromium PASS (unapproved DRAFT)

- PR #43 squash merged onto main SHA `51cc59f46764b5794b7209b91369b40c338a428f`. 2012-13 `meta.status=draft`, `userApproved=false` and `bestXiStatus=proposed_unapproved`. Player count 135, nominal 77 tactical starters + 58 backups, provisional World Class 17, League Top 45.
- Local structural Node + Chromium PR run **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41757992897 .
- Production GitHub Pages deployment **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41758121347 .
- Real publicly deployed GitHub Pages Chromium **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41758121723 . First two probes returned 404 during deployment rollout; third returned **HTTP 200 / 135 players / 2012-13 / draft**. Overview, 4-2-3-1 DRAFT XI, Top 17/45, 20-team league table, and Stats tabs all rendered. Actual Courtois player modal shows Korean/original name, Atlético, DOB, 37 starts, rank and unapproved provisional tier. **Zero JavaScript errors** and five live screenshots stored as a CI artifact.
- **Independent historical audit still incomplete:** full 135-player previous 2010-11/2011-12 career form, predominant matchwise position, DOB double-check and 380-match La Liga modal formation are **NOT** certified by passing structural/Chromium tests. See `audit/LALIGA_2012_13_RATED_SOURCE_DRAFT_2026-11-04.md` for complete nominations/known DOB conflicts. **All tiers and rankings remain draft pending user review. Stop after 2012-13.**
- Public page: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2012-13&view=overview

## 2026-11-04 — La Liga 2012-13 source-led 135-player DRAFT (not user approved)

- **User explicitly authorized** starting La Liga 2012-13, the season after 2011-12. Only current 2012-13 player evaluation is added. Seven actual 2013-14 entrants: Barcelona, Real Madrid, Atlético, Real Sociedad (UCL); Valencia, Betis, Sevilla (UEL). Málaga rank 6 UEFA excluded; Rayo rank 8 license denied; Sevilla rank 9 entered, so standings rank alone is insufficient.
- New `data/laliga-2012-13.json`, using 7 BDFutbol **Spanish** club-year **PT starts / PJ appearances / G goals** lists as current-year source. **135** nominees from qualifying clubs, **77** tactical nominal starters and **58** backups, **17 World Class** and **45 League Top Class** provisionally, unique within-position rank, 4-2-3-1 candidate Best XI **unapproved**. Team 4-3-3 Barcelona and two-striker Betis/Atlético shapes kept as notes.
- Complete by-club table and league positional rankings: `audit/LALIGA_2012_13_RATED_SOURCE_DRAFT_2026-11-04.md`. All 135 ISO DOB values entered; independent double-source verification not done for all 135; unresolved discrepancies noted for Adriano Correia and Geoffrey Kondogbia (official FFF/LaLiga 1993-02-15 vs FootballSquads conflicting date).
- Prior **2010-11** and **2011-12** individual performances NOT independently cross-verified for all; archive comparison is a DRAFT pointer, not valid independent historical verification. Actual 2012-13 most-played positions for all 135 and 380-game modal formation NOT verified. All grades/relative ranks are **provisional hypotheses**, not approved. Selected hybrid position questions: Essien RB vs CM, Koke RW vs CM, Markel Bergara CM vs DM, Xabi Prieto CAM vs RW, Tino Costa DM vs CM, Manu del Moral RW vs other roles.
- Goalkeepers treated as **zero goals scored**; BDFutbol GK negative goal column is goals conceded and not mislabeled as GK scored goals. Midseason signings Diego López (Madrid) and Beto (Sevilla) club-year stats only. Cesc Fàbregas 30 league starts / Higuaín 19 labeled tactical backups due max starting slots; they are starter-equivalent and must not be considered qualitatively weak.
- The 20-team historical league table, club emblems, earlier seasons, site UI and Git history are preserved. This new season is committed on `draft/laliga-2012-13-source-led-20261104`, structural Node and local/published Chromium Actions added; **CI and public Pages status require actual workflow verification**, not inferred.
- **Stop after 2012-13**; no next 2013-14 player season without fresh user instruction.

## 2026-11-04 — La Liga 2011-12 GitHub Pages PRODUCTION browser PASS; source-led ratings remain DRAFT

- PR **#42** merged to `main`, squash SHA `7cc59689388d4ee245f2395b08d5c394e41d0285`. New `data/laliga-2011-12.json` remains `meta.status=draft` and `userApproved=false`; nominal 134 players/77 starters/57 backups; provisional World Class 18, League Top 42.
- Draft PR structural Node and local Chromium **PASS** after fixing an accidental IP replacement (first run failed for that test-script typo, not the source data). Corrected successful run: https://github.com/wjdduddlf112/footballarch/actions/runs/41689620649 .
- GitHub Pages production deployment **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41689837737 .
- Actual public Pages Chromium **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41689838699 . JSON HTTP 200, 134 player records, 2011-12 DRAFT. All five tabs Overview, Formation (4-2-3-1 DRAFT), Top (18 world, 42 league top), Table (20 teams) and Stats render. Live Casillas player modal includes Korean/original names, 1981-05-20 DOB, Real Madrid, GK positional rank 1, tentative unapproved tier. Zero JS errors. Five screenshots uploaded under Action artifact `laliga-2011-12-live-browser-screenshots`.
- **Important: browser/structure checks do not validate player-history facts.** 134 candidates' 2009-10 and 2010-11 form, actual most-frequent 2011-12 game positions, DOB double-source audit across roster, and 2011-12 league modal formation remain incomplete. Four DOB conflicts logged, some corrected by additional sources. All tiers/rankings/Best XI explicitly unapproved.
- 2011-12 report: `audit/LALIGA_2011_12_RATED_SOURCE_DRAFT_2026-11-04.md`. Public URL: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2011-12&view=overview . **Stop after this season**.

## 2026-11-04 — La Liga 2011-12 fresh 134-player DRAFT (not user approved)

- User directly initiated the 2011-12 season. Seven *actual* 2012-13 UEFA entrants identified: Real Madrid, Barcelona, Valencia, Málaga (UCL), Atlético, Levante, Athletic Club (UEL; Athletic Cup finalist despite 10th league position). Osasuna rank 7 excluded.
- New dataset `data/laliga-2011-12.json`: **134** provisional nominees, **77** nominal starters, **57** backup tactical candidates. 4-2-3-1 working Best XI; **18 World Class**, **42 League Top**, all unapproved. Group-by-club and positional tables in `audit/LALIGA_2011_12_RATED_SOURCE_DRAFT_2026-11-04.md`.
- **Historical limitations intentionally explicit**: 134 current-season SM/PM/G rows transcribed from linked BDFutbol club-year lists, but second independent record check not yet completed; 134 ISO DOBs entered, NOT 134 independently two-source-certified birth dates; previous 2009-10 and 2010-11 personal quality and 38-game primary-role frequency not independently verified. Seasonwide modal formation also unverified. `DRAFT` is not historical verification.
- Targeted corrections: Arda Turan LW and Adrián López RW using contemporary playing descriptions; Levante Nano born 1980-07-07 (Levante official), Pedro López 1983-11-01 (Transfermarkt/Sofascore vs FootballSquads/Sky conflict), Atlético Eduardo Salvio 1990-07-13 (UEFA/BDFutbol vs Sky conflict). Earlier Abidal and Adriano conflicts continue. Four DOB conflicts documented; further cross-validation remains.
- Branch `draft/laliga-2011-12-source-led-20261104`, existing standings (20 clubs), crests, all other seasons and site source preserved. New local Node/Chromium and public Pages scripts plus GitHub Actions added, to be reported only after actual status checks. No user-final grades or rankings approved.
- **Stop after 2011-12** until a new user instruction.

## 2026-11-04 — La Liga 2010-11 PRODUCTION GitHub Pages verification PASS (DRAFT only)

- PR #41 merged on main at `e8e8de301c79906e077da23b55b206123a9a68b5`; all earlier seasons, standings and club crest catalog preserved. Public dataset: https://wjdduddlf112.github.io/footballarch/?league=laliga&season=2010-11&view=overview.
- Branch structural Node and local Chromium success: https://github.com/wjdduddlf112/footballarch/actions/runs/41681491858.
- GitHub Pages deployment **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41681726974.
- Actual public GitHub Pages Chromium browser **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41681729881. Source JSON HTTP 200, season 2010-11, players 127, status draft; Overview, Formation (4-2-3-1 DRAFT), Top (World 16, League Top 40), 20-team standings, Stats rendered; Iker Casillas detail shows original name, birthdate, club, rank and '잠정 티어 · 미승인'; zero JS errors; 5 screenshots stored.
- **Unresolved historical audit is NOT fixed by passing test**: individual prior two seasons' quality, 2010-11 most frequent on-field position, 2010-11 La Liga modal formation, DOB 90 prior DRAFT-only and two conflicts still pending. All ratings remain user-unapproved provisional DRAFT. Do not begin 2011-12 without instruction.

## 2026-11-04 — La Liga 2010-11 (started after user "ㅇㅋ 다음 시작")

- Historical scope 2010-11 La Liga; actual 2011-12 European entrant clubs **Barcelona, Real Madrid, Valencia, Villarreal (UCL); Sevilla, Athletic Club, Atlético (UEL)** — seven teams.
- 127 manually source-led nomination records from BDFutbol 2010-11 PM/SM/G roster views, 77 tactical starters + 50 backups. 4-2-3-1 era-hypothesis Best XI; all tiers and position ranks entered **DRAFT / user not approved**.
- DOB ISO 127/127 entered, **90 previous-year DRAFT only**, 35 new publicly named biographies/historic FootballSquads 2010-11 squads, 2 FC Barcelona official/historic roster date conflicts (Abidal and Adriano). Two-source independent DOB not certified.
- 2008-09 and 2009-10 player-specific recent form and 2010-11 actual predominant per-match player positions **not independently verified**; 4-2-3-1 not established as leaguewide most-frequent 2010-11 by census.
- Full table: `audit/LALIGA_2010_11_RATED_127_FULL_REPORT_2026-11-04.md`; limitations: `audit/LALIGA_2010_11_SOURCE_AUDIT_2026-11-04.md`.
- Branch `draft/laliga-2010-11-source-led-20261104`; 2010-11 JSON `data/laliga-2010-11.json`, new Node structural and local Chromium + published Pages Chromium scripts and CI. Historical 20-team standings, crests, previous season data/UI preserved.
- **Do not start 2011-12 until user specifically directs it.**

## 2026-11-04 — La Liga 2009-10 actual GitHub Pages production checks (DRAFT)

- PR #40 merged on main at squash SHA `c71f1635bb96ca7c14fa972eb2b71906278be9bd`; prior seasons, 20-team standings and club crests unchanged. 2009-10 remains **129-player DRAFT**, user not approved.
- GitHub Pages deployment **SUCCESS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41675523591.
- Real public GitHub Pages Chromium **PASS**: https://github.com/wjdduddlf112/footballarch/actions/runs/41675524506. Public JSON HTTP 200 with 129 players and `meta.status=draft`. Overview / 4-4-2 DRAFT Best XI / 15 world-class + 35 league top / 20-team table / Statistics all shown; real Iker Casillas modal includes Korean/original names, DOB, club, rank and '잠정 티어 · 미승인'; zero JS runtime errors; 5 screenshots collected. Draft branch CI Node structure + Chromium PASS: https://github.com/wjdduddlf112/footballarch/actions/runs/41675243484.
- **Independent player history still NOT complete:** 129 players need independently sourced previous two-season form and match-by-match primary position. 129 ISO birthdays entered, but 16 previous-DRAFT-only, 1 Abidal source conflict and other independent biography checks remain. Leaguewide most common formation is unproven. CI and browser pass are **not** historical validation.

## 2026-11-04 — La Liga 2009-10 source-led 129-person DRAFT (not historic fact-certified)

- User directed the next season after 2008-09. Scope is **only 2009-10**; 2010-11 player evaluation has not started.
- Exactly 7 actual 2010-11 European qualifiers: Barcelona, Real Madrid, Valencia and Sevilla (UCL, Sevilla playoff then UEL); Getafe, Villarreal and Atlético (UEL). Mallorca was rank 5 but UEFA licence rejected, Villarreal qualified despite rank 7. Atlético qualified as 2009-10 UEL champion despite rank 9.
- 129 nominees from 7 direct BDFutbol 2009-10 season lineups: Barcelona 18, Madrid 17, Valencia 21, Sevilla 18, Getafe 19, Villarreal 18, Atlético 18. 77 nominal starters + 52 backups (8 are 19+-start starter-equivalent players). All 129 tentative tiers and unique positional ranks, proposed 11-man 4-4-2 Best XI.
- Evaluation frame 2007-08, 2008-09, 2009-10 with latest most heavily considered, but **independent historical 3-season player form NOT independently verified for all 129**. Older Football Archive draft data are provisional references, not independent corroboration.
- 129 ISO dates entered; primary FootballSquads historical squad for many, old draft data for others, targeted public profiles for 10 players; **independent two-source DOB checks incomplete** and Éric Abidal previous DRAFT ISO vs historic roster conflict unresolved.
- Predominant match-by-match position and league's empirically most common formation NOT checked; 4-4-2 Best XI is a tactical hypothesis only. Individual tiers, rankings, assignments and 11-man XI are **unapproved DRAFT**.
- New season JSON `data/laliga-2009-10.json`; audit `audit/LALIGA_2009_10_RATED_129_FULL_REPORT_2026-11-04.md`, `audit/LALIGA_2009_10_HISTORICAL_SOURCE_AUDIT_2026-11-04.md`. Scripts/Actions set up for automated structure plus Chromium, separate production Pages checks. Actual test result to be stated after CI.
- Older 20-club standings, club crests, all previous seasons, user interface and Git history preserved. **STOP after 2009-10; do not begin 2010-11 without user direction.**

## 2026-11-04 — La Liga 2008-09 new 129-person source-led DRAFT (not independently historical complete)

- Scoped to 2008-09 only, after direct user authorization. Seven actual 2009-10 UEFA entrants checked by UEFA: Barcelona, Real Madrid, Sevilla, Atlético (UCL); Villarreal, Valencia, Athletic (UEL; Copa losing finalist). Deportivo seventh excluded.
- New BDFutbol 2008-09 league lineup and substitute data organized into 129 **provisional** player records, 77 nominal tactical starters and 52 substitutes, full DRAFT tiers and within-position ranks, proposed 4-4-2 XI, team-by-team source links.
- 129 DOB ISO dates now populated: 41 newly sourced, 88 from preceding DRAFT. Of 129, 16 Barcelona two independent sources agree; 3 others two-public-source match; 3 official/squad source conflicts documented; 35 one source, 72 previous DRAFT only; 107 lack two-source confirmation. Predominant on-field positions, recency-weighted independent earlier two-season personal play quality and most common league formation NOT validated.
- Draft branch `draft/laliga-2008-09-source-led-20261104`; files: `data/laliga-2008-09.json`, `audit/LALIGA_2008_09_SOURCE_DRAFT_2026-11-04.md`, corresponding test scripts / PR CI.
- Player selection, grades, XI remain not user-approved. Branch CI proves JSON/DOM conditions only when green; does not verify historical facts, and PR branch is not GitHub Pages production.
- Stop after 2008-09; do not start 2009-10 without explicit permission.

## 2026-11-03 production GitHub Pages verification (La Liga 2007-08)

- The 154-player unapproved DRAFT season merged to `main` via PR #38 (squash commit `ce4b3908fc3b512be562a44b6312a959a5a8440d`).
- Actual public site https://wjdduddlf112.github.io/footballarch/ returned 2007-08 JSON HTTP 200 with 154 players; Chromium verified Overview, Best XI, Top Class, League Table, Statistics and actual Iker Casillas player modal showing name, DOB, original club and provisional draft grade. GitHub Actions: https://github.com/wjdduddlf112/footballarch/actions/runs/41662794976 — PASS.
- Historical audit status STILL incomplete: all-player 2005-06/2006-07 independent source history and DOB double-source checks; match-by-match most frequent position and most common league formation. This publication is explicitly DRAFT, not user approved / fact-verified final.

## 2026-11-03 — La Liga 2007-08 source-led 154-person DRAFT (single-season research; no following season)

- Next-year European participation: exactly eight verified 2008-09 entrants: Madrid, Villarreal, Barcelona, Atlético (UCL); Sevilla, Racing, Valencia (UEFA Cup, Valencia Copa title); Deportivo (actual Intertoto Cup participant, progressed UEFA Cup).
- Candidates newly nominated against eight 2007-08 BDFutbol club lineups and substitutes. Current-season P/start/goal fields entered for **154 candidates**: 8×11=88 tactical starting-slot nominees and 66 rotation/bench. Position caps checked; position IDs unique; DOB populated with ISO strings (not independently validated).
- Corrected previously false/weak prior chat list: Racing loan Pablo Álvarez not Deportivo backup; Deportivo GK Fabricio Agosto replaces Munúa; Valencia Arizmendi instead of Angulo; Deportivo Joan Verdú CAM nominee for 4-2-3-1 selection proxy; Agüero 19 in Atlético's official historical record (FBref/Statbunker show 20; discrepancy logged), Kanouté 15 not 16.
- **All 154 players DRAFT tiers and unique within-position rankings**, proposed 11-person 4-4-2 Best XI. 15/15 connector-side structural checks PASS. Full raw data `data/laliga-2007-08.json`, table `audit/LALIGA_2007_08_RATED_154_FULL_REPORT_2026-11-03.md`, machine audit `audit/LALIGA_2007_08_STRUCTURAL_AUDIT_2026-11-03.json`.
- Prior 2005-06 / 2006-07 archive comparison available for only some candidates; **NOT** full independent 3-season performance quality verification. Not all DOBs second-source-confirmed; not all actual predominant on-field positions verified (Atlético fullbacks corrected with contemporary evidence); not all exact source rows independently repeated; season-wide modal formation census missing.
- Node CLI `verify-laliga-2007-08-draft.mjs` and `verify-laliga.mjs`, plus Chromium Playwright local HTTP preview of the five tabs: **PASS** (GitHub Actions run 41660611709). Direct third-party historical stats source scraping in runner is HTTP 403, so complete independent 3-season form verification remains pending. **Live GitHub Pages production deploy NOT tested**, all results DRAFT and not user-finalized. Other seasons, original standings, crests and site code untouched.
- STOP after 2007-08; user explicitly authorized finishing this season in one command, no user step approvals inside this season.

# Football Archive — Player integration checkpoint

## 2026-11-03 — La Liga 2006-07 143-player DRAFT (user authorized next season, including pages publishing)

- **Qualifiers:** 8 actual 2007-08 UEFA entrants — Real Madrid, Barcelona, Sevilla, Valencia UCL; Villarreal, Zaragoza, Getafe UEFA Cup (Getafe Copa del Rey losing finalist despite 9th); Atlético 2007 Intertoto actual participant.
- Fresh BDFutbol 2006-07 starter + substitute club-year nomination **143 records**, 8×11=**88 nominal starters**, 55 backups, no more than one backup per position per team, constrained position caps. Current-season league starts/appearances/goals (GK goal field records negative conceded). KO/original names, original club names, positions, provisional birthdates, tiers and consecutive ranks for all 143.
- Recency weighting 2006-07 > 2005-06 > 2004-05. S1, A+14, A10, A-28, B+43, B32, B-12, C+3; **World Class 15**, **League Top Class 53**. Best XI **4-4-2**, eleven position-valid IDs and `bestXiReview.status=proposed_unapproved`; 4-4-2 is historical tactical hypothesis, not proven 2006-07 league modal count.
- 143/143 DOB values ISO entered but not all 143 independently double-source verified. Edu (Valencia) / Edú (Betis) and Atlético / Sevilla Antonio López identity collisions explicitly separated. 2005-07 incomplete personal form and played-position-frequency audit explicitly noted.
- Machine-readable integrity: `audit/LALIGA_2006_07_STRUCTURAL_AUDIT_2026-11-03.json` **30/30 connector-side checks PASS**; full 143-member browser-readable Markdown table by club and position `audit/LALIGA_2006_07_RATED_143_FULL_REPORT_2026-11-03.md`.
- Preserve all 20 standings, all 42 original club/crest records and all earlier seasons. Only one new season JSON plus this append and two audit files changed before Pages deployment.
- **Incomplete:** all three years' individual original source form checks, predominant role by match, all DOB independent source pairs, most common actual 38-round formation, Node CLI and GitHub Pages actual browser. Approval: DRAFT only, not final.
- **Stop at 2006-07.** Publish current season as DRAFT via main only by current user request; do not begin 2007-08.

## 2026-11-03 — La Liga 2003-04 re-reviewed 138-person DRAFT (one season only)
- Authorized next season after La Liga 2002-03 (2002-03 main JSON has 135 provisional tiers, positional ranks and 11-player XI; separate remaining DOB/source/position audits persist). Current scope is **only 2003-04**; do not proceed to 2004-05 without user permission.
- Eligible by actual **2004-05** UEFA entries: **9 clubs**: Valencia, FC Barcelona, Deportivo, Real Madrid (UCL); Athletic, Sevilla, Zaragoza (UEFA Cup, Zaragoza via Copa del Rey); Atlético, Villarreal (2004 Intertoto). Qualification records verified in the season file.
- Existing 2026-11-01 PR #12's source-led DRAFT used as a provisional research scaffold; branch diverged by 64 commits from current main and was not blindly merged. Rebased season-only data onto fresh main branch `draft/laliga-2003-04-reviewed-20261103`; main's clubs, 20-team standings and all other league/season data preserved. Original candidate research was not fully clean-slate independent and still requires verification.
- **138 players**, 9 teams × 11 proposed starters = **99**, backup **39**; **138/138 DRAFT tiers** and **138/138 consecutive unique within-position ranks**. Tiers: S 2 / A+ 12 / A 10 / A- 20 / B+ 43 / B 36 / B- 9 / C+ 5 / C 1; WC **14**, League Top **44**. 4-2-3-1 Best XI **11** with valid position-matching refs, unapproved.
- Completed DOB entry of **80 formerly blank records** from contemporary 2003-04 FootballSquads rosters, with federation/club/biography correction for Marchena, César Martín, Júlio Baptista and Guayre, and verified Zaragoza Dani's distinct identity. **138/138 have DOB**, but previously populated 58 dates not all independently reverified.
- Connector-side **14 structural gates PASS** (JSON, 9 clubs, IDs, names/DOB, current starts, allowed tiers, 11 starters per club, positional caps, contiguous rank per position, Best XI integrity, archive standings, draft status). This is **not** evidence of Node CLI or live website visual testing.
- Full readable 138-player team and position report: `audit/LALIGA_2003_04_RATED_138_FULL_REPORT_2026-11-03.md`. Structural JSON: `audit/LALIGA_2003_04_STRUCTURAL_AUDIT_2026-11-03.json`. DRAFT data: `data/laliga-2003-04.json`.
- **Open**: match-by-match majority playing position / tactics (126 draft concerns), independent three-season personal form quality checks, independent clean-slate candidate nomination cross-check, 58 older DOB source audits, league-wide modal formation census, Node CLI tests, GitHub Pages browser UI checks, user final approval. Do not say all historical evaluation is fully verified.
- Data status remains `draft`; player tiers/ranks and Best XI proposed, not formally user-approved. **STOP after 2003-04**.

## 2026-11-03 — La Liga 2004-05 one-season DRAFT (182 candidates, 10 eligible clubs)

- Authorized by user's explicit "다음 시즌" after 2003-04. **2004-05 only**, evaluation windows 2002-03, 2003-04 and 2004-05 with most weight to 2004-05; 2005-06 must not be started without new authorization.
- Evaluated clubs are the actual **2005-06 European participants**, not just the top league sides: UCL 4 (Barcelona, Real Madrid, Villarreal, Real Betis); UEFA Cup 3 (Espanyol, Sevilla, Copa del Rey runner-up Osasuna despite 15th league place); 2005 Intertoto actual participants 3 (Valencia, Deportivo, Athletic Club, including Athletic's replacement berth and CFR Cluj appearances).
- **Fresh 2004-05 BDFutbol lineup-based roster research**: **182 candidates** in 10 clubs, **110 proposed starters** (11 per team) plus **72 backups**. Under one-position-per-player and team position caps (GK 2, CB 3, fullbacks 2 per side, DM 2, CM max3, CAM 2, each wing 2, ST max3). Eligible club-specific contemporary squad/starts and goals sources attached, prior archive candidates not automatically reused.
- **182/182** current league starting counts, KO/original names, original club, provisional tier, position rank and ISO DOB entry. **Birth dates entered but full independent corroboration remains incomplete**, with conflicting third-party records explicitly logged (Marchena, Guayre, Pochettino, Fernando Fernández, Larsson).
- Provisional tiers: S 1, A+ 12, A 7, A- 27, B+ 49, B 45, B- 25, C+ 12, C 4. World Class **13**, League Top Class **47**. Best XI **4-2-3-1, 11 player IDs**; `meta.bestXiReview.status=proposed_unapproved` for existing site's DRAFT semantics. Qualitative tier ranks and XI **not** user approved.
- Full readable report `audit/LALIGA_2004_05_RATED_182_FULL_REPORT_2026-11-03.md`; machine audit `audit/LALIGA_2004_05_STRUCTURAL_AUDIT_2026-11-03.json`. **20 connector-side structural checks PASS**, including current archive parity of standings and crest club objects, actual next-season qualifiers, IDs/caps/slots/DOB format/XI rank integrity. **Not** an independent 3-year personal form audit and **not** Node CLI or browser testing.
- **Open**: individual 2002-03 and 2003-04 qualitative performance source verification; match-by-match predominant outfield position (especially Sergio Ramos CB/RB, Sorín LW/LB, Baptista CAM/ST); seasonal league-wide formation mode; DOB second-source verification; independent complete player participation/source spotchecks; Node CI checks; GitHub Pages actual browser display and deployment. These cannot be marked complete.
- Existing `main` design, crests, unified 20-club archive, approved/reviewed earlier seasons untouched. All writes on isolated `draft/laliga-2004-05-evaluation-20261103` branch and review PR, pending approval. **STOP after this season.**

## 2026-11-03 — La Liga 2005-06 full 148-player provisional DRAFT (one-season only)

- Authorized by user "ㅇㅋ 다음" following La Liga 2004-05. Reassessed **only 2005-06** with relative weight 2005-06 > 2004-05 > 2003-04. Do not begin 2006-07 without an additional instruction.
- Actual **2006-07 UEFA participants: 8 clubs**, UCL Barcelona, Real Madrid, Valencia, Osasuna (Osasuna also subsequent UEFA Cup); UEFA Cup Sevilla, Celta, Espanyol (Copa del Rey title despite league 15th); Intertoto Villarreal (UEFA official Maribor July 15/22 2006 match reports).
- Fresh 2005-06 BDFutbol squad-year league lineup and bench research; historical prior candidate arrays not used to define nominations. **148** eligible player records (**88 starters: 11 × 8, 60 backups**) under GK/CB/side/CM/ST position caps. Registered actual 2005-06 league starts/appearances/goal counts, role and claimed main played position (individual match-level role frequency remains pending). Null/zero league starters were excluded; low-starter actual backups documented.
- **148/148 provisional tiers and unique local position ranks**, 148/148 KO names, original names, DOB values and club originals, club-year current season URL evidence. **DOB is entered, not 148 fully double-source-verified dates.** Matías Lequi 1981-05-13 from BDFutbol Celta squad conflicts with an earlier unapproved 2003-04 draft 1981-03-15; conflict documented, earlier season not silently changed.
- Tier totals **S2 / A+9 / A6 / A-25 / B+51 / B28 / B-17 / C+6 / C4**. World Class **11**, League Top **42**. Formation hypothesis **4-2-3-1** and 11-position correct Best XI `proposed_unapproved`. No team title/standing bonuses.
- **24/24 connector-side JSON + published-archive parity tests PASS**: eight actual entrants, 20-club standings and club crest object preserved, unique players, 11 starters each, caps, tiers, no missing position ranks, XI IDs/slots, draft status. **Node CLI and browser rendering unexecuted**.
- Files: `data/laliga-2005-06.json`, full tables `audit/LALIGA_2005_06_RATED_148_FULL_REPORT_2026-11-03.md`, JSON structural audit `audit/LALIGA_2005_06_STRUCTURAL_AUDIT_2026-11-03.json`. All changes isolated to `draft/laliga-2005-06-evaluation-20261103` and draft PR; existing main and old reviewed season datasets/crests/HTML/JS/CSS untouched.
- Still open: previous **2003-04/2004-05 individual qualitative form/position-frequency** verification, full DOB source checks, 38-round leaguewide mode of formation, independent stats double-check, CLI, actual GitHub Pages display, user approval. **STOP after 2005-06**.

## 2026-11-03 — La Liga 2001-02 complete 158-player qualitative DRAFT assessment (one season, no next-season advance)

- Eligible clubs **9** (2002-03 actual entry): Valencia, Deportivo, Real Madrid, Barcelona (UCL); Celta, Betis, Alavés (UEFA Cup); Málaga, Villarreal (2002 Intertoto). UEFA historical record specifically confirms both Intertoto appearances and Málaga's UEFA Cup progression.
- Previously existing 162-person incomplete source draft re-audited against historical club-season BDFutbol starts; **158** selected after removing Celades, Motta, Calado and Sandro under the 1-backup-per-position constraint. All 9 clubs have **11 proposed starters**, total 99 starters/59 backups. Club 4-4-2 or 4-2-3-1 formations recorded as evidence-informed hypotheses, not all-season modal proven.
- **158/158 provisional tier assignments and unique within-position ranks**. 158/158 DOB, Korean+original names, 2001-02 league starts. 58 previously blank DOB filled with BDFutbol, official club bios, secondary sources. Eight null starts corrected from BDFutbol. Some second-source DOB checks still open.
- Grades: S2 / A+11 / A18 / A-15 / B+46 / B38 / B-16 / C+11 / C1. WC **13**, league top S–A- **46**.
- Best XI 4-4-2 **11 valid refs**: Prats; Ayala, Hierro, Roberto Carlos, Salgado; Makélélé, Zidane, Rivaldo, Figo; Tristán, Kluivert. User review pending.
- Dataset: `data/laliga-2001-02.json`; full readable report: `audit/LALIGA_2001_02_RATED_158_FULL_REPORT_2026-11-03.md`; verification: `audit/LALIGA_2001_02_STRUCTURAL_AUDIT_2026-11-03.json` (connector-side **PASS, zero errors**). Preserved active main standings, club profiles/crests and qualifying-club IDs and competitions. Only qualifier verification/sources revised.
- **Critical honesty:** 2001-02 qualitative tiers and ranks are **complete as DRAFT**, but older 1999-00/2000-01 individual quality evidence and played-position frequencies are only partially corroborated. No numerical composite score invented. Node CLI scripts and live browser rendering not yet executed. User final approval **not** claimed. Do not move to 2002-03 before user asks.


## 2026-11-03 — La Liga 2000-01 DRAFT assessment complete (user requested next season)

- Source participation verified: **7 Spanish clubs actually participated in 2001-02 UCL/UEFA Cup; no 2001 Spanish Intertoto entrants**. Supported by Liga 2000-01 official annual report, RSSSF and 2001-02 UEFA records.
- Evaluated **129** role-capped player candidates: **77 starting / 52 backups** in 7 teams. **129/129** have tier, exact within-position rank, original/Korean names, dates of birth, current-season starts and season-specific qualitative assessment note. DRAFT S=4, A+=9, A=14, A-=18, B+=35, B=24, B-=18, C+=7. World Class 13; League Top Class 45. Best XI 4-2-3-1 has 11 valid IDs, pending user approval.
- Versus preexisting 132 candidate draft: added Pedro Munitis (1998-99 and 1999-00 Racing regular; 2000-01 Madrid 9 league starts); removed over-cap/low-role Solari, Gerard, Zahovič and Marcos Vales. Corrected playing roles: CAM Guti/Valerón/Mostovoi, Zaragoza ST Jamelli and RW Montenegro; Valencia Juan Sánchez restored as second starter striker; Barcelona Xavi to CM backup. Details in season JSON metadata.
- Updated `data/laliga-2000-01.json` on review branch with assessed 129, rank 129, Best XI 11. Protected `clubs`, `qualifiers`, `standings`, crests and all other seasons. Field-level connector-side verifier PASS 0 errors, validated against active shared La Liga archive. See `audit/LALIGA_2000_01_STRUCTURAL_AUDIT_2026-11-03.json`.
- Full 129-person readable table + positional ranking + grade rationales: `audit/LALIGA_2000_01_RATED_129_FULL_REPORT_2026-11-03.md`.
- **Important:** Grading and ranking are completed as a *qualitative DRAFT*, not individually complete source-audited 1998-99 + 1999-00 data for all 129. Some 2000-01 primary-position minutes are working interpretations. Node CLI tests and live-site browser checks not executed, final user approval pending. Do not move to 2001-02 season before separate user instruction.


## 2026-11-03 La Liga 1999-00 — 167/167 DRAFT tier/rank and Best XI assessment completed (supersedes 2026-11-02 unrated checkpoint)

**Assessment dataset:** `data/laliga-1999-00.json` in PR #30 review branch, rated data `audit/laliga-1999-00-rated-167-draft-2026-11-03.json`, complete 167-player browser-readable assessment and rank report `audit/LALIGA_1999_00_RATED_167_FULL_REPORT_2026-11-03.md`.

- 2000-01 eligible European entrants: 10 verified. Re-selected and assigned 167 candidate records (110 starting hypotheses, 57 backup hypotheses); all 167 have `nameKo`, `nameOriginal`, DOB, club, 1999-00 start count, single position, `tier`, and unique within-position `rank`.
- Tier totals: **S 5; A+ 11; A 10; A- 25; B+ 59; B 33; B- 12; C+ 8; C 3; C- 1; D 0**. World Class 16 and League Top Class 51. Best XI has 11 valid candidates, representative 4-2-3-1, `proposed_unapproved`.
- Corrected historical identities: César Láinez (not Iñaki), Nelson Vivas (not Martín), Daniel Fagiani (not Fabio), Manuel Serrano Pulido, Mario Turdó, Yordi, 1999-00 Espanyol Juan Luis Mora (12 starts), Mallorca Ariel Ibagaza (19 starts), and other positions/roles. 167 DOB filled (some source inconsistencies, such as Juan Sánchez, noted in player sources). Stable previous player IDs retained where matched.
- Protection: all 20 historical standings, all ten qualifiers, all 20 club profiles and crest details unchanged. Other league/season JSON untouched. One-season structural validator directly implemented against active shared La Liga archive: **PASS, 0 errors**. Machine-readable report: `audit/laliga-1999-00-structural-check-2026-11-03.json`.
- **Important limitation**: This is a **completed qualitative DRAFT rating**, not a fully independent three-season individual audit. Most of the 167 prior two-season per-player evidence links are incomplete, and full played-position match frequency is not independently resolved. Tier statuses are provisional and user approval remains pending. Browser-only UI and CLI Node validation have **not** been executed. DRAFT is not APPROVED.
- No La Liga 2000-01 season has been newly reassessed by this run.


## 2026-11-02 La Liga 1999-00 independent re-selection audit (new DRAFT branch)

Branch `audit/laliga-1999-00-fresh-source-pool-20261102`: independently sourced 200-person BDFutbol pool across all 10 verified European-qualified clubs; narrowed to 167 tentative candidates (110 proposed starters/57 backups) under position caps. 151 DOB filled (some copied only as secondary identity cache), 16 missing; 9 date checks and a previously conflicting Valencia DOB identified. 143 prior player IDs matched only **after** fresh source selection; 24 proposed additions, 5 proposed omissions, 13 tentative position differences. **All new tiers and ranks remain null**, because full independent three-season evidence is not complete. No existing player ratings or site JSON were altered, no CLI/browser gate passed. Read `audit/LALIGA_1999_00_INDEPENDENT_REBUILD_2026-11-02.md`. Season unfinished; do not proceed to next season or imply evaluation complete.


Date: 2026-11-01  
Repository: `wjdduddlf112/footballarch`, branch `main`  
Deployment target: https://wjdduddlf112.github.io/footballarch/  
Status: **24 tracked season datasets; 1682/3222 provisional player tier proposals; 1540 unrated. PL 1999-00 128/128, PL 2000-01 141/141, PL 2001-02 163/163, PL 2002-03 132/132 and PL 2003-04 105/105 and PL 2004-05 150/150 and PL 2005-06 142/142 and PL 2006-07 149/149 and PL 2007-08 170/170 and PL 2008-09 122/122 DRAFT tier/rank entries.**

## Scope and method

- Selectively imported only candidate `players` and their retained source/review details from five historical branches. Did **not** merge branches wholesale or replace modern main league tables, emblems, UI design, title/champion labels, or archived European participants.
- Where a standalone season file was absent, created it with **active main standings archive** values, league club IDs and European entrant mappings. For existing files, preserved main's `clubs`, `qualifiers`, `standings` and `bestXi`.
- Preserved La Liga 1999-00 (148) and 2000-01 (132) provisional tier + positional rank selections. The old La Liga 2000-01 branch contained 120 candidates and was intentionally not used over main.
- All imported players are pending approval; unset tier/rank remains `null`. Do not interpret an imported candidate as an individually verified starter or official positional classification.
- 2022-23 La Liga demonstration roster is outside this evaluation scope.

## Season checkpoint

| League | Season | Candidates | Tiers | Positional ranks | Missing DOB | Missing league starts | Best XI | Render checked |
|---|---|---:|---:|---:|---:|---:|---:|---|
| La Liga | 1999-00 | 148 | 148 | 148 | 0 | 1 | 11 proposed | No |
| La Liga | 2000-01 | 132 | 132 | 132 | 0 | 0 | 11 proposed | No |
| La Liga | 2001-02 | 135 | 0 | 0 | 82 | 0 | Not selected | No |
| La Liga | 2002-03 | 128 | 0 | 0 | 96 | 0 | Not selected | No |
| La Liga | 2003-04 | 138 | 0 | 0 | 106 | 0 | Not selected | No |
| Premier League | 1999-00 | 128 | 128 | 128 | 0 | 0 | 11 proposed (unapproved) | No |
| Premier League | 2000-01 | 141 | 141 | 141 | 0 | 0 | 11 proposed (unapproved) | No |
| Premier League | 2001-02 | 163 | 163 | 163 | 0 | 0 | 11 proposed (unapproved) | No |
| Premier League | 2002-03 | 132 | 132 | 132 | 0 | 0 | 11 proposed (unapproved) | No |
| Premier League | 2003-04 | 105 | 105 | 105 | 0 | 0 (entered; not independently checked) | 11 proposed (unapproved) | No |
| Premier League | 2004-05 | 150 | 150 | 150 | 0 | 0 (season-only data entered) | 11 proposed (unapproved) | No |
| Premier League | 2005-06 | 142 | 142 | 142 | 0 | 0 (entered; individual audit pending) | 11 proposed (unapproved) | User confirmed display (2026-11-01); independent browser audit pending |
| Premier League | 2006-07 | 149 | 149 | 149 | 0 | 82 (not yet sourced) | 11 proposed (unapproved) | Not independently verified |
| Premier League | 2007-08 | 170 | 170 | 170 | 0 | 0 (sourced PL starts/apps/goals, position audit pending) | 11 proposed (unapproved; CAM→CM tactical mapping) | Data structure checked; browser unverified |
| Premier League | 2008-09 | 122 | 122 | 122 | 0 | 0 (122/122 PL starts/apps/goals sourced) | 11 proposed (unapproved; Gerrard CAM→field CM) | Structural checked, browser unverified |
| Serie A | 1999-00 | 119 | 0 | 0 | 1 | 0 | Not selected | No |
| Serie A | 2000-01 | 109 | 0 | 0 | 7 | 0 | Not selected | No |
| Serie A | 2001-02 | 137 | 0 | 0 | 0 | 0 | Not selected | No |
| Bundesliga | 1999-00 | 118 | 0 | 0 | 50 | 108 | Not selected | No |
| Bundesliga | 2000-01 | 132 | 0 | 0 | 95 | 130 | Not selected | No |
| Bundesliga | 2001-02 | 138 | 0 | 0 | 85 | 99 | Not selected | No |
| Ligue 1 | 1999-00 | 111 | 0 | 0 | 3 | 19 | Not selected | No |
| Ligue 1 | 2000-01 | 141 | 0 | 0 | 15 | 20 | Not selected | No |
| Ligue 1 | 2001-02 | 134 | 0 | 0 | 11 | 6 | Not selected | No |
| **Total** | **24 seasons** | **3222** | **1682** | **1682** | **551** | **465** | **12 provisional** | **0/24 independently** |

Tier distribution for the 280 existing La Liga provisional grades: S=9; A+=17; A=24; A-=47. All other tier grades are carried from previously approved-as-draft work and are **not** upgraded to final.

## Verified participant corrections during integration

1. **Bundesliga 1999-00 → 2000 Intertoto:** restored **VfL Wolfsburg**, whose real 2000 Intertoto appearance is documented by the Deutsche Fußball Liga in *Bundesliga Report 2008*, Intertoto participation table. `data/bundesliga-standings-verified-1999-2026.json` now includes Wolfsburg as the ninth qualified club; table points/ranks were not changed. Source: https://media.dfl.de/sites/2/2018/11/BL_Report_2008.pdf . Commit `443f0570bad40a6c7b96d9c3e6cb9305346de974`.
2. **Premier League 2001-02 → 2002-03 UEFA Cup:** restored **Ipswich Town**, relegated but entered via UEFA Fair Play draw. UEFA published confirmation on 28 May 2002. `data/premierleague-europe-qualification-1999-2026.json` and `data/premierleague-2001-02.json` synchronized to ten clubs; numerical table unchanged. Source: https://www.uefa.com/uefaeuropaleague/news/0185-0e6a457d7fe2-6cc5f81db13d-1000--uefa-cup-bonus-for-ipswich-and-sigma/ . Commits `0317bbb2c5643b6131bb91e08aa53780fdf3680d` and `2bf14c70463444b618ce927af5e5b2d83d9b6fda`.
3. The 1999-00 PL candidates still contain 4 ST positions exceeding the two-per-club cap: Manchester United (4), Arsenal (3), Aston Villa (3), Bradford City (4). Do not silently remove historically meaningful starters; manually resolve against season lineup starts. Further issues exist in 2000-01 and 2001-02 PL and 1999-2002 Bundesliga.

## Validation gates — independent status

| Gate | Status | Meaning |
|---|---|---|
| GitHub file read / valid JSON | **PASS 17/17** | All 17 season JSONs fetched from `main` and parsed after update |
| Candidate count | **PASS 2245** | Exact previously recorded roster total retained |
| Player ID uniqueness | **PASS 17/17** | No duplicate within season |
| Eligible-club membership | **PASS 17/17** | No candidate club outside the season's active qualifier set |
| Position enum / birth date format / tier values | **PASS** | No structural errors found in examined records |
| Positional rank collision / Best XI player references | **PASS** | Two pre-existing La Liga proposals are internally linked; 15 seasons have no rank/XI yet |
| Starter/backup position slot caps | **OPEN** | 17 over-limit club-position groups (mainly ST) |
| DOB coverage | **OPEN** | 948 blank |
| League starts coverage | **OPEN** | 573 blank (`starts` or `leagueStarts`) |
| Individual current season / historical 3-season evidence | **OPEN** | 1999-00 La Liga had 21/148 explicitly corroborated in its previous audit; full denominator evidence cannot currently be claimed |
| Historical Europe actual-entry review | **OPEN** | Some existing `europeanQualificationVerified:false` remain; correction of two specific omissions does not sign off all seasons |
| Node CLI validator run | **NOT RUN** | Added `scripts/verify-player-integration.mjs`; connector-side validation executed separately |
| GitHub Pages browser UI and crest rendering | **NOT VERIFIED** | JSON available on main is not evidence that five page tabs render correctly |

## Commit/checkpoint details

- PL candidate import: `d7e4bf9205544fee18a3187ba798cbe93a732bc6`, `48a759f3c36f76210449f663a9c8ee1b76da7896`, `ffdb93590d52531c76b24e097b74c049a7421e9a`.
- La Liga new files: `a1f757174f32e4a046f4e9eb31b7831d20810969`, `c89df8ea94c67542f80bf39f5cee822b460ac8d5`, `cd428f2ded205df9acc861594603125956649a1b`.
- Serie A new files: `0d1c629ce985f7159487b2cfa921f01f1c14d986`, `a69d96cdef6bea3414a326d5d475500780a2b015`, `c3d3da3d95018dda6d4913ec0262cb1518387fad`.
- Bundesliga new files: `06f36d8814aec37e0ae745eb87ad2bcaeea4aa72`, `55a2ad9dac2baf791d679aba62e85756e0531fdb`, `7c4dfbc9241552ba85b9e1007737b92712dbefe9`.
- Ligue 1 import: `aa4fa288a106ecb7c63b707aec23bccaf8d8d410`, `efc7f8d2d78dedb88c0b9b4971cb9232f3d0ebb4`, `8cf61ad0fc5e3d8327e3835fe9aab699886487b6`.
- Validator creation: `f9b0a20c4873128f7e63d0a1176c7608a48db99b`.
- Machine-readable snapshot: `audit/player-integration-audit-2026-10-30.json` (`c9c7fe3d8b80552d3979eaed274533eb22ebaa09`).

## Resume instructions

1. Fetch `main` fresh and run `node scripts/verify-player-integration.mjs`, plus all prior standings validators. Keep these CLI tests distinguished from the already completed connector-side subset.
2. Work **Premier League 1999-00 first**: resolve four over-cap ST groups, confirm club-season role and season primary position, populate DOB / starts with sources. Reevaluate one club/position at a time; do not invent exact player statistics.
3. Evaluate each candidate with 1997-98, 1998-99, 1999-00 (then sliding three-season windows). Source, individual performance narrative, explicit tier rationale and within-position ordering. Do not assign arbitrary tiers.
4. Record team-by-team verification and user feedback without resetting La Liga's existing 280 preliminary tier records.
5. Add Best XI only after position ranking and formation research. Keep `proposed_unapproved`.
6. Independently confirm remaining UEFA entrants and browser-test Overview, Best XI, Top Class, League Table, Statistics. Do not mark visual validation complete until actually inspected.


## First individual tier assessment — Premier League 1999-00, Manchester United (2026-10-30)

The initial integration was **not the end of tier grading**. Actual 3-season comparison and grading has now started. 17 Manchester United candidates have independent period-squad birth dates filled and 3 missing 1999-00 league starts/appearances have been recovered. 15 players now have **proposed, user-unapproved tiers** with individual Korean rationale and historical source links; Solskjær and Sheringham remain eligible-audit records with null tiers because 4 ST candidates exceed the requested two-player club quota. Yorke (29 starts, 20 league goals) and Cole (23 starts, 19 goals) currently hold the two graded ST slots; extras are retained for reconciliation, not silently dropped.

| Grade | Manchester United first pass |
|---|---|
| S | Roy Keane, Jaap Stam |
| A+ | David Beckham, Ryan Giggs, Dwight Yorke, Andrew Cole |
| A | Paul Scholes |
| A- | Denis Irwin, Gary Neville |
| B+ | Mikaël Silvestre, Phil Neville, Nicky Butt |
| B | Mark Bosnich, Henning Berg |
| C+ | Raimond van der Gouw |
| Not graded (over-cap ST) | Ole Gunnar Solskjær, Teddy Sheringham |

The ratings are explicitly qualitative and provisional. Independent full 1997-98 league figures for Jaap Stam (PSV) and Mikaël Silvestre (non-Manchester seasons) remain incomplete. Position majority of Phil Neville and several outfield defenders must be audited before final role confirmation. No rank has yet been assigned: PL ranks require all eight qualified teams for each position. Team achievements were not used as direct grade bonuses.

Sources: https://footballsquads.co.uk/eng/1999-2000/faprem/manutd.htm ; https://www.rsssf.org/players/manutd-postwarchamps.html ; https://www.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=8 ; https://www.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=7 ; https://www.statbunker.com/competitions/SeasonAppearances?club_id=3&comp_id=3 ; https://fbref.com/en/awards/pfa_poy/PFA-Players-Player-of-the-Year .

Candidate grading commit: `2b67fd45f79f3300a16aea88627dfb5fb0180956`. Full machine-readable current totals: `audit/player-integration-audit-2026-10-30.json`.

### Updated totals after first club evaluation

- Candidate registrations: **2,245**, unchanged.
- Provisional tiers: **295** (former La Liga 280, new PL 15).
- Missing tiers: **1,950**.
- New top-class additions: S 2, A+ 4, A 1, A- 2. Overall counts: S 11, A+ 21, A 25, A- 49.
- Missing DOB: **948**; missing recorded starts: **573**.
- Completed league-wide ranks unchanged at 280 provisional La Liga ranks, 0 new PL ranks.
- Browser verification still outstanding and no existing UI files modified.

---

## Independent player rebuild checkpoint — Premier League 1999-00, 2026-10-30

This appended record is on branch `draft/pl-1999-00-fresh-verification-20261030` only. The earlier 130 imported Premier League 1999-00 candidates and their 15 old tentative ratings on `main` are retained for forensic comparison; **they are not the source of the new independent nominations**.

### New research artifacts

| Artifact | Count | Verification | Evaluation |
|---|---:|---|---|
| `audit/player-research/premierleague-1999-00-gk-fresh-draft.json` | 15 GK | 15/15 season appearances, starts and DOB checked against individual season sources | 15 provisional tiers/ranks; prior two years incomplete |
| `audit/player-research/premierleague-1999-00-cb-fresh-shortlist.json` | 20 CB | 18/20 league starts checked; season-majority positions still open | 20 tier/rank null |
| `audit/player-research/premierleague-1999-00-outfield-research-pool.json` | 90 provisional nomination seeds (LB/RB/DM/CM/CAM/LW/RW/ST) | Season-wide majority-position and league-start validation **not finished** | 90 tier/rank null |
| `audit/player-research/premierleague-1999-00-three-season-tier-proposals.json` | 5 graded stars drawn from those 90 | 1997-98, 1998-99, 1999-00 PL starts individually checked; 1999-00 contemporary PFA/FWA recognition | Roy Keane S, Patrick Vieira A+, David Beckham A+, Harry Kewell A+, Andy Cole A; all DRAFT |

**Research scope: 125 distinct player nomination seeds (15 GK + 20 CB + 90 other), not 125 individually approved season candidates.** There are five additional three-season tier proposals linked to the 90 seeds; do not double count. GK scores remain partial three-season assessments. Team counts: Manchester United 17; Arsenal 17; Leeds 16; Liverpool 16; Chelsea 15; Leicester 13; Aston Villa 15; Bradford 16.

### Verification executed in connected Github session

- **PASS local in-memory source-file structural check**: all four branch research files read and parsed after writing, 125 distinct club/name keys, 125 correctly formatted/real calendar DOB values, no duplicate GK rank, exactly 8 GK starters and 7 GK backups, no club-position exceeding the archival cap (CB <=3, ST <=3, rest <=2 except CM <=3).
- **PASS link integrity** of the five three-season tier proposals: all five named candidates exist in the independently compiled outfield research pool.
- **OPEN**: At least 92 outfield seed candidates (90 non-CB, 2 CB) lack independently verified 1999-00 league starts; all 110 outfield seeds require season-majority positional verification and individualized three-season performance review (five have preliminary starts/grades, not full positional audit).
- **OPEN**: Three-season histories for all 15 GKs; all 125 candidates final individual reviews; cross-club rankings except provisional GK; Best XI; world-class/top-class complete classification.
- **NOT RUN**: existing Node CLI validator. **NOT VERIFIED**: live GitHub Pages tabs, crests and player detail cards. **NOT DEPLOYED**: main site unchanged.
- **IMPORTANT** 3-5-2 Aston Villa and Leicester have three actual centre-back tactical starters; 2+1 archive nomination categories are an artificial storage constraint and must not imply the third back was always benched.
- Historical mismatch (legacy `main` GK removal): independent 1999-00 seasonal league sources show Liverpool Brad Friedel 2 starts, Chelsea Carlo Cudicini 1 start, Aston Villa Peter Enckelman 9 starts.
- **Do not mark season finished, do not merge this branch as final, and do not advance to Premier League 2000-01 without instruction.**

Existing standings, European participant records, historic C marker/stripped-title marker and UI source files have NOT been altered in this branch.


## 2026-10-30: PL 1999-00 deployable DRAFT (newer record, supersedes old PL 130 candidates)

- New 8-club independent pool: **125 candidate seeds**, with **23 proposed tiers**, **13 provisional goalkeeper ranks**, **102 unrated**. Five PFA-supported additional defender/forward tiers plus five 3-season outfield proposals and 13 goalkeeper proposals. Sources and individual qualification notes embedded in player records.
- **Best XI now proposed**, not approved: 4-4-2; Nigel Martyn; Ian Harte, Jaap Stam, Sami Hyypiä, Gary Kelly; Harry Kewell, Patrick Vieira, Roy Keane, David Beckham; Andy Cole, Dwight Yorke. Ten 1999-00 PFA XI members from eligible eight teams; Sunderland forward Kevin Phillips ineligible for archive scope, Yorke selected using 1997-98 to 1999-00 goals/starts.
- Retains old final standings, eight UEFA/Intertoto entrants, crest URLs and champion rendering, and all other seasons. Old 130 candidates archived in Git history only; no pre-existing player candidate imported into new selection source.
- **Evidence pending**: 102 zero-grade candidates; 86 incomplete individual league starts; all outfield season-majority positions; many preceding two seasons; non-GK position ranking; GK preceding two seasons. These are published as DRAFT research, **not signed-off ratings**.
- Made browser presentation minimal improvements: Korean + original name, starting status, league starts, rank, player detail evidence, and separate World Class / League Top Class counts. No redesign.
- Static JSON structural tests in connected session: **PASS** (125 unique club-player keys and IDs, 20 league rows unchanged, eight qualifiers unchanged, 11 valid Best XI refs, 13 nonconflicting goalkeeper ranks, no individual position cap errors, valid DOB formats, correct tier-review flags).
- App JS: V8 syntax parsing **PASS**. Reproducible CLI script created at `scripts/verify-pl-1999-00-draft.mjs` (CLI execution and real browser check remain separate gates).
- Publication: source-branch-to-main merge and Pages availability must be verified separately; do not confuse GitHub commit with live screen validation.


## La Liga 2002-03 restart — independent three-season review (2026-10-30)

This checkpoint **supersedes the old La Liga 2002-03 zero-grade row only**. The project moved by explicit user instruction from the previous PL 1999-00 priority to **La Liga 2002-03**; no other season's player data was changed by this continuation.

- Main branch read before modification; repository HEAD originally `abd9e6334d9ece6b7617f4598eb97eeb29aef4d9`.
- Actual 2003-04 next-season European entrants: **9** (Real Madrid, Real Sociedad, Deportivo, Celta, Valencia, Barcelona, Mallorca, Villarreal, Racing). The two Intertoto teams are Villarreal and Racing. The 20-row season league table and club crest data remain unmodified.
- Existing season file initially contained **128 historical imported candidate registrations** with **zero** tiers. They are not newly eligible or selected solely because they appear in the file. Nine 2002-03 BDFutbol season squad references have been independently researched, and 14 player profiles independently examined with 2000-01 / 2001-02 / 2002-03 appearances, starts and goals where available. These 14 have a provisional DRAFT tier and individualized 3-season reasoning. **114 old candidate registrations remain un-reselected and ungraded**.
- Nine reviewed club coverage; **14** players in draft classification; **0** evaluated players have positional league-wide rank. Existing **115/128** player positions require majority-position sign-off, so grades remain provisional.
- Birthday entries missing in season JSON: **90**. Ronaldo profile birth date conflict (18 vs 22 September 1976) documented in `candidateAudit`; do not silently erase either source.
- 14 provisional tiers by tier: S=1, A+=5, A=4, A-=2, B+=1, B=1; remaining 114 tiers null. Tier value null does NOT mean D.
- Best XI: **not selected** (0). Team formations: **not independently certified**. Node CLI tests: **not run through connector**. GitHub Pages interactive browser and image/render checks: **not performed**. User final approval: **not requested or received**.
- Individual evidence, 9 club season source URLs, field-level details and open gates: [`audit/LALIGA_2002_03_INDEPENDENT_REVIEW.md`](LALIGA_2002_03_INDEPENDENT_REVIEW.md).
- Write commits: `ff996a5957cdc4deee502035fec1c90027a0e00c`, `32704533ebffec93e69c3a64a687469bef503ba0`, `d941f07005e855e08fc96e45f639a525b5b5b050`, `975fb04c2f868403ee30fe56210641c1c169920f`, `826113824e8efe6b49650cd57a7ac4ffd25ab0d8`.

**Resume:** independently reselect and check 114 existing legacy records and other qualifying candidates from current-season sources, validate match-level primary positions and club formations, collect full three-season evidence, assign peer-compared tiers and position ranks, then propose Best XI. Do not auto-start La Liga 2003-04 without user direction. Keep DRAFT status.


## Premier League 1999-00 follow-up — independent full-position draft assessment, 2026-10-30

**This section supersedes earlier "PL 125/23/13" checkpoints; the earlier statements remain only as audit history.**

- Next season actual participant shortlist: 8 clubs; unchanged official archive league rankings, 2000-01 European participation/qualifiers, crests and site navigation.
- Corrected nominees: added Liverpool Robbie Fowler, Aston Villa Colin Calderwood and Alan Thompson, Chelsea Emerson Thome, Bradford Neil Redfearn; removed Bradford Stephen Wright (0 league appearances) and Aston Villa Lee Hendrie (nonselected due nominal CM cap, despite 18 real starts).
- Position corrections: Gareth Barry from CB to CM (30 starts, Villa; now main CM starter), Paul Merson from CAM to RW (season sample RM; full-majority confirmation pending), Stephen McPhail RW to LW (season LM) and Leeds David Hopkin right midfielder assigned RW. Ian Taylor reclassified Villa CM backup (25 starts).
- DOB correction: Wayne Jacobs official Premier League DOB 1969-02-03 (prior FootballSquads historic listing 1964-09-28 was conflicting).
- Per-player 1999-00 league starts **128/128 populated with sources**, including Steve Staunton 7 starts and Ian Marshall 2; Chelsea Tore André Flo corrected to **20** (instead of previously assumed 24) with historical 1997-98 to 1999-00 3-season Chelsea stats.
- Every nominee individually reviewed: **126 provisional tiers / 128 candidates (98.44%)**. All **126 graded** players have unique **league-wide same-position draft ranks**. Two low-sample GK entries, Carlo Cudicini (1 start) and Brad Friedel (2 starts), retain `tier:null` and `rank:null` for insufficient recent and preceding-year comparable performance evidence; these are NOT assessed D or C merely to achieve 100%.
- Grades: S=1, A+=6, A=5, A-=26, B+=40, B=23, B-=14, C+=9, C=2, C-=0, D=0. **World Class S/A+: 7**, **League Top Class S/A+/A/A-: 38**. No quota used.
- 4-4-2 Best XI remains 11 eligible-club players, `proposed_unapproved` with active valid IDs.
- **Important integrity limits**: source-level 1999-00 appearance evidence is extensive, but full **season-majority tactical role** verified by individual match positional records and detailed **1997-98/1998-99** match-by-match independent source audit remain incomplete for many of the 128 candidates. 126 qualitative grades are explicitly proposals under DRAFT, not 126 definitive evidence-complete grades. Position labels especially for wing-backs, wide midfielders, 3-back Leicester and dual-role players need review. Do not misreport 100% historical certainty.
- UI source layout/other seasons untouched. 1999-00 local structural checks expanded to rank continuity, grade-to-rank consistency, actual starts, 8 eligible clubs, 4-4-2 XI and full DOB integrity. Automatic actual GitHub Pages headless browser validation is a separate pending gate, not established by the presence of workflow source.
- **Stop at PL 1999-00**. User-directed progression covers PL 1999-00 through 2025-26 **one season per explicit continuation instruction**, not next year automatically.


### 2026-10-30 further GK research — latest, supersedes 126/128 earlier block

Fresh prior-season research established Liverpool Brad Friedel: 1997-98 11 league starts, 1998-99 12, 1999-00 2. Source: https://www.lfchistory.net/players/302 , https://fbref.com/en/players/b8c0a975/Brad-Friedel . Qualified for conservative **C+ DRAFT**, GK rank 13/15.

Chelsea Carlo Cudicini: 1997-98 Castel di Sangro Serie B 14 league appearances, 1998-99 Serie C1 32, 1999-00 Chelsea PL 1 start. Source: https://www.stamford-bridge.com/player/player.php?id=125 and historical career table https://en.wikipedia.org/wiki/Carlo_Cudicini . Conservatively **C DRAFT**, GK rank 15/15; prior league standards are not directly transferable to Premier League.

**Current season assessment: 128/128 individualized provisional grades and 128/128 positional ranks (100% tier input, not 100% complete historic proof).** S 1, A+ 6, A 5, A- 26, B+ 40, B 23, B- 13, C+ 11, C 3, C- 0, D 0. World Class 7; League Top Class 38.

Three-season evidence exists in summarized form for each tier rationale, but individual full 1997-98 and 1998-99 match evidence and primary season tactical majority are still partially unresolved; all evaluations remain **DRAFT / user-unapproved**. Browser/PAGE build are independent gates. There are 27 PL seasons 1999-00 to 2025-26; **only first season** assessed in this run. Stop before 2000-01 until user instructs.


## Premier League 2000-01 independent player DRAFT, 2026-10-30 — latest seasonal checkpoint

- User explicitly authorized continuation from completed PL 1999-00 to **PL 2000-01 only**, with real deployment; no 2001-02 player research started.
- Following-season actual 2001-02 European entrants (8): UCL **Manchester United, Arsenal, Liverpool**; UEFA Cup **Leeds United, Ipswich Town, Chelsea**; Intertoto **Aston Villa, Newcastle United**. Newcastle late slot followed Spanish withdrawal (UEFA historical announcement and 2001 Intertoto records). Existing eight `qualifiers` and all 20 league final rows were preserved byte-for-byte at JSON array semantic level.
- Reselected **141** 2000-01 candidates with contemporary 11v11 season squads, FootballSquads and season-specific league starts; did **not** copy 134 legacy ungraded candidates into new list. Fresh source file: `audit/player-research/premierleague-2000-01-reselected-initial.json`.
- Club candidates: Manchester United 19; Arsenal 17; Liverpool 16; Leeds 18; Ipswich 16; Chelsea 19; Aston Villa 16; Newcastle 20.
- All **141 players have DOB, Korean name, original name, real club, PL 2000-01 starts, individually written provisional tier rationale, positional rank, DRAFT review flag and source links**. Corrected Chris Makin DOB 1973-05-08 and Robert Pirès DOB 1973-10-29. Historical team formation snapshots used to ensure 11 nominal starters each club (not a claim about literal most-common match lineup).
- Tiers and ranks: **141/141 provisional tier inputs and 141/141 league-wide per-position ranks**, all unapproved. Distribution S=2; A+=11; A=4; A-=29; B+=49; B=27; B-=10; C+=8; C=1; C-/D=0. World Class S/A+ = 13; League Top Class S/A+/A/A-=46.
- Proposed 4-4-2 Best XI (all eligible): Fabien Barthez, Jaap Stam, Sami Hyypiä, Sylvinho, Markus Babbel, Roy Keane, Patrick Vieira, Ryan Giggs, David Beckham, Thierry Henry, Jimmy Floyd Hasselbaink. PFA lineup of 2000-01 used as support, with Liverpool Sami Hyypiä replacing Wes Brown by weighted 2000-01 35 plus 1999-00 38 league starts, and qualifying-club RB Markus Babbel replacing ineligible Tottenham Stephen Carr; 23-goal Golden Boot winner Hasselbaink selected in attack. `proposed_unapproved` retained.
- Caveat: **141 tier inputs do not equal complete three-season historical verification**. 1998-99 individual match-by-match records and season-majority tactical position remain **partially unverified** for many, and early-season split transfers/wingback positions require further qualitative recheck. All published grades are explicitly **DRAFT**. Source-level stat field makes unknown earlier starts null, not invented.
- Automated validator: `scripts/verify-pl-2000-01-draft.mjs`, checks 141 players/141 tiers/141 ranks, historical 8 clubs, 20 table rows, DOB, position caps, 11 nominal starters per club, tier→rank order, and valid 4-4-2 XI. Executed in JS tool runtime and **PASS**, no structural errors.
- New deployed-browser workflow: `.github/workflows/verify-pl-2000-01-live.yml` calls `scripts/verify-pl-2000-01-live.mjs`; checks Pages live JSON, five views including modal and candidate list, captures screenshots. **Not executed or browser-confirmed until GitHub Actions run status/result is observed.**
- User approval remains pending. Site CSS/design, champion C/title stripping marks, crests, existing standings and all other league-season files untouched.


### 2000-01 post-merge source correction (2026-10-30)

- Ipswich Town Martijn Reuser moved from provisional LW to RW (2000-01 historical team role lists right midfielder). Existing 141 candidate slots, ratings and qualified clubs unchanged, and position-wide LW/RW ranks recalculated. Season-majority match-position confirmation remains open. Source https://www.national-football-teams.com/club/692/2000_1/Ipswich_Town.html .
- Newcastle Alan Shearer 1998-99 29 league starts/14 goals, 1999-00 36/23, 2000-01 19/5; Chelsea Mario Stanić 1998-99 Parma Serie A 7/7, 1999-00 Parma 11/5, 2000-01 Chelsea 8/2; complete three-season numerical summaries confirmed by individual FBref pages. Sources: https://fbref.com/en/players/438b3a51/Alan-Shearer and https://fbref.com/en/players/c5c88be5/all_comps/Mario-Stanic-Stats---All-Competitions .
- Merge PR #9 on main: https://github.com/wjdduddlf112/footballarch/pull/9 (merge SHA `9503485db3194e0e95bdb30637862c309b46080d`); post-merge season JSON correction `b185418914b61ecd5498ece9adebdb0f97a17953`.
- GitHub connected main data verification: 141/141 graded, 141/141 league-wide ranks, 11 valid proposed 4-4-2 Best XI entries, full 2000-01 roster and historical club/standings arrays. The same external network could not reach GitHub Pages, and no Actions run/status was returned for merge commit; actual Pages publication and browser success **NOT VERIFIED**. Do not report them as successful.


## Premier League 2001-02 independent player research and provisional grades — 2026-10-30

- **User-directed season:** 2001-02 only, next season 2002-03 UEFA participants: Arsenal, Liverpool, Manchester United, Newcastle (UCL); Leeds, Chelsea, Blackburn, **relegated Ipswich via UEFA 2002 Fair Play draw** (UEFA Cup); Fulham, Aston Villa (2002 Intertoto Cup). Ten club identifiers already present in main, and standings/qualifiers/clubs preserved exactly.
- Fresh selection of **163 players**, distinct from imported previous 161-player draft (not used to decide memberships). Season-specific sources include 11v11, 2001-02 FootballSquads, individual FBref, Statbunker club-season appearance lists. Reselection archive: `audit/player-research/premierleague-2001-02-fresh-roster.json`.
- Club counts: Arsenal17 Liverpool16 Manchester United18 Newcastle15 Leeds17 Chelsea18 Blackburn15 Fulham14 Aston Villa16 Ipswich17. Every team has an **11-player nominal tactical starting grouping**; a 'backup' label for a high-start midfielder can mean starter-equivalent rotation rather than literal substitute.
- Individual information: **163/163 current season league starts recorded** (14 originally missing resolved from individual FBref and Statbunker); 163/163 DOB, Korean/original names, current club, role, provisional grade, positional league-wide rank, tier rationale and source links.
- Grades: S=3 A+=11 A=7 A-=17 B+=46 B=40 B-=26 C+=13 C=0 C-=0 D=0. **World Class 14; League Top Class 38.** No arbitrary tier quota.
- 4-4-2 Best XI `proposed_unapproved`: GK Shay Given; LB Ashley Cole, CB Rio Ferdinand/Sami Hyypiä, RB Steve Finnan; LW Robert Pirès, DM Roy Keane, CM Patrick Vieira, RW Freddie Ljungberg; ST Thierry Henry/Ruud van Nistelrooy. Only eligible clubs. Current season PFA honors and Golden Boot considered, earlier 1999-00 and 2000-01 individual records weighted lower.
- **Method limits:** All 163 nominees have individualized DRAFT grades, but detailed 1999-00/2000-01 performances and match-by-match most-used position remain **partially incomplete** for many. Team lineup classifications are provisional; archive 10-position taxonomy reduces classic LM/RM and wingbacks. A tier-input 100% is **not** historic audit sign-off. Maintain DRAFT until user approval.
- Reproducible validator `scripts/verify-pl-2001-02-draft.mjs` and headless browser check `scripts/verify-pl-2001-02-live.mjs` with `.github/workflows/verify-pl-2001-02-live.yml`, checking published GitHub Pages five tabs and screenshots; actual live action status **must be separately observed**, not inferred from file presence.
- Preserve all prior-season data, existing layouts and stylesheet, standings, crests, C champion badges, stripped-title markers, qualifier data and season navigation. Stop before PL 2002-03 absent next explicit user instruction.


## Premier League 2002-03 season completed to independently tested DRAFT — 2026-11-01

- **User directed PL 2002-03 only** and explicitly approved using the 2002-03-era mainstream **4-4-2**; do not begin the 2003-04 season without a new instruction.
- Eligible clubs for ACTUAL 2003-04 UEFA participation: Man Utd/Arsenal/Newcastle/Chelsea UCL; Liverpool/Blackburn/Southampton/Manchester City UEFA Cup. Manchester City UEFA Fair Play; Southampton as FA Cup runner-up. 8 participant club IDs and all 20 final table rows preserved exactly. Historical UEFA archive and existing crests unchanged.
- **132 individual nominees** (after reselecting 142 dated 2002-03 players and excluding players with 0-6 league starts and no plausible significant starting rotation). Removed Alan Kelly, Ed de Goey, Igor Bišćan, Quinton Fortune, John Curtis, Darren Huckerby, Hakan Şükür; excluded non-starters Steve Harper, Robbie Elliott, Patrik Berger and injury-short Marian Pahars. Added 19-PL-start Chelsea CM Jody Morris. Each selected candidate has 2002-03 PL-only starts, DOB, Korean/original names, contemporaneous club, individual 2000-01/2001-02/2002-03 weighted tier rationale, a position-wide league rank and source links.
- 2002-03 season-specific source: **Statbunker Premier League 02/03 (`comp_id=136`)** for Man Utd3 Arsenal5 Newcastle16 Chelsea8 Liverpool4 Blackburn34 Southampton18 Man City14, checked against FootballSquads season rosters and FBref/Arsenal Soccerbase. Explicitly excluded 11v11 all-competition statistics from PL-only starts. All **132/132 current season league starts verified** from that season filter.
- Season primary roles reviewed: Chelsea Gallas 36 starts starter/John Terry 16 backup; Zola 30 starts, Hasselbaink 27 starts, Gudjohnsen 20 rotation; Southampton Paul Telfer 26 vs Jason Dodd 13 at RB; Liverpool Djimi Traoré 30 LB and John Arne Riise 31 left wing, with Cheyrou 8 LW backup; Gary Neville is an eligible 2003 Best XI RB because PFA recipient Stephen Carr's Tottenham did not qualify. Manchester City Kevin Horlock used provisionally on left midfield with 22 PL starts.
- Proposed **4-4-2 Best XI (11 unique eligible IDs)**: GK Brad Friedel; LB Ashley Cole; CB William Gallas, Sol Campbell; RB Gary Neville; DM Roy Keane; CM Patrick Vieira; LW Robert Pirès; RW Kieron Dyer; ST Thierry Henry, Ruud van Nistelrooy. PFA 2002-03 4-4-2 structure and current individual form used; positions are as recorded for season, no artificial out-of-position player placement.
- Proposed tiers: S=3, A+=11, A=10, A-=27, B+=44, B=21, B-=16, C+=6, C/C-/D=0. World Class S/A+ **14**; League Top Class S/A+/A/A- **51**. All 132 grades and all 132 position-specific ranks remain unapproved.
- New structural gate `scripts/verify-pl-2002-03-draft.mjs` executed **PASS** after 132 selection update; per-team 11 nominal tactical starters, caps and rank continuity, league starts, eligible-club/Best XI links and preserved standings checked. New live script and `.github/workflows/verify-pl-2002-03-live.yml` checks Pages latest JSON, five UI views and screenshot artifacts, but cannot be called passed until Actions actually runs successfully.
- Historical audit limitation: a portion of 2000-01/2001-02 detailed match evidence and match-by-match exact predominant player position remains unfinished. Any quality claims are **DRAFT evaluations**, not certified complete historical statistics, and current season starters' status does not mean individual player was always a literal starter in the nominal 4-4-2 grouping.


## Premier League 2003-04 checkpoint — 2026-11-01

- New season-specific candidate investigation, not an import from prior candidate branches; current-season list comprises **105 players from 6 English top-flight 2003-04 clubs** who participated in 2004-05 European competitions: Arsenal, Chelsea, Manchester United, Liverpool, Newcastle United, Middlesbrough.
- 2004-05 historical UCL/UEFA Cup entries cross-checked against UEFA and 2004 Intertoto competition listing. Millwall FC participated in UEFA Cup but was not a 2003-04 Premier League club; omitted from the PL player pool. Dedicated qualifier archive `data/premierleague-europe-qualification-1999-2026.json` updated.
- New draft grades and positional ranks **105/105**, World Class **17**, League Top Class **38**, 4-4-2 Best XI (11 unique player references) proposed, not approved.
- All 105 records have formatted DOB, club and 2003-04 PL league-start input. **Individually cross-checked league starts: 0/105**; all 105 are provisional until player-by-player source corroboration. This number is not a historical verification claim.
- **50 players** lack at least one earlier individual season starts input for 2001-02 or 2002-03; full match-by-match majority position **105 pending**. No exact missing statistic is fabricated; null remains in prior-season data where not found.
- Connector-side structural validation: 105 unique IDs, 6 x 11 nominal starters, per-team slot caps, positional rankings 1..N, DOB/date syntax, nonempty rationale/source, XI references passed. One stray `B+ ` whitespace tier was normalized to B+ for Danny Murphy.
- Local Node CLI validators and independent browser/crest checks were **NOT RUN / NOT VERIFIED**; JSON write to main is verified but actual GitHub Pages display is not independently confirmed.
- Full six-club candidate list, positional ranking tables, preliminary grades and evidence gaps: `audit/player-research/premierleague-2003-04-research.md`.
- Player JSON: `data/premierleague-2003-04.json` (draft/unapproved), source standings and existing frontend preserved.
- Work stops after 2003-04. Do **not** change approved status or begin 2004-05 without explicit permission.


## Premier League 2004-05 checkpoint — 2026-11-01

- User gave explicit permission to proceed **one** season from 2003-04 to 2004-05. Status DRAFT only; prior season not auto-approved.
- Actual 2005-06 European entrants independently reviewed across UCL, UEFA Cup and Intertoto: Chelsea, Arsenal, Manchester United, Everton, Liverpool, Bolton Wanderers, Middlesbrough, Newcastle United (**8 clubs**). Liverpool entered UCL as defending champions despite finishing fifth; Newcastle entered 2005 Intertoto despite league 14th.
- New **150 candidate** entries from season-specific club squads and Premier League-only appearances; selection did not copy previous season candidate lists.
- **88** assigned club starters (11 per club), 150 DRAFT tiers, 150 DRAFT position ranks. **17** World Class (S/A+) and **48** League Top Class (S/A+/A/A-). Eleven unapproved 4-4-2 Best XI player references and positional compatibility checked.
- Tier distribution: S=4, A+=13, A=14, A-=17, B+=45, B=27, B-=17, C+=12, C=1, C-=0, D=0.
- **99/150** prior-season evidence incomplete (at least one 2002-03 or 2003-04 league-start value null); **150/150** match-by-match primary-position confirmations pending. League-only current starts entered from season pages but not fully audited against a second independent source per player. Historical DOB/content conflicts possible.
- Source files: data/premierleague-2004-05.json, data/premierleague-europe-qualification-1999-2026.json; all-player research: audit/player-research/premierleague-2004-05-research.md.
- Structural audit via GitHub connector/JS: 8 club memberships, 11 club starters each, slot caps, unique IDs, continuous per-position ranks, valid tier values and Best XI references. Old validator's hard-coded snapshot counts require update, so claiming it has been executed is prohibited.
- **Node CLI validation NOT RUN**; **live browser five-tab and image validation NOT VERIFIED**; **user acceptance NOT GIVEN**.
- No 2005-06 or later Premier League player work authorized; stop at 2004-05.


## Premier League 2005-06 checkpoint — 2026-11-01

- User explicitly approved one season beyond 2004-05: **2005-06 only**. All assessments remain **DRAFT, user-unapproved**.
- 2005-06 PL clubs actually entering 2006-07 Europe: Chelsea, Manchester United, Liverpool, Arsenal (UCL); Tottenham, Blackburn, West Ham (UEFA Cup); Newcastle (Intertoto, later UEFA Cup). The West Ham FA Cup runner-up and Newcastle actual Intertoto appearances are accounted for; Europa entrants matched to the 2006-07 qualification archive.
- New season-specific roster selection: **142 candidate players**, split Chelsea 21; Manchester United 17; Liverpool 19; Arsenal 18; Tottenham 16; Blackburn 16; Newcastle 18; West Ham 17. Each club has **11 nominal starter slots**. Former season candidate lists were NOT reused as selection lists; only earlier individual season data was consulted for historical context.
- **142/142 provisional tiers and 142/142 per-position ranks**, World Class **20** (S/A+) and League Top Class **45** (S/A+/A/A-). Tier distribution: S=6, A+=14, A=10, A-=15, B+=54, B=20, B-=14, C+=9, C=0, C-=0, D=0. 11 unique draft Best XI selections in the site's 4-4-2 position layout.
- **142/142** 2005-06 individual PL starts recorded from historical season-specific sources. Not all have been independently checked against a second source; some goals remain null pending verification. **94** players have missing league starts for one or both of 2003-04 and 2004-05 within earlier shortlisted season datasets, which are not exhaustive for prior transfer clubs. **142/142** need match-by-match verification of their most frequent playing position (exception Gerrard at right midfield supported by explicit former manager statement).
- Formation: PL-wide mainstream 4-4-2 is a **provisional** selection, not a proven across-all-20-clubs frequency count. Chelsea played 4-3-3; Arsenal used 4-5-1 in Europe but primarily 4-4-2 in the domestic league. Club patterns stored separately and explained in the new season research report.
- Per-club complete tables, individual tier/rank and evidence caveats stored at `audit/player-research/premierleague-2005-06-research.md`. Source JSON at `data/premierleague-2005-06.json` and qualifier ledger `data/premierleague-europe-qualification-1999-2026.json`.
- Connector-side JSON structural validation distinct from source corroboration. **Node CLI validation NOT RUN; live GitHub Pages browser/tab/crest verification NOT PERFORMED; user approval NOT GIVEN.** Preserve prior standings, emblem and existing page UI; do not start 2006-07 without another user instruction.


## Premier League 2006-07 checkpoint — 2026-11-01

- User expressly approved continuing one season after 2005-06. User reported the deployed website **through Premier League 2005-06** looks correct. This is user confirmation of prior views, not a model-conducted browser inspection of the new 2006-07 season.
- Actual 2007-08 UEFA entrants: 4 UCL (Man United, Chelsea, Liverpool, Arsenal), 3 UEFA Cup (Tottenham, Everton, Bolton), and 2007 UEFA Intertoto **Blackburn**; documented by UEFA Intertoto entry/winner and October 2007 Europa first round reports. Intertoto Blackburn 10th, Reading/Portsmouth left out; no incorrectly presumed 2007 Fair Play entrant.
- A **fresh 149-player shortlist** for these 8 clubs based on 2006-07 dated rosters and league records. 8 × 11 nominal starter roles; **149/149** preliminary individual qualitative tiers and position-specific rankings, and 11 proposed Best XI player references. No official user approval applied.
- Tier counts S 3, A+ 22, A 4, A- 25, B+ 54, B 20, B- 16, C+ 5, C 0, C- 0, D 0. **World Class 25; League Top Class 54.**
- 2006-07 league starts **67/149 individually recorded**, 82 missing; league goals may also be null. Sources for entered stats from dedicated 2006-07 PL rows at FBref, EvertonResults and SpursOdyssey. **106 players** missing at least one prior-year starts value in the 2004-05/2005-06 draft references. Exact missing stats are null, not invented, and tiering remains qualitative DRAFT. **149/149** match-by-match main-position verification pending.
- Zero-league-appearance player exclusions: Armand Traoré (Arsenal), Radek Černý (Tottenham); other marginal CB corrections prefer Djourou and Ricardo Rocha. Chelsea's diamond midfield structure (no nominal starting wingers) preserved. Potential positional ambiguities (Everton Phil Neville, Mikel Arteta; Bolton Davies) require match-by-match audit.
- Formation: **4-4-2 only provisional** for the league-wide Best XI, NOT a proven 380-match modal frequency. Chelsea 4-4-2 diamond/4-3-3 and Bolton 4-2-3-1/4-3-3 separately preserved in formationByClub. UEFA report and 2006-07 PFA shape consulted.
- Data: `data/premierleague-2006-07.json`, European archive updated at `data/premierleague-europe-qualification-1999-2026.json`. Entire club-by-club tables, ranks, evidence and 4-4-2 Best XI at `audit/player-research/premierleague-2006-07-research.md`.
- Pending full player evidence, previous 3-season form, all match-position proofs. Local Node CLI verification NOT run; deployed site interaction and crest checks NOT independently completed. Maintain unapproved DRAFT. Stop after 2006-07, no 2007-08 player evaluation without explicit user request.


### 2006-07 correction: Best XI versus ST league ranking (2026-11-01)

- User identified structural contradiction: McCarthy ST #2 while Berbatov ST #3 appeared in the 4-4-2 Best XI.
- Reviewed season-specific Premier League goals/assists and 2004-05/2005-06 foreign domestic-league records using historical FBref and 2007 PFA contemporary selection.
- **Now ST #1 Drogba, #2 Berbatov, #3 Rooney, #4 McCarthy. Best XI ST slots #1 + #2, no exception.** All remaining Best XI positions likewise follow positional top ranks (for CB #1 + #2).
- Berbatov 2006-07 12 PL goals + 9 assists, 2004-05/2005-06 Bundesliga 20 + 21 goals and PFA XI; McCarthy 2006-07 18 PL goals + 0 assists, prior Porto 11 + 3 league goals. Rooney 14 PL goals + 11 assists is retained ST #3 pending broader subjective reassessment; ranking is not a pure G+A sort.
- Source `data/premierleague-2006-07.json` updated: per-player rank/Rationale, prior league (Bundesliga/Primeira Liga) evidence, current McCarthy 36 starts and Berbatov 9 assists; source `audit/player-research/premierleague-2006-07-research.md` synced including main ST ranking and club roster tables.
- Dataset count **149** unchanged; current PL starts filled **67/149**, 82 not confirmed. At least one previous season starts missing for **106** players. **Still DRAFT, not user-approved.**


## 2007-08 Premier League source audit and BEST XI mapping revision (2026-11-01)

- User required actual historical verification rather than structure-only checks. 2007-08 began as 172-player DRAFT with only 17 current league starts entered. After reviewing nine club-specific 2007-08 Premier League appearances/starts/goals sources (Statbunker, FBref, Everton Encyclopedia), **170 eligible candidates, 170/170 league starts/apps/goals**, 99 nominal starters, 11 PFA-cross-checked XI references, all 170 tier proposals and consecutive per-position ranks.
- Removed zero-league-appearance Liverpool Charles Itandje, zero-start Aston Villa Patrik Berger, Tottenham Ledley King (4 starts; replaced with Kaboul 19 starts); Liverpool Jermaine Pennant (14 starts) replaced in RW backup position by Yossi Benayoun (15 starts, 30 appearances). Club counts ManU 20 Chelsea 21 Arsenal 19 Liverpool 19 Everton 17 Aston Villa 18 Portsmouth 18 Man City 20 Tottenham 18.
- **Best XI strongest individual first, regardless of exact primary position label.** User specifically required Gerrard CAM be allowed in the 4-4-2 field CM. Best XI now David James; Ferdinand, Vidić, Clichy, Sagna; Cristiano Ronaldo, Ashley Young, Steven Gerrard, Cesc Fàbregas; Fernando Torres, Emmanuel Adebayor — precisely contemporary PFA XI. Gerrard player's actual role stays CAM; 4-4-2 selection includes CM tactical slot. Updated `assets/app.js` to support optional pitch displayPosition, so both central midfielders display CM while their original ranking positions remain independent.
- All 11 Best XI players have 2005-06 and 2006-07 individual domestic league starting-appearance data now recorded, including non-PL seasons in La Liga, Ligue 1 and EFL Championship; **139/170** candidates still missing at least one older starting record. 170/170 field position majority unverified from match-by-match lineups; two-source DOB audit incomplete.
- Current goals may differ across historical data providers: Ashley Young 9 per FBref/11v11 vs 8 per Statbunker; primary 9. Gerrard 8 assists FBref vs BeSoccer 9; primary 8. Discrepancies remain annotated.
- **Connector-side JS structural audit passed (0 errors)**: IDs, caps, tiers, ranks, nine clubs / 99 starters, 170 starts/apps/goals, valid 11 unique XI with mapped tactical slots, names identical to 2007-08 PFA best team. **Node CLI not run; actual deployed site interaction/crests not independently verified.** The user's earlier website-confirmation through 2005-06 remains separately recorded. **All evaluation remains user-unapproved DRAFT.**
- Review files: `audit/player-research/premierleague-2007-08-research.md` plus 9 club tables, 2 position ranking reports and `audit/player-research/premierleague-2007-08-checkpoint.md`. Stop before 2008-09.


## Premier League 2008-09 DRAFT — 2026-11-01

- Seven PL clubs entering 2009-10 UEFA tournaments: Manchester United, Liverpool, Chelsea and Arsenal UCL; Everton, Aston Villa and Fulham Europa League. Intertoto no longer existed in 2009. Clubs selected before player research; league table/crest/champion badge never modified.
- **122 eligible player nominees**, fresh 2008-09 club-by-club selection; **77 nominal starters** (11 each), full DOB and Korean/native name/club, **122 provisional tiers and 122 contiguous positional ranks**, 4-4-2 Best XI 11 references. Team counts Manchester United 19, Liverpool 17, Chelsea 18, Arsenal 20, Everton 17, Villa 16, Fulham 15.
- All 122/122 current-season Premier League appearance, start and goals lines entered from 2008-09 season-specific FBref and Statbunker club tables, with mixed-provider disagreements noted. **11/11 Best XI** players' prior 2006-07 and 2007-08 starts populated with foreign domestic leagues differentiated; **90/122** other athletes still missing at least one of those prior year values. Match-by-match **0/122 majority played positions verified**; birth dates entered but not two-source certified. Qualitative three-year evaluation still provisional.
- Tier counts S 5, A+ 20, A 6, A- 26, B+ 43, B 16, B- 6, C+ 0. World Class 25, League Top 57.
- **Best XI strongest first, actual player positions retained:** van der Sar; Vidić, Ferdinand; Evra, Bosingwa; Ashley Young, Ronaldo; Lampard (original CM in field CM), Gerrard (original CAM in field CM); Anelka, Torres. Two central midfielder field labels both CM. Ranking list uses underlying roles and was NOT reordered to force XI position. Best XI checked against role and three-year individual form, not copied blindly from PFA XI; Glen Johnson ineligible as Portsmouth not European participant in 2009-10.
- Structural JS inspection and data checks passed. **Node CLI not run**, actual GitHub Pages browser/crest checks **not independently completed**, and **user approval absent**. Stop before 2009-10.
- Full navigation and 7 club tables + 2 rank tables: `audit/player-research/premierleague-2008-09-research.md`. Separate verified-vs-pending report: `audit/player-research/premierleague-2008-09-checkpoint.md`.


---

## 2026-11-01 — La Liga 2002-03 independent source-backed DRAFT expansion (partial, not a completed season)

**Reference commits**
- `0222b9bf39b7dda749029221c1a4cde29b0297ef`: 14 further sourced three-season assessments
- `0ec2608d7eb277f12b3271b1b859166907befe07`: 7 additional independently verified eligible season entrants (not copied from legacy roster)
- `5a931164ca87949b6c49f30396291acd4d58ab9c`: 6 further sourced three-season assessments

**Current main:** `data/laliga-2002-03.json`, 9 eligible clubs, **135 candidate entries, 34 individual three-season provisional grades, 101 ungraded, 0 positional ranks, 0 Best XI**. Former dataset had 128 candidate entries and 14 graded. New seven out-of-roster entrants are Bodipo (Racing, ST 16 starts), Fernando Niño (Mallorca, CB 20), Javier López Vallejo (Villarreal, GK 4), Unai Vergara (Villarreal, CB 17), José Manuel Pinto (Celta, GK 2), Alberto López (Sociedad, GK 1), and Miquel Garro 'Miki' (Mallorca, GK 2). All have club-season source links, individual profiles, original names and birth dates, but their **tiers remain null** pending individualized 2000-01, 2001-02, 2002-03 comparison and peer evaluation. Names/positions based on independent contemporary squad pages + BDF player profiles, not merely previous roster inclusion.

**20 added provisional graded profiles:** Casillas A+, Cañizares A+, Roberto Carlos S, Figo A+, Makélélé A+, Xabi Alonso A, Puyol A-, Xavi A-, Baraja A-, Vicente B+, Karpin A, Naybet A-, Sergio González B+, Jorge López A-, Míchel Salgado A-, Aitor López Rekarte B+, Albelda B+, Leo Franco B+, Javier de Pedro A-, Ibagaza B+. The existing 14 personally audited proposals are retained. All 34 assessments have individually recorded three-season source URLs and qualitative notes. The positions and intra-position tier order remain unapproved.

**Structural connector check passed:** valid 135-record JSON, 135 unique season IDs and unique club/name keys, 9 qualified clubs only, all have recorded current-season `starts`, no 2-GK/3-CB/2-wing-or-full-back/3-CM/3-ST quota exceedances, all grades in allowed enum and carry a rationale and source, 54 birth dates present/81 missing; all 34 tier entries are unranked. 101 ungraded players retain null tier and null rank. The 135 season-start numbers have not all been independently verified or matched to season-majority positions. This **is NOT a completed individual audit**.

**Outstanding:** independent reselection/season-majority position checks for legacy unreviewed candidates; 3-season personal evidence and relative comparisons for 101 ungraded; BDF's schematic eleven is not proof of actual tactical deployment; CAM / CM / ST tactical allocations for e.g. Aimar, Mostovoi, Ibagaza and others; full club XI starting-slot validity, all league-wide positional rankings, historically supported league modal formation and Best XI; DOB contradictions (Miki: BDFutbol+FBref 1975-09-20 vs Transfermarkt/11v11 1975-12-20; Ronaldo date convention previously flagged); 2003-04 entrant independent review already recorded in prior checkpoint. Existing standings/crests/other seasons untouched. GitHub file read/parse and JS in-memory structural checks performed. **Node CLI validator NOT RUN; live GitHub Pages browser verification NOT DONE; user final approval NOT OBTAINED.**

**Source squads**
- https://www.bdfutbol.com/en/t/t2002-032.html (Real Madrid)
- https://www.bdfutbol.com/en/t/t2002-0330.html (Real Sociedad)
- https://www.bdfutbol.com/en/t/t2002-0313.html (Deportivo)
- https://www.bdfutbol.com/en/t/t2002-0311.html (Celta)
- https://www.bdfutbol.com/en/t/t2002-0336.html (Valencia)
- https://www.bdfutbol.com/en/t/t2002-031.html (Barcelona)
- https://www.bdfutbol.com/en/t/t2002-0324.html (Mallorca)
- https://www.bdfutbol.com/en/t/t2002-0338.html (Villarreal)
- https://www.bdfutbol.com/en/t/t2002-0329.html (Racing)

**Next resumes at the same season; this pass does not authorize 2003-04 player evaluation.**

### 2026-11-01 same-day extension: current authoritative main snapshot

Commit `2d490a03df322e673a20fd2f1d0c043c3739f02e` added four individually sourced 3-season DRAFT tier proposals: Pablo Cavallero (Celta GK, A+, 2002-03 Zamora winner), Rodolfo Arruabarrena (Villarreal LB, B+), Sylvinho (Celta LB, B+) and Albert Riera (Mallorca LW, B+). See BDFutbol individual player pages: https://www.bdfutbol.com/en/j/j2232.html ; https://www.bdfutbol.com/en/j/j2384.html ; https://www.bdfutbol.com/en/j/j2513.html ; https://www.bdfutbol.com/en/j/j56.html .

**This supersedes the 34-grade count above:** 9 qualified clubs; **135 candidates, 38 provisional 3-season tiers with source notes (2 S, 10 A+, 6 A, 9 A-, 10 B+, 1 B), 97 evidence-pending null tiers, 0 ranks, 0 Best XI**. Date of birth available for 57/135, 78 still missing. Seven independently sourced missing candidates remain among the 97 null-tier candidates. No previously finalized season or site code changed. All tier/rank/Best XI and 2002-03 season completion gates still DRAFT/OPEN; no Node CLI or browser verification performed.

---

## Premier League 2009-10 — 2026-11-01 fresh DRAFT

Source TXT instruction adapted to the **2009-10 season only**. Candidate roster and tier were newly researched rather than copied from historical candidate branches. No future season assessment was initiated.

- Season JSON: `data/premierleague-2009-10.json`; initial integrated DRAFT `03924539fb9af43c43085260cc02fac44ae5361c`; added twelve player three-season league-stat references `8b969ba1c118b51a4bb6e6725ed4147fed467548`.
- All 7 independently researched team rosters: under `audit/player-research/premierleague-2009-10-{chelsea,manutd,arsenal,tottenham,mancity,astonvilla,liverpool}-fresh-draft.json`.
- Detailed review, including **all 133** player rows, World Class/League Top Class and XI: `audit/PLAYER_PREMIERLEAGUE_2009-10_DRAFT_REVIEW.md`; commit `9422df1cafbd9aafcd569d29b38f0959b35a4e5c`.
- 2010-11 actual UEFA entrants: Chelsea, Manchester United, Arsenal, Tottenham (UCL), Manchester City, Aston Villa, Liverpool (UEL). Portsmouth excluded (UEFA license). Qualifiers and `meta.europeanQualificationVerified` updated. No standings/crests/front-end files touched.
- Research candidate totals: Chelsea 19, Manchester United 19, Arsenal 20, Tottenham 19, Manchester City 20, Aston Villa 17, Liverpool 19 = **133**; all 133 birth dates present; 7 clubs each have 11 preliminarily selected starters; no position caps violated in in-memory schema check.
- **Tier and positional ranking: 133/133 DRAFT proposals**, 0 user approvals. S 3, A+ 13, A 11, A- 21, B+ 36, B 23, B- 14, C+ 9, C 3; World Class 16; inclusive League Top Class 48. Best XI 11 players, proposed 4-4-2.
- Player 2009-10 league starts individually sourced: 63/133; missing 70/133. Three-season league starts/goals profiles for 12/133; three-season **complete personal performances not independently verified**. The remaining 121 players' two prior seasons not yet reconciled. Match-level principal-position checks: 0/133.
- Validation: in-memory schema checks PASS (unique player IDs, eligible clubs, tier enum/DOB syntax, quota starters/backups, position rank uniqueness, eleven Best XI ids valid). **Node CLI test not run**. **Live GitHub Pages UI/badge/crest/browser tabs not independently verified**. Therefore this is *partial research + DRAFT JSON publication*, not a fully validated season.
- Position concerns: Chelsea Anelka RW/ST, Tottenham Bale LB/LW, Aston Villa Young/Downing sides, Manchester City Kompany CB/DM, Manchester United Giggs LW/CM; lineup-based review required before final tier/rank acceptance.
- Process stops at Premier League 2009-10; user approval is required for advancing to 2010-11. DRAFT review may be revised without approving ratings.


---

## 2026-11-01 — La Liga 2002-03 FULL DRAFT EVALUATION CHECKPOINT (latest; supersedes partial checkpoints above)

**Data delivered:** all **135** existing/source-researched eligible club-player entries have a **provisional tier, 1..N rank within historical primary-position classification, individual Korean rationale, historical evidence status, and user-unapproved review flag**. 4-2-3-1 Best XI proposed (11 unique player IDs). 9 clubs each retain 11 starter-tagged players and the permitted starter/backup position cap; separate verification required before describing each slot as season-majority historically proven. `main` files preserved except 2002-03 season data and append-only audit docs.

**Latest DRAFT snapshot:** 135 evaluated / 135 ranked / 11 Best XI / 9 qualified clubs. Grade distribution S 3, A+ 13, A 5, A- 15, B+ 47, B 35, B- 10, C+ 3, C 4, C- 0, D 0. World Class 16; League Top Class 36. 83 DOB populated, 52 still missing. **38** player biographies individually have sourced 3-season comparisons and **97** other grades are qualified current-season plus some historical archive comparisons with an explicit partial-prior-history tag. 135/135 grading is not synonymous with 135/135 independently sourced three-season historical record verification.

**Important differentiated gates:** independent structural checks PASS: IDs unique, eligible club/parity with active standings archive, position enum, all tiers and ranks present with Korean rationales, position ranks 1..N without duplicates, XI unique and formation slot-compatible, individual club starter count 11, roster cap. **Open:** 52 DOB, full three-season independent corroboration of 97 qualitative entries, 38-match season-majority position audits, statistically modal league-wide formation confirmation, historical crest loading and actual five-tab GitHub Pages browser check. Node CLI validator not run in this runtime; independent equivalent connector-side checks PASS. User final approval pending. Do not claim those gates completed.

**Canonical complete human-readable output:** [LALIGA_2002_03_DRAFT_RESULTS.md](LALIGA_2002_03_DRAFT_RESULTS.md) has all 135 candidates grouped by nine clubs with full requested columns, league position-wise ranks, proposed XI, methodological caveats and QA status. Direct season JSON: [../data/laliga-2002-03.json](../data/laliga-2002-03.json).

**Key contemporary sources:** UEFA 23 Jun 2003 Roy Makaay European Golden Shoe (29 goals) https://www.uefa.com/news-media/news/0192-0e6a622799e4-41161eeefe59-1000--esm-golden-shoe-makaay-crowned/ ; RSSSF ESM XI https://www.rsssf.org/miscellaneous/esm-xi.html ; contemporary Real/Deportivo 4-2-3-1 vs 4-4-2 tactical note https://as.com/masdeporte/2003/03/23/polideportivo/1048396559_850215.html ; 2002 UEFA Team of the Year official communique https://www.uefa.com/newsfiles/52210.pdf . Each player's source data and assessment rationale remain inside individual JSON rows.

**Data commit:** `076209996b2e11d10235a8b6c7d4e1e4a773ef29`; previous all-135 tier commit `110bd78971d182661fb1d8c3c81ed660f5c20a50`, ranks/XI `61f17df65c3e28f6d76fe914e4dbd84241444a72`, detailed review flags `8b3399ec1eb9038b6249802e58c1c034d84feb5f`.

**Stop at La Liga 2002-03. Do not start La Liga 2003-04 player evaluation without user direction.**


### PL 2009-10 Best XI position-rank repair (2026-11-01)
- In the freshly integrated 2009-10 `Best XI`, RB Sagna (#2) appeared instead of Ivanović (#1), and LB Ashley Cole (#2) instead of Evra (#1); no explicit tactical rationale existed.
- Corrected both positions to respective #1 in season JSON; preserved player tiers and rank numbers. Both new fullbacks were in contemporary 2009-10 PFA Premier League Team of the Year; season-3-year individual review remains open.
- Season JSON repair commit: `32453027d06f55174d18cfa5b03d87b622ec3168`; all-club review report repair: `3731b9d42b88dfc6c635cda61673b5cb6fb9144a`.
- GitHub Pages direct live page and deployed JSON GET not verified (web tool inaccessible); avoid claiming browser/render validation.


### PL 2009-10 site display follow-up
- User still saw stale 2009-10 Best XI after the data correction (Ivanović rank #1, Evra rank #1). Live Pages not directly accessible in current environment, so deployment status not confirmed.
- Front-end cache and formation fix: `assets/app.js` commit `1a603757ef46809358c74bfb7fd0add20f819f59` adds season-specific cache-busted JSON fetch and 4-4-2 conditional two-CM rendering (without affecting DM formations in other years).
- HTML script cache key updated in `index.html` commit `b5598c22d4b5fc2ec08c6616a5856ef1fecbfddb`.
- GitHub source re-read confirms LB Evra (#1), RB Ivanović (#1), CM Lampard + Milner; 11 XI player IDs. **Not browser tested**. If site still shows previous XI, verify GitHub Pages `main/(root)` source and `pages build and deployment` Actions run; source-data and live deployment are separate gates.


## Premier League 2010-11 — 2026-11-01 DRAFT integration

- UEFA official 2011-12 UCL/UEL entrant records verify eight 2010-11 PL clubs including fair play/cup exceptions.
- **145** fresh candidates / **145** tentative individual tiers & ranks / **8** clubs each with 11 tagged starters; all caps and 11-player 4-4-2 XI pass in-connector structural checks. World Class **20** (S2/A+18), inclusive League Top Class **40** (A6/A-14 additional).
- Main canonical season JSON deliberately leaves all unverified 2010-11 league-start counts **null**; 78 entries link previous season's archived candidate starts but none equals complete independently confirmed 3-season individual study. 145 exact majority-position checks, DOB second-source verification, 5 live Pages views pending. Results remain DRAFT/Best XI proposed_unapproved.
- Complete tables: `audit/PLAYER_PREMIERLEAGUE_2010-11_DRAFT_REVIEW.md`. CLI validator available at `scripts/verify-pl-2010-11-draft.mjs` but Node CLI not run in connector; in-memory structural equivalent PASS. No other season or site source overwritten.


## Premier League 2011-12 — 2026-11-01 source-led DRAFT integration

- 2012-13 UEFA actual entry verified: 7 PL clubs. UCL Manchester City, Manchester United, Arsenal and Chelsea (2011-12 UCL holder and PL rank 6); UEL Tottenham (PL rank 4 displaced by Chelsea under 2012 titleholder limit), Newcastle (rank 5), Liverpool (League Cup winners, rank 8).
- Fresh 2011-12 FootballSquads-referenced seven club candidate files. Canonical `data/premierleague-2011-12.json`: **126** player candidates, **126** provisional tiers, within-position ranking 1..N and 11 named Best XI slots. Each club has 11 representative starters; no candidate position cap breach.
- Representative **4-4-2** grounded in contemporary PFA XI: two CB/two ST and DM Scott Parker + CM Yaya Touré, no artificial CM->DM rendering. Baines was excluded (Everton not eligible), so Patrice Evra LB. XI status `proposed_unapproved`.
- Quality gate: **9/126** 2011-12 player starts individually source-linked; **117** pending null starts. Previous 2009-10 and 2010-11 candidate-archive references are retained for tracing, but complete independent three-season evidence and majority role-match checks are not established; all 126 grades/ranks are historical DRAFT rather than independently verified final personal evaluations. Individual DOB second-source audit pending; FootballSquads Jonas Gutiérrez year discrepancy resolved via Premier League official 1983-07-05.
- Full 7 club tables, overall ranks and top classes: `audit/PLAYER_PREMIERLEAGUE_2011-12_DRAFT_REVIEW.md`. Node integrity test: `scripts/verify-pl-2011-12-draft.mjs`; GitHub Actions workflow: `.github/workflows/verify-pl-2011-12-draft.yml`.
- In-connector equivalent structural check PASS; standalone GitHub Actions execution, deployment and live five-tab browser review must be tracked separately. No season after 2011-12 evaluated, no front-end or existing season changes.


## Premier League 2012-13 — 2026-11-01 full fresh DRAFT connection

- **2013-14 UEFA actual entrants independently UEFA crosschecked**: UCL Manchester United, Manchester City, Chelsea, Arsenal; UEL Tottenham, Swansea (League Cup winners, PL ninth), Wigan (FA Cup winners despite PL relegation at 18th).
- No recycling of old candidate lists. Seven source-linked period roster files under `audit/player-research/premierleague-2012-13-*-fresh-draft.json`, names/birth dates from 2012-13 FootballSquads, and qualitatively drafted individual rationales.
- Canonical `data/premierleague-2012-13.json`: **128 fresh candidates**, 128 provisional grades and same-position ranked placements; all 7 clubs tagged with 11 representative starters; candidate caps and stable unique IDs checked. **World Class 17 (S2/A+15)**; inclusive **League Top Class 37 (A0 2/A-18 additional)**.
- League Best XI **4-2-3-1** proposal (11 unique IDs, exact canonical position match): De Gea, Ashley Cole, Vertonghen, Ferdinand, Zabaleta, Carrick (DM), Yaya Touré (CM), Bale (LW), Mata (CAM), David Silva (RW), Van Persie (ST). Each slot takes a position-ranked #1 except the second CB #2. Status `proposed_unapproved`, NOT user approved.
- Formation season research cites UEFA 2012-13 technical trends and the Opta retrospective 4-4-2 decline to 12%; precise EPL 380-match modal formation remains unverified. Wigan actual 3-4-2-1 wingback system is logged distinctly, not as a claimed conventional back-four.
- Evidentiary limits: **8/128** current season goal totals and **4/128** assists linked to individual public sources. **0/128 starts** independently confirmed; nulls not zeros. Birth dates from period roster not fully second-source audited. 128 precise season-most-played positions need lineup-level review (especially Bale LW/CAM, Michu CAM/ST, Ivanović RB/CB, Wigan wingbacks). Prior 2010-11/2011-12 candidate archive records are not full independent three-year historical career checks; grades/ranks remain qualitative DRAFT.
- Full browser-readable audit: `audit/PLAYER_PREMIERLEAGUE_2012-13_DRAFT_REVIEW.md` includes all seven club rosters, 10-position league rankings, S/A+/A/A- class and XI. Validator `scripts/verify-pl-2012-13-draft.mjs`, Actions workflow `.github/workflows/verify-pl-2012-13-draft.yml`. Node CI and GitHub Pages deployment to be reported distinctly from source JSON storage; actual live 5-tab browser verification not claimed without inspection.
- Main existing standings, emblem references, C/stripped champions, UI and other seasons remain untouched. This project run stops at **2012-13**.


## Premier League 2013-14 — 2026-11-01 fresh DRAFT, UEFA real entrants

- Actual **2014-15 UEFA participants from 2013-14 PL**: UCL Manchester City 1st, Liverpool 2nd, Chelsea 3rd, Arsenal 4th; UEL Everton 5th, Tottenham 6th, **Hull City 16th / 2014 FA Cup runner-up**, entered qualifying rounds and did not reach groups. 7th Manchester United **ineligible**. UEFA archive 2014/15 Europa and UEFA UCL entry corroboration. This is **7 qualifying clubs**.
- Source-led fresh 7 club rosters: `audit/player-research/premierleague-2013-14-{mancity,liverpool,chelsea,arsenal,everton,tottenham,hull}-fresh-draft.json`, with contemporary FootballSquads club and DOB listings, provisional first XI/rotation roles, individual qualitative rationale.
- Canonical `data/premierleague-2013-14.json`: **129 candidates**, each with provisional grade and league-wide within-position rank. **7×11 representative starters**, no club pos quota breach, no duplicates. **World Class 17 S2/A+15**; **League Top Class 45 S2/A+15/A0+ A-28**.
- Proposed league Best XI **4-2-3-1** (not user approved): Čech GK, Kompany+Cahill CB, Baines LB, Coleman RB, Gerrard DM, Yaya Touré CM, Silva CAM, Hazard LW, Sterling RW, Suárez ST. All chosen by correct top-position rank. **Formation not historically proven as 2013-14 league most frequent**: PFA contemporary 4-4-2 included 21-goal Sturridge as second striker; this XI excludes Sturridge by one-ST slot. City 4-4-2/4-2-3-1, Liverpool 4-4-2 diamond/4-3-3, Hull 3-5-2/3-4-1-2 recorded with exceptions.
- Audit full report `audit/PLAYER_PREMIERLEAGUE_2013-14_DRAFT_REVIEW.md`. 129 tiers and 10-position ranks, club-by-club Korean/original/DOB/role/grades, World Class and League Top Class and XI.
- Evidence limitations: 14 selected 2013-14 goal/assist samples linked to archived league tables; **0/129 independently verified league starts, 0/129 individual majority positions, 0/129 complete independent 2011-12,2012-13,2013-14 assessments**. Earlier DRAFT archive references retained but not mistaken for validated previous form. Player DOB dual-source review pending. These grades and positions are provisional, not historical fact independently certified.
- Structure test `scripts/verify-pl-2013-14-draft.mjs`; GitHub Actions `.github/workflows/verify-pl-2013-14-draft.yml`. Structural status, CI Node execution, GitHub Pages build/deploy and live 5-tab browser correctness all reported as separate gates. Unapproved XI `proposed_unapproved`.
- No other seasons, past standings, front-end scripts, CSS, champion C/title-stripping logic, existing crest URLs modified. Work stopped at 2013-14.


## Premier League 2014-15 (2026-11-01)
- Independently selected 8 next-season UEFA entrants, including West Ham via Fair Play. Corrected missing West Ham in season qualifiers and standings competition column.
- New 2014-15 seasonal roster screening: 143 candidates across 8 clubs; exactly 11 provisional starters per club. Tier/position ranking/Best XI preliminary unapproved.
- Formation: 4-2-3-1 verified most-used as of 13 March 2015 by Opta/Guardian; precise full-season share pending.
- DOB one seasonal source; individual starts, 3-year stats and majority positions **unverified**, null, evidence-pending; structural check not historical proof.
- Audit report: audit/PLAYER_PREMIERLEAGUE_2014-15_DRAFT_REVIEW.md; validator scripts/verify-pl-2014-15-draft.mjs.
- Previous seasons, site UI, champion markers and emblems intentionally untouched. CI and deployment require separate verification.


## Premier League 2015-16 DRAFT (2026-11-01)
- Seven actual 2016-17 UEFA clubs: Leicester, Arsenal, Tottenham, Manchester City, Manchester United, Southampton, West Ham. Liverpool 8th not eligible.
- 131 fresh candidate records; 7 × 11 preliminary starters, role cap and one backup per role. All position ranks, tier proposals and one 4-2-3-1 proposed Best XI recorded.
- **Formation 4-2-3-1 is provisional** because exact 2015-16 PL league-wide starting-formation frequency was not independently verified. Leicester specific 4-4-2 in 35/38 PL matches confirmed by PL official.
- Personal all league starts, appearances, goals, assists retained null. DOB first historical roster source, second source and 3-year individual stat independent verification pending. Structural CI success cannot establish historical accuracy.
- Updated ONLY 2015-16 season JSON, seven research files, audit report, new validator/workflow, and this progress log. Other seasons, app UI, champion marker and crests unchanged.


## Premier League 2016-17 DRAFT — 2026-11-01
- Seven ACTUAL 2017-18 UEFA entrants (5 UCL, 2 UEL) sourced PL 25 May 2017, UCL/UEL archived records. Manchester United is 6th but UEL champions. Everton qualified UEL Q3.
- Fresh 2016-17 FootballSquads roster research on Chelsea, Tottenham, Man City, Liverpool, Arsenal, Man Utd, Everton. **126 candidates** including 77 representatives (11 each); all eligible candidates provisionally tiered and positionally ranked.
- League 4-2-3-1 is supported as *actual most-used 2016-17* formation by PL official 4 June 2017. Chelsea club tactical 3-4-3 translated to 3 CB starters + Alonso/Moses wingbacks, 11 starters in all.
- **DRAFT/unapproved; historical verification pending**: DOB only first source; all league starts/apps/assists null; 8 official top-scorer goal totals filled, all others null; 3-year player-by-player stats/majority positions independently unverified.
- Only current season JSON, seven research JSON, audit report, validator, workflow, this progress file changed; existing site visual components, previous seasons, standings, champion C and badges, emblems preserved.
- Structural CI and Pages browser review must be tracked separately. No claim of user approval.


## Premier League 2017-18 player DRAFT (2026-11-01)
- 7 actually qualified for 2018/19 UEFA competition, 4 UCL Manchester City/United/Tottenham/Liverpool, 3 UEL Chelsea/Arsenal/Burnley Q2. Evidence official UEFA and RSSSF.
- League modal **4-2-3-1**: 184/760, official PL tactical review, versus 4-3-3 127 and 4-4-1-1 120.
- 124 fresh season roster candidates with 7 x 11 provisional starters, per-position one-backup cap, tier and continuous within-role ranks, proposed 4-2-3-1 best XI.
- **DRAFT / unapproved.** All league starts/apps null, most goals/assists null, 3-season independent form and true majority starting positions unverified, DOB only first-source. Source-specific top scorer / playmaker selective figures recorded only where verified.
- Club source/role risks: Burnley 4-4-1-1 (Cork DM/Hendrick CAM nominal), Chelsea 3CB wingbacks, Man City/Liverpool 4-3-3. Deadline winter player transfers require scrutiny; no score presumed numeric.
- Changed only 2017-18 season JSON, seven research JSON, audit report, 2017-18 draft validator/workflow, progress log; all prior seasons and site theme, champion markers, crests maintained.
- Record CI, PR merge, Pages and actual UI separately after execution.


### PL 2017-18 candidate/roster follow-up correction
- Removed 5 candidates with duplicate cross-club transfer or insufficient on-field starting-capable evidence: Man United Sánchez (Arsenal entry retained), Ibrahimović, Carrick, Romero and Tottenham Llorente.
- Mapped Man United Rashford into LW and Mata into RW; actual position match-by-match audit remains pending. No player appears for multiple clubs in unified candidates.
- Updated club-specific JSON, full player table, full ranks and validation script. Current unique player count 119, World Class 19, League Top Class 46.


## Premier League 2018-19 DRAFT (2026-11-01)
- Seven actual 2019-20 UEFA entrants: UCL Manchester City, Liverpool, Chelsea, Tottenham. UEL Arsenal, Man United and Wolves (qualifying Q2). Official PL 29 May 2019 and UEFA.
- **4-3-3 most-used 2018-19**: 160/760 team starts; 4-2-3-1 134. Official PL retrospective. Existing 4-3-3 CAM layout means advanced central midfielder (No.8) in this particular formation.
- All 122 seasonal candidates drafted, seven team XI starters each, max one backup per position/team, all graded, all rank 1..N and proposed 4-3-3 Best XI. Wolves actual 3-5-2 (three CBs, wingbacks, two STs) represented without inventing starting wingers.
- **DRAFT/unapproved**: all player starts and appearances unknown/null, DOB only period-roster first source, match-majority roles and complete 2016-17 + 2017-18 individual records pending. Specific verified top goals: Salah/Mané/Aubameyang 22 each, Hazard 16G/15A; do not infer zero for others.
- Only 2018-19 season JSON, seven club fresh DRAFT files, report, 2018-19 validator/workflow, and progress log modified. All previous season datasets and existing app branding, champions, crest assets remain unchanged.
- GitHub CI, Pages deployment and browser UI must be separately checked.


## Premier League 2019-20 DRAFT (2026-11-01)
- Seven actual 2020/21 UEFA clubs: Liverpool, Man City, Man United, Chelsea UCL groups; Leicester UEL group, Tottenham UEL Q2, Arsenal UEL group via FA Cup despite PL8. Wolves PL7 excluded; official PL 14 Aug 2020 corroboration.
- PL actual **4-2-3-1 most-used 186/760** team starts per PL official 2 Aug 2020; Liverpool and City club formation 4-3-3.
- 129 2019/20 draft candidates in 7 independent period squad files, 7 × 11 representative starters, per-role one backup, all individual tiers and 1..N position ranks, 4-2-3-1 Best XI.
- Personal qualitative latest 60% (2019/20), 30% (2018/19), 10% (2017/18). **DRAFT / unapproved**; no independent full 3-season individual stats or match-by-match role census; all league starts/apps null. Selected official top goals and De Bruyne 20 assists only.
- Noteworthy FootballSquads James Justin DOB source conflict with England FA and official PL: official 1998-02-23 used, secondary review annotated.
- No other season JSON, CSS, JavaScript, crest assets, champion C markers changed. GitHub structural validator, Actions workflow and browser Pages inspection must be tracked separately.


## Premier League 2020-21 player DRAFT (2026-11-02)
- Actual 2021-22 UEFA entrants from UEFA archival records: Man City, Man United, Liverpool, Chelsea UCL; Leicester, West Ham UEL; Tottenham inaugural UECL (play-offs). PL 8 Arsenal excluded.
- **Official PL 2020/21 modal 4-2-3-1: 202 of 760 starts** (PL June 8 2021). Liverpool and City club-specific 4-3-3, Chelsea Tuchel 3-4-2-1 (3 CB, 2 wingbacks) recorded distinctly.
- 119 first-team DRAFT candidates, seven 11-player club starting representations, maximum one positional backup per team, all S–C tiers and per-role 1..N ranks and proposed 4-2-3-1 Best XI.
- Intended 3-season individual weighting: 2020-21 60%, 2019-20 30%, 2018-19 10%; **qualitative only**, independent individual player prior season source audit pending. All exact PL starts and appearances null; actual majority positional lineups incomplete.
- Removed minimal-start names rather than filling quotas (Steffen, Adrian, Van de Beek, Juan Mata, Dele Alli, Aguero and Giroud). James Justin DOB first-source conflict resolved with official 1998-02-23, independently checked.
- Changed only 2020-21 data, seven period squad research JSONs, full review, season-specific validation/workflow and progress log; previous seasons, site UI, emblems and champion C markers untouched.
- Treat CI as structural only. Track GH Pages deployment and actual browser render separately. DRAFT/unapproved.


## PL 2021-22 DRAFT checkpoint (2026-11-02)
- UEFA qualified clubs: 7 actual; official modal 4-3-3 (185/760).
- 126 manual research candidates: 77 starters and 49 reserves, DRAFT tiers and all positional ranks, 11 proposed XI.
- Current starts/apps & DOB mirrored from club public PL data; independent records and DOB second-source verification OPEN.
- Full match-by-match primary position verification OPEN; prior seasons same-club stats only, other clubs pending.
- PR and structural CI status must be verified separately. Final user review NOT given.


## Premier League 2022-23 new-season DRAFT checkpoint — 2026-11-02
- Actual UEFA 2023-24 qualifiers: eight (4 UCL, 3 UEL including West Ham as 2022-23 UECL titleholder, 1 UECL Aston Villa).
- Premier League official modal 4-2-3-1 261/760 team starts.
- 141 newly selected player DRAFT records (88 starters + 53 backups), 141/141 provisional tiers and within-position rankings, one proposed_unapproved Best XI.
- 2022-23 mirror source for appearances/starts/BIO; cross-club transfer correction for Arsenal Trossard and Jorginho. Data-source presence does not equal official independent corroboration for all 141.
- Previous 2020-21 and 2021-22 same/other club sources within 12 English club archives; outside clubs/leagues may remain NULL. Qualitative priority 10/30/60.
- DOB independently sourced from two official records: 0/141 complete. Match-by-match primary position verification: 0/141 complete. Historical three-year full club/league individual verification: open.
- Tier/position/Best XI status draft_unapproved, full audit at audit/PLAYER_PREMIERLEAGUE_2022-23_DRAFT_REVIEW.md.
- Structural GitHub CI, Pages deployment and direct browser UI must be checked separately; season 2023-24 not started.


## Premier League 2023-24 DRAFT checkpoint — 2026-11-02
- 2024-25 actual UEFA entrants: 7 clubs; UCL 4 (City Arsenal Liverpool Villa), UEL 2 (Spurs and eighth-placed Manchester United via FA Cup), UECL Chelsea. Newcastle PL 7th excluded.
- Official PL modal 4-2-3-1 296/760 team starts (1 June 2024).
- 126 new players, 77 starting roles and 49 backups. Tiers/rankings all DRAFT; 4-2-3-1 Best XI unapproved.
- Three-season evaluation qualitative priority: 2021-22 10%, 2022-23 30%, 2023-24 60%. No fabricated weighted score. Previous club mirrors incomplete.
- Mirror club records have loaned-out entries misclassified by club and were intentionally excluded (McAtee, Kaboré, Lokonga, Reguilón, David Datro Fofana, Lewis Hall).
- Some majority-position evidence available from official PL (Foden early 25 starts 16 RW, Palmer 12 CAM starts), but 126-person complete match-position census not certified.
- Player starts/goals source mirror and DOB 2nd-source crosschecks remain open. Structural CI and Pages build/deployment tracked separately.
- Full source/individual rationale/club tables: audit/PLAYER_PREMIERLEAGUE_2023-24_DRAFT_REVIEW.md.


## Premier League 2024-25 DRAFT checkpoint — 2026-11-02
- Nine actual 2025-26 UEFA participants: UCL 6 (top 5 + Europa champion Tottenham finishing PL 17th), UEL 2 (Villa and Forest), UECL 1 (Palace FA Cup winners, UEFA/CAS demoted from UEL for multi-club ownership).
- PL official 2025-06-05 modal formation 4-2-3-1 408/760 team starts, 3-4-2-1 117, 4-3-3 114.
- 162 newly curated/graded 2024-25 PL players, 99 starter roles (9x11), 63 backups; all ten position-specific 1-N rankings and proposed 11-person Best XI. DRAFT user unapproved.
- 2022-23 10%, 2023-24 30%, 2024-25 60% qualitative evaluation (without fabricated numeric composite); prior PL same-team/previous-club mirror snapshots for 16 team sources; foreign/other-club missing stats null.
- Loan/parent club transfer aggregation explicitly audited, especially Chelsea Chalobah and Villa Rashford, both omitted rather than attributing totals falsely. Long-term injured Man City Rodri with only 1 league start omitted.
- Unverified in official second source: player-by-player starts/apps, DOB; match-by-match most-played position 0/162 fully audited. Multirole players/Palace 3-4-2-1 require role confirmation.
- Full roster, original/Korean names, birthdays, grades, rankings, individual reasoning and sources at audit/PLAYER_PREMIERLEAGUE_2024-25_DRAFT_REVIEW.md.
- Structural CI, GH Pages build/deployment and actual browser QA remain separate steps. Do not move to PL 2025-26 without next instruction.


## PL 2025-26 DRAFT — 2026-11-02
- Actual UEFA 2026-27 nine clubs: five UCL (Arsenal, Man City, Man Utd, Aston Villa, Liverpool); UEL (Bournemouth, Sunderland, Crystal Palace by UECL title); UECL Brighton.
- League best XI working 4-2-3-1; PL official 2025-26 full 760-start formation frequency still OPEN, not invented.
- 164 newly selected player DRAFT records, 99 starting roles, 65 backups; entire rank 1..N and 4-2-3-1 proposed 11.
- Assessment 2023-24/2024-25/2025-26 10/30/60 qualitative tiers, Sunderland previous seasons were in Championship, historical PL values explicitly null.
- Club-specific corrected transfer snapshots: Bournemouth Semenyo 20/20 10G3A, Palace Guehi 20/20 2G2A, Palace Jorgen Strand Larsen 12/14 3G0A. No combined two-club data for these player records.
- Most-player official match starts, individual DOB 2nd source, match-by-match primary position remain open; source mirrored PL stats cannot be treated as independent corroboration.
- All player rankings/Best XI user UNAPPROVED; season JSON status DRAFT. audit/PLAYER_PREMIERLEAGUE_2025-26_DRAFT_REVIEW.md.



## La Liga 2019-20 source-led DRAFT checkpoint — 2026-11-04
- Actual **2020-21 European entrants verified** from UEFA 2020-21 historical UCL/UEL group participants: Real Madrid, FC Barcelona, Atlético de Madrid, Sevilla (UCL); Villarreal, Real Sociedad, Granada (UEL). Reused previously verified 2019-20 final 20-team standings/crests unchanged.
- Peer-reviewed season-era **La Liga modal 4-4-2**, confirmed as most-used in 2017-18 to 2020-21 study (https://pmc.ncbi.nlm.nih.gov/articles/PMC10407311/); exact standalone 2019-20 380-game frequency remains independently unrecounted.
- New **132 source-nominated 2019-20 player records** across 7 clubs, 77 nominal 11-person team starters, 55 backups. Each season current club BDFutbol PM/SM/G matched manually once; 2017-18 and 2018-19 prior-DRAFT pointers used only to populate some biographical data and unverified retrospective slots, not to choose new nominees.
- 132/132 provisional S–C tiers and continuous within-position ranks; **13 tentative World Class**, **39 League Top Class including World Class**; unapproved 4-4-2 Best XI.
- **DRAFT / UNAPPROVED**: DOB 64 taken from earlier unverified DRAFT, **68 intentionally null**; independently two-source DOB complete **0/132**, current season individual starts/goals double-source **0/132**, full position match-by-match census **0/132**, independent individual three-season comparative quality **0/132**. Explicit positional hazards in Atlético wide midfield/Correa/Llorente, Barcelona RB, Sociedad RW, Villarreal striker/CAM, Granada Fede Vico.
- One current season JSON, one 132-player Markdown audit, one structural Node validator, one Chromium branch test and one Actions workflow on a separate PR branch. Existing prior seasons and site UI/champion markers/crests untouched.
- CI/PR status and actual GitHub Pages deployment/browser verification must be reported separately after execution; do NOT treat structural PASS as historical fact proof. Stop before La Liga 2020-21.
- Complete audit: `audit/LALIGA_2019_20_RATED_SOURCE_DRAFT_2026-11-04.md`.


## La Liga 2020-21 — source-led provisional DRAFT checkpoint (2026-11-04)
- Seven **actual 2021-22 UEFA entrants** verified: UCL Atlético, Real Madrid, Barcelona, Sevilla, Villarreal (via **2020-21 UEL trophy**, although domestic seventh); UEL Real Sociedad and Betis. UEFA group list sources in season JSON/report. Preserved verified 2020-21 standings and existing crests.
- Peer-reviewed 2012-2021 La Liga study establishes **modal 4-4-2** from 2017/18 through 2020/21. Team-specific 3-5-2 Atlético, Barça midseason 3CB, Sevilla/Madrid/Villarreal 4-3-3, Sociedad/Betis 4-2-3-1 handled with role approximation notes.
- Fresh club-by-club **128** candidates from 2020-21 BDFutbol PM/SM/G team pages: **77 provisional starters (7 x 11), 51 alternates**, all single primary position and role cap, no duplicated individuals. Each team candidate dataset freshly constructed without importing old nomination list.
- **128 tentative tiers and 1..N position rank**, **16 World Class S/A+**, **48 League Top Class S/A+/A/A- (includes World Class)**, one **proposed_unapproved 4-4-2 Best XI**.
- 2020-21 most weight; 2019-20 then 2018-19. Older season DRAFT values only used as retrospective pointers and birthday strings; **40 DOB null**, 88 older DRAFT DOB not independently double verified. Current single-source BDFutbol appearances/starts/goals not second-sourced; genuine match majority positions 0/128 fully audited; complete individual qualitative comparison across the 3-year period **not independently completed**.
- Explicit risk inventory notes Atlético 3CB/LWB, Barça split 3CB, Real Madrid Lucas Vázquez RB, Sevilla Papu Gómez LM/RM/CAM ambiguity, Betis Canales RM/CM, Villarreal Rulli only 2 league starts (but Europa final starter), Sociedad Silva injury role.
- New season JSON, complete Markdown audit, Node validator, Chromium five-tab test, Actions workflow. No past season JSON, original app JS/CSS, standings verification data, crest sources, championship marker modified.
- **Keep historicalFactVerification=false and userApproved=false.** Track GitHub CI, PR merge, Pages deployment and live Chromium separately; do not call structural PASS historic verification.
- Stop at 2020-21, do not start 2021-22 until explicit user instruction.


### La Liga 2020-21 PR #51 CI and main integration status — 2026-11-04
- Pull Request #51: https://github.com/wjdduddlf112/footballarch/pull/51
- Structural checks + local Chromium five-tab/player-modal checks **PASS**, verified GitHub Actions PR run https://github.com/wjdduddlf112/footballarch/actions/runs/41790519190 (both jobs completed success).
- PR squash-merged into main: commit `8310da3ebb51ad58152bbf02ed5a8befee18c532`. GitHub connector fetched `data/laliga-2020-21.json` on main and confirmed 128 DRAFT candidates, seven UEFA qualifiers, 4-4-2, `userApproved=false`.
- Separate live Pages workflow file `.github/workflows/verify-laliga-2020-21-live.yml` exists on main; **live GitHub Pages deployment state and actual live Chromium result NOT independently observed** at this checkpoint. Do not conflate local branch QA success with published live QA.
- Historical DOB/role/three-season independent accuracy limitations remain OPEN, unchanged.


## La Liga 2021-22 source-led DRAFT (2026-11-04)
- **Seven actual 2022-23 European participants:** 4 UCL (Real Madrid/Barcelona/Atlético/Sevilla), 2 UEL (Betis/Real Sociedad) and UECL (Villarreal). Actual UEFA 2022-23 competition lists used; historical 2021-22 top 20 standings and club crest source left untouched.
- **Formation 4-4-2 PROVISIONAL**: peer-reviewed public study of 2019-20 through 2021-22 La Liga/Segunda says 4-4-2 among most-used forms but does NOT establish single 2021-22 La Liga rank. Avoid treating 2012-2021 study as coverage of 2021-22. Club individual formations preserved as tactical proxies.
- **131 fresh candidates** from 7 distinct BDFutbol 2021-22 team PM/SM/G season lists. 77 nominal starter positions (=7x11), 54 substitutes. Single-season values directly transcribed from 2021-22 eligible clubs; no old player nomination roster used to select eligibility.
- 131/131 provisional tiers and within-position continuous ranks; 8 World Class S/A+, 49 League Top Class including World Class; working 4-4-2 Best XI. User final approval FALSE.
- 2019-20/2020-21/2021-22 weighting present season greatest, earlier seasons less. Previous-season individual quality independently unverified; previous DRAFT league numbers not proof of form. **69 birthdates null**, 62 borrowed provisional earlier DRAFT. Two-source DOB completion 0/131, 2021-22 independent PM/SM/G crosscheck incomplete, match-by-match primary position 0/131 independently certified.
- Risks: Atlético 3-5-2 Carrasco/Llorente wingback roles, Barcelona second-half Xavi transfers and roles, Betis Canales vs Fekir allocation, Villarreal Gerard Moreno reduced availability, Sevilla mixed wide positions, Sociedad Oyarzabal limited to 22 league appearances. Season standalone 4-4-2 mode pending.
- New 2021-22-only season JSON, 131-player readable full audit report, 2021-22 dedicated Node validator, five-tab Chromium browser check and GitHub Actions CI. No previous seasons, standings verification JSON or main UI/emblem/champion marker altered.
- Review file: audit/LALIGA_2021_22_RATED_SOURCE_DRAFT_2026-11-04.md
- CI vs historical evidence vs live deployment tracked separately. Stop before 2022-23 pending new user instruction.


### La Liga 2021-22 PR #52 final CI and main integration (2026-11-04)
- Reviewable player roster, 131 tiers/ranks, 4-4-2 provisional Best XI, 7 actual 2022-23 UEFA participants and all 20 historic league standing rows, stored as source-linked DRAFT.
- Structural Node test + existing La Liga standings validator: PASS. GitHub Actions Chromium all five tabs and Best XI/player modal: PASS **after correcting stale 2020-21 Messi test expectation to 2021-22 Benzema**. Passing workflow: https://github.com/wjdduddlf112/footballarch/actions/runs/41792202627 .
- PR #52: https://github.com/wjdduddlf112/footballarch/pull/52 — squash merged into main, commit `339fd99ff16ade240a736ed31ab78ab4bc88c830`.
- The new dedicated GitHub Pages live script/workflow exists on main; public Pages deployment and LIVE Chromium results have NOT been independently observed from the tools used. Must report separate gate as pending.
- Full individual 2019-20/2020-21 weighted qualitative comparisons, two-source DOB for all, actual per-match majority position and current season second-source player stats remain unverified. Still `historicalFactVerification=false`, `userApproved=false`, `bestXiStatus=proposed_unapproved`.
- Stop before La Liga 2022-23; only explicit user continuation authorizes.


## La Liga 2022-23 source-led replacement of DEMO — 2026-11-04
- 2023-24 actual European entrant clubs: **8** (UCL Barcelona, Real Madrid, Atlético, Real Sociedad and Sevilla; UEL Villarreal and Betis; UECL qualifying play-offs CA Osasuna). Sevilla entered UCL from 2022-23 Europa League trophy despite domestic league 12th; UEFA 2023-07-25 restored Osasuna's Conference entry.
- Existing 2022-23 source file was explicitly **demo, 161 sample players** and was NOT a valid historical evaluation. Replaced its user-facing season candidate data with a fresh **151-player provisional BDFutbol-source DRAFT**: 8×11 = 88 nominal starters and 63 positional alternates, each one representative role, at most one backup per role per club.
- **12 tentative WC (S, A+) / 55 League Top Class incl WC (S, A+, A0, A-)**, all 151 ranks 1..N by ten user-defined positions; a *proposed_unapproved* 4-4-2 tactical XI. **The true 2022-23 La Liga standalone modal formation has NOT been verified**; a 4-4-2 proxy must not be represented as independently established.
- Current 2022-23 club PM/SM/G manually read from eight distinct BDFutbol season club tables, not imported from the former 2022-23 demo. Goalkeeper source G negative = conceded, never count as goals scored. Full table and BDF URLs in audit/LALIGA_2022_23_RATED_SOURCE_DRAFT_2026-11-04.md.
- DOB: 146 strings carried from older provisional 2020-21/2021-22 DRAFT or previous 2022-23 demo, **5 null**, and **0/151 completed independent two-source DOB checks**. Older two years' player-level independent three-season comparison, match-by-match majority positions, independent current season second-source PM/SM/G crosschecks remain incomplete; these are unapproved qualitative ratings, not historical proof.
- Tactical risks: Barcelona Gavi left midfielder/CM and Koundé RB/CB, Real Madrid Camavinga LB/CM and Valverde CM/RW, Atlético Carrasco wingback and Hermoso CB, Sociedad diamond, Betis Ayoze wide/forward, Sevilla Ocampos midseason return and Europa success separate from Liga form. No direct club achievement score bonus.
- Code changes: ONLY 2022-23 season JSON, 2022-23 full audit, season-targeted Node structural + Chromium/browser + live Pages workflow/test, and this progress log. Existing 1999-2022 standings, club crests, all earlier season JSON, UI and C/championship indicators untouched.
- User approval and historical accuracy flags remain FALSE. Keep PR structural/local browser status separate from live Pages deploy verification. Stop before La Liga 2023-24 until explicit instruction.


### La Liga 2022-23 PR #53 merged and PR CI result — 2026-11-04
- PR #53 https://github.com/wjdduddlf112/footballarch/pull/53 — source-led 151-person DRAFT replacement of the pre-existing 161-player demo; merged via squash into main **6a1e368c04778880f1c6bd6cd112c6f3d7f512e6**.
- GitHub Actions run https://github.com/wjdduddlf112/footballarch/actions/runs/41794422524 **COMPLETED SUCCESS**: structural Node check and local Chromium five-tab/player-detail check both successful. Historical 2022-23 format/club ranking checks structural only.
- Verified via GitHub fetch on main that season `data/laliga-2022-23.json` exists with 151 nominees / 88 starters / 63 backups / 8 actual 2023-24 UEFA clubs / 4-4-2 representative proxy / 12 WC / 55 league-top. Flags stay `status=draft`, `userApproved=false`, `historicalFactVerification=false`.
- Public Pages live workflow exists `.github/workflows/verify-laliga-2022-23-live.yml`; **no independently observed live production Pages Chromium success/deployment at this checkpoint**, despite PR branch Chromium success. Keep production gate pending.
- 2022-23 single-season most common formation, independent current individual stats corroboration, match-majority positions, 2020-21 + 2021-22 full player-quality comparisons and DOB two-source checks remain OPEN. 4-4-2 and all positional/tier/Best XI choices are UNAPPROVED.
- STOP; user must explicitly request La Liga 2023-24 before any work on that season.
