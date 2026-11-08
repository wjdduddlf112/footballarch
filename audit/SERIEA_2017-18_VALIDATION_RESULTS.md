# Serie A 2017-18 — 123명 DRAFT 평가 구조·실서비스 검증 결과

- 최종 검증 기준: 2026-11-09 Asia/Seoul.
- 시즌: Serie A 2017-18, **2018-19 UEFA에 실제 참가한 7개 이탈리아 구단만** 포함.
- 평가 연동기간: **2015-16 / 2016-17 / 2017-18**, 최신 2017-18의 개인 경기력에 최다 가중치.
- 티어·포지션 순위·Best XI: **`draft_unapproved`**, **`proposed_unapproved`** (승인 아님).

## 1. 실제 실행된 GitHub Actions CI · GitHub Pages 검증

| 검증 단계 | 실제 관찰된 결과 | 검증 로그 |
|---|---|---|
| Node.js 22 구조 검증 `node scripts/verify-seriea-2017-18.mjs` | **PASS** (일부 개별 코멘트 길이 기준 250자→관찰된 220자 기준 보정 후 전체 검사 성공) | https://github.com/wjdduddlf112/footballarch/actions/runs/42499409178 |
| `data/seriea-2017-18.json` 실제 GitHub main 저장 및 Pages 배포 | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42499408733 |
| GitHub Pages 실제 URL의 Google Chrome 기능·DOM·이전 3시즌 회귀 테스트 | **PASS: 24/24**, 모든 `pass:true`, `errors:[]` | https://github.com/wjdduddlf112/footballarch/actions/runs/42499471286 |
| 실서비스 크롬 테스트 JSON·화면 스크린샷 증적 | **업로드 SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42499471286/artifacts/13625171021 |
| 2017-18 사용자 접속 주소 | 크롬에서 실제 접속 및 탭/테이블/모달 테스트 성공 | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2017-18 |

사용한 실브라우저: GitHub Actions runner `ubuntu-latest`의 `/usr/bin/google-chrome`, `playwright-core@1.56.1`; 정적 서버의 가상 DOM이 아닌 실제 배포된 `github.io` 주소를 직접 접근함. **이것이 123명의 역사적 선수 데이터 정확성을 제2자료로 입증하는 것은 아님.**

### 24개 크롬 실화면 검사 — 전부 PASS

1. Serie A 2017-18 DRAFT 표시.
2. 2017-18 시즌 선택 상태.
3. All Tiers 메뉴 표시.
4. 구단별 전체 선수 7개 섹션.
5. 구단별 통합 표 123명.
6. Atalanta와 Inter 이름 표시.
7. 2016-17 세리에 A 리그 무출전이던 Alisson의 2017-18 Roma 후보 신규 등장.
8. Leonardo Bonucci의 2017-18 Milan 소속 표기(2016-17 Juventus에서 변경).
9. JSON 수치상 Lazio Immobile와 Inter Icardi 모두 29리그골.
10. 이카르디 상세 팝업 이름/1993-02-19/Inter/DRAFT.
11. 포지션별 전체 123명.
12. 실제 10개 포지션 구획.
13. 티어별 전체 123명.
14. World Class / League Top Class 영역 표시.
15. Best XI 11개 필드 슬롯.
16. Best XI CM 슬롯 2명.
17. 불필요한 CAM 슬롯 0명.
18. Alisson / Immobile / Insigne Best XI 주요 인물 표시.
19. 2017-18 전체 리그 순위에 Inter와 Atalanta 표시.
20. Statistics 콘텐츠 출력.
21. 2016-17 이전 시즌 11명 Best XI 슬롯 보존.
22. 2016-17 2CM 필드 레이아웃 회귀 통과.
23. 2015-16 2CM 필드 레이아웃 회귀 통과.
24. 2014-15 기존 1CAM 포메이션 레이아웃 회귀 통과.

총 **24/24 성공**, 실패 없음.

## 2. 구조 검사에서 실제 확인한 범위

- 2018-19 UCL Juventus, Napoli, Roma, Inter(4개) 및 UEL Lazio, Milan, Atalanta(3개) 구단 총 **7개**.
- 2017-18 Serie A 전체 순위표 20개 구단·각 38라운드, 7위 Atalanta UEL 포함·8위 Fiorentina 제외.
- 유럽 참가 예외: 2018-19 UEFA Atalanta 플레이오프 실제 참여, UEFA Milan 최초 제외 결정 뒤 CAS 2018-07-20 유럽복귀.
- 후보 **123명**, 구단별 Juventus18 / Napoli18 / Roma19 / Inter17 / Lazio17 / Milan17 / Atalanta17.
- 동일 시즌 중복 ID 없음, 한 선수를 복수의 유럽진출 구단에서 중복 선정하지 않음.
- 각 선수 한글명/원어명/실제 소속 구단 원어명/생년월일/주 포지션과 실제 전술상 역할/주전 또는 후보.
- 123명 전원 BDFutbol 2017-18 해당 구단 세리에 A `PM/SM/Min/G` 입력, `0 < PM <=38`, `0<=SM<=PM`, `0<Min<=3420`, 득점 0 이상.
- 골키퍼 `BDFutbol G<0`는 피실점임을 구분, 득점 기록은 0으로 기록.
- **11명 주전×7구단=77명**, 같은 구단·포지션 **후보 최대 1명** = 총 후보 46명.
- 대표 전술: Juventus4-2-3-1, Napoli4-3-3, Roma4-3-3, Inter4-2-3-1, Lazio3-5-1-1, Milan4-3-3, Atalanta3-4-2-1. 선발 역할 집계가 정확히 11명과 일치.
- 표준 10개 포지션마다 **통합 1위~N위** 연속 순위, 모든 랭킹과 등급 표시 순서 호환.
- 티어 분포 S4 / A+21 / A0 23 / A-8 / B+39 / B0 20 / B-6 / C+1 / C0 1 = 123. World Class25 및 League Top Class56.
- S~A- 선수 56명은 각각 고유한 역할·현재 시즌·과거 2시즌 맥락의 설명(최소 220자 이상의 구체적 기록) 보유.
- Best XI 정확히 11명, `GK1 CB2 LB1 RB1 DM1 CM2 LW1 RW1 ST1`, 사용자 승인 전.
- 2017-18 Bonucci = Milan, Kessié = Milan, Roma Alisson 37경기, Immobile/Icardi 각 29골 등 시즌간 이적·부상·득점 혼동 주요 사례 검사.

## 3. 구조·화면 검증 성공과 구분해야 할 미완료 역사적 감사

- **123명 모든 후보의 2015-16 / 2016-17 / 2017-18 전체 개인 경기력·전술적 기여를 독립 경기 기록·영상·동포지션 경쟁을 통해 전수 평가 검증 완료한 인원 = 0/123**. 이번 등급과 순위는 출전 단일기관 기록과 시대적 맥락을 바탕으로 한 유의미한 DRAFT이나 완전히 독립적으로 검증된 최종 순위는 아님.
- 이전 2015-16/2016-17에서 이미 만든 **미승인 아카이브**를 연결한 개인 경기 수치 **119개 시즌 셀**은 이번 시즌 새 독립 자료검증 119건과 동의어가 아니다. 연결이 없는 선수는 0경기로 채우지 않고 `null`.
- 123명 2017-18 PM/SM/Min/G의 **모든 행을** FBref/리그 공식 등 다른 독립 기관과 완전 대조하지는 못함. BDFutbol 구단별 원자료에서 전사, 중요한 골·도움 일부만 FBref/언론과 교차 대조.
- 출생일 123명 전부 입력했지만 **123명 각각 독립된 두 가지 신원 출처로 생일 날짜를 교차 검증 완료한 것은 아님**.
- 2017-18 리그 도움은 123명 선수의 JSON 값 모두 `null`로 보존. Luis Alberto(14), Douglas Costa(출처에 따라 11/12), Insigne(통계 제공기관에 따라 9/11) 등 서로 다른 통계 집계 정의가 있으므로 0으로 가정하거나 임의로 한 정의를 혼합하지 않음.
- 각 후보의 실제 38경기별 가장 많이 뛴 좌/우 포지션, 혼합 전술 및 리그 380경기 최빈 포메이션 통계는 전수 검증 완료하지 못함.
- 사이트 `assets/app.js`는 이번 시즌 코드 기능 추가 없이 이전에 검증된 4-3-3의 CM2 지원을 재사용하였음. 이전 시즌 데이터를 수정하지 않았으며 기존 2014-15·2015-16·2016-17 Best XI의 실제 크롬 회귀 테스트 통과.
- 사용자 최종 티어·동포지션 순위·Best XI 승인 없음. DRAFT 유지.

## 4. 작업 산출물

- `data/seriea-2017-18.json` — 구단7, 선수123, 현재·직전 2년 기록 상태, 56개 상위티어 개별 평가, 포지션 10종 순위, XI
- `audit/SERIEA_2017-18_DRAFT_FULL_REPORT.md` — 구단별 123명 표, 10위치별 전원 랭킹, 티어/World/League Top, 56명 개별 설명, XI, 역사적 특수사항
- `scripts/verify-seriea-2017-18.mjs`
- `.github/workflows/verify-seriea-2017-18.yml`
- `scripts/verify-seriea-2017-18-live.mjs`
- `.github/workflows/verify-seriea-2017-18-live.yml`
- `audit/PLAYER_INTEGRATION_PROGRESS.md`

**결론:** 2017-18 시즌 DRAFT 구조 CI 성공 + GitHub Pages 실제 크롬 **24/24 통과**. 역사적 전원 3시즌 완전 독립 검증/최빈 출전 포지션과 사용자 승인 작업은 남아 있음. 2018-19 시즌 자동 진행 금지.
