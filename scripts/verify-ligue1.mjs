// Run from repository root: node scripts/verify-ligue1.mjs
// Structural validation only: not independent RSSSF/UEFA audit or browser screenshot.
import {readFileSync} from "node:fs";
const errors=[], warnings=[], report=[];
let rows=0,entries=0,modernCrestLinks=0,verifiedEuropean=0;
for(let y=1999;y<=2025;y++){
  const season=y+"-"+String((y+1)%100).padStart(2,"0");
  const j=JSON.parse(readFileSync("data/ligue1-"+season+".json","utf8"));
  const t=j.standings||[],q=j.qualifiers||[],expectedCount=(y<=2001||y>=2023)?18:20;
  const idSet=new Set(t.map(r=>r.club)),clubs=new Set((j.clubs||[]).map(c=>c.id));
  const eMap=new Map(q.map(x=>[x.club,x.competition]));
  const tally={wins:0,losses:0,goalsFor:0,goalsAgainst:0};
  if(t.length!==expectedCount||idSet.size!==expectedCount||clubs.size!==expectedCount)errors.push(season+": club count/identity");
  if(q.length!==eMap.size)errors.push(season+": duplicate European entrants");
  for(let i=0;i<t.length;i++){
    const r=t[i],ded=r.pointsDeduction||0;
    if(r.rank!==i+1||!clubs.has(r.club))errors.push(season+": rank/identity "+r.club);
    if(r.played!==r.wins+r.draws+r.losses||r.gd!==r.goalsFor-r.goalsAgainst||r.points!==3*r.wins+r.draws-ded)errors.push(season+": arithmetic "+r.club);
    const normalExpected=y<=2001||y>=2023?34:38;
    if(y!==2019&&r.played!==normalExpected)errors.push(season+": match count "+r.club);
    if((r.competition||null)!==(eMap.get(r.club)||null))errors.push(season+": Europe map mismatch "+r.club);
    tally.wins+=r.wins;tally.losses+=r.losses;tally.goalsFor+=r.goalsFor;tally.goalsAgainst+=r.goalsAgainst;
  }
  if(tally.wins!==tally.losses||tally.goalsFor!==tally.goalsAgainst)errors.push(season+": season totals");
  if(q.some(x=>!idSet.has(x.club)||!["UCL","UEFA Cup","UEL","UECL","Intertoto Cup"].includes(x.competition)))errors.push(season+": invalid European entrants");
  if(y===2019&&(t[0]?.club!=="psg"||t[0].played!==27||t[4]?.club!=="nice"||t[5]?.club!=="reims"))errors.push(season+": COVID final rank");
  if(y===2012&&t.find(r=>r.club==="ajaccio")?.pointsDeduction!==2)errors.push(season+": Ajaccio -2");
  if(y===2013&&(t.find(r=>r.club==="nantes")?.rank!==13||t.find(r=>r.club==="bastia")?.rank!==10))errors.push(season+": Nantes/Bastia awarded match");
  if(y===2021&&(t.find(r=>r.club==="nice")?.pointsDeduction!==1||t.find(r=>r.club==="lyon")?.pointsDeduction!==1))errors.push(season+": Nice/Lyon deduction");
  if(y===2023&&(t[15]?.club!=="metz"||t[16]?.club!=="lorient"||t.find(r=>r.club==="montpellier")?.pointsDeduction!==1))errors.push(season+": Metz/Lorient head-to-head");
  if(y===2025&&(t[15]?.club!=="nice"||t[16]?.club!=="nantes"||t[17]?.club!=="metz"))errors.push(season+": playoff final ranking");
  const crests=(j.clubs||[]).filter(c=>c.crestUrl).length;rows+=t.length;entries+=q.length;modernCrestLinks+=crests;
  if(j.meta?.europeanQualificationVerified)verifiedEuropean++;
  report.push({season,rows:t.length,qualifierEntries:q.length,linkedModernCrests:crests,euVerifiedFlag:!!j.meta?.europeanQualificationVerified});
}
if(rows!==528||entries!==185)errors.push("Expected 528 rows / 185 European mappings");
warnings.push("Historical European participant evidence is not fully independently certified: some season flags explicitly mark review.");
warnings.push("Modern reference crest URLs require HTTP/browser loading and period-correct emblem audit; URL existence is not successful rendering.");
warnings.push("GitHub Pages browser screenshots, champion C and stripped-title cross-league behavior are separate checks.");
const result={passed:errors.length===0,seasons:report.length,standingsRows:rows,europeanEntries:entries,linkedModernCrestClubSeasons:modernCrestLinks,euVerifiedSeasonFlags:verifiedEuropean,errors,warnings,report};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(!result.passed)process.exitCode=1;
