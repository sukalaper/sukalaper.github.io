self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('sukalaper-cache').then((cache) => {
      return cache.addAll([
        '/',
        'blog/'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
