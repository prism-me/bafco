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
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "dropdown-toggle",
    title: "Browse Categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "dropdown-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "side-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "menu-vertical sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: query.category == 'electronics' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=electronics",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 89
    }
  }, "Electronics")), __jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 87
    }
  }, "Gift Ideas")), __jsx("li", {
    className: query.category == 'beds' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=beds",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 82
    }
  }, "Beds")), __jsx("li", {
    className: query.category == 'lighting' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=lighting",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 86
    }
  }, "Lighting")), __jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 101
    }
  }, "Sofas & Sleeper sofas")), __jsx("li", {
    className: query.category == 'storage' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=storage",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 85
    }
  }, "Storage")), __jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 99
    }
  }, "Armchairs & Chaises")), __jsx("li", {
    className: query.category == 'decoration' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=decoration",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 88
    }
  }, "Decoration ")), __jsx("li", {
    className: query.category == 'kitchen-cabinets' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 94
    }
  }, "Kitchen Cabinets")), __jsx("li", {
    className: query.category == 'coffee-and-tables' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 95
    }
  }, "Coffee & Tables")), __jsx("li", {
    className: query.category == 'furniture' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=furniture",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 87
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2F0ZWdvcnktbWVudS5qc3giXSwibmFtZXMiOlsiQ2F0ZWdvcnlNZW51IiwicXVlcnkiLCJ1c2VSb3V0ZXIiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQ3BCLE1BQU1DLEtBQUssR0FBR0Msc0RBQVMsR0FBR0QsS0FBMUI7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFDLGlCQUExQjtBQUE0QyxTQUFLLEVBQUMsbUJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUlJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBRUEsS0FBSyxDQUFDRSxRQUFOLElBQWtCLGFBQWxCLEdBQWtDLFFBQWxDLEdBQTZDLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0UsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQywwQ0FBWjtBQUF1RCxVQUFNLEVBQUUsS0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBaEUsQ0FESixFQUVJO0FBQUksYUFBUyxFQUFFRixLQUFLLENBQUNFLFFBQU4sSUFBa0IsV0FBbEIs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QU8sUUFBSSxFQUFDLGdEQUFaO0FBQTZELFVBQU0sRUFBRSxLQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF0RSxDQVZKLEVBV0k7QUFBSSxhQUFTLEVBQUVGLEtBQUssQ0FBQ0UsUUFBTixJQUFrQixXQUFsQixHQUFnQyxRQUFoQyxHQUEyQyxFQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThELE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsd0NBQVo7QUFBcUQsVUFBTSxFQUFFLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTlELENBWEosQ0FESixDQURKLENBSkosQ0FESjtBQXdCSDs7R0EzQlFILFk7VUFDU0Usa0Q7OztLQURURixZO0FBNkJULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTMzNjY0Y2MyNGVhOTExMDRkMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnlNZW51KCkge1xyXG4gICAgY29uc3QgcXVlcnkgPSB1c2VSb3V0ZXIoKS5xdWVyeTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gY2F0ZWdvcnktZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGl0bGU9XCJCcm93c2UgQ2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNpZGUtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtdmVydGljYWwgc2YtYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdlbGVjdHJvbmljcycgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZWxlY3Ryb25pY3NcIiBzY3JvbGw9e2ZhbHNlfT5FbGVjdHJvbmljczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2dpZnQtaWRlYScgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9Z2lmdC1pZGVhXCIgc2Nyb2xsPXtmYWxzZX0+R2lmdCBJZGVhczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2JlZHMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWJlZHNcIiBzY3JvbGw9e2ZhbHNlfT5CZWRzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnbGlnaHRpbmcnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWxpZ2h0aW5nXCIgc2Nyb2xsPXtmYWxzZX0+TGlnaHRpbmc8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdzb2Zhcy1hbmQtc2xlZXBlci1zb2ZhcycgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9c29mYXMtYW5kLXNsZWVwZXItc29mYXNcIiBzY3JvbGw9e2ZhbHNlfT5Tb2ZhcyAmIFNsZWVwZXIgc29mYXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdzdG9yYWdlJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zdG9yYWdlXCIgc2Nyb2xsPXtmYWxzZX0+U3RvcmFnZTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2FybWNoYWlycy1hbmQtY2hhaXNlcycgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9YXJtY2hhaXJzLWFuZC1jaGFpc2VzXCIgc2Nyb2xsPXtmYWxzZX0+QXJtY2hhaXJzICYgQ2hhaXNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2RlY29yYXRpb24nID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWRlY29yYXRpb25cIiBzY3JvbGw9e2ZhbHNlfT5EZWNvcmF0aW9uIDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2tpdGNoZW4tY2FiaW5ldHMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWtpdGNoZW4tY2FiaW5ldHNcIiBzY3JvbGw9e2ZhbHNlfT5LaXRjaGVuIENhYmluZXRzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnY29mZmVlLWFuZC10YWJsZXMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWNvZmZlZS1hbmQtdGFibGVzXCIgc2Nyb2xsPXtmYWxzZX0+Q29mZmVlICYgVGFibGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnZnVybml0dXJlJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1mdXJuaXR1cmVcIiBzY3JvbGw9e2ZhbHNlfT5PdXRkb29yIEZ1cm5pdHVyZSA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5TWVudTsgIl0sInNvdXJjZVJvb3QiOiIifQ==