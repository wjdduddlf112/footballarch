// PL 2014-15 DRAFT structural verification (NOT independent historical performance validation).
import assert from "node:assert/strict"; import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2014-15.json","utf8"));
const clubs=["chelsea","mancity","arsenal","manutd","tottenham","liverpool","southampton","westham"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"],cap={"GK":2,"CB":3,"LB":2,"RB":2,"DM":2,"CM":3,"CAM":2,"LW":2,"RW":2,"ST":3},xi={"GK":1,"CB":2,"LB":1,"RB":1,"DM":1,"CM":1,"CAM":1,"LW":1,"RW":1,"ST":1};
assert.equal(d.meta.season,"2014-15");assert.equal(d.meta.qualifyingSeason,"2015-16");
assert.equal(d.meta.status,"draft");assert.equal(d.meta.standingsOnly,false);assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);assert.deepEqual(d.standings.map(x=>x.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.reduce((n,x)=>n+x.played,0),760);assert.equal(d.standings[0].club,"chelsea");
assert.deepEqual(d.qualifiers.map(x=>x.club).sort(),[...clubs].sort());assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,4);assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,4);
assert.equal(d.qualifiers.find(x=>x.club==="westham").competition,"UEL");
assert.deepEqual(d.standings.filter(x=>x.competition).map(x=>x.club).sort(),[...clubs].sort());
assert.equal(d.meta.formation,"4-2-3-1");assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length);assert.equal(d.players.length,d.meta.candidateCount);
for(const p of d.players){
 assert(clubs.includes(p.club));assert(positions.includes(p.position));assert(grades.includes(p.tier));
 assert(["starter","backup"].includes(p.role));assert.equal(p.review,"draft_unapproved");assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born));
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources?.length);
 assert.equal(p.leagueStarts,null);assert.equal(p.leagueAppearances,null);assert.equal(p.positionMajorityVerified,false);
 assert(p.previousSeasons?.["2012-13"]&&p.previousSeasons?.["2013-14"]);assert(p.rank>0);
}
for(const club of clubs){
 const ps=d.players.filter(p=>p.club===club);assert.equal(ps.filter(p=>p.role==="starter").length,11,club);
 for(const [pos,n] of Object.entries(cap)){assert(ps.filter(p=>p.position===pos).length<=n,club+" "+pos);assert(ps.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" "+pos)}
 const research=JSON.parse(readFileSync("audit/player-research/premierleague-2014-15-"+club+"-fresh-draft.json","utf8"));
 assert.deepEqual(research.players,ps,club+" research mismatch");
}
for(const position of positions){const a=d.players.filter(p=>p.position===position).sort((a,b)=>a.rank-b.rank);a.forEach((p,i)=>{assert.equal(p.rank,i+1,position+" rank");if(i)assert(grades.indexOf(a[i-1].tier)<=grades.indexOf(p.tier),position+" tier")})}
assert.equal(d.bestXi.length,11);assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [p,n] of Object.entries(xi))assert.equal(d.bestXi.filter(x=>x.position===p).length,n);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);assert(p);assert.equal(x.position,p.position);assert(p.rank<=(p.position==="CB"?2:1))}
console.log("PASS 2014-15: 8 UEFA entrants, "+d.players.length+" candidate tiers/ranks, 11 starters/team, slots and positional caps; HISTORICAL per-player verification pending");
