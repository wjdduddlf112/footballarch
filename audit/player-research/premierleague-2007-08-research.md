# PL 2007-08 research index (DRAFT)

**2007-08 only. Not user approved.** The complete 170-player club tables and position-wide ranks are split into short, inspectable files. The season JSON retains individual notes, birthdates and prior-season fields.

## Eligible clubs (next season actual European participation)

| Club | 2008-09 competition | Players | Full table |
|---|---|---:|---|
| Manchester United FC | UCL | 20 | [Club roster](premierleague-2007-08-manutd.md) |
| Chelsea FC | UCL | 21 | [Club roster](premierleague-2007-08-chelsea.md) |
| Arsenal FC | UCL | 19 | [Club roster](premierleague-2007-08-arsenal.md) |
| Liverpool FC | UCL | 19 | [Club roster](premierleague-2007-08-liverpool.md) |
| Everton FC | UEFA Cup | 17 | [Club roster](premierleague-2007-08-everton.md) |
| Aston Villa FC | Intertoto Cup | 18 | [Club roster](premierleague-2007-08-astonvilla.md) |
| Portsmouth FC | UEFA Cup | 18 | [Club roster](premierleague-2007-08-portsmouth.md) |
| Manchester City | UEFA Cup | 20 | [Club roster](premierleague-2007-08-mancity.md) |
| Tottenham Hotspur FC | UEFA Cup | 18 | [Club roster](premierleague-2007-08-tottenham.md) |

Portsmouth: FA Cup winners. Tottenham: League Cup winners. Manchester City: Fair Play. Aston Villa: actually played in UEFA Intertoto. Blackburn finished 7th but did not qualify.

## All clubs combined by primary position

- [GK, CB, LB, RB, DM league rankings](premierleague-2007-08-ranks-1.md)
- [CM, CAM, LW, RW, ST league rankings](premierleague-2007-08-ranks-2.md)

## Best XI — 4-4-2, unapproved

| 필드 위치 | 선수(한글) | Original name | 실제 주 포지션 | Club | 티어 | 포지션 순위 |
|---|---|---|---|---|---|---:|
| GK | 데이비드 제임스 | David James | GK | Portsmouth FC | A+ | 1 |
| CB | 리오 퍼디난드 | Rio Ferdinand | CB | Manchester United FC | S | 1 |
| CB | 네마냐 비디치 | Nemanja Vidić | CB | Manchester United FC | A+ | 2 |
| LB | 가엘 클리시 | Gaël Clichy | LB | Arsenal FC | A+ | 1 |
| RB | 바카리 사냐 | Bacary Sagna | RB | Arsenal FC | A+ | 1 |
| LW | 애슐리 영 | Ashley Young | LW | Aston Villa FC | A+ | 1 |
| RW | 크리스티아누 호날두 | Cristiano Ronaldo | RW | Manchester United FC | S | 1 |
| ST | 페르난도 토레스 | Fernando Torres | ST | Liverpool FC | S | 1 |
| ST | 에마뉘엘 아데바요르 | Emmanuel Adebayor | ST | Arsenal FC | A+ | 2 |
| CM | 세스크 파브레가스 | Cesc Fàbregas | CM | Arsenal FC | S | 1 |
| CM | 스티븐 제라드 | Steven Gerrard | CAM | Liverpool FC | A+ | 1 |

**Best XI > rigid field slot.** Steven Gerrard is an actual CAM and included as CM on the 4-4-2 pitch; Cesc Fàbregas is an actual CM shown as the other CM. The eleven choices independently match the contemporary 2007-08 PFA XI published by UEFA on 28 April 2008. All underlying player positions and their individual positional ranks are unchanged by XI tactical slot allocation.

## Tiers and outstanding validation

- S: 4
- A+: 27
- A: 6
- A-: 30
- B+: 53
- B: 28
- B-: 20
- C+: 2
- C: 0
- C-: 0
- D: 0

World Class S/A+ **31**. League Top Class S/A+/A/A- **67**.

2007-08 PL starts, league appearances and goals **170/170 source-table entered** (single club-season source per player, not independent two-source checking of all rows). **11/11 Best XI** prior 2005-06 and 2006-07 individual starts separately sourced or in prior season records. **139** players still lack at least one preceding 2005-06/2006-07 season start. **170/170** most-played on-field positions require match-by-match confirmation. All DOBs filled, two-source DOB cross-check incomplete. No missing current-season starts remain.

The 4-4-2 is the contemporary league modal formation (12 of 20 PL clubs as cited from Guardian Sport May 2008), but actual club formation variations are preserved in the JSON. This is not an all-380-match league tactical census.

**Separate validation gates:** GitHub JSON structural audit; Node CLI verification not performed; actual deployed GitHub Pages tab/crest review not performed. User has previously confirmed earlier PL seasons through 2005-06 display, not this 2007-08 screen.

## References

- [RSSSF final PL table](https://www.rsssf.org/tablese/eng08.html), [2008 Intertoto](https://www.rsssf.org/tablesu/uic08.html)
- [Manchester City's official Fair Play statement](https://www.mancity.com/news/first-team/first-team-news/archive/2008/may/city-qualify-for-uefa-cup-via-fair-play)
- [2007-08 FootballSquads club list](https://www.footballsquads.co.uk/eng/2007-2008/faprem.htm)
- [11v11 2007-08 PL goals](https://www.11v11.com/competitions/premier-league/2008/goal-scorers/)
- [UEFA 2008 contemporary PFA XI](https://www.uefa.com/news-media/news/01cc-0e6f54e2f9d2-92ba0828a91e-1000--ronaldo-receives-english-acclaim/)
- [Everton PL-only appearances](https://www.evertonencyclopedia.com/season/2007-2008/), [Pompey 4-5-1](https://www.pompeyrama.com/seasons.php?sid=62)

**Stop at 2007-08. No 2008-09 player evaluation without user instruction.**

## 2026-11-01 source checks

- 170 of 170 current-season appearances, starts, goals entered from season-specific Statbunker, FBref and Everton Encyclopedia, not generic career totals.
- Zero-league-appearance Liverpool GK Charles Itandje excluded; Yossi Benayoun included (30 league apps, 15 starts). Spurs Ledley King (4 starts) replaced by Younes Kaboul (19 starts), Aston Villa Patrick Berger (zero starts) excluded.
- 2005-06/2006-07 overseas records verified for Best XI Torres (Atlético Madrid), Sagna (Auxerre) and Young (Watford/AV), with explicit league names.
- Gerrard CAM retained as actual position, CM tactical display; flexible Best XI identity enabled in `assets/app.js` without changing player ranking position.
- Mixed source assist totals: Gerrard 8 on FBref vs 9 on BeSoccer; primary 8. Ashley Young goals 9 on FBref and 11v11 vs 8 on Statbunker; primary 9, discrepancy flagged.
