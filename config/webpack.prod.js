const { merge } = require("webpack-merge")

const commonConfig = require("./webpack.common")
const { prod } = require("./setting")
const outputFileJS = prod.output.filenameJS
const outputFileCSS = prod.output.filenameCSS
const assetFile = prod.output.assetFile

module.exports = () =>
  merge(
    commonConfig({
      outputFileJS,
      outputFileCSS,
      assetFile
    }),
    {
      mode: prod.mode,
      devtool: prod.devtool
    }
  )
