webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'productDetails',\n  data: function data() {\n    return {\n      items: this.$store.state.items,\n      users: this.$store.state.users,\n      item: []\n    };\n  },\n  computed: {\n    productID: function productID() {\n      return this.$route.params.id; // From route\n    }\n  },\n  methods: {\n    AddToCart: function AddToCart() {\n      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://127.0.0.1:8000/data/cart\", {\n        name: this.item.name,\n        image: this.item.image,\n        price: this.item.price,\n        quantity: this.item.quantity\n      });\n    },\n    getItem: function getItem() {\n      var _this = this;\n\n      this.items.forEach(function (e) {\n        if (e.id == _this.productID) {\n          _this.item = e;\n        }\n      });\n    }\n  },\n  created: function created() {\n    this.getItem();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0RGV0YWlscy52dWU/ODRiMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyPlxyXG4gIDxiLWNhcmQgbm8tYm9keSBjbGFzcz1cIm92ZXJmbG93LWhpZGRlbiBib3JkZXItMFwiIHN0eWxlPVwibWFyZ2luLXRvcDo1cmVtO1wiPlxyXG4gICAgPGItcm93IG5vLWd1dHRlcnM+XHJcbiAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICA8Yi1jYXJkLWltZyA6c3JjPVwiaXRlbS5pbWFnZVwiIGltZy10b3AgYWx0PVwiSW1hZ2VcIiBjbGFzcz1cInJvdW5kZWQtMFwiIHN0eWxlPVwid2lkdGg6NzAlO1wiPjwvYi1jYXJkLWltZz5cclxuICAgICAgPC9iLWNvbD5cclxuICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgIDxiLWNhcmQtYm9keSA6dGl0bGU9XCJpdGVtLm5hbWVcIiBzdHlsZT1cImxpbmUtaGVpZ2h0OjJyZW07XCI+XHJcbiAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgIHt7aXRlbS5kZXNjcmlwdGlvbn19XHJcbiAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgPGItbGlzdC1ncm91cCBmbHVzaD5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5QcmljZSA6IHt7IGl0ZW0ucHJpY2UgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3MgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lPlxyXG4gICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJxdWFudGl0eVwiIHBsYWNlaG9sZGVyPVwiUXVhbnRpdHlcIiBzaXplPVwic21cIiA6dmFsdWU9J2l0ZW0ucXVhbnRpdHknPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInF1YW50aXR5XCIgY2xhc3M9XCJtbC00XCI+e3sgaXRlbS5zdG9jayB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9iLWZvcm0+XHJcbiAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbSBjbGFzcz1cInRleHQtZGFya1wiPnt7IGl0ZW0uZGVsaXZlcnkgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0gY2xhc3M9XCJ0ZXh0LWRhcmsgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI+QnV5IE5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBtbC00XCIgQGNsaWNrPVwiQWRkVG9DYXJ0KClcIj5BZGQgVG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgPC9iLWNhcmQ+XHJcbjwvYi1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZToncHJvZHVjdERldGFpbHMnLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczp0aGlzLiRzdG9yZS5zdGF0ZS5pdGVtcyxcclxuICAgICAgICB1c2Vyczp0aGlzLiRzdG9yZS5zdGF0ZS51c2VycyxcclxuICAgICAgICBpdGVtOltdLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgIHByb2R1Y3RJRCAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQvLyBGcm9tIHJvdXRlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIEFkZFRvQ2FydCgpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvY2FydFwiLHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5pdGVtLm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTp0aGlzLml0ZW0uaW1hZ2UsXHJcbiAgICAgICAgICBwcmljZTp0aGlzLml0ZW0ucHJpY2UsXHJcbiAgICAgICAgICBxdWFudGl0eTp0aGlzLml0ZW0ucXVhbnRpdHlcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRJdGVtKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgIGlmKGUuaWQgPT0gdGhpcy5wcm9kdWN0SUQpe1xyXG4gICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCAoKSB7XHJcbiAgICB0aGlzLmdldEl0ZW0oKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQWpDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productDetails.vue?vue&type=script&lang=js&\n");

/***/ })

})