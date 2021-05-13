const { merge } = require("webpack-merge")
const webpack = require("webpack")
const webpackCommon = require("./webpack.common")
const pages = require("./webpack.sub")
const { dev, paths } = require("./setting")

const outputFileJS = dev.output.filenameJS
const outputFileCSS = dev.output.filenameCSS
const assetFile = dev.output.assetFile

const localhost = "http://localhost:"
const port = 8080

module.exports = () =>
  merge(
    pages,
    webpackCommon({
      outputFileJS,
      outputFileCSS,
      assetFile
    }),
    {
      mode: dev.mode,
      devtool: dev.devtool,
      devServer: {
        contentBase: paths.pub,
        contentBasePublicPath: localhost + port + "/",
        publicPath: paths.publicPath,
        index: dev.serverIndexHTML,
        port: port,
        open: true,
        overlay: true,
        compress: true,
        hot: true,
        historyApiFallback: true,
        watchOptions: {
          ignored: /node_modules/
        }
      },
      plugins: [new webpack.HotModuleReplacementPlugin()]
    }
  )
