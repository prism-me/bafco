(function() {
var exports = {};
exports.id = "pages/product/default/[slug]";
exports.ids = ["pages/product/default/[slug]"];
exports.modules = {

/***/ "./components/features/products/product-six.jsx":
/*!******************************************************!*\
  !*** ./components/features/products/product-six.jsx ***!
  \******************************************************/
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-six.jsx";
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
    className: "product product-5 text-center",
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
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 127
    }
  }, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick,
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
      columnNumber: 109
    }
  }, "compare"))) : __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 141
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 127
    }
  }, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 109
    }
  }, "compare"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 41
    }
  }, "add to cart"))) : ""), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2))));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_5__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_6__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_7__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_8__.actions))(ProductSix));

/***/ }),

/***/ "./components/partials/product/breadcrumb.jsx":
/*!****************************************************!*\
  !*** ./components/partials/product/breadcrumb.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\product\\breadcrumb.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Breadcrumb(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    prev,
    next,
    current,
    fullWidth = false
  } = props;
  return __jsx("nav", {
    className: "breadcrumb-nav border-0 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: 'd-flex align-items-center ' + (fullWidth ? 'container-fluid' : 'container'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Product")), __jsx("li", {
    className: "breadcrumb-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, current)), __jsx("nav", {
    className: "product-pager ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, prev ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: {
        slug: prev.slug
      }
    },
    className: `product-pager-link product-pager-prev ${!next ? 'prev-only' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-angle-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, "Prev"), __jsx("div", {
    className: "product-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + prev.sm_pictures[0].url,
    alt: "product",
    width: prev.sm_pictures[0].width,
    height: prev.sm_pictures[0].height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  })), __jsx("h3", {
    className: "product-name mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, prev.name))) : "", next ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: {
      pathname: router.pathname,
      query: {
        slug: next.slug
      }
    },
    className: "product-pager-link product-pager-next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Next"), __jsx("i", {
    className: "icon-angle-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "product-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + next.sm_pictures[0].url,
    alt: "product",
    width: next.sm_pictures[0].width,
    height: next.sm_pictures[0].height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  })), __jsx("h3", {
    className: "product-name mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, next.name))) : "")));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Breadcrumb));

/***/ }),

/***/ "./components/partials/product/gallery/gallery-default.jsx":
/*!*****************************************************************!*\
  !*** ./components/partials/product/gallery/gallery-default.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-magnifiers */ "react-image-magnifiers");
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\product\\gallery\\gallery-default.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function GalleryDefault(props) {
  const {
    product,
    adClass = "product-gallery-vertical"
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (product) {
      setIsOpen(false);
      setPhotoIndex(0);
    }
  }, [product]);

  function moveNextPhoto() {
    setPhotoIndex((photoIndex + 1) % product.pictures.length);
  }

  function movePrevPhoto() {
    setPhotoIndex((photoIndex + product.pictures.length - 1) % product.pictures.length);
  }

  function openLightBox() {
    let index = parseInt(document.querySelector(".product-main-image").getAttribute("index"));

    if (!index) {
      index = 0;
    }

    setIsOpen(true);
    setPhotoIndex(index);
  }

  function closeLightBox() {
    setIsOpen(false);
  }

  function changeBgImage(e, image, index) {
    let imgs = document.querySelectorAll('.product-main-image img');

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = image;
    }

    document.querySelector('.product-image-gallery .active').classList.remove('active');
    document.querySelector('.product-main-image').setAttribute('index', index);
    e.currentTarget.classList.add('active');
  }

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }
    });
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: `product-gallery ${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row m-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("figure", {
    className: "product-main-image",
    index: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, "Out of Stock") : "", __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
    imageSrc: "http://localhost:4000" + product.pictures[0].url,
    imageAlt: "product",
    largeImageSrc: "http://localhost:4000" + product.pictures[0].url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    id: "product-zoom",
    className: "zoom-image position-relative overflow-hidden",
    width: product.pictures[0].width,
    height: product.pictures[0].height,
    style: {
      paddingTop: `${product.pictures[0].height / product.pictures[0].width * 100}%`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx("button", {
    id: "btn-product-gallery",
    className: "btn-product-gallery",
    onClick: openLightBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }))), __jsx("div", {
    id: "product-zoom-gallery",
    className: "product-image-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, product.pictures.map((item, index) => __jsx("button", {
    className: `product-gallery-item ${0 === index ? 'active' : ''}`,
    key: product.id + '-' + index,
    onClick: e => changeBgImage(e, `${"http://localhost:4000" + item.url}`, index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "img-wrapper h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + product.sm_pictures[index].url,
    alt: "product back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }))))))), isOpen ? __jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default()), {
    mainSrc: "http://localhost:4000" + product.pictures[photoIndex].url,
    nextSrc: "http://localhost:4000" + product.pictures[(photoIndex + 1) % product.pictures.length].url,
    prevSrc: "http://localhost:4000" + product.pictures[(photoIndex + product.pictures.length - 1) % product.pictures.length].url,
    onCloseRequest: closeLightBox,
    onMovePrevRequest: moveNextPhoto,
    onMoveNextRequest: movePrevPhoto,
    reactModalStyle: {
      overlay: {
        zIndex: 1041
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }) : '');
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(GalleryDefault));

/***/ }),

/***/ "./components/partials/product/info-tabs/info-one.jsx":
/*!************************************************************!*\
  !*** ./components/partials/product/info-tabs/info-one.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\product\\info-tabs\\info-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function InfoOne(props) {
  const {
    product
  } = props;

  const setRating = e => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector('.active')) {
      e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  };

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    });
  }

  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-details-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, " Description")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, " Additional information")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Shipping & Returns")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Reviews (", product.review, ")"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Product Information"), __jsx("p", {
    className: "pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "Vivamus finibus vel mauris ut vehicula."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Nullam a magna porttitor, dictum risus nec, faucibus sapien.")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "Information"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx("h3", {
    className: "pt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Fabric & care"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, "Faux suede fabric"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "Gold tone metal hoop handles."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, "RI branding"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "Snake print trim interior "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "Adjustable cross body strap"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, " Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Size"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "one size"))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-desc-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Delivery & returns"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 150
    }
  }, "Delivery information"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 194
    }
  }), "We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 207
    }
  }, "Returns information")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "reviews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "Reviews (2)"), __jsx("div", {
    className: "review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 45
    }
  }, "Samanta J.")), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 49
    }
  }, product.ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, "6 days ago")), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, "Good, perfect size"), __jsx("div", {
    className: "review-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 45
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")), __jsx("div", {
    className: "review-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 61
    }
  }), "Helpful (2)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 61
    }
  }), "Unhelpful (0)"))))), __jsx("div", {
    className: "review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }, "John Doe")), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 49
    }
  }, product.ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, "5 days ago")), __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }, "Very good"), __jsx("div", {
    className: "review-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")), __jsx("div", {
    className: "review-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 61
    }
  }), "Helpful (0)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-thumbs-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 61
    }
  }), "Unhelpful (0)")))))), __jsx("div", {
    className: "reply",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "title-wrapper text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, "Add a Review"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, "Your email address will not be published. Required fields are marked *")), __jsx("div", {
    className: "rating-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 29
    }
  }, __jsx("label", {
    htmlFor: "rating",
    className: "text-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, "Your rating * "), __jsx("span", {
    className: "rating-stars selected",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }, [1, 2, 3, 4, 5].map((num, index) => __jsx("a", {
    className: `star-${num}`,
    href: "#",
    onClick: setRating,
    key: 'star-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, num))), __jsx("select", {
    name: "rating",
    id: "rating",
    required: "",
    style: {
      display: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, "Rate\u2026"), __jsx("option", {
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  }, "Perfect"), __jsx("option", {
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 37
    }
  }, "Good"), __jsx("option", {
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, "Average"), __jsx("option", {
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, "Not that bad"), __jsx("option", {
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 37
    }
  }, "Very poor"))), __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-2",
    placeholder: "Comment *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "form-checkbox d-flex align-items-start mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  }), __jsx("label", {
    className: "form-control-label ml-3",
    htmlFor: "signin-remember",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, "Save my name, email, and website in this browser for the next time I comment.")), __jsx("button", {
    type: "submit",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, "Submit")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(InfoOne));

/***/ }),

/***/ "./components/partials/product/related/related-one.jsx":
/*!*************************************************************!*\
  !*** ./components/partials/product/related/related-one.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_six__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/features/products/product-six */ "./components/features/products/product-six.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\product\\related\\related-one.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function RelatedProductsOne(props) {
  const {
    products
  } = props;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h2", {
    className: "title text-center mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "You May Also Like"), props.loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",
    isTheme: false,
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__.mainSlider8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, [1, 2, 3, 4].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",
    isTheme: false,
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__.mainSlider8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, products.map((product, index) => __jsx(_components_features_products_product_six__WEBPACK_IMPORTED_MODULE_1__.default, {
    product: product,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(RelatedProductsOne));

/***/ }),

/***/ "./pages/product/default/[slug].jsx":
/*!******************************************!*\
  !*** ./pages/product/default/[slug].jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _components_partials_product_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/partials/product/breadcrumb */ "./components/partials/product/breadcrumb.jsx");
/* harmony import */ var _components_partials_product_gallery_gallery_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/product/gallery/gallery-default */ "./components/partials/product/gallery/gallery-default.jsx");
/* harmony import */ var _components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/product/details/detail-one */ "./components/partials/product/details/detail-one.jsx");
/* harmony import */ var _components_partials_product_info_tabs_info_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/product/info-tabs/info-one */ "./components/partials/product/info-tabs/info-one.jsx");
/* harmony import */ var _components_partials_product_related_related_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/partials/product/related/related-one */ "./components/partials/product/related/related-one.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\product\\default\\[slug].jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










function ProductDefault() {
  const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.slug;
  if (!slug) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  });
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_4__.GET_PRODUCT, {
    variables: {
      slug
    }
  });
  const product = data && data.product.single;
  const related = data && data.product.related;
  const prev = data && data.product.prev;
  const next = data && data.product.next;

  if (error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }
    });
  }

  return __jsx("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_partials_product_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.default, {
    prev: prev,
    next: next,
    current: "Default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "page-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "product-details-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `row skel-pro-single ${loading ? '' : 'loaded'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "skel-product-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }), !loading ? __jsx(_components_partials_product_gallery_gallery_default__WEBPACK_IMPORTED_MODULE_6__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }) : ""), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "entry-summary row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }))), !loading ? __jsx(_components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_7__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }) : ""))), loading ? __jsx("div", {
    className: "skel-pro-tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }) : __jsx(_components_partials_product_info_tabs_info_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }), __jsx(_components_partials_product_related_related_one__WEBPACK_IMPORTED_MODULE_9__.default, {
    products: related,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_3__.default)({
  ssr: true
})(ProductDefault));

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

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ "react-image-magnifiers":
/*!*****************************************!*\
  !*** external "react-image-magnifiers" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

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

/***/ "react-owl-carousel2":
/*!**************************************!*\
  !*** external "react-owl-carousel2" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

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

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx-components_features_owl-carousel_jsx-server_apollo_js-server_qu-bc3a19","components_partials_product_details_detail-one_jsx","utils_data_js"], function() { return __webpack_exec__("./pages/product/default/[slug].jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1zaXguanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2JyZWFkY3J1bWIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2dhbGxlcnkvZ2FsbGVyeS1kZWZhdWx0LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9pbmZvLXRhYnMvaW5mby1vbmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L3JlbGF0ZWQvcmVsYXRlZC1vbmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vcGFnZXMvcHJvZHVjdC9kZWZhdWx0L1tzbHVnXS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZS1saWdodGJveFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LW93bC1jYXJvdXNlbDJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1zbGlkZS10b2dnbGVcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRhYnNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJQcm9kdWN0U2l4IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9kdWN0Iiwid2lzaGxpc3QiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwidXNlU3RhdGUiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwidXNlRWZmZWN0IiwibWluIiwibWF4IiwidmFyaWFudHMiLCJtYXAiLCJpdGVtIiwicHJpY2UiLCJsZW5ndGgiLCJzYWxlX3ByaWNlIiwib25DYXJ0Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb0NhcnQiLCJvbldpc2hsaXN0Q2xpY2siLCJpc0luV2lzaGxpc3QiLCJhZGRUb1dpc2hsaXN0IiwicHVzaCIsIm9uQ29tcGFyZUNsaWNrIiwiaXNJbkNvbXBhcmUiLCJjb21wYXJlbGlzdCIsImFkZFRvQ29tcGFyZSIsIm9uUXVpY2tWaWV3Iiwic2hvd1F1aWNrVmlldyIsInNsdWciLCJuZXciLCJ0b3AiLCJzdG9jayIsInByb2Nlc3MiLCJzbV9waWN0dXJlcyIsInVybCIsIm5hbWUiLCJ0b0ZpeGVkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkYXRhIiwiY29ubmVjdCIsIndpc2hsaXN0QWN0aW9uIiwiY2FydEFjdGlvbiIsImNvbXBhcmVBY3Rpb24iLCJkZW1vQWN0aW9uIiwiQnJlYWRjcnVtYiIsInByZXYiLCJuZXh0IiwiY3VycmVudCIsImZ1bGxXaWR0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJ3aWR0aCIsImhlaWdodCIsIlJlYWN0IiwiR2FsbGVyeURlZmF1bHQiLCJhZENsYXNzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicGhvdG9JbmRleCIsInNldFBob3RvSW5kZXgiLCJtb3ZlTmV4dFBob3RvIiwicGljdHVyZXMiLCJtb3ZlUHJldlBob3RvIiwib3BlbkxpZ2h0Qm94IiwiaW5kZXgiLCJwYXJzZUludCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImNsb3NlTGlnaHRCb3giLCJjaGFuZ2VCZ0ltYWdlIiwiaW1hZ2UiLCJpbWdzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJzcmMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicGFkZGluZ1RvcCIsImlkIiwib3ZlcmxheSIsInpJbmRleCIsIkluZm9PbmUiLCJzZXRSYXRpbmciLCJwYXJlbnROb2RlIiwicmV2aWV3IiwicmF0aW5ncyIsIm51bSIsImRpc3BsYXkiLCJSZWxhdGVkUHJvZHVjdHNPbmUiLCJwcm9kdWN0cyIsImxvYWRpbmciLCJtYWluU2xpZGVyOCIsIlByb2R1Y3REZWZhdWx0IiwiZXJyb3IiLCJ1c2VRdWVyeSIsIkdFVF9QUk9EVUNUIiwidmFyaWFibGVzIiwic2luZ2xlIiwicmVsYXRlZCIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxVQUFULENBQXNCQyxLQUF0QixFQUE4QjtBQUMxQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVgsTUFBd0JKLEtBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUVLLFFBQUY7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFFLENBQUYsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBRUMsUUFBRjtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLCtDQUFRLENBQUUsS0FBRixDQUExQztBQUVBRyxrREFBUyxDQUFFLE1BQU07QUFDYixRQUFJQyxHQUFHLEdBQUdILFFBQVY7QUFDQSxRQUFJSSxHQUFHLEdBQUdQLFFBQVY7QUFDQUYsV0FBTyxDQUFDVSxRQUFSLENBQWlCQyxHQUFqQixDQUFzQkMsSUFBSSxJQUFJO0FBQzFCLFVBQUtKLEdBQUcsR0FBR0ksSUFBSSxDQUFDQyxLQUFoQixFQUF3QkwsR0FBRyxHQUFHSSxJQUFJLENBQUNDLEtBQVg7QUFDeEIsVUFBS0osR0FBRyxHQUFHRyxJQUFJLENBQUNDLEtBQWhCLEVBQXdCSixHQUFHLEdBQUdHLElBQUksQ0FBQ0MsS0FBWDtBQUMzQixLQUhELEVBR0csRUFISDs7QUFLQSxRQUFLYixPQUFP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RDtBQUFXLFdBQU8sRUFBR2pHLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixHQUVNLEVBWmQsQ0FWSixDQURKLENBREosRUErQlFpRyxPQUFPLEdBQ0g7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREcsR0FHSCxNQUFDLG9GQUFEO0FBQVMsV0FBTyxFQUFHakcsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDWixFQXFDSSxNQUFDLHFGQUFEO0FBQW9CLFlBQVEsRUFBR3lHLE9BQS9CO0FBQXlDLFdBQU8sRUFBR1IsT0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDSixDQURKLENBRkosQ0FESjtBQThDSDs7QUFFRCwrREFBZVMsdURBQVUsQ0FBRTtBQUFFQyxLQUFHO0FBQUwsQ0FBRixDQUFWLENBQXFEUixjQUFyRCxDQUFmLEU7Ozs7Ozs7Ozs7O0FDMUVBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvZGVmYXVsdC9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjb21wYXJlQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jb21wYXJlJztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9kZW1vJztcclxuXHJcbmltcG9ydCB7IGlzSW5XaXNobGlzdCwgaXNJbkNvbXBhcmUgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RTaXggKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCB3aXNobGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gbWluUHJpY2U7XHJcbiAgICAgICAgbGV0IG1heCA9IG1heFByaWNlO1xyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBpdGVtLnByaWNlICkgbWluID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1pblByaWNlKCBtaW4gKTtcclxuICAgICAgICBzZXRNYXhQcmljZSggbWF4ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXJ0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoIHByb2R1Y3QgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Db21wYXJlQ2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luQ29tcGFyZSggcHJvcHMuY29tcGFyZWxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9Db21wYXJlKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUXVpY2tWaWV3ICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuc2hvd1F1aWNrVmlldyggcHJvZHVjdC5zbHVnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmV3ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1uZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtb3V0XCI+T3V0IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsYWNrIGFuZCB3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zbV9waWN0dXJlcy5sZW5ndGggPj0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3Quc21fcGljdHVyZXNbIDEgXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDUwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCB3aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlXCIgb25DbGljaz17IG9uV2lzaGxpc3RDbGljayB9PjxzcGFuPmFkZCB0byB3aXNobGlzdDwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXF1aWNrdmlld1wiIHRpdGxlPVwiUXVpY2sgVmlld1wiIG9uQ2xpY2s9eyBvblF1aWNrVmlldyB9PjxzcGFuPnF1aWNrIHZpZXc8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdC1pY29uIGJ0bi1jb21wYXJlXCIgb25DbGljaz17IG9uQ29tcGFyZUNsaWNrIH0+PHNwYW4+Y29tcGFyZTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24tdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGUgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5nbyB0byB3aXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLWNvbXBhcmVcIiBvbkNsaWNrPXsgb25Db21wYXJlQ2xpY2sgfT48c3Bhbj5jb21wYXJlPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgJiYgcHJvZHVjdC5zdG9jayAhPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4tY2FydCBidG4tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWxlY3Qgb3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0XCIgb25DbGljaz17IG9uQ2FydENsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dC1wcmljZVwiPiR7IHByb2R1Y3QucHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdFNpeCApO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gQnJlYWRjcnVtYiAoIHByb3BzICkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHByZXYsIG5leHQsIGN1cnJlbnQsIGZ1bGxXaWR0aCA9IGZhbHNlIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXYgYm9yZGVyLTAgbWItMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICcgKyAoIGZ1bGxXaWR0aCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgKSB9PlxyXG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPkhvbWU8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCI+UHJvZHVjdDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiPnsgY3VycmVudCB9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwcm9kdWN0LXBhZ2VyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHtwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeToge3NsdWc6IHByZXYuc2x1Z319IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgcHJvZHVjdC1wYWdlci1saW5rIHByb2R1Y3QtcGFnZXItcHJldiAkeyFuZXh0ID8gJ3ByZXYtb25seScgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFuZ2xlLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJldjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJldi5zbV9waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyBwcmV2LnNtX3BpY3R1cmVzWyAwIF0ud2lkdGggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IHByZXYuc21fcGljdHVyZXNbIDAgXS5oZWlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWUgbWItMFwiPnsgcHJldi5uYW1lIH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7cGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHtzbHVnOiBuZXh0LnNsdWd9fSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1wYWdlci1saW5rIHByb2R1Y3QtcGFnZXItbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFuZ2xlLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBuZXh0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17IG5leHQuc21fcGljdHVyZXNbIDAgXS53aWR0aCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsgbmV4dC5zbV9waWN0dXJlc1sgMCBdLmhlaWdodCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZSBtYi0wXCI+eyBuZXh0Lm5hbWUgfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvbmF2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvbmF2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggQnJlYWRjcnVtYiApOyIsImltcG9ydCB7IE1hZ25pZmllciB9IGZyb20gJ3JlYWN0LWltYWdlLW1hZ25pZmllcnMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpZ2h0Qm94IGZyb20gJ3JlYWN0LWltYWdlLWxpZ2h0Ym94JztcclxuXHJcbmZ1bmN0aW9uIEdhbGxlcnlEZWZhdWx0ICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGFkQ2xhc3MgPSBcInByb2R1Y3QtZ2FsbGVyeS12ZXJ0aWNhbFwiIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgaXNPcGVuLCBzZXRJc09wZW4gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBwaG90b0luZGV4LCBzZXRQaG90b0luZGV4IF0gPSB1c2VTdGF0ZSggMCApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcHJvZHVjdCApIHtcclxuICAgICAgICAgICAgc2V0SXNPcGVuKCBmYWxzZSApO1xyXG4gICAgICAgICAgICBzZXRQaG90b0luZGV4KCAwICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVOZXh0UGhvdG8gKCkge1xyXG4gICAgICAgIHNldFBob3RvSW5kZXgoICggcGhvdG9JbmRleCArIDEgKSAlIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVByZXZQaG90byAoKSB7XHJcbiAgICAgICAgc2V0UGhvdG9JbmRleCggKCBwaG90b0luZGV4ICsgcHJvZHVjdC5waWN0dXJlcy5sZW5ndGggLSAxICkgJSBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5MaWdodEJveCAoKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLnByb2R1Y3QtbWFpbi1pbWFnZVwiICkuZ2V0QXR0cmlidXRlKCBcImluZGV4XCIgKSApO1xyXG5cclxuICAgICAgICBpZiAoICFpbmRleCApIHtcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc09wZW4oIHRydWUgKTtcclxuICAgICAgICBzZXRQaG90b0luZGV4KCBpbmRleCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTGlnaHRCb3ggKCkge1xyXG4gICAgICAgIHNldElzT3BlbiggZmFsc2UgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VCZ0ltYWdlICggZSwgaW1hZ2UsIGluZGV4ICkge1xyXG4gICAgICAgIGxldCBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5wcm9kdWN0LW1haW4taW1hZ2UgaW1nJyApO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGltZ3NbIGkgXS5zcmMgPSBpbWFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucHJvZHVjdC1pbWFnZS1nYWxsZXJ5IC5hY3RpdmUnICkuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZScgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wcm9kdWN0LW1haW4taW1hZ2UnICkuc2V0QXR0cmlidXRlKCAnaW5kZXgnLCBpbmRleCApO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggIXByb2R1Y3QgKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBwcm9kdWN0LWdhbGxlcnkgJHthZENsYXNzfWAgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1tYWluLWltYWdlXCIgaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmV3ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zYWxlX3ByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnRvcCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC10b3BcIj5Ub3A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1sYWJlbCBsYWJlbC1vdXRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWduaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VJbWFnZVNyYz17IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIHByb2R1Y3QucGljdHVyZXNbIDAgXS51cmwgfSAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ1RvTW92ZT17IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZhdGlvbj1cImhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvclN0eWxlQWN0aXZlPVwiY3Jvc3NoYWlyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvZHVjdC16b29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInpvb20taW1hZ2UgcG9zaXRpb24tcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgcHJvZHVjdC5waWN0dXJlc1sgMCBdLndpZHRoIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IHByb2R1Y3QucGljdHVyZXNbIDAgXS5oZWlnaHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IHBhZGRpbmdUb3A6IGAke3Byb2R1Y3QucGljdHVyZXNbIDAgXS5oZWlnaHQgLyBwcm9kdWN0LnBpY3R1cmVzWyAwIF0ud2lkdGggKiAxMDB9JWAgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXByb2R1Y3QtZ2FsbGVyeVwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWdhbGxlcnlcIiBvbkNsaWNrPXsgb3BlbkxpZ2h0Qm94IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LXpvb20tZ2FsbGVyeVwiIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgcHJvZHVjdC1nYWxsZXJ5LWl0ZW0gJHswID09PSBpbmRleCA/ICdhY3RpdmUnIDogJyd9YCB9IGtleT17IHByb2R1Y3QuaWQgKyAnLScgKyBpbmRleCB9IG9uQ2xpY2s9eyBlID0+IGNoYW5nZUJnSW1hZ2UoIGUsIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FTU0VUX1VSSSArIGl0ZW0udXJsfWAsIGluZGV4ICkgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyBpbmRleCBdLnVybCB9IGFsdD1cInByb2R1Y3QgYmFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gP1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaWdodEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluU3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5waWN0dXJlc1sgcGhvdG9JbmRleCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnBpY3R1cmVzWyAoIHBob3RvSW5kZXggKyAxICkgJSBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnBpY3R1cmVzWyAoIHBob3RvSW5kZXggKyBwcm9kdWN0LnBpY3R1cmVzLmxlbmd0aCAtIDEgKSAlIHByb2R1Y3QucGljdHVyZXMubGVuZ3RoIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eyBjbG9zZUxpZ2h0Qm94IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eyBtb3ZlTmV4dFBob3RvIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9eyBtb3ZlUHJldlBob3RvIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RNb2RhbFN0eWxlPXsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTA0MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggR2FsbGVyeURlZmF1bHQgKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIEluZm9PbmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2V0UmF0aW5nID0gKCBlICkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCAnLmFjdGl2ZScgKSApIHtcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvciggJy5hY3RpdmUnICkuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZScgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggIXByb2R1Y3QgKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFicyBzZWxlY3RlZFRhYkNsYXNzTmFtZT1cInNob3dcIiBzZWxlY3RlZFRhYlBhbmVsQ2xhc3NOYW1lPVwiYWN0aXZlIHNob3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFiTGlzdCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+IERlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+IEFkZGl0aW9uYWwgaW5mb3JtYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaGlwcGluZyAmIFJldHVybnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiA+UmV2aWV3cyAoeyBwcm9kdWN0LnJldmlldyB9KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYi1wYW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Qcm9kdWN0IEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTFcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgb2Rpby4gUXVpc3F1ZSB2b2x1dHBhdCBtYXR0aXMgZXJvcy4gTnVsbGFtIG1hbGVzdWFkYSBlcmF0IHV0IHR1cnBpcy4gU3VzcGVuZGlzc2UgdXJuYSB2aXZlcnJhIG5vbiwgc2VtcGVyIHN1c2NpcGl0LCBwb3N1ZXJlIGEsIHBlZGUuIERvbmVjIG5lYyBqdXN0byBlZ2V0IGZlbGlzIGZhY2lsaXNpcyBmZXJtZW50dW0uIEFsaXF1YW0gcG9ydHRpdG9yIG1hdXJpcyBzaXQgYW1ldCBvcmNpLiBBZW5lYW4gZGlnbmlzc2ltIHBlbGxlbnRlc3F1ZSBmZWxpcy4gUGhhc2VsbHVzIHVsdHJpY2VzIG51bGxhIHF1aXMgbmliaC4gUXVpc3F1ZSBhIGxlY3R1cy4gRG9uZWMgY29uc2VjdGV0dWVyIGxpZ3VsYSB2dWxwdXRhdGUgc2VtIHRyaXN0aXF1ZSBjdXJzdXMuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TnVuYyBuZWMgcG9ydHRpdG9yIHR1cnBpcy4gSW4gZXUgcmlzdXMgZW5pbS4gSW4gdml0YWUgbW9sbGlzIGVsaXQuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlZpdmFtdXMgZmluaWJ1cyB2ZWwgbWF1cmlzIHV0IHZlaGljdWxhLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk51bGxhbSBhIG1hZ25hIHBvcnR0aXRvciwgZGljdHVtIHJpc3VzIG5lYywgZmF1Y2lidXMgc2FwaWVuLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIG9kaW8uIFF1aXNxdWUgdm9sdXRwYXQgbWF0dGlzIGVyb3MuIE51bGxhbSBtYWxlc3VhZGEgZXJhdCB1dCB0dXJwaXMuIFN1c3BlbmRpc3NlIHVybmEgdml2ZXJyYSBub24sIHNlbXBlciBzdXNjaXBpdCwgcG9zdWVyZSBhLCBwZWRlLiBEb25lYyBuZWMganVzdG8gZWdldCBmZWxpcyBmYWNpbGlzaXMgZmVybWVudHVtLiBBbGlxdWFtIHBvcnR0aXRvciBtYXVyaXMgc2l0IGFtZXQgb3JjaS4gQWVuZWFuIGRpZ25pc3NpbSBwZWxsZW50ZXNxdWUgZmVsaXMuIFBoYXNlbGx1cyB1bHRyaWNlcyBudWxsYSBxdWlzIG5pYmguIFF1aXNxdWUgYSBsZWN0dXMuIERvbmVjIGNvbnNlY3RldHVlciBsaWd1bGEgdnVscHV0YXRlIHNlbSB0cmlzdGlxdWUgY3Vyc3VzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItcGFuZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIG9kaW8uIFF1aXNxdWUgdm9sdXRwYXQgbWF0dGlzIGVyb3MuIE51bGxhbSBtYWxlc3VhZGEgZXJhdCB1dCB0dXJwaXMuIFN1c3BlbmRpc3NlIHVybmEgdml2ZXJyYSBub24sIHNlbXBlciBzdXNjaXBpdCwgcG9zdWVyZSBhLCBwZWRlLiBEb25lYyBuZWMganVzdG8gZWdldCBmZWxpcyBmYWNpbGlzaXMgZmVybWVudHVtLiBBbGlxdWFtIHBvcnR0aXRvciBtYXVyaXMgc2l0IGFtZXQgb3JjaS4gPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwdC0yXCI+RmFicmljICYgY2FyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZhdXggc3VlZGUgZmFicmljPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R29sZCB0b25lIG1ldGFsIGhvb3AgaGFuZGxlcy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SSSBicmFuZGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNuYWtlIHByaW50IHRyaW0gaW50ZXJpb3IgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRqdXN0YWJsZSBjcm9zcyBib2R5IHN0cmFwPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IEhlaWdodDogMzFjbTsgV2lkdGg6IDMyY207IERlcHRoOiAxMmNtOyBIYW5kbGUgRHJvcDogNjFjbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TaXplPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPm9uZSBzaXplPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiLXBhbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2MtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRlbGl2ZXJ5ICYgcmV0dXJuczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBkZWxpdmVyIHRvIG92ZXIgMTAwIGNvdW50cmllcyBhcm91bmQgdGhlIHdvcmxkLiBGb3IgZnVsbCBkZXRhaWxzIG9mIHRoZSBkZWxpdmVyeSBvcHRpb25zIHdlIG9mZmVyLCBwbGVhc2UgdmlldyBvdXIgPEFMaW5rIGhyZWY9XCIjXCI+RGVsaXZlcnkgaW5mb3JtYXRpb248L0FMaW5rPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhvcGUgeW914oCZbGwgbG92ZSBldmVyeSBwdXJjaGFzZSwgYnV0IGlmIHlvdSBldmVyIG5lZWQgdG8gcmV0dXJuIGFuIGl0ZW0geW91IGNhbiBkbyBzbyB3aXRoaW4gYSBtb250aCBvZiByZWNlaXB0LiBGb3IgZnVsbCBkZXRhaWxzIG9mIGhvdyB0byBtYWtlIGEgcmV0dXJuLCBwbGVhc2UgdmlldyBvdXIgPEFMaW5rIGhyZWY9XCIjXCI+UmV0dXJucyBpbmZvcm1hdGlvbjwvQUxpbms+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiLXBhbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UmV2aWV3cyAoMik8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48QUxpbmsgaHJlZj1cIiNcIj5TYW1hbnRhIEouPC9BTGluaz48L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIj57IHByb2R1Y3QucmF0aW5ncy50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3LWRhdGUgbWItMVwiPjYgZGF5cyBhZ288L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pkdvb2QsIHBlcmZlY3Qgc2l6ZTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEdWNpbXVzIGN1bSBkb2xvcmVzIGFzc3VtZW5kYSBhc3BlcmlvcmVzIGZhY2lsaXMgcG9ycm8gcmVwcmVoZW5kZXJpdCBhbmltaSBjdWxwYSBhdHF1ZSBibGFuZGl0aWlzIGNvbW1vZGkgcGVyc3BpY2lhdGlzIGRvbG9yZW1xdWUsIHBvc3NpbXVzLCBleHBsaWNhYm8sIGF1dGVtIGZ1Z2l0IGJlYXRhZSBxdWFlIHZvbHVwdGFzITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImljb24tdGh1bWJzLXVwXCI+PC9pPkhlbHBmdWwgKDIpPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJpY29uLXRodW1icy1kb3duXCI+PC9pPlVuaGVscGZ1bCAoMCk8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PEFMaW5rIGhyZWY9XCIjXCI+Sm9obiBEb2U8L0FMaW5rPjwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3LWRhdGUgbWItMVwiPjUgZGF5cyBhZ288L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5WZXJ5IGdvb2Q8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWQsIG1vbGVzdGlhcywgdGVtcG9yZT8gRXggZG9sb3IgZXNzZSBpdXJlIGhpYyB2ZW5pYW0gbGFib3J1bSBibGFuZGl0aWlzIGxhdWRhbnRpdW0gaXN0ZSBhbWV0LiBDdW0gbm9uIHZvbHVwdGF0ZSBlb3MgZW5pbSwgYWIgY3VtcXVlIG5hbSwgbW9kaSwgcXVhcyBpdXJlIGlsbHVtIHJlcGVsbGVuZHVzLCBibGFuZGl0aWlzIHBlcnNwaWNpYXRpcyBiZWF0YWUhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10aHVtYnMtdXBcIj48L2k+SGVscGZ1bCAoMCk8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImljb24tdGh1bWJzLWRvd25cIj48L2k+VW5oZWxwZnVsICgwKTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwbHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtd3JhcHBlciB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtc2ltcGxlIHRleHQtbGVmdCB0ZXh0LW5vcm1hbFwiPkFkZCBhIFJldmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBlbWFpbCBhZGRyZXNzIHdpbGwgbm90IGJlIHB1Ymxpc2hlZC4gUmVxdWlyZWQgZmllbGRzIGFyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFya2VkICo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhdGluZ1wiIGNsYXNzTmFtZT1cInRleHQtZGFya1wiPllvdXIgcmF0aW5nICogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmctc3RhcnMgc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBbIDEsIDIsIDMsIDQsIDUgXS5tYXAoICggbnVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBgc3Rhci0ke251bX1gIH0gaHJlZj1cIiNcIiBvbkNsaWNrPXsgc2V0UmF0aW5nIH0ga2V5PXsgJ3N0YXItJyArIGluZGV4IH0+eyBudW0gfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyYXRpbmdcIiBpZD1cInJhdGluZ1wiIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGRpc3BsYXk6ICdub25lJyB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5SYXRl4oCmPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+UGVyZmVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPkdvb2Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5BdmVyYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Tm90IHRoYXQgYmFkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+VmVyeSBwb29yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZXBseS1tZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItMlwiIHBsYWNlaG9sZGVyPVwiQ29tbWVudCAqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInJlcGx5LW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBseS1uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lICpcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicmVwbHktZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBseS1lbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgKlwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveCBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lnbmluLXJlbWVtYmVyXCIgbmFtZT1cInNpZ25pbi1yZW1lbWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWwgbWwtM1wiIGh0bWxGb3I9XCJzaWduaW4tcmVtZW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgbXkgbmFtZSwgZW1haWwsIGFuZCB3ZWJzaXRlIGluIHRoaXMgYnJvd3NlciBmb3IgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0IHRpbWUgSSBjb21tZW50LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBJbmZvT25lICk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RTaXggZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3Qtc2l4JztcclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IHsgbWFpblNsaWRlcjggfSBmcm9tICd+L3V0aWxzL2RhdGEnO1xyXG5cclxuZnVuY3Rpb24gUmVsYXRlZFByb2R1Y3RzT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlciBtYi00XCI+WW91IE1heSBBbHNvIExpa2U8L2gyPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMubG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLWVxdWFsLWhlaWdodCBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXhsLTUgY29scy1sZy00IGNvbHMtbWQtMyBjb2xzLTJcIiBpc1RoZW1lPXsgZmFsc2UgfSBvcHRpb25zPXsgbWFpblNsaWRlcjggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCIga2V5PXsgaW5kZXggfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC1lcXVhbC1oZWlnaHQgY2Fyb3VzZWwtd2l0aC1zaGFkb3cgY29scy1sZy00IGNvbHMtbWQtMyBjb2xzLXhzLTIgY29scy0xXCIgaXNUaGVtZT17IGZhbHNlIH0gb3B0aW9ucz17IG1haW5TbGlkZXI4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCggKCBwcm9kdWN0LCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RTaXggcHJvZHVjdD17IHByb2R1Y3QgfSBrZXk9eyBpbmRleCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBSZWxhdGVkUHJvZHVjdHNPbmUgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVCB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5cclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvYnJlYWRjcnVtYic7XHJcbmltcG9ydCBHYWxsZXJ5RGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9nYWxsZXJ5L2dhbGxlcnktZGVmYXVsdCc7XHJcbmltcG9ydCBEZXRhaWxPbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvZGV0YWlscy9kZXRhaWwtb25lJztcclxuaW1wb3J0IEluZm9PbmUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2R1Y3QvaW5mby10YWJzL2luZm8tb25lJztcclxuaW1wb3J0IFJlbGF0ZWRQcm9kdWN0c09uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9yZWxhdGVkL3JlbGF0ZWQtb25lJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3REZWZhdWx0ICgpIHtcclxuICAgIGNvbnN0IHNsdWcgPSB1c2VSb3V0ZXIoKS5xdWVyeS5zbHVnO1xyXG4gICAgaWYgKCAhc2x1ZyApIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeSggR0VUX1BST0RVQ1QsIHsgdmFyaWFibGVzOiB7IHNsdWcgfSB9ICk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3Quc2luZ2xlO1xyXG4gICAgY29uc3QgcmVsYXRlZCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0LnJlbGF0ZWQ7XHJcbiAgICBjb25zdCBwcmV2ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3QucHJldjtcclxuICAgIGNvbnN0IG5leHQgPSBkYXRhICYmIGRhdGEucHJvZHVjdC5uZXh0O1xyXG5cclxuICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgcHJldj17IHByZXYgfSBuZXh0PXsgbmV4dCB9IGN1cnJlbnQ9XCJEZWZhdWx0XCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNrZWxldG9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcm93IHNrZWwtcHJvLXNpbmdsZSAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvZHVjdC1nYWxsZXJ5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeURlZmF1bHQgcHJvZHVjdD17IHByb2R1Y3QgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktc3VtbWFyeSByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktc3VtbWFyeTEgbXQtMiBtdC1tZC0wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxPbmUgcHJvZHVjdD17IHByb2R1Y3QgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByby10YWJzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb09uZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UmVsYXRlZFByb2R1Y3RzT25lIHByb2R1Y3RzPXsgcmVsYXRlZCB9IGxvYWRpbmc9eyBsb2FkaW5nIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSApKCBQcm9kdWN0RGVmYXVsdCApO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZS1saWdodGJveFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlkZS10b2dnbGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRhYnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=