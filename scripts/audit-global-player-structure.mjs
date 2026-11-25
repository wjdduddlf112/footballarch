#!/usr/bin/env node
// Read-only structure audit: node scripts/audit-global-player-structure.mjs [report.json]
import {readFileSync,writeFileSync} from "node:fs";
const comps=["premierleague","laliga","seriea","bundesliga","ligue1","ucl","uel","uecl"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const positions=new Set(["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"]);
const normalizeTier=t=>typeof t==="string"?t.replace(/^([ABC])0$/,"$1"):t;
const normalizeName=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"");
const validDate=d=>typeof d==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(d)&&!Number.isNaN(Date.parse(d))&&new Date(d).toISOString().slice(0,10)===d;
const allIdentities=new Map,allIds=new Map,allNames=new Map,results=[];
function audit(j,path){
 const issues={}; const flag=(k,v)=>(issues[k]??=[]).push(v);
 if(!Array.isArray(j.players)||!Array.isArray(j.clubs))throw Error("players or clubs missing");
 const players=j.players,clubs=new Set(j.clubs.map(c=>c.id)),scope=new Set(j.evaluatedClubs?.length?j.evaluatedClubs:(j.qualifiers||[]).map(c=>c.club)),ids=new Map,identities=new Map,ranks=new Map,covered=new Set;
 let rated=0,ranked=0;
 for(const p of players){
  const name=p.nameOriginal||p.originalName||p.name, n=normalizeName(name),label={id:p.id,name,club:p.club,position:p.position};covered.add(p.club);
  if(!p.id)flag("missing_id",label);else{if(ids.has(p.id))flag("duplicate_id",label);ids.set(p.id,p);}
  if(!p.nameKo||!name)flag("missing_name",label);
  if(!p.born)flag("missing_dob",label);else if(!validDate(p.born))flag("invalid_dob",{...label,born:p.born});
  if(n&&validDate(p.born)){
   const key=n+"|"+p.born,entry={...label,born:p.born,path};
   if(identities.has(key))flag("possible_duplicate_identity",{...label,other:identities.get(key)});identities.set(key,p.id);
   if(!allIdentities.has(key))allIdentities.set(key,new Map);allIdentities.get(key).set(p.id,entry);
   if(!allNames.has(n))allNames.set(n,new Map);allNames.get(n).set(p.born,entry);
   if(p.id){if(!allIds.has(p.id))allIds.set(p.id,new Map);allIds.get(p.id).set(key,entry);}
  }
  if(!clubs.has(p.club))flag("invalid_club",label);
  if(scope.size&&!scope.has(p.club))flag("outside_scope",label);
  if(!positions.has(p.position))flag("invalid_position",label);
  const t=normalizeTier(p.tier);
  if(t==null||t==="")flag("missing_tier",label);else if(!tiers.includes(t))flag("invalid_tier",{...label,tier:p.tier});else rated++;
  if(p.rank==null||p.rank==="")flag("missing_rank",label);else if(!Number.isInteger(p.rank)||p.rank<1)flag("invalid_rank",{...label,rank:p.rank});else{ranked++;if(!ranks.has(p.position))ranks.set(p.position,[]);ranks.get(p.position).push(p);}
 }
 for(const [position,a] of ranks){
  a.sort((x,y)=>x.rank-y.rank);let prev=-1;const seen=new Set;
  a.forEach((p,i)=>{if(seen.has(p.rank))flag("duplicate_rank",{id:p.id,position,rank:p.rank});seen.add(p.rank);if(p.rank!==i+1)flag("rank_sequence_review",{id:p.id,position,rank:p.rank,expected:i+1});const t=tiers.indexOf(normalizeTier(p.tier));if(t>=0){if(t<prev)flag("tier_rank_inversion",{id:p.id,position,rank:p.rank,tier:p.tier});prev=Math.max(prev,t);}});
 }
 const xi=j.bestXi,seen=new Set;
 if(!Array.isArray(xi))flag("bestxi_missing",null);else{
  if(xi.length!==11)flag("bestxi_size",xi.length);
  for(const s of xi){const id=typeof s==="string"?s:s?.playerId||s?.id;if(seen.has(id))flag("bestxi_duplicate",id);seen.add(id);const p=ids.get(id);if(!p)flag("bestxi_unknown_id",id);else if(typeof s==="object"&&positions.has(s.position)&&s.position!==p.position)flag("bestxi_position_review",{id,slot:s.position,registered:p.position});}
 }
 for(const c of scope)if(!covered.has(c))flag("scope_club_without_candidates",c);
 if(Number.isInteger(j.meta?.candidateCount)&&j.meta.candidateCount!==players.length)flag("candidate_count_mismatch",{declared:j.meta.candidateCount,actual:players.length});
 return {path,season:j.meta?.season,status:j.meta?.status,candidates:players.length,rated,ranked,scopeClubs:scope.size,coveredClubs:covered.size,bestXi:Array.isArray(xi)?xi.length:null,issues};
}
for(const comp of comps)for(let year=comp==="uecl"?2021:1999;year<=2025;year++){
 const season=year+"-"+String((year+1)%100).padStart(2,"0"),path="data/"+comp+"-"+season+".json";
 try{results.push(audit(JSON.parse(readFileSync(path,"utf8")),path));}catch(e){results.push({path,error:String(e)});}
}
const summary=Object.fromEntries(comps.map(comp=>{
 const a=results.filter(x=>x.path.startsWith("data/"+comp+"-")),b=a.filter(x=>!x.error),flags={};
 for(const x of b)for(const [k,v] of Object.entries(x.issues))flags[k]=(flags[k]||0)+v.length;
 return [comp,{attempted:a.length,parsed:b.length,players:b.reduce((s,x)=>s+x.candidates,0),rated:b.reduce((s,x)=>s+x.rated,0),ranked:b.reduce((s,x)=>s+x.ranked,0),flags,failed:a.filter(x=>x.error)}];
}));
const multiId=[...allIdentities].filter(([,v])=>v.size>1).map(([key,v])=>({key,records:[...v.values()]}));
const dobConflict=[...allNames].filter(([,v])=>v.size>1).map(([name,v])=>({name,records:[...v.values()]}));
const idCollision=[...allIds].filter(([,v])=>v.size>1).map(([id,v])=>({id,records:[...v.values()]}));
const report={kind:"structural_only",scope:"194 club competition seasons, 1999-00–2025-26",notes:["No external historical or qualitative verification. Flags are review leads, not automatic corrections. Same name and DOB with different IDs is a reconciliation lead, often expected for season-scoped IDs. Same normalized name with different DOB may be homonyms. Position mismatches may be tactical exceptions. No player or lineup data mutated."],summary,results,identityReview:{multipleIds:multiId,dobConflicts:dobConflict,idCollisions:idCollision}};
const out=process.argv[2];if(out)writeFileSync(out,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({summary,identityReview:{multipleIds:multiId.length,dobConflicts:dobConflict.length,idCollisions:idCollision.length}},null,2));
if(results.some(x=>x.error))process.exitCode=1;
