module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "import/no-undefined": "off",
    "prettier/prettier": "error",
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
  },
  parser: "babel-eslint",
};
