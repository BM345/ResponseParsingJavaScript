let path = require("path");

let entry = {
    "rp": "./rp/validation.js"
}
let outputFolder = "browser_based_testing";

module.exports = {
    entry: entry,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, outputFolder),
        library: "rp"
    },
    optimization: {
        minimize: false,
    },
    target: "web",
    mode: "production",
}