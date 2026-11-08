// Serie A 1999-00 historical DRAFT structural validator. Run: node scripts/verify-seriea-1999-00-players.mjs
import {readFileSync} from "node:fs";
export function validate(d){
 const errors=[],warnings=[];
 const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
 if(d?.meta?.season!=="1999-00"||d.meta?.qualifyingSeason!=="2000-01")errors.push("Season/qualification mismatch");
 if(d?.meta?.status!=="draft_unapproved")errors.push("Draft status missing");
 if(!Array.isArray(d.qualifiers)||d.qualifiers.length!==9)errors.push("Expected 9 actual European entrant clubs");
 if(!Array.isArray(d.standings)||d.standings.length!==18)errors.push("Expected 18 Serie A league standings");
 if(!Array.isArray(d.players)||!d.players.length)errors.push("No players");
 const clubIds=new Set(d.qualifiers.map(q=>q.club));
 const seen=new Set(),namePos=new Set(),byPos={};
 const rankByPos={};
 for(const p of d.players||[]){
  if(seen.has(p.id))errors.push("Duplicate ID "+p.id);seen.add(p.id);
  if(!clubIds.has(p.club))errors.push("Unqualified club "+p.name);
  if(!p.born||!/^\d{4}-\d\d-\d\d$/.test(p.born))errors.push("Invalid DOB "+p.name);
  if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)errors.push("Missing name/club "+p.id);
  if(!positions.includes(p.position))errors.push("Invalid pos "+p.name);
  if(!["starter","backup"].includes(p.role))errors.push("Invalid candidate role "+p.name);
  if(!Number.isInteger(p.leagueAppearances)||p.leagueAppearances<1||p.leagueAppearances>34)errors.push("Invalid appearances "+p.name);
  if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>p.leagueAppearances)errors.push("Invalid starts "+p.name);
  if(p.leagueMinutes!=null&&(p.leagueMinutes<0||p.leagueMinutes>34*100))errors.push("Invalid minutes "+p.name);
  if(p.tier!==null&&!tiers.includes(p.tier))errors.push("Invalid tier "+p.name);
  if(p.tier===null&&p.rank!==null)errors.push("Unrated player has rank "+p.name);
  if(p.rank!=null){if(!Number.isInteger(p.rank)||p.rank<1)errors.push("Invalid rank "+p.name);(rankByPos[p.position]??=[]).push(p.rank);}
  const key=p.nameOriginal.toLowerCase();if(namePos.has(key))errors.push("Duplicate player across clubs "+p.name);namePos.add(key);
  (byPos[p.club]??={})[p.position]=(byPos[p.club]?.[p.position]??0)+1;
 }
 for(const [pos,arr] of Object.entries(rankByPos)){arr.sort((a,b)=>a-b);if(arr.some((rank,index)=>rank!==index+1))errors.push("Nonconsecutive position ranks "+pos);}
 for(const [club,roster] of Object.entries(byPos)){
  const is3cb=["juventus","milan","inter","parma","roma","fiorentina","udinese"].includes(club);
  for(const [pos,num] of Object.entries(roster)){
   const limit=pos==="CB"?(is3cb?4:3):["CM","ST"].includes(pos)?3:2;
   if(num>limit)warnings.push("Slot-cap candidate review "+club+"/"+pos+": "+num+" > "+limit);
  }
 }
 const expected={GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,CAM:1,ST:2};
 if(!Array.isArray(d.bestXi)||d.bestXi.length!==11)errors.push("BestXI not 11");
 const usedBest=new Set(),counts={};for(const pick of d.bestXi||[]){
  if(usedBest.has(pick.playerId))errors.push("Duplicate BestXI ID "+pick.playerId);usedBest.add(pick.playerId);
  const p=d.players?.find(x=>x.id===pick.playerId);if(!p||p.position!==pick.position)errors.push("BestXI position mismatch "+pick.playerId);
  counts[pick.position]=(counts[pick.position]||0)+1;
 }
 if(d.meta?.formation!=="4-3-1-2"||positions.some(pos=>(counts[pos]||0)!==(expected[pos]||0)))errors.push("Best XI not valid 4-3-1-2 slots");
 const graded=(d.players||[]).filter(p=>p.tier!==null).length;
 const unrated=(d.players||[]).filter(p=>p.tier===null).length;
 if(d.meta?.candidateCount!==d.players?.length)errors.push("Candidate count meta mismatch");
 if(graded+unrated!==d.players?.length)errors.push("Tier sum mismatch");
 const priorNumeric=(d.players||[]).filter(p=>["1997-98","1998-99"].every(s=>p.threeSeasonReview?.records?.[s]?.appearances!=null)).length;
 if(priorNumeric<d.players?.length)warnings.push("Full individual three-season independent evidence INCOMPLETE: numerical data for both prior seasons in "+priorNumeric+"/"+d.players.length);
 if(unrated)warnings.push("Unevaluated candidates: "+unrated);
 warnings.push("Match-by-match positional audit, evidence-based grade review, official UEFA historical audit and interactive browser UI verification must be tracked separately.");
 return {pass:errors.length===0,errors,warnings,players:d.players?.length,clubs:clubIds.size,graded,unrated,worldClass:(d.players||[]).filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:(d.players||[]).filter(p=>["S","A+","A","A-"].includes(p.tier)).length,bestXI:d.bestXi?.length,priorNumeric};

}
const direct=process.argv[1]&&new URL(import.meta.url).pathname===process.argv[1];
if(direct){const d=JSON.parse(readFileSync("data/seriea-1999-00.json","utf8"));const result=validate(d);console.log(JSON.stringify(result,null,2));if(!result.pass)process.exitCode=1;}
