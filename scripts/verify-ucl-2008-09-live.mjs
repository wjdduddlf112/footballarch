import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const base="https://wjdduddlf112.github.io/footballarch/";
const u=(season)=>base+"?league=ucl&season="+season+"&view=overview";
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1350,height:960}});
const errors=[];page.on("pageerror",e=>errors.push(e.message));
async function waitSeason(season,expected){
 let last;
 for(let i=0;i<12;i++){
  try{
   await page.goto(u(season),{waitUntil:"domcontentloaded",timeout:30000});
   await page.waitForFunction(({season,expected})=>{
    const h=document.querySelector("#heading")?.textContent||"";
    const body=document.querySelector("#content")?.innerText||"";
    const tier=document.querySelector("#allTiersTab");
    return h.includes("UEFA Champions League")&&h.includes(season.replace("-","–"))&&
      body.includes(String(expected))&&
      document.querySelector("#stateTag")?.textContent.trim()==="DRAFT"&&
      !!tier&&getComputedStyle(tier).display!=="none";
   },{season,expected},{timeout:15000});
   return;
  }catch(error){last=error;await sleep(9000);}
 }
 throw new Error("LIVE UCL not ready "+season+": "+String(last));
}
try{
 await waitSeason("2008-09",292);
 const overview=await page.locator("#content").innerText();
 assert.match(overview,/329/,"329 competition goals");
 assert.match(overview,/Barcelona/,"2008-09 champion");
 await page.locator('button[data-tab="table"]').click();
 const table=await page.locator("#content").innerText();
 assert.match(table,/Group A/);
 assert.match(table,/Roma/);
 assert.match(table,/결승|Final/);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator(".tier-directory-section").count(),16,"16 club tier tables");
 assert.equal(await page.locator("tr[data-player]").count(),292,"all 292 players visible");
 await page.locator('button[data-tier-view="positions"]').click();
 assert.equal(await page.locator("tr[data-player]").count(),292,"292 cross-club positional ranking rows");
 await page.locator('button[data-tab="formation"]').click();
 const labels=await page.locator("#content").innerText();
 assert.match(labels,/4-3-3/);
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11,"11 individual XI details");
 assert.match(labels,/Messi|메시/);
 await page.locator('button[data-tab="top"]').click();
 assert.match(await page.locator("#content").innerText(),/European Top Class|World Class/);
 await waitSeason("2007-08",299);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator(".tier-directory-section").count(),16,"2007-08 regression club groups");
 assert.equal(await page.locator("tr[data-player]").count(),299,"2007-08 regression candidates");
 assert.deepEqual(errors,[],"browser JavaScript exceptions");
 console.log("PASS: UCL 2008-09 deployed site 32 clubs, 125 matches, 292 candidate rows, 16 club groups, 11 formation selections; UCL 2007-08 regression");
}finally{await browser.close();}
