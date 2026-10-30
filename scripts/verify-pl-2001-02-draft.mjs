// PL 2001-02 draft structural gate. Historic playing-position source audit is separate.
// Run: node scripts/verify-pl-2001-02-draft.mjs
import {readFileSync} from "node:fs";
const d=JSON.parse(readFileSync("data/premierleague-2001-02.json","utf8"));
const errors=[],qualified={arsenal:"UCL",liverpool:"UCL",manutd:"UCL",newcastle:"UCL",leeds:"UEFA Cup",chelsea:"UEFA Cup",blackburn:"UEFA Cup",ipswich:"UEFA Cup",fulham:"Intertoto Cup",astonvilla:"Intertoto Cup"};
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const tiers=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const slots={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,LW:1,RW:1,ST:2};
const byClub=new Set(d.qualifiers.map(q=>q.club));
if(d.meta?.leagueId!=="premierleague"||d.meta?.season!=="2001-02"||d.meta?.status!=="draft")errors.push("wrong season/status");
if(d.standings.length!==20||d.standings.some((r,i)=>r.rank!==i+1))errors.push("incorrect standings");
if(byClub.size!==10||Object.keys(qualified).some(c=>!byClub.has(c))||d.qualifiers.some(q=>qualified[q.club]!==q.competition))errors.push("European entrants mismatch");
if(d.standings.some(r=>(r.competition||null)!==(qualified[r.club]||null)))errors.push("standings competition parity");
if(d.players.length!==163)errors.push("expected 163 new nominees");
const ids=new Set(),named=new Set(),counts={},starters={},byPos={};
for(const p of d.players){
 if(ids.has(p.id))errors.push("duplicate ID "+p.id);ids.add(p.id);
 const key=p.club+"/"+p.nameOriginal;if(named.has(key))errors.push("duplicate player "+key);named.add(key);
 if(!byClub.has(p.club)||!pos.includes(p.position))errors.push("invalid team/position "+key);
 if(!p.nameKo||!p.nameOriginal||!p.clubNameOriginal)errors.push("missing names "+key);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(p.born||"")||new Date(p.born+"T00:00:00Z").toISOString().slice(0,10)!==p.born)errors.push("invalid DOB "+key);
 if(!Number.isInteger(p.leagueStarts)||p.leagueStarts<0||p.leagueStarts>38)errors.push("missing/invalid current league starts "+key);
 if(!tiers.includes(p.tier)||!p.assessmentRationale||p.review!=="draft_unapproved")errors.push("tier or evidence missing "+key);
 if(!Number.isInteger(p.rank)||p.rank<1)errors.push("rank missing "+key);
 (byPos[p.position]??=[]).push(p);
 const k=p.club+"/"+p.position;counts[k]=(counts[k]||0)+1;if(counts[k]>(["CB","CM","ST"].includes(p.position)?3:2))errors.push("position limit "+k);
 if(p.role==="starter")starters[p.club]=(starters[p.club]||0)+1;
}
for(const [position,players] of Object.entries(byPos)){
 const x=players.sort((a,b)=>a.rank-b.rank);
 if(x.some((p,i)=>p.rank!==i+1))errors.push("rank gaps/dup "+position);
 if(x.some((p,i)=>i&&tiers.indexOf(p.tier)<tiers.indexOf(x[i-1].tier)))errors.push("tier-rank inversion "+position);
}
if(Object.keys(qualified).some(c=>starters[c]!==11))errors.push("nominal team starter count");
if(d.bestXi?.length!==11||new Set(d.bestXi.map(x=>x.playerId)).size!==11||d.bestXi.some(x=>!ids.has(x.playerId)))errors.push("XI invalid refs");
for(const [position,n] of Object.entries(slots))if(d.bestXi.filter(x=>x.position===position).length!==n)errors.push("XI formation "+position);
if(d.meta.bestXiReview?.status!=="proposed_unapproved")errors.push("XI review stage invalid");
const wc=d.players.filter(p=>["S","A+"].includes(p.tier)).length;
const top=d.players.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
if(wc!==14||top!==38)errors.push("world/top classification mismatch");
const result={passed:errors.length===0,scope:"data_structure_only_historical_3season_audit_incomplete",players:d.players.length,tiers:d.players.filter(p=>p.tier).length,ranks:d.players.filter(p=>p.rank!=null).length,leagueStartsKnown:d.players.filter(p=>p.leagueStarts!=null).length,worldClass:wc,leagueTopClass:top,bestXi:d.bestXi.length,browser:"SEPARATE_GATE",errors};
process.stdout.write(JSON.stringify(result,null,2)+"\n");
if(errors.length)process.exitCode=1;
