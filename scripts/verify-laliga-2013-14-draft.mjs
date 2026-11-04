import {readFileSync} from "node:fs";
import {strict as assert} from "node:assert";
const d=JSON.parse(readFileSync("data/laliga-2013-14.json","utf8"));
const archive=JSON.parse(readFileSync("data/laliga-standings-verified-1999-2026.json","utf8"));
const P=d.players,positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-"];
const cap={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
let tests=0;const test=(n,fn)=>{fn();console.log("PASS "+n);tests++};
test("draft, 2013-14, never final",()=>{
 assert.equal(d.meta.season,"2013-14");assert.equal(d.meta.status,"draft");
 assert.equal(d.meta.userApproved,false);assert.equal(d.meta.bestXiStatus,"proposed_unapproved");
 assert.equal(d.meta.formation,"4-2-3-1");
});
test("original club badge data and 20-team source league standings unchanged",()=>{
 assert.deepEqual(d.clubs,archive.clubs);
 assert.deepEqual(d.standings,archive.seasons["2013-14"].standings);
 assert.equal(d.standings.length,20);
});
test("2014-15 actual 4 UCL 3 UEL club participants",()=>{
 const actual=archive.seasons["2013-14"].europeanParticipation;
 assert.equal(d.qualifiers.length,7);
 assert.deepEqual(Object.fromEntries(d.qualifiers.map(q=>[q.club,q.competition])),actual);
 assert.equal(d.qualifiers.filter(x=>x.competition==="UCL").length,4);
 assert.equal(d.qualifiers.filter(x=>x.competition==="UEL").length,3);
});
test("136 unique player entries, 7 clubs, 77 nominal starters and 59 backups",()=>{
 assert.equal(P.length,136);
 assert.equal(new Set(P.map(x=>x.id)).size,136);
 assert.equal(new Set(P.map(x=>x.club)).size,7);
 assert.equal(P.filter(x=>x.role==="starter").length,77);
 assert.equal(P.filter(x=>x.role==="backup").length,59);
 for(const c of d.qualifiers)assert.equal(P.filter(p=>p.club===c.club&&p.role==="starter").length,11,c.club);
});
test("one position per player, clubwise position caps and only one backup per slot",()=>{
 for(const c of d.qualifiers)for(const pos of positions){
  const a=P.filter(p=>p.club===c.club&&p.position===pos);
  assert.ok(a.length<=cap[pos],c.club+" "+pos);
  assert.ok(a.filter(x=>x.role==="backup").length<=1,c.club+" "+pos);
 }
});
test("ISO DOB plausibility and identity fields, NOT independent 2-source confirmation",()=>{
 for(const p of P){
  assert.ok(p.name&&p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.birthAuditStatus,p.id);
  assert.match(p.born,/^\d{4}-\d{2}-\d{2}$/);
  assert.equal(new Date(p.born+"T00:00:00Z").toISOString().slice(0,10),p.born);
  assert.equal(p.clubNameOriginal,d.clubs.find(c=>c.id===p.club)?.name);
 }
 assert.equal(d.meta.candidateAudit.independentTwoSourceDOBComplete,false);
});
test("starts, appearances, and goals are plausible 2013-14 La Liga season source entries",()=>{
 for(const p of P){
  assert.ok(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0&&p.leagueAppearances<=38,p.id);
  assert.ok(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,p.id);
  assert.ok(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0,p.id);
  assert.equal(p.appearanceScope,"2013-14 La Liga");
  assert.ok(p.evidence?.seasonPrimarySource?.includes("bdfutbol.com/en/t/t2013-14"),p.id);
  if(p.position==="GK")assert.equal(p.leagueGoals,0);
 }
});
test("every rating tentative and 2011-12/2012-13 independently unfinished",()=>{
 for(const p of P){
  assert.ok(tiers.includes(p.tier),p.id);
  assert.equal(p.review,"draft_unapproved");
  assert.equal(p.evaluationStatus,"provisional_tier_not_user_approved");
  assert.deepEqual(p.threeSeasonReview.seasons,["2011-12","2012-13","2013-14"]);
  assert.equal(p.threeSeasonReview.olderSeasonsSourceAudit,"not_independently_completed");
  assert.ok(p.positionVerification);
 }
 assert.match(d.meta.candidateAudit.priorTwoSeasonAudit,/not_independently_verified/);
});
test("unique contiguous leaguewide positional ranks sorted by proposed tier",()=>{
 for(const pos of positions){
  const a=P.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);
  for(let i=0;i<a.length;i++){
   assert.equal(a[i].rank,i+1,pos+" "+a[i].name);
   if(i)assert.ok(tiers.indexOf(a[i-1].tier)<=tiers.indexOf(a[i].tier));
  }
 }
});
test("proposed 4-2-3-1 XI references 11 unique and position-correct players",()=>{
 assert.equal(d.bestXi.length,11);
 assert.equal(new Set(d.bestXi.map(x=>x.playerId)).size,11);
 const expected={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
 assert.deepEqual(Object.fromEntries(positions.map(p=>[p,d.bestXi.filter(x=>x.position===p).length])),expected);
 for(const x of d.bestXi){
  const p=P.find(p=>p.id===x.playerId);
  assert.ok(p,x.playerId);assert.equal(p.position,x.position,p.name);
 }
});
test("published tactics evidence but individual and modal-formation audits remain partial",()=>{
 assert.ok(d.meta.candidateAudit.formationSourceUrls.length>=1);
 assert.match(d.meta.candidateAudit.formationStatus,/single_year_modal_not_established/);
 assert.match(d.meta.candidateAudit.primaryPositionAudit,/not_matchwise/);
 assert.equal(d.meta.browserValidation,false);
});
const result={structuralPasses:tests,candidates:P.length,starters:P.filter(p=>p.role==="starter").length,backups:P.filter(p=>p.role==="backup").length,worldClass:P.filter(p=>["S","A+"].includes(p.tier)).length,leagueTop:P.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,warning:"Structural/format tests, not independent per-player 3-season historical evidence or majority position proof."};
console.log(JSON.stringify(result,null,2));
