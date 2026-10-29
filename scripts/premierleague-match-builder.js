/* Historical Premier League table builder from openfootball/england match records.
 * Does not infer UEFA entrants from final league position. Those are curated separately.
 * Recalculated tables remain drafts until official rank/point-deduction validation.
 */
const alias={
"AFC Bournemouth":"bournemouth","Manchester United":"manutd","Manchester City":"mancity","West Bromwich Albion":"westbrom","Brighton & Hove Albion":"brighton","Wolverhampton Wanderers":"wolves","Nottingham Forest":"nottingham","West Ham United":"westham","Newcastle United":"newcastle","Tottenham Hotspur":"tottenham","Leeds United":"leeds","Crystal Palace":"crystalpalace","Leicester City":"leicester","Southampton":"southampton","Ipswich Town":"ipswich","Norwich City":"norwich","Blackburn Rovers":"blackburn","Bolton Wanderers":"bolton","Sheffield United":"sheffieldunited","Huddersfield Town":"huddersfield","Swansea City":"swansea","Cardiff City":"cardiff","Blackpool":"blackpool","Derby County":"derby","Wigan Athletic":"wigan","Stoke City":"stoke","Hull City":"hull","Reading":"reading","Portsmouth":"portsmouth","Charlton Athletic":"charlton","Birmingham City":"birmingham","Fulham":"fulham","Everton":"everton","Arsenal":"arsenal","Chelsea":"chelsea","Liverpool":"liverpool","Burnley":"burnley","Watford":"watford","Brentford":"brentford","Luton Town":"luton","Sheffield Wednesday":"sheffieldwednesday","Bradford City":"bradford","Coventry City":"coventry","Wimbledon":"wimbledon","Queens Park Rangers":"qpr","Sunderland":"sunderland","Aston Villa":"astonvilla","Middlesbrough":"middlesbrough"};
const footballDataIds={arsenal:57,astonvilla:58,blackburn:59,chelsea:61,everton:62,fulham:63,liverpool:64,mancity:65,manutd:66,newcastle:67,norwich:68,qpr:69,stoke:70,sunderland:71,swansea:72,tottenham:73,westbrom:74,wigan:75,wolves:76,westham:563,leeds:341,derby:342,middlesbrough:343,watford:346,leicester:338,southampton:340,crystalpalace:354,sheffieldunited:356,nottingham:351,ipswich:349,brentford:402,brighton:397,bournemouth:1044,burnley:328,hull:322,reading:355,cardiff:715,bolton:68};
const officialDeductions={
 "2009-10":{portsmouth:9},
 "2023-24":{everton:8,nottingham:4}
};
export function derivePremierLeagueTable(text,season,knownClubs={}){
 let matches=[];
 for(const line of text.split(/\r?\n/)){
  let m=line.match(/^\s*(?:\d{1,2}:\d{2}\s+)?(.+?)\s{2,}(\d+)-(\d+)(?:\s+\(\d+-\d+\))?\s{2,}(.+?)\s*$/);
  if(m)matches.push([m[1].trim(),m[4].trim(),+m[2],+m[3]]);
  else { m=line.match(/^\s*(?:\d{1,2}:\d{2}\s+)?(.+?)\s+v\s+(.+?)\s+(\d+)-(\d+)(?:\s|\(|$)/);
   if(m)matches.push([m[1].trim(),m[2].trim(),+m[3],+m[4]]); }
 }
 if(matches.length!==380)throw new Error(season+": expected 380 matches; found "+matches.length);
 const clubs=new Map();
 function get(team){
  const normalized=team.replace(/\s+(FC|AFC)$/,"").trim(),id=alias[normalized];
  if(!id)throw new Error(season+": missing alias "+team);
  if(!clubs.has(id)){
   let profile={id,name:knownClubs[id]?.name||team,abbr:knownClubs[id]?.abbr||id.slice(0,3).toUpperCase()};
   if(knownClubs[id]?.crestUrl)profile={...knownClubs[id],...profile};
   else if(footballDataIds[id]){
    profile.crestUrl="https://crests.football-data.org/"+footballDataIds[id]+".png";
    profile.crestHistoricalStatus="modern_reference_historical_version_unverified";
    profile.crestSource="https://www.football-data.org/";
   }
   clubs.set(id,{profile,row:{club:id,played:0,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0}});
  }
  return clubs.get(id).row;
 }
 for(const [hName,aName,hg,ag] of matches){
  const h=get(hName),a=get(aName);
  h.played++;a.played++;h.goalsFor+=hg;h.goalsAgainst+=ag;a.goalsFor+=ag;a.goalsAgainst+=hg;
  if(hg>ag){h.wins++;a.losses++}else if(hg<ag){a.wins++;h.losses++}else{h.draws++;a.draws++}
 }
 if(clubs.size!==20||[...clubs.values()].some(x=>x.row.played!==38))throw new Error(season+": invalid clubs or games");
 const deductions=officialDeductions[season]||{},usedDeductions=[];
 const standings=[...clubs.values()].map(x=>x.row).map(r=>{
  const deduction=deductions[r.club]||0;
  if(deduction)usedDeductions.push({club:r.club,points:deduction});
  return {...r,gd:r.goalsFor-r.goalsAgainst,points:3*r.wins+r.draws-deduction,...(deduction?{pointsDeduction:deduction}:{})};
 }).sort((a,b)=>b.points-a.points||b.gd-a.gd||b.goalsFor-a.goalsFor||a.club.localeCompare(b.club))
  .map((r,i)=>({rank:i+1,...r,competition:null,outcome:i>=17?"relegated":"retained"}));
 if(standings.reduce((s,r)=>s+r.wins-r.losses,0)!==0||standings.reduce((s,r)=>s+r.goalsFor-r.goalsAgainst,0)!==0)
  throw new Error(season+": match totals imbalanced");
 const year=+season.slice(0,4);
 return {meta:{
   leagueId:"premierleague",league:"Premier League",season,
   qualifyingSeason:(year+1)+"-"+String((year+2)%100).padStart(2,"0"),
   status:"standings_only",label:"League Table",standingsOnly:true,
   standingsVerified:"match_reconstructed_pending_official_rank_crosscheck",
   europeanQualificationVerified:false,assessmentStart:(year-2)+"-"+String((year-1)%100).padStart(2,"0"),assessmentEnd:season,
   sourceMatches:"https://github.com/openfootball/england/blob/master/"+season+"/1-premierleague.txt",
   reference:"https://www.rsssf.org/tablese/eng"+(year+1<2010?String((year+1)%100).padStart(2,"0"):String(year+1))+".html",
   sourceGameCount:380,
   pointsDeductions:usedDeductions,
   notes:"Match-derived table: official rank, tie-breaking and actual next-season UEFA entrants require source verification. Provisional until verified.",
   lastReview:"2026-10-29"
  },clubs:[...clubs.values()].map(x=>x.profile),qualifiers:[],standings,players:[],bestXi:[]};
}
