// Browser smoke test against real public GitHub Pages, separate from local checkout checks.
import {chromium} from "playwright";
import assert from "node:assert/strict";
const url="https://wjdduddlf112.github.io/footballarch/?league=seriea&season=2023-24";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1440,height:900}});
const errors=[],badResponses=[],checks=[];
page.on("pageerror",e=>errors.push(String(e)));
page.on("response",r=>{if(r.url().startsWith("https://wjdduddlf112.github.io/footballarch/")&&r.status()>=400&&!r.url().includes("data/seriea-2023-24.json"))badResponses.push([r.url(),r.status()]);});
try{
 await page.goto(url,{waitUntil:"domcontentloaded",timeout:60000});
 let source;
 for(let attempt=0;attempt<12;attempt++){
  try {source=await page.evaluate(async()=>{
  const r=await fetch("./data/seriea-2023-24.json",{cache:"no-store"});
  const d=await r.json();
  return {http:r.status,season:d.meta.season,players:d.players.length,qualifiers:d.qualifiers.length,status:d.meta.status,xi:d.bestXi.length};
  });
  if(source.players===151&&source.season==="2023-24")break;
  } catch (e) {source=null;}
  if(attempt===11)throw Error("Public deployment propagation incomplete: "+JSON.stringify(source));
  await page.waitForTimeout(5000);
  await page.reload({waitUntil:"domcontentloaded"});
 }
 assert.deepEqual(source,{http:200,season:"2023-24",players:151,qualifiers:8,status:"draft_unapproved",xi:11});
 await page.waitForSelector('button[data-tab="overview"]',{timeout:30000});
 for(const tab of ["overview","formation","top","tiers","table","stats"]){
   const button=page.locator('button[data-tab="'+tab+'"]');
   await button.first().click();
   await page.waitForTimeout(250);
   const text=await page.locator("#content").innerText();
   assert.ok(text.length>80,tab+" blank");
   assert.ok(!text.includes("데이터를 불러오는 중입니다"),tab+" loading");
   checks.push({tab,characters:text.length});
 }
 await page.locator('button[data-tab="formation"]').first().click();
 assert.match(await page.locator("#content").innerText(),/라우타로|Lautaro|바스토니|Bastoni/);
 await page.locator('button[data-tab="top"]').first().click();
 const player=page.locator("[data-player]").first();
 assert.ok(await player.count(),"Top players not clickable");
 await player.click();
 const detail=await page.locator(".dialog").innerText();
 assert.ok(detail.includes("원어명")&&detail.includes("Date of birth"),"Player detail incomplete");
 await page.screenshot({path:"/tmp/seriea-2023-24-live-player.png",fullPage:true});
 assert.deepEqual(errors,[],"Runtime JavaScript error");
 assert.deepEqual(badResponses,[],"Public page resource error");
 console.log(JSON.stringify({passed:true,scope:"PUBLIC GITHUB PAGES LIVE BROWSER",url,source,checks,playerDetailPreview:detail.slice(0,120),errors,badResponses},null,2));
}catch(e){
 console.error(JSON.stringify({passed:false,url,error:String(e),checks,errors,badResponses},null,2));
 throw e;
}finally{
 await browser.close();
}
