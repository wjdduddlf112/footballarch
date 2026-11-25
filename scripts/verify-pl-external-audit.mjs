// Validate applied external-review facts without rewriting historical research snapshots.
import assert from "node:assert/strict";
const fields=["leagueAppearances","leagueStarts","leagueGoals","leagueAssists"];
const value=(p,k)=>k.split(".").reduce((a,x)=>a?.[x],p)??null;
export function assertAuditedLeagueStats(p){
 for(const k of fields)assert(Number.isInteger(p[k])&&p[k]>=0,p.id+" invalid "+k);
 assert(p.leagueAppearances>0,p.id+" no league appearances");
 assert(p.leagueStarts<=p.leagueAppearances,p.id+" starts > appearances");
 if(p.starts!==undefined)assert.equal(p.starts,p.leagueStarts,p.id+" starts alias");
 assert.equal(p.currentSeasonStatsStatus,"external_review_current_league_stats_complete_2026_11_26",p.id+" review provenance");
 assert(p.sources?.length,p.id+" evidence missing");
 for(const c of p.externalAuditSegment2?.changes??[])assert.deepEqual(value(p,c.field),c.proposed,p.id+" audit delta "+c.field);
}
export function assertAuditedSnapshot(d,oldPlayers,players,club){
 const audit=d.meta.externalAuditSegment2;
 assert.equal(audit.status,"draft_unapproved");
 const removed=audit.removedPlayers.filter(x=>x.player.club===club).map(x=>x.player.id);
 const added=(audit.addedPlayers??[]).filter(x=>players.some(p=>p.id===x.id));
 assert.equal(players.length,oldPlayers.length-removed.length+added.length,club+" snapshot count");
 for(const id of removed){assert(oldPlayers.some(p=>p.id===id),club+" removal missing from snapshot");assert(!players.some(p=>p.id===id),club+" removed still present");}
 for(const old of oldPlayers){
  if(removed.includes(old.id))continue;
  const p=players.find(x=>x.id===old.id);assert(p,club+" unexpected removal "+old.id);
  for(const k of ["club","nameOriginal","nameKo","born","role","tier","position","rank",...fields]){
   const delta=p.externalAuditSegment2?.changes?.find(c=>c.field===k);
   assert.deepEqual(value(p,k),delta?delta.proposed:value(old,k),p.id+" snapshot field "+k);
  }
 }
 for(const p of players.filter(x=>!oldPlayers.some(q=>q.id===x.id))){
  const a=added.find(x=>x.id===p.id);assert(a,club+" undocumented new candidate "+p.id);
  assert.equal(p.replacesPlayerId,a.replacesPlayerId);
  assert(removed.includes(a.replacesPlayerId),p.id+" replacement source ID");
  assert(p.previousSeasons&&p.assessmentRationale,p.id+" prior evidence");
 }
}
