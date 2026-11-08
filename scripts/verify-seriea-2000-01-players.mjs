// 2000-01 Serie A player and Best XI DRAFT validator. Use: node scripts/verify-seriea-2000-01-players.mjs
import {readFileSync} from "node:fs";
export function validate(d){

const errors=[],warnings=[];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const requiredXI={GK:1,CB:3,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:0,RW:0,ST:2};
if(d.meta?.season!=="2000-01"||d.meta?.qualifyingSeason!=="2001-02")errors.push("Unexpected season/european qualification season");
if(d.meta?.status!=="draft_unapproved")errors.push("Incorrect unapproved state");
if(d.qualifiers?.length!==8)errors.push("Expected eight 2001-02 European participants from Serie A");
if(d.standings?.length!==18)errors.push("Expected 18 clubs in 2000-01 standings");
const allowed=new Set((d.qualifiers||[]).map(q=>q.club));
for(const id of ["roma","juventus","lazio","parma","inter","milan","fiorentina","brescia"])if(!allowed.has(id))errors.push("Missing entrant "+id);
if(allowed.has("atalanta"))errors.push("Atalanta did not actually participate in 2001 Intertoto");
const seen=new Set(),nameSeen=new Set(),posRank={},perClubPos={};
for(const p of d.players||[]){
 if(seen.has(p.id))errors.push("Duplicate ID "+p.id);seen.add(p.id);
 const nameKey=p.nameOriginal||p.name;
 if(nameSeen.has(nameKey))errors.push("Duplicate same-season person "+nameKey);nameSeen.add(nameKey);
 if(!allowed.has(p.club))errors.push("Nonqualifying club "+p.club);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("Missing identity or DOB "+p.id);
 if(!positions.includes(p.position))errors.push("Unknown position "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("Invalid starting status "+p.id);
 if(!Number.isInteger(p.leagueAppearances)||p.leagueAppearances<1||p.leagueAppearances>34)errors.push("Invalid games "+p.id);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>p.leagueAppearances)errors.push("Invalid starts "+p.id);
 if(p.leagueMinutes!==null&&p.leagueMinutes!==undefined&&(!Number.isInteger(p.leagueMinutes)||p.leagueMinutes<0||p.leagueMinutes>3060))errors.push("Invalid minutes "+p.id);
 if(p.tier!==null&&!tiers.includes(p.tier))errors.push("Bad tier "+p.id);
 if(p.tier===null&&p.rank!==null)errors.push("Ungraded player ranked "+p.id);
 if(p.rank!==null&&(!Number.isInteger(p.rank)||p.rank<1))errors.push("Bad rank "+p.id);
 if(p.rank!==null)(posRank[p.position]??=[]).push(p);
 if(!p.threeSeasonReview||["1998-99","1999-00","2000-01"].some(s=>!p.threeSeasonReview?.records?.[s]))errors.push("Missing three-season evidence structure "+p.id);
 if(!p.sources?.length)warnings.push("No source link "+p.id);
 const key=p.club+"/"+p.position;perClubPos[key]=(perClubPos[key]||0)+1;
}
for(const [key,num] of Object.entries(perClubPos)){
 const [club,pos]=key.split("/");
 const back3=["roma","juventus","lazio","parma","inter","milan","fiorentina","brescia"].includes(club); // back-three documented in sampled historical league matches; season modal may differ
 const ceiling=pos==="CB"?(back3?4:3):["CM","ST"].includes(pos)?3:2;
 if(num>ceiling)warnings.push("Potential slot maximum "+key+" "+num+">"+ceiling);
}
for(const [pos,ranked] of Object.entries(posRank)){
 ranked.sort((a,b)=>a.rank-b.rank);
 ranked.forEach((p,i)=>{if(p.rank!==i+1)errors.push("Nonconsecutive rank "+pos+" "+p.rank);if(i&&tiers.indexOf(ranked[i-1].tier)>tiers.indexOf(p.tier))errors.push("Tier/rank inversion "+pos+" "+p.name);});
}
const counted=(d.players||[]).filter(p=>p.tier).length;
if(counted!==(d.players||[]).length)warnings.push("Unrated players: "+((d.players||[]).length-counted));
if(d.meta?.candidateCount!==(d.players||[]).length)errors.push("Meta candidate count doesn't match rows");
if(!Array.isArray(d.bestXi)||d.bestXi.length!==11)errors.push("Best XI must have 11");
const usedXI=new Set(),counts={};
for(const x of d.bestXi||[]){if(usedXI.has(x.playerId))errors.push("Repeated Best XI "+x.playerId);usedXI.add(x.playerId);const p=(d.players||[]).find(y=>y.id===x.playerId);if(!p||p.position!==x.position)errors.push("Invalid Best XI role "+x.playerId);counts[x.position]=(counts[x.position]||0)+1;}
if(d.meta?.formation!=="3-4-1-2")errors.push("Season representative formation incorrect");
for(const pos of positions)if((counts[pos]||0)!==(requiredXI[pos]||0))errors.push("Best XI violates 3-4-1-2 position distribution "+pos);
const bothPrior=(d.players||[]).filter(p=>["1998-99","1999-00"].every(s=>Number.isInteger(p.threeSeasonReview?.records?.[s]?.appearances))).length;
if(bothPrior<d.players.length)warnings.push("Both earlier years have numeric appearance data only "+bothPrior+"/"+d.players.length);
const conflicting=d.players.filter(p=>p.sourceConflict).map(p=>p.name);
if(conflicting.length)warnings.push("Conflicting historical sources unresolved for "+conflicting.join(", "));
warnings.push("Individual 3-season independent full historical audit and interactive website tests remain separate from this structural check.");
return {passed:errors.length===0,errors,warnings,total:d.players?.length,clubs:allowed.size,graded:counted,ungraded:d.players.length-counted,worldClass:d.players.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,bothPriorNumeric:bothPrior,positionsRanked:Object.fromEntries(positions.map(pos=>[pos,posRank[pos]?.length||0])),bestXi:d.bestXi?.length,unresolvedConflicts:conflicting};

}
const isEntry=process.argv[1]&&new URL(import.meta.url).pathname===process.argv[1];
if(isEntry){const data=JSON.parse(readFileSync("data/seriea-2000-01.json","utf8"));const result=validate(data);console.log(JSON.stringify(result,null,2));if(!result.passed)process.exitCode=1;}
