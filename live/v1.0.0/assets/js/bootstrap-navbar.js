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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bootstrap-navbar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bootstrap-navbar.js":
/*!************************************!*\
  !*** ./src/js/bootstrap-navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/*eslint-disable*/\r\n\r\n\r\n/*-----------------------------------------------\r\n|   Top navigation opacity on scroll\r\n-----------------------------------------------*/\r\nconst navbarInit = () => {\r\n\tconst Selector = {\r\n\t\tNAV_ITEM: '.nav-item',\r\n\t\tNAVBAR: '.navbar',\r\n\t\tDROPDOWN: '.dropdown'\r\n\t};\r\n\r\n\t_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resize(() => {\r\n\t\tlet navElements = document.querySelectorAll('.nav-item');\r\n\t\tnavElements.forEach(item => {\r\n\t\t\titem.removeAttribute('style');\r\n\t\t});\r\n\t\tlet dropElements = document.querySelectorAll('.category-list');\r\n\t\tdropElements.forEach(item => {\r\n\t\t\titem.innerHTML = ' ';\r\n\t\t});\r\n\t\tnavbar();\r\n\t});\r\n\r\n\tconst navbar = () => {\r\n\t\tlet totalWidth = 0;\r\n\r\n\t\tlet nav = document.querySelector(Selector.NAVBAR).clientWidth;\r\n\r\n\t\tlet dropdown = document.querySelector('.dropdown').clientWidth;\r\n\r\n\t\t// let navbarNav = document.querySelector('.navbar-nav').clientWidth;\r\n\r\n\t\tlet navbarWidth = nav - dropdown;\r\n\r\n\t\tlet elements = document.querySelectorAll('.nav-item');\r\n\r\n\t\telements.forEach(item => {\r\n\t\t\tlet itemWidth = item.clientWidth;\r\n\r\n\t\t\ttotalWidth = totalWidth + itemWidth;\r\n\r\n\t\t\tif (totalWidth > navbarWidth) {\r\n\t\t\t\tif (!item.classList.contains('dropdown')) {\r\n\t\t\t\t\titem.style.display = 'none';\r\n\t\t\t\t\tlet link = item.firstChild;\r\n\t\t\t\t\tlet linkItem = link.cloneNode(true);\r\n\r\n\t\t\t\t\tdocument.querySelector('.category-list').appendChild(linkItem);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlet dropdownMenu = document.querySelectorAll('.dropdown-menu .nav-link');\r\n\r\n\t\tdropdownMenu.forEach(item => {\r\n\t\t\titem.classList.remove('nav-link');\r\n\t\t\titem.classList.add('dropdown-item');\r\n\t\t});\r\n\t};\r\n\r\n\twindow.addEventListener('load', event => {\r\n\t\tnavbar();\r\n\t});\r\n\r\n\tnavbar();\r\n\r\n\t// Toggle bg class on window resize\r\n\r\n\tlet backToToP = document.querySelector('.back-to-top');\r\n\tlet navbarEl = document.querySelector('.navbar');\r\n\r\n\tlet myScrollFunc = function () {\r\n\t\tlet y = window.scrollY;\r\n\t\tif (y >= 540) {\r\n\t\t\tbackToToP.style.opacity = '1';\r\n\t\t\tnavbarEl.classList.add('sticky-top');\r\n\t\t\tnavbarEl.classList.add('bg-white');\r\n\t\t} else {\r\n\t\t\tbackToToP.style.opacity = '0';\r\n\t\t\tnavbarEl.classList.remove('bg-light');\r\n\t\t}\r\n\t};\r\n\r\n\tlet navbarLink = document.querySelectorAll('.nav-link');\r\n\r\n\tdocument.addEventListener('click', function (e) {\r\n\t\tfor (let x = 0; x < navbarLink.length; x++) {\r\n\t\t\tnavbarLink[x].classList.remove('active');\r\n\t\t}\r\n\r\n\t\te.target.closest('li').classList.add('active');\r\n\t});\r\n\r\n\twindow.addEventListener('scroll', myScrollFunc);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarInit);\r\n\n\n//# sourceURL=webpack:///./src/js/bootstrap-navbar.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* -------------------------------------------------------------------------- */\r\n/*                                    Utils                                   */\r\n/* -------------------------------------------------------------------------- */\r\nconst docReady = (fn) => {\r\n  // see if DOM is already available\r\n  if (document.readyState === \"loading\") {\r\n    document.addEventListener(\"DOMContentLoaded\", fn);\r\n  } else {\r\n    setTimeout(fn, 1);\r\n  }\r\n};\r\n\r\nconst resize = (fn) => window.addEventListener(\"resize\", fn);\r\n\r\nconst isIterableArray = (array) => Array.isArray(array) && !!array.length;\r\n\r\nconst camelize = (str) => {\r\n  const text = str.replace(/[-_\\s.]+(.)?/g, (_, c) =>\r\n    c ? c.toUpperCase() : \"\"\r\n  );\r\n  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;\r\n};\r\n\r\nconst getData = (el, data) => {\r\n  try {\r\n    return JSON.parse(el.dataset[camelize(data)]);\r\n  } catch (e) {\r\n    return el.dataset[camelize(data)];\r\n  }\r\n};\r\n\r\n/* ----------------------------- Colors function ---------------------------- */\r\n\r\nconst hexToRgb = (hexValue) => {\r\n  let hex;\r\n  hexValue.indexOf(\"#\") === 0\r\n    ? (hex = hexValue.substring(1))\r\n    : (hex = hexValue);\r\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\r\n  const shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\r\n  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(\r\n    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)\r\n  );\r\n  return result\r\n    ? [\r\n        parseInt(result[1], 16),\r\n        parseInt(result[2], 16),\r\n        parseInt(result[3], 16),\r\n      ]\r\n    : null;\r\n};\r\n\r\nconst rgbaColor = (color = \"#fff\", alpha = 0.5) =>\r\n  `rgba(${hexToRgb(color)}, ${alpha})`;\r\n\r\n/* --------------------------------- Colors --------------------------------- */\r\n\r\nconst colors = {\r\n  primary: \"#0091e9\",\r\n  secondary: \"#002147\",\r\n  success: \"#00d27a\",\r\n  info: \"#27bcfd\",\r\n  warning: \"#FFC928\",\r\n  danger: \"#EE4D47\",\r\n  light: \"#F9FAFD\",\r\n  dark: \"#000\",\r\n};\r\n\r\nconst grays = {\r\n  white: \"#fff\",\r\n  100: \"#f9fafd\",\r\n  200: \"#edf2f9\",\r\n  300: \"#d8e2ef\",\r\n  400: \"#b6c1d2\",\r\n  500: \"#9da9bb\",\r\n  600: \"#748194\",\r\n  700: \"#5e6e82\",\r\n  800: \"#4d5969\",\r\n  900: \"#344050\",\r\n  1000: \"#232e3c\",\r\n  1100: \"#0b1727\",\r\n  black: \"#000\",\r\n};\r\n\r\nconst hasClass = (el, className) => {\r\n  !el && false;\r\n  return el.classList.value.includes(className);\r\n};\r\n\r\nconst addClass = (el, className) => {\r\n  el.classList.add(className);\r\n};\r\n\r\nconst getOffset = (el) => {\r\n  const rect = el.getBoundingClientRect();\r\n  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;\r\n  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\r\n};\r\n\r\nconst isScrolledIntoView = (el) => {\r\n  let top = el.offsetTop;\r\n  let left = el.offsetLeft;\r\n  const width = el.offsetWidth;\r\n  const height = el.offsetHeight;\r\n\r\n  while (el.offsetParent) {\r\n    // eslint-disable-next-line no-param-reassign\r\n    el = el.offsetParent;\r\n    top += el.offsetTop;\r\n    left += el.offsetLeft;\r\n  }\r\n\r\n  return {\r\n    all:\r\n      top >= window.pageYOffset &&\r\n      left >= window.pageXOffset &&\r\n      top + height <= window.pageYOffset + window.innerHeight &&\r\n      left + width <= window.pageXOffset + window.innerWidth,\r\n    partial:\r\n      top < window.pageYOffset + window.innerHeight &&\r\n      left < window.pageXOffset + window.innerWidth &&\r\n      top + height > window.pageYOffset &&\r\n      left + width > window.pageXOffset,\r\n  };\r\n};\r\n\r\nconst breakpoints = {\r\n  xs: 0,\r\n  sm: 576,\r\n  md: 768,\r\n  lg: 992,\r\n  xl: 1200,\r\n  xxl: 1540,\r\n};\r\n\r\nconst getBreakpoint = (el) => {\r\n  const classes = el && el.classList.value;\r\n  let breakpoint;\r\n  if (classes) {\r\n    breakpoint =\r\n      breakpoints[\r\n        classes\r\n          .split(\" \")\r\n          .filter((cls) => cls.includes(\"navbar-expand-\"))\r\n          .pop()\r\n          .split(\"-\")\r\n          .pop()\r\n      ];\r\n  }\r\n  return breakpoint;\r\n};\r\n\r\n/* --------------------------------- Cookie --------------------------------- */\r\n\r\nconst setCookie = (name, value, expire) => {\r\n  const expires = new Date();\r\n  expires.setTime(expires.getTime() + expire);\r\n  document.cookie = name + \"=\" + value + \";expires=\" + expires.toUTCString();\r\n};\r\n\r\nconst getCookie = (name) => {\r\n  var keyValue = document.cookie.match(\"(^|;) ?\" + name + \"=([^;]*)(;|$)\");\r\n  return keyValue ? keyValue[2] : keyValue;\r\n};\r\n\r\nconst settings = {\r\n  tinymce: {\r\n    theme: \"oxide\",\r\n  },\r\n  chart: {\r\n    borderColor: \"rgba(255, 255, 255, 0.8)\",\r\n  },\r\n};\r\n\r\n/* -------------------------- Chart Initialization -------------------------- */\r\n\r\nconst newChart = (chart, config) => {\r\n  const ctx = chart.getContext(\"2d\");\r\n  return new window.Chart(ctx, config);\r\n};\r\n\r\n/* ---------------------------------- Store --------------------------------- */\r\n\r\nconst getItemFromStore = (key, defaultValue, store = localStorage) => {\r\n  try {\r\n    return JSON.parse(store.getItem(key)) || defaultValue;\r\n  } catch {\r\n    return store.getItem(key) || defaultValue;\r\n  }\r\n};\r\n\r\nconst setItemToStore = (key, payload, store = localStorage) =>\r\n  store.setItem(key, payload);\r\nconst getStoreSpace = (store = localStorage) =>\r\n  parseFloat(\r\n    (\r\n      escape(encodeURIComponent(JSON.stringify(store))).length /\r\n      (1024 * 1024)\r\n    ).toFixed(2)\r\n  );\r\n\r\nconst utils = {\r\n  docReady,\r\n  resize,\r\n  isIterableArray,\r\n  camelize,\r\n  getData,\r\n  hasClass,\r\n  addClass,\r\n  hexToRgb,\r\n  rgbaColor,\r\n  colors,\r\n  grays,\r\n  getOffset,\r\n  isScrolledIntoView,\r\n  getBreakpoint,\r\n  setCookie,\r\n  getCookie,\r\n  newChart,\r\n  settings,\r\n  getItemFromStore,\r\n  setItemToStore,\r\n  getStoreSpace,\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\r\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });