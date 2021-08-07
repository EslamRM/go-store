webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-plain-pagination */ \"./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      items: [],\n      // category:'',\n      // categories:[],\n      currentPage: 1,\n      totalPages: 30,\n      bootstrapPaginationClasses: {\n        ul: 'pagination',\n        li: 'page-item',\n        liActive: 'active',\n        liDisable: 'disabled',\n        button: 'page-link'\n      },\n      paginationAnchorTexts: {\n        first: 'First',\n        prev: 'Previous',\n        next: 'Next',\n        last: 'Last'\n      },\n      products: [],\n      featuredProducts: [],\n      baseUrl: 'http://127.0.0.1:8000/data/products/',\n      featuredUrl: 'http://127.0.0.1:8000/data/products/?category=&min_price=&max_price=&featured=true',\n      page: 1,\n      perPage: 9,\n      pages: []\n    };\n  },\n  methods: {\n    getProducts: function getProducts() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseUrl).then(function (response) {\n        _this.products = response.data;\n\n        var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.products),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n\n            _this.items.push(item);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }).catch(function (response) {\n        console.log(response);\n      });\n    },\n    getFeatured: function getFeatured() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.featuredUrl).then(function (response) {\n        _this2.products = response.data;\n\n        var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this2.products),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var item = _step2.value;\n\n            _this2.featuredProducts.push(item);\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }).catch(function (response) {\n        console.log(response);\n      });\n    } // setPages () {\n    //   let numberOfPages = Math.ceil(this.products.length / this.perPage);\n    //   for (let index = 1; index <= numberOfPages; index++) {\n    //     this.pages.push(index);\n    //   }\n    // },\n\n  },\n  created: function created() {\n    this.getProducts();\n    this.getFeatured();\n  },\n  // watch: {\n  //   posts () {\n  //     this.setPages();\n  //   },\n  components: {\n    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default.a\n  } // this.category = data;\n  // for (const cat of this.category) {\n  //   this.categories.push(cat.name);\n  //   for (const item of cat.category) {\n  //       this.products.push(item);\n  //   }\n  // }\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxoMyBjbGFzcz1cIkxhc3Rlc3QgbXQtNVwiPkxhc3Rlc3QgUHJvZHVjdHM8L2gzPlxyXG4gICAgPGhyPlxyXG4gICAgPGItcm93PlxyXG4gICAgICA8Yi1jb2wgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIGl0ZW1zLnNsaWNlKDEwMDAsMTAxMilcIiA6a2V5PVwiaW5kZXhcIiBjb2xzPVwiNFwiPlxyXG4gICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgIG5vLWJvZHlcclxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMHJlbTsgbWFyZ2luLXRvcDogM3JlbVwiXHJcbiAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgIHYtaWY9XCJwcm9kdWN0LmltYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Yi1pbWcgOnNyYz1cInByb2R1Y3QuaW1hZ2VcIiBpbWctdG9wIHN0eWxlPVwiaGVpZ2h0OiAxOHJlbVwiPjwvYi1pbWc+XHJcbiAgICAgICAgICA8Yi1saXN0LWdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5uYW1lIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QucHJpY2UgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5zdG9jayB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57eyBwcm9kdWN0LmRlbGl2ZXJ5IH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICAgIDxoMyBjbGFzcz1cInRvcCBtdC01XCI+VG9wIFByb2R1Y3RzPC9oMz5cclxuICAgIDxocj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBmZWF0dXJlZFByb2R1Y3RzLnNsaWNlKC0xMCwtMSlcIiA6a2V5PVwiaW5kZXhcIiBjb2xzPVwiNFwiPlxyXG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9wcm9kdWN0X2RldGFpbHNcIj5cclxuICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgbm8tYm9keVxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07IG1hcmdpbi10b3A6IDNyZW1cIlxyXG4gICAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Yi1pbWcgOnNyYz1cInByb2R1Y3QuaW1hZ2VcIiBpbWctdG9wIHN0eWxlPVwiaGVpZ2h0OiAxOHJlbVwiPjwvYi1pbWc+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAgZmx1c2g+XHJcbiAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QubmFtZSB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QucHJpY2UgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57eyBwcm9kdWN0LnN0b2NrIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5kZWxpdmVyeSB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgICA8cD5DdXJyZW50IHBhZ2U6IHt7IGN1cnJlbnRQYWdlIH19PC9wPlxyXG4gICAgPHYtcGFnaW5hdGlvblxyXG4gICAgICB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIlxyXG4gICAgICA6cGFnZS1jb3VudD1cInRvdGFsUGFnZXNcIlxyXG4gICAgICA6Y2xhc3Nlcz1cImJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzXCJcclxuICAgICAgOmxhYmVscz1cInBhZ2luYXRpb25BbmNob3JUZXh0c1wiXHJcbiAgICA+PC92LXBhZ2luYXRpb24+XHJcbiAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHZQYWdpbmF0aW9uIGZyb20gXCJ2dWUtcGxhaW4tcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInByb2R1Y3RMaXN0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgLy8gY2F0ZWdvcnk6JycsXHJcbiAgICAgIC8vIGNhdGVnb3JpZXM6W10sXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICB0b3RhbFBhZ2VzOiAzMCxcclxuICAgICAgYm9vdHN0cmFwUGFnaW5hdGlvbkNsYXNzZXM6IHtcclxuICAgICAgICB1bDogJ3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGxpOiAncGFnZS1pdGVtJyxcclxuICAgICAgICBsaUFjdGl2ZTogJ2FjdGl2ZScsXHJcbiAgICAgICAgbGlEaXNhYmxlOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgIGJ1dHRvbjogJ3BhZ2UtbGluaydcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbkFuY2hvclRleHRzOiB7XHJcbiAgICAgICAgZmlyc3Q6ICdGaXJzdCcsXHJcbiAgICAgICAgcHJldjogJ1ByZXZpb3VzJyxcclxuICAgICAgICBuZXh0OiAnTmV4dCcsXHJcbiAgICAgICAgbGFzdDogJ0xhc3QnXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgZmVhdHVyZWRQcm9kdWN0czpbXSxcclxuICAgICAgYmFzZVVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL3Byb2R1Y3RzLycsXHJcbiAgICAgIGZlYXR1cmVkVXJsOidodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8/Y2F0ZWdvcnk9Jm1pbl9wcmljZT0mbWF4X3ByaWNlPSZmZWF0dXJlZD10cnVlJyxcclxuICAgICAgcGFnZTogMSxcclxuICAgICAgcGVyUGFnZTogOSxcclxuICAgICAgcGFnZXM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdldFByb2R1Y3RzICgpIHtcclxuICAgICAgYXhpb3MuZ2V0KHRoaXMuYmFzZVVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RmVhdHVyZWQoKXtcclxuICAgICAgYXhpb3MuZ2V0KHRoaXMuZmVhdHVyZWRVcmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5wcm9kdWN0cykge1xyXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMucHVzaChpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBzZXRQYWdlcyAoKSB7XHJcbiAgICAvLyAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMucHJvZHVjdHMubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcclxuICAgIC8vICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBudW1iZXJPZlBhZ2VzOyBpbmRleCsrKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wYWdlcy5wdXNoKGluZGV4KTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSxcclxuICB9LFxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gICAgdGhpcy5nZXRQcm9kdWN0cygpO1xyXG4gICAgdGhpcy5nZXRGZWF0dXJlZCgpO1xyXG4gIH0sXHJcbiAgLy8gd2F0Y2g6IHtcclxuICAvLyAgIHBvc3RzICgpIHtcclxuICAvLyAgICAgdGhpcy5zZXRQYWdlcygpO1xyXG4gIC8vICAgfSxcclxuICBjb21wb25lbnRzOntcclxuICAgIHZQYWdpbmF0aW9uLFxyXG4gIH0sICBcclxuICAvLyB0aGlzLmNhdGVnb3J5ID0gZGF0YTtcclxuICAvLyBmb3IgKGNvbnN0IGNhdCBvZiB0aGlzLmNhdGVnb3J5KSB7XHJcbiAgLy8gICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXQubmFtZSk7XHJcbiAgLy8gICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0LmNhdGVnb3J5KSB7XHJcbiAgLy8gICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKGl0ZW0pO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAgIFxyXG4gIC8vIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7cbc2498-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cbc2498-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=template&id=f2bcec66& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"bv-example-row\" },\n    [\n      _c(\"h3\", { staticClass: \"Lastest mt-5\" }, [_vm._v(\"Lastest Products\")]),\n      _c(\"hr\"),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.items.slice(1000, 1012), function(product, index) {\n          return _c(\n            \"b-col\",\n            { key: index, attrs: { cols: \"4\" } },\n            [\n              product.image\n                ? _c(\n                    \"b-card\",\n                    {\n                      staticStyle: {\n                        \"max-width\": \"20rem\",\n                        \"margin-top\": \"3rem\"\n                      },\n                      attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                    },\n                    [\n                      _c(\"b-img\", {\n                        staticStyle: { height: \"18rem\" },\n                        attrs: { src: product.image, \"img-top\": \"\" }\n                      }),\n                      _c(\n                        \"b-list-group\",\n                        { attrs: { flush: \"\" } },\n                        [\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.name))\n                          ]),\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.price))\n                          ]),\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.stock))\n                          ]),\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.delivery))\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"h3\", { staticClass: \"top mt-5\" }, [_vm._v(\"Top Products\")]),\n      _c(\"hr\"),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.featuredProducts.slice(-10, -1), function(product, index) {\n          return _c(\n            \"b-col\",\n            { key: index, attrs: { cols: \"4\" } },\n            [\n              _c(\n                \"router-link\",\n                { attrs: { to: \"/product_details\" } },\n                [\n                  product.image\n                    ? _c(\n                        \"b-card\",\n                        {\n                          staticStyle: {\n                            \"max-width\": \"20rem\",\n                            \"margin-top\": \"3rem\"\n                          },\n                          attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                        },\n                        [\n                          _c(\"b-img\", {\n                            staticStyle: { height: \"18rem\" },\n                            attrs: { src: product.image, \"img-top\": \"\" }\n                          }),\n                          _c(\n                            \"b-list-group\",\n                            { attrs: { flush: \"\" } },\n                            [\n                              _c(\"b-list-group-item\", [\n                                _vm._v(_vm._s(product.name))\n                              ]),\n                              _c(\"b-list-group-item\", [\n                                _vm._v(_vm._s(product.price))\n                              ]),\n                              _c(\"b-list-group-item\", [\n                                _vm._v(_vm._s(product.stock))\n                              ]),\n                              _c(\"b-list-group-item\", [\n                                _vm._v(_vm._s(product.delivery))\n                              ])\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    : _vm._e()\n                ],\n                1\n              )\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"p\", [_vm._v(\"Current page: \" + _vm._s(_vm.currentPage))]),\n      _c(\"v-pagination\", {\n        attrs: {\n          \"page-count\": _vm.totalPages,\n          classes: _vm.bootstrapPaginationClasses,\n          labels: _vm.paginationAnchorTexts\n        },\n        model: {\n          value: _vm.currentPage,\n          callback: function($$v) {\n            _vm.currentPage = $$v\n          },\n          expression: \"currentPage\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiN2NiYzI0OTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMmJjZWM2NiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0TGlzdC52dWU/YTVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJ2LWV4YW1wbGUtcm93XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiTGFzdGVzdCBtdC01XCIgfSwgW192bS5fdihcIkxhc3Rlc3QgUHJvZHVjdHNcIildKSxcbiAgICAgIF9jKFwiaHJcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLnNsaWNlKDEwMDAsIDEwMTIpLCBmdW5jdGlvbihwcm9kdWN0LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgY29sczogXCI0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIzcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIlwiLCBcImltZy1hbHRcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxOHJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIFwiaW1nLXRvcFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdXNoOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0LnByaWNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvZHVjdC5zdG9jaykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2R1Y3QuZGVsaXZlcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wIG10LTVcIiB9LCBbX3ZtLl92KFwiVG9wIFByb2R1Y3RzXCIpXSksXG4gICAgICBfYyhcImhyXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgX3ZtLl9sKF92bS5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKC0xMCwgLTEpLCBmdW5jdGlvbihwcm9kdWN0LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgY29sczogXCI0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvcHJvZHVjdF9kZXRhaWxzXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjNyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJcIiwgXCJpbWctYWx0XCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE4cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIFwiaW1nLXRvcFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbHVzaDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvZHVjdC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2R1Y3Quc3RvY2spKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0LmRlbGl2ZXJ5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQ3VycmVudCBwYWdlOiBcIiArIF92bS5fcyhfdm0uY3VycmVudFBhZ2UpKV0pLFxuICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwicGFnZS1jb3VudFwiOiBfdm0udG90YWxQYWdlcyxcbiAgICAgICAgICBjbGFzc2VzOiBfdm0uYm9vdHN0cmFwUGFnaW5hdGlvbkNsYXNzZXMsXG4gICAgICAgICAgbGFiZWxzOiBfdm0ucGFnaW5hdGlvbkFuY2hvclRleHRzXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50UGFnZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uY3VycmVudFBhZ2UgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudFBhZ2VcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7cbc2498-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&\n");

/***/ })

})