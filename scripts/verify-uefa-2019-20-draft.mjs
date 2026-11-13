// UEFA 2019-20 Football Archive structural test; historical personal audit NOT certified.
import fs from "node:fs";
import assert from "node:assert/strict";
const read=id=>JSON.parse(fs.readFileSync("data/"+id+"-2019-20.json","utf8"));
const checks=[
 {id:"ucl",clubs:32,gClubs:32,groups:8,groupMatches:96,knockoutMatches:23,matches:119,goals:386,
   evaluated:16,players:298,starters:176,backups:122,observers:23,champion:"bayern",score:[0,1],
   knockouts:{round_of_16:[8,16],quarter_finals:[4,4],semi_finals:[2,2],final:[1,1]}},
 {id:"uel",clubs:56,gClubs:48,groups:12,groupMatches:144,knockoutMatches:53,matches:197,goals:548,
   evaluated:8,players:148,starters:88,backups:60,observers:23,champion:"sevilla",score:[3,2],
   knockouts:{round_of_32:[16,32],round_of_16:[8,14],quarter_finals:[4,4],semi_finals:[2,2],final:[1,1]}}
];
const P=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],T=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const records={};
for(const e of checks){
 const d=read(e.id),prefix=e.id+" 2019-20";
 records[e.id]=d;
 assert.equal(d.meta.status,"draft_unapproved",prefix+" must remain DRAFT");
 assert.equal(d.meta.season,"2019-20");assert.equal(d.meta.competitionId,e.id);
 assert.equal(d.clubs.length,e.clubs,prefix+" club count");
 const ids=new Set(d.clubs.map(x=>x.id));assert.equal(ids.size,e.clubs);
 assert.equal(d.participants.length,e.clubs,prefix+" participant count");
 assert.equal(new Set(d.participants.map(x=>x.club)).size,e.clubs);
 assert.equal(d.groups.length,e.groups,prefix+" group count");
 assert.equal(d.groups.flatMap(g=>g.table).length,e.gClubs);
 assert.equal(d.matches.length,e.matches,prefix+" match count");
 assert.equal(new Set(d.matches.map(m=>m.id)).size,e.matches,prefix+" unique match IDs");
 assert.equal(d.matches.filter(m=>m.round==="group_stage").length,e.groupMatches);
 assert.equal(d.matches.filter(m=>m.round!=="group_stage").length,e.knockoutMatches);
 assert.equal(d.matches.reduce((s,m)=>s+m.homeGoals+m.awayGoals,0),e.goals,prefix+" goal sum");
 for(const m of d.matches){
  assert(ids.has(m.home)&&ids.has(m.away)&&m.home!==m.away);
  assert.match(m.date,/^20\d\d-\d\d-\d\d$/);assert(Number.isInteger(m.homeGoals)&&Number.isInteger(m.awayGoals));
  assert(m.homeGoals>=0&&m.awayGoals>=0);
 }
 for(const g of d.groups){
  assert.equal(g.table.length,4);assert.equal(g.table.reduce((sum,t)=>sum+t.played,0),24);
  const gm=d.matches.filter(m=>m.round==="group_stage"&&m.group===g.code);assert.equal(gm.length,12);
  assert.equal(new Set(g.table.map(t=>t.club)).size,4);
  for(const t of g.table){const a=gm.filter(m=>m.home===t.club||m.away===t.club);
   let win=0,draw=0,gf=0,ga=0;
   for(const m of a){let x=m.home===t.club?m.homeGoals:m.awayGoals,y=m.home===t.club?m.awayGoals:m.homeGoals;
    gf+=x;ga+=y;if(x>y)win++;else if(x===y)draw++;}
   assert.deepEqual([t.played,t.wins,t.draws,t.losses,t.goalsFor,t.goalsAgainst,t.gd,t.points],
    [6,win,draw,6-win-draw,gf,ga,gf-ga,win*3+draw],prefix+" group "+g.code+"/"+t.club);
  }
 }
 assert.equal(d.evaluatedClubs.length,e.evaluated);
 assert.equal(new Set(d.evaluatedClubs).size,e.evaluated);
 assert(d.evaluatedClubs.every(c=>ids.has(c)));
 if(e.id==="ucl")assert.deepEqual(new Set(d.evaluatedClubs),new Set(d.groups.flatMap(g=>g.table.slice(0,2).map(t=>t.club))));
 else{
  const q=d.knockout.find(x=>x.stage==="quarter_finals");
  assert.deepEqual(new Set(d.evaluatedClubs),new Set(q.ties.flatMap(t=>[t.home,t.away])));
 }
 assert.equal(d.knockout.length,Object.keys(e.knockouts).length);
 for(const [stage,[ties,legs]] of Object.entries(e.knockouts)){
  const t=d.knockout.find(x=>x.stage===stage);assert(t,prefix+" stage absent "+stage);assert.equal(t.ties.length,ties);
  assert.equal(t.ties.reduce((a,r)=>a+1+Number(!!r.secondLeg),0),legs,prefix+" knockout played-leg count "+stage);
  for(const r of t.ties){
   const m=d.matches.find(x=>x.round===stage&&x.date===r.firstLeg.date&&x.home===r.firstLeg.home&&x.away===r.firstLeg.away);
   assert(m,"missing first leg "+stage+"/"+r.home);
   assert.deepEqual([m.homeGoals,m.awayGoals],r.firstLeg.score);
   if(r.secondLeg){
    const x=d.matches.find(x=>x.round===stage&&x.date===r.secondLeg.date&&x.home===r.secondLeg.home&&x.away===r.secondLeg.away);
    assert(x,"missing return fixture "+stage+"/"+r.home);assert.deepEqual([x.homeGoals,x.awayGoals],r.secondLeg.score);
    assert.deepEqual([r.firstLeg.score[0]+r.secondLeg.score[1],r.firstLeg.score[1]+r.secondLeg.score[0]],r.aggregate);
   }else assert.deepEqual(r.aggregate,r.firstLeg.score);
   assert([r.home,r.away].includes(r.winner),"winner not participant");
   const [a,b]=r.aggregate;
   if(a!==b)assert.equal(r.winner,a>b?r.home:r.away,"winner contradicts aggregate");
   else if(!r.penalties){
    assert(r.secondLeg,"tie at single fixture must show extra-time or penalties");
    assert.notEqual(r.firstLeg.score[1],r.secondLeg.score[1],"cannot have tied away goals without penalties");
    assert.equal(r.winner,r.firstLeg.score[1]>r.secondLeg.score[1]?r.away:r.home,"away goals winner");
   }
  }
 }
 const final=d.knockout.find(x=>x.stage==="final");
 assert.deepEqual(final.score,e.score);assert.equal(final.winner,e.champion);
 assert.equal(d.players.length,e.players);
 assert.equal(new Set(d.players.map(x=>x.id)).size,e.players);
 assert.equal(d.players.filter(p=>p.role==="starter").length,e.starters);
 assert.equal(d.players.filter(p=>p.role==="backup").length,e.backups);
 for(const c of d.evaluatedClubs){
  const ps=d.players.filter(p=>p.club===c);
  assert.equal(ps.filter(p=>p.role==="starter").length,11,c+" nominal XI");
  assert.equal(new Set(ps.map(p=>p.nameOriginal)).size,ps.length,c+" duplicate names");
  for(const position of P)assert(ps.filter(p=>p.position===position&&p.role==="backup").length<=1,"too many backups "+c+"/"+position);
 }
 for(const p of d.players){
  assert(P.includes(p.position));
  assert(p.clubNameOriginal&&p.nameOriginal&&/[가-힣]/.test(p.nameKo),"incomplete player identity "+p.id);
  assert.match(p.born,/^\d{4}-\d{2}-\d{2}$/,"invalid DOB "+p.id);
  assert(T.includes(p.tier),"ungraded nominee "+p.id);
  assert.equal(p.review,"draft_unapproved");
  assert(p.rank>0&&Number.isInteger(p.rank));
  assert(p.tierRationale?.length>80);
  assert.deepEqual(p.threeSeasonAssessment.seasons,["2017-18","2018-19","2019-20"]);
  assert.equal(p.uefaObserverListed,p.uefaAppearanceVerified);
  if(p.appearances!==null)assert(p.uefaObserverListed&&p.appearances>0);
  if(!p.uefaObserverListed)assert.match(p.verificationStatus,/NOT yet verified/);
 }
 for(const position of P){
  const a=d.players.filter(p=>p.position===position).sort((x,y)=>x.rank-y.rank);
  assert.deepEqual(a.map(x=>x.rank),a.map((_,i)=>i+1));
  for(let i=1;i<a.length;i++)assert(T.indexOf(a[i-1].tier)<=T.indexOf(a[i].tier),"tier rank reversal "+position);
 }
 assert.equal(d.players.filter(p=>p.uefaObserverListed).length,e.observers);
 assert.equal(d.meta.verification.individuallyUEFAAppearancesConfirmed,e.observers);
 assert.equal(d.meta.verification.provisionalTiers,e.players);
 assert.equal(d.meta.verification.birthDatesPresent,e.players);
 assert.equal(d.meta.verification.nameKoPresent,e.players);
 assert.equal(d.bestXi.length,11);
 assert.equal(new Set(d.bestXi.map(k=>k.playerId)).size,11);
 for(const k of d.bestXi){const p=d.players.find(p=>p.id===k.playerId);
  assert(p&&p.position===k.position&&p.uefaObserverListed,"Best XI not supported by UEFA observer list");
  assert.equal(k.status,"proposed_unapproved");
 }
 assert.equal(d.meta.verification.approvedPlayerTiers,0);
 assert.equal(d.meta.verification.independentThreeSeasonPlayerAuditComplete,false);
 console.log("STRUCTURE_PASS "+prefix+": "+e.matches+" match results; "+e.goals+" goals; "+e.players+" provisional nominees/grades; "+e.observers+" observer members; individual historical verification NOT complete");
}
const uclThird=records.ucl.groups.map(g=>g.table[2].club).sort();
const transfers=records.uel.participants.filter(p=>p.entryRound!=="group_stage").map(p=>p.club).sort();
assert.deepEqual(transfers,uclThird,"8 UCL third-place transfers to UEL");
const uel=records.uel.matches;
for(const [h,a] of [["sevilla","roma"],["inter","getafe"]]){
 assert.equal(uel.filter(m=>m.home===h&&m.away===a).length,1,"COVID unplayed March fixture must not appear for "+h+" "+a);
 assert(uel.find(m=>m.home===h&&m.away===a)?.date.startsWith("2020-08"),"played in August");
}
assert.equal(uel.filter(m=>m.round==="round_of_16").length,14);
assert.equal(records.ucl.matches.filter(m=>m.round==="quarter_finals").length,4);
console.log("PASS: 2019-20 full European DRAFT match/tier/position structure; historic player eligibility and comparative tier evidence remain provisional");
