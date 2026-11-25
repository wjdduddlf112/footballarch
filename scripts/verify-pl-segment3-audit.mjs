// Validate applied PL segment 3 review without modifying frozen research snapshots.
import assert from "node:assert/strict";
const fields=["leagueAppearances","leagueStarts","leagueGoals","leagueAssists"];
const value=(p,k)=>k.split(".").reduce((a,x)=>a?.[x],p)??null;
export function assertAuditedLeagueStats(p){
 for(const k of fields)assert(Number.isInteger(p[k])&&p[k]>=0,p.id+" invalid "+k);
 assert(p.leagueAppearances>0,p.id+" no league appearances");
 assert(p.leagueStarts<=p.leagueAppearances,p.id+" starts > appearances");
 if(p.starts!==undefined)assert.equal(p.starts,p.leagueStarts,p.id+" starts alias");
 assert.equal(p.currentSeasonStatsStatus,"external_review_segment3_current_league_stats_complete_2026_11_26",p.id+" review provenance");
 assert(p.sources?.length,p.id+" evidence missing");
 for(const c of p.externalAuditSegment3?.changes??[])assert.deepEqual(value(p,c.field),c.proposed,p.id+" audit delta "+c.field);
}
export function assertAuditedSnapshot(d,oldPlayers,players,club){
 const audit=d.meta.externalAuditSegment3;
 assert.equal(audit.status,"draft_unapproved");
 const removed=audit.removedPlayers.filter(x=>x.player.club===club).map(x=>x.player.id);
 const added=audit.addedPlayers.filter(x=>x.record.club===club);
 assert.equal(players.length,oldPlayers.length-removed.length+added.length,club+" snapshot count");
 for(const id of removed){assert(oldPlayers.some(p=>p.id===id),club+" removal missing from snapshot");assert(!players.some(p=>p.id===id),club+" removed still present");}
 for(const old of oldPlayers){
  if(removed.includes(old.id))continue;
  const p=players.find(x=>x.id===old.id);assert(p,club+" unexpected removal "+old.id);
  for(const k of ["club","nameOriginal","nameKo","born","role","tier","position","rank","leagueMinutes",...fields]){
   const delta=p.externalAuditSegment3?.changes?.find(c=>c.field===k);
   if(delta)assert.deepEqual(delta.old,value(old,k),p.id+" snapshot old "+k);
   assert.deepEqual(value(p,k),delta?delta.proposed:value(old,k),p.id+" snapshot field "+k);
  }
 }
 for(const x of added){
  const p=players.find(q=>q.id===x.record.id);assert(p,club+" added candidate missing "+x.record.id);
  assert(!oldPlayers.some(q=>q.id===p.id));
  for(const [k,v] of Object.entries(x.record))assert.deepEqual(p[k],v,p.id+" added field "+k);
  assert(p.previousSeasons&&p.assessmentRationale,p.id+" prior evidence");
 }
 for(const p of players.filter(x=>!oldPlayers.some(q=>q.id===x.id)))assert(added.some(x=>x.record.id===p.id),club+" undocumented new candidate "+p.id);
}
export function assertAuditedFormation(d){
 const f=d.meta.formationCoverage;
 assert(["official_label_mode_guaranteed","inferred_mode_guaranteed"].includes(f.status));
 assert.equal(d.meta.formation,f.formationMode);
 assert.equal(f.totalTeamLineups,760);
 assert.equal(f.rankedKnown.reduce((n,x)=>n+x[1],0),f.knownTeamLineups);
 assert.equal(f.rankedKnown[0][0],f.formationMode);
 assert(f.rankedKnown[0][1]>f.rankedKnown[1][1]+f.totalTeamLineups-f.knownTeamLineups,"mode not robust to missing lineups");
}
