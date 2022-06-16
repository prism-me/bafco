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
    if (type === 'list' || type === '2cols') setGridClass('col-6');
    if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4');
    if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
  }, [type]);
  return __jsx("div", {
    className: "products mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "No products matching your selection.") : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, type == 'list' ? loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: "skel-pro skel-pro-list",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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
        lineNumber: 45,
        columnNumber: 41
      }
    });
  }) : __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, loading ? fakeArray.map(function (item, index) {
    return __jsx("div", {
      className: gridClass,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "skel-pro",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
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
        lineNumber: 61,
        columnNumber: 49
      }
    }, __jsx(_components_features_products_product_eleven__WEBPACK_IMPORTED_MODULE_3__.default, {
      product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LW9uZS5qc3giXSwibmFtZXMiOlsiU2hvcExpc3RPbmUiLCJwcm9wcyIsImxvYWRpbmciLCJwcm9kdWN0cyIsInBlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImZha2VBcnJheSIsInNldEZha2VBcnJheSIsImdyaWRDbGFzcyIsInNldEdyaWRDbGFzcyIsInR5cGUiLCJxdWVyeSIsInVzZUVmZmVjdCIsInRlbXAiLCJpIiwicHVzaCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb2R1Y3QiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDb0JELEtBRHBCLENBQ2hCQyxPQURnQjtBQUFBLHdCQUNvQkQsS0FEcEIsQ0FDUEUsUUFETztBQUFBLE1BQ1BBLFFBRE8sZ0NBQ0ksRUFESjtBQUFBLE1BQ1FDLE9BRFIsR0FDb0JILEtBRHBCLENBQ1FHLE9BRFI7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGd0Isa0JBR1VDLCtDQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2pCQyxTQUhpQjtBQUFBLE1BR05DLFlBSE07O0FBQUEsbUJBSVVGLCtDQUFRLENBQUMsT0FBRCxDQUpsQjtBQUFBLE1BSWpCRyxTQUppQjtBQUFBLE1BSU5DLFlBSk07O0FBS3hCLE1BQU1DLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFELElBQTFCO0FBRUFFLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osT0FBcEIsRUFBNkJZLENBQUMsRUFBOUIsRUFBa0M7QUFDOUJELFVBQUksQ0FBQ0UsSUFBTCxDQUFVRCxDQUFWO0FBQ0g7O0FBQ0RQLGdCQUFZLENBQUNNLElBQUQsQ0FBWjtBQUNILEdBTlEsRUFNTixDQUFDWCxPQUFELENBTk0sQ0FBVDtBQVFBVSxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixJQUFJLEtBQUssTUFBVCxJQUFtQkEsSUFBSSxLQUFLLE9BQWhDLEVBQXlDRCxZQUFZLENBQUMsT0FBRCxDQUFaO0FBQ3pDLFFBQUlDLElBQUksS0FBSyxPQUFiLEVBQXNCRCxZQUFZLENBQUMseUJBQUQsQ0FBWjtBQUN0QixRQUFJQyxJQUFJLEtBQUssT0FBYixFQUFzQkQsWUFBWSxDQUFDLGtDQUFELENBQVo7QUFDekIsR0FKUSxFQUlOLENBQUNDLElBQUQsQ0FKTSxDQUFUO0FBTUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFU1QsUUFBUSxDQUFDZSxNQUFULElBQW1CLENBQW5CLElBQXdCLENBQUNoQixPQUExQixHQUNJO0FBQ0ksYUFBUyxFQUFDLFlBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FESixHQUtJLHFFQUVRVSxJQUFJLElBQUksTUFBUixHQUNJVixPQUFPLEdBQ0hNLFNBQVMsQ0FBQ1csR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBd0MsU0FBRyxFQUFFQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFkLENBREcsR0FLSGxCLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFDRyxPQUFELEVBQVVELEtBQVY7QUFBQSxXQUNULE1BQUMsK0VBQUQ7QUFDSSxhQUFPLEVBQUVDLE9BRGI7QUFFSSxTQUFHLEVBQUVELEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBYixDQU5SLEdBYUk7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFuQixPQUFPLEdBQ0hNLFNBQVMsQ0FBQ1csR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUVYLFNBQWhCO0FBQTJCLFNBQUcsRUFBRVcsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRFU7QUFBQSxHQUFkLENBREcsR0FPSGxCLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFDRyxPQUFELEVBQVVELEtBQVY7QUFBQSxXQUNUO0FBQUssZUFBUyxFQUFFWCxTQUFoQjtBQUEyQixTQUFHLEVBQUVXLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGlGQUFEO0FBQWUsYUFBTyxFQUFFQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FEUztBQUFBLEdBQWIsQ0FUWixDQWZaLENBUFosQ0FESjtBQTZDSDs7R0FsRVF0QixXO1VBRVVNLGtEOzs7S0FGVk4sVztBQW9FVCwrREFBZSxtQkFBQXVCLGlEQUFBLENBQVd2QixXQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLjBlMWRlNWFkZjFjYjk5MzVhNzgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFByb2R1Y3ROaW5lIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LW5pbmUnO1xyXG5pbXBvcnQgUHJvZHVjdEVsZXZlbiBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1lbGV2ZW4nO1xyXG5cclxuZnVuY3Rpb24gU2hvcExpc3RPbmUocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgcHJvZHVjdHMgPSBbXSwgcGVyUGFnZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtmYWtlQXJyYXksIHNldEZha2VBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ3JpZENsYXNzLCBzZXRHcmlkQ2xhc3NdID0gdXNlU3RhdGUoJ2NvbC02Jyk7XHJcbiAgICBjb25zdCB0eXBlID0gcm91dGVyLnF1ZXJ5LnR5cGU7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyUGFnZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlbXAucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RmFrZUFycmF5KHRlbXApO1xyXG4gICAgfSwgW3BlclBhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaXN0JyB8fCB0eXBlID09PSAnMmNvbHMnKSBzZXRHcmlkQ2xhc3MoJ2NvbC02Jyk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICczY29scycpIHNldEdyaWRDbGFzcygnY29sLTYgY29sLW1kLTQgY29sLWxnLTQnKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJzRjb2xzJykgc2V0R3JpZENsYXNzKCdjb2wtNiBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtMycpO1xyXG4gICAgfSwgW3R5cGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cyBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0cy5sZW5ndGggPT0gMCAmJiAhbG9hZGluZykgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXJlc3VsdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5ObyBwcm9kdWN0cyBtYXRjaGluZyB5b3VyIHNlbGVjdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT0gJ2xpc3QnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFrZUFycmF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm8gc2tlbC1wcm8tbGlzdFwiIGtleT17aW5kZXh9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TmluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZha2VBcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkQ2xhc3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkQ2xhc3N9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RFbGV2ZW4gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcExpc3RPbmUpOyJdLCJzb3VyY2VSb290IjoiIn0=