(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/features/mobile-menu.jsx":
/*!*********************************************!*\
  !*** ./components/features/mobile-menu.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\mobile-menu.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function MobileMenu() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on('routeChangeComplete', hideMobileMenu);
  }, []);

  function hideMobileMenu() {
    document.querySelector('body').classList.remove('mmenu-active');
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: ""
      }
    });
  }

  return __jsx("div", {
    className: "mobile-menu-container mobile-menu-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mobile-menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "mobile-menu-close",
    onClick: hideMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 80
    }
  })), __jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    className: "mobile-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "mobile-search",
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Search"), __jsx("input", {
    type: "text",
    className: "form-control",
    value: searchTerm,
    onChange: onSearchChange,
    name: "mobile-search",
    id: "mobile-search",
    placeholder: "Search product ...",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 71
    }
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-pills-mobile",
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, "Menu")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "Categories"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("nav", {
    className: "mobile-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "mobile-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 49
    }
  }, "Home", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-1/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 57
    }
  }, "01 - furniture store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-2/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 57
    }
  }, "02 - furniture store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-3/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 57
    }
  }, "03 - electronic store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-4/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 57
    }
  }, "04 - electronic store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-5/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 57
    }
  }, "05 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-6/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 57
    }
  }, "06 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-7/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 57
    }
  }, "07 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-8/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 57
    }
  }, "08 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-9/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 57
    }
  }, "09 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-10/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 57
    }
  }, "10 - shoes store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-11/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 57
    }
  }, "11 - furniture simple store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-12/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 57
    }
  }, "12 - fashion simple store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-13/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 57
    }
  }, "13 - market")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-14/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 57
    }
  }, "14 - market fullwidth")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-15/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 57
    }
  }, "15 - lookbook 1")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-16/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 57
    }
  }, "16 - lookbook 2")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-17/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 57
    }
  }, "17 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-18/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 57
    }
  }, "18 - fashion store (with sidebar)")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-19/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 57
    }
  }, "19 - games store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-20/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 57
    }
  }, "20 - book store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-21/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 57
    }
  }, "21 - sport store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-22/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 57
    }
  }, "22 - tools store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-23/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 57
    }
  }, "23 - fashion left navigation store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-24/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 57
    }
  }, "24 - extreme sport store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-25/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 57
    }
  }, "25 - jewelry store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-26/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 57
    }
  }, "26 - market store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-27/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 57
    }
  }, "27 - fashion store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-28/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 57
    }
  }, "28 - food market store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-29/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 57
    }
  }, "29 - t-shirts store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-30/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 57
    }
  }, "30 - headphones store")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "https://d-themes.com/react/molla/demo-31/",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 57
    }
  }, "31 - yoga store"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 49
    }
  }, "Shop", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 57
    }
  }, "Shop List")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 57
    }
  }, "Shop Grid 2 Columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 57
    }
  }, "Shop Grid 3 Columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 57
    }
  }, "Shop Grid 4 Columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/market",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 84
    }
  }, "Shop Market", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 101
    }
  }, "New")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/nosidebar/boxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 93
    }
  }, "Shop Boxed No Sidebar", __jsx("span", {
    className: "tip tip-hot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 120
    }
  }, "Hot")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/nosidebar/fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 57
    }
  }, "Shop Fullwidth No Sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/category/boxed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 57
    }
  }, "Product Category Boxed")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/category/fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 96
    }
  }, "Product Category Fullwidth", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 128
    }
  }, "New")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 57
    }
  }, "Cart")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 57
    }
  }, "Checkout")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 57
    }
  }, "Wishlist")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 57
    }
  }, "My Account")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 57
    }
  }, "Lookbook"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 49
    }
  }, "Product", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 57
    }
  }, "Default")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/centered/beige-ring-handle-circle-cross-body-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }, "Centered")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/extended/yellow-tie-strap-block-heel-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 57
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 125
    }
  }, "Extended Info", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 144
    }
  }, "New")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/gallery/beige-metal-hoop-tote-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 57
    }
  }, "Gallery")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/sticky/brown-faux-fur-longline-coat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 57
    }
  }, "Sticky Info")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/sidebar/beige-v-neck-button-cardigan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 57
    }
  }, "Boxed With Sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/fullwidth/black-faux-leather-chain-trim-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 57
    }
  }, "Full Width")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/product/masonry/black-denim-dungaree-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 57
    }
  }, "Masonry Sticky Info"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 49
    }
  }, "Pages", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 49
    }
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/about",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 65
    }
  }, "About ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 121
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 73
    }
  }, "About 01")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/about-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 73
    }
  }, "About 02"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/contact",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 65
    }
  }, "Contact ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 125
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 73
    }
  }, "Contact 01")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/contact-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 73
    }
  }, "Contact 02"))))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 57
    }
  }, "Login")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 57
    }
  }, "FAQs")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 57
    }
  }, "Error 404")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/pages/coming-soon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 57
    }
  }, "Coming Soon"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/classic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 49
    }
  }, "Blog", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/classic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 57
    }
  }, "Classic")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/listing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 57
    }
  }, "Listing")), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 65
    }
  }, "Grid ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 109
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 73
    }
  }, "Grid 2 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 73
    }
  }, "Grid 3 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 73
    }
  }, "Grid 4 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/grid/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 73
    }
  }, "Grid sidebar"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 65
    }
  }, "Masonry ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 112
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 73
    }
  }, "Masonry 2 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 73
    }
  }, "Masonry 3 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 73
    }
  }, "Masonry 4 columns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/masonry/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 73
    }
  }, "Masonry sidebar"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 65
    }
  }, "Mask ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 109
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/mask/grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 73
    }
  }, "Blog Mask Grid")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/mask/masonry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 73
    }
  }, "Blog Mask Masonry"))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 53
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 65
    }
  }, "Single Post ", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 163
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 65
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 73
    }
  }, "Default with sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/fullwidth/fusce-pellentesque-suscipit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 73
    }
  }, "Fullwidth no sidebar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 69
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/blog/single/sidebar/utaliquam-sollicitzdvudin-leo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 73
    }
  }, "Fullwidth with sidebar")))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 49
    }
  }, "Elements", __jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 53
    }
  })), __jsx("ul", {
    ref: setCollapsibleElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 57
    }
  }, "Products")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/typography",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 57
    }
  }, "Typography")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 57
    }
  }, "Titles")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 57
    }
  }, "Banners")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 57
    }
  }, "Product Category")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/video-banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 57
    }
  }, "Video Banners")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 57
    }
  }, "Buttons")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/accordions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 57
    }
  }, "Accordions")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 57
    }
  }, "Tabs")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 57
    }
  }, "Testimonials")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/blog-posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 57
    }
  }, "Blog Posts")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/cta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 57
    }
  }, "Call to Action")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/elements/icon-boxes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 57
    }
  }, "Icon Boxes")))))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, __jsx("nav", {
    className: "mobile-cats-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "mobile-cats-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "item-cats-lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=electronics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 68
    }
  }, "Electronics")), __jsx("li", {
    className: "item-cats-lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 68
    }
  }, "Gift Ideas")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=beds",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 41
    }
  }, "Beds")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=lighting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 41
    }
  }, "Lighting")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }, "Sofas & Sleeper sofas")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=storage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 41
    }
  }, "Storage")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 41
    }
  }, "Armchairs & Chaises")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=decoration",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 41
    }
  }, "Decoration ")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }, "Kitchen Cabinets")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 41
    }
  }, "Coffee & Tables")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/sidebar/3cols?category=furniture",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 41
    }
  }, "Outdoor Furniture "))))))), __jsx("div", {
    className: "social-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 78
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 77
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 79
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 77
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MobileMenu));

/***/ }),

/***/ "./components/features/modals/login-modal.jsx":
/*!****************************************************!*\
  !*** ./components/features/modals/login-modal.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\modals\\login-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const customStyles = {
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('body');

function LoginModal() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let timer;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  function closeModal() {
    document.getElementById("login-modal").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    timer = setTimeout(() => {
      setOpen(false);
    }, 350);
  }

  function openModal(e) {
    e.preventDefault();
    setOpen(true);
  }

  return __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    onClick: openModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Sign in / Sign up"), open ? __jsx((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: open,
    style: customStyles,
    contentLabel: "login Modal",
    className: "modal-dialog",
    overlayClassName: "d-flex align-items-center justify-content-center",
    id: "login-modal",
    onRequestClose: closeModal,
    closeTimeoutMS: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 62
    }
  }))), __jsx("div", {
    className: "form-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    defaultIndex: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-pills nav-fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 53
    }
  }, "Sign In")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 53
    }
  }, "Register"))), __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    style: {
      paddingTop: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 53
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 61
    }
  }, __jsx("label", {
    htmlFor: "singin-email-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 65
    }
  }, "Username or email address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "singin-email-2",
    name: "singin-email",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 65
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 61
    }
  }, __jsx("label", {
    htmlFor: "singin-password-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 65
    }
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "singin-password-2",
    name: "singin-password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 65
    }
  })), __jsx("div", {
    className: "form-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 61
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 65
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 69
    }
  }, "LOG IN"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 69
    }
  })), __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 65
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "signin-remember-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 69
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "signin-remember-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 69
    }
  }, "Remember Me")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "forgot-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 65
    }
  }, "Forgot Your Password?"))), __jsx("div", {
    className: "form-choice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 57
    }
  }, __jsx("p", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 61
    }
  }, "or sign in with"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 61
    }
  }, __jsx("div", {
    className: "col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 65
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login btn-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 69
    }
  }, __jsx("i", {
    className: "icon-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 73
    }
  }), "Login With Google")), __jsx("div", {
    className: "col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 65
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login btn-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 69
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 73
    }
  }), "Login With Facebook")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }, __jsx("form", {
    action: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 57
    }
  }, __jsx("label", {
    htmlFor: "register-email-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 61
    }
  }, "Your email address *"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "register-email-2",
    name: "register-email",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 61
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 57
    }
  }, __jsx("label", {
    htmlFor: "register-password-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 61
    }
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "register-password-2",
    name: "register-password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 61
    }
  })), __jsx("div", {
    className: "form-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 57
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 61
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 65
    }
  }, "SIGN UP"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 65
    }
  })), __jsx("div", {
    className: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 61
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "register-policy-2",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 65
    }
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "register-policy-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 65
    }
  }, "I agree to the privacy policy *")))), __jsx("div", {
    className: "form-choice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 53
    }
  }, __jsx("p", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 57
    }
  }, "or sign in with"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login btn-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 65
    }
  }, __jsx("i", {
    className: "icon-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 69
    }
  }), "Login With Google")), __jsx("div", {
    className: "col-md-6 mt-1 mt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "#",
    className: "btn btn-login  btn-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 65
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 69
    }
  }), "Login With Facebook")))))))))))) : '');
}

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/features/modals/quickview-modal.jsx":
/*!********************************************************!*\
  !*** ./components/features/modals/quickview-modal.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-magnifiers */ "react-image-magnifiers");
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/owl-carousel */ "./components/features/owl-carousel.jsx");
/* harmony import */ var _components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/product/details/detail-one */ "./components/partials/product/details/detail-one.jsx");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\modals\\quickview-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const customStyles = {
  overlay: {
    backgroundColor: 'rgba(51,51,51,0.6)',
    zIndex: '9000'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('body');

function QuickViewModal(props) {
  const {
    slug
  } = props;

  if (!slug) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 16
      }
    });
  }

  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__.GET_PRODUCT, {
    variables: {
      slug,
      onlyData: true
    }
  });
  const product = data && data.product.single;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: carouselRef,
    1: setCarouselRef
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const events = {
    onTranslate: function (e) {
      let items = document.querySelectorAll('.quickView-content .product-gallery-item');
      document.querySelector('.quickView-content .product-gallery-item.active').classList.remove('active');
      items[e.item.index].classList.add('active');
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on('routeChangeStart', closeModal);
    carouselRef && carouselRef.current && carouselRef.current.goTo(0);
    return () => {
      router.events.off('routeChangeStart', closeModal);
    };
  }, []);

  function closeModal() {
    if (document.querySelector(".ReactModal__Content")) {
      document.querySelector(".ReactModal__Content").classList.remove("ReactModal__Content--after-open");
    }

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      props.hideQuick();
    }, 250);
  }

  function changeBgImage(e, index) {
    document.querySelector('.quickView-content .product-gallery-item.active').classList.remove('active');
    e.currentTarget.classList.add('active');
    carouselRef.current.goTo(index);
  }

  if (!slug || error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
      }
    });
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: props.modalShow,
    onRequestClose: closeModal,
    className: "container quickView-container",
    overlayClassName: "d-flex align-items-center justify-content-center",
    shouldReturnFocusAfterClose: false,
    closeTimeoutMS: 100,
    contentLabel: "QuickView",
    style: customStyles,
    id: "product-quickview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "quickView-content horizontal skeleton-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: `row skel-pro-single skel-quickview mb-0 ${loading ? '' : 'loaded'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-6 p-0 pr-lg-2 mb-2 mb-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "skel-product-gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }), !loading ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "product-lg mb-1 position-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 45
    }
  }, product.new ? __jsx("span", {
    className: "product-label label-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 57
    }
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 57
    }
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 57
    }
  }, "Top") : "", product.stock == 0 ? __jsx("span", {
    className: "product-label label-out",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 57
    }
  }, "Out of Stock") : "", __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__.default, {
    adClass: "product-gallery-carousel owl-full owl-nav-dark cols-1 cols-md-2 cols-lg-3",
    onChangeRef: setCarouselRef,
    events: events,
    options: {
      'dots': false,
      'nav': false
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 49
    }
  }, product.pictures.map((item, index) => __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_4__.Magnifier, {
    imageSrc: "http://localhost:4000" + item.url,
    imageAlt: "product",
    largeImageSrc: "http://localhost:4000" + item.url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-gallery-image",
    style: {
      paddingTop: `${product.pictures[0].height / product.pictures[0].width * 100}%`
    },
    key: "gallery-" + index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 57
    }
  })))), __jsx("div", {
    className: "product-sm row px-2",
    id: "owl-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 45
    }
  }, product.pictures.map((item, index) => __jsx("button", {
    className: `product-gallery-item mb-0 ${0 === index ? 'active' : ''}`,
    key: product.id + '-' + index,
    onClick: e => changeBgImage(e, index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 57
    }
  }, __jsx("div", {
    className: "lazy-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 61
    }
  }, __jsx("figure", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 65
    }
  }, __jsx("div", {
    className: "lazy-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 69
    }
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "Thumbnail",
    src: "http://localhost:4000" + product.sm_pictures[index].url,
    width: "100%",
    height: "auto",
    className: "d-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 69
    }
  }))))))) : ""), __jsx("div", {
    className: "col-lg-6 quickview-desc pl-0 pl-lg-4 pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "entry-summary row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry-summary2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }))), !loading ? __jsx(_components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_8__.default, {
    product: product,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 41
    }
  }) : "")))), __jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 104
    }
  }, "\xD7"))));
}

const mapStateToProps = state => {
  return {
    slug: state.demo.single,
    modalShow: state.demo.quickShow
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__.default)({
  ssr: true
})((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread({}, _store_demo__WEBPACK_IMPORTED_MODULE_11__.actions))(QuickViewModal)));

/***/ }),

/***/ "./components/features/modals/video-modal.jsx":
/*!****************************************************!*\
  !*** ./components/features/modals/video-modal.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStateToProps": function() { return /* binding */ mapStateToProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/demo */ "./store/demo.js");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\modals\\video-modal.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const customStyles = {
  content: {
    top: '50%',
    transform: 'translateY(-50%)'
  },
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement('body');

function VideoModal(props) {
  const {
    showModal
  } = props;

  const closeHandler = () => {
    document.querySelector("#video-modal").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      props.hideVideo();
    }, 350);
  };

  return __jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: showModal,
    onRequestClose: closeHandler,
    style: customStyles,
    contentLabel: "Video Modal",
    className: "video-modal p-3",
    shouldReturnFocusAfterClose: false,
    id: "video-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    onClick: closeHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 42
    }
  }))), __jsx("iframe", {
    className: "mfp-iframe modal-content",
    src: "//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1",
    frameBorder: "0",
    allowFullScreen: "",
    title: "youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
}

const mapStateToProps = state => {
  return {
    showModal: state.demo.videoShow
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, _store_demo__WEBPACK_IMPORTED_MODULE_3__.actions)(VideoModal));

/***/ }),

/***/ "./components/features/qty.jsx":
/*!*************************************!*\
  !*** ./components/features/qty.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\qty.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Qty(props) {
  const {
    value = 1,
    adClass = "",
    max = 10000,
    changeQty
  } = props;
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrent(value);
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    changeQty && changeQty(current);
  }, [current]);

  function increment() {
    if (max <= 0 || current >= max) return;
    setCurrent(current + 1);
  }

  function decrement() {
    if (current > 1) {
      setCurrent(current - 1);
    }
  }

  function changeCurrent(e) {
    if (parseInt(e.currentTarget.value) < max) {
      setCurrent(parseInt(e.currentTarget.value));
    }
  }

  return __jsx("div", {
    className: `product-details-quantity ${adClass}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "input-group input-spinner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      minWidth: '26px'
    },
    className: "btn btn-decrement btn-spinner",
    onClick: decrement,
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-minus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }))), __jsx("input", {
    type: "number",
    className: "form-control text-center",
    min: "1",
    max: max,
    value: current,
    required: true,
    onChange: changeCurrent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "input-group-append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      minWidth: '26px'
    },
    className: "btn btn-increment btn-spinner",
    type: "button",
    onClick: increment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-plus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Qty);

/***/ }),

/***/ "./components/features/sticky-header.jsx":
/*!***********************************************!*\
  !*** ./components/features/sticky-header.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\sticky-header.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function StickyHeader(props) {
  const {
    top = 210
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)("");
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: height,
    1: setHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('auto');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on('hashChangeComplete', initSticky);
    scrollHandler();
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    window.addEventListener('resize', resizeHandler, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  function initSticky() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + 'px');
  }

  function scrollHandler() {
    let stickyContent = ref.current.children[0];

    if (window.pageYOffset > top) {
      if (!stickyContent.classList.contains('fixed')) {
        stickyContent.classList.add('fixed');
      }
    } else if (stickyContent.classList.contains('fixed')) {
      stickyContent.classList.remove('fixed');
    } else {
      setHeight(stickyContent.offsetHeight + 'px');
    }
  }

  function resizeHandler() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + 'px');
    scrollHandler();
  }

  return __jsx("div", {
    ref: ref,
    className: "sticky-wrapper",
    style: {
      height: height
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (StickyHeader);

/***/ }),

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _partials_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/header/header */ "./components/partials/header/header.jsx");
/* harmony import */ var _partials_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/footer/footer */ "./components/partials/footer/footer.jsx");
/* harmony import */ var _features_modals_video_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/modals/video-modal */ "./components/features/modals/video-modal.jsx");
/* harmony import */ var _features_modals_quickview_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/modals/quickview-modal */ "./components/features/modals/quickview-modal.jsx");
/* harmony import */ var _features_mobile_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/mobile-menu */ "./components/features/mobile-menu.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\layout.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function Layout({
  children,
  hideQuick,
  hideVideo
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)("");
  let scrollTop;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (router.pathname.includes('pages/coming-soon')) {
      document.querySelector("header").classList.add("d-none");
      document.querySelector("footer").classList.add("d-none");
    } else {
      document.querySelector("header").classList.remove("d-none");
      document.querySelector("footer").classList.remove("d-none");
    }
  }, [router.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    hideQuick();
    hideVideo();
    scrollTop = document.querySelector('#scroll-top');
    window.addEventListener('scroll', scrollHandler, false);
  }, []);

  function toScrollTop() {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_12__.isSafariBrowser)() || (0,_utils__WEBPACK_IMPORTED_MODULE_12__.isEdgeBrowser)()) {
      let pos = window.pageYOffset;
      let timerId = setInterval(() => {
        if (pos <= 0) clearInterval(timerId);
        window.scrollBy(0, -120);
        pos -= 120;
      }, 1);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  function scrollHandler() {
    if (window.pageYOffset >= 400) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  }

  function hideMobileMenu() {
    document.querySelector('body').classList.remove('mmenu-active');
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "page-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_partials_header_header__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), children, __jsx(_partials_footer_footer__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "mobile-menu-overlay",
    onClick: hideMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx("button", {
    id: "scroll-top",
    title: "Back to top",
    onClick: toScrollTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon-arrow-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })), __jsx(_features_mobile_menu__WEBPACK_IMPORTED_MODULE_10__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
    autoClose: 3000,
    duration: 300,
    newestOnTo: true,
    className: "toast-container",
    position: "top-right",
    closeButton: false,
    hideProgressBar: true,
    newestOnTop: true,
    draggable: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx(_features_modals_quickview_modal__WEBPACK_IMPORTED_MODULE_9__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx(_features_modals_video_modal__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _objectSpread({}, _store_demo__WEBPACK_IMPORTED_MODULE_11__.actions))(Layout));

/***/ }),

/***/ "./components/partials/footer/footer.jsx":
/*!***********************************************!*\
  !*** ./components/partials/footer/footer.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\footer\\footer.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Footer() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)("");
  const {
    0: isBottomSticky,
    1: setIsBottomSticky
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: containerClass,
    1: setContainerClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('container');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleBottomSticky();
    setContainerClass(router.asPath.includes('fullwidth') ? 'container-fluid' : 'container');
  }, [router.asPath]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', handleBottomSticky, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', handleBottomSticky);
    };
  }, []);

  function handleBottomSticky() {
    setIsBottomSticky(router.pathname.includes('product/default') && window.innerWidth > 991);
  }

  return __jsx("footer", {
    className: "footer footer-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-sm-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget widget-about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "images/logo.png",
    className: "footer-logo",
    alt: "Footer Logo",
    width: "105",
    height: "25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. "), __jsx("div", {
    className: "widget-about-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "col-sm-6 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "widget-about-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 45
    }
  }, "Got Question? Call us 24/7"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "tel:123456789",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 45
    }
  }, "+0123 456 789")), __jsx("div", {
    className: "col-sm-6 col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "widget-about-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  }, "Payment Method"), __jsx("figure", {
    className: "footer-payments",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "images/payments.png",
    alt: "Payment methods",
    width: "272",
    height: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 49
    }
  }))))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "Information"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "About Molla")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    }
  }, "How to shop on Molla")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, "FAQ")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, "Contact us")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, "Log in"))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, "Customer Service"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, "Payment Methods")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }, "Money-back guarantee!")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, "Returns")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, "Shipping")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, "Terms and conditions")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "Privacy Policy"))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "My Account"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, "Sign In")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, "View Cart")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, "My Wishlist")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }, "Track My Order")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, "Help")))))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "footer-copyright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Copyright \xA9 ", new Date().getFullYear(), " Molla Store. All Rights Reserved."), __jsx("ul", {
    className: "footer-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, "Terms Of Use")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, "Privacy Policy"))), __jsx("div", {
    className: "social-icons social-icons-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "social-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "Social Media"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-facebook",
    rel: "noopener noreferrer",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 124
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-twitter",
    rel: "noopener noreferrer",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 122
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-instagram",
    rel: "noopener noreferrer",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 126
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-youtube",
    rel: "noopener noreferrer",
    title: "Youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 122
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-pinterest",
    rel: "noopener noreferrer",
    title: "Pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 126
    }
  }))))), isBottomSticky ? __jsx("div", {
    className: "mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Footer));

/***/ }),

/***/ "./components/partials/header/header.jsx":
/*!***********************************************!*\
  !*** ./components/partials/header/header.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_modals_login_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/features/modals/login-modal */ "./components/features/modals/login-modal.jsx");
/* harmony import */ var _components_partials_header_partials_header_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/partials/header/partials/header-search */ "./components/partials/header/partials/header-search.jsx");
/* harmony import */ var _components_partials_header_partials_wishlist_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/partials/header/partials/wishlist-menu */ "./components/partials/header/partials/wishlist-menu.jsx");
/* harmony import */ var _components_partials_header_partials_cart_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/partials/header/partials/cart-menu */ "./components/partials/header/partials/cart-menu.jsx");
/* harmony import */ var _components_partials_header_partials_category_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/partials/header/partials/category-menu */ "./components/partials/header/partials/category-menu.jsx");
/* harmony import */ var _components_partials_header_partials_main_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/partials/header/partials/main-menu */ "./components/partials/header/partials/main-menu.jsx");
/* harmony import */ var _components_features_sticky_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/features/sticky-header */ "./components/features/sticky-header.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\header\\header.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











function Header() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: containerClass,
    1: setContainerClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('container');

  function openMobileMenu() {
    document.querySelector('body').classList.add('mmenu-active');
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setContainerClass(router.asPath.includes('fullwidth') ? 'container-fluid' : 'container');
  }, [router.asPath]);
  return __jsx("header", {
    className: "header header-2 header-intro-clearance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header-left overflow-hidden mr-3 mr-sm-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "welcome-msg d-flex flex-nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, "Special collection already available."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 73
    }
  }, "\xA0Read more ..."))), __jsx("div", {
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Links"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 45
    }
  }, "USD"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 57
    }
  }, "Eur")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 57
    }
  }, "Usd")))))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 45
    }
  }, "English"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 57
    }
  }, "English")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 57
    }
  }, "French")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 53
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 57
    }
  }, "Spanish")))))), __jsx(_components_features_modals_login_modal__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }))))))), __jsx("div", {
    className: "header-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "mobile-menu-toggler",
    onClick: openMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Toggle mobile menu"), __jsx("i", {
    className: "icon-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/",
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "images/logo.png",
    alt: "Molla Logo",
    width: 104,
    height: 27,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "header-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_components_partials_header_partials_header_search__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/dashboard",
    title: "My account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "Account"))), __jsx(_components_partials_header_partials_wishlist_menu__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }), __jsx(_components_partials_header_partials_cart_menu__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  })))), __jsx(_components_features_sticky_header__WEBPACK_IMPORTED_MODULE_9__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-bottom sticky-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx(_components_partials_header_partials_category_menu__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "header-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx(_components_partials_header_partials_main_menu__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "header-right overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "la la-lightbulb-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }), __jsx("p", {
    className: "text-truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 66
    }
  }, "Clearance", __jsx("span", {
    className: "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 104
    }
  }, "\xA0Up to 30% Off")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/partials/header/partials/cart-menu.jsx":
/*!***********************************************************!*\
  !*** ./components/partials/header/partials/cart-menu.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/index */ "./utils/index.js");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\header\\partials\\cart-menu.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CartMenu(props) {
  const {
    cartlist
  } = props;
  return __jsx("div", {
    className: "dropdown cart-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    className: "dropdown-toggle",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    "data-display": "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-shopping-cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "cart-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, (0,_utils_index__WEBPACK_IMPORTED_MODULE_4__.cartQtyTotal)(cartlist))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Cart")), __jsx("div", {
    className: `dropdown-menu dropdown-menu-right ${cartlist.length === 0 ? 'text-center' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, 0 === cartlist.length ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "No products in the cart.") : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "dropdown-cart-products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, cartlist.map((item, index) => __jsx("div", {
    className: "product justify-content-between",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-cart-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, __jsx("h4", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${item.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 49
    }
  }, item.name)), __jsx("span", {
    className: "cart-product-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "cart-product-qty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 49
    }
  }, item.qty, " "), "x $", item.sale_price ? item.sale_price.toFixed(2) : item.price.toFixed(2))), __jsx("figure", {
    className: "product-image-container ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/product/default/${item.slug}`,
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + item.sm_pictures[0].url,
    alt: "product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 49
    }
  }))), __jsx("button", {
    className: "btn-remove",
    title: "Remove Product",
    onClick: () => props.removeFromCart(item),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 142
    }
  }))))), __jsx("div", {
    className: "dropdown-cart-total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Total"), __jsx("span", {
    className: "cart-total-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "$", (0,_utils_index__WEBPACK_IMPORTED_MODULE_4__.cartPriceTotal)(cartlist).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), __jsx("div", {
    className: "dropdown-cart-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "View Cart"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/checkout",
    className: "btn btn-outline-primary-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 100
    }
  }, "Checkout"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 121
    }
  }))))));
}

function mapStateToProps(state) {
  return {
    cartlist: state.cartlist.data
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, _objectSpread({}, _store_cart__WEBPACK_IMPORTED_MODULE_3__.actions))(CartMenu));

/***/ }),

/***/ "./components/partials/header/partials/category-menu.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/category-menu.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\header\\partials\\category-menu.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CategoryMenu() {
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  return __jsx("div", {
    className: "dropdown category-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    className: "dropdown-toggle",
    title: "Browse Categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Browse Categories"), __jsx("div", {
    className: "dropdown-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "side-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "menu-vertical sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: query.category == 'electronics' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=electronics",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 91
    }
  }, "Electronics")), __jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 89
    }
  }, "Gift Ideas")), __jsx("li", {
    className: query.category == 'beds' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=beds",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 84
    }
  }, "Beds")), __jsx("li", {
    className: query.category == 'lighting' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=lighting",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 88
    }
  }, "Lighting")), __jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 103
    }
  }, "Sofas & Sleeper sofas")), __jsx("li", {
    className: query.category == 'storage' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=storage",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 87
    }
  }, "Storage")), __jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 101
    }
  }, "Armchairs & Chaises")), __jsx("li", {
    className: query.category == 'decoration' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=decoration",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 90
    }
  }, "Decoration ")), __jsx("li", {
    className: query.category == 'kitchen-cabinets' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 96
    }
  }, "Kitchen Cabinets")), __jsx("li", {
    className: query.category == 'coffee-and-tables' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 97
    }
  }, "Coffee & Tables")), __jsx("li", {
    className: query.category == 'furniture' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols?category=furniture",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 89
    }
  }, "Outdoor Furniture "))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoryMenu);

/***/ }),

/***/ "./components/partials/header/partials/header-search.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/header-search.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/server/queries */ "./server/queries.js");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/server/apollo */ "./server/apollo.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\header\\partials\\header-search.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function HeaderSearch() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)("");
  const {
    0: cat,
    1: setCat
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchProducts, {
    data
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_5__.GET_PRODUCTS);
  const result = data && data.products.data;
  const {
    0: timer,
    1: setTimer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector("body").addEventListener('click', closeSearchForm);
    return () => {
      document.querySelector("body").removeEventListener('click', closeSearchForm);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (result && searchTerm.length > 2) setProducts(result.reduce((acc, product) => {
      let max = 0;
      let min = 999999;
      product.variants.map(item => {
        if (min > item.price) min = item.price;
        if (max < item.price) max = item.price;
      }, []);

      if (product.variants.length == 0) {
        min = product.sale_price ? product.sale_price : product.price;
        max = product.price;
      }

      return [...acc, _objectSpread(_objectSpread({}, product), {}, {
        minPrice: min,
        maxPrice: max
      })];
    }, []));
  }, [result, searchTerm]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchTerm.length > 2) {
      if (timer) clearTimeout(timer);
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            searchTerm: searchTerm,
            category: cat
          }
        });
      }, 500);
      setTimer(timerId);
    }
  }, [searchTerm, cat]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);

  function matchEmphasize(name) {
    let regExp = new RegExp(searchTerm, "i");
    return name.replace(regExp, match => "<strong>" + match + "</strong>");
  }

  function closeSearchForm(e) {
    document.querySelector('.header .header-search').classList.remove('show');
  }

  function onCatSelect(e) {
    setCat(e.target.value);
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function showSearchForm(e) {
    document.querySelector('.header .header-search').classList.add('show');
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: cat
      }
    });
  }

  function goProductPage() {
    setSearchTerm('');
    setProducts([]);
  }

  return __jsx("div", {
    className: "header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "search-toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 47
    }
  })), __jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    onClick: showSearchForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-search-wrapper search-wrapper-wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "q",
    className: "sr-only",
    value: searchTerm,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Search"), __jsx("input", {
    type: "text",
    onChange: onSearchChange,
    value: searchTerm,
    className: "form-control",
    name: "q",
    placeholder: "Search product ...",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 71
    }
  })), __jsx("div", {
    className: "live-search-list",
    onClick: goProductPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, products.length > 0 && searchTerm.length > 2 ? __jsx("div", {
    className: "autocomplete-suggestions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, searchTerm.length > 2 && products.map((product, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    className: "autocomplete-suggestion",
    key: `search-result-${index}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    width: 40,
    height: 40,
    alt: "product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "search-name",
    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_7__.safeContent)(matchEmphasize(product.name)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "search-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 49
    }
  }, product.stock == 0 ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 61
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 65
    }
  }, "$", product.price.toFixed(2))) : product.minPrice == product.maxPrice ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 65
    }
  }, "$", product.minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 69
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 73
    }
  }, "$", product.minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 73
    }
  }, "$", product.maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 69
    }
  }, "$", product.minPrice.toFixed(2), "\u2013$", product.maxPrice.toFixed(2)))))) : ""))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_6__.default)({
  ssr: true
})(HeaderSearch));

/***/ }),

/***/ "./components/partials/header/partials/main-menu.jsx":
/*!***********************************************************!*\
  !*** ./components/partials/header/partials/main-menu.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\header\\partials\\main-menu.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function MainMenu() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  let path = router.asPath;
  let query = router.query;

  function showAllDemos(e) {
    let demoItems = document.querySelectorAll('.demo-item.hidden');

    for (let i = 0; i < demoItems.length; i++) {
      demoItems[i].classList.toggle('show');
    }

    document.querySelector('.view-all-demos').classList.toggle('disabled-hidden');
    e.preventDefault();
  }

  return __jsx("nav", {
    className: "main-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "menu sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: `megamenu-container ${path === '/' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Home"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "Choose your demo"), __jsx("div", {
    className: "demo-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-1`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/1.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, "01 - furniture store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-2`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/2.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, "02 - furniture store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-3`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/3.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, "03 - electronic store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-4`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/4.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, "04 - electronic store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-5`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/5.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "05 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-6`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/6.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, "06 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-7`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/7.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, "07 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-8`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/8.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, "08 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-9`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/9.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, "09 - fashion store"))), __jsx("div", {
    className: "demo-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-10`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/10.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }, "10 - shoes store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-11`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/11.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 41
    }
  }, "11 - furniture simple store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-12`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/12.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }, "12 - fashion simple store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-13`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/13.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }, "13 - market"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-14`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/14.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, "14 - market fullwidth"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-15`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/15.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  }, "15 - lookbook 1"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-16`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/16.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 41
    }
  }, "16 - lookbook 2"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-17`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/17.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 41
    }
  }, "17 - fashion store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-18`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/18.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 41
    }
  }, "18 - fashion store (with sidebar)"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-19`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/19.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, "19 - games store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-20`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/20.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }, "20 - book store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-21`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/21.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 41
    }
  }, "21 - sport store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-22`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/22.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 41
    }
  }, "22 - tools store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-23`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/23.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 41
    }
  }, "23 - fashion left navigation store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-24`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/24.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 41
    }
  }, "24 - extreme sport store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-25`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/25.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }, "25 - jewelry store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-26`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/26.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 41
    }
  }, "26 - market store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-27`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/27.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }, "27 - fashion store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-28`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/28.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 41
    }
  }, "28 - food market store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-29`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/29.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 41
    }
  }, "29 - t-shirts store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-30`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/30.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 41
    }
  }, "30 - headphones store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-31`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/31.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 41
    }
  }, "31 - yoga store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-32`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/32.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 41
    }
  }, "32 - sunglasses store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-33`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/33.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 41
    }
  }, "33 - cosmetics store"))), __jsx("div", {
    className: "demo-item hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: `${"http://d-themes.com/react/molla"}demo-34`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/34.jpg' )"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "demo-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 41
    }
  }, "34 - car parts")))), __jsx("div", {
    className: "megamenu-action text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: "btn btn-outline-primary-2 view-all-demos",
    onClick: showAllDemos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 37
    }
  }, "View All Demos"), __jsx("i", {
    className: "icon-long-arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 37
    }
  })))))), __jsx("li", {
    className: path.indexOf("/shop") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 21
    }
  }, "Shop"), __jsx("div", {
    className: "megamenu megamenu-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 45
    }
  }, "Shop with sidebar"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == 'list' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 147
    }
  }, "Shop List")), __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '2cols' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/2cols",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 148
    }
  }, "Shop Grid 2 Columns")), __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '3cols' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/3cols",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 148
    }
  }, "Shop Grid 3 Columns")), __jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '4cols' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/4cols",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 148
    }
  }, "Shop Grid 4 Columns")), __jsx("li", {
    className: path.indexOf("shop/market") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/market",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 118
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 145
    }
  }, "Shop Market", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 162
    }
  }, "New"))))), __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 45
    }
  }, "Shop no sidebar"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/nosidebar") > -1 && query.type == 'boxed' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/nosidebar/boxed",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 150
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 203
    }
  }, "Shop Boxed No Sidebar", __jsx("span", {
    className: "tip tip-hot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 230
    }
  }, "Hot")))), __jsx("li", {
    className: path.indexOf("shop/nosidebar") > -1 && query.type == 'fullwidth' ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/nosidebar/fullwidth",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 154
    }
  }, "Shop Fullwidth No Sidebar")))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 45
    }
  }, "Product Category"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/category/boxed") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/category/boxed",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 126
    }
  }, "Product Category Boxed")), __jsx("li", {
    className: path.indexOf("shop/category/fullwidth") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/category/fullwidth",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 130
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 186
    }
  }, "Product Category Fullwidth", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 218
    }
  }, "New"))))), __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 45
    }
  }, "Shop Pages"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: path.indexOf("shop/cart") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 116
    }
  }, "Cart")), __jsx("li", {
    className: path.indexOf("shop/checkout") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 120
    }
  }, "Checkout")), __jsx("li", {
    className: path.indexOf("shop/wishlist") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 120
    }
  }, "Wishlist")), __jsx("li", {
    className: path.indexOf("shop/dashboard") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 121
    }
  }, "My Account")), __jsx("li", {
    className: path.indexOf("#Lookbook") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 116
    }
  }, "Lookbook"))))))), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/sidebar/list",
    className: "banner banner-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/menu/banner-1.jpg",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "banner-content banner-content-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 45
    }
  }, "Last ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 91
    }
  }), "Chance", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 103
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 109
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 115
    }
  }, "Sale")))))))))), __jsx("li", {
    className: path.indexOf("product/") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, "Product"), __jsx("div", {
    className: "megamenu megamenu-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 37
    }
  }, "Product Details"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 114
    }
  }, "Default")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/beige-ring-handle-circle-cross-body-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 115
    }
  }, "Centered")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/extended/yellow-tie-strap-block-heel-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 115
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 183
    }
  }, "Extended Info", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 202
    }
  }, "New")))), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/gallery/beige-metal-hoop-tote-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 114
    }
  }, "Gallery")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/sticky/brown-faux-fur-longline-coat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 113
    }
  }, "Sticky Info")), __jsx("li", {
    className: path.indexOf("product/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/sidebar/beige-v-neck-button-cardigan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 114
    }
  }, "Boxed With Sidebar")), __jsx("li", {
    className: path.indexOf("product/fullwidth") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/fullwidth/black-faux-leather-chain-trim-sandals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 116
    }
  }, "Full Width")), __jsx("li", {
    className: path.indexOf("product/masonry") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 41
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/masonry/black-denim-dungaree-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 114
    }
  }, "Masonry Sticky Info"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/menu/banner-2.jpg",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 45
    }
  }, "New Trends", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 96
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 102
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 108
    }
  }, "spring ", new Date().getFullYear())))))))))), __jsx("li", {
    className: path.indexOf("pages") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 21
    }
  }, "Pages"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: path.indexOf("pages/about") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 29
    }
  }, "About"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("pages/about") > -1 && path.indexOf("pages/about-2") === -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 144
    }
  }, "About 01")), __jsx("li", {
    className: path.indexOf("pages/about-2") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/about-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 104
    }
  }, "About 02")))), __jsx("li", {
    className: path.indexOf("pages/contact") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 29
    }
  }, "Contact"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("pages/contact") > -1 && path.indexOf("pages/contact-2") === -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 148
    }
  }, "Contact 01")), __jsx("li", {
    className: path.indexOf("pages/contact-2") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/contact-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 106
    }
  }, "Contact 02")))), __jsx("li", {
    className: path.indexOf("pages/login") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 94
    }
  }, "Login")), __jsx("li", {
    className: path.indexOf("pages/faq") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 92
    }
  }, "FAQs")), __jsx("li", {
    className: path.indexOf("404") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/404",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 86
    }
  }, "Error 404")), __jsx("li", {
    className: path.indexOf("pages/coming-soon") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/pages/coming-soon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 100
    }
  }, "Coming Soon")))), __jsx("li", {
    className: path.indexOf("blog/") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/classic",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 21
    }
  }, "Blog"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: path.indexOf("blog/classic") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/classic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 95
    }
  }, "Classic")), __jsx("li", {
    className: path.indexOf("blog/listing") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/listing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 95
    }
  }, "Listing")), __jsx("li", {
    className: path.indexOf("blog/grid") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/2cols",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 29
    }
  }, "Grid"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/grid/2cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 106
    }
  }, "Grid 2 columns")), __jsx("li", {
    className: path.indexOf("blog/grid/3cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 106
    }
  }, "Grid 3 columns")), __jsx("li", {
    className: path.indexOf("blog/grid/4cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 106
    }
  }, "Grid 4 columns")), __jsx("li", {
    className: path.indexOf("blog/grid/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/grid/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 108
    }
  }, "Grid sidebar")))), __jsx("li", {
    className: path.indexOf("blog/masonry") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/2cols",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 29
    }
  }, "Masonry"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/masonry/2cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/2cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 109
    }
  }, "Masonry 2 columns")), __jsx("li", {
    className: path.indexOf("blog/masonry/3cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/3cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 109
    }
  }, "Masonry 3 columns")), __jsx("li", {
    className: path.indexOf("blog/masonry/4cols") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/4cols",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 109
    }
  }, "Masonry 4 columns")), __jsx("li", {
    className: path.indexOf("blog/masonry/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/masonry/sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 111
    }
  }, "Masonry sidebar")))), __jsx("li", {
    className: path.indexOf("blog/mask") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/mask/grid",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 29
    }
  }, "Mask"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/mask/grid") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/mask/grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 105
    }
  }, "Blog Mask Grid")), __jsx("li", {
    className: path.indexOf("blog/mask/masonry") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/mask/masonry",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 108
    }
  }, "Blog Mask Masonry")))), __jsx("li", {
    className: path.indexOf("blog/single") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 29
    }
  }, "Single Post"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: path.indexOf("blog/single/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 110
    }
  }, "Default with sidebar")), __jsx("li", {
    className: path.indexOf("blog/single/fullwidth") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/fullwidth/fusce-pellentesque-suscipit.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 112
    }
  }, "Fullwidth no sidebar")), __jsx("li", {
    className: path.indexOf("blog/single/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 33
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/blog/single/sidebar/utaliquam-sollicitzdvudin-leo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 110
    }
  }, "Fullwidth with sidebar")))))), __jsx("li", {
    className: path.indexOf("element") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements",
    className: "sf-with-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 21
    }
  }, "Elements"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: path.indexOf("elements/products") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 100
    }
  }, "Products")), __jsx("li", {
    className: path.indexOf("elements/typography") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/typography",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 102
    }
  }, "Typography")), __jsx("li", {
    className: path.indexOf("elements/titles") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 98
    }
  }, "Titles")), __jsx("li", {
    className: path.indexOf("elements/banners") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 99
    }
  }, "Banners")), __jsx("li", {
    className: path.indexOf("elements/categories") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 102
    }
  }, "Product Category")), __jsx("li", {
    className: path.indexOf("elements/video-banners") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/video-banners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 105
    }
  }, "Video Banners")), __jsx("li", {
    className: path.indexOf("elements/buttons") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 99
    }
  }, "Buttons")), __jsx("li", {
    className: path.indexOf("elements/accordions") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/accordions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 102
    }
  }, "Accordions")), __jsx("li", {
    className: path.indexOf("elements/tabs") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 96
    }
  }, "Tabs")), __jsx("li", {
    className: path.indexOf("elements/testimonials") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 104
    }
  }, "Testimonials")), __jsx("li", {
    className: path.indexOf("elements/blog-posts") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/blog-posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 102
    }
  }, "Blog Posts")), __jsx("li", {
    className: path.indexOf("elements/cta") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/cta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 95
    }
  }, "Call to Action")), __jsx("li", {
    className: path.indexOf("elements/icon-boxes") > -1 ? "active" : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/elements/icon-boxes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 102
    }
  }, "Icon Boxes"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./components/partials/header/partials/wishlist-menu.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/header/partials/wishlist-menu.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\header\\partials\\wishlist-menu.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function WishlistMenu(props) {
  const {
    wishlist
  } = props;
  return __jsx("div", {
    className: "wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/shop/wishlist",
    title: "Wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-heart-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "wishlist-count badge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, wishlist.length)), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Wishlist")));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {})(WishlistMenu));

/***/ }),

/***/ "./components/partials/product/details/detail-one.jsx":
/*!************************************************************!*\
  !*** ./components/partials/product/details/detail-one.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slide-toggle */ "react-slide-toggle");
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _components_features_qty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/features/qty */ "./components/features/qty.jsx");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/store/cart */ "./store/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/utils */ "./utils/index.js");
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\partials\\product\\details\\detail-one.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function DetailOne(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    product
  } = props;
  const {
    0: qty,
    1: setQty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: qty2,
    1: setQty2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: colorArray,
    1: setColorArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: sizeArray,
    1: setSizeArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: variationGroup,
    1: setVariationGroup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    color: null,
    colorName: null,
    price: null,
    size: ""
  });
  const {
    0: showClear,
    1: setShowClear
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showVariationPrice,
    1: setShowVariationPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = 99999;
    let max = 0;
    setVariationGroup(product.variants.reduce((acc, cur) => {
      cur.size.map(item => {
        acc.push({
          color: cur.color,
          colorName: cur.color_name,
          size: item.name,
          price: cur.price
        });
      });
      if (min > cur.price) min = cur.price;
      if (max < cur.price) max = cur.price;
      return acc;
    }, []));

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, [product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedVariant({
      color: null,
      colorName: null,
      price: null,
      size: ""
    });
    setQty(1);
    setQty2(1);
  }, [router.query.slug]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    scrollHandler();
  }, [router.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
    setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
    let toggle = ref.current.querySelector('.variation-toggle');

    if (toggle) {
      if (selectedVariant.color && selectedVariant.size != "" && toggle.classList.contains('collapsed')) {
        toggle.click();
      }

      if (!(selectedVariant.color && selectedVariant.size != "") && !toggle.classList.contains('collapsed')) {
        toggle.click();
      }
    }
  }, [selectedVariant]);

  function scrollHandler() {
    if (router.pathname.includes('/product/default')) {
      let stickyBar = ref.current.querySelector('.sticky-bar');

      if (stickyBar.classList.contains('d-none') && ref.current.getBoundingClientRect().bottom < 0) {
        stickyBar.classList.remove('d-none');
        return;
      }

      if (!stickyBar.classList.contains('d-none') && ref.current.getBoundingClientRect().bottom > 0) {
        stickyBar.classList.add('d-none');
      }
    }
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function refreshSelectableGroup() {
    let tempArray = [...variationGroup];

    if (selectedVariant.color) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.color !== cur.color) {
          return acc;
        }

        return [...acc, cur];
      }, []);
    }

    setSizeArray(tempArray.reduce((acc, cur) => {
      if (acc.findIndex(item => item.size == cur.size) !== -1) return acc;
      return [...acc, cur];
    }, []));
    tempArray = [...variationGroup];

    if (selectedVariant.size) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.size !== cur.size) {
          return acc;
        }

        return [...acc, cur];
      }, []);
    }

    setColorArray(product.variants.reduce((acc, cur) => {
      if (tempArray.findIndex(item => item.color == cur.color) == -1) {
        return [...acc, {
          color: cur.color,
          colorName: cur.color_name,
          price: cur.price,
          disabled: true
        }];
      }

      return [...acc, {
        color: cur.color,
        colorName: cur.color_name,
        price: cur.price,
        disabled: false
      }];
    }, []));
  }

  function selectColor(e, item) {
    e.preventDefault();

    if (item.color == selectedVariant.color) {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        color: null,
        colorName: null,
        price: item.price
      }));
    } else {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        color: item.color,
        colorName: item.colorName,
        price: item.price
      }));
    }
  }

  function selectSize(e) {
    if (e.target.value == "") {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        size: ""
      }));
    } else {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        size: e.target.value
      }));
    }
  }

  function onChangeQty(current) {
    setQty(current);
  }

  function onChangeQty2(current) {
    setQty2(current);
  }

  function clearSelection(e) {
    e.preventDefault();
    setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
      color: null,
      colorName: null,
      size: ""
    }));
    refreshSelectableGroup();
  }

  function onCartClick(e, index = 0) {
    e.preventDefault();
    if (e.currentTarget.classList.contains('btn-disabled')) return;

    let newProduct = _objectSpread({}, product);

    if (product.variants.length > 0) {
      newProduct = _objectSpread(_objectSpread({}, product), {}, {
        name: product.name + ' - ' + selectedVariant.colorName + ', ' + selectedVariant.size,
        price: selectedVariant.price
      });
    }

    props.addToCart(newProduct, index == 0 ? qty : qty2);
  }

  if (!product) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 16
      }
    });
  }

  return __jsx("div", {
    className: "product-details",
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, product.name), __jsx("div", {
    className: "ratings-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ratings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "tooltip-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, "( ", product.review, " Reviews )")), product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, minPrice == maxPrice ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 37
    }
  }, "$", product.price.toFixed(2)) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 33
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 29
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, product.short_desc)), product.variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 29
    }
  }, "Color:"), __jsx("div", {
    className: "product-nav product-nav-dots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }, colorArray.map((item, index) => __jsx("a", {
    href: "#",
    className: `${(item.color == selectedVariant.color ? 'active ' : '') + (item.disabled ? 'disabled' : '')}`,
    style: {
      backgroundColor: item.color
    },
    key: index,
    onClick: e => selectColor(e, item),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 29
    }
  }, "Size:"), __jsx("div", {
    className: "select-custom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 29
    }
  }, __jsx("select", {
    name: "size",
    className: "form-control",
    value: selectedVariant.size,
    onChange: selectSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 37
    }
  }, "Select a size"), sizeArray.map((item, index) => __jsx("option", {
    value: item.size,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 45
    }
  }, item.size)))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "size-guide mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-th-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 33
    }
  }), "size guide"), showClear ? __jsx("a", {
    href: "#",
    onClick: clearSelection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 37
    }
  }, "clear") : ""), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: `d-none variation-toggle ${toggleState.toLowerCase()}`,
    onClick: onToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 37
    }
  }), __jsx("div", {
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 41
    }
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0))))) : "", __jsx("div", {
    className: "details-filter-row details-row-size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "qty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }, "Qty:"), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__.default, {
    changeQty: onChangeQty,
    max: product.stock,
    value: qty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "product-details-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: e => onCartClick(e, 0),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, "add to cart")), __jsx("div", {
    className: "details-action-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 113
    }
  }, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 106
    }
  }, "Add to Wishlist")))), __jsx("div", {
    className: "product-details-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-cat w-100 text-truncate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }, "Category:"), product.category.map((cat, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: cat.slug
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 33
    }
  }, cat.name), index < product.category.length - 1 ? ',' : ''))), __jsx("div", {
    className: "social-icons social-icons-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "social-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }, "Share:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 25
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "#",
    className: "social-icon",
    title: "Pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon-pinterest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "sticky-bar d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 25
    }
  }, __jsx("figure", {
    className: "product-media",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "http://localhost:4000" + product.sm_pictures[0].url,
    alt: "product",
    width: product.sm_pictures[0].width,
    height: product.sm_pictures[0].height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 37
    }
  }))), __jsx("h3", {
    className: "product-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 29
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: `/product/default/${product.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 33
    }
  }, product.name))), __jsx("div", {
    className: "col-6 justify-content-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, selectedVariant.color && selectedVariant.size != "" ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 37
    }
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0) : product.stock == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "out-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 45
    }
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 45
    }
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 53
    }
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 53
    }
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 49
    }
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__.default, {
    changeQty: onChangeQty2,
    max: product.stock,
    value: qty2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "product-details-action",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.canAddToCart)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: e => onCartClick(e, 1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 37
    }
  }, "add to cart")), (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isInWishlist)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 41
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 125
    }
  }, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 41
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 118
    }
  }, "Add to Wishlist"))))))));
}

const mapStateToProps = state => {
  return {
    cartlist: state.cartlist.data,
    wishlist: state.wishlist.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_7__.actions))(DetailOne));

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index.js */ "./store/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/public/scss/plugins/owl-carousel/owl.carousel.scss */ "./public/scss/plugins/owl-carousel/owl.carousel.scss");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/public/scss/style.scss */ "./public/scss/style.scss");
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_scss_style_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\pages\\_app.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const WrappedApp = ({
  Component,
  pageProps
}) => {
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (store.getState().demo.current != "1") {
      store.dispatch(_store_demo__WEBPACK_IMPORTED_MODULE_6__.actions.refreshStore("1"));
    }
  }, []);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {
    persistor: store.__persistor,
    loading: __jsx("div", {
      className: "loading-overlay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "bounce-loader",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bounce1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "bounce2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "bounce3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "Molla React Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "description",
    content: "Molla \u2013  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "author",
    content: "d-themes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Molla",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "application-name",
    content: "Molla React eCommerce Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#cc9966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "images/icons/browserconfig.xml",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Molla - React eCommerce Template"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images/icons/apple-touch-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "images/icons/favicon-32x32.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "images/icons/favicon-16x16.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "images/icons/site.webmanifest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "images/icons/safari-pinned-tab.svg",
    color: "#666666",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "images/icons/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  })))));
};

WrappedApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store_index_js__WEBPACK_IMPORTED_MODULE_4__.wrapper.withRedux(WrappedApp));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-saga */ "./store/root-saga.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ "./store/cart.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist */ "./store/wishlist.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare */ "./store/compare.js");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo */ "./store/demo.js");




 // import storage from 'redux-persist/lib/storage';
// Import Reducers





const rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  cartlist: _cart__WEBPACK_IMPORTED_MODULE_5__.default,
  wishlist: _wishlist__WEBPACK_IMPORTED_MODULE_6__.default,
  comparelist: _compare__WEBPACK_IMPORTED_MODULE_7__.default,
  demo: _demo__WEBPACK_IMPORTED_MODULE_8__.default
}); // const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducers)

const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
const makeStore = context => {
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducers, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_3__.default);
  store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);
  return store;
}; // export default makeStore;

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./store/root-saga.js":
/*!****************************!*\
  !*** ./store/root-saga.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ "./store/cart.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist */ "./store/wishlist.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare */ "./store/compare.js");




function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,_cart__WEBPACK_IMPORTED_MODULE_1__.cartSaga)(), (0,_wishlist__WEBPACK_IMPORTED_MODULE_2__.wishlistSaga)(), (0,_compare__WEBPACK_IMPORTED_MODULE_3__.compareSaga)()]);
}

/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/scss/plugins/owl-carousel/owl.carousel.scss":
/*!************************************************************!*\
  !*** ./public/scss/plugins/owl-carousel/owl.carousel.scss ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/scss/style.scss":
/*!********************************!*\
  !*** ./public/scss/style.scss ***!
  \********************************/
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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_features_alink_jsx-components_features_owl-carousel_jsx-server_apollo_js-server_qu-bc3a19"], function() { return __webpack_exec__("./pages/_app.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9iaWxlLW1lbnUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbG9naW4tbW9kYWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvcXVpY2t2aWV3LW1vZGFsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL3ZpZGVvLW1vZGFsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcXR5LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvc3RpY2t5LWhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL2xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2NhcnQtbWVudS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9jYXRlZ29yeS1tZW51LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2hlYWRlci1zZWFyY2guanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvbWFpbi1tZW51LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL3dpc2hsaXN0LW1lbnUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbHMvZGV0YWlsLW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvcm9vdC1zYWdhLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10YWJzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIk1vYmlsZU1lbnUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXZlbnRzIiwib24iLCJoaWRlTW9iaWxlTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXRTZWFyY2hGb3JtIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImNhdGVnb3J5Iiwib25Ub2dnbGUiLCJzZXRDb2xsYXBzaWJsZUVsZW1lbnQiLCJ0b2dnbGVTdGF0ZSIsInRvTG93ZXJDYXNlIiwiUmVhY3QiLCJjdXN0b21TdHlsZXMiLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiTW9kYWwiLCJMb2dpbk1vZGFsIiwib3BlbiIsInNldE9wZW4iLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImNsb3NlTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJvcGVuTW9kYWwiLCJwYWRkaW5nVG9wIiwiUXVpY2tWaWV3TW9kYWwiLCJwcm9wcyIsInNsdWciLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfUFJPRFVDVCIsInZhcmlhYmxlcyIsIm9ubHlEYXRhIiwicHJvZHVjdCIsInNpbmdsZSIsImNhcm91c2VsUmVmIiwic2V0Q2Fyb3VzZWxSZWYiLCJvblRyYW5zbGF0ZSIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJpbmRleCIsImFkZCIsImN1cnJlbnQiLCJnb1RvIiwib2ZmIiwiaGlkZVF1aWNrIiwiY2hhbmdlQmdJbWFnZSIsImN1cnJlbnRUYXJnZXQiLCJtb2RhbFNob3ciLCJuZXciLCJzYWxlX3ByaWNlIiwidG9wIiwic3RvY2siLCJwaWN0dXJlcyIsIm1hcCIsInByb2Nlc3MiLCJ1cmwiLCJoZWlnaHQiLCJ3aWR0aCIsImlkIiwic21fcGljdHVyZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRlbW8iLCJxdWlja1Nob3ciLCJ3aXRoQXBvbGxvIiwic3NyIiwiY29ubmVjdCIsImRlbW9BY3Rpb24iLCJjb250ZW50IiwidHJhbnNmb3JtIiwiVmlkZW9Nb2RhbCIsInNob3dNb2RhbCIsImNsb3NlSGFuZGxlciIsImhpZGVWaWRlbyIsInZpZGVvU2hvdyIsImFjdGlvbnMiLCJRdHkiLCJhZENsYXNzIiwibWF4IiwiY2hhbmdlUXR5Iiwic2V0Q3VycmVudCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImNoYW5nZUN1cnJlbnQiLCJwYXJzZUludCIsIm1pbldpZHRoIiwiU3RpY2t5SGVhZGVyIiwicmVmIiwidXNlUmVmIiwic2V0SGVpZ2h0IiwiaW5pdFN0aWNreSIsInNjcm9sbEhhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RpY2t5Q29udGVudCIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJjb250YWlucyIsIkxheW91dCIsInNjcm9sbFRvcCIsImluY2x1ZGVzIiwidG9TY3JvbGxUb3AiLCJpc1NhZmFyaUJyb3dzZXIiLCJpc0VkZ2VCcm93c2VyIiwicG9zIiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbEJ5Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIkZvb3RlciIsImlzQm90dG9tU3RpY2t5Iiwic2V0SXNCb3R0b21TdGlja3kiLCJjb250YWluZXJDbGFzcyIsInNldENvbnRhaW5lckNsYXNzIiwiaGFuZGxlQm90dG9tU3RpY2t5IiwiYXNQYXRoIiwiaW5uZXJXaWR0aCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkhlYWRlciIsIm9wZW5Nb2JpbGVNZW51IiwiQ2FydE1lbnUiLCJjYXJ0bGlzdCIsImNhcnRRdHlUb3RhbCIsImxlbmd0aCIsIm5hbWUiLCJxdHkiLCJ0b0ZpeGVkIiwicHJpY2UiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRQcmljZVRvdGFsIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDYXRlZ29yeU1lbnUiLCJIZWFkZXJTZWFyY2giLCJjYXQiLCJzZXRDYXQiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoUHJvZHVjdHMiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJyZXN1bHQiLCJzZXRUaW1lciIsImNsb3NlU2VhcmNoRm9ybSIsInJlZHVjZSIsImFjYyIsIm1pbiIsInZhcmlhbnRzIiwibWluUHJpY2UiLCJtYXhQcmljZSIsIm1hdGNoRW1waGFzaXplIiwicmVnRXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIm1hdGNoIiwib25DYXRTZWxlY3QiLCJzaG93U2VhcmNoRm9ybSIsImdvUHJvZHVjdFBhZ2UiLCJzYWZlQ29udGVudCIsIk1haW5NZW51IiwicGF0aCIsInNob3dBbGxEZW1vcyIsImRlbW9JdGVtcyIsImkiLCJ0b2dnbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbmRleE9mIiwidHlwZSIsIldpc2hsaXN0TWVudSIsIndpc2hsaXN0IiwiRGV0YWlsT25lIiwic2V0UXR5IiwicXR5MiIsInNldFF0eTIiLCJjb2xvckFycmF5Iiwic2V0Q29sb3JBcnJheSIsInNpemVBcnJheSIsInNldFNpemVBcnJheSIsInZhcmlhdGlvbkdyb3VwIiwic2V0VmFyaWF0aW9uR3JvdXAiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJjb2xvciIsImNvbG9yTmFtZSIsInNpemUiLCJzaG93Q2xlYXIiLCJzZXRTaG93Q2xlYXIiLCJzaG93VmFyaWF0aW9uUHJpY2UiLCJzZXRTaG93VmFyaWF0aW9uUHJpY2UiLCJzZXRNYXhQcmljZSIsInNldE1pblByaWNlIiwiY3VyIiwiY29sb3JfbmFtZSIsInJlZnJlc2hTZWxlY3RhYmxlR3JvdXAiLCJjbGljayIsInN0aWNreUJhciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsIm9uV2lzaGxpc3RDbGljayIsImlzSW5XaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJ0ZW1wQXJyYXkiLCJmaW5kSW5kZXgiLCJkaXNhYmxlZCIsInNlbGVjdENvbG9yIiwic2VsZWN0U2l6ZSIsIm9uQ2hhbmdlUXR5Iiwib25DaGFuZ2VRdHkyIiwiY2xlYXJTZWxlY3Rpb24iLCJvbkNhcnRDbGljayIsIm5ld1Byb2R1Y3QiLCJhZGRUb0NhcnQiLCJyYXRpbmdzIiwicmV2aWV3Iiwic2hvcnRfZGVzYyIsIm92ZXJmbG93IiwiY2FuQWRkVG9DYXJ0Iiwid2lzaGxpc3RBY3Rpb24iLCJjYXJ0QWN0aW9uIiwiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwiX19wZXJzaXN0b3IiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3cmFwcGVyIiwicm9vdFJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiY2FydFJlZHVjZXIiLCJ3aXNobGlzdFJlZHVjZXIiLCJjb21wYXJlbGlzdCIsImNvbXBhcmVSZWR1Y2VyIiwiZGVtb1JlZHVjZXIiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsInBlcnNpc3RTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFsbCIsImNhcnRTYWdhIiwid2lzaGxpc3RTYWdhIiwiY29tcGFyZVNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFVBQVQsR0FBdUI7QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFFQyxVQUFGO0FBQUEsT0FBY0M7QUFB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bnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFicywgVGFiTGlzdCwgVGFiLCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgU2xpZGVUb2dnbGUgZnJvbSAncmVhY3Qtc2xpZGUtdG9nZ2xlJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gTW9iaWxlTWVudSAoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSBdID0gdXNlU3RhdGUoIFwiXCIgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCAncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhpZGVNb2JpbGVNZW51ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1vYmlsZU1lbnUgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdtbWVudS1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TZWFyY2hDaGFuZ2UgKCBlICkge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oIGUudGFyZ2V0LnZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXRTZWFyY2hGb3JtICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWNvbnRhaW5lciBtb2JpbGUtbWVudS1saWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWNsb3NlXCIgb25DbGljaz17IGhpZGVNb2JpbGVNZW51IH0+PGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZVwiPjwvaT48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXsgb25TdWJtaXRTZWFyY2hGb3JtIH0gY2xhc3NOYW1lPVwibW9iaWxlLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW9iaWxlLXNlYXJjaFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5TZWFyY2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXsgc2VhcmNoVGVybSB9IG9uQ2hhbmdlPXsgb25TZWFyY2hDaGFuZ2UgfSBuYW1lPVwibW9iaWxlLXNlYXJjaFwiIGlkPVwibW9iaWxlLXNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHByb2R1Y3QgLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj48aSBjbGFzc05hbWU9XCJpY29uLXNlYXJjaFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFicyBkZWZhdWx0SW5kZXg9eyAwIH0gc2VsZWN0ZWRUYWJDbGFzc05hbWU9XCJzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3QgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscy1tb2JpbGVcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5DYXRlZ29yaWVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDEgLSBmdXJuaXR1cmUgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yL1wiIHRhcmdldD1cIl9ibGFua1wiPjAyIC0gZnVybml0dXJlIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wMyAtIGVsZWN0cm9uaWMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby00L1wiIHRhcmdldD1cIl9ibGFua1wiPjA0IC0gZWxlY3Ryb25pYyBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDUgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tNi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wNiAtIGZhc2hpb24gc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby03L1wiIHRhcmdldD1cIl9ibGFua1wiPjA3IC0gZmFzaGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDggLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tOS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wOSAtIGZhc2hpb24gc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0xMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4xMCAtIHNob2VzIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTEgLSBmdXJuaXR1cmUgc2ltcGxlIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTIgLSBmYXNoaW9uIHNpbXBsZSBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTEzL1wiIHRhcmdldD1cIl9ibGFua1wiPjEzIC0gbWFya2V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTQgLSBtYXJrZXQgZnVsbHdpZHRoPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTUgLSBsb29rYm9vayAxPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTYgLSBsb29rYm9vayAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTcgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTggLSBmYXNoaW9uIHN0b3JlICh3aXRoIHNpZGViYXIpPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTkgLSBnYW1lcyBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTIwL1wiIHRhcmdldD1cIl9ibGFua1wiPjIwIC0gYm9vayBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTIxL1wiIHRhcmdldD1cIl9ibGFua1wiPjIxIC0gc3BvcnQgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yMi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yMiAtIHRvb2xzIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjMgLSBmYXNoaW9uIGxlZnQgbmF2aWdhdGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI0L1wiIHRhcmdldD1cIl9ibGFua1wiPjI0IC0gZXh0cmVtZSBzcG9ydCBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI1L1wiIHRhcmdldD1cIl9ibGFua1wiPjI1IC0gamV3ZWxyeSBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI2L1wiIHRhcmdldD1cIl9ibGFua1wiPjI2IC0gbWFya2V0IHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjcgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjggLSBmb29kIG1hcmtldCBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI5L1wiIHRhcmdldD1cIl9ibGFua1wiPjI5IC0gdC1zaGlydHMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0zMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4zMCAtIGhlYWRwaG9uZXMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0zMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4zMSAtIHlvZ2Egc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIj5TaG9wIExpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzJjb2xzXCI+U2hvcCBHcmlkIDIgQ29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIj5TaG9wIEdyaWQgMyBDb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci80Y29sc1wiPlNob3AgR3JpZCA0IENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9tYXJrZXRcIj48c3Bhbj5TaG9wIE1hcmtldDxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9ub3NpZGViYXIvYm94ZWRcIj48c3Bhbj5TaG9wIEJveGVkIE5vIFNpZGViYXI8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLWhvdFwiPkhvdDwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2Z1bGx3aWR0aFwiPlNob3AgRnVsbHdpZHRoIE5vIFNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXRlZ29yeS9ib3hlZFwiPlByb2R1Y3QgQ2F0ZWdvcnkgQm94ZWQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXRlZ29yeS9mdWxsd2lkdGhcIj48c3Bhbj5Qcm9kdWN0IENhdGVnb3J5IEZ1bGx3aWR0aDxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXJ0XCI+Q2FydDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL2NoZWNrb3V0XCI+Q2hlY2tvdXQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiPldpc2hsaXN0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3AvZGFzaGJvYXJkXCI+TXkgQWNjb3VudDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5Mb29rYm9vazwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCI+RGVmYXVsdDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2NlbnRlcmVkL2JlaWdlLXJpbmctaGFuZGxlLWNpcmNsZS1jcm9zcy1ib2R5LWJhZ1wiPkNlbnRlcmVkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3QvZXh0ZW5kZWQveWVsbG93LXRpZS1zdHJhcC1ibG9jay1oZWVsLXNhbmRhbHNcIj48c3Bhbj5FeHRlbmRlZCBJbmZvPHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2dhbGxlcnkvYmVpZ2UtbWV0YWwtaG9vcC10b3RlLWJhZ1wiPkdhbGxlcnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9zdGlja3kvYnJvd24tZmF1eC1mdXItbG9uZ2xpbmUtY29hdFwiPlN0aWNreSBJbmZvPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc2lkZWJhci9iZWlnZS12LW5lY2stYnV0dG9uLWNhcmRpZ2FuXCI+Qm94ZWQgV2l0aCBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3QvZnVsbHdpZHRoL2JsYWNrLWZhdXgtbGVhdGhlci1jaGFpbi10cmltLXNhbmRhbHNcIj5GdWxsIFdpZHRoPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3QvbWFzb25yeS9ibGFjay1kZW5pbS1kdW5nYXJlZS1kcmVzc1wiPk1hc29ucnkgU3RpY2t5IEluZm88L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hYm91dFwiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5BYm91dCA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXRcIj5BYm91dCAwMTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXQtMlwiPkFib3V0IDAyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+Q29udGFjdCA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdFwiPkNvbnRhY3QgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3QtMlwiPkNvbnRhY3QgMDI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9sb2dpblwiPkxvZ2luPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2ZhcVwiPkZBUXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvNDA0XCI+RXJyb3IgNDA0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbWluZy1zb29uXCI+Q29taW5nIFNvb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9jbGFzc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2NsYXNzaWNcIj5DbGFzc2ljPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvbGlzdGluZ1wiID5MaXN0aW5nPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5HcmlkIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvZ3JpZC8yY29sc1wiPkdyaWQgMiBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvM2NvbHNcIj5HcmlkIDMgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzRjb2xzXCI+R3JpZCA0IGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvZ3JpZC9zaWRlYmFyXCI+R3JpZCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc29ucnkgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5LzJjb2xzXCI+TWFzb25yeSAyIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8zY29sc1wiPk1hc29ucnkgMyBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc29ucnkvNGNvbHNcIj5NYXNvbnJ5IDQgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5L3NpZGViYXJcIj5NYXNvbnJ5IHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+TWFzayA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc2svZ3JpZFwiPkJsb2cgTWFzayBHcmlkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc2svbWFzb25yeVwiPkJsb2cgTWFzayBNYXNvbnJ5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+U2luZ2xlIFBvc3QgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIj5EZWZhdWx0IHdpdGggc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZnVsbHdpZHRoL2Z1c2NlLXBlbGxlbnRlc3F1ZS1zdXNjaXBpdC5cIj5GdWxsd2lkdGggbm8gc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvc2lkZWJhci91dGFsaXF1YW0tc29sbGljaXR6ZHZ1ZGluLWxlb1wiPkZ1bGx3aWR0aCB3aXRoIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9lbGVtZW50c1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9wcm9kdWN0c1wiPlByb2R1Y3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3R5cG9ncmFwaHlcIj5UeXBvZ3JhcGh5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3RpdGxlc1wiPlRpdGxlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9iYW5uZXJzXCI+QmFubmVyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9jYXRlZ29yaWVzXCI+UHJvZHVjdCBDYXRlZ29yeTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy92aWRlby1iYW5uZXJzXCI+VmlkZW8gQmFubmVyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9idXR0b25zXCI+QnV0dG9uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9hY2NvcmRpb25zXCI+QWNjb3JkaW9uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90YWJzXCI+VGFiczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90ZXN0aW1vbmlhbHNcIj5UZXN0aW1vbmlhbHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYmxvZy1wb3N0c1wiPkJsb2cgUG9zdHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvY3RhXCI+Q2FsbCB0byBBY3Rpb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvaWNvbi1ib3hlc1wiPkljb24gQm94ZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlLWNhdHMtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1jYXRzLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW0tY2F0cy1sZWFkXCI+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWVsZWN0cm9uaWNzXCI+RWxlY3Ryb25pY3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtLWNhdHMtbGVhZFwiPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1naWZ0LWlkZWFcIj5HaWZ0IElkZWFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWJlZHNcIj5CZWRzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWxpZ2h0aW5nXCI+TGlnaHRpbmc8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9c29mYXMtYW5kLXNsZWVwZXItc29mYXNcIj5Tb2ZhcyAmIFNsZWVwZXIgc29mYXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9c3RvcmFnZVwiPlN0b3JhZ2U8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9YXJtY2hhaXJzLWFuZC1jaGFpc2VzXCI+QXJtY2hhaXJzICYgQ2hhaXNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1kZWNvcmF0aW9uXCI+RGVjb3JhdGlvbiA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9a2l0Y2hlbi1jYWJpbmV0c1wiPktpdGNoZW4gQ2FiaW5ldHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9Y29mZmVlLWFuZC10YWJsZXNcIj5Db2ZmZWUgJiBUYWJsZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZnVybml0dXJlXCI+T3V0ZG9vciBGdXJuaXR1cmUgPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJUd2l0dGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPjxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIllvdXR1YmVcIj48aSBjbGFzc05hbWU9XCJpY29uLXlvdXR1YmVcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggTW9iaWxlTWVudSApOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgeyBUYWJzLCBUYWJMaXN0LCBUYWIsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc3LDc3LDc3LDAuNiknLFxyXG4gICAgICAgIHpJbmRleDogJzkwMDAnXHJcbiAgICB9XHJcbn1cclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoICdib2R5JyApO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Nb2RhbCAoKSB7XHJcbiAgICBjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgbGV0IHRpbWVyO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGltZXIgKSBjbGVhclRpbWVvdXQoIHRpbWVyICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImxvZ2luLW1vZGFsXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oIGZhbHNlICk7XHJcbiAgICAgICAgfSwgMzUwICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0T3BlbiggdHJ1ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBvcGVuTW9kYWwgfT5TaWduIGluIC8gU2lnbiB1cDwvYT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGN1c3RvbVN0eWxlcyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbD1cImxvZ2luIE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9naW4tbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17IDEwIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsgY2xvc2VNb2RhbCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzIHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiIGRlZmF1bHRJbmRleD17IDAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIG5hdi1maWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbiBJbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJlZ2lzdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHN0eWxlPXsgeyBwYWRkaW5nVG9wOiBcIjJyZW1cIiB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpbmdpbi1lbWFpbC0yXCI+VXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzcyAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwic2luZ2luLWVtYWlsLTJcIiBuYW1lPVwic2luZ2luLWVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2luZ2luLXBhc3N3b3JkLTJcIj5QYXNzd29yZCAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInNpbmdpbi1wYXNzd29yZC0yXCIgbmFtZT1cInNpbmdpbi1wYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxPRyBJTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwic2lnbmluLXJlbWVtYmVyLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJzaWduaW4tcmVtZW1iZXItMlwiPlJlbWVtYmVyIE1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvcmdvdC1saW5rXCI+Rm9yZ290IFlvdXIgUGFzc3dvcmQ/PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5vciBzaWduIGluIHdpdGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dpbiBidG4tZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWdvb2dsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIFdpdGggR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9naW4gYnRuLWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdpc3Rlci1lbWFpbC0yXCI+WW91ciBlbWFpbCBhZGRyZXNzICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZWdpc3Rlci1lbWFpbC0yXCIgbmFtZT1cInJlZ2lzdGVyLWVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnaXN0ZXItcGFzc3dvcmQtMlwiPlBhc3N3b3JkICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZWdpc3Rlci1wYXNzd29yZC0yXCIgbmFtZT1cInJlZ2lzdGVyLXBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TSUdOIFVQPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cInJlZ2lzdGVyLXBvbGljeS0yXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJyZWdpc3Rlci1wb2xpY3ktMlwiPkkgYWdyZWUgdG8gdGhlIHByaXZhY3kgcG9saWN5ICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPm9yIHNpZ24gaW4gd2l0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ2luIGJ0bi1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1nb29nbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTEgbXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dpbiAgYnRuLWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsOyIsImltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFnbmlmaWVyIH0gZnJvbSAncmVhY3QtaW1hZ2UtbWFnbmlmaWVycyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuaW1wb3J0IERldGFpbE9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9kZXRhaWxzL2RldGFpbC1vbmUnO1xyXG5cclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX1BST0RVQ1QgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgZGVtb0FjdGlvbiB9IGZyb20gJ34vc3RvcmUvZGVtbyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTEsNTEsNTEsMC42KScsXHJcbiAgICAgICAgekluZGV4OiAnOTAwMCdcclxuICAgIH1cclxufTtcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoICdib2R5JyApO1xyXG5cclxuZnVuY3Rpb24gUXVpY2tWaWV3TW9kYWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcHJvcHM7XHJcbiAgICBpZiAoICFzbHVnICkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoIEdFVF9QUk9EVUNULCB7IHZhcmlhYmxlczogeyBzbHVnLCBvbmx5RGF0YTogdHJ1ZSB9IH0gKTtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdC5zaW5nbGU7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgY2Fyb3VzZWxSZWYsIHNldENhcm91c2VsUmVmIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBvblRyYW5zbGF0ZTogZnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnF1aWNrVmlldy1jb250ZW50IC5wcm9kdWN0LWdhbGxlcnktaXRlbScgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5xdWlja1ZpZXctY29udGVudCAucHJvZHVjdC1nYWxsZXJ5LWl0ZW0uYWN0aXZlJyApLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XHJcbiAgICAgICAgICAgIGl0ZW1zWyBlLml0ZW0uaW5kZXggXS5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCAncm91dGVDaGFuZ2VTdGFydCcsIGNsb3NlTW9kYWwgKTtcclxuICAgICAgICBjYXJvdXNlbFJlZiAmJiBjYXJvdXNlbFJlZi5jdXJyZW50ICYmIGNhcm91c2VsUmVmLmN1cnJlbnQuZ29UbyggMCApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZiggJ3JvdXRlQ2hhbmdlU3RhcnQnLCBjbG9zZU1vZGFsICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCIuUmVhY3RNb2RhbF9fQ29udGVudFwiICkgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX0NvbnRlbnRcIiApLmNsYXNzTGlzdC5yZW1vdmUoIFwiUmVhY3RNb2RhbF9fQ29udGVudC0tYWZ0ZXItb3BlblwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5oaWRlUXVpY2soKTtcclxuICAgICAgICB9LCAyNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VCZ0ltYWdlICggZSwgaW5kZXggKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5xdWlja1ZpZXctY29udGVudCAucHJvZHVjdC1nYWxsZXJ5LWl0ZW0uYWN0aXZlJyApLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5nb1RvKCBpbmRleCApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoICFzbHVnIHx8IGVycm9yICkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17IHByb3BzLm1vZGFsU2hvdyB9XHJcbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIHF1aWNrVmlldy1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJRdWlja1ZpZXdcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9eyBjdXN0b21TdHlsZXMgfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0LXF1aWNrdmlld1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2tWaWV3LWNvbnRlbnQgaG9yaXpvbnRhbCBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYHJvdyBza2VsLXByby1zaW5nbGUgc2tlbC1xdWlja3ZpZXcgbWItMCAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC0wIHByLWxnLTIgbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb2R1Y3QtZ2FsbGVyeVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxnIG1iLTEgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtbmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtc2FsZVwiPlNhbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW91dFwiPk91dCBvZiBTdG9jazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cInByb2R1Y3QtZ2FsbGVyeS1jYXJvdXNlbCBvd2wtZnVsbCBvd2wtbmF2LWRhcmsgY29scy0xIGNvbHMtbWQtMiBjb2xzLWxnLTNcIiBvbkNoYW5nZVJlZj17IHNldENhcm91c2VsUmVmIH0gZXZlbnRzPXsgZXZlbnRzIH0gb3B0aW9ucz17IHsgJ2RvdHMnOiBmYWxzZSwgJ25hdic6IGZhbHNlIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdC5waWN0dXJlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWduaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpdGVtLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpdGVtLnVybCB9IC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdUb01vdmU9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZhdGlvbj1cImhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yU3R5bGVBY3RpdmU9XCJjcm9zc2hhaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWdhbGxlcnktaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgcGFkZGluZ1RvcDogYCR7cHJvZHVjdC5waWN0dXJlc1sgMCBdLmhlaWdodCAvIHByb2R1Y3QucGljdHVyZXNbIDAgXS53aWR0aCAqIDEwMH0lYCB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgXCJnYWxsZXJ5LVwiICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNtIHJvdyBweC0yXCIgaWQ9XCJvd2wtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgcHJvZHVjdC1nYWxsZXJ5LWl0ZW0gbWItMCAkezAgPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gIH0ga2V5PXsgcHJvZHVjdC5pZCArICctJyArIGluZGV4IH0gb25DbGljaz17IGUgPT4gY2hhbmdlQmdJbWFnZSggZSwgaW5kZXggKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgaW5kZXggXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHF1aWNrdmlldy1kZXNjIHBsLTAgcGwtbGctNCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5IHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5MSBtdC0yIG10LW1kLTBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LXN1bW1hcnkyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbE9uZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2xvc2UgKEVzYylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWZwLWNsb3NlXCIgb25DbGljaz17IGNsb3NlTW9kYWwgfT48c3Bhbj7Dlzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2x1Zzogc3RhdGUuZGVtby5zaW5nbGUsXHJcbiAgICAgICAgbW9kYWxTaG93OiBzdGF0ZS5kZW1vLnF1aWNrU2hvdyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSApKCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4uZGVtb0FjdGlvbiB9ICkoIFF1aWNrVmlld01vZGFsICkgKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw3Nyw3NywwLjYpJyxcclxuICAgICAgICB6SW5kZXg6ICc5MDAwJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudCggJ2JvZHknICk7XHJcblxyXG5mdW5jdGlvbiBWaWRlb01vZGFsICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHNob3dNb2RhbCB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgY2xvc2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiI3ZpZGVvLW1vZGFsXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5oaWRlVmlkZW8oKTtcclxuICAgICAgICB9LCAzNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49eyBzaG93TW9kYWwgfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlSGFuZGxlciB9XHJcbiAgICAgICAgICAgIHN0eWxlPXsgY3VzdG9tU3R5bGVzIH1cclxuICAgICAgICAgICAgY29udGVudExhYmVsPVwiVmlkZW8gTW9kYWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1tb2RhbCBwLTNcIlxyXG4gICAgICAgICAgICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgIGlkPVwidmlkZW8tbW9kYWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsgY2xvc2VIYW5kbGVyIH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwibWZwLWlmcmFtZSBtb2RhbC1jb250ZW50XCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvdkJQZ21BU1ExQTA/YXV0b3BsYXk9MVwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93RnVsbFNjcmVlbj1cIlwiIHRpdGxlPVwieW91dHViZVwiPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TW9kYWw6IHN0YXRlLmRlbW8udmlkZW9TaG93XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucyApKCBWaWRlb01vZGFsICk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBRdHkgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgdmFsdWUgPSAxLCBhZENsYXNzID0gXCJcIiwgbWF4ID0gMTAwMDAsIGNoYW5nZVF0eSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKCB2YWx1ZSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnQoIHZhbHVlICk7XHJcbiAgICB9LCBbIHZhbHVlIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVF0eSAmJiBjaGFuZ2VRdHkoIGN1cnJlbnQgKTtcclxuICAgIH0sIFsgY3VycmVudCBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnQgKCkge1xyXG4gICAgICAgIGlmICggbWF4IDw9IDAgfHwgY3VycmVudCA+PSBtYXggKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2V0Q3VycmVudCggY3VycmVudCArIDEgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWNyZW1lbnQgKCkge1xyXG4gICAgICAgIGlmICggY3VycmVudCA+IDEgKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoIGN1cnJlbnQgLSAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnQgKCBlICkge1xyXG4gICAgICAgIGlmICggcGFyc2VJbnQoIGUuY3VycmVudFRhcmdldC52YWx1ZSApIDwgbWF4ICkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KCBwYXJzZUludCggZS5jdXJyZW50VGFyZ2V0LnZhbHVlICkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBwcm9kdWN0LWRldGFpbHMtcXVhbnRpdHkgJHthZENsYXNzfWAgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1zcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBtaW5XaWR0aDogJzI2cHgnIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlY3JlbWVudCBidG4tc3Bpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBkZWNyZW1lbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgbWF4IH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBjaGFuZ2VDdXJyZW50IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IG1pbldpZHRoOiAnMjZweCcgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5jcmVtZW50IGJ0bi1zcGlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBpbmNyZW1lbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXR5OyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gU3RpY2t5SGVhZGVyICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHRvcCA9IDIxMCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoIFwiXCIgKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgWyBoZWlnaHQsIHNldEhlaWdodCBdID0gdXNlU3RhdGUoICdhdXRvJyApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBpbml0U3RpY2t5ICk7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwge1xyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIsIHtcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyICk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgcmVzaXplSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U3RpY2t5ICgpIHtcclxuICAgICAgICBsZXQgc3RpY2t5Q29udGVudCA9IHJlZi5jdXJyZW50LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgc2V0SGVpZ2h0KCBzdGlja3lDb250ZW50Lm9mZnNldEhlaWdodCArICdweCcgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyICgpIHtcclxuICAgICAgICBsZXQgc3RpY2t5Q29udGVudCA9IHJlZi5jdXJyZW50LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiB0b3AgKSB7XHJcbiAgICAgICAgICAgIGlmICggIXN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lDb250ZW50LmNsYXNzTGlzdC5hZGQoICdmaXhlZCcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpeGVkJyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodCggc3RpY2t5Q29udGVudC5vZmZzZXRIZWlnaHQgKyAncHgnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIgKCkge1xyXG4gICAgICAgIGxldCBzdGlja3lDb250ZW50ID0gcmVmLmN1cnJlbnQuY2hpbGRyZW5bIDAgXTtcclxuICAgICAgICBzZXRIZWlnaHQoIHN0aWNreUNvbnRlbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyApO1xyXG4gICAgICAgIHNjcm9sbEhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXsgcmVmIH0gY2xhc3NOYW1lPVwic3RpY2t5LXdyYXBwZXJcIiBzdHlsZT17IHsgaGVpZ2h0OiBoZWlnaHQgfSB9PlxyXG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUhlYWRlcjsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL3BhcnRpYWxzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9wYXJ0aWFscy9mb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCBWaWRlb01vZGFsIGZyb20gXCIuL2ZlYXR1cmVzL21vZGFscy92aWRlby1tb2RhbFwiO1xyXG5pbXBvcnQgUXVpY2tWaWV3TW9kYWwgZnJvbSBcIi4vZmVhdHVyZXMvbW9kYWxzL3F1aWNrdmlldy1tb2RhbFwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9mZWF0dXJlcy9tb2JpbGUtbWVudVwiO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2RlbW8nO1xyXG5pbXBvcnQgeyBpc1NhZmFyaUJyb3dzZXIsIGlzRWRnZUJyb3dzZXIgfSBmcm9tIFwifi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0ICggeyBjaGlsZHJlbiwgaGlkZVF1aWNrLCBoaWRlVmlkZW8gfSApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciggXCJcIiApO1xyXG4gICAgbGV0IHNjcm9sbFRvcDtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyggJ3BhZ2VzL2NvbWluZy1zb29uJyApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImhlYWRlclwiICkuY2xhc3NMaXN0LmFkZCggXCJkLW5vbmVcIiApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImZvb3RlclwiICkuY2xhc3NMaXN0LmFkZCggXCJkLW5vbmVcIiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiaGVhZGVyXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcImQtbm9uZVwiICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiZm9vdGVyXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcImQtbm9uZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaGlkZVF1aWNrKCk7XHJcbiAgICAgICAgaGlkZVZpZGVvKCk7XHJcbiAgICAgICAgc2Nyb2xsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNzY3JvbGwtdG9wJyApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgZmFsc2UgKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiB0b1Njcm9sbFRvcCAoKSB7XHJcbiAgICAgICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggcG9zIDw9IDAgKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoIDAsIC0xMjAgKTtcclxuICAgICAgICAgICAgICAgIHBvcyAtPSAxMjA7XHJcbiAgICAgICAgICAgIH0sIDEgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDQwMCApIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5hZGQoICdzaG93JyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKCAnc2hvdycgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1vYmlsZU1lbnUgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdtbWVudS1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LW92ZXJsYXlcIiBvbkNsaWNrPXsgaGlkZU1vYmlsZU1lbnUgfT48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNjcm9sbC10b3BcIiB0aXRsZT1cIkJhY2sgdG8gdG9wXCIgb25DbGljaz17IHRvU2Nyb2xsVG9wIH0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPE1vYmlsZU1lbnUgLz5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXsgMzAwMCB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17IDMwMCB9XHJcbiAgICAgICAgICAgICAgICBuZXdlc3RPblRvPXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2FzdC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b249eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9eyB0cnVlIH1cclxuICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wPXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxRdWlja1ZpZXdNb2RhbCAvPlxyXG4gICAgICAgICAgICA8VmlkZW9Nb2RhbCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBudWxsLCB7IC4uLmFjdGlvbnMgfSApKCBMYXlvdXQgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIgKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCBcIlwiICk7XHJcbiAgICBjb25zdCBbIGlzQm90dG9tU3RpY2t5LCBzZXRJc0JvdHRvbVN0aWNreSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcbiAgICBjb25zdCBbIGNvbnRhaW5lckNsYXNzLCBzZXRDb250YWluZXJDbGFzcyBdID0gdXNlU3RhdGUoICdjb250YWluZXInICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQm90dG9tU3RpY2t5KCk7XHJcbiAgICAgICAgc2V0Q29udGFpbmVyQ2xhc3MoIHJvdXRlci5hc1BhdGguaW5jbHVkZXMoICdmdWxsd2lkdGgnICkgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInICk7XHJcbiAgICB9LCBbIHJvdXRlci5hc1BhdGggXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgaGFuZGxlQm90dG9tU3RpY2t5LCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgaGFuZGxlQm90dG9tU3RpY2t5ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUJvdHRvbVN0aWNreSAoKSB7XHJcbiAgICAgICAgc2V0SXNCb3R0b21TdGlja3koIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyggJ3Byb2R1Y3QvZGVmYXVsdCcgKSAmJiAoIHdpbmRvdy5pbm5lcldpZHRoID4gOTkxICkgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIGZvb3Rlci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzcyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvXCIgYWx0PVwiRm9vdGVyIExvZ29cIiB3aWR0aD1cIjEwNVwiIGhlaWdodD1cIjI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmFlc2VudCBkYXBpYnVzLCBuZXF1ZSBpZCBjdXJzdXMgdWNpYnVzLCB0b3J0b3IgbmVxdWUgZWdlc3RhcyBhdWd1ZSwgZXUgdnVscHV0YXRlIG1hZ25hIGVyb3MgZXUgZXJhdC4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBOYW0gZHVpIG1pLCB0aW5jaWR1bnQgcXVpcywgYWNjdW1zYW4gcG9ydHRpdG9yLCBmYWNpbGlzaXMgbHVjdHVzLCBtZXR1cy4gPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hYm91dC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lkZ2V0LWFib3V0LXRpdGxlXCI+R290IFF1ZXN0aW9uPyBDYWxsIHVzIDI0Lzc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCJ0ZWw6MTIzNDU2Nzg5XCI+KzAxMjMgNDU2IDc4OTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aWRnZXQtYWJvdXQtdGl0bGVcIj5QYXltZW50IE1ldGhvZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImZvb3Rlci1wYXltZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wYXltZW50cy5wbmdcIiBhbHQ9XCJQYXltZW50IG1ldGhvZHNcIiB3aWR0aD1cIjI3MlwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkluZm9ybWF0aW9uPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9hYm91dFwiPkFib3V0IE1vbGxhPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXRcIj5Ib3cgdG8gc2hvcCBvbiBNb2xsYTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2ZhcVwiPkZBUTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIj5Db250YWN0IHVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvbG9naW5cIj5Mb2cgaW48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkN1c3RvbWVyIFNlcnZpY2U8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlBheW1lbnQgTWV0aG9kczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPk1vbmV5LWJhY2sgZ3VhcmFudGVlITwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlJldHVybnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5TaGlwcGluZzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlRlcm1zIGFuZCBjb25kaXRpb25zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPk15IEFjY291bnQ8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlNpZ24gSW48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL2NhcnRcIj5WaWV3IENhcnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCI+TXkgV2lzaGxpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5UcmFjayBNeSBPcmRlcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkhlbHA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzcyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgeyAoIG5ldyBEYXRlKCkgKS5nZXRGdWxsWWVhcigpIH0gTW9sbGEgU3RvcmUuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+VGVybXMgT2YgVXNlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNvY2lhbCBNZWRpYTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC1mYWNlYm9va1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIkZhY2Vib29rXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC10d2l0dGVyXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtaW5zdGFncmFtXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb24gc29jaWFsLXlvdXR1YmVcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJZb3V0dWJlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi15b3V0dWJlXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC1waW50ZXJlc3RcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj48aSBjbGFzc05hbWU9XCJpY29uLXBpbnRlcmVzdFwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0JvdHRvbVN0aWNreSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBGb290ZXIgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbG9naW4tbW9kYWwnO1xyXG5pbXBvcnQgSGVhZGVyU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvaGVhZGVyLXNlYXJjaCc7XHJcbmltcG9ydCBXaXNobGlzdE1lbnUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy93aXNobGlzdC1tZW51JztcclxuaW1wb3J0IENhcnRNZW51IGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2FydC1tZW51JztcclxuaW1wb3J0IENhdGVnb3J5TWVudSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2NhdGVnb3J5LW1lbnUnO1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9tYWluLW1lbnUnO1xyXG5pbXBvcnQgU3RpY2t5SGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9zdGlja3ktaGVhZGVyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlciAoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgY29udGFpbmVyQ2xhc3MsIHNldENvbnRhaW5lckNsYXNzIF0gPSB1c2VTdGF0ZSggJ2NvbnRhaW5lcicgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2JvZHknICkuY2xhc3NMaXN0LmFkZCggJ21tZW51LWFjdGl2ZScgKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRDb250YWluZXJDbGFzcyggcm91dGVyLmFzUGF0aC5pbmNsdWRlcyggJ2Z1bGx3aWR0aCcgKSA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgKTtcclxuICAgIH0sIFsgcm91dGVyLmFzUGF0aCBdICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBoZWFkZXItMiBoZWFkZXItaW50cm8tY2xlYXJhbmNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzcyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnQgb3ZlcmZsb3ctaGlkZGVuIG1yLTMgbXItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbXNnIGQtZmxleCBmbGV4LW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3BlY2lhbCBjb2xsZWN0aW9uIGFscmVhZHkgYXZhaWxhYmxlLjwvcD48QUxpbmsgaHJlZj1cIiNcIj4mbmJzcDtSZWFkIG1vcmUgLi4uPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkxpbmtzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+VVNEPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5FdXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+VXNkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5GcmVuY2g8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+U3BhbmlzaDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Nb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNvbnRhaW5lckNsYXNzIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXRvZ2dsZXJcIiBvbkNsaWNrPXsgb3Blbk1vYmlsZU1lbnUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbW9iaWxlIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNb2xsYSBMb2dvXCIgd2lkdGg9eyAxMDQgfSBoZWlnaHQ9eyAyNyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyU2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9kYXNoYm9hcmRcIiB0aXRsZT1cIk15IGFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjY291bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaXNobGlzdE1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tIHN0aWNreS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNvbnRhaW5lckNsYXNzIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeU1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibGEgbGEtbGlnaHRidWxiLW9cIj48L2k+PHAgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPkNsZWFyYW5jZTxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPiZuYnNwO1VwIHRvIDMwJSBPZmY8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0aWNreUhlYWRlcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5pbXBvcnQgeyBjYXJ0UXR5VG90YWwsIGNhcnRQcmljZVRvdGFsIH0gZnJvbSAnfi91dGlscy9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiBDYXJ0TWVudSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBjYXJ0bGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGNhcnQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9jYXJ0XCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGRhdGEtZGlzcGxheT1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtY291bnRcIj57IGNhcnRRdHlUb3RhbCggY2FydGxpc3QgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXJ0PC9wPlxyXG4gICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0ICR7Y2FydGxpc3QubGVuZ3RoID09PSAwID8gJ3RleHQtY2VudGVyJyA6ICcnfWAgfSA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCA9PT0gY2FydGxpc3QubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgaW4gdGhlIGNhcnQuPC9wPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNhcnQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcnRsaXN0Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5zbHVnfWAgfT57IGl0ZW0ubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtcXR5XCI+eyBpdGVtLnF0eSB9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggJHsgaXRlbS5zYWxlX3ByaWNlID8gaXRlbS5zYWxlX3ByaWNlLnRvRml4ZWQoIDIgKSA6IGl0ZW0ucHJpY2UudG9GaXhlZCggMiApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5zbHVnfWAgfSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgaXRlbS5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXJlbW92ZVwiIHRpdGxlPVwiUmVtb3ZlIFByb2R1Y3RcIiBvbkNsaWNrPXsgKCkgPT4gcHJvcHMucmVtb3ZlRnJvbUNhcnQoIGl0ZW0gKSB9PjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY2FydC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXRvdGFsLXByaWNlXCI+JHsgY2FydFByaWNlVG90YWwoIGNhcnRsaXN0ICkudG9Mb2NhbGVTdHJpbmcoIHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9ICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY2FydC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL2NhcnRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3IENhcnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+PHNwYW4+Q2hlY2tvdXQ8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzICggc3RhdGUgKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnRsaXN0OiBzdGF0ZS5jYXJ0bGlzdC5kYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyAuLi5hY3Rpb25zIH0gKSggQ2FydE1lbnUgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TWVudSAoKSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBjYXRlZ29yeS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIHRpdGxlPVwiQnJvd3NlIENhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIEJyb3dzZSBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS12ZXJ0aWNhbCBzZi1hcnJvd3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdlbGVjdHJvbmljcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWVsZWN0cm9uaWNzXCIgc2Nyb2xsPXsgZmFsc2UgfT5FbGVjdHJvbmljczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdnaWZ0LWlkZWEnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1naWZ0LWlkZWFcIiBzY3JvbGw9eyBmYWxzZSB9PkdpZnQgSWRlYXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnYmVkcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWJlZHNcIiBzY3JvbGw9eyBmYWxzZSB9PkJlZHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnbGlnaHRpbmcnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1saWdodGluZ1wiIHNjcm9sbD17IGZhbHNlIH0+TGlnaHRpbmc8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnc29mYXMtYW5kLXNsZWVwZXItc29mYXMnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zb2Zhcy1hbmQtc2xlZXBlci1zb2Zhc1wiIHNjcm9sbD17IGZhbHNlIH0+U29mYXMgJiBTbGVlcGVyIHNvZmFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ3N0b3JhZ2UnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1zdG9yYWdlXCIgc2Nyb2xsPXsgZmFsc2UgfT5TdG9yYWdlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ2FybWNoYWlycy1hbmQtY2hhaXNlcycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWFybWNoYWlycy1hbmQtY2hhaXNlc1wiIHNjcm9sbD17IGZhbHNlIH0+QXJtY2hhaXJzICYgQ2hhaXNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHF1ZXJ5LmNhdGVnb3J5ID09ICdkZWNvcmF0aW9uJyA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZGVjb3JhdGlvblwiIHNjcm9sbD17IGZhbHNlIH0+RGVjb3JhdGlvbiA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAna2l0Y2hlbi1jYWJpbmV0cycgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWtpdGNoZW4tY2FiaW5ldHNcIiBzY3JvbGw9eyBmYWxzZSB9PktpdGNoZW4gQ2FiaW5ldHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBxdWVyeS5jYXRlZ29yeSA9PSAnY29mZmVlLWFuZC10YWJsZXMnID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1jb2ZmZWUtYW5kLXRhYmxlc1wiIHNjcm9sbD17IGZhbHNlIH0+Q29mZmVlICYgVGFibGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcXVlcnkuY2F0ZWdvcnkgPT0gJ2Z1cm5pdHVyZScgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWZ1cm5pdHVyZVwiIHNjcm9sbD17IGZhbHNlIH0+T3V0ZG9vciBGdXJuaXR1cmUgPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeU1lbnU7ICIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IEdFVF9QUk9EVUNUUyB9IGZyb20gJ34vc2VydmVyL3F1ZXJpZXMnO1xyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICd+L3NlcnZlci9hcG9sbG8nO1xyXG5pbXBvcnQgeyBzYWZlQ29udGVudCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyU2VhcmNoICgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciggXCJcIiApO1xyXG4gICAgY29uc3QgWyBjYXQsIHNldENhdCBdID0gdXNlU3RhdGUoIFwiXCIgKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSBdID0gdXNlU3RhdGUoIFwiXCIgKTtcclxuICAgIGNvbnN0IFsgcHJvZHVjdHMsIHNldFByb2R1Y3RzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoUHJvZHVjdHMsIHsgZGF0YSB9IF0gPSB1c2VMYXp5UXVlcnkoIEdFVF9QUk9EVUNUUyApO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RzLmRhdGE7XHJcbiAgICBjb25zdCBbIHRpbWVyLCBzZXRUaW1lciBdID0gdXNlU3RhdGUoIG51bGwgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImJvZHlcIiApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGNsb3NlU2VhcmNoRm9ybSApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgY2xvc2VTZWFyY2hGb3JtICk7XHJcbiAgICAgICAgfSApXHJcbiAgICB9LCBbXSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcmVzdWx0ICYmIHNlYXJjaFRlcm0ubGVuZ3RoID4gMiApXHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKCByZXN1bHQucmVkdWNlKCAoIGFjYywgcHJvZHVjdCApID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbiA9IDk5OTk5OTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QudmFyaWFudHMubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIG1pbiA+IGl0ZW0ucHJpY2UgKSBtaW4gPSBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWF4IDwgaXRlbS5wcmljZSApIG1heCA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9LCBbXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZTogbWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhQcmljZTogbWF4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSwgW10gKSApXHJcbiAgICB9LCBbIHJlc3VsdCwgc2VhcmNoVGVybSBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHNlYXJjaFRlcm0ubGVuZ3RoID4gMiApIHtcclxuICAgICAgICAgICAgaWYgKCB0aW1lciApIGNsZWFyVGltZW91dCggdGltZXIgKTtcclxuICAgICAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQcm9kdWN0cygge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9LCA1MDAgKTtcclxuICAgICAgICAgICAgc2V0VGltZXIoIHRpbWVySWQgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbIHNlYXJjaFRlcm0sIGNhdCBdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5oZWFkZXItc2VhcmNoLnNob3ctcmVzdWx0cycgKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlci1zZWFyY2guc2hvdy1yZXN1bHRzJyApLmNsYXNzTGlzdC5yZW1vdmUoICdzaG93LXJlc3VsdHMnICk7XHJcbiAgICB9LCBbIHJvdXRlci5wYXRobmFtZSBdICk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hFbXBoYXNpemUgKCBuYW1lICkge1xyXG4gICAgICAgIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKCBzZWFyY2hUZXJtLCBcImlcIiApO1xyXG4gICAgICAgIHJldHVybiBuYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIHJlZ0V4cCxcclxuICAgICAgICAgICAgKCBtYXRjaCApID0+IFwiPHN0cm9uZz5cIiArIG1hdGNoICsgXCI8L3N0cm9uZz5cIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VTZWFyY2hGb3JtICggZSApIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvciggJy5oZWFkZXIgLmhlYWRlci1zZWFyY2gnIClcclxuICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoICdzaG93JyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2F0U2VsZWN0ICggZSApIHtcclxuICAgICAgICBzZXRDYXQoIGUudGFyZ2V0LnZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TZWFyY2hDaGFuZ2UgKCBlICkge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oIGUudGFyZ2V0LnZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NlYXJjaEZvcm0gKCBlICkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlciAuaGVhZGVyLXNlYXJjaCcgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCggJ3Nob3cnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXRTZWFyY2hGb3JtICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnb1Byb2R1Y3RQYWdlICgpIHtcclxuICAgICAgICBzZXRTZWFyY2hUZXJtKCAnJyApO1xyXG4gICAgICAgIHNldFByb2R1Y3RzKCBbXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoIGhlYWRlci1zZWFyY2gtZXh0ZW5kZWQgaGVhZGVyLXNlYXJjaC12aXNpYmxlIGhlYWRlci1zZWFyY2gtbm8tcmFkaXVzIGQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLXRvZ2dsZVwiPjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXsgb25TdWJtaXRTZWFyY2hGb3JtIH0gb25DbGljaz17IHNob3dTZWFyY2hGb3JtIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtd3JhcHBlciBzZWFyY2gtd3JhcHBlci13aWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxXCIgY2xhc3NOYW1lPVwic3Itb25seVwiIHZhbHVlPXsgc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlNlYXJjaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBvblNlYXJjaENoYW5nZSB9IHZhbHVlPXsgc2VhcmNoVGVybSB9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdCAuLi5cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl2ZS1zZWFyY2gtbGlzdFwiIG9uQ2xpY2s9eyBnb1Byb2R1Y3RQYWdlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggcHJvZHVjdHMubGVuZ3RoID4gMCAmJiBzZWFyY2hUZXJtLmxlbmd0aCA+IDIgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybS5sZW5ndGggPiAyICYmIHByb2R1Y3RzLm1hcCggKCBwcm9kdWN0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvblwiIGtleT17IGBzZWFyY2gtcmVzdWx0LSR7aW5kZXh9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZSBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH0gd2lkdGg9eyA0MCB9IGhlaWdodD17IDQwIH0gYWx0PVwicHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW5hbWVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHNhZmVDb250ZW50KCBtYXRjaEVtcGhhc2l6ZSggcHJvZHVjdC5uYW1lICkgKSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5taW5QcmljZSA9PSBwcm9kdWN0Lm1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgcHJvZHVjdC5tYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj4keyBwcm9kdWN0Lm1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IHByb2R1Y3QubWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIH0gKSggSGVhZGVyU2VhcmNoICk7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBNYWluTWVudSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IHBhdGggPSByb3V0ZXIuYXNQYXRoO1xyXG4gICAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBbGxEZW1vcyggZSApIHtcclxuICAgICAgICBsZXQgZGVtb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5kZW1vLWl0ZW0uaGlkZGVuJyApO1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZW1vSXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGRlbW9JdGVtc1sgaSBdLmNsYXNzTGlzdC50b2dnbGUoICdzaG93JyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy52aWV3LWFsbC1kZW1vcycgKS5jbGFzc0xpc3QudG9nZ2xlKCAnZGlzYWJsZWQtaGlkZGVuJyApO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgc2YtYXJyb3dzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgYG1lZ2FtZW51LWNvbnRhaW5lciAkeyBwYXRoID09PSAnLycgPyAnYWN0aXZlJyA6ICcnIH1gIH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+SG9tZTwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYW1lbnUgZGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5DaG9vc2UgeW91ciBkZW1vPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wMSAtIGZ1cm5pdHVyZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wMiAtIGZ1cm5pdHVyZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tM2AgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8zLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wMyAtIGVsZWN0cm9uaWMgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvNC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDQgLSBlbGVjdHJvbmljIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby01YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzUuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjA1IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tNmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy82LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wNiAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTdgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvNy5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDcgLSBmYXNoaW9uIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby04YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzguanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjA4IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tOWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy85LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wOSAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTEwYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzEwLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xMCAtIHNob2VzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTFgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTEuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjExIC0gZnVybml0dXJlIHNpbXBsZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTEyYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzEyLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xMiAtIGZhc2hpb24gc2ltcGxlIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTMuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjEzIC0gbWFya2V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTQuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjE0IC0gbWFya2V0IGZ1bGx3aWR0aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTE1YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzE1LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xNSAtIGxvb2tib29rIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xNmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xNi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTYgLSBsb29rYm9vayAyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTdgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTcuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjE3IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTE4YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzE4LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xOCAtIGZhc2hpb24gc3RvcmUgKHdpdGggc2lkZWJhcik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xOWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xOS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTkgLSBnYW1lcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTIwYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzIwLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yMCAtIGJvb2sgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yMWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yMS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjEgLSBzcG9ydCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTIyYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzIyLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yMiAtIHRvb2xzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjMuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjIzIC0gZmFzaGlvbiBsZWZ0IG5hdmlnYXRpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yNGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yNC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjQgLSBleHRyZW1lIHNwb3J0IHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjVgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjUuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjI1IC0gamV3ZWxyeSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI2YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI2LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yNiAtIG1hcmtldCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI3YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI3LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yNyAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yOGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yOC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjggLSBmb29kIG1hcmtldCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI5YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI5LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yOSAtIHQtc2hpcnRzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzBgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzAuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjMwIC0gaGVhZHBob25lcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTMxYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzMxLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4zMSAtIHlvZ2Egc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0zMmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8zMi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MzIgLSBzdW5nbGFzc2VzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzMuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjMzIC0gY29zbWV0aWNzIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzQuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjM0IC0gY2FyIHBhcnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51LWFjdGlvbiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnktMiB2aWV3LWFsbC1kZW1vc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBzaG93QWxsRGVtb3MgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VmlldyBBbGwgRGVtb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCIvc2hvcFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3A8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51IG1lZ2FtZW51LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+U2hvcCB3aXRoIHNpZGViYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnbGlzdCcgKSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCIgc2Nyb2xsPXsgZmFsc2UgfT5TaG9wIExpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnMmNvbHMnICkgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvMmNvbHNcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3AgR3JpZCAyIENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnM2NvbHMnICkgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3AgR3JpZCAzIENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnNGNvbHMnICkgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvNGNvbHNcIiBzY3JvbGw9eyBmYWxzZSB9PlNob3AgR3JpZCA0IENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwic2hvcC9tYXJrZXRcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9zaG9wL21hcmtldFwiPjxzcGFuPlNob3AgTWFya2V0PHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5TaG9wIG5vIHNpZGViYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyAoIHBhdGguaW5kZXhPZiggXCJzaG9wL25vc2lkZWJhclwiICkgPiAtMSAmJiBxdWVyeS50eXBlID09ICdib3hlZCcgKSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2JveGVkXCIgc2Nyb2xsPXsgZmFsc2UgfT48c3Bhbj5TaG9wIEJveGVkIE5vIFNpZGViYXI8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLWhvdFwiPkhvdDwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgKCBwYXRoLmluZGV4T2YoIFwic2hvcC9ub3NpZGViYXJcIiApID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnZnVsbHdpZHRoJyApID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9ub3NpZGViYXIvZnVsbHdpZHRoXCIgc2Nyb2xsPXsgZmFsc2UgfT5TaG9wIEZ1bGx3aWR0aCBObyBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+UHJvZHVjdCBDYXRlZ29yeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJzaG9wL2NhdGVnb3J5L2JveGVkXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXRlZ29yeS9ib3hlZFwiIHNjcm9sbD17IGZhbHNlIH0+UHJvZHVjdCBDYXRlZ29yeSBCb3hlZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJzaG9wL2NhdGVnb3J5L2Z1bGx3aWR0aFwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3AvY2F0ZWdvcnkvZnVsbHdpZHRoXCIgc2Nyb2xsPXsgZmFsc2UgfT48c3Bhbj5Qcm9kdWN0IENhdGVnb3J5IEZ1bGx3aWR0aDxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5TaG9wIFBhZ2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInNob3AvY2FydFwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3AvY2FydFwiPkNhcnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwic2hvcC9jaGVja291dFwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIj5DaGVja291dDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJzaG9wL3dpc2hsaXN0XCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiPldpc2hsaXN0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInNob3AvZGFzaGJvYXJkXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvc2hvcC9kYXNoYm9hcmRcIj5NeSBBY2NvdW50PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcIiNMb29rYm9va1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiI1wiPkxvb2tib29rPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvYmFubmVyLTEuanBnXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5MYXN0IDxiciAvPkNoYW5jZTxiciAvPjxzcGFuPjxzdHJvbmc+U2FsZTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9cIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9kZWZhdWx0L2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5Qcm9kdWN0PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhbWVudSBtZWdhbWVudS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5Qcm9kdWN0IERldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwcm9kdWN0L2RlZmF1bHRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9kZWZhdWx0L2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiPkRlZmF1bHQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInByb2R1Y3QvY2VudGVyZWRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9iZWlnZS1yaW5nLWhhbmRsZS1jaXJjbGUtY3Jvc3MtYm9keS1iYWdcIj5DZW50ZXJlZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9leHRlbmRlZFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2V4dGVuZGVkL3llbGxvdy10aWUtc3RyYXAtYmxvY2staGVlbC1zYW5kYWxzXCI+PHNwYW4+RXh0ZW5kZWQgSW5mbzxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInByb2R1Y3QvZ2FsbGVyeVwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2dhbGxlcnkvYmVpZ2UtbWV0YWwtaG9vcC10b3RlLWJhZ1wiPkdhbGxlcnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInByb2R1Y3Qvc3RpY2t5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc3RpY2t5L2Jyb3duLWZhdXgtZnVyLWxvbmdsaW5lLWNvYXRcIj5TdGlja3kgSW5mbzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9zaWRlYmFyXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc2lkZWJhci9iZWlnZS12LW5lY2stYnV0dG9uLWNhcmRpZ2FuXCI+Qm94ZWQgV2l0aCBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwcm9kdWN0L2Z1bGx3aWR0aFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2Z1bGx3aWR0aC9ibGFjay1mYXV4LWxlYXRoZXItY2hhaW4tdHJpbS1zYW5kYWxzXCI+RnVsbCBXaWR0aDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicHJvZHVjdC9tYXNvbnJ5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3Byb2R1Y3QvbWFzb25yeS9ibGFjay1kZW5pbS1kdW5nYXJlZS1kcmVzc1wiPk1hc29ucnkgU3RpY2t5IEluZm88L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvYmFubmVyLTIuanBnXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5OZXcgVHJlbmRzPGJyIC8+PHNwYW4+PHN0cm9uZz5zcHJpbmcgeyAoIG5ldyBEYXRlKCkgKS5nZXRGdWxsWWVhcigpIH08L3N0cm9uZz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInBhZ2VzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5QYWdlczwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9hYm91dFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkFib3V0PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9hYm91dFwiICkgPiAtMSAmJiBwYXRoLmluZGV4T2YoIFwicGFnZXMvYWJvdXQtMlwiICkgPT09IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCI+QWJvdXQgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9hYm91dC0yXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0LTJcIj5BYm91dCAwMjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicGFnZXMvY29udGFjdFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+Q29udGFjdDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicGFnZXMvY29udGFjdFwiICkgPiAtMSAmJiBwYXRoLmluZGV4T2YoIFwicGFnZXMvY29udGFjdC0yXCIgKSA9PT0gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdFwiPkNvbnRhY3QgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9jb250YWN0LTJcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdC0yXCI+Q29udGFjdCAwMjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwicGFnZXMvbG9naW5cIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvbG9naW5cIj5Mb2dpbjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJwYWdlcy9mYXFcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvcGFnZXMvZmFxXCI+RkFRczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCI0MDRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvNDA0XCI+RXJyb3IgNDA0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcInBhZ2VzL2NvbWluZy1zb29uXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbWluZy1zb29uXCI+Q29taW5nIFNvb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvY2xhc3NpY1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5CbG9nPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvY2xhc3NpY1wiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL2NsYXNzaWNcIj5DbGFzc2ljPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvbGlzdGluZ1wiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL2xpc3RpbmdcIiA+TGlzdGluZzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvMmNvbHNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+R3JpZDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvMmNvbHNcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzJjb2xzXCI+R3JpZCAyIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvM2NvbHNcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzNjb2xzXCI+R3JpZCAzIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvNGNvbHNcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzRjb2xzXCI+R3JpZCA0IGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL2dyaWQvc2lkZWJhclwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvc2lkZWJhclwiPkdyaWQgc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5LzJjb2xzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc29ucnk8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5LzJjb2xzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8yY29sc1wiPk1hc29ucnkgMiBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5LzNjb2xzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8zY29sc1wiPk1hc29ucnkgMyBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5LzRjb2xzXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS80Y29sc1wiPk1hc29ucnkgNCBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNvbnJ5L3NpZGViYXJcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5L3NpZGViYXJcIj5NYXNvbnJ5IHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvbWFza1wiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvbWFzay9ncmlkXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc2s8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9tYXNrL2dyaWRcIiApID4gLTEgPyAnYWN0aXZlJyA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNrL2dyaWRcIj5CbG9nIE1hc2sgR3JpZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvbWFzay9tYXNvbnJ5XCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzay9tYXNvbnJ5XCI+QmxvZyBNYXNrIE1hc29ucnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImJsb2cvc2luZ2xlXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+U2luZ2xlIFBvc3Q8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9zaW5nbGUvZGVmYXVsdFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT48QUxpbmsgaHJlZj1cIi9ibG9nL3NpbmdsZS9kZWZhdWx0L2NyYXMtb3JuYXJlLXRyaXN0aXF1ZS1lbGl0LlwiPkRlZmF1bHQgd2l0aCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiYmxvZy9zaW5nbGUvZnVsbHdpZHRoXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL2Z1bGx3aWR0aC9mdXNjZS1wZWxsZW50ZXNxdWUtc3VzY2lwaXQuXCI+RnVsbHdpZHRoIG5vIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJibG9nL3NpbmdsZS9zaWRlYmFyXCIgKSA+IC0xID8gJ2FjdGl2ZScgOiAnJyB9PjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL3NpZGViYXIvdXRhbGlxdWFtLXNvbGxpY2l0emR2dWRpbi1sZW9cIj5GdWxsd2lkdGggd2l0aCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudFwiICkgPiAtMSA/ICdhY3RpdmUnIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9lbGVtZW50c1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5FbGVtZW50czwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy9wcm9kdWN0c1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvdHlwb2dyYXBoeVwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3R5cG9ncmFwaHlcIj5UeXBvZ3JhcGh5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL3RpdGxlc1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3RpdGxlc1wiPlRpdGxlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy9iYW5uZXJzXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYmFubmVyc1wiPkJhbm5lcnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvY2F0ZWdvcmllc1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2NhdGVnb3JpZXNcIj5Qcm9kdWN0IENhdGVnb3J5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL3ZpZGVvLWJhbm5lcnNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy92aWRlby1iYW5uZXJzXCI+VmlkZW8gQmFubmVyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy9idXR0b25zXCIgKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnIH0+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYnV0dG9uc1wiPkJ1dHRvbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvYWNjb3JkaW9uc1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2FjY29yZGlvbnNcIj5BY2NvcmRpb25zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL3RhYnNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90YWJzXCI+VGFiczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGguaW5kZXhPZiggXCJlbGVtZW50cy90ZXN0aW1vbmlhbHNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90ZXN0aW1vbmlhbHNcIj5UZXN0aW1vbmlhbHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoLmluZGV4T2YoIFwiZWxlbWVudHMvYmxvZy1wb3N0c1wiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2Jsb2ctcG9zdHNcIj5CbG9nIFBvc3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL2N0YVwiICkgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJyB9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2N0YVwiPkNhbGwgdG8gQWN0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aC5pbmRleE9mKCBcImVsZW1lbnRzL2ljb24tYm94ZXNcIiApID4gLTEgPyBcImFjdGl2ZVwiIDogJycgfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9pY29uLWJveGVzXCI+SWNvbiBCb3hlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIFdpc2hsaXN0TWVudSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB3aXNobGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiB0aXRsZT1cIldpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWhlYXJ0LW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lzaGxpc3QtY291bnQgYmFkZ2VcIj57IHdpc2hsaXN0Lmxlbmd0aCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5XaXNobGlzdDwvcD5cclxuICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoIHN0YXRlICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHt9ICkoIFdpc2hsaXN0TWVudSApOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTbGlkZVRvZ2dsZSBmcm9tICdyZWFjdC1zbGlkZS10b2dnbGUnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBRdHkgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3F0eSc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcblxyXG5pbXBvcnQgeyBjYW5BZGRUb0NhcnQsIGlzSW5XaXNobGlzdCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgcXR5LCBzZXRRdHkgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHF0eTIsIHNldFF0eTIgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIGNvbG9yQXJyYXksIHNldENvbG9yQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzaXplQXJyYXksIHNldFNpemVBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHZhcmlhdGlvbkdyb3VwLCBzZXRWYXJpYXRpb25Hcm91cCBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50IF0gPSB1c2VTdGF0ZSggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICBjb25zdCBbIHNob3dDbGVhciwgc2V0U2hvd0NsZWFyIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgc2hvd1ZhcmlhdGlvblByaWNlLCBzZXRTaG93VmFyaWF0aW9uUHJpY2UgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gOTk5OTk7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgIHNldFZhcmlhdGlvbkdyb3VwKCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgY3VyLnNpemUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBjdXIucHJpY2UgKSBtaW4gPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgY3VyLnByaWNlICkgbWF4ID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgc2V0UXR5KCAxICk7XHJcbiAgICAgICAgc2V0UXR5MiggMSApO1xyXG4gICAgfSwgWyByb3V0ZXIucXVlcnkuc2x1ZyBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByZWZyZXNoU2VsZWN0YWJsZUdyb3VwKCk7XHJcbiAgICB9LCBbIHZhcmlhdGlvbkdyb3VwLCBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NsZWFyKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciB8fCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICBzZXRTaG93VmFyaWF0aW9uUHJpY2UoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSByZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCAnLnZhcmlhdGlvbi10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlICkge1xyXG4gICAgICAgICAgICBpZiAoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSAmJiB0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY29sbGFwc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggKCAhKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICkgJiYgIXRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VsZWN0ZWRWYXJpYW50IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCAnL3Byb2R1Y3QvZGVmYXVsdCcgKSApIHtcclxuICAgICAgICAgICAgbGV0IHN0aWNreUJhciA9IHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWJhcicgKTtcclxuICAgICAgICAgICAgaWYgKCBzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LnJlbW92ZSggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICFzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LmFkZCggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFNlbGVjdGFibGVHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5ID0gdmFyaWF0aW9uR3JvdXAucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgIT09IGN1ci5jb2xvciApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNpemVBcnJheSggdGVtcEFycmF5LnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhY2MuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2l6ZSA9PSBjdXIuc2l6ZSApICE9PSAtMSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgdGVtcEFycmF5ID0gWyAuLi52YXJpYXRpb25Hcm91cCBdO1xyXG4gICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgIT09IGN1ci5zaXplICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3JBcnJheSggcHJvZHVjdC52YXJpYW50cy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5jb2xvciA9PSBjdXIuY29sb3IgKSA9PSAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdENvbG9yICggZSwgaXRlbSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCgge1xyXG4gICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGl0ZW0uY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RTaXplICggZSApIHtcclxuICAgICAgICBpZiAoIGUudGFyZ2V0LnZhbHVlID09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IGUudGFyZ2V0LnZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VRdHkgKCBjdXJyZW50ICkge1xyXG4gICAgICAgIHNldFF0eSggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5MiAoIGN1cnJlbnQgKSB7XHJcbiAgICAgICAgc2V0UXR5MiggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCAoIHtcclxuICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBzaXplOiBcIlwiXHJcbiAgICAgICAgfSApICk7XHJcbiAgICAgICAgcmVmcmVzaFNlbGVjdGFibGVHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSwgaW5kZXggPSAwICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdidG4tZGlzYWJsZWQnICkgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm9kdWN0ID0geyAuLi5wcm9kdWN0IH07XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuY29sb3JOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZFZhcmlhbnQucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KFxyXG4gICAgICAgICAgICBuZXdQcm9kdWN0LFxyXG4gICAgICAgICAgICBpbmRleCA9PSAwID8gcXR5IDogcXR5MlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiIHJlZj17IHJlZiB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnsgcHJvZHVjdC5uYW1lIH08L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzLXRleHRcIj4oIHsgcHJvZHVjdC5yZXZpZXcgfSBSZXZpZXdzICk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnNob3J0X2Rlc2MgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgJHsoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yID8gJ2FjdGl2ZSAnIDogJycgKSArICggaXRlbS5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyApfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHNlbGVjdENvbG9yKCBlLCBpdGVtICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaXplXCI+U2l6ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VsZWN0ZWRWYXJpYW50LnNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNlbGVjdFNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHNpemU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57IGl0ZW0uc2l6ZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2l6ZS1ndWlkZSBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10aC1saXN0XCI+PC9pPnNpemUgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgY2xlYXJTZWxlY3Rpb24gfT5jbGVhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgZC1ub25lIHZhcmlhdGlvbi10b2dnbGUgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpfWAgfSBvbkNsaWNrPXsgb25Ub2dnbGUgfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfSBzdHlsZT17IHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF0eVwiPlF0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eSB9IG1heD17IHByb2R1Y3Quc3RvY2sgfSB2YWx1ZT17IHF0eSB9PjwvUXR5PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBvbkNhcnRDbGljayggZSwgMCApIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdCB3LTEwMCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggY2F0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5zbHVnIH0gfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgY2F0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNoYXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1waW50ZXJlc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJhciBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiB3aWR0aD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS53aWR0aCB9IGhlaWdodD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS5oZWlnaHQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPyBzZWxlY3RlZFZhcmlhbnQucHJpY2UudG9GaXhlZCggMiApIDogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdHkgY2hhbmdlUXR5PXsgb25DaGFuZ2VRdHkyIH0gbWF4PXsgcHJvZHVjdC5zdG9jayB9IHZhbHVlPXsgcXR5MiB9PjwvUXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLXByb2R1Y3QgYnRuLWNhcnQgJHsoICFjYW5BZGRUb0NhcnQoIHByb3BzLmNhcnRsaXN0LCBwcm9kdWN0LCBxdHkgKSB8fCAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhc2hvd1ZhcmlhdGlvblByaWNlICkgKSA/ICdidG4tZGlzYWJsZWQnIDogJyd9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IG9uQ2FydENsaWNrKCBlLCAxICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJ0bGlzdDogc3RhdGUuY2FydGxpc3QuZGF0YSxcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uIH0gKSggRGV0YWlsT25lICk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUvaW5kZXguanNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tIFwiLi4vc3RvcmUvZGVtb1wiO1xyXG5cclxuaW1wb3J0ICd+L3B1YmxpYy9zY3NzL3BsdWdpbnMvb3dsLWNhcm91c2VsL293bC5jYXJvdXNlbC5zY3NzJztcclxuaW1wb3J0IFwifi9wdWJsaWMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVkQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5kZW1vLmN1cnJlbnQgIT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNTykge1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChkZW1vQWN0aW9uLnJlZnJlc2hTdG9yZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPFBlcnNpc3RHYXRlXHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UtbG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiTW9sbGEgUmVhY3QgVGVtcGxhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNb2xsYSDigJMgIGVDb21tZXJjZSBSZWFjdCBUZW1wbGF0ZSBpcyBhIG11bHRpLXVzZSBSZWFjdCB0ZW1wbGF0ZS4gSXQgaXMgZGVzaWduZWQgdG8gZ28gd2VsbCB3aXRoIG11bHRpLXB1cnBvc2Ugd2Vic2l0ZXMuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiZC10aGVtZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJNb2xsYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxpY2F0aW9uLW5hbWVcIiBjb250ZW50PVwiTW9sbGEgUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2NjOTk2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cImltYWdlcy9pY29ucy9icm93c2VyY29uZmlnLnhtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Nb2xsYSAtIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cImltYWdlcy9pY29ucy9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiaW1hZ2VzL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzY2NjY2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgICA8L1Byb3ZpZGVyID5cclxuICAgIClcclxufTtcclxuXHJcbldyYXBwZWRBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3Jvb3Qtc2FnYSc7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuLy8gaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG4vLyBJbXBvcnQgUmVkdWNlcnNcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRcIjtcclxuaW1wb3J0IHdpc2hsaXN0UmVkdWNlciBmcm9tICcuL3dpc2hsaXN0JztcclxuaW1wb3J0IGNvbXBhcmVSZWR1Y2VyIGZyb20gJy4vY29tcGFyZSc7XHJcbmltcG9ydCBkZW1vUmVkdWNlciBmcm9tICcuL2RlbW8nO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNhcnRsaXN0OiBjYXJ0UmVkdWNlcixcclxuICAgIHdpc2hsaXN0OiB3aXNobGlzdFJlZHVjZXIsXHJcbiAgICBjb21wYXJlbGlzdDogY29tcGFyZVJlZHVjZXIsXHJcbiAgICBkZW1vOiBkZW1vUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4vLyAgICAga2V5OiAncm9vdCcsXHJcbi8vICAgICBzdG9yYWdlOiBBc3luY1N0b3JhZ2UsXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcnMpXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgc3RvcmUuX19wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgbWFrZVN0b3JlO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTsiLCJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBjYXJ0U2FnYSB9IGZyb20gJy4vY2FydCc7XHJcbmltcG9ydCB7IHdpc2hsaXN0U2FnYSB9IGZyb20gJy4vd2lzaGxpc3QnO1xyXG5pbXBvcnQgeyBjb21wYXJlU2FnYSB9IGZyb20gJy4vY29tcGFyZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EgKCkge1xyXG4gICAgeWllbGQgYWxsKCBbXHJcbiAgICAgICAgY2FydFNhZ2EoKSxcclxuICAgICAgICB3aXNobGlzdFNhZ2EoKSxcclxuICAgICAgICBjb21wYXJlU2FnYSgpLFxyXG4gICAgXSApO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10YWJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==