self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/features/products/product-three.jsx":
/*!********************************************************!*\
  !*** ./components/features/products/product-three.jsx ***!
  \********************************************************/
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


var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-three.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function ProductThree(props) {
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
    className: "product product-2",
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
    className: "product-label label-circle label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-circle label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-circle label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-circle label-out",
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
  }) : ""), product.stock > 0 ? __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
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
      lineNumber: 119,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 134
    }
  }, "add to wishlist"))) : "", product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action product-action-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 41
    }
  }, "add to cart")), __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, "quick view"))) : __jsx("div", {
    className: "product-action product-action-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, "quick view")))), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, product.category.map(function (item, index) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: item.slug + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
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
        lineNumber: 161,
        columnNumber: 33
      }
    }, item.name), index < product.category.length - 1 ? ', ' : "");
  })), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 194,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
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
        lineNumber: 206,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 113
      }
    }, "Color Name"));
  }))) : ""));
}

_s(ProductThree, "6OJ+84+53auJUpe/NWvMVZjEKIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ProductThree;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_8__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_9__.actions))(ProductThree));

var _c;

$RefreshReg$(_c, "ProductThree");

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
/* harmony import */ var _components_features_products_product_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/products/product-three */ "./components/features/products/product-three.jsx");
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
    }, __jsx(_components_features_products_product_three__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, __jsx(_components_features_products_product_three__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, __jsx(_components_features_products_product_three__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, __jsx(_components_features_products_product_three__WEBPACK_IMPORTED_MODULE_2__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LXRocmVlLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3RvcC1jb2xsZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0VGhyZWUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3QiLCJ3aXNobGlzdCIsInVzZVN0YXRlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJ1c2VFZmZlY3QiLCJtaW4iLCJtYXgiLCJ2YXJpYW50cyIsIm1hcCIsIml0ZW0iLCJwcmljZSIsImxlbmd0aCIsInNhbGVfcHJpY2UiLCJvbkNhcnRDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvQ2FydCIsIm9uV2lzaGxpc3RDbGljayIsImlzSW5XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJwdXNoIiwib25Db21wYXJlQ2xpY2siLCJpc0luQ29tcGFyZSIsImNvbXBhcmVsaXN0IiwiYWRkVG9Db21wYXJlIiwib25RdWlja1ZpZXciLCJzaG93UXVpY2tWaWV3Iiwic2x1ZyIsInRvcCIsInN0b2NrIiwicHJvY2VzcyIsInNtX3BpY3R1cmVzIiwidXJsIiwiY2F0ZWdvcnkiLCJpbmRleCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwidG9GaXhlZCIsIndpZHRoIiwicmF0aW5ncyIsInJldmlldyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdCIsIndpc2hsaXN0QWN0aW9uIiwiY2FydEFjdGlvbiIsImNvbXBhcmVBY3Rpb24iLCJkZW1vQWN0aW9uIiwiVG9wQ29sbGVjdGlvbiIsInByb2R1Y3RzIiwibG9hZGluZyIsImNhdEZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFVTZDLE9BQU8sSUFBSUQsUUFBUSxDQUFDMUMsTUFBVCxJQUFtQixDQUFoQyxHQUNJLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMkJILEdBQTNCLENBQWdDLFVBQUVDLElBQUYsRUFBUXlCLEtBQVI7QUFBQSxXQUM1QjtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUF5QyxTQUFHLEVBQUdBLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUQ0QjtBQUFBLEdBQWhDLENBREosR0FPSXFCLGlEQUFTLENBQUVGLFFBQUYsRUFBWSxDQUFFLFVBQUYsQ0FBWixDQUFULENBQXNDN0MsR0FBdEMsQ0FBMkMsVUFBRUMsSUFBRixFQUFReUIsS0FBUjtBQUFBLFdBQ3ZDO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQXlDLFNBQUcsRUFBR0EsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0ZBQUQ7QUFDSSxhQUFPLEVBQUd6QixJQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUR1QztBQUFBLEdBQTNDLENBVFosQ0FESixDQURKLENBbEZKLENBREosQ0FESjtBQTRHSDs7S0EvR1EyQyxhO0FBaUhULCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQwNjU5NTJjMDAyNDVkZDgyOTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjb21wYXJlQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jb21wYXJlJztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9kZW1vJztcclxuXHJcbmltcG9ydCB7IGlzSW5XaXNobGlzdCwgaXNJbkNvbXBhcmUgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RUaHJlZSAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIHdpc2hsaXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgbWF4UHJpY2UsIHNldE1heFByaWNlIF0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgWyBtaW5QcmljZSwgc2V0TWluUHJpY2UgXSA9IHVzZVN0YXRlKCA5OTk5OSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBtaW4gPSBtaW5QcmljZTtcclxuICAgICAgICBsZXQgbWF4ID0gbWF4UHJpY2U7XHJcbiAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAoIG1heCA8IGl0ZW0ucHJpY2UgKSBtYXggPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgbWluID0gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBtYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWluUHJpY2UoIG1pbiApO1xyXG4gICAgICAgIHNldE1heFByaWNlKCBtYXggKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLmFkZFRvQ2FydCggcHJvZHVjdCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uV2lzaGxpc3RDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9XaXNobGlzdCggcHJvZHVjdCApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCAnL3BhZ2VzL3dpc2hsaXN0JyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNvbXBhcmVDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5Db21wYXJlKCBwcm9wcy5jb21wYXJlbGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb0NvbXBhcmUoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25RdWlja1ZpZXcgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5zaG93UXVpY2tWaWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdCBwcm9kdWN0LTJcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1zYWxlXCI+U2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1jaXJjbGUgbGFiZWwtdG9wXCI+VG9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1jaXJjbGUgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCB3aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlXCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPmFkZCB0byB3aXNobGlzdDwvc3Bhbj48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jayAhPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24gcHJvZHVjdC1hY3Rpb24tZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9IGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0IGJ0bi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlbGVjdCBvcHRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiBvbkNsaWNrPXsgb25DYXJ0Q2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1xdWlja3ZpZXdcIiB0aXRsZT1cIlF1aWNrIFZpZXdcIiBvbkNsaWNrPXsgb25RdWlja1ZpZXcgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5xdWljayB2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24gcHJvZHVjdC1hY3Rpb24tZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+cXVpY2sgdmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGl0ZW0uc2x1ZyArICctJyArIGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIj57IHByb2R1Y3QucmF0aW5ncy50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzLXRleHRcIj4oIHsgcHJvZHVjdC5yZXZpZXcgfSBSZXZpZXdzICk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdiBwcm9kdWN0LW5hdi1kb3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9IGtleT17IGluZGV4IH0+PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbG9yIE5hbWU8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5kYXRhLFxyXG4gICAgICAgIGNvbXBhcmVsaXN0OiBzdGF0ZS5jb21wYXJlbGlzdC5kYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyAuLi53aXNobGlzdEFjdGlvbiwgLi4uY2FydEFjdGlvbiwgLi4uY29tcGFyZUFjdGlvbiwgLi4uZGVtb0FjdGlvbiB9ICkoIFByb2R1Y3RUaHJlZSApO1xyXG4iLCJpbXBvcnQgeyBUYWIsIFRhYnMsIFRhYlBhbmVsLCBUYWJMaXN0IH0gZnJvbSAncmVhY3QtdGFicyc7XHJcblxyXG5pbXBvcnQgUHJvZHVjdFR3ZWx2ZSBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10aHJlZSc7XHJcblxyXG5pbXBvcnQgeyBjYXRGaWx0ZXIgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFRvcENvbGxlY3Rpb24gKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgPSBbXSwgbG9hZGluZyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFicyBkZWZhdWx0SW5kZXg9eyAwIH0gc2VsZWN0ZWRUYWJDbGFzc05hbWU9XCJzaG93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmcgaGVhZGluZy1jZW50ZXIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRvcCBTZWxsaW5nIFByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIG5hdi1ib3JkZXItYW5pbSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GdXJuaXR1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkRlY29yYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkxpZ2h0aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwcm9kdWN0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDggXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRGaWx0ZXIoIHByb2R1Y3RzLCBbICdmdXJuaXR1cmUnIF0gKS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd2VsdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDAgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlciggcHJvZHVjdHMsIFsgJ2RlY29yYXRpb24nIF0gKS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd2VsdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDAgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlciggcHJvZHVjdHMsIFsgJ2xpZ2h0aW5nJyBdICkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDb2xsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9