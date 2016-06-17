import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const config = {
    resolve: {
        extensions: ['', '.js', '.tpl.html']
    },
    entry: ['./src/main.js'],
    output: {
        path: './dist',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map',
    },
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/},
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.tpl.html/, loader: 'html'},
        {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'}
      ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    ],
    node: {
      global: 'window',
      progress: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
};

export default config;
