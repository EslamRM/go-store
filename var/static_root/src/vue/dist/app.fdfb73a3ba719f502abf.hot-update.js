webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/AddToCart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddToCart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data.js */ \"./src/data.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddToCart',\n  methods: {\n    remove: function remove(index) {\n      confirm('Are You Sure');\n      this.$delete(this.cart, index);\n    },\n    clear: function clear(id) {\n      axios__WEBPACK_IMPORTED_MODULE_6___default.a.delete('http://127.0.0.1:8000/data/cart/' + id).then(function (response) {\n        Object(_data_js__WEBPACK_IMPORTED_MODULE_7__[\"getCart\"])();\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  },\n  computed: Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__[\"mapGetters\"])({\n    cart: 'getCart',\n    count: 'getCartLength'\n  })), {}, {\n    getTotal: function getTotal() {\n      var total = 0;\n      this.cart.forEach(function (item) {\n        total += +item.price.slice(1).replace(',', '');\n      });\n      return '$' + total.toFixed(2);\n    }\n  }),\n  created: function created() {\n    Object(_data_js__WEBPACK_IMPORTED_MODULE_7__[\"getCart\"])();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQWRkVG9DYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQWRkVG9DYXJ0LnZ1ZT8xMDVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Yi1jb250YWluZXI+XHJcbiAgICA8aDEgY2xhc3M9XCJ0ZXh0LWxlZnQgbXQtNSBtci0xIGFsaWduLWl0ZW1zLWVuZFwiPkNhcnQ8Yi1iYWRnZSB2YXJpYW50PVwiZGFuZ2VyXCIgc3R5bGU9XCJmb250LXNpemU6MTRweDtcIiBwaWxsPnt7IGNvdW50IH19PC9iLWJhZGdlPlxyXG4gICAgPC9oMT5cclxuICAgIDxocj5cclxuICA8Yi1saXN0LWdyb3VwPlxyXG4gICAgPGItbGlzdC1ncm91cC1pdGVtIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtdC0zXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY2FydFwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICA8aW1nIDpzcmM9XCJpdGVtLmltYWdlXCIgaW1nLXRvcCBhbHQ9XCJJbWFnZVwiIGNsYXNzPVwicm91bmRlZC0wXCIgc3R5bGU9XCJ3aWR0aDo0cmVtO1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRleHQtbGVmdFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6Mi41cmVtO1wiPlxyXG4gICAgICAgIDxoNiBjbGFzcz1cIm1iLTEgdGV4dC1zZWNvbmRhcnlcIj57eyBpdGVtLm5hbWUgfX08L2g2PlxyXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtc3VjY2VzcyBtdC0zXCI+UXVhbnRpdHk6IHt7aXRlbS5xdWFudGl0eX19PC9zbWFsbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiLWJhZGdlIHZhcmlhbnQ9XCJ3YXJuaW5nXCIgcGlsbD57eyBpdGVtLnByaWNlIH19PC9iLWJhZGdlPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIG1sLTQgcm91bmRlZC1jaXJjbGVcIiBAY2xpY2s9XCJjbGVhcihpdGVtLmlkKTtyZW1vdmUoaW5kZXgpXCI+WDwvYnV0dG9uPlxyXG4gICAgPC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICA8L2ItbGlzdC1ncm91cD5cclxuICA8aHI+XHJcbjxoNCBjbGFzcz1cInRleHQtbGVmdCBtdC01IG1yLTEgYWxpZ24taXRlbXMtZW5kXCI+VG90YWw6e3tnZXRUb3RhbH19PC9oND4gXHJcbjwvYi1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtnZXRDYXJ0fSBmcm9tIFwiLi4vZGF0YS5qc1wiO1xyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTonQWRkVG9DYXJ0JyxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcmVtb3ZlKGluZGV4KSB7XHJcbiAgICAgICAgY29uZmlybSgnQXJlIFlvdSBTdXJlJylcclxuICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5jYXJ0LCBpbmRleClcclxuICAgICAgfSxcclxuICAgICAgY2xlYXIoaWQpe1xyXG4gICAgICAgIGF4aW9zLmRlbGV0ZSgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvY2FydC8nK2lkKVxyXG4gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBnZXRDYXJ0KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICBjYXJ0OidnZXRDYXJ0JyxcclxuICAgICAgY291bnQ6J2dldENhcnRMZW5ndGgnLFxyXG4gICAgfSksXHJcbiAgICBnZXRUb3RhbCgpe1xyXG4gICAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgICB0aGlzLmNhcnQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0b3RhbCArPSAraXRlbS5wcmljZS5zbGljZSgxKS5yZXBsYWNlKCcsJywnJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gJyQnKyB0b3RhbC50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIGdldENhcnQoKTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTNlMztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0gKyAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IHRoaW47XHJcbn1cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFqQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/AddToCart.vue?vue&type=script&lang=js&\n");

/***/ })

})