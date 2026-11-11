#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2020-21.json",import.meta.url)));
const a=d.players||[],clubs=["lille","psg","monaco","lyon","marseille","rennes"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],chk=(yes,label)=>{if(!yes)errors.push(label)};
chk(d.meta?.leagueId==="ligue1"&&d.meta?.season==="2020-21"&&d.meta?.qualifyingSeason==="2021-22","season key");
chk(d.meta?.status==="draft"&&d.meta?.standingsOnly===false&&d.meta?.playerIntegration?.state==="draft_unapproved","DRAFT unapproved");
chk(d.meta?.bestXiReview?.status==="proposed_unapproved","XI unapproved");
chk(d.standings?.length===20&&d.meta?.standingsVerified===true,"20 original standings");
chk(d.qualifiers?.length===6&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"actual six UEFA clubs");
chk(a.length===113&&a.filter(p=>p.role==="starter").length===66,"113 people 66 starters");
chk(new Set(a.map(p=>p.id)).size===a.length,"unique IDs");
const norm=s=>s.normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase();
chk(new Set(a.map(p=>norm(p.nameOriginal))).size===a.length,"unique human");
chk(a.every(p=>clubs.includes(p.club)&&positions.includes(p.position)&&tiers.includes(p.tier)),"valid club position tier");
chk(a.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")),"names DOB");
chk(a.every(p=>p.leagueAppearances>=1&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>=0),"league stats");
chk(a.every(p=>p.leagueAssists===null&&(p.position!=="GK"||p.leagueGoals===null)),"unknown assists and GK goals null");
chk(a.every(p=>p.threeSeasonReview?.assessmentSeasons?.join(",")==="2018-19,2019-20,2020-21"),"correct weighting years");
chk(a.every(p=>p.review==="draft_unapproved"&&p.sources?.some(s=>s.includes("/t/t2020-21"))),"source draft");
for(const club of clubs){const team=a.filter(p=>p.club===club),xi=team.filter(p=>p.role==="starter");chk(xi.length===11,club+" exactly 11 starters");chk(xi.filter(p=>p.position==="GK").length===1,club+" one GK");chk(xi.filter(p=>p.position==="CB").length===2,club+" two CB");chk(xi.filter(p=>p.position==="LB").length===1&&xi.filter(p=>p.position==="RB").length===1,club+" side backs");for(const pos of positions)chk(team.filter(p=>p.position===pos&&p.role==="backup").length<=1,club+" "+pos+" reserve cap");}
for(const pos of positions){const rows=a.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);chk(rows.length>0&&rows.every((p,i)=>p.rank===i+1),pos+" contiguous ranks");chk(rows.every((p,i)=>!i||tiers.indexOf(rows[i-1].tier)<=tiers.indexOf(p.tier)),pos+" tier order");}
chk(d.bestXi?.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"11 unique XI");
chk(d.bestXi?.every(b=>a.some(p=>p.id===b.playerId&&p.position===b.position)),"XI matching primary positions");
for(const t of tiers)chk(d.meta.provisionalTierCounts?.[t]===a.filter(p=>p.tier===t).length,t+" grade count");
chk(d.meta.worldClassCount===a.filter(p=>["S","A+"].includes(p.tier)).length,"World Class count");
chk(d.meta.leagueTopClassCount===a.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"League Top count");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"STRUCTURAL only; match-level historical and previous-2-years independent audit incomplete",clubs:6,players:a.length,starters:66,backups:a.length-66,world:d.meta.worldClassCount,top:d.meta.leagueTopClassCount,errors},null,2));if(errors.length)process.exitCode=1;
