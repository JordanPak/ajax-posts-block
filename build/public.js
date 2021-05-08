/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/icons/angle-left.svg":
/*!**********************************!*\
  !*** ./src/icons/angle-left.svg ***!
  \**********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgAngleLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAngleLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-apb-icon": "angle-left",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "currentColor",
    d: "M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1hcGItaWNvbj0iYW5nbGUtbGVmdCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00LjIgMjQ3LjVMMTUxIDk5LjVjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDE5LjggMTkuOGM0LjcgNC43IDQuNyAxMi4zIDAgMTdMNjkuMyAyNTZsMTE4LjUgMTE5LjdjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDE2OCA0MTIuNWMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDQuMiAyNjQuNWMtNC43LTQuNy00LjctMTIuMyAwLTE3eiI+PC9wYXRoPjwvc3ZnPg==");


/***/ }),

/***/ "./src/icons/angle-right.svg":
/*!***********************************!*\
  !*** ./src/icons/angle-right.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgAngleRight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAngleRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-apb-icon": "angle-right",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "currentColor",
    d: "M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1hcGItaWNvbj0iYW5nbGUtcmlnaHQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTkyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTg3LjggMjY0LjVMNDEgNDEyLjVjLTQuNyA0LjctMTIuMyA0LjctMTcgMEw0LjIgMzkyLjdjLTQuNy00LjctNC43LTEyLjMgMC0xN0wxMjIuNyAyNTYgNC4yIDEzNi4zYy00LjctNC43LTQuNy0xMi4zIDAtMTdMMjQgOTkuNWM0LjctNC43IDEyLjMtNC43IDE3IDBsMTQ2LjggMTQ4YzQuNyA0LjcgNC43IDEyLjMgMCAxN3oiPjwvcGF0aD48L3N2Zz4=");


/***/ }),

/***/ "./src/icons/index.js":
/*!****************************!*\
  !*** ./src/icons/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.svg */ "./src/icons/loading.svg");
/* harmony import */ var _angle_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angle-left.svg */ "./src/icons/angle-left.svg");
/* harmony import */ var _angle_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angle-right.svg */ "./src/icons/angle-right.svg");
/**
 * Prep icons
 *
 * @since 1.0.0
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  loading: _loading_svg__WEBPACK_IMPORTED_MODULE_0__["ReactComponent"],
  angleLeft: _angle_left_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"],
  angleRight: _angle_right_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
});

/***/ }),

/***/ "./src/icons/loading.svg":
/*!*******************************!*\
  !*** ./src/icons/loading.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLoading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-apb-icon-spin": "true",
    "data-apb-icon": "loading",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 01-6.94-19.2A184 184 0 11256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0115.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z",
    opacity: 0.4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 01-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 00440 256c0-96.49-74.27-175.63-168.77-183.38z"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1hcGItaWNvbi1zcGluPSJ0cnVlIiBkYXRhLWFwYi1pY29uPSJsb2FkaW5nIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxnPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ3OC43MSAzNjQuNTh6bS0yMiA2LjExbC0yNy44My0xNS45YTE1LjkyIDE1LjkyIDAgMCAxLTYuOTQtMTkuMkExODQgMTg0IDAgMSAxIDI1NiA3MmM1Ljg5IDAgMTEuNzEuMjkgMTcuNDYuODMtLjc0LS4wNy0xLjQ4LS4xNS0yLjIzLS4yMS04LjQ5LS42OS0xNS4yMy03LjMxLTE1LjIzLTE1Ljgzdi0zMmExNiAxNiAwIDAgMSAxNS4zNC0xNkMyNjYuMjQgOC40NiAyNjEuMTggOCAyNTYgOCAxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDhjOTggMCAxODIuNDItNTYuOTUgMjIyLjcxLTEzOS40Mi00LjEzIDcuODYtMTQuMjMgMTAuNTUtMjIgNi4xMXoiIG9wYWNpdHk9IjAuNCI+PC9wYXRoPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI3MS4yMyA3Mi42MmMtOC40OS0uNjktMTUuMjMtNy4zMS0xNS4yMy0xNS44M1YyNC43M2MwLTkuMTEgNy42Ny0xNi43OCAxNi43Ny0xNi4xN0M0MDEuOTIgMTcuMTggNTA0IDEyNC42NyA1MDQgMjU2YTI0NiAyNDYgMCAwIDEtMjUgMTA4LjI0Yy00IDguMTctMTQuMzcgMTEtMjIuMjYgNi40NWwtMjcuODQtMTUuOWMtNy40MS00LjIzLTkuODMtMTMuMzUtNi4yLTIxLjA3QTE4Mi41MyAxODIuNTMgMCAwIDAgNDQwIDI1NmMwLTk2LjQ5LTc0LjI3LTE3NS42My0xNjguNzctMTgzLjM4eiI+PC9wYXRoPjwvZz48L3N2Zz4=");


/***/ }),

/***/ "./src/public/blocks/index.js":
/*!************************************!*\
  !*** ./src/public/blocks/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ "./src/public/blocks/posts/index.js");
/**
 * Front-end functionality for custom blocks
 *
 * @since 1.0.0
 */


/***/ }),

/***/ "./src/public/blocks/posts/index.js":
/*!******************************************!*\
  !*** ./src/public/blocks/posts/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post */ "./src/public/blocks/posts/post.js");
/* harmony import */ var _prev_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prev-next */ "./src/public/blocks/posts/prev-next.js");







function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * AJAX posts block handling
 *
 * @since 1.0.0
 */







var AJAXPostsBlock = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AJAXPostsBlock, _Component);

  var _super = _createSuper(AJAXPostsBlock);

  /**
   * Spin up component
   *
   * @since 1.0.0
   *
   * @param {Object} props Component properties
   */
  function AJAXPostsBlock(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AJAXPostsBlock);

    _this = _super.call(this, props);
    _this.state = {
      hasLoaded: false,
      currentPage: 1,
      height: 0
    };
    return _this;
  }
  /**
   * Grab initial posts on load
   *
   * @since 1.0.0
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AJAXPostsBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPosts();
    }
    /**
     * Check if new posts need to be fetched
     *
     * @param {Object} prevProps Props before state was changed.
     * @param {*} prevState State before state was changed.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Grab new posts if the page or other props changed.
      if (prevState.currentPage !== this.state.currentPage || prevProps.num !== this.props.num || prevProps.postTypes !== this.props.postTypes || prevProps.categories !== this.props.categories || prevProps.tags !== this.props.tags) {
        this.getPosts();
      } // Set initial minimum height so paging is less jarring.


      if (this.state.height === 0) {
        this.setState({
          height: this.heightSensor.clientHeight
        });
      }
    }
    /**
     * Display the loading UI
     *
     * @since 1.0.0
     *
     * @return {Object} Loader react element.
     */

  }, {
    key: "renderLoader",
    value: function renderLoader() {
      // If the loading element property has its own properties, it's the
      // element from the editor view and can be rendered out as-is.
      return this.props.loadingEl.props ? this.props.loadingEl : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: this.props.loadingEl.className,
        dangerouslySetInnerHTML: {
          __html: this.props.loadingEl.innerHTML
        }
      });
    }
    /**
     * Grab posts from the site's REST API
     *
     * @since 1.0.0
     */

  }, {
    key: "getPosts",
    value: function getPosts() {
      var _this2 = this;

      var _this$props = this.props,
          num = _this$props.num,
          postTypes = _this$props.postTypes,
          categories = _this$props.categories,
          tags = _this$props.tags;
      var currentPage = this.state.currentPage;
      var headers = null; // Build out args array, removing those that are empty

      var args = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.omitBy({
        apb_query: true,
        page: currentPage,
        per_page: num,
        type: postTypes || null,
        categories: categories || null,
        tags: tags || null,
        _embed: true
      }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isNil);

      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_8___default()({
        path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])('/wp/v2/posts', args),
        parse: false
      }).then(function (response) {
        headers = response.headers;
        return response.json();
      }).then(function (posts) {
        // to get total posts: Number( headers.get( 'x-wp-total' ) )
        var totalPages = Number(headers.get('x-wp-totalpages'));

        _this2.setState({
          posts: posts.length > 0 ? posts : false,
          hasLoaded: true,
          hasPages: totalPages > 1,
          totalPages: totalPages
        });
      });
    }
    /**
     * Page posts forward or back
     *
     * @since 1.0.0
     *
     * @param {string} page Page to page to #roight
     */

  }, {
    key: "doPage",
    value: function doPage(page) {
      this.setState({
        posts: [],
        hasLoaded: false,
        currentPage: page
      });
    }
    /**
     * Page to older posts
     *
     * +1 is kinda counter-intuive but our posts are ordered from newest to
     * oldest.
     *
     * @since 1.0.0
     */

  }, {
    key: "doPreviousPage",
    value: function doPreviousPage() {
      this.doPage(this.state.currentPage + 1);
    }
    /**
     * Page to newer posts
     *
     * -1 is kinda counter-intuive but our posts are ordered from newest to
     * oldest.
     *
     * @since 1.0.0
     */

  }, {
    key: "doNextPage",
    value: function doNextPage() {
      this.doPage(this.state.currentPage - 1);
    }
    /**
     * Render out posts with navigation or "none found" message.
     *
     * @return {Object} Posts + pagination or "none" message react element.
     */

  }, {
    key: "renderPosts",
    value: function renderPosts() {
      var _this$state = this.state,
          posts = _this$state.posts,
          currentPage = _this$state.currentPage,
          totalPages = _this$state.totalPages;

      if (posts.length > 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
          className: "apb-posts-list"
        }, posts.map(function (post, index) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
            key: index
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_post__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: post.title,
            link: post.link,
            date: post.date,
            excerpt: post.excerpt,
            embeds: post._embedded
          }));
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_prev_next__WEBPACK_IMPORTED_MODULE_10__["default"], {
          pages: totalPages,
          currentPage: currentPage,
          onPrevious: this.doPreviousPage.bind(this),
          onNext: this.doNextPage.bind(this)
        }));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, "NOTHING BRO");
    }
    /**
     * Output main block contents
     *
     * @since 1.0.0
     *
     * @return {Object} Main block contents.
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          hasLoaded = _this$state2.hasLoaded,
          height = _this$state2.height;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "apb-posts-block-wrap",
        style: {
          minHeight: height
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "apb-height-sensor",
        ref: function ref(heightSensor) {
          _this3.heightSensor = heightSensor;
        }
      }), hasLoaded ? this.renderPosts() : this.renderLoader());
    }
  }]);

  return AJAXPostsBlock;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]); // Process each block


var blocks = document.getElementsByClassName('wp-block-ajax-posts-block-posts');

var _iterator = _createForOfIteratorHelper(blocks),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var block = _step.value;
    var _block$dataset = block.dataset,
        num = _block$dataset.num,
        types = _block$dataset.types,
        categories = _block$dataset.categories,
        tags = _block$dataset.tags;
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(AJAXPostsBlock, {
      num: Number(num),
      postTypes: types,
      categories: categories,
      tags: tags,
      loadingEl: block.querySelector('.apb-loading')
    }), block);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/* harmony default export */ __webpack_exports__["default"] = (AJAXPostsBlock);

/***/ }),

/***/ "./src/public/blocks/posts/post.js":
/*!*****************************************!*\
  !*** ./src/public/blocks/posts/post.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Post component
 *
 * @since 1.0.0
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      link = _ref.link,
      date = _ref.date,
      excerpt = _ref.excerpt,
      embeds = _ref.embeds;
  date = new Date(date);
  var ftMedia = false,
      ftSize = false;

  if (embeds['wp:featuredmedia']) {
    ftMedia = embeds['wp:featuredmedia'][0];
    var sizes = ftMedia.media_details.sizes;
    ftSize = sizes.medium ? sizes.medium : sizes.thumbnail;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: link
  }, ftSize && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: ftSize.source_url,
    width: ftSize.width,
    height: ftSize.height,
    alt: ftMedia.alt_text
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "apb-post-details"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "apb-post-title"
  }, title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "apb-post-meta"
  }, embeds.author.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "apb-post-author"
  }, "by ", embeds.author[0].name), ' '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "apb-post-date"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])( // Translators: on %s (date).
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('on %s', 'ajax-posts-block'), date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], {
    className: "apb-post-excerpt"
  }, excerpt.rendered)));
});

/***/ }),

/***/ "./src/public/blocks/posts/prev-next.js":
/*!**********************************************!*\
  !*** ./src/public/blocks/posts/prev-next.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icons */ "./src/icons/index.js");


/**
 * Previous/next posts paging component
 *
 * @since 1.0.0
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var pages = _ref.pages,
      currentPage = _ref.currentPage,
      onPrevious = _ref.onPrevious,
      onNext = _ref.onNext;
  return pages > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("nav", {
    className: "apb-prev-next wp-block-buttons"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-block-button__link apb-prev-next-button",
    disabled: currentPage === pages,
    onClick: onPrevious
  }, _icons__WEBPACK_IMPORTED_MODULE_1__["default"].angleLeft(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, apbHelper.previous))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-block-button__link apb-prev-next-button",
    disabled: currentPage === 1,
    onClick: onNext
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, apbHelper.next), _icons__WEBPACK_IMPORTED_MODULE_1__["default"].angleRight()))) : null;
});

/***/ }),

/***/ "./src/public/index.js":
/*!*****************************!*\
  !*** ./src/public/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/public/blocks/index.js");
/**
 * Front end-only CSS and JS
 *
 * @since 1.0.0
 */


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=public.js.map