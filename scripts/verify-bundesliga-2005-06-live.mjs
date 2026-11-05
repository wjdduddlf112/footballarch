// Verify rendered GitHub Pages from real Chromium, not merely JSON presence.
// Required: playwright + chromium (installed in CI).
import {chromium} from "playwright";
import {mkdirSync,writeFileSync} from "node:fs";
const origin=(process.env.SITE_URL||"https://wjdduddlf112.github.io/footballarch/").replace(/\/?$/,"/");
const out="audit-artifacts/bundesliga-2005-06-live";
mkdirSync(out,{recursive:true});
const assert=(cond,msg)=>{if(!cond)throw Error(msg)};
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const report={site:origin,date:new Date().toISOString(),status:"NOT_CHECKED",sections:[],issues:[]};
let page;
try{
 page=await browser.newPage({viewport:{width:1440,height:980},deviceScaleFactor:1});
 const errors=[];page.on("pageerror",e=>errors.push(String(e)));
 await page.goto(origin+"?league=bundesliga&season=2005-06&view=tiers",{waitUntil:"domcontentloaded",timeout:40000});
 await page.waitForFunction(()=>document.querySelector(".tier-directory-section tr[data-player]")?.getAttribute("data-player"),{timeout:40000});
 const live=await page.evaluate(async()=>{
  const r=await fetch("./data/bundesliga-2005-06.json",{cache:"no-store"});
  if(!r.ok)throw Error("JSON HTTP "+r.status);
  const d=await r.json();
  const counts={};for(const p of d.players)counts[p.tier??"미평가"]=(counts[p.tier??"미평가"]||0)+1;
  return {status:d.meta.status,players:d.players.length,tiers:d.players.filter(p=>p.tier).length,ranked:d.players.filter(p=>p.rank).length,qualifiers:d.qualifiers.length,bestXi:d.bestXi.length,counts};
 });
 assert(live.status==="draft"&&live.players===136&&live.tiers===136&&live.ranked===136&&live.qualifiers===7&&live.bestXi===11,"Live JSON mismatch "+JSON.stringify(live));
 report.liveJson=live;
 assert((await page.locator("#stateTag").textContent()).includes("DRAFT"),"DRAFT badge not rendered");
 assert(await page.locator('[data-tab="tiers"]').isVisible(),"All Tiers menu not visible for 2005-06");
 assert((await page.locator(".tier-directory-section").count())===7,"Club tier directory missing seven clubs");
 assert((await page.locator(".tier-directory-section tr[data-player]").count())===136,"Club directory not 136 players");
 assert((await page.locator("#content").textContent()).includes("티어 합계 136/136명"),"Tier sum not visible");
 const clubTotal=await page.locator(".tier-directory-section tr[data-player] .tier").count();
 assert(clubTotal===136,"Club per-player grade badges missing "+clubTotal);
 await page.locator("tr[data-player]").first().click();
 assert(await page.locator(".overlay .dialog").isVisible(),"Player detail missing");
 const detail=await page.locator(".overlay .dialog").textContent();
 assert(detail.includes("원어명")&&detail.includes("평가 검증")&&detail.includes("잠정 티어"),"Detail grade/evidence pending");
 await page.locator(".overlay [data-action=close]").click();
 await page.screenshot({path:out+"/clubs.png",fullPage:true});
 report.sections.push("seven-clubs-136-player-grades-and-details");
 await page.locator('[data-tier-view="positions"]').click();
 assert((await page.locator(".tier-directory-section").count())===10,"Position directory missing ten positions");
 assert((await page.locator(".tier-directory-section tr[data-player]").count())===136,"Position ranks not complete");
 await page.screenshot({path:out+"/positions.png",fullPage:true});
 report.sections.push("ten-positions-136-player-ranks");
 await page.locator('[data-tier-view="tiers"]').click();
 assert((await page.locator(".tier-directory-section").count())===12,"S-D plus unrated grouping incomplete");
 assert((await page.locator(".tier-directory-section tr[data-player]").count())===136,"Tier directory missing players");
 assert((await page.locator("#content").textContent()).includes("미평가"),"Unrated group missing");
 await page.screenshot({path:out+"/grades.png",fullPage:true});
 report.sections.push("twelve-grade-groups-136-player-ratings");
 await page.locator('[data-tab="formation"]').click();
 assert((await page.locator(".slot").count())===11,"XI pitch missing 11 positions");
 assert((await page.locator(".slot .slot-tier .tier").count())===11,"XI pitch missing 11 grade badges");
 assert((await page.locator(".xi-detail-list tr[data-player]").count())===11,"XI rationale list incomplete");
 assert((await page.locator(".slot[data-position='CAM']").count())===1,"4-4-2 diamond attacking midfielder not positioned");
 assert((await page.locator(".slot[data-position='CM']").count())===2,"4-4-2 diamond XI must contain two CMs");
 assert(!(await page.locator("#content").textContent()).includes("선정 대기"),"Pitch has empty slot");
 await page.screenshot({path:out+"/best-xi.png",fullPage:true});
 report.sections.push("xi-eleven-pitch-grades-and-rationales-442-diamond");
 await page.locator('[data-tab="top"]').click();
 const topText=await page.locator("#content").textContent();
 assert(topText.includes("World Class")&&topText.includes("League Top Class")&&topText.includes("23명")&&topText.includes("53명"),"World/league top class count missing");
 assert((await page.locator("tr[data-player]").count())===53,"League top group should have 53 players");
 await page.screenshot({path:out+"/top.png",fullPage:true});
 report.sections.push("world-class-23-league-top-53");
 await page.locator('[data-tab="stats"]').click();
 const statsText=await page.locator("#content").textContent();
 assert(["Tier Distribution","A0","B0","C0","미평가"].every(s=>statsText.includes(s)),"All grade labels missing from Statistics");
 await page.screenshot({path:out+"/statistics.png",fullPage:true});
 report.sections.push("full-statistics-and-zero-grade-rows");
 await page.locator('[data-tab="overview"]').click();
 assert((await page.locator(".qual-item").count())===7,"Overview needs seven actual European entrants");
 await page.locator('[data-action="candidates"]').click();
 assert((await page.locator("tr[data-player]").count())===136,"Overview needs 136 candidates");
 await page.screenshot({path:out+"/overview.png",fullPage:true});
 report.sections.push("overview-seven-qualifiers-136-candidates");
 for(const [season,n] of [["1999-00",126],["2000-01",136],["2001-02",139],["2002-03",163],["2003-04",174],["2004-05",209]]){
  await page.goto(origin+"?league=bundesliga&season="+season+"&view=tiers",{waitUntil:"domcontentloaded",timeout:40000});
  await page.waitForFunction(()=>document.querySelector(".tier-directory-section tr[data-player]"),{timeout:30000});
  const count=await page.locator(".tier-directory-section tr[data-player]").count();
  assert(count===n,"Regression season "+season+": "+count+" != "+n);
  assert(await page.locator('[data-tab="tiers"]').isVisible(),"All Tiers menu hidden for "+season);
  report.sections.push("regression-bundesliga-"+season+"-"+n);
 }
 if(errors.length)throw Error("JavaScript errors: "+errors.join(" | ").slice(0,1000));
 report.status="PASS_ALL_UI";
}catch(err){
 report.status="FAIL";report.error=String(err);
 if(page)try{await page.screenshot({path:out+"/failure.png",fullPage:true})}catch(_){}
 process.exitCode=1;
}finally{
 writeFileSync(out+"/report.json",JSON.stringify(report,null,2)+"\n");
 await browser.close();console.log(JSON.stringify(report,null,2));
}
