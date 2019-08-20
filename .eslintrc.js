module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    firebase: 'readonly',
    location: 'writable',
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'prefer-destructuring': 0,
<<<<<<< HEAD
<<<<<<< HEAD
    'import/extensions': "0",
=======
    'import/extensions': "off",
>>>>>>> 32b2557d72c9e55b5a43ef0659bc0f6eee1b18be
=======
    'import/extensions': "0",
>>>>>>> 8d3b6dfe1bc6735d4e21af12a4f168e40dfb06d0
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
