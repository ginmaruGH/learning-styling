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

- `yarn init -y`
- `yarn add --dev webpack webpack-cli`
- PostCSS<https://qiita.com/morishitter/items/4a04eb144abf49f41d7d>
  - stylelint<https://github.com/stylelint/stylelint>
  - Autoprefixer<https://github.com/postcss/autoprefixer>
  - cssnano<https://github.com/ben-eb/cssnano>
  - postcss-sorting<https://github.com/hudochenkov/postcss-sorting>
  - stylelint-scss<https://github.com/kristerkari/stylelint-scss>
  - stylefmt<https://github.com/morishitter/stylefmt>

webpack(2)
webpack ( 本体 )
webpack-cli ( webpackコマンドラインツール )

Babel(3)
@babel/core ( Babel本体 )
@babel/preset-env ( 指定したブラウザ環境で動作するように変換するプラグイン )
babel-loader ( webpackでBabelを使えるようにする )
@babel/plugin-transform-runtime
@babel/runtime-corejs3(product)
(core-js@3(product))

HTML/pug(3)
html-loader
html-webpack-plugin ( HTMLファイルを出力する )
pug-html-loader ( webpackでpugを使えるようにする )

CSS(3)
mini-css-extract-plugin ( CSSをJSにバンドルせず、別ファイルにする )
css-loader ( cssを読み込む )
style-loader ( スタイルを`<style>`要素としてページに反映させる )

SASS(2)
sass ( SASS本体 )
sass-loader ( webpackでSASSを読み込めるようにする )

PostCSS(5)
postcss ( PostCSS本体 )
postcss-loader ( webpackでPostCSSを使えるようにする )

ベンダープレフィックス（拡張機能であることを明示する）(3)
autoprefixer
postcss-sorting ( StyleLintでソートする )
cssnano ( CSSのminify )


コード整形とリント

StileLint(3)
stylelint ( StyleLint本体 )
stylelint-webpack-plugin ( ビルド時にstylelintを実行 )
stylelint-scss ( SCSS用のルールセット )
(stylelint-config-standard ( 一般的なCSSのコーディング規約集 ))

Prettier(1)
prettier

EsLint(2)
eslint
eslint-loader

PrettierとESLintの連携 (2)
eslint-plugin-prettier ( Prettierのチェックを同時に実行 )
eslint-config-prettier ( Prettierと競合するルールを無効化 )

PrettierとStyleLintの連携 (2)
stylelint-prettier( Prettierのチェックを同時に実行 )
stylelint-config-prettier ( Prettierと競合するルールを無効化 )


Images/Files(4)
image-webpack-loader ( 画像ファイルの最適化 )
copy-webpack-plugin ( ファイルのコピー )
clean-webpack-plugin ( ビルドするたびに、ビルドしたフォルダを削除する )
webpack-merge ( JSファイルをマージする )

Git(2)
husky ( gitコマンドをきっかけに指定したコマンドを実行 )
lint-staged ( ステージングされたファイルにLint )

サーバー(1)
webpack-dev-server
or
browser-sync-webpack-plugin

React(2)
react
react-dom

TypeScript(2)
typescript ( TypeScript本体 )
ts-loader ( BabelでTypeScriptを読み込めるようにする )
@types/react



設定ファイル
.browserlistrc.json
.babelrc.json
.prettier.json
.eslintrc.json
.stylelintrc.json
postcss.config.js
tsconfig.json

jQuery(1)
`jquery`


## tips

- [pugを使用して、imageを管理する](https://jackswim3411.hatenablog.com/entry/2020/08/30/003725)
