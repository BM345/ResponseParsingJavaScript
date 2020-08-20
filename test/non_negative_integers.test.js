import assert from "assert";
import * as parsing from "../rp/parsing.js";
import * as validation from "../rp/validation.js";
import * as constraints from "../test/constraints.js";
import * as general from "../test/general.js";

var merge = general.merge;

describe("Non-negative Integers", function () {
    describe("Validating non-negative integers", function () {
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
            ["-123", {}, false, "-123"],
            ["-123", constraints.mustNotHavePlus, false, "-123"],
            ["-123", constraints.mustHavePlus, false, "-123"],
            [" - 123 ", {}, false, "-123"],
            ["   -   123   ", constraints.mustNotHavePlus, false, "-123"],
            ["   -   123   ", constraints.mustHavePlus, false, "-123"],
            ["+00123", {}, false, "+00123"],
            ["+00123", constraints.allowLeadingZeros, true, "+00123"],
            ["+00123", constraints.mustHavePlus, false, "+00123"],
            ["+00123", merge(constraints.allowLeadingZeros, constraints.mustHavePlus), true, "+00123"],
            ["-00123", {}, false, "-00123"],
            ["-00123", constraints.allowLeadingZeros, false, "-00123"],
            ["-00123", constraints.mustHavePlus, false, "-00123"],
            ["-00123", merge(constraints.allowLeadingZeros, constraints.mustHavePlus), false, "-00123"],
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
                    request = new validation.ValidationRequest();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "nonNegativeInteger";
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