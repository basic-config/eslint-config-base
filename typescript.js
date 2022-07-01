module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 官方推荐配置插件 plugin:@typescript-eslint/recommended
  extends: ['./basic', 'plugin:@typescript-eslint/recommended'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
  },
};