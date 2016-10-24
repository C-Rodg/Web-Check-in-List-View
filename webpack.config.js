var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		path.join(__dirname, 'src/index.js')
	],
	output : {
		path : path.join(__dirname, '/dist/'),
		filename : '[name].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.tp1.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV' : JSON.stringify('development')
		})
	],
	module : {
		loaders: [
		{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel'
		},
		{
			test: /\.json?$/,
			loader: 'json'
		},	
		{
			test: /\.scss$/,
			loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
		},
        { 
        	test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, 
        	loader: 'url?limit=10000&mimetype=application/font-woff' 
        },
        { 
        	test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, 
        	loader: 'file' 
        }]
	}
};