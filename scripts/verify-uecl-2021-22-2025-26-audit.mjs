// Historical UECL factual audit. Provisional ratings are not promoted.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
const seasons=["2021-22","2022-23","2023-24","2024-25","2025-26"];
const ready=[1194,987,804,809,750],held=[5,14,1,1,1],matches=[141,141,141,153,153],players=[145,126,140,138,129],excluded=[4,0,1,0,0],fieldCount=[736,523,592,587,543],sourceCount=[153,149,151,167,162],extra=[2,6,7,7,2],penalties=[1,4,3,2,0],assists=[5,6,4,6,5];
const read=(root,f)=>JSON.parse(fs.readFileSync(path.join(root,"data",f),"utf8"));
const key=m=>[m.round,m.home,m.away].join("|");
const norm=r=>({quarter_finals:"quarter_final",semi_finals:"semi_final",knockout_play_off:"knockout_playoffs"}[r]??r);
function renderer(root){
 const source=fs.readFileSync(path.join(root,"assets/app.js"),"utf8");new vm.Script(source);
 const hook=source.indexOf("/* Cards show a neutral abbreviation");assert(hook>0);
 
 return vm.runInNewContext(source.slice(0,hook)+'return {set(d){data=d;st.domain="europe";st.league=d.meta.competitionId;st.season=d.meta.season;st.showCandidates=false;st.position="all";st.club="all"},tournament:uclTournament,overview:uclOverview,eligible:eligiblePlayers,table:tablePlayers,formation,goals:playerGoals,assists:playerAssists,minutes:playerMinutes,conceded:playerConceded};})();',{location:{search:""},URLSearchParams});
}
const cwd=process.cwd(),api=renderer(cwd);
function table(rows,ms,n){assert.equal(rows.length,n);assert.equal(new Set(rows.map(x=>x.club)).size,n);for(const row of rows){const mm=ms.filter(x=>[x.home,x.away].includes(row.club));let w=0,d=0,l=0,gf=0,ga=0;for(const m of mm){const h=m.home===row.club,a=h?m.homeGoals:m.awayGoals,b=h?m.awayGoals:m.homeGoals;gf+=a;ga+=b;if(a>b)w++;else if(a===b)d++;else l++;}assert.deepEqual([mm.length,w,d,l,gf,ga,gf-ga,w*3+d],[row.played,row.wins,row.draws,row.losses,row.goalsFor,row.goalsAgainst,row.gd,row.points],row.club)}}
const summary=[];
for(const [i,s] of seasons.entries()){
 const d=read(cwd,"uecl-"+s+".json"),a=d.audit.ueclHistoricalPatch,ms=d.matches,ps=d.players,xi=d.bestXi;
 assert.equal(d.meta.status,"draft_unapproved");assert.equal(d.meta.season,s);assert.equal(a.baselineCommit,"4ab7033977982c310e34ca5962b9928492b01885");
 assert.equal(a.operationCount,ready[i]);assert.equal(a.applied+a.already,ready[i]);assert.equal(a.held.length,held[i]);assert.equal(Object.keys(a.sources).length,sourceCount[i]);const refs=Object.values(a.fieldSources).flatMap(Object.values);assert.equal(refs.length,fieldCount[i]);assert(refs.every(v=>v.length&&v.every(id=>a.sources[id]?.url)));assert(a.held.every(h=>h.reason&&h.status==="held"&&(h.sources||[]).every(id=>a.sources[id]?.url)));
 assert.equal(ms.length,matches[i]);assert.equal(new Set(ms.map(key)).size,ms.length);assert.equal(ps.length,players[i]);assert.equal(new Set(ps.map(p=>p.id)).size,ps.length);assert(ps.every(p=>p.starts<=p.appearances&&["goals","goalsConceded","minutes","starts","appearances","assists"].every(k=>p[k]==null||typeof p[k]==="number"&&p[k]>=0)));
 const active=ps.filter(p=>!/^not_eligible/.test(p.eligibilityStatus||""));assert.equal(ps.length-active.length,excluded[i]);assert(ps.filter(p=>!active.includes(p)).every(p=>p.appearances===0));
 assert.equal(d.evaluatedClubs.length,8);const qf=new Set(ms.filter(m=>norm(m.round)==="quarter_final").flatMap(m=>[m.home,m.away]));assert.equal(qf.size,8);assert(d.evaluatedClubs.every(id=>qf.has(id)));
 assert.equal(d.participants.length,i<3?40:36);assert.equal(ms.filter(m=>norm(m.round)==="knockout_playoffs").length,16);
 if(i<3){assert.equal(d.groups.length,8);for(const g of d.groups){const gm=ms.filter(m=>["group","group_stage"].includes(m.round)&&m.group===(g.code??g.id));assert.equal(gm.length,12);table(g.table,gm,4);for(const row of g.table)assert.equal(norm(row.status),row.rank===1?"round_of_16":row.rank===2?"knockout_playoffs":"eliminated")}}else{const lm=ms.filter(m=>m.round==="league_phase");assert.equal(lm.length,108);table(d.leaguePhase.table,lm,36);for(let md=1;md<=6;md++)assert.equal(lm.filter(m=>m.matchday===md).length,18)}
 assert.equal(ms.filter(m=>m.extraTime).length,extra[i]);assert.equal(ms.filter(m=>m.penaltyShootout).length,penalties[i]);assert(ms.filter(m=>m.extraTime).every(m=>m.scoreAtRegulation));const final=ms.find(m=>m.round==="final");assert(final.neutral&&final.venue);
 assert.equal(xi.length,11);assert.equal(new Set(xi.map(x=>x.playerId)).size,11);assert(xi.every(x=>active.some(p=>p.id===x.playerId)));assert.deepEqual(xi.map(x=>x.tacticalSlot||x.position).sort(),["GK","RB","CB","CB","LB","DM","CM","CAM","LW","RW","ST"].sort());
 api.set(d);assert.equal(api.eligible().length,active.length);const h=api.tournament(),o=api.overview(),t=api.table(api.eligible()),f=api.formation();
 const ids=[...h.matchAll(/data-match-id="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,ms.length);assert.equal(new Set(ids).size,ids.length);assert(ms.every(m=>ids.includes(key(m))));
 assert(o.includes("우승")&&o.includes("준우승")&&o.includes("8강 진출 평가 구단")&&o.includes("DRAFT"));assert(!o.includes("콘퍼런스리그 이관"));assert(h.includes("중립")&&h.includes(final.venue));
 if(i<3)assert.equal([...h.matchAll(/12경기 결과/g)].length,8);else assert.equal([...h.matchAll(/<h2>Matchday \d<\/h2>/g)].length,6);
 assert.equal([...f.matchAll(/class="slot-label"/g)].length,11);assert(!f.includes("선정 대기"));assert(f.includes("실제 주 포지션")&&f.includes("ASSIST SOURCE")&&f.includes("DRAFT"));
 assert(t.includes("GA (GK)")&&t.includes("ASSIST SOURCE")&&t.includes("RECORD SOURCE"));assert.equal([...t.matchAll(/data-player="/g)].length,active.length);assert.equal(active.filter(p=>api.assists(p)!=="—").length,assists[i]);
 for(const id of d.evaluatedClubs){const club=active.filter(p=>p.club===id);assert(club.length);assert.equal([...api.table(club).matchAll(/data-player="/g)].length,club.length)}
 assert.equal(api.goals({goals:0}),0);assert.equal(api.goals({goals:null}),"—");assert.equal(api.conceded({goalsConceded:0}),0);assert.equal(api.assists({id:"unknown",assists:3,assistsProvider:"UEFA"}),"—");
 for(const x of a.held.filter(h=>h.entity.type==="player")){const p=ps.find(p=>p.id===x.entity.id);assert(p);if(x.fields.includes("minutes"))assert.equal(api.minutes(p),"—")}
 if(i===0){const m=ms.find(m=>key(m)==="group|tottenham-hotspur|rennes");assert(m.forfeit&&m.played===false&&m.homeGoals===0&&m.awayGoals===3);assert(h.includes("실제 경기 140경기 · 401골 / 몰수 결과 포함 141행 · 404골")&&h.includes("(몰수)"))}
 if(i===1){const m=ms.find(m=>key(m)==="group|slovacko|koln");assert.equal(m.startedDate,"2022-10-27");assert.equal(m.date,"2022-10-28");assert(h.includes("2022-10-27 시작 · 2022-10-28 속개"))}
 summary.push({season:s,ready:ready[i],held:held[i],matches:ms.length,played:ms.filter(m=>!m.forfeit&&m.played!==false).length,players:ps.length,active:active.length,sourceCount:sourceCount[i]});
}
console.log(JSON.stringify({passed:true,summary},null,2));
if(process.argv[2]==="--baseline"){
 const base=path.resolve(process.argv[3]),old=renderer(base),files=fs.readdirSync(path.join(cwd,"data")).filter(f=>/^(ucl|uel|uecl)-\d{4}-\d{2}\.json$/.test(f)),untouched=files.filter(f=>!seasons.some(s=>f==="uecl-"+s+".json"));
 function render(r,d){try{r.set(d);return {overview:r.overview(),tournament:r.tournament(),players:r.table(r.eligible()),formation:r.formation()}}catch(e){return {error:e.name+": "+e.message}}}
 for(const f of untouched){const before=read(base,f),after=read(cwd,f);assert.deepEqual(after,before,f+" data");assert.deepEqual(render(api,after),render(old,before),f+" renderer regression")}
 function bestXi(dir){const r=spawnSync(process.execPath,["scripts/verify-uefa-best-xi-completeness.mjs"],{cwd:dir,encoding:"utf8",maxBuffer:16*1024*1024});if(r.error)throw r.error;const report=JSON.parse((r.status===0?r.stdout:r.stderr).trim());assert.equal(report.totalFiles,files.length);return report.errors||[]}
 const baseline=bestXi(base),current=bestXi(cwd),remaining=new Map();for(const e of baseline)remaining.set(e,(remaining.get(e)||0)+1);
 const newErrors=current.filter(e=>{const n=remaining.get(e)||0;if(!n)return true;remaining.set(e,n-1);return false}),targetErrors=current.filter(e=>seasons.some(s=>e.startsWith("uecl-"+s+".json:")));
 console.log(JSON.stringify({baselineErrors:baseline.length,currentErrors:current.length,newErrors,targetErrors,untouchedDataFiles:untouched.length},null,2));assert.deepEqual(newErrors,[]);assert.deepEqual(targetErrors,[]);
}
