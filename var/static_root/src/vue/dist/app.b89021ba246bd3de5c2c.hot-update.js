webpackHotUpdate("app",{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: items, featuredProducts, AllCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"featuredProducts\", function() { return featuredProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllCategories\", function() { return AllCategories; });\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\nvar baseUrl = 'http://127.0.0.1:8000/data/products/';\nvar featuredUrl = 'http://127.0.0.1:8000/data/products/?category=&min_price=&max_price=&featured=true';\nvar categoriesUrl = 'http://127.0.0.1:8000/data/Categories/';\nvar categoryUrl = 'http://127.0.0.1:8000/data/products/?category=' + _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentRoute.params.id + '&min_price=&max_price=&featured=';\nvar items = [];\nvar featuredProducts = [];\nvar AllCategories = []; // Get All Products\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseUrl).then(function (response) {\n  var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      items.push(item);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n}); // Get Featured Products\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(featuredUrl).then(function (response) {\n  var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var item = _step2.value;\n      featuredProducts.push(item);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n}); // Get All Categories\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(categoriesUrl).then(function (res) {\n  var _iterator3 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var category = _step3.value;\n      AllCategories.push(category);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n}).catch(function (e) {\n  console.log(e);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhLmpzP2Y2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xyXG5cclxubGV0IGJhc2VVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvJztcclxubGV0IGZlYXR1cmVkVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL3Byb2R1Y3RzLz9jYXRlZ29yeT0mbWluX3ByaWNlPSZtYXhfcHJpY2U9JmZlYXR1cmVkPXRydWUnO1xyXG5sZXQgY2F0ZWdvcmllc1VybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9DYXRlZ29yaWVzLyc7XHJcbmxldCBjYXRlZ29yeVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8/Y2F0ZWdvcnk9Jytyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pZCsnJm1pbl9wcmljZT0mbWF4X3ByaWNlPSZmZWF0dXJlZD0nXHJcbmV4cG9ydCBjb25zdCBpdGVtcyA9IFtdO1xyXG5leHBvcnQgY29uc3QgZmVhdHVyZWRQcm9kdWN0cyA9IFtdO1xyXG5leHBvcnQgY29uc3QgQWxsQ2F0ZWdvcmllcyA9IFtdO1xyXG5cclxuLy8gR2V0IEFsbCBQcm9kdWN0c1xyXG5heGlvcy5nZXQoYmFzZVVybClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbi8vIEdldCBGZWF0dXJlZCBQcm9kdWN0c1xyXG5heGlvcy5nZXQoZmVhdHVyZWRVcmwpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG4vLyBHZXQgQWxsIENhdGVnb3JpZXNcclxuYXhpb3MuZ2V0KGNhdGVnb3JpZXNVcmwpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgcmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgQWxsQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data.js\n");

/***/ })

})