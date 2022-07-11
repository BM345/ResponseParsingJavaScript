
import * as nodes from "./nodes.js";

export const HYPHEN = "-";
export const EN_DASH = "–";
export const EM_DASH = "—";
export const TRUE_MINUS_SIGN = "−";
export const TRUE_APOSTROPHE = "’";

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

        this.normaliseWhiteSpaceInText = true;
        this.removeApostrophesFromText = true;
        this.removeHyphensFromText = true;
        this.removeFullStopsFromText = true;
        this.removeCommasFromText = true;
        this.normaliseCase = "lower";
        this.removeAccentsFromText = true;
    }
}

export function cut(text, startIndex, length = 1) {
    return text.substr(startIndex, length);
}

export function isOneOf(character, characters) {
    return characters.indexOf(character) >= 0;
}

export class Parser {
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

        var node = new nodes.RPWhiteSpaceNode();

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

        var node = new nodes.RPTextNode();

        node.start = start;
        node.end = end;
        node._text = t;

        node.value = t;

        if (this.settings.normaliseWhiteSpaceInText) {
            // In order to allow text made up of many words, this parseText function will also take in white space 
            // (rather than leaving it up to the dedicated white space function).
            // If normaliseWhiteSpaceInText is set to true, any white space that is longer than a single space will be compressed into a single space.
            node.value = node.value.replaceAll(/\s+/g, " ");
            node.value = node.value.trim()
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
            var node = new nodes.RPNumberNode();

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
