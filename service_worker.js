var CACHE_NAME  = "MKit-cache-v1";
var urlsToCache = [
    "https://shinodaiki.github.io/kanji2.github.io/style.css",
    "https://shinodaiki.github.io/kanji2.github.io/index.html",
    "https://shinodaiki.github.io/kanji2.github.io/service_worker.js",
    "https://shinodaiki.github.io/kanji2.github.io/manifest.json"
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(
            function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request)
        .then(
        function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});