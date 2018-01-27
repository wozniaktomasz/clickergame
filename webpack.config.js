var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html/, loader: "html" },
            {
             test: /\.js$/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015']
             }
            }
        ]
    },
    devtool: 'source-map'
};