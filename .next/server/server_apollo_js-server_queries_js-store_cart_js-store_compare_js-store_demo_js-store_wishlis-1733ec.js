exports.id = "server_apollo_js-server_queries_js-store_cart_js-store_compare_js-store_demo_js-store_wishlis-1733ec";
exports.ids = ["server_apollo_js-server_queries_js-store_cart_js-store_compare_js-store_demo_js-store_wishlis-1733ec"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3NlcnZlci9hcG9sbG8uanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zZXJ2ZXIvcXVlcmllcy5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2NhcnQuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9jb21wYXJlLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvZGVtby5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL3dpc2hsaXN0LmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiQVBJX1VSSSIsInByb2Nlc3MiLCJhcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ3aXRoQXBvbGxvIiwiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiR0VUX1BST0RVQ1QiLCJHRVRfRUxFTUVOVF9QUk9EVUNUUyIsIkdFVF9FTEVNRU5UX1BPU1RTIiwiR0VUX1BPU1RTX0JZX1BBR0UiLCJHRVRfUE9TVCIsIkdFVF9IT01FX0RBVEEiLCJhY3Rpb25UeXBlcyIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21DYXJ0IiwicmVmcmVzaFN0b3JlIiwidXBkYXRlQ2FydCIsImluaXRpYWxTdGF0ZSIsImRhdGEiLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsInBheWxvYWQiLCJwcm9kdWN0IiwicXR5IiwidmFyaWFudHMiLCJsZW5ndGgiLCJuYW1lIiwicmVkdWNlIiwiYWNjIiwiaW5kZXgiLCJwdXNoIiwic3VtIiwic2FsZV9wcmljZSIsInByaWNlIiwiZmlsdGVyIiwiY2FydEl0ZW1zIiwiYWN0aW9ucyIsImNhcnRTYWdhIiwidGFrZUV2ZXJ5Iiwic2FnYSIsImUiLCJ0b2FzdCIsInBlcnNpc3RDb25maWciLCJrZXlQcmVmaXgiLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdFJlZHVjZXIiLCJhZGRUb0NvbXBhcmUiLCJyZW1vdmVGcm9tQ29tcGFyZSIsImNsZWFyQWxsRnJvbUNvbXBhcmUiLCJjb21wYXJlUmVkdWNlciIsImNvbXBhcmVTYWdhIiwic2hvd1F1aWNrIiwiaGlkZVF1aWNrIiwic2hvd1ZpZGVvIiwiaGlkZVZpZGVvIiwiY3VycmVudCIsInNpbmdsZSIsInF1aWNrU2hvdyIsInZpZGVvU2hvdyIsImRlbW9SZWR1Y2VyIiwic2x1ZyIsInNob3dRdWlja1ZpZXciLCJhZGRUb1dpc2hsaXN0IiwicmVtb3ZlRnJvbVdpc2hsaXN0Iiwid2lzaGxpc3RSZWR1Y2VyIiwid2lzaGxpc3RTYWdhIiwiY2FydFByaWNlVG90YWwiLCJjdXIiLCJjYXJ0UXR5VG90YWwiLCJwYXJzZUludCIsImlzSW5DYXJ0IiwiZmluZCIsImNhbkFkZFRvQ2FydCIsInN0b2NrIiwiaXNJbldpc2hsaXN0Iiwid2lzaGxpc3QiLCJpc0luQ29tcGFyZSIsImNvbXBhcmUiLCJpc1NhZmFyaUJyb3dzZXIiLCJzVXNyQWciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNFZGdlQnJvd3NlciIsImdldEluZGV4IiwiZWxlbWVudCIsImNoaWxkcmVuIiwicGFyZW50RWxlbWVudCIsImkiLCJjYXRGaWx0ZXIiLCJwcm9kdWN0cyIsImNhdGVnb3J5IiwiZmxhZyIsImNhdCIsImF0dHJGaWx0ZXIiLCJhdHRyIiwicmF0aW5ncyIsInVudGlsIiwic2Nyb2xsVG9QYWdlQ29udGVudCIsInRvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwicG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ0aW1lcklkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2Nyb2xsQnkiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicGFyYWxsYXgiLCJxdWVyeVNlbGVjdG9yQWxsIiwieSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiY291bnRUbyIsIml0ZW1zIiwiYW1vdW50IiwiZ2V0QXR0cmlidXRlIiwidGltZSIsImludGVydmFsIiwicHQiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRUb1Njcm9sbEhhbmRsZXIiLCJpbm5lckhUTUwiLCJzYWZlQ29udGVudCIsImh0bWwiLCJTQ1JJUFRfUkVHRVgiLCJ0ZXN0IiwicmVwbGFjZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBSSxHQUFFQyx1QkFBbUMsVUFBdEQsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyx3REFBSixDQUFrQjtBQUNuQ0MsTUFBSSxFQUFFLElBQUlDLG9EQUFKLENBQWE7QUFDZkMsT0FBRyxFQUFFTjtBQURVLEdBQWIsQ0FENkI7QUFJbkNPLE9BQUssRUFBRSxJQUFJQyx5REFBSjtBQUo0QixDQUFsQixDQUFyQjtBQU9BLCtEQUFlQyx1REFBVSxDQUFFUCxZQUFGLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBRU8sTUFBTVEsWUFBWSxHQUFHQyxvREFBSTtBQUNoQztBQUNBLHlCQUF5QlYsR0FBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdENPO0FBd0NBLE1BQU1XLFdBQVcsR0FBR0Qsb0RBQUk7QUFDL0I7QUFDQSx3QkFB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QUFRLENBQUl5RCxFQUFFLEdBQUdKLE1BQVAsR0FBa0JFLElBQXBCLENBQXpCO0FBQ0FFLGdCQUFFLEdBQUdBLEVBQUUsR0FBR0QsUUFBVjtBQUNILGFBUHdCLEVBT3RCQSxRQVBzQixDQUF6QjtBQVFIOztBQUVEakMsY0FBSSxHQUFHLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKLENBbENNO0FBcUNQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN1QyxXQUFULENBQXVCQyxJQUF2QixFQUE4QjtBQUNqQyxRQUFNQyxZQUFZLEdBQUcscURBQXJCLENBRGlDLENBR2pDOztBQUNBLFNBQVFBLFlBQVksQ0FBQ0MsSUFBYixDQUFtQkYsSUFBbkIsQ0FBUixFQUFvQztBQUNoQ0EsUUFBSSxHQUFHQSxJQUFJLENBQUNHLE9BQUwsQ0FBY0YsWUFBZCxFQUE0QixFQUE1QixDQUFQO0FBQ0gsR0FOZ0MsQ0FRakM7OztBQUNBRCxNQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFjLGlCQUFkLEVBQWlDLEVBQWpDLENBQVA7QUFFQSxTQUFPO0FBQ0hDLFVBQU0sRUFBRUo7QUFETCxHQUFQO0FBR0gsQyIsImZpbGUiOiJzZXJ2ZXJfYXBvbGxvX2pzLXNlcnZlcl9xdWVyaWVzX2pzLXN0b3JlX2NhcnRfanMtc3RvcmVfY29tcGFyZV9qcy1zdG9yZV9kZW1vX2pzLXN0b3JlX3dpc2hsaXMtMTczM2VjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJ25leHQtYXBvbGxvJztcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuXHJcbi8vIGNvbnN0IEFQSV9VUkkgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMfS9ncmFwaHFsYDtcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoIHtcclxuLy8gICAgIHVyaTogQVBJX1VSSSxcclxuLy8gICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbi8vIH0gKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oIGFwb2xsb0NsaWVudCApO1xyXG5cclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJ25leHQtYXBvbGxvJztcclxuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuY29uc3QgQVBJX1VSSSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9L2dyYXBocWxgO1xyXG5cclxuLy8gY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCgge1xyXG4vLyAgICAgdXJpOiBBUElfVVJJLFxyXG4vLyAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxuLy8gfSApO1xyXG5cclxuY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCgge1xyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgICAgICB1cmk6IEFQSV9VUkksXHJcbiAgICB9KSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKCBhcG9sbG9DbGllbnQgKTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgcHJvZHVjdHMoJHNlYXJjaFRlcm06IFN0cmluZywgJGNvbG9yOiBbU3RyaW5nXSwgJHNpemU6IFtTdHJpbmddLCAkYnJhbmQ6IFtTdHJpbmddLCAkbWluUHJpY2U6IEludCwgJG1heFByaWNlOiBJbnQsICRjYXRlZ29yeTogU3RyaW5nLCAkcmF0aW5nOiBbU3RyaW5nXSwgJHNvcnRCeTogU3RyaW5nLCAkcGFnZTogSW50ID0gMSwgJHBlclBhZ2U6IEludCwgJGxpc3Q6IEJvb2xlYW4gPSBmYWxzZSwgJGZyb206IEludCA9IDApIHtcclxuICAgICAgICBwcm9kdWN0cyhkZW1vOiAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU99LCBzZWFyY2hUZXJtOiAkc2VhcmNoVGVybSwgY29sb3I6ICRjb2xvciwgc2l6ZTogJHNpemUsIGJyYW5kOiAkYnJhbmQsIG1pblByaWNlOiAkbWluUHJpY2UsIG1heFByaWNlOiAkbWF4UHJpY2UsIGNhdGVnb3J5OiAkY2F0ZWdvcnksIHJhdGluZzogJHJhdGluZywgc29ydEJ5OiAkc29ydEJ5LCBwYWdlOiAkcGFnZSwgcGVyUGFnZTogJHBlclBhZ2UsIGxpc3Q6ICRsaXN0LCBmcm9tOiAkZnJvbSkge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzYyBAaW5jbHVkZShpZjogJGxpc3QpXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxDb3VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUID0gZ3FsYFxyXG4gICAgcXVlcnkgcHJvZHVjdCgkc2x1ZzogU3RyaW5nISwgJG9ubHlEYXRhOiBCb29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBwcm9kdWN0KGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30sIHNsdWc6ICRzbHVnLCBvbmx5RGF0YTogJG9ubHlEYXRhKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIHNob3J0X2Rlc2NcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJhbmRzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2IEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0IEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWxhdGVkIEBza2lwKGlmOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0VMRU1FTlRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBlbGVtZW50UHJvZHVjdHMge1xyXG4gICAgICAgIGVsZW1lbnRQcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRUxFTUVOVF9QT1NUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IGVsZW1lbnRQb3N0cyB7XHJcbiAgICAgICAgZWxlbWVudFBvc3RzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19CWV9QQUdFID0gZ3FsYFxyXG4gICAgcXVlcnkgcG9zdHNCeVBhZ2UgKCRwYWdlOiBTdHJpbmchLCAkY2F0ZWdvcnk6IFN0cmluZykge1xyXG4gICAgICAgIHBvc3RzQnlQYWdlKHBhZ2U6ICRwYWdlLCBjYXRlZ29yeTogJGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1QgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0KCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICAgICAgcG9zdChzbHVnOiAkc2x1Zykge1xyXG4gICAgICAgICAgICBzaW5nbGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJldiB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVsYXRlZCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9EQVRBID0gZ3FsYFxyXG4gICAgcXVlcnkgaG9tZURhdGEge1xyXG4gICAgICAgIGhvbWVEYXRhKGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30pIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmAiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyB0YWtlRXZlcnkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgYWRkVG9DYXJ0OiBcIkFERF9UT19DQVJUXCIsXHJcbiAgICByZW1vdmVGcm9tQ2FydDogXCJSRU1PVkVfRlJPTV9DQVJUXCIsXHJcbiAgICByZWZyZXNoU3RvcmU6IFwiUkVGUkVTSF9TVE9SRVwiLFxyXG4gICAgdXBkYXRlQ2FydDogXCJVUERBVEVfQ0FSVFwiLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmFkZFRvQ2FydDpcclxuICAgICAgICAgICAgdmFyIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaWQgPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBsZXQgcXR5ID0gYWN0aW9uLnBheWxvYWQucXR5ID8gYWN0aW9uLnBheWxvYWQucXR5IDogMTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggIT09IC0xICYmIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QudmFyaWFudHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgIGZpbmRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0ubmFtZSA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggIT09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEucmVkdWNlKCAoIGFjYywgcHJvZHVjdCwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSBpbmRleCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHByb2R1Y3QucXR5ICsgcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW06ICggYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSApICogKCBwcm9kdWN0LnF0eSArIHF0eSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCggcHJvZHVjdCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdIClcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA/IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3Quc2FsZV9wcmljZSA6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW06IHF0eSAqICggYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ2FydDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLmZpbHRlciggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGl0ZW0ubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5uYW1lICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuY2FydEl0ZW1zXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6ICggcHJvZHVjdCwgcXR5ID0gMSApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvQ2FydCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QsXHJcbiAgICAgICAgICAgIHF0eTogcXR5XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlbW92ZUZyb21DYXJ0OiAoIHByb2R1Y3QgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ2FydCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgdXBkYXRlQ2FydDogKCBjYXJ0SXRlbXMgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy51cGRhdGVDYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2FydEl0ZW1zOiBjYXJ0SXRlbXNcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjYXJ0U2FnYSAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLmFkZFRvQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiUHJvZHVjdCBhZGRlZCB0byBDYXJ0XCIgKTtcclxuICAgIH0gKTtcclxuXHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBDYXJ0XCIgKTtcclxuICAgIH0gKTtcclxuXHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIkNhcnQgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiApO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiBcImNhcnRcIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGNhcnRSZWR1Y2VyICk7IiwiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgYWRkVG9Db21wYXJlOiAnQUREX1RPX0NPTVBBUkUnLFxyXG4gICAgcmVtb3ZlRnJvbUNvbXBhcmU6ICdSRU1PVkVfRlJPTV9DT01QQVJFJyxcclxuICAgIGNsZWFyQWxsRnJvbUNvbXBhcmU6ICdDTEVBUl9BTExfRlJPTV9DT01QQVJFJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5jb25zdCBjb21wYXJlUmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9Db21wYXJlOlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNvbXBhcmU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhLmZpbHRlciggaXRlbSA9PiBpdGVtLmlkICE9IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmNsZWFyQWxsRnJvbUNvbXBhcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvQ29tcGFyZTogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHJlbW92ZUZyb21Db21wYXJlOiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21Db21wYXJlLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICBjbGVhckFsbEZyb21Db21wYXJlOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5jbGVhckFsbEZyb21Db21wYXJlLFxyXG4gICAgICAgIHBheWxvYWQ6IHt9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVmcmVzaFN0b3JlOiAoKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge31cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNvbXBhcmVTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9Db21wYXJlLCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIENvbXBhcmVcIiApO1xyXG4gICAgfSApO1xyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiAnbW9sbGEtJyxcclxuICAgIGtleTogJ2NvbXBhcmUnLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgY29tcGFyZVJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgc2hvd1F1aWNrOiAnU0hPV19RVUlDS1ZJRVcnLFxyXG4gICAgaGlkZVF1aWNrOiAnSElERV9RVUlDS1ZJRVcnLFxyXG4gICAgc2hvd1ZpZGVvOiAnU0hPV19WSURFTycsXHJcbiAgICBoaWRlVmlkZW86ICdISURFX1ZJREVPJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnXHJcbn07XHJcblxyXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY3VycmVudDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNTyxcclxuICAgIHNpbmdsZTogbnVsbCxcclxuICAgIHF1aWNrU2hvdzogZmFsc2UsXHJcbiAgICB2aWRlb1Nob3c6IGZhbHNlLFxyXG59O1xyXG5jb25zdCBkZW1vUmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuc2hvd1F1aWNrOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGU6IGFjdGlvbi5wYXlsb2FkLnNsdWcsXHJcbiAgICAgICAgICAgICAgICBxdWlja1Nob3c6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5oaWRlUXVpY2s6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaW5nbGU6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnNob3dWaWRlbzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpZGVvU2hvdzogdHJ1ZSB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuaGlkZVZpZGVvOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlkZW9TaG93OiBmYWxzZSB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDogYWN0aW9uLnBheWxvYWQuY3VycmVudCxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2aWRlb1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgcmVmcmVzaFN0b3JlOiAoIGN1cnJlbnQgKSA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIHNob3dRdWlja1ZpZXc6IHNsdWcgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuc2hvd1F1aWNrLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgc2x1Zzogc2x1Z1xyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICBoaWRlUXVpY2s6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmhpZGVRdWljayxcclxuICAgIH0gKSxcclxuXHJcbiAgICBzaG93VmlkZW86ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnNob3dWaWRlbyxcclxuICAgIH0gKSxcclxuXHJcbiAgICBoaWRlVmlkZW86ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmhpZGVWaWRlb1xyXG4gICAgfSApXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6IFwiZGVtb1wiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgZGVtb1JlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb1dpc2hsaXN0OiAnQUREX1RPX1dJU0hMSVNUJyxcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdDogJ1JFTU9WRV9GUk9NX1dJU0hMSVNUJyxcclxuICAgIHJlZnJlc2hTdG9yZTogJ1JFRlJFU0hfU1RPUkUnLFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxufVxyXG5cclxuY29uc3Qgd2lzaGxpc3RSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0OlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCA9PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21XaXNobGlzdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9XaXNobGlzdCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0OiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21XaXNobGlzdCxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3aXNobGlzdFNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIFdpc2hsaXN0XCIgKTtcclxuICAgIH0gKVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcIm1vbGxhLVwiLFxyXG4gICAga2V5OiAnd2lzaGxpc3QnLFxyXG4gICAgc3RvcmFnZSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIHdpc2hsaXN0UmVkdWNlciApOyIsIi8qKlxyXG4gKiBnZXQgdG90YWwgUHJpY2Ugb2YgcHJvZHVjdHMgaW4gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEByZXR1cm4geyBGbG9hdCB9IHRvdGFsUHJpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXJ0UHJpY2VUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgY3VyLnN1bVxyXG4gICAgfSwgMCApO1xyXG59XHJcblxyXG4vKipcclxuICogZ2V0IG51bWJlciBvZiBwcm9kdWN0cyBpbiBjYXJ0XHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcmV0dXJuIHsgSW50ZWdlciB9IG51bWJlcnMgb2YgY2FydCBpdGVtcyBpbiBjYXJ0bGlzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhcnRRdHlUb3RhbCA9IGNhcnRJdGVtcyA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLnJlZHVjZSggKCBhY2MsIGN1ciApID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQoIGN1ci5xdHksIDEwICk7XHJcbiAgICB9LCAwICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNpZGUgd2hlcmUgcHJvZHVjdCBpcyBpbiBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHBhcmFtIHsgT2JqZWN0IH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ2FydCA9ICggY2FydEl0ZW1zLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIGNhcnRJdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlybSBpZiBwcm9kdWN0IGNvdWxkIGJlIGFkZGVkIHRvIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcGFyYW0geyBPYmplY3QgfSBwcm9kdWN0IFxyXG4gKiBAcGFyYW0geyBOdW1iZXIgfSBxdHkgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FuQWRkVG9DYXJ0ID0gKCBjYXJ0SXRlbXMsIHByb2R1Y3QsIHF0eSApID0+IHtcclxuICAgIGxldCBmaW5kID0gY2FydEl0ZW1zLmZpbmQoIGl0ZW0gPT4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkICk7XHJcbiAgICBpZiAoIGZpbmQgKSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgKCBmaW5kLnF0eSArIHF0eSApICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCBwcm9kdWN0LnN0b2NrID09IDAgfHwgKCBwcm9kdWN0LnN0b2NrIDwgcXR5ICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB3aXNobGlzdCBcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2R1Y3QgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNJbldpc2hsaXN0ID0gKCB3aXNobGlzdCwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIHdpc2hsaXN0LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnNsdWcgPT0gcHJvZHVjdC5zbHVnICkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wYXJlIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luQ29tcGFyZSA9ICggY29tcGFyZSwgcHJvZHVjdCApID0+IHtcclxuICAgIHJldHVybiBwcm9kdWN0ICYmIGNvbXBhcmUuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PSBwcm9kdWN0LnNsdWcgKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBzYWZhcmkgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHtib29sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzU2FmYXJpQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggJ1NhZmFyaScgKSAhPT0gLTEgJiYgc1VzckFnLmluZGV4T2YoICdDaHJvbWUnICkgPT09IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBkZXRlY3QgRWRnZSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNFZGdlQnJvd3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzVXNyQWcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgaWYgKCBzVXNyQWcuaW5kZXhPZiggXCJFZGdlXCIgKSA+IC0xIClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCBpbmRleCBvZiB0aGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SW5kZXggPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBpZiAoIGVsZW1lbnQgPT0gY2hpbGRyZW5bIGkgXSApIHJldHVybiBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogZmlsdGVyIHByb2R1Y3RzIGJ5IGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9kdWN0cyBcclxuICogQHBhcmFtIHtBcnJheX0gY2F0ZWdvcnkgXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYXRGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGNhdGVnb3J5LCBmbGFnID0gZmFsc2UgKSB7XHJcbiAgICBpZiAoIGNhdGVnb3J5WyAwIF0gPT09ICdBbGwnICkgcmV0dXJuIHByb2R1Y3RzO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBpZiAoIGl0ZW0uY2F0ZWdvcnkuZmluZCggY2F0ID0+IGNhdC5zbHVnID09IGNhdGVnb3J5WyBpIF0gKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggIWZsYWcgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggZmxhZyApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBmbGFnIClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IClcclxufVxyXG5cclxuLyoqXHJcbiAqIGZpbHRlciBwcm9kdWN0cyBieSBhdHRyaWJ1dGVcclxuICogQHBhcmFtIHtBcnJheX0gcHJvZHVjdHMgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGF0dHJGaWx0ZXIgPSBmdW5jdGlvbiAoIHByb2R1Y3RzID0gW10sIGF0dHIgKSB7XHJcbiAgICAvLyBpZihwcm9kdWN0cylcclxuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ2FsbCcgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAnc2FsZScgJiYgaXRlbS5zYWxlX3ByaWNlICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3JhdGVkJyAmJiBpdGVtLnJhdGluZ3MgPiAzICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYXR0ciA9PT0gJ3VudGlsJyAmJiBpdGVtLnVudGlsICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtWyBhdHRyIF0gPT09IHRydWU7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY3JvbGxpbmcgdG8gUGFnZSBjb250ZW50IHNlY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBzY3JvbGxUb1BhZ2VDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLWNvbnRlbnQnIClcclxuICAgICAgICAub2Zmc2V0VG9wIC0gNzQ7XHJcbiAgICBpZiAoIGlzU2FmYXJpQnJvd3NlcigpIHx8IGlzRWRnZUJyb3dzZXIoKSApIHtcclxuICAgICAgICBsZXQgcG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBwb3MgPD0gdG8gKSBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KCAwLCAtMTIwICk7XHJcbiAgICAgICAgICAgICAgICBwb3MgLT0gMTIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICAgICAgdG9wOiB0byxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gbWFrZSBiYWNrZ3JvdW5kIHBhcmFsbGF4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFyYWxsYXggPSAoKSA9PiB7XHJcbiAgICBsZXQgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmJnLXBhcmFsbGF4JyApO1xyXG5cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcmFsbGF4Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBpZiAoIHBhcmFsbGF4WyBpIF0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnaGVhZGVyLXBhcmFsbGF4JyApICkge1xyXG4gICAgICAgICAgICB5ID0gKCAxMCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyA5MDAgKyA1MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5ID0gKCBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCApICogNDcgLyBwYXJhbGxheFsgaSBdLm9mZnNldFRvcCArIDUwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYWxsYXhbIGkgXS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0geSArICclJztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIHNldCBjb3VudCB0byBpbiBhYm91dC0yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY291bnQnICk7XHJcblxyXG4gICAgaWYgKCBpdGVtcyApIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbIGkgXTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtdG8nICksIDEwICkgLSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyb20nICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1zcGVlZCcgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IGludGVydmFsID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS1yZWZyZXNoLWludGVydmFsJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgcHQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gMDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGNvdW50VG9TY3JvbGxIYW5kbGVyLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudFRvU2Nyb2xsSGFuZGxlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHB0IDw9IHRpbWUgJiYgaGVpZ2h0ID49IHdpbmRvdy5wYWdlWU9mZnNldCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIDAgPT09IGZsYWcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcHQgPj0gdGltZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwYXJzZUludCggKCBwdCAqIGFtb3VudCApIC8gdGltZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwdCArIGludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUHJldmVudCBYc3MgQXR0YWNrXHJcbiAqIEBwYXJhbSB7Tm9kZX0gaHRtbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlQ29udGVudCAoIGh0bWwgKSB7XHJcbiAgICBjb25zdCBTQ1JJUFRfUkVHRVggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcclxuXHJcbiAgICAvLyBSZW1vdmluZyB0aGUgPHNjcmlwdD4gdGFnc1xyXG4gICAgd2hpbGUgKCBTQ1JJUFRfUkVHRVgudGVzdCggaHRtbCApICkge1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIFNDUklQVF9SRUdFWCwgXCJcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92aW5nIGFsbCBldmVudHMgZnJvbSB0YWdzLi4uXHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKCAvIG9uXFx3Kz1cIlteXCJdKlwiL2csIFwiXCIgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIF9faHRtbDogaHRtbFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==