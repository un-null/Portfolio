module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["unused-imports"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "unused-imports/no-unused-imports": "error",
  },
};
