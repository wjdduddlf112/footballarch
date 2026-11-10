#!/usr/bin/env node
import {readFileSync} from 'node:fs';
import {dirname,resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const d=JSON.parse(readFileSync(join(root,'data/ligue1-2005-06.json'),'utf8'));
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const clubs=d.qualifiers.map(q=>q.club),ps=d.players||[],errors=[];
const check=(ok,name)=>{if(!ok)errors.push(name)};
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
check(d.meta.leagueId==='ligue1'&&d.meta.season==='2005-06'&&d.meta.qualifyingSeason==='2006-07','season');
check(d.meta.status==='draft'&&!d.meta.standingsOnly&&d.meta.bestXiReview?.status==='proposed_unapproved','unapproved draft lock');
check(d.meta.europeanQualificationVerified===true,'actual participation flag');
check(clubs.length===8&&new Set(clubs).size===8,'qualified clubs 8');
check(d.qualifiers.every(q=>q.status==='verified_actual_participant'),'qualifier status');
check(d.standings?.length===20,'20 club league table');
check(ps.length===142,'exact 142');
check(ps.filter(p=>p.role==='starter').length===88,'88 starters');
check(ps.filter(p=>p.role==='backup').length===54,'54 backups');
check(new Set(ps.map(p=>p.id)).size===ps.length,'duplicate ID');
check(new Set(ps.map(p=>norm(p.nameOriginal))).size===ps.length,'duplicate identity');
check(ps.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal),'Korean/original/team names');
check(ps.every(p=>p.born===null||/^\d{4}-\d\d-\d\d$/.test(p.born)),'date of birth format');
check(ps.filter(p=>!p.born).length===d.meta.historicalValidation.birthDatesMissing,'DOB missing count');
check(ps.every(p=>clubs.includes(p.club)&&positions.includes(p.position)),'unknown club or position');
check(ps.every(p=>p.clubNameOriginal===d.clubs.find(q=>q.id===p.club)?.name),'incorrect club original name');
check(ps.every(p=>grades.includes(p.tier)&&p.review==='draft_unapproved'),'tier or final user approval');
check(ps.every(p=>p.season==='2005-06'&&p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0&&p.leagueMinutes<=p.leagueAppearances*90+150),'current league appearances');
check(ps.every(p=>p.leagueGoals>=0&&p.leagueAssists!==0||p.leagueAssists===0&&p.assistsSource),'goals/assists provenance');
check(ps.every(p=>p.sources?.length>0),'sources');
check(ps.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(',')==='2003-04,2004-05,2005-06'),'three-season window');
for(const c of clubs){
 const list=ps.filter(p=>p.club===c);
 check(list.filter(p=>p.role==='starter').length===11,c+' starting XI');
 for(const pos of positions)check(list.filter(p=>p.position===pos&&p.role==='backup').length<=1,c+' '+pos+' backups');
}
for(const pos of positions){
 const list=ps.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 check(list.every((p,i)=>p.rank===i+1),pos+' continuous ranking');
 check(list.every((p,i)=>i===0||grades.indexOf(list[i-1].tier)<=grades.indexOf(p.tier)),pos+' tier rank inversion');
}
const xi=d.bestXi||[];
check(xi.length===11&&new Set(xi.map(p=>p.playerId)).size===11,'BestXI 11 unique players');
check(xi.every(x=>ps.some(p=>p.id===x.playerId&&p.position===x.position)),'Best XI positions match actual primary position');
const count=t=>ps.filter(p=>p.tier===t).length;
check(d.meta.worldClassCount===count('S')+count('A+'),'World Class total');
check(d.meta.leagueTopClassCount===['S','A+','A','A-'].reduce((sum,t)=>sum+count(t),0),'League Top Class total');
for(const t of grades)check(d.meta.provisionalTierCounts?.[t]===count(t),'tier '+t+' total');
const result={pass:errors.length===0,season:'2005-06',qualifiers:clubs.length,players:ps.length,starters:88,backups:54,missingDOB:ps.filter(p=>!p.born).length,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,bestXi:xi.length,errors,disclaimer:'Data structure, rank, approval and UI invariants only; historical completeness remains partial'};
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
