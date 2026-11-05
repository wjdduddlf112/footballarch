// node scripts/verify-bundesliga-2004-05-draft.mjs
// Structural checks only. A passing result DOES NOT certify 3-season individual historical performance.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2004-05.json","utf8"));
const archive=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8"));
const source=archive.seasons["2004-05"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const ranks=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],pending=[],fail=t=>errors.push(t);
if(d.meta.season!=="2004-05"||d.meta.leagueId!=="bundesliga"||d.meta.status!=="draft")fail("Wrong season or approval state");
if(d.qualifiers.length!==10||new Set(d.qualifiers.map(q=>q.club)).size!==10)fail("Need ten unique actual 2005 European entrants including UEFA Fair Play Mainz");
const qual=new Set(d.qualifiers.map(q=>q.club));
if(d.standings.length!==18)fail("Full league table must have 18 clubs");
if(!source||d.standings.some((r,i)=>["club","rank","played","wins","draws","losses","goalsFor","goalsAgainst","points"].some(k=>r[k]!==source.standings[i]?.[k])))fail("Standings mismatch shared verified archive");
if(d.qualifiers.some(q=>d.standings.find(s=>s.club===q.club)?.competition!==q.competition))fail("Qualification mismatch");
const ids=new Set(),names=new Set(),byClub=new Map(),byPos=new Map();
for(const p of d.players){
 if(!p.id||ids.has(p.id))fail("Duplicate player ID: "+p.id);ids.add(p.id);
 const k=p.club+"::"+p.name;
 if(names.has(k))fail("Same player duplicate: "+k);names.add(k);
 if(!qual.has(p.club))fail("Unqualified club: "+p.club);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)fail("Missing identity: "+p.id);
 if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(p.born||"")||new Date(p.born+"T00:00:00Z").toISOString().slice(0,10)!==p.born)fail("Invalid DOB: "+p.id);
 if(!positions.includes(p.position))fail("Invalid position: "+p.id);
 if(!["starter","backup"].includes(p.role))fail("Invalid role: "+p.id);
 if(p.tier!==null&&!ranks.includes(p.tier))fail("Invalid tier: "+p.id);
 if(!Number.isInteger(p.rank)||p.rank<1)fail("Invalid position rank: "+p.id);
 if(!p.sources?.length||!p.tierReview||!p.threeSeasonReview?.assessmentSeasons)fail("Missing tier documentation: "+p.id);
 if(p.leagueAppearances===null)pending.push("Current-season player appearances missing: "+p.id);
 if(p.leagueStarts===null)pending.push("Current-season starting appearances missing: "+p.id);
 if(p.threeSeasonReview?.status!=="individually_verified_all_three_seasons")pending.push("Three-season independent individual history incomplete: "+p.id);
 if(p.positionVerification!=="verified_matchwise_majority"&&p.position!=="GK")pending.push("Field primary position matchwise incomplete: "+p.id);
 if(!byClub.has(p.club))byClub.set(p.club,[]);byClub.get(p.club).push(p);
 if(!byPos.has(p.position))byPos.set(p.position,[]);byPos.get(p.position).push(p);
}
if(d.players.length!==d.meta.candidateCount)fail("candidateCount mismatch");
if(byClub.size!==10)fail("A candidate club is missing");
for(const [club,ps] of byClub){
 if(ps.filter(p=>p.role==="starter").length!==11)fail("11 representative starters required for: "+club);
 let cnt={};for(const p of ps)cnt[p.position]=(cnt[p.position]||0)+1;
 for(const [pos,n] of Object.entries(cnt))if(n>(["CB","CM","ST"].includes(pos)?4:2))fail("Too many "+pos+" candidates at "+club+": "+n);
}
for(const [pos,ps] of byPos){
 const ranked=ps.slice().sort((a,b)=>a.rank-b.rank);
 if(ranked.some((p,i)=>p.rank!==i+1))fail("Rank sequence gap: "+pos);
 if(ranked.some((p,i)=>i&&ranks.indexOf(p.tier??"D")<ranks.indexOf(ranked[i-1].tier??"D")))fail("Tier/rank order inconsistent: "+pos);
}
const xi=d.bestXi||[];
if(xi.length!==11||new Set(xi.map(p=>p.playerId)).size!==11)fail("XI must contain 11 distinct players");
const formation={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const slot of xi){
 const p=d.players.find(x=>x.id===slot.playerId);
 if(!p||p.position!==slot.position||!slot.reason)fail("Invalid XI nomination "+slot.playerId);
 formation[slot.position]=(formation[slot.position]||0)-1;
}
if(Object.values(formation).some(n=>n!==0))fail("4-2-3-1 XI position mismatch");
if(d.meta.bestXiReview.status!=="proposed_unapproved")fail("XI approval status incorrect");
const byTier=Object.fromEntries(ranks.map(t=>[({"A":"A0","B":"B0","C":"C0"})[t]||t,d.players.filter(p=>p.tier===t).length]));
byTier["미평가"]=d.players.filter(p=>p.tier===null).length;
if(Object.values(byTier).reduce((a,b)=>a+b,0)!==d.players.length)fail("Tier count total mismatch");
const result={passed:!errors.length,season:d.meta.season,clubs:byClub.size,players:d.players.length,starters:d.players.filter(p=>p.role==="starter").length,backups:d.players.filter(p=>p.role==="backup").length,tiers:byTier,ranked:d.players.filter(p=>Number.isInteger(p.rank)).length,worldClass:d.players.filter(p=>["S","A+"].includes(p.tier)).length,leagueTopClass:d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,threeSeasonFullyVerified:d.players.filter(p=>p.threeSeasonReview?.status==="individually_verified_all_three_seasons").length,missingCurrentAppearance:d.players.filter(p=>p.leagueAppearances===null).length,pendingCount:pending.length,errors,warning:"STRUCTURAL PASS is not historical 3-season proof or live website proof."};
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
