module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['#', './src/']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
