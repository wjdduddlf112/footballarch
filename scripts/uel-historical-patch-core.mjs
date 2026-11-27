// Strict replay and structural verification of UEL historical audit patches.
const same=(a,b)=>{if(a===b)return true;if(!a||!b||typeof a!=="object"||typeof b!=="object"||Array.isArray(a)!==Array.isArray(b))return false;const ak=Object.keys(a),bk=Object.keys(b);return ak.length===bk.length&&ak.every(k=>Object.hasOwn(b,k)&&same(a[k],b[k]))};
function locate(d,e){
 switch(e.type){
 case "player":return d.players.filter(p=>p.id===e.id&&p.club===e.clubId);
 case "match":return d.matches.filter(m=>m.id===e.id);
 case "group":return d.groups.filter(g=>(g.code??g.id)===e.id);
 case "audit":return [d.audit];
 case "tie":{const [stage,a,b]=e.id.split("|");return d.knockout.filter(k=>k.stage===stage).flatMap(k=>k.ties).filter(t=>(t.home===a&&t.away===b)||(t.home===b&&t.away===a))}
 default:return [];
 }
}
function pointer(o,p){const parts=p.slice(1).split("/").map(x=>x.replace(/~1/g,"/").replace(/~0/g,"~"));const key=parts.pop();for(const k of parts)o=o?.[k];return [o,key]}
function matches(o,k,v){return !!o&&Object.hasOwn(o,k)===v.exists&&(!v.exists||same(o[k],v.value))}
function active(p){return !/^(?:not_eligible|ineligible)/.test(String(p.eligibilityStatus||""))}
function groupMatches(d,g){return g.matchIds?g.matchIds.map(id=>d.matches.find(m=>m.id===id)):d.matches.filter(m=>["group","group_stage"].includes(m.round)&&m.group===(g.code??g.id))}
function validateSeason(d){
 const s=d.meta.season,historic=s==="2008-09",groupsCount=historic?8:12,teamCount=historic?5:4,gmCount=historic?10:12,adv=historic?3:2,people=d.players.filter(active),xi=d.bestXi||[],activeIds=new Set(people.map(p=>p.id)),errors=[];
 const check=(ok,msg)=>{if(!ok)errors.push(msg)};
 check(d.evaluatedClubs.length===8&&new Set(d.evaluatedClubs).size===8,"eight evaluated clubs");
 const quarter=new Set(d.matches.filter(m=>["quarter_final","quarter_finals"].includes(m.round)).flatMap(m=>[m.home,m.away]));
 check(quarter.size===8&&d.evaluatedClubs.every(c=>quarter.has(c)),"evaluated clubs are quarterfinalists");
 check(xi.length===11&&new Set(xi.map(p=>p.playerId)).size===11&&xi.every(p=>activeIds.has(p.playerId)),"XI valid active IDs");
 check(new Set(d.players.map(p=>p.id)).size===d.players.length,"unique players");
 check(d.players.every(p=>p.starts==null||p.appearances==null||p.starts<=p.appearances),"starts <= appearances");
 check(d.players.every(p=>["goals","goalsConceded","assists","minutes","starts","appearances"].every(k=>p[k]==null||(typeof p[k]==="number"&&p[k]>=0))),"nonnegative stats");
 check(d.matches.length===(historic?221:205)&&new Set(d.matches.map(m=>m.id)).size===d.matches.length,"match count unique");
 check(d.groups.length===groupsCount,"group count");
 const r32=new Set(d.matches.filter(m=>m.round==="round_of_32").flatMap(m=>[m.home,m.away])),seen=new Set();
 for(const g of d.groups){
  const table=g.standings??g.table,gm=groupMatches(d,g);
  check(table.length===teamCount&&gm.length===gmCount&&gm.every(Boolean),"group size "+(g.id??g.code));
  if(gm.some(x=>!x))continue;
  for(const m of gm){check(!seen.has(m.id),"duplicate group fixture "+m.id);seen.add(m.id)}
  for(const row of table){const ms=gm.filter(m=>m.home===row.club||m.away===row.club);let w=0,dr=0,l=0,gf=0,ga=0;for(const m of ms){const h=m.home===row.club,a=h?m.homeGoals:m.awayGoals,b=h?m.awayGoals:m.homeGoals;gf+=a;ga+=b;if(a>b)w++;else if(a===b)dr++;else l++}
   check(ms.length===row.played&&w===row.wins&&dr===row.draws&&l===row.losses&&gf===row.goalsFor&&ga===row.goalsAgainst&&gf-ga===(row.gd??row.goalDifference)&&w*3+dr===row.points,"group table totals "+row.club);
   check((row.advanced??(row.status==="round_of_32"))===(row.rank<=adv)&&r32.has(row.club)===(row.rank<=adv),"group advancement "+row.club);
  }
 }
 check(seen.size===groupsCount*gmCount&&d.matches.filter(m=>["group","group_stage"].includes(m.round)).length===seen.size,"all group fixtures once");
 check(d.meta.status==="draft_unapproved","draft season status");
 return {errors,active:people.length,excluded:d.players.length-people.length,matches:d.matches.length,groups:d.groups.length,groupMatches:seen.size,xi:xi.length};
}
function applySeason(d,changes,held,allSources,base){
 const s=d.meta.season,fieldSources={},sources={},reasons={},confirmed=[],errors=[],groups=new Map();
 let applied=0,already=0;
 for(const c of changes){if(c.status!=="ready"||c.file!=="data/uel-"+s+".json"||c.season!==s)throw Error("invalid patch "+c.id);const k=c.groupId||c.id;if(!groups.has(k))groups.set(k,[]);groups.get(k).push(c)}
 for(const cs of groups.values()){
  const ops=[];let bad=false;
  for(const c of cs){const entities=locate(d,c.entity);if(entities.length!==1){errors.push([c.id,"entity count",entities.length,c.entity]);bad=true;continue}
   const [o,k]=pointer(entities[0],c.field);if(matches(o,k,c.after)){ops.push([c,o,k,true]);continue}
   if(!matches(o,k,c.before)){errors.push([c.id,"before mismatch",o?.[k],c.before]);bad=true;continue}
   ops.push([c,o,k,false]);
  }
  if(bad)continue;
  for(const [c,o,k,done] of ops){if(done)already++;else{if(c.after.exists)o[k]=c.after.value;else delete o[k];applied++}
   const ek=c.entity.type+":"+c.entity.id;(fieldSources[ek]??={})[c.field]=c.sources;(reasons[ek]??={})[c.field]=c.reason;
   for(const id of c.sources){if(!allSources[id])errors.push([c.id,"missing source",id]);else sources[id]=allSources[id]}
   confirmed.push(c.id)
  }
 }
 for(const h of held)for(const id of h.sources||[]){if(allSources[id])sources[id]=allSources[id];else errors.push(["missing held source",id])}
 d.audit.uelHistoricalPatch={baselineCommit:base,appliedAgainst:base,scope:"UEFA Cup/Europa League main competition; qualifying rounds and penalty shootout goals excluded",status:"draft_unapproved",recordsStatus:"verified_ready_fields",readyChanges:changes.length,applied,already,held,fieldSources,fieldReasons:reasons,sources,confirmedChangeIds:confirmed,activeCandidateCount:d.players.filter(active).length,excludedCandidateIds:d.players.filter(p=>!active(p)).map(p=>p.id)};
 const v=validateSeason(d);errors.push(...v.errors);
 return {season:s,applied,already,held:held.length,...v,errors};
}
export {applySeason,validateSeason,active,groupMatches};
