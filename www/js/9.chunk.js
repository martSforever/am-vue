webpackJsonp([9],{670:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(710),s=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var i=t(972),o=(t.n(i),t(0));var l=function(n){t(970)},c=Object(o.a)(s.a,i.render,i.staticRenderFns,!1,l,null,null);e.default=c.exports},710:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(n){return n&&n.__esModule?n:{default:n}}(t(2));e.default={name:"select-example",data:function(){return{list1:[{name:"哈密瓜"},{name:"西瓜"},{name:"南瓜"}],list10:[{name:"广东省",children:[{name:"佛山市",children:[{name:"禅城区"},{name:"顺德区"}]},{name:"广州市",children:[{name:"越秀区"},{name:"天河区"},{name:"白云区"}]},{name:"深圳市",children:[{name:"龙岗区"},{name:"宝安区"}]},{name:"韶关市",children:[{name:"武江区"},{name:"仁化县"}]},{name:"江门市",children:[{name:"蓬江区"},{name:"大埔县"}]}]},{name:"广西省",children:[{name:"南宁市",children:[{name:"江南区"},{name:"马山县"},{name:"横县"}]},{name:"贵港市",children:[{name:"桂平县"},{name:"平南县"}]},{name:"防城港市",children:[{name:"港口区"}]}]}]}},methods:{handleSelect:function(n){var e=this;this.$notice.show({message:n.reduce(function(n,t){return(0,a.default)(this,e),n+=t.name}.bind(this),"")})},renderFunc:function(n,e){return n("div",[n("am-icon",{attrs:{icon:"fas-user"}}),e.name])}}}},970:function(n,e,t){var a=t(971);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(288).default)("5558c55e",a,!0,{})},971:function(n,e,t){(n.exports=t(145)(!0)).push([n.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/select-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS",file:"select-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n'],sourceRoot:""}])},972:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.render=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"select-example example-page"},[n._m(0),n._v(" "),t("div",{staticClass:"example-row"},[t("am-select",{attrs:{data:n.list1,"show-key":"name"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                "+n._s(e.name)+"\n            ")]}}])})],1),n._v(" "),t("div",{staticClass:"title"},[n._v("设置input样式，select复用了input组件，继承了input组件所有属性")]),n._v(" "),t("div",{staticClass:"example-row"},[t("am-select",{attrs:{data:n.list1,"show-key":"name",type:"fill",color:"primary","suffix-icon":"fas-angle-down"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n                "+n._s(e.name)+"\n            ")]}}])})],1),n._v(" "),t("div",{staticClass:"title"},[n._v("自定义渲染内容")]),n._v(" "),t("div",{staticClass:"example-row"},[t("am-select",{attrs:{data:n.list1,"show-key":"name"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("div",[t("am-icon",{attrs:{icon:"fab-github"}}),n._v("\n                    "+n._s(e.name)+"\n                ")],1)]}}])})],1),n._v(" "),t("div",{staticClass:"title"},[n._v("级联选择")]),n._v(" "),t("div",{staticClass:"example-row"},[t("am-select",{attrs:{data:n.list10,"show-key":"name","children-key":"children"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("div",[n._v("\n                    "+n._s(e.name)+"\n                ")])]}}])})],1),n._v(" "),t("div",{staticClass:"title"},[n._v("使用渲染函数渲染模板")]),n._v(" "),t("div",{staticClass:"example-row"},[t("am-select",{attrs:{data:n.list10,"show-key":"name","children-key":"children","render-func":n.renderFunc}})],1)])},e.staticRenderFns=[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"title"},[this._v("基本用法 "),e("br"),this._v("\n        最基本的用法需要完成三个步骤\n        1、准备需要显示的数组list，\n        2、要显示的文本属性的key，\n        3、显示的作用于插槽模板\n    ")])}]}});
//# sourceMappingURL=9.chunk.js.map