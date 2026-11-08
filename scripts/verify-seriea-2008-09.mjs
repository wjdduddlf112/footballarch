// Serie A 2008-09 DRAFT structural integrity check. Run at repository root:
// node scripts/verify-seriea-2008-09.mjs
// Passing proves only data constraints, NOT full historical 3-season subjective personal-form verification or live Pages UI.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2008-09.json","utf8"));
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],clubs=new Set(d.qualifiers.map(q=>q.club)),ids=new Set(),people=new Set();
if(d.meta.status!=="draft_unapproved"||d.meta.season!=="2008-09"||d.meta.qualifyingSeason!=="2009-10"||d.meta.leagueId!=="seriea")errors.push("metadata invalid");
if(clubs.size!==7||d.qualifiers.length!==7||d.meta.candidateCount!==d.players.length)errors.push("qualification/candidate count invalid");
for(const p of d.players){
 if(ids.has(p.id))errors.push("duplicate player id "+p.id);ids.add(p.id);
 const person=p.nameOriginal+"|"+p.born;if(people.has(person))errors.push("duplicate physical season player "+person);people.add(person);
 if(!clubs.has(p.club)||!positions.includes(p.position)||!tiers.includes(p.tier))errors.push("eligible team/position/tier "+p.id);
 if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("mandatory name/DOB "+p.id);
 if(p.leagueAppearances===null||p.leagueStarts===null||p.leagueMinutes===null)errors.push("unverified current games/starts/minutes "+p.id);
 if(p.leagueStarts>p.leagueAppearances||p.leagueMinutes<0||p.leagueMinutes>90*p.leagueAppearances+50)errors.push("stats impossible "+p.id);
 if(p.role==="backup"&&p.leagueAppearances===0)errors.push("backup no match appearance "+p.id);
 if(!["starter","backup"].includes(p.role)||p.review!=="draft_unapproved")errors.push("player approval or role "+p.id);
 if(["2006-07","2007-08","2008-09"].some(y=>!p.threeSeasonReview?.records?.[y]))errors.push("3-season coverage slot "+p.id);
}
for(const c of clubs){
 const roster=d.players.filter(p=>p.club===c);
 if(roster.filter(p=>p.role==="starter").length!==11)errors.push("11 starter rule "+c);
 for(const pos of positions)if(roster.filter(p=>p.position===pos&&p.role==="backup").length>1)errors.push("max one backup "+c+pos);
}
for(const pos of positions){
 const sorted=d.players.filter(p=>p.position===pos).map(p=>p.rank).sort((a,b)=>a-b);
 if(sorted.some((v,i)=>v!==i+1))errors.push("position rank gaps "+pos);
}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("BestXI unique 11");
for(const slot of d.bestXi){const p=d.players.find(p=>p.id===slot.playerId);if(!p||slot.position!==p.position||slot.status!=="proposed_unapproved")errors.push("BestXI wrong position/status "+slot.playerId);}
if(d.candidateAudit.worldClass!==d.players.filter(p=>["S","A+"].includes(p.displayTier)).length)errors.push("world class count");
if(d.candidateAudit.leagueTop!==d.players.filter(p=>["S","A+","A0","A-"].includes(p.displayTier)).length)errors.push("league top count");
const result={pass:errors.length===0,errors,candidateCount:d.players.length,clubCount:clubs.size,currentAppearances:d.players.filter(p=>p.leagueAppearances!==null).length,currentStarts:d.players.filter(p=>p.leagueStarts!==null).length,currentMinutes:d.players.filter(p=>p.leagueMinutes!==null).length,priorBothNumeric:d.players.filter(p=>["2006-07","2007-08"].every(y=>p.threeSeasonReview.records[y].appearances!==null)).length,notes:"Standalone Node check cannot certify 3-year qualitative assessment or actual Pages browser deployment"};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
