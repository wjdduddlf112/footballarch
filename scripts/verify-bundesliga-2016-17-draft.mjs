// Bundesliga 2016-17 DRAFT STRUCTURE ONLY. Not a historical-quality certification.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2016-17.json","utf8"));
const arc=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2016-17"];
const clubs=["bayern","leipzig","dortmund","hoffenheim","koln","hertha","freiburg"],pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],ok=(v,msg)=>{if(!v)errors.push(msg)};
ok(d.meta.leagueId==="bundesliga"&&d.meta.season==="2016-17"&&d.meta.dataStatus==="draft_unapproved","season/status");
ok(d.meta.bestXiReview.status==="proposed_unapproved","XI draft");
ok(JSON.stringify(d.standings)===JSON.stringify(arc.standings),"standings parity");
ok(d.qualifiers.length===7&&clubs.every(c=>d.qualifiers.some(q=>q.club===c)),"7 UEFA actual qualifier clubs");
ok(d.qualifiers.every(q=>q.competition===arc.europeanParticipation[q.club]),"competition parity");
ok(d.players.length===d.meta.candidateCount&&d.players.length>=110,"all candidates count");
const ids=new Set(),back={},tc=Object.fromEntries(tiers.map(t=>[t,0]));
for(const p of d.players){
ok(!ids.has(p.id),"duplicate ID "+p.id);ids.add(p.id);
ok(clubs.includes(p.club)&&p.season==="2016-17","club season "+p.id);
ok(pos.includes(p.position)&&["starter","backup"].includes(p.role),"position role "+p.id);
if(p.role==="backup"){const k=p.club+"/"+p.position;back[k]=(back[k]||0)+1;ok(back[k]<=1,"more than one backup "+k);}
ok(p.nameOriginal&&p.nameKo&&p.clubNameOriginal,"identity "+p.id);
ok(p.born===null||/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB "+p.id);
ok(["partially_verified","evidence_pending"].includes(p.verificationStatus),"verification "+p.id);
ok(p.review==="draft_unapproved","not approved "+p.id);
ok(p.leagueAppearances>0&&p.leagueStarts<=p.leagueAppearances&&p.leagueStarts>=0&&p.leagueMinutes>0,"current league use "+p.id);
ok(p.tier===null||tiers.includes(p.tier),"tier value "+p.id);if(p.tier)tc[p.tier]++;
ok(p.threeSeasonReview?.assessmentSeasons.join(",")==="2014-15,2015-16,2016-17","3-year assessment "+p.id);
const y=p.threeSeasonReview.records["2016-17"];ok(y?.appearances===p.leagueAppearances&&y.source,"current season source "+p.id);
for(const yr of ["2014-15","2015-16"]){const r=p.threeSeasonReview.records[yr];if(r.appearances==null)ok(r.verification.startsWith("evidence_pending"),"missing not pending "+p.id+yr);}
}
for(const position of pos){const ps=d.players.filter(p=>p.position===position).sort((a,b)=>a.rank-b.rank);ps.forEach((p,i)=>{ok(p.rank===i+1,"rank order "+position+"/"+p.nameOriginal);if(i)ok(tiers.indexOf(ps[i-1].tier)<=tiers.indexOf(p.tier),"tier/rank order "+position);});}
ok(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"XI 11 unique");
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);ok(p&&p.position===x.position&&x.status==="proposed_unapproved","XI position/approval "+x.playerId);}
for(const [t,n] of Object.entries(tc))ok(d.meta.tierSummary[["A","B","C"].includes(t)?t+"0":t]===n,"tier summary "+t);
ok(d.meta.worldClassCount===tc.S+tc["A+"],"World Class");
ok(d.meta.leagueTopClassCount===tc.S+tc["A+"]+tc.A+tc["A-"],"League Top");
for(const yr of ["2014-15","2015-16","2016-17"])ok(d.meta.verificationSummary.priorSeasonRecordCounts[yr]===d.players.filter(p=>p.threeSeasonReview.records[yr].appearances!=null).length,"history count "+yr);
console.log(JSON.stringify({season:d.meta.season,players:d.players.length,clubs:clubs.length,posCounts:Object.fromEntries(pos.map(x=>[x,d.players.filter(p=>p.position===x).length])),tierCounts:tc,worldClass:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,issues:errors},null,2));
if(errors.length){console.error("STRUCTURE FAIL");process.exit(1)}
console.log("PASS: Bundesliga 2016-17 DRAFT structural validation, NOT historical full qualitative verification");
