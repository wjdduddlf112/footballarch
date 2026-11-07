import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/bundesliga-2013-14.json","utf8"));
const archive=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8"));
const season="2013-14",clubs=["bayern","dortmund","schalke","leverkusen","wolfsburg","gladbach","mainz"];
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"],tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const e=[],ok=(x,msg)=>{if(!x)e.push(msg)};
const p=d.players,ids=new Set(),roles=new Map();
ok(d.meta.leagueId==="bundesliga"&&d.meta.season===season&&d.meta.status==="draft"&&d.meta.dataStatus==="draft_unapproved","season meta DRAFT");
ok(d.meta.candidateCount===p.length,"candidate count");
ok(d.qualifiers.length===7&&d.qualifiers.every(q=>clubs.includes(q.club))&&new Set(d.qualifiers.map(q=>q.club)).size===7,"2014-15 UEFA actual seven");
ok(d.qualifiers.find(q=>q.club==="mainz")?.competition==="UEL","Mainz actually played UEL qualifying");
ok(JSON.stringify(d.standings)===JSON.stringify(archive.seasons[season].standings),"league standings shared archive mismatch");
ok(p.length>100,"squad not complete");
for(const x of p){
 ok(!ids.has(x.id),"duplicate id: "+x.id);ids.add(x.id);
 ok(clubs.includes(x.club)&&x.season===season,"club/season: "+x.id);
 ok(pos.includes(x.position),"position: "+x.id);
 ok(x.role==="starter"||x.role==="backup","role: "+x.id);
 ok(x.review==="draft_unapproved","user approved without consent: "+x.id);
 ok(["partially_verified","conflicting_sources","evidence_pending","verified"].includes(x.verificationStatus),"verification enum: "+x.id);
 ok(x.verificationStatus!=="verified","none independently three-year verified: "+x.id);
 ok(Boolean(x.nameKo&&x.nameOriginal&&x.clubNameOriginal),"missing identity: "+x.id);
 ok(x.born===null||/^\d{4}-\d{2}-\d{2}$/.test(x.born),"DOB format: "+x.id);
 const a=x.leagueAppearances,s=x.leagueStarts,m=x.leagueMinutes;
 ok([a,s,m].every(y=>Number.isInteger(y)&&y>=0)&&a>=1&&s<=a&&m<=a*90+120,"minutes/starts: "+x.id);
 const rec=x.threeSeasonReview?.records||{};
 ok(JSON.stringify(Object.keys(rec).sort())===JSON.stringify(["2011-12","2012-13","2013-14"]),"3yr year keys: "+x.id);
 ok(Boolean(rec[season]?.source),"current year source: "+x.id);
 ok(x.tier===null||tiers.includes(x.tier),"tier: "+x.id);
 if(x.role==="backup"){const key=x.club+"/"+x.position;roles.set(key,(roles.get(key)||0)+1);ok(roles.get(key)<=1,"backup count >1 "+key);}
}
// No imposed 11-starter cap: midseason role changes and injuries allow multiple starter-equivalent members.
for(const z of pos){
 const group=p.filter(x=>x.position===z).sort((a,b)=>a.rank-b.rank);
 ok(group.every((x,i)=>x.rank===i+1),"ranking sequence "+z);
 const orders=group.map(x=>x.tier===null?999:tiers.indexOf(x.tier));
 ok(orders.every((v,i)=>i===0||orders[i-1]<=v),"grade/rank inversion "+z);
}
const counts=Object.fromEntries(tiers.map(t=>[t,p.filter(x=>x.tier===t).length]));
for(const t of tiers)ok(d.meta.tierSummary[({A:"A0",B:"B0",C:"C0"}[t]||t)]===counts[t],"tier tally "+t);
ok(d.meta.worldClassCount===counts.S+counts["A+"],"World Class count");
ok(d.meta.leagueTopClassCount===counts.S+counts["A+"]+counts.A+counts["A-"],"Top Class count");
ok(d.bestXi.length===11&&new Set(d.bestXi.map(x=>x.playerId)).size===11,"XI distinct");
const shape={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1},byid=new Map(p.map(x=>[x.id,x]));
for(const z of pos)ok(d.bestXi.filter(x=>x.position===z).length===shape[z],"XI shape "+z);
for(const x of d.bestXi){ok(byid.get(x.playerId)?.position===x.position,"XI player position "+x.playerId);ok(x.status==="proposed_unapproved","XI final approval without consent");}
console.log(JSON.stringify({status:e.length?"FAIL":"PASS",errors:e,season,qualifiers:clubs.length,candidates:p.length,worldClass:d.meta.worldClassCount,leagueTopClass:d.meta.leagueTopClassCount,bestXi:d.bestXi.length,full3YearIndividualVerified:0},null,2));
if(e.length)process.exitCode=1;
