#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2024-25.json",import.meta.url))),a=d.players||[];
const clubs=["psg","marseille","monaco","nice","lille","lyon","strasbourg"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],test=(ok,label)=>{if(!ok)errors.push(label)};
test(d.meta.leagueId==="ligue1"&&d.meta.season==="2024-25"&&d.meta.qualifyingSeason==="2025-26","season identity");
test(d.meta.status==="draft"&&d.meta.standingsOnly===false&&d.meta.playerIntegration?.state==="draft_unapproved"&&d.meta.bestXiReview?.status==="proposed_unapproved"&&d.meta.historicalValidation?.userApproved===false,"draft lock");
test(d.standings.length===18&&d.meta.standingsVerified,"18 standings preserved");
test(d.qualifiers.length===7&&d.meta.europeanQualificationVerified&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"7 actual UEFA 2025-26 clubs");
test(a.length===128&&a.filter(x=>x.role==="starter").length===77&&a.filter(x=>x.role==="backup").length===51,"128 candidates, 77 XI, 51 backups");
const normal=s=>String(s).normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase();
test(new Set(a.map(x=>x.id)).size===a.length,"unique IDs");
test(new Set(a.map(x=>normal(x.nameOriginal)+"#"+x.born)).size===a.length,"distinct people");
test(a.every(x=>x.nameKo&&x.nameOriginal&&x.clubNameOriginal&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(x.born||"")),"names and DOB format");
test(a.every(x=>clubs.includes(x.club)&&positions.includes(x.position)&&tiers.includes(x.tier)),"club / position / tier");
test(a.every(x=>x.leagueAppearances>0&&x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances&&x.leagueMinutes>=0&&(x.leagueGoals===null||x.leagueGoals>=0)&&x.leagueAssists===null),"valid stats and unknown assists");
test(a.every(x=>x.review==="draft_unapproved"&&x.threeSeasonReview?.assessmentSeasons.join(",")==="2022-23,2023-24,2024-25"),"3-year DRAFT");
for(const c of clubs){const arr=a.filter(x=>x.club===c),xi=arr.filter(x=>x.role==="starter");test(xi.length===11,c+" XI 11");test(xi.filter(x=>x.position==="CB").length===(["marseille","nice"].includes(c)?3:2),c+" CB vs tactic");for(const p of positions)test(arr.filter(x=>x.position===p&&x.role==="backup").length<=1,c+" "+p+" backups <=1");}
for(const p of positions){const arr=a.filter(x=>x.position===p).sort((x,y)=>x.rank-y.rank);test(arr.length>0&&arr.every((x,i)=>x.rank===i+1),p+" rank contiguous");test(arr.every((x,i)=>i===0||tiers.indexOf(arr[i-1].tier)<=tiers.indexOf(x.tier)),p+" rank vs tier order");}
test(d.bestXi?.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11&&d.bestXi.every(x=>a.some(y=>y.id===x.playerId&&y.position===x.position)),"11 distinct Best XI primary positions");
for(const t of tiers)test(d.meta.provisionalTierCounts[t]===a.filter(x=>x.tier===t).length,"grade "+t);
test(d.meta.worldClassCount===a.filter(x=>["S","A+"].includes(x.tier)).length,"World Class count");
test(d.meta.leagueTopClassCount===a.filter(x=>["S","A+","A","A-"].includes(x.tier)).length,"League Top count");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"TECHNICAL structure only, NOT complete independent historical verification",clubs:7,players:a.length,starters:77,backups:51,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));if(errors.length)process.exitCode=1;
