module.exports = {
  extends: [
    './typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    // 跟着用户使用的react版本启用对应的插件版本
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
  },
};