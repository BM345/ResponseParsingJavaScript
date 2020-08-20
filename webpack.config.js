let path = require("path");
let glob = require("glob");

let entry = {
    "rp": "./rp/validation.js"
}

let outputFolder = "distribution";

if (process.env.TESTBUILD) {
    entry = glob.sync(__dirname + "/test/*.test.js");
    outputFolder = "test-output";
}

module.exports = {
    entry: entry,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, outputFolder),
    },
    optimization: {
        minimize: false,
    },
    target: "web"
}