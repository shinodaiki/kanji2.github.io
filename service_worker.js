// ファイブラリのインポート
importScripts('https://shinodaiki.github.io/kanji2.github.io/service_worker.js')

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
　url: '/manifest.json',
    revision: '12345'
  },
])