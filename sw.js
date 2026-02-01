self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Basit fetch stratejisi
  e.respondWith(fetch(e.request));
});
