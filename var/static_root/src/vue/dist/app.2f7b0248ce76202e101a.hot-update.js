webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/categoryList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/categoryList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"categoryList\",\n  data: function data() {\n    return {\n      categories: \"\"\n    };\n  },\n  methods: {\n    getCategory: function getCategory() {\n      axios.get(\"http://127.0.0.1:8000/data/Categories\").then(function (res) {\n        categories = res.data;\n      }).catch(function (e) {\n        console.log(e);\n      });\n    }\n  },\n  created: function created() {\n    this.getCategory();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2F0ZWdvcnlMaXN0LnZ1ZT9kZGUzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Yi1jb250YWluZXIgY2xhc3M9XCJidi1leGFtcGxlLXJvd1wiPlxyXG4gICAgPGItcm93PlxyXG4gICAgICA8Yi1jb2wgdi1mb3I9XCJjYXQgaW4gY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICA6a2V5PVwiY2F0LmlkXCIgY29scz0nMyc+XHJcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvY2F0ZWdvcnkvJytjYXQuaWQrJy8nK2NhdC5uYW1lXCI+IFxyXG4gICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICBuby1ib2R5XHJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMHJlbTttYXJnaW4tdG9wOjNyZW07XCJcclxuICAgICAgICAgICAgaW1nLWFsdD1cIlwiXHJcbiAgICAgICAgICAgIHYtaWY9XCJjYXQuaW1hZ2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPGItaW1nIDpzcmM9J2NhdC5pbWFnZScgaW1nLXRvcCBzdHlsZT1cImhlaWdodDoxNHJlbTtcIj48L2ItaW1nPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e2NhdC5uYW1lfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8L2ItbGlzdC1ncm91cD5cclxuICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgIDwvcm91dGVyLWxpbms+IFxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJjYXRlZ29yeUxpc3RcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2F0ZWdvcmllczogXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRDYXRlZ29yeSgpe1xyXG4gICAgICBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9DYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY2F0ZWdvcmllcyA9IHJlcy5kYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/categoryList.vue?vue&type=script&lang=js&\n");

/***/ })

})