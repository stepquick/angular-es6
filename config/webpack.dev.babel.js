import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import common from './webpack.common.babel';

import OpenBrowserWebpackPlugin from 'open-browser-webpack-plugin';

const config = webpackMerge(common, {
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

export default config;
