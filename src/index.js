'use strict'

module.exports = {
  extends: [

    // Standard rules for SCSS
    'stylelint-config-recommended-scss',

    // Standard rules for SCSS with Vue3
    'stylelint-config-recommended-vue/scss',

    // Order styles in a consistent way.
    'stylelint-config-clean-order',

  ],
  rules: {

    // Custom regex of BEM selector class pattern.
    'selector-class-pattern': [
      '^[a-zA-Z0-9]+((_|-)([a-zA-Z0-9]+))*$',
      {
        message: 'Selector should start in CapitalCase or camelCase and optionally followed by either kebab-lowercase with hyphens or snake_lowercase with underscores (e.g. BlockName-element-name_modifier-name)',
      },
    ],

    // Custom regex for id patterns.
    'selector-id-pattern': [
      '^(([a-z][a-z0-9]*(-[a-z0-9]+)*)|([A-Z][a-z0-9]*)+)$',
      {
        message: 'Expected id selector to be kebab-case or TitleCase',
      },
    ],

    // Allow at most one per selector using #id.
    'selector-max-id': 1,

    // Allow only lowercase for keywords values.
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: [/ease(?:[A-Z][a-z]+){2,}/],
        message: 'Expected keyword to be lowercase',
      },
    ],

    // Require quotes around every font family name.
    'font-family-name-quotes': ['always-unless-keyword', {
      message: 'Expected quotes around font family name',
    }],

    // Indentation of 2 spaces.
    'indentation': 2,

    // Require semi-colons at the end of each declaration.
    'declaration-block-trailing-semicolon': 'always',

    // No 0 before the decimal point.
    'number-leading-zero': 'never',

    /* 对于空行的处理 */

    // 第一条属性声明前不允许有空行
    'declaration-empty-line-before': [
      'always',
      { ignore: ['after-declaration', 'after-comment', 'first-nested'] },
    ],

    // 每个样式规则前后都有空行，除了第一条规则与规则前有注释
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],

    // 在结尾 "}" 之前不允许有空行
    'block-closing-brace-empty-line-before': ['never'],

    // "@" 语句之前都有空行，但是忽略 "@" 语句在代码块中间与同个非代码块 "@" 语句之间的空行这两种情况
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['inside-block', 'blockless-after-same-name-blockless'] },
    ],

    // 不允许超过一行的空行
    'max-empty-lines': 1,

    // 文件末尾需要有一个空行
    'no-missing-end-of-source-newline': true,

    /* 对空格的处理 */

    // "{" 前必须有空格
    'block-opening-brace-space-before': 'always',
    // 注释 "/*" 后和 "*/" 前必须有空格
    'comment-whitespace-inside': 'always',
    // 属性名 ":" 后必须有空格
    'declaration-colon-space-after': 'always',
    // 属性名 ":" 前不能有空格
    'declaration-colon-space-before': 'never',
    // 声明属性末尾 ";" 前不能有空格
    'declaration-block-semicolon-space-before': 'never',
    // 属性值中的 "," 后必须有空格
    'function-comma-space-after': 'always',
    // 选择器例如 ">、+、~" 前后必须要有空格
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    // 分隔多个选择器之间的 "," 后必须有空格
    'selector-list-comma-space-after': 'always',
    // 分隔多个选择器之间的 "," 前不能有空格
    'selector-list-comma-space-before': 'never',
    // 子代选择器之间没有额外空格
    'selector-descendant-combinator-no-non-space': true,
    // 多个属性值之间的 "," 后必须有空格
    'value-list-comma-space-after': 'always',
    // 多个属性值之间的 "," 前不能有空格
    'value-list-comma-space-before': 'never',
    // 媒体查询中设置断点宽度里的 ":" 后必须有空格
    'media-feature-colon-space-after': 'always',
    // 媒体查询中设置断点宽度里的 ":" 前不能有空格
    'media-feature-colon-space-before': 'never',
    // 每行句末不允许有多余空格
    'no-eol-whitespace': true,
  },
  customSyntax: 'postcss-html',
  overrides: [
    {
      files: ['**/*.{scss,css,sass}'],
      customSyntax: 'postcss-scss',
    },
  ],
}
