/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_base.js":
/*!*************************!*\
  !*** ./src/js/_base.js ***!
  \*************************/
/***/ (function() {

eval("$(function () {\n  $(document).ready(function () {\n    $(\"#floatingBelow\").hide();\n    $(window).on(\"scroll\", function () {\n      if ($(this).scrollTop() > 100) {\n        $(\"#floatingBelow\").fadeIn(\"slow\");\n      } else {\n        $(\"#floatingBelow\").fadeOut(\"fast\");\n      }\n\n      scrollHeight = $(document).height();\n      scrollPosition = $(window).height() + $(window).scrollTop();\n      footHeight = $(\".l-footer__inner\").innerHeight();\n\n      if (window.matchMedia(\"screen and (min-width:1000px)\").matches) {\n        footerAjust = 110;\n        bottom = '60px';\n      } else {\n        footerAjust = 25;\n        bottom = '30px';\n      }\n\n      if (scrollHeight - scrollPosition <= footHeight) {\n        $(\"#floatingBelow\").css({\n          \"position\": \"absolute\",\n          \"bottom\": footHeight + footerAjust\n        });\n      } else {\n        $(\"#floatingBelow\").css({\n          \"position\": \"fixed\",\n          \"bottom\": bottom\n        });\n      }\n    });\n  }); // if (window.matchMedia(\"screen and (max-width:999px)\").matches) {\n  // \t// ハンバーガーメニュー\n  // \t$('.header__trigger').on('click', function () {\n  // \t\t$('.header__trigger-line').toggleClass('is-active');\n  // \t\treturn false;\n  // \t});\n  // \tvar state = false;\n  // \t$('.header__trigger').on('click', function () {\n  // \t\t$(\".navi-drawer\").fadeToggle();\n  // \t\t\t$('.header__inner').toggleClass('is-hide');\n  // \t\tif (state == false) {\n  // \t\t\t$('html, body').css('overflow', 'hidden');\n  // \t\t\t$(\"body\").addClass('is-open');\n  // \t\t\tstate = true;\n  // \t\t} else {\n  // \t\t\t$('html, body').css('overflow', 'auto');\n  // \t\t\t$(\"body\").removeClass('is-open');\n  // \t\t\tstate = false;\n  // \t\t}\n  // \t});\n  // }\n\n  $('a[href^=\"#\"]').click(function () {\n    var adjust = 0;\n    var speed = 400;\n    var href = $(this).attr(\"href\");\n    var target = $(href == \"#\" || href == \"\" ? 'html' : href);\n    var position = target.offset().top + adjust;\n    $('body,html').animate({\n      scrollTop: position\n    }, speed, 'swing');\n    return false;\n  });\n  $('.navi-drawer a[href*=\"#\"]').on('click', function (event) {\n    $('.header__trigger').trigger('click');\n  });\n}); //100vh\n\nvar vh = window.innerHeight * 0.01;\ndocument.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\")); //360px以下スケーリング\n\n!function () {\n  var viewport = document.querySelector('meta[name=\"viewport\"]');\n\n  function switchViewport() {\n    var value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';\n\n    if (viewport.getAttribute('content') !== value) {\n      viewport.setAttribute('content', value);\n    }\n  }\n\n  addEventListener('resize', switchViewport, false);\n  switchViewport(); // ハンバーガー開閉時のスクロールバー調整\n\n  $(document).on(\"click\", \".js-click-open\", function () {\n    クリックすると;\n    $('html').toggleClass('noscroll');\n    $('body').toggleClass('ov');\n  });\n}();\n\n//# sourceURL=webpack://gulp-essentials/./src/js/_base.js?");

/***/ }),

/***/ "./src/js/_common.js":
/*!***************************!*\
  !*** ./src/js/_common.js ***!
  \***************************/
/***/ (function() {

eval("$(function () {\n  if (window.matchMedia(\"screen and (max-width:666px)\").matches) {\n    $('.c-topics').each(function () {\n      $(this).find('.c-topics__img').appendTo($(this).find('.c-topics__ttl'));\n    });\n    $('.c-topics-s__item').each(function () {\n      $(this).find('.c-topics-s__cat').insertAfter($(this).find('.c-topics-s__time'));\n    });\n  }\n\n  ;\n  $(window).on('load', function () {\n    var url = $(location).attr('href'),\n        headerHeight = $('header').outerHeight() + 200;\n  });\n});\n\n//# sourceURL=webpack://gulp-essentials/./src/js/_common.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var main = __webpack_require__(/*! ./_base.js */ \"./src/js/_base.js\");\n\nvar common = __webpack_require__(/*! ./_common.js */ \"./src/js/_common.js\");\n\n//# sourceURL=webpack://gulp-essentials/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;