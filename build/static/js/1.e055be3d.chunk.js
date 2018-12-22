(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{123:function(e,a,t){"use strict";var r=t(34),n=t(3);a.a=function(e){var a=r.c.getState(),t=a.teams.teamData,l=a.players.playerData.find(function(a){return a.personId===e});if(!l)return{firstName:"Unknown",lastName:"Unknown",photo:null,info:{},team:{}};var c={};c.team=t.find(function(e){return l.teamId===e.teamId}),c.team.logo=n.i[c.team.urlName].logo;var o={teamId:l.teamId,personId:l.personId};return c.photo=n.d.replace(/teamId|personId/gi,function(e){return o[e]}),c.firstName=l.firstName,c.lastName=l.lastName,c.info=l,c}},124:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var r=t(26),n=t(27),l=t(29),c=t(28),o=t(30),s=t(1),m=t.n(s),i=t(9),p=t(19),u=t(22),d=t(32),y=(t(124),t(11)),f=t.n(y),h=t(123),E=t(44),v=t.n(E),b=function(e){var a=e.player;return m.a.createElement("div",null,m.a.createElement("div",{className:"player-background",style:{background:"url(".concat(a.team.logo,") no-repeat center"),backgroundSize:"contain"}}),m.a.createElement("div",{className:"player-content"},m.a.createElement("img",{src:a.photo||v.a,alt:"player headshot",onError:function(e){e.target.src=v.a}})))},N=t(126),S=t.n(N),g=function(e){var a=e.info,t=e.player;return m.a.createElement("div",null,m.a.createElement("h1",null,"#".concat(a.jersey," | ").concat(t.firstName," ").concat(t.lastName)),m.a.createElement("p",{className:"player-info"},"Pos. ".concat(a.pos," / ").concat(a.heightFeet,"'").concat(a.heightInches,'" / ').concat(a.weightPounds,"lb / Age: ").concat(S()().diff(a.dateOfBirthUTC,"years")," / Country: ").concat(a.country)))},C=function(e){var a=e.latestStats,t=e.careerStats,r=function(e){return m.a.createElement("div",{className:"stat-wrapper"},m.a.createElement("h6",null,e.seasonYear?"".concat(e.seasonYear,"-").concat(e.seasonYear+1," Season"):"Career Stats"),m.a.createElement("div",{className:"row stat-row"},m.a.createElement("div",null,m.a.createElement("p",null,"PPG"),m.a.createElement("p",null,e.ppg)),m.a.createElement("div",null,m.a.createElement("p",null,"RPG"),m.a.createElement("p",null,e.rpg)),m.a.createElement("div",null,m.a.createElement("p",null,"APG"),m.a.createElement("p",null,e.apg)),m.a.createElement("div",null,m.a.createElement("p",null,"BPG"),m.a.createElement("p",null,e.bpg)),m.a.createElement("div",null,m.a.createElement("p",null,"SPG"),m.a.createElement("p",null,e.spg)),m.a.createElement("div",null,m.a.createElement("p",null,"FG%"),m.a.createElement("p",null,e.fgp,"%"))))};return m.a.createElement("div",null,r(a),m.a.createElement("hr",null),r(t))},w=t(3),P=t(52),j=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(c.a)(a).call(this,e))).state={playerSearchisHidden:!0},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"componentDidUpdate",value:function(){this.state.playerSearchisHidden&&this.props.resetPlayerComparison()}},{key:"render",value:function(){var e=this,a=this.props.player;return m.a.createElement("div",null,m.a.createElement("button",{className:"player-comparison-button",style:{backgroundColor:"".concat(w.i[a.team.urlName].primary),color:"#ffffff"},onClick:function(){return e.setState(function(e){return{playerSearchisHidden:!e.playerSearchisHidden}})}},"Compare Player"),m.a.createElement("div",{className:"player-compare-search-wrapper",style:{display:"".concat(this.state.playerSearchisHidden?"none":"block")}},m.a.createElement(P.a,{placeholder:"Search for a player to compare",playerCompare:!0})))}}]),a}(s.Component),O=function(e){var a=e.selectedSearchResut,t=e.playerToCompare,r=e.resetPlayerComparison,n=function(e,a){var n=Object(h.a)(e.personId);n.stats=e.playerStats;var l=n.info,c=n.stats;return m.a.createElement("div",{className:"player-headshot col-sm-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:f()("player-headshot-wrapper col-sm-12",t?"col-md-12":"col-md-6"),style:{height:"".concat(t?"250px":"500px")}},m.a.createElement(b,{player:n})),m.a.createElement("div",{className:f()("player-stat-wrapper col-sm-12",t?"col-md-12":"col-md-6")},m.a.createElement(g,{info:l,player:n}),m.a.createElement("div",{className:"player-stat-box"},m.a.createElement(C,{latestStats:c.latest,careerStats:c.careerSummary})),!a&&m.a.createElement(j,{player:n,resetPlayerComparison:r}))))};return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:f()("col-sm-12",t?"col-md-6":"")},n(a)),m.a.createElement("div",{className:"col-sm-12 col-md-6"},t&&n(t,!0)))},k=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.fetchTeamsData;(0,e.fetchPlayersData)(),a()}},{key:"render",value:function(){var e=this.props,a=e.teams,t=e.playerToCompare,r=e.selectedSearchResut,n=e.resetPlayerComparison;return m.a.createElement("div",{className:"container-fluid"},m.a.createElement(O,{selectedSearchResut:r,teams:a,playerToCompare:t,resetPlayerComparison:n}))}}]),a}(s.Component);a.default=Object(i.d)(Object(p.connect)(function(e){return{players:e.players.playerData,playerToCompare:e.players.playerToCompare,teams:e.teams.teamData,selectedSearchResut:e.searchbar.selectedSearchResult}},function(e){return Object(i.b)({fetchPlayersData:u.b,fetchTeamsData:d.b,resetPlayerComparison:u.d},e)}))(k)}}]);
//# sourceMappingURL=1.e055be3d.chunk.js.map