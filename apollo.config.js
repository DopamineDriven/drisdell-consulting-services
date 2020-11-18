module.exports = {
	client: {
		service: {
			name: 'drisdell-consulting',
			key: process.env.APOLLO_KEY,
			url: process.env.WORDPRESS_API_URL,
			skipSSLValidation: true,
			includes: [
				'./**/*.ts',
				'./**/*.tsx',
				'./**/*.js',
				'./lib/graphql/**/*.ts',
				'./lib/apollo.ts',
				'./pages/**/*.tsx'
			]
		}
	}
};
