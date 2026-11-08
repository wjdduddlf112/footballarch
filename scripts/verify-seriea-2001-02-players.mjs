// Serie A 2001-02 repeatable DRAFT historical candidate and XI checks.
// node scripts/verify-seriea-2001-02-players.mjs
import {readFileSync} from 'node:fs';
export function validate(d){

const errors=[],warnings=[];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const expectedClubs=["juventus","roma","inter","milan","chievo","lazio","parma","perugia","bologna","torino"];
const expectedXI={GK:1,CB:3,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:0,RW:0,ST:2};
const back3=new Set(["roma","parma","perugia","bologna","torino"]);
if(d.meta?.season!=="2001-02"||d.meta?.qualifyingSeason!=="2002-03")errors.push("Incorrect season or next UEFA season");
if(d.meta?.status!=="draft_unapproved")errors.push("Saved draft_unapproved status expected");
if(d.standings?.length!==18)errors.push("2001-02 Serie A must have 18 standings rows");
if(d.qualifiers?.length!==10)errors.push("Ten actual 2002-03 UEFA entrants required");
const clubs=new Set((d.qualifiers||[]).map(q=>q.club));
for(const c of expectedClubs)if(!clubs.has(c))errors.push("Missing confirmed UEFA entrant "+c);
if(clubs.has("atalanta"))errors.push("Atalanta 9th did not enter 2002 European competition");
if(!Array.isArray(d.players)||!d.players.length)errors.push("No player candidates");
const ids=new Set(),names=new Set(),byPos={},byClub={},rankGroups={};
for(const p of d.players||[]){
 if(ids.has(p.id))errors.push("Duplicate player ID "+p.id);ids.add(p.id);
 const person=p.nameOriginal||p.name;if(names.has(person))errors.push("Duplicate player across clubs "+person);names.add(person);
 if(!clubs.has(p.club))errors.push("Player from unqualified club "+p.name);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))errors.push("Missing name/club/birth data "+p.id);
 if(!positions.includes(p.position))errors.push("Invalid primary position "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("Invalid candidate role "+p.id);
 if(!Number.isInteger(p.leagueAppearances)||p.leagueAppearances<1||p.leagueAppearances>34)errors.push("Invalid league appearances "+p.id);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>p.leagueAppearances)errors.push("Invalid league starts "+p.id);
 if(p.leagueMinutes!=null&&(!Number.isInteger(p.leagueMinutes)||p.leagueMinutes<0||p.leagueMinutes>3060))errors.push("Invalid minutes "+p.id);
 if(!tiers.includes(p.tier))warnings.push("Tier pending/invalid "+p.id);
 if(p.rank!=null&&(!Number.isInteger(p.rank)||p.rank<1))errors.push("Invalid rank "+p.id);
 if(p.rank==null&&p.tier!=null)warnings.push("Player graded without rank "+p.id);
 if(p.rank!=null)(rankGroups[p.position]??=[]).push(p);
 if(!p.threeSeasonReview?.records||["1999-00","2000-01","2001-02"].some(y=>!p.threeSeasonReview.records[y]))errors.push("Missing complete three-season evidence shape "+p.id);
 if(p.review!=="draft_unapproved")errors.push("Player review not unapproved "+p.id);
 if(!p.sources?.length)warnings.push("Missing player sources "+p.id);
 (byPos[p.club]??={})[p.position]=[...((byPos[p.club]||{})[p.position]||[]),p];
 (byClub[p.club]??=[]).push(p);
}
for(const q of d.qualifiers){
 const club=q.club,players=byClub[club]||[],p=byPos[club]||{};
 if(players.filter(x=>x.role==="starter").length!==11)errors.push("Need precisely eleven proposed starter positions "+club);
 for(const [pos,group] of Object.entries(p)){
  const backCount=pos==="CB"?(back3.has(club)?4:3):["CM","ST"].includes(pos)?3:2;
  if(group.length>backCount)errors.push("Exceeded position player cap "+club+"/"+pos+" "+group.length+" > "+backCount);
  if(group.filter(x=>x.role==="backup").length>1)errors.push("More than one alternative "+club+"/"+pos);
 }
}
for(const [pos,arr] of Object.entries(rankGroups)){
 arr.sort((a,b)=>a.rank-b.rank);
 for(let i=0;i<arr.length;i++){if(arr[i].rank!==i+1)errors.push("Nonconsecutive positional rank "+pos);if(i>0&&tiers.indexOf(arr[i-1].tier)>tiers.indexOf(arr[i].tier))errors.push("Grade/rank inversion "+pos);}
}
const xi=d.bestXi||[],seenXI=new Set(),posCount={};
if(xi.length!==11)errors.push("Best XI must contain 11");
for(const choice of xi){if(seenXI.has(choice.playerId))errors.push("Duplicate Best XI id "+choice.playerId);seenXI.add(choice.playerId);const player=d.players.find(p=>p.id===choice.playerId);if(!player||player.position!==choice.position)errors.push("Best XI current position mismatch "+choice.playerId);posCount[choice.position]=(posCount[choice.position]||0)+1;}
for(const pos of positions)if((posCount[pos]||0)!==(expectedXI[pos]||0))errors.push("Best XI 3-4-1-2 slot mismatch "+pos);
if(d.meta?.formation!=="3-4-1-2"||d.meta?.bestXiReview?.status!=="proposed_unapproved")errors.push("Best XI DRAFT formation/status discrepancy");
if(d.meta?.candidateCount!==d.players?.length)errors.push("Meta candidate total mismatch");
const bothNumeric=d.players.filter(p=>["1999-00","2000-01"].every(y=>Number.isInteger(p.threeSeasonReview?.records?.[y]?.appearances))).length;
if(bothNumeric<d.players.length)warnings.push("Earlier two years appearance records attached for "+bothNumeric+"/"+d.players.length+", not all independently verified");
warnings.push("No full independent matchwise/three-season performance verification, no measured league-modal formation, no live DOM/interactive browser verification.");
return{passed:errors.length===0,errors,warnings,players:d.players?.length,clubs:clubs.size,graded:d.players.filter(p=>p.tier).length,ungraded:d.players.filter(p=>!p.tier).length,worldClass:d.players.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,priorTwoYearsNumeric:bothNumeric,bestXI:xi.length,clubStarters:Object.fromEntries(expectedClubs.map(c=>[c,(byClub[c]||[]).filter(p=>p.role==="starter").length])),positionsRanked:Object.fromEntries(positions.map(p=>[p,rankGroups[p]?.length||0]))};

}
if(process.argv[1]&&new URL(import.meta.url).pathname===process.argv[1]){
 const d=JSON.parse(readFileSync('data/seriea-2001-02.json','utf8'));
 const out=validate(d); console.log(JSON.stringify(out,null,2));if(!out.passed)process.exitCode=1;
}
