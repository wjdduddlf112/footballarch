/**
 * Football Archive UEFA 2012-13 DRAFT structural verifier.
 * No claim of individual 3-season historical verification.
 */
import fs from "node:fs";
import assert from "node:assert/strict";
const seasons = [
  { id:"ucl", stageClubs:32, allClubs:32, groupCount:8, groupGames:96, knockoutGames:29, assessedClubs:16, goals:368 },
  { id:"uel", stageClubs:48, allClubs:56, groupCount:12, groupGames:144, knockoutGames:61, assessedClubs:8, goals:521 },
];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
for(const req of seasons){
 const file=`data/${req.id}-2012-13.json`;
 const doc=JSON.parse(fs.readFileSync(file,"utf8"));
 const {meta,clubs,participants,groups,matches,knockout,evaluatedClubs,players,bestXi}=doc;
 const err=(msg)=>`${file}: ${msg}`;
 assert.equal(meta.season,"2012-13");
 assert.equal(meta.status,"draft_unapproved");
 assert.equal(clubs.length,req.allClubs,err("club count"));
 assert.equal(new Set(clubs.map(c=>c.id)).size,req.allClubs,err("duplicate club ID"));
 assert.equal(participants.length,req.allClubs,err("participant count"));
 assert.equal(new Set(participants.map(p=>p.club)).size,req.allClubs,err("duplicate participation"));
 assert.equal(groups.length,req.groupCount,err("number of groups"));
 assert.equal(groups.flatMap(g=>g.table).length,req.stageClubs,err("group teams"));
 assert.equal(matches.filter(m=>m.round==="group_stage").length,req.groupGames,err("group games"));
 assert.equal(matches.filter(m=>m.round!=="group_stage").length,req.knockoutGames,err("knockout games"));
 assert.equal(matches.reduce((n,m)=>n+m.homeGoals+m.awayGoals,0),req.goals,err("historic competition goals"));
 assert.equal(new Set(matches.map(m=>m.id)).size,matches.length,err("duplicate match IDs"));
 const clubsSet=new Set(clubs.map(c=>c.id));
 for(const m of matches){assert.ok(clubsSet.has(m.home)&&clubsSet.has(m.away),err("unknown match team "+m.id));assert.ok(m.home!==m.away,err("match has same team "+m.id));}
 for(const g of groups){
   const groupMatches=matches.filter(m=>m.group===g.code&&m.round==="group_stage");
   assert.equal(groupMatches.length,g.table.length*3,err("group played games "+g.code));
   for(const t of g.table){
     const mm=groupMatches.filter(m=>m.home===t.club||m.away===t.club);
     const stats={w:0,d:0,l:0,gf:0,ga:0};
     for(const m of mm){
       const gf=m.home===t.club?m.homeGoals:m.awayGoals;
       const ga=m.home===t.club?m.awayGoals:m.homeGoals;
       stats.gf+=gf;stats.ga+=ga;
       if(gf>ga)stats.w++; else if(gf===ga)stats.d++; else stats.l++;
     }
     assert.equal(t.played,mm.length,err("matches played "+g.code+" "+t.club));
     assert.equal(t.wins,stats.w,err("wins "+t.club));
     assert.equal(t.draws,stats.d,err("draws "+t.club));
     assert.equal(t.losses,stats.l,err("losses "+t.club));
     assert.equal(t.goalsFor,stats.gf,err("GF "+t.club));
     assert.equal(t.goalsAgainst,stats.ga,err("GA "+t.club));
     assert.equal(t.gd,stats.gf-stats.ga,err("GD "+t.club));
     assert.equal(t.points,stats.w*3+stats.d,err("points "+t.club));
   }
 }
 assert.equal(evaluatedClubs.length,req.assessedClubs,err("evaluation team count"));
 assert.equal(new Set(evaluatedClubs).size,req.assessedClubs,err("duplicate evaluated team"));
 const QF=knockout.find(x=>x.stage==="quarter_final");
 assert.ok(QF,err("missing quarter-final"));
 if(req.id==="uel"){
  const qfTeams=new Set(QF.ties.flatMap(t=>[t.home,t.away]));
  assert.deepEqual(new Set(evaluatedClubs),qfTeams,err("UEL evaluated club != QF"));
  assert.equal(participants.filter(p=>p.entryRound==="ucl_group_stage_transfer").length,8,err("UCL transferees"));
 }else{
  const groupQualified=new Set(groups.flatMap(g=>g.table.slice(0,2).map(t=>t.club)));
  assert.deepEqual(new Set(evaluatedClubs),groupQualified,err("UCL evaluated club != R16"));
 }
 const final=knockout.find(x=>x.stage==="final");
 assert.equal(final?.ties?.length,1,err("no final"));
 assert.equal(new Set(players.map(p=>p.id)).size,players.length,err("duplicate players"));
 const seenNameByClub=new Set();
 for(const p of players){
  assert.ok(evaluatedClubs.includes(p.club),err("player not in evaluated club"));
  assert.ok(positions.includes(p.position),err("invalid position "+p.position));
  assert.equal(p.review,"evidence_pending",err("unverified candidate review should remain pending"));
  const k=p.club+":"+p.nameOriginal;
  assert.ok(!seenNameByClub.has(k),err("duplicate player in club: "+k));seenNameByClub.add(k);
  assert.ok(p.nameKo&&p.nameOriginal,err("missing names"));
  assert.ok(!p.tier,err("UEFA tier populated without independent research"));
 }
 for(const club of evaluatedClubs){
  const group=players.filter(p=>p.club===club);
  assert.equal(group.filter(p=>p.role==="starter").length,11,err("representative XI "+club));
  const backups=group.filter(p=>p.role==="backup");
  assert.equal(new Set(backups.map(p=>p.position)).size,backups.length,err("more than one backup per position "+club));
 }
 assert.equal(bestXi.length,11,err("provisional Best XI is not 11"));
 assert.equal(new Set(bestXi.map(x=>x.playerId)).size,11,err("duplicate best XI player"));
 const mapped=new Set(players.map(p=>p.id));
 for(const x of bestXi){assert.ok(mapped.has(x.playerId),err("Best XI references unknown player"));assert.equal(x.status,"proposed_unapproved");}
 const counts={clubs:clubs.length,groupGames:req.groupGames,knockoutGames:req.knockoutGames,goals:req.goals,assessedClubs:evaluatedClubs.length,draftPlayers:players.length,nominalStarters:players.filter(p=>p.role==="starter").length,births:players.filter(p=>p.born).length,UEFATiersVerified:0};
 console.log(JSON.stringify({competition:req.id,validation:"structure_passed",...counts}));
}
console.log("STRUCTURAL PASS. Individual UCL/UEL appearances and 3-season player performance remain evidence_pending.");
