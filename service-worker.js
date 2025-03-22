self.addEventListener('install', (event) => {
  const filesToCache = [
    'index.html',
    'about.html',
    'blog.html',
    'paper.html',
    '404.html',
  ];

  const blogPosts = [
    'p/01.html',
    'p/02.html',
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
      if (response) {
        return response; 
      } else {
        return fetch(event.request).catch(() => {
          return caches.match('404.html');
        });
      }
    })
  );
});
