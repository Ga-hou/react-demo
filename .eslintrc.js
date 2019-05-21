module.exports = {
  "extends": "react-app",
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "flowtype",
    "import",
    "jsx-a11y",
    "react-hooks"
  ],
  "rules": {
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
