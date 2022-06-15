self["webpackHotUpdate_N_E"]("pages/pages/about",{

/***/ "./components/features/page-header.jsx":
/*!*********************************************!*\
  !*** ./components/features/page-header.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\page-header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function PageHeader(props) {
  var title = props.title,
      subTitle = props.subTitle;
  return __jsx("div", {
    className: "page-header text-center",
    style: {
      backgroundImage: "url(images/page-header-bg.jpg)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "page-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, title, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 53
    }
  }, subTitle))));
}

_c = PageHeader;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(PageHeader));

var _c, _c2;

$RefreshReg$(_c, "PageHeader");
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


/***/ }),

/***/ "./pages/pages/about.jsx":
/*!*******************************!*\
  !*** ./pages/pages/about.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/page-header */ "./components/features/page-header.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\pages\\about.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function About() {
  _s();

  var _this = this;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.countTo)();
  }, []);
  return __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "About us 2",
    subTitle: "Pages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("nav", {
    className: "breadcrumb-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Pages")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "About us 2")))), __jsx("div", {
    className: "page-content pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "about-text text-center mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "title text-center mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "Who We Are"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. "), __jsx("img", {
    src: "images/about/about-2/signature.png",
    alt: "signature",
    className: "mx-auto mb-5",
    width: "140",
    height: "46",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }), __jsx("img", {
    src: "images/about/about-2/img-1.jpg",
    alt: "temp",
    className: "mx-auto mb-6",
    width: "933",
    height: "390",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "icon-box icon-box-sm text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "icon-puzzle-piece",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "icon-box-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, "Design Quality"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 129
    }
  }), "eu augue.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "icon-box icon-box-sm text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "icon-life-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "icon-box-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, "Professional Support"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, "Praesent dapibus, neque id cursus faucibus, ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 84
    }
  }), "tortor neque egestas augue, eu vulputate ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 131
    }
  }), "magna eros eu erat. ")))), __jsx("div", {
    className: "col-lg-4 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "icon-box icon-box-sm text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "icon-heart-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "icon-box-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, "Made With Love"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "Pellentesque a diam sit amet mi ullamcorper ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 84
    }
  }), "vehicula. Nullam quis massa sit amet ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 127
    }
  }), "nibh viverra malesuada.")))))), __jsx("div", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "bg-image pt-7 pb-5 pt-md-12 pb-md-9",
    style: {
      backgroundImage: "url(images/backgrounds/bg-4.jpg)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-6 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "count-container text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "count-wrapper text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "count",
    "data-from": "0",
    "data-to": "40",
    "data-speed": "3000",
    "data-refresh-interval": "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }, "0"), "k+"), __jsx("h3", {
    className: "count-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, "Happy Customer"))), __jsx("div", {
    className: "col-6 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "count-container text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "count-wrapper text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "count",
    "data-from": "0",
    "data-to": "20",
    "data-speed": "3000",
    "data-refresh-interval": "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, "0"), "+"), __jsx("h3", {
    className: "count-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, "Years in Business"))), __jsx("div", {
    className: "col-6 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "count-container text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "count-wrapper text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "count",
    "data-from": "0",
    "data-to": "95",
    "data-speed": "3000",
    "data-refresh-interval": "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "0"), "%"), __jsx("h3", {
    className: "count-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 37
    }
  }, "Return Clients"))), __jsx("div", {
    className: "col-6 col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "count-container text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "count-wrapper text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "count",
    "data-from": "0",
    "data-to": "15",
    "data-speed": "3000",
    "data-refresh-interval": "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, "0")), __jsx("h3", {
    className: "count-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, "Awards Won")))))), __jsx("div", {
    className: "bg-light-2 pt-6 pb-7 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "title text-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, "Meet Our Team"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-1.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 41
    }
  }, "Samanta Grey", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 82
    }
  }, "Founder & CEO"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-2.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 41
    }
  }, "Bruce Sutton", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 82
    }
  }, "Sales & Marketing Manager"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-3.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }, "Janet Joy", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 79
    }
  }, "Product Manager"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-4.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 41
    }
  }, "Mark Pocket", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 81
    }
  }, "Product Manager"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-5.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 41
    }
  }, "Damion Blue", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 81
    }
  }, "Sales & Marketing Manager"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-6.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }, "Lenard Smith", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 82
    }
  }, "Product Manager"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-7.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 41
    }
  }, "Rachel Green", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 82
    }
  }, "Product Manager"))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "member member-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 33
    }
  }, __jsx("figure", {
    className: "member-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/team/about-2/member-8.jpg",
    alt: "member photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 41
    }
  }), __jsx("figcaption", {
    className: "member-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "social-icons social-icons-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 106
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 105
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 49
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 107
    }
  }))))), __jsx("div", {
    className: "member-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "member-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 41
    }
  }, "David Doe", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 79
    }
  }, "Product Manager")))))), __jsx("div", {
    className: "text-center mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "/blog/classic",
    className: "btn btn-sm btn-minwidth-lg btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 33
    }
  }, "LETS START WORK"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "brands-text text-center mx-auto mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 33
    }
  }, "The world's premium design brands in one destination."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 33
    }
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis")), __jsx("div", {
    className: "brands-display",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, _utils_data__WEBPACK_IMPORTED_MODULE_4__.homeData.brands.slice(0, 8).map(function (brand, index) {
    return __jsx("div", {
      className: "col-6 col-sm-4 col-md-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 45
      }
    }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#",
      className: "brand",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 49
      }
    }, __jsx("img", {
      src: brand.image,
      alt: "Brand Name",
      width: brand.width,
      height: brand.height,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 53
      }
    })));
  }))))))));
}

_s(About, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(About));

var _c, _c2;

$RefreshReg$(_c, "About");
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


/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartPriceTotal": function() { return /* binding */ cartPriceTotal; },
/* harmony export */   "cartQtyTotal": function() { return /* binding */ cartQtyTotal; },
/* harmony export */   "isInCart": function() { return /* binding */ isInCart; },
/* harmony export */   "canAddToCart": function() { return /* binding */ canAddToCart; },
/* harmony export */   "isInWishlist": function() { return /* binding */ isInWishlist; },
/* harmony export */   "isInCompare": function() { return /* binding */ isInCompare; },
/* harmony export */   "isSafariBrowser": function() { return /* binding */ isSafariBrowser; },
/* harmony export */   "isEdgeBrowser": function() { return /* binding */ isEdgeBrowser; },
/* harmony export */   "getIndex": function() { return /* binding */ getIndex; },
/* harmony export */   "catFilter": function() { return /* binding */ catFilter; },
/* harmony export */   "attrFilter": function() { return /* binding */ attrFilter; },
/* harmony export */   "scrollToPageContent": function() { return /* binding */ scrollToPageContent; },
/* harmony export */   "parallax": function() { return /* binding */ parallax; },
/* harmony export */   "countTo": function() { return /* binding */ countTo; },
/* harmony export */   "safeContent": function() { return /* binding */ safeContent; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/**
 * get total Price of products in cart.
 * @param { Array } cartItems 
 * @return { Float } totalPrice
 */
var cartPriceTotal = function cartPriceTotal(cartItems) {
  return cartItems.reduce(function (acc, cur) {
    return acc + cur.sum;
  }, 0);
};
/**
 * get number of products in cart
 * @param { Array } cartItems 
 * @return { Integer } numbers of cart items in cartlist
 */

var cartQtyTotal = function cartQtyTotal(cartItems) {
  return cartItems.reduce(function (acc, cur) {
    return acc + parseInt(cur.qty, 10);
  }, 0);
};
/**
 * Decide where product is in cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 */

var isInCart = function isInCart(cartItems, product) {
  return cartItems.find(function (item) {
    return item.id == product.id;
  }) ? true : false;
};
/**
 * Confirm if product could be added to cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 * @param { Number } qty 
 */

var canAddToCart = function canAddToCart(cartItems, product, qty) {
  var find = cartItems.find(function (item) {
    return item.id == product.id;
  });

  if (find) {
    if (product.stock == 0 || product.stock < find.qty + qty) return false;else return true;
  } else {
    if (product.stock == 0 || product.stock < qty) return false;else return true;
  }
};
/**
 * 
 * @param {Array} wishlist 
 * @param {Object} product 
 */

var isInWishlist = function isInWishlist(wishlist, product) {
  return product && wishlist.findIndex(function (item) {
    return item.slug == product.slug;
  }) > -1;
};
/**
 * 
 * @param {Array} compare 
 * @param {Object} product 
 */

var isInCompare = function isInCompare(compare, product) {
  return product && compare.findIndex(function (item) {
    return item.slug == product.slug;
  }) > -1;
};
/**
 * utils to detect safari browser
 * @return {bool}
 */

var isSafariBrowser = function isSafariBrowser() {
  var sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1) return true;
  return false;
};
/**
 * utils to detect Edge browser
 * @return {bool}
 */

var isEdgeBrowser = function isEdgeBrowser() {
  var sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};
/**
 * get index of the element
 * @param {Element} element 
 */

var getIndex = function getIndex(element) {
  var children = element.parentElement.children;

  for (var i = 0; i < children.length; i++) {
    if (element == children[i]) return i;
  }

  return 0;
};
/**
 * filter products by category.
 * @param {Array} products 
 * @param {Array} category 
 * @param {Boolean} flag 
 */

var catFilter = function catFilter() {
  var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var category = arguments.length > 1 ? arguments[1] : undefined;
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (category[0] === 'All') return products;
  return products.filter(function (item) {
    var _loop = function _loop(i) {
      if (item.category.find(function (cat) {
        return cat.slug == category[i];
      })) {
        if (!flag) return {
          v: true
        };
      } else {
        if (flag) return {
          v: false
        };
      }
    };

    for (var i = 0; i < category.length; i++) {
      var _ret = _loop(i);

      if (typeof _ret === "object") return _ret.v;
    }

    if (flag) return true;else return false;
  });
};
/**
 * filter products by attribute
 * @param {Array} products 
 * @param {String} attr 
 */

var attrFilter = function attrFilter() {
  var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var attr = arguments.length > 1 ? arguments[1] : undefined;
  // if(products)
  return products.filter(function (item) {
    if (attr === 'all') {
      return true;
    }

    if (attr === 'sale' && item.sale_price) {
      return true;
    }

    if (attr === 'rated' && item.ratings > 3) {
      return true;
    }

    if (attr === 'until' && item.until) {
      return true;
    }

    return item[attr] === true;
  });
};
/**
 * Scrolling to Page content section
 */

var scrollToPageContent = function scrollToPageContent() {
  var to = document.querySelector('.page-content').offsetTop - 74;

  if (isSafariBrowser() || isEdgeBrowser()) {
    var pos = window.pageYOffset;
    var timerId = setInterval(function () {
      if (pos <= to) clearInterval(timerId);else {
        window.scrollBy(0, -120);
        pos -= 120;
      }
    }, 1);
  } else {
    window.scrollTo({
      top: to,
      behavior: 'smooth'
    });
  }
};
/**
 * utils to make background parallax
 */

var parallax = function parallax() {
  var parallax = document.querySelectorAll('.bg-parallax');

  for (var i = 0; i < parallax.length; i++) {
    var y = 0;

    if (parallax[i].classList.contains('header-parallax')) {
      y = (10 - window.pageYOffset) * 47 / 900 + 50;
    } else {
      y = (parallax[i].offsetTop - window.pageYOffset) * 47 / parallax[i].offsetTop + 50;
    }

    parallax[i].style.backgroundPositionY = y + '%';
  }
};
/**
 * utils to set count to in about-2
 */

var countTo = function countTo() {
  var items = document.querySelectorAll('.count');

  if (items) {
    var _loop2 = function _loop2(i) {
      var item = items[i];
      var amount = parseInt(item.getAttribute('data-to'), 10) - parseInt(item.getAttribute('data-from'), 10);
      var time = parseInt(item.getAttribute('data-speed'), 10);
      var interval = parseInt(item.getAttribute('data-refresh-interval'), 10);
      var pt = 0;
      var height = item.parentElement.parentElement.parentElement.offsetTop;
      var flag = 0;
      document.addEventListener("scroll", countToScrollHandler, true);

      function countToScrollHandler() {
        if (pt <= time && height >= window.pageYOffset) {
          if (0 === flag) {
            var timerId = setInterval(function () {
              if (pt >= time) {
                clearInterval(timerId);
              }

              item.innerHTML = parseInt(pt * amount / time);
              pt = pt + interval;
            }, interval);
          }

          flag = 1;
        }
      }
    };

    for (var i = 0; i < items.length; i++) {
      _loop2(i);
    }
  }
};
/**
 * Prevent Xss Attack
 * @param {Node} html 
 */

function safeContent(html) {
  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  } // Removing all events from tags...


  html = html.replace(/ on\w+="[^"]*"/g, "");
  return {
    __html: html
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdlLWhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhZ2VzL2Fib3V0LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZUhlYWRlciIsInByb3BzIiwidGl0bGUiLCJzdWJUaXRsZSIsImJhY2tncm91bmRJbWFnZSIsIlJlYWN0IiwiQWJvdXQiLCJ1c2VFZmZlY3QiLCJjb3VudFRvIiwiaG9tZURhdGEiLCJtYXAiLCJicmFuZCIsImluZGV4IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImNhcnRQcmljZVRvdGFsIiwiY2FydEl0ZW1zIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwic3VtIiwiY2FydFF0eVRvdGFsIiwicGFyc2VJbnQiLCJxdHkiLCJpc0luQ2FydCIsInByb2R1Y3QiLCJmaW5kIiwiaXRlbSIsImlkIiwiY2FuQWRkVG9DYXJ0Iiwic3RvY2siLCJpc0luV2lzaGxpc3QiLCJ3aXNobGlzdCIsImZpbmRJbmRleCIsInNsdWciLCJpc0luQ29tcGFyZSIsImNvbXBhcmUiLCJpc1NhZmFyaUJyb3dzZXIiLCJzVXNyQWciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNFZGdlQnJvd3NlciIsImdldEluZGV4IiwiZWxlbWVudCIsImNoaWxkcmVuIiwicGFyZW50RWxlbWVudCIsImkiLCJsZW5ndGgiLCJjYXRGaWx0ZXIiLCJwcm9kdWN0cyIsImNhdGVnb3J5IiwiZmxhZyIsImZpbHRlciIsImNhdCIsImF0dHJGaWx0ZXIiLCJhdHRyIiwic2FsZV9wcmljZSIsInJhdGluZ3MiLCJ1bnRpbCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJ0byIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFRvcCIsInBvcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbEJ5Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInBhcmFsbGF4IiwicXVlcnlTZWxlY3RvckFsbCIsInkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsIml0ZW1zIiwiYW1vdW50IiwiZ2V0QXR0cmlidXRlIiwidGltZSIsImludGVydmFsIiwicHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRUb1Njcm9sbEhhbmRsZXIiLCJpbm5lckhUTUwiLCJzYWZlQ29udGVudCIsImh0bWwiLCJTQ1JJUFRfUkVHRVgiLCJ0ZXN0IiwicmVwbGFjZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsVUFBVCxDQUFzQkMsS0FBdEIsRUFBOEI7QUFBQSxNQUNsQkMsS0FEa0IsR0FDRUQsS0FERixDQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxRQURXLEdBQ0VGLEtBREYsQ0FDWEUsUUFEVztBQUcxQixTQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLFNBQUssRUFBRztBQUFFQyxxQkFBZTtBQUFqQixLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCRixLQUE3QixFQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFDLFFBQVIsQ0FBcEMsQ0FESixDQURKLENBREo7QUFPSDs7S0FWUUgsVTtBQVlULCtEQUFlLG1CQUFBSyxpREFBQSxDQUFZTCxVQUFaLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBSSxHQUFHQSxJQUFJLENBQUNHLE9BQUwsQ0FBYyxpQkFBZCxFQUFpQyxFQUFqQyxDQUFQO0FBRUEsU0FBTztBQUNIQyxVQUFNLEVBQUVKO0FBREwsR0FBUDtBQUdIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL2Fib3V0LjQ1NjM3NjAzYTQxOTkzNThmMTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUGFnZUhlYWRlciAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgc3ViVGl0bGUgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlciB0ZXh0LWNlbnRlclwiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaW1hZ2VzL3BhZ2UtaGVhZGVyLWJnLmpwZylgIH0gfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPnsgdGl0bGUgfTxzcGFuPnsgc3ViVGl0bGUgfTwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIFBhZ2VIZWFkZXIgKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnZS1oZWFkZXJcIjtcclxuaW1wb3J0IHsgY291bnRUbyB9IGZyb20gJ34vdXRpbHMnO1xyXG5pbXBvcnQgeyBob21lRGF0YSB9IGZyb20gJ34vdXRpbHMvZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBBYm91dCAoKSB7XHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb3VudFRvKCk7XHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPVwiQWJvdXQgdXMgMlwiIHN1YlRpdGxlPVwiUGFnZXNcIiAvPlxyXG5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+UGFnZXM8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPkFib3V0IHVzIDI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIG9mZnNldC1sZy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRleHQgdGV4dC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlciBtYi0yXCI+V2hvIFdlIEFyZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VkIHByZXRpdW0sIGxpZ3VsYSBzb2xsaWNpdHVkaW4gbGFvcmVldCB2aXZlcnJhLCB0b3J0b3IgbGliZXJvIHNvZGFsZXMgbGVvLCBlZ2V0IGJsYW5kaXQgbnVuYyB0b3J0b3IgZXUgbmliaC4gU3VzcGVuZGlzc2UgcG90ZW50aS4gU2VkIGVnZXN0YXMsIGFudGUgZXQgdnVscHV0YXRlIHZvbHV0cGF0LCB1Y3R1cyBtZXR1cyBsaWJlcm8gZXUgYXVndWUuIE1vcmJpIHB1cnVzIGxpYmVybywgZmF1Y2lidXMgYWRpcGlzY2luZywgY29tbW9kbyBxdWlzLCBncmF2aWRhIGlkLCBlc3QuIFNlZCBsZWN0dXMuIFByYWVzZW50IGVsZW1lbnR1bSBoZW5kcmVyaXQgdG9ydG9yLiBTZWQgc2VtcGVyIGxvcmVtIGF0IGZlbGlzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvYWJvdXQtMi9zaWduYXR1cmUucG5nXCIgYWx0PVwic2lnbmF0dXJlXCIgY2xhc3NOYW1lPVwibXgtYXV0byBtYi01XCIgd2lkdGg9XCIxNDBcIiBoZWlnaHQ9XCI0NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvYWJvdXQtMi9pbWctMS5qcGdcIiBhbHQ9XCJ0ZW1wXCIgY2xhc3NOYW1lPVwibXgtYXV0byBtYi02XCIgd2lkdGg9XCI5MzNcIiBoZWlnaHQ9XCIzOTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggaWNvbi1ib3gtc20gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcHV6emxlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImljb24tYm94LXRpdGxlXCI+RGVzaWduIFF1YWxpdHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWQgZWdlc3RhcywgYW50ZSBldCB2dWxwdXRhdGUgdm9sdXRwYXQsIGVyb3MgcGVkZSBzZW1wZXIgZXN0LCB2aXRhZSBsdWN0dXMgbWV0dXMgbGliZXJvIDxiciAvPmV1IGF1Z3VlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggaWNvbi1ib3gtc20gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbGlmZS1yaW5nXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImljb24tYm94LXRpdGxlXCI+UHJvZmVzc2lvbmFsIFN1cHBvcnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmFlc2VudCBkYXBpYnVzLCBuZXF1ZSBpZCBjdXJzdXMgZmF1Y2lidXMsIDxiciAvPnRvcnRvciBuZXF1ZSBlZ2VzdGFzIGF1Z3VlLCBldSB2dWxwdXRhdGUgPGJyIC8+bWFnbmEgZXJvcyBldSBlcmF0LiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94IGljb24tYm94LXNtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWhlYXJ0LW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaWNvbi1ib3gtdGl0bGVcIj5NYWRlIFdpdGggTG92ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBlbGxlbnRlc3F1ZSBhIGRpYW0gc2l0IGFtZXQgbWkgdWxsYW1jb3JwZXIgPGJyIC8+dmVoaWN1bGEuIE51bGxhbSBxdWlzIG1hc3NhIHNpdCBhbWV0IDxiciAvPm5pYmggdml2ZXJyYSBtYWxlc3VhZGEuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbWFnZSBwdC03IHBiLTUgcHQtbWQtMTIgcGItbWQtOVwiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaW1hZ2VzL2JhY2tncm91bmRzL2JnLTQuanBnKWAgfSB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQtY29udGFpbmVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQtd3JhcHBlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiIGRhdGEtZnJvbT1cIjBcIiBkYXRhLXRvPVwiNDBcIiBkYXRhLXNwZWVkPVwiMzAwMFwiIGRhdGEtcmVmcmVzaC1pbnRlcnZhbD1cIjUwXCI+MDwvc3Bhbj5rK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvdW50LXRpdGxlIHRleHQtd2hpdGVcIj5IYXBweSBDdXN0b21lcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudC1jb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudC13cmFwcGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCIgZGF0YS1mcm9tPVwiMFwiIGRhdGEtdG89XCIyMFwiIGRhdGEtc3BlZWQ9XCIzMDAwXCIgZGF0YS1yZWZyZXNoLWludGVydmFsPVwiNTBcIj4wPC9zcGFuPitcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb3VudC10aXRsZSB0ZXh0LXdoaXRlXCI+WWVhcnMgaW4gQnVzaW5lc3M8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQtY29udGFpbmVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnQtd3JhcHBlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiIGRhdGEtZnJvbT1cIjBcIiBkYXRhLXRvPVwiOTVcIiBkYXRhLXNwZWVkPVwiMzAwMFwiIGRhdGEtcmVmcmVzaC1pbnRlcnZhbD1cIjUwXCI+MDwvc3Bhbj4lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY291bnQtdGl0bGUgdGV4dC13aGl0ZVwiPlJldHVybiBDbGllbnRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50LWNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50LXdyYXBwZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIiBkYXRhLWZyb209XCIwXCIgZGF0YS10bz1cIjE1XCIgZGF0YS1zcGVlZD1cIjMwMDBcIiBkYXRhLXJlZnJlc2gtaW50ZXJ2YWw9XCI1MFwiPjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY291bnQtdGl0bGUgdGV4dC13aGl0ZVwiPkF3YXJkcyBXb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodC0yIHB0LTYgcGItNyBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5NZWV0IE91ciBUZWFtPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXIgbWVtYmVyLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJtZW1iZXItbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vYWJvdXQtMi9tZW1iZXItMS5qcGdcIiBhbHQ9XCJtZW1iZXIgcGhvdG9cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cIm1lbWJlci1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLXNpbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj48aSBjbGFzc05hbWU9XCJpY29uLXR3aXR0ZXJcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPjxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVtYmVyLXRpdGxlXCI+U2FtYW50YSBHcmV5PHNwYW4+Rm91bmRlciAmIENFTzwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlciBtZW1iZXItMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm1lbWJlci1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGVhbS9hYm91dC0yL21lbWJlci0yLmpwZ1wiIGFsdD1cIm1lbWJlciBwaG90b1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwibWVtYmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBzb2NpYWwtaWNvbnMtc2ltcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW1iZXItdGl0bGVcIj5CcnVjZSBTdXR0b248c3Bhbj5TYWxlcyAmIE1hcmtldGluZyBNYW5hZ2VyPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyIG1lbWJlci0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWVtYmVyLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90ZWFtL2Fib3V0LTIvbWVtYmVyLTMuanBnXCIgYWx0PVwibWVtYmVyIHBob3RvXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJtZW1iZXItb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zaW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkZhY2Vib29rXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJUd2l0dGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJJbnN0YWdyYW1cIj48aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbWJlci10aXRsZVwiPkphbmV0IEpveTxzcGFuPlByb2R1Y3QgTWFuYWdlcjwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlciBtZW1iZXItMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm1lbWJlci1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGVhbS9hYm91dC0yL21lbWJlci00LmpwZ1wiIGFsdD1cIm1lbWJlciBwaG90b1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwibWVtYmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBzb2NpYWwtaWNvbnMtc2ltcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW1iZXItdGl0bGVcIj5NYXJrIFBvY2tldDxzcGFuPlByb2R1Y3QgTWFuYWdlcjwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlciBtZW1iZXItMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm1lbWJlci1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGVhbS9hYm91dC0yL21lbWJlci01LmpwZ1wiIGFsdD1cIm1lbWJlciBwaG90b1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwibWVtYmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBzb2NpYWwtaWNvbnMtc2ltcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW1iZXItdGl0bGVcIj5EYW1pb24gQmx1ZTxzcGFuPlNhbGVzICYgTWFya2V0aW5nIE1hbmFnZXI8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXIgbWVtYmVyLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJtZW1iZXItbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3RlYW0vYWJvdXQtMi9tZW1iZXItNi5qcGdcIiBhbHQ9XCJtZW1iZXIgcGhvdG9cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cIm1lbWJlci1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLXNpbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj48aSBjbGFzc05hbWU9XCJpY29uLXR3aXR0ZXJcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPjxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWVtYmVyLXRpdGxlXCI+TGVuYXJkIFNtaXRoPHNwYW4+UHJvZHVjdCBNYW5hZ2VyPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyIG1lbWJlci0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWVtYmVyLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90ZWFtL2Fib3V0LTIvbWVtYmVyLTcuanBnXCIgYWx0PVwibWVtYmVyIHBob3RvXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJtZW1iZXItb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zaW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkZhY2Vib29rXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJUd2l0dGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJJbnN0YWdyYW1cIj48aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1iZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1lbWJlci10aXRsZVwiPlJhY2hlbCBHcmVlbjxzcGFuPlByb2R1Y3QgTWFuYWdlcjwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlciBtZW1iZXItMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm1lbWJlci1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdGVhbS9hYm91dC0yL21lbWJlci04LmpwZ1wiIGFsdD1cIm1lbWJlciBwaG90b1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwibWVtYmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29ucyBzb2NpYWwtaWNvbnMtc2ltcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZW1iZXItdGl0bGVcIj5EYXZpZCBEb2U8c3Bhbj5Qcm9kdWN0IE1hbmFnZXI8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvY2xhc3NpY1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW1pbndpZHRoLWxnIGJ0bi1vdXRsaW5lLXByaW1hcnktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxFVFMgU1RBUlQgV09SSzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLXRleHQgdGV4dC1jZW50ZXIgbXgtYXV0byBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhlIHdvcmxkJ3MgcHJlbWl1bSBkZXNpZ24gYnJhbmRzIGluIG9uZSBkZXN0aW5hdGlvbi48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBoYXNlbGx1cyBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBhbGlxdWV0IG5pYmggbmVjIHVybmEuIEluIG5pc2kgbmVxdWUsIGFsaXF1ZXQgdmVsLCBkYXBpYnVzIGlkLCBtYXR0aXMgdmVsLCBuaXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLWRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVEYXRhLmJyYW5kcy5zbGljZSggMCwgOCApLm1hcCggKCBicmFuZCwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLXNtLTQgY29sLW1kLTNcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBicmFuZC5pbWFnZSB9IGFsdD1cIkJyYW5kIE5hbWVcIiB3aWR0aD17IGJyYW5kLndpZHRoIH0gaGVpZ2h0PXsgYnJhbmQuaGVpZ2h0IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggQWJvdXQgKTsiLCIvKipcclxuICogZ2V0IHRvdGFsIFByaWNlIG9mIHByb2R1Y3RzIGluIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgRmxvYXQgfSB0b3RhbFByaWNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FydFByaWNlVG90YWwgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjYyArIGN1ci5zdW1cclxuICAgIH0sIDAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBudW1iZXIgb2YgcHJvZHVjdHMgaW4gY2FydFxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHJldHVybiB7IEludGVnZXIgfSBudW1iZXJzIG9mIGNhcnQgaXRlbXMgaW4gY2FydGxpc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UXR5VG90YWwgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KCBjdXIucXR5LCAxMCApO1xyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjaWRlIHdoZXJlIHByb2R1Y3QgaXMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEBwYXJhbSB7IE9iamVjdCB9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbkNhcnQgPSAoIGNhcnRJdGVtcywgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMuZmluZCggaXRlbSA9PiBpdGVtLmlkID09IHByb2R1Y3QuaWQgKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpcm0gaWYgcHJvZHVjdCBjb3VsZCBiZSBhZGRlZCB0byBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICogQHBhcmFtIHsgTnVtYmVyIH0gcXR5IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhbkFkZFRvQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0LCBxdHkgKSA9PiB7XHJcbiAgICBsZXQgZmluZCA9IGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApO1xyXG4gICAgaWYgKCBmaW5kICkge1xyXG4gICAgICAgIGlmICggcHJvZHVjdC5zdG9jayA9PSAwIHx8ICggcHJvZHVjdC5zdG9jayA8ICggZmluZC5xdHkgKyBxdHkgKSApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICggcHJvZHVjdC5zdG9jayA9PSAwIHx8ICggcHJvZHVjdC5zdG9jayA8IHF0eSApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtBcnJheX0gd2lzaGxpc3QgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5XaXNobGlzdCA9ICggd2lzaGxpc3QsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdCAmJiB3aXNobGlzdC5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5zbHVnID09IHByb2R1Y3Quc2x1ZyApID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtBcnJheX0gY29tcGFyZSBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbkNvbXBhcmUgPSAoIGNvbXBhcmUsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdCAmJiBjb21wYXJlLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3Qgc2FmYXJpIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoICdTYWZhcmknICkgIT09IC0xICYmIHNVc3JBZy5pbmRleE9mKCAnQ2hyb21lJyApID09PSAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGV0ZWN0IEVkZ2UgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRWRnZUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoIFwiRWRnZVwiICkgPiAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXQgaW5kZXggb2YgdGhlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEluZGV4ID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKCBlbGVtZW50ID09IGNoaWxkcmVuWyBpIF0gKSByZXR1cm4gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBjYXRlZ29yeS5cclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGNhdGVnb3J5IFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWcgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2F0RmlsdGVyID0gZnVuY3Rpb24gKCBwcm9kdWN0cyA9IFtdLCBjYXRlZ29yeSwgZmxhZyA9IGZhbHNlICkge1xyXG4gICAgaWYgKCBjYXRlZ29yeVsgMCBdID09PSAnQWxsJyApIHJldHVybiBwcm9kdWN0cztcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgaWYgKCBpdGVtLmNhdGVnb3J5LmZpbmQoIGNhdCA9PiBjYXQuc2x1ZyA9PSBjYXRlZ29yeVsgaSBdICkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFmbGFnICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGZsYWcgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZmxhZyApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmaWx0ZXIgcHJvZHVjdHMgYnkgYXR0cmlidXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb2R1Y3RzIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0ciBcclxuICovXHJcbmV4cG9ydCBjb25zdCBhdHRyRmlsdGVyID0gZnVuY3Rpb24gKCBwcm9kdWN0cyA9IFtdLCBhdHRyICkge1xyXG4gICAgLy8gaWYocHJvZHVjdHMpXHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdhbGwnICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3NhbGUnICYmIGl0ZW0uc2FsZV9wcmljZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdyYXRlZCcgJiYgaXRlbS5yYXRpbmdzID4gMyApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICd1bnRpbCcgJiYgaXRlbS51bnRpbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVsgYXR0ciBdID09PSB0cnVlO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG4vKipcclxuICogU2Nyb2xsaW5nIHRvIFBhZ2UgY29udGVudCBzZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9QYWdlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS1jb250ZW50JyApXHJcbiAgICAgICAgLm9mZnNldFRvcCAtIDc0O1xyXG4gICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcG9zIDw9IHRvICkgY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSggMCwgLTEyMCApO1xyXG4gICAgICAgICAgICAgICAgcG9zIC09IDEyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKCB7XHJcbiAgICAgICAgICAgIHRvcDogdG8sXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIG1ha2UgYmFja2dyb3VuZCBwYXJhbGxheFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcmFsbGF4ID0gKCkgPT4ge1xyXG4gICAgbGV0IHBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5iZy1wYXJhbGxheCcgKTtcclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJhbGxheC5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBsZXQgeSA9IDA7XHJcbiAgICAgICAgaWYgKCBwYXJhbGxheFsgaSBdLmNsYXNzTGlzdC5jb250YWlucyggJ2hlYWRlci1wYXJhbGxheCcgKSApIHtcclxuICAgICAgICAgICAgeSA9ICggMTAgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDQ3IC8gOTAwICsgNTA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeSA9ICggcGFyYWxsYXhbIGkgXS5vZmZzZXRUb3AgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDQ3IC8gcGFyYWxsYXhbIGkgXS5vZmZzZXRUb3AgKyA1MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmFsbGF4WyBpIF0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IHkgKyAnJSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzZXQgY291bnQgdG8gaW4gYWJvdXQtMlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvdW50VG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNvdW50JyApO1xyXG5cclxuICAgIGlmICggaXRlbXMgKSB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zWyBpIF07XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXRvJyApLCAxMCApIC0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1mcm9tJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3BlZWQnICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtcmVmcmVzaC1pbnRlcnZhbCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IHB0ID0gMDtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IDA7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcInNjcm9sbFwiLCBjb3VudFRvU2Nyb2xsSGFuZGxlciwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRUb1Njcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwdCA8PSB0aW1lICYmIGhlaWdodCA+PSB3aW5kb3cucGFnZVlPZmZzZXQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAwID09PSBmbGFnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHB0ID49IHRpbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gcGFyc2VJbnQoICggcHQgKiBhbW91bnQgKSAvIHRpbWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcHQgKyBpbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgWHNzIEF0dGFja1xyXG4gKiBAcGFyYW0ge05vZGV9IGh0bWwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZUNvbnRlbnQgKCBodG1sICkge1xyXG4gICAgY29uc3QgU0NSSVBUX1JFR0VYID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XHJcblxyXG4gICAgLy8gUmVtb3ZpbmcgdGhlIDxzY3JpcHQ+IHRhZ3NcclxuICAgIHdoaWxlICggU0NSSVBUX1JFR0VYLnRlc3QoIGh0bWwgKSApIHtcclxuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCBTQ1JJUFRfUkVHRVgsIFwiXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmluZyBhbGwgZXZlbnRzIGZyb20gdGFncy4uLlxyXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSggLyBvblxcdys9XCJbXlwiXSpcIi9nLCBcIlwiICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX2h0bWw6IGh0bWxcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=