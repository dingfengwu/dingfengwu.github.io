(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a96d1896"],{5224:function(t,e,l){"use strict";var s=l("71f6"),i=l.n(s);i.a},"71f6":function(t,e,l){},9294:function(t,e,l){"use strict";l.r(e);var s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"choice-number-list clear-fix"},t._l(t.numberList,(function(e,s){return l("li",{key:s,staticClass:"clear-fix"},[l("div",{staticClass:"top clear-fix"},[l("div",{staticClass:"top"},[l("h4",[t._v(t._s(e.type))]),l("div",{staticClass:"balls clear-fix"},t._l(e.numberList,(function(e,s){var i;return l("span",{key:s,class:(i={selected:e.isSelected},i[e.className]=!0,i[e.color]=!0,i),on:{click:function(l){return t.clickBall(e,s)}}},[t._v(" "+t._s(e.label)+" ")])})),0)]),e.showBtn?l("div",{staticClass:"types clear-fix"},[l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectAll},on:{click:function(l){return t.selectAllBalls(e.numberList,"isSelected",e,"isSelectAll",t.numberAttrNameList,t.calculateBetCounts,void 0,s)}}},[t._v(t._s(t.$t("gameTemplate.whole")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectBig},on:{click:function(l){return t.selectBigBalls(e.numberList,"isSelected",e,"isSelectBig",t.numberAttrNameList,t.calculateBetCounts,void 0,s)}}},[t._v(t._s(t.$t("gameTemplate.big")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectSmall},on:{click:function(l){return t.selectSmallBalls(e.numberList,"isSelected",e,"isSelectSmall",t.numberAttrNameList,t.calculateBetCounts,void 0,s)}}},[t._v(t._s(t.$t("gameTemplate.small")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectOdd},on:{click:function(l){return t.selectOddBalls(e.numberList,"isSelected",e,"isSelectOdd",t.numberAttrNameList,t.calculateBetCounts,void 0,s)}}},[t._v(t._s(t.$t("gameTemplate.odd")))]),l("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectEven},on:{click:function(l){return t.selectEvenBalls(e.numberList,"isSelected",e,"isSelectEven",t.numberAttrNameList,t.calculateBetCounts,void 0,s)}}},[t._v(t._s(t.$t("gameTemplate.even")))]),l("span",{staticClass:"select_balls_change",on:{click:function(l){return t.clearAllBallsSelect(e.numberList,"isSelected",e,t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.clear")))])]):t._e()])])})),0)},i=[],a=(l("d81d"),l("ac1f"),l("1276"),l("5530")),n=l("ddd0"),c=l("aae0"),r=l("2fca"),o=l("2f62"),u=l("82d1"),m={mixins:[c["a"],n["a"]],props:["flagCount","getShoppingCarList","nowActiveWayInfoDetail"],data:function(){return{numberList:[],numberAttrNameList:["isSelectAll","isSelectBig","isSelectSmall","isSelectOdd","isSelectEven"],selectedCounts:0}},computed:Object(a["a"])({},Object(o["c"])(["showYlPlay","showLrPlay"])),methods:{clickBall:function(t,e){t.isSelected=!t.isSelected,this.calculateBetCounts(e)},calculateBetCounts:function(t){var e=this,l=[],s=[];this.numberList.map((function(i){var a=[],n=i.numberList.length-1,c=0;i.numberList.map((function(t){t.isSelected&&c++})),i.numberList.map((function(){if(c>e.nowActiveWayInfoDetail["ball_limits"]){c--;var l=Math.round(Math.random()*n);while(t===l||!i.numberList[l].isSelected)l=Math.round(Math.random()*n);i.numberList[l].isSelected=!1}})),i.numberList.map((function(t){t.isSelected&&(s.push(+t.prizeLevel),a.push(t))})),l.push(a)})),s.length?this.$store.commit(r["G"],"".concat(Math.min.apply(this,s))):this.$store.commit(r["G"],"");var i=Object(u["a"])({betData:l.map((function(t){return t.map((function(t){return t.value}))})),areaSplitChar:this.nowActiveWayInfoDetail["area_split_char"],ballSplitChar:this.nowActiveWayInfoDetail["ball_split_char"],methodDetail:this.nowActiveWayInfoDetail["count_function"]});return i.labelInfo=Object(u["b"])(this.nowActiveWayInfoDetail["area_split_char"],this.nowActiveWayInfoDetail["ball_split_char"],l.map((function(t){return t.map((function(t){return t.label}))}))),this.selectedCounts=i.betCount,this.$store.commit(r["Fb"],this.selectedCounts),this.$store.commit(r["Bb"],i.selectLineCounts),i},resetNumberList:function(){this.numberList.map((function(t){t.isSelectAll=!1,t.isSelectBig=!1,t.isSelectSmall=!1,t.isSelectOdd=!1,t.isSelectEven=!1,t.numberList.map((function(t){t.isSelected=!1}))}))},getNumberListInfo:function(){this.numberList=[];var t=this.nowActiveWayInfoDetail;if(!t||!t["ball_strings"]||!t["ball_values"])return!1;for(var e=t["plat_rows"],l=t["ball_strings"].split("|"),s=t["ball_values"].split("|"),i=t["row_titles"].split(","),a=t["shortcut"].split(","),n=t["ball_color"],c=t["ball_prize_levels"].split(","),r=0;r<e;r++){var o=void 0===a[r]?+a[0]:+a[r];this.numberList.push({type:i[r],showBtn:o,isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,numberList:[],ylList:[],lrList:[]})}this.numberList.map((function(t,e){var a=l[e]?l[e].split(","):l[0].split(","),r=s[e]?s[e].split(","):s[0].split(",");t.type=i[e];for(var o=0;o<Math.min(a.length,r.length);o++){var u=n&&n[e]&&n[e][a[o]]||"";a[o]<10?t.numberList.push({isSelected:!1,className:n["0".concat(a[o])],label:a[o],color:u,value:r[o],prizeLevel:c[o]?c[o]:"1"}):t.numberList.push({isSelected:!1,className:n["".concat(a[o])],color:u,label:a[o],value:r[o],prizeLevel:c[o]?c[o]:"1"})}}))}},watch:{flagCount:function(){var t=this.calculateBetCounts();if(0!==t.result)return this.getShoppingCarList(!1,!1,0);this.getShoppingCarList(t.numberStr,this.selectedCounts,void 0,t.labelInfo)},nowActiveWayInfoDetail:function(){this.getNumberListInfo()}},created:function(){this.getNumberListInfo()}},h=m,b=(l("5224"),l("2877")),p=Object(b["a"])(h,s,i,!1,null,"0e2749e2",null);e["default"]=p.exports},aae0:function(t,e,l){"use strict";var s=l("5530"),i=l("2f62");e["a"]={props:["nowPlayWayInfo"],computed:Object(s["a"])({},Object(i["c"])(["clearFlag"])),watch:{clearFlag:function(){this.resetNumberList()}}}}}]);