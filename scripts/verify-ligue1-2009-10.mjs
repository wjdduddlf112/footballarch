#!/usr/bin/env node
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync(new URL('../data/ligue1-2009-10.json',import.meta.url)));
const p=data.players||[], positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"], tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"], clubs=["marseille","lyon","auxerre","lille","montpellier","psg"], issues=[];
function check(ok,msg){if(!ok)issues.push(msg)}
const norm=x=>String(x||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/gi,'').toLowerCase();
check(data.meta.leagueId==='ligue1'&&data.meta.season==='2009-10'&&data.meta.qualifyingSeason==='2010-11','season ID / Europe qualifying season');
check(data.meta.status==='draft'&&data.meta.standingsOnly===false&&data.meta.playerIntegration?.state==='draft_unapproved','DRAFT state lock');
check(data.meta.bestXiReview?.status==='proposed_unapproved','Best XI pending approval');
check(data.standings?.length===20&&data.meta.standingsVerified===true,'historical 20-club league table preserved');
check(data.qualifiers?.length===6&&data.qualifiers.every(q=>clubs.includes(q.club)&&q.status==='verified_actual_participant'),'six 2010-11 eligible actual UEFA first tier clubs');
check(new Set(data.qualifiers.map(x=>x.club)).size===6,'no repeat qualifying clubs');
check(p.length===106&&p.filter(x=>x.role==='starter').length===66,'roster count and 66 starters');
check(new Set(p.map(x=>x.id)).size===p.length,'unique player IDs');
check(new Set(p.map(x=>norm(x.nameOriginal))).size===p.length,'unique player identity among selected clubs');
check(p.every(x=>clubs.includes(x.club)&&positions.includes(x.position)&&tiers.includes(x.tier)&&x.review==='draft_unapproved'),'club positions allowed tiers and user approval');
check(p.every(x=>x.nameKo&&x.nameOriginal&&x.clubNameOriginal&&x.assessmentRationale?.length>100),'display fields and assessment prose');
check(p.every(x=>x.born===null||/^\d{4}-\d{2}-\d{2}$/.test(x.born)),'DOB string or null');
check(p.every(x=>x.leagueAppearances>0&&x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances&&x.leagueMinutes>0),'source-backed current-year apps/starts/minutes');
check(p.every(x=>x.leagueAssists===null),'unverified assists left null');
check(p.every(x=>x.position!=='GK'||x.leagueGoals===null),'no GK goals-conceded mistaken for negative goals');
check(p.every(x=>x.sources.some(u=>u.startsWith('https://www.bdfutbol.com/en/t/t2009-10'))),'2009-10 direct club roster cited');
check(p.every(x=>x.threeSeasonReview?.assessmentSeasons?.join(',')==='2007-08,2008-09,2009-10'),'3 season lookback exactly');
check(p.filter(x=>x.born===null).length===data.meta.historicalValidation.birthDatesMissing,'birthdate missing audited count');
check(p.filter(x=>x.birthDateVerification==='2009-10_independent_national_football_teams_profile_checked').length===data.meta.historicalValidation.independentBirthDateCount,'independent birthdate count');
for(const club of clubs){
 const arr=p.filter(x=>x.club===club),st=arr.filter(x=>x.role==='starter');
 check(st.length===11,club+' exactly 11 lineup');
 for(const pos of positions)check(arr.filter(x=>x.position===pos&&x.role==='backup').length<=1,club+' '+pos+' no >1 backup');
 const countPos=pos=>st.filter(x=>x.position===pos).length;
 check(countPos('GK')===1&&countPos('CB')===2&&countPos('LB')===1&&countPos('RB')===1,club+' 1 GK+4 back line');
 const formation=data.meta.clubTactics?.[club]?.formation;
 if(formation==='4-3-3')check(countPos('DM')+countPos('CM')===3&&countPos('LW')===1&&countPos('RW')===1&&countPos('ST')===1,club+' 4-3-3 shape');
 if(formation==='4-2-3-1')check(countPos('DM')+countPos('CM')===2&&countPos('CAM')===1&&countPos('LW')===1&&countPos('RW')===1&&countPos('ST')===1,club+' 4-2-3-1 shape');
 if(formation==='4-4-2')check(countPos('DM')+countPos('CM')===2&&countPos('LW')===1&&countPos('RW')===1&&countPos('ST')===2,club+' 4-4-2 shape');
}
for(const pos of positions){
 const arr=p.filter(x=>x.position===pos).sort((a,b)=>a.rank-b.rank);
 check(arr.length>0&&arr.every((x,i)=>x.rank===i+1),pos+' continuous 1..N ranking');
 check(arr.every((x,i)=>i===0||tiers.indexOf(arr[i-1].tier)<=tiers.indexOf(x.tier)),pos+' tier order coherent');
}
const xi=data.bestXi||[];
check(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,'11 unique best XI IDs');
check(xi.every(x=>p.some(v=>v.id===x.playerId&&v.position===x.position)),'best XI actual primary role');
const wc=p.filter(x=>['S','A+'].includes(x.tier)).length,top=p.filter(x=>['S','A+','A','A-'].includes(x.tier)).length;
check(data.meta.worldClassCount===wc&&data.meta.leagueTopClassCount===top,'world and League Top Class counts');
check(data.meta.provisionalTierCounts&&Object.entries(data.meta.provisionalTierCounts).every(([k,n])=>p.filter(x=>x.tier===k).length===n),'per-tier exact sums');
const result={status:issues.length?'FAIL':'PASS',scope:'STRUCTURAL tests only; 2007-08 and 2008-09 per-player sources NOT fully independently verified',clubs:clubs.length,players:p.length,starters:p.filter(x=>x.role==='starter').length,backups:p.filter(x=>x.role==='backup').length,worldClass:wc,leagueTopClass:top,birthDatesMissing:p.filter(x=>x.born===null).length,birthDatesIndependentlyVerified:p.filter(x=>x.birthDateVerification==='2009-10_independent_national_football_teams_profile_checked').length,errors:issues};
console.log(JSON.stringify(result,null,2));if(issues.length)process.exitCode=1;
