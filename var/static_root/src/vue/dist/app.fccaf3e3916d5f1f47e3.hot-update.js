webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b1a63120-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b1a63120-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/productList.vue?vue&type=template&id=f2bcec66& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-container\",\n    { staticClass: \"bv-example-row\" },\n    [\n      _c(\"h3\", { staticClass: \"Lastest mt-5\" }, [_vm._v(\"Lastest Products\")]),\n      _c(\"hr\"),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.items.slice(-32, -20), function(product, index) {\n          return _c(\n            \"b-col\",\n            { key: index, attrs: { md: \"3\", xsm: \"auto\", sm: \"2\" } },\n            [\n              product.image\n                ? _c(\n                    \"b-card\",\n                    {\n                      staticStyle: {\n                        \"max-width\": \"20rem\",\n                        \"margin-top\": \"3rem\"\n                      },\n                      attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                    },\n                    [\n                      _c(\n                        \"router-link\",\n                        {\n                          attrs: {\n                            to: \"/products/\" + product.id + \"/\" + product.slug\n                          }\n                        },\n                        [\n                          _c(\"b-img\", {\n                            staticStyle: { height: \"18rem\", width: \"100%\" },\n                            attrs: { src: product.image, \"img-top\": \"\" }\n                          })\n                        ],\n                        1\n                      ),\n                      _c(\n                        \"b-list-group\",\n                        { attrs: { flush: \"\" } },\n                        [\n                          _c(\n                            \"b-list-group-item\",\n                            [\n                              _c(\n                                \"router-link\",\n                                {\n                                  attrs: {\n                                    to:\n                                      \"/products/\" +\n                                      product.id +\n                                      \"/\" +\n                                      product.slug\n                                  }\n                                },\n                                [_vm._v(_vm._s(product.name.slice(0, 100)))]\n                              )\n                            ],\n                            1\n                          ),\n                          _c(\n                            \"b-list-group-item\",\n                            { staticClass: \"text-danger\" },\n                            [_vm._v(_vm._s(product.price))]\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"h3\", { staticClass: \"top mt-5\" }, [_vm._v(\"Top Products\")]),\n      _c(\"hr\"),\n      _c(\n        \"b-row\",\n        _vm._l(_vm.featuredProducts.slice(-10, -1), function(product) {\n          return _c(\n            \"b-col\",\n            { key: product.id, attrs: { md: \"3\", sm: \"1\" } },\n            [\n              product.image\n                ? _c(\n                    \"b-card\",\n                    {\n                      staticStyle: {\n                        \"max-width\": \"20rem\",\n                        \"margin-top\": \"3rem\"\n                      },\n                      attrs: { \"no-body\": \"\", \"img-alt\": \"\" }\n                    },\n                    [\n                      _c(\n                        \"router-link\",\n                        {\n                          attrs: {\n                            to: \"/products/\" + product.id + \"/\" + product.slug\n                          }\n                        },\n                        [\n                          _c(\"b-img\", {\n                            staticStyle: { height: \"18rem\", width: \"100%\" },\n                            attrs: { src: product.image, \"img-top\": \"\" }\n                          })\n                        ],\n                        1\n                      ),\n                      _c(\n                        \"b-list-group\",\n                        { attrs: { flush: \"\" } },\n                        [\n                          _c(\n                            \"b-list-group-item\",\n                            [\n                              _c(\n                                \"router-link\",\n                                {\n                                  attrs: {\n                                    to:\n                                      \"/products/\" +\n                                      product.id +\n                                      \"/\" +\n                                      product.slug\n                                  }\n                                },\n                                [_vm._v(_vm._s(product.name.slice(0, 100)))]\n                              )\n                            ],\n                            1\n                          ),\n                          _c(\n                            \"b-list-group-item\",\n                            { staticClass: \"text-danger\" },\n                            [_vm._v(_vm._s(product.price))]\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        }),\n        1\n      ),\n      _c(\"p\", [_vm._v(\"Current page: \" + _vm._s(_vm.currentPage))]),\n      _c(\"v-pagination\", {\n        attrs: {\n          \"page-count\": _vm.totalPages,\n          classes: _vm.bootstrapPaginationClasses,\n          labels: _vm.paginationAnchorTexts\n        },\n        model: {\n          value: _vm.currentPage,\n          callback: function($$v) {\n            _vm.currentPage = $$v\n          },\n          expression: \"currentPage\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYjFhNjMxMjAtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMmJjZWM2NiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0TGlzdC52dWU/N2E2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJ2LWV4YW1wbGUtcm93XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiTGFzdGVzdCBtdC01XCIgfSwgW192bS5fdihcIkxhc3Rlc3QgUHJvZHVjdHNcIildKSxcbiAgICAgIF9jKFwiaHJcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLnNsaWNlKC0zMiwgLTIwKSwgZnVuY3Rpb24ocHJvZHVjdCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IG1kOiBcIjNcIiwgeHNtOiBcImF1dG9cIiwgc206IFwiMlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiM3JlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJcIiwgXCJpbWctYWx0XCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL3Byb2R1Y3RzL1wiICsgcHJvZHVjdC5pZCArIFwiL1wiICsgcHJvZHVjdC5zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxOHJlbVwiLCB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2UsIFwiaW1nLXRvcFwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdXNoOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3Byb2R1Y3RzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwcm9kdWN0Lm5hbWUuc2xpY2UoMCwgMTAwKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlzdC1ncm91cC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocHJvZHVjdC5wcmljZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3AgbXQtNVwiIH0sIFtfdm0uX3YoXCJUb3AgUHJvZHVjdHNcIildKSxcbiAgICAgIF9jKFwiaHJcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBfdm0uX2woX3ZtLmZlYXR1cmVkUHJvZHVjdHMuc2xpY2UoLTEwLCAtMSksIGZ1bmN0aW9uKHByb2R1Y3QpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICB7IGtleTogcHJvZHVjdC5pZCwgYXR0cnM6IHsgbWQ6IFwiM1wiLCBzbTogXCIxXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIzcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIlwiLCBcImltZy1hbHRcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvcHJvZHVjdHMvXCIgKyBwcm9kdWN0LmlkICsgXCIvXCIgKyBwcm9kdWN0LnNsdWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE4cmVtXCIsIHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcHJvZHVjdC5pbWFnZSwgXCJpbWctdG9wXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1c2g6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlzdC1ncm91cC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvcHJvZHVjdHMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNsdWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHByb2R1Y3QubmFtZS5zbGljZSgwLCAxMDApKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwcm9kdWN0LnByaWNlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJDdXJyZW50IHBhZ2U6IFwiICsgX3ZtLl9zKF92bS5jdXJyZW50UGFnZSkpXSksXG4gICAgICBfYyhcInYtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJwYWdlLWNvdW50XCI6IF92bS50b3RhbFBhZ2VzLFxuICAgICAgICAgIGNsYXNzZXM6IF92bS5ib290c3RyYXBQYWdpbmF0aW9uQ2xhc3NlcyxcbiAgICAgICAgICBsYWJlbHM6IF92bS5wYWdpbmF0aW9uQW5jaG9yVGV4dHNcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5jdXJyZW50UGFnZSA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50UGFnZVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b1a63120-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/productList.vue?vue&type=template&id=f2bcec66&\n");

/***/ })

})