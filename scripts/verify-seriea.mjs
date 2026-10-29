// Run from the repository root: node scripts/verify-seriea.mjs
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
export function verifySerieA(archive,referenceFiles){
 const errors=[],notices=[];
 const refs=Object.assign({},...referenceFiles.map(d=>d.seasons));
 const ids=new Set(archive.clubs.map(c=>c.id));
 if(Object.keys(archive.seasons).length!==27)errors.push("Expected 27 complete seasons");
 if(archive.clubs.length!==50||ids.size!==50)errors.push("Expected 50 distinct club profiles");
 let rowsChecked=0,europeanEntries=0;
 const audits=[];
 for(let y=1999;y<=2025;y++){
  const season=y+"-"+String((y+1)%100).padStart(2,"0");
  const rec=archive.seasons[season],ref=refs[season];
  if(!rec||!ref){errors.push(season+": data or independent RSSSF reference missing");continue;}
  const rows=rec.standings,n=y<2004?18:20,m=y<2004?34:38;
  if(rows.length!==n||ref.rows.length!==n)errors.push(season+": team count mismatch");
  const seen=new Set,rank=new Set;
  let W=0,L=0,GF=0,GA=0;
  for(let i=0;i<rows.length;i++){
   const r=rows[i],s=ref.rows[i],p=3*r.wins+r.draws;
   if(!s) {errors.push(season+": reference row missing "+i);continue;}
   if(r.club===undefined||!ids.has(r.club)||seen.has(r.club))errors.push(season+": unknown/duplicate club "+r.club);
   seen.add(r.club);rank.add(r.rank);
   if(r.rank!==i+1||r.played!==m||r.played!==r.wins+r.draws+r.losses)errors.push(season+": bad rank/games at "+i);
   for(const prop of ["rank","played","wins","draws","losses","goalsFor","goalsAgainst","points"]){
     if(r[prop]!==s[prop])errors.push(season+": source discrepancy "+prop+" for "+r.club);
   }
   if(r.points!==p-(r.pointsDeduction||0)||r.gd!==r.goalsFor-r.goalsAgainst)errors.push(season+": arithmetic "+r.club);
   if(r.pointsDeduction&& ![ "2005-06","2006-07","2010-11","2011-12","2012-13","2014-15","2018-19","2022-23"].includes(season))errors.push(season+": undocumented deduction "+r.club);
   if((r.competition||null)!==(rec.europeanParticipation?.[r.club]||null))errors.push(season+": UEFA table/map parity "+r.club);
   W+=r.wins;L+=r.losses;GF+=r.goalsFor;GA+=r.goalsAgainst;rowsChecked++;
  }
  if(rank.size!==n||seen.size!==n||W!==L||GF!==GA)errors.push(season+": league-wide rank/match total mismatch");
  const demoted=rows.filter(r=>r.outcome==="relegated"||r.outcome==="relegated_administrative");
  if(demoted.length!==(y<=2003?4:3))errors.push(season+": relegation count incorrect");
  if(season==="2004-05"&&!demoted.some(x=>x.club==="bologna")||season==="2004-05"&&demoted.some(x=>x.club==="parma"))errors.push("2004-05 play-off relegation failed");
  if(season==="2005-06"&&!demoted.some(x=>x.club==="juventus"&&x.outcome==="relegated_administrative"))errors.push("2005-06 Calciopoli failed");
  const q=Object.entries(rec.europeanParticipation||{}),uniq=new Set(q.map(([id])=>id));
  if(uniq.size!==q.length||q.some(([id,type])=>!seen.has(id)||!["UCL","UEFA Cup","UEL","UECL","Intertoto Cup"].includes(type)))errors.push(season+": invalid UEFA participant map");
  if(season==="2025-26"&&(q.length!==7||rec.europeanParticipationStatus!=="verified_against_uefa_2026_27_club_lists"))errors.push("Current UEFA entrant lists not verified");
  europeanEntries+=q.length;
  audits.push({season,teams:n,matchWeeks:m,uefaParticipants:q.length,relegation:demoted.map(x=>x.club)});
 }
 if(rowsChecked!==530)errors.push("Expected 530 standings records, got "+rowsChecked);
 const pendingCreasts=archive.clubs.filter(c=>!c.crestUrl).map(c=>c.id);
 notices.push("Reference final tables are from RSSSF; 1999-00 Milan (61 points) and Roma (12 draws) correct RSSSF source typos against independent club/table records.");
 notices.push("Historical 1999-00 through 2024-25 UEFA participant lists remain curated and require season-by-season independent UEFA competition audit.");
 notices.push("Source-linked club crest URL coverage is "+(archive.clubs.length-pendingCreasts.length)+"/"+archive.clubs.length+"; browser image loads and historical badge variants were not independently tested.");
 notices.push("2004-05 title is unassigned after retroactive Calciopoli ruling; final source table preserves Juventus originally first, without marking it official champion.");
 return {passed:errors.length===0,seasons:audits.length,standingsRows:rowsChecked,europeanEntrantClubSeasons:europeanEntries,missingCrests:pendingCreasts,errors,notices,audits};
}
const archive=read("data/seriea-standings-verified-1999-2026.json");
const refs=["audit/seriea-rsssf-1999-2007.json","audit/seriea-rsssf-2008-2016.json","audit/seriea-rsssf-2017-2025.json"].map(read);
const report=verifySerieA(archive,refs);
process.stdout.write(JSON.stringify(report,null,2)+"\n");
if(!report.passed)process.exitCode=1;
