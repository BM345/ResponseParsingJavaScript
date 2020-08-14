
import * as nodes from "./nodes.js";


export class Marker {
    constructor() {
        this.position = 0;
    }

    copy() {
        var marker = new Marker();

        marker.position = this.position;

        return marker;
    }
}

export class ParserSettings {
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

export class Parser {
    constructor() {
        this.settings = new ParserSettings();
    }

    getParseResult(inputText) {
        var marker = new Marker();

        this.parseWhiteSpace(inputText, marker);

        var number = this.parseNumber(inputText, marker);

        this.parseWhiteSpace(inputText, marker);

        if (number != null && marker.position == inputText.length) {
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

        var node = new nodes.RPWhiteSpaceNode();

        node.start = start;
        node.end = end;
        node._text = t;

        node.value = " ";

        node._latex = t;
        node._asciiMath = t;

        return node;
    }

    makeIntoCurrencyValue(node) {
        var cvn = nodes.RPCurrencyValueNode.fromNumberNode(node);

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
                var node = new nodes.RPNumberNode();

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
}