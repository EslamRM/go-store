webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/categoryList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/categoryList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"categoryList\",\n  data: function data() {\n    return {\n      categories: \"\"\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"http://127.0.0.1:8000/data/Categories\").then(function (res) {\n      _this.categories = res.data;\n    }).catch(function (e) {\n      console.log(e);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2F0ZWdvcnlMaXN0LnZ1ZT9kZGUzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Yi1jb250YWluZXIgY2xhc3M9XCJidi1leGFtcGxlLXJvd1wiPlxyXG4gICAgPGgxPkNhdGVnb3J5IExpc3Q8L2gxPlxyXG4gICAgPGItcm93PlxyXG4gICAgICA8Yi1jb2wgdi1mb3I9XCIoY2F0LCBpbmRleCkgaW4gY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIiBjb2xzPSczJz5cclxuICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICBuby1ib2R5XHJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW1cIlxyXG4gICAgICAgICAgaW1nLWFsdD1cIlwiXHJcbiAgICAgICAgICB2LWlmPVwiY2F0LmltYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGItaW1nIDpzcmM9J2NhdC5pbWFnZScgaW1nLXRvcD48L2ItaW1nPlxyXG4gICAgICAgICAgPGItbGlzdC1ncm91cCBmbHVzaD5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7Y2F0Lm5hbWV9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICA8L2ItbGlzdC1ncm91cD5cclxuICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJjYXRlZ29yeUxpc3RcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2F0ZWdvcmllczogXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL0NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/categoryList.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3e4deee6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/categoryList.vue?vue&type=template&id=1c67c4cc&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4deee6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/categoryList.vue?vue&type=template&id=1c67c4cc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"bv-example-row\" },\n    [\n      _c(\"h1\", [_vm._v(\"Category List\")]),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.categories, function(cat, index) {\n          return _c(\n            \"b-col\",\n            { key: index, attrs: { cols: \"3\" } },\n            [\n              cat.image\n                ? _c(\n                    \"b-card\",\n                    {\n                      staticStyle: { \"max-width\": \"20rem\" },\n                      attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                    },\n                    [\n                      _c(\"b-img\", { attrs: { src: cat.image, \"img-top\": \"\" } }),\n                      _c(\n                        \"b-list-group\",\n                        { attrs: { flush: \"\" } },\n                        [_c(\"b-list-group-item\", [_vm._v(_vm._s(cat.name))])],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        }),\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiM2U0ZGVlZTYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2N2M0Y2MmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlMaXN0LnZ1ZT9mYzRjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJiLWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYnYtZXhhbXBsZS1yb3dcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkNhdGVnb3J5IExpc3RcIildKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIF92bS5fbChfdm0uY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgY29sczogXCIzXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBjYXQuaW1hZ2VcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIyMHJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwiXCIsIFwiaW1nLWFsdFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbWdcIiwgeyBhdHRyczogeyBzcmM6IGNhdC5pbWFnZSwgXCJpbWctdG9wXCI6IFwiXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdXNoOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdC5uYW1lKSldKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3e4deee6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/categoryList.vue?vue&type=template&id=1c67c4cc&\n");

/***/ })

})