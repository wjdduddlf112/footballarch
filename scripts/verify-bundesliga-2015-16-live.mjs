/* This is an ACTUAL Chromium/Playwright smoke test for the published GitHub Pages site.
 * Not run just by being committed. Requires npm install --no-save playwright@1.56.1
 * and npx playwright install --with-deps chromium.
 */
import {createRequire} from "node:module";
import assert from "node:assert/strict";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const base="https://wjdduddlf112.github.io/footballarch/";
const u=(season)=>base+"?league=bundesliga&season="+season+"&view=overview";
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function waitForPublishedSeason(page,season,expected){
 let last;
 for(let i=0;i<12;i++){
  try{
   await page.goto(u(season),{waitUntil:"domcontentloaded",timeout:30000});
   await page.waitForFunction(({season,expected})=>{
    const h=document.querySelector("#heading")?.textContent||"";
    const content=document.querySelector("#content")?.innerText||"";
    const tier=document.querySelector("#allTiersTab");
    return h.includes("Bundesliga")&&h.includes(season.replace("-","–"))&&
      document.querySelector("#stateTag")?.textContent.trim()==="DRAFT"&&
      !!tier&&getComputedStyle(tier).display!=="none"&&content.includes(String(expected));
   },{season,expected},{timeout:10000});
   return;
  }catch(e){last=e;await pause(10000)}
 }
 throw new Error("LIVE Pages season not loaded: "+season+" "+String(last));
}
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1320,height:920}});
const exceptions=[];
page.on("pageerror",e=>exceptions.push(e.message));
try{
 await waitForPublishedSeason(page,"2015-16",132);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator(".tier-directory-section").count(),7,"7 European qualifier club sections");
 assert.equal(await page.locator("tr[data-player]").count(),132,"132 club-view rows");
 await page.locator('button[data-tier-view="positions"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),132,"132 ranked position-view rows");
 await page.locator('button[data-tier-view="tiers"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),132,"132 graded-view rows");
 await page.locator("tr[data-player]").first().click();
 const dialog=page.locator('[role="dialog"]');
 await dialog.waitFor();
 const detail=await dialog.innerText();
 for(const year of ["2012-13","2014-15","2015-16"])assert(detail.includes(year),"missing per-player review year "+year);
 assert(detail.includes("partially_verified"),"historical state must remain visible");
 await page.locator('button[data-action="close"]').click();
 await page.locator('button[data-tab="formation"]').click();
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11,"Best XI exactly eleven");
 await page.locator('button[data-tab="top"]').click();
 assert.match(await page.locator("#content").innerText(),/League Top Class/);
 await page.locator('button[data-tab="table"]').click();
 assert.match(await page.locator("#content").innerText(),/Bayern/);
 await page.locator('button[data-tab="stats"]').click();
 assert.match(await page.locator("#content").innerText(),/Matching Players|League Top Class/);
 await waitForPublishedSeason(page,"2014-15",141);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),141,"2014-15 prior-season regression");
 assert.deepEqual(exceptions,[],"browser errors "+exceptions.join(","));
 console.log("PASS: Bundesliga 2015-16 LIVE site 132 records 7 clubs 11 XI and prior-year regression.");
} finally {await browser.close();}
