(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42713652"],{2802:function(t,s,e){"use strict";var i=e("ddb7"),n=e.n(i);n.a},cd86:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"game-main"},[e("div",{staticClass:"game-info"},[e("ul",{staticClass:"clear-fix"},[e("li",[e("div",{staticClass:"logo"},[e("a",{class:{"no-bg":!t.isShowColorInLogo},attrs:{href:"javascript:;"}},[e("el-image",{staticClass:"betting-lottery-logo",attrs:{src:t.gameDetail.logo,fit:"scale-down"}},[e("div",{staticClass:"error-image-slot",attrs:{slot:"error"},slot:"error"})])],1)])]),e("li",[e("div",{staticClass:"lottery-time"},[e("div",{staticClass:"left"},[e("div",{staticClass:"white-bg"},[t._v(" "+t._s(t.$t("gameInfo.the"))+" "),e("i",{staticClass:"text_color"},[t._v(t._s(t.sscAwardInfo["issue"]))]),t._v(" "+t._s(t.$t("gameInfo.stage"))+" ")]),-1!==t.openPromptVoice?e("div",[e("p",{staticClass:"white-bg"},[t._v(t._s(t.$t("gameInfo.lotteryTime")))]),e("span",{staticClass:"voice text_color",on:{click:function(s){return t.setVolumeWinFlagFn("volum")}}},[t.openPromptVoice?e("i",{staticClass:"icon-volume-medi"}):e("i",{staticClass:"icon-volume-mute2"})])]):t._e()]),e("div",{staticClass:"time"},[e("span",{staticClass:"hour"},[t._v(t._s(t.endTimeInfo.hour))]),e("i",[t._v(":")]),e("span",{staticClass:"minute"},[t._v(t._s(t.endTimeInfo.min))]),e("i",[t._v(":")]),e("span",{staticClass:"second"},[t._v(t._s(t.endTimeInfo.sec))])])])]),e("li",[e("div",{staticClass:"lottery-number"},[e("div",{staticClass:"left"},[e("div",{staticClass:"white-bg"},[t._v(" "+t._s(t.$t("gameInfo.the"))+" "),e("i",{staticClass:"text_color"},[t._v(t._s(t.sscLastWnNumber["issue"]))]),t._v(" "+t._s(t.$t("gameInfo.stage"))+" ")]),-1!==t.openPromptVoice?e("div",[e("p",{staticClass:"white-bg"},[t._v(t._s(t.$t("gameInfo.lotteryNumber")))]),e("el-switch",{attrs:{"inactive-color":"#dcdfe6"},model:{value:t.winningReminder,callback:function(s){t.winningReminder=s},expression:"winningReminder"}})],1):t._e()]),e("div",{staticClass:"ball-list"},t._l(t.wnNumberList,(function(s,i){var n;return e("span",{key:i,staticClass:"number-ball text_color",class:(n={},n[s.className]=!0,n)},[t._v(t._s(s.label))])})),0)])])])])])},n=[],a=(e("7db0"),e("d81d"),e("ac1f"),e("1276"),e("5530")),l=e("2f62"),r=e("510f"),o=e("cc5d"),c=["01","02","07","08","12","13","18","19","23","24","29","30","34","35","40","45","46"],u=["03","04","09","10","14","15","20","25","26","31","36","37","41","42","47","48"],d=["05","06","11","16","17","21","22","27","28","32","33","38","39","43","44","49"],f={mixins:[r["a"],o["a"]],data:function(){return{}},methods:{},computed:Object(a["a"])({},Object(l["c"])({menuList:"menu"}),{},Object(l["c"])(["isChoiceShow","szcpMenuList","lotteryId","sscAwardInfo","sscLastWnNumber","userInfo","gameDetail"]),{wnNumberList:function(){var t,s=this.sscLastWnNumber["wn_number"];if(s&&s.length){s=s.split(" ").map((function(s){if(1===!s.split("+").length){var e=u.find((function(t){return t===s})),i=c.find((function(t){return t===s})),n=d.find((function(t){return t===s}));return{label:s,className:e?"blue":i?"red":n?"green":"yellow"}}var a=s.split("+")[0];t=s.split("+")[1];var l=u.find((function(t){return t===a})),r=c.find((function(t){return t===a})),o=d.find((function(t){return t===a}));return{label:a,className:l?"blue":r?"red":o?"green":"yellow"}}));var e=u.find((function(s){return s===t})),i=c.find((function(s){return s===t})),n=d.find((function(s){return s===t}));s.push({label:t,className:e?"blue":i?"red":n?"green":"yellow"})}else{s=[];for(var a=0;a<7;a++)s.push({label:"??",className:"yellow"})}return s}}),created:function(){}},m=f,v=(e("2802"),e("2877")),_=Object(v["a"])(m,i,n,!1,null,"16295f50",null);s["default"]=_.exports},ddb7:function(t,s,e){}}]);