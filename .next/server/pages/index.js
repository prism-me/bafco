(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/features/count-down.jsx":
/*!********************************************!*\
  !*** ./components/features/count-down.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rendererOne": function() { return /* binding */ rendererOne; },
/* harmony export */   "rendererTwo": function() { return /* binding */ rendererTwo; },
/* harmony export */   "rendererThree": function() { return /* binding */ rendererThree; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\count-down.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
// countdown renderer for comming soon
const rendererOne = ({
  days,
  hours,
  minutes,
  seconds
}) => __jsx("span", {
  className: "count-row countdown-show4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 13
  }
}, days), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, "Days")), __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, hours > 9 ? hours : '0' + hours), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, "Hours")), __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}, minutes > 9 ? minutes : '0' + minutes), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Minutes")), __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, seconds > 9 ? seconds : '0' + seconds), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, "Seconds"))); // countdown renderer type 2

const rendererTwo = ({
  days,
  hours,
  minutes,
  seconds
}) => __jsx("span", {
  className: "countdown-row countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, days, " days, ", hours > 9 ? hours : '0' + hours, " : ", minutes > 9 ? minutes : '0' + minutes, " : ", seconds > 9 ? seconds : '0' + seconds); // countdown renderer type 3

const rendererThree = ({
  days,
  hours,
  minutes,
  seconds
}) => __jsx("span", {
  className: "countdown-row countdown-show3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 13
  }
}, hours > 9 ? hours : '0' + hours), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, "hours")), __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, minutes > 9 ? minutes : '0' + minutes), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, "mins")), __jsx("span", {
  className: "countdown-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "countdown-amount",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}, seconds > 9 ? seconds : '0' + seconds), __jsx("span", {
  className: "countdown-period",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }
}, "secs")));

/***/ }),

/***/ "./components/features/modals/newsletter-modal.jsx":
/*!*********************************************************!*\
  !*** ./components/features/modals/newsletter-modal.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\modals\\newsletter-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const customStyles = {
  overlay: {
    backgroundColor: 'rgba(51,51,51,0.6)',
    zIndex: '9001'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement('body');

function NewsletterModal() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: doNotShow,
    1: setDoNotShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let timer;
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get(`hideNewsletter-${"1"}`) || (timer = setTimeout(() => {
      setOpen(true);
    }, 5000));
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  function closeModal(e) {
    document.getElementById("newsletter-popup-form").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      setOpen(false);
      doNotShow && js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set(`hideNewsletter-${"1"}`, "true", {
        expires: 7
      });
    }, 350);
  }

  function handleChange(e) {
    setDoNotShow(e.target.checked);
  }

  return __jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: open,
    onRequestClose: closeModal,
    style: customStyles,
    shouldReturnFocusAfterClose: false,
    contentLabel: "Newsletter Modal",
    className: "container newsletter-popup-container h-auto",
    overlayClassName: "d-flex align-items-center justify-content-center",
    id: "newsletter-popup-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row justify-content-center position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters bg-white newsletter-popup-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-xl-3-5col col-lg-7 banner-content-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner-content text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "images/popup/newsletter/logo.png",
    alt: "logo",
    className: "logo",
    width: "60",
    height: "15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }), __jsx("h2", {
    className: "banner-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, "get ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 70
    }
  }, "25", __jsx("span", {
    style: {
      fontWeight: '400'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 78
    }
  }, "%")), " off"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, "Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products."), __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "input-group input-group-round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "email",
    className: "form-control form-control-white",
    placeholder: "Your Email Address",
    "aria-label": "Email Adress",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "input-group-append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 45
    }
  }, __jsx("button", {
    className: "btn",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 87
    }
  }, "go"))))), __jsx("div", {
    className: "custom-control custom-checkbox pl-4 ml-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "register-policy",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "register-policy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, "Do not show this popup again")))), __jsx("div", {
    className: "col-xl-2-5col col-lg-5 d-none d-lg-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "newsletter",
    src: "images/popup/newsletter/img-1.jpg",
    threshold: 0,
    width: 396,
    height: 420,
    effect: "blur",
    className: "newsletter-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  })))), __jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 108
    }
  }, "\xD7")))));
}

/* harmony default export */ __webpack_exports__["default"] = (NewsletterModal);

/***/ }),

/***/ "./components/features/posts/post-four.jsx":
/*!*************************************************!*\
  !*** ./components/features/posts/post-four.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\posts\\post-four.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function PostFour(props) {
  const {
    post
  } = props;
  let date = new Date(post.date);
  let options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  };
  return __jsx("article", {
    className: "entry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("figure", {
    className: "entry-media",
    style: {
      paddingTop: `${post.image[0].height / post.image[0].width * 100}%`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/blog/single/default/${post.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "Post",
    src: "http://localhost:4000" + post.image[0].url,
    threshold: 500,
    effect: "blur",
    height: "auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "entry-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "entry-meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, date.toLocaleDateString('en-US', options)), __jsx("span", {
    className: "meta-separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "|"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, post.comments, " Comments")), __jsx("h2", {
    className: "entry-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/blog/single/default/${post.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, post.title)), __jsx("div", {
    className: "entry-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/blog/single/default/${post.slug}`,
    className: "read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Read More"))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostFour);

/***/ }),

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

/***/ "./components/partials/home/blog-collection.jsx":
/*!******************************************************!*\
  !*** ./components/partials/home/blog-collection.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_features_posts_post_four__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/posts/post-four */ "./components/features/posts/post-four.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\home\\blog-collection.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function BlogCollection(props) {
  const {
    loading,
    posts = []
  } = props;
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
  }, "From Our Blog"), loading || posts.length == 0 ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
    adClass: "owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.blogSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, [0, 1, 2, 3, 4].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
    adClass: "owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.blogSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, posts.map((item, index) => __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_1___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_5__.fadeIn,
    delay: 100,
    duration: 1000,
    triggerOnce: true,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }, __jsx(_components_features_posts_post_four__WEBPACK_IMPORTED_MODULE_4__.default, {
    post: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "text-center mb-7 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
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

/* harmony default export */ __webpack_exports__["default"] = (BlogCollection);

/***/ }),

/***/ "./components/partials/home/special-collection.jsx":
/*!*********************************************************!*\
  !*** ./components/partials/home/special-collection.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/products/product-twelve */ "./components/features/products/product-twelve.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\home\\special-collection.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function SpecialCollection(props) {
  const {
    products = [],
    loading
  } = props;
  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
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
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills nav-border-anim nav-big justify-content-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Featured")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "On Sale")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Top Rated")))), __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.productSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, [1, 2, 3, 4, 5, 6].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.productSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.attrFilter)(products, 'featured').map((item, index) => __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_3__.default, {
    product: item,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.productSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, [1, 2, 3, 4, 5, 6].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.productSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.attrFilter)(products, 'sale').map((item, index) => __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_3__.default, {
    product: item,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.productSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, [1, 2, 3, 4, 5, 6].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    adClass: "owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__.productSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.attrFilter)(products, 'rated').map((item, index) => __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_3__.default, {
    product: item,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (SpecialCollection);

/***/ }),

/***/ "./components/partials/home/top-collection.jsx":
/*!*****************************************************!*\
  !*** ./components/partials/home/top-collection.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/products/product-twelve */ "./components/features/products/product-twelve.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\home\\top-collection.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function TopCollection(props) {
  const {
    products = [],
    loading
  } = props;
  const visible = 4;
  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading heading-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Top Selling Products"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills nav-border-anim justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "All")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Furniture")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Decoration")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "Lighting")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 45
    }
  }))) : products.slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 45
    }
  })))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }))) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['furniture']).slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  })))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  }))) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['decoration']).slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  })))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 45
    }
  }))) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['lighting']).slice(0, visible).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 45
    }
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopCollection);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_partials_home_special_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/home/special-collection */ "./components/partials/home/special-collection.jsx");
/* harmony import */ var _components_partials_home_top_collection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/home/top-collection */ "./components/partials/home/top-collection.jsx");
/* harmony import */ var _components_partials_home_blog_collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/partials/home/blog-collection */ "./components/partials/home/blog-collection.jsx");
/* harmony import */ var _components_features_modals_newsletter_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/features/modals/newsletter-modal */ "./components/features/modals/newsletter-modal.jsx");
/* harmony import */ var _components_features_count_down__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/features/count-down */ "./components/features/count-down.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\index.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
















function Home() {
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_13__.GET_HOME_DATA);
  const products = data && data.homeData.products;
  const topProducts = (0,_utils__WEBPACK_IMPORTED_MODULE_14__.attrFilter)(data && data.homeData.products, 'top');
  const posts = data && data.homeData.posts;

  function openVideoModal(e) {
    e.preventDefault();
    props.showVideo();
  }

  if (error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }
    });
  }

  return __jsx("div", {
    className: "main home-page skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "intro-slider-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "intro-slide slide1",
    style: {
      backgroundColor: '#EDF2F0',
      backgroundImage: 'url(images/home/sliders/home-background-banner.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container intro-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInUpShorter,
    delay: "100%",
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h3", {
    className: "intro-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Work Better. Live Healthier."), __jsx("h1", {
    className: "intro-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "Site Stand ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 72
    }
  }), "Desks"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-dark btn-outline-darker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  }, "Design My Desk"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }))))))), __jsx("div", {
    className: "icon-boxes-container icon-boxes-separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInRightShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon-box icon-box-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "icon-box-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 41
    }
  }, "Give Us A Call"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 41
    }
  }, "+971 800 (22326)"))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInRightShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon-box icon-box-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-whatsapp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "icon-box-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 41
    }
  }, "Whatsapp"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, "+971 800 (22326)"))))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInRightShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon-box icon-box-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "icon-box-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-map-marker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "icon-box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "icon-box-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "Locations"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }, "Visit a showroom near you.")))))))), __jsx("div", {
    className: "mb-3 mb-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "banner-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-sm-6 col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 25
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInLeftShorter,
    delay: 150,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-large banner-overlay banner-overlay-light banner-lg banner-1 lazy-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 37
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/workstation-collection.png",
    threshold: 200,
    width: "100%",
    height: "auto",
    effect: "blur",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 41
    }
  }, "Clearance"), __jsx("h3", {
    className: "banner-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }, "Workstation ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 82
    }
  }), " Collection"), __jsx("div", {
    className: "banner-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 41
    }
  }, "from Dhs.200"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-outline-gray banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, "Discover Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 114
    }
  })))))), __jsx("div", {
    className: "col-sm-6 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 150,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-lg banner-2 lazy-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 37
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/chair-collections.png",
    threshold: 200,
    height: "auto",
    width: "100%",
    effect: "blur",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 41
    }
  }, "Freedom"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 41
    }
  }, "Chair Collections "), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-outline-white banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 41
    }
  }, "Discover Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 115
    }
  })))))), __jsx("div", {
    className: "col-sm-12 col-md-12 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 25
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInRightShorter,
    delay: 150,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-6 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "banner banner-3 banner-overlay lazy-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 45
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-3.jpg",
    threshold: 200,
    height: "auto",
    width: "100%",
    effect: "blur",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 45
    }
  }, __jsx("h4", {
    className: "banner-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 49
    }
  }, "Midas"), __jsx("h3", {
    className: "banner-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 49
    }
  }, "Desk Collections"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-outline-gray banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 49
    }
  }, "Discover Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 122
    }
  }))))), __jsx("div", {
    className: "col-lg-12 col-md-6 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "banner banner-4 banner-overlay banner-overlay-light lazy-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 45
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-4.jpg",
    threshold: 200,
    width: "100%",
    height: "auto",
    effect: "blur",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 45
    }
  }, __jsx("h4", {
    className: "banner-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 49
    }
  }, "Enzo Plus"), __jsx("h3", {
    className: "banner-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 49
    }
  }, "Sofa Collections"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-outline-gray banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 49
    }
  }, "Discover Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 122
    }
  }))))))))))), __jsx("div", {
    className: "our-projects text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading heading-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 21
    }
  }, "Our Projects"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 21
    }
  }, "Furniture Overview")), __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInUpShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "projects-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images/home/unsplash_hE0nmTffKtM.png",
    alt: "slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  })))), __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 13
    }
  }, __jsx(_components_partials_home_top_collection__WEBPACK_IMPORTED_MODULE_8__.default, {
    products: topProducts,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "text-center mb-7 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-outline-darker btn-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 81
    }
  }, "View more"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 103
    }
  })))), __jsx("div", {
    className: "deal-container pt-5 pb-3 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 17
    }
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_6__.default, {
    adClass: "owl-simple owl-light owl-nav-inside",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_15__.dealSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 37
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 41
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 49
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 49
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 53
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 53
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 53
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 49
    }
  }, __jsx((react_countdown__WEBPACK_IMPORTED_MODULE_4___default()), {
    date: `2022-02-01T01:02:03`,
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_11__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 53
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 53
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 74
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 37
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 49
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/deal/dealoftheday.png",
    threshold: "300",
    effect: "blur",
    width: "100%",
    height: 460,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 41
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: "300",
    effect: "blur",
    className: "h-100",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 41
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 41
    }
  }, "Feigelali ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 91
    }
  }), " Best Sofa"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 41
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 129
    }
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 37
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 41
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 49
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 49
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 53
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 53
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 53
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 49
    }
  }, __jsx((react_countdown__WEBPACK_IMPORTED_MODULE_4___default()), {
    date: `2022-02-01T01:02:03`,
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_11__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 53
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 53
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 74
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 37
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 49
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/deal/dealoftheday.png",
    threshold: "300",
    effect: "blur",
    width: "100%",
    height: 460,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 41
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: "300",
    effect: "blur",
    className: "h-100",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 41
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 41
    }
  }, "Feigelali ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 91
    }
  }), "Best Sofa"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 41
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 129
    }
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 37
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 41
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 49
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 49
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 53
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 53
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 53
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 49
    }
  }, __jsx((react_countdown__WEBPACK_IMPORTED_MODULE_4___default()), {
    date: `2022-02-01T01:02:03`,
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_11__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 53
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 53
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 74
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 37
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 49
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/deal/dealoftheday.png",
    threshold: "300",
    effect: "blur",
    width: "100%",
    height: 460,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 41
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: "300",
    effect: "blur",
    className: "h-100",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 41
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 41
    }
  }, "Feigelali ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 91
    }
  }), "Best Sofa"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 41
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 129
    }
  }))))))))), __jsx("div", {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "video-banner video-banner-bg bg-image text-center",
    style: {
      backgroundImage: 'url(images/home/unsplash_aWf7mjwwJJo.png)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 17
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInUpShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    style: {
      backgroundImage: 'url(images/home/Component-26.png)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 21
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h3", {
    className: "video-banner-title h1 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 29
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 33
    }
  }, "Visit Our Showroom")), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    className: "btn-video btn-iframe",
    onClick: openVideoModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 141
    }
  })))))), __jsx("div", {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 13
    }
  }), __jsx(_components_partials_home_blog_collection__WEBPACK_IMPORTED_MODULE_9__.default, {
    posts: posts,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 13
    }
  }), __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-newsletter bg-image",
    style: {
      backgroundImage: 'url(images/backgrounds/Rectangle-9.png)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 29
    }
  }, "Keep in Touch"), __jsx("p", {
    className: "title-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 29
    }
  }, "Join Our Newsletter")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 29
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    "aria-describedby": "newsletter-btn",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "input-group-append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    id: "newsletter-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 49
    }
  }, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 49
    }
  })))))))))), __jsx(_components_features_modals_newsletter_modal__WEBPACK_IMPORTED_MODULE_10__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_12__.default)({
  ssr: true
})(Home));

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
    size: 'Extra Small',
    slug: 'XS'
  }, {
    size: 'Small',
    slug: 'S'
  }, {
    size: 'Medium',
    slug: 'M'
  }, {
    size: 'Large',
    slug: 'L'
  }, {
    size: 'Extra Large',
    slug: 'XL'
  }],
  "colors": [{
    color: '#cc9966',
    color_name: 'Brown'
  }, {
    color: '#3399cc',
    color_name: 'Blue'
  }, {
    color: '#9966cc',
    color_name: 'Purple'
  }, {
    color: '#333333',
    color_name: 'Black'
  }, {
    color: '#669933',
    color_name: 'Green'
  }, {
    color: '#cc3333',
    color_name: 'Red'
  }, {
    color: '#999999',
    color_name: 'Grey'
  }],
  "brands": [{
    brand: "Next",
    slug: "next"
  }, {
    brand: "River Island",
    slug: "river-island"
  }, {
    brand: "Geox",
    slug: "geox"
  }, {
    brand: "New Balance",
    slug: "nex-balance"
  }, {
    brand: "UGG",
    slug: "ugg"
  }, {
    brand: "F&F",
    slug: "f-and-f"
  }, {
    brand: "Nike",
    slug: "nike"
  }],
  "categories": [{
    name: "Furniture",
    slug: "furniture",
    count: 8
  }, {
    name: "Coffee & Tables",
    slug: "coffee-and-tables",
    count: 1
  }, {
    name: "Lighting",
    slug: "lighting",
    count: 3
  }, {
    name: "Decoration",
    slug: "decoration",
    count: 5
  }, {
    name: "Electronics",
    slug: "electronics",
    count: 1
  }, {
    name: "Beds",
    slug: "beds",
    count: 2
  }, {
    name: "Armchairs & Chaises",
    slug: "armchairs-and-chaises",
    count: 3
  }, {
    name: "Sofas & Sleeper Sofas",
    slug: "sofas-and-sleeper-sofas",
    count: 1
  }],
  "prices": [{
    min: '0',
    max: '25',
    name: 'Under $25'
  }, {
    min: '25',
    max: '50',
    name: '$25 to $50'
  }, {
    min: '50',
    max: '100',
    name: '$50 to $100'
  }, {
    min: '100',
    max: '200',
    name: '$100 to $200'
  }, {
    min: '200',
    max: '9999',
    name: '$200 & Above'
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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ "react-awesome-reveal":
/*!***************************************!*\
  !*** external "react-awesome-reveal" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-reveal");;

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-countdown");;

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx","components_features_owl-carousel_jsx-server_apollo_js-server_queries_js-store_cart_js-store_c-c5cbd2"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvY291bnQtZG93bi5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9uZXdzbGV0dGVyLW1vZGFsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcG9zdHMvcG9zdC1mb3VyLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10d2VsdmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2Jsb2ctY29sbGVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvc3BlY2lhbC1jb2xsZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS90b3AtY29sbGVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi91dGlscy9kYXRhLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtbW9kYWxcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LW93bC1jYXJvdXNlbDJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10YWJzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsicmVuZGVyZXJPbmUiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInJlbmRlcmVyVHdvIiwicmVuZGVyZXJUaHJlZSIsImN1c3RvbVN0eWxlcyIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJNb2RhbCIsIk5ld3NsZXR0ZXJNb2RhbCIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJkb05vdFNob3ciLCJzZXREb05vdFNob3ciLCJ1c2VFZmZlY3QiLCJ0aW1lciIsIkNvb2tpZSIsInByb2Nlc3MiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xvc2VNb2RhbCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3BhY2l0eSIsImV4cGlyZXMiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZm9udFdlaWdodCIsIlBvc3RGb3VyIiwicHJvcHMiLCJwb3N0IiwiZGF0ZSIsIkRhdGUiLCJvcHRpb25zIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidGltZVpvbmUiLCJwYWRkaW5nVG9wIiwiaW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsInNsdWciLCJ1cmwiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb21tZW50cyIsInRpdGxlIiwiUHJvZHVjdFR3ZWx2ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3QiLCJ3aXNobGlzdCIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWluIiwibWF4IiwidmFyaWFudHMiLCJtYXAiLCJpdGVtIiwicHJpY2UiLCJsZW5ndGgiLCJzYWxlX3ByaWNlIiwib25DYXJ0Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvQ2FydCIsIm9uV2lzaGxpc3RDbGljayIsImlzSW5XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJwdXNoIiwib25Db21wYXJlQ2xpY2siLCJpc0luQ29tcGFyZSIsImNvbXBhcmVsaXN0IiwiYWRkVG9Db21wYXJlIiwib25RdWlja1ZpZXciLCJzaG93UXVpY2tWaWV3IiwibmV3IiwidG9wIiwic3RvY2siLCJzbV9waWN0dXJlcyIsImNhdGVnb3J5IiwiaW5kZXgiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsInRvRml4ZWQiLCJyYXRpbmdzIiwicmV2aWV3IiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJCbG9nQ29sbGVjdGlvbiIsImxvYWRpbmciLCJwb3N0cyIsImJsb2dTbGlkZXIiLCJmYWRlSW4iLCJTcGVjaWFsQ29sbGVjdGlvbiIsInByb2R1Y3RzIiwicHJvZHVjdFNsaWRlciIsImF0dHJGaWx0ZXIiLCJUb3BDb2xsZWN0aW9uIiwidmlzaWJsZSIsInNsaWNlIiwiY2F0RmlsdGVyIiwiSG9tZSIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfSE9NRV9EQVRBIiwiaG9tZURhdGEiLCJ0b3BQcm9kdWN0cyIsIm9wZW5WaWRlb01vZGFsIiwic2hvd1ZpZGVvIiwiYmFja2dyb3VuZEltYWdlIiwiZmFkZUluVXBTaG9ydGVyIiwiZmFkZUluUmlnaHRTaG9ydGVyIiwiZmFkZUluTGVmdFNob3J0ZXIiLCJkZWFsU2xpZGVyIiwid2l0aEFwb2xsbyIsInNzciIsImtleWZyYW1lcyIsImZhZGVJblJpZ2h0IiwiZmFkZUluTGVmdCIsImZhZGVJblVwIiwiZmFkZUluRG93blNob3J0ZXIiLCJibHVySW4iLCJncmF5T3V0IiwiZG90UHVsc2UiLCJtYXNrVXAiLCJtYXNrUmlnaHQiLCJtYXNrRG93biIsIm1hc2tMZWZ0Iiwic2xpZGVJblVwIiwic2xpZGVJbkRvd24iLCJzbGlkZUluTGVmdCIsInNsaWRlSW5SaWdodCIsImZsaXBJblgiLCJmbGlwSW5ZIiwiZmxpcE91dFkiLCJicmlnaHRJbiIsInpvb21JblNob3J0ZXIiLCJib3VuY2VJblVwIiwic2xpZGVab29tSW4iLCJzaG9wRGF0YSIsInNpemUiLCJjb2xvcl9uYW1lIiwiYnJhbmQiLCJjb3VudCIsImJyYW5kcyIsIm1haW5TbGlkZXIxIiwibmF2IiwiZG90cyIsIml0ZW1zIiwibWFyZ2luIiwibG9vcCIsInJlc3BvbnNpdmUiLCJtYWluU2xpZGVyMiIsIm1haW5TbGlkZXIzIiwibWFpblNsaWRlcjQiLCJtYWluU2xpZGVyNSIsIm1haW5TbGlkZXI2IiwibWFpblNsaWRlcjciLCJtYWluU2xpZGVyOCIsIm1haW5TbGlkZXI5IiwibWFpblNsaWRlcjEwIiwibWFpblNsaWRlcjExIiwibWFpblNsaWRlcjEyIiwiYXV0b3BsYXkiLCJmZWF0dXJlU2xpZGVyMSIsImZlYXR1cmVTbGlkZXIyIiwiZmVhdHVyZVNsaWRlcjMiLCJmZWF0dXJlU2xpZGVyNCIsImludHJvU2xpZGVyIiwiYnJhbmRTbGlkZXIiLCJhdXRvSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLE1BQU1BLFdBQVcsR0FBRyxDQUFFO0FBQUVDLE1BQUY7QUFBUUMsT0FBUjtBQUFlQyxTQUFmO0FBQXdCQztBQUF4QixDQUFGLEtBQ3ZCO0FBQU0sV0FBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBTSxXQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFNLFdBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFxQ0gsSUFBckMsQ0FESixFQUVJO0FBQU0sV0FBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkosQ0FESixFQUtJO0FBQU0sV0FBUyxFQUFDLG1CQUFo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Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvdW50ZG93biByZW5kZXJlciBmb3IgY29tbWluZyBzb29uXHJcbmV4cG9ydCBjb25zdCByZW5kZXJlck9uZSA9ICggeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9ICkgPT4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtcm93IGNvdW50ZG93bi1zaG93NFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IGRheXMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkRheXM8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IGhvdXJzID4gOSA/IGhvdXJzIDogJzAnICsgaG91cnMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkhvdXJzPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyBtaW51dGVzID4gOSA/IG1pbnV0ZXMgOiAnMCcgKyBtaW51dGVzIH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5NaW51dGVzPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyBzZWNvbmRzID4gOSA/IHNlY29uZHMgOiAnMCcgKyBzZWNvbmRzIH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5TZWNvbmRzPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuKTtcclxuXHJcbi8vIGNvdW50ZG93biByZW5kZXJlciB0eXBlIDJcclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyVHdvID0gKCB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gKSA9PiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tcm93IGNvdW50ZG93bi1hbW91bnRcIj5cclxuICAgICAgICB7IGRheXMgfSBkYXlzLCB7IGhvdXJzID4gOSA/IGhvdXJzIDogJzAnICsgaG91cnMgfSA6IHsgbWludXRlcyA+IDkgPyBtaW51dGVzIDogJzAnICsgbWludXRlcyB9IDogeyBzZWNvbmRzID4gOSA/IHNlY29uZHMgOiAnMCcgKyBzZWNvbmRzIH1cclxuICAgIDwvc3Bhbj5cclxuKTtcclxuXHJcbi8vIGNvdW50ZG93biByZW5kZXJlciB0eXBlIDNcclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyVGhyZWUgPSAoIHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSApID0+IChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1yb3cgY291bnRkb3duLXNob3czXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgaG91cnMgPiA5ID8gaG91cnMgOiAnMCcgKyBob3VycyB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tcGVyaW9kXCI+aG91cnM8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IG1pbnV0ZXMgPiA5ID8gbWludXRlcyA6ICcwJyArIG1pbnV0ZXMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPm1pbnM8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IHNlY29uZHMgPiA5ID8gc2Vjb25kcyA6ICcwJyArIHNlY29uZHMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPnNlY3M8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUxLDUxLDUxLDAuNiknLFxyXG4gICAgICAgIHpJbmRleDogJzkwMDEnXHJcbiAgICB9XHJcbn07XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCAnYm9keScgKTtcclxuXHJcbmZ1bmN0aW9uIE5ld3NsZXR0ZXJNb2RhbCAoKSB7XHJcbiAgICBjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBkb05vdFNob3csIHNldERvTm90U2hvdyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpbWVyO1xyXG4gICAgICAgIENvb2tpZS5nZXQoIGBoaWRlTmV3c2xldHRlci0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99YCApIHx8ICggdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oIHRydWUgKTtcclxuICAgICAgICB9LCA1MDAwICkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KCB0aW1lciApO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCAoIGUgKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIFwibmV3c2xldHRlci1wb3B1cC1mb3JtXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRPcGVuKCBmYWxzZSApO1xyXG4gICAgICAgICAgICBkb05vdFNob3cgJiYgQ29va2llLnNldCggYGhpZGVOZXdzbGV0dGVyLSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT31gLCBcInRydWVcIiwgeyBleHBpcmVzOiA3IH0gKTtcclxuICAgICAgICB9LCAzNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UgKCBlICkge1xyXG4gICAgICAgIHNldERvTm90U2hvdyggZS50YXJnZXQuY2hlY2tlZCApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIGlzT3Blbj17IG9wZW4gfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICBzdHlsZT17IGN1c3RvbVN0eWxlcyB9XHJcbiAgICAgICAgICAgIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZT17IGZhbHNlIH1cclxuICAgICAgICAgICAgY29udGVudExhYmVsPVwiTmV3c2xldHRlciBNb2RhbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBuZXdzbGV0dGVyLXBvcHVwLWNvbnRhaW5lciBoLWF1dG9cIlxyXG4gICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgaWQ9XCJuZXdzbGV0dGVyLXBvcHVwLWZvcm1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgYmctd2hpdGUgbmV3c2xldHRlci1wb3B1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zLTVjb2wgY29sLWxnLTcgYmFubmVyLWNvbnRlbnQtd3JhcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IHRleHQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wb3B1cC9uZXdzbGV0dGVyL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiMTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+Z2V0IDxzcGFuPjI1PHNwYW4gc3R5bGU9eyB7IGZvbnRXZWlnaHQ6ICc0MDAnIH0gfT4lPC9zcGFuPjwvc3Bhbj4gb2ZmPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3Vic2NyaWJlIHRvIHRoZSBNb2xsYSBlQ29tbWVyY2UgbmV3c2xldHRlciB0byByZWNlaXZlIHRpbWVseSB1cGRhdGVzIGZyb20geW91ciBmYXZvcml0ZSBwcm9kdWN0cy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtd2hpdGVcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiIGFyaWEtbGFiZWw9XCJFbWFpbCBBZHJlc3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPjxzcGFuPmdvPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IHBsLTQgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJyZWdpc3Rlci1wb2xpY3lcIiBvbkNoYW5nZT17IGhhbmRsZUNoYW5nZSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwicmVnaXN0ZXItcG9saWN5XCI+RG8gbm90IHNob3cgdGhpcyBwb3B1cCBhZ2FpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTItNWNvbCBjb2wtbGctNSBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmV3c2xldHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9wb3B1cC9uZXdzbGV0dGVyL2ltZy0xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17IDM5NiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IDQyMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2xvc2UgKEVzYylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWZwLWNsb3NlXCIgb25DbGljaz17IGNsb3NlTW9kYWwgfT48c3Bhbj7Dlzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlck1vZGFsOyIsImltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gUG9zdEZvdXIgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSggcG9zdC5kYXRlICk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCIsIHRpbWVab25lOiBcIlVUQ1wiIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJlbnRyeVwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImVudHJ5LW1lZGlhXCIgc3R5bGU9eyB7IHBhZGRpbmdUb3A6IGAke3Bvc3QuaW1hZ2VbIDAgXS5oZWlnaHQgLyBwb3N0LmltYWdlWyAwIF0ud2lkdGggKiAxMDB9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL2Jsb2cvc2luZ2xlL2RlZmF1bHQvJHtwb3N0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwb3N0LmltYWdlWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj57IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCAnZW4tVVMnLCBvcHRpb25zICkgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWV0YS1zZXBhcmF0b3JcIj58PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPnsgcG9zdC5jb21tZW50cyB9IENvbW1lbnRzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJlbnRyeS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9ibG9nL3NpbmdsZS9kZWZhdWx0LyR7cG9zdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwb3N0LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvYmxvZy9zaW5nbGUvZGVmYXVsdC8ke3Bvc3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwicmVhZC1tb3JlXCI+UmVhZCBNb3JlPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGUgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvdXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjb21wYXJlQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jb21wYXJlJztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9kZW1vJztcclxuXHJcbmltcG9ydCB7IGlzSW5XaXNobGlzdCwgaXNJbkNvbXBhcmUgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RUd2VsdmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCB3aXNobGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gbWluUHJpY2U7XHJcbiAgICAgICAgbGV0IG1heCA9IG1heFByaWNlO1xyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBpdGVtLnByaWNlICkgbWluID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1pblByaWNlKCBtaW4gKTtcclxuICAgICAgICBzZXRNYXhQcmljZSggbWF4ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXJ0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoIHByb2R1Y3QgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Db21wYXJlQ2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luQ29tcGFyZSggcHJvcHMuY29tcGFyZWxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9Db21wYXJlKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUXVpY2tWaWV3ICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuc2hvd1F1aWNrVmlldyggcHJvZHVjdC5zbHVnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC0xMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtY2lyY2xlIGxhYmVsLW5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtY2lyY2xlIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC10b3BcIj5Ub3A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1vdXRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNtX3BpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibGFjayBhbmQgd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5zbHVnICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogaXRlbS5zbHVnIH0gfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3MtdGV4dFwiPiggeyBwcm9kdWN0LnJldmlldyB9IFJldmlld3MgKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfT48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnQgYnRuLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWxlY3Qgb3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0XCIgb25DbGljaz17IG9uQ2FydENsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdFR3ZWx2ZSApOyIsImltcG9ydCBSZXZlYWwgZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuaW1wb3J0IFBvc3RGb3VyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wb3N0cy9wb3N0LWZvdXInO1xyXG5cclxuaW1wb3J0IHsgZmFkZUluLCBibG9nU2xpZGVyIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIEJsb2dDb2xsZWN0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIHBvc3RzID0gW10gfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1wb3N0c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyXCI+RnJvbSBPdXIgQmxvZzwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwb3N0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMtbGctMyBjb2xzLXNtLTIgY29scy0xXCIgb3B0aW9ucz17IGJsb2dTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDAsIDEsIDIsIDMsIDQgXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCIga2V5PXsgaW5kZXggfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMtbGctMyBjb2xzLXNtLTIgY29scy0xXCIgb3B0aW9ucz17IGJsb2dTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17IGZhZGVJbiB9IGRlbGF5PXsgMTAwIH0gZHVyYXRpb249eyAxMDAwIH0gdHJpZ2dlck9uY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEZvdXIgcG9zdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTcgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrZXIgYnRuLW1vcmVcIj48c3Bhbj5WaWV3IG1vcmUgYXJ0aWNsZXM8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NvbGxlY3Rpb247IiwiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJQYW5lbCwgVGFiTGlzdCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgUHJvZHVjdFR3ZWx2ZSBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10d2VsdmUnO1xyXG5cclxuaW1wb3J0IHsgYXR0ckZpbHRlciB9IGZyb20gJ34vdXRpbHMnO1xyXG5pbXBvcnQgeyBwcm9kdWN0U2xpZGVyIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIFNwZWNpYWxDb2xsZWN0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzID0gW10sIGxvYWRpbmcgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYnMgZGVmYXVsdEluZGV4PXsgMCB9IHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LWJvcmRlci1hbmltIG5hdi1iaWcganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZlYXR1cmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+T24gU2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlRvcCBSYXRlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgY2Fyb3VzZWwtd2l0aC1zaGFkb3cgY29scy14eGwtNiBjb2xzLXhsLTUgY29scy1sZy00IGNvbHMtbWQtMyBjb2xzLXhzLTJcIiBvcHRpb25zPXsgcHJvZHVjdFNsaWRlciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIiBrZXk9eyBpbmRleCB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXh4bC02IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMlwiIG9wdGlvbnM9eyBwcm9kdWN0U2xpZGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyRmlsdGVyKCBwcm9kdWN0cywgJ2ZlYXR1cmVkJyApLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3ZWx2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgY2Fyb3VzZWwtd2l0aC1zaGFkb3cgY29scy14eGwtNiBjb2xzLXhsLTUgY29scy1sZy00IGNvbHMtbWQtMyBjb2xzLXhzLTJcIiBvcHRpb25zPXsgcHJvZHVjdFNsaWRlciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIiBrZXk9eyBpbmRleCB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXh4bC02IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMlwiIG9wdGlvbnM9eyBwcm9kdWN0U2xpZGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyRmlsdGVyKCBwcm9kdWN0cywgJ3NhbGUnICkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXh4bC02IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMlwiIG9wdGlvbnM9eyBwcm9kdWN0U2xpZGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDIsIDMsIDQsIDUsIDYgXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiIGtleT17IGluZGV4IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMteHhsLTYgY29scy14bC01IGNvbHMtbGctNCBjb2xzLW1kLTMgY29scy14cy0yXCIgb3B0aW9ucz17IHByb2R1Y3RTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJGaWx0ZXIoIHByb2R1Y3RzLCAncmF0ZWQnICkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsQ29sbGVjdGlvbjtcclxuIiwiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJQYW5lbCwgVGFiTGlzdCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IFByb2R1Y3RUd2VsdmUgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QtdHdlbHZlJztcclxuXHJcbmltcG9ydCB7IGNhdEZpbHRlciB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gVG9wQ29sbGVjdGlvbihwcm9wcykge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyA9IFtdLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHZpc2libGUgPSA0O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYnMgZGVmYXVsdEluZGV4PXswfSBzZWxlY3RlZFRhYkNsYXNzTmFtZT1cInNob3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZyBoZWFkaW5nLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VG9wIFNlbGxpbmcgUHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LWJvcmRlci1hbmltIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZ1cm5pdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RGVjb3JhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TGlnaHRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLnNsaWNlKDAsIHZpc2libGUpLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0RmlsdGVyKHByb2R1Y3RzLCBbJ2Z1cm5pdHVyZSddKS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0RmlsdGVyKHByb2R1Y3RzLCBbJ2RlY29yYXRpb24nXSkuc2xpY2UoMCwgdmlzaWJsZSkubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3ZWx2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobG9hZGluZyB8fCBwcm9kdWN0cy5sZW5ndGggPT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0uc2xpY2UoMCwgdmlzaWJsZSkubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlcihwcm9kdWN0cywgWydsaWdodGluZyddKS5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQ29sbGVjdGlvbjtcclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCBSZXZlYWwgZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL293bC1jYXJvdXNlbCc7XHJcbmltcG9ydCBTcGVjaWFsQ29sbGVjdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS9zcGVjaWFsLWNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgVG9wQ29sbGVjdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS90b3AtY29sbGVjdGlvbic7XHJcbmltcG9ydCBCbG9nQ29sbGVjdGlvbiBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS9ibG9nLWNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgTmV3c2xldHRlck1vZGFsIGZyb20gXCJ+L2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL25ld3NsZXR0ZXItbW9kYWxcIjtcclxuaW1wb3J0IHsgcmVuZGVyZXJUaHJlZSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvZmVhdHVyZXMvY291bnQtZG93blwiO1xyXG5cclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX0hPTUVfREFUQSB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5pbXBvcnQgeyBhdHRyRmlsdGVyIH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBob21lRGF0YSwgaW50cm9TbGlkZXIsIGJyYW5kU2xpZGVyLCBkZWFsU2xpZGVyLCBmYWRlSW5VcFNob3J0ZXIsIGZhZGVJbkxlZnRTaG9ydGVyLCBmYWRlSW5SaWdodFNob3J0ZXIsIGZhZGVJbiB9IGZyb20gJ34vdXRpbHMvZGF0YSc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoR0VUX0hPTUVfREFUQSk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEgJiYgZGF0YS5ob21lRGF0YS5wcm9kdWN0cztcclxuICAgIGNvbnN0IHRvcFByb2R1Y3RzID0gYXR0ckZpbHRlcihkYXRhICYmIGRhdGEuaG9tZURhdGEucHJvZHVjdHMsICd0b3AnKTtcclxuICAgIGNvbnN0IHBvc3RzID0gZGF0YSAmJiBkYXRhLmhvbWVEYXRhLnBvc3RzO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5WaWRlb01vZGFsKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuc2hvd1ZpZGVvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGhvbWUtcGFnZSBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1zbGlkZSBzbGlkZTFcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRURGMkYwJywgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL3NsaWRlcnMvaG9tZS1iYWNrZ3JvdW5kLWJhbm5lci5qcGcpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnRyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5VcFNob3J0ZXJ9IGRlbGF5PVwiMTAwJVwiIGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImludHJvLXN1YnRpdGxlXCI+V29yayBCZXR0ZXIuIExpdmUgSGVhbHRoaWVyLjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImludHJvLXRpdGxlXCI+U2l0ZSBTdGFuZCA8YnIgLz5EZXNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJyIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+PHN1cD4kPC9zdXA+NDksOTk8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tb3V0bGluZS1kYXJrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVzaWduIE15IERlc2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJpbWFnZXMvaG9tZS9zbGlkZXJzL3NsaWRlLTEtMy5wbmdcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZVwiIGFsdD1cInNsaWRlXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgb3dsLWxpZ2h0IG93bC1uYXYtaW5zaWRlXCIgb3B0aW9ucz17aW50cm9TbGlkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGUgc2xpZGUxXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0VERjJGMCcsIGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaG9tZS9zbGlkZXJzL3NsaWRlLTEtMS5wbmcpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaW50cm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblVwU2hvcnRlcn0gZGVsYXk9XCIxMDAlXCIgZHVyYXRpb249ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnRyby1zdWJ0aXRsZVwiPkRlYWxzIGFuZCBQcm9tb3Rpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImludHJvLXRpdGxlXCI+V29vZGVuIDxiciAvPlNpZGVib2FyZCBUYWJsZSA8YnIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj48c3VwPiQ8L3N1cD40OSw5OTwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLW91dGxpbmUtZGFya2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIE5vdzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaG9tZS9zbGlkZXJzL3NsaWRlLTEtMy5wbmdcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZVwiIGFsdD1cInNsaWRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1zbGlkZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaG9tZS9zbGlkZXJzL3NsaWRlLTIuanBnKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGludHJvLWNvbnRlbnQgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblVwU2hvcnRlcn0gZGVsYXk9XCIxMDAlXCIgZHVyYXRpb249ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnRyby1zdWJ0aXRsZVwiPkJlZHJvb20gRnVybml0dXJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImludHJvLXRpdGxlXCI+RmluZCBDb21mb3J0IDxiciAvPlRoYXQgU3VpdHMgWW91LjwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tb3V0bGluZS1kYXJrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3AgTm93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlIHNsaWRlM1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNFREYyRjAnLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2hvbWUvc2xpZGVycy9zbGlkZS0zLTEucG5nKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGludHJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5VcFNob3J0ZXJ9IGRlbGF5PVwiMTAwJVwiIGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tc3VidGl0bGVcIj5CYXNrZXRzICYgU3RvcmFnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbnRyby10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF1bmRhcnkgQmFza2V0PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwIGNsYXNzTmFtZT1cInRleHQtZ3JleSBmb250LXdlaWdodC1saWdodFwiPmZyb208L3N1cD48c3VwPiQ8L3N1cD45LDk5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tb3V0bGluZS1kYXJrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3AgTm93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9XCIxMDAlXCIgZHVyYXRpb249ezUwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cImJyYW5kcy1ib3JkZXIgb3dsLXNpbXBsZSBicmFuZC1jYXJvdXNlbCBjb2xzLXhsLTcgY29scy1sZy01IGNvbHMtbWQtNCBjb2xzLXNtLTMgY29scy0yXCIgb3B0aW9ucz17YnJhbmRTbGlkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZURhdGEuYnJhbmRzLm1hcCgoYnJhbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyYW5kIG1yLTBcIiBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXticmFuZC5pbWFnZX0gYWx0PVwiYnJhbmRcIiB3aWR0aD17YnJhbmQud2lkdGh9IGhlaWdodD17YnJhbmQuaGVpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgPC9SZXZlYWw+ICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveGVzLWNvbnRhaW5lciBpY29uLWJveGVzLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluUmlnaHRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveCBpY29uLWJveC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGhvbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaWNvbi1ib3gtdGl0bGVcIj5HaXZlIFVzIEEgQ2FsbDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Kzk3MSA4MDAgKDIyMzI2KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluUmlnaHRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveCBpY29uLWJveC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24td2hhdHNhcHBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImljb24tYm94LXRpdGxlXCI+V2hhdHNhcHA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPis5NzEgODAwICgyMjMyNik8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblJpZ2h0U2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggaWNvbi1ib3gtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW1hcC1tYXJrZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImljb24tYm94LXRpdGxlXCI+TG9jYXRpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WaXNpdCBhIHNob3dyb29tIG5lYXIgeW91LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbkxlZnRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveCBpY29uLWJveC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbGlmZS1yaW5nXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpY29uLWJveC10aXRsZVwiPldlIFN1cHBvcnQ8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjI0LzcgYW1hemluZyBzZXJ2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIG1iLWxnLTVcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5MZWZ0U2hvcnRlcn0gZGVsYXk9ezE1MH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci1sYXJnZSBiYW5uZXItb3ZlcmxheSBiYW5uZXItb3ZlcmxheS1saWdodCBiYW5uZXItbGcgYmFubmVyLTEgbGF6eS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL3dvcmtzdGF0aW9uLWNvbGxlY3Rpb24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZVwiPkNsZWFyYW5jZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+V29ya3N0YXRpb24gPGJyIC8+IENvbGxlY3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGV4dFwiPmZyb20gRGhzLjIwMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWdyYXkgYmFubmVyLWxpbmtcIj5EaXNjb3ZlciBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT17MTUwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXkgYmFubmVyLWxnIGJhbm5lci0yIGxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2hvbWUvYmFubmVycy9jaGFpci1jb2xsZWN0aW9ucy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXN1YnRpdGxlIHRleHQtZ3JleVwiPkZyZWVkb208L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+Q2hhaXIgQ29sbGVjdGlvbnMgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10ZXh0IHRleHQtd2hpdGVcIj5mcm9tICQzOS45OTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13aGl0ZSBiYW5uZXItbGlua1wiPkRpc2NvdmVyIE5vdzxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblJpZ2h0U2hvcnRlcn0gZGVsYXk9ezE1MH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItMyBiYW5uZXItb3ZlcmxheSBsYXp5LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2hvbWUvYmFubmVycy9iYW5uZXItMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiYW5uZXItc3VidGl0bGVcIj5NaWRhczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGVcIj5EZXNrIENvbGxlY3Rpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWdyYXkgYmFubmVyLWxpbmtcIj5EaXNjb3ZlciBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItNCBiYW5uZXItb3ZlcmxheSBiYW5uZXItb3ZlcmxheS1saWdodCBsYXp5LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2hvbWUvYmFubmVycy9iYW5uZXItNC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiYW5uZXItc3VidGl0bGVcIj5FbnpvIFBsdXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+U29mYSBDb2xsZWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10ZXh0XCI+dXAgdG8gMzAlIG9mZjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWdyYXkgYmFubmVyLWxpbmtcIj5EaXNjb3ZlciBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj48L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91ci1wcm9qZWN0cyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nIGhlYWRpbmctY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5PdXIgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5GdXJuaXR1cmUgT3ZlcnZpZXc8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2hvbWUvdW5zcGxhc2hfaEUwbm1UZmZLdE0ucG5nXCIgYWx0PVwic2xpZGVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpY29uLWluZGV4MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24taW5kZXgtZGV0YWlsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2hvbWUvcHJvamVjdHMvY3Vib3JkLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TG9yZW0gSXBzdW08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Mb3JlbSBJcHN1bSBkb2xvciBzaXQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvdWJsZS1kb29yIHdhZHJvYmUgd2l0aCBidWlsdC1pbiBoYW5nZXIuIFNob3dpbmcgYW4gb3JkZXJseSBzcGFjZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImljb24taW5kZXgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1pbmRleC1kZXRhaWwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaG9tZS9wcm9qZWN0cy9kcm93ZXItaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Mb3JlbSBJcHN1bTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkxvcmVtIElwc3VtIGRvbG9yIHNpdDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG91YmxlLWRvb3Igd2Fkcm9iZSB3aXRoIGJ1aWx0LWluIGhhbmdlci4gU2hvd2luZyBhbiBvcmRlcmx5IHNwYWNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaWNvbi1pbmRleDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWluZGV4LWRldGFpbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9ob21lL3Byb2plY3RzL2Ryb3dlci1pbWFnZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxvcmVtIElwc3VtPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+TG9yZW0gSXBzdW0gZG9sb3Igc2l0PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb3VibGUtZG9vciB3YWRyb2JlIHdpdGggYnVpbHQtaW4gaGFuZ2VyLiBTaG93aW5nIGFuIG9yZGVybHkgc3BhY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpY29uLWluZGV4NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaWNvbi1pbmRleDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImljb24taW5kZXg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpY29uLWluZGV4N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPjwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgIDxUb3BDb2xsZWN0aW9uIHByb2R1Y3RzPXt0b3BQcm9kdWN0c30gbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNyBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtlciBidG4tbW9yZVwiPjxzcGFuPlZpZXcgbW9yZTwvc3Bhbj48aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JldmVhbD5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICA8U3BlY2lhbENvbGxlY3Rpb24gcHJvZHVjdHM9e3Byb2R1Y3RzfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgICA8L1JldmVhbD4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb250YWluZXIgcHQtNSBwYi0zIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIG93bC1saWdodCBvd2wtbmF2LWluc2lkZVwiIG9wdGlvbnM9e2RlYWxTbGlkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbkxlZnRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkxpbWl0ZWQgUXVhbnRpdGllczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZWFsIG9mIHRoZSBEYXk8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkNoZWNrIE91dDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPkRocy4gNTAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPldhcyBEaHMuNzAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY291bnRkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRkb3duIGRhdGU9e2AyMDIyLTAyLTAxVDAxOjAyOjAzYH0gcmVuZGVyZXI9e3JlbmRlcmVyVGhyZWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIE5vdzwvc3Bhbj48aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtaW1hZ2UgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXkgYmctd2hpdGVcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZWFsLWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9kZWFsL2RlYWxvZnRoZWRheS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXkgYmFubmVyLW92ZXJsYXktbGlnaHQgZC1ub25lIGQtbGctYmxvY2sgaC0xMDAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlYWwtYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2Jhbm5lci01LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZSB0ZXh0LXdoaXRlXCI+VGhlIEJlc3QgQ2hvaWNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkZlaWdlbGFsaSA8YnIgLz4gQmVzdCBTb2ZhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10ZXh0IHRleHQtcHJpbWFyeVwiPiQ0OS45OTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29sc1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodCBiYW5uZXItbGlua1wiPlNob3AgTm93PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbkxlZnRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkxpbWl0ZWQgUXVhbnRpdGllczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZWFsIG9mIHRoZSBEYXk8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkNoZWNrIE91dDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPkRocy4gNTAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPldhcyBEaHMuNzAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY291bnRkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRkb3duIGRhdGU9e2AyMDIyLTAyLTAxVDAxOjAyOjAzYH0gcmVuZGVyZXI9e3JlbmRlcmVyVGhyZWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIE5vdzwvc3Bhbj48aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtaW1hZ2UgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXkgYmctd2hpdGVcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZWFsLWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9kZWFsL2RlYWxvZnRoZWRheS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXkgYmFubmVyLW92ZXJsYXktbGlnaHQgZC1ub25lIGQtbGctYmxvY2sgaC0xMDAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlYWwtYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2Jhbm5lci01LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZSB0ZXh0LXdoaXRlXCI+VGhlIEJlc3QgQ2hvaWNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkZlaWdlbGFsaSA8YnIgLz5CZXN0IFNvZmE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRleHQgdGV4dC1wcmltYXJ5XCI+JDQ5Ljk5PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJhbm5lci1saW5rXCI+U2hvcCBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluTGVmdFNob3J0ZXJ9IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGltaXRlZCBRdWFudGl0aWVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRlYWwgb2YgdGhlIERheTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+Q2hlY2sgT3V0PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+RGhzLiA1MDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+V2FzIERocy43MDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb3VudGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17YDIwMjItMDItMDFUMDE6MDI6MDNgfSByZW5kZXJlcj17cmVuZGVyZXJUaHJlZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3AgTm93PC9zcGFuPjxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1pbWFnZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheSBiZy13aGl0ZVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlYWwtYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2RlYWwvZGVhbG9mdGhlZGF5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheSBiYW5uZXItb3ZlcmxheS1saWdodCBkLW5vbmUgZC1sZy1ibG9jayBoLTEwMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGVhbC1iYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2Jhbm5lcnMvYmFubmVyLTUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXN1YnRpdGxlIHRleHQtd2hpdGVcIj5UaGUgQmVzdCBDaG9pY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+RmVpZ2VsYWxpIDxiciAvPkJlc3QgU29mYTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGV4dCB0ZXh0LXByaW1hcnlcIj4kNDkuOTk8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYmFubmVyLWxpbmtcIj5TaG9wIE5vdzxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1iYW5uZXIgdmlkZW8tYmFubmVyLWJnIGJnLWltYWdlIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL3Vuc3BsYXNoX2FXZjdtand3SkpvLnBuZyknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2Ugc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL0NvbXBvbmVudC0yNi5wbmcpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ2aWRlby1iYW5uZXItdGl0bGUgaDEgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5OZXcgQ29sbGVjdGlvbjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5WaXNpdCBPdXIgU2hvd3Jvb208L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj12QlBnbUFTUTFBMFwiIGNsYXNzTmFtZT1cImJ0bi12aWRlbyBidG4taWZyYW1lXCIgb25DbGljaz17b3BlblZpZGVvTW9kYWx9PjxpIGNsYXNzTmFtZT1cImljb24tcGxheVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8QmxvZ0NvbGxlY3Rpb24gcG9zdHM9e3Bvc3RzfSBsb2FkaW5nPXtsb2FkaW5nfT48L0Jsb2dDb2xsZWN0aW9uPlxyXG4gICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLW5ld3NsZXR0ZXIgYmctaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvYmFja2dyb3VuZHMvUmVjdGFuZ2xlLTkucG5nKScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPktlZXAgaW4gVG91Y2g8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLWRlc2NcIj5Kb2luIE91ciBOZXdzbGV0dGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMCBvZmZzZXQtc20tMSBjb2wtbWQtOCBvZmZzZXQtbWQtMiBjb2wtbGctNiBvZmZzZXQtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWwgQWRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibmV3c2xldHRlci1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld3NsZXR0ZXItYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1YnNjcmliZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgPE5ld3NsZXR0ZXJNb2RhbCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnIH0pKEhvbWUpOyIsImltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJblJpZ2h0U2hvcnRlciA9IGtleWZyYW1lc2BcclxuZnJvbSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTBweCwwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbn1cclxuXHJcbnRvIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogbm9uZVxyXG59YDtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5SaWdodCA9IGtleWZyYW1lc2BcclxuMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKVxyXG59XHJcblxyXG50byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxufWA7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluTGVmdFNob3J0ZXIgPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LDApO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkxlZnQgPSBrZXlmcmFtZXNgXHJcbjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKVxyXG59XHJcblxyXG50byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxufWA7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluVXBTaG9ydGVyID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDUwcHgpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59XHJcbnRvIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIHRyYW5zZm9ybTpub25lXHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluVXAgPSBrZXlmcmFtZXNgXHJcbjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCggMCwgMTAwJSwgMCApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoIDAsIDEwMCAlLCAwIClcclxufVxyXG5cclxudG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooIDAgKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooIDAgKVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkRvd25TaG9ydGVyID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MHB4KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxufVxyXG5cclxudG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogbm9uZVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGJsdXJJbiA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lIFxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXlPdXQgPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDE1JSB7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogLjA7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZG90UHVsc2UgPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSguMilcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgbWFza1VwID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMTAwJSlcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgbWFza1JpZ2h0ID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLDApXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc2tEb3duID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTEwMCUpXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc2tMZWZ0ID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsMClcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJblVwID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkRvd24gPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkxlZnQgPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUluUmlnaHQgPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZsaXBJblggPSBrZXlmcmFtZXNge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZmxpcEluWSA9IGtleWZyYW1lc2B7XHJcbiAgMCUge1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XHJcbiAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZsaXBPdXRZID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KVxyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgYnJpZ2h0SW4gPSBrZXlmcmFtZXNgIHtcclxuICAgIDAlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwJSlcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSlcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCB6b29tSW5TaG9ydGVyID0ga2V5ZnJhbWVzYHtcclxuICAgIDAle1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpO1xyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOClcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBib3VuY2VJblVwID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01cHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlWm9vbUluID0ga2V5ZnJhbWVzYHtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3BEYXRhID0ge1xyXG4gICAgXCJzaXplc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaXplOiAnRXh0cmEgU21hbGwnLFxyXG4gICAgICAgICAgICBzbHVnOiAnWFMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNpemU6ICdTbWFsbCcsXHJcbiAgICAgICAgICAgIHNsdWc6ICdTJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaXplOiAnTWVkaXVtJyxcclxuICAgICAgICAgICAgc2x1ZzogJ00nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNpemU6ICdMYXJnZScsXHJcbiAgICAgICAgICAgIHNsdWc6ICdMJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaXplOiAnRXh0cmEgTGFyZ2UnLFxyXG4gICAgICAgICAgICBzbHVnOiAnWEwnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICBcImNvbG9yc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyNjYzk5NjYnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnQnJvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzOTljYycsXHJcbiAgICAgICAgICAgIGNvbG9yX25hbWU6ICdCbHVlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyM5OTY2Y2MnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnUHVycGxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMzMzMzMzMnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnQmxhY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzY2OTkzMycsXHJcbiAgICAgICAgICAgIGNvbG9yX25hbWU6ICdHcmVlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICcjY2MzMzMzJyxcclxuICAgICAgICAgICAgY29sb3JfbmFtZTogJ1JlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICcjOTk5OTk5JyxcclxuICAgICAgICAgICAgY29sb3JfbmFtZTogJ0dyZXknXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICBcImJyYW5kc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJOZXh0XCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwibmV4dFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIlJpdmVyIElzbGFuZFwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcInJpdmVyLWlzbGFuZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIkdlb3hcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJnZW94XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmQ6IFwiTmV3IEJhbGFuY2VcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJuZXgtYmFsYW5jZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIlVHR1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcInVnZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIkYmRlwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImYtYW5kLWZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJOaWtlXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwibmlrZVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICBcImNhdGVnb3JpZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJGdXJuaXR1cmVcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJmdXJuaXR1cmVcIixcclxuICAgICAgICAgICAgY291bnQ6IDhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDb2ZmZWUgJiBUYWJsZXNcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJjb2ZmZWUtYW5kLXRhYmxlc1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxpZ2h0aW5nXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwibGlnaHRpbmdcIixcclxuICAgICAgICAgICAgY291bnQ6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJEZWNvcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZGVjb3JhdGlvblwiLFxyXG4gICAgICAgICAgICBjb3VudDogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkVsZWN0cm9uaWNzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZWxlY3Ryb25pY3NcIixcclxuICAgICAgICAgICAgY291bnQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCZWRzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiYmVkc1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFybWNoYWlycyAmIENoYWlzZXNcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJhcm1jaGFpcnMtYW5kLWNoYWlzZXNcIixcclxuICAgICAgICAgICAgY291bnQ6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJTb2ZhcyAmIFNsZWVwZXIgU29mYXNcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJzb2Zhcy1hbmQtc2xlZXBlci1zb2Zhc1wiLFxyXG4gICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgXCJwcmljZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWluOiAnMCcsXHJcbiAgICAgICAgICAgIG1heDogJzI1JyxcclxuICAgICAgICAgICAgbmFtZTogJ1VuZGVyICQyNSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWluOiAnMjUnLFxyXG4gICAgICAgICAgICBtYXg6ICc1MCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICckMjUgdG8gJDUwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtaW46ICc1MCcsXHJcbiAgICAgICAgICAgIG1heDogJzEwMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICckNTAgdG8gJDEwMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWluOiAnMTAwJyxcclxuICAgICAgICAgICAgbWF4OiAnMjAwJyxcclxuICAgICAgICAgICAgbmFtZTogJyQxMDAgdG8gJDIwMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWluOiAnMjAwJyxcclxuICAgICAgICAgICAgbWF4OiAnOTk5OScsXHJcbiAgICAgICAgICAgIG5hbWU6ICckMjAwICYgQWJvdmUnXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVEYXRhID0ge1xyXG4gICAgYnJhbmRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9zd2Fyb3Zza2kucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9lYWdsZXN0YXIucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAxLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9rcG0ucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9hbGZ1dHRhaW0ucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAxLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9lYWdsZXN0YXIucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiA0OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9zd2Fyb3Zza2kucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAyM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy9lYWdsZXN0YXIucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogNjMsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDMyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImJyYW5kXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJpbWFnZXMvYnJhbmRzL2twbS5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA4MCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvYWxmdXR0YWltLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMjVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMSA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMiA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMyA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0ODA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjQgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI1ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI2ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI3ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyOCA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjkgPSB7XHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjEwID0ge1xyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICA3NzI6IHtcclxuICAgICAgICAgICAgbmF2OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjExID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBtYXJnaW46IDMwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDkwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICBpdGVtczogNixcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyMTIgPSB7XHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0ODA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZVNsaWRlcjEgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDMwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDkwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVTbGlkZXIyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDkwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTM2MDoge1xyXG4gICAgICAgICAgICBpdGVtczogN1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVTbGlkZXIzID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgaXRlbXM6IDYsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzNjA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxNTAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmVhdHVyZVNsaWRlcjQgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGludHJvU2xpZGVyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbG9vcDogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbFNsaWRlciA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnJhbmRTbGlkZXIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0MjA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMzYwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA3XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFNsaWRlciA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTYwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJsb2dTbGlkZXIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hcG9sbG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50ZG93blwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdGFic1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==