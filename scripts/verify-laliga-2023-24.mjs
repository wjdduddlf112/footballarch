import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync(new URL('../data/laliga-2023-24.json',import.meta.url),'utf8'));
const archive=JSON.parse(fs.readFileSync(new URL('../data/laliga-standings-verified-1999-2026.json',import.meta.url),'utf8'));
const validate=(d,master)=>{
 const errors=[];const check=(v,msg)=>{if(!v)errors.push(msg)};
 const p=d.players, allowed=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"], positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
 const norm=x=>String(x).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().replace(/[^a-z0-9]/g,"");
 const validDate=s=>typeof s==="string"&&/^\d{4}-\d\d-\d\d$/.test(s)&&!isNaN(Date.parse(s))&&new Date(s).toISOString().slice(0,10)===s&&s<"2009-01-01";
 const expected=master.seasons["2023-24"];const q=Object.fromEntries(d.qualifiers.map(x=>[x.club,x.competition]));
 check(d.meta.season==="2023-24"&&d.meta.status==="draft"&&!d.meta.userApproved,"draft metadata");
 check(p.length===d.meta.candidateCount,"candidate count");
 check(new Set(p.map(x=>x.id)).size===p.length,"duplicate IDs");
 check(new Set(p.map(x=>norm(x.name)+x.born)).size===p.length,"duplicate identity");
 check(d.qualifiers.length===7&&Object.entries(expected.europeanParticipation).every(([k,v])=>q[k]===v),"qualifier parity");
 check(JSON.stringify(d.standings)===JSON.stringify(expected.standings),"standings parity");
 check(JSON.stringify(d.clubs)===JSON.stringify(master.clubs),"club metadata parity");
 for(const x of p){check(x.position!=="GK"||(Number.isInteger(x.leagueGoalsConceded)&&x.leagueGoalsConceded>=0),x.id+" goalkeeper conceded");
  check(x.nameKo&&x.nameOriginal&&validDate(x.born)&&x.birthSource&&x.sources?.length>=2,`${x.id}: identity or date format`);
  check(allowed.includes(x.tier)&&positions.includes(x.position)&&["starter","backup"].includes(x.role)&&x.review==="draft_unapproved"&&q[x.club]&&x.assessmentRationale,`${x.id}: evaluation fields`);
  check(Number.isInteger(x.leagueAppearances)&&x.leagueAppearances>0&&x.leagueAppearances<=38&&Number.isInteger(x.leagueStarts)&&x.leagueStarts>=0&&x.leagueStarts<=x.leagueAppearances&&x.leagueMinutes>0&&x.leagueMinutes<=3420,`${x.id}: league appearances`);
  check(x.evidence?.priorSeasons?.length===2&&x.threeSeasonReview.priorCoverage===x.evidence.priorSeasons.filter(s=>s.records?.length||s.secondarySnapshot?.length).length,`${x.id}: prior evidence coverage`);
 }
 for(const c of Object.keys(q)){
  check(p.filter(x=>x.club===c&&x.role==="starter").length===(c==="atleti"?10:11),`${c}: starter count`);
  for(const pos of positions){const list=p.filter(x=>x.club===c&&x.position===pos);check(list.filter(x=>x.role==="backup").length<=1&&list.filter(x=>x.role==="starter").length<=(["CB","CM","ST"].includes(pos)?2:1),`${c} ${pos}: cap`);}
 }
 for(const pos of positions){const sorted=p.filter(x=>x.position===pos).sort((a,b)=>a.rank-b.rank);check(sorted.every((x,i)=>x.rank===i+1&&(i===0||allowed.indexOf(sorted[i-1].tier)<=allowed.indexOf(x.tier))),`${pos}: rank/tier consistency`);}
 const xi=d.bestXi;
 check(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11&&xi.every(x=>p.some(y=>x.playerId===y.id&&x.position===y.position)), "Best XI identity and position");
 check(Object.entries({GK:1,CB:2,LB:1,RB:1,CM:2,LW:1,RW:1,ST:2}).every(([k,n])=>xi.filter(x=>x.position===k).length===n),"4-4-2 slots");
 check(d.meta.formation==="4-4-2"&&d.meta.bestXiReview.status==="proposed_unapproved","XI metadata");
 return {status:errors.length?"FAIL":"PASS",errors,players:p.length,birthDates:p.filter(x=>validDate(x.born)).length,tiers:p.filter(x=>allowed.includes(x.tier)).length,ranks:p.filter(x=>Number.isInteger(x.rank)).length,worldClass:p.filter(x=>["S","A+"].includes(x.tier)).length,leagueTopClass:p.filter(x=>["S","A+","A","A-"].includes(x.tier)).length,priorCoverage:Object.fromEntries([0,1,2].map(i=>[i,p.filter(x=>x.threeSeasonReview.priorCoverage===i).length])),officialBirthSources:p.filter(x=>x.birthAuditStatus.startsWith("official")).length,qualifiers:d.qualifiers.length,standings:d.standings.length,bestXi:xi.length};
};
const result=validate(data,archive);
console.log(JSON.stringify(result,null,2));
if(result.status!=='PASS')process.exitCode=1;
