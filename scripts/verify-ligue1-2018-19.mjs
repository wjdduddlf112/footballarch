#!/usr/bin/env node
import{readFileSync}from"node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2018-19.json",import.meta.url)));
const pp=d.players||[],clubs=["psg","lille","lyon","saintetienne","rennes","strasbourg"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],chk=(ok,msg)=>{if(!ok)errors.push(msg)};
chk(d.meta?.season==="2018-19"&&d.meta?.status==="draft"&&d.meta?.standingsOnly===false,"season and DRAFT");
chk(d.meta?.playerIntegration?.state==="draft_unapproved"&&d.meta?.bestXiReview?.status==="proposed_unapproved","approval locks");
chk(d.standings?.length===20&&d.meta?.standingsVerified===true,"20 standings preserved");
chk(d.qualifiers?.length===6&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"six European entrants");
chk(pp.length===110&&pp.filter(p=>p.role==="starter").length===66,"110 players and 66 starters");
chk(new Set(pp.map(p=>p.id)).size===pp.length,"unique IDs");
chk(new Set(pp.map(p=>p.nameOriginal.normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase())).size===pp.length,"unique humans");
chk(pp.every(p=>clubs.includes(p.club)&&positions.includes(p.position)&&(p.tier===null||tiers.includes(p.tier))),"allowed positions clubs tiers");
chk(pp.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")),"names and dates populated");
chk(pp.every(p=>p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0),"real game counts");
chk(pp.every(p=>p.leagueAssists===null&& (p.position!=="GK"||p.leagueGoals===null)),"no invented stats");
chk(pp.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(",")==="2016-17,2017-18,2018-19"),"three-season windows");
chk(pp.every(p=>p.sources?.some(s=>s.includes("/t/t2018-19"))),"season source");
chk(pp.every(p=>p.review==="draft_unapproved"),"individual unapproved");
for(const club of clubs){const c=pp.filter(p=>p.club===club),xi=c.filter(p=>p.role==="starter");chk(xi.length===11,club+" starter 11");chk(xi.filter(p=>p.position==="GK").length===1,club+" 1 GK");chk(xi.filter(p=>p.position==="CB").length===(club==="strasbourg"?3:2),club+" CB 2/3");chk(xi.filter(p=>p.position==="LB").length===1&&xi.filter(p=>p.position==="RB").length===1,club+" fullbacks");for(const pos of positions)chk(c.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" "+pos+" backup cap");}
for(const pos of positions){const c=pp.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);chk(c.length>0&&c.every((p,i)=>p.rank===i+1),pos+" consecutive ranks");chk(c.every((p,i)=>!i||tiers.indexOf(c[i-1].tier)<=tiers.indexOf(p.tier)),pos+" tier sorted");}
chk(d.bestXi?.length===11&&new Set(d.bestXi.map(p=>p.playerId)).size===11,"best XI 11");chk(d.bestXi?.every(b=>pp.some(p=>p.id===b.playerId&&p.position===b.position)),"XI correct positions");
for(const t of tiers)chk(d.meta.provisionalTierCounts?.[t]===pp.filter(p=>p.tier===t).length,"tier "+t);
chk(d.meta.worldClassCount===pp.filter(p=>["S","A+"].includes(p.tier)).length,"world count");chk(d.meta.leagueTopClassCount===pp.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"top count");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"structure only; full historical independence pending",players:pp.length,starters:66,backups:pp.length-66,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));if(errors.length)process.exitCode=1;
