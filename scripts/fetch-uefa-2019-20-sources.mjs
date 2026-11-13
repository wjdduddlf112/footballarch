// One-off provenance probe for Football Archive UEFA 2019-20 fixtures.
import fs from "node:fs";
const urls={
 ucl:"https://raw.githubusercontent.com/openfootball/champions-league/master/2019-20/cl.txt",
 uel_csv:"https://fixturedownload.com/download/csv/europa-league-2019",
 uel_json:"https://fixturedownload.com/view/json/europa-league-2019",
 uel_results:"https://fixturedownload.com/results/europa-league-2019",
 ucl_csv:"https://fixturedownload.com/download/csv/champions-league-2019",
 ucl_json:"https://fixturedownload.com/view/json/champions-league-2019",
};
const report=[];
for(const [name,url] of Object.entries(urls)){
 try{
  const res=await fetch(url,{headers:{"User-Agent":"FootballArchiveResearch/1.0"},signal:AbortSignal.timeout(22000)});
  const content=await res.text();
  report.push({name,url,http:res.status,type:res.headers.get("content-type"),length:content.length,snippet:content.slice(0,1100)});
  if(res.ok() && (name==="ucl"||name.endsWith("_csv")||name.endsWith("_json"))) fs.writeFileSync("audit/UEFA_2019_20_RAW_"+name+".txt",content);
 }catch(e){report.push({name,url,error:String(e)})}
}
fs.writeFileSync("audit/UEFA_2019_20_SOURCE_FETCH_PROBE.json",JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify(report.map(({name,http,length,error})=>({name,http,length,error})),null,2));
