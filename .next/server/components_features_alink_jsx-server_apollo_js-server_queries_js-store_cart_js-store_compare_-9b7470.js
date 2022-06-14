exports.id = "components_features_alink_jsx-server_apollo_js-server_queries_js-store_cart_js-store_compare_-9b7470";
exports.ids = ["components_features_alink_jsx-server_apollo_js-server_queries_js-store_cart_js-store_compare_-9b7470"];
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

/***/ "./server/apollo.js":
/*!**************************!*\
  !*** ./server/apollo.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
// import { withApollo } from 'next-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
// const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;
// const apolloClient = new ApolloClient( {
//     uri: API_URI,
//     cache: new InMemoryCache()
// } );
// export default withApollo( apolloClient );
 // import ApolloClient, { InMemoryCache } from 'apollo-boost';


const API_URI = `${"http://localhost:4000"}/graphql`; // const apolloClient = new ApolloClient( {
//     uri: API_URI,
//     cache: new InMemoryCache()
// } );

const apolloClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
  link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({
    uri: API_URI
  }),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["default"] = ((0,next_apollo__WEBPACK_IMPORTED_MODULE_0__.withApollo)(apolloClient));

/***/ }),

/***/ "./server/queries.js":
/*!***************************!*\
  !*** ./server/queries.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_PRODUCTS": function() { return /* binding */ GET_PRODUCTS; },
/* harmony export */   "GET_PRODUCT": function() { return /* binding */ GET_PRODUCT; },
/* harmony export */   "GET_ELEMENT_PRODUCTS": function() { return /* binding */ GET_ELEMENT_PRODUCTS; },
/* harmony export */   "GET_ELEMENT_POSTS": function() { return /* binding */ GET_ELEMENT_POSTS; },
/* harmony export */   "GET_POSTS_BY_PAGE": function() { return /* binding */ GET_POSTS_BY_PAGE; },
/* harmony export */   "GET_POST": function() { return /* binding */ GET_POST; },
/* harmony export */   "GET_HOME_DATA": function() { return /* binding */ GET_HOME_DATA; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query products($searchTerm: String, $color: [String], $size: [String], $brand: [String], $minPrice: Int, $maxPrice: Int, $category: String, $rating: [String], $sortBy: String, $page: Int = 1, $perPage: Int, $list: Boolean = false, $from: Int = 0) {
        products(demo: ${"1"}, searchTerm: $searchTerm, color: $color, size: $size, brand: $brand, minPrice: $minPrice, maxPrice: $maxPrice, category: $category, rating: $rating, sortBy: $sortBy, page: $page, perPage: $perPage, list: $list, from: $from) {
            data {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                short_desc @include(if: $list)
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }
            totalCount
        }
    }
`;
const GET_PRODUCT = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query product($slug: String!, $onlyData: Boolean = false) {
        product(demo: ${"1"}, slug: $slug, onlyData: $onlyData) {
            single {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                short_desc
                category {
                    name
                    slug
                }
                brands {
                    name
                    slug
                }
                pictures {
                    width
                    height
                    url
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }

            prev @skip(if: $onlyData) {
                slug
                name
                sm_pictures {
                    width
                    height
                    url
                }
            }

            next @skip(if: $onlyData) {
                slug
                name
                sm_pictures {
                    width
                    height
                    url
                }
            }

            related @skip(if: $onlyData) {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }
        }
    }
`;
const GET_ELEMENT_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query elementProducts {
        elementProducts {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
        }
    }
`;
const GET_ELEMENT_POSTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query elementPosts {
        elementPosts {
            id
            author
            comments
            content
            date
            slug
            title
            type
            blog_categories {
                name
                slug
            }
            image {
                width
                height
                url
            }
        }
    }
`;
const GET_POSTS_BY_PAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query postsByPage ($page: String!, $category: String) {
        postsByPage(page: $page, category: $category) {
            data {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            categories {
                name
                slug
                count
            }
        }
    }
`;
const GET_POST = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query post($slug: String!) {
        post(slug: $slug) {
            single {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            prev {
                id
                slug
                title
            }

            next {
                id
                slug
                title
            }

            related {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            categories {
                name
                slug
                count
            }
        }
    }
`;
const GET_HOME_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query homeData {
        homeData(demo: ${"1"}) {
            products {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }

            posts {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }
        }
    }
`;

/***/ }),

/***/ "./store/cart.js":
/*!***********************!*\
  !*** ./store/cart.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "cartSaga": function() { return /* binding */ cartSaga; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const actionTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  refreshStore: "REFRESH_STORE",
  updateCart: "UPDATE_CART"
};
const initialState = {
  data: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToCart:
      var findIndex = state.data.findIndex(item => item.id == action.payload.product.id);
      let qty = action.payload.qty ? action.payload.qty : 1;

      if (findIndex !== -1 && action.payload.product.variants.length > 0) {
        findIndex = state.data.findIndex(item => item.name == action.payload.product.name);
      }

      if (findIndex !== -1) {
        return {
          data: [...state.data.reduce((acc, product, index) => {
            if (findIndex == index) {
              acc.push(_objectSpread(_objectSpread({}, product), {}, {
                qty: product.qty + qty,
                sum: (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price) * (product.qty + qty)
              }));
            } else {
              acc.push(product);
            }

            return acc;
          }, [])]
        };
      } else {
        return {
          data: [...state.data, _objectSpread(_objectSpread({}, action.payload.product), {}, {
            qty: qty,
            price: action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price,
            sum: qty * (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price)
          })]
        };
      }

    case actionTypes.removeFromCart:
      return {
        data: [...state.data.filter(item => {
          if (item.id !== action.payload.product.id) return true;
          if (item.name !== action.payload.product.name) return true;
          return false;
        })]
      };

    case actionTypes.updateCart:
      return {
        data: [...action.payload.cartItems]
      };

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

const actions = {
  addToCart: (product, qty = 1) => ({
    type: actionTypes.addToCart,
    payload: {
      product: product,
      qty: qty
    }
  }),
  removeFromCart: product => ({
    type: actionTypes.removeFromCart,
    payload: {
      product: product
    }
  }),
  updateCart: cartItems => ({
    type: actionTypes.updateCart,
    payload: {
      cartItems: cartItems
    }
  })
};
function* cartSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToCart, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Cart");
  });
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.removeFromCart, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product removed from Cart");
  });
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.updateCart, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Cart updated successfully");
  });
}
const persistConfig = {
  keyPrefix: "molla-",
  key: "cart",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, cartReducer));

/***/ }),

/***/ "./store/compare.js":
/*!**************************!*\
  !*** ./store/compare.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "compareSaga": function() { return /* binding */ compareSaga; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);




const actionTypes = {
  addToCompare: 'ADD_TO_COMPARE',
  removeFromCompare: 'REMOVE_FROM_COMPARE',
  clearAllFromCompare: 'CLEAR_ALL_FROM_COMPARE',
  refreshStore: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToCompare:
      var findIndex = state.data.findIndex(item => item.id == action.payload.product.id);

      if (findIndex == -1) {
        return {
          data: [...state.data, action.payload.product]
        };
      }

    case actionTypes.removeFromCompare:
      return {
        data: state.data.filter(item => item.id != action.payload.product.id)
      };

    case actionTypes.clearAllFromCompare:
      return initialState;

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

const actions = {
  addToCompare: product => ({
    type: actionTypes.addToCompare,
    payload: {
      product
    }
  }),
  removeFromCompare: product => ({
    type: actionTypes.removeFromCompare,
    payload: {
      product
    }
  }),
  clearAllFromCompare: () => ({
    type: actionTypes.clearAllFromCompare,
    payload: {}
  }),
  refreshStore: () => ({
    type: actionTypes.refreshStore,
    payload: {}
  })
};
function* compareSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToCompare, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Compare");
  });
}
const persistConfig = {
  keyPrefix: 'molla-',
  key: 'compare',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, compareReducer));

/***/ }),

/***/ "./store/demo.js":
/*!***********************!*\
  !*** ./store/demo.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  showQuick: 'SHOW_QUICKVIEW',
  hideQuick: 'HIDE_QUICKVIEW',
  showVideo: 'SHOW_VIDEO',
  hideVideo: 'HIDE_VIDEO',
  refreshStore: 'REFRESH_STORE'
};
let initialState = {
  current: "1",
  single: null,
  quickShow: false,
  videoShow: false
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.showQuick:
      return _objectSpread(_objectSpread({}, state), {}, {
        single: action.payload.slug,
        quickShow: true
      });

    case actionTypes.hideQuick:
      return _objectSpread(_objectSpread({}, state), {}, {
        quickShow: false,
        single: null
      });

    case actionTypes.showVideo:
      return _objectSpread(_objectSpread({}, state), {}, {
        videoShow: true
      });

    case actionTypes.hideVideo:
      return _objectSpread(_objectSpread({}, state), {}, {
        videoShow: false
      });

    case actionTypes.refreshStore:
      return {
        current: action.payload.current,
        single: null,
        quickShow: false,
        videoShow: false
      };

    default:
      return state;
  }
};

const actions = {
  refreshStore: current => ({
    type: actionTypes.refreshStore,
    payload: {
      current: current
    }
  }),
  showQuickView: slug => ({
    type: actionTypes.showQuick,
    payload: {
      slug: slug
    }
  }),
  hideQuick: () => ({
    type: actionTypes.hideQuick
  }),
  showVideo: () => ({
    type: actionTypes.showVideo
  }),
  hideVideo: () => ({
    type: actionTypes.hideVideo
  })
};
const persistConfig = {
  keyPrefix: "molla-",
  key: "demo",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, demoReducer));

/***/ }),

/***/ "./store/wishlist.js":
/*!***************************!*\
  !*** ./store/wishlist.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "wishlistSaga": function() { return /* binding */ wishlistSaga; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);




const actionTypes = {
  addToWishlist: 'ADD_TO_WISHLIST',
  removeFromWishlist: 'REMOVE_FROM_WISHLIST',
  refreshStore: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToWishlist:
      var findIndex = state.data.findIndex(item => item.id === action.payload.product.id);

      if (findIndex == -1) {
        return {
          data: [...state.data, action.payload.product]
        };
      }

    case actionTypes.removeFromWishlist:
      return {
        data: state.data.filter(item => item.id !== action.payload.product.id)
      };

    case actionTypes.refreshStore:
      return initialState;

    default:
      return state;
  }
};

const actions = {
  addToWishlist: product => ({
    type: actionTypes.addToWishlist,
    payload: {
      product
    }
  }),
  removeFromWishlist: product => ({
    type: actionTypes.removeFromWishlist,
    payload: {
      product
    }
  })
};
function* wishlistSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToWishlist, function* saga(e) {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Wishlist");
  });
}
const persistConfig = {
  keyPrefix: "molla-",
  key: 'wishlist',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, wishlistReducer));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3NlcnZlci9xdWVyaWVzLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvY2FydC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9kZW1vLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9pZ25vcmVkfEU6XFxCQUZDT1xcYmFmY29cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwcm9wcyIsImRlZmF1bHRGdW5jdGlvbiIsImUiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJBUElfVVJJIiwicHJvY2VzcyIsImFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIndpdGhBcG9sbG8iLCJHRVRfUFJPRFVDVFMiLCJncWwiLCJHRVRfUFJPRFVDVCIsIkdFVF9FTEVNRU5UX1BST0RVQ1RTIiwiR0VUX0VMRU1FTlRfUE9TVFMiLCJHRVRfUE9TVFNfQllfUEFHRSIsIkdFVF9QT1NUIiwiR0VUX0hPTUVfREFUQSIsImFjdGlvblR5cGVzIiwiYWRkVG9DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJyZWZyZXNoU3RvcmUiLCJ1cGRhdGVDYXJ0IiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwicGF5bG9hZCIsInByb2R1Y3QiLCJxdHkiLCJ2YXJpYW50cyIsImxlbmd0aCIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJpbmRleCIsInB1c2giLCJzdW0iLCJzYWxlX3ByaWNlIiwicHJpY2UiLCJmaWx0ZXIiLCJjYXJ0SXRlbXMiLCJhY3Rpb25zIiwiY2FydFNhZ2EiLCJ0YWtlRXZlcnkiLCJzYWdhIiwidG9hc3QiLCJwZXJzaXN0Q29uZmlnIiwia2V5UHJlZml4Iiwia2V5Iiwic3RvcmFnZSIsInBlcnNpc3RSZWR1Y2VyIiwiYWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJjbGVhckFsbEZyb21Db21wYXJlIiwiY29tcGFyZVJlZHVjZXIiLCJjb21wYXJlU2FnYSIsInNob3dRdWljayIsImhpZGVRdWljayIsInNob3dWaWRlbyIsImhpZGVWaWRlbyIsImN1cnJlbnQiLCJzaW5nbGUiLCJxdWlja1Nob3ciLCJ2aWRlb1Nob3ciLCJkZW1vUmVkdWNlciIsInNsdWciLCJzaG93UXVpY2tWaWV3IiwiYWRkVG9XaXNobGlzdCIsInJlbW92ZUZyb21XaXNobGlzdCIsIndpc2hsaXN0UmVkdWNlciIsIndpc2hsaXN0U2FnYSIsImNhcnRQcmljZVRvdGFsIiwiY3VyIiwiY2FydFF0eVRvdGFsIiwicGFyc2VJbnQiLCJpc0luQ2FydCIsImZpbmQiLCJjYW5BZGRUb0NhcnQiLCJzdG9jayIsImlzSW5XaXNobGlzdCIsIndpc2hsaXN0IiwiaXNJbkNvbXBhcmUiLCJjb21wYXJlIiwiaXNTYWZhcmlCcm93c2VyIiwic1VzckFnIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImlzRWRnZUJyb3dzZXIiLCJnZXRJbmRleCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiaSIsImNhdEZpbHRlciIsInByb2R1Y3RzIiwiY2F0ZWdvcnkiLCJmbGFnIiwiY2F0IiwiYXR0ckZpbHRlciIsImF0dHIiLCJyYXRpbmdzIiwidW50aWwiLCJzY3JvbGxUb1BhZ2VDb250ZW50IiwidG8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJwb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxCeSIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJwYXJhbGxheCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiY291bnRUbyIsIml0ZW1zIiwiYW1vdW50IiwiZ2V0QXR0cmlidXRlIiwidGltZSIsImludGVydmFsIiwicHQiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRUb1Njcm9sbEhhbmRsZXIiLCJpbm5lckhUTUwiLCJzYWZlQ29udGVudCIsImh0bWwiLCJTQ1JJUFRfUkVHRVgiLCJ0ZXN0IiwicmVwbGFjZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsT0FBNEQ7QUFBQSxNQUEzQztBQUFFQyxZQUFGO0FBQVlDLGFBQVo7QUFBdUJDO0FBQXZCLEdBQTJDO0FBQUEsTUFBVkMsS0FBVTs7QUFDdkUsV0FBU0MsZUFBVCxDQUEyQkMsQ0FBM0IsRUFBK0I7QUFDM0IsUUFBS0YsS0FBSyxDQUFDRyxJQUFOLElBQWMsR0FBbkIsRUFBeUI7QUFDckJELE9BQUMsQ0FBQ0UsY0FBRjtBQUNIO0FBQ0o7O0FBRUQsU0FDSSxNQUFDLGtEQUFELGVBQVdKLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNJO0FBQUcsYUFBUyxFQUFHRixTQUFmO0FBQTJCLFNBQUssRUFBR0MsS0FBbkM7QUFBMkMsV0FBTyxFQUFHRSxlQUFyRDtB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OztBQUNPLFNBQVNzQyxXQUFULENBQXVCQyxJQUF2QixFQUE4QjtBQUNqQyxRQUFNQyxZQUFZLEdBQUcscURBQXJCLENBRGlDLENBR2pDOztBQUNBLFNBQVFBLFlBQVksQ0FBQ0MsSUFBYixDQUFtQkYsSUFBbkIsQ0FBUixFQUFvQztBQUNoQ0EsUUFBSSxHQUFHQSxJQUFJLENBQUNHLE9BQUwsQ0FBY0YsWUFBZCxFQUE0QixFQUE1QixDQUFQO0FBQ0gsR0FOZ0MsQ0FRakM7OztBQUNBRCxNQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFjLGlCQUFkLEVBQWlDLEVBQWpDLENBQVA7QUFFQSxTQUFPO0FBQ0hDLFVBQU0sRUFBRUo7QUFETCxHQUFQO0FBR0gsQzs7Ozs7Ozs7OztBQy9QRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfYWxpbmtfanN4LXNlcnZlcl9hcG9sbG9fanMtc2VydmVyX3F1ZXJpZXNfanMtc3RvcmVfY2FydF9qcy1zdG9yZV9jb21wYXJlXy05Yjc0NzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayAoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGlmICggcHJvcHMuaHJlZiA9PSAnIycgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHN0eWxlPXsgc3R5bGUgfSBvbkNsaWNrPXsgZGVmYXVsdEZ1bmN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsIi8vIGltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICduZXh0LWFwb2xsbyc7XHJcbi8vIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcblxyXG4vLyBjb25zdCBBUElfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTH0vZ3JhcGhxbGA7XHJcblxyXG4vLyBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KCB7XHJcbi8vICAgICB1cmk6IEFQSV9VUkksXHJcbi8vICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4vLyB9ICk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCBhcG9sbG9DbGllbnQgKTtcclxuXHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICduZXh0LWFwb2xsbyc7XHJcbi8vIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcbmNvbnN0IEFQSV9VUkkgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMfS9ncmFwaHFsYDtcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoIHtcclxuLy8gICAgIHVyaTogQVBJX1VSSSxcclxuLy8gICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbi8vIH0gKTtcclxuXHJcbmNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoIHtcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICAgICAgdXJpOiBBUElfVVJJLFxyXG4gICAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggYXBvbGxvQ2xpZW50ICk7XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHByb2R1Y3RzKCRzZWFyY2hUZXJtOiBTdHJpbmcsICRjb2xvcjogW1N0cmluZ10sICRzaXplOiBbU3RyaW5nXSwgJGJyYW5kOiBbU3RyaW5nXSwgJG1pblByaWNlOiBJbnQsICRtYXhQcmljZTogSW50LCAkY2F0ZWdvcnk6IFN0cmluZywgJHJhdGluZzogW1N0cmluZ10sICRzb3J0Qnk6IFN0cmluZywgJHBhZ2U6IEludCA9IDEsICRwZXJQYWdlOiBJbnQsICRsaXN0OiBCb29sZWFuID0gZmFsc2UsICRmcm9tOiBJbnQgPSAwKSB7XHJcbiAgICAgICAgcHJvZHVjdHMoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSwgc2VhcmNoVGVybTogJHNlYXJjaFRlcm0sIGNvbG9yOiAkY29sb3IsIHNpemU6ICRzaXplLCBicmFuZDogJGJyYW5kLCBtaW5QcmljZTogJG1pblByaWNlLCBtYXhQcmljZTogJG1heFByaWNlLCBjYXRlZ29yeTogJGNhdGVnb3J5LCByYXRpbmc6ICRyYXRpbmcsIHNvcnRCeTogJHNvcnRCeSwgcGFnZTogJHBhZ2UsIHBlclBhZ2U6ICRwZXJQYWdlLCBsaXN0OiAkbGlzdCwgZnJvbTogJGZyb20pIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIHNob3J0X2Rlc2MgQGluY2x1ZGUoaWY6ICRsaXN0KVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHByb2R1Y3QoJHNsdWc6IFN0cmluZyEsICRvbmx5RGF0YTogQm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcHJvZHVjdChkZW1vOiAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99LCBzbHVnOiAkc2x1Zywgb25seURhdGE6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICBzaW5nbGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyYW5kcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJldiBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV4dCBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVsYXRlZCBAc2tpcChpZjogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9FTEVNRU5UX1BST0RVQ1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgZWxlbWVudFByb2R1Y3RzIHtcclxuICAgICAgICBlbGVtZW50UHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0VMRU1FTlRfUE9TVFMgPSBncWxgXHJcbiAgICBxdWVyeSBlbGVtZW50UG9zdHMge1xyXG4gICAgICAgIGVsZW1lbnRQb3N0cyB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFNfQllfUEFHRSA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3RzQnlQYWdlICgkcGFnZTogU3RyaW5nISwgJGNhdGVnb3J5OiBTdHJpbmcpIHtcclxuICAgICAgICBwb3N0c0J5UGFnZShwYWdlOiAkcGFnZSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdCgkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgICAgIHBvc3Qoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgICAgICAgc2luZ2xlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXYge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbGF0ZWQge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfREFUQSA9IGdxbGBcclxuICAgIHF1ZXJ5IGhvbWVEYXRhIHtcclxuICAgICAgICBob21lRGF0YShkZW1vOiAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3N0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gIiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIGFkZFRvQ2FydDogXCJBRERfVE9fQ0FSVFwiLFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6IFwiUkVNT1ZFX0ZST01fQ0FSVFwiLFxyXG4gICAgcmVmcmVzaFN0b3JlOiBcIlJFRlJFU0hfU1RPUkVcIixcclxuICAgIHVwZGF0ZUNhcnQ6IFwiVVBEQVRFX0NBUlRcIixcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb0NhcnQ6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgbGV0IHF0eSA9IGFjdGlvbi5wYXlsb2FkLnF0eSA/IGFjdGlvbi5wYXlsb2FkLnF0eSA6IDE7XHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ICE9PSAtMSAmJiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLm5hbWUgPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ICE9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLnJlZHVjZSggKCBhY2MsIHByb2R1Y3QsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gaW5kZXggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBwcm9kdWN0LnF0eSArIHF0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtOiAoIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA/IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QucHJpY2UgKSAqICggcHJvZHVjdC5xdHkgKyBxdHkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goIHByb2R1Y3QgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSApXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHF0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtOiBxdHkgKiAoIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA/IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QucHJpY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YS5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpdGVtLm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy51cGRhdGVDYXJ0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmNhcnRJdGVtc1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9DYXJ0OiAoIHByb2R1Y3QsIHF0eSA9IDEgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5hZGRUb0NhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0LFxyXG4gICAgICAgICAgICBxdHk6IHF0eVxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICByZW1vdmVGcm9tQ2FydDogKCBwcm9kdWN0ICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHVwZGF0ZUNhcnQ6ICggY2FydEl0ZW1zICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMudXBkYXRlQ2FydCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNhcnRJdGVtczogY2FydEl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2FydFNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb0NhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gQ2FydFwiICk7XHJcbiAgICB9ICk7XHJcblxyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCByZW1vdmVkIGZyb20gQ2FydFwiICk7XHJcbiAgICB9ICk7XHJcblxyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy51cGRhdGVDYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJDYXJ0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIgKTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogXCJjYXJ0XCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBjYXJ0UmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIGFkZFRvQ29tcGFyZTogJ0FERF9UT19DT01QQVJFJyxcclxuICAgIHJlbW92ZUZyb21Db21wYXJlOiAnUkVNT1ZFX0ZST01fQ09NUEFSRScsXHJcbiAgICBjbGVhckFsbEZyb21Db21wYXJlOiAnQ0xFQVJfQUxMX0ZST01fQ09NUEFSRScsXHJcbiAgICByZWZyZXNoU3RvcmU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuY29uc3QgY29tcGFyZVJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZTpcclxuICAgICAgICAgICAgdmFyIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaWQgPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21Db21wYXJlOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YS5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5pZCAhPSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkIClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5jbGVhckFsbEZyb21Db21wYXJlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb0NvbXBhcmU6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9Db21wYXJlLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICByZW1vdmVGcm9tQ29tcGFyZTogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgY2xlYXJBbGxGcm9tQ29tcGFyZTogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuY2xlYXJBbGxGcm9tQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlZnJlc2hTdG9yZTogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlLFxyXG4gICAgICAgIHBheWxvYWQ6IHt9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjb21wYXJlU2FnYSAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZSwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCBhZGRlZCB0byBDb21wYXJlXCIgKTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogJ21vbGxhLScsXHJcbiAgICBrZXk6ICdjb21wYXJlJyxcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGNvbXBhcmVSZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIHNob3dRdWljazogJ1NIT1dfUVVJQ0tWSUVXJyxcclxuICAgIGhpZGVRdWljazogJ0hJREVfUVVJQ0tWSUVXJyxcclxuICAgIHNob3dWaWRlbzogJ1NIT1dfVklERU8nLFxyXG4gICAgaGlkZVZpZGVvOiAnSElERV9WSURFTycsXHJcbiAgICByZWZyZXNoU3RvcmU6ICdSRUZSRVNIX1NUT1JFJ1xyXG59O1xyXG5cclxubGV0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGN1cnJlbnQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU8sXHJcbiAgICBzaW5nbGU6IG51bGwsXHJcbiAgICBxdWlja1Nob3c6IGZhbHNlLFxyXG4gICAgdmlkZW9TaG93OiBmYWxzZSxcclxufTtcclxuY29uc3QgZGVtb1JlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnNob3dRdWljazpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBhY3Rpb24ucGF5bG9hZC5zbHVnLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuaGlkZVF1aWNrOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBxdWlja1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5zaG93VmlkZW86XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWRlb1Nob3c6IHRydWUgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmhpZGVWaWRlbzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpZGVvU2hvdzogZmFsc2UgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGFjdGlvbi5wYXlsb2FkLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBxdWlja1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9TaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIHJlZnJlc2hTdG9yZTogKCBjdXJyZW50ICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICBzaG93UXVpY2tWaWV3OiBzbHVnID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnNob3dRdWljayxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHNsdWc6IHNsdWdcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgaGlkZVF1aWNrOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5oaWRlUXVpY2ssXHJcbiAgICB9ICksXHJcblxyXG4gICAgc2hvd1ZpZGVvOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5zaG93VmlkZW8sXHJcbiAgICB9ICksXHJcblxyXG4gICAgaGlkZVZpZGVvOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5oaWRlVmlkZW9cclxuICAgIH0gKVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiBcImRlbW9cIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGRlbW9SZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgYWRkVG9XaXNobGlzdDogJ0FERF9UT19XSVNITElTVCcsXHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3Q6ICdSRU1PVkVfRlJPTV9XSVNITElTVCcsXHJcbiAgICByZWZyZXNoU3RvcmU6ICdSRUZSRVNIX1NUT1JFJyxcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW10sXHJcbn1cclxuXHJcbmNvbnN0IHdpc2hsaXN0UmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdDpcclxuICAgICAgICAgICAgdmFyIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tV2lzaGxpc3Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhLmZpbHRlciggaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkIClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb1dpc2hsaXN0OiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvV2lzaGxpc3QsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlbW92ZUZyb21XaXNobGlzdDogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tV2lzaGxpc3QsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2lzaGxpc3RTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCBhZGRlZCB0byBXaXNobGlzdFwiICk7XHJcbiAgICB9IClcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogJ3dpc2hsaXN0JyxcclxuICAgIHN0b3JhZ2UsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCB3aXNobGlzdFJlZHVjZXIgKTsiLCIvKipcclxuICogZ2V0IHRvdGFsIFByaWNlIG9mIHByb2R1Y3RzIGluIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgRmxvYXQgfSB0b3RhbFByaWNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FydFByaWNlVG90YWwgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjYyArIGN1ci5zdW1cclxuICAgIH0sIDAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBudW1iZXIgb2YgcHJvZHVjdHMgaW4gY2FydFxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHJldHVybiB7IEludGVnZXIgfSBudW1iZXJzIG9mIGNhcnQgaXRlbXMgaW4gY2FydGxpc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UXR5VG90YWwgPSBjYXJ0SXRlbXMgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoICggYWNjLCBjdXIgKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KCBjdXIucXR5LCAxMCApO1xyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogRGVjaWRlIHdoZXJlIHByb2R1Y3QgaXMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEBwYXJhbSB7IE9iamVjdCB9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbkNhcnQgPSAoIGNhcnRJdGVtcywgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMuZmluZCggaXRlbSA9PiBpdGVtLmlkID09IHByb2R1Y3QuaWQgKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpcm0gaWYgcHJvZHVjdCBjb3VsZCBiZSBhZGRlZCB0byBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICogQHBhcmFtIHsgTnVtYmVyIH0gcXR5IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhbkFkZFRvQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0LCBxdHkgKSA9PiB7XHJcbiAgICBsZXQgZmluZCA9IGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApO1xyXG4gICAgaWYgKCBmaW5kICkge1xyXG4gICAgICAgIGlmICggcHJvZHVjdC5zdG9jayA9PSAwIHx8ICggcHJvZHVjdC5zdG9jayA8ICggZmluZC5xdHkgKyBxdHkgKSApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICggcHJvZHVjdC5zdG9jayA9PSAwIHx8ICggcHJvZHVjdC5zdG9jayA8IHF0eSApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtBcnJheX0gd2lzaGxpc3QgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5XaXNobGlzdCA9ICggd2lzaGxpc3QsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdCAmJiB3aXNobGlzdC5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5zbHVnID09IHByb2R1Y3Quc2x1ZyApID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtBcnJheX0gY29tcGFyZSBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbkNvbXBhcmUgPSAoIGNvbXBhcmUsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdCAmJiBjb21wYXJlLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3Qgc2FmYXJpIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoICdTYWZhcmknICkgIT09IC0xICYmIHNVc3JBZy5pbmRleE9mKCAnQ2hyb21lJyApID09PSAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGV0ZWN0IEVkZ2UgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRWRnZUJyb3dzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc1VzckFnID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGlmICggc1VzckFnLmluZGV4T2YoIFwiRWRnZVwiICkgPiAtMSApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXQgaW5kZXggb2YgdGhlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEluZGV4ID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKCBlbGVtZW50ID09IGNoaWxkcmVuWyBpIF0gKSByZXR1cm4gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBjYXRlZ29yeS5cclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGNhdGVnb3J5IFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWcgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2F0RmlsdGVyID0gZnVuY3Rpb24gKCBwcm9kdWN0cyA9IFtdLCBjYXRlZ29yeSwgZmxhZyA9IGZhbHNlICkge1xyXG4gICAgaWYgKCBjYXRlZ29yeVsgMCBdID09PSAnQWxsJyApIHJldHVybiBwcm9kdWN0cztcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgaWYgKCBpdGVtLmNhdGVnb3J5LmZpbmQoIGNhdCA9PiBjYXQuc2x1ZyA9PSBjYXRlZ29yeVsgaSBdICkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICFmbGFnICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGZsYWcgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZmxhZyApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmaWx0ZXIgcHJvZHVjdHMgYnkgYXR0cmlidXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb2R1Y3RzIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0ciBcclxuICovXHJcbmV4cG9ydCBjb25zdCBhdHRyRmlsdGVyID0gZnVuY3Rpb24gKCBwcm9kdWN0cyA9IFtdLCBhdHRyICkge1xyXG4gICAgLy8gaWYocHJvZHVjdHMpXHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdhbGwnICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3NhbGUnICYmIGl0ZW0uc2FsZV9wcmljZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdyYXRlZCcgJiYgaXRlbS5yYXRpbmdzID4gMyApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICd1bnRpbCcgJiYgaXRlbS51bnRpbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbVsgYXR0ciBdID09PSB0cnVlO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG4vKipcclxuICogU2Nyb2xsaW5nIHRvIFBhZ2UgY29udGVudCBzZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9QYWdlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS1jb250ZW50JyApXHJcbiAgICAgICAgLm9mZnNldFRvcCAtIDc0O1xyXG4gICAgaWYgKCBpc1NhZmFyaUJyb3dzZXIoKSB8fCBpc0VkZ2VCcm93c2VyKCkgKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggcG9zIDw9IHRvICkgY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSggMCwgLTEyMCApO1xyXG4gICAgICAgICAgICAgICAgcG9zIC09IDEyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKCB7XHJcbiAgICAgICAgICAgIHRvcDogdG8sXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIG1ha2UgYmFja2dyb3VuZCBwYXJhbGxheFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcmFsbGF4ID0gKCkgPT4ge1xyXG4gICAgbGV0IHBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5iZy1wYXJhbGxheCcgKTtcclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJhbGxheC5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBsZXQgeSA9IDA7XHJcbiAgICAgICAgaWYgKCBwYXJhbGxheFsgaSBdLmNsYXNzTGlzdC5jb250YWlucyggJ2hlYWRlci1wYXJhbGxheCcgKSApIHtcclxuICAgICAgICAgICAgeSA9ICggMTAgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDQ3IC8gOTAwICsgNTA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeSA9ICggcGFyYWxsYXhbIGkgXS5vZmZzZXRUb3AgLSB3aW5kb3cucGFnZVlPZmZzZXQgKSAqIDQ3IC8gcGFyYWxsYXhbIGkgXS5vZmZzZXRUb3AgKyA1MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmFsbGF4WyBpIF0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IHkgKyAnJSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBzZXQgY291bnQgdG8gaW4gYWJvdXQtMlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvdW50VG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNvdW50JyApO1xyXG5cclxuICAgIGlmICggaXRlbXMgKSB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zWyBpIF07XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXRvJyApLCAxMCApIC0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1mcm9tJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3BlZWQnICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtcmVmcmVzaC1pbnRlcnZhbCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IHB0ID0gMDtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IDA7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcInNjcm9sbFwiLCBjb3VudFRvU2Nyb2xsSGFuZGxlciwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRUb1Njcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwdCA8PSB0aW1lICYmIGhlaWdodCA+PSB3aW5kb3cucGFnZVlPZmZzZXQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAwID09PSBmbGFnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHB0ID49IHRpbWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gcGFyc2VJbnQoICggcHQgKiBhbW91bnQgKSAvIHRpbWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB0ID0gcHQgKyBpbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgWHNzIEF0dGFja1xyXG4gKiBAcGFyYW0ge05vZGV9IGh0bWwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2FmZUNvbnRlbnQgKCBodG1sICkge1xyXG4gICAgY29uc3QgU0NSSVBUX1JFR0VYID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XHJcblxyXG4gICAgLy8gUmVtb3ZpbmcgdGhlIDxzY3JpcHQ+IHRhZ3NcclxuICAgIHdoaWxlICggU0NSSVBUX1JFR0VYLnRlc3QoIGh0bWwgKSApIHtcclxuICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKCBTQ1JJUFRfUkVHRVgsIFwiXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmluZyBhbGwgZXZlbnRzIGZyb20gdGFncy4uLlxyXG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSggLyBvblxcdys9XCJbXlwiXSpcIi9nLCBcIlwiICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBfX2h0bWw6IGh0bWxcclxuICAgIH1cclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=