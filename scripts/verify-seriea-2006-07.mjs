// Serie A 2006-07 DRAFT structural validator, run from repository root with Node.js.
// Passing this test does NOT certify historical quality, 3-year peer comparisons or actual browser UI.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2006-07.json","utf8"));
const errors=[],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const clubs=new Set(d.qualifiers.map(q=>q.club)),ids=new Set(),persons=new Set();
if(d.meta.status!=="draft_unapproved"||d.meta.season!=="2006-07"||d.meta.qualifyingSeason!=="2007-08")errors.push("metadata status/season");
if(clubs.size!==8||d.qualifiers.length!==8||d.meta.candidateCount!==d.players.length)errors.push("qualification or total");
for(const p of d.players){
 if(ids.has(p.id))errors.push("duplicate ID "+p.id);ids.add(p.id);
 const person=p.nameOriginal+"|"+p.born;if(persons.has(person))errors.push("duplicate season individual "+person);persons.add(person);
 if(!clubs.has(p.club))errors.push("unqualified player "+p.id);
 if(!positions.includes(p.position)||!grades.includes(p.tier))errors.push("position/tier "+p.id);
 if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("identity "+p.id);
 if(["leagueAppearances","leagueStarts","leagueMinutes"].some(k=>p[k]===null))errors.push("missing current numeric "+p.id);
 if(p.leagueStarts>p.leagueAppearances||p.leagueMinutes>90*p.leagueAppearances+50)errors.push("start/min exceeds actual appearance "+p.id);
 if(p.review!=="draft_unapproved")errors.push("premature approval "+p.id);
 if(["2004-05","2005-06","2006-07"].some(y=>!p.threeSeasonReview?.records?.[y]))errors.push("missing 3-year slot "+p.id);
}
for(const c of clubs){const ps=d.players.filter(p=>p.club===c);if(ps.filter(p=>p.role==="starter").length!==11)errors.push(c+" nominal starters not 11");for(const pos of positions){if(ps.filter(p=>p.position===pos&&p.role==="backup").length>1)errors.push(c+" multiple alternates in "+pos);}}
for(const pos of positions){const ranks=d.players.filter(p=>p.position===pos).map(p=>p.rank).sort((a,b)=>a-b);if(ranks.some((n,i)=>n!==i+1))errors.push("not contiguous "+pos);}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("invalid XI count or duplicates");
for(const slot of d.bestXi){const p=d.players.find(x=>x.id===slot.playerId);if(!p||p.position!==slot.position||slot.status!=="proposed_unapproved")errors.push("XI invalid role/status "+slot.playerId);}
const counts={players:d.players.length,clubs:clubs.size,currentNumericComplete:d.players.filter(p=>p.leagueAppearances!=null&&p.leagueStarts!=null&&p.leagueMinutes!=null).length,bothPriorNumeric:d.players.filter(p=>["2004-05","2005-06"].every(y=>p.threeSeasonReview.records[y].appearances!=null)).length,world:d.players.filter(p=>["S","A+"].includes(p.tier)).length,top:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length};
console.log(JSON.stringify({structuralPass:errors.length===0,errors,counts,notice:"Unapproved grades and ranks are not independently verified 3-year qualitative assessments. Full matchwise positional and GitHub Pages browser audits are separate."},null,2));
if(errors.length)process.exitCode=1;
