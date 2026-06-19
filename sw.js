// v88 自爆型SW - 全キャッシュ消去してネットワーク直接アクセスに切替
self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) { return caches.delete(k); }));
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) { return caches.delete(k); }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// キャッシュせず全てネットワークから取得
self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
