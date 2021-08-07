webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/AddToCart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddToCart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.js */ \"./src/data.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddToCart',\n  methods: {\n    clear: function clear(id) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('http://127.0.0.1:8000/data/cart/' + id).then(function (response) {\n        console.log(response);\n        Object(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"getCart\"])();\n      });\n    }\n  },\n  computed: {\n    cart: function cart() {\n      return this.$store.state.cart;\n    }\n  },\n  created: function created() {\n    Object(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"getCart\"])();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQWRkVG9DYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQWRkVG9DYXJ0LnZ1ZT8xMDVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Yi1jb250YWluZXI+XHJcbiAgICA8aDEgY2xhc3M9XCJ0ZXh0LWxlZnQgbXQtNSBtci0xIGFsaWduLWl0ZW1zLWVuZFwiPkNhcnQ8Yi1iYWRnZSB2YXJpYW50PVwiZGFuZ2VyXCIgc3R5bGU9XCJmb250LXNpemU6MTRweDtcIiBwaWxsPnt7IHRoaXMuY2FydC5sZW5ndGggfX08L2ItYmFkZ2U+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gZmxvYXQtcmlnaHQgcm91bmRlZC1jaXJjbGVcIj5YPC9idXR0b24+XHJcbiAgICA8L2gxPlxyXG4gICAgPGhyPlxyXG4gIDxiLWxpc3QtZ3JvdXA+XHJcbiAgICA8Yi1saXN0LWdyb3VwLWl0ZW0gY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG10LTNcIiB2LWZvcj1cIml0ZW0gaW4gY2FydFwiIDprZXk9XCJpdGVtLmlkXCI+XHJcbiAgICAgIDxpbWcgOnNyYz1cIml0ZW0uaW1hZ2VcIiBpbWctdG9wIGFsdD1cIkltYWdlXCIgY2xhc3M9XCJyb3VuZGVkLTBcIiBzdHlsZT1cIndpZHRoOjRyZW07XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW4gdGV4dC1sZWZ0XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoyLjVyZW07XCI+XHJcbiAgICAgICAgPGg2IGNsYXNzPVwibWItMSB0ZXh0LXNlY29uZGFyeVwiPnt7IGl0ZW0ubmFtZSB9fTwvaDY+XHJcbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1zdWNjZXNzIG10LTNcIj5RdWFudGl0eToge3tpdGVtLnF1YW50aXR5fX08L3NtYWxsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGItYmFkZ2UgdmFyaWFudD1cIndhcm5pbmdcIiBwaWxsPnt7IGl0ZW0ucHJpY2UgfX08L2ItYmFkZ2U+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gbWwtNCByb3VuZGVkLWNpcmNsZVwiIEBjbGljaz1cImNsZWFyKGl0ZW0uaWQpXCI+WDwvYnV0dG9uPlxyXG4gICAgPC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICA8L2ItbGlzdC1ncm91cD5cclxuPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge2dldENhcnR9IGZyb20gXCIuLi9kYXRhLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6J0FkZFRvQ2FydCcsXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGNsZWFyKGlkKXtcclxuICAgICAgICBheGlvcy5kZWxldGUoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL2NhcnQvJytpZClcclxuICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgZ2V0Q2FydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGNhcnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY2FydDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICBnZXRDYXJ0KCk7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGUzZTM7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtICsgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiB0aGluO1xyXG59XHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBbEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/AddToCart.vue?vue&type=script&lang=js&\n");

/***/ })

})