import { hello, example } from "scripts/sub"
import "styles/main.scss"
import webpackLogo from "images/webpack-logo2.svg"


console.log("JavaScript 変換成功")

hello()

window.addEventListener("load", () => {
  console.log("IE11で表示されたらJavaScript Transpile成功")
})


const logo = document.createElement("img")
logo.src = webpackLogo

const heading = document.createElement("h1")
// heading.textContent = String(example())
heading.textContent = "Interesting!"

console.log(String(example()))

const app = document.querySelector("#root")
// app.appendChild(logo, heading)


