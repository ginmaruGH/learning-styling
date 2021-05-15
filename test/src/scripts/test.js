const globule = require("globule")
const path = require("path")

const data = [
  "./src/pages/a.pug",
  "./src/pages/b.pug",
  "./src/pages/utils/c.pug",
  "./src/pages/utils/_d.pug",
  "./src/pages/utils/_e.pug",
  "./src/pages/_utils/_f.pug",
  "./src/pages/_g.pug"
]

const src = path.resolve(__dirname, "../../src/pages")

exports.findData = globule.find({
  src: [src + "**/*.pug", "!**/_*.pug"],
  srcBase: "src/pages",
  prefixBase: true,
  matchBase: true
  
})

