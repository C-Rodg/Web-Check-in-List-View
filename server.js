var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	publicPath : config.output.publicPath,
	hot : false,
	inline: false,
	historyApiFallback : true,
	quiet : false,
	noInfo : false
}).listen(3000, 'localhost', function(err) {
	if (err) {
		console.log(err);
	}
	console.log("Now listening at localhost:3000");
});