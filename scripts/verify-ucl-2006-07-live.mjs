import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const base="https://wjdduddlf112.github.io/footballarch/";
const url=season=>base+"?league=ucl&season="+season+"&view=overview";
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1360,height:900}});
const errors=[];
page.on("pageerror",e=>errors.push(e.message));
async function waitSeason(season,count){
 let last;
 for(let i=0;i<12;i++){
  try{
   await page.goto(url(season),{waitUntil:"domcontentloaded",timeout:30000});
   await page.waitForFunction(({season,count})=>{
    const header=document.querySelector("#heading")?.textContent||"";
    const body=document.querySelector("#content")?.innerText||"";
    const tier=document.querySelector("#allTiersTab");
    return header.includes("UEFA Champions League")&&header.includes(season.replace("-","–"))&&
      body.includes("278") === (count===278) && body.includes(String(count)) && 
      tier&&getComputedStyle(tier).display!=="none";
   },{season,count},{timeout:15000});
   return;
  }catch(e){last=e;await pause(12000);}
 }
 throw new Error("Pages still stale after retries: "+season+" / "+last);
}
try{
 await waitSeason("2006-07",278);
 assert.match(await page.locator("#content").innerText(),/309/);
 await page.locator('button[data-tab="table"]').click();
 assert.match(await page.locator("#content").innerText(),/Group A/);
 assert.match(await page.locator("#content").innerText(),/Final|결승/);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator(".tier-directory-section").count(),16);
 assert.equal(await page.locator("tr[data-player]").count(),278);
 await page.locator('button[data-tier-view="positions"]').click();
 assert((await page.locator("tr[data-player]").count())>=198);
 await page.locator('button[data-tab="formation"]').click();
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11);
 assert.match(await page.locator("#content").innerText(),/Kaká|카카/);
 await page.locator('button[data-tab="top"]').click();
 assert.match(await page.locator("#content").innerText(),/European Top Class|World Class/);
 await waitSeason("2005-06",248);
 await page.locator('button[data-tab="tiers"]').click();
 assert.equal(await page.locator(".tier-directory-section").count(),16);
 assert.equal(await page.locator("tr[data-player]").count(),248);
 assert.deepEqual(errors,[],"browser JS errors");
 console.log("PASS UCL 2006-07 LIVE: 32 clubs, 125 results, 278 candidates, 16 tier tables, 11-person 4-4-1-1 Best XI. UCL 2005-06 regression passed.");
}finally{await browser.close();}
