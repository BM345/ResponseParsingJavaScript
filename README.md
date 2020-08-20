# Response Parsing (JavaScript)

A JavaScript port of [Response Parsing (Python)](https://github.com/BM345/ResponseParsingPython) for use with SCORM files.

This port of the code maintains parity with the Python version - i.e., features in v1.4 of the Python version also exist in v1.4 of the JavaScript version.

## Build Process

Run

```bash
npm run-script build
```

This will build the validation code, as well as all of the unit tests, and output them to the relevant folders.

The production output of the build process can be found in `distribution`. `rp.js` is the unminified version and `rp.min.js` is the minified version.

## Unit Tests

The unit tests use Mocha. They are run in the browser.

Run

```bash
cd test-output
python start_app.py
```

Then go to localhost:8080/index.html to run the tests and see the output.

## How to use the code on live sites / in SCORM files

Include the following tag in the `<head>` of the HTML page.

```html
<script type="text/javascript" src="rp.js"></script>
```

Then use

```js
var request = new rp.ValidationRequest();

request.studentsResponse = "123";
request.expectedResponseType = "integer";
request.constraints = {};

var validator = new rp.Validator("messages.en-gb.xml");

var response = validator.validate(request);
```

to validate student answers.

The request and response objects work the same way as in Response Parsing (Python). To receive messages in a different language, pass a different file name through to the validator when creating it.