webpackHotUpdate("app",{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar baseUrl = 'http://127.0.0.1:8000/data/products/';\nvar featuredUrl = 'http://127.0.0.1:8000/data/products/?category=&min_price=&max_price=&featured=true';\nvar items = [];\nvar featuredProducts = [];\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseUrl).then(function (response) {\n  var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      items.push(item);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n});\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(featuredUrl).then(function (response) {\n  var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var item = _step2.value;\n      featuredProducts.push(item);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"data\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhLmpzP2Y2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5sZXQgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8nO1xyXG5sZXQgZmVhdHVyZWRVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvP2NhdGVnb3J5PSZtaW5fcHJpY2U9Jm1heF9wcmljZT0mZmVhdHVyZWQ9dHJ1ZSc7XHJcbmxldCBpdGVtcz0gW107XHJcbmxldCBmZWF0dXJlZFByb2R1Y3RzID0gW107XHJcblxyXG5heGlvcy5nZXQoYmFzZVVybClcclxuLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHJlc3BvbnNlLmRhdGEpIHtcclxuICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn0pXHJcbi5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn0pXHJcblxyXG5heGlvcy5nZXQoZmVhdHVyZWRVcmwpXHJcbi50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5kYXRhKSB7XHJcbiAgICBmZWF0dXJlZFByb2R1Y3RzLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn0pXHJcbi5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBuYW1lOlwiZGF0YVwiLFxyXG5cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data.js\n");

/***/ })

})