(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36b849b8"],{5092:function(t,s,i){},"98c6":function(t,s,i){"use strict";var e=i("5092"),n=i.n(e);n.a},b070:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"game-main"},[t.isIm?i("div",{staticClass:"game-info"},[i("ul",[i("li",[i("div",{staticClass:"logo"},[i("a",{attrs:{href:"javascript:;"}},[i("el-image",{staticClass:"betting-lottery-logo",attrs:{src:t.gameDetail.logo,fit:"scale-down"}},[i("div",{staticClass:"error-image-slot",attrs:{slot:"error"},slot:"error"})])],1)])]),i("li",{staticStyle:{width:"600px"}},[i("div",{staticClass:"lottery-number lottery-number-im"},[t._m(0),i("div",{staticClass:"ball-list-im"},t._l(t.imWnNumberList,(function(s,e){return i("div",{key:e,staticClass:"number-ball-list animation-ease text_color",style:{transform:s.transform,transitionProperty:t.transform},on:{transitionend:function(s){return t.showBetResult(e)}}},t._l(t.loopNumber,(function(s){return i("div",{key:s},[t._l(t.ballList,(function(s,e){return i("span",{key:e},[t._v(t._s(s))])})),i("span",[t._v("-")])],2)})),0)})),0)])]),i("li",{staticStyle:{width:"450px"}},[i("div",{staticClass:"lottery-number",staticStyle:{width:"450px"}},[t._m(1),i("div",{staticClass:"record-im-game-table-wrapper"},[i("ul",[i("li",{staticClass:"issue"},[t._v("开奖号码")]),t._l(t.instantWnNumberList,(function(s,e){return e<3?i("li",{key:e},t._l(s.wn_numberList,(function(s,e){return i("span",{key:e},[t._v(t._s(s))])})),0):t._e()}))],2)])])])])]):i("div",{staticClass:"game-info"},[i("ul",{staticClass:"clear-fix"},[i("li",[i("div",{staticClass:"logo"},[i("a",{class:{"no-bg":!t.isShowColorInLogo},attrs:{href:"javascript:;"}},[i("el-image",{staticClass:"betting-lottery-logo",attrs:{src:t.gameDetail.logo,fit:"scale-down"}},[i("div",{staticClass:"error-image-slot",attrs:{slot:"error"},slot:"error"})])],1)])]),i("li",[i("div",{staticClass:"lottery-time"},[i("div",{staticClass:"left"},[i("div",{staticClass:"white-bg"},[t._v(" "+t._s(t.$t("gameInfo.the"))+" "),i("i",{staticClass:"text_color"},[t._v(t._s(t.sscAwardInfo["issue"]))]),t._v(" "+t._s(t.$t("gameInfo.stage"))+" ")]),-1!==t.openPromptVoice?i("div",[i("p",{staticClass:"white-bg"},[t._v(t._s(t.$t("gameInfo.lotteryTime")))]),i("span",{staticClass:"voice text_color",on:{click:function(s){return t.setVolumeWinFlagFn("volum")}}},[t.openPromptVoice?i("i",{staticClass:"icon-volume-medi"}):i("i",{staticClass:"icon-volume-mute2"})])]):t._e()]),i("div",{staticClass:"time"},[i("span",{staticClass:"hour"},[t._v(t._s(t.endTimeInfo.hour))]),i("i",[t._v(":")]),i("span",{staticClass:"minute"},[t._v(t._s(t.endTimeInfo.min))]),i("i",[t._v(":")]),i("span",{staticClass:"second"},[t._v(t._s(t.endTimeInfo.sec))])])])]),i("li",[i("div",{staticClass:"lottery-number"},[i("div",{staticClass:"left"},[i("div",{staticClass:"white-bg"},[t._v(" "+t._s(t.$t("gameInfo.the"))+" "),i("i",{staticClass:"text_color"},[t._v(t._s(t.sscLastWnNumber["issue"]))]),t._v(" "+t._s(t.$t("gameInfo.stage"))+" ")]),-1!==t.openPromptVoice?i("div",[i("p",{staticClass:"white-bg"},[t._v(t._s(t.$t("gameInfo.lotteryNumber")))]),i("el-switch",{attrs:{"inactive-color":"#dcdfe6"},model:{value:t.winningReminder,callback:function(s){t.winningReminder=s},expression:"winningReminder"}})],1):t._e()]),i("div",{staticClass:"ball-list"},t._l(t.wnNumberList,(function(s,e){return i("span",{key:e,staticClass:"number-ball text_color"},[t._v(t._s(s))])})),0)])])])])])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"left"},[i("div",{staticClass:"white-bg"},[t._v("开奖号码")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"left"},[i("div",{staticClass:"white-bg"},[t._v("开奖记录")])])}],a=(i("99af"),i("4160"),i("d81d"),i("ac1f"),i("1276"),i("159b"),i("5530")),r=i("2f62"),o=i("510f"),l=i("cc5d"),c=i("2fca"),m=i("531c"),u=i("d6b0"),f={mixins:[o["a"],l["a"]],data:function(){return{imWnNumberList:[],ballList:["01","02","03","04","05","06","07","08","09","10","11"],transform:"transform",instantWnNumberList:[],loopNumber:5}},methods:{showBetResult:function(t){var s=this;if(t===this.imWnNumberList.length-1&&(this.GetInstantWnNumberList(),this.$store["dispatch"]("getBettingRecordList",{isClick:!1})),t===this.imWnNumberList.length-1){var i=(new Date).getTime();if(i-this.dateTime<u["q"])return;this.dateTime=i,0===this.lotteryNumberLastImInfo["winNum"]?(this.$message({message:"第".concat(this.imNowOpenCounts+1,"次开奖, 很遗憾, 你没有中奖, 请再接再厉"),type:"error"}),setTimeout((function(){s.$store.commit(c["J"],s.imNowOpenCounts+1)}),u["q"])):(this.$message({message:"第".concat(this.imNowOpenCounts+1,"次开奖, 恭喜您中奖, 中奖金额为").concat(this.lotteryNumberLastImInfo["winMoney"],"元"),type:"success"}),console.log(this.isStopWin),setTimeout((function(){s.isStopWin?s.$store.commit(c["J"],"stopAndWin"):s.$store.commit(c["J"],s.imNowOpenCounts+1)}),u["q"]))}},GetInstantWnNumberList:function(){var t=this;Object(m["f"])(this.lotteryId).then((function(s){if(0===s.errno)for(var i in t.instantWnNumberList=s.data,s.data)t.instantWnNumberList[i].wn_numberList=s.data[i].wn_number.split(" ")}))},setImWnNumberList:function(){for(var t=[],s=0;s<5;s++)t.push({transform:"translate3d(0, -".concat(73*(this.loopNumber*(this.ballList.length+1)-1),"px, 0)")});this.$set(this,"imWnNumberList",t)}},computed:Object(a["a"])({},Object(r["c"])({menuList:"menu"}),{},Object(r["c"])(["isChoiceShow","szcpMenuList","lotteryId","sscAwardInfo","sscLastWnNumber","userInfo","gameDetail","isIm","lotteryNumberLastImInfo","imNowOpenCounts","isStopWin"]),{wnNumberList:function(){var t=this.sscLastWnNumber["wn_number"];return t?t.split(" "):["??","??","??","??","??"]}}),watch:{lotteryNumberLastImInfo:function(t,s){var i=this;if(t&&t.result&&s){this.transform="none";var e=s.result.split(" ");this.imWnNumberList=e.map((function(t){return{transform:"translate3d(0, ".concat(-73*(parseFloat(t)-1+12*(i.loopNumber-1)),"px, 0)")}})),setTimeout((function(){i.transform="transform";var s=t.result.split(" ");s.forEach((function(t,s){setTimeout((function(){i.imWnNumberList[s].transform="translate3d(0, ".concat(-73*(parseFloat(t)-1),"px, 0)")}),300*s)}))}),100)}if(t&&t.result&&!s){var n=t.result.split(" ");n.forEach((function(t,s){setTimeout((function(){i.imWnNumberList[s].transform="translate3d(0, ".concat(-73*(parseFloat(t)-1),"px, 0)")}),150*s)}))}},isIm:function(t){t&&(this.GetInstantWnNumberList(),this.setImWnNumberList())},lotteryId:function(){this.isIm&&this.GetInstantWnNumberList()}},created:function(){this.setImWnNumberList()}},b=f,d=(i("98c6"),i("2877")),v=Object(d["a"])(b,e,n,!1,null,"4b9861c1",null);s["default"]=v.exports}}]);