import path 'path'
import webpack 'webpack'
import webpackMerge 'webpack-merge'
import common './webpack.common.babel'

import CleanWebpackPlugin 'clean-webpack-plugin'

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
