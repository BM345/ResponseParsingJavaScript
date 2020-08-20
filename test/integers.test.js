import assert from "assert";
import * as parsing from "../rp/parsing.js";
import * as validation from "../rp/validation.js";
import * as constraints from "../test/constraints.js";
import * as general from "../test/general.js";

var merge = general.merge;

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
                    var parser = new parsing.Parser();

                    parseResult = parser.getParseResult(studentsResponse);
                });

                it(`The parser should identify it as a number.`, function () {
                    assert.equal(parseResult.type, "number");
                });

                it(`The parser should identify it as an integer.`, function () {
                    assert.equal(parseResult.subtype, "integer");
                });

                it(`The parser should identify "${integralPart}" as the integral part.`, function () {
                    assert.equal(parseResult.integralPart, integralPart);
                });

                it(`The parser should identify "${decimalPart}" as the decimal part.`, function () {
                    assert.equal(parseResult.decimalPart, decimalPart);
                });

                it(`The parser should identify that the sign is ${sign}.`, function () {
                    assert.equal(parseResult.sign, sign);
                });

                it(`The parser should identify that the sign is ${(signIsExplicit) ? "explicit" : "implicit"}.`, function () {
                    assert.equal(parseResult.signIsExplicit, signIsExplicit);
                });

                it(`The parser should identify that it has ${nlz} leading zeros.`, function () {
                    assert.equal(parseResult.numberOfLeadingZeros, nlz);
                });

                it(`The parser should identify that it has ${ntz} trailing zeros.`, function () {
                    assert.equal(parseResult.numberOfTrailingZeros, ntz);
                });

                it(`The parser should identify that it has at least ${nsf1} significant figures.`, function () {
                    assert.equal(parseResult.minimumNumberOfSignificantFigures, nsf1);
                });

                it(`The parser should identify that it has no more than ${nsf2} significant figures.`, function () {
                    assert.equal(parseResult.maximumNumberOfSignificantFigures, nsf2);
                });

                it(`The parser should identify that it has ${ndp} decimal places.`, function () {
                    assert.equal(parseResult.numberOfDecimalPlaces, ndp);
                });

                it(`The parser should identify that it is equal to zero.`, function () {
                    assert.equal(parseResult.isZero, isZero);
                });

                it(`The parser should identify that the integral part is equal to zero.`, function () {
                    assert.equal(parseResult.integralPartIsZero, integralPartIsZero);
                });

            });
        });
    });

    describe("Validating integers", function () {
        [
            ["123", {}, true, "123"],
            ["123", constraints.allowLeadingZeros, true, "123"],
            ["123", constraints.mustNotHavePlus, true, "123"],
            ["123", constraints.mustHavePlus, false, "123"],
            [" 123 ", {}, true, "123"],
            ["   123   ", constraints.allowLeadingZeros, true, "123"],
            [" 123 ", constraints.mustNotHavePlus, true, "123"],
            ["   123   ", constraints.mustHavePlus, false, "123"],
            ["00123", {}, false, "00123"],
            ["00123", constraints.allowLeadingZeros, true, "00123"],
            ["+123", {}, true, "+123"],
            ["+123", constraints.mustNotHavePlus, false, "+123"],
            ["+123", constraints.mustHavePlus, true, "+123"],
            [" + 123 ", {}, true, "+123"],
            ["   +   123   ", constraints.mustNotHavePlus, false, "+123"],
            ["   +   123   ", constraints.mustHavePlus, true, "+123"],
            ["-123", {}, true, "-123"],
            ["-123", constraints.mustNotHavePlus, true, "-123"],
            ["-123", constraints.mustHavePlus, true, "-123"],
            [" - 123 ", {}, true, "-123"],
            ["   -   123   ", constraints.mustNotHavePlus, true, "-123"],
            ["   -   123   ", constraints.mustHavePlus, true, "-123"],
            ["+00123", {}, false, "+00123"],
            ["+00123", constraints.allowLeadingZeros, true, "+00123"],
            ["+00123", constraints.mustHavePlus, false, "+00123"],
            ["+00123", merge(constraints.allowLeadingZeros, constraints.mustHavePlus), true, "+00123"],
            ["-00123", {}, false, "-00123"],
            ["-00123", constraints.allowLeadingZeros, true, "-00123"],
            ["-00123", constraints.mustHavePlus, false, "-00123"],
            ["-00123", merge(constraints.allowLeadingZeros, constraints.mustHavePlus), true, "-00123"],
            ["0", {}, true, "0"],
            [" 0 ", {}, true, "0"],
            ["0", constraints.allowLeadingZeros, true, "0"],
            ["0", constraints.mustNotHavePlus, true, "0"],
            ["0", constraints.mustHavePlus, false, "0"],
            ["+0", {}, true, "0"],
            ["   +   0   ", {}, true, "0"],
            ["+0", constraints.mustNotHavePlus, false, "0"],
            ["+0", constraints.mustHavePlus, true, "0"],
            ["123", constraints.mustHaveAtLeast3SF, true, "123"],
            ["12300", constraints.mustHaveAtLeast3SF, true, "12300"],
            ["12345", constraints.mustHaveAtLeast3SF, true, "12345"],
            ["120", constraints.mustHaveAtLeast3SF, true, "120"],
            ["100", constraints.mustHaveAtLeast3SF, true, "100"],
            ["123", constraints.mustHaveAtLeast5SF, false, "123"],
            ["12345", constraints.mustHaveAtLeast5SF, true, "12345"],
            ["12", constraints.mustHaveAtLeast3SF, false, "12"],
            ["012", merge(constraints.mustHaveAtLeast3SF, constraints.allowLeadingZeros), false, "012"],
            ["123", constraints.mustHaveNoMoreThan3SF, true, "123"],
            ["120", constraints.mustHaveNoMoreThan3SF, true, "120"],
            ["100", constraints.mustHaveNoMoreThan3SF, true, "100"],
            ["12345", constraints.mustHaveNoMoreThan6SF, true, "12345"],
            ["1000", constraints.mustHaveNoMoreThan3SF, true, "1000"],
            ["123000", constraints.mustHaveNoMoreThan3SF, true, "123000"],
            ["1234", constraints.mustHaveNoMoreThan3SF, false, "1234"],
            ["1234567", constraints.mustHaveNoMoreThan6SF, false, "1234567"],
            ["12300", constraints.mustHaveExactly3SF, true, "12300"],
            ["12000", constraints.mustHaveExactly3SF, true, "12000"],
            ["10000", constraints.mustHaveExactly3SF, true, "10000"],
            ["12340", constraints.mustHaveExactly3SF, false, "12340"],
            ["1230", constraints.mustHaveExactly5SF, false, "1230"],
            ["12300", constraints.mustHaveExactly5SF, true, "12300"],
            ["12345", constraints.mustHaveExactly5SF, true, "12345"],
            ["123456", constraints.mustHaveExactly5SF, false, "123456"],
            ["012", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["0012", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["00012", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["-012", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "-12"],
            ["-0012", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "-12"],
            ["-00012", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "-12"],
            ["+12", constraints.makeExplicit, true, "+12"],
            ["12", constraints.makeExplicit, true, "+12"],
            ["-12", constraints.makeExplicit, true, "-12"],
            ["+12", constraints.makeImplicit, true, "12"],
            ["12", constraints.makeImplicit, true, "12"],
            ["-12", constraints.makeImplicit, true, "-12"],
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

            describe(`Validating "${studentsResponse}" with constraints ${JSON.stringify(constraints)}`, function () {

                beforeEach(function () {
                    request = new validation.ValidationRequest();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "integer";
                    request.constraints = constraints;

                    var validator = new validation.Validator("messages.en-gb.xml");

                    response = validator.validate(request);

                    integer = response.expression;
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    assert.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

                it(`The expression should have the type "number".`, function () {
                    assert.equal(integer.type, "number");
                });

                it(`The expression should have the subtype "integer".`, function () {
                    assert.equal(integer.subtype, "integer");
                });

            });
        });
    });
});