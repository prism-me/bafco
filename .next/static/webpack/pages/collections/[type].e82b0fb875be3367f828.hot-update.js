self["webpackHotUpdate_N_E"]("pages/collections/[type]",{

/***/ "./components/features/products/product-five.jsx":
/*!*******************************************************!*\
  !*** ./components/features/products/product-five.jsx ***!
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


var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-five.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function ProductFive(props) {
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
    className: "product product-4 text-center",
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
  }) : ""), __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 133
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 126
    }
  }, "add to wishlist"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
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
  }, "add to cart"))) : ""), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, product.category.map(function (item, index) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: item.slug + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
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
        lineNumber: 148,
        columnNumber: 33
      }
    }, item.name), index < product.category.length - 1 ? ', ' : "");
  })), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
        lineNumber: 185,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "sr-only",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 113
      }
    }, "Color Name"));
  }))) : ""));
}

_s(ProductFive, "6OJ+84+53auJUpe/NWvMVZjEKIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ProductFive;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_8__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_9__.actions))(ProductFive));

var _c;

$RefreshReg$(_c, "ProductFive");

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

/***/ "./components/partials/shop/list/shop-list-two.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/shop/list/shop-list-two.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_five__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/products/product-five */ "./components/features/products/product-five.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\shop\\list\\shop-list-two.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ShopListThree(props) {
  var _this = this;

  var _props$products = props.products,
      products = _props$products === void 0 ? [] : _props$products,
      loading = props.loading;
  var fakeArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return __jsx("div", {
    className: "products mb-3 skeleton-body skel-shop-products ".concat(loading ? '' : 'loaded'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "No products matching your selection.") : __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-xl-3 mb-2",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 41
      }
    }));
  }) : products.map(function (product, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-xl-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, __jsx(_components_features_products_product_five__WEBPACK_IMPORTED_MODULE_1__.default, {
      product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 41
      }
    }));
  })));
}

_c = ShopListThree;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopListThree));

var _c, _c2;

$RefreshReg$(_c, "ShopListThree");
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
/* harmony import */ var _components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/shop/list/shop-list-two */ "./components/partials/shop/list/shop-list-two.jsx");
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
  }, "Date")))))), __jsx(_components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LWZpdmUuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3AvbGlzdC9zaG9wLWxpc3QtdHdvLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0Rml2ZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdCIsIndpc2hsaXN0IiwidXNlU3RhdGUiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsInVzZUVmZmVjdCIsIm1pbiIsIm1heCIsInZhcmlhbnRzIiwibWFwIiwiaXRlbSIsInByaWNlIiwibGVuZ3RoIiwic2FsZV9wcmljZSIsIm9uQ2FydENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9DYXJ0Iiwib25XaXNobGlzdENsaWNrIiwiaXNJbldpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsInB1c2giLCJvbkNvbXBhcmVDbGljayIsImlzSW5Db21wYXJlIiwiY29tcGFyZWxpc3QiLCJhZGRUb0NvbXBhcmUiLCJvblF1aWNrVmlldyIsInNob3dRdWlja1ZpZXciLCJzbHVnIiwidG9wIiwic3RvY2siLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJjYXRlZ29yeSIsImluZGV4IiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJ0b0ZpeGVkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJTaG9wTGlzdFRocmVlIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwiZmFrZUFycmF5IiwiUmVhY3QiLCJTaG9wR3JpZCIsInR5cGUiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJnZXRQcm9kdWN0cyIsImVycm9yIiwiZmlyc3RMb2FkaW5nIiwic2V0Rmlyc3RMb2FkaW5nIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJwYWdlVGl0bGUiLCJzZXRQYWdlVGl0bGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ0b3RhbENvdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZUhhbmRsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRXaWR0aCIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJzcGxpdCIsInNpemUiLCJicmFuZCIsInBhcnNlSW50Iiwic29ydEJ5IiwicGFnZSIsImxpc3QiLCJzY3JvbGxUb1BhZ2VDb250ZW50Iiwib25Tb3J0QnlDaGFuZ2UiLCJxdWVyeU9iamVjdCIsInJlcGxhY2UiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZ2dsZVNpZGViYXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImhpZGVTaWRlYmFyIiwic2VhcmNoIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsV0FBVCxDQUF1QkMsS0FBdkIsRUFBK0I7QUFBQTs7QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUQyQixNQUVuQkMsT0FGbUIsR0FFR0gsS0FGSCxDQUVuQkcsT0FGbUI7QUFBQSxNQUVWQyxRQUZVLEdBRUdKLEtBRkgsQ0FFVkksUUFGVTs7QUFBQSxrQkFHT0MsK0NBQVEsQ0FBRSxDQUFGLENBSGY7QUFBQSxNQUduQkMsUUFIbUI7QUFBQSxNQUdUQyxXQUhTOztBQUFBLG1CQUlP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QUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERSxHQUlBLEVBYmQsRUFlSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUF3QyxXQUFPLEVBQUVLLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQXpHSixDQURKLENBREosQ0ExQkosQ0FESjtBQTRKSDs7R0FyUVEzQyxRO1VBQ1UxRCxrRCxFQUdpQzRELDhEOzs7S0FKM0NGLFE7QUF1UVQsK0RBQWU2Qyx1REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FBa0Q5QyxRQUFsRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS5lODJiMGZiODc1YmUzMzY3ZjgyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY29tcGFyZUFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY29tcGFyZSc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgZGVtb0FjdGlvbiB9IGZyb20gJ34vc3RvcmUvZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBpc0luV2lzaGxpc3QsIGlzSW5Db21wYXJlIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Rml2ZSAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIHdpc2hsaXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgbWF4UHJpY2UsIHNldE1heFByaWNlIF0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgWyBtaW5QcmljZSwgc2V0TWluUHJpY2UgXSA9IHVzZVN0YXRlKCA5OTk5OSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBtaW4gPSBtaW5QcmljZTtcclxuICAgICAgICBsZXQgbWF4ID0gbWF4UHJpY2U7XHJcbiAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAoIG1heCA8IGl0ZW0ucHJpY2UgKSBtYXggPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgbWluID0gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBtYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWluUHJpY2UoIG1pbiApO1xyXG4gICAgICAgIHNldE1heFByaWNlKCBtYXggKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLmFkZFRvQ2FydCggcHJvZHVjdCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uV2lzaGxpc3RDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9XaXNobGlzdCggcHJvZHVjdCApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCAnL3BhZ2VzL3dpc2hsaXN0JyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNvbXBhcmVDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5Db21wYXJlKCBwcm9wcy5jb21wYXJlbGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb0NvbXBhcmUoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25RdWlja1ZpZXcgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5zaG93UXVpY2tWaWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdCBwcm9kdWN0LTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1zYWxlXCI+U2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1jaXJjbGUgbGFiZWwtdG9wXCI+VG9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1jaXJjbGUgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jayAhPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tY2FydCBidG4tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWxlY3Qgb3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0XCIgb25DbGljaz17IG9uQ2FydENsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGl0ZW0uc2x1ZyArICctJyArIGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfT48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdEZpdmUgKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RGaXZlIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LWZpdmUnO1xyXG5cclxuZnVuY3Rpb24gU2hvcExpc3RUaHJlZSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyA9IFtdLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGZha2VBcnJheSA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdHMgbWItMyBza2VsZXRvbi1ib2R5IHNrZWwtc2hvcC1wcm9kdWN0cyAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKCBwcm9kdWN0cy5sZW5ndGggPT0gMCAmJiAhbG9hZGluZyApID9cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1yZXN1bHRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+Tm8gcHJvZHVjdHMgbWF0Y2hpbmcgeW91ciBzZWxlY3Rpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWtlQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC14bC0zIG1iLTJcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIHByb2R1Y3QsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC14bC0zXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Rml2ZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggU2hvcExpc3RUaHJlZSApOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgU3RpY2t5Qm94IGZyb20gJ3JlYWN0LXN0aWNreS1ib3gnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdlLWhlYWRlcic7XHJcbmltcG9ydCBTaG9wTGlzdE9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9saXN0L3Nob3AtbGlzdC10d28nO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnaW5hdGlvbic7XHJcbmltcG9ydCBTaG9wU2lkZWJhck9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9zaWRlYmFyL3Nob3Atc2lkZWJhci1vbmUnO1xyXG5cclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX1BST0RVQ1RTIH0gZnJvbSAnfi9zZXJ2ZXIvcXVlcmllcyc7XHJcbmltcG9ydCB7IHNjcm9sbFRvUGFnZUNvbnRlbnQgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFNob3BHcmlkKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB0eXBlID0gcm91dGVyLnF1ZXJ5LnR5cGU7XHJcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IFtnZXRQcm9kdWN0cywgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShHRVRfUFJPRFVDVFMpO1xyXG4gICAgY29uc3QgW2ZpcnN0TG9hZGluZywgc2V0Rmlyc3RMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwZXJQYWdlLCBzZXRQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xyXG4gICAgY29uc3QgW3BhZ2VUaXRsZSwgc2V0UGFnZVRpdGxlXSA9IHVzZVN0YXRlKCdDaGFpcnMnKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0cy5kYXRhO1xyXG4gICAgY29uc3QgdG90YWxDb3VudCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0cy50b3RhbENvdW50O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlKTtcclxuICAgICAgICByZXNpemVIYW5kbGUoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZSgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikub2Zmc2V0V2lkdGggPCA5OTIpXHJcbiAgICAgICAgICAgIHNldFRvZ2dsZSh0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRQcm9kdWN0cyh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybTogcXVlcnkuc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBxdWVyeS5jb2xvciA/IHF1ZXJ5LmNvbG9yLnNwbGl0KCcsJykgOiBbXSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHF1ZXJ5LnNpemUgPyBxdWVyeS5zaXplLnNwbGl0KCcsJykgOiBbXSxcclxuICAgICAgICAgICAgICAgIGJyYW5kOiBxdWVyeS5icmFuZCA/IHF1ZXJ5LmJyYW5kLnNwbGl0KCcsJykgOiBbXSxcclxuICAgICAgICAgICAgICAgIG1pblByaWNlOiBwYXJzZUludChxdWVyeS5taW5QcmljZSksXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZTogcGFyc2VJbnQocXVlcnkubWF4UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHF1ZXJ5LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgc29ydEJ5OiBxdWVyeS5zb3J0QnkgPyBxdWVyeS5zb3J0QnkgOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBwYWdlOiBxdWVyeS5wYWdlID8gcGFyc2VJbnQocXVlcnkucGFnZSkgOiAxLFxyXG4gICAgICAgICAgICAgICAgcGVyUGFnZTogcGVyUGFnZSxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzY3JvbGxUb1BhZ2VDb250ZW50KCk7XHJcbiAgICB9LCBbcXVlcnksIHBlclBhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RzKSBzZXRGaXJzdExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9LCBbcHJvZHVjdHNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnTGlzdCcpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnMmNvbHMnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCAyIENvbHVtbnMnKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSg2KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzNjb2xzJykge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgMyBDb2x1bW5zJyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoOSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICc0Y29scycpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDQgQ29sdW1ucycpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHlwZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gb25Tb3J0QnlDaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCBxdWVyeU9iamVjdCA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBsZXQgdXJsID0gcm91dGVyLnBhdGhuYW1lLnJlcGxhY2UoJ1t0eXBlXScsIHF1ZXJ5LnR5cGUpICsgJz8nO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBxdWVyeU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBcInR5cGVcIiAmJiBrZXkgIT09IFwic29ydEJ5XCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSBrZXkgKyAnPScgKyBxdWVyeU9iamVjdFtrZXldICsgJyYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCh1cmwgKyAnc29ydEJ5PScgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVTaWRlYmFyKCkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbiBzaG9wXCI+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFsbCBTZWF0aW5nXCJcclxuICAgICAgICAgICAgICAgIHN1YlRpdGxlPVwiV2UgbWFrZSBoYXBweSB3b3JrcGxhY2VzXCJcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZT1cImltYWdlcy9iYW5uZXJzL2NhdF9iYW5uZXIucG5nXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJWaWV3IE91ciBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICBidXR0b25Vcmw9XCIjXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPkhvbWU8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPntwYWdlVGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2VhcmNoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCAtIHtxdWVyeS5zZWFyY2hUZXJtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNrZWxldG9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTkgc2tlbC1zaG9wLXByb2R1Y3RzICR7IWxvYWRpbmcgPyAnbG9hZGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIHByb2R1Y3RzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7cHJvZHVjdHMubGVuZ3RofSBvZiB7dG90YWxDb3VudH08L3NwYW4+IFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1zb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvcnRieVwiPlNvcnQgYnk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNvcnRieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic29ydGJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU29ydEJ5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5ID8gcXVlcnkuc29ydEJ5IDogJ2RlZmF1bHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5EZWZhdWx0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWF0dXJlZFwiPk1vc3QgUG9wdWxhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmF0aW5nXCI+TW9zdCBSYXRlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3XCI+RGF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnbGlzdCcgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzJjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICcyY29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnM2NvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvNGNvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzRjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE4XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxOFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BMaXN0T25lIHByb2R1Y3RzPXtwcm9kdWN0c30gcGVyUGFnZT17cGVyUGFnZX0gbG9hZGluZz17bG9hZGluZ30+PC9TaG9wTGlzdE9uZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxDb3VudCA+IHBlclBhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBwZXJQYWdlPXtwZXJQYWdlfSB0b3RhbD17dG90YWxDb3VudH0+PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17YGNvbC1sZy0zIHNrZWwtc2hvcC1zaWRlYmFyIG9yZGVyLWxnLWZpcnN0IHNrZWxldG9uLWJvZHkgJHsoIWxvYWRpbmcgfHwgZmlyc3RMb2FkaW5nKSA/ICdsb2FkZWQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5Qm94IGNsYXNzTmFtZT1cInN0aWNreS1jb250ZW50XCIgb2Zmc2V0VG9wPXs3MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BTaWRlYmFyT25lIHRvZ2dsZT17dG9nZ2xlfT48L1Nob3BTaWRlYmFyT25lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGlja3lCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWRlYmFyLWZpeGVkLXRvZ2dsZXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY29nXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWZpbHRlci1vdmVybGF5XCIgb25DbGljaz17aGlkZVNpZGViYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlID5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8L21haW4gPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnIH0pKFNob3BHcmlkKTsiXSwic291cmNlUm9vdCI6IiJ9