// Structural consistency only; does NOT independently certify all 3 seasons' quality.
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2008-09.json","utf8"));
const v=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2008-09"].standings;
const expected=["wolfsburg","bayern","stuttgart","hertha","hsv","bremen"],pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],ok=(v,m)=>{if(!v)errors.push(m)};
ok(d.meta.status==="draft"&&d.meta.season==="2008-09","wrong draft season");
ok(d.qualifiers.length===6&&expected.every(c=>d.qualifiers.some(x=>x.club===c)),"European participants mismatch");
ok(d.players.length===117,"nominees count");
ok(JSON.stringify(d.standings)===JSON.stringify(v),"standings mismatch");
const ids=new Set(),pids=new Set(),subs={};
for(const p of d.players){
 ok(!ids.has(p.id),"duplicate id "+p.id);ids.add(p.id);
 const k=p.club+"/"+p.nameOriginal;ok(!pids.has(k),"duplicate player "+k);pids.add(k);
 ok(expected.includes(p.club)&&pos.includes(p.position),"club or position "+k);
 ok(["starter","backup"].includes(p.role)&&grades.includes(p.tier),"role/tier "+k);
 if(p.role==="backup"){const s=p.club+"/"+p.position;subs[s]=(subs[s]||0)+1;ok(subs[s]<=1,"too many backups "+s);}
 ok(Number.isInteger(p.leagueAppearances)&&p.leagueAppearances>=1&&p.leagueAppearances<=34,"apps "+k);
 ok(Number.isInteger(p.leagueStarts)&&p.leagueStarts<=p.leagueAppearances,"starts "+k);
 ok(Number.isInteger(p.leagueMinutes)&&p.leagueMinutes<=3060,"minutes "+k);
 ok(p.born===null||/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB "+k);
 ok(["partially_verified","conflicting_sources","evidence_pending"].includes(p.verificationStatus),"false verified "+k);
 ok(["2006-07","2007-08","2008-09"].every(y=>p.threeSeasonReview.records[y]),"three-year records "+k);
}
for(const z of pos){
 const a=d.players.filter(p=>p.position===z).sort((a,b)=>a.rank-b.rank);
 a.forEach((p,i)=>{ok(p.rank===i+1,"rank "+z+" "+p.nameOriginal);if(i)ok(grades.indexOf(a[i-1].tier)<=grades.indexOf(p.tier),"rank tier mismatch "+z);});
}
const wc=d.players.filter(p=>["S","A+"].includes(p.tier)).length,top=d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
ok(wc===12&&top===48,"world/top mismatch");
ok(d.bestXi.length===11&&new Set(d.bestXi.map(q=>q.playerId)).size===11,"XI size");
const shape={GK:1,CB:2,LB:1,RB:1,DM:1,CM:2,CAM:1,LW:0,RW:0,ST:2};
for(const z of pos)ok(d.bestXi.filter(q=>q.position===z).length===(shape[z]||0),"XI shape "+z);
for(const x of d.bestXi){const p=d.players.find(p=>p.id===x.playerId);ok(p&&p.position===x.position&&x.status==="proposed_unapproved","XI ref "+x.playerId);}
console.log(JSON.stringify({status:errors.length?"FAIL":"PASS",errors,players:d.players.length,clubs:6,world:wc,top,xi:d.bestXi.length,missingDOB:d.players.filter(p=>!p.born).length,qualitative3SeasonVerified:0},null,2));
if(errors.length)process.exitCode=1;
