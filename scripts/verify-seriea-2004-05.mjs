// Standalone audit for the explicitly unapproved Serie A 2004-05 candidate draft.
// Usage from repository root: node scripts/verify-seriea-2004-05.mjs
import { readFileSync } from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2004-05.json","utf8"));
const errors=[],notices=[];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const eligible=new Set(d.qualifiers.map(q=>q.club));
if(d.meta.league!=="Serie A"||d.meta.season!=="2004-05"||d.meta.qualifyingSeason!=="2005-06")errors.push("season/league metadata");
if(d.meta.status!=="draft_unapproved")errors.push("finalized without user consent");
if(eligible.size!==8||d.qualifiers.length!==8)errors.push("eligible club count");
if(d.players.length!==d.meta.candidateCount)errors.push("candidate count mismatch");
const uniq=new Set();
for(const p of d.players){
 if(uniq.has(p.id))errors.push("duplicate player id "+p.id);uniq.add(p.id);
 if(!eligible.has(p.club))errors.push("unqualified club "+p.id);
 if(!positions.includes(p.position))errors.push("invalid position "+p.id);
 if(!tiers.includes(p.tier))errors.push("invalid tier "+p.id);
 if(!p.nameOriginal||!p.nameKo||!/^\d{4}-\d{2}-\d{2}$/.test(p.born))errors.push("identity fields "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("invalid role "+p.id);
 if(p.review!=="draft_unapproved")errors.push("player approval state "+p.id);
 if(p.leagueAppearances!=null&&p.leagueStarts!=null&&p.leagueStarts>p.leagueAppearances)errors.push("starts > games "+p.id);
 if(p.leagueAppearances!=null&&p.leagueMinutes!=null&&p.leagueMinutes>90*p.leagueAppearances+90)errors.push("minutes > games "+p.id);
 if(!p.threeSeasonReview||["2002-03","2003-04","2004-05"].some(s=>!p.threeSeasonReview.records[s]))errors.push("missing 3 season slot "+p.id);
}
for(const club of eligible){
 const ps=d.players.filter(p=>p.club===club);
 if(ps.filter(p=>p.role==="starter").length!==11)errors.push("not 11 nominal starters: "+club);
 for(const pos of positions){
   const members=ps.filter(p=>p.position===pos);
   if(members.filter(p=>p.role==="backup").length>1)errors.push("more than one role alternate: "+club+"/"+pos);
   if(pos==="CB"&&members.filter(p=>p.role==="starter").length>(club==="udinese"?3:2))errors.push("too many CB starters: "+club);
 }
}
for(const pos of positions){
 const ps=d.players.filter(p=>p.position===pos),ranked=ps.map(p=>p.rank).sort((a,b)=>a-b);
 if(ranked.some((v,i)=>v!==i+1))errors.push("not contiguous positional ranks "+pos);
}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("Best XI size/duplicate");
for(const slot of d.bestXi){
 const p=d.players.find(x=>x.id===slot.playerId);
 if(!p||p.position!==slot.position)errors.push("Best XI position mismatch "+slot.playerId);
 if(slot.status!=="proposed_unapproved")errors.push("Best XI wrongly approved "+slot.playerId);
}
const n=d.players.length;
const covered=d.players.filter(p=>p.leagueAppearances!==null).length;
const priorBoth=d.players.filter(p=>["2002-03","2003-04"].every(s=>p.threeSeasonReview.records[s]?.appearances!==null)).length;
const counts=Object.fromEntries(tiers.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
if(Object.values(counts).reduce((a,b)=>a+b,0)!==n)errors.push("grade sums not all players");
const result={season:"2004-05",qualifiedClubs:eligible.size,candidates:n,currentLeagueAppearanceRecords:covered,previous2SeasonsNumericRecords:priorBoth,tierCounts:counts,errors,notices:[
 "A passing structural test does NOT certify the historical accuracy of individual positions, stats, grades or Best XI.",
 "Player-by-player 3-season independent historical qualitative verification is still pending.",
 "Actual GitHub Pages browser validation must be reported separately."
]};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
