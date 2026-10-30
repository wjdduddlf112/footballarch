// Headless live-page smoke test, run in CI after deployment.
// Requires: npm install --no-save --no-package-lock playwright && npx playwright install chromium
import {chromium} from "playwright";
import {mkdirSync,writeFileSync} from "node:fs";
const root=process.env.SITE_URL||"https://wjdduddlf112.github.io/footballarch/";
const outfile="audit-artifacts/pl-1999-00-live";
mkdirSync(outfile,{recursive:true});
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const report={site:root,date:new Date().toISOString(),tabs:[],loadedCrests:0,totalCrests:0,warning:[],status:"NOT_CHECKED"};
let page;
const assert=(cond,message)=>{if(!cond)throw Error(message)};
try{
 page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
 const errors=[];page.on("pageerror",e=>errors.push(String(e)));
 const url=root+"?league=premierleague&season=1999-00&view=overview";
 await page.goto(url,{waitUntil:"domcontentloaded",timeout:40000});
 await page.waitForFunction(()=>document.querySelector("#content")?.textContent?.includes("European Qualification"),{timeout:30000});
 const json=await page.evaluate(async()=>{let r=await fetch("./data/premierleague-1999-00.json",{cache:"no-store"});if(!r.ok)throw Error("live JSON HTTP "+r.status);let j=await r.json();return {season:j.meta.season,status:j.meta.status,players:j.players.length,tiers:j.players.filter(p=>p.tier).length,unrated:j.players.filter(p=>p.tier===null).length,xi:j.bestXi.length,formation:j.meta.formation}});
 assert(json.players===128&&json.tiers===126&&json.unrated===2&&json.xi===11&&json.status==="draft"&&json.formation==="4-4-2","Live JSON does not match deployed draft: "+JSON.stringify(json));
 report.liveJson=json;
 assert((await page.locator("#stateTag").textContent())?.includes("DRAFT"),"Overview lacks visible DRAFT status");
 assert((await page.locator("#content").textContent()).includes("Players"),"Overview lacks player count");
 await page.locator('[data-action="candidates"]').first().click();
 await page.waitForSelector('tr[data-player]');
 assert((await page.locator('tr[data-player]').count())===128,"Overview candidate grid does not render all 128 players");
 await page.locator('tr[data-player]').first().click();
 assert(await page.locator(".overlay .dialog").isVisible(),"Player details modal missing");
 assert((await page.locator(".overlay .dialog").textContent()).includes("원어명"),"Original player name not visible in details");
 await page.locator(".overlay [data-action=close]").click();
 await page.screenshot({path:outfile+"/overview.png",fullPage:true});
 report.tabs.push("overview");
 for(const tab of ["formation","top","table","stats"]){
  await page.locator('[data-tab="'+tab+'"]').click();
  await page.waitForTimeout(300);
  const text=await page.locator("#content").textContent();
  assert(text.length>50,tab+" failed to render");
  if(tab==="formation"){
   assert((await page.locator(".slot").count())===11,"Best XI formation has not 11 slots");
   assert(!text.includes("선정 대기"),"Best XI contains empty slot");
   assert(text.includes("DRAFT"),"Best XI is not flagged DRAFT");
  }
  if(tab==="top")assert(text.includes("World Class")&&text.includes("League Top Class"),"World Class/Top Class missing");
  if(tab==="table")assert(text.includes("Manchester United")&&text.includes("Bradford"),"League table missing historical clubs");
  if(tab==="stats")assert(text.includes("Tier Distribution"),"Statistics page missing");
  await page.screenshot({path:outfile+"/"+tab+".png",fullPage:true});
  report.tabs.push(tab);
 }
 await page.locator('[data-tab="table"]').click();
 const crests=await page.evaluate(()=>Array.from(document.querySelectorAll("img.crest")).map(img=>({loaded:img.complete&&img.naturalWidth>0,src:img.src})));
 report.totalCrests=crests.length;
 report.loadedCrests=crests.filter(c=>c.loaded).length;
 if(report.totalCrests>report.loadedCrests)report.warning.push("Some crest images did not load; separate visual review required.");
 if(errors.length)report.warning.push("Page JS console exceptions: "+errors.join(" | ").slice(0,800));
 report.status="PASS_CORE_UI";
}catch(e){
 report.status="FAIL";
 report.error=String(e);
 if(page)try{await page.screenshot({path:outfile+"/error.png",fullPage:true})}catch(_){}
 process.exitCode=1;
}finally{
 writeFileSync(outfile+"/report.json",JSON.stringify(report,null,2)+"\n");
 await browser.close();
 process.stdout.write(JSON.stringify(report,null,2)+"\n");
}
