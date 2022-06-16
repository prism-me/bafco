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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.location.href.split('/collections/')),
      pageTitle = _useState3[0],
      setPageTitle = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  var products = data && data.products.data;
  var totalCount = data && data.products.totalCount; // console.log('Total :: ', data);

  console.log(pageTitle); //yields: "/js" (where snippets run)

  console.log(window.location.href);
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
        lineNumber: 123,
        columnNumber: 16
      }
    });
  }

  return __jsx("main", {
    className: "main shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
      columnNumber: 13
    }
  }), __jsx("nav", {
    className: "breadcrumb-nav mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, pageTitle), query.search ? __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, "Search - ", query.searchTerm)) : ""))), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-9 skel-shop-products ".concat(!loading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "toolbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, !loading && products ? __jsx("div", {
    className: "toolbox-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 45
    }
  }, "Showing", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 49
    }
  }, " ", products.length, " of ", totalCount), " Products") : ""), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "toolbox-sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, __jsx("label", {
    htmlFor: "sortby",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, "Sort by:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 49
    }
  }, "Default"), __jsx("option", {
    value: "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 49
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 49
    }
  }, "Most Rated"), __jsx("option", {
    value: "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 49
    }
  }, "Date")))))), __jsx(_components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__.default, {
    products: products,
    perPage: perPage,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }), totalCount > perPage ? __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_7__.default, {
    perPage: perPage,
    total: totalCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 37
    }
  }) : ""), __jsx("aside", {
    className: "col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ".concat(!loading || firstLoading ? 'loaded' : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 25
    }
  }, __jsx("div", {
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
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 29
    }
  }), __jsx(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "sticky-content",
    offsetTop: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 29
    }
  }, __jsx(_components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 33
    }
  })), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-cog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 41
    }
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }))))));
}

_s(ShopGrid, "IFVoKLTUkwv0FgXgLOgMnQPMobo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvW3R5cGVdLmpzeCJdLCJuYW1lcyI6WyJTaG9wR3JpZCIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGUiLCJxdWVyeSIsInVzZUxhenlRdWVyeSIsIkdFVF9QUk9EVUNUUyIsImdldFByb2R1Y3RzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVN0YXRlIiwiZmlyc3RMb2FkaW5nIiwic2V0Rmlyc3RMb2FkaW5nIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsInBhZ2VUaXRsZSIsInNldFBhZ2VUaXRsZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInByb2R1Y3RzIiwidG90YWxDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFdpZHRoIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImNvbG9yIiwic2l6ZSIsImJyYW5kIiwibWluUHJpY2UiLCJwYXJzZUludCIsIm1heFByaWNlIiwiY2F0ZWdvcnkiLCJzb3J0QnkiLCJwYWdlIiwibGlzdCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJvblNvcnRCeUNoYW5nZSIsImUiLCJxdWVyeU9iamVjdCIsInVybCIsInBhdGhuYW1lIiwicmVwbGFjZSIsImtleSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZ2dsZVNpZGViYXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImhpZGVTaWRlYmFyIiwic2VhcmNoIiwibGVuZ3RoIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVB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LHFEQUFEO0FBQVcsYUFBUyxFQUFDLGdCQUFyQjtBQUFzQyxhQUFTLEVBQUUsRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdUZBQUQ7QUFBZ0IsVUFBTSxFQUFFVSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixFQVNRQSxNQUFNLEdBQ0Y7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQTBDLFdBQU8sRUFBRW9DLGFBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURFLEdBSUEsRUFiZCxFQWVJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQXdDLFdBQU8sRUFBRUssV0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBekdKLENBREosQ0FESixDQTFCSixDQURKO0FBNEpIOztHQTFRUS9ELFE7VUFDVUUsa0QsRUFHaUNHLDhEOzs7S0FKM0NMLFE7QUE0UVQsK0RBQWVrRSx1REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FBa0RuRSxRQUFsRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS45NzAzNjUxODMzMDRhYjIxNDQ2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBTdGlja3lCb3ggZnJvbSAncmVhY3Qtc3RpY2t5LWJveCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IFNob3BMaXN0VHdvIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LXR3byc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uJztcclxuaW1wb3J0IFNob3BTaWRlYmFyT25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2hvcC1zaWRlYmFyLW9uZSc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9QYWdlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gU2hvcEdyaWQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW2dldFByb2R1Y3RzLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9QUk9EVUNUUyk7XHJcbiAgICBjb25zdCBbZmlyc3RMb2FkaW5nLCBzZXRGaXJzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoNSk7XHJcbiAgICBjb25zdCBbcGFnZVRpdGxlLCBzZXRQYWdlVGl0bGVdID0gdXNlU3RhdGUod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy9jb2xsZWN0aW9ucy8nKSk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhICYmIGRhdGEucHJvZHVjdHMuZGF0YTtcclxuICAgIGNvbnN0IHRvdGFsQ291bnQgPSBkYXRhICYmIGRhdGEucHJvZHVjdHMudG90YWxDb3VudDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnVG90YWwgOjogJywgZGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFnZVRpdGxlKTsgLy95aWVsZHM6IFwiL2pzXCIgKHdoZXJlIHNuaXBwZXRzIHJ1bilcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZSk7XHJcbiAgICAgICAgcmVzaXplSGFuZGxlKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLm9mZnNldFdpZHRoIDwgOTkyKVxyXG4gICAgICAgICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvZHVjdHMoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHF1ZXJ5LnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcXVlcnkuY29sb3IgPyBxdWVyeS5jb2xvci5zcGxpdCgnLCcpIDogW10sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBxdWVyeS5zaXplID8gcXVlcnkuc2l6ZS5zcGxpdCgnLCcpIDogW10sXHJcbiAgICAgICAgICAgICAgICBicmFuZDogcXVlcnkuYnJhbmQgPyBxdWVyeS5icmFuZC5zcGxpdCgnLCcpIDogW10sXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZTogcGFyc2VJbnQocXVlcnkubWluUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgbWF4UHJpY2U6IHBhcnNlSW50KHF1ZXJ5Lm1heFByaWNlKSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBxdWVyeS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIHNvcnRCeTogcXVlcnkuc29ydEJ5ID8gcXVlcnkuc29ydEJ5IDogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZSA/IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpIDogMSxcclxuICAgICAgICAgICAgICAgIHBlclBhZ2U6IHBlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2Nyb2xsVG9QYWdlQ29udGVudCgpO1xyXG4gICAgfSwgW3F1ZXJ5LCBwZXJQYWdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9kdWN0cykgc2V0Rmlyc3RMb2FkaW5nKHRydWUpO1xyXG4gICAgfSwgW3Byb2R1Y3RzXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09ICdsaXN0Jykge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoJ0xpc3QnKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSgxMik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICcyY29scycpIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDIgQ29sdW1ucycpO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKDEyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzNjb2xzJykge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgMyBDb2x1bW5zJyk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnNGNvbHMnKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCA0IENvbHVtbnMnKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSgxMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3R5cGVdKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU29ydEJ5Q2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgcXVlcnlPYmplY3QgPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgbGV0IHVybCA9IHJvdXRlci5wYXRobmFtZS5yZXBsYWNlKCdbdHlwZV0nLCBxdWVyeS50eXBlKSArICc/JztcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcXVlcnlPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJ0eXBlXCIgJiYga2V5ICE9PSBcInNvcnRCeVwiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgcXVlcnlPYmplY3Rba2V5XSArICcmJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2godXJsICsgJ3NvcnRCeT0nICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1maWx0ZXItYWN0aXZlJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4gc2hvcFwiPlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBbGwgU2VhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICBzdWJUaXRsZT1cIldlIG1ha2UgaGFwcHkgd29ya3BsYWNlc1wiXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XCJpbWFnZXMvYmFubmVycy9jYXRfYmFubmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiVmlldyBPdXIgUHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVXJsPVwiI1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXYgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj57cGFnZVRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNlYXJjaCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggLSB7cXVlcnkuc2VhcmNoVGVybX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1sZy05IHNrZWwtc2hvcC1wcm9kdWN0cyAkeyFsb2FkaW5nID8gJ2xvYWRlZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBwcm9kdWN0cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3Byb2R1Y3RzLmxlbmd0aH0gb2Yge3RvdGFsQ291bnR9PC9zcGFuPiBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtc29ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb3J0YnlcIj5Tb3J0IGJ5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzb3J0YnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNvcnRieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNvcnRCeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+RGVmYXVsdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVhdHVyZWRcIj5Nb3N0IFBvcHVsYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPk1vc3QgUmF0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ld1wiPkRhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1sYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJ2xpc3QnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci8yY29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnMmNvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzNjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzRjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICc0Y29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxOFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMThcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wTGlzdFR3byBwcm9kdWN0cz17cHJvZHVjdHN9IHBlclBhZ2U9e3BlclBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9PjwvU2hvcExpc3RUd28+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQgPiBwZXJQYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gcGVyUGFnZT17cGVyUGFnZX0gdG90YWw9e3RvdGFsQ291bnR9PjwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2Bjb2wtbGctMyBza2VsLXNob3Atc2lkZWJhciBvcmRlci1sZy1maXJzdCBza2VsZXRvbi1ib2R5ICR7KCFsb2FkaW5nIHx8IGZpcnN0TG9hZGluZykgPyAnbG9hZGVkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreUJveCBjbGFzc05hbWU9XCJzdGlja3ktY29udGVudFwiIG9mZnNldFRvcD17NzB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wU2lkZWJhck9uZSB0b2dnbGU9e3RvZ2dsZX0+PC9TaG9wU2lkZWJhck9uZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RpY2t5Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lkZWJhci1maXhlZC10b2dnbGVyXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNvZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1maWx0ZXItb3ZlcmxheVwiIG9uQ2xpY2s9e2hpZGVTaWRlYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyB9KShTaG9wR3JpZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==