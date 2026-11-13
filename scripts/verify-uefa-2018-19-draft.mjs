// Football Archive UEFA 2018-19: historical-match structural validation.
// A PASS DOES NOT certify every player's UEFA appearance or three-season individual rating.
import fs from "node:fs";
import assert from "node:assert/strict";
const expectations=[
 {id:"ucl",clubs:32,groupClubs:32,groups:8,groupMatches:96,knockoutMatches:29,goals:366,evaluated:16,starters:176,champion:"liverpool",score:[0,2],bestXi:11},
 {id:"uel",clubs:56,groupClubs:48,groups:12,groupMatches:144,knockoutMatches:61,goals:565,evaluated:8,starters:88,champion:"chelsea",score:[4,1],bestXi:11}
];
const positionOrder=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const levels=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const records={};
const read=id=>JSON.parse(fs.readFileSync("data/"+id+"-2018-19.json","utf8"));
const assertUnique=(items,msg)=>assert.equal(new Set(items).size,items.length,msg);
for(const s of expectations){
 const d=read(s.id),f=s.id+"-2018-19";
 records[s.id]=d;
 assert.equal(d.meta.season,"2018-19",f+" season");
 assert.equal(d.meta.competitionId,s.id,f+" competition");
 assert.equal(d.meta.status,"draft_unapproved",f+" approvals");
 assert.equal(d.clubs.length,s.clubs,f+" clubs");
 assertUnique(d.clubs.map(c=>c.id),f+" duplicate clubs");
 const clubIds=new Set(d.clubs.map(c=>c.id));
 assert.equal(d.participants.length,s.clubs,f+" participants");
 assertUnique(d.participants.map(p=>p.club),f+" duplicate participants");
 assert(d.participants.every(p=>clubIds.has(p.club)),f+" participant must reference club");
 assert.equal(d.groups.length,s.groups,f+" group count");
 assert.equal(d.groups.flatMap(g=>g.table).length,s.groupClubs,f+" group teams");
 assert.equal(d.matches.length,s.groupMatches+s.knockoutMatches,f+" total matches");
 assert.equal(d.matches.filter(m=>m.round==="group_stage").length,s.groupMatches,f+" group match count");
 assert.equal(d.matches.filter(m=>m.round!=="group_stage").length,s.knockoutMatches,f+" knockout match count");
 assert.equal(d.matches.reduce((total,m)=>total+m.homeGoals+m.awayGoals,0),s.goals,f+" goal sum");
 assertUnique(d.matches.map(m=>m.id),f+" duplicate match ID");
 for(const m of d.matches){
  assert(clubIds.has(m.home)&&clubIds.has(m.away)&&m.home!==m.away,f+" bad match clubs "+m.id);
  assert.match(m.date,/^20\d\d-\d\d-\d\d$/,f+" date "+m.id);
  assert(Number.isInteger(m.homeGoals)&&Number.isInteger(m.awayGoals),f+" noninteger score "+m.id);
 }
 for(const g of d.groups){
  assert.equal(g.table.length,4,f+" group table team count "+g.code);
  const groupGames=d.matches.filter(m=>m.round==="group_stage"&&m.group===g.code);
  assert.equal(groupGames.length,12,f+" group match count "+g.code);
  assertUnique(g.table.map(t=>t.club),f+" duplicate club "+g.code);
  for(const t of g.table){
   const app=groupGames.filter(m=>m.home===t.club||m.away===t.club);
   let won=0,drew=0,gf=0,ga=0;
   for(const m of app){const home=m.home===t.club;const a=home?m.homeGoals:m.awayGoals,b=home?m.awayGoals:m.homeGoals;gf+=a;ga+=b;if(a>b)won++;else if(a===b)drew++;}
   assert.deepEqual(
    [t.played,t.wins,t.draws,t.losses,t.goalsFor,t.goalsAgainst,t.gd,t.points],
    [app.length,won,drew,app.length-won-drew,gf,ga,gf-ga,won*3+drew],
    f+" group data mismatch "+g.code+"/"+t.club);
  }
 }
 assert.equal(d.evaluatedClubs.length,s.evaluated,f+" evaluated clubs");
 assertUnique(d.evaluatedClubs,f+" duplicate evaluation clubs");
 assert.equal(d.qualifiers.length,s.evaluated,f+" nominees");
 assert(d.evaluatedClubs.every(id=>clubIds.has(id)),f+" unknown evaluated club");
 if(s.id==="ucl")assert.deepEqual(new Set(d.evaluatedClubs),new Set(d.groups.flatMap(g=>g.table.slice(0,2).map(t=>t.club))),f+" UCL 16 qualifiers");
 else assert.deepEqual(new Set(d.evaluatedClubs),new Set(d.knockout.find(k=>k.stage==="quarter_finals").ties.flatMap(t=>[t.home,t.away])),f+" UEL quarterfinalists");
 const ko=s.id==="ucl"?[["round_of_16",8],["quarter_finals",4],["semi_finals",2],["final",1]]:[["round_of_32",16],["round_of_16",8],["quarter_finals",4],["semi_finals",2],["final",1]];
 for(const [stage,tieCount] of ko){
  const b=d.knockout.find(k=>k.stage===stage);
  assert.equal(b?.ties?.length,tieCount,f+" knockout stage tie count "+stage);
  for(const tie of b.ties){
   const legs=[tie.firstLeg,tie.secondLeg].filter(Boolean);
   assert.equal(legs.length,stage==="final"?1:2,f+" KO legs "+stage);
   for(const l of legs){const m=d.matches.find(x=>x.round===stage&&x.date===l.date&&x.home===l.home&&x.away===l.away);
    assert(m,f+" missing knockout match "+stage+"/"+l.home);
    assert.deepEqual(l.score,[m.homeGoals,m.awayGoals],f+" knockout leg score");
   }
  }
 }
 const final=d.knockout.find(k=>k.stage==="final");
 assert.equal(final.winner,s.champion,f+" champion");
 assert.deepEqual(final.score,s.score,f+" final score");
 const p=d.players;
 assertUnique(p.map(x=>x.id),f+" duplicate player ID");
 assert.equal(p.filter(x=>x.role==="starter").length,s.starters,f+" nominal starter count");
 for(const club of d.evaluatedClubs){
  const current=p.filter(x=>x.club===club);
  assert.equal(current.filter(x=>x.role==="starter").length,11,f+" 11 starter nominations "+club);
  assertUnique(current.map(x=>x.nameOriginal),f+" duplicate player at club "+club);
  for(const pos of positionOrder){
   assert(current.filter(x=>x.role==="backup"&&x.position===pos).length<=1,f+" >1 backup "+club+"/"+pos);
  }
 }
 for(const x of p){
  assert(d.evaluatedClubs.includes(x.club),f+" unqualified player club "+x.nameOriginal);
  assert(positionOrder.includes(x.position),f+" unrecognized position "+x.nameOriginal);
  assert(x.nameOriginal&&x.nameKo&&x.clubNameOriginal,f+" incomplete player name "+x.id);
  if(x.born!==null)assert.match(x.born,/^\d{4}-\d{2}-\d{2}$/,f+" invalid birthdate "+x.id);
  if(x.appearances!==null)assert(Number.isInteger(x.appearances)&&x.appearances>0,f+" invalid confirmed appearance "+x.id);
  if(x.minutes!==null)assert(x.appearances!==null&&x.minutes>0,f+" minutes without appearance "+x.id);
  assert.deepEqual(x.threeSeasonAssessment.seasons,["2016-17","2017-18","2018-19"],f+" 3-season scope "+x.id);
  if(x.tier===null){assert.equal(x.review,"evidence_pending",f+" unrated status");assert.equal(x.rank,null,f+" pending rank");}
  else{assert(levels.includes(x.tier),f+" invalid tier");assert.equal(x.review,"draft_unapproved",f+" grade status");assert(x.tierRationale?.length>60,f+" rating rationale");assert(Number.isInteger(x.rank)&&x.rank>0,f+" rank");}
 }
 for(const pos of positionOrder){
  const rated=p.filter(x=>x.position===pos&&x.tier).sort((a,b)=>a.rank-b.rank);
  assert.deepEqual(rated.map(x=>x.rank),rated.map((_,i)=>i+1),f+" subset rank sequence "+pos);
  for(let i=1;i<rated.length;i++)assert(levels.indexOf(rated[i-1].tier)<=levels.indexOf(rated[i].tier),f+" rank tier reversal");
 }
 assert.equal(p.length,s.id==="ucl"?264:133,f+" roster population");
 assert.equal(p.filter(x=>x.tier!==null).length,s.id==="ucl"?20:18,f+" observer inclusion count");
 assert.equal(d.bestXi.length,s.bestXi,f+" best XI size");
 assertUnique(d.bestXi.map(x=>x.playerId),f+" Best XI duplicate player");
 for(const x of d.bestXi){
  const y=p.find(t=>t.id===x.playerId);
  assert(y&&y.position===x.position,f+" Best XI position mismatch "+x.playerId);
  assert.equal(x.status,"proposed_unapproved",f+" best XI must remain unapproved");
 }
 assert.equal(d.meta.verification.approvedPlayerTiers,0,f+" no unilateral approvals");
 assert.equal(d.meta.verification.independentThreeSeasonPlayerAuditComplete,false,f+" no false historical audit");
 assert.equal(d.meta.verification.playerCandidateCount,p.length,f+" counts");
 assert.equal(d.meta.verification.individuallyUEFAAppearancesConfirmed,p.filter(x=>x.tier!==null).length,f+" UEFA observer award confirmed presence count");
 assert.equal(d.meta.verification.provisionalTiers,p.filter(x=>x.tier!==null).length,f+" ratings counts");
 assert.equal(d.meta.verification.nameKoPresent,p.filter(x=>/[가-힣]/.test(x.nameKo)).length,f+" Korean name count");
 assert.equal(d.meta.verification.birthDatesPresent,p.filter(x=>!!x.born).length,f+" DOB count");
 console.log(JSON.stringify({competition:s.id,status:"STRUCTURE_PASS_HISTORICAL_INDIVIDUAL_AUDIT_PENDING",clubs:d.clubs.length,matches:d.matches.length,goals:s.goals,groupTables:d.groups.length,nominalStarters:s.starters,playerCandidates:p.length,uefaAppearanceConfirmed:d.meta.verification.individuallyUEFAAppearancesConfirmed,provisionalRated:p.filter(x=>x.tier!==null).length,unrated:p.filter(x=>x.tier===null).length,missingDOB:p.filter(x=>!x.born).length,bestXi:d.bestXi.length}));
}
const uclThird=records.ucl.groups.map(g=>g.table[2].club).sort();
const transfer=records.uel.participants.filter(p=>p.entryRound!=="group_stage").map(p=>p.club).sort();
assert.deepEqual(transfer,uclThird,"exactly eight UCL third-place teams transferred to UEL");
for(const [id,d] of Object.entries(records)){for(const k of d.knockout){for(const t of k.ties){if(!t.secondLeg)continue;const ah=t.firstLeg.score[0]+t.secondLeg.score[1],aa=t.firstLeg.score[1]+t.secondLeg.score[0];assert.deepEqual([ah,aa],t.aggregate,id+" aggregate "+t.home+"/"+t.away);if(ah!==aa){assert.equal(t.winner,ah>aa?t.home:t.away,id+" aggregate winner");}else if(t.penalties){assert.equal(t.winner,t.penalties.winner,id+" penalties winner")}else{assert.notEqual(t.firstLeg.score[1],t.secondLeg.score[1],id+" tied away goals");assert.equal(t.winner,t.firstLeg.score[1]>t.secondLeg.score[1]?t.away:t.home,id+" away-goals winner")}}}}
assert.equal(records.uel.knockout.find(k=>k.stage==="quarter_finals").ties.find(t=>[t.home,t.away].includes("benfica")&&[t.home,t.away].includes("frankfurt")).winner,"frankfurt","UEFA Frankfurt advance on away goals");
const sf=records.uel.matches.find(m=>m.date==="2019-05-09"&&m.home==="chelsea"&&m.away==="frankfurt");assert.deepEqual([sf.homeGoals,sf.awayGoals,sf.penaltyShootout.home,sf.penaltyShootout.away],[1,1,4,3],"2019-05-09 UEL semi-final penalties must not inflate match goals");
console.log("PASS 2018-19 UEFA stage and record structural verification. Historical per-player full UEFA eligibility and 3-year individual audits are NOT complete.");
