#!/usr/bin/env node
import {readFileSync} from "node:fs";
const x=JSON.parse(readFileSync(new URL("../data/ligue1-2010-11.json",import.meta.url)));
const eligible=["lille","marseille","lyon","psg","sochaux","rennes"];
const order=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const allowed=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const p=x.players||[];
const problems=[];
const check=(cond,msg)=>{if(!cond)problems.push(msg)};
check(x.meta.status==="draft"&&!x.meta.standingsOnly,"draft state");
check(x.meta.bestXiReview?.status==="proposed_unapproved","best XI not approved");
check(x.standings.length===20,"original standings 20");
check(x.qualifiers.length===6&&x.qualifiers.every(q=>eligible.includes(q.club)),"eligible qualifiers six");
check(p.length===117,"117 candidates");
check(new Set(p.map(v=>v.id)).size===p.length,"ID uniqueness");
check(new Set(p.map(v=>v.nameOriginal.normalize("NFKD").replace(/[^a-z0-9]/gi,"").toLowerCase())).size===p.length,"person uniqueness");
check(p.every(v=>eligible.includes(v.club)&&order.includes(v.position)&&(allowed.includes(v.tier)||v.tier===null)),"club position tier");
check(p.every(v=>v.review==="draft_unapproved"||v.review==="evidence_pending"),"not approved review");
check(p.every(v=>v.nameKo&&v.nameOriginal&&v.clubNameOriginal&&v.born&&(/^\\d{4}-\\d{2}-\\d{2}$/).test(v.born)),"identity fields");
check(p.every(v=>v.leagueAppearances>=0&&v.leagueStarts>=0&&v.leagueStarts<=v.leagueAppearances),"appearance stats");
check(p.every(v=>v.leagueAppearances>0||(v.leagueAppearances===0&&v.position==="GK"&&v.tier===null)),"league zero exception");
check(p.every(v=>v.threeSeasonReview.assessmentSeasons.join(",")==="2008-09,2009-10,2010-11"),"three season scope");
for(let c of eligible){let a=p.filter(v=>v.club===c);check(a.filter(v=>v.role==="starter").length===11,c+" starters");for(let q of order)check(a.filter(v=>v.position===q&&v.role==="backup").length<=1,c+"/"+q+" backups")}
for(let q of order){let a=p.filter(v=>v.position===q&&v.rank!==null).sort((x,y)=>x.rank-y.rank);check(a.every((v,i)=>v.rank===i+1),q+" consecutive ranks")}
check(x.bestXi.length===11&&new Set(x.bestXi.map(v=>v.playerId)).size===11,"best XI 11 distinct");
check(x.bestXi.every(v=>p.some(y=>y.id===v.playerId&&y.position===v.position)),"best XI position links");
check(x.meta.worldClassCount===p.filter(v=>v.tier==="S"||v.tier==="A+").length,"world class count");
check(x.meta.leagueTopClassCount===p.filter(v=>["S","A+","A","A-"].includes(v.tier)).length,"top class count");
if(problems.length){console.error(problems.join("\n"));process.exit(1)}
console.log("PASS Ligue 1 2010-11:",p.length,"players",x.meta.worldClassCount,"world",x.meta.leagueTopClassCount,"league top");
