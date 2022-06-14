self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/partials/header/partials/category-menu.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/category-menu.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\category-menu.jsx",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CategoryMenu() {
  _s();

  var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  return __jsx("div", {
    className: "dropdown category-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "dropdown-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "side-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "menu-vertical sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: query.category == 'electronics' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=electronics",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 91
    }
  }, "Electronics")), __jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 89
    }
  }, "Gift Ideas")), __jsx("li", {
    className: query.category == 'beds' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=beds",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 84
    }
  }, "Beds")), __jsx("li", {
    className: query.category == 'lighting' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=lighting",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 88
    }
  }, "Lighting")), __jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 103
    }
  }, "Sofas & Sleeper sofas")), __jsx("li", {
    className: query.category == 'storage' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=storage",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 87
    }
  }, "Storage")), __jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 101
    }
  }, "Armchairs & Chaises")), __jsx("li", {
    className: query.category == 'decoration' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=decoration",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 90
    }
  }, "Decoration ")), __jsx("li", {
    className: query.category == 'kitchen-cabinets' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 96
    }
  }, "Kitchen Cabinets")), __jsx("li", {
    className: query.category == 'coffee-and-tables' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 97
    }
  }, "Coffee & Tables")), __jsx("li", {
    className: query.category == 'furniture' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=furniture",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 89
    }
  }, "Outdoor Furniture "))))));
}

_s(CategoryMenu, "CeygcqajjFExIxFEzW4x/gfWEGQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = CategoryMenu;
/* harmony default export */ __webpack_exports__["default"] = (CategoryMenu);

var _c;

$RefreshReg$(_c, "CategoryMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2F0ZWdvcnktbWVudS5qc3giXSwibmFtZXMiOlsiQ2F0ZWdvcnlNZW51IiwicXVlcnkiLCJ1c2VSb3V0ZXIiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxZQUFULEdBQXlCO0FBQUE7O0FBQ3JCLE1BQU1DLEtBQUssR0FBR0Msc0RBQVMsR0FBR0QsS0FBMUI7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUdBLEtBQUssQ0FBQ0UsUUFBTixJQUFrQixhQUFsQixHQUFrQyxRQUFsQyxHQUE2QyxFQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsMENBQVo7QUFBdUQsVUFBTSxFQUFHLEtBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWxFLENBREosRUFFSTtBQUFJLGFBQVMsRUFBR0YsS0FBSyxDQUFDRSxRQUFOLElBQWtCLFdBQWxCLEdBQWdDLFFBQWhDLEdBQTJDLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0UsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyx3Q0FBWjtBQUFxRCxVQUFNLEVBQUcsS0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBaEUsQ0FGSixFQUdJO0FBQUksYUFBUyxFQUFHRixLQUFLLENBQUNFLFFBQU4sSUFBa0IsTUFBbEIsR0FBMkIsUUFBM0IsR0FBc0MsRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyRCxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLG1DQUFaO0FBQWdELFVBQU0sRUFBRyxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTNELENBSEosRUFJSTtBQUFJLGFBQVMsRUFBR0YsS0FBSyxDQUFDRSxRQUFOLElBQWtCLFVBQWxCLEdBQStCLFFBQS9CLEdBQTBDLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0QsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyx1Q0FBWjtBQUFvRCxVQUFNLEVBQUcsS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBL0QsQ0FKSixFQUtJO0FBQUksYUFBUyxFQUFHRixLQUFLLENBQUNFLFFBQU4sSUFBa0IseUJBQWxCLEdBQThDLFFBQTlDLEdBQXlELEVBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEUsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxzREFBWjtBQUFtRSxVQUFNLEVBQUcsS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBOUUsQ0FMSixFQU1JO0FBQUksYUFBUyxFQUFHRixLQUFLLENBQUNFLFFBQU4sSUFBa0IsU0FBbEIsR0FBOEIsUUFBOUIsR0FBeUMsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4RCxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLHNDQUFaO0FBQW1ELFVBQU0sRUFBRyxLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlELENBTkosRUFPSTtBQUFJLGFBQVMsRUFBR0YsS0FBSyxDQUFDRSxRQUFOLElBQWtCLHVCQUFsQixHQUE0QyxRQUE1QyxHQUF1RCxFQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsb0RBQVo7QUFBaUUsVUFBTSxFQUFHLEtBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTVFLENBUEosRUFRSTtBQUFJLGFBQVMsRUFBR0YsS0FBSyxDQUFDRSxRQUFOLElBQWtCLFlBQWxCLEdBQWlDLFFBQWpDLEdBQTRDLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUUsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyx5Q0FBWjtBQUFzRCxVQUFNLEVBQUcsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBakUsQ0FSSixFQVNJO0FBQUksYUFBUyxFQUFHRixLQUFLLENBQUNFLFFBQU4sSUFBa0Isa0JBQWxCLEdBQXVDLFFBQXZDLEdBQWtELEVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUUsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQywrQ0FBWjtBQUE0RCxVQUFNLEVBQUcsS0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBdkUsQ0FUSixFQVVJO0FBQUksYUFBUyxFQUFHRixLQUFLLENBQUNFLFFBQU4sSUFBa0IsbUJBQWxCLEdBQXdDLFFBQXhDLEdBQW1ELEVBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0UsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxnREFBWjtBQUE2RCxVQUFNLEVBQUcsS0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEUsQ0FWSixFQVdJO0FBQUksYUFBUyxFQUFHRixLQUFLLENBQUNFLFFBQU4sSUFBa0IsV0FBbEIsR0FBZ0MsUUFBaEMsR0FBMkMsRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLHdDQUFaO0FBQXFELFVBQU0sRUFBRyxLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFoRSxDQVhKLENBREosQ0FESixDQUxKLENBREo7QUF5Qkg7O0dBNUJRSCxZO1VBQ1NFLGtEOzs7S0FEVEYsWTtBQThCVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjk2N2Y5ZjE5N2IxZWUzMTk2ZjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TWVudSAoKSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBjYXRlZ29yeS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICB7LyogPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiB0aXRsZT1cIkJyb3dzZSBDYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9BTGluaz4gKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS12ZXJ0aWNhbCBzZi1hcnJvd3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdlbGVjdHJvbmljcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWVsZWN0cm9uaWNzXCIgc2Nyb2xsPXsgZmFsc2UgfT5FbGVjdHJvbmljczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdnaWZ0LWlkZWEnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1naWZ0LWlkZWFcIiBzY3JvbGw9eyBmYWxzZSB9PkdpZnQgSWRlYXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnYmVkcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWJlZHNcIiBzY3JvbGw9eyBmYWxzZSB9PkJlZHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnbGlnaHRpbmcnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1saWdodGluZ1wiIHNjcm9sbD17IGZhbHNlIH0+TGlnaHRpbmc8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnc29mYXMtYW5kLXNsZWVwZXItc29mYXMnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zb2Zhcy1hbmQtc2xlZXBlci1zb2Zhc1wiIHNjcm9sbD17IGZhbHNlIH0+U29mYXMgJiBTbGVlcGVyIHNvZmFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ3N0b3JhZ2UnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zdG9yYWdlXCIgc2Nyb2xsPXsgZmFsc2UgfT5TdG9yYWdlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ2FybWNoYWlycy1hbmQtY2hhaXNlcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWFybWNoYWlycy1hbmQtY2hhaXNlc1wiIHNjcm9sbD17IGZhbHNlIH0+QXJtY2hhaXJzICYgQ2hhaXNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdkZWNvcmF0aW9uJyA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZGVjb3JhdGlvblwiIHNjcm9sbD17IGZhbHNlIH0+RGVjb3JhdGlvbiA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAna2l0Y2hlbi1jYWJpbmV0cycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWtpdGNoZW4tY2FiaW5ldHNcIiBzY3JvbGw9eyBmYWxzZSB9PktpdGNoZW4gQ2FiaW5ldHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnY29mZmVlLWFuZC10YWJsZXMnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1jb2ZmZWUtYW5kLXRhYmxlc1wiIHNjcm9sbD17IGZhbHNlIH0+Q29mZmVlICYgVGFibGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ2Z1cm5pdHVyZScgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWZ1cm5pdHVyZVwiIHNjcm9sbD17IGZhbHNlIH0+T3V0ZG9vciBGdXJuaXR1cmUgPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeU1lbnU7ICJdLCJzb3VyY2VSb290IjoiIn0=