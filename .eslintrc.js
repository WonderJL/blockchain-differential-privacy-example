module.exports = {
  parserOptions: {
    'parser': 'babel-eslint',
  },
  extends: [
    'plugin:lodash/recommended',
    'standard',
  ],
  plugins: [
    'lodash',
  ],
  // Custom rules
  rules: {
    // Always add comma dangle for multi line
    'comma-dangle': ['error', 'always-multiline'],
    // Prefer to use const if never reassigned. If any variables in destructuring should be const. See https://eslint.org/docs/rules/prefer-const
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false,
    }],
    // don't allow var, use let and const instead
    'no-var': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'lodash/prefer-lodash-method': [2, { 'ignoreMethods': ['find'] } ],
  },
}
