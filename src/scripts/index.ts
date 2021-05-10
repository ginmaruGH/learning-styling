import { hello, example } from "./sub";
import "../styles/main.scss";

console.log("JavaScript 変換成功");

hello();

window.addEventListener("load", () => {
  console.log("IE11で表示されたらJavaScript Transpile成功");
});


// Test import of an asset
import webpackLogo from "../images/webpack-logo2.svg";


// Appending to the DOM
const logo = document.createElement("img");
logo.src = webpackLogo;

const heading = document.createElement("h1");
heading.textContent = String(example());

const app = document.querySelector("audio");
app.append(logo, heading);
