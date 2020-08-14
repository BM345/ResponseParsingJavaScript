let path = require("path");
let glob = require("glob");

let entry = {
    "rp": "./rp/validation.js"
}

let outputFolder = "distribution";

module.exports = {
    entry: entry,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, outputFolder),
    },
    optimization: {
        minimize: false,
    }
}