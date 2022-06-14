(function() {
var exports = {};
exports.id = "pages/shop/sidebar/[type]";
exports.ids = ["pages/shop/sidebar/[type]"];
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\page-header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function PageHeader(props) {
  const {
    title,
    subTitle
  } = props;
  return __jsx("div", {
    className: "page-header text-center",
    style: {
      backgroundImage: `url(images/page-header-bg.jpg)`
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

/***/ "./components/features/products/product-eleven.jsx":
/*!*********************************************************!*\
  !*** ./components/features/products/product-eleven.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _store_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store/compare */ "./store/compare.js");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-eleven.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductEleven(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = minPrice;
    let max = maxPrice;
    product.variants.map(item => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInCompare)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product product-7 text-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Out of Stock") : "", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), product.sm_pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }) : ""), product.stock > 0 ? __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 134
    }
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 127
    }
  }, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 109
    }
  }, "compare"))) : __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 134
    }
  }, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 127
    }
  }, "quick view"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 41
    }
  }, "add to cart"))) : ""), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, product.category.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.slug + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  }, product.variants.map((item, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 113
    }
  }, "Color Name"))))) : ""));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_5__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_6__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_7__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_8__.actions))(ProductEleven));

/***/ }),

/***/ "./components/features/products/product-nine.jsx":
/*!*******************************************************!*\
  !*** ./components/features/products/product-nine.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _store_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store/compare */ "./store/compare.js");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-nine.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductSix(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = minPrice;
    let max = maxPrice;
    product.variants.map(item => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInCompare)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product product-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-3 col-md-3 col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "Out of Stock") : "", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }), product.sm_pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "http://localhost:4000" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }) : ""))), __jsx("div", {
    className: "col-md-6 order-last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "product-body product-action-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, product.category.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.slug + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 41
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  }, product.name)), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, product.short_desc)), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, product.variants.map((item, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 121
    }
  }, "Color Name"))))) : "")), __jsx("div", {
    className: "col-md-3 col-6 order-md-last order-lg-last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "product-list-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 45
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 33
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }, "( ", product.review, " Reviews )")), __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, "quick view")), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 121
    }
  }, "wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 114
    }
  }, "wishlist"))), product.stock > 0 ? product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 41
    }
  }, "add to cart")) : ""))));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_5__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_6__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_7__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_8__.actions))(ProductSix));

/***/ }),

/***/ "./components/partials/shop/list/shop-list-one.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/shop/list/shop-list-one.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_nine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/products/product-nine */ "./components/features/products/product-nine.jsx");
/* harmony import */ var _components_features_products_product_eleven__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/products/product-eleven */ "./components/features/products/product-eleven.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\shop\\list\\shop-list-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function ShopListOne(props) {
  const {
    loading,
    products = [],
    perPage
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: fakeArray,
    1: setFakeArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: gridClass,
    1: setGridClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('col-6');
  const type = router.query.type;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let temp = [];

    for (let i = 0; i < perPage; i++) {
      temp.push(i);
    }

    setFakeArray(temp);
  }, [perPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (type === 'list' || type === '2cols') setGridClass('col-6');
    if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4');
    if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
  }, [type]);
  return __jsx("div", {
    className: "products mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "No products matching your selection.") : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, type == 'list' ? loading ? fakeArray.map((item, index) => __jsx("div", {
    className: "skel-pro skel-pro-list",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  })) : products.map((product, index) => __jsx(_components_features_products_product_nine__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: product,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  })) : __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, loading ? fakeArray.map((item, index) => __jsx("div", {
    className: gridClass,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 53
    }
  }))) : products.map((product, index) => __jsx("div", {
    className: gridClass,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 49
    }
  }, __jsx(_components_features_products_product_eleven__WEBPACK_IMPORTED_MODULE_3__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 53
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopListOne));

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
    href: "#Size",
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
  }, "Size")), __jsx("div", {
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
  }, _utils_data__WEBPACK_IMPORTED_MODULE_6__.shopData.sizes.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 65
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: `size-${index + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 65
    }
  }, item.size))))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 129,
      columnNumber: 71
    }
  }, "Colour")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 135,
      columnNumber: 57
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 61
    }
  }, "Color Name")))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 151,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "widget-title mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 152,
      columnNumber: 71
    }
  }, "Brand")), __jsx("div", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "widget-body pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "filter-items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 45
    }
  }, _utils_data__WEBPACK_IMPORTED_MODULE_6__.shopData.brands.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 162,
      columnNumber: 65
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: `brand-${index + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 65
    }
  }, item.brand))))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
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
  }, "$", priceRange.min, " - $", priceRange.max)), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    formatLabel: value => `$${value}`,
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

/***/ "./pages/shop/sidebar/[type].jsx":
/*!***************************************!*\
  !*** ./pages/shop/sidebar/[type].jsx ***!
  \***************************************/
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
/* harmony import */ var _components_partials_shop_list_shop_list_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/shop/list/shop-list-one */ "./components/partials/shop/list/shop-list-one.jsx");
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/pagination */ "./components/features/pagination.jsx");
/* harmony import */ var _components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/shop/sidebar/shop-sidebar-one */ "./components/partials/shop/sidebar/shop-sidebar-one.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\shop\\sidebar\\[type].jsx";
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);
  const {
    0: pageTitle,
    1: setPageTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('List');
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
  }, [products]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    title: pageTitle,
    subTitle: "Shop",
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
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, "Shop")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, pageTitle), query.search ? __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }, "Search - ", query.searchTerm)) : ""))), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `col-lg-9 skel-shop-products ${!loading ? 'loaded' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "toolbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "toolbox-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, !loading && products ? __jsx("div", {
    className: "toolbox-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 45
    }
  }, "Showing", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 49
    }
  }, " ", products.length, " of ", totalCount), " Products") : ""), __jsx("div", {
    className: "toolbox-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "toolbox-sort",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, __jsx("label", {
    htmlFor: "sortby",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 41
    }
  }, "Sort by:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
      columnNumber: 45
    }
  }, __jsx("option", {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 49
    }
  }, "Default"), __jsx("option", {
    value: "featured",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 49
    }
  }, "Most Popular"), __jsx("option", {
    value: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 49
    }
  }, "Most Rated"), __jsx("option", {
    value: "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 49
    }
  }, "Date")))), __jsx("div", {
    className: "toolbox-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    className: `btn-layout ${type == 'list' ? 'active' : ''}`,
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }, __jsx("svg", {
    width: "16",
    height: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 45
    }
  }, __jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "0",
    width: "10",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "6",
    width: "10",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 49
    }
  }))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/2cols",
    className: `btn-layout ${type == '2cols' ? 'active' : ''}`,
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 41
    }
  }, __jsx("svg", {
    width: "10",
    height: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 45
    }
  }, __jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 49
    }
  }))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols",
    className: `btn-layout ${type == '3cols' ? 'active' : ''}`,
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 41
    }
  }, __jsx("svg", {
    width: "16",
    height: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 45
    }
  }, __jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "12",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "12",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 49
    }
  }))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/4cols",
    className: `btn-layout ${type == '4cols' ? 'active' : ''}`,
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 41
    }
  }, __jsx("svg", {
    width: "22",
    height: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 45
    }
  }, __jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "12",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "18",
    y: "0",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "6",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "12",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 49
    }
  }), __jsx("rect", {
    x: "18",
    y: "6",
    width: "4",
    height: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 49
    }
  })))))), __jsx(_components_partials_shop_list_shop_list_one__WEBPACK_IMPORTED_MODULE_6__.default, {
    products: products,
    perPage: perPage,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 29
    }
  }), totalCount > perPage ? __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_7__.default, {
    perPage: perPage,
    total: totalCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 37
    }
  }) : ""), __jsx("aside", {
    className: `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${!loading || firstLoading ? 'loaded' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "skel-widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 29
    }
  }), __jsx((react_sticky_box__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "sticky-content",
    offsetTop: 70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 29
    }
  }, __jsx(_components_partials_shop_sidebar_shop_sidebar_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 33
    }
  })), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-cog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 41
    }
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx-server_apollo_js-server_queries_js-store_cart_js-store_compare_-9b7470","utils_data_js"], function() { return __webpack_exec__("./pages/shop/sidebar/[type].jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnZS1oZWFkZXIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1lbGV2ZW4uanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LW5pbmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL2xpc3Qvc2hvcC1saXN0LW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL3Nob3Avc2lkZWJhci9zaG9wLXNpZGViYXItb25lLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3BhZ2VzL3Nob3Avc2lkZWJhci9bdHlwZV0uanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW5wdXQtcmFuZ2VcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3ktYm94XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiUGFnZUhlYWRlciIsInByb3BzIiwidGl0bGUiLCJzdWJUaXRsZSIsImJhY2tncm91bmRJbWFnZSIsIlJlYWN0IiwiUGFnaW5hdGlvbiIsInBlclBhZ2UiLCJ0b3RhbCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInVzZVN0YXRlIiwibGFzdFBhZ2UiLCJzZXRMYXN0UGFnZSIsInBhZ2VOdW1iZXJzIiwic2V0UGFnZU51bWJlcnMiLCJ1c2VFZmZlY3QiLCJwYWdlIiwicGFyc2VJbnQiLCJ0ZW1wQXJyYXkiLCJwYWdlQ291bnQiLCJNYXRoIiwiZmxvb3IiLCJpIiwicHVzaCIsInBhdGhuYW1lIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJQcm9kdWN0RWxldmVuIiwicHJvZHVjdCIsIndpc2hsaXN0IiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJtaW4iLCJtYXgiLCJ2YXJpYW50cyIsIml0ZW0iLCJwcmljZSIsInNhbGVfcHJpY2UiLCJvbkNhcnRDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvQ2FydCIsIm9uV2lzaGxpc3RDbGljayIsImlzSW5XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJvbkNvbXBhcmVDbGljayIsImlzSW5Db21wYXJlIiwiY29tcGFyZWxpc3QiLCJhZGRUb0NvbXBhcmUiLCJvblF1aWNrVmlldyIsInNob3dRdWlja1ZpZXciLCJzbHVnIiwibmV3IiwidG9wIiwic3RvY2siLCJwcm9jZXNzIiwic21fcGljdHVyZXMiLCJ1cmwiLCJjYXRlZ29yeSIsIm5hbWUiLCJ0b0ZpeGVkIiwid2lkdGgiLCJyYXRpbmdzIiwicmV2aWV3IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJQcm9kdWN0U2l4Iiwic2hvcnRfZGVzYyIsIlNob3BMaXN0T25lIiwibG9hZGluZyIsInByb2R1Y3RzIiwiZmFrZUFycmF5Iiwic2V0RmFrZUFycmF5IiwiZ3JpZENsYXNzIiwic2V0R3JpZENsYXNzIiwidHlwZSIsInRlbXAiLCJTaG9wU2lkZWJhck9uZSIsInRvZ2dsZSIsInByaWNlUmFuZ2UiLCJzZXRSYW5nZSIsIm9uQ2hhbmdlUHJpY2VSYW5nZSIsInZhbHVlIiwiY29udGFpbnNBdHRySW5VcmwiLCJjdXJyZW50UXVlcmllcyIsInNwbGl0IiwiaW5jbHVkZXMiLCJnZXRVcmxGb3JBdHRycyIsImZpbHRlciIsImpvaW4iLCJvbkF0dHJDbGljayIsImF0dHIiLCJxdWVyeU9iamVjdCIsInJlcGxhY2UiLCJrZXkiLCJvblRvZ2dsZSIsInNldENvbGxhcHNpYmxlRWxlbWVudCIsInRvZ2dsZVN0YXRlIiwidG9Mb3dlckNhc2UiLCJzaG9wRGF0YSIsImNvdW50Iiwic2l6ZSIsImNvbG9yX25hbWUiLCJicmFuZCIsIlNob3BHcmlkIiwiZ2V0UHJvZHVjdHMiLCJlcnJvciIsInVzZUxhenlRdWVyeSIsIkdFVF9QUk9EVUNUUyIsImZpcnN0TG9hZGluZyIsInNldEZpcnN0TG9hZGluZyIsInNldFBlclBhZ2UiLCJwYWdlVGl0bGUiLCJzZXRQYWdlVGl0bGUiLCJzZXRUb2dnbGUiLCJ0b3RhbENvdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZUhhbmRsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRXaWR0aCIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJzb3J0QnkiLCJsaXN0Iiwic2Nyb2xsVG9QYWdlQ29udGVudCIsIm9uU29ydEJ5Q2hhbmdlIiwidGFyZ2V0IiwidG9nZ2xlU2lkZWJhciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiaGlkZVNpZGViYXIiLCJzZWFyY2giLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxVQUFULENBQXNCQyxLQUF0QixFQUE4QjtBQUMxQixRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQkYsS0FBNUI7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLFNBQUssRUFBRztBQUFFRyxxQkFBZSxFQUFHO0FBQXBC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QWY7QUFBd0MsV0FBTyxFQUFHSyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0F6R0osQ0FESixDQURKLENBdkJKLENBREo7QUF5Skg7O0FBRUQsK0RBQWVFLHVEQUFVLENBQUU7QUFBRUMsS0FBRztBQUFMLENBQUYsQ0FBVixDQUFxRGxDLFFBQXJELENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL3Nob3Avc2lkZWJhci9bdHlwZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUGFnZUhlYWRlciAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgc3ViVGl0bGUgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlciB0ZXh0LWNlbnRlclwiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaW1hZ2VzL3BhZ2UtaGVhZGVyLWJnLmpwZylgIH0gfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPnsgdGl0bGUgfTxzcGFuPnsgc3ViVGl0bGUgfTwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oIFBhZ2VIZWFkZXIgKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHBlclBhZ2UsIHRvdGFsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcXVlcnkgPSB1c2VSb3V0ZXIoKS5xdWVyeTtcclxuICAgIGNvbnN0IFsgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlIF0gPSB1c2VTdGF0ZSggMSApO1xyXG4gICAgY29uc3QgWyBsYXN0UGFnZSwgc2V0TGFzdFBhZ2UgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHBhZ2VOdW1iZXJzLCBzZXRQYWdlTnVtYmVycyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoIHF1ZXJ5LnBhZ2UgPyBwYXJzZUludCggcXVlcnkucGFnZSApIDogMSApO1xyXG4gICAgfSwgWyBxdWVyeSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRMYXN0UGFnZSggcGFyc2VJbnQoIHRvdGFsIC8gcGVyUGFnZSApICsgKCB0b3RhbCAlIHBlclBhZ2UgPyAxIDogMCApICk7XHJcbiAgICB9LCBbIHRvdGFsLCBwZXJQYWdlIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wQXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgcGFnZUNvdW50ID0gTWF0aC5mbG9vciggdG90YWwgLyBwZXJQYWdlICkgKyAoIDAgPCB0b3RhbCAlIHBlclBhZ2UgPyAxIDogMCApO1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IC0xOyBpIDwgMiAmJiBwYWdlQ291bnQgPj0gMzsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoIDEgPCBjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSA8IHBhZ2VDb3VudCApXHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCggY3VycmVudFBhZ2UgKyBpICk7XHJcbiAgICAgICAgICAgIGlmICggMSA9PT0gY3VycmVudFBhZ2UgKVxyXG4gICAgICAgICAgICAgICAgdGVtcEFycmF5LnB1c2goIGN1cnJlbnRQYWdlICsgaSArIDEgKTtcclxuICAgICAgICAgICAgaWYgKCBjdXJyZW50UGFnZSA9PT0gcGFnZUNvdW50IClcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKCBjdXJyZW50UGFnZSArIGkgLSAxICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYWdlQ291bnQgJiYgcGFnZUNvdW50IDwgMzsgaSsrICkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCggaSArIDEgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZ2VOdW1iZXJzKCB0ZW1wQXJyYXkgKTtcclxuICAgIH0sIFsgdG90YWwsIHBlclBhZ2UsIGN1cnJlbnRQYWdlIF0gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IGBwYWdlLWl0ZW0gJHtjdXJyZW50UGFnZSA8IDIgPyAnZGlzYWJsZWQnIDogJyd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcGFnZS1saW5rLXByZXZcIiBocmVmPXsge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSAtIDEgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlByZXZcclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcnMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU51bWJlcnMubWFwKCAoIHBhZ2UsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IGBwYWdlLWl0ZW0gJHtjdXJyZW50UGFnZSA9PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gIH0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHtwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgcGFnZTogcGFnZSB9IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgcGFnZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZSA+IDMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtLXRvdGFsXCI+b2YgeyBsYXN0UGFnZSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBgcGFnZS1pdGVtICR7Y3VycmVudFBhZ2UgPT0gbGFzdFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcGFnZS1saW5rLW5leHRcIiBocmVmPXsge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBwYWdlOiBjdXJyZW50UGFnZSArIDEgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyB3aXNobGlzdEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNhcnRBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNvbXBhcmVBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NvbXBhcmUnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5cclxuaW1wb3J0IHsgaXNJbldpc2hsaXN0LCBpc0luQ29tcGFyZSB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEVsZXZlbiAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIHdpc2hsaXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgbWF4UHJpY2UsIHNldE1heFByaWNlIF0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgWyBtaW5QcmljZSwgc2V0TWluUHJpY2UgXSA9IHVzZVN0YXRlKCA5OTk5OSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBtaW4gPSBtaW5QcmljZTtcclxuICAgICAgICBsZXQgbWF4ID0gbWF4UHJpY2U7XHJcbiAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAoIG1heCA8IGl0ZW0ucHJpY2UgKSBtYXggPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgbWluID0gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBtYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWluUHJpY2UoIG1pbiApO1xyXG4gICAgICAgIHNldE1heFByaWNlKCBtYXggKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLmFkZFRvQ2FydCggcHJvZHVjdCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uV2lzaGxpc3RDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9XaXNobGlzdCggcHJvZHVjdCApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCAnL3BhZ2VzL3dpc2hsaXN0JyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNvbXBhcmVDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5Db21wYXJlKCBwcm9wcy5jb21wYXJlbGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb0NvbXBhcmUoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25RdWlja1ZpZXcgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5zaG93UXVpY2tWaWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdCBwcm9kdWN0LTcgdGV4dC1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtc2FsZVwiPlNhbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRvcCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtdG9wXCI+VG9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3Quc3RvY2sgfHwgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1vdXRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNtX3BpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibGFjayBhbmQgd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24tdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGUgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5nbyB0byB3aXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PjxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi1jb21wYXJlXCIgb25DbGljaz17IG9uQ29tcGFyZUNsaWNrIH0+PHNwYW4+Y29tcGFyZTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24tdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGUgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5nbyB0byB3aXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PjxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9IGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0IGJ0bi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlbGVjdCBvcHRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiBvbkNsaWNrPXsgb25DYXJ0Q2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5zbHVnICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogaXRlbS5zbHVnIH0gfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3MtdGV4dFwiPiggeyBwcm9kdWN0LnJldmlldyB9IFJldmlld3MgKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfT48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdEVsZXZlbiApOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyB3aXNobGlzdEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNhcnRBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGNvbXBhcmVBY3Rpb24gfSBmcm9tICd+L3N0b3JlL2NvbXBhcmUnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5cclxuaW1wb3J0IHsgaXNJbldpc2hsaXN0LCBpc0luQ29tcGFyZSB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFNpeCAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIHdpc2hsaXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgbWF4UHJpY2UsIHNldE1heFByaWNlIF0gPSB1c2VTdGF0ZSggMCApO1xyXG4gICAgY29uc3QgWyBtaW5QcmljZSwgc2V0TWluUHJpY2UgXSA9IHVzZVN0YXRlKCA5OTk5OSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGxldCBtaW4gPSBtaW5QcmljZTtcclxuICAgICAgICBsZXQgbWF4ID0gbWF4UHJpY2U7XHJcbiAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBpZiAoIG1heCA8IGl0ZW0ucHJpY2UgKSBtYXggPSBpdGVtLnByaWNlO1xyXG4gICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgbWluID0gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBtYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TWluUHJpY2UoIG1pbiApO1xyXG4gICAgICAgIHNldE1heFByaWNlKCBtYXggKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNhcnRDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLmFkZFRvQ2FydCggcHJvZHVjdCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uV2lzaGxpc3RDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5XaXNobGlzdCggcHJvcHMud2lzaGxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9XaXNobGlzdCggcHJvZHVjdCApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCAnL3BhZ2VzL3dpc2hsaXN0JyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNvbXBhcmVDbGljayAoIGUgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICggIWlzSW5Db21wYXJlKCBwcm9wcy5jb21wYXJlbGlzdCwgcHJvZHVjdCApICkge1xyXG4gICAgICAgICAgICBwcm9wcy5hZGRUb0NvbXBhcmUoIHByb2R1Y3QgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25RdWlja1ZpZXcgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5zaG93UXVpY2tWaWV3KCBwcm9kdWN0LnNsdWcgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdCBwcm9kdWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1zYWxlXCI+U2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtdG9wXCI+VG9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibGFjayBhbmQgd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9yZGVyLWxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYm9keSBwcm9kdWN0LWFjdGlvbi1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2F0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eyBpdGVtLnNsdWcgKyAnLScgKyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGl0ZW0uc2x1ZyB9IH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsICcgOiBcIlwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnNob3J0X2Rlc2MgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9IGtleT17IGluZGV4IH0+PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbG9yIE5hbWU8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLTYgb3JkZXItbWQtbGFzdCBvcmRlci1sZy1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0XCI+eyBwcm9kdWN0LnJhdGluZ3MudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3MtdGV4dFwiPiggeyBwcm9kdWN0LnJldmlldyB9IFJldmlld3MgKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1xdWlja3ZpZXdcIiB0aXRsZT1cIlF1aWNrIFZpZXdcIiBvbkNsaWNrPXsgb25RdWlja1ZpZXcgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5xdWljayB2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCB3aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi13aXNobGlzdCBhZGRlZC10by13aXNobGlzdFwiPjxzcGFuPndpc2hsaXN0PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+d2lzaGxpc3Q8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9IGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0IGJ0bi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlbGVjdCBvcHRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnRcIiBvbkNsaWNrPXsgb25DYXJ0Q2xpY2sgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdFNpeCApO1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFByb2R1Y3ROaW5lIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LW5pbmUnO1xyXG5pbXBvcnQgUHJvZHVjdEVsZXZlbiBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1lbGV2ZW4nO1xyXG5cclxuZnVuY3Rpb24gU2hvcExpc3RPbmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgcHJvZHVjdHMgPSBbXSwgcGVyUGFnZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgZmFrZUFycmF5LCBzZXRGYWtlQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBncmlkQ2xhc3MsIHNldEdyaWRDbGFzcyBdID0gdXNlU3RhdGUoICdjb2wtNicgKTtcclxuICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBlclBhZ2U7IGkrKyApIHtcclxuICAgICAgICAgICAgdGVtcC5wdXNoKCBpICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEZha2VBcnJheSggdGVtcCApO1xyXG4gICAgfSwgWyBwZXJQYWdlIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ2xpc3QnIHx8IHR5cGUgPT09ICcyY29scycgKSBzZXRHcmlkQ2xhc3MoICdjb2wtNicgKTtcclxuICAgICAgICBpZiAoIHR5cGUgPT09ICczY29scycgKSBzZXRHcmlkQ2xhc3MoICdjb2wtNiBjb2wtbWQtNCBjb2wtbGctNCcgKTtcclxuICAgICAgICBpZiAoIHR5cGUgPT09ICc0Y29scycgKVxyXG4gICAgICAgICAgICBzZXRHcmlkQ2xhc3MoICdjb2wtNiBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtMycgKTtcclxuICAgIH0sIFsgdHlwZSBdIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMgbWItM1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoIHByb2R1Y3RzLmxlbmd0aCA9PSAwICYmICFsb2FkaW5nICkgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXJlc3VsdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5ObyBwcm9kdWN0cyBtYXRjaGluZyB5b3VyIHNlbGVjdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT0gJ2xpc3QnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFrZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm8gc2tlbC1wcm8tbGlzdFwiIGtleT17IGluZGV4IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCggKCBwcm9kdWN0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TmluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBwcm9kdWN0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFrZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBncmlkQ2xhc3MgfSBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAoIHByb2R1Y3QsIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGdyaWRDbGFzcyB9IGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEVsZXZlbiBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggU2hvcExpc3RPbmUgKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tICdyZWFjdC1pbnB1dC1yYW5nZSc7XHJcbmltcG9ydCBTbGlkZVRvZ2dsZSBmcm9tICdyZWFjdC1zbGlkZS10b2dnbGUnO1xyXG5pbXBvcnQgJ3JlYWN0LWlucHV0LXJhbmdlL2xpYi9jc3MvaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5pbXBvcnQgeyBzaG9wRGF0YSB9IGZyb20gJ34vdXRpbHMvZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBTaG9wU2lkZWJhck9uZSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB0b2dnbGUgPSBmYWxzZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUm91dGVyKCkucXVlcnk7XHJcbiAgICBjb25zdCBbIHByaWNlUmFuZ2UsIHNldFJhbmdlIF0gPSB1c2VTdGF0ZSggeyBtaW46IDAsIG1heDogMTAwMCB9ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBxdWVyeS5taW5QcmljZSAmJiBxdWVyeS5tYXhQcmljZSApIHtcclxuICAgICAgICAgICAgc2V0UmFuZ2UoIHsgbWluOiBwYXJzZUludCggcXVlcnkubWluUHJpY2UgKSwgbWF4OiBwYXJzZUludCggcXVlcnkubWF4UHJpY2UgKSB9ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmFuZ2UoIHsgbWluOiAwLCBtYXg6IDEwMDAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgcXVlcnkgXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VQcmljZVJhbmdlICggdmFsdWUgKSB7XHJcbiAgICAgICAgc2V0UmFuZ2UoIHZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29udGFpbnNBdHRySW5VcmwgKCB0eXBlLCB2YWx1ZSApIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UXVlcmllcyA9IHF1ZXJ5WyB0eXBlIF0gPyBxdWVyeVsgdHlwZSBdLnNwbGl0KCAnLCcgKSA6IFtdO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UXVlcmllcyAmJiBjdXJyZW50UXVlcmllcy5pbmNsdWRlcyggdmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRVcmxGb3JBdHRycyAoIHR5cGUsIHZhbHVlICkge1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlcmllcyA9IHF1ZXJ5WyB0eXBlIF0gPyBxdWVyeVsgdHlwZSBdLnNwbGl0KCAnLCcgKSA6IFtdO1xyXG4gICAgICAgIGN1cnJlbnRRdWVyaWVzID0gY29udGFpbnNBdHRySW5VcmwoIHR5cGUsIHZhbHVlICkgPyBjdXJyZW50UXVlcmllcy5maWx0ZXIoIGl0ZW0gPT4gaXRlbSAhPT0gdmFsdWUgKSA6IFsgLi4uY3VycmVudFF1ZXJpZXMsIHZhbHVlIF07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAuLi5xdWVyeSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBbIHR5cGUgXTogY3VycmVudFF1ZXJpZXMuam9pbiggJywnIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkF0dHJDbGljayAoIGUsIGF0dHIsIHZhbHVlICkge1xyXG4gICAgICAgIGlmICggZ2V0VXJsRm9yQXR0cnMoIGF0dHIsIHZhbHVlICkgKSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeU9iamVjdCA9IGdldFVybEZvckF0dHJzKCBhdHRyLCB2YWx1ZSApLnF1ZXJ5O1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gcm91dGVyLnBhdGhuYW1lLnJlcGxhY2UoICdbdHlwZV0nLCBxdWVyeS50eXBlICkgKyAnPyc7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBrZXkgaW4gcXVlcnlPYmplY3QgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleSAhPT0gXCJ0eXBlXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGtleSArICc9JyArIHF1ZXJ5T2JqZWN0WyBrZXkgXSArICcmJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggdXJsICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17IGAke3RvZ2dsZSA/ICdzaWRlYmFyLWZpbHRlcicgOiAnc2lkZWJhcid9IHNpZGViYXItc2hvcGAgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdG9nZ2xlID8gJ3NpZGViYXItZmlsdGVyLXdyYXBwZXInIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY2xlYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpbHRlcnM6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7dHlwZTogcXVlcnkudHlwZX0gfSB9IGNsYXNzTmFtZT1cInNpZGViYXItZmlsdGVyLWNsZWFyXCIgc2Nyb2xsPXsgZmFsc2UgfT5DbGVhbiBBbGw8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldC1jb2xsYXBzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NhdGVnb3J5XCIgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnY29sbGFwc2VkJyA/ICdjb2xsYXBzZWQnIDogJyd9YCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+Q2F0ZWdvcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keSBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtcyBmaWx0ZXItaXRlbXMtY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3BEYXRhLmNhdGVnb3JpZXMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1cIiBrZXk9eyBgY2F0XyR7aW5kZXh9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9eyBgJHtxdWVyeS5jYXRlZ29yeSA9PSBpdGVtLnNsdWcgPyAnYWN0aXZlJyA6ICcnfWAgfSBocmVmPXsge3BhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IHR5cGU6IHF1ZXJ5LnR5cGUsIGNhdGVnb3J5OiBpdGVtLnNsdWcgfSB9IH0gc2Nyb2xsPXsgZmFsc2UgfT57IGl0ZW0ubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLWNvdW50XCI+eyBpdGVtLmNvdW50IH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPjxhIGhyZWY9XCIjU2l6ZVwiIGNsYXNzTmFtZT17IGAke3RvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2NvbGxhcHNlZCcgPyAnY29sbGFwc2VkJyA6ICcnfWAgfSBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9PlNpemU8L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3BEYXRhLnNpemVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17IGBzaXplLSR7aW5kZXggKyAxfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBvbkF0dHJDbGljayggZSwgJ3NpemUnLCBpdGVtLnNsdWcgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IGNvbnRhaW5zQXR0ckluVXJsKCAnc2l6ZScsIGl0ZW0uc2x1ZyApID8gdHJ1ZSA6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXsgYHNpemUtJHtpbmRleCArIDF9YCB9PnsgaXRlbS5zaXplIH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPjxhIGhyZWY9XCIjY29sb3VyXCIgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnY29sbGFwc2VkJyA/ICdjb2xsYXBzZWQnIDogJyd9YCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+Q29sb3VyPC9hPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5IHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcERhdGEuY29sb3JzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGdldFVybEZvckF0dHJzKCAnY29sb3InLCBpdGVtLmNvbG9yX25hbWUgKSB9IGNsYXNzTmFtZT17IGNvbnRhaW5zQXR0ckluVXJsKCAnY29sb3InLCBpdGVtLmNvbG9yX25hbWUgKSA/ICdzZWxlY3RlZCcgOiAnJyB9IHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9IGtleT17IGluZGV4IH0gc2Nyb2xsPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNvbG9yIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgZmFsc2UgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgbWItMlwiPjxhIGhyZWY9XCIjYnJhbmRcIiBjbGFzc05hbWU9eyBgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdjb2xsYXBzZWQnID8gJ2NvbGxhcHNlZCcgOiAnJ31gIH0gb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT5CcmFuZDwvYT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keSBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcERhdGEuYnJhbmRzLm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbVwiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsgYGJyYW5kLSR7aW5kZXggKyAxfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBvbkF0dHJDbGljayggZSwgJ2JyYW5kJywgaXRlbS5zbHVnICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjb250YWluc0F0dHJJblVybCggJ2JyYW5kJywgaXRlbS5zbHVnICkgPyB0cnVlIDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9eyBgYnJhbmQtJHtpbmRleCArIDF9YCB9PnsgaXRlbS5icmFuZCB9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IGZhbHNlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcmljZVwiIGNsYXNzTmFtZT17IGAke3RvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2NvbGxhcHNlZCcgPyAnY29sbGFwc2VkJyA6ICcnfWAgfSBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9PlByaWNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wcmljZS10ZXh0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaWNlIFJhbmdlOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLXByaWNlLXJhbmdlXCI+JHsgcHJpY2VSYW5nZS5taW4gfSAtICR7IHByaWNlUmFuZ2UubWF4IH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyAuLi5xdWVyeSwgbWluUHJpY2U6IHByaWNlUmFuZ2UubWluLCBtYXhQcmljZTogcHJpY2VSYW5nZS5tYXgsIHBhZ2U6IDEgfSB9IH0gY2xhc3NOYW1lPVwicHItMlwiIHNjcm9sbD17IGZhbHNlIH0+RmlsdGVyPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1zbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0UmFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdExhYmVsPXsgdmFsdWUgPT4gYCQke3ZhbHVlfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWU9eyAxMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlPXsgMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsgNTAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwcmljZVJhbmdlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2VQcmljZVJhbmdlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBTaG9wU2lkZWJhck9uZSApOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgU3RpY2t5Qm94IGZyb20gJ3JlYWN0LXN0aWNreS1ib3gnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdlLWhlYWRlcic7XHJcbmltcG9ydCBTaG9wTGlzdE9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9saXN0L3Nob3AtbGlzdC1vbmUnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnaW5hdGlvbic7XHJcbmltcG9ydCBTaG9wU2lkZWJhck9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvc2hvcC9zaWRlYmFyL3Nob3Atc2lkZWJhci1vbmUnO1xyXG5cclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX1BST0RVQ1RTIH0gZnJvbSAnfi9zZXJ2ZXIvcXVlcmllcyc7XHJcbmltcG9ydCB7IHNjcm9sbFRvUGFnZUNvbnRlbnQgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFNob3BHcmlkKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB0eXBlID0gcm91dGVyLnF1ZXJ5LnR5cGU7XHJcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IFsgZ2V0UHJvZHVjdHMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSBdID0gdXNlTGF6eVF1ZXJ5KCBHRVRfUFJPRFVDVFMgKTtcclxuICAgIGNvbnN0IFsgZmlyc3RMb2FkaW5nLCBzZXRGaXJzdExvYWRpbmcgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBwZXJQYWdlLCBzZXRQZXJQYWdlIF0gPSB1c2VTdGF0ZSggNSApO1xyXG4gICAgY29uc3QgWyBwYWdlVGl0bGUsIHNldFBhZ2VUaXRsZSBdID0gdXNlU3RhdGUoICdMaXN0JyApO1xyXG4gICAgY29uc3QgWyB0b2dnbGUsIHNldFRvZ2dsZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0cy5kYXRhO1xyXG4gICAgY29uc3QgdG90YWxDb3VudCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0cy50b3RhbENvdW50O1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCByZXNpemVIYW5kbGUgKTtcclxuICAgICAgICByZXNpemVIYW5kbGUoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZSgpIHtcclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkub2Zmc2V0V2lkdGggPCA5OTIgKVxyXG4gICAgICAgICAgICBzZXRUb2dnbGUoIHRydWUgKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFRvZ2dsZSggZmFsc2UgKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBnZXRQcm9kdWN0cygge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHF1ZXJ5LnNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcXVlcnkuY29sb3IgPyBxdWVyeS5jb2xvci5zcGxpdCggJywnICkgOiBbXSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHF1ZXJ5LnNpemUgPyBxdWVyeS5zaXplLnNwbGl0KCAnLCcgKSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHF1ZXJ5LmJyYW5kID8gcXVlcnkuYnJhbmQuc3BsaXQoICcsJyApIDogW10sXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZTogcGFyc2VJbnQoIHF1ZXJ5Lm1pblByaWNlICksXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZTogcGFyc2VJbnQoIHF1ZXJ5Lm1heFByaWNlICksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHF1ZXJ5LnNvcnRCeSA/IHF1ZXJ5LnNvcnRCeSA6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UgPyBwYXJzZUludCggcXVlcnkucGFnZSApIDogMSxcclxuICAgICAgICAgICAgICAgIHBlclBhZ2U6IHBlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHNjcm9sbFRvUGFnZUNvbnRlbnQoKTtcclxuICAgIH0sIFsgcXVlcnksIHBlclBhZ2UgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0cyApIHNldEZpcnN0TG9hZGluZyggdHJ1ZSApO1xyXG4gICAgfSwgWyBwcm9kdWN0cyBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHR5cGUgPT0gJ2xpc3QnICkge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoICdMaXN0JyApO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKCA1ICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PSAnMmNvbHMnICkge1xyXG4gICAgICAgICAgICBzZXRQYWdlVGl0bGUoICdHcmlkIDIgQ29sdW1ucycgKTtcclxuICAgICAgICAgICAgc2V0UGVyUGFnZSggNiApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT0gJzNjb2xzJyApIHtcclxuICAgICAgICAgICAgc2V0UGFnZVRpdGxlKCAnR3JpZCAzIENvbHVtbnMnICk7XHJcbiAgICAgICAgICAgIHNldFBlclBhZ2UoIDkgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09ICc0Y29scycgKSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VUaXRsZSggJ0dyaWQgNCBDb2x1bW5zJyApO1xyXG4gICAgICAgICAgICBzZXRQZXJQYWdlKCAxMiApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgdHlwZSBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBvblNvcnRCeUNoYW5nZSggZSApIHtcclxuICAgICAgICBsZXQgcXVlcnlPYmplY3QgPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgbGV0IHVybCA9IHJvdXRlci5wYXRobmFtZS5yZXBsYWNlKCAnW3R5cGVdJywgcXVlcnkudHlwZSApICsgJz8nO1xyXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gcXVlcnlPYmplY3QgKSB7XHJcbiAgICAgICAgICAgIGlmICgga2V5ICE9PSBcInR5cGVcIiAmJiBrZXkgIT09IFwic29ydEJ5XCIgKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgcXVlcnlPYmplY3RbIGtleSBdICsgJyYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCggdXJsICsgJ3NvcnRCeT0nICsgZS50YXJnZXQudmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucyggJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSggJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCggJ3NpZGViYXItZmlsdGVyLWFjdGl2ZScgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCAnc2lkZWJhci1maWx0ZXItYWN0aXZlJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluIHNob3BcIj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9eyBwYWdlVGl0bGUgfSBzdWJUaXRsZT1cIlNob3BcIiAvPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbmF2IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCI+U2hvcDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCI+eyBwYWdlVGl0bGUgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnNlYXJjaCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggLSB7IHF1ZXJ5LnNlYXJjaFRlcm0gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNrZWxldG9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGNvbC1sZy05IHNrZWwtc2hvcC1wcm9kdWN0cyAkeyAhbG9hZGluZyA/ICdsb2FkZWQnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBwcm9kdWN0cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4geyBwcm9kdWN0cy5sZW5ndGggfSBvZiB7IHRvdGFsQ291bnQgfTwvc3Bhbj4gUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYm94LXNvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic29ydGJ5XCI+U29ydCBieTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic29ydGJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzb3J0YnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uU29ydEJ5Q2hhbmdlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBxdWVyeS5zb3J0QnkgPyBxdWVyeS5zb3J0QnkgOiAnZGVmYXVsdCcgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5EZWZhdWx0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWF0dXJlZFwiPk1vc3QgUG9wdWxhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmF0aW5nXCI+TW9zdCBSYXRlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3XCI+RGF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xib3gtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICdsaXN0JyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL3NpZGViYXIvMmNvbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tbGF5b3V0ICR7IHR5cGUgPT0gJzJjb2xzJyA/ICdhY3RpdmUnIDogJycgfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLWxheW91dCAkeyB0eXBlID09ICczY29scycgPyAnYWN0aXZlJyA6ICcnIH1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGw9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxMlwiIHk9XCIwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiNlwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3Avc2lkZWJhci80Y29sc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGJ0bi1sYXlvdXQgJHsgdHlwZSA9PSAnNGNvbHMnID8gJ2FjdGl2ZScgOiAnJyB9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXsgZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjZcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTJcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMThcIiB5PVwiMFwiIHdpZHRoPVwiNFwiIGhlaWdodD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCI2XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI2XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEyXCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE4XCIgeT1cIjZcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wTGlzdE9uZSBwcm9kdWN0cz17IHByb2R1Y3RzIH0gcGVyUGFnZT17IHBlclBhZ2UgfSBsb2FkaW5nPXsgbG9hZGluZyB9PjwvU2hvcExpc3RPbmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQgPiBwZXJQYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gcGVyUGFnZT17IHBlclBhZ2UgfSB0b3RhbD17IHRvdGFsQ291bnQgfT48L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXsgYGNvbC1sZy0zIHNrZWwtc2hvcC1zaWRlYmFyIG9yZGVyLWxnLWZpcnN0IHNrZWxldG9uLWJvZHkgJHsgKCAhbG9hZGluZyB8fCBmaXJzdExvYWRpbmcgKSA/ICdsb2FkZWQnIDogJycgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC13aWRnZXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3lCb3ggY2xhc3NOYW1lPVwic3RpY2t5LWNvbnRlbnRcIiBvZmZzZXRUb3A9eyA3MCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wU2lkZWJhck9uZSB0b2dnbGU9eyB0b2dnbGUgfT48L1Nob3BTaWRlYmFyT25lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGlja3lCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaWRlYmFyLWZpeGVkLXRvZ2dsZXJcIiBvbkNsaWNrPXsgdG9nZ2xlU2lkZWJhciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jb2dcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZmlsdGVyLW92ZXJsYXlcIiBvbkNsaWNrPXsgaGlkZVNpZGViYXIgfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSApKCBTaG9wR3JpZCApOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXBvbGxvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlucHV0LXJhbmdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWRlLXRvZ2dsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5LWJveFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==