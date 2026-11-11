#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2022-23.json",import.meta.url)));
const players=d.players||[],clubs=["psg","lens","marseille","rennes","lille","toulouse"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],chk=(b,msg)=>{if(!b)errors.push(msg)};
chk(d.meta.leagueId==="ligue1"&&d.meta.season==="2022-23"&&d.meta.qualifyingSeason==="2023-24","season identity");
chk(d.meta.status==="draft"&&d.meta.standingsOnly===false&&d.meta.playerIntegration?.state==="draft_unapproved"&&d.meta.bestXiReview?.status==="proposed_unapproved","DRAFT lock");
chk(d.standings?.length===20&&d.meta.standingsVerified===true,"standings 20 retained");
chk(d.qualifiers?.length===6&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"six actual European entrants");
chk(players.length===111&&players.filter(p=>p.role==="starter").length===66,"111 candidates / 66 starters");
const norm=s=>String(s).normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase();
chk(new Set(players.map(p=>p.id)).size===111,"unique season ID");
chk(new Set(players.map(p=>norm(p.nameOriginal)+"#"+p.born)).size===111,"unique person / DOB (two Vitinhas are distinct)");
chk(players.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&/^\\d{4}-\\d{2}-\\d{2}$/.test(p.born||"")),"Korean/original/DOB");
chk(players.every(p=>clubs.includes(p.club)&&positions.includes(p.position)&&tiers.includes(p.tier)),"valid clubs/positions/grades");
chk(players.every(p=>p.leagueAppearances>=1&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0&&(p.leagueGoals===null||p.leagueGoals>=0)&&p.leagueAssists===null),"verified-formatted stats and no fictional assists");
chk(players.every(p=>p.review==="draft_unapproved"&&p.threeSeasonReview?.assessmentSeasons?.join(",")==="2020-21,2021-22,2022-23"),"every record 3season review lock");
for(const club of clubs){const p=players.filter(x=>x.club===club),xi=p.filter(x=>x.role==="starter");chk(xi.length===11,club+" 11 starters");
 const expectedCB=["psg","lens","marseille"].includes(club)?3:2;chk(xi.filter(x=>x.position==="CB").length===expectedCB,club+" CB formation");
 for(const pos of positions)chk(p.filter(x=>x.position===pos&&x.role==="backup").length<=1,club+" "+pos+" reserves");}
for(const pos of positions){const p=players.filter(x=>x.position===pos).sort((a,b)=>a.rank-b.rank);chk(p.length>0&&p.every((x,i)=>x.rank===i+1),pos+" contiguous ranks");chk(p.every((x,i)=>i===0||tiers.indexOf(p[i-1].tier)<=tiers.indexOf(x.tier)),pos+" rank-tier consistency");}
chk(d.bestXi?.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11&&d.bestXi.every(b=>players.some(p=>p.id===b.playerId&&p.position===b.position)),"11 best XI valid");
for(const t of tiers)chk(d.meta.provisionalTierCounts[t]===players.filter(p=>p.tier===t).length,"tier totals "+t);
chk(d.meta.worldClassCount===players.filter(p=>["S","A+"].includes(p.tier)).length,"world class total");
chk(d.meta.leagueTopClassCount===players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"top class total");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"Technical structure only. History, DOB double-check, past two years, full game-by-game positions independently incomplete.",clubs:6,players:players.length,starters:66,backups:players.length-66,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));
if(errors.length)process.exitCode=1;
