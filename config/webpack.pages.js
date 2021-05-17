const HtmlWebpackPlugin = require("html-webpack-plugin")
const { paths } = require("./setting")
// const globule = require("globule")
// const findPugs = globule.find({
//   src: [paths.src + "/**/*.pug"],
//   ignore: ["**/_*.pug", "_**/"],
//   srcBase: "src/pages",
//   matchBase: true
// })
// const htmlPluginConfig = findPugs.map((findPug) => {
//   const splitData = findPug.split("/")
//   const i = splitData.length
//   const pagesFolder = splitData[i - 2]
//   const pugFile = splitData[i - 1]
//   const htmlFile = pugFile.replace(new RegExp(/.pug/, "i"), ".html")
//   const templateHTML = pagesFolder + "/" + htmlFile
//     return new HtmlWebpackPlugin({
//       filename: findPug,
//       template: templateHTML
//     })
// })

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + "/pages/index.pug",
      filename: "index.html",
      scriptLoading: "defer"
    }),
    new HtmlWebpackPlugin({
      template: paths.src + "/pages/contents.pug",
      filename: "contents.html",
      scriptLoading: "defer"
    }),
  ]
}
