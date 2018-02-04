var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "app.bundle.js"
    },
    watch: true,
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }],
        loaders: [
            {
                test: /\.html/,
                loader: "html"
            },
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