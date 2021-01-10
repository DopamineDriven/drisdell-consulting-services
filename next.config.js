const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: !!process.env.ANALYZE
});
const withImages = {
	images: {
		domains: ['drisdell-headless.com', 'secure.gravatar.com']
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

const redirects = {
	async redirects() {
		return [
			{
				source: '/drisdell-consulting-services',
				destination: '/',
				permanent: true
			}
		];
	}
};

module.exports = withPlugins([
	[
		withBundleAnalyzer({
			enabled: process.env.ANALYZE === true
		})
	],
	webpackBundle,
	withImages,
	redirects
]);
