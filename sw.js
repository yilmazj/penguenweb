self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open("penguin").then(cache =>
      cache.match(e.request).then(res => res || fetch(e.request))
    )
  );
});
