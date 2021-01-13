const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: !!process.env.ANALYZE
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

module.exports = withBundleAnalyzer({
	webpackBundle,
	withMDX: {
		pageExtension: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
	},
	images: {
		domains: [
			'd2f904nk7e5fig.cloudfront.net',
			'drisdell-headless.com',
			'secure.gravatar.com'
		]
	},
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
});
