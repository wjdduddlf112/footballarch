// Modern Europa League factual audit; no provisional player ratings are promoted.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
const seasons=["2017-18","2018-19","2019-20","2020-21","2021-22","2022-23","2023-24","2024-25","2025-26"];
const matchCounts=[205,205,197,205,139,141,141,189,189],playerCounts=[139,141,145,144,130,137,140,150,142],ready=[474,513,263,465,484,318,483,966,779],held=[55,53,27,1,22,1,21,3,3];
const read=(cwd,file)=>JSON.parse(fs.readFileSync(path.join(cwd,"data",file),"utf8"));
const norm=r=>({quarter_finals:"quarter_final",semi_finals:"semi_final",knockout_play_off:"knockout_playoffs"}[r]??r);
const key=m=>m.id??[m.round,m.date,m.home,m.away].join("|");
const pk=x=>Array.isArray(x)?x:[x.home,x.away];
function renderer(cwd){
 const source=fs.readFileSync(path.join(cwd,"assets/app.js"),"utf8");
 new vm.Script(source);
 const hook=source.indexOf("/* Cards show a neutral abbreviation");
 assert(hook>0,"renderer test hook");
 return vm.runInNewContext(source.slice(0,hook)+
 'return {set(d){data=d;st.domain="europe";st.league=d.meta.competitionId;st.season=d.meta.season;st.showCandidates=false},tournament:uclTournament,overview:uclOverview,eligible:eligiblePlayers,table:tablePlayers,goals:playerGoals,assists:playerAssists,conceded:playerConceded,minutes:playerMinutes,audit:uelHistoricalAudit};})();',
 {location:{search:""},URLSearchParams});
}
const cwd=process.cwd(),api=renderer(cwd),summary=[];
function table(rows,ms,size){
 assert.equal(rows.length,size);assert.equal(new Set(rows.map(x=>x.club)).size,size);
 assert.deepEqual(rows.map(x=>x.rank),Array.from({length:size},(_,i)=>i+1));
 for(const row of rows){let w=0,dr=0,l=0,gf=0,ga=0,ag=0,aw=0;
  const mm=ms.filter(x=>x.home===row.club||x.away===row.club);
  for(const m of mm){const h=m.home===row.club,a=h?m.homeGoals:m.awayGoals,b=h?m.awayGoals:m.homeGoals;gf+=a;ga+=b;if(a>b){w++;if(!h)aw++}else if(a===b)dr++;else l++;if(!h)ag+=a;}
  assert.deepEqual([mm.length,w,dr,l,gf,ga,gf-ga,w*3+dr],[row.played,row.wins,row.draws,row.losses,row.goalsFor,row.goalsAgainst,row.gd??row.goalDifference,row.points],row.club);
  if(row.awayGoals!=null)assert.equal(row.awayGoals,ag,row.club);
  if(row.awayWins!=null)assert.equal(row.awayWins,aw,row.club);
 }
}
for(const [i,s] of seasons.entries()){
 const d=read(cwd,"uel-"+s+".json"),a=d.audit.uelHistoricalPatch,y=+s.slice(0,4),ms=d.matches,ps=d.players,xi=d.bestXi;
 assert.equal(d.meta.season,s);assert.equal(d.meta.status,"draft_unapproved");
 assert.equal(ms.length,matchCounts[i]);assert.equal(ps.length,playerCounts[i]);assert.equal(new Set(ms.map(key)).size,ms.length);
 assert(ms.every(m=>Number.isInteger(m.homeGoals)&&m.homeGoals>=0&&Number.isInteger(m.awayGoals)&&m.awayGoals>=0));
 assert.equal(new Set(ps.map(p=>p.id)).size,ps.length);assert(ps.every(p=>p.starts==null||p.appearances==null||p.starts<=p.appearances));
 assert(ps.every(p=>["goals","goalsConceded","assists","minutes","starts","appearances"].every(k=>p[k]==null||typeof p[k]==="number"&&p[k]>=0)));
 const pool=r=>new Set(ms.filter(m=>norm(m.round)===r).flatMap(m=>[m.home,m.away]));
 assert.equal(d.evaluatedClubs.length,8);assert.equal(new Set(d.evaluatedClubs).size,8);assert.equal(pool("quarter_final").size,8);assert(d.evaluatedClubs.every(c=>pool("quarter_final").has(c)));
 assert.equal(xi.length,11);assert.equal(new Set(xi.map(x=>x.playerId)).size,11);assert(xi.every(x=>ps.some(p=>p.id===x.playerId)));
 const ties=d.knockout.flatMap(k=>(k.ties??[k]).map(t=>({r:norm(k.stage),t})));
 if(y<2024){
  assert.equal(d.groups.length,y<=2020?12:8);const seen=new Set();
  for(const g of d.groups){const gm=ms.filter(m=>m.round==="group_stage"&&m.group===(g.code??g.id)),rows=g.table??g.standings;assert.equal(gm.length,12);table(rows,gm,4);
   for(const m of gm){assert(!seen.has(key(m)));seen.add(key(m))}
   for(const row of rows){const exp=y<=2020?(row.rank<=2?"round_of_32":"eliminated"):(row.rank===1?"round_of_16":row.rank===2?"knockout_playoffs":row.rank===3?"conference_league_transfer":"eliminated");assert.equal(norm(row.status),exp,row.club);
    if(exp==="round_of_32"||exp==="knockout_playoffs")assert(pool(exp).has(row.club),row.club);
    if(y>=2021&&row.rank===1)assert(pool(exp).has(row.club)||ties.some(x=>x.r===exp&&[x.t.home,x.t.away].includes(row.club)),row.club);
   }
  }
  assert.equal(seen.size,ms.filter(m=>m.round==="group_stage").length);
 }else{
  const lm=ms.filter(m=>m.round==="league_phase");assert.equal(lm.length,144);table(d.leaguePhase.table,lm,36);
  for(let md=1;md<=8;md++)assert.equal(lm.filter(m=>m.matchday===md).length,18);
  for(const row of d.leaguePhase.table){if(row.rank<=8){assert.equal(row.status,"round_of_16");assert(pool("round_of_16").has(row.club));}else if(row.rank<=24){assert.equal(norm(row.status),"knockout_playoffs");assert(pool("knockout_playoffs").has(row.club));}else assert.equal(row.status,"eliminated");}
 }
 let penalties=0;
 for(const m of ms.filter(x=>x.penaltyShootout)){
  const ts=ties.filter(({r,t})=>r===norm(m.round)&&[t.home,t.away].includes(m.home)&&[t.home,t.away].includes(m.away));assert.equal(ts.length,1,key(m));const t=ts[0].t,p=t.penalties??t.penaltyShootout;assert(p,key(m));
  const [h,a]=pk(m.penaltyShootout),[th,ta]=pk(p);assert.deepEqual([h,a],t.home===m.home?[th,ta]:[ta,th],key(m));assert.equal(t.winner,h>a?m.home:m.away);penalties++;
 }
 assert.equal(a.baselineCommit,"f8e339ce94330f38e6f245e90322fec68f06821a");assert.equal(a.recordsStatus,"verified_ready_fields");
 assert.equal(a.applied+a.already,ready[i]);assert.equal(a.readyChanges,ready[i]);assert.equal(a.held.length,held[i]);assert.equal(new Set(a.confirmedChangeIds).size,ready[i]);
 const sourceFields=Object.values(a.fieldSources).flatMap(x=>Object.values(x));assert.equal(sourceFields.length,ready[i]);assert(sourceFields.every(refs=>refs.length&&refs.every(id=>a.sources[id]?.url)));
 assert(a.held.every(x=>x.status==="held"&&x.reason&&(x.sources||[]).every(id=>a.sources[id]?.url)));
 api.set(d);assert(api.audit());
 const h=api.tournament(),o=api.overview(),t=api.table(api.eligible()),ids=[...h.matchAll(/data-match-id="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,ms.length);assert.equal(new Set(ids).size,ids.length);assert(ms.every(m=>ids.includes(key(m))));
 assert(t.includes("GA (GK)")&&t.includes("ASSIST SOURCE")&&t.includes("RECORD SOURCE"));assert.equal([...t.matchAll(/data-player="/g)].length,ps.length);
 assert(o.includes("우승")&&o.includes("준우승")&&!o.includes("결승 정보 미확인"));assert.equal(api.goals({goals:0}),0);assert.equal(api.goals({goals:null}),"—");assert.equal(api.conceded({goalsConceded:0}),0);assert.equal(api.assists({assists:3}),"—");
 for(const x of a.held.filter(x=>x.entity.type==="player")){const p=ps.find(p=>p.id===x.entity.id);assert(p);if(x.fields.includes("assists"))assert.equal(api.assists(p),"—");if(x.fields.includes("minutes"))assert.equal(api.minutes(p),"—");}
 if(y<=2020){assert.equal([...h.matchAll(/12경기 결과/g)].length,12);assert(h.includes("32강 진출"));}
 else if(y<2024){assert.equal([...h.matchAll(/12경기 결과/g)].length,8);assert(h.includes("녹아웃 플레이오프")&&h.includes("콘퍼런스리그 이관")&&!h.includes("<h2>32강</h2>"));}
 else{assert.equal([...h.matchAll(/<h2>Matchday \d<\/h2>/g)].length,8);assert(h.includes("36 clubs")&&h.includes("9~24위"));}
 if(s==="2018-19")assert(h.includes("PK 4–3"));
 if(s==="2019-20"){assert.equal(ties.filter(x=>x.t.singleLeg).length,9);assert.equal([...h.matchAll(/\(단판\)/g)].length,9);assert.equal(ms.filter(m=>m.neutral).length,9);}
 if(s==="2020-21"){const m=ms.find(m=>m.home==="villarreal"&&m.away==="qarabag");assert(m.forfeit&&!m.played&&m.homeGoals===3&&m.awayGoals===0);assert(h.includes("실제 경기 204경기 · 618골 / 몰수 결과 포함 205행 · 621골")&&h.includes("(몰수)"));}
 if(s==="2021-22"){assert.equal([...h.matchAll(/data-cancelled-tie=/g)].length,1);assert(h.includes("UEFA 결정에 따른 취소"));assert(!ms.some(m=>[m.home,m.away].includes("leipzig")&&[m.home,m.away].includes("spartak")));}
 if(s==="2024-25"){const p=ps.find(p=>p.id.includes("sonheungmin"));assert.deepEqual([p.appearances,p.starts,p.goals,p.minutes],[10,9,3,673]);}
 if(s==="2025-26"){assert.equal([...h.matchAll(/연장 종료/g)].length,5);assert(h.includes("Beşiktaş Stadium, Istanbul")&&h.includes("(단판)"));const f=d.knockout.find(k=>k.stage==="final");assert(f.singleLeg&&f.neutral&&f.winner==="astonvilla");const p=ps.find(p=>p.id.includes("morgan-rogers"));assert.deepEqual([p.appearances,p.starts,p.goals,p.assists,p.minutes],[15,12,3,5,1088]);}
 summary.push({season:s,matches:ms.length,players:ps.length,ready:a.readyChanges,held:a.held.length,penalties});
}
const sum=k=>summary.reduce((n,x)=>n+x[k],0);
assert.deepEqual([sum("matches"),sum("players"),sum("ready"),sum("held")],[1611,1268,4745,186]);
console.log(JSON.stringify({passed:true,summary,matchRows:sum("matches"),players:sum("players"),ready:sum("ready"),held:sum("held"),penaltyShootouts:sum("penalties")},null,2));
if(process.argv[2]==="--baseline"){
 const base=path.resolve(process.argv[3]);const old=renderer(base);
 const files=fs.readdirSync(path.join(cwd,"data")).filter(f=>/^(ucl|uel|uecl)-\d{4}-\d{2}\.json$/.test(f));
 const untouched=files.filter(f=>!seasons.some(s=>f==="uel-"+s+".json"));let rendered=0,baselineRendererErrors=0;
 function render(r,d){try{r.set(d);return {overview:r.overview(),tournament:r.tournament(),players:r.table(r.eligible())}}catch(e){return {error:e.name+": "+e.message}}}
 for(const f of untouched){const before=read(base,f),after=read(cwd,f);assert.deepEqual(after,before,f+" data changed outside target");const a=render(old,before),b=render(api,after);assert.deepEqual(b,a,f+" renderer regression");if(a.error)baselineRendererErrors++;else rendered++;}
 function bestXi(dir){const r=spawnSync(process.execPath,["scripts/verify-uefa-best-xi-completeness.mjs"],{cwd:dir,encoding:"utf8",maxBuffer:16*1024*1024});if(r.error)throw r.error;const report=JSON.parse((r.status===0?r.stdout:r.stderr).trim());assert.equal(report.totalFiles,61);return report.errors||[];}
 const baseline=bestXi(base),current=bestXi(cwd),remaining=new Map();
 for(const e of baseline)remaining.set(e,(remaining.get(e)||0)+1);
 const newErrors=current.filter(e=>{const n=remaining.get(e)||0;if(!n)return true;remaining.set(e,n-1);return false});
 const targetErrors=current.filter(e=>seasons.some(s=>e.startsWith("uel-"+s+".json:")));
 console.log(JSON.stringify({baselineErrors:baseline.length,currentErrors:current.length,newErrors,targetErrors,untouchedDataFiles:untouched.length,regressionRendered:rendered,baselineRendererErrors},null,2));
 assert.deepEqual(newErrors,[]);assert.deepEqual(targetErrors,[]);
}
