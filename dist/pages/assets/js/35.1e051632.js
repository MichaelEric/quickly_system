(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{582:function(e,t,a){"use strict";a.r(t);a(85);var n=a(517),i={props:["gaugeValue","el","gaugeColor","radius","bgSize"],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){setTimeout((function(){e.initChart()}),1e3)}))},methods:{initChart:function(){var e=document.getElementById(this.el),t=n.b(e),a={legend:{top:"right"},series:[{name:"面积模式",type:"pie",radius:[10,60],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:2},data:[{value:40,name:"文字"},{value:38,name:"文字 2"},{value:32,name:"文字 3"},{value:30,name:"文字 4"},{value:28,name:"文字 5"},{value:26,name:"文字 6"},{value:22,name:"文字 7"},{value:18,name:"文字 8"}]}]};a&&t.setOption(a)}}},u=a(2),s=Object(u.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"h-100",attrs:{id:this.el}})}),[],!1,null,"e8a6d6d0",null);t.default=s.exports}}]);