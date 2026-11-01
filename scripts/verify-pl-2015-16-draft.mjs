// 2015-16 Premier League DRAFT structural checks; DOES NOT independently verify historical personal performances.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2015-16.json","utf8"));
const clubs=["leicester","arsenal","tottenham","mancity","manutd","southampton","westham"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={"GK":2,"CB":3,"LB":2,"RB":2,"DM":2,"CM":3,"CAM":2,"LW":2,"RW":2,"ST":3};
const xiSlots={"GK":1,"CB":2,"LB":1,"RB":1,"DM":1,"CM":1,"CAM":1,"LW":1,"RW":1,"ST":1};
assert.equal(d.meta.season,"2015-16");assert.equal(d.meta.qualifyingSeason,"2016-17");
assert.equal(d.meta.status,"draft");assert.equal(d.meta.standingsOnly,false);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);assert.deepEqual(d.standings.map(x=>x.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((n,x)=>n+x.played,0),760);assert.equal(d.standings.find(x=>x.rank===1).club,"leicester");
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),[...clubs].sort());assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,4);assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,3);
assert.equal(d.qualifiers.find(x=>x.club==="westham").competition,"UEL");assert(!d.qualifiers.some(x=>x.club==="liverpool"));
assert.deepEqual(d.standings.filter(x=>x.competition).map(x=>x.club).sort(),[...clubs].sort());
assert.equal(d.meta.formation,"4-2-3-1");assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
const ids=new Set(d.players.map(x=>x.id));assert.equal(ids.size,d.players.length);assert.equal(d.players.length,d.meta.candidateCount);
for(const p of d.players){
 assert(clubs.includes(p.club),"invalid club "+p.id);assert(positions.includes(p.position),"position "+p.id);
 assert(grades.includes(p.tier),"tier "+p.id);assert(["starter","backup"].includes(p.role),"role "+p.id);
 assert.equal(p.review,"draft_unapproved");assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"date "+p.id);
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources?.length);
 assert.equal(p.leagueStarts,null);assert.equal(p.leagueAppearances,null);
 assert.equal(p.leagueGoals,null);assert.equal(p.leagueAssists,null);
 assert.equal(p.positionMajorityVerified,false);assert(p.previousSeasons?.["2013-14"]&&p.previousSeasons?.["2014-15"]);
 assert(Number.isInteger(p.rank)&&p.rank>0);
}
for(const club of clubs){
 const ps=d.players.filter(p=>p.club===club);assert.equal(ps.filter(p=>p.role==="starter").length,11,club);
 for(const [pos,n] of Object.entries(caps)){
  assert(ps.filter(p=>p.position===pos).length<=n,club+" cap "+pos);
  assert(ps.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" backup "+pos);
 }
 const clubDraft=JSON.parse(readFileSync("audit/player-research/premierleague-2015-16-"+club+"-fresh-draft.json","utf8"));
 assert.deepEqual(clubDraft.players,ps,"club draft parity "+club);
}
for(const pos of positions){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>{assert.equal(p.rank,i+1,pos+" rank gap");if(i)assert(grades.indexOf(ps[i-1].tier)<=grades.indexOf(p.tier),pos+" inversion")});
}
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [pos,n] of Object.entries(xiSlots))assert.equal(d.bestXi.filter(x=>x.position===pos).length,n,"XI "+pos);
for(const x of d.bestXi){
 const p=d.players.find(p=>p.id===x.playerId);assert(p,x.playerId);assert.equal(p.position,x.position);
 assert(p.rank<=(p.position==="CB"?2:1),"XI position rank "+p.id);
}
const report=readFileSync("audit/PLAYER_PREMIERLEAGUE_2015-16_DRAFT_REVIEW.md","utf8");
assert(report.includes("Liverpool")&&report.includes("proposed_unapproved")&&report.includes("2013-14"));
console.log("PASS 2015-16 STRUCTURAL DRAFT: 7 UEFA clubs, "+d.players.length+" players, 11 starters per club, one backup/role, position ranks, proposed 4-2-3-1 XI. Historical player records and positions NOT verified.");
