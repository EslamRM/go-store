webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {// products: [],\n      // category:'',\n    };\n  },\n  created: function created() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://127.0.0.1:8000/data/Categories\").then(function (res) {\n      var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var cat = _step.value;\n          //this.category = cat;\n          //this.products.push(cat.category);\n          console.log(cat);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }).catch(function (e) {\n      console.log(e);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPCEtLSA8Yi1jb2wgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHByb2R1Y3RzXCJcclxuICAgICAgICAgIDprZXk9XCJpbmRleFwiIGNvbHM9JzQnPlxyXG4gICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgIG5vLWJvZHlcclxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMHJlbTttYXJnaW4tdG9wOjNyZW07XCJcclxuICAgICAgICAgIGltZy1hbHQ9XCJcIlxyXG4gICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8Yi1pbWcgOnNyYz0ncHJvZHVjdC5pbWFnZScgaW1nLXRvcD48L2ItaW1nPlxyXG4gICAgICAgICAgPGItbGlzdC1ncm91cCBmbHVzaD5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5uYW1lfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LmNhdGVnb3J5fX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LnByaWNlfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LnN0b2NrfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3twcm9kdWN0LmRlbGl2ZXJ5fX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgIDwvYi1jb2w+IC0tPlxyXG4gICAgPC9iLXJvdz5cclxuICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInByb2R1Y3RMaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIHByb2R1Y3RzOiBbXSxcclxuICAgICAgLy8gY2F0ZWdvcnk6JycsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9DYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiByZXMuZGF0YSkge1xyXG4gICAgICAgICAgLy90aGlzLmNhdGVnb3J5ID0gY2F0O1xyXG4gICAgICAgICAgLy90aGlzLnByb2R1Y3RzLnB1c2goY2F0LmNhdGVnb3J5KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQXJCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ })

})