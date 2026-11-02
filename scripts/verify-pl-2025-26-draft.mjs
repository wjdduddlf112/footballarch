// Structural-only validator of Premier League 2025-26 player DRAFT, not match-by-match historical proof.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const d=read("data/premierleague-2025-26.json");
const clubs=["arsenal","mancity","manutd","astonvilla","liverpool","bournemouth","sunderland","brighton","crystalpalace"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:4,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:2};
assert.equal(d.meta.season,"2025-26");
assert.equal(d.meta.qualifyingSeason,"2026-27");
assert.equal(d.meta.status,"draft");
assert.equal(d.meta.standingsOnly,false);
assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.meta.formation,"4-2-3-1");
assert.equal(d.meta.formationVerification,"provisional_mode_supported_official_count_missing");
assert.equal(d.standings.length,20);
assert.deepEqual(d.standings.map(s=>s.rank),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((n,s)=>n+s.played,0),760);
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),clubs.slice().sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,5);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,3);
assert.equal(d.qualifiers.filter(q=>q.competition==="UECL").length,1);
assert.equal(d.qualifiers.find(q=>q.club==="crystalpalace").competition,"UEL");
assert.equal(d.standings.find(s=>s.club==="crystalpalace").rank,15);
assert.equal(d.qualifiers.find(q=>q.club==="brighton").competition,"UECL");
assert.deepEqual(d.standings.filter(s=>s.competition).map(s=>s.club).sort(),clubs.slice().sort());
assert.equal(d.players.length,164);
assert.equal(d.meta.candidateCount,164);
assert.equal(d.players.filter(p=>p.role==="starter").length,99);
assert.equal(d.players.filter(p=>p.role==="backup").length,65);
assert.equal(new Set(d.players.map(p=>p.id)).size,164);
assert.equal(new Set(d.players.map(p=>p.nameOriginal)).size,164);
for(const p of d.players){
 assert(clubs.includes(p.club)&&positions.includes(p.position)&&grades.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);
 assert.equal(p.review,"draft_unapproved",p.id);
 assert.equal(p.rankStatus,"draft_unapproved",p.id);
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources.length>=2,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert(Number.isInteger(p.leagueStarts)&&p.leagueStarts>0,p.id);
 assert(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=p.leagueStarts,p.id);
 assert(Number.isInteger(p.rank)&&p.rank>=1,p.id);
 assert.equal(p.positionMajorityVerified,false,p.id);
 assert(p.previousSeasons["2023-24"]&&p.previousSeasons["2024-25"],p.id);
}
for(const club of clubs){
 const a=d.players.filter(p=>p.club===club);
 assert.equal(a.filter(p=>p.role==="starter").length,11,club+" XI");
 for(const pos of positions){
  const group=a.filter(p=>p.position===pos);
  assert(group.length<=caps[pos],club+"/"+pos+" max candidates");
  assert(group.filter(p=>p.role==="backup").length<=1,club+"/"+pos+" one backup");
 }
 const f=read("audit/player-research/premierleague-2025-26-"+club+"-fresh-draft.json");
 assert.deepEqual(f.players,a,club+" club/global parity");
}
for(const pos of positions){
 const group=d.players.filter(p=>p.position===pos);
 assert.deepEqual(group.map(p=>p.rank).sort((a,b)=>a-b),Array.from({length:group.length},(_,i)=>i+1),pos+" rank continuity");
 for(const a of group)for(const b of group)if(grades.indexOf(a.tier)<grades.indexOf(b.tier))assert(a.rank<b.rank,pos+" tier order");
}
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p&&p.position===x.position,x.playerId);}
for(const [pos,count] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))
 assert.equal(d.bestXi.filter(x=>x.position===pos).length,count,pos+" XI formation");
const at=(club,name)=>d.players.find(p=>p.club===club&&p.nameOriginal===name);
assert(at("manutd","Bruno Fernandes").leagueAssists===21);
assert(at("mancity","Erling Haaland").leagueGoals===27);
const se=at("bournemouth","Antoine Semenyo");
assert(se&&se.leagueStarts===20&&se.leagueAppearances===20&&se.leagueGoals===10&&se.leagueAssists===3);
const guehi=at("crystalpalace","Marc Guéhi");
assert(guehi&&guehi.leagueStarts===20&&guehi.leagueGoals===2&&guehi.leagueAssists===2);
const lar=at("crystalpalace","Jørgen Strand Larsen");
assert(lar&&lar.leagueStarts===12&&lar.leagueAppearances===14&&lar.leagueGoals===3&&lar.leagueAssists===0);
assert(!at("mancity","Marc Guéhi")&&!at("mancity","Antoine Semenyo"));
console.log("PASS PL 2025-26 structural DRAFT — 9 qualifying clubs, 164 candidates, 11-player Best XI.");
