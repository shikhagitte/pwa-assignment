const staticVSTeddy = "vs-teddy-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/teddy1.jpg",
  "/images/teddy2.jpg",
  "/images/teddy3.jpg",
  "/images/teddy5.jpg",
  "/images/teddy6.jpg",
  "/images/teddy7.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticVSTeddy).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
