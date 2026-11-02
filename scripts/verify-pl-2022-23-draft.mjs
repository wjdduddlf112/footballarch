// PL 2022-23 DRAFT structural validator — not historical player proof.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const get = p => JSON.parse(readFileSync(p, "utf8"));
const d = get("data/premierleague-2022-23.json");
const clubs = ["mancity","arsenal","manutd","newcastle","liverpool","brighton","astonvilla","westham"];
const positions = ["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers = ["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps = { GK:2, CB:3, LB:2, RB:2, DM:2, CM:3, CAM:2, LW:2, RW:2, ST:3 };
assert.equal(d.meta.season, "2022-23");
assert.equal(d.meta.qualifyingSeason, "2023-24");
assert.equal(d.meta.status, "draft");
assert.equal(d.meta.standingsOnly, false);
assert.equal(d.meta.europeanQualificationVerified, true);
assert.equal(d.meta.formation, "4-2-3-1");
assert(d.meta.formationNote.includes("261/760"));
assert.equal(d.standings.length, 20);
assert.deepEqual(d.standings.map(x=>x.rank),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((sum,x)=>sum+x.played,0),760);
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),clubs.slice().sort());
assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,3);
assert.equal(d.qualifiers.filter(x=>x.competition==="UECL").length,1);
assert.equal(d.qualifiers.find(x=>x.club==="westham").competition,"UEL");
assert.equal(d.standings.find(x=>x.club==="westham").rank,14);
assert.deepEqual(d.standings.filter(x=>x.competition).map(x=>x.club).sort(),clubs.slice().sort());
assert.equal(d.players.length,d.meta.candidateCount);
assert.equal(d.players.length,141);
assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length);
assert.equal(new Set(d.players.map(p=>p.nameOriginal.normalize("NFKC").toLowerCase())).size,d.players.length);
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
  assert.equal(p.positionMajorityVerified,false,p.id);
  assert(p.previousSeasons["2020-21"]&&p.previousSeasons["2021-22"],p.id);
}
for(const club of clubs){
  const ps=d.players.filter(p=>p.club===club);
  assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starters");
  for(const pos of positions){
    const group=ps.filter(p=>p.position===pos);
    assert(group.length<=caps[pos],club+"/"+pos+" candidate cap");
    assert(group.filter(p=>p.role==="backup").length<=1,club+"/"+pos+" backup cap");
  }
  const research=get("audit/player-research/premierleague-2022-23-"+club+"-fresh-draft.json");
  assert.deepEqual(research.players,ps,club+" club/global parity");
}
for(const pos of positions){
  const group=d.players.filter(p=>p.position===pos);
  assert.deepEqual(group.map(p=>p.rank).sort((a,b)=>a-b),Array.from({length:group.length},(_,i)=>i+1),pos+" rank continuity");
  for(const a of group)for(const b of group){
    if(tiers.indexOf(a.tier)<tiers.indexOf(b.tier)) assert(a.rank<b.rank,pos+" grade-rank contradiction");
  }
}
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.bestXi.length,11);
assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p&&p.position===x.position,x.playerId);}
for(const [p,count] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))
 assert.equal(d.bestXi.filter(x=>x.position===p).length,count,p+" XI");
const tr=d.players.find(p=>p.club==="arsenal"&&p.nameOriginal==="Leandro Trossard");
assert(tr&&tr.leagueStarts===10&&tr.leagueAppearances===20&&tr.leagueGoals===1&&tr.leagueAssists===10);
const jo=d.players.find(p=>p.club==="arsenal"&&p.nameOriginal==="Jorginho");
assert(jo&&jo.leagueStarts===9&&jo.leagueAppearances===14&&jo.leagueGoals===0);
assert(!d.players.some(p=>p.nameOriginal==="Dean Henderson"||p.nameOriginal==="Ainsley Maitland-Niles"));
console.log("PASS: PL 2022-23 provisional structure, 141 candidates and 8 eligible teams.");
