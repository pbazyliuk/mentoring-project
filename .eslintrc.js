module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-console': [1, { allow: ['info'] }],
    'no-unused-vars': [2, { args: 'none' }],
    'object-curly-spacing': [2, 'always'],
    semi: [2, 'always'],
    strict: [2, 'global'],
    quotes: [2, 'single'],
    'arrow-parens': ['warn', 'as-needed'],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['*']
      }
    ],
    'space-before-function-paren': ['error', 'always'],
    'no-tabs': 2,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'key-spacing': [
      'warn',
      {
        align: 'value'
      }
    ],
    eqeqeq: 'error',
    'eol-last': ['error', 'always'],
    'comma-style': ['error', 'last'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
  },
  extends: ['eslint:recommended', "@eleks/eleks"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    require: true,
    app: true,
    process: true,
    global: true,
    module: true,
  }
};