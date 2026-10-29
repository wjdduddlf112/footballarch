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
const slots4231=[["ST",50,12],["LW",14,32],["CAM",50,36],["RW",86,32],["DM",38,56],["CM",62,56],["LB",13,76],["CB",37,79],["CB",63,79],["RB",87,76],["GK",50,92]];
const q=new URLSearchParams(location.search);
const st={domain:"domestic",league:"laliga",season:"1999-00",tab:"overview",home:!q.has("league"),showCandidates:q.get("view")==="ranking",position:"all",club:"all",from:"S",to:"D",search:"",tier:"all",age:"all",qualifiedOnly:false};
let data=null,loading=false;
const yearList=Array.from({length:26},(_,i)=>{let a=1999+i,b=(a+1)%100;return a+"-"+String(b).padStart(2,"0")});
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
const tierClassNames={"S":"tier-grade-s","A+":"tier-grade-a-plus","A":"tier-grade-a","A-":"tier-grade-a-minus","B+":"tier-grade-b-plus","B":"tier-grade-b","B-":"tier-grade-b-minus","C+":"tier-grade-c-plus","C":"tier-grade-c","C-":"tier-grade-c-minus","D":"tier-grade-d"};
function tierClass(t){return tierClassNames[t]||""}
function grade(t){return t?'<span class="tier '+tierClass(t)+' '+(ranks.indexOf(t)<=3?"top":"")+'">'+esc(t)+'</span>':'<span class="placeholder">미평가</span>'}
function top(p){return p.tier&&ranks.indexOf(p.tier)<=3}
function age(p){if(!p.born)return null;let vals=p.born.split("-").map(Number);if(vals.length!==3||!vals[0])return null;const year=2000+Number(st.season.split("-")[1]);return year-vals[0]-((vals[1]>6)?1:0)}
function option(items,current){return items.map(x=>'<option value="'+esc(x[0])+'"'+(x[0]===current?' selected':'')+'>'+esc(x[1])+'</option>').join("")}
function syncSelects(){
 $("domain").value=st.domain;
 $("league").innerHTML=option(competitionGroups[st.domain],st.league);
 $("season").innerHTML=option(yearList.map(x=>[x,x.replace("-","–")]),st.season);
}
function label(){return competitionGroups[st.domain].find(x=>x[0]===st.league)?.[1]||"Football"}
function seasonEndLabel(){return st.season.split("-")[0]+"–"+(2000+Number(st.season.split("-")[1]))}
function clearFilters(){st.position="all";st.club="all";st.from="S";st.to="D";st.search="";st.tier="all";st.age="all";st.qualifiedOnly=false;st.showCandidates=false}
function writeUrl(){st.home=false;let p=new URLSearchParams({league:st.league,season:st.season,view:st.tab});history.replaceState(null,"",location.pathname+"?"+p.toString())}
async function load(){
 loading=true;data=null;render();
 const path="./data/"+st.league+"-"+st.season+".json";
 try{const r=await fetch(path,{cache:"no-cache"});if(!r.ok)throw Error("Not registered");data=await r.json()}catch(err){data=null}
 loading=false;render()
}
function setCompetition(){st.home=false;clearFilters();st.tab="overview";writeUrl();load()}
function seasonsStatus(){return data?.meta?.status==="demo"?"demo":data?.meta?.status==="approved"?"approved":"pending"}
function rankPlayers(){return (data?.players||[]).slice().sort((a,b)=>positions.indexOf(a.position)-positions.indexOf(b.position)||((a.rank||999)-(b.rank||999))||ranks.indexOf(a.tier)-ranks.indexOf(b.tier)||a.name.localeCompare(b.name))}
function hasTop(){return (data?.players||[]).some(p=>top(p))}
function pageIntro(){
 $("eyebrow").textContent=(st.domain==="domestic"?"DOMESTIC LEAGUES":"EUROPEAN COMPETITIONS")+" / "+st.season;
 $("heading").textContent=label()+"  /  "+st.season.replace("-","–");
 $("subheading").textContent=data?(data.meta.status==="demo"?"시연용 선수 평가 데이터입니다. 실제 최종 선정 결과가 아닙니다.":data.meta.bestXiReview?.status==="proposed_unapproved"?"베스트 XI와 티어는 검수용 초안입니다. 당시 전술과 선수 기록을 검증 중입니다.":"승인된 데이터만 공식 선정 결과로 반영됩니다."):"이 시즌의 데이터는 아직 등록되지 않았습니다.";
 $("stateTag").textContent=loading?"불러오는 중":!data?"미등록":data.meta.label||data.meta.status;
 $("stateTag").className="status "+(data?.meta.status==="demo"?"demo":"pending");
 Array.from(document.querySelectorAll(".main-nav button")).forEach(b=>{b.classList.toggle("active",b.dataset.tab===st.tab);b.disabled=st.domain==="europe"&&["formation","table"].includes(b.dataset.tab)})
}
function statValue(label,value,note){return '<div class="metric"><span class="name">'+label+'</span><strong class="value">'+value+'</strong>'+(note?'<small class="note">'+esc(note)+'</small>':"")+'</div>'}
function qualifiers(){return data?.qualifiers||[]}
function qualItem(v){return '<button class="qual-item" data-club-go="'+esc(v.club)+'">'+crest(v.club)+'<span class="qual-title">'+esc(club(v.club).name)+'</span>'+comp(v.competition)+'</button>'}
function overview(){
 const n=(data.players||[]).length,k=qualifiers();
 let result='<div class="cards">'+statValue("유럽대항전 진출 구단",k.length,"평가 시즌 종료 후 다음 시즌 참가")+
 statValue("등록 후보 선수",n,"후보 검토 단계 포함")+
 statValue("승인된 티어",data.meta.status==="approved"?(data.players||[]).filter(p=>p.tier).length:"—","승인 전 평가는 공식 집계 제외")+'</div>';
 result+='<div class="panel"><div class="section-heading"><div><h2>Qualified Clubs</h2><div class="muted small">다음 시즌 실제 UEFA 대회 참가를 기준으로 한 후보 구단</div></div><span class="status">'+k.length+' CLUBS</span></div>';
 if(k.length){result+='<div class="qual-list">'+k.map(qualItem).join("")+'</div><div class="notice">구단을 누르면 해당 구단의 후보 선수 명단으로 이동합니다. 인터토토컵 참가 구단도 포함합니다.</div>'}
 else result+='<div class="empty"><strong>후보 구단 정보가 없습니다.</strong></div>';
 result+='</div>';
 if(n){const counts=positions.map(p=>[p,(data.players||[]).filter(x=>x.position===p).length]).filter(x=>x[1]);
 result+='<div class="panel" style="margin-top:15px"><div class="section-heading"><div><h2>Candidate Progress</h2><span class="small muted">등록된 포지션 후보 — 검수 전 자료 포함</span></div><button class="pill" data-action="candidates">'+(st.showCandidates?'후보 목록 닫기':'전체 후보 보기')+'</button></div><div class="pills">'+counts.map(x=>'<button class="pill" data-pos-go="'+x[0]+'">'+x[0]+' &nbsp; '+x[1]+'</button>').join("")+'</div></div>'}
 const relegated=(data.standings||[]).filter(r=>r.outcome==="relegated");
 if(relegated.length)result+='<div class="panel relegation-overview"><div class="section-heading"><div><h2>Relegation</h2><span class="small muted">다음 시즌 2부 리그 강등</span></div><span class="relegation-chip">↓ '+relegated.length+' CLUBS</span></div><div class="relegation-list">'+relegated.map(r=>'<div class="relegation-item">'+crest(r.club)+'<span>'+esc(r.rank)+'위 '+esc(club(r.club).name)+'</span><b>'+esc(r.points)+' PTS</b></div>').join("")+'</div></div>';
 if(st.showCandidates&&n)result+=candidatePool();
 if((data.bestXi||[]).length===11&&data.meta.bestXiReview?.status==="proposed_unapproved")result+='<div class="panel" style="margin-top:15px"><div class="section-heading"><div><h2>'+esc(st.season.replace("-","–"))+' Best XI · 1차 선정안</h2><span class="small muted">'+esc(data.meta.formation||"검수 중")+' · 선수와 포지션의 추가 검수가 필요한 비확정 명단</span></div><button class="pill" data-go="formation">베스트 XI 보기</button></div><div class="notice">11명 전원 현재 후보군에서 선정했습니다. 포지션별 순위는 배정되어 있으며, 베스트 XI 확정과 역사적 근거 검증은 진행 중입니다.</div></div>';
 if(data.meta.status==="demo")result+='<div class="banner" style="margin-top:14px"><b>시연 데이터</b> · 2022–23시즌 선수 티어와 순위는 기존 인터랙티브 샘플의 자료입니다. 사용자가 확인한 역사적 최종 평가가 아닙니다.</div>';
 if(data.meta.status==="in_review")result+='<div class="banner" style="margin-top:14px"><b>선수 평가 대기</b> · 등록된 골키퍼 후보의 주전/후보 구분과 선발 기록은 추가 검수 대상입니다. S~D 티어는 아직 정하지 않았습니다.</div>';
 return result
}
function toptier(){return ['S','A+','A','A-'].includes(st.tier)?st.tier:"all"}
function filterPlayers(arr,useTop){
 const from=ranks.indexOf(st.from),to=ranks.indexOf(st.to);
 return arr.filter(p=>(!useTop||top(p))&&(st.position==="all"||st.position===p.position)&&(st.club==="all"||st.club===p.club)&&(!useTop||st.tier==="all"||p.tier===st.tier)&&(useTop||(!p.tier?from===0&&to===10:ranks.indexOf(p.tier)>=from&&ranks.indexOf(p.tier)<=to))&&(!st.search||(p.name+" "+club(p.club).name).toLowerCase().includes(st.search.toLowerCase()))&&(st.age==="all"||(st.age==="22"&&age(p)<=22)||(st.age==="23"&&age(p)>=23&&age(p)<=27)||(st.age==="28"&&age(p)>=28&&age(p)<=32)||(st.age==="33"&&age(p)>=33)))
}
function filters(useTop,stats){
 let v='<div class="toolbar"><select data-filter="position" aria-label="Position">'+option([["all","All Positions"],...positions.map(p=>[p,p])],st.position)+'</select>';
 v+='<select data-filter="club" aria-label="Club">'+option([["all","All Clubs"],...qualifiers().map(q=>[q.club,club(q.club).name])],st.club)+'</select>';
 if(!useTop)v+='<select data-filter="from" aria-label="Tier range start">'+option(ranks.map(t=>[t,t]),st.from)+'</select><span class="muted">~</span><select data-filter="to" aria-label="Tier range end">'+option(ranks.map(t=>[t,t]),st.to)+'</select>';
 if(stats)v+='<select data-filter="age">'+option([["all","All Ages"],["22","22세 이하"],["23","23–27세"],["28","28–32세"],["33","33세 이상"]],st.age)+'</select>';
 else if(!useTop)v+='<input data-filter="search" aria-label="Search player name" placeholder="선수·구단 검색" value="'+esc(st.search)+'">';
 v+='</div>';return v;
}
function tablePlayers(rows){
 if(!rows.length)return '<div class="empty"><strong>표시할 선수가 없습니다.</strong><p>후보 또는 평가가 등록되면 이곳에 표시됩니다.</p></div>';
 return '<div class="table-scroll"><table class="datagrid"><thead><tr><th>POS</th><th>PLAYER</th><th>CLUB</th><th>BORN</th><th>AGE</th><th>TIER</th></tr></thead><tbody>'+rows.map(p=>'<tr data-player="'+esc(p.id)+'"><td><b>'+esc(p.position)+'</b></td><td class="person">'+esc(p.name)+'</td><td><div style="display:flex;align-items:center;gap:8px">'+crest(p.club)+esc(club(p.club).name)+'</div></td><td>'+esc(p.born||"—")+'</td><td>'+esc(age(p)??"—")+'</td><td>'+grade(p.tier)+'</td></tr>').join("")+'</tbody></table></div>'
}
function candidatePool(){
 let all=rankPlayers(),rows=filterPlayers(all,false);
 return '<section class="panel candidate-pool" id="candidate-pool"><div class="section-heading"><div><h2>Candidate Pool</h2><div class="small muted">'+rows.length+' / '+all.length+' players · 후보 목록에서는 등급만 표시하고 순위는 Best XI에서 포지션별로 확인합니다.</div></div><button class="pill" data-action="reset">필터 초기화</button></div>'+filters(false,false)+tablePlayers(rows)+'</section>'
}

function topPage(){
 let all=rankPlayers(),filtered=filterPlayers(all,true);let count=t=>all.filter(p=>p.tier===t).length;
 let cards='<div class="top-scores">'+["S","A+","A","A-"].map(t=>'<button class="top-score '+tierClass(t)+' '+(st.tier===t?"active":"")+'" data-toptier="'+t+'"><b>'+t+'</b><small>'+count(t)+' players</small></button>').join("")+'</div>';
 let body='<div class="section-heading"><div><h2>League Top Class</h2><span class="small muted">S ~ A- 전체. 포지션별 베스트 선정 인원 제한과 무관합니다.</span></div><button class="pill '+(st.tier==="all"?"active":"")+'" data-toptier="all">All tiers</button></div>'+cards+'<div style="margin-top:15px">'+filters(true,false)+'</div>'+tablePlayers(filtered);
 if(!hasTop())body='<div class="section-heading"><h2>League Top Class</h2></div><div class="empty"><strong>평가 확정 전입니다.</strong><p>S~A- 선수는 포지션별 평가를 검수한 뒤 이곳에 자동으로 표시됩니다.</p></div>';
 return '<section class="panel">'+body+'</section>'
}
function formation(){
 let selection=(data.bestXi||[]).slice(0,11),used={};
 let formationName=["4-4-2","4-2-3-1","4-3-3"].includes(data?.meta?.formation)?data.meta.formation:"4-3-3";
 let layout=formationName==="4-2-3-1"?slots4231:formationName==="4-4-2"?slots442:slots433;
 let marks=layout.map(x=>{let matches=selection.filter(b=>b.position===x[0]);let index=used[x[0]]||0;used[x[0]]=index+1;let pick=matches[index];let p=data.players.find(y=>y.id===pick?.playerId);return '<button class="slot '+(st.position===x[0]?"active":"")+'" data-position="'+x[0]+'" style="left:'+x[1]+'%;top:'+x[2]+'%"><span class="spot">'+x[0]+'</span><span class="slot-label">'+(p?esc(p.name):"선정 대기")+'</span></button>'}).join("");
 let pos=st.position==="all"?"GK":st.position;
 let candidates=rankPlayers().filter(p=>p.position===pos);
 let side='<div class="panel"><div class="section-heading"><h2>포지션별 순위</h2><span class="status">'+pos+'</span></div><div class="position-nav">'+positions.map(p=>'<button data-position="'+p+'" class="'+(pos===p?"active":"")+'">'+p+'</button>').join("")+'</div>';
 side+='<div class="small muted" style="margin-bottom:8px">'+candidates.length+' registered players · 포지션 내 순위만 표시'+(data?.meta?.positionalRanking?.status==="assigned_all_candidates"?' · 순위 배정 완료 / 자료 검증 중':'')+'</div>';
 if(candidates.length&&!candidates.some(p=>p.rank!=null))side+='<p class="position-rank-note">아직 이 포지션의 순위가 확정되지 않았습니다. 후보가 자동으로 1위부터 배정되지 않습니다.</p>';
 if(candidates.length){side+=candidates.map(p=>'<button class="rank-row" data-player="'+esc(p.id)+'"><span class="rank-num">'+esc(p.rank??"—")+'</span>'+crest(p.club)+'<span class="rank-label"><b>'+esc(p.name)+'</b><small>'+esc(club(p.club).name)+'</small></span>'+grade(p.tier)+'</button>').join("")}
 else side+='<div class="empty"><strong>아직 후보가 없습니다.</strong></div>';
 side+='</div>';
 const proposed=data?.meta?.bestXiReview?.status==="proposed_unapproved";
 const previewNote=proposed?'<div class="banner formation-review"><b>1차 선정안 · 검수 전</b> · 이 베스트 XI는 공식 확정 명단이 아닙니다. 포지션별 1~N위는 후보 전원에게 배정했습니다. 다만 이전 두 시즌의 세부 근거와 포지션 분류는 계속 검증 중이며 베스트 XI는 공식 승인 전입니다.</div>':"";
 return '<div class="panels"><section class="panel"><div class="section-heading"><h2>Season Best XI</h2><span class="small muted">'+esc(formationName)+' · '+(proposed?"DRAFT XI":"BEST XI")+'</span></div>'+previewNote+'<div class="pitch"><div class="mid"></div><div class="circle"></div>'+marks+'</div><p class="pitch-note">포메이션에는 주 포지션과 선수 이름만 표시합니다. 선수의 티어 및 포지션별 순위는 오른쪽에서 확인합니다.</p></section>'+side+'</div>'
}
function standings(){
 let rows=data.standings||[];
 if(!rows.length)return '<section class="panel"><div class="section-heading"><h2>Final League Table</h2></div><div class="empty"><strong>순위표 검증 중입니다.</strong><p>해당 시즌의 공식 경기 결과를 교차 확인한 뒤 공개합니다.</p></div></section>';
 let visible=rows.filter(r=>!st.qualifiedOnly||r.competition);
 let relegated=rows.filter(r=>r.outcome==="relegated");
 let note='<div class="banner" style="margin-bottom:14px"><b>다음 시즌 유럽 진출 및 강등</b> · 순위표는 '+esc(st.season)+' 최종 결과입니다.</div>';
 if(relegated.length)note+='<div class="relegation-legend"><span class="relegation-chip">↓ 강등</span><span>18–20위 구단은 다음 시즌 2부 리그로 강등됩니다.</span></div>';
 let header='<section class="panel"><div class="section-heading"><h2>Final League Table</h2><button class="pill '+(st.qualifiedOnly?"active":"")+'" data-action="qualonly">'+(st.qualifiedOnly?"✓ European clubs":"European clubs only")+'</button></div>';
 let table='<div class="table-scroll"><table class="datagrid"><thead><tr><th>#</th><th>CLUB</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>PTS</th><th>NEXT SEASON</th></tr></thead><tbody>';
 table+=visible.map(r=>'<tr class="'+(r.outcome==="relegated"?"table-relegated":"")+'"><td><b>'+r.rank+'</b></td><td><div style="display:flex;align-items:center;gap:8px">'+crest(r.club)+esc(club(r.club).name)+'</div></td><td>'+esc(r.played)+'</td><td>'+esc(r.wins)+'</td><td>'+esc(r.draws)+'</td><td>'+esc(r.losses)+'</td><td>'+esc(r.gd)+'</td><td><b>'+esc(r.points)+'</b></td><td>'+(r.outcome==="relegated"?'<span class="relegation-chip">↓ 강등</span>':comp(r.competition))+'</td></tr>').join("");
 return header+note+table+'</tbody></table></div></section>';
}
function bars(entries){let max=Math.max(1,...entries.map(x=>x[1]));return entries.map(x=>'<div class="bar-line"><span>'+esc(x[0])+'</span><div class="bar-track"><div class="bar-fill" style="width:'+(100*x[1]/max)+'%"></div></div><b style="text-align:right">'+x[1]+'</b></div>').join("")}
function stats(){
 const ps=filterPlayers(rankPlayers(),false),total=ps.length,topN=ps.filter(top).length,ages=ps.map(age).filter(n=>n!=null),avg=ages.length?(ages.reduce((a,b)=>a+b,0)/ages.length).toFixed(1):"—";
 let n=ps.filter(p=>p.tier).length;let mid='<div class="cards">'+statValue("Matching Players",total)+statValue("League Top Class",topN)+statValue("Average Age",avg)+'</div>';
 mid+='<section class="panel"><div class="section-heading"><h2>Filters</h2><button class="pill" data-action="reset">Reset</button></div>'+filters(false,true)+'</section>';
 mid+='<div class="stat-grid" style="margin-top:14px"><div class="panel"><h2>Tier Distribution</h2>'+(n?bars(ranks.map(t=>[t,ps.filter(p=>p.tier===t).length])):'<div class="empty"><strong>티어 평가 전입니다.</strong></div>')+'</div><div class="panel"><h2>Position Distribution</h2>'+bars(positions.map(t=>[t,ps.filter(p=>p.position===t).length]))+'</div><div class="panel"><h2>Club Representation</h2>'+bars(qualifiers().map(q=>[club(q.club).name,ps.filter(p=>p.club===q.club).length]))+'</div><div class="panel"><h2>Age Breakdown</h2>'+bars([["≤22",ps.filter(p=>age(p)<=22).length],["23–27",ps.filter(p=>age(p)>=23&&age(p)<=27).length],["28–32",ps.filter(p=>age(p)>=28&&age(p)<=32).length],["33+",ps.filter(p=>age(p)>=33).length]])+'</div></div>';
 return mid
}

const homeDomestic=[
 {id:"laliga",tag:"ES",name:"La Liga",detail:"SPAIN",number:"01",color:"bronze"},
 {id:"premierleague",tag:"EN",name:"Premier League",detail:"ENGLAND",number:"02",color:"plum"},
 {id:"seriea",tag:"IT",name:"Serie A",detail:"ITALY",number:"03",color:"blue"},
 {id:"bundesliga",tag:"DE",name:"Bundesliga",detail:"GERMANY",number:"04",color:"red"},
 {id:"ligue1",tag:"FR",name:"Ligue 1",detail:"FRANCE",number:"05",color:"teal"}
];
const homeEuropean=[
 {id:"ucl",tag:"CL",name:"Champions League",detail:"THE EUROPEAN CUP",number:"01",color:"blue",season:"1999-00"},
 {id:"uel",tag:"EL",name:"Europa League",detail:"THE UEFA CUP LINEAGE",number:"02",color:"bronze",season:"2009-10"},
 {id:"uecl",tag:"CO",name:"Conference League",detail:"SINCE 2021–22",number:"03",color:"teal",season:"2021-22"}
];
function homeCard(c){
 return '<button type="button" class="archive-card '+esc(c.color)+'" data-open-league="'+esc(c.id)+'" data-open-season="'+esc(c.season||"1999-00")+'" aria-label="'+esc(c.name)+' 대회 보기">'+
 '<span class="archive-card-top"><span class="archive-card-number">'+esc(c.number)+' / '+(c.tag==="CL"||c.tag==="EL"||c.tag==="CO"?"03":"05")+'</span><span class="archive-card-arrow" aria-hidden="true">↗</span></span>'+
 '<span class="archive-card-monogram" aria-hidden="true">'+esc(c.tag)+'</span>'+
 '<span class="archive-card-bottom"><span class="archive-card-label">'+esc(c.detail)+'</span><strong>'+esc(c.name)+'</strong><span class="archive-card-action">Explore competition <span aria-hidden="true">→</span></span></span></button>';
}
function homeMarkup(){
 return `
 <section class="home-masthead" aria-labelledby="home-title">
  <div class="home-masthead-copy">
   <p class="home-kicker"><span class="home-kicker-line"></span> AN INDEPENDENT FOOTBALL RESEARCH ARCHIVE</p>
   <h1 id="home-title">FOOTBALL<br><em>ARCHIVE<span class="home-period">.</span></em></h1>
   <p class="home-lead">축구의 한 시대를, 한 시즌씩 기록하다.</p>
   <p class="home-description">유럽 5대 리그와 UEFA 클럽 대회를 아우르는 역사적 선수 평가 아카이브. 시즌별 주전과 후보, 포지션별 순위와 개인 활약을 검토하고 확정된 기록만 남깁니다.</p>
   <div class="home-actions"><button type="button" class="home-primary" data-open-league="laliga" data-open-season="1999-00">1999–00 La Liga 살펴보기 <span aria-hidden="true">↗</span></button><a class="home-secondary" href="#competitions">대회 전체 보기 <span aria-hidden="true">↓</span></a></div>
  </div>
  <div class="home-editorial-art" aria-hidden="true"><span class="art-label">THE GAME. THE PLAYERS. THE ERA.</span><img class="archive-hero-symbol" src="./assets/football-archive-emblem.svg" alt="" width="420" height="420" loading="eager"><span class="art-bottom">SEASONS 1999–2025<span> / </span>THE HISTORICAL COLLECTION</span><span class="art-cross">✳</span></div>
 </section>
 <section class="home-facts" aria-label="아카이브 범위">
  <div><strong>05</strong><span>DOMESTIC LEAGUES</span></div>
  <div><strong>03</strong><span>UEFA COMPETITIONS</span></div>
  <div><strong>26</strong><span>SEASONS IN SCOPE</span></div>
  <div><strong>10</strong><span>PLAYER POSITIONS</span></div>
 </section>
 <section class="home-section" id="competitions" aria-labelledby="home-leagues-title">
  <div class="home-section-heading"><div><p class="home-overline">01 — DOMESTIC</p><h2 id="home-leagues-title">The five leagues<span class="home-period">.</span></h2><p>대회를 선택한 다음, 상단의 시즌 선택기에서 원하는 시즌을 탐색할 수 있습니다.</p></div><span class="home-section-count">05 COMPETITIONS</span></div>
  <div class="home-league-grid">${homeDomestic.map(homeCard).join("")}</div>
 </section>
 <section class="home-section home-europe-section" aria-labelledby="home-europe-title">
  <div class="home-section-heading"><div><p class="home-overline">02 — CONTINENTAL</p><h2 id="home-europe-title">European nights<span class="home-period">.</span></h2><p>UEFA 클럽 대회는 국내 리그와 별도의 기록으로 관리합니다.</p></div><span class="home-section-count">03 COMPETITIONS</span></div>
  <div class="home-europe-grid">${homeEuropean.map(homeCard).join("")}</div>
 </section>
 <section class="home-section home-current" aria-labelledby="home-current-title">
  <div class="home-section-heading"><div><p class="home-overline">03 — THE COLLECTION</p><h2 id="home-current-title">Inside the archive<span class="home-period">.</span></h2><p>현재 등록된 시즌은 검수 상태에 따라 구분합니다. 시연용 평가를 공식 결과로 취급하지 않습니다.</p></div></div>
  <div class="home-feature-grid">
   <button type="button" class="home-feature" data-open-league="laliga" data-open-season="1999-00"><span class="home-feature-status">CANDIDATES / UNDER REVIEW</span><strong>La Liga <span>1999–00</span></strong><span class="home-feature-description">유럽대항전 진출 후보 구단과 GK 후보 자료를 검토 중입니다. 티어와 베스트 XI는 아직 확정되지 않았습니다.</span><span class="home-feature-bottom">후보 현황 보기 <span aria-hidden="true">↗</span></span></button>
   <button type="button" class="home-feature home-feature-demo" data-open-league="laliga" data-open-season="2022-23"><span class="home-feature-status">DEMONSTRATION / NOT FINAL</span><strong>La Liga <span>2022–23</span></strong><span class="home-feature-description">선수 평가 화면과 순위, 포메이션을 미리 살펴보기 위한 시연 자료입니다. 공식 평가 결과가 아닙니다.</span><span class="home-feature-bottom">시연 화면 보기 <span aria-hidden="true">↗</span></span></button>
  </div>
 </section>
 <div class="home-note"><span>ARCHIVE PRINCIPLE</span><p>평가 시즌과 직전 두 시즌의 개인 활약을 최근 시즌에 가중해 비교합니다. 후보 선정·등급·최종 베스트는 검수와 승인 이후 공개합니다.</p></div>`;
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
 const intro=st.domain==="domestic"?"5대 리그는 선택할 수 있지만 아직 기록이 등록되지 않은 시즌입니다.":"유럽대항전별 평가는 국내리그와 분리하여 등록할 예정입니다.";
 return '<div class="panel"><div class="empty"><strong>'+esc(label())+' · '+esc(st.season)+' 기록 준비 중</strong><p>'+intro+'</p><p>승인된 후보 구단·선수 평가를 이곳에 차례대로 추가합니다.</p><button class="pill" data-action="back">1999–00 La Liga 보기</button></div></div>'
}
function render(){
 document.body.classList.toggle("is-home",st.home);
 if(st.home){$("content").innerHTML=homeMarkup();document.title="FOOTBALL ARCHIVE | A History of the Beautiful Game";return}
 document.title=label()+" "+st.season+" | FOOTBALL ARCHIVE";
 syncSelects();pageIntro();const el=$("content");if(loading){el.innerHTML='<div class="empty"><strong>데이터를 불러오는 중입니다.</strong></div>';return}
 if(!data){el.innerHTML=unregistered();return}
 if(st.tab==="overview")el.innerHTML=overview();else if(st.tab==="formation")el.innerHTML=formation();else if(st.tab==="top")el.innerHTML=topPage();else if(st.tab==="table")el.innerHTML=standings();else el.innerHTML=stats()
}
function playerDetails(id){
 const p=data?.players?.find(x=>x.id===id);if(!p)return;
 const html='<div class="overlay" role="dialog" aria-modal="true" aria-label="Player information"><div class="dialog"><button class="close" data-action="close">✕</button><div class="eyebrow">PLAYER RECORD · '+esc(st.season)+'</div><h2>'+esc(p.name)+'</h2><div style="display:flex;gap:10px;align-items:center;margin:14px 0">'+crest(p.club)+'<b>'+esc(club(p.club).name)+'</b>'+grade(p.tier)+'</div>'+
 [["Position",p.position],["Starting role",p.role==="starter"?"주전":p.role==="backup"?"후보":"—"],["League starts",p.starts??"—"],["Date of birth",p.born??"—"],["Age at Jun 30",age(p)??"—"],["Top Class",p.tier?(top(p)?"YES":"NO"):"미평가"]].map(x=>'<div class="detail-row"><span>'+x[0]+'</span><b>'+esc(x[1])+'</b></div>').join("")+
 '<p class="notice">'+(data.meta.status==="demo"?"시연용 평가로, 최종 선수 선정 자료가 아닙니다.":"해당 시즌 선수 검수 및 평가는 아직 확정되지 않았습니다.")+'</p></div></div>';
 let layer=document.createElement("div");layer.id="modalLayer";layer.innerHTML=html;document.body.appendChild(layer)
}
function closeModal(){document.getElementById("modalLayer")?.remove()}
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
 if(btn.dataset.openLeague){openArchive(btn.dataset.openLeague,btn.dataset.openSeason);return}
 if(btn.dataset.tab){st.tab=btn.dataset.tab;st.showCandidates=false;writeUrl();render();return}
 if(btn.dataset.go){st.tab=btn.dataset.go;writeUrl();render();return}
 if(btn.dataset.position){st.position=btn.dataset.position;render();return}
 if(btn.dataset.posGo){st.tab="overview";st.showCandidates=true;st.position=btn.dataset.posGo;st.club="all";writeUrl();render();document.getElementById("candidate-pool")?.scrollIntoView({behavior:"smooth",block:"start"});return}
 if(btn.dataset.clubGo){st.tab="overview";st.showCandidates=true;st.club=btn.dataset.clubGo;st.position="all";st.from="S";st.to="D";writeUrl();render();document.getElementById("candidate-pool")?.scrollIntoView({behavior:"smooth",block:"start"});return}
 if(btn.dataset.toptier){st.tier=btn.dataset.toptier;render();return}
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
$("season").addEventListener("change",e=>{st.season=e.target.value;setCompetition()});
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
if(["overview","formation","top","table","stats"].includes(q.get("view")))st.tab=q.get("view");
if(q.get("view")==="ranking")st.showCandidates=true;
if(st.domain==="europe"&&["formation","table"].includes(st.tab))st.tab="overview";
if(st.home)render();else load();
window.addEventListener("popstate",()=>{
 const p=new URLSearchParams(location.search);
 if(!p.has("league")){st.home=true;data=null;loading=false;render();return}
 const id=p.get("league");
 const domestic=competitionGroups.domestic.some(x=>x[0]===id);
 const european=competitionGroups.europe.some(x=>x[0]===id);
 if(!domestic&&!europe){st.home=true;data=null;loading=false;render();return}
 st.home=false;st.domain=domestic?"domestic":"europe";st.league=id;
 st.season=yearList.includes(p.get("season"))?p.get("season"):"1999-00";
 st.tab=["overview","formation","top","table","stats"].includes(p.get("view"))?p.get("view"):"overview";
 if(st.domain==="europe"&&["formation","table"].includes(st.tab))st.tab="overview";
 clearFilters();if(p.get("view")==="ranking")st.showCandidates=true;load();
});
})();