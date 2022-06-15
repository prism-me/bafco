self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var _components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/products/product-twelve */ "./components/features/products/product-twelve.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\home\\top-collection.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function TopCollection(props) {
  var _this = this;

  var _props$products = props.products,
      products = _props$products === void 0 ? [] : _props$products,
      loading = props.loading;
  var visible = 4;
  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading heading-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Top Selling Products"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills nav-border-anim justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "All")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Furniture")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Decoration")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "Lighting")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 45
      }
    }));
  }) : products.slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 45
      }
    }));
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 45
      }
    }));
  }) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['furniture']).slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 45
      }
    }));
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 45
      }
    }));
  }) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['decoration']).slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 45
      }
    }));
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 45
      }
    }));
  }) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['lighting']).slice(0, visible).map(function (item, index) {
    return __jsx("div", {
      className: "col-6 col-md-4 col-lg-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 41
      }
    }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
      product: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }
    }));
  })))), __jsx("div", {
    className: "text-center mb-7 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(ALink, {
    href: "/blog/classic",
    className: "btn btn-outline-darker btn-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 93
    }
  }, "View more articles"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 124
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3RvcC1jb2xsZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJUb3BDb2xsZWN0aW9uIiwicHJvcHMiLCJwcm9kdWN0cyIsImxvYWRpbmciLCJ2aXNpYmxlIiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjYXRGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFBQSx3QkFDU0EsS0FEVCxDQUNsQkMsUUFEa0I7QUFBQSxNQUNsQkEsUUFEa0IsZ0NBQ1AsRUFETztBQUFBLE1BQ0hDLE9BREcsR0FDU0YsS0FEVCxDQUNIRSxPQURHO0FBRTFCLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUVBLFNBQ0ksTUFBQyw0Q0FBRDtBQUFNLGdCQUFZLEVBQUUsQ0FBcEI7QUFBdUIsd0JBQW9CLEVBQUMsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSSxNQUFDLCtDQUFEO0FBQVMsYUFBUyxFQUFDLHNEQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FEMkM7QUFBQSxHQUEvQyxDQURKLEdBT0lDLGlEQUFTLENBQUNSLFFBQUQsRUFBVyxDQUFDLFVBQUQsQ0FBWCxDQUFULENBQWtDSSxLQUFsQyxDQUF3QyxDQUF4QyxFQUEyQ0YsT0FBM0MsRUFBb0RHLEdBQXBELENBQXdELFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ3BEO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQXlDLFNBQUcsRUFBRUEsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsaUZBQUQ7QUFDSSxhQUFPLEVBQUVELElBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRG9EO0FBQUEsR0FBeEQsQ0FUWixDQURKLENBREosQ0FsRkosRUF1R0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsS0FBRDtBQUFPLFFBQUksRUFBQyxlQUFaO0FBQTRCLGFBQVMsRUFBQyxpQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUF4RSxFQUF1RztBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXZHLENBREosQ0F2R0osQ0FESixDQURKO0FBK0dIOztLQW5IUVIsYTtBQXFIVCwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMWJlZTc1ZjYwZGNiZTc1YjU1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJQYW5lbCwgVGFiTGlzdCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IFByb2R1Y3RUd2VsdmUgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QtdHdlbHZlJztcclxuXHJcbmltcG9ydCB7IGNhdEZpbHRlciB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gVG9wQ29sbGVjdGlvbihwcm9wcykge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyA9IFtdLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHZpc2libGUgPSA0O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYnMgZGVmYXVsdEluZGV4PXswfSBzZWxlY3RlZFRhYkNsYXNzTmFtZT1cInNob3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZyBoZWFkaW5nLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VG9wIFNlbGxpbmcgUHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LWJvcmRlci1hbmltIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZ1cm5pdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RGVjb3JhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TGlnaHRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLnNsaWNlKDAsIHZpc2libGUpLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0RmlsdGVyKHByb2R1Y3RzLCBbJ2Z1cm5pdHVyZSddKS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0RmlsdGVyKHByb2R1Y3RzLCBbJ2RlY29yYXRpb24nXSkuc2xpY2UoMCwgdmlzaWJsZSkubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3ZWx2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobG9hZGluZyB8fCBwcm9kdWN0cy5sZW5ndGggPT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0uc2xpY2UoMCwgdmlzaWJsZSkubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlcihwcm9kdWN0cywgWydsaWdodGluZyddKS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTcgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvY2xhc3NpY1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrZXIgYnRuLW1vcmVcIj48c3Bhbj5WaWV3IG1vcmUgYXJ0aWNsZXM8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDb2xsZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9