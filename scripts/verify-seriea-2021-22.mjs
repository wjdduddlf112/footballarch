// Football Archive Serie A 2021-22 player archive verifier
// Usage: node scripts/verify-seriea-2021-22.mjs
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const p = JSON.parse(readFileSync("data/seriea-2021-22.json","utf8"));
const s = JSON.parse(readFileSync("data/seriea-standings-verified-1999-2026.json","utf8"));
const pos = ["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const validGrades = ["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const qualifierIds = ["milan","inter","napoli","juventus","lazio","roma","fiorentina"];
const expectedCompetition = {milan:"UCL",inter:"UCL",napoli:"UCL",juventus:"UCL",lazio:"UEL",roma:"UEL",fiorentina:"UECL"};
const errors = [];
const check = (condition,message)=>{if(!condition)errors.push(message)};
check(p.meta.leagueId==="seriea" && p.meta.season==="2021-22","Incorrect season");
check(p.meta.qualifyingSeason==="2022-23","Incorrect UEFA season");
check(p.meta.status==="draft_unapproved","Not DRAFT");
check(p.standings.length===20,"Expected 20 standing rows");
check(JSON.stringify(p.standings)===JSON.stringify(s.seasons["2021-22"].standings),"Standalone verified standings changed");
check(p.qualifiers.length===7 && p.qualifiers.every(q=>qualifierIds.includes(q.club)&&q.competition===expectedCompetition[q.club]),"UEFA entrants not as verified");
check(p.players.length===133,"Player count does not match current audited roster");
check(p.meta.candidateCount===p.players.length,"Meta candidate count incorrect");
const ids=new Set();
for(const player of p.players){
  check(!ids.has(player.id),"Duplicate player ID: "+player.id);ids.add(player.id);
  check(player.club===player.clubId && qualifierIds.includes(player.club),"Invalid eligible club: "+player.id);
  check(pos.includes(player.position),"Invalid position: "+player.id);
  check(validGrades.includes(player.tier),"Invalid grade: "+player.id);
  check(Boolean(player.nameKo&&player.nameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(player.born||"")),"Identity missing: "+player.id);
  check(player.leagueAppearances>0 && player.leagueStarts>=0 && player.leagueStarts<=player.leagueAppearances,"App/start mismatch: "+player.id);
  check(player.leagueMinutes>=0 && player.leagueMinutes<=player.leagueAppearances*100,"Minutes invalid: "+player.id);
  check(player.review==="draft_unapproved","Player not DRAFT: "+player.id);
  check(["starter","backup"].includes(player.role),"Role invalid: "+player.id);
  check(player.threeSeasonReview?.assessmentSeasons?.join("/") === "2019-20/2020-21/2021-22","Three-season time window: "+player.id);
  for(const y of ["2019-20","2020-21"]){
    const h=player.threeSeasonReview?.records?.[y];
    check(h && (h.appearances===null||h.appearances>=0),"Prior-year field invalid: "+player.id+"/"+y);
  }
}
for(const id of qualifierIds)for(const position of pos){
  const group=p.players.filter(x=>x.club===id&&x.position===position);
  check(group.filter(x=>x.role==="backup").length<=1,"Duplicate backup: "+id+"/"+position);
}
for(const position of pos){
  const g=p.players.filter(x=>x.position===position).map(x=>x.rank).sort((a,b)=>a-b);
  check(g.every((n,i)=>n===i+1),"Nonconsecutive ranking "+position);
}
check(p.bestXi.length===11,"Best XI must be 11");
check(new Set(p.bestXi.map(x=>x.playerId)).size===11,"Best XI duplicate");
for(const x of p.bestXi){
  const found=p.players.find(z=>z.id===x.playerId);
  check(found&&found.position===x.position,"XI position/roster mismatch: "+x.playerId);
  check(x.status==="proposed_unapproved","XI not draft: "+x.playerId);
}
const dist={};
for(const grade of validGrades)dist[grade==="A"?"A0":grade==="B"?"B0":grade==="C"?"C0":grade]=p.players.filter(x=>x.tier===grade).length;
check(JSON.stringify(dist)===JSON.stringify(p.meta.tierDistribution),"Tier distribution mismatch");
check(p.players.filter(x=>["S","A+"].includes(x.tier)).length===23,"World Class count mismatch");
check(p.players.filter(x=>["S","A+","A","A-"].includes(x.tier)).length===47,"League Top Class count mismatch");
const d=p.players.filter(x=>x.name==="Dušan Vlahović");
check(d.length===2&&d.some(x=>x.club==="fiorentina"&&x.leagueGoals===17)&&d.some(x=>x.club==="juventus"&&x.leagueGoals===7),"Two eligible Vlahović club spells missing");
if(errors.length){
  console.error("Serie A 2021-22 verification FAILED:",errors.join("\n- "));
  process.exitCode=1;
}else{
  const positionCounts=Object.fromEntries(pos.map(x=>[x,p.players.filter(v=>v.position===x).length]));
  console.log(JSON.stringify({ok:true,league:"Serie A",season:"2021-22",players:p.players.length,qualifyingClubs:p.qualifiers.length,positions:positionCounts,worldClass:23,leagueTopClass:47,bestXi:p.bestXi.length,standingsPreserved:true,draft:true,historicalReview:"partial, pending independent three-season audit"},null,2));
}
