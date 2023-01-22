/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const decrementor = __webpack_require__(/*! ./decrementor */ \"./src/decrementor.js\")\r\nconst incrementor = __webpack_require__(/*! ./incrementor */ \"./src/incrementor.js\")\r\n\r\nexports.genericBtn = function (btnClass) {\r\n    if (btnClass == 'inc') {\r\n        incrementor.incrementor(btnClass)\r\n    }\r\n    else if(btnClass == 'dec') {\r\n        decrementor.decrementor(btnClass)\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-way/./src/common.js?");

/***/ }),

/***/ "./src/decrementor.js":
/*!****************************!*\
  !*** ./src/decrementor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const setter = __webpack_require__(/*! ./setter */ \"./src/setter.js\");\r\n\r\nexports.decrementor = function(condition) {\r\n    setter.setter(condition)\r\n}\n\n//# sourceURL=webpack://webpack-way/./src/decrementor.js?");

/***/ }),

/***/ "./src/incrementor.js":
/*!****************************!*\
  !*** ./src/incrementor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const setter = __webpack_require__(/*! ./setter */ \"./src/setter.js\");\r\n\r\nexports.incrementor = function(condition) {\r\n    setter.setter(condition)\r\n}\n\n//# sourceURL=webpack://webpack-way/./src/incrementor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const common = __webpack_require__(/*! ./common */ \"./src/common.js\");\r\n\r\n$('#decrement').on('click', function() {\r\n    common.genericBtn('dec')\r\n})\r\n\r\n$('#increment').on('click', function() {\r\n    common.genericBtn('inc')\r\n})\r\n\r\n// document.addEventListener('DOMContentLoaded', () => {\r\n    // const btnDec = document.getElementById('decrement')\r\n    // const btnInc = document.getElementById('increment')\r\n    // $('#decrement').on('click', function() {\r\n    //     common.genericBtn('dec')\r\n    // })\r\n    // btnDec.addEventListener('click', common.genericBtn('dec'))\r\n    // btnDec.addEventListener('click', () => {\r\n    //     console.log(common.genericBtn)\r\n    //     common.genericBtn('dec')\r\n    // })\r\n    // btnInc.addEventListener('click', () => {\r\n    //     common.genericBtn('inc')\r\n    // })\r\n// })\n\n//# sourceURL=webpack://webpack-way/./src/index.js?");

/***/ }),

/***/ "./src/setter.js":
/*!***********************!*\
  !*** ./src/setter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.setter = function(condition) {\r\n    const number = document.querySelector('.number');\r\n    let val = +number.innerText;\r\n    if(condition == 'dec') {\r\n        val--;\r\n        number.innerText = val\r\n    }\r\n    else if(condition == 'inc') {\r\n        val++;\r\n        number.innerText = val\r\n    }\r\n};\n\n//# sourceURL=webpack://webpack-way/./src/setter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;