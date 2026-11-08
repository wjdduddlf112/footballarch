// Football Archive, Serie A 2002-03 complete draft structural validator.
// Run: node scripts/verify-seriea-2002-03-players.mjs
import {readFileSync} from 'node:fs';
export function validate(d){

const errors=[],warnings=[];
const POS=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const T=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const QUAL=["juventus","inter","milan","lazio","parma","udinese","roma","brescia","perugia"];
const BACK3=new Set(["udinese","roma","brescia","perugia"]);
const BEST442={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:0,LW:1,RW:1,ST:2};
if(d.meta?.season!=="2002-03"||d.meta?.qualifyingSeason!=="2003-04")errors.push("season or following competition mismatch");
if(d.meta?.status!=="draft_unapproved"||d.meta?.playerApprovalUnchanged!==true)errors.push("not draft_unapproved");
if(d.standings?.length!==18)errors.push("2002-03 Serie A expected 18 clubs");
if(d.qualifiers?.length!==9)errors.push("expected nine actual UEFA/Intertoto 2003-04 clubs");
const gotQ=new Set((d.qualifiers||[]).map(q=>q.club));
for(const id of QUAL)if(!gotQ.has(id))errors.push("missing qualifying club "+id);
if(gotQ.has("chievo"))errors.push("Chievo not actually a 2003-04 UEFA entrant");
const ids=new Set(),names=new Set(),groups={},positionRanks={},clubRows={};
for(const p of d.players||[]){
 if(ids.has(p.id))errors.push("duplicate player id "+p.id);ids.add(p.id);
 const name=(p.nameOriginal||p.name).normalize("NFKD").toLowerCase();if(names.has(name))errors.push("duplicate player identity same season "+p.name);names.add(name);
 if(!gotQ.has(p.club))errors.push("nonqualifying player club "+p.name);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("missing original name/DOB/club "+p.id);
 if(!POS.includes(p.position))errors.push("bad current season position "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("bad functional nomination role "+p.id);
 if(!Number.isInteger(p.leagueAppearances)||p.leagueAppearances<1||p.leagueAppearances>34)errors.push("bad season league appearances "+p.id);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>p.leagueAppearances)errors.push("bad season league starts "+p.id);
 if(!Number.isInteger(p.leagueMinutes)||p.leagueMinutes<0||p.leagueMinutes>3060)errors.push("bad 2002-03 minutes "+p.id);
 if(p.leagueGoals!=null&&(!Number.isInteger(p.leagueGoals)||p.leagueGoals<0))errors.push("bad goal count "+p.id);
 if(p.leagueAssists!=null&&(!Number.isInteger(p.leagueAssists)||p.leagueAssists<0))errors.push("bad assists count "+p.id);
 if(!T.includes(p.tier))errors.push("missing/unrecognized tier "+p.id);
 if(!Number.isInteger(p.rank)||p.rank<1)errors.push("missing positional rank "+p.id);
 if(p.review!=="draft_unapproved")errors.push("player approved prematurely "+p.id);
 if(!p.threeSeasonReview?.records||["2000-01","2001-02","2002-03"].some(y=>!p.threeSeasonReview.records[y]))errors.push("missing three-year evidence structure "+p.id);
 if(!p.threeSeasonReview?.records?.["2002-03"]||p.threeSeasonReview.records["2002-03"].appearances!==p.leagueAppearances)errors.push("current year record inconsistency "+p.id);
 if(!Array.isArray(p.sources)||!p.sources.length)warnings.push("no per-player evidence source "+p.name);
 (groups[p.club+"/"+p.position]??=[]).push(p);
 (positionRanks[p.position]??=[]).push(p);
 (clubRows[p.club]??=[]).push(p);
}
for(const club of QUAL){
 const c=clubRows[club]||[];
 if(c.filter(p=>p.role==="starter").length!==11)errors.push("not exactly 11 functional starters "+club);
 const ps=Object.entries(groups).filter(([k])=>k.startsWith(club+"/"));
 for(const [key,arr] of ps){
   const pos=key.split("/")[1];
   const cap=pos==="CB"?(BACK3.has(club)?4:3):["CM","ST"].includes(pos)?3:2;
   if(arr.length>cap)errors.push("position candidate cap exceeded "+key+": "+arr.length+">"+cap);
   if(arr.filter(p=>p.role==="backup").length>1)errors.push("more than 1 backup "+key);
 }
}
for(const [pos,arr] of Object.entries(positionRanks)){
 arr.sort((a,b)=>a.rank-b.rank);
 for(let i=0;i<arr.length;i++){
   if(arr[i].rank!==i+1)errors.push("nonconsecutive rank "+pos+" "+arr[i].rank);
   if(i>0&&T.indexOf(arr[i-1].tier)>T.indexOf(arr[i].tier))errors.push("position rank tier inversion "+pos+" "+arr[i].name);
 }
}
const x=d.bestXi||[],xc={};const used=new Set();
if(x.length!==11)errors.push("Best XI wrong size "+x.length);
for(const a of x){if(used.has(a.playerId))errors.push("duplicate XI player "+a.playerId);used.add(a.playerId);const p=d.players.find(p=>p.id===a.playerId);if(!p||p.position!==a.position)errors.push("XI player missing/current-position mismatch "+a.playerId);xc[a.position]=(xc[a.position]||0)+1;if(a.status!=="proposed_unapproved")errors.push("XI entry not draft "+a.playerId);}
for(const pos of POS)if((xc[pos]||0)!==(BEST442[pos]||0))errors.push("XI 4-4-2 role count "+pos+": "+xc[pos]);
if(d.meta?.formation!=="4-4-2"||d.meta?.bestXiReview?.status!=="proposed_unapproved")errors.push("BestXI formation or approval status");
if(d.meta?.candidateCount!==d.players.length)errors.push("metadata count mismatch");
const priorNumeric=d.players.filter(p=>["2000-01","2001-02"].every(y=>Number.isInteger(p.threeSeasonReview?.records?.[y]?.appearances))).length;
if(priorNumeric<d.players.length)warnings.push("Both historical 2000-01 and 2001-02 league appearances numeric only "+priorNumeric+"/"+d.players.length);
const conflicts=d.meta?.statDiscrepancies||[];
if(conflicts.length)warnings.push("Unresolved league-stat source conflicts: "+conflicts.map(x=>x.name+" ("+x.field+")").join("; "));
warnings.push("Season-long player positions and 2000-01/2001-02/2002-03 quality review not exhaustively independently verified; league modal formation not measured, live browser DOM not tested.");
return{passed:errors.length===0,errors,warnings,season:"2002-03",qualifyingSeason:"2003-04",clubs:gotQ.size,candidates:d.players.length,graded:d.players.filter(p=>p.tier).length,worldClass:d.players.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,bothHistoricalYearsNumeric:priorNumeric,bestXI:x.length,allCurrentLeagueNumerics:d.players.every(p=>Number.isInteger(p.leagueAppearances)&&Number.isInteger(p.leagueStarts)&&Number.isInteger(p.leagueMinutes)),starterSlots:Object.fromEntries(QUAL.map(c=>[c,(clubRows[c]||[]).filter(p=>p.role==="starter").length])),positionCounts:Object.fromEntries(POS.map(k=>[k,positionRanks[k]?.length||0]))};

}
if(process.argv[1]&&new URL(import.meta.url).pathname===process.argv[1]){const d=JSON.parse(readFileSync('data/seriea-2002-03.json','utf8'));const r=validate(d);console.log(JSON.stringify(r,null,2));if(!r.passed)process.exitCode=1;}
