(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75aec4f8"],{"368f":function(t,e,s){"use strict";s("7db0"),s("d81d");var l=s("5530"),i=s("2f62");e["a"]={data:function(){return{name:"lryl",lrylModelData:[]}},computed:Object(l["a"])({},Object(i["c"])(["ylData","lrData"])),methods:{setlrylNumberList:function(){var t=this;this.numberList.map((function(e){t.ylData.find((function(t){if(t.type===e.type)return e.ylList=t.data,!0}))})),this.numberList.map((function(e){t.lrData.find((function(t){if(t.type===e.type)return e.lrList=t.data,!0}))}))}},watch:{ylData:function(){this.setlrylNumberList()},lrData:function(){this.setlrylNumberList()},numberList:function(t){this.setlrylNumberList()}},created:function(){}}},"5a2c":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"choice-number-list"},t._l(t.numberList,(function(e,l){return s("li",{key:l},[s("div",{staticClass:"top top_1"},[s("div",{staticClass:"top"},[s("h4",[t._v(t._s(e.type))]),s("div",{staticClass:"balls clear-fix"},t._l(e.numberList,(function(l,i){return s("span",{key:i,staticClass:"ball",class:{selected:l.isSelected,"no-ball-show":!e.showBtn,"dan-span":!e.showBtn},on:{click:function(e){return t.clickBall(l,i)}}},[t._v(" "+t._s(l.label)+" ")])})),0)]),e.showBtn?s("div",{staticClass:"types clear-fix"},[s("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectAll},on:{click:function(s){return t.selectAllBalls(e.numberList,"isSelected",e,"isSelectAll",t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.whole")))]),s("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectBig},on:{click:function(s){return t.selectBigBalls(e.numberList,"isSelected",e,"isSelectBig",t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.big")))]),s("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectSmall},on:{click:function(s){return t.selectSmallBalls(e.numberList,"isSelected",e,"isSelectSmall",t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.small")))]),s("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectOdd},on:{click:function(s){return t.selectOddBalls(e.numberList,"isSelected",e,"isSelectOdd",t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.odd")))]),s("span",{staticClass:"select_balls_change",class:{"now-hov":e.isSelectEven},on:{click:function(s){return t.selectEvenBalls(e.numberList,"isSelected",e,"isSelectEven",t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.even")))]),s("span",{staticClass:"select_balls_change",on:{click:function(s){return t.clearAllBallsSelect(e.numberList,"isSelected",e,t.numberAttrNameList,t.calculateBetCounts)}}},[t._v(t._s(t.$t("gameTemplate.clear")))])]):t._e()]),e.showBtn?s("div",{directives:[{name:"show",rawName:"v-show",value:t.nowActiveWayInfoDetail["missing_data"]&&t.showYlPlay,expression:"nowActiveWayInfoDetail['missing_data'] && showYlPlay"}],staticClass:"center clear-fix"},[s("h4",[t._v(t._s(t.$t("gameTemplate.currentOmission")))]),s("div",{staticClass:"numbers clear-fix"},t._l(e.ylList,(function(e,l){return s("span",{key:l},[t._v(t._s(e))])})),0)]):t._e(),e.showBtn?s("div",{directives:[{name:"show",rawName:"v-show",value:t.nowActiveWayInfoDetail["hot_data"]&&t.showLrPlay,expression:"nowActiveWayInfoDetail['hot_data'] && showLrPlay"}],staticClass:"bottom clear-fix"},[s("h4",[t._v(t._s(t.$t("gameTemplate.coldAndHot120")))]),s("div",{staticClass:"numbers clear-fix"},t._l(e.lrList,(function(e,l){return s("span",{key:l},[t._v(t._s(e))])})),0)]):t._e()])})),0)},i=[],a=(s("d81d"),s("ac1f"),s("1276"),s("5530")),n=s("ddd0"),c=s("aae0"),r=s("2fca"),o=s("2f62"),u=s("368f"),m=s("cc1d"),h=s("82d1"),f={mixins:[n["a"],c["a"],m["a"],u["a"]],props:["flagCount","getShoppingCarList","nowActiveWayInfoDetail"],data:function(){return{numberList:[],numberAttrNameList:["isSelectAll","isSelectBig","isSelectSmall","isSelectOdd","isSelectEven"],selectedCounts:0}},computed:Object(a["a"])({},Object(o["c"])(["showYlPlay","showLrPlay"])),methods:{clickBall:function(t,e){t.isSelected=!t.isSelected,this.calculateBetCounts(e)},calculateBetCounts:function(t){var e=this,s=[],l=[];this.numberList.map((function(i){var a=[],n=i.numberList.length-1,c=0;i.numberList.map((function(t){t.isSelected&&c++})),i.numberList.map((function(){if(c>e.nowActiveWayInfoDetail["ball_limits"]){c--;var s=Math.round(Math.random()*n);while(t===s||!i.numberList[s].isSelected)s=Math.round(Math.random()*n);i.numberList[s].isSelected=!1}})),i.numberList.map((function(t){t.isSelected&&(l.push(+t.prizeLevel),a.push(t))})),s.push(a)})),l.length?this.$store.commit(r["F"],"".concat(Math.min.apply(this,l))):this.$store.commit(r["F"],"");var i=Object(h["a"])({betData:s.map((function(t){return t.map((function(t){return t.value}))})),areaSplitChar:this.nowActiveWayInfoDetail["area_split_char"],ballSplitChar:this.nowActiveWayInfoDetail["ball_split_char"],methodDetail:this.nowActiveWayInfoDetail["count_function"]});return i.labelInfo=Object(h["b"])(this.nowActiveWayInfoDetail["area_split_char"],this.nowActiveWayInfoDetail["ball_split_char"],s.map((function(t){return t.map((function(t){return t.label}))}))),this.selectedCounts=i.betCount,this.$store.commit(r["Eb"],this.selectedCounts),this.$store.commit(r["Ab"],i.selectLineCounts),i},resetNumberList:function(){this.numberList.map((function(t){t.isSelectAll=!1,t.isSelectBig=!1,t.isSelectSmall=!1,t.isSelectOdd=!1,t.isSelectEven=!1,t.numberList.map((function(t){t.isSelected=!1}))}))},getNumberListInfo:function(){this.numberList=[];var t=this.nowActiveWayInfoDetail;if(!t||!t["ball_strings"]||!t["ball_values"])return!1;for(var e=t["plat_rows"],s=t["ball_strings"].split("|"),l=t["ball_values"].split("|"),i=t["row_titles"].split(","),a=t["shortcut"].split(","),n=t["ball_prize_levels"].split(","),c=0;c<e;c++)this.numberList.push({type:i[c],showBtn:!!+a[c],isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,numberList:[],ylList:[],lrList:[]});s.length===l.length&&1===l.length?(s=s[0].split(","),l=l[0].split(","),this.numberList.map((function(t,e){t.type=i[e],console.log(s);for(var a=0;a<Math.min(s.length,l.length);a++)void 0!==s[a]&&t.numberList.push({isSelected:!1,label:s[a],value:l[a],prizeLevel:n[a]?n[a]:"1"})}))):(s=s.map((function(t){return t.split(",")})),l=l.map((function(t){return t.split(",")})),this.numberList.map((function(t,e){t.type=i[e];for(var a=0;a<Math.min(s[e].length,l[e].length);a++)void 0!==s[e][a]&&t.numberList.push({isSelected:!1,label:s[e][a],value:l[e][a],prizeLevel:n[a]?n[a]:"1"})})))}},watch:{flagCount:function(){var t=this.calculateBetCounts();if(0!==t.result)return this.getShoppingCarList(!1,!1,0);this.getShoppingCarList(t.numberStr,this.selectedCounts,void 0,t.labelInfo)},nowActiveWayInfoDetail:function(){this.getNumberListInfo()}},created:function(){this.getNumberListInfo()}},p=f,b=(s("e165"),s("2877")),d=Object(b["a"])(p,l,i,!1,null,"6d6ed25f",null);e["default"]=d.exports},aae0:function(t,e,s){"use strict";var l=s("5530"),i=s("2f62");e["a"]={props:["nowPlayWayInfo"],computed:Object(l["a"])({},Object(i["c"])(["clearFlag"])),watch:{clearFlag:function(){this.resetNumberList()}}}},cc1d:function(t,e,s){"use strict";var l=s("5530"),i=s("2f62"),a=s("2fca");e["a"]={data:function(){return{name:"lrylBtnControltrue"}},computed:Object(l["a"])({},Object(i["c"])(["lrylBtnControl"])),created:function(){this.$store.commit(a["V"],!0)}}},e165:function(t,e,s){"use strict";var l=s("f77b"),i=s.n(l);i.a},f77b:function(t,e,s){}}]);