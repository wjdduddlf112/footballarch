// Run in repository root: node scripts/verify-bundesliga-2023-24.mjs
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const a=read("data/bundesliga-2023-24.json");
const historical=read("data/bundesliga-standings-verified-1999-2026.json");
const errors=[],warnings=[];
const check=(b,reason)=>{if(!b)errors.push(reason)};
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const clubIds=new Set(a.clubs.map(c=>c.id));
const qualified=historical.seasons["2023-24"].europeanParticipation;
check(a.meta.season==="2023-24"&&a.meta.leagueId==="bundesliga"&&a.meta.qualifyingSeason==="2024-25","Wrong season or league");
check(a.meta.status==="draft"&&a.meta.dataStatus==="draft_unapproved","Premature approval status");
check(a.qualifiers.length===8&&a.clubs.length===8&&clubIds.size===8,"Expected eight qualified Bundesliga clubs");
check(Object.keys(qualified).length===8,"2024-25 UEFA participants must be eight for Bundesliga");
for(const q of a.qualifiers)check(clubIds.has(q.club)&&qualified[q.club]===q.competition,"Unmatched UEFA entrant/competition "+q.club);
check(a.standings.length===18&&new Set(a.standings.map(s=>s.club)).size===18,"Bundesliga standings 18 unique required");
check(a.meta.candidateCount===a.players.length,"Metadata candidateCount mismatch");
check(new Set(a.players.map(p=>p.id)).size===a.players.length,"Duplicate player ID");
for(const p of a.players){
 check(clubIds.has(p.club)&&p.clubId===p.club,"Unknown player club "+p.id);
 check(pos.includes(p.position)&&p.season==="2023-24","Invalid position or season "+p.id);
 check(typeof p.nameKo==="string"&&p.nameKo.length>0&&typeof p.nameOriginal==="string"&&p.nameOriginal.length>0,"Missing names "+p.id);
 check(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"Invalid birthdate "+p.id);
 check(tiers.includes(p.tier)||p.tier===null,"Invalid tier "+p.id);
 check(["starter","backup"].includes(p.role),"Invalid role "+p.id);
 check(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=34,"Invalid current apps "+p.id);
 check(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,"Invalid current starts "+p.id);
 check(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>0&&p.leagueMinutes<=3060,"Invalid current minutes "+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2021-22,2022-23,2023-24","Invalid assessment period "+p.id);
 for(const y of ["2021-22","2022-23","2023-24"])check(p.threeSeasonReview?.records?.[y]!==undefined,"Missing evaluation record "+p.id+" "+y);
 check(p.leagueAppearances===p.threeSeasonReview?.records?.["2023-24"]?.appearances,"Current year stats duplicate inconsistency "+p.id);
 check(p.sources?.length>=2&&p.assessmentRationale,"Missing evidence or rationale "+p.id);
 if(p.position==="GK")check(p.goals2023===null,"Goalkeeper conceded goals misinterpreted "+p.id);
 if(p.tier===null)check(p.rank===null,"Unrated candidate given rank "+p.id);
 else check(Number.isInteger(p.rank)&&p.rank>=1,"Rated candidate without rank "+p.id);
}
for(const club of clubIds)for(const position of pos)check(a.players.filter(p=>p.club===club&&p.position===position&&p.role==="backup").length<=1,"Too many backups at "+club+"/"+position);
for(const position of pos){
 const r=a.players.filter(p=>p.position===position&&p.rank!==null).map(p=>p.rank).sort((x,y)=>x-y);
 check(r.every((v,i)=>v===i+1),"Noncontiguous ranking "+position);
}
const counts=Object.fromEntries([...tiers.map(t=>[t,a.players.filter(p=>p.tier===t).length]),["미평가",a.players.filter(p=>p.tier===null).length]]);
for(const [tier,n] of Object.entries(counts))check((a.meta.tierSummary[tier]||0)===n,"Tier count mismatch "+tier);
const wc=counts.S+counts["A+"],top=wc+counts.A+counts["A-"];
check(a.meta.worldClassCount===wc&&a.meta.leagueTopClassCount===top,"Top-class aggregate mismatch");
check(a.bestXi.length===11&&new Set(a.bestXi.map(b=>b.playerId)).size===11,"Best XI must contain 11 unique players");
const expected={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const [position,n] of Object.entries(expected))check(a.bestXi.filter(b=>b.position===position).length===n,"4-2-3-1 slot error "+position);
for(const b of a.bestXi){
 const player=a.players.find(p=>p.id===b.playerId);
 check(!!player&&player.position===b.position,"XI player/position incorrect "+b.playerId);
 check(b.status==="proposed_unapproved","XI must be proposed_unapproved "+b.playerId);
}
check(!a.players.some(p=>p.name==="Sébastien Haller"),"Marginal Dortmund extra ST reintroduced");
check(a.meta.verificationSummary.fullThreeSeasonIndependentVerified===0,"Full historical player audit unearned");
warnings.push("The script checks structural integrity, not independent player-level three-year quality or matchwise role correctness.");
warnings.push("A linked past FootballArchive DRAFT year does not prove independent historical verification.");
warnings.push("Locally checking JSON does not prove that GitHub Actions or GitHub Pages live browser views work.");
const output={passed:errors.length===0,clubs:a.clubs.length,playerStints:a.players.length,tiers:counts,worldClass:wc,leagueTopClass:top,bestXi:a.bestXi.length,errors,warnings};
process.stdout.write(JSON.stringify(output,null,2)+"\n");
if(errors.length)process.exitCode=1;
