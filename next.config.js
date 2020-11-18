const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
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

module.exports = withPlugins([
	[withBundleAnalyzer({})],
	withImages,
	webpackBundle
]);
