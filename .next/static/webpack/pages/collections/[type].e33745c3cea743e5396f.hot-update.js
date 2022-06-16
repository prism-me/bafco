self["webpackHotUpdate_N_E"]("pages/collections/[type]",{

/***/ "./pages/collections/[type].jsx":
/*!**************************************!*\
  !*** ./pages/collections/[type].jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sticky-box */ "./node_modules/react-sticky-box/dist/es/index.js");
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/page-header */ "./components/features/page-header.jsx");
/* harmony import */ var _components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/shop/list/shop-list-two */ "./components/partials/shop/list/shop-list-two.jsx");
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/pagination */ "./components/features/pagination.jsx");
/* harmony import */ var _components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/shop/sidebar/shop-sidebar-one */ "./components/partials/shop/sidebar/shop-sidebar-one.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\collections\\[type].jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);













function ShopGrid() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var type = router.query.type;
  var query = router.query;

  var _useLazyQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__.GET_PRODUCTS),
      _useLazyQuery2 = (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useLazyQuery, 2),
      getProducts = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      firstLoading = _useState[0],
      setFirstLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5),
      perPage = _useState2[0],
      setPerPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Chairs'),
      pageTitle = _useState3[0],
      setPageTitle = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  var products = data && data.products.data;
  var totalCount = data && data.products.totalCount;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log('Total :: ', data);
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return function () {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);else setToggle(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getProducts({
      variables: {
        searchTerm: query.searchTerm,
        color: query.color ? query.color.split(',') : [],
        size: query.size ? query.size.split(',') : [],
        brand: query.brand ? query.brand.split(',') : [],
        minPrice: parseInt(query.minPrice),
        maxPrice: parseInt(query.maxPrice),
        category: query.category,
        sortBy: query.sortBy ? query.sortBy : 'default',
        page: query.page ? parseInt(query.page) : 1,
        perPage: perPage,
        list: true
      }
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_11__.scrollToPageContent)();
  }, [query, perPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (products) setFirstLoading(true);
  }, [products]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (type == 'list') {
      setPageTitle('List');
      setPerPage(12);
    } else if (type == '2cols') {
      setPageTitle('Grid 2 Columns');
      setPerPage(12);
    } else if (type == '3cols') {
      setPageTitle('Grid 3 Columns');
      setPerPage(12);
    } else if (type == '4cols') {
      setPageTitle('Grid 4 Columns');
      setPerPage(12);
    }
  }, [type]);

  function onSortByChange(e) {
    var queryObject = router.query;
    var url = router.pathname.replace('[type]', query.type) + '?';

    for (var key in queryObject) {
      if (key !== "type" && key !== "sortBy") {
        url += key + '=' + queryObject[key] + '&';
      }
    }

    router.push(url + 'sortBy=' + e.target.value);
  }

  function toggleSidebar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    } else {
      document.querySelector('body').classList.add('sidebar-filter-active');
    }
  }

  function hideSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }

  if (error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 16
      }
    });
  }

  return __jsx("main", {
    className: "main shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: "All Seating",
    subTitle: "We make happy workplaces",
    backgroundImage: "images/banners/cat_banner.png",
    buttonText: "View Our Products",
    buttonUrl: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }), __jsx("nav", {
    className: "breadcrumb-nav mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, pageTitle), query.search ? __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  }, "Search - ", query.searchTerm)) : ""))), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-9 skel-shop-products ".concat(!loading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "toolbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }, !loading && products ? __jsx("div", {
    className: "toolbox-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 45
    }
  }, "Showing", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 49
    }
  }, " ", products.length, " of ", totalCount), " Products") : ""), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "toolbox-sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, __jsx("label", {
    htmlFor: "sortby",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 41
    }
  }, "Sort by:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }, __jsx("select", {
    name: "sortby",
    id: "sortby",
    className: "form-control",
    onChange: onSortByChange,
    value: query.sortBy ? query.sortBy : 'default',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 49
    }
  }, "Default"), __jsx("option", {
    value: "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 49
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 49
    }
  }, "Most Rated"), __jsx("option", {
    value: "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 49
    }
  }, "Date")))))), __jsx(_components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__.default, {
    products: products,
    perPage: perPage,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 29
    }
  }), totalCount > perPage ? __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_7__.default, {
    perPage: perPage,
    total: totalCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }) : ""), __jsx("aside", {
    className: "col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ".concat(!loading || firstLoading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 29
    }
  }), __jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "sticky-content",
    offsetTop: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 29
    }
  }, __jsx(_components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 33
    }
  })), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-cog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 41
    }
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 29
    }
  }))))));
}

_s(ShopGrid, "1yEwMJ4Iuxjy1lMo/4THmFF1lKk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery];
});

_c = ShopGrid;
/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__.default)({
  ssr: false
})(ShopGrid));

var _c;

$RefreshReg$(_c, "ShopGrid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLmpzeCJdLCJuYW1lcyI6WyJTaG9wR3JpZCIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGUiLCJxdWVyeSIsInVzZUxhenlRdWVyeSIsIkdFVF9QUk9EVUNUUyIsImdldFByb2R1Y3RzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVN0YXRlIiwiZmlyc3RMb2FkaW5nIiwic2V0Rmlyc3RMb2FkaW5nIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJwYWdlVGl0bGUiLCJzZXRQYWdlVGl0bGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJwcm9kdWN0cyIsInRvdGFsQ291bnQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZUhhbmRsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRXaWR0aCIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJjb2xvciIsInNwbGl0Iiwic2l6ZSIsImJyYW5kIiwibWluUHJpY2UiLCJwYXJzZUludCIsIm1heFByaWNlIiwiY2F0ZWdvcnkiLCJzb3J0QnkiLCJwYWdlIiwibGlzdCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJvblNvcnRCeUNoYW5nZSIsImUiLCJxdWVyeU9iamVjdCIsInVybCIsInBhdGhuYW1lIiwicmVwbGFjZSIsImtleSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZ2dsZVNpZGViYXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImhpZGVTaWRlYmFyIiwic2VhcmNoIiwibGVuZ3RoIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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REosQ0FMSixFQVNRQSxNQUFNLEdBQ0Y7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQTBDLFdBQU8sRUFBRXNDLGFBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURFLEdBSUEsRUFiZCxFQWVJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQXdDLFdBQU8sRUFBRUssV0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBekdKLENBREosQ0FESixDQTFCSixDQURKO0FBNEpIOztHQXRRUTdELFE7VUFDVUUsa0QsRUFHaUNHLDhEOzs7S0FKM0NMLFE7QUF3UVQsK0RBQWVnRSx1REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FBa0RqRSxRQUFsRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS5lMzM3NDVjM2NlYTc0M2U1Mzk2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBTdGlja3lCb3ggZnJvbSAncmVhY3Qtc3RpY2t5LWJveCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IFNob3BMaXN0VHdvIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LXR3byc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uJztcclxuaW1wb3J0IFNob3BTaWRlYmFyT25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2hvcC1zaWRlYmFyLW9uZSc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9QYWdlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gU2hvcEdyaWQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW2dldFByb2R1Y3RzLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9QUk9EVUNUUyk7XHJcbiAgICBjb25zdCBbZmlyc3RMb2FkaW5nLCBzZXRGaXJzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbcGFnZVRpdGxlLCBzZXRQYWdlVGl0bGVdID0gdXNlU3RhdGUoJ0NoYWlycycpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCB0b3RhbENvdW50ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLnRvdGFsQ291bnQ7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVG90YWwgOjogJywgZGF0YSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlKTtcclxuICAgICAgICByZXNpemVIYW5kbGUoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZSgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikub2Zmc2V0V2lkdGggPCA5OTIpXHJcbiAgICAgICAgICAgIHNldFRvZ2dsZSh0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRQcm9kdWN0cyh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybTogcXVlcnkuc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBxdWVyeS5jb2xvciA/IHF1ZXJ5LmNvbG9yLnNwbGl0KCcsJykgOiBbXSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHF1ZXJ5LnNpemUgPyBxdWVyeS5zaXplLnNwbGl0KCcsJykgOiBbXSxcclxuICAgICAgICAgICAgICAgIGJyYW5kOiBxdWVyeS5icmFuZCA/IHF1ZXJ5LmJyYW5kLnNwbGl0KCcsJykgOiBbXSxcclxuICAgICAgICAgICAgICAgIG1pblByaWNlOiBwYXJzZUludChxdWVyeS5taW5QcmljZSksXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZTogcGFyc2VJbnQocXVlcnkubWF4UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHF1ZXJ5LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgc29ydEJ5OiBxdWVyeS5zb3J0QnkgPyBxdWVyeS5zb3J0QnkgOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBwYWdlOiBxdWVyeS5wYWdlID8gcGFyc2VJbnQocXVlcnkucGFnZSkgOiAxLFxyXG4gICAgICAgICAgICAgICAgcGVyUGFnZTogcGVyUGFnZSxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzY3JvbGxUb1BhZ2VDb250ZW50KCk7XHJcbiAgICB9LCBbcXVlcnksIHBlclBhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RzKSBzZXRGaXJzdExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9LCBbcHJvZHVjdHNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnTGlzdCcpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDEyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzJjb2xzJykge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgMiBDb2x1bW5zJyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnM2NvbHMnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCAzIENvbHVtbnMnKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSgxMik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICc0Y29scycpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDQgQ29sdW1ucycpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDEyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdHlwZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gb25Tb3J0QnlDaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCBxdWVyeU9iamVjdCA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBsZXQgdXJsID0gcm91dGVyLnBhdGhuYW1lLnJlcGxhY2UoJ1t0eXBlXScsIHF1ZXJ5LnR5cGUpICsgJz8nO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBxdWVyeU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBcInR5cGVcIiAmJiBrZXkgIT09IFwic29ydEJ5XCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSBrZXkgKyAnPScgKyBxdWVyeU9iamVjdFtrZXldICsgJyYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCh1cmwgKyAnc29ydEJ5PScgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVTaWRlYmFyKCkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbiBzaG9wXCI+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFsbCBTZWF0aW5nXCJcclxuICAgICAgICAgICAgICAgIHN1YlRpdGxlPVwiV2UgbWFrZSBoYXBweSB3b3JrcGxhY2VzXCJcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZT1cImltYWdlcy9iYW5uZXJzL2NhdF9iYW5uZXIucG5nXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJWaWV3IE91ciBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICBidXR0b25Vcmw9XCIjXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPkhvbWU8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPntwYWdlVGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2VhcmNoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCAtIHtxdWVyeS5zZWFyY2hUZXJtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNrZWxldG9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTkgc2tlbC1zaG9wLXByb2R1Y3RzICR7IWxvYWRpbmcgPyAnbG9hZGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIHByb2R1Y3RzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7cHJvZHVjdHMubGVuZ3RofSBvZiB7dG90YWxDb3VudH08L3NwYW4+IFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1zb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvcnRieVwiPlNvcnQgYnk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNvcnRieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic29ydGJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU29ydEJ5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5ID8gcXVlcnkuc29ydEJ5IDogJ2RlZmF1bHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5EZWZhdWx0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWF0dXJlZFwiPk1vc3QgUG9wdWxhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmF0aW5nXCI+TW9zdCBSYXRlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3XCI+RGF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnbGlzdCcgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzJjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICcyY29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnM2NvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvNGNvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzRjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE4XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxOFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BMaXN0VHdvIHByb2R1Y3RzPXtwcm9kdWN0c30gcGVyUGFnZT17cGVyUGFnZX0gbG9hZGluZz17bG9hZGluZ30+PC9TaG9wTGlzdFR3bz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxDb3VudCA+IHBlclBhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBwZXJQYWdlPXtwZXJQYWdlfSB0b3RhbD17dG90YWxDb3VudH0+PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17YGNvbC1sZy0zIHNrZWwtc2hvcC1zaWRlYmFyIG9yZGVyLWxnLWZpcnN0IHNrZWxldG9uLWJvZHkgJHsoIWxvYWRpbmcgfHwgZmlyc3RMb2FkaW5nKSA/ICdsb2FkZWQnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5Qm94IGNsYXNzTmFtZT1cInN0aWNreS1jb250ZW50XCIgb2Zmc2V0VG9wPXs3MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BTaWRlYmFyT25lIHRvZ2dsZT17dG9nZ2xlfT48L1Nob3BTaWRlYmFyT25lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGlja3lCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWRlYmFyLWZpeGVkLXRvZ2dsZXJcIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY29nXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWZpbHRlci1vdmVybGF5XCIgb25DbGljaz17aGlkZVNpZGViYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlID5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8L21haW4gPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnIH0pKFNob3BHcmlkKTsiXSwic291cmNlUm9vdCI6IiJ9