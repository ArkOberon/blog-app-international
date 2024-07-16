import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: false } } } },
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    } 
  },
  {
    extends: "plugin:react/jsx-runtime"
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];