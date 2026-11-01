// Premier League 2013-14 DRAFT structural validator — does not independently audit personal 3-year stats.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2013-14.json","utf8"));
const eligible=["mancity","liverpool","chelsea","arsenal","everton","tottenham","hull"];
const order=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tier=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const cap={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
assert.equal(d.meta.season,"2013-14");
assert.equal(d.meta.qualifyingSeason,"2014-15");
assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsVerified,true);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);
assert.deepEqual(d.standings.map(x=>x.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((a,r)=>a+r.played,0),760);
assert.equal(d.standings.find(x=>x.rank===1).club,"mancity");
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),[...eligible].sort());
assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,3);
assert.equal(d.qualifiers.find(x=>x.club==="hull").competition,"UEL");
assert(!d.qualifiers.some(x=>x.club==="manutd"),"7th place United not eligible");
const ids=new Set(d.players.map(x=>x.id));
assert.equal(d.players.length,129);
assert.equal(ids.size,d.players.length);
for(const p of d.players){
 assert(eligible.includes(p.club),"ineligible team "+p.id);
 assert(order.includes(p.position),"bad position "+p.id);
 assert(tier.includes(p.tier),"bad tier "+p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"bad DOB format "+p.id);
 assert(p.nameKo&&p.nameOriginal&&p.assessmentRationale&&p.sources.length,"missing fields "+p.id);
 assert(["starter","backup"].includes(p.role),"role "+p.id);
 assert.equal(p.review,"draft_unapproved");
 assert.equal(p.leagueStarts,null,"unverified individual league starts must be null: "+p.id);
 assert(p.previousSeasons?.["2011-12"]&&p.previousSeasons?.["2012-13"],"3-season status absent "+p.id);
 assert(Number.isInteger(p.rank)&&p.rank>0);
}
for(const club of eligible){
 let ps=d.players.filter(x=>x.club===club);
 assert.equal(ps.filter(x=>x.role==="starter").length,11,"11 representative starters "+club);
 for(const [p,n] of Object.entries(cap))assert(ps.filter(x=>x.position===p).length<=n,"cap "+club+" "+p);
}
for(const pos of order){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>assert.equal(p.rank,i+1,"rank gap "+pos));
 ps.slice(1).forEach((p,i)=>assert(tier.indexOf(ps[i].tier)<=tier.indexOf(p.tier),"tier-order inversion "+pos));
}
assert.equal(d.meta.formation,"4-2-3-1");
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [pos,count] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))assert.equal(d.bestXi.filter(x=>x.position===pos).length,count,"formation XI "+pos);
for(const slot of d.bestXi){
 const p=d.players.find(p=>p.id===slot.playerId);
 assert(p,"unknown best XI player "+slot.playerId);
 assert.equal(slot.position,p.position,"incorrect mapped XI position "+p.name);
 assert(p.rank<=(p.position==="CB"?2:1),"Best XI must use top ranked role "+p.name);
}
assert.equal(d.players.filter(x=>x.leagueGoals!==null).length,14);
assert.equal(d.players.filter(x=>x.leagueAssists!==null).length,14);
console.log("PASS 2013-14: 7 actual 2014-15 UEFA clubs, 129 provisional players, each club 11 starters, continuous tier rankings, 4-2-3-1 mapped best XI, selected 14 stats (STRUCTURAL ONLY)");
