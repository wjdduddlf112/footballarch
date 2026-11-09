#!/usr/bin/env node
/**
 * Playwright: Football Archive Division 1 1999-00 DRAFT UI.
 * Environment: TARGET_URL=http://127.0.0.1:8871/?league=ligue1&season=1999-00
 * Example live: TARGET_URL=https://wjdduddlf112.github.io/footballarch/?league=ligue1&season=1999-00
 * Browser checks independent of static JSON schema checks.
 */
import { chromium } from "playwright";

const url=process.env.TARGET_URL||"http://127.0.0.1:8871/?league=ligue1&season=1999-00";
const expected=Number(process.env.EXPECTED_PLAYERS||135);
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1440,height:900}});
const pageErrors=[],failedRequests=[],steps=[];
page.on("pageerror",e=>pageErrors.push(e.message));
page.on("response",r=>{
 if(r.status()>=400&&r.url().includes("/footballarch/data/ligue1-1999-00.json"))failedRequests.push(r.url()+" "+r.status());
});
const check=(ok,name,actual)=>{
 steps.push({name,pass:Boolean(ok),actual});
 if(!ok)throw Error(name+": "+String(actual));
};
try{
 await page.goto(url,{waitUntil:"domcontentloaded",timeout:60000});
 await page.waitForFunction(()=>document.querySelector("#allTiersTab")?.style.display!=="none" && document.querySelector("#stateTag")?.textContent==="DRAFT",{timeout:45000});
 check((await page.locator("#heading").innerText()).includes("1999"),"1999-00 heading",await page.locator("#heading").innerText());
 check(await page.locator("#allTiersTab").isVisible(),"All Tiers tab visible",true);
 await page.locator("#allTiersTab").click();
 await page.locator(".tier-directory-head").waitFor({timeout:15000});
 const title=await page.locator(".tier-directory-head h2").innerText();
 check(title.includes(String(expected)),"Full roster total",title);
 const clubs=await page.locator(".tier-directory-section").count();
 check(clubs===8,"Qualified club sections",clubs);
 const rows=await page.locator(".tier-directory-section tbody tr").count();
 check(rows===expected,"Club roster table rows",rows);
 await page.locator('[data-tier-view="positions"]').click();
 const pcount=await page.locator(".tier-directory-section").count();
 check(pcount===10,"Ten position sections",pcount);
 const prows=await page.locator(".tier-directory-section tbody tr").count();
 check(prows===expected,"All positional ranking rows",prows);
 const tierCount=await page.locator(".tier-directory-section tbody tr .tier").count();
 check(tierCount===expected,"Each positional ranked row has a grade",tierCount);
 await page.locator('[data-tier-view="tiers"]').click();
 const tierRows=await page.locator(".tier-directory-section tbody tr").count();
 check(tierRows===expected,"All Tier view rows",tierRows);
 await page.locator('[data-tab="formation"]').click();
 const slots=await page.locator(".pitch .slot").count();
 check(slots===11,"Best XI pitch slots",slots);
 const empty=await page.locator(".pitch .slot-label").allTextContents();
 check(!empty.some(t=>t.includes("선정 대기")),"Best XI players mapped to IDs",empty);
 const first=page.locator('.rank-row[data-player]').first();
 if(await first.count()){
  await first.click();
  check(await page.locator('.dialog .detail-row').count()>=7,"Player details modal",await page.locator('.dialog .detail-row').count());
  await page.locator('[data-action="close"]').click();
 }
 await page.locator('[data-tab="table"]').click();
 const table=await page.locator("#content").innerText();
 check(table.includes("Monaco")&&table.includes("Sedan"),"Historic 18-team league table",table.slice(0,150));
 await page.locator('[data-tab="top"]').click();
 check((await page.locator("#content").innerText()).includes("League Top"),"League Top Class view",true);
 check(pageErrors.length===0,"No runtime JS exceptions",pageErrors);
 check(failedRequests.length===0,"No season JSON failed requests",failedRequests);
 console.log(JSON.stringify({result:"PASS",url,expected,steps,pageErrors,failedRequests},null,2));
} catch(e){
 console.error(JSON.stringify({result:"FAIL",url,expected,error:e.message,steps,pageErrors,failedRequests},null,2));
 process.exitCode=1;
} finally{await browser.close();}
