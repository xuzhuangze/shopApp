(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],[,,,,,,,,,,
/*!*************************************************************************************!*\
  !*** E:/Myweb/project/shopProject/shopApp/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*************************************************************************************/
/*! no static exports found */,function(n,e,t){"use strict";(function(n){t(/*! uni-pages */4);r(t(/*! vue */2));var e=r(t(/*! ./pages/index/index.vue */12));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},
/*!******************************************************************!*\
  !*** E:/Myweb/project/shopProject/shopApp/pages/index/index.vue ***!
  \******************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var r=t(/*! ./index.vue?vue&type=template&id=57280228& */13),u=t(/*! ./index.vue?vue&type=script&lang=js& */15);for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t(/*! ./index.vue?vue&type=style&index=0&lang=css& */21);var c,o=t(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),a=Object(o["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);a.options.__file="pages/index/index.vue",e["default"]=a.exports},
/*!*************************************************************************************************!*\
  !*** E:/Myweb/project/shopProject/shopApp/pages/index/index.vue?vue&type=template&id=57280228& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,e,t){"use strict";t.r(e);var r=t(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228& */14);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Myweb/project/shopProject/shopApp/pages/index/index.vue?vue&type=template&id=57280228& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},i=!1,c=[];u._withStripped=!0},
/*!*******************************************************************************************!*\
  !*** E:/Myweb/project/shopProject/shopApp/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var r=t(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */16),u=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Myweb/project/shopProject/shopApp/pages/index/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{quicknav:["家电","手机","电脑","衣服","食品","家装"],topindex:0,swipers:["../../static/index/swiper.jpg","../../static/index/swiper1.jpg"],products:[],funNavList:[{name:"限时抢购",icon:t(/*! ../../static/index/xiaohuoban.png */17)},{name:"积分商城",icon:t(/*! ../../static/index/jifentixicopy.png */18)},{name:"联系我们",icon:t(/*! ../../static/index/lianxiwomen.png */19)},{name:"商品分类",icon:t(/*! ../../static/index/-shangpinfenlei-gai.png */20)}]}},onLoad:function(){this.http.get("http://localhost:3000/api/banner").then((function(n){console.log(n)}))},methods:{}};e.default=r},,,,
/*!***************************************************************************************************!*\
  !*** E:/Myweb/project/shopProject/shopApp/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */,function(n,e,t){"use strict";t.r(e);var r=t(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */22),u=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=u.a},
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Myweb/project/shopProject/shopApp/pages/index/index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){}],[[11,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map