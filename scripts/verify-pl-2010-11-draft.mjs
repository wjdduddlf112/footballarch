// Premier League 2010-11 DRAFT structural verification; not live/browser or history audit
import {readFileSync} from "node:fs";
import assert from "node:assert/strict";
const d=JSON.parse(readFileSync("data/premierleague-2010-11.json","utf8"));
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
const expected=["manutd","chelsea","mancity","arsenal","tottenham","fulham","stoke","birmingham"];
assert.equal(d.meta.season,"2010-11");
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),expected.sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,4);
const qualified=new Set(d.qualifiers.map(q=>q.club));
assert.equal(d.players.length,145);
assert.equal(new Set(d.players.map(p=>p.id)).size,145);
for(const p of d.players){
 assert(qualified.has(p.club),p.id+" ineligible");
 assert(positions.includes(p.position),p.id+" invalid position");
 assert(tiers.includes(p.tier),p.id+" invalid tier");
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id+" DOB");
 assert(p.nameKo&&p.nameOriginal&&p.assessmentRationale&&p.sources?.length,p.id+" lacks fields");
 assert(p.rank>0&&Number.isInteger(p.rank),p.id+" rank");
 assert.equal(p.review,"draft_unapproved");
 assert.equal(p.leagueStarts,null,"unverified starts published "+p.id);
}
for(const club of qualified){
 const ps=d.players.filter(p=>p.club===club);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starters");
 for(const pos of positions)assert(ps.filter(p=>p.position===pos).length<=caps[pos],club+" "+pos+" quota");
}
for(const pos of positions){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>assert.equal(p.rank,i+1,"rank gap "+pos+" "+p.name));
 ps.slice(1).forEach((p,i)=>assert(tiers.indexOf(ps[i].tier)<=tiers.indexOf(p.tier),pos+" tier inversion"));
}
assert.equal(d.meta.formation,"4-4-2");
assert.equal(d.bestXi.length,11);
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const slot of d.bestXi){
 const p=d.players.find(p=>p.id===slot.playerId);
 assert(p,"XI missing "+slot.playerId);
 assert.equal(p.position,slot.position,p.name+" slot mismatch");
 if(["GK","LB","RB","LW","RW"].includes(slot.position))assert.equal(p.rank,1,slot.position+" rank #1 omitted");
}
for(const [pos,count] of Object.entries({GK:1,CB:2,LB:1,RB:1,CM:2,LW:1,RW:1,ST:2}))assert.equal(d.bestXi.filter(x=>x.position===pos).length,count,pos+" XI quota");
console.log("PASS: PL 2010-11 structural DRAFT / 145 / 8 / 4-4-2 XI 11");
