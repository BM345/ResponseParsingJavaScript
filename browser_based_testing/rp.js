var rp =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ValidationRequest", function() { return /* binding */ ValidationRequest; });
__webpack_require__.d(__webpack_exports__, "ValidationResponse", function() { return /* binding */ ValidationResponse; });
__webpack_require__.d(__webpack_exports__, "GERMAN_SPECIAL_LETTERS", function() { return /* binding */ GERMAN_SPECIAL_LETTERS; });
__webpack_require__.d(__webpack_exports__, "FRENCH_SPECIAL_LETTERS", function() { return /* binding */ FRENCH_SPECIAL_LETTERS; });
__webpack_require__.d(__webpack_exports__, "SPANISH_SPECIAL_LETTERS", function() { return /* binding */ SPANISH_SPECIAL_LETTERS; });
__webpack_require__.d(__webpack_exports__, "PORTUGUESE_SPECIAL_LETTERS", function() { return /* binding */ PORTUGUESE_SPECIAL_LETTERS; });
__webpack_require__.d(__webpack_exports__, "ALL_SPECIAL_LETTERS", function() { return /* binding */ ALL_SPECIAL_LETTERS; });
__webpack_require__.d(__webpack_exports__, "Validator", function() { return /* binding */ validation_Validator; });

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

class RPTextNode extends RPNode {
    constructor() {
        super("text");

        this.value = "";
        this.numberOfWords = 0;
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



const HYPHEN = "-";
const EN_DASH = "–";
const EM_DASH = "—";
const TRUE_MINUS_SIGN = "−";
const TRUE_APOSTROPHE = "’";

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

        this.normaliseWhiteSpaceInText = true;
        this.removeApostrophesFromText = true;
        this.removeHyphensFromText = true;
        this.removeFullStopsFromText = true;
        this.removeCommasFromText = true;
        this.normaliseCase = "lower";
        this.removeAccentsFromText = true;
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

        // Make a list of all the characters that are simply a standard Latin letter with an accent / diacritic. This is used for removing such accents / diacritics.
        this.accentedLetters = [
            ["ÅǺḀĂẶẮẰẲẴȂÂẬẤẦẪẨẢǍȺȦǠẠÄǞÀȀÁĀĀ̀Ã", "A"],
            ["åǻḁăặắằẳẵȃâậấầẫẩảǎⱥȧǡạäǟàȁáāā̀ã", "a"],
            ["ɃḂḄḆ", "B"],
            ["ƀḃḅḇ", "b"],
            ["ĆĈČĊḈƇȻÇ", "C"],
            ["ćĉčċḉƈȼç", "c"],
            ["ḊḌḐḒĎḎ", "D"],
            ["ḋḍḑḓďḏ", "d"],
            ["ĔḜȆÊỀẾỂỄỆẺḘĚɆĖẸËÈȄÉĒḔḖẼḚĘȨ", "E"],
            ["ĕḝȇêềếểễệẻḙěɇėẹëèȅéēḕḗẽḛęȩ", "e"],
            ["ǴǤĜǦĞĢĠḠꞠ", "G"],
            ["ǵǥĝǧğģġḡꞡ", "g"],
            ["ĤȞĦḨⱧḤḢḦḪ", "H"],
            ["ĥȟħḩⱨẖḥḣḧḫ", "h"],
            ["ỊĬÎǏƗÏḮÍÌȈĮĪỈȊĨḬ", "I"],
            ["ịĭîǐɨïḯíìȉįīỉȋĩḭ", "i"],
            ["ĴɈ", "J"],
            ["ĵǰɉ", "j"],
            ["ꝀḰǨḲĶⱩḴ", "K"],
            ["ꝁḱǩḳķⱪḵ", "k"],
            ["ĹŁĽḸĻĿḶḺḼȽⱠ", "L"],
            ["ĺłľḹļŀḷḻḽƚⱡ", "l"],
            ["ḾṀṂ", "M"],
            ["ḿṁṃᵯ", "m"],
            ["ŃÑŇǸṄṆŅṈṊꞤ", "N"],
            ["ńñňǹṅṇņṉṋꞥᵰ", "n"],
            ["ØǾÖȪÓÒÔỐỒỔỖỘǑŐŎȎȮȰỌƟƠỚỜỠỢỞỎŌṒṐÕȬṌṎǪȌǬ", "O"],
            ["øǿöȫóòôốồổỗộǒőŏȏȯȱọɵơớờỡợởỏōṓṑõȭṍṏǫȍǭ", "o"],
            ["ṔṖⱣ", "P"],
            ["ṕṗᵽ", "p"],
            ["", "Q"],
            ["q̃", "q"],
            ["ŔɌŘŖṘȐȒṚṜṞꞦ", "R"],
            ["ŕɍřŗṙȑȓṛṝṟꞧ", "r"],
            ["ŚṠṨṤṢꞨŜṦŠŞȘⱾ", "S"],
            ["śṡṩṥṣs̩ꞩŝṧšşșȿᵴ", "s"],
            ["ŤṪŢṬȚṰṮŦȾ", "T"],
            ["ťṫẗţṭțƫṱṯŧⱦ", "t"],
            ["ŬɄỤÜǛǗǙǕṲÚÙÛṶǓȖŰŬƯỨỪỬỰỮỦŪṺŨṸṴŲȔŮ", "U"],
            ["ŭʉụüǜǘǚǖṳúùûṷǔȗűŭưứừửựủūṻũṹṵųȕů", "u"],
            ["ṽṿ", "V"],
            ["ṼṾ", "v"],
            ["ẂẀŴẄẆẈ", "W"],
            ["ẃẁŵẅẇẉẘ", "w"],
            ["ẌẊ", "X"],
            ["ẍẋ", "x"],
            ["ÝỲŶŸỸẎỴỶȲɎƳ", "Y"],
            ["ýỳŷÿỹẏỵẙỷȳɏƴ", "y"],
            ["ŹẐŽŻẒẔƵ", "Z"],
            ["źẑžżẓẕƶᵶ", "z"]
        ]

        // Make a dictionary of the above list - makes it easier to find and replace accented letters.
        this.accentedLettersDictionary = {}

        this.accentedLetters.forEach(ls => {
            ls[0].split("").forEach(l => {
                this.accentedLettersDictionary[l] = ls[1];
            });
        });

        // All of the accented letters as a single string.
        this.allAccentedLetters = this.accentedLetters.map(ls => ls[0]).join("");
    }

    getParseResult(inputText) {
        var marker = new Marker();

        this.parseWhiteSpace(inputText, marker);

        var number = this.parseNumber(inputText, marker);

        this.parseWhiteSpace(inputText, marker);

        if (number !== null && marker.position == inputText.length) {
            return number;
        }

        var text = this.parseText(inputText, marker)

        this.parseWhiteSpace(inputText, marker)

        if (text !== null && marker.position == inputText.length) {
            return text;
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

    removeAccentsFromText(text) {
        var t = "";

        text.split("").forEach(c => {
            if (c in this.accentedLettersDictionary) {
                t += this.accentedLettersDictionary[c];
            }
            else {
                t += c;
            }
        });

        return t;
    }


    parseText(inputText, marker, includeWhiteSpace = true) {
        var t = "";
        var start = marker.position;

        var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.'" + TRUE_APOSTROPHE + HYPHEN + TRUE_MINUS_SIGN + this.allAccentedLetters;
        var n = 0;

        while (marker.position < inputText.length) {
            var c = cut(inputText, marker.position);

            if ((n >= 0 && isOneOf(c, characters)) || (n > 0 && isOneOf(c, " \t\n") && includeWhiteSpace)) {
                t += c;
                n += 1;
                marker.position += 1;
            }
            else {
                break;
            }
        }

        if (t.length === 0) {
            return null;
        }

        var end = marker.position;

        var node = new RPTextNode();

        node.start = start;
        node.end = end;
        node._text = t;

        node.value = t;

        if (this.settings.normaliseWhiteSpaceInText) {
            // In order to allow text made up of many words, this parseText function will also take in white space 
            // (rather than leaving it up to the dedicated white space function).
            // If normaliseWhiteSpaceInText is set to true, any white space that is longer than a single space will be compressed into a single space.
            node.value = node.value.replaceAll(/\s+/g, " ");
            node.value = node.value.trim();
        }

        // Always change true apostrophes into the vertical ones.
        node.value = node.value.replaceAll(TRUE_APOSTROPHE, "'");

        if (this.settings.removeApostrophesFromText) {
            node.value = node.value.replaceAll("'", "");
        }

        if (this.settings.removeHyphensFromText) {
            // Remove both the hyphen and the en dash, as en dashes are sometimes used instead of hyphens.
            // Ignore the true minus sign, as it's unlikely here.
            node.value = node.value.replaceAll(HYPHEN, ""); // Hyphen
            node.value = node.value.replaceAll(EN_DASH, ""); // En dash
        }

        if (this.settings.removeFullStopsFromText) {
            node.value = node.value.replaceAll(".", "");
        }

        if (this.settings.removeCommasFromText) {
            node.value = node.value.replaceAll(",", "");
        }

        if (this.settings.normaliseCase == "lower") {
            node.value = node.value.toLowerCase();
        }

        if (this.settings.normaliseCase == "upper") {
            node.value = node.value.toUpperCase();
        }

        if (this.settings.removeAccentsFromText) {
            // Remove any accents on the letters. This means that if the answer is 'cafe', and the student types 'café', they can still get the answer right.
            node.value = this.removeAccentsFromText(node.value);
        }

        node.value = node.value.trim();
        node.numberOfWords = node.value.split(" ").map(w => w.trim()).filter(w => w != "").length;

        node._latex = t;
        node._asciiMath = node.value;

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
            var node = new RPNumberNode();

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


const GERMAN_SPECIAL_LETTERS = "ÄäÖöÜüẞß";
const FRENCH_SPECIAL_LETTERS = "ÉéÀàÈèÙùÂâÊêÎîÔôÛûËëÏïÜüŸÿÇçŒœÆæ";
const SPANISH_SPECIAL_LETTERS = "ÁáÉéÍíÓóÚúÜüÑñ";
const PORTUGUESE_SPECIAL_LETTERS = "ÁáÂâÃãÀàÇçÉéÊêÍíÓóÔôÕõÚú";
const ALL_SPECIAL_LETTERS = GERMAN_SPECIAL_LETTERS + FRENCH_SPECIAL_LETTERS + SPANISH_SPECIAL_LETTERS + PORTUGUESE_SPECIAL_LETTERS;


class validation_Validator {
    constructor(messagesFile = "") {
        this.parser = new parsing_Parser();
        this.messages = new Messages(messagesFile);

        this.integerAllowedCharacters = "0123456789+- ";
        this.nonNegativeIntegerAllowedCharacters = "0123456789+ ";
        this.decimalAllowedCharacters = "0123456789.+- ";
        this.textAllowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.'- " + ALL_SPECIAL_LETTERS;
    }

    setParserSettings(request) {
        if (request.constraints === null || request.constraints === undefined) {
            request.constraints = {};
        }

        // Numeric Parser Settings

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

        // Text Parser Settings

        if (request.constraints["normalizeWhiteSpaceInText"] === false) {
            this.parser.settings.normaliseWhiteSpaceInText = false;
        }

        if (request.constraints["removeApostrophesFromText"] === false) {
            this.parser.settings.removeApostrophesFromText = false;
        }

        if (request.constraints["removeHyphensFromText"] === false) {
            this.parser.settings.removeHyphensFromText = false;
        }

        if (request.constraints["removeFullStopsFromText"] === false) {
            this.parser.settings.removeFullStopsFromText = false;
        }

        if (request.constraints["removeCommasFromText"] === false) {
            this.parser.settings.removeCommasFromText = false;
        }

        if (request.constraints["normalizeCase"] === "lower") {
            this.parser.settings.normaliseCase = "lower";
        }

        if (request.constraints["normalizeCase"] === "upper") {
            this.parser.settings.normaliseCase = "upper";
        }

        if (request.constraints["normalizeCase"] === "none") {
            this.parser.settings.normaliseCase = "none";
        }

        if (request.constraints["removeAccentsFromText"] === false) {
            this.parser.settings.removeAccentsFromText = false;
        }
    }

    validate(request) {
        if (request.constraints === null || request.constraints === undefined) {
            request.constraints = {};
        }

        // First, set the settings for the parser. There are certain things that are easier to do when the parser first takes in the text, rather than later on (such as normalising numbers and text).
        // The parser settings determine how these things are done.

        this.setParserSettings(request);

        // Now parse the student's answer.

        var result = this.parser.getParseResult(request.studentsResponse);

        // Make the validation response object.

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
        else if (request.expectedResponseType === "text") {
            this.validateText(request, result, response);
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

    validateText(request, result, response) {
        response.isAccepted = true;

        for (var i = 0; i < request.studentsResponse.length; i++) {
            var c = request.studentsResponse[i];

            if (!isOneOf(c, this.textAllowedCharacters)) {
                response.isAccepted = false;
                response.messageText = this.messages.getMessageById("onlyUseTextCharacters");
                return;
            }
        }

        if (result === null) {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeText");
            return;
        }

        if (result.type !== "text") {
            response.isAccepted = false;
            response.messageText = this.messages.getMessageById("mustBeText");
            return;
        }

        if (request.constraints["mustHaveExactlyNWords"] !== undefined && request.constraints["mustHaveExactlyNWords"] > 0 && result.numberOfWords !== request.constraints["mustHaveExactlyNWords"]) {
            response.isAccepted = false;
            var n = request.constraints["mustHaveExactlyNWords"];

            if (n == 1) {
                response.messageText = this.messages.getMessageById("mustHaveExactly1Word");
            }
            else {
                response.messageText = this.messages.getMessageById("mustHaveExactlyNWords", [n]);
            }

            return;
        }
    }

    validateInteger(request, result, response) {
        response.isAccepted = true;

        for (var i = 0; i < request.studentsResponse.length; i++) {
            var c = request.studentsResponse[i];

            if (!isOneOf(c, this.integerAllowedCharacters)) {
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

            if (!isOneOf(c, this.nonNegativeIntegerAllowedCharacters)) {
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

            if (!isOneOf(c, this.decimalAllowedCharacters)) {
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

            if (!isOneOf(c, this.decimalAllowedCharacters)) {
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

/***/ })
/******/ ]);