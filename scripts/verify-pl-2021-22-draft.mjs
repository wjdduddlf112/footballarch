// PL 2021-22 structural DRAFT validation; independent historical proof NOT claimed.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2021-22.json","utf8"));
const clubs=["mancity","liverpool","chelsea","tottenham","arsenal","manutd","westham"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"],caps={"GK":2,"CB":4,"LB":2,"RB":2,"DM":2,"CM":3,"CAM":2,"LW":2,"RW":2,"ST":2};
assert.equal(d.meta.season,"2021-22");
assert.equal(d.meta.qualifyingSeason,"2022-23");
assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsOnly,false);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.meta.formation,"4-3-3");
assert(d.meta.formationNote.includes("185/760"));
assert.equal(d.standings.length,20);
assert.deepEqual(d.standings.map(s=>s.rank),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((n,s)=>n+s.played,0),760);
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),[...clubs].sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,2);
assert.equal(d.qualifiers.filter(q=>q.competition==="UECL").length,1);
assert.equal(d.meta.candidateCount,d.players.length);
assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length);
assert.equal(new Set(d.players.map(p=>p.nameOriginal.toLowerCase())).size,d.players.length);
for(const p of d.players){
 assert(clubs.includes(p.club)&&positions.includes(p.position)&&grades.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);
 assert.equal(p.review,"draft_unapproved");
 assert.equal(p.rankStatus,"draft_unapproved");
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources.length>=2,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert(Number.isInteger(p.leagueStarts)&&p.leagueStarts>0,p.id);
 assert(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=p.leagueStarts,p.id);
 assert(Number.isInteger(p.rank)&&p.rank>=1,p.id);
 assert(p.positionMajorityVerified===false,p.id);
 assert(p.previousSeasons["2019-20"]&&p.previousSeasons["2020-21"],p.id);
}
for(const c of clubs){
 const ps=d.players.filter(p=>p.club===c);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,c+" starters");
 for(const pos of positions){const subset=ps.filter(p=>p.position===pos);assert(subset.length<=caps[pos],c+"/"+pos+" count");assert(subset.filter(p=>p.role==="backup").length<=1,c+"/"+pos+" backups");}
 const a=JSON.parse(readFileSync("audit/player-research/premierleague-2021-22-"+c+"-fresh-draft.json","utf8"));
 assert.deepEqual(a.players,ps,c+" parity");
}
for(const pos of positions){
 const ps=d.players.filter(p=>p.position===pos);
 assert.deepEqual(ps.map(p=>p.rank).sort((a,b)=>a-b),Array.from({length:ps.length},(_,i)=>i+1),pos+" rank");
 for(const a of ps)for(const b of ps)if(grades.indexOf(a.tier)<grades.indexOf(b.tier))assert(a.rank<b.rank,pos+" tier-rank inversion");
}
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p&&p.position===x.position,x.playerId);}
for(const [p,n] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1}))assert.equal(d.bestXi.filter(x=>x.position===p).length,n,p+" XI");
console.log("PASS: PL 2021-22 DRAFT integrity",d.players.length,"players, 7 eligible clubs, 11 XI");
