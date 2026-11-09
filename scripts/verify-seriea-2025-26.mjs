// Independent source-led DRAFT structure check for Serie A 2025-26
// Run from repository root: node scripts/verify-seriea-2025-26.mjs
import {readFileSync} from "node:fs";
const load=p=>JSON.parse(readFileSync(p,"utf8"));
const d=load("data/seriea-2025-26.json");
const archive=load("data/seriea-standings-verified-1999-2026.json");
const qualifiers={inter:"UCL",napoli:"UCL",roma:"UCL",como:"UCL",milan:"UEL",juventus:"UEL",atalanta:"UECL"};
const positionOrder=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[];
const check=(condition,message)=>{if(!condition)errors.push(message)};
check(d.meta.leagueId==="seriea"&&d.meta.season==="2025-26","season");
check(d.meta.qualifyingSeason==="2026-27"&&d.meta.europeanQualificationVerified===true,"qualifying season");
check(d.meta.status==="draft_unapproved","draft status");
check(d.standings.length===20,"20 standings");
check(JSON.stringify(d.standings)===JSON.stringify(archive.seasons["2025-26"].standings),"standings master unchanged");
check(d.qualifiers.length===7,"exactly seven entrants");
const qids=new Set();
for(const q of d.qualifiers){check(qualifiers[q.club]===q.competition,"ineligible club "+q.club);check(!qids.has(q.club),"duplicate qualifier "+q.club);qids.add(q.club)}
check(Object.keys(qualifiers).every(x=>qids.has(x)),"missing eligible team");
check(d.players.length===131&&d.meta.candidateCount===d.players.length,"candidate count mismatch");
const ids=new Set();
for(const p of d.players){
 check(!ids.has(p.id),"duplicate id "+p.id);ids.add(p.id);
 check(qids.has(p.club)&&p.club===p.clubId,"player club invalid "+p.id);
 check(p.nameKo?.length>0&&p.nameOriginal?.length>0&&p.clubNameOriginal?.length>0,"name missing "+p.id);
 check(/^\d{4}-\d{2}-\d{2}$/.test(p.born||""),"date of birth missing "+p.id);
 check(positionOrder.includes(p.position),"position "+p.id);
 check(grades.includes(p.tier)&&p.review==="draft_unapproved","tier/approval "+p.id);
 check(p.displayTier===({A:"A0",B:"B0",C:"C0"}[p.tier]||p.tier),"display grade "+p.id);
 check(["starter","backup"].includes(p.role),"role "+p.id);
 check(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0,"appearances "+p.id);
 check(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,"starts "+p.id);
 check(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>0&&p.leagueMinutes<=p.leagueAppearances*100,"minutes "+p.id);
 check(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0,"goals "+p.id);
 check(Array.isArray(p.sources)&&p.sources.length>=1&&p.sources.every(s=>/^https:\/\//.test(s)),"source links "+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join("/") === "2023-24/2024-25/2025-26","three-year period "+p.id);
 for(const y of ["2023-24","2024-25","2025-26"]){
  const record=p.threeSeasonReview?.records?.[y];
  check(Boolean(record)&&(record.appearances===null||Number.isInteger(record.appearances)),"year evidence "+p.id+"/"+y);
 }
}
for(const c of Object.keys(qualifiers)){
 const pp=d.players.filter(p=>p.club===c);
 check(pp.filter(p=>p.role==="starter").length===11,"11 representative starters "+c);
 check(pp.length===d.meta.candidateCoverage?.counts?.[c],"candidate metadata "+c);
 for(const pos of positionOrder){
  const group=pp.filter(p=>p.position===pos);
  check(group.filter(p=>p.role==="backup").length<=1,"max one backup "+c+"/"+pos);
  check(group.filter(p=>p.role==="starter").length<=(pos==="CB"?3:pos==="CM"||pos==="ST"?2:1),"starters max "+c+"/"+pos);
 }
}
for(const pos of positionOrder){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 check(ps.length>0,"empty position "+pos);
 check(ps.every((p,i)=>p.rank===i+1),"rank 1...N "+pos);
 check(ps.every((p,i)=>i===0||grades.indexOf(ps[i-1].tier)<=grades.indexOf(p.tier)),"tier/rank inversion "+pos);
}
const dist=Object.fromEntries(grades.map(t=>[({A:"A0",B:"B0",C:"C0"}[t]||t),d.players.filter(p=>p.tier===t).length]));
check(JSON.stringify(dist)===JSON.stringify(d.meta.tierDistribution),"grade metadata");
check(d.meta.worldClassCount===dist.S+dist["A+"],"World Class count");
check(d.meta.leagueTopClassCount===dist.S+dist["A+"]+dist.A0+dist["A-"],"League Top count");
check(d.meta.birthdayPending.length===0,"birthday pending count");
check(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"XI unique 11");
check(d.meta.formation==="3-4-1-2","XI formation");
const xiPos={GK:1,CB:3,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:0,RW:0,ST:2};
for(const pos of positionOrder)check(d.bestXi.filter(x=>x.position===pos).length===xiPos[pos],"XI position count "+pos);
for(const x of d.bestXi){
 const p=d.players.find(y=>y.id===x.playerId);
 check(Boolean(p)&&p.position===x.position,"XI valid ID/position "+x.playerId);
 check(x.status==="proposed_unapproved","XI not approved "+x.playerId);
}
if(errors.length){console.error("Serie A 2025-26 DRAFT structure validation FAILED:\n- "+errors.join("\n- "));process.exit(1)}
console.log(JSON.stringify({passed:true,season:d.meta.season,clubCount:d.qualifiers.length,playerCount:d.players.length,all10Positions:true,tiers:dist,worldClass:d.meta.worldClassCount,leagueTopClass:d.meta.leagueTopClassCount,clubStarters:11,xi:d.bestXi.length,standingsPreserved:true,review:d.meta.status,sourceLimit:"current-year one-source; prior two years not independently audited"},null,2));
