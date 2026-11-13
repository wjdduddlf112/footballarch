// Guardrail: no UEFA season with a nominated player pool can silently ship an empty Best XI.
// 1999-00 through 2004-05 have strict position/formation checks after 2026-11-14 repair.
import fs from "node:fs";
import path from "node:path";
const dir="data",files=fs.readdirSync(dir).filter(f=>/^(ucl|uel|uecl)-\d{4}-\d{2}\.json$/.test(f)).sort();
const exactYears=new Set(["1999-00","2000-01","2001-02","2002-03","2003-04","2004-05"]);
const expectedFormations={"4-4-2":{GK:1,RB:1,CB:2,LB:1,DM:1,CM:1,LW:1,RW:1,ST:2},"4-3-3":{GK:1,RB:1,CB:2,LB:1,DM:1,CM:2,LW:1,RW:1,ST:1},"4-3-1-2":{GK:1,RB:1,CB:2,LB:1,DM:1,CM:2,CAM:1,ST:2},"4-2-3-1":{GK:1,RB:1,CB:2,LB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1}};
const errors=[],results=[];
function chk(value,label){if(!value)errors.push(label)}
for(const file of files){
 const d=JSON.parse(fs.readFileSync(path.join(dir,file),"utf8")), season=d.meta?.season, competition=d.meta?.competitionId;
 if(!d.players?.length){results.push({file,players:0,xi:d.bestXi?.length||0,skipped:true});continue;}
 const xi=d.bestXi||[];const idSet=new Set((d.players||[]).map(p=>p.id));
 chk(xi.length===11,file+": Best XI must have 11; actual "+xi.length);
 chk(new Set(xi.map(p=>p.playerId)).size===xi.length,file+": duplicate best XI player IDs");
 for(const pick of xi)chk(idSet.has(pick.playerId),file+": unknown XI player ID "+pick.playerId);
 if(competition==="ucl"&&exactYears.has(season)){
  chk(d.meta?.bestXiReview?.status==="proposed_unapproved",file+": must be DRAFT, not approved");
  chk(xi.every(p=>p.status==="proposed_unapproved"&&p.reason?.length>30),file+": missing rationale/DRAFT status");
  chk(xi.every(p=>p.sources?.length>0),file+": XI source URLs missing");
  chk(d.evaluatedClubs?.length===16,file+": wrong assessed club count");
  const posCounts=Object.fromEntries(xi.map(s=>s.position).filter((x,i,a)=>a.indexOf(x)===i).map(x=>[x,xi.filter(s=>s.position===x).length]));
  const target=expectedFormations[d.meta?.formation];
  chk(Boolean(target),file+": invalid formation "+d.meta?.formation);
  if(target)for(const pos of new Set([...Object.keys(posCounts),...Object.keys(target)]))chk((posCounts[pos]||0)===(target[pos]||0),file+": formation mismatch "+pos);
  for(const selected of xi){const p=d.players.find(p=>p.id===selected.playerId);if(p){chk(selected.position===p.position,file+": primary position conflict "+p.id);chk(d.evaluatedClubs.includes(p.club),file+": chosen non-qualifying club "+p.id);chk(!/registration_only/.test(p.role||""),file+": registration only "+p.id);}}
 }
 results.push({file,players:d.players.length,xi:xi.length,formation:d.meta?.formation,draft:d.meta?.bestXiReview?.status||null});
}
if(errors.length){console.error(JSON.stringify({passed:false,totalFiles:files.length,errors,results},null,2));process.exit(1)}
console.log(JSON.stringify({passed:true,totalFiles:files.length,withPlayerPool:results.filter(x=>x.players>0).length,restoredSix:results.filter(x=>x.file.startsWith("ucl-")&&exactYears.has(x.file.slice(4,11))),results},null,2));
