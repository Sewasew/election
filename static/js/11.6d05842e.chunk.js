/*! For license information please see 11.6d05842e.chunk.js.LICENSE.txt */
(this["webpackJsonpsewasew-election-center"]=this["webpackJsonpsewasew-election-center"]||[]).push([[11],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(79),o=n.n(r),i=n(34),a=n.n(i),c=n(2),s=n(63);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var f={};function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&f[t[0]]||("string"===typeof t[0]&&(f[t[0]]=new Date),u.apply(void 0,t))}function p(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(c.useContext)(s.a)||{},i=r.i18n,a=r.defaultNS,u=n||i||Object(s.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.b),!u){l("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[f,{},!1];return g.t=f,g.i18n={},g.ready=!1,g}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=b(b(b({},Object(s.c)()),u.options.react),t),y=v.useSuspense,h=e||a||u.options&&u.options.defaultNS;h="string"===typeof h?[h]:h||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(h);var m=(u.isInitialized||u.initializedStoreOnce)&&h.every((function(e){return d(e,u,v)}));function O(){return u.getFixedT(null,"fallback"===v.nsMode?h:h[0])}var j=Object(c.useState)(O),w=o()(j,2),x=w[0],S=w[1],k=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=v.bindI18n,t=v.bindI18nStore;function n(){k.current&&S(O)}return k.current=!0,m||y||p(u,h,(function(){k.current&&S(O)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){k.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,h.join()]);var E=Object(c.useRef)(!0);Object(c.useEffect)((function(){k.current&&!E.current&&S(O),E.current=!1}),[u]);var A=[x,u,m];if(A.t=x,A.i18n=u,A.ready=m,m)return A;if(!m&&!y)return A;throw new Promise((function(e){p(u,h,(function(){e()}))}))}},144:function(e,t,n){"use strict";var r=n(2),o=n(75),i=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=i);var a=Object(r.useRef)(t);Object(r.useEffect)((function(){a.current=t}),[t]),Object(r.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&a.current(t)},r=0,i=n;r<i.length;r++){var c=i[r];Object(o.d)(document,c,t)}return function(){for(var e=0,r=n;e<r.length;e++){var i=r[e];Object(o.c)(document,i,t)}}}),[n,e])}},609:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},627:function(e,t,n){"use strict";n.r(t);var r=n(86),o=n(609),i=n(71),a=n.n(i),c=n(2),s=n.n(c),u=n(17),f=n.n(u);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=Object(c.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,a=p(e,["color","size"]);return s.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),s.a.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),s.a.createElement("polyline",{points:"5 12 12 5 19 12"}))}));d.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},d.displayName="ArrowUp";var g=d,b=n(108),v=n(72),y=n(144),h=n(16);function m(e){var t,n=this,i=e.showLanguageSwitcher,s=e.setShowLanguageSwitcher,u=Object(b.a)(),f=u.t,l=u.i18n,p=Object.keys(o).includes(null===l||void 0===l?void 0:l.language)?null===l||void 0===l?void 0:l.language:null===l||void 0===l||null===(t=l.options)||void 0===t?void 0:t.fallbackLng[0],d=Object(v.useTransition)(i,{from:r.b,enter:r.a,leave:r.b,config:{mass:1,tension:100,friction:15}}),m=Object(c.useRef)();Object(y.a)(m,(function(){s(!1)}));var O=Object(c.useCallback)((function(e){l&&l.changeLanguage(e)}),[l]);return d((function(e,t){return t&&Object(h.jsxs)(v.animated.div,{className:"LanguageSwitcher",ref:m,style:e,children:[Object(h.jsx)("h3",{children:f("We speak the following languages")}),Object(h.jsx)("div",{className:"languages",children:Object.keys(o).map((function(e){return Object(h.jsx)("div",{className:a()("language",{"is-highlighted":p===e}),onClick:O.bind(n,e),children:Object(h.jsx)("span",{children:o[e]})},e)}))}),Object(h.jsx)("div",{className:"close-button",onClick:s.bind(n,!1),children:Object(h.jsx)(g,{width:16})})]})}))}t.default=Object(c.memo)(m)},71:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){};function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var a="undefined"!==typeof window},79:function(e,t,n){var r=n(80),o=n(81),i=n(82),a=n(84);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},80:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},81:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},82:function(e,t,n){var r=n(83);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},83:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},84:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},86:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s}));var r={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},o={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},i={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},a={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},c={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},s={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26);var o=n(36);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=11.6d05842e.chunk.js.map