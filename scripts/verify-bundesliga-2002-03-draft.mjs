// node scripts/verify-bundesliga-2002-03-draft.mjs
// Structural validation is not proof that every historic biographical/tactical claim was independently sourced.
import {readFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const d=read('data/bundesliga-2002-03.json');
const ref=read('data/bundesliga-standings-verified-1999-2026.json').seasons['2002-03'];
const errors=[],pending=[];
const allowed=['S','A+','A','A-','B+','B','B-','C+','C','C-','D'];
const pos=['GK','CB','LB','RB','DM','CM','CAM','LW','RW','ST'];
const ids=new Set(),names=new Set(),clubs=new Map(),byPosition=new Map();
const fail=s=>errors.push(s);
if(d.meta?.season!=='2002-03'||d.meta?.leagueId!=='bundesliga'||d.meta?.status!=='draft')fail('wrong season/approval state');
if(d.qualifiers.length!==9)fail('qualification count must be 9');
if(d.standings.length!==18)fail('Bundesliga standings count must be 18');
const qualifiers=new Set(d.qualifiers.map(x=>x.club));
if(qualifiers.size!==d.qualifiers.length)fail('duplicated qualifier');
if(d.qualifiers.some(q=>d.standings.find(x=>x.club===q.club)?.competition!==q.competition))fail('qualifier and standings Europe labels diverge');
if(!ref||d.standings.some((r,i)=>['club','rank','played','wins','draws','losses','goalsFor','goalsAgainst','points'].some(k=>r[k]!==ref.standings?.[i]?.[k])))fail('shared verified Bundesliga table mismatch');
if(d.players.length!==d.meta.candidateCount)fail('candidateCount mismatch');
if(Object.keys(d.meta.clubTactics||{}).length!==9)fail('club tactics missing');
if(d.players.length!==163)fail('expected 163 nominees');
for(const p of d.players){
  if(!p.id||ids.has(p.id))fail('duplicate/missing player ID '+p.id);
  ids.add(p.id);
  const key=p.club+'::'+p.name;
  if(names.has(key))fail('duplicate same-club player '+key);
  names.add(key);
  if(!qualifiers.has(p.club))fail('ineligible club '+p.id);
  if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)fail('missing name '+p.id);
  if(p.leagueAppearances!=null&&(!Number.isInteger(p.leagueAppearances)||p.leagueAppearances<1||p.leagueAppearances>34))fail('invalid documented 2002-03 appearance count '+p.id);
  if(p.leagueAppearances==null)pending.push('registered candidate current Bundesliga appearance not yet verified '+p.id);
  if(p.leagueStarts!=null&&(p.leagueAppearances==null||p.leagueStarts>p.leagueAppearances))fail('invalid documented 2002-03 starts '+p.id);
  if(!pos.includes(p.position))fail('invalid primary position '+p.id);
  if(!['starter','backup'].includes(p.role))fail('invalid nomination role '+p.id);
  if(!allowed.includes(p.tier))fail('missing/invalid tier '+p.id);
  if(!Number.isInteger(p.rank)||p.rank<1)fail('invalid position rank '+p.id);
  if(p.born!=null){
    const valid=/^\d{4}-\d{2}-\d{2}$/.test(p.born)&&!Number.isNaN(Date.parse(p.born));
    if(!valid||new Date(p.born+'T00:00:00Z').toISOString().slice(0,10)!==p.born)fail('invalid birthdate '+p.id);
  } else pending.push('birthdate missing '+p.id);
  if(!p.tierReview||!p.evidence?.officialRoster||!p.sources?.length)fail('DFB roster/grade evidence missing '+p.id);
  if(p.leagueAppearances!=null&&!p.evidence?.currentSeason)fail('confirmed appearance without linked source '+p.id);
  if(!p.threeSeasonReview?.status)fail('three-season evidence status missing '+p.id);
  if(p.threeSeasonReview.status!=='DFB_three_bundesliga_seasons_individual_appearances_goals_verified')pending.push('direct official 3-season league record pending '+p.id);
  if(p.positionVerification!=='verified')pending.push('exact primary position pending '+p.id);
  if(!clubs.has(p.club))clubs.set(p.club,[]);
  clubs.get(p.club).push(p);
  if(!byPosition.has(p.position))byPosition.set(p.position,[]);
  byPosition.get(p.position).push(p);
}
for(const [c,ps] of clubs){
  if(ps.filter(p=>p.role==='starter').length!==11)fail('starter XI not 11 '+c);
  const counts={};
  for(const p of ps)counts[p.position]=(counts[p.position]||0)+1;
  for(const [p,v] of Object.entries(counts))if(v>(['CB','CM','ST'].includes(p)?3:2))fail('excess '+c+' '+p+' '+v);
}
if(clubs.size!==9)fail('not all European entrants have candidates');
for(const [p,ps] of byPosition){
  const ranks=ps.map(x=>x.rank).sort((a,b)=>a-b);
  if(ranks.some((r,i)=>r!==i+1))fail('position ranks not contiguous '+p);
  const sorted=ps.slice().sort((a,b)=>a.rank-b.rank);
  if(sorted.some((x,i)=>i>0&&allowed.indexOf(x.tier)<allowed.indexOf(sorted[i-1].tier)))fail('position rank/tier order mismatch '+p);
}
if(d.bestXi.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11)fail('Best XI must contain 11 unique ids');
const formation={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:2};
for(const b of d.bestXi){
 const p=d.players.find(x=>x.id===b.playerId);
 if(!p||p.position!==b.position)fail('Best XI invalid player position '+b.playerId);
 if(!b.reason||!b.alternates)fail('Best XI rationale absent '+b.playerId);
 formation[b.position]=(formation[b.position]||0)-1;
}
if(Object.values(formation).some(v=>v!==0))fail('4-4-2 formation slots mismatch');
if(d.meta?.bestXiReview?.status!=='proposed_unapproved')fail('Best XI must be proposed_unapproved');
const counts=Object.fromEntries(allowed.map(t=>[t,d.players.filter(p=>p.tier===t).length]));
const summary={passed:errors.length===0,season:'2002-03',clubs:clubs.size,candidates:d.players.length,
starterCount:d.players.filter(p=>p.role==='starter').length,backupCount:d.players.filter(p=>p.role==='backup').length,
currentAppearanceRecorded:d.players.filter(p=>p.leagueAppearances!=null).length,currentAppearancePending:d.players.filter(p=>p.leagueAppearances==null).length,
birthRecorded:d.players.filter(p=>p.born!=null).length,birthIndividuallyVerified:d.players.filter(p=>p.birthVerification==='DFB_2002_03_team_roster_once').length,
startsRecorded:d.players.filter(p=>p.leagueStarts!=null).length,startsWithExplicitSource:d.players.filter(p=>p.leagueStarts!=null&&p.evidence?.starts).length,
threeSeasonIndividuallyVerified:d.players.filter(p=>p.threeSeasonReview?.status==='DFB_three_bundesliga_seasons_individual_appearances_goals_verified').length,
worldClass:d.players.filter(p=>['S','A+'].includes(p.tier)).length,
leagueTopClass:d.players.filter(p=>['S','A+','A','A-'].includes(p.tier)).length,
tiers:counts,errors,pendingCount:pending.length,
warning:'Structural validation checks 9 teams, nominated 11 starters each, tiers and XI; 61 candidates lack individually corroborated 2002-03 appearances and other 3-season/player-role evidence is pending.'};
process.stdout.write(JSON.stringify(summary,null,2)+'\n');
if(errors.length)process.exitCode=1;
