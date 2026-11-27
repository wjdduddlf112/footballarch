(function(){
"use strict";
const $=id=>document.getElementById(id);
const competitionGroups={
 domestic:[["laliga","La Liga"],["premierleague","Premier League"],["seriea","Serie A"],["bundesliga","Bundesliga"],["ligue1","Ligue 1"]],
 europe:[["ucl","UEFA Champions League"],["uel","UEFA Europa League"],["uecl","UEFA Conference League"]]
};
const ranks=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const slots343=[["LW",17,15],["ST",50,11],["RW",83,15],["LB",10,49],["DM",37,53],["CM",63,53],["RB",90,49],["CB",25,77],["CB",50,81],["CB",75,77],["GK",50,93]];
const slots433=[["LW",15,13],["ST",50,11],["RW",85,13],["CM",30,37],["CAM",70,37],["DM",50,54],["LB",13,73],["CB",37,76],["CB",63,76],["RB",87,73],["GK",50,91]];
const slots442=[["ST",35,14],["ST",65,14],["LW",12,40],["CM",42,45],["DM",60,52],["RW",88,40],["LB",13,74],["CB",37,76],["CB",63,76],["RB",87,74],["GK",50,91]];
const slots4411=[["ST",50,12],["CAM",50,28],["LW",12,45],["CM",40,53],["DM",61,56],["RW",88,45],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,92]];
const slots4312=[["ST",33,12],["ST",67,12],["CAM",50,31],["CM",29,47],["CM",71,47],["DM",50,59],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,91]];
const slots3412=[["ST",34,13],["ST",66,13],["CAM",50,34],["CM",33,51],["DM",67,51],["LB",9,63],["RB",91,63],["CB",25,77],["CB",50,81],["CB",75,77],["GK",50,93]];
const slots352=[["ST",34,13],["ST",66,13],["CM",30,43],["CM",70,43],["DM",50,55],["LB",10,62],["RB",90,62],["CB",25,78],["CB",50,81],["CB",75,78],["GK",50,93]];
const slots4222=[["ST",34,12],["ST",66,12],["LW",30,32],["RW",70,32],["DM",36,55],["CM",64,55],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,92]];
const slots4123=[["LW",15,13],["ST",50,11],["RW",85,13],["CM",30,37],["CM",70,37],["DM",50,54],["LB",13,73],["CB",37,76],["CB",63,76],["RB",87,73],["GK",50,91]];
const slots4231=[["ST",50,12],["LW",14,32],["CAM",50,36],["RW",86,32],["DM",38,56],["CM",62,56],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,92]];
const q=new URLSearchParams(location.search);
const st={domain:"domestic",league:"laliga",season:"1999-00",tab:"overview",home:!q.has("league"),showCandidates:q.get("view")==="ranking",position:"all",club:"all",from:"S",to:"D",search:"",tier:"all",tierView:"clubs",age:"all",qualifiedOnly:false};
let data=null,loading=false,loadSequence=0;
const yearList=Array.from({length:28},(_,i)=>{let a=1999+i,b=(a+1)%100;return a+"-"+String(b).padStart(2,"0")});
function esc(a){return String(a??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function club(id){return (data&&data.clubs||[]).find(c=>c.id===id)||{id,name:id,abbr:id.slice(0,3).toUpperCase()}}
function crest(id){
 const c=club(id);
 const fallback='<span class="crest-fallback">'+esc(c.abbr||c.name.slice(0,3))+'</span>';
 if(!c.crestUrl)return fallback;
 const backups=(c.crestBackupUrls||[]).filter(url=>typeof url==="string"&&url!==c.crestUrl&&/^https:\/\//.test(url));
 return '<img class="crest" alt="" loading="lazy" src="'+esc(c.crestUrl)+'" data-backups="'+esc(JSON.stringify(backups))+'" data-fallback="'+esc(fallback)+'">';
}
function comp(name){if(!name)return '<span class="muted">—</span>';const type=name==="UEFA Cup"?"UEFA-Cup":name==="Intertoto Cup"?"Intertoto-Cup":name;let shown=name==="Intertoto Cup"?"Intertoto":name==="UEFA Cup"?"UEFA Cup":name;return '<span class="comp '+esc(type)+'">'+esc(shown)+'</span>'}
function tierName(t){return t?({"A":"A0","B":"B0","C":"C0"}[t]||t):"미평가"}
const tierClassNames={"S":"tier-grade-s","A+":"tier-grade-a-plus","A":"tier-grade-a","A-":"tier-grade-a-minus","B+":"tier-grade-b-plus","B":"tier-grade-b","B-":"tier-grade-b-minus","C+":"tier-grade-c-plus","C":"tier-grade-c","C-":"tier-grade-c-minus","D":"tier-grade-d"};
function tierClass(t){return tierClassNames[t]||""}
function grade(t){const label=({"A":"A0","B":"B0","C":"C0"})[t]||t;return t?'<span class="tier '+tierClass(t)+' '+(ranks.indexOf(t)<=3?"top":"")+'">'+esc(label)+'</span>':'<span class="placeholder">미평가</span>'}
function top(p){return p.tier&&ranks.indexOf(p.tier)<=3}
function age(p){if(!p.born)return null;let vals=p.born.split("-").map(Number);if(vals.length!==3||!vals[0])return null;const year=2000+Number(st.season.split("-")[1]);return year-vals[0]-((vals[1]>6)?1:0)}
function option(items,current){return items.map(x=>'<option value="'+esc(x[0])+'"'+(x[0]===current?' selected':'')+'>'+esc(x[1])+'</option>').join("")}
function syncSelects(){
 $("domain").value=st.domain;
 $("league").innerHTML=option(competitionGroups[st.domain],st.league);
 $("season").innerHTML=option(yearList.map(x=>[x,x.replace("-","–")]),st.season);
 const index=yearList.indexOf(st.season);
 document.querySelectorAll("[data-season-step]").forEach(button=>{
  const target=yearList[index+Number(button.dataset.seasonStep)];
  const label=Number(button.dataset.seasonStep)<0?"이전 시즌":"다음 시즌";
  button.disabled=!target;
  button.title=target?label+" · "+target.replace("-","–"):label+" 없음";
  button.setAttribute("aria-label",button.title);
 });
 $("floatingSeasonLabel").textContent=st.season.replace("-","–");
}
function label(){return st.league==="uel"&&Number(st.season.slice(0,4))<=2008?"UEFA Cup":competitionGroups[st.domain].find(x=>x[0]===st.league)?.[1]||"Football"}
function seasonEndLabel(){return st.season.split("-")[0]+"–"+(2000+Number(st.season.split("-")[1]))}
function clearFilters(){st.position="all";st.club="all";st.from="S";st.to="D";st.search="";st.tier="all";st.tierView="clubs";st.age="all";st.qualifiedOnly=false;st.showCandidates=false}
function writeUrl(){st.home=false;let p=new URLSearchParams({league:st.league,season:st.season,view:st.tab});history.replaceState(null,"",location.pathname+"?"+p.toString())}
function changeSeason(nextSeason){
 if(!yearList.includes(nextSeason)||nextSeason===st.season)return;
 st.season=nextSeason;
 st.home=false;
 clearFilters();
 const p=new URLSearchParams({league:st.league,season:st.season,view:st.tab});
 history.pushState(null,"",location.pathname+"?"+p.toString());
 load();
}
async function load(){
 const request=++loadSequence;
 loading=true;data=null;render();
 const path="./data/"+st.league+"-"+st.season+".json";
 // GitHub Pages can retain old JSON at an edge or browser cache after a draft correction.
 // A season-specific immutable revision forces a fresh response for this updated review.
 const seasonRevision=(st.league==="premierleague"&&st.season==="2009-10")?"?revision=pl200910-xi-ivanovic-evra-20261101":"";
 const req=[fetch(path+seasonRevision,{cache:"no-store"}).then(r=>r.ok?r.json():null).catch(()=>null)];
 if(["laliga","seriea","bundesliga"].includes(st.league)){const archivePath=st.league==="laliga"?"./data/laliga-standings-verified-1999-2026.json":st.league==="seriea"?"./data/seriea-standings-verified-1999-2026.json":"./data/bundesliga-standings-verified-1999-2026.json";req.push(fetch(archivePath,{cache:"no-cache"}).then(r=>r.ok?r.json():null).catch(()=>null));}
 const [seasonData,archive]=await Promise.all(req);
 if(request!==loadSequence)return;
 data=seasonData;
 const verified=archive?.seasons?.[st.season];
 if(verified?.standings?.length>=18){
   if(!data)data={meta:{leagueId:st.league,league:label(),season:st.season,status:"standings_only",standingsOnly:true},clubs:[],qualifiers:[],standings:[],players:[],bestXi:[]};
   const earlier=new Map((data.standings||[]).map(r=>[r.club,r]));
   const verifiedEuropean=(verified.europeanParticipationStatus||"").startsWith("verified");const trustedSeasonQualifiers=Boolean(seasonData?.meta?.europeanQualificationVerified&&(seasonData.qualifiers||[]).length);const curatedEuropean=verifiedEuropean||(!trustedSeasonQualifiers&&["seriea","bundesliga"].includes(st.league));
   const european=verified.europeanParticipation||{};
   data.standings=verified.standings.map(r=>({...r,...(r.outcome==='retained'&&r.relegationPlayoff===true&&earlier.get(r.club)?.relegationPlayoffResult?.result==='won'?{relegationPlayoffResult:earlier.get(r.club).relegationPlayoffResult}:{}),competition:curatedEuropean?(european[r.club]||null):(earlier.get(r.club)?.competition||null)}));
   if(curatedEuropean){
    data.qualifiers=Object.entries(european).map(([club,competition])=>({club,competition,route:verified.europeanParticipationNotes?.[club]||""}));
    data.meta.europeanQualificationVerified=verifiedEuropean;
    data.meta.europeanQualificationSource=verified.europeanParticipationSources?.[0];
   }
   const byClub=new Map((archive.clubs||[]).map(c=>[c.id,c]));
   for(const c of data.clubs||[])byClub.set(c.id,{...(byClub.get(c.id)||{}),...c});
   data.clubs=Array.from(byClub.values());
   data.meta.standingsVerified=true;
   data.meta.standingsSource=verified.validation?.independentFinalTable||verified.validation?.source||archive.meta.finalTablesSource||archive.meta.source;
   data.meta.relegation={status:"verified",clubs:data.standings.filter(r=>r.outcome==="relegated"||r.outcome==="relegated_administrative").map(r=>r.club),appliesTo:(Number(st.season.slice(0,4))+1)+"-"+String((Number(st.season.slice(0,4))+2)%100).padStart(2,"0")};
 }
 loading=false;render()
}
function setCompetition(){st.home=false;clearFilters();st.tab="overview";writeUrl();load()}
function seasonsStatus(){return data?.meta?.status==="demo"?"demo":data?.meta?.status==="approved"?"approved":"pending"}
function uclHistoricalAudit(){return data?.meta?.competitionId==="ucl"?data?.audit?.uclHistoricalPatch:null}
function uelHistoricalAudit(){return data?.meta?.competitionId==="uel"&&Number(data?.meta?.season?.slice(0,4))>=1999&&Number(data?.meta?.season?.slice(0,4))<=2025?data?.audit?.uelHistoricalPatch:null}
function europeanHistoricalAudit(){return uclHistoricalAudit()||uelHistoricalAudit()}
function uelHistoricalName(){return Number(data.meta.season.slice(0,4))<=2008?"UEFA Cup":"UEFA Europa League"}
function europeanHistoricalLabel(){return uelHistoricalAudit()?uelHistoricalName()+" 본선":"UCL 본선"}
function uelHistoricalFinal(){const f=data?.knockout?.find(k=>k.stage==="final");return f?.ties?.[0]||(uelModernAudit()?f:null)||null}
function uelHistoricalRoundTitle(round){
 const y=Number(data.meta.season.slice(0,4));
 return ({first_round:"본선 1라운드",second_round:"2라운드",third_round:y>=2002&&y<=2003?"32강":"3라운드",fourth_round:y>=2002&&y<=2003?"16강":"4라운드",round_of_32:"32강",knockout_play_off:"녹아웃 플레이오프",knockout_playoffs:"녹아웃 플레이오프",round_of_16:"16강",quarter_final:"8강",quarter_finals:"8강",semi_final:"4강",semi_finals:"4강",final:"결승"})[round]||round;
}
function uelHistoricalScore(m){
 const pk=m.penaltyShootout,v=Array.isArray(pk)?pk:pk?[pk.home,pk.away]:null;
 const reg=m.scoreAtRegulation,r=Array.isArray(reg)?reg:reg?[reg.home,reg.away]:null;
 return String(m.homeGoals??"—")+" : "+String(m.awayGoals??"—")+(m.extraTime?" (연장 종료"+(r&&r.every(x=>x!=null)?" · 90분 "+r[0]+"–"+r[1]:"")+")":"")+(v&&v.every(x=>x!=null)?" (PK "+v[0]+"–"+v[1]+")":"")+(m.forfeit?" (몰수)":"")+(uelModernAudit()&&m.singleLeg?" (단판)":"");
}
function uelGroupTable(g){return (g.standings||g.table||[]).map(x=>({...x,gd:x.goalDifference??x.gd,status:x.status??(x.advanced?"round_of_32":"eliminated")}))}
function uelGroupMatches(g,ms,byId){return g.matchIds?g.matchIds.map(id=>byId.get(id)).filter(Boolean):ms.filter(m=>["group","group_stage"].includes(m.round)&&m.group===(g.code??g.id))}
function uelHistoricalMatchTable(ms){
 return '<div class="table-scroll"><table class="datagrid"><thead><tr><th>DATE / VENUE</th><th>HOME</th><th>SCORE</th><th>AWAY</th></tr></thead><tbody>'+ms.map(m=>'<tr data-match-id="'+esc(m.id??(uelModernAudit()?[m.round,m.date,m.home,m.away].join("|"):m.id))+'"><td>'+uclMatchDate(m)+(m.venue&&!m.neutral&&!m.startedDate?'<br><span class="muted small">'+esc(m.venue)+'</span>':"")+(m.scheduledDate&&m.scheduledDate!==m.date?'<br><span class="muted small">'+esc(m.scheduledDate+" 예정")+'</span>':"")+'</td><td>'+esc(club(m.home).name)+'</td><td><b>'+esc(uelHistoricalScore(m))+'</b></td><td>'+esc(club(m.away).name)+'</td></tr>').join("")+'</tbody></table></div>';
}
function uelHistoricalTournament(){
 if(uelModernAudit())return uelModernTournament();
 const ms=data.matches||[],groups=data.groups||[],byId=new Map(ms.map(m=>[m.id,m])),f=uelHistoricalFinal(),v=data.meta.verification||{},cup=Number(data.meta.season.slice(0,4))<=2008;
 let h='<section class="panel"><div class="section-heading"><h2>'+esc(uelHistoricalName())+' '+esc(data.meta.season)+' · 본선 전체 경기</h2><button class="pill" data-go="overview">Overview</button></div><p class="muted small">'+(groups.length?groups.length+'개 조 · 조당 '+(cup?'5팀, 10경기':'4팀, 12경기'):'조별리그 없음 · 녹아웃')+'</p><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Matches",ms.length)+statValue("Goals",v.totalGoals??ms.reduce((n,m)=>n+(m.homeGoals??0)+(m.awayGoals??0),0))+'</div>'+(f?'<p class="muted small">우승 '+esc(club(f.winner).name)+' · 준우승 '+esc(club(f.winner===f.home?f.away:f.home).name)+'</p>':'')+(v.actualScoreAdjustedGoals!=null?'<p class="muted small">몰수 결과 포함 '+esc(v.totalGoals)+'골 · 실제 경기 스코어 '+esc(v.actualScoreAdjustedGoals)+'골</p>':'')+'</section>';
 const panel=(r,items)=>'<section class="panel" style="margin-top:15px"><h2>'+esc(uelHistoricalRoundTitle(r))+'</h2>'+uelHistoricalMatchTable(items)+'</section>';
 const rounds=[...new Set(ms.map(m=>m.round))].filter(r=>!["group","group_stage"].includes(r));
 const order=["first_round","second_round","third_round","fourth_round","round_of_32","round_of_16","quarter_final","quarter_finals","semi_final","semi_finals","final"];
 rounds.sort((a,b)=>(order.indexOf(a)<0?99:order.indexOf(a))-(order.indexOf(b)<0?99:order.indexOf(b)));
 if(rounds.includes("first_round"))h+=panel("first_round",ms.filter(m=>m.round==="first_round"));
 if(groups.length){h+='<section class="panel" style="margin-top:15px"><h2>조별리그 · '+groups.length+'개 조 · '+groups.reduce((n,g)=>n+uelGroupTable(g).length,0)+'개 구단</h2>';
 for(const g of groups){const table={table:uelGroupTable(g)},gm=uelGroupMatches(g,ms,byId);h+='<div style="margin-top:18px"><h3>Group '+esc(g.id??g.code)+'</h3>'+uclTable(table)+'<details style="margin-top:8px"><summary class="small muted" style="cursor:pointer">'+gm.length+'경기 결과</summary>'+uelHistoricalMatchTable(gm)+'</details></div>';}
 h+='</section>';}
 for(const r of rounds.filter(r=>r!=="first_round"))h+=panel(r,ms.filter(m=>m.round===r));
 return h;
}
function uelHistoricalOverview(){
 if(uelModernAudit())return uelModernOverview();
 const f=uelHistoricalFinal(),groups=data.groups||[],people=eligiblePlayers(),v=data.meta.verification||{},qualifiers=data.evaluatedClubs||[];
 let h='<section class="panel"><div class="section-heading"><div><h2>'+esc(uelHistoricalName())+' · '+esc(data.meta.season)+'</h2><p class="muted small">'+(f?'우승 '+esc(club(f.winner).name)+' · 준우승 '+esc(club(f.winner===f.home?f.away:f.home).name):'결승 정보 미확인')+'</p></div><button class="pill" data-go="table">본선 전체 경기'+(groups.length?' 및 조별리그':'')+'</button></div><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Evaluated clubs",qualifiers.length)+statValue("Games",(data.matches||[]).length)+statValue("Goals",v.totalGoals??(data.matches||[]).reduce((n,m)=>n+(m.homeGoals??0)+(m.awayGoals??0),0))+'</div></section>';
 if(groups.length){h+='<section class="panel" style="margin-top:15px"><h2>조별리그 · '+groups.length+'개 조</h2>';for(const g of groups)h+='<p class="small"><b>Group '+esc(g.id??g.code)+'</b> · '+uelGroupTable(g).map(t=>esc(club(t.club).name)+(t.status==="round_of_32"?' ✓':'')).join(" · ")+'</p>';h+='<p class="muted small">✓ 32강 진출</p></section>';}
 return h+'<section class="panel" style="margin-top:15px"><h2>선수 평가 · DRAFT · 미승인</h2><p class="muted">후보 '+people.length+'명 · 평가 대상 '+qualifiers.length+'팀 · Best XI '+(data.bestXi||[]).length+'명(잠정)</p>'+historicalAuditNotice()+'<button class="pill" data-action="candidates">후보 '+people.length+'명 전체 보기</button></section>'+(st.showCandidates?candidatePool():"");
}

function uelModernAudit(){return uelHistoricalAudit()&&Number(data.meta.season.slice(0,4))>=2017}
function uelHeldField(p,field){return (uelHistoricalAudit()?.held||[]).some(h=>h.entity?.type==="player"&&h.entity.id===p.id&&h.fields?.includes(field))}
function uelModernRound(r){return r==="knockout_play_off"?"knockout_playoffs":uclRound(r)}
function uelModernTies(){return (data.knockout||[]).flatMap(k=>(k.ties||[k]).map(t=>({stage:uelModernRound(k.stage),tie:t})))}
function uelModernMatch(m){
 const tie=uelModernTies().find(({stage,tie:t})=>stage===uelModernRound(m.round)&&((t.home===m.home&&t.away===m.away)||(t.home===m.away&&t.away===m.home)))?.tie;
 return tie?.singleLeg?{...m,singleLeg:true}:m;
}
function uelModernFormat(){
 const y=Number(data.meta.season.slice(0,4));
 return y>=2024?"36팀 리그 페이즈 · 8매치데이 · 1~8위 16강 직행 · 9~24위 녹아웃 플레이오프":y>=2021?"8개 조 · 조 1위 16강 직행 · 조 2위 녹아웃 플레이오프 · 조 3위 콘퍼런스리그 이관":"12개 조 · 조 1~2위 32강 진출";
}
function uelModernCounts(){
 const ms=data.matches||[],v=data.meta.verification||{},goals=ms.reduce((n,m)=>n+(m.homeGoals??0)+(m.awayGoals??0),0);
 const played=ms.filter(m=>m.played!==false&&!m.forfeit);
 const actual=played.reduce((n,m)=>n+(m.homeGoals??0)+(m.awayGoals??0),0);
 return {rows:ms.length,played:v.playedMatchCount??played.length,goals:v.decidedScoreGoals??goals,actual:v.actualPlayedGoals??actual};
}
function uelModernCountNote(c){return c.played!==c.rows?'<p class="muted small">실제 경기 '+esc(c.played)+'경기 · '+esc(c.actual)+'골 / 몰수 결과 포함 '+esc(c.rows)+'행 · '+esc(c.goals)+'골</p>':""}
function uelModernCancelled(){
 const ties=uelModernTies().filter(({tie})=>String(tie.status||"").startsWith("cancelled"));
 return ties.map(({stage,tie:t})=>'<p class="muted small" data-cancelled-tie="'+esc(stage+"|"+t.home+"|"+t.away)+'">'+esc(uelHistoricalRoundTitle(stage))+' · '+esc(club(t.home).name)+' – '+esc(club(t.away).name)+' · UEFA 결정에 따른 취소'+(t.winner?' · '+esc(club(t.winner).name)+' 진출':'')+'</p>').join("");
}
function uelModernTournament(){
 const ms=data.matches||[],groups=data.groups||[],byId=new Map(ms.map(m=>[m.id,m])),f=uelHistoricalFinal(),c=uelModernCounts(),league=data.leaguePhase?.table?.length;
 let h='<section class="panel"><div class="section-heading"><h2>'+esc(uelHistoricalName())+' '+esc(data.meta.season)+' · 본선 전체 경기</h2><button class="pill" data-go="overview">Overview</button></div><p class="muted small">'+esc(uelModernFormat())+'</p><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Matches",c.played)+statValue("Goals",c.actual)+'</div>'+(f?'<p class="muted small">우승 '+esc(club(f.winner).name)+' · 준우승 '+esc(club(f.winner===f.home?f.away:f.home).name)+'</p>':"")+uelModernCountNote(c)+'</section>';
 const panel=(title,items)=>'<section class="panel" style="margin-top:15px"><h2>'+esc(title)+'</h2>'+uelHistoricalMatchTable(items.map(uelModernMatch))+'</section>';
 if(league){h+='<section class="panel" style="margin-top:15px"><h2>League phase · 36 clubs</h2>'+uclTable(data.leaguePhase)+'</section>';for(let i=1;i<=8;i++)h+=panel("Matchday "+i,ms.filter(m=>m.round==="league_phase"&&m.matchday===i));}
 else{h+='<section class="panel" style="margin-top:15px"><h2>조별리그 · '+groups.length+'개 조 · '+groups.reduce((n,g)=>n+uelGroupTable(g).length,0)+'개 구단</h2>';for(const g of groups){const gm=uelGroupMatches(g,ms,byId);h+='<div style="margin-top:18px"><h3>Group '+esc(g.id??g.code)+'</h3>'+uclTable({table:uelGroupTable(g)})+'<details style="margin-top:8px"><summary class="small muted" style="cursor:pointer">'+gm.length+'경기 결과</summary>'+uelHistoricalMatchTable(gm)+'</details></div>';}h+='</section>';}
 for(const r of ["round_of_32","knockout_playoffs","round_of_16","quarter_final","semi_final","final"]){const items=ms.filter(m=>uelModernRound(m.round)===r);if(items.length)h+=panel(uelHistoricalRoundTitle(r),items);}
 const cancelled=uelModernCancelled();if(cancelled)h+='<section class="panel" style="margin-top:15px"><h2>취소 대진</h2>'+cancelled+'</section>';
 return h;
}
function uelModernOverview(){
 const f=uelHistoricalFinal(),groups=data.groups||[],people=eligiblePlayers(),c=uelModernCounts(),qualifiers=data.evaluatedClubs||[],league=data.leaguePhase?.table?.length;
 let h='<section class="panel"><div class="section-heading"><div><h2>'+esc(uelHistoricalName())+' · '+esc(data.meta.season)+'</h2><p class="muted small">'+(f?'우승 '+esc(club(f.winner).name)+' · 준우승 '+esc(club(f.winner===f.home?f.away:f.home).name):'결승 정보 미확인')+'</p></div><button class="pill" data-go="table">본선 전체 경기</button></div><p class="muted small">'+esc(uelModernFormat())+'</p><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Evaluated clubs",qualifiers.length)+statValue("Games",c.played)+statValue("Goals",c.actual)+'</div>'+uelModernCountNote(c)+'</section>';
 if(league)h+='<section class="panel" style="margin-top:15px"><h2>League phase · 36 clubs</h2>'+uclTable(data.leaguePhase)+'</section>';
 else{const modern=Number(data.meta.season.slice(0,4))>=2021;const result=t=>t.status==="round_of_32"?" ✓":modern&&t.rank===1?" (16강 직행)":modern&&t.rank===2?" (플레이오프)":modern&&t.rank===3?" (콘퍼런스리그 이관)":"";h+='<section class="panel" style="margin-top:15px"><h2>조별리그 · '+groups.length+'개 조</h2>';for(const g of groups)h+='<p class="small"><b>Group '+esc(g.id??g.code)+'</b> · '+uelGroupTable(g).map(t=>esc(club(t.club).name)+result(t)).join(" · ")+'</p>';if(!modern)h+='<p class="muted small">✓ 32강 진출</p>';h+='</section>';}
 h+=uelModernCancelled();
 return h+'<section class="panel" style="margin-top:15px"><h2>선수 평가 · DRAFT · 미승인</h2><p class="muted">후보 '+people.length+'명 · 평가 대상 '+qualifiers.length+'팀 · Best XI '+(data.bestXi||[]).length+'명(잠정)</p>'+historicalAuditNotice()+'<button class="pill" data-action="candidates">후보 '+people.length+'명 전체 보기</button></section>'+(st.showCandidates?candidatePool():"");
}

function eligiblePlayers(){return (data?.players||[]).filter(p=>!europeanHistoricalAudit()||!/^(?:not_eligible|ineligible)/.test(String(p.eligibilityStatus||"")))}
function rankPlayers(){return eligiblePlayers().slice().sort((a,b)=>positions.indexOf(a.position)-positions.indexOf(b.position)||((a.rank||999)-(b.rank||999))||((a.tier?ranks.indexOf(a.tier):ranks.length)-(b.tier?ranks.indexOf(b.tier):ranks.length))||a.name.localeCompare(b.name))}
function hasTop(){return eligiblePlayers().some(p=>top(p))}
function pageIntro(){
 const tab=document.querySelector('[data-tab="table"]'); if(tab)tab.textContent=st.domain==="europe"?"Tournament":"League Table";
 const topTab=document.querySelector('[data-tab="top"]'); if(topTab)topTab.textContent=st.domain==="europe"?"European Top Class":"Top Class";
 $("eyebrow").style.display="none";
 $("heading").textContent=label()+"  /  "+st.season.replace("-","–");
 $("subheading").style.display="none";
 const tierSeason=(["bundesliga","seriea","ligue1"].includes(st.league)||st.domain==="europe")&&Boolean(data?.players?.length)&&data?.meta?.standingsOnly!==true;
 const tierTab=$("allTiersTab");if(tierTab)tierTab.style.display=tierSeason?"":"none";
 if(st.tab==="tiers"&&!tierSeason)st.tab="overview";
 const playerView=["formation","top","tiers","stats"].includes(st.tab);
 const stage=data?.meta?.status==="demo"?"SAMPLE":data?.meta?.status!=="approved"&&data?.players?.length?"DRAFT":"";
 $("stateTag").textContent=stage;
 $("stateTag").className="status "+(stage==="SAMPLE"?"demo":"pending");
 $("stateTag").style.display=stage?"":"none";
 Array.from(document.querySelectorAll(".main-nav button")).forEach(b=>{b.classList.toggle("active",b.dataset.tab===st.tab);b.disabled=st.domain==="europe"&&!(["ucl","uel","uecl"].includes(data?.meta?.competitionId)&&(uelHistoricalAudit()||data?.groups?.length||data?.leaguePhase?.table?.length))&&["formation","table"].includes(b.dataset.tab)})
}
function statValue(label,value,note){return '<div class="metric"><span class="name">'+label+'</span><strong class="value">'+value+'</strong>'+(note?'<small class="note">'+esc(note)+'</small>':"")+'</div>'}
function qualifiers(){return data?.qualifiers||[]}
function qualItem(v){
 const body=crest(v.club)+'<span class="qual-title">'+esc(club(v.club).name)+'</span>'+comp(v.competition)+(v.additionalCompetitions||[]).map(comp).join('');
 return data?.meta?.standingsOnly?'<div class="qual-item static-qual">'+body+'</div>':'<button class="qual-item" data-club-go="'+esc(v.club)+'">'+body+'</button>';
}

function penaltyLabel(m){
 const pk=m.penaltyShootout;if(!pk)return "";
 let h,a;if(Array.isArray(pk)){
  [h,a]=pk;
  const stage=(data?.knockout||[]).find(k=>k.stage===m.round);
  const tie=stage?.ties?.find(t=>[t.home,t.away].includes(m.home)&&[t.home,t.away].includes(m.away))||(stage?.home&&[stage.home,stage.away].includes(m.home)&&[stage.home,stage.away].includes(m.away)?stage:null);
  const winner=tie?.winner;
  if(m.penaltyShootoutOrder==="tie"&&tie?.home===m.away)[h,a]=[a,h];
  else if(winner&&((h>a?m.home:m.away)!==winner)&&h!==a)[h,a]=[a,h];
 }else{h=pk.home;a=pk.away}
 return Number.isInteger(h)&&Number.isInteger(a)?' (PK '+h+'–'+a+')':"";
}
function uclTable(g){
 let t='<div class="table-scroll"><table class="datagrid"><thead><tr><th>#</th><th>CLUB</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th><th>RESULT</th></tr></thead><tbody>';
 for(const a of g.table)t+='<tr><td>'+esc(a.rank)+'</td><td>'+esc(club(a.club).name)+'</td><td>'+esc(a.played)+'</td><td>'+esc(a.wins)+'</td><td>'+esc(a.draws)+'</td><td>'+esc(a.losses)+'</td><td>'+esc(a.goalsFor)+'</td><td>'+esc(a.goalsAgainst)+'</td><td>'+esc(a.gd)+'</td><td>'+esc(a.points)+'</td><td>'+esc(a.status==="in_progress"?"진행 중":(a.status==="knockout_playoffs"||(uelModernAudit()&&a.status==="knockout_play_off"))?(uelModernAudit()?"녹아웃 플레이오프":"플레이오프"):a.status==="conference_league_transfer"&&uelModernAudit()?"콘퍼런스리그 이관":a.status==="round_of_16"&&uelModernAudit()&&Number(data.meta.season.slice(0,4))>=2021?"16강 직행":a.status==="second_group_stage"?"2차 조별리그":a.status==="round_of_32"?"32강":a.status==="round_of_16"?"16강":a.status==="quarter_finals"?"8강":a.status==="europa_league"&&data?.meta?.competitionId==="ucl"&&["2021-22","2022-23","2023-24"].includes(data.meta.season)&&a.rank===3?"Europa League 녹아웃 플레이오프":a.status==="uefa_cup"?(data?.meta?.competitionId==="ucl"&&Number(data.meta.season.slice(0,4))>=2009?"Europa League":"UEFA Cup"):"탈락")+'</td></tr>';
 return t+'</tbody></table></div>';
}
function uclRound(r){return r==="quarter_finals"?"quarter_final":r==="semi_finals"?"semi_final":r}
function uclMatchDate(m){return esc(m.date)+(m.startedDate&&m.startedDate!==m.date?'<br><span class="muted small">'+esc(m.startedDate+" 시작 · "+m.date+" 속개")+'</span>':"")+(m.venue&&(m.neutral===true||m.startedDate)?'<br><span class="muted small">'+esc(m.venue+(m.neutral?" · 중립":""))+'</span>':"")}
function uclTournament(){
 if(uelHistoricalAudit())return uelHistoricalTournament();
 if(data.leaguePhase?.table?.length){
 const ms=data.matches||[];
 const matchTable=items=>'<div class="table-scroll"><table class="datagrid"><thead><tr><th>DATE</th><th>HOME</th><th>SCORE</th><th>AWAY</th></tr></thead><tbody>'+items.map(m=>'<tr><td>'+uclMatchDate(m)+'</td><td>'+esc(club(m.home).name)+'</td><td><b>'+esc(m.homeGoals+' : '+m.awayGoals+penaltyLabel(m))+'</b></td><td>'+esc(club(m.away).name)+'</td></tr>').join("")+'</tbody></table></div>';
 return '<section class="panel"><div class="section-heading"><h2>League phase · 36 clubs</h2><button class="pill" data-go="overview">Overview</button></div>'+uclTable(data.leaguePhase)+'</section>'+Array.from({length:data.meta.competitionId==="uecl"?6:8},(_,i)=>'<section class="panel" style="margin-top:15px"><h2>Matchday '+(i+1)+'</h2>'+matchTable(ms.filter(m=>m.round==="league_phase"&&m.matchday===i+1))+'</section>').join("")+Object.entries({knockout_playoffs:"Knockout phase play-offs",round_of_16:"16강",quarter_final:"8강",semi_final:"4강",final:"결승"}).map(([r,title])=>'<section class="panel" style="margin-top:15px"><h2>'+title+'</h2>'+matchTable(ms.filter(m=>uclRound(m.round)===r))+'</section>').join("");
 }

 let groups=data.groups||[],ms=data.matches||[];
 const hasSecondGroup=groups.some(g=>g.stage===2);
 const isUEL=data?.meta?.competitionId==="uel";
 const knockouts=isUEL?["round_of_32","round_of_16","quarter_final","semi_final","final"]:hasSecondGroup?["quarter_final","semi_final","final"]:["round_of_16","quarter_final","semi_final","final"];
 let h='<section class="panel"><div class="section-heading"><h2>'+esc(label())+' '+esc(data.meta.season.replace("-","–"))+' · 본선 전체 경기</h2><button class="pill" data-go="overview">Overview</button></div><p class="muted small">대회 경기 결과 · 본선 '+(data.participants||[]).length+'팀, '+(isUEL?((data.meta?.verification?.groupStageGroups??12)+'개 조, '+((data.meta?.verification?.groupStageClubs??48)===32?'녹아웃 플레이오프~결승':'32강~결승')):hasSecondGroup?'1차 8개 조, 2차 4개 조, 8강~결승':'8개 조, 16강~결승')+'</p><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Matches",ms.length)+statValue("Goals",data.meta?.verification?.totalGoals??ms.reduce((n,m)=>n+m.homeGoals+m.awayGoals,0))+'</div></section>';
 if(data.meta?.verification?.awardedMatchCount)h+='<p class="muted small">공식 실제 득점 '+esc(data.meta.verification.actualPlayedGoals)+'골 · 징계 몰수 결과 포함 스코어 합계 '+esc(data.meta.verification.decidedScoreGoals)+'골 (로마–디나모 키이우, 인테르–밀란 각각 0–1 중단 후 0–3 처리)</p>';
 for(const stage of (hasSecondGroup?[1,2]:[1])){
  h+='<section class="panel" style="margin-top:15px"><h2>'+(stage===1?(hasSecondGroup?"First group stage · 32 clubs":"Group stage · "+(isUEL?String(data.meta?.verification?.groupStageClubs??48):"32")+" clubs"):"Second group stage · 16 clubs")+'</h2>';
  for(const g of groups.filter(x=>x.stage===stage)){
   let gs=ms.filter(m=>m.stage===stage&&m.group===g.code);
   h+='<div style="margin-top:18px"><h3>Group '+esc(g.code)+'</h3>'+uclTable(g)+'<details style="margin-top:8px" '+(stage===2?'open':'')+'><summary class="small muted" style="cursor:pointer">12경기 결과</summary><div class="table-scroll"><table class="datagrid"><thead><tr><th>DATE</th><th>HOME</th><th>SCORE</th><th>AWAY</th></tr></thead><tbody>'+gs.map(m=>'<tr><td>'+uclMatchDate(m)+'</td><td>'+esc(club(m.home).name)+'</td><td><b>'+esc(m.homeGoals+' : '+m.awayGoals)+'</b></td><td>'+esc(club(m.away).name)+'</td></tr>').join("")+'</tbody></table></div></details></div>';
  }h+='</section>';
 }
 h+='<section class="panel" style="margin-top:15px"><h2>Knockout phase · '+(isUEL?'32강 / 16강 / 8강 / 4강 / 결승':hasSecondGroup?'8강 / 4강 / 결승':'16강 / 8강 / 4강 / 결승')+'</h2><div class="table-scroll"><table class="datagrid"><thead><tr><th>ROUND</th><th>DATE</th><th>HOME</th><th>SCORE</th><th>AWAY</th></tr></thead><tbody>'+ms.filter(m=>knockouts.includes(uclRound(m.round))).map(m=>'<tr><td>'+esc(m.round==="round_of_32"?"32강":m.round==="round_of_16"?"16강":uclRound(m.round)==="quarter_final"?"8강":uclRound(m.round)==="semi_final"?"4강":"결승")+'</td><td>'+uclMatchDate(m)+'</td><td>'+esc(club(m.home).name)+'</td><td><b>'+esc(m.homeGoals+' : '+m.awayGoals+penaltyLabel(m))+'</b></td><td>'+esc(club(m.away).name)+'</td></tr>').join("")+'</tbody></table></div></section>';
 return h;
}
function historicalAuditNotice(){
 const legacy=uelHistoricalAudit();if(legacy){const excluded=(data.players||[]).length-eligiblePlayers().length;return '<p class="small muted" style="margin:9px 0">'+esc(uelHistoricalName())+' 본선 기록 검수 · 예선 및 승부차기 득점 제외. — = 미확인(0과 구분). 도움은 확인된 공급자만 표시. 포메이션·실제 주 포지션·후보 자격·3시즌 평가 등 보류 '+esc(legacy.held.length)+'건 · DRAFT.'+(excluded?' 본선 무출전·비적격 원본 '+excluded+'행은 활성 후보·순위에서 제외.':'')+'</p>';}
 const audit=uclHistoricalAudit();if(!audit)return "";
 const missing=audit.missingCandidateClubs||[];
 const ineligible=(data.players||[]).length-eligiblePlayers().length;
 return '<p class="small muted" style="margin:9px 0">UCL 본선 기록 검수 · 예선 및 승부차기 제외. 확인된 항목만 확정 정정; 전술·주 포지션·3시즌 평가(60/30/10)·미확인 도움/실점은 추가 검증 필요. 보류 '+esc(audit.held.length)+'건.'+(missing.length?' 후보 미등록 '+missing.length+'개 구단: '+esc(missing.map(id=>club(id).name).join(", "))+'.':'')+(ineligible?' 비적격 원본 '+ineligible+'행은 후보·순위에서 제외.':'')+'</p>';
}
function uclOverview(){
 if(uelHistoricalAudit())return uelHistoricalOverview();
 if(data.leaguePhase?.table?.length){
 const people=data.players||[],f=data.knockout.find(k=>k.stage==="final"),rated=people.filter(p=>p.tier).length;
 return '<section class="panel"><div class="section-heading"><div><h2>'+esc(label())+' · '+esc(data.meta.season)+'</h2><p class="muted small">'+(f?'우승 '+esc(club(f.winner).name)+' · 준우승 '+esc(club(f.winner===f.home?f.away:f.home).name):'시즌 진행 중 · '+esc(data.leaguePhase.completedMatchdays??"")+'경기일 완료 · 경기 결과 기반 잠정 순위')+'</p></div><button class="pill" data-go="table">리그 페이즈 · 전체 경기</button></div><div class="cards">'+statValue("Clubs",data.participants.length)+statValue("Evaluated clubs",data.evaluatedClubs.length)+statValue("Games",data.matches.length)+statValue("Goals",data.meta.verification.totalGoals)+'</div></section><section class="panel" style="margin-top:15px"><h2>League phase · 36 clubs</h2>'+uclTable(data.leaguePhase)+'</section><section class="panel" style="margin-top:15px"><h2>선수 평가 · DRAFT · 미승인</h2><p class="muted">후보 '+people.length+'명 · 잠정 티어 '+rated+'명 · Best XI '+((data.bestXi||[]).length===11?'11명 제안':'평가 대기')+' · 독립 검증 미완료</p><button class="pill" data-action="candidates">후보 '+people.length+'명 전체 보기</button></section>'+(st.showCandidates?candidatePool():"");
 }

 const groups=data.groups||[],people=eligiblePlayers(),qualifiers=data.evaluatedClubs||[];
 const hasSecondGroup=groups.some(g=>g.stage===2);
 const isUEL=data?.meta?.competitionId==="uel";
 let h='<section class="panel"><div class="section-heading"><div><h2>'+esc(label())+' · '+esc(data.meta.season.replace("-","–"))+'</h2><p class="muted small">우승 '+esc(club(data.knockout.find(k=>k.stage==="final")?.winner).name)+' · 준우승 '+esc(club((()=>{const f=data.knockout.find(k=>k.stage==="final");return f?.winner===f?.home?f?.away:f?.home})()).name)+'</p></div><button class="pill" data-go="table">모든 경기 및 조별리그</button></div><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Evaluated clubs",qualifiers.length)+statValue("Games",(data.matches||[]).length)+statValue("Goals",data.meta?.verification?.totalGoals??(data.matches||[]).reduce((n,m)=>n+m.homeGoals+m.awayGoals,0))+'</div></section>';
 if(data.meta?.verification?.awardedMatchCount)h+='<p class="muted small">UEFA 실제 득점 '+esc(data.meta.verification.actualPlayedGoals)+'골 / 몰수·징계 결과 포함 스코어 합계 '+esc(data.meta.verification.decidedScoreGoals)+'골. 경기 결과는 확정 0–3, 실제 득점 통계는 중단 당시 0–1로 따로 계산.</p>';
 h+='<section class="panel" style="margin-top:15px"><h2>'+(hasSecondGroup?'1차 조별리그':'조별리그')+' · 참가 '+(isUEL?String(data.meta?.verification?.groupStageClubs??48):"32")+'개 구단</h2>';
 for(const g of groups.filter(g=>g.stage===1))h+='<p class="small" style="margin-top:12px"><b>Group '+esc(g.code)+'</b> · '+g.table.map(t=>esc(club(t.club).name)+(qualifiers.includes(t.club)?" ✓":"")).join(" · ")+'</p>';
 h+='<p class="muted small">✓ '+(isUEL?'8강':hasSecondGroup?'2차 조별리그':'16강')+' 진출 · 선수 평가 대상</p></section>';
 if(hasSecondGroup)h+='<section class="panel" style="margin-top:15px"><h2>2차 조별리그 · 평가 16개 구단</h2>';
 if(hasSecondGroup){for(const g of groups.filter(g=>g.stage===2))h+='<div style="margin-top:18px"><h3>Group '+esc(g.code)+'</h3>'+uclTable(g)+'</div>';h+='</section>';}
 const rated=people.filter(p=>Boolean(p.tier)).length;
 const xiCount=(data.bestXi||[]).length;
 h+='<section class="panel" style="margin-top:15px"><div class="section-heading"><h2>선수 평가 · '+(rated||xiCount?"DRAFT · 미승인":"자료 수집 중")+'</h2></div><p class="muted">경기 결과 전수 기록 · 후보 '+people.length+'명 · 잠정 티어 '+rated+'명 · 미평가 '+(people.length-rated)+'명 · Best XI '+(xiCount===11?"11명 제안(미승인)":"미완료")+'. 출전·전술·과거 3시즌 독립 검증은 계속 필요합니다.</p>'+tierEvidenceNotice()+'<button class="pill" data-action="candidates">후보 '+people.length+'명 전체 보기</button></section>';
 if(st.showCandidates)h+=candidatePool();
 return h;
}

function overview(){
 if(st.domain==="europe"&&["ucl","uel","uecl"].includes(data?.meta?.competitionId)&&(uelHistoricalAudit()||data?.groups?.length||data?.leaguePhase?.table?.length))return uclOverview();
 const qualified=qualifiers();
 const relegated=(data.standings||[]).filter(r=>r.outcome==="relegated"||r.outcome==="relegated_administrative");
 let result="";
 if(data?.meta?.standingsOnly){
  const leaders=(data.standings||[]).slice(0,3);
  result+='<section class="panel"><div class="section-heading"><h2>League Table</h2><button class="pill" data-go="table">전체 순위</button></div><div class="relegation-list">'+leaders.map(r=>'<div class="relegation-item">'+crest(r.club)+'<span>'+esc(r.rank)+'위 '+esc(club(r.club).name)+championStatus(r)+'</span><b>'+esc(r.points)+' PTS</b></div>').join("")+'</div></section>';
 }else{
  const n=(data.players||[]).length;
  if(n){
   const counts=positions.map(p=>[p,(data.players||[]).filter(x=>x.position===p).length]).filter(x=>x[1]);
   result+='<section class="panel"><div class="section-heading"><h2>Players <span class="muted">'+n+'</span></h2><button class="pill" data-action="candidates">'+(st.showCandidates?'닫기':'선수 목록')+'</button></div><div class="pills">'+counts.map(x=>'<button class="pill" data-pos-go="'+x[0]+'">'+x[0]+' &nbsp; '+x[1]+'</button>').join("")+'</div></section>';
  }
 }
 if(data?.meta?.playerCandidateReview?.method==="fresh_research_not_reusing_previous_imported_candidate_pool"){const evaluated=(data.players||[]).filter(p=>p.tier).length;result+='<section class="panel" style="margin-top:15px"><h2>DRAFT · 신규 선수 조사</h2><p class="muted small" style="margin:6px 0 0">'+(data.players||[]).length+'명은 검토용 후보이며 확정 선정이 아닙니다. 잠정 티어 '+evaluated+'명 / 근거 추가 확인 '+((data.players||[]).length-evaluated)+'명. Best XI·순위·티어 모두 사용자 미승인 상태입니다.</p></section>';}
 if(qualified.length)result+='<section class="panel" style="margin-top:15px"><div class="section-heading"><h2>European Qualification</h2></div><div class="qual-list">'+qualified.map(qualItem).join("")+'</div></section>';
  const tactical=data?.meta?.clubTactics;
  if(tactical&&!data?.meta?.standingsOnly)result+='<section class="panel" style="margin-top:15px"><div class="section-heading"><h2>구단별 '+esc(st.season)+' 대표 전술 <span class="muted">DRAFT</span></h2></div><div class="relegation-list">'+qualified.filter(q=>tactical[q.club]).map(q=>'<div class="relegation-item"><div><b>'+esc(club(q.club).name)+'</b> <span class="small muted">· '+esc(tactical[q.club].formation)+'</span><div class="small muted">'+esc(tactical[q.club].note||"") +'</div></div></div>').join("")+'</div></section>';
 if(relegated.length)result+='<section class="panel relegation-overview"><div class="section-heading"><h2>Relegation</h2></div><div class="relegation-list">'+relegated.map(r=>'<div class="relegation-item">'+crest(r.club)+'<span>'+esc(r.rank)+'위 '+esc(club(r.club).name)+(r.outcome==="relegated_administrative"?" · 행정":"")+'</span><b>'+esc(r.points)+' PTS</b></div>').join("")+'</div></section>';
 if(st.showCandidates&&data.players?.length)result+=candidatePool();
 if((data.bestXi||[]).length===11&&data.meta.bestXiReview?.status==="proposed_unapproved")result+='<section class="panel" style="margin-top:15px"><div class="section-heading"><h2>Best XI <span class="muted">DRAFT</span></h2><button class="pill" data-go="formation">보기</button></div></section>';
 return result;
}
function toptier(){return ['S','A+','A','A-'].includes(st.tier)?st.tier:"all"}
function filterPlayers(arr,useTop){
 const from=ranks.indexOf(st.from),to=ranks.indexOf(st.to);
 return arr.filter(p=>(!useTop||top(p))&&(st.position==="all"||st.position===p.position)&&(st.club==="all"||st.club===p.club)&&(!useTop||st.tier==="all"||p.tier===st.tier)&&(useTop||(!p.tier?from===0&&to===10:ranks.indexOf(p.tier)>=from&&ranks.indexOf(p.tier)<=to))&&(!st.search||(p.name+" "+club(p.club).name).toLowerCase().includes(st.search.toLowerCase()))&&(st.age==="all"||(st.age==="22"&&age(p)<=22)||(st.age==="23"&&age(p)>=23&&age(p)<=27)||(st.age==="28"&&age(p)>=28&&age(p)<=32)||(st.age==="33"&&age(p)>=33)))
}
function filters(useTop,stats){
 let v='<div class="toolbar"><select data-filter="position" aria-label="Position">'+option([["all","All Positions"],...positions.map(p=>[p,p])],st.position)+'</select>';
 v+='<select data-filter="club" aria-label="Club">'+option([["all","All Clubs"],...qualifiers().map(q=>[q.club,club(q.club).name])],st.club)+'</select>';
 if(!useTop)v+='<select data-filter="from" aria-label="Tier range start">'+option(ranks.map(t=>[t,({"A":"A0","B":"B0","C":"C0"})[t]||t]),st.from)+'</select><span class="muted">~</span><select data-filter="to" aria-label="Tier range end">'+option(ranks.map(t=>[t,({"A":"A0","B":"B0","C":"C0"})[t]||t]),st.to)+'</select>';
 if(stats)v+='<select data-filter="age">'+option([["all","All Ages"],["22","22세 이하"],["23","23–27세"],["28","28–32세"],["33","33세 이상"]],st.age)+'</select>';
 else if(!useTop)v+='<input data-filter="search" aria-label="Search player name" placeholder="선수·구단 검색" value="'+esc(st.search)+'">';
 v+='</div>';return v;
}
function auditStatsVisible(){return !!(europeanHistoricalAudit()||data?.meta?.segment1CorrectionAudit||data?.meta?.segment3Audit||data?.meta?.ligue1Segment2Audit||data?.meta?.ligue1Segment3Audit)}
function playerGoals(p){if(europeanHistoricalAudit())return p.goals??"—";if(data?.meta?.ligue1Segment3Audit)return p.leagueGoals??"—";return p.leagueGoals??p["goals"+String(p.season||data.meta.season).slice(0,4)]??"—"}
function auditAssistVisible(){return !!(europeanHistoricalAudit()||data?.meta?.segment3Audit||data?.meta?.ligue1Segment2Audit||data?.meta?.ligue1Segment3Audit)}
function playerAssists(p){if(europeanHistoricalAudit())return uclAssistProvider(p)?p.assists??"—":"—";if(data?.meta?.ligue1Segment3Audit)return p.leagueAssists??"—";return p.leagueAssists??p["assists"+String(p.season||data.meta.season).slice(0,4)]??p.threeSeasonReview?.records?.[data.meta.season]?.assists??"—"}
function uclAssistProvider(p){if(uelModernAudit()&&uelHeldField(p,"assists"))return null;return p.assists!=null?(p.assistsProvider||p.uclAssistProvider||p.assistProvider||null):null}
function playerApps(p){return europeanHistoricalAudit()?p.appearances??"—":p.leagueAppearances??"—"}
function playerStarts(p){return europeanHistoricalAudit()?p.starts??"—":p.starts??p.leagueStarts??"—"}
function playerMinutes(p){if(uelModernAudit()&&uelHeldField(p,"minutes"))return "—";return europeanHistoricalAudit()?p.minutes??"—":p.leagueMinutes??p.minutes??"—"}
function playerConceded(p){return europeanHistoricalAudit()?p.goalsConceded??p.keeperGoalsConceded??"—":p.leagueGoalsConceded??"—"}
function uclFieldSources(p){const audit=europeanHistoricalAudit();if(!audit)return "";const fields=audit.fieldSources?.["player:"+p.id]||{};return ["/appearances","/starts","/minutes","/goals","/goalsConceded","/assists","/born"].filter(f=>fields[f]).map(f=>f.slice(1)+": "+[...new Set(fields[f].map(id=>audit.sources[id]?.provider).filter(Boolean))].join(" / ")).join(" · ")}
function playerAssistSource(p){if(europeanHistoricalAudit())return uclAssistProvider(p)||"—";if(p.leagueAssistProvider&&p.leagueAssists!=null)return p.leagueAssistProvider;const changes=data?.meta?.segment3Audit?.changes||[];const change=changes.find(c=>c.id===p.id&&c.kind==="assists"&&c.after===playerAssists(p));const urls=[...(Array.isArray(change?.source)?change.source:[]),...(p.threeSeasonReview?.records?.[data.meta.season]?.externalReviewSources||[])];const source=urls.find(u=>typeof u==="string"&&u.includes("fussballtransfers.com")&&u.includes("vorlagengeber"));return source?"Fussballtransfers":playerAssists(p)==="—"?"—":"공급자 미확인"}
function tablePlayers(rows){
 if(!rows.length)return '<div class="empty">선수 없음</div>';
 return '<div class="table-scroll"><table class="datagrid"><thead><tr><th>POS</th><th>PLAYER</th><th>CLUB</th><th>BORN</th><th>ROLE</th><th>STARTS</th>'+(auditStatsVisible()?'<th>APPS</th><th>MINS</th><th>GOALS</th><th>GA (GK)</th>':'')+(auditAssistVisible()?'<th>ASSISTS</th><th>ASSIST SOURCE</th>':'')+(uelHistoricalAudit()?'<th>RECORD SOURCE</th>':'')+'<th>RANK</th><th>TIER</th></tr></thead><tbody>'+rows.map(p=>'<tr data-player="'+esc(p.id)+'"><td><b>'+esc(p.position)+'</b></td><td class="person">'+esc(p.nameKo||p.name)+'<span class="small muted" style="display:block;font-weight:400">'+esc(p.nameOriginal||p.name)+'</span></td><td><div style="display:flex;align-items:center;gap:8px">'+crest(p.club)+esc(p.clubNameOriginal||club(p.club).name)+'</div></td><td>'+esc(p.born||"—")+'</td><td>'+esc(p.role==="starter"?"주전":p.role==="backup"?"후보":"—")+'</td><td>'+esc(playerStarts(p))+'</td>'+(auditStatsVisible()?'<td>'+esc(playerApps(p))+'</td><td>'+esc(playerMinutes(p))+'</td><td>'+esc(playerGoals(p))+'</td><td>'+esc(p.position==="GK"?playerConceded(p):"—")+'</td>':'')+(auditAssistVisible()?'<td>'+esc(playerAssists(p))+'</td><td>'+esc(playerAssistSource(p))+'</td>':'')+(uelHistoricalAudit()?'<td class="small">'+esc(uclFieldSources(p)||"미확인")+'</td>':'')+'<td>'+esc(p.rank??"—")+'</td><td>'+grade(p.tier)+'</td></tr>').join("")+'</tbody></table></div>'
}
function tierEvidenceNotice(){
 const a=data?.audit?.tierImport;
 if(st.domain!=="europe"||data?.meta?.competitionId!=="ucl"||!a)return historicalAuditNotice();
 return historicalAuditNotice()+'<p class="small muted" style="margin:9px 0">평가 근거 구분: '+esc(a.added||0)+'명은 해당 시즌 국내 리그 DRAFT 개인 티어를 참조해 표시한 <b>조건부 잠정 등급</b>입니다. UCL 3시즌 개인 활약을 독립 검증한 최종 티어가 아니며, '+esc(a.stillPending||0)+'명은 근거 부족으로 평가 대기 상태입니다. Best XI도 사용자 미승인입니다.</p>';
}
function candidatePool(){
 let all=rankPlayers(),rows=filterPlayers(all,false);
 return '<section class="panel candidate-pool" id="candidate-pool"><div class="section-heading"><h2>Players <span class="muted">'+rows.length+' / '+all.length+'</span></h2><button class="pill" data-action="reset">초기화</button></div>'+tierEvidenceNotice()+filters(false,false)+tablePlayers(rows)+'</section>'
}

function tierDirectory(){
 const all=rankPlayers(),view=st.tierView||"clubs",allowed=[...ranks,null],count=t=>all.filter(p=>p.tier===t).length;
 const tally=allowed.map(t=>tierName(t)+" "+count(t)).join(" · ");
 const sum=allowed.reduce((n,t)=>n+count(t),0);
 const wc=all.filter(p=>["S","A+"].includes(p.tier)).length,lt=all.filter(p=>["S","A+","A","A-"].includes(p.tier)).length;
 const menu=[["clubs","구단별 전체 명단"],["positions","포지션별 통합 순위"],["tiers","티어별 전체 명단"]];
 let h='<section class="panel tier-directory-head"><div class="section-heading"><div><h2>전체 선수 티어 · '+all.length+'명 <span class="muted">DRAFT</span></h2><p class="muted small">'+esc(st.season)+' '+esc(label())+' · '+qualifiers().length+'개 구단 · 주전과 후보 전원 · 사용자 미승인</p></div><button class="pill" data-go="top">World / League Top Class</button></div>';
 h+='<p class="small muted">World Class '+wc+'명 (S+A+) · League Top Class '+lt+'명 (S~A-) · 티어 합계 '+sum+'/'+all.length+'명 '+(sum===all.length?'(일치)':'(오류)')+'</p>'+tierEvidenceNotice()+'<p class="small tier-counts">'+esc(tally)+'</p><div class="pills tier-directory-nav">'+menu.map(x=>'<button class="pill '+(view===x[0]?'active':'')+'" data-tier-view="'+x[0]+'">'+x[1]+'</button>').join("")+'</div></section>';
 if(view==="clubs"){
  for(const q of qualifiers()){
   const ps=all.filter(p=>p.club===q.club);
   const counts=allowed.filter(t=>ps.some(p=>p.tier===t)).map(t=>tierName(t)+" "+ps.filter(p=>p.tier===t).length).join(" · ");
   h+='<section class="panel tier-directory-section"><div class="section-heading"><h2>'+esc(club(q.club).name)+' <span class="muted">'+ps.length+'명 (주전 '+ps.filter(p=>p.role==="starter").length+' / 후보 '+ps.filter(p=>p.role==="backup").length+')</span></h2></div><p class="small muted">'+esc(counts)+'</p>'+tablePlayers(ps)+'</section>';
  }
 }else if(view==="positions"){
  for(const position of positions){
   const ps=all.filter(p=>p.position===position).sort((a,b)=>(a.rank??999)-(b.rank??999));
   h+='<section class="panel tier-directory-section"><div class="section-heading"><h2>'+position+' <span class="muted">'+ps.length+'명</span></h2></div><div class="table-scroll"><table class="datagrid"><thead><tr><th>순위</th><th>포지션</th><th>한글 이름 / 원어명</th><th>소속 구단</th><th>티어</th><th>주전/후보</th></tr></thead><tbody>'+ps.map(p=>'<tr data-player="'+esc(p.id)+'"><td>'+esc(p.rank??"—")+'</td><td>'+esc(p.position)+'</td><td class="person">'+esc(p.nameKo||p.name)+'<span class="small muted" style="display:block">'+esc(p.nameOriginal||p.name)+'</span></td><td>'+esc(p.clubNameOriginal||club(p.club).name)+'</td><td>'+grade(p.tier)+'</td><td>'+esc(p.role==="starter"?"주전":"후보")+'</td></tr>').join("")+'</tbody></table></div></section>';
  }
 }else{
  for(const tier of allowed){
   const ps=all.filter(p=>p.tier===tier);
   h+='<section class="panel tier-directory-section"><div class="section-heading"><h2>'+tierName(tier)+' <span class="muted">'+ps.length+'명</span></h2></div>'+(ps.length?'<div class="table-scroll"><table class="datagrid"><thead><tr><th>포지션</th><th>한글 이름 / 원어명</th><th>소속 구단</th><th>포지션 순위</th><th>티어</th></tr></thead><tbody>'+ps.map(p=>'<tr data-player="'+esc(p.id)+'"><td>'+esc(p.position)+'</td><td class="person">'+esc(p.nameKo||p.name)+'<span class="small muted" style="display:block">'+esc(p.nameOriginal||p.name)+'</span></td><td>'+esc(p.clubNameOriginal||club(p.club).name)+'</td><td>'+esc(p.rank??"—")+'</td><td>'+grade(p.tier)+'</td></tr>').join("")+'</tbody></table></div>':'<p class="small muted">해당 선수 없음 (0명)</p>')+'</section>';
  }
 }
 return h
}

function topPage(){
 let all=rankPlayers(),filtered=filterPlayers(all,true);let count=t=>all.filter(p=>p.tier===t).length;
 let cards='<div class="top-scores">'+["S","A+","A","A-"].map(t=>'<button class="top-score '+tierClass(t)+' '+(st.tier===t?"active":"")+'" data-toptier="'+t+'"><b>'+(({"A":"A0","B":"B0","C":"C0"})[t]||t)+'</b><small>'+count(t)+' players</small></button>').join("")+'</div>';
 let world=all.filter(p=>p.tier==="S"||p.tier==="A+").length;
 let body='<div class="section-heading"><div><h2>'+(st.domain==="europe"?"European Top Class":"League Top Class")+'</h2><p class="muted small">World Class (S · A+): '+world+'명 / League Top Class (S · A+ · A · A-): '+all.filter(top).length+'명 · 모두 잠정 평가</p></div><button class="pill '+(st.tier==="all"?"active":"")+'" data-toptier="all">All tiers</button></div>'+tierEvidenceNotice()+cards+'<div style="margin-top:15px">'+filters(true,false)+'</div>'+tablePlayers(filtered);
 if(!hasTop())body='<div class="section-heading"><h2>'+(st.domain==="europe"?"European Top Class":"League Top Class")+'</h2></div><div class="empty">등록된 선수 없음</div>';
 return '<section class="panel">'+body+'</section>'
}
function formation(){
 let selection=(data.bestXi||[]).slice(0,11),used={};
 let formationName=["3-4-3","3-4-1-2","3-5-2","4-3-1-2","4-4-1-1","4-4-2","4-2-3-1","4-2-2-2","4-1-2-3","4-3-3"].includes(data?.meta?.formation)?data.meta.formation:"4-3-3";
 let layout=formationName==="4-2-2-2"?slots4222:formationName==="4-1-2-3"?slots4123:formationName==="3-4-3"?slots343:formationName==="3-5-2"?slots352:formationName==="3-4-1-2"?slots3412:formationName==="4-3-1-2"?slots4312:formationName==="4-2-3-1"?slots4231:formationName==="4-4-1-1"?slots4411:formationName==="4-4-2"?slots442:slots433;
 // A classic 4-4-2 may contain two CM players rather than one CM plus one DM.
 // Respect existing 1 CM + 1 DM data for other seasons while rendering both CMs here.
 if(formationName==="4-4-2"&&selection.filter(p=>p.position==="CM").length===2&&selection.filter(p=>p.position==="CAM").length===1&&selection.filter(p=>p.position==="DM").length===1){
  layout=slots4312;
 }
 if(formationName==="4-4-2"&&selection.filter(p=>p.position==="CM").length===2&&selection.every(p=>p.position!=="DM")){
  layout=slots442.map(slot=>slot[0]==="DM"?["CM",slot[1],slot[2]]:slot);
 }
 // Real 4-3-3 can use two mezzale/central midfielders plus a single regista.
 // Reuse the CAM *field coordinate* for the second CM only when the nominated XI has 2 CM and 0 CAM.
 // All earlier 4-3-3 datasets with an actual CAM retain their previous layout unchanged.
 if(formationName==="4-3-3"&&selection.filter(p=>p.position==="CM").length===2&&selection.every(p=>p.position!=="CAM")){
  layout=slots433.map(slot=>slot[0]==="CAM"?["CM",slot[1],slot[2]]:slot);
 }
 let marks=layout.map(x=>{let matches=selection.filter(b=>(b.tacticalSlot||b.position)===x[0]);let index=used[x[0]]||0;used[x[0]]=index+1;let pick=matches[index];let p=data.players.find(y=>y.id===pick?.playerId);let selectedPosition=p?.position||x[0];let fieldPosition=pick?.displayPosition||pick?.tacticalSlot||x[0];return '<button class="slot '+(st.position===selectedPosition?"active":"")+'" data-position="'+selectedPosition+'" style="left:'+x[1]+'%;top:'+x[2]+'%"><span class="spot">'+esc(fieldPosition)+'</span><span class="slot-label">'+(p?esc(p.nameKo||p.name):"선정 대기")+'</span>'+(p?'<span class="slot-tier">'+grade(p.tier)+'</span>':'')+'</button>'}).join("");
 let pos=st.position==="all"?"GK":st.position;
 let candidates=rankPlayers().filter(p=>p.position===pos);
 let side='<div class="panel"><div class="section-heading"><h2>포지션별 순위</h2><span class="status">'+pos+'</span></div><div class="position-nav">'+positions.map(p=>'<button data-position="'+p+'" class="'+(pos===p?"active":"")+'">'+p+'</button>').join("")+'</div>';
 side+='<div class="small muted" style="margin-bottom:8px">'+candidates.length+' players</div>';
 if(candidates.length&&!candidates.some(p=>p.rank!=null))side+='<p class="position-rank-note">순위 미등록</p>';
 if(candidates.length){side+=candidates.map(p=>'<button class="rank-row" data-player="'+esc(p.id)+'"><span class="rank-num">'+esc(p.rank??"—")+'</span>'+crest(p.club)+'<span class="rank-label"><b>'+esc(p.name)+'</b><small>'+esc(club(p.club).name)+'</small></span>'+grade(p.tier)+'</button>').join("")}
 else side+='<div class="empty"><strong>아직 후보가 없습니다.</strong></div>';
 side+='</div>';
 const proposed=data?.meta?.bestXiReview?.status==="proposed_unapproved";
 const previewNote=tierEvidenceNotice();
 const xiTable=(["bundesliga","seriea","ligue1"].includes(st.league)||st.domain==="europe")&&Array.isArray(data.bestXi)&&data.bestXi.length===11?'<div class="xi-detail-list"><h3>Best XI · 11명 개별 티어 및 선정 근거</h3><div class="table-scroll"><table class="datagrid"><thead><tr><th>전술 위치</th><th>한글 이름 / 원어명</th><th>구단</th><th>실제 주 포지션</th><th>티어</th><th>선정 근거</th></tr></thead><tbody>'+selection.map(s=>{const p=data.players.find(x=>x.id===s.playerId);return '<tr data-player="'+esc(s.playerId)+'"><td>'+esc(s.displayPosition||s.tacticalSlot||s.position)+'</td><td class="person">'+esc(p?.nameKo||"—")+'<span class="small muted" style="display:block">'+esc(p?.nameOriginal||p?.name||"—")+'</span></td><td>'+esc(p?.clubNameOriginal||"—")+'</td><td>'+esc(s.seasonPrimaryPosition||p?.position||"—")+(p?.positionAudit?'<span class="small muted" style="display:block">선발 최빈: '+esc(p.positionAudit.modalPosition)+' ('+esc(p.positionAudit.modalStarts)+'/'+esc(p.positionAudit.totalStarts)+') · 재검토</span>':'')+'</td><td>'+grade(p?.tier)+'</td><td>'+esc(s.reason||"근거 확인 대기")+'</td></tr>'}).join("")+'</tbody></table></div></div>':"";
 return '<div class="panels"><section class="panel"><div class="section-heading"><h2>Season Best XI</h2><span class="small muted">'+esc(formationName)+' · '+(data?.meta?.status==="demo"?"SAMPLE":proposed?"DRAFT":"BEST XI")+'</span></div>'+previewNote+'<div class="pitch"><div class="mid"></div><div class="circle"></div>'+marks+'</div>'+xiTable+'</section>'+side+'</div>'
}
function championStatus(r){
 if(st.domain!=="domestic"||!data?.standings?.length)return "";
 const isSerieA=st.league==="seriea",yr=st.season;
 const stripped=isSerieA&&r.club==="juventus"&&(yr==="2004-05"||yr==="2005-06");
 if(stripped)return '<span class="champion-stripped" title="우승 박탈 (칼초폴리)" aria-label="우승 박탈">박탈</span>';
 const winner=isSerieA&&yr==="2004-05"?false:isSerieA&&yr==="2005-06"?r.club==="inter":r.rank===1;
 return winner?'<span class="champion-badge" title="리그 공식 우승" aria-label="리그 공식 우승">C</span>':"";
}
function standings(){
 if(st.domain==="europe"&&["ucl","uel","uecl"].includes(data?.meta?.competitionId)&&(uelHistoricalAudit()||data?.groups?.length||data?.leaguePhase?.table?.length))return uclTournament();
 const rows=data.standings||[];
 if(!rows.length)return '<section class="panel"><div class="section-heading"><h2>Final League Table</h2></div><div class="empty"><strong>순위표 검증 중입니다.</strong></div></section>';
 const hasEuropean=rows.some(r=>r.competition);
 const visible=rows.filter(r=>!hasEuropean||!st.qualifiedOnly||r.competition);
   const filterBtn=hasEuropean?'<button class="pill '+(st.qualifiedOnly?"active":"")+'" data-action="qualonly">'+(st.qualifiedOnly?"✓ European clubs":"European clubs only")+'</button>':"";
 let content='<section class="panel"><div class="section-heading"><h2>Final League Table</h2>'+filterBtn+'</div>';
 content+='<div class="table-scroll"><table class="datagrid"><thead><tr><th>#</th><th>CLUB</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th><th>NEXT SEASON</th></tr></thead><tbody>';
 content+=visible.map(r=>{
  const down=r.outcome==="relegated"||r.outcome==="relegated_administrative";
  const adminStay=r.outcome==="retained_administrative";
  const euroStatus=r.competition?comp(r.competition):"";
  const stat=down?'<span class="relegation-chip">↓ '+(r.outcome==="relegated_administrative"?"행정 강등":"강등")+'</span>':adminStay?'<span class="retention-chip">잔류 · 행정</span>':r.relegationPlayoffResult?.result==="won"?'<span class="retention-chip">잔류 · 플레이오프 '+esc(r.relegationPlayoffResult.aggregateFor)+'–'+esc(r.relegationPlayoffResult.aggregateAgainst)+'</span>':euroStatus;
  return '<tr class="'+(down?"table-relegated":"")+'"><td><b>'+esc(r.rank)+'</b></td><td><div style="display:flex;align-items:center;gap:8px">'+crest(r.club)+esc(club(r.club).name)+championStatus(r)+'</div></td><td>'+esc(r.played)+'</td><td>'+esc(r.wins)+'</td><td>'+esc(r.draws)+'</td><td>'+esc(r.losses)+'</td><td>'+esc(r.goalsFor)+'</td><td>'+esc(r.goalsAgainst)+'</td><td>'+esc(r.gd)+'</td><td><b>'+esc(r.points)+'</b></td><td>'+stat+'</td></tr>';
 }).join("");
 return content+'</tbody></table></div></section>';
}
function bars(entries){let max=Math.max(1,...entries.map(x=>x[1]));return entries.map(x=>'<div class="bar-line"><span>'+esc(x[0])+'</span><div class="bar-track"><div class="bar-fill" style="width:'+(100*x[1]/max)+'%"></div></div><b style="text-align:right">'+x[1]+'</b></div>').join("")}
function stats(){
 const ps=filterPlayers(rankPlayers(),false),total=ps.length,topN=ps.filter(top).length,ages=ps.map(age).filter(n=>n!=null),avg=ages.length?(ages.reduce((a,b)=>a+b,0)/ages.length).toFixed(1):"—";
 let n=ps.filter(p=>p.tier).length;let mid='<div class="cards">'+statValue("Matching Players",total)+statValue(st.domain==="europe"?"European Top Class":"League Top Class",topN)+statValue("Average Age",avg)+'</div>';
 mid+='<section class="panel"><div class="section-heading"><h2>Filters</h2><button class="pill" data-action="reset">Reset</button></div>'+filters(false,true)+'</section>';
 mid+='<div class="stat-grid" style="margin-top:14px"><div class="panel"><h2>Tier Distribution</h2>'+(n?bars([...ranks.map(t=>[tierName(t),ps.filter(p=>p.tier===t).length]),["미평가",ps.filter(p=>p.tier==null).length]]):'<div class="empty"><strong>티어 평가 전입니다.</strong></div>')+'</div><div class="panel"><h2>Position Distribution</h2>'+bars(positions.map(t=>[t,ps.filter(p=>p.position===t).length]))+'</div><div class="panel"><h2>Club Representation</h2>'+bars(qualifiers().map(q=>[club(q.club).name,ps.filter(p=>p.club===q.club).length]))+'</div><div class="panel"><h2>Age Breakdown</h2>'+bars([["≤22",ps.filter(p=>age(p)<=22).length],["23–27",ps.filter(p=>age(p)>=23&&age(p)<=27).length],["28–32",ps.filter(p=>age(p)>=28&&age(p)<=32).length],["33+",ps.filter(p=>age(p)>=33).length]])+'</div></div>';
 return mid
}

const homeDomestic=[
 {id:"laliga",tag:"ES",name:"La Liga",detail:"SPAIN",number:"01",color:"bronze"},
 {id:"premierleague",tag:"EN",name:"Premier League",detail:"ENGLAND",number:"02",color:"plum"},
 {id:"seriea",tag:"IT",name:"Serie A",detail:"ITALY",number:"03",color:"blue"},
 {id:"bundesliga",tag:"DE",name:"Bundesliga",detail:"GERMANY",number:"04",color:"red"},
 {id:"ligue1",tag:"FR",name:"Ligue 1",detail:"FRANCE",number:"05",color:"teal"}
];
// Transparent, source-linked competition emblems (Commons; readable no-box treatment in CSS).
const leagueEmblems={
 "laliga":"https://commons.wikimedia.org/wiki/Special:FilePath/LaLiga_logo_2023.svg",
 "premierleague":"https://commons.wikimedia.org/wiki/Special:FilePath/Pl-logo-light.svg",
 "seriea":"https://commons.wikimedia.org/wiki/Special:FilePath/Serie_A.svg",
 "bundesliga":"https://commons.wikimedia.org/wiki/Special:FilePath/Bundesliga_Wordmark_%282002-2010%29.svg",
 "ligue1":"https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Ligue_1_McDonald%27s_2024.svg"
};
const europeEmblems={
 "ucl":"https://commons.wikimedia.org/wiki/Special:FilePath/UEFA_Champions_League_logo.svg",
 "uel":"https://commons.wikimedia.org/wiki/Special:FilePath/Europa_League_2021.svg",
 "uecl":"https://commons.wikimedia.org/wiki/Special:FilePath/UEFA_Conference_League_full_logo_%282024_version%29.svg"
};
const homeEuropean=[
 {id:"ucl",tag:"CL",name:"Champions League",detail:"THE EUROPEAN CUP",number:"01",color:"blue",season:"1999-00"},
 {id:"uel",tag:"EL",name:"Europa League",detail:"THE UEFA CUP LINEAGE",number:"02",color:"bronze",season:"2009-10"},
 {id:"uecl",tag:"CO",name:"Conference League",detail:"SINCE 2021–22",number:"03",color:"teal",season:"2021-22"}
];
function homeCard(c){
 return '<button type="button" class="archive-card '+esc(c.color)+'" data-open-league="'+esc(c.id)+'" data-open-season="'+esc(c.season||"1999-00")+'" aria-label="'+esc(c.name)+' 대회 보기">'+
 '<span class="archive-card-top"><span class="archive-card-number">'+esc(c.number)+' / '+(c.tag==="CL"||c.tag==="EL"||c.tag==="CO"?"03":"05")+'</span><span class="archive-card-arrow" aria-hidden="true">↗</span></span>'+
 ((leagueEmblems[c.id]||europeEmblems[c.id])?'<span class="archive-card-emblem-frame"><img class="archive-card-emblem" src="'+esc(leagueEmblems[c.id]||europeEmblems[c.id])+'" alt="" decoding="async" loading="lazy" data-logo-fallback="'+esc(c.tag)+'"></span>':'<span class="archive-card-monogram" aria-hidden="true">'+esc(c.tag)+'</span>')+
 '<span class="archive-card-bottom"><span class="archive-card-label">'+esc(c.detail)+'</span><strong>'+esc(c.name)+'</strong><span class="archive-card-action">Explore competition <span aria-hidden="true">→</span></span></span></button>';
}
function homeMarkup(){
 return `
 <section class="home-masthead" aria-labelledby="home-title">
  <div class="home-masthead-copy">
   <p class="home-kicker"><span class="home-kicker-line"></span> AN INDEPENDENT FOOTBALL RESEARCH ARCHIVE</p>
   <h1 id="home-title">FOOTBALL<br><em>ARCHIVE<span class="home-period">.</span></em></h1>
   <p class="home-lead">축구의 한 시대를, 한 시즌씩 기록하다.</p>
   
   <div class="home-actions"><button type="button" class="home-primary" data-open-league="laliga" data-open-season="1999-00">1999–00 La Liga 살펴보기 <span aria-hidden="true">↗</span></button><a class="home-secondary" href="#competitions">대회 전체 보기 <span aria-hidden="true">↓</span></a></div>
  </div>
  <div class="home-editorial-art" aria-hidden="true"><span class="art-label">THE GAME. THE PLAYERS. THE ERA.</span><img class="archive-hero-symbol" src="./assets/football-archive-emblem.svg" alt="" width="420" height="420" loading="eager"><span class="art-bottom">SEASONS 1999–2026<span> / </span>THE HISTORICAL COLLECTION</span><span class="art-cross">✳</span></div>
 </section>
 <section class="home-facts" aria-label="아카이브 범위">
  <div><strong>05</strong><span>DOMESTIC LEAGUES</span></div>
  <div><strong>03</strong><span>UEFA COMPETITIONS</span></div>
  <div><strong>27</strong><span>SEASONS IN SCOPE</span></div>
  <div><strong>10</strong><span>PLAYER POSITIONS</span></div>
 </section>
 <section class="home-section" id="competitions" aria-labelledby="home-leagues-title">
  <div class="home-section-heading"><div><p class="home-overline">01 — DOMESTIC</p><h2 id="home-leagues-title">The five leagues<span class="home-period">.</span></h2></div><span class="home-section-count">05 COMPETITIONS</span></div>
  <div class="home-league-grid">${homeDomestic.map(homeCard).join("")}</div>
 </section>
 <section class="home-section home-europe-section" aria-labelledby="home-europe-title">
  <div class="home-section-heading"><div><p class="home-overline">02 — CONTINENTAL</p><h2 id="home-europe-title">European nights<span class="home-period">.</span></h2></div><span class="home-section-count">03 COMPETITIONS</span></div>
  <div class="home-europe-grid">${homeEuropean.map(homeCard).join("")}</div>
 </section>
 <section class="home-section" aria-labelledby="home-world-title">
  <div class="home-section-heading"><div><p class="home-overline">03 — GLOBAL</p><h2 id="home-world-title">The world stage<span class="home-period">.</span></h2></div><span class="home-section-count">GLOBAL PLAYER ARCHIVE</span></div>
  <div class="home-feature-grid">
   <a class="home-feature" href="./world.html" style="text-decoration:none"><span class="home-feature-status">SEASONAL RANKINGS</span><strong>World <span>Class / Best XI</span></strong><span class="home-feature-description">시즌별 세계 포지션 랭킹과 베스트 11</span><span class="home-feature-bottom">Explore World <span aria-hidden="true">↗</span></span></a>
   <a class="home-feature" href="./hall-of-fame.html" style="text-decoration:none"><span class="home-feature-status">CAREER LONGEVITY</span><strong>Hall of <span>Fame</span></strong><span class="home-feature-description">World Class 누적 5시즌 이상</span><span class="home-feature-bottom">Explore Hall of Fame <span aria-hidden="true">↗</span></span></a>
  </div>
 </section>
 <section class="home-section home-current" aria-labelledby="home-current-title">
  <div class="home-section-heading"><div><p class="home-overline">04 — THE COLLECTION</p><h2 id="home-current-title">Inside the archive<span class="home-period">.</span></h2></div></div>
  <div class="home-feature-grid">
   <button type="button" class="home-feature" data-open-league="laliga" data-open-season="1999-00"><span class="home-feature-status">DRAFT</span><strong>La Liga <span>1999–00</span></strong><span class="home-feature-bottom">후보 현황 보기 <span aria-hidden="true">↗</span></span></button>
   <button type="button" class="home-feature home-feature-demo" data-open-league="laliga" data-open-season="2022-23"><span class="home-feature-status">SAMPLE</span><strong>La Liga <span>2022–23</span></strong><span class="home-feature-bottom">시연 화면 보기 <span aria-hidden="true">↗</span></span></button>
  </div>
 </section>
 `;
}
function openArchive(id,season){
 const domestic=competitionGroups.domestic.some(x=>x[0]===id);
 const european=competitionGroups.europe.some(x=>x[0]===id);
 if(!domestic&&!european)return;
 st.domain=domestic?"domestic":"europe";st.league=id;
 st.season=yearList.includes(season)?season:"1999-00";
 st.tab="overview";st.home=false;clearFilters();
 const p=new URLSearchParams({league:st.league,season:st.season,view:st.tab});
 history.pushState(null,"",location.pathname+"?"+p.toString());
 load();window.scrollTo(0,0);
}

function unregistered(){
 
 return '<div class="panel"><div class="empty"><strong>'+esc(label())+' · '+esc(st.season)+'</strong><p>기록 없음</p><button class="pill" data-action="back">1999–00 La Liga</button></div></div>'
}
function render(){
 document.body.classList.toggle("is-home",st.home);
 if(st.home){$("content").innerHTML=homeMarkup();document.title="FOOTBALL ARCHIVE | A History of the Beautiful Game";return}
 document.title=label()+" "+st.season+" | FOOTBALL ARCHIVE";
 syncSelects();pageIntro();const el=$("content");if(loading){el.innerHTML='<div class="empty"><strong>데이터를 불러오는 중입니다.</strong></div>';return}
 if(!data){el.innerHTML=unregistered();return}
 if(st.tab==="overview")el.innerHTML=overview();else if(st.tab==="formation")el.innerHTML=formation();else if(st.tab==="top")el.innerHTML=topPage();else if(st.tab==="tiers")el.innerHTML=tierDirectory();else if(st.tab==="table")el.innerHTML=standings();else el.innerHTML=stats()
}
function uelHistoricalSourceLinks(p){
 const audit=uelHistoricalAudit();if(!audit)return "";
 const fields=audit.fieldSources?.["player:"+p.id]||{},ids=[...new Set(Object.values(fields).flat())];
 const links=ids.map(id=>audit.sources?.[id]).filter(x=>x&&typeof x.url==="string"&&/^https?:\/\//.test(x.url));
 return links.length?'<details class="small"><summary>검수 기록 원문 출처 ('+links.length+')</summary>'+links.map(x=>'<p><a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.provider+' · '+x.scope)+'</a></p>').join("")+'</details>':'';
}
function playerDetails(id){
 const p=data?.players?.find(x=>x.id===id);if(!p)return;
 const source=(p.sources||[]).find(u=>typeof u==="string"&&/^https:\/\//.test(u));
 const seasonEvidence=s=>{const r=p.threeSeasonReview?.records?.[s];if(europeanHistoricalAudit()&&s===data.meta.season)return (p.clubNameOriginal||club(p.club).name)+" · "+europeanHistoricalLabel()+" "+playerApps(p)+"경기 / "+playerStarts(p)+"선발 / "+playerMinutes(p)+"분 / "+playerGoals(p)+"골"+(p.position==="GK"?" / "+playerConceded(p)+"실점":"");if(auditStatsVisible()&&s===data.meta.season)return (p.clubNameOriginal||club(p.club).name)+" · "+(p.leagueAppearances??"—")+"경기 / "+(p.leagueStarts??p.starts??"—")+"선발 / "+playerGoals(p)+"골"+(p.position==="GK"?" / "+(p.leagueGoalsConceded??"—")+"실점":"")+(auditAssistVisible()&&playerAssists(p)!=="—"?" / "+playerAssists(p)+"도움 ("+playerAssistSource(p)+")":"");if(!r)return "기록 미연결";if(auditStatsVisible()&&r.clubRecords?.length)return r.clubRecords.map(c=>(c.club||"소속 미확인")+" · "+(c.appearances??"—")+"경기 / "+(c.starts??"—")+"선발 / "+(c.minutes??"—")+"분 / "+(c.goals??"—")+"골"+(p.position==="GK"?" / "+(c.goalsConceded??"—")+"실점":"")).join(" | ")+" · 구단별 검수 기록";const status=r.verification==="DFB_individual_season_league_appearances_goals_directly_verified"?"DFB 개인 기록 직접 대조":r.verification==="historical_archive_DRAFT_not_independently_verified"?"과거 DRAFT · 독립 검증 전":"추가 검증 필요";return (r.club||"소속 미확인")+" · "+(r.appearances??"—")+"경기 / "+(r.goals??"—")+"골"+(r.goalsConceded!=null?" / "+r.goalsConceded+"실점":"")+(r.assists!=null?" / "+r.assists+"도움 (출처별 기준)":"")+(Array.isArray(r.clubRecords)?" · 구단별: "+r.clubRecords.map(c=>c.club+" "+(c.appearances??"—")+"경기 "+(c.goals??"—")+"골").join(" / "):"")+" · "+status};
 const detailRows=[["원어명",p.nameOriginal||p.name],["Position",p.position],...(p.positionAudit?[["선발 위치 검수 (재검토)",p.positionAudit.distribution]]:[]),["Starting role",p.role==="starter"?"주전":p.role==="backup"?"후보":"—"],[europeanHistoricalAudit()?europeanHistoricalLabel()+" 선발":"League starts",playerStarts(p)],...(auditStatsVisible()?[[europeanHistoricalAudit()?europeanHistoricalLabel()+" 출전":"League appearances",playerApps(p)],[europeanHistoricalAudit()?europeanHistoricalLabel()+" 출전 분":"League minutes",playerMinutes(p)],[europeanHistoricalAudit()?europeanHistoricalLabel()+" 득점":"League goals",playerGoals(p)],...(auditAssistVisible()?[[europeanHistoricalAudit()?europeanHistoricalLabel()+" 도움":"League assists",playerAssists(p)],["Assist source",playerAssistSource(p)]]:[]),...(p.position==="GK"?[[europeanHistoricalAudit()?europeanHistoricalLabel()+" 실점":"League goals conceded",playerConceded(p)]]:[])]:[]),...(europeanHistoricalAudit()?[["본선 통계 범위","예선·승부차기 제외; — = 미확인"],["검수된 필드 공급자",uclFieldSources(p)||"별도 확인 필요"]]:[]),["Date of birth",p.born??"—"],["소속",p.clubNameOriginal||club(p.club).name],["포지션 순위(잠정)",p.rank??"미평가"],["평가 검증",(p.evaluationStatus||"").startsWith("provisional_tier")?"잠정 티어 · 미승인 · 근거 보강 필요":"근거 확인 대기"],["World Class",p.tier?(["S","A+"].includes(p.tier)?"잠정 해당":"—"):"미평가"],...(p.verificationStatus?[["실제 역사 검증",p.verificationStatus]]:[]),...(p.threeSeasonReview?.records?(p.threeSeasonReview.assessmentSeasons||p.threeSeasonReview.seasons||Object.keys(p.threeSeasonReview.records)).map(y=>[y+" 개인기록",seasonEvidence(y)]):[]),...(p.verificationNeeded?.length?[["미검증 항목",p.verificationNeeded.join(" · ")]]:[])];
 const html='<div class="overlay" role="dialog" aria-modal="true" aria-label="Player information"><div class="dialog"><button class="close" data-action="close">✕</button><div class="eyebrow">PLAYER RECORD · '+esc(st.season)+'</div><h2>'+esc(p.nameKo||p.name)+'</h2><p class="muted">'+esc(p.nameOriginal||p.name)+'</p><div style="display:flex;gap:10px;align-items:center;margin:14px 0">'+crest(p.club)+'<b>'+esc(p.clubNameOriginal||club(p.club).name)+'</b>'+grade(p.tier)+'</div>'+
 detailRows.map(x=>'<div class="detail-row"><span>'+esc(x[0])+'</span><b>'+esc(x[1])+'</b></div>').join("")+
 (p.assessmentRationale?'<p class="notice" style="margin-top:12px">'+esc(p.assessmentRationale)+'</p>':'')+
 (uelHistoricalAudit()?uelHistoricalSourceLinks(p):"")+
  (source?'<p class="small" style="margin-top:10px"><a href="'+esc(source)+'" target="_blank" rel="noopener noreferrer">시즌 자료 · 출처 ↗</a></p>':'')+
 (p.evidence?.currentSeason?'<p class="small"><a href="'+esc(p.evidence.currentSeason)+'" target="_blank" rel="noopener noreferrer">'+esc(st.season)+' 리그 개인기록 출처 ↗</a></p>':'')+
 (p.evidence?.individualThreeSeasonDFB?'<p class="small"><a href="'+esc(p.evidence.individualThreeSeasonDFB)+'" target="_blank" rel="noopener noreferrer">3시즌 DFB 개인기록 대조 ↗</a></p>':'')+
 '<p class="notice">'+(data.meta.status==="approved"?"":data.meta.status==="demo"?"SAMPLE":"DRAFT · 승인 전, 변경 가능")+'</p></div></div>';
 let layer=document.createElement("div");layer.id="modalLayer";layer.innerHTML=html;document.body.appendChild(layer)
}
function closeModal(){document.getElementById("modalLayer")?.remove()}
/* Cards show a neutral abbreviation if a logo file is blocked or missing. */
document.addEventListener("error",event=>{
 const image=event.target;
 if(!image?.classList?.contains("archive-card-emblem"))return;
 const frame=image.closest(".archive-card-emblem-frame");
 if(!frame)return;
 frame.textContent=image.dataset.logoFallback||"";
 frame.classList.add("is-fallback");
},true);
/* Keep real club emblems visible when one provider fails or blocks hotlinking. */
document.addEventListener("error",event=>{
 const image=event.target;
 if(!image||!image.classList?.contains("crest"))return;
 let backups=[];try{backups=JSON.parse(image.dataset.backups||"[]")}catch(err){}
 const attempt=Number(image.dataset.backupAttempt||0);
 if(attempt<backups.length){
   image.dataset.backupAttempt=String(attempt+1);
   image.src=backups[attempt];
   return;
 }
 image.outerHTML=image.dataset.fallback||"";
},true);
document.addEventListener("click",ev=>{
 let btn=ev.target.closest("button");if(btn){
 if(btn.dataset.seasonStep){
  changeSeason(yearList[yearList.indexOf(st.season)+Number(btn.dataset.seasonStep)]);
  return;
 }
 if(btn.dataset.openLeague){openArchive(btn.dataset.openLeague,btn.dataset.openSeason);return}
 if(btn.dataset.tab){st.tab=btn.dataset.tab;st.showCandidates=false;writeUrl();render();return}
 if(btn.dataset.go){st.tab=btn.dataset.go;writeUrl();render();return}
 if(btn.dataset.position){st.position=btn.dataset.position;render();return}
 if(btn.dataset.posGo){st.tab="overview";st.showCandidates=true;st.position=btn.dataset.posGo;st.club="all";writeUrl();render();document.getElementById("candidate-pool")?.scrollIntoView({behavior:"smooth",block:"start"});return}
 if(btn.dataset.clubGo){st.tab="overview";st.showCandidates=true;st.club=btn.dataset.clubGo;st.position="all";st.from="S";st.to="D";writeUrl();render();document.getElementById("candidate-pool")?.scrollIntoView({behavior:"smooth",block:"start"});return}
 if(btn.dataset.toptier){st.tier=btn.dataset.toptier;render();return}
 if(btn.dataset.tierView){st.tierView=btn.dataset.tierView;render();return}
 if(btn.dataset.player){playerDetails(btn.dataset.player);return}
 if(btn.dataset.action==="close"){closeModal();return}
 if(btn.dataset.action==="candidates"){st.showCandidates=!st.showCandidates;render();if(st.showCandidates)document.getElementById("candidate-pool")?.scrollIntoView({behavior:"smooth",block:"start"});return}
 if(btn.dataset.action==="reset"){clearFilters();st.showCandidates=true;render();return}
 if(btn.dataset.action==="qualonly"){st.qualifiedOnly=!st.qualifiedOnly;render();return}
 if(btn.dataset.action==="back"){st.domain="domestic";st.league="laliga";st.season="1999-00";st.tab="overview";clearFilters();writeUrl();load();return}
 }
 let row=ev.target.closest("[data-player]");if(row&&data){playerDetails(row.dataset.player);return}
 if(ev.target.classList.contains("overlay"))closeModal();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("domain").addEventListener("change",e=>{st.domain=e.target.value;st.league=competitionGroups[st.domain][0][0];setCompetition()});
$("league").addEventListener("change",e=>{st.league=e.target.value;setCompetition()});
$("season").addEventListener("change",e=>changeSeason(e.target.value));
$("content").addEventListener("change",e=>{
 const f=e.target.dataset.filter;if(!f)return;
 if(f==="position")st.position=e.target.value;
 if(f==="club")st.club=e.target.value;
 if(f==="from"){st.from=e.target.value;if(ranks.indexOf(st.from)>ranks.indexOf(st.to))st.to=st.from}
 if(f==="to"){st.to=e.target.value;if(ranks.indexOf(st.to)<ranks.indexOf(st.from))st.from=st.to}
 if(f==="age")st.age=e.target.value;
 render();
});
$("content").addEventListener("input",e=>{
 if(e.target.dataset.filter!=="search")return;st.search=e.target.value;
 const caret=e.target.selectionStart;render();const next=document.querySelector("[data-filter=search]");if(next){next.focus();next.setSelectionRange(caret,caret)}
});
if(competitionGroups.domestic.some(x=>x[0]===q.get("league")))st.league=q.get("league");
else if(competitionGroups.europe.some(x=>x[0]===q.get("league"))){st.domain="europe";st.league=q.get("league")}
if(yearList.includes(q.get("season")))st.season=q.get("season");
if(["overview","formation","top","tiers","table","stats"].includes(q.get("view")))st.tab=q.get("view");
if(q.get("view")==="ranking")st.showCandidates=true;
if(st.domain==="europe"&&!["ucl","uel","uecl"].includes(st.league)&&["formation","table"].includes(st.tab))st.tab="overview";
if(st.home)render();else load();
window.addEventListener("popstate",()=>{
 const p=new URLSearchParams(location.search);
 if(!p.has("league")){loadSequence++;st.home=true;data=null;loading=false;render();return}
 const id=p.get("league");
 const domestic=competitionGroups.domestic.some(x=>x[0]===id);
 const european=competitionGroups.europe.some(x=>x[0]===id);
 if(!domestic&&!europe){st.home=true;data=null;loading=false;render();return}
 st.home=false;st.domain=domestic?"domestic":"europe";st.league=id;
 st.season=yearList.includes(p.get("season"))?p.get("season"):"1999-00";
 st.tab=["overview","formation","top","tiers","table","stats"].includes(p.get("view"))?p.get("view"):"overview";
 if(st.domain==="europe"&&!["ucl","uel","uecl"].includes(st.league)&&["formation","table"].includes(st.tab))st.tab="overview";
 clearFilters();if(p.get("view")==="ranking")st.showCandidates=true;load();
});
})();