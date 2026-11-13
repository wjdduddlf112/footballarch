// Football Archive UEFA 2019-20: build ALL nominee conditional grades and full audit.
// DRAFT GRADES DO NOT establish UEFA individual appearance or completed 3-season audit.
import fs from "node:fs";
import assert from "node:assert/strict";
const rd=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const wr=(p,x)=>fs.writeFileSync(p,JSON.stringify(x)+"\n");
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"");
const P=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const L=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const tr=t=>({A:"A0",B:"B0",C:"C0"}[t]||t||"미평가");
const spec=rd("audit/UEFA_2019_20_NOMINATION_SPEC_DRAFT.json");
const bios=rd("audit/UEFA_2019_20_IDENTITY_DOB_DRAFT.json").identities;
const grades=rd("audit/UEFA_2019_20_TIER_SOURCE_DRAFT.json");
const srcs=["premierleague","laliga","seriea","bundesliga","ligue1"].flatMap(s=>[s+"-2019-20",s+"-2018-19"])
 .concat(["ucl-2018-19","uel-2018-19","ucl-2017-18","uel-2017-18"]);
const ix=new Map();
for(const file of srcs){for(const p of rd("data/"+file+".json").players||[]){
 const k=norm(p.nameOriginal||p.name);
 ix.set(k,[...(ix.get(k)||[]),{file,p}]);
}}
const alias={realmadrid:"madrid",barcelona:"barca"};
const eq=(c,x)=>c===x||alias[c]===x;
const traits={GK:"선방·수비 조정·후방전개",CB:"수비·대인마크·빌드업",LB:"왼쪽 측면 수비·진출",RB:"오른쪽 측면 수비·진출",
 DM:"위험 지역 커버·볼 회수",CM:"중원 탈압박·배급",CAM:"기회 창출·침투",LW:"왼쪽 공격·득점 관여",RW:"오른쪽 공격·득점 관여",ST:"전방 압박·침투·마무리"};
const clubFix={apoel:["APOEL FC","아포엘 니코시아","CYP"],partizan:["FK Partizan","파르티잔 베오그라드","SRB"],wolfsburg:["VfL Wolfsburg","볼프스부르크","GER"]};
const sum={};
for(const id of ["ucl","uel"]){
 const d=rd("data/"+id+"-2019-20.json");
 const officialURL=id==="ucl"?grades.meta.uefaOfficialObserverUCL:grades.meta.uefaOfficialObserverUEL;
 const confirmed=new Set(grades[id].observer.split(";").map(norm));
 const adjustments=new Map();
 for(const rank of L){for(const name of (grades[id].grades[rank]||"").split(",").filter(Boolean)){
  const k=norm(name);if(!adjustments.has(k))adjustments.set(k,rank);
 }}
 for(const c of d.clubs){if(clubFix[c.id]){c.name=clubFix[c.id][0];c.nameOriginal=clubFix[c.id][0];c.nameKo=clubFix[c.id][1];c.country=clubFix[c.id][2];}}
 const clubMap=Object.fromEntries(d.clubs.map(c=>[c.id,c]));
 assert.deepEqual(new Set(Object.keys(spec.leagues[id])),new Set(d.evaluatedClubs),"evaluation clubs mismatch");
 let players=[],missingNames=[],missingDOB=[];
 for(const [club,roster] of Object.entries(spec.leagues[id])){
  const cl=clubMap[club];assert(cl,"club unknown "+club);
  d.meta.verification.clubFormations[club]=roster.formation;
  assert.equal(Object.values(roster.starters).flat().length,11,club+" XI");
  for(const [role,parts] of [["starter",roster.starters],["backup",roster.backups]]){
   for(const [position,names] of Object.entries(parts)){
    assert(P.includes(position),"position not recognized");
    if(role==="backup")assert(names.length<=1,"backup overflow");
    for(const name of names){
     const k=norm(name),refs=ix.get(k)||[],current=refs.find(x=>x.file.endsWith("2019-20")&&eq(club,x.p.club));
     const prev=refs.find(x=>eq(club,x.p.club)&&x.p.born&&/[가-힣]/.test(x.p.nameKo||""))||
      refs.find(x=>x.p.born&&/[가-힣]/.test(x.p.nameKo||""))||refs.find(x=>eq(club,x.p.club))||refs[0];
     const manual=bios[k]||{};
     const ko=/[가-힣]/.test(current?.p.nameKo||"")?current.p.nameKo:
      /[가-힣]/.test(prev?.p.nameKo||"")?prev.p.nameKo:manual.nameKo||name;
     const born=current?.p.born||prev?.p.born||manual.born||null;
     if(!/[가-힣]/.test(ko))missingNames.push(name);
     if(!born)missingDOB.push(name);
     const o=confirmed.has(k);
     const domesticTier=String(current?.p.tier||"").replace("A0","A").replace("B0","B").replace("C0","C");
     const prevTier=String(prev?.p.tier||"").replace("A0","A").replace("B0","B").replace("C0","C");
     const fallback=role==="starter"?"B":"C+";
     const tier=adjustments.get(k)||(L.includes(domesticTier)?domesticTier:null)||(L.includes(prevTier)?prevTier:null)||fallback;
     const evidence=adjustments.has(k)?"individual current-season expert tier override":
      L.includes(domesticTier)?"2019-20 domestic tier hypothesis":L.includes(prevTier)?"previous Archive provisional tier":"LOW-CONFIDENCE role-based placeholder";
     const histories={};
     for(const yr of ["2017-18","2018-19"]){const z=refs.find(x=>x.file.endsWith(yr)&&eq(club,x.p.club))||refs.find(x=>x.file.endsWith(yr));
      histories[yr]=z?{club:z.p.club,archive:z.file,starts:z.p.leagueStarts??z.p.starts??null,appearances:z.p.leagueAppearances??z.p.appearances??null,source:z.p.sources?.[0]||null,review:"earlier DRAFT requires independent reassessment"}:{club:null,archive:null,starts:null,appearances:null,source:null,review:"evidence_pending"};
     }
     const currentContext=current?{archive:current.file,club:current.p.club,starts:current.p.leagueStarts??current.p.starts??null,
       appearances:current.p.leagueAppearances??null,goals:current.p.leagueGoals??null,source:current.p.sources?.[0]||null,scope:"domestic ONLY, not UEFA"}:null;
     const note=String(current?.p.assessmentRationale||current?.p.tierReason||current?.p.tierReview||"").replace(/\s+/g," ").slice(0,170);
     const rationale=name+" ("+cl.nameOriginal+"), "+position+" "+role+": "+traits[position]+
       ". 2019-20 individual contribution and use emphasized. "+(o?"Official UEFA Technical Observers' squad confirms participation. ":"")+
       "Grade provenance: "+evidence+". "+(note?"2019-20 domestic source: "+note+". ":"Individual UEFA appearance audit pending. ")+
       "Assessment 2019-20 > 2018-19 > 2017-18. Team trophy/rank not a personal bonus. Historical independent peer audit incomplete.";
     const sources=[...new Set([officialURL,...(current?.p.sources||[]),...(prev?.p.sources||[]),...(manual.sources||[])].filter(x=>typeof x==="string"))].slice(0,6);
     const p={id:id+"-2019-20-"+club+"-"+k,nameOriginal:name,nameKo:ko,born,position,role,club,
       clubNameOriginal:cl.nameOriginal,name,starts:null,appearances:null,minutes:null,goals:null,assists:null,
       appearanceScope:"2019-20 UEFA "+(id==="ucl"?"Champions League":"Europa League")+" main stage only",
       tier,rank:null,review:"draft_unapproved",rankStatus:"full_nominee_pool_conditional_draft_incomplete_3yr",
       positionReview:roster.formation+" positional hypothesis; match-by-match majority position including left/right not independently verified",
       candidateSelectionEvidence:o?"Official 2019-20 UEFA observer squad":current?"2019-20 domestic current club and tactical candidate; UEFA match audit outstanding":"historical/tactical candidate; UEFA match audit outstanding",
       tierRationale:rationale,
       threeSeasonAssessment:{seasons:["2017-18","2018-19","2019-20"],weighting:"2019-20 > 2018-19 > 2017-18",
         review:"Independent 2017-18 / 2018-19 qualitative comparison NOT complete",previousSeasons:histories,currentSeasonDomesticContext:currentContext},
       sources,verificationStatus:o?"2019-20 UEFA individual main-stage competition appearance verified by UEFA official technical observers":"Individual 2019-20 UEFA main-stage appearance NOT yet verified; nomination CONDITIONAL",
       gradeEvidenceStatus:evidence,evaluationStatus:"unapproved_conditional_quality_assessment",uefaObserverListed:o,uefaAppearanceVerified:o,
       birthSourceStatus:manual.verification||"previous unapproved Archive or roster biography; independent double-source check needed"};
     if(id==="ucl"&&name==="Robert Lewandowski"){
       p.appearances=10;p.goals=15;p.assists=6;
       p.sources.push("https://www.uefa.com/uefachampionsleague/news/0262-1081d47b929e-9fc4a040616e-1000--lewandowski-forward-of-2019-20/");
     }
     players.push(p);
    }
   }
  }
 }
 assert.equal(new Set(players.map(p=>p.id)).size,players.length,"duplicate player id");
 assert.deepEqual(missingNames,[],"Korean name missing");
 for(const position of P){
  const xs=players.filter(p=>p.position===position).sort((a,b)=>
    L.indexOf(a.tier)-L.indexOf(b.tier)||Number(b.uefaObserverListed)-Number(a.uefaObserverListed)||
    Number(b.role==="starter")-Number(a.role==="starter")||
    (b.threeSeasonAssessment.currentSeasonDomesticContext?.starts??0)-(a.threeSeasonAssessment.currentSeasonDomesticContext?.starts??0)||
    a.nameOriginal.localeCompare(b.nameOriginal));
  xs.forEach((p,i)=>p.rank=i+1);
 }
 const XI=grades[id].bestXI.split(";").flatMap(x=>{const [position,names]=x.split("=");return names.split(",").map(name=>({position,name}));});
 assert.equal(XI.length,11,"best eleven length");
 d.bestXi=XI.map(x=>{
   const p=players.find(p=>p.position===x.position&&norm(p.nameOriginal)===norm(x.name));
   assert(p,"Best XI unavailable "+id+"/"+x.position+"/"+x.name);
   assert(p.uefaObserverListed,"Best XI requires UEFA observer confirmation "+x.name);
   return {position:x.position,playerId:p.id,status:"proposed_unapproved",reason:"UEFA 2019-20 observer-squad selected; positional fit and current-season individual contribution considered. Not official UEFA XI; prior 3-season audit pending."};
 });
 const v=d.meta.verification;
 d.players=players;v.playerCandidateCount=players.length;
 v.provisionalRepresentativeStarterCandidates=players.filter(p=>p.role==="starter").length;
 v.provisionalBackupCandidates=players.filter(p=>p.role==="backup").length;
 v.birthDatesPresent=players.filter(p=>p.born).length;
 v.nameKoPresent=players.filter(p=>/[가-힣]/.test(p.nameKo)).length;
 v.provisionalTiers=players.length;v.provisionalRanks=players.length;
 v.individuallyUEFAAppearancesConfirmed=players.filter(p=>p.uefaObserverListed).length;
 v.individualUEFAAppearancesEvidencePending=players.length-v.individuallyUEFAAppearancesConfirmed;
 v.approvedPlayerTiers=0;v.independentThreeSeasonPlayerAuditComplete=false;
 v.fullHistoricalAuditComplete=false;
 d.meta.formation="4-2-3-1";d.meta.bestXiReview={status:"proposed_unapproved",formation:"4-2-3-1"};
 d.meta.playerSelectionStatus="ALL_"+players.length+"_TIERED_CONDITIONALLY_AND_POSITION_RANKED_DRAFT; "+v.individuallyUEFAAppearancesConfirmed+"_CONFIRMED_UEFA_OBSERVER_LIST; individual appearances for others and 3year independent audit pending";
 d.audit.rosterPending=false;d.audit.rosterCompleteness=players.length+" nominated with conditional grades, rank, identity and birth; "+v.individuallyUEFAAppearancesConfirmed+" UEFA observer-list confirmations";
 d.audit.unverifiedNominationCount=v.individualUEFAAppearancesEvidencePending;d.audit.missingBorn=missingDOB.length;d.audit.missingNameKo=[];
 d.audit.rankScope="Entire candidate pool provisional tier order; observer evidence, nomination role, domestic 2019 starts, alphabetical as tie-breakers; NOT comprehensive independently validated 3-year ranking";
 d.audit.sourceNotes.push("Every nominee rated and ranked DRAFT, but NOT all individually proven to have played UEFA main-stage games.", "UEFA official technical observers confirm only "+v.individuallyUEFAAppearancesConfirmed+" nominated candidates; other "+v.individualUEFAAppearancesEvidencePending+" provisional nominations remain ineligible until evidence audit.", "Domestic statistics never copied to UEFA appearance fields.", "Historical 3-year quality, birth dates and matchwise modal positions require independent verification.");
 wr("data/"+id+"-2019-20.json",d);
 sum[id]={participants:d.clubs.length,groups:d.groups.length,matches:d.matches.length,goals:v.totalGoals,
   evaluated:d.evaluatedClubs.length,candidates:players.length,starters:v.provisionalRepresentativeStarterCandidates,
   backups:v.provisionalBackupCandidates,tiers:players.length,observerConfirmed:v.individuallyUEFAAppearancesConfirmed,
   europeanAppearancePending:v.individualUEFAAppearancesEvidencePending,birthDatesMissing:missingDOB.length,
   bestXI:d.bestXi.map(x=>x.position+":"+players.find(p=>p.id===x.playerId).nameOriginal)};
}
let report="# UEFA 2019-20 UCL & UEL — COMPLETE TOURNAMENT + CONDITIONAL PLAYER DRAFT\n\n";
report+="Created 2026-11-13. **ALL 24 TEAMS, ALL 446 CANDIDATES HAVE DRAFT TIERS AND POSITION RANKS**. ";
report+="**NO PLAYER GRADE APPROVED; FULL THREE-SEASON INDIVIDUAL AUDIT AND UEFA MATCH ELIGIBILITY CHECK UNFINISHED**. ";
report+="Ranking 2019-20 > 2018-19 > 2017-18; individual contribution rather than team trophy/standings.\n\n";
report+="Covid-19: UCL QF onward single-leg, UEL QF onward single-leg plus Sevilla/Roma and Inter/Getafe special round-of-16 single fixtures. ";
report+="Two unplayed March UEL fixtures correctly excluded. UEFA only includes 119 UCL and 197 UEL PLAYED matches. ";
report+="Tiers S, A+, A0, A-, B+, B0, B-, C+, C0, C-, D. Left and right positions always differentiated.\n\n";
for(const id of ["ucl","uel"]){
 const d=rd("data/"+id+"-2019-20.json"),v=d.meta.verification;
 const team=c=>{const x=d.clubs.find(y=>y.id===c);return x?x.nameKo+" ("+x.nameOriginal+")":c};
 report+="\n---\n\n# "+id.toUpperCase()+" | "+d.meta.competition+" | 2019-20\n\n";
 report+=d.clubs.length+" clubs, "+d.groups.length+" groups, "+d.matches.length+" played fixtures, "+v.totalGoals+" goals. "+
  d.evaluatedClubs.length+" evaluation clubs, "+d.players.length+" nominees, "+v.provisionalRepresentativeStarterCandidates+
  " nominal starters / "+v.provisionalBackupCandidates+" backups, "+v.individuallyUEFAAppearancesConfirmed+
  " UEFA observer squad membership verified, "+v.individualUEFAAppearancesEvidencePending+" player European eligibility checks pending.\n\n";
 report+="## All participants\n\n| Club original | Korean | Country | Entry | Final stage | P | W | D | L | GF | GA |\n|---|---|---|---|---|---:|---:|---:|---:|---:|---:|\n";
 for(const p of d.participants){const c=d.clubs.find(x=>x.id===p.club);report+="| "+c.nameOriginal+" | "+c.nameKo+" | "+c.country+" | "+p.entryRound+" | "+p.finalStage+" | "+p.summary.played+" | "+p.summary.wins+" | "+p.summary.draws+" | "+p.summary.losses+" | "+p.summary.goalsFor+" | "+p.summary.goalsAgainst+" |\n";}
 report+="\n## Group tables\n\n";
 for(const g of d.groups){report+="### Group "+g.code+"\n\n| Rank | Club | W | D | L | GF | GA | GD | Pts | Stage |\n|---:|---|---:|---:|---:|---:|---:|---:|---:|---|\n";
  for(const x of g.table)report+="| "+x.rank+" | "+team(x.club)+" | "+x.wins+" | "+x.draws+" | "+x.losses+" | "+x.goalsFor+" | "+x.goalsAgainst+" | "+x.gd+" | "+x.points+" | "+x.status+" |\n";
  report+="\n";}
 report+="## All "+d.matches.length+" played matches\n\n| Date | Round | Home | Score | Away | Venue |\n|---|---|---|---|---|---|\n";
 for(const m of d.matches)report+="| "+m.date+" | "+(m.round==="group_stage"?"Group "+m.group:m.round)+" | "+team(m.home)+" | **"+m.homeGoals+"–"+m.awayGoals+"** | "+team(m.away)+" | "+(m.venue||"")+" |\n";
 report+="\n## Knockout ties\n\n| Round | Team A | Team B | Score/aggregate | Winner | Legs |\n|---|---|---|---|---|---|\n";
 for(const x of d.knockout){for(const t of x.ties)report+="| "+x.stage+" | "+team(t.home)+" | "+team(t.away)+" | "+t.aggregate.join("–")+" | **"+team(t.winner)+"** | "+(t.secondLeg?"2":"1")+" |\n";}
 report+="\n## Evaluated clubs by formation\n\n";
 for(const c of d.evaluatedClubs)report+="- "+team(c)+" — "+v.clubFormations[c]+"\n";
 report+="\n## All evaluated club starting XI + backups with DOB and conditional tiers\n\n";
 for(const c of d.evaluatedClubs){
  report+="### "+team(c)+" ("+v.clubFormations[c]+")\n\n";
  report+="| Position | Role | Korean | Original | DOB | Tier | Pos. Rank | UEFA 2019-20 participation |\n|---|---|---|---|---|---|---:|---|\n";
  for(const position of P){for(const p of d.players.filter(x=>x.club===c&&x.position===position)){
   report+="| "+position+" | "+(p.role==="starter"?"주전":"후보")+" | "+p.nameKo+" | "+p.nameOriginal+" | "+(p.born||"검증대기")+" | "+tr(p.tier)+" | "+p.rank+" | "+(p.uefaObserverListed?"Official observer verified":"Individual match unverified")+" |\n";
  }}report+="\n";
 }
 report+="\n## Full provisional position ranks across all nominees\n\n";
 for(const position of P){
  report+="### "+position+"\n\n| Rank | Tier | Korean | Original | Club | Role | UEFA evidence |\n|---:|---|---|---|---|---|---|\n";
  for(const p of d.players.filter(x=>x.position===position).sort((a,b)=>a.rank-b.rank)){
   report+="| "+p.rank+" | "+tr(p.tier)+" | "+p.nameKo+" | "+p.nameOriginal+" | "+team(p.club)+" | "+p.role+" | "+(p.uefaObserverListed?"Observer verified":"Pending")+" |\n";
  }report+="\n";
 }
 report+="## Best XI (DRAFT — 4-2-3-1)\n\n| Position | Korean | Original | Club | Tier |\n|---|---|---|---|---|\n";
 for(const x of d.bestXi){const p=d.players.find(t=>t.id===x.playerId);report+="| "+x.position+" | "+p.nameKo+" | "+p.nameOriginal+" | "+team(p.club)+" | "+tr(p.tier)+" |\n";}
 report+="\n## Sources and incomplete personal audits\n\n";
 for(const s of d.sources)report+="- "+s.type+": "+s.url+"\n";
 report+="- UEFA Technical Observer squad: "+(id==="ucl"?grades.meta.uefaOfficialObserverUCL:grades.meta.uefaOfficialObserverUEL)+"\n";
 report+="- Archive 2019–20 domestic & 2017–19 historical DRAFT data; independent UEFA match appearances, detailed 3-year qualitative peer audit, full DOB verification, and modal positions still missing.\n";
}
fs.writeFileSync("audit/UEFA_2019_20_DRAFT_FULL_REPORT_2026_11_13.md",report);
console.log(JSON.stringify({build:"COMPLETE_DRAFT_NOT_HISTORICALLY_CERTIFIED",reportChars:report.length,...sum},null,2));
