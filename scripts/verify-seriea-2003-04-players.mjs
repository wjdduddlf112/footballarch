// Football Archive Serie A 2003-04 historical candidate and XI structural DRAFT validator.
// Run from repository root: node scripts/verify-seriea-2003-04-players.mjs
import {readFileSync} from 'node:fs';
export function validate(d){

const errors=[],warnings=[];
const POS=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],TIERS=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const eligible=["milan","roma","juventus","inter","parma","lazio","udinese"];
const expectedXI={GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,CAM:1,LW:0,RW:0,ST:2};
const BACK3=new Set(["roma","udinese"]);
if(d.meta?.season!=="2003-04"||d.meta?.qualifyingSeason!=="2004-05")errors.push("season or next UEFA year mismatch");
if(d.meta?.status!=="draft_unapproved"||d.meta?.playerApprovalUnchanged!==true)errors.push("Unexpected approval state");
if(d.standings?.length!==18)errors.push("Expected 18 Serie A clubs and standings");
if(d.qualifiers?.length!==7)errors.push("Expected 7 actual next European clubs in 2004-05");
const qualified=new Set((d.qualifiers||[]).map(q=>q.club));
for(const id of eligible)if(!qualified.has(id))errors.push("Missing actual 2004-05 UEFA participant "+id);
for(const id of ["sampdoria","chievo","brescia","perugia"])if(qualified.has(id))errors.push("False Intertoto/unqualified club "+id);
const ids=new Set(),names=new Set(),groups={},ranks={},clubs={};
for(const p of d.players||[]){
 if(ids.has(p.id))errors.push("Duplicate ID "+p.id);ids.add(p.id);
 const n=p.nameOriginal||p.name;if(names.has(n))errors.push("Repeated same-season person across two clubs "+n);names.add(n);
 if(!qualified.has(p.club))errors.push("Player of unqualified club "+p.name);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("Missing player identity/name/DOB "+p.id);
 if(!POS.includes(p.position))errors.push("Unknown current-year position "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("Invalid club nomination role "+p.id);
 if(!Number.isInteger(p.leagueAppearances)||p.leagueAppearances<1||p.leagueAppearances>34)errors.push("Invalid current Serie A games "+p.id);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>p.leagueAppearances)errors.push("Invalid current Serie A starts "+p.id);
 if(!Number.isInteger(p.leagueMinutes)||p.leagueMinutes<0||p.leagueMinutes>3060)errors.push("Invalid current Serie A minutes "+p.id);
 if(p.leagueGoals!=null&&(!Number.isInteger(p.leagueGoals)||p.leagueGoals<0))errors.push("Invalid league goals "+p.id);
 if(p.leagueAssists!=null&&(!Number.isInteger(p.leagueAssists)||p.leagueAssists<0))errors.push("Invalid league assists "+p.id);
 if(!TIERS.includes(p.tier))errors.push("Unrecognized/missing grade "+p.id);
 if(!Number.isInteger(p.rank)||p.rank<1)errors.push("Unranked/invalid position rank "+p.id);
 if(p.review!=="draft_unapproved")errors.push("Approved player found "+p.id);
 if(!p.threeSeasonReview?.records||["2001-02","2002-03","2003-04"].some(y=>!p.threeSeasonReview.records[y]))errors.push("Missing 3-season evidence skeleton "+p.id);
 if(p.threeSeasonReview?.records?.["2003-04"]?.appearances!==p.leagueAppearances)errors.push("Current-year record discrepancy "+p.id);
 if(!p.sources?.length)warnings.push("Player lacks source "+p.name);
 (groups[p.club+"/"+p.position]??=[]).push(p);(clubs[p.club]??=[]).push(p);(ranks[p.position]??=[]).push(p);
}
for(const id of eligible){
 const roster=clubs[id]||[];
 if(roster.filter(p=>p.role==="starter").length!==11)errors.push("Nominal starter count not 11: "+id);
 for(const [key,group] of Object.entries(groups).filter(([k])=>k.startsWith(id+"/"))){
  const pos=key.split("/")[1];
  const cap=pos==="CB"?(BACK3.has(id)?4:3):["CM","ST"].includes(pos)?3:2;
  if(group.length>cap)errors.push("More candidates than position cap "+key+" "+group.length+" > "+cap);
  if(group.filter(p=>p.role==="backup").length>1)errors.push("More than one backup "+key);
 }
}
for(const [pos,players] of Object.entries(ranks)){
 players.sort((a,b)=>a.rank-b.rank);
 for(let i=0;i<players.length;i++){
  if(players[i].rank!==i+1)errors.push("Nonconsecutive positional order "+pos+" "+players[i].rank);
  if(i>0&&TIERS.indexOf(players[i-1].tier)>TIERS.indexOf(players[i].tier))errors.push("Tier inversion within position "+pos+" "+players[i].nameOriginal);
 }
}
const x=d.bestXi||[],seenXI=new Set(),nXI={};
if(x.length!==11)errors.push("Best XI must have exactly 11 players");
for(const pick of x){
 if(seenXI.has(pick.playerId))errors.push("Repeated Best XI player ID "+pick.playerId);
 seenXI.add(pick.playerId);
 const p=d.players.find(p=>p.id===pick.playerId);
 if(!p||p.position!==pick.position)errors.push("Best XI not eligible/original position "+pick.playerId);
 if(pick.status!=="proposed_unapproved")errors.push("Best XI early approved "+pick.playerId);
 nXI[pick.position]=(nXI[pick.position]||0)+1;
}
for(const pos of POS)if((nXI[pos]||0)!==(expectedXI[pos]||0))errors.push("Best XI 4-3-1-2 slot mismatch "+pos);
if(d.meta?.formation!=="4-3-1-2"||d.meta?.bestXiReview?.status!=="proposed_unapproved")errors.push("Best XI formation/status mismatch");
if(d.meta?.candidateCount!==d.players?.length)errors.push("Metadata candidate count mismatch");
const bothNumeric=d.players.filter(p=>["2001-02","2002-03"].every(y=>Number.isInteger(p.threeSeasonReview.records[y]?.appearances))).length;
if(bothNumeric!==d.meta?.priorYearEvidence?.bothPreviousSeasonsNumericApps)errors.push("Prior two-season numeric stat metadata mismatch");
if(bothNumeric<d.players.length)warnings.push("Only "+bothNumeric+"/"+d.players.length+" have numeric appearances for both 2001-02 and 2002-03; many prior linked numbers came from previous unapproved draft and are not independently checked.");
if(d.meta?.statDiscrepancies?.length)warnings.push("Unresolved historical data source discrepancies: "+d.meta.statDiscrepancies.map(q=>q.name+" "+q.field).join("; "));
warnings.push("Full three-year independently signed off individual performance and 34-match role frequency incomplete; league-wide modal formation not statistically audited and live browser DOM not tested.");
return{passed:errors.length===0,errors,warnings,season:d.meta.season,qualifyingYear:d.meta.qualifyingSeason,clubs:qualified.size,playerCandidates:d.players?.length,graded:d.players.filter(p=>p.tier).length,worldClass:d.players.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,priorBothAppearancesNumeric:bothNumeric,xi:x.length,allNomineeCurrentStats:d.players.every(p=>Number.isInteger(p.leagueAppearances)&&Number.isInteger(p.leagueStarts)&&Number.isInteger(p.leagueMinutes)),startersPerClub:Object.fromEntries(eligible.map(id=>[id,clubs[id]?.filter(p=>p.role==="starter").length])),rankedPositions:Object.fromEntries(POS.map(pos=>[pos,ranks[pos]?.length||0]))};

}
if(process.argv[1]&&new URL(import.meta.url).pathname===process.argv[1]){const d=JSON.parse(readFileSync('data/seriea-2003-04.json','utf8'));const result=validate(d);console.log(JSON.stringify(result,null,2));if(!result.passed)process.exitCode=1;}
