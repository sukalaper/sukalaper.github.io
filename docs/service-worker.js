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
    'p/03.html',
    'p/04.html',
    'p/05.html',
    'p/06.html',
    'p/07.html',
    'p/08.html',
    'p/09.html',
    'p/10.html',
    'p/11.html',
    'p/12.html',
    'p/13.html',
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
