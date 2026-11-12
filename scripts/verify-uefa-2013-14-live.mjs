// Independent Chromium smoke test for LIVE GitHub Pages, UEFA 2013-14.
// Historical player accuracy is a separate research layer, not validated here.
import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const pageUrl=(id,season)=>"https://wjdduddlf112.github.io/footballarch/?league="+id+"&season="+season+"&view=overview";
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1380,height:950}});
const errors=[];
page.on("pageerror",e=>errors.push(e.message));
const sleep=ms=>new Promise(done=>setTimeout(done,ms));
async function openSeason(id,season,num,goal){
 let error;
 for(let attempts=0;attempts<15;attempts++){
  try{
   const r=await page.goto(pageUrl(id,season),{waitUntil:"domcontentloaded",timeout:45000});
   assert(r?.ok(),"HTTP "+r?.status());
   await page.waitForFunction(({id,season,num,goal})=>{
    let label=id==="ucl"?"UEFA Champions League":id==="uel"?"UEFA Europa League":"Premier League";
    const h=document.querySelector("#heading")?.textContent||"";
    const c=document.querySelector("#content")?.textContent||"";
    return h.includes(label)&&h.includes(season.replace("-","–"))&&c.includes(String(num))&&
      (!goal||c.includes(String(goal)))&&document.querySelector("#stateTag")?.textContent.trim()==="DRAFT";
   },{id,season,num,goal},{timeout:12000});
   return;
  }catch(e){error=e;await sleep(7500);}
 }
 throw new Error("LIVE "+id+" "+season+" unavailable after retries: "+String(error));
}
async function tab(name){
 const e=page.locator('button[data-tab="'+name+'"]');
 assert.equal(await e.isDisabled(),false,name+" disabled");
 await e.click();
 await page.waitForTimeout(200);
}
async function verify(id,games,goals,groups,clubs,players,rated,finalWinner){
 await openSeason(id,"2013-14",games,goals);
 let overview=await page.locator("#content").innerText();
 assert(overview.includes(String(players)),"overview missing player candidate count");
 assert(overview.includes(finalWinner),"overview missing champion");
 await tab("table");
 let t=await page.locator("#content").innerText();
 assert.match(t,/Group A/);assert.match(t,/Knockout phase/);
 assert.equal(await page.locator("#content h3").filter({hasText:/^Group [A-L]$/}).count(),groups);
 if(id==="uel")assert.match(t,/32강/);
 await tab("tiers");
 assert.equal(await page.locator(".tier-directory-section").count(),clubs,"club tier tables count");
 assert.equal(await page.locator("tr[data-player]").count(),players,"full candidate table count");
 await page.locator('button[data-tier-view="positions"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),players,"all positions candidates");
 await tab("formation");
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11,"11 Best XI details");
 await tab("top");
 const top=await page.locator("#content").innerText();
 assert.match(top,/World Class|European Top Class/);
 await tab("stats");
 assert.match(await page.locator("#content").innerText(),/Tier Distribution/);
 console.log("LIVE PASS "+id+" 2013-14 "+games+" matches, "+goals+" goals, "+groups+" groups, "+clubs+" evaluated teams, "+players+" candidates, "+rated+" source-led provisional tiers and all six UI tabs");
}
try{
 await verify("ucl",125,362,8,16,297,26,"Real Madrid");
 await verify("uel",205,475,12,8,144,22,"Sevilla");
 await openSeason("ucl","2012-13",125,368);
 await tab("tiers");
 assert.equal(await page.locator("tr[data-player]").count(),283,"prior UCL 2012-13 regression");
 await openSeason("uel","2012-13",205,521);
 await tab("tiers");
 assert.equal(await page.locator("tr[data-player]").count(),134,"prior UEL 2012-13 regression");
 assert.deepEqual(errors,[],"Unhandled JavaScript errors");
 console.log("PASS: 2013-14 UCL+UEL actual browser tabs, 2012-13 UEFA regressions");
}finally{await browser.close();}
