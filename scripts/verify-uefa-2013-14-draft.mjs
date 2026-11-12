// UEFA 2013-14 Champions League + Europa League historical DRAFT structural validation.
// Structural checks DO NOT certify individual season-long UEFA player eligibility.
import fs from "node:fs";
import assert from "node:assert/strict";
const REQUIRED=[
 {id:"ucl",teams:32,groupTeams:32,evaluated:16,groups:8,groupGames:96,knockoutGames:29,goals:362,nominal:176,allCandidates:297},
 {id:"uel",teams:56,groupTeams:48,evaluated:8,groups:12,groupGames:144,knockoutGames:61,goals:475,nominal:88,allCandidates:144}
];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const records={};
for(const spec of REQUIRED){
 const file="data/"+spec.id+"-2013-14.json";
 const d=JSON.parse(fs.readFileSync(file,"utf8"));
 const fail=(message)=>file+" "+message;
 assert.equal(d.meta.season,"2013-14");
 assert.equal(d.meta.competitionId,spec.id);
 assert.equal(d.meta.status,"draft_unapproved");
 assert.equal(d.clubs.length,spec.teams,fail("club count"));
 const ids=new Set(d.clubs.map(c=>c.id));
 assert.equal(ids.size,spec.teams,fail("duplicate clubs"));
 assert.equal(d.participants.length,spec.teams,fail("participants"));
 assert.equal(d.groups.length,spec.groups,fail("groups"));
 assert.equal(d.groups.flatMap(g=>g.table).length,spec.groupTeams,fail("group participants"));
 assert.equal(d.matches.length,spec.groupGames+spec.knockoutGames,fail("all matches"));
 assert.equal(d.matches.filter(m=>m.round==="group_stage").length,spec.groupGames,fail("group matches"));
 assert.equal(d.matches.filter(m=>m.round!=="group_stage").length,spec.knockoutGames,fail("knockout matches"));
 assert.equal(d.matches.reduce((n,m)=>n+m.homeGoals+m.awayGoals,0),spec.goals,fail("historical goal count"));
 assert.equal(d.meta.verification.totalGoals,spec.goals,fail("meta goal count"));
 assert.equal(new Set(d.matches.map(m=>m.id)).size,d.matches.length,fail("duplicate matches"));
 for(const m of d.matches){
  assert(ids.has(m.home)&&ids.has(m.away),fail("unknown match team"));
  assert(m.home!==m.away,fail("self-match"));
  assert.match(m.date,/^20\d\d-\d\d-\d\d$/,fail("bad date"));
  assert(Number.isInteger(m.homeGoals)&&Number.isInteger(m.awayGoals),fail("non-int score"));
 }
 for(const g of d.groups){
  assert.equal(g.table.length,4,fail("group club count "+g.code));
  assert.equal(d.matches.filter(m=>m.round==="group_stage"&&m.group===g.code).length,12,fail("group 12 games "+g.code));
  const groupMatches=d.matches.filter(m=>m.round==="group_stage"&&m.group===g.code);
  for(const t of g.table){
   const gs=groupMatches.filter(m=>m.home===t.club||m.away===t.club);
   let w=0,dd=0,gf=0,ga=0;
   for(const m of gs){const a=m.home===t.club?m.homeGoals:m.awayGoals,b=m.home===t.club?m.awayGoals:m.homeGoals;gf+=a;ga+=b;if(a>b)w++;else if(a===b)dd++;}
   assert.deepEqual([t.played,t.wins,t.draws,t.losses,t.goalsFor,t.goalsAgainst,t.gd,t.points],
    [gs.length,w,dd,gs.length-w-dd,gf,ga,gf-ga,3*w+dd],fail("computed group "+g.code+" "+t.club));
  }
 }
 assert.equal(d.evaluatedClubs.length,spec.evaluated,fail("assessed clubs"));
 assert.equal(new Set(d.evaluatedClubs).size,spec.evaluated,fail("duplicate assessed clubs"));
 assert.equal(d.qualifiers.length,spec.evaluated,fail("qualifier count"));
 const champion=d.knockout.find(k=>k.stage==="final");
 assert.equal(champion?.ties?.length,1,fail("no final"));
 const finalists=champion.ties[0],fmatch=d.matches.find(m=>m.round==="final");
 assert.equal(champion.winner,finalists.winner,fail("final winner"));
 assert.deepEqual([fmatch.homeGoals,fmatch.awayGoals],[champion.score[0],champion.score[1]],fail("final scores"));
 if(spec.id==="ucl"){
  assert.equal(champion.winner,"realmadrid");
  assert.deepEqual(champion.score,[4,1]);
  assert.equal(fmatch.extraTime,true);
  const qualified=new Set(d.groups.flatMap(g=>g.table.slice(0,2).map(t=>t.club)));
  assert.deepEqual(new Set(d.evaluatedClubs),qualified,fail("16 UCL qualifiers"));
 }else{
  assert.equal(champion.winner,"sevilla");
  assert.deepEqual(champion.score,[0,0]);
  assert.deepEqual(fmatch.penaltyShootout,{home:4,away:2});
  assert.equal(d.participants.filter(p=>p.entryRound==="ucl_group_stage_transfer").length,8);
  const qf=d.knockout.find(k=>k.stage==="quarter_final");
  assert.deepEqual(new Set(qf.ties.flatMap(t=>[t.home,t.away])),new Set(d.evaluatedClubs),fail("UEL quarter-finalists"));
 }
 assert.equal(d.players.length,spec.allCandidates,fail("candidate total"));
 assert.equal(new Set(d.players.map(p=>p.id)).size,d.players.length,fail("duplicate player IDs"));
 assert.equal(d.players.filter(p=>p.role==="starter").length,spec.nominal,fail("nominal XI totals"));
 for(const club of d.evaluatedClubs){
  const pp=d.players.filter(p=>p.club===club);
  assert.equal(pp.filter(p=>p.role==="starter").length,11,fail("club's 11 nominees "+club));
  for(const pos of positions)assert(pp.filter(p=>p.position===pos&&p.role==="backup").length<=1,fail("duplicate position backup "+club+" "+pos));
 }
 const rated=d.players.filter(p=>p.tier!==null),pending=d.players.filter(p=>p.tier===null);
 assert.equal(rated.length,d.meta.verification.provisionalTiers,fail("grade status count"));
 for(const p of d.players){
  assert(d.evaluatedClubs.includes(p.club),fail("player outside evaluated clubs: "+p.name));
  assert(positions.includes(p.position),fail("unsupported role "+p.position));
  assert(p.nameOriginal&&p.nameKo&&p.clubNameOriginal,fail("missing name"));
  if(p.born!==null)assert.match(p.born,/^\d{4}-\d{2}-\d{2}$/,fail("DOB"));
  assert.equal(p.appearanceScope.includes("2013-14"),true,fail("scope wrong"));
  assert.deepEqual(p.threeSeasonAssessment.seasons,["2011-12","2012-13","2013-14"]);
  if(p.tier===null){assert.equal(p.review,"evidence_pending");assert.equal(p.rank,null);}
  else{assert(tiers.includes(p.tier),fail("invalid tier"));assert.equal(p.review,"draft_unapproved");assert(p.tierRationale?.length>=50,fail("missing narrative"));assert(Number.isInteger(p.rank)&&p.rank>0);}
 }
 for(const pos of positions){
  const pp=rated.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
  assert.deepEqual(pp.map(p=>p.rank),Array.from({length:pp.length},(_,i)=>i+1),fail("rated group sequence "+pos));
  for(let i=1;i<pp.length;i++)assert(tiers.indexOf(pp[i-1].tier)<=tiers.indexOf(pp[i].tier),fail("tier/rank order "+pos));
 }
 assert.equal(d.bestXi.length,11,fail("Best XI must have exactly 11"));
 assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11,fail("duplicate Best XI players"));
 for(const entry of d.bestXi){
  const p=d.players.find(x=>x.id===entry.playerId);
  assert(p,fail("missing best XI player "+entry.playerId));
  assert.equal(p.position,entry.position,fail("Best XI proposed field position mismatch "+p.nameOriginal));
  assert.equal(entry.status,"proposed_unapproved");
 }
 assert.equal(d.meta.verification.approvedPlayerTiers,0);
 assert.equal(d.meta.verification.independentThreeSeasonPlayerAuditComplete,false);
 records[spec.id]=d;
 console.log(JSON.stringify({competition:spec.id,status:"DRAFT_structure_PASS_not_historical_player_certification",matches:d.matches.length,goals:spec.goals,groupClubs:spec.groupTeams,evaluatedClubs:d.evaluatedClubs.length,players:d.players.length,provisionalTiers:rated.length,unrated:pending.length,nominalStarters:spec.nominal,birthDateUnverified:d.players.filter(p=>!p.born).length}));
}
const uclThird=records.ucl.groups.flatMap(g=>[g.table[2].club]).sort();
const uelFromUCL=records.uel.participants.filter(p=>p.entryRound==="ucl_group_stage_transfer").map(p=>p.club).sort();
assert.deepEqual(uelFromUCL,uclThird,"Eight UCL third-place clubs match eight UEL transfer clubs");
console.log("PASS: 2013-14 UEFA competition structural integrity. User approval and full 3-season player audits are NOT complete.");
