webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plain-pagination */ \"./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      products: [],\n      // category:'',\n      // categories:[],\n      currentPage: 1,\n      totalPages: 30,\n      bootstrapPaginationClasses: {\n        ul: 'pagination',\n        li: 'page-item',\n        liActive: 'active',\n        liDisable: 'disabled',\n        button: 'page-link'\n      },\n      paginationAnchorTexts: {\n        first: 'First',\n        prev: 'Previous',\n        next: 'Next',\n        last: 'Last'\n      }\n    };\n  },\n  components: {\n    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_0___default.a\n  },\n  created: function created() {\n    var _this = this;\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://127.0.0.1:8000/data/products/?page=\".concat(this.currentPage)).then(function (res) {\n      console.log(_this.currentPage); // let data = res.data.results;\n      // for (const item of data) {\n      //   this.products.push(item);\n      // }\n      // this.category = data;\n      // for (const cat of this.category) {\n      //   this.categories.push(cat.name);\n      //   for (const item of cat.category) {\n      //       this.products.push(item);\n      //   }\n      // }\n    }).catch(function (e) {\n      console.log(e);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBwcm9kdWN0c1wiXHJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIiBjb2xzPSc0Jz5cclxuICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICBuby1ib2R5XHJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07bWFyZ2luLXRvcDozcmVtO1wiXHJcbiAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgIHYtaWY9XCJwcm9kdWN0LmltYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPGItaW1nIDpzcmM9J3Byb2R1Y3QuaW1hZ2UnIGltZy10b3Agc3R5bGU9XCJoZWlnaHQ6MThyZW07XCI+PC9iLWltZz5cclxuICAgICAgICAgIDxiLWxpc3QtZ3JvdXAgZmx1c2g+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57e3Byb2R1Y3QubmFtZX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5wcmljZX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5zdG9ja319PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7cHJvZHVjdC5kZWxpdmVyeX19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICAgIDxwPkN1cnJlbnQgcGFnZToge3sgY3VycmVudFBhZ2UgfX08L3A+XHJcbiAgICAgPHYtcGFnaW5hdGlvbiB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICA6cGFnZS1jb3VudD1cInRvdGFsUGFnZXNcIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3Nlcz1cImJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzXCJcclxuICAgICAgICAgICAgICAgICAgOmxhYmVscz1cInBhZ2luYXRpb25BbmNob3JUZXh0c1wiPjwvdi1wYWdpbmF0aW9uPiBcclxuICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdlBhZ2luYXRpb24gZnJvbSBcInZ1ZS1wbGFpbi1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwicHJvZHVjdExpc3RcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICAvLyBjYXRlZ29yeTonJyxcclxuICAgICAgLy8gY2F0ZWdvcmllczpbXSxcclxuICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICB0b3RhbFBhZ2VzOiAzMCxcclxuICAgICAgYm9vdHN0cmFwUGFnaW5hdGlvbkNsYXNzZXM6IHtcclxuICAgICAgICB1bDogJ3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGxpOiAncGFnZS1pdGVtJyxcclxuICAgICAgICBsaUFjdGl2ZTogJ2FjdGl2ZScsXHJcbiAgICAgICAgbGlEaXNhYmxlOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgIGJ1dHRvbjogJ3BhZ2UtbGluaydcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbkFuY2hvclRleHRzOiB7XHJcbiAgICAgICAgZmlyc3Q6ICdGaXJzdCcsXHJcbiAgICAgICAgcHJldjogJ1ByZXZpb3VzJyxcclxuICAgICAgICBuZXh0OiAnTmV4dCcsXHJcbiAgICAgICAgbGFzdDogJ0xhc3QnXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wb25lbnRzOntcclxuICAgIHZQYWdpbmF0aW9uLFxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL3Byb2R1Y3RzLz9wYWdlPSR7dGhpcy5jdXJyZW50UGFnZX1gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UGFnZSlcclxuICAgICAgICAvLyBsZXQgZGF0YSA9IHJlcy5kYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAvLyAgIHRoaXMucHJvZHVjdHMucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5jYXRlZ29yeSA9IGRhdGE7XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBjYXQgb2YgdGhpcy5jYXRlZ29yeSkge1xyXG4gICAgICAgIC8vICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0Lm5hbWUpO1xyXG4gICAgICAgIC8vICAgZm9yIChjb25zdCBpdGVtIG9mIGNhdC5jYXRlZ29yeSkge1xyXG4gICAgICAgIC8vICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChpdGVtKTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBYkE7QUFvQkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQS9DQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ })

})