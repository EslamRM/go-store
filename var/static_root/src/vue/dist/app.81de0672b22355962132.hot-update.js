webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import axios from \"axios\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      products: [],\n      currentPage: this.$parent.currentPage // category:'',\n      // categories:[],\n\n    };\n  },\n  watch: {\n    currentPage: {\n      immediate: true,\n      deep: true,\n      handler: function handler(newValue, oldValue) {\n        console.log(\"\".concat(newValue, \" --- \").concat(oldValue));\n      }\n    }\n  } // created() {\n  //   axios\n  //     .get(`http://127.0.0.1:8000/data/products/?page=${this.currentPage}`)\n  //     .then((res) => {\n  //       console.log(this.currentPage)\n  //       let data = res.data.results;\n  //       for (const item of data) {\n  //         this.products.push(item);\n  //       }\n  //       // this.category = data;\n  //       // for (const cat of this.category) {\n  //       //   this.categories.push(cat.name);\n  //       //   for (const item of cat.category) {\n  //       //       this.products.push(item);\n  //       //   }\n  //       // }\n  //     })\n  //     .catch((e) => {\n  //       console.log(e);\n  //     });\n  // },\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPCEtLSA8Yi1jb2wgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHByb2R1Y3RzXCJcclxuICAgICAgICAgIDprZXk9XCJpbmRleFwiIGNvbHM9JzQnPlxyXG4gICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgIG5vLWJvZHlcclxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMHJlbTttYXJnaW4tdG9wOjNyZW07XCJcclxuICAgICAgICAgIGltZy1hbHQ9XCJcIlxyXG4gICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8Yi1pbWcgOnNyYz0ncHJvZHVjdC5pbWFnZScgaW1nLXRvcCBzdHlsZT1cImhlaWdodDoxOHJlbTtcIj48L2ItaW1nPlxyXG4gICAgICAgICAgPGItbGlzdC1ncm91cCBmbHVzaD5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5uYW1lfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LnByaWNlfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LnN0b2NrfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LmRlbGl2ZXJ5fX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgIDwvYi1jb2w+IC0tPlxyXG4gICAgPC9iLXJvdz5cclxuICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInByb2R1Y3RMaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY3VycmVudFBhZ2U6dGhpcy4kcGFyZW50LmN1cnJlbnRQYWdlLFxyXG4gICAgICAvLyBjYXRlZ29yeTonJyxcclxuICAgICAgLy8gY2F0ZWdvcmllczpbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgY3VycmVudFBhZ2U6IHtcclxuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxyXG4gICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICBoYW5kbGVyKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke25ld1ZhbHVlfSAtLS0gJHtvbGRWYWx1ZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBjcmVhdGVkKCkge1xyXG4gIC8vICAgYXhpb3NcclxuICAvLyAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvP3BhZ2U9JHt0aGlzLmN1cnJlbnRQYWdlfWApXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRQYWdlKVxyXG4gIC8vICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGEucmVzdWx0cztcclxuICAvLyAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gIC8vICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKGl0ZW0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICAvLyB0aGlzLmNhdGVnb3J5ID0gZGF0YTtcclxuICAvLyAgICAgICAvLyBmb3IgKGNvbnN0IGNhdCBvZiB0aGlzLmNhdGVnb3J5KSB7XHJcbiAgLy8gICAgICAgLy8gICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXQubmFtZSk7XHJcbiAgLy8gICAgICAgLy8gICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0LmNhdGVnb3J5KSB7XHJcbiAgLy8gICAgICAgLy8gICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKGl0ZW0pO1xyXG4gIC8vICAgICAgIC8vICAgfVxyXG4gIC8vICAgICAgIC8vIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7cbc2498-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cbc2498-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=template&id=f2bcec66& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"b-container\", { staticClass: \"bv-example-row\" }, [_c(\"b-row\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiN2NiYzI0OTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMmJjZWM2NiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0TGlzdC52dWU/YTVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiYi1jb250YWluZXJcIiwgeyBzdGF0aWNDbGFzczogXCJidi1leGFtcGxlLXJvd1wiIH0sIFtfYyhcImItcm93XCIpXSwgMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7cbc2498-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&\n");

/***/ })

})