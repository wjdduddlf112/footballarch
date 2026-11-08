// node scripts/verify-seriea-2013-14.mjs
// Structural integrity and recorded current-year numeric consistency only.
// Passing does not establish historical source-by-source individual grade or live browser correctness.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2013-14.json","utf8"));
const errors=[],check=(ok,msg)=>{if(!ok)errors.push(msg)};
const clubs=["juventus","roma","napoli","fiorentina","inter","torino"];
const uefa={juventus:"UCL",roma:"UCL",napoli:"UCL",fiorentina:"UEL",inter:"UEL",torino:"UEL"};
const ps=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const dobValid=s=>typeof s==="string"&&/^\d{4}-\d\d-\d\d$/.test(s)&&!Number.isNaN(Date.parse(s));
check(d.meta?.season==="2013-14"&&d.meta?.leagueId==="seriea","Wrong league season");
check(d.meta?.qualifyingSeason==="2014-15","Wrong following UEFA season");
check(d.meta?.status==="draft_unapproved","Season not DRAFT");
check(d.meta?.standingsOnly===false,"Season must contain player evaluations");
check(d.meta?.europeanQualificationVerified===true,"UEFA qualifier verification status wrong");
check(d.standings?.length===20&&d.standings.every((r,i)=>r.rank===i+1&&r.played===38),"Standings invalid");
check(d.qualifiers?.length===6&&new Set(d.qualifiers.map(q=>q.club)).size===6,"UEFA six clubs invalid");
for(const q of d.qualifiers)check(uefa[q.club]===q.competition,"Wrong UEFA competition for "+q.club);
check(!d.qualifiers.some(q=>q.club==="parma"||q.club==="milan"),"Parma no license, Milan no entry");
check(d.standings?.find(r=>r.club==="parma")?.competition===null,"Parma was denied UEFA licence");
check(d.standings?.find(r=>r.club==="torino")?.competition==="UEL","Torino inherited Parma place");
const players=d.players||[],seen=new Set(),persons=new Set();
check(players.length===106&&d.meta?.candidateCount===106,"106 candidate count mismatch");
for(const p of players){
 check(typeof p.id==="string"&&!seen.has(p.id),"Duplicate player id "+p.id);seen.add(p.id);
 const key=p.nameOriginal+"|"+p.born;
 check(!persons.has(key),"Duplicate player across eligible clubs "+key);persons.add(key);
 check(Boolean(p.nameOriginal&&p.nameKo&&dobValid(p.born)&&p.clubNameOriginal),"Missing name/birth original club "+p.id);
 check(clubs.includes(p.club)&&ps.includes(p.position),"Invalid club/role "+p.id);
 check(["starter","backup"].includes(p.role),"Invalid status "+p.id);
 check(grades.includes(p.tier)&&typeof p.displayTier==="string","Missing provisional grade "+p.id);
 check(p.review==="draft_unapproved","Player must remain DRAFT "+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2011-12,2012-13,2013-14","3 season lookback wrong "+p.id);
 for(const year of ["2011-12","2012-13","2013-14"])check(p.threeSeasonReview?.records?.[year]!=null,"3-year record missing "+p.id+"/"+year);
 for(const key of ["leagueAppearances","leagueStarts","leagueMinutes","leagueGoals"])check(Number.isInteger(p[key])&&p[key]>=0,"Current 2013-14 metric wrong "+p.id+"/"+key);
 check(p.leagueAppearances>0&&p.leagueAppearances<=38&&p.leagueStarts<=p.leagueAppearances,"2013-14 valid starts & apps "+p.id);
 check(p.leagueMinutes<=p.leagueAppearances*120,"2013-14 too high minutes "+p.id);
 check(p.leagueAssists===null,"Unverified assists should be null "+p.id);
 const r=p.threeSeasonReview.records["2013-14"];
 check(r.appearances===p.leagueAppearances&&r.starts===p.leagueStarts&&r.minutes===p.leagueMinutes&&r.goals===p.leagueGoals,"Different current year row "+p.id);
 check(p.sources?.some(u=>typeof u==="string"&&u.includes("bdfutbol.com/en/t/t2013-14")),"BDFutbol team source missing "+p.id);
 check(Number.isInteger(p.rank)&&p.rank>=1,"Missing ranking "+p.id);
}
let starters=0;
for(const club of clubs){
 const arr=players.filter(p=>p.club===club),starting=arr.filter(p=>p.role==="starter");
 starters+=starting.length;
 check(starting.length===11,"Not exactly 11 representative starters "+club);
 for(const pos of ps)check(arr.filter(p=>p.position===pos&&p.role==="backup").length<=1,"More than 1 same-team position backup "+club+"/"+pos);
 if(["juventus","inter","torino"].includes(club))check(starting.filter(p=>p.position==="CB").length===3,"Three-back CB structure broken "+club);
}
const counts=Object.fromEntries(grades.map(t=>[t,players.filter(p=>p.tier===t).length]));
for(const grade of grades)check(counts[grade]===d.meta?.tierDistribution?.[grade],"Tier count wrong "+grade);
for(const pos of ps){
 const arr=players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 check(arr.every((p,i)=>p.rank===i+1),"Nonconsecutive ordinal rank "+pos);
 for(let i=1;i<arr.length;i++)check(grades.indexOf(arr[i].tier)>=grades.indexOf(arr[i-1].tier),"Tier rank inversion "+pos);
}
const wc=counts.S+counts["A+"],leagueTop=wc+counts.A+counts["A-"];
check(wc===21&&leagueTop===41,"World and league-top distribution inconsistent");
check(d.meta?.formation==="3-5-2"&&d.meta?.bestXiReview?.status==="proposed_unapproved","Best XI proposed/formation mismatch");
const xi=d.bestXi||[];
check(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,"Proposed XI not 11 unique");
for(const [position,need] of Object.entries({GK:1,CB:3,LB:1,RB:1,DM:1,CM:2,CAM:0,LW:0,RW:0,ST:2})){
 check(xi.filter(x=>x.position===position).length===need,"3-5-2 slots inconsistent "+position);
}
for(const x of xi){const p=players.find(p=>p.id===x.playerId);check(p!=null,"Unknown Best XI candidate "+x.playerId);if(p)check(p.position===x.position,"XI player position mismatch "+p.nameOriginal);}
check(players.filter(p=>p.nameOriginal==="Danilo D'Ambrosio").length===1&&players.find(p=>p.nameOriginal==="Danilo D'Ambrosio")?.club==="torino","Winter Torino→Inter transfer must not duplicate nomination");
const stats={passed:errors.length===0,season:d.meta.season,actualUEFAClubs:clubs.length,players:players.length,starters,apps:players.filter(p=>p.leagueAppearances!=null).length,starts:players.filter(p=>p.leagueStarts!=null).length,minutes:players.filter(p=>p.leagueMinutes!=null).length,goals:players.filter(p=>p.leagueGoals!=null).length,assistsVerified:0,bestXi:xi.length,worldClass:wc,leagueTop,grades:counts,fullyIndependentlyReviewedThreeSeasonQuality:d.meta?.priorYearEvidence?.fullIndependentThreeSeasonQualitative??0,errors,notes:["BDFutbol 2013-14 per-club player lines were transcribed for current-year numerics; individual 2nd-source reconciliation pending.","Old DRAFT 2011-12/2012-13 numeric links not fully independently re-audited. Four leading-player 2-year records independently checked.","DOB all present but individual two-source DOB audits and exact 38-match modal role unconfirmed.","Action pass does not mean historical quality validation or functioning live website UI."]};
process.stdout.write(JSON.stringify(stats,null,2)+"\n");
if(errors.length)process.exitCode=1;
