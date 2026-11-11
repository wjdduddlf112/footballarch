#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2023-24.json",import.meta.url))),players=d.players||[];
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],clubs=["psg","monaco","brest","lille","nice","lyon","lens"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],chk=(test,msg)=>{if(!test)errors.push(msg)};
chk(d.meta.leagueId==="ligue1"&&d.meta.season==="2023-24"&&d.meta.qualifyingSeason==="2024-25","season");
chk(d.meta.status==="draft"&&d.meta.standingsOnly===false&&d.meta.playerIntegration?.state==="draft_unapproved"&&d.meta.bestXiReview?.status==="proposed_unapproved"&&d.meta.historicalValidation?.userApproved===false,"unapproved DRAFT state");
chk(d.standings?.length===18&&d.meta.standingsVerified===true,"18 original standings");
chk(d.qualifiers?.length===7&&d.meta.europeanQualificationVerified&&d.qualifiers.every(x=>clubs.includes(x.club)&&x.status==="verified_actual_participant"),"seven 2024-25 actual UEFA clubs including Lens playoff");
chk(players.length===126&&players.filter(p=>p.role==="starter").length===77&&players.filter(p=>p.role==="backup").length===49,"126 candidates, 77 starters, 49 reserves");
const norm=s=>String(s).normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase();
chk(new Set(players.map(p=>p.id)).size===126,"player unique IDs");
chk(new Set(players.map(p=>norm(p.nameOriginal)+"#"+p.born)).size===126,"unique identity/year");
chk(players.every(p=>p.nameOriginal&&p.nameKo&&p.clubNameOriginal&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(p.born||"")),"biographies and date format");
chk(players.every(p=>clubs.includes(p.club)&&pos.includes(p.position)&&tiers.includes(p.tier)),"club, position, tier allowed");
chk(players.every(p=>p.review==="draft_unapproved"&&p.threeSeasonReview?.assessmentSeasons?.join(",")==="2021-22,2022-23,2023-24"),"3-year recency review");
chk(players.every(p=>p.leagueAppearances>=1&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0&&(p.leagueGoals===null||p.leagueGoals>=0)&&p.leagueAssists===null),"current stats valid shape / unknown assists null");
for(const c of clubs){const a=players.filter(p=>p.club===c),xi=a.filter(p=>p.role==="starter");chk(xi.length===11,c+" exactly eleven");
 const cb=["monaco","lens"].includes(c)?3:2;chk(xi.filter(p=>p.position==="CB").length===cb,c+" CB tactic");
 for(const p of pos)chk(a.filter(x=>x.position===p&&x.role==="backup").length<=1,c+" "+p+" <=1 backup");
}
for(const p of pos){const a=players.filter(x=>x.position===p).sort((x,y)=>x.rank-y.rank);chk(a.length>0&&a.every((x,i)=>x.rank===i+1),p+" 1 to N ranks");chk(a.every((x,i)=>!i||tiers.indexOf(a[i-1].tier)<=tiers.indexOf(x.tier)),p+" tier order");}
chk(d.bestXi?.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11&&d.bestXi.every(x=>players.some(p=>p.id===x.playerId&&p.position===x.position)),"Best XI 11 with actual primary roles");
for(const t of tiers)chk(d.meta.provisionalTierCounts[t]===players.filter(p=>p.tier===t).length,"grade count "+t);
chk(d.meta.worldClassCount===players.filter(p=>["S","A+"].includes(p.tier)).length,"WC total");
chk(d.meta.leagueTopClassCount===players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"LeagueTop inclusive");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"Technical structure only; independent 3-year records, complete match-position audit, biographical 2-source not certified",clubs:7,players:players.length,starters:77,backups:49,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));
if(errors.length)process.exitCode=1;
