const container = document.querySelector(".container")
const teddy = [
  { name: "Teddy1", image: "images/teddy1.jpg" },
  { name: "Teddy2", image: "images/teddy2.jpg" },
  { name: "Teddy3", image: "images/teddy3.jpg" },
  { name: "Teddy4", image: "images/teddy5.jpg" },
  { name: "Teddy5", image: "images/teddy6.jpg" },
  { name: "Teddy6", image: "images/teddy7.jpg" },

]
const showTeddy = () => {
    let output = ""
    teddy.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Buy</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showTeddy)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
