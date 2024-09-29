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
    'blog/another-post/02.html',
    'blog/another-post/03.html',
    'blog/another-post/04.html',
    'blog/another-post/05.html',
    'blog/arch-linux/01.html',
    'blog/arch-linux/02.html',
    'blog/arch-linux/03.html',
    'blog/arch-linux/04.html',
    'blog/arch-linux/05.html',
    'blog/arch-linux/06.html',
    'blog/arch-linux/07.html',
    'blog/arch-linux/08.html',
    'blog/arch-linux/09.html',
    'blog/arch-linux/10.html',
    'blog/arch-linux/11.html',
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
