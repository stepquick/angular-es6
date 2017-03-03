const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(common, {
    output: {
        path: path.resolve('./dist'),
        publicPath: '/angular-es6/',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
});