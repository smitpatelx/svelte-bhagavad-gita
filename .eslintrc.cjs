module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{
    files: ['*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.'
      },
      alias: {
        map: [
          ['$components/*', './src/components/*'],
          ['$styles/*', './src/styles/*'],
          ['$interfaces/*', './src/interfaces/*'],
        ]
      }
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};