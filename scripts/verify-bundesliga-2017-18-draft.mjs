// Bundesliga 2017-18 player data STRUCTURE TEST; historical quality NOT certified.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2017-18.json","utf8"));
const ar=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2017-18"];
const clubs=["bayern","schalke","hoffenheim","dortmund","leverkusen","leipzig","frankfurt"],positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
let errors=[];const ok=(v,m)=>{if(!v)errors.push(m)};
ok(d.meta.season==="2017-18"&&d.meta.leagueId==="bundesliga"&&d.meta.dataStatus==="draft_unapproved","season draft");
ok(d.meta.bestXiReview.status==="proposed_unapproved","draft XI");
ok(JSON.stringify(d.standings)===JSON.stringify(ar.standings),"standings parity");
ok(d.qualifiers.length===7&&clubs.every(c=>d.qualifiers.some(q=>q.club===c)),"UEFA seven");
ok(d.qualifiers.every(q=>q.competition===ar.europeanParticipation[q.club]),"UEFA labels");
ok(!d.qualifiers.some(q=>q.club==="stuttgart")&&d.qualifiers.some(q=>q.club==="frankfurt"),"cup winner Frankfurt exception");
ok(d.players.length===d.meta.candidateCount&&d.players.length>=110,"candidate count");
let ids=new Set(),backs={},gradeCount=Object.fromEntries(tiers.map(t=>[t,0]));
for(let p of d.players){
ok(!ids.has(p.id),"duplicate ID "+p.id);ids.add(p.id);
ok(clubs.includes(p.club)&&p.season==="2017-18","club/season "+p.id);
ok(positions.includes(p.position)&&["starter","backup"].includes(p.role),"pos role "+p.id);
if(p.role==="backup"){const z=p.club+"/"+p.position;backs[z]=(backs[z]||0)+1;ok(backs[z]<=1,"excess backup "+z);}
ok(p.nameKo&&p.nameOriginal&&p.clubNameOriginal,"identity "+p.id);
ok(/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB "+p.id);
ok(p.review==="draft_unapproved"&&p.verificationStatus==="partially_verified","draft state "+p.id);
ok(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0,"current league appearance "+p.id);
ok(tiers.includes(p.tier),"grade "+p.id);if(tiers.includes(p.tier))gradeCount[p.tier]++;
ok(p.threeSeasonReview.assessmentSeasons.join(",")==="2015-16,2016-17,2017-18","three years "+p.id);
ok(p.threeSeasonReview.records["2017-18"].appearances===p.leagueAppearances&&p.threeSeasonReview.records["2017-18"].source,"current verification "+p.id);
for(let y of ["2015-16","2016-17"]){let r=p.threeSeasonReview.records[y];if(r.appearances===null)ok(r.verification.startsWith("evidence_pending"),"old source gap "+p.id);}
}
for(let z of positions){let ps=d.players.filter(p=>p.position===z).sort((a,b)=>a.rank-b.rank);for(let i=0;i<ps.length;i++){ok(ps[i].rank===i+1,"rank continuity "+z);if(i)ok(tiers.indexOf(ps[i-1].tier)<=tiers.indexOf(ps[i].tier),"rank/tier order "+z);}}
ok(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"BestXI 11");
for(let x of d.bestXi){let p=d.players.find(p=>p.id===x.playerId);ok(p&&p.position===x.position&&x.status==="proposed_unapproved","BestXI position approval "+x.playerId);}
for(let [t,n] of Object.entries(gradeCount))ok(d.meta.tierSummary[["A","B","C"].includes(t)?t+"0":t]===n,"summary "+t);
ok(d.meta.worldClassCount===gradeCount.S+gradeCount["A+"],"worldclass count");
ok(d.meta.leagueTopClassCount===gradeCount.S+gradeCount["A+"]+gradeCount.A+gradeCount["A-"],"league top count");
for(let yr of ["2015-16","2016-17","2017-18"])ok(d.meta.verificationSummary.priorSeasonRecordCounts[yr]===d.players.filter(p=>p.threeSeasonReview.records[yr].appearances!==null).length,"three year count "+yr);
console.log(JSON.stringify({season:d.meta.season,players:d.players.length,clubs:d.qualifiers.length,position_counts:Object.fromEntries(positions.map(z=>[z,d.players.filter(p=>p.position===z).length])),grades:gradeCount,errors},null,2));
if(errors.length){console.error("FAIL DRAFT structure");process.exit(1)}
console.log("PASS Bundesliga 2017-18 DRAFT STRUCTURE ONLY. Full qualitative historical 3-year reviews 0.");
