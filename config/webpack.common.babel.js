import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
	entry: {
		'app': path.resolve('./src/main.js')
	},
	resolve: {
		extensions: ['.js', '.tpl.html'],
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'babel'
			}],
			exclude: /(\.test.js$|node_modules)/
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style'
			}, {
				loader: 'css'
			}]
		}, {
			test: /\.tpl.html/,
			use: [{
				loader: 'html'
			}]
		}, {
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: 'url?limit=50000'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html',
			title: 'Angular 1.5 w/ ES6',
		}),
	],
	node: {
		global: true,
		crypto: 'empty',
		process: true,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
};

export default config;
