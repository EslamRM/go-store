webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7cbc2498-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cbc2498-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=template&id=f2bcec66& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"bv-example-row\" },\n    [\n      _c(\"h3\", { staticClass: \"Lastest mt-5\" }, [_vm._v(\"Lastest Products\")]),\n      _c(\"hr\"),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.items.slice(555, 600), function(product, index) {\n          return _c(\n            \"b-col\",\n            { key: index, attrs: { cols: \"4\" } },\n            [\n              product.image\n                ? _c(\n                    \"b-card\",\n                    {\n                      staticStyle: {\n                        \"max-width\": \"20rem\",\n                        \"margin-top\": \"3rem\"\n                      },\n                      attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                    },\n                    [\n                      _c(\n                        \"router-link\",\n                        { attrs: { to: \"/products/\" + product.slug } },\n                        [\n                          _c(\"b-img\", {\n                            staticStyle: { height: \"18rem\", width: \"100%\" },\n                            attrs: { src: product.image, \"img-top\": \"\" }\n                          })\n                        ],\n                        1\n                      ),\n                      _c(\n                        \"b-list-group\",\n                        { attrs: { flush: \"\" } },\n                        [\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.name.slice(0, 100)))\n                          ]),\n                          _c(\n                            \"b-list-group-item\",\n                            { staticClass: \"text-danger\" },\n                            [_vm._v(_vm._s(product.price))]\n                          ),\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.delivery))\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"h3\", { staticClass: \"top mt-5\" }, [_vm._v(\"Top Products\")]),\n      _c(\"hr\"),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.featuredProducts.slice(-10, -1), function(product) {\n          return _c(\n            \"b-col\",\n            { key: product.id, attrs: { cols: \"4\" } },\n            [\n              product.image\n                ? _c(\n                    \"b-card\",\n                    {\n                      staticStyle: {\n                        \"max-width\": \"20rem\",\n                        \"margin-top\": \"3rem\"\n                      },\n                      attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                    },\n                    [\n                      _c(\n                        \"router-link\",\n                        { attrs: { to: \"/products/\" + product.slug } },\n                        [\n                          _c(\"b-img\", {\n                            staticStyle: { height: \"18rem\", width: \"100%\" },\n                            attrs: { src: product.image, \"img-top\": \"\" }\n                          })\n                        ],\n                        1\n                      ),\n                      _c(\n                        \"b-list-group\",\n                        { attrs: { flush: \"\" } },\n                        [\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.name.slice(0, 100)))\n                          ]),\n                          _c(\n                            \"b-list-group-item\",\n                            { staticClass: \"text-danger\" },\n                            [_vm._v(_vm._s(product.price))]\n                          ),\n                          _c(\"b-list-group-item\", [\n                            _vm._v(_vm._s(product.delivery))\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"p\", [_vm._v(\"Current page: \" + _vm._s(_vm.currentPage))]),\n      _c(\"v-pagination\", {\n        attrs: {\n          \"page-count\": _vm.totalPages,\n          classes: _vm.bootstrapPaginationClasses,\n          labels: _vm.paginationAnchorTexts\n        },\n        model: {\n          value: _vm.currentPage,\n          callback: function($$v) {\n            _vm.currentPage = $$v\n          },\n          expression: \"currentPage\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiN2NiYzI0OTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMmJjZWM2NiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0TGlzdC52dWU/YTVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJ2LWV4YW1wbGUtcm93XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiTGFzdGVzdCBtdC01XCIgfSwgW192bS5fdihcIkxhc3Rlc3QgUHJvZHVjdHNcIildKSxcbiAgICAgIF9jKFwiaHJcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLnNsaWNlKDU1NSwgNjAwKSwgZnVuY3Rpb24ocHJvZHVjdCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IGNvbHM6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiM3JlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJcIiwgXCJpbWctYWx0XCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3Quc2x1ZyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxOHJlbVwiLCB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIFwiaW1nLXRvcFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdXNoOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0Lm5hbWUuc2xpY2UoMCwgMTAwKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlzdC1ncm91cC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2R1Y3QuZGVsaXZlcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wIG10LTVcIiB9LCBbX3ZtLl92KFwiVG9wIFByb2R1Y3RzXCIpXSksXG4gICAgICBfYyhcImhyXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgX3ZtLl9sKF92bS5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKC0xMCwgLTEpLCBmdW5jdGlvbihwcm9kdWN0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgeyBrZXk6IHByb2R1Y3QuaWQsIGF0dHJzOiB7IGNvbHM6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiM3JlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJcIiwgXCJpbWctYWx0XCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3Quc2x1ZyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxOHJlbVwiLCB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIFwiaW1nLXRvcFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdXNoOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9kdWN0Lm5hbWUuc2xpY2UoMCwgMTAwKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlzdC1ncm91cC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb2R1Y3QuZGVsaXZlcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIkN1cnJlbnQgcGFnZTogXCIgKyBfdm0uX3MoX3ZtLmN1cnJlbnRQYWdlKSldKSxcbiAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcInBhZ2UtY291bnRcIjogX3ZtLnRvdGFsUGFnZXMsXG4gICAgICAgICAgY2xhc3NlczogX3ZtLmJvb3RzdHJhcFBhZ2luYXRpb25DbGFzc2VzLFxuICAgICAgICAgIGxhYmVsczogX3ZtLnBhZ2luYXRpb25BbmNob3JUZXh0c1xuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudFBhZ2UsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmN1cnJlbnRQYWdlID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRQYWdlXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7cbc2498-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&\n");

/***/ })

})