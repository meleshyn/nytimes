module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
  },
};
