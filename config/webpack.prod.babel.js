import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import common from './webpack.common.babel';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const METADATA = webpackMerge(common.metadata, {
  baseUrl: '/angular-es6/',
});

const config = webpackMerge(common, {
  metadata: METADATA,
	output: {
		path: './dist',
		publicPath: '/angular-es6/',
		filename: '[name].[hash].js',
		sourceMapFilename: '[name].[hash].map',
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
	]
});

export default config;
