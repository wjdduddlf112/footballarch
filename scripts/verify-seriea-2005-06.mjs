// Validate Serie A 2005-06 provisional season JSON without promoting it to historical verified.
// Run from repository root: node scripts/verify-seriea-2005-06.mjs
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2005-06.json","utf8"));
const errors=[],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const eligible=new Set(d.qualifiers.map(q=>q.club)),ids=new Set();
if(d.meta.leagueId!=="seriea"||d.meta.season!=="2005-06"||d.meta.qualifyingSeason!=="2006-07")errors.push("wrong season metadata");
if(d.meta.status!=="draft_unapproved")errors.push("not unapproved draft");
if(eligible.size!==7||d.qualifiers.length!==7)errors.push("wrong UEFA entrant count");
if(d.meta.candidateCount!==d.players.length)errors.push("candidate count mismatch");
for(const p of d.players){
 if(ids.has(p.id))errors.push("duplicate player ID "+p.id);
 ids.add(p.id);
 if(!eligible.has(p.club))errors.push("ineligible club "+p.id);
 if(!positions.includes(p.position))errors.push("invalid position "+p.id);
 if(!grades.includes(p.tier))errors.push("invalid grade "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("invalid player role "+p.id);
 if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("missing player identity or DOB "+p.id);
 if(p.leagueAppearances===null||p.leagueStarts===null)errors.push("no current year games/starts "+p.id);
 if(p.leagueStarts>p.leagueAppearances)errors.push("starts exceeds appearances "+p.id);
 if(p.leagueMinutes!==null&&p.leagueMinutes>p.leagueAppearances*90+50)errors.push("minutes exceeds logical total "+p.id);
 if(!["2003-04","2004-05","2005-06"].every(y=>p.threeSeasonReview?.records?.[y]))errors.push("missing 3-year record slot "+p.id);
 if(p.review!=="draft_unapproved")errors.push("player unexpectedly approved "+p.id);
}
for(const cl of eligible){
 const ps=d.players.filter(p=>p.club===cl);
 if(ps.filter(p=>p.role==="starter").length!==11)errors.push("club starter count "+cl);
 for(const pos of positions){
  const members=ps.filter(p=>p.position===pos);
  if(members.filter(p=>p.role==="backup").length>1)errors.push("multiple backups "+cl+" "+pos);
  if(pos==="CB"&&members.filter(p=>p.role==="starter").length>(cl==="livorno"?3:2))errors.push("CB starter count "+cl);
 }
}
for(const pos of positions){
 const ranks=d.players.filter(p=>p.position===pos).map(p=>p.rank).sort((a,b)=>a-b);
 if(ranks.some((n,i)=>n!==i+1))errors.push("not contiguous position ranks "+pos);
}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("XI number or duplicate");
for(const x of d.bestXi){
 const p=d.players.find(y=>y.id===x.playerId);
 if(!p||p.position!==x.position)errors.push("XI slot mismatch "+x.playerId);
 if(x.status!=="proposed_unapproved")errors.push("XI status unexpectedly approved "+x.playerId);
}
const gradeCounts=Object.fromEntries(grades.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
if(Object.values(gradeCounts).reduce((a,b)=>a+b,0)!==d.players.length)errors.push("tier count inconsistency");
const counts={candidates:d.players.length,clubs:eligible.size,currentApps:d.players.filter(p=>p.leagueAppearances!=null).length,currentStarts:d.players.filter(p=>p.leagueStarts!=null).length,currentMinutes:d.players.filter(p=>p.leagueMinutes!=null).length,bothPriorNumeric:d.players.filter(p=>["2003-04","2004-05"].every(y=>p.threeSeasonReview.records[y].appearances!==null)).length,worldClass:d.players.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,gradeCounts};
console.log(JSON.stringify({season:d.meta.season,structuralPass:!errors.length,errors,counts,warnings:["No verification of 3-season independent form or qualitative grade/rank completeness.","Source disagreements in historic statistics are not automatically settled by this script.","Actual GitHub Pages/browser testing must be performed independently."]},null,2));
if(errors.length)process.exitCode=1;
