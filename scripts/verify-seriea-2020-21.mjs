// Run from repository root: node scripts/verify-seriea-2020-21.mjs
// Structure, eligibility, identity and arithmetic checks. Does NOT certify historical facts or player grades.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2020-21.json","utf8"));
const original=JSON.parse(readFileSync("data/seriea-standings-verified-1999-2026.json","utf8"));
const eligible=["inter","milan","atalanta","juventus","napoli","lazio","roma"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],ids=new Set(),people=new Set(),roles=new Map();
if(d.meta?.leagueId!=="seriea"||d.meta?.season!=="2020-21"||d.meta?.status!=="draft_unapproved") errors.push("wrong metadata");
if(d.qualifiers?.length!==7||eligible.some(c=>!d.qualifiers.some(q=>q.club===c))) errors.push("2021-22 UEFA seven qualifiers incorrect");
if(JSON.stringify(d.standings)!==JSON.stringify(original.seasons["2020-21"].standings)) errors.push("pre-existing verified 20-club table modified");
if(d.meta.candidateCount!==d.players.length) errors.push("candidate count mismatch");
for(const p of d.players){
  if(ids.has(p.id))errors.push("duplicate player id "+p.id);ids.add(p.id);
  const identity=p.nameOriginal+"#"+p.born;if(people.has(identity))errors.push("same player repeated "+identity);people.add(identity);
  if(!eligible.includes(p.club)||!positions.includes(p.position)||!tiers.includes(p.tier)) errors.push("bad club/role/grade "+p.id);
  if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")) errors.push("missing name/date "+p.id);
  if(!(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0&&p.leagueMinutes<=p.leagueAppearances*110&&p.leagueGoals>=0)) errors.push("bad league values "+p.id);
  if(p.position==="GK"&&p.leagueGoals!==0) errors.push("GK conceded mistakenly scored "+p.id);
  if(p.sources?.[0]!==d.candidateAudit.currentSeasonSources[p.club]) errors.push("missing roster provenance "+p.id);
  if(!["starter","backup"].includes(p.role))errors.push("invalid role "+p.id);
  const key=p.club+":"+p.position;const g=roles.get(key)||{starter:0,backup:0};if(["starter","backup"].includes(p.role))g[p.role]++;roles.set(key,g);
  for(const y of ["2018-19","2019-20","2020-21"])if(!p.threeSeasonReview.records[y])errors.push("missing year "+p.id+" "+y);
}
for(const [k,g] of roles){
  const position=k.split(":")[1];if(g.backup>1)errors.push("too many backups "+k);
  const max=position==="CB"?3:["CM","CAM","ST"].includes(position)?2:1;
  if(g.starter>max)errors.push("too many starters "+k);
}
for(const po of positions){
  const ps=d.players.filter(p=>p.position===po).sort((a,b)=>a.rank-b.rank);
  if(ps.some((p,i)=>p.rank!==i+1))errors.push("rank not 1..N "+po);
  if(ps.some((p,i)=>i>0&&tiers.indexOf(ps[i-1].tier)>tiers.indexOf(p.tier)))errors.push("rank-tier inversion "+po);
}
for(const t of tiers){
  const count=d.players.filter(p=>p.tier===t).length;
  const display=t==="A"?"A0":t==="B"?"B0":t==="C"?"C0":t;
  if(d.meta.tierDistribution[display]!==count)errors.push("tier count "+display);
}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)errors.push("Best XI not unique 11");
for(const xi of d.bestXi){const p=d.players.find(x=>x.id===xi.playerId);if(!p||p.position!==xi.position)errors.push("XI position mismatch "+xi.playerId)}
const missing=d.players.reduce((n,p)=>n+["2018-19","2019-20"].filter(y=>p.threeSeasonReview.records[y].appearances==null).length,0);
if(missing!==d.meta.previousYearGaps)errors.push("year gap metadata incorrect");
const distribution=Object.fromEntries(tiers.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
console.log(JSON.stringify({season:d.meta.season,eligible:d.qualifiers.length,candidates:d.players.length,worldClass:distribution.S+distribution["A+"],leagueTop:distribution.S+distribution["A+"]+distribution.A+distribution["A-"],missingPriorSeasonSlots:missing,errors},null,2));
if(errors.length)process.exitCode=1;
