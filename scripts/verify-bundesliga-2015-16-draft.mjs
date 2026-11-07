// STRUCTURE ONLY; not a three-season historical-quality certification.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2015-16.json","utf8"));
const arc=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2015-16"];
const clubs=["bayern","dortmund","leverkusen","gladbach","schalke","mainz","hertha"],pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const e=[],ok=(v,m)=>{if(!v)e.push(m)};
ok(d.meta.season==="2015-16"&&d.meta.leagueId==="bundesliga"&&d.meta.dataStatus==="draft_unapproved","season draft");
ok(d.meta.bestXiReview.status==="proposed_unapproved","unapproved XI");
ok(JSON.stringify(d.standings)===JSON.stringify(arc.standings),"standings parity");
ok(d.qualifiers.length===7&&clubs.every(c=>d.qualifiers.some(q=>q.club===c)),"UEFA clubs");
ok(d.qualifiers.every(q=>q.competition===arc.europeanParticipation[q.club]),"UEFA labels");
ok(d.players.length===d.meta.candidateCount&&d.players.length>110,"population");
const ids=new Set(),back={},tc=Object.fromEntries(tiers.map(x=>[x,0]));
for(const p of d.players){
ok(!ids.has(p.id),"duplicate id "+p.id);ids.add(p.id);
ok(clubs.includes(p.club)&&p.season==="2015-16","club/year "+p.id);
ok(pos.includes(p.position)&&["starter","backup"].includes(p.role),"role "+p.id);
if(p.role==="backup"){const z=p.club+"/"+p.position;back[z]=(back[z]||0)+1;ok(back[z]<=1,"excess backup "+z);}
ok(p.nameKo&&p.nameOriginal&&p.clubNameOriginal,"identity "+p.id);
ok(p.born===null||/^\d{4}-\d\d-\d\d$/.test(p.born),"DOB format "+p.id);
ok(p.verificationStatus==="partially_verified"||p.verificationStatus==="evidence_pending","verification state "+p.id);
ok(p.review==="draft_unapproved","approval "+p.id);
ok(p.leagueAppearances>0&&p.leagueStarts>=0&&p.leagueStarts<=p.leagueAppearances&&p.leagueMinutes>0,"league use "+p.id);
ok(p.tier===null||tiers.includes(p.tier),"tier "+p.id);if(p.tier)tc[p.tier]++;
ok(p.rank===null||Number.isInteger(p.rank),"rank "+p.id);
ok(p.threeSeasonReview?.assessmentSeasons?.join(",")==="2013-14,2014-15,2015-16","3-season keys "+p.id);
ok(p.threeSeasonReview.records["2015-16"].source&&p.threeSeasonReview.records["2015-16"].appearances===p.leagueAppearances,"season source "+p.id);
for(const y of ["2013-14","2014-15"])if(p.threeSeasonReview.records[y].appearances==null)ok(p.threeSeasonReview.records[y].verification.startsWith("evidence_pending"),"missing not pending "+p.id+y);
}
for(const z of pos){const ar=d.players.filter(x=>x.position===z).sort((a,b)=>a.rank-b.rank);for(let i=0;i<ar.length;i++){ok(ar[i].rank===i+1,"rank contiguous "+z);if(i>0)ok(tiers.indexOf(ar[i-1].tier)<=tiers.indexOf(ar[i].tier),"tier/rank mismatch "+z);}}
ok(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"exact XI");
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);ok(p&&p.position===x.position,"XI position "+x.playerId);ok(x.status==="proposed_unapproved","XI approval "+x.playerId);}
const sm=Object.fromEntries(Object.entries(tc).map(([k,v])=>[(["A","B","C"].includes(k)?k+"0":k),v]));
ok(JSON.stringify(sm)===JSON.stringify(d.meta.tierSummary),"tier summary");
ok(d.meta.worldClassCount===tc.S+tc["A+"],"WC count");
ok(d.meta.leagueTopClassCount===tc.S+tc["A+"]+tc.A+tc["A-"],"league top count");
for(const y of ["2013-14","2014-15","2015-16"])ok(d.meta.verificationSummary.priorSeasonRecordCounts[y]===d.players.filter(p=>p.threeSeasonReview.records[y].appearances!=null).length,"coverage "+y);
console.log(JSON.stringify({season:d.meta.season,players:d.players.length,clubs:clubs.length,position_counts:Object.fromEntries(pos.map(z=>[z,d.players.filter(p=>p.position===z).length])),tier_counts:sm,worldClass:d.meta.worldClassCount,leagueTop:d.meta.leagueTopClassCount,errors:e},null,2));
if(e.length){console.error("FAIL structure",e);process.exit(1)}
console.log("PASS Bundesliga 2015-16 structural only; historical qualitative 0 independently completed");
