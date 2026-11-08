// Run from repository root: node scripts/verify-seriea-2010-11.mjs
// Automated structural checks cannot establish objective historical player performance.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2010-11.json","utf8"));
const errors=[],notices=[],fail=(ok,msg)=>{if(!ok)errors.push(msg)};
const clubIds=["milan","inter","napoli","udinese","lazio","roma","palermo"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const validDate=s=>typeof s==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s));
fail(d.meta?.leagueId==="seriea"&&d.meta?.season==="2010-11","Wrong league or season");
fail(d.meta?.qualifyingSeason==="2011-12","Wrong UEFA qualifying season");
fail(d.meta?.status==="draft_unapproved","Season not DRAFT");
fail(d.players?.length===d.meta?.candidateCount&&d.players?.length===129,"129 candidate count mismatch");
fail(d.standings?.length===20&&d.standings.every((r,i)=>r.rank===i+1&&r.played===38),"Standings not 20 clubs x 38 games");
const q=d.qualifiers||[],expected={milan:"UCL",inter:"UCL",napoli:"UCL",udinese:"UCL",lazio:"UEL",roma:"UEL",palermo:"UEL"};
fail(q.length===7&&new Set(q.map(x=>x.club)).size===7,"7 actual UEFA entrants not distinct");
for(const x of q)fail(expected[x.club]===x.competition,"Bad UEFA club/competition "+x.club);
const ids=new Set(),people=new Set(),countByGrade={};
for(const p of d.players||[]){
 fail(!ids.has(p.id),"Duplicate player ID "+p.id);ids.add(p.id);
 const person=p.nameOriginal+"|"+p.born+"|"+p.club;
 fail(!people.has(person),"Duplicate original/birth/club "+person);people.add(person);
 fail(typeof p.nameKo==="string"&&!!p.nameKo&&typeof p.nameOriginal==="string"&&!!p.nameOriginal,"Missing name "+p.id);
 fail(validDate(p.born),"Invalid DOB "+p.id);
 fail(clubIds.includes(p.club),"Not eligible club "+p.id);
 fail(positions.includes(p.position),"Invalid position "+p.id);
 fail(["starter","backup"].includes(p.role),"Invalid role "+p.id);
 fail(grades.includes(p.tier)||p.tier===null,"Invalid grade "+p.id);
 fail(p.review==="draft_unapproved","Player grade not DRAFT "+p.id);
 fail(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2008-09,2009-10,2010-11","Wrong three-year weighting period "+p.id);
 for(const year of ["2008-09","2009-10","2010-11"])fail(p.threeSeasonReview.records?.[year]!=null,"Missing three-year record "+p.id+"/"+year);
 for(const fld of ["leagueAppearances","leagueStarts","leagueMinutes","leagueGoals"]){
  fail(Number.isInteger(p[fld])&&p[fld]>=0,"Current domestic data absent or invalid "+p.id+" "+fld);
 }
 fail(p.leagueAppearances>0&&p.leagueAppearances<=38,"Zero/invalid current appearances "+p.id);
 fail(p.leagueStarts<=p.leagueAppearances,"Starts>apps "+p.id);
 fail(p.leagueMinutes<=p.leagueAppearances*120,"Implausible minutes "+p.id);
 fail(p.threeSeasonReview?.records?.["2010-11"]?.appearances===p.leagueAppearances,"Current season entry mismatch "+p.id);
 fail(p.threeSeasonReview?.records?.["2010-11"]?.starts===p.leagueStarts,"Current season starts mismatch "+p.id);
 fail(p.threeSeasonReview?.records?.["2010-11"]?.goals===p.leagueGoals,"Current season goals mismatch "+p.id);
 fail(p.leagueAssists===null,"Unverified assists must stay null "+p.id);
 fail(Number.isInteger(p.rank)&&p.rank>0,"Missing ranked candidate "+p.id);
 countByGrade[p.tier]=(countByGrade[p.tier]||0)+1;
}
for(const cl of clubIds){
 const pp=d.players.filter(p=>p.club===cl);
 fail(pp.filter(p=>p.role==="starter").length===11,"Not 11 nominal starters "+cl);
 for(const position of positions)fail(pp.filter(p=>p.position===position&&p.role==="backup").length<=1,"Multiple backups "+cl+"/"+position);
 if(["udinese","napoli"].includes(cl))fail(pp.filter(p=>p.role==="starter"&&p.position==="CB").length===3,"Three-back tactical CB shortage "+cl);
}
for(const position of positions){
 const arr=d.players.filter(p=>p.position===position).sort((a,b)=>a.rank-b.rank);
 fail(arr.every((p,i)=>p.rank===i+1),"Rank gaps in "+position);
 for(let i=1;i<arr.length;i++)fail(grades.indexOf(arr[i].tier)>=grades.indexOf(arr[i-1].tier),"Tier-rank inconsistency "+position+" "+arr[i].nameOriginal);
}
const counts=d.meta?.tierDistribution||{};
for(const g of grades)fail((counts[g]??0)===(countByGrade[g]??0),"Tier count mismatch "+g);
const wc=(counts.S||0)+(counts["A+"]||0),top=wc+(counts.A||0)+(counts["A-"]||0);
fail(wc===20&&top===44,"World/League Top class count mismatch");
const xi=d.bestXi||[];
fail(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,"Best XI 11 unique members");
fail(d.meta?.bestXiReview?.status==="proposed_unapproved","Best XI must be proposed only");
for(const x of xi){
 const p=d.players.find(p=>p.id===x.playerId);
 fail(p!=null,"Best XI unknown candidate "+x.playerId);
 if(p)fail(p.position===x.position,"Best XI actual position mismatch "+p.nameOriginal);
}
const slotCount=Object.fromEntries(positions.map(x=>[x,xi.filter(y=>y.position===x).length]));
for(const [k,v] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,CAM:1,LW:0,RW:0,ST:2}))fail(slotCount[k]===v,"4-3-1-2 Best XI slot mismatch "+k);
notices.push("Passed structure and sources-linked numerics, not full independent source-by-source historical verification.");
notices.push("All 2010-11 league assists are unverified null, and prior two season DRAFT numeric links are not independent proof.");
notices.push("User approval and live visual browser checks are separate and incomplete.");
const result={passed:errors.length===0,season:"2010-11",clubs:clubIds.length,players:d.players.length,
 currentDomesticAppearances:d.players.filter(p=>p.leagueAppearances!=null).length,
 currentDomesticStarts:d.players.filter(p=>p.leagueStarts!=null).length,
 currentDomesticMinutes:d.players.filter(p=>p.leagueMinutes!=null).length,
 currentDomesticGoals:d.players.filter(p=>p.leagueGoals!=null).length,
 fullIndependentThreeSeasonAudits:d.meta?.priorYearEvidence?.fullThreeYearIndependentIndividualQualitative,
 worldClass:wc,leagueTop:top,bestXi:xi.length,gradeCounts:counts,errors,notices};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
