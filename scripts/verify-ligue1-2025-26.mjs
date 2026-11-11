#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2025-26.json",import.meta.url))),players=d.players||[];
const clubs=["psg","lens","lille","lyon","marseille","rennes","monaco"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],check=(ok,msg)=>{if(!ok)errors.push(msg)};
check(d.meta.leagueId==="ligue1"&&d.meta.season==="2025-26"&&d.meta.qualifyingSeason==="2026-27","season identity");
check(d.meta.status==="draft"&&d.meta.standingsOnly===false&&d.meta.playerIntegration?.state==="draft_unapproved"&&d.meta.bestXiReview?.status==="proposed_unapproved"&&d.meta.historicalValidation?.userApproved===false,"UNAPPROVED lock");
check(d.standings?.length===18&&d.meta.standingsVerified===true,"preserve 18-team verified table");
check(d.qualifiers?.length===7&&d.meta.europeanQualificationVerified===true&&d.qualifiers.every(x=>clubs.includes(x.club)&&x.status==="verified_actual_participant"),"seven actual 2026-27 UEFA participants");
check(players.length===133&&players.filter(x=>x.role==="starter").length===77&&players.filter(x=>x.role==="backup").length===56,"133 players / 77 starters / 56 backups");
const normalize=s=>String(s).normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase();
check(new Set(players.map(x=>x.id)).size===players.length,"unique id");
check(new Set(players.map(x=>normalize(x.nameOriginal)+"#"+x.born)).size===players.length,"unique person");
check(players.every(x=>x.nameKo&&x.nameOriginal&&x.clubNameOriginal&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(x.born||"")),"Korean/original/name/DOB");
check(players.every(x=>clubs.includes(x.club)&&positions.includes(x.position)&&tiers.includes(x.tier)),"valid club/position/tier");
check(players.every(x=>Number.isInteger(x.leagueAppearances)&&x.leagueAppearances>=1&&x.leagueAppearances<=34&&x.leagueMinutes>=0&&x.leagueMinutes<=3060&&(x.leagueStarts===null||(Number.isInteger(x.leagueStarts)&&x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances))&&(x.leagueGoals===null||x.leagueGoals>=0)&&x.leagueAssists===null),"current year stats with unknown starts/goals null");
check(players.every(x=>x.review==="draft_unapproved"&&x.threeSeasonReview?.assessmentSeasons.join(",")==="2023-24,2024-25,2025-26"),"three-year recency review");
for(const c of clubs){const arr=players.filter(x=>x.club===c),XI=arr.filter(x=>x.role==="starter");check(XI.length===11,c+" XI 11");check(XI.filter(x=>x.position==="CB").length===(["lens","marseille","rennes"].includes(c)?3:2),c+" expected CB");for(const position of positions)check(arr.filter(x=>x.position===position&&x.role==="backup").length<=1,c+" "+position+" at most 1 backup");}
for(const position of positions){const arr=players.filter(x=>x.position===position).sort((a,b)=>a.rank-b.rank);check(arr.length>0&&arr.every((x,i)=>x.rank===i+1),position+" contiguous ranking");check(arr.every((x,i)=>!i||tiers.indexOf(arr[i-1].tier)<=tiers.indexOf(x.tier)),position+" grade ordering");}
check(d.bestXi?.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11&&d.bestXi.every(x=>players.some(p=>p.id===x.playerId&&p.position===x.position)),"11 position-consistent Best XI");
for(const t of tiers)check(d.meta.provisionalTierCounts[t]===players.filter(x=>x.tier===t).length,"tier count "+t);
check(d.meta.worldClassCount===players.filter(x=>["S","A+"].includes(x.tier)).length,"world class inclusive");
check(d.meta.leagueTopClassCount===players.filter(x=>["S","A+","A","A-"].includes(x.tier)).length,"league top inclusive");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"TECHNICAL schema only; complete 2023-24/2024-25 independent evidence, DOB second source, game-by-game main position NOT certified",clubs:clubs.length,players:players.length,starters:77,backups:56,unknownLeagueStarts:players.filter(x=>x.leagueStarts===null).length,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));if(errors.length)process.exitCode=1;
