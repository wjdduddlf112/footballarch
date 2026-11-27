// Factual audit only: retained player evaluations and Best XI remain provisional.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
import {validateSeason} from "./uel-historical-patch-core.mjs";
const seasons=["2008-09","2009-10","2010-11","2011-12","2012-13","2013-14","2014-15","2015-16","2016-17"];
const ready=[615,624,432,596,555,664,620,537,717],held=[38,40,4,1,20,2,14,71,37],excluded=[0,1,1,0,2,3,0,0,0];
const read=(s)=>JSON.parse(fs.readFileSync("data/uel-"+s+".json","utf8"));
const source=fs.readFileSync("assets/app.js","utf8");
new vm.Script(source); // compile entire production bundle
const hook=source.indexOf("/* Cards show a neutral abbreviation");
assert(hook>0,"renderer test hook");
const api=vm.runInNewContext(source.slice(0,hook)+
 'return {set(d){data=d;st.domain="europe";st.league=d.meta.competitionId;st.season=d.meta.season;st.showCandidates=false},tournament:uclTournament,overview:uclOverview,eligible:eligiblePlayers,table:tablePlayers,goals:playerGoals,assists:playerAssists,conceded:playerConceded,audit:uelHistoricalAudit};})();',
 {location:{search:""},URLSearchParams});
let total=0,totalRows=0,totalActive=0,totalReady=0,totalHeld=0;
const results=[];
for(const [i,s] of seasons.entries()){
 const d=read(s),a=d.audit.uelHistoricalPatch,v=validateSeason(d);
 assert.deepEqual(v.errors,[],s+" structural errors");
 assert.equal(a.baselineCommit,"f8e339ce94330f38e6f245e90322fec68f06821a");
 assert.equal(a.recordsStatus,"verified_ready_fields");
 assert.equal(a.status,"draft_unapproved");
 assert.equal(a.readyChanges,ready[i]);assert.equal(a.applied+a.already,ready[i]);assert.equal(a.held.length,held[i]);
 assert.equal(new Set(a.confirmedChangeIds).size,ready[i]);assert.equal(a.excludedCandidateIds.length,excluded[i]);assert.equal(v.excluded,excluded[i]);
 const sourceFields=Object.values(a.fieldSources).flatMap(x=>Object.values(x));
 assert.equal(sourceFields.length,ready[i]+(a.supplementalChanges?.length||0));
 assert(sourceFields.every(refs=>refs.length&&refs.every(id=>a.sources[id]?.url)),s+" field source references");
 assert(a.held.every(x=>x.status==="held"&&x.reason&&(x.sources||[]).every(id=>a.sources[id]?.url)),s+" held references");
 api.set(d);assert(api.audit());
 const html=api.tournament(),overview=api.overview(),people=api.eligible(),table=api.table(people);
 const ids=[...html.matchAll(/data-match-id="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,d.matches.length);assert.equal(new Set(ids).size,ids.length);
 assert(d.matches.every(m=>ids.includes(m.id)));
 const groupRows=[...html.matchAll(/(\d+)경기 결과/g)].map(m=>Number(m[1]));
 assert.equal(groupRows.length,d.groups.length);
 assert(groupRows.every(n=>n===(i===0?10:12)));
 assert.equal([...overview.matchAll(/ ✓/g)].length,24);
 assert(html.includes(i===0?"UEFA Cup":"UEFA Europa League"));
 assert(overview.includes(i===0?"UEFA Cup":"UEFA Europa League"));
 assert(table.includes("GA (GK)")&&table.includes("ASSIST SOURCE")&&table.includes("RECORD SOURCE"));
 assert.equal([...table.matchAll(/data-player="/g)].length,v.active);
 assert(people.every(p=>!a.excludedCandidateIds.includes(p.id)));
 assert.equal(api.goals({goals:0}),0);assert.equal(api.goals({goals:null}),"—");
 assert.equal(api.assists({assists:0,assistsProvider:"UEFA"}),0);
 assert.equal(api.assists({assists:3}),"—");assert.equal(api.conceded({goalsConceded:0}),0);
 const fixture=(id)=>d.matches.find(x=>x.id===id);
 if(s==="2012-13"){
  const m=fixture("uel-2012-13-106"),et=fixture("uel-2012-13-164");
  assert.equal(m.date,"2012-11-28");assert.equal(m.scheduledDate,"2012-11-22");assert(et.extraTime);
  assert.deepEqual(et.scoreAtRegulation,[2,0]);assert.deepEqual([et.homeGoals,et.awayGoals],[2,0]);
  assert.deepEqual(et.penaltyShootout,{home:4,away:2});assert(html.includes("2012-11-22 예정")&&html.includes("연장 종료 · 90분 2–0")&&html.includes("PK 4–2"));
 }
 if(s==="2013-14"){
  const tie=d.knockout.find(x=>x.stage==="round_of_16").ties.find(t=>t.home==="sevilla"&&t.away==="betis");
  assert.deepEqual(tie.aggregate,[2,2]);assert.equal(tie.winner,"sevilla");assert.equal(tie.awayGoalsRule,false);
  assert.deepEqual(tie.penalties,{home:4,away:3});
 }
 if(s==="2014-15"){
  const m=fixture("uel-2014-15-058");assert.equal(m.startedDate,"2014-11-27");assert.equal(m.date,"2014-11-28");
  assert.deepEqual([m.homeGoals,m.awayGoals],[3,3]);assert(html.includes("2014-11-27 시작 · 2014-11-28 속개"));
 }
 if(s==="2015-16"){
  const m=fixture("uel-2015-16-175"),p=d.players.find(p=>p.id==="uel-2015-16-sparta-tiemokokonate");
  assert(m.extraTime);assert.deepEqual(m.scoreAtRegulation,[1,0]);assert.deepEqual([m.homeGoals,m.awayGoals],[1,2]);
  assert.equal(p.goals,0);assert.equal(p.assists,3);assert(p.assistsProvider);
 }
 if(s==="2016-17"){
  const m=fixture("uel-2016-17-172"),p=d.players.find(p=>p.id==="uel-2016-17-manutd-chrissmalling");
  assert(m.extraTime);assert.deepEqual(m.scoreAtRegulation,[0,1]);assert.deepEqual([m.homeGoals,m.awayGoals],[0,2]);
  assert.equal(p.goals,0);assert.equal(p.assists,1);assert(p.assistsProvider);
  assert.deepEqual(d.groups.find(g=>g.code==="K").table.slice(1,3).map(t=>[t.club,t.status]),[["hapoelbeer","round_of_32"],["southampton","eliminated"]]);
  assert.deepEqual(d.groups.find(g=>g.code==="L").table.slice(2).map(t=>[t.club,t.rank]),[["zurich",3],["steaua",4]]);
 }
 total+=ids.length;totalRows+=d.players.length;totalActive+=v.active;totalReady+=a.readyChanges;totalHeld+=a.held.length;
 results.push({season:s,matches:ids.length,groups:groupRows.length,groupMatches:v.groupMatches,active:v.active,xi:v.xi,ready:a.readyChanges,held:a.held.length});
}
assert.deepEqual([total,totalRows,totalActive,totalReady,totalHeld],[1861,1184,1177,5360,227]);
console.log(JSON.stringify({passed:true,total,totalRows,totalActive,totalReady,totalHeld,results},null,2));
if(process.argv[2]==="--baseline"){
 const baseline=path.resolve(process.argv[3]),current=process.cwd();
 function bestXi(cwd){
  const run=spawnSync(process.execPath,["scripts/verify-uefa-best-xi-completeness.mjs"],{cwd,encoding:"utf8",maxBuffer:16*1024*1024});
  if(run.error)throw run.error;
  const report=JSON.parse((run.status===0?run.stdout:run.stderr).trim());
  assert.equal(report.totalFiles,61,"UEFA file count");
  return report.errors||[];
 }
 const old=bestXi(baseline),now=bestXi(current),remaining=new Map();
 for(const e of old)remaining.set(e,(remaining.get(e)||0)+1);
 const newErrors=now.filter(e=>{const n=remaining.get(e)||0;if(!n)return true;remaining.set(e,n-1);return false});
 const targetErrors=now.filter(e=>seasons.some(s=>e.startsWith("uel-"+s+".json:")));
 console.log(JSON.stringify({baselineErrors:old.length,currentErrors:now.length,newErrors,targetErrors},null,2));
 assert.deepEqual(newErrors,[]);assert.deepEqual(targetErrors,[]);
}
