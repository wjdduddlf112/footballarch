#!/usr/bin/env node
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const j=JSON.parse(readFileSync(path.join(dir,'data/ligue1-2000-01.json'),'utf8'));
const q=j.qualifiers.map(x=>x.club),ps=j.players||[];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[];
if(q.length!==10||new Set(q).size!==8)errors.push('expected 8 qualified clubs');
if(ps.length!==167)errors.push('expected 167 reselected candidates');
if(j.standings?.length!==18)errors.push('standings must have 18 teams');
if(new Set(ps.map(p=>p.id)).size!==ps.length)errors.push('duplicate IDs');
if(new Set(ps.map(p=>p.nameOriginal)).size!==ps.length)errors.push('duplicate player names');
if(ps.some(p=>!q.includes(p.club)))errors.push('non-qualified club');
for(const club of q){const a=ps.filter(p=>p.club===club);if(a.filter(p=>p.role==='starter').length!==11)errors.push(club+' XI not 11');
 for(const pos of positions)if(a.filter(p=>p.position===pos&&p.role==='backup').length>1)errors.push(club+' '+pos+' too many backups');}
for(const pos of positions){const a=ps.filter(p=>p.position===pos).map(p=>p.rank).sort((a,b)=>a-b);
 if(a.some((r,i)=>r!==i+1))errors.push(pos+' discontinuous ranks');}
if(ps.some(p=>!p.nameKo||!p.nameOriginal))errors.push('missing Korean or original player name');
if(ps.some(p=>p.born&&!/^\d{4}-\d{2}-\d{2}$/.test(p.born)))errors.push('birth date shape invalid');
if(ps.some(p=>!grades.includes(p.tier)))errors.push('invalid tier');
if(ps.some(p=>p.review!=='draft_unapproved'))errors.push('non-draft records');
if(j.bestXi?.length!==11||new Set(j.bestXi.map(x=>x.playerId)).size!==11||j.bestXi.some(x=>!ps.some(p=>p.id===x.playerId&&p.position===x.position)))errors.push('invalid XI refs');
if(j.meta?.status!=='draft'||j.meta?.bestXiReview?.status!=='proposed_unapproved')errors.push('approval gate');
console.log(JSON.stringify({pass:!errors.length,playerCount:ps.length,clubs:q.length,starters:ps.filter(p=>p.role==='starter').length,errors},null,2));
if(errors.length)process.exitCode=1;
