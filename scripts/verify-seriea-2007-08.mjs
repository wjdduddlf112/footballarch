// Validate the structural integrity of Serie A 2007-08 unapproved player shortlist.
// From repo root: node scripts/verify-seriea-2007-08.mjs
// IMPORTANT: passing this check is NOT an independent 3-season subjective player quality verification.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2007-08.json","utf8"));
const errors=[],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const clubs=new Set(d.qualifiers.map(q=>q.club)),ids=new Set(),people=new Set();
if(d.meta.leagueId!=="seriea"||d.meta.season!=="2007-08"||d.meta.qualifyingSeason!=="2008-09")errors.push("incorrect league/season");
if(d.meta.status!=="draft_unapproved")errors.push("season prematurely approved");
if(clubs.size!==8||d.qualifiers.length!==8||d.meta.candidateCount!==d.players.length)errors.push("wrong entrants or candidate count");
for(const p of d.players){
 if(ids.has(p.id))errors.push("duplicate id "+p.id);ids.add(p.id);
 const person=p.nameOriginal+"|"+p.born;if(people.has(person))errors.push("repeated player across clubs "+person);people.add(person);
 if(!clubs.has(p.club)||!positions.includes(p.position)||!tiers.includes(p.tier))errors.push("player club/position/tier "+p.id);
 if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("player identity "+p.id);
 if(p.leagueAppearances===null||p.leagueGoals===null)errors.push("missing current-year apps/goals "+p.id);
 if(p.leagueStarts!==null&&p.leagueStarts>p.leagueAppearances)errors.push("more starts than appearances "+p.id);
 if(p.leagueMinutes!==null&&(p.leagueMinutes<0||p.leagueMinutes>p.leagueAppearances*90+50))errors.push("impossible minutes "+p.id);
 if(!["starter","backup"].includes(p.role)||p.review!=="draft_unapproved")errors.push("player status "+p.id);
 if(["2005-06","2006-07","2007-08"].some(y=>!p.threeSeasonReview?.records?.[y]))errors.push("missing evaluation-year slot "+p.id);
}
for(const cl of clubs){const ps=d.players.filter(p=>p.club===cl);
 if(ps.filter(p=>p.role==="starter").length!==11)errors.push(cl+" not 11 nominal starters");
 for(const pos of positions){if(ps.filter(p=>p.position===pos&&p.role==="backup").length>1)errors.push(cl+"/"+pos+" >1 alternate");}
}
for(const pos of positions){const ranks=d.players.filter(p=>p.position===pos).map(p=>p.rank).sort((a,b)=>a-b);if(ranks.some((r,i)=>r!==i+1))errors.push("noncontiguous position ranking "+pos);}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("Best XI does not have 11 unique players");
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);if(!p||p.position!==x.position||x.status!=="proposed_unapproved")errors.push("invalid Best XI position/status "+x.playerId);}
const numeric={currentAppearances:d.players.filter(p=>p.leagueAppearances!==null).length,currentStarts:d.players.filter(p=>p.leagueStarts!==null).length,currentMinutes:d.players.filter(p=>p.leagueMinutes!==null).length,priorBoth:d.players.filter(p=>["2005-06","2006-07"].every(y=>p.threeSeasonReview.records[y].appearances!==null)).length};
console.log(JSON.stringify({season:d.meta.season,candidates:d.players.length,clubs:clubs.size,passed:!errors.length,errors,numeric,warning:"Structural tests do not prove all 3-season individual form/position quality or live GitHub Pages deployment."},null,2));
if(errors.length)process.exitCode=1;
