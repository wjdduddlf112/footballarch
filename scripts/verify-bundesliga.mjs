// Run from repository root: node scripts/verify-bundesliga.mjs
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
export function verifyBundesliga(archive,references,clubAliases){
 const errs=[],warnings=[],audit=[];
 const ref=Object.assign({},...references.map(x=>x.seasons)),idset=new Set(archive.clubs.map(x=>x.id));
 const aliasIds=Object.fromEntries(clubAliases.clubs.flatMap(c=>c.aliases.map(name=>[name,c.id])));
 if(Object.keys(archive.seasons).length!==27)errs.push("Expected 27 seasons");
 if(archive.clubs.length!==40||idset.size!==40)errs.push("Expected 40 historical clubs");
 let rows=0,entrantRecords=0;
 for(let year=1999;year<=2025;year++){
   const season=year+"-"+String((year+1)%100).padStart(2,"0"),t=archive.seasons[season],s=ref[season],next=ref[(year+1)+"-"+String((year+2)%100).padStart(2,"0")];
   if(!t||!s){errs.push(season+": missing season/reference");continue;}
   const clubs=new Set,tally={wins:0,losses:0,goalsFor:0,goalsAgainst:0};
   if(t.standings.length!==18||s.rows.length!==18)errs.push(season+": 18-team format mismatch");
   for(let i=0;i<t.standings.length;i++){
     const r=t.standings[i],refrow=s.rows[i];
     rows++;if(!refrow){errs.push(season+": missing source rank "+i);continue;}
     if(clubs.has(r.club)||!idset.has(r.club))errs.push(season+": duplicate/unknown "+r.club);
     clubs.add(r.club);
     const stats=["rank","played","wins","draws","losses","goalsFor","goalsAgainst","points"];
     if(stats.some(k=>r[k]!==refrow[k]))errs.push(season+": source mismatch rank "+(i+1));
     if(r.rank!==i+1||r.played!==34||r.wins+r.draws+r.losses!==34||r.gd!==r.goalsFor-r.goalsAgainst||r.points!==3*r.wins+r.draws-(r.pointsDeduction||0))errs.push(season+": arithmetic "+r.club);
     if(r.rank===16&&year>=2008){
       const expectedDown=year===2025?true:!next?.rows.some(x=>aliasIds[x.name]===r.club);
       const actualDown=r.outcome==="relegated";
       if(expectedDown!==actualDown)errs.push(season+": relegation playoff result incorrect "+r.club);
     }
     if(r.rank>=17&&r.outcome!=="relegated")errs.push(season+": bottom-two relegation "+r.club);
     if(year<=2007&&r.rank===16&&r.outcome!=="relegated")errs.push(season+": old automatic relegation "+r.club);
     if(year===2025&&r.rank===16&&r.club==="wolfsburg"&&r.outcome!=="relegated")errs.push(season+": Wolfsburg lost playoff");
     if((r.competition||null)!==(t.europeanParticipation?.[r.club]||null))errs.push(season+": EU club mapping "+r.club);
     for(const k of Object.keys(tally))tally[k]+=r[k];
   }
   if(clubs.size!==18||tally.wins!==tally.losses||tally.goalsFor!==tally.goalsAgainst)errs.push(season+": match totals");
   const e=Object.entries(t.europeanParticipation||{});
   if(e.some(([id,k])=>!clubs.has(id)||!["UCL","UEFA Cup","UEL","UECL","Intertoto Cup"].includes(k)))errs.push(season+": invalid European club/competition");
   if(year===2025&&e.length!==7)errs.push(season+": official seven 2026-27 German clubs mismatch");
   entrantRecords+=e.length;
   audit.push({season,clubs:18,rowsChecked:t.standings.length,europeanEntries:e.length,relegated:t.standings.filter(x=>x.outcome==="relegated").map(x=>x.club)});
 }
 if(rows!==486)errs.push("Expected 486 independent historical rows; got "+rows);
 warnings.push("RSSSF historical final tables validate exact standings; independent DFL source verification of each historical season still pending.");
 warnings.push("European entries through 2024-25 are a preliminary reconstruction, not proof of actual UEFA participation; 2025-26 clubs checked against official Bundesliga 2026-27 entry list.");
 warnings.push("Bundesliga relegation play-off placement is based on surviving next-year 1. Bundesliga membership, with 2025-26 Wolfsburg's defeat checked against official 2026 playoff record.");
 warnings.push("Historical logo variants and web asset loading require a separate visual pass.");
 return {passed:errs.length===0,seasons:audit.length,standingsRows:rows,EuropeanEntries:entrantRecords,missingCrests:archive.clubs.filter(c=>!c.crestUrl).map(c=>c.id),errors:errs,warnings,audit};
}
const arc=read("data/bundesliga-standings-verified-1999-2026.json");
const refs=["audit/bundesliga-rsssf-1999-2007.json","audit/bundesliga-rsssf-2008-2016.json","audit/bundesliga-rsssf-2017-2025.json"].map(read);
const aliases=read("data/bundesliga-clubs-1999-2026.json");
const result=verifyBundesliga(arc,refs,aliases);
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(!result.passed)process.exitCode=1;
