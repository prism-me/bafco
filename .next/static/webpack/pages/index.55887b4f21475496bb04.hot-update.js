self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_partials_home_special_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/partials/home/special-collection */ "./components/partials/home/special-collection.jsx");
/* harmony import */ var _components_partials_home_top_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/home/top-collection */ "./components/partials/home/top-collection.jsx");
/* harmony import */ var _components_partials_home_blog_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/home/blog-collection */ "./components/partials/home/blog-collection.jsx");
/* harmony import */ var _components_features_modals_newsletter_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/features/modals/newsletter-modal */ "./components/features/modals/newsletter-modal.jsx");
/* harmony import */ var _components_features_count_down__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/features/count-down */ "./components/features/count-down.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
















function Home() {
  _s();

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_11__.GET_HOME_DATA),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var products = data && data.homeData.products;
  var topProducts = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.attrFilter)(data && data.homeData.products, 'top');
  var posts = data && data.homeData.posts;

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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInUpShorter,
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
  }), "Desks"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInRightShorter,
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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInRightShorter,
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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInRightShorter,
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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInLeftShorter,
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
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
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
  }, "from Dhs.200"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeIn,
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
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
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
  }, "Chair Collections "), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
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
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInRightShorter,
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
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
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
  }, "Desk Collections"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
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
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
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
  }, "Sofa Collections"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
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
  }), __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, __jsx(_components_partials_home_top_collection__WEBPACK_IMPORTED_MODULE_6__.default, {
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
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.default, {
    adClass: "owl-simple owl-light owl-nav-inside",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_13__.dealSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 37
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 41
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 49
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 49
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 53
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 53
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 53
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 49
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__.default, {
    date: "2022-02-01T01:02:03",
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_9__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 53
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 53
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 74
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 37
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 49
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/deal/dealoftheday.png",
    threshold: "300",
    effect: "blur",
    width: "100%",
    height: 460,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 41
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: "300",
    effect: "blur",
    className: "h-100",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 41
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 41
    }
  }, "Indigo ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 88
    }
  }), "Best Linen"), __jsx("div", {
    className: "banner-text text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 41
    }
  }, "$49.99"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 41
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 129
    }
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 37
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 41
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 49
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 49
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 53
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 53
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 53
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 49
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__.default, {
    date: "2022-02-01T01:02:03",
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_9__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 53
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 53
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 74
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 37
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 49
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/deal/dealoftheday.png",
    threshold: "300",
    effect: "blur",
    width: "100%",
    height: 460,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 41
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: "300",
    effect: "blur",
    className: "h-100",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 41
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 41
    }
  }, "Indigo ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 88
    }
  }), "Best Linen"), __jsx("div", {
    className: "banner-text text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 41
    }
  }, "$49.99"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 41
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 129
    }
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "deal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "deal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 37
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInLeftShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 41
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 49
    }
  }, "Limited Quantities"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 49
    }
  }, "Deal of the Day"), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 53
    }
  }, "Check Out")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 53
    }
  }, "Dhs. 5000"), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 53
    }
  }, "Was Dhs.7000")), __jsx("div", {
    className: "deal-countdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 49
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__.default, {
    date: "2022-02-01T01:02:03",
    renderer: _components_features_count_down__WEBPACK_IMPORTED_MODULE_9__.rendererThree,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 53
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 49
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 53
    }
  }, "Shop Now"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 74
    }
  }))))), __jsx("div", {
    className: "deal-image position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 37
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "lazy-overlay bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 49
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/deal/dealoftheday.png",
    threshold: "300",
    effect: "blur",
    width: "100%",
    height: 460,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 41
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "deal-banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: "300",
    effect: "blur",
    className: "h-100",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "banner-subtitle text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 41
    }
  }, "The Best Choice"), __jsx("h3", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 41
    }
  }, "Indigo ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 88
    }
  }), "Best Linen"), __jsx("div", {
    className: "banner-text text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 41
    }
  }, "$49.99"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-light banner-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 41
    }
  }, "Shop Now", __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 129
    }
  }))))))))), __jsx("div", {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
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
      lineNumber: 535,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 17
    }
  }, __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeInUpShorter,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    style: {
      backgroundImage: 'url(images/home/Component-26.png)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 21
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h3", {
    className: "video-banner-title h1 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 29
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 33
    }
  }, "Visit Our Showroom")), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    className: "btn-video btn-iframe",
    onClick: openVideoModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 141
    }
  })))))), __jsx("div", {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 13
    }
  }), __jsx(_components_partials_home_blog_collection__WEBPACK_IMPORTED_MODULE_7__.default, {
    posts: posts,
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 13
    }
  }), __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_15__.default, {
    keyframes: _utils_data__WEBPACK_IMPORTED_MODULE_13__.fadeIn,
    delay: 200,
    duration: 1000,
    triggerOnce: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 553,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "heading text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 29
    }
  }, "Keep in Touch"), __jsx("p", {
    className: "title-desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 29
    }
  }, "Join Our Newsletter")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 29
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
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
      lineNumber: 568,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "input-group-append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    id: "newsletter-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 49
    }
  }, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 49
    }
  })))))))))), __jsx(_components_features_modals_newsletter_modal__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 13
    }
  }));
}

_s(Home, "tP+6C5plfRwxqCbBj3cMUcL7Opk=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__.useQuery];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_10__.default)({
  ssr: false
})(Home));

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VRdWVyeSIsIkdFVF9IT01FX0RBVEEiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicHJvZHVjdHMiLCJob21lRGF0YSIsInRvcFByb2R1Y3RzIiwiYXR0ckZpbHRlciIsInBvc3RzIiwib3BlblZpZGVvTW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsInNob3dWaWRlbyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImZhZGVJblVwU2hvcnRlciIsImZhZGVJblJpZ2h0U2hvcnRlciIsImZhZGVJbkxlZnRTaG9ydGVyIiwiZmFkZUluIiwiZGVhbFNsaWRlciIsInJlbmRlcmVyVGhyZWUiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDcUJDLDhEQUFRLENBQUNDLDJEQUFELENBRDdCO0FBQUEsTUFDSkMsSUFESSxhQUNKQSxJQURJO0FBQUEsTUFDRUMsT0FERixhQUNFQSxPQURGO0FBQUEsTUFDV0MsS0FEWCxhQUNXQSxLQURYOztBQUVaLE1BQU1DLFFBQVEsR0FBR0gsSUFBSSxJQUFJQSxJQUFJLENBQUNJLFFBQUwsQ0FBY0QsUUFBdkM7QUFDQSxNQUFNRSxXQUFXLEdBQUdDLG1EQUFVLENBQUNOLElBQUksSUFBSUEsSUFBSSxDQUFDSSxRQUFMLENBQWNELFFBQXZCLEVBQWlDLEtBQWpDLENBQTlCO0FBQ0EsTUFBTUksS0FBSyxHQUFHUCxJQUFJLElBQUlBLElBQUksQ0FBQ0ksUUFBTCxDQUFjRyxLQUFwQzs7QUFFQSxXQUFTQyxjQUFULENBQXdC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QUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksYUFBUyxFQUFDLGNBRmQ7QUFHSSxlQUFXLEVBQUMsMEJBSGhCO0FBSUksa0JBQVcsY0FKZjtBQUtJLHdCQUFpQixnQkFMckI7QUFNSSxZQUFRLE1BTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBU0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLGlCQURkO0FBRUksUUFBSSxFQUFDLFFBRlQ7QUFHSSxNQUFFLEVBQUMsZ0JBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosRUFNSTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESixDQVRKLENBREosQ0FESixDQURKLENBUEosQ0FKSixDQURKLENBbmdCSixFQTRpQkksTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNWlCSixDQURKO0FBZ2pCSDs7R0Foa0JRakIsSTtVQUM0QkMsMEQ7OztLQUQ1QkQsSTtBQWtrQlQsK0RBQWV3Qix3REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FBa0R6QixJQUFsRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1ODg3YjRmMjE0NzU0OTZiYjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IFJldmVhbCBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuaW1wb3J0IFNwZWNpYWxDb2xsZWN0aW9uIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3NwZWNpYWwtY29sbGVjdGlvbic7XHJcbmltcG9ydCBUb3BDb2xsZWN0aW9uIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3RvcC1jb2xsZWN0aW9uJztcclxuaW1wb3J0IEJsb2dDb2xsZWN0aW9uIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2Jsb2ctY29sbGVjdGlvbic7XHJcbmltcG9ydCBOZXdzbGV0dGVyTW9kYWwgZnJvbSBcIn4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbmV3c2xldHRlci1tb2RhbFwiO1xyXG5pbXBvcnQgeyByZW5kZXJlclRocmVlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9mZWF0dXJlcy9jb3VudC1kb3duXCI7XHJcblxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBHRVRfSE9NRV9EQVRBIH0gZnJvbSAnfi9zZXJ2ZXIvcXVlcmllcyc7XHJcbmltcG9ydCB7IGF0dHJGaWx0ZXIgfSBmcm9tICd+L3V0aWxzJztcclxuXHJcbmltcG9ydCB7IGhvbWVEYXRhLCBpbnRyb1NsaWRlciwgYnJhbmRTbGlkZXIsIGRlYWxTbGlkZXIsIGZhZGVJblVwU2hvcnRlciwgZmFkZUluTGVmdFNob3J0ZXIsIGZhZGVJblJpZ2h0U2hvcnRlciwgZmFkZUluIH0gZnJvbSAnfi91dGlscy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShHRVRfSE9NRV9EQVRBKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YSAmJiBkYXRhLmhvbWVEYXRhLnByb2R1Y3RzO1xyXG4gICAgY29uc3QgdG9wUHJvZHVjdHMgPSBhdHRyRmlsdGVyKGRhdGEgJiYgZGF0YS5ob21lRGF0YS5wcm9kdWN0cywgJ3RvcCcpO1xyXG4gICAgY29uc3QgcG9zdHMgPSBkYXRhICYmIGRhdGEuaG9tZURhdGEucG9zdHM7XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblZpZGVvTW9kYWwoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwcm9wcy5zaG93VmlkZW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gaG9tZS1wYWdlIHNrZWxldG9uLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1zbGlkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlIHNsaWRlMVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNFREYyRjAnLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2hvbWUvc2xpZGVycy9ob21lLWJhY2tncm91bmQtYmFubmVyLmpwZyknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGludHJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblVwU2hvcnRlcn0gZGVsYXk9XCIxMDAlXCIgZHVyYXRpb249ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW50cm8tc3VidGl0bGVcIj5Xb3JrIEJldHRlci4gTGl2ZSBIZWFsdGhpZXIuPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW50cm8tdGl0bGVcIj5TaXRlIFN0YW5kIDxiciAvPkRlc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj48c3VwPiQ8L3N1cD40OSw5OTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1vdXRsaW5lLWRhcmtlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZXNpZ24gTXkgRGVzazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImltYWdlcy9ob21lL3NsaWRlcnMvc2xpZGUtMS0zLnBuZ1wiIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlXCIgYWx0PVwic2xpZGVcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwib3dsLXNpbXBsZSBvd2wtbGlnaHQgb3dsLW5hdi1pbnNpZGVcIiBvcHRpb25zPXtpbnRyb1NsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1zbGlkZSBzbGlkZTFcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRURGMkYwJywgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL3NsaWRlcnMvc2xpZGUtMS0xLnBuZyknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnRyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT1cIjEwMCVcIiBkdXJhdGlvbj17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImludHJvLXN1YnRpdGxlXCI+RGVhbHMgYW5kIFByb21vdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW50cm8tdGl0bGVcIj5Xb29kZW4gPGJyIC8+U2lkZWJvYXJkIFRhYmxlIDxiciAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPjxzdXA+JDwvc3VwPjQ5LDk5PC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tb3V0bGluZS1kYXJrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3AgTm93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9ob21lL3NsaWRlcnMvc2xpZGUtMS0zLnBuZ1wiIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlXCIgYWx0PVwic2xpZGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLXNsaWRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKGltYWdlcy9ob21lL3NsaWRlcnMvc2xpZGUtMi5qcGcpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaW50cm8tY29udGVudCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluVXBTaG9ydGVyfSBkZWxheT1cIjEwMCVcIiBkdXJhdGlvbj17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImludHJvLXN1YnRpdGxlXCI+QmVkcm9vbSBGdXJuaXR1cmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaW50cm8tdGl0bGVcIj5GaW5kIENvbWZvcnQgPGJyIC8+VGhhdCBTdWl0cyBZb3UuPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1vdXRsaW5lLWRhcmtlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvcCBOb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tc2xpZGUgc2xpZGUzXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0VERjJGMCcsIGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaG9tZS9zbGlkZXJzL3NsaWRlLTMtMS5wbmcpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaW50cm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblVwU2hvcnRlcn0gZGVsYXk9XCIxMDAlXCIgZHVyYXRpb249ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnRyby1zdWJ0aXRsZVwiPkJhc2tldHMgJiBTdG9yYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImludHJvLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXVuZGFyeSBCYXNrZXQ8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXAgY2xhc3NOYW1lPVwidGV4dC1ncmV5IGZvbnQtd2VpZ2h0LWxpZ2h0XCI+ZnJvbTwvc3VwPjxzdXA+JDwvc3VwPjksOTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1vdXRsaW5lLWRhcmtlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvcCBOb3c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT1cIjEwMCVcIiBkdXJhdGlvbj17NTAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbCBhZENsYXNzPVwiYnJhbmRzLWJvcmRlciBvd2wtc2ltcGxlIGJyYW5kLWNhcm91c2VsIGNvbHMteGwtNyBjb2xzLWxnLTUgY29scy1tZC00IGNvbHMtc20tMyBjb2xzLTJcIiBvcHRpb25zPXticmFuZFNsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob21lRGF0YS5icmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnJhbmQgbXItMFwiIGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JyYW5kLmltYWdlfSBhbHQ9XCJicmFuZFwiIHdpZHRoPXticmFuZC53aWR0aH0gaGVpZ2h0PXticmFuZC5oZWlnaHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICA8L1JldmVhbD4gKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94ZXMtY29udGFpbmVyIGljb24tYm94ZXMtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5SaWdodFNob3J0ZXJ9IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94IGljb24tYm94LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1waG9uZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpY29uLWJveC10aXRsZVwiPkdpdmUgVXMgQSBDYWxsPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rOTcxIDgwMCAoMjIzMjYpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5SaWdodFNob3J0ZXJ9IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94IGljb24tYm94LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi13aGF0c2FwcFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaWNvbi1ib3gtdGl0bGVcIj5XaGF0c2FwcDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Kzk3MSA4MDAgKDIyMzI2KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluUmlnaHRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveCBpY29uLWJveC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYm94LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWFwLW1hcmtlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaWNvbi1ib3gtdGl0bGVcIj5Mb2NhdGlvbnM8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZpc2l0IGEgc2hvd3Jvb20gbmVhciB5b3UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluTGVmdFNob3J0ZXJ9IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tYm94IGljb24tYm94LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ib3gtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1saWZlLXJpbmdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3gtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImljb24tYm94LXRpdGxlXCI+V2UgU3VwcG9ydDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjQvNyBhbWF6aW5nIHNlcnZpY2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgbWItbGctNVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbkxlZnRTaG9ydGVyfSBkZWxheT17MTUwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLWxhcmdlIGJhbm5lci1vdmVybGF5IGJhbm5lci1vdmVybGF5LWxpZ2h0IGJhbm5lci1sZyBiYW5uZXItMSBsYXp5LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2Jhbm5lcnMvd29ya3N0YXRpb24tY29sbGVjdGlvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXN1YnRpdGxlXCI+Q2xlYXJhbmNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGVcIj5Xb3Jrc3RhdGlvbiA8YnIgLz4gQ29sbGVjdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10ZXh0XCI+ZnJvbSBEaHMuMjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZ3JheSBiYW5uZXItbGlua1wiPkRpc2NvdmVyIE5vdzxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsxNTB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheSBiYW5uZXItbGcgYmFubmVyLTIgbGF6eS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2NoYWlyLWNvbGxlY3Rpb25zLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCBiYW5uZXItY29udGVudC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiYW5uZXItc3VidGl0bGUgdGV4dC1ncmV5XCI+RnJlZWRvbTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5DaGFpciBDb2xsZWN0aW9ucyA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRleHQgdGV4dC13aGl0ZVwiPmZyb20gJDM5Ljk5PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdoaXRlIGJhbm5lci1saW5rXCI+RGlzY292ZXIgTm93PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluUmlnaHRTaG9ydGVyfSBkZWxheT17MTUwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci0zIGJhbm5lci1vdmVybGF5IGxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2Jhbm5lci0zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCBiYW5uZXItY29udGVudC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZVwiPk1pZGFzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZVwiPkRlc2sgQ29sbGVjdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZ3JheSBiYW5uZXItbGlua1wiPkRpc2NvdmVyIE5vdzxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci00IGJhbm5lci1vdmVybGF5IGJhbm5lci1vdmVybGF5LWxpZ2h0IGxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2Jhbm5lci00LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCBiYW5uZXItY29udGVudC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZVwiPkVuem8gUGx1czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGVcIj5Tb2ZhIENvbGxlY3Rpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRleHRcIj51cCB0byAzMCUgb2ZmPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZ3JheSBiYW5uZXItbGlua1wiPkRpc2NvdmVyIE5vdzxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICA8VG9wQ29sbGVjdGlvbiBwcm9kdWN0cz17dG9wUHJvZHVjdHN9IGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG5cclxuICAgICAgICAgICAgey8qIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgIDxTcGVjaWFsQ29sbGVjdGlvbiBwcm9kdWN0cz17cHJvZHVjdHN9IGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAgICAgIDwvUmV2ZWFsPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsLWNvbnRhaW5lciBwdC01IHBiLTMgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cIm93bC1zaW1wbGUgb3dsLWxpZ2h0IG93bC1uYXYtaW5zaWRlXCIgb3B0aW9ucz17ZGVhbFNsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUluTGVmdFNob3J0ZXJ9IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGltaXRlZCBRdWFudGl0aWVzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRlYWwgb2YgdGhlIERheTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+Q2hlY2sgT3V0PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+RGhzLiA1MDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+V2FzIERocy43MDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1jb3VudGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17YDIwMjItMDItMDFUMDE6MDI6MDNgfSByZW5kZXJlcj17cmVuZGVyZXJUaHJlZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3AgTm93PC9zcGFuPjxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbC1pbWFnZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheSBiZy13aGl0ZVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlYWwtYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2RlYWwvZGVhbG9mdGhlZGF5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheSBiYW5uZXItb3ZlcmxheS1saWdodCBkLW5vbmUgZC1sZy1ibG9jayBoLTEwMCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktb3ZlcmxheVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGVhbC1iYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ob21lL2Jhbm5lcnMvYmFubmVyLTUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmFubmVyLXN1YnRpdGxlIHRleHQtd2hpdGVcIj5UaGUgQmVzdCBDaG9pY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+SW5kaWdvIDxiciAvPkJlc3QgTGluZW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGV4dCB0ZXh0LXByaW1hcnlcIj4kNDkuOTk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29sc1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodCBiYW5uZXItbGlua1wiPlNob3AgTm93PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbkxlZnRTaG9ydGVyfSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkxpbWl0ZWQgUXVhbnRpdGllczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZWFsIG9mIHRoZSBEYXk8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkNoZWNrIE91dDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPkRocy4gNTAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPldhcyBEaHMuNzAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtY291bnRkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRkb3duIGRhdGU9e2AyMDIyLTAyLTAxVDAxOjAyOjAzYH0gcmVuZGVyZXI9e3JlbmRlcmVyVGhyZWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIE5vdzwvc3Bhbj48aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWwtaW1hZ2UgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW59IGRlbGF5PXsyMDB9IGR1cmF0aW9uPXsxMDAwfSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXkgYmctd2hpdGVcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZWFsLWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9kZWFsL2RlYWxvZnRoZWRheS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXkgYmFubmVyLW92ZXJsYXktbGlnaHQgZC1ub25lIGQtbGctYmxvY2sgaC0xMDAgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXp5LW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlYWwtYmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvaG9tZS9iYW5uZXJzL2Jhbm5lci01LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJhbm5lci1zdWJ0aXRsZSB0ZXh0LXdoaXRlXCI+VGhlIEJlc3QgQ2hvaWNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkluZGlnbyA8YnIgLz5CZXN0IExpbmVuPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRleHQgdGV4dC1wcmltYXJ5XCI+JDQ5Ljk5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYmFubmVyLWxpbmtcIj5TaG9wIE5vdzxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZlYWwga2V5ZnJhbWVzPXtmYWRlSW5MZWZ0U2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5MaW1pdGVkIFF1YW50aXRpZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RGVhbCBvZiB0aGUgRGF5PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5DaGVjayBPdXQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj5EaHMuIDUwMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj5XYXMgRGhzLjcwMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsLWNvdW50ZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZG93biBkYXRlPXtgMjAyMi0wMi0wMVQwMTowMjowM2B9IHJlbmRlcmVyPXtyZW5kZXJlclRocmVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvcCBOb3c8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsLWltYWdlIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2ZWFsIGtleWZyYW1lcz17ZmFkZUlufSBkZWxheT17MjAwfSBkdXJhdGlvbj17MTAwMH0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5IGJnLXdoaXRlXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGVhbC1iYW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2hvbWUvZGVhbC9kZWFsb2Z0aGVkYXkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci1vdmVybGF5IGJhbm5lci1vdmVybGF5LWxpZ2h0IGQtbm9uZSBkLWxnLWJsb2NrIGgtMTAwIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZWFsLWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2hvbWUvYmFubmVycy9iYW5uZXItNS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCBiYW5uZXItY29udGVudC10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiYW5uZXItc3VidGl0bGUgdGV4dC13aGl0ZVwiPlRoZSBCZXN0IENob2ljZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5JbmRpZ28gPGJyIC8+QmVzdCBMaW5lbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10ZXh0IHRleHQtcHJpbWFyeVwiPiQ0OS45OTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJhbm5lci1saW5rXCI+U2hvcCBOb3c8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tYmFubmVyIHZpZGVvLWJhbm5lci1iZyBiZy1pbWFnZSB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaG9tZS91bnNwbGFzaF9hV2Y3bWp3d0pKby5wbmcpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJblVwU2hvcnRlcn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChpbWFnZXMvaG9tZS9Db21wb25lbnQtMjYucG5nKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmlkZW8tYmFubmVyLXRpdGxlIGgxIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+TmV3IENvbGxlY3Rpb248L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VmlzaXQgT3VyIFNob3dyb29tPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dkJQZ21BU1ExQTBcIiBjbGFzc05hbWU9XCJidG4tdmlkZW8gYnRuLWlmcmFtZVwiIG9uQ2xpY2s9e29wZW5WaWRlb01vZGFsfT48aSBjbGFzc05hbWU9XCJpY29uLXBsYXlcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEJsb2dDb2xsZWN0aW9uIHBvc3RzPXtwb3N0c30gbG9hZGluZz17bG9hZGluZ30+PC9CbG9nQ29sbGVjdGlvbj5cclxuICAgICAgICAgICAgPFJldmVhbCBrZXlmcmFtZXM9e2ZhZGVJbn0gZGVsYXk9ezIwMH0gZHVyYXRpb249ezEwMDB9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1uZXdzbGV0dGVyIGJnLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL2JhY2tncm91bmRzL1JlY3RhbmdsZS05LnBuZyknIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5LZWVwIGluIFRvdWNoPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1kZXNjXCI+Sm9pbiBPdXIgTmV3c2xldHRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTAgb2Zmc2V0LXNtLTEgY29sLW1kLTggb2Zmc2V0LW1kLTIgY29sLWxnLTYgb2Zmc2V0LWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVtYWlsIEFkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm5ld3NsZXR0ZXItYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdzbGV0dGVyLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdWJzY3JpYmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZXZlYWw+XHJcbiAgICAgICAgICAgIDxOZXdzbGV0dGVyTW9kYWwgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyB9KShIb21lKTsiXSwic291cmNlUm9vdCI6IiJ9