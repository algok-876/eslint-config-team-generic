module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks.js',
  ].map(require.resolve),
  rules: {}
};
