(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){},114:function(e,a,t){},116:function(e,a,t){},118:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(25),c=t.n(o),s=t(19),l=t(17),i=t(58),u=(t(83),t(41)),d=t.n(u),p=t(39),m=t(33),g=t(3),h=t(26),y=t(27),b=t(29),f=t(28),E=t(30),v=t(9),S=t(22),_=t(32),w=t(21),F=t(11),A=t.n(F),D=t(130),C=t(51),O=(t(106),t(64)),T=(t(112),function(e){var a=e.scoreboardData,t=e.teams,n=e.calendarDate,o=e.changeScoreboardDate,c=e.isLoading,s=a.scoreBoardGames;return r.a.createElement("div",null,r.a.createElement("h3",null,"Games"),r.a.createElement("p",null,n.humanReadable),r.a.createElement(O.a,{selected:new Date(n.fullDate),onChange:function(e){return o(e)}}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},s&&s.length&&t&&s.map(function(e){var a=t.find(function(a){return a.teamId===e.hTeam.teamId}),n=t.find(function(a){return a.teamId===e.vTeam.teamId});if(a&&n)return r.a.createElement("div",{className:A()("col-sm-12 col-md-12 col-lg-6"),key:e.gameId},r.a.createElement(D.a,{to:"".concat(g.l,"/game/").concat(e.gameId),className:"game-link"},r.a.createElement("div",{className:"col-sm-12 game-card-wrapper"},r.a.createElement("div",{className:A()("home-team-section")},r.a.createElement("img",{src:g.i[a.urlName].logo,alt:"home team logo"}),r.a.createElement("div",null,r.a.createElement("span",null,a.nickname),r.a.createElement("br",null),r.a.createElement("span",null,"".concat(e.hTeam.win,"-").concat(e.hTeam.loss)))),r.a.createElement("div",{className:A()("game-status")},r.a.createElement("span",{className:"home-score"},e.hTeam.score||0),Object(C.a)(e),r.a.createElement("span",{className:"away-score"},e.vTeam.score||0)),r.a.createElement("div",{className:A()("away-team-section")},r.a.createElement("img",{src:g.i[n.urlName].logo,alt:"away team logo"}),r.a.createElement("div",null,r.a.createElement("span",null,n.nickname),r.a.createElement("br",null),r.a.createElement("span",null,"".concat(e.vTeam.win,"-").concat(e.vTeam.loss)))),r.a.createElement("p",{className:"col-sm-12 game-nugget"},e.nugget?e.nugget.text:""))))})||r.a.createElement("p",{className:"scoreboard-no-games"},c?"Loading...":"No games we're played that day"))))}),j=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(b.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).getScores=function(e){g.k===e.humanReadable?Object(w.c)():Object(w.a)(e.fullDate)},t}return Object(E.a)(a,e),Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props,t=a.fetchTeamsData,n=a.fetchPlayersData,r=a.calendarDate;n(),t(),this.getScores(r),setTimeout(function(){e.getScores(r)},8e3),setInterval(function(){e.getScores(r)},2e4)}},{key:"render",value:function(){var e=this.props,a=e.teams,t=e.scoreboardData,n=e.calendarDate,o=e.changeScoreboardDate,c=e.isLoading;return r.a.createElement("div",null,r.a.createElement(T,{scoreboardData:t,teams:a,calendarDate:n,changeScoreboardDate:o,isLoading:c}))}}]),a}(n.Component),k=Object(v.d)(Object(s.connect)(function(e){return{isLoading:e.http.isLoading,teams:e.teams.teamData,scoreboardData:e.scoreboard,calendarDate:e.scoreboard.calendarDate}},function(e){return Object(v.b)({fetchPlayersData:S.b,fetchTeamsData:_.b,fetchScoreboardData:w.c,changeScoreboardDate:w.a},e)}))(j),R=(t(114),function(){return r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement("p",null,"Loading..."))}),B=t(52),N=d()({loader:function(){return Promise.all([t.e(4),t.e(1)]).then(t.bind(null,132))},loading:R}),I=d()({loader:function(){return t.e(2).then(t.bind(null,131))},loading:R}),L=r.a.createElement("div",null,r.a.createElement(B.a,{showHome:!0,placeholder:"Search for any player"}),r.a.createElement(p.a,null,r.a.createElement(m.a,{exact:!0,path:g.l,component:k}),r.a.createElement(m.a,{path:"".concat(g.l,"/player/:id"),component:N}),r.a.createElement(m.a,{path:"".concat(g.l,"/game/:id"),component:I}),r.a.createElement(m.a,{component:k}))),x=(t(118),function(){return r.a.createElement("div",{className:"app-wrapper"},L)}),P=t(34),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(s.Provider,{store:P.c},r.a.createElement(i.a,{loading:null,persistor:P.b},r.a.createElement(l.ConnectedRouter,{history:P.a},r.a.createElement(x,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stat-compare",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/stat-compare","/service-worker.js");U?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):V(a,e)})}}()},13:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(4),r=t(59),o=t.n(r),c=t(3),s={isLoading:!1};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_LOADING":return Object(n.a)({},e,{isLoading:a.payload});default:return e}};var l=function(e){return function(a){return a({type:"IS_LOADING",payload:!0}),o.a.get(c.g+e).then(function(e){return a({type:"IS_LOADING",payload:!1}),e.data}).catch(function(e){return a({type:"IS_LOADING",payload:!1}),e})}}},20:function(e,a,t){"use strict";t.d(a,"d",function(){return m}),t.d(a,"e",function(){return h}),t.d(a,"c",function(){return y}),t.d(a,"b",function(){return b});var n=t(8),r=t.n(n),o=t(16),c=t(54),s=t(4),l=t(17),i=t(13),u=t(22),d=t(3),p={searchValue:"",searchResults:null,selectedSearchResult:null,playerSearchValue:"",playerSearchResults:null};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_INPUT_CHANGE":return Object(s.a)({},e,{searchValue:a.payload});case"PLAYER_INPUT_CHANGE":return Object(s.a)({},e,{playerSearchValue:a.payload});case"SET_SEARCH_RESULTS":return Object(s.a)({},e,{searchResults:a.payload});case"SET_PLAYER_SEARCH_RESULTS":return Object(s.a)({},e,{playerSearchResults:a.payload});case"SET_SELECTED_SEARCH_RESULT":return Object(s.a)({},e,{selectedSearchResult:a.payload});case"RESET_SEARCHBAR":return Object(s.a)({},e,{searchValue:p.searchValue,searchResults:p.searchResults,playerSearchValue:p.playerSearchValue,playerSearchResults:p.playerSearchResults});default:return e}};var m=function(e,a){return function(t,n){"player"===a?(t({type:"PLAYER_INPUT_CHANGE",payload:e}),t(g(n().searchbar.playerSearchValue))):(t({type:"SEARCH_INPUT_CHANGE",payload:e}),t(g(n().searchbar.searchValue)))}},g=function(e){return function(a,t){var n=e,r=t().players.playerData.filter(function(e){return"".concat(e.firstName," ").concat(e.lastName).trim().toLowerCase().includes(n.trim().toLowerCase())});t().teams.teamData.filter(function(e){return e.fullName.trim().toLowerCase().includes(n)||e.urlName.trim().toLowerCase().includes(n)});n?(a({type:"SET_SEARCH_RESULTS",payload:Object(c.a)(r)}),a({type:"SET_PLAYER_SEARCH_RESULTS",payload:r})):a({type:"SET_SEARCH_RESULTS",payload:null})}},h=function(e){return function(){var a=Object(o.a)(r.a.mark(function a(t){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t(b()),!e.personId){a.next=9;break}return a.next=4,t(Object(i.b)(d.e.replace("personId",e.personId)));case 4:n=a.sent,t({type:"SET_SELECTED_SEARCH_RESULT",payload:Object(s.a)({},e,{playerStats:n.league.standard.stats})}),t(Object(l.push)("".concat(d.l,"/player/").concat(e.personId))),a.next=11;break;case 9:t({type:"SET_SELECTED_SEARCH_RESULT",payload:e}),t(Object(l.push)("".concat(d.l,"/team/").concat(e.teamId)));case 11:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},y=function(e){return function(){var a=Object(o.a)(r.a.mark(function a(t){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t(b()),a.next=3,t(Object(i.b)(d.e.replace("personId",e.personId)));case 3:n=a.sent,t(Object(u.c)(Object(s.a)({},e,{playerStats:n.league.standard.stats})));case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},b=function(){return{type:"RESET_SEARCHBAR"}}},21:function(e,a,t){"use strict";t.d(a,"c",function(){return u}),t.d(a,"a",function(){return d});var n=t(8),r=t.n(n),o=t(16),c=t(4),s=t(13),l=t(3),i={scoreBoardGames:null,numberOfGames:null,calendarDate:{fullDate:new Date,humanReadable:l.k,urlDate:"".concat(l.m).concat(l.c).concat(l.b)}};a.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SCOREBOARD_DATA":return Object(c.a)({},e,{scoreBoardGames:a.payload.games,numberOfGames:a.payload.numGames});case"SET_CALENDAR_DATA":return Object(c.a)({},e,{calendarDate:Object(c.a)({},e.calendarDate,{fullDate:a.payload.date,humanReadable:a.payload.humanReadable,urlDate:a.payload.urlDate})});default:return e}};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var a=Object(o.a)(r.a.mark(function a(t){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(Object(s.b)(e||l.h));case 2:n=a.sent,t({type:"SET_SCOREBOARD_DATA",payload:n});case 4:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},d=function(e){return function(){var a=Object(o.a)(r.a.mark(function a(t){var n,o,c,s,i,d;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n=e.getFullYear(),o=e.getMonth()+1,c=(o<10?"0":"")+o,s=(e.getDate()<10?"0":"")+e.getDate(),i="".concat(n).concat(c).concat(s),d=l.h.split("/").reduce(function(e,a){return parseFloat(a)&&(a=i),e+"".concat(a,"/")},"").slice(0,-1),t({type:"SET_CALENDAR_DATA",payload:{date:e,humanReadable:e.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),urlDate:i}}),t(u(d));case 8:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()}},22:function(e,a,t){"use strict";t.d(a,"b",function(){return u}),t.d(a,"c",function(){return d}),t.d(a,"d",function(){return p});var n=t(8),r=t.n(n),o=t(16),c=t(4),s=t(13),l=t(3),i={playerData:null,playerToCompare:null};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PLAYERS_DATA":return Object(c.a)({},e,{playerData:a.payload});case"SET_COMPARED_PLAYER":return Object(c.a)({},e,{playerToCompare:a.payload});case"RESET_COMPARED_PLAYER":return Object(c.a)({},e,{playerToCompare:i.playerToCompare});default:return e}};var u=function(){return function(){var e=Object(o.a)(r.a.mark(function e(a){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(Object(s.b)(l.f));case 2:t=e.sent,a({type:"SET_PLAYERS_DATA",payload:t.league.standard});case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},d=function(e){return{type:"SET_COMPARED_PLAYER",payload:e}},p=function(){return{type:"RESET_COMPARED_PLAYER"}}},3:function(e,a,t){"use strict";t.d(a,"l",function(){return n}),t.d(a,"m",function(){return r}),t.d(a,"c",function(){return c}),t.d(a,"b",function(){return s}),t.d(a,"g",function(){return l}),t.d(a,"f",function(){return i}),t.d(a,"e",function(){return u}),t.d(a,"j",function(){return d}),t.d(a,"h",function(){return p}),t.d(a,"a",function(){return m}),t.d(a,"d",function(){return g}),t.d(a,"k",function(){return h}),t.d(a,"i",function(){return y});var n="/v1",r=(new Date).getFullYear(),o=(new Date).getMonth()+1,c=(o<10?"0":"")+o,s=((new Date).getDate()<10?"0":"")+(new Date).getDate(),l="https://stat-compare-proxy.herokuapp.com/",i="https://data.nba.net/10s/prod/v1/".concat(r,"/players.json"),u="http://data.nba.net/prod/v1/".concat(r,"/players/personId_profile.json"),d="https://data.nba.net/10s/prod/v1/".concat(r,"/teams.json"),p=("https://data.nba.net/prod/v1/".concat(r,"/teams/teamId/schedule.json"),"https://data.nba.net/prod/v1/".concat(r,"/teams/teamId/roster.json"),"https://data.nba.net/prod/v1/".concat(r,"/teams/teamId/leaders.json"),"https://data.nba.net/prod/v1/".concat(r).concat(c).concat(s,"/scoreboard.json")),m="https://data.nba.net/prod/v1/timeStamp/gameId_boxscore.json",g="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/teamId/".concat(r,"/260x190/personId.png"),h=(new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),y={hawks:{primary:"#E03A3E",secondary:"#C1D32F",alternate:"#26282A",logo:"https://i.logocdn.com/nba/current/atlanta-hawks.svg"},celtics:{primary:"#007A33",secondary:"#BA9653",alternate:"#963821",logo:"https://i.logocdn.com/nba/current/boston-celtics.svg"},nets:{primary:"#000000",secondary:"#FFFFFF",alternate:"#002A60",logo:"https://i.logocdn.com/nba/current/brooklyn-nets.svg"},hornets:{primary:"#1D1160",secondary:"#00788C",alternate:"#A1A1A4",logo:"https://i.logocdn.com/nba/current/charlotte-hornets.svg"},bulls:{primary:"#CE1141",secondary:"#000000",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/chicago-bulls.svg"},cavaliers:{primary:"#6F263D",secondary:"#041E42",alternate:"#FFB81C",logo:"https://i.logocdn.com/nba/current/cleveland-cavaliers.svg"},mavericks:{primary:"#00538C",secondary:"#002B5E",alternate:"#B8C4CA",logo:"https://i.logocdn.com/nba/current/dallas-mavericks.svg"},nuggets:{primary:"#0E2240",secondary:"#FEC524",alternate:"#8B2131",logo:"https://i.logocdn.com/nba/current/denver-nuggets.svg"},pistons:{primary:"#C8102E",secondary:"#006BB6",alternate:"#BEC0C2",logo:"https://i.logocdn.com/nba/current/detroit-pistons.svg"},warriors:{primary:"#006BB6",secondary:"#FDB927",alternate:"#26282A",logo:"https://i.logocdn.com/nba/2010/golden-state-warriors.svg"},rockets:{primary:"#CE1141",secondary:"#000000",alternate:"#C4CED4",logo:"https://i.logocdn.com/nba/current/houston-rockets.svg"},pacers:{primary:"#002D62",secondary:"#FDBB30",alternate:"#BEC0C2",logo:"https://i.logocdn.com/nba/current/indiana-pacers.svg"},clippers:{primary:"#C8102E",secondary:"#1D42BA",alternate:"#BEC0C2",logo:"https://i.logocdn.com/nba/current/los-angeles-clippers.svg"},lakers:{primary:"#552583",secondary:"#FDB927",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/los-angeles-lakers.svg"},grizzlies:{primary:"#5D76A9",secondary:"#12173F",alternate:"#F5B112",logo:"https://i.logocdn.com/nba/current/memphis-grizzlies.svg"},heat:{primary:"#98002E",secondary:"#F9A01B",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/miami-heat.svg"},bucks:{primary:"#00471B",secondary:"#EEE1C6",alternate:"#0077C0",logo:"https://i.logocdn.com/nba/current/milwaukee-bucks.svg"},timberwolves:{primary:"#0C2340",secondary:"#236192",alternate:"#9EA2A2",logo:"https://i.logocdn.com/nba/current/minnesota-timberwolves.svg"},pelicans:{primary:"#0C2340",secondary:"#C8102E",alternate:"#85714D",logo:"https://i.logocdn.com/nba/current/new-orleans-pelicans.svg"},knicks:{primary:"#006BB6",secondary:"#F58426",alternate:"#BEC0C2",logo:"https://i.logocdn.com/nba/current/new-york-knicks.svg"},thunder:{primary:"#007AC1",secondary:"#EF3B24",alternate:"#002D62",logo:"https://i.logocdn.com/nba/current/oklahoma-city-thunder.svg"},magic:{primary:"#0077C0",secondary:"#C4CED4",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/orlando-magic.svg"},sixers:{primary:"#006BB6",secondary:"#ED174C",alternate:"#002B5C",logo:"https://i.logocdn.com/nba/current/philadelphia-76ers.svg"},suns:{primary:"#1D1160",secondary:"#E56020",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/phoenix-suns.svg"},blazers:{primary:"#E03A3E",secondary:"#000000",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/portland-trail-blazers.svg"},kings:{primary:"#5A2D81",secondary:"#63727A",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/sacramento-kings.svg"},spurs:{primary:"#C4CED4",secondary:"#000000",alternate:"#000000",logo:"https://i.logocdn.com/nba/current/san-antonio-spurs.svg"},raptors:{primary:"#CE1141",secondary:"#000000",alternate:"#A1A1A4",logo:"https://i.logocdn.com/nba/current/toronto-raptors.svg"},jazz:{primary:"#002B5C",secondary:"#00471B",alternate:"#F9A01B",logo:"https://i.logocdn.com/nba/current/utah-jazz.svg"},wizards:{primary:"#002B5C",secondary:"#E31837",alternate:"#C4CED4",logo:"https://i.logocdn.com/nba/current/washington-wizards.svg"},supersonics:{primary:"#00653A",secondary:"#FFC200",alternate:"#FFFFFF"},bullets:{primary:"#002A76",secondary:"#EF9B21",alternate:"#FFFFFF",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Brisbane_Bullets_logo.svg/1200px-Brisbane_Bullets_logo.svg.png"},"long-lions":{primary:"#0D193F",secondary:"#E7002B",alternate:"FFFFFF",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Guangzhou_Long-Lions_logo.png/220px-Guangzhou_Long-Lions_logo.png"},maccabi_haifa:{primary:"#125C30",secondary:"#050708",alternate:"#FFFFFF",logo:"https://upload.wikimedia.org/wikipedia/en/4/4c/Maccabi_Haifa_B.C_logo.png"},united:{primary:"#151926",secondary:"#FFFFFF",alternate:"#BBBBBB",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Melbourne_United_logo.svg/220px-Melbourne_United_logo.svg.png"},shanghai_sharks:{primary:"#B52125",secondary:"#0519A",alternate:"#FFFFFF",logo:"https://upload.wikimedia.org/wikipedia/en/3/38/Shanghai_Sharks_logo.png"},sydkings:{primary:"#5A3E9B",secondary:"#FFCA36",alternate:"#FFFFFF",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Sydney_Kings_logo.svg/220px-Sydney_Kings_logo.svg.png"},team_lebron:{primary:"#FFFFFF",secondary:"#000000",alternate:"#FFFFFF",logo:"https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg"},team_stephen:{primary:"#000000",secondary:"#FFFFFF",alternate:"#000000",logo:"https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg"},team_clippers:{primary:"#000000",secondary:"#FFFFFF",alternate:"#000000",logo:"https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg"},team_lakers:{primary:"#000000",secondary:"#FFFFFF",alternate:"#000000",logo:"https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg"},usa:{primary:"#002655",secondary:"#E60E34",alternate:"#FFFFFF",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Usa_basketball_2012.png/160px-Usa_basketball_2012.png"},world:{primary:"#000000",secondary:"#FFFFFF",alternate:"#000000",logo:"https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg"}}},32:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(8),r=t.n(n),o=t(16),c=t(4),s=t(13),l=t(3),i={teamData:null};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TEAM_DATA":return Object(c.a)({},e,{teamData:a.payload});default:return e}};var u=function(){return function(){var e=Object(o.a)(r.a.mark(function e(a){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(Object(s.b)(l.j));case 2:t=e.sent,a({type:"SET_TEAM_DATA",payload:t.league.standard});case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()}},34:function(e,a,t){"use strict";var n=t(9),r=t(12),o=t(62),c=t(17),s=t(43),l=t(63),i=t.n(l),u=t(13),d=t(20),p=t(22),m=t(32),g=t(21),h=t(53);t.d(a,"a",function(){return E}),t.d(a,"c",function(){return S}),t.d(a,"b",function(){return _});var y,b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.d,f={key:"root",storage:i.a},E=Object(r.a)({hashType:"slash"}),v=Object(s.a)(f,(y=E,Object(n.c)({router:Object(c.connectRouter)(y),http:u.a,searchbar:d.a,players:p.a,teams:m.a,scoreboard:g.b,game:h.b}))),S=Object(n.e)(v,{},b(Object(n.a)(o.a,Object(c.routerMiddleware)(E)))),_=Object(s.b)(S)},44:function(e,a,t){e.exports=t.p+"static/media/avatar.d34cd8af.png"},51:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(1),r=t.n(n),o=function(e){if(e)return e.isGameActivated||parseFloat(e.gameDuration.minutes)?e.period.isHalftime?r.a.createElement("span",null,"Halftime"):0!==e.extendedStatusNum||e.isGameActivated?e.extendedStatusNum>0&&e.isGameActivated?r.a.createElement("span",null,"Overtime ",e.clock):r.a.createElement("div",null,r.a.createElement("span",null,"Q".concat(e.period.current)),r.a.createElement("br",null),r.a.createElement("span",null,e.clock)):r.a.createElement("span",null,"Final"):r.a.createElement("div",null,r.a.createElement("span",null,"Game starts"),r.a.createElement("br",null),r.a.createElement("span",null,e.startTimeEastern))}},52:function(e,a,t){"use strict";var n=t(26),r=t(27),o=t(29),c=t(28),s=t(30),l=t(1),i=t.n(l),u=t(130),d=t(3),p=t(9),m=t(19),g=t(20),h=t(11),y=t.n(h),b=t(44),f=t.n(b),E=(t(116),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={cursor:0},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.searchValue,n=a.playerSearchValue,r=a.searchResults,o=a.playerSearchResults,c=a.setSearchValue,s=a.setSelectedSearchResult,l=a.setComparedPlayer,p=a.resetSearchbar,m=a.placeholder,g=a.playerCompare,h=a.showHome,b=this.state.cursor;return i.a.createElement("div",{className:"searchbar-wrapper"},h&&i.a.createElement(u.a,{to:d.l,className:"btn btn-primary"},"Home"),i.a.createElement("form",{autoComplete:"off",className:"input-group",style:{width:"".concat(g?"100%":"90%")}},i.a.createElement("div",{className:"searchbar-content"},i.a.createElement("label",{htmlFor:"searchBar",className:"hidden"}),i.a.createElement("input",{name:"searchBar",type:"text",placeholder:m||"Search for team or player",className:"form-control",value:g?n:t,onChange:function(e){return a=e.target.value,void(g?c(a,"player"):c(a));var a},onKeyDown:function(a){return function(a){var t=document.querySelector(".autocomplete-items");38===a.keyCode&&b>0?(e.setState(function(e){return{cursor:e.cursor-1}}),t.scrollTop-=66):40===a.keyCode&&b<r.length-1?(e.setState(function(e){return{cursor:e.cursor+1}}),t.scrollTop+=66):13===a.keyCode?a.preventDefault():e.setState(function(){return{cursor:0}})}(a)},onBlur:function(){return p()},"aria-label":"search bar"}),i.a.createElement("div",{className:"autocomplete-items"},function(e){return t&&!e.length?i.a.createElement("div",{className:"suggestion-card"},"No results found"):e?e.map(function(e,a){var t={};if(e.personId){var n={teamId:e.teamId,personId:e.personId};t.media=d.d.replace(/teamId|personId/gi,function(e){return n[e]}),t.name="".concat(e.firstName," ").concat(e.lastName)}else t.media=d.i[e.urlName].logo,t.name=e.fullName;var r=y()({"suggestion-card":!0,"autocomplete-active":b===a});return i.a.createElement("div",{key:a,id:a,data:JSON.stringify(e),className:r,onMouseDown:function(){return function(e){g?l(e):s(e)}(e)}},i.a.createElement("img",{src:t.media,alt:"search suggestion media",onError:function(e){e.target.src=f.a}}),i.a.createElement("span",null,t.name))}):void 0}(g?o:r)))))}}]),a}(l.Component));a.a=Object(p.d)(Object(m.connect)(function(e){return{searchValue:e.searchbar.searchValue,playerSearchValue:e.searchbar.playerSearchValue,searchResults:e.searchbar.searchResults,playerSearchResults:e.searchbar.playerSearchResults,selectedSearchResut:e.searchbar.selectedSearchResult}},function(e){return Object(p.b)({setSearchValue:g.d,setSelectedSearchResult:g.e,setComparedPlayer:g.c,resetSearchbar:g.b},e)}))(E)},53:function(e,a,t){"use strict";t.d(a,"c",function(){return u}),t.d(a,"a",function(){return d});var n=t(8),r=t.n(n),o=t(16),c=t(4),s=t(13),l=t(3),i={gameData:null,statView:"matchUp",previousMatchup:null};a.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_GAME_DATA":return Object(c.a)({},e,{gameData:a.payload});case"SET_STATS_TO_VIEW":return Object(c.a)({},e,{statView:a.payload});case"SET_PREVIOUS_MATCHUP":return Object(c.a)({},e,{previousMatchup:a.payload});default:return e}};var u=function(e){return function(){var a=Object(o.a)(r.a.mark(function a(t,n){var o,c,i,u,d;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o={timeStamp:n().scoreboard.calendarDate.urlDate,gameId:e},c=l.a.replace(/timeStamp|gameId/gi,function(e){return o[e]}),a.next=4,t(Object(s.b)(c));case 4:if(!(i=a.sent).previousMatchup){a.next=12;break}return o={timeStamp:i.previousMatchup.gameDate,gameId:i.previousMatchup.gameId},u=l.a.replace(/timeStamp|gameId/gi,function(e){return o[e]}),a.next=10,t(Object(s.b)(u));case 10:d=a.sent,t({type:"SET_PREVIOUS_MATCHUP",payload:d});case 12:t({type:"SET_GAME_DATA",payload:i});case 13:case"end":return a.stop()}},a,this)}));return function(e,t){return a.apply(this,arguments)}}()},d=function(e){return{type:"SET_STATS_TO_VIEW",payload:e}}},66:function(e,a,t){e.exports=t(122)},83:function(e,a,t){}},[[66,5,3]]]);
//# sourceMappingURL=main.0efcc63e.chunk.js.map