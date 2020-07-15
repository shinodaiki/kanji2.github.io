const NAME = 'kanji2';
const VERSION = '002';
const CACHE_NAME = NAME + VERSION;
const urlsToCache = [
  './index.html',
  './icon.png',
  './style.css',
];

// ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/kanji2.github.io/index.html',
    revision: '20000'
  },
  {
    url: '/kanji2.github.io/style.css',
    revision: '20000'
  },
  { 
　url: '/kanji2.github.io/1.js',
    revision: '20000'
  },
  { 
  url: '/kanji2.github.io/2.js',
    revision: '20000'
  },
  { 
  url: '/kanji2.github.io/icon.png',
    revision: '20000'
  },
])


self.addEventListener('fetch', function(event) {

});