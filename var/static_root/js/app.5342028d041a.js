(function (t) {
  function e(e) {
    for (
      var a, o, n = e[0], c = e[1], l = e[2], d = 0, m = [];
      d < n.length;
      d++
    )
      (o = n[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && m.push(i[o][0]),
        (i[o] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    u && u(e);
    while (m.length) m.shift()();
    return r.push.apply(r, l || []), s();
  }
  function s() {
    for (var t, e = 0; e < r.length; e++) {
      for (var s = r[e], a = !0, n = 1; n < s.length; n++) {
        var c = s[n];
        0 !== i[c] && (a = !1);
      }
      a && (r.splice(e--, 1), (t = o((o.s = s[0]))));
    }
    return t;
  }
  var a = {},
    i = { app: 0 },
    r = [];
  function o(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = t),
    (o.c = a),
    (o.d = function (t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          o.d(
            s,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return s;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/static/");
  var n = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = n.push.bind(n);
  (n.push = e), (n = n.slice());
  for (var l = 0; l < n.length; l++) e(n[l]);
  var u = c;
  r.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "0aae": function (t, e, s) {
    "use strict";
    s("7ca9");
  },
  "22b0": function (t, e, s) {
    t.exports = s.p + "img/cancel.jpeg";
  },
  3974: function (t, e, s) {},
  "39ef": function (t, e, s) {},
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    s("e260"), s("e6cf"), s("cca6"), s("a79d"), s("d3b7");
    var a = s("a026"),
      i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "app" } },
          [
            ["login", "signup", "404"].includes(t.$route.name)
              ? t._e()
              : s("Navbar"),
            s(
              "transition",
              { attrs: { name: "slide", mode: "out-in" } },
              [s("router-view"), t._v(" /")],
              1
            ),
            ["login", "signup", "404"].includes(t.$route.name)
              ? t._e()
              : s("Footer"),
          ],
          1
        );
      },
      r = [],
      o = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          [
            a("b-navbar", { staticClass: "header" }, [
              a(
                "div",
                { staticClass: "container" },
                [
                  a(
                    "div",
                    {
                      staticClass: "sidebar mobile",
                      attrs: { id: "mySidebar" },
                    },
                    [
                      a("div", [
                        a(
                          "a",
                          {
                            staticClass: "closebtn mb-4",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function (e) {
                                return t.closeNav();
                              },
                            },
                          },
                          [t._v("×")]
                        ),
                      ]),
                      a("div", { staticClass: "mobile mobile_search" }, [
                        a("div", { staticClass: "searchbar" }, [
                          a("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.SearchFor,
                                expression: "SearchFor",
                              },
                            ],
                            staticClass: "search_input",
                            attrs: {
                              type: "text",
                              name: "",
                              placeholder: "Search...",
                            },
                            domProps: { value: t.SearchFor },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.SearchFor = e.target.value);
                              },
                            },
                          }),
                          a(
                            "button",
                            {
                              staticClass: "search_icon",
                              attrs: { type: "submit" },
                              on: {
                                click: function (e) {
                                  t.getSearch(), t.closeNav();
                                },
                              },
                            },
                            [
                              a("b-icon", {
                                attrs: { icon: "search", "font-scale": "1" },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      a("div", { staticClass: "px-3 py-2" }, [
                        a("h3", { staticClass: "text-center ml-4 mt-3" }, [
                          t._v("Categories"),
                        ]),
                        a(
                          "ul",
                          [
                            t._l(t.categories.slice(0, 16), function (e) {
                              return a(
                                "li",
                                {
                                  key: e.id,
                                  staticClass: "mt-3",
                                  on: {
                                    click: function (e) {
                                      return t.closeNav();
                                    },
                                  },
                                },
                                [
                                  a(
                                    "router-link",
                                    {
                                      staticStyle: { color: "#fff" },
                                      attrs: {
                                        to: "/category/" + e.id + "/" + e.name,
                                      },
                                      nativeOn: {
                                        click: function (e) {
                                          return t.getCat(e);
                                        },
                                      },
                                    },
                                    [t._v(t._s(e.name) + " ")]
                                  ),
                                ],
                                1
                              );
                            }),
                            a(
                              "li",
                              [
                                a(
                                  "router-link",
                                  { attrs: { to: "/shop_by_category" } },
                                  [
                                    a(
                                      "button",
                                      {
                                        staticClass:
                                          "all btn btn-success btn-block mt-1",
                                      },
                                      [
                                        t._v(" All "),
                                        a("b-icon", {
                                          attrs: { icon: "three-dots" },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          2
                        ),
                      ]),
                    ]
                  ),
                  a(
                    "button",
                    {
                      staticClass: "openbtn mobile",
                      on: {
                        click: function (e) {
                          return t.openNav();
                        },
                      },
                    },
                    [t._v("☰")]
                  ),
                  a(
                    "div",
                    { staticClass: "logo" },
                    [
                      a("router-link", { attrs: { to: "/" } }, [
                        a("img", {
                          staticStyle: { width: "70%" },
                          attrs: { src: s("e1e5"), alt: "" },
                        }),
                      ]),
                    ],
                    1
                  ),
                  a(
                    "b-collapse",
                    { attrs: { id: "nav-collapse", "is-nav": "" } },
                    [
                      a(
                        "b-navbar-nav",
                        { staticClass: "ml-auto" },
                        [
                          a("b-nav-item", { staticClass: "desktop" }, [
                            a("div", { staticClass: "searchbar" }, [
                              a("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.SearchFor,
                                    expression: "SearchFor",
                                  },
                                ],
                                staticClass: "search_input",
                                attrs: {
                                  type: "text",
                                  name: "",
                                  placeholder: "Search...",
                                  required: "",
                                },
                                domProps: { value: t.SearchFor },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.SearchFor = e.target.value);
                                  },
                                },
                              }),
                              a(
                                "button",
                                {
                                  staticClass: "search_icon",
                                  attrs: {
                                    type: "submit",
                                    disabled: t.SearchFor < 1,
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.getSearch();
                                    },
                                  },
                                },
                                [
                                  a("b-icon", {
                                    attrs: {
                                      icon: "search",
                                      "font-scale": "1",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          a("b-nav-item", [
                            t.auth
                              ? a(
                                  "div",
                                  [
                                    a(
                                      "router-link",
                                      { attrs: { to: "/cart" } },
                                      [
                                        t.cartItems.length > 0
                                          ? a("b-icon", {
                                              staticClass: "hover",
                                              attrs: { icon: "cart-fill" },
                                            })
                                          : a("b-icon", {
                                              staticClass: "hover",
                                              attrs: { icon: "cart3" },
                                            }),
                                      ],
                                      1
                                    ),
                                    a(
                                      "b-badge",
                                      {
                                        staticStyle: { "font-size": "11px" },
                                        attrs: { variant: "danger", pill: "" },
                                      },
                                      [t._v(t._s(t.count))]
                                    ),
                                    a(
                                      "b-dropdown",
                                      {
                                        staticClass: "ml-3",
                                        attrs: {
                                          variant: "outline-success",
                                          size: "sm",
                                          text: "Small",
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "button-content",
                                              fn: function () {
                                                return [
                                                  a("b-icon", {
                                                    attrs: { icon: "person" },
                                                  }),
                                                  t._v(
                                                    " " +
                                                      t._s(t.CurrentUser) +
                                                      " "
                                                  ),
                                                ];
                                              },
                                              proxy: !0,
                                            },
                                          ],
                                          null,
                                          !1,
                                          4175289725
                                        ),
                                      },
                                      [
                                        a(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/profile/" + t.CurrentUser,
                                            },
                                          },
                                          [
                                            a("b-dropdown-item-button", [
                                              t._v(" Profile "),
                                            ]),
                                          ],
                                          1
                                        ),
                                        a(
                                          "b-dropdown-item-button",
                                          {
                                            on: {
                                              click: function (e) {
                                                return t.logout();
                                              },
                                            },
                                          },
                                          [t._v("Logout")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : a(
                                  "div",
                                  [
                                    a(
                                      "router-link",
                                      { attrs: { to: "/login" } },
                                      [
                                        a(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-outline-success",
                                          },
                                          [t._v(" Login ")]
                                        ),
                                      ]
                                    ),
                                    a(
                                      "router-link",
                                      { attrs: { to: "/signup" } },
                                      [
                                        a(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-outline-success ml-3",
                                          },
                                          [t._v(" Signup ")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            a(
              "b-navbar",
              { staticClass: "categories" },
              [
                a(
                  "b-collapse",
                  { attrs: { id: "nav-collapse", "is-nav": "" } },
                  [
                    a(
                      "b-navbar-nav",
                      { staticClass: "mx-auto" },
                      [
                        t._l(t.categories.slice(0, 10), function (e) {
                          return a(
                            "b-nav-item",
                            { key: e.id },
                            [
                              a(
                                "router-link",
                                {
                                  staticStyle: { color: "#fff" },
                                  attrs: {
                                    to: "/category/" + e.id + "/" + e.name,
                                  },
                                  nativeOn: {
                                    click: function (e) {
                                      return t.getCat(e);
                                    },
                                  },
                                },
                                [t._v(t._s(e.name))]
                              ),
                            ],
                            1
                          );
                        }),
                        a(
                          "b-nav-item",
                          [
                            a(
                              "router-link",
                              { attrs: { to: "/shop_by_category" } },
                              [
                                a("button", { staticClass: "all" }, [
                                  a("span", { staticClass: "text" }, [
                                    t._v("All"),
                                  ]),
                                  a("div", { staticClass: "icon-container" }, [
                                    a(
                                      "div",
                                      { staticClass: "icon icon--left" },
                                      [
                                        a(
                                          "svg",
                                          [
                                            a("b-icon", {
                                              attrs: { icon: "arrow-right" },
                                            }),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                    a(
                                      "div",
                                      { staticClass: "icon icon--right" },
                                      [
                                        a(
                                          "svg",
                                          [
                                            a("b-icon", {
                                              attrs: { icon: "arrow-right" },
                                            }),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      n = [],
      c = s("5530"),
      l = s("2f62"),
      u = {
        name: "navbar",
        data: function () {
          return { auth: "" };
        },
        computed: Object(c["a"])(
          Object(c["a"])(
            {
              categories: function () {
                return this.$store.state.categories;
              },
            },
            Object(l["b"])({ cartItems: "get_cart", count: "getCartLength" })
          ),
          {},
          {
            CurrentUser: function () {
              return this.$store.state.CurrentUser;
            },
            SearchFor: {
              get: function () {
                return this.$store.state.searchFor;
              },
              set: function (t) {
                this.$store.commit("getSearchFor", t);
              },
            },
          }
        ),
        methods: {
          getCat: function () {
            this.$root.$refs.A.getCategory();
          },
          user: function () {
            this.$store.dispatch("getUser");
          },
          logout: function () {
            this.$store.dispatch("getLogout");
          },
          getSearch: function () {
            this.$store.dispatch("getResults");
          },
          openNav: function () {
            document.getElementById("mySidebar").style.width = "350px";
          },
          closeNav: function () {
            document.getElementById("mySidebar").style.width = "0";
          },
        },
        created: function () {
          var t = this;
          fetch("https://vuengo.herokuapp.com/auth_config/").then(function (e) {
            return e.json().then(function (e) {
              localStorage.setItem("isAuth", e), (t.auth = e);
            });
          }),
            console.log(localStorage.isAuth),
            this.user();
        },
      },
      d = u,
      m = (s("8ddd"), s("2877")),
      p = Object(m["a"])(d, o, n, !1, null, "63a006ae", null),
      f = p.exports,
      v = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("footer", { staticClass: "page-footer pt-5 mt-5" }, [
          a("div", { staticClass: "container text-center text-md-left" }, [
            a("div", { staticClass: "row" }, [
              a("div", { staticClass: "col-md-3 mx-auto" }, [
                a("div", { staticStyle: { "margin-top": "3rem" } }, [
                  a(
                    "h5",
                    { staticClass: "font-weight-bold text-uppercase mb-2" },
                    [
                      a("router-link", { attrs: { to: "/" } }, [
                        a("img", {
                          staticStyle: { width: "70%" },
                          attrs: { src: s("e1e5"), alt: "" },
                        }),
                      ]),
                    ],
                    1
                  ),
                ]),
              ]),
              a("hr", { staticClass: "clearfix w-100 d-md-none" }),
              t._m(0),
              a("hr", { staticClass: "clearfix w-100 d-md-none" }),
              t._m(1),
              a("hr", { staticClass: "clearfix w-100 d-md-none" }),
              t._m(2),
            ]),
          ]),
          t._m(3),
          t._m(4),
        ]);
      },
      h = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "col-md-3 mx-auto" }, [
            s(
              "h5",
              { staticClass: "font-weight-bold text-uppercase mt-3 mb-4" },
              [t._v(" Get to Know Us ")]
            ),
            s("ul", { staticClass: "list-unstyled" }, [
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("About Us")])]),
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("Careers")])]),
              s("li", [
                s("a", { attrs: { href: "#!" } }, [t._v("Press Releases")]),
              ]),
              s("li", [
                s("a", { attrs: { href: "#!" } }, [t._v("Gift a Smile")]),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "col-md-3 mx-auto" }, [
            s(
              "h5",
              { staticClass: "font-weight-bold text-uppercase mt-3 mb-4" },
              [t._v(" Connect with Us ")]
            ),
            s("ul", { staticClass: "list-unstyled" }, [
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("Facebook")])]),
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("Twitter")])]),
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("Instagram")])]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "col-md-3 mx-auto" }, [
            s(
              "h5",
              { staticClass: "font-weight-bold text-uppercase mt-3 mb-4" },
              [t._v(" Let Us Help You ")]
            ),
            s("ul", { staticClass: "list-unstyled" }, [
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("COVID-19")])]),
              s("li", [
                s("a", { attrs: { href: "#!" } }, [t._v("Your Account")]),
              ]),
              s("li", [
                s("a", { attrs: { href: "#!" } }, [t._v("Returns Centre")]),
              ]),
              s("li", [
                s("a", { attrs: { href: "#!" } }, [
                  t._v("100% Purchase Protection"),
                ]),
              ]),
              s("li", [s("a", { attrs: { href: "#!" } }, [t._v("Help")])]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "ul",
            { staticClass: "list-unstyled list-inline text-center" },
            [
              s("li", { staticClass: "list-inline-item" }, [
                s("a", { staticClass: "btn-floating btn-fb mx-1" }, [
                  s("i", { staticClass: "fab fa-facebook-f" }),
                ]),
              ]),
              s("li", { staticClass: "list-inline-item" }, [
                s("a", { staticClass: "btn-floating btn-tw mx-1" }, [
                  s("i", { staticClass: "fab fa-twitter" }),
                ]),
              ]),
              s("li", { staticClass: "list-inline-item" }, [
                s("a", { staticClass: "btn-floating btn-gplus mx-1" }, [
                  s("i", { staticClass: "fab fa-google-plus-g" }),
                ]),
              ]),
              s("li", { staticClass: "list-inline-item" }, [
                s("a", { staticClass: "btn-floating btn-li mx-1" }, [
                  s("i", { staticClass: "fab fa-linkedin-in" }),
                ]),
              ]),
              s("li", { staticClass: "list-inline-item" }, [
                s("a", { staticClass: "btn-floating btn-dribbble mx-1" }, [
                  s("i", { staticClass: "fab fa-dribbble" }),
                ]),
              ]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "footer-copyright text-center py-3" },
            [
              t._v(" © 2021 Copyright: "),
              s("a", { attrs: { href: "https://mdbootstrap.com/" } }, [
                t._v(" Saved To Go Store Team"),
              ]),
            ]
          );
        },
      ],
      g = { name: "footer" },
      b = g,
      C = (s("0aae"), Object(m["a"])(b, v, h, !1, null, "3b9d8ef4", null)),
      _ = C.exports,
      w = {
        name: "App",
        components: { Navbar: f, Footer: _ },
        methods: {
          user: function () {
            this.$store.dispatch("getUser");
          },
          cart: function () {
            this.$store.dispatch("getCart");
          },
        },
        created: function () {
          fetch("https://vuengo.herokuapp.com/auth_config/").then(function (t) {
            return t.json().then(function (t) {
              localStorage.setItem("isAuth", t);
            });
          }),
            this.cart(),
            this.user();
        },
      },
      y = w,
      x = (s("5c0b"), Object(m["a"])(y, i, r, !1, null, null, null)),
      k = x.exports,
      P = (s("b0c0"), s("8c4f")),
      E = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "main" },
          [
            s("product-list"),
            s("back-to-top", { attrs: { bottom: "50px", right: "50px" } }, [
              s(
                "button",
                {
                  staticClass: "btn btn-success btn-to-top",
                  attrs: { type: "button" },
                },
                [
                  s("b-icon", {
                    attrs: { icon: "arrow-up", "font-scale": "1" },
                  }),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      S = [],
      j = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t.IsHidden
            ? t._e()
            : s(
                "div",
                { staticClass: "main" },
                [
                  s(
                    "CarouselCard",
                    {
                      staticStyle: { "margin-top": "50px" },
                      attrs: {
                        interval: 7e3,
                        height: "300px",
                        type: "card",
                        arrow: "always",
                      },
                    },
                    t._l(t.featuredProducts.slice(-9, -1), function (e) {
                      return s("CarouselCardItem", { key: e.id }, [
                        s("div", [
                          s(
                            "div",
                            { staticClass: "profile-card-2" },
                            [
                              s(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/products/" + e.id + "/" + e.slug,
                                  },
                                },
                                [
                                  s("img", {
                                    staticClass: "img img-responsive",
                                    attrs: { src: e.image },
                                  }),
                                ]
                              ),
                              s("div", { staticClass: "profile-name" }, [
                                t._v(
                                  " " + t._s(e.name.slice(0, 20)) + " Laptop "
                                ),
                              ]),
                              s(
                                "div",
                                { staticClass: "profile-username" },
                                [
                                  s(
                                    "b-badge",
                                    { attrs: { variant: "warning", pill: "" } },
                                    [t._v(" " + t._s(e.price))]
                                  ),
                                ],
                                1
                              ),
                              s("div", { staticClass: "profile-icons" }, [
                                s("a", { attrs: { href: "#" } }, [
                                  s("i", { staticClass: "fa fa-facebook" }),
                                ]),
                                s("a", { attrs: { href: "#" } }, [
                                  s("i", { staticClass: "fa fa-twitter" }),
                                ]),
                                s("a", { attrs: { href: "#" } }, [
                                  s("i", { staticClass: "fa fa-linkedin" }),
                                ]),
                              ]),
                            ],
                            1
                          ),
                        ]),
                      ]);
                    }),
                    1
                  ),
                  s("div", { staticClass: "container mx-auto" }, [
                    s("h3", { staticClass: "Lastest mt-5" }, [
                      t._v("Lastest Products"),
                    ]),
                    s(
                      "div",
                      { staticClass: "row mt-5" },
                      t._l(t.items.slice(-73, -53), function (e, a) {
                        return s(
                          "div",
                          {
                            key: a,
                            staticClass: "col-md-4 col-lg-3 col-sm-12",
                          },
                          [
                            e.price
                              ? s(
                                  "div",
                                  { staticClass: "profile-card-4 text-center" },
                                  [
                                    s(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            "/products/" + e.id + "/" + e.slug,
                                        },
                                      },
                                      [
                                        e.image
                                          ? s("img", {
                                              staticClass: "img img-responsive",
                                              staticStyle: {
                                                height: "14rem",
                                                width: "100%",
                                              },
                                              attrs: {
                                                src: e.image,
                                                "img-top": "",
                                                "img-alt": "",
                                              },
                                            })
                                          : t._e(),
                                      ]
                                    ),
                                    s(
                                      "div",
                                      { staticClass: "profile-content" },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass: "profile-description",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(e.name.slice(0, 50)) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        s("div", { staticClass: "row" }, [
                                          s(
                                            "div",
                                            { staticClass: "col-xs-4" },
                                            [
                                              s(
                                                "div",
                                                {
                                                  staticClass:
                                                    "profile-overview",
                                                },
                                                [
                                                  s("p", [t._v("Price")]),
                                                  s("h4", [
                                                    t._v(t._s(e.price)),
                                                  ]),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        );
                      }),
                      0
                    ),
                    s("h3", { staticClass: "top mt-5" }, [
                      t._v("Top Products"),
                    ]),
                    s(
                      "div",
                      { staticClass: "row mt-5" },
                      t._l(t.featuredProducts.slice(-13, -1), function (e) {
                        return s(
                          "div",
                          { key: e.id, staticClass: "col-md-3 col-sm-12" },
                          [
                            e.price
                              ? s(
                                  "div",
                                  { staticClass: "profile-card-4 text-center" },
                                  [
                                    s(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            "/products/" + e.id + "/" + e.slug,
                                        },
                                      },
                                      [
                                        e.image
                                          ? s("img", {
                                              staticClass: "img img-responsive",
                                              staticStyle: {
                                                height: "14rem",
                                                width: "100%",
                                              },
                                              attrs: {
                                                src: e.image,
                                                "img-top": "",
                                                "img-alt": "",
                                              },
                                            })
                                          : t._e(),
                                      ]
                                    ),
                                    s(
                                      "div",
                                      { staticClass: "profile-content" },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass: "profile-description",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(e.name.slice(0, 50)) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        s("div", { staticClass: "row" }, [
                                          s(
                                            "div",
                                            { staticClass: "col-xs-4" },
                                            [
                                              s(
                                                "div",
                                                {
                                                  staticClass:
                                                    "profile-overview",
                                                },
                                                [
                                                  s("p", [t._v("Price")]),
                                                  s("h4", [
                                                    t._v(t._s(e.price)),
                                                  ]),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ],
                1
              ),
          t.IsHidden
            ? s("div", { staticClass: "container mt-5" }, [
                s(
                  "div",
                  { staticClass: "row" },
                  t._l(12, function (e) {
                    return s(
                      "div",
                      { key: e, staticClass: "col-md-3 col-sm-12 mt-5" },
                      [t._m(0, !0)]
                    );
                  }),
                  0
                ),
              ])
            : t._e(),
        ]);
      },
      A = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "loader_skeleton" }, [
            s("div", { staticClass: "card-loader" }, [
              s("div", { staticClass: "img-loader" }),
              s("div", { staticClass: "text-loader" }),
              s("div", { staticClass: "text-loader" }),
            ]),
          ]);
        },
      ],
      I = {
        name: "productList",
        data: function () {
          return {
            items: this.$store.state.items,
            featuredProducts: this.$store.state.featuredProducts,
          };
        },
        computed: {
          IsHidden: function () {
            return this.$store.state.hidden;
          },
        },
      },
      O = I,
      T = Object(m["a"])(O, j, A, !1, null, null, null),
      N = T.exports,
      $ = { name: "Home", components: { productList: N } },
      L = $,
      R = Object(m["a"])(L, E, S, !1, null, null, null),
      U = R.exports,
      F = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "b-container",
          [
            s(
              "b-card",
              {
                staticClass: "overflow-hidden border-0",
                staticStyle: { "margin-top": "5rem" },
                attrs: { "no-body": "" },
              },
              [
                s(
                  "b-row",
                  { attrs: { "no-gutters": "" } },
                  [
                    s(
                      "b-col",
                      { attrs: { md: "6" } },
                      [
                        s("b-card-img", {
                          staticClass: "rounded-0",
                          staticStyle: { width: "70%" },
                          attrs: {
                            src: t.item.image,
                            "img-top": "",
                            alt: "Image",
                          },
                        }),
                      ],
                      1
                    ),
                    s(
                      "b-col",
                      { attrs: { md: "6" } },
                      [
                        s(
                          "b-card-body",
                          {
                            staticClass: "text-left",
                            staticStyle: { "line-height": "2rem" },
                            attrs: { title: t.item.name },
                          },
                          [
                            s("b-card-text", [
                              s("p", [
                                t._v(
                                  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptas deleniti! Ad sapiente nostrum, vero, saepe voluptatem eos iusto exercitationem ipsa nemo in recusandae expedita repudiandae assumenda maiores, quis quo? "
                                ),
                              ]),
                            ]),
                            s(
                              "b-list-group",
                              { attrs: { flush: "" } },
                              [
                                s(
                                  "b-list-group-item",
                                  { staticClass: "text-warning" },
                                  [
                                    s(
                                      "b-badge",
                                      {
                                        staticStyle: { "font-size": "100%" },
                                        attrs: { variant: "warning", pill: "" },
                                      },
                                      [t._v(" " + t._s(t.item.price))]
                                    ),
                                  ],
                                  1
                                ),
                                s(
                                  "b-list-group-item",
                                  { staticClass: "text-success border-0" },
                                  [
                                    s(
                                      "b-form",
                                      { attrs: { inline: "" } },
                                      [
                                        s("b-form-input", {
                                          attrs: {
                                            type: "number",
                                            id: "quantity",
                                            placeholder: "Quantity",
                                            size: "sm",
                                            value: t.item.quantity,
                                          },
                                        }),
                                        s(
                                          "label",
                                          {
                                            staticClass: "ml-4",
                                            attrs: { for: "quantity" },
                                          },
                                          [t._v("Quantity")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                s(
                                  "b-list-group-item",
                                  { staticClass: "text-dark" },
                                  [
                                    s(
                                      "p",
                                      [
                                        s(
                                          "b-badge",
                                          {
                                            attrs: {
                                              variant: "info",
                                              pill: "",
                                            },
                                          },
                                          [t._v(" " + t._s(t.item.delivery))]
                                        ),
                                      ],
                                      1
                                    ),
                                    s(
                                      "p",
                                      [
                                        s(
                                          "b-badge",
                                          {
                                            attrs: {
                                              variant: "info",
                                              pill: "",
                                            },
                                          },
                                          [t._v(" " + t._s(t.item.stock))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                                s(
                                  "b-list-group-item",
                                  { staticClass: "text-dark mt-5" },
                                  [
                                    s(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-secondary btn-block",
                                      },
                                      [t._v("Buy Now")]
                                    ),
                                    s(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-success btn-block ml-sm-1",
                                        on: {
                                          click: function (e) {
                                            return t.AddToCart();
                                          },
                                        },
                                      },
                                      [t._v(" Add To Cart ")]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      H = [],
      W = (s("7db0"), s("159b"), s("bc3a")),
      M = s.n(W),
      Y = {
        name: "productDetails",
        data: function () {
          return { item: [] };
        },
        computed: {
          productID: function () {
            return this.$route.params.id;
          },
          UserId: function () {
            return this.$store.state.UserId;
          },
          items: function () {
            return this.$store.state.items;
          },
          cartItems: function () {
            return this.$store.state.cart;
          },
        },
        methods: {
          AddToCart: function () {
            var t = this;
            this.$store.state.cart.find(function (e) {
              return e.image === t.item.image;
            })
              ? this.$swal("This Item Aready Exist.")
              : M.a
                  .post("https://vuengo.herokuapp.com/data/cart/", {
                    csrfmiddlewaretoken: window.$cookies.get("csrftoken"),
                    name: this.item.name,
                    image: this.item.image,
                    price: this.item.price,
                    quantity: this.item.quantity,
                    user: this.UserId,
                  })
                  .then(function (e) {
                    console.log(e.data),
                      t.cart(),
                      t.$swal("Item Added Successfully.");
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
          },
          getItem: function () {
            var t = this;
            this.items.forEach(function (e) {
              e.id == t.productID && (t.item = e);
            });
          },
          cart: function () {
            this.$store.dispatch("getCart");
          },
        },
        created: function () {
          this.getItem(), this.cart();
        },
      },
      G = Y,
      B = Object(m["a"])(G, F, H, !1, null, null, null),
      D = B.exports,
      q = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          [
            t.IsHidden
              ? t._e()
              : s("b-container", { staticClass: "bv-example-row" }, [
                  s(
                    "div",
                    { staticClass: "row mt-5" },
                    t._l(t.categories, function (e) {
                      return s(
                        "div",
                        {
                          key: e.id,
                          staticClass: "col-md-4 col-lg-3 col-sm-12",
                        },
                        [
                          s(
                            "div",
                            { staticClass: "profile-card-4 text-center" },
                            [
                              s(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/category/" + e.id + "/" + e.name,
                                  },
                                },
                                [
                                  e.image
                                    ? s("img", {
                                        staticClass: "img img-responsive",
                                        staticStyle: {
                                          height: "16rem",
                                          width: "100%",
                                        },
                                        attrs: {
                                          src: e.image,
                                          "img-top": "",
                                          "img-alt": "",
                                        },
                                      })
                                    : t._e(),
                                ]
                              ),
                              s("div", { staticClass: "profile-content" }, [
                                s(
                                  "div",
                                  { staticClass: "profile-description" },
                                  [s("h5", [t._v(t._s(e.name))])]
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]
                      );
                    }),
                    0
                  ),
                ]),
            t.IsHidden
              ? s("div", { staticClass: "container mt-5" }, [
                  s(
                    "div",
                    { staticClass: "row" },
                    t._l(12, function (e) {
                      return s(
                        "div",
                        { key: e, staticClass: "col-md-3 col-sm-12 mt-5" },
                        [t._m(0, !0)]
                      );
                    }),
                    0
                  ),
                ])
              : t._e(),
          ],
          1
        );
      },
      z = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "loader_skeleton" }, [
            s("div", { staticClass: "card-loader" }, [
              s("div", { staticClass: "img-loader" }),
              s("div", { staticClass: "text-loader" }),
              s("div", { staticClass: "text-loader" }),
            ]),
          ]);
        },
      ],
      Z = {
        name: "categoryList",
        computed: {
          categories: function () {
            return this.$store.state.categories;
          },
          IsHidden: function () {
            return this.$store.state.hidden;
          },
        },
      },
      J = Z,
      Q = Object(m["a"])(J, q, z, !1, null, null, null),
      K = Q.exports,
      V = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          [
            t.IsHidden
              ? t._e()
              : s("b-container", { staticClass: "bv-example-row" }, [
                  s("h3", { staticClass: "top mt-5" }, [
                    t._v(t._s(this.$route.params.slug)),
                  ]),
                  s("hr"),
                  s(
                    "div",
                    { staticClass: "row mt-5" },
                    t._l(t.category, function (e) {
                      return s(
                        "div",
                        {
                          key: e.id,
                          staticClass: "col-md-4 col-lg-3 col-sm-12",
                        },
                        [
                          s(
                            "div",
                            { staticClass: "profile-card-4 text-center" },
                            [
                              s(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/products/" + e.id + "/" + e.slug,
                                  },
                                },
                                [
                                  e.image
                                    ? s("img", {
                                        staticClass: "img img-responsive",
                                        staticStyle: {
                                          height: "14rem",
                                          width: "100%",
                                        },
                                        attrs: {
                                          src: e.image,
                                          "img-top": "",
                                          "img-alt": "",
                                        },
                                      })
                                    : t._e(),
                                ]
                              ),
                              s("div", { staticClass: "profile-content" }, [
                                s(
                                  "div",
                                  { staticClass: "profile-description" },
                                  [t._v(" " + t._s(e.name.slice(0, 100)) + " ")]
                                ),
                                s("div", { staticClass: "row" }, [
                                  s("div", { staticClass: "col-xs-4" }, [
                                    s(
                                      "div",
                                      { staticClass: "profile-overview" },
                                      [
                                        s("p", [t._v("Price")]),
                                        s("h4", [t._v(t._s(e.price))]),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ],
                            1
                          ),
                        ]
                      );
                    }),
                    0
                  ),
                ]),
            t.IsHidden
              ? s("div", { staticClass: "container mt-5" }, [
                  s(
                    "div",
                    { staticClass: "row" },
                    t._l(12, function (e) {
                      return s(
                        "div",
                        { key: e, staticClass: "col-md-3 col-sm-12 mt-5" },
                        [t._m(0, !0)]
                      );
                    }),
                    0
                  ),
                ])
              : t._e(),
          ],
          1
        );
      },
      X = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "loader_skeleton" }, [
            s("div", { staticClass: "card-loader" }, [
              s("div", { staticClass: "img-loader" }),
              s("div", { staticClass: "text-loader" }),
              s("div", { staticClass: "text-loader" }),
            ]),
          ]);
        },
      ],
      tt = s("b85c"),
      et = {
        name: "shopByCategory",
        data: function () {
          return { category: [], products: [] };
        },
        created: function () {
          this.$root.$refs.A = this;
        },
        methods: {
          getCategory: function () {
            var t = this;
            M.a
              .get(
                "https://vuengo.herokuapp.com/data/products/?category=".concat(
                  this.categoryId,
                  "&min_price=&max_price=&featured="
                )
              )
              .then(function (e) {
                t.category = [];
                var s,
                  a = Object(tt["a"])(e.data);
                try {
                  for (a.s(); !(s = a.n()).done; ) {
                    var i = s.value;
                    t.category.push(i);
                  }
                } catch (r) {
                  a.e(r);
                } finally {
                  a.f();
                }
              })
              .catch(function (t) {
                console.log(t);
              });
          },
        },
        computed: {
          categoryId: function () {
            return this.$route.params.id;
          },
          IsHidden: function () {
            return this.$store.state.hidden;
          },
        },
        watch: {
          item: {
            handler: function () {
              var t = this;
              M.a
                .get(
                  "https://vuengo.herokuapp.com/data/products/?category=".concat(
                    this.categoryId,
                    "&min_price=&max_price=&featured="
                  )
                )
                .then(function (e) {
                  var s,
                    a = Object(tt["a"])(e.data);
                  try {
                    for (a.s(); !(s = a.n()).done; ) {
                      var i = s.value;
                      t.category.push(i);
                    }
                  } catch (r) {
                    a.e(r);
                  } finally {
                    a.f();
                  }
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            deep: !0,
            immediate: !0,
          },
        },
      },
      st = et,
      at = Object(m["a"])(st, V, X, !1, null, null, null),
      it = at.exports,
      rt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "b-container",
          { staticStyle: { "margin-bottom": "8rem" } },
          [
            s(
              "h1",
              { staticClass: "text-left mt-5 mr-1 align-items-end" },
              [
                t._v(" Cart"),
                s(
                  "b-badge",
                  {
                    staticStyle: { "font-size": "14px" },
                    attrs: { variant: "danger", pill: "" },
                  },
                  [t._v(t._s(t.count))]
                ),
              ],
              1
            ),
            s("hr"),
            s(
              "b-list-group",
              [
                s(
                  "b-col",
                  { attrs: { sm: "auto" } },
                  t._l(t.cart, function (e, a) {
                    return s(
                      "b-list-group-item",
                      {
                        key: a,
                        staticClass:
                          "d-flex justify-content-between align-items-center mt-3",
                      },
                      [
                        s("img", {
                          staticClass: "rounded-0",
                          staticStyle: { width: "4rem" },
                          attrs: { src: e.image, "img-top": "", alt: "Image" },
                        }),
                        s(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-column w-100 align-items-start justify-content-between text-left",
                            staticStyle: { "margin-left": "2.5rem" },
                          },
                          [
                            s("h6", { staticClass: "mb-1 text-secondary" }, [
                              t._v(t._s(e.name)),
                            ]),
                            s("small", { staticClass: "text-success mt-3" }, [
                              t._v("Quantity: " + t._s(e.quantity)),
                            ]),
                          ]
                        ),
                        s(
                          "b-badge",
                          { attrs: { variant: "warning", pill: "" } },
                          [
                            t._v(
                              t._s(
                                +e.price.slice(1).replace(",", "") * e.quantity
                              )
                            ),
                          ]
                        ),
                        s(
                          "button",
                          {
                            staticClass:
                              "btn btn-secondary btn-sm ml-4 rounded-circle",
                            on: {
                              click: function (s) {
                                return t.remove(a, e.id);
                              },
                            },
                          },
                          [t._v(" X ")]
                        ),
                      ],
                      1
                    );
                  }),
                  1
                ),
              ],
              1
            ),
            s("hr"),
            s("div", { staticClass: "mb-5 clearfix" }, [
              s(
                "button",
                {
                  staticClass:
                    "btn btn-secondary float-right block rounded ml-auto",
                  attrs: { disabled: "" },
                },
                [t._v(" Total: " + t._s(t.getTotal) + " ")]
              ),
              s(
                "button",
                {
                  staticClass: "btn btn-success float-left block rounded",
                  on: {
                    click: function (e) {
                      return t.buy();
                    },
                  },
                },
                [
                  s("b-icon", { attrs: { icon: "chevron-double-left" } }),
                  t._v(" Checkout "),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      ot = [],
      nt =
        (s("5319"),
        s("ac1f"),
        s("fb6a"),
        s("b680"),
        {
          name: "AddToCart",
          methods: {
            buy: function () {
              fetch("https://vuengo.herokuapp.com/config/")
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  var e = window.Stripe(t.publicKey);
                  console.log(e),
                    fetch(
                      "https://vuengo.herokuapp.com/api/create-checkout-session/"
                    )
                      .then(function (t) {
                        return t.json();
                      })
                      .then(function (t) {
                        return (
                          console.log(t),
                          e.redirectToCheckout({ sessionId: t.sessionId })
                        );
                      })
                      .then(function (t) {
                        console.log(t);
                      });
                });
            },
            cart: function () {
              this.$store.dispatch("getCart");
            },
            remove: function (t, e) {
              var s = this;
              this.$swal
                .fire({
                  title: "Are You Sure?",
                  showCancelButton: !0,
                  confirmButtonText: "Ok",
                })
                .then(function (a) {
                  a.isConfirmed &&
                    (s.$delete(s.cart, t),
                    M.a
                      .delete(
                        "https://vuengo.herokuapp.com/data/cart/" + e + "/"
                      )
                      .then(function (t) {
                        s.cart(), console.log(t);
                      })
                      .catch(function (t) {
                        console.log(t.response);
                      }));
                });
            },
          },
          computed: Object(c["a"])(
            Object(c["a"])(
              {},
              Object(l["b"])({ cart: "get_cart", count: "getCartLength" })
            ),
            {},
            {
              getTotal: function () {
                var t = 0;
                return (
                  this.cart.forEach(function (e) {
                    t += +e.price.slice(1).replace(",", "");
                  }),
                  "$" + t.toFixed(2)
                );
              },
            }
          ),
          created: function () {
            this.cart();
          },
        }),
      ct = nt,
      lt = (s("c883"), Object(m["a"])(ct, rt, ot, !1, null, "6f3386dc", null)),
      ut = lt.exports,
      dt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "container mx-auto",
            staticStyle: { "min-height": "400px" },
          },
          [
            s("h3", { staticClass: "Lastest mt-5" }, [
              t._v("Search Results: " + t._s(this.$route.params.slug)),
            ]),
            t.results.length > 0
              ? s(
                  "div",
                  { staticClass: "row mt-5" },
                  t._l(t.results, function (e, a) {
                    return s(
                      "div",
                      { key: a, staticClass: "col-md-4 col-lg-3 col-sm-12" },
                      [
                        s(
                          "div",
                          { staticClass: "profile-card-4 text-center" },
                          [
                            s(
                              "router-link",
                              {
                                attrs: {
                                  to: "/products/" + e.id + "/" + e.slug,
                                },
                              },
                              [
                                e.image
                                  ? s("img", {
                                      staticClass: "img img-responsive",
                                      staticStyle: {
                                        height: "18rem",
                                        width: "100%",
                                      },
                                      attrs: {
                                        src: e.image,
                                        "img-top": "",
                                        "img-alt": "",
                                      },
                                    })
                                  : t._e(),
                              ]
                            ),
                            s("div", { staticClass: "profile-content" }, [
                              s("div", { staticClass: "profile-description" }, [
                                t._v(" " + t._s(e.name.slice(0, 100)) + " "),
                              ]),
                              s("div", { staticClass: "row" }, [
                                s("div", { staticClass: "col-xs-4" }, [
                                  s(
                                    "div",
                                    { staticClass: "profile-overview" },
                                    [
                                      s("p", [t._v("Price")]),
                                      s("h4", [t._v(t._s(e.price))]),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ]
                    );
                  }),
                  0
                )
              : s("div", { staticClass: "text-center mt-5" }, [
                  s("h4", { staticClass: "text-danger" }, [t._v("Not Exist")]),
                ]),
          ]
        );
      },
      mt = [],
      pt = {
        name: "search",
        computed: {
          results: function () {
            return this.$store.state.results;
          },
        },
      },
      ft = pt,
      vt = Object(m["a"])(ft, dt, mt, !1, null, null, null),
      ht = vt.exports,
      gt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "main" }, [
          s("section", { staticClass: "ftco-section" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "row justify-content-center" }, [
                s("div", { staticClass: "col-md-5 col-lg-5" }, [
                  s("div", { staticClass: "mt-5" }, [
                    s(
                      "form",
                      {
                        staticClass: "profile p-5",
                        attrs: { method: "post" },
                        on: {
                          submit: function (e) {
                            return e.preventDefault(), t.login();
                          },
                        },
                      },
                      [
                        s("h3", { staticClass: "mb-4 text-center" }, [
                          t._v("Login"),
                        ]),
                        s("div", { staticClass: "form-group" }, [
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.username,
                                expression: "username",
                              },
                            ],
                            staticClass: "profile w-100",
                            class: t.Wvalid,
                            attrs: {
                              type: "text",
                              placeholder: "Username",
                              required: "",
                            },
                            domProps: { value: t.username },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.username = e.target.value);
                              },
                            },
                          }),
                          s(
                            "div",
                            { staticClass: "invalidtooltip", class: t.display },
                            [t._v(" Username Or Password is Incorrect ")]
                          ),
                        ]),
                        s("div", { staticClass: "form-group" }, [
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.password,
                                expression: "password",
                              },
                            ],
                            staticClass: "profile w-100",
                            class: t.Wvalid,
                            attrs: {
                              id: "password-field",
                              type: "password",
                              placeholder: "Password",
                              required: "",
                            },
                            domProps: { value: t.password },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.password = e.target.value);
                              },
                            },
                          }),
                        ]),
                        t._m(0),
                        s("div", { staticClass: "form-group" }, [
                          s(
                            "div",
                            { staticClass: "float-left" },
                            [
                              s(
                                "router-link",
                                { attrs: { to: "reset/password/" } },
                                [t._v("Forgot Password")]
                              ),
                            ],
                            1
                          ),
                          t._m(1),
                        ]),
                      ]
                    ),
                    s("p", { staticClass: "w-100 text-center mt-4" }, [
                      t._v(" — Or Sign In With — "),
                    ]),
                    t._m(2),
                    s(
                      "p",
                      { staticClass: "w-100 text-center mt-4" },
                      [
                        t._v(" — New With Us Create Un Account ? "),
                        s("router-link", { attrs: { to: "signup" } }, [
                          t._v("Sign up"),
                        ]),
                        t._v(" — "),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      bt = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "form-group" }, [
            s(
              "button",
              {
                staticClass: "profile btn-success submit px-3 w-100",
                attrs: { type: "submit" },
              },
              [t._v(" Login ")]
            ),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "float-rightt" }, [
            s("label", {}, [
              t._v("Remember Me "),
              s("input", { attrs: { type: "checkbox", checked: "" } }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "social text-center" }, [
            s(
              "a",
              {
                staticClass: "px-2 py-2 mr-md-1 rounded",
                attrs: { href: "#" },
              },
              [
                s("span", { staticClass: "ion-logo-facebook mr-2" }),
                t._v(" Facebook"),
              ]
            ),
            s(
              "a",
              {
                staticClass: "px-2 py-2 ml-md-1 rounded",
                attrs: { href: "#" },
              },
              [
                s("span", { staticClass: "ion-logo-twitter mr-2" }),
                t._v(" Twitter"),
              ]
            ),
          ]);
        },
      ],
      Ct = {
        name: "login",
        data: function () {
          return { username: "", password: "", Wvalid: "", display: "" };
        },
        methods: {
          login: function () {
            var t = this;
            M.a
              .post("https://vuengo.herokuapp.com/auth/login/", {
                csrfmiddlewaretoken: window.$cookies.get("csrftoken"),
                username: this.username,
                password: this.password,
              })
              .then(function (e) {
                fetch("https://vuengo.herokuapp.com/auth_config/").then(
                  function (t) {
                    return t.json().then(function (t) {
                      localStorage.setItem("isAuth", t);
                    });
                  }
                ),
                  console.log(e.data),
                  (t.$store.state.isAuth = !0),
                  t.user(),
                  t.cart(),
                  t.$router.push({ name: "Home" });
              })
              .catch(function (e) {
                (t.Wvalid = ""),
                  console.log(e.response.data),
                  (t.display = "d-block"),
                  (t.Wvalid = "invalid");
              });
          },
          user: function () {
            this.$store.dispatch("getUser");
          },
          cart: function () {
            this.$store.dispatch("getCart");
          },
          getAuth: function () {
            this.$store.dispatch("getAuth");
          },
        },
      },
      _t = Ct,
      wt = Object(m["a"])(_t, gt, bt, !1, null, null, null),
      yt = wt.exports,
      xt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("section", { staticClass: "ftco-section" }, [
          s("div", { staticClass: "container" }, [
            s("div", { staticClass: "row justify-content-center" }, [
              s("div", { staticClass: "col-md-5 col-lg-5" }, [
                s("div", { staticClass: "profile p-5 mt-5" }, [
                  s("h2", [t._v("Signup")]),
                  s(
                    "form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function (e) {
                          return e.preventDefault(), t.register();
                        },
                      },
                    },
                    [
                      s("div", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.username,
                              expression: "username",
                            },
                          ],
                          staticClass: "profile w-100",
                          class: t.v_username ? "invalid" : null,
                          attrs: {
                            type: "text",
                            name: "username",
                            required: "",
                            placeholder: "Username",
                          },
                          domProps: { value: t.username },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.username = e.target.value);
                            },
                          },
                        }),
                        t.v_username
                          ? s(
                              "div",
                              {
                                staticClass: "invalidtooltip",
                                class: t.display,
                              },
                              [t._v(" " + t._s(t.v_username[0]) + " ")]
                            )
                          : t._e(),
                      ]),
                      s("div", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.email,
                              expression: "email",
                            },
                          ],
                          staticClass: "profile w-100",
                          class: t.v_email ? "invalid" : null,
                          attrs: {
                            type: "email",
                            name: "email",
                            required: "",
                            placeholder: "Email",
                          },
                          domProps: { value: t.email },
                          on: {
                            input: function (e) {
                              e.target.composing || (t.email = e.target.value);
                            },
                          },
                        }),
                        t.v_email
                          ? s(
                              "div",
                              {
                                staticClass: "invalidtooltip",
                                class: t.display,
                              },
                              [t._v(" " + t._s(t.v_email[0]) + " ")]
                            )
                          : t._e(),
                      ]),
                      s("div", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.password,
                              expression: "password",
                            },
                          ],
                          staticClass: "profile w-100",
                          class: t.v_password ? "invalid" : null,
                          attrs: {
                            type: "password",
                            name: "password",
                            required: "",
                            placeholder: "Password",
                          },
                          domProps: { value: t.password },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.password = e.target.value);
                            },
                          },
                        }),
                        t.v_password
                          ? s(
                              "div",
                              {
                                staticClass: "invalidtooltip",
                                class: t.display,
                              },
                              [t._v(" " + t._s(t.v_password[0]) + " ")]
                            )
                          : t._e(),
                      ]),
                      s("div", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.password2,
                              expression: "password2",
                            },
                          ],
                          staticClass: "profile w-100",
                          class: t.v_password2 ? "invalid" : null,
                          attrs: {
                            type: "password",
                            name: "password",
                            required: "",
                            placeholder: "Confirm Password",
                          },
                          domProps: { value: t.password2 },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.password2 = e.target.value);
                            },
                          },
                        }),
                        t.v_password2 || t.v_duplicatePassword
                          ? s(
                              "div",
                              {
                                staticClass: "invalidtooltip",
                                class: t.display,
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.v_password2[0]) +
                                    " " +
                                    t._s(t.v_duplicatePassword[0]) +
                                    " "
                                ),
                              ]
                            )
                          : t._e(),
                      ]),
                      t._m(0),
                    ]
                  ),
                  s(
                    "p",
                    { staticClass: "w-100 text-center mt-4" },
                    [
                      t._v(" — Already have an account? "),
                      s("router-link", { attrs: { to: "login" } }, [
                        t._v("Login"),
                      ]),
                      t._v(" — "),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      kt = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "form-group" }, [
            s(
              "button",
              {
                staticClass: "form-control btn btn-success submit px-3",
                attrs: { type: "submit" },
              },
              [t._v(" Register ")]
            ),
          ]);
        },
      ],
      Pt = {
        name: "signup",
        data: function () {
          return {
            Wvalid: "",
            display: "",
            username: "",
            email: "",
            password: "",
            password2: "",
            vUserName: null,
            vEmail: null,
            vPassword: null,
            vPassword2: null,
            noneFields: null,
          };
        },
        computed: {
          v_username: function () {
            return this.vUserName;
          },
          v_email: function () {
            return this.vEmail;
          },
          v_password: function () {
            return this.vPassword;
          },
          v_password2: function () {
            return this.vPassword2;
          },
          v_duplicatePassword: function () {
            return this.noneFields;
          },
        },
        methods: {
          register: function () {
            var t = this;
            M.a
              .post("https://vuengo.herokuapp.com/auth/register/", {
                csrfmiddlewaretoken: window.$cookies.get("csrftoken"),
                username: this.username,
                email: this.email,
                password1: this.password,
                password2: this.password2,
              })
              .then(function (e) {
                console.log(e.data), t.$router.push({ name: "login" });
              })
              .catch(function (e) {
                (t.Wvalid = ""),
                  console.log(e.response.data),
                  (t.vUserName = e.response.data.username),
                  (t.vEmail = e.response.data.email),
                  (t.vPassword = e.response.data.password1),
                  (t.vPassword2 = e.response.data.password2),
                  (t.noneFields = e.response.data.non_field_errors),
                  (t.display = "d-block"),
                  (t.Wvalid = "invalid"),
                  console.log(t.v_username);
              });
          },
          checkForm: function (t) {
            t.preventDefault(), t.target.classList.add("was-validated");
          },
        },
      },
      Et = Pt,
      St = (s("6e2c"), Object(m["a"])(Et, xt, kt, !1, null, "011b5fc0", null)),
      jt = St.exports,
      At = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "card user-card border-0 container" }, [
          s("div", { staticClass: "card-body text-center" }, [
            s("div", { staticClass: "media" }, [
              s("div", { staticClass: "media-body ml-3 pt-4" }, [
                s("h4", [t._v(t._s(t.first_name) + " " + t._s(t.last_name))]),
                s("div", { staticClass: "small text-muted" }, [
                  t._v("Joined Dec 31, 2017"),
                ]),
              ]),
            ]),
            s("hr"),
            s("div", { staticClass: "row mt-5" }, [
              s("ul", { staticClass: "d-inline nav-pills col-md-3" }, [
                s(
                  "li",
                  {
                    staticClass: "nav-item",
                    class: { active: 1 == t.active_el },
                    on: {
                      click: function (e) {
                        return t.activate(1);
                      },
                    },
                  },
                  [
                    s(
                      "button",
                      {
                        staticClass: "btn-profile border-0",
                        on: {
                          click: function (e) {
                            t.hidden = !1;
                          },
                        },
                      },
                      [t._v(" Profile ")]
                    ),
                  ]
                ),
                s(
                  "li",
                  {
                    staticClass: "nav-item",
                    class: { active: 2 == t.active_el },
                    on: {
                      click: function (e) {
                        return t.activate(2);
                      },
                    },
                  },
                  [
                    s("button", { staticClass: "btn-profile border-0" }, [
                      t._v("Orders"),
                    ]),
                  ]
                ),
                s(
                  "li",
                  {
                    staticClass: "nav-item",
                    class: { active: 3 == t.active_el },
                    on: {
                      click: function (e) {
                        return t.activate(3);
                      },
                    },
                  },
                  [
                    s("button", { staticClass: "btn-profile border-0" }, [
                      t._v("Address"),
                    ]),
                  ]
                ),
                s(
                  "li",
                  {
                    staticClass: "nav-item",
                    class: { active: 4 == t.active_el },
                    on: {
                      click: function (e) {
                        return t.activate(4);
                      },
                    },
                  },
                  [
                    s(
                      "button",
                      {
                        staticClass: "btn-profile border-0",
                        on: {
                          click: function (e) {
                            t.hidden = !0;
                          },
                        },
                      },
                      [t._v(" Change Password ")]
                    ),
                  ]
                ),
              ]),
              t.hidden
                ? t._e()
                : s(
                    "form",
                    {
                      staticClass: "col-md-7 mx-auto profile-style",
                      attrs: { method: "post" },
                      on: {
                        submit: function (e) {
                          return e.preventDefault(), t.update_profile(e);
                        },
                      },
                    },
                    [
                      s("h2", { staticClass: "mb-3" }, [t._v("Profile")]),
                      s("div", { staticClass: "form-row" }, [
                        s("div", { staticClass: "form-group col-sm-6" }, [
                          s("label", { attrs: { for: "profileFirstName" } }, [
                            t._v("First Name"),
                          ]),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.first_name,
                                expression: "first_name",
                              },
                            ],
                            staticClass: "profile w-100",
                            attrs: {
                              type: "text",
                              id: "profileFirstName",
                              required: "",
                            },
                            domProps: { value: t.first_name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.first_name = e.target.value);
                              },
                            },
                          }),
                        ]),
                        s("div", { staticClass: "form-group col-sm-6" }, [
                          s("label", { attrs: { for: "profileLastName" } }, [
                            t._v("Last Name"),
                          ]),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.last_name,
                                expression: "last_name",
                              },
                            ],
                            staticClass: "profile w-100",
                            attrs: {
                              type: "text",
                              id: "profileLastName",
                              required: "",
                            },
                            domProps: { value: t.last_name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.last_name = e.target.value);
                              },
                            },
                          }),
                        ]),
                        s("div", { staticClass: "form-group col-sm-12" }, [
                          s("label", { attrs: { for: "profileEmail" } }, [
                            t._v("Username"),
                          ]),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.username,
                                expression: "username",
                              },
                            ],
                            staticClass: "profile w-100",
                            attrs: {
                              type: "text",
                              id: "profileEmail",
                              required: "",
                            },
                            domProps: { value: t.username },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.username = e.target.value);
                              },
                            },
                          }),
                        ]),
                        s("div", { staticClass: "form-group col-sm-12" }, [
                          s("label", { attrs: { for: "profileEmail" } }, [
                            t._v("Email address"),
                          ]),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.email,
                                expression: "email",
                              },
                            ],
                            staticClass: "profile w-100",
                            attrs: {
                              type: "email",
                              id: "profileEmail",
                              required: "",
                            },
                            domProps: { value: t.email },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.email = e.target.value);
                              },
                            },
                          }),
                        ]),
                        t._m(0),
                      ]),
                    ]
                  ),
              t.hidden
                ? s(
                    "div",
                    {
                      staticClass: "col-md-7 mx-auto profile-style",
                      attrs: { "data-active": "change_password" },
                    },
                    [
                      s("h2", [t._v("Change Password")]),
                      s(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: {
                            submit: function (e) {
                              return e.preventDefault(), t.changePassword(e);
                            },
                          },
                        },
                        [
                          s("div", { staticClass: "form-row" }, [
                            s("div", { staticClass: "form-group col-sm-12" }, [
                              s(
                                "label",
                                { attrs: { for: "profilePassword" } },
                                [t._v("Old Password")]
                              ),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.oldPassword,
                                    expression: "oldPassword",
                                  },
                                ],
                                staticClass: "profile w-100",
                                class: t.v_Oldpassword ? "invalid" : null,
                                attrs: {
                                  type: "password",
                                  id: "profilePassword",
                                },
                                domProps: { value: t.oldPassword },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.oldPassword = e.target.value);
                                  },
                                },
                              }),
                              t.v_Oldpassword
                                ? s(
                                    "div",
                                    {
                                      staticClass: "invalidtooltip",
                                      class: t.display,
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(t.v_Oldpassword.old_password) +
                                          " "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                            s("div", { staticClass: "form-group col-sm-12" }, [
                              s(
                                "label",
                                { attrs: { for: "profilePassword" } },
                                [t._v("New Password")]
                              ),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.newPassword1,
                                    expression: "newPassword1",
                                  },
                                ],
                                staticClass: "profile w-100",
                                class: t.vNewPassword ? "invalid" : null,
                                attrs: {
                                  type: "password",
                                  id: "profilePassword",
                                },
                                domProps: { value: t.newPassword1 },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.newPassword1 = e.target.value);
                                  },
                                },
                              }),
                              t.vNewPassword
                                ? s(
                                    "div",
                                    {
                                      staticClass: "invalidtooltip",
                                      class: t.display,
                                    },
                                    [t._v(" " + t._s(t.vNewPassword[0]) + " ")]
                                  )
                                : t._e(),
                            ]),
                            s("div", { staticClass: "form-group col-sm-12" }, [
                              s(
                                "label",
                                { attrs: { for: "profileConfirmPassword" } },
                                [t._v("Confirm Password")]
                              ),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.newPassword2,
                                    expression: "newPassword2",
                                  },
                                ],
                                staticClass: "profile w-100",
                                class: t.vNewPassword ? "invalid" : null,
                                attrs: {
                                  type: "password",
                                  id: "profileConfirmPassword",
                                },
                                domProps: { value: t.newPassword2 },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.newPassword2 = e.target.value);
                                  },
                                },
                              }),
                              t.v_duplicatePassword
                                ? s(
                                    "div",
                                    {
                                      staticClass: "invalidtooltip",
                                      class: t.display,
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(t.v_duplicatePassword[0]) +
                                          " "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]),
                            t._m(1),
                          ]),
                        ]
                      ),
                    ]
                  )
                : t._e(),
            ]),
          ]),
        ]);
      },
      It = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "form-group col-12" }, [
            s(
              "button",
              {
                staticClass: "btn btn-success btn-block mt-3",
                attrs: { type: "submit" },
              },
              [t._v(" SAVE ")]
            ),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "form-group col-12" }, [
            s(
              "button",
              {
                staticClass: "btn btn-success btn-block mt-3",
                attrs: { type: "submit" },
              },
              [t._v(" SAVE ")]
            ),
          ]);
        },
      ],
      Ot = {
        name: "profile",
        data: function () {
          return {
            active_el: 1,
            hidden: !1,
            oldPassword: "",
            newPassword1: "",
            newPassword2: "",
            Wvalid: "",
            display: "",
            vOldPassword: null,
            vNewPassword: null,
            noneFields: null,
          };
        },
        computed: {
          pk: function () {
            return this.$store.state.UserId;
          },
          first_name: {
            get: function () {
              return this.$store.state.first_name;
            },
            set: function (t) {
              this.$store.commit("updateFirstName", t);
            },
          },
          last_name: {
            get: function () {
              return this.$store.state.last_name;
            },
            set: function (t) {
              this.$store.commit("updateLastName", t);
            },
          },
          username: {
            get: function () {
              return this.$store.state.CurrentUser;
            },
            set: function (t) {
              this.$store.commit("updateUserName", t);
            },
          },
          email: {
            get: function () {
              return this.$store.state.email;
            },
            set: function (t) {
              this.$store.commit("updateEmail", t);
            },
          },
          v_Oldpassword: function () {
            return this.vOldPassword;
          },
          v_NewPassword: function () {
            return this.vNewPassword;
          },
          v_duplicatePassword: function () {
            return this.noneFields;
          },
        },
        methods: {
          update_profile: function () {
            var t = this;
            M.a
              .put(
                "https://vuengo.herokuapp.com/update_profile/" + this.pk + "/",
                {
                  csrfmiddlewaretoken: window.$cookies.get("csrftoken"),
                  username: this.username,
                  email: this.email,
                  first_name: this.first_name,
                  last_name: this.last_name,
                }
              )
              .then(function (e) {
                console.log(e.data), t.$router.push({ name: "profile" });
              })
              .catch(function (t) {
                console.log(t);
              });
          },
          changePassword: function () {
            var t = this;
            M.a
              .put(
                "https://vuengo.herokuapp.com/change_password/" + this.pk + "/",
                {
                  csrfmiddlewaretoken: window.$cookies.get("csrftoken"),
                  old_password: this.oldPassword,
                  password: this.newPassword1,
                  password2: this.newPassword2,
                }
              )
              .then(function (e) {
                console.log(e.data), t.$router.push({ name: "Home" });
              })
              .catch(function (e) {
                (t.Wvalid = ""),
                  console.log(e.response.data),
                  console.log(e.response.data.old_password),
                  (t.vOldPassword = e.response.data.old_password),
                  (t.vNewPassword = e.response.data.password),
                  (t.noneFields = e.response.data.non_field_errors),
                  (t.display = "d-block"),
                  (t.Wvalid = "invalid");
              });
          },
          isDisable: function () {
            for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
              e[s] = arguments[s];
            e.forEach(function (t) {
              return console.log(t.length), 0 == t.length;
            });
          },
          activate: function (t) {
            this.active_el = t;
          },
        },
      },
      Tt = Ot,
      Nt = (s("eb1e"), Object(m["a"])(Tt, At, It, !1, null, "e8ddd46a", null)),
      $t = Nt.exports,
      Lt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "main" }, [
          s("section", { staticClass: "ftco-section" }, [
            s("div", { staticClass: "container" }, [
              s("div", { staticClass: "row justify-content-center" }, [
                s("div", { staticClass: "col-md-5 col-lg-5" }, [
                  s("div", { staticClass: "mt-5" }, [
                    s(
                      "form",
                      { staticClass: "profile p-5", attrs: { method: "post" } },
                      [
                        s("h3", { staticClass: "mb-4 text-center" }, [
                          t._v("Reset Password"),
                        ]),
                        s("div", { staticClass: "form-group" }, [
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.username,
                                expression: "username",
                              },
                            ],
                            staticClass: "profile w-100",
                            attrs: {
                              type: "email",
                              placeholder: "Email",
                              required: "",
                            },
                            domProps: { value: t.username },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.username = e.target.value);
                              },
                            },
                          }),
                        ]),
                        t._m(0),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      Rt = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "form-group" }, [
            s(
              "button",
              {
                staticClass: "profile btn-success submit px-3 w-100",
                attrs: { type: "submit" },
              },
              [t._v(" Reset ")]
            ),
          ]);
        },
      ],
      Ut = { name: "resetPassword" },
      Ft = Ut,
      Ht = Object(m["a"])(Ft, Lt, Rt, !1, null, null, null),
      Wt = Ht.exports,
      Mt = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Yt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticStyle: { height: "400px" } }, [
            a("div", [
              a("h1", { staticClass: "text-success mt-4 mb-5" }, [
                t._v("Confirmation"),
              ]),
              a("img", { attrs: { src: s("6582") } }),
              a("h2", { staticClass: "text-info" }, [t._v("Payment complete")]),
              a("p", [
                t._v(" Your Payment Of "),
                a("strong", { staticClass: "text-success" }, [
                  t._v("$123.133"),
                ]),
                t._v(" To "),
                a("strong", { staticClass: "text-success" }, [
                  t._v("Go Store"),
                ]),
                t._v(" Has Been Successfully Made "),
              ]),
            ]),
          ]);
        },
      ],
      Gt = {
        name: "success",
        created: function () {
          var t = this;
          setTimeout(function () {
            return t.$router.push({ path: "/cart" });
          }, 3e3);
        },
      },
      Bt = Gt,
      Dt = Object(m["a"])(Bt, Mt, Yt, !1, null, null, null),
      qt = Dt.exports,
      zt = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Zt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("div", [
              a("h1", { staticClass: "text-success mt-4 mb-5" }, [
                t._v("Confirmation"),
              ]),
              a("img", { attrs: { src: s("22b0") } }),
              a("h2", { staticClass: "text-info mt-4" }, [
                t._v("Payment Cancelled"),
              ]),
              a("p", [t._v("Your Payment Has Been Cancelled")]),
            ]),
          ]);
        },
      ],
      Jt = {
        name: "cancel",
        created: function () {
          var t = this;
          setTimeout(function () {
            return t.$router.push({ path: "/cart" });
          }, 1e4);
        },
      },
      Qt = Jt,
      Kt = Object(m["a"])(Qt, zt, Zt, !1, null, null, null),
      Vt = Kt.exports,
      Xt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "mx-auto row container" }, [
          t._m(0),
          s(
            "div",
            { staticClass: "col-md-6", staticStyle: { "margin-top": "14rem" } },
            [
              s("h1", { staticClass: "display-1" }, [t._v("404")]),
              s("h2", [t._v("UH OH! You're lost.")]),
              s("p", [
                t._v(
                  " The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage. "
                ),
              ]),
              s("router-link", { attrs: { to: "/" } }, [
                s("button", { staticClass: "btn btn-success" }, [t._v("HOME")]),
              ]),
            ],
            1
          ),
        ]);
      },
      te = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "col-md-6" }, [
            s("img", {
              attrs: {
                src: "https://cdn.wallpapersafari.com/7/30/cwf2j7.jpg",
                alt: "",
              },
            }),
          ]);
        },
      ],
      ee = { name: "404" },
      se = ee,
      ae = Object(m["a"])(se, Xt, te, !1, null, null, null),
      ie = ae.exports;
    function re(t, e, s) {
      fetch("https://vuengo.herokuapp.com/auth_config/").then(function (t) {
        return t.json().then(function (t) {
          localStorage.setItem("isAuth", t);
        });
      }),
        console.log(localStorage.isAuth),
        1 == localStorage.isAuth && "login" == t.name ? s("/") : s();
    }
    function oe(t, e, s) {
      fetch("https://vuengo.herokuapp.com/auth_config/").then(function (t) {
        return t.json().then(function (t) {
          console.log(t), localStorage.setItem("isAuth", t);
        });
      }),
        console.log(localStorage.isAuth),
        1 == localStorage.isAuth ? s() : s("/");
    }
    a["default"].use(P["a"]);
    var ne = [
        { path: "/", name: "Home", component: U },
        { path: "/shop_by_category", name: "categoryList", component: K },
        { path: "/products", name: "productList", component: N },
        { path: "/cart", name: "AddToCart", component: ut, beforeEnter: oe },
        { path: "/products/:id/:slug", name: "productDetails", component: D },
        { path: "/category/:id/:slug", name: "shopByCategory", component: it },
        { path: "/login", name: "login", component: yt, beforeEnter: re },
        { path: "/signup", name: "signup", component: jt },
        {
          path: "/reset/password/",
          name: "forgetPassword",
          component: Wt,
          beforeEnter: oe,
        },
        {
          path: "/profile/:slug",
          name: "profile",
          component: $t,
          beforeEnter: oe,
        },
        { path: "/search/:slug", name: "search", component: ht },
        {
          path: "/payment/success/",
          name: "success",
          component: qt,
          beforeEnter: oe,
        },
        {
          path: "/payment/cancelled/",
          name: "cancel",
          component: Vt,
          beforeEnter: oe,
        },
        { path: "*", name: "404", component: ie },
      ],
      ce = new P["a"]({ mode: "history", routes: ne });
    ce.beforeEach(function (t, e, s) {
      var a = t.matched.some(function (t) {
        return t.meta.requiresAuth;
      });
      a && !localStorage.getItem("isAuth") ? s("login") : s();
    });
    var le = ce,
      ue = "https://vuengo.herokuapp.com/data/products/",
      de =
        "https://vuengo.herokuapp.com/data/products/?category=&min_price=&max_price=&featured=true",
      me = "https://vuengo.herokuapp.com/data/Categories/",
      pe = "https://vuengo.herokuapp.com/data/users/",
      fe = [],
      ve = [],
      he = [],
      ge = [];
    M.a
      .get(pe)
      .then(function (t) {
        console.log(t.data);
        var e,
          s = Object(tt["a"])(t.data);
        try {
          for (s.s(); !(e = s.n()).done; ) {
            var a = e.value;
            ge.push(a);
          }
        } catch (i) {
          s.e(i);
        } finally {
          s.f();
        }
      })
      .catch(function (t) {
        console.log(t);
      }),
      M.a
        .get(ue)
        .then(function (t) {
          var e,
            s = Object(tt["a"])(t.data);
          try {
            for (s.s(); !(e = s.n()).done; ) {
              var a = e.value;
              a.price && fe.push(a);
            }
          } catch (i) {
            s.e(i);
          } finally {
            s.f();
          }
          console.log(Ce.state.hidden);
        })
        .catch(function (t) {
          console.log(t);
        }),
      M.a
        .get(de)
        .then(function (t) {
          var e,
            s = Object(tt["a"])(t.data);
          try {
            for (s.s(); !(e = s.n()).done; ) {
              var a = e.value;
              a.price && ve.push(a), (Ce.state.hidden = !1);
            }
          } catch (i) {
            s.e(i);
          } finally {
            s.f();
          }
        })
        .catch(function (t) {
          console.log(t);
        }),
      M.a
        .get(me)
        .then(function (t) {
          var e,
            s = Object(tt["a"])(t.data);
          try {
            for (s.s(); !(e = s.n()).done; ) {
              var a = e.value;
              he.push(a);
            }
          } catch (i) {
            s.e(i);
          } finally {
            s.f();
          }
          Ce.state.hidden = !1;
        })
        .catch(function (t) {
          console.log(t);
        });
    var be = "http://vuengo.herokuapp.com/data/cart/";
    a["default"].use(l["a"]);
    var Ce = new l["a"].Store({
        state: {
          users: ge,
          items: fe,
          featuredProducts: ve,
          categories: he,
          cart: [],
          results: [],
          searchFor: "",
          isAuth: null,
          CurrentUser: "",
          UserId: "",
          first_name: "",
          last_name: "",
          email: "",
          hidden: !0,
        },
        getters: {
          get_cart: function (t) {
            return t.cart;
          },
          getCartLength: function (t) {
            return t.cart.length;
          },
        },
        mutations: {
          Auth: function (t) {
            fetch("https://vuengo.herokuapp.com/auth_config/").then(function (
              e
            ) {
              return e.json().then(function (e) {
                localStorage.setItem(t.isAuth, e), (t.isAuth = e);
              });
            });
          },
          search: function (t) {
            M.a
              .get("https://vuengo.herokuapp.com/search/?search=" + t.searchFor)
              .then(function (e) {
                if (t.searchFor.length > 1) {
                  t.results = [];
                  var s,
                    a = Object(tt["a"])(e.data);
                  try {
                    for (a.s(); !(s = a.n()).done; ) {
                      var i = s.value;
                      t.results.push(i);
                    }
                  } catch (o) {
                    a.e(o);
                  } finally {
                    a.f();
                  }
                  var r = "/search/" + t.searchFor;
                  le.currentRoute.path !== r && le.push(r);
                } else le.push("/");
              })
              .catch(function (t) {
                console.log(t);
              });
          },
          GetCart: function (t) {
            return (
              M.a
                .get(be)
                .then(function (e) {
                  var s,
                    a = Object(tt["a"])(e.data);
                  try {
                    var i = function () {
                      var e = s.value,
                        a = t.cart.find(function (t) {
                          return t.price === e.price;
                        });
                      if (a) return "continue";
                      t.cart.push(e);
                    };
                    for (a.s(); !(s = a.n()).done; ) i();
                  } catch (r) {
                    a.e(r);
                  } finally {
                    a.f();
                  }
                })
                .catch(function (t) {
                  console.log(t);
                }),
              t.cart
            );
          },
          user: function (t) {
            M.a
              .get("https://vuengo.herokuapp.com/auth/user/")
              .then(function (e) {
                (t.UserId = e.data.pk),
                  (t.CurrentUser = e.data.username),
                  (t.first_name = e.data.first_name),
                  (t.last_name = e.data.last_name),
                  (t.email = e.data.email);
              })
              .catch(function (t) {
                console.log(t);
              });
          },
          logout: function (t) {
            M.a
              .get("https://vuengo.herokuapp.com/api/logout/")
              .then(function () {
                (t.cart = []),
                  fetch("/auth_config/").then(function (t) {
                    return t.json().then(function (t) {
                      localStorage.setItem("isAuth", t);
                    });
                  }),
                  (t.isAuth = !1),
                  le.push({ name: "login" });
              })
              .catch(function (t) {
                console.log(t);
              });
          },
          updateFirstName: function (t, e) {
            t.first_name = e;
          },
          updateLastName: function (t, e) {
            t.last_name = e;
          },
          updateUserName: function (t, e) {
            t.username = e;
          },
          updateEmail: function (t, e) {
            t.email = e;
          },
          getSearchFor: function (t, e) {
            t.searchFor = e;
          },
        },
        actions: {
          getUser: function (t) {
            return t.commit("user");
          },
          getLogout: function (t) {
            return t.commit("logout");
          },
          getCart: function (t) {
            return t.commit("GetCart");
          },
          getResults: function (t) {
            return t.commit("search");
          },
          getAuth: function (t) {
            return t.commit("Auth");
          },
        },
      }),
      _e = s("5f5b"),
      we = s("b1e0"),
      ye = s("2b27"),
      xe = s.n(ye),
      ke = s("5886"),
      Pe = s("6afc"),
      Ee = s("782c"),
      Se = s("967d"),
      je =
        (s("ba3a"),
        s("4413"),
        s("f9e3"),
        s("2dd8"),
        { confirmButtonColor: "#41b882", cancelButtonColor: "#ff7674" });
    a["default"].use(l["a"]),
      a["default"].use(_e["a"]),
      a["default"].use(we["a"]),
      a["default"].use(xe.a),
      a["default"].use(Pe["a"]),
      a["default"].use(Ee["CarouselCard"]),
      a["default"].use(Ee["CarouselCardItem"]),
      a["default"].use(ke["a"], je),
      (a["default"].config.productionTip = !1),
      a["default"].use(Se["default"]),
      new a["default"]({
        router: le,
        store: Ce,
        created: function () {
          fetch("https://vuengo.herokuapp.com/auth_config/").then(function (t) {
            return t.json().then(function (t) {
              localStorage.setItem("isAuth", t);
            });
          });
        },
        render: function (t) {
          return t(k);
        },
      }).$mount("#app");
  },
  "57b6": function (t, e, s) {},
  "5c0b": function (t, e, s) {
    "use strict";
    s("9c0c");
  },
  6582: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUlroj///8AqH4erYYAqYEUq4PJ6N4yso7p9vLc8Oqc1cP1+/lKuZkrsIvs9/T6/f2z3tBpwqdCt5XA5NiY1MFjwKRbvqB+yrLb8OmO0Luj2MdQupvO6uG039FyxauEy7RADoDPAAAKiUlEQVR4nOWdiXLjKBCGJQ4fY8uOJceOfMjv/5aDddgg6+BoUCv5a2traivR8C00TUPTRLF3bVa37HJ8FKdtmi6TKFmm6fZUPI6X7Lba+P/rI58f390uj2vCCWOcc0qjSPwTlf+mVPwXxghPro/LbeezEb4Id1l+FWgCLBqWQBWg1zxbeWqJD8LdvViKbhtjUzkZS853H50JTbhZ5ClhJnBvic5Mz4s9cItACTfZwbDvOih5kYFCAhI+8ZzoalHGDxlcs6AIf84cBK9ipIzma6CWwRB+pcRtcH5CcrL9AmkbAOHuCNh9MiTjR4DJ1ZlwXTjOLUOMnBXOg9WRcH0g3BNeJU4OjoxOhOuDl+GpijI3RgfC1YH45ysZycFhSWdNuM8D8ZWMLLdeBdgSflG/9tcWp7a+w47wJw1ggKooS3/CET4CDlCJkTwCES6isAP0LR4tQhCeyUR8T5Gzd8KfZKoOrMQTU2s0JDxO2YGVyNEj4WbLpuYTYlujHToTwhudYgr9FKU3P4T/ph+hjcg/D4T7E4YR2oh9a6/idAk36bRzaFs81TVGTcK1tyjXVpRqxlR6hAtMI7QR01vgaBF+TbIOHRMlWuGGDuEFzySqilxgCBF5ibZ0vMY4IYKFWr80lnCjhKgBdRDHCNHaYKNRWxwh/MIOKBBHZtRhwjt+QIF4tye8zQFQIA6GGkOE6+AbanaibGjDeIBwE80D8JncMbAMHyBM5wIoEFMbwm9c4dKw+Lc54T+M4US/WO/6rY9wMY9p9C3SF0v1EO7mNEQr8Z4T8R7CGc0yjfpmm27CfF5GWInl+oQzWcu01b226SLcT91Ua3VtMXYRFvObZirxQo8wm+cYfYp05MN1EM5vGn2L6hA+5jpGn+KfB+EfhD/zHaNPkY8D1A/C5ZwHqRimyzHCrzn6elmsvW3TItzPuwefovtBwnzO00wlng8RruY9zVRq7dqohIf5D1IxTA/9hOvf0IXCY6x7Cb9/QxeKTvzuI0TdhZQR7bs4ituXCTF3ITuJofejuf+ndKJEiLkLWb3ePOshypYoERZ4u5C/pke9n5en0zfhDu96jV9frdSMfCSf+CY8ol3O0OV7IXbRa6W0sHkT4j1ootJOqG70yj4J0QYVlMkOXPe33iHGixDtHrCyR6g5l8r7ww0h2tBeOaY3OC56OYyGEOvujJITZJJW8NqxaQjR5R5WYnJuvtF5GOUqYYZznlEOPtdm+YMsUwhxBoZ8KwHuDJvYrGsqwg3KLpQ9fbxPTDuBbSRCnINU9vTx1niU1cM0QjtIqRKqW+RN1MO0JNxjdBXKwfzZZpDx/YsQYxq3kq1ml8RbJYKXhAh3SZmcN2qZIVkFGCVhCtw8dyme3vrQPW0I8e0Dq57eOq4ju5oQXeBEFU9vb0JlCPUkxLZBo3p6h+M+WtSECWDrIMTlgwdzTy9pWRGucA1SNaZ3y5B8bkhF6JZs7p7+refCLcLmDZWY/uj4P//pEQXhFdNEo8T0znch6LUkxDRI7WP6nu89CTH5e5eYvlNkJQgRLbuVFNEVhPGIxXcU/0Mz0dBEulRgHtN3iV8EIZ4VjWNM3/nJQhBi2eymyskt0F0IMe4jNGs2SE//VhJHWLbZVE8PNr+zTYTkbJsAxPSd311HOJwFtKd/f3gR3TE4C36SPT3kWS2/R5rHxl4FFdN3iF8iBJEFTaSYfgObwsvz6DG9O6RyTA/snukjmnxJAxnTd3y9iE5TE/rx9I3oKdpa/JZBEt2oQGP6Dm0j8/1udhALyBtQUSXYmL5DaWRs2fzcrKwAutGbp29E02hp+jvJq0Hu2Q1KTP/jJStrGZmGFlLG2GrpOPHBx/SfMg+duFxL5OBkjHQJHtN3ybgPlbtT/1yM0UNM/6nEwQ4rY7Q2HsrkmP7ka/G4jIyXgVwtIWptjH49fSMxl9r4QwUx/rZqnaeY/kOpzZqGL9V7Nzae0bunb7S1WpfSVrk7c2P07ukbiXWpVWxBW4XSTI0xgKevJWILy/iwZYx7I89IXTLyzCTiQ9sYny/VShsGST0+Y/q2RIxvvU9DuWqMN+1lahBPX4tfHPba2sa40yvi6jemb4vfnfZL256x0PlWGE//auLCbc+bp6oxXsY9I0BGnonI2vHcou0ZR40xmKevxTauZ0+GxhjM0zdKAM4PScsYhzwjl382REm/8vzQecO0bYz9xuWUe2+l8gzY/Ry/7Rn7NnDUmD5IAQ7+DygXQ88YlXpj2yDnJWUuBkg+TdszHj4/GtbT1yrzaWByotox4+cGjnrLLtC5bJkTBZXXMRIz+t69727UFTI3kbbKMu+UmNH6lp2T6txEsPzSD2N8fzi4p6//2gw4R7jXGMEz8jRV5wgD5gz1GKN0nz6Qp6/13NsFztXvNEaw3Hvj1jS5+qD3LTqMkYb39HVb7rGPOzPtDZyj6y07e5FVTRgbn10Mqm2MMnAoT1+prN1WEmrf49dTO2Z8K+xTGdUJi5/7h21jrBX4HQLp/iH8HdK2ZywVuLQtle6QesiEbhtjHL5MP63qtXq7y/1hjCE9fSnlLreXq86qMYb09JWqQdrUVPCS3aYY4zV0DmQ9SP3WxZA2cA7BkzxbdTE81TZ5GeMjeK51u7aJt/o0ZSW5tVvejZU+6tN4S9kHTWQ00EeNId/neKH1PmbGX+vLTh21vrDWUbJUR702xDX3LNRZcw9x3URzddZNRHQR0VlUeiRhJvVLDdVTvxR1DVoj9dWg/T2d2FtH+Ld0Yn8t6N/SiQP1vFFWNTPWUE12bIVc7DRYVx9ZnRMrDb+N8Afet5h/iDH2RskfeGcGb0FhPameopMQbUVhLem89/QH3uya9btrHU91/sm38/7A+4e//w3LP/AOKeJ3BPpl9pbsHN8DpmbvAc/wTedOIxwg/P3vcv+Bt9VnNdv0zTIjhJsZEW76MQYIgyfA2Eq9BWBCOJcJtXcaHScMnYhmJ9LetzAhjC/4EUcAxwgD50taiFxGCMYIfRZ0gFArr9yGEDfiOKAGIWZbHB2ieoR4Z9SxSUabML6Hu+ViIKpcC3cjjG8IAw3KBh29IWG8pth6kdKhpZo5YbzRKwkRTDwdWGxbEcYxUBlBGLFT18ahIyEmx9h7ZcWNEKKMIIjat+PhCONdimGksrRnVw2AMI7z6Ucq6d74hSKMb8m0cypP9LygPWEcn6fsRnIeb6AzYbyIpupGHplMMfaET2ucYlKlphboQBj/TDCpsvRnvGFghCKiomGHKqc6kRIkYbzPA+6mUpZrr9LACON4dQhkjpQcOm6kBiAUMdUpACMlJ804yQOhmHJ8Mwo+uwkGilD0Y8H8zTmcFU79B0Io7DFnXiYdyljuYH+AhEJfWwL9agMnW1v/oAqGUBjkGbIjKeO58/CsBUUolH3DQIrRecjgmgVIGMeb+4E7zjvi94vM2rt3CZRQaL/IU9tbsZSR9LwAxYvhCZ9afRVLxow2dShnLCnuRtsTmvJB+NQuy6+MCMwxTsq5+LlrngE4hk75Iiy1WlzOaSIAGOcla4X7/IMAE91GWJKeLwtfcKW8ElbarG7Z5fgoTts0XSZRskzT7al4HC/ZbaW7ce2g/wK3dd18cvLkAAAAAElFTkSuQmCC";
  },
  "6e2c": function (t, e, s) {
    "use strict";
    s("57b6");
  },
  "7ca9": function (t, e, s) {},
  "8ddd": function (t, e, s) {
    "use strict";
    s("3974");
  },
  9755: function (t, e, s) {},
  "9c0c": function (t, e, s) {},
  c883: function (t, e, s) {
    "use strict";
    s("39ef");
  },
  e1e5: function (t, e, s) {
    t.exports = s.p + "img/logo_go.png";
  },
  eb1e: function (t, e, s) {
    "use strict";
    s("9755");
  },
});
//# sourceMappingURL=app.js.map
