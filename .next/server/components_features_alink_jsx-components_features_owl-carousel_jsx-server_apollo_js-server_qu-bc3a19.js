exports.id = "components_features_alink_jsx-components_features_owl-carousel_jsx-server_apollo_js-server_qu-bc3a19";
exports.ids = ["components_features_alink_jsx-components_features_owl-carousel_jsx-server_apollo_js-server_qu-bc3a19"];
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
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\alink.jsx";

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

/***/ "./components/features/owl-carousel.jsx":
/*!**********************************************!*\
  !*** ./components/features/owl-carousel.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel2 */ "react-owl-carousel2");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\devte\\OneDrive\\Documents\\Prism\\bafco\\components\\features\\owl-carousel.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function OwlCarousel(props) {
  const {
    adClass,
    options,
    events,
    isTheme = true
  } = props;
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const defaultOptions = {
    items: 1,
    loop: false,
    margin: 0,
    responsiveClass: "true",
    nav: true,
    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    responsive: {
      320: {
        nav: false
      },
      375: {
        nav: false
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.onChangeRef) {
      props.onChangeRef(carouselRef);
    }
  }, [carouselRef]);
  let settings = Object.assign({}, defaultOptions, options);
  return props.children !== undefined ? props.children.length > 0 || props.children && props.children.length === undefined ? __jsx((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: carouselRef,
    className: `owl-carousel ${isTheme ? 'owl-theme' : ''} ${adClass}`,
    options: settings,
    events: events,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, props.children) : "" : "";
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OwlCarousel));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvYWxpbmsuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vY29tcG9uZW50cy9mZWF0dXJlcy9vd2wtY2Fyb3VzZWwuanN4Iiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc2VydmVyL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3NlcnZlci9xdWVyaWVzLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvY2FydC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL3N0b3JlL2NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi9zdG9yZS9kZW1vLmpzIiwid2VicGFjazovL21vbGxhLXJlYWN0Ly4vc3RvcmUvd2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vbW9sbGEtcmVhY3QvLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC9pZ25vcmVkfEM6XFxVc2Vyc1xcZGV2dGVcXE9uZURyaXZlXFxEb2N1bWVudHNcXFByaXNtXFxiYWZjb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInByb3BzIiwiZGVmYXVsdEZ1bmN0aW9uIiwiZSIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIk93bENhcm91c2VsIiwiYWRDbGFzcyIsIm9wdGlvbnMiLCJldmVudHMiLCJpc1RoZW1lIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0T3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdiIsIm5hdlRleHQiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlUmVmIiwic2V0dGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJSZWFjdCIsIkFQSV9VUkkiLCJwcm9jZXNzIiwiYXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwid2l0aEFwb2xsbyIsIkdFVF9QUk9EVUNUUyIsImdxbCIsIkdFVF9QUk9EVUNUIiwiR0VUX0VMRU1FTlRfUFJPRFVDVFMiLCJHRVRfRUxFTUVOVF9QT1NUUyIsIkdFVF9QT1NUU19CWV9QQUdFIiwiR0VUX1BPU1QiLCJHRVRfSE9NRV9EQVRBIiwiYWN0aW9uVHlwZXMiLCJhZGRUb0NhcnQiLCJyZW1vdmVGcm9tQ2FydCIsInJlZnJlc2hTdG9yZSIsInVwZGF0ZUNhcnQiLCJpbml0aWFsU3RhdGUiLCJkYXRhIiwiY2FydFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJwYXlsb2FkIiwicHJvZHVjdCIsInF0eSIsInZhcmlhbnRzIiwibmFtZSIsInJlZHVjZSIsImFjYyIsImluZGV4IiwicHVzaCIsInN1bSIsInNhbGVfcHJpY2UiLCJwcmljZSIsImZpbHRlciIsImNhcnRJdGVtcyIsImFjdGlvbnMiLCJjYXJ0U2FnYSIsInRha2VFdmVyeSIsInNhZ2EiLCJ0b2FzdCIsInBlcnNpc3RDb25maWciLCJrZXlQcmVmaXgiLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdFJlZHVjZXIiLCJhZGRUb0NvbXBhcmUiLCJyZW1vdmVGcm9tQ29tcGFyZSIsImNsZWFyQWxsRnJvbUNvbXBhcmUiLCJjb21wYXJlUmVkdWNlciIsImNvbXBhcmVTYWdhIiwic2hvd1F1aWNrIiwiaGlkZVF1aWNrIiwic2hvd1ZpZGVvIiwiaGlkZVZpZGVvIiwiY3VycmVudCIsInNpbmdsZSIsInF1aWNrU2hvdyIsInZpZGVvU2hvdyIsImRlbW9SZWR1Y2VyIiwic2x1ZyIsInNob3dRdWlja1ZpZXciLCJhZGRUb1dpc2hsaXN0IiwicmVtb3ZlRnJvbVdpc2hsaXN0Iiwid2lzaGxpc3RSZWR1Y2VyIiwid2lzaGxpc3RTYWdhIiwiY2FydFByaWNlVG90YWwiLCJjdXIiLCJjYXJ0UXR5VG90YWwiLCJwYXJzZUludCIsImlzSW5DYXJ0IiwiZmluZCIsImNhbkFkZFRvQ2FydCIsInN0b2NrIiwiaXNJbldpc2hsaXN0Iiwid2lzaGxpc3QiLCJpc0luQ29tcGFyZSIsImNvbXBhcmUiLCJpc1NhZmFyaUJyb3dzZXIiLCJzVXNyQWciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNFZGdlQnJvd3NlciIsImdldEluZGV4IiwiZWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJpIiwiY2F0RmlsdGVyIiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsImZsYWciLCJjYXQiLCJhdHRyRmlsdGVyIiwiYXR0ciIsInJhdGluZ3MiLCJ1bnRpbCIsInNjcm9sbFRvUGFnZUNvbnRlbnQiLCJ0byIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFRvcCIsInBvcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbEJ5Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInBhcmFsbGF4IiwicXVlcnlTZWxlY3RvckFsbCIsInkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJhY2tncm91bmRQb3NpdGlvblkiLCJjb3VudFRvIiwiYW1vdW50IiwiZ2V0QXR0cmlidXRlIiwidGltZSIsImludGVydmFsIiwicHQiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY291bnRUb1Njcm9sbEhhbmRsZXIiLCJpbm5lckhUTUwiLCJzYWZlQ29udGVudCIsImh0bWwiLCJTQ1JJUFRfUkVHRVgiLCJ0ZXN0IiwicmVwbGFjZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsT0FBNEQ7QUFBQSxNQUEzQztBQUFFQyxZQUFGO0FBQVlDLGFBQVo7QUFBdUJDO0FBQXZCLEdBQTJDO0FBQUEsTUFBVkMsS0FBVTs7QUFDdkUsV0FBU0MsZUFBVCxDQUEyQkMsQ0FBM0IsRUFBK0I7QUFDM0IsUUFBS0YsS0FBSyxDQUFDRyxJQUFOLElBQWMsR0FBbkIsRUFBeUI7QUFDckJELE9BQUMsQ0FBQ0UsY0FBRjtBQUNIO0FBQ0o7O0FBRUQsU0FDSSxNQUFDLGtEQUFELGVBQVdKLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNJO0FBQUcsYUFBUyxFQUFHRixTQUFmO0FBQTJCLFNBQUssRUFBR0MsS0FBbkM7QUFBMkMsV0FBTyxFQUFHRSxlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01KLFFBRE4sQ0FESixDQURKO0FBT0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0E7O0FBRUEsU0FBU1EsV0FBVCxDQUF1QkwsS0FBdkIsRUFBK0I7QUFDM0IsUUFBTTtBQUFFTSxXQUFGO0FBQVdDLFdBQVg7QUFBb0JDLFVBQXBCO0FBQTRCQyxXQUFPLEdBQUc7QUFBdEMsTUFBK0NULEtBQXJEO0FBQ0EsUUFBTVUsV0FBVyxHQUFHQyw2Q0FBTSxDQUFFLElBQUYsQ0FBMUI7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFNBQUssRUFBRSxDQURZO0FBRW5CQyxRQUFJLEVBQUUsS0FGYTtBQUduQkMsVUFBTSxFQUFFLENBSFc7QUFJbkJDLG1CQUFlLEVBQUUsTUFKRTtBQUtuQkMsT0FBRyxFQUFFLElBTGM7QUFNbkJDLFdBQU8sRUFBRSxDQUFFLDZCQUFGLEVBQWlDLDhCQUFqQyxDQU5VO0FBT25CQyxRQUFJLEVBQUUsSUFQYTtBQVFuQkMsY0FBVSxFQUFFLEdBUk87QUFTbkJDLFlBQVEsRUFBRSxLQVRTO0FBVW5CQyxjQUFVLEVBQUU7QUFDUixXQUFLO0FBQ0RMLFdBQUcsRUFBRTtBQURKLE9BREc7QUFJUixXQUFLO0FBQ0RBLFdBQUcsRUFBRTtBQURKO0FBSkc7QUFWTyxHQUF2QjtBQW9CQU0sa0RBQVMsQ0FBRSxNQUFNO0FBQ2IsUUFBS3ZCLEtBQUssQ0FBQ3dCLFdBQVgsRUFBeUI7QUFDckJ4QixXQUFLLENBQUN3QixXQUFOLENBQW1CZCxXQUFuQjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUVBLFdBQUYsQ0FKTSxDQUFUO0FBTUEsTUFBSWUsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBZSxFQUFmLEVBQW1CZixjQUFuQixFQUFtQ0wsT0FBbkMsQ0FBZjtBQUVBLFNBQ0lQLEtBQUssQ0FBQ0gsUUFBTixLQUFtQitCLFNBQW5CLEdBQ0k1QixLQUFLLENBQUNILFFBQU4sQ0FBZWdDLE1BQWYsR0FBd0IsQ0FBeEIsSUFBK0I3QixLQUFLLENBQUNILFFBQU4sSUFBa0JHLEtBQUssQ0FBQ0gsUUFBTixDQUFlZ0MsTUFBZixLQUEwQkQsU0FBM0UsR0FDSSxNQUFDLDREQUFEO0FBQVUsT0FBRyxFQUFHbEIsV0FBaEI7QUFBOEIsYUFBUyxFQUFJLGdCQUFlRCxPQUFPLEdBQUcsV0FBSCxHQUFpQixFQUFHLElBQUdILE9BQVEsRUFBaEc7QUFBb0csV0FBTyxFQUFHbUIsUUFBOUc7QUFBeUgsVUFBTSxFQUFHakIsTUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNUixLQUFLLENBQUNILFFBRFosQ0FESixHQUlNLEVBTFYsR0FNTSxFQVBWO0FBU0g7O0FBRUQsNEVBQWVpQyxpREFBQSxDQUFZekIsV0FBWixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBRUEsTUFBTTBCLE9BQU8sR0FBSSxHQUFFQyx1QkFBbUMsVUFBdEQsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyx3REFBSixDQUFrQjtBQUNuQ0MsTUFBSSxFQUFFLElBQUlDLG9EQUFKLENBQWE7QUFDZkMsT0FBRyxFQUFFTjtBQURVLEdBQWIsQ0FENkI7QUFJbkNPLE9BQUssRUFBRSxJQUFJQyx5REFBSjtBQUo0QixDQUFsQixDQUFyQjtBQU9BLCtEQUFlQyx1REFBVSxDQUFFUCxZQUFGLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBRU8sTUFBTVEsWUFBWSxHQUFHQyxvREFBSTtBQUNoQztBQUNBLHlCQUF5QlYsR0FBNkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdENPO0FBd0NBLE1BQU1XLFdBQVcsR0FBR0Qsb0RBQUk7QUFDL0I7QUFDQSx3QkFBd0JWLEdBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxHTztBQW9HQSxNQUFNWSxvQkFBb0IsR0FBR0Ysb0RBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQ087QUFvQ0EsTUFBTUcsaUJBQWlCLEdBQUdILG9EQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdEJPO0FBd0JBLE1BQU1JLGlCQUFpQixHQUFHSixvREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E5Qk87QUFnQ0EsTUFBTUssUUFBUSxHQUFHTCxvREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOURPO0FBZ0VBLE1BQU1NLGFBQWEsR0FBR04sb0RBQUk7QUFDakM7QUFDQSx5QkFBeUJWLEdBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXhETyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVNQO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTWlCLFdBQVcsR0FBRztBQUN2QkMsV0FBUyxFQUFFLGFBRFk7QUFFdkJDLGdCQUFjLEVBQUUsa0JBRk87QUFHdkJDLGNBQVksRUFBRSxlQUhTO0FBSXZCQyxZQUFVLEVBQUU7QUFKVyxDQUFwQjtBQU9QLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFO0FBRFcsQ0FBckI7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUVDLEtBQUssR0FBR0gsWUFBVixFQUF3QkksTUFBeEIsS0FBb0M7QUFDcEQsVUFBU0EsTUFBTSxDQUFDQyxJQUFoQjtBQUNJLFNBQUtWLFdBQVcsQ0FBQ0MsU0FBakI7QUFDSSxVQUFJVSxTQUFTLEdBQUdILEtBQUssQ0FBQ0YsSUFBTixDQUFXSyxTQUFYLENBQXNCQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxJQUFXSixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkYsRUFBaEUsQ0FBaEI7QUFDQSxVQUFJRyxHQUFHLEdBQUdQLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRSxHQUFmLEdBQXFCUCxNQUFNLENBQUNLLE9BQVAsQ0FBZUUsR0FBcEMsR0FBMEMsQ0FBcEQ7O0FBQ0EsVUFBS0wsU0FBUyxLQUFLLENBQUMsQ0FBZixJQUFvQkYsTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJFLFFBQXZCLENBQWdDckMsTUFBaEMsR0FBeUMsQ0FBbEUsRUFBc0U7QUFDbEUrQixpQkFBUyxHQUFHSCxLQUFLLENBQUNGLElBQU4sQ0FBV0ssU0FBWCxDQUFzQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNNLElBQUwsSUFBYVQsTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJHLElBQWxFLENBQVo7QUFDSDs7QUFFRCxVQUFLUCxTQUFTLEtBQUssQ0FBQyxDQUFwQixFQUF3QjtBQUNwQixlQUFPO0FBQ0hMLGNBQUksRUFBRSxDQUNGLEdBQUdFLEtBQUssQ0FBQ0YsSUFBTixDQUFXYSxNQUFYLENBQW1CLENBQUVDLEdBQUYsRUFBT0wsT0FBUCxFQUFnQk0sS0FBaEIsS0FBMkI7QUFDN0MsZ0JBQUtWLFNBQVMsSUFBSVUsS0FBbEIsRUFBMEI7QUFDdEJELGlCQUFHLENBQUNFLElBQUosaUNBQ09QLE9BRFA7QUFFSUMsbUJBQUcsRUFBRUQsT0FBTyxDQUFDQyxHQUFSLEdBQWNBLEdBRnZCO0FBR0lPLG1CQUFHLEVBQUUsQ0FBRWQsTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJTLFVBQXZCLEdBQW9DZixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QlMsVUFBM0QsR0FBd0VmLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxPQUFmLENBQXVCVSxLQUFqRyxLQUE2R1YsT0FBTyxDQUFDQyxHQUFSLEdBQWNBLEdBQTNIO0FBSFQ7QUFLSCxhQU5ELE1BTU87QUFDSEksaUJBQUcsQ0FBQ0UsSUFBSixDQUFVUCxPQUFWO0FBQ0g7O0FBRUQsbUJBQU9LLEdBQVA7QUFDSCxXQVpFLEVBWUEsRUFaQSxDQUREO0FBREgsU0FBUDtBQWlCSCxPQWxCRCxNQWtCTztBQUNILGVBQU87QUFDSGQsY0FBSSxFQUFFLENBQ0YsR0FBR0UsS0FBSyxDQUFDRixJQURQLGtDQUdLRyxNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FIcEI7QUFJRUMsZUFBRyxFQUFFQSxHQUpQO0FBS0VTLGlCQUFLLEVBQUVoQixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QlMsVUFBdkIsR0FBb0NmLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxPQUFmLENBQXVCUyxVQUEzRCxHQUF3RWYsTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJVLEtBTHhHO0FBTUVGLGVBQUcsRUFBRVAsR0FBRyxJQUFLUCxNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QlMsVUFBdkIsR0FBb0NmLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxPQUFmLENBQXVCUyxVQUEzRCxHQUF3RWYsTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJVLEtBQXBHO0FBTlY7QUFESCxTQUFQO0FBV0g7O0FBQ0wsU0FBS3pCLFdBQVcsQ0FBQ0UsY0FBakI7QUFDSSxhQUFPO0FBQ0hJLFlBQUksRUFBRSxDQUNGLEdBQUdFLEtBQUssQ0FBQ0YsSUFBTixDQUFXb0IsTUFBWCxDQUFtQmQsSUFBSSxJQUFJO0FBQzFCLGNBQUtBLElBQUksQ0FBQ0MsRUFBTCxLQUFZSixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkYsRUFBeEMsRUFBNkMsT0FBTyxJQUFQO0FBQzdDLGNBQUtELElBQUksQ0FBQ00sSUFBTCxLQUFjVCxNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkcsSUFBMUMsRUFBaUQsT0FBTyxJQUFQO0FBQ2pELGlCQUFPLEtBQVA7QUFDSCxTQUpFLENBREQ7QUFESCxPQUFQOztBQVVKLFNBQUtsQixXQUFXLENBQUNJLFVBQWpCO0FBQ0ksYUFBTztBQUNIRSxZQUFJLEVBQUUsQ0FDRixHQUFHRyxNQUFNLENBQUNLLE9BQVAsQ0FBZWEsU0FEaEI7QUFESCxPQUFQOztBQUtKLFNBQUszQixXQUFXLENBQUNHLFlBQWpCO0FBQ0ksYUFBT0UsWUFBUDs7QUFFSjtBQUNJLGFBQU9HLEtBQVA7QUE1RFI7QUE4REgsQ0EvREQ7O0FBaUVPLE1BQU1vQixPQUFPLEdBQUc7QUFDbkIzQixXQUFTLEVBQUUsQ0FBRWMsT0FBRixFQUFXQyxHQUFHLEdBQUcsQ0FBakIsTUFBMEI7QUFDakNOLFFBQUksRUFBRVYsV0FBVyxDQUFDQyxTQURlO0FBRWpDYSxXQUFPLEVBQUU7QUFDTEMsYUFBTyxFQUFFQSxPQURKO0FBRUxDLFNBQUcsRUFBRUE7QUFGQTtBQUZ3QixHQUExQixDQURRO0FBU25CZCxnQkFBYyxFQUFJYSxPQUFGLEtBQWlCO0FBQzdCTCxRQUFJLEVBQUVWLFdBQVcsQ0FBQ0UsY0FEVztBQUU3QlksV0FBTyxFQUFFO0FBQ0xDLGFBQU8sRUFBRUE7QUFESjtBQUZvQixHQUFqQixDQVRHO0FBZ0JuQlgsWUFBVSxFQUFJdUIsU0FBRixLQUFtQjtBQUMzQmpCLFFBQUksRUFBRVYsV0FBVyxDQUFDSSxVQURTO0FBRTNCVSxXQUFPLEVBQUU7QUFDTGEsZUFBUyxFQUFFQTtBQUROO0FBRmtCLEdBQW5CO0FBaEJPLENBQWhCO0FBd0JBLFVBQVVFLFFBQVYsR0FBc0I7QUFDekIsUUFBTUMsNkRBQVMsQ0FBRTlCLFdBQVcsQ0FBQ0MsU0FBZCxFQUF5QixVQUFVOEIsSUFBVixDQUFpQjlFLENBQWpCLEVBQXFCO0FBQ3pEK0UsNkRBQUEsQ0FBZSx1QkFBZjtBQUNILEdBRmMsQ0FBZjtBQUlBLFFBQU1GLDZEQUFTLENBQUU5QixXQUFXLENBQUNFLGNBQWQsRUFBOEIsVUFBVTZCLElBQVYsQ0FBaUI5RSxDQUFqQixFQUFxQjtBQUM5RCtFLDZEQUFBLENBQWUsMkJBQWY7QUFDSCxHQUZjLENBQWY7QUFJQSxRQUFNRiw2REFBUyxDQUFFOUIsV0FBVyxDQUFDSSxVQUFkLEVBQTBCLFVBQVUyQixJQUFWLENBQWlCOUUsQ0FBakIsRUFBcUI7QUFDMUQrRSw2REFBQSxDQUFlLDJCQUFmO0FBQ0gsR0FGYyxDQUFmO0FBR0g7QUFFRCxNQUFNQyxhQUFhLEdBQUc7QUFDbEJDLFdBQVMsRUFBRSxRQURPO0FBRWxCQyxLQUFHLEVBQUUsTUFGYTtBQUdsQkMsU0FBT0E7QUFIVyxDQUF0QjtBQU1BLCtEQUFlQyw2REFBYyxDQUFFSixhQUFGLEVBQWlCMUIsV0FBakIsQ0FBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1QLFdBQVcsR0FBRztBQUN2QnNDLGNBQVksRUFBRSxnQkFEUztBQUV2QkMsbUJBQWlCLEVBQUUscUJBRkk7QUFHdkJDLHFCQUFtQixFQUFFLHdCQUhFO0FBSXZCckMsY0FBWSxFQUFFO0FBSlMsQ0FBcEI7QUFPUCxNQUFNRSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRTtBQURXLENBQXJCOztBQUlBLE1BQU1tQyxjQUFjLEdBQUcsQ0FBRWpDLEtBQUssR0FBR0gsWUFBVixFQUF3QkksTUFBeEIsS0FBb0M7QUFDdkQsVUFBU0EsTUFBTSxDQUFDQyxJQUFoQjtBQUNJLFNBQUtWLFdBQVcsQ0FBQ3NDLFlBQWpCO0FBQ0ksVUFBSTNCLFNBQVMsR0FBR0gsS0FBSyxDQUFDRixJQUFOLENBQVdLLFNBQVgsQ0FBc0JDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFMLElBQVdKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxPQUFmLENBQXVCRixFQUFoRSxDQUFoQjs7QUFDQSxVQUFLRixTQUFTLElBQUksQ0FBQyxDQUFuQixFQUF1QjtBQUNuQixlQUFPO0FBQ0hMLGNBQUksRUFBRSxDQUNGLEdBQUdFLEtBQUssQ0FBQ0YsSUFEUCxFQUVGRyxNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FGYjtBQURILFNBQVA7QUFNSDs7QUFFTCxTQUFLZixXQUFXLENBQUN1QyxpQkFBakI7QUFDSSxhQUFPO0FBQ0hqQyxZQUFJLEVBQUVFLEtBQUssQ0FBQ0YsSUFBTixDQUFXb0IsTUFBWCxDQUFtQmQsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsSUFBV0osTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BQWYsQ0FBdUJGLEVBQTdEO0FBREgsT0FBUDs7QUFJSixTQUFLYixXQUFXLENBQUN3QyxtQkFBakI7QUFDSSxhQUFPbkMsWUFBUDs7QUFFSixTQUFLTCxXQUFXLENBQUNHLFlBQWpCO0FBQ0ksYUFBT0UsWUFBUDs7QUFFSjtBQUNJLGFBQU9HLEtBQVA7QUF4QlI7QUEwQkgsQ0EzQkQ7O0FBOEJPLE1BQU1vQixPQUFPLEdBQUc7QUFDbkJVLGNBQVksRUFBRXZCLE9BQU8sS0FBTTtBQUN2QkwsUUFBSSxFQUFFVixXQUFXLENBQUNzQyxZQURLO0FBRXZCeEIsV0FBTyxFQUFFO0FBQ0xDO0FBREs7QUFGYyxHQUFOLENBREY7QUFRbkJ3QixtQkFBaUIsRUFBRXhCLE9BQU8sS0FBTTtBQUM1QkwsUUFBSSxFQUFFVixXQUFXLENBQUN1QyxpQkFEVTtBQUU1QnpCLFdBQU8sRUFBRTtBQUNMQztBQURLO0FBRm1CLEdBQU4sQ0FSUDtBQWVuQnlCLHFCQUFtQixFQUFFLE9BQVE7QUFDekI5QixRQUFJLEVBQUVWLFdBQVcsQ0FBQ3dDLG1CQURPO0FBRXpCMUIsV0FBTyxFQUFFO0FBRmdCLEdBQVIsQ0FmRjtBQW9CbkJYLGNBQVksRUFBRSxPQUFRO0FBQ2xCTyxRQUFJLEVBQUVWLFdBQVcsQ0FBQ0csWUFEQTtBQUVsQlcsV0FBTyxFQUFFO0FBRlMsR0FBUjtBQXBCSyxDQUFoQjtBQTBCQSxVQUFVNEIsV0FBVixHQUF5QjtBQUM1QixRQUFNWiw2REFBUyxDQUFFOUIsV0FBVyxDQUFDc0MsWUFBZCxFQUE0QixVQUFVUCxJQUFWLENBQWlCOUUsQ0FBakIsRUFBcUI7QUFDNUQrRSw2REFBQSxDQUFlLDBCQUFmO0FBQ0gsR0FGYyxDQUFmO0FBR0g7QUFFRCxNQUFNQyxhQUFhLEdBQUc7QUFDbEJDLFdBQVMsRUFBRSxRQURPO0FBRWxCQyxLQUFHLEVBQUUsU0FGYTtBQUdsQkMsU0FBT0E7QUFIVyxDQUF0QjtBQU1BLCtEQUFlQyw2REFBYyxDQUFFSixhQUFGLEVBQWlCUSxjQUFqQixDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBRU8sTUFBTXpDLFdBQVcsR0FBRztBQUN2QjJDLFdBQVMsRUFBRSxnQkFEWTtBQUV2QkMsV0FBUyxFQUFFLGdCQUZZO0FBR3ZCQyxXQUFTLEVBQUUsWUFIWTtBQUl2QkMsV0FBUyxFQUFFLFlBSlk7QUFLdkIzQyxjQUFZLEVBQUU7QUFMUyxDQUFwQjtBQVFQLElBQUlFLFlBQVksR0FBRztBQUNmMEMsU0FBTyxFQUFFaEUsR0FETTtBQUVmaUUsUUFBTSxFQUFFLElBRk87QUFHZkMsV0FBUyxFQUFFLEtBSEk7QUFJZkMsV0FBUyxFQUFFO0FBSkksQ0FBbkI7O0FBTUEsTUFBTUMsV0FBVyxHQUFHLENBQUUzQyxLQUFLLEdBQUdILFlBQVYsRUFBd0JJLE1BQXhCLEtBQW9DO0FBQ3BELFVBQVNBLE1BQU0sQ0FBQ0MsSUFBaEI7QUFDSSxTQUFLVixXQUFXLENBQUMyQyxTQUFqQjtBQUNJLDZDQUNPbkMsS0FEUDtBQUVJd0MsY0FBTSxFQUFFdkMsTUFBTSxDQUFDSyxPQUFQLENBQWVzQyxJQUYzQjtBQUdJSCxpQkFBUyxFQUFFO0FBSGY7O0FBTUosU0FBS2pELFdBQVcsQ0FBQzRDLFNBQWpCO0FBQ0ksNkNBQ09wQyxLQURQO0FBRUl5QyxpQkFBUyxFQUFFLEtBRmY7QUFHSUQsY0FBTSxFQUFFO0FBSFo7O0FBTUosU0FBS2hELFdBQVcsQ0FBQzZDLFNBQWpCO0FBQ0ksNkNBQVlyQyxLQUFaO0FBQW1CMEMsaUJBQVMsRUFBRTtBQUE5Qjs7QUFFSixTQUFLbEQsV0FBVyxDQUFDOEMsU0FBakI7QUFDSSw2Q0FBWXRDLEtBQVo7QUFBbUIwQyxpQkFBUyxFQUFFO0FBQTlCOztBQUVKLFNBQUtsRCxXQUFXLENBQUNHLFlBQWpCO0FBQ0ksYUFBTztBQUNINEMsZUFBTyxFQUFFdEMsTUFBTSxDQUFDSyxPQUFQLENBQWVpQyxPQURyQjtBQUVIQyxjQUFNLEVBQUUsSUFGTDtBQUdIQyxpQkFBUyxFQUFFLEtBSFI7QUFJSEMsaUJBQVMsRUFBRTtBQUpSLE9BQVA7O0FBT0o7QUFDSSxhQUFPMUMsS0FBUDtBQTlCUjtBQWdDSCxDQWpDRDs7QUFtQ08sTUFBTW9CLE9BQU8sR0FBRztBQUNuQnpCLGNBQVksRUFBSTRDLE9BQUYsS0FBaUI7QUFDM0JyQyxRQUFJLEVBQUVWLFdBQVcsQ0FBQ0csWUFEUztBQUUzQlcsV0FBTyxFQUFFO0FBQ0xpQyxhQUFPLEVBQUVBO0FBREo7QUFGa0IsR0FBakIsQ0FESztBQVFuQk0sZUFBYSxFQUFFRCxJQUFJLEtBQU07QUFDckIxQyxRQUFJLEVBQUVWLFdBQVcsQ0FBQzJDLFNBREc7QUFFckI3QixXQUFPLEVBQUU7QUFDTHNDLFVBQUksRUFBRUE7QUFERDtBQUZZLEdBQU4sQ0FSQTtBQWVuQlIsV0FBUyxFQUFFLE9BQVE7QUFDZmxDLFFBQUksRUFBRVYsV0FBVyxDQUFDNEM7QUFESCxHQUFSLENBZlE7QUFtQm5CQyxXQUFTLEVBQUUsT0FBUTtBQUNmbkMsUUFBSSxFQUFFVixXQUFXLENBQUM2QztBQURILEdBQVIsQ0FuQlE7QUF1Qm5CQyxXQUFTLEVBQUUsT0FBUTtBQUNmcEMsUUFBSSxFQUFFVixXQUFXLENBQUM4QztBQURILEdBQVI7QUF2QlEsQ0FBaEI7QUE0QlAsTUFBTWIsYUFBYSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUUsUUFETztBQUVsQkMsS0FBRyxFQUFFLE1BRmE7QUFHbEJDLFNBQU9BO0FBSFcsQ0FBdEI7QUFNQSwrREFBZUMsNkRBQWMsQ0FBRUosYUFBRixFQUFpQmtCLFdBQWpCLENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNbkQsV0FBVyxHQUFHO0FBQ3ZCc0QsZUFBYSxFQUFFLGlCQURRO0FBRXZCQyxvQkFBa0IsRUFBRSxzQkFGRztBQUd2QnBELGNBQVksRUFBRTtBQUhTLENBQXBCO0FBTVAsTUFBTUUsWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUU7QUFEVyxDQUFyQjs7QUFJQSxNQUFNa0QsZUFBZSxHQUFHLENBQUVoRCxLQUFLLEdBQUdILFlBQVYsRUFBd0JJLE1BQXhCLEtBQW9DO0FBQ3hELFVBQVNBLE1BQU0sQ0FBQ0MsSUFBaEI7QUFDSSxTQUFLVixXQUFXLENBQUNzRCxhQUFqQjtBQUNJLFVBQUkzQyxTQUFTLEdBQUdILEtBQUssQ0FBQ0YsSUFBTixDQUFXSyxTQUFYLENBQXNCQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZSixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsT0FBZixDQUF1QkYsRUFBakUsQ0FBaEI7O0FBQ0EsVUFBS0YsU0FBUyxJQUFJLENBQUMsQ0FBbkIsRUFBdUI7QUFDbkIsZUFBTztBQUNITCxjQUFJLEVBQUUsQ0FDRixHQUFHRSxLQUFLLENBQUNGLElBRFAsRUFFRkcsTUFBTSxDQUFDSyxPQUFQLENBQWVDLE9BRmI7QUFESCxTQUFQO0FBTUg7O0FBRUwsU0FBS2YsV0FBVyxDQUFDdUQsa0JBQWpCO0FBQ0ksYUFBTztBQUNIakQsWUFBSSxFQUFFRSxLQUFLLENBQUNGLElBQU4sQ0FBV29CLE1BQVgsQ0FBbUJkLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxPQUFmLENBQXVCRixFQUE5RDtBQURILE9BQVA7O0FBSUosU0FBS2IsV0FBVyxDQUFDRyxZQUFqQjtBQUNJLGFBQU9FLFlBQVA7O0FBRUo7QUFDSSxhQUFPRyxLQUFQO0FBckJSO0FBdUJILENBeEJEOztBQTBCTyxNQUFNb0IsT0FBTyxHQUFHO0FBQ25CMEIsZUFBYSxFQUFFdkMsT0FBTyxLQUFNO0FBQ3hCTCxRQUFJLEVBQUVWLFdBQVcsQ0FBQ3NELGFBRE07QUFFeEJ4QyxXQUFPLEVBQUU7QUFDTEM7QUFESztBQUZlLEdBQU4sQ0FESDtBQVFuQndDLG9CQUFrQixFQUFFeEMsT0FBTyxLQUFNO0FBQzdCTCxRQUFJLEVBQUVWLFdBQVcsQ0FBQ3VELGtCQURXO0FBRTdCekMsV0FBTyxFQUFFO0FBQ0xDO0FBREs7QUFGb0IsR0FBTjtBQVJSLENBQWhCO0FBZ0JBLFVBQVUwQyxZQUFWLEdBQTBCO0FBQzdCLFFBQU0zQiw2REFBUyxDQUFFOUIsV0FBVyxDQUFDc0QsYUFBZCxFQUE2QixVQUFVdkIsSUFBVixDQUFpQjlFLENBQWpCLEVBQXFCO0FBQzdEK0UsNkRBQUEsQ0FBZSwyQkFBZjtBQUNILEdBRmMsQ0FBZjtBQUdIO0FBRUQsTUFBTUMsYUFBYSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUUsUUFETztBQUVsQkMsS0FBRyxFQUFFLFVBRmE7QUFHbEJDLFNBQU9BO0FBSFcsQ0FBdEI7QUFNQSwrREFBZUMsNkRBQWMsQ0FBRUosYUFBRixFQUFpQnVCLGVBQWpCLENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNRSxjQUFjLEdBQUcvQixTQUFTLElBQUk7QUFDdkMsU0FBT0EsU0FBUyxDQUFDUixNQUFWLENBQWtCLENBQUVDLEdBQUYsRUFBT3VDLEdBQVAsS0FBZ0I7QUFDckMsV0FBT3ZDLEdBQUcsR0FBR3VDLEdBQUcsQ0FBQ3BDLEdBQWpCO0FBQ0gsR0FGTSxFQUVKLENBRkksQ0FBUDtBQUdILENBSk07QUFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1xQyxZQUFZLEdBQUdqQyxTQUFTLElBQUk7QUFDckMsU0FBT0EsU0FBUyxDQUFDUixNQUFWLENBQWtCLENBQUVDLEdBQUYsRUFBT3VDLEdBQVAsS0FBZ0I7QUFDckMsV0FBT3ZDLEdBQUcsR0FBR3lDLFFBQVEsQ0FBRUYsR0FBRyxDQUFDM0MsR0FBTixFQUFXLEVBQVgsQ0FBckI7QUFDSCxHQUZNLEVBRUosQ0FGSSxDQUFQO0FBR0gsQ0FKTTtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTThDLFFBQVEsR0FBRyxDQUFFbkMsU0FBRixFQUFhWixPQUFiLEtBQTBCO0FBQzlDLFNBQU9ZLFNBQVMsQ0FBQ29DLElBQVYsQ0FBZ0JuRCxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxJQUFXRSxPQUFPLENBQUNGLEVBQTNDLElBQWtELElBQWxELEdBQXlELEtBQWhFO0FBQ0gsQ0FGTTtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNbUQsWUFBWSxHQUFHLENBQUVyQyxTQUFGLEVBQWFaLE9BQWIsRUFBc0JDLEdBQXRCLEtBQStCO0FBQ3ZELE1BQUkrQyxJQUFJLEdBQUdwQyxTQUFTLENBQUNvQyxJQUFWLENBQWdCbkQsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsSUFBV0UsT0FBTyxDQUFDRixFQUEzQyxDQUFYOztBQUNBLE1BQUtrRCxJQUFMLEVBQVk7QUFDUixRQUFLaEQsT0FBTyxDQUFDa0QsS0FBUixJQUFpQixDQUFqQixJQUF3QmxELE9BQU8sQ0FBQ2tELEtBQVIsR0FBa0JGLElBQUksQ0FBQy9DLEdBQUwsR0FBV0EsR0FBMUQsRUFBb0UsT0FBTyxLQUFQLENBQXBFLEtBQ0ssT0FBTyxJQUFQO0FBQ1IsR0FIRCxNQUdPO0FBQ0gsUUFBS0QsT0FBTyxDQUFDa0QsS0FBUixJQUFpQixDQUFqQixJQUF3QmxELE9BQU8sQ0FBQ2tELEtBQVIsR0FBZ0JqRCxHQUE3QyxFQUFxRCxPQUFPLEtBQVAsQ0FBckQsS0FDSyxPQUFPLElBQVA7QUFDUjtBQUNKLENBVE07QUFXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1rRCxZQUFZLEdBQUcsQ0FBRUMsUUFBRixFQUFZcEQsT0FBWixLQUF5QjtBQUNqRCxTQUFPQSxPQUFPLElBQUlvRCxRQUFRLENBQUN4RCxTQUFULENBQW9CQyxJQUFJLElBQUlBLElBQUksQ0FBQ3dDLElBQUwsSUFBYXJDLE9BQU8sQ0FBQ3FDLElBQWpELElBQTBELENBQUMsQ0FBN0U7QUFDSCxDQUZNO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNZ0IsV0FBVyxHQUFHLENBQUVDLE9BQUYsRUFBV3RELE9BQVgsS0FBd0I7QUFDL0MsU0FBT0EsT0FBTyxJQUFJc0QsT0FBTyxDQUFDMUQsU0FBUixDQUFtQkMsSUFBSSxJQUFJQSxJQUFJLENBQUN3QyxJQUFMLElBQWFyQyxPQUFPLENBQUNxQyxJQUFoRCxJQUF5RCxDQUFDLENBQTVFO0FBQ0gsQ0FGTTtBQUtQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1rQixlQUFlLEdBQUcsWUFBWTtBQUN2QyxNQUFJQyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0MsU0FBdkI7QUFDQSxNQUFLRixNQUFNLENBQUNHLE9BQVAsQ0FBZ0IsUUFBaEIsTUFBK0IsQ0FBQyxDQUFoQyxJQUFxQ0gsTUFBTSxDQUFDRyxPQUFQLENBQWdCLFFBQWhCLE1BQStCLENBQUMsQ0FBMUUsRUFDSSxPQUFPLElBQVA7QUFDSixTQUFPLEtBQVA7QUFDSCxDQUxNO0FBUVA7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsYUFBYSxHQUFHLFlBQVk7QUFDckMsTUFBSUosTUFBTSxHQUFHQyxTQUFTLENBQUNDLFNBQXZCO0FBQ0EsTUFBS0YsTUFBTSxDQUFDRyxPQUFQLENBQWdCLE1BQWhCLElBQTJCLENBQUMsQ0FBakMsRUFDSSxPQUFPLElBQVA7QUFDSixTQUFPLEtBQVA7QUFDSCxDQUxNO0FBT1A7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUUsUUFBUSxHQUFHLFVBQVdDLE9BQVgsRUFBcUI7QUFDekMsTUFBSWpJLFFBQVEsR0FBR2lJLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQmxJLFFBQXJDOztBQUNBLE9BQU0sSUFBSW1JLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUduSSxRQUFRLENBQUNnQyxNQUE5QixFQUFzQ21HLENBQUMsRUFBdkMsRUFBNEM7QUFDeEMsUUFBS0YsT0FBTyxJQUFJakksUUFBUSxDQUFFbUksQ0FBRixDQUF4QixFQUFnQyxPQUFPQSxDQUFQO0FBQ25DOztBQUVELFNBQU8sQ0FBUDtBQUNILENBUE07QUFTUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsU0FBUyxHQUFHLFVBQVdDLFFBQVEsR0FBRyxFQUF0QixFQUEwQkMsUUFBMUIsRUFBb0NDLElBQUksR0FBRyxLQUEzQyxFQUFtRDtBQUN4RSxNQUFLRCxRQUFRLENBQUUsQ0FBRixDQUFSLEtBQWtCLEtBQXZCLEVBQStCLE9BQU9ELFFBQVA7QUFFL0IsU0FBT0EsUUFBUSxDQUFDdkQsTUFBVCxDQUFpQmQsSUFBSSxJQUFJO0FBQzVCLFNBQU0sSUFBSW1FLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUdHLFFBQVEsQ0FBQ3RHLE1BQTlCLEVBQXNDbUcsQ0FBQyxFQUF2QyxFQUE0QztBQUN4QyxVQUFLbkUsSUFBSSxDQUFDc0UsUUFBTCxDQUFjbkIsSUFBZCxDQUFvQnFCLEdBQUcsSUFBSUEsR0FBRyxDQUFDaEMsSUFBSixJQUFZOEIsUUFBUSxDQUFFSCxDQUFGLENBQS9DLENBQUwsRUFBOEQ7QUFDMUQsWUFBSyxDQUFDSSxJQUFOLEVBQWEsT0FBTyxJQUFQO0FBQ2hCLE9BRkQsTUFFTztBQUNILFlBQUtBLElBQUwsRUFBWSxPQUFPLEtBQVA7QUFDZjtBQUNKOztBQUVELFFBQUtBLElBQUwsRUFDSSxPQUFPLElBQVAsQ0FESixLQUdJLE9BQU8sS0FBUDtBQUNQLEdBYk0sQ0FBUDtBQWNILENBakJNO0FBbUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUUsVUFBVSxHQUFHLFVBQVdKLFFBQVEsR0FBRyxFQUF0QixFQUEwQkssSUFBMUIsRUFBaUM7QUFDdkQ7QUFDQSxTQUFPTCxRQUFRLENBQUN2RCxNQUFULENBQWlCZCxJQUFJLElBQUk7QUFDNUIsUUFBSzBFLElBQUksS0FBSyxLQUFkLEVBQXNCO0FBQ2xCLGFBQU8sSUFBUDtBQUNIOztBQUVELFFBQUtBLElBQUksS0FBSyxNQUFULElBQW1CMUUsSUFBSSxDQUFDWSxVQUE3QixFQUEwQztBQUN0QyxhQUFPLElBQVA7QUFDSDs7QUFFRCxRQUFLOEQsSUFBSSxLQUFLLE9BQVQsSUFBb0IxRSxJQUFJLENBQUMyRSxPQUFMLEdBQWUsQ0FBeEMsRUFBNEM7QUFDeEMsYUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBS0QsSUFBSSxLQUFLLE9BQVQsSUFBb0IxRSxJQUFJLENBQUM0RSxLQUE5QixFQUFzQztBQUNsQyxhQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPNUUsSUFBSSxDQUFFMEUsSUFBRixDQUFKLEtBQWlCLElBQXhCO0FBQ0gsR0FsQk0sQ0FBUDtBQW1CSCxDQXJCTTtBQXVCUDtBQUNBO0FBQ0E7O0FBQ08sTUFBTUcsbUJBQW1CLEdBQUcsWUFBWTtBQUMzQyxNQUFJQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixlQUF4QixFQUNKQyxTQURJLEdBQ1EsRUFEakI7O0FBRUEsTUFBS3ZCLGVBQWUsTUFBTUssYUFBYSxFQUF2QyxFQUE0QztBQUN4QyxRQUFJbUIsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFdBQWpCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxXQUFXLENBQUUsTUFBTTtBQUM3QixVQUFLSixHQUFHLElBQUlKLEVBQVosRUFBaUJTLGFBQWEsQ0FBRUYsT0FBRixDQUFiLENBQWpCLEtBQ0s7QUFDREYsY0FBTSxDQUFDSyxRQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQUMsR0FBckI7QUFDQU4sV0FBRyxJQUFJLEdBQVA7QUFDSDtBQUNKLEtBTndCLEVBTXRCLENBTnNCLENBQXpCO0FBT0gsR0FURCxNQVNPO0FBQ0hDLFVBQU0sQ0FBQ00sUUFBUCxDQUFpQjtBQUNiQyxTQUFHLEVBQUVaLEVBRFE7QUFFYmEsY0FBUSxFQUFFO0FBRkcsS0FBakI7QUFJSDtBQUNKLENBbEJNO0FBb0JQO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUMxQixNQUFJQSxRQUFRLEdBQUdiLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMkIsY0FBM0IsQ0FBZjs7QUFFQSxPQUFNLElBQUkxQixDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHeUIsUUFBUSxDQUFDNUgsTUFBOUIsRUFBc0NtRyxDQUFDLEVBQXZDLEVBQTRDO0FBQ3hDLFFBQUkyQixDQUFDLEdBQUcsQ0FBUjs7QUFDQSxRQUFLRixRQUFRLENBQUV6QixDQUFGLENBQVIsQ0FBYzRCLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWtDLGlCQUFsQyxDQUFMLEVBQTZEO0FBQ3pERixPQUFDLEdBQUcsQ0FBRSxLQUFLWCxNQUFNLENBQUNDLFdBQWQsSUFBOEIsRUFBOUIsR0FBbUMsR0FBbkMsR0FBeUMsRUFBN0M7QUFDSCxLQUZELE1BRU87QUFDSFUsT0FBQyxHQUFHLENBQUVGLFFBQVEsQ0FBRXpCLENBQUYsQ0FBUixDQUFjYyxTQUFkLEdBQTBCRSxNQUFNLENBQUNDLFdBQW5DLElBQW1ELEVBQW5ELEdBQXdEUSxRQUFRLENBQUV6QixDQUFGLENBQVIsQ0FBY2MsU0FBdEUsR0FBa0YsRUFBdEY7QUFDSDs7QUFFRFcsWUFBUSxDQUFFekIsQ0FBRixDQUFSLENBQWNqSSxLQUFkLENBQW9CK0osbUJBQXBCLEdBQTBDSCxDQUFDLEdBQUcsR0FBOUM7QUFDSDtBQUNKLENBYk07QUFlUDtBQUNBO0FBQ0E7O0FBQ08sTUFBTUksT0FBTyxHQUFHLFlBQVk7QUFDL0IsTUFBSWxKLEtBQUssR0FBRytILFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMkIsUUFBM0IsQ0FBWjs7QUFFQSxNQUFLN0ksS0FBTCxFQUFhO0FBQ1QsU0FBTSxJQUFJbUgsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR25ILEtBQUssQ0FBQ2dCLE1BQTNCLEVBQW1DbUcsQ0FBQyxFQUFwQyxFQUF5QztBQUVyQyxVQUFJbkUsSUFBSSxHQUFHaEQsS0FBSyxDQUFFbUgsQ0FBRixDQUFoQjtBQUNBLFVBQUlnQyxNQUFNLEdBQUdsRCxRQUFRLENBQUVqRCxJQUFJLENBQUNvRyxZQUFMLENBQW1CLFNBQW5CLENBQUYsRUFBa0MsRUFBbEMsQ0FBUixHQUFpRG5ELFFBQVEsQ0FBRWpELElBQUksQ0FBQ29HLFlBQUwsQ0FBbUIsV0FBbkIsQ0FBRixFQUFvQyxFQUFwQyxDQUF0RTtBQUNBLFVBQUlDLElBQUksR0FBR3BELFFBQVEsQ0FBRWpELElBQUksQ0FBQ29HLFlBQUwsQ0FBbUIsWUFBbkIsQ0FBRixFQUFxQyxFQUFyQyxDQUFuQjtBQUNBLFVBQUlFLFFBQVEsR0FBR3JELFFBQVEsQ0FBRWpELElBQUksQ0FBQ29HLFlBQUwsQ0FBbUIsdUJBQW5CLENBQUYsRUFBZ0QsRUFBaEQsQ0FBdkI7QUFDQSxVQUFJRyxFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUlDLE1BQU0sR0FBR3hHLElBQUksQ0FBQ2tFLGFBQUwsQ0FBbUJBLGFBQW5CLENBQWlDQSxhQUFqQyxDQUErQ2UsU0FBNUQ7QUFDQSxVQUFJVixJQUFJLEdBQUcsQ0FBWDtBQUVBUSxjQUFRLENBQUMwQixnQkFBVCxDQUEyQixRQUEzQixFQUFxQ0Msb0JBQXJDLEVBQTJELElBQTNEOztBQUVBLGVBQVNBLG9CQUFULEdBQWlDO0FBQzdCLFlBQUtILEVBQUUsSUFBSUYsSUFBTixJQUFjRyxNQUFNLElBQUlyQixNQUFNLENBQUNDLFdBQXBDLEVBQWtEO0FBQzlDLGNBQUssTUFBTWIsSUFBWCxFQUFrQjtBQUNkLGdCQUFJYyxPQUFPLEdBQUdDLFdBQVcsQ0FBRSxNQUFNO0FBQzdCLGtCQUFLaUIsRUFBRSxJQUFJRixJQUFYLEVBQWtCO0FBQ2RkLDZCQUFhLENBQUVGLE9BQUYsQ0FBYjtBQUNIOztBQUVEckYsa0JBQUksQ0FBQzJHLFNBQUwsR0FBaUIxRCxRQUFRLENBQUlzRCxFQUFFLEdBQUdKLE1BQVAsR0FBa0JFLElBQXBCLENBQXpCO0FBQ0FFLGdCQUFFLEdBQUdBLEVBQUUsR0FBR0QsUUFBVjtBQUNILGFBUHdCLEVBT3RCQSxRQVBzQixDQUF6QjtBQVFIOztBQUVEL0IsY0FBSSxHQUFHLENBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKLENBbENNO0FBcUNQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNxQyxXQUFULENBQXVCQyxJQUF2QixFQUE4QjtBQUNqQyxRQUFNQyxZQUFZLEdBQUcscURBQXJCLENBRGlDLENBR2pDOztBQUNBLFNBQVFBLFlBQVksQ0FBQ0MsSUFBYixDQUFtQkYsSUFBbkIsQ0FBUixFQUFvQztBQUNoQ0EsUUFBSSxHQUFHQSxJQUFJLENBQUNHLE9BQUwsQ0FBY0YsWUFBZCxFQUE0QixFQUE1QixDQUFQO0FBQ0gsR0FOZ0MsQ0FRakM7OztBQUNBRCxNQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFjLGlCQUFkLEVBQWlDLEVBQWpDLENBQVA7QUFFQSxTQUFPO0FBQ0hDLFVBQU0sRUFBRUo7QUFETCxHQUFQO0FBR0gsQzs7Ozs7Ozs7OztBQy9QRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfZmVhdHVyZXNfYWxpbmtfanN4LWNvbXBvbmVudHNfZmVhdHVyZXNfb3dsLWNhcm91c2VsX2pzeC1zZXJ2ZXJfYXBvbGxvX2pzLXNlcnZlcl9xdS1iYzNhMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBTGluayAoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLnByb3BzIH0gKSB7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RnVuY3Rpb24gKCBlICkge1xyXG4gICAgICAgIGlmICggcHJvcHMuaHJlZiA9PSAnIycgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHN0eWxlPXsgc3R5bGUgfSBvbkNsaWNrPXsgZGVmYXVsdEZ1bmN0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW93bC1jYXJvdXNlbDInO1xyXG5cclxuZnVuY3Rpb24gT3dsQ2Fyb3VzZWwgKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IHsgYWRDbGFzcywgb3B0aW9ucywgZXZlbnRzLCBpc1RoZW1lID0gdHJ1ZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmVDbGFzczogXCJ0cnVlXCIsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIG5hdlRleHQ6IFsgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1sZWZ0XCI+JywgJzxpIGNsYXNzPVwiaWNvbi1hbmdsZS1yaWdodFwiPicgXSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDQwMCxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMzc1OiB7XHJcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgICAgIGlmICggcHJvcHMub25DaGFuZ2VSZWYgKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlUmVmKCBjYXJvdXNlbFJlZiApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFsgY2Fyb3VzZWxSZWYgXSApO1xyXG5cclxuICAgIGxldCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgKCBwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCApID9cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZWY9eyBjYXJvdXNlbFJlZiB9IGNsYXNzTmFtZT17IGBvd2wtY2Fyb3VzZWwgJHtpc1RoZW1lID8gJ293bC10aGVtZScgOiAnJ30gJHthZENsYXNzfWAgfSBvcHRpb25zPXsgc2V0dGluZ3MgfSBldmVudHM9eyBldmVudHMgfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwgPlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyggT3dsQ2Fyb3VzZWwgKTsiLCIvLyBpbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnbmV4dC1hcG9sbG8nO1xyXG4vLyBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5cclxuLy8gY29uc3QgQVBJX1VSSSA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9L2dyYXBocWxgO1xyXG5cclxuLy8gY29uc3QgYXBvbGxvQ2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCgge1xyXG4vLyAgICAgdXJpOiBBUElfVVJJLFxyXG4vLyAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxuLy8gfSApO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyggYXBvbGxvQ2xpZW50ICk7XHJcblxyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnbmV4dC1hcG9sbG8nO1xyXG4vLyBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5jb25zdCBBUElfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTH0vZ3JhcGhxbGA7XHJcblxyXG4vLyBjb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KCB7XHJcbi8vICAgICB1cmk6IEFQSV9VUkksXHJcbi8vICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4vLyB9ICk7XHJcblxyXG5jb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KCB7XHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICAgIHVyaTogQVBJX1VSSSxcclxuICAgIH0pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oIGFwb2xsb0NsaWVudCApO1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0cygkc2VhcmNoVGVybTogU3RyaW5nLCAkY29sb3I6IFtTdHJpbmddLCAkc2l6ZTogW1N0cmluZ10sICRicmFuZDogW1N0cmluZ10sICRtaW5QcmljZTogSW50LCAkbWF4UHJpY2U6IEludCwgJGNhdGVnb3J5OiBTdHJpbmcsICRyYXRpbmc6IFtTdHJpbmddLCAkc29ydEJ5OiBTdHJpbmcsICRwYWdlOiBJbnQgPSAxLCAkcGVyUGFnZTogSW50LCAkbGlzdDogQm9vbGVhbiA9IGZhbHNlLCAkZnJvbTogSW50ID0gMCkge1xyXG4gICAgICAgIHByb2R1Y3RzKGRlbW86ICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNT30sIHNlYXJjaFRlcm06ICRzZWFyY2hUZXJtLCBjb2xvcjogJGNvbG9yLCBzaXplOiAkc2l6ZSwgYnJhbmQ6ICRicmFuZCwgbWluUHJpY2U6ICRtaW5QcmljZSwgbWF4UHJpY2U6ICRtYXhQcmljZSwgY2F0ZWdvcnk6ICRjYXRlZ29yeSwgcmF0aW5nOiAkcmF0aW5nLCBzb3J0Qnk6ICRzb3J0QnksIHBhZ2U6ICRwYWdlLCBwZXJQYWdlOiAkcGVyUGFnZSwgbGlzdDogJGxpc3QsIGZyb206ICRmcm9tKSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBzaG9ydF9kZXNjIEBpbmNsdWRlKGlmOiAkbGlzdClcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1QgPSBncWxgXHJcbiAgICBxdWVyeSBwcm9kdWN0KCRzbHVnOiBTdHJpbmchLCAkb25seURhdGE6IEJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHByb2R1Y3QoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSwgc2x1ZzogJHNsdWcsIG9ubHlEYXRhOiAkb25seURhdGEpIHtcclxuICAgICAgICAgICAgc2luZ2xlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgc2hvcnRfZGVzY1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmFuZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXYgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbGF0ZWQgQHNraXAoaWY6ICRvbmx5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBzYWxlX3ByaWNlXHJcbiAgICAgICAgICAgICAgICByZXZpZXdcclxuICAgICAgICAgICAgICAgIHJhdGluZ3NcclxuICAgICAgICAgICAgICAgIHVudGlsXHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgbmV3XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNtX3BpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRUxFTUVOVF9QUk9EVUNUUyA9IGdxbGBcclxuICAgIHF1ZXJ5IGVsZW1lbnRQcm9kdWN0cyB7XHJcbiAgICAgICAgZWxlbWVudFByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgc2FsZV9wcmljZVxyXG4gICAgICAgICAgICAgICAgcmV2aWV3XHJcbiAgICAgICAgICAgICAgICByYXRpbmdzXHJcbiAgICAgICAgICAgICAgICB1bnRpbFxyXG4gICAgICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRcclxuICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbV9waWN0dXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yX25hbWVcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9FTEVNRU5UX1BPU1RTID0gZ3FsYFxyXG4gICAgcXVlcnkgZWxlbWVudFBvc3RzIHtcclxuICAgICAgICBlbGVtZW50UG9zdHMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RTX0JZX1BBR0UgPSBncWxgXHJcbiAgICBxdWVyeSBwb3N0c0J5UGFnZSAoJHBhZ2U6IFN0cmluZyEsICRjYXRlZ29yeTogU3RyaW5nKSB7XHJcbiAgICAgICAgcG9zdHNCeVBhZ2UocGFnZTogJHBhZ2UsIGNhdGVnb3J5OiAkY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVCA9IGdxbGBcclxuICAgIHF1ZXJ5IHBvc3QoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICBwb3N0KHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgICAgICAgIHNpbmdsZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yXHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1xyXG4gICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgIGJsb2dfY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWxhdGVkIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBhdXRob3JcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYmxvZ19jYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX0RBVEEgPSBncWxgXHJcbiAgICBxdWVyeSBob21lRGF0YSB7XHJcbiAgICAgICAgaG9tZURhdGEoZGVtbzogJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PfSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHNhbGVfcHJpY2VcclxuICAgICAgICAgICAgICAgIHJldmlld1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nc1xyXG4gICAgICAgICAgICAgICAgdW50aWxcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc21fcGljdHVyZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcl9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBzaXplIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9zdHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGF1dGhvclxyXG4gICAgICAgICAgICAgICAgY29tbWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICBibG9nX2NhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRha2VFdmVyeSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb0NhcnQ6IFwiQUREX1RPX0NBUlRcIixcclxuICAgIHJlbW92ZUZyb21DYXJ0OiBcIlJFTU9WRV9GUk9NX0NBUlRcIixcclxuICAgIHJlZnJlc2hTdG9yZTogXCJSRUZSRVNIX1NUT1JFXCIsXHJcbiAgICB1cGRhdGVDYXJ0OiBcIlVQREFURV9DQVJUXCIsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuYWRkVG9DYXJ0OlxyXG4gICAgICAgICAgICB2YXIgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBhY3Rpb24ucGF5bG9hZC5xdHkgPyBhY3Rpb24ucGF5bG9hZC5xdHkgOiAxO1xyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCAhPT0gLTEgJiYgYWN0aW9uLnBheWxvYWQucHJvZHVjdC52YXJpYW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgZmluZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5uYW1lID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QubmFtZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGZpbmRJbmRleCAhPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YS5yZWR1Y2UoICggYWNjLCBwcm9kdWN0LCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IGluZGV4ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcHJvZHVjdC5xdHkgKyBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlICkgKiAoIHByb2R1Y3QucXR5ICsgcXR5IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKCBwcm9kdWN0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10gKVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlID8gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5zYWxlX3ByaWNlIDogYWN0aW9uLnBheWxvYWQucHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogcXR5ICogKCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgPyBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnNhbGVfcHJpY2UgOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LnByaWNlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXRlbS5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0Lm5hbWUgKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMudXBkYXRlQ2FydDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jYXJ0SXRlbXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIGFkZFRvQ2FydDogKCBwcm9kdWN0LCBxdHkgPSAxICkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuYWRkVG9DYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgICAgICAgICAgcXR5OiBxdHlcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6ICggcHJvZHVjdCApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlbW92ZUZyb21DYXJ0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICB1cGRhdGVDYXJ0OiAoIGNhcnRJdGVtcyApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnVwZGF0ZUNhcnQsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtc1xyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNhcnRTYWdhICgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMuYWRkVG9DYXJ0LCBmdW5jdGlvbiogc2FnYSAoIGUgKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyggXCJQcm9kdWN0IGFkZGVkIHRvIENhcnRcIiApO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNhcnQsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIENhcnRcIiApO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHlpZWxkIHRha2VFdmVyeSggYWN0aW9uVHlwZXMudXBkYXRlQ2FydCwgZnVuY3Rpb24qIHNhZ2EgKCBlICkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoIFwiQ2FydCB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6IFwiY2FydFwiLFxyXG4gICAgc3RvcmFnZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgY2FydFJlZHVjZXIgKTsiLCJpbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBhZGRUb0NvbXBhcmU6ICdBRERfVE9fQ09NUEFSRScsXHJcbiAgICByZW1vdmVGcm9tQ29tcGFyZTogJ1JFTU9WRV9GUk9NX0NPTVBBUkUnLFxyXG4gICAgY2xlYXJBbGxGcm9tQ29tcGFyZTogJ0NMRUFSX0FMTF9GUk9NX0NPTVBBUkUnLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRSdcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBhcmVSZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmU6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QuaWQgKTtcclxuICAgICAgICAgICAgaWYgKCBmaW5kSW5kZXggPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZW1vdmVGcm9tQ29tcGFyZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEuZmlsdGVyKCBpdGVtID0+IGl0ZW0uaWQgIT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuY2xlYXJBbGxGcm9tQ29tcGFyZTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9Db21wYXJlOiBwcm9kdWN0ID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmFkZFRvQ29tcGFyZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgcmVtb3ZlRnJvbUNvbXBhcmU6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbUNvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIGNsZWFyQWxsRnJvbUNvbXBhcmU6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLmNsZWFyQWxsRnJvbUNvbXBhcmUsXHJcbiAgICAgICAgcGF5bG9hZDoge31cclxuICAgIH0gKSxcclxuXHJcbiAgICByZWZyZXNoU3RvcmU6ICgpID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZSxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY29tcGFyZVNhZ2EgKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KCBhY3Rpb25UeXBlcy5hZGRUb0NvbXBhcmUsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gQ29tcGFyZVwiICk7XHJcbiAgICB9ICk7XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6ICdtb2xsYS0nLFxyXG4gICAga2V5OiAnY29tcGFyZScsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBjb21wYXJlUmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBzaG93UXVpY2s6ICdTSE9XX1FVSUNLVklFVycsXHJcbiAgICBoaWRlUXVpY2s6ICdISURFX1FVSUNLVklFVycsXHJcbiAgICBzaG93VmlkZW86ICdTSE9XX1ZJREVPJyxcclxuICAgIGhpZGVWaWRlbzogJ0hJREVfVklERU8nLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRSdcclxufTtcclxuXHJcbmxldCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PLFxyXG4gICAgc2luZ2xlOiBudWxsLFxyXG4gICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgIHZpZGVvU2hvdzogZmFsc2UsXHJcbn07XHJcbmNvbnN0IGRlbW9SZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5zaG93UXVpY2s6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogYWN0aW9uLnBheWxvYWQuc2x1ZyxcclxuICAgICAgICAgICAgICAgIHF1aWNrU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmhpZGVRdWljazpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuc2hvd1ZpZGVvOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlkZW9TaG93OiB0cnVlIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5oaWRlVmlkZW86XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWRlb1Nob3c6IGZhbHNlIH1cclxuXHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5yZWZyZXNoU3RvcmU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcXVpY2tTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZGVvU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICByZWZyZXNoU3RvcmU6ICggY3VycmVudCApID0+ICgge1xyXG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLnJlZnJlc2hTdG9yZSxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcclxuICAgICAgICB9XHJcbiAgICB9ICksXHJcblxyXG4gICAgc2hvd1F1aWNrVmlldzogc2x1ZyA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5zaG93UXVpY2ssXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBzbHVnOiBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgfSApLFxyXG5cclxuICAgIGhpZGVRdWljazogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaGlkZVF1aWNrLFxyXG4gICAgfSApLFxyXG5cclxuICAgIHNob3dWaWRlbzogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuc2hvd1ZpZGVvLFxyXG4gICAgfSApLFxyXG5cclxuICAgIGhpZGVWaWRlbzogKCkgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuaGlkZVZpZGVvXHJcbiAgICB9IClcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleVByZWZpeDogXCJtb2xsYS1cIixcclxuICAgIGtleTogXCJkZW1vXCIsXHJcbiAgICBzdG9yYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKCBwZXJzaXN0Q29uZmlnLCBkZW1vUmVkdWNlciApOyIsImltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIGFkZFRvV2lzaGxpc3Q6ICdBRERfVE9fV0lTSExJU1QnLFxyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0OiAnUkVNT1ZFX0ZST01fV0lTSExJU1QnLFxyXG4gICAgcmVmcmVzaFN0b3JlOiAnUkVGUkVTSF9TVE9SRScsXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG59XHJcblxyXG5jb25zdCB3aXNobGlzdFJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLmFkZFRvV2lzaGxpc3Q6XHJcbiAgICAgICAgICAgIHZhciBmaW5kSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0LmlkICk7XHJcbiAgICAgICAgICAgIGlmICggZmluZEluZGV4ID09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVtb3ZlRnJvbVdpc2hsaXN0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YS5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdC5pZCApXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMucmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkVG9XaXNobGlzdDogcHJvZHVjdCA9PiAoIHtcclxuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5hZGRUb1dpc2hsaXN0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKSxcclxuXHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3Q6IHByb2R1Y3QgPT4gKCB7XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMucmVtb3ZlRnJvbVdpc2hsaXN0LFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdpc2hsaXN0U2FnYSAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoIGFjdGlvblR5cGVzLmFkZFRvV2lzaGxpc3QsIGZ1bmN0aW9uKiBzYWdhICggZSApIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCBcIlByb2R1Y3QgYWRkZWQgdG8gV2lzaGxpc3RcIiApO1xyXG4gICAgfSApXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXlQcmVmaXg6IFwibW9sbGEtXCIsXHJcbiAgICBrZXk6ICd3aXNobGlzdCcsXHJcbiAgICBzdG9yYWdlLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlciggcGVyc2lzdENvbmZpZywgd2lzaGxpc3RSZWR1Y2VyICk7IiwiLyoqXHJcbiAqIGdldCB0b3RhbCBQcmljZSBvZiBwcm9kdWN0cyBpbiBjYXJ0LlxyXG4gKiBAcGFyYW0geyBBcnJheSB9IGNhcnRJdGVtcyBcclxuICogQHJldHVybiB7IEZsb2F0IH0gdG90YWxQcmljZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhcnRQcmljZVRvdGFsID0gY2FydEl0ZW1zID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhY2MgKyBjdXIuc3VtXHJcbiAgICB9LCAwICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXQgbnVtYmVyIG9mIHByb2R1Y3RzIGluIGNhcnRcclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEByZXR1cm4geyBJbnRlZ2VyIH0gbnVtYmVycyBvZiBjYXJ0IGl0ZW1zIGluIGNhcnRsaXN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2FydFF0eVRvdGFsID0gY2FydEl0ZW1zID0+IHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMucmVkdWNlKCAoIGFjYywgY3VyICkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhY2MgKyBwYXJzZUludCggY3VyLnF0eSwgMTAgKTtcclxuICAgIH0sIDAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY2lkZSB3aGVyZSBwcm9kdWN0IGlzIGluIGNhcnQuXHJcbiAqIEBwYXJhbSB7IEFycmF5IH0gY2FydEl0ZW1zIFxyXG4gKiBAcGFyYW0geyBPYmplY3QgfSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5DYXJ0ID0gKCBjYXJ0SXRlbXMsIHByb2R1Y3QgKSA9PiB7XHJcbiAgICByZXR1cm4gY2FydEl0ZW1zLmZpbmQoIGl0ZW0gPT4gaXRlbS5pZCA9PSBwcm9kdWN0LmlkICkgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maXJtIGlmIHByb2R1Y3QgY291bGQgYmUgYWRkZWQgdG8gY2FydC5cclxuICogQHBhcmFtIHsgQXJyYXkgfSBjYXJ0SXRlbXMgXHJcbiAqIEBwYXJhbSB7IE9iamVjdCB9IHByb2R1Y3QgXHJcbiAqIEBwYXJhbSB7IE51bWJlciB9IHF0eSBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjYW5BZGRUb0NhcnQgPSAoIGNhcnRJdGVtcywgcHJvZHVjdCwgcXR5ICkgPT4ge1xyXG4gICAgbGV0IGZpbmQgPSBjYXJ0SXRlbXMuZmluZCggaXRlbSA9PiBpdGVtLmlkID09IHByb2R1Y3QuaWQgKTtcclxuICAgIGlmICggZmluZCApIHtcclxuICAgICAgICBpZiAoIHByb2R1Y3Quc3RvY2sgPT0gMCB8fCAoIHByb2R1Y3Quc3RvY2sgPCAoIGZpbmQucXR5ICsgcXR5ICkgKSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIHByb2R1Y3Quc3RvY2sgPT0gMCB8fCAoIHByb2R1Y3Quc3RvY2sgPCBxdHkgKSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHdpc2hsaXN0IFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvZHVjdCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0luV2lzaGxpc3QgPSAoIHdpc2hsaXN0LCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y3QgJiYgd2lzaGxpc3QuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uc2x1ZyA9PSBwcm9kdWN0LnNsdWcgKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbXBhcmUgXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0IFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzSW5Db21wYXJlID0gKCBjb21wYXJlLCBwcm9kdWN0ICkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y3QgJiYgY29tcGFyZS5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbS5zbHVnID09IHByb2R1Y3Quc2x1ZyApID4gLTE7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gZGV0ZWN0IHNhZmFyaSBicm93c2VyXHJcbiAqIEByZXR1cm4ge2Jvb2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNTYWZhcmlCcm93c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNVc3JBZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBpZiAoIHNVc3JBZy5pbmRleE9mKCAnU2FmYXJpJyApICE9PSAtMSAmJiBzVXNyQWcuaW5kZXhPZiggJ0Nocm9tZScgKSA9PT0gLTEgKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHV0aWxzIHRvIGRldGVjdCBFZGdlIGJyb3dzZXJcclxuICogQHJldHVybiB7Ym9vbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0VkZ2VCcm93c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNVc3JBZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBpZiAoIHNVc3JBZy5pbmRleE9mKCBcIkVkZ2VcIiApID4gLTEgKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogZ2V0IGluZGV4IG9mIHRoZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRJbmRleCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGlmICggZWxlbWVudCA9PSBjaGlsZHJlblsgaSBdICkgcmV0dXJuIGk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmaWx0ZXIgcHJvZHVjdHMgYnkgY2F0ZWdvcnkuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb2R1Y3RzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBjYXRlZ29yeSBcclxuICogQHBhcmFtIHtCb29sZWFufSBmbGFnIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhdEZpbHRlciA9IGZ1bmN0aW9uICggcHJvZHVjdHMgPSBbXSwgY2F0ZWdvcnksIGZsYWcgPSBmYWxzZSApIHtcclxuICAgIGlmICggY2F0ZWdvcnlbIDAgXSA9PT0gJ0FsbCcgKSByZXR1cm4gcHJvZHVjdHM7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlciggaXRlbSA9PiB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnkubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGlmICggaXRlbS5jYXRlZ29yeS5maW5kKCBjYXQgPT4gY2F0LnNsdWcgPT0gY2F0ZWdvcnlbIGkgXSApICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhZmxhZyApIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBmbGFnICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGZsYWcgKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gKVxyXG59XHJcblxyXG4vKipcclxuICogZmlsdGVyIHByb2R1Y3RzIGJ5IGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9kdWN0cyBcclxuICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXR0ckZpbHRlciA9IGZ1bmN0aW9uICggcHJvZHVjdHMgPSBbXSwgYXR0ciApIHtcclxuICAgIC8vIGlmKHByb2R1Y3RzKVxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlciggaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAnYWxsJyApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGF0dHIgPT09ICdzYWxlJyAmJiBpdGVtLnNhbGVfcHJpY2UgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAncmF0ZWQnICYmIGl0ZW0ucmF0aW5ncyA+IDMgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhdHRyID09PSAndW50aWwnICYmIGl0ZW0udW50aWwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1bIGF0dHIgXSA9PT0gdHJ1ZTtcclxuICAgIH0gKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjcm9sbGluZyB0byBQYWdlIGNvbnRlbnQgc2VjdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNjcm9sbFRvUGFnZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2UtY29udGVudCcgKVxyXG4gICAgICAgIC5vZmZzZXRUb3AgLSA3NDtcclxuICAgIGlmICggaXNTYWZhcmlCcm93c2VyKCkgfHwgaXNFZGdlQnJvd3NlcigpICkge1xyXG4gICAgICAgIGxldCBwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHBvcyA8PSB0byApIGNsZWFySW50ZXJ2YWwoIHRpbWVySWQgKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoIDAsIC0xMjAgKTtcclxuICAgICAgICAgICAgICAgIHBvcyAtPSAxMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygge1xyXG4gICAgICAgICAgICB0b3A6IHRvLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1dGlscyB0byBtYWtlIGJhY2tncm91bmQgcGFyYWxsYXhcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJhbGxheCA9ICgpID0+IHtcclxuICAgIGxldCBwYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuYmctcGFyYWxsYXgnICk7XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFyYWxsYXgubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IHkgPSAwO1xyXG4gICAgICAgIGlmICggcGFyYWxsYXhbIGkgXS5jbGFzc0xpc3QuY29udGFpbnMoICdoZWFkZXItcGFyYWxsYXgnICkgKSB7XHJcbiAgICAgICAgICAgIHkgPSAoIDEwIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgKiA0NyAvIDkwMCArIDUwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHkgPSAoIHBhcmFsbGF4WyBpIF0ub2Zmc2V0VG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgKiA0NyAvIHBhcmFsbGF4WyBpIF0ub2Zmc2V0VG9wICsgNTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJhbGxheFsgaSBdLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSB5ICsgJyUnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogdXRpbHMgdG8gc2V0IGNvdW50IHRvIGluIGFib3V0LTJcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb3VudFRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb3VudCcgKTtcclxuXHJcbiAgICBpZiAoIGl0ZW1zICkge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1sgaSBdO1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VJbnQoIGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS10bycgKSwgMTAgKSAtIHBhcnNlSW50KCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJvbScgKSwgMTAgKTtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXNwZWVkJyApLCAxMCApO1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBwYXJzZUludCggaXRlbS5nZXRBdHRyaWJ1dGUoICdkYXRhLXJlZnJlc2gtaW50ZXJ2YWwnICksIDEwICk7XHJcbiAgICAgICAgICAgIGxldCBwdCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgbGV0IGZsYWcgPSAwO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJzY3JvbGxcIiwgY291bnRUb1Njcm9sbEhhbmRsZXIsIHRydWUgKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50VG9TY3JvbGxIYW5kbGVyICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICggcHQgPD0gdGltZSAmJiBoZWlnaHQgPj0gd2luZG93LnBhZ2VZT2Zmc2V0ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggMCA9PT0gZmxhZyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwdCA+PSB0aW1lICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVySWQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IHBhcnNlSW50KCAoIHB0ICogYW1vdW50ICkgLyB0aW1lICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHB0ICsgaW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGludGVydmFsICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IFhzcyBBdHRhY2tcclxuICogQHBhcmFtIHtOb2RlfSBodG1sIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVDb250ZW50ICggaHRtbCApIHtcclxuICAgIGNvbnN0IFNDUklQVF9SRUdFWCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpO1xyXG5cclxuICAgIC8vIFJlbW92aW5nIHRoZSA8c2NyaXB0PiB0YWdzXHJcbiAgICB3aGlsZSAoIFNDUklQVF9SRUdFWC50ZXN0KCBodG1sICkgKSB7XHJcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSggU0NSSVBUX1JFR0VYLCBcIlwiICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZpbmcgYWxsIGV2ZW50cyBmcm9tIHRhZ3MuLi5cclxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoIC8gb25cXHcrPVwiW15cIl0qXCIvZywgXCJcIiApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX19odG1sOiBodG1sXHJcbiAgICB9XHJcbn0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9