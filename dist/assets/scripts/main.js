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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar template = \"<div class=\\\"about-container\\\" id=\\\"about\\\">\\n                <div class=\\\"about-img\\\"></div>\\n                <div class=\\\"about-content\\\">\\n                <h1 class=\\\"about-header\\\">About Ghana Cuisine</h1>\\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis molestias. Soluta natus\\n                    temporibus aspernatur veniam ab voluptatum repellendus saepe delectus quia ea, veritatis inventore\\n                    incidunt nulla fugiat earum, aliquam doloremque animi laudantium libero doloribus id corporis ipsam\\n                    quo. Fugiat maxime dicta natus eum, nihil eaque est animi soluta iure molestias fuga provident minus\\n                    nesciunt debitis veniam. Laudantium cupiditate neque quam velit? Omnis distinctio facilis cumque\\n                    odit? Molestias delectus eius nesciunt ab itaque ipsa, ullam repellat odio commodi sed, eum tempore\\n                    velit! Quas quidem mollitia, enim obcaecati debitis deserunt quasi aliquam error labore similique\\n                    dolor consequatur. Itaque fuga aliquam nulla.\\n                </div>\\n                </div>\";\nvar node = document.getElementById('content');\n\nvar render = function render(template, node) {\n  var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.createElement('div');\n  container.classList.add('about');\n  container.innerHTML = template;\n  node.appendChild(container);\n};\n\nfunction about(num) {\n  var i = 0;\n\n  while (i < num) {\n    render(template, node);\n    i += 1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar template = \"<div class=\\\"card shadow\\\">\\n            <div class=\\\"card-img\\\">\\n                \\n            </div>\\n            <div class=\\\"card-heading\\\">\\n                <h4 class=\\\"card-title\\\">Banku and Tilapia</h4>\\n                <p class=\\\"card-subtitle\\\">Banku with Okro soup at your service</p>\\n            </div>\\n            <div class=\\\"card-action\\\">\\n                <a href=\\\"#\\\" class=\\\"card-price\\\">$230</a>\\n            </div>\\n            </div>\";\nvar node = document.getElementById('content'); // render about template when function is called\n\nvar render = function render(template, node) {\n  var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.createElement('div');\n  container.classList.add('grid');\n  container.innerHTML = template;\n  node.appendChild(container);\n};\n\nfunction spitNum(num) {\n  var i = 0;\n\n  while (i < num) {\n    render(template, node);\n    i += 1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (spitNum);\n\n//# sourceURL=webpack:///./src/card.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\nvar moreBtn = document.querySelector('.loader');\nvar ul = document.querySelector('.navbar-ul');\nvar content = document.getElementById('content');\nvar home = document.getElementById('home');\nvar abt = document.getElementById('abt');\nmoreBtn.addEventListener('click', function () {\n  Object(_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n}); // loads about 5 cards when the dom loads\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n  moreBtn.classList.remove('d-none');\n});\nul.addEventListener('click', function (e) {\n  if (e.srcElement.id === 'abt') {\n    content.classList.remove('grid-container');\n    e.target.parentElement.classList.add('active');\n    content.innerHTML = '';\n    home.parentElement.classList.remove('active');\n    moreBtn.classList.add('d-none');\n    Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1);\n  } else if (e.srcElement.id === 'home') {\n    content.classList.add('grid-container');\n    content.innerHTML = '';\n    moreBtn.classList.remove('d-none');\n    home.parentElement.classList.add('active');\n    abt.parentElement.classList.remove('active');\n    Object(_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });