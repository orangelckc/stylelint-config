# @btrl/stylelint-config

Coding standards for all things style-related, specifically CSS & SCSS with vue3.

[![npm](https://img.shields.io/npm/v/@btrl/stylelint-config)](https://npm.im/@btrl/stylelint-config)

## Installation

```bash
# Install the config as a dev dependency.
pnpm add -D @btrl/stylelint-config
```

### Peer dependencies

You need to additionally install [stylelint](https://www.npmjs.com/package/stylelint) into your project.

```bash
# Install manually
pnpm add -D stylelint
```

## Usage

Depends on your [default module system configuration](https://nodejs.org/api/packages.html#determining-module-system) for Node.js, create a `stylelint.config.cjs` file using `CommonJS` OR create a `stylelint.config.mjs` file using `ES module` with the following contents:

```js
// stylelint.config.cjs
module.exports = {
  extends: '@btrl/stylelint-config',
}
```

```js
// stylelint.config.mjs
export default {
  extends: '@btrl/stylelint-config',
}
```

## Config VS Code lint & auto fix

- Install the [VS Code Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension.
- Add the following to your workspace settings in `.vscode/settings.json`:

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": [
    "css",
    "scss",
    "vue"
  ]
}
```

## Script for linting style in package.json

For example:

```json
{
  "scripts": {
    "lint:style": "stylelint src/**/*.{vue,css,scss} --fix"
  }
}
```

## Extended configs

We've adopted the following list of shared configs that remain actively maintained by the broader developer community.

- [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) - The recommended shareable Vue config for Stylelint.
- [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss) - The recommended shareable SCSS config for stylelint.
- [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order) - A stylelint order config inspired by [stylelint-order](https://github.com/hudochenkov/stylelint-order).

## Recommended ESLint configuration

This project is heavily inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config), which is an excellent project for eslint. The main goal of this project is to enhance the linting experience while developing `Vue` projects.

## License

[MIT](./LICENSE) License &copy; 2023