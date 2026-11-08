// Run from repository root: node scripts/verify-seriea-2009-10.mjs
// Historical evidence audit is separate; passing this script is not proof of individual sporting performance.
import {readFileSync} from "node:fs";
const file = "data/seriea-2009-10.json";
const d=JSON.parse(readFileSync(file,"utf8"));
const errors=[],notices=[];
const clubs=["inter","roma","milan","sampdoria","palermo","napoli","juventus"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const ids=new Set(),keys=new Set();
const fail=(cond,msg)=>{if(!cond)errors.push(msg)};
fail(d.meta?.leagueId==="seriea"&&d.meta?.season==="2009-10","Wrong league/season");
fail(d.meta?.qualifyingSeason==="2010-11","Wrong UEFA qualifying season");
fail(d.meta?.status==="draft_unapproved","Not DRAFT");
fail(d.players?.length===d.meta?.candidateCount,"Candidate count mismatch");
fail(d.qualifiers?.length===7&&new Set(d.qualifiers?.map(x=>x.club)).size===7,"7 qualifying clubs not unique");
fail(clubs.every(c=>d.qualifiers.some(q=>q.club===c)),"Missing qualifier");
fail(d.standings?.length===20&&d.standings.every((r,i)=>r.rank===i+1&&r.played===38),"Serie A table not 20x38");
const actual={"inter":"UCL","roma":"UCL","milan":"UCL","sampdoria":"UCL","palermo":"UEL","napoli":"UEL","juventus":"UEL"};
for(const q of d.qualifiers)fail(actual[q.club]===q.competition,"Competition mismatch "+q.club);
for(const p of d.players||[]){
 fail(!ids.has(p.id),"Duplicated player ID "+p.id);ids.add(p.id);
 const key=p.nameOriginal+"|"+p.born+"|"+p.club;
 fail(!keys.has(key),"Duplicate person same club "+key);keys.add(key);
 fail(typeof p.nameKo==="string"&&p.nameKo.length>0&&typeof p.nameOriginal==="string"&&p.nameOriginal.length>0,"Missing player names "+p.id);
 fail(typeof p.born==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(p.born)&&!Number.isNaN(Date.parse(p.born)),"Bad birth "+p.id);
 fail(clubs.includes(p.club),"Noneligible club "+p.id);
 fail(positions.includes(p.position),"Bad position "+p.id);
 fail(grades.includes(p.tier)||p.tier===null,"Invalid grade "+p.id);
 fail(p.review==="draft_unapproved","Player not DRAFT "+p.id);
 fail(p.role==="starter"||p.role==="backup","Invalid XI role "+p.id);
 fail(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2007-08,2008-09,2009-10","Three-season window "+p.id);
 for(const season of ["2007-08","2008-09","2009-10"])fail(p.threeSeasonReview.records?.[season]!=null,"Missing season record "+p.id+" "+season);
 for(const k of ["leagueAppearances","leagueStarts","leagueMinutes","leagueGoals","leagueAssists"]){
   fail(p[k]===null||(Number.isInteger(p[k])&&p[k]>=0),"Invalid numeric "+p.id+" "+k);
 }
 if(p.leagueAppearances!==null&&p.leagueStarts!==null)fail(p.leagueStarts<=p.leagueAppearances,"Starts exceed apps "+p.id);
 if(p.leagueAppearances!==null)fail(p.leagueAppearances>0,"Zero-appearance nominee "+p.id);
 fail(p.rank==null||(Number.isInteger(p.rank)&&p.rank>0),"Invalid positional rank "+p.id);
}
for(const club of clubs){
 const pp=d.players.filter(x=>x.club===club);
 fail(pp.filter(x=>x.role==="starter").length===11,"Not 11 representative starters "+club);
 for(const pos of positions)fail(pp.filter(x=>x.role==="backup"&&x.position===pos).length<=1,"Too many backups "+club+" "+pos);
}
for(const pos of positions){
 const pp=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 fail(pp.every((p,i)=>p.rank===i+1),"Nonconsecutive ranks at "+pos);
 for(let i=1;i<pp.length;i++){
  let prev=grades.indexOf(pp[i-1].tier),cur=grades.indexOf(pp[i].tier);
  if(prev>=0&&cur>=0)fail(prev<=cur,"Tier-rank inconsistency "+pos+" "+pp[i].id);
 }
}
const xi=d.bestXi||[];
fail(xi.length===11,"Best XI is not 11");
fail(d.meta?.bestXiReview?.status==="proposed_unapproved","Best XI status");
const idsXi=new Set(xi.map(x=>x.playerId));
fail(idsXi.size===11,"Best XI duplicated player");
for(const x of xi){
 const p=d.players.find(p=>p.id===x.playerId);
 fail(p!==undefined,"Best XI invalid player "+x.playerId);
 if(p)fail(p.position===x.position,"Best XI incompatible position "+p.id);
}
const slotCount={};
for(const x of xi)slotCount[x.position]=(slotCount[x.position]||0)+1;
for(const [p,n] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,CAM:1,ST:2})){
 fail(slotCount[p]===n,"4-3-1-2 wrong XI slots "+p);
}
const gradeCounts=Object.fromEntries(grades.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
const archiveCounts=d.meta?.tierDistribution||{};
for(const t of grades)fail(gradeCounts[t]===archiveCounts[t],"Wrong tier distribution "+t);
notices.push("Structural integrity only; not proof of current season appearance source authenticity or period tactical modal roles.");
notices.push("Historical 3-season qualitative independent audit is incomplete; ranking and S-D tiers are provisional.");
notices.push("GitHub Pages display and Actions are NOT verified by this script.");
const report={passed:errors.length===0,season:d.meta.season,clubs:clubs.length,players:d.players.length,
 currentLeagueAppsPresent:d.players.filter(p=>p.leagueAppearances!==null).length,
 currentLeagueAppsPending:d.players.filter(p=>p.leagueAppearances===null).length,
 provisionalWorldClass:gradeCounts.S+gradeCounts["A+"],
 provisionalLeagueTop:gradeCounts.S+gradeCounts["A+"]+gradeCounts.A+gradeCounts["A-"],
 bestXiCount:xi.length,errors,notices};
process.stdout.write(JSON.stringify(report,null,2)+"\n");
if(errors.length)process.exitCode=1;
