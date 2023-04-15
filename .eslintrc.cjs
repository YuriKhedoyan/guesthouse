module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: ["eslint:recommended", "plugin:react/recommended"],
 overrides: [],
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 plugins: ["react"],
 rules: {
  indent: ["error", 2],
  "react/react-in-jsx-scope": "off",
  "linebreak-style": ["error", "windows"],
  quotes: ["error", "double"],
  semi: ["error", "always"],
 },
};
