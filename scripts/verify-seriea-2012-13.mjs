// Run in repo root: node scripts/verify-seriea-2012-13.mjs
// Only data structure, identity format, individual 2012-13 numeric consistency and eligibility.
// It DOES NOT validate historical peer quality, real tactical match frequency, user approval or browser UI.
import {readFileSync} from "node:fs";
const file="data/seriea-2012-13.json";
const d=JSON.parse(readFileSync(file,"utf8"));
const err=[],notes=[],check=(cond,message)=>{if(!cond)err.push(message)};
const clubs=["juventus","napoli","milan","fiorentina","udinese","lazio"];
const expected=Object.fromEntries(["juventus:UCL","napoli:UCL","milan:UCL","fiorentina:UEL","udinese:UEL","lazio:UEL"].map(s=>s.split(":")));
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const gradeOrder=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
check(d.meta?.leagueId==="seriea"&&d.meta?.season==="2012-13"&&d.meta?.qualifyingSeason==="2013-14","Invalid season/competition");
check(d.meta?.status==="draft_unapproved","Season must stay draft_unapproved");
check(d.meta?.bestXiReview?.status==="proposed_unapproved","Best XI must stay proposed_unapproved");
check(d.meta?.standingsOnly===false,"Must be full player season");
check(d.standings?.length===20&&d.standings.every((r,i)=>r.rank===i+1&&r.played===38),"Standings source shape changed");
check(d.qualifiers?.length===6&&new Set(d.qualifiers.map(q=>q.club)).size===6,"Invalid qualifier number/uniqueness");
for(const q of d.qualifiers||[])check(expected[q.club]===q.competition,"Unexpected 2013-14 UEFA qualifier "+q.club+"/"+q.competition);
check(!(d.qualifiers||[]).some(q=>q.club==="roma"||q.club==="inter"),"Roma and Inter did not qualify 2013-14");
const pp=d.players||[];
check(pp.length===102&&d.meta?.candidateCount===pp.length,"Expected 102 candidates");
const ids=new Set(),persons=new Set();
const isDate=s=>typeof s==="string"&&/^\d{4}-\d\d-\d\d$/.test(s)&&!Number.isNaN(Date.parse(s));
for(const p of pp){
 check(typeof p.id==="string"&&!ids.has(p.id),"Duplicate/invalid id "+p.id);ids.add(p.id);
 const key=p.originalName+"|"+p.born+"|"+p.club;
 check(!persons.has(key),"Duplicate name+dob+club "+key);persons.add(key);
 check(Boolean(p.nameOriginal&&p.nameKo&&isDate(p.born)),"Missing names or DOB "+p.id);
 check(clubs.includes(p.club)&&positions.includes(p.position),"Wrong eligible club or position "+p.id);
 check(p.role==="starter"||p.role==="backup","Invalid role "+p.id);
 check(gradeOrder.includes(p.tier),"Invalid grade "+p.id);
 check(p.review==="draft_unapproved","Player not draft "+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2010-11,2011-12,2012-13","Wrong lookback "+p.id);
 for(const sy of ["2010-11","2011-12","2012-13"])check(p.threeSeasonReview.records?.[sy]!=null,"Missing season slot "+p.id+"/"+sy);
 for(const k of ["leagueAppearances","leagueStarts","leagueMinutes","leagueGoals"])check(Number.isInteger(p[k])&&p[k]>=0,"Invalid current season "+k+" "+p.id);
 check(p.leagueAppearances>=1&&p.leagueAppearances<=38&&p.leagueStarts<=p.leagueAppearances,"Impossible apps/starts "+p.id);
 check(p.leagueMinutes<=p.leagueAppearances*120,"Implausible minutes "+p.id);
 check(p.leagueAssists===null,"Assist not independently verified "+p.id);
 const rec=p.threeSeasonReview?.records?.["2012-13"];
 for(const [k,f] of [["appearances","leagueAppearances"],["starts","leagueStarts"],["minutes","leagueMinutes"],["goals","leagueGoals"]])check(rec?.[k]===p[f],"2012-13 three-year record mismatch "+p.id+" "+k);
 check(Number.isInteger(p.rank)&&p.rank>0,"Missing position rank "+p.id);
}
let starterCount=0;
for(const club of clubs){
 const arr=pp.filter(p=>p.club===club),starters=arr.filter(p=>p.role==="starter");
 starterCount+=starters.length;
 check(starters.length===11,"Must have 11 representative starters: "+club+" got "+starters.length);
 for(const position of positions)check(arr.filter(p=>p.role==="backup"&&p.position===position).length<=1,"Too many backups: "+club+"/"+position);
 if(["juventus","napoli","fiorentina","udinese"].includes(club))check(starters.filter(p=>p.position==="CB").length===3,"Missing third centreback: "+club);
}
for(const position of positions){
 const arr=pp.filter(p=>p.position===position).sort((a,b)=>a.rank-b.rank);
 check(arr.every((p,i)=>p.rank===i+1),"Missing/gapped rank: "+position);
 for(let i=1;i<arr.length;i++)check(gradeOrder.indexOf(arr[i-1].tier)<=gradeOrder.indexOf(arr[i].tier),"Position rank not compatible with grade: "+position);
}
const counts=Object.fromEntries(gradeOrder.map(t=>[t,pp.filter(p=>p.tier===t).length]));
for(const tier of gradeOrder)check(counts[tier]===(d.meta?.tierDistribution?.[tier]??0),"Wrong meta tier count "+tier);
const wc=counts.S+counts["A+"],lt=wc+counts.A+counts["A-"];
check(wc===16&&lt===41,"World/Top aggregate count mismatch");
const xi=d.bestXi||[];
check(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,"Best XI not 11 unique");
check(d.meta?.formation==="3-5-2","Best XI expected 3-5-2");
for(const [pos,count] of Object.entries({GK:1,CB:3,LB:1,RB:1,DM:1,CM:2,CAM:0,LW:0,RW:0,ST:2})){
 check(xi.filter(x=>x.position===pos).length===count,"3-5-2 slot mismatch "+pos);
}
for(const x of xi){const p=pp.find(p=>p.id===x.playerId);check(p!=null,"Best XI unknown player "+x.playerId);if(p)check(p.position===x.position,"Best XI role mismatch "+p.nameOriginal);}
notes.push("Current BDFutbol season raw data directly linked per club but independent per-match/FBref second reconciliation is not complete.");
notes.push("Historical individual qualitative all-3-year full peer audit 0/102, prior DRAFT numeric cells are not evidence of independent review.");
notes.push("DOB text filled, second independent verification not complete. League assists all null.");
notes.push("GitHub Actions pass checks data structure, not live GitHub Pages browser functionality or user approval.");
const report={passed:err.length===0,season:"2012-13",qualifiedClubs:clubs.length,candidates:pp.length,nominalStarters:starterCount,leagueAppsPresent:pp.filter(p=>p.leagueAppearances!=null).length,leagueStartsPresent:pp.filter(p=>p.leagueStarts!=null).length,leagueMinutesPresent:pp.filter(p=>p.leagueMinutes!=null).length,leagueGoalsPresent:pp.filter(p=>p.leagueGoals!=null).length,leagueAssistsVerified:0,worldClass:wc,leagueTop:lt,gradeDistribution:counts,bestXi:xi.length,fullThreeSeasonIndependentPeerAudits:d.meta?.priorYearEvidence?.fullyIndependentlyReconciledThreeSeasonPeers??0,errors:err,notices:notes};
process.stdout.write(JSON.stringify(report,null,2)+"\n");
if(err.length)process.exitCode=1;
