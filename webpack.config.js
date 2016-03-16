var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    entry: ['./src/main.js'],
    output: {
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
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
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new OpenBrowserWebpackPlugin({
              url: 'http://localhost:' +8080
        })
    ],
    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: 'src',
    },
    node : {
      progress: true,
      colors: true,
    }
};
