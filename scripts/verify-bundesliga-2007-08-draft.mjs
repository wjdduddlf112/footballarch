// Bundesliga 2007-08 structural audit: does NOT certify historical player performance.
import {readFileSync} from "node:fs";
const read=p=>JSON.parse(readFileSync(p,"utf8"));
const d=read("data/bundesliga-2007-08.json"),stand=read("data/bundesliga-standings-verified-1999-2026.json").seasons["2007-08"].standings;
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const expected=["bayern","bremen","schalke","hsv","wolfsburg","stuttgart","hertha","dortmund"],errs=[];
const ok=(v,s)=>{if(!v)errs.push(s)};
ok(d.meta.leagueId==="bundesliga"&&d.meta.season==="2007-08"&&d.meta.status==="draft","season");
ok(d.qualifiers.length===8&&new Set(d.qualifiers.map(x=>x.club)).size===8&&expected.every(c=>d.qualifiers.some(x=>x.club===c)),"qualifiers");
ok(d.standings.length===18&&JSON.stringify(d.standings)===JSON.stringify(stand),"standing parity");
ok(d.players.length===d.meta.candidateCount,"candidate count");
const ids=new Set(),names=new Set(),roles=new Map();
for(const p of d.players){
 ok(p.id&&!ids.has(p.id),"player ID "+p.id);ids.add(p.id);
 ok(expected.includes(p.club)&&positions.includes(p.position),"club/position "+p.id);
 const person=p.club+"|"+p.nameOriginal;ok(!names.has(person),"same-club duplicate "+person);names.add(person);
 ok(["starter","backup"].includes(p.role),"role "+p.id);
 const key=p.club+"|"+p.position;roles.set(key,(roles.get(key)||0)+(p.role==="backup"?1:0));ok(roles.get(key)<=1,"backup cap "+key);
 ok(p.born===null||/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB "+p.id);
 ok(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>0&&p.leagueAppearances<=34,"apps "+p.id);
 ok(Number.isInteger(p.leagueStarts)&&p.leagueStarts<=p.leagueAppearances,"starts "+p.id);
 ok(p.leagueMinutes===null||Number.isInteger(p.leagueMinutes)&&p.leagueMinutes>0,"minutes "+p.id);
 ok(p.tier===null||tiers.includes(p.tier),"tier "+p.id);
 ok(p.verificationStatus==="partially_verified"||p.verificationStatus==="evidence_pending"||p.verificationStatus==="verified"||p.verificationStatus==="conflicting_sources","verification "+p.id);
 ok(p.threeSeasonReview&&["2005-06","2006-07","2007-08"].every(y=>p.threeSeasonReview.records[y]),"3-year structure "+p.id);
 ok(p.tierReview&&p.evidence.currentSeason&&p.sources.length>0,"evidence "+p.id);
}
for(const pos of positions){const a=d.players.filter(p=>p.position===pos).sort((a,b)=>(a.rank||999)-(b.rank||999));a.forEach((p,i)=>{ok(p.rank===i+1,"position rank "+pos);if(i)ok(tiers.indexOf(a[i-1].tier)<=tiers.indexOf(p.tier),"rank/tier order "+pos)})}
const wc=d.players.filter(p=>["S","A+"].includes(p.tier)).length,tc=d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
ok(wc===d.meta.worldClassCount&&tc===d.meta.leagueTopClassCount,"top counts");
for(const t of tiers)ok(d.players.filter(p=>p.tier===t).length===d.meta.tierSummary[t==="A"?"A0":t==="B"?"B0":t==="C"?"C0":t],"tier count "+t);
ok(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"XI");
const shape={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const pos of positions)ok(d.bestXi.filter(x=>x.position===pos).length===(shape[pos]||0),"XI "+pos);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);ok(p&&p.position===x.position&&x.status==="proposed_unapproved","XI slot "+x.playerId)}
console.log(JSON.stringify({status:errs.length?"FAIL":"PASS",errors:errs,clubs:expected.length,players:d.players.length,starters:d.players.filter(x=>x.role==="starter").length,backups:d.players.filter(x=>x.role==="backup").length,birthdatesMissing:d.players.filter(x=>x.born===null).length,top:tc,world:wc,bestXI:d.bestXi.length,fullHistoricalVerified:d.players.filter(x=>x.verificationStatus==="verified").length,notes:"Structural only; not 3-season independent historical verification."},null,2));
if(errs.length)process.exitCode=1;
