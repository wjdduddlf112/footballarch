// Structural integrity only. Not proof of independent 3-season performance or fixture-modal positions.
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync('data/seriea-2016-17.json','utf8'));
const players=d.players||[],err=[],ok=(v,m)=>{if(!v)err.push(m)};
const clubs=['juventus','roma','napoli','atalanta','lazio','milan'];
const ps=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const tier={'S':'S','A+':'A+','A0':'A','A-':'A-','B+':'B+','B0':'B','B-':'B-','C+':'C+','C0':'C','C-':'C-','D':'D'};
const nextUEFA={juventus:'UCL',roma:'UCL',napoli:'UCL',atalanta:'UEL',lazio:'UEL',milan:'UEL'};
const expectedCount={juventus:17,roma:15,napoli:18,atalanta:19,lazio:19,milan:18};
const expectedFormation={
 juventus:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1},
 roma:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1},
 napoli:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},
 atalanta:{GK:1,CB:3,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,ST:1},
 lazio:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1},
 milan:{GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,LW:1,RW:1,ST:1}
};
const validDate=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x));
ok(d.meta?.leagueId==='seriea'&&d.meta?.season==='2016-17','season');
ok(d.meta?.qualifyingSeason==='2017-18'&&d.meta?.status==='draft_unapproved'&&d.meta?.standingsOnly===false,'DRAFT and UEFA next season');
ok(d.meta?.europeanQualificationVerified===true,'UEFA status');
ok(d.standings?.length===20&&d.standings.every((x,i)=>x.rank===i+1&&x.played===38),'league table');
ok(d.standings?.find(x=>x.club==='inter')?.competition===null,'Inter 7th not UEFA');
ok(d.standings?.find(x=>x.club==='milan')?.competition==='UEL','Milan 6th qualified');
ok(d.qualifiers?.length===6&&new Set(d.qualifiers.map(x=>x.club)).size===6,'qualifiers');
for(const q of d.qualifiers)ok(nextUEFA[q.club]===q.competition,'qualifier '+q.club);
ok(players.length===106&&d.meta?.candidateCount===106,'player count');
ok(new Set(players.map(x=>x.id)).size===players.length,'duplicate ID');
ok(new Set(players.map(x=>x.nameOriginal+'|'+x.born)).size===players.length,'same player double nomination');
for(const p of players){
 ok(clubs.includes(p.club)&&ps.includes(p.position),'invalid club/position '+p.id);
 ok(Boolean(p.nameOriginal&&p.nameKo&&p.clubNameOriginal)&&validDate(p.born),'missing name/date '+p.id);
 ok(p.role==='starter'||p.role==='backup','role '+p.id);
 ok(tier[p.displayTier]===p.tier,'tier mapping '+p.id);
 ok(p.review==='draft_unapproved'&&p.verificationStatus!=='verified','no approval claim '+p.id);
 ok(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=38,'app '+p.id);
 ok(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,'starts '+p.id);
 ok(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>=1&&p.leagueMinutes<=3420,'minutes '+p.id);
 ok(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0,'goals '+p.id);
 ok(p.leagueAssists===null,'unverified assists '+p.id);
 ok(p.threeSeasonReview?.assessmentSeasons?.join(',')==='2014-15,2015-16,2016-17','three seasons '+p.id);
 for(const s of ['2014-15','2015-16','2016-17'])ok(p.threeSeasonReview?.records?.[s]!=null,'missing prior slot '+p.id+'/'+s);
 ok(p.threeSeasonReview?.records?.['2016-17']?.appearances===p.leagueAppearances,'season data vs record '+p.id);
 ok(Number.isInteger(p.rank)&&p.rank>=1,'position rank '+p.id);
 ok(p.tierReason?.length>70,'individual audit note '+p.id);
}
for(const c of clubs){
 const group=players.filter(x=>x.club===c),starter=group.filter(x=>x.role==='starter');
 ok(group.length===expectedCount[c]&&group.length===d.meta.candidateCoverage.counts[c],'club size '+c);
 ok(starter.length===11,'11 XI '+c);
 for(const z of ps){
  ok(starter.filter(x=>x.position===z).length===(expectedFormation[c][z]||0),'tactical XI '+c+'/'+z);
  ok(group.filter(x=>x.position===z&&x.role==='backup').length<=1,'one backup max '+c+'/'+z);
 }
}
for(const z of ps){
 const s=players.filter(x=>x.position===z).sort((a,b)=>a.rank-b.rank);
 ok(s.every((x,i)=>x.rank===i+1),'continuous rank '+z);
 ok(s.every((x,i)=>i===0||Object.keys(tier).indexOf(x.displayTier)>=Object.keys(tier).indexOf(s[i-1].displayTier)),'tier-order vs rank '+z);
}
const dist=Object.fromEntries(Object.keys(tier).map(x=>[x,players.filter(p=>p.displayTier===x).length]));
for(const [x,count] of Object.entries(d.meta.tierDistribution||{}))ok(dist[x]===count,'tier count '+x);
const top=players.filter(x=>['S','A+','A0','A-'].includes(x.displayTier));
ok(top.length===50&&d.meta.topTierIndividualReasonsWritten===50,'top 50 reasons');
ok(d.meta.priorYearEvidence.fullIndependentThreeSeasonQualitative===0,'do not claim historical audit complete');
const xi=d.bestXi||[];
ok(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,'BestXI 11 unique');
for(const x of xi){const p=players.find(p=>p.id===x.playerId);ok(!!p&&x.position===p.position&&x.status==='proposed_unapproved','Best XI position '+x.playerId)}
for(const [z,count] of Object.entries(expectedFormation.napoli))ok(xi.filter(x=>x.position===z).length===count,'4-3-3 formation '+z);
ok(!players.some(x=>x.nameOriginal==='Alisson'), 'Roma GK Alisson 0 league games must be excluded');
if(err.length){console.error('FAILED: '+err.join('\n'));process.exit(1)}
console.log('PASS: 2016-17 Serie A, 6 actual UEFA clubs, 106 players, 66 starter slots, 40 backups, dates and current-year numeric fields, 10 position rank groups, 50 individualized top evaluations, 11 unique 4-3-3 Best XI. Qualitative independent three-season audit not claimed.');
