const path = require("path")

// Development
const srcDir = "../src"
const src = path.resolve(__dirname, srcDir)
const devOutputJS = "scripts/[name].bundle.js"
const devOutputCSS = "styles/[name].bundle.css"
const devAssetFile = "images/[name].bundle[ext]"

// Production
const publicDir = "../public"
const pub = path.resolve(__dirname, publicDir)
const prodOutputJS = "scripts/[name].[chunkhash].js"
const prodOutputCSS= "styles/[name].[chunkhash].css"
const prodAssetFile = "images/[contenthash][ext]"

// Index JS-File
const entryJS = "scripts/main.js"

// Local-server Index HTML-File
const serverIndexHTML = "pages/index.html"

// Local Public Path
const publicPath = "/"

exports.paths = {
  src: src,
  pub: pub,
  entryJS: src + "/" + entryJS,
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
