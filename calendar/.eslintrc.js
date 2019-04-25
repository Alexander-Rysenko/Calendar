module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['airbnb'],
  rules: {
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
