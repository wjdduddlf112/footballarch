import fs from "node:fs";
function verify(d,e,app){
 const [s,,matches,goals,players,fields,held]=e,errors=[],ok=(v,k)=>{if(!v)errors.push(k)},same=(a,b)=>JSON.stringify(a)===JSON.stringify(b),unique=a=>new Set(a).size===a.length,ids=new Set(d.clubs.map(c=>c.id)),pids=new Map(d.players.map(p=>[p.id,p])),modern=Number(s.slice(0,4))>=2024,norm=r=>r==="quarter_finals"?"quarter_final":r==="semi_finals"?"semi_final":r;
 const a=d.audit.uclHistoricalPatch,stage=modern?"league_phase":"group_stage";ok(d.meta.season===s&&d.meta.competitionId==="ucl"&&ids.size===(modern?36:32)&&d.participants.length===ids.size&&unique(d.participants.map(p=>p.club)),"clubs");
 ok(d.matches.length===matches&&unique(d.matches.map(m=>m.id)),"match count/IDs");ok(d.matches.filter(m=>m.round===stage).length===(modern?144:96),"league/group count");ok(d.matches.reduce((n,m)=>n+m.homeGoals+m.awayGoals,0)===goals,"goals");
 for(const m of d.matches)ok(ids.has(m.home)&&ids.has(m.away)&&m.home!==m.away&&[m.homeGoals,m.awayGoals].every(x=>Number.isInteger(x)&&x>=0)&&/^\d{4}-\d{2}-\d{2}$/.test(m.date),"match "+m.id);
 const tables=modern?[d.leaguePhase]:d.groups;ok(tables.flatMap(g=>g.table).length===ids.size&&unique(tables.flatMap(g=>g.table.map(t=>t.club))),"standing clubs");
 for(const g of tables){const cs=new Set(g.table.map(t=>t.club)),gm=d.matches.filter(m=>m.round===stage&&cs.has(m.home)&&cs.has(m.away));ok(gm.length===(modern?144:12),"group count "+g.code);for(const t of g.table){const ms=gm.filter(m=>m.home===t.club||m.away===t.club);let w=0,draw=0,gf=0,ga=0;for(const m of ms){const x=m.home===t.club?m.homeGoals:m.awayGoals,y=m.home===t.club?m.awayGoals:m.homeGoals;gf+=x;ga+=y;if(x>y)w++;else if(x===y)draw++}let n=modern?8:6;ok(ms.length===n&&same([t.played,t.wins,t.draws,t.losses,t.goalsFor,t.goalsAgainst,t.gd,t.points],[n,w,draw,n-w-draw,gf,ga,gf-ga,3*w+draw]),"standing "+t.club)}}
 const used=[];for(const st of d.knockout){for(const t of st.ties||[st]){const legs=[t.firstLeg,t.secondLeg].filter(Boolean);if(!legs.length&&t.score)legs.push({home:t.home,away:t.away,date:t.date,score:t.score});let x=0,y=0;for(const l of legs){const m=d.matches.find(m=>norm(m.round)===norm(st.stage)&&m.home===l.home&&m.away===l.away&&(!l.date||l.date===m.date));ok(m&&same(l.score,[m.homeGoals,m.awayGoals]),"KO leg "+st.stage+" "+l.home+" "+l.away);if(m)used.push(m.id);x+=l.home===t.home?l.score[0]:l.score[1];y+=l.home===t.home?l.score[1]:l.score[0]}if(t.aggregate)ok(same(t.aggregate,[x,y]),"KO aggregate "+st.stage+" "+t.home+" "+t.away)}}
 ok(used.length===matches-(modern?144:96)&&unique(used),"KO match coverage");
 ok(d.evaluatedClubs.length===16&&unique(d.evaluatedClubs),"evaluated clubs");ok(d.players.length===players&&pids.size===players,"player IDs");
 for(const p of d.players){ok(d.evaluatedClubs.includes(p.club)&&p.nameKo&&p.nameOriginal,"player identity "+p.id);ok(p.born==null||/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB "+p.id);for(const k of ["appearances","starts","minutes","goals","assists","goalsConceded"])ok(p[k]==null||Number.isInteger(p[k])&&p[k]>=0,"stat "+p.id+" "+k);ok(p.starts==null||p.appearances==null||p.starts<=p.appearances,"starts>apps "+p.id);if(p.goalsConceded!=null)ok(p.position==="GK","non-GK conceded "+p.id);if(a.fieldSources["player:"+p.id]?.["/assists"])ok(p.assistsProvider&&p.assists!=null,"assist source "+p.id)}
 const xi=d.bestXi,baseSlots={GK:1,RB:1,CB:2,LB:1,DM:1,LW:1,RW:1,ST:1},slots=d.meta.formation==="4-3-3"?{...baseSlots,CM:2}:d.meta.formation==="4-2-3-1"?{...baseSlots,CM:1,CAM:1}:null;ok(xi.length===11&&unique(xi.map(x=>x.playerId)),"XI size/IDs");for(const x of xi)ok(pids.has(x.playerId),"XI candidate "+x.playerId);if(slots)for(const pos of new Set([...Object.keys(slots),...xi.map(x=>x.tacticalSlot||x.displayPosition||x.position)]))ok(xi.filter(x=>(x.tacticalSlot||x.displayPosition||x.position)===pos).length===(slots[pos]||0),"XI slot "+pos);
 ok(a.counts.applied+a.counts.alreadyApplied===fields&&a.counts.conflicts===0,"patch count");ok(a.held.length===held&&a.seasonComplete===false,"held count/status");let n=0;for(const fs of Object.values(a.fieldSources))for(const src of Object.values(fs)){n++;ok(src.length&&src.every(x=>a.sources[x]?.url),"field source")}ok(n===fields,"field source count");for(const h of a.held)ok(h.status==="held"&&h.reason&&h.sources.every(x=>a.sources[x]?.url),"held source");
 if(s==="2025-26"){for(const p of d.players){ok(p.appearances===0||p.minutes>0,"SPS minutes "+p.id);ok(p.threeSeasonAssessment?.current?.minutes===p.minutes,"SPS current minutes "+p.id)}for(const [c,name,v] of [["psg","Safonov",1102],["psg","Pacho",1693],["arsenal","Raya",1396]])ok(d.players.find(p=>p.club===c&&p.nameOriginal.includes(name))?.minutes===v,"SPS example "+name)}
 if(s==="2020-21"){const m=d.matches.find(x=>x.id.endsWith("-096"));ok(m.startedDate==="2020-12-08"&&m.date==="2020-12-09"&&m.neutral===false&&m.venue.includes("Parc des Princes"),"resumed match");for(const [id,venue] of [["097","Puskás"],["102","Arena Națională"],["103","Puskás"],["107","Puskás"],["109","Puskás"],["115","Ramón Sánchez-Pizjuán"],["117","Ramón Sánchez-Pizjuán"]]){let m=d.matches.find(x=>x.id.endsWith("-"+id));ok(m.neutral===true&&m.venue.includes(venue),"neutral "+id)}}
 if(s==="2017-18")ok(d.players.find(p=>p.club==="realmadrid"&&p.nameOriginal.includes("Nacho"))?.goals===1,"Nacho goals");if(s==="2018-19")ok(d.players.find(p=>p.club==="ajax"&&p.nameOriginal.includes("Mazraoui"))?.goals===2,"Mazraoui goals");if(s==="2023-24")for(const name of ["Barella","Dias","Stones"])ok(d.players.find(p=>p.nameOriginal.includes(name)&&["inter","mancity"].includes(p.club))?.goals===0,"goals "+name);
 // Run exact tournament functions with a minimal dependency harness, not an actual browser.
 const start=app.indexOf("function uclTable(g)"),end=app.indexOf("function historicalAuditNotice(){");
 const render=new Function("data","esc","club","label","statValue","penaltyLabel",app.slice(start,end)+"\nreturn uclTournament();");
 const html=render(d,x=>String(x??""),id=>({name:id}),()=>d.meta.competition,()=>"",()=>"");
 const rows=(html.match(/<tr><td>/g)||[]).length;ok(rows===matches+ids.size,"UI visible match and standing rows "+rows);
 if(["2021-22","2022-23","2023-24"].includes(s))ok((html.match(/Europa League 녹아웃 플레이오프/g)||[]).length===8,"UI Europa League");
 if(modern)ok((html.match(/탈락/g)||[]).length===12,"UI eliminated 25-36");
 if(s==="2020-21")ok(html.includes("2020-12-08 시작 · 2020-12-09 속개")&&(html.match(/ · 중립/g)||[]).length>=7,"UI neutral/resume");
 const baseline=a.baselineStructuralIssues||[],newErrors=errors.filter(x=>!baseline.includes(x));return {season:s,applied:a.counts.applied,alreadyApplied:a.counts.alreadyApplied,conflicts:a.counts.conflicts,held,matches,players,goals,renderedRows:rows,baseline,errors,newErrors}
}
const entries=[
  [
    "2017-18",
    null,
    125,
    401,
    256,
    338,
    18
  ],
  [
    "2018-19",
    null,
    125,
    366,
    264,
    288,
    21
  ],
  [
    "2019-20",
    null,
    119,
    386,
    298,
    1190,
    12
  ],
  [
    "2020-21",
    null,
    125,
    366,
    288,
    547,
    19
  ],
  [
    "2021-22",
    null,
    125,
    380,
    294,
    140,
    17
  ],
  [
    "2022-23",
    null,
    125,
    372,
    285,
    1005,
    4
  ],
  [
    "2023-24",
    null,
    125,
    375,
    282,
    589,
    17
  ],
  [
    "2024-25",
    null,
    189,
    618,
    296,
    27,
    10
  ],
  [
    "2025-26",
    null,
    189,
    655,
    296,
    1499,
    1
  ]
];
const app=fs.readFileSync("assets/app.js","utf8");new Function(app);const results=entries.map(e=>verify(JSON.parse(fs.readFileSync("data/ucl-"+e[0]+".json","utf8")),e,app));console.log(JSON.stringify(results,null,2));if(results.some(x=>x.newErrors.length))process.exitCode=1;
