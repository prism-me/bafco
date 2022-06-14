self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/partials/header/partials/header-search.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/header-search.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\header-search.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_3___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function HeaderSearch() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)("");

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      cat = _useState[0],
      setCat = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      products = _useState3[0],
      setProducts = _useState3[1];

  var _useLazyQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_7__.GET_PRODUCTS),
      _useLazyQuery2 = (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useLazyQuery, 2),
      searchProducts = _useLazyQuery2[0],
      data = _useLazyQuery2[1].data;

  var result = data && data.products.data;

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      timer = _useState4[0],
      setTimer = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    document.querySelector("body").addEventListener('click', closeSearchForm);
    return function () {
      document.querySelector("body").removeEventListener('click', closeSearchForm);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (result && searchTerm.length > 2) setProducts(result.reduce(function (acc, product) {
      var max = 0;
      var min = 999999;
      product.variants.map(function (item) {
        if (min > item.price) min = item.price;
        if (max < item.price) max = item.price;
      }, []);

      if (product.variants.length == 0) {
        min = product.sale_price ? product.sale_price : product.price;
        max = product.price;
      }

      return [].concat((0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(acc), [_objectSpread(_objectSpread({}, product), {}, {
        minPrice: min,
        maxPrice: max
      })]);
    }, []));
  }, [result, searchTerm]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (searchTerm.length > 2) {
      if (timer) clearTimeout(timer);
      var timerId = setTimeout(function () {
        searchProducts({
          variables: {
            searchTerm: searchTerm,
            category: cat
          }
        });
      }, 500);
      setTimer(timerId);
    }
  }, [searchTerm, cat]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);

  function matchEmphasize(name) {
    var regExp = new RegExp(searchTerm, "i");
    return name.replace(regExp, function (match) {
      return "<strong>" + match + "</strong>";
    });
  }

  function closeSearchForm(e) {
    document.querySelector('.header .header-search').classList.remove('show');
  }

  function onCatSelect(e) {
    setCat(e.target.value);
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function showSearchForm(e) {
    document.querySelector('.header .header-search').classList.add('show');
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: cat
      }
    });
  }

  function goProductPage() {
    setSearchTerm('');
    setProducts([]);
  }

  return __jsx("div", {
    className: "header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "search-toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 47
    }
  })), __jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    onClick: showSearchForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-search-wrapper search-wrapper-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "q",
    className: "sr-only",
    value: searchTerm,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Search"), __jsx("input", {
    type: "text",
    onChange: onSearchChange,
    value: searchTerm,
    className: "form-control",
    name: "q",
    placeholder: "What are you looking for?",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 71
    }
  })), __jsx("div", {
    className: "live-search-list",
    onClick: goProductPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, products.length > 0 && searchTerm.length > 2 ? __jsx("div", {
    className: "autocomplete-suggestions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, searchTerm.length > 2 && products.map(function (product, index) {
    return __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__.default, {
      href: "/product/default/".concat(product.slug),
      className: "autocomplete-suggestion",
      key: "search-result-".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 45
      }
    }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__.LazyLoadImage, {
      src: "http://localhost:4000" + product.sm_pictures[0].url,
      width: 40,
      height: 40,
      alt: "product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 49
      }
    }), __jsx("div", {
      className: "search-name",
      dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_9__.safeContent)(matchEmphasize(product.name)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 49
      }
    }), __jsx("span", {
      className: "search-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 49
      }
    }, product.stock == 0 ? __jsx("div", {
      className: "product-price mb-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 61
      }
    }, __jsx("span", {
      className: "out-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 65
      }
    }, "$", product.price.toFixed(2))) : product.minPrice == product.maxPrice ? __jsx("div", {
      className: "product-price mb-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 65
      }
    }, "$", product.minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
      className: "product-price mb-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 69
      }
    }, __jsx("span", {
      className: "new-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 73
      }
    }, "$", product.minPrice.toFixed(2)), __jsx("span", {
      className: "old-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 73
      }
    }, "$", product.maxPrice.toFixed(2))) : __jsx("div", {
      className: "product-price mb-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 69
      }
    }, "$", product.minPrice.toFixed(2), "\u2013$", product.maxPrice.toFixed(2))));
  })) : ""))));
}

_s(HeaderSearch, "XYPxyvIfq0jk5y6ArwX/Auy37HU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery];
});

_c = HeaderSearch;
/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_8__.default)({
  ssr: false
})(HeaderSearch));

var _c;

$RefreshReg$(_c, "HeaderSearch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvaGVhZGVyLXNlYXJjaC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJjYXQiLCJzZXRDYXQiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJzZWFyY2hQcm9kdWN0cyIsImRhdGEiLCJyZXN1bHQiLCJ0aW1lciIsInNldFRpbWVyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlU2VhcmNoRm9ybSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwibWF4IiwibWluIiwidmFyaWFudHMiLCJtYXAiLCJpdGVtIiwicHJpY2UiLCJzYWxlX3ByaWNlIiwibWluUHJpY2UiLCJtYXhQcmljZSIsImNsZWFyVGltZW91dCIsInRpbWVySWQiLCJzZXRUaW1lb3V0IiwidmFyaWFibGVzIiwiY2F0ZWdvcnkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwYXRobmFtZSIsIm1hdGNoRW1waGFzaXplIiwibmFtZSIsInJlZ0V4cCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJtYXRjaCIsImUiLCJvbkNhdFNlbGVjdCIsInRhcmdldCIsInZhbHVlIiwib25TZWFyY2hDaGFuZ2UiLCJzaG93U2VhcmNoRm9ybSIsImFkZCIsIm9uU3VibWl0U2VhcmNoRm9ybSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInF1ZXJ5IiwiZ29Qcm9kdWN0UGFnZSIsImluZGV4Iiwic2x1ZyIsInByb2Nlc3MiLCJzbV9waWN0dXJlcyIsInVybCIsInNhZmVDb250ZW50Iiwic3RvY2siLCJ0b0ZpeGVkIiwid2l0aEFwb2xs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUErQjNDLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQmtDLE9BQWpCLENBQTBCLENBQTFCLENBQS9CLENBRkosQ0FESixHQU1JO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUMzQyxPQUFPLENBQUNRLFFBQVIsQ0FBaUJtQyxPQUFqQixDQUEwQixDQUExQixDQUF2QyxhQUFnRjNDLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQmtDLE9BQWpCLENBQTBCLENBQTFCLENBQWhGLENBaEJwQixDQUhKLENBRG1DO0FBQUEsR0FBZCxDQUZqQyxDQURKLEdBOEJNLEVBaENkLENBTEosQ0FESixDQUhKLENBREo7QUFpREg7O0dBN0pRckUsWTtVQUNVRSxrRCxFQUlzQlEsOEQ7OztLQUxoQ1YsWTtBQStKVCwrREFBZXNFLHVEQUFVLENBQUU7QUFBRUMsS0FBRztBQUFMLENBQUYsQ0FBVixDQUFzRHZFLFlBQXRELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZWZkYTAzYzVkYzk5NDI3OWY1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgR0VUX1BST0RVQ1RTIH0gZnJvbSAnfi9zZXJ2ZXIvcXVlcmllcyc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vc2VydmVyL2Fwb2xsbyc7XHJcbmltcG9ydCB7IHNhZmVDb250ZW50IH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJTZWFyY2ggKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCBcIlwiICk7XHJcbiAgICBjb25zdCBbIGNhdCwgc2V0Q2F0IF0gPSB1c2VTdGF0ZSggXCJcIiApO1xyXG4gICAgY29uc3QgWyBzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtIF0gPSB1c2VTdGF0ZSggXCJcIiApO1xyXG4gICAgY29uc3QgWyBwcm9kdWN0cywgc2V0UHJvZHVjdHMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzZWFyY2hQcm9kdWN0cywgeyBkYXRhIH0gXSA9IHVzZUxhenlRdWVyeSggR0VUX1BST0RVQ1RTICk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkYXRhICYmIGRhdGEucHJvZHVjdHMuZGF0YTtcclxuICAgIGNvbnN0IFsgdGltZXIsIHNldFRpbWVyIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgY2xvc2VTZWFyY2hGb3JtICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCJib2R5XCIgKS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBjbG9zZVNlYXJjaEZvcm0gKTtcclxuICAgICAgICB9IClcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCByZXN1bHQgJiYgc2VhcmNoVGVybS5sZW5ndGggPiAyIClcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMoIHJlc3VsdC5yZWR1Y2UoICggYWNjLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluID0gOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWluID4gaXRlbS5wcmljZSApIG1pbiA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlOiBtaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFByaWNlOiBtYXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9LCBbXSApIClcclxuICAgIH0sIFsgcmVzdWx0LCBzZWFyY2hUZXJtIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggc2VhcmNoVGVybS5sZW5ndGggPiAyICkge1xyXG4gICAgICAgICAgICBpZiAoIHRpbWVyICkgY2xlYXJUaW1lb3V0KCB0aW1lciApO1xyXG4gICAgICAgICAgICBsZXQgdGltZXJJZCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFByb2R1Y3RzKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0sIDUwMCApO1xyXG4gICAgICAgICAgICBzZXRUaW1lciggdGltZXJJZCApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VhcmNoVGVybSwgY2F0IF0gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlci1zZWFyY2guc2hvdy1yZXN1bHRzJyApICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGVhZGVyLXNlYXJjaC5zaG93LXJlc3VsdHMnICkuY2xhc3NMaXN0LnJlbW92ZSggJ3Nob3ctcmVzdWx0cycgKTtcclxuICAgIH0sIFsgcm91dGVyLnBhdGhuYW1lIF0gKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaEVtcGhhc2l6ZSAoIG5hbWUgKSB7XHJcbiAgICAgICAgbGV0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoIHNlYXJjaFRlcm0sIFwiaVwiICk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgcmVnRXhwLFxyXG4gICAgICAgICAgICAoIG1hdGNoICkgPT4gXCI8c3Ryb25nPlwiICsgbWF0Y2ggKyBcIjwvc3Ryb25nPlwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaEZvcm0gKCBlICkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlciAuaGVhZGVyLXNlYXJjaCcgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSggJ3Nob3cnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXRTZWxlY3QgKCBlICkge1xyXG4gICAgICAgIHNldENhdCggZS50YXJnZXQudmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNlYXJjaENoYW5nZSAoIGUgKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoVGVybSggZS50YXJnZXQudmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2VhcmNoRm9ybSAoIGUgKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoICcuaGVhZGVyIC5oZWFkZXItc2VhcmNoJyApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCAnc2hvdycgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdFNlYXJjaEZvcm0gKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9zaG9wL3NpZGViYXIvbGlzdCcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdvUHJvZHVjdFBhZ2UgKCkge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oICcnICk7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMoIFtdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2ggaGVhZGVyLXNlYXJjaC1leHRlbmRlZCBoZWFkZXItc2VhcmNoLXZpc2libGUgaGVhZGVyLXNlYXJjaC1uby1yYWRpdXMgZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtdG9nZ2xlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj48L2k+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiZ2V0XCIgb25TdWJtaXQ9eyBvblN1Ym1pdFNlYXJjaEZvcm0gfSBvbkNsaWNrPXsgc2hvd1NlYXJjaEZvcm0gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlYXJjaC13cmFwcGVyIHNlYXJjaC13cmFwcGVyLXdpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInFcIiBjbGFzc05hbWU9XCJzci1vbmx5XCIgdmFsdWU9eyBzZWFyY2hUZXJtIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+U2VhcmNoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IG9uU2VhcmNoQ2hhbmdlIH0gdmFsdWU9eyBzZWFyY2hUZXJtIH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInFcIiBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl2ZS1zZWFyY2gtbGlzdFwiIG9uQ2xpY2s9eyBnb1Byb2R1Y3RQYWdlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggcHJvZHVjdHMubGVuZ3RoID4gMCAmJiBzZWFyY2hUZXJtLmxlbmd0aCA+IDIgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybS5sZW5ndGggPiAyICYmIHByb2R1Y3RzLm1hcCggKCBwcm9kdWN0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvblwiIGtleT17IGBzZWFyY2gtcmVzdWx0LSR7aW5kZXh9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZSBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH0gd2lkdGg9eyA0MCB9IGhlaWdodD17IDQwIH0gYWx0PVwicHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW5hbWVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHNhZmVDb250ZW50KCBtYXRjaEVtcGhhc2l6ZSggcHJvZHVjdC5uYW1lICkgKSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5taW5QcmljZSA9PSBwcm9kdWN0Lm1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgcHJvZHVjdC5tYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj4keyBwcm9kdWN0Lm1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IHByb2R1Y3QubWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIH0gKSggSGVhZGVyU2VhcmNoICk7Il0sInNvdXJjZVJvb3QiOiIifQ==