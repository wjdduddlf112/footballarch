# UCL 2008-09–2016-17 audit application

Patch baseline: 5162fea7a7dabbca32ba2140c2362e592e0dbcc0. Pre-change main: dc61291eafcf70883880c0346290d321666627fa (13 commits ahead; target season files unchanged).

All 9,320 ready fields applied and read back with exact after-value equality, 0 already applied, 0 conflicts. All 86 original held entries and their sources retained in per-season audit.uclHistoricalPatch. 2,622 original player rows, 2,620 eligible candidates. Existing limited 2013-14 approval preserved; no new evaluation approval.

| Season | Applied | Original held | Additional tactical review findings |
|---|---:|---:|---:|
|2008-09|989|8|0|
|2009-10|1247|6|0|
|2010-11|1062|8|1|
|2011-12|1060|5|6|
|2012-13|1160|11|2|
|2013-14|1135|11|3|
|2014-15|1049|9|4|
|2015-16|778|13|0|
|2016-17|840|15|1|

The dedicated UCL validator passed all nine persisted season objects in JavaScript execution: 1,125 matches, group standings recomputation, knockout legs/aggregates, final score and penalty direction, candidate identities and statistical consistency, 99 Best XI slots, source references and held metadata. The validator explicitly reports 17 existing nominal-role mapping anomalies, including two over-cap cases (2010-11 Shakhtar ST and 2011-12 Leverkusen RB); the remaining 15 require tactical assignment evidence. New deviations fail. No forced player deletion or regrading.

## Pre-existing UEL failures

Executed the unchanged pre-change main combined-verifier UEL loop against corresponding pre-change main JSON, separately from UCL, in a JavaScript runtime with in-memory file and assertion adapters. First failing assertion per season:

| Season | Existing failure |
|---|---|
|2012-13|only UCL domestic-source conditional grade migration enabled: uel != ucl|
|2013-14|candidate total: 145 != 144|
|2014-15|candidate total: 147 != 153|
|2015-16|candidate total: 140 != 143|
|2016-17|candidate total: 147 != 144|

These are not UCL regressions. UEL data and UEL assertions were not changed. Combined verifiers may still fail on those baseline assertions. The UCL-only entry point is `node scripts/verify-ucl-2008-09-2016-17-audit.mjs`. The independent tactical and three-season review remains held. Browser/live UI validation is outside this application step.

Pre-change Actions: https://github.com/wjdduddlf112/footballarch/actions/runs/45959343042 (2012-13), https://github.com/wjdduddlf112/footballarch/actions/runs/45959343261 (2013-14), https://github.com/wjdduddlf112/footballarch/actions/runs/45959343054 (2014-15), https://github.com/wjdduddlf112/footballarch/actions/runs/45959343295 (2015-16), https://github.com/wjdduddlf112/footballarch/actions/runs/45959343312 (2016-17).
