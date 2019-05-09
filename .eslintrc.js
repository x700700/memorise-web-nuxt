module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/vue'
  ],
  plugins: [
    // 'prettier'
  ],
  // add your custom rules here
  "rules": {
    "no-trailing-spaces": "off",
    "no-multiple-empty-lines": "off",
    "padded-blocks": "off",
    "import/newline-after-import": "off",
    "object-shorthand": "off",
    "new-cap": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "max-len": "off",
    "object-curly-newline": "off",
    "no-else-return": "off",
    "arrow-body-style": "off",

    "semi": "off",
    "comma-dangle": [
      0
    ],

    "vue/max-attributes-per-line": "off",
    "vue/html-indent": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-new": "off",
    "vue/html-self-closing": "off",

    /*
    "indent": [
      0,
      0,
      {
        "SwitchCase": 1
      }
    ],
    "space-before-function-paren": [
      2,
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
     */

    /*
    "no-use-before-define": [
      2,
      "nofunc"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-underscore-dangle": [
      0
    ]
     */
  }
}
