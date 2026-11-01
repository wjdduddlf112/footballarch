// PL 2012-13 structural DRAFT check, not independent validation of individual historical performances.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2012-13.json","utf8"));
const selected=["manutd","mancity","chelsea","arsenal","tottenham","swansea","wigan"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const cap={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
assert.equal(d.meta.season,"2012-13");
assert.equal(d.meta.qualifyingSeason,"2013-14");
assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsVerified,true);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);
assert.deepEqual(d.standings.map(r=>r.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((a,r)=>a+r.played,0),760);
assert.equal(d.standings.find(r=>r.rank===1).club,"manutd");
assert.equal(d.standings.find(r=>r.club==="wigan").outcome,"relegated");
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),[...selected].sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,3);
for(const c of ["swansea","wigan"])assert.equal(d.qualifiers.find(q=>q.club===c).competition,"UEL");
const ids=new Set(d.players.map(p=>p.id));
assert.equal(d.players.length,128);
assert.equal(ids.size,d.players.length);
for(const p of d.players){
 assert(selected.includes(p.club),"not eligible: "+p.id);
 assert(positions.includes(p.position),"invalid position: "+p.id);
 assert(grades.includes(p.tier),"unknown tier "+p.id);
 assert(p.nameOriginal&&p.nameKo&&p.assessmentRationale&&p.sources?.length,p.id+" missing identity/rationale/source");
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"birth formatting "+p.id);
 assert.equal(p.review,"draft_unapproved");
 assert.equal(p.leagueStarts,null,"unverified starts cannot be populated "+p.id);
 assert(Number.isInteger(p.rank)&&p.rank>0,"rank "+p.id);
 assert(p.previousSeasons?.["2010-11"]&&p.previousSeasons?.["2011-12"],"prior year status missing "+p.id);
}
for(const club of selected){
 const ps=d.players.filter(p=>p.club===club);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starter tags");
 for(const p of positions)assert(ps.filter(x=>x.position===p).length<=cap[p],club+" "+p+" quota");
}
for(const pos of positions){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>assert.equal(p.rank,i+1,pos+" sequence"));
 ps.slice(1).forEach((p,i)=>assert(grades.indexOf(ps[i].tier)<=grades.indexOf(p.tier),pos+" tier inversion"));
}
assert.equal(d.meta.formation,"4-2-3-1");
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [p,n] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))assert.equal(d.bestXi.filter(x=>x.position===p).length,n,"XI slot "+p);
for(const slot of d.bestXi){
 const p=d.players.find(p=>p.id===slot.playerId);
 assert(p,"XI invalid ID "+slot.playerId);
 assert.equal(slot.position,p.position,"XI player out of natural 2012-13 slot "+p.name);
 assert(p.rank<=(p.position==="CB"?2:1),"XI lower ranked without exception "+p.name);
}
assert.equal(d.players.filter(p=>p.leagueGoals!==null).length,8);
assert.equal(d.players.filter(p=>p.leagueAssists!==null).length,4);
console.log("PASS: 2012-13 PL DRAFT 7 real 2013-14 UEFA clubs / 128 candidates / 11-starter tags / rank and tier ordering / 4-2-3-1 XI (STRUCTURE ONLY)");
