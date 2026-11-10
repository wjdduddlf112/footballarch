#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2014-15.json",import.meta.url)));
const players=d.players||[];
const clubs=["psg","lyon","monaco","marseille","saintetienne","bordeaux"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],check=(ok,condition)=>{if(!ok)errors.push(condition)};
const norm=s=>String(s||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/gi,"").toLowerCase();
check(d.meta.leagueId==="ligue1"&&d.meta.season==="2014-15"&&d.meta.qualifyingSeason==="2015-16","season identifiers");
check(d.meta.status==="draft"&&d.meta.standingsOnly===false&&d.meta.playerIntegration?.state==="draft_unapproved","DRAFT lock");
check(d.meta.bestXiReview?.status==="proposed_unapproved","Best XI unapproved");
check(d.standings?.length===20&&d.meta.standingsVerified===true,"20 preserved standings");
check(d.qualifiers?.length===6&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"actual 2015-16 UEFA entrants");
check(players.length===113&&players.filter(p=>p.role==="starter").length===66&&players.filter(p=>p.role==="backup").length===47,"113 distinct player / 66 XI / 47 backup");
check(new Set(players.map(p=>p.id)).size===players.length,"IDs unique");
check(new Set(players.map(p=>norm(p.nameOriginal))).size===players.length,"one person once (including Ocampos)");
check(players.every(p=>clubs.includes(p.club)&&positions.includes(p.position)&&(p.tier===null||tiers.includes(p.tier))),"valid positions / clubs / tiers");
check(players.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")),"names and DOB format");
check(players.every(p=>p.leagueAppearances>=0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0),"appearance / starts / minutes");
check(players.every(p=>p.leagueAssists===null),"unverified assists not invented");
check(players.every(p=>p.position!=="GK"||p.leagueGoals===null),"GK goals unknown");
check(players.every(p=>p.sources?.some(s=>s.includes("/t/t2014-15"))),"season sources");
check(players.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(",")==="2012-13,2013-14,2014-15"),"weighted 3-year windows");
check(players.every(p=>p.tier===null?p.review==="evidence_pending":p.review==="draft_unapproved"),"unapproved tier flags");
const ungraded=players.filter(p=>p.tier===null);
check(ungraded.length===3&&ungraded.every(p=>p.position==="GK"&&p.leagueAppearances===0),"three 0-league-app reserve GKs evidence pending");
for(const club of clubs){
 const a=players.filter(p=>p.club===club),xi=a.filter(p=>p.role==="starter");
 check(xi.length===11,club+" 11 starters");
 for(const pos of ["GK","LB","RB"])check(xi.filter(p=>p.position===pos).length===1,club+" "+pos+" 1 starter");
 check(xi.filter(p=>p.position==="CB").length===2,club+" 2 CB");
 for(const pos of positions)check(a.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" "+pos+" backup count");
}
for(const pos of positions){
 const a=players.filter(p=>p.position===pos&&p.tier!==null).sort((x,y)=>x.rank-y.rank);
 check(a.length>0&&a.every((p,i)=>p.rank===i+1),pos+" contiguous ranking");
 check(a.every((p,i)=>i===0||tiers.indexOf(a[i-1].tier)<=tiers.indexOf(p.tier)),pos+" graded rank tier ordering");
}
const eleven=d.bestXi||[];
check(eleven.length===11&&new Set(eleven.map(p=>p.playerId)).size===11,"exactly 11 unique Best XI");
check(eleven.every(b=>players.some(p=>p.id===b.playerId&&p.position===b.position)),"Best XI correct actual positions");
for(const t of tiers)check(d.meta.provisionalTierCounts?.[t]===players.filter(p=>p.tier===t).length,t+" count matches");
check(d.meta.provisionalTierCounts?.unrated===ungraded.length,"unrated count matches");
check(d.meta.worldClassCount===players.filter(p=>["S","A+"].includes(p.tier)).length,"World class count");
check(d.meta.leagueTopClassCount===players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"League Top class count");
const oc=players.find(p=>p.nameOriginal==="Lucas Ocampos");
check(oc?.club==="monaco"&&oc?.other201415ClubStint?.club==="marseille","2014-15 transfer retained separately without duplicate");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"Structural checks only; historical three-season and match-level positions remain partly unverified.",clubs:6,players:players.length,starters:66,backups:47,graded:players.length-ungraded.length,ungraded:ungraded.length,world:d.meta.worldClassCount,top:d.meta.leagueTopClassCount,errors},null,2));
if(errors.length)process.exitCode=1;
