module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:security/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['prettier', 'security'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {
    jest: true
  }
}
