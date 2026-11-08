// node scripts/verify-seriea-2011-12.mjs — structural validation, not a 3-season quality audit
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2011-12.json","utf8"));
const errors=[],fail=(ok,msg)=>{if(!ok)errors.push(msg)};
const clubIds=["juventus","milan","udinese","lazio","napoli","inter"],expected={juventus:"UCL",milan:"UCL",udinese:"UCL",lazio:"UEL",napoli:"UEL",inter:"UEL"};
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const ids=new Set(),persons=new Set();
fail(d.meta?.leagueId==="seriea"&&d.meta?.season==="2011-12"&&d.meta?.qualifyingSeason==="2012-13","League/season mismatch");
fail(d.meta?.status==="draft_unapproved","Season approved without user instruction");
fail(d.qualifiers?.length===6&&new Set(d.qualifiers.map(q=>q.club)).size===6,"2012-13 must have 6 actual Italian UEFA clubs");
for(const q of d.qualifiers)fail(expected[q.club]===q.competition,"Wrong competition/club "+q.club);
fail(!d.qualifiers?.some(q=>q.club==="roma"),"2011-12 Roma 7th not 2012-13 UEFA participant");
fail(d.standings?.length===20&&d.standings.every((r,i)=>r.rank===i+1&&r.played===38),"20011-12 Serie A league table invalid");
fail(d.players?.length===109&&d.meta?.candidateCount===109,"Candidate number inconsistent");
for(const p of d.players||[]){
 fail(!ids.has(p.id),"Duplicate player ID "+p.id);ids.add(p.id);
 const k=p.nameOriginal+"|"+p.born+"|"+p.club;
 fail(!persons.has(k),"Duplicate footballer club "+k);persons.add(k);
 fail(Boolean(p.nameKo&&p.nameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(p.born)&&!Number.isNaN(Date.parse(p.born))),"Missing names/DOB "+p.id);
 fail(clubIds.includes(p.club)&&pos.includes(p.position),"Not included season club/position "+p.id);
 fail(["starter","backup"].includes(p.role),"Invalid player role "+p.id);
 fail(tiers.includes(p.tier)||p.tier===null,"Invalid tier "+p.id);
 fail(p.review==="draft_unapproved","Player no longer DRAFT "+p.id);
 fail(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2009-10,2010-11,2011-12","Wrong 3-season range "+p.id);
 for(const year of ["2009-10","2010-11","2011-12"])fail(p.threeSeasonReview.records?.[year]!=null,"Missing year "+p.id+" "+year);
 for(const metric of ["leagueAppearances","leagueStarts","leagueMinutes","leagueGoals"])fail(Number.isInteger(p[metric])&&p[metric]>=0,"Unverified or negative current metric "+p.id+"/"+metric);
 fail(p.leagueAppearances>=1&&p.leagueAppearances<=38&&p.leagueStarts<=p.leagueAppearances,"Invalid apps/starts "+p.id);
 fail(p.leagueMinutes<=p.leagueAppearances*120,"Implausible minutes "+p.id);
 fail(p.leagueAssists===null,"Assists should be null until individually verified "+p.id);
 const r=p.threeSeasonReview.records["2011-12"];
 fail(r.appearances===p.leagueAppearances&&r.starts===p.leagueStarts&&r.minutes===p.leagueMinutes&&r.goals===p.leagueGoals,"2011-12 player-level 3-season record inconsistent "+p.id);
 fail(p.rank==null||(Number.isInteger(p.rank)&&p.rank>0),"Invalid rank "+p.id);
}
for(const club of clubIds){
 const pp=d.players.filter(p=>p.club===club);
 fail(pp.filter(p=>p.role==="starter").length===11,"Not eleven nominal players "+club);
 for(const position of pos)fail(pp.filter(p=>p.position===position&&p.role==="backup").length<=1,"Exceeded backup per club-position "+club+"/"+position);
 if(["juventus","udinese","napoli"].includes(club))fail(pp.filter(p=>p.position==="CB"&&p.role==="starter").length===3,"Three-back team lacks third starting CB "+club);
}
const counts=Object.fromEntries(tiers.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
for(const tier of tiers)fail(counts[t]===(d.meta?.tierDistribution?.[tier]??0),"Tier count wrong "+tier);
for(const position of pos){
 const pp=d.players.filter(p=>p.position===position).sort((a,b)=>(a.rank??999)-(b.rank??999));
 fail(pp.every((p,i)=>p.rank===i+1),"Rank ordinal gap "+position);
 for(let i=1;i<pp.length;i++)if(pp[i].tier!=null&&pp[i-1].tier!=null)fail(tiers.indexOf(pp[i].tier)>=tiers.indexOf(pp[i-1].tier),"Nonmonotone tier/rank "+position);
}
const wc=counts.S+counts["A+"],top=wc+counts.A+counts["A-"];
fail(wc===18&&top===36,"Top classifications inconsistent");
const xi=d.bestXi||[];
fail(d.meta?.formation==="3-5-2"&&d.meta?.bestXiReview?.status==="proposed_unapproved","Best XI formation/status mismatch");
fail(xi.length===11&&new Set(xi.map(p=>p.playerId)).size===11,"XI length/unique issue");
const slot={GK:1,CB:3,LB:1,RB:1,DM:1,CM:2,CAM:0,LW:0,RW:0,ST:2};
for(const [k,num] of Object.entries(slot))fail(xi.filter(x=>x.position===k).length===num,"XI slot not 3-5-2 "+k);
for(const x of xi){const p=d.players.find(p=>p.id===x.playerId);fail(p!==undefined,"Unknown XI player "+x.playerId);if(p)fail(p.position===x.position,"XI player off-position "+p.nameOriginal);}
const report={passed:errors.length===0,season:d.meta.season,clubs:clubIds.length,players:d.players.length,currentApps:d.players.filter(p=>p.leagueAppearances!=null).length,currentStarts:d.players.filter(p=>p.leagueStarts!=null).length,currentMinutes:d.players.filter(p=>p.leagueMinutes!=null).length,currentGoals:d.players.filter(p=>p.leagueGoals!=null).length,currentAssistsVerified:0,worldClass:wc,leagueTop:top,bestXi:xi.length,threeSeasonFullIndependentAudit:d.meta?.priorYearEvidence?.fullThreeYearIndependentIndividualQualitative??0,errors,notices:["Structure only: individual football role/quality, 3-season independent peer review and DOB double-source audit incomplete.","GitHub Actions green status is NOT a live browser verification or user approval."]};
process.stdout.write(JSON.stringify(report,null,2)+"\n");
if(errors.length)process.exitCode=1;
