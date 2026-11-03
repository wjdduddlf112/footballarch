import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { strict as assert } from "node:assert";
import { setTimeout as sleep } from "node:timers/promises";

const server=spawn("python3",["-m","http.server","8765","--bind","127.0.0.1"],{stdio:"ignore"});
await sleep(700);
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1280,height:860}});
const jsErrors=[],essentialHttpErrors=[];
page.on("pageerror",e=>jsErrors.push(String(e)));
page.on("response",r=>{if(r.url().startsWith("http://127.0.0.1:8765/")&&r.status()>=400)essentialHttpErrors.push(r.url()+" "+r.status());});
try{
 const url="http://127.0.0.1:8765/?league=laliga&season=2007-08&view=overview";
 await page.goto(url,{waitUntil:"networkidle",timeout:60000});
 await page.waitForFunction(()=>{const x=document.querySelector("#stateTag");return x&&x.textContent&&!x.textContent.toLowerCase().includes("loading");},{timeout:20000});
 const source=await page.evaluate(async()=>{
  let r=await fetch("./data/laliga-2007-08.json",{cache:"no-store"});return{status:r.status,players:(await r.json()).players.length};
 });
 assert.equal(source.status,200);assert.equal(source.players,154);
 const tabs=["overview","formation","top","table","stats"];
 const screenshots=[];
 for(const tab of tabs){
  const b=page.locator('button[data-tab="'+tab+'"]');
  await b.click();
  await page.waitForTimeout(300);
  const text=await page.locator("#content").innerText();
  assert.ok(text.trim().length>80,tab+" empty UI");
  assert.ok(!text.includes("데이터를 불러오는 중입니다"),tab+" still loading");
  await page.screenshot({path:"/tmp/laliga-2007-08-"+tab+".png",fullPage:true});
  screenshots.push({tab,chars:text.length,excerpt:text.slice(0,130)});
 }
 // Historical human-readable source has 20 clubs, Best XI and provisional grading.
 const formation=await page.locator('button[data-tab="formation"]').click().then(()=>page.locator("#content").innerText());
 assert.ok(/카시야스|Casillas/i.test(formation),"Best XI missing goalkeeper");
 assert.ok(/메시|Messi/i.test(formation),"Best XI missing right winger");
 assert.deepEqual(jsErrors,[]);
 assert.deepEqual(essentialHttpErrors,[]);
 console.log(JSON.stringify({passed:true,browser:"Playwright Chromium",renderedTabs:screenshots,playerDataCount:source.players,jsErrors,essentialHttpErrors},null,2));
}catch(e){
 console.log(JSON.stringify({passed:false,error:String(e),jsErrors,essentialHttpErrors},null,2));
 throw e;
}finally{await browser.close();server.kill();}
