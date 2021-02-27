const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: !!process.env.ANALYZE
});
const withImages = {
	images: {
		domains: [
			'email-smtp.us-east-1.amazonaws.com',
			'd2f904nk7e5fig.cloudfront.net',
			'drisdell-headless.com',
			'www.drisdell-headless.com',
			'drisdell.org',
			'drisdell.com',
			'secure.gravatar.com'
		]
	}
};

const withWebpackMods = {
	webpack(
		config,
		{
			isDev = process.env.NODE_ENV === 'development',
			isServer = typeof window === 'undefined'
		}
	) {
		if (isServer) {
			require('./scripts/generate-sitemap');
		}
		if (!isDev && !isServer) {
			Object.assign((config.resolve.alias['@'] = path.resolve('./')), {
				react: 'preact/compat',
				'react-dom': 'preact/compat'
			});
		}
		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});

		return config;
	}
};

const withSourceMaps = {
	productionBrowserSourceMaps: true
};

module.exports = withPlugins([
	[
		withBundleAnalyzer({
			enabled: process.env.ANALYZE === true
		})
	],
	withWebpackMods,
	withImages,
	withSourceMaps
]);

// https://nextjs.org/docs/api-reference/next.config.js/headers
