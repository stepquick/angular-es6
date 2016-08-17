import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import common from './webpack.common.babel';

import OpenBrowserWebpackPlugin from 'open-browser-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = webpackMerge(common.metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
});

const config = webpackMerge(common, {
    metadata: METADATA,
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: './dist',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    plugins: [
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080'
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});

export default config;
