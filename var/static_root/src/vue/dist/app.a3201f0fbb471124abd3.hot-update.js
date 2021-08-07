webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shopByCategory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shopByCategory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-plain-pagination */ \"./node_modules/vue-plain-pagination/dist/vue-plain-pagination.umd.min.js\");\n/* harmony import */ var vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"shopByCategory\",\n  data: function data() {\n    return {\n      category: [],\n      currentPage: 1,\n      totalPages: 30,\n      bootstrapPaginationClasses: {\n        ul: 'pagination',\n        li: 'page-item',\n        liActive: 'active',\n        liDisable: 'disabled',\n        button: 'page-link'\n      },\n      paginationAnchorTexts: {\n        first: 'First',\n        prev: 'Previous',\n        next: 'Next',\n        last: 'Last'\n      },\n      page: 1,\n      perPage: 9,\n      pages: []\n    };\n  },\n  components: {\n    vPagination: vue_plain_pagination__WEBPACK_IMPORTED_MODULE_2___default.a\n  },\n  created: function created() {\n    this.$root.$refs.A = this;\n  },\n  methods: {\n    getCategory: function getCategory() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://127.0.0.1:8000/data/products/?category=\".concat(this.categoryId, \"&min_price=&max_price=&featured=\")).then(function (res) {\n        var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var cat = _step.value;\n\n            _this.category.push(cat);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }).catch(function (e) {\n        console.log(e);\n      });\n    }\n  },\n  computed: {\n    categoryId: function categoryId() {\n      return this.$route.params.id;\n    }\n  },\n  watch: {\n    item: {\n      handler: function handler() {\n        var _this2 = this;\n\n        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://127.0.0.1:8000/data/products/?category=\".concat(this.categoryId, \"&min_price=&max_price=&featured=\")).then(function (res) {\n          var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var cat = _step2.value;\n\n              _this2.category.push(cat);\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }).catch(function (e) {\n          console.log(e);\n        });\n      },\n      deep: true,\n      immediate: true\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvc2hvcEJ5Q2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zaG9wQnlDYXRlZ29yeS52dWU/MTVmMyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgIDxoMyBjbGFzcz1cInRvcCBtdC01XCI+e3t0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1Z319PC9oMz5cclxuICAgIDxocj5cclxuICAgIDxiLXJvdz5cclxuICAgICAgPGItY29sIHYtZm9yPVwicHJvZHVjdCBpbiBjYXRlZ29yeVwiIDprZXk9XCJwcm9kdWN0LmlkXCIgY29scz1cIjRcIj5cclxuICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgbm8tYm9keVxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMjByZW07IG1hcmdpbi10b3A6IDNyZW1cIlxyXG4gICAgICAgICAgICBpbWctYWx0PVwiXCJcclxuICAgICAgICAgICAgdi1pZj1cInByb2R1Y3QuaW1hZ2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9wcm9kdWN0cy8nK3Byb2R1Y3Quc2x1Z1wiPjxiLWltZyA6c3JjPVwicHJvZHVjdC5pbWFnZVwiIGltZy10b3Agc3R5bGU9XCJoZWlnaHQ6IDE4cmVtO3dpZHRoOjEwMCU7XCI+PC9iLWltZz48L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8Yi1saXN0LWdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT48cm91dGVyLWxpbmsgOnRvPVwiJy9wcm9kdWN0cy8nK3Byb2R1Y3Quc2x1Z1wiPnt7IHByb2R1Y3QubmFtZS5zbGljZSgwLDEwMCkgfX08L3JvdXRlci1saW5rPjwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBwcm9kdWN0LnByaWNlIH19PC9iLWxpc3QtZ3JvdXAtaXRlbT5cclxuICAgICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgICA8cD5DdXJyZW50IHBhZ2U6IHt7IGN1cnJlbnRQYWdlIH19PC9wPlxyXG4gICAgPHYtcGFnaW5hdGlvblxyXG4gICAgICB2LW1vZGVsPVwiY3VycmVudFBhZ2VcIlxyXG4gICAgICA6cGFnZS1jb3VudD1cInRvdGFsUGFnZXNcIlxyXG4gICAgICA6Y2xhc3Nlcz1cImJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzXCJcclxuICAgICAgOmxhYmVscz1cInBhZ2luYXRpb25BbmNob3JUZXh0c1wiXHJcbiAgICA+PC92LXBhZ2luYXRpb24+XHJcbiAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdlBhZ2luYXRpb24gZnJvbSBcInZ1ZS1wbGFpbi1wYWdpbmF0aW9uXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6XCJzaG9wQnlDYXRlZ29yeVwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2F0ZWdvcnk6W10sICBcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICB0b3RhbFBhZ2VzOiAzMCxcclxuICAgICAgICBib290c3RyYXBQYWdpbmF0aW9uQ2xhc3Nlczoge1xyXG4gICAgICAgIHVsOiAncGFnaW5hdGlvbicsXHJcbiAgICAgICAgbGk6ICdwYWdlLWl0ZW0nLFxyXG4gICAgICAgIGxpQWN0aXZlOiAnYWN0aXZlJyxcclxuICAgICAgICBsaURpc2FibGU6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgYnV0dG9uOiAncGFnZS1saW5rJ1xyXG4gICAgfSxcclxuICAgICAgICBwYWdpbmF0aW9uQW5jaG9yVGV4dHM6IHtcclxuICAgICAgICAgICAgZmlyc3Q6ICdGaXJzdCcsXHJcbiAgICAgICAgICAgIHByZXY6ICdQcmV2aW91cycsXHJcbiAgICAgICAgICAgIG5leHQ6ICdOZXh0JyxcclxuICAgICAgICAgICAgbGFzdDogJ0xhc3QnXHJcbiAgICB9LFxyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgcGVyUGFnZTogOSxcclxuICAgICAgICBwYWdlczogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcG9uZW50czp7XHJcbiAgICB2UGFnaW5hdGlvblxyXG4gIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuJHJvb3QuJHJlZnMuQSA9IHRoaXM7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldENhdGVnb3J5KCl7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvP2NhdGVnb3J5PSR7dGhpcy5jYXRlZ29yeUlkfSZtaW5fcHJpY2U9Jm1heF9wcmljZT0mZmVhdHVyZWQ9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2F0IG9mIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wdXNoKGNhdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6e1xyXG4gICAgICAgIGNhdGVnb3J5SWQoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoKXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvP2NhdGVnb3J5PSR7dGhpcy5jYXRlZ29yeUlkfSZtaW5fcHJpY2U9Jm1heF9wcmljZT0mZmVhdHVyZWQ9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjYXQgb2YgcmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wdXNoKGNhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgICAgICAgIGltbWVkaWF0ZTp0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQURBO0FBakRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/shopByCategory.vue?vue&type=script&lang=js&\n");

/***/ })

})