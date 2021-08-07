webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shopByCategory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shopByCategory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-plain-pagination */ \"./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"shopByCategory\",\n  data: function data() {\n    return {\n      category: [],\n      currentPage: 1,\n      totalPages: 30,\n      bootstrapPaginationClasses: {\n        ul: 'pagination',\n        li: 'page-item',\n        liActive: 'active',\n        liDisable: 'disabled',\n        button: 'page-link'\n      },\n      paginationAnchorTexts: {\n        first: 'First',\n        prev: 'Previous',\n        next: 'Next',\n        last: 'Last'\n      },\n      page: 1,\n      perPage: 9,\n      pages: []\n    };\n  },\n  components: {\n    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_1___default.a\n  },\n  computed: {\n    items: function items() {\n      return this.$store.state.items;\n    }\n  },\n  methods: {\n    getCategory: function getCategory() {\n      var _this = this;\n\n      this.items.forEach(function (e) {\n        if (e.category == _this.$route.params.id) {\n          _this.category.push(e);\n        }\n      });\n    },\n    created: function created() {\n      this.getCategory();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvc2hvcEJ5Q2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zaG9wQnlDYXRlZ29yeS52dWU/MTVmMyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxoMyBjbGFzcz1cInRvcCBtdC01XCI+e3t0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1Z319PC9oMz5cclxuICAgIDxocj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwicHJvZHVjdCBpbiBjYXRlZ29yeVwiIDprZXk9XCJwcm9kdWN0LmlkXCIgY29scz1cIjRcIj5cclxuICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgbm8tYm9keVxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07IG1hcmdpbi10b3A6IDNyZW1cIlxyXG4gICAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9wcm9kdWN0cy8nK3Byb2R1Y3Quc2x1Z1wiPjxiLWltZyA6c3JjPVwicHJvZHVjdC5pbWFnZVwiIGltZy10b3Agc3R5bGU9XCJoZWlnaHQ6IDE4cmVtO3dpZHRoOjEwMCU7XCI+PC9iLWltZz48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT48cm91dGVyLWxpbmsgOnRvPVwiJy9wcm9kdWN0cy8nK3Byb2R1Y3Quc2x1Z1wiPnt7IHByb2R1Y3QubmFtZS5zbGljZSgwLDEwMCkgfX08L3JvdXRlci1saW5rPjwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBwcm9kdWN0LnByaWNlIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgICA8cD5DdXJyZW50IHBhZ2U6IHt7IGN1cnJlbnRQYWdlIH19PC9wPlxyXG4gICAgPHYtcGFnaW5hdGlvblxyXG4gICAgICB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIlxyXG4gICAgICA6cGFnZS1jb3VudD1cInRvdGFsUGFnZXNcIlxyXG4gICAgICA6Y2xhc3Nlcz1cImJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzXCJcclxuICAgICAgOmxhYmVscz1cInBhZ2luYXRpb25BbmNob3JUZXh0c1wiXHJcbiAgICA+PC92LXBhZ2luYXRpb24+XHJcbiAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHZQYWdpbmF0aW9uIGZyb20gXCJ2dWUtcGxhaW4tcGFnaW5hdGlvblwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOlwic2hvcEJ5Q2F0ZWdvcnlcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhdGVnb3J5OltdLCAgXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAgICAgdG90YWxQYWdlczogMzAsXHJcbiAgICAgICAgYm9vdHN0cmFwUGFnaW5hdGlvbkNsYXNzZXM6IHtcclxuICAgICAgICB1bDogJ3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGxpOiAncGFnZS1pdGVtJyxcclxuICAgICAgICBsaUFjdGl2ZTogJ2FjdGl2ZScsXHJcbiAgICAgICAgbGlEaXNhYmxlOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgIGJ1dHRvbjogJ3BhZ2UtbGluaydcclxuICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbkFuY2hvclRleHRzOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiAnRmlyc3QnLFxyXG4gICAgICAgICAgICBwcmV2OiAnUHJldmlvdXMnLFxyXG4gICAgICAgICAgICBuZXh0OiAnTmV4dCcsXHJcbiAgICAgICAgICAgIGxhc3Q6ICdMYXN0J1xyXG4gICAgfSxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIHBlclBhZ2U6IDksXHJcbiAgICAgICAgcGFnZXM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6e1xyXG4gICAgdlBhZ2luYXRpb25cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBpdGVtcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuaXRlbXM7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRDYXRlZ29yeSgpe1xyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICBpZihlLmNhdGVnb3J5ID09IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucHVzaChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldENhdGVnb3J5KCk7XHJcbiAgICB9LFxyXG59LFxyXG59XHJcbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFqQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shopByCategory.vue?vue&type=script&lang=js&\n");

/***/ })

})