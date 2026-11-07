#!/usr/bin/env node
/**
 * Bundesliga 2025-26 — DRAFT structural validation only.
 * Historical matchwise role, three-season individual quality, and live browser
 * verification are explicitly OUTSIDE the scope of this script.
 *
 * Run: node scripts/verify-bundesliga-2025-26.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const file=path.join(root,'data/bundesliga-2025-26.json');
const a=JSON.parse(fs.readFileSync(file,'utf8'));
const positions=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const tiers=['S','A+','A','A-','B+','B','B-','C+','C','C-','D'];
const approvedClubs=['bayern','dortmund','leipzig','stuttgart','hoffenheim','leverkusen','freiburg'];
const expectedCompetition={bayern:'UCL',dortmund:'UCL',leipzig:'UCL',stuttgart:'UCL',hoffenheim:'UEL',leverkusen:'UEL',freiburg:'UECL'};
const errors=[], warnings=[];
const check=(v,m)=>{if(!v)errors.push(m)};
check(a.meta?.season==='2025-26','Wrong target season');
check(a.meta?.qualifyingSeason==='2026-27','Wrong qualifying season');
check(a.meta?.status==='draft'&&a.meta?.dataStatus==='draft_unapproved','Expected unapproved DRAFT');
check(a.meta?.europeanQualificationVerified===true,'UEFA entrant check missing');
check(a.clubs?.length===7,'Exactly seven club records required');
check(a.qualifiers?.length===7,'Exactly seven qualifying teams required');
check(a.standings?.length===18&&new Set(a.standings.map(s=>s.club)).size===18,'Bundesliga table must have 18 unique clubs');
const clubs=new Set(a.qualifiers.map(x=>x.club));
check(approvedClubs.every(c=>clubs.has(c))&&clubs.size===7,'Qualifier scope mismatch');
for(const q of a.qualifiers)check(expectedCompetition[q.club]===q.competition,'Competition mismatch for '+q.club);
check(a.players?.length===a.meta?.candidateCount,'Candidate metadata count');
check(new Set(a.players.map(p=>p.id)).size===a.players.length,'Duplicate player ids');
for(const p of a.players){
 check(clubs.has(p.club)&&p.club===p.clubId,'Player outside eligible club: '+p.id);
 check(p.season==='2025-26','Wrong year: '+p.id);
 check(positions.includes(p.position),'Unknown position: '+p.id);
 check(['starter','backup'].includes(p.role),'Invalid starter/backup role: '+p.id);
 check(tiers.includes(p.tier),'Unknown tier: '+p.id);
 check(typeof p.nameKo==='string'&&p.nameKo.length>0&&typeof p.nameOriginal==='string'&&p.nameOriginal.length>0,'Missing names: '+p.id);
 check(/^\d{4}-\d{2}-\d{2}$/.test(p.born),'Invalid date of birth: '+p.id);
 check(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=34,'Bad league apps: '+p.id);
 check(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>=1&&p.leagueMinutes<=3060,'Bad league minutes: '+p.id);
 check(p.leagueStarts===null||(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances),'Bad league starts: '+p.id);
 check(p.club!=='stuttgart'||p.leagueStarts===null,'Stuttgart starts were not in sourced table and must remain null: '+p.id);
 check(p.threeSeasonReview?.assessmentSeasons?.join(',')==='2023-24,2024-25,2025-26','Wrong 3-year assessment: '+p.id);
 for(const y of ['2023-24','2024-25','2025-26'])check(p.threeSeasonReview?.records?.[y]!=null,'Missing year record: '+p.id+'/'+y);
 check(p.review==='draft_unapproved','Approved player before user approval: '+p.id);
 check(Array.isArray(p.sources)&&p.sources.length>=2,'Insufficient linked individual sources: '+p.id);
 check(Number.isInteger(p.rank)&&p.rank>=1,'Missing rank: '+p.id);
 if(p.position==='GK')check(p.goals2025===null,'GK conceded-goals mistranscribed into goals scored: '+p.id);
}
for(const c of clubs)for(const po of positions){
 check(a.players.filter(p=>p.club===c&&p.position===po&&p.role==='backup').length<=1,'Too many backups: '+c+'/'+po);
}
for(const po of positions){
 const ranks=a.players.filter(p=>p.position===po).map(p=>p.rank).sort((x,y)=>x-y);
 check(ranks.every((v,i)=>v===i+1),'Noncontiguous positional ranks: '+po);
}
const tCount=Object.fromEntries(tiers.map(t=>[t,a.players.filter(p=>p.tier===t).length]));
for(const [tier,count] of Object.entries(tCount))check(a.meta.tierSummary?.[tier]===count,'Tier histogram mismatch: '+tier);
check(a.meta.worldClassCount===tCount.S+tCount['A+'],'World Class count mismatch');
check(a.meta.leagueTopClassCount===tCount.S+tCount['A+']+tCount.A+tCount['A-'],'League Top count mismatch');
check(a.bestXi?.length===11&&new Set(a.bestXi.map(b=>b.playerId)).size===11,'Best XI must contain 11 unique players');
const xiSlots={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const [po,count] of Object.entries(xiSlots))check(a.bestXi.filter(x=>x.position===po).length===count,'4-2-3-1 XI slot mismatch: '+po);
for(const b of a.bestXi){
 const p=a.players.find(p=>p.id===b.playerId);
 check(p&&p.position===b.position,'XI player mismatch: '+b.playerId);
 check(b.status==='proposed_unapproved','XI approved without instruction: '+b.playerId);
}
check(a.meta.verificationSummary?.fullThreeSeasonIndependentVerified===0,'Historical independent verification cannot be assumed');
warnings.push('PASS here means JSON and metadata consistency only: no player-level independent 3-season historical verification has been executed.');
warnings.push('Previous seasons sourced from unapproved archived drafts are not independent historical confirmation; missing records remain NULL.');
warnings.push('Stuttgart starts remain NULL; next-season player positions, crest rendering and real Pages browser actions are not checked here.');
const result={passed:errors.length===0,clubs:clubs.size,candidates:a.players.length,tiers:tCount,worldClass:a.meta.worldClassCount,leagueTopClass:a.meta.leagueTopClassCount,bestXi:a.bestXi.length,missingStarterCounts:a.players.filter(p=>p.leagueStarts===null).length,errors,warnings};
process.stdout.write(JSON.stringify(result,null,2)+'\n');
if(errors.length)process.exitCode=1;
