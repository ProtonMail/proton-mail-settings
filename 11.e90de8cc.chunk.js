(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"14x+":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=(n=t("HyFC"))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=i,e.exports=a.default},"8wHm":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t("loZk")),r=i(t("sCib"));function i(e){return e&&e.__esModule?e:{default:e}}var d={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(ste|de)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},defaultParseWidth:"any"})};a.default=d,e.exports=a.default},HyFC:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=a.default},IqAn:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t("c8ia")),r=o(t("14x+")),i=o(t("MO5o")),d=o(t("ZwEY")),u=o(t("8wHm"));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"af",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};a.default=l,e.exports=a.default},MO5o:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return n[e]};var n={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"};e.exports=a.default},ZwEY:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=(n=t("rwOc"))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e){var a=Number(e),t=a%100;if(t<20)switch(t){case 1:case 8:return a+"ste";default:return a+"de"}return a+"ste"},era:(0,r.default)({values:{narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}},defaultFormattingWidth:"wide"})};a.default=i,e.exports=a.default},c8ia:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){var r;t=t||{},r="string"==typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a);if(t.addSuffix)return t.comparison>0?"oor "+r:r+" gelede";return r};var n={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}};e.exports=a.default},loZk:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n=String(a),r=t||{},i=n.match(e.matchPattern);if(!i)return null;var d=i[0],u=n.match(e.parsePattern);if(!u)return null;var o=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:o=r.valueCallback?r.valueCallback(o):o,rest:n.slice(d.length)}}},e.exports=a.default},rwOc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):i;n=e.formattingValues[d]||e.formattingValues[i]}else{var u=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},sCib:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n=String(a),r=t||{},i=r.width,d=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=n.match(d);if(!u)return null;var o,l=u[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return o="[object Array]"===Object.prototype.toString.call(s)?function(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}(s,(function(e){return e.test(n)})):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}(s,(function(e){return e.test(n)})),o=e.valueCallback?e.valueCallback(o):o,{value:o=r.valueCallback?r.valueCallback(o):o,rest:n.slice(l.length)}}},e.exports=a.default}}]);
//# sourceMappingURL=11.e90de8cc.chunk.js.map