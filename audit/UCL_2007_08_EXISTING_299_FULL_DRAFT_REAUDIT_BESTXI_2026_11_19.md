# UCL 2007-08 — 기존 299명 전원 DRAFT 재검증·포지션 순위·Best XI 감사

> 작성일: **2026-11-19** · **전체 299명 DRAFT 이미 완결된 상태에서 공식 동시대 수치/개인상/전형을 재감사.** 사용자 미승인.
> 초기 299명 모두 티어·순위 기입돼 있었기 때문에 이번 실행에서 **새 티어 부여 0명, 기존 티어 변경 0명, 포지션별 순위 변경 0명, Best XI 변경 0명**. 실재하는 원자료와 충돌하지 않는 부분은 보존했고 15명의 공식 개별 근거를 새로 검토하여 JSON에 연결했다.

## 1. 기존 상태와 실행 범위

| 구분 | 작업 전 | 작업 후 |
|---|---:|---:|
| 평가 대상 기존 구단 | 16 | 16 |
| 기존 선수 후보 | 299 | **299** |
| 티어 입력 | 299 | **299 / 299** |
| 포지션 순위 | 299 | **299 / 299** |
| 미평가 인원 | 0 | **0** |
| 유효한 ID | 299 | **299** |
| 새로운 등급 또는 순위 변경 | — | **0명** |
| UEFA 동시대 공식 자료 개별 근거 교차 확인 | 0(이번 배치 기준) | **15명** |
| World Class (S, A+) | — | **53명** |
| Competition Top Class (S~A-) | — | **207명** |
| Best XI | 11명, 4-2-3-1 | **11명, 4-2-3-1 유지** |
| 상태 | 사용자 미승인 | **draft_unapproved** |

## 2. 적용 기준

- UEFA 2007-08 시즌 기록의 성과를 1순위로, 2006-07 및 2005-06 활약을 보조하는 최근 시즌 고가중치 원칙.
- 대회 우승·4강·리그 순위의 자동 점수화 금지. 개인 공격 생산성, 선방, 수비 커버, 기용 비중, 동시대 수상/기술보고서 관찰을 기준.
- UEFA 2008 시즌 통계 페이지와 UEFA 2008 클럽 개인상 결과는 2007-08 시즌 사실을 확인하는 직접 자료. UEFA 기술 보고서는 전형과 선발·출전 기록의 동시대 문서.
- 원래 JSON 선수 299명의 티어·순위·주 포지션·원어명·구단·생년월일과 팀/경기 원자료를 변경하지 않음. 이미 완성된 초안임을 인지하고 15명 공식 개인 기록/수상 근거만 추가 검증.
- 이번 단계는 299개 티어의 완결된 DRAFT를 재감사한 것이지 299명 개개인의 3시즌 모든 경기 기록을 처음부터 독립 재현한 결과가 아니다.
- 기존 UCL 선수별 출전 및 선발 값이 비어 있으면 해당 값을 다른 리그 선발 기록으로 채우지 않음. 데이터의 `domesticLeague2007_08.leagueStarts`는 UCL 선발 횟수가 아니다.
- 좌우 윙·풀백은 별도 평가. 원래 `rank` 1..N을 모든 주 포지션에서 유지하고 Best XI를 현재 4-2-3-1 11명으로 유지.

## 3. 전형 4-2-3-1의 역사적 근거

- UEFA 2007-08 공식 기술 보고서 팀별 전술 코멘트에 Arsenal FC는 'mainly 4-2-3-1', Manchester United FC는 'attack-oriented 4-2-3-1 or flexible 4-3-3', AS Roma는 'usually 4-2-3-1', Real Madrid CF는 기본 4-2-3-1 변형을 기술했다.
- Liverpool FC도 4-2-3-1 계열 전술 운용을 기록. 따라서 기존 사이트의 4-2-3-1은 시대를 반영하는 전형으로 유지.
- 다만 대회 32개 팀 **전원 기준 최빈 단일 포메이션을 계량 증명한 것은 아니므로** '공식 대회 최다 사용 포메이션'이라는 단정은 하지 않는다.

## 4. 2008 UEFA 클럽 개인상 및 시즌 공식 기록

- 2008 UEFA Club Footballer of the Year/Forward: Cristiano Ronaldo, Manchester United FC.
- UEFA Club Goalkeeper of the Year: Petr Čech, Chelsea FC.
- UEFA Club Defender of the Year: John Terry, Chelsea FC.
- UEFA Club Midfielder of the Year: Frank Lampard, Chelsea FC.
- UEFA 공식 대회 득점: Cristiano Ronaldo 8골, Lionel Messi·Steven Gerrard·Didier Drogba·Fernando Torres 각각 6골, Deivid 5골.
- UEFA 공식 도움: Alex(Fenerbahçe SK) 6개, Aliaksandr Hleb·Predrag Đorđević·Steven Gerrard·Andrea Pirlo·Robinho 각 4개.
- UEFA 공식 선방: Antonios Nikopolidis 46, Manuel Neuer 39, Pepe Reina·Edwin van der Sar 각 34.
- UEFA 기술 보고서 단일 시즌 출전 표와 후대 데이터 제공자 집계가 달라지는 수치는 쟁점 목록으로 구분하여 자동 입력하지 않았다.

## 5. 티어 분포

| 티어 | 인원 |
|---|---:|
| S | 2 |
| A+ | 51 |
| A0 | 83 |
| A- | 71 |
| B+ | 82 |
| B0 | 10 |
| **World Class: S / A+** | **53** |
| **Top Class: S / A+ / A0 / A-** | **207** |
| **전체** | **299** |

## 6. 전체 선수 포지션별 순위 · 299명

| 포지션 | 순위 | 한글 이름 | 원어명 | 당시 구단 (원어명) | 생년월일 | 티어 | 검증 상태 |
|---|---:|---|---|---|---|---|---|
| GK | 1 | 페트르 체흐 | Petr Čech | Chelsea FC | 1982-05-20 | A+ | 2007-08 공식 개별 근거 재확인 |
| GK | 2 | 마누엘 노이어 | Manuel Neuer | FC Schalke 04 | 1986-03-27 | A+ | 2007-08 공식 개별 근거 재확인 |
| GK | 3 | 페페 레이나 | Pepe Reina | Liverpool FC | 1982-08-31 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 4 | 에드빈 판데르사르 | Edwin van der Sar | Manchester United FC | 1970-10-29 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 5 | 이케르 카시야스 | Iker Casillas | Real Madrid CF | 1981-05-20 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 6 | 줄리우 세자르 | Júlio César | FC Internazionale Milano | 1979-09-03 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 7 | 빅토르 발데스 | Víctor Valdés | FC Barcelona | 1982-01-14 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 8 | 안토니오스 니코폴리디스 | Antonios Nikopolidis | Olympiacos FC | 1971-10-14 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 9 | 아르투르 보루츠 | Artur Boruc | Celtic FC | 1980-02-20 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 10 | 도니 | Doni | AS Roma | 1979-10-22 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 11 | 안드레스 팔로프 | Andrés Palop | Sevilla FC | 1973-10-22 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 12 | 마누엘 알무니아 | Manuel Almunia | Arsenal FC | 1977-05-19 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 13 | 그레고리 쿠페 | Grégory Coupet | Olympique Lyonnais | 1972-12-31 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 14 | 엘통 | Helton | FC Porto | 1978-05-18 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 15 | 볼칸 데미렐 | Volkan Demirel | Fenerbahçe SK | 1981-10-27 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 16 | 젤코 칼라치 | Željko Kalac | AC Milan | 1972-12-16 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 17 | 레미 베르쿠트르 | Rémy Vercoutre | Olympique Lyonnais | 1980-06-26 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 18 | 카를로 쿠디치니 | Carlo Cudicini | Chelsea FC | 1973-09-06 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 19 | 토마시 쿠슈차크 | Tomasz Kuszczak | Manchester United FC | 1982-03-20 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 20 | 모르간 데 상크티스 | Morgan De Sanctis | Sevilla FC | 1977-03-26 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 21 | 옌스 레만 | Jens Lehmann | Arsenal FC | 1969-11-10 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 22 | 호세 마누엘 핀토 | José Manuel Pinto | FC Barcelona | 1975-11-08 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 23 | 프란체스코 톨도 | Francesco Toldo | FC Internazionale Milano | 1971-12-02 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 24 | 잔루카 쿠르치 | Gianluca Curci | AS Roma | 1985-07-12 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 25 | 예지 두데크 | Jerzy Dudek | Real Madrid CF | 1973-03-23 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 26 | 지다 | Dida | AC Milan | 1973-10-07 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 27 | 누누 이스피리투 산투 | Nuno Espírito Santo | FC Porto | 1974-01-25 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 28 | 마크 브라운 | Mark Brown | Celtic FC | 1981-02-28 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 29 | 미할리스 시파키스 | Michalis Sifakis | Olympiacos FC | 1984-09-09 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| GK | 30 | 세르다르 쿨빌게 | Serdar Kulbilge | Fenerbahçe SK | 1980-07-07 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 1 | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | 1978-11-07 | A+ | 2007-08 공식 개별 근거 재확인 |
| CB | 2 | 존 테리 | John Terry | Chelsea FC | 1980-12-07 | A+ | 2007-08 공식 개별 근거 재확인 |
| CB | 3 | 제이미 캐러거 | Jamie Carragher | Liverpool FC | 1978-01-28 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 4 | 네마냐 비디치 | Nemanja Vidić | Manchester United FC | 1981-10-21 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 5 | 카를레스 푸욜 | Carles Puyol | FC Barcelona | 1978-04-13 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 6 | 히카르두 카르발류 | Ricardo Carvalho | Chelsea FC | 1978-05-18 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 7 | 알레산드로 네스타 | Alessandro Nesta | AC Milan | 1976-03-19 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 8 | 파비오 칸나바로 | Fabio Cannavaro | Real Madrid CF | 1973-09-13 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 9 | 세바스티앵 스킬라치 | Sébastien Squillaci | Olympique Lyonnais | 1980-08-11 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 10 | 마르셀루 보르동 | Marcelo Bordon | FC Schalke 04 | 1976-01-07 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 11 | 윌리암 갈라스 | William Gallas | Arsenal FC | 1977-08-17 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 12 | 필리프 멕세스 | Philippe Mexès | AS Roma | 1982-03-30 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 13 | 콜로 투레 | Kolo Touré | Arsenal FC | 1981-03-19 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 14 | 가브리엘 밀리토 | Gabriel Milito | FC Barcelona | 1980-09-07 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 15 | 사미 히피아 | Sami Hyypiä | Liverpool FC | 1973-10-07 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 16 | 알렉스 | Alex | Chelsea FC | 1982-06-17 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 17 | 이반 코르도바 | Iván Córdoba | FC Internazionale Milano | 1976-08-11 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 18 | 주앙 | Juan | AS Roma | 1979-02-01 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 19 | 페페 | Pepe | Real Madrid CF | 1983-02-26 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 20 | 마르코 마테라치 | Marco Materazzi | FC Internazionale Milano | 1973-08-19 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 21 | 라파엘 마르케스 | Rafael Márquez | FC Barcelona | 1979-02-13 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 22 | 크리스 | Cris | Olympique Lyonnais | 1977-06-03 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 23 | 브루누 알베스 | Bruno Alves | FC Porto | 1981-11-27 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 24 | 디에고 루가노 | Diego Lugano | Fenerbahçe SK | 1980-11-02 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 25 | 에두 드라세나 | Edu Dracena | Fenerbahçe SK | 1981-05-18 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 26 | 파올로 말디니 | Paolo Maldini | AC Milan | 1968-06-26 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 27 | 마티외 보드메르 | Mathieu Bodmer | Olympique Lyonnais | 1982-11-22 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 28 | 믈라덴 크르스타이치 | Mladen Krstajić | FC Schalke 04 | 1974-03-04 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 29 | 페데리코 파시오 | Federico Fazio | Sevilla FC | 1987-03-17 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 30 | 줄리앵 에스퀴데 | Julien Escudé | Sevilla FC | 1979-08-17 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 31 | 필리프 센데로스 | Philippe Senderos | Arsenal FC | 1985-02-14 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 32 | 마르틴 슈크르텔 | Martin Škrtel | Liverpool FC | 1984-12-15 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 33 | 카하 칼라제 | Kakha Kaladze | AC Milan | 1978-02-27 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 34 | 미하우 제브와코프 | Michał Żewłakow | Olympiacos FC | 1976-04-22 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 35 | 페드루 에마누엘 | Pedro Emanuel | FC Porto | 1975-02-11 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 36 | 스티븐 맥마너스 | Stephen McManus | Celtic FC | 1982-09-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 37 | 아퀴발도 모스케라 | Aquivaldo Mosquera | Sevilla FC | 1981-06-22 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 38 | 니콜라스 부르디소 | Nicolás Burdisso | FC Internazionale Milano | 1981-04-12 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 39 | 마테오 페라리 | Matteo Ferrari | AS Roma | 1979-12-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 40 | 크리스토프 메첼더 | Christoph Metzelder | Real Madrid CF | 1980-11-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 41 | 제라르 피케 | Gerard Piqué | Manchester United FC | 1987-02-02 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 42 | 베네딕트 회베데스 | Benedikt Höwedes | FC Schalke 04 | 1988-02-29 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 43 | 대런 오디 | Darren O'Dea | Celtic FC | 1987-02-04 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 44 | 게리 콜드웰 | Gary Caldwell | Celtic FC | 1982-04-12 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 45 | 줄리우 세자르 | Júlio César | Olympiacos FC | 1978-11-18 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 46 | 밀란 스테파노프 | Milan Stepanov | FC Porto | 1983-04-02 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 47 | 파라스케바스 안차스 | Paraskevas Antzas | Olympiacos FC | 1976-08-18 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CB | 48 | 야신 차크마크 | Yasin Çakmak | Fenerbahçe SK | 1985-01-06 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 1 | 파트리스 에브라 | Patrice Evra | Manchester United FC | 1981-05-15 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 2 | 가엘 클리시 | Gaël Clichy | Arsenal FC | 1985-07-26 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 3 | 하이코 베스터만 | Heiko Westermann | FC Schalke 04 | 1983-08-14 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 4 | 에리크 아비달 | Éric Abidal | FC Barcelona | 1979-09-11 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 5 | 애슐리 콜 | Ashley Cole | Chelsea FC | 1980-12-20 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 6 | 막스웰 | Maxwell | FC Internazionale Milano | 1981-08-27 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 7 | 크리스티안 키부 | Cristian Chivu | FC Internazionale Milano | 1980-10-26 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 8 | 막스 토네토 | Max Tonetto | AS Roma | 1974-11-18 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 9 | 파비오 그로소 | Fabio Grosso | Olympique Lyonnais | 1977-11-28 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 10 | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 11 | 이비차 드라구티노비치 | Ivica Dragutinović | Sevilla FC | 1975-11-13 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 12 | 욘 아르네 리세 | John Arne Riise | Liverpool FC | 1980-09-24 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 13 | 가브리엘 에인세 | Gabriel Heinze | Real Madrid CF | 1978-04-19 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 14 | 파비우 아우렐리우 | Fábio Aurélio | Liverpool FC | 1979-09-24 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 15 | 시우비뉴 | Sylvinho | FC Barcelona | 1974-04-12 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 16 | 웨인 브리지 | Wayne Bridge | Chelsea FC | 1980-08-05 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 17 | 호르헤 푸실레 | Jorge Fucile | FC Porto | 1984-11-19 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 18 | 마레크 얀쿨롭스키 | Marek Jankulovski | AC Milan | 1977-05-09 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 19 | 호베르투 카를루스 | Roberto Carlos | Fenerbahçe SK | 1973-04-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 20 | 크리스티안 판더 | Christian Pander | FC Schalke 04 | 1983-08-28 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 21 | 호세 앙헬 크레스포 | José Ángel Crespo | Sevilla FC | 1987-02-09 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 22 | 미카엘 실베스트르 | Mikaël Silvestre | Manchester United FC | 1977-08-09 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 23 | 나디르 벨하지 | Nadir Belhadj | Olympique Lyonnais | 1982-06-18 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 24 | 아나스타시오스 판토스 | Anastasios Pantos | Olympiacos FC | 1976-05-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 25 | 주세페 파발리 | Giuseppe Favalli | AC Milan | 1972-01-08 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 26 | 괴크체크 베데르송 | Gökçek Vederson | Fenerbahçe SK | 1981-07-22 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 27 | 리 네일러 | Lee Naylor | Celtic FC | 1980-03-19 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 28 | 마레크 체흐 | Marek Čech | FC Porto | 1983-01-26 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LB | 29 | 라울 브라보 | Raúl Bravo | Olympiacos FC | 1981-04-14 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 1 | 다니 아우베스 | Dani Alves | Sevilla FC | 1983-05-06 | A+ | 2007-08 공식 개별 근거 재확인 |
| RB | 2 | 세르히오 라모스 | Sergio Ramos | Real Madrid CF | 1986-03-30 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 3 | 마이콩 | Maicon | FC Internazionale Milano | 1981-07-26 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 4 | 주제 보싱와 | José Bosingwa | FC Porto | 1982-08-24 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 5 | 웨스 브라운 | Wes Brown | Manchester United FC | 1979-10-13 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 6 | 하피냐 | Rafinha | FC Schalke 04 | 1985-09-07 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 7 | 바카리 사냐 | Bacary Sagna | Arsenal FC | 1983-02-14 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 8 | 알바로 아르벨로아 | Álvaro Arbeloa | Liverpool FC | 1983-01-17 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 9 | 잔루카 잠브로타 | Gianluca Zambrotta | FC Barcelona | 1977-02-19 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 10 | 괴칸 괴뉠 | Gökhan Gönül | Fenerbahçe SK | 1985-01-04 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 11 | 앙토니 레베예르 | Anthony Réveillère | Olympique Lyonnais | 1979-11-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 12 | 크리스티안 파누치 | Christian Panucci | AS Roma | 1973-04-12 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 13 | 프랑수아 클레르 | François Clerc | Olympique Lyonnais | 1983-04-18 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 14 | 줄리아누 벨레치 | Juliano Belletti | Chelsea FC | 1976-06-20 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 15 | 시시뉴 | Cicinho | AS Roma | 1980-06-24 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 16 | 파울루 페헤이라 | Paulo Ferreira | Chelsea FC | 1979-01-18 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 17 | 마시모 오도 | Massimo Oddo | AC Milan | 1976-06-14 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 18 | 바실리스 토로시디스 | Vasilis Torosidis | Olympiacos FC | 1985-06-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 19 | 스티브 피넌 | Steve Finnan | Liverpool FC | 1976-04-20 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 20 | 미겔 토레스 | Miguel Torres | Real Madrid CF | 1986-01-28 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 21 | 존 오셰이 | John O'Shea | Manchester United FC | 1981-04-30 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 22 | 올레게르 프레사스 | Oleguer Presas | FC Barcelona | 1980-02-02 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 23 | 할리드 불라루즈 | Khalid Boulahrouz | Sevilla FC | 1981-12-28 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 24 | 저스틴 호이트 | Justin Hoyte | Arsenal FC | 1984-11-20 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 25 | 카푸 | Cafu | AC Milan | 1970-06-07 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 26 | 흐리스토스 파차초글루 | Christos Patsatzoglou | Olympiacos FC | 1979-03-19 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 27 | 마크 윌슨 | Mark Wilson | Celtic FC | 1984-06-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 28 | 온데르 투라즈 | Önder Turacı | Fenerbahçe SK | 1981-07-14 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RB | 29 | 폴 캐디스 | Paul Caddis | Celtic FC | 1988-04-19 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 1 | 마이클 캐릭 | Michael Carrick | Manchester United FC | 1981-07-28 | A+ | 2007-08 공식 개별 근거 재확인 |
| DM | 2 | 안드레아 피를로 | Andrea Pirlo | AC Milan | 1979-05-19 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 3 | 다니엘레 데 로시 | Daniele De Rossi | AS Roma | 1983-07-24 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 4 | 에스테반 캄비아소 | Esteban Cambiasso | FC Internazionale Milano | 1980-08-18 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 5 | 마티외 플라미니 | Mathieu Flamini | Arsenal FC | 1984-03-07 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 6 | 제레미 툴랄랑 | Jérémy Toulalan | Olympique Lyonnais | 1983-09-10 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 7 | 하비에르 마스체라노 | Javier Mascherano | Liverpool FC | 1984-06-08 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 8 | 클로드 마켈렐레 | Claude Makélélé | Chelsea FC | 1973-02-18 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 9 | 저메인 존스 | Jermaine Jones | FC Schalke 04 | 1981-11-03 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 10 | 마하마두 디아라 | Mahamadou Diarra | Real Madrid CF | 1981-05-18 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 11 | 야야 투레 | Yaya Touré | FC Barcelona | 1983-05-13 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 12 | 크리스티안 폴센 | Christian Poulsen | Sevilla FC | 1980-02-28 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 13 | 존 오비 미켈 | John Obi Mikel | Chelsea FC | 1987-04-22 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 14 | 오언 하그리브스 | Owen Hargreaves | Manchester United FC | 1981-01-20 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 15 | 이에로클리스 스톨티디스 | Ieroklis Stoltidis | Olympiacos FC | 1975-02-02 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 16 | 메흐메트 아우렐리우 | Mehmet Aurélio | Fenerbahçe SK | 1977-12-15 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 17 | 파울루 아순상 | Paulo Assunção | FC Porto | 1980-01-25 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 18 | 지우베르투 시우바 | Gilberto Silva | Arsenal FC | 1976-10-07 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 19 | 페르난도 가고 | Fernando Gago | Real Madrid CF | 1986-04-10 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 20 | 루카스 레이바 | Lucas Leiva | Liverpool FC | 1987-01-09 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 21 | 즐라탄 바이람오비치 | Zlatan Bajramović | FC Schalke 04 | 1979-08-12 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 22 | 파비우 산투스 | Fábio Santos | Olympique Lyonnais | 1980-10-09 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 23 | 마테오 브리기 | Matteo Brighi | AS Roma | 1981-02-14 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 24 | 올리비에 다쿠르 | Olivier Dacourt | FC Internazionale Milano | 1974-09-29 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 25 | 에드미우송 | Edmílson | FC Barcelona | 1976-07-10 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 26 | 호세 루이스 마르티 | José Luis Martí | Sevilla FC | 1975-04-28 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 27 | 클라우디오 말도나도 | Cláudio Maldonado | Fenerbahçe SK | 1980-01-03 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 28 | 에메르송 | Emerson | AC Milan | 1976-04-04 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 29 | 에반데르 스노 | Evander Sno | Celtic FC | 1987-04-09 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| DM | 30 | 폴 하틀리 | Paul Hartley | Celtic FC | 1976-10-19 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 1 | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | 1978-06-20 | A+ | 2007-08 공식 개별 근거 재확인 |
| CM | 2 | 세스크 파브레가스 | Cesc Fàbregas | Arsenal FC | 1987-05-04 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 3 | 하비에르 사네티 | Javier Zanetti | FC Internazionale Milano | 1973-08-10 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 4 | 사비 에르난데스 | Xavi Hernández | FC Barcelona | 1980-01-25 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 5 | 주니뉴 페르남부카누 | Juninho Pernambucano | Olympique Lyonnais | 1975-01-30 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 6 | 안드레스 이니에스타 | Andrés Iniesta | FC Barcelona | 1984-05-11 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 7 | 마이클 에시엔 | Michael Essien | Chelsea FC | 1982-12-03 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 8 | 폴 스콜스 | Paul Scholes | Manchester United FC | 1974-11-16 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 9 | 다비드 피사로 | David Pizarro | AS Roma | 1979-09-09 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 10 | 킴 셸스트룀 | Kim Källström | Olympique Lyonnais | 1982-08-24 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 11 | 세이두 케이타 | Seydou Keita | Sevilla FC | 1980-01-16 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 12 | 구티 | Guti | Real Madrid CF | 1976-10-31 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 13 | 알베르토 아퀼라니 | Alberto Aquilani | AS Roma | 1984-07-07 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 14 | 클라렌스 세도르프 | Clarence Seedorf | AC Milan | 1976-04-01 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 15 | 젠나로 가투소 | Gennaro Gattuso | AC Milan | 1978-01-09 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 16 | 마시모 암브로시니 | Massimo Ambrosini | AC Milan | 1977-05-29 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 17 | 하울 메이렐르스 | Raul Meireles | FC Porto | 1983-03-17 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 18 | 파비안 에른스트 | Fabian Ernst | FC Schalke 04 | 1979-05-30 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 19 | 베슬레이 스네이더르 | Wesley Sneijder | Real Madrid CF | 1984-06-09 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 20 | 안데르송 | Anderson | Manchester United FC | 1988-04-13 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 21 | 사비 알론소 | Xabi Alonso | Liverpool FC | 1981-11-25 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 22 | 데쿠 | Deco | FC Barcelona | 1977-08-27 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 23 | 파트리크 비에이라 | Patrick Vieira | FC Internazionale Milano | 1976-06-23 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 24 | 데니우송 | Denílson | Arsenal FC | 1988-02-16 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 25 | 마니시 | Maniche | FC Internazionale Milano | 1977-11-11 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 26 | 크리스티안 레데스마 | Cristian Ledesma | Olympiacos FC | 1978-11-29 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 27 | 스콧 브라운 | Scott Brown | Celtic FC | 1985-06-25 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 28 | 셀추크 샤힌 | Selçuk Şahin | Fenerbahçe SK | 1981-01-31 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 29 | 헤나투 | Renato | Sevilla FC | 1979-05-15 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 30 | 마르크 크로사스 | Marc Crosas | Olympique Lyonnais | 1988-01-09 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 31 | 데니즈 바르시 | Deniz Barış | Fenerbahçe SK | 1977-07-02 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 32 | 페르난도 벨루스키 | Fernando Belluschi | Olympiacos FC | 1983-09-10 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 33 | 마시모 도나티 | Massimo Donati | Celtic FC | 1981-03-26 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CM | 34 | 프셰미스와프 카지미에르차크 | Przemysław Kaźmierczak | FC Porto | 1982-05-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 1 | 스티븐 제라드 | Steven Gerrard | Liverpool FC | 1980-05-30 | S | 2007-08 공식 개별 근거 재확인 |
| CAM | 2 | 알렉스 | Alex | Fenerbahçe SK | 1977-09-14 | A+ | 2007-08 공식 개별 근거 재확인 |
| CAM | 3 | 미하엘 발라크 | Michael Ballack | Chelsea FC | 1976-09-26 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 4 | 카카 | Kaká | AC Milan | 1982-04-22 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 5 | 시모네 페로타 | Simone Perrotta | AS Roma | 1977-09-17 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 6 | 루초 곤살레스 | Lucho González | FC Porto | 1981-01-19 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 7 | 이반 라키티치 | Ivan Rakitić | FC Schalke 04 | 1988-03-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 8 | 데얀 스탄코비치 | Dejan Stanković | FC Internazionale Milano | 1978-09-11 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 9 | 뤼도비크 지울리 | Ludovic Giuly | AS Roma | 1976-07-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 10 | 루이스 피구 | Luís Figo | FC Internazionale Milano | 1972-11-04 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| CAM | 11 | 요안 구르퀴프 | Yoann Gourcuff | AC Milan | 1986-07-11 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 1 | 호비뉴 | Robinho | Real Madrid CF | 1984-01-25 | A0 | 2007-08 공식 개별 근거 재확인 |
| LW | 2 | 라이언 바벌 | Ryan Babel | Liverpool FC | 1986-12-19 | A0 | 2007-08 공식 개별 근거 재확인 |
| LW | 3 | 미르코 부치니치 | Mirko Vučinić | AS Roma | 1983-10-01 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 4 | 프레드라그 조르제비치 | Predrag Đorđević | Olympiacos FC | 1972-08-04 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 5 | 만시니 | Mancini | AS Roma | 1980-08-01 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 6 | 티에리 앙리 | Thierry Henry | FC Barcelona | 1977-08-17 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 7 | 라이언 긱스 | Ryan Giggs | Manchester United FC | 1973-11-29 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 8 | 하템 벤 아르파 | Hatem Ben Arfa | Olympique Lyonnais | 1987-03-07 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 9 | 히카르두 콰레스마 | Ricardo Quaresma | FC Porto | 1983-09-26 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 10 | 살로몽 칼루 | Salomon Kalou | Chelsea FC | 1985-08-05 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 11 | 아드리아누 코헤이아 | Adriano Correia | Sevilla FC | 1984-10-26 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 12 | 디에고 카펠 | Diego Capel | Sevilla FC | 1988-02-16 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 13 | 플로랑 말루다 | Florent Malouda | Chelsea FC | 1980-06-13 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 14 | 나니 | Nani | Manchester United FC | 1986-11-17 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 15 | 토마시 로시츠키 | Tomáš Rosický | Arsenal FC | 1980-10-04 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 16 | 호나우지뉴 | Ronaldinho | FC Barcelona | 1980-03-21 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 17 | 레반 코비아슈빌리 | Levan Kobiashvili | FC Schalke 04 | 1977-07-10 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 18 | 에이든 맥기디 | Aiden McGeady | Celtic FC | 1986-04-04 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 19 | 우우르 보랄 | Uğur Boral | Fenerbahçe SK | 1982-04-14 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 20 | 아부 디아비 | Abou Diaby | Arsenal FC | 1986-05-11 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 21 | 해리 큐얼 | Harry Kewell | Liverpool FC | 1978-09-22 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 22 | 로이스턴 드렌테 | Royston Drenthe | Real Madrid CF | 1987-04-08 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 23 | 콜린 카짐리처즈 | Colin Kâzım-Richards | Fenerbahçe SK | 1986-08-26 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 24 | 마리아노 곤살레스 | Mariano González | FC Porto | 1981-05-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 25 | 배리 롭슨 | Barry Robson | Celtic FC | 1978-11-07 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| LW | 26 | 로드리고 아르추비 | Rodrigo Archubi | Olympiacos FC | 1985-06-06 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 1 | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | 1985-02-05 | S | 2007-08 공식 개별 근거 재확인 |
| RW | 2 | 리오넬 메시 | Lionel Messi | FC Barcelona | 1987-06-24 | A+ | 2007-08 공식 개별 근거 재확인 |
| RW | 3 | 디르크 카위트 | Dirk Kuyt | Liverpool FC | 1980-07-22 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 4 | 데이비드 | Deivid | Fenerbahçe SK | 1979-10-22 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 5 | 알략산드르 흘레프 | Aliaksandr Hleb | Arsenal FC | 1981-05-01 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 6 | 헤수스 나바스 | Jesús Navas | Sevilla FC | 1985-11-21 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 7 | 조 콜 | Joe Cole | Chelsea FC | 1981-11-08 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 8 | 시드네 고부 | Sidney Govou | Olympique Lyonnais | 1979-07-27 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 9 | 루시아노 가예티 | Luciano Galletti | Olympiacos FC | 1980-04-09 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 10 | 나카무라 슌스케 | Shunsuke Nakamura | Celtic FC | 1978-06-24 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 11 | 호드리구 타데이 | Rodrigo Taddei | AS Roma | 1980-03-06 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 12 | 게랄트 아사모아 | Gerald Asamoah | FC Schalke 04 | 1978-10-03 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 13 | 에마뉘엘 에부에 | Emmanuel Eboué | Arsenal FC | 1983-06-04 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 14 | 압둘 카데르 케이타 | Abdul Kader Keïta | Olympique Lyonnais | 1981-08-06 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 15 | 요시 베나윤 | Yossi Benayoun | Liverpool FC | 1980-05-05 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 16 | 아르연 로번 | Arjen Robben | Real Madrid CF | 1984-01-23 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 17 | 박지성 | Park Ji-sung | Manchester United FC | 1981-02-25 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 18 | 타리크 세크티위 | Tarik Sektioui | FC Porto | 1977-05-13 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 19 | 숀 라이트필립스 | Shaun Wright-Phillips | Chelsea FC | 1981-10-25 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 20 | 지오바니 도스 산토스 | Giovani dos Santos | FC Barcelona | 1989-05-11 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 21 | 비센테 산체스 | Vicente Sánchez | FC Schalke 04 | 1979-12-07 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 22 | 톰 더 뮐 | Tom De Mul | Sevilla FC | 1986-03-04 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| RW | 23 | 콘스탄티노스 멘드리노스 | Konstantinos Mendrinos | Olympiacos FC | 1985-05-28 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 1 | 디디에 드로그바 | Didier Drogba | Chelsea FC | 1978-03-11 | A+ | 2007-08 공식 개별 근거 재확인 |
| ST | 2 | 페르난도 토레스 | Fernando Torres | Liverpool FC | 1984-03-20 | A+ | 2007-08 공식 개별 근거 재확인 |
| ST | 3 | 프레데리크 카누테 | Frédéric Kanouté | Sevilla FC | 1977-09-02 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 4 | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | FC Internazionale Milano | 1981-10-03 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 5 | 카림 벤제마 | Karim Benzema | Olympique Lyonnais | 1987-12-19 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 6 | 루이스 파비아누 | Luís Fabiano | Sevilla FC | 1980-11-08 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 7 | 뤼트 판니스텔로이 | Ruud van Nistelrooy | Real Madrid CF | 1976-07-01 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 8 | 에마뉘엘 아데바요르 | Emmanuel Adebayor | Arsenal FC | 1984-02-26 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 9 | 카를로스 테베스 | Carlos Tévez | Manchester United FC | 1984-02-05 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 10 | 프란체스코 토티 | Francesco Totti | AS Roma | 1976-09-27 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 11 | 웨인 루니 | Wayne Rooney | Manchester United FC | 1985-10-24 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 12 | 리산드로 로페스 | Lisandro López | FC Porto | 1983-03-02 | A+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 13 | 라울 곤살레스 | Raúl González | Real Madrid CF | 1977-06-27 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 14 | 케빈 쿠라니 | Kevin Kurányi | FC Schalke 04 | 1982-03-02 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 15 | 훌리오 리카르도 크루스 | Julio Ricardo Cruz | FC Internazionale Milano | 1974-10-10 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 16 | 사뮈엘 에토 | Samuel Eto'o | FC Barcelona | 1981-03-10 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 17 | 로빈 판페르시 | Robin van Persie | Arsenal FC | 1983-08-06 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 18 | 필리포 인차기 | Filippo Inzaghi | AC Milan | 1973-08-09 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 19 | 스콧 맥도널드 | Scott McDonald | Celtic FC | 1983-08-21 | A0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 20 | 보얀 크르키치 | Bojan Krkić | FC Barcelona | 1990-08-28 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 21 | 니콜라 아넬카 | Nicolas Anelka | Chelsea FC | 1979-03-14 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 22 | 피터 크라우치 | Peter Crouch | Liverpool FC | 1981-01-30 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 23 | 니클라스 벤트네르 | Nicklas Bendtner | Arsenal FC | 1988-01-16 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 24 | 다르코 코바체비치 | Darko Kovačević | Olympiacos FC | 1973-11-18 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 25 | 세미흐 셴튀르크 | Semih Şentürk | Fenerbahçe SK | 1983-04-29 | A- | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 26 | 할릴 알튼토프 | Halil Altıntop | FC Schalke 04 | 1982-12-08 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 27 | 프레드 | Fred | Olympique Lyonnais | 1983-10-03 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 28 | 아루나 코네 | Arouna Koné | Sevilla FC | 1983-11-11 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 29 | 곤살로 이과인 | Gonzalo Higuaín | Real Madrid CF | 1987-12-10 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 30 | 마리오 발로텔리 | Mario Balotelli | FC Internazionale Milano | 1990-08-12 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 31 | 루이 사하 | Louis Saha | Manchester United FC | 1978-08-08 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 32 | 알베르토 질라르디노 | Alberto Gilardino | AC Milan | 1982-07-05 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 33 | 알레샨드리 파투 | Alexandre Pato | AC Milan | 1989-09-02 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 34 | 에르네스토 파리아스 | Ernesto Farías | FC Porto | 1980-05-29 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 35 | 얀 페네호르 오프 헤셀링크 | Jan Vennegoor of Hesselink | Celtic FC | 1978-11-07 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 36 | 로마나 루아루아 | Lomana LuaLua | Olympiacos FC | 1980-12-28 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 37 | 마테야 케즈만 | Mateja Kežman | Fenerbahçe SK | 1979-04-12 | B+ | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 38 | 요르고스 사마라스 | Georgios Samaras | Celtic FC | 1985-02-21 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |
| ST | 39 | 미할리스 콘스탄티누 | Michalis Konstantinou | Olympiacos FC | 1978-02-19 | B0 | 기존 정성 DRAFT, 전수 자료 검증 전 |

## 7. 16개 구단별 기존 후보 전체

### Manchester United FC — 20명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 에드빈 판데르사르 | Edwin van der Sar | A+ | 4 | starter |
| GK | 토마시 쿠슈차크 | Tomasz Kuszczak | B+ | 19 | backup |
| CB | 리오 퍼디난드 | Rio Ferdinand | A+ | 1 | starter |
| CB | 네마냐 비디치 | Nemanja Vidić | A+ | 4 | starter |
| CB | 제라르 피케 | Gerard Piqué | B+ | 41 | backup |
| LB | 파트리스 에브라 | Patrice Evra | A+ | 1 | starter |
| LB | 미카엘 실베스트르 | Mikaël Silvestre | B+ | 22 | backup |
| RB | 웨스 브라운 | Wes Brown | A0 | 5 | starter |
| RB | 존 오셰이 | John O'Shea | B+ | 21 | backup |
| DM | 마이클 캐릭 | Michael Carrick | A+ | 1 | starter |
| DM | 오언 하그리브스 | Owen Hargreaves | A0 | 14 | backup |
| CM | 폴 스콜스 | Paul Scholes | A+ | 8 | starter |
| CM | 안데르송 | Anderson | A- | 20 | backup |
| LW | 라이언 긱스 | Ryan Giggs | A0 | 7 | starter |
| LW | 나니 | Nani | A- | 14 | backup |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | S | 1 | starter |
| RW | 박지성 | Park Ji-sung | A- | 17 | backup |
| ST | 카를로스 테베스 | Carlos Tévez | A+ | 9 | starter |
| ST | 웨인 루니 | Wayne Rooney | A+ | 11 | starter |
| ST | 루이 사하 | Louis Saha | B+ | 31 | backup |

### Chelsea FC — 20명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 페트르 체흐 | Petr Čech | A+ | 1 | starter |
| GK | 카를로 쿠디치니 | Carlo Cudicini | B+ | 18 | backup |
| CB | 존 테리 | John Terry | A+ | 2 | starter |
| CB | 히카르두 카르발류 | Ricardo Carvalho | A+ | 6 | starter |
| CB | 알렉스 | Alex | A0 | 16 | backup |
| LB | 애슐리 콜 | Ashley Cole | A0 | 5 | starter |
| LB | 웨인 브리지 | Wayne Bridge | A- | 16 | backup |
| RB | 줄리아누 벨레치 | Juliano Belletti | A- | 14 | starter |
| RB | 파울루 페헤이라 | Paulo Ferreira | A- | 16 | backup |
| DM | 클로드 마켈렐레 | Claude Makélélé | A+ | 8 | starter |
| DM | 존 오비 미켈 | John Obi Mikel | A0 | 13 | backup |
| CM | 프랭크 램퍼드 | Frank Lampard | A+ | 1 | starter |
| CM | 마이클 에시엔 | Michael Essien | A+ | 7 | backup |
| CAM | 미하엘 발라크 | Michael Ballack | A+ | 3 | starter |
| LW | 살로몽 칼루 | Salomon Kalou | A- | 10 | starter |
| LW | 플로랑 말루다 | Florent Malouda | A- | 13 | backup |
| RW | 조 콜 | Joe Cole | A0 | 7 | starter |
| RW | 숀 라이트필립스 | Shaun Wright-Phillips | B+ | 19 | backup |
| ST | 디디에 드로그바 | Didier Drogba | A+ | 1 | starter |
| ST | 니콜라 아넬카 | Nicolas Anelka | A- | 21 | backup |

### Liverpool FC — 18명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 페페 레이나 | Pepe Reina | A+ | 3 | starter |
| CB | 제이미 캐러거 | Jamie Carragher | A+ | 3 | starter |
| CB | 사미 히피아 | Sami Hyypiä | A0 | 15 | starter |
| CB | 마르틴 슈크르텔 | Martin Škrtel | A- | 32 | backup |
| LB | 욘 아르네 리세 | John Arne Riise | A- | 12 | backup |
| LB | 파비우 아우렐리우 | Fábio Aurélio | A- | 14 | starter |
| RB | 알바로 아르벨로아 | Álvaro Arbeloa | A0 | 8 | starter |
| RB | 스티브 피넌 | Steve Finnan | B+ | 19 | backup |
| DM | 하비에르 마스체라노 | Javier Mascherano | A+ | 7 | starter |
| DM | 루카스 레이바 | Lucas Leiva | B+ | 20 | backup |
| CM | 사비 알론소 | Xabi Alonso | A- | 21 | starter |
| CAM | 스티븐 제라드 | Steven Gerrard | S | 1 | starter |
| LW | 라이언 바벌 | Ryan Babel | A0 | 2 | starter |
| LW | 해리 큐얼 | Harry Kewell | B+ | 21 | backup |
| RW | 디르크 카위트 | Dirk Kuyt | A0 | 3 | starter |
| RW | 요시 베나윤 | Yossi Benayoun | A- | 15 | backup |
| ST | 페르난도 토레스 | Fernando Torres | A+ | 2 | starter |
| ST | 피터 크라우치 | Peter Crouch | A- | 22 | backup |

### FC Barcelona — 20명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 빅토르 발데스 | Víctor Valdés | A+ | 7 | starter |
| GK | 호세 마누엘 핀토 | José Manuel Pinto | B+ | 22 | backup |
| CB | 카를레스 푸욜 | Carles Puyol | A+ | 5 | starter |
| CB | 가브리엘 밀리토 | Gabriel Milito | A0 | 14 | starter |
| CB | 라파엘 마르케스 | Rafael Márquez | A0 | 21 | backup |
| LB | 에리크 아비달 | Éric Abidal | A0 | 4 | starter |
| LB | 시우비뉴 | Sylvinho | A- | 15 | backup |
| RB | 잔루카 잠브로타 | Gianluca Zambrotta | A0 | 9 | starter |
| RB | 올레게르 프레사스 | Oleguer Presas | B+ | 22 | backup |
| DM | 야야 투레 | Yaya Touré | A0 | 11 | starter |
| DM | 에드미우송 | Edmílson | B+ | 25 | backup |
| CM | 사비 에르난데스 | Xavi Hernández | A+ | 4 | starter |
| CM | 안드레스 이니에스타 | Andrés Iniesta | A+ | 6 | starter |
| CM | 데쿠 | Deco | A- | 22 | backup |
| LW | 티에리 앙리 | Thierry Henry | A0 | 6 | starter |
| LW | 호나우지뉴 | Ronaldinho | A- | 16 | backup |
| RW | 리오넬 메시 | Lionel Messi | A+ | 2 | starter |
| RW | 지오바니 도스 산토스 | Giovani dos Santos | B+ | 20 | backup |
| ST | 사뮈엘 에토 | Samuel Eto'o | A0 | 16 | starter |
| ST | 보얀 크르키치 | Bojan Krkić | A- | 20 | backup |

### AS Roma — 18명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 도니 | Doni | A0 | 10 | starter |
| GK | 잔루카 쿠르치 | Gianluca Curci | B+ | 24 | backup |
| CB | 필리프 멕세스 | Philippe Mexès | A0 | 12 | starter |
| CB | 주앙 | Juan | A0 | 18 | starter |
| CB | 마테오 페라리 | Matteo Ferrari | B+ | 39 | backup |
| LB | 막스 토네토 | Max Tonetto | A- | 8 | starter |
| RB | 크리스티안 파누치 | Christian Panucci | A- | 12 | starter |
| RB | 시시뉴 | Cicinho | A- | 15 | backup |
| DM | 다니엘레 데 로시 | Daniele De Rossi | A+ | 3 | starter |
| DM | 마테오 브리기 | Matteo Brighi | B+ | 23 | backup |
| CM | 다비드 피사로 | David Pizarro | A0 | 9 | starter |
| CM | 알베르토 아퀼라니 | Alberto Aquilani | A0 | 13 | backup |
| CAM | 시모네 페로타 | Simone Perrotta | A0 | 5 | starter |
| CAM | 뤼도비크 지울리 | Ludovic Giuly | A- | 9 | backup |
| LW | 미르코 부치니치 | Mirko Vučinić | A0 | 3 | backup |
| LW | 만시니 | Mancini | A0 | 5 | starter |
| RW | 호드리구 타데이 | Rodrigo Taddei | A- | 11 | starter |
| ST | 프란체스코 토티 | Francesco Totti | A+ | 10 | starter |

### FC Schalke 04 — 16명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 마누엘 노이어 | Manuel Neuer | A+ | 2 | starter |
| CB | 마르셀루 보르동 | Marcelo Bordon | A0 | 10 | starter |
| CB | 믈라덴 크르스타이치 | Mladen Krstajić | A- | 28 | starter |
| CB | 베네딕트 회베데스 | Benedikt Höwedes | B+ | 42 | backup |
| LB | 하이코 베스터만 | Heiko Westermann | A0 | 3 | starter |
| LB | 크리스티안 판더 | Christian Pander | B+ | 20 | backup |
| RB | 하피냐 | Rafinha | A0 | 6 | starter |
| DM | 저메인 존스 | Jermaine Jones | A0 | 9 | starter |
| DM | 즐라탄 바이람오비치 | Zlatan Bajramović | B+ | 21 | backup |
| CM | 파비안 에른스트 | Fabian Ernst | A- | 18 | starter |
| CAM | 이반 라키티치 | Ivan Rakitić | A- | 7 | starter |
| LW | 레반 코비아슈빌리 | Levan Kobiashvili | A- | 17 | starter |
| RW | 게랄트 아사모아 | Gerald Asamoah | A- | 12 | starter |
| RW | 비센테 산체스 | Vicente Sánchez | B+ | 21 | backup |
| ST | 케빈 쿠라니 | Kevin Kurányi | A0 | 14 | starter |
| ST | 할릴 알튼토프 | Halil Altıntop | B+ | 26 | backup |

### Arsenal FC — 19명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 마누엘 알무니아 | Manuel Almunia | A0 | 12 | starter |
| GK | 옌스 레만 | Jens Lehmann | B+ | 21 | backup |
| CB | 윌리암 갈라스 | William Gallas | A0 | 11 | starter |
| CB | 콜로 투레 | Kolo Touré | A0 | 13 | starter |
| CB | 필리프 센데로스 | Philippe Senderos | A- | 31 | backup |
| LB | 가엘 클리시 | Gaël Clichy | A0 | 2 | starter |
| RB | 바카리 사냐 | Bacary Sagna | A0 | 7 | starter |
| RB | 저스틴 호이트 | Justin Hoyte | B+ | 24 | backup |
| DM | 마티외 플라미니 | Mathieu Flamini | A+ | 5 | starter |
| DM | 지우베르투 시우바 | Gilberto Silva | A- | 18 | backup |
| CM | 세스크 파브레가스 | Cesc Fàbregas | A+ | 2 | starter |
| CM | 데니우송 | Denílson | A- | 24 | backup |
| LW | 토마시 로시츠키 | Tomáš Rosický | A- | 15 | starter |
| LW | 아부 디아비 | Abou Diaby | B+ | 20 | backup |
| RW | 알략산드르 흘레프 | Aliaksandr Hleb | A0 | 5 | starter |
| RW | 에마뉘엘 에부에 | Emmanuel Eboué | A- | 13 | backup |
| ST | 에마뉘엘 아데바요르 | Emmanuel Adebayor | A+ | 8 | starter |
| ST | 로빈 판페르시 | Robin van Persie | A0 | 17 | starter |
| ST | 니클라스 벤트네르 | Nicklas Bendtner | A- | 23 | backup |

### Fenerbahçe SK — 19명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 볼칸 데미렐 | Volkan Demirel | A0 | 15 | starter |
| GK | 세르다르 쿨빌게 | Serdar Kulbilge | B0 | 30 | backup |
| CB | 디에고 루가노 | Diego Lugano | A0 | 24 | starter |
| CB | 에두 드라세나 | Edu Dracena | A0 | 25 | starter |
| CB | 야신 차크마크 | Yasin Çakmak | B0 | 48 | backup |
| LB | 호베르투 카를루스 | Roberto Carlos | A- | 19 | starter |
| LB | 괴크체크 베데르송 | Gökçek Vederson | B+ | 26 | backup |
| RB | 괴칸 괴뉠 | Gökhan Gönül | A0 | 10 | starter |
| RB | 온데르 투라즈 | Önder Turacı | B+ | 28 | backup |
| DM | 메흐메트 아우렐리우 | Mehmet Aurélio | A0 | 16 | starter |
| DM | 클라우디오 말도나도 | Cláudio Maldonado | B+ | 27 | backup |
| CM | 셀추크 샤힌 | Selçuk Şahin | A- | 28 | starter |
| CM | 데니즈 바르시 | Deniz Barış | B+ | 31 | backup |
| CAM | 알렉스 | Alex | A+ | 2 | starter |
| LW | 우우르 보랄 | Uğur Boral | A- | 19 | starter |
| LW | 콜린 카짐리처즈 | Colin Kâzım-Richards | B+ | 23 | backup |
| RW | 데이비드 | Deivid | A0 | 4 | starter |
| ST | 세미흐 셴튀르크 | Semih Şentürk | A- | 25 | backup |
| ST | 마테야 케즈만 | Mateja Kežman | B+ | 37 | starter |

### Real Madrid CF — 19명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 이케르 카시야스 | Iker Casillas | A+ | 5 | starter |
| GK | 예지 두데크 | Jerzy Dudek | B+ | 25 | backup |
| CB | 파비오 칸나바로 | Fabio Cannavaro | A0 | 8 | starter |
| CB | 페페 | Pepe | A0 | 19 | starter |
| CB | 크리스토프 메첼더 | Christoph Metzelder | B+ | 40 | backup |
| LB | 마르셀루 | Marcelo | A- | 10 | starter |
| LB | 가브리엘 에인세 | Gabriel Heinze | A- | 13 | backup |
| RB | 세르히오 라모스 | Sergio Ramos | A+ | 2 | starter |
| RB | 미겔 토레스 | Miguel Torres | B+ | 20 | backup |
| DM | 마하마두 디아라 | Mahamadou Diarra | A0 | 10 | starter |
| DM | 페르난도 가고 | Fernando Gago | B+ | 19 | backup |
| CM | 구티 | Guti | A0 | 12 | starter |
| CM | 베슬레이 스네이더르 | Wesley Sneijder | A- | 19 | backup |
| LW | 호비뉴 | Robinho | A0 | 1 | starter |
| LW | 로이스턴 드렌테 | Royston Drenthe | B+ | 22 | backup |
| RW | 아르연 로번 | Arjen Robben | A- | 16 | starter |
| ST | 뤼트 판니스텔로이 | Ruud van Nistelrooy | A+ | 7 | starter |
| ST | 라울 곤살레스 | Raúl González | A0 | 13 | starter |
| ST | 곤살로 이과인 | Gonzalo Higuaín | B+ | 29 | backup |

### FC Internazionale Milano — 18명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 줄리우 세자르 | Júlio César | A+ | 6 | starter |
| GK | 프란체스코 톨도 | Francesco Toldo | B+ | 23 | backup |
| CB | 이반 코르도바 | Iván Córdoba | A0 | 17 | starter |
| CB | 마르코 마테라치 | Marco Materazzi | A0 | 20 | backup |
| CB | 니콜라스 부르디소 | Nicolás Burdisso | B+ | 38 | starter |
| LB | 막스웰 | Maxwell | A0 | 6 | backup |
| LB | 크리스티안 키부 | Cristian Chivu | A0 | 7 | starter |
| RB | 마이콩 | Maicon | A+ | 3 | starter |
| DM | 에스테반 캄비아소 | Esteban Cambiasso | A+ | 4 | starter |
| DM | 올리비에 다쿠르 | Olivier Dacourt | B+ | 24 | backup |
| CM | 하비에르 사네티 | Javier Zanetti | A+ | 3 | starter |
| CM | 파트리크 비에이라 | Patrick Vieira | A- | 23 | starter |
| CM | 마니시 | Maniche | A- | 25 | backup |
| CAM | 데얀 스탄코비치 | Dejan Stanković | A- | 8 | starter |
| CAM | 루이스 피구 | Luís Figo | A- | 10 | backup |
| ST | 즐라탄 이브라히모비치 | Zlatan Ibrahimović | A+ | 4 | starter |
| ST | 훌리오 리카르도 크루스 | Julio Ricardo Cruz | A0 | 15 | starter |
| ST | 마리오 발로텔리 | Mario Balotelli | B+ | 30 | backup |

### Olympiacos FC — 19명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 안토니오스 니코폴리디스 | Antonios Nikopolidis | A0 | 8 | starter |
| GK | 미할리스 시파키스 | Michalis Sifakis | B0 | 29 | backup |
| CB | 미하우 제브와코프 | Michał Żewłakow | A- | 34 | starter |
| CB | 줄리우 세자르 | Júlio César | B+ | 45 | backup |
| CB | 파라스케바스 안차스 | Paraskevas Antzas | B+ | 47 | starter |
| LB | 아나스타시오스 판토스 | Anastasios Pantos | B+ | 24 | starter |
| LB | 라울 브라보 | Raúl Bravo | B+ | 29 | backup |
| RB | 바실리스 토로시디스 | Vasilis Torosidis | A- | 18 | starter |
| RB | 흐리스토스 파차초글루 | Christos Patsatzoglou | B+ | 26 | backup |
| DM | 이에로클리스 스톨티디스 | Ieroklis Stoltidis | A0 | 15 | starter |
| CM | 크리스티안 레데스마 | Cristian Ledesma | A- | 26 | starter |
| CM | 페르난도 벨루스키 | Fernando Belluschi | B+ | 32 | backup |
| LW | 프레드라그 조르제비치 | Predrag Đorđević | A0 | 4 | starter |
| LW | 로드리고 아르추비 | Rodrigo Archubi | B0 | 26 | backup |
| RW | 루시아노 가예티 | Luciano Galletti | A0 | 9 | starter |
| RW | 콘스탄티노스 멘드리노스 | Konstantinos Mendrinos | B0 | 23 | backup |
| ST | 다르코 코바체비치 | Darko Kovačević | A- | 24 | starter |
| ST | 로마나 루아루아 | Lomana LuaLua | B+ | 36 | starter |
| ST | 미할리스 콘스탄티누 | Michalis Konstantinou | B0 | 39 | backup |

### FC Porto — 17명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 엘통 | Helton | A0 | 14 | starter |
| GK | 누누 이스피리투 산투 | Nuno Espírito Santo | B+ | 27 | backup |
| CB | 브루누 알베스 | Bruno Alves | A0 | 23 | starter |
| CB | 페드루 에마누엘 | Pedro Emanuel | A- | 35 | starter |
| CB | 밀란 스테파노프 | Milan Stepanov | B+ | 46 | backup |
| LB | 호르헤 푸실레 | Jorge Fucile | A- | 17 | starter |
| LB | 마레크 체흐 | Marek Čech | B+ | 28 | backup |
| RB | 주제 보싱와 | José Bosingwa | A+ | 4 | starter |
| DM | 파울루 아순상 | Paulo Assunção | A0 | 17 | starter |
| CM | 하울 메이렐르스 | Raul Meireles | A0 | 17 | starter |
| CM | 프셰미스와프 카지미에르차크 | Przemysław Kaźmierczak | B+ | 34 | backup |
| CAM | 루초 곤살레스 | Lucho González | A0 | 6 | starter |
| LW | 히카르두 콰레스마 | Ricardo Quaresma | A0 | 9 | starter |
| LW | 마리아노 곤살레스 | Mariano González | B+ | 24 | backup |
| RW | 타리크 세크티위 | Tarik Sektioui | A- | 18 | starter |
| ST | 리산드로 로페스 | Lisandro López | A+ | 12 | starter |
| ST | 에르네스토 파리아스 | Ernesto Farías | B+ | 34 | backup |

### AC Milan — 19명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 젤코 칼라치 | Željko Kalac | A- | 16 | starter |
| GK | 지다 | Dida | B+ | 26 | backup |
| CB | 알레산드로 네스타 | Alessandro Nesta | A+ | 7 | starter |
| CB | 파올로 말디니 | Paolo Maldini | A0 | 26 | starter |
| CB | 카하 칼라제 | Kakha Kaladze | A- | 33 | backup |
| LB | 마레크 얀쿨롭스키 | Marek Jankulovski | A- | 18 | starter |
| LB | 주세페 파발리 | Giuseppe Favalli | B+ | 25 | backup |
| RB | 마시모 오도 | Massimo Oddo | A- | 17 | starter |
| RB | 카푸 | Cafu | B+ | 25 | backup |
| DM | 안드레아 피를로 | Andrea Pirlo | A+ | 2 | starter |
| DM | 에메르송 | Emerson | B+ | 28 | backup |
| CM | 클라렌스 세도르프 | Clarence Seedorf | A0 | 14 | starter |
| CM | 젠나로 가투소 | Gennaro Gattuso | A0 | 15 | starter |
| CM | 마시모 암브로시니 | Massimo Ambrosini | A0 | 16 | backup |
| CAM | 카카 | Kaká | A+ | 4 | starter |
| CAM | 요안 구르퀴프 | Yoann Gourcuff | B+ | 11 | backup |
| ST | 필리포 인차기 | Filippo Inzaghi | A0 | 18 | starter |
| ST | 알베르토 질라르디노 | Alberto Gilardino | B+ | 32 | backup |
| ST | 알레샨드리 파투 | Alexandre Pato | B+ | 33 | starter |

### Celtic FC — 18명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 아르투르 보루츠 | Artur Boruc | A0 | 9 | starter |
| GK | 마크 브라운 | Mark Brown | B0 | 28 | backup |
| CB | 스티븐 맥마너스 | Stephen McManus | A- | 36 | starter |
| CB | 대런 오디 | Darren O'Dea | B+ | 43 | backup |
| CB | 게리 콜드웰 | Gary Caldwell | B+ | 44 | starter |
| LB | 리 네일러 | Lee Naylor | B+ | 27 | starter |
| RB | 마크 윌슨 | Mark Wilson | B+ | 27 | starter |
| RB | 폴 캐디스 | Paul Caddis | B0 | 29 | backup |
| DM | 에반데르 스노 | Evander Sno | B+ | 29 | backup |
| DM | 폴 하틀리 | Paul Hartley | B+ | 30 | starter |
| CM | 스콧 브라운 | Scott Brown | A- | 27 | starter |
| CM | 마시모 도나티 | Massimo Donati | B+ | 33 | backup |
| LW | 에이든 맥기디 | Aiden McGeady | A- | 18 | starter |
| LW | 배리 롭슨 | Barry Robson | B0 | 25 | backup |
| RW | 나카무라 슌스케 | Shunsuke Nakamura | A0 | 10 | starter |
| ST | 스콧 맥도널드 | Scott McDonald | A0 | 19 | starter |
| ST | 얀 페네호르 오프 헤셀링크 | Jan Vennegoor of Hesselink | B+ | 35 | starter |
| ST | 요르고스 사마라스 | Georgios Samaras | B0 | 38 | backup |

### Sevilla FC — 20명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 안드레스 팔로프 | Andrés Palop | A0 | 11 | starter |
| GK | 모르간 데 상크티스 | Morgan De Sanctis | B+ | 20 | backup |
| CB | 페데리코 파시오 | Federico Fazio | A- | 29 | starter |
| CB | 줄리앵 에스퀴데 | Julien Escudé | A- | 30 | backup |
| CB | 아퀴발도 모스케라 | Aquivaldo Mosquera | B+ | 37 | starter |
| LB | 이비차 드라구티노비치 | Ivica Dragutinović | A- | 11 | starter |
| LB | 호세 앙헬 크레스포 | José Ángel Crespo | B+ | 21 | backup |
| RB | 다니 아우베스 | Dani Alves | A+ | 1 | starter |
| RB | 할리드 불라루즈 | Khalid Boulahrouz | B+ | 23 | backup |
| DM | 크리스티안 폴센 | Christian Poulsen | A0 | 12 | starter |
| DM | 호세 루이스 마르티 | José Luis Martí | B+ | 26 | backup |
| CM | 세이두 케이타 | Seydou Keita | A0 | 11 | starter |
| CM | 헤나투 | Renato | B+ | 29 | backup |
| LW | 아드리아누 코헤이아 | Adriano Correia | A- | 11 | backup |
| LW | 디에고 카펠 | Diego Capel | A- | 12 | starter |
| RW | 헤수스 나바스 | Jesús Navas | A0 | 6 | starter |
| RW | 톰 더 뮐 | Tom De Mul | B+ | 22 | backup |
| ST | 프레데리크 카누테 | Frédéric Kanouté | A+ | 3 | starter |
| ST | 루이스 파비아누 | Luís Fabiano | A+ | 6 | starter |
| ST | 아루나 코네 | Arouna Koné | B+ | 28 | backup |

### Olympique Lyonnais — 19명

| 포지션 | 한글 이름 | 원어명 | 티어 | 포지션 순위 | 주전/후보 원본 표시 |
|---|---|---|---|---:|---|
| GK | 그레고리 쿠페 | Grégory Coupet | A0 | 13 | starter |
| GK | 레미 베르쿠트르 | Rémy Vercoutre | B+ | 17 | backup |
| CB | 세바스티앵 스킬라치 | Sébastien Squillaci | A0 | 9 | starter |
| CB | 크리스 | Cris | A0 | 22 | starter |
| CB | 마티외 보드메르 | Mathieu Bodmer | A- | 27 | backup |
| LB | 파비오 그로소 | Fabio Grosso | A- | 9 | starter |
| LB | 나디르 벨하지 | Nadir Belhadj | B+ | 23 | backup |
| RB | 앙토니 레베예르 | Anthony Réveillère | A- | 11 | starter |
| RB | 프랑수아 클레르 | François Clerc | A- | 13 | backup |
| DM | 제레미 툴랄랑 | Jérémy Toulalan | A+ | 6 | starter |
| DM | 파비우 산투스 | Fábio Santos | B+ | 22 | backup |
| CM | 주니뉴 페르남부카누 | Juninho Pernambucano | A+ | 5 | starter |
| CM | 킴 셸스트룀 | Kim Källström | A0 | 10 | starter |
| CM | 마르크 크로사스 | Marc Crosas | B+ | 30 | backup |
| LW | 하템 벤 아르파 | Hatem Ben Arfa | A0 | 8 | starter |
| RW | 시드네 고부 | Sidney Govou | A0 | 8 | starter |
| RW | 압둘 카데르 케이타 | Abdul Kader Keïta | A- | 14 | backup |
| ST | 카림 벤제마 | Karim Benzema | A+ | 5 | starter |
| ST | 프레드 | Fred | B+ | 27 | backup |

## 8. 포지션별 1~3위

| 포지션 | 1위 | 2위 | 3위 |
|---|---|---|---|
| GK | 페트르 체흐 (A+) | 마누엘 노이어 (A+) | 페페 레이나 (A+) |
| CB | 리오 퍼디난드 (A+) | 존 테리 (A+) | 제이미 캐러거 (A+) |
| LB | 파트리스 에브라 (A+) | 가엘 클리시 (A0) | 하이코 베스터만 (A0) |
| RB | 다니 아우베스 (A+) | 세르히오 라모스 (A+) | 마이콩 (A+) |
| DM | 마이클 캐릭 (A+) | 안드레아 피를로 (A+) | 다니엘레 데 로시 (A+) |
| CM | 프랭크 램퍼드 (A+) | 세스크 파브레가스 (A+) | 하비에르 사네티 (A+) |
| CAM | 스티븐 제라드 (S) | 알렉스 (A+) | 미하엘 발라크 (A+) |
| LW | 호비뉴 (A0) | 라이언 바벌 (A0) | 미르코 부치니치 (A0) |
| RW | 크리스티아누 호날두 (S) | 리오넬 메시 (A+) | 디르크 카위트 (A0) |
| ST | 디디에 드로그바 (A+) | 페르난도 토레스 (A+) | 프레데리크 카누테 (A+) |

## 9. World Class S/A+ 전원

| 포지션 | 포지션 순위 | 선수 | 구단 | 티어 |
|---|---:|---|---|---|
| GK | 1 | 페트르 체흐 | Chelsea FC | A+ |
| GK | 2 | 마누엘 노이어 | FC Schalke 04 | A+ |
| GK | 3 | 페페 레이나 | Liverpool FC | A+ |
| GK | 4 | 에드빈 판데르사르 | Manchester United FC | A+ |
| GK | 5 | 이케르 카시야스 | Real Madrid CF | A+ |
| GK | 6 | 줄리우 세자르 | FC Internazionale Milano | A+ |
| GK | 7 | 빅토르 발데스 | FC Barcelona | A+ |
| CB | 1 | 리오 퍼디난드 | Manchester United FC | A+ |
| CB | 2 | 존 테리 | Chelsea FC | A+ |
| CB | 3 | 제이미 캐러거 | Liverpool FC | A+ |
| CB | 4 | 네마냐 비디치 | Manchester United FC | A+ |
| CB | 5 | 카를레스 푸욜 | FC Barcelona | A+ |
| CB | 6 | 히카르두 카르발류 | Chelsea FC | A+ |
| CB | 7 | 알레산드로 네스타 | AC Milan | A+ |
| LB | 1 | 파트리스 에브라 | Manchester United FC | A+ |
| RB | 1 | 다니 아우베스 | Sevilla FC | A+ |
| RB | 2 | 세르히오 라모스 | Real Madrid CF | A+ |
| RB | 3 | 마이콩 | FC Internazionale Milano | A+ |
| RB | 4 | 주제 보싱와 | FC Porto | A+ |
| DM | 1 | 마이클 캐릭 | Manchester United FC | A+ |
| DM | 2 | 안드레아 피를로 | AC Milan | A+ |
| DM | 3 | 다니엘레 데 로시 | AS Roma | A+ |
| DM | 4 | 에스테반 캄비아소 | FC Internazionale Milano | A+ |
| DM | 5 | 마티외 플라미니 | Arsenal FC | A+ |
| DM | 6 | 제레미 툴랄랑 | Olympique Lyonnais | A+ |
| DM | 7 | 하비에르 마스체라노 | Liverpool FC | A+ |
| DM | 8 | 클로드 마켈렐레 | Chelsea FC | A+ |
| CM | 1 | 프랭크 램퍼드 | Chelsea FC | A+ |
| CM | 2 | 세스크 파브레가스 | Arsenal FC | A+ |
| CM | 3 | 하비에르 사네티 | FC Internazionale Milano | A+ |
| CM | 4 | 사비 에르난데스 | FC Barcelona | A+ |
| CM | 5 | 주니뉴 페르남부카누 | Olympique Lyonnais | A+ |
| CM | 6 | 안드레스 이니에스타 | FC Barcelona | A+ |
| CM | 7 | 마이클 에시엔 | Chelsea FC | A+ |
| CM | 8 | 폴 스콜스 | Manchester United FC | A+ |
| CAM | 1 | 스티븐 제라드 | Liverpool FC | S |
| CAM | 2 | 알렉스 | Fenerbahçe SK | A+ |
| CAM | 3 | 미하엘 발라크 | Chelsea FC | A+ |
| CAM | 4 | 카카 | AC Milan | A+ |
| RW | 1 | 크리스티아누 호날두 | Manchester United FC | S |
| RW | 2 | 리오넬 메시 | FC Barcelona | A+ |
| ST | 1 | 디디에 드로그바 | Chelsea FC | A+ |
| ST | 2 | 페르난도 토레스 | Liverpool FC | A+ |
| ST | 3 | 프레데리크 카누테 | Sevilla FC | A+ |
| ST | 4 | 즐라탄 이브라히모비치 | FC Internazionale Milano | A+ |
| ST | 5 | 카림 벤제마 | Olympique Lyonnais | A+ |
| ST | 6 | 루이스 파비아누 | Sevilla FC | A+ |
| ST | 7 | 뤼트 판니스텔로이 | Real Madrid CF | A+ |
| ST | 8 | 에마뉘엘 아데바요르 | Arsenal FC | A+ |
| ST | 9 | 카를로스 테베스 | Manchester United FC | A+ |
| ST | 10 | 프란체스코 토티 | AS Roma | A+ |
| ST | 11 | 웨인 루니 | Manchester United FC | A+ |
| ST | 12 | 리산드로 로페스 | FC Porto | A+ |

## 10. Top Class S/A+/A0/A- 전원 (World Class 포함)

| 포지션 | 포지션 순위 | 선수 | 구단 | 티어 |
|---|---:|---|---|---|
| GK | 1 | 페트르 체흐 | Chelsea FC | A+ |
| GK | 2 | 마누엘 노이어 | FC Schalke 04 | A+ |
| GK | 3 | 페페 레이나 | Liverpool FC | A+ |
| GK | 4 | 에드빈 판데르사르 | Manchester United FC | A+ |
| GK | 5 | 이케르 카시야스 | Real Madrid CF | A+ |
| GK | 6 | 줄리우 세자르 | FC Internazionale Milano | A+ |
| GK | 7 | 빅토르 발데스 | FC Barcelona | A+ |
| GK | 8 | 안토니오스 니코폴리디스 | Olympiacos FC | A0 |
| GK | 9 | 아르투르 보루츠 | Celtic FC | A0 |
| GK | 10 | 도니 | AS Roma | A0 |
| GK | 11 | 안드레스 팔로프 | Sevilla FC | A0 |
| GK | 12 | 마누엘 알무니아 | Arsenal FC | A0 |
| GK | 13 | 그레고리 쿠페 | Olympique Lyonnais | A0 |
| GK | 14 | 엘통 | FC Porto | A0 |
| GK | 15 | 볼칸 데미렐 | Fenerbahçe SK | A0 |
| GK | 16 | 젤코 칼라치 | AC Milan | A- |
| CB | 1 | 리오 퍼디난드 | Manchester United FC | A+ |
| CB | 2 | 존 테리 | Chelsea FC | A+ |
| CB | 3 | 제이미 캐러거 | Liverpool FC | A+ |
| CB | 4 | 네마냐 비디치 | Manchester United FC | A+ |
| CB | 5 | 카를레스 푸욜 | FC Barcelona | A+ |
| CB | 6 | 히카르두 카르발류 | Chelsea FC | A+ |
| CB | 7 | 알레산드로 네스타 | AC Milan | A+ |
| CB | 8 | 파비오 칸나바로 | Real Madrid CF | A0 |
| CB | 9 | 세바스티앵 스킬라치 | Olympique Lyonnais | A0 |
| CB | 10 | 마르셀루 보르동 | FC Schalke 04 | A0 |
| CB | 11 | 윌리암 갈라스 | Arsenal FC | A0 |
| CB | 12 | 필리프 멕세스 | AS Roma | A0 |
| CB | 13 | 콜로 투레 | Arsenal FC | A0 |
| CB | 14 | 가브리엘 밀리토 | FC Barcelona | A0 |
| CB | 15 | 사미 히피아 | Liverpool FC | A0 |
| CB | 16 | 알렉스 | Chelsea FC | A0 |
| CB | 17 | 이반 코르도바 | FC Internazionale Milano | A0 |
| CB | 18 | 주앙 | AS Roma | A0 |
| CB | 19 | 페페 | Real Madrid CF | A0 |
| CB | 20 | 마르코 마테라치 | FC Internazionale Milano | A0 |
| CB | 21 | 라파엘 마르케스 | FC Barcelona | A0 |
| CB | 22 | 크리스 | Olympique Lyonnais | A0 |
| CB | 23 | 브루누 알베스 | FC Porto | A0 |
| CB | 24 | 디에고 루가노 | Fenerbahçe SK | A0 |
| CB | 25 | 에두 드라세나 | Fenerbahçe SK | A0 |
| CB | 26 | 파올로 말디니 | AC Milan | A0 |
| CB | 27 | 마티외 보드메르 | Olympique Lyonnais | A- |
| CB | 28 | 믈라덴 크르스타이치 | FC Schalke 04 | A- |
| CB | 29 | 페데리코 파시오 | Sevilla FC | A- |
| CB | 30 | 줄리앵 에스퀴데 | Sevilla FC | A- |
| CB | 31 | 필리프 센데로스 | Arsenal FC | A- |
| CB | 32 | 마르틴 슈크르텔 | Liverpool FC | A- |
| CB | 33 | 카하 칼라제 | AC Milan | A- |
| CB | 34 | 미하우 제브와코프 | Olympiacos FC | A- |
| CB | 35 | 페드루 에마누엘 | FC Porto | A- |
| CB | 36 | 스티븐 맥마너스 | Celtic FC | A- |
| LB | 1 | 파트리스 에브라 | Manchester United FC | A+ |
| LB | 2 | 가엘 클리시 | Arsenal FC | A0 |
| LB | 3 | 하이코 베스터만 | FC Schalke 04 | A0 |
| LB | 4 | 에리크 아비달 | FC Barcelona | A0 |
| LB | 5 | 애슐리 콜 | Chelsea FC | A0 |
| LB | 6 | 막스웰 | FC Internazionale Milano | A0 |
| LB | 7 | 크리스티안 키부 | FC Internazionale Milano | A0 |
| LB | 8 | 막스 토네토 | AS Roma | A- |
| LB | 9 | 파비오 그로소 | Olympique Lyonnais | A- |
| LB | 10 | 마르셀루 | Real Madrid CF | A- |
| LB | 11 | 이비차 드라구티노비치 | Sevilla FC | A- |
| LB | 12 | 욘 아르네 리세 | Liverpool FC | A- |
| LB | 13 | 가브리엘 에인세 | Real Madrid CF | A- |
| LB | 14 | 파비우 아우렐리우 | Liverpool FC | A- |
| LB | 15 | 시우비뉴 | FC Barcelona | A- |
| LB | 16 | 웨인 브리지 | Chelsea FC | A- |
| LB | 17 | 호르헤 푸실레 | FC Porto | A- |
| LB | 18 | 마레크 얀쿨롭스키 | AC Milan | A- |
| LB | 19 | 호베르투 카를루스 | Fenerbahçe SK | A- |
| RB | 1 | 다니 아우베스 | Sevilla FC | A+ |
| RB | 2 | 세르히오 라모스 | Real Madrid CF | A+ |
| RB | 3 | 마이콩 | FC Internazionale Milano | A+ |
| RB | 4 | 주제 보싱와 | FC Porto | A+ |
| RB | 5 | 웨스 브라운 | Manchester United FC | A0 |
| RB | 6 | 하피냐 | FC Schalke 04 | A0 |
| RB | 7 | 바카리 사냐 | Arsenal FC | A0 |
| RB | 8 | 알바로 아르벨로아 | Liverpool FC | A0 |
| RB | 9 | 잔루카 잠브로타 | FC Barcelona | A0 |
| RB | 10 | 괴칸 괴뉠 | Fenerbahçe SK | A0 |
| RB | 11 | 앙토니 레베예르 | Olympique Lyonnais | A- |
| RB | 12 | 크리스티안 파누치 | AS Roma | A- |
| RB | 13 | 프랑수아 클레르 | Olympique Lyonnais | A- |
| RB | 14 | 줄리아누 벨레치 | Chelsea FC | A- |
| RB | 15 | 시시뉴 | AS Roma | A- |
| RB | 16 | 파울루 페헤이라 | Chelsea FC | A- |
| RB | 17 | 마시모 오도 | AC Milan | A- |
| RB | 18 | 바실리스 토로시디스 | Olympiacos FC | A- |
| DM | 1 | 마이클 캐릭 | Manchester United FC | A+ |
| DM | 2 | 안드레아 피를로 | AC Milan | A+ |
| DM | 3 | 다니엘레 데 로시 | AS Roma | A+ |
| DM | 4 | 에스테반 캄비아소 | FC Internazionale Milano | A+ |
| DM | 5 | 마티외 플라미니 | Arsenal FC | A+ |
| DM | 6 | 제레미 툴랄랑 | Olympique Lyonnais | A+ |
| DM | 7 | 하비에르 마스체라노 | Liverpool FC | A+ |
| DM | 8 | 클로드 마켈렐레 | Chelsea FC | A+ |
| DM | 9 | 저메인 존스 | FC Schalke 04 | A0 |
| DM | 10 | 마하마두 디아라 | Real Madrid CF | A0 |
| DM | 11 | 야야 투레 | FC Barcelona | A0 |
| DM | 12 | 크리스티안 폴센 | Sevilla FC | A0 |
| DM | 13 | 존 오비 미켈 | Chelsea FC | A0 |
| DM | 14 | 오언 하그리브스 | Manchester United FC | A0 |
| DM | 15 | 이에로클리스 스톨티디스 | Olympiacos FC | A0 |
| DM | 16 | 메흐메트 아우렐리우 | Fenerbahçe SK | A0 |
| DM | 17 | 파울루 아순상 | FC Porto | A0 |
| DM | 18 | 지우베르투 시우바 | Arsenal FC | A- |
| CM | 1 | 프랭크 램퍼드 | Chelsea FC | A+ |
| CM | 2 | 세스크 파브레가스 | Arsenal FC | A+ |
| CM | 3 | 하비에르 사네티 | FC Internazionale Milano | A+ |
| CM | 4 | 사비 에르난데스 | FC Barcelona | A+ |
| CM | 5 | 주니뉴 페르남부카누 | Olympique Lyonnais | A+ |
| CM | 6 | 안드레스 이니에스타 | FC Barcelona | A+ |
| CM | 7 | 마이클 에시엔 | Chelsea FC | A+ |
| CM | 8 | 폴 스콜스 | Manchester United FC | A+ |
| CM | 9 | 다비드 피사로 | AS Roma | A0 |
| CM | 10 | 킴 셸스트룀 | Olympique Lyonnais | A0 |
| CM | 11 | 세이두 케이타 | Sevilla FC | A0 |
| CM | 12 | 구티 | Real Madrid CF | A0 |
| CM | 13 | 알베르토 아퀼라니 | AS Roma | A0 |
| CM | 14 | 클라렌스 세도르프 | AC Milan | A0 |
| CM | 15 | 젠나로 가투소 | AC Milan | A0 |
| CM | 16 | 마시모 암브로시니 | AC Milan | A0 |
| CM | 17 | 하울 메이렐르스 | FC Porto | A0 |
| CM | 18 | 파비안 에른스트 | FC Schalke 04 | A- |
| CM | 19 | 베슬레이 스네이더르 | Real Madrid CF | A- |
| CM | 20 | 안데르송 | Manchester United FC | A- |
| CM | 21 | 사비 알론소 | Liverpool FC | A- |
| CM | 22 | 데쿠 | FC Barcelona | A- |
| CM | 23 | 파트리크 비에이라 | FC Internazionale Milano | A- |
| CM | 24 | 데니우송 | Arsenal FC | A- |
| CM | 25 | 마니시 | FC Internazionale Milano | A- |
| CM | 26 | 크리스티안 레데스마 | Olympiacos FC | A- |
| CM | 27 | 스콧 브라운 | Celtic FC | A- |
| CM | 28 | 셀추크 샤힌 | Fenerbahçe SK | A- |
| CAM | 1 | 스티븐 제라드 | Liverpool FC | S |
| CAM | 2 | 알렉스 | Fenerbahçe SK | A+ |
| CAM | 3 | 미하엘 발라크 | Chelsea FC | A+ |
| CAM | 4 | 카카 | AC Milan | A+ |
| CAM | 5 | 시모네 페로타 | AS Roma | A0 |
| CAM | 6 | 루초 곤살레스 | FC Porto | A0 |
| CAM | 7 | 이반 라키티치 | FC Schalke 04 | A- |
| CAM | 8 | 데얀 스탄코비치 | FC Internazionale Milano | A- |
| CAM | 9 | 뤼도비크 지울리 | AS Roma | A- |
| CAM | 10 | 루이스 피구 | FC Internazionale Milano | A- |
| LW | 1 | 호비뉴 | Real Madrid CF | A0 |
| LW | 2 | 라이언 바벌 | Liverpool FC | A0 |
| LW | 3 | 미르코 부치니치 | AS Roma | A0 |
| LW | 4 | 프레드라그 조르제비치 | Olympiacos FC | A0 |
| LW | 5 | 만시니 | AS Roma | A0 |
| LW | 6 | 티에리 앙리 | FC Barcelona | A0 |
| LW | 7 | 라이언 긱스 | Manchester United FC | A0 |
| LW | 8 | 하템 벤 아르파 | Olympique Lyonnais | A0 |
| LW | 9 | 히카르두 콰레스마 | FC Porto | A0 |
| LW | 10 | 살로몽 칼루 | Chelsea FC | A- |
| LW | 11 | 아드리아누 코헤이아 | Sevilla FC | A- |
| LW | 12 | 디에고 카펠 | Sevilla FC | A- |
| LW | 13 | 플로랑 말루다 | Chelsea FC | A- |
| LW | 14 | 나니 | Manchester United FC | A- |
| LW | 15 | 토마시 로시츠키 | Arsenal FC | A- |
| LW | 16 | 호나우지뉴 | FC Barcelona | A- |
| LW | 17 | 레반 코비아슈빌리 | FC Schalke 04 | A- |
| LW | 18 | 에이든 맥기디 | Celtic FC | A- |
| LW | 19 | 우우르 보랄 | Fenerbahçe SK | A- |
| RW | 1 | 크리스티아누 호날두 | Manchester United FC | S |
| RW | 2 | 리오넬 메시 | FC Barcelona | A+ |
| RW | 3 | 디르크 카위트 | Liverpool FC | A0 |
| RW | 4 | 데이비드 | Fenerbahçe SK | A0 |
| RW | 5 | 알략산드르 흘레프 | Arsenal FC | A0 |
| RW | 6 | 헤수스 나바스 | Sevilla FC | A0 |
| RW | 7 | 조 콜 | Chelsea FC | A0 |
| RW | 8 | 시드네 고부 | Olympique Lyonnais | A0 |
| RW | 9 | 루시아노 가예티 | Olympiacos FC | A0 |
| RW | 10 | 나카무라 슌스케 | Celtic FC | A0 |
| RW | 11 | 호드리구 타데이 | AS Roma | A- |
| RW | 12 | 게랄트 아사모아 | FC Schalke 04 | A- |
| RW | 13 | 에마뉘엘 에부에 | Arsenal FC | A- |
| RW | 14 | 압둘 카데르 케이타 | Olympique Lyonnais | A- |
| RW | 15 | 요시 베나윤 | Liverpool FC | A- |
| RW | 16 | 아르연 로번 | Real Madrid CF | A- |
| RW | 17 | 박지성 | Manchester United FC | A- |
| RW | 18 | 타리크 세크티위 | FC Porto | A- |
| ST | 1 | 디디에 드로그바 | Chelsea FC | A+ |
| ST | 2 | 페르난도 토레스 | Liverpool FC | A+ |
| ST | 3 | 프레데리크 카누테 | Sevilla FC | A+ |
| ST | 4 | 즐라탄 이브라히모비치 | FC Internazionale Milano | A+ |
| ST | 5 | 카림 벤제마 | Olympique Lyonnais | A+ |
| ST | 6 | 루이스 파비아누 | Sevilla FC | A+ |
| ST | 7 | 뤼트 판니스텔로이 | Real Madrid CF | A+ |
| ST | 8 | 에마뉘엘 아데바요르 | Arsenal FC | A+ |
| ST | 9 | 카를로스 테베스 | Manchester United FC | A+ |
| ST | 10 | 프란체스코 토티 | AS Roma | A+ |
| ST | 11 | 웨인 루니 | Manchester United FC | A+ |
| ST | 12 | 리산드로 로페스 | FC Porto | A+ |
| ST | 13 | 라울 곤살레스 | Real Madrid CF | A0 |
| ST | 14 | 케빈 쿠라니 | FC Schalke 04 | A0 |
| ST | 15 | 훌리오 리카르도 크루스 | FC Internazionale Milano | A0 |
| ST | 16 | 사뮈엘 에토 | FC Barcelona | A0 |
| ST | 17 | 로빈 판페르시 | Arsenal FC | A0 |
| ST | 18 | 필리포 인차기 | AC Milan | A0 |
| ST | 19 | 스콧 맥도널드 | Celtic FC | A0 |
| ST | 20 | 보얀 크르키치 | FC Barcelona | A- |
| ST | 21 | 니콜라 아넬카 | Chelsea FC | A- |
| ST | 22 | 피터 크라우치 | Liverpool FC | A- |
| ST | 23 | 니클라스 벤트네르 | Arsenal FC | A- |
| ST | 24 | 다르코 코바체비치 | Olympiacos FC | A- |
| ST | 25 | 세미흐 셴튀르크 | Fenerbahçe SK | A- |

## 11. Best XI — 4-2-3-1 (기존 11인 유지)

| 포지션 | 선수 | 원어명 | 해당 구단 | 티어 | 포지션 순위 | 주요 개인근거 |
|---|---|---|---|---|---:|---|
| GK | 페트르 체흐 | Petr Čech | Chelsea FC | A+ | 1 | 2008 UEFA 최우수 골키퍼 |
| RB | 다니 아우베스 | Dani Alves | Sevilla FC | A+ | 1 | UEFA 기술보고서상 8경기·750분·2골, 오버래핑·프리킥·공격 연결 높게 평가 |
| CB | 존 테리 | John Terry | Chelsea FC | A+ | 2 | 2008 UEFA 최우수 수비수 |
| CB | 리오 퍼디난드 | Rio Ferdinand | Manchester United FC | A+ | 1 | 2007-08 UCL 맨유 수비 핵심, UEFA 기술 보고서 해당 선수 출전표 기재. 과거 2시즌 수비 연속성과 함께 평가 |
| LB | 파트리스 에브라 | Patrice Evra | Manchester United FC | A+ | 1 | 왼쪽 1대1 수비와 공간 회복, 공격 전환 지원 |
| DM | 마이클 캐릭 | Michael Carrick | Manchester United FC | A+ | 1 | 2007-08 UEFA 기술보고서에서 맨유 중원 수비·패스 구성원으로 확인 |
| CM | 프랭크 램퍼드 | Frank Lampard | Chelsea FC | A+ | 1 | 2008 UEFA 최우수 미드필더 |
| CAM | 스티븐 제라드 | Steven Gerrard | Liverpool FC | S | 1 | 2007-08 UCL 6득점·4도움 |
| LW | 호비뉴 | Robinho | Real Madrid CF | A0 | 1 | 2007-08 UCL 4골·4도움, UEFA 기술 보고서상 6경기 403분(기관별 집계차 주의) |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | S | 1 | 2007-08 UCL 최다득점 8골; 2008 UEFA 클럽 올해의 선수·최우수 공격수 |
| ST | 디디에 드로그바 | Didier Drogba | Chelsea FC | A+ | 1 | 2007-08 UCL 6골, UEFA 2008 대회 유효 슈팅 22개(1위) |

### Best XI 주요 경합 및 유지 사유

| 위치 | 기존 선정 | 대안 | 개인 근거 및 추후 검증 쟁점 |
|---|---|---|---|
| GK | 페트르 체흐 (Chelsea FC) | 에드빈 판데르사르, 마누엘 노이어 | 2008 UEFA 골키퍼상은 체흐. 판데르사르는 결승 승부차기 승부의 결정적 선방, 노이어는 FC Porto전 승부차기와 대회 39세이브를 기록해 비교 가치가 높음. |
| RB | 다니 아우베스 (Sevilla FC) | 세르히오 라모스, 마이콩, 주제 보싱와 | UEFA 기술 보고서상 다니 아우베스는 대회 8경기·750분, 2골. 후방 전개·오버래핑·프리킥과 공격 생산 반영. |
| CB | 존 테리·리오 퍼디난드 | 제이미 캐러거, 네마냐 비디치, 카를레스 푸욜 | 테리는 2008 UEFA 수비수상, 퍼디난드는 맨유 수비 조직에서 큰 영향력. 다른 동시대 수비 리더들과는 후보 평가 3시즌 가용성 추가 대조 필요. |
| LB | 파트리스 에브라 | 가엘 클리시, 하이코 베스터만 | 좌측 수비 복귀·전진과 1대1 대인 커버 기여, 2005-06 대비 맨유 주전으로 자리 잡은 지속성. |
| DM/CM | 마이클 캐릭·프랭크 램퍼드 | 마스체라노, 플라미니, 캄비아소, 파브레가스 | 전술상 캐릭의 후방 배급과 수비 지원, 램퍼드의 박스 침투·득점. 램퍼드는 2008 UEFA 최우수 미드필더. |
| CAM | 스티븐 제라드 | 알렉스, 미하엘 발라크 | 제라드는 6골·4도움, 알렉스(페네르바흐체)는 6도움으로 대회 도움 1위. 공격형 미드필드 역할과 단순 팀 성적을 분리해 비교. |
| LW | 호비뉴 | 라이언 바벌, 만시니, 프레드라그 조르제비치 | 호비뉴는 6경기 4골·4도움, 바벌은 11경기 5골. 전자의 공격 효율과 후자의 토너먼트 기여 모두 고려. 현재 잠정 1위 호비뉴 유지. |
| RW | 크리스티아누 호날두 | 리오넬 메시, 데이비드 | 호날두 8골 득점왕·2008 UEFA 올해의 선수. 메시는 6골로 차상위권, 데이비드는 5골. 전술적 역할과 유럽대항전 경력 지속성 구분. |
| ST | 디디에 드로그바 | 페르난도 토레스, 즐라탄 이브라히모비치, 카누테 | 드로그바와 토레스는 6골, 드로그바는 유효슈팅 22개(최다). 토레스는 10경기·874분의 전방 침투 기여. 2005-06/2006-07 비중 차등 반영. |

## 12. UEFA 동시대 공식근거 15명 재검증

| 선수 | 소속 | 포지션 | 티어 | 해당 시즌 근거 | URL |
|---|---|---|---|---|---|
| 페트르 체흐 | Chelsea FC | GK | A+ | 2008 UEFA 최우수 골키퍼 | https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/ |
| 마누엘 노이어 | FC Schalke 04 | GK | A+ | 2007-08 UCL 39선방(2위), FC Porto 상대 승부차기 대응. UEFA 기술 보고서 10경기·930분 | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |
| 리오 퍼디난드 | Manchester United FC | CB | A+ | 2007-08 UCL 맨유 수비 핵심, UEFA 기술 보고서 해당 선수 출전표 기재. 과거 2시즌 수비 연속성과 함께 평가 | https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |
| 존 테리 | Chelsea FC | CB | A+ | 2008 UEFA 최우수 수비수 | https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/ |
| 다니 아우베스 | Sevilla FC | RB | A+ | UEFA 기술보고서상 8경기·750분·2골, 오버래핑·프리킥·공격 연결 높게 평가 | https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |
| 마이클 캐릭 | Manchester United FC | DM | A+ | 2007-08 UEFA 기술보고서에서 맨유 중원 수비·패스 구성원으로 확인 | https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |
| 프랭크 램퍼드 | Chelsea FC | CM | A+ | 2008 UEFA 최우수 미드필더 | https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/ |
| 스티븐 제라드 | Liverpool FC | CAM | S | 2007-08 UCL 6득점·4도움 | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ |
| 알렉스 | Fenerbahçe SK | CAM | A+ | 2007-08 UCL 도움 6개(1위). 첼시 중앙수비수 Alex와 서로 다른 선수 | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ |
| 호비뉴 | Real Madrid CF | LW | A0 | 2007-08 UCL 4골·4도움, UEFA 기술 보고서상 6경기 403분(기관별 집계차 주의) | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |
| 라이언 바벌 | Liverpool FC | LW | A0 | 2007-08 UCL 5골, UEFA 기술 보고서 11경기·601분 | https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |
| 크리스티아누 호날두 | Manchester United FC | RW | S | 2007-08 UCL 최다득점 8골; 2008 UEFA 클럽 올해의 선수·최우수 공격수 | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/ |
| 리오넬 메시 | FC Barcelona | RW | A+ | 2007-08 UCL 6골(공동 2위), 2005-06/2006-07보다 이번 시즌의 개인 영향력을 우선 고려 | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ |
| 디디에 드로그바 | Chelsea FC | ST | A+ | 2007-08 UCL 6골, UEFA 2008 대회 유효 슈팅 22개(1위) | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ |
| 페르난도 토레스 | Liverpool FC | ST | A+ | 2007-08 UCL 6골, UEFA 기술 보고서 10경기·874분 | https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf |

## 13. 선수별 평가 근거와 3시즌 판단(299명)

아래의 기존 사유는 원본 DRAFT의 판단을 옮긴 것이다. 당해 UEFA 수치가 별도로 확인된 15명에 한해 공식 검증 표식을 부여했다. 나머지는 UCL 개인 출장·팀 주전, 직전 2시즌 개인 기여를 모두 독립 검증한 등급으로 오해하지 않도록 한다.

- **GK 1위 페트르 체흐 (Petr Čech) | A+ | Chelsea FC**: 2008 UEFA 최우수 골키퍼. 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 26회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2008 UEFA 최우수 골키퍼. 링크 https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/
- **GK 2위 마누엘 노이어 (Manuel Neuer) | A+ | FC Schalke 04**: 2008 UEFA 골키퍼상 후보, 포르투 상대 승부차기 선방. 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 34회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 39선방(2위), FC Porto 상대 승부차기 대응. UEFA 기술 보고서 10경기·930분. 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **GK 3위 페페 레이나 (Pepe Reina) | A+ | Liverpool FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 38회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 4위 에드빈 판데르사르 (Edwin van der Sar) | A+ | Manchester United FC**: 2008 챔피언스리그 결승 첼시와의 승부차기 마지막 선방. 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 5위 이케르 카시야스 (Iker Casillas) | A+ | Real Madrid CF**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 36회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 6위 줄리우 세자르 (Júlio César) | A+ | FC Internazionale Milano**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 35회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 7위 빅토르 발데스 (Víctor Valdés) | A+ | FC Barcelona**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 35회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 8위 안토니오스 니코폴리디스 (Antonios Nikopolidis) | A0 | Olympiacos FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 9위 아르투르 보루츠 (Artur Boruc) | A0 | Celtic FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 10위 도니 (Doni) | A0 | AS Roma**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 37회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 11위 안드레스 팔로프 (Andrés Palop) | A0 | Sevilla FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 12위 마누엘 알무니아 (Manuel Almunia) | A0 | Arsenal FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 13위 그레고리 쿠페 (Grégory Coupet) | A0 | Olympique Lyonnais**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 19회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 14위 엘통 (Helton) | A0 | FC Porto**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 15위 볼칸 데미렐 (Volkan Demirel) | A0 | Fenerbahçe SK**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 16위 젤코 칼라치 (Željko Kalac) | A- | AC Milan**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 17위 레미 베르쿠트르 (Rémy Vercoutre) | B+ | Olympique Lyonnais**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 19회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 18위 카를로 쿠디치니 (Carlo Cudicini) | B+ | Chelsea FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 10회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 19위 토마시 쿠슈차크 (Tomasz Kuszczak) | B+ | Manchester United FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 8회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 20위 모르간 데 상크티스 (Morgan De Sanctis) | B+ | Sevilla FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 21위 옌스 레만 (Jens Lehmann) | B+ | Arsenal FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 6회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 22위 호세 마누엘 핀토 (José Manuel Pinto) | B+ | FC Barcelona**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 3회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 23위 프란체스코 톨도 (Francesco Toldo) | B+ | FC Internazionale Milano**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 2회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 24위 잔루카 쿠르치 (Gianluca Curci) | B+ | AS Roma**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 1회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 25위 예지 두데크 (Jerzy Dudek) | B+ | Real Madrid CF**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 1회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 26위 지다 (Dida) | B+ | AC Milan**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 27위 누누 이스피리투 산투 (Nuno Espírito Santo) | B+ | FC Porto**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 28위 마크 브라운 (Mark Brown) | B0 | Celtic FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 29위 미할리스 시파키스 (Michalis Sifakis) | B0 | Olympiacos FC**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **GK 30위 세르다르 쿨빌게 (Serdar Kulbilge) | B0 | Fenerbahçe SK**: 2007-08 UCL 골문 보호, 개인 선방 및 후방 조율의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 1위 리오 퍼디난드 (Rio Ferdinand) | A+ | Manchester United FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 35회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 맨유 수비 핵심, UEFA 기술 보고서 해당 선수 출전표 기재. 과거 2시즌 수비 연속성과 함께 평가. 링크 https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **CB 2위 존 테리 (John Terry) | A+ | Chelsea FC**: 2008 UEFA 최우수 수비수. 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2008 UEFA 최우수 수비수. 링크 https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/
- **CB 3위 제이미 캐러거 (Jamie Carragher) | A+ | Liverpool FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 34회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 4위 네마냐 비디치 (Nemanja Vidić) | A+ | Manchester United FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 5위 카를레스 푸욜 (Carles Puyol) | A+ | FC Barcelona**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 6위 히카르두 카르발류 (Ricardo Carvalho) | A+ | Chelsea FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 21회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 7위 알레산드로 네스타 (Alessandro Nesta) | A+ | AC Milan**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 8위 파비오 칸나바로 (Fabio Cannavaro) | A0 | Real Madrid CF**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 9위 세바스티앵 스킬라치 (Sébastien Squillaci) | A0 | Olympique Lyonnais**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 10위 마르셀루 보르동 (Marcelo Bordon) | A0 | FC Schalke 04**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 11위 윌리암 갈라스 (William Gallas) | A0 | Arsenal FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 12위 필리프 멕세스 (Philippe Mexès) | A0 | AS Roma**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 30회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 13위 콜로 투레 (Kolo Touré) | A0 | Arsenal FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 14위 가브리엘 밀리토 (Gabriel Milito) | A0 | FC Barcelona**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 26회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 15위 사미 히피아 (Sami Hyypiä) | A0 | Liverpool FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 24회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 16위 알렉스 (Alex) | A0 | Chelsea FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 17위 이반 코르도바 (Iván Córdoba) | A0 | FC Internazionale Milano**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 20회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 18위 주앙 (Juan) | A0 | AS Roma**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 19회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 19위 페페 (Pepe) | A0 | Real Madrid CF**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 20위 마르코 마테라치 (Marco Materazzi) | A0 | FC Internazionale Milano**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 21위 라파엘 마르케스 (Rafael Márquez) | A0 | FC Barcelona**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 22위 크리스 (Cris) | A0 | Olympique Lyonnais**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 23위 브루누 알베스 (Bruno Alves) | A0 | FC Porto**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 24위 디에고 루가노 (Diego Lugano) | A0 | Fenerbahçe SK**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 25위 에두 드라세나 (Edu Dracena) | A0 | Fenerbahçe SK**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 26위 파올로 말디니 (Paolo Maldini) | A0 | AC Milan**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 27위 마티외 보드메르 (Mathieu Bodmer) | A- | Olympique Lyonnais**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 28위 믈라덴 크르스타이치 (Mladen Krstajić) | A- | FC Schalke 04**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 29위 페데리코 파시오 (Federico Fazio) | A- | Sevilla FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 18회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 30위 줄리앵 에스퀴데 (Julien Escudé) | A- | Sevilla FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 31위 필리프 센데로스 (Philippe Senderos) | A- | Arsenal FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 14회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 32위 마르틴 슈크르텔 (Martin Škrtel) | A- | Liverpool FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 33위 카하 칼라제 (Kakha Kaladze) | A- | AC Milan**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 34위 미하우 제브와코프 (Michał Żewłakow) | A- | Olympiacos FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 35위 페드루 에마누엘 (Pedro Emanuel) | A- | FC Porto**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 36위 스티븐 맥마너스 (Stephen McManus) | A- | Celtic FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 37위 아퀴발도 모스케라 (Aquivaldo Mosquera) | B+ | Sevilla FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 38위 니콜라스 부르디소 (Nicolás Burdisso) | B+ | FC Internazionale Milano**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 20회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 39위 마테오 페라리 (Matteo Ferrari) | B+ | AS Roma**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 40위 크리스토프 메첼더 (Christoph Metzelder) | B+ | Real Madrid CF**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 41위 제라르 피케 (Gerard Piqué) | B+ | Manchester United FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 5회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 42위 베네딕트 회베데스 (Benedikt Höwedes) | B+ | FC Schalke 04**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 3회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 43위 대런 오디 (Darren O'Dea) | B+ | Celtic FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 44위 게리 콜드웰 (Gary Caldwell) | B+ | Celtic FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 45위 줄리우 세자르 (Júlio César) | B+ | Olympiacos FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 46위 밀란 스테파노프 (Milan Stepanov) | B+ | FC Porto**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 47위 파라스케바스 안차스 (Paraskevas Antzas) | B+ | Olympiacos FC**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CB 48위 야신 차크마크 (Yasin Çakmak) | B0 | Fenerbahçe SK**: 2007-08 UCL 수비라인 운영, 대인 방어 및 회복의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 1위 파트리스 에브라 (Patrice Evra) | A+ | Manchester United FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 2위 가엘 클리시 (Gaël Clichy) | A0 | Arsenal FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 37회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 3위 하이코 베스터만 (Heiko Westermann) | A0 | FC Schalke 04**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 4위 에리크 아비달 (Éric Abidal) | A0 | FC Barcelona**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 5위 애슐리 콜 (Ashley Cole) | A0 | Chelsea FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 6위 막스웰 (Maxwell) | A0 | FC Internazionale Milano**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 7위 크리스티안 키부 (Cristian Chivu) | A0 | FC Internazionale Milano**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 8위 막스 토네토 (Max Tonetto) | A- | AS Roma**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 9위 파비오 그로소 (Fabio Grosso) | A- | Olympique Lyonnais**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 30회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 10위 마르셀루 (Marcelo) | A- | Real Madrid CF**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 24회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 11위 이비차 드라구티노비치 (Ivica Dragutinović) | A- | Sevilla FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 12위 욘 아르네 리세 (John Arne Riise) | A- | Liverpool FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 13위 가브리엘 에인세 (Gabriel Heinze) | A- | Real Madrid CF**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 14위 파비우 아우렐리우 (Fábio Aurélio) | A- | Liverpool FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 15위 시우비뉴 (Sylvinho) | A- | FC Barcelona**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 10회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 16위 웨인 브리지 (Wayne Bridge) | A- | Chelsea FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 9회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 17위 호르헤 푸실레 (Jorge Fucile) | A- | FC Porto**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 18위 마레크 얀쿨롭스키 (Marek Jankulovski) | A- | AC Milan**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 19위 호베르투 카를루스 (Roberto Carlos) | A- | Fenerbahçe SK**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 20위 크리스티안 판더 (Christian Pander) | B+ | FC Schalke 04**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 21위 호세 앙헬 크레스포 (José Ángel Crespo) | B+ | Sevilla FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 22위 미카엘 실베스트르 (Mikaël Silvestre) | B+ | Manchester United FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 3회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 23위 나디르 벨하지 (Nadir Belhadj) | B+ | Olympique Lyonnais**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 3회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 24위 아나스타시오스 판토스 (Anastasios Pantos) | B+ | Olympiacos FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 25위 주세페 파발리 (Giuseppe Favalli) | B+ | AC Milan**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 26위 괴크체크 베데르송 (Gökçek Vederson) | B+ | Fenerbahçe SK**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 27위 리 네일러 (Lee Naylor) | B+ | Celtic FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 28위 마레크 체흐 (Marek Čech) | B+ | FC Porto**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LB 29위 라울 브라보 (Raúl Bravo) | B+ | Olympiacos FC**: 2007-08 UCL 왼쪽 수비, 전환과 전진 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 1위 다니 아우베스 (Dani Alves) | A+ | Sevilla FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** UEFA 기술보고서상 8경기·750분·2골, 오버래핑·프리킥·공격 연결 높게 평가. 링크 https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **RB 2위 세르히오 라모스 (Sergio Ramos) | A+ | Real Madrid CF**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 3위 마이콩 (Maicon) | A+ | FC Internazionale Milano**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 4위 주제 보싱와 (José Bosingwa) | A+ | FC Porto**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 5위 웨스 브라운 (Wes Brown) | A0 | Manchester United FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 34회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 6위 하피냐 (Rafinha) | A0 | FC Schalke 04**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 7위 바카리 사냐 (Bacary Sagna) | A0 | Arsenal FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 8위 알바로 아르벨로아 (Álvaro Arbeloa) | A0 | Liverpool FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 26회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 9위 잔루카 잠브로타 (Gianluca Zambrotta) | A0 | FC Barcelona**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 10위 괴칸 괴뉠 (Gökhan Gönül) | A0 | Fenerbahçe SK**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 11위 앙토니 레베예르 (Anthony Réveillère) | A- | Olympique Lyonnais**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 12위 크리스티안 파누치 (Christian Panucci) | A- | AS Roma**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 21회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 13위 프랑수아 클레르 (François Clerc) | A- | Olympique Lyonnais**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 20회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 14위 줄리아누 벨레치 (Juliano Belletti) | A- | Chelsea FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 20회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 15위 시시뉴 (Cicinho) | A- | AS Roma**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 18회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 16위 파울루 페헤이라 (Paulo Ferreira) | A- | Chelsea FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 17위 마시모 오도 (Massimo Oddo) | A- | AC Milan**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 18위 바실리스 토로시디스 (Vasilis Torosidis) | A- | Olympiacos FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 19위 스티브 피넌 (Steve Finnan) | B+ | Liverpool FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 21회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 20위 미겔 토레스 (Miguel Torres) | B+ | Real Madrid CF**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 21위 존 오셰이 (John O'Shea) | B+ | Manchester United FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 10회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 22위 올레게르 프레사스 (Oleguer Presas) | B+ | FC Barcelona**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 23위 할리드 불라루즈 (Khalid Boulahrouz) | B+ | Sevilla FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 6회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 24위 저스틴 호이트 (Justin Hoyte) | B+ | Arsenal FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 2회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 25위 카푸 (Cafu) | B+ | AC Milan**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 26위 흐리스토스 파차초글루 (Christos Patsatzoglou) | B+ | Olympiacos FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 27위 마크 윌슨 (Mark Wilson) | B+ | Celtic FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 28위 온데르 투라즈 (Önder Turacı) | B+ | Fenerbahçe SK**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RB 29위 폴 캐디스 (Paul Caddis) | B0 | Celtic FC**: 2007-08 UCL 오른쪽 수비, 1대1 대응과 공격 지원의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 1위 마이클 캐릭 (Michael Carrick) | A+ | Manchester United FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 24회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UEFA 기술보고서에서 맨유 중원 수비·패스 구성원으로 확인. 링크 https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **DM 2위 안드레아 피를로 (Andrea Pirlo) | A+ | AC Milan**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 3위 다니엘레 데 로시 (Daniele De Rossi) | A+ | AS Roma**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 34회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 4위 에스테반 캄비아소 (Esteban Cambiasso) | A+ | FC Internazionale Milano**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 5위 마티외 플라미니 (Mathieu Flamini) | A+ | Arsenal FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 30회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 6위 제레미 툴랄랑 (Jérémy Toulalan) | A+ | Olympique Lyonnais**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 7위 하비에르 마스체라노 (Javier Mascherano) | A+ | Liverpool FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 8위 클로드 마켈렐레 (Claude Makélélé) | A+ | Chelsea FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 9위 저메인 존스 (Jermaine Jones) | A0 | FC Schalke 04**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 10위 마하마두 디아라 (Mahamadou Diarra) | A0 | Real Madrid CF**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 11위 야야 투레 (Yaya Touré) | A0 | FC Barcelona**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 12위 크리스티안 폴센 (Christian Poulsen) | A0 | Sevilla FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 13위 존 오비 미켈 (John Obi Mikel) | A0 | Chelsea FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 21회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 14위 오언 하그리브스 (Owen Hargreaves) | A0 | Manchester United FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 15위 이에로클리스 스톨티디스 (Ieroklis Stoltidis) | A0 | Olympiacos FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 16위 메흐메트 아우렐리우 (Mehmet Aurélio) | A0 | Fenerbahçe SK**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 17위 파울루 아순상 (Paulo Assunção) | A0 | FC Porto**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 18위 지우베르투 시우바 (Gilberto Silva) | A- | Arsenal FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 12회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 19위 페르난도 가고 (Fernando Gago) | B+ | Real Madrid CF**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 21회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 20위 루카스 레이바 (Lucas Leiva) | B+ | Liverpool FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 12회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 21위 즐라탄 바이람오비치 (Zlatan Bajramović) | B+ | FC Schalke 04**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 9회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 22위 파비우 산투스 (Fábio Santos) | B+ | Olympique Lyonnais**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 6회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 23위 마테오 브리기 (Matteo Brighi) | B+ | AS Roma**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 6회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 24위 올리비에 다쿠르 (Olivier Dacourt) | B+ | FC Internazionale Milano**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 6회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 25위 에드미우송 (Edmílson) | B+ | FC Barcelona**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 5회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 26위 호세 루이스 마르티 (José Luis Martí) | B+ | Sevilla FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 4회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 27위 클라우디오 말도나도 (Cláudio Maldonado) | B+ | Fenerbahçe SK**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 28위 에메르송 (Emerson) | B+ | AC Milan**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 29위 에반데르 스노 (Evander Sno) | B+ | Celtic FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **DM 30위 폴 하틀리 (Paul Hartley) | B+ | Celtic FC**: 2007-08 UCL 중원 후방 커버와 패스 차단의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 1위 프랭크 램퍼드 (Frank Lampard) | A+ | Chelsea FC**: 2008 UEFA 최우수 미드필더. 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2008 UEFA 최우수 미드필더. 링크 https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/
- **CM 2위 세스크 파브레가스 (Cesc Fàbregas) | A+ | Arsenal FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 3위 하비에르 사네티 (Javier Zanetti) | A+ | FC Internazionale Milano**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 35회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 4위 사비 에르난데스 (Xavi Hernández) | A+ | FC Barcelona**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 33회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 5위 주니뉴 페르남부카누 (Juninho Pernambucano) | A+ | Olympique Lyonnais**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 6위 안드레스 이니에스타 (Andrés Iniesta) | A+ | FC Barcelona**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 7위 마이클 에시엔 (Michael Essien) | A+ | Chelsea FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 8위 폴 스콜스 (Paul Scholes) | A+ | Manchester United FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 9위 다비드 피사로 (David Pizarro) | A0 | AS Roma**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 10위 킴 셸스트룀 (Kim Källström) | A0 | Olympique Lyonnais**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 11위 세이두 케이타 (Seydou Keita) | A0 | Sevilla FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 12위 구티 (Guti) | A0 | Real Madrid CF**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 13위 알베르토 아퀼라니 (Alberto Aquilani) | A0 | AS Roma**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 11회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 14위 클라렌스 세도르프 (Clarence Seedorf) | A0 | AC Milan**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 15위 젠나로 가투소 (Gennaro Gattuso) | A0 | AC Milan**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 16위 마시모 암브로시니 (Massimo Ambrosini) | A0 | AC Milan**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 17위 하울 메이렐르스 (Raul Meireles) | A0 | FC Porto**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 18위 파비안 에른스트 (Fabian Ernst) | A- | FC Schalke 04**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 19위 베슬레이 스네이더르 (Wesley Sneijder) | A- | Real Madrid CF**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 20위 안데르송 (Anderson) | A- | Manchester United FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 21위 사비 알론소 (Xabi Alonso) | A- | Liverpool FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 22위 데쿠 (Deco) | A- | FC Barcelona**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 14회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 23위 파트리크 비에이라 (Patrick Vieira) | A- | FC Internazionale Milano**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 24위 데니우송 (Denílson) | A- | Arsenal FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 4회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 25위 마니시 (Maniche) | A- | FC Internazionale Milano**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 4회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 26위 크리스티안 레데스마 (Cristian Ledesma) | A- | Olympiacos FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 27위 스콧 브라운 (Scott Brown) | A- | Celtic FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 28위 셀추크 샤힌 (Selçuk Şahin) | A- | Fenerbahçe SK**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 29위 헤나투 (Renato) | B+ | Sevilla FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 30위 마르크 크로사스 (Marc Crosas) | B+ | Olympique Lyonnais**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 3회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 31위 데니즈 바르시 (Deniz Barış) | B+ | Fenerbahçe SK**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 32위 페르난도 벨루스키 (Fernando Belluschi) | B+ | Olympiacos FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 33위 마시모 도나티 (Massimo Donati) | B+ | Celtic FC**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CM 34위 프셰미스와프 카지미에르차크 (Przemysław Kaźmierczak) | B+ | FC Porto**: 2007-08 UCL 중앙 전개와 패스 정확성 및 압박 대응의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 1위 스티븐 제라드 (Steven Gerrard) | S | Liverpool FC**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 6득점·4도움. 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/
- **CAM 2위 알렉스 (Alex) | A+ | Fenerbahçe SK**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 도움 6개(1위). 첼시 중앙수비수 Alex와 서로 다른 선수. 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/
- **CAM 3위 미하엘 발라크 (Michael Ballack) | A+ | Chelsea FC**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 4위 카카 (Kaká) | A+ | AC Milan**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 5위 시모네 페로타 (Simone Perrotta) | A0 | AS Roma**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 6위 루초 곤살레스 (Lucho González) | A0 | FC Porto**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 7위 이반 라키티치 (Ivan Rakitić) | A- | FC Schalke 04**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 8위 데얀 스탄코비치 (Dejan Stanković) | A- | FC Internazionale Milano**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 19회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 9위 뤼도비크 지울리 (Ludovic Giuly) | A- | AS Roma**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 10위 루이스 피구 (Luís Figo) | A- | FC Internazionale Milano**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 10회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **CAM 11위 요안 구르퀴프 (Yoann Gourcuff) | B+ | AC Milan**: 2007-08 UCL 2선 창조성과 전방 기회 창출의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 1위 호비뉴 (Robinho) | A0 | Real Madrid CF**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 4골·4도움, UEFA 기술 보고서상 6경기 403분(기관별 집계차 주의). 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **LW 2위 라이언 바벌 (Ryan Babel) | A0 | Liverpool FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 5골, UEFA 기술 보고서 11경기·601분. 링크 https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **LW 3위 미르코 부치니치 (Mirko Vučinić) | A0 | AS Roma**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 24회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 4위 프레드라그 조르제비치 (Predrag Đorđević) | A0 | Olympiacos FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 5위 만시니 (Mancini) | A0 | AS Roma**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 6위 티에리 앙리 (Thierry Henry) | A0 | FC Barcelona**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 27회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 7위 라이언 긱스 (Ryan Giggs) | A0 | Manchester United FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 26회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 8위 하템 벤 아르파 (Hatem Ben Arfa) | A0 | Olympique Lyonnais**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 9위 히카르두 콰레스마 (Ricardo Quaresma) | A0 | FC Porto**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 10위 살로몽 칼루 (Salomon Kalou) | A- | Chelsea FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 24회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 11위 아드리아누 코헤이아 (Adriano Correia) | A- | Sevilla FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 12위 디에고 카펠 (Diego Capel) | A- | Sevilla FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 13위 플로랑 말루다 (Florent Malouda) | A- | Chelsea FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 14위 나니 (Nani) | A- | Manchester United FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 16회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 15위 토마시 로시츠키 (Tomáš Rosický) | A- | Arsenal FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 16위 호나우지뉴 (Ronaldinho) | A- | FC Barcelona**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 17위 레반 코비아슈빌리 (Levan Kobiashvili) | A- | FC Schalke 04**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 8회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 18위 에이든 맥기디 (Aiden McGeady) | A- | Celtic FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 19위 우우르 보랄 (Uğur Boral) | A- | Fenerbahçe SK**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 20위 아부 디아비 (Abou Diaby) | B+ | Arsenal FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 9회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 21위 해리 큐얼 (Harry Kewell) | B+ | Liverpool FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 8회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 22위 로이스턴 드렌테 (Royston Drenthe) | B+ | Real Madrid CF**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 23위 콜린 카짐리처즈 (Colin Kâzım-Richards) | B+ | Fenerbahçe SK**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 24위 마리아노 곤살레스 (Mariano González) | B+ | FC Porto**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 25위 배리 롭슨 (Barry Robson) | B0 | Celtic FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **LW 26위 로드리고 아르추비 (Rodrigo Archubi) | B0 | Olympiacos FC**: 2007-08 UCL 왼쪽 측면 돌파와 공격 연결의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 1위 크리스티아누 호날두 (Cristiano Ronaldo) | S | Manchester United FC**: 2008 UEFA 올해의 클럽 선수 및 최우수 공격수, 본선 8득점. 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 최다득점 8골; 2008 UEFA 클럽 올해의 선수·최우수 공격수. 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/
- **RW 2위 리오넬 메시 (Lionel Messi) | A+ | FC Barcelona**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 6골(공동 2위), 2005-06/2006-07보다 이번 시즌의 개인 영향력을 우선 고려. 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/
- **RW 3위 디르크 카위트 (Dirk Kuyt) | A0 | Liverpool FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 24회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 4위 데이비드 (Deivid) | A0 | Fenerbahçe SK**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 5위 알략산드르 흘레프 (Aliaksandr Hleb) | A0 | Arsenal FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 6위 헤수스 나바스 (Jesús Navas) | A0 | Sevilla FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 7위 조 콜 (Joe Cole) | A0 | Chelsea FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 8위 시드네 고부 (Sidney Govou) | A0 | Olympique Lyonnais**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 26회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 9위 루시아노 가예티 (Luciano Galletti) | A0 | Olympiacos FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 10위 나카무라 슌스케 (Shunsuke Nakamura) | A0 | Celtic FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 11위 호드리구 타데이 (Rodrigo Taddei) | A- | AS Roma**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 12위 게랄트 아사모아 (Gerald Asamoah) | A- | FC Schalke 04**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 23회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 13위 에마뉘엘 에부에 (Emmanuel Eboué) | A- | Arsenal FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 20회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 14위 압둘 카데르 케이타 (Abdul Kader Keïta) | A- | Olympique Lyonnais**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 19회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 15위 요시 베나윤 (Yossi Benayoun) | A- | Liverpool FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 15회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 16위 아르연 로번 (Arjen Robben) | A- | Real Madrid CF**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 12회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 17위 박지성 (Park Ji-sung) | A- | Manchester United FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 8회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 18위 타리크 세크티위 (Tarik Sektioui) | A- | FC Porto**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 19위 숀 라이트필립스 (Shaun Wright-Phillips) | B+ | Chelsea FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 20회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 20위 지오바니 도스 산토스 (Giovani dos Santos) | B+ | FC Barcelona**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 10회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 21위 비센테 산체스 (Vicente Sánchez) | B+ | FC Schalke 04**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 5회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 22위 톰 더 뮐 (Tom De Mul) | B+ | Sevilla FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 3회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **RW 23위 콘스탄티노스 멘드리노스 (Konstantinos Mendrinos) | B0 | Olympiacos FC**: 2007-08 UCL 오른쪽 측면 1대1과 마무리 전개의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 1위 디디에 드로그바 (Didier Drogba) | A+ | Chelsea FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 6골, UEFA 2008 대회 유효 슈팅 22개(1위). 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/
- **ST 2위 페르난도 토레스 (Fernando Torres) | A+ | Liverpool FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 29회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 2007-08 공식 개별 근거 재확인; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. **이번 공식 근거 교차확인:** 2007-08 UCL 6골, UEFA 기술 보고서 10경기·874분. 링크 https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/ / https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- **ST 3위 프레데리크 카누테 (Frédéric Kanouté) | A+ | Sevilla FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 4위 즐라탄 이브라히모비치 (Zlatan Ibrahimović) | A+ | FC Internazionale Milano**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 5위 카림 벤제마 (Karim Benzema) | A+ | Olympique Lyonnais**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 6위 루이스 파비아누 (Luís Fabiano) | A+ | Sevilla FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 28회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 7위 뤼트 판니스텔로이 (Ruud van Nistelrooy) | A+ | Real Madrid CF**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 8위 에마뉘엘 아데바요르 (Emmanuel Adebayor) | A+ | Arsenal FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 32회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 9위 카를로스 테베스 (Carlos Tévez) | A+ | Manchester United FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 10위 프란체스코 토티 (Francesco Totti) | A+ | AS Roma**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 11위 웨인 루니 (Wayne Rooney) | A+ | Manchester United FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 25회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 12위 리산드로 로페스 (Lisandro López) | A+ | FC Porto**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 13위 라울 곤살레스 (Raúl González) | A0 | Real Madrid CF**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 36회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 14위 케빈 쿠라니 (Kevin Kurányi) | A0 | FC Schalke 04**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 31회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 15위 훌리오 리카르도 크루스 (Julio Ricardo Cruz) | A0 | FC Internazionale Milano**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 22회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 16위 사뮈엘 에토 (Samuel Eto'o) | A0 | FC Barcelona**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 18회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 17위 로빈 판페르시 (Robin van Persie) | A0 | Arsenal FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 18위 필리포 인차기 (Filippo Inzaghi) | A0 | AC Milan**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 19위 스콧 맥도널드 (Scott McDonald) | A0 | Celtic FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 20위 보얀 크르키치 (Bojan Krkić) | A- | FC Barcelona**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 14회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 21위 니콜라 아넬카 (Nicolas Anelka) | A- | Chelsea FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 10회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 22위 피터 크라우치 (Peter Crouch) | A- | Liverpool FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 9회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 23위 니클라스 벤트네르 (Nicklas Bendtner) | A- | Arsenal FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 24위 다르코 코바체비치 (Darko Kovačević) | A- | Olympiacos FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 25위 세미흐 셴튀르크 (Semih Şentürk) | A- | Fenerbahçe SK**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 26위 할릴 알튼토프 (Halil Altıntop) | B+ | FC Schalke 04**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 17회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 27위 프레드 (Fred) | B+ | Olympique Lyonnais**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 13회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 28위 아루나 코네 (Arouna Koné) | B+ | Sevilla FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 29위 곤살로 이과인 (Gonzalo Higuaín) | B+ | Real Madrid CF**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 30위 마리오 발로텔리 (Mario Balotelli) | B+ | FC Internazionale Milano**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 7회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 31위 루이 사하 (Louis Saha) | B+ | Manchester United FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2007-08 자국 리그 선발 6회는 출전 지속성의 보조 참고로만 이용하고 UCL 출장 수치로 보지 않음. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 32위 알베르토 질라르디노 (Alberto Gilardino) | B+ | AC Milan**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 33위 알레샨드리 파투 (Alexandre Pato) | B+ | AC Milan**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 34위 에르네스토 파리아스 (Ernesto Farías) | B+ | FC Porto**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 35위 얀 페네호르 오프 헤셀링크 (Jan Vennegoor of Hesselink) | B+ | Celtic FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 36위 로마나 루아루아 (Lomana LuaLua) | B+ | Olympiacos FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 37위 마테야 케즈만 (Mateja Kežman) | B+ | Fenerbahçe SK**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 38위 요르고스 사마라스 (Georgios Samaras) | B0 | Celtic FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.
- **ST 39위 미할리스 콘스탄티누 (Michalis Konstantinou) | B0 | Olympiacos FC**: 2007-08 UCL 페널티 지역 침투 및 최전방 마무리의 개인 영향력을 우선하여 평가한 정성 초안. 2006-07 및 2005-06 개인 활약은 낮은 가중치로 고려하며 팀 성적에 따른 가산점 없음. 전체 경기별 출전과 독립 3시즌 기록 대조는 미완료.. 평가 근거 구분: 기존 정성 DRAFT, 전수 자료 검증 전; 3시즌 평가 리뷰: `qualitative_provisional_complete_3season_audit_pending`. 기존 출처와 해당 시즌 실제 선발 비율·포지션은 별도 검증 필요.

## 14. 관찰된 이슈와 수정하지 않은 이유

- **출전 기록 출처 충돌:** UEFA 2007-08 기술 보고서의 Manchester United 선수단 표에 크리스티아누 호날두 10경기·896분으로 기재된 반면, FBref 및 Opta 기록에는 11경기·약 1,015~1,017분으로 나온다. 유럽대항전 실제 경기별 출전 로그로 차이를 재확인하기 전까지 JSON `appearances`/`minutes`는 기존 null 값을 유지한다. 득점 8골은 양측 자료가 일치한다.
- **우연한 같은 생년월일:** Celtic FC의 Barry Robson, Jan Vennegoor of Hesselink 둘 다 1978-11-07 출생으로 Sky Sports와 기타 프로필을 통해 실제로 확인됐다. 데이터 오염이 아니므로 수정하지 않는다.
- **시즌 최빈 주 포지션 추가 대조:** 첼시의 Michael Essien(CM/측면 수비 임시 배치), AS Roma의 Ludovic Giuly(CAM/RW), Liverpool의 Dirk Kuyt(RW/ST), Barcelona의 Thierry Henry(LW/ST), Real Madrid의 Robinho(LW/ST). 현재 원래 분류는 임의 변경하지 않음.
- **선발/후보 적격성 독립 대조:** 원본 176명 `starter` 및 123명 `backup` 표시가 2007-08 대회 본선과 전부 일치하는지 경기별 출전 자료로 검증 필요.
- **3시즌 가중치 수치화 보류:** 동일 선수의 2005-06/2006-07/2007-08 실전 참여·개인 기여를 모두 독립 대조한 후 등급 정밀 확정. 현재 299명 전원 티어·순위는 존재하되 사용자 승인 전 `draft_unapproved`.
- **사이트 검증 범위:** 기존 `meta.verification.siteTestStatus`에는 2026-11-12 GitHub Pages Playwright 통과 기록이 있다. 이것은 과거 테스트 이력이므로 2026-11-19 최신 변경에 대한 새 브라우저 실기동 테스트 통과라고 표현하지 않는다.

## 15. JSON 및 자료 정합성 검사

- **PASS** — candidateN
- **PASS** — clubN
- **PASS** — uniqueIds
- **PASS** — allTiers
- **PASS** — allRanks
- **PASS** — rankSequence
- **PASS** — tierRankNoInversion
- **PASS** — elevenXi
- **PASS** — sources15
- **PASS** — unchangedRanksByAudit
- **PASS** — unapproved
- PASS — 원본 후보 299명의 티어·rank·소속·포지션·생년월일·경기 데이터는 이번 배치에서 변경하지 않음.
- PASS — 공식 기록 교차 검증 근거를 15명에 추가, 기존 개인 평가는 삭제하지 않음.
- NOT DONE — 전체 299명 3시즌 개인 경기 로그/시즌 최다 출전 위치 전수 실증, 2026-11-19 신규 웹사이트 GUI 테스트.
- PRIOR ART — 기존 JSON 기록에 2026-11-12 Playwright 통과 이력이 있으나 이번 감사의 새로운 UI 테스트로 간주하지 않음.

## 16. 참고 출처

- UEFA 2007-08 공식 통계: https://www.uefa.com/uefachampionsleague/history/seasons/2008/statistics/
- UEFA Club Football Awards 수상 이력: https://www.uefa.com/news-media/news/0250-0c50f41f3c36-73a920d50345-1000--uefa-club-football-awards/
- UEFA 2007-08 UCL 공식 기술 보고서: https://www.uefa.com/MultimediaFiles/Download/Publications/uefa/UEFAMedia/75/74/66/757466_DOWNLOAD.pdf
- 2008 UEFA 기술 관찰단 개인상 후보 공지: https://www.uefa.com/MultimediaFiles/Download/PressRelease/uefa/UEFAMedia/74/11/50/741150_DOWNLOAD.pdf
- Barry Robson 생년월일: https://www.skysports.com/football/player/1018/barry-robson
- Jan Vennegoor of Hesselink 생년월일: https://www.skysports.com/football/player/1228/jan-vennegoor-of-hesselink
- Ronaldo의 후대 출전 기록 대비: https://fbref.com/en/players/dea698d9/all_comps/Cristiano-Ronaldo-Stats---All-Competitions / https://theanalyst.com/players/13574/cristiano-ronaldo/career
- 원본 JSON에 저장된 선수별 `sources` 배열도 유지하였으나 각 URL이 모든 정성적 주장을 독립 입증한다는 뜻은 아니다.

## 17. GitHub 저장 이력

- 299명 DRAFT 기초 상태: GitHub 원래 `main`의 `data/ucl-2007-08.json`에 전원 티어 및 순위 기입된 상태.
- 299명 보존·UEFA 15명 근거 추가·교차검증 주의사항 메타데이터 커밋: `c3384a8d517366bccd754227c811568b5ea87b45`.
- 전체 감사 보고서 커밋은 GitHub 파일 이력에서 확인.
- 평가 상태 `draft_unapproved`: 사용자 최종 승인 전, 3시즌 전체 개인 기록 정밀 검증 전.
