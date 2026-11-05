// Real GitHub Pages browser validation with Chromium; never assume success without running.
import {chromium} from "playwright";
import {mkdirSync,writeFileSync} from "node:fs";
const root=process.env.SITE_URL||"https://wjdduddlf112.github.io/footballarch/";
const dir="audit-artifacts/bundesliga-2007-08-live";mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const report={url:root,checkedAt:new Date().toISOString(),status:"NOT_RUN",tabs:[],warnings:[]};
let page;const must=(c,m)=>{if(!c)throw Error(m)};
try{
 page=await browser.newPage({viewport:{width:1440,height:960}});
 await page.goto(root+"?league=bundesliga&season=2007-08",{waitUntil:"domcontentloaded",timeout:40000});
 await page.waitForFunction(()=>document.querySelector("#content")?.textContent?.includes("European Qualification"),{timeout:30000});
 const d=await page.evaluate(async()=>{const r=await fetch("./data/bundesliga-2007-08.json",{cache:"no-store"});return r.json()});
 must(d.players.length===149&&d.qualifiers.length===8&&d.bestXi.length===11&&d.meta.status==="draft","deployed JSON structural mismatch");
 report.liveJson={players:d.players.length,qualifiers:d.qualifiers.length,xi:d.bestXi.length,top:d.meta.leagueTopClassCount};
 must((await page.locator("#stateTag").textContent()).includes("DRAFT"),"missing DRAFT");
 must((await page.locator(".qual-item").count())===8,"European entrant grid");
 await page.locator('[data-action="candidates"]').first().click();await page.waitForSelector("tr[data-player]");
 must(await page.locator("tr[data-player]").count()===149,"all candidates rows");
 await page.locator('select[data-filter="position"]').selectOption("GK");must((await page.locator("tr[data-player]").count())>0,"position filter");
 await page.locator('select[data-filter="position"]').selectOption("all");
 await page.locator('select[data-filter="club"]').selectOption("wolfsburg");must((await page.locator("tr[data-player]").count())===19,"club filter");
 await page.locator('select[data-filter="club"]').selectOption("all");
 await page.locator("tr[data-player]").first().click();must(await page.locator(".overlay .dialog").isVisible(),"details modal");
 await page.locator(".overlay [data-action=close]").click();await page.screenshot({path:dir+"/overview.png",fullPage:true});report.tabs.push("overview");
 for(const tab of ["formation","top","tiers","table","stats"]){
  await page.locator('[data-tab="'+tab+'"]').click();const tx=await page.locator("#content").textContent();
  must(tx.length>80,"tab render "+tab);
  if(tab==="formation")must(await page.locator(".slot").count()===11,"Best XI formation slots");
  if(tab==="top")must(await page.locator("tr[data-player]").count()===54,"top count");
  if(tab==="tiers"){
   must(await page.locator("tr[data-player]").count()===149,"all tiers clubs");
   await page.locator('[data-tier-view="positions"]').click();must(await page.locator("tr[data-player]").count()===149,"all tiers positional");
   await page.locator('[data-tier-view="tiers"]').click();must(await page.locator("tr[data-player]").count()===149,"all tiers grade");
  }
  await page.screenshot({path:dir+"/"+tab+".png",fullPage:true});report.tabs.push(tab);
 }
 await page.goto(root+"?league=bundesliga&season=2006-07",{waitUntil:"domcontentloaded",timeout:40000});
 await page.waitForFunction(()=>document.querySelector("#content")?.textContent?.includes("European Qualification"),{timeout:30000});
 const prior=await page.evaluate(async()=>{const r=await fetch("./data/bundesliga-2006-07.json");return (await r.json()).players.length});
 must(prior===127,"prior Bundesliga 2006-07 regression");report.tabs.push("regression-bundesliga-2006-07");
 report.status="PASS_CORE_UI";
}catch(e){report.status="FAIL";report.error=String(e);process.exitCode=1;if(page)try{await page.screenshot({path:dir+"/error.png",fullPage:true})}catch(_){}}
finally{writeFileSync(dir+"/report.json",JSON.stringify(report,null,2)+"\n");await browser.close();console.log(JSON.stringify(report,null,2))}
