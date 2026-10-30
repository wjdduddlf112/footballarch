// PL 2000-01 DRAFT structural verification; this is NOT a complete historical source audit.
// Run: node scripts/verify-pl-2000-01-draft.mjs
import {readFileSync} from "node:fs";
const data=JSON.parse(readFileSync("data/premierleague-2000-01.json","utf8"));
const errors=[],eligible={manutd:"UCL",arsenal:"UCL",liverpool:"UCL",leeds:"UEFA Cup",ipswich:"UEFA Cup",chelsea:"UEFA Cup",astonvilla:"Intertoto Cup",newcastle:"Intertoto Cup"};
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const expectedXI={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:2};
const qualifierClubs=new Set(data.qualifiers.map(q=>q.club));
if(data.meta.season!=="2000-01"||data.meta.leagueId!=="premierleague"||data.meta.status!=="draft")errors.push("Wrong season metadata");
if(data.standings.length!==20||data.standings.some((x,i)=>x.rank!==i+1))errors.push("Final league table rows incorrect");
if(qualifierClubs.size!==8||Object.keys(eligible).some(c=>!qualifierClubs.has(c))||data.qualifiers.some(q=>eligible[q.club]!==q.competition))errors.push("Historical actual European entrant mismatch");
if(data.standings.some(x=>(x.competition||null)!==(eligible[x.club]||null)))errors.push("Historical European badges mismatch");
if(data.players.length!==141)errors.push("Expected 141 newly researched nominees");
const seenIDs=new Set(),seenPlayers=new Set(),caps={},teamStarterCount={},ranked={};
for(const p of data.players){
 if(seenIDs.has(p.id))errors.push("Duplicate ID "+p.id);seenIDs.add(p.id);
 const k=p.club+"/"+p.nameOriginal;if(seenPlayers.has(k))errors.push("Duplicate player/club "+k);seenPlayers.add(k);
 if(!qualifierClubs.has(p.club))errors.push("Ineligible club "+k);
 if(!positions.includes(p.position))errors.push("Invalid position "+k);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)errors.push("Missing native/original names "+k);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")||new Date(p.born+"T00:00:00Z").toISOString().slice(0,10)!==p.born)errors.push("Invalid DOB "+k);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>38)errors.push("Missing league starts "+k);
 if(!tiers.includes(p.tier)||p.review!=="draft_unapproved"||!p.assessmentRationale)errors.push("Unreviewed tier "+k);
 if(!Number.isInteger(p.rank)||p.rank<1)errors.push("Unranked candidate "+k);
 (ranked[p.position]??=[]).push(p);
 const cp=p.club+"/"+p.position;caps[cp]=(caps[cp]||0)+1;if(caps[cp]>(["CB","CM","ST"].includes(p.position)?3:2))errors.push("Slot cap "+cp);
 if(p.role==="starter")teamStarterCount[p.club]=(teamStarterCount[p.club]||0)+1;
}
for(const [pos,ps] of Object.entries(ranked)){
 const sorted=ps.sort((a,b)=>a.rank-b.rank);
 if(sorted.some((p,i)=>p.rank!==i+1))errors.push("Position rank gap "+pos);
 if(sorted.some((p,i)=>i&&tiers.indexOf(p.tier)<tiers.indexOf(sorted[i-1].tier)))errors.push("Tier and rank contradiction "+pos);
}
if(Object.keys(eligible).some(c=>teamStarterCount[c]!==11))errors.push("Team starting XI count incorrect");
if(data.bestXi.length!==11||new Set(data.bestXi.map(x=>x.playerId)).size!==11||data.bestXi.some(x=>!seenIDs.has(x.playerId)))errors.push("Best XI invalid refs");
for(const [pos,n] of Object.entries(expectedXI))if(data.bestXi.filter(x=>x.position===pos).length!==n)errors.push("4-4-2 XI slot mismatch "+pos);
if(data.meta.bestXiReview?.status!=="proposed_unapproved")errors.push("Best XI erroneously treated as approved");
const wc=data.players.filter(p=>["S","A+"].includes(p.tier)).length,top=data.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
if(wc!==13||top!==46)errors.push("World Class/League Top Class distribution mismatch");
const result={passed:errors.length===0,scope:"structural_only_not_full_historical_audit",season:"2000-01",candidates:data.players.length,graded:data.players.filter(p=>p.tier).length,ranked:data.players.filter(p=>p.rank!=null).length,worldClass:wc,leagueTopClass:top,bestXI:data.bestXi.length,actualBrowserTest:"NOT_EXECUTED_BY_THIS_SCRIPT",errors};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
