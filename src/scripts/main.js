import "@/styles/styles.scss"
import "@/images/favicon32.png"
import "@/images/tent-orange.jpg"
import "@/images/camp-food.jpg"
import "@/images/camp-sky.jpg"
import "@/images/camp-fire.jpg"
import "@/images/camp-table.jpg"
import "@/images/tent.jpg"
import "@/images/tent-green.jpg"
import "@/images/fire.jpg"

let click = document.getElementById("click")

click.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("open")
})

