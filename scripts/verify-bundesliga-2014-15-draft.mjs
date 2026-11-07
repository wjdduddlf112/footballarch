// Football Archive Bundesliga 2014-15: STRUCTURAL only, not historical qualitative certification.
import {readFileSync} from "node:fs";
const data=JSON.parse(readFileSync("data/bundesliga-2014-15.json","utf8"));
const archive=JSON.parse(readFileSync("data/bundesliga-standings-verified-1999-2026.json","utf8")).seasons["2014-15"];
const clubs=["bayern","wolfsburg","gladbach","leverkusen","augsburg","schalke","dortmund"];
const pos=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const grades=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const errors=[],ok=(v,m)=>{if(!v)errors.push(m)};
ok(data.meta.season==="2014-15"&&data.meta.leagueId==="bundesliga"&&data.meta.status==="draft"&&data.meta.dataStatus==="draft_unapproved","season draft metadata");
ok(data.meta.bestXiReview.status==="proposed_unapproved","BestXI approval");
ok(JSON.stringify(data.standings)===JSON.stringify(archive.standings),"league standings not equal archive");
ok(data.qualifiers.length===7&&clubs.every(c=>data.qualifiers.some(q=>q.club===c)),"actual European club scope");
ok(data.qualifiers.every(q=>q.competition===archive.europeanParticipation[q.club]),"UEFA actual entries");
ok(data.players.length===data.meta.candidateCount&&data.players.length>100,"player count");
const ids=new Set(),perClubPosition={},tierCounts=Object.fromEntries(grades.map(t=>[t,0]));
for(const p of data.players){
 ok(!ids.has(p.id),"duplicate ID "+p.id);ids.add(p.id);
 ok(clubs.includes(p.club)&&p.season==="2014-15","wrong player club/season "+p.id);
 ok(pos.includes(p.position)&&["starter","backup"].includes(p.role),"role/position "+p.id);
 if(p.role==="backup"){let key=p.club+"/"+p.position;perClubPosition[key]=(perClubPosition[key]||0)+1;ok(perClubPosition[key]<=1,"excess backup "+key);}
 ok(p.nameKo&&p.nameOriginal&&p.clubNameOriginal,"missing name "+p.id);
 ok(p.born===null||/^\d{4}-\d{2}-\d{2}$/.test(p.born),"birthdate format "+p.id);
 ok(["verified","partially_verified","evidence_pending","conflicting_sources"].includes(p.verificationStatus),"verification enum "+p.id);
 ok(p.review==="draft_unapproved","false user approval "+p.id);
 ok(p.tier===null||grades.includes(p.tier),"grade enum "+p.id);
 if(grades.includes(p.tier))tierCounts[p.tier]++;
 const n=p.leagueAppearances,s=p.leagueStarts,m=p.leagueMinutes;
 ok(Number.isInteger(n)&&n>=1&&Number.isInteger(s)&&s<=n&&Number.isInteger(m)&&m<=n*90+120,"games/minutes "+p.id);
 const records=p.threeSeasonReview?.records||{};
 ok(["2012-13","2013-14","2014-15"].every(y=>Object.hasOwn(records,y))&&Object.keys(records).length===3,"3-year keys "+p.id);
 ok(Boolean(records["2014-15"]?.source),"current-year evidence "+p.id);
 if(p.verificationStatus==="verified")ok(["2012-13","2013-14"].every(y=>records[y]?.verification!=="evidence_pending"&&records[y]?.verification!=="prior_FootballArchive_DRAFT_not_independently_verified"),"falsely fully verified");
}
for(const z of pos){
 const group=data.players.filter(p=>p.position===z).sort((a,b)=>(a.rank??999)-(b.rank??999));
 ok(group.every((p,i)=>p.rank===i+1),"position rank sequence "+z);
 ok(group.every((p,i)=>i===0||grades.indexOf(group[i-1].tier)<=grades.indexOf(p.tier)),"tier/rank inversion "+z);
}
for(const t of grades)ok(data.meta.tierSummary[({A:"A0",B:"B0",C:"C0"}[t]||t)]===tierCounts[t],"tier summary "+t);
ok(data.meta.worldClassCount===tierCounts.S+tierCounts["A+"],"World class tally");
ok(data.meta.leagueTopClassCount===tierCounts.S+tierCounts["A+"]+tierCounts.A+tierCounts["A-"],"Top Class tally");
const xi=data.bestXi;
ok(xi.length===11&&new Set(xi.map(x=>x.playerId)).size===11,"XI exactly 11 unique");
const shape={GK:1,CB:2,LB:1,RB:1,DM:1,CM:1,CAM:1,LW:1,RW:1,ST:1};
for(const z of pos)ok(xi.filter(x=>x.position===z).length===shape[z],"XI slot count "+z);
for(const x of xi)ok(data.players.some(p=>p.id===x.playerId&&p.position===x.position)&&x.status==="proposed_unapproved","XI reference/approval "+x.playerId);
// No cap on starters. It is permissible to have multiple starter-equivalent players at a position.
console.log(JSON.stringify({status:errors.length?"FAIL":"PASS",errors,players:data.players.length,qualifiedClubs:clubs.length,world:data.meta.worldClassCount,top:data.meta.leagueTopClassCount,bestXI:xi.length,fullyIndependentThreeSeasonVerified:0},null,2));
if(errors.length)process.exitCode=1;
