(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"A9/m":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){return u[e]};var u={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};e.exports=t.default},Hfjm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=a("HyFC"))&&u.__esModule?u:{default:u};var n={date:(0,i.default)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},u=a.width?String(a.width):e.defaultWidth;return e.formats[u]||e.formats[e.defaultWidth]}},e.exports=t.default},j9SO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a("loZk")),i=n(a("sCib"));function n(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,u.default)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u=String(t),i=a||{},n=u.match(e.matchPattern);if(!n)return null;var r=n[0],l=u.match(e.parsePattern);if(!l)return null;var o=e.valueCallback?e.valueCallback(l[0]):l[0];return{value:o=i.valueCallback?i.valueCallback(o):o,rest:u.slice(r.length)}}},e.exports=t.default},ndVD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(a("qRs0")),i=o(a("Hfjm")),n=o(a("A9/m")),r=o(a("noZQ")),l=o(a("j9SO"));function o(e){return e&&e.__esModule?e:{default:e}}var s={code:"fi",formatDistance:u.default,formatLong:i.default,formatRelative:n.default,localize:r.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default},noZQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=a("rwOc"))&&u.__esModule?u:{default:u};var n={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},r={narrow:n.narrow,abbreviated:n.abbreviated,wide:n.wide.map((function(e){return e+"ta"}))},l={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},o={narrow:l.narrow,short:l.short,abbreviated:l.abbreviated,wide:l.wide.map((function(e){return e+"na"}))};var s={ordinalNumber:function(e){return Number(e)+"."},era:(0,i.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:n,formattingValues:r,defaultWidth:"wide"}),day:(0,i.default)({values:l,formattingValues:o,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})};t.default=s,e.exports=t.default},qRs0:function(e,t,a){"use strict";function u(e){return e.replace(/sekuntia?/,"sekunnin")}function i(e){return e.replace(/minuuttia?/,"minuutin")}function n(e){return e.replace(/tuntia?/,"tunnin")}function r(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function l(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var u=o[e],i=1===t?u.one:u.other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?u.futureTense(i)+" kuluttua":i+" sitten";return i};var o={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:i},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:i},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function(e){return e.replace(/päivää?/,"päivän")}},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:l},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:l},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:l},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:l}};e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):n;u=e.formattingValues[r]||e.formattingValues[n]}else{var l=e.defaultWidth,o=i.width?String(i.width):e.defaultWidth;u=e.values[o]||e.values[l]}return u[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u=String(t),i=a||{},n=i.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=u.match(r);if(!l)return null;var o,s=l[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];return o="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(d,(function(e){return e.test(u)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(d,(function(e){return e.test(u)})),o=e.valueCallback?e.valueCallback(o):o,{value:o=i.valueCallback?i.valueCallback(o):o,rest:u.slice(s.length)}}},e.exports=t.default}}]);
//# sourceMappingURL=29.be91380b.chunk.js.map