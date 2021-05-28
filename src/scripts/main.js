import "@fortawesome/fontawesome-free/js/all"
import "@/styles/styles.scss"

let click = document.getElementById("click")
click.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("open")
})
