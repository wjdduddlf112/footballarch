// Premier League 1999-00 DRAFT data structural gate (not a historical fact audit).
// Run: node scripts/verify-pl-1999-00-draft.mjs
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-1999-00.json","utf8"));
const errors=[],expected=["manutd","arsenal","leeds","liverpool","chelsea","leicester","astonvilla","bradford"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=new Set(["S","A+","A","A-","B+","B","B-","C+","C","C-","D"]);
const expectedEurope={manutd:"UCL",arsenal:"UCL",leeds:"UCL",liverpool:"UEFA Cup",chelsea:"UEFA Cup",leicester:"UEFA Cup",astonvilla:"Intertoto Cup",bradford:"Intertoto Cup"};
if(d.meta?.leagueId!=="premierleague"||d.meta?.season!=="1999-00"||d.meta?.status!=="draft")errors.push("Invalid season, league or review status");
if(d.players?.length!==125)errors.push("Expected 125 provisional research candidates");
if(d.standings?.length!==20||d.standings.some((r,i)=>r.rank!==i+1))errors.push("Historical PL league table invalid");
const qualifiers=new Set(d.qualifiers.map(q=>q.club));
if(qualifiers.size!==8||expected.some(k=>!qualifiers.has(k))||d.qualifiers.some(q=>expectedEurope[q.club]!==q.competition))errors.push("European entrant list incorrect");
if(d.standings.some(r=>(r.competition||null)!==(expectedEurope[r.club]||null)))errors.push("Standings European badges inconsistent");
const clubIds=new Set(d.clubs.map(c=>c.id));
const playerIds=new Set(),nameClubKeys=new Set(),counts={},posRanks={};
for(const p of d.players){
 if(playerIds.has(p.id))errors.push("Duplicate player ID "+p.id);playerIds.add(p.id);
 const nc=p.club+":"+p.nameOriginal;
 if(nameClubKeys.has(nc))errors.push("Duplicate player name/club "+nc);nameClubKeys.add(nc);
 if(!qualifiers.has(p.club)||!clubIds.has(p.club))errors.push("Nonqualifying or missing player club "+p.id);
 if(!positions.includes(p.position))errors.push("Bad position "+p.id);
 if(!p.name||!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)errors.push("Missing names "+p.id);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")||new Date(p.born+"T00:00:00Z").toISOString().slice(0,10)!==p.born)errors.push("Bad DOB "+p.id);
 if(p.tier!=null&&!grades.has(p.tier))errors.push("Bad tier "+p.id);
 if(p.tier==null&&p.review!=="evidence_pending")errors.push("Unrated player not pending "+p.id);
 if(p.tier!=null&&p.review!=="draft_unapproved")errors.push("Rated player not draft "+p.id);
 if(p.rank!=null){(posRanks[p.position]??=[]).push(p.rank);if(!Number.isInteger(p.rank)||p.rank<1)errors.push("Invalid rank "+p.id);}
 const k=p.club+"/"+p.position;counts[k]=(counts[k]||0)+1;const cap=["CB","CM","ST"].includes(p.position)?3:2;if(counts[k]>cap)errors.push("Position cap "+k);
}
for(const [pos,ranks] of Object.entries(posRanks))if(new Set(ranks).size!==ranks.length)errors.push("Duplicate rank within "+pos);
if(d.players.filter(p=>p.tier!=null).length!==23||d.players.filter(p=>p.rank!=null).length!==13)errors.push("Partial draft tier/rank checkpoint changed");
if(d.bestXi?.length!==11||new Set(d.bestXi.map(p=>p.playerId)).size!==11||d.bestXi.some(x=>!playerIds.has(x.playerId)||!positions.includes(x.position)))errors.push("Best XI invalid references");
if(d.meta?.bestXiReview?.status!=="proposed_unapproved")errors.push("Best XI not marked proposed");
const slotCount={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:2};
for(const [position,count] of Object.entries(slotCount))if(d.bestXi.filter(p=>p.position===position).length!==count)errors.push("Best XI not 4-4-2 at "+position);
const result={passed:errors.length===0,scope:"structural_validation_only",historicalIndividualEvidence:"partially_pending",browserValidation:"NOT_TESTED",players:d.players.length,provisionalGrades:d.players.filter(p=>p.tier).length,unrated:d.players.filter(p=>!p.tier).length,provisionalRanks:d.players.filter(p=>p.rank!=null).length,bestXi:d.bestXi.length,errors};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
