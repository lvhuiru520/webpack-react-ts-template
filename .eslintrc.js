module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    "no-duplicate-imports": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
  },
};
