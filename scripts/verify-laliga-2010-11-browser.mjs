import {chromium} from "playwright";
import {spawn} from "node:child_process";
import {strict as assert} from "node:assert";
import {setTimeout as sleep} from "node:timers/promises";
const server=spawn("python3",["-m","http.server","8765","--bind","127.0.0.1"],{stdio:"ignore"});
await sleep(900);
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1280,height:860}});
const errors=[],responses=[];
page.on("pageerror",e=>errors.push(String(e)));
page.on("response",r=>{if(r.url().startsWith("http://127.0.0.1:8765/")&&r.status()>=400)responses.push([r.url(),r.status()])});
try{
 await page.goto("http://127.0.0.1:8765/?league=laliga&season=2010-11&view=overview",{waitUntil:"networkidle",timeout:60000});
 const source=await page.evaluate(async()=>{const r=await fetch("./data/laliga-2010-11.json",{cache:"no-store"});const j=await r.json();return{http:r.status,count:j.players?.length,status:j.meta?.status}});
 assert.deepEqual(source,{http:200,count:127,status:"draft"});
 const tabs=["overview","formation","top","table","stats"];let checks=[];
 for(const tab of tabs){
  await page.locator('button[data-tab="'+tab+'"]').click();
  await page.waitForTimeout(500);
  const txt=await page.locator("#content").innerText();
  assert.ok(txt.length>90,tab+" empty");
  assert.ok(!txt.includes("데이터를 불러오는 중입니다"),tab+" loading");
  await page.screenshot({path:"/tmp/laliga-2010-11-"+tab+".png",fullPage:true});
  checks.push({tab,length:txt.length,excerpt:txt.slice(0,70)});
 }
 await page.locator('button[data-tab="formation"]').click();
 assert.match(await page.locator("#content").innerText(),/메시|Messi/);
 await page.locator('button[data-tab="top"]').click();
 const player=page.locator("[data-player]").first();
 assert.ok(await player.count(),"player card absent");
 await player.click();
 const details=await page.locator(".dialog").innerText();
 assert.ok(details.includes("원어명")&&details.includes("Date of birth"),"missing player modal fields");
 assert.deepEqual(errors,[]);
 assert.deepEqual(responses,[]);
 console.log(JSON.stringify({passed:true,scope:"LOCAL PR branch browser",source,checks,details:details.slice(0,200),errors,responses},null,2));
}catch(e){console.error(JSON.stringify({passed:false,error:String(e),errors,responses}));throw e}
finally{await browser.close();server.kill()}
