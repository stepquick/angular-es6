import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const METADATA = {
    title: 'Angular 1.5 w/ ES6',
    baseUrl: '/',
};

const config = {
    metadata: METADATA,
    entry: {
        'app': './src/main.js'
    },
    resolve: {
        extensions: ['', '.js', '.tpl.html']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /(\.test.js$|node_modules)/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.tpl.html/,
            loader: 'html'
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url?limit=50000'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};

export default config;
