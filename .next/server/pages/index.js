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
    href: "/blog/classic",
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
      columnNumber: 93
    }
  }, "View more articles"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 124
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
  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "heading heading-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Top Selling Products"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills nav-border-anim justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, "All")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, "Furniture")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Decoration")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, "Lighting")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 45
    }
  }))) : products.map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  })))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 45
    }
  }))) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['furniture']).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  })))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 45
    }
  }))) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['decoration']).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 45
    }
  })))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, loading || products.length == 0 ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "skel-pro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 45
    }
  }))) : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.catFilter)(products, ['lighting']).map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, __jsx(_components_features_products_product_twelve__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
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
      lineNumber: 302,
      columnNumber: 13
    }
  }, __jsx(_components_partials_home_top_collection__WEBPACK_IMPORTED_MODULE_8__.default, {
    products: topProducts,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "deal-container pt-5 pb-3 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 33
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 37
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 45
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 45
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 49
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 49
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 49
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 45
    }
  }, __jsx((react_countdown__WEBPACK_IMPORTED_MODULE_4___default()), {
    date: `2022-02-01T01:02:03`,
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_11__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 49
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 49
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 70
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 33
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 45
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
      lineNumber: 345,
      columnNumber: 45
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 37
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
      lineNumber: 364,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 37
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 37
    }
  }, "Indigo ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 84
    }
  }), "Best Linen"), __jsx("div", {
    className: "banner-text text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 37
    }
  }, "$49.99"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 37
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 125
    }
  })))))))), __jsx("div", {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
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
      lineNumber: 388,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  }, __jsx((react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default()), {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_15__.fadeInUpShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 21
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h3", {
    className: "video-banner-title h1 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 29
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 33
    }
  }, "Visit Our Showroom")), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    className: "btn-video btn-iframe",
    onClick: openVideoModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 141
    }
  })))))), __jsx("div", {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 13
    }
  }), __jsx(_components_partials_home_blog_collection__WEBPACK_IMPORTED_MODULE_9__.default, {
    posts: posts,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
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
      lineNumber: 405,
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
      lineNumber: 406,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 29
    }
  }, "Keep in Touch"), __jsx("p", {
    className: "title-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 29
    }
  }, "Join Our Newsletter")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 29
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
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
      lineNumber: 421,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "input-group-append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    id: "newsletter-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 49
    }
  }, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 49
    }
  })))))))))), __jsx(_components_features_modals_newsletter_modal__WEBPACK_IMPORTED_MODULE_10__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
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
    "image": "images/brands/1.png",
    "width": 100,
    "height": 23
  }, {
    "name": "brand",
    "image": "images/brands/2.png",
    "width": 101,
    "height": 34
  }, {
    "name": "brand",
    "image": "images/brands/3.png",
    "width": 100,
    "height": 30
  }, {
    "name": "brand",
    "image": "images/brands/4.png",
    "width": 101,
    "height": 39
  }, {
    "name": "brand",
    "image": "images/brands/5.png",
    "width": 100,
    "height": 48
  }, {
    "name": "brand",
    "image": "images/brands/6.png",
    "width": 100,
    "height": 23
  }, {
    "name": "brand",
    "image": "images/brands/7.png",
    "width": 63,
    "height": 32
  }, {
    "name": "brand",
    "image": "images/brands/8.png",
    "width": 80,
    "height": 72
  }, {
    "name": "brand",
    "image": "images/brands/9.png",
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx-components_features_owl-carousel_jsx-server_apollo_js-server_qu-bc3a19"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvY291bnQtZG93bi5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9uZXdzbGV0dGVyLW1vZGFsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcG9zdHMvcG9zdC1mb3VyLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10d2VsdmUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2Jsb2ctY29sbGVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvc3BlY2lhbC1jb2xsZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS90b3AtY29sbGVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi91dGlscy9kYXRhLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtY291bnRkb3duXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtbW9kYWxcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LW93bC1jYXJvdXNlbDJcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10YWJzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsicmVuZGVyZXJPbmUiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInJlbmRlcmVyVHdvIiwicmVuZGVyZXJUaHJlZSIsImN1c3RvbVN0eWxlcyIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJNb2RhbCIsIk5ld3NsZXR0ZXJNb2RhbCIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJkb05vdFNob3ciLCJzZXREb05vdFNob3ciLCJ1c2VFZmZlY3QiLCJ0aW1lciIsIkNvb2tpZSIsInByb2Nlc3MiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xvc2VNb2RhbCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3BhY2l0eSIsImV4cGlyZXMiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZm9udFdlaWdodCIsIlBvc3RGb3VyIiwicHJvcHMiLCJwb3N0IiwiZGF0ZSIsIkRhdGUiLCJvcHRpb25zIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidGltZVpvbmUiLCJwYWRkaW5nVG9wIiwiaW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsInNsdWciLCJ1cmwiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb21tZW50cyIsInRpdGxlIiwiUHJvZHVjdFR3ZWx2ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3QiLCJ3aXNobGlzdCIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWluIiwibWF4IiwidmFyaWFudHMiLCJtYXAiLCJpdGVtIiwicHJpY2UiLCJsZW5ndGgiLCJzYWxlX3ByaWNlIiwib25DYXJ0Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvQ2FydCIsIm9uV2lzaGxpc3RDbGljayIsImlzSW5XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJwdXNoIiwib25Db21wYXJlQ2xpY2siLCJpc0luQ29tcGFyZSIsImNvbXBhcmVsaXN0IiwiYWRkVG9Db21wYXJlIiwib25RdWlja1ZpZXciLCJzaG93UXVpY2tWaWV3IiwibmV3IiwidG9wIiwic3RvY2siLCJzbV9waWN0dXJlcyIsImNhdGVnb3J5IiwiaW5kZXgiLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSIsInRvRml4ZWQiLCJyYXRpbmdzIiwicmV2aWV3IiwiY29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb25uZWN0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiY29tcGFyZUFjdGlvbiIsImRlbW9BY3Rpb24iLCJCbG9nQ29sbGVjdGlvbiIsImxvYWRpbmciLCJwb3N0cyIsImJsb2dTbGlkZXIiLCJmYWRlSW4iLCJTcGVjaWFsQ29sbGVjdGlvbiIsInByb2R1Y3RzIiwicHJvZHVjdFNsaWRlciIsImF0dHJGaWx0ZXIiLCJUb3BDb2xsZWN0aW9uIiwiY2F0RmlsdGVyIiwiSG9tZSIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfSE9NRV9EQVRBIiwiaG9tZURhdGEiLCJ0b3BQcm9kdWN0cyIsIm9wZW5WaWRlb01vZGFsIiwic2hvd1ZpZGVvIiwiYmFja2dyb3VuZEltYWdlIiwiZmFkZUluVXBTaG9ydGVyIiwiZmFkZUluUmlnaHRTaG9ydGVyIiwiZmFkZUluTGVmdFNob3J0ZXIiLCJ3aXRoQXBvbGxvIiwic3NyIiwia2V5ZnJhbWVzIiwiZmFkZUluUmlnaHQiLCJmYWRlSW5MZWZ0IiwiZmFkZUluVXAiLCJmYWRlSW5Eb3duU2hvcnRlciIsImJsdXJJbiIsImdyYXlPdXQiLCJkb3RQdWxzZSIsIm1hc2tVcCIsIm1hc2tSaWdodCIsIm1hc2tEb3duIiwibWFza0xlZnQiLCJzbGlkZUluVXAiLCJzbGlkZUluRG93biIsInNsaWRlSW5MZWZ0Iiwic2xpZGVJblJpZ2h0IiwiZmxpcEluWCIsImZsaXBJblkiLCJmbGlwT3V0WSIsImJyaWdodEluIiwiem9vbUluU2hvcnRlciIsImJvdW5jZUluVXAiLCJzbGlkZVpvb21JbiIsInNob3BEYXRhIiwic2l6ZSIsImNvbG9yX25hbWUiLCJicmFuZCIsImNvdW50IiwiYnJhbmRzIiwibWFpblNsaWRlcjEiLCJuYXYiLCJkb3RzIiwiaXRlbXMiLCJtYXJnaW4iLCJsb29wIiwicmVzcG9uc2l2ZSIsIm1haW5TbGlkZXIyIiwibWFpblNsaWRlcjMiLCJtYWluU2xpZGVyNCIsIm1haW5TbGlkZXI1IiwibWFpblNsaWRlcjYiLCJtYWluU2xpZGVyNyIsIm1haW5TbGlkZXI4IiwibWFpblNsaWRlcjkiLCJtYWluU2xpZGVyMTAiLCJtYWluU2xpZGVyMTEiLCJtYWluU2xpZGVyMTIiLCJhdXRvcGxheSIsImZlYXR1cmVTbGlkZXIxIiwiZmVhdHVyZVNsaWRlcjIiLCJmZWF0dXJlU2xpZGVyMyIsImZlYXR1cmVTbGlkZXI0IiwiaW50cm9TbGlkZXIiLCJicmFuZFNsaWRlciIsImF1dG9IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sTUFBTUEsV0FBVyxHQUFHLENBQUU7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDLFNBQWY7QUFBd0JDO0FBQXhCLENBQUYsS0FDdkI7QUFBTSxXQUFTLEVBQUMsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFNLFdBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQU0sV0FBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXFDSCxJQUFyQyxDQURKLEVBRUk7QUFBTSxXQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSixDQURKLEVBS0k7QUFBTSxXQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LE1BQUksRUFBRSxJQUZnQjtBQUd0QkMsT0FBSyxFQUFFLENBSGU7QUFJdEJDLFFBQU0sRUFBRSxFQUpjO0FBS3RCQyxNQUFJLEVBQUUsS0FMZ0I7QUFNdEJvQixZQUFVLEVBQUUsSUFOVTtBQU90QlAsVUFBUSxFQUFFLEtBUFk7QUFRdEJaLFlBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ0gsV0FBSyxFQUFFO0FBRFIsS0FESztBQUlSLFNBQUs7QUFDREEsV0FBSyxFQUFFO0FBRE4sS0FKRztBQU9SLFNBQUs7QUFDREEsV0FBSyxFQUFFLENBRE47QUFFREQsVUFBSSxFQUFFO0FBRkw7QUFQRztBQVJVLENBQW5CLEM7Ozs7Ozs7Ozs7O0FDdjZCUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvdW50ZG93biByZW5kZXJlciBmb3IgY29tbWluZyBzb29uXHJcbmV4cG9ydCBjb25zdCByZW5kZXJlck9uZSA9ICggeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9ICkgPT4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnQtcm93IGNvdW50ZG93bi1zaG93NFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IGRheXMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkRheXM8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IGhvdXJzID4gOSA/IGhvdXJzIDogJzAnICsgaG91cnMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPkhvdXJzPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyBtaW51dGVzID4gOSA/IG1pbnV0ZXMgOiAnMCcgKyBtaW51dGVzIH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5NaW51dGVzPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tYW1vdW50XCI+eyBzZWNvbmRzID4gOSA/IHNlY29uZHMgOiAnMCcgKyBzZWNvbmRzIH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1wZXJpb2RcIj5TZWNvbmRzPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuKTtcclxuXHJcbi8vIGNvdW50ZG93biByZW5kZXJlciB0eXBlIDJcclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyVHdvID0gKCB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gKSA9PiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tcm93IGNvdW50ZG93bi1hbW91bnRcIj5cclxuICAgICAgICB7IGRheXMgfSBkYXlzLCB7IGhvdXJzID4gOSA/IGhvdXJzIDogJzAnICsgaG91cnMgfSA6IHsgbWludXRlcyA+IDkgPyBtaW51dGVzIDogJzAnICsgbWludXRlcyB9IDogeyBzZWNvbmRzID4gOSA/IHNlY29uZHMgOiAnMCcgKyBzZWNvbmRzIH1cclxuICAgIDwvc3Bhbj5cclxuKTtcclxuXHJcbi8vIGNvdW50ZG93biByZW5kZXJlciB0eXBlIDNcclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyVGhyZWUgPSAoIHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSApID0+IChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1yb3cgY291bnRkb3duLXNob3czXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLWFtb3VudFwiPnsgaG91cnMgPiA5ID8gaG91cnMgOiAnMCcgKyBob3VycyB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd24tcGVyaW9kXCI+aG91cnM8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IG1pbnV0ZXMgPiA5ID8gbWludXRlcyA6ICcwJyArIG1pbnV0ZXMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPm1pbnM8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZG93bi1hbW91bnRcIj57IHNlY29uZHMgPiA5ID8gc2Vjb25kcyA6ICcwJyArIHNlY29uZHMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duLXBlcmlvZFwiPnNlY3M8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUxLDUxLDUxLDAuNiknLFxyXG4gICAgICAgIHpJbmRleDogJzkwMDEnXHJcbiAgICB9XHJcbn07XHJcblxyXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCAnYm9keScgKTtcclxuXHJcbmZ1bmN0aW9uIE5ld3NsZXR0ZXJNb2RhbCAoKSB7XHJcbiAgICBjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBkb05vdFNob3csIHNldERvTm90U2hvdyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpbWVyO1xyXG4gICAgICAgIENvb2tpZS5nZXQoIGBoaWRlTmV3c2xldHRlci0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99YCApIHx8ICggdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oIHRydWUgKTtcclxuICAgICAgICB9LCA1MDAwICkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KCB0aW1lciApO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCAoIGUgKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIFwibmV3c2xldHRlci1wb3B1cC1mb3JtXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRPcGVuKCBmYWxzZSApO1xyXG4gICAgICAgICAgICBkb05vdFNob3cgJiYgQ29va2llLnNldCggYGhpZGVOZXdzbGV0dGVyLSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT31gLCBcInRydWVcIiwgeyBleHBpcmVzOiA3IH0gKTtcclxuICAgICAgICB9LCAzNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UgKCBlICkge1xyXG4gICAgICAgIHNldERvTm90U2hvdyggZS50YXJnZXQuY2hlY2tlZCApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIGlzT3Blbj17IG9wZW4gfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICBzdHlsZT17IGN1c3RvbVN0eWxlcyB9XHJcbiAgICAgICAgICAgIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZT17IGZhbHNlIH1cclxuICAgICAgICAgICAgY29udGVudExhYmVsPVwiTmV3c2xldHRlciBNb2RhbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBuZXdzbGV0dGVyLXBvcHVwLWNvbnRhaW5lciBoLWF1dG9cIlxyXG4gICAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgaWQ9XCJuZXdzbGV0dGVyLXBvcHVwLWZvcm1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgYmctd2hpdGUgbmV3c2xldHRlci1wb3B1cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zLTVjb2wgY29sLWxnLTcgYmFubmVyLWNvbnRlbnQtd3JhcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IHRleHQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wb3B1cC9uZXdzbGV0dGVyL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiMTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+Z2V0IDxzcGFuPjI1PHNwYW4gc3R5bGU9eyB7IGZvbnRXZWlnaHQ6ICc0MDAnIH0gfT4lPC9zcGFuPjwvc3Bhbj4gb2ZmPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3Vic2NyaWJlIHRvIHRoZSBNb2xsYSBlQ29tbWVyY2UgbmV3c2xldHRlciB0byByZWNlaXZlIHRpbWVseSB1cGRhdGVzIGZyb20geW91ciBmYXZvcml0ZSBwcm9kdWN0cy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtd2hpdGVcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiIGFyaWEtbGFiZWw9XCJFbWFpbCBBZHJlc3NcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPjxzcGFuPmdvPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IHBsLTQgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJyZWdpc3Rlci1wb2xpY3lcIiBvbkNoYW5nZT17IGhhbmRsZUNoYW5nZSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwicmVnaXN0ZXItcG9saWN5XCI+RG8gbm90IHNob3cgdGhpcyBwb3B1cCBhZ2FpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTItNWNvbCBjb2wtbGctNSBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmV3c2xldHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9wb3B1cC9uZXdzbGV0dGVyL2ltZy0xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17IDM5NiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IDQyMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2xvc2UgKEVzYylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWZwLWNsb3NlXCIgb25DbGljaz17IGNsb3NlTW9kYWwgfT48c3Bhbj7Dlzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlck1vZGFsOyIsImltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gUG9zdEZvdXIgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSggcG9zdC5kYXRlICk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCIsIHRpbWVab25lOiBcIlVUQ1wiIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJlbnRyeVwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImVudHJ5LW1lZGlhXCIgc3R5bGU9eyB7IHBhZGRpbmdUb3A6IGAke3Bvc3QuaW1hZ2VbIDAgXS5oZWlnaHQgLyBwb3N0LmltYWdlWyAwIF0ud2lkdGggKiAxMDB9JWAgfSB9PlxyXG4gICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL2Jsb2cvc2luZ2xlL2RlZmF1bHQvJHtwb3N0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwb3N0LmltYWdlWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj57IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCAnZW4tVVMnLCBvcHRpb25zICkgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWV0YS1zZXBhcmF0b3JcIj58PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPnsgcG9zdC5jb21tZW50cyB9IENvbW1lbnRzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJlbnRyeS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9ibG9nL3NpbmdsZS9kZWZhdWx0LyR7cG9zdC5zbHVnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwb3N0LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvYmxvZy9zaW5nbGUvZGVmYXVsdC8ke3Bvc3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwicmVhZC1tb3JlXCI+UmVhZCBNb3JlPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGUgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvdXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgd2lzaGxpc3RBY3Rpb24gfSBmcm9tICd+L3N0b3JlL3dpc2hsaXN0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjYXJ0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jYXJ0JztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBjb21wYXJlQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9jb21wYXJlJztcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSAnfi9zdG9yZS9kZW1vJztcclxuXHJcbmltcG9ydCB7IGlzSW5XaXNobGlzdCwgaXNJbkNvbXBhcmUgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RUd2VsdmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCB3aXNobGlzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIG1heFByaWNlLCBzZXRNYXhQcmljZSBdID0gdXNlU3RhdGUoIDAgKTtcclxuICAgIGNvbnN0IFsgbWluUHJpY2UsIHNldE1pblByaWNlIF0gPSB1c2VTdGF0ZSggOTk5OTkgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gbWluUHJpY2U7XHJcbiAgICAgICAgbGV0IG1heCA9IG1heFByaWNlO1xyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBpdGVtLnByaWNlICkgbWluID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE1pblByaWNlKCBtaW4gKTtcclxuICAgICAgICBzZXRNYXhQcmljZSggbWF4ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXJ0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5hZGRUb0NhcnQoIHByb2R1Y3QgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Db21wYXJlQ2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luQ29tcGFyZSggcHJvcHMuY29tcGFyZWxpc3QsIHByb2R1Y3QgKSApIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkVG9Db21wYXJlKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUXVpY2tWaWV3ICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvcHMuc2hvd1F1aWNrVmlldyggcHJvZHVjdC5zbHVnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QgcHJvZHVjdC0xMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ldyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtY2lyY2xlIGxhYmVsLW5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2FsZV9wcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtY2lyY2xlIGxhYmVsLXNhbGVcIj5TYWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50b3AgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC10b3BcIj5Ub3A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5zdG9jayB8fCBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLWNpcmNsZSBsYWJlbC1vdXRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgYC9wcm9kdWN0L2RlZmF1bHQvJHtwcm9kdWN0LnNsdWd9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmxhY2sgYW5kIHdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNtX3BpY3R1cmVzLmxlbmd0aCA+PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMSBdLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsgNTAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibGFjayBhbmQgd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uLXZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luV2lzaGxpc3QoIHdpc2hsaXN0LCBwcm9kdWN0ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0LWljb24gYnRuLXdpc2hsaXN0IGJ0bi1leHBhbmRhYmxlIGFkZGVkLXRvLXdpc2hsaXN0XCI+PHNwYW4+Z28gdG8gd2lzaGxpc3Q8L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4td2lzaGxpc3QgYnRuLWV4cGFuZGFibGVcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+YWRkIHRvIHdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QtaWNvbiBidG4tcXVpY2t2aWV3XCIgdGl0bGU9XCJRdWljayBWaWV3XCIgb25DbGljaz17IG9uUXVpY2tWaWV3IH0+PHNwYW4+cXVpY2sgdmlldzwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgaXRlbS5zbHVnICsgJy0nICsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IHsgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLCBxdWVyeTogeyBjYXRlZ29yeTogaXRlbS5zbHVnIH0gfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZGV4IDwgcHJvZHVjdC5jYXRlZ29yeS5sZW5ndGggLSAxID8gJywgJyA6IFwiXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfT57IHByb2R1Y3QubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LnN0b2NrIHx8IHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MtdmFsXCIgc3R5bGU9eyB7IHdpZHRoOiBwcm9kdWN0LnJhdGluZ3MgKiAyMCArICclJyB9IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZ3MtdGV4dFwiPiggeyBwcm9kdWN0LnJldmlldyB9IFJldmlld3MgKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbmF2IHByb2R1Y3QtbmF2LWRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfT48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayAmJiBwcm9kdWN0LnN0b2NrICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0gY2xhc3NOYW1lPVwiYnRuLXByb2R1Y3QgYnRuLWNhcnQgYnRuLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWxlY3Qgb3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcm9kdWN0IGJ0bi1jYXJ0XCIgb25DbGljaz17IG9uQ2FydENsaWNrIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmFkZCB0byBjYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0LmRhdGEsXHJcbiAgICAgICAgY29tcGFyZWxpc3Q6IHN0YXRlLmNvbXBhcmVsaXN0LmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uLCAuLi5jb21wYXJlQWN0aW9uLCAuLi5kZW1vQWN0aW9uIH0gKSggUHJvZHVjdFR3ZWx2ZSApOyIsImltcG9ydCBSZXZlYWwgZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuaW1wb3J0IFBvc3RGb3VyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9wb3N0cy9wb3N0LWZvdXInO1xyXG5cclxuaW1wb3J0IHsgZmFkZUluLCBibG9nU2xpZGVyIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIEJsb2dDb2xsZWN0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIHBvc3RzID0gW10gfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1wb3N0c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIHRleHQtY2VudGVyXCI+RnJvbSBPdXIgQmxvZzwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwb3N0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMtbGctMyBjb2xzLXNtLTIgY29scy0xXCIgb3B0aW9ucz17IGJsb2dTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDAsIDEsIDIsIDMsIDQgXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCIga2V5PXsgaW5kZXggfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMtbGctMyBjb2xzLXNtLTIgY29scy0xXCIgb3B0aW9ucz17IGJsb2dTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17IGZhZGVJbiB9IGRlbGF5PXsgMTAwIH0gZHVyYXRpb249eyAxMDAwIH0gdHJpZ2dlck9uY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEZvdXIgcG9zdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTcgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvY2xhc3NpY1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrZXIgYnRuLW1vcmVcIj48c3Bhbj5WaWV3IG1vcmUgYXJ0aWNsZXM8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NvbGxlY3Rpb247IiwiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJQYW5lbCwgVGFiTGlzdCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgUHJvZHVjdFR3ZWx2ZSBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC10d2VsdmUnO1xyXG5cclxuaW1wb3J0IHsgYXR0ckZpbHRlciB9IGZyb20gJ34vdXRpbHMnO1xyXG5pbXBvcnQgeyBwcm9kdWN0U2xpZGVyIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIFNwZWNpYWxDb2xsZWN0aW9uICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzID0gW10sIGxvYWRpbmcgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYnMgZGVmYXVsdEluZGV4PXsgMCB9IHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LWJvcmRlci1hbmltIG5hdi1iaWcganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZlYXR1cmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+T24gU2FsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlRvcCBSYXRlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgY2Fyb3VzZWwtd2l0aC1zaGFkb3cgY29scy14eGwtNiBjb2xzLXhsLTUgY29scy1sZy00IGNvbHMtbWQtMyBjb2xzLXhzLTJcIiBvcHRpb25zPXsgcHJvZHVjdFNsaWRlciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIiBrZXk9eyBpbmRleCB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXh4bC02IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMlwiIG9wdGlvbnM9eyBwcm9kdWN0U2xpZGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyRmlsdGVyKCBwcm9kdWN0cywgJ2ZlYXR1cmVkJyApLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3ZWx2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyBpdGVtIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgY2Fyb3VzZWwtd2l0aC1zaGFkb3cgY29scy14eGwtNiBjb2xzLXhsLTUgY29scy1sZy00IGNvbHMtbWQtMyBjb2xzLXhzLTJcIiBvcHRpb25zPXsgcHJvZHVjdFNsaWRlciB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIiBrZXk9eyBpbmRleCB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXh4bC02IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMlwiIG9wdGlvbnM9eyBwcm9kdWN0U2xpZGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyRmlsdGVyKCBwcm9kdWN0cywgJ3NhbGUnICkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBjYXJvdXNlbC13aXRoLXNoYWRvdyBjb2xzLXh4bC02IGNvbHMteGwtNSBjb2xzLWxnLTQgY29scy1tZC0zIGNvbHMteHMtMlwiIG9wdGlvbnM9eyBwcm9kdWN0U2xpZGVyIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDIsIDMsIDQsIDUsIDYgXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiIGtleT17IGluZGV4IH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIGNhcm91c2VsLXdpdGgtc2hhZG93IGNvbHMteHhsLTYgY29scy14bC01IGNvbHMtbGctNCBjb2xzLW1kLTMgY29scy14cy0yXCIgb3B0aW9ucz17IHByb2R1Y3RTbGlkZXIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJGaWx0ZXIoIHByb2R1Y3RzLCAncmF0ZWQnICkubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VHdlbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsQ29sbGVjdGlvbjtcclxuIiwiaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJQYW5lbCwgVGFiTGlzdCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5cclxuaW1wb3J0IFByb2R1Y3RUd2VsdmUgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QtdHdlbHZlJztcclxuXHJcbmltcG9ydCB7IGNhdEZpbHRlciB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gVG9wQ29sbGVjdGlvbiAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyA9IFtdLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJzIGRlZmF1bHRJbmRleD17IDAgfSBzZWxlY3RlZFRhYkNsYXNzTmFtZT1cInNob3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZyBoZWFkaW5nLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VG9wIFNlbGxpbmcgUHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHMgbmF2LWJvcmRlci1hbmltIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZ1cm5pdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RGVjb3JhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TGlnaHRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBsb2FkaW5nIHx8IHByb2R1Y3RzLmxlbmd0aCA9PSAwICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDggXS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctMyBjb2wteGwtNWNvbFwiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctMyBjb2wteGwtNWNvbFwiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd2VsdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGxvYWRpbmcgfHwgcHJvZHVjdHMubGVuZ3RoID09IDAgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCBdLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zIGNvbC14bC01Y29sXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrZWwtcHJvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdEZpbHRlciggcHJvZHVjdHMsIFsgJ2Z1cm5pdHVyZScgXSApLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zIGNvbC14bC01Y29sXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3ZWx2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXsgaXRlbSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwcm9kdWN0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTMgY29sLXhsLTVjb2xcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0RmlsdGVyKCBwcm9kdWN0cywgWyAnZGVjb3JhdGlvbicgXSApLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC1sZy0zIGNvbC14bC01Y29sXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFR3ZWx2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXsgaXRlbSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggbG9hZGluZyB8fCBwcm9kdWN0cy5sZW5ndGggPT0gMCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4IF0ubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTQgY29sLWxnLTMgY29sLXhsLTVjb2xcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tlbC1wcm9cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0RmlsdGVyKCBwcm9kdWN0cywgWyAnbGlnaHRpbmcnIF0gKS5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wtbGctMyBjb2wteGwtNWNvbFwiIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUd2VsdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17IGl0ZW0gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcENvbGxlY3Rpb247XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5pbXBvcnQgUmV2ZWFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJztcclxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IE93bENhcm91c2VsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgU3BlY2lhbENvbGxlY3Rpb24gZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvc3BlY2lhbC1jb2xsZWN0aW9uJztcclxuaW1wb3J0IFRvcENvbGxlY3Rpb24gZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvdG9wLWNvbGxlY3Rpb24nO1xyXG5pbXBvcnQgQmxvZ0NvbGxlY3Rpb24gZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvYmxvZy1jb2xsZWN0aW9uJztcclxuaW1wb3J0IE5ld3NsZXR0ZXJNb2RhbCBmcm9tIFwifi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9uZXdzbGV0dGVyLW1vZGFsXCI7XHJcbmltcG9ydCB7IHJlbmRlcmVyVGhyZWUgfSBmcm9tIFwifi9jb21wb25lbnRzL2ZlYXR1cmVzL2NvdW50LWRvd25cIjtcclxuXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vc2VydmVyL2Fwb2xsbyc7XHJcbmltcG9ydCB7IEdFVF9IT01FX0RBVEEgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuaW1wb3J0IHsgYXR0ckZpbHRlciB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgaG9tZURhdGEsIGludHJvU2xpZGVyLCBicmFuZFNsaWRlciwgZmFkZUluVXBTaG9ydGVyLCBmYWRlSW5MZWZ0U2hvcnRlciwgZmFkZUluUmlnaHRTaG9ydGVyLCBmYWRlSW4gfSBmcm9tICd+L3V0aWxzL2RhdGEnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9IT01FX0RBVEEpO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkYXRhICYmIGRhdGEuaG9tZURhdGEucHJvZHVjdHM7XHJcbiAgICBjb25zdCB0b3BQcm9kdWN0cyA9IGF0dHJGaWx0ZXIoZGF0YSAmJiBkYXRhLmhvbWVEYXRhLnByb2R1Y3RzLCAndG9wJyk7XHJcbiAgICBjb25zdCBwb3N0cyA9IGRhdGEgJiYgZGF0YS5ob21lRGF0YS5wb3N0cztcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuVmlkZW9Nb2RhbChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb3BzLnNob3dWaWRlbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBob21lLXBhZ2Ugc2tlbGV0b24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGUgc2xpZGUxXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0VERjJGMCcsIGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaG9tZS9zbGlkZXJzL2hvbWUtYmFja2dyb3VuZC1iYW5uZXIuanBnKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaW50cm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT1cIjEwMCVcIiBkdXJhdGlvbj17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnRyby1zdWJ0aXRsZVwiPldvcmsgQmV0dGVyLiBMaXZlIEhlYWx0aGllci48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbnRyby10aXRsZVwiPlNpdGUgU3RhbmQgPGJyIC8+RGVza3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxiciAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPjxzdXA+JDwvc3VwPjQ5LDk5PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLW91dGxpbmUtZGFya2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlc2lnbiBNeSBEZXNrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaW1hZ2VzL2hvbWUvc2xpZGVycy9zbGlkZS0xLTMucG5nXCIgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGVcIiBhbHQ9XCJzbGlkZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPE93bENhcm91c2VsIGFkQ2xhc3M9XCJvd2wtc2ltcGxlIG93bC1saWdodCBvd2wtbmF2LWluc2lkZVwiIG9wdGlvbnM9e2ludHJvU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlIHNsaWRlMVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNFREYyRjAnLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2hvbWUvc2xpZGVycy9zbGlkZS0xLTEucG5nKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGludHJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5VcFNob3J0ZXJ9IGRlbGF5PVwiMTAwJVwiIGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tc3VidGl0bGVcIj5EZWFscyBhbmQgUHJvbW90aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbnRyby10aXRsZVwiPldvb2RlbiA8YnIgLz5TaWRlYm9hcmQgVGFibGUgPGJyIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+PHN1cD4kPC9zdXA+NDksOTk8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1vdXRsaW5lLWRhcmtlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvcCBOb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2hvbWUvc2xpZGVycy9zbGlkZS0xLTMucG5nXCIgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGVcIiBhbHQ9XCJzbGlkZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2hvbWUvc2xpZGVycy9zbGlkZS0yLmpwZyknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnRyby1jb250ZW50IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5VcFNob3J0ZXJ9IGRlbGF5PVwiMTAwJVwiIGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tc3VidGl0bGVcIj5CZWRyb29tIEZ1cm5pdHVyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpbnRyby10aXRsZVwiPkZpbmQgQ29tZm9ydCA8YnIgLz5UaGF0IFN1aXRzIFlvdS48L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLW91dGxpbmUtZGFya2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIE5vdzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1zbGlkZSBzbGlkZTNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRURGMkYwJywgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL3NsaWRlcnMvc2xpZGUtMy0xLnBuZyknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnRyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT1cIjEwMCVcIiBkdXJhdGlvbj17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImludHJvLXN1YnRpdGxlXCI+QmFza2V0cyAmIFN0b3JhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW50cm8tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdW5kYXJ5IEJhc2tldDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZXkgZm9udC13ZWlnaHQtbGlnaHRcIj5mcm9tPC9zdXA+PHN1cD4kPC9zdXA+OSw5OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLW91dGxpbmUtZGFya2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIE5vdzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PVwiMTAwJVwiIGR1cmF0aW9uPXs1MDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgPE93bENhcm91c2VsIGFkQ2xhc3M9XCJicmFuZHMtYm9yZGVyIG93bC1zaW1wbGUgYnJhbmQtY2Fyb3VzZWwgY29scy14bC03IGNvbHMtbGctNSBjb2xzLW1kLTQgY29scy1zbS0zIGNvbHMtMlwiIG9wdGlvbnM9e2JyYW5kU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVEYXRhLmJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZCBtci0wXCIga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnJhbmQuaW1hZ2V9IGFsdD1cImJyYW5kXCIgd2lkdGg9e2JyYW5kLndpZHRofSBoZWlnaHQ9e2JyYW5kLmhlaWdodH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvUmV2ZWFsPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hlcy1jb250YWluZXIgaWNvbi1ib3hlcy1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblJpZ2h0U2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggaWNvbi1ib3gtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBob25lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImljb24tYm94LXRpdGxlXCI+R2l2ZSBVcyBBIENhbGw8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPis5NzEgODAwICgyMjMyNik8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblJpZ2h0U2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggaWNvbi1ib3gtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXdoYXRzYXBwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpY29uLWJveC10aXRsZVwiPldoYXRzYXBwPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rOTcxIDgwMCAoMjIzMjYpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5SaWdodFNob3J0ZXJ9IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94IGljb24tYm94LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1tYXAtbWFya2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpY29uLWJveC10aXRsZVwiPkxvY2F0aW9uczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmlzaXQgYSBzaG93cm9vbSBuZWFyIHlvdS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5MZWZ0U2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3ggaWNvbi1ib3gtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJveC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxpZmUtcmluZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaWNvbi1ib3gtdGl0bGVcIj5XZSBTdXBwb3J0PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yNC83IGFtYXppbmcgc2VydmljZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBtYi1sZy01XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluTGVmdFNob3J0ZXJ9IGRlbGF5PXsxNTB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItbGFyZ2UgYmFubmVyLW92ZXJsYXkgYmFubmVyLW92ZXJsYXktbGlnaHQgYmFubmVyLWxnIGJhbm5lci0xIGxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2hvbWUvYmFubmVycy93b3Jrc3RhdGlvbi1jb2xsZWN0aW9uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCBiYW5uZXItY29udGVudC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiYW5uZXItc3VidGl0bGVcIj5DbGVhcmFuY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZVwiPldvcmtzdGF0aW9uIDxiciAvPiBDb2xsZWN0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRleHRcIj5mcm9tIERocy4yMDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1ncmF5IGJhbm5lci1saW5rXCI+RGlzY292ZXIgTm93PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9ezE1MH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci1vdmVybGF5IGJhbm5lci1sZyBiYW5uZXItMiBsYXp5LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2Jhbm5lcnMvY2hhaXItY29sbGVjdGlvbnMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZSB0ZXh0LWdyZXlcIj5GcmVlZG9tPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkNoYWlyIENvbGxlY3Rpb25zIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGV4dCB0ZXh0LXdoaXRlXCI+ZnJvbSAkMzkuOTk8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYmFubmVyLWxpbmtcIj5EaXNjb3ZlciBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5SaWdodFNob3J0ZXJ9IGRlbGF5PXsxNTB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLTMgYmFubmVyLW92ZXJsYXkgbGF6eS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2Jhbm5lcnMvYmFubmVyLTMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXN1YnRpdGxlXCI+TWlkYXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+RGVzayBDb2xsZWN0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1ncmF5IGJhbm5lci1saW5rXCI+RGlzY292ZXIgTm93PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLTQgYmFubmVyLW92ZXJsYXkgYmFubmVyLW92ZXJsYXktbGlnaHQgbGF6eS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2Jhbm5lcnMvYmFubmVyLTQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXN1YnRpdGxlXCI+RW56byBQbHVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZVwiPlNvZmEgQ29sbGVjdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGV4dFwiPnVwIHRvIDMwJSBvZmY8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1ncmF5IGJhbm5lci1saW5rXCI+RGlzY292ZXIgTm93PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgIDxUb3BDb2xsZWN0aW9uIHByb2R1Y3RzPXt0b3BQcm9kdWN0c30gbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgICAgPC9SZXZlYWw+XHJcblxyXG4gICAgICAgICAgICB7LyogPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgPFNwZWNpYWxDb2xsZWN0aW9uIHByb2R1Y3RzPXtwcm9kdWN0c30gbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgICAgPC9SZXZlYWw+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY29udGFpbmVyIHB0LTUgcGItMyBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5MZWZ0U2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGltaXRlZCBRdWFudGl0aWVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVhbCBvZiB0aGUgRGF5PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+Q2hlY2sgT3V0PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+RGhzLiA1MDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj5XYXMgRGhzLjcwMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb3VudGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZG93biBkYXRlPXtgMjAyMi0wMi0wMVQwMTowMjowM2B9IHJlbmRlcmVyPXtyZW5kZXJlclRocmVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvcCBOb3c8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1pbWFnZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheSBiZy13aGl0ZVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZWFsLWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2RlYWwvZGVhbG9mdGhlZGF5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheSBiYW5uZXItb3ZlcmxheS1saWdodCBkLW5vbmUgZC1sZy1ibG9jayBoLTEwMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZWFsLWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2Jhbm5lci01LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiYW5uZXItc3VidGl0bGUgdGV4dC13aGl0ZVwiPlRoZSBCZXN0IENob2ljZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkluZGlnbyA8YnIgLz5CZXN0IExpbmVuPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGV4dCB0ZXh0LXByaW1hcnlcIj4kNDkuOTk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJhbm5lci1saW5rXCI+U2hvcCBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1iYW5uZXIgdmlkZW8tYmFubmVyLWJnIGJnLWltYWdlIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL3Vuc3BsYXNoX2FXZjdtand3SkpvLnBuZyknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmlkZW8tYmFubmVyLXRpdGxlIGgxIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+TmV3IENvbGxlY3Rpb248L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VmlzaXQgT3VyIFNob3dyb29tPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dkJQZ21BU1ExQTBcIiBjbGFzc05hbWU9XCJidG4tdmlkZW8gYnRuLWlmcmFtZVwiIG9uQ2xpY2s9e29wZW5WaWRlb01vZGFsfT48aSBjbGFzc05hbWU9XCJpY29uLXBsYXlcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEJsb2dDb2xsZWN0aW9uIHBvc3RzPXtwb3N0c30gbG9hZGluZz17bG9hZGluZ30+PC9CbG9nQ29sbGVjdGlvbj5cclxuICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1uZXdzbGV0dGVyIGJnLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2JhY2tncm91bmRzL1JlY3RhbmdsZS05LnBuZyknIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5LZWVwIGluIFRvdWNoPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1kZXNjXCI+Sm9pbiBPdXIgTmV3c2xldHRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTAgb2Zmc2V0LXNtLTEgY29sLW1kLTggb2Zmc2V0LW1kLTIgY29sLWxnLTYgb2Zmc2V0LWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVtYWlsIEFkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm5ld3NsZXR0ZXItYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdzbGV0dGVyLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdWJzY3JpYmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgIDxOZXdzbGV0dGVyTW9kYWwgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyB9KShIb21lKTsiLCJpbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5SaWdodFNob3J0ZXIgPSBrZXlmcmFtZXNgXHJcbmZyb20ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwcHgsMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59XHJcblxyXG50byB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IG5vbmVcclxufWA7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluUmlnaHQgPSBrZXlmcmFtZXNgXHJcbjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMClcclxufVxyXG5cclxudG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbkxlZnRTaG9ydGVyID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwwKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmVcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5MZWZ0ID0ga2V5ZnJhbWVzYFxyXG4wJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMClcclxufVxyXG5cclxudG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJblVwU2hvcnRlciA9IGtleWZyYW1lc2BcclxuZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCw1MHB4KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxufVxyXG50byB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICB0cmFuc2Zvcm06bm9uZVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJblVwID0ga2V5ZnJhbWVzYFxyXG4wJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoIDAsIDEwMCUsIDAgKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCAwLCAxMDAgJSwgMCApXHJcbn1cclxuXHJcbnRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAwICk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCAwIClcclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5Eb3duU2hvcnRlciA9IGtleWZyYW1lc2BcclxuZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTBweCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbn1cclxuXHJcbnRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmVcclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBibHVySW4gPSBrZXlmcmFtZXNge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSBcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBncmF5T3V0ID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICAxNSUge1xyXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IC4wO1xyXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGRvdFB1bHNlID0ga2V5ZnJhbWVzYHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoLjIpXHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc2tVcCA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDEwMCUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc2tSaWdodCA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwwKVxyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMClcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBtYXNrRG93biA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0xMDAlKVxyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMClcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBtYXNrTGVmdCA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLDApXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5VcCA9IGtleWZyYW1lc2B7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5Eb3duID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5MZWZ0ID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJblJpZ2h0ID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMClcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBmbGlwSW5YID0ga2V5ZnJhbWVzYHtcclxuICAgIDAlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZylcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGZsaXBJblkgPSBrZXlmcmFtZXNge1xyXG4gIDAlIHtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xyXG4gIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBmbGlwT3V0WSA9IGtleWZyYW1lc2B7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweClcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKVxyXG4gICAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGJyaWdodEluID0ga2V5ZnJhbWVzYCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3Qgem9vbUluU2hvcnRlciA9IGtleWZyYW1lc2B7XHJcbiAgICAwJXtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC44LC44LC44KTtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpXHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgYm91bmNlSW5VcCA9IGtleWZyYW1lc2B7XHJcbiAgICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwMHB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgNzUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVpvb21JbiA9IGtleWZyYW1lc2B7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufWBcclxuXHJcbmV4cG9ydCBjb25zdCBzaG9wRGF0YSA9IHtcclxuICAgIFwic2l6ZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2l6ZTogJ0V4dHJhIFNtYWxsJyxcclxuICAgICAgICAgICAgc2x1ZzogJ1hTJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaXplOiAnU21hbGwnLFxyXG4gICAgICAgICAgICBzbHVnOiAnUydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2l6ZTogJ01lZGl1bScsXHJcbiAgICAgICAgICAgIHNsdWc6ICdNJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaXplOiAnTGFyZ2UnLFxyXG4gICAgICAgICAgICBzbHVnOiAnTCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2l6ZTogJ0V4dHJhIExhcmdlJyxcclxuICAgICAgICAgICAgc2x1ZzogJ1hMJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgXCJjb2xvcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICcjY2M5OTY2JyxcclxuICAgICAgICAgICAgY29sb3JfbmFtZTogJ0Jyb3duJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMzMzk5Y2MnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnQmx1ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICcjOTk2NmNjJyxcclxuICAgICAgICAgICAgY29sb3JfbmFtZTogJ1B1cnBsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICcjMzMzMzMzJyxcclxuICAgICAgICAgICAgY29sb3JfbmFtZTogJ0JsYWNrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJyM2Njk5MzMnLFxyXG4gICAgICAgICAgICBjb2xvcl9uYW1lOiAnR3JlZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2NjMzMzMycsXHJcbiAgICAgICAgICAgIGNvbG9yX25hbWU6ICdSZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzk5OTk5OScsXHJcbiAgICAgICAgICAgIGNvbG9yX25hbWU6ICdHcmV5J1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgXCJicmFuZHNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmQ6IFwiTmV4dFwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcIm5leHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJSaXZlciBJc2xhbmRcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJyaXZlci1pc2xhbmRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJHZW94XCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZ2VveFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyYW5kOiBcIk5ldyBCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwibmV4LWJhbGFuY2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJVR0dcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJ1Z2dcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmFuZDogXCJGJkZcIixcclxuICAgICAgICAgICAgc2x1ZzogXCJmLWFuZC1mXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJhbmQ6IFwiTmlrZVwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcIm5pa2VcIlxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRnVybml0dXJlXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiZnVybml0dXJlXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiA4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ29mZmVlICYgVGFibGVzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiY29mZmVlLWFuZC10YWJsZXNcIixcclxuICAgICAgICAgICAgY291bnQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMaWdodGluZ1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImxpZ2h0aW5nXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRGVjb3JhdGlvblwiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImRlY29yYXRpb25cIixcclxuICAgICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJFbGVjdHJvbmljc1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImVsZWN0cm9uaWNzXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQmVkc1wiLFxyXG4gICAgICAgICAgICBzbHVnOiBcImJlZHNcIixcclxuICAgICAgICAgICAgY291bnQ6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcm1jaGFpcnMgJiBDaGFpc2VzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwiYXJtY2hhaXJzLWFuZC1jaGFpc2VzXCIsXHJcbiAgICAgICAgICAgIGNvdW50OiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU29mYXMgJiBTbGVlcGVyIFNvZmFzXCIsXHJcbiAgICAgICAgICAgIHNsdWc6IFwic29mYXMtYW5kLXNsZWVwZXItc29mYXNcIixcclxuICAgICAgICAgICAgY291bnQ6IDFcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIFwicHJpY2VzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbjogJzAnLFxyXG4gICAgICAgICAgICBtYXg6ICcyNScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdVbmRlciAkMjUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbjogJzI1JyxcclxuICAgICAgICAgICAgbWF4OiAnNTAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnJDI1IHRvICQ1MCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWluOiAnNTAnLFxyXG4gICAgICAgICAgICBtYXg6ICcxMDAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnJDUwIHRvICQxMDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbjogJzEwMCcsXHJcbiAgICAgICAgICAgIG1heDogJzIwMCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICckMTAwIHRvICQyMDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbjogJzIwMCcsXHJcbiAgICAgICAgICAgIG1heDogJzk5OTknLFxyXG4gICAgICAgICAgICBuYW1lOiAnJDIwMCAmIEFib3ZlJ1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBob21lRGF0YSA9IHtcclxuICAgIGJyYW5kczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvMS5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDIzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImJyYW5kXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJpbWFnZXMvYnJhbmRzLzIucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAxLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAzNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy8zLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvNC5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDEsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImJyYW5kXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJpbWFnZXMvYnJhbmRzLzUucG5nXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiA0OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJicmFuZFwiLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiaW1hZ2VzL2JyYW5kcy82LnBuZ1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMjNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvNy5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA2MyxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvOC5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiA4MCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogNzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnJhbmRcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImltYWdlcy9icmFuZHMvOS5wbmdcIixcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDI1XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjEgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjMgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI0ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNSA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNiA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICBuYXY6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU2xpZGVyNyA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgbmF2OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjggPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBpdGVtczogMixcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXI5ID0ge1xyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxMCA9IHtcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgNzcyOiB7XHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5TbGlkZXIxMSA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDYsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNsaWRlcjEyID0ge1xyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtYXJnaW46IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVTbGlkZXIxID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlU2xpZGVyMiA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICA5MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDZcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEzNjA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZWF0dXJlU2xpZGVyMyA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1hcmdpbjogMCxcclxuICAgIGl0ZW1zOiA2LFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzYwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTUwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVTbGlkZXI0ID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRyb1NsaWRlciA9IHtcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGxvb3A6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyYW5kU2xpZGVyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDkwMDoge1xyXG4gICAgICAgICAgICBpdGVtczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgICBpdGVtczogNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTM2MDoge1xyXG4gICAgICAgICAgICBpdGVtczogN1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTbGlkZXIgPSB7XHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE2MDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBibG9nU2xpZGVyID0ge1xyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXBvbGxvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudGRvd25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb3dsLWNhcm91c2VsMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRhYnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=