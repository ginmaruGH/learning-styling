const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { ProvidePlugin } = require("webpack")

const { paths } = require("./setting")

module.exports =
  ({ outputFileJS, outputFileCSS, assetFile }) => ({
  target: ["web", "es5"],
  stats: {
    children: true,
  },
  entry: {
    site: paths.entryJS
  },
  output: {
    filename: outputFileJS,
    chunkFilename: outputFileJS,
    assetModuleFilename: assetFile,
    path: paths.pub,
    publicPath: paths.publicPath,
    // publicPath: "./", // no-local-server
    clean: true
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".json"],
    alias: {
      "@": paths.src,
      "@img": paths.src + "/images"
    },
    modules: [paths.src, "node_modules"]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        fonts: {
          name: "fonts",
          test: /[\\/]src[\\/]fonts[\\/]/
        },
        default: false
      }
    }
  },

  plugins: [
    new ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      utils: [paths.src + "/scripts/_utils", "default"]
    }),
    new MiniCssExtractPlugin({
      filename: outputFileCSS
    }),
  ],

  module: {
    rules: [
      // Babel
      // ==================================================
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },

      // Styles
      // ==================================================
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2
            }
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      },

      // Images
      // ==================================================
      {
        test: /\.(?:icon|gif|png|jpe?g)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },

      // Fonts and SVG
      // ==================================================
      {
        test: /\.svg$/i,
        type: "asset/inline"
      },
      {
        test: /\.(eot|wof|woff2?|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "styles/fonts/[contenthash][ext]"
        }
      },
      //--- HTML/pug
      // ==================================================
      {
        // test: /\.html$/i,
        test: /\.pug$/i,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  }
})
