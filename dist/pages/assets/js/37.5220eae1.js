(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{583:function(e,t,a){"use strict";a.r(t);a(85);var n=a(517),i={props:["gaugeValue","el","gaugeColor","radius","bgSize"],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){setTimeout((function(){e.initChart()}),1e3)}))},methods:{initChart:function(){var e=document.getElementById(this.el),t=n.b(e),a={grid:{x:40,x2:100,y2:150},radar:{indicator:[{name:"销售",max:6500},{name:"管理",max:16e3},{name:"信息",max:3e4},{name:"客服",max:38e3},{name:"研发",max:52e3},{name:"市场",max:25e3}]},series:[{name:"预算 vs 开销（Budget vs spending）",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"预算分配（Allocated Budget）"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"实际开销（Actual Spending）"}]}]};a&&t.setOption(a)}}},s=a(2),u=Object(s.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"h-100",attrs:{id:this.el}})}),[],!1,null,"a6e5467c",null);t.default=u.exports}}]);