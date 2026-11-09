#!/usr/bin/env node
import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const d=JSON.parse(readFileSync(path.join(root,'data/ligue1-2002-03.json'),'utf8'));
const clubs=d.qualifiers.map(x=>x.club),ps=d.players||[];
const grades=['S','A+','A','A-','B+','B','B-','C+','C','C-','D'];
const positions=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const errors=[];
const assert=(condition,msg)=>{if(!condition)errors.push(msg);};
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
assert(d.meta?.leagueId==='ligue1'&&d.meta.season==='2002-03'&&d.meta.qualifyingSeason==='2003-04','season/league metadata wrong');
assert(d.meta?.status==='draft'&&d.meta?.bestXiReview?.status==='proposed_unapproved','approval gate failed');
assert(d.meta?.europeanQualificationVerified===true,'qualifiers are not verified');
assert(clubs.length===10&&new Set(clubs).size===10,'qualifier count/IDs');
assert(d.standings?.length===20,'historic table must be 20 clubs');
assert(ps.length===172,'expected 172 newly selected players');
assert(ps.filter(p=>p.role==='starter').length===110,'starter count should be 110');
assert(ps.filter(p=>p.role==='backup').length===62,'backup count should be 62');
assert(new Set(ps.map(p=>p.id)).size===ps.length,'duplicate player ID');
assert(new Set(ps.map(p=>norm(p.nameOriginal))).size===ps.length,'duplicate player across clubs');
assert(ps.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal),'missing display name/team');
assert(ps.every(p=>p.born===null||/^\d{4}-\d\d-\d\d$/.test(p.born)),'DOB format invalid (null explicitly permitted)');
assert(ps.filter(p=>p.born===null).length===d.meta.historicalValidation.birthDatesMissing,'DOB missing count mismatch');
assert(ps.every(p=>positions.includes(p.position)&&clubs.includes(p.club)),'invalid position/club');
assert(ps.every(p=>grades.includes(p.tier)&&p.review==='draft_unapproved'),'tier/approval gate');
assert(ps.every(p=>p.season==='2002-03'&&p.leagueAppearances>0&&p.leagueStarts>=0),'season or appearance invalid');
assert(ps.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(',')==='2000-01,2001-02,2002-03'),'incorrect three-season weighting period');
assert(ps.every(p=>p.sources?.length>0),'missing player season source');
for(const c of clubs){const arr=ps.filter(p=>p.club===c);
  assert(arr.filter(p=>p.role==='starter').length===11,c+' 11 starters violated');
  for(const pos of positions){assert(arr.filter(p=>p.position===pos&&p.role==='backup').length<=1,c+' '+pos+' >1 backup');}
}
for(const pos of positions){const arr=ps.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 assert(arr.every((p,i)=>p.rank===i+1),pos+' ranking gaps/duplicates');
 assert(arr.every((p,i)=>i===0||grades.indexOf(arr[i-1].tier)<=grades.indexOf(p.tier)),pos+' rank vs tier out of order');
}
const xi=d.bestXi||[];
assert(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,'Best XI size or uniqueness');
assert(xi.every(x=>ps.some(p=>p.id===x.playerId&&p.position===x.position)),'Best XI positional alignment');
const count=t=>ps.filter(p=>p.tier===t).length;
assert(d.meta.worldClassCount===count('S')+count('A+'),'World Class count');
assert(d.meta.leagueTopClassCount===['S','A+','A','A-'].reduce((s,t)=>s+count(t),0),'League Top count');
const report={pass:errors.length===0,season:'2002-03',qualifierClubs:clubs.length,candidates:ps.length,starters:110,backups:62,missingDOB:ps.filter(x=>!x.born).length,worldClass:d.meta.worldClassCount,leagueTopClass:d.meta.leagueTopClassCount,BestXI:xi.length,errors,historicalAccuracyNote:'Structure and rendering checks only. Independent 3-season career and tactical verification remains incomplete.'};
console.log(JSON.stringify(report,null,2));
if(errors.length)process.exitCode=1;
