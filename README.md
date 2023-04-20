# @btrl/stylelint-config

Synaptrix coding standards for all things style-related, specifically SCSS with vue3.

[![npm](https://img.shields.io/npm/v/@btrl/stylelint-config)](https://npm.im/@btrl/stylelint-config)

## Installation

```sh
# Install the config as a dev dependency.
npm install --save-dev @btrl/stylelint-config
```

### Peer dependencies

You need to additionally install [Stylelint](https://www.npmjs.com/package/stylelint) into your project.

```sh
# Install manually
npm install --save-dev stylelint
```

## Usage

Create a `.stylelintrc.cjs` file with the following contents:

```js
module.exports = {
  extends: '@btrl/stylelint-config',
}
```

## Extended configs

We've adopted the following list of shared configs that remain actively maintained by the broader developer community.

- [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) - The recommended shareable Vue config for Stylelint.
- [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss) - The recommended shareable SCSS config for stylelint.
- [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order) - A stylelint order config inspired by [stylelint-order](https://github.com/hudochenkov/stylelint-order).