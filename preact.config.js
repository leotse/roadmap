import webpack from 'webpack';

export default function (config, env, helpers) {

	// assets env path
	env.ASSETS = './assets/';

	if (env.production) {

		// app is under /roadmap in prod
		config.output.publicPath = '/roadmap';

		// disable service worker
		let { index } = helpers.getPluginsByName(config, 'SWPrecacheWebpackPlugin')[0];
		config.plugins.splice(index);

		// disable js sourcemaps
		let { plugin } = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0];
		plugin.options.sourceMap = false;
	}

	// disable code-splitting
	config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
		maxChunks: 1
	}));
}
