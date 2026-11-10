#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2013-14.json",import.meta.url)));
const p=d.players||[];
const clubs=["psg","monaco","lille","saintetienne","lyon","guingamp"];
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],check=(condition,label)=>{if(!condition)errors.push(label)};
const norm=s=>String(s||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/gi,"").toLowerCase();
check(d.meta.leagueId==="ligue1"&&d.meta.season==="2013-14"&&d.meta.qualifyingSeason==="2013-14","season identifiers");
check(d.meta.status==="draft"&&!d.meta.standingsOnly&&d.meta.playerIntegration?.state==="draft_unapproved","DRAFT lock");
check(d.meta.bestXiReview?.status==="proposed_unapproved","Best XI approval lock");
check(d.standings?.length===20&&d.meta.standingsVerified,"preserve historical standings");
check(d.qualifiers?.length===6&&new Set(d.qualifiers.map(x=>x.club)).size===6,"qualifier count");
check(d.qualifiers.every(x=>clubs.includes(x.club)&&x.status==="verified_actual_participant"),"six eligible clubs");
check(p.length===113&&p.filter(x=>x.role==="starter").length===66,"113 candidates 66 starters");
check(new Set(p.map(x=>x.id)).size===p.length,"unique player ids");
check(new Set(p.map(x=>norm(x.nameOriginal))).size===p.length,"no duplicate player across teams");
check(p.every(x=>clubs.includes(x.club)&&pos.includes(x.position)&&(tiers.includes(x.tier)||x.tier===null)),"valid club / position / tier");
check(p.every(x=>x.nameKo&&x.nameOriginal&&x.clubNameOriginal&&x.born&&/^\d{4}-\d{2}-\d{2}$/.test(x.born)),"names and ISO birthday");
check(p.every(x=>x.leagueAppearances>=0&&(x.leagueStarts===null||(x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances))&&x.leagueMinutes>=0),"appearance / starts / minutes");
check(p.every(x=>x.leagueAssists===null),"unverified assists not invented");
check(p.every(x=>x.position!=="GK"||x.leagueGoals===null),"goalkeeper scored goals null");
check(p.every(x=>x.sources?.some(s=>s.includes("/t/t2013-14"))),"direct 2013-14 roster source");
check(p.every(x=>x.threeSeasonReview?.assessmentSeasons?.join(",")==="2011-12,2012-13,2013-14"),"three season window");
check(p.every(x=>x.tier===null?x.review==="evidence_pending":x.review==="draft_unapproved"),"evaluation approval flags");
const ungraded=p.filter(x=>x.tier===null);
check(ungraded.length===2&&ungraded.every(x=>x.position==="GK"&&x.leagueAppearances===0),"two pending backup GK");
for(const c of clubs){
 const a=p.filter(x=>x.club===c),starters=a.filter(x=>x.role==="starter");
 const count=position=>starters.filter(x=>x.position===position).length;
 check(starters.length===11,c+" exactly 11 starters");
 check(count("GK")===1&&count("LB")===1&&count("RB")===1,c+" GK and sidebacks");
 check(count("CB")===2,c+" centre backs");
 for(const position of pos)check(a.filter(x=>x.position===position&&x.role==="backup").length<=1,c+" "+position+" backups");
}
for(const position of pos){
 const a=p.filter(x=>x.position===position&&x.tier!==null).sort((x,y)=>x.rank-y.rank);
 check(a.length>0&&a.every((x,i)=>x.rank===i+1),position+" consecutive positional ranks");
 check(a.every((x,i)=>i===0||tiers.indexOf(a[i-1].tier)<=tiers.indexOf(x.tier)),position+" tier order");
}
const xi=d.bestXi||[];
check(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,"11 unique Best XI");
check(xi.every(x=>p.some(y=>x.playerId===y.id&&x.position===y.position)),"Best XI true primary position");
for(const tier of tiers)check(d.meta.provisionalTierCounts[tier]===p.filter(x=>x.tier===tier).length,tier+" count");
check(d.meta.provisionalTierCounts.unrated===ungraded.length,"unrated count");
const world=p.filter(x=>["S","A+"].includes(x.tier)).length;
const top=p.filter(x=>["S","A+","A","A-"].includes(x.tier)).length;
check(d.meta.worldClassCount===world&&d.meta.leagueTopClassCount===top,"Top Class counts");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"Structural checks only. Independent three-season individual audit is incomplete.",clubs:clubs.length,players:p.length,starters:66,backups:p.length-66,graded:p.length-ungraded.length,ungraded:ungraded.length,world,top,errors},null,2));
if(errors.length)process.exitCode=1;
