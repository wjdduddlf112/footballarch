// Structural validation for 2002-03 PROPOSED player tiers; not a complete historical role audit.
// Run from repo root: node scripts/verify-pl-2002-03-draft.mjs
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2002-03.json","utf8"));
const problems=[];
const eligible={manutd:"UCL",arsenal:"UCL",newcastle:"UCL",chelsea:"UCL",liverpool:"UEFA Cup",blackburn:"UEFA Cup",southampton:"UEFA Cup",mancity:"UEFA Cup"};
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tier=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const XI={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:2};
if(d.meta?.status!=="draft"||d.meta?.season!=="2002-03"||d.meta?.leagueId!=="premierleague")problems.push("Incorrect season metadata");
if(d.standings?.length!==20||d.standings.some((s,i)=>s.rank!==i+1))problems.push("Standings missing or unsorted");
if(d.qualifiers?.length!==8||d.qualifiers.some(q=>eligible[q.club]!==q.competition)||new Set(d.qualifiers.map(q=>q.club)).size!==8)problems.push("2003-04 actual European competition entrants invalid");
if(d.standings.some(s=>(s.competition||null)!==(eligible[s.club]||null)))problems.push("Qualifiers not equal standings competition badges");
if(d.players?.length!==132)problems.push("Expected 132 independently reselected players");
const ids=new Set(),names=new Set(),clubpos={},clubstarter={},bypos={};
for(const p of d.players||[]){
 const key=p.club+"/"+p.nameOriginal;
 if(ids.has(p.id)||names.has(key))problems.push("Duplicate "+key);
 ids.add(p.id);names.add(key);
 if(!eligible[p.club]||!pos.includes(p.position))problems.push("Ineligible club/role "+key);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)problems.push("Missing Korean/original/team name "+key);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")||Number.isNaN(Date.parse(p.born)))problems.push("Missing/invalid date of birth "+key);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>38)problems.push("Missing PL-only starts "+key);
 if(!tier.includes(p.tier)||p.review!=="draft_unapproved"||!p.assessmentRationale)problems.push("Missing individual DRAFT grade/rationale "+key);
 if(!Number.isInteger(p.rank)||p.rank<1||!p.rankRationale)problems.push("Missing whole-league positional rank "+key);
 (bypos[p.position]??=[]).push(p);
 const ck=p.club+"/"+p.position;clubpos[ck]=(clubpos[ck]||0)+1;
 if(clubpos[ck]>(["CB","CM","ST"].includes(p.position)?3:2))problems.push("Position quota over "+ck);
 if(p.role==="starter")clubstarter[p.club]=(clubstarter[p.club]||0)+1;
}
if(Object.keys(eligible).some(c=>clubstarter[c]!==11))problems.push("Each eligible club needs 11 nominal tactical starters");
for(const [position,p] of Object.entries(bypos)){
 p.sort((a,b)=>a.rank-b.rank);
 if(p.some((x,i)=>x.rank!==i+1))problems.push("Position rank duplication/gap "+position);
 if(p.some((x,i)=>i>0&&tier.indexOf(x.tier)<tier.indexOf(p[i-1].tier)))problems.push("Positional rank/tier inversion "+position);
}
if(d.bestXi?.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11||d.bestXi.some(x=>!ids.has(x.playerId)))problems.push("Best XI is not 11 valid unique eligible players");
for(const [position,n] of Object.entries(XI))if(d.bestXi.filter(x=>x.position===position).length!==n)problems.push("Best XI 4-4-2 slot "+position);
if(d.meta.bestXiReview?.status!=="proposed_unapproved")problems.push("Best XI not tagged unapproved");
const wc=d.players.filter(p=>["S","A+"].includes(p.tier)).length,lt=d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
if(wc!==14||lt!==51)problems.push("Tier count mismatch");
const r={passed:problems.length===0,scope:"structural_only_historical_3season_and_majority_roles_pending",league:"Premier League",season:"2002-03",candidates:d.players.length,grades:d.players.filter(x=>x.tier!=null).length,ranks:d.players.filter(x=>x.rank!=null).length,leagueStarts:d.players.filter(x=>x.leagueStarts!=null).length,worldClass:wc,leagueTopClass:lt,bestXI:d.bestXi.length,liveBrowser:"not_checked_by_this_script",problems};
process.stdout.write(JSON.stringify(r,null,2)+"\n");
if(problems.length)process.exitCode=1;
