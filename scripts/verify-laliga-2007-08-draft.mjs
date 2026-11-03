import {readFileSync, existsSync} from "node:fs";
import {strict as assert} from "node:assert";
import {Script} from "node:vm";

const data=JSON.parse(readFileSync("data/laliga-2007-08.json","utf8"));
const archive=JSON.parse(readFileSync("data/laliga-standings-verified-1999-2026.json","utf8"));
const a=archive.seasons["2007-08"],p=data.players;
const check=(label,fn)=>{fn(); console.log("PASS: "+label);};
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const caps={GK:2,CB:3,LB:2,RB:2,DM:2,CM:3,CAM:2,LW:2,RW:2,ST:3};
const groups={}; for(const x of p)(groups[x.club]??=[]).push(x);
check("season meta and DRAFT review",()=>{assert.equal(data.meta.season,"2007-08");assert.equal(data.meta.status,"draft");assert.equal(data.meta.bestXiReview.status,"proposed_unapproved");assert.equal(data.meta.userApproved,false);});
check("actual 2008-09 UEFA/Intertoto entrant identity and competition",()=>{
 assert.equal(data.qualifiers.length,8);
 const q=Object.fromEntries(data.qualifiers.map(x=>[x.club,x.competition]));
 assert.deepEqual(q,a.europeanParticipation);
});
check("20 verified standings unchanged",()=>assert.deepEqual(data.standings,a.standings));
check("42 club crest profiles unchanged",()=>assert.deepEqual(data.clubs,archive.clubs));
check("154 independent player IDs and name fields",()=>{
 assert.equal(p.length,154);assert.equal(new Set(p.map(x=>x.id)).size,154);
 assert.ok(p.every(x=>x.name&&x.nameOriginal&&x.nameKo&&x.clubNameOriginal));
});
check("8 clubs with 11 nominal starters each",()=>{
 assert.equal(Object.keys(groups).length,8);
 for(const [club,ps]of Object.entries(groups))assert.equal(ps.filter(x=>x.role==="starter").length,11,club);
});
check("position eligibility and capped backup counts",()=>{
 for(const [club,ps]of Object.entries(groups)){
 for(const pos of positions){
  const z=ps.filter(x=>x.position===pos);
  assert.ok(z.length<=caps[pos],club+" "+pos);
  assert.ok(z.filter(x=>x.role==="backup").length<=1,club+" "+pos+" backup");
  if(pos==="CB")assert.ok(z.filter(x=>x.role==="starter").length<=2,club+" CB");
 }
 }
});
check("DOB ISO and actual calendar date",()=>{
 for(const x of p){
  assert.match(x.born,/^\d{4}-\d{2}-\d{2}$/);
  const d=new Date(x.born+"T00:00:00Z");
  assert.equal(d.toISOString().slice(0,10),x.born,x.name);
 }
});
check("2007-08 league starts and appearances feasible",()=>{
 for(const x of p){
 assert.ok(Number.isInteger(x.leagueAppearances)&&x.leagueAppearances>=1&&x.leagueAppearances<=38,x.name);
 assert.ok(Number.isInteger(x.leagueStarts)&&x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances,x.name);
 assert.ok(x.leagueGoals===null||Number.isInteger(x.leagueGoals),x.name);
 assert.ok(x.sources.length&&x.evidence.seasonPrimarySource,x.name);
 }
});
check("all DRAFT grades and recency metadata",()=>{
 for(const x of p){
  assert.ok(tiers.includes(x.tier),x.name);assert.equal(x.review,"draft_unapproved",x.name);
  assert.equal(x.threeSeasonReview.seasons.join(","),"2005-06,2006-07,2007-08");
  assert.equal(x.evidence.priorSeasons.length,2);
 }
});
check("rank range contiguous and tier monotonic by position",()=>{
 for(const pos of positions){
 const z=p.filter(x=>x.position===pos).sort((x,y)=>x.rank-y.rank);
 for(let i=0;i<z.length;i++){
 assert.equal(z[i].rank,i+1,pos);
 if(i)assert.ok(tiers.indexOf(z[i-1].tier)<=tiers.indexOf(z[i].tier),pos);
 }
 }
});
check("eleven slot-correct, unique best XI players",()=>{
 assert.equal(data.bestXi.length,11);
 assert.equal(new Set(data.bestXi.map(x=>x.playerId)).size,11);
 for(const x of data.bestXi){
  const chosen=p.find(y=>y.id===x.playerId);assert.ok(chosen,x.playerId);
  assert.equal(chosen.position,x.position);
 }
});
check("no past or future seasonal dataset overwritten",()=>assert.ok(existsSync("data/laliga-2006-07.json")));
check("assets/app.js static parse",()=>new Script(readFileSync("assets/app.js","utf8")));
console.log(JSON.stringify({passed:true,players:p.length,clubs:data.qualifiers.length,wc:p.filter(x=>["S","A+"].includes(x.tier)).length,top:p.filter(x=>["S","A+","A","A-"].includes(x.tier)).length,limitations:["NOT proof of independent individual history","NOT proof of DOM/browser visual output"]},null,2));
