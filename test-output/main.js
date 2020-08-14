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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(3);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(4);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(6);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(7);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/assert/assert.js
var assert = __webpack_require__(0);
var assert_default = /*#__PURE__*/__webpack_require__.n(assert);

// CONCATENATED MODULE: ./rp/nodes.js

class RPNode {
    constructor(nodeType) {
        this.supernode = null;
        this.depth = 0;

        this.type = nodeType;
        this.subtype = "";

        this.start = 0;
        this.end = 0;
        this._text = "";

        this._latex = "";
        this._asciiMath = "";
        this._mathML = "";
    }

    get length() {
        return this.end - this.start;
    }

    get text() {
        return this._text;
    }

    get latex() {
        return this._latex;
    }

    get asciiMath() {
        return this._asciiMath;
    }

    get mathML() {
        return this._mathML;
    }

    get subnodes() {
        return [];
    }

    set subnodes(value) { }

    setDepth(depth = 0) {
        this.depth = depth;

        this.subnodes.forEach(subnode => {
            subnode.supernode = this;
            subnode.setDepth(depth + 1);
        })
    }

    copyTo(node) {
        node.supernode = this.supernode;
        node.depth = this.depth;
        node.type = this.type;
        node.subtype = this.subtype;
        node.start = this.start;
        node.end = this.end;
        node._text = this._text;
        node._latex = this._latex;
        node._asciiMath = this._asciiMath;
        node._mathML = this._mathML;
    }
}

class RPWhiteSpaceNode extends RPNode {
    constructor() {
        super("whiteSpace");

        this.value = "";
    }
}

class RPNumberNode extends RPNode {
    constructor() {
        super("number");

        this.value = "";
        this.integralPart = "";
        this.decimalPart = "";
        this.sign = "";
        this.signIsExplicit = false;
        this.isZero = false;
        this.integralPartIsZero = false;
        this.decimalPartIsZero = false;
        this.numberOfLeadingZeros = 0;
        this.numberOfTrailingZeros = 0;
        this.minimumNumberOfSignificantFigures = 0;
        this.maximumNumberOfSignificantFigures = 0;
        this.numberOfDecimalPlaces = 0;
    }

    get latex() {
        return this.value;
    }

    get asciiMath() {
        return this.value;
    }

    copyTo(node) {
        super.copyTo(node);

        node.value = this.value;
        node.integralPart = this.integralPart;
        node.decimalPart = this.decimalPart;
        node.sign = this.sign;
        node.signIsExplicit = this.signIsExplicit;
        node.isZero = this.isZero;
        node.integralPartIsZero = this.integralPartIsZero;
        node.decimalPartIsZero = this.decimalPartIsZero;
        node.numberOfLeadingZeros = this.numberOfLeadingZeros;
        node.numberOfTrailingZeros = this.numberOfTrailingZeros;
        node.minimumNumberOfSignificantFigures = this.minimumNumberOfSignificantFigures;
        node.maximumNumberOfSignificantFigures = this.maximumNumberOfSignificantFigures;
        node.numberOfDecimalPlaces = this.numberOfDecimalPlaces;
    }
}

class RPCurrencyValueNode extends RPNumberNode {
    constructor() {
        super();

        this.currency = "";
    }

    static fromNumberNode(numberNode) {
        var currencyValueNode = new RPCurrencyValueNode();

        numberNode.copyTo(currencyValueNode);

        return currencyValueNode;
    }
}
// CONCATENATED MODULE: ./rp/parsing.js




class Marker {
    constructor() {
        this.position = 0;
    }

    copy() {
        var marker = new Marker();

        marker.position = this.position;

        return marker;
    }
}

class ParserSettings {
    constructor() {
        this.removeLeadingZerosFromSimplifiedForms = false;
        this.removeTrailingZerosFromSimplifiedForms = false;
        this.addLeadingZeroToDecimalsForSimplifiedForms = true;
        this.removeTrailingDecimalPointFromSimplifiedForms = true;

        this.normaliseSigns = "notSet";
    }
}

function cut(text, startIndex, length = 1) {
    return text.substr(startIndex, length);
}

function isOneOf(character, characters) {
    return characters.indexOf(character) >= 0;
}

class parsing_Parser {
    constructor() {
        this.settings = new ParserSettings();
    }

    getParseResult(inputText) {
        var marker = new Marker();

        this.parseWhiteSpace(inputText, marker);

        var number = this.parseNumber(inputText, marker);

        this.parseWhiteSpace(inputText, marker);

        if (number !== null && marker.position == inputText.length) {
            return number;
        }

        return null;
    }

    parseWhiteSpace(inputText, marker) {
        var t = "";
        var start = marker.position;

        while (marker.position < inputText.length) {
            var c = cut(inputText, marker.position);

            if (isOneOf(c, " \t\n")) {
                t += c;
                marker.position += 1;
            }
            else {
                break;
            }
        }

        if (t.length == 0) {
            return null;
        }

        var end = marker.position;

        var node = new RPWhiteSpaceNode();

        node.start = start;
        node.end = end;
        node._text = t;

        node.value = " ";

        node._latex = t;
        node._asciiMath = t;

        return node;
    }

    makeIntoCurrencyValue(node) {
        var cvn = RPCurrencyValueNode.fromNumberNode(node);

        if (cvn.decimalPartIsZero && cvn.decimalPart.length > 1) {
            cvn.value = cvn.value.substring(0, cvn.value.length - cvn.numberOfTrailingZeros);
        }

        if (cvn.value.substr(cvn.value.length - 1, 1) == ".") {
            cvn.value = cvn.value.substr(0, cvn.value.length - 1);
        }

        return cvn;
    }

    parseNumber(inputText, marker) {
        var t = "";
        var start = marker.position;

        var integralPart = "";
        var decimalPart = "";

        var ts = "";
        var sign = "positive";
        var signIsExplicit = false;

        var d = cut(inputText, marker.position);

        if (d == "+") {
            ts = "+";
            signIsExplicit = true;
            marker.position += 1;
        }
        else if (d == "-") {
            ts = "-";
            sign = "negative";
            signIsExplicit = true;
            marker.position += 1;
        }

        this.parseWhiteSpace(inputText, marker);

        var nlz = 0;
        var ntz = 0;
        var nsf = 0;
        var ndp = 0;

        var p = 0;
        var q = 0;

        var integralPartIsZero = true;
        var decimalPartIsZero = true;

        while (marker.position < inputText.length) {
            var c = cut(inputText, marker.position);

            if (isOneOf(c, "0123456789")) {
                t += c;
                marker.position += 1;

                if (q == 0) {
                    integralPart += c;
                    if (c != "0") {
                        integralPartIsZero = false;
                    }
                }
                else {
                    decimalPart += c;
                    if (c != "0") {
                        decimalPartIsZero = false;
                    }
                    ndp += 1;
                }

                if (c == "0" && nsf == 0 && q == 0) {
                    nlz += 1;
                }
                else if (c != "0") {
                    nsf += p;
                    p = 0;
                    nsf += 1;
                }
                else if (c == "0" && nsf > 0) {
                    p += 1;
                }
            }

            else if (c == ".") {
                if (q == 0) {
                    t += c;
                    marker.position += 1;

                    decimalPart += c;

                    q += 1;
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }

        var allZero = (nsf == 0 && t.length > 0) ? true : false;

        var minimumNSF = 0;
        var maximumNSF = 0;

        if (allZero) {
            minimumNSF = 1;
            maximumNSF = 1;
            if (q > 0) {
                ntz = ndp;
            }
        }
        else {
            if (q > 0) {
                minimumNSF = nsf + p;
                maximumNSF = nsf + p;

                ntz = p;
            }
            else {
                minimumNSF = nsf;
                maximumNSF = nsf + p;
            }
        }

        var end = marker.position;

        var subtype = (q == 0) ? "integer" : "decimalNumber";

        var t1 = "";
        var t2 = "";

        if (this.settings.removeTrailingZerosFromSimplifiedForms && ntz > 0) {
            t2 = decimalPart.substr(0, decimalPart.length - ntz);
        }
        else {
            t2 = decimalPart;
        }

        t2 = (t2 == "." && this.settings.removeTrailingDecimalPointFromSimplifiedForms) ? "" : t2;

        if (integralPart == "" && (decimalPart == "" || decimalPart == ".")) {
            t1 = "";
        }
        else if (integralPart == "") {
            if (this.settings.addLeadingZeroToDecimalsForSimplifiedForms) {
                t1 = "0";
            }
            else {
                t1 = "";
            }
        }
        else {
            if (this.settings.removeLeadingZerosFromSimplifiedForms) {
                t1 = integralPart.substr(nlz);
                if (this.settings.addLeadingZeroToDecimalsForSimplifiedForms) {
                    t1 = (t1 == "") ? "0" : t1;
                }
                else {
                    t1 = integralPart;
                }
            }
        }

        if (ts + t == "") {
            return null;
        }
        else {
            var node = new RPNumberNode();

            node.subtype = subtype;

            node.start = start;
            node.end = end;
            node._text = ts + t;

            var s = ts;

            if (sign == "positive") {
                if (this.settings.normaliseSigns == "makeExplicit") {
                    s = "+";
                }
                else if (this.settings.normaliseSigns == "makeImplicit") {
                    s = "";
                }
            }

            node.value = (allZero) ? t1 + t2 : s + t1 + t2;

            node.integralPart = integralPart;
            node.decimalPart = decimalPart;

            node.sign = sign;
            node.signIsExplicit = signIsExplicit;
            node.isZero = allZero;
            node.integralPartIsZero = integralPartIsZero;
            node.decimalPartIsZero = decimalPartIsZero;
            node.numberOfLeadingZeros = nlz;
            node.numberOfTrailingZeros = ntz;
            node.minimumNumberOfSignificantFigures = minimumNSF;
            node.maximumNumberOfSignificantFigures = maximumNSF;
            node.numberOfDecimalPlaces = ndp;

            return node;
        }
    }
}

// CONCATENATED MODULE: ./rp/messages.js


class messages_ValueError extends Error {
    constructor(...params) {
        super(...params);
    }
}


class Messages {
    constructor(messagesFile = "../rp/messages.en-gb.xml") {

        this.messagesFile = messagesFile;
        this.messages = [];

        var httpRequest = new XMLHttpRequest();

        httpRequest.timeout = 3000;
        httpRequest.open("GET", this.messagesFile, false);
        httpRequest.send();

        var xmlDocument = httpRequest.responseXML;
        var xmlElements = xmlDocument.getElementsByTagName("message");

        for (let xmlElement of xmlElements) {
            var i = xmlElement.getAttribute("id");
            var text = xmlElement.textContent;

            this.messages.push({ "id": i, "text": text });
        }
    }

    getMessageById(i, parameters = []) {
        if (this.messages.filter(m => m["id"] == i).length == 0) {
            throw new messages_ValueError("There is no message with the id '" + i.toString() + "' in " + this.messagesFile + ".");
        }

        var text = this.messages.filter(m => m["id"] == i)[0]["text"];

        var n = 0;

        for (let parameter of parameters) {
            n += 1;
            var tag = "#p" + n.toString() + "#";
            text = text.replace(tag, parameter.toString());
        }

        return text;
    }
}
// CONCATENATED MODULE: ./rp/validation.js





class ValidationRequest {
    constructor() {
        this.studentsResponse = "";
        this.expectedResponseType = "";
        this.constraints = {};
        this.localisationSettings = {};
    }
}


class ValidationResponse {
    constructor() {
        this.isAccepted = true;
        this.messageText = "";
        this.request = null;
        this.normalisedStudentsResponse = "";
        this.expression = null;
    }
}


class validation_Validator {
    constructor(messagesFile = "../rp/messages.en-gb.xml") {
        this.parser = new parsing_Parser();
        this.messages = new Messages(messagesFile);

        this.integerAllowedCharacters = "0123456789+- ";
        this.nonNegativeIntegerAllowedCharacters = "0123456789+ ";
        this.decimalAllowedCharacters = "0123456789.+- ";
    }

    validate(request) {
        if (request.constraints === null) {
            request.constraints = {};
        }

        if (request.constraints["removeLeadingZerosFromNormalizedForm"] === true) {
            this.parser.settings.removeLeadingZerosFromSimplifiedForms = true;
        }

        if (request.constraints["removeTrailingZerosFromNormalizedForm"] === true && request.expectedResponseType != "currencyValue") {
            this.parser.settings.removeTrailingZerosFromSimplifiedForms = true;
        }

        if (request.constraints["removeTrailingDecimalPointFromNormalizedForm"] === false) {
            this.parser.settings.removeTrailingDecimalPointFromSimplifiedForms = false;
        }

        if (request.constraints["addSingleLeadingZeroToNormalizedForm"] === false) {
            this.parser.settings.addLeadingZeroToDecimalsForSimplifiedForms = false;
        }

        if (request.constraints["normalizeSign"] === "makeExplicit") {
            this.parser.settings.normaliseSigns = "makeExplicit";
        }

        if (request.constraints["normalizeSign"] === "makeImplicit") {
            this.parser.settings.normaliseSigns = "makeImplicit";
        }

        var result = this.parser.getParseResult(request.studentsResponse);

        var response = new ValidationResponse();

        if (request.constraints["sign"] === undefined) {
            request.constraints["sign"] = "canBeExplicitOrImplicit";
        }

        if (request.expectedResponseType == "integer") {
            this.validateInteger(request, result, response);
        }
        else if (request.expectedResponseType == "nonNegativeInteger") {
            this.validateNonNegativeInteger(request, result, response);
        }
        else if (request.expectedResponseType == "decimal") {
            this.validateDecimal(request, result, response);
        }
        else if (request.expectedResponseType == "currencyValue") {
            if (result !== null && result.type == "number") {
                result = this.parser.makeIntoCurrencyValue(result);
            }
            this.validateCurrencyValue(request, result, response);
        }
        else {
            throw new ValueError("Unsupported response type '" + request.expectedResponseType + "'.");
        }

        response.request = request;

        if (result !== null) {
            response.normalisedStudentsResponse = result.asciiMath;
            response.expression = result;
        }

        return response;
    }

    validateInteger(request, result, response) {
        response.isAccepted = true;

        for (var i = 0; i < request.studentsResponse.length; i++) {
            var c = request.studentsResponse[i];

            if (!/* Cannot get final name for export "isOneOf" in "./rp/parsing.js" (known exports: Marker ParserSettings Parser, known reexports: ) */ undefined(c, this.integerAllowedCharacters)) {
                response.isAccepted = false;
                response.messageText = this.messages.getMessageById("onlyUseIntegerCharacters");
                return;
            }
        }

        if (result === null) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleInteger");
            return;
        }

        if (result.type != "number") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleInteger");
            return;
        }

        if (result.subtype != "integer") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeInteger");
            return;
        }

        if (result.integralPart === "" && result.decimalPart === "") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleInteger");
            return;
        }

        this._applyLeadingZerosConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }

        if (request.constraints["sign"] == "mustBeExplicit" && result.sign == "positive" && result.signIsExplicit === false) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustHaveSign");
            return;
        }

        if (request.constraints["sign"] == "mustBeImplicit" && result.sign == "positive" && result.signIsExplicit === true) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("dontHaveSign");
            return;
        }

        this._applySignificantFigureConstraints(request, result, response);
    }

    validateNonNegativeInteger(request, result, response) {
        response.isAccepted = true;

        for (var i = 0; i < request.studentsResponse.length; i++) {
            var c = request.studentsResponse[i];

            if (!/* Cannot get final name for export "isOneOf" in "./rp/parsing.js" (known exports: Marker ParserSettings Parser, known reexports: ) */ undefined(c, this.nonNegativeIntegerAllowedCharacters)) {
                response.isAccepted = false;
                response.messageText = this.messages.getMessageById("onlyUseNonNegativeIntegerCharacters");
                return;
            }
        }

        if (result === null) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleInteger");
            return;
        }

        if (result.type != "number") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleInteger");
            return;
        }

        if (result.subtype != "integer") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeInteger");
            return;
        }

        if (result.sign == "negative") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBePositive");
            return;
        }

        if (result.integralPart === "" && result.decimalPart === "") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleInteger");
            return;
        }

        this._applyLeadingZerosConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }

        if (request.constraints["sign"] == "mustBeExplicit" && result.signIsExplicit === false) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustHavePlusSign");
            return;
        }

        if (request.constraints["sign"] == "mustBeImplicit" && result.signIsExplicit === true) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("dontHavePlusSign");
            return;
        }

        this._applySignificantFigureConstraints(request, result, response);
    }

    validateDecimal(request, result, response) {
        response.isAccepted = true;

        for (var i = 0; i < request.studentsResponse.length; i++) {
            var c = request.studentsResponse[i];

            if (!/* Cannot get final name for export "isOneOf" in "./rp/parsing.js" (known exports: Marker ParserSettings Parser, known reexports: ) */ undefined(c, this.decimalAllowedCharacters)) {
                response.isAccepted = false;
                response.messageText = this.messages.getMessageById("onlyUseDecimalCharacters");
                return;
            }
        }

        if (result === null || result.type != "number") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleNumber");
            return;
        }

        if (result.integralPart === "" && result.decimalPart === "") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleNumber");
            return;
        }

        this._applyLeadingZerosConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }

        this._applyTrailingZerosConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }

        if (request.constraints["sign"] == "mustBeExplicit" && result.sign == "positive" && result.signIsExplicit === false) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustHaveSign");
            return;
        }

        if (request.constraints["sign"] == "mustBeImplicit" && result.sign == "positive" && result.signIsExplicit === true) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("dontHaveSign");
            return;
        }

        this._applySignificantFigureConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }

        this._applyDecimalPlaceConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }
    }

    validateCurrencyValue(request, result, response) {
        response.isAccepted = true;

        for (var i = 0; i < request.studentsResponse.length; i++) {
            var c = request.studentsResponse[i];

            if (!/* Cannot get final name for export "isOneOf" in "./rp/parsing.js" (known exports: Marker ParserSettings Parser, known reexports: ) */ undefined(c, this.decimalAllowedCharacters)) {
                response.isAccepted = false;
                response.messageText = this.messages.getMessageById("onlyUseDecimalCharacters");
                return;
            }
        }

        if (result === null || result.type != "number") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleNumber");
            return;
        }

        if (result.integralPart === "" && result.decimalPart === "") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeSingleNumber");
            return;
        }

        this._applyLeadingZerosConstraints(request, result, response);

        if (response.isAccepted === false) {
            return;
        }

        if (request.constraints["sign"] == "mustBeExplicit" && result.sign == "positive" && result.signIsExplicit === false) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustHaveSign");
            return;
        }

        if (request.constraints["sign"] == "mustBeImplicit" && result.sign == "positive" && result.signIsExplicit === true) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("dontHaveSign");
            return;
        }

        if (["USD", "GBP", "EGP", "SAR"].filter(c => c == request.constraints["currency"]).length == 0) {
            return;
        }

        if (result.numberOfDecimalPlaces != 0 && result.numberOfDecimalPlaces != 2) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustHaveExactlyNDP", [2]);
            return;
        }
    }

    _applyLeadingZerosConstraints(request, result, response) {

        if (request.constraints["allowLeadingZeros"] === undefined) {
            request.constraints["allowLeadingZeros"] = false;
        }

        var n = result.integralPartIsZero ? 1 : 0;

        if (request.constraints["allowLeadingZeros"] === false && result.numberOfLeadingZeros > n) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("noLeadingZeros");
            return;
        }
    }

    _applyTrailingZerosConstraints(request, result, response) {

        if (request.constraints["allowTrailingZeros"] === undefined) {
            request.constraints["allowTrailingZeros"] = true;
        }

        if (request.constraints["allowTrailingZeros"] === false && result.numberOfTrailingZeros > 0) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("noTrailingZeros");
            return;
        }
    }

    _applySignificantFigureConstraints(request, result, response) {

        if (request.constraints["mustHaveExactlyNSF"] !== undefined) {
            n = request.constraints["mustHaveExactlyNSF"];

            if (result.maximumNumberOfSignificantFigures < n || result.minimumNumberOfSignificantFigures > n) {
                response.isAccepted = false;
                if (n == 1) {
                    response.messageText = this.messages.getMessageById("mustHaveExactly1SF");
                }
                else {
                    response.messageText = this.messages.getMessageById("mustHaveExactlyNSF", [n]);
                }
            }

            return;
        }

        if (request.constraints["mustHaveAtLeastNSF"] !== undefined) {
            n = request.constraints["mustHaveAtLeastNSF"];

            if (result.maximumNumberOfSignificantFigures < n) {
                response.isAccepted = false;
                if (n == 1) {
                    response.messageText = this.messages.getMessageById("mustHaveAtLeast1SF");
                }
                else {
                    response.messageText = this.messages.getMessageById("mustHaveAtLeastNSF", [n]);
                }
                return;
            }
        }

        if (request.constraints["mustHaveNoMoreThanNSF"] !== undefined) {
            n = request.constraints["mustHaveNoMoreThanNSF"];

            if (result.minimumNumberOfSignificantFigures > n) {
                response.isAccepted = false;
                if (n == 1) {
                    response.messageText = this.messages.getMessageById("mustHaveNoMoreThan1SF");
                }
                else {
                    response.messageText = this.messages.getMessageById("mustHaveNoMoreThanNSF", [n]);
                }
                return;
            }
        }
    }

    _applyDecimalPlaceConstraints(request, result, response) {

        if (request.constraints["mustHaveExactlyNDP"] !== undefined) {
            n = request.constraints["mustHaveExactlyNDP"];

            if (result.numberOfDecimalPlaces != n) {
                response.isAccepted = false;
                if (n == 1) {
                    response.messageText = this.messages.getMessageById("mustHaveExactly1DP");
                }
                else {
                    response.messageText = this.messages.getMessageById("mustHaveExactlyNDP", [n]);
                }
            }

            return;
        }

        if (request.constraints["mustHaveAtLeastNDP"] !== undefined) {
            n = request.constraints["mustHaveAtLeastNDP"];

            if (result.numberOfDecimalPlaces < n) {
                response.isAccepted = false;
                if (n == 1) {
                    response.messageText = this.messages.getMessageById("mustHaveAtLeast1DP");
                }
                else {
                    response.messageText = this.messages.getMessageById("mustHaveAtLeastNDP", [n]);
                }
                return;
            }
        }

        if (request.constraints["mustHaveNoMoreThanNDP"] !== undefined) {
            n = request.constraints["mustHaveNoMoreThanNDP"];

            if (result.numberOfDecimalPlaces > n) {
                response.isAccepted = false;
                if (n == 1) {
                    response.messageText = this.messages.getMessageById("mustHaveNoMoreThan1DP");
                }
                else {
                    response.messageText = this.messages.getMessageById("mustHaveNoMoreThanNDP", [n]);
                }
                return;
            }
        }
    }
}
// CONCATENATED MODULE: ./test/integers.test.js




var parser = new parsing_Parser();

describe("Integers", function () {
    describe("Parsing integers", function () {
        [
            ["123", "123", "", "positive", false, 0, 0, 3, 3, 0, false, false],
            [" 123 ", "123", "", "positive", false, 0, 0, 3, 3, 0, false, false],
            ["   123   ", "123", "", "positive", false, 0, 0, 3, 3, 0, false, false],
            ["00123", "00123", "", "positive", false, 2, 0, 3, 3, 0, false, false],
            ["   00123   ", "00123", "", "positive", false, 2, 0, 3, 3, 0, false, false],
            ["+123", "123", "", "positive", true, 0, 0, 3, 3, 0, false, false],
            ["   +   123   ", "123", "", "positive", true, 0, 0, 3, 3, 0, false, false],
            ["-123", "123", "", "negative", true, 0, 0, 3, 3, 0, false, false],
            ["   -   123   ", "123", "", "negative", true, 0, 0, 3, 3, 0, false, false],
            ["-00123", "00123", "", "negative", true, 2, 0, 3, 3, 0, false, false],
            ["-0012300", "0012300", "", "negative", true, 2, 0, 3, 5, 0, false, false],
            ["-0012300456", "0012300456", "", "negative", true, 2, 0, 8, 8, 0, false, false],
            ["0", "0", "", "positive", false, 1, 0, 1, 1, 0, true, true],
            ["   0   ", "0", "", "positive", false, 1, 0, 1, 1, 0, true, true],
            ["000", "000", "", "positive", false, 3, 0, 1, 1, 0, true, true],
            ["   000   ", "000", "", "positive", false, 3, 0, 1, 1, 0, true, true],
            ["+0", "0", "", "positive", true, 1, 0, 1, 1, 0, true, true],
            ["   +   0   ", "0", "", "positive", true, 1, 0, 1, 1, 0, true, true],
            ["-0", "0", "", "negative", true, 1, 0, 1, 1, 0, true, true],
            ["   -   0   ", "0", "", "negative", true, 1, 0, 1, 1, 0, true, true]
        ].forEach(a => {
            var studentsResponse = a[0];
            var integralPart = a[1];
            var decimalPart = a[2];
            var sign = a[3];
            var signIsExplicit = a[4];
            var nlz = a[5];
            var ntz = a[6];
            var nsf1 = a[7];
            var nsf2 = a[8];
            var ndp = a[9];
            var isZero = a[10];
            var integralPartIsZero = a[11];

            var parseResult = parser.getParseResult(studentsResponse);

            it(`should see that ${studentsResponse} is a number`, function () {
                assert_default.a.equal(parseResult.type, "number");
            });
        });
    });
});

/***/ })
/******/ ]);