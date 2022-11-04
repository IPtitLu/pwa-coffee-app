const staticDevCoffee = "dev-dog-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/chien1.jpg",
  "/images/chien2.jpg",
  "/images/chien3.jpg",
  "/images/chien4.jpg",
  "/images/chien5.jpg",
  "/images/chien6.jpg",
  "/images/chien7.jpg",
  "/images/chien8.jpg",
  "/images/chien9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
