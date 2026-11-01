// PL 2017-18: structural DRAFT validator only, not a historical audit of 3-year individual performance.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2017-18.json","utf8"));
const eligible=["mancity","manutd","tottenham","liverpool","chelsea","arsenal","burnley"];
const order=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={"GK":2,"CB":3,"LB":2,"RB":2,"DM":2,"CM":3,"CAM":2,"LW":2,"RW":2,"ST":3};
const slots={"GK":1,"CB":2,"LB":1,"RB":1,"DM":1,"CM":1,"CAM":1,"LW":1,"RW":1,"ST":1};
assert.equal(d.meta.season,"2017-18");assert.equal(d.meta.qualifyingSeason,"2018-19");assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsOnly,false);assert.equal(d.meta.standingsVerified,true);assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);assert.deepEqual(d.standings.map(s=>s.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));assert.equal(d.standings.reduce((n,s)=>n+s.played,0),760);
assert.equal(d.standings.find(s=>s.rank===1).club,"mancity");
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),[...eligible].sort());
assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,4);assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,3);
assert.equal(d.qualifiers.find(x=>x.club==="burnley").competition,"UEL");
assert.deepEqual(d.standings.filter(s=>s.competition).map(x=>x.club).sort(),[...eligible].sort());
assert.equal(d.meta.formation,"4-2-3-1");assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(new Set(d.players.map(x=>x.id)).size,d.players.length);assert.equal(d.meta.candidateCount,d.players.length);
for(const p of d.players){
 assert(eligible.includes(p.club),p.id);assert(order.includes(p.position),p.id);assert(tiers.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);assert.equal(p.review,"draft_unapproved");
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources?.length,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert.equal(p.leagueStarts,null,p.id);assert.equal(p.leagueAppearances,null,p.id);assert.equal(p.positionMajorityVerified,false,p.id);
 assert(p.previousSeasons?.["2015-16"]&&p.previousSeasons?.["2016-17"],p.id);assert(Number.isInteger(p.rank)&&p.rank>0);
 assert(p.leagueGoals===null||(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0),p.id);
 assert(p.leagueAssists===null||(Number.isInteger(p.leagueAssists)&&p.leagueAssists>=0),p.id);
}
for(const club of eligible){
 const ps=d.players.filter(x=>x.club===club);assert.equal(ps.filter(x=>x.role==="starter").length,11,"XI "+club);
 for(const [pos,max] of Object.entries(caps)){
  assert(ps.filter(x=>x.position===pos).length<=max,club+" "+pos+" cap");
  assert(ps.filter(x=>x.position===pos&&x.role==="backup").length<=1,club+" "+pos+" reserve");
 }
 const research=JSON.parse(readFileSync("audit/player-research/premierleague-2017-18-"+club+"-fresh-draft.json","utf8"));
 assert.deepEqual(research.players,ps,"research parity "+club);
}
for(const pos of order){
 const a=d.players.filter(x=>x.position===pos).sort((a,b)=>a.rank-b.rank);
 a.forEach((x,i)=>{assert.equal(x.rank,i+1,pos+" rank");if(i)assert(tiers.indexOf(a[i-1].tier)<=tiers.indexOf(x.tier),pos+" tier inversion")});
}
assert.equal(d.bestXi.length,11);assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [pos,n] of Object.entries(slots))assert.equal(d.bestXi.filter(x=>x.position===pos).length,n,pos+" XI");
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p,x.playerId);assert.equal(p.position,x.position);assert(p.rank<=(p.position==="CB"?2:1),p.id);}
assert.equal(new Set(d.players.map(p=>p.nameOriginal.normalize("NFKC").toLowerCase())).size,d.players.length,"duplicate physical player across mid-season transfer");
const report=readFileSync("audit/PLAYER_PREMIERLEAGUE_2017-18_DRAFT_REVIEW.md","utf8");assert(report.includes("2015-16")&&report.includes("Burnley")&&report.includes("184")&&report.includes("proposed_unapproved"));
console.log("PASS: PL 2017-18 STRUCTURAL ONLY: 7 actual 2018-19 UEFA entrants incl Burnley Q2, "+d.players.length+" candidate DRAFT ratings and ranks, 11 starters/team, backups cap, valid XI; independent historical audits pending.");
