(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759d1ca9"],{"1dfa":function(t,e,l){"use strict";var n=l("2492"),i=l.n(n);i.a},2492:function(t,e,l){},"89d5":function(t,e,l){"use strict";var n=l("5530"),i=l("2f62"),s=l("2fca");e["a"]={data:function(){return{name:"lrylBtnControlfalse"}},computed:Object(n["a"])({},Object(i["c"])(["lrylBtnControl","isShowMenuBtnsInHezhi"])),created:function(){this.$store.commit(s["U"],!1)}}},aae0:function(t,e,l){"use strict";var n=l("5530"),i=l("2f62");e["a"]={props:["nowPlayWayInfo"],computed:Object(n["a"])({},Object(i["c"])(["clearFlag"])),watch:{clearFlag:function(){this.resetNumberList()}}}},e150:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"choice-number-list"},t._l(t.numberList,(function(e,n){return l("li",{key:n},[l("div",{staticClass:"top top_1"},[l("div",{staticClass:"top"},[l("h4",[t._v(t._s(e.type))]),l("div",{staticClass:"balls clear-fix"},t._l(e.numberList,(function(e,i){return l("span",{key:i,staticClass:"ball",class:{selected:e.isSelected},on:{click:function(l){return t.clickBall(e,n,i)}}},[t._v(" "+t._s(e.label)+" ")])})),0)]),e.showBtn?l("div",{staticClass:"types clear-fix"},[l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectAll},on:{click:function(l){return t.selectAllBalls(e.numberList,"isSelected",e,"isSelectAll",t.numberAttrNameList,t.calculateBetCounts,t.tuoMaSelectedNumbers)}}},[t._v(t._s(t.$t("gameTemplate.whole")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectBig},on:{click:function(l){return t.selectBigBalls(e.numberList,"isSelected",e,"isSelectBig",t.numberAttrNameList,t.calculateBetCounts,t.tuoMaSelectedNumbers)}}},[t._v(t._s(t.$t("gameTemplate.big")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectSmall},on:{click:function(l){return t.selectSmallBalls(e.numberList,"isSelected",e,"isSelectSmall",t.numberAttrNameList,t.calculateBetCounts,t.tuoMaSelectedNumbers)}}},[t._v(t._s(t.$t("gameTemplate.small")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectOdd},on:{click:function(l){return t.selectOddBalls(e.numberList,"isSelected",e,"isSelectOdd",t.numberAttrNameList,t.calculateBetCounts,t.tuoMaSelectedNumbers)}}},[t._v(t._s(t.$t("gameTemplate.odd")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectEven},on:{click:function(l){return t.selectEvenBalls(e.numberList,"isSelected",e,"isSelectEven",t.numberAttrNameList,t.calculateBetCounts,t.tuoMaSelectedNumbers)}}},[t._v(t._s(t.$t("gameTemplate.even")))]),l("span",{staticClass:"select_balls_change",on:{click:function(l){return t.clearAllBallsSelect(e.numberList,"isSelected",e,t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.clear")))])]):t._e()])])})),0)},i=[],s=(l("7db0"),l("a630"),l("d81d"),l("d3b7"),l("ac1f"),l("6062"),l("3ca3"),l("1276"),l("ddb0"),l("5530")),a=l("2f62"),c={data:function(){return{}},computed:Object(s["a"])({},Object(a["c"])(["lotteryId"])),methods:Object(s["a"])({},Object(a["b"])([]),{},Object(a["d"])([]),{selectAllBalls:function(t,e,l,n,i,s,a){if(!t||!t.length)return!1;e||(e="isSelected"),n||(n="isSelectAll");var c=l;return!!i&&(i.map((function(t){t!==n&&(c[t]=!1)})),t.map((function(t){t[e]=!1})),c[n]=!c[n],t.map((function(t){a&&a.length&&a.find((function(e){return e.value===t.value}))||(t[e]=c[n])})),s&&s("menu"),t)},selectBigBalls:function(t,e,l,n,i,s,a){if(!t||!t.length)return!1;if(e||(e="isSelected"),n||(n="isSelectBig"),!i)return!1;var c=l;return i.map((function(t){t!==n&&(c[t]=!1)})),t.map((function(t){t[e]=!1})),c[n]=!c[n],t.map((function(l,i){a&&a.length&&a.find((function(t){return t.value===l.value}))||i>=Math.floor(t.length/2)&&(l[e]=c[n])})),s&&s("menu"),t},selectSmallBalls:function(t,e,l,n,i,s,a){if(!t||!t.length)return!1;if(e||(e="isSelected"),n||(n="isSelectSmall"),!i)return!1;var c=l;return i.map((function(t){t!==n&&(c[t]=!1)})),t.map((function(t){t[e]=!1})),c[n]=!c[n],t.map((function(l,i){a&&a.length&&a.find((function(t){return t.value===l.value}))||i<Math.floor(t.length/2)&&(l[e]=c[n])})),s&&s("menu"),t},selectOddBalls:function(t,e,l,n,i,s,a){if(!t||!t.length)return!1;if(e||(e="isSelected"),n||(n="isSelectOdd"),!i)return!1;var c=l;return i.map((function(t){t!==n&&(c[t]=!1)})),t.map((function(t){t[e]=!1})),c[n]=!c[n],t.map((function(t){a&&a.length&&a.find((function(e){return e.value===t.value}))||t.value%2!==0&&(t[e]=c[n])})),s&&s("menu"),t},selectEvenBalls:function(t,e,l,n,i,s,a){if(!t||!t.length)return!1;if(e||(e="isSelected"),n||(n="isSelectEven"),!i)return!1;var c=l;return t.map((function(t){t[e]=!1})),i.map((function(t){t!==n&&(c[t]=!1)})),c[n]=!c[n],t.map((function(t){a&&a.length&&a.find((function(e){return e.value===t.value}))||t.value%2===0&&(t[e]=c[n])})),s&&s("menu"),t},clearAllBallsSelect:function(t,e,l,n,i){if(!t||!t.length)return!1;if(e||(e="isSelected"),!n)return!1;var s=l;return n.map((function(t){s[t]=!1})),t.map((function(t){t[e]=!1})),i&&i("menu"),t}}),created:function(){}},u=l("aae0"),r=l("2fca"),o=l("89d5"),m=l("82d1"),f={mixins:[c,u["a"],o["a"]],props:["flagCount","getShoppingCarList","nowActiveWayInfoDetail"],data:function(){return{numberList:[],numberAttrNameList:["isSelectAll","isSelectBig","isSelectSmall","isSelectOdd","isSelectEven"],selectedCounts:0,ballStack:[],tuoMaSelectedNumbers:[],firstMaxCount:0,secondMaxCount:0}},computed:Object(s["a"])({},Object(a["c"])(["showYlPlay","showLrPlay"])),methods:{clickBall:function(t,e,l){0===e&&this.ballStack.push(t),this.ballStack=Array.from(new Set(this.ballStack)),t.isSelected=!t.isSelected,this.calculateBetCounts("click",t,e,l)},calculateBetCounts:function(t,e,l,n){var i=this,s=[],a=[];this.ballStack.length>this.firstMaxCount&&(this.ballStack.shift().isSelected=!1),"click"===t&&e.isSelected&&this.numberList.map((function(t,n){if(n===l)return!0;t.numberList.find((function(t){return t.value===e.value})).isSelected=!1})),this.numberList.map((function(t){var e=[],l=t.numberList.length-1,c=0;t.numberList.map((function(t){t.isSelected&&c++})),t.numberList.map((function(){if(c>i.nowActiveWayInfoDetail["ball_limits"]){c--;var e=Math.round(Math.random()*l);while(n===e||!t.numberList[e].isSelected)e=Math.round(Math.random()*l);t.numberList[e].isSelected=!1}})),t.numberList.map((function(t){t.isSelected&&(a.push(+t.prizeLevel),e.push(t))})),s.push(e)})),a.length?this.$store.commit(r["E"],"".concat(Math.min.apply(this,a))):this.$store.commit(r["E"],"");var c=Object(m["a"])({betData:s.map((function(t){return t.map((function(t){return t.value}))})),areaSplitChar:this.nowActiveWayInfoDetail["area_split_char"],ballSplitChar:this.nowActiveWayInfoDetail["ball_split_char"],methodDetail:this.nowActiveWayInfoDetail["count_function"]});return c.labelInfo=Object(m["b"])(this.nowActiveWayInfoDetail["area_split_char"],this.nowActiveWayInfoDetail["ball_split_char"],s.map((function(t){return t.map((function(t){return t.label}))}))),this.selectedCounts=c.betCount,this.$store.commit(r["Db"],this.selectedCounts),this.$store.commit(r["zb"],c.selectLineCounts),c},resetNumberList:function(){this.numberList.map((function(t){t.isSelectAll=!1,t.isSelectBig=!1,t.isSelectSmall=!1,t.isSelectOdd=!1,t.isSelectEven=!1,t.numberList.map((function(t){t.isSelected=!1}))}))},getNumberListInfo:function(){this.numberList=[];var t=this.nowActiveWayInfoDetail;if(!t||!t["ball_strings"]||!t["ball_values"])return!1;var e=t["plat_rows"],l=t["ball_strings"].split("|"),n=t["ball_values"].split("|"),i=t["row_titles"].split(","),s=t["shortcut"].split(","),a=t["ball_prize_levels"].split(",");this.firstMaxCount=+t["ball_limits"].split(",")[0],this.secondMaxCount=+t["ball_limits"].split(",")[1];for(var c=0;c<e;c++)this.numberList.push({type:i[c],showBtn:!!+s[c],isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,numberList:[],ylList:[],lrList:[]});l=l[0].split(","),n=n[0].split(","),this.numberList.map((function(t,e){t.type=i[e];for(var s=0;s<Math.min(l.length,n.length);s++)t.numberList.push({isSelected:!1,label:l[s],value:n[s],prizeLevel:a[s]?a[s]:"1"})}))}},watch:{numberList:{deep:!0,handler:function(t){var e=[];t[0].numberList.map((function(t){t.isSelected&&e.push(t)})),this.tuoMaSelectedNumbers=e}},flagCount:function(){var t=this.calculateBetCounts();if(0!==t.result)return this.getShoppingCarList(!1,!1,0);this.getShoppingCarList(t.numberStr,this.selectedCounts,void 0,t.labelInfo)},nowActiveWayInfoDetail:function(){this.getNumberListInfo()}},created:function(){this.getNumberListInfo()}},h=f,b=(l("1dfa"),l("2877")),d=Object(b["a"])(h,n,i,!1,null,"5e77528a",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-759d1ca9.405a8d71.js.map