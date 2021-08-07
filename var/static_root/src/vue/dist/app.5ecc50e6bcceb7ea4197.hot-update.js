webpackHotUpdate("app",{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: items, featuredProducts, categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"featuredProducts\", function() { return featuredProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"categories\", function() { return categories; });\n/* harmony import */ var C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar baseUrl = 'http://127.0.0.1:8000/data/products/';\nvar featuredUrl = 'http://127.0.0.1:8000/data/products/?category=&min_price=&max_price=&featured=true';\nvar categoriesUrl = 'http://127.0.0.1:8000/data/Categories';\nvar items = [];\nvar featuredProducts = [];\nvar categories = ''; // Get All Products\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseUrl).then(function (response) {\n  var _iterator = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      items.push(item);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n}); // Get Featured Products\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(featuredUrl).then(function (response) {\n  var _iterator2 = Object(C_Users_Eslam_Desktop_vue_django_djvue_vue_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response.data),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var item = _step2.value;\n      featuredProducts.push(item);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}).catch(function (response) {\n  console.log(response);\n}); // Get All Categories\n\naxios__WEBPACK_IMPORTED_MODULE_1___default.a.get(categoriesUrl).then(function (res) {\n  categories = res.data;\n}).catch(function (e) {\n  console.log(e);\n});\nconsole.log(categories);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhLmpzP2Y2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5sZXQgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvZGF0YS9wcm9kdWN0cy8nO1xyXG5sZXQgZmVhdHVyZWRVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RhdGEvcHJvZHVjdHMvP2NhdGVnb3J5PSZtaW5fcHJpY2U9Jm1heF9wcmljZT0mZmVhdHVyZWQ9dHJ1ZSc7XHJcbmxldCBjYXRlZ29yaWVzVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXRhL0NhdGVnb3JpZXMnO1xyXG5leHBvcnQgY29uc3QgaXRlbXMgPSBbXTtcclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVkUHJvZHVjdHMgPSBbXTtcclxuZXhwb3J0IGxldCBjYXRlZ29yaWVzID0gJyc7XHJcblxyXG4vLyBHZXQgQWxsIFByb2R1Y3RzXHJcbmF4aW9zLmdldChiYXNlVXJsKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuLy8gR2V0IEZlYXR1cmVkIFByb2R1Y3RzXHJcbmF4aW9zLmdldChmZWF0dXJlZFVybClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICBmZWF0dXJlZFByb2R1Y3RzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbi8vIEdldCBBbGwgQ2F0ZWdvcmllc1xyXG5heGlvcy5nZXQoY2F0ZWdvcmllc1VybClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjYXRlZ29yaWVzID0gcmVzLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuY29uc29sZS5sb2coY2F0ZWdvcmllcylcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data.js\n");

/***/ })

})