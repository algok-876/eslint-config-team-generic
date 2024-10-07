module.exports = {
  extends: [
    './rules/ts.js'
  ].map(require.resolve),
  rules: {}
};
