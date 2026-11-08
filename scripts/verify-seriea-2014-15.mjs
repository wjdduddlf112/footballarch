// Structural verification only: never conflates JSON consistency with independent historical audit.
// Run: node scripts/verify-seriea-2014-15.mjs
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync('data/seriea-2014-15.json','utf8'));
const err=[],ck=(a,m)=>{if(!a)err.push(m)};
const clubs=['juventus','roma','lazio','fiorentina','napoli','sampdoria'];
const ps=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const tier=['S','A+','A','A-','B+','B','B-','C+','C','C-','D'];
const canonical={'S':'S','A+':'A+','A0':'A','A-':'A-','B+':'B+','B0':'B','B-':'B-','C+':'C+','C0':'C','C-':'C-','D':'D'};
const expected={juventus:'UCL',roma:'UCL',lazio:'UCL',fiorentina:'UEL',napoli:'UEL',sampdoria:'UEL'};
const players=d.players||[];
ck(d.meta?.leagueId==='seriea'&&d.meta?.season==='2014-15'&&d.meta?.qualifyingSeason==='2015-16','season');
ck(d.meta?.status==='draft_unapproved'&&d.meta?.standingsOnly===false,'draft status');
ck(d.meta?.candidateCount===115&&players.length===115,'candidate count');
ck(d.meta?.europeanQualificationVerified===true,'UEFA verification flag');
ck(d.standings?.length===20&&d.standings.every((x,i)=>x.rank===i+1&&x.played===38),'standings');
ck(d.standings?.find(x=>x.club==='genoa')?.competition===null,'Genoa licence exclusion');
ck(d.standings?.find(x=>x.club==='sampdoria')?.competition==='UEL','Sampdoria entry');
ck(d.qualifiers?.length===6&&clubs.every(c=>d.qualifiers.some(q=>q.club===c&&q.competition===expected[c])),'UEFA six entrants');
ck(!d.qualifiers.some(q=>q.club==='genoa'),'Genoa excluded');
ck(players.length===new Set(players.map(p=>p.id)).size,'duplicate IDs');
ck(players.length===new Set(players.map(p=>p.nameOriginal+'|'+p.born)).size,'duplicate season player');
const legalDate=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&!Number.isNaN(Date.parse(x));
for(const p of players){
 ck(clubs.includes(p.club)&&ps.includes(p.position),'club/position '+p.id);
 ck(!!p.nameKo&&!!p.nameOriginal&&!!p.clubNameOriginal&&legalDate(p.born),'identity '+p.id);
 ck(p.review==='draft_unapproved','player draft '+p.id);
 ck(p.role==='starter'||p.role==='backup','role '+p.id);
 ck(tier.includes(p.tier)&&canonical[p.displayTier]===p.tier,'tier '+p.id);
 ck(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=38,'apps '+p.id);
 ck(Number.isInteger(p.leagueStarts)&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances,'starts '+p.id);
 ck(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>0&&p.leagueMinutes<=3420,'minutes '+p.id);
 ck(Number.isInteger(p.leagueGoals)&&p.leagueGoals>=0,'goals '+p.id);
 ck(p.leagueAssists===null,'unverified assists must be null '+p.id);
 ck(p.threeSeasonReview?.assessmentSeasons?.join(',')==='2012-13,2013-14,2014-15','prior years '+p.id);
 for(const y of ['2012-13','2013-14','2014-15'])ck(p.threeSeasonReview?.records?.[y]!=null,'missing year '+p.id+' '+y);
 ck(p.threeSeasonReview.records['2014-15'].appearances===p.leagueAppearances,'stats rebind '+p.id);
 ck(Number.isInteger(p.rank)&&p.rank>=1,'rank '+p.id);
}
for(const c of clubs){
 const subset=players.filter(p=>p.club===c);
 ck(subset.filter(p=>p.role==='starter').length===11,'11 starters '+c);
 ck(subset.length===d.meta.candidateCoverage?.counts?.[c],'per club count '+c);
 for(const pos of ps)ck(subset.filter(p=>p.position===pos&&p.role==='backup').length<=1,'backup cap '+c+'/'+pos);
}
for(const pos of ps){
 const rr=players.filter(p=>p.position===pos).sort((a,b)=>a.rank-b.rank);
 ck(rr.every((p,i)=>p.rank===i+1),'rank 1..N '+pos);
 ck(rr.every((p,i)=>!i||tier.indexOf(p.tier)>=tier.indexOf(rr[i-1].tier)),'rank/tier discord '+pos);
}
const distribution=Object.fromEntries(Object.entries(canonical).map(([d])=>[d,players.filter(p=>p.displayTier===d).length]));
for(const [g,n] of Object.entries(d.meta.tierDistribution||{}))ck(distribution[g]===n,'tier distribution '+g);
const xi=d.bestXi||[];
ck(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,'Best XI cardinality');
for(const x of xi){const p=players.find(p=>p.id===x.playerId);ck(!!p&&x.position===p.position&&x.status==='proposed_unapproved','Best XI role '+x.playerId)}
const expectedXi={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const [pos,n] of Object.entries(expectedXi))ck(xi.filter(x=>x.position===pos).length===n,'4-3-3 XI slot '+pos);
ck(players.filter(p=>p.name==='Manolo Gabbiadini').length===1,'mid-season transferred duplicate Gabbiadini');
ck(d.meta.priorYearEvidence?.fullIndependentThreeSeasonQualitative===0,'full 3-year audit not falsely complete');
if(err.length){console.error('FAIL Serie A 2014-15:\n'+err.join('\n'));process.exit(1)}
console.log('PASS: Serie A 2014-15: six actual UEFA clubs, 115 unique player IDs with 11 starter slots per club, full DOB and current year stat fields, rankings 1..N, tier counts, 11 unique 4-3-3 Best XI. Historical 3-season individual peer audit pending.');
