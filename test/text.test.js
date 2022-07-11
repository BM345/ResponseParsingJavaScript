import assert from "assert";
import * as parsing from "../rp/parsing.js";
import * as validation from "../rp/validation.js";
import * as constraints from "../test/constraints.js";
import * as general from "../test/general.js";

var merge = general.merge;

describe("Text", function () {
    describe("Parsing text", function () {
        [
            ["apple", {}, "apple", 1],
            [" apple", {}, "apple", 1],
            ["   apple", {}, "apple", 1],
            ["apple ", {}, "apple", 1],
            ["apple   ", {}, "apple", 1],
            [" apple ", {}, "apple", 1],
            ["   apple   ", {}, "apple", 1],
            ["apple juice", {}, "apple juice", 2],
            ["apple   juice", {}, "apple juice", 2],
            [" apple juice ", {}, "apple juice", 2],
            ["   apple   juice   ", {}, "apple juice", 2],
            ["Apple juice", {}, "apple juice", 2],
            ["Apple Juice", {}, "apple juice", 2],
            ["APPLE JUICE", {}, "apple juice", 2],
            ["apple juice.", {}, "apple juice", 2],
            ["Apple juice.", {}, "apple juice", 2],
            ["apples, bananas, pears", {}, "apples bananas pears", 3],
            ["John's apple.", {}, "johns apple", 2],
            ["co-ordinates", {}, "coordinates", 1],
            ["café", {}, "cafe", 1],
            ["apple", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            [" apple", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            ["   apple", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            ["apple ", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            ["apple   ", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            [" apple ", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            ["   apple   ", constraints.dontNormaliseWhiteSpaceInText, "apple", 1],
            ["apple juice", constraints.dontNormaliseWhiteSpaceInText, "apple juice", 2],
            ["apple   juice", constraints.dontNormaliseWhiteSpaceInText, "apple   juice", 2],
            [" apple juice ", constraints.dontNormaliseWhiteSpaceInText, "apple juice", 2],
            ["   apple   juice   ", constraints.dontNormaliseWhiteSpaceInText, "apple   juice", 2],
            ["John's apple.", constraints.dontRemoveApostrophesFromText, "john's apple", 2],
            ["John’s apple.", constraints.dontRemoveApostrophesFromText, "john's apple", 2],
            ["co-ordinates", constraints.dontRemoveHyphensFromText, "co-ordinates", 1],
            ["apple juice.", constraints.dontRemoveFullStopsFromText, "apple juice.", 2],
            ["Apple juice.", constraints.dontRemoveFullStopsFromText, "apple juice.", 2],
            ["John's apple.", constraints.dontRemoveFullStopsFromText, "johns apple.", 2],
            ["apples, bananas, pears", constraints.dontRemoveCommasFromText, "apples, bananas, pears", 3],
            ["apple", constraints.makeUpperCase, "APPLE", 1],
            ["Apple", constraints.makeUpperCase, "APPLE", 1],
            ["APPle", constraints.makeUpperCase, "APPLE", 1],
            ["applE", constraints.makeUpperCase, "APPLE", 1],
            ["ApPlE", constraints.makeUpperCase, "APPLE", 1],
            ["Apple Juice", constraints.makeUpperCase, "APPLE JUICE", 2],
            ["café", constraints.dontRemoveAccents, "café", 1],
            ["   This text has lots of things in it that would be removed. It's got hyphenated words like electron-volt,         extra         space, commas, âccéntéd letters, and WeIrD capitalisation   .         ", {}, "this text has lots of things in it that would be removed its got hyphenated words like electronvolt extra space commas accented letters and weird capitalisation", 26],
            ["The co-ordinates of John's café are   two, three.", {}, "the coordinates of johns cafe are two three", 8],
            ["The co-ordinates of John's café are   two, three.", constraints.dontNormaliseWhiteSpaceInText, "the coordinates of johns cafe are   two three", 8],
            ["The co-ordinates of John's café are   two, three.", merge( constraints.dontNormaliseWhiteSpaceInText,  constraints.dontRemoveApostrophesFromText), "the coordinates of john's cafe are   two three", 8],
            ["The co-ordinates of John's café are   two, three.", merge( constraints.dontNormaliseWhiteSpaceInText,  constraints.dontRemoveApostrophesFromText,  constraints.dontRemoveHyphensFromText), "the co-ordinates of john's cafe are   two three", 8],
            ["The co-ordinates of John's café are   two, three.",  merge( constraints.dontNormaliseWhiteSpaceInText,  constraints.dontRemoveApostrophesFromText,  constraints.dontRemoveHyphensFromText,  constraints.dontRemoveFullStopsFromText), "the co-ordinates of john's cafe are   two three.", 8],
            ["The co-ordinates of John's café are   two, three.",  merge( constraints.dontNormaliseWhiteSpaceInText,  constraints.dontRemoveApostrophesFromText,  constraints.dontRemoveHyphensFromText,  constraints.dontRemoveFullStopsFromText,  constraints.dontRemoveCommasFromText), "the co-ordinates of john's cafe are   two, three.", 8],
            ["The co-ordinates of John's café are   two, three.", merge( constraints.dontNormaliseWhiteSpaceInText,  constraints.dontRemoveApostrophesFromText,  constraints.dontRemoveHyphensFromText,  constraints.dontRemoveFullStopsFromText,  constraints.dontRemoveCommasFromText,  constraints.dontRemoveAccents), "the co-ordinates of john's café are   two, three.", 8],
            ["The co-ordinates of John's café are   two, three.", merge( constraints.dontNormaliseWhiteSpaceInText,  constraints.dontRemoveApostrophesFromText,  constraints.dontRemoveHyphensFromText,  constraints.dontRemoveFullStopsFromText,  constraints.dontRemoveCommasFromText,  constraints.dontRemoveAccents, constraints.allowAnyCase), "The co-ordinates of John's café are   two, three.", 8],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var normalisedStudentsResponse = a[2];
            var numberOfWords = a[3];

            var request;
            var node;

            describe(`Parsing "${studentsResponse}"`, function () {

                beforeEach(function () {
                    request = new validation.ValidationRequest();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "text";
                    request.constraints = constraints;

                    var validator = new validation.Validator("messages.en-gb.xml");

                    validator.setParserSettings(request);

                     node = validator.parser.getParseResult(studentsResponse);
                });

                it(`The parser should identify it as text.`, function () {
                    assert.equal(node.type, "text");
                });

                it(`The parser should correctly normalise the text to '${normalisedStudentsResponse}'.`, function () {
                    assert.equal(node.value, normalisedStudentsResponse);
                });

                it(`The parser should correctly count the number of words as ${numberOfWords}.`, function () {
                    assert.equal(node.numberOfWords, numberOfWords);
                });
            });
        });
    });

    describe("Validating text", function () {
        [
            ["apple", {}, true, "apple"],
        ["apple", {"mustHaveExactlyNWords": 0}, true, "apple"],
        ["apple", {"mustHaveExactlyNWords": 1}, true, "apple"],
        ["apple", {"mustHaveExactlyNWords": 2}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 3}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 4}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 5}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 6}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 7}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 8}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 9}, false, "apple"],
        ["apple", {"mustHaveExactlyNWords": 10}, false, "apple"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 0}, true, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 1}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 2}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 3}, true, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 4}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 5}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 6}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 7}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 8}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 9}, false, "apples bananas pears"],
        ["apples, bananas, pears", {"mustHaveExactlyNWords": 10}, false, "apples bananas pears"],
        ].forEach(a => {
            var studentsResponse = a[0];
            var constraints = a[1];
            var isAccepted = a[2];
            var normalisedStudentsResponse = a[3];

            var request;
            var response;
            var text;

            describe(`Validating "${studentsResponse}" with constraints ${JSON.stringify(constraints)}`, function () {

                beforeEach(function () {
                    request = new validation.ValidationRequest();

                    request.studentsResponse = studentsResponse;
                    request.expectedResponseType = "text";
                    request.constraints = constraints;

                    var validator = new validation.Validator("messages.en-gb.xml");

                    response = validator.validate(request);

                    text = response.expression;
                });

                it(`The validator should${isAccepted ? "" : " not"} accept it.`, function () {
                    assert.equal(response.isAccepted, isAccepted);
                });

                it(`The normalised response should be "${normalisedStudentsResponse}".`, function () {
                    assert.equal(response.normalisedStudentsResponse, normalisedStudentsResponse);
                });

                it(`The expression should have the type "text".`, function () {
                    assert.equal(text.type, "text");
                });

            });
        });
    });
});