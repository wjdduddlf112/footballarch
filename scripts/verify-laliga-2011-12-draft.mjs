import {readFileSync} from "node:fs";
import {strict as assert} from "node:assert";
const d=JSON.parse(readFileSync("data/laliga-2011-12.json","utf8"));
const archive=JSON.parse(readFileSync("data/laliga-standings-verified-1999-2026.json","utf8"));
const P=d.players, POS=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const TIERS=["S","A+","A","A-","B+","B","B-","C+","C","C-"], cap={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
let passes=0;function check(name,fn){fn();passes++;console.log("PASS "+name)}
check("2011-12 correct DRAFT status (not user-approved)",()=>{
 assert.equal(d.meta.season,"2011-12"); assert.equal(d.meta.status,"draft"); assert.equal(d.meta.userApproved,false); assert.equal(d.meta.bestXiStatus,"proposed_unapproved");
});
check("standings and 42-club catalog exact archive identity",()=>{
 assert.deepEqual(d.standings,archive.seasons["2011-12"].standings); assert.deepEqual(d.clubs,archive.clubs);
});
check("seven actual 2012-13 UEFA entrant club IDs match verified archive",()=>{
 assert.equal(d.qualifiers.length,7);
 assert.deepEqual(Object.fromEntries(d.qualifiers.map(q=>[q.club,q.competition])),archive.seasons["2011-12"].europeanParticipation);
});
check("134 candidate IDs unique; seven selected clubs, 11 starters per team",()=>{
 assert.equal(P.length,134); assert.equal(new Set(P.map(p=>p.id)).size,134);
 assert.equal(new Set(P.map(p=>p.club)).size,7);
 for(const q of d.qualifiers)assert.equal(P.filter(p=>p.club===q.club&&p.role==="starter").length,11,q.club);
 assert.equal(P.filter(p=>p.role==="backup").length,57);
});
check("position roster caps and at most one backup per position/team",()=>{
 for(const q of d.qualifiers) for(const pos of POS){
   const pool=P.filter(p=>p.club===q.club&&p.position===pos);
   assert.ok(pool.length<=cap[pos],q.club+" "+pos);assert.ok(pool.filter(p=>p.role==="backup").length<=1,q.club+" "+pos);
 }
});
check("ISO DOB format, identity and club name, no fake DOB verified claim",()=>{
 for(const p of P){
   assert.ok(p.name&&p.nameOriginal&&p.nameKo&&p.clubNameOriginal,p.id);
   assert.match(p.born,/^\d{4}-\d{2}-\d{2}$/);
   assert.equal(new Date(p.born+"T00:00:00Z").toISOString().slice(0,10),p.born);
   assert.equal(p.clubNameOriginal,d.clubs.find(c=>c.id===p.club)?.name,p.id);
   assert.ok(p.birthAuditStatus,p.id);
 }
 assert.equal(d.meta.candidateAudit.birthdateIndependentDoubleCheckComplete,false);
});
check("2011-12 source PM/SM/G numerically plausible; not historic proof",()=>{
 for(const p of P){
  assert.ok(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0&&p.leagueAppearances<=38,p.id);
  assert.ok(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,p.id);
  assert.ok(Number.isInteger(p.leagueGoals),p.id);
  assert.equal(p.appearanceScope,"2011-12 La Liga");
  assert.ok(p.evidence.seasonPrimarySource&&p.sources.length,p.id);
 }
});
check("tiers, 3-season frame, all candidates explicitly unapproved and partial",()=>{
 for(const p of P){
   assert.ok(TIERS.includes(p.tier),p.id);
   assert.equal(p.review,"draft_unapproved");assert.equal(p.evaluationStatus,"provisional_tier_not_user_approved");
   assert.equal(p.threeSeasonReview.seasons.join(","),"2009-10,2010-11,2011-12");
   assert.equal(p.threeSeasonReview.olderSeasonsSourceAudit,"not_independently_completed");
   assert.ok(p.positionVerification,p.id);
 }
 assert.equal(d.meta.candidateAudit.priorTwoSeasonAudit,"not_independently_verified");
});
check("within-position ranks contiguous and sorted by tiers",()=>{
 for(const pos of POS){
   const pool=P.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
   for(let i=0;i<pool.length;i++){
     assert.equal(pool[i].rank,i+1,pos+" "+pool[i].name);
     if(i)assert.ok(TIERS.indexOf(pool[i-1].tier)<=TIERS.indexOf(pool[i].tier),pos+" "+i);
   }
 }
});
check("11 unique Best XI IDs and position matches",()=>{
 assert.equal(d.bestXi.length,11);
 assert.equal(new Set(d.bestXi.map(p=>p.playerId)).size,11);
 for(const s of d.bestXi){const p=P.find(x=>x.id===s.playerId);assert.ok(p,s.playerId);assert.equal(p.position,s.position,s.playerId)}
});
check("historic source conflicts and formation hypothesis not disguised",()=>{
 assert.equal(d.meta.candidateAudit.knownBirthdateConflicts.length,4);
 assert.match(d.meta.candidateAudit.formationStatus,/unverified/);
 assert.equal(d.meta.browserValidation,false);
 assert.equal(d.meta.userApproved,false);
});
const result={structuralPasses:passes,candidates:P.length,starterSlots:P.filter(p=>p.role==="starter").length,backups:P.filter(p=>p.role==="backup").length,worldClass:P.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:P.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,dobTwoSourceCertification:"INCOMPLETE",priorTwoSeasons:"NOT INDEPENDENTLY VERIFIED",predominantPosition:"NOT MATCHWISE VERIFIED",modalFormation:"NOT VERIFIED",warning:"This is only structural validation; historical individual audits and user approval remain open."};
console.log(JSON.stringify(result,null,2));
