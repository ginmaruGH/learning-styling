const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const globImporter = require('node-sass-glob-importer');
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");


module.exports = {
  target: ["web", "es5"],
  mode: "development",
  devtool: "source-map",
  entry: "./src/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "scripts/[name].bundle.js",
    assetModuleFilename: "images/[name].bundle[ext]",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: "styles/style.css",
    }),
    new StyleLintPlugin({
      configFile: ".stylelintrc",
      fix: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "images" },
        { from: "./src/fonts", to: "fonts" },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: "70-80",
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 10,
        colors: 256,
      },
      svgo: {},
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true,
        }),
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Main Page",
      favicon: "./src/images/favicon.png",
      template: "./src/contents/index.pug",
      filename: "contents/index.html",
      inject: "body",
      // inject: false,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/contents/sub.pug",
      filename: "contents/sub.html",
      inject: "body",
      minify: false,
    }),
  ],
  module: {
    rules: [
      // Eslint
      // ==================================================
      {
        enforce: "pre",
        test: /\.(js|ts)$/i,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          //autofixモードの有効化
          fix: true,
          //エラー検出時にビルド中断
          failOnError: true,
        },
      },

      // Babel
      // ==================================================
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // TypeScript
      // ==================================================
      {
        // test: /\.ts$/i,
        // exclude: /node_modules/,
        // use: "ts-loader",
      },
      // Styles
      // ================================================
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
                importer: globImporter(),
              },
            },
          },
        ],
      },
      // HTML/pug
      // ==================================================
      {
        test: /\.pug$/i,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
      // Images
      // ==================================================
      {
        test: /\.(?:icon|gif|png|jpe?g)$/i,
        type: "asset/resource",
        // generator: {
        //   filename: "images/[name].bundle[ext]",
        // },
        // type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 100 * 1024, // 100KB
        //   },
        // },
      },
      // Fonts and Inline
      // ==================================================
      {
        test: /\.(svg|eot|wof|woff2?|ttf|otf)$/i,
        type: "asset/inline",
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    open: true, //起動時にブラウザを開く
    overlay: true, //エラーをオーバーレイ表示
    compress: true,
    hot: true,
    port: 8080,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
