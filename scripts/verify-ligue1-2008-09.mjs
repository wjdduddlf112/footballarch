#!/usr/bin/env node
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync(new URL('../data/ligue1-2008-09.json',import.meta.url)));
const ps=d.players||[],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"],errors=[],qs=d.qualifiers.map(x=>x.club);
const ck=(ok,msg)=>{if(!ok)errors.push(msg)};
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
ck(d.meta.leagueId==='ligue1'&&d.meta.season==='2008-09'&&d.meta.qualifyingSeason==='2009-10','league season metadata');
ck(d.meta.status==='draft'&&d.meta.standingsOnly===false&&d.meta.bestXiReview?.status==='proposed_unapproved','draft approval lock');
ck(qs.length===5&&new Set(qs).size===5&&qs.every(x=>["bordeaux","marseille","lyon","toulouse","lille"].includes(x)),'5 next-year actual European club qualifiers');
ck(d.qualifiers.every(x=>x.status==='verified_actual_participant'),'verified entrant status');
ck(d.standings.length===20&&d.meta.standingsVerified===true,'20-club standings retained');
ck(ps.length===94&&ps.filter(p=>p.role==='starter').length===55,'count and 55 XI starters');
ck(new Set(ps.map(p=>p.id)).size===ps.length,'duplicate stable IDs');
ck(new Set(ps.map(p=>norm(p.nameOriginal))).size===ps.length,'player same identity across clubs');
ck(ps.every(p=>qs.includes(p.club)&&positions.includes(p.position)&&grades.includes(p.tier)&&p.review==='draft_unapproved'),'tier club position approval');
ck(ps.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&p.assessmentRationale),'names and reasoning');
ck(ps.every(p=>p.born===null||/^\d{4}-\d\d-\d\d$/.test(p.born)),'date values');
ck(ps.filter(p=>!p.born).length===d.meta.historicalValidation.birthDatesMissing,'missing DOB exact count');
ck(ps.every(p=>p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0),'confirmed positive league appearances and minutes');
ck(ps.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(',')==='2006-07,2007-08,2008-09'),'3 season range');
ck(ps.every(p=>p.sources?.some(x=>x.startsWith('https://www.bdfutbol.com/en/t/t2008-09'))),'2008-09 source path');
ck(ps.every(p=>p.leagueAssists===null),'unconfirmed assists left null');
for(const c of qs){const a=ps.filter(p=>p.club===c);ck(a.filter(p=>p.role==='starter').length===11,c+' 11 starters');for(const pos of positions)ck(a.filter(p=>p.position===pos&&p.role==='backup').length<=1,c+' '+pos+' reserve cap')}
for(const pos of positions){const a=ps.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);ck(a.length>0&&a.every((p,i)=>p.rank===i+1),pos+' 1..N ranking');ck(a.every((p,i)=>!i||grades.indexOf(a[i-1].tier)<=grades.indexOf(p.tier)),pos+' consistent tier rank')}
ck(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,'11 different Best XI players');
ck(d.bestXi.every(x=>ps.some(p=>p.id===x.playerId&&p.position===x.position)),'Best XI natural positions');
ck(d.meta.worldClassCount===ps.filter(p=>['S','A+'].includes(p.tier)).length,'World Class total');
ck(d.meta.leagueTopClassCount===ps.filter(p=>['S','A+','A','A-'].includes(p.tier)).length,'League Top Class total');
const result={status:errors.length?'FAIL':'PASS',scope:'automated data structure ONLY, NOT all historical facts independently verified',clubs:qs.length,players:ps.length,starters:55,backups:ps.length-55,missingDOB:ps.filter(p=>!p.born).length,worldClass:d.meta.worldClassCount,leagueTopClass:d.meta.leagueTopClassCount,errors};
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
