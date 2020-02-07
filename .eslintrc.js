module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'@vue/typescript',
	],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      "legacyDecorators": true
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-tabs": 0,
    "indent": ["error", "tab"],
    "no-console": 0,
  }
}
