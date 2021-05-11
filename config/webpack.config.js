const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const StylelintPlugin = require("stylelint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const paths = require("./paths")
// ~/src
const srcFullPath = paths.src
// ~/public
const publicFullPath = paths.public

module.exports = {
  target: ["web", "es5"],
  mode: "development",
  devtool: "source-map",
  // mode: "production",
  // devtool: false,
  entry: srcFullPath + "/scripts/index.js",
  output: {
    path: publicFullPath,
    filename: "scripts/bundle-[name].js",
    assetModuleFilename: "images/bundle-[name][ext]",
    publicPath: "../",
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".json"],
    alias: {
      // "@": srcFullPath,
      "@img": srcFullPath + "/images",
    },
    modules: [srcFullPath, "node_modules"],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new StylelintPlugin({
      configFile: ".stylelintrc.json",
      fix: true,
    }),
    new HtmlWebpackPlugin({
      title: "main-page",
      filename: "contents/index.html",
      template: srcFullPath + "/contents/index.pug",
      scriptLoading: "defer",
    }),
    // new HtmlWebpackPlugin({
    //   title: "sub-page",
    //   filename: "contents/sub.html",
    //   // template: paths.src + "/contents/sub.pug",
    //   template: src + "/contents/sub.pug",
    //   scriptLoading: "defer",
    // }),
  ],
  module: {
    rules: [
      // Babel
      // ==================================================
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      // Styles
      // ==================================================
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      // Images
      // ==================================================
      {
        test: /\.(?:icon|gif|png|jpe?g)$/i,
        type: "asset/resource",
        // generator: {
        //   filename: "images/bundle.[name][ext]",
        // },
        // type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 100 * 1024, // 100KB
        //   },
        // },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },

      // Fonts and Inline
      // ==================================================
      {
        test: /\.(svg|eot|wof|woff2?|ttf|otf)$/i,
        type: "asset/inline",
      },

      //--- HTML/pug
      // ==================================================
      {
        // test: /\.html$/i,
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
    ],
  },
};
