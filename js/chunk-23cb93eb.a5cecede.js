(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23cb93eb"],{"366d":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"game-main"},[e("div",{staticClass:"game-info pk10-game_info"},[e("ul",[e("li",[e("div",{staticClass:"logo"},[e("a",{class:{"no-bg":!t.isShowColorInLogo},attrs:{href:"javascript:;"}},[e("el-image",{staticClass:"betting-lottery-logo",attrs:{src:t.gameDetail.logo,fit:"scale-down"}},[e("div",{staticClass:"error-image-slot",attrs:{slot:"error"},slot:"error"})])],1)])]),e("li",[e("div",{staticClass:"lottery-time"},[e("div",{staticClass:"left"},[e("div",{staticClass:"white-bg"},[t._v(" "+t._s(t.$t("gameInfo.the"))+" "),e("i",{staticClass:"text_color"},[t._v(t._s(t.sscAwardInfo["issue"]))]),t._v(" "+t._s(t.$t("gameInfo.stage"))+" ")]),-1!==t.openPromptVoice?e("div",[e("p",{staticClass:"white-bg"},[t._v(t._s(t.$t("gameInfo.lotteryTime")))]),e("span",{staticClass:"voice text_color",on:{click:function(s){return t.setVolumeWinFlagFn("volum")}}},[t.openPromptVoice?e("i",{staticClass:"icon-volume-medi"}):e("i",{staticClass:"icon-volume-mute2"})])]):t._e()]),e("div",{staticClass:"time"},[e("span",{staticClass:"hour"},[t._v(t._s(t.endTimeInfo.hour))]),e("i",[t._v(":")]),e("span",{staticClass:"minute"},[t._v(t._s(t.endTimeInfo.min))]),e("i",[t._v(":")]),e("span",{staticClass:"second"},[t._v(t._s(t.endTimeInfo.sec))])])])]),e("li",[e("div",{staticClass:"lottery-number"},[e("div",{staticClass:"left"},[e("div",{staticClass:"white-bg"},[t._v(" "+t._s(t.$t("gameInfo.the"))+" "),e("span",{staticClass:"text_color"},[t._v(t._s(t.sscLastWnNumber["issue"]))]),t._v(" "+t._s(t.$t("gameInfo.stage"))+" ")]),-1!==t.openPromptVoice?e("div",[e("p",{staticClass:"white-bg"},[t._v(t._s(t.$t("gameInfo.lotteryNumber")))]),e("el-switch",{attrs:{"inactive-color":"#dcdfe6"},model:{value:t.winningReminder,callback:function(s){t.winningReminder=s},expression:"winningReminder"}})],1):t._e()]),e("div",{staticClass:"ball-list"},t._l(t.wnNumberList,(function(s,i){return e("span",{key:i,staticClass:"number-ball text_color"},[t._v(t._s(s))])})),0)])])])])])},a=[],n=(e("d81d"),e("ac1f"),e("1276"),e("5530")),o=e("2f62"),c=e("510f"),r=e("2fca"),l=e("cc5d"),u={mixins:[c["a"],l["a"]],data:function(){return{}},methods:{},computed:Object(n["a"])({},Object(o["c"])({menuList:"menu"}),{},Object(o["c"])(["isChoiceShow","szcpMenuList","lotteryId","sscAwardInfo","playTypeList","sscLastWnNumber","userInfo","gameDetail","pk10ShowStatus"]),{wnNumberList:function(){var t=this.sscLastWnNumber["wn_number"];return t?t.split(" ").map((function(t){return+t})):["?","?","?","?","?","?","?","?","?","?"]},imgArr:function(){for(var t=[],s=0;s<3;s++)t.push(this["car"+this.wnNumberList[s]]);return t}}),created:function(){this.$store.commit(r["rb"],0)},beforeRouteLeave:function(t,s,e){var i=this;e(),this.$nextTick((function(){i.$store.commit(r["rb"],null)}))}},m=u,v=(e("a5bb"),e("2877")),d=Object(v["a"])(m,i,a,!1,null,"984cd2ea",null);s["default"]=d.exports},6607:function(t,s,e){},a5bb:function(t,s,e){"use strict";var i=e("6607"),a=e.n(i);a.a}}]);