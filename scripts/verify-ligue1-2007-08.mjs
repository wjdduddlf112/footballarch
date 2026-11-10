#!/usr/bin/env node
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync(new URL('../data/ligue1-2007-08.json',import.meta.url)));
const ps=d.players||[],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"],e=[];
const ck=(yes,msg)=>{if(!yes)e.push(msg)},q=d.qualifiers.map(x=>x.club);
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
ck(d.meta.leagueId==='ligue1'&&d.meta.season==='2007-08'&&d.meta.qualifyingSeason==='2008-09','metadata');
ck(d.meta.status==='draft'&&!d.meta.standingsOnly&&d.meta.bestXiReview?.status==='proposed_unapproved','approval');
ck(q.length===7&&new Set(q).size===7&&q.every(x=>["lyon","bordeaux","marseille","nancy","saintetienne","rennes","psg"].includes(x)),'qualifiers');
ck(d.standings.length===20&&d.meta.standingsVerified===true,'standings preserved');
ck(ps.length===130&&ps.filter(p=>p.role==='starter').length===77,'total and starters');
ck(new Set(ps.map(p=>p.id)).size===ps.length,'duplicate IDs');
ck(new Set(ps.map(p=>norm(p.nameOriginal))).size===ps.length,'same player multiple clubs');
ck(ps.every(p=>q.includes(p.club)&&positions.includes(p.position)&&tiers.includes(p.tier)&&p.review==='draft_unapproved'),'position/club/tier/review');
ck(ps.every(p=>p.nameOriginal&&p.nameKo&&p.clubNameOriginal&&p.assessmentRationale),'display names and assessment');
ck(ps.every(p=>p.born===null||/^\d{4}-\d\d-\d\d$/.test(p.born)),'DOB format');
ck(ps.filter(p=>!p.born).length===d.meta.historicalValidation.birthDatesMissing,'missing DOB tally');
ck(ps.every(p=>p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0),'current league numeric figures');
ck(ps.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(',')==='2005-06,2006-07,2007-08'),'3-year period');
ck(ps.every(p=>p.sources.some(s=>s.startsWith('https://www.bdfutbol.com/en/t/t2007-08'))),'source');
for(const club of q){const a=ps.filter(p=>p.club===club);ck(a.filter(p=>p.role==='starter').length===11,club+' 11 XI');for(const pos of positions)ck(a.filter(p=>p.position===pos&&p.role==='backup').length<=1,club+' '+pos+' backup max');}
for(const pos of positions){const a=ps.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);ck(a.length>0&&a.every((p,i)=>p.rank===i+1),pos+' continuous 1..N');ck(a.every((p,i)=>i===0||tiers.indexOf(a[i-1].tier)<=tiers.indexOf(p.tier)),pos+' grade ranking');}
ck(d.bestXi.length===11&&new Set(d.bestXi.map(p=>p.playerId)).size===11,'XI unique 11');
ck(d.bestXi.every(x=>ps.some(p=>p.id===x.playerId&&p.position===x.position)),'XI position');
ck(d.meta.worldClassCount===ps.filter(p=>['S','A+'].includes(p.tier)).length,'world');
ck(d.meta.leagueTopClassCount===ps.filter(p=>['S','A+','A','A-'].includes(p.tier)).length,'leagueTop');
const result={status:e.length?'FAIL':'PASS',scope:'Schema/structure only. This does NOT verify all historical player data independently.',clubs:7,players:ps.length,starters:77,backups:ps.length-77,missingDOB:ps.filter(p=>!p.born).length,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors:e};console.log(JSON.stringify(result,null,2));if(e.length)process.exitCode=1;
