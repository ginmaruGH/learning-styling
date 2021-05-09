# 作成に関するメモ

## Chap.1 HTML

[Nu Html Checker](https://validator.w3.org/nu/)

[pug](https://pugjs.org/api/getting-started.html)



## Plugins

`yarn add --dev <plugin-name>`

clean-webpack-plugin

- HTML/CSS
  - css-loader
  - mini-css-extract-plugin
  - html-webpack-plugin
  - cssnano
  - html-loader
- pug
  - pug-html-loader
  - pug-loader
- Sass
  - sass-loader
  - sass
    - <https://webpack.js.org/loaders/sass-loader/#implementation>
    - node-sass-glob-importer
    - <https://qiita.com/uki213/items/9b2a919fd92149a5f9bd>
    - <https://www.npmjs.com/package/node-sass-glob-importer>
  - PostCSS
    - postcss
    - postcss-loader
    - postcss.config.js
    - autoprefixer
    - postcss-sorting
- Babel
  - babel-loader
  - @babel/core
  - @babel/preset-env
  - .babelrc
  - .browserslistrc<https://qiita.com/takeshisakuma/items/0bc1c39ee976bd1f52d7>
- TypeScript
  - typescript
  - ts-loader
  - tsconfig.json
- Images
  - copy-webpack-plugin
  - imagemin-webpack-plugin
  - imagemin-pngquant
  - imagemin-mozjpeg
  - imagemin-gifsicle
  - imagemin-svgo
- Prettier
  - prettier
  - <https://qiita.com/takeshisakuma/items/bbb2cd2f1c65de70e363>
- Lint
  - eslint
  - eslint-loader
  - .eslintrc.json
  - <https://eslint.org/docs/rules/>
- Prettier/Eslint
  - eslint-plugin-prettier
  - eslint-config-prettier
- Stylelint
  - stylelint
  - stylelint-webpack-plugin
  - stylelint-scss
  - <https://qiita.com/takeshisakuma/items/a7a3b8cc0ce05422f686>
- Prettier/Stylelint
  - stylelint-prettier
  - stylelint-config-prettier
- git commit/Lint
  - lint-staged
  - husky

```shell
//lint
npx eslint src/index.ts

//lint+自動修正
npx eslint src/index.ts --fix

//複数ファイルをlint+自動修正
npx eslint src/**/*.ts --fix
```

## 再設定


