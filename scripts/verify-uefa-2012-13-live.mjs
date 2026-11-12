// Playwright browser smoke tests: 2012-13 UEFA archive plus existing 2011-12 and domestic regression.
// This validates the deployed UI, not independent player biography, minutes, or tier history.
import assert from "node:assert/strict";
import {createRequire} from "node:module";
const require=createRequire(import.meta.url);
const {chromium}=require("playwright");
const base="https://wjdduddlf112.github.io/footballarch/";
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1360,height:940}});
const jsErrors=[];
page.on("pageerror",err=>jsErrors.push(err.stack||err.message));
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function visit(league,season,expectedCount){
 let lastError;
 for(let tries=0;tries<12;tries++){
  try{
   let url=base+"?league="+league+"&season="+season+"&view=overview";
   const r=await page.goto(url,{waitUntil:"domcontentloaded",timeout:45000});
   assert.ok(r?.ok(),"HTTP site page not ok: "+(r?.status()||"missing"));
   await page.waitForFunction(({league,season,expectedCount})=>{
    const label={ucl:"UEFA Champions League",uel:"UEFA Europa League",premierleague:"Premier League"}[league];
    const header=document.querySelector("#heading")?.textContent||"";
    const body=document.querySelector("#content")?.innerText||"";
    return header.includes(label)&&header.includes(season.replace("-","–"))&&body.includes(String(expectedCount))&&
      body.length>150&&!body.includes("데이터를 불러오는 중입니다.");
   },{league,season,expectedCount},{timeout:12000});
   return;
  }catch(e){lastError=e;await pause(10000);}
 }
 throw new Error(league+" "+season+" production not ready: "+String(lastError));
}
async function tab(name){
 const button=page.locator('button[data-tab="'+name+'"]');
 assert.ok(await button.count(),name+" tab missing");
 assert.equal(await button.isDisabled(),false,name+" is disabled");
 await button.click();
 await page.waitForTimeout(250);
}
async function tournamentCheck(league,numGames,numGroups,candidates,assessed){
 await visit(league,"2012-13",numGames);
 assert.equal((await page.locator("#stateTag").textContent())?.trim(),"DRAFT",league+" DRAFT state");
 const overview=await page.locator("#content").innerText();
 assert.match(overview,new RegExp(String(numGames)),league+" game total");
 assert.match(overview,/선수 평가/,league+" player evaluation label");
 await tab("table");
 const tableText=await page.locator("#content").innerText();
 assert.match(tableText,/Knockout phase/,league+" knockout");
 assert.match(tableText,/Group A/,league+" group A");
 assert.match(tableText,/Final|결승/,league+" final");
 const groupHeads=await page.locator("#content h3").filter({hasText:/^Group [A-L]$/}).count();
 assert.equal(groupHeads,numGroups,league+" groups visible");
 if(league==="uel")assert.match(tableText,/32강/, "UEL round of 32 visible");
 await tab("tiers");
 assert.equal(await page.locator(".tier-directory-section").count(),assessed,league+" evaluated club tables");
 assert.equal(await page.locator("tr[data-player]").count(),candidates,league+" all candidate rows");
 await tab("formation");
 const pitch=await page.locator("#content").innerText();
 assert.match(pitch,/4-2-3-1/);
 assert.equal(await page.locator(".xi-detail-list tr[data-player]").count(),11,league+" XI list");
 await tab("top");
 assert.match(await page.locator("#content").innerText(),/World Class|European Top Class/,league+" top class labels");
 console.log("PASS "+league+" 2012-13 overview; "+numGroups+" groups; "+numGames+" games; "+candidates+" candidate rows; "+assessed+" clubs; 11 XI; European top tab");
}
try{
 await tournamentCheck("ucl",125,8,283,16);
 await tournamentCheck("uel",205,12,134,8);
 await visit("ucl","2011-12",125);
 await tab("tiers");
 assert.equal(await page.locator("tr[data-player]").count(),287,"2011-12 regression UCL candidate display");
 await visit("premierleague","2012-13",128);
 assert.match(await page.locator("#heading").textContent(),/Premier League/);
 assert.deepEqual(jsErrors,[],"Unhandled browser JavaScript exceptions");
 console.log("PASS: browser 2012-13 UCL and UEL, earlier UCL 2011-12 and 2012-13 Premier League regression");
}finally{await browser.close();}
