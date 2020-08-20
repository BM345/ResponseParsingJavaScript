let path = require("path");
let glob = require("glob");

let entry = glob.sync(__dirname + "/test/*.test.js");
let outputFolder = "test-output";

module.exports = {
    entry: entry,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, outputFolder),
    },
    optimization: {
        minimize: false,
    },
    target: "web",
    mode: "production",
}