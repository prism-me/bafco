self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/features/products/product-twelve.jsx":
/*!*********************************************************!*\
  !*** ./components/features/products/product-twelve.jsx ***!
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


var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-twelve.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function ProductTwelve(props) {
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
    className: "product product-11 text-center",
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
      lineNumber: 115,
      columnNumber: 17
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 133
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 126
    }
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 119
    }
  }, "quick view")))), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, product.category.map(function (item, index) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: item.slug + '-' + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
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
        lineNumber: 132,
        columnNumber: 33
      }
    }, item.name), index < product.category.length - 1 ? ', ' : "");
  })), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/product/default/".concat(product.slug),
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 37
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 37
    }
  }, "add to cart"))) : "");
}

_s(ProductTwelve, "6OJ+84+53auJUpe/NWvMVZjEKIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = ProductTwelve;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_8__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_9__.actions))(ProductTwelve));

var _c;

$RefreshReg$(_c, "ProductTwelve");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LXR3ZWx2ZS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdFR3ZWx2ZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdCIsIndpc2hsaXN0IiwidXNlU3RhdGUiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsInVzZUVmZmVjdCIsIm1pbiIsIm1heCIsInZhcmlhbnRzIiwibWFwIiwiaXRlbSIsInByaWNlIiwibGVuZ3RoIiwic2FsZV9wcmljZSIsIm9uQ2FydENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9DYXJ0Iiwib25XaXNobGlzdENsaWNrIiwiaXNJbldpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsInB1c2giLCJvbkNvbXBhcmVDbGljayIsImlzSW5Db21wYXJlIiwiY29tcGFyZWxpc3QiLCJhZGRUb0NvbXBhcmUiLCJvblF1aWNrVmlldyIsInNob3dRdWlja1ZpZXciLCJzbHVnIiwidG9wIiwic3RvY2siLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJjYXRlZ29yeSIsImluZGV4IiwicGF0aG5hbWUiLCJxdWVyeSIsIm5hbWUiLCJ0b0ZpeGVkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdCIsIndpc2hsaXN0QWN0aW9uIiwiY2FydEFjdGlvbiIsImNvbXBhcmVBY3Rpb24iLCJkZW1vQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxhQUFULENBQXlCQyxLQUF6QixFQUFpQztBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRDZCLE1BRXJC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TztBQUNIMUMsWUFBUSxFQUFFMEMsS0FBSyxDQUFDMUMsUUFBTixDQUFlMkMsSUFEdEI7QUFFSGxCLGVBQVcsRUFBRWlCLEtBQUssQ0FBQ2pCLFdBQU4sQ0FBa0JrQjtBQUY1QixHQUFQO0FBSUgsQ0FMRDs7QUFPQSwrREFBZUMsb0RBQU8sQ0FBRUgsZUFBRiw4REFBd0JJLG9EQUF4QixHQUEyQ0MsZ0RBQTNDLEdBQTBEQyxtREFBMUQsR0FBNEVDLGdEQUE1RSxFQUFQLENBQW1HckQsYUFBbkcsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMDBlNWZiYTE4MTFmNTE3MGFmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY29tcGFyZUFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY29tcGFyZSc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgZGVtb0FjdGlvbiB9IGZyb20gJ34vc3RvcmUvZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBpc0luV2lzaGxpc3QsIGlzSW5Db21wYXJlIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0VHdlbHZlICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgd2lzaGxpc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1pbiA9IG1pblByaWNlO1xyXG4gICAgICAgIGxldCBtYXggPSBtYXhQcmljZTtcclxuICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggbWluID4gaXRlbS5wcmljZSApIG1pbiA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgaXRlbS5wcmljZSApIG1heCA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgfSwgW10gKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KCBwcm9kdWN0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25XaXNobGlzdENsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb1dpc2hsaXN0KCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goICcvcGFnZXMvd2lzaGxpc3QnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ29tcGFyZUNsaWNrICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCAhaXNJbkNvbXBhcmUoIHByb3BzLmNvbXBhcmVsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvQ29tcGFyZSggcHJvZHVjdCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblF1aWNrVmlldyAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLnNob3dRdWlja1ZpZXcoIHByb2R1Y3Quc2x1ZyApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IHByb2R1Y3QtMTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1zYWxlXCI+U2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1jaXJjbGUgbGFiZWwtdG9wXCI+VG9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1jaXJjbGUgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvbi12ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCB3aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi13aXNobGlzdCBidG4tZXhwYW5kYWJsZSBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPmdvIHRvIHdpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlXCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPmFkZCB0byB3aXNobGlzdDwvc3Bhbj48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PjxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGl0ZW0uc2x1ZyArICctJyArIGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy12YWxcIiBzdHlsZT17IHsgd2lkdGg6IHByb2R1Y3QucmF0aW5ncyAqIDIwICsgJyUnIH0gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+eyBwcm9kdWN0LnJhdGluZ3MudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5ncy10ZXh0XCI+KCB7IHByb2R1Y3QucmV2aWV3IH0gUmV2aWV3cyApPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hdiBwcm9kdWN0LW5hdi1kb3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9IGtleT17IGluZGV4IH0+PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbG9yIE5hbWU8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrICYmIHByb2R1Y3Quc3RvY2sgIT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tY2FydCBidG4tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlbGVjdCBvcHRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiBvbkNsaWNrPXsgb25DYXJ0Q2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgICAgICBjb21wYXJlbGlzdDogc3RhdGUuY29tcGFyZWxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4ud2lzaGxpc3RBY3Rpb24sIC4uLmNhcnRBY3Rpb24sIC4uLmNvbXBhcmVBY3Rpb24sIC4uLmRlbW9BY3Rpb24gfSApKCBQcm9kdWN0VHdlbHZlICk7Il0sInNvdXJjZVJvb3QiOiIifQ==