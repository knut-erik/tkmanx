const staticDevTkmanx = "tkmanx-v1"
const assets = [
  "/css/tk.css",
  "/img/2019_map.jpg",
  "/img/tkmanx_header.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevTkmanx).then(cache => {
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
