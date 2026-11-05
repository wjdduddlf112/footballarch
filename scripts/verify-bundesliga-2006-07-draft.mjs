// Bundesliga 2006-07 DRAFT structural audit (not independent historic fact verification)
// Run: node scripts/verify-bundesliga-2006-07-draft.mjs
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const d=read("data/bundesliga-2006-07.json");
const shared=read("data/bundesliga-standings-verified-1999-2026.json").seasons["2006-07"];
const errors=[],pending=[];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const expected=["stuttgart","schalke","bremen","bayern","leverkusen","nurnberg","hsv"];
const permittedVerification=["verified","partially_verified","evidence_pending","conflicting_sources"];
const assert=(condition,message)=>{if(!condition)errors.push(message)};
assert(d.meta?.season==="2006-07"&&d.meta?.leagueId==="bundesliga","wrong league/season");
assert(d.meta?.status==="draft"&&d.meta?.bestXiReview?.status==="proposed_unapproved","DRAFT required");
assert(d.qualifiers?.length===7,"seven European participants required");
const qualified=new Set(d.qualifiers.map(q=>q.club));
assert(expected.every(c=>qualified.has(c))&&qualified.size===7,"2007-08 actual qualifiers mismatch");
assert(d.standings?.length===18&&shared?.standings?.length===18,"Bundesliga standings must have 18 clubs");
for(let i=0;i<18;i++){
 const a=d.standings[i],b=shared.standings[i];
 assert(a&&b&&["rank","club","played","wins","draws","losses","goalsFor","goalsAgainst","points","competition"].every(k=>a[k]===b[k]),"standings parity row "+(i+1));
}
for(const q of d.qualifiers){
 assert(q.competition===d.standings.find(x=>x.club===q.club)?.competition,"qualifier mismatch "+q.club);
 assert(Array.isArray(q.sources)&&q.sources.length>0,"source missing for qualifying club "+q.club);
}
assert(d.players.length===d.meta.candidateCount,"candidate count mismatch");
const ids=new Set(),identities=new Set(),roles=new Map(),byPos=new Map(),counts={};
for(const p of d.players){
 assert(p.id&&!ids.has(p.id),"duplicate or empty ID "+p.id);ids.add(p.id);
 const identity=p.club+"|"+p.born+"|"+p.nameOriginal;
 assert(!identities.has(identity),"duplicate current team player "+identity);identities.add(identity);
 assert(qualified.has(p.club),"invalid club "+p.id);
 assert(p.season==="2006-07","wrong season "+p.id);
 assert(p.clubNameOriginal&&p.nameKo&&p.nameOriginal,"missing player names "+p.id);
 assert(positions.includes(p.position),"bad position "+p.id);
 assert(["starter","backup"].includes(p.role),"bad role "+p.id);
 assert(permittedVerification.includes(p.verificationStatus),"invalid verification status "+p.id);
 assert(p.review==="draft_unapproved","not DRAFT "+p.id);
 const rc=p.club+"|"+p.position;
 if(!roles.has(rc))roles.set(rc,{starter:0,backup:0});
 if(p.role==="backup")roles.get(rc).backup++;
 else roles.get(rc).starter++;
 assert(roles.get(rc).backup<=1,"more than one backup in position "+rc);
 // Intentional: NO per-team fixed number of starters and NO positional starter cap.
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born)&&!Number.isNaN(Date.parse(p.born)),"bad DOB "+p.id);
 assert(p.leagueAppearances===null||(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0&&p.leagueAppearances<=34),"bad appearances "+p.id);
 assert(p.leagueStarts===null||(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances),"bad starts "+p.id);
 if(p.leagueAppearances===null)pending.push("League appearance needs checking: "+p.id);
 assert(p.tier===null||tiers.includes(p.tier),"bad tier "+p.id);
 if(p.tier===null){assert(p.rank===null,"unrated with numbered rank "+p.id);assert(p.verificationStatus==="evidence_pending"||p.evidencePending===true,"unrated needs evidence_pending "+p.id);}
 else assert(Number.isInteger(p.rank)&&p.rank>0,"rated without rank "+p.id);
 assert(p.evidence?.officialRoster&&p.evidence?.currentSeason&&p.sources?.length>=2,"missing roster/stats sources "+p.id);
 assert(p.threeSeasonReview?.records&&["2004-05","2005-06","2006-07"].every(s=>p.threeSeasonReview.records[s]),"3-season structure missing "+p.id);
 assert(p.tierReview&&p.tierReview.length>30,"assessment reason missing "+p.id);
 if(p.verificationStatus!=="verified")pending.push("Historical full certification pending "+p.id);
 (byPos.get(p.position)||byPos.set(p.position,[]).get(p.position)).push(p);
 counts[p.tier??"미평가"]=(counts[p.tier??"미평가"]||0)+1;
}
for(const [pos,arr] of byPos){
 const ranked=arr.filter(x=>x.tier!==null).sort((a,b)=>a.rank-b.rank);
 const seen=new Set();
 for(let i=0;i<ranked.length;i++){
  const p=ranked[i];
  assert(p.rank===i+1,"non-contiguous position ranks "+pos+" "+p.nameOriginal);
  assert(!seen.has(p.rank),"duplicate position rank "+pos+" "+p.rank);seen.add(p.rank);
  if(i)assert(tiers.indexOf(ranked[i-1].tier)<=tiers.indexOf(p.tier),"rank/tier inversion "+pos+" rank="+p.rank);
 }
}
for(const tier of tiers)assert((d.meta.tierSummary?.[tier==="A"?"A0":tier==="B"?"B0":tier==="C"?"C0":tier]||0)===(counts[tier]||0),"tier count "+tier);
const wc=d.players.filter(p=>["S","A+"].includes(p.tier)).length, top=d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
assert(d.meta.worldClassCount===wc&&d.meta.leagueTopClassCount===top,"World / League top count mismatch");
assert(d.bestXi.length===11&&d.meta.formation==="4-4-2","Best XI shape or count bad");
const shape={GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,CAM:1,LW:0,RW:0,ST:2};
const shapeUsed={},xiIds=new Set();
for(const p of d.bestXi){
 shapeUsed[p.position]=(shapeUsed[p.position]||0)+1;
 assert(!xiIds.has(p.playerId),"duplicate Best XI player");xiIds.add(p.playerId);
 const row=d.players.find(x=>x.id===p.playerId);
 assert(row&&row.position===p.position,"Best XI player position mismatch "+p.playerId);
 assert(p.status==="proposed_unapproved","XI user approval must be pending "+p.playerId);
}
for(const pos of positions)assert((shapeUsed[pos]||0)===shape[pos],"wrong XI slot "+pos);
const report={status:errors.length?"FAIL":"PASS",errors,pendingCount:pending.length,players:d.players.length,clubs:qualified.size,starters:d.players.filter(p=>p.role==="starter").length,backups:d.players.filter(p=>p.role==="backup").length,worldClass:wc,leagueTop:top,bestXi:d.bestXi.length,threeSeasonDirectDFBPlayers:d.candidateAudit?.threeSeasonDirectDFBPlayerNames||[],fullHistoricallyVerified:d.players.filter(p=>p.verificationStatus==="verified").length,notes:"PASS means JSON structural consistency; it is NOT full 3-season historical verification and NOT browser verification."};
console.log(JSON.stringify(report,null,2));
if(errors.length)process.exitCode=1;
