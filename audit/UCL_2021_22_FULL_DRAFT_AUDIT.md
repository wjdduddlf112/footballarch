# UCL 2021-22 — 신규 구축 / 부분 검증 DRAFT

- 기준 main: c57c6ec62262932b53df2c430863591b875ff788
- 신규 대상 파일: data/ucl-2021-22.json
- 평가: 2019-20 < 2020-21 < 2021-22. 사용자 승인 false.
- 공식 대진·경기 결과: https://www.uefa.com/uefachampionsleague/news/026c-131a0f45d056-813415b1929d-1000--all-the-fixtures/
- 경기 원자료: https://raw.githubusercontent.com/openfootball/champions-league/master/2021-22/cl.txt
- 선수 당해 시즌 보조 출전 데이터: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv
- 공식 당해 개인 평가: https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/
- 과거 일부 개인 평가: https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/; https://www.uefa.com/uefachampionsleague/news/0265-113a7215fcd9-2afc8d8b5eaa-1000--roll-of-honour-2020/
- 대표 포메이션: https://www.uefa.com/news-media/news/0278-15f1330f89e5-c6e98c04a3cf-1000--uefa-technical-observers-review-2021-22-season/ (4-3-3, 4-2-3-1, 4-4-2가 주요 형태. 정확한 최빈값 미검증.)

## 검증 결과

32팀, 8개 조, 125경기, 380골. 조별 경기에서 승무패·승점·득실을 독립 재계산; C조 Sporting–Dortmund 동률은 UEFA 공식 순위에 따라 상대전적 우선. 원정골 규칙 폐지. 결승 Saint-Denis. 다른 경기 경기장 미확인. 후보 294명, 주전 176명, 후보 118명. 출전 데이터 보조 출처 294명, 공식 개별 독립 대조 미완료. 생년월일 독립 확인 49명, 기존 아카이브 참고 또는 미확인 245명. 잠정 평가 37명, 보류 257명. 전원 3시즌 독립 검증 미완료. 순위는 평가한 부분집합만의 잠정 순위. 팀 성적 직접 가산 없음. 전체 선수 선발 수 및 최빈 포지션 검증 미완료. 생년월일이 기존 Archive에서만 확인된 경우 verification_pending. GitHub Pages 및 CI 미실시.

## 구단별 후보

### Manchester City FC — 4-3-3 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 에데르송 | Ederson | Manchester City FC | 1993-08-17 | starter | 11/미확인 | 1003 | A0 | 4 | verification_pending |
| GK | 잭 스테픈 | Zack Steffen | Manchester City FC | 미확인 | backup | 1/미확인 | 90 | 보류 | — | verification_pending |
| CB | 에므리크 라포르트 | Aymeric Laporte | Manchester City FC | 1994-05-27 | starter | 9/미확인 | 794 | 보류 | — | verification_pending |
| CB | 후벵 디아스 | Rúben Dias | Manchester City FC | 1997-05-14 | starter | 8/미확인 | 664 | A0 | 4 | verification_pending |
| CB | 존 스톤스 | John Stones | Manchester City FC | 1994-05-28 | backup | 8/미확인 | 637 | 보류 | — | verification_pending |
| LB | 주앙 칸셀루 | João Cancelo | Manchester City FC | 1994-05-27 | starter | 9/미확인 | 840 | A0 | 2 | verification_pending |
| LB | 올렉산드르 진첸코 | Oleksandr Zinchenko | Manchester City FC | 1996-12-15 | backup | 8/미확인 | 501 | 보류 | — | verification_pending |
| RB | 카일 워커 | Kyle Walker | Manchester City FC | 1990-05-28 | starter | 7/미확인 | 577 | 보류 | — | verification_pending |
| DM | 로드리 | Rodri | Manchester City FC | 1996-06-22 | starter | 10/미확인 | 842 | 보류 | — | verification_pending |
| DM | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | backup | 8/미확인 | 347 | 보류 | — | verification_pending |
| CM | 베르나르두 실바 | Bernardo Silva | Manchester City FC | 1994-08-10 | starter | 11/미확인 | 878 | A0 | 2 | verification_pending |
| CM | 일카이 귄도안 | İlkay Gündoğan | Manchester City FC | 1990-10-24 | backup | 10/미확인 | 660 | 보류 | — | verification_pending |
| CAM | 케빈 더 브라위너 | Kevin De Bruyne | Manchester City FC | 1991-06-28 | starter | 10/미확인 | 734 | A+ | 1 | verification_pending |
| LW | 라힘 스털링 | Raheem Sterling | Manchester City FC | 1994-12-08 | starter | 12/미확인 | 581 | 보류 | — | verification_pending |
| LW | 잭 그릴리시 | Jack Grealish | Manchester City FC | 1995-09-10 | backup | 7/미확인 | 461 | 보류 | — | verification_pending |
| RW | 리야드 마레즈 | Riyad Mahrez | Manchester City FC | 1991-02-21 | starter | 12/미확인 | 986 | A+ | 2 | verification_pending |
| ST | 필 포든 | Phil Foden | Manchester City FC | 2000-05-28 | starter | 11/미확인 | 658 | 보류 | — | verification_pending |
| ST | 가브리에우 제주스 | Gabriel Jesus | Manchester City FC | 1997-04-03 | backup | 8/미확인 | 352 | 보류 | — | verification_pending |

### Paris Saint-Germain FC — 4-3-3 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 잔루이지 돈나룸마 | Gianluigi Donnarumma | Paris Saint-Germain FC | 1999-02-25 | starter | 5/미확인 | 450 | 보류 | — | verification_pending |
| GK | 케일러 나바스 | Keylor Navas | Paris Saint-Germain FC | 1986-12-15 | backup | 3/미확인 | 270 | 보류 | — | verification_pending |
| CB | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | starter | 8/미확인 | 720 | A0 | 3 | verification_pending |
| CB | 프레스넬 킴펨베 | Presnel Kimpembe | Paris Saint-Germain FC | 1995-08-13 | starter | 7/미확인 | 630 | 보류 | — | verification_pending |
| CB | 압두 디알로 | Abdou Diallo | Paris Saint-Germain FC | 미확인 | backup | 2/미확인 | 165 | 보류 | — | verification_pending |
| LB | 누누 멘데스 | Nuno Mendes | Paris Saint-Germain FC | 2002-06-19 | starter | 8/미확인 | 581 | 보류 | — | verification_pending |
| RB | 아슈라프 하키미 | Achraf Hakimi | Paris Saint-Germain FC | 1998-11-04 | starter | 8/미확인 | 718 | 보류 | — | verification_pending |
| RB | 틸로 케러 | Thilo Kehrer | Paris Saint-Germain FC | 1996-09-21 | backup | 4/미확인 | 70 | 보류 | — | verification_pending |
| DM | 다닐루 페레이라 | Danilo Pereira | Paris Saint-Germain FC | 1991-09-09 | starter | 7/미확인 | 362 | 보류 | — | verification_pending |
| DM | 레안드로 파레데스 | Leandro Paredes | Paris Saint-Germain FC | 1994-06-29 | backup | 5/미확인 | 315 | 보류 | — | verification_pending |
| CM | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | starter | 5/미확인 | 431 | 보류 | — | verification_pending |
| CM | 이드리사 게예 | Idrissa Gueye | Paris Saint-Germain FC | 1989-09-26 | starter | 7/미확인 | 400 | 보류 | — | verification_pending |
| CM | 안데르 에레라 | Ander Herrera | Paris Saint-Germain FC | 미확인 | backup | 6/미확인 | 326 | 보류 | — | verification_pending |
| LW | 네이마르 | Neymar | Paris Saint-Germain FC | 1992-02-05 | starter | 6/미확인 | 468 | 보류 | — | verification_pending |
| LW | 율리안 드락슬러 | Julian Draxler | Paris Saint-Germain FC | 1993-09-20 | backup | 3/미확인 | 136 | 보류 | — | verification_pending |
| RW | 리오넬 메시 | Lionel Messi | Paris Saint-Germain FC | 1987-06-24 | starter | 7/미확인 | 630 | A0 | 4 | verification_pending |
| RW | 앙헬 디 마리아 | Ángel Di María | Paris Saint-Germain FC | 1988-02-14 | backup | 5/미확인 | 260 | 보류 | — | verification_pending |
| ST | 킬리안 음바페 | Kylian Mbappé | Paris Saint-Germain FC | 1998-12-20 | starter | 8/미확인 | 673 | A+ | 3 | verification_pending |
| ST | 마우로 이카르디 | Mauro Icardi | Paris Saint-Germain FC | 1993-02-19 | backup | 3/미확인 | 47 | 보류 | — | verification_pending |

### Liverpool FC — 4-3-3 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 알리송 베케르 | Alisson Becker | Liverpool FC | 1992-10-02 | starter | 13/미확인 | 1170 | 보류 | — | verification_pending |
| CB | 버질 반다이크 | Virgil van Dijk | Liverpool FC | 1991-07-08 | starter | 9/미확인 | 810 | A+ | 2 | verification_pending |
| CB | 이브라히마 코나테 | Ibrahima Konaté | Liverpool FC | 1999-05-25 | starter | 8/미확인 | 720 | 보류 | — | verification_pending |
| CB | 조엘 마티프 | Joël Matip | Liverpool FC | 1991-08-08 | backup | 7/미확인 | 630 | 보류 | — | verification_pending |
| LB | 앤드루 로버트슨 | Andrew Robertson | Liverpool FC | 미확인 | starter | 10/미확인 | 826 | A+ | 1 | verification_pending |
| LB | 코스타스 치미카스 | Kostas Tsimikas | Liverpool FC | 1996-05-12 | backup | 5/미확인 | 344 | 보류 | — | verification_pending |
| RB | 트렌트 알렉산더아놀드 | Trent Alexander-Arnold | Liverpool FC | 1998-10-07 | starter | 9/미확인 | 794 | A+ | 1 | verification_pending |
| RB | 조 고메즈 | Joe Gomez | Liverpool FC | 1997-05-23 | backup | 7/미확인 | 245 | 보류 | — | verification_pending |
| DM | 파비뉴 | Fabinho | Liverpool FC | 1993-10-23 | starter | 13/미확인 | 849 | A+ | 1 | verification_pending |
| DM | 타일러 모턴 | Tyler Morton | Liverpool FC | 미확인 | backup | 2/미확인 | 180 | 보류 | — | verification_pending |
| CM | 조던 헨더슨 | Jordan Henderson | Liverpool FC | 1990-06-17 | starter | 12/미확인 | 666 | 보류 | — | verification_pending |
| CM | 티아고 알칸타라 | Thiago Alcántara | Liverpool FC | 1991-04-11 | starter | 10/미확인 | 604 | 보류 | — | verification_pending |
| CM | 나비 케이타 | Naby Keïta | Liverpool FC | 1995-02-10 | backup | 10/미확인 | 487 | 보류 | — | verification_pending |
| LW | 사디오 마네 | Sadio Mané | Liverpool FC | 1992-04-10 | starter | 13/미확인 | 822 | 보류 | — | verification_pending |
| LW | 루이스 디아스 | Luis Díaz | Liverpool FC | 1997-01-13 | backup | 7/미확인 | 385 | 보류 | — | verification_pending |
| RW | 모하메드 살라 | Mohamed Salah | Liverpool FC | 1992-06-15 | starter | 13/미확인 | 1008 | A+ | 1 | verified_official |
| RW | 미나미노 다쿠미 | Takumi Minamino | Liverpool FC | 미확인 | backup | 4/미확인 | 215 | 보류 | — | verification_pending |
| ST | 디오구 조타 | Diogo Jota | Liverpool FC | 1996-12-04 | starter | 11/미확인 | 578 | 보류 | — | verification_pending |
| ST | 호베르투 피르미누 | Roberto Firmino | Liverpool FC | 1991-10-02 | backup | 7/미확인 | 323 | 보류 | — | verification_pending |

### Club Atlético de Madrid — 3-5-2 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | 1993-01-07 | starter | 10/미확인 | 900 | 보류 | — | verification_pending |
| CB | 호세 마리아 히메네스 | José María Giménez | Club Atlético de Madrid | 1995-01-20 | starter | 7/미확인 | 585 | 보류 | — | verification_pending |
| CB | 펠리페 | Felipe | Club Atlético de Madrid | 미확인 | starter | 7/미확인 | 472 | 보류 | — | verification_pending |
| CB | 스테판 사비치 | Stefan Savić | Club Atlético de Madrid | 1991-01-08 | starter | 5/미확인 | 450 | 보류 | — | verification_pending |
| CB | 마리오 에르모소 | Mario Hermoso | Club Atlético de Madrid | 1995-06-18 | backup | 6/미확인 | 425 | 보류 | — | verification_pending |
| LB | 헤낭 로지 | Renan Lodi | Club Atlético de Madrid | 미확인 | starter | 10/미확인 | 478 | 보류 | — | verification_pending |
| LB | 야니크 카라스코 | Yannick Carrasco | Club Atlético de Madrid | 1993-01-07 | backup | 7/미확인 | 472 | 보류 | — | verification_pending |
| RB | 마르코스 요렌테 | Marcos Llorente | Club Atlético de Madrid | 1995-01-30 | starter | 9/미확인 | 700 | 보류 | — | verification_pending |
| RB | 시메 브르살리코 | Šime Vrsaljko | Club Atlético de Madrid | 1993-01-07 | backup | 5/미확인 | 304 | 보류 | — | verification_pending |
| DM | 조프레 콩도그비아 | Geoffrey Kondogbia | Club Atlético de Madrid | 미확인 | starter | 9/미확인 | 578 | 보류 | — | verification_pending |
| DM | 엑토르 에레라 | Héctor Herrera | Club Atlético de Madrid | 미확인 | backup | 4/미확인 | 226 | 보류 | — | verification_pending |
| CM | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | starter | 9/미확인 | 665 | 보류 | — | verification_pending |
| CM | 로드리고 데폴 | Rodrigo De Paul | Club Atlético de Madrid | 미확인 | starter | 9/미확인 | 577 | 보류 | — | verification_pending |
| CM | 토마 르마르 | Thomas Lemar | Club Atlético de Madrid | 1995-11-12 | backup | 8/미확인 | 377 | 보류 | — | verification_pending |
| ST | 주앙 펠릭스 | João Félix | Club Atlético de Madrid | 미확인 | starter | 8/미확인 | 573 | 보류 | — | verification_pending |
| ST | 앙투안 그리에즈만 | Antoine Griezmann | Club Atlético de Madrid | 1991-03-21 | starter | 9/미확인 | 518 | A- | 9 | verification_pending |
| ST | 앙헬 코레아 | Ángel Correa | Club Atlético de Madrid | 1995-03-09 | backup | 10/미확인 | 401 | 보류 | — | verification_pending |

### AFC Ajax — 4-2-3-1 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 렘코 파스베이르 | Remko Pasveer | AFC Ajax | 1983-11-18 | starter | 6/미확인 | 540 | 보류 | — | verified_secondary |
| GK | 안드레 오나나 | André Onana | AFC Ajax | 1996-04-02 | backup | 2/미확인 | 180 | 보류 | — | verified_secondary |
| CB | 리산드로 마르티네스 | Lisandro Martínez | AFC Ajax | 1998-01-18 | starter | 8/미확인 | 720 | 보류 | — | verified_secondary |
| CB | 위리엔 팀버 | Jurrien Timber | AFC Ajax | 2001-06-17 | starter | 8/미확인 | 570 | 보류 | — | verified_secondary |
| CB | 페르 스휘르스 | Perr Schuurs | AFC Ajax | 1999-11-26 | backup | 3/미확인 | 146 | 보류 | — | verified_secondary |
| LB | 달레이 블린트 | Daley Blind | AFC Ajax | 1990-03-09 | starter | 8/미확인 | 572 | 보류 | — | verified_secondary |
| LB | 니콜라스 탈리아피코 | Nicolás Tagliafico | AFC Ajax | 1992-08-31 | backup | 3/미확인 | 139 | 보류 | — | verified_secondary |
| RB | 누사이르 마즈라위 | Noussair Mazraoui | AFC Ajax | 1997-11-14 | starter | 8/미확인 | 661 | 보류 | — | verified_secondary |
| RB | 데빈 렌스 | Devyne Rensch | AFC Ajax | 2003-01-18 | backup | 5/미확인 | 71 | 보류 | — | verified_secondary |
| DM | 에드손 알바레스 | Edson Álvarez | AFC Ajax | 1997-10-24 | starter | 7/미확인 | 558 | 보류 | — | verified_secondary |
| CM | 라이언 흐라벤베르흐 | Ryan Gravenberch | AFC Ajax | 2002-05-16 | starter | 8/미확인 | 703 | 보류 | — | verified_secondary |
| CAM | 스테번 베르하위스 | Steven Berghuis | AFC Ajax | 1991-12-19 | starter | 8/미확인 | 628 | 보류 | — | verified_secondary |
| CAM | 다비 클라선 | Davy Klaassen | AFC Ajax | 1993-02-21 | backup | 7/미확인 | 232 | 보류 | — | verified_secondary |
| LW | 두샨 타디치 | Dušan Tadić | AFC Ajax | 1988-11-20 | starter | 7/미확인 | 630 | 보류 | — | verified_secondary |
| LW | 모하메드 다라미 | Mohamed Daramy | AFC Ajax | 2002-01-07 | backup | 2/미확인 | 52 | 보류 | — | verified_secondary |
| RW | 안토니 | Antony | AFC Ajax | 2000-02-24 | starter | 7/미확인 | 577 | A0 | 3 | verified_secondary |
| RW | 다비드 네리스 | David Neres | AFC Ajax | 1997-03-03 | backup | 5/미확인 | 203 | 보류 | — | verified_secondary |
| ST | 세바스티앵 알레 | Sébastien Haller | AFC Ajax | 1994-06-22 | starter | 8/미확인 | 668 | A+ | 4 | verified_secondary |

### Sporting CP — 3-4-3 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 안토니오 아단 | Antonio Adán | Sporting CP | 미확인 | starter | 7/미확인 | 630 | 보류 | — | verification_pending |
| GK | 주앙 비르지니아 | João Virgínia | Sporting CP | 미확인 | backup | 1/미확인 | 90 | 보류 | — | verification_pending |
| CB | 곤살루 이나시우 | Gonçalo Inácio | Sporting CP | 미확인 | starter | 7/미확인 | 561 | 보류 | — | verification_pending |
| CB | 세바스티안 코아테스 | Sebastián Coates | Sporting CP | 미확인 | starter | 6/미확인 | 540 | 보류 | — | verification_pending |
| CB | 주하이르 페달 | Zouhair Feddal | Sporting CP | 미확인 | starter | 6/미확인 | 450 | 보류 | — | verification_pending |
| CB | 루이스 네투 | Luís Neto | Sporting CP | 미확인 | backup | 6/미확인 | 368 | 보류 | — | verification_pending |
| LB | 마테우스 레이스 | Matheus Reis | Sporting CP | 미확인 | starter | 8/미확인 | 611 | 보류 | — | verification_pending |
| LB | 후벵 비나그르 | Rúben Vinagre | Sporting CP | 미확인 | backup | 2/미확인 | 63 | 보류 | — | verification_pending |
| RB | 페드로 포로 | Pedro Porro | Sporting CP | 미확인 | starter | 7/미확인 | 529 | 보류 | — | verification_pending |
| RB | 히카르두 이스가이우 | Ricardo Esgaio | Sporting CP | 미확인 | backup | 8/미확인 | 380 | 보류 | — | verification_pending |
| DM | 주앙 팔리냐 | João Palhinha | Sporting CP | 미확인 | starter | 6/미확인 | 534 | 보류 | — | verification_pending |
| DM | 마누엘 우가르테 | Manuel Ugarte | Sporting CP | 미확인 | backup | 4/미확인 | 205 | 보류 | — | verification_pending |
| CM | 마테우스 누네스 | Matheus Nunes | Sporting CP | 미확인 | starter | 6/미확인 | 509 | 보류 | — | verification_pending |
| CM | 다니엘 브라간사 | Daniel Bragança | Sporting CP | 미확인 | backup | 5/미확인 | 131 | 보류 | — | verification_pending |
| LW | 페드루 곤살베스 | Pedro Gonçalves | Sporting CP | 미확인 | starter | 5/미확인 | 329 | A- | 3 | verification_pending |
| LW | 누누 산투스 | Nuno Santos | Sporting CP | 미확인 | backup | 7/미확인 | 218 | 보류 | — | verification_pending |
| RW | 파블로 사라비아 | Pablo Sarabia | Sporting CP | 미확인 | starter | 8/미확인 | 510 | 보류 | — | verification_pending |
| RW | 브루누 타바타 | Bruno Tabata | Sporting CP | 미확인 | backup | 4/미확인 | 201 | 보류 | — | verification_pending |
| ST | 파울리뉴 | Paulinho | Sporting CP | 2000-07-15 | starter | 8/미확인 | 582 | 보류 | — | verification_pending |
| ST | 티아구 토마스 | Tiago Tomás | Sporting CP | 미확인 | backup | 5/미확인 | 162 | 보류 | — | verification_pending |

### Real Madrid CF — 4-3-3 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 티보 쿠르투아 | Thibaut Courtois | Real Madrid CF | 1992-05-11 | starter | 13/미확인 | 1230 | S | 1 | verified_official |
| CB | 에데르 밀리탕 | Éder Militão | Real Madrid CF | 미확인 | starter | 12/미확인 | 1076 | 보류 | — | verification_pending |
| CB | 다비드 알라바 | David Alaba | Real Madrid CF | 미확인 | starter | 12/미확인 | 1040 | 보류 | — | verification_pending |
| CB | 나초 페르난데스 | Nacho Fernández | Real Madrid CF | 1990-01-18 | backup | 9/미확인 | 574 | 보류 | — | verification_pending |
| LB | 페를랑 멘디 | Ferland Mendy | Real Madrid CF | 미확인 | starter | 10/미확인 | 867 | 보류 | — | verification_pending |
| LB | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | backup | 3/미확인 | 93 | 보류 | — | verification_pending |
| RB | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | starter | 11/미확인 | 959 | 보류 | — | verification_pending |
| RB | 루카스 바스케스 | Lucas Vázquez | Real Madrid CF | 1991-07-01 | backup | 8/미확인 | 349 | 보류 | — | verification_pending |
| DM | 카세미루 | Casemiro | Real Madrid CF | 1992-02-23 | starter | 11/미확인 | 914 | 보류 | — | verification_pending |
| CM | 토니 크로스 | Toni Kroos | Real Madrid CF | 1990-01-04 | starter | 12/미확인 | 902 | 보류 | — | verification_pending |
| CM | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | starter | 13/미확인 | 1077 | A+ | 1 | verification_pending |
| CM | 에두아르도 카마빙가 | Eduardo Camavinga | Real Madrid CF | 미확인 | backup | 10/미확인 | 296 | 보류 | — | verification_pending |
| LW | 비니시우스 주니오르 | Vinícius Júnior | Real Madrid CF | 2000-07-12 | starter | 13/미확인 | 1199 | A+ | 1 | verified_official |
| LW | 에덴 아자르 | Eden Hazard | Real Madrid CF | 미확인 | backup | 3/미확인 | 84 | 보류 | — | verification_pending |
| RW | 페데리코 발베르데 | Federico Valverde | Real Madrid CF | 미확인 | starter | 11/미확인 | 804 | 보류 | — | verification_pending |
| RW | 호드리구 | Rodrygo | Real Madrid CF | 미확인 | backup | 11/미확인 | 505 | A- | 5 | verification_pending |
| ST | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | starter | 12/미확인 | 1106 | S | 1 | verification_pending |
| ST | 루카 요비치 | Luka Jović | Real Madrid CF | 미확인 | backup | 3/미확인 | 113 | 보류 | — | verification_pending |

### FC Internazionale Milano — 3-5-2 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 사미르 한다노비치 | Samir Handanovič | FC Internazionale Milano | 1984-07-14 | starter | 8/미확인 | 720 | 보류 | — | verification_pending |
| CB | 밀란 슈크리니아르 | Milan Škriniar | FC Internazionale Milano | 1995-02-11 | starter | 8/미확인 | 720 | 보류 | — | verification_pending |
| CB | 스테판 더프레이 | Stefan de Vrij | FC Internazionale Milano | 1992-02-05 | starter | 6/미확인 | 487 | 보류 | — | verification_pending |
| CB | 알레산드로 바스토니 | Alessandro Bastoni | FC Internazionale Milano | 1999-04-13 | starter | 8/미확인 | 666 | 보류 | — | verification_pending |
| CB | 다닐로 담브로시오 | Danilo D'Ambrosio | FC Internazionale Milano | 1988-09-09 | backup | 3/미확인 | 147 | 보류 | — | verification_pending |
| LB | 이반 페리시치 | Ivan Perišić | FC Internazionale Milano | 1989-02-02 | starter | 8/미확인 | 531 | 보류 | — | verification_pending |
| LB | 페데리코 디마르코 | Federico Dimarco | FC Internazionale Milano | 1997-11-10 | backup | 7/미확인 | 283 | 보류 | — | verification_pending |
| RB | 덴젤 둠프리스 | Denzel Dumfries | FC Internazionale Milano | 1996-04-18 | starter | 7/미확인 | 467 | 보류 | — | verification_pending |
| RB | 마테오 다르미안 | Matteo Darmian | FC Internazionale Milano | 1989-12-02 | backup | 5/미확인 | 196 | 보류 | — | verification_pending |
| DM | 마르첼로 브로조비치 | Marcelo Brozović | FC Internazionale Milano | 1992-11-16 | starter | 8/미확인 | 635 | 보류 | — | verification_pending |
| DM | 마티아스 베시노 | Matías Vecino | FC Internazionale Milano | 미확인 | backup | 4/미확인 | 124 | 보류 | — | verification_pending |
| CM | 니콜로 바렐라 | Nicolò Barella | FC Internazionale Milano | 1997-02-07 | starter | 6/미확인 | 496 | 보류 | — | verification_pending |
| CM | 하칸 찰하놀루 | Hakan Çalhanoğlu | FC Internazionale Milano | 1994-02-08 | starter | 6/미확인 | 419 | 보류 | — | verification_pending |
| CM | 아르투로 비달 | Arturo Vidal | FC Internazionale Milano | 미확인 | backup | 7/미확인 | 409 | 보류 | — | verification_pending |
| ST | 라우타로 마르티네스 | Lautaro Martínez | FC Internazionale Milano | 미확인 | starter | 8/미확인 | 587 | 보류 | — | verification_pending |
| ST | 에딘 제코 | Edin Džeko | FC Internazionale Milano | 1986-03-17 | starter | 7/미확인 | 541 | 보류 | — | verification_pending |
| ST | 알렉시스 산체스 | Alexis Sánchez | FC Internazionale Milano | 미확인 | backup | 6/미확인 | 155 | 보류 | — | verification_pending |

### FC Bayern München — 4-2-3-1 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | starter | 9/미확인 | 810 | A0 | 2 | verification_pending |
| GK | 스벤 울라이히 | Sven Ulreich | FC Bayern München | 1988-08-03 | backup | 1/미확인 | 90 | 보류 | — | verification_pending |
| CB | 다요 우파메카노 | Dayot Upamecano | FC Bayern München | 1998-10-27 | starter | 8/미확인 | 660 | 보류 | — | verification_pending |
| CB | 니클라스 쥘레 | Niklas Süle | FC Bayern München | 1995-09-03 | starter | 7/미확인 | 515 | 보류 | — | verification_pending |
| CB | 루카스 에르난데스 | Lucas Hernández | FC Bayern München | 1996-02-14 | backup | 8/미확인 | 572 | 보류 | — | verification_pending |
| LB | 알폰소 데이비스 | Alphonso Davies | FC Bayern München | 2000-11-02 | starter | 7/미확인 | 477 | 보류 | — | verification_pending |
| RB | 뱅자맹 파바르 | Benjamin Pavard | FC Bayern München | 1996-03-28 | starter | 10/미확인 | 764 | 보류 | — | verification_pending |
| RB | 부나 사르 | Bouna Sarr | FC Bayern München | 미확인 | backup | 5/미확인 | 125 | 보류 | — | verification_pending |
| DM | 요주아 키미히 | Joshua Kimmich | FC Bayern München | 1995-02-08 | starter | 8/미확인 | 702 | 보류 | — | verification_pending |
| DM | 마르크 로카 | Marc Roca | FC Bayern München | 1996-11-26 | backup | 4/미확인 | 78 | 보류 | — | verification_pending |
| CM | 레온 고레츠카 | Leon Goretzka | FC Bayern München | 1995-02-06 | starter | 6/미확인 | 466 | 보류 | — | verification_pending |
| CM | 코랑탱 톨리소 | Corentin Tolisso | FC Bayern München | 1994-08-03 | backup | 4/미확인 | 234 | 보류 | — | verification_pending |
| CAM | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | starter | 10/미확인 | 778 | A0 | 3 | verification_pending |
| CAM | 자말 무시알라 | Jamal Musiala | FC Bayern München | 2003-02-26 | backup | 8/미확인 | 448 | 보류 | — | verification_pending |
| LW | 리로이 자네 | Leroy Sané | FC Bayern München | 1996-01-11 | starter | 10/미확인 | 798 | A+ | 2 | verification_pending |
| RW | 킹슬리 코망 | Kingsley Coman | FC Bayern München | 1996-06-13 | starter | 9/미확인 | 632 | 보류 | — | verification_pending |
| RW | 세르주 그나브리 | Serge Gnabry | FC Bayern München | 1995-07-14 | backup | 8/미확인 | 391 | 보류 | — | verification_pending |
| ST | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | 1988-08-21 | starter | 10/미확인 | 876 | S | 2 | verification_pending |
| ST | 에릭 막심 추포모팅 | Eric Maxim Choupo-Moting | FC Bayern München | 1989-03-23 | backup | 4/미확인 | 49 | 보류 | — | verification_pending |

### SL Benfica — 3-4-3 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 오디세아스 블라호디모스 | Odysseas Vlachodimos | SL Benfica | 미확인 | starter | 10/미확인 | 900 | 보류 | — | verification_pending |
| CB | 얀 베르통언 | Jan Vertonghen | SL Benfica | 미확인 | starter | 10/미확인 | 900 | 보류 | — | verification_pending |
| CB | 니콜라스 오타멘디 | Nicolás Otamendi | SL Benfica | 미확인 | starter | 9/미확인 | 810 | 보류 | — | verification_pending |
| CB | 루카스 베리시무 | Lucas Veríssimo | SL Benfica | 미확인 | starter | 3/미확인 | 270 | 보류 | — | verification_pending |
| CB | 모라투 | Morato | SL Benfica | 미확인 | backup | 2/미확인 | 180 | 보류 | — | verification_pending |
| LB | 알레한드로 그리말도 | Alejandro Grimaldo | SL Benfica | 미확인 | starter | 10/미확인 | 863 | 보류 | — | verification_pending |
| LB | 발렌티노 라자로 | Valentino Lazaro | SL Benfica | 미확인 | backup | 6/미확인 | 114 | 보류 | — | verification_pending |
| RB | 지우베르투 | Gilberto | SL Benfica | 미확인 | starter | 9/미확인 | 715 | 보류 | — | verification_pending |
| RB | 안드레 알메이다 | André Almeida | SL Benfica | 미확인 | backup | 5/미확인 | 236 | 보류 | — | verification_pending |
| DM | 율리안 바이글 | Julian Weigl | SL Benfica | 미확인 | starter | 9/미확인 | 810 | 보류 | — | verification_pending |
| DM | 수알리호 메이테 | Soualiho Meïté | SL Benfica | 미확인 | backup | 3/미확인 | 155 | 보류 | — | verification_pending |
| CM | 주앙 마리우 | João Mário | SL Benfica | 미확인 | starter | 8/미확인 | 493 | A- | 4 | verification_pending |
| CM | 아델 타랍 | Adel Taarabt | SL Benfica | 미확인 | backup | 9/미확인 | 343 | 보류 | — | verification_pending |
| LW | 에베르통 | Everton | SL Benfica | 1996-03-22 | starter | 9/미확인 | 543 | 보류 | — | verified_official |
| RW | 하파 실바 | Rafa Silva | SL Benfica | 1993-05-17 | starter | 9/미확인 | 704 | 보류 | — | verified_official |
| RW | 디오구 곤살베스 | Diogo Gonçalves | SL Benfica | 미확인 | backup | 5/미확인 | 131 | 보류 | — | verification_pending |
| ST | 다르윈 누녜스 | Darwin Núñez | SL Benfica | 1999-06-24 | starter | 10/미확인 | 613 | A0 | 5 | verified_official |
| ST | 로만 야렘추크 | Roman Yaremchuk | SL Benfica | 1995-11-27 | backup | 10/미확인 | 514 | 보류 | — | verified_official |

### Manchester United FC — 4-2-3-1 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 다비드 데 헤아 | David de Gea | Manchester United FC | 1990-11-07 | starter | 7/미확인 | 630 | 보류 | — | verification_pending |
| GK | 딘 헨더슨 | Dean Henderson | Manchester United FC | 미확인 | backup | 1/미확인 | 68 | 보류 | — | verification_pending |
| CB | 해리 매과이어 | Harry Maguire | Manchester United FC | 1993-03-05 | starter | 6/미확인 | 534 | 보류 | — | verification_pending |
| CB | 빅토르 린델뢰프 | Victor Lindelöf | Manchester United FC | 1994-07-17 | starter | 5/미확인 | 426 | 보류 | — | verification_pending |
| CB | 라파엘 바란 | Raphaël Varane | Manchester United FC | 1993-04-25 | backup | 5/미확인 | 353 | 보류 | — | verification_pending |
| LB | 루크 쇼 | Luke Shaw | Manchester United FC | 1995-07-12 | starter | 5/미확인 | 397 | 보류 | — | verification_pending |
| LB | 알렉스 텔레스 | Alex Telles | Manchester United FC | 1992-12-15 | backup | 4/미확인 | 293 | 보류 | — | verification_pending |
| RB | 아론 완비사카 | Aaron Wan-Bissaka | Manchester United FC | 1997-11-26 | starter | 6/미확인 | 419 | 보류 | — | verification_pending |
| RB | 디오구 달로 | Diogo Dalot | Manchester United FC | 1999-03-18 | backup | 3/미확인 | 233 | 보류 | — | verification_pending |
| DM | 스콧 맥토미니 | Scott McTominay | Manchester United FC | 1996-12-08 | starter | 5/미확인 | 400 | 보류 | — | verification_pending |
| DM | 네마냐 마티치 | Nemanja Matić | Manchester United FC | 1988-08-01 | backup | 8/미확인 | 194 | 보류 | — | verification_pending |
| CM | 프레드 | Fred | Manchester United FC | 1993-03-05 | starter | 6/미확인 | 433 | 보류 | — | verification_pending |
| CM | 폴 포그바 | Paul Pogba | Manchester United FC | 1993-03-15 | backup | 6/미확인 | 347 | 보류 | — | verification_pending |
| CAM | 브루누 페르난데스 | Bruno Fernandes | Manchester United FC | 1994-09-08 | starter | 7/미확인 | 520 | A+ | 2 | verification_pending |
| CAM | 도니 판더베이크 | Donny van de Beek | Manchester United FC | 미확인 | backup | 4/미확인 | 204 | 보류 | — | verification_pending |
| LW | 제이든 산초 | Jadon Sancho | Manchester United FC | 2000-03-25 | starter | 7/미확인 | 393 | 보류 | — | verification_pending |
| LW | 마커스 래시퍼드 | Marcus Rashford | Manchester United FC | 1997-10-31 | backup | 5/미확인 | 257 | 보류 | — | verification_pending |
| RW | 메이슨 그린우드 | Mason Greenwood | Manchester United FC | 2001-10-01 | starter | 4/미확인 | 304 | 보류 | — | verification_pending |
| RW | 안토니 엘랑가 | Anthony Elanga | Manchester United FC | 2002-04-27 | backup | 3/미확인 | 172 | 보류 | — | verification_pending |
| ST | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | 1985-02-05 | starter | 7/미확인 | 611 | A0 | 7 | verification_pending |
| ST | 에딘손 카바니 | Edinson Cavani | Manchester United FC | 1987-02-14 | backup | 4/미확인 | 75 | 보류 | — | verification_pending |

### Villarreal CF — 4-4-2 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 헤로니모 룰리 | Gerónimo Rulli | Villarreal CF | 1989-06-28 | starter | 12/미확인 | 1080 | 보류 | — | verification_pending |
| CB | 파우 토레스 | Pau Torres | Villarreal CF | 미확인 | starter | 12/미확인 | 1080 | 보류 | — | verification_pending |
| CB | 라울 알비올 | Raúl Albiol | Villarreal CF | 미확인 | starter | 12/미확인 | 1045 | 보류 | — | verification_pending |
| CB | 아이사 만디 | Aïssa Mandi | Villarreal CF | 1992-04-30 | backup | 2/미확인 | 24 | 보류 | — | verification_pending |
| LB | 페르비스 에스투피냔 | Pervis Estupiñán | Villarreal CF | 1989-06-28 | starter | 10/미확인 | 645 | 보류 | — | verification_pending |
| LB | 알폰소 페드라사 | Alfonso Pedraza | Villarreal CF | 1989-06-28 | backup | 10/미확인 | 431 | 보류 | — | verification_pending |
| RB | 후안 포이스 | Juan Foyth | Villarreal CF | 미확인 | starter | 10/미확인 | 891 | 보류 | — | verification_pending |
| RB | 세르주 오리에 | Serge Aurier | Villarreal CF | 미확인 | backup | 5/미확인 | 129 | 보류 | — | verification_pending |
| DM | 에티엔 카푸에 | Étienne Capoue | Villarreal CF | 1989-06-28 | starter | 12/미확인 | 1046 | A0 | 2 | verification_pending |
| DM | 비센테 이보라 | Vicente Iborra | Villarreal CF | 1988-01-16 | backup | 1/미확인 | 10 | 보류 | — | verification_pending |
| CM | 다니 파레호 | Dani Parejo | Villarreal CF | 1989-04-16 | starter | 12/미확인 | 1055 | A- | 3 | verification_pending |
| CM | 마누 트리게로스 | Manu Trigueros | Villarreal CF | 1991-10-17 | backup | 9/미확인 | 330 | 보류 | — | verification_pending |
| LW | 프랑시스 코클랭 | Francis Coquelin | Villarreal CF | 미확인 | starter | 8/미확인 | 463 | 보류 | — | verification_pending |
| LW | 알베르토 모레노 | Alberto Moreno | Villarreal CF | 미확인 | backup | 7/미확인 | 309 | 보류 | — | verification_pending |
| RW | 지오바니 로셀소 | Giovani Lo Celso | Villarreal CF | 미확인 | starter | 6/미확인 | 524 | 보류 | — | verification_pending |
| RW | 예레미 피노 | Yeremy Pino | Villarreal CF | 1989-06-28 | backup | 7/미확인 | 431 | 보류 | — | verification_pending |
| ST | 아르나우트 단주마 | Arnaut Danjuma | Villarreal CF | 미확인 | starter | 11/미확인 | 906 | A0 | 6 | verification_pending |
| ST | 제라르 모레노 | Gerard Moreno | Villarreal CF | 1992-04-07 | starter | 7/미확인 | 524 | A- | 8 | verification_pending |
| ST | 불라예 디아 | Boulaye Dia | Villarreal CF | 미확인 | backup | 8/미확인 | 258 | 보류 | — | verification_pending |

### LOSC Lille — 4-4-2 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 이보 그르비치 | Ivo Grbić | LOSC Lille | 미확인 | starter | 6/미확인 | 540 | 보류 | — | verification_pending |
| GK | 레우 자르딩 | Léo Jardim | LOSC Lille | 미확인 | backup | 2/미확인 | 180 | 보류 | — | verification_pending |
| CB | 조제 폰트 | José Fonte | LOSC Lille | 미확인 | starter | 8/미확인 | 720 | 보류 | — | verification_pending |
| CB | 스벤 보트만 | Sven Botman | LOSC Lille | 미확인 | starter | 5/미확인 | 418 | 보류 | — | verification_pending |
| CB | 티아구 잘로 | Tiago Djaló | LOSC Lille | 미확인 | backup | 7/미확인 | 533 | 보류 | — | verification_pending |
| LB | 헤이닐두 만다바 | Reinildo Mandava | LOSC Lille | 미확인 | starter | 6/미확인 | 456 | 보류 | — | verification_pending |
| LB | 가브리엘 구드문드손 | Gabriel Gudmundsson | LOSC Lille | 미확인 | backup | 4/미확인 | 243 | 보류 | — | verification_pending |
| RB | 제키 첼리크 | Zeki Çelik | LOSC Lille | 미확인 | starter | 7/미확인 | 591 | 보류 | — | verification_pending |
| DM | 벤자맹 앙드레 | Benjamin André | LOSC Lille | 미확인 | starter | 7/미확인 | 630 | 보류 | — | verification_pending |
| DM | 아마두 오나나 | Amadou Onana | LOSC Lille | 미확인 | backup | 8/미확인 | 257 | 보류 | — | verification_pending |
| CM | 셰카 | Xeka | LOSC Lille | 미확인 | starter | 7/미확인 | 435 | 보류 | — | verification_pending |
| CM | 헤나투 산시스 | Renato Sanches | LOSC Lille | 미확인 | backup | 5/미확인 | 407 | 보류 | — | verification_pending |
| LW | 조나탕 밤바 | Jonathan Bamba | LOSC Lille | 미확인 | starter | 6/미확인 | 468 | 보류 | — | verification_pending |
| LW | 앙헬 고메스 | Angel Gomes | LOSC Lille | 미확인 | backup | 4/미확인 | 168 | 보류 | — | verification_pending |
| RW | 조나탕 이코네 | Jonathan Ikoné | LOSC Lille | 미확인 | starter | 5/미확인 | 297 | 보류 | — | verification_pending |
| RW | 티모시 웨아 | Timothy Weah | LOSC Lille | 미확인 | backup | 5/미확인 | 255 | 보류 | — | verification_pending |
| ST | 조너선 데이비드 | Jonathan David | LOSC Lille | 미확인 | starter | 8/미확인 | 679 | 보류 | — | verification_pending |
| ST | 부라크 일마즈 | Burak Yılmaz | LOSC Lille | 미확인 | starter | 7/미확인 | 529 | 보류 | — | verification_pending |

### FC Salzburg — 4-3-1-2 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 필리프 쾬 | Philipp Köhn | FC Salzburg | 1998-04-02 | starter | 8/미확인 | 720 | 보류 | — | verified_secondary |
| CB | 막스 뵈버 | Max Wöber | FC Salzburg | 1998-02-04 | starter | 7/미확인 | 573 | 보류 | — | verified_secondary |
| CB | 제롬 옹게네 | Jérôme Onguéné | FC Salzburg | 1997-12-22 | starter | 5/미확인 | 437 | 보류 | — | verified_secondary |
| CB | 우마르 솔레 | Oumar Solet | FC Salzburg | 2000-02-07 | backup | 5/미확인 | 328 | 보류 | — | verified_secondary |
| LB | 안드레아스 울머 | Andreas Ulmer | FC Salzburg | 1985-10-30 | starter | 8/미확인 | 716 | 보류 | — | verified_secondary |
| LB | 베르나르두 | Bernardo | FC Salzburg | 1995-05-14 | backup | 2/미확인 | 23 | 보류 | — | verified_secondary |
| RB | 라스무스 크리스텐센 | Rasmus Kristensen | FC Salzburg | 1997-07-11 | starter | 8/미확인 | 720 | 보류 | — | verified_secondary |
| DM | 모하메드 카마라 | Mohamed Camara | FC Salzburg | 2000-01-06 | starter | 8/미확인 | 672 | 보류 | — | verified_secondary |
| CM | 니콜라스 자이발트 | Nicolas Seiwald | FC Salzburg | 2001-05-04 | starter | 8/미확인 | 649 | 보류 | — | verified_secondary |
| CM | 루카 수치치 | Luka Sučić | FC Salzburg | 2002-09-08 | starter | 8/미확인 | 516 | 보류 | — | verified_secondary |
| CM | 니콜라스 카팔도 | Nicolás Capaldo | FC Salzburg | 1997-09-14 | backup | 7/미확인 | 281 | 보류 | — | verified_secondary |
| CAM | 브렌던 애런슨 | Brenden Aaronson | FC Salzburg | 2000-10-22 | starter | 8/미확인 | 715 | 보류 | — | verified_secondary |
| CAM | 마우리츠 키에르가르 | Maurits Kjærgaard | FC Salzburg | 2003-06-26 | backup | 4/미확인 | 38 | 보류 | — | verified_secondary |
| ST | 카림 아데예미 | Karim Adeyemi | FC Salzburg | 2002-01-18 | starter | 8/미확인 | 607 | 보류 | — | verified_secondary |
| ST | 노아 오카포르 | Noah Okafor | FC Salzburg | 2000-05-24 | starter | 6/미확인 | 345 | 보류 | — | verified_secondary |
| ST | 벤야민 셰슈코 | Benjamin Šeško | FC Salzburg | 2003-05-31 | backup | 6/미확인 | 234 | 보류 | — | verified_secondary |

### Juventus FC — 4-4-2 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus FC | 1990-04-18 | starter | 7/미확인 | 630 | 보류 | — | verification_pending |
| GK | 마티아 페린 | Mattia Perin | Juventus FC | 1992-11-10 | backup | 1/미확인 | 90 | 보류 | — | verification_pending |
| CB | 마테이스 더리흐트 | Matthijs de Ligt | Juventus FC | 1999-08-12 | starter | 7/미확인 | 627 | 보류 | — | verification_pending |
| CB | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | starter | 7/미확인 | 580 | 보류 | — | verification_pending |
| CB | 다니엘레 루가니 | Daniele Rugani | Juventus FC | 미확인 | backup | 4/미확인 | 177 | 보류 | — | verification_pending |
| LB | 알렉스 산드루 | Alex Sandro | Juventus FC | 1991-01-26 | starter | 7/미확인 | 553 | 보류 | — | verification_pending |
| LB | 마티아 데실리오 | Mattia De Sciglio | Juventus FC | 미확인 | backup | 4/미확인 | 286 | 보류 | — | verification_pending |
| RB | 다닐루 | Danilo | Juventus FC | 미확인 | starter | 5/미확인 | 450 | 보류 | — | verification_pending |
| DM | 마누엘 로카텔리 | Manuel Locatelli | Juventus FC | 1998-01-08 | starter | 7/미확인 | 539 | 보류 | — | verification_pending |
| DM | 아르투르 | Arthur | Juventus FC | 미확인 | backup | 6/미확인 | 264 | 보류 | — | verification_pending |
| CM | 웨스턴 맥케니 | Weston McKennie | Juventus FC | 1998-08-28 | starter | 6/미확인 | 388 | 보류 | — | verification_pending |
| CM | 로드리고 벤탄쿠르 | Rodrigo Bentancur | Juventus FC | 1997-06-25 | backup | 5/미확인 | 382 | 보류 | — | verification_pending |
| LW | 아드리앵 라비오 | Adrien Rabiot | Juventus FC | 1995-04-03 | starter | 7/미확인 | 536 | 보류 | — | verification_pending |
| LW | 페데리코 키에사 | Federico Chiesa | Juventus FC | 1997-10-25 | backup | 4/미확인 | 336 | 보류 | — | verification_pending |
| RW | 후안 콰드라도 | Juan Cuadrado | Juventus FC | 1988-05-26 | starter | 7/미확인 | 472 | 보류 | — | verification_pending |
| RW | 페데리코 베르나르데스키 | Federico Bernardeschi | Juventus FC | 1994-02-16 | backup | 5/미확인 | 292 | 보류 | — | verification_pending |
| ST | 알바로 모라타 | Álvaro Morata | Juventus FC | 1992-10-23 | starter | 7/미확인 | 520 | 보류 | — | verification_pending |
| ST | 파울로 디발라 | Paulo Dybala | Juventus FC | 1993-11-15 | starter | 5/미확인 | 255 | 보류 | — | verification_pending |
| ST | 두샨 블라호비치 | Dušan Vlahović | Juventus FC | 2000-01-28 | backup | 2/미확인 | 180 | 보류 | — | verification_pending |

### Chelsea FC — 3-4-2-1 (잠정)

| 포지션 | 한글명 | 원어명 | 구단 | 생년월일 | 역할 | 출전/선발 | 분 | 티어 | 순위 | 생년 검증 |
|---|---|---|---|---|---|---|---:|---|---:|---|
| GK | 에두아르 멘디 | Édouard Mendy | Chelsea FC | 1992-03-01 | starter | 9/미확인 | 840 | A0 | 3 | verification_pending |
| GK | 케파 아리사발라가 | Kepa Arrizabalaga | Chelsea FC | 1994-10-03 | backup | 1/미확인 | 90 | 보류 | — | verification_pending |
| CB | 안토니오 뤼디거 | Antonio Rüdiger | Chelsea FC | 1993-03-03 | starter | 9/미확인 | 840 | A+ | 1 | verified_official |
| CB | 티아고 실바 | Thiago Silva | Chelsea FC | 1984-09-22 | starter | 9/미확인 | 757 | 보류 | — | verified_official |
| CB | 안드레아스 크리스텐센 | Andreas Christensen | Chelsea FC | 1996-04-10 | starter | 8/미확인 | 603 | 보류 | — | verified_official |
| CB | 트레보 찰로바 | Trevoh Chalobah | Chelsea FC | 1999-07-05 | backup | 3/미확인 | 175 | 보류 | — | verified_official |
| LB | 마르코스 알론소 | Marcos Alonso | Chelsea FC | 1990-12-28 | starter | 8/미확인 | 548 | 보류 | — | verified_official |
| LB | 벤 칠웰 | Ben Chilwell | Chelsea FC | 1996-12-21 | backup | 4/미확인 | 188 | 보류 | — | verified_official |
| RB | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 | starter | 9/미확인 | 679 | 보류 | — | verified_official |
| RB | 리스 제임스 | Reece James | Chelsea FC | 1999-12-08 | backup | 6/미확인 | 505 | 보류 | — | verified_official |
| DM | 조르지뉴 | Jorginho | Chelsea FC | 1991-12-20 | starter | 8/미확인 | 561 | 보류 | — | verification_pending |
| CM | 은골로 캉테 | N'Golo Kanté | Chelsea FC | 1991-03-29 | starter | 6/미확인 | 427 | 보류 | — | verification_pending |
| CM | 마테오 코바치치 | Mateo Kovačić | Chelsea FC | 1994-05-06 | backup | 6/미확인 | 426 | 보류 | — | verification_pending |
| CAM | 메이슨 마운트 | Mason Mount | Chelsea FC | 1999-01-10 | starter | 7/미확인 | 538 | 보류 | — | verification_pending |
| CAM | 하킴 지예흐 | Hakim Ziyech | Chelsea FC | 1993-03-19 | starter | 9/미확인 | 446 | 보류 | — | verification_pending |
| CAM | 크리스천 풀리식 | Christian Pulisic | Chelsea FC | 1998-09-18 | backup | 7/미확인 | 367 | 보류 | — | verification_pending |
| ST | 카이 하베르츠 | Kai Havertz | Chelsea FC | 1999-06-11 | starter | 9/미확인 | 672 | 보류 | — | verification_pending |
| ST | 로멜루 루카쿠 | Romelu Lukaku | Chelsea FC | 1993-05-13 | backup | 6/미확인 | 320 | 보류 | — | verification_pending |

## 포지션별 통합 명단 (평가 보류는 순위 미부여)

### GK

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 티보 쿠르투아 | Thibaut Courtois | Real Madrid CF | 1992-05-11 | S |
| 2 | 마누엘 노이어 | Manuel Neuer | FC Bayern München | 1986-03-27 | A0 |
| 3 | 에두아르 멘디 | Édouard Mendy | Chelsea FC | 1992-03-01 | A0 |
| 4 | 에데르송 | Ederson | Manchester City FC | 1993-08-17 | A0 |
| — | 잭 스테픈 | Zack Steffen | Manchester City FC | 미확인 | 보류 |
| — | 잔루이지 돈나룸마 | Gianluigi Donnarumma | Paris Saint-Germain FC | 1999-02-25 | 보류 |
| — | 케일러 나바스 | Keylor Navas | Paris Saint-Germain FC | 1986-12-15 | 보류 |
| — | 알리송 베케르 | Alisson Becker | Liverpool FC | 1992-10-02 | 보류 |
| — | 얀 오블라크 | Jan Oblak | Club Atlético de Madrid | 1993-01-07 | 보류 |
| — | 렘코 파스베이르 | Remko Pasveer | AFC Ajax | 1983-11-18 | 보류 |
| — | 안드레 오나나 | André Onana | AFC Ajax | 1996-04-02 | 보류 |
| — | 안토니오 아단 | Antonio Adán | Sporting CP | 미확인 | 보류 |
| — | 주앙 비르지니아 | João Virgínia | Sporting CP | 미확인 | 보류 |
| — | 사미르 한다노비치 | Samir Handanovič | FC Internazionale Milano | 1984-07-14 | 보류 |
| — | 스벤 울라이히 | Sven Ulreich | FC Bayern München | 1988-08-03 | 보류 |
| — | 오디세아스 블라호디모스 | Odysseas Vlachodimos | SL Benfica | 미확인 | 보류 |
| — | 다비드 데 헤아 | David de Gea | Manchester United FC | 1990-11-07 | 보류 |
| — | 딘 헨더슨 | Dean Henderson | Manchester United FC | 미확인 | 보류 |
| — | 헤로니모 룰리 | Gerónimo Rulli | Villarreal CF | 1989-06-28 | 보류 |
| — | 이보 그르비치 | Ivo Grbić | LOSC Lille | 미확인 | 보류 |
| — | 레우 자르딩 | Léo Jardim | LOSC Lille | 미확인 | 보류 |
| — | 필리프 쾬 | Philipp Köhn | FC Salzburg | 1998-04-02 | 보류 |
| — | 보이치에흐 슈쳉스니 | Wojciech Szczęsny | Juventus FC | 1990-04-18 | 보류 |
| — | 마티아 페린 | Mattia Perin | Juventus FC | 1992-11-10 | 보류 |
| — | 케파 아리사발라가 | Kepa Arrizabalaga | Chelsea FC | 1994-10-03 | 보류 |

### CB

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 안토니오 뤼디거 | Antonio Rüdiger | Chelsea FC | 1993-03-03 | A+ |
| 2 | 버질 반다이크 | Virgil van Dijk | Liverpool FC | 1991-07-08 | A+ |
| 3 | 마르키뉴스 | Marquinhos | Paris Saint-Germain FC | 1994-05-14 | A0 |
| 4 | 후벵 디아스 | Rúben Dias | Manchester City FC | 1997-05-14 | A0 |
| — | 에므리크 라포르트 | Aymeric Laporte | Manchester City FC | 1994-05-27 | 보류 |
| — | 존 스톤스 | John Stones | Manchester City FC | 1994-05-28 | 보류 |
| — | 프레스넬 킴펨베 | Presnel Kimpembe | Paris Saint-Germain FC | 1995-08-13 | 보류 |
| — | 압두 디알로 | Abdou Diallo | Paris Saint-Germain FC | 미확인 | 보류 |
| — | 이브라히마 코나테 | Ibrahima Konaté | Liverpool FC | 1999-05-25 | 보류 |
| — | 조엘 마티프 | Joël Matip | Liverpool FC | 1991-08-08 | 보류 |
| — | 호세 마리아 히메네스 | José María Giménez | Club Atlético de Madrid | 1995-01-20 | 보류 |
| — | 펠리페 | Felipe | Club Atlético de Madrid | 미확인 | 보류 |
| — | 스테판 사비치 | Stefan Savić | Club Atlético de Madrid | 1991-01-08 | 보류 |
| — | 마리오 에르모소 | Mario Hermoso | Club Atlético de Madrid | 1995-06-18 | 보류 |
| — | 리산드로 마르티네스 | Lisandro Martínez | AFC Ajax | 1998-01-18 | 보류 |
| — | 위리엔 팀버 | Jurrien Timber | AFC Ajax | 2001-06-17 | 보류 |
| — | 페르 스휘르스 | Perr Schuurs | AFC Ajax | 1999-11-26 | 보류 |
| — | 곤살루 이나시우 | Gonçalo Inácio | Sporting CP | 미확인 | 보류 |
| — | 세바스티안 코아테스 | Sebastián Coates | Sporting CP | 미확인 | 보류 |
| — | 주하이르 페달 | Zouhair Feddal | Sporting CP | 미확인 | 보류 |
| — | 루이스 네투 | Luís Neto | Sporting CP | 미확인 | 보류 |
| — | 에데르 밀리탕 | Éder Militão | Real Madrid CF | 미확인 | 보류 |
| — | 다비드 알라바 | David Alaba | Real Madrid CF | 미확인 | 보류 |
| — | 나초 페르난데스 | Nacho Fernández | Real Madrid CF | 1990-01-18 | 보류 |
| — | 밀란 슈크리니아르 | Milan Škriniar | FC Internazionale Milano | 1995-02-11 | 보류 |
| — | 스테판 더프레이 | Stefan de Vrij | FC Internazionale Milano | 1992-02-05 | 보류 |
| — | 알레산드로 바스토니 | Alessandro Bastoni | FC Internazionale Milano | 1999-04-13 | 보류 |
| — | 다닐로 담브로시오 | Danilo D'Ambrosio | FC Internazionale Milano | 1988-09-09 | 보류 |
| — | 다요 우파메카노 | Dayot Upamecano | FC Bayern München | 1998-10-27 | 보류 |
| — | 니클라스 쥘레 | Niklas Süle | FC Bayern München | 1995-09-03 | 보류 |
| — | 루카스 에르난데스 | Lucas Hernández | FC Bayern München | 1996-02-14 | 보류 |
| — | 얀 베르통언 | Jan Vertonghen | SL Benfica | 미확인 | 보류 |
| — | 니콜라스 오타멘디 | Nicolás Otamendi | SL Benfica | 미확인 | 보류 |
| — | 루카스 베리시무 | Lucas Veríssimo | SL Benfica | 미확인 | 보류 |
| — | 모라투 | Morato | SL Benfica | 미확인 | 보류 |
| — | 해리 매과이어 | Harry Maguire | Manchester United FC | 1993-03-05 | 보류 |
| — | 빅토르 린델뢰프 | Victor Lindelöf | Manchester United FC | 1994-07-17 | 보류 |
| — | 라파엘 바란 | Raphaël Varane | Manchester United FC | 1993-04-25 | 보류 |
| — | 파우 토레스 | Pau Torres | Villarreal CF | 미확인 | 보류 |
| — | 라울 알비올 | Raúl Albiol | Villarreal CF | 미확인 | 보류 |
| — | 아이사 만디 | Aïssa Mandi | Villarreal CF | 1992-04-30 | 보류 |
| — | 조제 폰트 | José Fonte | LOSC Lille | 미확인 | 보류 |
| — | 스벤 보트만 | Sven Botman | LOSC Lille | 미확인 | 보류 |
| — | 티아구 잘로 | Tiago Djaló | LOSC Lille | 미확인 | 보류 |
| — | 막스 뵈버 | Max Wöber | FC Salzburg | 1998-02-04 | 보류 |
| — | 제롬 옹게네 | Jérôme Onguéné | FC Salzburg | 1997-12-22 | 보류 |
| — | 우마르 솔레 | Oumar Solet | FC Salzburg | 2000-02-07 | 보류 |
| — | 마테이스 더리흐트 | Matthijs de Ligt | Juventus FC | 1999-08-12 | 보류 |
| — | 레오나르도 보누치 | Leonardo Bonucci | Juventus FC | 1987-05-01 | 보류 |
| — | 다니엘레 루가니 | Daniele Rugani | Juventus FC | 미확인 | 보류 |
| — | 티아고 실바 | Thiago Silva | Chelsea FC | 1984-09-22 | 보류 |
| — | 안드레아스 크리스텐센 | Andreas Christensen | Chelsea FC | 1996-04-10 | 보류 |
| — | 트레보 찰로바 | Trevoh Chalobah | Chelsea FC | 1999-07-05 | 보류 |

### LB

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 앤드루 로버트슨 | Andrew Robertson | Liverpool FC | 미확인 | A+ |
| 2 | 주앙 칸셀루 | João Cancelo | Manchester City FC | 1994-05-27 | A0 |
| — | 올렉산드르 진첸코 | Oleksandr Zinchenko | Manchester City FC | 1996-12-15 | 보류 |
| — | 누누 멘데스 | Nuno Mendes | Paris Saint-Germain FC | 2002-06-19 | 보류 |
| — | 코스타스 치미카스 | Kostas Tsimikas | Liverpool FC | 1996-05-12 | 보류 |
| — | 헤낭 로지 | Renan Lodi | Club Atlético de Madrid | 미확인 | 보류 |
| — | 야니크 카라스코 | Yannick Carrasco | Club Atlético de Madrid | 1993-01-07 | 보류 |
| — | 달레이 블린트 | Daley Blind | AFC Ajax | 1990-03-09 | 보류 |
| — | 니콜라스 탈리아피코 | Nicolás Tagliafico | AFC Ajax | 1992-08-31 | 보류 |
| — | 마테우스 레이스 | Matheus Reis | Sporting CP | 미확인 | 보류 |
| — | 후벵 비나그르 | Rúben Vinagre | Sporting CP | 미확인 | 보류 |
| — | 페를랑 멘디 | Ferland Mendy | Real Madrid CF | 미확인 | 보류 |
| — | 마르셀루 | Marcelo | Real Madrid CF | 1988-05-12 | 보류 |
| — | 이반 페리시치 | Ivan Perišić | FC Internazionale Milano | 1989-02-02 | 보류 |
| — | 페데리코 디마르코 | Federico Dimarco | FC Internazionale Milano | 1997-11-10 | 보류 |
| — | 알폰소 데이비스 | Alphonso Davies | FC Bayern München | 2000-11-02 | 보류 |
| — | 알레한드로 그리말도 | Alejandro Grimaldo | SL Benfica | 미확인 | 보류 |
| — | 발렌티노 라자로 | Valentino Lazaro | SL Benfica | 미확인 | 보류 |
| — | 루크 쇼 | Luke Shaw | Manchester United FC | 1995-07-12 | 보류 |
| — | 알렉스 텔레스 | Alex Telles | Manchester United FC | 1992-12-15 | 보류 |
| — | 페르비스 에스투피냔 | Pervis Estupiñán | Villarreal CF | 1989-06-28 | 보류 |
| — | 알폰소 페드라사 | Alfonso Pedraza | Villarreal CF | 1989-06-28 | 보류 |
| — | 헤이닐두 만다바 | Reinildo Mandava | LOSC Lille | 미확인 | 보류 |
| — | 가브리엘 구드문드손 | Gabriel Gudmundsson | LOSC Lille | 미확인 | 보류 |
| — | 안드레아스 울머 | Andreas Ulmer | FC Salzburg | 1985-10-30 | 보류 |
| — | 베르나르두 | Bernardo | FC Salzburg | 1995-05-14 | 보류 |
| — | 알렉스 산드루 | Alex Sandro | Juventus FC | 1991-01-26 | 보류 |
| — | 마티아 데실리오 | Mattia De Sciglio | Juventus FC | 미확인 | 보류 |
| — | 마르코스 알론소 | Marcos Alonso | Chelsea FC | 1990-12-28 | 보류 |
| — | 벤 칠웰 | Ben Chilwell | Chelsea FC | 1996-12-21 | 보류 |

### RB

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 트렌트 알렉산더아놀드 | Trent Alexander-Arnold | Liverpool FC | 1998-10-07 | A+ |
| — | 카일 워커 | Kyle Walker | Manchester City FC | 1990-05-28 | 보류 |
| — | 아슈라프 하키미 | Achraf Hakimi | Paris Saint-Germain FC | 1998-11-04 | 보류 |
| — | 틸로 케러 | Thilo Kehrer | Paris Saint-Germain FC | 1996-09-21 | 보류 |
| — | 조 고메즈 | Joe Gomez | Liverpool FC | 1997-05-23 | 보류 |
| — | 마르코스 요렌테 | Marcos Llorente | Club Atlético de Madrid | 1995-01-30 | 보류 |
| — | 시메 브르살리코 | Šime Vrsaljko | Club Atlético de Madrid | 1993-01-07 | 보류 |
| — | 누사이르 마즈라위 | Noussair Mazraoui | AFC Ajax | 1997-11-14 | 보류 |
| — | 데빈 렌스 | Devyne Rensch | AFC Ajax | 2003-01-18 | 보류 |
| — | 페드로 포로 | Pedro Porro | Sporting CP | 미확인 | 보류 |
| — | 히카르두 이스가이우 | Ricardo Esgaio | Sporting CP | 미확인 | 보류 |
| — | 다니 카르바할 | Dani Carvajal | Real Madrid CF | 1992-01-11 | 보류 |
| — | 루카스 바스케스 | Lucas Vázquez | Real Madrid CF | 1991-07-01 | 보류 |
| — | 덴젤 둠프리스 | Denzel Dumfries | FC Internazionale Milano | 1996-04-18 | 보류 |
| — | 마테오 다르미안 | Matteo Darmian | FC Internazionale Milano | 1989-12-02 | 보류 |
| — | 뱅자맹 파바르 | Benjamin Pavard | FC Bayern München | 1996-03-28 | 보류 |
| — | 부나 사르 | Bouna Sarr | FC Bayern München | 미확인 | 보류 |
| — | 지우베르투 | Gilberto | SL Benfica | 미확인 | 보류 |
| — | 안드레 알메이다 | André Almeida | SL Benfica | 미확인 | 보류 |
| — | 아론 완비사카 | Aaron Wan-Bissaka | Manchester United FC | 1997-11-26 | 보류 |
| — | 디오구 달로 | Diogo Dalot | Manchester United FC | 1999-03-18 | 보류 |
| — | 후안 포이스 | Juan Foyth | Villarreal CF | 미확인 | 보류 |
| — | 세르주 오리에 | Serge Aurier | Villarreal CF | 미확인 | 보류 |
| — | 제키 첼리크 | Zeki Çelik | LOSC Lille | 미확인 | 보류 |
| — | 라스무스 크리스텐센 | Rasmus Kristensen | FC Salzburg | 1997-07-11 | 보류 |
| — | 다닐루 | Danilo | Juventus FC | 미확인 | 보류 |
| — | 세사르 아스필리쿠에타 | César Azpilicueta | Chelsea FC | 1989-08-28 | 보류 |
| — | 리스 제임스 | Reece James | Chelsea FC | 1999-12-08 | 보류 |

### DM

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 파비뉴 | Fabinho | Liverpool FC | 1993-10-23 | A+ |
| 2 | 에티엔 카푸에 | Étienne Capoue | Villarreal CF | 1989-06-28 | A0 |
| — | 로드리 | Rodri | Manchester City FC | 1996-06-22 | 보류 |
| — | 페르난지뉴 | Fernandinho | Manchester City FC | 1985-05-04 | 보류 |
| — | 다닐루 페레이라 | Danilo Pereira | Paris Saint-Germain FC | 1991-09-09 | 보류 |
| — | 레안드로 파레데스 | Leandro Paredes | Paris Saint-Germain FC | 1994-06-29 | 보류 |
| — | 타일러 모턴 | Tyler Morton | Liverpool FC | 미확인 | 보류 |
| — | 조프레 콩도그비아 | Geoffrey Kondogbia | Club Atlético de Madrid | 미확인 | 보류 |
| — | 엑토르 에레라 | Héctor Herrera | Club Atlético de Madrid | 미확인 | 보류 |
| — | 에드손 알바레스 | Edson Álvarez | AFC Ajax | 1997-10-24 | 보류 |
| — | 주앙 팔리냐 | João Palhinha | Sporting CP | 미확인 | 보류 |
| — | 마누엘 우가르테 | Manuel Ugarte | Sporting CP | 미확인 | 보류 |
| — | 카세미루 | Casemiro | Real Madrid CF | 1992-02-23 | 보류 |
| — | 마르첼로 브로조비치 | Marcelo Brozović | FC Internazionale Milano | 1992-11-16 | 보류 |
| — | 마티아스 베시노 | Matías Vecino | FC Internazionale Milano | 미확인 | 보류 |
| — | 요주아 키미히 | Joshua Kimmich | FC Bayern München | 1995-02-08 | 보류 |
| — | 마르크 로카 | Marc Roca | FC Bayern München | 1996-11-26 | 보류 |
| — | 율리안 바이글 | Julian Weigl | SL Benfica | 미확인 | 보류 |
| — | 수알리호 메이테 | Soualiho Meïté | SL Benfica | 미확인 | 보류 |
| — | 스콧 맥토미니 | Scott McTominay | Manchester United FC | 1996-12-08 | 보류 |
| — | 네마냐 마티치 | Nemanja Matić | Manchester United FC | 1988-08-01 | 보류 |
| — | 비센테 이보라 | Vicente Iborra | Villarreal CF | 1988-01-16 | 보류 |
| — | 벤자맹 앙드레 | Benjamin André | LOSC Lille | 미확인 | 보류 |
| — | 아마두 오나나 | Amadou Onana | LOSC Lille | 미확인 | 보류 |
| — | 모하메드 카마라 | Mohamed Camara | FC Salzburg | 2000-01-06 | 보류 |
| — | 마누엘 로카텔리 | Manuel Locatelli | Juventus FC | 1998-01-08 | 보류 |
| — | 아르투르 | Arthur | Juventus FC | 미확인 | 보류 |
| — | 조르지뉴 | Jorginho | Chelsea FC | 1991-12-20 | 보류 |

### CM

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 루카 모드리치 | Luka Modrić | Real Madrid CF | 1985-09-09 | A+ |
| 2 | 베르나르두 실바 | Bernardo Silva | Manchester City FC | 1994-08-10 | A0 |
| 3 | 다니 파레호 | Dani Parejo | Villarreal CF | 1989-04-16 | A- |
| 4 | 주앙 마리우 | João Mário | SL Benfica | 미확인 | A- |
| — | 일카이 귄도안 | İlkay Gündoğan | Manchester City FC | 1990-10-24 | 보류 |
| — | 마르코 베라티 | Marco Verratti | Paris Saint-Germain FC | 1992-11-05 | 보류 |
| — | 이드리사 게예 | Idrissa Gueye | Paris Saint-Germain FC | 1989-09-26 | 보류 |
| — | 안데르 에레라 | Ander Herrera | Paris Saint-Germain FC | 미확인 | 보류 |
| — | 조던 헨더슨 | Jordan Henderson | Liverpool FC | 1990-06-17 | 보류 |
| — | 티아고 알칸타라 | Thiago Alcántara | Liverpool FC | 1991-04-11 | 보류 |
| — | 나비 케이타 | Naby Keïta | Liverpool FC | 1995-02-10 | 보류 |
| — | 코케 | Koke | Club Atlético de Madrid | 1992-01-08 | 보류 |
| — | 로드리고 데폴 | Rodrigo De Paul | Club Atlético de Madrid | 미확인 | 보류 |
| — | 토마 르마르 | Thomas Lemar | Club Atlético de Madrid | 1995-11-12 | 보류 |
| — | 라이언 흐라벤베르흐 | Ryan Gravenberch | AFC Ajax | 2002-05-16 | 보류 |
| — | 마테우스 누네스 | Matheus Nunes | Sporting CP | 미확인 | 보류 |
| — | 다니엘 브라간사 | Daniel Bragança | Sporting CP | 미확인 | 보류 |
| — | 토니 크로스 | Toni Kroos | Real Madrid CF | 1990-01-04 | 보류 |
| — | 에두아르도 카마빙가 | Eduardo Camavinga | Real Madrid CF | 미확인 | 보류 |
| — | 니콜로 바렐라 | Nicolò Barella | FC Internazionale Milano | 1997-02-07 | 보류 |
| — | 하칸 찰하놀루 | Hakan Çalhanoğlu | FC Internazionale Milano | 1994-02-08 | 보류 |
| — | 아르투로 비달 | Arturo Vidal | FC Internazionale Milano | 미확인 | 보류 |
| — | 레온 고레츠카 | Leon Goretzka | FC Bayern München | 1995-02-06 | 보류 |
| — | 코랑탱 톨리소 | Corentin Tolisso | FC Bayern München | 1994-08-03 | 보류 |
| — | 아델 타랍 | Adel Taarabt | SL Benfica | 미확인 | 보류 |
| — | 프레드 | Fred | Manchester United FC | 1993-03-05 | 보류 |
| — | 폴 포그바 | Paul Pogba | Manchester United FC | 1993-03-15 | 보류 |
| — | 마누 트리게로스 | Manu Trigueros | Villarreal CF | 1991-10-17 | 보류 |
| — | 셰카 | Xeka | LOSC Lille | 미확인 | 보류 |
| — | 헤나투 산시스 | Renato Sanches | LOSC Lille | 미확인 | 보류 |
| — | 니콜라스 자이발트 | Nicolas Seiwald | FC Salzburg | 2001-05-04 | 보류 |
| — | 루카 수치치 | Luka Sučić | FC Salzburg | 2002-09-08 | 보류 |
| — | 니콜라스 카팔도 | Nicolás Capaldo | FC Salzburg | 1997-09-14 | 보류 |
| — | 웨스턴 맥케니 | Weston McKennie | Juventus FC | 1998-08-28 | 보류 |
| — | 로드리고 벤탄쿠르 | Rodrigo Bentancur | Juventus FC | 1997-06-25 | 보류 |
| — | 은골로 캉테 | N'Golo Kanté | Chelsea FC | 1991-03-29 | 보류 |
| — | 마테오 코바치치 | Mateo Kovačić | Chelsea FC | 1994-05-06 | 보류 |

### CAM

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 케빈 더 브라위너 | Kevin De Bruyne | Manchester City FC | 1991-06-28 | A+ |
| 2 | 브루누 페르난데스 | Bruno Fernandes | Manchester United FC | 1994-09-08 | A+ |
| 3 | 토마스 뮐러 | Thomas Müller | FC Bayern München | 1989-09-13 | A0 |
| — | 스테번 베르하위스 | Steven Berghuis | AFC Ajax | 1991-12-19 | 보류 |
| — | 다비 클라선 | Davy Klaassen | AFC Ajax | 1993-02-21 | 보류 |
| — | 자말 무시알라 | Jamal Musiala | FC Bayern München | 2003-02-26 | 보류 |
| — | 도니 판더베이크 | Donny van de Beek | Manchester United FC | 미확인 | 보류 |
| — | 브렌던 애런슨 | Brenden Aaronson | FC Salzburg | 2000-10-22 | 보류 |
| — | 마우리츠 키에르가르 | Maurits Kjærgaard | FC Salzburg | 2003-06-26 | 보류 |
| — | 메이슨 마운트 | Mason Mount | Chelsea FC | 1999-01-10 | 보류 |
| — | 하킴 지예흐 | Hakim Ziyech | Chelsea FC | 1993-03-19 | 보류 |
| — | 크리스천 풀리식 | Christian Pulisic | Chelsea FC | 1998-09-18 | 보류 |

### LW

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 비니시우스 주니오르 | Vinícius Júnior | Real Madrid CF | 2000-07-12 | A+ |
| 2 | 리로이 자네 | Leroy Sané | FC Bayern München | 1996-01-11 | A+ |
| 3 | 페드루 곤살베스 | Pedro Gonçalves | Sporting CP | 미확인 | A- |
| — | 라힘 스털링 | Raheem Sterling | Manchester City FC | 1994-12-08 | 보류 |
| — | 잭 그릴리시 | Jack Grealish | Manchester City FC | 1995-09-10 | 보류 |
| — | 네이마르 | Neymar | Paris Saint-Germain FC | 1992-02-05 | 보류 |
| — | 율리안 드락슬러 | Julian Draxler | Paris Saint-Germain FC | 1993-09-20 | 보류 |
| — | 사디오 마네 | Sadio Mané | Liverpool FC | 1992-04-10 | 보류 |
| — | 루이스 디아스 | Luis Díaz | Liverpool FC | 1997-01-13 | 보류 |
| — | 두샨 타디치 | Dušan Tadić | AFC Ajax | 1988-11-20 | 보류 |
| — | 모하메드 다라미 | Mohamed Daramy | AFC Ajax | 2002-01-07 | 보류 |
| — | 누누 산투스 | Nuno Santos | Sporting CP | 미확인 | 보류 |
| — | 에덴 아자르 | Eden Hazard | Real Madrid CF | 미확인 | 보류 |
| — | 에베르통 | Everton | SL Benfica | 1996-03-22 | 보류 |
| — | 제이든 산초 | Jadon Sancho | Manchester United FC | 2000-03-25 | 보류 |
| — | 마커스 래시퍼드 | Marcus Rashford | Manchester United FC | 1997-10-31 | 보류 |
| — | 프랑시스 코클랭 | Francis Coquelin | Villarreal CF | 미확인 | 보류 |
| — | 알베르토 모레노 | Alberto Moreno | Villarreal CF | 미확인 | 보류 |
| — | 조나탕 밤바 | Jonathan Bamba | LOSC Lille | 미확인 | 보류 |
| — | 앙헬 고메스 | Angel Gomes | LOSC Lille | 미확인 | 보류 |
| — | 아드리앵 라비오 | Adrien Rabiot | Juventus FC | 1995-04-03 | 보류 |
| — | 페데리코 키에사 | Federico Chiesa | Juventus FC | 1997-10-25 | 보류 |

### RW

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 모하메드 살라 | Mohamed Salah | Liverpool FC | 1992-06-15 | A+ |
| 2 | 리야드 마레즈 | Riyad Mahrez | Manchester City FC | 1991-02-21 | A+ |
| 3 | 안토니 | Antony | AFC Ajax | 2000-02-24 | A0 |
| 4 | 리오넬 메시 | Lionel Messi | Paris Saint-Germain FC | 1987-06-24 | A0 |
| 5 | 호드리구 | Rodrygo | Real Madrid CF | 미확인 | A- |
| — | 앙헬 디 마리아 | Ángel Di María | Paris Saint-Germain FC | 1988-02-14 | 보류 |
| — | 미나미노 다쿠미 | Takumi Minamino | Liverpool FC | 미확인 | 보류 |
| — | 다비드 네리스 | David Neres | AFC Ajax | 1997-03-03 | 보류 |
| — | 파블로 사라비아 | Pablo Sarabia | Sporting CP | 미확인 | 보류 |
| — | 브루누 타바타 | Bruno Tabata | Sporting CP | 미확인 | 보류 |
| — | 페데리코 발베르데 | Federico Valverde | Real Madrid CF | 미확인 | 보류 |
| — | 킹슬리 코망 | Kingsley Coman | FC Bayern München | 1996-06-13 | 보류 |
| — | 세르주 그나브리 | Serge Gnabry | FC Bayern München | 1995-07-14 | 보류 |
| — | 하파 실바 | Rafa Silva | SL Benfica | 1993-05-17 | 보류 |
| — | 디오구 곤살베스 | Diogo Gonçalves | SL Benfica | 미확인 | 보류 |
| — | 메이슨 그린우드 | Mason Greenwood | Manchester United FC | 2001-10-01 | 보류 |
| — | 안토니 엘랑가 | Anthony Elanga | Manchester United FC | 2002-04-27 | 보류 |
| — | 지오바니 로셀소 | Giovani Lo Celso | Villarreal CF | 미확인 | 보류 |
| — | 예레미 피노 | Yeremy Pino | Villarreal CF | 1989-06-28 | 보류 |
| — | 조나탕 이코네 | Jonathan Ikoné | LOSC Lille | 미확인 | 보류 |
| — | 티모시 웨아 | Timothy Weah | LOSC Lille | 미확인 | 보류 |
| — | 후안 콰드라도 | Juan Cuadrado | Juventus FC | 1988-05-26 | 보류 |
| — | 페데리코 베르나르데스키 | Federico Bernardeschi | Juventus FC | 1994-02-16 | 보류 |

### ST

| 순위 | 한글명 | 원어명 | 구단 | 생년월일 | 티어 |
|---:|---|---|---|---|---|
| 1 | 카림 벤제마 | Karim Benzema | Real Madrid CF | 1987-12-19 | S |
| 2 | 로베르트 레반도프스키 | Robert Lewandowski | FC Bayern München | 1988-08-21 | S |
| 3 | 킬리안 음바페 | Kylian Mbappé | Paris Saint-Germain FC | 1998-12-20 | A+ |
| 4 | 세바스티앵 알레 | Sébastien Haller | AFC Ajax | 1994-06-22 | A+ |
| 5 | 다르윈 누녜스 | Darwin Núñez | SL Benfica | 1999-06-24 | A0 |
| 6 | 아르나우트 단주마 | Arnaut Danjuma | Villarreal CF | 미확인 | A0 |
| 7 | 크리스티아누 호날두 | Cristiano Ronaldo | Manchester United FC | 1985-02-05 | A0 |
| 8 | 제라르 모레노 | Gerard Moreno | Villarreal CF | 1992-04-07 | A- |
| 9 | 앙투안 그리에즈만 | Antoine Griezmann | Club Atlético de Madrid | 1991-03-21 | A- |
| — | 필 포든 | Phil Foden | Manchester City FC | 2000-05-28 | 보류 |
| — | 가브리에우 제주스 | Gabriel Jesus | Manchester City FC | 1997-04-03 | 보류 |
| — | 마우로 이카르디 | Mauro Icardi | Paris Saint-Germain FC | 1993-02-19 | 보류 |
| — | 디오구 조타 | Diogo Jota | Liverpool FC | 1996-12-04 | 보류 |
| — | 호베르투 피르미누 | Roberto Firmino | Liverpool FC | 1991-10-02 | 보류 |
| — | 주앙 펠릭스 | João Félix | Club Atlético de Madrid | 미확인 | 보류 |
| — | 앙헬 코레아 | Ángel Correa | Club Atlético de Madrid | 1995-03-09 | 보류 |
| — | 파울리뉴 | Paulinho | Sporting CP | 2000-07-15 | 보류 |
| — | 티아구 토마스 | Tiago Tomás | Sporting CP | 미확인 | 보류 |
| — | 루카 요비치 | Luka Jović | Real Madrid CF | 미확인 | 보류 |
| — | 라우타로 마르티네스 | Lautaro Martínez | FC Internazionale Milano | 미확인 | 보류 |
| — | 에딘 제코 | Edin Džeko | FC Internazionale Milano | 1986-03-17 | 보류 |
| — | 알렉시스 산체스 | Alexis Sánchez | FC Internazionale Milano | 미확인 | 보류 |
| — | 에릭 막심 추포모팅 | Eric Maxim Choupo-Moting | FC Bayern München | 1989-03-23 | 보류 |
| — | 로만 야렘추크 | Roman Yaremchuk | SL Benfica | 1995-11-27 | 보류 |
| — | 에딘손 카바니 | Edinson Cavani | Manchester United FC | 1987-02-14 | 보류 |
| — | 불라예 디아 | Boulaye Dia | Villarreal CF | 미확인 | 보류 |
| — | 조너선 데이비드 | Jonathan David | LOSC Lille | 미확인 | 보류 |
| — | 부라크 일마즈 | Burak Yılmaz | LOSC Lille | 미확인 | 보류 |
| — | 카림 아데예미 | Karim Adeyemi | FC Salzburg | 2002-01-18 | 보류 |
| — | 노아 오카포르 | Noah Okafor | FC Salzburg | 2000-05-24 | 보류 |
| — | 벤야민 셰슈코 | Benjamin Šeško | FC Salzburg | 2003-05-31 | 보류 |
| — | 알바로 모라타 | Álvaro Morata | Juventus FC | 1992-10-23 | 보류 |
| — | 파울로 디발라 | Paulo Dybala | Juventus FC | 1993-11-15 | 보류 |
| — | 두샨 블라호비치 | Dušan Vlahović | Juventus FC | 2000-01-28 | 보류 |
| — | 카이 하베르츠 | Kai Havertz | Chelsea FC | 1999-06-11 | 보류 |
| — | 로멜루 루카쿠 | Romelu Lukaku | Chelsea FC | 1993-05-13 | 보류 |

## 티어별 전체 명단

- S (3): 티보 쿠르투아 (Real Madrid CF), 카림 벤제마 (Real Madrid CF), 로베르트 레반도프스키 (FC Bayern München)

- A+ (14): 케빈 더 브라위너 (Manchester City FC), 리야드 마레즈 (Manchester City FC), 킬리안 음바페 (Paris Saint-Germain FC), 버질 반다이크 (Liverpool FC), 앤드루 로버트슨 (Liverpool FC), 트렌트 알렉산더아놀드 (Liverpool FC), 파비뉴 (Liverpool FC), 모하메드 살라 (Liverpool FC), 세바스티앵 알레 (AFC Ajax), 루카 모드리치 (Real Madrid CF), 비니시우스 주니오르 (Real Madrid CF), 리로이 자네 (FC Bayern München), 브루누 페르난데스 (Manchester United FC), 안토니오 뤼디거 (Chelsea FC)

- A0 (14): 에데르송 (Manchester City FC), 후벵 디아스 (Manchester City FC), 주앙 칸셀루 (Manchester City FC), 베르나르두 실바 (Manchester City FC), 마르키뉴스 (Paris Saint-Germain FC), 리오넬 메시 (Paris Saint-Germain FC), 안토니 (AFC Ajax), 마누엘 노이어 (FC Bayern München), 토마스 뮐러 (FC Bayern München), 다르윈 누녜스 (SL Benfica), 크리스티아누 호날두 (Manchester United FC), 에티엔 카푸에 (Villarreal CF), 아르나우트 단주마 (Villarreal CF), 에두아르 멘디 (Chelsea FC)

- A- (6): 앙투안 그리에즈만 (Club Atlético de Madrid), 페드루 곤살베스 (Sporting CP), 호드리구 (Real Madrid CF), 주앙 마리우 (SL Benfica), 다니 파레호 (Villarreal CF), 제라르 모레노 (Villarreal CF)

- B+ (0): —

- B0 (0): —

- B- (0): —

- C+ (0): —

- C0 (0): —

- C- (0): —

- D (0): —

World Class: 케빈 더 브라위너, 리야드 마레즈, 킬리안 음바페, 버질 반다이크, 앤드루 로버트슨, 트렌트 알렉산더아놀드, 파비뉴, 모하메드 살라, 세바스티앵 알레, 티보 쿠르투아, 루카 모드리치, 비니시우스 주니오르, 카림 벤제마, 리로이 자네, 로베르트 레반도프스키, 브루누 페르난데스, 안토니오 뤼디거

Competition Top Class: 에데르송, 후벵 디아스, 주앙 칸셀루, 베르나르두 실바, 케빈 더 브라위너, 리야드 마레즈, 마르키뉴스, 리오넬 메시, 킬리안 음바페, 버질 반다이크, 앤드루 로버트슨, 트렌트 알렉산더아놀드, 파비뉴, 모하메드 살라, 앙투안 그리에즈만, 안토니, 세바스티앵 알레, 페드루 곤살베스, 티보 쿠르투아, 루카 모드리치, 비니시우스 주니오르, 호드리구, 카림 벤제마, 마누엘 노이어, 토마스 뮐러, 리로이 자네, 로베르트 레반도프스키, 주앙 마리우, 다르윈 누녜스, 브루누 페르난데스, 크리스티아누 호날두, 에티엔 카푸에, 다니 파레호, 아르나우트 단주마, 제라르 모레노, 에두아르 멘디, 안토니오 뤼디거

## Best XI — 4-3-3 잠정 제안

| 위치 | 선수 | 구단 | 티어 | 근거 |
|---|---|---|---|---|
| GK | 티보 쿠르투아 / Thibaut Courtois | Real Madrid CF | S | 59선방(보조 집계), UEFA 시즌 베스트 골키퍼; 직전 시즌에도 기술위원 선정. 결승 선방과 높은 실점 방지 영향. 2019-20 상세 기록 보류. |
| RB | 트렌트 알렉산더아놀드 / Trent Alexander-Arnold | Liverpool FC | A+ | 9경기 4도움 및 UEFA 시즌 베스트. 우측 전개·기회 창출. 이전 두 시즌 상세 기록 미검증. |
| CB | 안토니오 뤼디거 / Antonio Rüdiger | Chelsea FC | A+ | 9경기 840분, 2021-22 시즌 베스트 및 2020-21 기술위원 명단. 스리백 왼쪽 수비와 전진. 2019-20 상세 미검증. |
| CB | 버질 반다이크 / Virgil van Dijk | Liverpool FC | A+ | 9경기 810분 및 UEFA 시즌 베스트. 수비 위치 선정과 전개. 직전 두 시즌 상세 미검증. |
| LB | 앤드루 로버트슨 / Andrew Robertson | Liverpool FC | A+ | 10경기 826분 및 UEFA 시즌 베스트. 좌측 수비와 공격 지원. 이전 두 시즌 상세 미검증. |
| DM | 파비뉴 / Fabinho | Liverpool FC | A+ | 13경기 849분 및 UEFA 시즌 베스트. 중원 수비 보호와 전개. 이전 두 시즌 상세 미검증. |
| CM | 루카 모드리치 / Luka Modrić | Real Madrid CF | A+ | 13경기와 4도움, 전진 패스와 압박 탈출. 직전 시즌 기술위원 명단; 2019-20 개인 상세 미검증. |
| CAM | 케빈 더 브라위너 / Kevin De Bruyne | Manchester City FC | A+ | 2골 4도움, 2021-22와 2020-21 기술위원 명단, 2019-20 최우수 미드필더. 중원 창조성과 압박 대응. |
| LW | 비니시우스 주니오르 / Vinícius Júnior | Real Madrid CF | A+ | 4골 6도움, UEFA 최우수 신인 및 시즌 베스트. 측면 돌파와 결승 득점. 이전 두 시즌 상세 미검증. |
| RW | 모하메드 살라 / Mohamed Salah | Liverpool FC | A+ | 13경기 8골 2도움, 우측 공격 생산성이 뛰어남. 이전 두 시즌 상세 미검증. |
| ST | 카림 벤제마 / Karim Benzema | Real Madrid CF | S | 15골 득점왕, 시즌 최우수 선수. 2020-21 기술위원 명단에도 선정; 2019-20 상세 기록 보류. |

비교: ST 벤제마 vs 레반도프스키 vs 알레 (당해 득점 15/13/11; 벤제마 최우수 선수, 레반도프스키는 이전 두 시즌의 검증된 근거가 더 강함); RW 살라 vs 마레즈 (8골 vs 7골, 둘 모두 2도움); GK 쿠르투아 vs 노이어/멘디/에데르송 (당해 개인 선방 및 시즌 베스트); CAM 더 브라위너 vs 브루누 (도움 4 vs 7, 이전 2시즌 공식 평가 및 전술 균형). 전 포지션 정밀 비교 미완료.

## 선수별 평가 및 미확인 사항

- **에데르송 / Ederson (Manchester City FC, GK)** — 11경기 출전, 2020-21 기술위원 명단. 당해 시즌 선방 효율과 이전 두 시즌 세부 기록 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **잭 스테픈 / Zack Steffen (Manchester City FC, GK)** — 잭 스테픈: 2021-22 UCL 1경기 90분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **에므리크 라포르트 / Aymeric Laporte (Manchester City FC, CB)** — 에므리크 라포르트: 2021-22 UCL 9경기 794분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **후벵 디아스 / Rúben Dias (Manchester City FC, CB)** — 8경기 664분, 직전 시즌 기술위원 명단. 현재 출전량과 수비 조직 역할 반영. 2019-20 상세 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **존 스톤스 / John Stones (Manchester City FC, CB)** — 존 스톤스: 2021-22 UCL 8경기 637분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **주앙 칸셀루 / João Cancelo (Manchester City FC, LB)** — 9경기 840분 3도움, 측면 빌드업과 전개. 좌우 출전 빈도 및 이전 두 시즌 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **올렉산드르 진첸코 / Oleksandr Zinchenko (Manchester City FC, LB)** — 올렉산드르 진첸코: 2021-22 UCL 8경기 501분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **카일 워커 / Kyle Walker (Manchester City FC, RB)** — 카일 워커: 2021-22 UCL 7경기 577분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **로드리 / Rodri (Manchester City FC, DM)** — 로드리: 2021-22 UCL 10경기 842분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **페르난지뉴 / Fernandinho (Manchester City FC, DM)** — 페르난지뉴: 2021-22 UCL 8경기 347분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **베르나르두 실바 / Bernardo Silva (Manchester City FC, CM)** — 11경기 878분 3골 3도움, 중원 및 공격 연결. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **일카이 귄도안 / İlkay Gündoğan (Manchester City FC, CM)** — 일카이 귄도안: 2021-22 UCL 10경기 660분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **케빈 더 브라위너 / Kevin De Bruyne (Manchester City FC, CAM)** — 2골 4도움, 2021-22와 2020-21 기술위원 명단, 2019-20 최우수 미드필더. 중원 창조성과 압박 대응. 2020-21: partial_official_evidence; 2019-20: partial_official_award_evidence. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/0265-113a7215fcd9-2afc8d8b5eaa-1000--roll-of-honour-2020/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **라힘 스털링 / Raheem Sterling (Manchester City FC, LW)** — 라힘 스털링: 2021-22 UCL 12경기 581분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **잭 그릴리시 / Jack Grealish (Manchester City FC, LW)** — 잭 그릴리시: 2021-22 UCL 7경기 461분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **리야드 마레즈 / Riyad Mahrez (Manchester City FC, RW)** — 12경기 7골 2도움, 우측 득점·창조성. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **필 포든 / Phil Foden (Manchester City FC, ST)** — 필 포든: 2021-22 UCL 11경기 658분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **가브리에우 제주스 / Gabriel Jesus (Manchester City FC, ST)** — 가브리에우 제주스: 2021-22 UCL 8경기 352분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **잔루이지 돈나룸마 / Gianluigi Donnarumma (Paris Saint-Germain FC, GK)** — 잔루이지 돈나룸마: 2021-22 UCL 5경기 450분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **케일러 나바스 / Keylor Navas (Paris Saint-Germain FC, GK)** — 케일러 나바스: 2021-22 UCL 3경기 270분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **마르키뉴스 / Marquinhos (Paris Saint-Germain FC, CB)** — 8경기 720분, 직전 시즌 기술위원 명단. 수비 조직의 핵심. 2019-20 상세 비교 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **프레스넬 킴펨베 / Presnel Kimpembe (Paris Saint-Germain FC, CB)** — 프레스넬 킴펨베: 2021-22 UCL 7경기 630분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **압두 디알로 / Abdou Diallo (Paris Saint-Germain FC, CB)** — 압두 디알로: 2021-22 UCL 2경기 165분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **누누 멘데스 / Nuno Mendes (Paris Saint-Germain FC, LB)** — 누누 멘데스: 2021-22 UCL 8경기 581분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **아슈라프 하키미 / Achraf Hakimi (Paris Saint-Germain FC, RB)** — 아슈라프 하키미: 2021-22 UCL 8경기 718분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **틸로 케러 / Thilo Kehrer (Paris Saint-Germain FC, RB)** — 틸로 케러: 2021-22 UCL 4경기 70분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **다닐루 페레이라 / Danilo Pereira (Paris Saint-Germain FC, DM)** — 다닐루 페레이라: 2021-22 UCL 7경기 362분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **레안드로 파레데스 / Leandro Paredes (Paris Saint-Germain FC, DM)** — 레안드로 파레데스: 2021-22 UCL 5경기 315분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **마르코 베라티 / Marco Verratti (Paris Saint-Germain FC, CM)** — 마르코 베라티: 2021-22 UCL 5경기 431분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **이드리사 게예 / Idrissa Gueye (Paris Saint-Germain FC, CM)** — 이드리사 게예: 2021-22 UCL 7경기 400분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **안데르 에레라 / Ander Herrera (Paris Saint-Germain FC, CM)** — 안데르 에레라: 2021-22 UCL 6경기 326분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **네이마르 / Neymar (Paris Saint-Germain FC, LW)** — 네이마르: 2021-22 UCL 6경기 468분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **율리안 드락슬러 / Julian Draxler (Paris Saint-Germain FC, LW)** — 율리안 드락슬러: 2021-22 UCL 3경기 136분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **리오넬 메시 / Lionel Messi (Paris Saint-Germain FC, RW)** — 7경기 5골, 직전 시즌 기술위원 명단. 당해 시즌 녹아든 전술적 영향과 이전 두 시즌 세부 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **앙헬 디 마리아 / Ángel Di María (Paris Saint-Germain FC, RW)** — 앙헬 디 마리아: 2021-22 UCL 5경기 260분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **킬리안 음바페 / Kylian Mbappé (Paris Saint-Germain FC, ST)** — 8경기 6골 4도움, 2021-22 시즌 베스트와 직전 시즌 기술위원 명단. 중앙·좌측 역할 빈도 재검증 필요. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **마우로 이카르디 / Mauro Icardi (Paris Saint-Germain FC, ST)** — 마우로 이카르디: 2021-22 UCL 3경기 47분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/ligue1-2021-22.json

- **알리송 베케르 / Alisson Becker (Liverpool FC, GK)** — 알리송 베케르: 2021-22 UCL 13경기 1170분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **버질 반다이크 / Virgil van Dijk (Liverpool FC, CB)** — 9경기 810분 및 UEFA 시즌 베스트. 수비 위치 선정과 전개. 직전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **이브라히마 코나테 / Ibrahima Konaté (Liverpool FC, CB)** — 이브라히마 코나테: 2021-22 UCL 8경기 720분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **조엘 마티프 / Joël Matip (Liverpool FC, CB)** — 조엘 마티프: 2021-22 UCL 7경기 630분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **앤드루 로버트슨 / Andrew Robertson (Liverpool FC, LB)** — 10경기 826분 및 UEFA 시즌 베스트. 좌측 수비와 공격 지원. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/

- **코스타스 치미카스 / Kostas Tsimikas (Liverpool FC, LB)** — 코스타스 치미카스: 2021-22 UCL 5경기 344분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **트렌트 알렉산더아놀드 / Trent Alexander-Arnold (Liverpool FC, RB)** — 9경기 4도움 및 UEFA 시즌 베스트. 우측 전개·기회 창출. 이전 두 시즌 상세 기록 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **조 고메즈 / Joe Gomez (Liverpool FC, RB)** — 조 고메즈: 2021-22 UCL 7경기 245분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **파비뉴 / Fabinho (Liverpool FC, DM)** — 13경기 849분 및 UEFA 시즌 베스트. 중원 수비 보호와 전개. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **타일러 모턴 / Tyler Morton (Liverpool FC, DM)** — 타일러 모턴: 2021-22 UCL 2경기 180분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **조던 헨더슨 / Jordan Henderson (Liverpool FC, CM)** — 조던 헨더슨: 2021-22 UCL 12경기 666분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **티아고 알칸타라 / Thiago Alcántara (Liverpool FC, CM)** — 티아고 알칸타라: 2021-22 UCL 10경기 604분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **나비 케이타 / Naby Keïta (Liverpool FC, CM)** — 나비 케이타: 2021-22 UCL 10경기 487분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **사디오 마네 / Sadio Mané (Liverpool FC, LW)** — 사디오 마네: 2021-22 UCL 13경기 822분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **루이스 디아스 / Luis Díaz (Liverpool FC, LW)** — 루이스 디아스: 2021-22 UCL 7경기 385분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **모하메드 살라 / Mohamed Salah (Liverpool FC, RW)** — 13경기 8골 2도움, 우측 공격 생산성이 뛰어남. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefaconferenceleague/clubs/players/250052469--mohamed-salah/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **미나미노 다쿠미 / Takumi Minamino (Liverpool FC, RW)** — 미나미노 다쿠미: 2021-22 UCL 4경기 215분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **디오구 조타 / Diogo Jota (Liverpool FC, ST)** — 디오구 조타: 2021-22 UCL 11경기 578분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **호베르투 피르미누 / Roberto Firmino (Liverpool FC, ST)** — 호베르투 피르미누: 2021-22 UCL 7경기 323분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **얀 오블라크 / Jan Oblak (Club Atlético de Madrid, GK)** — 얀 오블라크: 2021-22 UCL 10경기 900분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **호세 마리아 히메네스 / José María Giménez (Club Atlético de Madrid, CB)** — 호세 마리아 히메네스: 2021-22 UCL 7경기 585분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **펠리페 / Felipe (Club Atlético de Madrid, CB)** — 펠리페: 2021-22 UCL 7경기 472분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **스테판 사비치 / Stefan Savić (Club Atlético de Madrid, CB)** — 스테판 사비치: 2021-22 UCL 5경기 450분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **마리오 에르모소 / Mario Hermoso (Club Atlético de Madrid, CB)** — 마리오 에르모소: 2021-22 UCL 6경기 425분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **헤낭 로지 / Renan Lodi (Club Atlético de Madrid, LB)** — 헤낭 로지: 2021-22 UCL 10경기 478분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **야니크 카라스코 / Yannick Carrasco (Club Atlético de Madrid, LB)** — 야니크 카라스코: 2021-22 UCL 7경기 472분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **마르코스 요렌테 / Marcos Llorente (Club Atlético de Madrid, RB)** — 마르코스 요렌테: 2021-22 UCL 9경기 700분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **시메 브르살리코 / Šime Vrsaljko (Club Atlético de Madrid, RB)** — 시메 브르살리코: 2021-22 UCL 5경기 304분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **조프레 콩도그비아 / Geoffrey Kondogbia (Club Atlético de Madrid, DM)** — 조프레 콩도그비아: 2021-22 UCL 9경기 578분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **엑토르 에레라 / Héctor Herrera (Club Atlético de Madrid, DM)** — 엑토르 에레라: 2021-22 UCL 4경기 226분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **코케 / Koke (Club Atlético de Madrid, CM)** — 코케: 2021-22 UCL 9경기 665분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **로드리고 데폴 / Rodrigo De Paul (Club Atlético de Madrid, CM)** — 로드리고 데폴: 2021-22 UCL 9경기 577분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **토마 르마르 / Thomas Lemar (Club Atlético de Madrid, CM)** — 토마 르마르: 2021-22 UCL 8경기 377분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **주앙 펠릭스 / João Félix (Club Atlético de Madrid, ST)** — 주앙 펠릭스: 2021-22 UCL 8경기 573분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **앙투안 그리에즈만 / Antoine Griezmann (Club Atlético de Madrid, ST)** — 9경기 4골, 아틀레티코 전방 득점 기여. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **앙헬 코레아 / Ángel Correa (Club Atlético de Madrid, ST)** — 앙헬 코레아: 2021-22 UCL 10경기 401분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **렘코 파스베이르 / Remko Pasveer (AFC Ajax, GK)** — 렘코 파스베이르: 2021-22 UCL 6경기 540분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **안드레 오나나 / André Onana (AFC Ajax, GK)** — 안드레 오나나: 2021-22 UCL 2경기 180분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **리산드로 마르티네스 / Lisandro Martínez (AFC Ajax, CB)** — 리산드로 마르티네스: 2021-22 UCL 8경기 720분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **위리엔 팀버 / Jurrien Timber (AFC Ajax, CB)** — 위리엔 팀버: 2021-22 UCL 8경기 570분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **페르 스휘르스 / Perr Schuurs (AFC Ajax, CB)** — 페르 스휘르스: 2021-22 UCL 3경기 146분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **달레이 블린트 / Daley Blind (AFC Ajax, LB)** — 달레이 블린트: 2021-22 UCL 8경기 572분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **니콜라스 탈리아피코 / Nicolás Tagliafico (AFC Ajax, LB)** — 니콜라스 탈리아피코: 2021-22 UCL 3경기 139분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **누사이르 마즈라위 / Noussair Mazraoui (AFC Ajax, RB)** — 누사이르 마즈라위: 2021-22 UCL 8경기 661분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **데빈 렌스 / Devyne Rensch (AFC Ajax, RB)** — 데빈 렌스: 2021-22 UCL 5경기 71분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **에드손 알바레스 / Edson Álvarez (AFC Ajax, DM)** — 에드손 알바레스: 2021-22 UCL 7경기 558분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **라이언 흐라벤베르흐 / Ryan Gravenberch (AFC Ajax, CM)** — 라이언 흐라벤베르흐: 2021-22 UCL 8경기 703분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **스테번 베르하위스 / Steven Berghuis (AFC Ajax, CAM)** — 스테번 베르하위스: 2021-22 UCL 8경기 628분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **다비 클라선 / Davy Klaassen (AFC Ajax, CAM)** — 다비 클라선: 2021-22 UCL 7경기 232분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **두샨 타디치 / Dušan Tadić (AFC Ajax, LW)** — 두샨 타디치: 2021-22 UCL 7경기 630분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **모하메드 다라미 / Mohamed Daramy (AFC Ajax, LW)** — 모하메드 다라미: 2021-22 UCL 2경기 52분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **안토니 / Antony (AFC Ajax, RW)** — 7경기 5도움, 우측 기회 창출. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **다비드 네리스 / David Neres (AFC Ajax, RW)** — 다비드 네리스: 2021-22 UCL 5경기 203분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **세바스티앵 알레 / Sébastien Haller (AFC Ajax, ST)** — 8경기 11골 1도움, 조별리그 전 경기 득점. UEFA가 대회 데뷔 시즌임을 확인했으므로 이전 두 시즌 본선 활약은 해당 없음. 2020-21: not_participated_main_stage; 2019-20: not_participated_main_stage. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.footballsquads.co.uk/netherl/2021-2022/ere/ajax.htm

- **안토니오 아단 / Antonio Adán (Sporting CP, GK)** — 안토니오 아단: 2021-22 UCL 7경기 630분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **주앙 비르지니아 / João Virgínia (Sporting CP, GK)** — 주앙 비르지니아: 2021-22 UCL 1경기 90분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **곤살루 이나시우 / Gonçalo Inácio (Sporting CP, CB)** — 곤살루 이나시우: 2021-22 UCL 7경기 561분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **세바스티안 코아테스 / Sebastián Coates (Sporting CP, CB)** — 세바스티안 코아테스: 2021-22 UCL 6경기 540분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **주하이르 페달 / Zouhair Feddal (Sporting CP, CB)** — 주하이르 페달: 2021-22 UCL 6경기 450분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **루이스 네투 / Luís Neto (Sporting CP, CB)** — 루이스 네투: 2021-22 UCL 6경기 368분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **마테우스 레이스 / Matheus Reis (Sporting CP, LB)** — 마테우스 레이스: 2021-22 UCL 8경기 611분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **후벵 비나그르 / Rúben Vinagre (Sporting CP, LB)** — 후벵 비나그르: 2021-22 UCL 2경기 63분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **페드로 포로 / Pedro Porro (Sporting CP, RB)** — 페드로 포로: 2021-22 UCL 7경기 529분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **히카르두 이스가이우 / Ricardo Esgaio (Sporting CP, RB)** — 히카르두 이스가이우: 2021-22 UCL 8경기 380분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **주앙 팔리냐 / João Palhinha (Sporting CP, DM)** — 주앙 팔리냐: 2021-22 UCL 6경기 534분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **마누엘 우가르테 / Manuel Ugarte (Sporting CP, DM)** — 마누엘 우가르테: 2021-22 UCL 4경기 205분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **마테우스 누네스 / Matheus Nunes (Sporting CP, CM)** — 마테우스 누네스: 2021-22 UCL 6경기 509분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **다니엘 브라간사 / Daniel Bragança (Sporting CP, CM)** — 다니엘 브라간사: 2021-22 UCL 5경기 131분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **페드루 곤살베스 / Pedro Gonçalves (Sporting CP, LW)** — 5경기 4골, 제한된 출전에서 높은 득점 관여. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/

- **누누 산투스 / Nuno Santos (Sporting CP, LW)** — 누누 산투스: 2021-22 UCL 7경기 218분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **파블로 사라비아 / Pablo Sarabia (Sporting CP, RW)** — 파블로 사라비아: 2021-22 UCL 8경기 510분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **브루누 타바타 / Bruno Tabata (Sporting CP, RW)** — 브루누 타바타: 2021-22 UCL 4경기 201분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **파울리뉴 / Paulinho (Sporting CP, ST)** — 파울리뉴: 2021-22 UCL 8경기 582분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **티아구 토마스 / Tiago Tomás (Sporting CP, ST)** — 티아구 토마스: 2021-22 UCL 5경기 162분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **티보 쿠르투아 / Thibaut Courtois (Real Madrid CF, GK)** — 59선방(보조 집계), UEFA 시즌 베스트 골키퍼; 직전 시즌에도 기술위원 선정. 결승 선방과 높은 실점 방지 영향. 2019-20 상세 기록 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://www.uefa.com/uefachampionsleague/clubs/players/250011668--thibaut-courtois/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **에데르 밀리탕 / Éder Militão (Real Madrid CF, CB)** — 에데르 밀리탕: 2021-22 UCL 12경기 1076분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **다비드 알라바 / David Alaba (Real Madrid CF, CB)** — 다비드 알라바: 2021-22 UCL 12경기 1040분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/

- **나초 페르난데스 / Nacho Fernández (Real Madrid CF, CB)** — 나초 페르난데스: 2021-22 UCL 9경기 574분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **페를랑 멘디 / Ferland Mendy (Real Madrid CF, LB)** — 페를랑 멘디: 2021-22 UCL 10경기 867분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **마르셀루 / Marcelo (Real Madrid CF, LB)** — 마르셀루: 2021-22 UCL 3경기 93분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **다니 카르바할 / Dani Carvajal (Real Madrid CF, RB)** — 다니 카르바할: 2021-22 UCL 11경기 959분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **루카스 바스케스 / Lucas Vázquez (Real Madrid CF, RB)** — 루카스 바스케스: 2021-22 UCL 8경기 349분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **카세미루 / Casemiro (Real Madrid CF, DM)** — 카세미루: 2021-22 UCL 11경기 914분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **토니 크로스 / Toni Kroos (Real Madrid CF, CM)** — 토니 크로스: 2021-22 UCL 12경기 902분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **루카 모드리치 / Luka Modrić (Real Madrid CF, CM)** — 13경기와 4도움, 전진 패스와 압박 탈출. 직전 시즌 기술위원 명단; 2019-20 개인 상세 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **에두아르도 카마빙가 / Eduardo Camavinga (Real Madrid CF, CM)** — 에두아르도 카마빙가: 2021-22 UCL 10경기 296분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **비니시우스 주니오르 / Vinícius Júnior (Real Madrid CF, LW)** — 4골 6도움, UEFA 최우수 신인 및 시즌 베스트. 측면 돌파와 결승 득점. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/clubs/players/250121533--vinicius-junior/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **에덴 아자르 / Eden Hazard (Real Madrid CF, LW)** — 에덴 아자르: 2021-22 UCL 3경기 84분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **페데리코 발베르데 / Federico Valverde (Real Madrid CF, RW)** — 페데리코 발베르데: 2021-22 UCL 11경기 804분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **호드리구 / Rodrygo (Real Madrid CF, RW)** — 11경기 505분 5골 2도움, 제한된 시간에서 결정적 기여. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/

- **카림 벤제마 / Karim Benzema (Real Madrid CF, ST)** — 15골 득점왕, 시즌 최우수 선수. 2020-21 기술위원 명단에도 선정; 2019-20 상세 기록 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **루카 요비치 / Luka Jović (Real Madrid CF, ST)** — 루카 요비치: 2021-22 UCL 3경기 113분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **사미르 한다노비치 / Samir Handanovič (FC Internazionale Milano, GK)** — 사미르 한다노비치: 2021-22 UCL 8경기 720분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **밀란 슈크리니아르 / Milan Škriniar (FC Internazionale Milano, CB)** — 밀란 슈크리니아르: 2021-22 UCL 8경기 720분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **스테판 더프레이 / Stefan de Vrij (FC Internazionale Milano, CB)** — 스테판 더프레이: 2021-22 UCL 6경기 487분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **알레산드로 바스토니 / Alessandro Bastoni (FC Internazionale Milano, CB)** — 알레산드로 바스토니: 2021-22 UCL 8경기 666분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **다닐로 담브로시오 / Danilo D'Ambrosio (FC Internazionale Milano, CB)** — 다닐로 담브로시오: 2021-22 UCL 3경기 147분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **이반 페리시치 / Ivan Perišić (FC Internazionale Milano, LB)** — 이반 페리시치: 2021-22 UCL 8경기 531분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **페데리코 디마르코 / Federico Dimarco (FC Internazionale Milano, LB)** — 페데리코 디마르코: 2021-22 UCL 7경기 283분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **덴젤 둠프리스 / Denzel Dumfries (FC Internazionale Milano, RB)** — 덴젤 둠프리스: 2021-22 UCL 7경기 467분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **마테오 다르미안 / Matteo Darmian (FC Internazionale Milano, RB)** — 마테오 다르미안: 2021-22 UCL 5경기 196분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **마르첼로 브로조비치 / Marcelo Brozović (FC Internazionale Milano, DM)** — 마르첼로 브로조비치: 2021-22 UCL 8경기 635분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **마티아스 베시노 / Matías Vecino (FC Internazionale Milano, DM)** — 마티아스 베시노: 2021-22 UCL 4경기 124분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **니콜로 바렐라 / Nicolò Barella (FC Internazionale Milano, CM)** — 니콜로 바렐라: 2021-22 UCL 6경기 496분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **하칸 찰하놀루 / Hakan Çalhanoğlu (FC Internazionale Milano, CM)** — 하칸 찰하놀루: 2021-22 UCL 6경기 419분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **아르투로 비달 / Arturo Vidal (FC Internazionale Milano, CM)** — 아르투로 비달: 2021-22 UCL 7경기 409분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **라우타로 마르티네스 / Lautaro Martínez (FC Internazionale Milano, ST)** — 라우타로 마르티네스: 2021-22 UCL 8경기 587분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **에딘 제코 / Edin Džeko (FC Internazionale Milano, ST)** — 에딘 제코: 2021-22 UCL 7경기 541분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **알렉시스 산체스 / Alexis Sánchez (FC Internazionale Milano, ST)** — 알렉시스 산체스: 2021-22 UCL 6경기 155분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **마누엘 노이어 / Manuel Neuer (FC Bayern München, GK)** — 9경기 810분, 2019-20 UEFA 최우수 골키퍼. 현 시즌의 선방 효율과 직전 시즌 정밀 비교 미완료. 2020-21: evidence_pending; 2019-20: partial_official_award_evidence. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0265-113a7215fcd9-2afc8d8b5eaa-1000--roll-of-honour-2020/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **스벤 울라이히 / Sven Ulreich (FC Bayern München, GK)** — 스벤 울라이히: 2021-22 UCL 1경기 90분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **다요 우파메카노 / Dayot Upamecano (FC Bayern München, CB)** — 다요 우파메카노: 2021-22 UCL 8경기 660분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **니클라스 쥘레 / Niklas Süle (FC Bayern München, CB)** — 니클라스 쥘레: 2021-22 UCL 7경기 515분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **루카스 에르난데스 / Lucas Hernández (FC Bayern München, CB)** — 루카스 에르난데스: 2021-22 UCL 8경기 572분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **알폰소 데이비스 / Alphonso Davies (FC Bayern München, LB)** — 알폰소 데이비스: 2021-22 UCL 7경기 477분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **뱅자맹 파바르 / Benjamin Pavard (FC Bayern München, RB)** — 뱅자맹 파바르: 2021-22 UCL 10경기 764분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **부나 사르 / Bouna Sarr (FC Bayern München, RB)** — 부나 사르: 2021-22 UCL 5경기 125분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **요주아 키미히 / Joshua Kimmich (FC Bayern München, DM)** — 요주아 키미히: 2021-22 UCL 8경기 702분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **마르크 로카 / Marc Roca (FC Bayern München, DM)** — 마르크 로카: 2021-22 UCL 4경기 78분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **레온 고레츠카 / Leon Goretzka (FC Bayern München, CM)** — 레온 고레츠카: 2021-22 UCL 6경기 466분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **코랑탱 톨리소 / Corentin Tolisso (FC Bayern München, CM)** — 코랑탱 톨리소: 2021-22 UCL 4경기 234분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **토마스 뮐러 / Thomas Müller (FC Bayern München, CAM)** — 10경기 4골 3도움, 중앙 2선 움직임과 연계. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **자말 무시알라 / Jamal Musiala (FC Bayern München, CAM)** — 자말 무시알라: 2021-22 UCL 8경기 448분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **리로이 자네 / Leroy Sané (FC Bayern München, LW)** — 6골 6도움, 높은 공격 생산성. 측면 역할 빈도 및 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **킹슬리 코망 / Kingsley Coman (FC Bayern München, RW)** — 킹슬리 코망: 2021-22 UCL 9경기 632분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **세르주 그나브리 / Serge Gnabry (FC Bayern München, RW)** — 세르주 그나브리: 2021-22 UCL 8경기 391분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **로베르트 레반도프스키 / Robert Lewandowski (FC Bayern München, ST)** — 13골 3도움, 2019-20 15골 및 최우수 공격수, 2020-21 기술위원 명단. 세 시즌의 득점력 지속성이 강하다. 2020-21: partial_official_evidence; 2019-20: partial_official_award_evidence. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/0265-113a7215fcd9-2afc8d8b5eaa-1000--roll-of-honour-2020/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **에릭 막심 추포모팅 / Eric Maxim Choupo-Moting (FC Bayern München, ST)** — 에릭 막심 추포모팅: 2021-22 UCL 4경기 49분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/bundesliga-2021-22.json

- **오디세아스 블라호디모스 / Odysseas Vlachodimos (SL Benfica, GK)** — 오디세아스 블라호디모스: 2021-22 UCL 10경기 900분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **얀 베르통언 / Jan Vertonghen (SL Benfica, CB)** — 얀 베르통언: 2021-22 UCL 10경기 900분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **니콜라스 오타멘디 / Nicolás Otamendi (SL Benfica, CB)** — 니콜라스 오타멘디: 2021-22 UCL 9경기 810분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **루카스 베리시무 / Lucas Veríssimo (SL Benfica, CB)** — 루카스 베리시무: 2021-22 UCL 3경기 270분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **모라투 / Morato (SL Benfica, CB)** — 모라투: 2021-22 UCL 2경기 180분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **알레한드로 그리말도 / Alejandro Grimaldo (SL Benfica, LB)** — 알레한드로 그리말도: 2021-22 UCL 10경기 863분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **발렌티노 라자로 / Valentino Lazaro (SL Benfica, LB)** — 발렌티노 라자로: 2021-22 UCL 6경기 114분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **지우베르투 / Gilberto (SL Benfica, RB)** — 지우베르투: 2021-22 UCL 9경기 715분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **안드레 알메이다 / André Almeida (SL Benfica, RB)** — 안드레 알메이다: 2021-22 UCL 5경기 236분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **율리안 바이글 / Julian Weigl (SL Benfica, DM)** — 율리안 바이글: 2021-22 UCL 9경기 810분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **수알리호 메이테 / Soualiho Meïté (SL Benfica, DM)** — 수알리호 메이테: 2021-22 UCL 3경기 155분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **주앙 마리우 / João Mário (SL Benfica, CM)** — 8경기 4도움, 벤피카 중원의 기회 창출. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/

- **아델 타랍 / Adel Taarabt (SL Benfica, CM)** — 아델 타랍: 2021-22 UCL 9경기 343분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **에베르통 / Everton (SL Benfica, LW)** — 에베르통: 2021-22 UCL 9경기 543분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2032615/printmatchpresskits/

- **하파 실바 / Rafa Silva (SL Benfica, RW)** — 하파 실바: 2021-22 UCL 9경기 704분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2032615/printmatchpresskits/

- **디오구 곤살베스 / Diogo Gonçalves (SL Benfica, RW)** — 디오구 곤살베스: 2021-22 UCL 5경기 131분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **다르윈 누녜스 / Darwin Núñez (SL Benfica, ST)** — 10경기 6골, 벤피카 공격의 주요 득점원. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2032615/printmatchpresskits/

- **로만 야렘추크 / Roman Yaremchuk (SL Benfica, ST)** — 로만 야렘추크: 2021-22 UCL 10경기 514분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2032615/printmatchpresskits/

- **다비드 데 헤아 / David de Gea (Manchester United FC, GK)** — 다비드 데 헤아: 2021-22 UCL 7경기 630분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **딘 헨더슨 / Dean Henderson (Manchester United FC, GK)** — 딘 헨더슨: 2021-22 UCL 1경기 68분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **해리 매과이어 / Harry Maguire (Manchester United FC, CB)** — 해리 매과이어: 2021-22 UCL 6경기 534분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **빅토르 린델뢰프 / Victor Lindelöf (Manchester United FC, CB)** — 빅토르 린델뢰프: 2021-22 UCL 5경기 426분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **라파엘 바란 / Raphaël Varane (Manchester United FC, CB)** — 라파엘 바란: 2021-22 UCL 5경기 353분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **루크 쇼 / Luke Shaw (Manchester United FC, LB)** — 루크 쇼: 2021-22 UCL 5경기 397분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **알렉스 텔레스 / Alex Telles (Manchester United FC, LB)** — 알렉스 텔레스: 2021-22 UCL 4경기 293분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **아론 완비사카 / Aaron Wan-Bissaka (Manchester United FC, RB)** — 아론 완비사카: 2021-22 UCL 6경기 419분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **디오구 달로 / Diogo Dalot (Manchester United FC, RB)** — 디오구 달로: 2021-22 UCL 3경기 233분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **스콧 맥토미니 / Scott McTominay (Manchester United FC, DM)** — 스콧 맥토미니: 2021-22 UCL 5경기 400분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **네마냐 마티치 / Nemanja Matić (Manchester United FC, DM)** — 네마냐 마티치: 2021-22 UCL 8경기 194분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **프레드 / Fred (Manchester United FC, CM)** — 프레드: 2021-22 UCL 6경기 433분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **폴 포그바 / Paul Pogba (Manchester United FC, CM)** — 폴 포그바: 2021-22 UCL 6경기 347분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **브루누 페르난데스 / Bruno Fernandes (Manchester United FC, CAM)** — UEFA 도움 7개로 대회 최다. 중앙 2선 창조성. 이전 두 시즌 UCL 자료 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **도니 판더베이크 / Donny van de Beek (Manchester United FC, CAM)** — 도니 판더베이크: 2021-22 UCL 4경기 204분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **제이든 산초 / Jadon Sancho (Manchester United FC, LW)** — 제이든 산초: 2021-22 UCL 7경기 393분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **마커스 래시퍼드 / Marcus Rashford (Manchester United FC, LW)** — 마커스 래시퍼드: 2021-22 UCL 5경기 257분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **메이슨 그린우드 / Mason Greenwood (Manchester United FC, RW)** — 메이슨 그린우드: 2021-22 UCL 4경기 304분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **안토니 엘랑가 / Anthony Elanga (Manchester United FC, RW)** — 안토니 엘랑가: 2021-22 UCL 3경기 172분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **크리스티아누 호날두 / Cristiano Ronaldo (Manchester United FC, ST)** — 7경기 6골, 높은 마무리 생산성. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **에딘손 카바니 / Edinson Cavani (Manchester United FC, ST)** — 에딘손 카바니: 2021-22 UCL 4경기 75분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **헤로니모 룰리 / Gerónimo Rulli (Villarreal CF, GK)** — 헤로니모 룰리: 2021-22 UCL 12경기 1080분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **파우 토레스 / Pau Torres (Villarreal CF, CB)** — 파우 토레스: 2021-22 UCL 12경기 1080분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **라울 알비올 / Raúl Albiol (Villarreal CF, CB)** — 라울 알비올: 2021-22 UCL 12경기 1045분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **아이사 만디 / Aïssa Mandi (Villarreal CF, CB)** — 아이사 만디: 2021-22 UCL 2경기 24분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **페르비스 에스투피냔 / Pervis Estupiñán (Villarreal CF, LB)** — 페르비스 에스투피냔: 2021-22 UCL 10경기 645분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **알폰소 페드라사 / Alfonso Pedraza (Villarreal CF, LB)** — 알폰소 페드라사: 2021-22 UCL 10경기 431분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **후안 포이스 / Juan Foyth (Villarreal CF, RB)** — 후안 포이스: 2021-22 UCL 10경기 891분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **세르주 오리에 / Serge Aurier (Villarreal CF, RB)** — 세르주 오리에: 2021-22 UCL 5경기 129분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **에티엔 카푸에 / Étienne Capoue (Villarreal CF, DM)** — 12경기 1046분 4도움, 중원 수비와 전개 기여. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **비센테 이보라 / Vicente Iborra (Villarreal CF, DM)** — 비센테 이보라: 2021-22 UCL 1경기 10분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **다니 파레호 / Dani Parejo (Villarreal CF, CM)** — 12경기 1055분 3도움, 중원 배급과 지속적인 기용. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **마누 트리게로스 / Manu Trigueros (Villarreal CF, CM)** — 마누 트리게로스: 2021-22 UCL 9경기 330분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **프랑시스 코클랭 / Francis Coquelin (Villarreal CF, LW)** — 프랑시스 코클랭: 2021-22 UCL 8경기 463분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **알베르토 모레노 / Alberto Moreno (Villarreal CF, LW)** — 알베르토 모레노: 2021-22 UCL 7경기 309분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **지오바니 로셀소 / Giovani Lo Celso (Villarreal CF, RW)** — 지오바니 로셀소: 2021-22 UCL 6경기 524분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **예레미 피노 / Yeremy Pino (Villarreal CF, RW)** — 예레미 피노: 2021-22 UCL 7경기 431분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **아르나우트 단주마 / Arnaut Danjuma (Villarreal CF, ST)** — 11경기 6골 2도움, 전방 침투 및 득점. 좌측과 중앙의 역할 빈도 및 이전 두 시즌 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/

- **제라르 모레노 / Gerard Moreno (Villarreal CF, ST)** — 7경기 2골 4도움, 제한된 출전에서도 공격 연결. 이전 두 시즌 상세 미검증. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/laliga-2021-22.json

- **불라예 디아 / Boulaye Dia (Villarreal CF, ST)** — 불라예 디아: 2021-22 UCL 8경기 258분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **이보 그르비치 / Ivo Grbić (LOSC Lille, GK)** — 이보 그르비치: 2021-22 UCL 6경기 540분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **레우 자르딩 / Léo Jardim (LOSC Lille, GK)** — 레우 자르딩: 2021-22 UCL 2경기 180분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **조제 폰트 / José Fonte (LOSC Lille, CB)** — 조제 폰트: 2021-22 UCL 8경기 720분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **스벤 보트만 / Sven Botman (LOSC Lille, CB)** — 스벤 보트만: 2021-22 UCL 5경기 418분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **티아구 잘로 / Tiago Djaló (LOSC Lille, CB)** — 티아구 잘로: 2021-22 UCL 7경기 533분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **헤이닐두 만다바 / Reinildo Mandava (LOSC Lille, LB)** — 헤이닐두 만다바: 2021-22 UCL 6경기 456분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.statmuse.com/fc/player/reinildo-8146/career-stats

- **가브리엘 구드문드손 / Gabriel Gudmundsson (LOSC Lille, LB)** — 가브리엘 구드문드손: 2021-22 UCL 4경기 243분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **제키 첼리크 / Zeki Çelik (LOSC Lille, RB)** — 제키 첼리크: 2021-22 UCL 7경기 591분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **벤자맹 앙드레 / Benjamin André (LOSC Lille, DM)** — 벤자맹 앙드레: 2021-22 UCL 7경기 630분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **아마두 오나나 / Amadou Onana (LOSC Lille, DM)** — 아마두 오나나: 2021-22 UCL 8경기 257분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **셰카 / Xeka (LOSC Lille, CM)** — 셰카: 2021-22 UCL 7경기 435분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **헤나투 산시스 / Renato Sanches (LOSC Lille, CM)** — 헤나투 산시스: 2021-22 UCL 5경기 407분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **조나탕 밤바 / Jonathan Bamba (LOSC Lille, LW)** — 조나탕 밤바: 2021-22 UCL 6경기 468분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **앙헬 고메스 / Angel Gomes (LOSC Lille, LW)** — 앙헬 고메스: 2021-22 UCL 4경기 168분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **조나탕 이코네 / Jonathan Ikoné (LOSC Lille, RW)** — 조나탕 이코네: 2021-22 UCL 5경기 297분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **티모시 웨아 / Timothy Weah (LOSC Lille, RW)** — 티모시 웨아: 2021-22 UCL 5경기 255분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **조너선 데이비드 / Jonathan David (LOSC Lille, ST)** — 조너선 데이비드: 2021-22 UCL 8경기 679분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **부라크 일마즈 / Burak Yılmaz (LOSC Lille, ST)** — 부라크 일마즈: 2021-22 UCL 7경기 529분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **필리프 쾬 / Philipp Köhn (FC Salzburg, GK)** — 필리프 쾬: 2021-22 UCL 8경기 720분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **막스 뵈버 / Max Wöber (FC Salzburg, CB)** — 막스 뵈버: 2021-22 UCL 7경기 573분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **제롬 옹게네 / Jérôme Onguéné (FC Salzburg, CB)** — 제롬 옹게네: 2021-22 UCL 5경기 437분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **우마르 솔레 / Oumar Solet (FC Salzburg, CB)** — 우마르 솔레: 2021-22 UCL 5경기 328분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **안드레아스 울머 / Andreas Ulmer (FC Salzburg, LB)** — 안드레아스 울머: 2021-22 UCL 8경기 716분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **베르나르두 / Bernardo (FC Salzburg, LB)** — 베르나르두: 2021-22 UCL 2경기 23분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **라스무스 크리스텐센 / Rasmus Kristensen (FC Salzburg, RB)** — 라스무스 크리스텐센: 2021-22 UCL 8경기 720분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **모하메드 카마라 / Mohamed Camara (FC Salzburg, DM)** — 모하메드 카마라: 2021-22 UCL 8경기 672분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **니콜라스 자이발트 / Nicolas Seiwald (FC Salzburg, CM)** — 니콜라스 자이발트: 2021-22 UCL 8경기 649분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **루카 수치치 / Luka Sučić (FC Salzburg, CM)** — 루카 수치치: 2021-22 UCL 8경기 516분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **니콜라스 카팔도 / Nicolás Capaldo (FC Salzburg, CM)** — 니콜라스 카팔도: 2021-22 UCL 7경기 281분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **브렌던 애런슨 / Brenden Aaronson (FC Salzburg, CAM)** — 브렌던 애런슨: 2021-22 UCL 8경기 715분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **마우리츠 키에르가르 / Maurits Kjærgaard (FC Salzburg, CAM)** — 마우리츠 키에르가르: 2021-22 UCL 4경기 38분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **카림 아데예미 / Karim Adeyemi (FC Salzburg, ST)** — 카림 아데예미: 2021-22 UCL 8경기 607분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **노아 오카포르 / Noah Okafor (FC Salzburg, ST)** — 노아 오카포르: 2021-22 UCL 6경기 345분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **벤야민 셰슈코 / Benjamin Šeško (FC Salzburg, ST)** — 벤야민 셰슈코: 2021-22 UCL 6경기 234분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_secondary. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.footballsquads.co.uk/austria/2021-2022/bundes/rbsalz.htm

- **보이치에흐 슈쳉스니 / Wojciech Szczęsny (Juventus FC, GK)** — 보이치에흐 슈쳉스니: 2021-22 UCL 7경기 630분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **마티아 페린 / Mattia Perin (Juventus FC, GK)** — 마티아 페린: 2021-22 UCL 1경기 90분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **마테이스 더리흐트 / Matthijs de Ligt (Juventus FC, CB)** — 마테이스 더리흐트: 2021-22 UCL 7경기 627분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **레오나르도 보누치 / Leonardo Bonucci (Juventus FC, CB)** — 레오나르도 보누치: 2021-22 UCL 7경기 580분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **다니엘레 루가니 / Daniele Rugani (Juventus FC, CB)** — 다니엘레 루가니: 2021-22 UCL 4경기 177분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **알렉스 산드루 / Alex Sandro (Juventus FC, LB)** — 알렉스 산드루: 2021-22 UCL 7경기 553분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **마티아 데실리오 / Mattia De Sciglio (Juventus FC, LB)** — 마티아 데실리오: 2021-22 UCL 4경기 286분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **다닐루 / Danilo (Juventus FC, RB)** — 다닐루: 2021-22 UCL 5경기 450분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **마누엘 로카텔리 / Manuel Locatelli (Juventus FC, DM)** — 마누엘 로카텔리: 2021-22 UCL 7경기 539분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **아르투르 / Arthur (Juventus FC, DM)** — 아르투르: 2021-22 UCL 6경기 264분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv

- **웨스턴 맥케니 / Weston McKennie (Juventus FC, CM)** — 웨스턴 맥케니: 2021-22 UCL 6경기 388분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **로드리고 벤탄쿠르 / Rodrigo Bentancur (Juventus FC, CM)** — 로드리고 벤탄쿠르: 2021-22 UCL 5경기 382분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **아드리앵 라비오 / Adrien Rabiot (Juventus FC, LW)** — 아드리앵 라비오: 2021-22 UCL 7경기 536분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **페데리코 키에사 / Federico Chiesa (Juventus FC, LW)** — 페데리코 키에사: 2021-22 UCL 4경기 336분 출전 기록 확보. LW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **후안 콰드라도 / Juan Cuadrado (Juventus FC, RW)** — 후안 콰드라도: 2021-22 UCL 7경기 472분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **페데리코 베르나르데스키 / Federico Bernardeschi (Juventus FC, RW)** — 페데리코 베르나르데스키: 2021-22 UCL 5경기 292분 출전 기록 확보. RW 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **알바로 모라타 / Álvaro Morata (Juventus FC, ST)** — 알바로 모라타: 2021-22 UCL 7경기 520분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **파울로 디발라 / Paulo Dybala (Juventus FC, ST)** — 파울로 디발라: 2021-22 UCL 5경기 255분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **두샨 블라호비치 / Dušan Vlahović (Juventus FC, ST)** — 두샨 블라호비치: 2021-22 UCL 2경기 180분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/seriea-2021-22.json

- **에두아르 멘디 / Édouard Mendy (Chelsea FC, GK)** — 9경기 840분, 2020-21 기술위원 명단. 당해 시즌 세부 선방 지표 및 2019-20 기록 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **케파 아리사발라가 / Kepa Arrizabalaga (Chelsea FC, GK)** — 케파 아리사발라가: 2021-22 UCL 1경기 90분 출전 기록 확보. GK 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **안토니오 뤼디거 / Antonio Rüdiger (Chelsea FC, CB)** — 9경기 840분, 2021-22 시즌 베스트 및 2020-21 기술위원 명단. 스리백 왼쪽 수비와 전진. 2019-20 상세 미검증. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0275-154650014aef-02a394f30379-1000--2021-22-uefa-champions-league-team-of-the-season/ ; https://www.uefa.com/uefachampionsleague/news/026d-13405646aa7e-10d35549dfdf-1000--champions-league-/ ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **티아고 실바 / Thiago Silva (Chelsea FC, CB)** — 티아고 실바: 2021-22 UCL 9경기 757분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **안드레아스 크리스텐센 / Andreas Christensen (Chelsea FC, CB)** — 안드레아스 크리스텐센: 2021-22 UCL 8경기 603분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **트레보 찰로바 / Trevoh Chalobah (Chelsea FC, CB)** — 트레보 찰로바: 2021-22 UCL 3경기 175분 출전 기록 확보. CB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/

- **마르코스 알론소 / Marcos Alonso (Chelsea FC, LB)** — 마르코스 알론소: 2021-22 UCL 8경기 548분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **벤 칠웰 / Ben Chilwell (Chelsea FC, LB)** — 벤 칠웰: 2021-22 UCL 4경기 188분 출전 기록 확보. LB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **세사르 아스필리쿠에타 / César Azpilicueta (Chelsea FC, RB)** — 세사르 아스필리쿠에타: 2021-22 UCL 9경기 679분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **리스 제임스 / Reece James (Chelsea FC, RB)** — 리스 제임스: 2021-22 UCL 6경기 505분 출전 기록 확보. RB 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verified_official. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/news-media/mediaservices/informationkits/competitions/uefachampionsleague/2022/match/2034653/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **조르지뉴 / Jorginho (Chelsea FC, DM)** — 조르지뉴: 2021-22 UCL 8경기 561분 출전 기록 확보. DM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **은골로 캉테 / N'Golo Kanté (Chelsea FC, CM)** — 은골로 캉테: 2021-22 UCL 6경기 427분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **마테오 코바치치 / Mateo Kovačić (Chelsea FC, CM)** — 마테오 코바치치: 2021-22 UCL 6경기 426분 출전 기록 확보. CM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **메이슨 마운트 / Mason Mount (Chelsea FC, CAM)** — 메이슨 마운트: 2021-22 UCL 7경기 538분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: partial_official_evidence; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://www.uefa.com/uefachampionsleague/news/0269-12688c451cdd-b6efcb4ce948-1000--squad-of-the-season/ ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **하킴 지예흐 / Hakim Ziyech (Chelsea FC, CAM)** — 하킴 지예흐: 2021-22 UCL 9경기 446분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **크리스천 풀리식 / Christian Pulisic (Chelsea FC, CAM)** — 크리스천 풀리식: 2021-22 UCL 7경기 367분 출전 기록 확보. CAM 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **카이 하베르츠 / Kai Havertz (Chelsea FC, ST)** — 카이 하베르츠: 2021-22 UCL 9경기 672분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

- **로멜루 루카쿠 / Romelu Lukaku (Chelsea FC, ST)** — 로멜루 루카쿠: 2021-22 UCL 6경기 320분 출전 기록 확보. ST 역할 제안. 포지션별 경기력 및 이전 두 시즌 자료 부족으로 티어·순위 보류. 2020-21: evidence_pending; 2019-20: evidence_pending. 생년: verification_pending. 선발·최빈 역할 미검증. 출처: https://raw.githubusercontent.com/StormzzG/Champions-League/master/key_stats.csv ; https://github.com/wjdduddlf112/footballarch/blob/c57c6ec62262932b53df2c430863591b875ff788/data/premierleague-2021-22.json

## 이적·누락 및 예외

- Winter transfer from Porto; club-specific goals/assists not yet reconciled; raw source total not silently attributed.
- Raw 10 appearances/816 minutes combines Lille and Atlético; Lille component inferred by subtracting 4/360 at Atlético; cross-check pending.
- 해당 시즌 후보 제외·대안 역할 전수감사 미완료. 16개 팀 포메이션과 인원은 제안이며 실경기 빈도 확인 필요. 원자료상 출전만으로 경기력을 확정하지 않음.

## 자동 검증

PASS: 125경기/96조별경기/32구단/16평가 구단/380골/중복 ID 없음/구단별 11주전/포지션별 최대 1후보/11명 Best XI. FAIL/PENDING: 독립 3시즌 경기력 전체, 생년 전원, 실제 선발 및 포지션 빈도, 모든 선수 티어 및 전체 순위, 실제 브라우저, CI.

## 추가 저장 및 검증 기록

- 최초 구축 커밋: https://github.com/wjdduddlf112/footballarch/commit/9a7c1c9c86bea277ca01a5447e56c8bce4d92925
- 공식 시즌 베스트 XI 출처로 본선 출전 자체를 독립 확인한 후보 11명: Kevin De Bruyne, Kylian Mbappé, Virgil van Dijk, Andrew Robertson, Trent Alexander-Arnold, Fabinho, Thibaut Courtois, Luka Modrić, Vinícius Júnior, Karim Benzema, Antonio Rüdiger. 정확한 출전 횟수는 별도 대조 필요. 다른 후보의 공식 개별 출전 검증은 보류.
- 생년월일 기입 203명(독립 확인 49명, 기존 자료 참고 154명), 미기입 91명.
- 추가 재검토 대상: Timo Werner의 2021-22 UCL 득점 기여 및 Chelsea 공격 포지션 경쟁; 현 후보 명단에서 제외된 이유의 독립 검증 필요.
- 전체 후보 294명, 잠정 티어 37명, 보류 257명. 전원에 대한 3시즌 평가 완결로 간주하지 않음.
- JSON 재조회와 구조 확인 완료. 실제 웹 브라우저 렌더링과 CI 통과 미확인.
