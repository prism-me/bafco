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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LW9uZS5qc3giXSwibmFtZXMiOlsiU2hvcExpc3RPbmUiLCJwcm9wcyIsImxvYWRpbmciLCJwcm9kdWN0cyIsInBlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImZha2VBcnJheSIsInNldEZha2VBcnJheSIsImdyaWRDbGFzcyIsInNldEdyaWRDbGFzcyIsInR5cGUiLCJxdWVyeSIsInVzZUVmZmVjdCIsInRlbXAiLCJpIiwicHVzaCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb2R1Y3QiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDb0JELEtBRHBCLENBQ2hCQyxPQURnQjtBQUFBLHdCQUNvQkQsS0FEcEIsQ0FDUEUsUUFETztBQUFBLE1BQ1BBLFFBRE8sZ0NBQ0ksRUFESjtBQUFBLE1BQ1FDLE9BRFIsR0FDb0JILEtBRHBCLENBQ1FHLE9BRFI7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGd0Isa0JBR1VDLCtDQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2pCQyxTQUhpQjtBQUFBLE1BR05DLFlBSE07O0FBQUEsbUJBSVVGLCtDQUFRLENBQUMsT0FBRCxDQUpsQjtBQUFBLE1BSWpCRyxTQUppQjtBQUFBLE1BSU5DLFlBSk07O0FBS3hCLE1BQU1DLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFELElBQTFCO0FBRUFFLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osT0FBcEIsRUFBNkJZLENBQUMsRUFBOUIsRUFBa0M7QUFDOUJELFVBQUksQ0FBQ0UsSUFBTCxDQUFVRCxDQUFWO0FBQ0g7O0FBQ0RQLGdCQUFZLENBQUNNLElBQUQsQ0FBWjtBQUNILEdBTlEsRUFNTixDQUFDWCxPQUFELENBTk0sQ0FBVDtBQVFBVSxrREFBUyxDQUFDLFlBQU07QUFDWjtBQUNBO0FBQ0E7QUFFQSxRQUFJRixJQUFJLEtBQUssTUFBVCxJQUFtQkEsSUFBSSxLQUFLLE9BQWhDLEVBQXlDRCxZQUFZLENBQUMsa0NBQUQsQ0FBWjtBQUN6QyxRQUFJQyxJQUFJLEtBQUssT0FBYixFQUFzQkQsWUFBWSxDQUFDLGtDQUFELENBQVo7QUFDdEIsUUFBSUMsSUFBSSxLQUFLLE9BQWIsRUFBc0JELFlBQVksQ0FBQyxrQ0FBRCxDQUFaO0FBRXpCLEdBVFEsRUFTTixDQUFDQyxJQUFELENBVE0sQ0FBVDtBQVdBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVNULFFBQVEsQ0FBQ2UsTUFBVCxJQUFtQixDQUFuQixJQUF3QixDQUFDaEIsT0FBMUIsR0FDSTtBQUNJLGFBQVMsRUFBQyxZQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREosR0FLSSxxRUFFUVUsSUFBSSxJQUFJLE1BQVIsR0FDSVYsT0FBTyxHQUNITSxTQUFTLENBQUNXLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNWO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQXdDLFNBQUcsRUFBRUEsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBZCxDQURHLEdBS0hsQixRQUFRLENBQUNnQixHQUFULENBQWEsVUFBQ0csT0FBRCxFQUFVRCxLQUFWO0FBQUEsV0FDVCxNQUFDLCtFQUFEO0FBQ0ksYUFBTyxFQUFFQyxPQURiO0FBRUksU0FBRyxFQUFFRCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQWIsQ0FOUixHQWFJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRbkIsT0FBTyxHQUNITSxTQUFTLENBQUNXLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNWO0FBQUssZUFBUyxFQUFFWCxTQUFoQjtBQUEyQixTQUFHLEVBQUVXLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURVO0FBQUEsR0FBZCxDQURHLEdBT0hsQixRQUFRLENBQUNnQixHQUFULENBQWEsVUFBQ0csT0FBRCxFQUFVRCxLQUFWO0FBQUEsV0FDVDtBQUFLLGVBQVMsRUFBRVgsU0FBaEI7QUFBMkIsU0FBRyxFQUFFVyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxpRkFBRDtBQUFlLGFBQU8sRUFBRUMsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRFM7QUFBQSxHQUFiLENBVFosQ0FmWixDQVBaLENBREo7QUE2Q0g7O0dBdkVRdEIsVztVQUVVTSxrRDs7O0tBRlZOLFc7QUF5RVQsK0RBQWUsbUJBQUF1QixpREFBQSxDQUFXdkIsV0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS41OTJiNzA3ODAwNWU1ZmU2MGJhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQcm9kdWN0TmluZSBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1uaW5lJztcclxuaW1wb3J0IFByb2R1Y3RFbGV2ZW4gZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QtZWxldmVuJztcclxuXHJcbmZ1bmN0aW9uIFNob3BMaXN0T25lKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIHByb2R1Y3RzID0gW10sIHBlclBhZ2UgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZmFrZUFycmF5LCBzZXRGYWtlQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2dyaWRDbGFzcywgc2V0R3JpZENsYXNzXSA9IHVzZVN0YXRlKCdjb2wtNicpO1xyXG4gICAgY29uc3QgdHlwZSA9IHJvdXRlci5xdWVyeS50eXBlO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlclBhZ2U7IGkrKykge1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEZha2VBcnJheSh0ZW1wKTtcclxuICAgIH0sIFtwZXJQYWdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmICh0eXBlID09PSAnbGlzdCcgfHwgdHlwZSA9PT0gJzJjb2xzJykgc2V0R3JpZENsYXNzKCdjb2wtNicpO1xyXG4gICAgICAgIC8vIGlmICh0eXBlID09PSAnM2NvbHMnKSBzZXRHcmlkQ2xhc3MoJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00Jyk7XHJcbiAgICAgICAgLy8gaWYgKHR5cGUgPT09ICc0Y29scycpIHNldEdyaWRDbGFzcygnY29sLTYgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTMnKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaXN0JyB8fCB0eXBlID09PSAnMmNvbHMnKSBzZXRHcmlkQ2xhc3MoJ2NvbC02IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC0zJyk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICczY29scycpIHNldEdyaWRDbGFzcygnY29sLTYgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTMnKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJzRjb2xzJykgc2V0R3JpZENsYXNzKCdjb2wtNiBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtMycpO1xyXG5cclxuICAgIH0sIFt0eXBlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMgbWItM1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdHMubGVuZ3RoID09IDAgJiYgIWxvYWRpbmcpID9cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1yZXN1bHRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+Tm8gcHJvZHVjdHMgbWF0Y2hpbmcgeW91ciBzZWxlY3Rpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09ICdsaXN0JyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZha2VBcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvIHNrZWwtcHJvLWxpc3RcIiBrZXk9e2luZGV4fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdE5pbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWtlQXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZENsYXNzfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZENsYXNzfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RWxldmVuIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNob3BMaXN0T25lKTsiXSwic291cmNlUm9vdCI6IiJ9