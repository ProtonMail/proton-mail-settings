(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+NT0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a("HyFC"))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"eeee, d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'kell' {{time}}",long:"{{date}} 'kell' {{time}}",medium:"{{date}}. {{time}}",short:"{{date}}. {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},"2NyG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var i,r=(a=a||{}).addSuffix?n[e].withPreposition:n[e].standalone;i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?i+" pärast":i+" eest";return i};var n={lessThanXSeconds:{standalone:{one:"vähem kui üks sekund",other:"vähem kui {{count}} sekundit"},withPreposition:{one:"vähem kui ühe sekundi",other:"vähem kui {{count}} sekundi"}},xSeconds:{standalone:{one:"üks sekund",other:"{{count}} sekundit"},withPreposition:{one:"ühe sekundi",other:"{{count}} sekundi"}},halfAMinute:{standalone:"pool minutit",withPreposition:"poole minuti"},lessThanXMinutes:{standalone:{one:"vähem kui üks minut",other:"vähem kui {{count}} minutit"},withPreposition:{one:"vähem kui ühe minuti",other:"vähem kui {{count}} minuti"}},xMinutes:{standalone:{one:"üks minut",other:"{{count}} minutit"},withPreposition:{one:"ühe minuti",other:"{{count}} minuti"}},aboutXHours:{standalone:{one:"umbes üks tund",other:"umbes {{count}} tundi"},withPreposition:{one:"umbes ühe tunni",other:"umbes {{count}} tunni"}},xHours:{standalone:{one:"üks tund",other:"{{count}} tundi"},withPreposition:{one:"ühe tunni",other:"{{count}} tunni"}},xDays:{standalone:{one:"üks päev",other:"{{count}} päeva"},withPreposition:{one:"ühe päeva",other:"{{count}} päeva"}},aboutXMonths:{standalone:{one:"umbes üks kuu",other:"umbes {{count}} kuud"},withPreposition:{one:"umbes ühe kuu",other:"umbes {{count}} kuu"}},xMonths:{standalone:{one:"üks kuu",other:"{{count}} kuud"},withPreposition:{one:"ühe kuu",other:"{{count}} kuu"}},aboutXYears:{standalone:{one:"umbes üks aasta",other:"umbes {{count}} aastat"},withPreposition:{one:"umbes ühe aasta",other:"umbes {{count}} aasta"}},xYears:{standalone:{one:"üks aasta",other:"{{count}} aastat"},withPreposition:{one:"ühe aasta",other:"{{count}} aasta"}},overXYears:{standalone:{one:"rohkem kui üks aasta",other:"rohkem kui {{count}} aastat"},withPreposition:{one:"rohkem kui ühe aasta",other:"rohkem kui {{count}} aasta"}},almostXYears:{standalone:{one:"peaaegu üks aasta",other:"peaaegu {{count}} aastat"},withPreposition:{one:"peaaegu ühe aasta",other:"peaaegu {{count}} aasta"}}};e.exports=t.default},Br0m:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("2NyG")),i=s(a("+NT0")),r=s(a("ZbG8")),u=s(a("XUoo")),o=s(a("HPOC"));function s(e){return e&&e.__esModule?e:{default:e}}var l={code:"et",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},HPOC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("loZk")),i=r(a("sCib"));function r(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,n.default)({matchPattern:/^\d+\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,abbreviated:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,wide:/^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^(m|p)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jvmasond]/i,abbreviated:/^('jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets')/i,wide:/^('jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember')/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^v/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^v/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[petknrl]/i,short:/^[petknrl]/i,abbreviated:/^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,wide:/^('pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev')/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^e/i,/^t/i,/^k/i,/^n/i,/^r/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(am|pm|kesköö|keskpäev|hommik|pärastlõuna|õhtu|öö)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^keskö/i,noon:/^keskp/i,morning:/hommik/i,afternoon:/pärastlõuna/i,evening:/õhtu/i,night:/öö/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},XUoo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a("rwOc"))&&n.__esModule?n:{default:n};var r={narrow:["J","V","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],wide:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"]},u={narrow:["P","E","T","K","N","R","L"],short:["P","E","T","K","N","R","L"],abbreviated:["pühap.","esmasp.","teisip.","kolmap.","neljap.","reede.","laup."],wide:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"]};var o={ordinalNumber:function(e){return Number(e)+"."},era:(0,i.default)({values:{narrow:["e.m.a","m.a.j"],abbreviated:["e.m.a","m.a.j"],wide:["enne meie ajaarvamist","meie ajaarvamise järgi"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:r,formattingValues:r,defaultWidth:"wide"}),day:(0,i.default)({values:u,formattingValues:u,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},abbreviated:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},wide:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"}},formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},abbreviated:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},wide:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"}},defaultWidth:"wide"})};t.default=o,e.exports=t.default},ZbG8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){return n[e]};var n={lastWeek:"'eelmine' eeee 'kell' p",yesterday:"'eile kell' p",today:"'täna kell' p",tomorrow:"'homme kell' p",nextWeek:"'järgmine' eeee 'kell' p",other:"P"};e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),i=a||{},r=n.match(e.matchPattern);if(!r)return null;var u=r[0],o=n.match(e.parsePattern);if(!o)return null;var s=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(u.length)}}},e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=i.width?String(i.width):r;n=e.formattingValues[u]||e.formattingValues[r]}else{var o=e.defaultWidth,s=i.width?String(i.width):e.defaultWidth;n=e.values[s]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),i=a||{},r=i.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=n.match(u);if(!o)return null;var s,l=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(d,(function(e){return e.test(n)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(d,(function(e){return e.test(n)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=i.valueCallback?i.valueCallback(s):s,rest:n.slice(l.length)}}},e.exports=t.default}}]);
//# sourceMappingURL=27.e9fffff4.chunk.js.map