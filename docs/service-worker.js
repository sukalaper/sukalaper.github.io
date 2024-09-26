
self.addEventListener('install', (event) => {
  const filesToCache = [
    'index.html',
    'about.html',
    'blog.html',
    'paper.html',
    '404.html',
  ];

  const blogPosts = [
    'blog/another-post/01.html',
    'blog/arch-linux/01.html',
    'blog/arch-linux/02.html',
    'blog/arch-linux/03.html',
    'blog/arch-linux/04.html',
    'blog/arch-linux/05.html',
    'blog/arch-linux/06.html',
    'blog/arch-linux/07.html',
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
