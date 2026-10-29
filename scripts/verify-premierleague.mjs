// Run from repository root with Node: node scripts/verify-premierleague.mjs
import {readFileSync} from "node:fs";
function read(path){return JSON.parse(readFileSync(path,"utf8"));}
export function verifyPremierLeague(getSeason,ref1,ref2,archive){
 const errors=[],notices=[],details=[];
 const official={...ref1.seasons,...ref2.seasons};
 const validEurope=new Set(["UCL","UEFA Cup","UEL","UECL","Intertoto Cup"]);
 let rowsChecked=0,euEntrants=0,clubIds=new Set(),crestGaps=new Set();
 for(let y=1999;y<=2024;y++){
  const season=y+"-"+String((y+1)%100).padStart(2,"0"),doc=getSeason(season),ref=official[season],hist=archive.seasons[season];
  if(!doc||!ref||!hist){errors.push(season+": missing input");continue;}
  const rows=doc.standings,ids=new Set(rows.map(r=>r.club)),ranks=new Set(rows.map(r=>r.rank));
  if(rows.length!==20||ids.size!==20||ranks.size!==20)errors.push(season+": invalid team/rank count");
  if(ref.rows.length!==20)errors.push(season+": invalid reference length");
  const cl=new Set(doc.clubs.map(c=>c.id));
  if(cl.size!==20||[...ids].some(id=>!cl.has(id)))errors.push(season+": club profile mismatch");
  const games=rows.reduce((s,r)=>s+r.played,0);
  const win=rows.reduce((s,r)=>s+r.wins,0),loss=rows.reduce((s,r)=>s+r.losses,0);
  const gf=rows.reduce((s,r)=>s+r.goalsFor,0),ga=rows.reduce((s,r)=>s+r.goalsAgainst,0);
  if(games!==760||win!==loss||gf!==ga)errors.push(season+": aggregate match arithmetic");
  for(let i=0;i<rows.length;i++){
   const r=rows[i],o=ref.rows[i];
   const cols=["rank","played","wins","draws","losses","goalsFor","goalsAgainst","points"];
   if(!o||cols.some(k=>o[k]!==r[k]))errors.push(season+": independent RSSSF discrepancy rank "+(i+1));
   if(r.rank!==i+1||r.played!==38||r.played!==r.wins+r.draws+r.losses||r.gd!==r.goalsFor-r.goalsAgainst)errors.push(season+": invalid row "+i);
   const deduction=r.pointsDeduction||0;
   if(r.points!==3*r.wins+r.draws-deduction)errors.push(season+": points formula "+r.club);
   if(deduction>0&&!["2009-10","2023-24"].includes(season))errors.push(season+": unexpected deduction "+r.club);
   clubIds.add(r.club);
   if(!doc.clubs.find(c=>c.id===r.club)?.crestUrl)crestGaps.add(r.club);
   rowsChecked++;
  }
  if(rows.filter(r=>r.outcome==="relegated").length!==3)errors.push(season+": relegation count");
  const q=doc.qualifiers||[],officialEntries=hist.entrants||[];
  if(q.length!==officialEntries.length||new Set(q.map(v=>v.club)).size!==q.length)errors.push(season+": entrant count/duplicates");
  const euMap=Object.fromEntries(q.map(v=>[v.club,v.competition]));
  if(q.some(v=>!ids.has(v.club)||!validEurope.has(v.competition)))errors.push(season+": invalid qualifying participant");
  for(const entry of officialEntries)if(euMap[entry.club]!==entry.competition)errors.push(season+": participant mismatch "+entry.club);
  for(const r of rows)if((r.competition||null)!==(euMap[r.club]||null))errors.push(season+": league table competition mismatch "+r.club);
  if(season>="2008-09"&&q.some(v=>v.competition==="UEFA Cup"||v.competition==="Intertoto Cup"))errors.push(season+": obsolete European competition label");
  if(season<="2007-08"&&q.some(v=>v.competition==="UEL"||v.competition==="UECL"))errors.push(season+": anachronistic UEFA label");
  euEntrants+=q.length;
  details.push({season,rows:rows.length,entrants:q.length,relegated:rows.filter(r=>r.outcome==="relegated").map(r=>r.club)});
 }
 if(rowsChecked!==520)errors.push("Expected 520 independently corroborated Premier League rows");
 notices.push("RSSSF is an independent historical table reference, not the Premier League's official site.");
 notices.push("European entrants have been curated against seasonal and competition records; some historical UEFA competition-by-competition checks are still pending.");
 notices.push("Crest URL gaps and browser rendering need separate verification; no URL alone is treated as proof that a logo loads.");
 return {passed:errors.length===0,seasons:details.length,tableRows:rowsChecked,distinctClubs:clubIds.size,europeanEntrantSeasonRecords:euEntrants,crestMissingIds:[...crestGaps].sort(),errors,notices,details};
}
function run(){
 const first=read("audit/premierleague-rsssf-1999-2011.json");
 const second=read("audit/premierleague-rsssf-2012-2024.json");
 const europe=read("data/premierleague-europe-qualification-1999-2025.json");
 const result=verifyPremierLeague(season=>read("data/premierleague-"+season+".json"),first,second,europe);
 process.stdout.write(JSON.stringify(result,null,2)+"\n");
 if(!result.passed)process.exitCode=1;
}
run();
