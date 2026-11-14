(function(){
"use strict";
const $=id=>document.getElementById(id);
const competitionGroups={
 domestic:[["laliga","La Liga"],["premierleague","Premier League"],["seriea","Serie A"],["bundesliga","Bundesliga"],["ligue1","Ligue 1"]],
 europe:[["ucl","UEFA Champions League"],["uel","UEFA Europa League"],["uecl","UEFA Conference League"]]
};
const ranks=["S","A+","A","A-","B+","B","B-","C+","C","C-","D"];
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const slots433=[["LW",15,13],["ST",50,11],["RW",85,13],["CM",30,37],["CAM",70,37],["DM",50,54],["LB",13,73],["CB",37,76],["CB",63,76],["RB",87,73],["GK",50,91]];
const slots442=[["ST",35,14],["ST",65,14],["LW",12,40],["CM",42,45],["DM",60,52],["RW",88,40],["LB",13,74],["CB",37,76],["CB",63,76],["RB",87,74],["GK",50,91]];
const slots4411=[["ST",50,12],["CAM",50,28],["LW",12,45],["CM",40,53],["DM",61,56],["RW",88,45],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,92]];
const slots4312=[["ST",33,12],["ST",67,12],["CAM",50,31],["CM",29,47],["CM",71,47],["DM",50,59],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,91]];
const slots3412=[["ST",34,13],["ST",66,13],["CAM",50,34],["CM",33,51],["DM",67,51],["LB",9,63],["RB",91,63],["CB",25,77],["CB",50,81],["CB",75,77],["GK",50,93]];
const slots352=[["ST",34,13],["ST",66,13],["CM",30,43],["CM",70,43],["DM",50,55],["LB",10,62],["RB",90,62],["CB",25,78],["CB",50,81],["CB",75,78],["GK",50,93]];
const slots4231=[["ST",50,12],["LW",14,32],["CAM",50,36],["RW",86,32],["DM",38,56],["CM",62,56],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,92]];
const q=new URLSearchParams(location.search);
const st={domain:"domestic",league:"laliga",season:"1999-00",tab:"overview",home:!q.has("league"),showCandidates:q.get("view")==="ranking",position:"all",club:"all",from:"S",to:"D",search:"",tier:"all",tierView:"clubs",age:"all",qualifiedOnly:false};
let data=null,loading=false,loadSequence=0;
const yearList=Array.from({length:27},(_,i)=>{let a=1999+i,b=(a+1)%100;return a+"-"+String(b).padStart(2,"0")});
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
function label(){return competitionGroups[st.domain].find(x=>x[0]===st.league)?.[1]||"Football"}
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
   data.standings=verified.standings.map(r=>({...r,competition:curatedEuropean?(european[r.club]||null):(earlier.get(r.club)?.competition||null)}));
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
function rankPlayers(){return (data?.players||[]).slice().sort((a,b)=>positions.indexOf(a.position)-positions.indexOf(b.position)||((a.rank||999)-(b.rank||999))||((a.tier?ranks.indexOf(a.tier):ranks.length)-(b.tier?ranks.indexOf(b.tier):ranks.length))||a.name.localeCompare(b.name))}
function hasTop(){return (data?.players||[]).some(p=>top(p))}
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
 Array.from(document.querySelectorAll(".main-nav button")).forEach(b=>{b.classList.toggle("active",b.dataset.tab===st.tab);b.disabled=st.domain==="europe"&&!(["ucl","uel","uecl"].includes(data?.meta?.competitionId)&&data?.groups?.length)&&["formation","table"].includes(b.dataset.tab)})
}
function statValue(label,value,note){return '<div class="metric"><span class="name">'+label+'</span><strong class="value">'+value+'</strong>'+(note?'<small class="note">'+esc(note)+'</small>':"")+'</div>'}
function qualifiers(){return data?.qualifiers||[]}
function qualItem(v){
 const body=crest(v.club)+'<span class="qual-title">'+esc(club(v.club).name)+'</span>'+comp(v.competition)+(v.additionalCompetitions||[]).map(comp).join('');
 return data?.meta?.standingsOnly?'<div class="qual-item static-qual">'+body+'</div>':'<button class="qual-item" data-club-go="'+esc(v.club)+'">'+body+'</button>';
}

function uclTable(g){
 let t='<div class="table-scroll"><table class="datagrid"><thead><tr><th>#</th><th>CLUB</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th><th>RESULT</th></tr></thead><tbody>';
 for(const a of g.table)t+='<tr><td>'+esc(a.rank)+'</td><td>'+esc(club(a.club).name)+'</td><td>'+esc(a.played)+'</td><td>'+esc(a.wins)+'</td><td>'+esc(a.draws)+'</td><td>'+esc(a.losses)+'</td><td>'+esc(a.goalsFor)+'</td><td>'+esc(a.goalsAgainst)+'</td><td>'+esc(a.gd)+'</td><td>'+esc(a.points)+'</td><td>'+esc(a.status==="second_group_stage"?"2차 조별리그":a.status==="round_of_32"?"32강":a.status==="round_of_16"?"16강":a.status==="quarter_finals"?"8강":a.status==="uefa_cup"?"UEFA Cup":"탈락")+'</td></tr>';
 return t+'</tbody></table></div>';
}
function uclTournament(){
 let groups=data.groups||[],ms=data.matches||[];
 const hasSecondGroup=groups.some(g=>g.stage===2);
 const isUEL=data?.meta?.competitionId==="uel";
 const knockouts=isUEL?["round_of_32","round_of_16","quarter_final","semi_final","final"]:hasSecondGroup?["quarter_final","semi_final","final"]:["round_of_16","quarter_final","semi_final","final"];
 let h='<section class="panel"><div class="section-heading"><h2>'+esc(label())+' '+esc(data.meta.season.replace("-","–"))+' · 본선 전체 경기</h2><button class="pill" data-go="overview">Overview</button></div><p class="muted small">대회 경기 결과 · 본선 '+(data.participants||[]).length+'팀, '+(isUEL?'12개 조, 32강~결승':hasSecondGroup?'1차 8개 조, 2차 4개 조, 8강~결승':'8개 조, 16강~결승')+'</p><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Matches",ms.length)+statValue("Goals",data.meta?.verification?.totalGoals??ms.reduce((n,m)=>n+m.homeGoals+m.awayGoals,0))+'</div></section>';
 if(data.meta?.verification?.awardedMatchCount)h+='<p class="muted small">공식 실제 득점 '+esc(data.meta.verification.actualPlayedGoals)+'골 · 징계 몰수 결과 포함 스코어 합계 '+esc(data.meta.verification.decidedScoreGoals)+'골 (로마–디나모 키이우, 인테르–밀란 각각 0–1 중단 후 0–3 처리)</p>';
 for(const stage of (hasSecondGroup?[1,2]:[1])){
  h+='<section class="panel" style="margin-top:15px"><h2>'+(stage===1?(hasSecondGroup?"First group stage · 32 clubs":"Group stage · "+(isUEL?"48":"32")+" clubs"):"Second group stage · 16 clubs")+'</h2>';
  for(const g of groups.filter(x=>x.stage===stage)){
   let gs=ms.filter(m=>m.stage===stage&&m.group===g.code);
   h+='<div style="margin-top:18px"><h3>Group '+esc(g.code)+'</h3>'+uclTable(g)+'<details style="margin-top:8px" '+(stage===2?'open':'')+'><summary class="small muted" style="cursor:pointer">12경기 결과</summary><div class="table-scroll"><table class="datagrid"><thead><tr><th>DATE</th><th>HOME</th><th>SCORE</th><th>AWAY</th></tr></thead><tbody>'+gs.map(m=>'<tr><td>'+esc(m.date)+'</td><td>'+esc(club(m.home).name)+'</td><td><b>'+esc(m.homeGoals+' : '+m.awayGoals)+'</b></td><td>'+esc(club(m.away).name)+'</td></tr>').join("")+'</tbody></table></div></details></div>';
  }h+='</section>';
 }
 h+='<section class="panel" style="margin-top:15px"><h2>Knockout phase · '+(isUEL?'32강 / 16강 / 8강 / 4강 / 결승':hasSecondGroup?'8강 / 4강 / 결승':'16강 / 8강 / 4강 / 결승')+'</h2><div class="table-scroll"><table class="datagrid"><thead><tr><th>ROUND</th><th>DATE</th><th>HOME</th><th>SCORE</th><th>AWAY</th></tr></thead><tbody>'+ms.filter(m=>knockouts.includes(m.round)).map(m=>'<tr><td>'+esc(m.round==="round_of_32"?"32강":m.round==="round_of_16"?"16강":m.round==="quarter_final"?"8강":m.round==="semi_final"?"4강":"결승")+'</td><td>'+esc(m.date)+'</td><td>'+esc(club(m.home).name)+'</td><td><b>'+esc(m.homeGoals+' : '+m.awayGoals+(m.penaltyShootout?' (PK '+m.penaltyShootout.home+'–'+m.penaltyShootout.away+')':''))+'</b></td><td>'+esc(club(m.away).name)+'</td></tr>').join("")+'</tbody></table></div></section>';
 return h;
}
function uclOverview(){
 const groups=data.groups||[],people=data.players||[],qualifiers=data.evaluatedClubs||[];
 const hasSecondGroup=groups.some(g=>g.stage===2);
 const isUEL=data?.meta?.competitionId==="uel";
 let h='<section class="panel"><div class="section-heading"><div><h2>'+esc(label())+' · '+esc(data.meta.season.replace("-","–"))+'</h2><p class="muted small">우승 '+esc(club(data.knockout.find(k=>k.stage==="final")?.winner).name)+' · 준우승 '+esc(club((()=>{const f=data.knockout.find(k=>k.stage==="final");return f?.winner===f?.home?f?.away:f?.home})()).name)+'</p></div><button class="pill" data-go="table">모든 경기 및 조별리그</button></div><div class="cards">'+statValue("Clubs",(data.participants||[]).length)+statValue("Evaluated clubs",qualifiers.length)+statValue("Games",(data.matches||[]).length)+statValue("Goals",data.meta?.verification?.totalGoals??(data.matches||[]).reduce((n,m)=>n+m.homeGoals+m.awayGoals,0))+'</div></section>';
 if(data.meta?.verification?.awardedMatchCount)h+='<p class="muted small">UEFA 실제 득점 '+esc(data.meta.verification.actualPlayedGoals)+'골 / 몰수·징계 결과 포함 스코어 합계 '+esc(data.meta.verification.decidedScoreGoals)+'골. 경기 결과는 확정 0–3, 실제 득점 통계는 중단 당시 0–1로 따로 계산.</p>';
 h+='<section class="panel" style="margin-top:15px"><h2>'+(hasSecondGroup?'1차 조별리그':'조별리그')+' · 참가 '+(isUEL?"48":"32")+'개 구단</h2>';
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
 if(st.domain==="europe"&&["ucl","uel","uecl"].includes(data?.meta?.competitionId)&&data?.groups?.length)return uclOverview();
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
function tablePlayers(rows){
 if(!rows.length)return '<div class="empty">선수 없음</div>';
 return '<div class="table-scroll"><table class="datagrid"><thead><tr><th>POS</th><th>PLAYER</th><th>CLUB</th><th>BORN</th><th>ROLE</th><th>STARTS</th><th>RANK</th><th>TIER</th></tr></thead><tbody>'+rows.map(p=>'<tr data-player="'+esc(p.id)+'"><td><b>'+esc(p.position)+'</b></td><td class="person">'+esc(p.nameKo||p.name)+'<span class="small muted" style="display:block;font-weight:400">'+esc(p.nameOriginal||p.name)+'</span></td><td><div style="display:flex;align-items:center;gap:8px">'+crest(p.club)+esc(p.clubNameOriginal||club(p.club).name)+'</div></td><td>'+esc(p.born||"—")+'</td><td>'+esc(p.role==="starter"?"주전":p.role==="backup"?"후보":"—")+'</td><td>'+esc(p.starts??p.leagueStarts??"—")+'</td><td>'+esc(p.rank??"—")+'</td><td>'+grade(p.tier)+'</td></tr>').join("")+'</tbody></table></div>'
}
function tierEvidenceNotice(){
 const a=data?.audit?.tierImport;
 if(st.domain!=="europe"||data?.meta?.competitionId!=="ucl"||!a)return "";
 return '<p class="small muted" style="margin:9px 0">평가 근거 구분: '+esc(a.added||0)+'명은 해당 시즌 국내 리그 DRAFT 개인 티어를 참조해 표시한 <b>조건부 잠정 등급</b>입니다. UCL 3시즌 개인 활약을 독립 검증한 최종 티어가 아니며, '+esc(a.stillPending||0)+'명은 근거 부족으로 평가 대기 상태입니다. Best XI도 사용자 미승인입니다.</p>';
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
 let formationName=["3-4-1-2","3-5-2","4-3-1-2","4-4-1-1","4-4-2","4-2-3-1","4-3-3"].includes(data?.meta?.formation)?data.meta.formation:"4-3-3";
 let layout=formationName==="3-5-2"?slots352:formationName==="3-4-1-2"?slots3412:formationName==="4-3-1-2"?slots4312:formationName==="4-2-3-1"?slots4231:formationName==="4-4-1-1"?slots4411:formationName==="4-4-2"?slots442:slots433;
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
 let marks=layout.map(x=>{let matches=selection.filter(b=>b.position===x[0]);let index=used[x[0]]||0;used[x[0]]=index+1;let pick=matches[index];let p=data.players.find(y=>y.id===pick?.playerId);let selectedPosition=p?.position||x[0];let fieldPosition=pick?.displayPosition||x[0];return '<button class="slot '+(st.position===selectedPosition?"active":"")+'" data-position="'+selectedPosition+'" style="left:'+x[1]+'%;top:'+x[2]+'%"><span class="spot">'+esc(fieldPosition)+'</span><span class="slot-label">'+(p?esc(p.nameKo||p.name):"선정 대기")+'</span>'+(p?'<span class="slot-tier">'+grade(p.tier)+'</span>':'')+'</button>'}).join("");
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
 const xiTable=(["bundesliga","seriea","ligue1"].includes(st.league)||st.domain==="europe")&&Array.isArray(data.bestXi)&&data.bestXi.length===11?'<div class="xi-detail-list"><h3>Best XI · 11명 개별 티어 및 선정 근거</h3><div class="table-scroll"><table class="datagrid"><thead><tr><th>전술 위치</th><th>한글 이름 / 원어명</th><th>구단</th><th>실제 주 포지션</th><th>티어</th><th>선정 근거</th></tr></thead><tbody>'+selection.map(s=>{const p=data.players.find(x=>x.id===s.playerId);return '<tr data-player="'+esc(s.playerId)+'"><td>'+esc(s.displayPosition||s.position)+'</td><td class="person">'+esc(p?.nameKo||"—")+'<span class="small muted" style="display:block">'+esc(p?.nameOriginal||p?.name||"—")+'</span></td><td>'+esc(p?.clubNameOriginal||"—")+'</td><td>'+esc(p?.position||"—")+'</td><td>'+grade(p?.tier)+'</td><td>'+esc(s.reason||"근거 확인 대기")+'</td></tr>'}).join("")+'</tbody></table></div></div>':"";
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
 if(st.domain==="europe"&&["ucl","uel","uecl"].includes(data?.meta?.competitionId)&&data?.groups?.length)return uclTournament();
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
  const stat=down?'<span class="relegation-chip">↓ '+(r.outcome==="relegated_administrative"?"행정 강등":"강등")+'</span>':adminStay?'<span class="retention-chip">잔류 · 행정</span>':euroStatus;
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
 <section class="home-section home-current" aria-labelledby="home-current-title">
  <div class="home-section-heading"><div><p class="home-overline">03 — THE COLLECTION</p><h2 id="home-current-title">Inside the archive<span class="home-period">.</span></h2></div></div>
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
function playerDetails(id){
 const p=data?.players?.find(x=>x.id===id);if(!p)return;
 const source=(p.sources||[]).find(u=>typeof u==="string"&&/^https:\/\//.test(u));
 const seasonEvidence=s=>{const r=p.threeSeasonReview?.records?.[s];if(!r)return "기록 미연결";const status=r.verification==="DFB_individual_season_league_appearances_goals_directly_verified"?"DFB 개인 기록 직접 대조":r.verification==="historical_archive_DRAFT_not_independently_verified"?"과거 DRAFT · 독립 검증 전":"추가 검증 필요";return (r.club||"소속 미확인")+" · "+(r.appearances??"—")+"경기 / "+(r.goals??"—")+"골 · "+status};
 const detailRows=[["원어명",p.nameOriginal||p.name],["Position",p.position],["Starting role",p.role==="starter"?"주전":p.role==="backup"?"후보":"—"],["League starts",p.starts??p.leagueStarts??"—"],["Date of birth",p.born??"—"],["소속",p.clubNameOriginal||club(p.club).name],["포지션 순위(잠정)",p.rank??"미평가"],["평가 검증",(p.evaluationStatus||"").startsWith("provisional_tier")?"잠정 티어 · 미승인 · 근거 보강 필요":"근거 확인 대기"],["World Class",p.tier?(["S","A+"].includes(p.tier)?"잠정 해당":"—"):"미평가"],...(p.verificationStatus?[["실제 역사 검증",p.verificationStatus]]:[]),...(p.threeSeasonReview?.records?(p.threeSeasonReview.assessmentSeasons||Object.keys(p.threeSeasonReview.records)).map(y=>[y+" 개인기록",seasonEvidence(y)]):[]),...(p.verificationNeeded?.length?[["미검증 항목",p.verificationNeeded.join(" · ")]]:[])];
 const html='<div class="overlay" role="dialog" aria-modal="true" aria-label="Player information"><div class="dialog"><button class="close" data-action="close">✕</button><div class="eyebrow">PLAYER RECORD · '+esc(st.season)+'</div><h2>'+esc(p.nameKo||p.name)+'</h2><p class="muted">'+esc(p.nameOriginal||p.name)+'</p><div style="display:flex;gap:10px;align-items:center;margin:14px 0">'+crest(p.club)+'<b>'+esc(p.clubNameOriginal||club(p.club).name)+'</b>'+grade(p.tier)+'</div>'+
 detailRows.map(x=>'<div class="detail-row"><span>'+esc(x[0])+'</span><b>'+esc(x[1])+'</b></div>').join("")+
 (p.assessmentRationale?'<p class="notice" style="margin-top:12px">'+esc(p.assessmentRationale)+'</p>':'')+
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