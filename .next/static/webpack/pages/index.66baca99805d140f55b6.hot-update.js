self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/features/posts/post-four.jsx":
/*!*************************************************!*\
  !*** ./components/features/posts/post-four.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\posts\\post-four.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function PostFour(props) {
  var post = props.post;
  var date = new Date(post.date);
  var options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  };
  return __jsx("article", {
    className: "entry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "entry-media",
    style: {
      paddingTop: "".concat(post.image[0].height / post.image[0].width * 100, "%")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/".concat(post.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "Post",
    src: "http://localhost:4000" + post.image[0].url,
    threshold: 500,
    effect: "blur",
    height: "auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "entry-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "entry-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, date.toLocaleDateString('en-US', options)), __jsx("span", {
    className: "meta-separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "|"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, post.comments, " Comments")), __jsx("h2", {
    className: "entry-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/".concat(post.slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, post.title)), __jsx("div", {
    className: "entry-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/".concat(post.slug),
    className: "read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Read More"))));
}

_c = PostFour;
/* harmony default export */ __webpack_exports__["default"] = (PostFour);

var _c;

$RefreshReg$(_c, "PostFour");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wb3N0cy9wb3N0LWZvdXIuanN4Il0sIm5hbWVzIjpbIlBvc3RGb3VyIiwicHJvcHMiLCJwb3N0IiwiZGF0ZSIsIkRhdGUiLCJvcHRpb25zIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidGltZVpvbmUiLCJwYWRkaW5nVG9wIiwiaW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsInNsdWciLCJwcm9jZXNzIiwidXJsIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29tbWVudHMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxDQUFvQkMsS0FBcEIsRUFBNEI7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDUEQsS0FETyxDQUNoQkMsSUFEZ0I7QUFHeEIsTUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBVUYsSUFBSSxDQUFDQyxJQUFmLENBQVg7QUFDQSxNQUFJRSxPQUFPLEdBQUc7QUFBRUMsUUFBSSxFQUFFLFNBQVI7QUFBbUJDLFNBQUssRUFBRSxPQUExQjtBQUFtQ0MsT0FBRyxFQUFFLFNBQXhDO0FBQW1EQyxZQUFRLEVBQUU7QUFBN0QsR0FBZDtBQUVBLFNBQ0k7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQWdDLFNBQUssRUFBRztBQUFFQyxnQkFBVSxZQUFLUixJQUFJLENBQUNTLEtBQUwsQ0FBWSxDQUFaLEVBQWdCQyxNQUFoQixHQUF5QlYsSUFBSSxDQUFDUyxLQUFMLENBQVksQ0FBWixFQUFnQkUsS0FBekMsR0FBaUQsR0FBdEQ7QUFBWixLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFPLFFBQUksaUNBQTJCWCxJQUFJLENBQUNZLElBQWhDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0ksTUFBQywwRUFBRDtBQUNJLE9BQUcsRUFBQyxNQURSO0FBRUksT0FBRyxFQUFHQyx1QkFBQSxHQUFvQ2IsSUFBSSxDQUFDUyxLQUFMLENBQVksQ0FBWixFQUFnQkssR0FGOUQ7QUFHSSxhQUFTLEVBQUcsR0FIaEI7QUFJSSxVQUFNLEVBQUMsTUFKWDtBQUtJLFVBQU0sRUFBQyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBREosRUFjSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQmIsSUFBSSxDQUFDYyxrQkFBTCxDQUF5QixPQUF6QixFQUFrQ1osT0FBbEMsQ0FBbEIsQ0FESixFQUVJO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosRUFHSSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkgsSUFBSSxDQUFDZ0IsUUFBdkIsY0FISixDQURKLEVBT0k7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFPLFFBQUksaUNBQTJCaEIsSUFBSSxDQUFDWSxJQUFoQyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTVosSUFBSSxDQUFDaUIsS0FEWCxDQURKLENBUEosRUFhSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxpQ0FBMkJqQixJQUFJLENBQUNZLElBQWhDLENBQVg7QUFBb0QsYUFBUyxFQUFDLFdBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosQ0FiSixDQWRKLENBREo7QUFrQ0g7O0tBeENRZCxRO0FBMENULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2YmFjYTk5ODA1ZDE0MGY1NWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIFBvc3RGb3VyICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoIHBvc3QuZGF0ZSApO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7IHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwiLCBkYXk6IFwiMi1kaWdpdFwiLCB0aW1lWm9uZTogXCJVVENcIiB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiZW50cnlcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJlbnRyeS1tZWRpYVwiIHN0eWxlPXsgeyBwYWRkaW5nVG9wOiBgJHtwb3N0LmltYWdlWyAwIF0uaGVpZ2h0IC8gcG9zdC5pbWFnZVsgMCBdLndpZHRoICogMTAwfSVgIH0gfT5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9ibG9nL3NpbmdsZS9kZWZhdWx0LyR7cG9zdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcG9zdC5pbWFnZVsgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+eyBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyggJ2VuLVVTJywgb3B0aW9ucyApIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1ldGEtc2VwYXJhdG9yXCI+fDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj57IHBvc3QuY29tbWVudHMgfSBDb21tZW50czwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZW50cnktdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvYmxvZy9zaW5nbGUvZGVmYXVsdC8ke3Bvc3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcG9zdC50aXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL2Jsb2cvc2luZ2xlL2RlZmF1bHQvJHtwb3N0LnNsdWd9YCB9IGNsYXNzTmFtZT1cInJlYWQtbW9yZVwiPlJlYWQgTW9yZTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlID5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3VyIl0sInNvdXJjZVJvb3QiOiIifQ==