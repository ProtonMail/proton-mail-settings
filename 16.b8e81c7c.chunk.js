(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HyFC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},Xn9f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("sCib"));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,r(n("loZk")).default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^(p[řr]ed Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pe[řr]ed Kr\.|pe[řr]ed n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr]ed Kristem|pred na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p[řr]/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^ut/i,/^st/i,/^[čc]t/i,/^p/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{any:/^dopoledne|dop\.?|odpoledne|odp\.?|půlnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},YVL8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n("HyFC"))&&a.__esModule?a:{default:a};var o={date:(0,r.default)({formats:{full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d.M.yyyy",short:"d.M.yy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},dvhP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n("zdRj")),r=d(n("YVL8")),o=d(n("raNJ")),u=d(n("o8tu")),i=d(n("Xn9f"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"cs",formatDistance:a.default,formatLong:r.default,formatRelative:o.default,localize:u.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},loZk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),r=n||{},o=a.match(e.matchPattern);if(!o)return null;var u=o[0],i=a.match(e.parsePattern);if(!i)return null;var d=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(u.length)}}},e.exports=t.default},o8tu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n("rwOc"))&&a.__esModule?a:{default:a};var o={ordinalNumber:function(e){return Number(e)+"."},era:(0,r.default)({values:{narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},defaultWidth:"wide",formattingValues:{narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},raNJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){var o=r[e];if("function"==typeof o)return o(t,n,a);return o};var a=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],r={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:function(e,t,n){var r=e.getUTCDay();return"'v "+a[r]+" o' p"},other:"P"};e.exports=t.default},rwOc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):o;a=e.formattingValues[u]||e.formattingValues[o]}else{var i=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;a=e.values[d]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),r=n||{},o=r.width,u=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=a.match(u);if(!i)return null;var d,l=i[0],p=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(p)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(p,(function(e){return e.test(a)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(p,(function(e){return e.test(a)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(l.length)}}},e.exports=t.default},zdRj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){n=n||{};var r,o=a[e];r="object"==typeof o.other?"other":1===t?"one":t>1&&t<5||0===t?"few":"many";var u,i=!0===n.addSuffix,d=n.comparison;u=i&&-1===d?"past":i&&1===d?"future":"regular";return o[r][u].replace("{{count}}",t)};var a={lessThanXSeconds:{one:{regular:"méně než vteřina",past:"před méně než vteřinou",future:"za méně než vteřinu"},few:{regular:"méně než {{count}} vteřiny",past:"před méně než {{count}} vteřinami",future:"za méně než {{count}} vteřiny"},many:{regular:"méně než {{count}} vteřin",past:"před méně než {{count}} vteřinami",future:"za méně než {{count}} vteřin"}},xSeconds:{one:{regular:"vteřina",past:"před vteřinou",future:"za vteřinu"},few:{regular:"{{count}} vteřiny",past:"před {{count}} vteřinami",future:"za {{count}} vteřiny"},many:{regular:"{{count}} vteřin",past:"před {{count}} vteřinami",future:"za {{count}} vteřin"}},halfAMinute:{other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než minuta",past:"před méně než minutou",future:"za méně než minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"minuta",past:"před minutou",future:"za minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně hodina",past:"přibližně před hodinou",future:"přibližně za hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"hodina",past:"před hodinou",future:"za hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"den",past:"před dnem",future:"za den"},few:{regular:"{{count}} dni",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXMonths:{one:{regular:"přibližně měsíc",past:"přibližně před měsícem",future:"přibližně za měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"měsíc",past:"před měsícem",future:"za měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně rok",past:"přibližně před rokem",future:"přibližně za rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"rok",past:"před rokem",future:"za rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než rok",past:"před více než rokem",future:"za více než rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro rok",past:"skoro před rokem",future:"skoro za rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}};e.exports=t.default}}]);
//# sourceMappingURL=16.b8e81c7c.chunk.js.map