(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d570520"],{"099a8":function(t,e,i){},3514:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"choice-number-list"},t._l(t.numberList,(function(e,l){return i("li",{key:l},[i("div",{staticClass:"top"},[i("div",{staticClass:"top"},[i("h4",[t._v(t._s(e.type))]),i("div",{staticClass:"balls dice-group"},[t._l(e.numberList,(function(e,l){return e.ballValue?i("div",{key:l,staticClass:"double-dice",on:{click:function(i){return t.clickBall(e)}}},t._l(e.ballValue,(function(l,n){var s;return i("p",{key:n,staticClass:"dice dice-box",class:(s={},s["cell"+l]=!0,s.selected=e.isSelected,s),domProps:{innerHTML:t._s(t.cellHtml(l))}})})),0):t._e()})),t._l(e.numberList,(function(e,l){var n;return e.ballValue?t._e():i("div",{key:l,staticClass:"single-dice dice-box",class:(n={selected:e.isSelected},n["cell"+e.value]=!0,n),domProps:{innerHTML:t._s(t.cellHtml(e.value))},on:{click:function(i){return t.clickBall(e,l)}}})}))],2)])])])})),0)},n=[],s=(i("d81d"),i("ac1f"),i("1276"),i("5530")),a=i("ddd0"),c=i("aae0"),r=i("2fca"),u=i("2f62"),o=i("89d5"),f=i("82d1"),h=i("4260"),m={mixins:[a["a"],c["a"],o["a"]],props:["flagCount","getShoppingCarList","nowActiveWayInfoDetail"],data:function(){return{numberList:[],numberAttrNameList:["isSelectAll","isSelectBig","isSelectSmall","isSelectOdd","isSelectEven"],selectedCounts:0}},computed:Object(s["a"])({},Object(u["c"])(["showYlPlay","showLrPlay"])),methods:{clickBall:function(t,e){t.isSelected=!t.isSelected,this.calculateBetCounts(e)},cellHtml:function(t){return Object(h["a"])(t)},calculateBetCounts:function(t){var e=this,i=[],l=[];this.numberList.map((function(n){var s=[],a=n.numberList.length-1,c=0;n.numberList.map((function(t){t.isSelected&&c++})),n.numberList.map((function(){if(c>e.nowActiveWayInfoDetail["ball_limits"]){c--;var i=Math.round(Math.random()*a);while(t===i||!n.numberList[i].isSelected)i=Math.round(Math.random()*a);n.numberList[i].isSelected=!1}})),n.numberList.map((function(t){t.isSelected&&(l.push(+t.prizeLevel),s.push(t))})),i.push(s)})),l.length?this.$store.commit(r["E"],"".concat(Math.min.apply(this,l))):this.$store.commit(r["E"],"");var n=Object(f["a"])({betData:i.map((function(t){return t.map((function(t){return t.value}))})),areaSplitChar:this.nowActiveWayInfoDetail["area_split_char"],ballSplitChar:this.nowActiveWayInfoDetail["ball_split_char"],methodDetail:this.nowActiveWayInfoDetail["count_function"]});return n.labelInfo=Object(f["b"])(this.nowActiveWayInfoDetail["area_split_char"],this.nowActiveWayInfoDetail["ball_split_char"],i.map((function(t){return t.map((function(t){return t.label}))}))),this.selectedCounts=n.betCount,this.$store.commit(r["Db"],this.selectedCounts),this.$store.commit(r["zb"],n.selectLineCounts),n},resetNumberList:function(){this.numberList.map((function(t){t.isSelectAll=!1,t.isSelectBig=!1,t.isSelectSmall=!1,t.isSelectOdd=!1,t.isSelectEven=!1,t.numberList.map((function(t){t.isSelected=!1}))}))},getNumberListInfo:function(){this.numberList=[];var t=this.nowActiveWayInfoDetail;if(!t||!t["ball_strings"]||!t["ball_values"])return!1;for(var e=2,i=t["ball_strings"].split("|"),l=t["ball_values"].split("|"),n=t["row_titles"].split(","),s=t["ball_prize_levels"].split(","),a=0;a<e;a++)this.numberList.push({type:n[a],isSelectAll:!1,isSelectBig:!1,isSelectSmall:!1,isSelectOdd:!1,isSelectEven:!1,numberList:[],ylList:[],lrList:[]});i.length===l.length&&1===l.length?(i=i[0].split(","),l=l[0].split(","),this.numberList.map((function(t,e){t.type=n[e];for(var a=0;a<Math.min(i.length,l.length);a++)t.numberList.push({isSelected:!1,label:i[a],ballValue:l[a],value:l[a],prizeLevel:s[a]?s[a]:"1"})}))):(i=i.map((function(t){return t.split(",")})),l=l.map((function(t){return t.split(",")})),this.numberList.map((function(t,e){t.type=n[e];for(var a=0;a<Math.min(i[e].length,l[e].length);a++)t.numberList.push({isSelected:!1,label:i[e][a],ballValue:l[e][a].length>1?l[e][a]:void 0,value:l[e][a],prizeLevel:s[a]?s[a]:"1"})})))}},watch:{flagCount:function(){var t=this.calculateBetCounts();if(0!==t.result)return this.getShoppingCarList(!1,!1,0);this.getShoppingCarList(t.numberStr,this.selectedCounts,void 0,t.labelInfo)},nowActiveWayInfoDetail:function(){this.getNumberListInfo()}},created:function(){this.getNumberListInfo()}},b=m,p=(i("93f1"),i("3b3b"),i("2877")),d=Object(p["a"])(b,l,n,!1,null,"771e5575",null);e["default"]=d.exports},"3b3b":function(t,e,i){"use strict";var l=i("583e"),n=i.n(l);n.a},"583e":function(t,e,i){},"89d5":function(t,e,i){"use strict";var l=i("5530"),n=i("2f62"),s=i("2fca");e["a"]={data:function(){return{name:"lrylBtnControlfalse"}},computed:Object(l["a"])({},Object(n["c"])(["lrylBtnControl","isShowMenuBtnsInHezhi"])),created:function(){this.$store.commit(s["U"],!1)}}},"93f1":function(t,e,i){"use strict";var l=i("099a8"),n=i.n(l);n.a},aae0:function(t,e,i){"use strict";var l=i("5530"),n=i("2f62");e["a"]={props:["nowPlayWayInfo"],computed:Object(l["a"])({},Object(n["c"])(["clearFlag"])),watch:{clearFlag:function(){this.resetNumberList()}}}}}]);