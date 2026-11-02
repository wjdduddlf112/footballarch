// PL 2020-21: structural DRAFT validator. Do not interpret passing tests as independent personal historical proof.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2020-21.json","utf8"));
const clubs=["mancity","manutd","liverpool","chelsea","leicester","westham","tottenham"];
const roles=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
const slots={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
assert.equal(d.meta.season,"2020-21");assert.equal(d.meta.qualifyingSeason,"2021-22");
assert.equal(d.meta.status,"draft");assert.equal(d.meta.standingsOnly,false);assert.equal(d.meta.standingsVerified,true);assert.equal(d.meta.europeanQualificationVerified,true);
assert.equal(d.standings.length,20);assert.equal(d.standings.reduce((sum,r)=>sum+r.played,0),760);
assert.deepEqual(d.standings.map(r=>r.rank).sort((a,b)=>a-b),Array.from({length:20},(_,i)=>i+1));
assert.equal(d.standings.find(r=>r.rank===1).club,"mancity");
assert.deepEqual(d.qualifiers.map(q=>q.club).sort(),[...clubs].sort());
assert.equal(d.qualifiers.filter(q=>q.competition==="UCL").length,4);
assert.equal(d.qualifiers.filter(q=>q.competition==="UEL").length,2);
assert.equal(d.qualifiers.filter(q=>q.competition==="UECL").length,1);
assert.equal(d.qualifiers.find(q=>q.club==="tottenham").competition,"UECL");
assert(!d.qualifiers.some(q=>q.club==="arsenal"));
assert.deepEqual(d.standings.filter(r=>r.competition).map(r=>r.club).sort(),[...clubs].sort());
assert.equal(d.meta.formation,"4-2-3-1");
assert(d.meta.formationNote.includes("202/760"),"PL official formation frequency");
assert.equal(d.meta.bestXiReview.status,"proposed_unapproved");
assert.equal(d.players.length,d.meta.candidateCount);assert.equal(d.players.length,119);
assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length,"duplicate ID");
assert.equal(new Set(d.players.map(p=>p.nameOriginal.normalize("NFKC").toLowerCase())).size,d.players.length,"duplicated athlete");
for(const p of d.players){
 assert(clubs.includes(p.club)&&roles.includes(p.position)&&grades.includes(p.tier),p.id);
 assert(["starter","backup"].includes(p.role),p.id);
 assert.equal(p.review,"draft_unapproved");
 assert(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale&&p.sources?.length,p.id);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(p.born),p.id);
 assert.equal(p.leagueStarts,null,p.id);assert.equal(p.leagueAppearances,null,p.id);
 assert.equal(p.positionMajorityVerified,false,p.id);
 assert(p.previousSeasons?.["2018-19"]&&p.previousSeasons?.["2019-20"],p.id);
 assert(p.leagueGoals===null||(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0));
 assert(p.leagueAssists===null||(Number.isInteger(p.leagueAssists)&&p.leagueAssists>=0));
 assert(Number.isInteger(p.rank)&&p.rank>=1,p.id);
}
for(const club of clubs){
 const ps=d.players.filter(p=>p.club===club);
 assert.equal(ps.filter(p=>p.role==="starter").length,11,club+" starting XI");
 for(const [role,max] of Object.entries(caps)){
  assert(ps.filter(p=>p.position===role).length<=max,club+" cap "+role);
  assert(ps.filter(p=>p.position===role&&p.role==="backup").length<=1,club+" backup "+role);
 }
 const research=JSON.parse(readFileSync("audit/player-research/premierleague-2020-21-"+club+"-fresh-draft.json","utf8"));
 assert.deepEqual(research.players,ps,"research JSON parity "+club);
}
assert.equal(d.players.filter(p=>p.club==="chelsea"&&p.role==="starter"&&p.position==="CB").length,3,"Chelsea 3CB");
assert.equal(d.players.filter(p=>p.club==="liverpool"&&p.role==="starter"&&p.position==="CM").length,3,"Liverpool 3CM, true 4-3-3");
assert(!d.players.some(p=>p.nameOriginal==="Virgil van Dijk"),"injured VVD not padded into Liverpool season candidates");
assert.equal(d.players.find(p=>p.nameOriginal==="James Justin").born,"1998-02-23");
assert.equal(d.players.find(p=>p.nameOriginal==="Harry Kane").leagueGoals,23);
assert.equal(d.players.find(p=>p.nameOriginal==="Harry Kane").leagueAssists,14);
for(const role of roles){
 const ps=d.players.filter(p=>p.position===role).sort((a,b)=>a.rank-b.rank);
 ps.forEach((p,i)=>{assert.equal(p.rank,i+1,role+" continuous rank");if(i)assert(grades.indexOf(ps[i-1].tier)<=grades.indexOf(p.tier),role+" tier inversion")});
}
assert.equal(d.bestXi.length,11);assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
for(const [role,num] of Object.entries(slots))assert.equal(d.bestXi.filter(x=>x.position===role).length,num,role+" XI");
for(const xi of d.bestXi){
 const p=d.players.find(p=>p.id===xi.playerId);assert(p,xi.playerId);
 assert.equal(p.position,xi.position);assert(p.rank<=(p.position==="CB"?2:1),p.id+" rank selection");
}
const report=readFileSync("audit/PLAYER_PREMIERLEAGUE_2020-21_DRAFT_REVIEW.md","utf8");
assert(report.includes("202/760")&&report.includes("2021-22")&&report.includes("proposed_unapproved")&&report.includes("James Justin"));
console.log("PASS 2020-21 STRUCTURAL DRAFT: 7 actual 2021-22 UEFA clubs (4 UCL/2 UEL/1 UECL), 119 athlete records, club XI/caps, 1..N ranks, draft 4-2-3-1 XI; quantitative historical player audit pending.");
