module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'prettier/@typescript-eslint',
    'prettier',
    'airbnb/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-plusplus": "off",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "no-class-assign": "off",
    "no-shadow": "off",
    "max-len": [
      "error",
      300
    ],
    "no-restricted-globals": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "no-func-assign": "off",
    "consistent-return": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "camelcase": "off",
    "import/no-unresolved": "off",
    "no-use-before-define": "off",
    "indent": [
      "error",
      2
    ],
    "eqeqeq": "off",
    'import/extensions': 'off',
    'no-return-await': 'off',
    'no-useless-constructor': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off'
  },
};
