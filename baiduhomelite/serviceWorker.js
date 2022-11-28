var cacheName = 'BaiduHomeLite-v2';
var appShellFiles = [
    './',
    'index.html',
    'logo.png',
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
]
this.addEventListener('install', function (event) {
    console.log('[Service Worker] Install', event);
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(appShellFiles);
        })
    );
});

this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: ' + event.request.url);
            return r || fetch(event.request).then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    console.log('[Service Worker] Caching new resource: ' + event.request.url);
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});