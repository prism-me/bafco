self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/features/products/product-one.jsx":
/*!******************************************************!*\
  !*** ./components/features/products/product-one.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _store_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/compare */ "./store/compare.js");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-one.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function ProductOne(props) {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var product = props.product,
      wishlist = props.wishlist;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      maxPrice = _useState[0],
      setMaxPrice = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(99999),
      minPrice = _useState2[0],
      setMinPrice = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var min = minPrice;
    var max = maxPrice;
    product.variants.map(function (item) {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInCompare)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product text-center no-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, product["new"] ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Out of Stock") : "", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), product.sm_pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }) : ""), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }, "add to cart")), __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, "quick view"))) : __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, "quick view")))), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, product.category.map(function (item, index) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: item.slug + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 29
      }
    }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
      href: {
        pathname: '/shop/sidebar/list',
        query: {
          category: item.slug
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 33
      }
    }, item.name), index < product.category.length - 1 ? ', ' : "");
  })), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, product.variants.map(function (item, index) {
    return __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
      href: "#",
      style: {
        backgroundColor: item.color
      },
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 113
      }
    }, "Color Name"));
  }))) : ""));
}

_s(ProductOne, "6OJ+84+53auJUpe/NWvMVZjEKIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ProductOne;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_8__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_9__.actions))(ProductOne));

var _c;

$RefreshReg$(_c, "ProductOne");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/partials/home/top-collection.jsx":
/*!*****************************************************!*\
  !*** ./components/partials/home/top-collection.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _components_features_products_product_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/products/product-one */ "./components/features/products/product-one.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\home\\top-collection.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function TopCollection(props) {
  var _this = this;

  var _props$products = props.products,
      products = _props$products === void 0 ? [] : _props$products,
      loading = props.loading;
  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading heading-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Top Selling Products"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills nav-border-anim justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, "All")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, "Furniture")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Decoration")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, "Lighting")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 45
      }
    }));
  }) : products.map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_one__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 45
      }
    }));
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 45
      }
    }));
  }) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['furniture']).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_one__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 45
      }
    }));
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 45
      }
    }));
  }) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['decoration']).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_one__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 45
      }
    }));
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 45
      }
    }));
  }) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['lighting']).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_one__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 45
      }
    }));
  }))))));
}

_c = TopCollection;
/* harmony default export */ __webpack_exports__["default"] = (TopCollection);

var _c;

$RefreshReg$(_c, "TopCollection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LW9uZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS90b3AtY29sbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiUHJvZHVjdE9uZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdCIsIndpc2hsaXN0IiwidXNlU3RhdGUiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsInVzZUVmZmVjdCIsIm1pbiIsIm1heCIsInZhcmlhbnRzIiwibWFwIiwiaXRlbSIsInByaWNlIiwibGVuZ3RoIiwic2FsZV9wcmljZSIsIm9uQ2FydENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9DYXJ0Iiwib25XaXNobGlzdENsaWNrIiwiaXNJbldpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsInB1c2giLCJvbkNvbXBhcmVDbGljayIsImlzSW5Db21wYXJlIiwiY29tcGFyZWxpc3QiLCJhZGRUb0NvbXBhcmUiLCJvblF1aWNrVmlldyIsInNob3dRdWlja1ZpZXciLCJzbHVnIiwidG9wIiwic3RvY2siLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJjYXRlZ29yeSIsImluZGV4IiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJ0b0ZpeGVkIiwid2lkdGgiLCJyYXRpbmdzIiwicmV2aWV3IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJUb3BDb2xsZWN0aW9uIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwiY2F0RmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixLQUFSO0FBQUEsV0FDdkM7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBeUMsU0FBRyxFQUFHQSxLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw4RUFBRDtBQUNJLGFBQU8sRUFBR3pCLElBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRHVDO0FBQUEsR0FBM0MsQ0FUWixDQURKLENBREosQ0FsRkosQ0FESixDQURKO0FBNEdIOztLQS9HUTJDLGE7QUFpSFQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTE2YTBhODgxNGY5MzEzOTQ3YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyB3aXNobGlzdEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNhcnRBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNvbXBhcmVBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NvbXBhcmUnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5cclxuaW1wb3J0IHsgaXNJbldpc2hsaXN0LCBpc0luQ29tcGFyZSB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdE9uZSAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIHdpc2hsaXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgbWF4UHJpY2UsIHNldE1heFByaWNlIF0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgWyBtaW5QcmljZSwgc2V0TWluUHJpY2UgXSA9IHVzZVN0YXRlKCA5OTk5OSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBtaW4gPSBtaW5QcmljZTtcclxuICAgICAgICBsZXQgbWF4ID0gbWF4UHJpY2U7XHJcbiAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAoIG1heCA8IGl0ZW0ucHJpY2UgKSBtYXggPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgbWluID0gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBtYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWluUHJpY2UoIG1pbiApO1xyXG4gICAgICAgIHNldE1heFByaWNlKCBtYXggKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLmFkZFRvQ2FydCggcHJvZHVjdCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uV2lzaGxpc3RDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9XaXNobGlzdCggcHJvZHVjdCApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCAnL3BhZ2VzL3dpc2hsaXN0JyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNvbXBhcmVDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5Db21wYXJlKCBwcm9wcy5jb21wYXJlbGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb0NvbXBhcmUoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25RdWlja1ZpZXcgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5zaG93UXVpY2tWaWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdCB0ZXh0LWNlbnRlciBuby1zcGFuXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmV3ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9IGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0IGJ0bi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlbGVjdCBvcHRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiBvbkNsaWNrPXsgb25DYXJ0Q2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1xdWlja3ZpZXdcIiB0aXRsZT1cIlF1aWNrIFZpZXdcIiBvbkNsaWNrPXsgb25RdWlja1ZpZXcgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5xdWljayB2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eyBpdGVtLnNsdWcgKyAnLScgKyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogJy9zaG9wL3NpZGViYXIvbGlzdCcsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBpdGVtLnNsdWcgfSB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5kZXggPCBwcm9kdWN0LmNhdGVnb3J5Lmxlbmd0aCAtIDEgPyAnLCAnIDogXCJcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PnsgcHJvZHVjdC5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+eyBwcm9kdWN0LnJhdGluZ3MudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5ncy10ZXh0XCI+KCB7IHByb2R1Y3QucmV2aWV3IH0gUmV2aWV3cyApPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBzdHlsZT17IHsgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yIH0gfSBrZXk9eyBpbmRleCB9PjxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Db2xvciBOYW1lPC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgICAgICBjb21wYXJlbGlzdDogc3RhdGUuY29tcGFyZWxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24sIC4uLmNvbXBhcmVBY3Rpb24sIC4uLmRlbW9BY3Rpb24gfSApKCBQcm9kdWN0T25lICk7XHJcbiIsImltcG9ydCB7IFRhYiwgVGFicywgVGFiUGFuZWwsIFRhYkxpc3QgfSBmcm9tICdyZWFjdC10YWJzJztcclxuXHJcbmltcG9ydCBQcm9kdWN0VHdlbHZlIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LW9uZSc7XHJcblxyXG5pbXBvcnQgeyBjYXRGaWx0ZXIgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFRvcENvbGxlY3Rpb24gKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgPSBbXSwgbG9hZGluZyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFicyBkZWZhdWx0SW5kZXg9eyAwIH0gc2VsZWN0ZWRUYWJDbGFzc05hbWU9XCJzaG93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmcgaGVhZGluZy1jZW50ZXIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRvcCBTZWxsaW5nIFByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIG5hdi1ib3JkZXItYW5pbSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GdXJuaXR1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkRlY29yYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkxpZ2h0aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwcm9kdWN0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDggXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRGaWx0ZXIoIHByb2R1Y3RzLCBbICdmdXJuaXR1cmUnIF0gKS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd2VsdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDAgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlciggcHJvZHVjdHMsIFsgJ2RlY29yYXRpb24nIF0gKS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd2VsdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDAgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlciggcHJvZHVjdHMsIFsgJ2xpZ2h0aW5nJyBdICkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDb2xsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9