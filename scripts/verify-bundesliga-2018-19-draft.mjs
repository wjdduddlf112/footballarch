// Bundesliga 2018-19 DRAFT structure check. NOT a full historical-quality audit.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2018-19.json","utf8"));
const a=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2018-19"];
const prior=JSON.parse(readFileSync("data/bundesliga-2017-18.json","utf8"));
const clubs=["bayern","dortmund","leipzig","leverkusen","gladbach","wolfsburg","frankfurt"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],test=(condition,message)=>{if(!condition)errors.push(message)};
test(d.meta.season==="2018-19"&&d.meta.leagueId==="bundesliga"&&d.meta.dataStatus==="draft_unapproved","meta unapproved");
test(d.meta.bestXiReview.status==="proposed_unapproved","XI unapproved");
test(JSON.stringify(d.standings)===JSON.stringify(a.standings),"standings archive parity");
test(d.qualifiers.length===7&&clubs.every(c=>d.qualifiers.some(q=>q.club===c)),"7 actual UEFA clubs");
test(d.qualifiers.every(q=>q.competition===a.europeanParticipation[q.club]),"UEFA labels");
test(d.players.length===133&&d.meta.candidateCount===133,"133 players");
const seen=new Set(),backup={},distribution=Object.fromEntries(tiers.map(x=>[x,0]));
for(const p of d.players){
 test(!seen.has(p.id),"duplicate player id "+p.id);seen.add(p.id);
 test(clubs.includes(p.club)&&p.season==="2018-19","season/club "+p.id);
 test(positions.includes(p.position)&&["starter","backup"].includes(p.role),"position or role "+p.id);
 if(p.role==="backup"){const key=p.club+"/"+p.position;backup[key]=(backup[key]||0)+1;test(backup[key]<=1,"duplicate backup "+key);}
 test(p.nameKo&&p.nameOriginal&&p.clubNameOriginal,"name identity "+p.id);
 test(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB format "+p.id);
 test(p.review==="draft_unapproved"&&p.verificationStatus==="partially_verified","historical review status "+p.id);
 test(p.leagueAppearances>=1&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0,"current league recorded "+p.id);
 test(tiers.includes(p.tier),"tier "+p.id);if(tiers.includes(p.tier))distribution[p.tier]++;
 test(p.threeSeasonReview.assessmentSeasons.join(",")==="2016-17,2017-18,2018-19","3-year period "+p.id);
 const current=p.threeSeasonReview.records["2018-19"];
 test(current.appearances===p.leagueAppearances&&current.starts===p.leagueStarts&&current.minutes===p.leagueMinutes&&current.source,"source linkage "+p.id);
 for(const year of ["2016-17","2017-18"]){
  const r=p.threeSeasonReview.records[year];
  test(r.appearances===null?r.verification.startsWith("evidence_pending"):r.verification.startsWith("prior_FootballArchive_DRAFT"),"historical DRAFT disclaimer "+p.id+" "+year);
 }
 if(p.position==="GK")test(p.goals2018===null&&current.goals===null,"GK conceded-not-scored rule "+p.id);
}
for(const pos of positions){
 const group=d.players.filter(p=>p.position===pos).sort((x,y)=>x.rank-y.rank);
 group.forEach((p,i)=>{test(p.rank===i+1,"rank continuity "+pos+" "+p.id);if(i)test(tiers.indexOf(group[i-1].tier)<=tiers.indexOf(p.tier),"tier order "+pos+" "+p.id)});
}
test(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"11 unique XI");
for(const x of d.bestXi){
 const p=d.players.find(p=>p.id===x.playerId);
 test(p&&p.position===x.position&&x.status==="proposed_unapproved","XI player match "+x.playerId);
}
for(const t of tiers)test(d.meta.tierSummary[({A:"A0",B:"B0",C:"C0"})[t]||t]===distribution[t],"tier summary "+t);
test(d.meta.worldClassCount===distribution.S+distribution["A+"],"world count");
test(d.meta.leagueTopClassCount===distribution.S+distribution["A+"]+distribution.A+distribution["A-"],"league top count");
for(const year of ["2016-17","2017-18","2018-19"]){
 test(d.meta.verificationSummary.priorSeasonRecordCounts[year]===d.players.filter(p=>p.threeSeasonReview.records[year].appearances!==null).length,"record coverage "+year);
}
test(prior.meta.season==="2017-18"&&prior.players.length===135,"prior-season regression");
console.log(JSON.stringify({season:d.meta.season,players:d.players.length,clubs:d.qualifiers.length,positions:Object.fromEntries(positions.map(p=>[p,d.players.filter(x=>x.position===p).length])),tiers:distribution,priorRecords:d.meta.verificationSummary.priorSeasonRecordCounts,errors},null,2));
if(errors.length){console.error("FAIL Bundesliga 2018-19 DRAFT structure; historical quality NOT certified");process.exit(1);}
console.log("PASS Bundesliga 2018-19 DRAFT structure and existing 2017-18 regression. Independent historical three-season qualitative verification: 0.");
