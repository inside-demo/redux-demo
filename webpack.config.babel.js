import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	devtool: 'cheap-module-eval-source-map',
	context: path.resolve(__dirname + '/src/'),
	entry: {
		app: './main.js'
	},
	output: {
		path: path.resolve(__dirname + '/docs/'),
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new webpack.DefinePlugin({
		  'process.env': {
		     NODE_ENV: JSON.stringify('production')
		   }
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
			return (
				module.resource &&
				/\.js$/.test(module.resource) &&
				module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
			)}
		}),
		new webpack.NoEmitOnErrorsPlugin()
	],
	resolveLoader: {
		modules: [path.resolve(__dirname, "src"), 'node_modules'],
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'env',
							{
								targets: {
									browsers: ['last 2 versions']
								}
							}
						]
					]
				}
			}
		]
	}
};
