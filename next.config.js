const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withImages = {
	images: {
		domains: ['drisdell.com', 'secure.gravatar.com']
	}
};
const webpackBundle = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-tag/loader' }]
		});
		return config;
	},
	webpack(config, _options) {
		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});
		return config;
	},
	webpackDevMiddleware: config => {
		return config;
	}
};

const nextConfig = {
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: 'static',
			reportFilename: '../bundles/server.html'
		},
		browser: {
			analyzerMode: 'static',
			reportFilename: '../bundles/client.html'
		}
	}
};

module.exports = withPlugins([
	[
		withBundleAnalyzer({
			enabled: process.env.ANALYZE === 'true'
		})
	],
	nextConfig,
	withImages,
	webpackBundle
]);
