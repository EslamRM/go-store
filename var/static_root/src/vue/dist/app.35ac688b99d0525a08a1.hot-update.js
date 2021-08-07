webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-plain-pagination */ \"./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"productList\",\n  data: function data() {\n    return {\n      items: [],\n      // category:'',\n      // categories:[],\n      currentPage: 1,\n      totalPages: 30,\n      bootstrapPaginationClasses: {\n        ul: 'pagination',\n        li: 'page-item',\n        liActive: 'active',\n        liDisable: 'disabled',\n        button: 'page-link'\n      },\n      paginationAnchorTexts: {\n        first: 'First',\n        prev: 'Previous',\n        next: 'Next',\n        last: 'Last'\n      },\n      products: [],\n      baseUrl: 'http://127.0.0.1:8000/data/products/',\n      page: 1,\n      perPage: 9,\n      pages: []\n    };\n  },\n  methods: {\n    getProducts: function getProducts() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.baseUrl).then(function (response) {\n        _this.products = response.data;\n\n        var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.products),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n\n            _this.items.push(item);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        console.log(_this.products);\n      }).catch(function (response) {\n        console.log(response);\n      });\n    } // setPages () {\n    //   let numberOfPages = Math.ceil(this.products.length / this.perPage);\n    //   for (let index = 1; index <= numberOfPages; index++) {\n    //     this.pages.push(index);\n    //   }\n    // },\n\n  },\n  created: function created() {\n    this.getProducts();\n  },\n  // watch: {\n  //   posts () {\n  //     this.setPages();\n  //   },\n  components: {\n    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default.a\n  } // this.category = data;\n  // for (const cat of this.category) {\n  //   this.categories.push(cat.name);\n  //   for (const item of cat.category) {\n  //       this.products.push(item);\n  //   }\n  // }\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wcm9kdWN0TGlzdC52dWU/ZWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxoMyBjbGFzcz1cIkxhc3Rlc3RcIj5MYXN0ZXN0IFByb2R1Y3RzPC9oMz5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBpdGVtc1wiIDprZXk9XCJpbmRleFwiIGNvbHM9XCI0XCI+XHJcbiAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgbm8tYm9keVxyXG4gICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDIwcmVtOyBtYXJnaW4tdG9wOiAzcmVtXCJcclxuICAgICAgICAgIGltZy1hbHQ9XCJcIlxyXG4gICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxiLWltZyA6c3JjPVwicHJvZHVjdC5pbWFnZVwiIGltZy10b3Agc3R5bGU9XCJoZWlnaHQ6IDE4cmVtXCI+PC9iLWltZz5cclxuICAgICAgICAgIDxiLWxpc3QtZ3JvdXAgZmx1c2g+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57eyBwcm9kdWN0Lm5hbWUgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+e3sgcHJvZHVjdC5wcmljZSB9fTwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT57eyBwcm9kdWN0LnN0b2NrIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPnt7IHByb2R1Y3QuZGVsaXZlcnkgfX08L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgIDwvYi1jb2w+XHJcbiAgICA8L2Itcm93PlxyXG4gICAgPHA+Q3VycmVudCBwYWdlOiB7eyBjdXJyZW50UGFnZSB9fTwvcD5cclxuICAgIDx2LXBhZ2luYXRpb25cclxuICAgICAgdi1tb2RlbD1cImN1cnJlbnRQYWdlXCJcclxuICAgICAgOnBhZ2UtY291bnQ9XCJ0b3RhbFBhZ2VzXCJcclxuICAgICAgOmNsYXNzZXM9XCJib290c3RyYXBQYWdpbmF0aW9uQ2xhc3Nlc1wiXHJcbiAgICAgIDpsYWJlbHM9XCJwYWdpbmF0aW9uQW5jaG9yVGV4dHNcIlxyXG4gICAgPjwvdi1wYWdpbmF0aW9uPlxyXG4gIDwvYi1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB2UGFnaW5hdGlvbiBmcm9tIFwidnVlLXBsYWluLXBhZ2luYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwcm9kdWN0TGlzdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtczogW10sXHJcbiAgICAgIC8vIGNhdGVnb3J5OicnLFxyXG4gICAgICAvLyBjYXRlZ29yaWVzOltdLFxyXG4gICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgdG90YWxQYWdlczogMzAsXHJcbiAgICAgIGJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzOiB7XHJcbiAgICAgICAgdWw6ICdwYWdpbmF0aW9uJyxcclxuICAgICAgICBsaTogJ3BhZ2UtaXRlbScsXHJcbiAgICAgICAgbGlBY3RpdmU6ICdhY3RpdmUnLFxyXG4gICAgICAgIGxpRGlzYWJsZTogJ2Rpc2FibGVkJyxcclxuICAgICAgICBidXR0b246ICdwYWdlLWxpbmsnXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb25BbmNob3JUZXh0czoge1xyXG4gICAgICAgIGZpcnN0OiAnRmlyc3QnLFxyXG4gICAgICAgIHByZXY6ICdQcmV2aW91cycsXHJcbiAgICAgICAgbmV4dDogJ05leHQnLFxyXG4gICAgICAgIGxhc3Q6ICdMYXN0J1xyXG4gICAgICB9LFxyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIGJhc2VVcmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8nLFxyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICBwZXJQYWdlOiA5LFxyXG4gICAgICBwYWdlczogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0UHJvZHVjdHMgKCkge1xyXG4gICAgICBheGlvcy5nZXQodGhpcy5iYXNlVXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMucHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8gc2V0UGFnZXMgKCkge1xyXG4gICAgLy8gICBsZXQgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnByb2R1Y3RzLmxlbmd0aCAvIHRoaXMucGVyUGFnZSk7XHJcbiAgICAvLyAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtYmVyT2ZQYWdlczsgaW5kZXgrKykge1xyXG4gICAgLy8gICAgIHRoaXMucGFnZXMucHVzaChpbmRleCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgfSxcclxuICBjcmVhdGVkICgpIHtcclxuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuICB9LFxyXG4gIC8vIHdhdGNoOiB7XHJcbiAgLy8gICBwb3N0cyAoKSB7XHJcbiAgLy8gICAgIHRoaXMuc2V0UGFnZXMoKTtcclxuICAvLyAgIH0sXHJcbiAgY29tcG9uZW50czp7XHJcbiAgICB2UGFnaW5hdGlvbixcclxuICB9LCAgXHJcbiAgLy8gdGhpcy5jYXRlZ29yeSA9IGRhdGE7XHJcbiAgLy8gZm9yIChjb25zdCBjYXQgb2YgdGhpcy5jYXRlZ29yeSkge1xyXG4gIC8vICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0Lm5hbWUpO1xyXG4gIC8vICAgZm9yIChjb25zdCBpdGVtIG9mIGNhdC5jYXRlZ29yeSkge1xyXG4gIC8vICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChpdGVtKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgICBcclxuICAvLyB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFyRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=script&lang=js&\n");

/***/ })

})