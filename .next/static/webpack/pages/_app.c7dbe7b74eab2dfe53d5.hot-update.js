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
  }, __jsx("div", {
    className: "row no-gutters",
    style: {
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("nav", {
    className: "side-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "menu-vertical sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: query.category == 'electronics' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 97
    }
  }, "Top Management")), __jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 95
    }
  }, "Senior Management")), __jsx("li", {
    className: query.category == 'beds' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 90
    }
  }, "Majlis Area")), __jsx("li", {
    className: query.category == 'lighting' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 94
    }
  }, "Management Desk & Chairs")), __jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 109
    }
  }, "Workstation & Ergonomic Chairs")), __jsx("li", {
    className: query.category == 'storage' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 93
    }
  }, "Formal and Casual Meeting Area")), __jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 107
    }
  }, "Collaborative & Public Seating")), __jsx("li", {
    className: query.category == 'decoration' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 96
    }
  }, "Training Area & Pantry Area"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, "Comfort", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 85
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 91
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 97
    }
  }, "Executive Chairs"))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2F0ZWdvcnktbWVudS5qc3giXSwibmFtZXMiOlsiQ2F0ZWdvcnlNZW51IiwicXVlcnkiLCJ1c2VSb3V0ZXIiLCJhbGlnbkl0ZW1zIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUNwQixNQUFNQyxLQUFLLEdBQUdDLHNEQUFTLEdBQUdELEtBQTFCO0FBRUEsU0FDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLGFBQVMsRUFBQyxpQkFBMUI7QUFBNEMsU0FBSyxFQUFDLG1CQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxTQUFLLEVBQUU7QUFBQ0UsZ0JBQVUsRUFBRTtBQUFiLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVGLEtBQUssQ0FBQ0csUUFBTixJQUFrQixhQUFsQixHQUFrQyxRQUFsQyxHQUE2QyxFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdFLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixVQUFNLEVBQUUsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBaEUsQ0FESixFQUVJO0FBQUksYUFBUyxFQUFFSCxLQUFLLENBQUNHLFFBQU4sSUFBa0IsV0FBbEIsR0FBZ0MsUUFBaEMsR0FBMkMsRUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4RCxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsVUFBTSxFQUFFLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQTlELENBRkosRUFHSTtBQUFJLGFBQVMsRUFBRUgsS0FBSyxDQUFDRyxRQUFOLElBQWtCLE1BQWxCLEdBQTJCLFFBQTNCLEdBQXNDLEVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUQsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLFVBQU0sRUFBRSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF6RCxDQUhKLEVBSUk7QUFBSSxhQUFTLEVBQUVILEtBQUssQ0FBQ0csUUFBTixJQUFrQixVQUFsQixHQUErQixRQUEvQixHQUEwQyxFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZELE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixVQUFNLEVBQUUsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBN0QsQ0FKSixFQUtJO0FBQUksYUFBUyxFQUFFSCxLQUFLLENBQUNHLFFBQU4sSUFBa0IseUJBQWxCLEdBQThDLFFBQTlDLEdBQXlELEVBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEUsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLFVBQU0sRUFBRSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUE1RSxDQUxKLEVBTUk7QUFBSSxhQUFTLEVBQUVILEtBQUssQ0FBQ0csUUFBTixJQUFrQixTQUFsQixHQUE4QixRQUE5QixHQUF5QyxFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRELE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixVQUFNLEVBQUUsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBNUQsQ0FOSixFQU9JO0FBQUksYUFBUyxFQUFFSCxLQUFLLENBQUNHLFFBQU4sSUFBa0IsdUJBQWxCLEdBQTRDLFFBQTVDLEdBQXVELEVBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEUsTUFBQywrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLFVBQU0sRUFBRSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUExRSxDQVBKLEVBUUk7QUFBSSxhQUFTLEVBQUVILEtBQUssQ0FBQ0csUUFBTixJQUFrQixZQUFsQixHQUFpQyxRQUFqQyxHQUE0QyxFQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStELE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixVQUFNLEVBQUUsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBL0QsQ0FSSixDQURKLENBREosQ0FESixFQWVJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLHNDQUFUO0FBQWdELE9BQUcsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoRCxFQUFzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBTixDQUF0RCxDQURKLENBSEosQ0FESixDQURKLENBZkosQ0FESixDQUpKLENBREo7QUFxQ0g7O0dBeENRSixZO1VBQ1NFLGtEOzs7S0FEVEYsWTtBQTBDVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM3ZGJlN2I3NGVhYjJkZmU1M2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TWVudSgpIHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUm91dGVyKCkucXVlcnk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGNhdGVnb3J5LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIHRpdGxlPVwiQnJvd3NlIENhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt7YWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzaWRlLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtdmVydGljYWwgc2YtYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2VsZWN0cm9uaWNzJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiIHNjcm9sbD17ZmFsc2V9PlRvcCBNYW5hZ2VtZW50PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdnaWZ0LWlkZWEnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+U2VuaW9yIE1hbmFnZW1lbnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2JlZHMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+TWFqbGlzIEFyZWE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cXVlcnkuY2F0ZWdvcnkgPT0gJ2xpZ2h0aW5nJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiIHNjcm9sbD17ZmFsc2V9Pk1hbmFnZW1lbnQgRGVzayAmIENoYWlyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnc29mYXMtYW5kLXNsZWVwZXItc29mYXMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+V29ya3N0YXRpb24gJiBFcmdvbm9taWMgQ2hhaXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdzdG9yYWdlJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiIHNjcm9sbD17ZmFsc2V9PkZvcm1hbCBhbmQgQ2FzdWFsIE1lZXRpbmcgQXJlYTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnYXJtY2hhaXJzLWFuZC1jaGFpc2VzJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiIHNjcm9sbD17ZmFsc2V9PkNvbGxhYm9yYXRpdmUgJiBQdWJsaWMgU2VhdGluZzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnZGVjb3JhdGlvbicgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIiBzY3JvbGw9e2ZhbHNlfT5UcmFpbmluZyBBcmVhICYgUGFudHJ5IEFyZWE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9tZW51L2hhbWJ1cmdlci1tZW51LWltYWdlLnBuZ1wiIGFsdD1cIkJhbm5lclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5Db21mb3J0PGJyIC8+PHNwYW4+PHN0cm9uZz5FeGVjdXRpdmUgQ2hhaXJzPC9zdHJvbmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlNZW51OyAiXSwic291cmNlUm9vdCI6IiJ9