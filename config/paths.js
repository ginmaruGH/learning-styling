// このファイルからのsrc or publicフォルダの相対位置を指定
// src or publicフォルダの絶対パスを保存
const path = require("path")
module.exports = {
  // ~/src
  src: path.resolve(__dirname, "../src"),
  // ~/public
  public: path.resolve(__dirname, "../public"),
};
