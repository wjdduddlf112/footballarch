(function(){
"use strict";
const $=id=>document.getElementById(id);
const positions=["GK","CB","LB","RB","DM","CM","CAM","LW","RW","ST"];
const q=new URLSearchParams(location.search), page=document.body.dataset.worldPage;
const escape=v=>String(v??"—").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let db, season, tab=q.get("view")==="xi"?"xi":"class", position="ALL", search="";
const content=$("world-content"),status=$("world-status");
const empty=(title,note)=>'<div class="world-empty"><strong>'+escape(title)+'</strong><span>'+escape(note)+'</span></div>';
const table=(headers,rows)=>'<div class="table-scroll"><table class="datagrid"><thead><tr>'+headers.map(h=>'<th scope="col">'+escape(h)+'</th>').join("")+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(cell=>'<td>'+cell+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
const labels={not_started:"평가 예정",draft_unapproved:"DRAFT · 미승인",approved:"APPROVED",evidence_pending:"검증 대기"};
const player=id=>db.players[id]||{};
const name=id=>{const p=player(id);return '<strong>'+escape(p.nameKo||p.nameOriginal||id)+'</strong><span class="world-player-original">'+escape(p.nameOriginal)+'</span>'};
const rankRows=s=>(db.seasons[s]?.worldClass?.rankings||[]);
const isRated=s=>["draft_unapproved","approved"].includes(db.seasons[s]?.worldClass?.status);
function setStatus(s){status.textContent=labels[s]||"검증 대기";}
function syncUrl(){const p=new URLSearchParams({season,view:tab});history.replaceState(null,"",location.pathname+"?"+p);}
function drawWorld(){
 const data=db.seasons[season], wc=data.worldClass, xi=data.bestXi;
 $("world-heading").textContent=(tab==="class"?"World Class":"Best XI")+" / "+season.replace("-","–");
 $("world-subtitle").textContent=tab==="class"?"최근 3시즌 가중 평가 · 포지션별 세계 랭킹 · 인원 제한 없음":"해당 시즌 개인 활약 및 전술적 적합성 · 11명";
 document.querySelectorAll("[data-world-tab]").forEach(b=>{const active=b.dataset.worldTab===tab;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
 setStatus(tab==="class"?wc.status:xi.status);
 if(tab==="class"){
   const all=rankRows(season);
   const filters='<div class="world-filter" aria-label="포지션 필터">'+["ALL",...positions].map(p=>'<button type="button" class="pill '+(p===position?"active":"")+'" aria-pressed="'+(p===position)+'" data-world-pos="'+p+'">'+p+'</button>').join("")+'</div>';
   let body=filters;
   const groups=(position==="ALL"?positions:[position]).map(p=>({p,rows:all.filter(v=>v.position===p).sort((a,b)=>a.rank-b.rank)})).filter(g=>g.rows.length);
   if(!groups.length)body+=empty(wc.status==="not_started"?"World Class 평가 예정":"선정 기록 없음",wc.status==="not_started"?"선수 검증 완료 후 세계 랭킹을 등록합니다.":"현재 필터에 해당하는 선수가 없습니다.");
   else for(const g of groups)body+='<section class="world-group"><h3>'+g.p+' · '+g.rows.length+'명</h3>'+table(["RANK","PLAYER","CLUB","DATE OF BIRTH"],g.rows.map(v=>[escape(v.rank),name(v.playerId),escape(v.club),escape(player(v.playerId).born)]))+'</section>';
   content.innerHTML='<section class="panel"><div class="section-heading"><h2>World Class · '+escape(season)+'</h2><span class="muted small">'+all.length+'명</span></div>'+body+'</section>';
 }else{
   const slots=xi.slots||[];
   if(!xi.formation||slots.length!==11){content.innerHTML='<section class="panel"><h2>Best XI</h2>'+empty("Best XI 평가 예정","시즌 대표 포메이션 및 11명 선정 후 표시됩니다.")+'</section>';return;}
   const slotMarkup=slots.map(v=>{const x=Number(v.x),y=Number(v.y);if(!Number.isFinite(x)||!Number.isFinite(y)||x<0||x>100||y<0||y>100)return "";return '<div class="world-slot" style="left:'+x+'%;top:'+y+'%"><small>'+escape(v.position)+'</small><b>'+escape(player(v.playerId).nameKo||player(v.playerId).nameOriginal||v.playerId)+'</b></div>';}).join("");
   content.innerHTML='<section class="panel"><div class="section-heading"><h2>Best XI · '+escape(xi.formation)+'</h2></div><div class="world-pitch" aria-label="선발 배치"><div class="world-center-circle"></div>'+slotMarkup+'</div>'+table(["POSITION","PLAYER","CLUB"],slots.map(v=>[escape(v.position),name(v.playerId),escape(v.club)]))+'</section>';
 }
}
function aggregate(){
 const records=new Map(), keys=Object.keys(db.seasons).sort();
 keys.forEach((s,i)=>{
   if(!isRated(s))return;
   const seen=new Set();
   for(const v of rankRows(s)){
     if(!v.playerId||seen.has(v.playerId))continue;
     seen.add(v.playerId);
     const a=records.get(v.playerId)||{id:v.playerId,entries:[],streak:0,longest:0,last:-2,bestRank:Infinity,firsts:0,xi:0,positions:{}};
     a.streak=a.last===i-1?a.streak+1:1;a.last=i;a.longest=Math.max(a.longest,a.streak);
     a.entries.push(s);if(a.entries.length===5)a.induction=s;
     a.bestRank=Math.min(a.bestRank,v.rank);if(v.rank===1)a.firsts++;
     a.positions[v.position]=(a.positions[v.position]||0)+1;records.set(v.playerId,a);
   }
 });
 for(const s of keys){const xi=db.seasons[s].bestXi;if(!["draft_unapproved","approved"].includes(xi.status))continue;for(const id of new Set((xi.slots||[]).map(v=>v.playerId))){if(records.has(id))records.get(id).xi++;}}
 return [...records.values()].filter(a=>a.entries.length>=5).map(a=>({...a,position:Object.keys(a.positions).sort((p,q)=>a.positions[q]-a.positions[p]||positions.indexOf(p)-positions.indexOf(q))[0]})).sort((a,b)=>b.entries.length-a.entries.length||b.longest-a.longest||b.firsts-a.firsts||a.id.localeCompare(b.id));
}
function drawHofRows(){
 const all=aggregate(),needle=search.trim().toLowerCase();
 const list=all.filter(a=>(position==="ALL"||a.position===position)&&[player(a.id).nameKo,player(a.id).nameOriginal,a.id].some(v=>String(v||"").toLowerCase().includes(needle)));
 $("hof-results").innerHTML=list.length?table(["PLAYER","POSITION","WC SEASONS","LONGEST STREAK","BEST RANK","NO. 1","BEST XI","INDUCTION","WC HISTORY"],list.map(a=>[name(a.id),escape(a.position),escape(a.entries.length),escape(a.longest),escape(a.bestRank),escape(a.firsts),escape(a.xi),escape(a.induction),'<div class="world-season-list">'+escape(a.entries.join(" · "))+'</div>'])):empty(all.length?"검색 결과 없음":"헌액 기록 없음",all.length?"검색 조건을 변경해 보세요.":"World Class 누적 5시즌 이상 선정 시 자동 등록됩니다.");
}
function drawHof(){
 const all=aggregate(),rated=Object.keys(db.seasons).filter(isRated).length;
 const provisional=Object.values(db.seasons).some(s=>s.worldClass.status==="draft_unapproved"||s.bestXi.status==="draft_unapproved");
 setStatus(provisional?"draft_unapproved":rated===Object.keys(db.seasons).length?"approved":"not_started");
 const metric=(label,value)=>'<div class="metric"><span class="name">'+escape(label)+'</span><strong class="value">'+escape(value)+'</strong></div>';
 content.innerHTML='<section class="panel"><div class="cards">'+metric("헌액 선수",all.length)+metric("최초 헌액",all.map(a=>a.induction).sort()[0]||"—")+metric("최다 WC 선정",all[0]?.entries.length||"—")+'</div><p class="world-note">평가 등록 시즌 '+rated+' / '+Object.keys(db.seasons).length+' · DRAFT 기록은 잠정 집계하며 미평가 시즌은 선정으로 간주하지 않습니다.</p><div class="world-hof-controls"><input id="hof-search" type="search" placeholder="선수 검색" aria-label="선수 검색"><select id="hof-position" aria-label="포지션">'+["ALL",...positions].map(p=>'<option>'+p+'</option>').join("")+'</select></div><div id="hof-results"></div></section>';
 $("hof-search").addEventListener("input",e=>{search=e.target.value;drawHofRows();});
 $("hof-position").addEventListener("change",e=>{position=e.target.value;drawHofRows();});
 drawHofRows();
}
async function init(){
 try{
 const res=await fetch("./data/world-index.json",{cache:"no-store"});
 if(!res.ok)throw new Error("HTTP "+res.status);
 db=await res.json();
 if(db.schemaVersion!==1||!db.seasons||!db.players)throw new Error("Invalid schema");
 if(page==="hof"){drawHof();return;}
 const seasons=Object.keys(db.seasons).sort();season=seasons.includes(q.get("season"))?q.get("season"):seasons[0];
 $("world-season").innerHTML=seasons.map(s=>'<option value="'+escape(s)+'">'+escape(s.replace("-","–"))+'</option>').join("");
 $("world-season").value=season;
 $("world-season").addEventListener("change",e=>{season=e.target.value;syncUrl();drawWorld();});
 document.querySelectorAll("[data-world-tab]").forEach(b=>b.addEventListener("click",()=>{tab=b.dataset.worldTab;syncUrl();drawWorld();}));
 content.addEventListener("click",e=>{const b=e.target.closest("[data-world-pos]");if(b){position=b.dataset.worldPos;drawWorld();}});
 drawWorld();
 }catch(err){status.textContent="LOAD ERROR";content.innerHTML='<section class="panel">'+empty("데이터 로드 실패","새로고침하거나 데이터 파일을 확인하세요.")+'</section>';console.error(err);}
}
init();
})();