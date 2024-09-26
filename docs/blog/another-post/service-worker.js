
self.addEventListener('install', (event) => {
  const filesToCache = [
    '/',
  ];

  const blogPosts = [
    '/',
  ];

  event.waitUntil(
    caches.open('sukalaper-cache').then((cache) => {
      return cache.addAll(filesToCache.concat(blogPosts));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        if (networkResponse.ok && networkResponse.headers.get('content-type').includes('text/html')) {
          caches.open('sukalaper-cache').then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      });
    })
  );
});
