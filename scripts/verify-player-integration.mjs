import {readFileSync, existsSync} from "node:fs";

const read=(path)=>JSON.parse(readFileSync(path,"utf8"));
const schedule={
  laliga:[1999,2000,2001,2002,2003],
  premierleague:[1999,2000,2001],
  seriea:[1999,2000,2001],
  bundesliga:[1999,2000,2001],
  ligue1:[1999,2000,2001]
};
const archivePaths={
  laliga:"data/laliga-standings-verified-1999-2026.json",
  seriea:"data/seriea-standings-verified-1999-2026.json",
  bundesliga:"data/bundesliga-standings-verified-1999-2026.json"
};
const allowedPositions=new Set(["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"]);
const allowedTiers=new Set(["S","A+","A","A-","B+","B","B-","C+","C","C-","D"]);
const matchingNumericKeys=["rank","played","wins","draws","losses","goalsFor","goalsAgainst","points"];
const archives=Object.fromEntries(Object.entries(archivePaths).map(([l,p])=>[l,read(p)]));
const errors=[],pending=[],rows=[];
let totalPlayers=0,totalTiers=0,totalRanks=0,totalMissingDob=0,totalMissingStarts=0,slotsOverLimit=0;

for(const [league,years] of Object.entries(schedule)){
 for(const year of years){
  const season=year+"-"+String((year+1)%100).padStart(2,"0");
  const path="data/"+league+"-"+season+".json";
  if(!existsSync(path)){errors.push(path+": missing file");continue;}
  const d=read(path),ps=d.players||[],q=d.qualifiers||[],standing=d.standings||[],clubs=d.clubs||[],best=d.bestXi||[];
  const prefix=league+" "+season+": ";
  const qualified=new Set(q.map(x=>x.club)),clubSet=new Set(clubs.map(x=>x.id));
  if(d.meta?.leagueId!==league||d.meta?.season!==season)errors.push(prefix+"league/season metadata mismatch");
  if(qualified.size!==q.length)errors.push(prefix+"duplicate qualifier");
  if(standing.some(x=>!clubSet.has(x.club)))errors.push(prefix+"standings club profile missing");
  if(q.some(x=>!clubSet.has(x.club)||!standing.some(r=>r.club===x.club)))errors.push(prefix+"qualifier absent from standings");
  if(standing.length!==(league==="seriea"&&year<=2003?18:league==="bundesliga"?18:league==="ligue1"&&year<=2001?18:20))errors.push(prefix+"standings row count mismatch");
  if(new Set(standing.map(x=>x.club)).size!==standing.length||new Set(standing.map(x=>x.rank)).size!==standing.length)errors.push(prefix+"duplicate standings club/rank");
  const qs=Object.fromEntries(q.map(x=>[x.club,x.competition]));
  if(standing.some(r=>(r.competition||null)!==(qs[r.club]||null)))errors.push(prefix+"standings / Europe badges parity");
  const ar=archives[league]?.seasons?.[season];
  if(ar){
   const ars=ar.standings||[];
   if(ars.length!==standing.length||ars.some((r,i)=>matchingNumericKeys.some(k=>r[k]!==standing[i]?.[k])||r.club!==standing[i]?.club))errors.push(prefix+"numeric standings differ from active shared archive");
   const aq=ar.europeanParticipation||{};
   if(Object.keys(aq).length!==q.length||q.some(v=>aq[v.club]!==v.competition))errors.push(prefix+"qualifier mismatch with active shared archive");
  }
  const ids=new Set(),names=new Set(),pc={};
  const byPos={};
  for(const p of ps){
   if(!p.id||ids.has(p.id))errors.push(prefix+"missing/duplicate player ID "+p.id);
   ids.add(p.id);
   const nk=p.club+"::"+String(p.name||"").trim().toLocaleLowerCase();
   if(names.has(nk))errors.push(prefix+"duplicated player name within club "+nk);
   names.add(nk);
   if(!qualified.has(p.club))errors.push(prefix+"player from non-qualified club "+p.id);
   if(!allowedPositions.has(p.position))errors.push(prefix+"invalid primary position "+p.id);
   if(!p.name||!p.nameKo)pending.push(prefix+"missing player name "+p.id);
   if(!p.born)totalMissingDob++;
   else{
    const valid=/^\d{4}-\d{2}-\d{2}$/.test(p.born);
    const date=new Date(p.born+"T00:00:00Z");
    if(!valid||Number.isNaN(date.getTime())||date.toISOString().slice(0,10)!==p.born)errors.push(prefix+"invalid DOB "+p.id);
   }
   if(p.leagueStarts==null&&p.starts==null)totalMissingStarts++;
   if(p.tier!=null&&!allowedTiers.has(p.tier))errors.push(prefix+"invalid tier "+p.id);
   if(p.rank!=null&&(!Number.isInteger(p.rank)||p.rank<1))errors.push(prefix+"invalid positional rank "+p.id);
   if((p.tier==null)!==(p.rank==null))pending.push(prefix+"tier/rank partially entered "+p.id);
   pc[p.club]??={};pc[p.club][p.position]=(pc[p.club][p.position]||0)+1;
   byPos[p.position]??=[];if(p.rank!=null)byPos[p.position].push(p.rank);
  }
  for(const [club,c] of Object.entries(pc))for(const [pos,n] of Object.entries(c)){
   const cap=pos==="CB"||pos==="CM"?3:2;
   if(n>cap){slotsOverLimit++;pending.push(prefix+"position cap "+club+" "+pos+" "+n+"/"+cap);}
  }
  for(const [pos,ranked] of Object.entries(byPos)){
   if(new Set(ranked).size!==ranked.length)errors.push(prefix+"duplicate position rank "+pos);
   if(ranked.length===ps.filter(p=>p.position===pos).length&&ranked.slice().sort((a,b)=>a-b).some((v,i)=>v!==i+1))errors.push(prefix+"position rank gap "+pos);
  }
  if(best.length){
   const bIds=best.map(x=>typeof x==="string"?x:(x.playerId||x.id));
   if(best.length!==11||new Set(bIds).size!==11||bIds.some(id=>!ids.has(id)))errors.push(prefix+"Best XI count / player reference invalid");
   if(d.meta?.bestXiReview?.status!=="proposed_unapproved"&&d.meta?.status!=="approved")pending.push(prefix+"Best XI provisional approval flag check");
  }
  if(!best.length)pending.push(prefix+"Best XI not nominated");
  if(ps.some(p=>p.tier==null))pending.push(prefix+"player tiers not complete");
  if(ps.length>0&&d.meta?.status==="approved"&&ps.some(p=>p.tier==null))errors.push(prefix+"unreviewed data marked approved");
  const item={league,season,candidateCount:ps.length,tierCount:ps.filter(p=>p.tier!=null).length,rankCount:ps.filter(p=>p.rank!=null).length,missingDob:ps.filter(p=>!p.born).length,missingStarts:ps.filter(p=>p.leagueStarts==null&&p.starts==null).length,qualifyingClubs:qualified.size,bestXiCount:best.length};
  rows.push(item);totalPlayers+=item.candidateCount;totalTiers+=item.tierCount;totalRanks+=item.rankCount;
 }
}
if(rows.length!==17)errors.push("Expected 17 seasons, found "+rows.length);
if(totalPlayers!==2245)pending.push("Candidate count changed from previous recorded 2245; review legitimate edits");
const result={passed:errors.length===0,structuralValidation:"executed_if_this_script_is_run",screenValidation:"not_checked",totalSeasons:rows.length,totalPlayers,totalTiers,totalRanks,totalMissingDob,totalMissingStarts,slotsOverLimit,errors,pending,rows};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
