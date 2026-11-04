import {readFileSync} from "node:fs";
import {strict as assert} from "node:assert";
const d=JSON.parse(readFileSync("data/laliga-2012-13.json","utf8"));
const archive=JSON.parse(readFileSync("data/laliga-standings-verified-1999-2026.json","utf8"));
const P=d.players, POS=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const TIERS=["S","A+","A","A-","B+","B","B-","C+","C","C-"], cap={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
let passes=0;
function check(name,fn){fn();passes++;console.log("PASS "+name);}
check("2012-13 draft and unapproved status",()=>{
 assert.equal(d.meta.season,"2012-13");assert.equal(d.meta.status,"draft");
 assert.equal(d.meta.userApproved,false);assert.equal(d.meta.bestXiStatus,"proposed_unapproved");
});
check("preserve exact original standings and 42-club crest catalogue",()=>{
 assert.deepEqual(d.standings,archive.seasons["2012-13"].standings);
 assert.deepEqual(d.clubs,archive.clubs);
});
check("actual 2013-14 UEFA entrant clubs coincide with archive",()=>{
 assert.equal(d.qualifiers.length,7);
 assert.deepEqual(Object.fromEntries(d.qualifiers.map(q=>[q.club,q.competition])),archive.seasons["2012-13"].europeanParticipation);
 assert.ok(d.qualifiers.some(q=>q.club==="sevilla"&&q.competition==="UEL"));
 assert.ok(!d.qualifiers.some(q=>["malaga","rayo"].includes(q.club)));
});
check("135 unique real nominee identifiers, 7 clubs, 77 starter slots / 58 backups",()=>{
 assert.equal(P.length,135);assert.equal(new Set(P.map(p=>p.id)).size,135);
 assert.equal(new Set(P.map(p=>p.club)).size,7);
 for(const q of d.qualifiers)assert.equal(P.filter(p=>p.club===q.club&&p.role==="starter").length,11,q.club);
 assert.equal(P.filter(p=>p.role==="backup").length,58);
});
check("per-position max caps, at most 1 substitute per club position",()=>{
 for(const q of d.qualifiers)for(const pos of POS){
  const pool=P.filter(p=>p.club===q.club&&p.position===pos);
  assert.ok(pool.length<=cap[pos],q.club+" "+pos);
  assert.ok(pool.filter(p=>p.role==="backup").length<=1,q.club+" "+pos);
 }
});
check("all DOBs ISO valid; identity and name original present, no false verification",()=>{
 for(const p of P){
  assert.ok(p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.birthAuditStatus,p.id);
  assert.match(p.born,/^\d{4}-\d{2}-\d{2}$/);
  assert.equal(new Date(p.born+"T00:00:00Z").toISOString().slice(0,10),p.born);
  assert.equal(p.clubNameOriginal,d.clubs.find(c=>c.id===p.club)?.name);
 }
 assert.equal(d.meta.candidateAudit.independentTwoSourceDOBComplete,false);
});
check("2012-13 BDFutbol PT/PJ/G data numerically plausible, not history certification",()=>{
 for(const p of P){
  assert.ok(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=38,p.id);
  assert.ok(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0&&p.leagueAppearances<=38,p.id);
  assert.ok(p.leagueStarts<=p.leagueAppearances,p.id);
  assert.ok(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0,p.id);
  assert.equal(p.appearanceScope,"2012-13 La Liga");
  assert.ok(p.evidence.seasonPrimarySource.includes("bdfutbol.com/es/t/t2012-13"),p.id);
  if(p.position==="GK")assert.equal(p.leagueGoals,0,"goalkeeper conceded goals are NOT goals scored");
 }
});
check("every tier provisional and previous 2 seasons unverified",()=>{
 for(const p of P){
  assert.ok(TIERS.includes(p.tier),p.id);
  assert.equal(p.review,"draft_unapproved");assert.equal(p.evaluationStatus,"provisional_tier_not_user_approved");
  assert.deepEqual(p.threeSeasonReview.seasons,["2010-11","2011-12","2012-13"]);
  assert.equal(p.threeSeasonReview.olderSeasonsSourceAudit,"not_independently_completed");
  assert.ok(p.positionVerification,p.id);
 }
 assert.equal(d.meta.candidateAudit.priorTwoSeasonAudit,"NOT_independently_verified_for_all");
});
check("contiguous positional ranks and consistent tier descending",()=>{
 for(const pos of POS){
  const pool=P.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
  for(let i=0;i<pool.length;i++){
   assert.equal(pool[i].rank,i+1,pos+" "+pool[i].name);
   if(i)assert.ok(TIERS.indexOf(pool[i-1].tier)<=TIERS.indexOf(pool[i].tier),pos+" "+i);
  }
 }
});
check("eleven unique provisional Best XI player IDs and positions",()=>{
 assert.equal(d.bestXi.length,11);
 assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
 for(const row of d.bestXi){
  const p=P.find(x=>x.id===row.playerId);
  assert.ok(p,row.playerId);assert.equal(p.position,row.position,p.name);
 }
});
check("DOB conflicts and 4-2-3-1 frequency explicitly open",()=>{
 assert.ok(d.meta.candidateAudit.knownBirthdateConflicts.length>=2);
 assert.equal(d.meta.candidateAudit.formationStatus,"NOT_leaguewide_modal_frequency_verified");
 assert.equal(d.meta.browserValidation,false);
 assert.equal(d.meta.userApproved,false);
});
console.log(JSON.stringify({
 structuralPasses:passes,candidates:P.length,
 starters:P.filter(p=>p.role==="starter").length,
 backups:P.filter(p=>p.role==="backup").length,
 worldClass:P.filter(p=>["S","A+"].includes(p.tier)).length,
 leagueTop:P.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,
 warning:"STRUCTURE AND FORMAT ONLY. No proof of second-source all-player stats/DOB, 3-season form, predominant positions, most common formation or user approval."
},null,2));
