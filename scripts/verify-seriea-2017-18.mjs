// Structure-only audit, separate from third-party historical source/3-season qualitative audits.
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync('data/seriea-2017-18.json','utf8'));
const p=d.players||[],problems=[],ok=(cond,msg)=>{if(!cond)problems.push(msg)};
const clubs=['juventus','napoli','roma','inter','lazio','milan','atalanta'];
const position=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const tier={'S':'S','A+':'A+','A0':'A','A-':'A-','B+':'B+','B0':'B','B-':'B-','C+':'C+','C0':'C','C-':'C-','D':'D'};
const europa={juventus:'UCL',napoli:'UCL',roma:'UCL',inter:'UCL',lazio:'UEL',milan:'UEL',atalanta:'UEL'};
const count={juventus:18,napoli:18,roma:19,inter:17,lazio:17,milan:17,atalanta:17};
const XI={
 juventus:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1},
 napoli:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},
 roma:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},
 inter:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1},
 lazio:{GK:1,CB:3,LB:1,RB:1,DM:1,CM:2,CAM:1,ST:1},
 milan:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},
 atalanta:{GK:1,CB:3,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:1}
};
const validDate=s=>typeof s==='string'&&/^\d{4}-\d\d-\d\d$/.test(s)&&!Number.isNaN(Date.parse(s));
ok(d.meta?.leagueId==='seriea'&&d.meta?.season==='2017-18','Serie A season');
ok(d.meta?.qualifyingSeason==='2018-19'&&d.meta?.europeanQualificationVerified===true,'actual UEFA next season');
ok(d.meta?.status==='draft_unapproved'&&d.meta?.standingsOnly===false,'DRAFT not published final');
ok(d.standings?.length===20&&d.standings.every((x,i)=>x.rank===i+1&&x.played===38),'20 team table with 38 games');
ok(d.standings?.find(x=>x.club==='atalanta')?.competition==='UEL','Atalanta actual UEL qualification');
ok(d.standings?.find(x=>x.club==='fiorentina')?.competition===null,'Fiorentina eighth excluded');
ok(d.qualifiers?.length===7&&new Set(d.qualifiers.map(q=>q.club)).size===7,'seven actual UEFA entrants');
for(const q of d.qualifiers)ok(europa[q.club]===q.competition,'actual UEFA club '+q.club);
ok(p.length===123&&d.meta.candidateCount===123,'123 nominated players');
ok(new Set(p.map(x=>x.id)).size===123,'unique stable IDs');
ok(new Set(p.map(x=>x.nameOriginal+'|'+x.born)).size===123,'no duplicated person');
for(const x of p){
 ok(clubs.includes(x.club)&&position.includes(x.position),'club or position '+x.id);
 ok(Boolean(x.nameKo&&x.nameOriginal&&x.clubNameOriginal)&&validDate(x.born),'full identity '+x.id);
 ok(x.clubNameOriginal===d.players.find(y=>y.club===x.club)?.clubNameOriginal,'club name identity '+x.id);
 ok(x.role==='starter'||x.role==='backup','club XI role '+x.id);
 ok(tier[x.displayTier]===x.tier,'tier labels A0/B0/C0 mapping '+x.id);
 ok(x.review==='draft_unapproved'&&x.verificationStatus!=='fully_verified','must stay DRAFT '+x.id);
 ok(Number.isInteger(x.leagueAppearances)&&x.leagueAppearances>=1&&x.leagueAppearances<=38,'appearances '+x.id);
 ok(Number.isInteger(x.leagueStarts)&&x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances,'starts '+x.id);
 ok(Number.isInteger(x.leagueMinutes)&&x.leagueMinutes>=1&&x.leagueMinutes<=3420,'minutes '+x.id);
 ok(Number.isInteger(x.leagueGoals)&&x.leagueGoals>=0,'goals '+x.id);
 ok(x.leagueAssists===null,'unverified assists must remain null '+x.id);
 ok(x.threeSeasonReview?.assessmentSeasons?.join(',')==='2015-16,2016-17,2017-18','three season order '+x.id);
 for(const season of ['2015-16','2016-17','2017-18'])ok(x.threeSeasonReview?.records?.[season]!=null,'review slot '+x.id+'/'+season);
 ok(x.threeSeasonReview?.records?.['2017-18']?.appearances===x.leagueAppearances,'actual-year data mapped '+x.id);
 ok(Number.isInteger(x.rank)&&x.rank>=1,'position ranking '+x.id);
 ok(x.tierReason?.length>70,'rating rationale '+x.id);
}
for(const c of clubs){
 const a=p.filter(x=>x.club===c),starters=a.filter(x=>x.role==='starter');
 ok(a.length===count[c]&&d.meta.candidateCoverage?.counts?.[c]===count[c],'roster count '+c);
 ok(starters.length===11,'exact XI '+c);
 for(const z of position){
  ok(starters.filter(x=>x.position===z).length===(XI[c][z]||0),'formation match '+c+'/'+z);
  ok(a.filter(x=>x.position===z&&x.role==='backup').length<=1,'no second backup '+c+'/'+z);
 }
}
for(const pos of position){
 const group=p.filter(x=>x.position===pos).sort((a,b)=>a.rank-b.rank);
 ok(group.length>0,'position has candidate '+pos);
 ok(group.every((x,i)=>x.rank===i+1),'rank 1..N '+pos);
 ok(group.every((x,i)=>i===0||Object.keys(tier).indexOf(x.displayTier)>=Object.keys(tier).indexOf(group[i-1].displayTier)),'tier grade order '+pos);
}
for(const [t,n] of Object.entries(d.meta.tierDistribution))ok(n===p.filter(x=>x.displayTier===t).length,'tier count '+t);
ok(Object.values(d.meta.tierDistribution).reduce((a,b)=>a+b,0)===123,'total tier distribution');
const world=p.filter(x=>['S','A+'].includes(x.tier)),top=p.filter(x=>['S','A+','A','A-'].includes(x.tier));
ok(world.length===25&&top.length===56,'world league top class counts');
ok(d.meta.topTierIndividualReasonsWritten===56,'top 56 individual text records');
ok(top.every(x=>x.tierReason.length>250),'top individual evidence detail');
ok(d.meta.priorYearEvidence.fullIndependentThreeSeasonQualitative===0,'no false historical audit claim');
ok(d.meta.birthdayPending?.length===0,'birthdate completeness');
const xi=d.bestXi||[];
ok(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,'best XI unique 11');
for(const x of xi){const entry=p.find(y=>y.id===x.playerId);ok(!!entry&&entry.position===x.position&&x.status==='proposed_unapproved','XI position/status '+x.playerId)}
for(const [z,n] of Object.entries(XI.napoli))ok(xi.filter(x=>x.position===z).length===n,'Best XI 4-3-3 two CM '+z);
ok(p.some(x=>x.nameOriginal==='Alisson Becker'&&x.club==='roma'&&x.leagueAppearances===37),'Alisson returns as Roma GK');
ok(p.some(x=>x.nameOriginal==='Leonardo Bonucci'&&x.club==='milan')&&!p.some(x=>x.nameOriginal==='Leonardo Bonucci'&&x.club==='juventus'),'Bonucci current Milan not Juventus');
ok(p.some(x=>x.nameOriginal==='Franck Kessié'&&x.club==='milan')&&!p.some(x=>x.nameOriginal==='Franck Kessié'&&x.club==='atalanta'),'Kessie current Milan not Atalanta');
ok(p.some(x=>x.nameOriginal==='Ciro Immobile'&&x.leagueGoals===29)&&p.some(x=>x.nameOriginal==='Mauro Icardi'&&x.leagueGoals===29),'co-leading scorers 29');
if(problems.length){console.error('FAIL Serie A 2017-18 draft structural validation\n'+problems.join('\n'));process.exit(1)}
console.log('PASS Serie A 2017-18 DRAFT: 7 actual 2018-19 UEFA clubs, 123 nominees, 77 starting roles, 46 reserves, 10 ranked position groups, 25 World/56 League Top, 56 detailed individual player reasons, 4-3-3 Best XI. Independent 3-season historical review remains incomplete.');
