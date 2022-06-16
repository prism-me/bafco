(function() {
var exports = {};
exports.id = "pages/collections/[type]";
exports.ids = ["pages/collections/[type]"];
exports.modules = {

/***/ "./components/features/page-header.jsx":
/*!*********************************************!*\
  !*** ./components/features/page-header.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\page-header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function PageHeader(props) {
  const {
    title,
    subTitle,
    backgroundImage,
    buttonText,
    buttonUrl
  } = props;
  return __jsx("div", {
    className: "page-header text-center",
    style: {
      backgroundImage: `url(${backgroundImage !== "" || backgroundImage !== undefined ? backgroundImage : "images/page-header-bg.jpg"})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "page-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 44
    }
  }, subTitle), title), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: "#",
    className: "btn btn-dark btn-outline-darker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, buttonText), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(PageHeader));

/***/ }),

/***/ "./components/features/pagination.jsx":
/*!********************************************!*\
  !*** ./components/features/pagination.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\pagination.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Pagination(props) {
  const {
    perPage,
    total
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: lastPage,
    1: setLastPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: pageNumbers,
    1: setPageNumbers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrentPage(query.page ? parseInt(query.page) : 1);
  }, [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLastPage(parseInt(total / perPage) + (total % perPage ? 1 : 0));
  }, [total, perPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let tempArray = [];
    let pageCount = Math.floor(total / perPage) + (0 < total % perPage ? 1 : 0);

    for (let i = -1; i < 2 && pageCount >= 3; i++) {
      if (1 < currentPage && currentPage < pageCount) tempArray.push(currentPage + i);
      if (1 === currentPage) tempArray.push(currentPage + i + 1);
      if (currentPage === pageCount) tempArray.push(currentPage + i - 1);
    }

    for (let i = 0; i < pageCount && pageCount < 3; i++) {
      tempArray.push(i + 1);
    }

    setPageNumbers(tempArray);
  }, [total, perPage, currentPage]);
  return __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "pagination justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: `page-item ${currentPage < 2 ? 'disabled' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link page-link-prev",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: currentPage - 1
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-long-arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  })), "Prev")), pageNumbers.length ? pageNumbers.map((page, index) => __jsx("li", {
    className: `page-item ${currentPage == page ? 'active' : ''}`,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: page
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, page))) : "", lastPage > 3 ? __jsx("li", {
    className: "page-item-total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "of ", lastPage) : "", __jsx("li", {
    className: `page-item ${currentPage == lastPage ? 'disabled' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "page-link page-link-next",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: currentPage + 1
      })
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "Next", __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/partials/shop/list/shop-list-two.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/shop/list/shop-list-two.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/products/product-twelve */ "./components/features/products/product-twelve.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\shop\\list\\shop-list-two.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ShopListThree(props) {
  const {
    products = [],
    loading
  } = props;
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return __jsx("div", {
    className: `products mb-3 skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "No products matching your selection.") : __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, loading ? fakeArray.map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-xl-3 mb-2",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 41
    }
  }))) : products.map((product, index) => __jsx("div", {
    className: "col-6 col-md-4 col-xl-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 37
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_1__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopListThree));

/***/ }),

/***/ "./components/partials/shop/sidebar/shop-sidebar-one.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/shop/sidebar/shop-sidebar-one.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-range */ "react-input-range");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-range/lib/css/index.css */ "./node_modules/react-input-range/lib/css/index.css");
/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\shop\\sidebar\\shop-sidebar-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function ShopSidebarOne(props) {
  const {
    toggle = false
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  const {
    0: priceRange,
    1: setRange
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    min: 0,
    max: 1000
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (query.minPrice && query.maxPrice) {
      setRange({
        min: parseInt(query.minPrice),
        max: parseInt(query.maxPrice)
      });
    } else {
      setRange({
        min: 0,
        max: 1000
      });
    }
  }, [query]);

  function onChangePriceRange(value) {
    setRange(value);
  }

  function containsAttrInUrl(type, value) {
    const currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && currentQueries.includes(value);
  }

  function getUrlForAttrs(type, value) {
    let currentQueries = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
    return {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        [type]: currentQueries.join(',')
      })
    };
  }

  function onAttrClick(e, attr, value) {
    if (getUrlForAttrs(attr, value)) {
      let queryObject = getUrlForAttrs(attr, value).query;
      let url = router.pathname.replace('[type]', query.type) + '?';

      for (let key in queryObject) {
        if (key !== "type") {
          url += key + '=' + queryObject[key] + '&';
        }
      }

      router.push(url);
    }
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("aside", {
    className: `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: toggle ? 'sidebar-filter-wrapper' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "widget widget-clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "Filters:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: {
      pathname: router.pathname,
      query: {
        type: query.type
      }
    },
    className: "sidebar-filter-clear",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "Clean All")), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#category",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, "Category")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "filter-items filter-items-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, _utils_data__WEBPACK_IMPORTED_MODULE_6__.shopData.categories.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: `cat_${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: `${query.category == item.slug ? 'active' : ''}`,
    href: {
      pathname: router.pathname,
      query: {
        type: query.type,
        category: item.slug
      }
    },
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 57
    }
  }, item.name), __jsx("span", {
    className: "item-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 57
    }
  }, item.count)))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#brand",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 71
    }
  }, "Brand")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 45
    }
  }, _utils_data__WEBPACK_IMPORTED_MODULE_6__.shopData.brands.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 61
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `brand-${index + 1}`,
    onChange: e => onAttrClick(e, 'brand', item.slug),
    checked: containsAttrInUrl('brand', item.slug) ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 65
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: `brand-${index + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 65
    }
  }, item.brand))))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#Size",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 71
    }
  }, "Type")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 45
    }
  }, _utils_data__WEBPACK_IMPORTED_MODULE_6__.shopData.sizes.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 61
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `size-${index + 1}`,
    onChange: e => onAttrClick(e, 'size', item.slug),
    checked: containsAttrInUrl('size', item.slug) ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 65
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: `size-${index + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 65
    }
  }, item.size))))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#colour",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 71
    }
  }, "Colour")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 45
    }
  }, _utils_data__WEBPACK_IMPORTED_MODULE_6__.shopData.colors.map((item, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: getUrlForAttrs('color', item.color_name),
    className: containsAttrInUrl('color', item.color_name) ? 'selected' : '',
    style: {
      backgroundColor: item.color
    },
    key: index,
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 57
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 61
    }
  }, "Color Name")))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#price",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, "Price")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "filter-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-price-text d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 49
    }
  }, "Price Range:\xA0", __jsx("span", {
    className: "filter-price-range",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 53
    }
  }, "Dhs", priceRange.min, " - Dhs", priceRange.max)), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
        page: 1
      })
    },
    className: "pr-2",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 49
    }
  }, "Filter")), __jsx("div", {
    className: "price-slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 45
    }
  }, __jsx((react_input_range__WEBPACK_IMPORTED_MODULE_2___default()), {
    formatLabel: value => `${value}`,
    maxValue: 1000,
    minValue: 0,
    step: 50,
    value: priceRange,
    onChange: onChangePriceRange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopSidebarOne));

/***/ }),

/***/ "./pages/collections/[type].jsx":
/*!**************************************!*\
  !*** ./pages/collections/[type].jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sticky-box */ "react-sticky-box");
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/page-header */ "./components/features/page-header.jsx");
/* harmony import */ var _components_partials_shop_list_shop_list_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/shop/list/shop-list-two */ "./components/partials/shop/list/shop-list-two.jsx");
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/pagination */ "./components/features/pagination.jsx");
/* harmony import */ var _components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/shop/sidebar/shop-sidebar-one */ "./components/partials/shop/sidebar/shop-sidebar-one.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\collections\\[type].jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);













function ShopGrid() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const type = router.query.type;
  const query = router.query;
  const [getProducts, {
    data,
    loading,
    error
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__.GET_PRODUCTS);
  const {
    0: firstLoading,
    1: setFirstLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: perPage,
    1: setPerPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(12);
  const {
    0: pageTitle,
    1: setPageTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(type);
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const products = data && data.products.data;
  const totalCount = data && data.products.totalCount;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);else setToggle(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    let queryObject = router.query;
    let url = router.pathname.replace('[type]', query.type) + '?';

    for (let key in queryObject) {
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
    title: `All ${pageTitle}`,
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
    className: `col-lg-9 skel-shop-products ${!loading ? 'loaded' : ''}`,
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
    className: `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${!loading || firstLoading ? 'loaded' : ''}`,
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
  }), __jsx((react_sticky_box__WEBPACK_IMPORTED_MODULE_3___default()), {
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

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__.default)({
  ssr: true
})(ShopGrid));

/***/ }),

/***/ "./node_modules/react-input-range/lib/css/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-input-range/lib/css/index.css ***!
  \**********************************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-input-range":
/*!************************************!*\
  !*** external "react-input-range" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-input-range");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-slide-toggle":
/*!*************************************!*\
  !*** external "react-slide-toggle" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ "react-sticky-box":
/*!***********************************!*\
  !*** external "react-sticky-box" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx-server_apollo_js-server_queries_js-store_cart_js-store_compare_-9b7470","components_features_products_product-twelve_jsx-utils_data_js"], function() { return __webpack_exec__("./pages/collections/[type].jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnZS1oZWFkZXIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9saXN0L3Nob3AtbGlzdC10d28uanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2hvcC1zaWRlYmFyLW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9wYWdlcy9jb2xsZWN0aW9ucy9bdHlwZV0uanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW5wdXQtcmFuZ2VcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3ktYm94XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiUGFnZUhlYWRlciIsInByb3BzIiwidGl0bGUiLCJzdWJUaXRsZSIsImJhY2tncm91bmRJbWFnZSIsImJ1dHRvblRleHQiLCJidXR0b25VcmwiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIlBhZ2luYXRpb24iLCJwZXJQYWdlIiwidG90YWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ1c2VTdGF0ZSIsImxhc3RQYWdlIiwic2V0TGFzdFBhZ2UiLCJwYWdlTnVtYmVycyIsInNldFBhZ2VOdW1iZXJzIiwidXNlRWZmZWN0IiwicGFnZSIsInBhcnNlSW50IiwidGVtcEFycmF5IiwicGFnZUNvdW50IiwiTWF0aCIsImZsb29yIiwiaSIsInB1c2giLCJwYXRobmFtZSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiU2hvcExpc3RUaHJlZSIsInByb2R1Y3RzIiwibG9hZGluZyIsImZha2VBcnJheSIsIml0ZW0iLCJwcm9kdWN0IiwiU2hvcFNpZGViYXJPbmUiLCJ0b2dnbGUiLCJwcmljZVJhbmdlIiwic2V0UmFuZ2UiLCJtaW4iLCJtYXgiLCJtaW5QcmljZSIsIm1heFByaWNlIiwib25DaGFuZ2VQcmljZVJhbmdlIiwidmFsdWUiLCJjb250YWluc0F0dHJJblVybCIsInR5cGUiLCJjdXJyZW50UXVlcmllcyIsInNwbGl0IiwiaW5jbHVkZXMiLCJnZXRVcmxGb3JBdHRycyIsImZpbHRlciIsImpvaW4iLCJvbkF0dHJDbGljayIsImUiLCJhdHRyIiwicXVlcnlPYmplY3QiLCJ1cmwiLCJyZXBsYWNlIiwia2V5Iiwib25Ub2dnbGUiLCJzZXRDb2xsYXBzaWJsZUVsZW1lbnQiLCJ0b2dnbGVTdGF0ZSIsInRvTG93ZXJDYXNlIiwicHJldmVudERlZmF1bHQiLCJzaG9wRGF0YSIsImNhdGVnb3J5Iiwic2x1ZyIsIm5hbWUiLCJjb3VudCIsImJyYW5kIiwic2l6ZSIsImNvbG9yX25hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlNob3BHcmlkIiwiZ2V0UHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJmaXJzdExvYWRpbmciLCJzZXRGaXJzdExvYWRpbmciLCJzZXRQZXJQYWdlIiwicGFnZVRpdGxlIiwic2V0UGFnZVRpdGxlIiwic2V0VG9nZ2xlIiwidG90YWxDb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVIYW5kbGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0V2lkdGgiLCJ2YXJpYWJsZXMiLCJzZWFyY2hUZXJtIiwic29ydEJ5IiwibGlzdCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJvblNvcnRCeUNoYW5nZSIsInRhcmdldCIsInRvZ2dsZVNpZGViYXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImhpZGVTaWRlYmFyIiwic2VhcmNoIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDdkIsUUFBTTtBQUFFQyxTQUFGO0FBQVNDLFlBQVQ7QUFBbUJDLG1CQUFuQjtBQUFvQ0MsY0FBcEM7QUFBZ0RDO0FBQWhELE1BQThETCxLQUFwRTtBQUVBLFNBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBeUMsU0FBSyxFQUFFO0FBQUVHLHFCQUFlLEVBQUcsT0FBTUEsZUFBZSxLQUFLLEVBQXBCLElBQTBCQSxlQUFlLEtBQUtHLFNBQTlDLEdBQTBESCxlQUExRCxHQUE0RSwyQkFBNEI7QUFBbEksS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ELFFBQVAsQ0FBM0IsRUFBbURELEtBQW5ELENBREosRUFFSSxNQUFDLCtEQUFEO0FBQU8sUUFBSSxFQUFFLEdBQWI7QUFBa0IsYUFBUyxFQUFDLGlDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRyxVQUFQLENBREosRUFFSTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FGSixDQURKLENBREo7QUFXSDs7QUFFRCw0RUFBZUcsaURBQUEs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Qzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9jb2xsZWN0aW9ucy9bdHlwZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIFBhZ2VIZWFkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIHN1YlRpdGxlLCBiYWNrZ3JvdW5kSW1hZ2UsIGJ1dHRvblRleHQsIGJ1dHRvblVybCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlICE9PSBcIlwiIHx8IGJhY2tncm91bmRJbWFnZSAhPT0gdW5kZWZpbmVkID8gYmFja2dyb3VuZEltYWdlIDogXCJpbWFnZXMvcGFnZS1oZWFkZXItYmcuanBnXCJ9KWAgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj48c3Bhbj57c3ViVGl0bGV9PC9zcGFuPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLW91dGxpbmUtZGFya2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2J1dHRvblRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYWdlSGVhZGVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHBlclBhZ2UsIHRvdGFsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcXVlcnkgPSB1c2VSb3V0ZXIoKS5xdWVyeTtcclxuICAgIGNvbnN0IFsgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlIF0gPSB1c2VTdGF0ZSggMSApO1xyXG4gICAgY29uc3QgWyBsYXN0UGFnZSwgc2V0TGFzdFBhZ2UgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHBhZ2VOdW1iZXJzLCBzZXRQYWdlTnVtYmVycyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoIHF1ZXJ5LnBhZ2UgPyBwYXJzZUludCggcXVlcnkucGFnZSApIDogMSApO1xyXG4gICAgfSwgWyBxdWVyeSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRMYXN0UGFnZSggcGFyc2VJbnQoIHRvdGFsIC8gcGVyUGFnZSApICsgKCB0b3RhbCAlIHBlclBhZ2UgPyAxIDogMCApICk7XHJcbiAgICB9LCBbIHRvdGFsLCBwZXJQYWdlIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgcGFnZUNvdW50ID0gTWF0aC5mbG9vciggdG90YWwgLyBwZXJQYWdlICkgKyAoIDAgPCB0b3RhbCAlIHBlclBhZ2UgPyAxIDogMCApO1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IC0xOyBpIDwgMiAmJiBwYWdlQ291bnQgPj0gMzsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoIDEgPCBjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA8IHBhZ2VDb3VudCApXHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCggY3VycmVudFBhZ2UgKyBpICk7XHJcbiAgICAgICAgICAgIGlmICggMSA9PT0gY3VycmVudFBhZ2UgKVxyXG4gICAgICAgICAgICAgICAgdGVtcEFycmF5LnB1c2goIGN1cnJlbnRQYWdlICsgaSArIDEgKTtcclxuICAgICAgICAgICAgaWYgKCBjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50IClcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKCBjdXJyZW50UGFnZSArIGkgLSAxICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYWdlQ291bnQgJiYgcGFnZUNvdW50IDwgMzsgaSsrICkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCggaSArIDEgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZ2VOdW1iZXJzKCB0ZW1wQXJyYXkgKTtcclxuICAgIH0sIFsgdG90YWwsIHBlclBhZ2UsIGN1cnJlbnRQYWdlIF0gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IGBwYWdlLWl0ZW0gJHtjdXJyZW50UGFnZSA8IDIgPyAnZGlzYWJsZWQnIDogJyd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcGFnZS1saW5rLXByZXZcIiBocmVmPXsge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSAtIDEgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlByZXZcclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcnMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcnMubWFwKCAoIHBhZ2UsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IGBwYWdlLWl0ZW0gJHtjdXJyZW50UGFnZSA9PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gIH0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHtwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgcGFnZTogcGFnZSB9IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgcGFnZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA+IDMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtLXRvdGFsXCI+b2YgeyBsYXN0UGFnZSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBgcGFnZS1pdGVtICR7Y3VycmVudFBhZ2UgPT0gbGFzdFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcGFnZS1saW5rLW5leHRcIiBocmVmPXsge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0Rml2ZSBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10d2VsdmUnO1xyXG5cclxuZnVuY3Rpb24gU2hvcExpc3RUaHJlZSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyA9IFtdLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGZha2VBcnJheSA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcHJvZHVjdHMgbWItMyBza2VsZXRvbi1ib2R5IHNrZWwtc2hvcC1wcm9kdWN0cyAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKCBwcm9kdWN0cy5sZW5ndGggPT0gMCAmJiAhbG9hZGluZyApID9cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1yZXN1bHRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+Tm8gcHJvZHVjdHMgbWF0Y2hpbmcgeW91ciBzZWxlY3Rpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWtlQXJyYXkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC14bC0zIG1iLTJcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIHByb2R1Y3QsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC14bC0zXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Rml2ZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggU2hvcExpc3RUaHJlZSApOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJztcclxuaW1wb3J0IFNsaWRlVG9nZ2xlIGZyb20gJ3JlYWN0LXNsaWRlLXRvZ2dsZSc7XHJcbmltcG9ydCAncmVhY3QtaW5wdXQtcmFuZ2UvbGliL2Nzcy9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCB7IHNob3BEYXRhIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIFNob3BTaWRlYmFyT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHRvZ2dsZSA9IGZhbHNlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcXVlcnkgPSB1c2VSb3V0ZXIoKS5xdWVyeTtcclxuICAgIGNvbnN0IFsgcHJpY2VSYW5nZSwgc2V0UmFuZ2UgXSA9IHVzZVN0YXRlKCB7IG1pbjogMCwgbWF4OiAxMDAwIH0gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHF1ZXJ5Lm1pblByaWNlICYmIHF1ZXJ5Lm1heFByaWNlICkge1xyXG4gICAgICAgICAgICBzZXRSYW5nZSggeyBtaW46IHBhcnNlSW50KCBxdWVyeS5taW5QcmljZSApLCBtYXg6IHBhcnNlSW50KCBxdWVyeS5tYXhQcmljZSApIH0gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSYW5nZSggeyBtaW46IDAsIG1heDogMTAwMCB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBxdWVyeSBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZVByaWNlUmFuZ2UgKCB2YWx1ZSApIHtcclxuICAgICAgICBzZXRSYW5nZSggdmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb250YWluc0F0dHJJblVybCAoIHR5cGUsIHZhbHVlICkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gcXVlcnlbIHR5cGUgXSA/IHF1ZXJ5WyB0eXBlIF0uc3BsaXQoICcsJyApIDogW107XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVyaWVzICYmIGN1cnJlbnRRdWVyaWVzLmluY2x1ZGVzKCB2YWx1ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFVybEZvckF0dHJzICggdHlwZSwgdmFsdWUgKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRRdWVyaWVzID0gcXVlcnlbIHR5cGUgXSA/IHF1ZXJ5WyB0eXBlIF0uc3BsaXQoICcsJyApIDogW107XHJcbiAgICAgICAgY3VycmVudFF1ZXJpZXMgPSBjb250YWluc0F0dHJJblVybCggdHlwZSwgdmFsdWUgKSA/IGN1cnJlbnRRdWVyaWVzLmZpbHRlciggaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSApIDogWyAuLi5jdXJyZW50UXVlcmllcywgdmFsdWUgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIFsgdHlwZSBdOiBjdXJyZW50UXVlcmllcy5qb2luKCAnLCcgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQXR0ckNsaWNrICggZSwgYXR0ciwgdmFsdWUgKSB7XHJcbiAgICAgICAgaWYgKCBnZXRVcmxGb3JBdHRycyggYXR0ciwgdmFsdWUgKSApIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5T2JqZWN0ID0gZ2V0VXJsRm9yQXR0cnMoIGF0dHIsIHZhbHVlICkucXVlcnk7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSggJ1t0eXBlXScsIHF1ZXJ5LnR5cGUgKSArICc/JztcclxuICAgICAgICAgICAgZm9yICggbGV0IGtleSBpbiBxdWVyeU9iamVjdCApIHtcclxuICAgICAgICAgICAgICAgIGlmICgga2V5ICE9PSBcInR5cGVcIiApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgcXVlcnlPYmplY3RbIGtleSBdICsgJyYnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCB1cmwgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlID8gJ3NpZGViYXItZmlsdGVyJyA6ICdzaWRlYmFyJ30gc2lkZWJhci1zaG9wYCB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyB0b2dnbGUgPyAnc2lkZWJhci1maWx0ZXItd3JhcHBlcicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldC1jbGVhblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmlsdGVyczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHt0eXBlOiBxdWVyeS50eXBlfSB9IH0gY2xhc3NOYW1lPVwic2lkZWJhci1maWx0ZXItY2xlYXJcIiBzY3JvbGw9eyBmYWxzZSB9PkNsZWFuIEFsbDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY2F0ZWdvcnlcIiBjbGFzc05hbWU9eyBgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdjb2xsYXBzZWQnID8gJ2NvbGxhcHNlZCcgOiAnJ31gIH0gb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT5DYXRlZ29yeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5IHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1zIGZpbHRlci1pdGVtcy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcERhdGEuY2F0ZWdvcmllcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbVwiIGtleT17IGBjYXRfJHtpbmRleH1gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGNsYXNzTmFtZT17IGAke3F1ZXJ5LmNhdGVnb3J5ID09IGl0ZW0uc2x1ZyA/ICdhY3RpdmUnIDogJyd9YCB9IGhyZWY9eyB7cGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHsgdHlwZTogcXVlcnkudHlwZSwgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH0gfSBzY3JvbGw9eyBmYWxzZSB9PnsgaXRlbS5uYW1lIH08L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tY291bnRcIj57IGl0ZW0uY291bnQgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBtYi0yXCI+PGEgaHJlZj1cIiNicmFuZFwiIGNsYXNzTmFtZT17IGAke3RvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2NvbGxhcHNlZCcgPyAnY29sbGFwc2VkJyA6ICcnfWAgfSBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9PkJyYW5kPC9hPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5IHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9wRGF0YS5icmFuZHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eyBgYnJhbmQtJHtpbmRleCArIDF9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IG9uQXR0ckNsaWNrKCBlLCAnYnJhbmQnLCBpdGVtLnNsdWcgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGNvbnRhaW5zQXR0ckluVXJsKCAnYnJhbmQnLCBpdGVtLnNsdWcgKSA/IHRydWUgOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj17IGBicmFuZC0ke2luZGV4ICsgMX1gIH0+eyBpdGVtLmJyYW5kIH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPjxhIGhyZWY9XCIjU2l6ZVwiIGNsYXNzTmFtZT17IGAke3RvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2NvbGxhcHNlZCcgPyAnY29sbGFwc2VkJyA6ICcnfWAgfSBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9PlR5cGU8L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3BEYXRhLnNpemVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17IGBzaXplLSR7aW5kZXggKyAxfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBvbkF0dHJDbGljayggZSwgJ3NpemUnLCBpdGVtLnNsdWcgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGNvbnRhaW5zQXR0ckluVXJsKCAnc2l6ZScsIGl0ZW0uc2x1ZyApID8gdHJ1ZSA6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXsgYHNpemUtJHtpbmRleCArIDF9YCB9PnsgaXRlbS5zaXplIH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPjxhIGhyZWY9XCIjY29sb3VyXCIgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnY29sbGFwc2VkJyA/ICdjb2xsYXBzZWQnIDogJyd9YCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+Q29sb3VyPC9hPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5IHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcERhdGEuY29sb3JzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGdldFVybEZvckF0dHJzKCAnY29sb3InLCBpdGVtLmNvbG9yX25hbWUgKSB9IGNsYXNzTmFtZT17IGNvbnRhaW5zQXR0ckluVXJsKCAnY29sb3InLCBpdGVtLmNvbG9yX25hbWUgKSA/ICdzZWxlY3RlZCcgOiAnJyB9IHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9IGtleT17IGluZGV4IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbG9yIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldC1jb2xsYXBzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3ByaWNlXCIgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnY29sbGFwc2VkJyA/ICdjb2xsYXBzZWQnIDogJyd9YCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+UHJpY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keSBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXByaWNlLXRleHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2UgUmFuZ2U6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItcHJpY2UtcmFuZ2VcIj5EaHN7IHByaWNlUmFuZ2UubWluIH0gLSBEaHN7IHByaWNlUmFuZ2UubWF4IH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgbWluUHJpY2U6IHByaWNlUmFuZ2UubWluLCBtYXhQcmljZTogcHJpY2VSYW5nZS5tYXgsIHBhZ2U6IDEgfSB9IH0gY2xhc3NOYW1lPVwicHItMlwiIHNjcm9sbD17IGZhbHNlIH0+RmlsdGVyPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1zbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0UmFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdExhYmVsPXsgdmFsdWUgPT4gYCR7dmFsdWV9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZT17IDEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWU9eyAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9eyA1MCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHByaWNlUmFuZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVByaWNlUmFuZ2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIFNob3BTaWRlYmFyT25lICk7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBTdGlja3lCb3ggZnJvbSAncmVhY3Qtc3RpY2t5LWJveCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2UtaGVhZGVyJztcclxuaW1wb3J0IFNob3BMaXN0VHdvIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LXR3byc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uJztcclxuaW1wb3J0IFNob3BTaWRlYmFyT25lIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2hvcC1zaWRlYmFyLW9uZSc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVFMgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9QYWdlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gU2hvcEdyaWQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW2dldFByb2R1Y3RzLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9QUk9EVUNUUyk7XHJcbiAgICBjb25zdCBbZmlyc3RMb2FkaW5nLCBzZXRGaXJzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoMTIpO1xyXG4gICAgY29uc3QgW3BhZ2VUaXRsZSwgc2V0UGFnZVRpdGxlXSA9IHVzZVN0YXRlKHR5cGUpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCB0b3RhbENvdW50ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLnRvdGFsQ291bnQ7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGUpO1xyXG4gICAgICAgIHJlc2l6ZUhhbmRsZSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5vZmZzZXRXaWR0aCA8IDk5MilcclxuICAgICAgICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2R1Y3RzKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBxdWVyeS5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHF1ZXJ5LmNvbG9yID8gcXVlcnkuY29sb3Iuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogcXVlcnkuc2l6ZSA/IHF1ZXJ5LnNpemUuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHF1ZXJ5LmJyYW5kID8gcXVlcnkuYnJhbmQuc3BsaXQoJywnKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgbWluUHJpY2U6IHBhcnNlSW50KHF1ZXJ5Lm1pblByaWNlKSxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlOiBwYXJzZUludChxdWVyeS5tYXhQcmljZSksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHF1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UgPyBwYXJzZUludChxdWVyeS5wYWdlKSA6IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJQYWdlOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjcm9sbFRvUGFnZUNvbnRlbnQoKTtcclxuICAgIH0sIFtxdWVyeSwgcGVyUGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdHMpIHNldEZpcnN0TG9hZGluZyh0cnVlKTtcclxuICAgIH0sIFtwcm9kdWN0c10pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAodHlwZSA9PSAnbGlzdCcpIHtcclxuICAgIC8vICAgICAgICAgc2V0UGFnZVRpdGxlKCdMaXN0Jyk7XHJcbiAgICAvLyAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnMmNvbHMnKSB7XHJcbiAgICAvLyAgICAgICAgIHNldFBhZ2VUaXRsZSgnR3JpZCAyIENvbHVtbnMnKTtcclxuICAgIC8vICAgICAgICAgc2V0UGVyUGFnZSgxMik7XHJcbiAgICAvLyAgICAgfSBlbHNlIGlmICh0eXBlID09ICczY29scycpIHtcclxuICAgIC8vICAgICAgICAgc2V0UGFnZVRpdGxlKCdHcmlkIDMgQ29sdW1ucycpO1xyXG4gICAgLy8gICAgICAgICBzZXRQZXJQYWdlKDEyKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJzRjb2xzJykge1xyXG4gICAgLy8gICAgICAgICBzZXRQYWdlVGl0bGUoJ0dyaWQgNCBDb2x1bW5zJyk7XHJcbiAgICAvLyAgICAgICAgIHNldFBlclBhZ2UoMTIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFt0eXBlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBvblNvcnRCeUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqZWN0ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgIGxldCB1cmwgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSgnW3R5cGVdJywgcXVlcnkudHlwZSkgKyAnPyc7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHF1ZXJ5T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09IFwidHlwZVwiICYmIGtleSAhPT0gXCJzb3J0QnlcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGtleSArICc9JyArIHF1ZXJ5T2JqZWN0W2tleV0gKyAnJic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKHVybCArICdzb3J0Qnk9JyArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1maWx0ZXItYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluIHNob3BcIj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgQWxsICR7cGFnZVRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICBzdWJUaXRsZT1cIldlIG1ha2UgaGFwcHkgd29ya3BsYWNlc1wiXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XCJpbWFnZXMvYmFubmVycy9jYXRfYmFubmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiVmlldyBPdXIgUHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVXJsPVwiI1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXYgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj57cGFnZVRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNlYXJjaCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggLSB7cXVlcnkuc2VhcmNoVGVybX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1sZy05IHNrZWwtc2hvcC1wcm9kdWN0cyAkeyFsb2FkaW5nID8gJ2xvYWRlZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBwcm9kdWN0cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3Byb2R1Y3RzLmxlbmd0aH0gb2Yge3RvdGFsQ291bnR9PC9zcGFuPiBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtc29ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb3J0YnlcIj5Tb3J0IGJ5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzb3J0YnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNvcnRieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNvcnRCeUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+RGVmYXVsdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVhdHVyZWRcIj5Nb3N0IFBvcHVsYXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdGluZ1wiPk1vc3QgUmF0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ld1wiPkRhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJveC1sYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJ2xpc3QnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci8yY29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnMmNvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzNjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzRjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICc0Y29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxOFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMThcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wTGlzdFR3byBwcm9kdWN0cz17cHJvZHVjdHN9IHBlclBhZ2U9e3BlclBhZ2V9IGxvYWRpbmc9e2xvYWRpbmd9PjwvU2hvcExpc3RUd28+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQgPiBwZXJQYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gcGVyUGFnZT17cGVyUGFnZX0gdG90YWw9e3RvdGFsQ291bnR9PjwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2Bjb2wtbGctMyBza2VsLXNob3Atc2lkZWJhciBvcmRlci1sZy1maXJzdCBza2VsZXRvbi1ib2R5ICR7KCFsb2FkaW5nIHx8IGZpcnN0TG9hZGluZykgPyAnbG9hZGVkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXdpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreUJveCBjbGFzc05hbWU9XCJzdGlja3ktY29udGVudFwiIG9mZnNldFRvcD17NzB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wU2lkZWJhck9uZSB0b2dnbGU9e3RvZ2dsZX0+PC9TaG9wU2lkZWJhck9uZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RpY2t5Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2lkZWJhci1maXhlZC10b2dnbGVyXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNvZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1maWx0ZXItb3ZlcmxheVwiIG9uQ2xpY2s9e2hpZGVTaWRlYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyB9KShTaG9wR3JpZCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hcG9sbG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5wdXQtcmFuZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3ktYm94XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9