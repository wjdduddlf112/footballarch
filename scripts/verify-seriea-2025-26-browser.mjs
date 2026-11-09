// Automated browser smoke test against locally served checked-out Football Archive.
// Requires: npm install --no-save playwright && npx playwright install --with-deps chromium
import {chromium} from "playwright";
import {spawn} from "node:child_process";
import {setTimeout as sleep} from "node:timers/promises";
import assert from "node:assert/strict";
const server=spawn("python3",["-m","http.server","8766","--bind","127.0.0.1"],{stdio:"ignore"});
await sleep(1000);
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1480,height:900}});
const javascriptErrors=[],failedLocalRequests=[],checks=[];
page.on("pageerror",e=>javascriptErrors.push(String(e)));
page.on("response",r=>{if(r.url().startsWith("http://127.0.0.1:8766/")&&r.status()>=400)failedLocalRequests.push([r.url(),r.status()]);});
try{
 await page.goto("http://127.0.0.1:8766/?league=seriea&season=2025-26",{waitUntil:"networkidle",timeout:60000});
 const data=await page.evaluate(async()=>{const response=await fetch("./data/seriea-2025-26.json",{cache:"no-store"});const obj=await response.json();return{http:response.status,players:obj.players.length,qualifiers:obj.qualifiers.length,xi:obj.bestXi.length,status:obj.meta.status}});
 assert.deepEqual(data,{http:200,players:131,qualifiers:7,xi:11,status:"draft_unapproved"});
 for(const tab of ["overview","formation","top","tiers","table","stats"]){
  const locator=page.locator('button[data-tab="'+tab+'"]');
  assert.ok(await locator.count(),"Missing "+tab+" nav tab");
  await locator.first().click();
  await page.waitForTimeout(250);
  const text=await page.locator("#content").innerText();
  assert.ok(text.length>70,tab+" empty");
  assert.ok(!text.includes("데이터를 불러오는 중입니다"),tab+" loading indefinitely");
  checks.push({tab,length:text.length});
 }
 await page.locator('button[data-tab="formation"]').first().click();
 assert.match(await page.locator("#content").innerText(),/라우타로|Lautaro|바스토니|Bastoni/);
 await page.locator('button[data-tab="top"]').first().click();
 const card=page.locator("[data-player]").first();
 assert.ok(await card.count(),"No player card in top");
 await card.click();
 const details=await page.locator(".dialog").innerText();
 assert.ok(details.includes("Date of birth")&&details.includes("원어명"),"Player modal missing identity fields");
 assert.deepEqual(javascriptErrors,[],"page JS exceptions");
 assert.deepEqual(failedLocalRequests,[],"local broken URLs");
 console.log(JSON.stringify({passed:true,scope:"LOCAL BROWSER on GitHub checkout",data,checks,playerDetailsSample:details.slice(0,180),javascriptErrors,failedLocalRequests},null,2));
}catch(error){
 console.error(JSON.stringify({passed:false,error:String(error),checks,javascriptErrors,failedLocalRequests},null,2));
 throw error;
}finally{
 await browser.close();
 server.kill();
}
