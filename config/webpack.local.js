const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(
	require('./webpack.base.js'),
	{
		mode: 'development',
		devtool: 'inline-source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
		]
	}
);
