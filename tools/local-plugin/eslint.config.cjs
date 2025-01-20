const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
  {
    files: ['**/package.json', '**/package.json', '**/generators.json'],
    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
  },
];
