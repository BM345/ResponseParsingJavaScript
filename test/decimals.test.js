import assert from "assert";
import * as parsing from "../rp/parsing.js";
import * as validation from "../rp/validation.js";
import * as constraints from "../test/constraints.js";
import * as general from "../test/general.js";

var merge = general.merge;

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
                    var parser = new parsing.Parser();

                    parseResult = parser.getParseResult(studentsResponse);
                });

                it(`The parser should identify it as a number.`, function () {
                    assert.equal(parseResult.type, "number");
                });

                it(`The parser should identify it as a decimal number.`, function () {
                    assert.equal(parseResult.subtype, "decimalNumber");
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

                it(`The parser should identify that it is${isZero ? "" : " not"} equal to zero.`, function () {
                    assert.equal(parseResult.isZero, isZero);
                });

                it(`The parser should identify that the integral part is${integralPartIsZero ? "" : " not"} equal to zero.`, function () {
                    assert.equal(parseResult.integralPartIsZero, integralPartIsZero);
                });

            });
        });
    });

    describe("Validating decimals", function () {
        [
            ["123", {}, true, "123"],
            ["1.23", {}, true, "1.23"],
            ["1.23", constraints.allowLeadingZeros, true, "1.23"],
            ["1.23", constraints.mustNotHavePlus, true, "1.23"],
            ["1.23", constraints.mustHavePlus, false, "1.23"],
            ["+1.23", constraints.mustNotHavePlus, false, "+1.23"],
            ["+1.23", constraints.mustHavePlus, true, "+1.23"],
            ["-1.23", constraints.mustNotHavePlus, true, "-1.23"],
            ["-1.23", constraints.mustHavePlus, true, "-1.23"],
            [" 1.23 ", {}, true, "1.23"],
            ["   1.23   ", constraints.allowLeadingZeros, true, "1.23"],
            [" 1.23 ", constraints.mustNotHavePlus, true, "1.23"],
            ["   1.23   ", constraints.mustHavePlus, false, "1.23"],
            ["001.23", {}, false, "001.23"],
            ["001.23", constraints.allowLeadingZeros, true, "001.23"],
            ["+001.23", {}, false, "+001.23"],
            ["+001.23", constraints.allowLeadingZeros, true, "+001.23"],
            ["+001.23", merge(constraints.allowLeadingZeros, constraints.mustHavePlus), true, "+001.23"],
            ["-001.23", constraints.allowLeadingZeros, true, "-001.23"],
            ["-001.23", merge(constraints.allowLeadingZeros, constraints.mustHavePlus), true, "-001.23"],
            ["0.12", {}, true, "0.12"],
            ["0.12", constraints.allowLeadingZeros, true, "0.12"],
            [".12", {}, true, "0.12"],
            [".12", constraints.allowLeadingZeros, true, "0.12"],
            ["00.12", {}, false, "00.12"],
            ["00.12", constraints.allowLeadingZeros, true, "00.12"],
            ["0", {}, true, "0"],
            ["0.", {}, true, "0"],
            [".0", {}, true, "0.0"],
            ["0.0", {}, true, "0.0"],
            ["000.0", {}, false, "000.0"],
            ["0.000", {}, true, "0.000"],
            ["000.000", {}, false, "000.000"],
            ["0", constraints.allowLeadingZeros, true, "0"],
            ["0.", constraints.allowLeadingZeros, true, "0"],
            [".0", constraints.allowLeadingZeros, true, "0.0"],
            ["0.0", constraints.allowLeadingZeros, true, "0.0"],
            ["000.0", constraints.allowLeadingZeros, true, "000.0"],
            ["0.000", constraints.allowLeadingZeros, true, "0.000"],
            ["000.000", constraints.allowLeadingZeros, true, "000.000"],
            ["0", constraints.mustHavePlus, false, "0"],
            ["0.", constraints.mustHavePlus, false, "0"],
            [".0", constraints.mustHavePlus, false, "0.0"],
            ["0.0", constraints.mustHavePlus, false, "0.0"],
            ["000.0", constraints.mustHavePlus, false, "000.0"],
            ["0.000", constraints.mustHavePlus, false, "0.000"],
            ["000.000", constraints.mustHavePlus, false, "000.000"],
            ["+0", {}, true, "0"],
            ["+0.", {}, true, "0"],
            ["+.0", {}, true, "0.0"],
            ["+0.0", {}, true, "0.0"],
            ["+000.0", {}, false, "000.0"],
            ["+0.000", {}, true, "0.000"],
            ["+000.000", {}, false, "000.000"],
            ["+0", constraints.mustHavePlus, true, "0"],
            ["+0.", constraints.mustHavePlus, true, "0"],
            ["+.0", constraints.mustHavePlus, true, "0.0"],
            ["+0.0", constraints.mustHavePlus, true, "0.0"],
            ["+000.0", constraints.mustHavePlus, false, "000.0"],
            ["+0.000", constraints.mustHavePlus, true, "0.000"],
            ["+000.000", constraints.mustHavePlus, false, "000.000"],
            ["0.0012", constraints.mustHaveAtLeast3SF, false, "0.0012"],
            ["0.00123", constraints.mustHaveAtLeast3SF, true, "0.00123"],
            ["0.001234", constraints.mustHaveAtLeast3SF, true, "0.001234"],
            ["0.00123", constraints.mustHaveAtLeast5SF, false, "0.00123"],
            ["0.001234", constraints.mustHaveAtLeast5SF, false, "0.001234"],
            ["0.0012345", constraints.mustHaveAtLeast5SF, true, "0.0012345"],
            ["0.0012", constraints.mustHaveNoMoreThan3SF, true, "0.0012"],
            ["0.00123", constraints.mustHaveNoMoreThan3SF, true, "0.00123"],
            ["0.001234", constraints.mustHaveNoMoreThan3SF, false, "0.001234"],
            ["0.0012345", constraints.mustHaveNoMoreThan6SF, true, "0.0012345"],
            ["0.00123456", constraints.mustHaveNoMoreThan6SF, true, "0.00123456"],
            ["0.001234567", constraints.mustHaveNoMoreThan6SF, false, "0.001234567"],
            ["0.0012", constraints.mustHaveExactly3SF, false, "0.0012"],
            ["0.00123", constraints.mustHaveExactly3SF, true, "0.00123"],
            ["0.001234", constraints.mustHaveExactly3SF, false, "0.001234"],
            ["0.12", constraints.mustHaveAtLeast3DP, false, "0.12"],
            ["0.123", constraints.mustHaveAtLeast3DP, true, "0.123"],
            ["0.1234", constraints.mustHaveAtLeast3DP, true, "0.1234"],
            ["0.12", constraints.mustHaveNoMoreThan3DP, true, "0.12"],
            ["0.123", constraints.mustHaveNoMoreThan3DP, true, "0.123"],
            ["0.1234", constraints.mustHaveNoMoreThan3DP, false, "0.1234"],
            ["0.12", constraints.mustHaveExactly3DP, false, "0.12"],
            ["0.123", constraints.mustHaveExactly3DP, true, "0.123"],
            ["0.1234", constraints.mustHaveExactly3DP, false, "0.1234"],
            ["01.23", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "1.23"],
            ["001.23", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "1.23"],
            ["0001.23", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "1.23"],
            ["0.12", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "0.12"],
            ["00.12", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "0.12"],
            ["000.12", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "0.12"],
            [".12", {}, true, "0.12"],
            ["+1.23", {}, true, "+1.23"],
            ["1.23", {}, true, "1.23"],
            ["-1.23", {}, true, "-1.23"],
            ["+1.23", constraints.makeExplicit, true, "+1.23"],
            ["1.23", constraints.makeExplicit, true, "+1.23"],
            ["-1.23", constraints.makeExplicit, true, "-1.23"],
            ["+1.23", constraints.makeImplicit, true, "1.23"],
            ["1.23", constraints.makeImplicit, true, "1.23"],
            ["-1.23", constraints.makeImplicit, true, "-1.23"],
            ["+", {}, false, "+"],
            ["-", {}, false, "-"],
            ["00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12.000"],
            ["00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm, constraints.dontAllowTrailingZeros), false, "12.000"],
            ["00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm, constraints.removeTrailingZerosFromNormalizedForm), true, "12"],
            ["00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm, constraints.removeTrailingZerosFromNormalizedForm, constraints.dontRemoveTrailingDecimalPoint), true, "12."],
            ["+00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "+12.000"],
            ["+00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm, constraints.removeTrailingZerosFromNormalizedForm), true, "+12"],
            ["+00012.000", merge(constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm, constraints.removeTrailingZerosFromNormalizedForm, constraints.dontRemoveTrailingDecimalPoint), true, "+12."],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request;
            var response;

            describe(`Validating "${studentsResponse}" with constraints ${JSON.stringify(constraints)}`, function () {

                beforeEach(function () {
                    request = new validation.ValidationRequest();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "decimal";
                    request.constraints = constraints;

                    var validator = new validation.Validator();

                    response = validator.validate(request);
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    assert.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

            });
        });
    });
});