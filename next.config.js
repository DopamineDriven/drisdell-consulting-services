const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: !!process.env.ANALYZE
});
const withImages = {
	images: {
		domains: [
			'd2f904nk7e5fig.cloudfront.net',
			'drisdell-headless.com',
			'drisdell.com',
			'secure.gravatar.com'
		]
	}
};
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});
const webpackBundle = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});
		const isServer = typeof window === 'undefined';
		if (isServer) {
			config.resolve.alias['@'] = path.resolve('./');
		}

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
			},
			{
				source: '/about/:slug*',
				destination: '/about-us/:slug*',
				permanent: true
			},
			{
				source: '/consultant/:slug*',
				destination: '/consultants/:slug*',
				permanent: true
			}
		];
	}
};

module.exports = withPlugins([
	[
		withBundleAnalyzer({
			enabled: process.env.ANALYZE === true
		}),
		withMDX({
			pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
		})
	],
	webpackBundle,
	withImages,
	redirects
]);
