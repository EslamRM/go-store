webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plain-pagination */ \"./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      items: [],\n      currentPage: 1,\n      totalPages: 30,\n      bootstrapPaginationClasses: {\n        ul: 'pagination',\n        li: 'page-item',\n        liActive: 'active',\n        liDisable: 'disabled',\n        button: 'page-link'\n      },\n      paginationAnchorTexts: {\n        first: 'First',\n        prev: 'Previous',\n        next: 'Next',\n        last: 'Last'\n      },\n      featuredProducts: [],\n      page: 1,\n      perPage: 9,\n      pages: []\n    };\n  },\n  //methods:\n  // setPages () {\n  //   let numberOfPages = Math.ceil(this.products.length / this.perPage);\n  //   for (let index = 1; index <= numberOfPages; index++) {\n  //     this.pages.push(index);\n  //   }\n  // },\n  // watch: {\n  //   posts () {\n  //     this.setPages();\n  //   },\n  components: {\n    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0___default.a\n  } // this.category = data;\n  // for (const cat of this.category) {\n  //   this.categories.push(cat.name);\n  //   for (const item of cat.category) {\n  //       this.products.push(item);\n  //   }\n  // }\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxoMyBjbGFzcz1cIkxhc3Rlc3QgbXQtNVwiPkxhc3Rlc3QgUHJvZHVjdHM8L2gzPlxyXG4gICAgPGhyPlxyXG4gICAgPGItcm93PlxyXG4gICAgICA8Yi1jb2wgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIGl0ZW1zLnNsaWNlKDEwMDAsMTAxMilcIiA6a2V5PVwiaW5kZXhcIiBjb2xzPVwiNFwiPlxyXG4gICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgIG5vLWJvZHlcclxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMHJlbTsgbWFyZ2luLXRvcDogM3JlbVwiXHJcbiAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgIHYtaWY9XCJwcm9kdWN0LmltYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Yi1pbWcgOnNyYz1cInByb2R1Y3QuaW1hZ2VcIiBpbWctdG9wIHN0eWxlPVwiaGVpZ2h0OiAxOHJlbVwiPjwvYi1pbWc+XHJcbiAgICAgICAgICA8Yi1saXN0LWdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5uYW1lIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QucHJpY2UgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5zdG9jayB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57eyBwcm9kdWN0LmRlbGl2ZXJ5IH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICAgIDxoMyBjbGFzcz1cInRvcCBtdC01XCI+VG9wIFByb2R1Y3RzPC9oMz5cclxuICAgIDxocj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwiKHByb2R1Y3QsaW5kZXgpIGluIGZlYXR1cmVkUHJvZHVjdHMuc2xpY2UoLTEwLC0xKVwiIDprZXk9XCJpbmRleFwiIGNvbHM9XCI0XCI+XHJcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvcHJvZHVjdHMvJytwcm9kdWN0LnNsdWdcIj5cclxuICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgbm8tYm9keVxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07IG1hcmdpbi10b3A6IDNyZW1cIlxyXG4gICAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Yi1pbWcgOnNyYz1cInByb2R1Y3QuaW1hZ2VcIiBpbWctdG9wIHN0eWxlPVwiaGVpZ2h0OiAxOHJlbVwiPjwvYi1pbWc+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAgZmx1c2g+XHJcbiAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QubmFtZSB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QucHJpY2UgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57eyBwcm9kdWN0LnN0b2NrIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5kZWxpdmVyeSB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgICA8cD5DdXJyZW50IHBhZ2U6IHt7IGN1cnJlbnRQYWdlIH19PC9wPlxyXG4gICAgPHYtcGFnaW5hdGlvblxyXG4gICAgICB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIlxyXG4gICAgICA6cGFnZS1jb3VudD1cInRvdGFsUGFnZXNcIlxyXG4gICAgICA6Y2xhc3Nlcz1cImJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzXCJcclxuICAgICAgOmxhYmVscz1cInBhZ2luYXRpb25BbmNob3JUZXh0c1wiXHJcbiAgICA+PC92LXBhZ2luYXRpb24+XHJcbiAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHZQYWdpbmF0aW9uIGZyb20gXCJ2dWUtcGxhaW4tcGFnaW5hdGlvblwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwcm9kdWN0TGlzdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtczogW10sXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICB0b3RhbFBhZ2VzOiAzMCxcclxuICAgICAgYm9vdHN0cmFwUGFnaW5hdGlvbkNsYXNzZXM6IHtcclxuICAgICAgICB1bDogJ3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGxpOiAncGFnZS1pdGVtJyxcclxuICAgICAgICBsaUFjdGl2ZTogJ2FjdGl2ZScsXHJcbiAgICAgICAgbGlEaXNhYmxlOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgIGJ1dHRvbjogJ3BhZ2UtbGluaydcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbkFuY2hvclRleHRzOiB7XHJcbiAgICAgICAgZmlyc3Q6ICdGaXJzdCcsXHJcbiAgICAgICAgcHJldjogJ1ByZXZpb3VzJyxcclxuICAgICAgICBuZXh0OiAnTmV4dCcsXHJcbiAgICAgICAgbGFzdDogJ0xhc3QnXHJcbiAgICAgIH0sXHJcbiAgICAgIGZlYXR1cmVkUHJvZHVjdHM6W10sXHJcbiAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIHBlclBhZ2U6IDksXHJcbiAgICAgIHBhZ2VzOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICAvL21ldGhvZHM6XHJcbiAgICAvLyBzZXRQYWdlcyAoKSB7XHJcbiAgICAvLyAgIGxldCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMucHJvZHVjdHMubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcclxuICAgIC8vICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBudW1iZXJPZlBhZ2VzOyBpbmRleCsrKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wYWdlcy5wdXNoKGluZGV4KTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSxcclxuICAvLyB3YXRjaDoge1xyXG4gIC8vICAgcG9zdHMgKCkge1xyXG4gIC8vICAgICB0aGlzLnNldFBhZ2VzKCk7XHJcbiAgLy8gICB9LFxyXG4gIGNvbXBvbmVudHM6e1xyXG4gICAgdlBhZ2luYXRpb24sXHJcbiAgfSBcclxuICAvLyB0aGlzLmNhdGVnb3J5ID0gZGF0YTtcclxuICAvLyBmb3IgKGNvbnN0IGNhdCBvZiB0aGlzLmNhdGVnb3J5KSB7XHJcbiAgLy8gICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXQubmFtZSk7XHJcbiAgLy8gICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0LmNhdGVnb3J5KSB7XHJcbiAgLy8gICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKGl0ZW0pO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAgIFxyXG4gIC8vIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWpEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ })

})