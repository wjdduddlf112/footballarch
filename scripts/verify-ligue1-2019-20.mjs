#!/usr/bin/env node
import{readFileSync}from"node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2019-20.json",import.meta.url)));
const pp=d.players||[],clubs=["psg","marseille","rennes","lille","nice","reims"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],chk=(ok,msg)=>{if(!ok)errors.push(msg)};
chk(d.meta?.season==="2019-20"&&d.meta?.qualifyingSeason==="2020-21"&&d.meta?.status==="draft"&&d.meta?.standingsOnly===false,"season and DRAFT");
chk(d.meta?.playerIntegration?.state==="draft_unapproved"&&d.meta?.bestXiReview?.status==="proposed_unapproved","approval locks");
chk(d.standings?.length===20&&d.meta?.standingsVerified===true,"20 standings preserved");
chk(d.qualifiers?.length===6&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"six UEFA participants");
chk(pp.length===104&&pp.filter(p=>p.role==="starter").length===66,"104 players / 66 XI");
chk(new Set(pp.map(p=>p.id)).size===pp.length,"unique player ids");
chk(new Set(pp.map(p=>p.nameOriginal.normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase())).size===pp.length,"unique people");
chk(pp.every(p=>clubs.includes(p.club)&&positions.includes(p.position)&&(p.tier===null||tiers.includes(p.tier))),"allowed club positions tier");
chk(pp.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")),"identity fields");
chk(pp.every(p=>p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0),"credible appearance starts mins");
chk(pp.every(p=>p.leagueAssists===null&&(p.position!=="GK"||p.leagueGoals===null)),"no fabricated stats");
chk(pp.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(",")==="2017-18,2018-19,2019-20"),"weighted three-season windows");
chk(pp.every(p=>p.sources?.some(s=>s.includes("/t/t2019-20"))),"main season source");
chk(pp.every(p=>p.review==="draft_unapproved"),"individual DRAFT");
for(const club of clubs){const c=pp.filter(p=>p.club===club),xi=c.filter(p=>p.role==="starter");chk(xi.length===11,club+" 11 starters");chk(xi.filter(p=>p.position==="GK").length===1&&xi.filter(p=>p.position==="CB").length===2,club+" defensive starters");chk(xi.filter(p=>p.position==="LB").length===1&&xi.filter(p=>p.position==="RB").length===1,club+" fullbacks");for(const pos of positions)chk(c.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" "+pos+" backup cap");}
for(const pos of positions){const a=pp.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);chk(a.length>0&&a.every((p,i)=>p.rank===i+1),pos+" contiguous ranks");chk(a.every((p,i)=>i===0||tiers.indexOf(a[i-1].tier)<=tiers.indexOf(p.tier)),pos+" tier order");}
chk(d.bestXi?.length===11&&new Set(d.bestXi.map(p=>p.playerId)).size===11,"Best XI unique");
chk(d.bestXi?.every(b=>pp.some(p=>p.id===b.playerId&&p.position===b.position)),"Best XI positions");
for(const tier of tiers)chk(d.meta.provisionalTierCounts?.[tier]===pp.filter(p=>p.tier===tier).length,"tier count "+tier);
chk(d.meta.provisionalTierCounts?.unrated===0,"unrated 0");
chk(d.meta.worldClassCount===pp.filter(p=>["S","A+"].includes(p.tier)).length,"world class count");
chk(d.meta.leagueTopClassCount===pp.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"league top count");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"structural / browser only; independent three-season historical and position audit pending",clubs:6,players:pp.length,starters:66,backups:pp.length-66,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));
if(errors.length)process.exitCode=1;
