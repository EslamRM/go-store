webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      products: [] // category:'',\n\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://127.0.0.1:8000/data/Categories\").then(function (res) {\n      var data = res.data;\n\n      var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var cat = _step.value;\n\n          //this.category = cat;\n          _this.products.push(cat.category);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.products),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var product = _step2.value;\n          console.log(product[0]);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }).catch(function (e) {\n      console.log(e);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBwcm9kdWN0c1wiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIiBjb2xzPSc0Jz5cclxuICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICBuby1ib2R5XHJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07bWFyZ2luLXRvcDozcmVtO1wiXHJcbiAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgIHYtaWY9XCJwcm9kdWN0LmltYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGItaW1nIDpzcmM9J3Byb2R1Y3QuaW1hZ2UnIGltZy10b3A+PC9iLWltZz5cclxuICAgICAgICAgIDxiLWxpc3QtZ3JvdXAgZmx1c2g+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e3Byb2R1Y3QubmFtZX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5jYXRlZ29yeX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5wcmljZX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5zdG9ja319PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5kZWxpdmVyeX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInByb2R1Y3RMaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgLy8gY2F0ZWdvcnk6JycsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9DYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgZm9yIChjb25zdCBjYXQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgLy90aGlzLmNhdGVnb3J5ID0gY2F0O1xyXG4gICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKGNhdC5jYXRlZ29yeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0WzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUF4QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ })

})