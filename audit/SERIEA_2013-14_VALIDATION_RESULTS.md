# Serie A 2013-14 — 실제 검증 실행 결과 (DRAFT)

- 검토일: 2026-11-08 Asia/Seoul
- 현재 시즌: 2013-14; lookback: 2011-12 lower, 2012-13 intermediate, 2013-14 higher
- 상태: `draft_unapproved`, Best XI `proposed_unapproved`. User approval NOT yet received.

## 1. GitHub Actions 실제 자동 검증과 Pages 배포

| 실행 | 결과 | GitHub 증거 |
|---|---|---|
| `node scripts/verify-seriea-2013-14.mjs` 실행 (GitHub Actions Node.js 22) | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42489359343 |
| GitHub Pages `pages build and deployment` (same CI workflow commit) | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42489359565 |
| 새 DRAFT JSON/상세 보고서에 대한 이전 Pages 빌드 | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42489278413 |
| 외부 브라우저로 실제 Pages 열어 시즌 테이블·상세·필터·Best XI 도형 확인 | **NOT PERFORMED; live `github.io` URL not accessible in tool environment** | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2013-14 |

GitHub Pages 빌드 성공은 사용자의 브라우저에서 실제로 시즌 목록, 필터, 축구장 표시 및 인물 상세 렌더링이 정상 동작했음을 **증명하지 않는다**. 3-5-2 피치 UI와 Serie A 티어 상세 표는 이전 시즌에서 코드 추가되어 있고, 이번 시즌에는 추가 코드 수정 없이 JSON을 같은 스키마로 작성했다.

## 2. 구조 검증에 실제 포함된 항목

GitHub에서 다시 읽은 `data/seriea-2013-14.json`을 대상으로 실제 Node.js 워크플로가 모두 통과:

- 시즌 `2013-14`, 다음 UEFA `2014-15`, draft-unapproved의 정확한 상태.
- **6개 2014-15 실제 UEFA 출전 팀만 포함**: Juventus, Roma, Napoli, Fiorentina, Inter, Torino. 2013-14 리그 6위 Parma는 UEFA 라이선스가 없었고 7위 Torino가 실제 출전함. Milan 8위 미진출. 20개 팀×38라운드 리그 테이블 형태.
- 총 **106명 선수**: Juventus 17, Roma 18, Napoli 20, Fiorentina 18, Inter 17, Torino 16.
- 106명 전원 고유한 playerId + 원어/한국어 이름, 생년월일 `YYYY-MM-DD`, 소속 원어명과 해당 시즌 후보가 사용 가능한 포지션 등록. 유럽 미진출 구단 선수 없음.
- **2013-14 현재 Serie A 리그 출전·선발·분·골 필드 106명 전원** 채웠고 0경기 후보 없음. `leagueStarts <= leagueAppearances <= 38`; 각 선수 세 시즌 `records['2013-14']`와 현재 수치 일치. 현재 도움 106명 모두 `null` (개별 출처 대조되지 않았으므로 허위 0 입력하지 않음).
- 구단당 시즌 대표 XI 11명 = 총 **66명의 명목상 주전**, 각 구단+포지션 보조 인원 0~1명. Juventus/Inter/Torino은 대표 3-5-2의 센터백 3명, LB/LWB 및 RB/RWB 구별.
- 같은 선수 중복 등록 금지. Torino→Inter 2014 겨울 이적 **Danilo D'Ambrosio는 Torino에서만** 평가; 14 Torino 선발과 8 Inter 선발을 합산하거나 양 구단에 중복 등록하지 않음.
- 10개 포지션 GK, CB, LB, RB, DM, CM, CAM, LW, RW, ST 각각 순위 1..N 연속, 등급 하락 규칙 충돌 없음.
- 티어 분포: **S 4, A+ 17, A0 20, A- 0, B+ 33, B0 26, B- 6, C+/C0/C-/D 0**. 월클(S+A+) 21, 리그 탑(S+A++A0+A-) 41.
- Best XI 11명 서로 다른 후보, 소속/등록 포지션 일치, **3-5-2** (GK1 CB3 LB1 RB1 DM1 CM2 ST2), 사용자 미승인.

## 3. 독립 역사적 경기력 검증에서 여전히 남은 항목

- **3시즌 각 선수의 경기력+동포지션 경쟁자+역할에 대한 독립 전수 감사**: **0/106**. 현재 선수 활동 범위와 실제 경기 기여에 대한 정성적 잠정 분석은 했지만, 모든 선수의 경기별 전술 영상/지표와 전 시즌 수치를 완전히 이중 감사하지 않았다.
- 2011-12/2012-13 **기존 미승인 DRAFT로부터 73개 이전 시즌 출전 셀 연결**은 별도 검증 완료로 계상하지 않는다. **8개 선행 시즌의 개인 출전/골 기록**은 Torino official Cerci(2), Opta Analyst Immobile(2), FBref Tevez(2), FBref Gervinho(2)에서 원자료 구체적으로 확인.
- DOB 106개 문자열이 있으나 **106명 전원에 대해 각기 다른 출생자료 2개로 독립 대조 검증 완료는 아님**.
- 모든 현재 시즌 `leagueAssists=null` (일부 주요 공격수 Cerci·Gervinho FBref 공동 10도움과 De Sanctis 21 클린시트 개별 기록은 개인 등급 정성 근거로만 사용); 통일된 소스에서 **모든 106명의 도움 전수 교차검증 0/106**.
- 2013-14 각 선수 **38경기 경기별 최빈 주 포지션/좌우 실제 역할**은 독립 수치화 안 됨; "3-5-2"는 Juventus, Inter, Torino 등 당대의 실재하는 3백 전술에 근거하지만 리그 전체 380경기의 **가장 자주 사용된 포메이션임을 정량 증명하지 않았다**.
- BDFutbol의 2013-14 선수별 Liga row (PM/SM/Min/G)와 FBref 등 두 번째 제공자의 정확한 분·선발 차이를 106명 전원 2중 검증 완료하지 않았다. BDFutbol GK `G<0`는 팀 실점값, 선수 득점은 0으로 입력했다.
- `S` ~ `D` 등급, 개인 서열, 월드/리그탑 구분, Best XI는 사용자 승인 전까지 **가설적 잠정 평가**. 팀 우승 점수 가산하지 않았다.
- GitHub Pages 공개 사이트 접근을 시도했으나 이 환경의 외부 web reader가 `github.io` URL과 season JSON에 접근하지 못했다. **실제 시각 UI 검증 완료로 표시하지 않는다**.

## 4. 주요 사례 역사적 교차 확인

1. Parma 6위 라이선스 결격 → Torino 7위 UEL 실제 참가: [Sky Sports 2014-05-29](https://www.skysports.com/football/news/9330931/parma-will-not-compete-in-the-europa-league-next-season-after-losing-an-appeal), [UEFA 2014-15 UEL clubs](https://www.uefa.com/uefaeuropaleague/history/seasons/2015/clubs/).
2. Torino official 2013-09-01 match 3-5-2 with **Darmian right, D'Ambrosio left**: [Torino FC](https://www.torinofc.it/news/01/09/2013/atalanta-torino-le-formazioni-ufficiali_3098).
3. Torino Cerci (2011-12 Fiorentina22/5; 2012-13 Torino35/8; 2013-14 Torino37/13) [Torino FC official career record](https://www.torinofc.it/prima-squadra/2013-2014/Centrocampisti/cerci-alessio); 2013-14 Serie A co-leading 10 assists [FBref league summary](https://fbref.com/en/comps/11/2013-2014/2013-2014-Serie-A-Stats).
4. Immobile (2011-12 Pescara Serie B37/28; 2012-13 Genoa Serie A33/5; 2013-14 Torino Serie A33/22) [Opta Analyst player career](https://theanalyst.com/players/6445/ciro-immobile/career).
5. Tevez (2011-12 Man City13/4; 2012-13 Man City34/11; 2013-14 Juventus34/19) [FBref](https://fbref.com/en/players/c1a26d43/Carlos-Tevez).
6. Gervinho (2011-12 Arsenal28/4; 2012-13 Arsenal18/5; 2013-14 Roma33/9+10 assists) [FBref](https://fbref.com/en/players/e468c053/Gervinho).
7. Serie A most goals 2013-14 Immobile22, most assists Cerci/Gervinho10, most clean sheets De Sanctis21: [FBref league 2013-14](https://fbref.com/en/comps/11/2013-2014/2013-2014-Serie-A-Stats).

## 5. GitHub artifacts

- [2013-14 full 106-player DRAFT JSON](https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2013-14.json)
- [106-player club and position tables/tiers/Best XI full report](https://github.com/wjdduddlf112/footballarch/blob/main/audit/SERIEA_2013-14_DRAFT_FULL_REPORT.md)
- [Node verification script](https://github.com/wjdduddlf112/footballarch/blob/main/scripts/verify-seriea-2013-14.mjs)
- [GitHub Actions workflow](https://github.com/wjdduddlf112/footballarch/blob/main/.github/workflows/verify-seriea-2013-14.yml)
- [Actual validation run](https://github.com/wjdduddlf112/footballarch/actions/runs/42489359343)
- [Pages same-code commit deployment](https://github.com/wjdduddlf112/footballarch/actions/runs/42489359565)

**작업 범위: 2013-14 only**. 다음 시즌 2014-15 미실행, 본 시즌 승인 미수령.
