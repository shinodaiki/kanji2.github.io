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
    url: '/index.html',
    revision: '12345'
  },
  {
    url: '/style.css',
    revision: '12345'
  },
  { 
　url: '/1.js',
    revision: '12345'
  },
  { 
  url: '/2.js',
    revision: '12345'
  },
])