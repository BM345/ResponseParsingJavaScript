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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

var XMLHttpRequest = __webpack_require__(8).XMLHttpRequest;

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
            return "";
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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(14);
__webpack_require__(15);
module.exports = __webpack_require__(16);


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */

var Url = __webpack_require__(9);
var spawn = __webpack_require__(10).spawn;
var fs = __webpack_require__(11);

exports.XMLHttpRequest = function() {
  "use strict";

  /**
   * Private variables
   */
  var self = this;
  var http = __webpack_require__(12);
  var https = __webpack_require__(13);

  // Holds http.js objects
  var request;
  var response;

  // Request settings
  var settings = {};

  // Disable header blacklist.
  // Not part of XHR specs.
  var disableHeaderCheck = false;

  // Set some default headers
  var defaultHeaders = {
    "User-Agent": "node-XMLHttpRequest",
    "Accept": "*/*",
  };

  var headers = {};
  var headersCase = {};

  // These headers are not user setable.
  // The following are allowed but banned in the spec:
  // * user-agent
  var forbiddenRequestHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "content-transfer-encoding",
    "cookie",
    "cookie2",
    "date",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via"
  ];

  // These request methods are not allowed
  var forbiddenRequestMethods = [
    "TRACE",
    "TRACK",
    "CONNECT"
  ];

  // Send flag
  var sendFlag = false;
  // Error flag, used when errors occur or abort is called
  var errorFlag = false;

  // Event listeners
  var listeners = {};

  /**
   * Constants
   */

  this.UNSENT = 0;
  this.OPENED = 1;
  this.HEADERS_RECEIVED = 2;
  this.LOADING = 3;
  this.DONE = 4;

  /**
   * Public vars
   */

  // Current state
  this.readyState = this.UNSENT;

  // default ready state change handler in case one is not set or is set late
  this.onreadystatechange = null;

  // Result & response
  this.responseText = "";
  this.responseXML = "";
  this.status = null;
  this.statusText = null;
  
  // Whether cross-site Access-Control requests should be made using
  // credentials such as cookies or authorization headers
  this.withCredentials = false;

  /**
   * Private methods
   */

  /**
   * Check if the specified header is allowed.
   *
   * @param string header Header to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpHeader = function(header) {
    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
  };

  /**
   * Check if the specified method is allowed.
   *
   * @param string method Request method to validate
   * @return boolean False if not allowed, otherwise true
   */
  var isAllowedHttpMethod = function(method) {
    return (method && forbiddenRequestMethods.indexOf(method) === -1);
  };

  /**
   * Public methods
   */

  /**
   * Open the connection. Currently supports local server requests.
   *
   * @param string method Connection method (eg GET, POST)
   * @param string url URL for the connection.
   * @param boolean async Asynchronous connection. Default is true.
   * @param string user Username for basic authentication (optional)
   * @param string password Password for basic authentication (optional)
   */
  this.open = function(method, url, async, user, password) {
    this.abort();
    errorFlag = false;

    // Check for valid request method
    if (!isAllowedHttpMethod(method)) {
      throw new Error("SecurityError: Request method not allowed");
    }

    settings = {
      "method": method,
      "url": url.toString(),
      "async": (typeof async !== "boolean" ? true : async),
      "user": user || null,
      "password": password || null
    };

    setState(this.OPENED);
  };

  /**
   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
   * This does not conform to the W3C spec.
   *
   * @param boolean state Enable or disable header checking.
   */
  this.setDisableHeaderCheck = function(state) {
    disableHeaderCheck = state;
  };

  /**
   * Sets a header for the request or appends the value if one is already set.
   *
   * @param string header Header name
   * @param string value Header value
   */
  this.setRequestHeader = function(header, value) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
    }
    if (!isAllowedHttpHeader(header)) {
      console.warn("Refused to set unsafe header \"" + header + "\"");
      return;
    }
    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send flag is true");
    }
    header = headersCase[header.toLowerCase()] || header;
    headersCase[header.toLowerCase()] = header;
    headers[header] = headers[header] ? headers[header] + ', ' + value : value;
  };

  /**
   * Gets a header from the server response.
   *
   * @param string header Name of header to get.
   * @return string Text of the header or null if it doesn't exist.
   */
  this.getResponseHeader = function(header) {
    if (typeof header === "string"
      && this.readyState > this.OPENED
      && response
      && response.headers
      && response.headers[header.toLowerCase()]
      && !errorFlag
    ) {
      return response.headers[header.toLowerCase()];
    }

    return null;
  };

  /**
   * Gets all the response headers.
   *
   * @return string A string with all response headers separated by CR+LF
   */
  this.getAllResponseHeaders = function() {
    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
      return "";
    }
    var result = "";

    for (var i in response.headers) {
      // Cookie headers are excluded
      if (i !== "set-cookie" && i !== "set-cookie2") {
        result += i + ": " + response.headers[i] + "\r\n";
      }
    }
    return result.substr(0, result.length - 2);
  };

  /**
   * Gets a request header
   *
   * @param string name Name of header to get
   * @return string Returns the request header or empty string if not set
   */
  this.getRequestHeader = function(name) {
    if (typeof name === "string" && headersCase[name.toLowerCase()]) {
      return headers[headersCase[name.toLowerCase()]];
    }

    return "";
  };

  /**
   * Sends the request to the server.
   *
   * @param string data Optional data to send as request body.
   */
  this.send = function(data) {
    if (this.readyState !== this.OPENED) {
      throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
    }

    if (sendFlag) {
      throw new Error("INVALID_STATE_ERR: send has already been called");
    }

    var ssl = false, local = false;
    var url = Url.parse(settings.url);
    var host;
    // Determine the server
    switch (url.protocol) {
      case "https:":
        ssl = true;
        // SSL & non-SSL both need host, no break here.
      case "http:":
        host = url.hostname;
        break;

      case "file:":
        local = true;
        break;

      case undefined:
      case null:
      case "":
        host = "localhost";
        break;

      default:
        throw new Error("Protocol not supported.");
    }

    // Load files off the local filesystem (file://)
    if (local) {
      if (settings.method !== "GET") {
        throw new Error("XMLHttpRequest: Only GET method is supported");
      }

      if (settings.async) {
        fs.readFile(url.pathname, "utf8", function(error, data) {
          if (error) {
            self.handleError(error);
          } else {
            self.status = 200;
            self.responseText = data;
            setState(self.DONE);
          }
        });
      } else {
        try {
          this.responseText = fs.readFileSync(url.pathname, "utf8");
          this.status = 200;
          setState(self.DONE);
        } catch(e) {
          this.handleError(e);
        }
      }

      return;
    }

    // Default to port 80. If accessing localhost on another port be sure
    // to use http://localhost:port/path
    var port = url.port || (ssl ? 443 : 80);
    // Add query string if one is used
    var uri = url.pathname + (url.search ? url.search : "");

    // Set the defaults if they haven't been set
    for (var name in defaultHeaders) {
      if (!headersCase[name.toLowerCase()]) {
        headers[name] = defaultHeaders[name];
      }
    }

    // Set the Host header or the server may reject the request
    headers.Host = host;
    if (!((ssl && port === 443) || port === 80)) {
      headers.Host += ":" + url.port;
    }

    // Set Basic Auth if necessary
    if (settings.user) {
      if (typeof settings.password === "undefined") {
        settings.password = "";
      }
      var authBuf = new Buffer(settings.user + ":" + settings.password);
      headers.Authorization = "Basic " + authBuf.toString("base64");
    }

    // Set content length header
    if (settings.method === "GET" || settings.method === "HEAD") {
      data = null;
    } else if (data) {
      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    } else if (settings.method === "POST") {
      // For a post with no data set Content-Length: 0.
      // This is required by buggy servers that don't meet the specs.
      headers["Content-Length"] = 0;
    }

    var options = {
      host: host,
      port: port,
      path: uri,
      method: settings.method,
      headers: headers,
      agent: false,
      withCredentials: self.withCredentials
    };

    // Reset error flag
    errorFlag = false;

    // Handle async requests
    if (settings.async) {
      // Use the proper protocol
      var doRequest = ssl ? https.request : http.request;

      // Request is being sent, set send flag
      sendFlag = true;

      // As per spec, this is called here for historical reasons.
      self.dispatchEvent("readystatechange");

      // Handler for the response
      var responseHandler = function responseHandler(resp) {
        // Set response var to the response we got back
        // This is so it remains accessable outside this scope
        response = resp;
        // Check for redirect
        // @TODO Prevent looped redirects
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
          // Change URL to the redirect location
          settings.url = response.headers.location;
          var url = Url.parse(settings.url);
          // Set host var in case it's used later
          host = url.hostname;
          // Options for the new request
          var newOptions = {
            hostname: url.hostname,
            port: url.port,
            path: url.path,
            method: response.statusCode === 303 ? "GET" : settings.method,
            headers: headers,
            withCredentials: self.withCredentials
          };

          // Issue the new request
          request = doRequest(newOptions, responseHandler).on("error", errorHandler);
          request.end();
          // @TODO Check if an XHR event needs to be fired here
          return;
        }

        response.setEncoding("utf8");

        setState(self.HEADERS_RECEIVED);
        self.status = response.statusCode;

        response.on("data", function(chunk) {
          // Make sure there's some data
          if (chunk) {
            self.responseText += chunk;
          }
          // Don't emit state changes if the connection has been aborted.
          if (sendFlag) {
            setState(self.LOADING);
          }
        });

        response.on("end", function() {
          if (sendFlag) {
            // Discard the end event if the connection has been aborted
            setState(self.DONE);
            sendFlag = false;
          }
        });

        response.on("error", function(error) {
          self.handleError(error);
        });
      };

      // Error handler for the request
      var errorHandler = function errorHandler(error) {
        self.handleError(error);
      };

      // Create the request
      request = doRequest(options, responseHandler).on("error", errorHandler);

      // Node 0.4 and later won't accept empty data. Make sure it's needed.
      if (data) {
        request.write(data);
      }

      request.end();

      self.dispatchEvent("loadstart");
    } else { // Synchronous
      // Create a temporary file for communication with the other Node process
      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
      fs.writeFileSync(syncFile, "", "utf8");
      // The async request the other Node process executes
      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
        + "var options = " + JSON.stringify(options) + ";"
        + "var responseText = '';"
        + "var req = doRequest(options, function(response) {"
        + "response.setEncoding('utf8');"
        + "response.on('data', function(chunk) {"
        + "  responseText += chunk;"
        + "});"
        + "response.on('end', function() {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "response.on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + "}).on('error', function(error) {"
        + "fs.writeFileSync('" + contentFile + "', JSON.stringify({err: error}), 'utf8');"
        + "fs.unlinkSync('" + syncFile + "');"
        + "});"
        + (data ? "req.write('" + JSON.stringify(data).slice(1,-1).replace(/'/g, "\\'") + "');":"")
        + "req.end();";
      // Start the other Node Process, executing this string
      var syncProc = spawn(process.argv[0], ["-e", execString]);
      while(fs.existsSync(syncFile)) {
        // Wait while the sync file is empty
      }
      var resp = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
      // Kill the child process once the file has data
      syncProc.stdin.end();
      // Remove the temporary file
      fs.unlinkSync(contentFile);

      if (resp.err) {
        self.handleError(resp.err);
      } else {
        response = resp.data;
        self.status = resp.data.statusCode;
        self.responseText = resp.data.text;
        setState(self.DONE);
      }
    }
  };

  /**
   * Called when an error is encountered to deal with it.
   */
  this.handleError = function(error) {
    this.status = 0;
    this.statusText = error;
    this.responseText = error.stack;
    errorFlag = true;
    setState(this.DONE);
    this.dispatchEvent('error');
  };

  /**
   * Aborts a request.
   */
  this.abort = function() {
    if (request) {
      request.abort();
      request = null;
    }

    headers = defaultHeaders;
    this.status = 0;
    this.responseText = "";
    this.responseXML = "";

    errorFlag = true;

    if (this.readyState !== this.UNSENT
        && (this.readyState !== this.OPENED || sendFlag)
        && this.readyState !== this.DONE) {
      sendFlag = false;
      setState(this.DONE);
    }
    this.readyState = this.UNSENT;
    this.dispatchEvent('abort');
  };

  /**
   * Adds an event listener. Preferred method of binding to events.
   */
  this.addEventListener = function(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = [];
    }
    // Currently allows duplicate callbacks. Should it?
    listeners[event].push(callback);
  };

  /**
   * Remove an event callback that has already been bound.
   * Only works on the matching funciton, cannot be a copy.
   */
  this.removeEventListener = function(event, callback) {
    if (event in listeners) {
      // Filter will return a new array with the callback removed
      listeners[event] = listeners[event].filter(function(ev) {
        return ev !== callback;
      });
    }
  };

  /**
   * Dispatch any events, including both "on" methods and events attached using addEventListener.
   */
  this.dispatchEvent = function(event) {
    if (typeof self["on" + event] === "function") {
      self["on" + event]();
    }
    if (event in listeners) {
      for (var i = 0, len = listeners[event].length; i < len; i++) {
        listeners[event][i].call(self);
      }
    }
  };

  /**
   * Changes readyState and calls onreadystatechange.
   *
   * @param int state New state
   */
  var setState = function(state) {
    if (state == self.LOADING || self.readyState !== state) {
      self.readyState = state;

      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
        self.dispatchEvent("readystatechange");
      }

      if (self.readyState === self.DONE && !errorFlag) {
        self.dispatchEvent("load");
        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
        self.dispatchEvent("loadend");
      }
    }
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 14 */
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
/* 15 */
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

            var parseResult;

            describe(`Parsing "${studentsResponse}"`, function () {

                beforeEach(function () {
                    var parser = new _rp_parsing_js__WEBPACK_IMPORTED_MODULE_1__[/* Parser */ "a"]();

                    parseResult = parser.getParseResult(studentsResponse);
                });

                it(`The parser should identify it as a number.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.type, "number");
                });

                it(`The parser should identify it as an integer.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.subtype, "integer");
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

                it(`The parser should identify that it is equal to zero.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.isZero, isZero);
                });

                it(`The parser should identify that the integral part is equal to zero.`, function () {
                    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(parseResult.integralPartIsZero, integralPartIsZero);
                });

            });
        });
    });

    describe("Validating integers", function () {
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
            ["-123", {}, true, "-123"],
            ["-123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "-123"],
            ["-123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "-123"],
            [" - 123 ", {}, true, "-123"],
            ["   -   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustNotHavePlus */ "r"], true, "-123"],
            ["   -   123   ", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], true, "-123"],
            ["+00123", {}, false, "+00123"],
            ["+00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "+00123"],
            ["+00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "+00123"],
            ["+00123", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"]), true, "+00123"],
            ["-00123", {}, false, "-00123"],
            ["-00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], true, "-00123"],
            ["-00123", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"], false, "-00123"],
            ["-00123", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* mustHavePlus */ "q"]), true, "-00123"],
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
            ["012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["0012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["00012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "12"],
            ["-012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "-12"],
            ["-0012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "-12"],
            ["-00012", merge(_test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* allowLeadingZeros */ "a"], _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* removeLeadingZerosFromNormalizedForm */ "t"]), true, "-12"],
            ["+12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeExplicit */ "f"], true, "+12"],
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeExplicit */ "f"], true, "+12"],
            ["-12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeExplicit */ "f"], true, "-12"],
            ["+12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeImplicit */ "g"], true, "12"],
            ["12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeImplicit */ "g"], true, "12"],
            ["-12", _test_constraints_js__WEBPACK_IMPORTED_MODULE_3__[/* makeImplicit */ "g"], true, "-12"],
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
                    request = new _rp_validation_js__WEBPACK_IMPORTED_MODULE_2__[/* ValidationRequest */ "a"]();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "integer";
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
/* 16 */
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

/***/ })
/******/ ]);