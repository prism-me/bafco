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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\mobile-menu.jsx";
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\modals\\login-modal.jsx";
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\modals\\quickview-modal.jsx";
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\modals\\video-modal.jsx";
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\qty.jsx";
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\sticky-header.jsx";

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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\layout.jsx";

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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\footer\\footer.jsx";
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
    className: "col-sm-12 col-lg-3",
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
    src: "images/bafco-logo.png",
    className: "footer-logo",
    alt: "Footer Logo",
    width: "150",
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
  }, "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus."), __jsx("div", {
    className: "widget-about-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "widget-about-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, "Social Media"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-instagram",
    rel: "noopener noreferrer",
    title: "Instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 138
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-facebook",
    rel: "noopener noreferrer",
    title: "Facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 136
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-linkedin",
    rel: "noopener noreferrer",
    title: "linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 136
    }
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "social-icon social-twitter",
    rel: "noopener noreferrer",
    title: "Twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "icon-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 134
    }
  })), __jsx("span", {
    className: "widget-about-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, "Payment Method"), __jsx("figure", {
    className: "footer-payments",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "images/payments.png",
    alt: "Payment methods",
    width: "272",
    height: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, "QUICK LINKS"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, "Space Planning Services")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "Delivery & Installation")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    }
  }, "Fabric & Finishes")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, "Warranty")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, "Project References")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, "Testimonials")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, "BLOGS/ Insights"))))), __jsx("div", {
    className: "col-sm-4 col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, "SHOP"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("li", {
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
  }, "Chairs")), __jsx("li", {
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
  }, "Desks")), __jsx("li", {
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
  }, "Collaborative")), __jsx("li", {
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
  }, "Storages")), __jsx("li", {
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
  }, "Accessories")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }, "Materials"))))), __jsx("div", {
    className: "col-sm-4 col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, "MY ACCOUNT"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, "My account")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, "Login")), __jsx("li", {
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
  }, "Order History")), __jsx("li", {
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
  }, "Terms & Condition")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, "FAQs"))))), __jsx("div", {
    className: "col-sm-4 col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "BAFCO"), __jsx("ul", {
    className: "widget-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, "About Us")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, "Services")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 41
    }
  }, "Innovations")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, "Resources"))))), __jsx("div", {
    className: "col-sm-12 col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "widget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "widget-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "Visit our Showroom"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, "Dubai BAFCO Office & Showroom Ground Floor, Al Manara Building (near Al Safa Metro Station) Sheikh Zayed Road, Dubai, UAE")))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "footer-copyright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Copyright \xA9 ", new Date().getFullYear(), " Bafco Store. All Rights Reserved."), __jsx("ul", {
    className: "footer-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, "Terms Of Use")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, "Privacy Policy")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "Shipping Policy"))), __jsx("div", {
    className: "social-icons social-icons-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, "Designed and Managed by ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "https://www.prism-me.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 52
    }
  }, "Prism"))))), isBottomSticky ? __jsx("div", {
    className: "mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\header.jsx";
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
    src: "images/bafco-logo.png",
    alt: "Molla Logo",
    width: 150,
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
    className: "header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 41
    }
  }, "Links"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 53
    }
  }, "USD"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 53
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 57
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 65
    }
  }, "USD")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 65
    }
  }, "AED")))))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "header-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 49
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 53
    }
  }, "English"), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 53
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 57
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 65
    }
  }, "English")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 61
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 65
    }
  }, "Arabic"))))))))))))));
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\cart-menu.jsx";

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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\category-menu.jsx";

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
    href: "#",
    className: "dropdown-toggle",
    title: "Browse Categories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "dropdown-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "side-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "menu-vertical sf-arrows",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: query.category == 'electronics' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 89
    }
  }, "Top Management")), __jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 87
    }
  }, "Senior Management")), __jsx("li", {
    className: query.category == 'beds' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 82
    }
  }, "Majlis Area")), __jsx("li", {
    className: query.category == 'lighting' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 86
    }
  }, "Management Desk & Chairs")), __jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 101
    }
  }, "Workstation & Ergonomic Chairs")), __jsx("li", {
    className: query.category == 'storage' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 85
    }
  }, "Formal and Casual Meeting Area")), __jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 99
    }
  }, "Collaborative & Public Seating")), __jsx("li", {
    className: query.category == 'decoration' ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 88
    }
  }, "Training Area & Pantry Area"))))));
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\header-search.jsx";
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
    placeholder: "What are you looking for?",
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\main-menu.jsx";

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
    className: `megamenu-container ${path === '/chairs' ? 'active' : ''}`,
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
  }, "Chairs"), __jsx("div", {
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
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 41
    }
  }, "Chair Collections"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 114
    }
  }, "Executive Chairs")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 115
    }
  }, "Ergonomic Chairs")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 115
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 131
    }
  }, "Conference Chairs", __jsx("span", {
    className: "tip tip-new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 154
    }
  }, "New")))), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 114
    }
  }, "Visitor Chairs")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 113
    }
  }, "Stools")), __jsx("li", {
    className: path.indexOf("product/sidebar") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 114
    }
  }, "Multi-Functional Chairs")), __jsx("li", {
    className: path.indexOf("product/fullwidth") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 116
    }
  }, "(All Chairs)"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 49
    }
  }, "Comfort", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 97
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 103
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 109
    }
  }, "Executive Chairs"))))))))))), __jsx("li", {
    className: `megamenu-container ${path === '/desks' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 21
    }
  }, "Desks"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 41
    }
  }, "Desk Collections"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 114
    }
  }, "Executive Desks")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 115
    }
  }, "Workstation")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 115
    }
  }, "Height Adjustable Desks")), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 114
    }
  }, "Meeting and Conferences")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 113
    }
  }, "(All Desks)"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 49
    }
  }, "Diamond", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 97
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 103
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 109
    }
  }, "Executive Desks"))))))))))), __jsx("li", {
    className: `megamenu-container ${path === '/collaborative' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 21
    }
  }, "Collaborative"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 41
    }
  }, "Collaborative Collections"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 114
    }
  }, "Executive Desks")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 115
    }
  }, "Workstation")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 115
    }
  }, "Height Adjustable Desks")), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 114
    }
  }, "Meeting and Conferences")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 113
    }
  }, "(All Desks)"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 49
    }
  }, "Diamond", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 97
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 103
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 109
    }
  }, "Executive Desks"))))))))))), __jsx("li", {
    className: `megamenu-container ${path === '/storages' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }, "Storages"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 41
    }
  }, "Collaborative Collections"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 114
    }
  }, "Executive Desks")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 115
    }
  }, "Workstation")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 115
    }
  }, "Height Adjustable Desks")), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 114
    }
  }, "Meeting and Conferences")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 113
    }
  }, "(All Desks)"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 49
    }
  }, "Diamond", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 97
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 103
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 109
    }
  }, "Executive Desks"))))))))))), __jsx("li", {
    className: `megamenu-container ${path === '/accessories' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 21
    }
  }, "Accessories"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 41
    }
  }, "Collaborative Collections"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 114
    }
  }, "Executive Desks")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 115
    }
  }, "Workstation")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 115
    }
  }, "Height Adjustable Desks")), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 114
    }
  }, "Meeting and Conferences")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 113
    }
  }, "(All Desks)"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 49
    }
  }, "Diamond", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 97
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 103
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 109
    }
  }, "Executive Desks"))))))))))), __jsx("li", {
    className: `megamenu-container ${path === '/materials' ? 'active' : ''}`,
    id: "menu-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 17
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    className: "sf-with-ul",
    scroll: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 21
    }
  }, "Materials"), __jsx("div", {
    className: "megamenu demo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "menu-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 41
    }
  }, "Collaborative Collections"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 114
    }
  }, "Executive Desks")), __jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 115
    }
  }, "Workstation")), __jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 115
    }
  }, "Height Adjustable Desks")), __jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 114
    }
  }, "Meeting and Conferences")), __jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 45
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 113
    }
  }, "(All Desks)"))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "banner banner-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 37
    }
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "images/menu/hamburger-menu-image.png",
    alt: "Banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "banner-content banner-content-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "banner-title text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 49
    }
  }, "Diamond", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 97
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 103
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 109
    }
  }, "Executive Desks")))))))))))));
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\header\\partials\\wishlist-menu.jsx";
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
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\product\\details\\detail-one.jsx";

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
var _jsxFileName = "E:\\BAFCO\\bafco\\pages\\_app.jsx";

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
    content: "BAFCO Store",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "description",
    content: "BAFCO Store | Office Furniture, Home Office Furniture Online in the UAE",
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
      lineNumber: 41,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "BAFCO",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "application-name",
    content: "BAFCO Store | Office Furniture, Home Office Furniture Online in the UAE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#cc9966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "images/icons/browserconfig.xml",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "BAFCO Store | Office Furniture, Home Office Furniture Online \u2014 BAFCO Furniture"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images/icons/apple-touch-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "images/icons/favicon_32x32.webp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "images/icons/site.webmanifest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "images/icons/safari-pinned-tab.svg",
    color: "#666666",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "images/icons/favicon_32x32.webp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9iaWxlLW1lbnUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbG9naW4tbW9kYWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvcXVpY2t2aWV3LW1vZGFsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL3ZpZGVvLW1vZGFsLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvcXR5LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvc3RpY2t5LWhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL2xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2NhcnQtbWVudS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9jYXRlZ29yeS1tZW51LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2hlYWRlci1zZWFyY2guanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvbWFpbi1tZW51LmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL3dpc2hsaXN0LW1lbnUuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9wYXJ0aWFscy9wcm9kdWN0L2RldGFpbHMvZGV0YWlsLW9uZS5qc3giLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvcm9vdC1zYWdhLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0LWFwb2xsb1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW1hZ2UtbWFnbmlmaWVyc1wiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwyXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVhY3Qtc2xpZGUtdG9nZ2xlXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10YWJzXCIiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL21vbGxhLXJlYWN0L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIk1vYmlsZU1lbnUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXZlbnRzIiwib24iLCJoaWRlTW9iaWxlTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9uU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXRTZWFyY2hGb3JtIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImNhdGVnb3J5Iiwib25Ub2dnbGUiLCJzZXRDb2xsYXBzaWJsZUVsZW1lbnQiLCJ0b2dnbGVTdGF0ZSIsInRvTG93ZXJDYXNlIiwiUmVhY3QiLCJjdXN0b21TdHlsZXMiLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiTW9kYWwiLCJMb2dpbk1vZGFsIiwib3BlbiIsInNldE9wZW4iLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImNsb3NlTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJvcGVuTW9kYWwiLCJwYWRkaW5nVG9wIiwiUXVpY2tWaWV3TW9kYWwiLCJwcm9wcyIsInNsdWciLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfUFJPRFVDVCIsInZhcmlhYmxlcyIsIm9ubHlEYXRhIiwicHJvZHVjdCIsInNpbmdsZSIsImNhcm91c2VsUmVmIiwic2V0Q2Fyb3VzZWxSZWYiLCJvblRyYW5zbGF0ZSIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJpbmRleCIsImFkZCIsImN1cnJlbnQiLCJnb1RvIiwib2ZmIiwiaGlkZVF1aWNrIiwiY2hhbmdlQmdJbWFnZSIsImN1cnJlbnRUYXJnZXQiLCJtb2RhbFNob3ciLCJuZXciLCJzYWxlX3ByaWNlIiwidG9wIiwic3RvY2siLCJwaWN0dXJlcyIsIm1hcCIsInByb2Nlc3MiLCJ1cmwiLCJoZWlnaHQiLCJ3aWR0aCIsImlkIiwic21fcGljdHVyZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRlbW8iLCJxdWlja1Nob3ciLCJ3aXRoQXBvbGxvIiwic3NyIiwiY29ubmVjdCIsImRlbW9BY3Rpb24iLCJjb250ZW50IiwidHJhbnNmb3JtIiwiVmlkZW9Nb2RhbCIsInNob3dNb2RhbCIsImNsb3NlSGFuZGxlciIsImhpZGVWaWRlbyIsInZpZGVvU2hvdyIsImFjdGlvbnMiLCJRdHkiLCJhZENsYXNzIiwibWF4IiwiY2hhbmdlUXR5Iiwic2V0Q3VycmVudCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImNoYW5nZUN1cnJlbnQiLCJwYXJzZUludCIsIm1pbldpZHRoIiwiU3RpY2t5SGVhZGVyIiwicmVmIiwidXNlUmVmIiwic2V0SGVpZ2h0IiwiaW5pdFN0aWNreSIsInNjcm9sbEhhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RpY2t5Q29udGVudCIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJjb250YWlucyIsIkxheW91dCIsInNjcm9sbFRvcCIsImluY2x1ZGVzIiwidG9TY3JvbGxUb3AiLCJpc1NhZmFyaUJyb3dzZXIiLCJpc0VkZ2VCcm93c2VyIiwicG9zIiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbEJ5Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIkZvb3RlciIsImlzQm90dG9tU3RpY2t5Iiwic2V0SXNCb3R0b21TdGlja3kiLCJjb250YWluZXJDbGFzcyIsInNldENvbnRhaW5lckNsYXNzIiwiaGFuZGxlQm90dG9tU3RpY2t5IiwiYXNQYXRoIiwiaW5uZXJXaWR0aCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkhlYWRlciIsIm9wZW5Nb2JpbGVNZW51IiwiQ2FydE1lbnUiLCJjYXJ0bGlzdCIsImNhcnRRdHlUb3RhbCIsImxlbmd0aCIsIm5hbWUiLCJxdHkiLCJ0b0ZpeGVkIiwicHJpY2UiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRQcmljZVRvdGFsIiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDYXRlZ29yeU1lbnUiLCJIZWFkZXJTZWFyY2giLCJjYXQiLCJzZXRDYXQiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoUHJvZHVjdHMiLCJ1c2VMYXp5UXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJyZXN1bHQiLCJzZXRUaW1lciIsImNsb3NlU2VhcmNoRm9ybSIsInJlZHVjZSIsImFjYyIsIm1pbiIsInZhcmlhbnRzIiwibWluUHJpY2UiLCJtYXhQcmljZSIsIm1hdGNoRW1waGFzaXplIiwicmVnRXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIm1hdGNoIiwib25DYXRTZWxlY3QiLCJzaG93U2VhcmNoRm9ybSIsImdvUHJvZHVjdFBhZ2UiLCJzYWZlQ29udGVudCIsIk1haW5NZW51IiwicGF0aCIsInNob3dBbGxEZW1vcyIsImRlbW9JdGVtcyIsImkiLCJ0b2dnbGUiLCJpbmRleE9mIiwiV2lzaGxpc3RNZW51Iiwid2lzaGxpc3QiLCJEZXRhaWxPbmUiLCJzZXRRdHkiLCJxdHkyIiwic2V0UXR5MiIsImNvbG9yQXJyYXkiLCJzZXRDb2xvckFycmF5Iiwic2l6ZUFycmF5Iiwic2V0U2l6ZUFycmF5IiwidmFyaWF0aW9uR3JvdXAiLCJzZXRWYXJpYXRpb25Hcm91cCIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsImNvbG9yIiwiY29sb3JOYW1lIiwic2l6ZSIsInNob3dDbGVhciIsInNldFNob3dDbGVhciIsInNob3dWYXJpYXRpb25QcmljZSIsInNldFNob3dWYXJpYXRpb25QcmljZSIsInNldE1heFByaWNlIiwic2V0TWluUHJpY2UiLCJjdXIiLCJjb2xvcl9uYW1lIiwicmVmcmVzaFNlbGVjdGFibGVHcm91cCIsImNsaWNrIiwic3RpY2t5QmFyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwib25XaXNobGlzdENsaWNrIiwiaXNJbldpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsInRlbXBBcnJheSIsImZpbmRJbmRleCIsImRpc2FibGVkIiwic2VsZWN0Q29sb3IiLCJzZWxlY3RTaXplIiwib25DaGFuZ2VRdHkiLCJvbkNoYW5nZVF0eTIiLCJjbGVhclNlbGVjdGlvbiIsIm9uQ2FydENsaWNrIiwibmV3UHJvZHVjdCIsImFkZFRvQ2FydCIsInJhdGluZ3MiLCJyZXZpZXciLCJzaG9ydF9kZXNjIiwib3ZlcmZsb3ciLCJjYW5BZGRUb0NhcnQiLCJ3aXNobGlzdEFjdGlvbiIsImNhcnRBY3Rpb24iLCJXcmFwcGVkQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJfX3BlcnNpc3RvciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIndyYXBwZXIiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJjYXJ0UmVkdWNlciIsIndpc2hsaXN0UmVkdWNlciIsImNvbXBhcmVsaXN0IiwiY29tcGFyZVJlZHVjZXIiLCJkZW1vUmVkdWNlciIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwicGVyc2lzdFN0b3JlIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYWxsIiwiY2FydFNhZ2EiLCJ3aXNobGlzdFNhZ2EiLCJjb21wYXJlU2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsVUFBVCxHQUF1QjtBQUNuQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUVDLFVBQUY7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFFLEVBQUYs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUosQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBSixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFKLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQUosQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBSixDQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFKLENBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUosQ0FQSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFB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RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFicywgVGFiTGlzdCwgVGFiLCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgU2xpZGVUb2dnbGUgZnJvbSAncmVhY3Qtc2xpZGUtdG9nZ2xlJztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuZnVuY3Rpb24gTW9iaWxlTWVudSAoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSBdID0gdXNlU3RhdGUoIFwiXCIgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCAncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhpZGVNb2JpbGVNZW51ICk7XHJcbiAgICB9LCBbXSApXHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1vYmlsZU1lbnUgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdtbWVudS1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TZWFyY2hDaGFuZ2UgKCBlICkge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oIGUudGFyZ2V0LnZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJtaXRTZWFyY2hGb3JtICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvc2hvcC9zaWRlYmFyL2xpc3QnLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWNvbnRhaW5lciBtb2JpbGUtbWVudS1saWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWNsb3NlXCIgb25DbGljaz17IGhpZGVNb2JpbGVNZW51IH0+PGkgY2xhc3NOYW1lPVwiaWNvbi1jbG9zZVwiPjwvaT48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXsgb25TdWJtaXRTZWFyY2hGb3JtIH0gY2xhc3NOYW1lPVwibW9iaWxlLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW9iaWxlLXNlYXJjaFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5TZWFyY2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXsgc2VhcmNoVGVybSB9IG9uQ2hhbmdlPXsgb25TZWFyY2hDaGFuZ2UgfSBuYW1lPVwibW9iaWxlLXNlYXJjaFwiIGlkPVwibW9iaWxlLXNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHByb2R1Y3QgLi4uXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj48aSBjbGFzc05hbWU9XCJpY29uLXNlYXJjaFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFicyBkZWZhdWx0SW5kZXg9eyAwIH0gc2VsZWN0ZWRUYWJDbGFzc05hbWU9XCJzaG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3QgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscy1tb2JpbGVcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5DYXRlZ29yaWVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDEgLSBmdXJuaXR1cmUgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yL1wiIHRhcmdldD1cIl9ibGFua1wiPjAyIC0gZnVybml0dXJlIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wMyAtIGVsZWN0cm9uaWMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby00L1wiIHRhcmdldD1cIl9ibGFua1wiPjA0IC0gZWxlY3Ryb25pYyBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDUgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tNi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wNiAtIGZhc2hpb24gc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby03L1wiIHRhcmdldD1cIl9ibGFua1wiPjA3IC0gZmFzaGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MDggLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tOS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4wOSAtIGZhc2hpb24gc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0xMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4xMCAtIHNob2VzIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTEgLSBmdXJuaXR1cmUgc2ltcGxlIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTIgLSBmYXNoaW9uIHNpbXBsZSBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTEzL1wiIHRhcmdldD1cIl9ibGFua1wiPjEzIC0gbWFya2V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTQgLSBtYXJrZXQgZnVsbHdpZHRoPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTUgLSBsb29rYm9vayAxPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTYgLSBsb29rYm9vayAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTcgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTggLSBmYXNoaW9uIHN0b3JlICh3aXRoIHNpZGViYXIpPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMTkvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTkgLSBnYW1lcyBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTIwL1wiIHRhcmdldD1cIl9ibGFua1wiPjIwIC0gYm9vayBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTIxL1wiIHRhcmdldD1cIl9ibGFua1wiPjIxIC0gc3BvcnQgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0yMi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4yMiAtIHRvb2xzIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjMgLSBmYXNoaW9uIGxlZnQgbmF2aWdhdGlvbiBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI0L1wiIHRhcmdldD1cIl9ibGFua1wiPjI0IC0gZXh0cmVtZSBzcG9ydCBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI1L1wiIHRhcmdldD1cIl9ibGFua1wiPjI1IC0gamV3ZWxyeSBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI2L1wiIHRhcmdldD1cIl9ibGFua1wiPjI2IC0gbWFya2V0IHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjcgLSBmYXNoaW9uIHN0b3JlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZC10aGVtZXMuY29tL3JlYWN0L21vbGxhL2RlbW8tMjgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MjggLSBmb29kIG1hcmtldCBzdG9yZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2QtdGhlbWVzLmNvbS9yZWFjdC9tb2xsYS9kZW1vLTI5L1wiIHRhcmdldD1cIl9ibGFua1wiPjI5IC0gdC1zaGlydHMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0zMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4zMCAtIGhlYWRwaG9uZXMgc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kLXRoZW1lcy5jb20vcmVhY3QvbW9sbGEvZGVtby0zMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4zMSAtIHlvZ2Egc3RvcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIj5TaG9wIExpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzJjb2xzXCI+U2hvcCBHcmlkIDIgQ29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHNcIj5TaG9wIEdyaWQgMyBDb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci80Y29sc1wiPlNob3AgR3JpZCA0IENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9tYXJrZXRcIj48c3Bhbj5TaG9wIE1hcmtldDxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9ub3NpZGViYXIvYm94ZWRcIj48c3Bhbj5TaG9wIEJveGVkIE5vIFNpZGViYXI8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLWhvdFwiPkhvdDwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2Z1bGx3aWR0aFwiPlNob3AgRnVsbHdpZHRoIE5vIFNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXRlZ29yeS9ib3hlZFwiPlByb2R1Y3QgQ2F0ZWdvcnkgQm94ZWQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXRlZ29yeS9mdWxsd2lkdGhcIj48c3Bhbj5Qcm9kdWN0IENhdGVnb3J5IEZ1bGx3aWR0aDxzcGFuIGNsYXNzTmFtZT1cInRpcCB0aXAtbmV3XCI+TmV3PC9zcGFuPjwvc3Bhbj48L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9jYXJ0XCI+Q2FydDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL2NoZWNrb3V0XCI+Q2hlY2tvdXQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC93aXNobGlzdFwiPldpc2hsaXN0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3AvZGFzaGJvYXJkXCI+TXkgQWNjb3VudDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5Mb29rYm9vazwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCI+RGVmYXVsdDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2NlbnRlcmVkL2JlaWdlLXJpbmctaGFuZGxlLWNpcmNsZS1jcm9zcy1ib2R5LWJhZ1wiPkNlbnRlcmVkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3QvZXh0ZW5kZWQveWVsbG93LXRpZS1zdHJhcC1ibG9jay1oZWVsLXNhbmRhbHNcIj48c3Bhbj5FeHRlbmRlZCBJbmZvPHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2dhbGxlcnkvYmVpZ2UtbWV0YWwtaG9vcC10b3RlLWJhZ1wiPkdhbGxlcnk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9zdGlja3kvYnJvd24tZmF1eC1mdXItbG9uZ2xpbmUtY29hdFwiPlN0aWNreSBJbmZvPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc2lkZWJhci9iZWlnZS12LW5lY2stYnV0dG9uLWNhcmRpZ2FuXCI+Qm94ZWQgV2l0aCBTaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3QvZnVsbHdpZHRoL2JsYWNrLWZhdXgtbGVhdGhlci1jaGFpbi10cmltLXNhbmRhbHNcIj5GdWxsIFdpZHRoPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Byb2R1Y3QvbWFzb25yeS9ibGFjay1kZW5pbS1kdW5nYXJlZS1kcmVzc1wiPk1hc29ucnkgU3RpY2t5IEluZm88L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hYm91dFwiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5BYm91dCA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXRcIj5BYm91dCAwMTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXQtMlwiPkFib3V0IDAyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+Q29udGFjdCA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdFwiPkNvbnRhY3QgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3QtMlwiPkNvbnRhY3QgMDI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9wYWdlcy9sb2dpblwiPkxvZ2luPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2ZhcVwiPkZBUXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvNDA0XCI+RXJyb3IgNDA0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbWluZy1zb29uXCI+Q29taW5nIFNvb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9jbGFzc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2NsYXNzaWNcIj5DbGFzc2ljPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvbGlzdGluZ1wiID5MaXN0aW5nPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnZXhwYW5kZWQnID8gJ29wZW4nIDogJycgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5HcmlkIDxzcGFuIGNsYXNzTmFtZT1cIm1tZW51LWJ0blwiIG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+PC9zcGFuPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvZ3JpZC8yY29sc1wiPkdyaWQgMiBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvM2NvbHNcIj5HcmlkIDMgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzRjb2xzXCI+R3JpZCA0IGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvZ3JpZC9zaWRlYmFyXCI+R3JpZCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc29ucnkgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5LzJjb2xzXCI+TWFzb25yeSAyIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8zY29sc1wiPk1hc29ucnkgMyBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc29ucnkvNGNvbHNcIj5NYXNvbnJ5IDQgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5L3NpZGViYXJcIj5NYXNvbnJ5IHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2V4cGFuZGVkJyA/ICdvcGVuJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+TWFzayA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc2svZ3JpZFwiPkJsb2cgTWFzayBHcmlkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc2svbWFzb25yeVwiPkJsb2cgTWFzayBNYXNvbnJ5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVUb2dnbGUgY29sbGFwc2VkPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+U2luZ2xlIFBvc3QgPHNwYW4gY2xhc3NOYW1lPVwibW1lbnUtYnRuXCIgb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT48L3NwYW4+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIj5EZWZhdWx0IHdpdGggc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZnVsbHdpZHRoL2Z1c2NlLXBlbGxlbnRlc3F1ZS1zdXNjaXBpdC5cIj5GdWxsd2lkdGggbm8gc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvc2lkZWJhci91dGFsaXF1YW0tc29sbGljaXR6ZHZ1ZGluLWxlb1wiPkZ1bGx3aWR0aCB3aXRoIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyB0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdleHBhbmRlZCcgPyAnb3BlbicgOiAnJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9lbGVtZW50c1wiIGNsYXNzTmFtZT1cInNmLXdpdGgtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbWVudS1idG5cIiBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9wcm9kdWN0c1wiPlByb2R1Y3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3R5cG9ncmFwaHlcIj5UeXBvZ3JhcGh5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3RpdGxlc1wiPlRpdGxlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9iYW5uZXJzXCI+QmFubmVyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9jYXRlZ29yaWVzXCI+UHJvZHVjdCBDYXRlZ29yeTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy92aWRlby1iYW5uZXJzXCI+VmlkZW8gQmFubmVyczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9idXR0b25zXCI+QnV0dG9uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9hY2NvcmRpb25zXCI+QWNjb3JkaW9uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90YWJzXCI+VGFiczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy90ZXN0aW1vbmlhbHNcIj5UZXN0aW1vbmlhbHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvYmxvZy1wb3N0c1wiPkJsb2cgUG9zdHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvY3RhXCI+Q2FsbCB0byBBY3Rpb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvaWNvbi1ib3hlc1wiPkljb24gQm94ZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlLWNhdHMtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1jYXRzLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW0tY2F0cy1sZWFkXCI+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWVsZWN0cm9uaWNzXCI+RWxlY3Ryb25pY3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtLWNhdHMtbGVhZFwiPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1naWZ0LWlkZWFcIj5HaWZ0IElkZWFzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWJlZHNcIj5CZWRzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzNjb2xzP2NhdGVnb3J5PWxpZ2h0aW5nXCI+TGlnaHRpbmc8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9c29mYXMtYW5kLXNsZWVwZXItc29mYXNcIj5Tb2ZhcyAmIFNsZWVwZXIgc29mYXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9c3RvcmFnZVwiPlN0b3JhZ2U8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9YXJtY2hhaXJzLWFuZC1jaGFpc2VzXCI+QXJtY2hhaXJzICYgQ2hhaXNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29scz9jYXRlZ29yeT1kZWNvcmF0aW9uXCI+RGVjb3JhdGlvbiA8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9a2l0Y2hlbi1jYWJpbmV0c1wiPktpdGNoZW4gQ2FiaW5ldHM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9Y29mZmVlLWFuZC10YWJsZXNcIj5Db2ZmZWUgJiBUYWJsZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvM2NvbHM/Y2F0ZWdvcnk9ZnVybml0dXJlXCI+T3V0ZG9vciBGdXJuaXR1cmUgPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJUd2l0dGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPjxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIllvdXR1YmVcIj48aSBjbGFzc05hbWU9XCJpY29uLXlvdXR1YmVcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggTW9iaWxlTWVudSApOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgeyBUYWJzLCBUYWJMaXN0LCBUYWIsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc3LDc3LDc3LDAuNiknLFxyXG4gICAgICAgIHpJbmRleDogJzkwMDAnXHJcbiAgICB9XHJcbn1cclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoICdib2R5JyApO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Nb2RhbCAoKSB7XHJcbiAgICBjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgbGV0IHRpbWVyO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggdGltZXIgKSBjbGVhclRpbWVvdXQoIHRpbWVyICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImxvZ2luLW1vZGFsXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oIGZhbHNlICk7XHJcbiAgICAgICAgfSwgMzUwICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0T3BlbiggdHJ1ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyBvcGVuTW9kYWwgfT5TaWduIGluIC8gU2lnbiB1cDwvYT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17IG9wZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IGN1c3RvbVN0eWxlcyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbD1cImxvZ2luIE1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9naW4tbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17IDEwIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsgY2xvc2VNb2RhbCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzIHNlbGVjdGVkVGFiQ2xhc3NOYW1lPVwic2hvd1wiIGRlZmF1bHRJbmRleD17IDAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIG5hdi1maWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbiBJbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJlZ2lzdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHN0eWxlPXsgeyBwYWRkaW5nVG9wOiBcIjJyZW1cIiB9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpbmdpbi1lbWFpbC0yXCI+VXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzcyAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwic2luZ2luLWVtYWlsLTJcIiBuYW1lPVwic2luZ2luLWVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2luZ2luLXBhc3N3b3JkLTJcIj5QYXNzd29yZCAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInNpbmdpbi1wYXNzd29yZC0yXCIgbmFtZT1cInNpbmdpbi1wYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxPRyBJTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvbmctYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwic2lnbmluLXJlbWVtYmVyLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJzaWduaW4tcmVtZW1iZXItMlwiPlJlbWVtYmVyIE1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvcmdvdC1saW5rXCI+Rm9yZ290IFlvdXIgUGFzc3dvcmQ/PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5vciBzaWduIGluIHdpdGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dpbiBidG4tZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWdvb2dsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIFdpdGggR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9naW4gYnRuLWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdpc3Rlci1lbWFpbC0yXCI+WW91ciBlbWFpbCBhZGRyZXNzICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZWdpc3Rlci1lbWFpbC0yXCIgbmFtZT1cInJlZ2lzdGVyLWVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnaXN0ZXItcGFzc3dvcmQtMlwiPlBhc3N3b3JkICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJyZWdpc3Rlci1wYXNzd29yZC0yXCIgbmFtZT1cInJlZ2lzdGVyLXBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TSUdOIFVQPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cInJlZ2lzdGVyLXBvbGljeS0yXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJyZWdpc3Rlci1wb2xpY3ktMlwiPkkgYWdyZWUgdG8gdGhlIHByaXZhY3kgcG9saWN5ICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPm9yIHNpZ24gaW4gd2l0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ2luIGJ0bi1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1nb29nbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTEgbXQtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dpbiAgYnRuLWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gV2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsOyIsImltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFnbmlmaWVyIH0gZnJvbSAncmVhY3QtaW1hZ2UtbWFnbmlmaWVycyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbmltcG9ydCBPd2xDYXJvdXNlbCBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsJztcclxuaW1wb3J0IERldGFpbE9uZSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZHVjdC9kZXRhaWxzL2RldGFpbC1vbmUnO1xyXG5cclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi9zZXJ2ZXIvYXBvbGxvJztcclxuaW1wb3J0IHsgR0VUX1BST0RVQ1QgfSBmcm9tICd+L3NlcnZlci9xdWVyaWVzJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgZGVtb0FjdGlvbiB9IGZyb20gJ34vc3RvcmUvZGVtbyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTEsNTEsNTEsMC42KScsXHJcbiAgICAgICAgekluZGV4OiAnOTAwMCdcclxuICAgIH1cclxufTtcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoICdib2R5JyApO1xyXG5cclxuZnVuY3Rpb24gUXVpY2tWaWV3TW9kYWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcHJvcHM7XHJcbiAgICBpZiAoICFzbHVnICkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoIEdFVF9QUk9EVUNULCB7IHZhcmlhYmxlczogeyBzbHVnLCBvbmx5RGF0YTogdHJ1ZSB9IH0gKTtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdC5zaW5nbGU7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgY2Fyb3VzZWxSZWYsIHNldENhcm91c2VsUmVmIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50cyA9IHtcclxuICAgICAgICBvblRyYW5zbGF0ZTogZnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnF1aWNrVmlldy1jb250ZW50IC5wcm9kdWN0LWdhbGxlcnktaXRlbScgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5xdWlja1ZpZXctY29udGVudCAucHJvZHVjdC1nYWxsZXJ5LWl0ZW0uYWN0aXZlJyApLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XHJcbiAgICAgICAgICAgIGl0ZW1zWyBlLml0ZW0uaW5kZXggXS5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlJyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCAncm91dGVDaGFuZ2VTdGFydCcsIGNsb3NlTW9kYWwgKTtcclxuICAgICAgICBjYXJvdXNlbFJlZiAmJiBjYXJvdXNlbFJlZi5jdXJyZW50ICYmIGNhcm91c2VsUmVmLmN1cnJlbnQuZ29UbyggMCApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZiggJ3JvdXRlQ2hhbmdlU3RhcnQnLCBjbG9zZU1vZGFsICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgICAgIGlmICggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCIuUmVhY3RNb2RhbF9fQ29udGVudFwiICkgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX0NvbnRlbnRcIiApLmNsYXNzTGlzdC5yZW1vdmUoIFwiUmVhY3RNb2RhbF9fQ29udGVudC0tYWZ0ZXItb3BlblwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5oaWRlUXVpY2soKTtcclxuICAgICAgICB9LCAyNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VCZ0ltYWdlICggZSwgaW5kZXggKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5xdWlja1ZpZXctY29udGVudCAucHJvZHVjdC1nYWxsZXJ5LWl0ZW0uYWN0aXZlJyApLmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUnICk7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUnICk7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5nb1RvKCBpbmRleCApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoICFzbHVnIHx8IGVycm9yICkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17IHByb3BzLm1vZGFsU2hvdyB9XHJcbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIHF1aWNrVmlldy1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBjbG9zZVRpbWVvdXRNUz17IDEwMCB9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJRdWlja1ZpZXdcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9eyBjdXN0b21TdHlsZXMgfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0LXF1aWNrdmlld1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2tWaWV3LWNvbnRlbnQgaG9yaXpvbnRhbCBza2VsZXRvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYHJvdyBza2VsLXByby1zaW5nbGUgc2tlbC1xdWlja3ZpZXcgbWItMCAke2xvYWRpbmcgPyAnJyA6ICdsb2FkZWQnfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC0wIHByLWxnLTIgbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsLXByb2R1Y3QtZ2FsbGVyeVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxnIG1iLTEgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtbmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNhbGVfcHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtbGFiZWwgbGFiZWwtc2FsZVwiPlNhbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QudG9wID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLXRvcFwiPlRvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWxhYmVsIGxhYmVsLW91dFwiPk91dCBvZiBTdG9jazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWwgYWRDbGFzcz1cInByb2R1Y3QtZ2FsbGVyeS1jYXJvdXNlbCBvd2wtZnVsbCBvd2wtbmF2LWRhcmsgY29scy0xIGNvbHMtbWQtMiBjb2xzLWxnLTNcIiBvbkNoYW5nZVJlZj17IHNldENhcm91c2VsUmVmIH0gZXZlbnRzPXsgZXZlbnRzIH0gb3B0aW9ucz17IHsgJ2RvdHMnOiBmYWxzZSwgJ25hdic6IGZhbHNlIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdC5waWN0dXJlcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWduaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpdGVtLnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlSW1hZ2VTcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBpdGVtLnVybCB9IC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdUb01vdmU9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZhdGlvbj1cImhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yU3R5bGVBY3RpdmU9XCJjcm9zc2hhaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWdhbGxlcnktaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgcGFkZGluZ1RvcDogYCR7cHJvZHVjdC5waWN0dXJlc1sgMCBdLmhlaWdodCAvIHByb2R1Y3QucGljdHVyZXNbIDAgXS53aWR0aCAqIDEwMH0lYCB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgXCJnYWxsZXJ5LVwiICsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNtIHJvdyBweC0yXCIgaWQ9XCJvd2wtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnBpY3R1cmVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgcHJvZHVjdC1nYWxsZXJ5LWl0ZW0gbWItMCAkezAgPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gIH0ga2V5PXsgcHJvZHVjdC5pZCArICctJyArIGluZGV4IH0gb25DbGljaz17IGUgPT4gY2hhbmdlQmdJbWFnZSggZSwgaW5kZXggKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhenktbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF6eS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgaW5kZXggXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHF1aWNrdmlldy1kZXNjIHBsLTAgcGwtbGctNCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5IHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1zdW1tYXJ5MSBtdC0yIG10LW1kLTBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LXN1bW1hcnkyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbE9uZSBwcm9kdWN0PXsgcHJvZHVjdCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiQ2xvc2UgKEVzYylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWZwLWNsb3NlXCIgb25DbGljaz17IGNsb3NlTW9kYWwgfT48c3Bhbj7Dlzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2x1Zzogc3RhdGUuZGVtby5zaW5nbGUsXHJcbiAgICAgICAgbW9kYWxTaG93OiBzdGF0ZS5kZW1vLnF1aWNrU2hvdyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT0gJ3VuZGVmaW5lZCcgfSApKCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHsgLi4uZGVtb0FjdGlvbiB9ICkoIFF1aWNrVmlld01vZGFsICkgKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2RlbW8nO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw3Nyw3NywwLjYpJyxcclxuICAgICAgICB6SW5kZXg6ICc5MDAwJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuTW9kYWwuc2V0QXBwRWxlbWVudCggJ2JvZHknICk7XHJcblxyXG5mdW5jdGlvbiBWaWRlb01vZGFsICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHNob3dNb2RhbCB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgY2xvc2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiI3ZpZGVvLW1vZGFsXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcIlJlYWN0TW9kYWxfX0NvbnRlbnQtLWFmdGVyLW9wZW5cIiApO1xyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiLlJlYWN0TW9kYWxfX092ZXJsYXlcIiApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIi5SZWFjdE1vZGFsX19PdmVybGF5XCIgKS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5oaWRlVmlkZW8oKTtcclxuICAgICAgICB9LCAzNTAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49eyBzaG93TW9kYWwgfVxyXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17IGNsb3NlSGFuZGxlciB9XHJcbiAgICAgICAgICAgIHN0eWxlPXsgY3VzdG9tU3R5bGVzIH1cclxuICAgICAgICAgICAgY29udGVudExhYmVsPVwiVmlkZW8gTW9kYWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aWRlby1tb2RhbCBwLTNcIlxyXG4gICAgICAgICAgICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgIGlkPVwidmlkZW8tbW9kYWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsgY2xvc2VIYW5kbGVyIH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwibWZwLWlmcmFtZSBtb2RhbC1jb250ZW50XCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvdkJQZ21BU1ExQTA/YXV0b3BsYXk9MVwiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93RnVsbFNjcmVlbj1cIlwiIHRpdGxlPVwieW91dHViZVwiPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TW9kYWw6IHN0YXRlLmRlbW8udmlkZW9TaG93XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucyApKCBWaWRlb01vZGFsICk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBRdHkgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgdmFsdWUgPSAxLCBhZENsYXNzID0gXCJcIiwgbWF4ID0gMTAwMDAsIGNoYW5nZVF0eSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKCB2YWx1ZSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnQoIHZhbHVlICk7XHJcbiAgICB9LCBbIHZhbHVlIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGNoYW5nZVF0eSAmJiBjaGFuZ2VRdHkoIGN1cnJlbnQgKTtcclxuICAgIH0sIFsgY3VycmVudCBdIClcclxuXHJcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnQgKCkge1xyXG4gICAgICAgIGlmICggbWF4IDw9IDAgfHwgY3VycmVudCA+PSBtYXggKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2V0Q3VycmVudCggY3VycmVudCArIDEgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWNyZW1lbnQgKCkge1xyXG4gICAgICAgIGlmICggY3VycmVudCA+IDEgKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoIGN1cnJlbnQgLSAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnQgKCBlICkge1xyXG4gICAgICAgIGlmICggcGFyc2VJbnQoIGUuY3VycmVudFRhcmdldC52YWx1ZSApIDwgbWF4ICkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KCBwYXJzZUludCggZS5jdXJyZW50VGFyZ2V0LnZhbHVlICkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBwcm9kdWN0LWRldGFpbHMtcXVhbnRpdHkgJHthZENsYXNzfWAgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1zcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBtaW5XaWR0aDogJzI2cHgnIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlY3JlbWVudCBidG4tc3Bpbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBkZWNyZW1lbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgbWF4IH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBjaGFuZ2VDdXJyZW50IH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IG1pbldpZHRoOiAnMjZweCcgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5jcmVtZW50IGJ0bi1zcGlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBpbmNyZW1lbnQgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXR5OyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gU3RpY2t5SGVhZGVyICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCB7IHRvcCA9IDIxMCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoIFwiXCIgKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgWyBoZWlnaHQsIHNldEhlaWdodCBdID0gdXNlU3RhdGUoICdhdXRvJyApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBpbml0U3RpY2t5ICk7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwge1xyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIsIHtcclxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyICk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgcmVzaXplSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U3RpY2t5ICgpIHtcclxuICAgICAgICBsZXQgc3RpY2t5Q29udGVudCA9IHJlZi5jdXJyZW50LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgc2V0SGVpZ2h0KCBzdGlja3lDb250ZW50Lm9mZnNldEhlaWdodCArICdweCcgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyICgpIHtcclxuICAgICAgICBsZXQgc3RpY2t5Q29udGVudCA9IHJlZi5jdXJyZW50LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiB0b3AgKSB7XHJcbiAgICAgICAgICAgIGlmICggIXN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lDb250ZW50LmNsYXNzTGlzdC5hZGQoICdmaXhlZCcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgIHN0aWNreUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpeGVkJyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodCggc3RpY2t5Q29udGVudC5vZmZzZXRIZWlnaHQgKyAncHgnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIgKCkge1xyXG4gICAgICAgIGxldCBzdGlja3lDb250ZW50ID0gcmVmLmN1cnJlbnQuY2hpbGRyZW5bIDAgXTtcclxuICAgICAgICBzZXRIZWlnaHQoIHN0aWNreUNvbnRlbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyApO1xyXG4gICAgICAgIHNjcm9sbEhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXsgcmVmIH0gY2xhc3NOYW1lPVwic3RpY2t5LXdyYXBwZXJcIiBzdHlsZT17IHsgaGVpZ2h0OiBoZWlnaHQgfSB9PlxyXG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUhlYWRlcjsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL3BhcnRpYWxzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9wYXJ0aWFscy9mb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCBWaWRlb01vZGFsIGZyb20gXCIuL2ZlYXR1cmVzL21vZGFscy92aWRlby1tb2RhbFwiO1xyXG5pbXBvcnQgUXVpY2tWaWV3TW9kYWwgZnJvbSBcIi4vZmVhdHVyZXMvbW9kYWxzL3F1aWNrdmlldy1tb2RhbFwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9mZWF0dXJlcy9tb2JpbGUtbWVudVwiO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2RlbW8nO1xyXG5pbXBvcnQgeyBpc1NhZmFyaUJyb3dzZXIsIGlzRWRnZUJyb3dzZXIgfSBmcm9tIFwifi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0ICggeyBjaGlsZHJlbiwgaGlkZVF1aWNrLCBoaWRlVmlkZW8gfSApIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciggXCJcIiApO1xyXG4gICAgbGV0IHNjcm9sbFRvcDtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBpZiAoIHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyggJ3BhZ2VzL2NvbWluZy1zb29uJyApICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImhlYWRlclwiICkuY2xhc3NMaXN0LmFkZCggXCJkLW5vbmVcIiApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImZvb3RlclwiICkuY2xhc3NMaXN0LmFkZCggXCJkLW5vbmVcIiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiaGVhZGVyXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcImQtbm9uZVwiICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiZm9vdGVyXCIgKS5jbGFzc0xpc3QucmVtb3ZlKCBcImQtbm9uZVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaGlkZVF1aWNrKCk7XHJcbiAgICAgICAgaGlkZVZpZGVvKCk7XHJcbiAgICAgICAgc2Nyb2xsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNzY3JvbGwtdG9wJyApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciwgZmFsc2UgKTtcclxuICAgIH0sIFtdIClcclxuXHJcbiAgICBmdW5jdGlvbiB0b1Njcm9sbFRvcCAoKSB7XHJcbiAgICAgICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggcG9zIDw9IDAgKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoIDAsIC0xMjAgKTtcclxuICAgICAgICAgICAgICAgIHBvcyAtPSAxMjA7XHJcbiAgICAgICAgICAgIH0sIDEgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID49IDQwMCApIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5hZGQoICdzaG93JyApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKCAnc2hvdycgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZU1vYmlsZU1lbnUgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApLmNsYXNzTGlzdC5yZW1vdmUoICdtbWVudS1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LW92ZXJsYXlcIiBvbkNsaWNrPXsgaGlkZU1vYmlsZU1lbnUgfT48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNjcm9sbC10b3BcIiB0aXRsZT1cIkJhY2sgdG8gdG9wXCIgb25DbGljaz17IHRvU2Nyb2xsVG9wIH0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPE1vYmlsZU1lbnUgLz5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXsgMzAwMCB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17IDMwMCB9XHJcbiAgICAgICAgICAgICAgICBuZXdlc3RPblRvPXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2FzdC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b249eyBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9eyB0cnVlIH1cclxuICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wPXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9eyBmYWxzZSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxRdWlja1ZpZXdNb2RhbCAvPlxyXG4gICAgICAgICAgICA8VmlkZW9Nb2RhbCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBudWxsLCB7IC4uLmFjdGlvbnMgfSApKCBMYXlvdXQgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoXCJcIik7XHJcbiAgICBjb25zdCBbaXNCb3R0b21TdGlja3ksIHNldElzQm90dG9tU3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb250YWluZXJDbGFzcywgc2V0Q29udGFpbmVyQ2xhc3NdID0gdXNlU3RhdGUoJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQm90dG9tU3RpY2t5KCk7XHJcbiAgICAgICAgc2V0Q29udGFpbmVyQ2xhc3Mocm91dGVyLmFzUGF0aC5pbmNsdWRlcygnZnVsbHdpZHRoJykgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInKTtcclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlQm90dG9tU3RpY2t5LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZUJvdHRvbVN0aWNreSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQm90dG9tU3RpY2t5KCkge1xyXG4gICAgICAgIHNldElzQm90dG9tU3RpY2t5KHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygncHJvZHVjdC9kZWZhdWx0JykgJiYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciBmb290ZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1taWRkbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldC1hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2JhZmNvLWxvZ28ucG5nXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ29cIiBhbHQ9XCJGb290ZXIgTG9nb1wiIHdpZHRoPVwiMTUwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmFlc2VudCBkYXBpYnVzLCBuZXF1ZSBpZCBjdXJzdXMgdWNpYnVzLCB0b3J0b3IgbmVxdWUgZWdlc3RhcyBhdWd1ZSwgZXUgdnVscHV0YXRlIG1hZ25hIGVyb3MgZXUgZXJhdC4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBOYW0gZHVpIG1pLCB0aW5jaWR1bnQgcXVpcywgYWNjdW1zYW4gcG9ydHRpdG9yLCBmYWNpbGlzaXMgbHVjdHVzLCBtZXR1cy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFib3V0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1jb2xvclwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lkZ2V0LWFib3V0LXRpdGxlXCI+U29jaWFsIE1lZGlhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtaW5zdGFncmFtXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiSW5zdGFncmFtXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb24gc29jaWFsLWZhY2Vib29rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRmFjZWJvb2tcIj48aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rLWZcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb24gc29jaWFsLWxpbmtlZGluXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwibGlua2VkaW5cIj48aSBjbGFzc05hbWU9XCJpY29uLWxpbmtlZGluXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC10d2l0dGVyXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiVHdpdHRlclwiPjxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lkZ2V0LWFib3V0LXRpdGxlXCI+UGF5bWVudCBNZXRob2Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZm9vdGVyLXBheW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wYXltZW50cy5wbmdcIiBhbHQ9XCJQYXltZW50IG1ldGhvZHNcIiB3aWR0aD1cIjI3MlwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPlFVSUNLIExJTktTPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5TcGFjZSBQbGFubmluZyBTZXJ2aWNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkRlbGl2ZXJ5ICYgSW5zdGFsbGF0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+RmFicmljICYgRmluaXNoZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5XYXJyYW50eTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlByb2plY3QgUmVmZXJlbmNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlRlc3RpbW9uaWFsczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkJMT0dTLyBJbnNpZ2h0czwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbGctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+U0hPUDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+Q2hhaXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+RGVza3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5Db2xsYWJvcmF0aXZlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+U3RvcmFnZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5BY2Nlc3NvcmllczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPk1hdGVyaWFsczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+TVkgQUNDT1VOVDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+TXkgYWNjb3VudDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkxvZ2luPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+T3JkZXIgSGlzdG9yeTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlRlcm1zICYgQ29uZGl0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+RkFRczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbGctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+QkFGQ088L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkFib3V0IFVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+U2VydmljZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5Jbm5vdmF0aW9uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlJlc291cmNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPlZpc2l0IG91ciBTaG93cm9vbTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHViYWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQkFGQ08gT2ZmaWNlICYgU2hvd3Jvb20gR3JvdW5kIEZsb29yLCBBbCBNYW5hcmEgQnVpbGRpbmcgKG5lYXIgQWwgU2FmYSBNZXRybyBTdGF0aW9uKSBTaGVpa2ggWmF5ZWQgUm9hZCwgRHViYWksIFVBRTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpIHsobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKX0gQmFmY28gU3RvcmUuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+VGVybXMgT2YgVXNlPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5TaGlwcGluZyBQb2xpY3k8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnMgc29jaWFsLWljb25zLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlc2lnbmVkIGFuZCBNYW5hZ2VkIGJ5IDxBTGluayBocmVmPVwiaHR0cHM6Ly93d3cucHJpc20tbWUuY29tL1wiPlByaXNtPC9BTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJzb2NpYWwtbGFiZWxcIj5Tb2NpYWwgTWVkaWE8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtZmFjZWJvb2tcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGYWNlYm9va1wiPjxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2stZlwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtdHdpdHRlclwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIlR3aXR0ZXJcIj48aSBjbGFzc05hbWU9XCJpY29uLXR3aXR0ZXJcIj48L2k+PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb24gc29jaWFsLWluc3RhZ3JhbVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIkluc3RhZ3JhbVwiPjxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC15b3V0dWJlXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiWW91dHViZVwiPjxpIGNsYXNzTmFtZT1cImljb24teW91dHViZVwiPjwvaT48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtcGludGVyZXN0XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiUGludGVyZXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1waW50ZXJlc3RcIj48L2k+PC9BTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzQm90dG9tU3RpY2t5ID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRm9vdGVyKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvbG9naW4tbW9kYWwnO1xyXG5pbXBvcnQgSGVhZGVyU2VhcmNoIGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvaGVhZGVyLXNlYXJjaCc7XHJcbmltcG9ydCBXaXNobGlzdE1lbnUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy93aXNobGlzdC1tZW51JztcclxuaW1wb3J0IENhcnRNZW51IGZyb20gJ34vY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvcGFydGlhbHMvY2FydC1tZW51JztcclxuaW1wb3J0IENhdGVnb3J5TWVudSBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyL3BhcnRpYWxzL2NhdGVnb3J5LW1lbnUnO1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnfi9jb21wb25lbnRzL3BhcnRpYWxzL2hlYWRlci9wYXJ0aWFscy9tYWluLW1lbnUnO1xyXG5pbXBvcnQgU3RpY2t5SGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9zdGlja3ktaGVhZGVyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2NvbnRhaW5lckNsYXNzLCBzZXRDb250YWluZXJDbGFzc10gPSB1c2VTdGF0ZSgnY29udGFpbmVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ21tZW51LWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29udGFpbmVyQ2xhc3Mocm91dGVyLmFzUGF0aC5pbmNsdWRlcygnZnVsbHdpZHRoJykgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInKTtcclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBoZWFkZXItMiBoZWFkZXItaW50cm8tY2xlYXJhbmNlXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdCBvdmVyZmxvdy1oaWRkZW4gbXItMyBtci1zbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tc2cgZC1mbGV4IGZsZXgtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TcGVjaWFsIGNvbGxlY3Rpb24gYWxyZWFkeSBhdmFpbGFibGUuPC9wPjxBTGluayBocmVmPVwiI1wiPiZuYnNwO1JlYWQgbW9yZSAuLi48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+TGlua3M8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5VU0Q8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkV1cjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5Vc2Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5FbmdsaXNoPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5FbmdsaXNoPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkZyZW5jaDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5TcGFuaXNoPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbk1vZGFsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS10b2dnbGVyXCIgb25DbGljaz17b3Blbk1vYmlsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBtb2JpbGUgbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYmFyc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9iYWZjby1sb2dvLnBuZ1wiIGFsdD1cIk1vbGxhIExvZ29cIiB3aWR0aD17MTUwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclNlYXJjaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3AvZGFzaGJvYXJkXCIgdGl0bGU9XCJNeSBhY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2lzaGxpc3RNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFN0aWNreUhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbSBzdGlja3ktaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5NZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0IG92ZXJmbG93LWhpZGRlblwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkxpbmtzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5VU0Q8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPlVTRDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkFFRDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEFMaW5rIGhyZWY9XCIjXCI+RW5nbGlzaDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxBTGluayBocmVmPVwiI1wiPkFyYWJpYzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT48QUxpbmsgaHJlZj1cIiNcIj5TcGFuaXNoPC9BTGluaz48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMb2dpbk1vZGFsIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwibGEgbGEtbGlnaHRidWxiLW9cIj48L2k+PHAgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPkNsZWFyYW5jZTxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPiZuYnNwO1VwIHRvIDMwJSBPZmY8L3NwYW4+PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0aWNreUhlYWRlcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICd+L3N0b3JlL2NhcnQnO1xyXG5pbXBvcnQgeyBjYXJ0UXR5VG90YWwsIGNhcnRQcmljZVRvdGFsIH0gZnJvbSAnfi91dGlscy9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiBDYXJ0TWVudSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBjYXJ0bGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGNhcnQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9jYXJ0XCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGRhdGEtZGlzcGxheT1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtY291bnRcIj57IGNhcnRRdHlUb3RhbCggY2FydGxpc3QgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXJ0PC9wPlxyXG4gICAgICAgICAgICA8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0ICR7Y2FydGxpc3QubGVuZ3RoID09PSAwID8gJ3RleHQtY2VudGVyJyA6ICcnfWAgfSA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCA9PT0gY2FydGxpc3QubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgaW4gdGhlIGNhcnQuPC9wPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNhcnQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhcnRsaXN0Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5zbHVnfWAgfT57IGl0ZW0ubmFtZSB9PC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtcXR5XCI+eyBpdGVtLnF0eSB9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggJHsgaXRlbS5zYWxlX3ByaWNlID8gaXRlbS5zYWxlX3ByaWNlLnRvRml4ZWQoIDIgKSA6IGl0ZW0ucHJpY2UudG9GaXhlZCggMiApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5zbHVnfWAgfSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgaXRlbS5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXJlbW92ZVwiIHRpdGxlPVwiUmVtb3ZlIFByb2R1Y3RcIiBvbkNsaWNrPXsgKCkgPT4gcHJvcHMucmVtb3ZlRnJvbUNhcnQoIGl0ZW0gKSB9PjxpIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY2FydC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXRvdGFsLXByaWNlXCI+JHsgY2FydFByaWNlVG90YWwoIGNhcnRsaXN0ICkudG9Mb2NhbGVTdHJpbmcoIHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9ICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY2FydC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9zaG9wL2NhcnRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3IENhcnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeS0yXCI+PHNwYW4+Q2hlY2tvdXQ8L3NwYW4+PGkgY2xhc3NOYW1lPVwiaWNvbi1sb25nLWFycm93LXJpZ2h0XCI+PC9pPjwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzICggc3RhdGUgKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnRsaXN0OiBzdGF0ZS5jYXJ0bGlzdC5kYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIG1hcFN0YXRlVG9Qcm9wcywgeyAuLi5hY3Rpb25zIH0gKSggQ2FydE1lbnUgKTsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5TWVudSgpIHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUm91dGVyKCkucXVlcnk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGNhdGVnb3J5LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIHRpdGxlPVwiQnJvd3NlIENhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzaWRlLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LXZlcnRpY2FsIHNmLWFycm93c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnZWxlY3Ryb25pY3MnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+VG9wIE1hbmFnZW1lbnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdnaWZ0LWlkZWEnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+U2VuaW9yIE1hbmFnZW1lbnQ8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdiZWRzJyA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiIHNjcm9sbD17ZmFsc2V9Pk1hamxpcyBBcmVhPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnbGlnaHRpbmcnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+TWFuYWdlbWVudCBEZXNrICYgQ2hhaXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnc29mYXMtYW5kLXNsZWVwZXItc29mYXMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+V29ya3N0YXRpb24gJiBFcmdvbm9taWMgQ2hhaXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnc3RvcmFnZScgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIiBzY3JvbGw9e2ZhbHNlfT5Gb3JtYWwgYW5kIENhc3VhbCBNZWV0aW5nIEFyZWE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3F1ZXJ5LmNhdGVnb3J5ID09ICdhcm1jaGFpcnMtYW5kLWNoYWlzZXMnID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCIgc2Nyb2xsPXtmYWxzZX0+Q29sbGFib3JhdGl2ZSAmIFB1YmxpYyBTZWF0aW5nPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtxdWVyeS5jYXRlZ29yeSA9PSAnZGVjb3JhdGlvbicgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIiBzY3JvbGw9e2ZhbHNlfT5UcmFpbmluZyBBcmVhICYgUGFudHJ5IEFyZWE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5TWVudTsgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBBTGluayBmcm9tICd+L2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsnO1xyXG5cclxuaW1wb3J0IHsgR0VUX1BST0RVQ1RTIH0gZnJvbSAnfi9zZXJ2ZXIvcXVlcmllcyc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vc2VydmVyL2Fwb2xsbyc7XHJcbmltcG9ydCB7IHNhZmVDb250ZW50IH0gZnJvbSAnfi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJTZWFyY2ggKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCBcIlwiICk7XHJcbiAgICBjb25zdCBbIGNhdCwgc2V0Q2F0IF0gPSB1c2VTdGF0ZSggXCJcIiApO1xyXG4gICAgY29uc3QgWyBzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtIF0gPSB1c2VTdGF0ZSggXCJcIiApO1xyXG4gICAgY29uc3QgWyBwcm9kdWN0cywgc2V0UHJvZHVjdHMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzZWFyY2hQcm9kdWN0cywgeyBkYXRhIH0gXSA9IHVzZUxhenlRdWVyeSggR0VUX1BST0RVQ1RTICk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkYXRhICYmIGRhdGEucHJvZHVjdHMuZGF0YTtcclxuICAgIGNvbnN0IFsgdGltZXIsIHNldFRpbWVyIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiYm9keVwiICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgY2xvc2VTZWFyY2hGb3JtICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggXCJib2R5XCIgKS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBjbG9zZVNlYXJjaEZvcm0gKTtcclxuICAgICAgICB9IClcclxuICAgIH0sIFtdICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCByZXN1bHQgJiYgc2VhcmNoVGVybS5sZW5ndGggPiAyIClcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMoIHJlc3VsdC5yZWR1Y2UoICggYWNjLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluID0gOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWluID4gaXRlbS5wcmljZSApIG1pbiA9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXggPCBpdGVtLnByaWNlICkgbWF4ID0gaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgICAgIH0sIFtdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3Quc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlOiBtaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFByaWNlOiBtYXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9LCBbXSApIClcclxuICAgIH0sIFsgcmVzdWx0LCBzZWFyY2hUZXJtIF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggc2VhcmNoVGVybS5sZW5ndGggPiAyICkge1xyXG4gICAgICAgICAgICBpZiAoIHRpbWVyICkgY2xlYXJUaW1lb3V0KCB0aW1lciApO1xyXG4gICAgICAgICAgICBsZXQgdGltZXJJZCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFByb2R1Y3RzKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0sIDUwMCApO1xyXG4gICAgICAgICAgICBzZXRUaW1lciggdGltZXJJZCApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VhcmNoVGVybSwgY2F0IF0gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlci1zZWFyY2guc2hvdy1yZXN1bHRzJyApICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuaGVhZGVyLXNlYXJjaC5zaG93LXJlc3VsdHMnICkuY2xhc3NMaXN0LnJlbW92ZSggJ3Nob3ctcmVzdWx0cycgKTtcclxuICAgIH0sIFsgcm91dGVyLnBhdGhuYW1lIF0gKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaEVtcGhhc2l6ZSAoIG5hbWUgKSB7XHJcbiAgICAgICAgbGV0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoIHNlYXJjaFRlcm0sIFwiaVwiICk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgcmVnRXhwLFxyXG4gICAgICAgICAgICAoIG1hdGNoICkgPT4gXCI8c3Ryb25nPlwiICsgbWF0Y2ggKyBcIjwvc3Ryb25nPlwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaEZvcm0gKCBlICkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCAnLmhlYWRlciAuaGVhZGVyLXNlYXJjaCcgKVxyXG4gICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSggJ3Nob3cnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DYXRTZWxlY3QgKCBlICkge1xyXG4gICAgICAgIHNldENhdCggZS50YXJnZXQudmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblNlYXJjaENoYW5nZSAoIGUgKSB7XHJcbiAgICAgICAgc2V0U2VhcmNoVGVybSggZS50YXJnZXQudmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2VhcmNoRm9ybSAoIGUgKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoICcuaGVhZGVyIC5oZWFkZXItc2VhcmNoJyApXHJcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCAnc2hvdycgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Ym1pdFNlYXJjaEZvcm0gKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9zaG9wL3NpZGViYXIvbGlzdCcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdvUHJvZHVjdFBhZ2UgKCkge1xyXG4gICAgICAgIHNldFNlYXJjaFRlcm0oICcnICk7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMoIFtdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2ggaGVhZGVyLXNlYXJjaC1leHRlbmRlZCBoZWFkZXItc2VhcmNoLXZpc2libGUgaGVhZGVyLXNlYXJjaC1uby1yYWRpdXMgZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtdG9nZ2xlXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj48L2k+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiZ2V0XCIgb25TdWJtaXQ9eyBvblN1Ym1pdFNlYXJjaEZvcm0gfSBvbkNsaWNrPXsgc2hvd1NlYXJjaEZvcm0gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlYXJjaC13cmFwcGVyIHNlYXJjaC13cmFwcGVyLXdpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInFcIiBjbGFzc05hbWU9XCJzci1vbmx5XCIgdmFsdWU9eyBzZWFyY2hUZXJtIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+U2VhcmNoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IG9uU2VhcmNoQ2hhbmdlIH0gdmFsdWU9eyBzZWFyY2hUZXJtIH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInFcIiBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPjxpIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl2ZS1zZWFyY2gtbGlzdFwiIG9uQ2xpY2s9eyBnb1Byb2R1Y3RQYWdlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggcHJvZHVjdHMubGVuZ3RoID4gMCAmJiBzZWFyY2hUZXJtLmxlbmd0aCA+IDIgKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybS5sZW5ndGggPiAyICYmIHByb2R1Y3RzLm1hcCggKCBwcm9kdWN0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17IGAvcHJvZHVjdC9kZWZhdWx0LyR7cHJvZHVjdC5zbHVnfWAgfSBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtc3VnZ2VzdGlvblwiIGtleT17IGBzZWFyY2gtcmVzdWx0LSR7aW5kZXh9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZSBzcmM9eyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BU1NFVF9VUkkgKyBwcm9kdWN0LnNtX3BpY3R1cmVzWyAwIF0udXJsIH0gd2lkdGg9eyA0MCB9IGhlaWdodD17IDQwIH0gYWx0PVwicHJvZHVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLW5hbWVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHNhZmVDb250ZW50KCBtYXRjaEVtcGhhc2l6ZSggcHJvZHVjdC5uYW1lICkgKSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b2NrID09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+JHsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5taW5QcmljZSA9PSBwcm9kdWN0Lm1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBtYi0wXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgcHJvZHVjdC5taW5QcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHsgcHJvZHVjdC5tYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG1iLTBcIj4keyBwcm9kdWN0Lm1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IHByb2R1Y3QubWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIH0gKSggSGVhZGVyU2VhcmNoICk7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcblxyXG5mdW5jdGlvbiBNYWluTWVudSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IHBhdGggPSByb3V0ZXIuYXNQYXRoO1xyXG4gICAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dBbGxEZW1vcyhlKSB7XHJcbiAgICAgICAgbGV0IGRlbW9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZW1vLWl0ZW0uaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVtb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRlbW9JdGVtc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1hbGwtZGVtb3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZC1oaWRkZW4nKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IHNmLWFycm93c1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YG1lZ2FtZW51LWNvbnRhaW5lciAke3BhdGggPT09ICcvY2hhaXJzJyA/ICdhY3RpdmUnIDogJyd9YH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+Q2hhaXJzPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhbWVudSBkZW1vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPkNoYWlyIENvbGxlY3Rpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9kZWZhdWx0XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5FeGVjdXRpdmUgQ2hhaXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvY2VudGVyZWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPkVyZ29ub21pYyBDaGFpcnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9leHRlbmRlZFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+PHNwYW4+Q29uZmVyZW5jZSBDaGFpcnM8c3BhbiBjbGFzc05hbWU9XCJ0aXAgdGlwLW5ld1wiPk5ldzwvc3Bhbj48L3NwYW4+PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZ2FsbGVyeVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+VmlzaXRvciBDaGFpcnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9zdGlja3lcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPlN0b29sczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L3NpZGViYXJcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPk11bHRpLUZ1bmN0aW9uYWwgQ2hhaXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZnVsbHdpZHRoXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj4oQWxsIENoYWlycyk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9tZW51L2hhbWJ1cmdlci1tZW51LWltYWdlLnBuZ1wiIGFsdD1cIkJhbm5lclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5Db21mb3J0PGJyIC8+PHNwYW4+PHN0cm9uZz5FeGVjdXRpdmUgQ2hhaXJzPC9zdHJvbmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkNvbWZvcnQ8YnIgLz48c3Bhbj48c3Ryb25nPkV4ZWN1dGl2ZSBDaGFpcnNzcHJpbmcgeyhuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpfTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPkNob29zZSB5b3VyIGRlbW88L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTFgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDEgLSBmdXJuaXR1cmUgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTJgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDIgLSBmdXJuaXR1cmUgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTNgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMy5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDMgLSBlbGVjdHJvbmljIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby00YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzQuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjA0IC0gZWxlY3Ryb25pYyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tNWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy81LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wNSAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTZgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvNi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDYgLSBmYXNoaW9uIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby03YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzcuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjA3IC0gZmFzaGlvbiBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tOGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy84LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4wOCAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTlgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvOS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MDkgLSBmYXNoaW9uIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xMGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xMC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTAgLSBzaG9lcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTExYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzExLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xMSAtIGZ1cm5pdHVyZSBzaW1wbGUgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xMmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xMi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTIgLSBmYXNoaW9uIHNpbXBsZSBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTEzYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzEzLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xMyAtIG1hcmtldDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTE0YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzE0LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xNCAtIG1hcmtldCBmdWxsd2lkdGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xNWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xNS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTUgLSBsb29rYm9vayAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTZgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTYuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjE2IC0gbG9va2Jvb2sgMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTE3YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzE3LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4xNyAtIGZhc2hpb24gc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0xOGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8xOC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MTggLSBmYXNoaW9uIHN0b3JlICh3aXRoIHNpZGViYXIpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMTlgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMTkuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjE5IC0gZ2FtZXMgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yMGAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yMC5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjAgLSBib29rIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjFgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjEuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjIxIC0gc3BvcnQgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yMmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yMi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjIgLSB0b29scyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTIzYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzIzLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yMyAtIGZhc2hpb24gbGVmdCBuYXZpZ2F0aW9uIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjRgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjQuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjI0IC0gZXh0cmVtZSBzcG9ydCBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTI1YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzI1LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4yNSAtIGpld2Vscnkgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yNmAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yNi5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjYgLSBtYXJrZXQgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yN2AgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yNy5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjcgLSBmYXNoaW9uIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMjhgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMjguanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjI4IC0gZm9vZCBtYXJrZXQgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0yOWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8yOS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MjkgLSB0LXNoaXJ0cyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTMwYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzMwLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4zMCAtIGhlYWRwaG9uZXMgc3RvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBgJHsgcHJvY2Vzcy5lbnYuQVBQX1VSTCB9ZGVtby0zMWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoICdpbWFnZXMvbWVudS9kZW1vcy8zMS5qcGcnIClcIiB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLXRpdGxlXCI+MzEgLSB5b2dhIHN0b3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsgYCR7IHByb2Nlc3MuZW52LkFQUF9VUkwgfWRlbW8tMzJgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tYmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCAnaW1hZ2VzL21lbnUvZGVtb3MvMzIuanBnJyApXCIgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVtby10aXRsZVwiPjMyIC0gc3VuZ2xhc3NlcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTMzYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzMzLmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4zMyAtIGNvc21ldGljcyBzdG9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAkeyBwcm9jZXNzLmVudi5BUFBfVVJMIH1kZW1vLTM0YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBcInVybCggJ2ltYWdlcy9tZW51L2RlbW9zLzM0LmpwZycgKVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tdGl0bGVcIj4zNCAtIGNhciBwYXJ0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51LWFjdGlvbiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnktMiB2aWV3LWFsbC1kZW1vc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBzaG93QWxsRGVtb3MgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VmlldyBBbGwgRGVtb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9uZy1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BtZWdhbWVudS1jb250YWluZXIgJHtwYXRoID09PSAnL2Rlc2tzJyA/ICdhY3RpdmUnIDogJyd9YH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCIgc2Nyb2xsPXtmYWxzZX0+RGVza3M8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYW1lbnUgZGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5EZXNrIENvbGxlY3Rpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9kZWZhdWx0XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5FeGVjdXRpdmUgRGVza3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9jZW50ZXJlZFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+V29ya3N0YXRpb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9leHRlbmRlZFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+SGVpZ2h0IEFkanVzdGFibGUgRGVza3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9nYWxsZXJ5XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5NZWV0aW5nIGFuZCBDb25mZXJlbmNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L3N0aWNreVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+KEFsbCBEZXNrcyk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9tZW51L2hhbWJ1cmdlci1tZW51LWltYWdlLnBuZ1wiIGFsdD1cIkJhbm5lclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5EaWFtb25kPGJyIC8+PHNwYW4+PHN0cm9uZz5FeGVjdXRpdmUgRGVza3M8L3N0cm9uZz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+Q29tZm9ydDxiciAvPjxzcGFuPjxzdHJvbmc+RXhlY3V0aXZlIENoYWlyc3NwcmluZyB7KG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCl9PC9zdHJvbmc+PC9zcGFuPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51IG1lZ2FtZW51LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+U2hvcCB3aXRoIHNpZGViYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwYXRoLmluZGV4T2YoXCJzaG9wL3NpZGViYXJcIikgPiAtMSAmJiBxdWVyeS50eXBlID09ICdsaXN0JykgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci9saXN0XCIgc2Nyb2xsPXtmYWxzZX0+U2hvcCBMaXN0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsocGF0aC5pbmRleE9mKFwic2hvcC9zaWRlYmFyXCIpID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnMmNvbHMnKSA/IFwiYWN0aXZlXCIgOiAnJ30+PEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyLzJjb2xzXCIgc2Nyb2xsPXtmYWxzZX0+U2hvcCBHcmlkIDIgQ29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KHBhdGguaW5kZXhPZihcInNob3Avc2lkZWJhclwiKSA+IC0xICYmIHF1ZXJ5LnR5cGUgPT0gJzNjb2xzJykgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3Avc2lkZWJhci8zY29sc1wiIHNjcm9sbD17ZmFsc2V9PlNob3AgR3JpZCAzIENvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwYXRoLmluZGV4T2YoXCJzaG9wL3NpZGViYXJcIikgPiAtMSAmJiBxdWVyeS50eXBlID09ICc0Y29scycpID8gXCJhY3RpdmVcIiA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXIvNGNvbHNcIiBzY3JvbGw9e2ZhbHNlfT5TaG9wIEdyaWQgNCBDb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJzaG9wL21hcmtldFwiKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL21hcmtldFwiPjxzcGFuPlNob3AgTWFya2V0PHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5TaG9wIG5vIHNpZGViYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhwYXRoLmluZGV4T2YoXCJzaG9wL25vc2lkZWJhclwiKSA+IC0xICYmIHF1ZXJ5LnR5cGUgPT0gJ2JveGVkJykgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2JveGVkXCIgc2Nyb2xsPXtmYWxzZX0+PHNwYW4+U2hvcCBCb3hlZCBObyBTaWRlYmFyPHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1ob3RcIj5Ib3Q8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KHBhdGguaW5kZXhPZihcInNob3Avbm9zaWRlYmFyXCIpID4gLTEgJiYgcXVlcnkudHlwZSA9PSAnZnVsbHdpZHRoJykgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3Avbm9zaWRlYmFyL2Z1bGx3aWR0aFwiIHNjcm9sbD17ZmFsc2V9PlNob3AgRnVsbHdpZHRoIE5vIFNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5Qcm9kdWN0IENhdGVnb3J5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJzaG9wL2NhdGVnb3J5L2JveGVkXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3AvY2F0ZWdvcnkvYm94ZWRcIiBzY3JvbGw9e2ZhbHNlfT5Qcm9kdWN0IENhdGVnb3J5IEJveGVkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJzaG9wL2NhdGVnb3J5L2Z1bGx3aWR0aFwiKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL2NhdGVnb3J5L2Z1bGx3aWR0aFwiIHNjcm9sbD17ZmFsc2V9PjxzcGFuPlByb2R1Y3QgQ2F0ZWdvcnkgRnVsbHdpZHRoPHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPlNob3AgUGFnZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInNob3AvY2FydFwiKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL2NhcnRcIj5DYXJ0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJzaG9wL2NoZWNrb3V0XCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIj5DaGVja291dDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwic2hvcC93aXNobGlzdFwiKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnfT48QUxpbmsgaHJlZj1cIi9zaG9wL3dpc2hsaXN0XCI+V2lzaGxpc3Q8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInNob3AvZGFzaGJvYXJkXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL3Nob3AvZGFzaGJvYXJkXCI+TXkgQWNjb3VudDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiI0xvb2tib29rXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiI1wiPkxvb2tib29rPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcC9zaWRlYmFyL2xpc3RcIiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvYmFubmVyLTEuanBnXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5MYXN0IDxiciAvPkNoYW5jZTxiciAvPjxzcGFuPjxzdHJvbmc+U2FsZTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbWVnYW1lbnUtY29udGFpbmVyICR7cGF0aCA9PT0gJy9jb2xsYWJvcmF0aXZlJyA/ICdhY3RpdmUnIDogJyd9YH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCIgc2Nyb2xsPXtmYWxzZX0+Q29sbGFib3JhdGl2ZTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhbWVudSBkZW1vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPkNvbGxhYm9yYXRpdmUgQ29sbGVjdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L2RlZmF1bHRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPkV4ZWN1dGl2ZSBEZXNrczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L2NlbnRlcmVkXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5Xb3Jrc3RhdGlvbjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L2V4dGVuZGVkXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5IZWlnaHQgQWRqdXN0YWJsZSBEZXNrczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L2dhbGxlcnlcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPk1lZXRpbmcgYW5kIENvbmZlcmVuY2VzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3Qvc3RpY2t5XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj4oQWxsIERlc2tzKTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyIGJhbm5lci1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2NlbnRlcmVkL2RhcmsteWVsbG93LWxhY2UtY3V0LW91dC1zd2luZy1kcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvaGFtYnVyZ2VyLW1lbnUtaW1hZ2UucG5nXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCBiYW5uZXItY29udGVudC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkRpYW1vbmQ8YnIgLz48c3Bhbj48c3Ryb25nPkV4ZWN1dGl2ZSBEZXNrczwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5Db21mb3J0PGJyIC8+PHNwYW4+PHN0cm9uZz5FeGVjdXRpdmUgQ2hhaXJzc3ByaW5nIHsobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKX08L3N0cm9uZz48L3NwYW4+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BtZWdhbWVudS1jb250YWluZXIgJHtwYXRoID09PSAnL3N0b3JhZ2VzJyA/ICdhY3RpdmUnIDogJyd9YH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCIgc2Nyb2xsPXtmYWxzZX0+U3RvcmFnZXM8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYW1lbnUgZGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5Db2xsYWJvcmF0aXZlIENvbGxlY3Rpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9kZWZhdWx0XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5FeGVjdXRpdmUgRGVza3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9jZW50ZXJlZFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+V29ya3N0YXRpb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9leHRlbmRlZFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+SGVpZ2h0IEFkanVzdGFibGUgRGVza3M8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9nYWxsZXJ5XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIiNcIj5NZWV0aW5nIGFuZCBDb25mZXJlbmNlczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L3N0aWNreVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+KEFsbCBEZXNrcyk8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciBiYW5uZXItb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9tZW51L2hhbWJ1cmdlci1tZW51LWltYWdlLnBuZ1wiIGFsdD1cIkJhbm5lclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQgYmFubmVyLWNvbnRlbnQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5EaWFtb25kPGJyIC8+PHNwYW4+PHN0cm9uZz5FeGVjdXRpdmUgRGVza3M8L3N0cm9uZz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+Q29tZm9ydDxiciAvPjxzcGFuPjxzdHJvbmc+RXhlY3V0aXZlIENoYWlyc3NwcmluZyB7KG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCl9PC9zdHJvbmc+PC9zcGFuPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgbWVnYW1lbnUtY29udGFpbmVyICR7cGF0aCA9PT0gJy9hY2Nlc3NvcmllcycgPyAnYWN0aXZlJyA6ICcnfWB9IGlkPVwibWVudS1ob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiIHNjcm9sbD17ZmFsc2V9PkFjY2Vzc29yaWVzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51IGRlbW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+Q29sbGFib3JhdGl2ZSBDb2xsZWN0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZGVmYXVsdFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+RXhlY3V0aXZlIERlc2tzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvY2VudGVyZWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPldvcmtzdGF0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZXh0ZW5kZWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPkhlaWdodCBBZGp1c3RhYmxlIERlc2tzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZ2FsbGVyeVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+TWVldGluZyBhbmQgQ29uZmVyZW5jZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9zdGlja3lcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPihBbGwgRGVza3MpPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Byb2R1Y3QvY2VudGVyZWQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbWVudS9oYW1idXJnZXItbWVudS1pbWFnZS5wbmdcIiBhbHQ9XCJCYW5uZXJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+RGlhbW9uZDxiciAvPjxzcGFuPjxzdHJvbmc+RXhlY3V0aXZlIERlc2tzPC9zdHJvbmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkNvbWZvcnQ8YnIgLz48c3Bhbj48c3Ryb25nPkV4ZWN1dGl2ZSBDaGFpcnNzcHJpbmcgeyhuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpfTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YG1lZ2FtZW51LWNvbnRhaW5lciAke3BhdGggPT09ICcvbWF0ZXJpYWxzJyA/ICdhY3RpdmUnIDogJyd9YH0gaWQ9XCJtZW51LWhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCIgc2Nyb2xsPXtmYWxzZX0+TWF0ZXJpYWxzPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51IGRlbW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+Q29sbGFib3JhdGl2ZSBDb2xsZWN0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZGVmYXVsdFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+RXhlY3V0aXZlIERlc2tzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvY2VudGVyZWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPldvcmtzdGF0aW9uPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZXh0ZW5kZWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPkhlaWdodCBBZGp1c3RhYmxlIERlc2tzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZ2FsbGVyeVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIjXCI+TWVldGluZyBhbmQgQ29uZmVyZW5jZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9zdGlja3lcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiI1wiPihBbGwgRGVza3MpPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Byb2R1Y3QvY2VudGVyZWQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbWVudS9oYW1idXJnZXItbWVudS1pbWFnZS5wbmdcIiBhbHQ9XCJCYW5uZXJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci10aXRsZSB0ZXh0LXdoaXRlXCI+RGlhbW9uZDxiciAvPjxzcGFuPjxzdHJvbmc+RXhlY3V0aXZlIERlc2tzPC9zdHJvbmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItdGl0bGUgdGV4dC13aGl0ZVwiPkNvbWZvcnQ8YnIgLz48c3Bhbj48c3Ryb25nPkV4ZWN1dGl2ZSBDaGFpcnNzcHJpbmcgeyhuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpfTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wcm9kdWN0L2RlZmF1bHQvZGFyay15ZWxsb3ctbGFjZS1jdXQtb3V0LXN3aW5nLWRyZXNzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPlByb2R1Y3Q8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2FtZW51IG1lZ2FtZW51LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPlByb2R1Y3QgRGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L2RlZmF1bHRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3Byb2R1Y3QvZGVmYXVsdC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5EZWZhdWx0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9jZW50ZXJlZFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9iZWlnZS1yaW5nLWhhbmRsZS1jaXJjbGUtY3Jvc3MtYm9keS1iYWdcIj5DZW50ZXJlZDwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZXh0ZW5kZWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3Byb2R1Y3QvZXh0ZW5kZWQveWVsbG93LXRpZS1zdHJhcC1ibG9jay1oZWVsLXNhbmRhbHNcIj48c3Bhbj5FeHRlbmRlZCBJbmZvPHNwYW4gY2xhc3NOYW1lPVwidGlwIHRpcC1uZXdcIj5OZXc8L3NwYW4+PC9zcGFuPjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3QvZ2FsbGVyeVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9nYWxsZXJ5L2JlaWdlLW1ldGFsLWhvb3AtdG90ZS1iYWdcIj5HYWxsZXJ5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicHJvZHVjdC9zdGlja3lcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3Byb2R1Y3Qvc3RpY2t5L2Jyb3duLWZhdXgtZnVyLWxvbmdsaW5lLWNvYXRcIj5TdGlja3kgSW5mbzwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInByb2R1Y3Qvc2lkZWJhclwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9zaWRlYmFyL2JlaWdlLXYtbmVjay1idXR0b24tY2FyZGlnYW5cIj5Cb3hlZCBXaXRoIFNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L2Z1bGx3aWR0aFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9mdWxsd2lkdGgvYmxhY2stZmF1eC1sZWF0aGVyLWNoYWluLXRyaW0tc2FuZGFsc1wiPkZ1bGwgV2lkdGg8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwcm9kdWN0L21hc29ucnlcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3Byb2R1Y3QvbWFzb25yeS9ibGFjay1kZW5pbS1kdW5nYXJlZS1kcmVzc1wiPk1hc29ucnkgU3RpY2t5IEluZm88L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgYmFubmVyLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcHJvZHVjdC9jZW50ZXJlZC9kYXJrLXllbGxvdy1sYWNlLWN1dC1vdXQtc3dpbmctZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL21lbnUvYmFubmVyLTIuanBnXCIgYWx0PVwiQmFubmVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50IGJhbm5lci1jb250ZW50LWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlIHRleHQtd2hpdGVcIj5OZXcgVHJlbmRzPGJyIC8+PHNwYW4+PHN0cm9uZz5zcHJpbmcgeyhuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpfTwvc3Ryb25nPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInBhZ2VzXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+UGFnZXM8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInBhZ2VzL2Fib3V0XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkFib3V0PC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicGFnZXMvYWJvdXRcIikgPiAtMSAmJiBwYXRoLmluZGV4T2YoXCJwYWdlcy9hYm91dC0yXCIpID09PSAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3BhZ2VzL2Fib3V0XCI+QWJvdXQgMDE8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicGFnZXMvYWJvdXQtMlwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcGFnZXMvYWJvdXQtMlwiPkFib3V0IDAyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwicGFnZXMvY29udGFjdFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9jb250YWN0XCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkNvbnRhY3Q8L0FMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwYWdlcy9jb250YWN0XCIpID4gLTEgJiYgcGF0aC5pbmRleE9mKFwicGFnZXMvY29udGFjdC0yXCIpID09PSAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3BhZ2VzL2NvbnRhY3RcIj5Db250YWN0IDAxPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInBhZ2VzL2NvbnRhY3QtMlwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29udGFjdC0yXCI+Q29udGFjdCAwMjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcInBhZ2VzL2xvZ2luXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9wYWdlcy9sb2dpblwiPkxvZ2luPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwYWdlcy9mYXFcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL3BhZ2VzL2ZhcVwiPkZBUXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcIjQwNFwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvNDA0XCI+RXJyb3IgNDA0PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJwYWdlcy9jb21pbmctc29vblwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvcGFnZXMvY29taW5nLXNvb25cIj5Db21pbmcgU29vbjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9ibG9nL2NsYXNzaWNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+QmxvZzwvQUxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9jbGFzc2ljXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL2NsYXNzaWNcIj5DbGFzc2ljPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJibG9nL2xpc3RpbmdcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL2Jsb2cvbGlzdGluZ1wiID5MaXN0aW5nPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJibG9nL2dyaWRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzJjb2xzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkdyaWQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvZ3JpZC8yY29sc1wiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvYmxvZy9ncmlkLzJjb2xzXCI+R3JpZCAyIGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9ncmlkLzNjb2xzXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvM2NvbHNcIj5HcmlkIDMgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJibG9nL2dyaWQvNGNvbHNcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL2Jsb2cvZ3JpZC80Y29sc1wiPkdyaWQgNCBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvZ3JpZC9zaWRlYmFyXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL2dyaWQvc2lkZWJhclwiPkdyaWQgc2lkZWJhcjwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvbWFzb25yeVwiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9ibG9nL21hc29ucnkvMmNvbHNcIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+TWFzb25yeTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9tYXNvbnJ5LzJjb2xzXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc29ucnkvMmNvbHNcIj5NYXNvbnJ5IDIgY29sdW1uczwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJibG9nL21hc29ucnkvM2NvbHNcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS8zY29sc1wiPk1hc29ucnkgMyBjb2x1bW5zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvbWFzb25yeS80Y29sc1wiKSA+IC0xID8gJ2FjdGl2ZScgOiAnJ30+PEFMaW5rIGhyZWY9XCIvYmxvZy9tYXNvbnJ5LzRjb2xzXCI+TWFzb25yeSA0IGNvbHVtbnM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9tYXNvbnJ5L3NpZGViYXJcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL2Jsb2cvbWFzb25yeS9zaWRlYmFyXCI+TWFzb25yeSBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9tYXNrXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2Jsb2cvbWFzay9ncmlkXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPk1hc2s8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvbWFzay9ncmlkXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc2svZ3JpZFwiPkJsb2cgTWFzayBHcmlkPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvbWFzay9tYXNvbnJ5XCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL21hc2svbWFzb25yeVwiPkJsb2cgTWFzayBNYXNvbnJ5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9zaW5nbGVcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvYmxvZy9zaW5nbGUvZGVmYXVsdC9jcmFzLW9ybmFyZS10cmlzdGlxdWUtZWxpdC5cIiBjbGFzc05hbWU9XCJzZi13aXRoLXVsXCI+U2luZ2xlIFBvc3Q8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvc2luZ2xlL2RlZmF1bHRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL2RlZmF1bHQvY3Jhcy1vcm5hcmUtdHJpc3RpcXVlLWVsaXQuXCI+RGVmYXVsdCB3aXRoIHNpZGViYXI8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aC5pbmRleE9mKFwiYmxvZy9zaW5nbGUvZnVsbHdpZHRoXCIpID4gLTEgPyAnYWN0aXZlJyA6ICcnfT48QUxpbmsgaHJlZj1cIi9ibG9nL3NpbmdsZS9mdWxsd2lkdGgvZnVzY2UtcGVsbGVudGVzcXVlLXN1c2NpcGl0LlwiPkZ1bGx3aWR0aCBubyBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImJsb2cvc2luZ2xlL3NpZGViYXJcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PjxBTGluayBocmVmPVwiL2Jsb2cvc2luZ2xlL3NpZGViYXIvdXRhbGlxdWFtLXNvbGxpY2l0emR2dWRpbi1sZW9cIj5GdWxsd2lkdGggd2l0aCBzaWRlYmFyPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImVsZW1lbnRcIikgPiAtMSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL2VsZW1lbnRzXCIgY2xhc3NOYW1lPVwic2Ytd2l0aC11bFwiPkVsZW1lbnRzPC9BTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9wcm9kdWN0c1wiKSA+IC0xID8gXCJhY3RpdmVcIiA6ICcnfT48QUxpbmsgaHJlZj1cIi9lbGVtZW50cy9wcm9kdWN0c1wiPlByb2R1Y3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy90eXBvZ3JhcGh5XCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3R5cG9ncmFwaHlcIj5UeXBvZ3JhcGh5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy90aXRsZXNcIikgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJ30+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvdGl0bGVzXCI+VGl0bGVzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9iYW5uZXJzXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2Jhbm5lcnNcIj5CYW5uZXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9jYXRlZ29yaWVzXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2NhdGVnb3JpZXNcIj5Qcm9kdWN0IENhdGVnb3J5PC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy92aWRlby1iYW5uZXJzXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3ZpZGVvLWJhbm5lcnNcIj5WaWRlbyBCYW5uZXJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9idXR0b25zXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2J1dHRvbnNcIj5CdXR0b25zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9hY2NvcmRpb25zXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2FjY29yZGlvbnNcIj5BY2NvcmRpb25zPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy90YWJzXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL3RhYnNcIj5UYWJzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy90ZXN0aW1vbmlhbHNcIikgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJ30+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvdGVzdGltb25pYWxzXCI+VGVzdGltb25pYWxzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9ibG9nLXBvc3RzXCIpID4gLTEgPyBcImFjdGl2ZVwiIDogJyd9PjxBTGluayBocmVmPVwiL2VsZW1lbnRzL2Jsb2ctcG9zdHNcIj5CbG9nIFBvc3RzPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoLmluZGV4T2YoXCJlbGVtZW50cy9jdGFcIikgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJ30+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvY3RhXCI+Q2FsbCB0byBBY3Rpb248L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGguaW5kZXhPZihcImVsZW1lbnRzL2ljb24tYm94ZXNcIikgPiAtMSA/IFwiYWN0aXZlXCIgOiAnJ30+PEFMaW5rIGhyZWY9XCIvZWxlbWVudHMvaWNvbi1ib3hlc1wiPkljb24gQm94ZXM8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2ID5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuXHJcbmZ1bmN0aW9uIFdpc2hsaXN0TWVudSAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyB3aXNobGlzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiB0aXRsZT1cIldpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWhlYXJ0LW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2lzaGxpc3QtY291bnQgYmFkZ2VcIj57IHdpc2hsaXN0Lmxlbmd0aCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5XaXNobGlzdDwvcD5cclxuICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoIHN0YXRlICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBtYXBTdGF0ZVRvUHJvcHMsIHt9ICkoIFdpc2hsaXN0TWVudSApOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTbGlkZVRvZ2dsZSBmcm9tICdyZWFjdC1zbGlkZS10b2dnbGUnO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gJ34vY29tcG9uZW50cy9mZWF0dXJlcy9hbGluayc7XHJcbmltcG9ydCBRdHkgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL3F0eSc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIHdpc2hsaXN0QWN0aW9uIH0gZnJvbSAnfi9zdG9yZS93aXNobGlzdCc7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgY2FydEFjdGlvbiB9IGZyb20gJ34vc3RvcmUvY2FydCc7XHJcblxyXG5pbXBvcnQgeyBjYW5BZGRUb0NhcnQsIGlzSW5XaXNobGlzdCB9IGZyb20gJ34vdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsT25lICggcHJvcHMgKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFsgcXR5LCBzZXRRdHkgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIHF0eTIsIHNldFF0eTIgXSA9IHVzZVN0YXRlKCAxICk7XHJcbiAgICBjb25zdCBbIGNvbG9yQXJyYXksIHNldENvbG9yQXJyYXkgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG4gICAgY29uc3QgWyBzaXplQXJyYXksIHNldFNpemVBcnJheSBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHZhcmlhdGlvbkdyb3VwLCBzZXRWYXJpYXRpb25Hcm91cCBdID0gdXNlU3RhdGUoIFtdICk7XHJcbiAgICBjb25zdCBbIHNlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50IF0gPSB1c2VTdGF0ZSggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICBjb25zdCBbIHNob3dDbGVhciwgc2V0U2hvd0NsZWFyIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuICAgIGNvbnN0IFsgc2hvd1ZhcmlhdGlvblByaWNlLCBzZXRTaG93VmFyaWF0aW9uUHJpY2UgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG4gICAgY29uc3QgWyBtYXhQcmljZSwgc2V0TWF4UHJpY2UgXSA9IHVzZVN0YXRlKCAwICk7XHJcbiAgICBjb25zdCBbIG1pblByaWNlLCBzZXRNaW5QcmljZSBdID0gdXNlU3RhdGUoIDk5OTk5ICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgc2Nyb2xsSGFuZGxlciApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gOTk5OTk7XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcblxyXG4gICAgICAgIHNldFZhcmlhdGlvbkdyb3VwKCBwcm9kdWN0LnZhcmlhbnRzLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgY3VyLnNpemUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogY3VyLnByaWNlXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgaWYgKCBtaW4gPiBjdXIucHJpY2UgKSBtaW4gPSBjdXIucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICggbWF4IDwgY3VyLnByaWNlICkgbWF4ID0gY3VyLnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgICAgICBtaW4gPSBwcm9kdWN0LnNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5zYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIG1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNaW5QcmljZSggbWluICk7XHJcbiAgICAgICAgc2V0TWF4UHJpY2UoIG1heCApO1xyXG4gICAgfSwgWyBwcm9kdWN0IF0gKVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyBjb2xvcjogbnVsbCwgY29sb3JOYW1lOiBudWxsLCBwcmljZTogbnVsbCwgc2l6ZTogXCJcIiB9ICk7XHJcbiAgICAgICAgc2V0UXR5KCAxICk7XHJcbiAgICAgICAgc2V0UXR5MiggMSApO1xyXG4gICAgfSwgWyByb3V0ZXIucXVlcnkuc2x1ZyBdIClcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICByZWZyZXNoU2VsZWN0YWJsZUdyb3VwKCk7XHJcbiAgICB9LCBbIHZhcmlhdGlvbkdyb3VwLCBzZWxlY3RlZFZhcmlhbnQgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgfSwgWyByb3V0ZXIucGF0aG5hbWUgXSApXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NsZWFyKCAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciB8fCBzZWxlY3RlZFZhcmlhbnQuc2l6ZSAhPSBcIlwiICkgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICBzZXRTaG93VmFyaWF0aW9uUHJpY2UoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSA/IHRydWUgOiBmYWxzZSApO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSByZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCAnLnZhcmlhdGlvbi10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlICkge1xyXG4gICAgICAgICAgICBpZiAoICggc2VsZWN0ZWRWYXJpYW50LmNvbG9yICYmIHNlbGVjdGVkVmFyaWFudC5zaXplICE9IFwiXCIgKSAmJiB0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY29sbGFwc2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggKCAhKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApICkgJiYgIXRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoICdjb2xsYXBzZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFsgc2VsZWN0ZWRWYXJpYW50IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgIGlmICggcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKCAnL3Byb2R1Y3QvZGVmYXVsdCcgKSApIHtcclxuICAgICAgICAgICAgbGV0IHN0aWNreUJhciA9IHJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoICcuc3RpY2t5LWJhcicgKTtcclxuICAgICAgICAgICAgaWYgKCBzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LnJlbW92ZSggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoICFzdGlja3lCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZC1ub25lJyApICYmIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBzdGlja3lCYXIuY2xhc3NMaXN0LmFkZCggJ2Qtbm9uZScgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbldpc2hsaXN0Q2xpY2sgKCBlICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoICFpc0luV2lzaGxpc3QoIHByb3BzLndpc2hsaXN0LCBwcm9kdWN0ICkgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZFRvV2lzaGxpc3QoIHByb2R1Y3QgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCggJy9wYWdlcy93aXNobGlzdCcgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFNlbGVjdGFibGVHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFsgLi4udmFyaWF0aW9uR3JvdXAgXTtcclxuICAgICAgICBpZiAoIHNlbGVjdGVkVmFyaWFudC5jb2xvciApIHtcclxuICAgICAgICAgICAgdGVtcEFycmF5ID0gdmFyaWF0aW9uR3JvdXAucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgIT09IGN1ci5jb2xvciApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsgLi4uYWNjLCBjdXIgXTtcclxuICAgICAgICAgICAgfSwgW10gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNpemVBcnJheSggdGVtcEFycmF5LnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhY2MuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2l6ZSA9PSBjdXIuc2l6ZSApICE9PSAtMSApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgIH0sIFtdICkgKTtcclxuXHJcbiAgICAgICAgdGVtcEFycmF5ID0gWyAuLi52YXJpYXRpb25Hcm91cCBdO1xyXG4gICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IHZhcmlhdGlvbkdyb3VwLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRWYXJpYW50LnNpemUgIT09IGN1ci5zaXplICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWyAuLi5hY2MsIGN1ciBdO1xyXG4gICAgICAgICAgICB9LCBbXSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3JBcnJheSggcHJvZHVjdC52YXJpYW50cy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5jb2xvciA9PSBjdXIuY29sb3IgKSA9PSAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lOiBjdXIuY29sb3JfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGN1ci5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1ci5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGN1ci5jb2xvcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBjdXIucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSwgW10gKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdENvbG9yICggZSwgaXRlbSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yICkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFZhcmlhbnQoIHtcclxuICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCgge1xyXG4gICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWU6IGl0ZW0uY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RTaXplICggZSApIHtcclxuICAgICAgICBpZiAoIGUudGFyZ2V0LnZhbHVlID09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IFwiXCIgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVmFyaWFudCggeyAuLi5zZWxlY3RlZFZhcmlhbnQsIHNpemU6IGUudGFyZ2V0LnZhbHVlIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VRdHkgKCBjdXJyZW50ICkge1xyXG4gICAgICAgIHNldFF0eSggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUXR5MiAoIGN1cnJlbnQgKSB7XHJcbiAgICAgICAgc2V0UXR5MiggY3VycmVudCApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICggZSApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYXJpYW50KCAoIHtcclxuICAgICAgICAgICAgLi4uc2VsZWN0ZWRWYXJpYW50LFxyXG4gICAgICAgICAgICBjb2xvcjogbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBzaXplOiBcIlwiXHJcbiAgICAgICAgfSApICk7XHJcbiAgICAgICAgcmVmcmVzaFNlbGVjdGFibGVHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2FydENsaWNrICggZSwgaW5kZXggPSAwICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdidG4tZGlzYWJsZWQnICkgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBuZXdQcm9kdWN0ID0geyAuLi5wcm9kdWN0IH07XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTpcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuY29sb3JOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZFZhcmlhbnQucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuYWRkVG9DYXJ0KFxyXG4gICAgICAgICAgICBuZXdQcm9kdWN0LFxyXG4gICAgICAgICAgICBpbmRleCA9PSAwID8gcXR5IDogcXR5MlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhcHJvZHVjdCApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsc1wiIHJlZj17IHJlZiB9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnsgcHJvZHVjdC5uYW1lIH08L2gxPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdzLXZhbFwiIHN0eWxlPXsgeyB3aWR0aDogcHJvZHVjdC5yYXRpbmdzICogMjAgKyAnJScgfSB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiPnsgcHJvZHVjdC5yYXRpbmdzLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmdzLXRleHRcIj4oIHsgcHJvZHVjdC5yZXZpZXcgfSBSZXZpZXdzICk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHJpY2UgPT0gbWF4UHJpY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9Jm5kYXNoOyR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pblByaWNlID09IG1heFByaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7IG1pblByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7IG1heFByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4keyBtaW5QcmljZS50b0ZpeGVkKCAyICkgfSZuZGFzaDskeyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnNob3J0X2Rlc2MgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1maWx0ZXItcm93IGRldGFpbHMtcm93LXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1uYXYgcHJvZHVjdC1uYXYtZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JBcnJheS5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgJHsoIGl0ZW0uY29sb3IgPT0gc2VsZWN0ZWRWYXJpYW50LmNvbG9yID8gJ2FjdGl2ZSAnIDogJycgKSArICggaXRlbS5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyApfWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHNlbGVjdENvbG9yKCBlLCBpdGVtICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZpbHRlci1yb3cgZGV0YWlscy1yb3ctc2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaXplXCI+U2l6ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VsZWN0ZWRWYXJpYW50LnNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHNlbGVjdFNpemUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHNpemU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUFycmF5Lm1hcCggKCBpdGVtLCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaXRlbS5zaXplIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57IGl0ZW0uc2l6ZSB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2l6ZS1ndWlkZSBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10aC1saXN0XCI+PC9pPnNpemUgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgY2xlYXJTZWxlY3Rpb24gfT5jbGVhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IHRydWUgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBgZC1ub25lIHZhcmlhdGlvbi10b2dnbGUgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpfWAgfSBvbkNsaWNrPXsgb25Ub2dnbGUgfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfSBzdHlsZT17IHsgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHNlbGVjdGVkVmFyaWFudC5wcmljZSA/IHNlbGVjdGVkVmFyaWFudC5wcmljZS50b0ZpeGVkKCAyICkgOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtZmlsdGVyLXJvdyBkZXRhaWxzLXJvdy1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF0eVwiPlF0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFF0eSBjaGFuZ2VRdHk9eyBvbkNoYW5nZVF0eSB9IG1heD17IHByb2R1Y3Quc3RvY2sgfSB2YWx1ZT17IHF0eSB9PjwvUXR5PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGBidG4tcHJvZHVjdCBidG4tY2FydCAkeyggIWNhbkFkZFRvQ2FydCggcHJvcHMuY2FydGxpc3QsIHByb2R1Y3QsIHF0eSApIHx8ICggcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICYmICFzaG93VmFyaWF0aW9uUHJpY2UgKSApID8gJ2J0bi1kaXNhYmxlZCcgOiAnJ31gIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZSA9PiBvbkNhcnRDbGljayggZSwgMCApIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5hZGQgdG8gY2FydDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdCB3LTEwMCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS5tYXAoICggY2F0LCBpbmRleCApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyB7IHBhdGhuYW1lOiAnL3Nob3Avc2lkZWJhci9saXN0JywgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdC5zbHVnIH0gfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgY2F0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbmRleCA8IHByb2R1Y3QuY2F0ZWdvcnkubGVuZ3RoIC0gMSA/ICcsJyA6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIHNvY2lhbC1pY29ucy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1sYWJlbFwiPlNoYXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiIHRpdGxlPVwiRmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIlR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIiB0aXRsZT1cIkluc3RhZ3JhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCIgdGl0bGU9XCJQaW50ZXJlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1waW50ZXJlc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJhciBkLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVNTRVRfVVJJICsgcHJvZHVjdC5zbV9waWN0dXJlc1sgMCBdLnVybCB9IGFsdD1cInByb2R1Y3RcIiB3aWR0aD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS53aWR0aCB9IGhlaWdodD17IHByb2R1Y3Quc21fcGljdHVyZXNbIDAgXS5oZWlnaHQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyBgL3Byb2R1Y3QvZGVmYXVsdC8ke3Byb2R1Y3Quc2x1Z31gIH0+eyBwcm9kdWN0Lm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzZWxlY3RlZFZhcmlhbnQuY29sb3IgJiYgc2VsZWN0ZWRWYXJpYW50LnNpemUgIT0gXCJcIiApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPyBzZWxlY3RlZFZhcmlhbnQucHJpY2UudG9GaXhlZCggMiApIDogMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXQtcHJpY2VcIj4keyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoIDIgKSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QcmljZSA9PSBtYXhQcmljZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4keyBtYXhQcmljZS50b0ZpeGVkKCAyICkgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHsgbWluUHJpY2UudG9GaXhlZCggMiApIH0mbmRhc2g7JHsgbWF4UHJpY2UudG9GaXhlZCggMiApIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdHkgY2hhbmdlUXR5PXsgb25DaGFuZ2VRdHkyIH0gbWF4PXsgcHJvZHVjdC5zdG9jayB9IHZhbHVlPXsgcXR5MiB9PjwvUXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBgYnRuLXByb2R1Y3QgYnRuLWNhcnQgJHsoICFjYW5BZGRUb0NhcnQoIHByb3BzLmNhcnRsaXN0LCBwcm9kdWN0LCBxdHkgKSB8fCAoIHByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCAmJiAhc2hvd1ZhcmlhdGlvblByaWNlICkgKSA/ICdidG4tZGlzYWJsZWQnIDogJyd9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IG9uQ2FydENsaWNrKCBlLCAxICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YWRkIHRvIGNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbldpc2hsaXN0KCBwcm9wcy53aXNobGlzdCwgcHJvZHVjdCApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3Nob3Avd2lzaGxpc3RcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3QgYWRkZWQtdG8td2lzaGxpc3RcIj48c3Bhbj5HbyB0byBXaXNobGlzdDwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJvZHVjdCBidG4td2lzaGxpc3RcIiBvbkNsaWNrPXsgb25XaXNobGlzdENsaWNrIH0+PHNwYW4+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJ0bGlzdDogc3RhdGUuY2FydGxpc3QuZGF0YSxcclxuICAgICAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QuZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggbWFwU3RhdGVUb1Byb3BzLCB7IC4uLndpc2hsaXN0QWN0aW9uLCAuLi5jYXJ0QWN0aW9uIH0gKSggRGV0YWlsT25lICk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUvaW5kZXguanNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tIFwiLi4vc3RvcmUvZGVtb1wiO1xyXG5cclxuaW1wb3J0ICd+L3B1YmxpYy9zY3NzL3BsdWdpbnMvb3dsLWNhcm91c2VsL293bC5jYXJvdXNlbC5zY3NzJztcclxuaW1wb3J0IFwifi9wdWJsaWMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBXcmFwcGVkQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5kZW1vLmN1cnJlbnQgIT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNTykge1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChkZW1vQWN0aW9uLnJlZnJlc2hTdG9yZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPFBlcnNpc3RHYXRlXHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UtbG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiQkFGQ08gU3RvcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCQUZDTyBTdG9yZSB8IE9mZmljZSBGdXJuaXR1cmUsIEhvbWUgT2ZmaWNlIEZ1cm5pdHVyZSBPbmxpbmUgaW4gdGhlIFVBRVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJkLXRoZW1lc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkJBRkNPXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJCQUZDTyBTdG9yZSB8IE9mZmljZSBGdXJuaXR1cmUsIEhvbWUgT2ZmaWNlIEZ1cm5pdHVyZSBPbmxpbmUgaW4gdGhlIFVBRVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNjYzk5NjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCJpbWFnZXMvaWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+QkFGQ08gU3RvcmUgfCBPZmZpY2UgRnVybml0dXJlLCBIb21lIE9mZmljZSBGdXJuaXR1cmUgT25saW5lIOKAlCBCQUZDTyBGdXJuaXR1cmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb25fMzJ4MzIud2VicFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cImltYWdlcy9pY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM2NjY2NjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb25fMzJ4MzIud2VicFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlbG1ldD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgIDwvUHJvdmlkZXIgPlxyXG4gICAgKVxyXG59O1xyXG5cclxuV3JhcHBlZEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vcm9vdC1zYWdhJztcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG4vLyBpbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbi8vIEltcG9ydCBSZWR1Y2Vyc1xyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFwiO1xyXG5pbXBvcnQgd2lzaGxpc3RSZWR1Y2VyIGZyb20gJy4vd2lzaGxpc3QnO1xyXG5pbXBvcnQgY29tcGFyZVJlZHVjZXIgZnJvbSAnLi9jb21wYXJlJztcclxuaW1wb3J0IGRlbW9SZWR1Y2VyIGZyb20gJy4vZGVtbyc7XHJcblxyXG5jb25zdCByb290UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY2FydGxpc3Q6IGNhcnRSZWR1Y2VyLFxyXG4gICAgd2lzaGxpc3Q6IHdpc2hsaXN0UmVkdWNlcixcclxuICAgIGNvbXBhcmVsaXN0OiBjb21wYXJlUmVkdWNlcixcclxuICAgIGRlbW86IGRlbW9SZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbi8vICAgICBrZXk6ICdyb290JyxcclxuLy8gICAgIHN0b3JhZ2U6IEFzeW5jU3RvcmFnZSxcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VycylcclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBtYWtlU3RvcmU7XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pOyIsImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGNhcnRTYWdhIH0gZnJvbSAnLi9jYXJ0JztcclxuaW1wb3J0IHsgd2lzaGxpc3RTYWdhIH0gZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB7IGNvbXBhcmVTYWdhIH0gZnJvbSAnLi9jb21wYXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSAoKSB7XHJcbiAgICB5aWVsZCBhbGwoIFtcclxuICAgICAgICBjYXJ0U2FnYSgpLFxyXG4gICAgICAgIHdpc2hsaXN0U2FnYSgpLFxyXG4gICAgICAgIGNvbXBhcmVTYWdhKCksXHJcbiAgICBdICk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXBvbGxvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZS1tYWduaWZpZXJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlkZS10b2dnbGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRhYnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9