module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/no-array-index-key': 'off',
		'no-console': 'warn',
		'no-irregular-whitespace': 'off',

	},
	ignorePatterns: ['vite.config.ts', 'dist'],
};
