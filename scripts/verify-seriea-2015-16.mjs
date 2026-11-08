// Run: node scripts/verify-seriea-2015-16.mjs
// Checks machine structural consistency; this does NOT prove complete 3-year independent historical player performance audit.
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync('data/seriea-2015-16.json','utf8'));
const p=d.players||[],err=[],check=(condition,message)=>{if(!condition)err.push(message)};
const clubs=['juventus','napoli','roma','inter','fiorentina','sassuolo'],pos=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const tierMap={'S':'S','A+':'A+','A0':'A','A-':'A-','B+':'B+','B0':'B','B-':'B-','C+':'C+','C0':'C','C-':'C-','D':'D'};
const nextUEFA={juventus:'UCL',napoli:'UCL',roma:'UCL',inter:'UEL',fiorentina:'UEL',sassuolo:'UEL'};
const formationXI={juventus:{GK:1,CB:3,LB:1,RB:1,DM:1,CM:2,ST:2},napoli:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},roma:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},inter:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},fiorentina:{GK:1,CB:3,LB:1,RB:1,DM:1,CM:2,CAM:1,ST:1},sassuolo:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1}};
check(d.meta?.leagueId==='seriea'&&d.meta?.league==='Serie A'&&d.meta?.season==='2015-16','league-season');
check(d.meta?.qualifyingSeason==='2016-17','qualification season');
check(d.meta?.status==='draft_unapproved'&&d.meta?.standingsOnly===false,'DRAFT data state');
check(d.meta?.europeanQualificationVerified===true,'actual UEFA entry check');
check(d.standings?.length===20&&d.standings.every((x,i)=>x.rank===i+1&&x.played===38),'20-team standings');
check(d.standings?.find(x=>x.club==='milan')?.competition===null,'Milan exclusion');
check(d.standings?.find(x=>x.club==='sassuolo')?.competition==='UEL','Sassuolo UEFA berth');
check(d.qualifiers?.length===6&&new Set(d.qualifiers.map(q=>q.club)).size===6,'six UEFA clubs');
for(const q of d.qualifiers)check(nextUEFA[q.club]===q.competition,'UEFA exception '+q.club);
check(!d.qualifiers.some(q=>q.club==='milan'||q.club==='lazio'),'unexpected UEFA entrant');
check(p.length===116&&p.length===d.meta?.candidateCount,'116 nominations');
check(new Set(p.map(x=>x.id)).size===116,'unique stable IDs');
check(new Set(p.map(x=>x.nameOriginal+'|'+x.born)).size===116,'unique person each season');
const dobValid=s=>typeof s==='string'&&/^\d{4}-\d\d-\d\d$/.test(s)&&!Number.isNaN(Date.parse(s));
for(const x of p){
 check(!!x.nameOriginal&&!!x.nameKo&&!!x.clubNameOriginal&&dobValid(x.born),'identity '+x.id);
 check(clubs.includes(x.club)&&pos.includes(x.position),'role club '+x.id);
 check(x.review==='draft_unapproved'&&x.verificationStatus!=='verified','do not overstate verified '+x.id);
 check(['starter','backup'].includes(x.role),'player starter/backup '+x.id);
 check(tierMap[x.displayTier]===x.tier,'grade mapping '+x.id);
 for(const k of ['leagueAppearances','leagueStarts','leagueMinutes','leagueGoals'])check(Number.isInteger(x[k])&&x[k]>=0,'numeric '+k+'/'+x.id);
 check(x.leagueAppearances>=1&&x.leagueAppearances<=38&&x.leagueStarts<=x.leagueAppearances,'played and starts '+x.id);
 check(x.leagueMinutes>0&&x.leagueMinutes<=3420,'minutes '+x.id);
 check(x.leagueAssists===null,'unknown assists must be null '+x.id);
 check(x.threeSeasonReview?.assessmentSeasons?.join(',')==='2013-14,2014-15,2015-16','3-season window '+x.id);
 for(const s of ['2013-14','2014-15','2015-16'])check(x.threeSeasonReview?.records?.[s]!=null,'missing prior season slot '+x.id+'/'+s);
 check(x.threeSeasonReview?.records?.['2015-16']?.appearances===x.leagueAppearances,'current-year linked stats '+x.id);
 check(Number.isInteger(x.rank)&&x.rank>=1,'position rank '+x.id);
 check(x.tierReason?.length>40,'player rationale '+x.id);
}
for(const c of clubs){
 const group=p.filter(x=>x.club===c);
 check(group.length===d.meta?.candidateCoverage?.counts?.[c],'club nominated counts '+c);
 const starters=group.filter(x=>x.role==='starter');
 check(starters.length===11,'club 11 starters '+c);
 for(const z of pos){
  const want=formationXI[c][z]||0;
  check(starters.filter(x=>x.position===z).length===want,'formation starter distribution '+c+'/'+z);
  check(group.filter(x=>x.position===z&&x.role==='backup').length<=1,'backup one maximum '+c+'/'+z);
 }
}
for(const z of pos){
 const q=p.filter(x=>x.position===z).sort((a,b)=>a.rank-b.rank);
 check(q.every((x,i)=>x.rank===i+1),'rank sequential '+z);
 check(q.every((x,i)=>i===0||Object.keys(tierMap).indexOf(x.displayTier)>=Object.keys(tierMap).indexOf(q[i-1].displayTier)),'rank grade order '+z);
}
const counted=Object.fromEntries(Object.keys(tierMap).map(z=>[z,p.filter(x=>x.displayTier===z).length]));
for(const [z,n] of Object.entries(d.meta.tierDistribution||{}))check(n===counted[z],'tier count '+z);
check(Object.values(counted).reduce((a,b)=>a+b,0)===p.length,'tier sum');
const topN=p.filter(x=>['S','A+','A0','A-'].includes(x.displayTier)).length;
check(topN===47&&d.meta?.topTierIndividualReasonsWritten===47,'top class narratives');
check(d.meta?.priorYearEvidence?.fullIndependentThreeSeasonQualitative===0,'do not overclaim historical verification');
const xi=d.bestXi||[];
check(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,'XI 11 unique');
for(const slot of xi){
 const target=p.find(x=>x.id===slot.playerId);
 check(!!target&&target.position===slot.position&&slot.status==='proposed_unapproved','XI position '+slot.playerId);
}
for(const [z,n] of Object.entries(formationXI.napoli))check(xi.filter(x=>x.position===z).length===n,'XI 4-3-3 2CM/DM shape '+z);
if(err.length){console.error('FAIL: Serie A 2015-16 structural validation\n'+err.join('\n'));process.exit(1);}
console.log('PASS Serie A 2015-16: six 2016-17 actual UEFA clubs, 116 candidates and current-year numeric rows, 66 starter slots, backups <=1/role, tier distribution, 10 sequential rank groups, 47 top narratives and 11 unique 4-3-3 XI. Historical complete 3-year audit NOT claimed.');
