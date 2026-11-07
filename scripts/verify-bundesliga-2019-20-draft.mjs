// Bundesliga 2019-20 DRAFT structure and previous-season regression ONLY.
// This test does not independently verify every player's historical position or quality.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2019-20.json","utf8"));
const archive=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2019-20"];
const prev=JSON.parse(readFileSync("data/bundesliga-2018-19.json","utf8"));
const clubs=["bayern","dortmund","leipzig","gladbach","leverkusen","hoffenheim","wolfsburg"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const years=["2017-18","2018-19","2019-20"];
const errors=[],ok=(truth,msg)=>{if(!truth)errors.push(msg)};
ok(d.meta.season==="2019-20"&&d.meta.leagueId==="bundesliga"&&d.meta.dataStatus==="draft_unapproved","2019-20 DRAFT status");
ok(d.meta.bestXiReview.status==="proposed_unapproved","DRAFT XI");
ok(JSON.stringify(d.standings)===JSON.stringify(archive.standings),"archive standings parity");
ok(d.qualifiers.length===7&&clubs.every(c=>d.qualifiers.some(q=>q.club===c)),"seven UEFA clubs");
ok(d.qualifiers.every(q=>archive.europeanParticipation[q.club]===q.competition),"qualifier competition agreement");
ok(d.qualifiers.some(q=>q.club==="wolfsburg"&&q.route.includes("AEK Athens")),"Wolfsburg 2020-21 UEL qualifying not omitted");
ok(!d.qualifiers.some(q=>q.club==="frankfurt"),"Frankfurt must not qualify");
ok(d.players.length===142&&d.meta.candidateCount===142,"142 players");
const ids=new Set(),backs={},dist=Object.fromEntries(tiers.map(t=>[t,0]));
for(const p of d.players){
 ok(!ids.has(p.id),"duplicate "+p.id);ids.add(p.id);
 ok(clubs.includes(p.club)&&p.season==="2019-20","club/season "+p.id);
 ok(positions.includes(p.position)&&["starter","backup"].includes(p.role),"position/role "+p.id);
 if(p.role==="backup"){const k=p.club+"/"+p.position;backs[k]=(backs[k]||0)+1;ok(backs[k]===1,"excess backup "+k);}
 ok(p.nameKo&&p.nameOriginal&&p.clubNameOriginal,"names "+p.id);
 ok(/^\d{4}-\d{2}-\d{2}$/.test(p.born??""),"DOB format "+p.id);
 ok(p.review==="draft_unapproved"&&p.verificationStatus==="partially_verified","historical status "+p.id);
 ok(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0,"2019-20 stats "+p.id);
 ok(tiers.includes(p.tier),"tier "+p.id);if(tiers.includes(p.tier))dist[p.tier]++;
 ok(p.threeSeasonReview.assessmentSeasons.join(",")===years.join(","),"3-year window "+p.id);
 const c=p.threeSeasonReview.records["2019-20"];
 ok(c.appearances===p.leagueAppearances&&c.starts===p.leagueStarts&&c.minutes===p.leagueMinutes&&Boolean(c.source),"current season sourced "+p.id);
 for(const year of ["2017-18","2018-19"]){
  const v=p.threeSeasonReview.records[year];
  ok(v.appearances==null?v.verification.startsWith("evidence_pending"):v.verification.startsWith("previous_FootballArchive_DRAFT"),"old DRAFT correctly marked "+p.id+" "+year);
 }
 if(p.position==="GK")ok(c.goals===null&&p.goals2019===null,"keeper conceded not scored "+p.id);
}
for(const position of positions){
 const group=d.players.filter(p=>p.position===position).sort((a,b)=>a.rank-b.rank);
 group.forEach((p,i)=>{ok(p.rank===i+1,"rank continuity "+position+" "+p.id);if(i)ok(tiers.indexOf(group[i-1].tier)<=tiers.indexOf(p.tier),"tier/rank consistency "+position+" "+p.id)});
}
ok(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"11 distinct Best XI");
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);ok(p&&p.position===x.position&&x.status==="proposed_unapproved","Best XI registered position "+x.playerId)}
for(const t of tiers)ok(d.meta.tierSummary[({A:"A0",B:"B0",C:"C0"})[t]||t]===dist[t],"tier distribution "+t);
ok(d.meta.worldClassCount===dist.S+dist["A+"],"world class count");
ok(d.meta.leagueTopClassCount===dist.S+dist["A+"]+dist.A+dist["A-"],"league top count");
for(const year of years)ok(d.meta.verificationSummary.priorSeasonRecordCounts[year]===d.players.filter(p=>p.threeSeasonReview.records[year].appearances!==null).length,"history counts "+year);
ok(prev.meta.season==="2018-19"&&prev.players.length===133&&prev.meta.dataStatus==="draft_unapproved","prior 2018-19 preserved DRAFT");
console.log(JSON.stringify({season:d.meta.season,clubs:d.qualifiers.length,players:d.players.length,positions:Object.fromEntries(positions.map(p=>[p,d.players.filter(x=>x.position===p).length])),tiers:dist,years:d.meta.verificationSummary.priorSeasonRecordCounts,bestXi:d.bestXi.length,errors},null,2));
if(errors.length){console.error("FAIL Bundesliga 2019-20 structural audit; historical qualitative comparison not certified");process.exit(1)}
console.log("PASS Bundesliga 2019-20 DRAFT structure and 2018-19 regression. Independently complete three-year qualitative reviews: 0.");
