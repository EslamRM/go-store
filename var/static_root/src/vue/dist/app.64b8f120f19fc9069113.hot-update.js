webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      products: [],\n      currentPage: '' // category:'',\n      // categories:[],\n\n    };\n  },\n  computed: function Page() {\n    this.currentPage = this.$parent.currentPage;\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://127.0.0.1:8000/data/products/?page=\".concat(this.currentPage)).then(function (res) {\n      console.log(_this.currentPage);\n      var data = res.data.results;\n\n      var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n\n          _this.products.push(item);\n        } // this.category = data;\n        // for (const cat of this.category) {\n        //   this.categories.push(cat.name);\n        //   for (const item of cat.category) {\n        //       this.products.push(item);\n        //   }\n        // }\n\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }).catch(function (e) {\n      console.log(e);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPHA+Q3VycmVudCBwYWdlOiB7eyBjdXJyZW50UGFnZSB9fTwvcD5cclxuICAgICAgPGItY29sIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBwcm9kdWN0c1wiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIiBjb2xzPSc0Jz5cclxuICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICBuby1ib2R5XHJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07bWFyZ2luLXRvcDozcmVtO1wiXHJcbiAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgIHYtaWY9XCJwcm9kdWN0LmltYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGItaW1nIDpzcmM9J3Byb2R1Y3QuaW1hZ2UnIGltZy10b3Agc3R5bGU9XCJoZWlnaHQ6MThyZW07XCI+PC9iLWltZz5cclxuICAgICAgICAgIDxiLWxpc3QtZ3JvdXAgZmx1c2g+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e3Byb2R1Y3QubmFtZX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5wcmljZX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5zdG9ja319PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5kZWxpdmVyeX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInByb2R1Y3RMaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY3VycmVudFBhZ2U6JycsXHJcbiAgICAgIC8vIGNhdGVnb3J5OicnLFxyXG4gICAgICAvLyBjYXRlZ29yaWVzOltdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOmZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlPXRoaXMuJHBhcmVudC5jdXJyZW50UGFnZTtcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8/cGFnZT0ke3RoaXMuY3VycmVudFBhZ2V9YClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFBhZ2UpXHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuY2F0ZWdvcnkgPSBkYXRhO1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgY2F0IG9mIHRoaXMuY2F0ZWdvcnkpIHtcclxuICAgICAgICAvLyAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNhdC5uYW1lKTtcclxuICAgICAgICAvLyAgIGZvciAoY29uc3QgaXRlbSBvZiBjYXQuY2F0ZWdvcnkpIHtcclxuICAgICAgICAvLyAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFqQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ })

})