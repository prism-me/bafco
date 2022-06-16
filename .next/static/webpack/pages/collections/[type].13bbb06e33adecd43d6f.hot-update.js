self["webpackHotUpdate_N_E"]("pages/collections/[type]",{

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
    if (type === 'list' || type === '2cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
    if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4');
    if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
  }, [type]);
  return __jsx("div", {
    className: "products mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "No products matching your selection.") : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, type == 'list' ? loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: "skel-pro skel-pro-list",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
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
        lineNumber: 46,
        columnNumber: 41
      }
    });
  }) : __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: gridClass,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
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
        lineNumber: 62,
        columnNumber: 49
      }
    }, __jsx(_components_features_products_product_eleven__WEBPACK_IMPORTED_MODULE_3__.default, {
      product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 53
      }
    }));
  }))));
}

_s(ShopListOne, "T0LB1mGTsfHcpA1wbEzBzLwi3f8=", false, function () {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LW9uZS5qc3giXSwibmFtZXMiOlsiU2hvcExpc3RPbmUiLCJwcm9wcyIsImxvYWRpbmciLCJwcm9kdWN0cyIsInBlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImZha2VBcnJheSIsInNldEZha2VBcnJheSIsImdyaWRDbGFzcyIsInNldEdyaWRDbGFzcyIsInR5cGUiLCJxdWVyeSIsInVzZUVmZmVjdCIsInRlbXAiLCJpIiwicHVzaCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb2R1Y3QiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUF1QkMsS0FBdkIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxNQUNuQkMsT0FEbUIsR0FDaUJELEtBRGpCLENBQ25CQyxPQURtQjtBQUFBLHdCQUNpQkQsS0FEakIsQ0FDVkUsUUFEVTtBQUFBLE1BQ1ZBLFFBRFUsZ0NBQ0MsRUFERDtBQUFBLE1BQ0tDLE9BREwsR0FDaUJILEtBRGpCLENBQ0tHLE9BREw7QUFFM0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGMkIsa0JBR1NDLCtDQUFRLENBQUUsRUFBRixDQUhqQjtBQUFBLE1BR25CQyxTQUhtQjtBQUFBLE1BR1JDLFlBSFE7O0FBQUEsbUJBSVNGLCtDQUFRLENBQUUsT0FBRixDQUpqQjtBQUFBLE1BSW5CRyxTQUptQjtBQUFBLE1BSVJDLFlBSlE7O0FBSzNCLE1BQU1DLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFELElBQTFCO0FBRUFFLGtEQUFTLENBQUUsWUFBTTtBQUNiLFFBQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLFNBQU0sSUFBSUMsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR1osT0FBckIsRUFBOEJZLENBQUMsRUFBL0IsRUFBb0M7QUFDaENELFVBQUksQ0FBQ0UsSUFBTCxDQUFXRCxDQUFYO0FBQ0g7O0FBQ0RQLGdCQUFZLENBQUVNLElBQUYsQ0FBWjtBQUNILEdBTlEsRUFNTixDQUFFWCxPQUFGLENBTk0sQ0FBVDtBQVFBVSxrREFBUyxDQUFFLFlBQU07QUFDYixRQUFLRixJQUFJLEtBQUssTUFBVCxJQUFtQkEsSUFBSSxLQUFLLE9BQWpDLEVBQTJDRCxZQUFZLENBQUUsa0NBQUYsQ0FBWjtBQUMzQyxRQUFLQyxJQUFJLEtBQUssT0FBZCxFQUF3QkQsWUFBWSxDQUFFLHlCQUFGLENBQVo7QUFDeEIsUUFBS0MsSUFBSSxLQUFLLE9BQWQsRUFDSUQsWUFBWSxDQUFFLGtDQUFGLENBQVo7QUFDUCxHQUxRLEVBS04sQ0FBRUMsSUFBRixDQUxNLENBQVQ7QUFPQSxTQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVVVCxRQUFRLENBQUNlLE1BQVQsSUFBbUIsQ0FBbkIsSUFBd0IsQ0FBQ2hCLE9BQTNCLEdBQ0k7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURKLEdBS0kscUVBRVFVLElBQUksSUFBSSxNQUFSLEdBQ0lWLE9BQU8sR0FDSE0sU0FBUyxDQUFDVyxHQUFWLENBQWUsVUFBRUMsSUFBRixFQUFRQyxLQUFSO0FBQUEsV0FDWDtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUF3QyxTQUFHLEVBQUdBLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVztBQUFBLEdBQWYsQ0FERyxHQUtIbEIsUUFBUSxDQUFDZ0IsR0FBVCxDQUFjLFVBQUVHLE9BQUYsRUFBV0QsS0FBWDtBQUFBLFdBQ1YsTUFBQywrRUFBRDtBQUNJLGFBQU8sRUFBR0MsT0FEZDtBQUVJLFNBQUcsRUFBR0QsS0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFkLENBTlIsR0FhSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUW5CLE9BQU8sR0FDSE0sU0FBUyxDQUFDVyxHQUFWLENBQWUsVUFBRUMsSUFBRixFQUFRQyxLQUFSO0FBQUEsV0FDWDtBQUFLLGVBQVMsRUFBR1gsU0FBakI7QUFBNkIsU0FBRyxFQUFHVyxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FEVztBQUFBLEdBQWYsQ0FERyxHQU9IbEIsUUFBUSxDQUFDZ0IsR0FBVCxDQUFjLFVBQUVHLE9BQUYsRUFBV0QsS0FBWDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUdYLFNBQWpCO0FBQTZCLFNBQUcsRUFBR1csS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsaUZBQUQ7QUFBZSxhQUFPLEVBQUdDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURVO0FBQUEsR0FBZCxDQVRaLENBZlosQ0FQWixDQURKO0FBNkNIOztHQW5FUXRCLFc7VUFFVU0sa0Q7OztLQUZWTixXO0FBcUVULCtEQUFlLG1CQUFBdUIsaURBQUEsQ0FBWXZCLFdBQVosQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb2xsZWN0aW9ucy9bdHlwZV0uMTNiYmIwNmUzM2FkZWNkNDNkNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvZHVjdE5pbmUgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QtbmluZSc7XHJcbmltcG9ydCBQcm9kdWN0RWxldmVuIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LWVsZXZlbic7XHJcblxyXG5mdW5jdGlvbiBTaG9wTGlzdE9uZSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBwcm9kdWN0cyA9IFtdLCBwZXJQYWdlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgWyBmYWtlQXJyYXksIHNldEZha2VBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIGdyaWRDbGFzcywgc2V0R3JpZENsYXNzIF0gPSB1c2VTdGF0ZSggJ2NvbC02JyApO1xyXG4gICAgY29uc3QgdHlwZSA9IHJvdXRlci5xdWVyeS50eXBlO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wID0gW107XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGVyUGFnZTsgaSsrICkge1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2goIGkgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RmFrZUFycmF5KCB0ZW1wICk7XHJcbiAgICB9LCBbIHBlclBhZ2UgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnbGlzdCcgfHwgdHlwZSA9PT0gJzJjb2xzJyApIHNldEdyaWRDbGFzcyggJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC0zJyApO1xyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJzNjb2xzJyApIHNldEdyaWRDbGFzcyggJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00JyApO1xyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJzRjb2xzJyApXHJcbiAgICAgICAgICAgIHNldEdyaWRDbGFzcyggJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC0zJyApO1xyXG4gICAgfSwgWyB0eXBlIF0gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cyBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICggcHJvZHVjdHMubGVuZ3RoID09IDAgJiYgIWxvYWRpbmcgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tcmVzdWx0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPk5vIHByb2R1Y3RzIG1hdGNoaW5nIHlvdXIgc2VsZWN0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PSAnbGlzdCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWtlQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXBybyBza2VsLXByby1saXN0XCIga2V5PXsgaW5kZXggfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIHByb2R1Y3QsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3ROaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IHByb2R1Y3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWtlQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGdyaWRDbGFzcyB9IGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoICggcHJvZHVjdCwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZ3JpZENsYXNzIH0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RWxldmVuIHByb2R1Y3Q9eyBwcm9kdWN0IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBTaG9wTGlzdE9uZSApOyJdLCJzb3VyY2VSb290IjoiIn0=