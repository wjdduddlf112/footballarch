/* GitHub Pages LIVE smoke (run in an environment with Playwright/Chromium and network).
 * Install: npm install --no-save playwright@1.56.1 && npx playwright install chromium
 * Run: node scripts/verify-bundesliga-2013-14-live.mjs
 * Browser pass is separate from schema and historical audit.
 */
import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const ORIGIN="https://wjdduddlf112.github.io/footballarch/";
const path=(season,view="overview")=>ORIGIN+"?league=bundesliga&season="+season+"&view="+view;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function ready(page,season,people) {
 let last;
 for(let i=0;i<12;i++){
  try {
   await page.goto(path(season),{waitUntil:"domcontentloaded",timeout:30000});
   await page.waitForFunction(({season,people})=>{
    const text=document.querySelector("#content")?.innerText||"";
    const heading=document.querySelector("#heading")?.innerText||"";
    const tiers=document.querySelector("#allTiersTab");
    return heading.includes(season.replace("-","–"))&&text.includes(String(people))&&
      document.querySelector("#stateTag")?.textContent.trim()==="DRAFT"&&
      tiers&&getComputedStyle(tiers).display!=="none";
   },{season,people},{timeout:10000});
   return;
  }catch(e){last=e;await sleep(12000);}
 }
 throw new Error("Published season not loaded "+season+": "+String(last));
}
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1280,height:900}});
const pageErrors=[];
page.on("pageerror",e=>pageErrors.push(e.message));
try{
 await ready(page,"2013-14",139);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator(".tier-directory-section").count(),7,"7 qualifying clubs");
 assert.equal(await page.locator("tr[data-player]").count(),139,"All Tiers by club");
 await page.locator('button[data-tier-view="positions"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),139,"All Tiers by position");
 await page.locator('button[data-tier-view="tiers"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),139,"All Tiers by grade");
 await page.locator('tr[data-player]').first().click();
 const dialog=page.locator('[role="dialog"]');
 await dialog.waitFor();
 const details=await dialog.innerText();
 for(const y of ["2011-12","2012-13","2013-14"])assert(details.includes(y),"missing season "+y);
 assert(details.includes("partially_verified"),"missing historical verification disclosure");
 await page.locator('button[data-action="close"]').click();
 await page.locator('button[data-tab="formation"]').click();
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11,"Best XI");
 await page.locator('button[data-tab="top"]').click();
 assert.match(await page.locator("#content").innerText(),/League Top Class/);
 await page.locator('button[data-tab="stats"]').click();
 assert.match(await page.locator("#content").innerText(),/Matching Players|League Top Class/);
 await page.locator('button[data-tab="table"]').click();
 assert.match(await page.locator("#content").innerText(),/Bayern/);
 await ready(page,"2012-13",130);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),130,"2012-13 preserved");
 assert.equal(pageErrors.length,0,"JS page errors: "+pageErrors.join(","));
 console.log("PASS: 2013-14 live DRAFT 139 players 7 clubs XI 11 + 2012-13 regression.");
}finally{await browser.close();}
