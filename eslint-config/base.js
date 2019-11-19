module.exports = {
	rules: {
		"indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
				VariableDeclarator: 1
			}
		],
		"quotes": [
			"error",
			"single"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"semi": [
			"error",
			"always"
		],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true
			}
		],
		"space-before-blocks": [
			"error",
			"always"
		],
		"brace-style": [
			"error",
			"1tbs"
		],
		"no-console": [
			"error",
			{
				allow: ["warn", "error", "info"]
			}
		],
		"space-infix-ops": [
			"error",
			{
				int32Hint: false
			}
		],
		"key-spacing": [
			2
		],
		"eol-last": [
			"error",
			"always"
		],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 0
			}
		],
		"one-var": [
			"error",
			{
				const: "never",
				let: "never"
			}
		],
		"no-var": "error",
		"prefer-const": ["error", {
			"destructuring": "all",
			"ignoreReadBeforeAssign": true
		}],
		"no-multi-assign": "error",
		"no-new-object": "error",
		"object-shorthand": ["error", "always", { "avoidQuotes": true }],
		"quote-props": ["error", "as-needed"],
		"no-prototype-builtins": "error",
		"no-array-constructor": "error",
		"prefer-arrow-callback": "error",
		"arrow-spacing": "error",
		"arrow-parens": ["error", "as-needed"],
		"vue/max-attributes-per-line": ["error", {
			"singleline": 3,
			"multiline": {
				"max": 1,
				"allowFirstLine": false
			}
		}],
		"vue/html-indent": ["error", "tab", {}],
		"vue/component-name-in-template-casing": ["error", "kebab-case"]
	},
	globals: {
		ga: true,
	},
	env: {
		es6: true,
		browser: true,
		jest: true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2018,
	},
	parser: "babel-eslint",
	settings: {
		react: {
			pragma: "React",
			version: "detect"
		}
	},
	plugins: [
		"vue",
	],
	extends: [
		"eslint:recommended",
	]
};
