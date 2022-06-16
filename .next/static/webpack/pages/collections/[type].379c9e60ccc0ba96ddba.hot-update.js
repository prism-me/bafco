self["webpackHotUpdate_N_E"]("pages/collections/[type]",{

/***/ "./components/partials/shop/sidebar/shop-sidebar-one.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/shop/sidebar/shop-sidebar-one.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-range */ "./node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slide-toggle */ "./node_modules/react-slide-toggle/dist/ReactSlideToggle.esm.es2015.js");
/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-range/lib/css/index.css */ "./node_modules/react-input-range/lib/css/index.css");
/* harmony import */ var react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_range_lib_css_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/features/alink */ "./components/features/alink.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/utils/data */ "./utils/data.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\BAFCO\\bafco\\components\\partials\\shop\\sidebar\\shop-sidebar-one.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function ShopSidebarOne(props) {
  _s();

  var _this = this;

  var _props$toggle = props.toggle,
      toggle = _props$toggle === void 0 ? false : _props$toggle;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    min: 0,
    max: 1000
  }),
      priceRange = _useState[0],
      setRange = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
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
    var currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && currentQueries.includes(value);
  }

  function getUrlForAttrs(type, value) {
    var currentQueries = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(function (item) {
      return item !== value;
    }) : [].concat((0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(currentQueries), [value]);
    return {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, (0,E_BAFCO_bafco_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        page: 1
      }, type, currentQueries.join(',')))
    };
  }

  function onAttrClick(e, attr, value) {
    if (getUrlForAttrs(attr, value)) {
      var queryObject = getUrlForAttrs(attr, value).query;
      var url = router.pathname.replace('[type]', query.type) + '?';

      for (var key in queryObject) {
        if (key !== "type") {
          url += key + '=' + queryObject[key] + '&';
        }
      }

      router.push(url);
    }
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, __jsx("aside", {
    className: "".concat(toggle ? 'sidebar-filter' : 'sidebar', " sidebar-shop"),
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
  }, "Filters:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_7__.default, {
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
  }, "Clean All")), __jsx(react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, function (_ref) {
    var onToggle = _ref.onToggle,
        setCollapsibleElement = _ref.setCollapsibleElement,
        toggleState = _ref.toggleState;
    return __jsx("div", {
      className: "widget widget-collapsible",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "widget-title mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, __jsx("a", {
      href: "#category",
      className: "".concat(toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''),
      onClick: function onClick(e) {
        onToggle(e);
        e.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 37
      }
    }, "Category")), __jsx("div", {
      ref: setCollapsibleElement,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "widget-body pt-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "filter-items filter-items-count",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 41
      }
    }, _utils_data__WEBPACK_IMPORTED_MODULE_8__.shopData.categories.map(function (item, index) {
      return __jsx("div", {
        className: "filter-item",
        key: "cat_".concat(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 53
        }
      }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: "".concat(query.category == item.slug ? 'active' : ''),
        href: {
          pathname: router.pathname,
          query: {
            type: query.type,
            category: item.slug
          }
        },
        scroll: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 57
        }
      }, item.name), __jsx("span", {
        className: "item-count",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 57
        }
      }, item.count));
    })))));
  }), __jsx(react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, function (_ref2) {
    var onToggle = _ref2.onToggle,
        setCollapsibleElement = _ref2.setCollapsibleElement,
        toggleState = _ref2.toggleState;
    return __jsx("div", {
      className: "widget widget-collapsible",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "widget-title mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "#brand",
      className: "".concat(toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''),
      onClick: function onClick(e) {
        onToggle(e);
        e.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 71
      }
    }, "Brand")), __jsx("div", {
      ref: setCollapsibleElement,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "widget-body pt-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "filter-items",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 45
      }
    }, _utils_data__WEBPACK_IMPORTED_MODULE_8__.shopData.brands.map(function (item, index) {
      return __jsx("div", {
        className: "filter-item",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 57
        }
      }, __jsx("div", {
        className: "custom-control custom-checkbox",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 61
        }
      }, __jsx("input", {
        type: "checkbox",
        className: "custom-control-input",
        id: "brand-".concat(index + 1),
        onChange: function onChange(e) {
          return onAttrClick(e, 'brand', item.slug);
        },
        checked: containsAttrInUrl('brand', item.slug) ? true : false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 65
        }
      }), __jsx("label", {
        className: "custom-control-label",
        htmlFor: "brand-".concat(index + 1),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 65
        }
      }, item.brand)));
    })))));
  }), __jsx(react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, function (_ref3) {
    var onToggle = _ref3.onToggle,
        setCollapsibleElement = _ref3.setCollapsibleElement,
        toggleState = _ref3.toggleState;
    return __jsx("div", {
      className: "widget widget-collapsible",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "widget-title mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "#Size",
      className: "".concat(toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''),
      onClick: function onClick(e) {
        onToggle(e);
        e.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 71
      }
    }, "Size")), __jsx("div", {
      ref: setCollapsibleElement,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "widget-body pt-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "filter-items",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 45
      }
    }, _utils_data__WEBPACK_IMPORTED_MODULE_8__.shopData.sizes.map(function (item, index) {
      return __jsx("div", {
        className: "filter-item",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 57
        }
      }, __jsx("div", {
        className: "custom-control custom-checkbox",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 61
        }
      }, __jsx("input", {
        type: "checkbox",
        className: "custom-control-input",
        id: "size-".concat(index + 1),
        onChange: function onChange(e) {
          return onAttrClick(e, 'size', item.slug);
        },
        checked: containsAttrInUrl('size', item.slug) ? true : false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 65
        }
      }), __jsx("label", {
        className: "custom-control-label",
        htmlFor: "size-".concat(index + 1),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 65
        }
      }, item.size)));
    })))));
  }), __jsx(react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, function (_ref4) {
    var onToggle = _ref4.onToggle,
        setCollapsibleElement = _ref4.setCollapsibleElement,
        toggleState = _ref4.toggleState;
    return __jsx("div", {
      className: "widget widget-collapsible",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "widget-title mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "#colour",
      className: "".concat(toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''),
      onClick: function onClick(e) {
        onToggle(e);
        e.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 71
      }
    }, "Colour")), __jsx("div", {
      ref: setCollapsibleElement,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "widget-body pt-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "filter-colors",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 45
      }
    }, _utils_data__WEBPACK_IMPORTED_MODULE_8__.shopData.colors.map(function (item, index) {
      return __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_7__.default, {
        href: getUrlForAttrs('color', item.color_name),
        className: containsAttrInUrl('color', item.color_name) ? 'selected' : '',
        style: {
          backgroundColor: item.color
        },
        key: index,
        scroll: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 57
        }
      }, __jsx("span", {
        className: "sr-only",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 61
        }
      }, "Color Name"));
    })))));
  }), __jsx(react_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.default, {
    collapsed: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, function (_ref5) {
    var onToggle = _ref5.onToggle,
        setCollapsibleElement = _ref5.setCollapsibleElement,
        toggleState = _ref5.toggleState;
    return __jsx("div", {
      className: "widget widget-collapsible",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "widget-title mb-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 33
      }
    }, __jsx("a", {
      href: "#price",
      className: "".concat(toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''),
      onClick: function onClick(e) {
        onToggle(e);
        e.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 37
      }
    }, "Price")), __jsx("div", {
      ref: setCollapsibleElement,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "widget-body pt-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "filter-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "filter-price-text d-flex justify-content-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 45
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 49
      }
    }, "Price Range:\xA0", __jsx("span", {
      className: "filter-price-range",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 53
      }
    }, "Dhs", priceRange.min, " - Dhs", priceRange.max)), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_7__.default, {
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 49
      }
    }, "Filter")), __jsx("div", {
      className: "price-slider",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 45
      }
    }, __jsx((react_input_range__WEBPACK_IMPORTED_MODULE_4___default()), {
      formatLabel: function formatLabel(value) {
        return "".concat(value);
      },
      maxValue: 1000,
      minValue: 0,
      step: 50,
      value: priceRange,
      onChange: onChangePriceRange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 49
      }
    }))))));
  }))));
}

_s(ShopSidebarOne, "muB46luw5mjqdJ5g9S7TZjAQ9jE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = ShopSidebarOne;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(ShopSidebarOne));

var _c, _c2;

$RefreshReg$(_c, "ShopSidebarOne");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9zaG9wL3NpZGViYXIvc2hvcC1zaWRlYmFyLW9uZS5qc3giXSwibmFtZXMiOlsiU2hvcFNpZGViYXJPbmUiLCJwcm9wcyIsInRvZ2dsZSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJtaW4iLCJtYXgiLCJwcmljZVJhbmdlIiwic2V0UmFuZ2UiLCJ1c2VFZmZlY3QiLCJtaW5QcmljZSIsIm1heFByaWNlIiwicGFyc2VJbnQiLCJvbkNoYW5nZVByaWNlUmFuZ2UiLCJ2YWx1ZSIsImNvbnRhaW5zQXR0ckluVXJsIiwidHlwZSIsImN1cnJlbnRRdWVyaWVzIiwic3BsaXQiLCJpbmNsdWRlcyIsImdldFVybEZvckF0dHJzIiwiZmlsdGVyIiwiaXRlbSIsInBhdGhuYW1lIiwicGFnZSIsImpvaW4iLCJvbkF0dHJDbGljayIsImUiLCJhdHRyIiwicXVlcnlPYmplY3QiLCJ1cmwiLCJyZXBsYWNlIiwia2V5IiwicHVzaCIsIm9uVG9nZ2xlIiwic2V0Q29sbGFwc2libGVFbGVtZW50IiwidG9nZ2xlU3RhdGUiLCJ0b0xvd2VyQ2FzZSIsInByZXZlbnREZWZhdWx0Iiwic2hvcERhdGEiLCJpbmRleCIsImNhdGVnb3J5Iiwic2x1ZyIsIm5hbWUiLCJjb3VudCIsImJyYW5kIiwic2l6ZSIsImNvbG9yX25hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQTBCQyxLQUExQixFQUFrQztBQUFBOztBQUFBOztBQUFBLHNCQUNIQSxLQURHLENBQ3RCQyxNQURzQjtBQUFBLE1BQ3RCQSxNQURzQiw4QkFDYixLQURhO0FBRTlCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7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QkFBQVYsS0FBSztBQUFBLHlCQUFPQSxLQUFQO0FBQUEsT0FEdkI7QUFFSSxjQUFRLEVBQUcsSUFGZjtBQUdJLGNBQVEsRUFBRyxDQUhmO0FBSUksVUFBSSxFQUFHLEVBSlg7QUFLSSxXQUFLLEVBQUdQLFVBTFo7QUFNSSxjQUFRLEVBQUdNLGtCQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQVZKLENBREosQ0FESixDQUxKLENBREY7QUFBQSxHQUROLENBdEhKLENBREosQ0FESixDQURKO0FBZ0tIOztHQWxOUWYsYztVQUVVSSxrRCxFQUNEQSxrRDs7O0tBSFRKLGM7QUFvTlQsK0RBQWUsbUJBQUFvRCxpREFBQSxDQUFZcEQsY0FBWixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb25zL1t0eXBlXS4zNzljOWU2MGNjYzBiYTk2ZGRiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IElucHV0UmFuZ2UgZnJvbSAncmVhY3QtaW5wdXQtcmFuZ2UnO1xyXG5pbXBvcnQgU2xpZGVUb2dnbGUgZnJvbSAncmVhY3Qtc2xpZGUtdG9nZ2xlJztcclxuaW1wb3J0ICdyZWFjdC1pbnB1dC1yYW5nZS9saWIvY3NzL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSAnfi9jb21wb25lbnRzL2ZlYXR1cmVzL2FsaW5rJztcclxuaW1wb3J0IHsgc2hvcERhdGEgfSBmcm9tICd+L3V0aWxzL2RhdGEnO1xyXG5cclxuZnVuY3Rpb24gU2hvcFNpZGViYXJPbmUgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgdG9nZ2xlID0gZmFsc2UgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHVzZVJvdXRlcigpLnF1ZXJ5O1xyXG4gICAgY29uc3QgWyBwcmljZVJhbmdlLCBzZXRSYW5nZSBdID0gdXNlU3RhdGUoIHsgbWluOiAwLCBtYXg6IDEwMDAgfSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcXVlcnkubWluUHJpY2UgJiYgcXVlcnkubWF4UHJpY2UgKSB7XHJcbiAgICAgICAgICAgIHNldFJhbmdlKCB7IG1pbjogcGFyc2VJbnQoIHF1ZXJ5Lm1pblByaWNlICksIG1heDogcGFyc2VJbnQoIHF1ZXJ5Lm1heFByaWNlICkgfSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJhbmdlKCB7IG1pbjogMCwgbWF4OiAxMDAwIH0gKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbIHF1ZXJ5IF0gKVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlUHJpY2VSYW5nZSAoIHZhbHVlICkge1xyXG4gICAgICAgIHNldFJhbmdlKCB2YWx1ZSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zQXR0ckluVXJsICggdHlwZSwgdmFsdWUgKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJpZXMgPSBxdWVyeVsgdHlwZSBdID8gcXVlcnlbIHR5cGUgXS5zcGxpdCggJywnICkgOiBbXTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFF1ZXJpZXMgJiYgY3VycmVudFF1ZXJpZXMuaW5jbHVkZXMoIHZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VXJsRm9yQXR0cnMgKCB0eXBlLCB2YWx1ZSApIHtcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXJpZXMgPSBxdWVyeVsgdHlwZSBdID8gcXVlcnlbIHR5cGUgXS5zcGxpdCggJywnICkgOiBbXTtcclxuICAgICAgICBjdXJyZW50UXVlcmllcyA9IGNvbnRhaW5zQXR0ckluVXJsKCB0eXBlLCB2YWx1ZSApID8gY3VycmVudFF1ZXJpZXMuZmlsdGVyKCBpdGVtID0+IGl0ZW0gIT09IHZhbHVlICkgOiBbIC4uLmN1cnJlbnRRdWVyaWVzLCB2YWx1ZSBdO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgWyB0eXBlIF06IGN1cnJlbnRRdWVyaWVzLmpvaW4oICcsJyApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25BdHRyQ2xpY2sgKCBlLCBhdHRyLCB2YWx1ZSApIHtcclxuICAgICAgICBpZiAoIGdldFVybEZvckF0dHJzKCBhdHRyLCB2YWx1ZSApICkge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnlPYmplY3QgPSBnZXRVcmxGb3JBdHRycyggYXR0ciwgdmFsdWUgKS5xdWVyeTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHJvdXRlci5wYXRobmFtZS5yZXBsYWNlKCAnW3R5cGVdJywgcXVlcnkudHlwZSApICsgJz8nO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQga2V5IGluIHF1ZXJ5T2JqZWN0ICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXkgIT09IFwidHlwZVwiICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBrZXkgKyAnPScgKyBxdWVyeU9iamVjdFsga2V5IF0gKyAnJic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGVyLnB1c2goIHVybCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9eyBgJHt0b2dnbGUgPyAnc2lkZWJhci1maWx0ZXInIDogJ3NpZGViYXInfSBzaWRlYmFyLXNob3BgIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHRvZ2dsZSA/ICdzaWRlYmFyLWZpbHRlci13cmFwcGVyJyA6ICcnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNsZWFuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaWx0ZXJzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeToge3R5cGU6IHF1ZXJ5LnR5cGV9IH0gfSBjbGFzc05hbWU9XCJzaWRlYmFyLWZpbHRlci1jbGVhclwiIHNjcm9sbD17IGZhbHNlIH0+Q2xlYW4gQWxsPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IGZhbHNlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB7IG9uVG9nZ2xlLCBzZXRDb2xsYXBzaWJsZUVsZW1lbnQsIHRvZ2dsZVN0YXRlIH0gKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjYXRlZ29yeVwiIGNsYXNzTmFtZT17IGAke3RvZ2dsZVN0YXRlLnRvTG93ZXJDYXNlKCkgPT0gJ2NvbGxhcHNlZCcgPyAnY29sbGFwc2VkJyA6ICcnfWAgfSBvbkNsaWNrPXsgKCBlICkgPT4geyBvblRvZ2dsZSggZSApOyBlLnByZXZlbnREZWZhdWx0KCkgfSB9PkNhdGVnb3J5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsgc2V0Q29sbGFwc2libGVFbGVtZW50IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbXMgZmlsdGVyLWl0ZW1zLWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9wRGF0YS5jYXRlZ29yaWVzLm1hcCggKCBpdGVtLCBpbmRleCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCIga2V5PXsgYGNhdF8ke2luZGV4fWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPXsgYCR7cXVlcnkuY2F0ZWdvcnkgPT0gaXRlbS5zbHVnID8gJ2FjdGl2ZScgOiAnJ31gIH0gaHJlZj17IHtwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogeyB0eXBlOiBxdWVyeS50eXBlLCBjYXRlZ29yeTogaXRlbS5zbHVnIH0gfSB9IHNjcm9sbD17IGZhbHNlIH0+eyBpdGVtLm5hbWUgfTwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1jb3VudFwiPnsgaXRlbS5jb3VudCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlVG9nZ2xlIGNvbGxhcHNlZD17IGZhbHNlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldC1jb2xsYXBzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIG1iLTJcIj48YSBocmVmPVwiI2JyYW5kXCIgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnY29sbGFwc2VkJyA/ICdjb2xsYXBzZWQnIDogJyd9YCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+QnJhbmQ8L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3BEYXRhLmJyYW5kcy5tYXAoICggaXRlbSwgaW5kZXggKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1cIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17IGBicmFuZC0ke2luZGV4ICsgMX1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gb25BdHRyQ2xpY2soIGUsICdicmFuZCcsIGl0ZW0uc2x1ZyApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgY29udGFpbnNBdHRySW5VcmwoICdicmFuZCcsIGl0ZW0uc2x1ZyApID8gdHJ1ZSA6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXsgYGJyYW5kLSR7aW5kZXggKyAxfWAgfT57IGl0ZW0uYnJhbmQgfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBtYi0yXCI+PGEgaHJlZj1cIiNTaXplXCIgY2xhc3NOYW1lPXsgYCR7dG9nZ2xlU3RhdGUudG9Mb3dlckNhc2UoKSA9PSAnY29sbGFwc2VkJyA/ICdjb2xsYXBzZWQnIDogJyd9YCB9IG9uQ2xpY2s9eyAoIGUgKSA9PiB7IG9uVG9nZ2xlKCBlICk7IGUucHJldmVudERlZmF1bHQoKSB9IH0+U2l6ZTwvYT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keSBwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcERhdGEuc2l6ZXMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1cIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsgYHNpemUtJHtpbmRleCArIDF9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IG9uQXR0ckNsaWNrKCBlLCAnc2l6ZScsIGl0ZW0uc2x1ZyApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgY29udGFpbnNBdHRySW5VcmwoICdzaXplJywgaXRlbS5zbHVnICkgPyB0cnVlIDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9eyBgc2l6ZS0ke2luZGV4ICsgMX1gIH0+eyBpdGVtLnNpemUgfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHsgb25Ub2dnbGUsIHNldENvbGxhcHNpYmxlRWxlbWVudCwgdG9nZ2xlU3RhdGUgfSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXQtY29sbGFwc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBtYi0yXCI+PGEgaHJlZj1cIiNjb2xvdXJcIiBjbGFzc05hbWU9eyBgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdjb2xsYXBzZWQnID8gJ2NvbGxhcHNlZCcgOiAnJ31gIH0gb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT5Db2xvdXI8L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9eyBzZXRDb2xsYXBzaWJsZUVsZW1lbnQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHkgcHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9wRGF0YS5jb2xvcnMubWFwKCAoIGl0ZW0sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXsgZ2V0VXJsRm9yQXR0cnMoICdjb2xvcicsIGl0ZW0uY29sb3JfbmFtZSApIH0gY2xhc3NOYW1lPXsgY29udGFpbnNBdHRySW5VcmwoICdjb2xvcicsIGl0ZW0uY29sb3JfbmFtZSApID8gJ3NlbGVjdGVkJyA6ICcnIH0gc3R5bGU9eyB7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciB9IH0ga2V5PXsgaW5kZXggfSBzY3JvbGw9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q29sb3IgTmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVUb2dnbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZVRvZ2dsZSBjb2xsYXBzZWQ9eyBmYWxzZSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICggeyBvblRvZ2dsZSwgc2V0Q29sbGFwc2libGVFbGVtZW50LCB0b2dnbGVTdGF0ZSB9ICkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0LWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJpY2VcIiBjbGFzc05hbWU9eyBgJHt0b2dnbGVTdGF0ZS50b0xvd2VyQ2FzZSgpID09ICdjb2xsYXBzZWQnID8gJ2NvbGxhcHNlZCcgOiAnJ31gIH0gb25DbGljaz17ICggZSApID0+IHsgb25Ub2dnbGUoIGUgKTsgZS5wcmV2ZW50RGVmYXVsdCgpIH0gfT5QcmljZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17IHNldENvbGxhcHNpYmxlRWxlbWVudCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5IHB0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcHJpY2UtdGV4dCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljZSBSYW5nZTombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1wcmljZS1yYW5nZVwiPkRoc3sgcHJpY2VSYW5nZS5taW4gfSAtIERoc3sgcHJpY2VSYW5nZS5tYXggfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9eyB7IHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCBtaW5QcmljZTogcHJpY2VSYW5nZS5taW4sIG1heFByaWNlOiBwcmljZVJhbmdlLm1heCwgcGFnZTogMSB9IH0gfSBjbGFzc05hbWU9XCJwci0yXCIgc2Nyb2xsPXsgZmFsc2UgfT5GaWx0ZXI8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRSYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0TGFiZWw9eyB2YWx1ZSA9PiBgJHt2YWx1ZX1gIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlPXsgMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZT17IDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17IDUwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJpY2VSYW5nZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlUHJpY2VSYW5nZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZVRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggU2hvcFNpZGViYXJPbmUgKTsiXSwic291cmNlUm9vdCI6IiJ9