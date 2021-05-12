const path = require("path")
const src = path.resolve(__dirname, "../src")
const pub = path.resolve(__dirname, "../public")
const publicPath = "/"

const entryJS = "/scripts/main.js"
const serverIndexHTML = "pages/index.html"

const devOutputJS = "scripts/[name].bundle.js"
const devOutputCSS = "styles/[name].bundle.css"
const devAssetFile = "images/[name].bundle[ext]"

const prodOutputJS = "scripts/[name].[chunkhash].js"
const prodOutputCSS= "styles/[name].[chunkhash].css"
const prodAssetFile = "images/[contenthash][ext]"

exports.paths = {
  src: src,
  pub: pub,
  entryJS: src + entryJS,
  publicPath: publicPath,
}

exports.dev = {
  mode: "development",
  devtool: "source-map",
  output: {
    filenameJS: devOutputJS,
    filenameCSS: devOutputCSS,
    assetFile: devAssetFile,
  },
  serverIndexHTML: serverIndexHTML
}

exports.prod = {
  mode: "production",
  devtool: false,
  output: {
    filenameJS: prodOutputJS,
    filenameCSS: prodOutputCSS,
    assetFile: prodAssetFile,
  }
}
