# Serie A 2016-17 — 실제 구조·GitHub Pages·크롬 검증 보고 (DRAFT)

- 검증 날짜: 2026-11-09 Asia/Seoul
- 평가 범위: **2014-15 < 2015-16 < 2016-17** 개인 기량 최근 시즌 우선
- 평가 상태: **draft_unapproved**, Best XI **proposed_unapproved**, 사용자 최종 승인 **없음**
- 2017-18 UEFA 실제 참가 6개 구단: Juventus, Roma, Napoli (UCL), Atalanta, Lazio, Milan (UEL)
- 2016-17 Serie A 선수 후보: **106명**, 주전 66명 + 포지션별 최대 1명 후보 총 40명

## 1. 실제 실행된 Actions 및 GitHub Pages 배포

| 실행/검증 | 실제 결과 | 객관적 기록 |
|---|---|---|
| Node 22 정적 데이터 무결성 스크립트 `scripts/verify-seriea-2016-17.mjs` | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42497766568 |
| 위 JSON 및 검증 스크립트 기준 Pages 배포 | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42497766147 |
| **실제 GitHub Pages를 Google Chrome으로 열어 21개 기능·표시 및 이전 시즌 회귀 검사** | **SUCCESS 21/21** | https://github.com/wjdduddlf112/footballarch/actions/runs/42497874524 |
| 동일 크롬 실검사 당시 GitHub Pages 배포 | GitHub Pages 최신 성공 버전 기준 직접 브라우저 실검사 성공 | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2016-17 |
| 실화면 스크린샷 + `result.json` 아티팩트 | **업로드 성공** | https://github.com/wjdduddlf112/footballarch/actions/runs/42497874524/artifacts/13624397050 |

**브라우저 환경**: GitHub Actions `ubuntu-latest`, Google Chrome `/usr/bin/google-chrome`, `playwright-core@1.56.1`, headless viewport 1440×1000. 실제 GitHub Pages `github.io` URL을 방문했다.

### 실제 21개 Chrome 검증 결과 — 전부 PASS

1. 2016-17 DRAFT badge.
2. 시즌 2016-17 선택 유지.
3. All Tiers 메뉴 표시.
4. 구단별 All Tiers 표 106명 실제 렌더.
5. 이과인 이름이 대상 선수 표에 존재.
6. Atalanta 이름이 구단별 표에 존재.
7. Serie A 0출전 Alisson이 2016-17 후보 표에 존재하지 않음.
8. 이과인 상세 모달 이름/생년월일/소속 Juventus/DRAFT 표시.
9. 포지션별 전체 표 106명.
10. 티어별 전체 표 106명.
11. Best XI 피치 슬롯 11명.
12. Best XI에서 CM 슬롯 2명.
13. 불필요한 CAM 슬롯 0명.
14. Best XI 핵심 인물 Mertens/Hamšík/Conti 표시.
15. 2016-17 League Table에 Atalanta 표시.
16. Top Class World + League 단락 표시.
17. Statistics 콘텐츠 출력.
18. 이전 2015-16 Best XI CM 2명 그대로.
19. 이전 2015-16 Best XI CAM 0명 그대로.
20. 이전 2014-15 Best XI CAM 1명 그대로.
21. 이전 2014-15 Best XI CM 1명 그대로.

CI 출력 `errors:[]`, 21개 `pass:true`. **21/21 검사는 UI 표본 동작의 성공**이며 브라우저의 모든 가능한 상호작용을 전수 검증했다고 과장하지 않는다.

## 2. 데이터 구조 검증 성공 범위

- 20팀·각 38경기 정규리그 순위표 형태와 유럽 참가자 6팀만 연결. 6위 Milan UEL, 7위 Inter 제외.
- 전체 선수 106명 고유한 ID와 인물(원어명+생년월일) 중복 없음.
- Juventus 17, Roma 15, Napoli 18, Atalanta 19, Lazio 19, Milan 18.
- 전원 생년월일, 한국어명, 원어명, 2016-17 해당 소속 구단 원어명, 해당 시즌 선수 위치 및 주전·후보 등록.
- BDFutbol 2016-17 구단별 실제 세리에 A 선발·출전·분·골 행을 106명 입력. 106명 모두 1회 이상 실제 세리에 A 출전하며 0≤선발≤출장≤38, 0＜출전분≤3420.
- 골키퍼의 BDFutbol 음수 G는 실점임을 확인하고 선수 실제 득점은 0.
- 구단마다 대표 XI 11명, 총 주전 슬롯 66명; 각 구단+포지션별 후보 최대 1명.
- Juventus와 Roma의 대표 4-2-3-1, Napoli/Lazio/Milan 4-3-3, Atalanta 3-4-2-1 구단별 11개 선발 슬롯 정확히 일치.
- 사이트 총 10개 위치별 순위 1위부터 연속, 티어 순서와 모순 없음.
- S 4 + A+ 20 + A0 21 + A- 5 + B+ 27 + B0 17 + B- 11 + C0 1 = 106.
- 월드클래스(S+A+) 24명, 리그 탑급(S~A-) 50명; 50명은 각각 개별 평가 이유 보유.
- Best XI 11명 고유 ID와 실제 등록 포지션 일치. 4-3-3: GK1 CB2 LB1 RB1 DM1 CM2 LW1 RW1 ST1.
- 모든 선수 평가 및 Best XI는 DRAFT로 표기되어 사용자 미승인 상태를 유지.

## 3. 완료하지 못한 독립 역사 검증

**다음 항목을 '검증 완료'로 취급하지 않는다.**

- 106명×3개 시즌의 개인 활동, 동포지션 경쟁·기량 추이 및 경기별 역할의 완전한 독립 질적 검증: **0/106명**. 현재 2016-17 1차 선수 수치와 50명 개별 평가 서술은 '완전한 3시즌 독립 감사'가 아니다.
- 2014-15/2015-16의 기존 **미승인 DRAFT**에서 연결한 개인 시즌 출전 수치 **80건**은 별도 독립 출처로 재검증한 값이 아니다. 해당 자료가 없을 경우 과거 시즌 필드를 `null`로 유지하고 실제 0경기나 0점으로 해석하지 않는다.
- 106명 2016-17 개인 출전·선발·분·골은 BDFutbol 한 개 데이터 제공기관의 구단별 자료에서 전사. 다른 공급기관 FBref/Opta·공식 구단과 행별 전수 2차 대조는 **아직 미완료**. Džeko(29골), Mertens(28골), Higuaín(24골) 같은 일부 주요 기록만 별도 출처 확인.
- 106명 생년월일은 기입됐으나 전원에 대해 서로 다른 두 개의 신원자료와 교차 검증 완료는 아님. Jasmin Kurtić DOB는 Opta Analyst/Transfermarkt 두 소스에서 확인해 보완.
- 2016-17 도움 기록은 전체 `null` — 실제 0도움으로 기재하지 않음.
- Atalanta의 Conti RWB, Spinazzola LWB, Gómez LF/SS 및 Lazio/Roma/Juventus/3백-4백 역할 이동에 대한 38라운드별 최빈 위치 전수 검증은 미완료.
- 세리에 A 20구단×38경기의 실제 최빈 포메이션 통계는 독립 확정되지 않음. Best XI 4-3-3과 팀별 포메이션은 잠정 시대적 대표 모델.
- 2014-15 / 2015-16 기존 시즌 선수 평가·포메이션 및 DRAFT 상태는 변경하지 않음.
- 사용자 최종 티어/동일 티어 내 순위/Best XI 승인 **없음**, 2017-18 시즌 자동 작업 금지.

## 4. 결과물

- `data/seriea-2016-17.json` — 106명 한글·원어명/생년월일/원어 소속/포지션/티어/3시즌 검토 메타·Best XI
- `audit/SERIEA_2016-17_DRAFT_FULL_REPORT.md` — 여섯 팀 전체 106명 표 + 위치별 전원 순위 + 50명 개별 이유 + Best XI + 미확인 항목
- `scripts/verify-seriea-2016-17.mjs` — 정적 스키마 감사
- `.github/workflows/verify-seriea-2016-17.yml` — 정적 감사 CI
- `scripts/verify-seriea-2016-17-live.mjs` — 실서비스 Chrome 21개 DOM/기능 및 이전 두 시즌 회귀 검사
- `.github/workflows/verify-seriea-2016-17-live.yml` — 실화면 CI 실행
- `audit/PLAYER_INTEGRATION_PROGRESS.md` — 작업 이력

**결론**: 2016-17 DRAFT 데이터 저장·구조 CI 및 실제 GitHub Pages Google Chrome **21/21 성공**. 전 선수의 3시즌 독립 역사 감사와 최종 승인 **미완료**.
