const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {

	return {
		entry: './src/index.tsx',
		output: {
			path: path.join(__dirname, '/dist/'),
			filename: 'js/index_bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.(tsx|ts)?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				  },
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					loader: 'file-loader',
					options: {
						outputPath: 'images',
					},
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},
		plugins: plugins(argv.mode),
	}
}

const plugins = mode => {
	// if (mode === 'development') {
		return [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		// 	new BundleAnalyzerPlugin({
		// 		analyzerMode: 'server',
		// 		generateStatsFile: true,
		// 		statsOptions: { source: false },
		// 	}),
		]
	// }

	// return;
}
