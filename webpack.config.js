var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    entry: {
        main: './src/main.js',
        vendor: ['angular', 'angular-ui-bootstrap']
    },
    output: {
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/ },
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.tpl.html/, loader: 'html' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
          { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
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
