// Run at repository root: node scripts/verify-seriea-2023-24.mjs
import { readFileSync } from "node:fs";
const load=(p)=>JSON.parse(readFileSync(p,"utf8"));
const d=load("data/seriea-2023-24.json");
const ref=load("data/seriea-standings-verified-1999-2026.json");
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const qualifiers={inter:"UCL",milan:"UCL",juventus:"UCL",atalanta:"UCL",bologna:"UCL",roma:"UEL",lazio:"UEL",fiorentina:"UECL"};
const errors=[];
const check=(v,n)=>{if(!v)errors.push(n)};
check(d.meta.leagueId==="seriea"&&d.meta.season==="2023-24","wrong season");
check(d.meta.qualifyingSeason==="2024-25","UEFA season mismatch");
check(d.meta.status==="draft_unapproved","not DRAFT");
check(d.standings.length===20,"standings length != 20");
check(JSON.stringify(d.standings)===JSON.stringify(ref.seasons["2023-24"].standings),"verified standings changed");
check(d.qualifiers.length===8,"must have 8 UEFA clubs");
const ids=new Set();
for(const q of d.qualifiers){
 check(qualifiers[q.club]===q.competition,"ineligible club/competition "+q.club);
 check(!ids.has(q.club),"duplicate qualifier "+q.club);ids.add(q.club);
}
check(ids.has("juventus")&&ids.has("bologna")&&!ids.has("napoli"),"2024-25 5th Italian UCL spot or Napoli exclusion incorrect");
check(d.players.length===151,"unexpected candidate count");
check(d.meta.candidateCount===d.players.length,"candidateCount differs from players.length");
const players=new Set();
for(const p of d.players){
 check(!players.has(p.id),"duplicate player id "+p.id);players.add(p.id);
 check(ids.has(p.club)&&p.clubId===p.club,"player club ineligible "+p.id);
 check(positions.includes(p.position),"position invalid "+p.id);
 check(grades.includes(p.tier),"tier invalid "+p.id);
 check(p.displayTier===(p.tier==="A"?"A0":p.tier==="B"?"B0":p.tier==="C"?"C0":p.tier),"displayTier invalid "+p.id);
 check(Boolean(p.nameOriginal&&p.nameKo&&p.born&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(p.born)),"identity incomplete "+p.id);
 check(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0,"appearances invalid "+p.id);
 check(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,"starts invalid "+p.id);
 check(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>=0&&p.leagueMinutes<=p.leagueAppearances*100,"minutes invalid "+p.id);
 check(p.review==="draft_unapproved","player not DRAFT "+p.id);
 check(["starter","backup"].includes(p.role),"player role invalid "+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join("/") === "2021-22/2022-23/2023-24","three-season window invalid "+p.id);
 for(const year of ["2021-22","2022-23"]){
  const rec=p.threeSeasonReview?.records?.[year];
  check(rec&&((rec.appearances===null)||(Number.isInteger(rec.appearances)&&rec.appearances>=0)),"missing old-year field "+p.id+" "+year);
 }
}
for(const club of Object.keys(qualifiers))for(const position of positions){
 const players=d.players.filter(x=>x.club===club&&x.position===position);
 check(players.filter(x=>x.role==="backup").length<=1,"too many backups "+club+"/"+position);
}
for(const position of positions){
 const group=d.players.filter(x=>x.position===position).sort((a,b)=>a.rank-b.rank);
 check(group.every((p,i)=>p.rank===i+1),"ranking not consecutive "+position);
 check(group.every((p,i)=>i===0||grades.indexOf(group[i-1].tier)<=grades.indexOf(p.tier)),"tier/rank contradiction "+position);
}
const actualTiers=Object.fromEntries(grades.map(g=>[g==="A"?"A0":g==="B"?"B0":g==="C"?"C0":g,d.players.filter(p=>p.tier===g).length]));
check(JSON.stringify(actualTiers)===JSON.stringify(d.meta.tierDistribution),"tierDistribution incorrect");
check(d.players.filter(p=>["S","A+"].includes(p.tier)).length===14,"World Class count inconsistent");
check(d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length===48,"League Top count inconsistent");
check(d.bestXi.length===11&&new Set(d.bestXi.map(p=>p.playerId)).size===11,"XI count/repeats incorrect");
check(d.meta.formation==="3-5-2","Best XI formation is not 3-5-2");
for(const x of d.bestXi){
 const p=d.players.find(y=>y.id===x.playerId);
 check(Boolean(p)&&p.position===x.position,"XI wrong position "+x.playerId);
 check(x.status==="proposed_unapproved","XI approval wrong "+x.playerId);
}
if(errors.length){
 console.error("Serie A 2023-24 structural verification FAILED:\n- "+errors.join("\n- "));
 process.exit(1);
}
console.log(JSON.stringify({ok:true,league:"Serie A",season:"2023-24",qualified:8,players:d.players.length,allPositionRanks:positions.length,tierDistribution:actualTiers,worldClass:14,leagueTop:48,bestXi:d.bestXi.length,standingsPreserved:true,fiveItalianUCL:true,sourceLevel:"one-source current; historical audit incomplete",status:"draft_unapproved"},null,2));
