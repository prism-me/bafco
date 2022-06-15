exports.id = "components_features_alink_jsx-utils_index_js";
exports.ids = ["components_features_alink_jsx-utils_index_js"];
exports.modules = {

/***/ "./components/features/alink.jsx":
/*!***************************************!*\
  !*** ./components/features/alink.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ALink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\BAFCO\\bafco\\components\\features\\alink.jsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function ALink(_ref) {
  let {
    children,
    className,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  function defaultFunction(e) {
    if (props.href == '#') {
      e.preventDefault();
    }
  }

  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("a", {
    className: className,
    style: style,
    onClick: defaultFunction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, children));
}

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartPriceTotal": function() { return /* binding */ cartPriceTotal; },
/* harmony export */   "cartQtyTotal": function() { return /* binding */ cartQtyTotal; },
/* harmony export */   "isInCart": function() { return /* binding */ isInCart; },
/* harmony export */   "canAddToCart": function() { return /* binding */ canAddToCart; },
/* harmony export */   "isInWishlist": function() { return /* binding */ isInWishlist; },
/* harmony export */   "isInCompare": function() { return /* binding */ isInCompare; },
/* harmony export */   "isSafariBrowser": function() { return /* binding */ isSafariBrowser; },
/* harmony export */   "isEdgeBrowser": function() { return /* binding */ isEdgeBrowser; },
/* harmony export */   "getIndex": function() { return /* binding */ getIndex; },
/* harmony export */   "catFilter": function() { return /* binding */ catFilter; },
/* harmony export */   "attrFilter": function() { return /* binding */ attrFilter; },
/* harmony export */   "scrollToPageContent": function() { return /* binding */ scrollToPageContent; },
/* harmony export */   "parallax": function() { return /* binding */ parallax; },
/* harmony export */   "countTo": function() { return /* binding */ countTo; },
/* harmony export */   "safeContent": function() { return /* binding */ safeContent; }
/* harmony export */ });
/**
 * get total Price of products in cart.
 * @param { Array } cartItems 
 * @return { Float } totalPrice
 */
const cartPriceTotal = cartItems => {
  return cartItems.reduce((acc, cur) => {
    return acc + cur.sum;
  }, 0);
};
/**
 * get number of products in cart
 * @param { Array } cartItems 
 * @return { Integer } numbers of cart items in cartlist
 */

const cartQtyTotal = cartItems => {
  return cartItems.reduce((acc, cur) => {
    return acc + parseInt(cur.qty, 10);
  }, 0);
};
/**
 * Decide where product is in cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 */

const isInCart = (cartItems, product) => {
  return cartItems.find(item => item.id == product.id) ? true : false;
};
/**
 * Confirm if product could be added to cart.
 * @param { Array } cartItems 
 * @param { Object } product 
 * @param { Number } qty 
 */

const canAddToCart = (cartItems, product, qty) => {
  let find = cartItems.find(item => item.id == product.id);

  if (find) {
    if (product.stock == 0 || product.stock < find.qty + qty) return false;else return true;
  } else {
    if (product.stock == 0 || product.stock < qty) return false;else return true;
  }
};
/**
 * 
 * @param {Array} wishlist 
 * @param {Object} product 
 */

const isInWishlist = (wishlist, product) => {
  return product && wishlist.findIndex(item => item.slug == product.slug) > -1;
};
/**
 * 
 * @param {Array} compare 
 * @param {Object} product 
 */

const isInCompare = (compare, product) => {
  return product && compare.findIndex(item => item.slug == product.slug) > -1;
};
/**
 * utils to detect safari browser
 * @return {bool}
 */

const isSafariBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1) return true;
  return false;
};
/**
 * utils to detect Edge browser
 * @return {bool}
 */

const isEdgeBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};
/**
 * get index of the element
 * @param {Element} element 
 */

const getIndex = function (element) {
  let children = element.parentElement.children;

  for (let i = 0; i < children.length; i++) {
    if (element == children[i]) return i;
  }

  return 0;
};
/**
 * filter products by category.
 * @param {Array} products 
 * @param {Array} category 
 * @param {Boolean} flag 
 */

const catFilter = function (products = [], category, flag = false) {
  if (category[0] === 'All') return products;
  return products.filter(item => {
    for (let i = 0; i < category.length; i++) {
      if (item.category.find(cat => cat.slug == category[i])) {
        if (!flag) return true;
      } else {
        if (flag) return false;
      }
    }

    if (flag) return true;else return false;
  });
};
/**
 * filter products by attribute
 * @param {Array} products 
 * @param {String} attr 
 */

const attrFilter = function (products = [], attr) {
  // if(products)
  return products.filter(item => {
    if (attr === 'all') {
      return true;
    }

    if (attr === 'sale' && item.sale_price) {
      return true;
    }

    if (attr === 'rated' && item.ratings > 3) {
      return true;
    }

    if (attr === 'until' && item.until) {
      return true;
    }

    return item[attr] === true;
  });
};
/**
 * Scrolling to Page content section
 */

const scrollToPageContent = function () {
  let to = document.querySelector('.page-content').offsetTop - 74;

  if (isSafariBrowser() || isEdgeBrowser()) {
    let pos = window.pageYOffset;
    let timerId = setInterval(() => {
      if (pos <= to) clearInterval(timerId);else {
        window.scrollBy(0, -120);
        pos -= 120;
      }
    }, 1);
  } else {
    window.scrollTo({
      top: to,
      behavior: 'smooth'
    });
  }
};
/**
 * utils to make background parallax
 */

const parallax = () => {
  let parallax = document.querySelectorAll('.bg-parallax');

  for (let i = 0; i < parallax.length; i++) {
    let y = 0;

    if (parallax[i].classList.contains('header-parallax')) {
      y = (10 - window.pageYOffset) * 47 / 900 + 50;
    } else {
      y = (parallax[i].offsetTop - window.pageYOffset) * 47 / parallax[i].offsetTop + 50;
    }

    parallax[i].style.backgroundPositionY = y + '%';
  }
};
/**
 * utils to set count to in about-2
 */

const countTo = function () {
  let items = document.querySelectorAll('.count');

  if (items) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let amount = parseInt(item.getAttribute('data-to'), 10) - parseInt(item.getAttribute('data-from'), 10);
      let time = parseInt(item.getAttribute('data-speed'), 10);
      let interval = parseInt(item.getAttribute('data-refresh-interval'), 10);
      let pt = 0;
      let height = item.parentElement.parentElement.parentElement.offsetTop;
      let flag = 0;
      document.addEventListener("scroll", countToScrollHandler, true);

      function countToScrollHandler() {
        if (pt <= time && height >= window.pageYOffset) {
          if (0 === flag) {
            let timerId = setInterval(() => {
              if (pt >= time) {
                clearInterval(timerId);
              }

              item.innerHTML = parseInt(pt * amount / time);
              pt = pt + interval;
            }, interval);
          }

          flag = 1;
        }
      }
    }
  }
};
/**
 * Prevent Xss Attack
 * @param {Node} html 
 */

function safeContent(html) {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  } // Removing all events from tags...


  html = html.replace(/ on\w+="[^"]*"/g, "");
  return {
    __html: html
  };
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvaWdub3JlZHxFOlxcQkFGQ09cXGJhZmNvXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQUxpbmsiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwicHJvcHMiLCJkZWZhdWx0RnVuY3Rpb24iLCJlIiwiaHJlZiIsInByZXZlbnREZWZhdWx0IiwiY2FydFByaWNlVG90YWwiLCJjYXJ0SXRlbXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJzdW0iLCJjYXJ0UXR5VG90YWwiLCJwYXJzZUludCIsInF0eSIsImlzSW5DYXJ0IiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJjYW5BZGRUb0NhcnQiLCJzdG9jayIsImlzSW5XaXNobGlzdCIsIndpc2hsaXN0IiwiZmluZEluZGV4Iiwic2x1ZyIsImlzSW5Db21wYXJlIiwiY29tcGFyZSIsImlzU2FmYXJpQnJvd3NlciIsInNVc3JBZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJpc0VkZ2VCcm93c2VyIiwiZ2V0SW5kZXgiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImkiLCJsZW5ndGgiLCJjYXRGaWx0ZXIiLCJwcm9kdWN0cyIsImNhdGVnb3J5IiwiZmxhZyIsImZpbHRlciIsImNhdCIsImF0dHJGaWx0ZXIiLCJhdHRyIiwic2FsZV9wcmljZSIsInJhdGluZ3MiLCJ1bnRpbCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJ0byIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFRvcCIsInBvcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbEJ5Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInBhcmFsbGF4IiwicXVlcnlTZWxlY3RvckFsbCIsInkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJhY2tncm91bmRQb3NpdGlvblkiLCJjb3VudFRvIiwiaXRlbXMiLCJhbW91bnQiLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lIiwiaW50ZXJ2YWwiLCJwdCIsImhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3VudFRvU2Nyb2xsSGFuZGxlciIsImlubmVySFRNTCIsInNhZmVDb250ZW50IiwiaHRtbCIsIlNDUklQVF9SRUdFWCIsInRlc3QiLCJyZXBsYWNlIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxPQUE0RDtBQUFBLE1BQTNDO0FBQUVDLFlBQUY7QUFBWUMsYUFBWjtBQUF1QkM7QUFBdkIsR0FBMkM7QUFBQSxNQUFWQyxLQUFVOztBQUN2RSxXQUFTQyxlQUFULENBQTJCQyxDQUEzQixFQUErQjtBQUMzQixRQUFLRixLQUFLLENBQUNHLElBQU4sSUFBYyxHQUFuQixFQUF5QjtBQUNyQkQsT0FBQyxDQUFDRSxjQUFGO0FBQ0g7QUFDSjs7QUFFRCxTQUNJLE1BQUMsa0RBQUQsZUFBV0osS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0k7QUFBRyxhQUFTLEVBQUdGLFNBQWY7QUFBMkIsU0FBSyxFQUFHQyxLQUFuQztBQUEyQyxXQUFPLEVBQUdFLGVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUosUUFETixDQURKLENBREo7QUFPSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTVEsY0FBYyxHQUFHQyxTQUFTLElBQUk7QUFDdkMsU0FBT0EsU0FBUyxDQUFDQyxNQUFWLENBQWtCLENBQUVDLEdBQUYsRUFBT0MsR0FBUCxLQUFnQjtBQUNyQyxXQUFPRCxHQUFHLEdBQUdDLEdBQUcsQ0FBQ0MsR0FBakI7QUFDSCxHQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0gsQ0FKTTtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsWUFBWSxHQUFHTCxTQUFTLElBQUk7QUFDckMsU0FBT0EsU0FBUyxDQUFDQyxNQUFWLENBQWtCLENBQUVDLEdBQUYsRUFBT0MsR0FBUCxLQUFnQjtBQUNyQyxXQUFPRCxHQUFHLEdBQUdJLFFBQVEsQ0FBRUgsR0FBRyxDQUFDSSxHQUFOLEVBQVcsRUFBWCxDQUFyQjtBQUNILEdBRk0sRUFFSixDQUZJLENBQVA7QUFHSCxDQUpNO0FBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxRQUFRLEdBQUcsQ0FBRVIsU0FBRixFQUFhUyxPQUFiLEtBQTBCO0FBQzlDLFNBQU9ULFNBQVMsQ0FBQ1UsSUFBVixDQUFnQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsSUFBV0gsT0FBTyxDQUFDRyxFQUEzQyxJQUFrRCxJQUFsRCxHQUF5RCxLQUFoRTtBQUNILENBRk07QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsWUFBWSxHQUFHLENBQUViLFNBQUYsRUFBYVMsT0FBYixFQUFzQkYsR0FBdEIsS0FBK0I7QUFDdkQsTUFBSUcsSUFBSSxHQUFHVixTQUFTLENBQUNVLElBQVYsQ0FBZ0JDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFMLElBQVdILE9BQU8sQ0FBQ0csRUFBM0MsQ0FBWDs7QUFDQSxNQUFLRixJQUFMLEVBQVk7QUFDUixRQUFLRCxPQUFPLENBQUNLLEtBQVIsSUFBaUIsQ0FBakIsSUFBd0JMLE9BQU8sQ0FBQ0ssS0FBUixHQUFrQkosSUFBSSxDQUFDSCxHQUFMLEdBQVdBLEdBQTFELEVBQW9FLE9BQU8sS0FBUCxDQUFwRSxLQUNLLE9BQU8sSUFBUDtBQUNSLEdBSEQsTUFHTztBQUNILFFBQUtFLE9BQU8sQ0FBQ0ssS0FBUixJQUFpQixDQUFqQixJQUF3QkwsT0FBTyxDQUFDSyxLQUFSLEdBQWdCUCxHQUE3QyxFQUFxRCxPQUFPLEtBQVAsQ0FBckQsS0FDSyxPQUFPLElBQVA7QUFDUjtBQUNKLENBVE07QUFXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1RLFlBQVksR0FBRyxDQUFFQyxRQUFGLEVBQVlQLE9BQVosS0FBeUI7QUFDakQsU0FBT0EsT0FBTyxJQUFJTyxRQUFRLENBQUNDLFNBQVQsQ0FBb0JOLElBQUksSUFBSUEsSUFBSSxDQUFDTyxJQUFMLElBQWFULE9BQU8sQ0FBQ1MsSUFBakQsSUFBMEQsQ0FBQyxDQUE3RTtBQUNILENBRk07QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFdBQVcsR0FBRyxDQUFFQyxPQUFGLEVBQVdYLE9BQVgsS0FBd0I7QUFDL0MsU0FBT0EsT0FBTyxJQUFJVyxPQUFPLENBQUNILFNBQVIsQ0FBbUJOLElBQUksSUFBSUEsSUFBSSxDQUFDTyxJQUFMLElBQWFULE9BQU8sQ0FBQ1MsSUFBaEQsSUFBeUQsQ0FBQyxDQUE1RTtBQUNILENBRk07QUFLUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNRyxlQUFlLEdBQUcsWUFBWTtBQUN2QyxNQUFJQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0MsU0FBdkI7QUFDQSxNQUFLRixNQUFNLENBQUNHLE9BQVAsQ0FBZ0IsUUFBaEIsTUFBK0IsQ0FBQyxDQUFoQyxJQUFxQ0gsTUFBTSxDQUFDRyxPQUFQLENBQWdCLFFBQWhCLE1BQStCLENBQUMsQ0FBMUUsRUFDSSxPQUFPLElBQVA7QUFDSixTQUFPLEtBQVA7QUFDSCxDQUxNO0FBUVA7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsYUFBYSxHQUFHLFlBQVk7QUFDckMsTUFBSUosTUFBTSxHQUFHQyxTQUFTLENBQUNDLFNBQXZCO0FBQ0EsTUFBS0YsTUFBTSxDQUFDRyxPQUFQLENBQWdCLE1BQWhCLElBQTJCLENBQUMsQ0FBakMsRUFDSSxPQUFPLElBQVA7QUFDSixTQUFPLEtBQVA7QUFDSCxDQUxNO0FBT1A7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUUsUUFBUSxHQUFHLFVBQVdDLE9BQVgsRUFBcUI7QUFDekMsTUFBSXJDLFFBQVEsR0FBR3FDLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQnRDLFFBQXJDOztBQUNBLE9BQU0sSUFBSXVDLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUd2QyxRQUFRLENBQUN3QyxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUE0QztBQUN4QyxRQUFLRixPQUFPLElBQUlyQyxRQUFRLENBQUV1QyxDQUFGLENBQXhCLEVBQWdDLE9BQU9BLENBQVA7QUFDbkM7O0FBRUQsU0FBTyxDQUFQO0FBQ0gsQ0FQTTtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNRSxTQUFTLEdBQUcsVUFBV0MsUUFBUSxHQUFHLEVBQXRCLEVBQTBCQyxRQUExQixFQUFvQ0MsSUFBSSxHQUFHLEtBQTNDLEVBQW1EO0FBQ3hFLE1BQUtELFFBQVEsQ0FBRSxDQUFGLENBQVIsS0FBa0IsS0FBdkIsRUFBK0IsT0FBT0QsUUFBUDtBQUUvQixTQUFPQSxRQUFRLENBQUNHLE1BQVQsQ0FBaUJ6QixJQUFJLElBQUk7QUFDNUIsU0FBTSxJQUFJbUIsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR0ksUUFBUSxDQUFDSCxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUE0QztBQUN4QyxVQUFLbkIsSUFBSSxDQUFDdUIsUUFBTCxDQUFjeEIsSUFBZCxDQUFvQjJCLEdBQUcsSUFBSUEsR0FBRyxDQUFDbkIsSUFBSixJQUFZZ0IsUUFBUSxDQUFFSixDQUFGLENBQS9DLENBQUwsRUFBOEQ7QUFDMUQsWUFBSyxDQUFDSyxJQUFOLEVBQWEsT0FBTyxJQUFQO0FBQ2hCLE9BRkQsTUFFTztBQUNILFlBQUtBLElBQUwsRUFBWSxPQUFPLEtBQVA7QUFDZjtBQUNKOztBQUVELFFBQUtBLElBQUwsRUFDSSxPQUFPLElBQVAsQ0FESixLQUdJLE9BQU8sS0FBUDtBQUNQLEdBYk0sQ0FBUDtBQWNILENBakJNO0FBbUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUcsVUFBVSxHQUFHLFVBQVdMLFFBQVEsR0FBRyxFQUF0QixFQUEwQk0sSUFBMUIsRUFBaUM7QUFDdkQ7QUFDQSxTQUFPTixRQUFRLENBQUNHLE1BQVQsQ0FBaUJ6QixJQUFJLElBQUk7QUFDNUIsUUFBSzRCLElBQUksS0FBSyxLQUFkLEVBQXNCO0FBQ2xCLGFBQU8sSUFBUDtBQUNIOztBQUVELFFBQUtBLElBQUksS0FBSyxNQUFULElBQW1CNUIsSUFBSSxDQUFDNkIsVUFBN0IsRUFBMEM7QUFDdEMsYUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBS0QsSUFBSSxLQUFLLE9BQVQsSUFBb0I1QixJQUFJLENBQUM4QixPQUFMLEdBQWUsQ0FBeEMsRUFBNEM7QUFDeEMsYUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBS0YsSUFBSSxLQUFLLE9BQVQsSUFBb0I1QixJQUFJLENBQUMrQixLQUE5QixFQUFzQztBQUNsQyxhQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPL0IsSUFBSSxDQUFFNEIsSUFBRixDQUFKLEtBQWlCLElBQXhCO0FBQ0gsR0FsQk0sQ0FBUDtBQW1CSCxDQXJCTTtBQXVCUDtBQUNBO0FBQ0E7O0FBQ08sTUFBTUksbUJBQW1CLEdBQUcsWUFBWTtBQUMzQyxNQUFJQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixlQUF4QixFQUNKQyxTQURJLEdBQ1EsRUFEakI7O0FBRUEsTUFBSzFCLGVBQWUsTUFBTUssYUFBYSxFQUF2QyxFQUE0QztBQUN4QyxRQUFJc0IsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFdBQWpCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxXQUFXLENBQUUsTUFBTTtBQUM3QixVQUFLSixHQUFHLElBQUlKLEVBQVosRUFBaUJTLGFBQWEsQ0FBRUYsT0FBRixDQUFiLENBQWpCLEtBQ0s7QUFDREYsY0FBTSxDQUFDSyxRQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQUMsR0FBckI7QUFDQU4sV0FBRyxJQUFJLEdBQVA7QUFDSDtBQUNKLEtBTndCLEVBTXRCLENBTnNCLENBQXpCO0FBT0gsR0FURCxNQVNPO0FBQ0hDLFVBQU0sQ0FBQ00sUUFBUCxDQUFpQjtBQUNiQyxTQUFHLEVBQUVaLEVBRFE7QUFFYmEsY0FBUSxFQUFFO0FBRkcsS0FBakI7QUFJSDtBQUNKLENBbEJNO0FBb0JQO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUMxQixNQUFJQSxRQUFRLEdBQUdiLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMkIsY0FBM0IsQ0FBZjs7QUFFQSxPQUFNLElBQUk3QixDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHNEIsUUFBUSxDQUFDM0IsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBNEM7QUFDeEMsUUFBSThCLENBQUMsR0FBRyxDQUFSOztBQUNBLFFBQUtGLFFBQVEsQ0FBRTVCLENBQUYsQ0FBUixDQUFjK0IsU0FBZCxDQUF3QkMsUUFBeEIsQ0FBa0MsaUJBQWxDLENBQUwsRUFBNkQ7QUFDekRGLE9BQUMsR0FBRyxDQUFFLEtBQUtYLE1BQU0sQ0FBQ0MsV0FBZCxJQUE4QixFQUE5QixHQUFtQyxHQUFuQyxHQUF5QyxFQUE3QztBQUNILEtBRkQsTUFFTztBQUNIVSxPQUFDLEdBQUcsQ0FBRUYsUUFBUSxDQUFFNUIsQ0FBRixDQUFSLENBQWNpQixTQUFkLEdBQTBCRSxNQUFNLENBQUNDLFdBQW5DLElBQW1ELEVBQW5ELEdBQXdEUSxRQUFRLENBQUU1QixDQUFGLENBQVIsQ0FBY2lCLFNBQXRFLEdBQWtGLEVBQXRGO0FBQ0g7O0FBRURXLFlBQVEsQ0FBRTVCLENBQUYsQ0FBUixDQUFjckMsS0FBZCxDQUFvQnNFLG1CQUFwQixHQUEwQ0gsQ0FBQyxHQUFHLEdBQTlDO0FBQ0g7QUFDSixDQWJNO0FBZVA7QUFDQTtBQUNBOztBQUNPLE1BQU1JLE9BQU8sR0FBRyxZQUFZO0FBQy9CLE1BQUlDLEtBQUssR0FBR3BCLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMkIsUUFBM0IsQ0FBWjs7QUFFQSxNQUFLTSxLQUFMLEVBQWE7QUFDVCxTQUFNLElBQUluQyxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHbUMsS0FBSyxDQUFDbEMsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBeUM7QUFFckMsVUFBSW5CLElBQUksR0FBR3NELEtBQUssQ0FBRW5DLENBQUYsQ0FBaEI7QUFDQSxVQUFJb0MsTUFBTSxHQUFHNUQsUUFBUSxDQUFFSyxJQUFJLENBQUN3RCxZQUFMLENBQW1CLFNBQW5CLENBQUYsRUFBa0MsRUFBbEMsQ0FBUixHQUFpRDdELFFBQVEsQ0FBRUssSUFBSSxDQUFDd0QsWUFBTCxDQUFtQixXQUFuQixDQUFGLEVBQW9DLEVBQXBDLENBQXRFO0FBQ0EsVUFBSUMsSUFBSSxHQUFHOUQsUUFBUSxDQUFFSyxJQUFJLENBQUN3RCxZQUFMLENBQW1CLFlBQW5CLENBQUYsRUFBcUMsRUFBckMsQ0FBbkI7QUFDQSxVQUFJRSxRQUFRLEdBQUcvRCxRQUFRLENBQUVLLElBQUksQ0FBQ3dELFlBQUwsQ0FBbUIsdUJBQW5CLENBQUYsRUFBZ0QsRUFBaEQsQ0FBdkI7QUFDQSxVQUFJRyxFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUlDLE1BQU0sR0FBRzVELElBQUksQ0FBQ2tCLGFBQUwsQ0FBbUJBLGFBQW5CLENBQWlDQSxhQUFqQyxDQUErQ2tCLFNBQTVEO0FBQ0EsVUFBSVosSUFBSSxHQUFHLENBQVg7QUFFQVUsY0FBUSxDQUFDMkIsZ0JBQVQsQ0FBMkIsUUFBM0IsRUFBcUNDLG9CQUFyQyxFQUEyRCxJQUEzRDs7QUFFQSxlQUFTQSxvQkFBVCxHQUFpQztBQUM3QixZQUFLSCxFQUFFLElBQUlGLElBQU4sSUFBY0csTUFBTSxJQUFJdEIsTUFBTSxDQUFDQyxXQUFwQyxFQUFrRDtBQUM5QyxjQUFLLE1BQU1mLElBQVgsRUFBa0I7QUFDZCxnQkFBSWdCLE9BQU8sR0FBR0MsV0FBVyxDQUFFLE1BQU07QUFDN0Isa0JBQUtrQixFQUFFLElBQUlGLElBQVgsRUFBa0I7QUFDZGYsNkJBQWEsQ0FBRUYsT0FBRixDQUFiO0FBQ0g7O0FBRUR4QyxrQkFBSSxDQUFDK0QsU0FBTCxHQUFpQnBFLFFBQVEsQ0FBSWdFLEVBQUUsR0FBR0osTUFBUCxHQUFrQkUsSUFBcEIsQ0FBekI7QUFDQUUsZ0JBQUUsR0FBR0EsRUFBRSxHQUFHRCxRQUFWO0FBQ0gsYUFQd0IsRUFPdEJBLFFBUHNCLENBQXpCO0FBUUg7O0FBRURsQyxjQUFJLEdBQUcsQ0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0osQ0FsQ007QUFxQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3dDLFdBQVQsQ0FBdUJDLElBQXZCLEVBQThCO0FBQ2pDLFFBQU1DLFlBQVksR0FBRyxxREFBckIsQ0FEaUMsQ0FHakM7O0FBQ0EsU0FBUUEsWUFBWSxDQUFDQyxJQUFiLENBQW1CRixJQUFuQixDQUFSLEVBQW9DO0FBQ2hDQSxRQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFjRixZQUFkLEVBQTRCLEVBQTVCLENBQVA7QUFDSCxHQU5nQyxDQVFqQzs7O0FBQ0FELE1BQUksR0FBR0EsSUFBSSxDQUFDRyxPQUFMLENBQWMsaUJBQWQsRUFBaUMsRUFBakMsQ0FBUDtBQUVBLFNBQU87QUFDSEMsVUFBTSxFQUFFSjtBQURMLEdBQVA7QUFHSCxDOzs7Ozs7Ozs7O0FDL1BELGUiLCJmaWxlIjoiY29tcG9uZW50c19mZWF0dXJlc19hbGlua19qc3gtdXRpbHNfaW5kZXhfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayAoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGlmICggcHJvcHMuaHJlZiA9PSAnIycgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHN0eWxlPXsgc3R5bGUgfSBvbkNsaWNrPXsgZGVmYXVsdEZ1bmN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsIi8qKlxyXG4gKiBnZXQgdG90YWwgUHJpY2Ugb2YgcHJvZHVjdHMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEByZXR1cm4geyBGbG9hdCB9IHRvdGFsUHJpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UHJpY2VUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgY3VyLnN1bVxyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogZ2V0IG51bWJlciBvZiBwcm9kdWN0cyBpbiBjYXJ0XHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgSW50ZWdlciB9IG51bWJlcnMgb2YgY2FydCBpdGVtcyBpbiBjYXJ0bGlzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhcnRRdHlUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQoIGN1ci5xdHksIDEwICk7XHJcbiAgICB9LCAwICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNpZGUgd2hlcmUgcHJvZHVjdCBpcyBpbiBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlybSBpZiBwcm9kdWN0IGNvdWxkIGJlIGFkZGVkIHRvIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcGFyYW0geyBPYmplY3QgfSBwcm9kdWN0IFxyXG4gKiBAcGFyYW0geyBOdW1iZXIgfSBxdHkgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FuQWRkVG9DYXJ0ID0gKCBjYXJ0SXRlbXMsIHByb2R1Y3QsIHF0eSApID0+IHtcclxuICAgIGxldCBmaW5kID0gY2FydEl0ZW1zLmZpbmQoIGl0ZW0gPT4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkICk7XHJcbiAgICBpZiAoIGZpbmQgKSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgKCBmaW5kLnF0eSArIHF0eSApICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgcXR5ICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB3aXNobGlzdCBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbldpc2hsaXN0ID0gKCB3aXNobGlzdCwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIHdpc2hsaXN0LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wYXJlIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ29tcGFyZSA9ICggY29tcGFyZSwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIGNvbXBhcmUuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PSBwcm9kdWN0LnNsdWcgKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBzYWZhcmkgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzU2FmYXJpQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggJ1NhZmFyaScgKSAhPT0gLTEgJiYgc1VzckFnLmluZGV4T2YoICdDaHJvbWUnICkgPT09IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3QgRWRnZSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFZGdlQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJFZGdlXCIgKSA+IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBpbmRleCBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SW5kZXggPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBpZiAoIGVsZW1lbnQgPT0gY2hpbGRyZW5bIGkgXSApIHJldHVybiBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogZmlsdGVyIHByb2R1Y3RzIGJ5IGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9kdWN0cyBcclxuICogQHBhcmFtIHtBcnJheX0gY2F0ZWdvcnkgXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXRGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGNhdGVnb3J5LCBmbGFnID0gZmFsc2UgKSB7XHJcbiAgICBpZiAoIGNhdGVnb3J5WyAwIF0gPT09ICdBbGwnICkgcmV0dXJuIHByb2R1Y3RzO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoIGl0ZW0uY2F0ZWdvcnkuZmluZCggY2F0ID0+IGNhdC5zbHVnID09IGNhdGVnb3J5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggIWZsYWcgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggZmxhZyApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBmbGFnIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IClcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGF0dHJGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGF0dHIgKSB7XHJcbiAgICAvLyBpZihwcm9kdWN0cylcclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ2FsbCcgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAnc2FsZScgJiYgaXRlbS5zYWxlX3ByaWNlICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3JhdGVkJyAmJiBpdGVtLnJhdGluZ3MgPiAzICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3VudGlsJyAmJiBpdGVtLnVudGlsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtWyBhdHRyIF0gPT09IHRydWU7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY3JvbGxpbmcgdG8gUGFnZSBjb250ZW50IHNlY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBzY3JvbGxUb1BhZ2VDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLWNvbnRlbnQnIClcclxuICAgICAgICAub2Zmc2V0VG9wIC0gNzQ7XHJcbiAgICBpZiAoIGlzU2FmYXJpQnJvd3NlcigpIHx8IGlzRWRnZUJyb3dzZXIoKSApIHtcclxuICAgICAgICBsZXQgcG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBwb3MgPD0gdG8gKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KCAwLCAtMTIwICk7XHJcbiAgICAgICAgICAgICAgICBwb3MgLT0gMTIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgdG9wOiB0byxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gbWFrZSBiYWNrZ3JvdW5kIHBhcmFsbGF4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyYWxsYXggPSAoKSA9PiB7XHJcbiAgICBsZXQgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmJnLXBhcmFsbGF4JyApO1xyXG5cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFsbGF4Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBpZiAoIHBhcmFsbGF4WyBpIF0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGVhZGVyLXBhcmFsbGF4JyApICkge1xyXG4gICAgICAgICAgICB5ID0gKCAxMCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyA5MDAgKyA1MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5ID0gKCBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCArIDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYWxsYXhbIGkgXS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0geSArICclJztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNldCBjb3VudCB0byBpbiBhYm91dC0yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY291bnQnICk7XHJcblxyXG4gICAgaWYgKCBpdGVtcyApIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbIGkgXTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtdG8nICksIDEwICkgLSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyb20nICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1zcGVlZCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWZyZXNoLWludGVydmFsJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgcHQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gMDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGNvdW50VG9TY3JvbGxIYW5kbGVyLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudFRvU2Nyb2xsSGFuZGxlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHB0IDw9IHRpbWUgJiYgaGVpZ2h0ID49IHdpbmRvdy5wYWdlWU9mZnNldCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIDAgPT09IGZsYWcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcHQgPj0gdGltZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwYXJzZUludCggKCBwdCAqIGFtb3VudCApIC8gdGltZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwdCArIGludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBYc3MgQXR0YWNrXHJcbiAqIEBwYXJhbSB7Tm9kZX0gaHRtbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlQ29udGVudCAoIGh0bWwgKSB7XHJcbiAgICBjb25zdCBTQ1JJUFRfUkVHRVggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcclxuXHJcbiAgICAvLyBSZW1vdmluZyB0aGUgPHNjcmlwdD4gdGFnc1xyXG4gICAgd2hpbGUgKCBTQ1JJUFRfUkVHRVgudGVzdCggaHRtbCApICkge1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIFNDUklQVF9SRUdFWCwgXCJcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92aW5nIGFsbCBldmVudHMgZnJvbSB0YWdzLi4uXHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCAvIG9uXFx3Kz1cIlteXCJdKlwiL2csIFwiXCIgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIF9faHRtbDogaHRtbFxyXG4gICAgfVxyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==