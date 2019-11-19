const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: [
		'./src/index.js',
		'./src/reset.less',
	],
	devServer: {
		port: 3000,
		hot: true,
		host: '0.0.0.0',
		overlay: true,
		disableHostCheck: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(vue|js)$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: [/node_modules/, /dist/],
				options: {
					fix: false,
					configFile: path.join(__dirname, '../eslint-config/base.js')
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						whitespace: 'condense',
					},
					transformToRequire: {
						video: 'src',
						source: 'src',
						img: 'src',
						image: 'xlink:href'
					}
				}
			},
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				options: {
					rootMode: 'upward'
				},
				exclude: file => (
					/node_modules/.test(file)
				)
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.(css|less)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.KNOWRE_STAGE === 'local',
						},
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.join(__dirname, '..', 'postcss.config.js'),
							},
						},
					},
					'less-loader',
				]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	]
};
