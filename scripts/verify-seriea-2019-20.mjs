// Run from project root: node scripts/verify-seriea-2019-20.mjs
// Structural/data consistency check, not a certification of independently checked historical stats.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/seriea-2019-20.json","utf8"));
const archive=JSON.parse(readFileSync("data/seriea-standings-verified-1999-2026.json","utf8"));
const e=[], eligible=["juventus","inter","atalanta","lazio","roma","milan","napoli"], positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"], tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const ids=new Set, people=new Set, groups=new Map;
if(d.meta?.leagueId!=="seriea"||d.meta?.season!=="2019-20"||d.meta?.status!=="draft_unapproved")e.push("season/league/status incorrect");
if(d.qualifiers?.length!==7||eligible.some(c=>!d.qualifiers.find(x=>x.club===c)))e.push("UEFA qualifier clubs incorrect");
if(JSON.stringify(d.standings)!==JSON.stringify(archive.seasons["2019-20"].standings))e.push("historic league table unexpectedly modified");
if(d.meta.candidateCount!==d.players.length)e.push("candidateCount mismatches actual players");
for(const p of d.players){
 if(ids.has(p.id))e.push("duplicate id "+p.id);ids.add(p.id);
 const key=p.nameOriginal+"#"+p.born;if(people.has(key))e.push("duplicate player identity "+key);people.add(key);
 if(!eligible.includes(p.club)||!positions.includes(p.position)||!tiers.includes(p.tier))e.push("bad club/pos/tier "+p.id);
 if(!p.nameKo||!p.nameOriginal||!/^\d{4}-\d{2}-\d{2}$/.test(p.born||""))e.push("name/dob incorrect "+p.id);
 if(!(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes<=p.leagueAppearances*110&&p.leagueGoals>=0))e.push("league numbers invalid "+p.id);
 if(p.position==="GK"&&p.leagueGoals!==0)e.push("goalkeeper conceded encoded as scored "+p.id);
 if(p.sources?.[0]!==d.candidateAudit.currentSeasonSources[p.club])e.push("missing current source "+p.id);
 const k=p.club+":"+p.position;const g=groups.get(k)||{starter:0,backup:0};if(!["starter","backup"].includes(p.role))e.push("bad role "+p.id);else g[p.role]++;groups.set(k,g);
 if(!["2017-18","2018-19","2019-20"].every(s=>p.threeSeasonReview?.records?.[s]))e.push("missing three-season review slot "+p.id);
}
for(const [k,g] of groups){const pos=k.split(":")[1];if(g.backup>1||g.starter>(pos==="CB"?3:["CM","ST"].includes(pos)?2:1))e.push("role cap exceeded "+k)}
for(const pos of positions){
 const ps=d.players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 if(ps.some((p,i)=>p.rank!==i+1))e.push("nonconsecutive position ranks "+pos);
 for(let i=1;i<ps.length;i++)if(tiers.indexOf(ps[i-1].tier)>tiers.indexOf(ps[i].tier))e.push("tier-rank inversion "+pos);
}
for(const tier of tiers){const n=d.players.filter(p=>p.tier===tier).length;const display=tier==="A"?"A0":tier==="B"?"B0":tier==="C"?"C0":tier;if(d.meta.tierDistribution[display]!==n)e.push("tier distribution mismatch "+tier)}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)e.push("Best XI not eleven unique players");
for(const xi of d.bestXi){const p=d.players.find(x=>x.id===xi.playerId);if(!p||p.position!==xi.position)e.push("Best XI missing/mismatched position "+xi.playerId)}
const verifiedPrevious=d.players.reduce((n,p)=>n+["2017-18","2018-19"].filter(y=>p.threeSeasonReview.records[y].appearances!=null).length,0);
if(d.meta.previousYearGaps!==d.players.length*2-verifiedPrevious)e.push("historical null slot count incorrect");
const distribution=Object.fromEntries(tiers.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
console.log(JSON.stringify({season:d.meta.season,qualifiedClubs:d.qualifiers.length,players:d.players.length,worldClass:distribution.S+distribution["A+"],leagueTop:distribution.S+distribution["A+"]+distribution.A+distribution["A-"],historicalGaps:d.meta.previousYearGaps,errors:e},null,2));
if(e.length)process.exitCode=1;
