const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: !!process.env.BUNDLE_ANALYZE
});
const withImages = {
	images: {
		domains: ['drisdell-headless.com', 'drisdell.com', 'secure.gravatar.com']
	}
};
const withMDX = require('@next/mdx');
const mdxProvider = withMDX({
	extension: /\.mdx?$/,
	pageExtensions: ['js', 'jsx', 'tsx', 'ts', 'md', 'mdx']
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
	// webpackDevMiddleware: config => {
	// 	return config;
	// }
};

module.exports = withBundleAnalyzer({
	images: {
		domains: [
			'd2f904nk7e5fig.cloudfront.net',
			'drisdell-headless.com',
			'secure.gravatar.com'
		]
	},
	// mdxProvider() {
	// 	return withMDX({
	// 		extension: /\.mdx?$/,
	// 		pageExtensions: ['js', 'jsx', 'tsx', 'ts', 'md', 'mdx']
	// 	});
	// },
	webpack(config, options) {
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
