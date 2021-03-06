module.exports = {
  root: true,
  extends: require.resolve('@js-toolkit/configs/eslint/common'),
  rules: {
    'no-empty-function': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
