// Run from repository root: node scripts/verify-bundesliga-2021-22.mjs
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const data=read("data/bundesliga-2021-22.json");
const standingsArchive=read("data/bundesliga-standings-verified-1999-2026.json");
const errors=[],warnings=[];
const P=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const T=["S","A+","A","A-","B+","B","B-","C+","C","C-","D",null];
const count=(arr,predicate)=>arr.filter(predicate).length;
const assert=(predicate,message)=>{if(!predicate)errors.push(message);};
const season="2021-22",target="2022-23";
const ids=new Set(data.clubs.map(c=>c.id));
const playerIds=new Set(data.players.map(p=>p.id));
const qualifierIds=new Set(data.qualifiers.map(q=>q.club));
assert(data.meta.leagueId==="bundesliga"&&data.meta.season===season&&data.meta.qualifyingSeason===target,"Wrong season/league");
assert(data.meta.status==="draft"&&data.meta.dataStatus==="draft_unapproved","Unexpected approved/final data");
assert(data.clubs.length===8&&ids.size===8,"Expected 8 actual UEFA qualifiers");
assert(data.qualifiers.length===8&&qualifierIds.size===8&&[...qualifierIds].every(id=>ids.has(id)),"Invalid eight qualifier records");
const official=standingsArchive.seasons[season].europeanParticipation;
assert([...qualifierIds].every(c=>official[c]===data.qualifiers.find(q=>q.club===c).competition),"EU entrant/competition source archive mismatch");
assert(Object.keys(official).length===8,"Wrong number of eligible UEFA entrants in source standings");
assert(data.standings.length===18&&new Set(data.standings.map(s=>s.club)).size===18,"Expected 18 distinct Bundesliga clubs");
assert(data.players.length===playerIds.size,"Duplicate player IDs");
assert(data.meta.candidateCount===data.players.length,"Candidate count mismatch");
const yearFmt=/^\d{4}-\d{2}-\d{2}$/;
for(const p of data.players){
 assert(ids.has(p.club)&&p.clubId===p.club,"Invalid player club: "+p.id);
 assert(P.includes(p.position),"Invalid position: "+p.id);
 assert(T.includes(p.tier),"Invalid tier: "+p.id);
 assert(p.season===season&&p.review==="draft_unapproved"||p.review==="evidence_pending","Invalid player review state: "+p.id);
 assert(yearFmt.test(p.born),"Missing/invalid DOB: "+p.id);
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal,"Missing identity: "+p.id);
 assert(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=34,"Invalid league appearances: "+p.id);
 assert(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,"Invalid league starts: "+p.id);
 assert(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>=0&&p.leagueMinutes<=3060,"Invalid minutes: "+p.id);
 assert(["starter","backup"].includes(p.role),"Invalid starter/backup: "+p.id);
 assert(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2019-20,2020-21,2021-22","Wrong assessment period: "+p.id);
 for(const y of ["2019-20","2020-21","2021-22"])assert(p.threeSeasonReview?.records?.[y],"Missing season evidence record: "+p.id+" "+y);
 assert(p.sources?.length>0&&p.assessmentRationale,"Missing player sources/rationale: "+p.id);
 if(p.tier===null)assert(p.rank===null,"Unrated player has rank: "+p.id);
 if(p.tier!==null)assert(Number.isInteger(p.rank)&&p.rank>=1,"Rated player without rank: "+p.id);
 if(p.position==="GK")assert(p.goals2021===null,"Goalkeeper conceded-goal confusion: "+p.id);
}
for(const c of ids)for(const pos of P)assert(count(data.players,p=>p.club===c&&p.position===pos&&p.role==="backup")<=1,">1 backup: "+c+" "+pos);
for(const pos of P){
 const list=data.players.filter(p=>p.position===pos&&p.rank!==null);
 const ranks=list.map(p=>p.rank).sort((a,b)=>a-b);
 assert(ranks.every((r,i)=>r===i+1),"Position rank gap or duplicate: "+pos);
}
const totals=Object.fromEntries([...T.filter(t=>t!==null).map(t=>[t,count(data.players,p=>p.tier===t)]),["미평가",count(data.players,p=>p.tier===null)]]);
for(const [t,n] of Object.entries(totals))assert((data.meta.tierSummary[t]||0)===n,"Tier summary mismatch "+t);
assert(data.meta.worldClassCount===totals.S+totals["A+"],"World class count mismatch");
assert(data.meta.leagueTopClassCount===totals.S+totals["A+"]+totals.A+totals["A-"],"League top count mismatch");
assert(data.bestXi.length===11&&new Set(data.bestXi.map(x=>x.playerId)).size===11,"Best XI count or duplicates");
const shape={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const [slot,n] of Object.entries(shape))assert(count(data.bestXi,b=>b.position===slot)===n,"Best XI slot mismatch: "+slot);
for(const x of data.bestXi){
 const player=data.players.find(p=>p.id===x.playerId);
 assert(!!player,"Unknown Best XI player "+x.playerId);
 if(player)assert(player.position===x.position,"Best XI player's registered position mismatch: "+player.id);
 assert(x.status==="proposed_unapproved","Best XI not marked draft: "+x.playerId);
}
assert(data.meta.verificationSummary.fullThreeSeasonIndependentVerified===0,"Full historical audit incorrectly claimed");
warnings.push("This structural script is NOT a complete 3-season historical or individual position audit.");
warnings.push("Current-season statistics for 162 candidates require independent 2nd-pass person-level verification.");
warnings.push("Assist values may be provider-specific; not independently validated for every player.");
warnings.push("Checking files locally is NOT a live GitHub Actions/Pages/Chromium UI test.");
const result={pass:errors.length===0,players:data.players.length,clubs:data.clubs.length,positions:P.length,tiers:totals,worldClass:totals.S+totals["A+"],leagueTop:totals.S+totals["A+"]+totals.A+totals["A-"],bestXi:data.bestXi.length,errors,warnings};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(!result.pass)process.exitCode=1;
