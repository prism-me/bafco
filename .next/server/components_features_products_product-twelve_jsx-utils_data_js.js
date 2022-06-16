exports.id = "components_features_products_product-twelve_jsx-utils_data_js";
exports.ids = ["components_features_products_product-twelve_jsx-utils_data_js"];
exports.modules = {

/***/ "./components/features/products/product-twelve.jsx":
/*!*********************************************************!*\
  !*** ./components/features/products/product-twelve.jsx ***!
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\products\\product-twelve.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductTwelve(props) {
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
    className: "product product-11 text-center",
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
    className: "product-label label-circle label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-circle label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-circle label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-circle label-out",
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
  }) : ""), __jsx("div", {
    className: "product-action-vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isInWishlist)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 133
    }
  }, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 126
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
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 119
    }
  }, "quick view")))), __jsx("div", {
    className: "product-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, product.category.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.slug + '-' + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 33
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 165,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 177,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 113
    }
  }, "Color Name"))))) : ""), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 37
    }
  }, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 37
    }
  }, "add to cart"))) : "");
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_5__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_6__.actions), _store_compare__WEBPACK_IMPORTED_MODULE_7__.actions), _store_demo__WEBPACK_IMPORTED_MODULE_8__.actions))(ProductTwelve));

/***/ }),

/***/ "./utils/data.js":
/*!***********************!*\
  !*** ./utils/data.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeIn": function() { return /* binding */ fadeIn; },
/* harmony export */   "fadeInRightShorter": function() { return /* binding */ fadeInRightShorter; },
/* harmony export */   "fadeInRight": function() { return /* binding */ fadeInRight; },
/* harmony export */   "fadeInLeftShorter": function() { return /* binding */ fadeInLeftShorter; },
/* harmony export */   "fadeInLeft": function() { return /* binding */ fadeInLeft; },
/* harmony export */   "fadeInUpShorter": function() { return /* binding */ fadeInUpShorter; },
/* harmony export */   "fadeInUp": function() { return /* binding */ fadeInUp; },
/* harmony export */   "fadeInDownShorter": function() { return /* binding */ fadeInDownShorter; },
/* harmony export */   "blurIn": function() { return /* binding */ blurIn; },
/* harmony export */   "grayOut": function() { return /* binding */ grayOut; },
/* harmony export */   "dotPulse": function() { return /* binding */ dotPulse; },
/* harmony export */   "maskUp": function() { return /* binding */ maskUp; },
/* harmony export */   "maskRight": function() { return /* binding */ maskRight; },
/* harmony export */   "maskDown": function() { return /* binding */ maskDown; },
/* harmony export */   "maskLeft": function() { return /* binding */ maskLeft; },
/* harmony export */   "slideInUp": function() { return /* binding */ slideInUp; },
/* harmony export */   "slideInDown": function() { return /* binding */ slideInDown; },
/* harmony export */   "slideInLeft": function() { return /* binding */ slideInLeft; },
/* harmony export */   "slideInRight": function() { return /* binding */ slideInRight; },
/* harmony export */   "flipInX": function() { return /* binding */ flipInX; },
/* harmony export */   "flipInY": function() { return /* binding */ flipInY; },
/* harmony export */   "flipOutY": function() { return /* binding */ flipOutY; },
/* harmony export */   "brightIn": function() { return /* binding */ brightIn; },
/* harmony export */   "zoomInShorter": function() { return /* binding */ zoomInShorter; },
/* harmony export */   "bounceInUp": function() { return /* binding */ bounceInUp; },
/* harmony export */   "slideZoomIn": function() { return /* binding */ slideZoomIn; },
/* harmony export */   "shopData": function() { return /* binding */ shopData; },
/* harmony export */   "homeData": function() { return /* binding */ homeData; },
/* harmony export */   "mainSlider1": function() { return /* binding */ mainSlider1; },
/* harmony export */   "mainSlider2": function() { return /* binding */ mainSlider2; },
/* harmony export */   "mainSlider3": function() { return /* binding */ mainSlider3; },
/* harmony export */   "mainSlider4": function() { return /* binding */ mainSlider4; },
/* harmony export */   "mainSlider5": function() { return /* binding */ mainSlider5; },
/* harmony export */   "mainSlider6": function() { return /* binding */ mainSlider6; },
/* harmony export */   "mainSlider7": function() { return /* binding */ mainSlider7; },
/* harmony export */   "mainSlider8": function() { return /* binding */ mainSlider8; },
/* harmony export */   "mainSlider9": function() { return /* binding */ mainSlider9; },
/* harmony export */   "mainSlider10": function() { return /* binding */ mainSlider10; },
/* harmony export */   "mainSlider11": function() { return /* binding */ mainSlider11; },
/* harmony export */   "mainSlider12": function() { return /* binding */ mainSlider12; },
/* harmony export */   "featureSlider1": function() { return /* binding */ featureSlider1; },
/* harmony export */   "featureSlider2": function() { return /* binding */ featureSlider2; },
/* harmony export */   "featureSlider3": function() { return /* binding */ featureSlider3; },
/* harmony export */   "featureSlider4": function() { return /* binding */ featureSlider4; },
/* harmony export */   "introSlider": function() { return /* binding */ introSlider; },
/* harmony export */   "dealSlider": function() { return /* binding */ dealSlider; },
/* harmony export */   "brandSlider": function() { return /* binding */ brandSlider; },
/* harmony export */   "productSlider": function() { return /* binding */ productSlider; },
/* harmony export */   "blogSlider": function() { return /* binding */ blogSlider; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);

const fadeIn = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        opacity:0;
    }
  
    to {
        opacity:1;
    }
}`;
const fadeInRightShorter = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`
from {
  opacity: 0;
  transform: translate(-50px,0);
  transform-origin: 0 0;
}

to {
  opacity: 1;
  transform: none
}`;
const fadeInRight = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`
0% {
    -webkit-transform: translate3d(100%,0,0);
    opacity: 0;
    transform: translate3d(100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;
const fadeInLeftShorter = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        opacity: 0;
        transform: translate(50px,0);
        transform-origin: 0 0;
    }
    to {
        opacity: 1;
        transform: none
    }
}`;
const fadeInLeft = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`
0% {
    -webkit-transform: translate3d(-100%,0,0);
    opacity: 0;
    transform: translate3d(-100%,0,0)
}

to {
    -webkit-transform: translateZ(0);
    opacity: 1;
    transform: translateZ(0)
}`;
const fadeInUpShorter = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`
from {
    opacity: 0;
    transform: translate(0,50px);
    transform-origin: 0 0;
}
to {
    opacity:1;
    transform:none
}`;
const fadeInUp = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`
0% {
    -webkit-transform: translate3d( 0, 100%, 0 );
    opacity: 0;
    transform: translate3d( 0, 100 %, 0 )
}

to {
    -webkit-transform: translateZ( 0 );
    opacity: 1;
    transform: translateZ( 0 )
}`;
const fadeInDownShorter = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`
from {
    opacity: 0;
    transform: translate(0,-50px);
    transform-origin: 0 0;
}

to {
    opacity: 1;
    transform: none
}`;
const blurIn = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        opacity: 0;
        filter: blur(20px);
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: none 
    }
}`;
const grayOut = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        opacity: 1;
        filter: grayscale(0);
    }
    15% {
        filter: grayscale(100%);
    }
    to {
        opacity: .0;
        filter: grayscale(100%);
    }
}`;
const dotPulse = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        opacity:1;
        transform:scale(.2)
    }
  
    to {
        opacity:0;
        transform:scale(1)
    }
}`;
const maskUp = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        transform: translate(0,100%)
    }
  
    to {
        transform: translate(0,0)
    }
}`;
const maskRight = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        transform: translate(-100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`;
const maskDown = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        transform: translate(0,-100%)
    }
    to {
        transform: translate(0,0)
    }
}`;
const maskLeft = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from {
        transform: translate(100%,0)
    }
    to {
        transform: translate(0,0)
    }
}`;
const slideInUp = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0% {
        transform: translate3d(0, 100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`;
const slideInDown = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0% {
        transform: translate3d(0, -100%, 0);
        visibility: visible
    }

    to {
        transform: translateZ(0)
    }
}`;
const slideInLeft = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0% {
        transform: translate3d(-100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`;
const slideInRight = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0% {
        transform: translate3d(100%, 0, 0);
        visibility: visible
    }
  
    to {
        transform: translateZ(0)
    }
}`;
const flipInX = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0% {
        animation-timing-function: ease-in;
        opacity: 0;
        transform: perspective(400px) rotateX(90deg)
    }
  
    to {
        transform: perspective(400px)
    }
}`;
const flipInY = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
  0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: perspective(400px) rotateY(90deg);
  }

  to {
      transform: perspective(400px);
  }
}`;
const flipOutY = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0% {
        animation-timing-function: ease-out;
        transform: perspective(400px)
    }

    to {
        opacity: 0;
        transform: perspective(400px) rotateY(90deg)
    }
}`;
const brightIn = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes` {
    0% {
        animation-timing-function: ease-in;
        filter: brightness(0%)
    }
  
    to {
        filter: brightness(100%)
    }
}`;
const zoomInShorter = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0%{
        -webkit-transform:scale3d(.8,.8,.8);
        opacity:0;
        transform:scale3d(.8,.8,.8)
    }
    50%{
        opacity:1
    }
}`;
const bounceInUp = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
        opacity: 0;
        transform: translate3d(0, 3000px, 0);
    }

    60% {
        opacity: 1;
        transform: translate3d(0, -20px, 0);
    }

    75% {
        transform: translate3d(0, 10px, 0);
    }

    90% {
        transform: translate3d(0, -5px, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}`;
const slideZoomIn = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.keyframes`{
    0%{
        transform:scale3d(1,1,1);
        opacity: 1;
    }
    100% {
        transform:scale3d(1.1,1.1,1);
        opacity: 1;
    }
}`;
const shopData = {
  "sizes": [{
    size: 'Highback',
    slug: 'XS'
  }, {
    size: 'Lounge',
    slug: 'S'
  }, {
    size: 'Midback',
    slug: 'M'
  }, {
    size: 'Sofa',
    slug: 'L'
  }, {
    size: 'Visitor',
    slug: 'XL'
  }],
  "colors": [{
    color: '#FFB951',
    color_name: 'Brown'
  }, {
    color: '#352692',
    color_name: 'Blue'
  }, {
    color: '#9E00FF',
    color_name: 'Purple'
  }, {
    color: '#E800DE',
    color_name: 'Black'
  }, {
    color: '#02A443',
    color_name: 'Green'
  }, {
    color: '#880B0B',
    color_name: 'Red'
  }],
  "brands": [{
    brand: "Bafco",
    slug: "next"
  }, {
    brand: "Comfort",
    slug: "river-island"
  }, {
    brand: "Humanscale",
    slug: "geox"
  }, {
    brand: "Linear",
    slug: "nex-balance"
  }],
  "categories": [{
    name: "Executive Chairs",
    slug: "furniture",
    count: 8
  }, {
    name: "Ergonomic Chairs",
    slug: "coffee-and-tables",
    count: 1
  }, {
    name: "Conference Chairs",
    slug: "lighting",
    count: 3
  }, {
    name: "Visitor Chairs",
    slug: "decoration",
    count: 5
  }, {
    name: "Stools",
    slug: "electronics",
    count: 1
  }, {
    name: "Multi-Functional Chairs",
    slug: "beds",
    count: 2
  }],
  "prices": [{
    min: '0',
    max: '25',
    name: 'Under Dhs25'
  }, {
    min: '25',
    max: '50',
    name: 'Dhs25 to Dhs50'
  }, {
    min: '50',
    max: '100',
    name: 'Dhs50 to Dhs100'
  }, {
    min: '100',
    max: '200',
    name: 'Dhs100 to Dhs200'
  }, {
    min: '200',
    max: '9999',
    name: 'Dhs200 & Above'
  }]
};
const homeData = {
  brands: [{
    "name": "brand",
    "image": "images/brands/swarovski.png",
    "width": 100,
    "height": 23
  }, {
    "name": "brand",
    "image": "images/brands/eaglestar.png",
    "width": 101,
    "height": 34
  }, {
    "name": "brand",
    "image": "images/brands/kpm.png",
    "width": 100,
    "height": 30
  }, {
    "name": "brand",
    "image": "images/brands/alfuttaim.png",
    "width": 101,
    "height": 39
  }, {
    "name": "brand",
    "image": "images/brands/eaglestar.png",
    "width": 100,
    "height": 48
  }, {
    "name": "brand",
    "image": "images/brands/swarovski.png",
    "width": 100,
    "height": 23
  }, {
    "name": "brand",
    "image": "images/brands/eaglestar.png",
    "width": 63,
    "height": 32
  }, {
    "name": "brand",
    "image": "images/brands/kpm.png",
    "width": 80,
    "height": 72
  }, {
    "name": "brand",
    "image": "images/brands/alfuttaim.png",
    "width": 100,
    "height": 25
  }]
};
const mainSlider1 = {
  nav: false,
  dots: true,
  items: 3,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    992: {
      items: 3,
      dots: true
    }
  }
};
const mainSlider2 = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
const mainSlider3 = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    480: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      nav: true,
      items: 4
    }
  }
};
const mainSlider4 = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};
const mainSlider5 = {
  nav: false,
  dots: true,
  margin: 20,
  loop: true,
  responsive: {
    1200: {
      nav: true
    }
  }
};
const mainSlider6 = {
  nav: false,
  dots: true,
  margin: 20,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 2,
      nav: true
    }
  }
};
const mainSlider7 = {
  nav: false,
  dots: true,
  items: 3,
  margin: 20,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 3,
      nav: true
    }
  }
};
const mainSlider8 = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  items: 2,
  responsive: {
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 4,
      dots: false
    },
    1400: {
      nav: true,
      items: 4
    }
  }
};
const mainSlider9 = {
  nav: true,
  dots: false,
  items: 3,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    992: {
      items: 3
    }
  }
};
const mainSlider10 = {
  loop: false,
  dots: false,
  responsive: {
    772: {
      nav: true
    }
  }
};
const mainSlider11 = {
  nav: false,
  dots: true,
  margin: 30,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    420: {
      items: 3
    },
    600: {
      items: 4
    },
    900: {
      items: 5
    },
    1024: {
      items: 6,
      nav: true,
      dots: false
    }
  }
};
const mainSlider12 = {
  nav: true,
  dots: false,
  margin: 20,
  loop: false,
  autoplay: false,
  responsive: {
    0: {
      items: 2
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
const featureSlider1 = {
  nav: false,
  dots: false,
  margin: 30,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    420: {
      items: 3
    },
    600: {
      items: 4
    },
    900: {
      items: 5
    },
    1024: {
      items: 6
    }
  }
};
const featureSlider2 = {
  nav: false,
  dots: false,
  margin: 0,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    420: {
      items: 3
    },
    600: {
      items: 4
    },
    900: {
      items: 5
    },
    1024: {
      items: 6
    },
    1360: {
      items: 7
    }
  }
};
const featureSlider3 = {
  nav: false,
  dots: false,
  margin: 0,
  items: 6,
  loop: false,
  responsive: {
    0: {
      items: 1
    },
    360: {
      items: 2
    },
    600: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    },
    1500: {
      items: 6
    }
  }
};
const featureSlider4 = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};
const introSlider = {
  nav: false,
  dots: false,
  loop: true
};
const dealSlider = {
  nav: false,
  dots: true,
  loop: true
};
const brandSlider = {
  nav: false,
  dots: false,
  margin: 0,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    420: {
      items: 3
    },
    600: {
      items: 4
    },
    900: {
      items: 5
    },
    1024: {
      items: 6
    },
    1360: {
      items: 7
    }
  }
};
const productSlider = {
  nav: false,
  dots: true,
  margin: 20,
  loop: false,
  autoHeight: true,
  responsive: {
    320: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 4
    },
    1600: {
      items: 5,
      nav: true,
      dots: false
    }
  }
};
const blogSlider = {
  nav: false,
  dots: true,
  items: 3,
  margin: 20,
  loop: false,
  autoHeight: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    992: {
      items: 3,
      dots: true
    }
  }
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10d2VsdmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vdXRpbHMvZGF0YS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0VHdlbHZlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9kdWN0Iiwid2lzaGxpc3QiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwidXNlU3RhdGUiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwidXNlRWZmZWN0IiwibWluIiwibWF4IiwidmFyaWFudHMiLCJtYXAiLCJpdGVtIiwicHJpY2UiLCJsZW5ndGgiLCJzYWxlX3ByaWNlIiwib25DYXJ0Q2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb0NhcnQiLCJvbldpc2hsaXN0Q2xpY2siLCJpc0luV2lzaGxpc3QiLCJhZGRUb1dpc2hsaXN0IiwicHVzaCIsIm9uQ29tcGFyZUNsaWNrIiwiaXNJbkNvbXBhcmUiLCJjb21wYXJlbGlzdCIsImFkZFRvQ29tcGFyZSIsIm9uUXVpY2tWaWV3Iiwic2hvd1F1aWNrVmlldyIsInNsdWciLCJuZXciLCJ0b3AiLCJzdG9jayIsInByb2Nlc3MiLCJzbV9waWN0dXJlcyIsInVybCIsImNhdGVnb3J5IiwiaW5kZXgiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsInRvRml4ZWQiLCJ3aWR0aCIsInJhdGluZ3MiLCJyZXZpZXciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGF0YSIsImNvbm5lY3QiLCJ3aXNobGlzdEFjdGlvbiIsImNhcnRBY3Rpb24iLCJjb21wYXJlQWN0aW9uIiwiZGVtb0FjdGlvbiIsImZhZGVJbiIsImtleWZyYW1lcyIsImZhZGVJblJpZ2h0U2hvcnRlciIsImZhZGVJblJpZ2h0IiwiZmFkZUluTGVmdFNob3J0ZXIiLCJmYWRlSW5MZWZ0IiwiZmFkZUluVXBTaG9ydGVyIiwiZmFkZUluVXAiLCJmYWRlSW5Eb3duU2hvcnRlciIsImJsdXJJbiIsImdyYXlPdXQiLCJkb3RQdWxzZSIsIm1hc2tVcCIsIm1hc2tSaWdodCIsIm1hc2tEb3duIiwibWFza0xlZnQiLCJzbGlkZUluVXAiLCJzbGlkZUluRG93biIsInNsaWRlSW5MZWZ0Iiwic2xpZGVJblJpZ2h0IiwiZmxpcEluWCIsImZsaXBJblkiLCJmbGlwT3V0WSIsImJyaWdodEluIiwiem9vbUluU2hvcnRlciIsImJvdW5jZUluVXAiLCJzbGlkZVpvb21JbiIsInNob3BEYXRhIiwic2l6ZSIsImNvbG9yX25hbWUiLCJicmFuZCIsImNvdW50IiwiaG9tZURhdGEiLCJicmFuZHMiLCJtYWluU2xpZGVyMSIsIm5hdiIsImRvdHMiLCJpdGVtcyIsIm1hcmdpbiIsImxvb3AiLCJyZXNwb25zaXZlIiwibWFpblNsaWRlcjIiLCJtYWluU2xpZGVyMyIsIm1haW5TbGlkZXI0IiwibWFpblNsaWRlcjUiLCJtYWluU2xpZGVyNiIsIm1haW5TbGlkZXI3IiwibWFpblNsaWRlcjgiLCJtYWluU2xpZGVyOSIsIm1haW5TbGlkZXIxMCIsIm1haW5TbGlkZXIxMSIsIm1haW5TbGlkZXIxMiIsImF1dG9wbGF5IiwiZmVhdHVyZVNsaWRlcjEiLCJmZWF0dXJlU2xpZGVyMiIsImZlYXR1cmVTbGlkZXIzIiwiZmVhdHVyZVNsaWRlcjQiLCJpbnRyb1NsaWRlciIsImRlYWxTbGlkZXIiLCJicmFuZFNsaWRlciIsInByb2R1Y3RTbGlkZXIiLCJhdXRvSGVpZ2h0IiwiYmxvZ1NsaWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxhQUFULENBQXlCQyxLQUF6QixFQUFpQztBQUM3QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxX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QyxRQUFNLEVBQUUsRUFKYztBQUt0QkMsTUFBSSxFQUFFLEtBTGdCO0FBTXRCc0IsWUFBVSxFQUFFLElBTlU7QUFPdEJULFVBQVEsRUFBRSxLQVBZO0FBUXRCWixZQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0NILFdBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLFdBQUssRUFBRTtBQUROLEtBSkc7QUFPUixTQUFLO0FBQ0RBLFdBQUssRUFBRSxDQUROO0FBRURELFVBQUksRUFBRTtBQUZMO0FBUEc7QUFSVSxDQUFuQixDIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfcHJvZHVjdHNfcHJvZHVjdC10d2VsdmVfanN4LXV0aWxzX2RhdGFfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjb21wYXJlQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jb21wYXJlJztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9kZW1vJztcclxuXHJcbmltcG9ydCB7IGlzSW5XaXNobGlzdCwgaXNJbkNvbXBhcmUgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RUd2VsdmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCB3aXNobGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gbWluUHJpY2U7XHJcbiAgICAgICAgbGV0IG1heCA9IG1heFByaWNlO1xyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBpdGVtLnByaWNlICkgbWluID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1pblByaWNlKCBtaW4gKTtcclxuICAgICAgICBzZXRNYXhQcmljZSggbWF4ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXJ0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoIHByb2R1Y3QgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Db21wYXJlQ2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luQ29tcGFyZSggcHJvcHMuY29tcGFyZWxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9Db21wYXJlKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUXVpY2tWaWV3ICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuc2hvd1F1aWNrVmlldyggcHJvZHVjdC5zbHVnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC0xMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtY2lyY2xlIGxhYmVsLW5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtY2lyY2xlIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC10b3BcIj5Ub3A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1vdXRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNtX3BpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibGFjayBhbmQgd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5zbHVnICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogaXRlbS5zbHVnIH0gfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3MtdGV4dFwiPiggeyBwcm9kdWN0LnJldmlldyB9IFJldmlld3MgKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfT48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnQgYnRuLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWxlY3Qgb3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0XCIgb25DbGljaz17IG9uQ2FydENsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdFR3ZWx2ZSApOyIsImltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJblJpZ2h0U2hvcnRlciA9IGtleWZyYW1lc2BcclxuZnJvbSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTBweCwwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbn1cclxuXHJcbnRvIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogbm9uZVxyXG59YDtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5SaWdodCA9IGtleWZyYW1lc2BcclxuMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKVxyXG59XHJcblxyXG50byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxufWA7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluTGVmdFNob3J0ZXIgPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LDApO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkxlZnQgPSBrZXlmcmFtZXNgXHJcbjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKVxyXG59XHJcblxyXG50byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxufWA7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluVXBTaG9ydGVyID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDUwcHgpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59XHJcbnRvIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIHRyYW5zZm9ybTpub25lXHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluVXAgPSBrZXlmcmFtZXNgXHJcbjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCggMCwgMTAwJSwgMCApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoIDAsIDEwMCAlLCAwIClcclxufVxyXG5cclxudG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIDAgKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIDAgKVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkRvd25TaG9ydGVyID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MHB4KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxufVxyXG5cclxudG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogbm9uZVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGJsdXJJbiA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lIFxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXlPdXQgPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDE1JSB7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogLjA7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZG90UHVsc2UgPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSguMilcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgbWFza1VwID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTAwJSlcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgbWFza1JpZ2h0ID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLDApXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc2tEb3duID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTEwMCUpXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc2tMZWZ0ID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsMClcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJblVwID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkRvd24gPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkxlZnQgPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUluUmlnaHQgPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZsaXBJblggPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZmxpcEluWSA9IGtleWZyYW1lc2B7XHJcbiAgMCUge1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZsaXBPdXRZID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KVxyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgYnJpZ2h0SW4gPSBrZXlmcmFtZXNgIHtcclxuICAgIDAlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwJSlcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSlcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCB6b29tSW5TaG9ydGVyID0ga2V5ZnJhbWVzYHtcclxuICAgIDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpO1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOClcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBib3VuY2VJblVwID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01cHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlWm9vbUluID0ga2V5ZnJhbWVzYHtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3BEYXRhID0ge1xyXG4gICAgXCJzaXplc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaXplOiAnSGlnaGJhY2snLFxyXG4gICAgICAgICAgICBzbHVnOiAnWFMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNpemU6ICdMb3VuZ2UnLFxyXG4gICAgICAgICAgICBzbHVnOiAnUydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2l6ZTogJ01pZGJhY2snLFxyXG4gICAgICAgICAgICBzbHVnOiAnTSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2l6ZTogJ1NvZmEnLFxyXG4gICAgICAgICAgICBzbHVnOiAnTCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2l6ZTogJ1Zpc2l0b3InLFxyXG4gICAgICAgICAgICBzbHVnOiAnWEwnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICBcImNvbG9yc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyNGRkI5NTEnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnQnJvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzM1MjY5MicsXHJcbiAgICAgICAgICAgIGNvbG9yX25hbWU6ICdCbHVlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyM5RTAwRkYnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnUHVycGxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyNFODAwREUnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnQmxhY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAyQTQ0MycsXHJcbiAgICAgICAgICAgIGNvbG9yX25hbWU6ICdHcmVlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICcjODgwQjBCJyxcclxuICAgICAgICAgICAgY29sb3JfbmFtZTogJ1JlZCdcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBcImJyYW5kc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJCYWZjb1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcIm5leHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJDb21mb3J0XCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwicml2ZXItaXNsYW5kXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmQ6IFwiSHVtYW5zY2FsZVwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImdlb3hcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJMaW5lYXJcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJuZXgtYmFsYW5jZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICBcImNhdGVnb3JpZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJFeGVjdXRpdmUgQ2hhaXJzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZnVybml0dXJlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRXJnb25vbWljIENoYWlyc1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImNvZmZlZS1hbmQtdGFibGVzXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ29uZmVyZW5jZSBDaGFpcnNcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJsaWdodGluZ1wiLFxyXG4gICAgICAgICAgICBjb3VudDogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlZpc2l0b3IgQ2hhaXJzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZGVjb3JhdGlvblwiLFxyXG4gICAgICAgICAgICBjb3VudDogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlN0b29sc1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImVsZWN0cm9uaWNzXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTXVsdGktRnVuY3Rpb25hbCBDaGFpcnNcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJiZWRzXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAyXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcblxyXG4gICAgXCJwcmljZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWluOiAnMCcsXHJcbiAgICAgICAgICAgIG1heDogJzI1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1VuZGVyIERoczI1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaW46ICcyNScsXHJcbiAgICAgICAgICAgIG1heDogJzUwJyxcclxuICAgICAgICAgICAgbmFtZTogJ0RoczI1IHRvIERoczUwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaW46ICc1MCcsXHJcbiAgICAgICAgICAgIG1heDogJzEwMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEaHM1MCB0byBEaHMxMDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbjogJzEwMCcsXHJcbiAgICAgICAgICAgIG1heDogJzIwMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdEaHMxMDAgdG8gRGhzMjAwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaW46ICcyMDAnLFxyXG4gICAgICAgICAgICBtYXg6ICc5OTk5JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RoczIwMCAmIEFib3ZlJ1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBob21lRGF0YSA9IHtcclxuICAgIGJyYW5kczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvc3dhcm92c2tpLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvZWFnbGVzdGFyLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMSxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMva3BtLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvYWxmdXR0YWltLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMSxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvZWFnbGVzdGFyLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogNDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvc3dhcm92c2tpLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvZWFnbGVzdGFyLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDYzLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9rcG0ucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogODAsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDcyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImJyYW5kXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJpbWFnZXMvYnJhbmRzL2FsZnV0dGFpbS5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDI1XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjEgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjMgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI0ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNSA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNiA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNyA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgbmF2OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjggPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBpdGVtczogMixcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI5ID0ge1xyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxMCA9IHtcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgNzcyOiB7XHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxMSA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDYsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjEyID0ge1xyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVTbGlkZXIxID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlU2xpZGVyMiA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEzNjA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlU2xpZGVyMyA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIGl0ZW1zOiA2LFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzYwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTUwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVTbGlkZXI0ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRyb1NsaWRlciA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGxvb3A6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxTbGlkZXIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyYW5kU2xpZGVyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDkwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTM2MDoge1xyXG4gICAgICAgICAgICBpdGVtczogN1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTbGlkZXIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBibG9nU2xpZGVyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9