webpackJsonp([15],{657:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(697),o=s.n(n);for(var e in n)"default"!==e&&function(t){s.d(a,t,function(){return n[t]})}(e);var l=s(940),i=(s.n(l),s(0));var c=function(t){s(938)},r=Object(i.a)(o.a,l.render,l.staticRenderFns,!1,c,null,null);a.default=r.exports},697:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"grid-example",methods:{getRandomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)}}}},938:function(t,a,s){var n=s(939);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(288).default)("419d0e1e",n,!0,{})},939:function(t,a,s){(t.exports=s(145)(!0)).push([t.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.grid-example .am-row .col {\n  text-align: center;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n}\n.grid-example .am-row .am-col {\n  margin-bottom: 24px;\n}\n.grid-example .am-row .am-col:nth-child(even) .col {\n    background-color: #515a6e;\n}\n.grid-example .am-row .am-col:nth-child(odd) .col {\n    background-color: #808695;\n}\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/grid-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS;AACT;EACE,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;CACd;AACD;EACE,oBAAoB;CACrB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B",file:"grid-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.grid-example .am-row .col {\n  text-align: center;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n}\n.grid-example .am-row .am-col {\n  margin-bottom: 24px;\n}\n.grid-example .am-row .am-col:nth-child(even) .col {\n    background-color: #515a6e;\n}\n.grid-example .am-row .am-col:nth-child(odd) .col {\n    background-color: #808695;\n}\n'],sourceRoot:""}])},940:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.render=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"grid-example example-page"},[s("div",{staticClass:"title"},[t._v("栅格系统")]),t._v(" "),s("am-row",[s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col"},[t._v("col-3")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"5"}},[s("div",{staticClass:"col"},[t._v("col-5")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col"},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col"},[t._v("col-6")])])],1),t._v(" "),s("div",{staticClass:"title"},[t._v("栅格间隔(单位px)")]),t._v(" "),s("am-row",{attrs:{gutter:"16"}},[s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col"},[t._v("col-3")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"5"}},[s("div",{staticClass:"col"},[t._v("col-5")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col"},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col"},[t._v("col-6")])])],1),t._v(" "),s("div",{staticClass:"title"},[t._v("flex布局的栅格")]),t._v(" "),s("am-row",{attrs:{flex:"",align:"top"}},[s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col",staticStyle:{height:"36px"}},[t._v("col-3")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col",staticStyle:{height:"48px"}},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"5"}},[s("div",{staticClass:"col",staticStyle:{height:"64px"}},[t._v("col-5 align:top")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col",staticStyle:{height:"48px"}},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col",staticStyle:{height:"36px"}},[t._v("col-6")])])],1),t._v(" "),s("am-row",{attrs:{flex:"",align:"middle"}},[s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col",staticStyle:{height:"36px"}},[t._v("col-3")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col",staticStyle:{height:"48px"}},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"5"}},[s("div",{staticClass:"col",staticStyle:{height:"64px"}},[t._v("col-5 align:middle")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col",staticStyle:{height:"48px"}},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col",staticStyle:{height:"36px"}},[t._v("col-6")])])],1),t._v(" "),s("am-row",{attrs:{flex:"",align:"bottom"}},[s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col",staticStyle:{height:"36px"}},[t._v("col-3")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col",staticStyle:{height:"48px"}},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"5"}},[s("div",{staticClass:"col",staticStyle:{height:"64px"}},[t._v("col-5 align:bottom")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col",staticStyle:{height:"48px"}},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col",staticStyle:{height:"36px"}},[t._v("col-6")])])],1),t._v(" "),s("div",{staticClass:"title"},[t._v("flex justify-content")]),t._v(" "),s("am-row",{attrs:{flex:"",justify:"space-between"}},[s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col"},[t._v("col-3")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col"},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col"},[t._v("col-3")])])],1),t._v(" "),s("div",{staticClass:"title"},[t._v("当使用flex布局时，可以使用order属性排序")]),t._v(" "),s("am-row",{attrs:{flex:"",justify:"start"}},[s("am-col",{attrs:{span:"2"}},[s("div",{staticClass:"col"},[t._v("col-2")])]),t._v(" "),s("am-col",{attrs:{span:"4"}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"6"}},[s("div",{staticClass:"col"},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"3"}},[s("div",{staticClass:"col"},[t._v("col-3")])])],1),t._v(" "),s("am-row",{attrs:{flex:"",justify:"start"}},[s("am-col",{attrs:{span:"2",order:"9"}},[s("div",{staticClass:"col"},[t._v("col-2")])]),t._v(" "),s("am-col",{attrs:{span:"4",order:"8"}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"6",order:"7"}},[s("div",{staticClass:"col"},[t._v("col-6")])]),t._v(" "),s("am-col",{attrs:{span:"3",order:"6"}},[s("div",{staticClass:"col"},[t._v("col-3")])])],1),t._v(" "),s("div",{staticClass:"title"},[t._v("当使用浮动布局时，可以使用pull以及push属性排序")]),t._v(" "),s("am-row",{attrs:{flex:"",gutter:"16"}},[s("am-col",{attrs:{span:"2",push:"10"}},[s("div",{staticClass:"col"},[t._v("col-2")])]),t._v(" "),s("am-col",{attrs:{span:"4",pull:"2"}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"6",pull:"2"}},[s("div",{staticClass:"col"},[t._v("col-6")])])],1),t._v(" "),s("div",{staticClass:"title"},[t._v("响应式布局，可以用chrome把客户端变成移动端模式，当为普通模式时，分别占2,4,6格，当为移动端时，分别占4,8,12格")]),t._v(" "),s("div",{staticClass:"title"},[t._v("2,4,6占整个容器的宽度一半，二4,8,12占满容器宽度，可以试一试")]),t._v(" "),s("am-row",{attrs:{flex:"",gutter:"16"}},[s("am-col",{attrs:{span:"2",xs:4}},[s("div",{staticClass:"col"},[t._v("col-2")])]),t._v(" "),s("am-col",{attrs:{span:"4",xs:8}},[s("div",{staticClass:"col"},[t._v("col-4")])]),t._v(" "),s("am-col",{attrs:{span:"6",xs:12}},[s("div",{staticClass:"col"},[t._v("col-6")])])],1)],1)},a.staticRenderFns=[]}});
//# sourceMappingURL=15.chunk.js.map