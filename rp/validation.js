

export class ValueError extends Error {
    constructor(...params) {
        super(...params);
    }
}


export class ValidationRequest {
    constructor() {
        this.studentsResponse = "";
        this.expectedResponseType = "";
        this.constraints = {};
        this.localisationSettings = {};
    }
}


export class ValidationResponse {
    constructor() {
        this.isAccepted = true;
        this.messageText = "";
        this.request = null;
        this.normalisedStudentsResponse = "";
        this.expression = null;
    }
}


export class Validator {
    constructor(messagesFile = "../rp/messages.en-gb.xml") {
        this.parser = new parsing.Parser();
        this.messages = new messages.Messages(messagesFile);

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

            if (!parsing.isOneOf(c, this.integerAllowedCharacters)) {
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

            if (!parsing.isOneOf(c, this.nonNegativeIntegerAllowedCharacters)) {
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

            if (!parsing.isOneOf(c, this.decimalAllowedCharacters)) {
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

            if (!parsing.isOneOf(c, this.decimalAllowedCharacters)) {
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
                return;
            }
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
                return;
            }
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