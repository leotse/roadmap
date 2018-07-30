import webpack from 'webpack';

export default function (config, env, helpers) {

	// disable code-splitting
	config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
		maxChunks: 1
	}));

	// assets env path
	env.ASSETS = './assets/';

	// setup prod public path
	if (env.production) {
		config.output.publicPath = '/roadmap';
	}

	// disable js sourcemaps
	let { plugin } = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0];
	plugin.options.sourceMap = false;
}