// Structural DRAFT validator for Premier League 2024-25; not proof of player match histories.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read=path=>JSON.parse(readFileSync(path,"utf8"));
const d=read("data/premierleague-2024-25.json");
const clubs=["liverpool","arsenal","mancity","chelsea","newcastle","tottenham","astonvilla","nottingham","crystalpalace"];
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:4,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:2};
assert.equal(d.meta.season,"2024-25");
assert.equal(d.meta.qualifyingSeason,"2025-26");
assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsOnly,false);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.meta.formation,"4-2-3-1");
assert(d.meta.formationNote.includes("408"));
assert.equal(d.standings.length,20);
assert.deepEqual(d.standings.map(s=>s.rank),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((n,r)=>n+r.played,0),760);
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),clubs.slice().sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,6);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,2);
assert.equal(d.qualifiers.filter(q=>q.competition==="UECL").length,1);
assert.equal(d.qualifiers.find(q=>q.club==="crystalpalace").competition,"UECL");
assert.equal(d.qualifiers.find(q=>q.club==="nottingham").competition,"UEL");
assert.equal(d.qualifiers.find(q=>q.club==="tottenham").competition,"UCL");
assert.equal(d.standings.find(s=>s.club==="tottenham").rank,17);
assert.equal(d.standings.find(s=>s.club==="crystalpalace").rank,12);
assert.deepEqual(d.standings.filter(s=>s.competition).map(s=>s.club).sort(),clubs.slice().sort());
assert.equal(d.players.length,162);
assert.equal(d.meta.candidateCount,162);
assert.equal(new Set(d.players.map(p=>p.id)).size,162);
assert.equal(d.players.filter(p=>p.role==="starter").length,99);
assert.equal(d.players.filter(p=>p.role==="backup").length,63);
for(const p of d.players){
 assert(clubs.includes(p.club)&&pos.includes(p.position)&&tiers.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);
 assert.equal(p.review,"draft_unapproved",p.id);
 assert.equal(p.rankStatus,"draft_unapproved",p.id);
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources.length>=2,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert(Number.isInteger(p.leagueStarts)&&p.leagueStarts>0,p.id);
 assert(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=p.leagueStarts,p.id);
 assert(Number.isInteger(p.rank)&&p.rank>=1,p.id);
 assert.equal(p.positionMajorityVerified,false,p.id);
 assert(p.previousSeasons["2022-23"]&&p.previousSeasons["2023-24"],p.id);
}
for(const club of clubs){
 const a=d.players.filter(p=>p.club===club);
 assert.equal(a.filter(p=>p.role==="starter").length,11,club+" starting 11");
 for(const position of pos){
  const group=a.filter(p=>p.position===position);
  assert(group.length<=caps[position],club+"/"+position+" candidate cap");
  assert(group.filter(p=>p.role==="backup").length<=1,club+"/"+position+" duplicate backups");
 }
 const file=read("audit/player-research/premierleague-2024-25-"+club+"-fresh-draft.json");
 assert.deepEqual(file.players,a,club+" source parity");
}
for(const position of pos){
 const group=d.players.filter(p=>p.position===position);
 assert.deepEqual(group.map(p=>p.rank).sort((a,b)=>a-b),Array.from({length:group.length},(_,i)=>i+1),position+" consecutive rank");
 for(const a of group)for(const b of group)if(tiers.indexOf(a.tier)<tiers.indexOf(b.tier))assert(a.rank<b.rank,position+" order inconsistent");
}
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(p=>p.playerId)).size,11);
for(const x of d.bestXi){
 const p=d.players.find(p=>p.id===x.playerId);
 assert(p&&p.position===x.position,x.playerId);
}
for(const [p,n] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))
 assert.equal(d.bestXi.filter(x=>x.position===p).length,n,p+" best XI formation");
assert(!d.players.some(p=>p.club==="astonvilla"&&p.nameOriginal==="Marcus Rashford"));
assert(!d.players.some(p=>p.club==="chelsea"&&p.nameOriginal==="Trevoh Chalobah"));
assert(!d.players.some(p=>p.club==="mancity"&&p.nameOriginal==="Rodri"));
const salah=d.players.find(p=>p.club==="liverpool"&&p.nameOriginal==="Mohamed Salah");
assert(salah&&salah.position==="RW"&&salah.leagueGoals===29&&salah.leagueAssists===18);
const isak=d.players.find(p=>p.club==="newcastle"&&p.nameOriginal==="Alexander Isak");
assert(isak&&isak.leagueGoals===23);
const palace=d.players.filter(p=>p.club==="crystalpalace");
assert.equal(palace.filter(p=>p.role==="starter"&&p.position==="CB").length,3);
console.log("PASS: PL 2024-25 structural DRAFT, 9 UEFA clubs, 162 newly selected players, 4-2-3-1 Best XI.");
