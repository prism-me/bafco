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
/* harmony import */ var _components_partials_shop_list_shop_list_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/shop/list/shop-list-one */ "./components/partials/shop/list/shop-list-one.jsx");
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('List'),
      pageTitle = _useState3[0],
      setPageTitle = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  var products = data && data.products.data;
  var totalCount = data && data.products.totalCount;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
      setPerPage(5);
    } else if (type == '2cols') {
      setPageTitle('Grid 2 Columns');
      setPerPage(6);
    } else if (type == '3cols') {
      setPageTitle('Grid 3 Columns');
      setPerPage(9);
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
        lineNumber: 118,
        columnNumber: 16
      }
    });
  }

  return __jsx("main", {
    className: "main shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx("nav", {
    className: "breadcrumb-nav mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, "Shop")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, pageTitle), query.search ? __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, "Search - ", query.searchTerm)) : ""))), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-9 skel-shop-products ".concat(!loading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "toolbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }, !loading && products ? __jsx("div", {
    className: "toolbox-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 45
    }
  }, "Showing", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 49
    }
  }, " ", products.length, " of ", totalCount), " Products") : ""), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "toolbox-sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 37
    }
  }, __jsx("label", {
    htmlFor: "sortby",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, "Sort by:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
      lineNumber: 173,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 49
    }
  }, "Default"), __jsx("option", {
    value: "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 49
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 49
    }
  }, "Most Rated"), __jsx("option", {
    value: "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 49
    }
  }, "Date")))))), __jsx(_components_partials_shop_list_shop_list_one__WEBPACK_IMPORTED_MODULE_6__.default, {
    products: products,
    perPage: perPage,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 29
    }
  }), totalCount > perPage ? __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_7__.default, {
    perPage: perPage,
    total: totalCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 37
    }
  }) : ""), __jsx("aside", {
    className: "col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ".concat(!loading || firstLoading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx("div", {
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
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 29
    }
  }), __jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "sticky-content",
    offsetTop: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 29
    }
  }, __jsx(_components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  })), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-cog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 41
    }
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 29
    }
  }))))));
}

_s(ShopGrid, "DD7HwrbgzK1O0EtM75RYOFZSTI0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLmpzeCJdLCJuYW1lcyI6WyJTaG9wR3JpZCIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGUiLCJxdWVyeSIsInVzZUxhenlRdWVyeSIsIkdFVF9QUk9EVUNUUyIsImdldFByb2R1Y3RzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVN0YXRlIiwiZmlyc3RMb2FkaW5nIiwic2V0Rmlyc3RMb2FkaW5nIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJwYWdlVGl0bGUiLCJzZXRQYWdlVGl0bGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJwcm9kdWN0cyIsInRvdGFsQ291bnQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFdpZHRoIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImNvbG9yIiwic3BsaXQiLCJzaXplIiwiYnJhbmQiLCJtaW5QcmljZSIsInBhcnNlSW50IiwibWF4UHJpY2UiLCJjYXRlZ29yeSIsInNvcnRCeSIsInBhZ2UiLCJsaXN0Iiwic2Nyb2xsVG9QYWdlQ29udGVudCIsIm9uU29ydEJ5Q2hhbmdlIiwiZSIsInF1ZXJ5T2JqZWN0IiwidXJsIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwia2V5IiwicHVzaCIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2lkZWJhciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiaGlkZVNpZGViYXIiLCJzZWFyY2giLCJsZW5ndGgiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFD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QUFBLEtBQ0ksTUFBQyx1RkFBRDtBQUFnQixVQUFNLEVBQUVNLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLEVBU1FBLE1BQU0sR0FDRjtBQUFRLGFBQVMsRUFBQyx1QkFBbEI7QUFBMEMsV0FBTyxFQUFFb0MsYUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREUsR0FJQSxFQWJkLEVBZUk7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBd0MsV0FBTyxFQUFFSyxXQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0F6R0osQ0FESixDQURKLENBN0JKLENBREo7QUErSkg7O0dBeFFRM0QsUTtVQUNVRSxrRCxFQUdpQ0csOEQ7OztLQUozQ0wsUTtBQTBRVCwrREFBZThELHVEQUFVLENBQUM7QUFBRUMsS0FBRztBQUFMLENBQUQsQ0FBVixDQUFrRC9ELFFBQWxELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLmU2OWYxMDQ4MDcwNDgxZjRiZWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IFN0aWNreUJveCBmcm9tICdyZWFjdC1zdGlja3ktYm94JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnZS1oZWFkZXInO1xyXG5pbXBvcnQgU2hvcExpc3RPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3AvbGlzdC9zaG9wLWxpc3Qtb25lJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgU2hvcFNpZGViYXJPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3Avc2lkZWJhci9zaG9wLXNpZGViYXItb25lJztcclxuXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vc2VydmVyL2Fwb2xsbyc7XHJcbmltcG9ydCB7IEdFVF9QUk9EVUNUUyB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBzY3JvbGxUb1BhZ2VDb250ZW50IH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBTaG9wR3JpZCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdHlwZSA9IHJvdXRlci5xdWVyeS50eXBlO1xyXG4gICAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbZ2V0UHJvZHVjdHMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX1BST0RVQ1RTKTtcclxuICAgIGNvbnN0IFtmaXJzdExvYWRpbmcsIHNldEZpcnN0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IFtwYWdlVGl0bGUsIHNldFBhZ2VUaXRsZV0gPSB1c2VTdGF0ZSgnTGlzdCcpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCB0b3RhbENvdW50ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLnRvdGFsQ291bnQ7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGUpO1xyXG4gICAgICAgIHJlc2l6ZUhhbmRsZSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5vZmZzZXRXaWR0aCA8IDk5MilcclxuICAgICAgICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2R1Y3RzKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBxdWVyeS5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHF1ZXJ5LmNvbG9yID8gcXVlcnkuY29sb3Iuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcXVlcnkuc2l6ZSA/IHF1ZXJ5LnNpemUuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHF1ZXJ5LmJyYW5kID8gcXVlcnkuYnJhbmQuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgbWluUHJpY2U6IHBhcnNlSW50KHF1ZXJ5Lm1pblByaWNlKSxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlOiBwYXJzZUludChxdWVyeS5tYXhQcmljZSksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHF1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UgPyBwYXJzZUludChxdWVyeS5wYWdlKSA6IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJQYWdlOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjcm9sbFRvUGFnZUNvbnRlbnQoKTtcclxuICAgIH0sIFtxdWVyeSwgcGVyUGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdHMpIHNldEZpcnN0TG9hZGluZyh0cnVlKTtcclxuICAgIH0sIFtwcm9kdWN0c10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PSAnbGlzdCcpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdMaXN0Jyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICcyY29scycpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDIgQ29sdW1ucycpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnM2NvbHMnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCAzIENvbHVtbnMnKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSg5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzRjb2xzJykge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgNCBDb2x1bW5zJyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0eXBlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBvblNvcnRCeUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqZWN0ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgIGxldCB1cmwgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSgnW3R5cGVdJywgcXVlcnkudHlwZSkgKyAnPyc7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHF1ZXJ5T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09IFwidHlwZVwiICYmIGtleSAhPT0gXCJzb3J0QnlcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGtleSArICc9JyArIHF1ZXJ5T2JqZWN0W2tleV0gKyAnJic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKHVybCArICdzb3J0Qnk9JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluIHNob3BcIj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQWxsIFNlYXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgc3ViVGl0bGU9XCJXZSBtYWtlIGhhcHB5IHdvcmtwbGFjZXNcIlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPVwiaW1hZ2VzL2Jhbm5lcnMvY2F0X2Jhbm5lci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlZpZXcgT3VyIFByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblVybD1cIiNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbmF2IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCI+U2hvcDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCI+e3BhZ2VUaXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5zZWFyY2ggP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VhcmNoIC0ge3F1ZXJ5LnNlYXJjaFRlcm19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2tlbGV0b24tYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbGctOSBza2VsLXNob3AtcHJvZHVjdHMgJHshbG9hZGluZyA/ICdsb2FkZWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgcHJvZHVjdHMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHtwcm9kdWN0cy5sZW5ndGh9IG9mIHt0b3RhbENvdW50fTwvc3Bhbj4gUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LXNvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic29ydGJ5XCI+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic29ydGJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzb3J0YnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Tb3J0QnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zb3J0QnkgPyBxdWVyeS5zb3J0QnkgOiAnZGVmYXVsdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlYXR1cmVkXCI+TW9zdCBQb3B1bGFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyYXRpbmdcIj5Nb3N0IFJhdGVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXdcIj5EYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICdsaXN0JyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvMmNvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzJjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICczY29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci80Y29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnNGNvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMThcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE4XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcExpc3RPbmUgcHJvZHVjdHM9e3Byb2R1Y3RzfSBwZXJQYWdlPXtwZXJQYWdlfSBsb2FkaW5nPXtsb2FkaW5nfT48L1Nob3BMaXN0T25lPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbENvdW50ID4gcGVyUGFnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHBlclBhZ2U9e3BlclBhZ2V9IHRvdGFsPXt0b3RhbENvdW50fT48L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtgY29sLWxnLTMgc2tlbC1zaG9wLXNpZGViYXIgb3JkZXItbGctZmlyc3Qgc2tlbGV0b24tYm9keSAkeyghbG9hZGluZyB8fCBmaXJzdExvYWRpbmcpID8gJ2xvYWRlZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3lCb3ggY2xhc3NOYW1lPVwic3RpY2t5LWNvbnRlbnRcIiBvZmZzZXRUb3A9ezcwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcFNpZGViYXJPbmUgdG9nZ2xlPXt0b2dnbGV9PjwvU2hvcFNpZGViYXJPbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreUJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZGViYXItZml4ZWQtdG9nZ2xlclwiIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jb2dcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZmlsdGVyLW92ZXJsYXlcIiBvbkNsaWNrPXtoaWRlU2lkZWJhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNpZGUgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvbWFpbiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSkoU2hvcEdyaWQpOyJdLCJzb3VyY2VSb290IjoiIn0=