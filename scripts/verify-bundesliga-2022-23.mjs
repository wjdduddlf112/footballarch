// Run from repository root: node scripts/verify-bundesliga-2022-23.mjs
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const data=read("data/bundesliga-2022-23.json");
const historical=read("data/bundesliga-standings-verified-1999-2026.json");
const errors=[],warnings=[];
const POS=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const GRADES=["S","A+","A","A-","B+","B","B-","C+","C","C-","D",null];
const check=(v,message)=>{if(!v)errors.push(message);};
const clubIds=new Set(data.clubs.map(c=>c.id));
const qualified=historical.seasons["2022-23"].europeanParticipation;
check(data.meta.season==="2022-23"&&data.meta.qualifyingSeason==="2023-24"&&data.meta.leagueId==="bundesliga","wrong season or league");
check(data.meta.dataStatus==="draft_unapproved"&&data.meta.status==="draft","incorrect approval state");
check(data.clubs.length===7&&clubIds.size===7&&data.qualifiers.length===7,"expected 7 eligible clubs");
check(Object.keys(qualified).length===7,"historical qualification map is not exactly 7");
for(const q of data.qualifiers)check(clubIds.has(q.club)&&qualified[q.club]===q.competition,"incorrect UEFA entrant or UEFA competition: "+q.club);
check(data.standings.length===18&&new Set(data.standings.map(x=>x.club)).size===18,"Bundesliga final table not 18 unique clubs");
check(data.players.length===data.meta.candidateCount,"candidate metadata count does not match");
check(new Set(data.players.map(x=>x.id)).size===data.players.length,"duplicate player id");
for(const p of data.players){
  check(clubIds.has(p.club)&&p.clubId===p.club,"invalid club "+p.id);
  check(p.season==="2022-23"&&POS.includes(p.position),"wrong season/position "+p.id);
  check(typeof p.nameKo==="string"&&p.nameKo.length>0&&typeof p.nameOriginal==="string"&&p.nameOriginal.length>0,"missing identity "+p.id);
  check(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"invalid DOB string "+p.id);
  check(GRADES.includes(p.tier),"invalid grade "+p.id);
  check(["starter","backup"].includes(p.role),"role missing "+p.id);
  check(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=34,"invalid appearances "+p.id);
  check(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,"invalid starts "+p.id);
  check(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>0&&p.leagueMinutes<=3060,"invalid minutes "+p.id);
  check(p.leagueAppearances===p.threeSeasonReview?.records?.["2022-23"]?.appearances,"current season source record mismatch "+p.id);
  check(p.sources?.length>=2&&p.assessmentRationale,"missing source/evaluation "+p.id);
  check(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2020-21,2021-22,2022-23","invalid three-year assessment seasons "+p.id);
  for(const y of ["2020-21","2021-22","2022-23"])check(p.threeSeasonReview?.records?.[y]!==undefined,"missing history slot "+p.id+"/"+y);
  if(p.position==="GK")check(p.goals2022===null,"keeper conceded as goals "+p.id);
  if(p.tier===null)check(p.rank===null,"unrated assigned a rank "+p.id);
  else check(Number.isInteger(p.rank)&&p.rank>=1,"rated player missing rank "+p.id);
}
for(const club of clubIds)for(const position of POS)check(data.players.filter(p=>p.club===club&&p.position===position&&p.role==="backup").length<=1,"club backup quota exceeded "+club+"/"+position);
for(const position of POS){
 const records=data.players.filter(p=>p.position===position&&p.rank!==null).map(p=>p.rank).sort((a,b)=>a-b);
 check(records.every((r,i)=>r===i+1),"duplicate or omitted position rank "+position);
}
const computed=Object.fromEntries(GRADES.filter(g=>g!==null).map(g=>[g,data.players.filter(p=>p.tier===g).length]));
computed["미평가"]=data.players.filter(p=>p.tier===null).length;
for(const [g,n] of Object.entries(computed))check((data.meta.tierSummary[g]||0)===n,"tier summary out of sync "+g);
const wc=computed["S"]+computed["A+"],lt=wc+computed["A"]+computed["A-"];
check(data.meta.worldClassCount===wc&&data.meta.leagueTopClassCount===lt,"top class counts mismatch");
check(data.bestXi.length===11&&new Set(data.bestXi.map(b=>b.playerId)).size===11,"Best XI not 11 unique people");
for(const [pos,expected] of Object.entries({GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}))check(data.bestXi.filter(b=>b.position===pos).length===expected,"Best XI shape invalid "+pos);
for(const b of data.bestXi){
 const p=data.players.find(p=>p.id===b.playerId);
 check(!!p&&p.position===b.position,"Best XI player not found in correct position "+b.playerId);
 check(b.status==="proposed_unapproved","non-draft XI "+b.playerId);
}
const ryerson=data.players.filter(p=>p.name==="Julian Ryerson");
check(ryerson.length===2&&new Set(ryerson.map(p=>p.club)).size===2,"Ryerson dual-team club spells lost");
check(data.meta.verificationSummary.fullThreeSeasonIndependentVerified===0,"incorrect full historical verification claim");
warnings.push("This verifies STRUCTURE, not three-season historical quality, independent birthdays, performance or primary-position match frequency.");
warnings.push("A DRAFT-archived previous season is NOT independent prior-year evidence.");
warnings.push("Locally running node does NOT certify GitHub Actions, deployment, or live webpage interactions.");
const result={passed:errors.length===0,clubs:data.clubs.length,playerClubStints:data.players.length,uniquePersonsByNameDOB:new Set(data.players.map(p=>p.name+"|"+p.born)).size,tiers:computed,worldClass:wc,leagueTopClass:lt,BestXI:data.bestXi.length,errors,warnings};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
