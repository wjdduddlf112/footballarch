// Bundesliga 2020-21 DRAFT structural schema and 2019-20 regression test.
// Passing this test DOES NOT certify individual historical quality or all 144 manual records.
import {readFileSync} from "node:fs";
const data=JSON.parse(readFileSync("data/bundesliga-2020-21.json","utf8"));
const archive=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2020-21"];
const prior=JSON.parse(readFileSync("data/bundesliga-2019-20.json","utf8"));
const clubs=["bayern","leipzig","dortmund","wolfsburg","frankfurt","leverkusen","union"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const years=["2018-19","2019-20","2020-21"];
const errors=[],ok=(c,msg)=>{if(!c)errors.push(msg)};
ok(data.meta.season==="2020-21"&&data.meta.dataStatus==="draft_unapproved","season remains unapproved");
ok(data.meta.bestXiReview.status==="proposed_unapproved","Best XI remains unapproved");
ok(JSON.stringify(data.standings)===JSON.stringify(archive.standings),"archive domestic standings parity");
ok(data.qualifiers.length===7&&clubs.every(c=>data.qualifiers.some(q=>q.club===c)),"eligible 7 clubs");
ok(data.qualifiers.every(q=>q.competition===archive.europeanParticipation[q.club]),"2021-22 UEFA competition parity");
ok(data.qualifiers.some(q=>q.club==="union"&&q.competition==="UECL"),"Union Berlin 2021-22 inaugural Conference League inclusion");
ok(data.qualifiers.some(q=>q.club==="frankfurt"&&q.competition==="UEL"),"Frankfurt 2021-22 Europa League");
ok(!data.qualifiers.some(q=>q.club==="gladbach"||q.club==="hoffenheim"),"non-eligible clubs omitted");
ok(data.players.length===144&&data.meta.candidateCount===144,"144 players exactly");
const seen=new Set(),backups={},counts=Object.fromEntries(tiers.map(t=>[t,0]));
for(const p of data.players){
  ok(!seen.has(p.id),"duplicate id "+p.id);seen.add(p.id);
  ok(clubs.includes(p.club)&&p.season==="2020-21","club-season "+p.id);
  ok(positions.includes(p.position)&&["starter","backup"].includes(p.role),"position-role "+p.id);
  if(p.role==="backup"){const key=p.club+"/"+p.position;backups[key]=(backups[key]||0)+1;ok(backups[key]<=1,"more than one backup "+key)}
  ok(Boolean(p.nameKo&&p.nameOriginal&&p.clubNameOriginal),"name fields "+p.id);
  ok(/^\d{4}-\d{2}-\d{2}$/.test(p.born||""),"DOB "+p.id);
  ok(p.review==="draft_unapproved"&&p.verificationStatus==="partially_verified","historical review not prematurely approved "+p.id);
  ok(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0,"league stats "+p.id);
  ok(tiers.includes(p.tier),"tier "+p.id);if(tiers.includes(p.tier))counts[p.tier]++;
  ok(p.threeSeasonReview?.assessmentSeasons.join(",")===years.join(","),"assessment year window "+p.id);
  const now=p.threeSeasonReview.records["2020-21"];
  ok(now.appearances===p.leagueAppearances&&now.starts===p.leagueStarts&&now.minutes===p.leagueMinutes&&Boolean(now.source),"current 2020-21 source-linked "+p.id);
  for(const year of ["2018-19","2019-20"]){
    const h=p.threeSeasonReview.records[year];
    ok(h.appearances===null?h.verification.startsWith("evidence_pending"):h.verification.startsWith("prior_FootballArchive_UNAPPROVED_DRAFT_REFERENCE"),"old records must say DRAFT / missing "+p.id+" "+year);
  }
  if(p.position==="GK")ok(p.goals2020===null&&now.goals===null,"goalkeeper goals are null, not conceded "+p.id);
}
for(const position of positions){
  const group=data.players.filter(p=>p.position===position).sort((a,b)=>a.rank-b.rank);
  group.forEach((p,i)=>{ok(p.rank===i+1,"position rank continuity "+position+" "+p.id);if(i)ok(tiers.indexOf(group[i-1].tier)<=tiers.indexOf(p.tier),"grade/rank consistency "+position+" "+p.id)});
}
ok(data.bestXi.length===11&&new Set(data.bestXi.map(x=>x.playerId)).size===11,"11 unique XI");
for(const x of data.bestXi){const p=data.players.find(z=>z.id===x.playerId);ok(p&&p.position===x.position&&x.status==="proposed_unapproved","XI position and review "+x.playerId);}
for(const tier of tiers)ok(data.meta.tierSummary[({A:"A0",B:"B0",C:"C0"})[tier]||tier]===counts[tier],"tier summary "+tier);
ok(data.meta.worldClassCount===counts.S+counts["A+"],"World Class total");
ok(data.meta.leagueTopClassCount===counts.S+counts["A+"]+counts.A+counts["A-"],"League Top total");
for(const year of years)ok(data.meta.verificationSummary.priorSeasonRecordCounts[year]===data.players.filter(p=>p.threeSeasonReview.records[year].appearances!==null).length,"three-year coverage count "+year);
ok(prior.meta.season==="2019-20"&&prior.meta.dataStatus==="draft_unapproved"&&prior.players.length===142,"2019-20 prior DRAFT regression");
console.log(JSON.stringify({season:data.meta.season,players:data.players.length,clubs:data.qualifiers.length,positionCounts:Object.fromEntries(positions.map(x=>[x,data.players.filter(p=>p.position===x).length])),tierCounts:counts,yearCounts:data.meta.verificationSummary.priorSeasonRecordCounts,bestXi:data.bestXi.length,errors},null,2));
if(errors.length){console.error("FAIL: Bundesliga 2020-21 structure / regression.");process.exit(1);}
console.log("PASS: Bundesliga 2020-21 structural integrity and 2019-20 142-player regression. INDEPENDENT historic qualitative review remains 0.");
