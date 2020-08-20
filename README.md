# Response Parsing (JavaScript)

A JavaScript port of [Response Parsing (Python)](https://github.com/BM345/ResponseParsingPython) for use with SCORM files.

This port of the code maintains parity with the Python version - i.e., features in v1.4 of the Python version also exist in v1.4 of the JavaScript version.

## Build Process

Run

```bash
npm run-script build
```

This will build the validation code, as well as all of the unit tests, and output them to the relevant folders.

## Test Process

The unit tests are run using Mocha in the browser.

Run

```bash
cd test-output
python start_app.py
```

Then go to localhost:8080/index.html to run the tests and see the output.