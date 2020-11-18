module.exports = {
	roots: ['<rootDir>'],
	moduleNameMapper: {
		'^@components(.*)$': '<rootDir>/components$1',
		'^@dao(.*)$': '<rootDir>/dao$1',
		'^@lib(.*)$': '<rootDir>/lib$1',
		'^@pages(.*)$': '<rootDir>/pages$1',
		'^@styles(.*)$': '<rootDir>/styles$1',
		'^@_types(.*)$': '<rootDir>/types$1'
	},
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest',
		'\\.graphql$': [
			'graphql-let/jestTransformer',
			{ subsequentTransformer: 'babel-jest' }
		]
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': 'identity-obj-proxy'
	}
};
