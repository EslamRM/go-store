webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      products: [],\n      category: '',\n      categories: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://127.0.0.1:8000/data/Categories\").then(function (res) {\n      var data = res.data;\n      _this.category = data;\n\n      var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.category),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var cat = _step.value;\n\n          _this.categories.push(cat.name);\n\n          var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cat.category),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var item = _step2.value;\n\n              _this.products.push(item);\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      console.log(_this.categories);\n    }).catch(function (e) {\n      console.log(e);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxiLXJvdyB2LWZvcj1cIihjYXQsIGluZGV4KSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgIDxoND57e2NhdC5uYW1lfX08L2g0PlxyXG4gICAgICA8aHI+XHJcbiAgICAgIDxiLWNvbCB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdHNcIlxyXG4gICAgICAgICAgOmtleT1cImluZGV4XCIgY29scz0nNCc+XHJcbiAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgbm8tYm9keVxyXG4gICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDIwcmVtO21hcmdpbi10b3A6M3JlbTtcIlxyXG4gICAgICAgICAgaW1nLWFsdD1cIlwiXHJcbiAgICAgICAgICB2LWlmPVwicHJvZHVjdC5pbWFnZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxiLWltZyA6c3JjPSdwcm9kdWN0LmltYWdlJyBpbWctdG9wPjwvYi1pbWc+XHJcbiAgICAgICAgICA8Yi1saXN0LWdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0Lm5hbWV9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e3Byb2R1Y3QucHJpY2V9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e3Byb2R1Y3Quc3RvY2t9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e3Byb2R1Y3QuZGVsaXZlcnl9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICA8L2ItbGlzdC1ncm91cD5cclxuICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwcm9kdWN0TGlzdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIGNhdGVnb3J5OicnLFxyXG4gICAgICBjYXRlZ29yaWVzOltdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvQ2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiB0aGlzLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXQubmFtZSk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0LmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3e4deee6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4deee6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=template&id=f2bcec66& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"bv-example-row\" },\n    _vm._l(_vm.categories, function(cat, index) {\n      return _c(\n        \"b-row\",\n        { key: index },\n        [\n          _c(\"h4\", [_vm._v(_vm._s(cat.name))]),\n          _c(\"hr\"),\n          _vm._l(_vm.products, function(product, index) {\n            return _c(\n              \"b-col\",\n              { key: index, attrs: { cols: \"4\" } },\n              [\n                product.image\n                  ? _c(\n                      \"b-card\",\n                      {\n                        staticStyle: {\n                          \"max-width\": \"20rem\",\n                          \"margin-top\": \"3rem\"\n                        },\n                        attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                      },\n                      [\n                        _c(\"b-img\", {\n                          attrs: { src: product.image, \"img-top\": \"\" }\n                        }),\n                        _c(\n                          \"b-list-group\",\n                          { attrs: { flush: \"\" } },\n                          [\n                            _c(\"b-list-group-item\", [\n                              _vm._v(_vm._s(product.name))\n                            ]),\n                            _c(\"b-list-group-item\", [\n                              _vm._v(_vm._s(product.price))\n                            ]),\n                            _c(\"b-list-group-item\", [\n                              _vm._v(_vm._s(product.stock))\n                            ]),\n                            _c(\"b-list-group-item\", [\n                              _vm._v(_vm._s(product.delivery))\n                            ])\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  : _vm._e()\n              ],\n              1\n            )\n          })\n        ],\n        2\n      )\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiM2U0ZGVlZTYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMmJjZWM2NiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0TGlzdC52dWU/OGU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJ2LWV4YW1wbGUtcm93XCIgfSxcbiAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihfdm0uX3MoY2F0Lm5hbWUpKV0pLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0cywgZnVuY3Rpb24ocHJvZHVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IGNvbHM6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjNyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIlwiLCBcImltZy1hbHRcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwcm9kdWN0LmltYWdlLCBcImltZy10b3BcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdXNoOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0LnByaWNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvZHVjdC5zdG9jaykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2R1Y3QuZGVsaXZlcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3e4deee6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&\n");

/***/ })

})