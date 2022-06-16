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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(12),
      perPage = _useState2[0],
      setPerPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(type),
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
  }, [products]); // useEffect(() => {
  //     if (type == 'list') {
  //         setPageTitle('List');
  //         setPerPage(12);
  //     } else if (type == '2cols') {
  //         setPageTitle('Grid 2 Columns');
  //         setPerPage(12);
  //     } else if (type == '3cols') {
  //         setPageTitle('Grid 3 Columns');
  //         setPerPage(12);
  //     } else if (type == '4cols') {
  //         setPageTitle('Grid 4 Columns');
  //         setPerPage(12);
  //     }
  // }, [type])

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
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, pageTitle), query.search ? __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, "Search - ", query.searchTerm)) : ""))), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-9 skel-shop-products ".concat(!loading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "toolbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, !loading && products ? __jsx("div", {
    className: "toolbox-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 45
    }
  }, "Showing", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 49
    }
  }, " ", products.length, " of ", totalCount), " Products") : ""), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "toolbox-sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx("label", {
    htmlFor: "sortby",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "Sort by:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 170,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 49
    }
  }, "Default"), __jsx("option", {
    value: "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 49
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 49
    }
  }, "Most Rated"), __jsx("option", {
    value: "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 49
    }
  }, "Date")))))), __jsx(_components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__.default, {
    products: products,
    perPage: perPage,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }), totalCount > perPage ? __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_7__.default, {
    perPage: perPage,
    total: totalCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 37
    }
  }) : ""), __jsx("aside", {
    className: "col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ".concat(!loading || firstLoading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }), __jsx("div", {
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
  }), __jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "sticky-content",
    offsetTop: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 29
    }
  }, __jsx(_components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 33
    }
  })), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-cog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 41
    }
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 29
    }
  }))))));
}

_s(ShopGrid, "oYd9l6pzqbL9Hs31XN3Ixcyxj3E=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLmpzeCJdLCJuYW1lcyI6WyJTaG9wR3JpZCIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGUiLCJxdWVyeSIsInVzZUxhenlRdWVyeSIsIkdFVF9QUk9EVUNUUyIsImdldFByb2R1Y3RzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVN0YXRlIiwiZmlyc3RMb2FkaW5nIiwic2V0Rmlyc3RMb2FkaW5nIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJwYWdlVGl0bGUiLCJzZXRQYWdlVGl0bGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJwcm9kdWN0cyIsInRvdGFsQ291bnQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFdpZHRoIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImNvbG9yIiwic3BsaXQiLCJzaXplIiwiYnJhbmQiLCJtaW5QcmljZSIsInBhcnNlSW50IiwibWF4UHJpY2UiLCJjYXRlZ29yeSIsInNvcnRCeSIsInBhZ2UiLCJsaXN0Iiwic2Nyb2xsVG9QYWdlQ29udGVudCIsIm9uU29ydEJ5Q2hhbmdlIiwiZSIsInF1ZXJ5T2JqZWN0IiwidXJsIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwia2V5IiwicHVzaCIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2lkZWJhciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiaGlkZVNpZGViYXIiLCJzZWFyY2giLCJsZW5ndGgiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFD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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLjM0YTMyNmEwZGIxNGZmNTRmOWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IFN0aWNreUJveCBmcm9tICdyZWFjdC1zdGlja3ktYm94JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnZS1oZWFkZXInO1xyXG5pbXBvcnQgU2hvcExpc3RUd28gZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3AvbGlzdC9zaG9wLWxpc3QtdHdvJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgU2hvcFNpZGViYXJPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3Avc2lkZWJhci9zaG9wLXNpZGViYXItb25lJztcclxuXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vc2VydmVyL2Fwb2xsbyc7XHJcbmltcG9ydCB7IEdFVF9QUk9EVUNUUyB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBzY3JvbGxUb1BhZ2VDb250ZW50IH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBTaG9wR3JpZCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdHlwZSA9IHJvdXRlci5xdWVyeS50eXBlO1xyXG4gICAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbZ2V0UHJvZHVjdHMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX1BST0RVQ1RTKTtcclxuICAgIGNvbnN0IFtmaXJzdExvYWRpbmcsIHNldEZpcnN0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMik7XHJcbiAgICBjb25zdCBbcGFnZVRpdGxlLCBzZXRQYWdlVGl0bGVdID0gdXNlU3RhdGUodHlwZSk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhICYmIGRhdGEucHJvZHVjdHMuZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsQ291bnQgPSBkYXRhICYmIGRhdGEucHJvZHVjdHMudG90YWxDb3VudDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZSk7XHJcbiAgICAgICAgcmVzaXplSGFuZGxlKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLm9mZnNldFdpZHRoIDwgOTkyKVxyXG4gICAgICAgICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvZHVjdHMoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHF1ZXJ5LnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcXVlcnkuY29sb3IgPyBxdWVyeS5jb2xvci5zcGxpdCgnLCcpIDogW10sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBxdWVyeS5zaXplID8gcXVlcnkuc2l6ZS5zcGxpdCgnLCcpIDogW10sXHJcbiAgICAgICAgICAgICAgICBicmFuZDogcXVlcnkuYnJhbmQgPyBxdWVyeS5icmFuZC5zcGxpdCgnLCcpIDogW10sXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZTogcGFyc2VJbnQocXVlcnkubWluUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgbWF4UHJpY2U6IHBhcnNlSW50KHF1ZXJ5Lm1heFByaWNlKSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBxdWVyeS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIHNvcnRCeTogcXVlcnkuc29ydEJ5ID8gcXVlcnkuc29ydEJ5IDogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZSA/IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpIDogMSxcclxuICAgICAgICAgICAgICAgIHBlclBhZ2U6IHBlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2Nyb2xsVG9QYWdlQ29udGVudCgpO1xyXG4gICAgfSwgW3F1ZXJ5LCBwZXJQYWdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9kdWN0cykgc2V0Rmlyc3RMb2FkaW5nKHRydWUpO1xyXG4gICAgfSwgW3Byb2R1Y3RzXSlcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICh0eXBlID09ICdsaXN0Jykge1xyXG4gICAgLy8gICAgICAgICBzZXRQYWdlVGl0bGUoJ0xpc3QnKTtcclxuICAgIC8vICAgICAgICAgc2V0UGVyUGFnZSgxMik7XHJcbiAgICAvLyAgICAgfSBlbHNlIGlmICh0eXBlID09ICcyY29scycpIHtcclxuICAgIC8vICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDIgQ29sdW1ucycpO1xyXG4gICAgLy8gICAgICAgICBzZXRQZXJQYWdlKDEyKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzNjb2xzJykge1xyXG4gICAgLy8gICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgMyBDb2x1bW5zJyk7XHJcbiAgICAvLyAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnNGNvbHMnKSB7XHJcbiAgICAvLyAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCA0IENvbHVtbnMnKTtcclxuICAgIC8vICAgICAgICAgc2V0UGVyUGFnZSgxMik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW3R5cGVdKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU29ydEJ5Q2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgcXVlcnlPYmplY3QgPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgbGV0IHVybCA9IHJvdXRlci5wYXRobmFtZS5yZXBsYWNlKCdbdHlwZV0nLCBxdWVyeS50eXBlKSArICc/JztcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcXVlcnlPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJ0eXBlXCIgJiYga2V5ICE9PSBcInNvcnRCeVwiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgcXVlcnlPYmplY3Rba2V5XSArICcmJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2godXJsICsgJ3NvcnRCeT0nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1maWx0ZXItYWN0aXZlJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4gc2hvcFwiPlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBbGwgU2VhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICBzdWJUaXRsZT1cIldlIG1ha2UgaGFwcHkgd29ya3BsYWNlc1wiXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XCJpbWFnZXMvYmFubmVycy9jYXRfYmFubmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiVmlldyBPdXIgUHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVXJsPVwiI1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXYgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj57cGFnZVRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNlYXJjaCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggLSB7cXVlcnkuc2VhcmNoVGVybX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1sZy05IHNrZWwtc2hvcC1wcm9kdWN0cyAkeyFsb2FkaW5nID8gJ2xvYWRlZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBwcm9kdWN0cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3Byb2R1Y3RzLmxlbmd0aH0gb2Yge3RvdGFsQ291bnR9PC9zcGFuPiBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtc29ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb3J0YnlcIj5Tb3J0IGJ5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzb3J0YnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNvcnRieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNvcnRCeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+RGVmYXVsdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVhdHVyZWRcIj5Nb3N0IFBvcHVsYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPk1vc3QgUmF0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ld1wiPkRhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1sYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJ2xpc3QnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci8yY29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnMmNvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzNjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzRjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICc0Y29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxOFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMThcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wTGlzdFR3byBwcm9kdWN0cz17cHJvZHVjdHN9IHBlclBhZ2U9e3BlclBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9PjwvU2hvcExpc3RUd28+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQgPiBwZXJQYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gcGVyUGFnZT17cGVyUGFnZX0gdG90YWw9e3RvdGFsQ291bnR9PjwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2Bjb2wtbGctMyBza2VsLXNob3Atc2lkZWJhciBvcmRlci1sZy1maXJzdCBza2VsZXRvbi1ib2R5ICR7KCFsb2FkaW5nIHx8IGZpcnN0TG9hZGluZykgPyAnbG9hZGVkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreUJveCBjbGFzc05hbWU9XCJzdGlja3ktY29udGVudFwiIG9mZnNldFRvcD17NzB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wU2lkZWJhck9uZSB0b2dnbGU9e3RvZ2dsZX0+PC9TaG9wU2lkZWJhck9uZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RpY2t5Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lkZWJhci1maXhlZC10b2dnbGVyXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNvZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1maWx0ZXItb3ZlcmxheVwiIG9uQ2xpY2s9e2hpZGVTaWRlYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyB9KShTaG9wR3JpZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==