// 2011-12 PL draft structure validator; historical performance/majority position are separate gates.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2011-12.json","utf8"));
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
const expected=["mancity","manutd","arsenal","chelsea","tottenham","newcastle","liverpool"];
assert.equal(d.meta.season,"2011-12");
assert.equal(d.meta.qualifyingSeason,"2012-13");
assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsVerified,true);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);
assert.equal(d.standings.reduce((a,r)=>a+r.played,0),760);
assert.equal(d.standings.filter(r=>r.rank===1)[0].club,"mancity");
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),[...expected].sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,3);
assert.equal(d.qualifiers.find(q=>q.club==="chelsea").competition,"UCL");
assert.equal(d.qualifiers.find(q=>q.club==="tottenham").competition,"UEL");
const ids=new Set(d.players.map(p=>p.id));
const validClubs=new Set(expected);
assert.equal(d.players.length,126);
assert.equal(ids.size,126);
for(const p of d.players){
 assert(validClubs.has(p.club),"not eligible "+p.id);
 assert(pos.includes(p.position),"invalid position "+p.id);
 assert(tiers.includes(p.tier),"invalid tier "+p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB missing "+p.id);
 assert(p.nameKo&&p.nameOriginal&&p.assessmentRationale&&p.sources?.length,"incomplete player "+p.id);
 assert.equal(p.review,"draft_unapproved");
 assert(Number.isInteger(p.rank)&&p.rank>0,"unranked "+p.id);
 assert(p.previousSeasons?.["2009-10"]&&p.previousSeasons?.["2010-11"],"prior evidence state missing "+p.id);
}
for(const club of expected){
 const ps=d.players.filter(p=>p.club===club);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starter count");
 for(const key of pos)assert(ps.filter(p=>p.position===key).length<=caps[key],club+" "+key+" quota");
}
for(const key of pos){
 const ps=d.players.filter(p=>p.position===key).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>assert.equal(p.rank,i+1,key+" rank missing"));
 ps.slice(1).forEach((p,i)=>assert(tiers.indexOf(ps[i].tier)<=tiers.indexOf(p.tier),key+" tier inversion"));
}
assert.equal(d.meta.formation,"4-4-2");
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
const expectedXI={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:2};
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(p=>p.playerId)).size,11);
for(const [p,count] of Object.entries(expectedXI))assert.equal(d.bestXi.filter(x=>x.position===p).length,count,"XI "+p);
for(const x of d.bestXi){
 const p=d.players.find(y=>y.id===x.playerId);
 assert(p,"unknown XI ID");
 assert.equal(x.position,p.position,"XI slot mismatch "+p.name);
 assert(p.rank<=(["CB","ST"].includes(p.position)?2:1),"XI ignored top rank "+p.name);
}
assert.equal(d.players.filter(p=>p.leagueStarts!==null).length,9);
console.log("PASS: 2011-12 PL DRAFT 7 eligible / 126 unique / tiers and positions / 4-4-2 XI with DM+CM / 9 individually sourced starts (STRUCTURAL ONLY)");
