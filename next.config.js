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
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-tag/loader' }]
		});
		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});
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
				source: '/consultant/:slug',
				destination: '/consultants/:slug',
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
