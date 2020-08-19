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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowLeadingZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return removeLeadingZerosFromNormalizedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dontAllowTrailingZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return removeTrailingZerosFromNormalizedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dontRemoveTrailingDecimalPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return mustHavePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mustNotHavePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return makeExplicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return makeImplicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return mustHaveAtLeast3SF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return mustHaveAtLeast5SF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mustHaveNoMoreThan3SF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return mustHaveNoMoreThan6SF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return mustHaveExactly3SF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mustHaveExactly5SF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mustHaveAtLeast3DP; });
/* unused harmony export mustHaveAtLeast5DP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return mustHaveNoMoreThan3DP; });
/* unused harmony export mustHaveNoMoreThan6DP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return mustHaveExactly3DP; });
/* unused harmony export mustHaveExactly5DP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dollars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return pounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return egp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sar; });


var allowLeadingZeros = {
    "allowLeadingZeros": true
}

var removeLeadingZerosFromNormalizedForm = {
    "removeLeadingZerosFromNormalizedForm": true
}

var dontAllowTrailingZeros = {
    "allowTrailingZeros": false
}

var removeTrailingZerosFromNormalizedForm = {
    "removeTrailingZerosFromNormalizedForm": true
}

var dontRemoveTrailingDecimalPoint = {
    "removeTrailingDecimalPointFromNormalizedForm": false
}

var mustHavePlus = {
    "sign": "mustBeExplicit"
}

var mustNotHavePlus = {
    "sign": "mustBeImplicit"
}

var makeExplicit = {
    "normalizeSign": "makeExplicit"
}

var makeImplicit = {
    "normalizeSign": "makeImplicit"
}

var mustHaveAtLeast3SF = {
    "mustHaveAtLeastNSF": 3
}

var mustHaveAtLeast5SF = {
    "mustHaveAtLeastNSF": 5
}

var mustHaveNoMoreThan3SF = {
    "mustHaveNoMoreThanNSF": 3
}

var mustHaveNoMoreThan6SF = {
    "mustHaveNoMoreThanNSF": 6
}

var mustHaveExactly3SF = {
    "mustHaveExactlyNSF": 3
}

var mustHaveExactly5SF = {
    "mustHaveExactlyNSF": 5
}

var mustHaveAtLeast3DP = {
    "mustHaveAtLeastNDP": 3
}

var mustHaveAtLeast5DP = {
    "mustHaveAtLeastNDP": 5
}

var mustHaveNoMoreThan3DP = {
    "mustHaveNoMoreThanNDP": 3
}

var mustHaveNoMoreThan6DP = {
    "mustHaveNoMoreThanNDP": 6
}

var mustHaveExactly3DP = {
    "mustHaveExactlyNDP": 3
}

var mustHaveExactly5DP = {
    "mustHaveExactlyNDP": 5
}

var dollars = {
    "currency": "USD"
}

var pounds = {
    "currency": "GBP"
}

var egp = {
    "currency": "EGP"
}

var sar = {
    "currency": "SAR"
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Marker */
/* unused harmony export ParserSettings */
/* unused harmony export cut */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isOneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parser; });
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);




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

class Parser {
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

        var node = new _nodes_js__WEBPACK_IMPORTED_MODULE_0__[/* RPWhiteSpaceNode */ "c"]();

        node.start = start;
        node.end = end;
        node._text = t;

        node.value = " ";

        node._latex = t;
        node._asciiMath = t;

        return node;
    }

    makeIntoCurrencyValue(node) {
        var cvn = _nodes_js__WEBPACK_IMPORTED_MODULE_0__[/* RPCurrencyValueNode */ "a"].fromNumberNode(node);

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

        var allZero = (nsf === 0 && t.length > 0) ? true : false;

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

        if (this.settings.removeTrailingZerosFromSimplifiedForms === true && ntz > 0) {
            t2 = decimalPart.substr(0, decimalPart.length - ntz);
        }
        else {
            t2 = decimalPart;
        }

        t2 = (t2 === "." && this.settings.removeTrailingDecimalPointFromSimplifiedForms === true) ? "" : t2;

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
            }
            else {
                t1 = integralPart;
            }
        }

        if (ts + t == "") {
            return null;
        }
        else {
            var node = new _nodes_js__WEBPACK_IMPORTED_MODULE_0__[/* RPNumberNode */ "b"]();

            node.subtype = subtype;

            node.start = start;
            node.end = end;
            node._text = ts + t;

            var s = ts;

            if (sign === "positive") {
                if (this.settings.normaliseSigns === "makeExplicit") {
                    s = "+";
                }
                else if (this.settings.normaliseSigns === "makeImplicit") {
                    s = "";
                }
            }

            node.value = (allZero === true) ? t1 + t2 : s + t1 + t2;

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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ValidationRequest; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ validation_Validator; });

// UNUSED EXPORTS: ValidationResponse

// EXTERNAL MODULE: ./rp/nodes.js
var nodes = __webpack_require__(5);

// EXTERNAL MODULE: ./rp/parsing.js
var parsing = __webpack_require__(2);

// CONCATENATED MODULE: ./rp/messages.js

class messages_ValueError extends Error {
    constructor(...params) {
        super(...params);
    }
}

class Messages {
    constructor(messagesFile = "") {

        this.messagesFile = messagesFile;
        this.messages = [];

        if (messagesFile === "") {
            return;
        }

        var httpRequest = new XMLHttpRequest();

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
    constructor(messagesFile = "") {
        this.parser = new parsing["a" /* Parser */]();
        this.messages = new Messages(messagesFile);

        this.integerAllowedCharacters = "0123456789+- ";
        this.nonNegativeIntegerAllowedCharacters = "0123456789+ ";
        this.decimalAllowedCharacters = "0123456789.+- ";
    }

    validate(request) {
        if (request.constraints === null || request.constraints === undefined) {
            request.constraints = {};
        }

        if (request.constraints["removeLeadingZerosFromNormalizedForm"] === true) {
            this.parser.settings.removeLeadingZerosFromSimplifiedForms = true;
        }

        if (request.constraints["removeTrailingZerosFromNormalizedForm"] === true && request.expectedResponseType !== "currencyValue") {
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

        if (request.expectedResponseType === "integer") {
            this.validateInteger(request, result, response);
        }
        else if (request.expectedResponseType === "nonNegativeInteger") {
            this.validateNonNegativeInteger(request, result, response);
        }
        else if (request.expectedResponseType === "decimal") {
            this.validateDecimal(request, result, response);
        }
        else if (request.expectedResponseType === "currencyValue") {
            if (result !== null && result.type === "number") {
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

            if (!parsing["b" /* isOneOf */](c, this.integerAllowedCharacters)) {
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

            if (!parsing["b" /* isOneOf */](c, this.nonNegativeIntegerAllowedCharacters)) {
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

            if (!parsing["b" /* isOneOf */](c, this.decimalAllowedCharacters)) {
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

            if (!parsing["b" /* isOneOf */](c, this.decimalAllowedCharacters)) {
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
            var n = request.constraints["mustHaveExactlyNSF"];

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
            var n = request.constraints["mustHaveAtLeastNSF"];

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
            var n = request.constraints["mustHaveNoMoreThanNSF"];

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
            var n = request.constraints["mustHaveExactlyNDP"];

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
            var n = request.constraints["mustHaveAtLeastNDP"];

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
            var n = request.constraints["mustHaveNoMoreThanNDP"];

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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return merge; });

function merge() {
    return Object.assign({}, ...arguments);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RPNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RPWhiteSpaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RPNumberNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPCurrencyValueNode; });

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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(12);
module.exports = __webpack_require__(11);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rp_parsing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _test_general_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);






var merge = _test_general_js__WEBPACK_IMPORTED_MODULE_4__[/* merge */ "a"];

describe("Currency Values", function () {
    describe("Validating currency values", function () {
        [
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "12"],
            ["12.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "12"],
            ["12.", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "12"],
            ["12.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "12"],
            ["12.00", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "12"],
            ["12.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "12"],
            ["12.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), false, "12"],
            ["-12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "-12"],
            ["-12.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "-12"],
            ["-12.", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "-12"],
            ["-12.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "-12"],
            ["-12.00", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "-12"],
            ["-12.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "-12"],
            ["-12.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), false, "-12"],
            ["12.1", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "12.1"],
            ["12.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], true, "12.12"],
            ["12.121", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "12.121"],
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], true, "12"],
            ["12.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], true, "12"],
            ["12.", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "12"],
            ["12.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], false, "12"],
            ["12.00", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], true, "12"],
            ["12.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], false, "12"],
            ["12.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), false, "12"],
            ["12.1", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], false, "12.1"],
            ["12.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], true, "12.12"],
            ["12.121", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* pounds */ "s"], false, "12.121"],
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], true, "12"],
            ["12.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], true, "12"],
            ["12.", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "12"],
            ["12.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], false, "12"],
            ["12.00", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], true, "12"],
            ["12.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], false, "12"],
            ["12.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), false, "12"],
            ["12.1", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], false, "12.1"],
            ["12.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], true, "12.12"],
            ["12.121", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* egp */ "e"], false, "12.121"],
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], true, "12"],
            ["12.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], true, "12"],
            ["12.", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "12"],
            ["12.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], false, "12"],
            ["12.00", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], true, "12"],
            ["12.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], false, "12"],
            ["12.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), false, "12"],
            ["12.1", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], false, "12.1"],
            ["12.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], true, "12.12"],
            ["12.121", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* sar */ "v"], false, "12.121"],
            ["012", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], false, "012"],
            ["012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"]), true, "012"],
            ["012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["0012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["00012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["012.00", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["0012.00", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["00012.00", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dollars */ "b"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request;
            var response;

            describe(`Validating "${studentsResponse}" with constraints ${constraints}`, function () {

                beforeEach(function () {
                    request = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* ValidationRequest */ "a"]();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "currencyValue";
                    request.constraints = constraints;

                    var validator = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* Validator */ "b"]();

                    response = validator.validate(request);
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

            });
        });
    });
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rp_parsing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _test_general_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);






var merge = _test_general_js__WEBPACK_IMPORTED_MODULE_4__[/* merge */ "a"];

describe("Decimals", function () {
    describe("Parsing decimals", function () {
        [
            ["1.23", "1", ".23", "positive", false, 0, 0, 3, 3, 2, false, false],
            [" 1.23 ", "1", ".23", "positive", false, 0, 0, 3, 3, 2, false, false],
            ["   1.23   ", "1", ".23", "positive", false, 0, 0, 3, 3, 2, false, false],
            ["+1.23", "1", ".23", "positive", true, 0, 0, 3, 3, 2, false, false],
            [" + 1.23 ", "1", ".23", "positive", true, 0, 0, 3, 3, 2, false, false],
            ["   +   1.23   ", "1", ".23", "positive", true, 0, 0, 3, 3, 2, false, false],
            ["-1.23", "1", ".23", "negative", true, 0, 0, 3, 3, 2, false, false],
            [" - 1.23 ", "1", ".23", "negative", true, 0, 0, 3, 3, 2, false, false],
            ["   -   1.23   ", "1", ".23", "negative", true, 0, 0, 3, 3, 2, false, false],
            ["0.123", "0", ".123", "positive", false, 1, 0, 3, 3, 3, false, true],
            ["000.123", "000", ".123", "positive", false, 3, 0, 3, 3, 3, false, true],
            [".123", "", ".123", "positive", false, 0, 0, 3, 3, 3, false, true],
            ["123.", "123", ".", "positive", false, 0, 0, 3, 3, 0, false, false],
            ["123.000", "123", ".000", "positive", false, 0, 3, 6, 6, 3, false, false],
            ["-0.123", "0", ".123", "negative", true, 1, 0, 3, 3, 3, false, true],
            ["-000.123", "000", ".123", "negative", true, 3, 0, 3, 3, 3, false, true],
            ["-.123", "", ".123", "negative", true, 0, 0, 3, 3, 3, false, true],
            ["-123.", "123", ".", "negative", true, 0, 0, 3, 3, 0, false, false],
            ["-123.000", "123", ".000", "negative", true, 0, 3, 6, 6, 3, false, false],
            ["0.00123", "0", ".00123", "positive", false, 1, 0, 3, 3, 5, false, true],
            ["0.0012300456", "0", ".0012300456", "positive", false, 1, 0, 8, 8, 10, false, true],
            ["0.00123000", "0", ".00123000", "positive", false, 1, 3, 6, 6, 8, false, true],
            ["0.", "0", ".", "positive", false, 1, 0, 1, 1, 0, true, true],
            [".0", "", ".0", "positive", false, 0, 1, 1, 1, 1, true, true],
            ["0.0", "0", ".0", "positive", false, 1, 1, 1, 1, 1, true, true],
            ["0.000", "0", ".000", "positive", false, 1, 3, 1, 1, 3, true, true],
            ["000.0", "000", ".0", "positive", false, 3, 1, 1, 1, 1, true, true],
            ["000.000", "000", ".000", "positive", false, 3, 3, 1, 1, 3, true, true],
            ["+0.0", "0", ".0", "positive", true, 1, 1, 1, 1, 1, true, true],
            ["-0.0", "0", ".0", "negative", true, 1, 1, 1, 1, 1, true, true],
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

            var parseResult;

            describe(`Parsing "${studentsResponse}"`, function () {

                beforeEach(function () {
                    var parser = new _rp_parsing_js__WEBPACK_IMPORTED_MODULE_1__[/* Parser */ "a"]();

                    parseResult = parser.getParseResult(studentsResponse);
                });

                it(`The parser should identify it as a number.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.type, "number");
                });

                it(`The parser should identify it as a decimal number.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.subtype, "decimalNumber");
                });

                it(`The parser should identify "${integralPart}" as the integral part.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.integralPart, integralPart);
                });

                it(`The parser should identify "${decimalPart}" as the decimal part.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.decimalPart, decimalPart);
                });

                it(`The parser should identify that the sign is ${sign}.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.sign, sign);
                });

                it(`The parser should identify that the sign is ${(signIsExplicit) ? "explicit" : "implicit"}.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.signIsExplicit, signIsExplicit);
                });

                it(`The parser should identify that it has ${nlz} leading zeros.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.numberOfLeadingZeros, nlz);
                });

                it(`The parser should identify that it has ${ntz} trailing zeros.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.numberOfTrailingZeros, ntz);
                });

                it(`The parser should identify that it has at least ${nsf1} significant figures.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.minimumNumberOfSignificantFigures, nsf1);
                });

                it(`The parser should identify that it has no more than ${nsf2} significant figures.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.maximumNumberOfSignificantFigures, nsf2);
                });

                it(`The parser should identify that it has ${ndp} decimal places.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.numberOfDecimalPlaces, ndp);
                });

                it(`The parser should identify that it is${isZero ? "" : " not"} equal to zero.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.isZero, isZero);
                });

                it(`The parser should identify that the integral part is${integralPartIsZero ? "" : " not"} equal to zero.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.integralPartIsZero, integralPartIsZero);
                });

            });
        });
    });

    describe("Validating decimals", function () {
        [
            ["123", {}, true, "123"],
            ["1.23", {}, true, "1.23"],
            ["1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "1.23"],
            ["1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "1.23"],
            ["1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "1.23"],
            ["+1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], false, "+1.23"],
            ["+1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "+1.23"],
            ["-1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "-1.23"],
            ["-1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "-1.23"],
            [" 1.23 ", {}, true, "1.23"],
            ["   1.23   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "1.23"],
            [" 1.23 ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "1.23"],
            ["   1.23   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "1.23"],
            ["001.23", {}, false, "001.23"],
            ["001.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "001.23"],
            ["+001.23", {}, false, "+001.23"],
            ["+001.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "+001.23"],
            ["+001.23", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"]), true, "+001.23"],
            ["-001.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "-001.23"],
            ["-001.23", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"]), true, "-001.23"],
            ["0.12", {}, true, "0.12"],
            ["0.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0.12"],
            [".12", {}, true, "0.12"],
            [".12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0.12"],
            ["00.12", {}, false, "00.12"],
            ["00.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "00.12"],
            ["0", {}, true, "0"],
            ["0.", {}, true, "0"],
            [".0", {}, true, "0.0"],
            ["0.0", {}, true, "0.0"],
            ["000.0", {}, false, "000.0"],
            ["0.000", {}, true, "0.000"],
            ["000.000", {}, false, "000.000"],
            ["0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0"],
            ["0.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0"],
            [".0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0.0"],
            ["0.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0.0"],
            ["000.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "000.0"],
            ["0.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0.000"],
            ["000.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "000.000"],
            ["0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "0"],
            ["0.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "0"],
            [".0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "0.0"],
            ["0.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "0.0"],
            ["000.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "000.0"],
            ["0.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "0.000"],
            ["000.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "000.000"],
            ["+0", {}, true, "0"],
            ["+0.", {}, true, "0"],
            ["+.0", {}, true, "0.0"],
            ["+0.0", {}, true, "0.0"],
            ["+000.0", {}, false, "000.0"],
            ["+0.000", {}, true, "0.000"],
            ["+000.000", {}, false, "000.000"],
            ["+0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "0"],
            ["+0.", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "0"],
            ["+.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "0.0"],
            ["+0.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "0.0"],
            ["+000.0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "000.0"],
            ["+0.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "0.000"],
            ["+000.000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "000.000"],
            ["0.0012", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], false, "0.0012"],
            ["0.00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "0.00123"],
            ["0.001234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "0.001234"],
            ["0.00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast5SF */ "j"], false, "0.00123"],
            ["0.001234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast5SF */ "j"], false, "0.001234"],
            ["0.0012345", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast5SF */ "j"], true, "0.0012345"],
            ["0.0012", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "0.0012"],
            ["0.00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "0.00123"],
            ["0.001234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], false, "0.001234"],
            ["0.0012345", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan6SF */ "p"], true, "0.0012345"],
            ["0.00123456", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan6SF */ "p"], true, "0.00123456"],
            ["0.001234567", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan6SF */ "p"], false, "0.001234567"],
            ["0.0012", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], false, "0.0012"],
            ["0.00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], true, "0.00123"],
            ["0.001234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], false, "0.001234"],
            ["0.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3DP */ "h"], false, "0.12"],
            ["0.123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3DP */ "h"], true, "0.123"],
            ["0.1234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3DP */ "h"], true, "0.1234"],
            ["0.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3DP */ "n"], true, "0.12"],
            ["0.123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3DP */ "n"], true, "0.123"],
            ["0.1234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3DP */ "n"], false, "0.1234"],
            ["0.12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3DP */ "k"], false, "0.12"],
            ["0.123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3DP */ "k"], true, "0.123"],
            ["0.1234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3DP */ "k"], false, "0.1234"],
            ["01.23", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "1.23"],
            ["001.23", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "1.23"],
            ["0001.23", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "1.23"],
            ["0.12", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "0.12"],
            ["00.12", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "0.12"],
            ["000.12", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "0.12"],
            [".12", {}, true, "0.12"],
            ["+1.23", {}, true, "+1.23"],
            ["1.23", {}, true, "1.23"],
            ["-1.23", {}, true, "-1.23"],
            ["+1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeExplicit */ "f"], true, "+1.23"],
            ["1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeExplicit */ "f"], true, "+1.23"],
            ["-1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeExplicit */ "f"], true, "-1.23"],
            ["+1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeImplicit */ "g"], true, "1.23"],
            ["1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeImplicit */ "g"], true, "1.23"],
            ["-1.23", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeImplicit */ "g"], true, "-1.23"],
            ["+", {}, false, "+"],
            ["-", {}, false, "-"],
            ["00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12.000"],
            ["00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontAllowTrailingZeros */ "c"]), false, "12.000"],
            ["00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), true, "12"],
            ["00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "12."],
            ["+00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "+12.000"],
            ["+00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"]), true, "+12"],
            ["+00012.000", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeTrailingZerosFromNormalizedForm */ "u"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* dontRemoveTrailingDecimalPoint */ "d"]), true, "+12."],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request;
            var response;

            describe(`Validating "${studentsResponse}" with constraints ${JSON.stringify(constraints)}`, function () {

                beforeEach(function () {
                    request = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* ValidationRequest */ "a"]();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "decimal";
                    request.constraints = constraints;

                    var validator = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* Validator */ "b"]();

                    response = validator.validate(request);
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

            });
        });
    });
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rp_parsing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _test_general_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);






var merge = _test_general_js__WEBPACK_IMPORTED_MODULE_4__[/* merge */ "a"];

describe("Non-negative Integers", function () {
    describe("Validating non-negative integers", function () {
        [
            ["123", {}, true, "123"],
            ["123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "123"],
            ["123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "123"],
            ["123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "123"],
            [" 123 ", {}, true, "123"],
            ["   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "123"],
            [" 123 ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "123"],
            ["   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "123"],
            ["00123", {}, false, "00123"],
            ["00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "00123"],
            ["+123", {}, true, "+123"],
            ["+123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], false, "+123"],
            ["+123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "+123"],
            [" + 123 ", {}, true, "+123"],
            ["   +   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], false, "+123"],
            ["   +   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "+123"],
            ["-123", {}, false, "-123"],
            ["-123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], false, "-123"],
            ["-123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "-123"],
            [" - 123 ", {}, false, "-123"],
            ["   -   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], false, "-123"],
            ["   -   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "-123"],
            ["+00123", {}, false, "+00123"],
            ["+00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "+00123"],
            ["+00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "+00123"],
            ["+00123", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"]), true, "+00123"],
            ["-00123", {}, false, "-00123"],
            ["-00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], false, "-00123"],
            ["-00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "-00123"],
            ["-00123", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"]), false, "-00123"],
            ["0", {}, true, "0"],
            [" 0 ", {}, true, "0"],
            ["0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "0"],
            ["0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "0"],
            ["0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "0"],
            ["+0", {}, true, "0"],
            ["   +   0   ", {}, true, "0"],
            ["+0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], false, "0"],
            ["+0", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "0"],
            ["123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "123"],
            ["12300", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "12300"],
            ["12345", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "12345"],
            ["120", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "120"],
            ["100", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], true, "100"],
            ["123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast5SF */ "j"], false, "123"],
            ["12345", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast5SF */ "j"], true, "12345"],
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], false, "12"],
            ["012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveAtLeast3SF */ "i"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"]), false, "012"],
            ["123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "123"],
            ["120", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "120"],
            ["100", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "100"],
            ["12345", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan6SF */ "p"], true, "12345"],
            ["1000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "1000"],
            ["123000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], true, "123000"],
            ["1234", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan3SF */ "o"], false, "1234"],
            ["1234567", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveNoMoreThan6SF */ "p"], false, "1234567"],
            ["12300", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], true, "12300"],
            ["12000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], true, "12000"],
            ["10000", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], true, "10000"],
            ["12340", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly3SF */ "l"], false, "12340"],
            ["1230", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly5SF */ "m"], false, "1230"],
            ["12300", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly5SF */ "m"], true, "12300"],
            ["12345", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly5SF */ "m"], true, "12345"],
            ["123456", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHaveExactly5SF */ "m"], false, "123456"],
            ["+", {}, false, "+"],
            ["-", {}, false, "-"],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request;
            var response;
            var integer;

            describe(`Validating "${studentsResponse}" with constraints ${constraints}`, function () {

                beforeEach(function () {
                    request = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* ValidationRequest */ "a"]();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "nonNegativeInteger";
                    request.constraints = constraints;

                    var validator = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* Validator */ "b"]();

                    response = validator.validate(request);

                    integer = response.expression;
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

                it(`The expression should have the type "number".`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(integer.type, "number");
                });

                it(`The expression should have the subtype "integer".`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(integer.subtype, "integer");
                });

            });
        });
    });
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "assert"
var external_assert_ = __webpack_require__(1);
var external_assert_default = /*#__PURE__*/__webpack_require__.n(external_assert_);

// EXTERNAL MODULE: ./rp/parsing.js
var parsing = __webpack_require__(2);

// EXTERNAL MODULE: ./rp/validation.js + 1 modules
var validation = __webpack_require__(3);

// EXTERNAL MODULE: ./test/constraints.js
var test_constraints = __webpack_require__(0);

// EXTERNAL MODULE: ./test/general.js
var general = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/mock-xmlhttprequest/dist/mock-xmlhttprequest.esm.js
/**
 * mock-xmlhttprequest v6.2.0
 * (c) 2020 Bertrand Guay-Paquet
 * @license ISC
 */
/**
 * XMLHttpRequest events
 */
class Event {
  /**
   * @param {string} type event type
   * @param {number} loaded loaded bytes
   * @param {number} total total bytes
   */
  constructor(type, loaded, total) {
    this.type = type;
    this.loaded = loaded !== undefined ? loaded : 0;
    if (total > 0) {
      this.total = total;
      this.lengthComputable = true;
    } else {
      this.total = 0;
      this.lengthComputable = false;
    }
  }
}

function flattenUseCaptureFlag(options) {
  if (typeof options === 'boolean') {
    return options;
  }
  return !!options.capture;
}

/**
 * An EventTarget object represents a target to which an event can be dispatched when something has
 * occurred.
 *
 * Based on https://dom.spec.whatwg.org/#interface-eventtarget
 */
class EventTarget {
  /**
   * Contructor
   *
   * @param {?object} eventContext optional "this" for event handlers
   */
  constructor(eventContext = this) {
    this._eventContext = eventContext;
    this._eventListeners = {};
  }

  /**
   * @returns {boolean} whether any event listener is registered
   */
  hasListeners() {
    return EventTarget.events.some((event) => {
      return this._eventListeners[event] || this[`on${event}`];
    });
  }

  /**
   * Add an event listener.
   * See https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener
   *
   * @param {string} type event type ('load', 'abort', etc)
   * @param {EventListener|Function} callback listener callback
   * @param {boolean|object} options options object or the useCapture flag
   */
  addEventListener(type, callback, options = false) {
    if (callback) {
      const useCapture = flattenUseCaptureFlag(options);
      const listener = {
        callback,
        useCapture,
        once: !!options.once,
      };

      this._eventListeners[type] = this._eventListeners[type] || [];

      // If eventTarget’s event listener list does not contain an event listener whose type is
      // listener’s type, callback is listener’s callback, and capture is listener’s capture, then
      // append listener to eventTarget’s event listener list.
      // See https://dom.spec.whatwg.org/#add-an-event-listener
      if (!this._eventListeners[type].some((other) => {
        return other.callback === listener.callback && other.useCapture === listener.useCapture;
      })) {
        this._eventListeners[type].push(listener);
      }
    }
  }

  /**
   * Remove an event listener.
   * See https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener
   *
   * @param {string} type event type ('load', 'abort', etc)
   * @param {EventListener|Function} callback listener callback
   * @param {boolean|object} options options object or the useCapture flag
   */
  removeEventListener(type, callback, options = false) {
    if (this._eventListeners[type]) {
      const useCapture = flattenUseCaptureFlag(options);
      const index = this._eventListeners[type].findIndex((listener) => {
        return callback === listener.callback && useCapture === listener.useCapture;
      });
      if (index >= 0) {
        this._eventListeners[type].splice(index, 1);
      }
    }
  }

  /**
   * Calls all the listeners for the event.
   *
   * @param {object} event event
   * @returns {boolean} always true since none of the xhr event are cancelable
   */
  dispatchEvent(event) {
    // Only the event listeners registered at this point should be called. Storing them here avoids
    // problems with callbacks that add or remove listeners.
    const listeners = [];
    if (this._eventListeners[event.type]) {
      listeners.push(...this._eventListeners[event.type].map((listener) => listener.callback));

      // Remove 'once' listeners
      this._eventListeners[event.type] = this._eventListeners[event.type]
        .filter((listener) => !listener.once);
    }

    // Handle event listeners added as object properties (e.g. obj.onload = ...)
    if (EventTarget.events.includes(event.type)) {
      const listener = this[`on${event.type}`];
      if (listener) {
        listeners.push(listener);
      }
    }

    // Call the listeners
    listeners.forEach((listener) => {
      if (typeof listener === 'function') {
        listener.call(this._eventContext, event);
      } else {
        listener.handleEvent();
      }
    });
    return true;
  }
}

/**
 * XMLHttpRequest events
 */
EventTarget.events = [
  'loadstart',
  'progress',
  'abort',
  'error',
  'load',
  'timeout',
  'loadend',
];

/**
 * HTTP header container
 */
class HeadersContainer {
  /**
   * @param {object} headers initial headers
   */
  constructor(headers) {
    this._headers = new Map();
    if (headers && headers instanceof Object) {
      Object.keys(headers).forEach((key) => {
        this.addHeader(key, headers[key]);
      });
    }
  }

  /**
   * Reset the container to its empty state.
   */
  reset() {
    this._headers.clear();
  }

  /**
   * Get header value. Header names are case-insensitive.
   *
   * @param  {string} name header name
   * @returns {string|null} header value or null
   */
  getHeader(name) {
    const value = this._headers.get(name.toLowerCase());
    return value !== undefined ? value : null;
  }

  /**
   * Get all headers as a string. Each header is on its own line.
   *
   * @returns {string} concatenated headers
   */
  getAll() {
    // Sort the header names. It's not mandated by RFC 7230 but it makes assertion testing easier
    // and, most importantly, it is required by getAllResponseHeaders() of XMLHttpRequest.
    // See https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
    const headerNames = [...this._headers.keys()].sort();

    // Combine the header values
    const headers = headerNames.reduce((result, name) => {
      const headerValue = this._headers.get(name);
      return `${result}${name}: ${headerValue}\r\n`;
    }, '');
    return headers;
  }

  /**
   * Get all headers as an object.
   *
   * @returns {object} headers
   */
  getHash() {
    const headers = {};
    this._headers.forEach((value, name) => {
      headers[name] = value;
    });
    return headers;
  }

  /**
   * Add a header value, combining it with any previous value for the same header name.
   *
   * @param {string} name header name
   * @param {string} value header value
   */
  addHeader(name, value) {
    name = name.toLowerCase();
    const currentValue = this._headers.get(name);
    if (currentValue) {
      value = `${currentValue}, ${value}`;
    }
    this._headers.set(name, value);
  }
}

function getBodyByteSize(body) {
  if (!body) {
    return 0;
  }

  if (typeof body === 'string') {
    return getStringByteLength(body);
  } else if ((global.FormData && body instanceof global.FormData)
    || (body.constructor && body.constructor.name === 'FormData')) {
    // A FormData has field-value pairs. This testing code only sums the individual sizes of the
    // values. The full multipart/form-data encoding also adds headers, encoding, etc. which we
    // don't reproduce here.
    return Array.from(body.values()).reduce((sum, value) => {
      const valueSize = value.size || getStringByteLength(String(value));
      return sum + valueSize;
    }, 0);
  }

  // Handles Blob and BufferSource
  return body.size || body.byteLength || 0;
}

function getStringByteLength(string) {
  // Compute the byte length of the string (which is not the same as string.length)
  return global.Blob ? new global.Blob(string).size : Buffer.byteLength(string);
}

// Disallowed request headers for setRequestHeader()
const forbiddenHeaders = [
  'Accept-Charset',
  'Accept-Encoding',
  'Access-Control-Request-Headers',
  'Access-Control-Request-Method',
  'Connection',
  'Content-Length',
  'Cookie',
  'Cookie2',
  'Date',
  'DNT',
  'Expect',
  'Host',
  'Keep-Alive',
  'Origin',
  'Referer',
  'TE',
  'Trailer',
  'Transfer-Encoding',
  'Upgrade',
  'Via',
];
const forbiddenHeaderRegEx = new RegExp(`^(${forbiddenHeaders.join('|')}|Proxy-.*|Sec-.*)$`, 'i');

/**
 * See https://fetch.spec.whatwg.org/#forbidden-header-name
 *
 * @param {string} name header name
 * @returns {boolean} whether the request header name is forbidden for XMLHttpRequest
 */
function isRequestHeaderForbidden(name) {
  return forbiddenHeaderRegEx.test(name);
}

/**
 * See https://fetch.spec.whatwg.org/#forbidden-method
 *
 * @param {string} name method name
 * @returns {boolean} whether the request method is forbidden for XMLHttpRequest
 */
function isRequestMethodForbidden(method) {
  return /^(CONNECT|TRACE|TRACK)$/i.test(method);
}

// Normalize method names as described in open()
// https://xhr.spec.whatwg.org/#the-open()-method
const upperCaseMethods = [
  'DELETE',
  'GET',
  'HEAD',
  'OPTIONS',
  'POST',
  'PUT',
];
const upperCaseMethodsRegEx = new RegExp(`^(${upperCaseMethods.join('|')})$`, 'i');

/**
 * See https://fetch.spec.whatwg.org/#concept-method-normalize
 *
 * @param {string} method HTTP method name
 * @returns {string} normalized method name
 */
function normalizeHTTPMethodName(method) {
  if (upperCaseMethodsRegEx.test(method)) {
    method = method.toUpperCase();
  }
  return method;
}

// Status code reason phrases from RFC 7231 §6.1, RFC 4918, RFC 5842, RFC 6585 and RFC 7538
const statusTexts = {
  100: 'Continue',
  101: 'Switching Protocols',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content', // RFC 7233
  207: 'Multi-Status', // RFC 4918
  208: 'Already Reported', // RFC 5842
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified', // RFC 7232
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect', // RFC 7538
  400: 'Bad Request',
  401: 'Unauthorized', // RFC 7235
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required', // RFC 7235
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed', // RFC 7232
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable', // RFC 7233
  417: 'Expectation Failed',
  422: 'Unprocessable Entity', // RFC 4918
  423: 'Locked', // RFC 4918
  424: 'Failed Dependency', // RFC 4918
  426: 'Upgrade Required',
  428: 'Precondition Required', // RFC 6585
  429: 'Too Many Requests', // RFC 6585
  431: 'Request Header Fields Too Large', // RFC 6585
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  507: 'Insufficient Storage', // RFC 4918
  511: 'Network Authentication Required', // RFC 6585
};

/**
 * @param {number} status HTTP status code
 * @returns {string} status text
 */
function getStatusText(status) {
  return statusTexts[status] || 'Unknown Status';
}

function throwError(type, text = '') {
  const exception = new Error(text);
  exception.name = type;
  throw exception;
}

/**
 * XMLHttpRequest mock for testing.
 * Based on https://xhr.spec.whatwg.org version '28 November 2018'.
 *
 * Supports:
 *  - events and states
 *  - open(), setRequestHeader(), send() and abort()
 *  - upload and download progress events
 *  - response status, statusText, headers and body
 *  - the timeout attribute (can be disabled) (since v4.0.0)
 *  - simulating a network error
 *  - simulating a request timeout (see MockXhr.setRequestTimeout())
 *
 * Partial support:
 *  - overrideMimeType(): throws when required, but has no other effect.
 *  - responseType: '', 'text' and 'json' are fully supported. Other responseType values can also be
 *    used, but they will return the response body given to setResponseBody() as-is in xhr.response.
 *  - responseXml: the response body is not converted to a document response. To get a document
 *    response, use it directly as the response body in setResponseBody().
 *
 * Not supported:
 * - synchronous requests (i.e. async == false)
 * - parsing the url and setting the username and password since there are no actual HTTP requests
 * - responseUrl (i.e. the final request url with redirects) is not automatically set. This can be
 *   emulated in a request handler.
 */
class MockXhr extends EventTarget {
  /**
   * Constructor
   */
  constructor() {
    super();
    this._readyState = MockXhr.UNSENT;
    this.requestHeaders = new HeadersContainer();
    this._withCredentials = false;
    this._timeout = 0;
    this._upload = new EventTarget(this);
    this._response = this._networkErrorResponse();

    // Per-instance flag to enable the effects of the timeout attribute
    this.timeoutEnabled = true;

    // Hook for XMLHttpRequest creation
    if (typeof MockXhr.onCreate === 'function') {
      MockXhr.onCreate(this);
    }
  }

  ////////////
  // States //
  ////////////

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
   *
   * @returns {number} readystate attribute
   */
  get readyState() {
    return this._readyState;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {number} value
   */
  set readyState(value) { return value; }

  /////////////
  // Request //
  /////////////

  /**
   * Set the request method and url.
   * https://xhr.spec.whatwg.org/#the-open()-method
   *
   * @param {string} method request HTTP method (GET, POST, etc.)
   * @param {string} url request url
   * @param {boolean} async async request flag (only true is supported)
   */
  open(method, url, async = true) {
    if (!async) {
      throw new Error('async = false is not supported.');
    }
    if (isRequestMethodForbidden(method)) {
      throwError('SecurityError', `Method "${method}" forbidden.`);
    }
    method = normalizeHTTPMethodName(method);
    // Skip parsing the url and setting the username and password

    this._terminateRequest();

    // Set variables
    this._sendFlag = false;
    this._uploadListenerFlag = false;
    this.method = method;
    this.url = url;
    this.requestHeaders.reset();
    this._response = this._networkErrorResponse();
    if (this._readyState !== MockXhr.OPENED) {
      this._readyState = MockXhr.OPENED;
      this._fireReadyStateChange();
    }
  }

  /**
   * Add a request header value.
   * https://xhr.spec.whatwg.org/#the-setrequestheader()-method
   *
   * @param {string} name header name
   * @param {string} value header value
   */
  setRequestHeader(name, value) {
    if (this._readyState !== MockXhr.OPENED || this._sendFlag) {
      throwError('InvalidStateError');
    }
    if (typeof name !== 'string' || typeof value !== 'string') {
      throw new SyntaxError();
    }

    if (!isRequestHeaderForbidden(name)) {
      // Normalize value
      value = value.trim();
      this.requestHeaders.addHeader(name, value);
    }
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-timeout
   *
   * @returns {number} timeout attribute
   */
  get timeout() {
    return this._timeout;
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-timeout
   *
   * @param {number} value timeout value
   */
  set timeout(value) {
    // Since this library is meant to run on node, skip the step involving the Window object.
    this._timeout = value;
    if (this._sendFlag && this.timeoutEnabled && this.constructor.timeoutEnabled) {
      // A fetch is active so schedule a request timeout
      this._scheduleRequestTimeout();
    }
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-withcredentials
   *
   * @returns {boolean} withCredentials attribute
   */
  get withCredentials() {
    return this._withCredentials;
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-withcredentials
   *
   * @param {boolean} value withCredentials value
   */
  set withCredentials(value) {
    if ((this._readyState !== MockXhr.UNSENT && this._readyState !== MockXhr.OPENED)
      || this._sendFlag) {
      throwError('InvalidStateError');
    }
    this._withCredentials = !!value;
  }

  /**
   * https://xhr.spec.whatwg.org/#the-upload-attribute
   *
   * @returns {EventTarget} upload attribute
   */
  get upload() {
    return this._upload;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {EventTarget} value
   */
  set upload(value) { return value; }

  /**
   * Initiate the request.
   * https://xhr.spec.whatwg.org/#the-send()-method
   *
   * @param {*} body request body
   */
  send(body = null) {
    if (this._readyState !== MockXhr.OPENED || this._sendFlag) {
      throwError('InvalidStateError');
    }
    if (this.method === 'GET' || this.method === 'HEAD') {
      body = null;
    }

    if (body !== null) {
      let extractedContentType = null;

      // Document body type not supported

      // https://fetch.spec.whatwg.org/#concept-bodyinit-extract
      {
        let contentType = null;
        if (typeof body === 'string') {
          contentType = 'text/plain;charset=UTF-8';
        } else if (body.type) {
          // As specified for Blob
          contentType = body.type;
        }

        // BufferSource, FormData, etc. not handled specially
        extractedContentType = contentType;
      }

      /*
      * Skipping step "4. If author request headers contains `Content-Type`, then:"
      * Parsing mime type strings and overriding the charset to UTF-8 seems like a lot of work
      * for little gain. If I'm wrong, please open an issue or better yet a pull request.
      */

      if (this.requestHeaders.getHeader('Content-Type') === null && extractedContentType !== null) {
        this.requestHeaders.addHeader('Content-Type', extractedContentType);
      }
    }

    this._uploadListenerFlag = this._upload.hasListeners();
    this.body = body;
    this._uploadCompleteFlag = this.body === null;
    this._timedOutFlag = false;
    this._sendFlag = true;

    this._fireEvent('loadstart', 0, 0);
    if (!this._uploadCompleteFlag && this._uploadListenerFlag) {
      this._fireUploadEvent('loadstart', 0, this.getRequestBodySize());
    }

    // Other interactions are done through the mock's response methods
    if (this._readyState !== MockXhr.OPENED || !this._sendFlag) {
      return;
    }

    this._timeoutReference = Date.now();
    this._scheduleRequestTimeout();

    // Hook for XMLHttpRequest.send(). Execute in an empty callstack
    if (typeof this.onSend === 'function') {
      // Save the callback in case it changes before it has a chance to run
      const { onSend } = this;
      setTimeout(() => onSend.call(this, this), 0);
    }
    if (typeof MockXhr.onSend === 'function') {
      // Save the callback in case it changes before it has a chance to run
      const { onSend } = MockXhr;
      setTimeout(() => onSend.call(this, this), 0);
    }
  }

  /**
   * Abort the request.
   * https://xhr.spec.whatwg.org/#the-abort()-method
   */
  abort() {
    this._terminateRequest();

    if ((this._readyState === MockXhr.OPENED && this._sendFlag)
      || this._readyState === MockXhr.HEADERS_RECEIVED
      || this._readyState === MockXhr.LOADING) {
      this._requestErrorSteps('abort');
    }

    if (this._readyState === MockXhr.DONE) {
      // No readystatechange event is dispatched.
      this._readyState = MockXhr.UNSENT;
      this._response = this._networkErrorResponse();
    }
  }

  //////////////
  // Response //
  //////////////

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-status
   *
   * @returns {number} status attribute
   */
  get status() {
    return this._response.status;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {number} value
   */
  set status(value) { return value; }

  /**
   * https://xhr.spec.whatwg.org/#the-statustext-attribute
   *
   * @returns {string} statusText attribute
   */
  get statusText() {
    return this._response.statusMessage;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {string} value
   */
  set statusText(value) { return value; }

  /**
   * Get a response header value.
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-getresponseheader
   *
   * @param {string} name header name
   * @returns {string} header value
   */
  getResponseHeader(name) {
    return this._response.headers.getHeader(name);
  }

  /**
   * Get all response headers as a string.
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-getallresponseheaders
   *
   * @returns {string} concatenated headers
   */
  getAllResponseHeaders() {
    return this._response.headers.getAll();
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-overridemimetype
   *
   * @param {string} mime MIME type
   */
  overrideMimeType(/* mime */) {
    if (this._readyState === MockXhr.LOADING || this._readyState === MockXhr.DONE) {
      throwError('InvalidStateError');
    }
    // noop
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-responsetype
   *
   * @returns {string} responseType attribute
   */
  get responseType() {
    return this._responseType || '';
  }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-responsetype
   *
   * @param {string} value responseType value
   */
  set responseType(value) {
    // Since this library is meant to run on node, skip the steps involving the Window object.
    if (this._readyState === MockXhr.LOADING || this._readyState === MockXhr.DONE) {
      throwError('InvalidStateError');
    }

    // The spec doesn't mandate throwing anything on invalid values since values must be of type
    // XMLHttpRequestResponseType. Observed browser behavior is to ignore invalid values.
    const responseTypes = ['', 'arraybuffer', 'blob', 'document', 'json', 'text'];
    if (responseTypes.includes(value)) {
      this._responseType = value;
    }
  }

  /**
   * https://xhr.spec.whatwg.org/#the-response-attribute
   *
   * @returns {*} response
   */
  get response() {
    if (this.responseType === '' || this.responseType === 'text') {
      if (this._readyState !== MockXhr.LOADING && this._readyState !== MockXhr.DONE) {
        return '';
      }

      // No support for charset decoding as outlined in https://xhr.spec.whatwg.org/#text-response
      return this._response.body === null ? '' : this._response.body;
    }

    if (this._readyState !== MockXhr.DONE) {
      return null;
    }

    if (this.responseType === 'json') {
      if (this._response.body === null) {
        return null;
      }
      try {
        return JSON.parse(this._response.body);
      } catch (e) {
        return null;
      }
    }

    // Other responseTypes are sent as-is. They can be given directly by setResponseBody() anyway.
    return this._response.body;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {*} value
   */
  set response(value) { return value; }

  /**
   * https://xhr.spec.whatwg.org/#the-responsetext-attribute
   *
   * @returns {string} responseText attribute
   */
  get responseText() {
    if (this.responseType !== '' && this.responseType !== 'text') {
      throwError('InvalidStateError');
    }
    if (this._readyState !== MockXhr.LOADING && this._readyState !== MockXhr.DONE) {
      return '';
    }

    // No support for charset decoding as outlined in https://xhr.spec.whatwg.org/#text-response
    return this._response.body === null ? '' : this._response.body;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {string} value
   */
  set responseText(value) { return value; }

  /**
   * https://xhr.spec.whatwg.org/#dom-xmlhttprequest-responsexml
   *
   * @returns {*} responseXML attribute
   */
  get responseXML() {
    if (this.responseType !== '' && this.responseType !== 'document') {
      throwError('InvalidStateError');
    }
    if (this._readyState !== MockXhr.DONE) {
      return null;
    }

    // Since this library is meant to run on node, there is no support for charset decoding as
    // outlined in https://xhr.spec.whatwg.org/#text-response
    // If needed, a document response can be given to setResponseBody() to be returned here.
    return this._response.body === null ? '' : this._response.body;
  }

  /**
   * noop setter
   *
   * @param {*} value ignored value
   * @returns {*} value
   */
  set responseXML(value) { return value; }

  ///////////////////////////
  // Mock response methods //
  ///////////////////////////

  /**
   * Note: the non-mocked body size will be larger than this for a multipart/form-data encoded
   * FormData body since it will include headers, encoding, etc. The value returned by this method
   * can therefore be seen as a floor value for the real thing that is nonetheless useful to
   * simulate upload progress events.
   *
   * @returns {number} request body's total byte size
   */
  getRequestBodySize() {
    if (!this._sendFlag) {
      throw new Error('Mock usage error detected.');
    }
    return getBodyByteSize(this.body);
  }

  /**
   * Fire a request upload progress event.
   *
   * @param {number} transmitted bytes transmitted
   */
  uploadProgress(transmitted) {
    if (!this._sendFlag || this._uploadCompleteFlag) {
      throw new Error('Mock usage error detected.');
    }
    if (this._uploadListenerFlag) {
      // If no listeners were registered before send(), no upload events should be fired.
      this._fireUploadEvent('progress', transmitted, this.getRequestBodySize());
    }
  }

  /**
   * Complete response method. Sets the response headers and body. Will set the
   * state to DONE.
   *
   * @param {?number} status response http status (default 200)
   * @param {?object} headers name-value headers (optional)
   * @param {?*} body response body (default null)
   * @param {?string} statusText response http status text (optional)
   */
  respond(status, headers, body, statusText) {
    this.setResponseHeaders(status, headers, statusText);
    this.setResponseBody(body);
  }

  /**
   * Set only the response headers. Will change the state to HEADERS_RECEIVED.
   *
   * @param {?number} status response http status (default 200)
   * @param {?object} headers name-value headers (optional)
   * @param {?string} statusText response http status text (optional)
   */
  setResponseHeaders(status, headers, statusText) {
    if (this._readyState !== MockXhr.OPENED || !this._sendFlag) {
      throw new Error('Mock usage error detected.');
    }
    if (this.body) {
      this._requestEndOfBody();
    }
    status = typeof status === 'number' ? status : 200;
    const statusMessage = statusText !== undefined ? statusText : getStatusText(status);
    this._processResponse({
      status,
      statusMessage,
      headers: new HeadersContainer(headers),
    });
  }

  /**
   * Fire a response progress event. Will set the state to LOADING.
   *
   * @param {number} transmitted transmitted bytes
   * @param {number} length total bytes
   */
  downloadProgress(transmitted, length) {
    if (this._readyState !== MockXhr.HEADERS_RECEIVED
      && this._readyState !== MockXhr.LOADING) {
      throw new Error('Mock usage error detected.');
    }

    // Useless condition but follows the spec's wording
    if (this._readyState === MockXhr.HEADERS_RECEIVED) {
      this._readyState = MockXhr.LOADING;
    }

    // As stated in https://xhr.spec.whatwg.org/#the-send()-method
    // Web compatibility is the reason readystatechange fires more often than
    // state changes.
    this._fireReadyStateChange();
    this._fireEvent('progress', transmitted, length);
  }

  /**
   * Set the response body. Will set the state to DONE.
   *
   * @param {?*} body response body (default null)
   */
  setResponseBody(body = null) {
    if (!this._sendFlag
      || (this._readyState !== MockXhr.OPENED
        && this._readyState !== MockXhr.HEADERS_RECEIVED
        && this._readyState !== MockXhr.LOADING)) {
      throw new Error('Mock usage error detected.');
    }
    if (this._readyState === MockXhr.OPENED) {
      // Default "200 - OK" response headers
      this.setResponseHeaders();
    }

    // As stated in https://xhr.spec.whatwg.org/#the-send()-method
    // Web compatibility is the reason readystatechange fires more often than
    // state changes.
    this._readyState = MockXhr.LOADING;
    this._fireReadyStateChange();

    this._response.body = body !== undefined ? body : null;
    this._handleResponseEndOfBody();
  }

  /**
   * Simulate a network error. Will set the state to DONE.
   */
  setNetworkError() {
    if (!this._sendFlag) {
      throw new Error('Mock usage error detected.');
    }
    this._processResponse(this._networkErrorResponse());
  }

  /**
   * Simulate a request timeout. Will set the state to DONE.
   */
  setRequestTimeout() {
    if (!this._sendFlag) {
      throw new Error('Mock usage error detected.');
    }
    this._terminateRequest();
    this._timedOutFlag = true;
    this._processResponse(this._networkErrorResponse());
  }

  ///////////////////////////////////
  // Request and response handling //
  ///////////////////////////////////

  /**
   * Note: the "process request body" task is in the MockXhr response methods
   * Process request end-of-body task. When the whole request is sent.
   * https://xhr.spec.whatwg.org/#the-send()-method
   */
  _requestEndOfBody() {
    this._uploadCompleteFlag = true;

    if (this._uploadListenerFlag) {
      // If no listeners were registered before send(), these steps do not run.
      const length = this.getRequestBodySize();
      const transmitted = length;
      this._fireUploadEvent('progress', transmitted, length);
      this._fireUploadEvent('load', transmitted, length);
      this._fireUploadEvent('loadend', transmitted, length);
    }
  }

  /**
   * Process response task. When the response headers are received.
   * https://xhr.spec.whatwg.org/#the-send()-method
   *
   * @param {*} response response
   */
  _processResponse(response) {
    this._response = response;
    this._handleResponseErrors();
    if (this._isNetworkErrorResponse()) {
      return;
    }
    this._readyState = MockXhr.HEADERS_RECEIVED;
    this._fireReadyStateChange();
    if (this._readyState !== MockXhr.HEADERS_RECEIVED) {
      return;
    }
    if (this._response.body === null) {
      this._handleResponseEndOfBody();
    }
    // Further steps are triggered by the MockXhr response methods
  }

  /**
   * Handle response end-of-body for response.
   * https://xhr.spec.whatwg.org/#handle-response-end-of-body
   */
  _handleResponseEndOfBody() {
    this._handleResponseErrors();
    if (this._isNetworkErrorResponse()) {
      return;
    }
    const length = this._response.body ? this._response.body.length : 0;
    this._fireEvent('progress', length, length);
    this._readyState = MockXhr.DONE;
    this._sendFlag = false;
    this._fireReadyStateChange();
    this._fireEvent('load', length, length);
    this._fireEvent('loadend', length, length);
  }

  /**
   * Handle errors for response.
   * https://xhr.spec.whatwg.org/#handle-errors
   */
  _handleResponseErrors() {
    if (!this._sendFlag) {
      return;
    }
    if (this._timedOutFlag) {
      // Timeout
      this._requestErrorSteps('timeout');
    } else if (this._isNetworkErrorResponse()) {
      // Network error
      this._requestErrorSteps('error');
    }
  }

  /**
   * The request error steps for event 'event'.
   * https://xhr.spec.whatwg.org/#request-error-steps
   *
   * @param {string} event event name
   */
  _requestErrorSteps(event) {
    this._readyState = MockXhr.DONE;
    this._sendFlag = false;
    this._response = this._networkErrorResponse();
    this._fireReadyStateChange();
    if (!this._uploadCompleteFlag) {
      this._uploadCompleteFlag = true;

      if (this._uploadListenerFlag) {
        // If no listeners were registered before send(), no upload events should be fired.
        this._fireUploadEvent(event, 0, 0);
        this._fireUploadEvent('loadend', 0, 0);
      }
    }
    this._fireEvent(event, 0, 0);
    this._fireEvent('loadend', 0, 0);
  }

  ///////////////
  // Internals //
  ///////////////

  /**
   * @returns {object} new network error response object
   */
  _networkErrorResponse() {
    return {
      type: 'error',
      status: 0,
      statusMessage: '',
      headers: new HeadersContainer(),
      body: null,
    };
  }

  _isNetworkErrorResponse() {
    return this._response.type === 'error';
  }

  _terminateRequest() {
    delete this.method;
    delete this.url;
  }

  _newEvent(name, transmitted, length) {
    return new Event(name, transmitted, length);
  }

  _fireEvent(name, transmitted, length) {
    this.dispatchEvent(this._newEvent(name, transmitted, length));
  }

  _fireUploadEvent(name, transmitted, length) {
    this._upload.dispatchEvent(this._newEvent(name, transmitted, length));
  }

  _fireReadyStateChange() {
    const event = new Event('readystatechange');
    if (this.onreadystatechange) {
      this.onreadystatechange(event);
    }
    this.dispatchEvent(event);
  }

  _scheduleRequestTimeout() {
    // Cancel any previous timeout task
    if (this._timeoutTask) {
      clearTimeout(this._timeoutTask);
    }

    if (this._timeout > 0) {
      // The timeout delay must be measured relative to the start of fetching
      // https://xhr.spec.whatwg.org/#the-timeout-attribute
      const delay = Math.max(0, this._timeout - (Date.now() - this._timeoutReference));
      this._timeoutTask = setTimeout(() => {
        if (this._sendFlag) {
          this.setRequestTimeout();
        }
        delete this._timeoutTask;
      }, delay);
    }
  }
}

// Global flag to enable the effects of the timeout attribute
MockXhr.timeoutEnabled = true;

/**
 * The client states
 * https://xhr.spec.whatwg.org/#states
 */
MockXhr.UNSENT = 0;
MockXhr.OPENED = 1;
MockXhr.HEADERS_RECEIVED = 2;
MockXhr.LOADING = 3;
MockXhr.DONE = 4;

/**
 * Mock server for responding to XMLHttpRequest mocks from the class MockXhr. Provides simple route
 * matching and request handlers to make test harness creation easier.
 */
class MockXhrServer {
  /**
   * Constructor
   *
   * @param {MockXhr} xhrMock XMLHttpRequest mock class
   * @param {?object} routes routes
   */
  constructor(xhrMock, routes = {}) {
    this.MockXhr = xhrMock;
    this._requests = [];
    this._routes = {};
    Object.keys(routes).forEach((method) => {
      const [matcher, handler] = routes[method];
      this.addHandler(method, matcher, handler);
    });
    xhrMock.onSend = (xhr) => { this._handleRequest(xhr); };

    // Setup a mock request factory for users
    this.xhrMock = xhrMock; // For backwards compatibility with < 4.1.0
    this.xhrFactory = () => new this.MockXhr();
  }

  /**
   * Install the server's XMLHttpRequest mock in the context. Revert with remove().
   *
   * @param {object?} context context object (e.g. global, window)
   * @returns {MockXhrServer} this
   */
  install(context = global) {
    this._savedXMLHttpRequest = context.XMLHttpRequest;
    this._savedContext = context;
    context.XMLHttpRequest = this.MockXhr;
    return this;
  }

  /**
   * Remove the server as the global XMLHttpRequest mock. Reverts the actions of install(global).
   */
  remove() {
    if (!this._savedContext) {
      throw new Error('remove() called without matching install(global).');
    }

    if (this._savedXMLHttpRequest !== undefined) {
      this._savedContext.XMLHttpRequest = this._savedXMLHttpRequest;
      delete this._savedXMLHttpRequest;
    } else {
      delete this._savedContext.XMLHttpRequest;
    }
    delete this._savedContext;
  }

  /**
   * Disable the effects of the timeout attribute on the XMLHttpRequest mock used by the server.
   */
  disableTimeout() {
    this.MockXhr.timeoutEnabled = false;
  }

  /**
   * Enable the effects of the timeout attribute on the XMLHttpRequest mock used by the server.
   */
  enableTimeout() {
    this.MockXhr.timeoutEnabled = true;
  }

  /**
   * Add a GET request handler.
   *
   * @param {string|RegExp|Function} matcher url matcher
   * @param {object|Function|object[]|Function[]} handler request handler
   * @returns {MockXhrServer} this
   */
  get(matcher, handler) {
    return this.addHandler('GET', matcher, handler);
  }

  /**
   * Add a POST request handler.
   *
   * @param {string|RegExp|Function} matcher url matcher
   * @param {object|Function|object[]|Function[]} handler request handler
   * @returns {MockXhrServer} this
   */
  post(matcher, handler) {
    return this.addHandler('POST', matcher, handler);
  }

  /**
   * Add a PUT request handler.
   *
   * @param {string|RegExp|Function} matcher url matcher
   * @param {object|Function|object[]|Function[]} handler request handler
   * @returns {MockXhrServer} this
   */
  put(matcher, handler) {
    return this.addHandler('PUT', matcher, handler);
  }

  /**
   * Add a DELETE request handler.
   *
   * @param {string|RegExp|Function} matcher url matcher
   * @param {object|Function|object[]|Function[]} handler request handler
   * @returns {MockXhrServer} this
   */
  delete(matcher, handler) {
    return this.addHandler('DELETE', matcher, handler);
  }

  /**
   * Add a request handler.
   *
   * @param {string} method HTTP method
   * @param {string|RegExp|Function} matcher url matcher
   * @param {object|Function|object[]|Function[]} handler request handler
   * @returns {MockXhrServer} this
   */
  addHandler(method, matcher, handler) {
    // Match the processing done in MockXHR for the method name
    method = normalizeHTTPMethodName(method);

    if (!this._routes[method]) {
      this._routes[method] = [];
    }
    this._routes[method].push({
      matcher,
      handler,
      count: 0,
    });
    return this;
  }

  /**
   * Set the default request handler for requests that don't match any route.
   *
   * @param {object|Function|object[]|Function[]} handler request handler
   * @returns {MockXhrServer} this
   */
  setDefaultHandler(handler) {
    this._defaultRoute = {
      handler,
      count: 0,
    };
    return this;
  }

  /**
   * Return 404 responses for requests that don't match any route.
   *
   * @returns {MockXhrServer} this
   */
  setDefault404() {
    return this.setDefaultHandler({ status: 404 });
  }

  /**
   * @returns {object[]} list of requests received by the server. Entries: { method, url }
   */
  getRequestLog() {
    return this._requests;
  }

  _handleRequest(xhr) {
    // Record the request for easier debugging
    this._requests.push({
      method: xhr.method,
      url: xhr.url,
      headers: xhr.requestHeaders.getHash(),
      body: xhr.body,
    });

    const route = this._findFirstMatchingRoute(xhr) || this._defaultRoute;
    if (route) {
      // Routes can have arrays of handlers. Each one is used once and the last one is used if out
      // of elements.
      let { handler } = route;
      if (Array.isArray(handler)) {
        handler = handler[Math.min(handler.length - 1, route.count)];
      }
      route.count += 1;

      if (typeof handler === 'function') {
        handler(xhr);
      } else {
        xhr.respond(handler.status, handler.headers, handler.body, handler.statusText);
      }
    }
  }

  _findFirstMatchingRoute(xhr) {
    const method = normalizeHTTPMethodName(xhr.method);
    if (!this._routes[method]) {
      return undefined;
    }

    const { url } = xhr;
    return this._routes[method].find((route) => {
      const { matcher } = route;
      if (typeof matcher === 'function') {
        return matcher(url);
      } else if (matcher instanceof RegExp) {
        return matcher.test(url);
      }
      return matcher === url;
    });
  }
}

/**
 * Create a new "local" MockXhr subclass. This makes it easier to have self-contained unit tests
 * since "global" hooks can be registered directly on the subclass. These hooks don't need to then
 * be removed after tests because they are local to the new subclass.
 *
 * @returns {MockXhr} new MockXhr subclass
 */
function newMockXhr() {
  class LocalMockXhr extends MockXhr {
    constructor() {
      super();

      // Call the local onCreate hook on the new mock instance
      if (typeof LocalMockXhr.onCreate === 'function') {
        LocalMockXhr.onCreate(this);
      }
    }

    // Override the parent method to enable the local MockXhr instance's
    // onSend() hook
    send(...args) {
      super.send(...args);

      // Execute in an empty callstack
      if (typeof LocalMockXhr.onSend === 'function') {
        // Save the callback in case it changes before it has a chance to run
        const { onSend } = LocalMockXhr;
        setTimeout(() => onSend.call(this, this), 0);
      }
    }
  }

  // Override the parent class' flag to enable the effects of the timeout attribute
  LocalMockXhr.timeoutEnabled = true;
  return LocalMockXhr;
}

/**
 * Create a new mock server using MockXhr.
 *
 * @returns {MockXhrServer} new mock server
 */
function newServer(routes) {
  return new MockXhrServer(newMockXhr(), routes);
}



// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(6);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(7);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// CONCATENATED MODULE: ./test/integers.test.js










var messagesFilePath = external_path_default.a.resolve( "rp/messages.en-gb.xml")
var messagesFile = external_fs_default.a.readFileSync(messagesFilePath, {encoding: "utf-8"});

console.log(messagesFile);

var merge = general["a" /* merge */];

describe("Integers", function () {

    var server;

    before(function () {
        server = /* Cannot get final name for export "default" in "./node_modules/mock-xmlhttprequest/dist/mock-xmlhttprequest.esm.js" (known exports: MockXhr MockXhrServer newMockXhr newServer, known reexports: ) */ undefined.newServer({
            get: ["/messages.en-gb.xml", {
                headers: { "Content-Type": "application/xml" },
                body: messagesFile,
            }],
        }).install();
    });

    after(function () {
        if (server !== undefined) {
            server.remove();
        }
    });

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

            var parseResult;

            describe(`Parsing "${studentsResponse}"`, function () {

                beforeEach(function () {
                    var parser = new parsing["a" /* Parser */]();

                    parseResult = parser.getParseResult(studentsResponse);
                });

                it(`The parser should identify it as a number.`, function () {
                    external_assert_default.a.equal(parseResult.type, "number");
                });

                it(`The parser should identify it as an integer.`, function () {
                    external_assert_default.a.equal(parseResult.subtype, "integer");
                });

                it(`The parser should identify "${integralPart}" as the integral part.`, function () {
                    external_assert_default.a.equal(parseResult.integralPart, integralPart);
                });

                it(`The parser should identify "${decimalPart}" as the decimal part.`, function () {
                    external_assert_default.a.equal(parseResult.decimalPart, decimalPart);
                });

                it(`The parser should identify that the sign is ${sign}.`, function () {
                    external_assert_default.a.equal(parseResult.sign, sign);
                });

                it(`The parser should identify that the sign is ${(signIsExplicit) ? "explicit" : "implicit"}.`, function () {
                    external_assert_default.a.equal(parseResult.signIsExplicit, signIsExplicit);
                });

                it(`The parser should identify that it has ${nlz} leading zeros.`, function () {
                    external_assert_default.a.equal(parseResult.numberOfLeadingZeros, nlz);
                });

                it(`The parser should identify that it has ${ntz} trailing zeros.`, function () {
                    external_assert_default.a.equal(parseResult.numberOfTrailingZeros, ntz);
                });

                it(`The parser should identify that it has at least ${nsf1} significant figures.`, function () {
                    external_assert_default.a.equal(parseResult.minimumNumberOfSignificantFigures, nsf1);
                });

                it(`The parser should identify that it has no more than ${nsf2} significant figures.`, function () {
                    external_assert_default.a.equal(parseResult.maximumNumberOfSignificantFigures, nsf2);
                });

                it(`The parser should identify that it has ${ndp} decimal places.`, function () {
                    external_assert_default.a.equal(parseResult.numberOfDecimalPlaces, ndp);
                });

                it(`The parser should identify that it is equal to zero.`, function () {
                    external_assert_default.a.equal(parseResult.isZero, isZero);
                });

                it(`The parser should identify that the integral part is equal to zero.`, function () {
                    external_assert_default.a.equal(parseResult.integralPartIsZero, integralPartIsZero);
                });

            });
        });
    });

    describe("Validating integers", function () {
        [
            ["123", {}, true, "123"],
            ["123", test_constraints["a" /* allowLeadingZeros */], true, "123"],
            ["123", test_constraints["r" /* mustNotHavePlus */], true, "123"],
            ["123", test_constraints["q" /* mustHavePlus */], false, "123"],
            [" 123 ", {}, true, "123"],
            ["   123   ", test_constraints["a" /* allowLeadingZeros */], true, "123"],
            [" 123 ", test_constraints["r" /* mustNotHavePlus */], true, "123"],
            ["   123   ", test_constraints["q" /* mustHavePlus */], false, "123"],
            ["00123", {}, false, "00123"],
            ["00123", test_constraints["a" /* allowLeadingZeros */], true, "00123"],
            ["+123", {}, true, "+123"],
            ["+123", test_constraints["r" /* mustNotHavePlus */], false, "+123"],
            ["+123", test_constraints["q" /* mustHavePlus */], true, "+123"],
            [" + 123 ", {}, true, "+123"],
            ["   +   123   ", test_constraints["r" /* mustNotHavePlus */], false, "+123"],
            ["   +   123   ", test_constraints["q" /* mustHavePlus */], true, "+123"],
            ["-123", {}, true, "-123"],
            ["-123", test_constraints["r" /* mustNotHavePlus */], true, "-123"],
            ["-123", test_constraints["q" /* mustHavePlus */], true, "-123"],
            [" - 123 ", {}, true, "-123"],
            ["   -   123   ", test_constraints["r" /* mustNotHavePlus */], true, "-123"],
            ["   -   123   ", test_constraints["q" /* mustHavePlus */], true, "-123"],
            ["+00123", {}, false, "+00123"],
            ["+00123", test_constraints["a" /* allowLeadingZeros */], true, "+00123"],
            ["+00123", test_constraints["q" /* mustHavePlus */], false, "+00123"],
            ["+00123", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["q" /* mustHavePlus */]), true, "+00123"],
            ["-00123", {}, false, "-00123"],
            ["-00123", test_constraints["a" /* allowLeadingZeros */], true, "-00123"],
            ["-00123", test_constraints["q" /* mustHavePlus */], false, "-00123"],
            ["-00123", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["q" /* mustHavePlus */]), true, "-00123"],
            ["0", {}, true, "0"],
            [" 0 ", {}, true, "0"],
            ["0", test_constraints["a" /* allowLeadingZeros */], true, "0"],
            ["0", test_constraints["r" /* mustNotHavePlus */], true, "0"],
            ["0", test_constraints["q" /* mustHavePlus */], false, "0"],
            ["+0", {}, true, "0"],
            ["   +   0   ", {}, true, "0"],
            ["+0", test_constraints["r" /* mustNotHavePlus */], false, "0"],
            ["+0", test_constraints["q" /* mustHavePlus */], true, "0"],
            ["123", test_constraints["i" /* mustHaveAtLeast3SF */], true, "123"],
            ["12300", test_constraints["i" /* mustHaveAtLeast3SF */], true, "12300"],
            ["12345", test_constraints["i" /* mustHaveAtLeast3SF */], true, "12345"],
            ["120", test_constraints["i" /* mustHaveAtLeast3SF */], true, "120"],
            ["100", test_constraints["i" /* mustHaveAtLeast3SF */], true, "100"],
            ["123", test_constraints["j" /* mustHaveAtLeast5SF */], false, "123"],
            ["12345", test_constraints["j" /* mustHaveAtLeast5SF */], true, "12345"],
            ["12", test_constraints["i" /* mustHaveAtLeast3SF */], false, "12"],
            ["012", merge(test_constraints["i" /* mustHaveAtLeast3SF */], test_constraints["a" /* allowLeadingZeros */]), false, "012"],
            ["123", test_constraints["o" /* mustHaveNoMoreThan3SF */], true, "123"],
            ["120", test_constraints["o" /* mustHaveNoMoreThan3SF */], true, "120"],
            ["100", test_constraints["o" /* mustHaveNoMoreThan3SF */], true, "100"],
            ["12345", test_constraints["p" /* mustHaveNoMoreThan6SF */], true, "12345"],
            ["1000", test_constraints["o" /* mustHaveNoMoreThan3SF */], true, "1000"],
            ["123000", test_constraints["o" /* mustHaveNoMoreThan3SF */], true, "123000"],
            ["1234", test_constraints["o" /* mustHaveNoMoreThan3SF */], false, "1234"],
            ["1234567", test_constraints["p" /* mustHaveNoMoreThan6SF */], false, "1234567"],
            ["12300", test_constraints["l" /* mustHaveExactly3SF */], true, "12300"],
            ["12000", test_constraints["l" /* mustHaveExactly3SF */], true, "12000"],
            ["10000", test_constraints["l" /* mustHaveExactly3SF */], true, "10000"],
            ["12340", test_constraints["l" /* mustHaveExactly3SF */], false, "12340"],
            ["1230", test_constraints["m" /* mustHaveExactly5SF */], false, "1230"],
            ["12300", test_constraints["m" /* mustHaveExactly5SF */], true, "12300"],
            ["12345", test_constraints["m" /* mustHaveExactly5SF */], true, "12345"],
            ["123456", test_constraints["m" /* mustHaveExactly5SF */], false, "123456"],
            ["012", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["t" /* removeLeadingZerosFromNormalizedForm */]), true, "12"],
            ["0012", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["t" /* removeLeadingZerosFromNormalizedForm */]), true, "12"],
            ["00012", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["t" /* removeLeadingZerosFromNormalizedForm */]), true, "12"],
            ["-012", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["t" /* removeLeadingZerosFromNormalizedForm */]), true, "-12"],
            ["-0012", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["t" /* removeLeadingZerosFromNormalizedForm */]), true, "-12"],
            ["-00012", merge(test_constraints["a" /* allowLeadingZeros */], test_constraints["t" /* removeLeadingZerosFromNormalizedForm */]), true, "-12"],
            ["+12", test_constraints["f" /* makeExplicit */], true, "+12"],
            ["12", test_constraints["f" /* makeExplicit */], true, "+12"],
            ["-12", test_constraints["f" /* makeExplicit */], true, "-12"],
            ["+12", test_constraints["g" /* makeImplicit */], true, "12"],
            ["12", test_constraints["g" /* makeImplicit */], true, "12"],
            ["-12", test_constraints["g" /* makeImplicit */], true, "-12"],
            ["+12", {}, true, "+12"],
            ["12", {}, true, "12"],
            ["-12", {}, true, "-12"],
            ["+", {}, false, "+"],
            ["-", {}, false, "-"],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request;
            var response;
            var integer;

            describe(`Validating "${studentsResponse}" with constraints ${constraints}`, function () {

                beforeEach(function () {
                    request = new validation["a" /* ValidationRequest */]();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "integer";
                    request.constraints = constraints;

                    var validator = new validation["b" /* Validator */]("/messages.en-gb.xml");

                    response = validator.validate(request);

                    integer = response.expression;
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    external_assert_default.a.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    external_assert_default.a.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

                it(`The expression should have the type "number".`, function () {
                    external_assert_default.a.equal(integer.type, "number");
                });

                it(`The expression should have the subtype "integer".`, function () {
                    external_assert_default.a.equal(integer.subtype, "integer");
                });

            });
        });
    });
});

/***/ })
/******/ ]);