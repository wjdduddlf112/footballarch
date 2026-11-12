import fs from "node:fs";
import assert from "node:assert/strict";

// DRAFT data structural verification, NOT proof of historical completion.
const d=JSON.parse(fs.readFileSync("data/ucl-2009-10.json","utf8"));
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const clubIds=new Set(d.clubs.map(x=>x.id));
assert.equal(d.meta.season,"2009-10");
assert.equal(d.meta.competitionId,"ucl");
assert.equal(d.meta.status,"draft_unapproved");
assert.equal(d.clubs.length,32);
assert.equal(clubIds.size,32);
assert.equal(d.participants.length,32);
assert.equal(d.groups.length,8);
assert.equal(d.evaluatedClubs.length,16);
assert.equal(new Set(d.evaluatedClubs).size,16);
assert.equal(d.matches.length,125);
assert.equal(d.matches.filter(x=>x.round==="group_stage").length,96);
assert.equal(d.matches.filter(x=>x.round!=="group_stage").length,29);
assert.equal(d.matches.reduce((n,x)=>n+x.homeGoals+x.awayGoals,0),320);
assert.equal(new Set(d.matches.map(x=>x.id)).size,125);
assert.equal(d.players.length,288);
assert.equal(new Set(d.players.map(x=>x.id)).size,288);
assert.equal(d.players.filter(x=>x.role==="starter").length,176);
assert.equal(d.players.filter(x=>x.role==="backup").length,112);
assert.equal(d.players.filter(x=>x.tier!==null).length,288);
assert.equal(d.players.filter(x=>x.tier===null).length,0);
for(const group of d.groups){
 assert.equal(group.stage,1);
 assert.equal(group.table.length,4);
 const inGroup=new Set(group.table.map(x=>x.club));
 const groupMatches=d.matches.filter(m=>m.round==="group_stage"&&m.group===group.code);
 assert.equal(groupMatches.length,12);
 for(const t of group.table){
  assert(inGroup.has(t.club)&&clubIds.has(t.club));
  const ms=groupMatches.filter(m=>m.home===t.club||m.away===t.club);
  assert.equal(ms.length,6);
  const w=ms.filter(m=>m.home===t.club?m.homeGoals>m.awayGoals:m.awayGoals>m.homeGoals).length;
  const draws=ms.filter(m=>m.homeGoals===m.awayGoals).length;
  const loss=6-w-draws;
  const gf=ms.reduce((a,m)=>a+(m.home===t.club?m.homeGoals:m.awayGoals),0);
  const ga=ms.reduce((a,m)=>a+(m.home===t.club?m.awayGoals:m.homeGoals),0);
  assert.deepEqual([t.wins,t.draws,t.losses,t.goalsFor,t.goalsAgainst,t.points,t.gd],[w,draws,loss,gf,ga,3*w+draws,gf-ga],group.code+" "+t.club);
 }
 assert.deepEqual(group.table.map(x=>x.rank),[1,2,3,4]);
}
for(const c of d.evaluatedClubs){
 assert(clubIds.has(c));
 const ps=d.players.filter(x=>x.club===c);
 assert.equal(ps.filter(x=>x.role==="starter").length,11,"club XI "+c);
 for(const pos of positions){
  assert(ps.filter(x=>x.position===pos&&x.role==="backup").length<=1,"one backup "+c+" "+pos);
 }
}
for(const p of d.players){
 assert(d.evaluatedClubs.includes(p.club));
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal);
 if(p.born!==null)assert.match(p.born,/^\d{4}-\d{2}-\d{2}$/,"DOB "+p.name);
 assert(positions.includes(p.position));
 assert.equal(p.appearances,null,"individual UCL appearance pending "+p.name);
 assert.equal(p.minutes,null,"individual UCL minutes pending "+p.name);
 assert(p.appearanceScope?.includes("2009-10"),"appearance scope "+p.name);
 assert(["starter","backup"].includes(p.role));
 if(p.tier===null){
  assert.equal(p.review,"evidence_pending","unrated review "+p.name);
  assert.equal(p.rank,null);
 }else{
  assert(tiers.includes(p.tier));
  assert.equal(p.review,"draft_unapproved");
  assert(Number.isInteger(p.rank)&&p.rank>0);
  assert(p.tierRationale?.length>10);
  assert.deepEqual(p.threeSeasonAssessment?.seasons,["2007-08","2008-09","2009-10"]);
 }
}
for(const pos of positions){
 const a=d.players.filter(p=>p.position===pos&&p.tier!==null).sort((x,y)=>x.rank-y.rank);
 assert.deepEqual(a.map(p=>p.rank),Array.from({length:a.length},(_,i)=>i+1),"rank sequence "+pos);
 for(let i=1;i<a.length;i++) assert(tiers.indexOf(a[i-1].tier)<=tiers.indexOf(a[i].tier),"tier rank inversion "+pos);
}
assert.equal(d.bestXi.length,11);
assert.equal(d.knockout.find(k=>k.stage==="final")?.winner,"barcelona");
assert.equal(d.qualifiers.length,16);
assert.equal(d.meta.verification.approvedPlayerTiers,0);
assert.equal(d.meta.verification.independentThreeSeasonPlayerAuditComplete,false);
assert.equal(d.meta.formation,"4-2-3-1");
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const pick of d.bestXi){
 const p=d.players.find(x=>x.id===pick.playerId);
 assert(p&&p.position===pick.position);
 assert.equal(pick.status,"proposed_unapproved");
}
const distribution={};
for(const t of tiers)distribution[t]=d.players.filter(p=>p.tier===t).length;
console.log(JSON.stringify({result:"PASS",scope:"DRAFT structure only, not full historical individual verification",season:"2009-10",clubs:d.clubs.length,groups:d.groups.length,matches:d.matches.length,goals:320,candidates:d.players.length,rated:288,unrated:0,bestXi:11,tiers:distribution},null,2));
