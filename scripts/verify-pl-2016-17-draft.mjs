// Football Archive Premier League 2016-17 — STRUCTURAL DRAFT ONLY. Never claim independent historical per-player audit.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2016-17.json","utf8"));
const clubs=["chelsea","tottenham","mancity","liverpool","arsenal","manutd","everton"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"],caps={"GK":2,"CB":3,"LB":2,"RB":2,"DM":2,"CM":3,"CAM":2,"LW":2,"RW":2,"ST":3},slots={"GK":1,"CB":2,"LB":1,"RB":1,"DM":1,"CM":1,"CAM":1,"LW":1,"RW":1,"ST":1};
assert.equal(d.meta.season,"2016-17");assert.equal(d.meta.qualifyingSeason,"2017-18");assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsOnly,false);assert.equal(d.meta.standingsVerified,true);assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);assert.deepEqual(d.standings.map(x=>x.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((s,x)=>s+x.played,0),760);assert.equal(d.standings.find(x=>x.rank===1).club,"chelsea");
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),[...clubs].sort());
assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,5);assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,2);
assert.equal(d.qualifiers.find(x=>x.club==="manutd").competition,"UCL");assert.equal(d.qualifiers.find(x=>x.club==="everton").competition,"UEL");
assert.deepEqual(d.standings.filter(x=>x.competition).map(x=>x.club).sort(),[...clubs].sort());
assert.equal(d.meta.formation,"4-2-3-1");assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length);assert.equal(d.players.length,d.meta.candidateCount);
for(const p of d.players){
 assert(clubs.includes(p.club),"invalid club "+p.id);assert(positions.includes(p.position),"position "+p.id);
 assert(grades.includes(p.tier),"tier "+p.id);assert(["starter","backup"].includes(p.role),"role "+p.id);
 assert.equal(p.review,"draft_unapproved");assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB format "+p.id);
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources?.length);
 assert.equal(p.leagueStarts,null);assert.equal(p.leagueAppearances,null);assert.equal(p.leagueAssists,null);
 assert(p.leagueGoals===null||(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0));
 assert.equal(p.positionMajorityVerified,false);
 assert(p.previousSeasons?.["2014-15"]&&p.previousSeasons?.["2015-16"]);
 assert(Number.isInteger(p.rank)&&p.rank>=1);
}
for(const club of clubs){
 const team=d.players.filter(p=>p.club===club);
 assert.equal(team.filter(p=>p.role==="starter").length,11,club+" starter count");
 for(const [pos,limit] of Object.entries(caps)){
  assert(team.filter(p=>p.position===pos).length<=limit,club+" max "+pos);
  assert(team.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" backup "+pos);
 }
 const research=JSON.parse(readFileSync("audit/player-research/premierleague-2016-17-"+club+"-fresh-draft.json","utf8"));
 assert.deepEqual(research.players,team,"club research exact parity "+club);
}
assert.equal(d.players.filter(p=>p.club==="chelsea"&&p.role==="starter"&&p.position==="CB").length,3,"Chelsea 3CB with 3-4-3");
for(const pos of positions){
 const a=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 a.forEach((p,i)=>{assert.equal(p.rank,i+1,"continuous ranks "+pos);if(i)assert(grades.indexOf(a[i-1].tier)<=grades.indexOf(p.tier),"tier inversion "+pos)});
}
assert.equal(d.bestXi.length,11);assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [pos,n] of Object.entries(slots))assert.equal(d.bestXi.filter(x=>x.position===pos).length,n,"Best XI slot "+pos);
for(const xi of d.bestXi){const p=d.players.find(p=>p.id===xi.playerId);assert(p,"XI valid ID");assert.equal(xi.position,p.position);assert(p.rank<=(p.position==="CB"?2:1),"XI must use top role rank "+p.id);}
const report=readFileSync("audit/PLAYER_PREMIERLEAGUE_2016-17_DRAFT_REVIEW.md","utf8");
assert(report.includes("2014-15")&&report.includes("2015-16")&&report.includes("Chelsea")&&report.includes("proposed_unapproved"));
console.log("PASS PL 2016-17 STRUCTURAL DRAFT: 7 actual UEFA entrants, "+d.players.length+" players, 11 starters/team, roles/caps, continuous ranks, 4-2-3-1 XI. HISTORICAL per-player audit not completed.");
