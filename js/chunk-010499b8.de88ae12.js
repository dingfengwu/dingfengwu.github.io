(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-010499b8"],{"18dd":function(t,e,n){"use strict";var i=n("2ec7"),c=n.n(i);c.a},"2ec7":function(t,e,n){},"378e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcement-info"},[n("h2",[t._v(t._s(t.$t("personalCenter.Announcement")))]),n("el-divider"),n("el-timeline",{attrs:{reverse:t.reverse}},t._l(t.noticeList,(function(e,i){return n("el-timeline-item",{key:i,attrs:{placement:"top",timestamp:e.created_at}},[n("div",{staticClass:"item"},[n("h1",[t._v(t._s(e.title))]),n("p",{domProps:{innerHTML:t._s(t.content[i])}})])])})),1)],1)},c=[],o=n("5530"),s=n("2f62"),r=n("dc9d"),a={name:"notice",data:function(){return{content:[],reverse:!0}},computed:Object(o["a"])({},Object(s["c"])(["noticeList"])),watch:{noticeList:function(t){var e=this;if(void 0!==t)for(var n in t)Object(r["d"])(t[n].id).then((function(t){0===t.errno&&e.content.push(t.data["content"])}))}},methods:Object(o["a"])({},Object(s["b"])(["getNoticeList"])),created:function(){this.getNoticeList()}},u=a,d=(n("18dd"),n("2877")),l=Object(d["a"])(u,i,c,!1,null,null,null);e["default"]=l.exports}}]);