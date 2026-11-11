#!/usr/bin/env node
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync(new URL("../data/ligue1-2021-22.json",import.meta.url)));
const players=d.players||[],clubs=["psg","marseille","monaco","rennes","nice","nantes"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],chk=(yes,msg)=>{if(!yes)errors.push(msg)};
chk(d.meta?.leagueId==="ligue1"&&d.meta?.season==="2021-22"&&d.meta?.qualifyingSeason==="2022-23","season identifiers");
chk(d.meta?.status==="draft"&&d.meta?.standingsOnly===false&&d.meta?.playerIntegration?.state==="draft_unapproved","DRAFT lock");
chk(d.meta?.bestXiReview?.status==="proposed_unapproved","Best XI unapproved");
chk(d.standings?.length===20&&d.meta?.standingsVerified===true,"20 original standings");
chk(d.qualifiers?.length===6&&d.qualifiers.every(q=>clubs.includes(q.club)&&q.status==="verified_actual_participant"),"six actual UEFA entrants incl Nantes");
chk(players.length===110&&players.filter(p=>p.role==="starter").length===66,"110 players 66 XI");
chk(new Set(players.map(p=>p.id)).size===players.length,"unique IDs");
const norm=s=>String(s).normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase();
chk(new Set(players.map(p=>norm(p.nameOriginal))).size===players.length,"unique persons");
chk(players.every(p=>p.nameKo&&p.nameOriginal&&p.clubNameOriginal&&/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")),"names DOB");
chk(players.every(p=>clubs.includes(p.club)&&positions.includes(p.position)&&tiers.includes(p.tier)),"clubs positions tiers");
chk(players.every(p=>p.leagueAppearances>=1&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&(p.leagueMinutes===null||p.leagueMinutes>=0)),"valid appearances starts minutes-or-null");
chk(players.every(p=>p.leagueAssists===null&&(p.position!=="GK"||p.leagueGoals===null)),"no fabricated assists/keeper goals");
chk(players.every(p=>p.review==="draft_unapproved"&&p.threeSeasonReview?.assessmentSeasons?.join(",")==="2019-20,2020-21,2021-22"),"3-year recent-weight DRAFT");
chk(players.every(p=>p.sources?.some(s=>s.includes("2021-22")||s.includes("2021-2022"))),"current source");
for(const c of clubs){const a=players.filter(p=>p.club===c),xi=a.filter(p=>p.role==="starter");chk(xi.length===11,c+" exactly 11 starters");for(const pos of ["GK","LB","RB"])chk(xi.filter(p=>p.position===pos).length===1,c+" "+pos+" starter");chk(xi.filter(p=>p.position==="CB").length===2,c+" two CB");for(const pos of positions)chk(a.filter(p=>p.position===pos&&p.role==="backup").length<=1,c+" "+pos+" one backup max");}
for(const pos of positions){const a=players.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);chk(a.length>0&&a.every((p,i)=>p.rank===i+1),pos+" ranks");chk(a.every((p,i)=>!i||tiers.indexOf(a[i-1].tier)<=tiers.indexOf(p.tier)),pos+" grade ordering");}
chk(d.bestXi?.length===11&&new Set(d.bestXi.map(b=>b.playerId)).size===11,"XI unique");
chk(d.bestXi?.every(b=>players.some(p=>p.id===b.playerId&&p.position===b.position)),"XI actual primary positions");
for(const t of tiers)chk(d.meta.provisionalTierCounts?.[t]===players.filter(p=>p.tier===t).length,"tier count "+t);
chk(d.meta.worldClassCount===players.filter(p=>["S","A+"].includes(p.tier)).length,"world count");
chk(d.meta.leagueTopClassCount===players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length,"league top");
chk(d.clubs?.find(c=>c.id==="nantes")?.name==="FC Nantes","historically correct 2021-22 Nantes name");
console.log(JSON.stringify({result:errors.length?"FAIL":"PASS",scope:"Technical structure, not comprehensive independent match-by-match or three-year historical certification",clubs:6,players:players.length,starters:66,backups:players.length-66,world:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors},null,2));if(errors.length)process.exitCode=1;
