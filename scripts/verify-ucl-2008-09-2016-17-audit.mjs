// Main-phase factual validation; tactical/three-season review remains held.
import fs from "node:fs";
import { pathToFileURL } from "node:url";
export const expected={
  "2008-09": [
    292,
    329,
    989,
    8
  ],
  "2009-10": [
    288,
    320,
    1247,
    6
  ],
  "2010-11": [
    288,
    355,
    1062,
    8
  ],
  "2011-12": [
    287,
    345,
    1060,
    5
  ],
  "2012-13": [
    283,
    368,
    1160,
    11
  ],
  "2013-14": [
    297,
    362,
    1135,
    11
  ],
  "2014-15": [
    302,
    361,
    1049,
    9
  ],
  "2015-16": [
    290,
    347,
    778,
    13
  ],
  "2016-17": [
    295,
    380,
    840,
    15
  ]
};
export function validateUclAudit(d,expected){
 const s=d.meta.season,[rows,goals,fields,heldCount]=expected[s],errors=[],held=[],check=(v,label)=>{if(!v)errors.push(label)},same=(a,b)=>JSON.stringify(a)===JSON.stringify(b),unique=a=>new Set(a).size===a.length,sorted=a=>[...a].sort(),eligible=p=>!/^(?:not_eligible|ineligible)/.test(p.eligibilityStatus||"");
 const ids=new Set(d.clubs.map(c=>c.id)),pids=new Map(d.players.map(p=>[p.id,p])),audit=d.audit.uclHistoricalPatch;
 check(d.meta.competitionId==="ucl"&&d.clubs.length===32&&ids.size===32&&d.participants.length===32&&unique(d.participants.map(p=>p.club)),"club/participant count");
 check(d.matches.length===125&&unique(d.matches.map(m=>m.id)),"match count/IDs");
 check(d.matches.filter(m=>m.round==="group_stage").length===96&&d.matches.filter(m=>m.round!=="group_stage").length===29,"group/KO count");
 check(d.matches.reduce((n,m)=>n+m.homeGoals+m.awayGoals,0)===goals,"goal sum");
 for(const m of d.matches)check(ids.has(m.home)&&ids.has(m.away)&&m.home!==m.away&&[m.homeGoals,m.awayGoals].every(x=>Number.isInteger(x)&&x>=0),"match "+m.id);
 check(d.groups.length===8&&unique(d.groups.flatMap(g=>g.table.map(t=>t.club)))&&d.groups.flatMap(g=>g.table).length===32,"groups");
 for(const g of d.groups){const cs=new Set(g.table.map(t=>t.club));const gm=d.matches.filter(m=>m.round==="group_stage"&&cs.has(m.home)&&cs.has(m.away));check(g.table.length===4&&gm.length===12,"group count "+g.code);for(const t of g.table){const ms=gm.filter(m=>m.home===t.club||m.away===t.club);let w=0,draw=0,gf=0,ga=0;for(const m of ms){const a=m.home===t.club?m.homeGoals:m.awayGoals,b=m.home===t.club?m.awayGoals:m.homeGoals;gf+=a;ga+=b;if(a>b)w++;else if(a===b)draw++}check(same([t.played,t.wins,t.draws,t.losses,t.goalsFor,t.goalsAgainst,t.gd,t.points],[6,w,draw,6-w-draw,gf,ga,gf-ga,3*w+draw])&&ms.length===6,"standing "+g.code+" "+t.club)}}
 check(d.evaluatedClubs.length===16&&same(sorted(d.evaluatedClubs),sorted(d.groups.flatMap(g=>g.table.slice(0,2).map(t=>t.club)))),"evaluated club set");
 const f=d.knockout.find(k=>k.stage==="final"),m=d.matches.find(m=>m.round==="final"),pk=x=>x==null?null:Array.isArray(x)?x:[x.home,x.away];check(f.home===m.home&&f.away===m.away&&same(f.score,[m.homeGoals,m.awayGoals])&&same(pk(f.penalties),pk(m.penaltyShootout))&&m.neutral===true,"final home/away/score/PK");
 check(f.winner===(m.homeGoals>m.awayGoals?m.home:m.awayGoals>m.homeGoals?m.away:pk(m.penaltyShootout)?.[0]>pk(m.penaltyShootout)?.[1]?m.home:m.away),"final winner");
 for(const st of d.knockout){for(const t of st.ties||[]){const legs=[t.firstLeg,t.secondLeg].filter(Boolean);let a=0,b=0;for(const leg of legs){const match=d.matches.find(m=>m.round===st.stage&&m.home===leg.home&&m.away===leg.away&&m.date===leg.date);check(match&&same(leg.score,[match.homeGoals,match.awayGoals]),"KO leg "+st.stage+" "+leg.home+" "+leg.away);a+=leg.home===t.home?leg.score[0]:leg.score[1];b+=leg.home===t.home?leg.score[1]:leg.score[0]}check(same(t.aggregate,[a,b]),"KO aggregate "+st.stage+" "+t.home+" "+t.away)}}
 check(d.players.length===rows&&pids.size===rows,"candidate row IDs");
 for(const p of d.players){check(d.evaluatedClubs.includes(p.club)&&p.nameKo&&p.nameOriginal,"candidate identity "+p.id);check(p.born==null||/^\d{4}-\d{2}-\d{2}$/.test(p.born),"DOB "+p.id);for(const k of ["appearances","starts","minutes","goals","assists","goalsConceded"])check(p[k]==null||Number.isInteger(p[k])&&p[k]>=0,"stat "+p.id+" "+k);check(p.starts==null||p.appearances==null||p.starts<=p.appearances,"starts>apps "+p.id);if(audit.fieldSources["player:"+p.id]?.["/assists"])check(p.assistsProvider&&p.assists!=null,"assist source "+p.id)}
 // These exact existing nomination anomalies require the held tactical-role review.
 // They are reported explicitly; new/changed anomalies fail validation.
 const allowedHeld={"2010-11:shakhtar:ST":[1,2],"2011-12:leverkusen:RB":[1,2],"2011-12:bayern:LB":[0,1],"2011-12:inter:LW":[0,1],"2011-12:cska:CAM":[0,1],"2011-12:leverkusen:CAM":[0,1],"2011-12:barcelona:CAM":[0,1],"2012-13:bayern:CAM":[0,1],"2012-13:galatasaray:CAM":[0,1],"2013-14:galatasaray:LW":[0,1],"2013-14:psg:CAM":[0,1],"2013-14:atleti:CAM":[0,1],"2014-15:atleti:CAM":[0,1],"2014-15:psg:LW":[0,1],"2014-15:psg:RW":[0,1],"2014-15:porto:CAM":[0,1],"2016-17:realmadrid:CAM":[0,1]};
 for(const c of d.evaluatedClubs){const ps=d.players.filter(p=>p.club===c&&eligible(p)),nominal=d.players.filter(p=>p.club===c&&p.role==="starter"),form=d.meta.clubFormations?.[c];check(typeof form==="string"&&form.split("-").reduce((a,b)=>a+Number(b),0)===10&&nominal.length===11&&ps.length<=22,"club formation/count "+c);for(const pos of new Set(ps.map(p=>p.position))){const slot=nominal.filter(p=>p.position===pos).length,bk=ps.filter(p=>p.position===pos&&p.role==="backup").length;if(bk>slot){const key=s+":"+c+":"+pos;if(same(allowedHeld[key],[slot,bk]))held.push({club:c,position:pos,formation:form,nominalSlots:slot,backups:bk,reason:slot===0?"Backup primary role lacks a directly matching nominal starter slot; actual tactical assignment held.":"Existing over-cap; actual tactical role/nomination review held."});else errors.push("candidate slot "+key+" "+slot+"/"+bk)}}}
 const xi=d.bestXi,base={GK:1,RB:1,CB:2,LB:1,DM:1,LW:1,RW:1,ST:1},slots=d.meta.formation==="4-3-3"?{...base,CM:2}:{...base,CM:1,CAM:1};
 check(xi.length===11&&unique(xi.map(x=>x.playerId)),"Best XI size/IDs");for(const x of xi)check(pids.has(x.playerId)&&eligible(pids.get(x.playerId)),"XI candidate "+x.playerId);
 for(const pos of new Set([...Object.keys(slots),...xi.map(x=>x.tacticalSlot||x.position)]))check(xi.filter(x=>(x.tacticalSlot||x.position)===pos).length===(slots[pos]||0),"XI formation slot "+pos);
 check(audit.counts.applied===fields&&audit.held.length===heldCount&&audit.seasonComplete===false,"audit counts/status");let refs=0;for(const fs of Object.values(audit.fieldSources))for(const src of Object.values(fs)){refs++;check(src.length>0&&src.every(x=>audit.sources[x]?.url),"source reference")};check(refs===fields,"field source count");
 for(const h of audit.held)check(h.status==="held"&&h.reason&&h.sources.every(x=>audit.sources[x]?.url),"held source/reason");
 if(s==="2013-14"){check(d.meta.bestXiReview.status==="approved"&&d.meta.bestXiReview.userApprovedOn==="2026-11-20"&&d.meta.bestXiReview.userApprovalScope.includes("provisional_player_rating_draft"),"existing limited user approval");const g=d.matches.find(m=>m.id==="ucl-2013-14-088");check(g.startedDate==="2013-12-10"&&g.date==="2013-12-11","resumed match")}
 return {season:s,errors,held,candidates:rows,eligible:d.players.filter(eligible).length,fields,heldCount,matches:125,goals};
}
if (process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
 const seasons=process.argv.slice(2);const results=(seasons.length?seasons:Object.keys(expected)).map(s=>validateUclAudit(JSON.parse(fs.readFileSync("data/ucl-"+s+".json","utf8")),expected));
 console.log(JSON.stringify(results,null,2));if(results.some(r=>r.errors.length))process.exit(1);
}
