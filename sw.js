const NAME = 'kanji2';
const VERSION = '002';
const CACHE_NAME = NAME + VERSION;
const urlsToCache = [
  './index.html',
  './icon.png',
  './style.css',
];

// Service Worker へファイルをインストール
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
