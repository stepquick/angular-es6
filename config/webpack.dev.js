const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = webpackMerge(common, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    plugins: [
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
