(this["webpackJsonpsewasew.election"]=this["webpackJsonpsewasew.election"]||[]).push([[0],{1379:function(e,t,a){},1380:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),i=a.n(o),c=a(191),l=a(118),s={en:{translation:a(256)},am:{translation:a(257)}};c.a.use(l.e).init({resources:s,lng:localStorage.getItem("lang")||"en",keySeparator:!1,interpolation:{escapeValue:!1}});c.a;var u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=a(15),h=a(99),f=a(1417),b=a(281),g=a(68),p=a(186),y=a(254),E=a(1378),v=a(1409),w=a(5),O=a(146),x=(a(1381),Object({NODE_ENV:"production",PUBLIC_URL:"https://sewasew.github.io/election",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),k=x.REACT_APP_FIREBASE_API_KEY,j=x.REACT_APP_FIREBASE_AUTH_DOMAIN,S=x.REACT_APP_FIREBASE_DATABASE_URL,C=x.REACT_APP_FIREBASE_PROJECT_ID,T=x.REACT_APP_FIREBASE_STORAGE_BUCKET,D=x.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,I=x.REACT_APP_FIREBASE_APP_ID,z=x.REACT_APP_FIREBASE_MEASUREMENT_ID;O.initializeApp(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},k&&{apiKey:k}),j&&{authDomain:j}),S&&{databaseURL:S}),C&&{projectId:C}),T&&{storageBucket:T}),D&&{messagingSenderId:D}),I&&{appId:I}),z&&{measurementId:z})),O.analytics();var A=O,_=Object(n.createContext)();function R(e){var t=Object(n.useState)("true"===localStorage.getItem("useDarkTheme")||!1),a=Object(w.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){null===localStorage.getItem("useDarkTheme")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&i(!0)}),[]),Object(n.useEffect)((function(){localStorage.setItem("useDarkTheme",o),A.analytics().setUserProperties({appTheme:o?"dark":"light"}),document.getElementById("manifest").setAttribute("href","/manifest.".concat(o?"dark":"light",".json"))}),[o]),r.a.createElement(_.Provider,Object.assign({value:{useDarkTheme:o,setUseDarkTheme:i}},e))}function L(){return Object(n.useContext)(_)}var P=a(55),N=a.n(P),B=a(136),M=Object(n.createContext)();function K(e){var t=Object(n.useState)(window.navigator.onLine||!1),a=Object(w.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){i(window.navigator.onLine),window.ononline=function(){return i(!0)},window.onoffline=function(){return i(!1)}}),[]),r.a.createElement(M.Provider,Object.assign({value:{isOnline:o}},e))}var F=Object(n.createContext)();function $(e){var t=Object(n.useState)(!0),a=Object(w.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(null),l=Object(w.a)(c,2),s=l[0],u=l[1],d=Object(n.useState)(null),h=Object(w.a)(d,2),f=h[0],b=h[1],g=Object(n.useContext)(M).isOnline;return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data"));if(!g&&e)return u(e),i(!1),!1;function t(){return(t=Object(B.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data_for_map.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,u(a),i(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){s&&localStorage.setItem("data",JSON.stringify(s))}),[s]),r.a.createElement(F.Provider,Object.assign({value:Object(m.a)(Object(m.a)({isLoading:o},s),{},{clickedStation:f,setClickedStation:b})},e))}function H(){return Object(n.useContext)(F)}var W=a(1413),U=a(27),Q=a(1399),q=a(38),G=a(43),J=a(31),V=a(24),Y=a(261),Z=a(197),X=a(200),ee=a(198),te=a(199),ae=a(9),ne=a(13),re=a(262),oe=a.n(re),ie=a(1416),ce=a(22),le=a(72),se=a(267),ue=a.n(se),de=a(1414),me=a(20),he=a(95),fe=a(100),be=a.n(fe);function ge(e){return e?e.reduce((function(e,t){return t.count+e}),0):0}var pe=a(1400);function ye(){var e=Object(ne.b)(),t=Object(w.a)(e,2)[1];return r.a.createElement(he.a,{speed:.6,width:80,height:44,display:"block",viewBox:"0 0 80 44",backgroundColor:t.colors.backgroundTertiary,foregroundColor:t.colors.backgroundSecondary},r.a.createElement("rect",{x:"0",y:"5",rx:"2",ry:"2",width:"70",height:"36"}))}function Ee(e){var t=e.data,a=e.isLoading,n=e.label,o=e.color,i=e.size,c=void 0===i?"standard":i,l=Object(f.a)().t,s=t&&ge(t)||0,u=t&&ge(t.filter((function(e){return e.date===be()().format("YYYY-MM-DD")})))||0;return r.a.createElement("div",null,a&&r.a.createElement(ye,null),!a&&r.a.createElement(U.a,{display:"flex"},"standard"===c?r.a.createElement(ce.a,{color:o},s.toLocaleString()):r.a.createElement(ce.b,{color:o},s.toLocaleString()),0!==u&&r.a.createElement(de.a,{content:function(){return r.a.createElement(ce.g,{color:"backgroundPrimary"},l("todaysChange"))},overrides:{Body:{style:{backgroundColor:"transparent"}},Inner:{style:function(e){var t=e.$theme;return{borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500}}}},placement:me.f.top,returnFocus:!0,autoFocus:!0,showArrow:!0},r.a.createElement("span",{style:{display:"flex",fontWeight:400,fontSize:"standard"===c?"24px":"16px",color:"#7b7b7b",lineHeight:"standard"===c?"32px":"24px"}},u<0?r.a.createElement(pe.a,{size:"standard"===c?32:24}):r.a.createElement(ue.a,{size:"standard"===c?32:24}),Math.abs(u)))),"standard"===c?r.a.createElement(ce.f,{marginTop:0},n):r.a.createElement(ce.g,{marginTop:0},n))}function ve(){var e=Object(f.a)().t,t=H(),a=t.cases,o=t.deaths,i=(t.cures,t.hospitalizations),c=t.quarantines,l=t.supervisions,s=t.tests,u=t.isLoading,d=Object(n.useState)(!1),m=Object(w.a)(d,2),h=m[0],b=(m[1],Object(ne.b)()),g=Object(w.a)(b,2)[1];return r.a.createElement(Ie,{title:e("electionEthiopia"),style:function(e){var t;return t={},Object(V.a)(t,e.mediaQuery.medium,{maxHeight:"calc(100vh - 80px)",overflow:"auto"}),Object(V.a)(t,e.mediaQuery.large,{width:"380px"}),t}},r.a.createElement(le.b,null,r.a.createElement(Ee,{data:o,isLoading:u,label:e("votes"),color:g.colors.positive,size:"compact"}),r.a.createElement(Ee,{data:a,isLoading:u,label:e("registered"),color:g.colors.primary,size:"compact"}),r.a.createElement(U.a,{$style:{marginBottom:"12px",textAlign:"center"}}),h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,{data:i,isLoading:u,label:e("hospitalized"),color:g.colors.accent,size:"compact"}),r.a.createElement(Ee,{data:c,isLoading:u,label:e("quarantined"),color:g.colors.accent,size:"compact"}),r.a.createElement(Ee,{data:l,isLoading:u,label:e("underSurveillance"),color:g.colors.accent,size:"compact"}),r.a.createElement(Ee,{data:s,isLoading:u,label:e("tests"),color:g.colors.accent,size:"compact"}))))}var we=a(70),Oe=a.n(we);function xe(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function ke(){var e=Object(n.useState)(xe()),t=Object(w.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(xe())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var je=Object(ne.a)("div",(function(e){var t=e.$theme;return Object(V.a)({backgroundColor:t.colors.backgroundPrimary,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"auto",width:"100vw"},t.mediaQuery.medium,{height:"100vh"})}));function Se(e,t,a){return Object(ae.divIcon)({iconSize:[e,e],html:Object(Y.renderToStaticMarkup)(r.a.createElement(ze,{size:e,registrationsCount:t,votesCount:a}))})}function Ce(e,t){return t/e*90+90}function Te(e){var t=Object(f.a)().t,a=Object(n.useState)(null),o=Object(w.a)(a,2),i=o[0],c=o[1],l=ke().width,s=Object(ne.b)(),u=Object(w.a)(s,2)[1],d=H(),h=d.stations,b=d.registrations,g=d.votes,p=d.candidates,y=d.isLoading,E=d.clickedStation;if(y)return r.a.createElement(je,null,r.a.createElement(ie.a,null),r.a.createElement(ce.f,null,t("loadingData")));var v=Oe()(b,"stationId"),O=Oe()(g,"stationId"),x=Oe()(p,"stationId"),k=[];if(!k.length){var j,S=Object(J.a)(h);try{for(S.s();!(j=S.n()).done;){var C=j.value;k.push({station:C,registrations:{total:ge(v[C.sn]),data:v[C.sn]||[]},votes:{total:ge(O[C.sn]),data:O[C.sn]||[]},candidates:{total:ge(x[C.sn]),data:x[C.sn]||[]}})}}catch(I){S.e(I)}finally{S.f()}}var T=Math.max.apply(Math,Object(G.a)(k.map((function(e){return e.registrations.total})))),D=E?function(e,t){return t.filter((function(t){return t.stations.name===e})).pop().stations.location}(E,k):[9.005401,38.763611];return r.a.createElement(Z.a,Object.assign({center:D,zoom:E?10:l<u.breakpoints.medium?4:5,zoomControl:!1,maxZoom:15,minZoom:l<u.breakpoints.medium?6:7,maxBounds:[[3,30],[15,50]]},e),r.a.createElement(X.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(oe.a,{showCoverageOnHover:!1,iconCreateFunction:function(e){var t=e.getAllChildMarkers().reduce((function(e,t){return{registrations:t.options.registrationsCount+e.registrations,votes:t.options.votesCount+e.votes}}),{registrations:0,votes:0});return Se(Ce(T,t.registrations),t.registrations,t.votes)}},k&&k.map((function(e){var t=e.station,a=e.registrations,n=e.votes,o=e.candidates;return r.a.createElement(ee.a,{key:t.id,position:t.location,icon:Se(Ce(T,a.total),a.total,n.total),onClick:function(){c(Object(m.a)(Object(m.a)({},t),{},{registrations:a,votes:n,candidates:o}))},registrationsCount:a.total,votesCount:n.total})}))),i&&r.a.createElement(te.a,{position:i.location,onClose:function(){return c(null)}},r.a.createElement(Ie,{style:function(e){return Object(V.a)({},e.mediaQuery.large,{width:"380px"})}},r.a.createElement(le.b,null,r.a.createElement(ce.d,null,i.np_election_zone),r.a.createElement(U.a,{marginTop:"10px"},r.a.createElement(Ee,{data:i.votes.data,label:t("votes"),color:u.colors.positive,size:"compact"}),r.a.createElement(Ee,{data:i.registrations.data,label:t("registered"),color:u.colors.primary,size:"compact"}))))))}var De=a(1401);function Ie(e){var t=e.children,a=e.style,n=Object(h.a)(e,["children","style"]);return r.a.createElement(De.a,Object.assign({overrides:{Root:{style:function(e){var t=e.$theme,n=a?a(t):{};return Object(m.a)({width:"100%",boxSizing:"border-box",borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500},n)}}}},n),t)}function ze(e){var t=e.size,a=e.registrationsCount,n=(e.votesCount,Object(ne.b)()),o=Object(w.a)(n,2)[1];return r.a.createElement("svg",{className:"marker",xmlns:"http://www.w3.org/2000/svg",width:t||"32",height:t||"32",viewBox:"0 0 32 32"},r.a.createElement("circle",{cx:"50%",cy:"50%",r:"7.5px",fill:o.colors.negative,opacity:.8}),r.a.createElement("circle",{cx:"50%",cy:"50%",r:"10px",fill:o.colors.negative,opacity:.2}),a&&r.a.createElement("text",{className:"text",x:"50%",y:"50%",fontSize:"40%",fill:"white",textAnchor:"middle",dy:".3em"},a))}var Ae=a(25);function _e(){var e=Object(ne.b)(),t=Object(w.a)(e,2)[1];return r.a.createElement(he.a,{speed:.6,width:260,height:200,display:"block",viewBox:"0 0 280 200",backgroundColor:t.colors.backgroundTertiary,foregroundColor:t.colors.backgroundSecondary},r.a.createElement("rect",{x:"20",y:"6",rx:"2",ry:"2",width:"80",height:"22"}),r.a.createElement("rect",{x:"110",y:"6",rx:"2",ry:"2",width:"200",height:"22"}),r.a.createElement("rect",{x:"40",y:"40",rx:"2",ry:"2",width:"60",height:"22"}),r.a.createElement("rect",{x:"110",y:"40",rx:"2",ry:"2",width:"170",height:"22"}),r.a.createElement("rect",{x:"30",y:"74",rx:"2",ry:"2",width:"70",height:"22"}),r.a.createElement("rect",{x:"110",y:"74",rx:"2",ry:"2",width:"140",height:"22"}),r.a.createElement("rect",{x:"20",y:"108",rx:"2",ry:"2",width:"80",height:"22"}),r.a.createElement("rect",{x:"110",y:"108",rx:"2",ry:"2",width:"100",height:"22"}),r.a.createElement("rect",{x:"50",y:"142",rx:"2",ry:"2",width:"50",height:"22"}),r.a.createElement("rect",{x:"110",y:"142",rx:"2",ry:"2",width:"100",height:"22"}),r.a.createElement("rect",{x:"40",y:"176",rx:"2",ry:"2",width:"60",height:"22"}),r.a.createElement("rect",{x:"110",y:"176",rx:"2",ry:"2",width:"60",height:"22"}))}function Re(){var e=Object(f.a)().t,t=H(),a=t.cases,o=t.deaths,i=t.cures,c=t.isLoading,l=Object(n.useState)(null),s=Object(w.a)(l,2),u=s[0],d=s[1],h=Object(ne.b)(),b=Object(w.a)(h,2),g=b[0],p=b[1],y=H().setClickedParty;return Object(n.useEffect)((function(){var e,t=a?a.filter((function(e){return e.party})).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{key:"cases"})})):[],n=o?o.filter((function(e){return e.party})).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{key:"deaths"})})):[],r=i?i.filter((function(e){return e.party})).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{key:"cures"})})):[];d((e=[].concat(Object(G.a)(t),Object(G.a)(n),Object(G.a)(r)),Object.entries(Oe()(e,"party")).map((function(e){var t,a=Object(w.a)(e,2),n=a[0],r=a[1],o=ge(r.filter((function(e){return"cases"===e.key}))),i=ge(r.filter((function(e){return"deaths"===e.key}))),c=ge(r.filter((function(e){return"cures"===e.key})));return t={party:n},Object(V.a)(t,"cases",o),Object(V.a)(t,"deaths",i),Object(V.a)(t,"cures",c),t})).sort((function(e,t){return t[["cases"]]-e[["cases"]]}))))}),[a,o,i]),r.a.createElement(Ie,{style:function(e){var t;return t={},Object(V.a)(t,e.mediaQuery.medium,{maxHeight:"calc(100vh - 200px)",overflow:"auto"}),Object(V.a)(t,e.mediaQuery.large,{width:"380px"}),t}},r.a.createElement(le.b,null,r.a.createElement(U.a,{$style:{margin:"12px 0 20px",overflow:"hidden"}},c&&r.a.createElement(_e,null),u&&r.a.createElement(Ae.e,{height:26*u.length,width:"99%"},r.a.createElement(Ae.b,{data:u,layout:"vertical",className:g({fontSize:"12px"})},r.a.createElement(Ae.h,{dataKey:"party",type:"category",tick:{fill:p.colors.contentPrimary,cursor:"pointer"},width:130,onClick:function(e){var t=e.value;return y(t)}}),r.a.createElement(Ae.g,{type:"number",hide:!0}),r.a.createElement(Ae.f,{contentStyle:{backgroundColor:p.colors.backgroundPrimary,borderColor:p.colors.backgroundTertiary},cursor:{fill:p.colors.backgroundTertiary}}),r.a.createElement(Ae.a,{name:e("registeredShort"),stackId:"a",dataKey:"cases",fill:p.colors.negative}),r.a.createElement(Ae.a,{name:e("deaths"),stackId:"a",dataKey:"deaths",fill:p.colors.primary}),r.a.createElement(Ae.a,{name:e("cured"),stackId:"a",dataKey:"cures",fill:p.colors.positive}))))))}var Le=a(1405),Pe=a(1402);function Ne(e){var t=e.isCompact,a=Object(h.a)(e,["isCompact"]);return r.a.createElement(Pe.a,Object.assign({overrides:{Tab:{style:Object(m.a)({flexGrow:1,textAlign:"center"},t&&{padding:"4px 0"})}}},a))}a(1403),a(1412),a(17),a(1404),a(1420);var Be=a(1418),Me=a(39);function Ke(){var e=Object(ne.b)(),t=Object(w.a)(e,2)[1];return r.a.createElement(he.a,{speed:.6,width:250,height:180,display:"block",viewBox:"0 0 300 200",backgroundColor:t.colors.backgroundTertiary,foregroundColor:t.colors.backgroundSecondary},r.a.createElement("rect",{x:"20",y:"6",rx:"2",ry:"2",width:"80",height:"22"}),r.a.createElement("rect",{x:"110",y:"6",rx:"2",ry:"2",width:"200",height:"22"}),r.a.createElement("rect",{x:"40",y:"40",rx:"2",ry:"2",width:"60",height:"22"}),r.a.createElement("rect",{x:"110",y:"40",rx:"2",ry:"2",width:"170",height:"22"}),r.a.createElement("rect",{x:"30",y:"74",rx:"2",ry:"2",width:"70",height:"22"}),r.a.createElement("rect",{x:"110",y:"74",rx:"2",ry:"2",width:"140",height:"22"}),r.a.createElement("rect",{x:"20",y:"108",rx:"2",ry:"2",width:"80",height:"22"}),r.a.createElement("rect",{x:"110",y:"108",rx:"2",ry:"2",width:"100",height:"22"}),r.a.createElement("rect",{x:"50",y:"142",rx:"2",ry:"2",width:"50",height:"22"}),r.a.createElement("rect",{x:"110",y:"142",rx:"2",ry:"2",width:"100",height:"22"}),r.a.createElement("rect",{x:"40",y:"176",rx:"2",ry:"2",width:"60",height:"22"}),r.a.createElement("rect",{x:"110",y:"176",rx:"2",ry:"2",width:"60",height:"22"}))}function Fe(){var e=H(),t=e.cases,a=e.deaths,o=e.cures,i=e.isLoading,c=Object(f.a)().t,l=Object(n.useState)(null),s=Object(w.a)(l,2),u=s[0],d=s[1],h=Object(n.useState)("0"),b=Object(w.a)(h,2),g=b[0],p=b[1],y=Object(ne.b)(),E=Object(w.a)(y,2),v=E[0],O=E[1],x=Object(n.useState)([{translationKey:"registeredShort",group:["cases","dailyCases"],selected:!0},{translationKey:"deaths",group:["deaths","dailyDeaths"],selected:!0},{translationKey:"cured",group:["dailyCures","cures"],selected:!0}]),k=Object(w.a)(x,2),j=k[0],S=k[1],C=[{name:c("registeredShort"),key:"cases",color:O.colors.negative},{name:c("deaths"),key:"deaths",color:O.colors.primary},{name:c("cured"),key:"cures",color:O.colors.positive}],T=[{name:c("registeredShort"),key:"dailyCases",color:O.colors.negative},{name:c("deaths"),key:"dailyDeaths",color:O.colors.primary},{name:c("cured"),key:"dailyCures",color:O.colors.positive}];function D(e){return j.find((function(t){var a=t.group,n=t.selected;return a.includes(e.key)&&n}))}return Object(n.useEffect)((function(){var e=t?t.filter((function(e){return e.date})).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{key:"cases"})})):[],n=a?a.filter((function(e){return e.date})).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{key:"deaths"})})):[],r=o?o.filter((function(e){return e.date})).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{key:"cures"})})):[];d(function(e){var t=0,a=0,n=0;return Object.entries(Oe()(e,"date")).sort((function(e,t){var a=Object(w.a)(e,1)[0],n=Object(w.a)(t,1)[0];return be()(a).diff(n)})).map((function(e){var r,o=Object(w.a)(e,2),i=o[0],c=o[1],l=ge(c.filter((function(e){return"cases"===e.key}))),s=ge(c.filter((function(e){return"deaths"===e.key}))),u=ge(c.filter((function(e){return"cures"===e.key})));return t+=l,a+=s,n+=u,r={date:be()(i).format("DD.MM")},Object(V.a)(r,"cases",t),Object(V.a)(r,"dailyCases",l),Object(V.a)(r,"deaths",a),Object(V.a)(r,"dailyDeaths",s),Object(V.a)(r,"cures",n),Object(V.a)(r,"dailyCures",u),r})).filter((function(e){return e.date!==be()().format("DD.MM")}))}([].concat(Object(G.a)(e),Object(G.a)(n),Object(G.a)(r))))}),[t,a,o]),r.a.createElement(Ie,{style:function(e){return Object(V.a)({},e.mediaQuery.medium,{maxHeight:"calc(100vh - 80px)"})}},i?r.a.createElement(Ke,null):r.a.createElement(Le.a,{onChange:function(e){var t=e.activeKey;p(t)},activeKey:g,overrides:{TabContent:{style:{padding:"10px 0 0 0"}}}},r.a.createElement(Ne,{title:c("casesOverall")},r.a.createElement(le.b,null,r.a.createElement(Ae.e,{height:180},r.a.createElement(Ae.d,{data:u},r.a.createElement(Ae.g,{dataKey:"date"}),r.a.createElement(Ae.h,{hide:!0}),r.a.createElement(Ae.f,{contentStyle:{backgroundColor:O.colors.backgroundPrimary,borderColor:O.colors.backgroundTertiary},cursor:{fill:O.colors.backgroundTertiary}}),C.filter(D).map((function(e){return r.a.createElement(Ae.c,{name:e.name,type:"monotone",dataKey:e.key,strokeWidth:2,stroke:e.color,dot:!1})})))))),r.a.createElement(Ne,{title:c("casesDaily")},r.a.createElement(le.b,null,r.a.createElement(Ae.e,{height:180},r.a.createElement(Ae.b,{data:u},r.a.createElement(Ae.g,{dataKey:"date"}),r.a.createElement(Ae.h,{hide:!0}),r.a.createElement(Ae.f,{contentStyle:{backgroundColor:O.colors.backgroundPrimary,borderColor:O.colors.backgroundTertiary},cursor:{fill:O.colors.backgroundTertiary}}),T.filter(D).map((function(e){return r.a.createElement(Ae.a,{name:e.name,stackId:"stackPerDate",dataKey:e.key,fill:e.color})}))))))),r.a.createElement("div",{className:v({display:"flex",justifyContent:"space-evenly"})},j.map((function(e,t){return r.a.createElement(Be.a,{checked:e.selected,onChange:function(){return function(e,t){j[t].selected=!e.selected,S(Object(G.a)(j))}(e,t)},labelPlacement:Me.a.right},c(e.translationKey))}))))}var $e=a(1415),He=a(1422),We=a(50),Ue=a(105),Qe=a(1406),qe=a(1411),Ge=a(1410),Je=a(1407),Ve=function(e){localStorage.setItem("lang",e)},Ye=function(e){var t=e.i18n;"am"===t.language?(t.changeLanguage("en"),Ve("en")):(t.changeLanguage("am"),Ve("am"))},Ze=a(1421),Xe=a(1408),et=a(117),tt=function(e){var t=e.children,a=Object(ne.b)(),n=Object(w.a)(a,1)[0];return r.a.createElement("div",{className:n({display:"flex",width:"100%",padding:"10px",justifyContent:"center"})},t)};function at(){var e=H(),t=e.cases,a=e.cures,o=e.deaths,i=e.hospitalizations,c=e.quarantines,l=e.supervisions,s=e.tests,u=e.isLoading,d=Object(f.a)(),m=d.t,h=d.i18n,b=Object(n.useState)(!1),g=Object(w.a)(b,2),p=g[0],y=g[1],E=L(),v=E.useDarkTheme,O=E.setUseDarkTheme,x=Object(n.useState)("0"),k=Object(w.a)(x,2),j=k[0],S=k[1],C=Object(ne.b)(),T=Object(w.a)(C,2),D=T[0],I=T[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D({display:"flex",flexDirection:"column",height:"100%",width:"100vw"})},r.a.createElement("div",{className:D({backgroundColor:I.colors.backgroundPrimary,padding:"".concat(I.sizing.scale600," 0 0 0")})},r.a.createElement("div",{className:D({display:"flex",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center",padding:"0 ".concat(I.sizing.scale600)})},r.a.createElement(ce.c,{margin:0},m("electionEthiopia")),r.a.createElement(Qe.a,{focusLock:!0,placement:"auto",content:function(e){var t=e.close;return r.a.createElement(qe.a,{items:[{label:m("information"),onClick:function(){return y(!0)}},{label:m("source"),onClick:function(){window.open("http://bit.ly/covid19-poland")}},{label:m(v?"turnOff":"turnOn")+" "+m("darkMode"),onClick:function(){return O(!v)}},{label:m("switchLang"),renderLabel:function(){return r.a.createElement("div",{className:D({display:"flex",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"center"})},r.a.createElement(Ge.a,{iso:"am"===h.language?"gb":"et",$size:"mini",className:D({marginRight:"8px",marginTop:"-2px"})}),m("switchLang"))},onClick:function(){return Ye({i18n:h})}}],onItemSelect:function(e){e.item.onClick(),t()},overrides:{Option:{props:{getItemLabel:function(e){return e.renderLabel?e.renderLabel():e.label},size:"default"}}}})}},r.a.createElement($e.a,{kind:"tertiary",size:"mini"},r.a.createElement(Je.a,{size:30})))),r.a.createElement("div",{className:D({display:"flex",justifyContent:"flex-start",overflow:"auto",flex:1,padding:"0 ".concat(I.sizing.scale600)})},r.a.createElement(tt,null,r.a.createElement(Ee,{data:o,isLoading:u,label:m("deaths"),color:I.colors.primary,size:"compact"})),r.a.createElement(tt,null,r.a.createElement(Ee,{data:t,isLoading:u,label:m("registeredShort"),color:I.colors.negative,size:"compact"})),r.a.createElement(tt,null,r.a.createElement(Ee,{data:a,isLoading:u,label:m("cured"),color:I.colors.positive,size:"compact"})))),r.a.createElement(Le.a,{onChange:function(e){var t=e.activeKey;S(t)},activeKey:j,overrides:{Root:{style:{flexGrow:1,display:"flex",flexDirection:"column-reverse",overflow:"hidden"}},TabBar:{style:{display:"flex",flexShrink:0}},TabContent:{style:function(e){var t=e.$active;return{backgroundColor:I.colors.backgroundPrimary,padding:0,flexGrow:1,display:t?"flex":"none",width:"100vw",overflowY:"auto"}}}}},r.a.createElement(Ne,{isCompact:!0,title:r.a.createElement(U.a,null,r.a.createElement(et.Map,null),r.a.createElement("br",null),m("map"))},r.a.createElement(Te,{className:v?"dark-theme":"",style:{height:"auto"}}),r.a.createElement("div",{className:D({position:"absolute",left:"10px",bottom:"62px",pointerEvents:"none"})},r.a.createElement("img",{className:D({height:"26px",background:"white",padding:"0 10px 0 10px"}),src:"".concat("https://sewasew.github.io/election","/images/sewasew.png"),alt:"Powered by Sewasew"}))),r.a.createElement(Ne,{isCompact:!0,title:r.a.createElement(U.a,null,r.a.createElement(et.ChartPie,null),r.a.createElement("br",null),m("statistics"))},r.a.createElement("div",{className:D({padding:I.sizing.scale600,height:"auto"})},r.a.createElement(Ze.a,{flexGridColumnCount:2,className:D({margin:"0 -".concat(I.sizing.scale600),padding:"0 ".concat(I.sizing.scale600),overflowX:"auto",flex:1})},r.a.createElement(Xe.a,null,r.a.createElement(Ee,{data:i,isLoading:u,label:m("hospitalized"),color:I.colors.accent,size:"compact"})),r.a.createElement(Xe.a,null,r.a.createElement(Ee,{data:c,isLoading:u,label:m("quarantined"),color:I.colors.accent,size:"compact"})),r.a.createElement(Xe.a,null,r.a.createElement(Ee,{data:l,isLoading:u,label:m("underSurveillance"),color:I.colors.accent,size:"compact"})),r.a.createElement(Xe.a,null,r.a.createElement(Ee,{data:s,isLoading:u,label:m("tests"),color:I.colors.accent,size:"compact"}))),r.a.createElement(Fe,null),r.a.createElement("br",null),r.a.createElement(Re,null),r.a.createElement("br",null))))),r.a.createElement(Q.a,null,r.a.createElement(U.a,{position:"fixed",bottom:"16px",left:"0px",display:"flex"},r.a.createElement(He.a,{onClose:function(){return y(!1)},closeable:!0,isOpen:p,animate:!0,role:We.b.dialog,overrides:{Dialog:{style:function(e){return{borderRadius:e.$theme.borders.radius200}}}}},r.a.createElement(Ue.f,null,m("information")),r.a.createElement(Ue.e,null,r.a.createElement(ce.g,null,m("relevanceInfo")),r.a.createElement(ce.g,null,m("author"),r.a.createElement("br",null),m("contact"),":"," ",r.a.createElement(q.a,{target:"_blank",href:"mailto:team@sewasew.com"},"team@sewasew.com")),r.a.createElement(ce.g,null,m("openSourceApp")),r.a.createElement(q.a,{target:"_blank",href:"https://github.com/Sewasew/election"},"https://github.com/Sewasew/election"),r.a.createElement(ce.g,null,m("donation")),r.a.createElement(q.a,{target:"_blank",href:"https://www.paypal.me/konradkalemba"},"https://www.paypal.me/konradkalemba"),r.a.createElement(ce.e,{margin:"20px 0 10px"},m("contributors")),r.a.createElement(ct,null))))))}var nt=a(18);function rt(){var e=Object(f.a)(),t=e.t,a=e.i18n,o=Object(n.useState)(!1),i=Object(w.a)(o,2),c=i[0],l=i[1],s=L(),u=s.useDarkTheme,d=s.setUseDarkTheme,m=Object(ne.b)(),h=Object(w.a)(m,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,null,r.a.createElement(Te,{className:u?"dark-theme":""})),r.a.createElement(Q.a,null,r.a.createElement(U.a,{position:"fixed",bottom:0,left:0,width:["100%","100%","auto"],margin:["0","0","20px"]},r.a.createElement(U.a,{overrides:{Block:{style:function(e){var t,a=e.$theme;return t={},Object(V.a)(t,a.mediaQuery.medium,{width:"288px"}),Object(V.a)(t,a.mediaQuery.large,{width:"380px"}),t}}}}))),r.a.createElement(Q.a,null,r.a.createElement(U.a,{position:"fixed",top:0,left:0,width:["100%","100%","auto"],margin:["0","0","20px"]},r.a.createElement(ve,null))),r.a.createElement(Q.a,null,r.a.createElement(U.a,{display:["none","none","none","block"],position:"fixed",top:"20px",right:"20px",$style:function(e){var t,a=e.$theme;return t={},Object(V.a)(t,a.mediaQuery.medium,{maxHeight:"calc(100vh - 100px)"}),Object(V.a)(t,"textAlign","right"),t}},r.a.createElement(Re,null),r.a.createElement($e.a,{$as:"a",target:"_blank",href:"https://nebe.org.et/",kind:nt.a.secondary,overrides:{BaseButton:{style:function(e){var t=e.$theme;return{borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500,marginTop:"20px"}}}}},t("moreInfo")),r.a.createElement("div",{className:h({display:"block",textAlign:"right",marginTop:"20px"})},r.a.createElement("img",{className:h({height:"36px",background:"white",padding:"0 10px 0 10px"}),src:"".concat("https://sewasew.github.io/election","/images/sewasew.png"),alt:"Powered by Sewasew"})))),r.a.createElement(Q.a,null,r.a.createElement(U.a,{position:"fixed",bottom:"20px",right:"20px",display:"flex"},r.a.createElement("div",{className:"fb-share-button","data-href":"https://ene.sewasew.com","data-layout":"button","data-size":"large"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkorona.ws%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore"},t("share"))),r.a.createElement($e.a,{size:nt.c.mini,onClick:function(){return l(!0)},overrides:{BaseButton:{style:function(e){var t=e.$theme;return{borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500,marginLeft:"10px"}}}}},t("information")),r.a.createElement($e.a,{size:nt.c.mini,$as:"a",target:"_blank",href:"http://bit.ly/covid19-poland",endEnhancer:function(){return r.a.createElement(et.ArrowUpRight,{size:16})},overrides:{BaseButton:{style:function(e){var t=e.$theme;return{borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500,marginLeft:"10px"}}}}},t("source")),r.a.createElement($e.a,{size:nt.c.mini,onClick:function(){return d(!u)},overrides:{BaseButton:{style:function(e){var t=e.$theme;return{borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500,marginLeft:"10px"}}}}},t(u?"turnOff":"turnOn")," ",t("darkMode")),r.a.createElement($e.a,{size:nt.c.mini,onClick:function(){return Ye({i18n:a})},overrides:{BaseButton:{style:function(e){var t=e.$theme;return{borderRadius:t.borders.radius200,boxShadow:t.lighting.shadow500,marginLeft:"10px"}}}}},r.a.createElement(Ge.a,{iso:"am"===a.language?"gb":"et",$size:"mini",className:h({marginRight:"8px",marginTop:"0px"})}),t("switchLang")),r.a.createElement(He.a,{onClose:function(){return l(!1)},closeable:!0,isOpen:c,animate:!0,role:We.b.dialog,overrides:{Dialog:{style:function(e){return{borderRadius:e.$theme.borders.radius200}}}}},r.a.createElement(Ue.f,null,t("information")),r.a.createElement(Ue.e,null,r.a.createElement(ce.g,null,t("relevanceInfo")),r.a.createElement(ce.g,null,t("author"),r.a.createElement("br",null),t("contact"),":"," ",r.a.createElement(q.a,{target:"_blank",href:"mailto:team@sewasew.com"},"team@sewasew.com")),r.a.createElement(ce.g,null,t("openSourceApp")),r.a.createElement(q.a,{target:"_blank",href:"https://github.com/Sewasew/election"},"https://github.com/Sewasew/election"),r.a.createElement(ce.g,null,t("donation")),r.a.createElement(q.a,{target:"_blank",href:"https://www.paypal.me/konradkalemba"},"https://www.paypal.me/konradkalemba"),r.a.createElement(ce.e,{margin:"20px 0 10px"},t("contributors")),r.a.createElement(ct,null))))))}function ot(){var e=ke().width,t=Object(ne.b)(),a=Object(w.a)(t,2)[1];return r.a.createElement(r.a.Fragment,null,e<a.breakpoints.medium?r.a.createElement(at,null):r.a.createElement(rt,null))}var it=a(1419);function ct(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],o=t[1];return fetch("https://api.github.com/repos/".concat("konradkalemba/korona.ws","/contributors")).then(function(){var e=Object(B.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=8;break}return e.t0=o,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=9;break;case 8:throw new Error("GitHub API rate limit exceeded!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){})),r.a.createElement(U.a,{display:"flex",flexWrap:!0},a&&a.filter((function(e){return"User"===e.type})).map((function(e){return r.a.createElement(U.a,{as:"a",href:e.html_url,target:"_blank",key:e.id,title:e.login},r.a.createElement(it.a,{name:e.login,src:e.avatar_url,overrides:{Root:{style:function(e){var t=e.$theme;return{margin:t.sizing.scale100,transitionProperty:"all",transitionDuration:t.animation.timing100,transitionTimingFunction:t.animation.easeInOutCurve,":hover":{transform:"scale(1.2)"}}}}}}))})))}var lt=new b.a,st=(p.a.typography,Object(h.a)(p.a,["typography"])),ut=Object(y.a)(Object(m.a)(Object(m.a)({},E.lightThemePrimitives),{},{primaryFontFamily:'"Noto Sans Ethiopic", Rubik'}),{}),dt=Object(y.a)(Object(m.a)(Object(m.a)({},E.darkThemePrimitives),{},{primaryFontFamily:'"Noto Sans Ethiopic", Rubik'}),Object(m.a)({},st));function mt(){var e=Object(f.a)().t,t=ke().width;return r.a.createElement(K,null,r.a.createElement(M.Consumer,null,(function(a){var n=a.isOnline;return r.a.createElement($,null,r.a.createElement(g.Provider,{value:lt},r.a.createElement(R,null,r.a.createElement(_.Consumer,null,(function(a){var o=a.useDarkTheme;return r.a.createElement(v.a,{theme:o?dt:ut,overrides:{AppContainer:{props:{"data-theme":o?"dark":"light"},style:Object(m.a)({height:"100%"},t>=600&&{display:"none"})},LayersContainer:{props:{"data-theme":o?"dark":"light"}}}},r.a.createElement(ot,null),!localStorage.getItem("notificationDismissed")&&r.a.createElement(Q.a,null,r.a.createElement(U.a,{position:"fixed",top:"0",padding:"0",width:"100%"},r.a.createElement(W.a,{overrides:{Body:{style:{marginTop:0,width:"100%",boxSizing:"border-box"}}},closeable:!0,onClose:function(){return localStorage.setItem("notificationDismissed",!0)}},e("notification")))),!n&&r.a.createElement(Q.a,null,r.a.createElement(U.a,{position:"fixed",top:"0",padding:"0",width:"100%"},r.a.createElement(W.a,{kind:"negative",overrides:{Body:{style:{marginTop:0,width:"100%",boxSizing:"border-box"}}},closeable:!0},e("offline")," ",r.a.createElement(q.a,{href:""},e("offlineRetry"))))))})))))})))}a(1379);i.a.render(r.a.createElement(mt,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://sewasew.github.io/election",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://sewasew.github.io/election","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},256:function(e){e.exports=JSON.parse('{"notification":"Due to the lack of precise information on the location of individual cases in the latest announcements of the Ministry of Health, we are forced to limit ourselves to displaying data by voivodeship.","offline":"No Internet connection detected.","offlineRetry":"Retry.","todaysChange":"Today\'s change","electionEthiopia":"Ethiopian National Election","deaths":"Deaths","registered":"Registered","registeredShort":"Reg","cured":"Cured","showMore":"Show more","hide":"Hide","hospitalized":"Hospitalized","quarantined":"Quarantined","underSurveillance":"Covered by epidemiological surveillance","tests":"Tests","map":"Map","statistics":"Statistics","information":"Information","darkMode":"dark mode","turnOff":"Turn off","turnOn":"Turn on","relevanceInfo":"The author is not responsible for the relevance and correctness of the content provided. The data may be out of date.","author":"Author: Konrad Kalemba","contact":"Contact","openSourceApp":"The application is \'open-source\' - anyone willing can directly help in the development of the project. Source code can be found at the following link:","contributors":"Contributors","casesOverall":"Overall","casesDaily":"Daily","sourceInfo":"The data is updated basing on the official Twitter account of Polish Ministry of Health. Every information below is confirmed by a tweet, which can be reached by clicking on a date.","loadingData":"Loading data","divisionIntoVoivodeships":"Division into voivodeships","source":"Data source","search":"Search","date":"Date","quantity":"Quantity","voivodeship":"Voivodeship","noDetails":"No Details","moreInfo":"More information on Ethiopian National Election 2021","share":"Share","switchLang":"Amharic","donation":"The application is free to use, but not to operate. Help me by clicking the link below and donating. Thank you!"}')},257:function(e){e.exports=JSON.parse('{"notification":"Due to the lack of precise information on the location of individual cases in the latest announcements of the Ministry of Health, we are forced to limit ourselves to displaying data by voivodeship.","offline":"No Internet connection detected.","offlineRetry":"Retry.","todaysChange":"Today\'s change","electionEthiopia":"\u12e82013 \u12d3.\u121d. \u12a0\u1308\u122d \u12a0\u1240\u134d \u121d\u122d\u132b","deaths":"Deaths","registered":"Registered","registeredShort":"Reg","cured":"Cured","showMore":"Show more","hide":"Hide","hospitalized":"Hospitalized","quarantined":"Quarantined","underSurveillance":"Covered by epidemiological surveillance","tests":"Tests","map":"Map","statistics":"Statistics","information":"Information","darkMode":"dark mode","turnOff":"Turn off","turnOn":"Turn on","relevanceInfo":"The author is not responsible for the relevance and correctness of the content provided. The data may be out of date.","author":"Author: Konrad Kalemba","contact":"Contact","openSourceApp":"The application is \'open-source\' - anyone willing can directly help in the development of the project. Source code can be found at the following link:","contributors":"Contributors","casesOverall":"Overall","casesDaily":"Daily","sourceInfo":"The data is updated basing on the official Twitter account of Polish Ministry of Health. Every information below is confirmed by a tweet, which can be reached by clicking on a date.","loadingData":"Loading data","divisionIntoVoivodeships":"Division into voivodeships","source":"Data source","search":"Search","date":"Date","quantity":"Quantity","voivodeship":"Voivodeship","noDetails":"No Details","moreInfo":"\u12e82013 \u12d3.\u121d. \u12a0\u1308\u122d \u12a0\u1240\u134d \u121d\u122d\u132b \u1270\u1328\u121b\u122a \u1218\u1228\u1303\u12ce\u127d","share":"\u1260\u134c\u1235\u1261\u12ad \u12eb\u130b\u1229","switchLang":"English","donation":"The application is free to use, but not to operate. Help me by clicking the link below and donating. Thank you!"}')},318:function(e,t,a){e.exports=a(1380)}},[[318,1,2]]]);
//# sourceMappingURL=main.61f0b39d.chunk.js.map