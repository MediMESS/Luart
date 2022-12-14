module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:jsdoc/recommended",
    "prettier",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": "warn",
    "react/display-name": "off",
    "no-var": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any" : "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-description-complete-sentence": "warn",
    "jsdoc/require-description": "warn",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        "require-jsdoc": [
          "error",
          {
            require: {
              FunctionDeclaration: true,
              MethodDefinition: false,
              ClassDeclaration: false,
              ArrowFunctionExpression: false,
              FunctionExpression: false,
            },
          },
        ],
      },
    ],

    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
