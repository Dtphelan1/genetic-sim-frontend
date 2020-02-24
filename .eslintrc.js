module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    "no-console": "off",
    "max-len": ["error", { code: 200 }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "object-curly-newline": ["error", {
        ObjectPattern: { minProperties: 5 }
    }]

  },
};
