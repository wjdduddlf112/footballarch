// PL 2018-19 structural DRAFT only. Does not certify historical individual player starts or subjective grades.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2018-19.json","utf8"));
const clubs=["mancity","liverpool","chelsea","tottenham","arsenal","manutd","wolves"];
const roles=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
const xiSlots={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
assert.equal(d.meta.season,"2018-19");assert.equal(d.meta.qualifyingSeason,"2019-20");
assert.equal(d.meta.status,"draft");assert.equal(d.meta.standingsOnly,false);assert.equal(d.meta.standingsVerified,true);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);assert.equal(d.standings.reduce((n,p)=>n+p.played,0),760);
assert.deepEqual(d.standings.map(p=>p.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.find(p=>p.rank===1).club,"mancity");
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),[...clubs].sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,3);
assert.equal(d.qualifiers.find(q=>q.club==="wolves").competition,"UEL");
assert.deepEqual(d.standings.filter(p=>p.competition).map(p=>p.club).sort(),[...clubs].sort());
assert.equal(d.meta.formation,"4-3-3");
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.players.length,d.meta.candidateCount);
assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length);
assert.equal(new Set(d.players.map(p=>p.nameOriginal.normalize("NFKC").toLowerCase())).size,d.players.length,"duplicate player");
for(const p of d.players){
 assert(clubs.includes(p.club)&&roles.includes(p.position)&&grades.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);assert.equal(p.review,"draft_unapproved");
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources?.length,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert.equal(p.leagueStarts,null);assert.equal(p.leagueAppearances,null);
 assert.equal(p.positionMajorityVerified,false);
 assert(p.previousSeasons?.["2016-17"]&&p.previousSeasons?.["2017-18"],p.id);
 assert(p.leagueGoals===null||(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0));
 assert(p.leagueAssists===null||(Number.isInteger(p.leagueAssists)&&p.leagueAssists>=0));
 assert(Number.isInteger(p.rank)&&p.rank>=1,p.id);
}
for(const club of clubs){
 const ps=d.players.filter(p=>p.club===club);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starters");
 for(const [pos,max] of Object.entries(caps)){
  assert(ps.filter(p=>p.position===pos).length<=max,club+" "+pos+" cap");
  assert(ps.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" "+pos+" backup");
 }
 const fresh=JSON.parse(readFileSync("audit/player-research/premierleague-2018-19-"+club+"-fresh-draft.json","utf8"));
 assert.deepEqual(fresh.players,ps,club+" file parity");
}
assert.equal(d.players.filter(p=>p.club==="wolves"&&p.role==="starter"&&p.position==="CB").length,3);
assert.equal(d.players.filter(p=>p.club==="wolves"&&p.role==="starter"&&p.position==="ST").length,2);
for(const pos of roles){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>{assert.equal(p.rank,i+1,pos+" ranks");if(i)assert(grades.indexOf(ps[i-1].tier)<=grades.indexOf(p.tier),pos+" tier inversion")});
}
assert.equal(d.bestXi.length,11);assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [pos,count] of Object.entries(xiSlots))assert.equal(d.bestXi.filter(x=>x.position===pos).length,count,pos+" XI slots");
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p,x.playerId);assert.equal(x.position,p.position);assert(p.rank<=(x.position==="CB"?2:1),p.id)}
const report=readFileSync("audit/PLAYER_PREMIERLEAGUE_2018-19_DRAFT_REVIEW.md","utf8");
assert(report.includes("160/760")&&report.includes("Wolverhampton")&&report.includes("proposed_unapproved")&&report.includes("2016-17"));
console.log("PASS PL 2018-19 STRUCTURAL DRAFT: 7 actual UEFA entrants, "+d.players.length+" players, each club 11, role caps, no duplicates, 4-3-3 XI. Individual historical audit NOT complete.");
