webpackHotUpdate("app",{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: items, featuredProducts, categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"featuredProducts\", function() { return featuredProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"categories\", function() { return categories; });\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar baseUrl = 'http://127.0.0.1:8000/data/products/';\nvar featuredUrl = 'http://127.0.0.1:8000/data/products/?category=&min_price=&max_price=&featured=true';\nvar categoriesUrl = 'http://127.0.0.1:8000/data/Categories';\nvar items = [];\nvar featuredProducts = [];\nvar categories = \"\"; // Get All Products\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.get(baseUrl).then(function (response) {\n  var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      items.push(item);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n}); // Get Featured Products\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.get(featuredUrl).then(function (response) {\n  var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var item = _step2.value;\n      featuredProducts.push(item);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n}); // Get All Categories\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.get(categoriesUrl).then(function (res) {\n  categories = (Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"categories\"), res.data);\n}).catch(function (e) {\n  console.log(e);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhLmpzP2Y2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5sZXQgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8nO1xyXG5sZXQgZmVhdHVyZWRVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvP2NhdGVnb3J5PSZtaW5fcHJpY2U9Jm1heF9wcmljZT0mZmVhdHVyZWQ9dHJ1ZSc7XHJcbmxldCBjYXRlZ29yaWVzVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL0NhdGVnb3JpZXMnO1xyXG5leHBvcnQgY29uc3QgaXRlbXMgPSBbXTtcclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVkUHJvZHVjdHMgPSBbXTtcclxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBcIlwiO1xyXG5cclxuLy8gR2V0IEFsbCBQcm9kdWN0c1xyXG5heGlvcy5nZXQoYmFzZVVybClcclxuLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHJlc3BvbnNlLmRhdGEpIHtcclxuICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn0pXHJcbi5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn0pXHJcbi8vIEdldCBGZWF0dXJlZCBQcm9kdWN0c1xyXG5heGlvcy5nZXQoZmVhdHVyZWRVcmwpXHJcbi50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5kYXRhKSB7XHJcbiAgICBmZWF0dXJlZFByb2R1Y3RzLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn0pXHJcbi5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn0pO1xyXG4vLyBHZXQgQWxsIENhdGVnb3JpZXNcclxuYXhpb3MuZ2V0KGNhdGVnb3JpZXNVcmwpXHJcbi50aGVuKChyZXMpID0+IHtcclxuY2F0ZWdvcmllcyA9IHJlcy5kYXRhO1xyXG59KVxyXG4uY2F0Y2goKGUpID0+IHtcclxuY29uc29sZS5sb2coZSk7XHJcbn0pO1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data.js\n");

/***/ })

})