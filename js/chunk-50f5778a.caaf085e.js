(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50f5778a"],{"400a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"choice-number-list qiyi-number-list"},t._l(t.numberList,(function(e,n){return i("li",{key:n},[i("div",{staticClass:"top top_1"},[i("div",{staticClass:"top"},[i("h4",[t._v(t._s(e.type))]),i("div",{staticClass:"balls clear-fix"},t._l(e.numberList,(function(n,l){return i("span",{key:l,staticClass:"ball",class:[{selected:n.isSelected,"dan-span":!e.showBtn,"wuxing-btn":"和值五行"===t.nowActiveWayInfoDetail["name"],"width-auto":n.label.length>2,colors:n.color},n.color?""+n.color:"",t.danSpanComputed],on:{click:function(e){return t.clickBall(n,l)}}},[t._v(t._s(n.label))])})),0)])])])})),0)},l=[],a=(i("d81d"),i("ac1f"),i("1276"),i("5530")),s=i("ddd0"),c=i("2f62"),o={props:["nowPlayWayInfo"],data:function(){return{}},computed:Object(a["a"])({},Object(c["c"])([""])),methods:{setNowPlayWayInfo:function(){var t=this.nowPlayWayInfo;if(!t||!t["ball_strings"]||!t["ball_values"])return!1;var e=t["ball_strings"].split("|"),i=t["ball_values"].split("|");e.length===i.length&&1===i.length?(e=e[0].split(","),i=i[0].split(","),this.numberList.map((function(t){t.numberList.map((function(t,n){t.isSelected=!1,t.value=i[n],t.label=e[n]}))}))):(e=e.map((function(t){return t.split(",")})),i=i.map((function(t){return t.split(",")})),this.numberList.map((function(t,n){t.numberList.map((function(t,l){t.isSelected=!1,t.label=e[n][l],t.value=i[n][l]}))})))}},created:function(){this.setNowPlayWayInfo()}},r=i("aae0"),u=i("2fca"),f=i("89d5"),m=i("82d1"),p={mixins:[s["a"],r["a"],f["a"],o],props:["flagCount","getShoppingCarList","nowActiveWayInfoDetail"],data:function(){return{numberList:[],numberAttrNameList:["isSelectAll","isSelectBig","isSelectSmall","isSelectOdd","isSelectEven"],selectedCounts:0}},computed:Object(a["a"])({},Object(c["c"])(["showYlPlay","showLrPlay"]),{danSpanComputed:function(){return""}}),methods:{clickBall:function(t,e){t.isSelected=!t.isSelected,this.calculateBetCounts(e)},calculateBetCounts:function(t){var e=this,i=[],n=[];this.numberList.map((function(l){var a=[],s=l.numberList.length-1,c=0;l.numberList.map((function(t){t.isSelected&&c++})),l.numberList.map((function(){if(c>e.nowActiveWayInfoDetail["ball_limits"]){c--;var i=Math.round(Math.random()*s);while(i===t||!l.numberList[i].isSelected)i=Math.round(Math.random()*s);l.numberList[i].isSelected=!1}})),l.numberList.map((function(t){t.isSelected&&(n.push(+t.prizeLevel),a.push(t))})),i.push(a)})),n.length?this.$store.commit(u["E"],"".concat(Math.min.apply(this,n))):this.$store.commit(u["E"],"");var l=Object(m["a"])({betData:i.map((function(t){return t.map((function(t){return t.value}))})),areaSplitChar:this.nowActiveWayInfoDetail["area_split_char"],ballSplitChar:this.nowActiveWayInfoDetail["ball_split_char"],methodDetail:this.nowActiveWayInfoDetail["count_function"]});return l.labelInfo=Object(m["b"])(this.nowActiveWayInfoDetail["area_split_char"],this.nowActiveWayInfoDetail["ball_split_char"],i.map((function(t){return t.map((function(t){return t.label}))}))),this.selectedCounts=l.betCount,this.$store.commit(u["zb"],l.selectLineCounts),this.$store.commit(u["Db"],this.selectedCounts),l},resetNumberList:function(){this.numberList.map((function(t){t.isSelectAll=!1,t.isSelectBig=!1,t.isSelectSmall=!1,t.isSelectOdd=!1,t.isSelectEven=!1,t.numberList.map((function(t){t.isSelected=!1}))}))},getNumberListInfo:function(){this.numberList=[];var t=this.nowActiveWayInfoDetail;if(!t||!t["ball_strings"]||!t["ball_values"])return!1;var e=t["plat_rows"],i=t["ball_strings"].split("|"),n=t["ball_values"].split("|"),l=t["row_titles"].split(","),a=t["ball_prize_levels"].split(","),s=null;t["ball_color"]&&(s=t["ball_color"]),console.log(s);for(var c=0;c<e;c++)this.numberList.push({type:l[c],isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,numberList:[],ylList:[],lrList:[]});i=i[0].split(","),n=n[0].split(","),this.numberList.map((function(t,e){t.type=l[e];for(var c=0;c<Math.min(i.length,n.length);c++)t.numberList.push({isSelected:!1,label:i[c],value:n[c],prizeLevel:a[c]?a[c]:"1",color:s?s[n[c]]:null})})),console.log(this.numberList)}},watch:{flagCount:function(){var t=this.calculateBetCounts();if(0!==t.result)return this.getShoppingCarList(!1,!1,0);this.getShoppingCarList(t.numberStr,this.selectedCounts,void 0,t.labelInfo)},nowActiveWayInfoDetail:function(){this.getNumberListInfo()}},created:function(){this.getNumberListInfo()}},h=p,b=(i("cdd3"),i("2877")),d=Object(b["a"])(h,n,l,!1,null,"1f618ba0",null);e["default"]=d.exports},"89d5":function(t,e,i){"use strict";var n=i("5530"),l=i("2f62"),a=i("2fca");e["a"]={data:function(){return{name:"lrylBtnControlfalse"}},computed:Object(n["a"])({},Object(l["c"])(["lrylBtnControl","isShowMenuBtnsInHezhi"])),created:function(){this.$store.commit(a["U"],!1)}}},"9a09":function(t,e,i){},aae0:function(t,e,i){"use strict";var n=i("5530"),l=i("2f62");e["a"]={props:["nowPlayWayInfo"],computed:Object(n["a"])({},Object(l["c"])(["clearFlag"])),watch:{clearFlag:function(){this.resetNumberList()}}}},cdd3:function(t,e,i){"use strict";var n=i("9a09"),l=i.n(n);l.a}}]);
//# sourceMappingURL=chunk-50f5778a.caaf085e.js.map