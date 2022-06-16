self["webpackHotUpdate_N_E"]("pages/collections/[type]",{

/***/ "./components/features/products/product-eleven.jsx":
/*!*********************************************************!*\
  !*** ./components/features/products/product-eleven.jsx ***!
  \*********************************************************/
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


var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-eleven.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function ProductEleven(props) {
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
    className: "product product-7 text-center w-100",
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
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 127
    }
  }, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 109
    }
  }, "compare"))) : __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
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
      lineNumber: 133,
      columnNumber: 134
    }
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 127
    }
  }, "quick view"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 41
    }
  }, "add to cart"))) : ""), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, product.category.map(function (item, index) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: item.slug + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
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
        lineNumber: 164,
        columnNumber: 33
      }
    }, item.name), index < product.category.length - 1 ? ', ' : "");
  })), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
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
        lineNumber: 209,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 113
      }
    }, "Color Name"));
  }))) : ""));
}

_s(ProductEleven, "6OJ+84+53auJUpe/NWvMVZjEKIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ProductEleven;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_8__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_9__.actions))(ProductEleven));

var _c;

$RefreshReg$(_c, "ProductEleven");

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

/***/ "./components/features/products/product-nine.jsx":
/*!*******************************************************!*\
  !*** ./components/features/products/product-nine.jsx ***!
  \*******************************************************/
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


var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-nine.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function ProductSix(props) {
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
    className: "product product-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-3 col-md-3 col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, product["new"] ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "Out of Stock") : "", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
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
      lineNumber: 96,
      columnNumber: 29
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
      lineNumber: 105,
      columnNumber: 37
    }
  }) : ""))), __jsx("div", {
    className: "col-md-6 order-last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "product-body product-action-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, product.category.map(function (item, index) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: item.slug + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 37
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
        lineNumber: 123,
        columnNumber: 41
      }
    }, item.name), index < product.category.length - 1 ? ', ' : "");
  })), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, product.name)), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, product.short_desc)), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
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
        lineNumber: 146,
        columnNumber: 49
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 121
      }
    }, "Color Name"));
  }))) : "")), __jsx("div", {
    className: "col-md-3 col-6 order-md-last order-lg-last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "product-list-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 45
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }, "( ", product.review, " Reviews )")), __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, "quick view")), (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 121
    }
  }, "wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 114
    }
  }, "wishlist"))), product.stock > 0 ? product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 41
    }
  }, "add to cart")) : ""))));
}

_s(ProductSix, "6OJ+84+53auJUpe/NWvMVZjEKIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ProductSix;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_8__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_9__.actions))(ProductSix));

var _c;

$RefreshReg$(_c, "ProductSix");

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

/***/ "./components/partials/shop/list/shop-list-one.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/shop/list/shop-list-one.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_nine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/products/product-nine */ "./components/features/products/product-nine.jsx");
/* harmony import */ var _components_features_products_product_eleven__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/products/product-eleven */ "./components/features/products/product-eleven.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\shop\\list\\shop-list-one.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function ShopListOne(props) {
  _s();

  var _this = this;

  var loading = props.loading,
      _props$products = props.products,
      products = _props$products === void 0 ? [] : _props$products,
      perPage = props.perPage;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      fakeArray = _useState[0],
      setFakeArray = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('col-6'),
      gridClass = _useState2[0],
      setGridClass = _useState2[1];

  var type = router.query.type;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var temp = [];

    for (var i = 0; i < perPage; i++) {
      temp.push(i);
    }

    setFakeArray(temp);
  }, [perPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // if (type === 'list' || type === '2cols') setGridClass('col-6');
    // if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4');
    // if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
    if (type === 'list' || type === '2cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
    if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
    if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
  }, [type]);
  return __jsx("div", {
    className: "products mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "No products matching your selection.") : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, type == 'list' ? loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: "skel-pro skel-pro-list",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 41
      }
    });
  }) : products.map(function (product, index) {
    return __jsx(_components_features_products_product_nine__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: product,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    });
  }) : __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: gridClass,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 53
      }
    }));
  }) : products.map(function (product, index) {
    return __jsx("div", {
      className: gridClass,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 49
      }
    }, __jsx(_components_features_products_product_eleven__WEBPACK_IMPORTED_MODULE_3__.default, {
      product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 53
      }
    }));
  }))));
}

_s(ShopListOne, "0787plkNrH9U3Cx4B9nLtGUPX4s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = ShopListOne;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopListOne));

var _c, _c2;

$RefreshReg$(_c, "ShopListOne");
$RefreshReg$(_c2, "%default%");

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

/***/ "./pages/collections/[type].jsx":
/*!**************************************!*\
  !*** ./pages/collections/[type].jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sticky-box */ "./node_modules/react-sticky-box/dist/es/index.js");
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/page-header */ "./components/features/page-header.jsx");
/* harmony import */ var _components_partials_shop_list_shop_list_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/shop/list/shop-list-one */ "./components/partials/shop/list/shop-list-one.jsx");
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/pagination */ "./components/features/pagination.jsx");
/* harmony import */ var _components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/shop/sidebar/shop-sidebar-one */ "./components/partials/shop/sidebar/shop-sidebar-one.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\collections\\[type].jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);













function ShopGrid() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var type = router.query.type;
  var query = router.query;

  var _useLazyQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__.GET_PRODUCTS),
      _useLazyQuery2 = (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useLazyQuery, 2),
      getProducts = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      firstLoading = _useState[0],
      setFirstLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5),
      perPage = _useState2[0],
      setPerPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Chairs'),
      pageTitle = _useState3[0],
      setPageTitle = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  var products = data && data.products.data;
  var totalCount = data && data.products.totalCount;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return function () {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);else setToggle(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getProducts({
      variables: {
        searchTerm: query.searchTerm,
        color: query.color ? query.color.split(',') : [],
        size: query.size ? query.size.split(',') : [],
        brand: query.brand ? query.brand.split(',') : [],
        minPrice: parseInt(query.minPrice),
        maxPrice: parseInt(query.maxPrice),
        category: query.category,
        sortBy: query.sortBy ? query.sortBy : 'default',
        page: query.page ? parseInt(query.page) : 1,
        perPage: perPage,
        list: true
      }
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_11__.scrollToPageContent)();
  }, [query, perPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (products) setFirstLoading(true);
  }, [products]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (type == 'list') {
      setPageTitle('List');
      setPerPage(5);
    } else if (type == '2cols') {
      setPageTitle('Grid 2 Columns');
      setPerPage(6);
    } else if (type == '3cols') {
      setPageTitle('Grid 3 Columns');
      setPerPage(9);
    } else if (type == '4cols') {
      setPageTitle('Grid 4 Columns');
      setPerPage(12);
    }
  }, [type]);

  function onSortByChange(e) {
    var queryObject = router.query;
    var url = router.pathname.replace('[type]', query.type) + '?';

    for (var key in queryObject) {
      if (key !== "type" && key !== "sortBy") {
        url += key + '=' + queryObject[key] + '&';
      }
    }

    router.push(url + 'sortBy=' + e.target.value);
  }

  function toggleSidebar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    } else {
      document.querySelector('body').classList.add('sidebar-filter-active');
    }
  }

  function hideSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }

  if (error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 16
      }
    });
  }

  return __jsx("main", {
    className: "main shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "All Seating",
    subTitle: "We make happy workplaces",
    backgroundImage: "images/banners/cat_banner.png",
    buttonText: "View Our Products",
    buttonUrl: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx("nav", {
    className: "breadcrumb-nav mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, pageTitle), query.search ? __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, "Search - ", query.searchTerm)) : ""))), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-9 skel-shop-products ".concat(!loading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "toolbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, !loading && products ? __jsx("div", {
    className: "toolbox-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 45
    }
  }, "Showing", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 49
    }
  }, " ", products.length, " of ", totalCount), " Products") : ""), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "toolbox-sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx("label", {
    htmlFor: "sortby",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "Sort by:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 41
    }
  }, __jsx("select", {
    name: "sortby",
    id: "sortby",
    className: "form-control",
    onChange: onSortByChange,
    value: query.sortBy ? query.sortBy : 'default',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 49
    }
  }, "Default"), __jsx("option", {
    value: "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 49
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 49
    }
  }, "Most Rated"), __jsx("option", {
    value: "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 49
    }
  }, "Date")))))), __jsx(_components_partials_shop_list_shop_list_one__WEBPACK_IMPORTED_MODULE_6__.default, {
    products: products,
    perPage: perPage,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }), totalCount > perPage ? __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_7__.default, {
    perPage: perPage,
    total: totalCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 37
    }
  }) : ""), __jsx("aside", {
    className: "col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ".concat(!loading || firstLoading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }), __jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "sticky-content",
    offsetTop: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 29
    }
  }, __jsx(_components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 33
    }
  })), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-cog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 41
    }
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 29
    }
  }))))));
}

_s(ShopGrid, "1yEwMJ4Iuxjy1lMo/4THmFF1lKk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery];
});

_c = ShopGrid;
/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__.default)({
  ssr: false
})(ShopGrid));

var _c;

$RefreshReg$(_c, "ShopGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LWVsZXZlbi5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1uaW5lLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LW9uZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdEVsZXZlbiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdCIsIndpc2hsaXN0IiwidXNlU3RhdGUiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsInVzZUVmZmVjdCIsIm1pbiIsIm1heCIsInZhcmlhbnRzIiwibWFwIiwiaXRlbSIsInByaWNlIiwibGVuZ3RoIiwic2FsZV9wcmljZSIsIm9uQ2FydENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9DYXJ0Iiwib25XaXNobGlzdENsaWNrIiwiaXNJbldpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsInB1c2giLCJvbkNvbXBhcmVDbGljayIsImlzSW5Db21wYXJlIiwiY29tcGFyZWxpc3QiLCJhZGRUb0NvbXBhcmUiLCJvblF1aWNrVmlldyIsInNob3dRdWlja1ZpZXciLCJzbHVnIiwidG9wIiwic3RvY2siLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJjYXRlZ29yeSIsImluZGV4IiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJ0b0ZpeGVkIiwid2lkdGgiLCJyYXRpbmdzIiwicmV2aWV3IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJQcm9kdWN0U2l4Iiwic2hvcnRfZGVzYyIsIlNob3BMaXN0T25lIiwibG9hZGluZyIsInByb2R1Y3RzIiwicGVyUGFnZSIsImZha2VBcnJheSIsInNldEZha2VBcnJheSIsImdyaWRDbGFzcyIsInNldEdyaWRDbGFzcyIsInR5cGUiLCJ0ZW1wIiwiaSIsIlJlYWN0IiwiU2hvcEdyaWQiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJnZXRQcm9kdWN0cyIsImVycm9yIiwiZmlyc3RMb2FkaW5nIiwic2V0Rmlyc3RMb2FkaW5nIiwic2V0UGVyUGFnZSIsInBhZ2VUaXRsZSIsInNldFBhZ2VUaXRsZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInRvdGFsQ291bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFdpZHRoIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsInNwbGl0Iiwic2l6ZSIsImJyYW5kIiwicGFyc2VJbnQiLCJzb3J0QnkiLCJwYWdlIiwibGlzdCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJvblNvcnRCeUNoYW5nZSIsInF1ZXJ5T2JqZWN0IiwicmVwbGFjZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2lkZWJhciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiaGlkZVNpZGViYXIiLCJzZWFyY2giLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxhQUFULENBQXlCQyxLQUF6QixFQUFpQztBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERSxHQUlBLEVBYmQsRUFlSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUF3QyxXQUFPLEVBQUVLLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQXpHSixDQURKLENBREosQ0ExQkosQ0FESjtBQTRKSDs7R0FyUVF6QyxRO1VBQ1V0RSxrRCxFQUdpQ3VFLDhEOzs7S0FKM0NELFE7QUF1UVQsK0RBQWUyQyx1REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FBa0Q1QyxRQUFsRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS5mMWE5ZDgyZjhlY2NiNDM1YTY3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY29tcGFyZUFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY29tcGFyZSc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgZGVtb0FjdGlvbiB9IGZyb20gJ34vc3RvcmUvZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBpc0luV2lzaGxpc3QsIGlzSW5Db21wYXJlIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RWxldmVuICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgd2lzaGxpc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1pbiA9IG1pblByaWNlO1xyXG4gICAgICAgIGxldCBtYXggPSBtYXhQcmljZTtcclxuICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWluID4gaXRlbS5wcmljZSApIG1pbiA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgaXRlbS5wcmljZSApIG1heCA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgfSwgW10gKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KCBwcm9kdWN0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25XaXNobGlzdENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb1dpc2hsaXN0KCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goICcvcGFnZXMvd2lzaGxpc3QnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ29tcGFyZUNsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbkNvbXBhcmUoIHByb3BzLmNvbXBhcmVsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvQ29tcGFyZSggcHJvZHVjdCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblF1aWNrVmlldyAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLnNob3dRdWlja1ZpZXcoIHByb2R1Y3Quc2x1ZyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IHByb2R1Y3QtNyB0ZXh0LWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtbmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zYWxlX3ByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1zYWxlXCI+U2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC10b3BcIj5Ub3A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW91dFwiPk91dCBvZiBTdG9jazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9eyA1MDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibGFjayBhbmQgd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc21fcGljdHVyZXMubGVuZ3RoID49IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAxIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9eyA1MDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvbi12ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5XaXNobGlzdCggd2lzaGxpc3QsIHByb2R1Y3QgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi13aXNobGlzdCBidG4tZXhwYW5kYWJsZSBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPmdvIHRvIHdpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi13aXNobGlzdCBidG4tZXhwYW5kYWJsZVwiIG9uQ2xpY2s9eyBvbldpc2hsaXN0Q2xpY2sgfT48c3Bhbj5hZGQgdG8gd2lzaGxpc3Q8L3NwYW4+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLWNvbXBhcmVcIiBvbkNsaWNrPXsgb25Db21wYXJlQ2xpY2sgfT48c3Bhbj5jb21wYXJlPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvbi12ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5XaXNobGlzdCggd2lzaGxpc3QsIHByb2R1Y3QgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi13aXNobGlzdCBidG4tZXhwYW5kYWJsZSBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPmdvIHRvIHdpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi13aXNobGlzdCBidG4tZXhwYW5kYWJsZVwiIG9uQ2xpY2s9eyBvbldpc2hsaXN0Q2xpY2sgfT48c3Bhbj5hZGQgdG8gd2lzaGxpc3Q8L3NwYW4+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2sgIT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnQgYnRuLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2VsZWN0IG9wdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tY2FydFwiIG9uQ2xpY2s9eyBvbkNhcnRDbGljayB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eyBpdGVtLnNsdWcgKyAnLScgKyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogJy9zaG9wL3NpZGViYXIvbGlzdCcsIHF1ZXJ5OiB7IGNhdGVnb3J5OiBpdGVtLnNsdWcgfSB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5kZXggPCBwcm9kdWN0LmNhdGVnb3J5Lmxlbmd0aCAtIDEgPyAnLCAnIDogXCJcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PnsgcHJvZHVjdC5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+eyBwcm9kdWN0LnJhdGluZ3MudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5ncy10ZXh0XCI+KCB7IHByb2R1Y3QucmV2aWV3IH0gUmV2aWV3cyApPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBzdHlsZT17IHsgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yIH0gfSBrZXk9eyBpbmRleCB9PjxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Db2xvciBOYW1lPC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgICAgICBjb21wYXJlbGlzdDogc3RhdGUuY29tcGFyZWxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24sIC4uLmNvbXBhcmVBY3Rpb24sIC4uLmRlbW9BY3Rpb24gfSApKCBQcm9kdWN0RWxldmVuICk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY29tcGFyZUFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY29tcGFyZSc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgZGVtb0FjdGlvbiB9IGZyb20gJ34vc3RvcmUvZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBpc0luV2lzaGxpc3QsIGlzSW5Db21wYXJlIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0U2l4ICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgd2lzaGxpc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1pbiA9IG1pblByaWNlO1xyXG4gICAgICAgIGxldCBtYXggPSBtYXhQcmljZTtcclxuICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWluID4gaXRlbS5wcmljZSApIG1pbiA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgaXRlbS5wcmljZSApIG1heCA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgfSwgW10gKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KCBwcm9kdWN0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25XaXNobGlzdENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb1dpc2hsaXN0KCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goICcvcGFnZXMvd2lzaGxpc3QnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ29tcGFyZUNsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbkNvbXBhcmUoIHByb3BzLmNvbXBhcmVsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvQ29tcGFyZSggcHJvZHVjdCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblF1aWNrVmlldyAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLnNob3dRdWlja1ZpZXcoIHByb2R1Y3Quc2x1ZyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IHByb2R1Y3QtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmV3ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zYWxlX3ByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRvcCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC10b3BcIj5Ub3A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1vdXRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9eyA1MDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNtX3BpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9eyA1MDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb3JkZXItbGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib2R5IHByb2R1Y3QtYWN0aW9uLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGl0ZW0uc2x1ZyArICctJyArIGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogaXRlbS5zbHVnIH0gfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5uYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57IHByb2R1Y3Quc2hvcnRfZGVzYyB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdiBwcm9kdWN0LW5hdi1kb3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfT48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtNiBvcmRlci1tZC1sYXN0IG9yZGVyLWxnLWxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIj57IHByb2R1Y3QucmF0aW5ncy50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5ncy10ZXh0XCI+KCB7IHByb2R1Y3QucmV2aWV3IH0gUmV2aWV3cyApPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLXdpc2hsaXN0IGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+d2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdFwiIG9uQ2xpY2s9eyBvbldpc2hsaXN0Q2xpY2sgfT48c3Bhbj53aXNobGlzdDwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnQgYnRuLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+c2VsZWN0IG9wdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tY2FydFwiIG9uQ2xpY2s9eyBvbkNhcnRDbGljayB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgICAgICBjb21wYXJlbGlzdDogc3RhdGUuY29tcGFyZWxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24sIC4uLmNvbXBhcmVBY3Rpb24sIC4uLmRlbW9BY3Rpb24gfSApKCBQcm9kdWN0U2l4ICk7XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvZHVjdE5pbmUgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QtbmluZSc7XHJcbmltcG9ydCBQcm9kdWN0RWxldmVuIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LWVsZXZlbic7XHJcblxyXG5mdW5jdGlvbiBTaG9wTGlzdE9uZShwcm9wcykge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBwcm9kdWN0cyA9IFtdLCBwZXJQYWdlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2Zha2VBcnJheSwgc2V0RmFrZUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtncmlkQ2xhc3MsIHNldEdyaWRDbGFzc10gPSB1c2VTdGF0ZSgnY29sLTYnKTtcclxuICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJQYWdlOyBpKyspIHtcclxuICAgICAgICAgICAgdGVtcC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRGYWtlQXJyYXkodGVtcCk7XHJcbiAgICB9LCBbcGVyUGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBpZiAodHlwZSA9PT0gJ2xpc3QnIHx8IHR5cGUgPT09ICcyY29scycpIHNldEdyaWRDbGFzcygnY29sLTYnKTtcclxuICAgICAgICAvLyBpZiAodHlwZSA9PT0gJzNjb2xzJykgc2V0R3JpZENsYXNzKCdjb2wtNiBjb2wtbWQtNCBjb2wtbGctNCcpO1xyXG4gICAgICAgIC8vIGlmICh0eXBlID09PSAnNGNvbHMnKSBzZXRHcmlkQ2xhc3MoJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC0zJyk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAnbGlzdCcgfHwgdHlwZSA9PT0gJzJjb2xzJykgc2V0R3JpZENsYXNzKCdjb2wtNiBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtMycpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnM2NvbHMnKSBzZXRHcmlkQ2xhc3MoJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC0zJyk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICc0Y29scycpIHNldEdyaWRDbGFzcygnY29sLTYgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTMnKTtcclxuXHJcbiAgICB9LCBbdHlwZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzIG1iLTNcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3RzLmxlbmd0aCA9PSAwICYmICFsb2FkaW5nKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tcmVzdWx0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPk5vIHByb2R1Y3RzIG1hdGNoaW5nIHlvdXIgc2VsZWN0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PSAnbGlzdCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWtlQXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXBybyBza2VsLXByby1saXN0XCIga2V5PXtpbmRleH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3ROaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFrZUFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRDbGFzc30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRDbGFzc30ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEVsZXZlbiBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTaG9wTGlzdE9uZSk7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBTdGlja3lCb3ggZnJvbSAncmVhY3Qtc3RpY2t5LWJveCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IFNob3BMaXN0T25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LW9uZSc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uJztcclxuaW1wb3J0IFNob3BTaWRlYmFyT25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2hvcC1zaWRlYmFyLW9uZSc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9QYWdlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gU2hvcEdyaWQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW2dldFByb2R1Y3RzLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9QUk9EVUNUUyk7XHJcbiAgICBjb25zdCBbZmlyc3RMb2FkaW5nLCBzZXRGaXJzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbcGFnZVRpdGxlLCBzZXRQYWdlVGl0bGVdID0gdXNlU3RhdGUoJ0NoYWlycycpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCB0b3RhbENvdW50ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLnRvdGFsQ291bnQ7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGUpO1xyXG4gICAgICAgIHJlc2l6ZUhhbmRsZSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5vZmZzZXRXaWR0aCA8IDk5MilcclxuICAgICAgICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2R1Y3RzKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBxdWVyeS5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHF1ZXJ5LmNvbG9yID8gcXVlcnkuY29sb3Iuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcXVlcnkuc2l6ZSA/IHF1ZXJ5LnNpemUuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHF1ZXJ5LmJyYW5kID8gcXVlcnkuYnJhbmQuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgbWluUHJpY2U6IHBhcnNlSW50KHF1ZXJ5Lm1pblByaWNlKSxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlOiBwYXJzZUludChxdWVyeS5tYXhQcmljZSksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHF1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UgPyBwYXJzZUludChxdWVyeS5wYWdlKSA6IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJQYWdlOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjcm9sbFRvUGFnZUNvbnRlbnQoKTtcclxuICAgIH0sIFtxdWVyeSwgcGVyUGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdHMpIHNldEZpcnN0TG9hZGluZyh0cnVlKTtcclxuICAgIH0sIFtwcm9kdWN0c10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PSAnbGlzdCcpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdMaXN0Jyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICcyY29scycpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDIgQ29sdW1ucycpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnM2NvbHMnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCAzIENvbHVtbnMnKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSg5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzRjb2xzJykge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgNCBDb2x1bW5zJyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0eXBlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBvblNvcnRCeUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqZWN0ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgIGxldCB1cmwgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSgnW3R5cGVdJywgcXVlcnkudHlwZSkgKyAnPyc7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHF1ZXJ5T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09IFwidHlwZVwiICYmIGtleSAhPT0gXCJzb3J0QnlcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGtleSArICc9JyArIHF1ZXJ5T2JqZWN0W2tleV0gKyAnJic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKHVybCArICdzb3J0Qnk9JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluIHNob3BcIj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQWxsIFNlYXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgc3ViVGl0bGU9XCJXZSBtYWtlIGhhcHB5IHdvcmtwbGFjZXNcIlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPVwiaW1hZ2VzL2Jhbm5lcnMvY2F0X2Jhbm5lci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlZpZXcgT3VyIFByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblVybD1cIiNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbmF2IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCI+e3BhZ2VUaXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5zZWFyY2ggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VhcmNoIC0ge3F1ZXJ5LnNlYXJjaFRlcm19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2tlbGV0b24tYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbGctOSBza2VsLXNob3AtcHJvZHVjdHMgJHshbG9hZGluZyA/ICdsb2FkZWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgcHJvZHVjdHMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHtwcm9kdWN0cy5sZW5ndGh9IG9mIHt0b3RhbENvdW50fTwvc3Bhbj4gUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LXNvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic29ydGJ5XCI+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic29ydGJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzb3J0YnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Tb3J0QnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zb3J0QnkgPyBxdWVyeS5zb3J0QnkgOiAnZGVmYXVsdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlYXR1cmVkXCI+TW9zdCBQb3B1bGFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyYXRpbmdcIj5Nb3N0IFJhdGVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXdcIj5EYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICdsaXN0JyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvMmNvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzJjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICczY29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci80Y29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnNGNvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMThcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE4XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcExpc3RPbmUgcHJvZHVjdHM9e3Byb2R1Y3RzfSBwZXJQYWdlPXtwZXJQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfT48L1Nob3BMaXN0T25lPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbENvdW50ID4gcGVyUGFnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHBlclBhZ2U9e3BlclBhZ2V9IHRvdGFsPXt0b3RhbENvdW50fT48L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtgY29sLWxnLTMgc2tlbC1zaG9wLXNpZGViYXIgb3JkZXItbGctZmlyc3Qgc2tlbGV0b24tYm9keSAkeyghbG9hZGluZyB8fCBmaXJzdExvYWRpbmcpID8gJ2xvYWRlZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3lCb3ggY2xhc3NOYW1lPVwic3RpY2t5LWNvbnRlbnRcIiBvZmZzZXRUb3A9ezcwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcFNpZGViYXJPbmUgdG9nZ2xlPXt0b2dnbGV9PjwvU2hvcFNpZGViYXJPbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreUJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZGViYXItZml4ZWQtdG9nZ2xlclwiIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jb2dcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZmlsdGVyLW92ZXJsYXlcIiBvbkNsaWNrPXtoaWRlU2lkZWJhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNpZGUgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvbWFpbiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSkoU2hvcEdyaWQpOyJdLCJzb3VyY2VSb290IjoiIn0=