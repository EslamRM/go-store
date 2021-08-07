webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/navbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"navbar\",\n  data: function data() {\n    return {\n      categories: \"\"\n    };\n  },\n  methods: {\n    getCategory: function getCategory() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"http://127.0.0.1:8000/data/Categories\").then(function (res) {\n        _this.categories = res.data;\n      }).catch(function (e) {\n        console.log(e);\n      });\n    },\n    created: function created() {\n      this.getCategory();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbmF2YmFyLnZ1ZT9kYWRiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PHJvdXRlci1saW5rIHRvPVwiL1wiPkVuZTwvcm91dGVyLWxpbms+PC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICA8bGk+PGRpdiBjbGFzcz1cInNlYXJjaC1ib3hcIj48aW5wdXQgYXJpYS1sYWJlbD1cIlNlYXJjaFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHZhbHVlPVwiXCIgY2xhc3M9XCJcIj48L2Rpdj48L2xpPlxyXG4gICAgICAgIDxsaSBzdHlsZT1cIm1hcmdpbi1sZWZ0OjFyZW07XCI+PGEgaHJlZj1cIi9cIj48Yi1pY29uIGljb249XCJjYXJ0M1wiIGNsYXNzPVwiaG92ZXJcIj48L2ItaWNvbj48L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj48Yi1pY29uIGljb249XCJwZXJzb25cIiBjbGFzcz1cImhvdmVyXCI+PC9iLWljb24+PC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgY2F0ZWdvcmllc1wiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwiY2F0IGluIGNhdGVnb3JpZXMuc2xpY2UoMCwxMSlcIiA6a2V5PVwiY2F0LmlkXCI+PHJvdXRlci1saW5rIDp0bz1cIicvY2F0ZWdvcnkvJytjYXQuaWQrJy8nK2NhdC5uYW1lXCIgc3R5bGU9XCJjb2xvcjojZmZmO1wiPnt7Y2F0Lm5hbWV9fTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL3Nob3BfYnlfY2F0ZWdvcnlcIj48YnV0dG9uIGNsYXNzPVwiYWxsXCI+QWxsIDxiLWljb24gaWNvbj1cInRocmVlLWRvdHNcIj48L2ItaWNvbj48L2J1dHRvbj48L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwibmF2YmFyXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0Q2F0ZWdvcnkoKXtcclxuICAgICAgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvQ2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5jYXRlZ29yaWVze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGM5OTc7XHJcbiAgbGl7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9OmhvdmVye1xyXG4gICAgICBjb2xvcjojMjBjOTk3O1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH06aG92ZXJ7XHJcbiAgICAgIHRleHQtc2hhZG93OjFweCAxcHggI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmhvdmVye1xyXG4gIGNvbG9yOiNmZmY7XHJcbn06aG92ZXJ7XHJcbiAgY29sb3I6ICM0MWI4ODM7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMjEyNTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzQxYjg4MztcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlLTIwMHB4KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICM0MWI4ODM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgY29sb3I6ICM0ZTZlOGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZkNGRiO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgLjVyZW0gMCAycmVtO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgXHJcbiAgICAgICAgICB1cmwoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vemhhbmd3YW5xaW4zNTcvYmxvZy8xN2VmY2EwNTdhMDcwMDdjOWM3OTUwNjI2OTJkZWExZjY1MTcxY2UzL2RvY3MvLnZ1ZXByZXNzL2Rpc3QvYXNzZXRzL2ltZy9zZWFyY2guODM2MjE2Njkuc3ZnXCIpXHJcbiAgICAgICAgICAgLjZyZW0gLjVyZW0gbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH06Zm9jdXN7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyMGM5OTc7XHJcbiAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBUEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/navbar.vue?vue&type=script&lang=js&\n");

/***/ })

})