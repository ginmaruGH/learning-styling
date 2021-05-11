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


CSS(css-loader + 1)
style-loader ( スタイルを`<style>`要素としてページに反映させる )
mini-css-extract-plugin ( CSSをJSにバンドルせず、別ファイルにする )
css-loader ( cssを読み込む )


SASS(2)
sass ( SASS本体 )
sass-loader ( webpackでSASSを読み込めるようにする )


PostCSS(5)
postcss ( PostCSS本体 )
postcss-loader ( webpackでPostCSSを使えるようにする )
postcss.config.js


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
eslint-webpack-plugin
eslint-loader※非推奨


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


ローカルサーバー(1)
webpack-dev-server
or
browser-sync-webpack-plugin


React(2)
react
react-dom
styled-components


TypeScript(2)
typescript ( TypeScript本体 )
ts-loader ( BabelでTypeScriptを読み込めるようにする )
types/import.d.ts
@types/react



設定ファイル
.browserlistrc( package.jsonに記載 )
(extends browserslist-config-google)
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

-[styled-componentsを使ったCSS設計](https://qiita.com/taneba/items/4547830b461d11a69a20)

- [eslint, prettierの最新の設定](https://zenn.dev/tatsurom/articles/7afc52e771ed08d156ef)

- コード整形
  - EditorConfig
    - エディターのインデントや文字コード、改行コードなどの基本設定を定義して、異なるエディター間でも共有できる手法
  - リントツール
    - ESLint
    - TSLint
    - EditorConfigと比べて細かい指定ができ、if文の括弧の前後に空白を入れるかや改行位置の指定などの定義ができる。指定したフォーマットから外れていれば、警告やエラーをだす。--fixオプションを指定すると、スペースなどのスタイル違反を自動的に修正することもできる。
  - コードフォーマッター
    - Prettier
    - 定義したフォーマットに自動的に整形してくれる。
    - コードの1行の長さを考慮して可読性が高くなるように変換してくれるなど。


- webpack
  - [DevServer](https://webpack.js.org/configuration/dev-server/)
  - [webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server)
  - [Development](https://webpack.js.org/guides/development/#choosing-a-development-tool)
  - [Caching](https://webpack.js.org/guides/caching/#root)
  - [Output](https://webpack.js.org/configuration/output/#outputchunkfilename)
