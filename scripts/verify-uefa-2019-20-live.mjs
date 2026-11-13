// Playwright smoke test for live Football Archive UEFA 2019-20.
// This verifies browser delivery, not individual-player historical accuracy.
import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1024}});
const errors=[];
page.on("pageerror",e=>errors.push(e.message));
const base="https://wjdduddlf112.github.io/footballarch/";
const sleep=ms=>new Promise(done=>setTimeout(done,ms));
const url=(id,season)=>base+"?league="+id+"&season="+season+"&view=overview";
async function openSeason(id,season,candidates,games,goals){
 let previous;
 for(let attempt=0;attempt<15;attempt++){
  try{
   const res=await page.goto(url(id,season),{waitUntil:"domcontentloaded",timeout:45000});
   assert(res?.ok(),"site HTTP "+res?.status());
   await page.waitForFunction(({id,season,candidates,games,goals})=>{
    const title=document.querySelector("#heading")?.textContent||"";
    const content=document.querySelector("#content")?.textContent||"";
    return title.includes(id==="ucl"?"UEFA Champions League":"UEFA Europa League") &&
      title.includes(season.replace("-","–")) &&
      content.includes(String(candidates)) &&
      content.includes(String(games)) &&
      content.includes(String(goals)) &&
      document.querySelector("#stateTag")?.textContent.trim()==="DRAFT";
   },{id,season,candidates,games,goals},{timeout:15000});
   return;
  }catch(e){previous=e;await sleep(8000);}
 }
 throw new Error("GitHub Pages deployment missing "+id+" "+season+": "+previous);
}
async function tab(name){
 const selector='button[data-tab="'+name+'"]';
 const b=page.locator(selector);
 assert.equal(await b.isDisabled(),false,name+" tab disabled");
 await b.click();await page.waitForTimeout(250);
}
async function verify(id,clubs,groups,candidates,games,goals){
 await openSeason(id,"2019-20",candidates,games,goals);
 await tab("table");
 assert.equal(await page.locator("#content h3").filter({hasText:/^Group [A-L]$/}).count(),groups,id+" group rendering");
 let t=await page.locator("#content").innerText();assert.match(t,/Knockout phase/);
 await tab("tiers");
 assert.equal(await page.locator(".tier-directory-section").count(),clubs,id+" club tier tables");
 assert.equal(await page.locator("tr[data-player]").count(),candidates,id+" player candidates");
 await page.locator('button[data-tier-view="positions"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),candidates,id+" position directory");
 await tab("formation");
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11,id+" Best XI");
 await tab("top");assert.match(await page.locator("#content").innerText(),/World Class|European Top Class/);
 await tab("stats");assert.match(await page.locator("#content").innerText(),/Tier Distribution/);
 console.log("LIVE_BROWSER_PASS "+id+" 2019-20 "+clubs+" clubs "+groups+" groups "+candidates+" nominees "+games+" games "+goals+" goals");
}
try{
 await verify("ucl",16,8,298,119,386);
 await verify("uel",8,12,148,197,548);
 await openSeason("ucl","2018-19",264,125,366);
 await tab("tiers");assert.equal(await page.locator("tr[data-player]").count(),264,"prior-season UCL regression");
 await openSeason("uel","2018-19",133,205,565);
 await tab("tiers");assert.equal(await page.locator("tr[data-player]").count(),133,"prior-season UEL regression");
 assert.deepEqual(errors,[],"Browser JavaScript exceptions");
 console.log("PASS 2019-20 UEFA Champions League and Europa League live pages, and prior 2018-19 regressions");
}finally{await browser.close();}

