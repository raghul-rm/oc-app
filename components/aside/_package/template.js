var oc=oc||{};oc.components=oc.components||{};oc.components['793a9c858f4d7bea8d26031c66d0380235cb8519']=function(model){
  var template = /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./aside/view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./aside/css/styles.css":
/*!******************************!*\
  !*** ./aside/css/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"nav\":\"oc__aside-css-styles-css__nav__2mDzuB3P\"};\n\n//# sourceURL=webpack:///./aside/css/styles.css?");

/***/ }),

/***/ "./aside/view.js":
/*!***********************!*\
  !*** ./aside/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./aside/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar navItems = window.oc.nav.navItems;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var name = _ref.name,\n      staticPath = _ref.staticPath;\n  return '<nav class=\"' + _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default.a.nav + '\">\\n    <ul>\\n    ' + navItems.map(function (item) {\n    return '<li>' + item + '</li>';\n  }).join('') + '\\n    </ul>\\n  </nav>';\n});\n\n//# sourceURL=webpack:///./aside/view.js?");

/***/ })

/******/ });;
  return '' + 
    template.default(model) +
    '<style>.oc__aside-css-styles-css__nav__2mDzuB3P{margin:0;padding:30px 0;width:200px;height:100%;position:relative;background-color:#fff;box-shadow:0 2px 10px rgba(0,0 ,0,.3)}.oc__aside-css-styles-css__nav__2mDzuB3P>ul{margin:0;padding:0;position:relative;list-style:none}.oc__aside-css-styles-css__nav__2mDzuB3P>ul>li{margin:0;padding:8px 20px;background-color:transparent;cursor:pointer}.oc__aside-css-styles-css__nav__2mDzuB3P>ul>li:hover{background-color:#eee}</style><script>window.oc = window.oc || {};oc.cmd = oc.cmd || [];oc.cmd.push(function(oc){oc.events.fire(\'oc:cssDidMount\', \'.oc__aside-css-styles-css__nav__2mDzuB3P{margin:0;padding:30px 0;width:200px;height:100%;position:relative;background-color:#fff;box-shadow:0 2px 10px rgba(0,0 ,0,.3)}.oc__aside-css-styles-css__nav__2mDzuB3P>ul{margin:0;padding:0;position:relative;list-style:none}.oc__aside-css-styles-css__nav__2mDzuB3P>ul>li{margin:0;padding:8px 20px;background-color:transparent;cursor:pointer}.oc__aside-css-styles-css__nav__2mDzuB3P>ul>li:hover{background-color:#eee}\');});</script>'
      
}