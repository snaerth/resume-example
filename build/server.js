module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLanguage = setLanguage;
exports.revealAnimationForward = revealAnimationForward;
exports.revealAnimationBackward = revealAnimationBackward;
exports.removePageLoading = removePageLoading;
exports.addPageLoading = addPageLoading;

var _is = __webpack_require__(43);

var _is2 = _interopRequireDefault(_is);

var _en = __webpack_require__(19);

var _en2 = _interopRequireDefault(_en);

var _types = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setLanguage(lang) {
  return {
    type: _types.SET_LANGUAGE,
    payload: {
      translations: lang === 'is' ? _is2.default : _en2.default,
      lang: lang || 'en'
    }
  };
}

function revealAnimationForward() {
  return { type: _types.REVEAL_ANIMATION_FORWARD };
}

function revealAnimationBackward(backButtonPressed) {
  return { type: _types.REVEAL_ANIMATION_BACKWARD, payload: backButtonPressed };
}

function removePageLoading() {
  return function (dispatch) {
    var minTime = 500;
    var now = new Date();
    var next = new Date();
    var timeDiff = next.getTime() - now.getTime();
    if (timeDiff < minTime) {
      var delay = minTime - timeDiff;
      setTimeout(function () {
        window.document.body.classList.remove('loading');
        dispatch({ type: _types.REMOVE_PAGE_LOADING });
      }, delay);
    } else {
      window.document.body.classList.remove('loading');
      return { type: _types.REMOVE_PAGE_LOADING };
    }
  };
}

function addPageLoading() {
  window.document.body.classList.add('loading');
  return { type: _types.ADD_PAGE_LOADING };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(51);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(28);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(17);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configureStore;

var _redux = __webpack_require__(6);

var _reducers = __webpack_require__(34);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(37);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
    var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
        return f;
    }));
    return store;
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"name":"Snær Seljan Þóroddsson","firstName":"snær seljan","lastName":"þóroddsson","email":"snaerth@gmail.com","sendEmail":"Contact me","back":"Back","more":"More","resume":"Resume","contact":{"title":"Contact me","text":"If you'd like to get in touch, you can send me an email directly at <a href='mailto:snaerth@gmail.com' title='Send mail to snaerth@gmail.com'>snaerth@gmail.com</a> or message me on <a href='https://www.facebook.com/snaerth' title='Facebook'>Facebook</a>","email":"snaerth@gmail.com","buttonText":"Send me an email"},"nav":[{"id":1,"text":"about me","active":true},{"id":2,"text":"education","active":false},{"id":3,"text":"career","active":false},{"id":4,"text":"skills","active":false},{"id":5,"text":"projects","active":false}],"career":{"title":"Career","rows":[{"title":"Advania","secondTitle":"2014-2017","content":"At Advania I have worked on many various projects as a web developer for the past 3 years. I have good experience in both front- and backend development. I have programmed large websites and web services both REST and SOAP. My main strength lies in Javascript and CSS, more specifically in Node.js, React with Redux, SASS, LESS and CSS Modules."},{"title":"Launafl ehf.","secondTitle":"2012-2013","content":"Electricity work."},{"title":"Seljaskóli","secondTitle":"2009-2012","content":"Middle school teacher in Seljaskóli. I also taught optional subjects such as physical education, Icelandic wrestling, football and general sports."},{"title":"Ungmennafélagið Valur","secondTitle":"2010-2012","content":"Summer course supervisor for children´s Youth Program Valur in Reyðarfjörður."},{"title":"Ármann","secondTitle":"2009-2012","content":"Icelandic Glima wrestling coach at Ármann Sports Club. I trained children and teenagers as well as adult champion courses."},{"title":"Japan","secondTitle":"2004-2005 ","content":"Obtained the black belt and practised Judo in Matsuyama, Japan for five months as well as teaching primary and secondary students English."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Hanoi, Vietnam"},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Kaminarimon, Tokyo"}]},"education":{"title":"Education","rows":[{"title":"University of Iceland","secondTitle":"2012-2015","content":"Computer Science, BS"},{"title":"University of Iceland","secondTitle":"2005-2008","content":"Bachelor of Education in Elementary Education, B.Ed. - Major in mathematics"},{"title":"High School of Egilsstaðir","secondTitle":"2000-2004","content":"Matriculation course of natural science"}],"images":[{"id":3,"url":"me_and_solla3.jpg","thumbnail":"thumbnails/me_and_solla3.jpg","text":"Þorrablót in Reyðarfjörður"},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Luang Prabang, Laos"},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Reunion with my Judo master Mr. Bunji sensei in Matsuyama, Japan"},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Good cup of Vietnamese Weasel coffee Hanoi, Vietnam"}]},"about":{"title":"about me","text":"My name is Snær Seljan Þóroddsson. I was born in 1983 and I grew up in Reyðarfjörður in the east of Iceland. I have lived in the capital Reykjavik since 2004. I am a web developer, teacher, Icelandic Glima wrestler and Judo man. Activities of interest include programming of course, sports and training, films, outdoor activities, travel, coffee and good beer. In my spare time I love hacking in Node.js and React.js. ","images":[{"id":8,"url":"me_and_solla4.jpg","thumbnail":"thumbnails/me_and_solla4.jpg","text":"Kyoto, Japan"},{"id":10,"url":"me_and_solla1.JPG","thumbnail":"thumbnails/me_and_solla1.jpg","text":"Excited at KEF airport"},{"id":7,"url":"me13.jpg","thumbnail":"thumbnails/me13.jpg","text":"Fushimi Inari Tori Gates in Kyoto, Japan"},{"id":9,"url":"me7.jpg","thumbnail":"thumbnails/me7.jpg","text":"Beer enthusiast"}]},"processbars":[{"title":"programming languages","mainTitle":"skills","items":[{"name":"Javascript","percentage":90,"description":"Lýsing á javascript skills"},{"name":"Html","percentage":95,"description":"Lýsing á html skills"},{"name":"CSS","percentage":85,"description":"Lýsing á css skills"},{"name":"C#","percentage":70,"description":"Lýsing á css skills"},{"name":"JAVA","percentage":70,"description":"Lýsing á css skills"},{"name":"XSLT","percentage":80,"description":"Lýsing á css skills"}]},{"title":"javascript frameworks","items":[{"name":"React and Redux","percentage":80,"description":"Lýsing á javascript skills"},{"name":"React Native","percentage":80,"description":"Lýsing á html skills"},{"name":"Node.js and Express","percentage":80,"description":"Lýsing á css skills"},{"name":"Angular 1.x","percentage":95,"description":"Lýsing á css skills"}]}],"projects":[{"title":"Hobby projects","mainTitle":"projects","projects":[{"id":11,"image":"biomynd_is.PNG","thumbnail":"thumbnails/biomynd_is.png","url":"http://www.biomynd.is","text":"Everything you want to know about movies both in screening and upcoming in Icelandic cinemas.","title":"biomynd.is","titleText":"All movies in cinemas in one place."},{"id":12,"image":"api_kvikmyndir_is.jpg","thumbnail":"thumbnails/api_kvikmyndir_is.png","url":"http://api.kvikmyndir.is","text":"Icelandic movie API is a free REST service for movies showing in Icelandic cinemas.","title":"api.kvikmyndir.is","titleText":"Free REST service for movies in Icelandic cinemas."}]},{"title":"Work projects","text":"The main tasks I've worked on are related to frontend programming, but I have also worked on many projects in backend programming. My strength lies in the front end, especially in React, Angular or other Javascript related libraries and frameworks. Companies that I have worked as a web developer for Advania include Íslandsbanki, Össur, Borgun, Tollstjóri, Íbúðalánasjóður and Fastus. Please contact <a href='mailto:snaerth@gmail.com' class='reveal-text' title='Send mail to snaerth@gmail.com'> snaerth@gmail.com </a> for further information."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":3,"url":"me3.jpg","thumbnail":"thumbnails/me3.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":7,"url":"solla_1.jpg","thumbnail":"thumbnails/rsz_solla_1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":8,"url":"solla_3.jpg","thumbnail":"thumbnails/rsz_solla_3.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":9,"url":"solla_4.jpg","thumbnail":"thumbnails/rsz_solla_4.jpg","text":"Dolor sit amet, consectetur adipiscing."}]}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REVEAL_ANIMATION_FORWARD = exports.REVEAL_ANIMATION_FORWARD = 'reveal_animation_forward';
var REVEAL_ANIMATION_BACKWARD = exports.REVEAL_ANIMATION_BACKWARD = 'reveal_animation_backward';
var SET_LANGUAGE = exports.SET_LANGUAGE = 'set_language';
var ADD_PAGE_LOADING = exports.ADD_PAGE_LOADING = 'add_page_loading';
var REMOVE_PAGE_LOADING = exports.REMOVE_PAGE_LOADING = 'remove_page_loading';

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withinViewport = withinViewport;
exports.initElementTilt = initElementTilt;
exports.ifIE = ifIE;
if (typeof window === 'undefined') {
  global.window = {};
}

// requestAnimationFrame
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

// Throttle http://underscorejs.org/#throttle
function throttle(func, wait, options) {
  var _this = this,
      _arguments = arguments;

  var _ = {
    now: Date.now || function () {
      return new Date().getTime();
    }
  };
  var context = void 0,
      args = void 0,
      result = void 0;
  var timeout = null;
  var previous = 0;
  if (!options) {
    options = {};
  }
  var later = function later() {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function () {
    var now = _.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    context = _this;
    args = _arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

// Check visibility of the element in the viewport
function checkVisibility(elem) {
  var viewportSize = getViewportSize();
  var currentScroll = getCurrentScroll();
  var elemInfo = getElemInfo(elem);
  var spaceOffset = 0.2;
  var elemHeight = elemInfo.height;
  var elemWidth = elemInfo.width;
  var elemTop = elemInfo.top;
  var elemLeft = elemInfo.left;
  var elemBottom = elemTop + elemHeight;
  var elemRight = elemLeft + elemWidth;

  var checkBoundaries = function checkBoundaries() {
    // Defining the element boundaries and extra space offset
    var top = elemTop + elemHeight * spaceOffset;
    var left = elemLeft + elemWidth * spaceOffset;
    var bottom = elemBottom - elemHeight * spaceOffset;
    var right = elemRight - elemWidth * spaceOffset;

    // Defining the window boundaries and window offset
    var wTop = currentScroll.y + 0;
    var wLeft = currentScroll.x + 0;
    var wBottom = currentScroll.y - 0 + viewportSize.height;
    var wRight = currentScroll.x - 0 + viewportSize.width;

    // Check if the element is within boundary
    return top < wBottom && bottom > wTop && left > wLeft && right < wRight;
  };

  return checkBoundaries();
}

// Get the viewport (window) dimensions
function getViewportSize() {
  return {
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight
  };
}

// Get the current scoll position
function getCurrentScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// Get element dimensions and position
function getElemInfo(elem) {
  var offsetTop = 0;
  var offsetLeft = 0;
  var offsetHeight = elem.offsetHeight;
  var offsetWidth = elem.offsetWidth;

  // eslint-disable-next-line
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent) !== null);
  return {
    top: offsetTop,
    left: offsetLeft,
    height: offsetHeight,
    width: offsetWidth
  };
}

var scrollHandler = void 0;
var resizeHandler = void 0;

function withinViewport(unsubscribeEvents, selector, viewPortClassName, callback) {
  // Cutting the mustard
  // http://webfieldmanual.com/guides/cutting-the-mustard.html
  if (window.requestAnimationFrame && window.document.documentElement.classList) {
    // Passes the test so add enhanced class to HTML tag
    window.document.documentElement.classList.add('enhanced');

    // Global class for revealing element
    var revealer = window.document.querySelectorAll('.' + selector);

    // Run a loop with checkVisibility() and add / remove classes to the elements
    var toggleElement = function toggleElement() {
      for (var i = 0; i < revealer.length; i++) {
        if (checkVisibility(revealer[i])) {
          revealer[i].classList.add(viewPortClassName);
          if (callback) {
            callback(true, revealer[i]);
          }
        } else {
          revealer[i].classList.remove(viewPortClassName);
          if (callback) {
            callback(false, revealer[i]);
          }
        }
      }
    };

    if (unsubscribeEvents) {
      // Listening for events
      if (window.addEventListener) {
        window.removeEventListener('scroll', scrollHandler, false);
        window.removeEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.detachEvent('onscroll', scrollHandler);
        window.detachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = null;
        window.onresize = null;
      }

      return false;
    } else {
      scrollHandler = throttle(function () {
        return _requestAnimationFrame(toggleElement);
      }, 300);

      resizeHandler = throttle(function () {
        return _requestAnimationFrame(toggleElement);
      }, 300);

      // Listening for events
      if (window.addEventListener) {
        window.addEventListener('scroll', scrollHandler, false);
        window.addEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', scrollHandler);
        window.attachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = scrollHandler;
        window.onresize = resizeHandler;
      }
    }
  }
}

// From https://davidwalsh.name/javascript-debounce-function.
function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function initElementTilt(el, destroy) {
  if (!destroy) {
    var newElmentTilt = new ElmentTilt(el);
    el.style.transition = 'transform 0.2s ease-out';
    if (typeof requestAnimationFrame === 'undefined') return;
    window.document.addEventListener('mousemove', onMouseMoveHandler.bind(newElmentTilt));
    window.addEventListener('resize', debounceResizeHandler.bind(newElmentTilt));
  } else {
    window.document.removeEventListener('mousemove', onMouseMoveHandler);
    window.removeEventListener('resize', debounceResizeHandler);
    el.style.transition = '';
    el.style.transform = '';
  }
}

function ElmentTilt(el) {
  this.el = el;
  this.win = {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

ElmentTilt.prototype.options = {
  // Main image tilt: max and min angles.
  tilt: {
    maxRotationX: -4,
    maxRotationY: 3,
    maxTranslationX: 10,
    maxTranslationY: -2
  }
};

ElmentTilt.prototype.getMousePos = function (e) {
  // from http://www.quirksmode.org/js/events_properties.html#position
  var posx = 0;
  var posy = 0;
  if (!e) {
    e = window.event;
  }

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + window.document.body.scrollLeft + window.document.documentElement.scrollLeft;
    posy = e.clientY + window.document.body.scrollTop + window.document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  };
};

function onMouseMoveHandler(ev) {
  var _this2 = this;

  requestAnimationFrame(function () {
    var mousepos = _this2.getMousePos(ev);
    var rotX = 2 * _this2.options.tilt.maxRotationX / _this2.win.height * mousepos.y - _this2.options.tilt.maxRotationX;
    var rotY = 2 * _this2.options.tilt.maxRotationY / _this2.win.width * mousepos.x - _this2.options.tilt.maxRotationY;
    var transX = 2 * _this2.options.tilt.maxTranslationX / _this2.win.width * mousepos.x - _this2.options.tilt.maxTranslationX;
    var transY = 2 * _this2.options.tilt.maxTranslationY / _this2.win.height * mousepos.y - _this2.options.tilt.maxTranslationY;
    _this2.el.style.transform = 'perspective(1000px) \n                               translate3d( ' + transX + 'px, ' + transY + 'px, 0) \n                               rotate3d(1,0,0,' + rotX + 'deg) \n                               rotate3d(0,1,0,' + rotY + 'deg)';
  });
}

// Window resize.
function debounceResizeHandler() {
  debounce(function () {
    this.win = { width: window.innerWidth, height: window.innerHeight };
  }, 10);
}

function ifIE() {
  return window.document.documentMode || /Edge/.test(navigator.userAgent) ? true : false;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imageBlurWrapper = __webpack_require__(68);

var _imageBlurWrapper2 = _interopRequireDefault(_imageBlurWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _imageBlurWrapper2.default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _express = __webpack_require__(24);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(25);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(3);

var _configureStore = __webpack_require__(18);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _src = __webpack_require__(38);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, 'build')));

/**
 * React application route, supports server side rendering.
 */
app.get('/*', function (req, res) {
  // Create a context for <StaticRouter>, which will allow us to
  // query for the results of the render.
  var reactRouterContext = {};

  // Compile an initial state
  var preloadedState = {};

  // Create a new Redux store instance
  var store = (0, _configureStore2.default)(preloadedState);

  // Declare our React application.
  var app = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: reactRouterContext },
      _src2.default
    )
  );
  console.log('before');
  var appString = (0, _server.renderToString)(app);
  console.log('after');
  // Load contents of index.html
  fs.readFile(_path2.default.join(__dirname, 'build', 'index.html'), 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    var document = data.replace(/<main id="root"><\/main>/, '<main id="root">' + app + '</main>');

    // Sends the response back to the client
    res.status(200).send();
  });
});

app.listen(9000);
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(27);
} else {
  module.exports = __webpack_require__(29);
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 React v16.0.0
 react-dom-server.node.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
var k=__webpack_require__(11);__webpack_require__(9);var m=__webpack_require__(0),p=__webpack_require__(12),aa=__webpack_require__(13),ba=__webpack_require__(14),ca=__webpack_require__(15);
function w(a){for(var b=arguments.length-1,g="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)g+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
function x(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var y={Namespaces:{html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},getIntrinsicNamespace:x,getChildNamespace:function(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?x(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}},da={children:!0,dangerouslySetInnerHTML:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,style:!0};
function z(a,b){return(a&b)===b}
var C={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=C,g=a.Properties||{},c=a.DOMAttributeNamespaces||{},h=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in g){D.properties.hasOwnProperty(f)?w("48",f):void 0;var e=f.toLowerCase(),d=g[f];e={attributeName:e,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:z(d,b.MUST_USE_PROPERTY),
hasBooleanValue:z(d,b.HAS_BOOLEAN_VALUE),hasNumericValue:z(d,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:z(d,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:z(d,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:z(d,b.HAS_STRING_BOOLEAN_VALUE)};1>=e.hasBooleanValue+e.hasNumericValue+e.hasOverloadedBooleanValue?void 0:w("50",f);h.hasOwnProperty(f)&&(e.attributeName=h[f]);c.hasOwnProperty(f)&&(e.attributeNamespace=c[f]);a.hasOwnProperty(f)&&(e.mutationMethod=a[f]);D.properties[f]=e}}},D=
{ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ATTRIBUTE_NAME_CHAR:":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
properties:{},shouldSetAttribute:function(a,b){if(D.isReservedProp(a)||!("o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return D.shouldAttributeAcceptBooleanValue(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}},getPropertyInfo:function(a){return D.properties.hasOwnProperty(a)?D.properties[a]:null},shouldAttributeAcceptBooleanValue:function(a){if(D.isReservedProp(a))return!0;var b=D.getPropertyInfo(a);
if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a},isReservedProp:function(a){return da.hasOwnProperty(a)},injection:C},E=D,ea=/["'&<>]/;
function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ea.exec(a);if(b){var g="",c,h=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="\x26quot;";break;case 38:b="\x26amp;";break;case 39:b="\x26#x27;";break;case 60:b="\x26lt;";break;case 62:b="\x26gt;";break;default:continue}h!==c&&(g+=a.substring(h,c));h=c+1;g+=b}a=h!==c?g+a.substring(h,c):g}return a}var fa=new RegExp("^["+E.ATTRIBUTE_NAME_START_CHAR+"]["+E.ATTRIBUTE_NAME_CHAR+"]*$"),G={},H={};
function ha(a){if(H.hasOwnProperty(a))return!0;if(G.hasOwnProperty(a))return!1;if(fa.test(a))return H[a]=!0;G[a]=!0;return!1}
var I={createMarkupForID:function(a){return E.ID_ATTRIBUTE_NAME+"\x3d"+('"'+F(a)+'"')},createMarkupForRoot:function(){return E.ROOT_ATTRIBUTE_NAME+'\x3d""'},createMarkupForProperty:function(a,b){var g=E.getPropertyInfo(a);if(g){if(null==b||g.hasBooleanValue&&!b||g.hasNumericValue&&isNaN(b)||g.hasPositiveNumericValue&&1>b||g.hasOverloadedBooleanValue&&!1===b)return"";var c=g.attributeName;if(g.hasBooleanValue||g.hasOverloadedBooleanValue&&!0===b)return c+'\x3d""';if("boolean"!==typeof b||E.shouldAttributeAcceptBooleanValue(a))return c+
"\x3d"+('"'+F(b)+'"')}else if(E.shouldSetAttribute(a,b))return null==b?"":a+"\x3d"+('"'+F(b)+'"');return null},createMarkupForCustomAttribute:function(a,b){return ha(a)&&null!=b?a+"\x3d"+('"'+F(b)+'"'):""}},J={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ia=k({menuitem:!0},J),K={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,
columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ja=["Webkit","ms","Moz","O"];
Object.keys(K).forEach(function(a){ja.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);K[b]=K[a]})});var L=y.Namespaces,ka=y.getIntrinsicNamespace,la=y.getChildNamespace,M=m.Children.toArray,ma={listing:!0,pre:!0,textarea:!0};function N(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var na=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,O={},oa=ba(function(a){return aa(a)});
function pa(a){var b="";m.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function qa(a,b){if(a=a.contextTypes){var g={},c;for(c in a)g[c]=b[c];b=g}else b=p;return b}var ra={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null};function P(a,b){void 0===a&&w("152",N(b)||"Component")}
function sa(a,b){for(;m.isValidElement(a);){var g=a.type;if("function"!==typeof g)break;var c=qa(g,b),h=[],f=!1,e={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){f=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}};if(g.prototype&&g.prototype.isReactComponent)var d=new g(a.props,c,e);else if(d=g(a.props,c,e),null==d||null==d.render){a=d;P(a,g);continue}d.props=a.props;d.context=c;d.updater=e;e=d.state;
void 0===e&&(d.state=e=null);if(d.componentWillMount)if(d.componentWillMount(),h.length){e=h;var q=f;h=null;f=!1;if(q&&1===e.length)d.state=e[0];else{var r=q?e[0]:d.state,l=!0;for(q=q?1:0;q<e.length;q++){var n=e[q];if(n="function"===typeof n?n.call(d,r,a.props,c):n)l?(l=!1,r=k({},r,n)):k(r,n)}d.state=r}}else h=null;a=d.render();P(a,g);if("function"===typeof d.getChildContext){c=g.childContextTypes;"object"!==typeof c?w("107",N(g)||"Unknown"):void 0;var B=d.getChildContext();for(var A in B)A in c?
void 0:w("108",N(g)||"Unknown",A)}B&&(b=k({},b,B))}return{child:a,context:b}}
var Q=function(){function a(b,g){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");b=m.isValidElement(b)?[b]:M(b);this.stack=[{domNamespace:L.html,children:b,childIndex:0,context:p,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=g}a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=!0;break}var c=this.stack[this.stack.length-1];if(c.childIndex>=
c.children.length)b+=c.footer,this.previousWasTextNode=!1,this.stack.pop(),"select"===c.tag&&(this.currentSelectValue=null);else{var h=c.children[c.childIndex++];b+=this.render(h,c.context,c.domNamespace)}}return b};a.prototype.render=function(a,g,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return F(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+F(c);this.previousWasTextNode=!0;return F(c)}g=sa(a,g);a=g.child;g=g.context;if(null===a||!1===
a)return"";if(m.isValidElement(a))return this.renderDOM(a,g,c);a=M(a);this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""});return""};a.prototype.renderDOM=function(a,g,c){var b=a.type.toLowerCase();c===L.html&&ka(b);O.hasOwnProperty(b)||(na.test(b)?void 0:w("65",b),O[b]=!0);var f=a.props;if("input"===b)f=k({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===
b){var e=f.value;if(null==e){e=f.defaultValue;var d=f.children;null!=d&&(null!=e?w("92"):void 0,Array.isArray(d)&&(1>=d.length?void 0:w("93"),d=d[0]),e=""+d);null==e&&(e="")}f=k({},f,{value:void 0,children:""+e})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=k({},f,{value:void 0});else if("option"===b){d=this.currentSelectValue;var q=pa(f.children);if(null!=d){var r=null!=f.value?f.value+"":q;e=!1;if(Array.isArray(d))for(var l=0;l<d.length;l++){if(""+d[l]===r){e=
!0;break}}else e=""+d===r;f=k({selected:void 0,children:void 0},f,{selected:e,children:q})}}if(e=f)ia[b]&&(null!=e.children||null!=e.dangerouslySetInnerHTML?w("137",b,""):void 0),null!=e.dangerouslySetInnerHTML&&(null!=e.children?w("60"):void 0,"object"===typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML?void 0:w("61")),null!=e.style&&"object"!==typeof e.style?w("62",""):void 0;e=f;d=this.makeStaticMarkup;q=1===this.stack.length;r="\x3c"+a.type;for(t in e)if(e.hasOwnProperty(t)){var n=
e[t];if(null!=n){if("style"===t){l=void 0;var B="",A="";for(l in n)if(n.hasOwnProperty(l)){var u=0===l.indexOf("--"),v=n[l];null!=v&&(B+=A+oa(l)+":",A=l,u=null==v||"boolean"===typeof v||""===v?"":u||"number"!==typeof v||0===v||K.hasOwnProperty(A)&&K[A]?(""+v).trim():v+"px",B+=u,A=";")}n=B||null}l=null;b:if(u=b,v=e,-1===u.indexOf("-"))u="string"===typeof v.is;else switch(u){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":u=
!1;break b;default:u=!0}u?ra.hasOwnProperty(t)||(l=I.createMarkupForCustomAttribute(t,n)):l=I.createMarkupForProperty(t,n);l&&(r+=" "+l)}}d||q&&(r+=" "+I.createMarkupForRoot());var t=r;e="";J.hasOwnProperty(b)?t+="/\x3e":(t+="\x3e",e="\x3c/"+a.type+"\x3e");a:{d=f.dangerouslySetInnerHTML;if(null!=d){if(null!=d.__html){d=d.__html;break a}}else if(d=f.children,"string"===typeof d||"number"===typeof d){d=F(d);break a}d=null}null!=d?(f=[],ma[b]&&"\n"===d.charAt(0)&&(t+="\n"),t+=d):f=M(f.children);a={domNamespace:la(c,
a.type),tag:b,children:f,childIndex:0,context:g,footer:e};this.stack.push(a);return t};return a}(),R={renderToString:function(a){return(new Q(a,!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Q(a,!0)).read(Infinity)}};
function ta(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
var S=function(a){function b(g,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var h=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h=!h||"object"!==typeof h&&"function"!==typeof h?this:h;h.partialRenderer=new Q(g,c);return h}ta(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(ca.Readable),ua={renderToNodeStream:function(a){return new S(a,
!1)},renderToStaticNodeStream:function(a){return new S(a,!0)}},T=E.injection.MUST_USE_PROPERTY,U=E.injection.HAS_BOOLEAN_VALUE,va=E.injection.HAS_NUMERIC_VALUE,V=E.injection.HAS_POSITIVE_NUMERIC_VALUE,W=E.injection.HAS_STRING_BOOLEAN_VALUE,wa={Properties:{allowFullScreen:U,allowTransparency:W,async:U,autoPlay:U,capture:U,checked:T|U,cols:V,contentEditable:W,controls:U,"default":U,defer:U,disabled:U,download:E.injection.HAS_OVERLOADED_BOOLEAN_VALUE,draggable:W,formNoValidate:U,hidden:U,loop:U,multiple:T|
U,muted:T|U,noValidate:U,open:U,playsInline:U,readOnly:U,required:U,reversed:U,rows:V,rowSpan:va,scoped:U,seamless:U,selected:T|U,size:V,start:va,span:V,spellCheck:W,style:0,itemScope:U,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:W},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",
""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+b)}}},X=E.injection.HAS_STRING_BOOLEAN_VALUE,Y={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Z={Properties:{autoReverse:X,externalResourcesRequired:X,preserveAlpha:X},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:Y.xlink,xlinkArcrole:Y.xlink,xlinkHref:Y.xlink,
xlinkRole:Y.xlink,xlinkShow:Y.xlink,xlinkTitle:Y.xlink,xlinkType:Y.xlink,xmlBase:Y.xml,xmlLang:Y.xml,xmlSpace:Y.xml}},xa=/[\-\:]([a-z])/g;function ya(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(xa,
ya);Z.Properties[b]=0;Z.DOMAttributeNames[b]=a});E.injection.injectDOMPropertyConfig(wa);E.injection.injectDOMPropertyConfig(Z);module.exports={renderToString:R.renderToString,renderToStaticMarkup:R.renderToStaticMarkup,renderToNodeStream:ua.renderToNodeStream,renderToStaticNodeStream:ua.renderToStaticNodeStream,version:"16.0.0"};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.0.0
 * react-dom-server.node.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
(function() {

'use strict';

var objectAssign$1 = __webpack_require__(11);
var invariant = __webpack_require__(9);
var require$$0 = __webpack_require__(16);
var react = __webpack_require__(0);
var emptyFunction = __webpack_require__(17);
var propTypes = __webpack_require__(2);
var emptyObject = __webpack_require__(12);
var hyphenateStyleName = __webpack_require__(13);
var memoizeStringOnly = __webpack_require__(14);
var checkPropTypes = __webpack_require__(30);
var camelizeStyleName = __webpack_require__(32);
var stream = __webpack_require__(15);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule reactProdInvariant
 * 
 */

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule DOMNamespaces
 */

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces$1 = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace$1(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace$1(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace$1(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var Namespaces_1 = Namespaces$1;
var getIntrinsicNamespace_1 = getIntrinsicNamespace$1;
var getChildNamespace_1 = getChildNamespace$1;

var DOMNamespaces = {
	Namespaces: Namespaces_1,
	getIntrinsicNamespace: getIntrinsicNamespace_1,
	getChildNamespace: getChildNamespace_1
};

// These attributes should be all lowercase to allow for
// case insensitive checks
var RESERVED_PROPS$1 = {
  children: true,
  dangerouslySetInnerHTML: true,
  autoFocus: true,
  defaultValue: true,
  defaultChecked: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  style: true
};

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
  HAS_STRING_BOOLEAN_VALUE: 0x40,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
        hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : void 0;

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];

        propertyInfo.attributeName = attributeName;
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      // Downcase references to whitelist properties to check for membership
      // without case-sensitivity. This allows the whitelist to pick up
      // `allowfullscreen`, which should be written using the property configuration
      // for `allowFullscreen`
      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Checks whether a property name is a writeable attribute.
   * @method
   */
  shouldSetAttribute: function (name, value) {
    if (DOMProperty.isReservedProp(name)) {
      return false;
    }
    if ((name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
      return false;
    }
    if (value === null) {
      return true;
    }
    switch (typeof value) {
      case 'boolean':
        return DOMProperty.shouldAttributeAcceptBooleanValue(name);
      case 'undefined':
      case 'number':
      case 'string':
      case 'object':
        return true;
      default:
        // function, symbol
        return false;
    }
  },

  getPropertyInfo: function (name) {
    return DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
  },
  shouldAttributeAcceptBooleanValue: function (name) {
    if (DOMProperty.isReservedProp(name)) {
      return true;
    }
    var propertyInfo = DOMProperty.getPropertyInfo(name);
    if (propertyInfo) {
      return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
    }
    var prefix = name.toLowerCase().slice(0, 5);
    return prefix === 'data-' || prefix === 'aria-';
  },


  /**
   * Checks to see if a property name is within the list of properties
   * reserved for internal React operations. These properties should
   * not be set on an HTML element.
   *
   * @private
   * @param {string} name
   * @return {boolean} If the name is within reserved props
   */
  isReservedProp: function (name) {
    return RESERVED_PROPS$1.hasOwnProperty(name);
  },


  injection: DOMPropertyInjection
};

var DOMProperty_1 = DOMProperty;

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule escapeTextContentForBrowser
 */

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextContentForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

var escapeTextContentForBrowser_1 = escapeTextContentForBrowser;

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser_1(value) + '"';
}

var quoteAttributeValueForBrowser_1 = quoteAttributeValueForBrowser;

{
  var warning$1 = require$$0;
}

// isAttributeNameSafe() is currently duplicated in DOMPropertyOperations.
// TODO: Find a better place for this.
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty_1.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

// shouldIgnoreValue() is currently duplicated in DOMPropertyOperations.
// TODO: Find a better place for this.
function shouldIgnoreValue(propertyInfo, value) {
  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
}

/**
 * Operations for dealing with DOM properties.
 */
var DOMMarkupOperations = {
  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return DOMProperty_1.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser_1(id);
  },

  createMarkupForRoot: function () {
    return DOMProperty_1.ROOT_ATTRIBUTE_NAME + '=""';
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    var propertyInfo = DOMProperty_1.getPropertyInfo(name);
    if (propertyInfo) {
      if (shouldIgnoreValue(propertyInfo, value)) {
        return '';
      }
      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';
      } else if (typeof value !== 'boolean' || DOMProperty_1.shouldAttributeAcceptBooleanValue(name)) {
        return attributeName + '=' + quoteAttributeValueForBrowser_1(value);
      }
    } else if (DOMProperty_1.shouldSetAttribute(name, value)) {
      if (value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser_1(value);
    }
    return null;
  },

  /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */
  createMarkupForCustomAttribute: function (name, value) {
    if (!isAttributeNameSafe(name) || value == null) {
      return '';
    }
    return name + '=' + quoteAttributeValueForBrowser_1(value);
  }
};

var DOMMarkupOperations_1 = DOMMarkupOperations;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  var warning$2 = require$$0;
  var emptyFunction$1 = emptyFunction;
  var PropTypes = propTypes;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  ReactControlledValuePropTypes.checkPropTypes = emptyFunction$1;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes$1 = {
    value: function (props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    onChange: PropTypes.func
  };

  var loggedTypeFailures = {};

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
    for (var propName in propTypes$1) {
      if (propTypes$1.hasOwnProperty(propName)) {
        var error = propTypes$1[propName](props, propName, tagName, 'prop', null, ReactPropTypesSecret);
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        warning$2(false, 'Failed form propType: %s%s', error.message, getStack());
      }
    }
  };
}

var ReactControlledValuePropTypes_1 = ReactControlledValuePropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule omittedCloseTags
 */

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var omittedCloseTags_1 = omittedCloseTags;

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = objectAssign$1({
  menuitem: true
}, omittedCloseTags_1);

var voidElementTags_1 = voidElementTags;

{
  var warning$3 = require$$0;
}

var HTML = '__html';

function getDeclarationErrorAddendum(getCurrentOwnerName) {
  {
    var ownerName = getCurrentOwnerName();
    if (ownerName) {
      // TODO: also report the stack.
      return '\n\nThis DOM node was rendered by `' + ownerName + '`.';
    }
  }
  return '';
}

function assertValidProps(tag, props, getCurrentOwnerName) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags_1[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getDeclarationErrorAddendum(getCurrentOwnerName)) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    warning$3(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getDeclarationErrorAddendum(getCurrentOwnerName)) : void 0;
}

var assertValidProps_1 = assertValidProps;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber$1 = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber$1).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber$1[prefixKey(prefix, prop)] = isUnitlessNumber$1[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber$1,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

var CSSProperty_1 = CSSProperty;

var isUnitlessNumber = CSSProperty_1.isUnitlessNumber;

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var dangerousStyleValue_1 = dangerousStyleValue;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule isCustomComponent
 * 
 */

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var isCustomComponent_1 = isCustomComponent;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getComponentName
 * 
 */

function getComponentName$2(instanceOrFiber) {
  if (typeof instanceOrFiber.getName === 'function') {
    // Stack reconciler
    var instance = instanceOrFiber;
    return instance.getName();
  }
  if (typeof instanceOrFiber.tag === 'number') {
    // Fiber reconciler
    var fiber = instanceOrFiber;
    var type = fiber.type;

    if (typeof type === 'string') {
      return type;
    }
    if (typeof type === 'function') {
      return type.displayName || type.name;
    }
  }
  return null;
}

var getComponentName_1 = getComponentName$2;

var ReactInternals = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ReactGlobalSharedState = {
  ReactCurrentOwner: ReactInternals.ReactCurrentOwner
};

{
  objectAssign$1(ReactGlobalSharedState, {
    ReactComponentTreeHook: ReactInternals.ReactComponentTreeHook,
    ReactDebugCurrentFrame: ReactInternals.ReactDebugCurrentFrame
  });
}

var ReactGlobalSharedState_1 = ReactGlobalSharedState;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactTypeOfWork
 * 
 */

var ReactTypeOfWork = {
  IndeterminateComponent: 0, // Before we know whether it is functional or class
  FunctionalComponent: 1,
  ClassComponent: 2,
  HostRoot: 3, // Root of a host tree. Could be nested inside another node.
  HostPortal: 4, // A subtree. Could be an entry point to a different renderer.
  HostComponent: 5,
  HostText: 6,
  CoroutineComponent: 7,
  CoroutineHandlerPhase: 8,
  YieldComponent: 9,
  Fragment: 10
};

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule describeComponentFrame
 */

var describeComponentFrame$1 = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

var IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent;
var FunctionalComponent = ReactTypeOfWork.FunctionalComponent;
var ClassComponent = ReactTypeOfWork.ClassComponent;
var HostComponent = ReactTypeOfWork.HostComponent;




function describeFiber(fiber) {
  switch (fiber.tag) {
    case IndeterminateComponent:
    case FunctionalComponent:
    case ClassComponent:
    case HostComponent:
      var owner = fiber._debugOwner;
      var source = fiber._debugSource;
      var name = getComponentName_1(fiber);
      var ownerName = null;
      if (owner) {
        ownerName = getComponentName_1(owner);
      }
      return describeComponentFrame$1(name, source, ownerName);
    default:
      return '';
  }
}

// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber$1(workInProgress) {
  var info = '';
  var node = workInProgress;
  do {
    info += describeFiber(node);
    // Otherwise this return pointer might point to the wrong tree:
    node = node['return'];
  } while (node);
  return info;
}

var ReactFiberComponentTreeHook = {
  getStackAddendumByWorkInProgressFiber: getStackAddendumByWorkInProgressFiber$1
};

var ReactDebugCurrentFrame$1 = ReactGlobalSharedState_1.ReactDebugCurrentFrame;

{
  var getComponentName$3 = getComponentName_1;

  var _require2$1 = ReactFiberComponentTreeHook,
      getStackAddendumByWorkInProgressFiber = _require2$1.getStackAddendumByWorkInProgressFiber;
}

function getCurrentFiberOwnerName$1() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    if (fiber._debugOwner != null) {
      return getComponentName$3(fiber._debugOwner);
    }
  }
  return null;
}

function getCurrentFiberStackAddendum() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.
    return getStackAddendumByWorkInProgressFiber(fiber);
  }
  return null;
}

function resetCurrentFiber() {
  ReactDebugCurrentFrame$1.getCurrentStack = null;
  ReactDebugCurrentFiber.current = null;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentFiber(fiber, phase) {
  ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackAddendum;
  ReactDebugCurrentFiber.current = fiber;
  ReactDebugCurrentFiber.phase = phase;
}

var ReactDebugCurrentFiber = {
  current: null,
  phase: null,
  resetCurrentFiber: resetCurrentFiber,
  setCurrentFiber: setCurrentFiber,
  getCurrentFiberOwnerName: getCurrentFiberOwnerName$1,
  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum
};

var ReactDebugCurrentFiber_1 = ReactDebugCurrentFiber;

var warnValidStyle$1 = emptyFunction;

{
  var camelizeStyleName$1 = camelizeStyleName;
  var getComponentName$1 = getComponentName_1;
  var warning$4 = require$$0;

  var _require = ReactDebugCurrentFiber_1,
      getCurrentFiberOwnerName = _require.getCurrentFiberOwnerName;

  // 'msTransform' is correct, but the other prefixes should be capitalized


  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$4(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName$1(name), checkRenderMessage(owner));
  };

  var warnBadVendoredStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$4(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner));
  };

  var warnStyleValueWithSemicolon = function (name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$4(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$4(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var warnStyleValueIsInfinity = function (name, value, owner) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$4(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var checkRenderMessage = function (owner) {
    var ownerName;
    if (owner != null) {
      // Stack passes the owner manually all the way to CSSPropertyOperations.
      ownerName = getComponentName$1(owner);
    } else {
      // Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
      // It is only enabled in development and tracks host components too.
      ownerName = getCurrentFiberOwnerName();
      // TODO: also report the stack.
    }
    if (ownerName) {
      return '\n\nCheck the render method of `' + ownerName + '`.';
    }
    return '';
  };

  warnValidStyle$1 = function (name, value, component) {
    var owner;
    if (component) {
      // TODO: this only works with Stack. Seems like we need to add unit tests?
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, owner);
      }
    }
  };
}

var warnValidStyle_1 = warnValidStyle$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule validAriaProperties
 */

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var validAriaProperties$1 = ariaProperties;

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty = Object.prototype.hasOwnProperty;

{
  var warning$5 = require$$0;

  var _require$1 = ReactGlobalSharedState_1,
      ReactComponentTreeHook = _require$1.ReactComponentTreeHook,
      ReactDebugCurrentFrame$2 = _require$1.ReactDebugCurrentFrame;

  var getStackAddendumByID = ReactComponentTreeHook.getStackAddendumByID;


  var validAriaProperties = validAriaProperties$1;
}

function getStackAddendum$1(debugID) {
  if (debugID != null) {
    // This can only happen on Stack
    return getStackAddendumByID(debugID);
  } else {
    // This can only happen on Fiber / Server
    var stack = ReactDebugCurrentFrame$2.getStackAddendum();
    return stack != null ? stack : '';
  }
}

function validateProperty(tagName, name, debugID) {
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = validAriaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$5(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum$1(debugID));
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$5(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum$1(debugID));
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = validAriaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$5(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$1(debugID));
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props, debugID) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key, debugID);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$5(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1(debugID));
  } else if (invalidProps.length > 1) {
    warning$5(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1(debugID));
  }
}

function validateProperties(type, props, debugID /* Stack only */) {
  if (isCustomComponent_1(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props, debugID);
}

var ReactDOMInvalidARIAHook = {
  // Fiber
  validateProperties: validateProperties,
  // Stack
  onBeforeMountComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties(element.type, element.props, debugID);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties(element.type, element.props, debugID);
    }
  }
};

var ReactDOMInvalidARIAHook_1 = ReactDOMInvalidARIAHook;

{
  var warning$6 = require$$0;

  var _require$2 = ReactGlobalSharedState_1,
      ReactComponentTreeHook$1 = _require$2.ReactComponentTreeHook,
      ReactDebugCurrentFrame$3 = _require$2.ReactDebugCurrentFrame;

  var getStackAddendumByID$1 = ReactComponentTreeHook$1.getStackAddendumByID;
}

var didWarnValueNull = false;

function getStackAddendum$2(debugID) {
  if (debugID != null) {
    // This can only happen on Stack
    return getStackAddendumByID$1(debugID);
  } else {
    // This can only happen on Fiber / Server
    var stack = ReactDebugCurrentFrame$3.getStackAddendum();
    return stack != null ? stack : '';
  }
}

function validateProperties$1(type, props, debugID /* Stack only */) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }
  if (props != null && props.value === null && !didWarnValueNull) {
    warning$6(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$2(debugID));

    didWarnValueNull = true;
  }
}

var ReactDOMNullInputValuePropHook = {
  // Fiber
  validateProperties: validateProperties$1,
  // Stack
  onBeforeMountComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$1(element.type, element.props, debugID);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$1(element.type, element.props, debugID);
    }
  }
};

var ReactDOMNullInputValuePropHook_1 = ReactDOMNullInputValuePropHook;

/**
 * Injectable ordering of event plugins.
 */
var eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var pluginModule = namesToPlugins[pluginName];
    var pluginIndex = eventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    !pluginModule.extractEvents ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
    EventPluginRegistry.plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, pluginModule, eventName) {
  !!EventPluginRegistry.registrationNameModules[registrationName] ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
  EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  {
    var lowerCasedName = registrationName.toLowerCase();
    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {
  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in true.
   * @type {Object}
   */
  possibleRegistrationNames: {},
  // Trust the developer to only use possibleRegistrationNames in true

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (injectedEventPluginOrder) {
    !!eventPluginOrder ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
    // Clone the ordering so it cannot be dynamically mutated.
    eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var pluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
        !!namesToPlugins[pluginName] ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
        namesToPlugins[pluginName] = pluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  }
};

var EventPluginRegistry_1 = EventPluginRegistry;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule possibleStandardNames
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames$1 = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  allowtransparency: 'allowTransparency',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  'class': 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  'default': 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  'for': 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  'in': 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  'typeof': 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var possibleStandardNames_1 = possibleStandardNames$1;

{
  var warning$7 = require$$0;

  var _require$3 = ReactGlobalSharedState_1,
      ReactComponentTreeHook$2 = _require$3.ReactComponentTreeHook,
      ReactDebugCurrentFrame$4 = _require$3.ReactDebugCurrentFrame;

  var getStackAddendumByID$2 = ReactComponentTreeHook$2.getStackAddendumByID;
}

function getStackAddendum$3(debugID) {
  if (debugID != null) {
    // This can only happen on Stack
    return getStackAddendumByID$2(debugID);
  } else {
    // This can only happen on Fiber / Server
    var stack = ReactDebugCurrentFrame$4.getStackAddendum();
    return stack != null ? stack : '';
  }
}

{
  var warnedProperties$1 = {};
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on[A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + DOMProperty_1.ATTRIBUTE_NAME_CHAR + ']*$');
  var possibleStandardNames = possibleStandardNames_1;

  var validateProperty$1 = function (tagName, name, value, debugID) {
    if (hasOwnProperty$1.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    if (EventPluginRegistry_1.registrationNameModules.hasOwnProperty(name)) {
      return true;
    }

    if (EventPluginRegistry_1.plugins.length === 0 && EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we might be in a server environment.
      // Don't check events in this case.
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    var registrationName = EventPluginRegistry_1.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry_1.possibleRegistrationNames[lowerCasedName] : null;

    if (registrationName != null) {
      warning$7(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName.indexOf('on') === 0) {
      warning$7(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$7(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$7(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$7(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$7(false, 'Received a `%s` for string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$7(false, 'Received NaN for numeric attribute `%s`. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    var isReserved = DOMProperty_1.isReservedProp(name);

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$7(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$3(debugID));
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$7(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean') {
      warning$7(DOMProperty_1.shouldAttributeAcceptBooleanValue(name), 'Received `%s` for non-boolean attribute `%s`. If this is expected, cast ' + 'the value to a string.%s', value, name, getStackAddendum$3(debugID));
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (!DOMProperty_1.shouldSetAttribute(name, value)) {
      warnedProperties$1[name] = true;
      return false;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, debugID) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], debugID);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$7(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3(debugID));
  } else if (unknownProps.length > 1) {
    warning$7(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3(debugID));
  }
};

function validateProperties$2(type, props, debugID /* Stack only */) {
  if (isCustomComponent_1(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, debugID);
}

var ReactDOMUnknownPropertyHook = {
  // Fiber
  validateProperties: validateProperties$2,
  // Stack
  onBeforeMountComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$2(element.type, element.props, debugID);
    }
  },
  onBeforeUpdateComponent: function (debugID, element) {
    if (true && element != null && typeof element.type === 'string') {
      validateProperties$2(element.type, element.props, debugID);
    }
  }
};

var ReactDOMUnknownPropertyHook_1 = ReactDOMUnknownPropertyHook;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Namespaces = DOMNamespaces.Namespaces;
var getIntrinsicNamespace = DOMNamespaces.getIntrinsicNamespace;
var getChildNamespace = DOMNamespaces.getChildNamespace;















var toArray = react.Children.toArray;

{
  var warning = require$$0;
  var checkPropTypes$1 = checkPropTypes;
  var warnValidStyle = warnValidStyle_1;

  var _require2 = ReactDOMInvalidARIAHook_1,
      validateARIAProperties = _require2.validateProperties;

  var _require3 = ReactDOMNullInputValuePropHook_1,
      validateInputProperties = _require3.validateProperties;

  var _require4 = ReactDOMUnknownPropertyHook_1,
      validateUnknownProperties = _require4.validateProperties;

  var validatePropertiesInDevelopment = function (type, props) {
    validateARIAProperties(type, props);
    validateInputProperties(type, props);
    validateUnknownProperties(type, props);
  };

  var describeComponentFrame = describeComponentFrame$1;
  var describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  var _require5 = ReactGlobalSharedState_1,
      ReactDebugCurrentFrame = _require5.ReactDebugCurrentFrame;

  var currentDebugStack = null;
  var currentDebugElementStack = null;
  var setCurrentDebugStack = function (stack) {
    currentDebugElementStack = stack[stack.length - 1].debugElementStack;
    // We are about to enter a new composite stack, reset the array.
    currentDebugElementStack.length = 0;
    currentDebugStack = stack;
    ReactDebugCurrentFrame.getCurrentStack = getStackAddendum;
  };
  var pushElementToDebugStack = function (element) {
    if (currentDebugElementStack !== null) {
      currentDebugElementStack.push(element);
    }
  };
  var resetCurrentDebugStack = function () {
    currentDebugElementStack = null;
    currentDebugStack = null;
    ReactDebugCurrentFrame.getCurrentStack = null;
  };
  var getStackAddendum = function () {
    if (currentDebugStack === null) {
      return null;
    }
    var stack = '';
    var debugStack = currentDebugStack;
    for (var i = debugStack.length - 1; i >= 0; i--) {
      var debugElementStack = debugStack[i].debugElementStack;
      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

function getComponentName(type) {
  return typeof type === 'string' ? type : typeof type === 'function' ? type.displayName || type.name : null;
}

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);
});

function createMarkupForStyles(styles, component) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle(styleName, styleValue, component);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue_1(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && getComponentName(constructor) || 'ReactClass');
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextContentForBrowser_1(content);
    }
  }
  return null;
}

function flattenOptionChildren(children) {
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  react.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else {
      {
        if (!didWarnInvalidOptionChildren) {
          didWarnInvalidOptionChildren = true;
          warning(false, 'Only strings and numbers are supported as <option> children.');
        }
      }
    }
  });
  return content;
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes$1(typeSpecs, values, location, 'Component', getStackAddendum);
  }
}

function processContext(type, context) {
  var maskedContext = maskContext(type, context);
  {
    if (type.contextTypes) {
      checkContextTypes(type.contextTypes, maskedContext, 'context');
    }
  }
  return maskedContext;
}

var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement, instForDebug) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!props.hasOwnProperty(propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue, instForDebug);
    }
    var markup = null;
    if (isCustomComponent_1(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = DOMMarkupOperations_1.createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = DOMMarkupOperations_1.createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + DOMMarkupOperations_1.createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context) {
  while (react.isValidElement(child)) {
    {
      pushElementToDebugStack(child);
    }
    var Component = child.type;
    if (typeof Component !== 'function') {
      break;
    }
    var publicContext = processContext(Component, context);
    var inst;
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, partialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(partialState);
      }
    };

    if (shouldConstruct(Component)) {
      inst = new Component(child.props, publicContext, updater);
    } else {
      inst = Component(child.props, publicContext, updater);
      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        continue;
      }
    }

    inst.props = child.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (inst.componentWillMount) {
      inst.componentWillMount();
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var partialState = typeof partial === 'function' ? partial.call(inst, nextState, child.props, publicContext) : partial;
            if (partialState) {
              if (dontMutate) {
                dontMutate = false;
                nextState = objectAssign$1({}, nextState, partialState);
              } else {
                objectAssign$1(nextState, partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      !(typeof childContextTypes === 'object') ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', getComponentName(Component) || 'Unknown') : void 0;
      childContext = inst.getChildContext();
      for (var contextKey in childContext) {
        !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
      }
    }
    if (childContext) {
      context = objectAssign$1({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  function ReactDOMServerRenderer(element, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var children = react.isValidElement(element) ? [element] : toArray(element);
    var topFrame = {
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: children,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
  }

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var out = '';
    while (out.length < bytes) {
      if (this.stack.length === 0) {
        this.exhausted = true;
        break;
      }
      var frame = this.stack[this.stack.length - 1];
      if (frame.childIndex >= frame.children.length) {
        out += frame.footer;
        this.previousWasTextNode = false;
        this.stack.pop();
        if (frame.tag === 'select') {
          this.currentSelectValue = null;
        }
        continue;
      }
      var child = frame.children[frame.childIndex++];
      {
        setCurrentDebugStack(this.stack);
      }
      out += this.render(child, frame.context, frame.domNamespace);
      {
        // TODO: Handle reentrant server render calls. This doesn't.
        resetCurrentDebugStack();
      }
    }
    return out;
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextContentForBrowser_1(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextContentForBrowser_1(text);
      }
      this.previousWasTextNode = true;
      return escapeTextContentForBrowser_1(text);
    } else {
      var _resolve = resolve(child, context);

      child = _resolve.child;
      context = _resolve.context;

      if (child === null || child === false) {
        return '';
      } else {
        if (react.isValidElement(child)) {
          return this.renderDOM(child, context, parentNamespace);
        } else {
          var children = toArray(child);
          var frame = {
            domNamespace: parentNamespace,
            children: children,
            childIndex: 0,
            context: context,
            footer: ''
          };
          {
            frame.debugElementStack = [];
          }
          this.stack.push(frame);
          return '';
        }
      }
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        warning(tag === element.type, '<%s /> is using uppercase HTML. Always use lowercase HTML tags ' + 'in React.', element.type);
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes_1.checkPropTypes('input', props, function () {
          return '';
        });

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = objectAssign$1({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes_1.checkPropTypes('textarea', props, function () {
          return '';
        });
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = objectAssign$1({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes_1.checkPropTypes('select', props, function () {
          return '';
        });

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, '');
          } else if (!props.multiple && isArray) {
            warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, '');
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = objectAssign$1({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = objectAssign$1({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps_1(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1, null);
    var footer = '';
    if (omittedCloseTags_1.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      tag: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    return out;
  };

  return ReactDOMServerRenderer;
}();

var ReactPartialRenderer = ReactDOMServerRenderer;

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactPartialRenderer(element, false);
  var markup = renderer.read(Infinity);
  return markup;
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactPartialRenderer(element, true);
  var markup = renderer.read(Infinity);
  return markup;
}

var ReactDOMStringRenderer = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Readable = stream.Readable;

// This is a Readable Node.js stream which wraps the ReactDOMPartialRenderer.

var ReactMarkupReadableStream = function (_Readable) {
  _inherits(ReactMarkupReadableStream, _Readable);

  function ReactMarkupReadableStream(element, makeStaticMarkup) {
    _classCallCheck$1(this, ReactMarkupReadableStream);

    var _this = _possibleConstructorReturn(this, _Readable.call(this, {}));
    // Calls the stream.Readable(options) constructor. Consider exposing built-in
    // features like highWaterMark in the future.


    _this.partialRenderer = new ReactPartialRenderer(element, makeStaticMarkup);
    return _this;
  }

  ReactMarkupReadableStream.prototype._read = function _read(size) {
    try {
      this.push(this.partialRenderer.read(size));
    } catch (err) {
      this.emit('error', err);
    }
  };

  return ReactMarkupReadableStream;
}(Readable);
/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/react-dom-stream.html#rendertonodestream
 */


function renderToNodeStream(element) {
  return new ReactMarkupReadableStream(element, false);
}

/**
 * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/react-dom-stream.html#rendertostaticnodestream
 */
function renderToStaticNodeStream(element) {
  return new ReactMarkupReadableStream(element, true);
}

var ReactDOMNodeStreamRenderer = {
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactVersion
 */

var ReactVersion = '16.0.0';

var MUST_USE_PROPERTY = DOMProperty_1.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = DOMProperty_1.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty_1.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
var HAS_STRING_BOOLEAN_VALUE = DOMProperty_1.injection.HAS_STRING_BOOLEAN_VALUE;

var HTMLDOMPropertyConfig = {
  // When adding attributes to this list, be sure to also add them to
  // the `possibleStandardNames` module to ensure casing and incorrect
  // name warnings.
  Properties: {
    allowFullScreen: HAS_BOOLEAN_VALUE,
    // IE only true/false iFrame attribute
    // https://msdn.microsoft.com/en-us/library/ms533072(v=vs.85).aspx
    allowTransparency: HAS_STRING_BOOLEAN_VALUE,
    // specifies target context for links with `preload` type
    async: HAS_BOOLEAN_VALUE,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    capture: HAS_BOOLEAN_VALUE,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    cols: HAS_POSITIVE_NUMERIC_VALUE,
    contentEditable: HAS_STRING_BOOLEAN_VALUE,
    controls: HAS_BOOLEAN_VALUE,
    'default': HAS_BOOLEAN_VALUE,
    defer: HAS_BOOLEAN_VALUE,
    disabled: HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: HAS_STRING_BOOLEAN_VALUE,
    formNoValidate: HAS_BOOLEAN_VALUE,
    hidden: HAS_BOOLEAN_VALUE,
    loop: HAS_BOOLEAN_VALUE,
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    noValidate: HAS_BOOLEAN_VALUE,
    open: HAS_BOOLEAN_VALUE,
    playsInline: HAS_BOOLEAN_VALUE,
    readOnly: HAS_BOOLEAN_VALUE,
    required: HAS_BOOLEAN_VALUE,
    reversed: HAS_BOOLEAN_VALUE,
    rows: HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: HAS_NUMERIC_VALUE,
    scoped: HAS_BOOLEAN_VALUE,
    seamless: HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    size: HAS_POSITIVE_NUMERIC_VALUE,
    start: HAS_NUMERIC_VALUE,
    // support for projecting regular DOM Elements via V1 named slots ( shadow dom )
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: HAS_STRING_BOOLEAN_VALUE,
    // Style must be explicitly set in the attribute list. React components
    // expect a style object
    style: 0,
    // itemScope is for for Microdata support.
    // See http://schema.org/docs/gs.html
    itemScope: HAS_BOOLEAN_VALUE,
    // These attributes must stay in the white-list because they have
    // different attribute names (see DOMAttributeNames below)
    acceptCharset: 0,
    className: 0,
    htmlFor: 0,
    httpEquiv: 0,
    // Attributes with mutation methods must be specified in the whitelist
    // Set the string boolean flag to allow the behavior
    value: HAS_STRING_BOOLEAN_VALUE
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMMutationMethods: {
    value: function (node, value) {
      if (value == null) {
        return node.removeAttribute('value');
      }

      // Number inputs get special treatment due to some edge cases in
      // Chrome. Let everything else assign the value attribute as normal.
      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
      if (node.type !== 'number' || node.hasAttribute('value') === false) {
        node.setAttribute('value', '' + value);
      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
        // Don't assign an attribute if validation reports bad
        // input. Chrome will clear the value. Additionally, don't
        // operate on inputs that have focus, otherwise Chrome might
        // strip off trailing decimal places and cause the user's
        // cursor position to jump to the beginning of the input.
        //
        // In ReactDOMInput, we have an onBlur event that will trigger
        // this function again when focus is lost.
        node.setAttribute('value', '' + value);
      }
    }
  }
};

var HTMLDOMPropertyConfig_1 = HTMLDOMPropertyConfig;

var HAS_STRING_BOOLEAN_VALUE$1 = DOMProperty_1.injection.HAS_STRING_BOOLEAN_VALUE;


var NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

/**
 * This is a list of all SVG attributes that need special casing,
 * namespacing, or boolean value assignment.
 *
 * When adding attributes to this list, be sure to also add them to
 * the `possibleStandardNames` module to ensure casing and incorrect
 * name warnings.
 *
 * SVG Attributes List:
 * https://www.w3.org/TR/SVG/attindex.html
 * SMIL Spec:
 * https://www.w3.org/TR/smil
 */
var ATTRS = ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'x-height', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xmlns:xlink', 'xml:lang', 'xml:space'];

var SVGDOMPropertyConfig = {
  Properties: {
    autoReverse: HAS_STRING_BOOLEAN_VALUE$1,
    externalResourcesRequired: HAS_STRING_BOOLEAN_VALUE$1,
    preserveAlpha: HAS_STRING_BOOLEAN_VALUE$1
  },
  DOMAttributeNames: {
    autoReverse: 'autoReverse',
    externalResourcesRequired: 'externalResourcesRequired',
    preserveAlpha: 'preserveAlpha'
  },
  DOMAttributeNamespaces: {
    xlinkActuate: NS.xlink,
    xlinkArcrole: NS.xlink,
    xlinkHref: NS.xlink,
    xlinkRole: NS.xlink,
    xlinkShow: NS.xlink,
    xlinkTitle: NS.xlink,
    xlinkType: NS.xlink,
    xmlBase: NS.xml,
    xmlLang: NS.xml,
    xmlSpace: NS.xml
  }
};

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

ATTRS.forEach(function (original) {
  var reactName = original.replace(CAMELIZE, capitalize);

  SVGDOMPropertyConfig.Properties[reactName] = 0;
  SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
});

var SVGDOMPropertyConfig_1 = SVGDOMPropertyConfig;

DOMProperty_1.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig_1);
DOMProperty_1.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig_1);

var ReactDOMServerNodeEntry = {
  renderToString: ReactDOMStringRenderer.renderToString,
  renderToStaticMarkup: ReactDOMStringRenderer.renderToStaticMarkup,
  renderToNodeStream: ReactDOMNodeStreamRenderer.renderToNodeStream,
  renderToStaticNodeStream: ReactDOMNodeStreamRenderer.renderToStaticNodeStream,
  version: ReactVersion
};

module.exports = ReactDOMServerNodeEntry;

})();
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(9);
  var warning = __webpack_require__(16);
  var ReactPropTypesSecret = __webpack_require__(31);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var camelize = __webpack_require__(33);

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reducer = __webpack_require__(35);

var _reducer2 = _interopRequireDefault(_reducer);

var _reactRouterRedux = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  common: _reducer2.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.ADD_PAGE_LOADING:
      return _extends({}, state, {
        pageRevealer: false
      });

    case _types.REMOVE_PAGE_LOADING:
      return _extends({}, state, {
        pageRevealer: false
      });

    case _types.SET_LANGUAGE:
      return _extends({}, state, {
        translations: action.payload.translations,
        pageRevealer: false,
        lang: action.payload.lang
      });

    case _types.REVEAL_ANIMATION_FORWARD:
      return _extends({}, state, {
        pageRevealer: true,
        pageRevealerType: 'top',
        back: false,
        backButtonPressed: false
      });

    case _types.REVEAL_ANIMATION_BACKWARD:
      return _extends({}, state, {
        pageRevealer: true,
        pageRevealerType: 'bottom',
        back: true,
        backButtonPressed: action.payload
      });

    default:
      return _extends({}, state);
  }
};

var _en = __webpack_require__(19);

var _en2 = _interopRequireDefault(_en);

var _types = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  pageRevealer: false,
  pageRevealerType: 'top',
  translations: _en2.default,
  lang: 'en'
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(7);

var _configureStore = __webpack_require__(18);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _home = __webpack_require__(40);

var _home2 = _interopRequireDefault(_home);

var _profile = __webpack_require__(56);

var _profile2 = _interopRequireDefault(_profile);

var _contact = __webpack_require__(82);

var _contact2 = _interopRequireDefault(_contact);

var _routeWrapper = __webpack_require__(87);

var _routeWrapper2 = _interopRequireDefault(_routeWrapper);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
var store = (0, _configureStore2.default)();
window.store = store;

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
var supportsHistory = window && window.history && 'pushState' in window.history ? true : false;

var routes = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _routeWrapper2.default,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: _profile2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _contact2.default })
  )
);

var app = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { forceRefresh: !supportsHistory },
    routes
  )
);

var root = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  (0, _reactDom.render)(app, root);
} else {
  (0, _reactDom.hydrate)(app, root);
}

var renderApp = function renderApp(newRoot) {
  if (process.env.NODE_ENV === 'development') {
    (0, _reactDom.render)(app, newRoot);
  } else {
    (0, _reactDom.hydrate)(app, newRoot);
  }
};

renderApp(root);

exports.default = routes;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(41);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _home2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _gsap = __webpack_require__(5);

var _redux = __webpack_require__(6);

var _imagesloaded = __webpack_require__(42);

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _actions = __webpack_require__(8);

var actionCreators = _interopRequireWildcard(_actions);

var _imageSection = __webpack_require__(44);

var _imageSection2 = _interopRequireDefault(_imageSection);

var _contentSection = __webpack_require__(49);

var _contentSection2 = _interopRequireDefault(_contentSection);

var _snaer_seljan_thoroddsson = __webpack_require__(54);

var _snaer_seljan_thoroddsson2 = _interopRequireDefault(_snaer_seljan_thoroddsson);

__webpack_require__(55);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      tl: new _gsap.TimelineLite(),
      dirty: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      (0, _imagesloaded2.default)(this.refs.mobileImage, { background: true }, function () {
        self.props.actions.removePageLoading();
        self.animateStart();
      });
    }
  }, {
    key: 'animateStart',
    value: function animateStart() {
      var tl = this.state.tl;
      var _refs = this.refs,
          left = _refs.left,
          right = _refs.right,
          firstName = _refs.firstName,
          lastName = _refs.lastName,
          github = _refs.github,
          githubMobile = _refs.githubMobile,
          lang = _refs.lang,
          mobileImage = _refs.mobileImage;


      tl.set([firstName, lastName], { rotationX: -45 }).to([left, right, mobileImage], 1.5, {
        x: '0%',
        opacity: 1,
        ease: _gsap.Power2.easeOut
      }).to(firstName, 1.5, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 0.8).to(lastName, 1.5, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 1).to([github, githubMobile, lang], 1, { y: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, 1).play();
    }
  }, {
    key: 'changeLanguage',
    value: function changeLanguage() {
      var _this2 = this;

      this.props.actions.addPageLoading();
      setTimeout(function () {
        _this2.props.actions.removePageLoading();
        _this2.props.actions.setLanguage(_this2.props.common.lang === 'en' ? 'is' : 'en');
      }, 300);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.common.pageRevealer) {
        this.state.tl.timeScale(3).reverse();
      }

      if (this.props.common.backButtonPressed && !this.state.dirty) {
        this.setState({ dirty: true });
        this.state.tl.timeScale(1).restart();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          { className: 'name' },
          _react2.default.createElement(
            'span',
            { ref: 'firstName' },
            this.props.translations.firstName
          ),
          _react2.default.createElement(
            'span',
            { ref: 'lastName' },
            this.props.translations.lastName
          )
        ),
        _react2.default.createElement('div', {
          ref: 'mobileImage',
          className: 'mobile-background',
          style: { backgroundImage: 'url(' + _snaer_seljan_thoroddsson2.default + ')' }
        }),
        _react2.default.createElement(
          'span',
          {
            ref: 'lang',
            className: 'language-wrapper',
            onClick: function onClick() {
              return _this3.changeLanguage();
            }
          },
          _react2.default.createElement(
            'svg',
            { className: 'icon-globe' },
            _react2.default.createElement('use', {
              href: '#icon-globe',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              xlinkHref: '#icon-globe'
            })
          ),
          _react2.default.createElement(
            'span',
            { className: 'language' },
            this.props.common.lang === 'en' ? 'IS' : 'EN'
          )
        ),
        _react2.default.createElement(
          'a',
          {
            ref: 'githubMobile',
            target: '_blank',
            rel: 'noreferrer noopener',
            href: 'https://github.com/snaerth/resume-example',
            className: 'github-link mobile'
          },
          _react2.default.createElement(
            'svg',
            { className: 'icon-github' },
            _react2.default.createElement('use', {
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              xlinkHref: '#icon-github'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-50' },
          _react2.default.createElement(
            'div',
            { className: 'left', ref: 'left' },
            _react2.default.createElement(_contentSection2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-50' },
          _react2.default.createElement(
            'a',
            {
              ref: 'github',
              href: 'https://github.com/snaerth?tab=repositories',
              className: 'github-link'
            },
            _react2.default.createElement(
              'svg',
              { className: 'icon-github' },
              _react2.default.createElement('use', {
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                xlinkHref: '#icon-github'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right', ref: 'right' },
            _react2.default.createElement(_imageSection2.default, { src: _snaer_seljan_thoroddsson2.default, alt: 'Sn\xE6r Seljan \xDE\xF3roddsson' })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */


function mapStateToProps(state) {
  return { common: state.common, translations: state.common.translations };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("imagesloaded");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {"name":"Snær Seljan Þóroddsson","firstName":"snær seljan","lastName":"þóroddsson","email":"snaerth@gmail.com","sendEmail":"Hafðu samband","back":"Til baka","more":"Meira","resume":"Ferilskrá","contact":{"title":"Vertu í bandi","text":"Ef þú vilt hafa samband þá getur þú sent mér póst beint á <a href='mailto:snaerth@gmail.com' title='Senda póst til snaerth@gmail.com'>snaerth@gmail.com</a> eða sent mér skilaboð á <a href='https://www.facebook.com/snaerth' title='Facebook'>Facebook</a>.","email":"snaerth@gmail.com","buttonText":"Senda mér póst"},"nav":[{"id":1,"text":"um mig","active":true},{"id":2,"text":"menntun","active":false},{"id":3,"text":"ferill","active":false},{"id":4,"text":"kunnátta","active":false},{"id":5,"text":"verkefni","active":false}],"career":{"title":"ferill","rows":[{"title":"Advania","secondTitle":"2014-2017","content":"Hjá Advania hef ég sinnt mörgum og fjölbreyttum verkefnum sem vefforritari síðastliðinn 3 ár. Ég hef góða reynslu bæði í fram- og bakendaforritun en ég hef þróað og forritað stóra vefi og vefþjónustur (REST og SOAP). Helsti styrkleiki minn liggur í Javascript og CSS, nánar tiltekið í Node.js, React með Redux, SASS, LESS og CSS Modules."},{"title":"Launafl ehf.","secondTitle":"2012-2013","content":"Rafvirkjastörf á rafmagnsverkstæði Launafls."},{"title":"Seljaskóli","secondTitle":"2009-2012","content":"Umsjónakennari á miðstigi í Seljaskóla. Einnig kenndi ég valfög á unglingastigi, meðal annars íþróttafræði, glímu, fótbolta og almennar íþróttir."},{"title":"Ungmennafélagið Valur","secondTitle":"2010-2012","content":"Umsjónamaður leikjanámskeiða á sumrin hjá Ungmennafélaginu Val á Reyðarfirði."},{"title":"Ármann","secondTitle":"2009-2012","content":"Glímuþjálfari hjá Glímudeild Ármanns. Þjálfaði barna- og unglingaflokk sem og meistaraflokk."},{"title":"Japan","secondTitle":"2004-2005 ","content":"Lauk svarta beltinu og lagði stund á júdó í Matsuyama, Japan í fimm mánuði ásamt því að kenna grunn- og framhaldsskólanemum ensku."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Hanoi, Vietnam"},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Kaminarimon, Tokyo"}]},"education":{"title":"menntun","rows":[{"title":"Háskóli Íslands","secondTitle":"2012-2015","content":"Tölvunarfræði, B.S."},{"title":"Kennaraháskóli Íslands","secondTitle":"2005-2008","content":"Grunnskólakennarafræði, B.Ed. - Kjörsvið: Stærðfræði"},{"title":"Menntaskólinn á Egilsstöðum","secondTitle":"2000-2004","content":"Stúdentspróf af náttúrufræðibraut"}],"images":[{"id":3,"url":"me_and_solla3.jpg","thumbnail":"thumbnails/me_and_solla3.jpg","text":"Þorrablót á Reyðarfirði"},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Luang Prabang, Laos"},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Endurkynni við Júdó meistarann minn herra Bunji sensei í Matsuyama, Japan"},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Góður bolli af víetnömsku kaffi í Hanoi, Vietnam"}]},"about":{"title":"um mig","text":"Ég heiti Snær Seljan Þóroddsson og er fæddur 1983. Ég er vefforritari, kennari, glímu- og júdómaður svo fátt eitt sé nefnt. Ég er uppalinn á Reyðarfirði en hef búið í Reykjavík síðan 2004. Af áhugamálum ber helst að nefna forritun auðvitað, íþróttir og hreyfing, kvikmyndir, útivera, ferðalög, kaffi og bjór. Mér þykir fátt skemmtilegra en að grúska í Node.js og React.js þegar tími gefst.","images":[{"id":8,"url":"me_and_solla4.jpg","thumbnail":"thumbnails/me_and_solla4.jpg","text":"Kyoto, Japan"},{"id":10,"url":"me_and_solla1.JPG","thumbnail":"thumbnails/me_and_solla1.jpg","text":"Á Keflavíkurflugvelli"},{"id":7,"url":"me13.jpg","thumbnail":"thumbnails/me13.jpg","text":"Fushimi Inari Tori hliðið í Kyoto, Japan"},{"id":9,"url":"me7.jpg","thumbnail":"thumbnails/me7.jpg","text":"Bjórunnandi"}]},"processbars":[{"title":"forritunarmál","mainTitle":"kunnátta","items":[{"name":"Javascript","percentage":90,"description":"Lýsing á javascript skills"},{"name":"Html","percentage":95,"description":"Lýsing á html skills"},{"name":"CSS","percentage":85,"description":"Lýsing á css skills"},{"name":"C#","percentage":73,"description":"Lýsing á css skills"},{"name":"JAVA","percentage":70,"description":"Lýsing á css skills"},{"name":"XSLT","percentage":70,"description":"Lýsing á css skills"}]},{"title":"javascript","items":[{"name":"React og Redux","percentage":90,"description":"Lýsing á javascript skills"},{"name":"React Native","percentage":80,"description":"Lýsing á html skills"},{"name":"Node.js og Express","percentage":80,"description":"Lýsing á css skills"},{"name":"Angular 1.x","percentage":90,"description":"Lýsing á css skills"}]}],"projects":[{"title":"tómstundagaman","mainTitle":"verkefni","projects":[{"id":11,"image":"biomynd_is.PNG","thumbnail":"thumbnails/biomynd_is.PNG","url":"http://www.biomynd.is","text":"Allt það sem þú vilt vita um bíómyndir í sýningu sem og væntanlegar í kvikmyndhús landsins.","title":"biomynd.is","titleText":"Allar myndir í bíó á einum stað"},{"id":12,"image":"api_kvikmyndir_is.jpg","thumbnail":"thumbnails/api_kvikmyndir_is.PNG","url":"http://api.kvikmyndir.is","text":"Icelandic movie API er frí REST þjónusta sem hefur að geyma allar upplýsingar um kvikmyndir í bíóhúsum landsins.","title":"api.kvikmyndir.is","titleText":"Búðu til bíóapp, bíó vefsíðu með gögnunum frá Icelandic movie API."}]},{"title":"Vinnutengd verkefni","text":"Helstu verkefni sem ég hef unnið að eru tengd framendaforritun en ég hef einnig sinnt mörgum verkefnum í bakendaforritun. Minn styrkur liggur í framendanum, þá sérstaklega í React, Angular eða annað tengt Javascript. Fyrirtæki sem ég hef meðal annars unnið verkefni fyrir sem verktaki hjá Advania eru Íslandsbanki, Össur, Borgun, Tollstjóra, Íbúðalánasjóður og Fastus. Endilega hafið samband <a href='mailto:snaerth@gmail.com' class='reveal-text' title='Senda póst til snaerth@gmail.com'>snaerth@gmail.com</a> fyrir frekari upplýsingar."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":3,"url":"me3.jpg","thumbnail":"thumbnails/me3.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":7,"url":"solla_1.jpg","thumbnail":"thumbnails/rsz_solla_1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":8,"url":"solla_3.jpg","thumbnail":"thumbnails/rsz_solla_3.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":9,"url":"solla_4.jpg","thumbnail":"thumbnails/rsz_solla_4.jpg","text":"Dolor sit amet, consectetur adipiscing."}]}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imageSection = __webpack_require__(45);

var _imageSection2 = _interopRequireDefault(_imageSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _imageSection2.default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coverPhoto = __webpack_require__(46);

var _coverPhoto2 = _interopRequireDefault(_coverPhoto);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSection = function ImageSection(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return _react2.default.createElement(
    'div',
    { className: 'image-container text-center' },
    _react2.default.createElement(_coverPhoto2.default, {
      src: src,
      alt: alt,
      className: 'coverImage'
    }),
    _react2.default.createElement('div', { className: 'overlay' })
  );
};

ImageSection.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired
};

exports.default = ImageSection;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverPhoto = __webpack_require__(47);

var _coverPhoto2 = _interopRequireDefault(_coverPhoto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _coverPhoto2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoverPhoto = function (_Component) {
  _inherits(CoverPhoto, _Component);

  function CoverPhoto(props) {
    _classCallCheck(this, CoverPhoto);

    var _this = _possibleConstructorReturn(this, (CoverPhoto.__proto__ || Object.getPrototypeOf(CoverPhoto)).call(this, props));

    _this.state = {
      ie: (0, _utils.ifIE)()
    };
    return _this;
  }

  _createClass(CoverPhoto, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.state.ie) {
        setTimeout(_utils.initElementTilt, 2300, this.refs.image);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.state.ie) {
        (0, _utils.initElementTilt)(this.refs.image, true);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.common.showPage && !this.state.ie) {
        (0, _utils.initElementTilt)(this.refs.image, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          alt = _props.alt,
          onClick = _props.onClick,
          className = _props.className;


      return _react2.default.createElement('div', {
        style: { backgroundImage: 'url(' + src + ')' },
        role: 'img',
        'aria-label': alt,
        onClick: onClick,
        className: className,
        ref: 'image'
      });
    }
  }]);

  return CoverPhoto;
}(_react.Component);

CoverPhoto.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapStateToProps(state) {
  return { common: state.common };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(CoverPhoto);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".image-content-container{position:relative}.coverImage{background-size:cover;background-position-x:60%;background-repeat:no-repeat;width:100%;max-width:100%;height:100%;top:20px}.coverImage,.overlay{position:absolute;left:0}.overlay{background:rgba(0,0,0,.2);top:0;right:0;bottom:0}@media only screen and (max-width:1200px){.coverImage{background-position-x:60%}}@media only screen and (max-width:992px){.coverImage{background-position-x:55%;background-position-y:-30%}}", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentSection = __webpack_require__(50);

var _contentSection2 = _interopRequireDefault(_contentSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentSection2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

var _actions = __webpack_require__(8);

var actionCreators = _interopRequireWildcard(_actions);

var _button = __webpack_require__(10);

var _button2 = _interopRequireDefault(_button);

__webpack_require__(53);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Right = function (_Component) {
  _inherits(Right, _Component);

  function Right(props) {
    _classCallCheck(this, Right);

    var _this = _possibleConstructorReturn(this, (Right.__proto__ || Object.getPrototypeOf(Right)).call(this, props));

    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(Right, [{
    key: 'clickHandler',
    value: function clickHandler(e, type) {
      e.preventDefault();
      this.props.actions.revealAnimationForward();
      setTimeout(this.props.history.push, 1500, '/' + type);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var translations = this.props.translations;

      return _react2.default.createElement(
        'div',
        { className: 'content-container' },
        _react2.default.createElement(
          'div',
          { className: 'job-application--button-container' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/profile', onClick: function onClick(e) {
                return _this2.clickHandler(e, 'profile');
              } },
            _react2.default.createElement(_button2.default, { text: translations.resume })
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/profile', onClick: function onClick(e) {
                return _this2.clickHandler(e, 'contact');
              } },
            _react2.default.createElement(_button2.default, {
              className: 'hidden-mobile-480',
              text: translations.sendEmail
            })
          )
        )
      );
    }
  }]);

  return Right;
}(_react.Component);

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */


Right.propTypes = {
  history: _propTypes2.default.shape({
    push: _propTypes2.default.func.isRequired
  }).isRequired
};
function mapStateToProps(state) {
  return {
    common: state.common,
    translations: state.common.translations,
    routing: state.routing
  };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Right));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    'button',
    {
      className: (0, _classnames2.default)('button button--moema', 'button--text-thick', 'button--text-upper', 'button--size-s', className),
      onClick: onClick
    },
    text,
    children ? children : null
  );
};

Button.propTypes = {
  text: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Button;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".button{min-width:150px;max-width:250px;margin:1em;padding:1em 2em;border:none;background:none;color:inherit;position:relative;z-index:1;cursor:pointer}.button span{position:absolute;right:20px;top:12px}.button span svg{height:32px;width:32px;fill:#fff}.button.svg{padding-right:65px}.button.noMaxWidth{max-width:none}.button:focus{outline:none}.button>span{vertical-align:middle}.button-right{position:absolute;left:30px}.button-right--offset{transform:translate3d(200%,0,0)}.button-left{position:absolute;left:15px}.button-left--offset{transform:translate3d(-200%,0,0)}.button--moema{padding:1.5em 3em;border-radius:50px;background:#ff92f6;color:#fff;transition:background-color .3s,color .3s}.button--moema.button--inverted{background:#eceff1;color:#37474f}.button--moema:before{content:\"\";position:absolute;top:-20px;left:-20px;bottom:-20px;right:-20px;background:inherit;border-radius:50px;z-index:-1;opacity:.4;transform:scale3d(.8,.5,1)}.button--moema:hover{transition:background-color .1s .3s,color .1s .3s;animation:anim-moema-1 .3s forwards}.button--moema.button--inverted:hover,.button--moema:hover{background-color:#ff92f6}.button--moema:hover:before{animation:anim-moema-2 .3s .3s forwards}.icon-paperplane{z-index:999}@keyframes anim-moema-1{60%{transform:scale3d(.8,.8,1)}85%{transform:scale3d(1.1,1.1,1)}to{transform:scaleX(1)}}@keyframes anim-moema-2{to{opacity:0;transform:scaleX(1)}}.button--text-thick{font-weight:600}.button--text-upper{letter-spacing:2px;text-transform:uppercase}.button--size-s{font-size:14px}.button--size-m{font-size:16px}.button--size-l{font-size:18px}@media only screen and (max-width:992px){.button--moema{padding:1em 2em}}.pr-60{padding-right:60px}", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".text-center{text-align:center}h2{font-size:40px;color:#484848}.content-container{position:relative;text-align:center;padding-bottom:15%}.job-application--button-container{padding-top:1em}@media only screen and (max-width:992px){.content-container{padding-bottom:0}.job-application--button-container{padding-top:0}}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4b0ca1fdc9f868b395a8271d8dfb8b4.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".container{display:flex;justify-content:center;flex-direction:row;z-index:2}.col-50{min-height:720px}.col-50,.col-50:last-child{width:100%;height:100vh;color:#fff;overflow:hidden;position:relative}.col-50,.col-50:last-child,.left,.right{display:flex;justify-content:center;align-items:center}.left,.right{position:absolute;top:0;left:0;bottom:0;right:0}.left{align-items:flex-end;transform:translate3d(-200%,0,0)}.right{background:#fff;transform:translate3d(200%,0,0);backface-visibility:hidden}h1.name{font-size:13vw;line-height:.8;margin:0;padding:0 0 0 10vw;text-indent:-4vw;letter-spacing:-.05em;text-transform:lowercase;color:#fff;position:absolute;top:10%;right:0;left:0;z-index:1}h1.name span{display:inline-block;opacity:0;transform:translate3d(0,20%,0)}h1.name.visible span{opacity:1}h1.name span:last-child{text-indent:3vw}.github-link{position:absolute;top:20px;right:20px;opacity:0;z-index:1}.github-link.mobile{opacity:1;display:none}.icon-github,.icon-globe{width:50px;height:50px;fill:#484848;transition:fill .15s}.icon-globe{pointer-events:none}.github-link,.language-wrapper{transform:translate3d(0,-200%,0)}.language-wrapper{position:absolute;top:20px;left:20px;z-index:3;min-height:50px;min-width:180px;pointer-events:all;opacity:0}.language-wrapper:hover{cursor:pointer}.language{padding:5px 0;color:#484848;text-decoration:none;transition:color .15s;position:absolute;top:2px;font-size:28px;line-height:1.4;font-family:BrandonGrotesque,Helvetica Neue,Helvetica,sans-serif;pointer-events:none}.language-wrapper:hover .language{color:#fff}.github-link .icon-github:hover,.language-wrapper:hover .icon-globe{fill:#fff}.mobile-background{display:none;background-repeat:no-repeat;position:absolute;height:100%;width:100%;top:0;background-size:cover;background-position-x:50%;transform:translate3d(200%,0,0)}@media only screen and (max-width:992px){.container{display:block;padding-top:100px}.col-50{overflow:initial;display:block;bottom:50px;position:absolute}.col-50,.col-50:first-child{height:auto}.col-50:last-child{display:none}h1.name{position:relative;left:0;font-size:80px}h1.name span:first-child{text-indent:0}.left{padding-top:5em;bottom:0}.mobile-background{display:block}.language-wrapper{min-height:30px;min-width:0}.language{padding:0;top:4px;font-size:24px}.icon-github,.icon-globe{width:40px;height:40px}.github-link.mobile{display:block}}@media only screen and (max-width:768px){.left{bottom:5%}}@media only screen and (max-width:480px){h1.name{font-size:60px}}", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _profile = __webpack_require__(57);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _profile2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _resume = __webpack_require__(58);

var _resume2 = _interopRequireDefault(_resume);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function Profile() {
	return _react2.default.createElement(
		'div',
		{ className: 'page-container' },
		_react2.default.createElement(_resume2.default, null)
	);
};

exports.default = Profile;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resume = __webpack_require__(59);

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _resume2.default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gsap = __webpack_require__(5);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _processBarsList = __webpack_require__(60);

var _processBarsList2 = _interopRequireDefault(_processBarsList);

var _projects = __webpack_require__(66);

var _projects2 = _interopRequireDefault(_projects);

var _button = __webpack_require__(10);

var _button2 = _interopRequireDefault(_button);

var _evenodd = __webpack_require__(72);

var _evenodd2 = _interopRequireDefault(_evenodd);

var _nav = __webpack_require__(74);

var _nav2 = _interopRequireDefault(_nav);

var _waveSvg = __webpack_require__(77);

var _waveSvg2 = _interopRequireDefault(_waveSvg);

var _actions = __webpack_require__(8);

var actionCreators = _interopRequireWildcard(_actions);

var _utils = __webpack_require__(21);

__webpack_require__(80);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resume = function (_Component) {
  _inherits(Resume, _Component);

  function Resume(props) {
    _classCallCheck(this, Resume);

    var _this = _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).call(this, props));

    var _this$props$translati = _this.props.translations,
        processbars = _this$props$translati.processbars,
        nav = _this$props$translati.nav;

    _this.back = _this.back.bind(_this);
    _this.removeHiddenClass = _this.removeHiddenClass.bind(_this);

    _this.state = {
      tl: new _gsap.TimelineLite(),
      processbarVisible: processbars.map(function () {
        return false;
      }),
      sectionsVisible: [false, false, false],
      projectsVisible: false,
      imagesVisible: [false, false, false],
      linksState: nav.map(function (link, i) {
        return link.active;
      })
    };
    return _this;
  }

  _createClass(Resume, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initElementInViewportChecker();
      var _refs = this.refs,
          back = _refs.back,
          title = _refs.title;
      var tl = this.state.tl;

      var text = title.parentNode.nextSibling;
      this.animateTitle(title, tl);
      tl.to(back, 1, { x: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, 0.2).pause();
      tl.to(text, 1, { y: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, '-=0.4').play();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _utils.withinViewport)(true);
    }
  }, {
    key: 'initElementInViewportChecker',
    value: function initElementInViewportChecker() {
      var _this2 = this;

      var self = this;
      var cnt = 0;
      var maxCount = document.querySelectorAll('.onscroll-reveal').length - 4;
      var currentSection = 0;
      var allSectionsAnimated = false;

      (0, _utils.withinViewport)(null, 'onscroll-reveal', 'inViewport', function (isVisible, el) {
        if (isVisible) {
          if (el.classList.contains('resume-section')) {
            var id = parseInt(el.attributes['data-navid'].value, 10);

            if (currentSection !== id) {
              currentSection = id;
              _this2.setActiveNavLink(id);
            }
          }
        }

        if (isVisible && !el.isAnimated && !allSectionsAnimated) {
          var _state = _this2.state,
              imagesVisible = _state.imagesVisible,
              processbarVisible = _state.processbarVisible;


          if (el.classList.contains('processbars')) {
            _this2.changeStateVisibility(el, processbarVisible, 'processbarVisible', 'processbar');

            el.isAnimated = true;
            cnt++;
          }

          if (el.classList.contains('images-container')) {
            _this2.changeStateVisibility(el, imagesVisible, 'imagesVisible', 'images-container');

            el.isAnimated = true;
            cnt++;
          }

          if (el.classList.contains('projects-wrapper')) {
            _this2.setState(function (prevState, props) {
              return { projectsVisible: true };
            });

            el.isAnimated = true;
            cnt++;
          }

          if (el.classList.contains('resume-section')) {
            var _id = el.attributes['data-navid'].value;
            var row = self.refs['rows' + _id];
            if (row) {
              self.animateSections(row.children, 3);
              el.isAnimated = true;
            }
          }

          if (cnt === maxCount) {
            allSectionsAnimated = true;
          }
        }
      });
    }
  }, {
    key: 'setActiveNavLink',
    value: function setActiveNavLink(id) {
      var links = this.state.linksState.map(function () {
        return false;
      });
      links[id] = true;

      this.setState(function (prevState, props) {
        return { linksState: links };
      });
    }
  }, {
    key: 'changeStateVisibility',
    value: function changeStateVisibility(el, statePropVal, statePropName, className) {
      var newArr = [].concat(_toConsumableArray(statePropVal));
      var newStateProp = {};

      for (var i = 0, len = statePropVal.length; i < len; i++) {
        if (el.classList.contains(className + i) && !newArr[i]) {
          newArr[i] = true;
        }
      }

      newStateProp[statePropName] = newArr;
      this.setState(function () {
        return newStateProp;
      });
    }

    /**
     * Animates section content
     */

  }, {
    key: 'animateSections',
    value: function animateSections(rows, indexMax, tl) {
      if (rows.length > 0) {
        tl = tl ? tl : new _gsap.TimelineLite();
        var extraDelay = 0;
        var title = rows[0].parentNode && rows[0].parentNode.previousSibling ? rows[0].parentNode.previousSibling : null;

        if (title) {
          this.animateTitle(title.children[0], tl);
          if (!indexMax) {
            extraDelay = 0.8;
          }
        }

        var len = indexMax || rows.length;

        for (var i = 0; i < len; i++) {
          var cols = rows[i].children;
          for (var j = 0, _len = cols.length; j < _len; j++) {
            var delayBetween = 0.4 + (i + 1) / 10 + (j + i + 1) / 10;
            tl.to(cols[j], 1, { y: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, delayBetween + extraDelay);
          }
        }

        tl.play();
      }
    }

    /**
     * Animates section title
     */

  }, {
    key: 'animateTitle',
    value: function animateTitle(title, tl) {
      return tl.set(title, { rotationX: -45 }).to(title, 1.5, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 0.5);
    }
  }, {
    key: 'back',
    value: function back(ev) {
      ev.preventDefault();
      this.refs['images-container0'].classList.add('fadeOut');
      this.state.tl.timeScale(4).reverse();
      this.props.actions.revealAnimationBackward();
      setTimeout(this.props.history.push, 1500, '/');
    }
  }, {
    key: 'renderSection',
    value: function renderSection(section, index, last) {
      var _this3 = this;

      var more = this.props.translations.more;

      var rows = section.rows ? this.renderRows(section.rows, index) : null;
      var colImages = this.renderColImages(section.images, index);

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('resume-section onscroll-reveal'),
          'data-navid': index,
          key: index,
          ref: 'section' + index
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            { className: 'name visible relative' },
            _react2.default.createElement(
              'span',
              { ref: index === 0 ? 'title' : '' },
              section.title
            )
          ),
          rows ? _react2.default.createElement(
            'div',
            { className: 'resume-section--row', ref: 'rows' + index },
            rows,
            rows.length > 3 ? _react2.default.createElement(
              'div',
              { className: 'text-center' },
              _react2.default.createElement(
                'button',
                {
                  ref: 'morebutton' + index,
                  className: 'more',
                  onClick: function onClick(e) {
                    return _this3.removeHiddenClass(e, index, rows);
                  }
                },
                more
              )
            ) : null
          ) : null,
          section.text ? _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('resume-section--row', index === 0 ? 'first' : '')
            },
            _react2.default.createElement(
              'div',
              { className: 'resume-row' },
              _react2.default.createElement(
                'p',
                { className: 'max-1000 text-section' },
                section.text
              )
            )
          ) : null,
          colImages ? colImages : null
        ),
        _react2.default.createElement(_waveSvg2.default, null)
      );
    }
  }, {
    key: 'renderColImages',
    value: function renderColImages(images, index) {
      var imagesVisible = this.state.imagesVisible;

      var left = [];
      var right = [];

      for (var i = 0, len = images.length; i < len; i++) {
        if (i % 2 === 0) {
          left.push(images[i]);
        } else {
          right.push(images[i]);
        }
      }

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('onscroll-reveal', 'images-container', 'images-container' + index),
          ref: 'images-container' + index
        },
        _react2.default.createElement(_evenodd2.default, {
          left: left,
          right: right,
          type: index % 2 !== 0 ? 'odd' : 'even',
          visible: imagesVisible[index]
        })
      );
    }
  }, {
    key: 'renderRows',
    value: function renderRows(rows, index) {
      var _this4 = this;

      return rows.map(function (row, i) {
        var hidden = !_this4.state.sectionsVisible[index] && i > 2 ? 'hidden' : '';

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('resume-row', hidden), key: 'row-' + i },
          _react2.default.createElement(
            'div',
            { className: 'resume-left' },
            _react2.default.createElement(
              'h2',
              null,
              row.title
            ),
            _react2.default.createElement(
              'h2',
              null,
              row.secondTitle
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'resume-right' },
            _react2.default.createElement(
              'p',
              null,
              row.content
            )
          )
        );
      });
    }

    /**
    * Removes hidden class from row and starts animation on section texts
    */

  }, {
    key: 'removeHiddenClass',
    value: function removeHiddenClass(e, index, rows) {
      var _this5 = this;

      e.preventDefault();
      var newArr = [].concat(_toConsumableArray(this.state.sectionsVisible));
      newArr[index] = true;
      var newRows = [];
      rows = this.refs['rows' + index].children;

      for (var i = 3; i < rows.length; i++) {
        var row = rows[i];

        if (row.className.indexOf('hidden') > 1) {
          newRows.push(rows[i]);
        }
      }

      var button = this.refs['morebutton' + index];
      button.classList.add('fadeOutButton');

      setTimeout(function () {
        button.classList.add('hidden');
        _this5.setState(function (prevState, props) {
          return { sectionsVisible: newArr };
        });
      }, 250);
      this.animateSections(newRows);
    }
  }, {
    key: 'renderProcessbarsList',
    value: function renderProcessbarsList(processbars, processbarVisible, index, title) {
      return _react2.default.createElement(
        'div',
        { className: 'resume-section onscroll-reveal', 'data-navid': index },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_processBarsList2.default, {
            processbars: processbars,
            visibleArr: processbarVisible,
            title: processbars[0].mainTitle
          })
        ),
        _react2.default.createElement(_waveSvg2.default, null)
      );
    }
  }, {
    key: 'renderProjects',
    value: function renderProjects(projects, index) {
      var projectsVisible = this.state.projectsVisible;

      return _react2.default.createElement(
        'div',
        {
          className: 'resume-section onscroll-reveal projects-wrapper',
          'data-navid': index
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_projects2.default, { data: projects, visible: projectsVisible })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var translations = this.props.translations;
      var processbars = translations.processbars,
          career = translations.career,
          education = translations.education,
          projects = translations.projects,
          about = translations.about,
          nav = translations.nav;
      var _state2 = this.state,
          processbarVisible = _state2.processbarVisible,
          linksState = _state2.linksState;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', onClick: function onClick(ev) {
              return _this6.back(ev);
            } },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('job-application--button-container', 'button-left', 'button-left--offset'),
              ref: 'back'
            },
            _react2.default.createElement(_button2.default, { text: translations.back })
          )
        ),
        _react2.default.createElement(_nav2.default, { links: nav, linksState: linksState }),
        _react2.default.createElement(
          'div',
          { className: 'resume-container', ref: 'container' },
          this.renderSection(about, 0),
          this.renderSection(education, 1),
          this.renderSection(career, 2),
          this.renderProcessbarsList(processbars, processbarVisible, 3),
          this.renderProjects(projects, 4)
        )
      );
    }
  }]);

  return Resume;
}(_react.Component);

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */


function mapStateToProps(state) {
  return { common: state.common, translations: state.common.translations };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Resume));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _processBarsList = __webpack_require__(61);

var _processBarsList2 = _interopRequireDefault(_processBarsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _processBarsList2.default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _processBars = __webpack_require__(62);

var _processBars2 = _interopRequireDefault(_processBars);

var _gsap = __webpack_require__(5);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProcessBarsList = function (_Component) {
  _inherits(ProcessBarsList, _Component);

  function ProcessBarsList(props) {
    _classCallCheck(this, ProcessBarsList);

    var _this = _possibleConstructorReturn(this, (ProcessBarsList.__proto__ || Object.getPrototypeOf(ProcessBarsList)).call(this, props));

    _this.state = {
      componentRenderCount: 0
    };
    return _this;
  }

  _createClass(ProcessBarsList, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.componentRenderCount <= nextProps.visibleArr.length + 2) {
        return true;
      }

      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visibleArr.includes(true) && this.state.componentRenderCount <= nextProps.visibleArr.length + 2) {
        var cnt = this.state.componentRenderCount;
        cnt++;
        this.setState(function (prevState, props) {
          return { componentRenderCount: cnt };
        });
      }
    }
  }, {
    key: 'renderRows',
    value: function renderRows() {
      var _props = this.props,
          processbars = _props.processbars,
          visibleArr = _props.visibleArr;

      if (visibleArr[0]) {
        this.animateTitle(this.refs.title.children[0]);
      }

      return processbars.map(function (processbar, i) {
        return _react2.default.createElement(
          'div',
          { key: 'processbarlist-row' + i },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('onscroll-reveal processbars', 'processbar' + i)
            },
            visibleArr[i] ? _react2.default.createElement(_processBars2.default, {
              height: 20,
              data: processbar.items,
              id: i,
              title: processbar.title
            }) : null
          )
        );
      });
    }

    /**
     * Animates section title
     */

  }, {
    key: 'animateTitle',
    value: function animateTitle(title) {
      var tl = new _gsap.TimelineLite();
      tl.set(title, { rotationX: -45 }).to(title, 1.5, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 0.5);
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'name visible relative', ref: 'title' },
          _react2.default.createElement(
            'span',
            null,
            title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'processbars-list-container' },
          this.renderRows()
        )
      );
    }
  }]);

  return ProcessBarsList;
}(_react.Component);

ProcessBarsList.propTypes = {
  processbars: _propTypes2.default.array.isRequired,
  visibleArr: _propTypes2.default.array.isRequired,
  title: _propTypes2.default.string.isRequired
};
exports.default = ProcessBarsList;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _processbars = __webpack_require__(63);

var _processbars2 = _interopRequireDefault(_processbars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _processbars2.default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _gsap = __webpack_require__(5);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Processbar = function (_Component) {
  _inherits(Processbar, _Component);

  function Processbar(props) {
    _classCallCheck(this, Processbar);

    var _this = _possibleConstructorReturn(this, (Processbar.__proto__ || Object.getPrototypeOf(Processbar)).call(this, props));

    _this.animateProcessbar = _this.animateProcessbar.bind(_this);
    _this.resize = _this.resize.bind(_this);
    _this.state = {
      tl: new _gsap.TimelineMax()
    };
    return _this;
  }

  _createClass(Processbar, [{
    key: 'resize',
    value: function resize() {
      var tl = new _gsap.TimelineLite();

      for (var i = 0, len = this.props.data.length; i < len; i++) {
        var counterEl = this.refs['processcounter-' + i];
        var processbarEl = this.refs['processbar-' + i];

        if (processbarEl) {
          var percentage = this.props.data[i].percentage;
          var fullWidth = processbarEl.viewportElement.clientWidth || processbarEl.parentNode.parentNode.clientWidth;
          var calcPercentageWidth = percentage / 100 * fullWidth;
          tl.to(counterEl, 0.3, {
            x: calcPercentageWidth,
            ease: _gsap.Power2.easeOut
          }, '-=0.3').to(processbarEl, 0.5, {
            attr: { width: percentage + '%' },
            ease: _gsap.Power2.easeOut
          }, '-=0.5');
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
      var tl = this.state.tl;
      tl.add(this.animateTitle(), 1);
      tl.add(this.animateColumns(), 1.5);
      tl.add(this.animateProcessbar(), 1.5);
    }
  }, {
    key: 'animateTitle',
    value: function animateTitle() {
      var tl = new _gsap.TimelineLite();
      var title = this.refs['title-' + this.props.id];

      tl.set(title, { rotationX: -45 }).to(title, 1, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 0.2);

      return tl;
    }
  }, {
    key: 'animateColumns',
    value: function animateColumns(timeScale) {
      var id = this.props.id;
      var tl = new _gsap.TimelineLite();
      var tlL = new _gsap.TimelineLite();
      var tlR = new _gsap.TimelineLite();
      tlL.set('.processbar-left-' + id, {
        autoAlpha: 0,
        x: '-200px'
      }).staggerTo('.processbar-left-' + id, 1, { autoAlpha: 1, x: '0%', ease: _gsap.Elastic.easeOut, easeParams: [0.9, 1] }, 1.4);
      tlR.set('.processbar-right-' + id, {
        autoAlpha: 0,
        x: '200px'
      }).staggerTo('.processbar-right-' + id, 1, { autoAlpha: 1, x: '0%', ease: _gsap.Elastic.easeOut, easeParams: [0.9, 1] }, 1.4);

      tl.add(tlL, 0);
      tl.add(tlR, 0);

      return tl;
    }
  }, {
    key: 'animateProcessbar',
    value: function animateProcessbar() {
      var _this2 = this;

      var tl = new _gsap.TimelineLite();
      var counters = [];

      var _loop = function _loop(i, len) {
        var counterEl = _this2.refs['processcounter-' + i];
        var processbarEl = _this2.refs['processbar-' + i];
        var percentage = _this2.props.data[i].percentage;
        var fullWidth = processbarEl.viewportElement.clientWidth || processbarEl.parentNode.parentNode.clientWidth;
        var calcPercentageWidth = percentage / 100 * fullWidth;
        counters.push({ score: 0 });

        tl.set(counterEl, {
          autoAlpha: 0,
          scale: 0,
          z: 0.01,
          y: '20px'
        }).to(counterEl, 1.5, {
          scale: 1,
          y: '0%',
          autoAlpha: 1,
          ease: _gsap.Elastic.easeOut,
          easeParams: [1.2, 0.3]
        }).to(counterEl, 1.5, {
          x: calcPercentageWidth,
          ease: _gsap.Power2.easeOut
        }, '-=1.5').to(counters[i], 1.5, {
          score: '+=' + percentage,
          roundProps: 'score',
          onUpdate: function onUpdate() {
            counterEl.children[0].innerHTML = counters[i].score;
          },
          ease: _gsap.Linear.easeNone
        }, '-=1.5').to(processbarEl, 1.5, {
          attr: { width: percentage + '%' },
          ease: _gsap.Power2.easeOut
        }, '-=1.5');
      };

      for (var i = 0, len = this.props.data.length; i < len; i++) {
        _loop(i, len);
      }

      return tl;
    }
  }, {
    key: 'renderRows',
    value: function renderRows(rows, id) {
      var _this3 = this;

      return rows.map(function (row, i) {
        return _react2.default.createElement(
          'div',
          { className: 'processbar-row', key: i },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('processbar-left', 'processbar-left-' + id)
            },
            _react2.default.createElement(
              'h2',
              null,
              row.name
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('processbar-right', 'processbar-right-' + id)
            },
            _react2.default.createElement(
              'span',
              { className: 'processbar-counter', ref: 'processcounter-' + i },
              _react2.default.createElement(
                'span',
                null,
                '0'
              ),
              _react2.default.createElement(
                'span',
                null,
                '%'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'svg',
                {
                  viewBox: '0 0 622 20',
                  preserveAspectRatio: 'xMidYMid meet',
                  className: 'processbar-svg',
                  ref: 'svg',
                  height: _this3.props.height,
                  width: '100%',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                _react2.default.createElement('rect', { height: _this3.props.height, fill: '#CCCCCC', width: '100%' }),
                _react2.default.createElement('rect', {
                  height: _this3.props.height,
                  fill: '#FF92F6',
                  width: '0',
                  ref: 'processbar-' + i
                })
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          id = _props.id,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'processbar-container' },
        _react2.default.createElement(
          'h2',
          { className: 'name processbars-header' },
          _react2.default.createElement(
            'span',
            { ref: 'title-' + id },
            title
          )
        ),
        this.renderRows(data, id)
      );
    }
  }]);

  return Processbar;
}(_react.Component);

Processbar.propTypes = {
  height: _propTypes2.default.number.isRequired,
  data: _propTypes2.default.array.isRequired,
  title: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.number.isRequired
};
exports.default = Processbar;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".processbar-container{padding:0;max-width:1200px;margin:0 auto 100px}.processbar-row{max-width:992px;margin:0 auto;padding:1.2em 0;display:flex;flex-direction:row;align-items:center}.processbar-left{flex:1 0 0;text-align:right;min-width:250px}.processbar-right{flex:3 0 0;position:relative}.processbar-left,.processbar-right{margin:0 30px;width:100%}.processbar-left h2{margin:0;position:relative;top:-5px}.processbar-svg{border-radius:5px;width:100%}.processbar-counter{position:absolute;font-weight:400;top:-45px;left:-30px;min-width:60px;max-width:60px;font-family:Arial,Helvetica,sans-serif;font-weight:700;font-size:20px;letter-spacing:1px;text-transform:uppercase;background-color:#ff92f6;color:#fff;padding:5px 10px;opacity:0;border-radius:5px}.processbar-counter:after{content:\"\";position:absolute;bottom:-9px;left:50%;margin-left:-10px;border-width:10px 10px 0;border-style:solid;border-color:#ff92f6 transparent;display:block;width:0}.processbar-counter span:nth-child(2){font-size:14px;font-weight:400}@media only screen and (max-width:992px){.processbar-left h2:first-child{margin-top:10px;font-size:40px}.processbar-left h2:nth-child(2){font-size:30px}.processbar-left,.processbar-right{margin:0 10px}}@media only screen and (max-width:768px){.processbar-left h2:first-child{margin-top:0;letter-spacing:2px;font-size:28px}.processbar-container{padding:45px 0;margin:0 auto}.processbar-row{flex-direction:column-reverse;padding:30px 0 10px}.processbar-left h2{text-align:left}.processbar-left{min-width:0}.processbar-left,.processbar-right{margin:0;width:100%}}", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".processbars-list-container{padding:100px 0 0}.processbars{min-height:400px}.processbars-header{text-align:center;position:relative;margin-bottom:60px}.processbars-header span{font-size:50px;text-transform:uppercase;opacity:0;transform:translate3d(0,50%,0);display:block}@media only screen and (max-width:1200px){.processbars-header{letter-spacing:0;padding-left:50px}}@media only screen and (max-width:992px){.processbars-header{font-size:50px;padding-left:20px;text-align:center;padding:0 20px;margin-bottom:50px}}@media only screen and (max-width:768px){.processbars-header{padding:0}.processbars-header span{font-size:30px}.processbars-list-container{padding:30px 0 0}}", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(67);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _projects2.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gsap = __webpack_require__(5);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _imageBlurWrapper = __webpack_require__(22);

var _imageBlurWrapper2 = _interopRequireDefault(_imageBlurWrapper);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_Component) {
  _inherits(Projects, _Component);

  function Projects(props) {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

    _this.state = {
      tl: new _gsap.TimelineLite(),
      hasShown: false
    };
    return _this;
  }

  _createClass(Projects, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var _this2 = this;

      if (nextState.hasShown === false) {
        this.setState(function (prevState, props) {
          return { hasShown: true };
        });

        this.animateTitle(this.refs.title.children[0]);

        setTimeout(function () {
          _this2.animateComponent();
        }, 1200);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.visible && !nextState.hasShown;
    }
  }, {
    key: 'animateComponent',
    value: function animateComponent() {
      var tl = this.state.tl;

      var children = this.refs.container.children;
      var headers = [];
      var images = [];

      for (var i = 0, len = children.length; i < len; i++) {
        if (children[i].tagName !== 'H1') {
          headers.push(children[i].children[0]);

          var temp = children[i].children[1].children;
          for (var j = 0, _len = temp.length; j < _len; j++) {
            if (temp[j].children[0]) {
              images.push(temp[j].children[0]);
            }
          }
        }
      }

      tl.staggerTo(headers, 1.5, {
        y: '0%',
        autoAlpha: 1,
        ease: _gsap.Elastic.easeOut,
        easeParams: [0.9, 1]
      }, 1).staggerTo(images, 1.5, {
        y: '0%',
        autoAlpha: 1,
        ease: _gsap.Elastic.easeOut,
        easeParams: [0.9, 1]
      }, 0.1, 0.3);
    }
  }, {
    key: 'renderHobbyProjects',
    value: function renderHobbyProjects(projects) {
      var visible = this.props.visible;

      return projects.map(function (project, i) {
        var id = project.id,
            url = project.url,
            image = project.image,
            thumbnail = project.thumbnail,
            text = project.text,
            title = project.title,
            titleText = project.titleText;


        return _react2.default.createElement(
          'a',
          {
            href: url,
            title: text,
            key: 'project-image' + i,
            className: 'project',
            target: '_blank'
          },
          _react2.default.createElement(
            'div',
            { className: 'even' },
            _react2.default.createElement(_imageBlurWrapper2.default, {
              id: id,
              src: 'images/' + image,
              thumbnail: 'images/' + thumbnail,
              alt: text,
              text: text,
              overlay: true,
              overlayTitle: title,
              overlayText: titleText,
              visible: visible
            })
          )
        );
      });
    }

    /**
     * Animates section title
     */

  }, {
    key: 'animateTitle',
    value: function animateTitle(title) {
      var tl = new _gsap.TimelineLite();
      tl.set(title, { rotationX: -45 }).to(title, 1.5, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 0.5);
    }
  }, {
    key: 'renderSection',
    value: function renderSection(sections) {
      var _this3 = this;

      return sections.map(function (section, i) {
        var title = section.title,
            projects = section.projects,
            text = section.text;

        var titleClass = i === 1 ? 'work-header' : '';

        return _react2.default.createElement(
          'div',
          { key: 'project-' + i },
          _react2.default.createElement(
            'h2',
            { className: (0, _classnames2.default)('project-header', titleClass) },
            _react2.default.createElement(
              'span',
              null,
              title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'image-blur--container' },
            i === 0 ? _this3.renderHobbyProjects(projects) : null,
            i === 1 ? _react2.default.createElement('p', {
              className: 'work-text',
              dangerouslySetInnerHTML: { __html: text }
            }) : null
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          visible = _props.visible;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'name visible relative name-project', ref: 'title' },
          _react2.default.createElement(
            'span',
            null,
            data[0].mainTitle
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'projects-list-container', ref: 'container' },
          visible ? this.renderSection(data) : null
        )
      );
    }
  }]);

  return Projects;
}(_react.Component);

Projects.propTypes = {
  data: _propTypes2.default.array.isRequired,
  visible: _propTypes2.default.bool.isRequired
};
exports.default = Projects;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _stackBlur = __webpack_require__(69);

__webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Image blur wrapper component
 * Loads thumbnail image in canvas and performes
 * blur algoritim to blur image. When bigger image has loaded
 * it hides canvas and shows bigger image
 */
var ImageBlurWrapper = function (_Component) {
  _inherits(ImageBlurWrapper, _Component);

  function ImageBlurWrapper() {
    _classCallCheck(this, ImageBlurWrapper);

    return _possibleConstructorReturn(this, (ImageBlurWrapper.__proto__ || Object.getPrototypeOf(ImageBlurWrapper)).apply(this, arguments));
  }

  _createClass(ImageBlurWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          blur = _props.blur,
          thumbnail = _props.thumbnail;

      var img = new Image();
      img.src = thumbnail || 'images/thumbnails/placeholder.png';
      img.onload = function () {
        var canvas = _this2.refs.canvas;
        (0, _stackBlur.processImage)(img, canvas, blur || 10);
      };
    }
  }, {
    key: 'loadBigImage',
    value: function loadBigImage(src) {
      var _this3 = this;

      var img = new Image();
      img.src = src;
      img.onload = function () {
        _this3.refs.canvas.parentNode.classList.add('heightAuto');
        _this3.refs.canvas.classList.add('image-blur--image--hide');
        _this3.refs.image.classList.add('image-blur--image--show');
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.visible === true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          src = _props2.src,
          alt = _props2.alt,
          className = _props2.className,
          text = _props2.text,
          overlay = _props2.overlay,
          overlayText = _props2.overlayText,
          overlayTitle = _props2.overlayTitle,
          visible = _props2.visible;


      if (visible === true) {
        this.loadBigImage(src);
      }

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('image-blur--wrapper', className),
          ref: 'wrapper'
        },
        _react2.default.createElement(
          'figure',
          { className: 'image-blur--wrapper-image' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', {
              src: visible ? src : '',
              alt: alt,
              className: 'image-blur--image',
              ref: 'image'
            }),
            _react2.default.createElement('canvas', { ref: 'canvas', className: 'image-blur--canvas' })
          ),
          overlay ? _react2.default.createElement(
            'div',
            { className: 'image-blur--wrapper-overlay' },
            _react2.default.createElement(
              'h2',
              null,
              overlayTitle
            ),
            _react2.default.createElement(
              'p',
              null,
              overlayText
            )
          ) : null
        ),
        text ? _react2.default.createElement(
          'figcaption',
          null,
          _react2.default.createElement(
            'p',
            null,
            text
          )
        ) : null
      );
    }
  }]);

  return ImageBlurWrapper;
}(_react.Component);

ImageBlurWrapper.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  txt: _propTypes2.default.string,
  thumbnail: _propTypes2.default.string.isRequired,
  visible: _propTypes2.default.bool,
  blur: _propTypes2.default.string,
  id: _propTypes2.default.number.isRequired,
  overlay: _propTypes2.default.bool,
  overlayTitle: _propTypes2.default.string,
  overlayText: _propTypes2.default.string
};
exports.default = ImageBlurWrapper;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processImage = processImage;
/*
    StackBlur - a fast almost Gaussian Blur For Canvas
    Version:     0.5
    Author:        Mario Klingemann
    Contact:     mario@quasimondo.com
    Website:    http://www.quasimondo.com/StackBlurForCanvas
    Twitter:    @quasimondo
    In case you find this class useful - especially in commercial projects -
    I am not totally unhappy for a small donation to my PayPal account
    mario@quasimondo.de
    Or support me on flattr:
    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript
    Copyright (c) 2010 Mario Klingemann
    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    */

var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];

var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

function processImage(img, canvas, radius, parent) {
  var w = img.naturalWidth;
  var h = img.naturalHeight;
  var ratio = h / w;
  canvas.parentNode.style.height = ratio * canvas.clientWidth + 'px';
  canvas.width = w;
  canvas.height = h;

  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);

  if (isNaN(radius) || radius < 1) return;

  processCanvasRGB(canvas, 0, 0, w, h, radius);
}

function getImageDataFromCanvas(canvas, top_x, top_y, width, height) {
  var context = canvas.getContext('2d');
  var imageData = null;

  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      throw new Error('unable to access local image data: ' + e);
    }
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }

  return imageData;
}

function processCanvasRGB(canvas, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) return;
  radius |= 0;

  var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);
  imageData = processImageDataRGB(imageData, top_x, top_y, width, height, radius);

  canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGB(imageData, top_x, top_y, width, height, radius) {
  var pixels = imageData.data;

  var x = void 0,
      y = void 0,
      i = void 0,
      p = void 0,
      yp = void 0,
      yi = void 0,
      yw = void 0,
      r_sum = void 0,
      g_sum = void 0,
      b_sum = void 0,
      r_out_sum = void 0,
      g_out_sum = void 0,
      b_out_sum = void 0,
      r_in_sum = void 0,
      g_in_sum = void 0,
      b_in_sum = void 0,
      pr = void 0,
      pg = void 0,
      pb = void 0,
      rbs = void 0;

  var div = radius + radius + 1;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd = null;
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;

  yw = yi = 0;

  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;

      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi] = r_sum * mul_sum >> shg_sum;
      pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
      pixels[yi + 2] = b_sum * mul_sum >> shg_sum;

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;

      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2; // eslint-disable-line

      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];

      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;

      stackIn = stackIn.next;

      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;

      stackOut = stackOut.next;

      yi += 4;
    }
    yw += width;
  }

  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;

    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;

      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;

      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;

      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = r_sum * mul_sum >> shg_sum;
      pixels[p + 1] = g_sum * mul_sum >> shg_sum;
      pixels[p + 2] = b_sum * mul_sum >> shg_sum;

      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;

      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;

      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << // eslint-disable-line
      2;

      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];

      stackIn = stackIn.next;

      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;

      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;

      stackOut = stackOut.next;

      yi += width;
    }
  }

  return imageData;
}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".image-blur--container,.image-blur--container .extend{max-width:1200px;margin:0 auto;display:flex;justify-content:center;flex-flow:row;padding-bottom:100px}.image-blur--canvas{display:block;position:absolute;top:0;left:0;width:100%;height:100%;margin:auto;transition:visibility 0s linear .5s,opacity .1s .4s}.image-blur--image{width:100%;transition:all 3s}.image-blur--image,.image-blur--image--hide{visibility:hidden;opacity:0;backface-visibility:hidden}.image-blur--image--show{visibility:visible;opacity:1;transition:transform .4s,visibility 0s linear,opacity .4s 0s}.image-blur--wrapper{position:relative;width:100%;overflow:hidden}.image-blur--wrapper p{font-size:20px}.even,.odd{width:50%;padding:0 25px;opacity:0;transform:translate3d(0,100px,0)}a .even,a .odd{width:auto}.even img.image-blur--image,.odd img.image-blur--image{transform:scaleX(1);transition:transform .4s}.even img:hover,.odd img:hover{transform:scale3d(1.1,1.1,1.1)}.image-blur--wrapper-image{transition:transform .4s;overflow:hidden;transform:scaleX(1);position:relative}.even .image-blur--wrapper-image:hover,.odd .image-blur--wrapper-image:hover{overflow:hidden;transform:scale3d(.98,.98,.98)}.image-blur--wrapper-image img{height:100%;cursor:pointer}.even:first-child,.odd:nth-child(2){padding:0 25px}.even:nth-child(2),.odd:first-child{padding:100px 25px 0}.image-blur--wrapper-overlay{background-image:linear-gradient(45deg,rgba(226,60,99,.7),rgba(145,58,252,.7),rgba(16,11,192,.7));padding:3em;position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;transition:all .4s;visibility:hidden;opacity:0}.even:hover .image-blur--wrapper-overlay,.odd:hover .image-blur--wrapper-overlay{visibility:visible;opacity:1}.image-blur--wrapper-overlay h2{text-align:left;width:100%;font-size:3em;margin:0;color:#fff;transform:translate3d(0,80px,0);opacity:0;transition:transform .4s,opacity .4s}.even:hover .image-blur--wrapper-overlay h2,.odd:hover .image-blur--wrapper-overlay h2{transform:translateZ(0);opacity:1}.image-blur--wrapper-overlay p{margin:1em 0 0;font-size:.85em;letter-spacing:.15em;text-align:left;width:100%;font-size:16px;font-weight:700;text-transform:uppercase;color:#fff;transform:translate3d(0,80px,0);opacity:0;transition:transform .4s,opacity .4s}.even:hover .image-blur--wrapper-overlay p,.odd:hover .image-blur--wrapper-overlay p{transform:translateZ(0);transition-delay:.1s;opacity:1}@media only screen and (max-width:1200px){.even,.odd{padding:0 15px}}@media only screen and (max-width:992px){.image-blur--wrapper-overlay{padding:1em}.image-blur--wrapper-overlay h2{font-size:2em}.image-blur--wrapper-overlay p{margin:0;font-size:14px}.text-section{padding:0 15px}}@media only screen and (max-width:768px){.even,.even:first-child,.odd,.odd:nth-child(2){padding:0 10px}.even:nth-child(2),.odd:first-child{padding:70px 10px 0}.image-blur--container{padding-bottom:50px}}@media only screen and (max-width:600px){.image-blur--wrapper{max-width:none;margin-bottom:30px}.even,.odd{padding:0!important;width:100%}.image-blur--container,.image-blur--container .extend{flex-flow:column}.text-section{padding:0}}", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".projects-list-container{padding:100px 0 0}.project-header{text-align:center;position:relative;margin-bottom:100px;transform:translate3d(0,100px,0);opacity:0}.project-header span{font-size:50px;text-transform:uppercase}.project{margin-bottom:80px}.project:nth-last-of-type(-n+2){margin-bottom:0}.project .even:first-child,.project .odd:nth-child(2){padding:0 40px}.work-link{width:25%;margin-bottom:0}.work{padding:0 40px;text-align:center}.work h2{font-size:35px;color:#fff}.work-header{margin-bottom:40px}.work-text{text-align:center;max-width:992px}@media only screen and (max-width:1200px){.project-header{letter-spacing:0;padding-left:50px}}@media only screen and (max-width:992px){.project-header{font-size:50px;padding-left:20px;text-align:center;padding:0 20px;margin-bottom:50px}.project .even:first-child,.project .odd:nth-child(2){padding:0 20px}.project{margin-bottom:40px;width:50%}.project .image-blur--wrapper{max-width:inherit}}@media only screen and (max-width:768px){.project-header{padding:0}.project-header span{font-size:30px}.project-list-container{padding:30px 0 0}.projects-list-container{padding:40px 0 0}}@media only screen and (max-width:700px){.project{width:100%}}", ""]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _evenodd = __webpack_require__(73);

var _evenodd2 = _interopRequireDefault(_evenodd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _evenodd2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gsap = __webpack_require__(5);

var _imageBlurWrapper = __webpack_require__(22);

var _imageBlurWrapper2 = _interopRequireDefault(_imageBlurWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Evenodd = function (_Component) {
  _inherits(Evenodd, _Component);

  function Evenodd() {
    _classCallCheck(this, Evenodd);

    var _this = _possibleConstructorReturn(this, (Evenodd.__proto__ || Object.getPrototypeOf(Evenodd)).call(this));

    _this.state = {
      hasShown: false
    };
    return _this;
  }

  _createClass(Evenodd, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.hasShown === false) {
        this.setState(function (prevState, props) {
          return { hasShown: true };
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.visible && !nextState.hasShown;
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation(elements) {
      var tl = new _gsap.TimelineLite();
      elements = elements[0].classList.contains('odd') ? [elements[1], elements[0]] : elements;
      tl.staggerTo(elements, 1, { y: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, 0.2);
    }
  }, {
    key: 'renderCol',
    value: function renderCol(images) {
      var _this2 = this;

      return images.map(function (image, i) {
        return _this2.renderImages(image);
      });
    }
  }, {
    key: 'renderImages',
    value: function renderImages(image) {
      var visible = this.props.visible;

      return _react2.default.createElement(_imageBlurWrapper2.default, {
        key: image.id,
        id: image.id,
        src: 'images/' + image.url,
        thumbnail: 'images/' + image.thumbnail,
        alt: image.text,
        text: image.text,
        visible: visible
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          left = _props.left,
          right = _props.right,
          type = _props.type,
          visible = _props.visible;


      if (visible === true) {
        this.startAnimation(this.refs.container.children);
      }

      return _react2.default.createElement(
        'div',
        { className: 'image-blur--container', ref: 'container' },
        _react2.default.createElement(
          'div',
          { className: type ? type : 'even' },
          this.renderCol(left)
        ),
        _react2.default.createElement(
          'div',
          { className: type ? type : 'odd' },
          this.renderCol(right)
        )
      );
    }
  }]);

  return Evenodd;
}(_react.Component);

Evenodd.propTypes = {
  left: _propTypes2.default.array.isRequired,
  right: _propTypes2.default.array.isRequired,
  type: _propTypes2.default.string,
  visible: _propTypes2.default.bool
};
exports.default = Evenodd;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nav = __webpack_require__(75);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nav2.default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(3);

var _gsap = __webpack_require__(5);

__webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.onClickHandler = _this.onClickHandler.bind(_this);

    _this.state = {
      tl: new _gsap.TimelineLite()
    };
    return _this;
  }

  _createClass(Nav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var winW = window.innerWidth;
      var ul = this.refs.ul;
      var tl = this.state.tl;

      var animateOptions = { x: '0%', opacity: 1, ease: _gsap.Power2.easeOut };
      if (winW <= 1500) {
        animateOptions = { y: '0%', opacity: 1, ease: _gsap.Power2.easeOut };
      }

      tl.staggerTo(ul.children, 0.7, animateOptions, 0.1).pause();

      setTimeout(function () {
        tl.play();
      }, 1000);
    }
  }, {
    key: 'onClickHandler',
    value: function onClickHandler(id) {
      var element = document.querySelector('div[data-navid="' + id + '"]');
      window.scroll(0, id !== 0 ? element.offsetTop - 50 : 0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.common.back === true) {
        this.state.tl.timeScale(4).reverse();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          links = _props.links,
          linksState = _props.linksState;


      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'nav', ref: 'ul' },
          links.map(function (link, i) {
            var active = linksState[i] ? 'active' : '';

            return _react2.default.createElement(
              'li',
              {
                key: link.id,
                className: active,
                onClick: function onClick() {
                  return _this2.onClickHandler(i);
                }
              },
              link.text,
              _react2.default.createElement(
                'svg',
                { className: (0, _classnames2.default)('icon-line', active) },
                _react2.default.createElement('use', {
                  xmlnsXlink: 'http://www.w3.org/1999/xlink',
                  xlinkHref: '#svg_line'
                })
              )
            );
          })
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */


Nav.propTypes = {
  linksState: _propTypes2.default.array.isRequired,
  links: _propTypes2.default.array.isRequired
};
function mapStateToProps(state) {
  return { common: state.common };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Nav);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "nav{position:fixed;right:0;z-index:3;width:100%;max-width:158px}ul.nav{list-style:none;padding:1.5em 2em}.nav li{display:block;width:100%;padding:10px;text-align:left;font-family:Roboto Mono,monospace;font-size:14px;font-weight:500;color:#484848;text-transform:uppercase;position:relative;transition:color .15s ease-in-out;cursor:pointer;transform:translate3d(200%,0,0)}.nav li.active,.nav li:hover{color:#000;font-weight:700}.icon-line{position:absolute;top:100%;left:-30%;overflow:hidden;margin:0;width:150%;height:45px;transition:stroke-dashoffset .3s ease-in-out;transform:translateY(-90%);fill:none;stroke:#ff92f6;stroke-width:70;stroke-dasharray:400px;stroke-dashoffset:400px;z-index:-1}li:first-child .icon-line{width:150%;left:-10%}li:nth-child(2) .icon-line{width:160%;left:-25%}li:nth-child(3) .icon-line{width:130%;left:-15%}li:nth-child(4) .icon-line{width:120%;left:-20%}li:nth-child(5) .icon-line{width:140%;left:-15%}.icon-line.active{stroke-dashoffset:0}@media only screen and (max-width:1500px){nav{right:0;max-width:none;background:#ccc;opacity:.9;padding-right:1em}ul.nav{padding:0;text-align:right;float:right;min-width:530px}.nav li{display:initial;padding:.25rem 1.2em;transform:translate3d(0,-200%,0)}.icon-line,li:first-child .icon-line,li:nth-child(2) .icon-line,li:nth-child(3) .icon-line,li:nth-child(4) .icon-line,li:nth-child(5) .icon-line{width:100%;left:0;height:30px}}@media only screen and (max-width:768px){nav{display:none}}", ""]);

// exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _waveSvg = __webpack_require__(78);

var _waveSvg2 = _interopRequireDefault(_waveSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _waveSvg2.default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaveSvg = function WaveSvg() {
  return _react2.default.createElement(
    'div',
    { className: 'container-wave' },
    _react2.default.createElement(
      'svg',
      {
        width: '100%',
        height: '100%',
        viewBox: '0 0 500 70',
        preserveAspectRatio: 'xMinYMin slice'
      },
      _react2.default.createElement('path', { d: 'M0,50 C200,100 200,0 500,50 L500,00 L0,0 Z' })
    )
  );
};

exports.default = WaveSvg;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".container-wave svg path{stroke:none;fill:#ccc}.container-wave svg{background:#f9f7f6;margin-bottom:-10px}.resume-section:nth-of-type(2n) .container-wave svg path{stroke:#f9f7f6;fill:#f9f7f6}.resume-section:nth-of-type(odd) .container-wave svg path{stroke:#ccc}.resume-section:nth-of-type(2n) .container-wave svg{background:#ccc}@media only screen and (max-width:992px){.container-wave{margin-left:-1em;margin-right:-1em}}", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".resume-container{width:100%;height:100%;z-index:2;padding:150px 0 100px}h1.name.relative{position:relative;margin-bottom:20px;text-indent:0}h1.name.relative span{opacity:0}h1.name.relative span:last-child{text-indent:0}.resume-section>div:first-child{min-height:600px}.resume-section:nth-of-type(2n){background:#f9f7f6}.resume-section:not(:first-child){padding-top:100px}.resume-section:nth-of-type(2n) h1.name.relative{color:#484848}.resume-section .resume-section--row{padding:80px 0 100px}.resume-section--row.first{opacity:0;transform:translate3d(0,20px,0)}.resume-container .resume-left h2{margin:0;line-height:1.2;text-align:right}.resume-container .resume-left h2:first-child{margin-top:16px;font-size:40px}.resume-container .resume-left h2:nth-child(2){font-weight:400;letter-spacing:.2px;opacity:.8;font-size:30px}.resume-row{max-width:1200px;margin:0 auto;padding:1em 0;display:flex;flex-direction:row}.resume-row>div{margin:0 40px}.resume-left{flex:1 0 0;min-width:350px}.resume-right{flex:3 0 0}.resume-right p{margin-top:20px}.resume-left,.resume-right{opacity:0;transform:translate3d(0,20px,0)}.back-button{left:0;position:absolute;display:table}.vertical-scroll-hider{overflow:hidden}.max-1000{max-width:1000px;margin:0 auto}@media only screen and (max-width:992px){.resume-container{padding:100px 0}.resume-section{padding-left:1em;padding-right:1em}.resume-row{flex-direction:column}.resume-row>div{margin:initial}.resume-container .resume-left h2{text-align:left}.resume-container .resume-left h2:first-child{margin-top:10px;font-size:40px}.resume-container .resume-left h2:nth-child(2){font-size:30px}h1.name.relative{position:relative;margin-bottom:0;font-size:110px}.resume-section .resume-section--row{padding:20px 0}.resume-section:not(:first-child){padding-top:50px}}@media only screen and (max-width:480px){h1.name.relative{font-size:90px}.resume-container .resume-left h2:first-child{font-size:30px}.resume-container .resume-left h2:nth-child(2){font-size:25px}.page-container h1.name.skills-heading{padding-right:0}}", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".page-container{background-color:#ccc}.job-application--button-container{z-index:4}.page-container h1.name{padding:0 0 0 5vw}@media only screen and (max-width:992px){.page-container h1.name{padding:0}}", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contact = __webpack_require__(83);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contact2.default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _contactComponent = __webpack_require__(84);

var _contactComponent2 = _interopRequireDefault(_contactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement(
    'div',
    { className: 'page-container' },
    _react2.default.createElement(_contactComponent2.default, null)
  );
};

exports.default = Contact;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contactComponent = __webpack_require__(85);

var _contactComponent2 = _interopRequireDefault(_contactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contactComponent2.default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gsap = __webpack_require__(5);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__(10);

var _button2 = _interopRequireDefault(_button);

var _actions = __webpack_require__(8);

var actionCreators = _interopRequireWildcard(_actions);

__webpack_require__(86);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactComponent = function (_Component) {
  _inherits(ContactComponent, _Component);

  function ContactComponent(props) {
    _classCallCheck(this, ContactComponent);

    var _this = _possibleConstructorReturn(this, (ContactComponent.__proto__ || Object.getPrototypeOf(ContactComponent)).call(this, props));

    _this.back = _this.back.bind(_this);

    _this.state = {
      tl: new _gsap.TimelineLite()
    };
    return _this;
  }

  _createClass(ContactComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _refs = this.refs,
          back = _refs.back,
          title = _refs.title,
          text = _refs.text,
          button = _refs.button;
      var tl = this.state.tl;

      this.animateTitle(title, tl);
      tl.to(back, 1, { x: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, 0.2).pause();
      tl.to(text, 1, { y: '0%', opacity: 1, ease: _gsap.Power2.easeOut }, '-=0.8').to(button, 0.4, { scale: 1, opacity: 1, ease: _gsap.Power2.easeOut }, '-=0.6').play();

      var links = text.children[0].children;

      var _loop = function _loop(i) {
        setTimeout(function () {
          links[i].classList.add('reveal-text');
        }, (i + 1) * 800);
      };

      for (var i = 0; i < links.length; i++) {
        _loop(i);
      }
    }

    /**
     * Animates section title
     */

  }, {
    key: 'animateTitle',
    value: function animateTitle(title, tl) {
      return tl.set(title, { rotationX: -45 }).to(title, 1.5, {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: _gsap.Power2.easeOut
      }, 0.5);
    }
  }, {
    key: 'back',
    value: function back(ev) {
      ev.preventDefault();
      this.state.tl.timeScale(4).reverse();
      this.props.actions.revealAnimationBackward();
      setTimeout(this.props.history.push, 1500, '/');
    }
  }, {
    key: 'emailHandler',
    value: function emailHandler(email) {
      var tl = new _gsap.TimelineLite();
      var svg = this.refs.svg;

      tl.to(svg, 1, {
        x: '-15px',
        y: '-15px',
        ease: _gsap.Elastic.easeIn
      }).to(svg, 1, {
        x: '1000px',
        y: '-1000px',
        ease: _gsap.Power2.easeOut
      }).set(svg, {
        x: 0,
        y: 0
      });

      setTimeout(function () {
        window.location.href = 'mailto:' + email;
      }, 2000);
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var translations = this.props.translations;
      var email = translations.email,
          back = translations.back,
          _translations$contact = translations.contact,
          text = _translations$contact.text,
          buttonText = _translations$contact.buttonText,
          title = _translations$contact.title;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', onClick: function onClick(ev) {
              return _this2.back(ev);
            } },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('job-application--button-container', 'button-left', 'button-left--offset'),
              ref: 'back'
            },
            _react2.default.createElement(_button2.default, { text: back })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'resume-container', ref: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'resume-section' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                { className: 'name visible relative text-center no-padding' },
                _react2.default.createElement(
                  'span',
                  { ref: 'title' },
                  title
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'resume-section--row max-768' },
                _react2.default.createElement(
                  'div',
                  { className: 'resume-row hidden-element', ref: 'text' },
                  _react2.default.createElement('p', {
                    className: 'text-section text-center',
                    dangerouslySetInnerHTML: { __html: text }
                  })
                ),
                _react2.default.createElement(
                  'div',
                  {
                    className: 'resume-row flex-center email-button-wrapper',
                    ref: 'button'
                  },
                  _react2.default.createElement(
                    _button2.default,
                    {
                      text: buttonText,
                      onClick: function onClick() {
                        return _this2.emailHandler(email);
                      },
                      className: 'max-width-300 pr-60'
                    },
                    _react2.default.createElement(
                      'span',
                      { className: 'plane-container', ref: 'svg' },
                      _react2.default.createElement(
                        'svg',
                        { className: 'icon-paperplane' },
                        _react2.default.createElement('use', {
                          xmlnsXlink: 'http://www.w3.org/1999/xlink',
                          xlinkHref: '#icon-paperplane'
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ContactComponent;
}(_react.Component);

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */


function mapStateToProps(state) {
  return { common: state.common, translations: state.common.translations };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContactComponent));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".hidden-element{opacity:0;transform:translate3d(0,20px,0)}.email-button-wrapper{transform:scale(0);opacity:0}", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

var _actions = __webpack_require__(8);

var actionCreators = _interopRequireWildcard(_actions);

var _pageSlideEffect = __webpack_require__(88);

var _pageSlideEffect2 = _interopRequireDefault(_pageSlideEffect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouterWrapper = function (_Component) {
  _inherits(RouterWrapper, _Component);

  function RouterWrapper() {
    _classCallCheck(this, RouterWrapper);

    return _possibleConstructorReturn(this, (RouterWrapper.__proto__ || Object.getPrototypeOf(RouterWrapper)).apply(this, arguments));
  }

  _createClass(RouterWrapper, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.actions.setLanguage('en');
      if (window.location.pathname !== '/') {
        this.props.actions.removePageLoading();
      } else {
        document.body.classList.remove('loading');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children,
        _react2.default.createElement(_pageSlideEffect2.default, {
          type: this.props.common.pageRevealerType,
          visible: this.props.common.pageRevealer
        })
      );
    }
  }]);

  return RouterWrapper;
}(_react.Component);

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */


function mapStateToProps(state) {
  return { common: state.common };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RouterWrapper));

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageSlideEffect = __webpack_require__(89);

var _pageSlideEffect2 = _interopRequireDefault(_pageSlideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pageSlideEffect2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageSlideEffect = function (_Component) {
  _inherits(PageSlideEffect, _Component);

  function PageSlideEffect() {
    _classCallCheck(this, PageSlideEffect);

    return _possibleConstructorReturn(this, (PageSlideEffect.__proto__ || Object.getPrototypeOf(PageSlideEffect)).apply(this, arguments));
  }

  _createClass(PageSlideEffect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          visible = _props.visible;

      var classes = visible ? 'anim--effect-' + type + ' revealer--' + type : '';

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('revealer revealer--animate', classes) },
        _react2.default.createElement('div', { className: 'layer' }),
        _react2.default.createElement('div', { className: 'layer' })
      );
    }
  }]);

  return PageSlideEffect;
}(_react.Component);

PageSlideEffect.propTypes = {
  type: _propTypes2.default.string.isRequired
};

exports.default = PageSlideEffect;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@font-face{font-family:BrandonGrotesque;src:url(\"/fonts/BrandonGrotesque-Regular.eot\");src:url(\"/fonts/BrandonGrotesque-Regular.eot?#iefix\") format(\"embedded-opentype\"),url(\"/fonts/BrandonGrotesque-Regular.woff\") format(\"woff\"),url(\"/fonts/BrandonGrotesque-Regular.ttf\") format(\"truetype\"),url(\"/fonts/BrandonGrotesque-Regular.svg\") format(\"svg\");font-weight:400;font-style:normal}*{box-sizing:border-box}body,html{min-height:100vh}#root{position:relative;width:100%;height:100vh;z-index:0}html{-webkit-overflow-scrolling:touch}body{overflow-x:hidden;position:relative;margin:0;line-height:1.2;letter-spacing:.5px;color:#484848;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;background-color:#ccc;width:100%}img{display:block;max-width:100%;height:auto}.text-left{text-align:left}.hidden{visibility:hidden;display:none}.fadeOutButton{animation:fadeOut .3s ease-in;opacity:1}@keyframes fadeOut{to{transform:scale(.4);opacity:0}}.fadeOut{transition:opacity .3s ease-out;opacity:0}.heightAuto{height:auto!important}.flex-center{justify-content:center}.no-padding{padding:0!important}button.more{border-radius:30px;background:none;color:#fff;position:relative;outline:none;border:none;height:50px;width:200px;font-size:20px;z-index:2;transform:translateZ(0);transition:all .01s ease-out .23s;overflow:hidden;letter-spacing:2px;text-transform:uppercase;font-size:14px;font-weight:600;font-family:Arial;margin:10px 0 50px}button.more:before{left:30px;top:0;height:100%;width:140px;background:#ff92f6;transition:all .3s ease-in}button.more:after,button.more:before{content:\"\";position:absolute;border-radius:30px;z-index:-1}button.more:after{left:-5%;top:5%;height:90%;width:5%;background:#fff;transition:all .2s ease-in .1s}button.more:hover{cursor:pointer;color:rgba(72,72,72,.4)}button.more:hover:before{left:100%;width:25%}button.more:hover:after{left:30px;width:140px}::selection{background:#ff92f6}::-moz-selection{background:#ff92f6}figure{margin:0;padding:0}a{color:#484848}a,a.link-slideright{text-decoration:none}a.link-slideright{font-family:Josefin Sans,sans-serif;color:#f478dc;position:relative;display:inline-block;outline:none;vertical-align:bottom;white-space:nowrap;overflow:hidden;padding-bottom:2px}a.link-slideright::hover{color:#f478dc}a.link-slideright:after,a.link-slideright:before{content:\"\";position:absolute;width:100%;height:2px;background:#f478dc;transition:transform .3s}a.link-slideright:before{bottom:1px;left:0;transform:scaleY(.618) translateX(-100%)}a.link-slideright:after{top:0;right:0;transform:scaleY(.618) translateX(100%)}a.link-slideright:focus:after,a.link-slideright:focus:before,a.link-slideright:hover:after,a.link-slideright:hover:before{transform:scaleY(.618) translateX(0)}h1,h2,h3,h4,h5,h6{font-family:Josefin Sans,sans-serif;letter-spacing:.1em}p{font-size:28px;line-height:1.4;font-family:BrandonGrotesque,Helvetica Neue,Helvetica,sans-serif}.text-right{text-align:right}.js body:before{content:\"Working on it...\";font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2em;text-indent:-.2em;text-transform:uppercase;font-weight:700;font-size:2em;display:flex;align-items:center;justify-content:center;color:#fff;position:fixed;top:-100%;left:0;width:100%;height:100%;background:#f478dc;background:linear-gradient(50% top,circle,#f478dc 0,#cc62ee 75%);background:radial-gradient(50% top,circle,#f478dc 0,#cc62ee 75%),radial-gradient(right top,circle,#f478dc 0,#cc62ee 57%);z-index:1000;pointer-events:none;transition:transform .5s;text-align:center}.js .loading:before{transform:translate3d(0,100%,0)}@media only screen and (max-width:992px){.js body:before{font-size:1em}p{font-size:22px}}@media only screen and (max-width:480px){.hidden-mobile-480{display:none}}.max-768{max-width:768px;margin:0 auto}.max-width-300{max-width:300px;margin:0 auto}.reveal-text:hover:before{transform:translateY(0)}.reveal-text:before{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-color:rgba(52,73,94,.2);content:\"\";transition:transform .2s;transform:translateY(99%)}.reveal-text:after{animation-delay:2s;animation-iteration-count:1;animation-duration:.8s;animation-fill-mode:both;animation:.8s cubic-bezier(0,0,.2,1)}.reveal-text{position:relative;display:inline-block;color:#000;font-weight:700;border-bottom:1px solid rgba(52,73,94,.2);color:#404d5b;vertical-align:bottom;text-decoration:none;white-space:nowrap;overflow:hidden}.reveal-text:after{content:\"\";position:absolute;z-index:999;top:0;left:0;right:0;bottom:0;background-color:rgba(52,73,94,.2);transform:scaleX(0);transform-origin:0 50%;pointer-events:none;animation-name:revealer-text}@keyframes revealer-text{0%,50%{transform-origin:0 50%}60%,to{transform-origin:100% 50%}50%{transform:scaleX(1)}60%{transform:scaleX(1)}to{transform:scaleX(0)}}.revealer{width:100vw;height:100%;position:fixed;z-index:1000;pointer-events:none;top:100%;left:0}.revealer--top{bottom:100%}.revealer--bottom{top:100%}.layer{position:absolute;width:100%;height:100%;top:0;left:0}.anim--effect-top.revealer--animate .layer{animation:anim-effect-2-1-top 1.5s cubic-bezier(.7,0,.3,1) forwards;animation-delay:.5s;background:#fff}.anim--effect-top.revealer--animate .layer:not(:first-child){animation-name:anim-effect-2-2-top;animation-delay:.5s;background:#ff92f6}@keyframes anim-effect-2-1-top{0%{transform:translateZ(0)}30%,70%{transform:translate3d(0,-100%,0);animation-timing-function:cubic-bezier(.7,0,.3,1)}to{transform:translate3d(0,-200%,0)}}@keyframes anim-effect-2-2-top{0%,14.5%{transform:translateZ(0)}37.5%,62.5%{transform:translate3d(0,-100%,0);animation-timing-function:cubic-bezier(.7,0,.3,1)}85.5%,to{transform:translate3d(0,-200%,0)}}.anim--effect-bottom.revealer--animate .layer{animation:anim-effect-2-1-bottom 1.5s cubic-bezier(.7,0,.3,1) forwards;animation-delay:.5s;background:#fff}.anim--effect-bottom.revealer--animate .layer:not(:first-child){animation-name:anim-effect-2-2-bottom;animation-delay:.5s;background:#ff92f6}@keyframes anim-effect-2-1-bottom{0%{transform:translate3d(0,-200%,0)}30%,70%{transform:translate3d(0,-100%,0);animation-timing-function:cubic-bezier(.7,0,.3,1)}to{transform:translateZ(0)}}@keyframes anim-effect-2-2-bottom{0%,14.5%{transform:translate3d(0,-200%,0)}37.5%,62.5%{transform:translate3d(0,-100%,0);animation-timing-function:cubic-bezier(.7,0,.3,1)}85.5%,to{transform:translate3d(0,100%,0)}}", ""]);

// exports


/***/ })
/******/ ]);