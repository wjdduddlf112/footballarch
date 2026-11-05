# Football Archive — Bundesliga 2003-04 유럽대항전 실제 참가 구단 후보 검증 (DRAFT)

작성일: 2026-11-05 · 범위: **2003-04 분데스리가 실제 소속 구단**, 평가 자격: **2004-05 챔피언스리그/UEFA컵 또는 2004 인터토토컵 실전 출전**.

## 1. 후보 구단 9개 (승인 대기)

| 2003-04 분데스리가 순위 | 구단 원어명 | 2004-05 실제 유럽대항전 | 대회 참가 근거 |
|---:|---|---|---|
| 1 | SV Werder Bremen | UEFA Champions League | 2004-05 UEFA CL 본선, 독일 2003-04 리그 1위 |
| 2 | FC Bayern München | UEFA Champions League | 2004-05 UEFA CL 본선, 리그 2위 |
| 3 | Bayer 04 Leverkusen | UEFA Champions League | 2004-05 UEFA CL 예선 및 본선, 리그 3위 |
| 4 | VfB Stuttgart | UEFA Cup | 2004-05 UEFA Cup 1회전, 리그 4위 |
| 5 | VfL Bochum | UEFA Cup | 2004-05 UEFA Cup 1회전, 리그 5위 |
| 6 | BV Borussia 09 Dortmund | UEFA Intertoto Cup | 2004년 7월 17·24일 KRC Genk와 인터토토 3회전 두 경기 |
| 7 | FC Schalke 04 | UEFA Intertoto Cup → UEFA Cup | 2004 인터토토컵 우승·UEFA Cup 2004-05 참가 |
| 8 | Hamburger SV | UEFA Intertoto Cup | 2004년 FC Thun 상대 3회전 통과, Villarreal 상대 준결승 |
| 10 | VfL Wolfsburg | UEFA Intertoto Cup | 2004년 7월 3·11일 FC Thun 상대 2회전 실제 출전 |

- 합계: UCL 3, 직접 UEFA Cup 2, 인터토토컵 4 = **9구단**. 샬케는 인터토토컵을 거쳐 UEFA컵에 진출했으므로 중복 계산하지 않는다.
- **리그 9위 FC Hansa Rostock은 제외**: 2004-05 UEFA 3대 대회(당시 UCL·UEFA Cup·Intertoto) 실제 참가 증거 없음.
- **TSV Alemannia Aachen은 제외**: 2004-05 UEFA Cup 출전은 사실이나 2003-04 독일 2. Bundesliga 소속, 이번 평가의 분데스리가 시즌 소속 조건 충족하지 못함.
- 2003-04 당시 명단 및 기용을 기준으로 선수 자격을 평가하고, 2004년 여름 이적 후 2004-05 대회 출전 스쿼드를 2003-04 선수 후보로 착각하지 않는다.

## 2. 실제 참가 확인 자료

- 2003-04 분데스리가 최종 순위 및 UEFA 진출: https://www.rsssf.org/tablesd/duit04.html
- UEFA 2004-05 Champions League 클럽 목록 (Bremen, Bayern, Leverkusen): https://www.uefa.com/uefachampionsleague/history/seasons/2004/clubs/
- UEFA 2004-05 UEFA Cup 참가 발표 (Stuttgart, Bochum, Aachen): https://www.uefa.com/uefaeuropaleague/news/019e-0e6c2171372d-7b74e5046869-1000/
- UEFA 2004-05 진출 및 2003-04 리그 5위 Bochum 확인: https://www.uefa.com/news-media/news/019d-0ea6c80b4a8f-8b3e604b0ee2-1000--leverkusen-and-bayern-celebrate/
- 2004 UEFA Intertoto Cup 실제 결과 전체: https://www.rsssf.org/tablesu/uic04.html
- 2004 Dortmund 상대 Genk 경기: https://www.transfermarkt.com/borussia-dortmund/spielplan/verein/16/saison_id/2004/plus/1
- 2004 Hamburg 인터토토 결과 (Thun 및 Villarreal): https://www.transfermarkt.com/hamburger-sv/spielplan/verein/41/saison_id/2004
- 2004 Wolfsburg 인터토토 경기 (공식 구단 기록, Thun): https://www.vfl-wolfsburg.de/der-vfl/geschichte/statistiken-maenner/europapokalstatistik
- 2004 Schalke 인터토토 우승: https://en.wikipedia.org/wiki/2004_UEFA_Intertoto_Cup

## 3. 단계 상태

- **CLUB_SCOPE_DRAFT**: 후보 9구단 조사·독립 자료 대조 완료, 사용자 최종 수정/승인 대기.
- 기존 `data/bundesliga-standings-verified-1999-2026.json`에도 동일 9구단이 잠정 기록되어 있으며 해당 공통 자료의 잠정 상태는 이번 보고만으로 일괄 VERIFIED 처리하지 않는다.
- 구단별 시즌 대표 포메이션, 실제 주전·후보명단, 필드 선수 주 포지션, 세 시즌(2001-02 / 2002-03 / 2003-04) 개인 활약 가중 티어, 포지션 순위, Best XI는 **아직 연구/평가 전**이다.
- 주전 11명 및 포지션별 최대 후보 1인 기본 원칙, 선수 중복 금지, GK→CB→LB→RB→DM→CM→CAM→LW→RW→ST 순서를 지킨다. 당시 윙백/투톱 등 전술적 예외는 근거와 함께 분리 검토한다.
- 사용자가 후보 구단 확인 후 **"다음" 또는 다음 포지션** 지시 전에는 선수 선정 단계로 진행하지 않는다.
- 이번 단계에서 2004-05 평가를 시작하거나 기존 선수 티어를 임의로 생성하지 않는다.
