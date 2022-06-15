self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/partials/home/blog-collection.jsx":
/*!******************************************************!*\
  !*** ./components/partials/home/blog-collection.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js");
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_features_posts_post_four__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/posts/post-four */ "./components/features/posts/post-four.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\home\\blog-collection.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function BlogCollection(props) {
  var _this = this;

  var loading = props.loading,
      _props$posts = props.posts,
      posts = _props$posts === void 0 ? [] : _props$posts;
  return __jsx("section", {
    className: "blog-posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "title text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "From Our Blog"), loading || posts.length == 0 ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_4__.blogSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, [0, 1, 2, 3, 4].map(function (item, index) {
    return __jsx("div", {
      className: "skel-pro",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 37
      }
    });
  })) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_4__.blogSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, posts.map(function (item, index) {
    return __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_5__.default, {
      keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_4__.fadeIn,
      delay: 100,
      duration: 1000,
      triggerOnce: true,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 37
      }
    }, __jsx(_components_features_posts_post_four__WEBPACK_IMPORTED_MODULE_3__.default, {
      post: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 41
      }
    }));
  })), __jsx("div", {
    className: "text-center mb-7 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "btn btn-outline-darker btn-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 81
    }
  }, "View more articles"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 112
    }
  })))));
}

_c = BlogCollection;
/* harmony default export */ __webpack_exports__["default"] = (BlogCollection);

var _c;

$RefreshReg$(_c, "BlogCollection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2Jsb2ctY29sbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiQmxvZ0NvbGxlY3Rpb24iLCJwcm9wcyIsImxvYWRpbmciLCJwb3N0cyIsImxlbmd0aCIsImJsb2dTbGlkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmYWRlSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsY0FBVCxDQUEwQkMsS0FBMUIsRUFBa0M7QUFBQTs7QUFBQSxNQUN0QkMsT0FEc0IsR0FDRUQsS0FERixDQUN0QkMsT0FEc0I7QUFBQSxxQkFDRUQsS0FERixDQUNiRSxLQURhO0FBQUEsTUFDYkEsS0FEYSw2QkFDTCxFQURLO0FBRzlCLFNBQ0k7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFJVUQsT0FBTyxJQUFJQyxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsQ0FBN0IsR0FDSSxNQUFDLHNFQUFEO0FBQWEsV0FBTyxFQUFDLDREQUFyQjtBQUFrRixXQUFPLEVBQUdDLG1EQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFrQkMsR0FBbEIsQ0FBdUIsVUFBRUMsSUFBRixFQUFRQyxLQUFSO0FBQUEsV0FDbkI7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFHLEVBQUdBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEbUI7QUFBQSxHQUF2QixDQUZSLENBREosR0FTSSxNQUFDLHNFQUFEO0FBQWEsV0FBTyxFQUFDLDREQUFyQjtBQUFrRixXQUFPLEVBQUdILG1EQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR1FGLEtBQUssQ0FBQ0csR0FBTixDQUFXLFVBQUVDLElBQUYsRUFBUUMsS0FBUjtBQUFBLFdBQ1AsTUFBQyx5REFBRDtBQUFRLGVBQVMsRUFBR0MsK0NBQXBCO0FBQTZCLFdBQUssRUFBRyxHQUFyQztBQUEyQyxjQUFRLEVBQUcsSUFBdEQ7QUFBNkQsaUJBQVcsTUFBeEU7QUFDSSxTQUFHLEVBQUdELEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMseUVBQUQ7QUFBVSxVQUFJLEVBQUdELElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURPO0FBQUEsR0FBWCxDQUhSLENBYlosRUEwQkk7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixhQUFTLEVBQUMsaUNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBNUQsRUFBMkY7QUFBRyxhQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEzRixDQURKLENBMUJKLENBREosQ0FESjtBQWtDSDs7S0FyQ1FQLGM7QUF1Q1QsK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGMzYzVmNThiOGVmNTcyZjUyZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXZlYWwgZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuaW1wb3J0IFBvc3RGb3VyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wb3N0cy9wb3N0LWZvdXInO1xyXG5cclxuaW1wb3J0IHsgZmFkZUluLCBibG9nU2xpZGVyIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIEJsb2dDb2xsZWN0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIHBvc3RzID0gW10gfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1wb3N0c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyXCI+RnJvbSBPdXIgQmxvZzwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwb3N0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMtbGctMyBjb2xzLXNtLTIgY29scy0xXCIgb3B0aW9ucz17IGJsb2dTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDAsIDEsIDIsIDMsIDQgXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCIga2V5PXsgaW5kZXggfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMtbGctMyBjb2xzLXNtLTIgY29scy0xXCIgb3B0aW9ucz17IGJsb2dTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17IGZhZGVJbiB9IGRlbGF5PXsgMTAwIH0gZHVyYXRpb249eyAxMDAwIH0gdHJpZ2dlck9uY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEZvdXIgcG9zdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTcgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrZXIgYnRuLW1vcmVcIj48c3Bhbj5WaWV3IG1vcmUgYXJ0aWNsZXM8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NvbGxlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==