(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2dYp":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a("c4nb")),i=u(a("9QKF")),r=u(a("ofQ0")),o=u(a("99bE")),d=u(a("xWxM"));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"pt-BR",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:d.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=s,e.exports=t.default},"99bE":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a("rwOc"))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(e,t){var a=Number(e),n=String((t||{}).unit);return"week"===n||"isoWeek"===n?a+"ª":a+"º"},era:(0,i.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["do","2ª","3ª","4ª","5ª","6ª","sá"],short:["do","2ª","3ª","4ª","5ª","6ª","sá"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda","terça","quarta","quinta","sexta","sábado"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},"9QKF":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a("HyFC"))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}},e.exports=t.default},c4nb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var i;a=a||{},i="string"==typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?"em "+i:"há "+i;return i};var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),i=a||{},r=n.match(e.matchPattern);if(!r)return null;var o=r[0],d=n.match(e.parsePattern);if(!d)return null;var u=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:u=i.valueCallback?i.valueCallback(u):u,rest:n.slice(o.length)}}},e.exports=t.default},ofQ0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){var r=n[e];if("function"==typeof r)return r(t,a,i);return r};var n={lastWeek:function(e,t,a){var n=e.getUTCDay();return"'"+(0===n||6===n?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"};e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var d=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;n=e.values[u]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n=String(t),i=a||{},r=i.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],d=n.match(o);if(!d)return null;var u,s=d[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(l,(function(e){return e.test(n)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(l,(function(e){return e.test(n)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=i.valueCallback?i.valueCallback(u):u,rest:n.slice(s.length)}}},e.exports=t.default},xWxM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("sCib"));function i(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,i(a("loZk")).default)({matchPattern:/^(\d+)[ºªo]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default}}]);
//# sourceMappingURL=52.095f4eeb.chunk.js.map