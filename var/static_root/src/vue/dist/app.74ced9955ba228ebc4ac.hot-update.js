webpackHotUpdate("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.js */ \"./src/data.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Store({\n  state: {\n    items: _data_js__WEBPACK_IMPORTED_MODULE_3__[\"items\"],\n    featuredProducts: _data_js__WEBPACK_IMPORTED_MODULE_3__[\"featuredProducts\"],\n    categories: _data_js__WEBPACK_IMPORTED_MODULE_3__[\"AllCategories\"],\n    category: []\n  },\n  mutations: {\n    CatNav: function CatNav(state) {\n      var _this = this;\n\n      state.items.forEach(function (e) {\n        if (e.category == _this.$route.params.id) {\n          state.category.push(e);\n        }\n      });\n    }\n  } // actions: {},\n  // modules: {},\n\n})); // console.log(AllCategories);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanM/MDdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWV4IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQge2l0ZW1zLGZlYXR1cmVkUHJvZHVjdHMsQWxsQ2F0ZWdvcmllc30gZnJvbSBcIi4uL2RhdGEuanNcIjtcblxuVnVlLnVzZShWdWV4KTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIGl0ZW1zOml0ZW1zLFxuICAgIGZlYXR1cmVkUHJvZHVjdHM6ZmVhdHVyZWRQcm9kdWN0cyxcbiAgICBjYXRlZ29yaWVzOkFsbENhdGVnb3JpZXMsXG4gICAgY2F0ZWdvcnk6W10sXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIENhdE5hdihzdGF0ZSl7XG4gICAgICBzdGF0ZS5pdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBpZihlLmNhdGVnb3J5ID09IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCl7XG4gICAgICAgICAgICBzdGF0ZS5jYXRlZ29yeS5wdXNoKGUpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gYWN0aW9uczoge30sXG4gIC8vIG1vZHVsZXM6IHt9LFxufSk7XG4vLyBjb25zb2xlLmxvZyhBbGxDYXRlZ29yaWVzKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFsQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

})