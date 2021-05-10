// import { hello, example } from "./sub"
import { hello, example } from "scripts/sub"
// import "../styles/main.scss"
import "styles/main.scss"
// import webpackLogo from "../images/webpack-logo2.svg"
import webpackLogo from "images/webpack-logo2.svg"

const logo = document.createElement("img")
logo.src = webpackLogo

const heading = document.createElement("h1")
heading.textContent = String(example())

console.log(String(example()))

const app = document.querySelector("#root")
app.append(logo, heading)

console.log("JavaScript 変換成功")

hello()

window.addEventListener("load", () => {
  console.log("IE11で表示されたらJavaScript Transpile成功")
})

