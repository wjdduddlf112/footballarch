# Serie A 2015-16 — 실제 검증 실행 결과 (DRAFT)

- 기준: 2015-16 Serie A
- 개인 평가 참고 시즌: 2013-14 (낮은 비중) / 2014-15 (중간) / 2015-16 (높은 비중)
- 선수 평가 및 Best XI: `draft_unapproved`, `proposed_unapproved` — 사용자 확정 지시 없음
- UTC / KST 기록일: 2026-11-09 Asia/Seoul

## 1. 실제 Actions·배포 성공 내역

| 검증 | 실제 결과 | 확인 주소 |
|---|---|---|
| Node 22 `scripts/verify-seriea-2015-16.mjs` (116명/6구단/11슬롯/티어/랭킹/Best XI) | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42495944917 |
| 같은 파일 버전의 GitHub Pages 정적 사이트 배포 | **SUCCESS** | https://github.com/wjdduddlf112/footballarch/actions/runs/42495945132 |
| `data/seriea-2015-16.json` GitHub main에 실제 반영 | **YES** | https://github.com/wjdduddlf112/footballarch/blob/main/data/seriea-2015-16.json |
| 2015-16 홈페이지 `?league=seriea&season=2015-16` 실브라우저 DOM 검증(클럽·포지션·티어 필터, 선수 상세, Best XI) | **NOT PERFORMED** — 현재 웹 도구에서는 github.io 직접 URL 접근 실패 | https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2015-16 |

GitHub Actions와 Pages 성공은 브라우저 화면 기능 검증을 **증명하지 않는다**. 다른 시즌을 건드리지 않기 위해 HTML/CSS/그 외 데이터는 보존하였으며, `assets/app.js`에는 **4-3-3 Best XI가 CM 2명 + DM 1명인 경우** CAM 표시 좌표를 두 번째 CM으로 재사용하는 조건 분기만 추가했다. 그 밖의 기존 4-3-3은 변하지 않도록 설정했다.

## 2. 자동 구조 검사 검증 범위

- 2015-16→2016-17 유럽대항전 참가 연도 정확히 연결.
- 실제 참가 6개 구단만: Juventus/Napoli/Roma (UCL, Roma는 UCL 플레이오프 뒤 UEL), Internazionale/Fiorentina/Sassuolo (UEL). 7위 Milan 제외.
- 20팀 × 38경기 최종 리그 순위표 구조와 Sassuolo 6위의 UEL 표시 유지.
- 후보 **116명**: Juventus 18, Napoli 19, Roma 20, Inter 20, Fiorentina 19, Sassuolo 20.
- 모든 후보 고유 ID, 한글명·원어명·생년월일(YYYY-MM-DD)·소속 원어 구단명·주전/후보 분류.
- 116명 전원 2015-16 BDFutbol의 해당 구단 세리에 A PM/SM/Min/G를 전사; `app>0`, `0<=starts<=app<=38`, `minutes>0`, 골 0 이상.
- GK BDFutbol 음수 G는 실점이지 골이 아니므로 선수 실제 득점 0으로 변환.
- 모든 선수는 하나의 포지션에만 배정, 윙백은 전술 본래 역할(`originalTacticalRole`) 보존.
- 구단당 대표 선발 정확히 11명 × 6 = 66; 각 구단+포지션 후보 0~1명.
- Juventus는 3명의 주전 CB·LWB/RWB·투톱, Fiorentina는 3명의 주전 CB·윙백·CAM/원톱. Napoli/Roma/Inter/Sassuolo는 4-3-3.
- GK/CB/LB/RB/DM/CM/CAM/LW/RW/ST 순위는 그룹별 1..N 연속, 티어 내 별도 순위.
- 티어 S 3, A+ 15, A0 19, A- 10, B+ 25, B0 27, B- 9, C+ 7, C0 1, C- 0, D 0.
- World Class 18, League Top Class 47.
- 상위 47명에 대해 개별 전술·공격·수비 기여와 3시즌 맥락 판단 근거 작성.
- Best XI 정확히 11명의 고유 선수, **4-3-3 GK1 CB2 LB1 RB1 DM1 CM2 LW1 RW1 ST1**, 두 CM 모두 본래 CM 분류를 보존.
- 모든 티어·랭킹·Best XI는 최종 승인 전 DRAFT.

## 3. 역사 자료 교차 검증과 구별되는 미완료 사항

- 전체 116명의 **3개 시즌 전체 개인 퍼포먼스 질적 비교를 독립 소스로 전수 감사**한 인원 = **0/116**. 당해 시즌 한 자료에 의한 실제 출전 데이터 확인과 다르다.
- 2013-14/2014-15 앞선 미승인 DRAFT에서 연결한 개인 시즌별 숫자 슬롯 **88**개는 별도 독립 검증 완료 수가 아니다. 다른 리그의 이전 소속 기록(예: Juventus Khedira, Dybala, Napoli Allan, Roma Salah, Inter Miranda, Sassuolo 전원)까지 개별 비교 필요.
- 116명 현재 시즌 수치가 BDFutbol 1개 통계 공급자에 의해 전사되었으며 FBref/공식 리그 등과 행별 이중 대조가 아직 완료되지 않음.
- 116명 DOB는 값이 있지만 116건 개별 서로 다른 2개 독립 생년월일 출처 대조는 수행되지 않음. DOB 기입이 신원 완전 검증을 의미하지 않는다.
- 모든 116명의 리그 도움은 `null`; 오기재나 누락을 0으로 전환하지 않음.
- Fiorentina Bernardeschi(RWB), Juventus Cuadrado(RWB), Roma Perotti(가짜9번), Inter 공격진과 같은 시즌 38경기 실제 최빈 포지션은 전수 확인되지 않음.
- 리그 380경기 전체 실제 최빈 포메이션 데이터도 아직 확보되지 않아 4-3-3 대표 포메이션은 잠정.
- 상위 47명 개별 설명은 역사적 맥락을 반영한 **잠정 정성 평가**, 전체 3시즌 독립 통계·영상 종합 평가 완료로 보고하지 않음.
- 이전 2014-15 및 타 시즌 `draft_unapproved`를 승인하거나 변경하지 않음.
- 다른 시즌에서 별도로 발생한 일부 GitHub Actions Playwright 설치/라이브 타임아웃 실패는 이 시즌 Node.js 2015-16 검증 성공과 독립된 문제. 이 환경에서 실화면 브라우저 검증 미완료 상태를 유지한다.

## 4. 반영 파일과 보고

- `data/seriea-2015-16.json`: 새 116명 및 2016-17 유럽대항전 실제 출전 구단
- `audit/SERIEA_2015-16_DRAFT_FULL_REPORT.md`: 6개 구단 전체 명단, 10개 포지션 순위, 티어/World Class/League Top Class, 11인 XI, 상위 47명 개별 근거
- `scripts/verify-seriea-2015-16.mjs`: Node.js 구조 감사
- `.github/workflows/verify-seriea-2015-16.yml`: GitHub Actions 실행
- `assets/app.js`: 기존 레이아웃 유지, 자연스러운 4-3-3 2CM 지원
- `audit/PLAYER_INTEGRATION_PROGRESS.md`: 시즌별 상태

**결론:** 데이터 구조 및 GitHub Pages 자동 배포 성공. 출전 데이터 독립 교차 확인, 전원 3시즌 질적 역사 검증, 브라우저 실화면 확인과 사용자 최종 승인 **미완료**. 2016-17 신규 선수 평가 자동 진행 금지.
