import assert from "assert";
import * as parsing from "../rp/parsing.js";
import * as validation from "../rp/validation.js";
import * as constraints from "../test/constraints.js";
import * as general from "../test/general.js";

var merge = general.merge;

var parser = new parsing.Parser();
var validator = new validation.Validator();

describe("Currency Values", function () {
      describe("Validating currency values", function () {
        [
            ["12", constraints.dollars, true, "12"],
            ["12.", constraints.dollars, true, "12"],
            ["12.", merge(constraints.dollars, constraints.dontRemoveTrailingDecimalPoint), true, "12"],
            ["12.0", constraints.dollars, false, "12"],
            ["12.00", constraints.dollars, true, "12"],
            ["12.000", constraints.dollars, false, "12"],
            ["12.000", merge(constraints.dollars, constraints.removeTrailingZerosFromNormalizedForm), false, "12"],
            ["-12", constraints.dollars, true, "-12"],
            ["-12.", constraints.dollars, true, "-12"],
            ["-12.", merge(constraints.dollars, constraints.dontRemoveTrailingDecimalPoint), true, "-12"],
            ["-12.0", constraints.dollars, false, "-12"],
            ["-12.00", constraints.dollars, true, "-12"],
            ["-12.000", constraints.dollars, false, "-12"],
            ["-12.000", merge(constraints.dollars, constraints.removeTrailingZerosFromNormalizedForm), false, "-12"],
            ["12.1", constraints.dollars, false, "12.1"],
            ["12.12", constraints.dollars, true, "12.12"],
            ["12.121", constraints.dollars, false, "12.121"],
            ["12", constraints.pounds, true, "12"],
            ["12.", constraints.pounds, true, "12"],
            ["12.", merge(constraints.pounds, constraints.dontRemoveTrailingDecimalPoint), true, "12"],
            ["12.0", constraints.pounds, false, "12"],
            ["12.00", constraints.pounds, true, "12"],
            ["12.000", constraints.pounds, false, "12"],
            ["12.000", merge(constraints.pounds, constraints.removeTrailingZerosFromNormalizedForm), false, "12"],
            ["12.1", constraints.pounds, false, "12.1"],
            ["12.12", constraints.pounds, true, "12.12"],
            ["12.121", constraints.pounds, false, "12.121"],
            ["12", constraints.egp, true, "12"],
            ["12.", constraints.egp, true, "12"],
            ["12.", merge(constraints.egp, constraints.dontRemoveTrailingDecimalPoint), true, "12"],
            ["12.0", constraints.egp, false, "12"],
            ["12.00", constraints.egp, true, "12"],
            ["12.000", constraints.egp, false, "12"],
            ["12.000", merge(constraints.egp, constraints.removeTrailingZerosFromNormalizedForm), false, "12"],
            ["12.1", constraints.egp, false, "12.1"],
            ["12.12", constraints.egp, true, "12.12"],
            ["12.121", constraints.egp, false, "12.121"],
            ["12", constraints.sar, true, "12"],
            ["12.", constraints.sar, true, "12"],
            ["12.", merge(constraints.sar, constraints.dontRemoveTrailingDecimalPoint), true, "12"],
            ["12.0", constraints.sar, false, "12"],
            ["12.00", constraints.sar, true, "12"],
            ["12.000", constraints.sar, false, "12"],
            ["12.000", merge(constraints.sar, constraints.removeTrailingZerosFromNormalizedForm), false, "12"],
            ["12.1", constraints.sar, false, "12.1"],
            ["12.12", constraints.sar, true, "12.12"],
            ["12.121", constraints.sar, false, "12.121"],
            ["012", constraints.dollars, false, "012"],
            ["012", merge(constraints.dollars, constraints.allowLeadingZeros), true, "012"],
            ["012", merge(constraints.dollars, constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["0012", merge(constraints.dollars, constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["00012", merge(constraints.dollars, constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["012.00", merge(constraints.dollars, constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["0012.00", merge(constraints.dollars, constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
            ["00012.00", merge(constraints.dollars, constraints.allowLeadingZeros, constraints.removeLeadingZerosFromNormalizedForm), true, "12"],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request = new validation.ValidationRequest();

            request.studentsResponse = studentsResponse;
            request.expectedResponseType = "currencyValue";
            request.constraints = constraints;

            var response = validator.validate(request);

            describe(`Validating "${studentsResponse}" with constraints ${constraints}`, function () {

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}". It is "${response.normalisedStudentsResponse}".`, function () {
                    assert.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

            });
        });
    });
});