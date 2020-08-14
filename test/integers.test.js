import assert from "assert";
import * as parsing from "../rp/parsing.js";
import * as validation from "../rp/validation.js";

var parser = new parsing.Parser();

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

            describe(`Parsing "${studentsResponse}"`, function () {

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
});