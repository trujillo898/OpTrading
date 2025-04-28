self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('trading-pro-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
        // Puedes agregar CSS, JS, imágenes aquí también si quieres cachearlas
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
