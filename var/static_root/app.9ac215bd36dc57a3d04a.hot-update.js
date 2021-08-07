webpackHotUpdate("app",{

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Home.vue */ \"./src/views/Home.vue\");\n/* harmony import */ var _components_productList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/productList */ \"./src/components/productList.vue\");\n/* harmony import */ var _components_productDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/productDetails */ \"./src/components/productDetails.vue\");\n/* harmony import */ var _components_categoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/categoryList */ \"./src/components/categoryList.vue\");\n/* harmony import */ var _components_shopByCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shopByCategory */ \"./src/components/shopByCategory.vue\");\n/* harmony import */ var _components_AddToCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddToCart */ \"./src/components/AddToCart.vue\");\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar routes = [{\n  path: \"/\",\n  name: \"Home\",\n  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: \"/shop_by_category\",\n  name: \"categoryList\",\n  component: _components_categoryList__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  path: \"/products\",\n  name: \"productList\",\n  component: _components_productList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: \"/cart\",\n  name: \"AddToCart\",\n  component: _components_AddToCart__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, {\n  path: \"/products/:id/:slug\",\n  name: \"productDetails\",\n  component: _components_productDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: \"/category/:id/:slug\",\n  name: \"shopByCategory\",\n  component: _components_shopByCategory__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}];\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: \"hash\",\n  base: \"/static/\",\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9pbmRleC5qcz9hMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL3ZpZXdzL0hvbWUudnVlXCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdExpc3RcIjtcbmltcG9ydCBwcm9kdWN0RGV0YWlscyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IGNhdGVnb3J5TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXRlZ29yeUxpc3RcIjtcbmltcG9ydCBzaG9wQnlDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wQnlDYXRlZ29yeVwiO1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRUb0NhcnRcIjtcblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9zaG9wX2J5X2NhdGVnb3J5XCIsXG4gICAgbmFtZTogXCJjYXRlZ29yeUxpc3RcIixcbiAgICBjb21wb25lbnQ6IGNhdGVnb3J5TGlzdCxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2R1Y3RzXCIsXG4gICAgbmFtZTogXCJwcm9kdWN0TGlzdFwiLFxuICAgIGNvbXBvbmVudDogcHJvZHVjdExpc3QsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9jYXJ0XCIsXG4gICAgbmFtZTogXCJBZGRUb0NhcnRcIixcbiAgICBjb21wb25lbnQ6IEFkZFRvQ2FydCxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2R1Y3RzLzppZC86c2x1Z1wiLFxuICAgIG5hbWU6IFwicHJvZHVjdERldGFpbHNcIixcbiAgICBjb21wb25lbnQ6IHByb2R1Y3REZXRhaWxzLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvY2F0ZWdvcnkvOmlkLzpzbHVnXCIsXG4gICAgbmFtZTogXCJzaG9wQnlDYXRlZ29yeVwiLFxuICAgIGNvbXBvbmVudDogc2hvcEJ5Q2F0ZWdvcnksXG4gIH0sXG5dO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgbW9kZTogXCJoYXNoXCIsXG4gIGJhc2U6IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxuICByb3V0ZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

})