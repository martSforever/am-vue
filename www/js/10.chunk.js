webpackJsonp([10],{666:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(706),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);var l=e(961),i=(e.n(l),e(0));var s=function(t){e(959)},c=Object(i.a)(o.a,l.render,l.staticRenderFns,!1,s,null,null);n.default=c.exports},706:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=902852676,3612482722&fm=26&gp=0.jpg";n.default={name:"scrollbar-example",data:function(){return{list:[],list2:[]}},mounted:function(){for(var t=3;t>0;)this.list.push(a),t--;for(t=4;t>0;)this.list2.push(a),t--},methods:{add:function(){this.list.unshift(a+"?time="+String(this.getTime()))},remove:function(){this.list.shift()},add2:function(){this.list2.unshift(a+"?time="+String(this.getTime()))},remove2:function(){this.list2.shift()},getTime:function(){return(new Date).getTime()}}}},959:function(t,n,e){var a=e(960);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(288).default)("35a21d4a",a,!0,{})},960:function(t,n,e){(t.exports=e(145)(!0)).push([t.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.scrollbar-example .item {\n  background-color: #f2f2f2;\n  color: black;\n}\n.scrollbar-example .item img {\n    display: block;\n}\n.scrollbar-example .h-item {\n  display: inline-block;\n}\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/scrollbar-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS;AACT;EACE,0BAA0B;EAC1B,aAAa;CACd;AACD;IACI,eAAe;CAClB;AACD;EACE,sBAAsB;CACvB",file:"scrollbar-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.scrollbar-example .item {\n  background-color: #f2f2f2;\n  color: black;\n}\n.scrollbar-example .item img {\n    display: block;\n}\n.scrollbar-example .h-item {\n  display: inline-block;\n}\n'],sourceRoot:""}])},961:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.render=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"scrollbar-example example-page"},[e("div",{staticClass:"title"},[t._v("\n        基本用法，默认情况下，scrollbar大小为父节点的大小，所以在使用的时候，容器节点最好只拥有scrollbar一个子节点，\n        am-vue中，scrollbar用于特殊用于，仔细观察的同学应该发现了，滚动条的位置和浏览器标准的有点不一样，滚动条的位置是覆盖在内容上方的，\n        这样设计的目的在于避免内容大小变化导致内容错位的情况出现\n    ")]),t._v(" "),e("div",{staticClass:"example-row"},[e("div",{staticStyle:{height:"100px",width:"300px"}},[e("am-scrollbar",[e("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}})])],1)]),t._v(" "),e("div",{staticClass:"title"},[t._v("\n        设置滚动条大小以及颜色\n    ")]),t._v(" "),e("div",{staticClass:"example-row"},[e("div",{staticStyle:{height:"100px",width:"300px"}},[e("am-scrollbar",{attrs:{"scrollbar-color":"#f2f2f2","scrollbar-size":5}},[e("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}})])],1)]),t._v(" "),e("div",{staticClass:"title"},[t._v("\n        设置横向不滚动或者纵向不滚动\n    ")]),t._v(" "),e("div",{staticClass:"example-row"},[e("div",{staticStyle:{height:"100px",width:"300px",display:"inline-block"}},[e("am-scrollbar",{attrs:{"scroll-x":!1}},[e("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}},[t._v("\n                    hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello\n                    world!hello world!hello world!hello world!hello world!\n                ")])])],1),t._v(" "),e("div",{staticStyle:{height:"100px",width:"300px",display:"inline-block"}},[e("am-scrollbar",{attrs:{"scroll-y":!1}},[e("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}},[t._v("\n                    hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello\n                    world!hello world!hello world!hello world!hello world!\n                ")])])],1)]),t._v(" "),e("div",{staticClass:"title"},[t._v("\n        综合测试，经过测试，当浏览器窗口大小变化、scrollbar的内容大小变化，scrollbar中图片加载延迟都不会影响scrollbar的正常使用\n    ")]),t._v(" "),e("div",[e("am-button-group",[e("am-button",{on:{click:t.add}},[t._v("add")]),t._v(" "),e("am-button",[t._v("vertical:"+t._s(t.list.length))]),t._v(" "),e("am-button",{on:{click:t.remove}},[t._v("remove")])],1),t._v(" "),e("am-button-group",[e("am-button",{on:{click:t.add2}},[t._v("add")]),t._v(" "),e("am-button",[t._v("horizontal:"+t._s(t.list2.length))]),t._v(" "),e("am-button",{on:{click:t.remove2}},[t._v("remove")])],1),t._v(" "),e("am-button-group",[e("am-button",{on:{click:function(n){t.$refs.scrollbar.scrollTo({x:0,y:0})}}},[t._v("scrollTo:0")])],1)],1),t._v(" "),e("div",{staticStyle:{width:"1000px",height:"600px"}},[e("am-scrollbar",{ref:"scrollbar"},[e("div",{staticStyle:{width:"max-content","white-space":"nowrap"}},t._l(t.list2,function(t){return e("div",{staticClass:"h-item"},[e("img",{attrs:{src:t}})])})),t._v(" "),t._l(t.list,function(t){return e("div",{staticClass:"item"},[e("img",{attrs:{src:t}})])})],2)],1)])},n.staticRenderFns=[]}});
//# sourceMappingURL=10.chunk.js.map