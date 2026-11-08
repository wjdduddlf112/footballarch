// node scripts/verify-seriea-2018-19.mjs
// Structural validation of the DRAFT 2018-19 Serie A season; historical independent auditing is separate.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2018-19.json","utf8"));
const errors=[];
const expected=["juventus","napoli","atalanta","inter","roma","torino","lazio"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const ids=new Set(),identities=new Set(),groups=new Map();
if(d.meta?.season!=="2018-19"||d.meta?.status!=="draft_unapproved")errors.push("Wrong season or approval status");
if(d.standings?.length!==20)errors.push("Expected 20 league standings");
if(d.qualifiers?.length!==7||expected.some(x=>!d.qualifiers.some(q=>q.club===x)))errors.push("Incorrect UEFA club subset");
if(d.players?.length!==130)errors.push("Unexpected candidate count (inspect change; count is current baseline, not selection target)");
for(const p of d.players||[]){
 if(ids.has(p.id))errors.push("Duplicate ID "+p.id);ids.add(p.id);
 const identity=p.name+"#"+p.born;if(identities.has(identity))errors.push("Duplicate identity "+identity);identities.add(identity);
 if(!expected.includes(p.club)||!positions.includes(p.position)||!tiers.includes(p.tier))errors.push("Invalid club/position/tier "+p.id);
 if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d\d-\d\d$/.test(p.born||""))errors.push("Missing names or DOB "+p.id);
 if(!(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes<=p.leagueAppearances*110))errors.push("Invalid minutes or starts "+p.id);
 if(!["starter","backup"].includes(p.role))errors.push("Invalid role "+p.id);
 const key=p.club+":"+p.position;const g=groups.get(key)||{starter:0,backup:0};g[p.role]++;groups.set(key,g);
}
for(const [key,g] of groups){
 if(g.backup>1)errors.push("Exceeded one backup "+key);
 const role=key.split(":")[1];
 if(g.starter>(role==="CB"?3:role==="CM"||role==="ST"?2:1))errors.push("Too many starters "+key);
}
for(const position of positions){
 const rs=d.players.filter(p=>p.position===position).map(p=>p.rank).sort((a,b)=>a-b);
 if(rs.some((n,i)=>n!==i+1))errors.push("Ranks not consecutive "+position);
}
const distribution={};
for(const tier of tiers){const n=d.players.filter(p=>p.tier===tier).length;distribution[tier]=n;const display=tier==="A"?"A0":tier==="B"?"B0":tier==="C"?"C0":tier;if(d.meta?.tierDistribution?.[display]!==n)errors.push("Tier count mismatch "+display)}
if(d.bestXi?.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("Best XI not unique eleven");
for(const xi of d.bestXi||[]){const p=d.players.find(p=>p.id===xi.playerId);if(!p||xi.position!==p.position)errors.push("Best XI position/id invalid "+xi.playerId)}
if(d.players.some(p=>p.name==="Cristián Zapata"||p.club==="napoli"&&p.name==="Leonardo Spinazzola"))errors.push("Reintroduced confirmed cross-person identity error");
const coverage={bothYears:0,oneYear:0,neitherYear:0};
for(const p of d.players){const n=["2016-17","2017-18"].filter(y=>p.threeSeasonReview?.records?.[y]?.appearances!=null).length;if(n===2)coverage.bothYears++;else if(n===1)coverage.oneYear++;else coverage.neitherYear++}
console.log(JSON.stringify({season:d.meta.season,players:d.players.length,qualifiedClubs:d.qualifiers.length,worldClass:distribution.S+distribution["A+"],leagueTop:distribution.S+distribution["A+"]+distribution.A+distribution["A-"],coverage,errors},null,2));
if(errors.length)process.exitCode=1;
