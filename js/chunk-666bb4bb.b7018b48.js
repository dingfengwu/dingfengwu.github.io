(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-666bb4bb"],{4560:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"choice-number-list clear-fix"},[e._l(e.numberList,(function(n,i){return t("li",{key:i,staticClass:"clear-fix"},[t("div",{staticClass:"top top_1"},[t("div",{staticClass:"top"},[t("h4",[e._v(e._s(n.type))]),t("div",{staticClass:"balls clear-fix"},e._l(n.numberList,(function(n,i){return t("span",{key:i,staticClass:"ball",class:{selected:n.isSelected},on:{click:function(t){return e.clickBall(n,i)}}},[e._v(" "+e._s(n.label)+" ")])})),0)])])])})),t("li",[t("div",{staticClass:"renxuan-menu"},[t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectAll},on:{click:function(n){return e.selectAllNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.whole")))]),t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectBig},on:{click:function(n){return e.selectBigNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.big")))]),t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectSmall},on:{click:function(n){return e.selectSmallNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.small")))]),t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectOdd},on:{click:function(n){return e.selectOddNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.odd")))]),t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectEven},on:{click:function(n){return e.selectEvenNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.even")))]),t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectQuality},on:{click:function(n){return e.selectQualityNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.quality")))]),t("span",{staticClass:"select_balls_change",class:{"now-hov":e.renxuanMenuInfo.isSelectComposite},on:{click:function(n){return e.selectCompositeNumber(e.calculateBetCounts,e.maxCount)}}},[e._v(e._s(e.$t("gameTemplate.Composite")))]),t("span",{staticClass:"select_balls_change",on:{click:function(n){return e.clearNumber(e.calculateBetCounts)}}},[e._v(e._s(e.$t("gameTemplate.clear")))])])])],2)},s=[],u=(t("d81d"),t("ac1f"),t("1276"),t("5530")),a=(t("7db0"),t("c975"),t("2f62")),l=t("4260"),c={data:function(){return{renxuanMenuInfo:{isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,isSelectQuality:!1,isSelectComposite:!1}}},computed:Object(u["a"])({},Object(a["c"])(["lotteryId"])),methods:Object(u["a"])({},Object(a["b"])([]),{},Object(a["d"])([]),{selectAllNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(79*Math.random()+1);-1===i.indexOf(s)&&i.push(s)}i.map((function(e){return t.numberList.find((function(n){return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectAll=!this.renxuanMenuInfo.isSelectAll,this.renxuanMenuInfo)"isSelectAll"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e){e.numberList.map((function(e){if(t.renxuanMenuInfo.isSelectAll&&u>=n)return!0;e.isSelected=t.renxuanMenuInfo.isSelectAll,e.isSelected&&u++}))}))}e&&e()},selectBigNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(39*Math.random()+41);-1===i.indexOf(s)&&i.push(s)}i.map((function(e){return t.numberList.find((function(n,t){if(0!==t)return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectBig=!this.renxuanMenuInfo.isSelectBig,this.renxuanMenuInfo)"isSelectBig"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e,i){i<Math.ceil(t.numberList.length/2)?e.numberList.map((function(e){e.isSelected=!1})):e.numberList.map((function(e){if(t.renxuanMenuInfo.isSelectBig&&u>=n)return!0;e.isSelected=t.renxuanMenuInfo.isSelectBig,e.isSelected&&u++}))}))}e&&e()},selectSmallNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(39*Math.random()+1);-1===i.indexOf(s)&&i.push(s)}i.map((function(e){return t.numberList.find((function(n){return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectSmall=!this.renxuanMenuInfo.isSelectSmall,this.renxuanMenuInfo)"isSelectSmall"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e,i){i>=Math.ceil(t.numberList.length/2)?e.numberList.map((function(e){e.isSelected=!1})):e.numberList.map((function(e){if(t.renxuanMenuInfo.isSelectSmall&&u>=n)return!0;e.isSelected=t.renxuanMenuInfo.isSelectSmall,e.isSelected&&u++}))}))}e&&e()},selectOddNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(79*Math.random()+1);-1===i.indexOf(s)&&s%2!==0&&i.push(s)}i.map((function(e){return t.numberList.find((function(n){return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectOdd=!this.renxuanMenuInfo.isSelectOdd,this.renxuanMenuInfo)"isSelectOdd"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e){e.numberList.map((function(e){if(e.value%2!==0)return t.renxuanMenuInfo.isSelectOdd&&u>=n||(e.isSelected=t.renxuanMenuInfo.isSelectOdd,e.isSelected&&u++),!0;e.isSelected=!1}))}))}e&&e()},selectEvenNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(79*Math.random()+1);-1===i.indexOf(s)&&s%2===0&&i.push(s)}i.map((function(e){return t.numberList.find((function(n){return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectEven=!this.renxuanMenuInfo.isSelectEven,this.renxuanMenuInfo)"isSelectEven"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e){e.numberList.map((function(e){if(e.value%2===0)return t.renxuanMenuInfo.isSelectEven&&u>=n||(e.isSelected=t.renxuanMenuInfo.isSelectEven,e.isSelected&&u++),!0;e.isSelected=!1}))}))}e&&e()},selectQualityNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(79*Math.random()+1);-1===i.indexOf(s)&&Object(l["f"])(s)&&i.push(s)}i.map((function(e){return t.numberList.find((function(n){return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectQuality=!this.renxuanMenuInfo.isSelectQuality,this.renxuanMenuInfo)"isSelectQuality"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e){e.numberList.map((function(e){if(Object(l["f"])(e.value))return t.renxuanMenuInfo.isSelectQuality&&u>=n||(e.isSelected=t.renxuanMenuInfo.isSelectQuality,e.isSelected&&u++),!0;e.isSelected=!1}))}))}e&&e()},selectCompositeNumber:function(e,n){var t=this;if(this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),n){var i=[];while(i.length<n){var s=Math.round(79*Math.random()+1);-1!==i.indexOf(s)||Object(l["f"])(s)||i.push(s)}i.map((function(e){return t.numberList.find((function(n){return n.numberList.find((function(n){if(n.value===e)return n.isSelected=!0,!0}))}))}))}else{var u=0;for(var a in this.renxuanMenuInfo.isSelectComposite=!this.renxuanMenuInfo.isSelectComposite,this.renxuanMenuInfo)"isSelectComposite"!==a&&(this.renxuanMenuInfo[a]=!1);this.numberList.map((function(e){e.numberList.map((function(e){if(!Object(l["f"])(e.value)&&1!==e.value)return t.renxuanMenuInfo.isSelectComposite&&u>=n||(e.isSelected=t.renxuanMenuInfo.isSelectComposite,e.isSelected&&u++),!0;e.isSelected=!1}))}))}e&&e()},clearNumber:function(e){for(var n in this.renxuanMenuInfo)this.renxuanMenuInfo[n]=!1;this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected=!1}))})),e&&e()}}),created:function(){}},r=t("aae0"),o=t("2fca"),f=t("89d5"),m=t("82d1"),h={mixins:[c,r["a"],f["a"]],props:["flagCount","getShoppingCarList","nowActiveWayInfoDetail"],data:function(){return{numberList:[],numberAttrNameList:["isSelectAll","isSelectBig","isSelectSmall","isSelectOdd","isSelectEven"],selectedCounts:0,maxCount:0}},computed:Object(u["a"])({},Object(a["c"])(["showYlPlay","showLrPlay"])),methods:{clickBall:function(e,n){var t=0;this.numberList.map((function(e){e.numberList.map((function(e){e.isSelected&&t++}))})),t>=this.maxCount&&!e.isSelected?this.$message({message:this.$t("errorMessage.errorMessage14"),type:"error"}):(e.isSelected=!e.isSelected,this.calculateBetCounts(n))},calculateBetCounts:function(e){var n=this,t=[],i=[],s=[];this.numberList.map((function(u){var a=u.numberList.length-1,l=0;u.numberList.map((function(e){e.isSelected&&l++})),u.numberList.map((function(){if(l>n.nowActiveWayInfoDetail["ball_limits"]){l--;var t=Math.round(Math.random()*a);while(e===t||!u.numberList[t].isSelected)t=Math.round(Math.random()*a);u.numberList[t].isSelected=!1}})),u.numberList.map((function(e){e.isSelected&&(i.push(+e.prizeLevel),s.push(e))})),t.push(s)})),i.length?this.$store.commit(o["E"],"".concat(Math.min.apply(this,i))):this.$store.commit(o["E"],"");var u=Object(m["a"])({betData:t.map((function(e){return e.map((function(e){return e.value}))})),areaSplitChar:this.nowActiveWayInfoDetail["area_split_char"],ballSplitChar:this.nowActiveWayInfoDetail["ball_split_char"],methodDetail:this.nowActiveWayInfoDetail["count_function"]});return u.labelInfo=Object(m["b"])(this.nowActiveWayInfoDetail["area_split_char"],this.nowActiveWayInfoDetail["ball_split_char"],t.map((function(e){return e.map((function(e){return e.label}))}))),this.selectedCounts=u.betCount,this.$store.commit(o["zb"],u.selectLineCounts),this.$store.commit(o["Db"],this.selectedCounts),u},resetNumberList:function(){this.renxuanMenuInfo.isSelectAll=!1,this.renxuanMenuInfo.isSelectBig=!1,this.renxuanMenuInfo.isSelectSmall=!1,this.renxuanMenuInfo.isSelectOdd=!1,this.renxuanMenuInfo.isSelectEven=!1,this.renxuanMenuInfo.isSelectQuality=!1,this.renxuanMenuInfo.isSelectComposite=!1,this.numberList.map((function(e){e.isSelectAll=!1,e.isSelectBig=!1,e.isSelectSmall=!1,e.isSelectOdd=!1,e.isSelectEven=!1,e.numberList.map((function(e){e.isSelected=!1}))}))},getNumberListInfo:function(){this.numberList=[];var e=this.nowActiveWayInfoDetail;if(!e||!e["ball_strings"]||!e["ball_values"])return!1;var n=e["plat_rows"],t=e["ball_strings"].split("|"),i=e["ball_values"].split("|"),s=e["row_titles"].split(","),u=e["ball_prize_levels"].split(",");this.maxCount=+e["ball_limits"];for(var a=0;a<n;a++)this.numberList.push({type:s[a],showBtn:!1,isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,numberList:[],ylList:[],lrList:[]});t=t.map((function(e){return e.split(",")})),i=i.map((function(e){return e.split(",")})),this.numberList.map((function(e,n){e.type=s[n];for(var a=0,l=0;l<t[a].length;l++){var c=n*t[a].length+l;e.numberList.push({isSelected:!1,label:t[n][l],value:+i[a][c],prizeLevel:u[l]?u[l]:"1"})}}))}},watch:{flagCount:function(){var e=this.calculateBetCounts();if(0!==e.result)return this.getShoppingCarList(!1,!1,0);this.getShoppingCarList(e.numberStr,this.selectedCounts,void 0,e.labelInfo)},nowActiveWayInfoDetail:function(){this.getNumberListInfo()}},created:function(){this.getNumberListInfo()}},b=h,d=(t("95c6"),t("2877")),p=Object(d["a"])(b,i,s,!1,null,"9cbb1c66",null);n["default"]=p.exports},"72ad":function(e,n,t){},"89d5":function(e,n,t){"use strict";var i=t("5530"),s=t("2f62"),u=t("2fca");n["a"]={data:function(){return{name:"lrylBtnControlfalse"}},computed:Object(i["a"])({},Object(s["c"])(["lrylBtnControl","isShowMenuBtnsInHezhi"])),created:function(){this.$store.commit(u["U"],!1)}}},"95c6":function(e,n,t){"use strict";var i=t("72ad"),s=t.n(i);s.a},aae0:function(e,n,t){"use strict";var i=t("5530"),s=t("2f62");n["a"]={props:["nowPlayWayInfo"],computed:Object(i["a"])({},Object(s["c"])(["clearFlag"])),watch:{clearFlag:function(){this.resetNumberList()}}}}}]);