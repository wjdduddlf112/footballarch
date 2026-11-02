// Only validates structure of Premier League 2023-24 DRAFT; does not prove player records.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const get=path=>JSON.parse(readFileSync(path,"utf8"));
const d=get("data/premierleague-2023-24.json");
const clubs=["mancity","arsenal","liverpool","astonvilla","tottenham","chelsea","manutd"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const cap={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:2};
assert.equal(d.meta.season,"2023-24");assert.equal(d.meta.qualifyingSeason,"2024-25");
assert.equal(d.meta.status,"draft");assert.equal(d.meta.standingsOnly,false);assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.meta.formation,"4-2-3-1");assert(d.meta.formationNote.includes("296/760"));
assert.equal(d.standings.length,20);
assert.deepEqual(d.standings.map(s=>s.rank),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((s,r)=>s+r.played,0),760);
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),clubs.slice().sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,2);
assert.equal(d.qualifiers.filter(q=>q.competition==="UECL").length,1);
assert.equal(d.qualifiers.find(q=>q.club==="manutd").competition,"UEL");
assert.equal(d.standings.find(s=>s.club==="manutd").rank,8);
assert(!d.qualifiers.some(q=>q.club==="newcastle"));
assert.deepEqual(d.standings.filter(s=>s.competition).map(s=>s.club).sort(),clubs.slice().sort());
assert.equal(d.players.length,126);assert.equal(d.meta.candidateCount,126);
assert.equal(new Set(d.players.map(p=>p.id)).size,126);
for(const p of d.players){
 assert(clubs.includes(p.club)&&positions.includes(p.position)&&tiers.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);
 assert.equal(p.review,"draft_unapproved",p.id);
 assert.equal(p.rankStatus,"draft_unapproved",p.id);
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources.length>=2,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert(Number.isInteger(p.leagueStarts)&&p.leagueStarts>0,p.id);
 assert(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=p.leagueStarts,p.id);
 assert(Number.isInteger(p.rank)&&p.rank>0,p.id);
 assert(p.previousSeasons["2021-22"]&&p.previousSeasons["2022-23"],p.id);
}
for(const club of clubs){
 const ps=d.players.filter(p=>p.club===club);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starting XI");
 for(const pos of positions){
   const group=ps.filter(p=>p.position===pos);
   assert(group.length<=cap[pos],club+"/"+pos+" cap");
   assert(group.filter(p=>p.role==="backup").length<=1,club+"/"+pos+" backups");
 }
 const f=get("audit/player-research/premierleague-2023-24-"+club+"-fresh-draft.json");
 assert.deepEqual(f.players,ps,club+" club/global parity");
}
for(const position of positions){
 const ps=d.players.filter(p=>p.position===position);
 assert.deepEqual(ps.map(p=>p.rank).sort((a,b)=>a-b),Array.from({length:ps.length},(_,i)=>i+1),position+" ranks");
 for(const a of ps)for(const b of ps)if(tiers.indexOf(a.tier)<tiers.indexOf(b.tier)) assert(a.rank<b.rank,position+" tier order");
}
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(p=>p.playerId)).size,11);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p&&p.position===x.position,x.playerId);}
for(const [pos,n] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))assert.equal(d.bestXi.filter(x=>x.position===pos).length,n,pos+" XI");
assert(!d.players.some(p=>["James McAtee","Issa Kaboré","Albert Sambi Lokonga","Sergio Reguilón","David Datro Fofana","Lewis Hall"].includes(p.nameOriginal)));
const palmer=d.players.find(p=>p.club==="chelsea"&&p.nameOriginal==="Cole Palmer");
assert(palmer&&palmer.position==="RW"&&palmer.leagueGoals===22);
const foden=d.players.find(p=>p.club==="mancity"&&p.nameOriginal==="Phil Foden");
assert(foden&&foden.position==="RW"&&foden.leagueGoals===19);
console.log("PASS: PL 2023-24 structural DRAFT, 126 player proposals in 7 eligible UEFA clubs.");
