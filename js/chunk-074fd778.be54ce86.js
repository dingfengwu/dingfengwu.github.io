(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-074fd778"],{1142:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"main personal-center",attrs:{shadow:"true"}},[n("div",{staticClass:"header clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"parent-nav"},t._l(t.parentNav,(function(e,a){return n("el-button",{key:a,class:t.activeParentNav===a?"button-nav-active":"",attrs:{round:"",size:"medium"},on:{click:function(e){return t.setSubNav(a)}}},[t._v(t._s(e.text))])})),1),t.subNavAvilabel?n("div",{staticClass:"sub-nav"},t._l(t.currentSubNav,(function(e,a){return n("el-link",{key:a,class:e.index===t.activeSubNav?"button-nav-active":"",attrs:{underline:!1,href:e.href}},[t._v(t._s(e.text))])})),1):t._e()]),n("div",{staticClass:"body"},[n("content-template",{attrs:{path:t.path}})],1)])},r=[],i=(n("4160"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),n("5530")),s=n("a18c"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-center-content"},[n("keep-alive",{attrs:{max:20}},[n(t.currentContent,{tag:"component"})],1)],1)},c=[],l=(n("d3b7"),n("5319"),{name:"personal-center-content-template",props:["path"],components:{userAccount:function(){return n.e("chunk-5148aed1").then(n.bind(null,"6ccb"))},userBank:function(){return n.e("chunk-1bff9500").then(n.bind(null,"40bd"))},userLimit:function(){return n.e("chunk-2d0e5986").then(n.bind(null,"94c8"))},userOrder:function(){return n.e("chunk-2d230e93").then(n.bind(null,"edfd"))},userBets:function(){return n.e("chunk-2d216484").then(n.bind(null,"c298"))},userTasks:function(){return n.e("chunk-2d0aab67").then(n.bind(null,"11d5"))},userMessages:function(){return n.e("chunk-2d0b59d7").then(n.bind(null,"1a3d"))},userLoginLog:function(){return n.e("chunk-2d0e5b44").then(n.bind(null,"962c"))},financialDeposits:function(){return n.e("chunk-4735a0ad").then(n.bind(null,"4715"))},financialWithdrawals:function(){return n.e("chunk-ce762bda").then(n.bind(null,"dd51"))},financialDepositRecord:function(){return n.e("chunk-728f8064").then(n.bind(null,"bc99"))},financialWithdrawalRecord:function(){return n.e("chunk-34dca4b7").then(n.bind(null,"354c"))},notice:function(){return n.e("chunk-010499b8").then(n.bind(null,"378e"))},userAmountChangingRecord:function(){return n.e("chunk-2d0e1480").then(n.bind(null,"7a88"))},userIndividualStatistics:function(){return n.e("chunk-2d213de0").then(n.bind(null,"af05"))},userDragonTigerTie:function(){return n.e("chunk-067e56a0").then(n.bind(null,"61df"))},userTrendChart:function(){return n.e("chunk-2d0c4825").then(n.bind(null,"3aab"))}},computed:{currentContent:function(){var t="";return this.path.replace("#","").split(/\/|-/).forEach((function(e,n){t+=""!==e&&n>1?e.toLowerCase().charAt(0).toUpperCase()+e.substr(1):e.toLowerCase()})),console.log(t,"动态加载的组件名"),t}}}),o=l,h=n("2877"),d=Object(h["a"])(o,u,c,!1,null,null,null),f=d.exports,b=n("2f62"),v={name:"personal-center",components:{contentTemplate:f},data:function(){return{activeParentNav:0,activeSubNav:"0-0",subNavAvilabel:!0,path:"",parentNav:[{text:this.$t("personalCenter.myCenter"),href:"#/user"},{text:this.$t("personalCenter.myFinancial"),href:"#/financial"},{text:this.$t("personalCenter.myAnnouncetment"),href:"#/notice"}],subNav:[[{text:this.$t("personalCenter.myAccount"),href:"#/user/account",index:"0-0"},{text:this.$t("personalCenter.myBankCard"),href:"#/user/bank",index:"0-1"},{text:this.$t("personalCenter.myBet"),href:"#/user/bets",index:"0-4"},{text:this.$t("personalCenter.myTask"),href:"#/user/tasks",index:"0-5"},{text:this.$t("personalCenter.AmountChangingRecord"),href:"#/user/amount-changing-record",index:"0-8"},{text:this.$t("personalCenter.IndividualStatistics"),href:"#/user/individual-statistics",index:"0-9"},{text:this.$t("personalCenter.DragonTigerTie"),href:"#/user/dragon-tiger-tie",index:"0-10"}],[{text:this.$t("personalCenter.deposits"),href:"#/financial/deposits",index:"1-0"},{text:this.$t("personalCenter.withdrawals"),href:"#/financial/withdrawals",index:"1-1"},{text:this.$t("personalCenter.depositRecords"),href:"#/financial/deposit-record",index:"1-2"},{text:this.$t("personalCenter.withdrawalRecords"),href:"#/financial/withdrawal-record",index:"1-3"}]],currentSubNav:[]}},computed:{},methods:Object(i["a"])({},Object(b["b"])(["getBankCardList"]),{setSubNav:function(t){this.activeParentNav=t,0===t||1===t?(this.subNavAvilabel=!0,this.currentSubNav=this.subNav[t]):2===t?(this.activeSubNav="100-100",this.subNavAvilabel=!1,s["a"].push({path:"/notice"})):3===t&&s["a"].push({path:"/download"})},setNavState:function(t){var e=this;this.path=t,this.subNavAvilabel=!0;var n=this.path.split("/").slice(1);this.parentNav.forEach((function(t,a){t.href.split("/")[1]===n[0]&&(e.activeParentNav=a,a<2?(e.currentSubNav=e.subNav[a],e.currentSubNav.forEach((function(t,r){t.href.split("/")[2]===n[1]&&(e.activeSubNav=t[a])}))):2===a&&(e.subNavAvilabel=!1))}))}}),watch:{$route:function(t,e){this.setNavState(t.path)}},created:function(){this.setNavState(s["a"].history.current.path),this.getBankCardList()}},p=v,k=(n("2d7f"),Object(h["a"])(p,a,r,!1,null,null,null));e["default"]=k.exports},"2d7f":function(t,e,n){"use strict";var a=n("68585"),r=n.n(a);r.a},68585:function(t,e,n){}}]);