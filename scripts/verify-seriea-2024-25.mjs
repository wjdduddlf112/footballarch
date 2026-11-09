// Static source-and-structure validator: run from repo root
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2024-25.json","utf8"));
const archive=JSON.parse(readFileSync("data/seriea-standings-verified-1999-2026.json","utf8"));
const q={napoli:"UCL",inter:"UCL",atalanta:"UCL",juventus:"UCL",roma:"UEL",fiorentina:"UECL",bologna:"UEL"};
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
let errors=[];
const check=(v,msg)=>{if(!v)errors.push(msg)};
check(d.meta.season==="2024-25"&&d.meta.qualifyingSeason==="2025-26"&&d.meta.status==="draft_unapproved","meta season/status");
check(d.standings.length===20,"standings count");
check(JSON.stringify(d.standings)===JSON.stringify(archive.seasons["2024-25"].standings),"standings altered");
check(d.qualifiers.length===7&&Object.keys(q).every(c=>d.qualifiers.some(x=>x.club===c&&x.competition===q[c])),"7 eligible UEFA participants");
check(d.players.length===131&&d.meta.candidateCount===d.players.length,"player count");
const ids=new Set();
for(const p of d.players){
 check(!ids.has(p.id),"duplicate "+p.id);ids.add(p.id);
 check(q[p.club]!=null,"ineligible club "+p.id);
 check(p.clubId===p.club&&Boolean(p.clubNameOriginal),"club name "+p.id);
 check(positions.includes(p.position),"wrong position "+p.id);
 check(tiers.includes(p.tier)&&p.review==="draft_unapproved","grade/review "+p.id);
 check(p.displayTier===({A:"A0",B:"B0",C:"C0"}[p.tier]||p.tier),"display tier "+p.id);
 check(Boolean(p.born&&/^\d{4}-\d{2}-\d{2}$/.test(p.born)&&p.nameKo&&p.nameOriginal),"identity "+p.id);
 check(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0,"apps "+p.id);
 check(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,"starts "+p.id);
 check(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>0&&p.leagueMinutes<=p.leagueAppearances*100,"minutes "+p.id);
 check(p.leagueGoals>=0,"negative goal "+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join("/") === "2022-23/2023-24/2024-25","three year interval "+p.id);
 for(const yr of ["2022-23","2023-24"]){const h=p.threeSeasonReview.records[yr];check(Boolean(h)&&(h.appearances==null||Number.isInteger(h.appearances)),"prior evidence "+p.id+" "+yr);}
}
for(const c of Object.keys(q)){
 const team=d.players.filter(p=>p.club===c),starters=team.filter(p=>p.role==="starter");
 check(starters.length===11,c+" 11 starters (got "+starters.length+")");
 for(const pos of positions){
  const g=team.filter(x=>x.position===pos);
  check(g.filter(x=>x.role==="backup").length<=1,c+" "+pos+" backup maximum");
  check(g.filter(x=>x.role==="starter").length<=(pos==="CB"?3:pos==="CM"||pos==="ST"?2:1),c+" "+pos+" starter maximum");
 }
}
for(const pos of positions){
 const pp=d.players.filter(x=>x.position===pos).sort((a,b)=>a.rank-b.rank);
 check(pp.every((p,i)=>p.rank===i+1),pos+" rank continuity");
 check(pp.every((p,i)=>i===0||tiers.indexOf(pp[i-1].tier)<=tiers.indexOf(p.tier)),pos+" ranked tier contradiction");
}
const dist=Object.fromEntries(tiers.map(t=>[({A:"A0",B:"B0",C:"C0"}[t]||t),d.players.filter(x=>x.tier===t).length]));
check(JSON.stringify(dist)===JSON.stringify(d.meta.tierDistribution),"tier distribution");
check(d.meta.worldClassCount===20&&d.meta.leagueTopClassCount===62,"class totals");
check(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11&&d.meta.formation==="3-5-2","best XI count/formation");
for(const x of d.bestXi){const p=d.players.find(z=>z.id===x.playerId);check(Boolean(p)&&p.position===x.position&&x.status==="proposed_unapproved","XI invalid "+x.playerId)}
if(errors.length){console.error(errors.join("\n"));process.exit(1);}
console.log(JSON.stringify({passed:true,season:"2024-25",clubs:7,players:d.players.length,worldClass:20,leagueTop:62,startersPerTeam:11,positionGroups:10,xi:11,status:"draft_unapproved",historicalVerification:"pending_not_complete"},null,2));
