import path from 'path'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import common from './webpack.common.babel'

import CleanWebpackPlugin from 'clean-webpack-plugin'

export default webpackMerge(common, {
    output: {
        path: path.resolve('./dist'),
        publicPath: '/angularjs-es6/',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
})
