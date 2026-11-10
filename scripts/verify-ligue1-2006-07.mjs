#!/usr/bin/env node
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync(new URL('../data/ligue1-2006-07.json',import.meta.url)));
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"],errors=[],ps=d.players||[];
const ck=(x,m)=>{if(!x)errors.push(m)};
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const qs=d.qualifiers.map(q=>q.club);
ck(d.meta.season==='2006-07'&&d.meta.qualifyingSeason==='2007-08'&&d.meta.leagueId==='ligue1','metadata');
ck(d.meta.status==='draft'&&d.meta.standingsOnly===false&&d.meta.bestXiReview?.status==='proposed_unapproved','draft approval lock');
ck(qs.length===7&&new Set(qs).size===7,'7 qualifying clubs');
ck(d.standings.length===20&&d.meta.standingsVerified,'20 historic standings');
ck(ps.length===125&&ps.filter(p=>p.role==='starter').length===77,'count and 77 starters');
ck(new Set(ps.map(p=>p.id)).size===ps.length,'duplicate ids');
ck(new Set(ps.map(p=>norm(p.nameOriginal))).size===ps.length,'duplicated players across clubs');
ck(ps.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&(p.born===null||/^\d{4}-\d\d-\d\d$/.test(p.born))),'names and DOB');
ck(ps.every(p=>qs.includes(p.club)&&positions.includes(p.position)&&grades.includes(p.tier)&&p.review==='draft_unapproved'),'positions clubs grades');
ck(ps.every(p=>p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0),'2006-07 actual play');
ck(ps.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(',')==='2004-05,2005-06,2006-07'),'3 season periods');
ck(ps.every(p=>p.sources?.length===1&&p.sources[0].startsWith('https://www.bdfutbol.com/en/t/t2006-07')),'independent current roster source');
ck(ps.filter(p=>!p.born).length===d.meta.historicalValidation.birthDatesMissing,'missing birth count');
for(const c of qs){let a=ps.filter(p=>p.club===c);ck(a.filter(p=>p.role==='starter').length===11,c+' 11 starters');for(const pos of positions)ck(a.filter(p=>p.position===pos&&p.role==='backup').length<=1,c+' '+pos+' <=1 backup')}
for(const pos of positions){let a=ps.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);ck(a.length>0&&a.every((p,i)=>p.rank===i+1),pos+' rank 1..N');ck(a.every((p,i)=>!i||grades.indexOf(a[i-1].tier)<=grades.indexOf(p.tier)),pos+' grade order')}
ck(d.bestXi.length===11&&new Set(d.bestXi.map(p=>p.playerId)).size===11,'XI 11 unique');
ck(d.bestXi.every(x=>ps.some(p=>p.id===x.playerId&&p.position===x.position)),'XI exact position');
const cnt=t=>ps.filter(p=>p.tier===t).length;
ck(d.meta.worldClassCount===cnt('S')+cnt('A+'),'world class');
ck(d.meta.leagueTopClassCount===['S','A+','A','A-'].reduce((s,t)=>s+cnt(t),0),'league top class');
const result={status:errors.length?'FAIL':'PASS',clubs:7,players:ps.length,starters:77,backups:ps.length-77,missingDOB:ps.filter(p=>!p.born).length,worldClass:d.meta.worldClassCount,leagueTopClass:d.meta.leagueTopClassCount,errors,scope:'Structural checks only. NOT independent historical verification'};
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
