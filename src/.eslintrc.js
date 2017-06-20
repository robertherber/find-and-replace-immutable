module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  plugins: ['jsx-a11y', 'import', 'flowtype', 'lodash-fp', 'jest', 'json', 'prettier'],
  env: {
    'jest/globals': true,
  },
};
